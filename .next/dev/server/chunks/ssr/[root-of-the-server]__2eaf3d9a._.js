module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/constants/theme.constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
;
// LIGHT THEME
const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    palette: {
        mode: "light",
        primary: {
            main: "#2563EB",
            light: "#60A5FA",
            dark: "#1E40AF",
            contrastText: "#fff"
        },
        secondary: {
            main: "#16A34A",
            light: "#4ADE80",
            dark: "#15803D",
            contrastText: "#fff"
        },
        background: {
            default: "#F9FAFB",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#111827",
            secondary: "#4B5563"
        },
        success: {
            main: "#22C55E"
        },
        error: {
            main: "#EF4444"
        },
        warning: {
            main: "#F59E0B"
        },
        info: {
            main: "#3B82F6"
        },
        grey: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827"
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
            color: "#4B5563"
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
            color: "#6B7280"
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
    shadows: Array(25).fill("0px 4px 12px rgba(0,0,0,0.1)"),
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: "#F9FAFB",
                    backgroundAttachment: "fixed",
                    "--gradient": "linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)"
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
                    fontSize: "1rem",
                    textTransform: "none",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                        transition: "left 0.6s ease-in-out"
                    },
                    "&:hover::before": {
                        left: "100%"
                    },
                    "&:hover": {
                        transform: "translateY(-2px)"
                    },
                    "&.Mui-disabled": {
                        background: "#E5E7EB",
                        color: "#9CA3AF",
                        boxShadow: "none"
                    }
                },
                containedPrimary: {
                    background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
                    color: "#fff",
                    "&:hover": {
                        background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)"
                    }
                },
                containedSecondary: {
                    background: "linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)",
                    color: "#fff",
                    "&:hover": {
                        background: "linear-gradient(135deg, #15803D 0%, #22C55E 100%)"
                    }
                },
                outlinedPrimary: {
                    border: "2px solid #1976D2",
                    color: "#1976D2",
                    "&:hover": {
                        background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
                        color: "#fff"
                    }
                },
                outlinedSecondary: {
                    border: "2px solid #16A34A",
                    color: "#16A34A",
                    "&:hover": {
                        background: "linear-gradient(135deg, #16A34A 0%, #4ADE80 100%)",
                        color: "#fff"
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
                    border: "1px solid rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.1)"
                    }
                }
            }
        }
    }
});
//  DARK THEME
const darkOverrides = {
    palette: {
        mode: "dark",
        primary: {
            main: "#60A5FA",
            light: "#93C5FD",
            dark: "#1D4ED8",
            contrastText: "#fff"
        },
        secondary: {
            main: "#4ADE80",
            light: "#86EFAC",
            dark: "#16A34A",
            contrastText: "#fff"
        },
        background: {
            default: "#0F172A",
            paper: "#1E293B"
        },
        text: {
            primary: "#F9FAFB",
            secondary: "#CBD5E1",
            disabled: "#6B7280"
        },
        divider: "rgba(255,255,255,0.1)",
        success: {
            main: "#22C55E"
        },
        error: {
            main: "#EF4444"
        },
        warning: {
            main: "#FACC15"
        },
        info: {
            main: "#38BDF8"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: "#0F172A",
                    backgroundAttachment: "fixed",
                    "--gradient": "linear-gradient(135deg, #1E3A8A 0%, #065F46 100%)"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#FFFFFF",
                    "&:hover": {
                        transform: "translateY(-2px)"
                    }
                },
                containedPrimary: {
                    background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
                    "&:hover": {
                        background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
                    }
                },
                containedSecondary: {
                    background: "linear-gradient(135deg, #4ADE80 0%, #16A34A 100%)",
                    "&:hover": {
                        background: "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)"
                    }
                },
                outlinedPrimary: {
                    border: "2px solid #60A5FA",
                    color: "#60A5FA",
                    "&:hover": {
                        background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)",
                        color: "#fff"
                    }
                },
                outlinedSecondary: {
                    border: "2px solid #4ADE80",
                    color: "#4ADE80",
                    "&:hover": {
                        background: "linear-gradient(135deg, #4ADE80 0%, #16A34A 100%)",
                        color: "#fff"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    background: "#1E293B",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)"
                    }
                }
            }
        }
    }
};
const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(light, darkOverrides);
const theme = {
    light,
    dark
};
}),
"[project]/src/contexts/ThemeContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
}),
"[project]/src/hooks/useLocalStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useLocalStorage(storageKey, defaultValue) {
    // get localstorage value;
    const getDefaultValue = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return defaultValue;
        }
        //TURBOPACK unreachable
        ;
    };
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getDefaultValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [
        storageKey,
        value
    ]);
    return [
        value,
        setValue
    ];
}
}),
"[project]/src/provider/ThemeContextProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContextProvider",
    ()=>ThemeContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/theme.constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c16c303e$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@emotion/react/dist/emotion-element-c16c303e.esm.js [app-ssr] (ecmascript) <export a as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/CssBaseline/CssBaseline.js [app-ssr] (ecmascript) <export default as CssBaseline>");
"use client";
;
;
;
;
;
;
function ThemeContextProvider({ children }) {
    // custom hook for sync with localstorage
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("theme", "light");
    const handleTheme = (value)=>{
        setValue(value);
    };
    const themeValue = {
        mode: value,
        handleTheme
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeContext"].Provider, {
        value: themeValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$react$2f$dist$2f$emotion$2d$element$2d$c16c303e$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: value === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].dark : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$theme$2e$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["theme"].light,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                    fileName: "[project]/src/provider/ThemeContextProvider.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/provider/ThemeContextProvider.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/provider/ThemeContextProvider.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/provider/Provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$provider$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/provider/ThemeContextProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$provider$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeContextProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/provider/Provider.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2eaf3d9a._.js.map