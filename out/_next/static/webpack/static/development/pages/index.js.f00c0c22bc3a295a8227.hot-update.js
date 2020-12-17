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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar",
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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-bio",
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
      className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials",
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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact-header",
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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + ((copied ? "contact-email contact-email-clicked" : "contact-email") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "sheehan.w.ryan @gmail.com"))), __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials-buttons",
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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
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
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  })))))), __jsx("div", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
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
      className: "jsx-3632282745 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3632282745",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-3632282745{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);padding:0.625rem;}.sidebar-name.jsx-3632282745{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-3632282745{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-3632282745{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-3632282745{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-3632282745{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-3632282745{grid-column-start:1;grid-column-end:1;grid-row-start:2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding:0 0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-3632282745{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-3632282745{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-3632282745{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-3632282745{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-3632282745{font-size:1.6rem;word-wrap:break-word;-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;cursor:pointer;}.contact-email-clicked.jsx-3632282745::after{content:\"Copied!\";background-color:#FFE100;position:absolute;margin-left:-10px;font-family:'ProtoGroteskBold';font-size:0.8rem;}@-webkit-keyframes slideInFromBottom-jsx-3632282745{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes slideInFromBottom-jsx-3632282745{0%{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px);}100%{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}.contact-email.jsx-3632282745:hover{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;}.color-selector.jsx-3632282745{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-3632282745{grid-column-start:1;}.rpbw.jsx-3632282745{grid-column-start:2;}.color-option.jsx-3632282745{margin:0.3125rem;border-radius:10px;}.ryan.jsx-3632282745{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-3632282745 .list.jsx-3632282745 h3.jsx-3632282745{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWtCRCxBQU1QLEFBS0MsQUFPdUIsQUFLbkIsQUFRQyxBQVVVLEFBR0gsQUFLQyxBQUtOLEFBUUEsQUFJQSxBQUlILEFBS0EsQUFTRCxZQXpKSSxBQTRFRixJQThFRixDQS9JRyxBQWtGRSxBQWdERixBQUtQLENBN0NhLENBL0JiLENBN0JNLEFBV0EsQUF3RUQsQUFTbkIsQUFJQSxTQVVzQixDQXRFTCxDQTdGNkIsQUFJRSxBQTRDMUIsQ0E3RHlCLEFBOEI1QixBQTBKbkIsQ0FoTGdELEFBZ0Q3QixDQW5DK0IsRUFqQkUsQUFxQzNCLEFBSUosQUF3RUYsQUFzRG5CLENBakJlLENBbkZJLEFBV0EsQUF5Q0ksS0FRSCxFQXhCcEIsSUEzRWUsQUFpSkksQ0F2SG5CLEFBaUc0QixDQTVGVCxFQXVETSxFQXZFSCxBQXlCWSxBQWFiLElBM0NyQixDQTBHZ0MsQ0FoQlosQ0FuR2tCLElBaUpwQixFQWxIRCxNQThDTyxDQWhHeEIsQUFrQ29CLENBdUVwQixBQXFDb0MsQ0EzSnBDLEFBaUJBLEVBVEEsQUE0SGlDLEdBL0dqQyxBQTZKQSxDQWxIcUIsQ0E4RXBCLEVBMUlELENBb0VtQixDQW1EUyxLQTNFVCxBQW1EUyxBQXdDM0IsS0ExR21DLElBZ0NwQyxFQVFjLEtBbUZTLENBM0dOLEFBb0ZFLGVBbkZKLEVBcUZmLENBY0EsRUFRQSxDQTNIbUIsaUJBRW5CLEFBaURlLEFBdUNpQixJQWRYLG1CQUNHLE9BckNBLGVBc0NTLEtBWGpDLENBbER3QixpQkEwRVAsTUF2Q1EsRUEyQnpCLE9BYUEsOENBMUVBLFVBdUI2Qiw0Q0FZQSw2REFYQSwyQkFDN0IsaUJBV3dCLDhFQUNKLGtCQUNQLFdBQ0ksZUFDSSxtQkFDSSx1QkFFekIiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnOyBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbn1bMC4uLjUwXVxuYDtcblxuY29uc3Qgc2NhbGVTdGFydCA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3Qgc2NhbGVFbmQgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5jb25zdCB0cmFuc2xhdGVMZWZ0U3RhcnQgPSB7XG4gICAgeDogLTIwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVMZWZ0RW5kID0ge1xuICB4OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBTdGFydCA9IHtcbiAgICB5OiA0MDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBFbmQgPSB7XG4gIHk6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cblxuXG5jb25zdCBSeWFucyA9ICh7IHJ5YW4gfSkgPT4ge1xuXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChjb3BpZWQpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHNldENvcGllZChmYWxzZSk7XG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIFxuXG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cblxuICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRlclwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi48L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgey8qcnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGF0ZVwiPntyeWFuLmRhdGUuc3BsaXQoXCItXCIpWzBdfTwvZGl2PikpKSovfVxuICAgICBcbiAgICAgXG4gICAgIHtyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIFxuICAgICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRlc2NyaXB0aW9uXCI+e3J5YW4uc3VtbWFyeX08L2Rpdj5cbiAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICkpKX1cbiAgICAgIFxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbHNcIj5cbiAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj5Db250YWN0PC9kaXY+XG5cbiAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtcInNoZWVoYW4udy5yeWFuIEBnbWFpbC5jb21cIn1cbiAgICAgICAgICBvbkNvcHk9eygpID0+IHNldENvcGllZCh0cnVlKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvcGllZCA/IFwiY29udGFjdC1lbWFpbCBjb250YWN0LWVtYWlsLWNsaWNrZWRcIiA6IFwiY29udGFjdC1lbWFpbFwifT5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICBcbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxzLWJ1dHRvbnNcIj5cbiAgICAgPExpbmsgaHJlZj1cIi8vZ2l0aHViLmNvbS9SeWFuLVNoZWVoYW5cIj5cbiAgICAgPGltZyBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbFwiIHNyYz1cIi9naXRodWIuc3ZnXCIvPlxuICAgICA8L0xpbms+XG4gICAgIDxMaW5rIGhyZWY9XCIvL3d3dy5pbnN0YWdyYW0uY29tL3J5YW5fX3NoZWVoYW4vXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvaW5zdGFncmFtLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgXG5cbiAgICAgPC9kaXY+XG4gICAgIFxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7cnlhbi5tYXAocnlhbiA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0QWN0aXZlKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7c2V0QWN0aXZlKG51bGwpfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Rpc3BsYXktQmxhY2sud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLUJvbGRfQ2lsYXRpLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfVGV4dC1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItQm9sZC53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLVJlZ3VsYXIuZW90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRhdGUge1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscy1idXR0b25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbCB7XG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwLjYyNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkUxMDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0LWVtYWlsLWNsaWNrZWQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIkNvcGllZCFcIjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFMTAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tCb2xkJztcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAgICAgICAgMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gICAgICAgICB9XG4gICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgfVxuICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC1lbWFpbDpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRkZFMTAwO1xuXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLXNlbGVjdG9yIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5nYnlvIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucnBidyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwLjMxMjVyZW07XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yeWFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJ5YW4gLmxpc3QgaDMge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.f00c0c22bc3a295a8227.hot-update.js.map