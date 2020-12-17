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
var translateStart = {
  originX: 0.5,
  opacity: 0
};
var translateEnd = {
  originX: 0,
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
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    key: ryan._id,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: translateStart,
      visible: translateEnd
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description.")), ryan.map(function (ryan) {
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
        lineNumber: 69,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 6
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }, "sheehan.w.ryan @gmail.com")), __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/Ryan-Sheehan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/github.svg",
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://www.instagram.com/ryan__sheehan/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/instagram.svg",
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  })))))), __jsx("div", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
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
        lineNumber: 103,
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
      className: "jsx-1490533702 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1490533702",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-1490533702{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);padding:0.625rem;}.sidebar-name.jsx-1490533702{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-1490533702{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-1490533702{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-1490533702{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-1490533702{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-1490533702{grid-column-start:1;grid-column-end:1;grid-row-start:3;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:1.25rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-1490533702{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-1490533702{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-1490533702{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-1490533702{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-1490533702{font-size:1.6rem;word-wrap:break-word;}.color-selector.jsx-1490533702{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-1490533702{grid-column-start:1;}.rpbw.jsx-1490533702{grid-column-start:2;}.color-option.jsx-1490533702{margin:0.3125rem;border-radius:10px;}.ryan.jsx-1490533702{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-1490533702 .list.jsx-1490533702 h3.jsx-1490533702{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWdCRCxBQU1QLEFBS0MsQUFPdUIsQUFLbkIsQUFJRyxBQVFBLEFBSUEsQUFJSCxBQUtBLEFBU0QsWUE1SEksQUEwRUYsSUFtREYsQ0FsSEcsQUFnRkUsQUFxQkYsQUFLUCxFQWpEQSxDQTNCTSxBQVdBLEFBMkNELEFBU25CLEFBSUEsU0FVc0IsQ0EzQ0wsQ0EzRjZCLEFBSUUsQUE0QzFCLENBN0R5QixBQThCNUIsQUE2SG5CLENBbkpnRCxBQWdEN0IsQ0FuQytCLEVBakJFLEFBcUMzQixBQUlKLEFBc0VGLEFBMkJuQixDQWpCZSxDQXRESSxBQVdBLEFBdUNuQixPQWhCQSxJQXpFZSxBQW9ISSxDQTFGbkIsQUFvRTRCLENBL0RULEVBcURNLEVBckVILEFBeUJZLEFBYWIsSUEzQ3JCLEdBVHNDLElBb0hwQixFQXJGRCxNQTRDTyxDQTlGeEIsQUFrQ29CLENBcUVwQixBQVVvQyxDQTlIcEMsQUFpQkEsRUFUQSxHQWFBLEFBZ0lBLENBckZxQixHQTVEckIsQ0FvRW1CLE1BeEJBLEFBaURTLEtBaEVRLElBZ0NwQyxFQVFjLEtBc0RTLENBOUVOLGVBQ0YsS0E4RWYsQ0E5Rm1CLGlCQUVuQixBQWlEZSxJQXVCTSxtQkFDRyxPQW5DQSxlQW9DUyxLQVhqQyxDQWhEd0IsdUJBbUNELEVBeUJ2QixxREEzREEsVUF1QjZCLG9DQVlBLHFFQVhBLDJCQUM3QixTQVd3Qiw4RUFDQSxzQkFFQyx1QkFFekIiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlU3RhcnQgPSB7XG4gICAgb3JpZ2luWDogMC41LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUVuZCA9IHtcbiAgb3JpZ2luWDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cbmNvbnN0IFJ5YW5zID0gKHsgcnlhbiB9KSA9PiB7XG5cbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIFxuXG4gICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1oZWFkZXJcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWVcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uPC9kaXY+XG4gICAgIFxuICAgICB7LypyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kYXRlXCI+e3J5YW4uZGF0ZS5zcGxpdChcIi1cIilbMF19PC9kaXY+KSkpKi99XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgXG4gICAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGVzY3JpcHRpb25cIj57cnlhbi5zdW1tYXJ5fTwvZGl2PlxuICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgKSkpfVxuICAgICAgXG4gICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxzXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+Q29udGFjdDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZW1haWxcIj5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7cnlhbi5tYXAocnlhbiA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0QWN0aXZlKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7c2V0QWN0aXZlKG51bGwpfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Rpc3BsYXktQmxhY2sud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLUJvbGRfQ2lsYXRpLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfVGV4dC1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItQm9sZC53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLVJlZ3VsYXIuZW90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRhdGUge1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzLWJ1dHRvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFsIHtcbiAgICAgICAgICBoZWlnaHQ6IDRyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0LWVtYWlsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLXNlbGVjdG9yIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5nYnlvIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucnBidyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwLjMxMjVyZW07XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yeWFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJ5YW4gLmxpc3QgaDMge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.5c0c1fd4c21260773e3f.hot-update.js.map