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
  y: -200,
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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 75,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
        lineNumber: 85,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
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
      lineNumber: 91,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, "sheehan.w.ryan @gmail.com")), __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//github.com/Ryan-Sheehan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/github.svg",
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 6
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//www.instagram.com/ryan__sheehan/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/instagram.svg",
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  })))))), __jsx("div", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
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
        lineNumber: 121,
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
      className: "jsx-2381874785 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2381874785",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-2381874785{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);padding:0.625rem;}.sidebar-name.jsx-2381874785{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-2381874785{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-2381874785{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-2381874785{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-2381874785{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-2381874785{grid-column-start:1;grid-column-end:1;grid-row-start:2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding:0 0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-2381874785{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-2381874785{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-2381874785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-2381874785{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-2381874785{font-size:1.6rem;word-wrap:break-word;}.color-selector.jsx-2381874785{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-2381874785{grid-column-start:1;}.rpbw.jsx-2381874785{grid-column-start:2;}.color-option.jsx-2381874785{margin:0.3125rem;border-radius:10px;}.ryan.jsx-2381874785{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-2381874785 .list.jsx-2381874785 h3.jsx-2381874785{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJJa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWtCRCxBQU1QLEFBS0MsQUFPdUIsQUFLbkIsQUFJRyxBQVFBLEFBSUEsQUFJSCxBQUtBLEFBU0QsWUE5SEksQUE0RUYsSUFtREYsQ0FwSEcsQUFrRkUsQUFxQkYsQUFLUCxFQWpEQSxDQTdCTSxBQVdBLEFBNkNELEFBU25CLEFBSUEsU0FVc0IsQ0EzQ0wsQ0E3RjZCLEFBSUUsQUE0QzFCLENBN0R5QixBQThCNUIsQUErSG5CLENBckpnRCxBQWdEN0IsQ0FuQytCLEVBakJFLEFBcUMzQixBQUlKLEFBd0VGLEFBMkJuQixDQWpCZSxDQXhESSxBQVdBLEFBeUNuQixPQWhCQSxJQTNFZSxBQXNISSxDQTVGbkIsQUFzRTRCLENBakVULEVBdURNLEVBdkVILEFBeUJZLEFBYWIsSUEzQ3JCLEdBVHNDLElBc0hwQixFQXZGRCxNQThDTyxDQWhHeEIsQUFrQ29CLENBdUVwQixBQVVvQyxDQWhJcEMsQUFpQkEsRUFUQSxHQWFBLEFBa0lBLENBdkZxQixHQTVEckIsQ0FvRW1CLE1BeEJBLEFBbURTLEtBbEVRLElBZ0NwQyxFQVFjLEtBd0RTLENBaEZOLGVBQ0YsS0FnRmYsQ0FoR21CLGlCQUVuQixBQWlEZSxJQXlCTSxtQkFDRyxPQXJDQSxlQXNDUyxLQVhqQyxDQWxEd0IsdUJBbUNDLEVBMkJ6QixxREE3REEsVUF1QjZCLDRDQVlBLDZEQVhBLDJCQUM3QixpQkFXd0IsOEVBQ0osa0JBQ1AsV0FDSSxlQUNJLG1CQUNJLHVCQUV6QiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1L2V4YW1wbGUtZnJvbnRlbmQtbmV4dC1qcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbn1bMC4uLjUwXVxuYDtcblxuY29uc3Qgc2NhbGVTdGFydCA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3Qgc2NhbGVFbmQgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5jb25zdCB0cmFuc2xhdGVMZWZ0U3RhcnQgPSB7XG4gICAgeDogLTIwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVMZWZ0RW5kID0ge1xuICB4OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBTdGFydCA9IHtcbiAgICB5OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cblxuY29uc3QgUnlhbnMgPSAoeyByeWFuIH0pID0+IHtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgXG5cbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxuXG4gICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVMZWZ0U3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlTGVmdEVuZH19PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaGVhZGVyXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIEhvdmVyIG92ZXIgYW55IHBpZWNlIGZvciBhIGRlc2NyaXB0aW9uLjwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICAgICB7LypyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kYXRlXCI+e3J5YW4uZGF0ZS5zcGxpdChcIi1cIilbMF19PC9kaXY+KSkpKi99XG4gICAgIFxuICAgICBcbiAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgXG4gICAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGVzY3JpcHRpb25cIj57cnlhbi5zdW1tYXJ5fTwvZGl2PlxuICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgKSkpfVxuICAgICAgXG4gICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVVcFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZVVwRW5kfX0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxzXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+Q29udGFjdDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZW1haWxcIj5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCIvL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiLy93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgPC9kaXY+XG4gICAgIFxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7cnlhbi5tYXAocnlhbiA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0QWN0aXZlKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7c2V0QWN0aXZlKG51bGwpfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Rpc3BsYXktQmxhY2sud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLUJvbGRfQ2lsYXRpLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfVGV4dC1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItQm9sZC53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLVJlZ3VsYXIuZW90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRhdGUge1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscy1idXR0b25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbCB7XG4gICAgICAgICAgaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgIG1hcmdpbjogMCAwLjYyNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yeWFuIC5saXN0IGgzIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.1ab8c6db40a1e7acda8b.hot-update.js.map