(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/constants/theme.constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
;
const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: "light",
        primary: {
            main: "#1E6DC6",
            light: "#4A90E2",
            dark: "#1557A3",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#2E8B57",
            light: "#4CAF7A",
            dark: "#1F6B41",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#1A2027",
            secondary: "#5A6C7D"
        },
        success: {
            main: "#10B981",
            light: "#34D399",
            dark: "#059669"
        },
        error: {
            main: "#DC3545",
            light: "#E74C3C",
            dark: "#C53030"
        },
        warning: {
            main: "#F59E0B",
            light: "#FBBF24",
            dark: "#D97706"
        },
        info: {
            main: "#3B82F6",
            light: "#60A5FA",
            dark: "#2563EB"
        },
        grey: {
            50: "#F8F9FA",
            100: "#E9ECEF",
            200: "#DEE2E6",
            300: "#CED4DA",
            400: "#ADB5BD",
            500: "#6C757D",
            600: "#495057",
            700: "#343A40",
            800: "#212529",
            900: "#1A1E21"
        }
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: 1.2
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.3
        },
        h3: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.4
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.4
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.5
        },
        h6: {
            fontWeight: 500,
            fontSize: "1.125rem",
            lineHeight: 1.6
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
            fontWeight: 400,
            color: "#5A6C7D"
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
            color: "#6C757D"
        },
        button: {
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.02em"
        }
    },
    shape: {
        borderRadius: 12
    },
    shadows: Array(25).fill("0px 4px 8px rgba(0,0,0,0.1)"),
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
                    backgroundAttachment: "fixed",
                    fontFeatureSettings: "'cv11', 'ss01'",
                    fontVariationSettings: "'opsz' 32"
                },
                html: {
                    scrollBehavior: "smooth"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: "14px 32px",
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transition: "left 0.6s ease-in-out"
                    },
                    "&:hover::before": {
                        left: "100%"
                    },
                    "&:hover": {
                        transform: "translateY(-2px)"
                    },
                    "&.Mui-disabled": {
                        background: "linear-gradient(135deg, #CED4DA 0%, #ADB5BD 100%)",
                        color: "#6C757D"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    background: "#FFFFFF",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)"
                    }
                }
            }
        }
    }
});
const darkOverrides = {
    palette: {
        mode: "dark",
        primary: {
            main: "#4A90E2",
            light: "#6BA8F0",
            dark: "#1E6DC6",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#4CAF7A",
            light: "#6BCF95",
            dark: "#2E8B57",
            contrastText: "#FFFFFF"
        },
        background: {
            default: "linear-gradient(135deg, #0F1419 0%, #1A2027 100%)",
            paper: "rgba(30, 35, 42, 0.8)"
        },
        text: {
            primary: "#F8F9FA",
            secondary: "#ADB5BD",
            disabled: "#6C757D"
        },
        divider: "rgba(255, 255, 255, 0.08)"
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: "linear-gradient(135deg, #0F1419 0%, #1A2027 100%)",
                    backgroundAttachment: "fixed"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#fff"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: "rgba(30, 35, 42, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)"
                    }
                }
            }
        }
    }
};
const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(light, darkOverrides);
const theme = {
    light,
    dark
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useLocalStorage(storageKey, defaultValue) {
    _s();
    // get localstorage value;
    const getDefaultValue = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const item = localStorage.getItem(storageKey);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Failed to parse localStorage item", error);
            return defaultValue;
        }
    };
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDefaultValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLocalStorage.useEffect": ()=>{
            localStorage.setItem(storageKey, JSON.stringify(value));
        }
    }["useLocalStorage.useEffect"], [
        storageKey,
        value
    ]);
    return [
        value,
        setValue
    ];
}
_s(useLocalStorage, "Q5cQ1N+Rhx66KEIFJJ/EtlERMTQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/provider/ThemeContextProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContextProvider",
    ()=>ThemeContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/theme.constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$43c6fea0$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-43c6fea0.browser.esm.js [app-client] (ecmascript) <export a as ThemeProvider>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ThemeContextProvider({ children }) {
    _s();
    // custom hook for sync with localstorage
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("theme", "light");
    const handleTheme = (value)=>{
        setValue(value);
    };
    const themeValue = {
        mode: value,
        handleTheme
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
        value: themeValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$43c6fea0$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: value === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].dark : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].light,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/provider/ThemeContextProvider.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/provider/ThemeContextProvider.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ThemeContextProvider, "7/pzV6s8FWVbkPbA4wTM+uFvvPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ThemeContextProvider;
var _c;
__turbopack_context__.k.register(_c, "ThemeContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/provider/Provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$provider$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/provider/ThemeContextProvider.tsx [app-client] (ecmascript)");
"use client";
;
;
function Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$provider$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContextProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/provider/Provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = Provider;
var _c;
__turbopack_context__.k.register(_c, "Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9087dac4._.js.map