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
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-bio",
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
      className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, "Contact"), __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "contact-email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, "sheehan.w.ryan @gmail.com")), __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-socials-buttons",
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
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
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
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }))))), __jsx("div", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
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
      className: "jsx-1208310216 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1208310216",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-1208310216{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(3,1fr);padding:0.625rem;}.sidebar-name.jsx-1208310216{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-1208310216{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-1208310216{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-1208310216{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-1208310216{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-1208310216{grid-column-start:1;grid-column-end:1;grid-row-start:3;padding:0 0.625rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20vw;position:absolute;bottom:0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-1208310216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-1208310216{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-1208310216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-1208310216{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-1208310216{font-size:1.6rem;word-wrap:break-word;}.color-selector.jsx-1208310216{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-1208310216{grid-column-start:1;}.rpbw.jsx-1208310216{grid-column-start:2;}.color-option.jsx-1208310216{margin:0.3125rem;border-radius:10px;}.ryan.jsx-1208310216{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-1208310216 .list.jsx-1208310216 h3.jsx-1208310216{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdHa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWFSLEFBS0EsQUFLQyxBQU91QixBQUtuQixBQUlHLEFBUUEsQUFJQSxBQUlILEFBS0EsQUFTRCxZQXhISSxBQXNFRixJQW1ERixDQTlHRyxBQTRFRSxBQXFCRixBQUtQLEdBeEVNLEFBV0EsQUF1Q0QsQUFTbkIsQUFJQSxTQVVzQixDQTNDTCxDQXZGNkIsQUFJRSxBQTRDMUIsQ0E3RHlCLEFBOEI1QixBQXlIbkIsQ0EvSWdELEFBZ0Q3QixDQW5DK0IsRUFqQkUsQUFxQzNCLEFBSUosQUFrRUYsQUEyQm5CLENBakJlLENBbERJLEFBV0EsQUFtQ25CLE9BaEJBLElBckVlLEFBZ0hJLENBdEZuQixBQWdFNEIsQ0EzRFQsRUFpRE0sRUFqRUgsQUF5QlksQUFZYixJQTFDckIsR0FUc0MsSUFnSHBCLEVBakZELE1BcUJJLEFBU08sQUFVSixDQTFGeEIsQUFrQ29CLENBaUVwQixBQVVvQyxDQTFIcEMsQUFpQkEsRUFUQSxHQWFBLEFBNEhBLENBakZxQixHQTVEckIsQ0FvRW1CLE1BeEJBLEtBZmlCLElBZ0NwQyxFQVFjLEtBa0RTLENBMUVOLGVBQ0YsS0EwRWYsQ0ExRm1CLGlCQUVuQixJQW9FcUIsZUFuQlIsSUFvQlcsT0EvQkEsQUFZSixDQVNwQixjQVdpQyxHQW5CZixHQXBDTSxhQXNDQyxZQWtCekIsV0FqQkEsMENBdENBLFVBdUI2Qix5R0FDQSwyQkFDN0IiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IGhpZGRlbiA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdmlzaWJsZSA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCBSeWFucyA9ICh7IHJ5YW4gfSkgPT4ge1xuXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRlclwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi48L2Rpdj5cbiAgICAgXG4gICAgIHsvKnJ5YW4ubWFwKHJ5YW4gPT4gKChyeWFuLl9pZCA9PSBhY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRhdGVcIj57cnlhbi5kYXRlLnNwbGl0KFwiLVwiKVswXX08L2Rpdj4pKSkqL31cbiAgICAgPC9kaXY+XG4gICAgIFxuICAgICB7cnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiBcbiAgICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogaGlkZGVuLHZpc2libGU6IHZpc2libGV9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGVzY3JpcHRpb25cIj57cnlhbi5zdW1tYXJ5fTwvZGl2PlxuICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgKSkpfVxuICAgICAgXG4gICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxzXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaGVhZGVyXCI+Q29udGFjdDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZW1haWxcIj5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgIHtyeWFuLm1hcChyeWFuID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtXCI+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogaGlkZGVuLHZpc2libGU6IHZpc2libGV9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25Nb3VzZUVudGVyPXsoKSA9PiB7c2V0QWN0aXZlKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7c2V0QWN0aXZlKG51bGwpfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Rpc3BsYXktQmxhY2sud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLUJvbGRfQ2lsYXRpLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfVGV4dC1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItQm9sZC53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLVJlZ3VsYXIuZW90Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuMnJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LWVuZDogMztcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRhdGUge1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscy1idXR0b25zIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMC42MjVyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgfVxuICAgICAgICAuY29sb3Itc2VsZWN0b3Ige1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmdieW8ge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5ycGJ3IHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuY29sb3Itb3B0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDAuMzEyNXJlbTtcblxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJ5YW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucnlhbiAubGlzdCBoMyB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJ5YW4gPSBhd2FpdCBzYW5pdHkuZmV0Y2gocXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcnlhbiB9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSeWFuczsiXX0= */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_6__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.f221e15fedd950fada37.hot-update.js.map