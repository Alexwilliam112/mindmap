import dagre from "dagre";

const fallbackWidth = 180;
const fallbackHeight = 40;

export const applyVisibility = (nodes, edges) => {
  const nodeMap = new Map(nodes.map((n) => [n.id, { ...n, hidden: false }]));
  const edgeMap = new Map(edges.map((e) => [e.id, { ...e, hidden: false }]));

  const adjList = {};
  nodes.forEach((n) => (adjList[n.id] = []));
  edges.forEach((e) => {
    if (adjList[e.source]) adjList[e.source].push(e);
  });

  const traverse = (nodeId, isHiddenByParent) => {
    const node = nodeMap.get(nodeId);
    if (!node) return;

    node.hidden = isHiddenByParent;
    const shouldHideChildren = node.hidden || node.data.isCollapsed;

    const childrenEdges = adjList[nodeId] || [];
    childrenEdges.forEach((edge) => {
      const edgeObj = edgeMap.get(edge.id);
      if (edgeObj) edgeObj.hidden = shouldHideChildren;
      traverse(edge.target, shouldHideChildren);
    });
  };

  traverse("root", false);

  return {
    nodes: Array.from(nodeMap.values()),
    edges: Array.from(edgeMap.values()),
  };
};

// --- THE SUBTREE SEPARATOR ENGINE ---
const applyCousinGaps = (
  dagreGraph,
  nodesInTree,
  visibleEdges,
  cousinGap = 40,
) => {
  if (nodesInTree.length <= 1) return;

  // 1. Map current layout state
  const nodeMap = new Map(
    nodesInTree.map((n) => [
      n.id,
      { id: n.id, _tmpY: dagreGraph.node(n.id).y },
    ]),
  );
  const childrenMap = new Map(nodesInTree.map((n) => [n.id, []]));
  const parentMap = new Map();

  visibleEdges.forEach((e) => {
    if (childrenMap.has(e.source) && nodeMap.has(e.target)) {
      childrenMap.get(e.source).push(e.target);
      parentMap.set(e.target, e.source);
    }
  });

  // 2. Breadth-First Search to organize nodes by topological level
  const levels = [];
  const rootNodes = nodesInTree
    .filter((n) => !parentMap.has(n.id))
    .map((n) => n.id);

  let currentLevel = rootNodes;
  while (currentLevel.length > 0) {
    levels.push(currentLevel);
    const nextLevel = [];
    currentLevel.forEach((nodeId) => {
      nextLevel.push(...childrenMap.get(nodeId));
    });
    currentLevel = nextLevel;
  }

  // 3. Top-Down Cousin Expansion
  levels.forEach((levelNodeIds, levelIndex) => {
    if (levelIndex === 0) return;

    // Sort nodes in this column visually top-to-bottom
    levelNodeIds.sort((a, b) => nodeMap.get(a)._tmpY - nodeMap.get(b)._tmpY);

    let accumulatedShift = 0;
    for (let i = 1; i < levelNodeIds.length; i++) {
      const prevId = levelNodeIds[i - 1];
      const currId = levelNodeIds[i];

      // If they have different parents, trigger the cousin gap
      if (parentMap.get(prevId) !== parentMap.get(currId)) {
        accumulatedShift += cousinGap;
      }

      // Shift this node and its entire downstream subtree
      if (accumulatedShift > 0) {
        const shiftDescendants = (nodeId) => {
          nodeMap.get(nodeId)._tmpY += accumulatedShift;
          childrenMap
            .get(nodeId)
            .forEach((childId) => shiftDescendants(childId));
        };
        shiftDescendants(currId);
      }
    }
  });

  // 4. Bottom-Up Parent Re-centering
  for (let i = levels.length - 2; i >= 0; i--) {
    levels[i].forEach((nodeId) => {
      const childrenIds = childrenMap.get(nodeId);
      if (childrenIds.length > 0) {
        // Find the absolute top and bottom child to find the true mathematical center
        const minChildY = Math.min(
          ...childrenIds.map((id) => nodeMap.get(id)._tmpY),
        );
        const maxChildY = Math.max(
          ...childrenIds.map((id) => nodeMap.get(id)._tmpY),
        );
        nodeMap.get(nodeId)._tmpY = (minChildY + maxChildY) / 2;
      }
    });
  }

  // 5. Inject the balanced coordinates back into Dagre's memory
  nodesInTree.forEach((n) => {
    dagreGraph.node(n.id).y = nodeMap.get(n.id)._tmpY;
  });
};

