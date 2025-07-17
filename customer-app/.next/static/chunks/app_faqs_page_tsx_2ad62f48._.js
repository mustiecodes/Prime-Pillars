(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/faqs/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FaqsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FaqsPage() {
    _s();
    const [openIndexes, setOpenIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const toggleFAQ = (index)=>{
        setOpenIndexes((prev)=>prev.includes(index) ? prev.filter((i)=>i !== index) : [
                ...prev,
                index
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 my-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-[#0057A0] mb-4",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/app/faqs/page.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-semibold text-[#0057A0] mb-6",
                    children: "Have questions? We've got answers."
                }, void 0, false, {
                    fileName: "[project]/app/faqs/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                [
                    {
                        question: 'How do I apply for a house?',
                        answer: 'You must first register with your PEN Number and submit all required documents via the data entry form.'
                    },
                    {
                        question: 'What documents are required?',
                        answer: 'Required documents include: Account Opening Form, NIN Slip, Consent Form, Application Letter, and others listed during application.'
                    },
                    {
                        question: 'How long does approval take?',
                        answer: 'Approvals usually take 5–10 working days depending on completeness and verification stages.'
                    },
                    {
                        question: 'Can I change my allocated house?',
                        answer: 'No. Once a house is allocated based on RSA balance and availability, it cannot be changed.'
                    }
                ].map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>toggleFAQ(index),
                        className: `border-b cursor-pointer p-4 ${openIndexes.includes(index) ? 'bg-gray-50' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center font-semibold",
                                children: [
                                    faq.question,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: openIndexes.includes(index) ? '-' : '+'
                                    }, void 0, false, {
                                        fileName: "[project]/app/faqs/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/faqs/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            openIndexes.includes(index) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-gray-600",
                                children: faq.answer
                            }, void 0, false, {
                                fileName: "[project]/app/faqs/page.tsx",
                                lineNumber: 51,
                                columnNumber: 45
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/faqs/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/faqs/page.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(FaqsPage, "/fH1txKfTl4jAK8fMm2Bvxin18g=");
_c = FaqsPage;
var _c;
__turbopack_context__.k.register(_c, "FaqsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_faqs_page_tsx_2ad62f48._.js.map