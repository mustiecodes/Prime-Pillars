(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/layout/PageWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PageWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PageWrapper({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 mb-6",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/layout/PageWrapper.tsx",
                    lineNumber: 14,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/layout/PageWrapper.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/layout/PageWrapper.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/PageWrapper.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PageWrapper;
var _c;
__turbopack_context__.k.register(_c, "PageWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/inputs/FormInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FormInput({ label, name, type = 'text', value, onChange, disabled = false, error, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormInput.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: type,
                value: value,
                onChange: onChange,
                disabled: disabled,
                className: `w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-300'}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormInput.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormInput.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inputs/FormInput.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = FormInput;
var _c;
__turbopack_context__.k.register(_c, "FormInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/inputs/FormSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FormSelect({ label, name, error, children, className = '', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormSelect.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                className: `w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md ${className}`,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormSelect.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600 mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/inputs/FormSelect.tsx",
                lineNumber: 26,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/inputs/FormSelect.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = FormSelect;
var _c;
__turbopack_context__.k.register(_c, "FormSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/FileUpload.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FileUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FileUpload({ requiredDocs, requiredUploads, onRequiredChange, optionalDocs, onOptionalChange, onAddOptional, errors = {} }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Mandatory Documents"
                    }, void 0, false, {
                        fileName: "[project]/components/forms/FileUpload.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: requiredDocs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                        children: doc
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        required: true,
                                        className: "block w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-1.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100",
                                        onChange: (e)=>onRequiredChange(doc, e.target.files?.[0] || null)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    requiredUploads[doc] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-green-600 mt-1",
                                        children: [
                                            "✅ ",
                                            requiredUploads[doc]?.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    errors.required?.[doc] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-600 mt-1",
                                        children: [
                                            "❌ ",
                                            errors.required[doc]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, doc, true, {
                                fileName: "[project]/components/forms/FileUpload.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/forms/FileUpload.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/FileUpload.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2",
                        children: "Optional Documents"
                    }, void 0, false, {
                        fileName: "[project]/components/forms/FileUpload.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: optionalDocs.map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Document Title",
                                            value: doc.title,
                                            className: "w-full border border-gray-300 rounded-md p-2",
                                            onChange: (e)=>onOptionalChange(idx, 'title', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/forms/FileUpload.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                className: "block w-full text-sm border border-gray-300 rounded-lg file:mr-4 file:py-1.5 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100",
                                                onChange: (e)=>onOptionalChange(idx, 'file', e.target.files?.[0] || null)
                                            }, void 0, false, {
                                                fileName: "[project]/components/forms/FileUpload.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            doc.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-green-600 mt-1",
                                                children: [
                                                    "✅ ",
                                                    doc.file.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/forms/FileUpload.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    errors.optional?.[idx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600 col-span-2",
                                        children: errors.optional[idx]
                                    }, void 0, false, {
                                        fileName: "[project]/components/forms/FileUpload.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/components/forms/FileUpload.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/forms/FileUpload.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onAddOptional,
                        className: "mt-3 text-blue-600 text-sm hover:underline",
                        children: "+ Add Another Optional Document"
                    }, void 0, false, {
                        fileName: "[project]/components/forms/FileUpload.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/FileUpload.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/FileUpload.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiGet": (()=>apiGet),
    "apiPost": (()=>apiPost),
    "fetchCurrentUser": (()=>fetchCurrentUser),
    "loginUser": (()=>loginUser),
    "registerUser": (()=>registerUser),
    "submitApplication": (()=>submitApplication)
});
const BASE_URL = 'http://localhost:5000';
const buildUrl = (path)=>`${BASE_URL}${path}`;
const handleResponse = async (res)=>{
    if (!res.ok) {
        const error = await res.json().catch(()=>({}));
        throw new Error(error.error || 'An unexpected error occurred');
    }
    return res.json();
};
async function apiGet(path) {
    const res = await fetch(buildUrl(path), {
        method: 'GET',
        credentials: 'include'
    });
    return handleResponse(res);
}
async function apiPost(path, data) {
    const res = await fetch(buildUrl(path), {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return handleResponse(res);
}
async function submitApplication(form, requiredDocs, optionalDocs) {
    const formData = new FormData();
    formData.append('pen_number', form.penNumber);
    formData.append('pfa', form.pfa);
    formData.append('rsa_balance', form.rsaBalance);
    formData.append('bvn', form.bvn);
    formData.append('nin', form.nin);
    formData.append('dob', form.dob);
    formData.append('phone_number', form.phone1);
    formData.append('alt_phone', form.phone2);
    formData.append('alt_email', form.altEmail);
    Object.entries(requiredDocs).forEach(([title, file])=>{
        if (file) {
            formData.append('documents', file, title);
        }
    });
    optionalDocs.forEach(({ title, file })=>{
        if (file && title) {
            formData.append('documents', file, `optional:${title}`);
        }
    });
    const res = await fetch(buildUrl('/api/application/submit'), {
        method: 'POST',
        credentials: 'include',
        body: formData
    });
    return handleResponse(res);
}
async function fetchCurrentUser() {
    return apiGet('/api/auth/me');
}
async function loginUser(data) {
    return apiPost('/api/auth/login', data);
}
async function registerUser(data) {
    return apiPost('/api/auth/register', data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/validators.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Checks if a password is strong enough:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one digit
 * - At least one special character
 */ __turbopack_context__.s({
    "loginValidator": (()=>loginValidator),
    "registerValidator": (()=>registerValidator),
    "validateClientApplicationForm": (()=>validateClientApplicationForm),
    "validatePassword": (()=>validatePassword)
});
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return regex.test(password);
}
function loginValidator(data) {
    const errors = {};
    if (!data.pen_number) {
        errors.pen_number = 'PEN number is required';
    }
    if (!data.password) {
        errors.password = 'Password is required';
    }
    return errors;
}
function registerValidator(data) {
    const errors = {};
    if (!data.first_name) {
        errors.first_name = 'First name is required';
    }
    if (!data.surname) {
        errors.surname = 'Surname is required';
    }
    if (!data.email) {
        errors.email = 'Email is required';
    }
    if (!data.pen_number) {
        errors.pen_number = 'PEN number is required';
    }
    if (!data.password) {
        errors.password = 'Password is required';
    } else if (!validatePassword(data.password)) {
        errors.password = 'Password must include uppercase, lowercase, number, and symbol';
    }
    if (data.password !== data.confirm_password) {
        errors.confirm_password = 'Passwords do not match';
    }
    return errors;
}
function validateClientApplicationForm(data) {
    const errors = {};
    if (!data.rsaBalance) errors.rsaBalance = 'RSA balance is required';
    if (!data.bvn) errors.bvn = 'BVN is required';
    if (!data.nin) errors.nin = 'NIN is required';
    if (!data.dob) errors.dob = 'Date of Birth is required';
    if (!data.phone1) errors.phone1 = 'Phone number is required';
    return errors;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/forms/ClientApplicationForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientApplicationForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inputs/FormInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/inputs/FormSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/FileUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/validators.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const REQUIRED_DOCS = [
    'Account Opening Form',
    'NIN Slip',
    'Undertaken Form',
    'Consent Form',
    'Indemnity Form',
    'Application Letter'
];
function ClientApplicationForm({ initialData }) {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        penNumber: '',
        firstName: '',
        surname: '',
        otherNames: '',
        email: '',
        pfa: '',
        rsaBalance: '',
        bvn: '',
        nin: '',
        dob: '',
        phone1: '',
        phone2: '',
        altEmail: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [requiredDocs, setRequiredDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [optionalDocs, setOptionalDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            title: '',
            file: null
        }
    ]);
    const [pfaOptions, setPfaOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prefill form with user data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientApplicationForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    "ClientApplicationForm.useEffect": (prev)=>({
                            ...prev,
                            penNumber: initialData.pen_number || '',
                            firstName: initialData.first_name || '',
                            surname: initialData.surname || '',
                            otherNames: initialData.other_names || '',
                            email: initialData.email || '',
                            pfa: initialData.pfa || '',
                            rsaBalance: initialData.rsa_balance || '',
                            bvn: initialData.bvn || '',
                            nin: initialData.nin || '',
                            dob: initialData.dob || '',
                            phone1: initialData.phone_number || '',
                            phone2: initialData.alt_phone || '',
                            altEmail: initialData.alt_email || ''
                        })
                }["ClientApplicationForm.useEffect"]);
            }
        }
    }["ClientApplicationForm.useEffect"], [
        initialData
    ]);
    // Fetch PFA options
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientApplicationForm.useEffect": ()=>{
            const fetchPFAs = {
                "ClientApplicationForm.useEffect.fetchPFAs": async ()=>{
                    try {
                        const res = await fetch('http://localhost:5000/api/admin/pfa');
                        const data = await res.json();
                        setPfaOptions(data.map({
                            "ClientApplicationForm.useEffect.fetchPFAs": (p)=>p.name
                        }["ClientApplicationForm.useEffect.fetchPFAs"]));
                    } catch  {
                        console.error('Failed to fetch PFAs');
                    }
                }
            }["ClientApplicationForm.useEffect.fetchPFAs"];
            fetchPFAs();
        }
    }["ClientApplicationForm.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleRequiredDocUpload = (docTitle, file)=>{
        setRequiredDocs((prev)=>({
                ...prev,
                [docTitle]: file
            }));
    };
    const handleOptionalDocChange = (index, key, value)=>{
        setOptionalDocs((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index][key] = value;
            return updated;
        });
    };
    const addOptionalDoc = ()=>{
        setOptionalDocs((prev)=>[
                ...prev,
                {
                    title: '',
                    file: null
                }
            ]);
    };
    const handleSubmit = async ()=>{
        setSubmitting(true);
        setMessage('');
        setErrors({});
        const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateClientApplicationForm"])({
            rsaBalance: form.rsaBalance,
            bvn: form.bvn,
            nin: form.nin,
            dob: form.dob,
            phone1: form.phone1
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitting(false);
            return;
        }
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitApplication"])(form, requiredDocs, optionalDocs);
            setMessage('✅ Application submitted successfully!');
        } catch  {
            setMessage('❌ Could not submit application.');
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto bg-white shadow rounded-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold mb-4",
                children: "Apply for Housing"
            }, void 0, false, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "PEN Number",
                        name: "penNumber",
                        value: form.penNumber,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "First Name",
                        name: "firstName",
                        value: form.firstName,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Surname",
                        name: "surname",
                        value: form.surname,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Other Names (Optional)",
                        name: "otherNames",
                        value: form.otherNames,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Email",
                        name: "email",
                        value: form.email,
                        disabled: true
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "PFA",
                        name: "pfa",
                        value: form.pfa,
                        onChange: handleChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "-- Select PFA --"
                            }, void 0, false, {
                                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            pfaOptions.map((pfa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: pfa,
                                    children: pfa
                                }, pfa, false, {
                                    fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "RSA Balance",
                        name: "rsaBalance",
                        type: "number",
                        value: form.rsaBalance,
                        onChange: handleChange,
                        error: errors.rsaBalance
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "BVN",
                        name: "bvn",
                        value: form.bvn,
                        onChange: handleChange,
                        error: errors.bvn
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "NIN",
                        name: "nin",
                        value: form.nin,
                        onChange: handleChange,
                        error: errors.nin
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Date of Birth",
                        name: "dob",
                        type: "date",
                        value: form.dob,
                        onChange: handleChange,
                        error: errors.dob
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Phone Number",
                        name: "phone1",
                        value: form.phone1,
                        onChange: handleChange,
                        error: errors.phone1
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Alt Phone Number",
                        name: "phone2",
                        value: form.phone2,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$inputs$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Alt Email",
                        name: "altEmail",
                        type: "email",
                        value: form.altEmail,
                        onChange: handleChange
                    }, void 0, false, {
                        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "my-6"
            }, void 0, false, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                requiredDocs: REQUIRED_DOCS,
                requiredUploads: requiredDocs,
                onRequiredChange: handleRequiredDocUpload,
                optionalDocs: optionalDocs,
                onOptionalChange: handleOptionalDocChange,
                onAddOptional: addOptionalDoc
            }, void 0, false, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                disabled: submitting,
                className: `w-full py-2 mt-6 rounded-lg text-white ${submitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`,
                children: submitting ? 'Submitting...' : 'Submit Application'
            }, void 0, false, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm text-gray-700",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/forms/ClientApplicationForm.tsx",
                lineNumber: 210,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/ClientApplicationForm.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(ClientApplicationForm, "GwgROGRoBbQVdf0iF0Gk7PtpujI=");
_c = ClientApplicationForm;
var _c;
__turbopack_context__.k.register(_c, "ClientApplicationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(client)/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApplyPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/PageWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$ClientApplicationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/ClientApplicationForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ApplyPage() {
    _s();
    const [initialData, setInitialData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ApplyPage.useEffect": ()=>{
            const fetchUser = {
                "ApplyPage.useEffect.fetchUser": async ()=>{
                    try {
                        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])('/api/auth/me');
                        if (user.role !== 'client') {
                            window.location.href = '/';
                            return;
                        }
                        setInitialData(user);
                    } catch  {
                        window.location.href = '/login';
                    } finally{
                        setLoading(false);
                    }
                }
            }["ApplyPage.useEffect.fetchUser"];
            fetchUser();
        }
    }["ApplyPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-600",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/(client)/page.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$ClientApplicationForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialData: initialData
        }, void 0, false, {
            fileName: "[project]/app/(client)/page.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(client)/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ApplyPage, "l4i1a8trnyD3PsB2e4bh6/bivsc=");
_c = ApplyPage;
var _c;
__turbopack_context__.k.register(_c, "ApplyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c2472328._.js.map