export const getLayoutedElements = (currentNodes, currentEdges) => {
  const { nodes: visNodes, edges: visEdges } = applyVisibility(
    currentNodes,
    currentEdges,
  );

  const visibleNodes = visNodes.filter((n) => !n.hidden);
  const visibleEdges = visEdges.filter((e) => !e.hidden);

  const rootNode = visibleNodes.find((n) => n.id === "root");
  if (!rootNode) return { nodes: visNodes, edges: visEdges };

  const leftNodes = visibleNodes.filter(
    (n) => n.data.direction === "L" || n.id === "root",
  );
  const rightNodes = visibleNodes.filter(
    (n) => n.data.direction === "R" || n.id === "root",
  );

  const ranksep = 90;
  const nodesep = 12; // Keep siblings extremely tight

  // --- LEFT TREE LAYOUT ---
  const dagreLeft = new dagre.graphlib.Graph();
  dagreLeft.setDefaultEdgeLabel(() => ({}));
  dagreLeft.setGraph({ rankdir: "RL", ranksep, nodesep });

  leftNodes.forEach((n) => {
    const width = n.measured?.width ?? fallbackWidth;
    const height = n.measured?.height ?? fallbackHeight;
    dagreLeft.setNode(n.id, { width, height });
  });

  visibleEdges
    .filter((e) => dagreLeft.hasNode(e.source) && dagreLeft.hasNode(e.target))
    .forEach((e) => dagreLeft.setEdge(e.source, e.target));

  dagre.layout(dagreLeft);

  // Intercept and Balance Left Tree
  applyCousinGaps(dagreLeft, leftNodes, visibleEdges, 40);

  // --- RIGHT TREE LAYOUT ---
  const dagreRight = new dagre.graphlib.Graph();
  dagreRight.setDefaultEdgeLabel(() => ({}));
  dagreRight.setGraph({ rankdir: "LR", ranksep, nodesep });

  rightNodes.forEach((n) => {
    const width = n.measured?.width ?? fallbackWidth;
    const height = n.measured?.height ?? fallbackHeight;
    dagreRight.setNode(n.id, { width, height });
  });

  visibleEdges
    .filter((e) => dagreRight.hasNode(e.source) && dagreRight.hasNode(e.target))
    .forEach((e) => dagreRight.setEdge(e.source, e.target));

  dagre.layout(dagreRight);

  // Intercept and Balance Right Tree
  applyCousinGaps(dagreRight, rightNodes, visibleEdges, 40);

  // --- FINAL ZEROING OUT ---
  const leftRootPos = dagreLeft.node("root");
  const rightRootPos = dagreRight.node("root");

  const finalNodes = visNodes.map((node) => {
    if (node.hidden) return node;

    if (node.id === "root") {
      node.position = { x: 0, y: 0 };
    } else if (node.data.direction === "L") {
      const pos = dagreLeft.node(node.id);
      node.position = {
        x: pos.x - leftRootPos.x,
        y: pos.y - leftRootPos.y,
      };
    } else if (node.data.direction === "R") {
      const pos = dagreRight.node(node.id);
      node.position = {
        x: pos.x - rightRootPos.x,
        y: pos.y - rightRootPos.y,
      };
    }
    return node;
  });

  return { nodes: finalNodes, edges: visEdges };
};
