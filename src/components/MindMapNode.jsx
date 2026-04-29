import React, { useState, useEffect, useRef } from "react";
import { Handle, Position } from "@xyflow/react";
import { Trash2 } from "lucide-react";

export default function MindMapNode({ id, data }) {
  const isRoot = data.direction === "ROOT";
  const isLeft = data.direction === "L";
  const isRight = data.direction === "R";

  const [inputValue, setInputValue] = useState(data.label);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue(data.label);
  }, [data.label]);

  const onBlur = () => {
    if (inputValue !== data.label) {
      data.onUpdateLabel(id, inputValue);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <div className="relative group px-3 py-2 bg-white rounded-md shadow-sm min-w-[160px] max-w-[240px] hover:shadow-md transition-shadow">
      {/* Absolute Trash Icon Button */}
      {!isRoot && (
        <button
          onClick={() => data.onDeleteNode(id)}
          title="Delete node and all descendants"
          className="nodrag nowheel absolute -top-2 -right-2 p-1 bg-white rounded-full border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-red-400 hover:text-red-600 hover:bg-red-50 z-20"
        >
          <Trash2 size={13} strokeWidth={2.5} />
        </button>
      )}

      {/* --- NEW: Floating Child Count Badge --- */}
      {data.isCollapsed && data.hiddenChildCount > 0 && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-[9px] font-bold rounded-full shadow-sm z-10 border-2 border-white
            ${isLeft ? "-left-2.5" : "-right-2.5"}
          `}
        >
          {data.hiddenChildCount}
        </div>
      )}

      {/* Connection Targets */}
      {isLeft && (
        <Handle
          type="target"
          position={Position.Right}
          id="target-right"
          className="w-1.5 h-4 rounded-sm !bg-slate-300 border-none -mr-1"
        />
      )}
      {isRight && (
        <Handle
          type="target"
          position={Position.Left}
          id="target-left"
          className="w-1.5 h-4 rounded-sm !bg-slate-300 border-none -ml-1"
        />
      )}

      <div className="flex flex-col">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          rows={1}
          className="nodrag nowheel w-full resize-none overflow-hidden text-[12px] font-medium text-slate-800 leading-tight bg-transparent outline-none border-b border-transparent focus:border-blue-500 transition-colors relative z-10"
          placeholder="Enter node name..."
        />

        <div className="flex justify-between items-center gap-1 mt-1 pt-1 border-t border-slate-50 relative z-10">
          {(isRoot || isLeft) && (
            <button
              onClick={() => data.onAddChild(id, "L")}
              className="text-[8.5px] uppercase tracking-wider font-semibold text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-1 py-0.5 rounded transition-colors"
            >
              + L
            </button>
          )}

          {!isRoot && (
            <button
              onClick={() => data.onToggleCollapse(id)}
              className="text-[8.5px] uppercase tracking-wider font-semibold text-blue-500 hover:text-blue-800 hover:bg-blue-50 px-1 py-0.5 rounded transition-colors mx-auto"
            >
              {data.isCollapsed ? "Show" : "Hide"}
            </button>
          )}

          {(isRoot || isRight) && (
            <button
              onClick={() => data.onAddChild(id, "R")}
              className="text-[8.5px] uppercase tracking-wider font-semibold text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-1 py-0.5 rounded transition-colors"
            >
              + R
            </button>
          )}
        </div>
      </div>

      {/* Connection Sources */}
      {(isRoot || isLeft) && (
        <Handle
          type="source"
          position={Position.Left}
          id="source-left"
          className="w-1.5 h-4 rounded-sm !bg-slate-300 border-none -ml-1"
        />
      )}
      {(isRoot || isRight) && (
        <Handle
          type="source"
          position={Position.Right}
          id="source-right"
          className="w-1.5 h-4 rounded-sm !bg-slate-300 border-none -mr-1"
        />
      )}
    </div>
  );
}
