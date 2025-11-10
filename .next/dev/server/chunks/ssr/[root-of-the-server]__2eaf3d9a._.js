module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/constants/theme.constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/styles/createTheme.js [app-ssr] (ecmascript) <export default as createTheme>");
;
const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
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
            lineHeight: 1.2,
            letterSpacing: "-0.015em"
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em"
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
            fontWeight: 400,
            color: "#6C757D"
        },
        button: {
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: "0.02em"
        },
        subtitle1: {
            fontSize: "1.125rem",
            lineHeight: 1.5,
            fontWeight: 500
        }
    },
    shape: {
        borderRadius: 12
    },
    shadows: [
        "none",
        "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        "0 2px 6px -1px rgba(0, 0, 0, 0.05), 0 1px 3px -1px rgba(0, 0, 0, 0.03)",
        "0 8px 15px -3px rgba(0, 0, 0, 0.05), 0 3px 6px -2px rgba(0, 0, 0, 0.03)",
        "0 15px 20px -5px rgba(0, 0, 0, 0.06), 0 5px 10px -5px rgba(0, 0, 0, 0.02)",
        "0 20px 25px -5px rgba(0, 0, 0, 0.08)",
        "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
        ...Array(17).fill("0 25px 50px -12px rgba(0, 0, 0, 0.12)")
    ],
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
                    letterSpacing: "0.02em",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    border: "none",
                    minWidth: "120px",
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
                    "&:active": {
                        transform: "translateY(0)"
                    },
                    "&.Mui-disabled": {
                        background: "linear-gradient(135deg, #CED4DA 0%, #ADB5BD 100%)",
                        color: "#6C757D",
                        transform: "none",
                        boxShadow: "none"
                    }
                }
            },
            variants: [
                // Primary Contained Button
                {
                    props: {
                        variant: "contained",
                        color: "primary"
                    },
                    style: {
                        background: "linear-gradient(135deg, #1E6DC6 0%, #4A90E2 100%)",
                        boxShadow: "0 6px 20px rgba(30, 109, 198, 0.25)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #1557A3 0%, #1E6DC6 100%)",
                            boxShadow: "0 8px 25px rgba(30, 109, 198, 0.4)"
                        },
                        "&:focus": {
                            boxShadow: "0 0 0 3px rgba(30, 109, 198, 0.2), 0 6px 20px rgba(30, 109, 198, 0.25)"
                        }
                    }
                },
                // Secondary Contained Button
                {
                    props: {
                        variant: "contained",
                        color: "secondary"
                    },
                    style: {
                        background: "linear-gradient(135deg, #2E8B57 0%, #4CAF7A 100%)",
                        boxShadow: "0 6px 20px rgba(46, 139, 87, 0.25)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #1F6B41 0%, #2E8B57 100%)",
                            boxShadow: "0 8px 25px rgba(46, 139, 87, 0.4)"
                        },
                        "&:focus": {
                            boxShadow: "0 0 0 3px rgba(46, 139, 87, 0.2), 0 6px 20px rgba(46, 139, 87, 0.25)"
                        }
                    }
                },
                // Success Contained Button
                {
                    props: {
                        variant: "contained",
                        color: "success"
                    },
                    style: {
                        background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                        boxShadow: "0 6px 20px rgba(16, 185, 129, 0.25)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
                            boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)"
                        }
                    }
                },
                // Error Contained Button
                {
                    props: {
                        variant: "contained",
                        color: "error"
                    },
                    style: {
                        background: "linear-gradient(135deg, #DC3545 0%, #E74C3C 100%)",
                        boxShadow: "0 6px 20px rgba(220, 53, 69, 0.25)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #C53030 0%, #DC3545 100%)",
                            boxShadow: "0 8px 25px rgba(220, 53, 69, 0.4)"
                        }
                    }
                },
                // Outlined Buttons
                {
                    props: {
                        variant: "outlined",
                        color: "primary"
                    },
                    style: {
                        background: "transparent",
                        border: "2px solid",
                        borderColor: "#1E6DC6",
                        color: "#1E6DC6",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(30, 109, 198, 0.08) 0%, rgba(74, 144, 226, 0.08) 100%)",
                            borderColor: "#1557A3",
                            color: "#1557A3"
                        }
                    }
                },
                {
                    props: {
                        variant: "outlined",
                        color: "secondary"
                    },
                    style: {
                        background: "transparent",
                        border: "2px solid",
                        borderColor: "#2E8B57",
                        color: "#2E8B57",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(46, 139, 87, 0.08) 0%, rgba(76, 175, 122, 0.08) 100%)",
                            borderColor: "#1F6B41",
                            color: "#1F6B41"
                        }
                    }
                },
                // Text Buttons
                {
                    props: {
                        variant: "text",
                        color: "primary"
                    },
                    style: {
                        background: "transparent",
                        color: "#1E6DC6",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(30, 109, 198, 0.08) 0%, rgba(74, 144, 226, 0.08) 100%)"
                        }
                    }
                },
                {
                    props: {
                        variant: "text",
                        color: "secondary"
                    },
                    style: {
                        background: "transparent",
                        color: "#2E8B57",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(46, 139, 87, 0.08) 0%, rgba(76, 175, 122, 0.08) 100%)"
                        }
                    }
                },
                // Size Variants
                {
                    props: {
                        size: "small"
                    },
                    style: {
                        padding: "8px 20px",
                        fontSize: "0.875rem",
                        borderRadius: 10
                    }
                },
                {
                    props: {
                        size: "large"
                    },
                    style: {
                        padding: "16px 40px",
                        fontSize: "1.125rem",
                        borderRadius: 14,
                        fontWeight: 700
                    }
                }
            ]
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
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "24px",
                    "&:last-child": {
                        paddingBottom: "24px"
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 8,
                        background: "rgba(255, 255, 255, 0.8)",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#1E6DC6"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#1E6DC6",
                            borderWidth: "2px"
                        }
                    }
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    border: "1px solid"
                },
                standardSuccess: {
                    background: "rgba(16, 185, 129, 0.05)",
                    borderColor: "rgba(16, 185, 129, 0.2)"
                },
                standardError: {
                    background: "rgba(220, 53, 69, 0.05)",
                    borderColor: "rgba(220, 53, 69, 0.2)"
                }
            }
        }
    }
});
// Dark Theme
const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$styles$2f$createTheme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
    ...light,
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
        },
        divider: "rgba(255, 255, 255, 0.08)",
        action: {
            active: "#F8F9FA",
            hover: "rgba(255, 255, 255, 0.05)",
            hoverOpacity: 0.05,
            selected: "rgba(255, 255, 255, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24
        }
    },
    components: {
        ...light.components,
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
                    ...light.components.MuiButton.styleOverrides.root
                }
            },
            variants: [
                // Primary Contained Button - Dark
                {
                    props: {
                        variant: "contained",
                        color: "primary"
                    },
                    style: {
                        background: "linear-gradient(135deg, #4A90E2 0%, #1E6DC6 100%)",
                        boxShadow: "0 6px 20px rgba(74, 144, 226, 0.3)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #1E6DC6 0%, #4A90E2 100%)",
                            boxShadow: "0 8px 25px rgba(74, 144, 226, 0.5)"
                        },
                        "&:focus": {
                            boxShadow: "0 0 0 3px rgba(74, 144, 226, 0.3), 0 6px 20px rgba(74, 144, 226, 0.3)"
                        }
                    }
                },
                // Secondary Contained Button - Dark
                {
                    props: {
                        variant: "contained",
                        color: "secondary"
                    },
                    style: {
                        background: "linear-gradient(135deg, #4CAF7A 0%, #2E8B57 100%)",
                        boxShadow: "0 6px 20px rgba(76, 175, 122, 0.3)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #2E8B57 0%, #4CAF7A 100%)",
                            boxShadow: "0 8px 25px rgba(76, 175, 122, 0.5)"
                        },
                        "&:focus": {
                            boxShadow: "0 0 0 3px rgba(76, 175, 122, 0.3), 0 6px 20px rgba(76, 175, 122, 0.3)"
                        }
                    }
                },
                // Success Contained Button - Dark
                {
                    props: {
                        variant: "contained",
                        color: "success"
                    },
                    style: {
                        background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
                        boxShadow: "0 6px 20px rgba(16, 185, 129, 0.3)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
                            boxShadow: "0 8px 25px rgba(16, 185, 129, 0.5)"
                        }
                    }
                },
                // Error Contained Button - Dark
                {
                    props: {
                        variant: "contained",
                        color: "error"
                    },
                    style: {
                        background: "linear-gradient(135deg, #DC3545 0%, #E74C3C 100%)",
                        boxShadow: "0 6px 20px rgba(220, 53, 69, 0.3)",
                        color: "#FFFFFF",
                        "&:hover": {
                            background: "linear-gradient(135deg, #C53030 0%, #DC3545 100%)",
                            boxShadow: "0 8px 25px rgba(220, 53, 69, 0.5)"
                        }
                    }
                },
                // Outlined Buttons - Dark
                {
                    props: {
                        variant: "outlined",
                        color: "primary"
                    },
                    style: {
                        background: "transparent",
                        border: "2px solid",
                        borderColor: "#4A90E2",
                        color: "#4A90E2",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(30, 109, 198, 0.1) 100%)",
                            borderColor: "#6BA8F0",
                            color: "#6BA8F0"
                        }
                    }
                },
                {
                    props: {
                        variant: "outlined",
                        color: "secondary"
                    },
                    style: {
                        background: "transparent",
                        border: "2px solid",
                        borderColor: "#4CAF7A",
                        color: "#4CAF7A",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(76, 175, 122, 0.1) 0%, rgba(46, 139, 87, 0.1) 100%)",
                            borderColor: "#6BCF95",
                            color: "#6BCF95"
                        }
                    }
                },
                // Text Buttons - Dark
                {
                    props: {
                        variant: "text",
                        color: "primary"
                    },
                    style: {
                        background: "transparent",
                        color: "#4A90E2",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(30, 109, 198, 0.1) 100%)"
                        }
                    }
                },
                {
                    props: {
                        variant: "text",
                        color: "secondary"
                    },
                    style: {
                        background: "transparent",
                        color: "#4CAF7A",
                        "&:hover": {
                            background: "linear-gradient(135deg, rgba(76, 175, 122, 0.1) 0%, rgba(46, 139, 87, 0.1) 100%)"
                        }
                    }
                }
            ]
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
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(26, 32, 39, 0.9)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.3)"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        background: "rgba(255, 255, 255, 0.03)",
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4A90E2"
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#4A90E2"
                        }
                    }
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    border: "1px solid"
                },
                standardSuccess: {
                    background: "rgba(16, 185, 129, 0.1)",
                    borderColor: "rgba(16, 185, 129, 0.3)"
                },
                standardError: {
                    background: "rgba(220, 53, 69, 0.1)",
                    borderColor: "rgba(220, 53, 69, 0.3)"
                }
            }
        }
    }
});
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
"use client";
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