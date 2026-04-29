(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MindMapNode.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MindMapNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_babel-plugin-react-compiler@1.0.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_babel-plugin-react-compiler@1.0.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+react@12.10.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$76$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+system@0.0.76/node_modules/@xyflow/system/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$14$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@1.14.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function MindMapNode({ id, data }) {
    _s();
    const isRoot = data.direction === "ROOT";
    const isLeft = data.direction === "L";
    const isRight = data.direction === "R";
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(data.label);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MindMapNode.useEffect": ()=>{
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
    }["MindMapNode.useEffect"], [
        inputValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MindMapNode.useEffect": ()=>{
            setInputValue(data.label);
        }
    }["MindMapNode.useEffect"], [
        data.label
    ]);
    const onBlur = ()=>{
        if (inputValue !== data.label) {
            data.onUpdateLabel(id, inputValue);
        }
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            e.target.blur();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group px-3 py-2 bg-white rounded-md shadow-sm min-w-[160px] max-w-[240px] hover:shadow-md transition-shadow",
        children: [
            !isRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>data.onDeleteNode(id),
                title: "Delete node and all descendants",
                className: "nodrag nowheel absolute -top-2 -right-2 p-1 bg-white rounded-full border border-slate-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-red-400 hover:text-red-600 hover:bg-red-50 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$1$2e$14$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 13,
                    strokeWidth: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/components/MindMapNode.jsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            data.isCollapsed && data.hiddenChildCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-[9px] font-bold rounded-full shadow-sm z-10 border-2 border-white
            ${isLeft ? "-left-2.5" : "-right-2.5"}
          `,
                children: data.hiddenChildCount
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            isLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$76$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                id: "target-right",
                className: "w-1.5 h-4 rounded-sm !bg-slate-300 border-none -mr-1"
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            isRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "target",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$76$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                id: "target-left",
                className: "w-1.5 h-4 rounded-sm !bg-slate-300 border-none -ml-1"
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        ref: textareaRef,
                        value: inputValue,
                        onChange: (e)=>setInputValue(e.target.value),
                        onBlur: onBlur,
                        onKeyDown: onKeyDown,
                        rows: 1,
                        className: "nodrag nowheel w-full resize-none overflow-hidden text-[12px] font-medium text-slate-800 leading-tight bg-transparent outline-none border-b border-transparent focus:border-blue-500 transition-colors relative z-10",
                        placeholder: "Enter node name..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MindMapNode.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-1 mt-1 pt-1 border-t border-slate-50 relative z-10",
                        children: [
                            (isRoot || isLeft) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>data.onAddChild(id, "L"),
                                className: "text-[8.5px] uppercase tracking-wider font-semibold text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-1 py-0.5 rounded transition-colors",
                                children: "+ L"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MindMapNode.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            !isRoot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>data.onToggleCollapse(id),
                                className: "text-[8.5px] uppercase tracking-wider font-semibold text-blue-500 hover:text-blue-800 hover:bg-blue-50 px-1 py-0.5 rounded transition-colors mx-auto",
                                children: data.isCollapsed ? "Show" : "Hide"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MindMapNode.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            (isRoot || isRight) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>data.onAddChild(id, "R"),
                                className: "text-[8.5px] uppercase tracking-wider font-semibold text-slate-400 hover:text-slate-800 hover:bg-slate-100 px-1 py-0.5 rounded transition-colors",
                                children: "+ R"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MindMapNode.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MindMapNode.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            (isRoot || isLeft) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$76$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Left,
                id: "source-left",
                className: "w-1.5 h-4 rounded-sm !bg-slate-300 border-none -ml-1"
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            (isRoot || isRight) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Handle"], {
                type: "source",
                position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$system$40$0$2e$0$2e$76$2f$node_modules$2f40$xyflow$2f$system$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Position"].Right,
                id: "source-right",
                className: "w-1.5 h-4 rounded-sm !bg-slate-300 border-none -mr-1"
            }, void 0, false, {
                fileName: "[project]/src/components/MindMapNode.jsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MindMapNode.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(MindMapNode, "wk49ILNlGifKbtlI3ZMiRAtW8Ok=");
_c = MindMapNode;
var _c;
__turbopack_context__.k.register(_c, "MindMapNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyVisibility",
    ()=>applyVisibility,
    "getLayoutedElements",
    ()=>getLayoutedElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/dagre@0.8.5/node_modules/dagre/index.js [app-client] (ecmascript)");
;
const fallbackWidth = 180;
const fallbackHeight = 40;
const applyVisibility = (nodes, edges)=>{
    const nodeMap = new Map(nodes.map((n)=>[
            n.id,
            {
                ...n,
                hidden: false
            }
        ]));
    const edgeMap = new Map(edges.map((e)=>[
            e.id,
            {
                ...e,
                hidden: false
            }
        ]));
    const adjList = {};
    nodes.forEach((n)=>adjList[n.id] = []);
    edges.forEach((e)=>{
        if (adjList[e.source]) adjList[e.source].push(e);
    });
    const traverse = (nodeId, isHiddenByParent)=>{
        const node = nodeMap.get(nodeId);
        if (!node) return;
        node.hidden = isHiddenByParent;
        const shouldHideChildren = node.hidden || node.data.isCollapsed;
        const childrenEdges = adjList[nodeId] || [];
        childrenEdges.forEach((edge)=>{
            const edgeObj = edgeMap.get(edge.id);
            if (edgeObj) edgeObj.hidden = shouldHideChildren;
            traverse(edge.target, shouldHideChildren);
        });
    };
    traverse("root", false);
    return {
        nodes: Array.from(nodeMap.values()),
        edges: Array.from(edgeMap.values())
    };
};
// --- THE SUBTREE SEPARATOR ENGINE ---
const applyCousinGaps = (dagreGraph, nodesInTree, visibleEdges, cousinGap = 40)=>{
    if (nodesInTree.length <= 1) return;
    // 1. Map current layout state
    const nodeMap = new Map(nodesInTree.map((n)=>[
            n.id,
            {
                id: n.id,
                _tmpY: dagreGraph.node(n.id).y
            }
        ]));
    const childrenMap = new Map(nodesInTree.map((n)=>[
            n.id,
            []
        ]));
    const parentMap = new Map();
    visibleEdges.forEach((e)=>{
        if (childrenMap.has(e.source) && nodeMap.has(e.target)) {
            childrenMap.get(e.source).push(e.target);
            parentMap.set(e.target, e.source);
        }
    });
    // 2. Breadth-First Search to organize nodes by topological level
    const levels = [];
    const rootNodes = nodesInTree.filter((n)=>!parentMap.has(n.id)).map((n)=>n.id);
    let currentLevel = rootNodes;
    while(currentLevel.length > 0){
        levels.push(currentLevel);
        const nextLevel = [];
        currentLevel.forEach((nodeId)=>{
            nextLevel.push(...childrenMap.get(nodeId));
        });
        currentLevel = nextLevel;
    }
    // 3. Top-Down Cousin Expansion
    levels.forEach((levelNodeIds, levelIndex)=>{
        if (levelIndex === 0) return;
        // Sort nodes in this column visually top-to-bottom
        levelNodeIds.sort((a, b)=>nodeMap.get(a)._tmpY - nodeMap.get(b)._tmpY);
        let accumulatedShift = 0;
        for(let i = 1; i < levelNodeIds.length; i++){
            const prevId = levelNodeIds[i - 1];
            const currId = levelNodeIds[i];
            // If they have different parents, trigger the cousin gap
            if (parentMap.get(prevId) !== parentMap.get(currId)) {
                accumulatedShift += cousinGap;
            }
            // Shift this node and its entire downstream subtree
            if (accumulatedShift > 0) {
                const shiftDescendants = (nodeId)=>{
                    nodeMap.get(nodeId)._tmpY += accumulatedShift;
                    childrenMap.get(nodeId).forEach((childId)=>shiftDescendants(childId));
                };
                shiftDescendants(currId);
            }
        }
    });
    // 4. Bottom-Up Parent Re-centering
    for(let i = levels.length - 2; i >= 0; i--){
        levels[i].forEach((nodeId)=>{
            const childrenIds = childrenMap.get(nodeId);
            if (childrenIds.length > 0) {
                // Find the absolute top and bottom child to find the true mathematical center
                const minChildY = Math.min(...childrenIds.map((id)=>nodeMap.get(id)._tmpY));
                const maxChildY = Math.max(...childrenIds.map((id)=>nodeMap.get(id)._tmpY));
                nodeMap.get(nodeId)._tmpY = (minChildY + maxChildY) / 2;
            }
        });
    }
    // 5. Inject the balanced coordinates back into Dagre's memory
    nodesInTree.forEach((n)=>{
        dagreGraph.node(n.id).y = nodeMap.get(n.id)._tmpY;
    });
};
const getLayoutedElements = (currentNodes, currentEdges)=>{
    const { nodes: visNodes, edges: visEdges } = applyVisibility(currentNodes, currentEdges);
    const visibleNodes = visNodes.filter((n)=>!n.hidden);
    const visibleEdges = visEdges.filter((e)=>!e.hidden);
    const rootNode = visibleNodes.find((n)=>n.id === "root");
    if (!rootNode) return {
        nodes: visNodes,
        edges: visEdges
    };
    const leftNodes = visibleNodes.filter((n)=>n.data.direction === "L" || n.id === "root");
    const rightNodes = visibleNodes.filter((n)=>n.data.direction === "R" || n.id === "root");
    const ranksep = 90;
    const nodesep = 12; // Keep siblings extremely tight
    // --- LEFT TREE LAYOUT ---
    const dagreLeft = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph();
    dagreLeft.setDefaultEdgeLabel(()=>({}));
    dagreLeft.setGraph({
        rankdir: "RL",
        ranksep,
        nodesep
    });
    leftNodes.forEach((n)=>{
        const width = n.measured?.width ?? fallbackWidth;
        const height = n.measured?.height ?? fallbackHeight;
        dagreLeft.setNode(n.id, {
            width,
            height
        });
    });
    visibleEdges.filter((e)=>dagreLeft.hasNode(e.source) && dagreLeft.hasNode(e.target)).forEach((e)=>dagreLeft.setEdge(e.source, e.target));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(dagreLeft);
    // Intercept and Balance Left Tree
    applyCousinGaps(dagreLeft, leftNodes, visibleEdges, 40);
    // --- RIGHT TREE LAYOUT ---
    const dagreRight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphlib.Graph();
    dagreRight.setDefaultEdgeLabel(()=>({}));
    dagreRight.setGraph({
        rankdir: "LR",
        ranksep,
        nodesep
    });
    rightNodes.forEach((n)=>{
        const width = n.measured?.width ?? fallbackWidth;
        const height = n.measured?.height ?? fallbackHeight;
        dagreRight.setNode(n.id, {
            width,
            height
        });
    });
    visibleEdges.filter((e)=>dagreRight.hasNode(e.source) && dagreRight.hasNode(e.target)).forEach((e)=>dagreRight.setEdge(e.source, e.target));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dagre$40$0$2e$8$2e$5$2f$node_modules$2f$dagre$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].layout(dagreRight);
    // Intercept and Balance Right Tree
    applyCousinGaps(dagreRight, rightNodes, visibleEdges, 40);
    // --- FINAL ZEROING OUT ---
    const leftRootPos = dagreLeft.node("root");
    const rightRootPos = dagreRight.node("root");
    const finalNodes = visNodes.map((node)=>{
        if (node.hidden) return node;
        if (node.id === "root") {
            node.position = {
                x: 0,
                y: 0
            };
        } else if (node.data.direction === "L") {
            const pos = dagreLeft.node(node.id);
            node.position = {
                x: pos.x - leftRootPos.x,
                y: pos.y - leftRootPos.y
            };
        } else if (node.data.direction === "R") {
            const pos = dagreRight.node(node.id);
            node.position = {
                x: pos.x - rightRootPos.x,
                y: pos.y - rightRootPos.y
            };
        }
        return node;
    });
    return {
        nodes: finalNodes,
        edges: visEdges
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MindMapPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_babel-plugin-react-compiler@1.0.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.4_babel-plugin-react-compiler@1.0.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@xyflow+react@12.10.2_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/@xyflow/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MindMapNode$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MindMapNode.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/layout.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const nodeTypes = {
    mindmap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MindMapNode$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const initialNodes = [
    {
        id: "root",
        type: "mindmap",
        position: {
            x: 0,
            y: 0
        },
        data: {
            label: "Core System",
            direction: "ROOT",
            isCollapsed: false
        }
    }
];
function MindMapPage() {
    _s();
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialNodes);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const runLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[runLayout]": (currentNodes, currentEdges)=>{
            const { nodes: layoutedNodes, edges: layoutedEdges } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLayoutedElements"])(currentNodes, currentEdges);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
        }
    }["MindMapPage.useCallback[runLayout]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MindMapPage.useEffect": ()=>{
            runLayout(nodes, edges);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MindMapPage.useEffect"], []);
    const onNodesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onNodesChange]": (changes)=>setNodes({
                "MindMapPage.useCallback[onNodesChange]": (nds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyNodeChanges"])(changes, nds)
            }["MindMapPage.useCallback[onNodesChange]"])
    }["MindMapPage.useCallback[onNodesChange]"], []);
    const onEdgesChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onEdgesChange]": (changes)=>setEdges({
                "MindMapPage.useCallback[onEdgesChange]": (eds)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["applyEdgeChanges"])(changes, eds)
            }["MindMapPage.useCallback[onEdgesChange]"])
    }["MindMapPage.useCallback[onEdgesChange]"], []);
    const onAddChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onAddChild]": (parentId, direction)=>{
            const uniqueId = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2);
            const newNodeId = `node_${uniqueId}`;
            const newNode = {
                id: newNodeId,
                type: "mindmap",
                position: {
                    x: 0,
                    y: 0
                },
                data: {
                    label: `New Branch`,
                    direction,
                    isCollapsed: false
                }
            };
            const sourceHandleId = direction === "L" ? "source-left" : "source-right";
            const targetHandleId = direction === "L" ? "target-right" : "target-left";
            const newEdge = {
                id: `edge_${parentId}_${newNodeId}`,
                source: parentId,
                target: newNodeId,
                sourceHandle: sourceHandleId,
                targetHandle: targetHandleId,
                type: "default"
            };
            setNodes({
                "MindMapPage.useCallback[onAddChild]": (nds)=>{
                    if (nds.some({
                        "MindMapPage.useCallback[onAddChild]": (n)=>n.id === newNodeId
                    }["MindMapPage.useCallback[onAddChild]"])) return nds;
                    const updatedNodes = [
                        ...nds,
                        newNode
                    ];
                    setEdges({
                        "MindMapPage.useCallback[onAddChild]": (eds)=>{
                            if (eds.some({
                                "MindMapPage.useCallback[onAddChild]": (e)=>e.id === newEdge.id
                            }["MindMapPage.useCallback[onAddChild]"])) return eds;
                            const updatedEdges = [
                                ...eds,
                                newEdge
                            ];
                            setTimeout({
                                "MindMapPage.useCallback[onAddChild]": ()=>runLayout(updatedNodes, updatedEdges)
                            }["MindMapPage.useCallback[onAddChild]"], 0);
                            return updatedEdges;
                        }
                    }["MindMapPage.useCallback[onAddChild]"]);
                    return updatedNodes;
                }
            }["MindMapPage.useCallback[onAddChild]"]);
        }
    }["MindMapPage.useCallback[onAddChild]"], [
        runLayout
    ]);
    const onToggleCollapse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onToggleCollapse]": (nodeId)=>{
            setNodes({
                "MindMapPage.useCallback[onToggleCollapse]": (nds)=>{
                    const updatedNodes = nds.map({
                        "MindMapPage.useCallback[onToggleCollapse].updatedNodes": (node)=>{
                            if (node.id === nodeId) {
                                return {
                                    ...node,
                                    data: {
                                        ...node.data,
                                        isCollapsed: !node.data.isCollapsed
                                    }
                                };
                            }
                            return node;
                        }
                    }["MindMapPage.useCallback[onToggleCollapse].updatedNodes"]);
                    setEdges({
                        "MindMapPage.useCallback[onToggleCollapse]": (eds)=>{
                            setTimeout({
                                "MindMapPage.useCallback[onToggleCollapse]": ()=>runLayout(updatedNodes, eds)
                            }["MindMapPage.useCallback[onToggleCollapse]"], 0);
                            return eds;
                        }
                    }["MindMapPage.useCallback[onToggleCollapse]"]);
                    return updatedNodes;
                }
            }["MindMapPage.useCallback[onToggleCollapse]"]);
        }
    }["MindMapPage.useCallback[onToggleCollapse]"], [
        runLayout
    ]);
    const onUpdateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onUpdateLabel]": (nodeId, newLabel)=>{
            setNodes({
                "MindMapPage.useCallback[onUpdateLabel]": (nds)=>nds.map({
                        "MindMapPage.useCallback[onUpdateLabel]": (node)=>{
                            if (node.id === nodeId) {
                                return {
                                    ...node,
                                    data: {
                                        ...node.data,
                                        label: newLabel
                                    }
                                };
                            }
                            return node;
                        }
                    }["MindMapPage.useCallback[onUpdateLabel]"])
            }["MindMapPage.useCallback[onUpdateLabel]"]);
        }
    }["MindMapPage.useCallback[onUpdateLabel]"], []);
    const onDeleteNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onDeleteNode]": (nodeId)=>{
            if (nodeId === "root") return;
            const getDescendants = {
                "MindMapPage.useCallback[onDeleteNode].getDescendants": (id, edgesArr)=>{
                    const outEdges = edgesArr.filter({
                        "MindMapPage.useCallback[onDeleteNode].getDescendants.outEdges": (e)=>e.source === id
                    }["MindMapPage.useCallback[onDeleteNode].getDescendants.outEdges"]);
                    let children = outEdges.map({
                        "MindMapPage.useCallback[onDeleteNode].getDescendants.children": (e)=>e.target
                    }["MindMapPage.useCallback[onDeleteNode].getDescendants.children"]);
                    outEdges.forEach({
                        "MindMapPage.useCallback[onDeleteNode].getDescendants": (e)=>{
                            children = [
                                ...children,
                                ...getDescendants(e.target, edgesArr)
                            ];
                        }
                    }["MindMapPage.useCallback[onDeleteNode].getDescendants"]);
                    return children;
                }
            }["MindMapPage.useCallback[onDeleteNode].getDescendants"];
            const nodesToDelete = [
                nodeId,
                ...getDescendants(nodeId, edges)
            ];
            const updatedNodes = nodes.filter({
                "MindMapPage.useCallback[onDeleteNode].updatedNodes": (n)=>!nodesToDelete.includes(n.id)
            }["MindMapPage.useCallback[onDeleteNode].updatedNodes"]);
            const updatedEdges = edges.filter({
                "MindMapPage.useCallback[onDeleteNode].updatedEdges": (e)=>!nodesToDelete.includes(e.source) && !nodesToDelete.includes(e.target)
            }["MindMapPage.useCallback[onDeleteNode].updatedEdges"]);
            setNodes(updatedNodes);
            setEdges(updatedEdges);
            setTimeout({
                "MindMapPage.useCallback[onDeleteNode]": ()=>runLayout(updatedNodes, updatedEdges)
            }["MindMapPage.useCallback[onDeleteNode]"], 0);
        }
    }["MindMapPage.useCallback[onDeleteNode]"], [
        nodes,
        edges,
        runLayout
    ]);
    // --- NEW: Global Expand/Collapse Functions ---
    const onExpandAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onExpandAll]": ()=>{
            setNodes({
                "MindMapPage.useCallback[onExpandAll]": (nds)=>{
                    const updatedNodes = nds.map({
                        "MindMapPage.useCallback[onExpandAll].updatedNodes": (n)=>({
                                ...n,
                                data: {
                                    ...n.data,
                                    isCollapsed: false
                                }
                            })
                    }["MindMapPage.useCallback[onExpandAll].updatedNodes"]);
                    setTimeout({
                        "MindMapPage.useCallback[onExpandAll]": ()=>runLayout(updatedNodes, edges)
                    }["MindMapPage.useCallback[onExpandAll]"], 0);
                    return updatedNodes;
                }
            }["MindMapPage.useCallback[onExpandAll]"]);
        }
    }["MindMapPage.useCallback[onExpandAll]"], [
        edges,
        runLayout
    ]);
    const onCollapseAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MindMapPage.useCallback[onCollapseAll]": ()=>{
            setNodes({
                "MindMapPage.useCallback[onCollapseAll]": (nds)=>{
                    const updatedNodes = nds.map({
                        "MindMapPage.useCallback[onCollapseAll].updatedNodes": (n)=>({
                                ...n,
                                data: {
                                    ...n.data,
                                    isCollapsed: true
                                }
                            })
                    }["MindMapPage.useCallback[onCollapseAll].updatedNodes"]);
                    setTimeout({
                        "MindMapPage.useCallback[onCollapseAll]": ()=>runLayout(updatedNodes, edges)
                    }["MindMapPage.useCallback[onCollapseAll]"], 0);
                    return updatedNodes;
                }
            }["MindMapPage.useCallback[onCollapseAll]"]);
        }
    }["MindMapPage.useCallback[onCollapseAll]"], [
        edges,
        runLayout
    ]);
    // Inject functions and calculate child counts
    const nodesWithActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MindMapPage.useMemo[nodesWithActions]": ()=>{
            // Tally up direct children mapping
            const childrenCountMap = {};
            edges.forEach({
                "MindMapPage.useMemo[nodesWithActions]": (e)=>{
                    childrenCountMap[e.source] = (childrenCountMap[e.source] || 0) + 1;
                }
            }["MindMapPage.useMemo[nodesWithActions]"]);
            return nodes.map({
                "MindMapPage.useMemo[nodesWithActions]": (node)=>({
                        ...node,
                        data: {
                            ...node.data,
                            onAddChild,
                            onToggleCollapse,
                            onUpdateLabel,
                            onDeleteNode,
                            hiddenChildCount: childrenCountMap[node.id] || 0
                        }
                    })
            }["MindMapPage.useMemo[nodesWithActions]"]);
        }
    }["MindMapPage.useMemo[nodesWithActions]"], [
        nodes,
        edges,
        onAddChild,
        onToggleCollapse,
        onUpdateLabel,
        onDeleteNode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen bg-[#F8FAFC] font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactFlow"], {
            nodes: nodesWithActions,
            edges: edges,
            onNodesChange: onNodesChange,
            onEdgesChange: onEdgesChange,
            nodeTypes: nodeTypes,
            fitView: true,
            nodesDraggable: true,
            panOnScroll: true,
            zoomOnScroll: false,
            zoomOnPinch: true,
            panOnDrag: true,
            selectionOnDrag: false,
            defaultEdgeOptions: {
                type: "default",
                style: {
                    strokeWidth: 1.5,
                    stroke: "#94A3B8"
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Background"], {
                    color: "#CBD5E1",
                    variant: "dots",
                    gap: 16,
                    size: 1
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Controls"], {
                    showInteractive: false,
                    className: "shadow-sm border border-slate-200"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MiniMap"], {
                    zoomable: true,
                    pannable: true,
                    nodeColor: "#94A3B8",
                    maskColor: "rgba(248, 250, 252, 0.7)",
                    className: "border border-slate-200 shadow-sm rounded-md"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$xyflow$2b$react$40$12$2e$10$2e$2_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f40$xyflow$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Panel"], {
                    position: "top-left",
                    className: "bg-white border border-slate-200 shadow-sm rounded-md flex overflow-hidden ml-2 mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onExpandAll,
                            className: "px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-slate-500 hover:bg-slate-50 hover:text-slate-900 border-r border-slate-200 transition-colors",
                            children: "Expand All"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCollapseAll,
                            className: "px-3 py-1.5 text-[11px] font-bold tracking-wide uppercase text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors",
                            children: "Collapse All"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.jsx",
            lineNumber: 213,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
_s(MindMapPage, "b/TDM9QHcpKSuHveiRKc9cWBOpI=");
_c = MindMapPage;
var _c;
__turbopack_context__.k.register(_c, "MindMapPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0~nsh-s._.js.map