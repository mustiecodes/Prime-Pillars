(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/common/PageWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PageWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function PageWrapper({ title, children, className = '', contentClassName = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `min-h-screen bg-[#f0f2f5] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-gradient-to-r from-[#0057A0] to-[#C8102E] text-white py-6 text-center",
                children: title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/common/PageWrapper.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/PageWrapper.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `space-y-6 ${contentClassName}`,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/common/PageWrapper.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/common/PageWrapper.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/PageWrapper.tsx",
        lineNumber: 19,
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
"[project]/components/common/FormInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FormInput({ label, name, type = 'text', value, onChange, error, disabled = false, required = false, ...props }) {
    const inputId = `input-${name}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: inputId,
                className: "block font-semibold text-gray-800 text-sm",
                children: [
                    label,
                    " ",
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/common/FormInput.tsx",
                        lineNumber: 28,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/FormInput.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: inputId,
                name: name,
                type: type,
                value: value,
                disabled: disabled,
                onChange: onChange,
                "aria-invalid": !!error,
                className: `w-full px-3 py-2 rounded-md border text-sm focus:outline-none ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#0057A0]'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/common/FormInput.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600 mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/common/FormInput.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/FormInput.tsx",
        lineNumber: 26,
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
"[project]/components/common/FormSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function FormSelect({ label, name, error, children, disabled, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "block font-semibold text-gray-800 text-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/common/FormSelect.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                "aria-invalid": !!error,
                disabled: disabled,
                className: `w-full px-3 py-2 rounded-md border text-sm focus:outline-none ${error ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#0057A0]'} ${disabled ? 'bg-gray-100 cursor-not-allowed text-gray-500' : 'bg-white'}`,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/common/FormSelect.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600 mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/common/FormSelect.tsx",
                lineNumber: 37,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/FormSelect.tsx",
        lineNumber: 21,
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
"[project]/components/application/FileUpload.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FileUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const MAX_FILE_SIZE_MB = 2;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const validateFile = (file)=>{
    if (!file) return null;
    if (file.type !== 'application/pdf') return 'Only PDF files are allowed.';
    if (file.size > MAX_FILE_SIZE_BYTES) return `File too large. Max size is ${MAX_FILE_SIZE_MB}MB.`;
    return null;
};
function FileUpload({ requiredDocs, requiredUploads, onRequiredChange, optionalDocs, onOptionalChange, onAddOptional, onRemoveOptional }) {
    _s();
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        required: {},
        optional: {}
    });
    const handleRequiredChange = (title, file)=>{
        const error = validateFile(file);
        setErrors((prev)=>({
                ...prev,
                required: {
                    ...prev.required,
                    [title]: error || ''
                }
            }));
        if (!error) onRequiredChange(title, file);
    };
    const handleOptionalFileChange = (index, file)=>{
        const error = validateFile(file);
        setErrors((prev)=>({
                ...prev,
                optional: {
                    ...prev.optional,
                    [index]: error || ''
                }
            }));
        if (!error) onOptionalChange(index, 'file', file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-[#0057A0] border-b border-[#0057A0] pb-2 mb-4",
                        children: "Mandatory Uploads"
                    }, void 0, false, {
                        fileName: "[project]/components/application/FileUpload.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: requiredDocs.map((title)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block font-semibold text-sm text-gray-800",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/FileUpload.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        required: true,
                                        accept: "application/pdf",
                                        onChange: (e)=>handleRequiredChange(title, e.target.files?.[0] || null),
                                        className: "w-full px-3 py-2 rounded border border-gray-300 text-sm file:rounded file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/FileUpload.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    requiredUploads[title] && !errors.required[title] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-green-600 mt-1",
                                        children: [
                                            "✅ ",
                                            requiredUploads[title]?.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/FileUpload.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    errors.required[title] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-red-600 mt-1",
                                        children: [
                                            "❌ ",
                                            errors.required[title]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/FileUpload.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, title, true, {
                                fileName: "[project]/components/application/FileUpload.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/application/FileUpload.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/FileUpload.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-[#0057A0] border-b border-[#0057A0] pb-2 mb-4",
                        children: "Optional Upload"
                    }, void 0, false, {
                        fileName: "[project]/components/application/FileUpload.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            optionalDocs.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Document Title",
                                            value: doc.title,
                                            className: "w-full px-3 py-2 rounded border border-gray-300 text-sm",
                                            onChange: (e)=>onOptionalChange(index, 'title', e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/application/FileUpload.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "application/pdf",
                                            onChange: (e)=>handleOptionalFileChange(index, e.target.files?.[0] || null),
                                            className: "w-full px-3 py-2 rounded border border-gray-300 text-sm file:rounded file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/components/application/FileUpload.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        doc.file && !errors.optional[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-green-600 col-span-2",
                                            children: [
                                                "✅ ",
                                                doc.file.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/application/FileUpload.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        errors.optional[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-600 col-span-2",
                                            children: [
                                                "❌ ",
                                                errors.optional[index]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/application/FileUpload.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onRemoveOptional(index),
                                            className: "text-red-600 text-sm hover:underline col-span-2",
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/components/application/FileUpload.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/application/FileUpload.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onAddOptional,
                                className: "text-[#0057A0] text-sm hover:underline",
                                children: "+ Add Another Optional Document"
                            }, void 0, false, {
                                fileName: "[project]/components/application/FileUpload.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/application/FileUpload.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/FileUpload.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/application/FileUpload.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(FileUpload, "YYX9FmNtNYBD9fbzYB4C3N8DRlY=");
_c = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/lib/validators.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    "validateClientForm": (()=>validateClientForm),
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
function validateClientForm(data) {
    const errors = {};
    if (!data.rsaBalance) errors.rsaBalance = 'RSA balance is required';
    if (!data.bvn) {
        errors.bvn = 'BVN is required';
    } else if (data.bvn.length !== 12) {
        errors.bvn = 'BVN must be exactly 12 digits';
    }
    if (!data.nin) {
        errors.nin = 'NIN is required';
    } else if (data.nin.length !== 12) {
        errors.nin = 'NIN must be exactly 12 digits';
    }
    if (!data.dob) errors.dob = 'Date of Birth is required';
    if (!data.phone1) {
        errors.phone1 = 'Phone number is required';
    } else if (data.phone1.length !== 11) {
        errors.phone1 = 'Phone number must be exactly 12 digits';
    }
    return errors;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/application/ClientForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/FormInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/FormSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/application/FileUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-client] (ecmascript)");
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
function ClientForm({ initialData }) {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientForm.useEffect": ()=>{
            if (!initialData) return;
            setForm({
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
            });
        }
    }["ClientForm.useEffect"], [
        initialData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientForm.useEffect": ()=>{
            const fetchPFAs = {
                "ClientForm.useEffect.fetchPFAs": async ()=>{
                    try {
                        const res = await fetch('http://localhost:5000/api/admin/pfa');
                        const data = await res.json();
                        setPfaOptions(data.map({
                            "ClientForm.useEffect.fetchPFAs": (p)=>p.name
                        }["ClientForm.useEffect.fetchPFAs"]));
                    } catch  {
                        console.error('Failed to fetch PFAs');
                    }
                }
            }["ClientForm.useEffect.fetchPFAs"];
            fetchPFAs();
        }
    }["ClientForm.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        if ([
            'bvn',
            'nin'
        ].includes(name)) {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 12) return;
        }
        if ([
            'phone1',
            'phone2'
        ].includes(name)) {
            if (!/^\d*$/.test(value)) return;
            if (value.length > 11) return;
        }
        if (name === 'rsaBalance') {
            const cleaned = value.replace(/,/g, '').replace(/\D/g, '');
            const formatted = cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            setForm((prev)=>({
                    ...prev,
                    [name]: formatted
                }));
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
            return;
        }
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
        setErrors((prev)=>({
                ...prev,
                [name]: ''
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
    const removeOptionalDoc = (index)=>{
        setOptionalDocs((prev)=>prev.filter((_, i)=>i !== index));
    };
    const handleSubmit = async ()=>{
        setSubmitting(true);
        setMessage('');
        setErrors({});
        const validationErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateClientForm"])({
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitApplication"])(form, requiredDocs, optionalDocs);
            setMessage('✅ Application submitted successfully!');
        } catch  {
            setMessage('❌ Could not submit application.');
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-[#0057A0] border-b pb-2",
                        children: "Biodata"
                    }, void 0, false, {
                        fileName: "[project]/components/application/ClientForm.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "First Name",
                                name: "firstName",
                                value: form.firstName,
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/components/application/ClientForm.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Surname",
                                name: "surname",
                                value: form.surname,
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/components/application/ClientForm.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "Other Names",
                                name: "otherNames",
                                value: form.otherNames,
                                disabled: true
                            }, void 0, false, {
                                fileName: "[project]/components/application/ClientForm.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/application/ClientForm.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/ClientForm.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold text-[#0057A0] border-b pb-2",
                        children: "RSA and Personal Info"
                    }, void 0, false, {
                        fileName: "[project]/components/application/ClientForm.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                label: "PFA",
                                name: "pfa",
                                value: form.pfa,
                                onChange: handleChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select your PFA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    pfaOptions.map((pfa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: pfa,
                                            children: pfa
                                        }, pfa, false, {
                                            fileName: "[project]/components/application/ClientForm.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ClientForm.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "RSA Balance",
                                        name: "rsaBalance",
                                        value: form.rsaBalance,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "BVN",
                                        name: "bvn",
                                        value: form.bvn,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "NIN",
                                        name: "nin",
                                        value: form.nin,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Date of Birth",
                                        name: "dob",
                                        type: "date",
                                        value: form.dob,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Phone Number",
                                        name: "phone1",
                                        value: form.phone1,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Alt Phone",
                                        name: "phone2",
                                        value: form.phone2,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Email",
                                        name: "email",
                                        value: form.email,
                                        disabled: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$FormInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Alt Email",
                                        name: "altEmail",
                                        value: form.altEmail,
                                        onChange: handleChange
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ClientForm.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ClientForm.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/application/ClientForm.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/ClientForm.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    requiredDocs: REQUIRED_DOCS,
                    requiredUploads: requiredDocs,
                    onRequiredChange: handleRequiredDocUpload,
                    optionalDocs: optionalDocs,
                    onOptionalChange: handleOptionalDocChange,
                    onAddOptional: addOptionalDoc,
                    onRemoveOptional: removeOptionalDoc
                }, void 0, false, {
                    fileName: "[project]/components/application/ClientForm.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/application/ClientForm.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                disabled: submitting,
                className: "w-full bg-[#0057A0] hover:bg-[#003f7a] text-white font-semibold py-3 rounded-md",
                children: submitting ? 'Submitting...' : 'Submit'
            }, void 0, false, {
                fileName: "[project]/components/application/ClientForm.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 text-center",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/application/ClientForm.tsx",
                lineNumber: 239,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/application/ClientForm.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s(ClientForm, "GwgROGRoBbQVdf0iF0Gk7PtpujI=");
_c = ClientForm;
var _c;
__turbopack_context__.k.register(_c, "ClientForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(client)/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/PageWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$ClientForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/application/ClientForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ClientPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientPage.useEffect": ()=>{
            if (!loading) {
                if (!user) {
                    router.push('/login');
                    return;
                }
                if (user && user.role !== 'client') {
                    router.push('/');
                    return;
                }
                setReady(true);
            }
        }
    }["ClientPage.useEffect"], [
        loading,
        user,
        router
    ]);
    if (loading || !ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/app/(client)/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(client)/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$PageWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Housing Application",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$ClientForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            initialData: user
        }, void 0, false, {
            fileName: "[project]/app/(client)/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(client)/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ClientPage, "OsecYo3AvFjM8394BPQBbOe2YSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ClientPage;
var _c;
__turbopack_context__.k.register(_c, "ClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_f3a67fdd._.js.map