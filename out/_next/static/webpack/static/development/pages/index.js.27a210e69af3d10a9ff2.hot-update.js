webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
var _this = undefined,
    _jsxFileName = "/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var hidden = {
  scale: .8,
  opacity: 0
};
var visible = {
  scale: 1,
  opacity: 1,
  transition: {
    delay: 0
  }
};

var Ryans = function Ryans(_ref) {
  var ryan = _ref.ryan;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      active = _useState[0],
      setActive = _useState[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description.")), ryan.map(function (ryan) {
    return ryan._id == active && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      key: ryan._id,
      initial: "hidden",
      animate: "visible",
      variants: {
        hidden: hidden,
        visible: visible
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, "sheehan.w.ryan @gmail.com")), __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/Ryan-Sheehan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/github.svg",
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.instagram.com/ryan__sheehan/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/instagram.svg",
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }))))), __jsx("div", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      initial: "hidden",
      animate: "visible",
      variants: {
        hidden: hidden,
        visible: visible
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, __jsx("img", {
      onMouseEnter: function onMouseEnter() {
        setActive(ryan._id);
      },
      onMouseLeave: function onMouseLeave() {
        setActive(null);
      },
      src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_7__["default"])(ryan.image).width(800),
      width: "800",
      height: 800 / ryan.imageAspect,
      className: "jsx-4271162114 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4271162114",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-4271162114{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr);padding:0.625rem;}.sidebar-name.jsx-4271162114{font-size:2.8rem;}.sidebar-header.jsx-4271162114{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-4271162114{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-4271162114{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-4271162114{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-4271162114{grid-column-start:1;grid-column-end:1;grid-row-start:3;padding:0 0.625rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20vw;position:absolute;bottom:0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-4271162114{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-4271162114{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-4271162114{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-4271162114{font-family:'SwearBannerBoldCilati';font-size:1.6rem;}.contact-email.jsx-4271162114{font-size:1.6rem;word-wrap:break-word;}.color-selector.jsx-4271162114{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-4271162114{grid-column-start:1;}.rpbw.jsx-4271162114{grid-column-start:2;}.color-option.jsx-4271162114{margin:0.3125rem;border-radius:10px;}.ryan.jsx-4271162114{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-4271162114 .list.jsx-4271162114 h3.jsx-4271162114{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFHbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWFSLEFBS0EsQUFLQyxBQU91QixBQUluQixBQUlHLEFBUUEsQUFJQSxBQUlILEFBS0EsQUFTRCxZQXJISSxBQW9FRixJQWtERixDQTNHbEIsQUF5RXVCLEFBcUJGLEFBS1AsR0F2RU0sQUFXQSxBQXNDRCxBQVNuQixBQUlBLFNBVXNCLENBMUNMLENBckY2QixBQUlFLEFBMEMxQixDQTNEeUIsQUE4QjVCLEFBc0huQixDQTVJZ0QsQUE4QzdCLENBakMrQixFQWpCRSxBQXVDL0IsQUFrRUYsQUEwQm5CLENBakJlLENBakRJLEFBV0EsQUFrQ25CLE9BZkEsSUFuRWUsQUE2R0ksQ0FyRm5CLEFBK0Q0QixDQTFEVCxFQWlEbkIsRUFqRXNCLEFBeUJZLEFBWWIsT0FqRGlCLElBNkdwQixFQWhGRCxNQXFCSSxBQVNPLEFBVUosQ0F4RnhCLEFBZ0NvQixDQTBFZ0IsQ0F2SHBDLEFBaUJBLEVBVEEsR0FhQSxBQXlIQSxDQWhGcUIsR0ExRHJCLENBa0VtQixNQXhCQSxLQWJpQixJQThCcEMsRUFRYyxLQWlEUyxDQXpFTixlQUNGLEtBeUVmLENBdkZtQixpQkFFbkIsSUFrRXFCLGVBbkJSLElBb0JXLE9BL0JBLEFBWUosQ0FTcEIsY0FXaUMsR0FuQmYsR0FwQ00sYUFzQ0MsWUFrQnpCLFdBakJBLDBDQXRDQSxVQXVCNkIseUdBQ0EsMkJBQzdCIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzYW5pdHkgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBsaXN0U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGlzdFwiO1xuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5jb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicnlhblwiXSB7XG4gIF9pZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIFwiaW1hZ2VBc3BlY3RcIjogaW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5kaW1lbnNpb25zLmFzcGVjdFJhdGlvLFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBoaWRkZW4gPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHZpc2libGUgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgUnlhbnMgPSAoeyByeWFuIH0pID0+IHtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWVcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uPC9kaXY+XG4gICAgIFxuICAgICB7LypyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kYXRlXCI+e3J5YW4uZGF0ZS5zcGxpdChcIi1cIilbMF19PC9kaXY+KSkpKi99XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgXG4gICAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IGhpZGRlbix2aXNpYmxlOiB2aXNpYmxlfX0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRlc2NyaXB0aW9uXCI+e3J5YW4uc3VtbWFyeX08L2Rpdj5cbiAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICkpKX1cbiAgICAgIFxuICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsc1wiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWhlYWRlclwiPkNvbnRhY3Q8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWVtYWlsXCI+c2hlZWhhbi53LnJ5YW4gQGdtYWlsLmNvbTwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbHMtYnV0dG9uc1wiPlxuICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1J5YW4tU2hlZWhhblwiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2dpdGh1Yi5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcnlhbl9fc2hlZWhhbi9cIj5cbiAgICAgPGltZyBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbFwiIHNyYz1cIi9pbnN0YWdyYW0uc3ZnXCIvPlxuICAgICA8L0xpbms+XG4gICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7cnlhbi5tYXAocnlhbiA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IGhpZGRlbix2aXNpYmxlOiB2aXNpYmxlfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEFjdGl2ZShyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldEFjdGl2ZShudWxsKX19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9EaXNwbGF5LUJsYWNrLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1Cb2xkX0NpbGF0aS53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX1RleHQtUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLUJvbGQud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1SZWd1bGFyLmVvdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItYmlvIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGF0ZSB7XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBib3JkZXItdG9wOiAwcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzLWJ1dHRvbnMge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbCB7XG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwLjYyNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yeWFuIC5saXN0IGgzIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.27a210e69af3d10a9ff2.hot-update.js.map