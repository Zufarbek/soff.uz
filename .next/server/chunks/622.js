"use strict";
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 4622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const PortfolioFilter = ({ col , show  })=>{
    const portfolio = [
        {
            name: "Flyer design",
            category: [
                "all",
                "web",
                "motion"
            ],
            img: "img1.png"
        },
        {
            name: "Banner design",
            category: [
                "all",
                "graphic",
                "web"
            ],
            img: "img2.png"
        },
        {
            name: "Disk cover",
            category: [
                "all",
                "graphic",
                "motion "
            ],
            img: "img3.png"
        },
        {
            name: "Pattern design",
            category: [
                "all",
                "motion",
                "mobile"
            ],
            img: "img4.png"
        },
        {
            name: "Logo design",
            category: [
                "all",
                "web",
                "graphic"
            ],
            img: "img5.png"
        },
        {
            name: "Animal pattern",
            category: [
                "all",
                "mobile"
            ],
            img: "img5.png"
        }
    ];
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setProjects(portfolio);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setProjects([]);
        const filtered = portfolio.map((p)=>({
                ...p,
                filtered: p.category.includes(filter)
            }));
        setProjects(filtered);
    }, [
        filter
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row text-center filter-nav",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".0s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `btn btn-border-linear btn-filter hover-up ${filter === "all" && "active"}`,
                                active: filter === "all" ? 1 : 0,
                                onClick: ()=>setFilter("all"),
                                children: "All Projects"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".1s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `btn btn-border-linear btn-filter hover-up ${filter === "web" && "active"}`,
                                onClick: ()=>setFilter("web"),
                                children: "Web Development"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".2s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `btn btn-border-linear btn-filter hover-up ${filter === "mobile" && "active"}`,
                                onClick: ()=>setFilter("mobile"),
                                children: "Mobile App"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".3s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `btn btn-border-linear btn-filter hover-up ${filter === "motion" && "active"}`,
                                onClick: ()=>setFilter("motion"),
                                children: "Motion"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".4s",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `btn btn-border-linear btn-filter hover-up ${filter === "graphic" && "active"}`,
                                onClick: ()=>setFilter("graphic"),
                                children: "Graphic Design"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-70 mb-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: projects.slice(0, show).map((item)=>item.filtered === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `col-lg-${col}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "project",
                                "data-category": "web motion",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item-content",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "card-style-1 hover-up mb-30",
                                        "data-wow-delay": ".0s",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "card-image",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "link-post",
                                                href: "#",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: `assets/imgs/page/about/${item.img}`,
                                                        alt: "Genz"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "card-info card-bg-2",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info-bottom mb-15",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    className: "color-white mb-10",
                                                                    children: item.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "color-gray-500 text-sm",
                                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat vitae risus eget maximus. Pellentesque suscipit"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }, item.name) : null)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioFilter);


/***/ })

};
;