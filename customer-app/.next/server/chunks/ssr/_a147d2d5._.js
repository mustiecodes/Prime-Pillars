module.exports = {

"[project]/components/layout/PageWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PageWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function PageWrapper({ title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 mb-6",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/layout/PageWrapper.tsx",
                    lineNumber: 14,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}}),
"[project]/components/forms/ClientApplicationForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
'use client';
const REQUIRED_DOCS = [
    'Account Opening Form',
    'NIN Slip',
    'Undertaken Form',
    'Consent Form',
    'Indemnity Form',
    'Application Letter'
];
;
}}),
"[project]/utils/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/app/(client)/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ApplyPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/PageWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$ClientApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/ClientApplicationForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ApplyPage() {
    const [initialData, setInitialData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUser = async ()=>{
            try {
                const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])('/api/auth/me');
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
        };
        fetchUser();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$PageWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-600",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/(client)/page.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$ClientApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}}),

};

//# sourceMappingURL=_a147d2d5._.js.map