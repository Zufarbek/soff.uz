"use strict";
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 2147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js


function BackToTop() {
    const [hasScrolled, setHasScrolled] = (0,external_react_.useState)("false");
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    });
    // const scrollToTop = () => {
    //     window.scrollTo({ top: 0, behavior: "smooth" });
    // };
    const onScroll = ()=>{
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: hasScrolled && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            id: "scrollUp",
            href: "#top",
            style: {
                position: "fixed",
                zIndex: 2147483647
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fi-rr-arrow-small-up"
            })
        })
    });
}
/* harmony default export */ const elements_BackToTop = (BackToTop);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "footer",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-1 bg-gray-850 border-gray-800",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-4 mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        className: "wow animate__animated animate__fadeInUp",
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            width: "150px",
                                            src: "assets/imgs/page/logo/Soff Study white logo.png",
                                            alt: "Soff white logo"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp",
                                        children: "When an We develop efficient web applications, bots and online stores for our clients all over the world. Let’s talk!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "color-white mb-5 wow animate__animated animate__fadeInUp",
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text-sm color-gray-500 wow animate__animated animate__fadeInUp",
                                        children: [
                                            "Uzbekistan ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "8/1 Bunyodkor Avenue, Tashkent 100115"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-4 mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "text-lg mb-30 color-white wow animate__animated animate__fadeInUp",
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu-footer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Action"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Business"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Adventure"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Canada"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "America"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Curiosity"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "menu-footer",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Animal"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Dental"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Biology"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Design"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Breakfast"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "wow animate__animated animate__fadeInUp",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                className: "color-gray-500",
                                                                href: "/blog-archive",
                                                                children: "Dessert"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-lg-4 mb-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "text-lg mb-30 color-white wow animate__animated animate__fadeInUp",
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-base color-gray-500 wow animate__animated animate__fadeInUp",
                                        children: "Sign up to be first to receive the latest stories inspiring us, case studies, and industry news."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-newsletters mt-15 wow animate__animated animate__fadeInUp",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            action: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "input-name border-gray-500",
                                                        type: "text",
                                                        placeholder: "Your name"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        className: "input-email border-gray-500",
                                                        type: "email",
                                                        placeholder: "Emaill address"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "form-group mt-20",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        className: "btn btn-linear hover-up",
                                                        children: [
                                                            "Subscribe",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-arrow-small-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/elements/SwitchButton.js


function SwitchButton() {
    const [isChecked, setIsChecked] = (0,external_react_.useState)(true);
    function handleChange() {
        setIsChecked(!isChecked);
        if (!isChecked) {
            document.documentElement.classList.add("theme-day");
        } else {
            document.documentElement.classList.remove("theme-day");
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "switch-button",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "form-check form-switch",
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "form-check-input",
                id: "flexSwitchCheckChecked",
                type: "checkbox",
                role: "switch",
                checked: isChecked,
                onChange: handleChange,
                onClick: handleChange
            })
        })
    });
}
/* harmony default export */ const elements_SwitchButton = (SwitchButton);

;// CONCATENATED MODULE: ./components/layout/Header.js





