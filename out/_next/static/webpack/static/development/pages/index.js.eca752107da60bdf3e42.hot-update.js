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
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");
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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "contact",
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
  }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  })))), ryan.map(function (ryan) {
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
        lineNumber: 102,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 8
      }
    }, ryan.summary));
  })), __jsx("div", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list_item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
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
        lineNumber: 129,
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
      className: "jsx-3869142241 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3869142241",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.woff');}@font-face{font-family:'Trattatello';src:url('./static/TrattatelloFont.ttf');}@font-face{font-family:'ElfrethBlack';src:url('./static/ElfrethBlack.otf');}@font-face{font-family:'ElfrethBold';src:url('./static/ElfrethBold.otf');}.sidebar.jsx-3869142241{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(1,1fr);padding:0.625rem;}.sidebar-name.jsx-3869142241{font-size:3.6rem;line-height:4rem;margin-bottom:0.625rem;}.sidebar-inner.jsx-3869142241{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;height:calc(100% - 2.5rem);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-3869142241{font-family:'ProtoGroteskRegular';font-family:'Trattatello';font-family:'SwearTextRegular';font-size:1.4rem;line-height:1.8rem;}.sidebar-description.jsx-3869142241{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:1;height:100%;width:100%;overflow:hidden;padding:0 0.625rem;}.sidebar-date.jsx-3869142241{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-3869142241{grid-column-start:1;grid-column-end:1;grid-row-start:2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-3869142241{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-3869142241{height:3rem;margin-right:0.625rem;margin-top:0.625rem;cursor:pointer;}.contact.jsx-3869142241{grid-column-start:1;grid-row-start:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;height:100%;width:100%;font-family:'SwearTextRegular';}.contact-header.jsx-3869142241{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.3125rem;}.color-selector.jsx-3869142241{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-3869142241{grid-column-start:1;}.rpbw.jsx-3869142241{grid-column-start:2;}.color-option.jsx-3869142241{margin:0.3125rem;border-radius:10px;}.ryan.jsx-3869142241{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-3869142241 .list.jsx-3869142241 h3.jsx-3869142241{line-height:1em;padding:0.5em 0;}.tags.jsx-3869142241{grid-column-start:2;grid-row-start:2;font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ka0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBSVIsQUFJQyxBQUlELEFBUWQsQUFVSyxBQU1tQixBQVVGLEFBT0gsQUFXWCxBQVdBLEFBa0JELEFBT1AsQUFNUSxBQVlnQixBQU1oQixBQVFBLEFBSUEsQUFJSCxBQVlBLEFBU0QsQUFJSSxZQWhKQSxBQWdGRSxJQTZETixDQW5JQyxBQStHRSxBQVlQLEVBNURBLENBN0JNLEFBV0EsQUFnQ0QsQUFpQkEsQUFTbkIsQUFJQSxBQTRCbUIsTUFqS3VCLEFBUUosQ0FKQyxFQWtKakIsRUFsS3dCLEFBSUUsQUF5RDFCLENBMUV5QixBQTBDNUIsQUE2SW5CLENBL0tnRCxDQWFHLEFBK0IxQixBQWVHLEFBdUROLEVBdEg4QixBQXFEL0IsQUFrRkYsQUF3Qm5CLENBbENlLEFBaUJBLEFBeUN1QixDQXJHbkIsQUFXQSxXQXRESixBQXFJSSxDQTdCUyxDQXhFVCxFQWlFTyxDQWpCVCxDQWpFSyxBQTZCWSxBQWFiLEVBOUNyQixHQWNpQyxFQWxDakMsQUFVc0MsRUFkdEMsRUFKQSxBQXVKa0IsRUFyR0QsQ0FnRGpCLElBZ0VtQixFQTlLbkIsQUE2Q29CLENBeUZnQixDQW5KcEMsQUFpQkEsQUEySEEsRUFwSUEsR0F5S0EsQ0E1SkEsQUF1RGMsR0F4RWQsQ0FtRm1CLEdBcUdNLENBeEhOLEVBVFUsQUF1RE4sRUFyQ1YsR0FqQ3VCLE1BNEN0QixFQVZJLEVBVEcsQ0ErRUUsRUFuQkMsRUE0RHhCLE9BakllLEVBbUJNLEtBVHJCLEdBK0VBLENBeEdtQixVQW1DbkIsT0FqQ0EsQUFxRGUsdUJBZWEsT0ExQkosV0F5Q0gsS0FyRVcsY0FzRVIsY0E5QkMsUUErQlgsWUFDRCxXQUNvQix1QkFqQmpDLFFBa0JBLEdBN0M2QixzQkE1Qkwsc0JBd0NLLHdEQXZDN0IsS0E0QjZCLDJCQUM3QixpQkFXd0IsOEVBQ0osa0JBQ1AsV0FDSSxlQUVRLHVCQUV6QiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1L2V4YW1wbGUtZnJvbnRlbmQtbmV4dC1qcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcbmltcG9ydCBFbWFpbFNWRyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbWFpbFNWR1wiO1xuXG5jb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicnlhblwiXSB7XG4gIF9pZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIFwiaW1hZ2VBc3BlY3RcIjogaW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5kaW1lbnNpb25zLmFzcGVjdFJhdGlvLFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBzY2FsZVN0YXJ0ID0ge1xuICAgIHNjYWxlOiAuOCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCBzY2FsZUVuZCA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRTdGFydCA9IHtcbiAgICB4OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRFbmQgPSB7XG4gIHg6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcFN0YXJ0ID0ge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcEVuZCA9IHtcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cblxuXG5cbmNvbnN0IFJ5YW5zID0gKHsgcnlhbiB9KSA9PiB7XG5cbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBcblxuICAgXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICBcblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG5cbiAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZUxlZnRTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVMZWZ0RW5kfX0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1pbm5lclwiPlxuICAgICA8ZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi4gQ2xpY2sgb24gdGhlIGVtYWlsIHRvIGNvcHkgaXQuPC9kaXY+XG5cbiAgICAgPC9kaXY+XG5cbiAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVVcFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZVVwRW5kfX0+XG5cbiAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICAgIFxuICAgICA8L21vdGlvbi5kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gICAgIHsvKnJ5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRhdGVcIj57cnlhbi5kYXRlLnNwbGl0KFwiLVwiKVswXX08L2Rpdj4pKSkqL31cbiAgICAgXG4gICAgIFxuICAgICB7cnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiBcbiAgICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kZXNjcmlwdGlvblwiPntyeWFuLnN1bW1hcnl9PC9kaXY+XG4gICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICApKSl9XG5cbiAgICAgXG4gICAgICBcbiAgICAgXG4gICAgIFxuXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgXG4gICAgIFxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7cnlhbi5tYXAocnlhbiA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gY2xhc3NOYW1lPVwibGlzdF9pdGVtXCI+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRBY3RpdmUocnlhbi5faWQpfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtzZXRBY3RpdmUobnVsbCl9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxGb3Iocnlhbi5pbWFnZSkud2lkdGgoODAwKX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MDAgLyByeWFuLmltYWdlQXNwZWN0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfRGlzcGxheS1CbGFjay53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItQm9sZF9DaWxhdGkud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLVJlZ3VsYXIud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9UZXh0LVJlZ3VsYXIud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrQm9sZCc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1Cb2xkLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza1JlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdUcmF0dGF0ZWxsbyc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1RyYXR0YXRlbGxvRm9udC50dGYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsZnJldGhCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL0VsZnJldGhCbGFjay5vdGYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsZnJldGhCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvRWxmcmV0aEJvbGQub3RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1pbm5lciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMi41cmVtKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1RyYXR0YXRlbGxvJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGF0ZSB7XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBib3JkZXItdG9wOiAwcHggc29saWQgYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgICAgYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscy1idXR0b25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdF9pdGVtIHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGlzdF9pdGVtOmhvdmVyIHtcbiAgICAgICAgICBcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yeWFuIC5saXN0IGgzIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuXG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.eca752107da60bdf3e42.hot-update.js.map