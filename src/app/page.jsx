"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  MiniMap,
  Panel, // --- NEW: Import Panel for the toolbar
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import MindMapNode from "../components/MindMapNode";
import { getLayoutedElements } from "../utils/layout";

const nodeTypes = { mindmap: MindMapNode };

const initialNodes = [
  {
    id: "root",
    type: "mindmap",
    position: { x: 0, y: 0 },
    data: { label: "Core System", direction: "ROOT", isCollapsed: false },
  },
];

export default function MindMapPage() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const runLayout = useCallback((currentNodes, currentEdges) => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      currentNodes,
      currentEdges,
    );
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, []);

  useEffect(() => {
    runLayout(nodes, edges);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  const onAddChild = useCallback(
    (parentId, direction) => {
      const uniqueId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString(36) + Math.random().toString(36).substring(2);

      const newNodeId = `node_${uniqueId}`;

      const newNode = {
        id: newNodeId,
        type: "mindmap",
        position: { x: 0, y: 0 },
        data: { label: `New Branch`, direction, isCollapsed: false },
      };

      const sourceHandleId = direction === "L" ? "source-left" : "source-right";
      const targetHandleId = direction === "L" ? "target-right" : "target-left";

      const newEdge = {
        id: `edge_${parentId}_${newNodeId}`,
        source: parentId,
        target: newNodeId,
        sourceHandle: sourceHandleId,
        targetHandle: targetHandleId,
        type: "default",
      };

      setNodes((nds) => {
        if (nds.some((n) => n.id === newNodeId)) return nds;

        const updatedNodes = [...nds, newNode];

        setEdges((eds) => {
          if (eds.some((e) => e.id === newEdge.id)) return eds;
          const updatedEdges = [...eds, newEdge];

          setTimeout(() => runLayout(updatedNodes, updatedEdges), 0);
          return updatedEdges;
        });

        return updatedNodes;
      });
    },
    [runLayout],
  );

  const onToggleCollapse = useCallback(
    (nodeId) => {
      setNodes((nds) => {
        const updatedNodes = nds.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: { ...node.data, isCollapsed: !node.data.isCollapsed },
            };
          }
          return node;
        });

        setEdges((eds) => {
          setTimeout(() => runLayout(updatedNodes, eds), 0);
          return eds;
        });

        return updatedNodes;
      });
    },
    [runLayout],
  );

  const onUpdateLabel = useCallback((nodeId, newLabel) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return { ...node, data: { ...node.data, label: newLabel } };
        }
        return node;
      }),
    );
  }, []);

  const onDeleteNode = useCallback(
    (nodeId) => {
      if (nodeId === "root") return;

      const getDescendants = (id, edgesArr) => {
        const outEdges = edgesArr.filter((e) => e.source === id);
        let children = outEdges.map((e) => e.target);
        outEdges.forEach((e) => {
          children = [...children, ...getDescendants(e.target, edgesArr)];
        });
        return children;
      };

      const nodesToDelete = [nodeId, ...getDescendants(nodeId, edges)];

      const updatedNodes = nodes.filter((n) => !nodesToDelete.includes(n.id));
      const updatedEdges = edges.filter(
        (e) =>
          !nodesToDelete.includes(e.source) &&
          !nodesToDelete.includes(e.target),
      );

      setNodes(updatedNodes);
      setEdges(updatedEdges);
      setTimeout(() => runLayout(updatedNodes, updatedEdges), 0);
    },
    [nodes, edges, runLayout],
  );

  // --- NEW: Global Expand/Collapse Functions ---
  const onExpandAll = useCallback(() => {
    setNodes((nds) => {
      const updatedNodes = nds.map((n) => ({
        ...n,
        data: { ...n.data, isCollapsed: false },
      }));
      setTimeout(() => runLayout(updatedNodes, edges), 0);
      return updatedNodes;
    });
  }, [edges, runLayout]);

  const onCollapseAll = useCallback(() => {
    setNodes((nds) => {
      const updatedNodes = nds.map((n) => ({
        ...n,
        data: { ...n.data, isCollapsed: true },
      }));
      setTimeout(() => runLayout(updatedNodes, edges), 0);
      return updatedNodes;
    });
  }, [edges, runLayout]);

  // Inject functions and calculate child counts
  const nodesWithActions = useMemo(() => {
    // Tally up direct children mapping
    const childrenCountMap = {};
    edges.forEach((e) => {
      childrenCountMap[e.source] = (childrenCountMap[e.source] || 0) + 1;
    });

    return nodes.map((node) => ({
      ...node,
      data: {
        ...node.data,
        onAddChild,
        onToggleCollapse,
        onUpdateLabel,
        onDeleteNode,
        hiddenChildCount: childrenCountMap[node.id] || 0, // Pass count into node
      },
    }));
  }, [nodes, edges, onAddChild, onToggleCollapse, onUpdateLabel, onDeleteNode]);

  return (
    <div className="w-screen h-screen bg-[#F8FAFC] font-sans">
      <ReactFlow
        nodes={nodesWithActions}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        nodesDraggable={true}
        panOnScroll={true}
        zoomOnScroll={false}
        zoomOnPinch={true}
        panOnDrag={true}
        selectionOnDrag={false}
        defaultEdgeOptions={{
          type: "default",
          style: { strokeWidth: 1.5, stroke: "#94A3B8" },
        }}
      >
        <Background color="#CBD5E1" variant="dots" gap={16} size={1} />
        <Controls
          showInteractive={false}
          className="shadow-sm border border-slate-200"
        />
        <MiniMap
          zoomable
          pannable
          nodeColor="#94A3B8"
          maskColor="rgba(248, 250, 252, 0.7)"
          className="border border-slate-200 shadow-sm rounded-md"
        />

        {/* --- NEW: High-Density Utility Toolbar --- */}
        <Panel
          position="top-left"
          className="bg-white border border-slate-200 shadow-sm rounded-md flex overflow-hidden ml-2 mt-2"
        >
          <button
            onClick={onExpandAll}
            className="px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-r border-slate-200 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={onCollapseAll}
            className="px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            Collapse All
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}
