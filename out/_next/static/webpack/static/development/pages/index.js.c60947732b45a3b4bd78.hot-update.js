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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _styles_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/info */ "./styles/info.js");
/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/sidebar */ "./styles/sidebar.js");
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");







var _jsxFileName = "/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











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

var Ryans = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Ryans, _React$Component);

  var _super = _createSuper(Ryans);

  function Ryans(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ryans);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function (id) {
      console.log(_this.domRefs[id]);

      if (_this.state.active === id) {
        _this.setState({
          active: null
        });
      } else {
        _this.setState({
          active: id
        });
      }

      _this.domRefs[id].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onItemClick", function () {});

    _this.state = {
      active: null
    };
    _this.domRefs = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ryans, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          opacity: this.state.active !== null ? '0' : '1'
        },
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: translateLeftStart,
          visible: translateLeftEnd
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-inner ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-name no-flickr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
        className: "contact",
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: translateUpStart,
          visible: translateUpEnd
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 8
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "info-open" : "info") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-desc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      }, this.props.ryan.map(function (ryan, i) {
        return __jsx("li", {
          key: ryan._id,
          ref: function ref(_ref) {
            _this2.domRefs[ryan._id] = _ref;
          },
          onClick: function onClick() {
            _this2.handleClick(ryan._id);
          },
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list_item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 17
          }
        }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
          initial: "hidden",
          animate: "visible",
          variants: {
            hidden: scaleStart,
            visible: scaleEnd
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_16__["default"])(ryan.image).width(800),
          width: "800",
          height: 800 / ryan.imageAspect,
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash) + " jsx-2604936215 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2298475855", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 21
          }
        }))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2298475855",
        dynamic: [_this2.state.active !== null ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.active !== null ? '#000' : '#fff', ";color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtNeUIsQUFHb0IsU0FFMEIsbUNBQ0Qsa0NBQ1gsc0RBQ3VCLDhDQUNuQyxXQUNiIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbmZvU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5mb1wiO1xuaW1wb3J0IHNpZGViYXJTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWRlYmFyXCI7XG5pbXBvcnQgZm9udFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2ZvbnRzXCI7XG5cbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcblxuaW1wb3J0IEVtYWlsU1ZHIGZyb20gXCIuLi9jb21wb25lbnRzL0VtYWlsU1ZHXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cblxuXG5cblxuY2xhc3MgUnlhbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgIFxuICAgIH1cblxuICAgIHRoaXMuZG9tUmVmcyA9IHt9O1xuXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tUmVmc1tpZF0pXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOm51bGx9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTppZH0pXG4gICAgfVxuICAgIFxuICAgIHRoaXMuZG9tUmVmc1tpZF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIFxuICB9XG5cbiAgb25JdGVtQ2xpY2sgPSAoKSA9PiB7XG5cbiAgfVxuXG5cbiAgXG4gIFxuXG4gICBcbiAgcmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/IFwiY29udGFpbmVyLXB1c2hlZFwiIDogXCJjb250YWluZXJcIn0+XG5cbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnMCcgOiAnMSd9fT5cblxuICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWlubmVyIFwiPlxuICAgICAgIFxuICAgICAgIDxkaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZSBuby1mbGlja3JcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIEhvdmVyIG92ZXIgYW55IHBpZWNlIGZvciBhIGRlc2NyaXB0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgdG8gY29weSBpdC48L2Rpdj5cbiAgICAgICA8L2Rpdj5cblxuICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlVXBTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVVcEVuZH19PlxuICAgICAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgIFxuICAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID9cImluZm8tb3BlblwiOlwiaW5mb1wifSA+XG5cbiAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pbm5lclwiPlxuICAgICAgIFxuICAgICAgIDxkaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIEhvdmVyIG92ZXIgYW55IHBpZWNlIGZvciBhIGRlc2NyaXB0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgdG8gY29weSBpdC48L2Rpdj5cbiAgICAgICA8L2Rpdj5cblxuICAgICAgIFxuICAgICBcbiAgICAgIDwvZGl2PlxuXG4gIFxuICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgIFxuICAgICBcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW4tbGlzdFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicnlhbi1saXN0LWlubmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaXN0X2l0ZW1cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUNsaWNrKHJ5YW4uX2lkKX19PlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcjMDAwJyA6ICcjZmZmJ307XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA2MHZ3O1xuXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6I2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItcHVzaGVkIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG5cbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDB2dyk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IzAwMDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxZnIpO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBcblxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntzaWRlYmFyU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntpbmZvU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4Pntmb250U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2604936215",
        __self: this
      }, ".container.jsx-2604936215{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);backgroundColor:#fff;}.container-pushed.jsx-2604936215{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.8s;transition-duration:0.8s;-webkit-transform:translateX(-40vw);-ms-transform:translateX(-40vw);transform:translateX(-40vw);-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);backgroundColor:#000;}.sidebar.jsx-2604936215{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(1,1fr);padding:0.625rem;-webkit-transition-duration:0.5s;transition-duration:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdOa0IsQUFLd0IsQUFrQkEsQUFtQkQsWUFDUSxDQXJDUixBQWtCQSxZQWpCQyxBQWtCQSxPQW1CRyxNQXBDZ0IsQUFrQkEsV0FtQm5CLGFBQ3VCLFFBcENYLEFBa0JBLHlCQWpCYixBQWtCQSxHQWtCc0IsU0FuQ2hCLEFBa0JBLGtCQWpCUixBQWtCQSxNQWlCTyxJQWxDRyxBQWtCQSxhQWlCSyxtQ0FsQ0EsQUFrQkEsdUJBcUIzQixtQ0F0QzRELEFBa0I5QixnR0FDOEIsc0JBbEJsQyxvRkFDSixZQWtCQSxTQWpCdEIsWUFtQkEiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuIFxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzYW5pdHkgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBsaXN0U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGlzdFwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcblxuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5pbXBvcnQgRW1haWxTVkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW1haWxTVkdcIjtcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbn1bMC4uLjUwXVxuYDtcblxuY29uc3Qgc2NhbGVTdGFydCA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3Qgc2NhbGVFbmQgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5jb25zdCB0cmFuc2xhdGVMZWZ0U3RhcnQgPSB7XG4gICAgeDogLTIwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVMZWZ0RW5kID0ge1xuICB4OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBTdGFydCA9IHtcbiAgICB5OiA0MDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBFbmQgPSB7XG4gIHk6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cblxuXG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgXG4gICAgfVxuXG4gICAgdGhpcy5kb21SZWZzID0ge307XG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21SZWZzW2lkXSlcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6bnVsbH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOmlkfSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kb21SZWZzW2lkXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgXG4gIH1cblxuICBvbkl0ZW1DbGljayA9ICgpID0+IHtcblxuICB9XG5cblxuICBcbiAgXG5cbiAgIFxuICByZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gXCJjb250YWluZXItcHVzaGVkXCIgOiBcImNvbnRhaW5lclwifT5cblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcwJyA6ICcxJ319PlxuXG4gICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVMZWZ0U3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlTGVmdEVuZH19PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaW5uZXIgXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lIG5vLWZsaWNrclwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCB0byBjb3B5IGl0LjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVVcFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZVVwRW5kfX0+XG4gICAgICAgICA8RW1haWxTVkcvPlxuICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICBcbiAgICAgPC9kaXY+XG5cblxuICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgP1wiaW5mby1vcGVuXCI6XCJpbmZvXCJ9ID5cblxuICAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWlubmVyXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1uYW1lXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCB0byBjb3B5IGl0LjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgXG4gICAgIFxuICAgICAgPC9kaXY+XG5cbiAgXG4gICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgXG4gICAgIFxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1saXN0XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJyeWFuLWxpc3QtaW5uZXJcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yeWFuLm1hcCgocnlhbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IFxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7dGhpcy5kb21SZWZzW3J5YW4uX2lkXSA9IHJlZn19XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpc3RfaXRlbVwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2socnlhbi5faWQpfX0+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJyMwMDAnIDogJyNmZmYnfTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG5cbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1wdXNoZWQge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcblxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHZ3KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojMDAwO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e3NpZGViYXJTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2luZm9TdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2ZvbnRTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: this
      }, _styles_sidebar__WEBPACK_IMPORTED_MODULE_14__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_12__["default"].__hash,
        __self: this
      }, _styles_list__WEBPACK_IMPORTED_MODULE_12__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_info__WEBPACK_IMPORTED_MODULE_13__["default"].__hash,
        __self: this
      }, _styles_info__WEBPACK_IMPORTED_MODULE_13__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"].__hash,
        __self: this
      }, _styles_fonts__WEBPACK_IMPORTED_MODULE_15__["default"])));
    }
  }]);

  return Ryans;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.c60947732b45a3b4bd78.hot-update.js.map