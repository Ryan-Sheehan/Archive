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
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _styles_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/info */ "./styles/info.js");
/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/sidebar */ "./styles/sidebar.js");
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");







var _jsxFileName = "/Volumes/Ryan-T5 1/ryan-portfolio/pages/index.js";

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

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          opacity: this.state.active !== null ? '0' : '1'
        },
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
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
          lineNumber: 120,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-inner ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-name no-flickr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information. Click on the email below to copy it. Reach out for anything.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_10__["motion"].div, {
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
          lineNumber: 129,
          columnNumber: 8
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "info-open" : "info") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 7
        }
      }, this.props.ryan.map(function (ryan, i) {
        return _this2.state.active === ryan._id && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 12
          }
        }, __jsx("div", {
          key: ryan._id,
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 12
          }
        }, __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-name",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 12
          }
        }, ryan.name), __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-desc",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 12
          }
        }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 40
          }
        }, ryan.summary)), __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-date",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 12
          }
        }, ryan.date.split("-")[0])));
      }))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
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
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list_item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
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
            lineNumber: 188,
            columnNumber: 21
          }
        }, __jsx("img", {
          src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_17__["default"])(ryan.image).width(800),
          width: "800",
          height: 800 / ryan.imageAspect,
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 21
          }
        }))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "733740168",
        dynamic: [_this2.state.active !== null ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.active !== null ? '#000' : '#fff', ";color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnTnlCLEFBR29CLFNBRTBCLG1DQUNELGtDQUNYLHNEQUN1Qiw4Q0FDbkMsV0FDYiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1IDEvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbmZvU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5mb1wiO1xuaW1wb3J0IHNpZGViYXJTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWRlYmFyXCI7XG5pbXBvcnQgZm9udFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2ZvbnRzXCI7XG5cbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcblxuaW1wb3J0IEVtYWlsU1ZHIGZyb20gXCIuLi9jb21wb25lbnRzL0VtYWlsU1ZHXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG4gIFwiY29sb3JcIjppbWFnZS5hc3NldC0+Lm1ldGFkYXRhLnBhbGV0dGUuZG9taW5hbnQuYmFja2dyb3VuZFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBzY2FsZVN0YXJ0ID0ge1xuICAgIHNjYWxlOiAuOCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCBzY2FsZUVuZCA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRTdGFydCA9IHtcbiAgICB4OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRFbmQgPSB7XG4gIHg6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcFN0YXJ0ID0ge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcEVuZCA9IHtcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgXG4gICAgfVxuXG4gICAgdGhpcy5kb21SZWZzID0ge307XG4gICAgXG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21SZWZzW2lkXSlcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6bnVsbH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOmlkfSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kb21SZWZzW2lkXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgXG4gIH1cblxuICBvbkl0ZW1DbGljayA9ICgpID0+IHtcblxuICB9XG5cblxuICBcbiAgXG5cbiAgIFxuICByZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gXCJjb250YWluZXItcHVzaGVkXCIgOiBcImNvbnRhaW5lclwifT5cblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcwJyA6ICcxJ319PlxuXG4gICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVMZWZ0U3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlTGVmdEVuZH19PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaW5uZXIgXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lIG5vLWZsaWNrclwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gQ2xpY2sgb24gYW55IHBpZWNlIGZvciBtb3JlIGluZm9ybWF0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgYmVsb3cgdG8gY29weSBpdC4gUmVhY2ggb3V0IGZvciBhbnl0aGluZy48L2Rpdj5cbiAgICAgICA8L2Rpdj5cblxuICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlVXBTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVVcEVuZH19PlxuICAgICAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgIFxuICAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID9cImluZm8tb3BlblwiOlwiaW5mb1wifSA+XG5cbiAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pbm5lclwiPlxuICAgICAgIFxuICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgIHt0aGlzLnByb3BzLnJ5YW4ubWFwKChyeWFuLCBpKSA9PiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IHJ5YW4uX2lkICYmIFxuICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgIDxkaXYga2V5PXtyeWFuLl9pZH0+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1uYW1lXCI+e3J5YW4ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57PFJlYWN0TWFya2Rvd24+e3J5YW4uc3VtbWFyeX08L1JlYWN0TWFya2Rvd24+fTwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGF0ZVwiPntyeWFuLmRhdGUuc3BsaXQoXCItXCIpWzBdfTwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICBcblxuICAgICAgIFxuICAgICBcbiAgICAgIDwvZGl2PlxuXG4gIFxuICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgIFxuICAgICBcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW4tbGlzdFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicnlhbi1saXN0LWlubmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpc3RfaXRlbVwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2socnlhbi5faWQpfX0+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJyMwMDAnIDogJyNmZmYnfTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG4gICAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6I2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItcHVzaGVkIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG5cbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDB2dyk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IzAwMDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBcblxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntzaWRlYmFyU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntpbmZvU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4Pntmb250U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5 1/ryan-portfolio/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2993975645",
        __self: this
      }, ".container.jsx-2993975645{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;overflow-y:hidden;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);backgroundColor:#fff;}.container-pushed.jsx-2993975645{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.8s;transition-duration:0.8s;-webkit-transform:translateX(-40vw);-ms-transform:translateX(-40vw);transform:translateX(-40vw);-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);backgroundColor:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4TmtCLEFBS3dCLEFBa0JBLGFBakJELEFBa0JBLFlBakJDLEFBa0JBLGFBakJtQixBQWtCQSxnQ0FqQmYsQUFtQlEsa0JBbEJBLE9BbUJiLFlBQ00sTUFuQk4sWUFDTSxBQW1CUixVQUNVLFFBbkJWLFVBQ1UsOEJBbUJLLGtCQWxCQSx3Q0FtQkcsa0JBbEI4Qiw4RUFtQkEsd0NBbEJsQyw4RUFtQkosTUFsQkEsZUFvQnRCLE1BbkJBIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuIFxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzYW5pdHkgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBsaXN0U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGlzdFwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcblxuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5pbXBvcnQgRW1haWxTVkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW1haWxTVkdcIjtcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbiAgXCJjb2xvclwiOmltYWdlLmFzc2V0LT4ubWV0YWRhdGEucGFsZXR0ZS5kb21pbmFudC5iYWNrZ3JvdW5kXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cblxuXG5cbmNsYXNzIFJ5YW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IG51bGwsXG4gICAgICBcbiAgICB9XG5cbiAgICB0aGlzLmRvbVJlZnMgPSB7fTtcbiAgICBcblxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbVJlZnNbaWRdKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTpudWxsfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6aWR9KVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmRvbVJlZnNbaWRdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICBcbiAgfVxuXG4gIG9uSXRlbUNsaWNrID0gKCkgPT4ge1xuXG4gIH1cblxuXG4gIFxuICBcblxuICAgXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyBcImNvbnRhaW5lci1wdXNoZWRcIiA6IFwiY29udGFpbmVyXCJ9PlxuXG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e29wYWNpdHk6IHRoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJzAnIDogJzEnfX0+XG5cbiAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZUxlZnRTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVMZWZ0RW5kfX0+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1pbm5lciBcIj5cbiAgICAgICBcbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWUgbm8tZmxpY2tyXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBDbGljayBvbiBhbnkgcGllY2UgZm9yIG1vcmUgaW5mb3JtYXRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCBiZWxvdyB0byBjb3B5IGl0LiBSZWFjaCBvdXQgZm9yIGFueXRoaW5nLjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVVcFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZVVwRW5kfX0+XG4gICAgICAgICA8RW1haWxTVkcvPlxuICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICBcbiAgICAgPC9kaXY+XG5cblxuICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgP1wiaW5mby1vcGVuXCI6XCJpbmZvXCJ9ID5cblxuICAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWlubmVyXCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+ICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gcnlhbi5faWQgJiYgXG4gICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgPGRpdiBrZXk9e3J5YW4uX2lkfT5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLW5hbWVcIj57cnlhbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPns8UmVhY3RNYXJrZG93bj57cnlhbi5zdW1tYXJ5fTwvUmVhY3RNYXJrZG93bj59PC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1kYXRlXCI+e3J5YW4uZGF0ZS5zcGxpdChcIi1cIilbMF19PC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgIFxuXG4gICAgICAgXG4gICAgIFxuICAgICAgPC9kaXY+XG5cbiAgXG4gICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgXG4gICAgIFxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1saXN0XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJyeWFuLWxpc3QtaW5uZXJcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yeWFuLm1hcCgocnlhbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IFxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7dGhpcy5kb21SZWZzW3J5YW4uX2lkXSA9IHJlZn19XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wibGlzdF9pdGVtXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVDbGljayhyeWFuLl9pZCl9fT5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxGb3Iocnlhbi5pbWFnZSkud2lkdGgoODAwKX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MDAgLyByeWFuLmltYWdlQXNwZWN0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnIzAwMCcgOiAnI2ZmZid9O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIC5jb250YWluZXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcbiAgICAgICAgICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1wdXNoZWQge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcblxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHZ3KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojMDAwO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e3NpZGViYXJTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2luZm9TdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2ZvbnRTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5 1/ryan-portfolio/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash,
        __self: this
      }, _styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash,
        __self: this
      }, _styles_list__WEBPACK_IMPORTED_MODULE_13__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: this
      }, _styles_info__WEBPACK_IMPORTED_MODULE_14__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash,
        __self: this
      }, _styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"])));
    }
  }]);

  return Ryans;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.d4cf8ebe1ec5abd3b5c3.hot-update.js.map