const Header = ({ handleOpen , handleRemove , openClass  })=>{
    const [scroll, setScroll] = (0,external_react_.useState)(0);
    const [isToggled, setToggled] = (0,external_react_.useState)(false);
    const toggleTrueFalse = ()=>setToggled(!isToggled);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: scroll ? "header sticky-bar bg-gray-900 stick" : "header sticky-bar bg-gray-900",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header-logo",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                className: "d-flex",
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "logo-night",
                                        alt: "GenZ",
                                        src: "assets/imgs/page/logo/Soff Study white logo.png"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "d-none logo-day",
                                        alt: "GenZ",
                                        src: "assets/imgs/page/logo/Soff Study dark logo.png"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-nav",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                    className: "nav-main-menu d-none d-xl-block",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "main-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-500",
                                                    href: "/",
                                                    children: "Main"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-500",
                                                    href: "/portfolio",
                                                    children: "Portfolio"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "active",
                                                        href: "/",
                                                        children: "Home"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu two-col",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/",
                                                                    children: "Homepage - 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/index-2",
                                                                    children: "Homepage - 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/index-3",
                                                                    children: "Homepage - 3"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/index-4",
                                                                    children: "Homepage - 4"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "color-gray-500",
                                                        href: "/page-about",
                                                        children: "About Me"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-portfolio",
                                                                    children: "My Portfolio"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-portfolio-2",
                                                                    children: "My Portfolio 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/portfolio-details",
                                                                    children: "Portfolio Details"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "color-gray-500",
                                                        href: "#",
                                                        children: "Category"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu two-col",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/blog-archive",
                                                                    children: "Blog Category 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/blog-archive-2",
                                                                    children: "Blog Category 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/blog-archive-3",
                                                                    children: "Blog Category 3"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/blog-archive-4",
                                                                    children: "Blog Category 4"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/blog-archive-5",
                                                                    children: "Blog Category 5"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "color-gray-500",
                                                        href: "#",
                                                        children: "Single Post"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu two-col",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/single-sidebar",
                                                                    children: "Blog Single 1"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/single-no-sidebar",
                                                                    children: "Blog Single 2"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/single-center",
                                                                    children: "Blog Single 3"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "has-children",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        className: "color-gray-500",
                                                        href: "#",
                                                        children: "Pages"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "sub-menu two-col",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-about",
                                                                    children: "About"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-author",
                                                                    children: "Author posts"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-contact",
                                                                    children: "Contact"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-search",
                                                                    children: "Search results"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-login",
                                                                    children: "Login"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-signup",
                                                                    children: "Signup"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    className: "color-gray-500",
                                                                    href: "/page-404",
                                                                    children: "Page 404"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-500",
                                                    href: "/page-contact",
                                                    children: "Contact"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `burger-icon burger-icon-white ${openClass && "burger-close"}`,
                                    onClick: ()=>{
                                        handleOpen();
                                        handleRemove();
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "burger-icon-top"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "burger-icon-mid"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "burger-icon-bottom"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-right text-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "btn btn-search",
                                    href: "#",
                                    onClick: toggleTrueFalse
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(elements_SwitchButton, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: isToggled ? "form-search p-20 d-block" : " form-search p-20 d-none",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                            action: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "form-control",
                                                    type: "text",
                                                    placeholder: "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "btn-search-2"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "popular-keywords text-start mt-20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "mb-10 color-white",
                                                    children: "Popular tags:"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-600 mr-10 font-xs",
                                                    href: "#",
                                                    children: "# Travel,"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-600 mr-10 font-xs",
                                                    href: "#",
                                                    children: "# Tech,"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-600 mr-10 font-xs",
                                                    href: "#",
                                                    children: "# Movie"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-600 mr-10 font-xs",
                                                    href: "#",
                                                    children: "# Lifestyle"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    className: "color-gray-600 mr-10 font-xs",
                                                    href: "#",
                                                    children: "# Sport"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "btn btn-linear d-none d-sm-inline-block hover-up hover-shadow",
                                    href: "/page-login",
                                    children: "Subscribe"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/Sidebar.js



const Sidebar = ({ openClass  })=>{
    const [isActive, setIsActive] = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-header-wrapper-inner",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-header-content-area",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-logo border-gray-800",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                className: "d-flex",
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        width: "150px",
                                        className: "logo-night",
                                        alt: "GenZ",
                                        src: "assets/imgs/page/logo/Soff Study white logo.png"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        width: "150px",
                                        className: "d-none logo-day",
                                        alt: "GenZ",
                                        src: "assets/imgs/page/logo/Soff Study dark logo.png"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "perfect-scroll",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mobile-menu-wrap mobile-header-border",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        className: "mt-15",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "mobile-menu font-heading",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 1 ? "has-children active" : "has-children",
                                                    onClick: ()=>handleToggle(1),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-caret-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: "Home"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/",
                                                                        children: "Homepage - 1"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/index-2",
                                                                        children: "Homepage - 2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/index-3",
                                                                        children: "Homepage - 3"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/index-4",
                                                                        children: "Homepage - 4"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 2 ? "has-children active" : "has-children",
                                                    onClick: ()=>handleToggle(2),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-caret-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/#",
                                                            children: "Category"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-archive",
                                                                        children: "Blog Category 1"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-archive-2",
                                                                        children: "Blog Category 2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-archive-3",
                                                                        children: "Blog Category 3"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-archive-4",
                                                                        children: "Blog Category 4"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/blog-archive-5",
                                                                        children: "Blog Category 5"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 3 ? "has-children active" : "has-children",
                                                    onClick: ()=>handleToggle(3),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-caret-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/#",
                                                            children: "Single Post"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/single-sidebar",
                                                                        children: "Blog Single 1"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/single-no-sidebar",
                                                                        children: "Blog Single 2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/single-center",
                                                                        children: "Blog Single 3"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 5 ? "has-children active" : "has-children",
                                                    onClick: ()=>handleToggle(5),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-caret-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            className: "color-gray-500",
                                                            href: "/page-portfolio",
                                                            children: "Portfolio"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        className: "color-gray-500",
                                                                        href: "/page-portfolio",
                                                                        children: "My Portfolio"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        className: "color-gray-500",
                                                                        href: "/page-portfolio-2",
                                                                        children: "My Portfolio 2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        className: "color-gray-500",
                                                                        href: "/portfolio-details",
                                                                        children: "Portfolio Details"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 4 ? "has-children active" : "has-children",
                                                    onClick: ()=>handleToggle(4),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fi-rr-caret-down"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/#",
                                                            children: "Pages"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                            className: isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-about",
                                                                        children: "About"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-author",
                                                                        children: "Author posts"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-contact",
                                                                        children: "Contact"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-search",
                                                                        children: "Search results"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-login",
                                                                        children: "Login"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-signup",
                                                                        children: "Signup"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "/page-404",
                                                                        children: "Page 404"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-contact",
                                                        children: "Contact"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mobile-account border-gray-800",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mobile-header-top bg-gray-900",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "user-account",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/imgs/template/ava.jpg",
                                                            alt: "GenZ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                                                className: "user-name color-white",
                                                                children: [
                                                                    "Hello",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "color-white",
                                                                        children: " Steven !"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-xs text-muted",
                                                                children: "You have 3 new messages"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "mobile-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "Profile"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "Articles Saved"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "Add new post"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "My Likes"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "Account Setting"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/page-login",
                                                        children: "Sign out"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-copyright color-gray-400 mt-30",
                                    children: [
                                        "Copyright 2022 \xa9 Genz - Personal Blog Template.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Designed by",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "http://alithemes.com",
                                            target: "_blank",
                                            children: "\xa0 AliThemes"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./components/layout/Layout.js






const Layout = ({ children  })=>{
    const [openClass, setOpenClass] = (0,external_react_.useState)("");
    const handleOpen = ()=>{
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible");
    };
    const handleRemove = ()=>{
        if (openClass === "sidebar-visible") {
            setOpenClass("");
            document.body.classList.remove("mobile-menu-active");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            openClass && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-overlay-1",
                onClick: handleRemove
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                handleOpen: handleOpen,
                handleRemove: handleRemove,
                openClass: openClass
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {
                openClass: openClass
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(elements_BackToTop, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;