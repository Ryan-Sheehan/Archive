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
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
var _this = undefined,
    _jsxFileName = "/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var scaleStart = {
  scale: .8,
  opacity: 0
};
var scaleEnd = {
  scale: 1,
  opacity: 1,
  transition: {
    delay: 0
  }
};
var translateLeftStart = {
  x: -200,
  opacity: 0
};
var translateLeftEnd = {
  x: 0,
  opacity: 1,
  transition: {
    delay: 0
  }
};
var translateUpStart = {
  y: 400,
  opacity: 0
};
var translateUpEnd = {
  y: 0,
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      copied = _useState2[0],
      setCopied = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (copied) {
      setInterval(function () {
        setCopied(false);
      }, 2000);
    }
  });
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    key: ryan._id,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: translateLeftStart,
      visible: translateLeftEnd
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 6
    }
  }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description."))), ryan.map(function (ryan) {
    return ryan._id == active && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      key: ryan._id,
      initial: "hidden",
      animate: "visible",
      variants: {
        hidden: scaleStart,
        visible: scaleEnd
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    key: ryan._id,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: translateUpStart,
      visible: translateUpEnd
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, "Contact"), __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["CopyToClipboard"], {
    text: "sheehan.w.ryan @gmail.com",
    onCopy: function onCopy() {
      return setCopied(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((copied ? "contact-email contact-email-clicked" : "contact-email") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "sheehan.w.ryan @gmail.com"))), __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//github.com/Ryan-Sheehan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/github.svg",
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//www.instagram.com/ryan__sheehan/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/instagram.svg",
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  })))))), __jsx("div", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      initial: "hidden",
      animate: "visible",
      variants: {
        hidden: scaleStart,
        visible: scaleEnd
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, __jsx("img", {
      onMouseEnter: function onMouseEnter() {
        setActive(ryan._id);
      },
      onMouseLeave: function onMouseLeave() {
        setActive(null);
      },
      src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_8__["default"])(ryan.image).width(800),
      width: "800",
      height: 800 / ryan.imageAspect,
      className: "jsx-1414065060 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1414065060",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-1414065060{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);padding:0.625rem;}.sidebar-name.jsx-1414065060{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-1414065060{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-1414065060{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-1414065060{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-1414065060{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-1414065060{grid-column-start:1;grid-column-end:1;grid-row-start:2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding:0 0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-1414065060{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-1414065060{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-1414065060{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-1414065060{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-1414065060{font-size:1.6rem;word-wrap:break-word;-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;cursor:pointer;}.contact-email-clicked.jsx-1414065060::after{content:\"Copied!\";background-color:#FFE100;position:absolute;margin-left:-10px;font-family:'ProtoGroteskBold';font-size:0.8rem;-webkit-animation:200ms ease-out 0s slideInFromBottom-jsx-1414065060;animation:200ms ease-out 0s slideInFromBottom-jsx-1414065060;}@-webkit-keyframes slideInFromBottom-jsx-1414065060{0%{-webkit-transform:translateX(15px) scale(0);-ms-transform:translateX(15px) scale(0);transform:translateX(15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}@keyframes slideInFromBottom-jsx-1414065060{0%{-webkit-transform:translateX(15px) scale(0);-ms-transform:translateX(15px) scale(0);transform:translateX(15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}.contact-email.jsx-1414065060:hover{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;}.color-selector.jsx-1414065060{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-1414065060{grid-column-start:1;}.rpbw.jsx-1414065060{grid-column-start:2;}.color-option.jsx-1414065060{margin:0.3125rem;border-radius:10px;}.ryan.jsx-1414065060{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-1414065060 .list.jsx-1414065060 h3.jsx-1414065060{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWtCRCxBQU1QLEFBS0MsQUFPdUIsQUFLbkIsQUFRQyxBQVdtQixBQUdILEFBS1IsQUFLTixBQVFBLEFBSUEsQUFJSCxBQUtBLEFBU0QsWUExSkksQUE0RUYsSUErRUYsQ0FoSkcsQUFrRkUsQUFpREYsQUFLUCxDQTlDYSxDQS9CYixDQTdCTSxBQVdBLEFBeUVELEFBU25CLEFBSUEsU0FVc0IsQ0F2RUwsQ0E3RjZCLEFBSUUsQUE0QzFCLENBN0R5QixBQThCNUIsQUEySm5CLENBakxnRCxBQWdEN0IsQ0FuQytCLEVBakJFLEFBcUMzQixBQUlKLEFBd0VGLEFBdURuQixDQWpCZSxDQXBGSSxBQVdBLEFBeUNJLEtBUUgsRUF4QnBCLElBM0VlLEFBa0pJLENBeEhuQixBQWtHNEIsQ0E3RlQsRUF1RE0sRUF2RUgsQUF5QlksQUFhYixJQTNDckIsQ0EyR2dDLENBakJaLENBbkdrQixJQWtKcEIsRUFuSEQsTUE4Q08sQ0FoR3hCLEFBa0NvQixDQXVFcEIsQUFzQ29DLENBNUpwQyxBQWlCQSxFQVRBLEFBNEhpQyxHQS9HakMsQUE4SkEsQ0FuSHFCLEdBNURyQixDQW9FbUIsQ0FtRFMsS0EzRVQsQUFtRFMsS0FsRVEsSUFnQ3BDLEVBUWMsS0FvRlMsQ0E1R04sQUFvRkUsQ0FVbEIsU0FIQSxLQTFGYyxFQW9GaUMsQ0FnQmhELEVBUUEsQ0E1SG1CLGlCQUVuQixBQWlEZSxBQXVDaUIsSUFkWCxtQkFDRyxPQXJDQSxlQXNDUyxLQVhqQyxDQWxEd0IsaUJBMEVQLE1BdkNRLEVBMkJ6QixPQWFBLDBCQVVBLG9CQXBGQSxVQXVCNkIsNENBWUEsNkRBWEEsMkJBQzdCLGlCQVd3Qiw4RUFDSixrQkFDUCxXQUNJLGVBQ0ksbUJBQ0ksdUJBRXpCIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cblxuY29uc3QgUnlhbnMgPSAoeyByeWFuIH0pID0+IHtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoY29waWVkKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRDb3BpZWQoZmFsc2UpO1xuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICBcblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG5cbiAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZUxlZnRTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVMZWZ0RW5kfX0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWVcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gICAgIHsvKnJ5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRhdGVcIj57cnlhbi5kYXRlLnNwbGl0KFwiLVwiKVswXX08L2Rpdj4pKSkqL31cbiAgICAgXG4gICAgIFxuICAgICB7cnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiBcbiAgICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kZXNjcmlwdGlvblwiPntyeWFuLnN1bW1hcnl9PC9kaXY+XG4gICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICApKSl9XG4gICAgICBcbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxzXCI+XG4gICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVVcFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZVVwRW5kfX0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+Q29udGFjdDwvZGl2PlxuXG4gICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17XCJzaGVlaGFuLncucnlhbiBAZ21haWwuY29tXCJ9XG4gICAgICAgICAgb25Db3B5PXsoKSA9PiBzZXRDb3BpZWQodHJ1ZSl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb3BpZWQgPyBcImNvbnRhY3QtZW1haWwgY29udGFjdC1lbWFpbC1jbGlja2VkXCIgOiBcImNvbnRhY3QtZW1haWxcIn0+c2hlZWhhbi53LnJ5YW4gQGdtYWlsLmNvbTwvZGl2PlxuICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgXG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCIvL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiLy93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgPC9kaXY+XG4gICAgIFxuXG4gICAgIDwvZGl2PlxuICAgICBcblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEFjdGl2ZShyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldEFjdGl2ZShudWxsKX19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9EaXNwbGF5LUJsYWNrLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1Cb2xkX0NpbGF0aS53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX1RleHQtUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLUJvbGQud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1SZWd1bGFyLmVvdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1iaW8ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJSZWd1bGFyJztcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kYXRlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgICBib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMtYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMC42MjVyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRkZFMTAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbC1jbGlja2VkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJDb3BpZWQhXCI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTEwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrQm9sZCc7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgYW5pbWF0aW9uOiAyMDBtcyBlYXNlLW91dCAwcyBzbGlkZUluRnJvbUJvdHRvbTtcblxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAgICAgICAgMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCkgc2NhbGUoMCk7XG4gICAgICAgICB9XG4gICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC1lbWFpbDpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRkZFMTAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLXNlbGVjdG9yIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5nYnlvIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucnBidyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwLjMxMjVyZW07XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yeWFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJ5YW4gLmxpc3QgaDMge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.f74a934d8ca1fbd90a58.hot-update.js.map