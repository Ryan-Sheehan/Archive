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
/* harmony import */ var _svg_x_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/x.svg */ "./pages/svg/x.svg");
/* harmony import */ var _svg_x_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_svg_x_svg__WEBPACK_IMPORTED_MODULE_19__);







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
          lineNumber: 116,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
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
          lineNumber: 120,
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
          lineNumber: 122,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-inner ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-name no-flickr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
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
          lineNumber: 131,
          columnNumber: 8
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "info-open" : "info") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 7
        }
      }, this.props.ryan.map(function (ryan, i) {
        return _this2.state.active === ryan._id && __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 12
          }
        }, __jsx("div", {
          key: ryan._id,
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 12
          }
        }, __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-name",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 12
          }
        }, ryan.name), __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-desc",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 12
          }
        }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 40
          }
        }, ryan.summary)), __jsx("div", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-date",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 12
          }
        }, ryan.date.split("-")[0])));
      }))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
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
            lineNumber: 183,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-2993975645 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["733740168", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
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
            lineNumber: 190,
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
            lineNumber: 192,
            columnNumber: 21
          }
        }))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "733740168",
        dynamic: [_this2.state.active !== null ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.active !== null ? '#000' : '#fff', ";color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTnlCLEFBR29CLFNBRTBCLG1DQUNELGtDQUNYLHNEQUN1Qiw4Q0FDbkMsV0FDYiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1IDEvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbmZvU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5mb1wiO1xuaW1wb3J0IHNpZGViYXJTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zaWRlYmFyXCI7XG5pbXBvcnQgZm9udFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2ZvbnRzXCI7XG5cbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcblxuaW1wb3J0IEVtYWlsU1ZHIGZyb20gXCIuLi9jb21wb25lbnRzL0VtYWlsU1ZHXCI7XG5cbmltcG9ydCB4IGZyb20gXCIuL3N2Zy94LnN2Z1wiO1xuXG5jb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicnlhblwiXSB7XG4gIF9pZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIFwiaW1hZ2VBc3BlY3RcIjogaW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5kaW1lbnNpb25zLmFzcGVjdFJhdGlvLFxuICBcImNvbG9yXCI6aW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5wYWxldHRlLmRvbWluYW50LmJhY2tncm91bmRcbn1bMC4uLjUwXVxuYDtcblxuY29uc3Qgc2NhbGVTdGFydCA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3Qgc2NhbGVFbmQgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5jb25zdCB0cmFuc2xhdGVMZWZ0U3RhcnQgPSB7XG4gICAgeDogLTIwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVMZWZ0RW5kID0ge1xuICB4OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBTdGFydCA9IHtcbiAgICB5OiA0MDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBFbmQgPSB7XG4gIHk6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cblxuXG5cblxuY2xhc3MgUnlhbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgIFxuICAgIH1cblxuICAgIHRoaXMuZG9tUmVmcyA9IHt9O1xuICAgIFxuXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tUmVmc1tpZF0pXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOm51bGx9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTppZH0pXG4gICAgfVxuICAgIFxuICAgIHRoaXMuZG9tUmVmc1tpZF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIFxuICB9XG5cbiAgb25JdGVtQ2xpY2sgPSAoKSA9PiB7XG5cbiAgfVxuXG5cbiAgXG4gIFxuXG4gICBcbiAgcmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/IFwiY29udGFpbmVyLXB1c2hlZFwiIDogXCJjb250YWluZXJcIn0+XG5cbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnMCcgOiAnMSd9fT5cblxuICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWlubmVyIFwiPlxuICAgICAgIFxuICAgICAgIDxkaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZSBuby1mbGlja3JcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIENsaWNrIG9uIGFueSBwaWVjZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi4gQ2xpY2sgb24gdGhlIGVtYWlsIGJlbG93IHRvIGNvcHkgaXQuIFJlYWNoIG91dCBmb3IgYW55dGhpbmcuPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWN0XCIgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cbiAgICAgICAgIDxFbWFpbFNWRy8+XG4gICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICBcbiAgICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gIFxuICAgICA8L2Rpdj5cblxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/XCJpbmZvLW9wZW5cIjpcImluZm9cIn0gPlxuXG4gICAgIFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taW5uZXJcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICB7dGhpcy5wcm9wcy5yeWFuLm1hcCgocnlhbiwgaSkgPT4gKHRoaXMuc3RhdGUuYWN0aXZlID09PSByeWFuLl9pZCAmJiBcbiAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICA8ZGl2IGtleT17cnlhbi5faWR9PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tbmFtZVwiPntyeWFuLm5hbWV9PC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+ezxSZWFjdE1hcmtkb3duPntyeWFuLnN1bW1hcnl9PC9SZWFjdE1hcmtkb3duPn08L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRhdGVcIj57cnlhbi5kYXRlLnNwbGl0KFwiLVwiKVswXX08L2Rpdj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgXG5cbiAgICAgICBcbiAgICAgXG4gICAgICA8L2Rpdj5cblxuICBcbiAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICBcbiAgICAgXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuLWxpc3RcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJ5YW4tbGlzdC1pbm5lclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJ5YW4ubWFwKChyeWFuLCBpKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+IHt0aGlzLmRvbVJlZnNbcnlhbi5faWRdID0gcmVmfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaXN0X2l0ZW1cIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUNsaWNrKHJ5YW4uX2lkKX19PlxuICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPVwiL3J5YW4vW2lkXVwiIGFzPXtgL3J5YW4vJHtyeWFuLl9pZH1gfT4qL31cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHNjYWxlU3RhcnQsdmlzaWJsZTogc2NhbGVFbmR9fT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcjMDAwJyA6ICcjZmZmJ307XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA2MHZ3O1xuICAgICAgICAgIG92ZXJmbG93LXk6aGlkZGVuO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLXB1c2hlZCB7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA2MHZ3O1xuXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC44cztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwdncpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiMwMDA7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgXG5cblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57c2lkZWJhclN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57aW5mb1N0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57Zm9udFN0eWxlc308L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJ5YW4gPSBhd2FpdCBzYW5pdHkuZmV0Y2gocXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcnlhbiB9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSeWFuczsiXX0= */\n/*@ sourceURL=/Volumes/Ryan-T5 1/ryan-portfolio/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2993975645",
        __self: this
      }, ".container.jsx-2993975645{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;overflow-y:hidden;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);backgroundColor:#fff;}.container-pushed.jsx-2993975645{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;padding:0;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.8s;transition-duration:0.8s;-webkit-transform:translateX(-40vw);-ms-transform:translateX(-40vw);transform:translateX(-40vw);-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);backgroundColor:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnT2tCLEFBS3dCLEFBa0JBLGFBakJELEFBa0JBLFlBakJDLEFBa0JBLGFBakJtQixBQWtCQSxnQ0FqQmYsQUFtQlEsa0JBbEJBLE9BbUJiLFlBQ00sTUFuQk4sWUFDTSxBQW1CUixVQUNVLFFBbkJWLFVBQ1UsOEJBbUJLLGtCQWxCQSx3Q0FtQkcsa0JBbEI4Qiw4RUFtQkEsd0NBbEJsQyw4RUFtQkosTUFsQkEsZUFvQnRCLE1BbkJBIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUgMS9yeWFuLXBvcnRmb2xpby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuIFxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzYW5pdHkgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBsaXN0U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGlzdFwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcblxuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5pbXBvcnQgRW1haWxTVkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW1haWxTVkdcIjtcblxuaW1wb3J0IHggZnJvbSBcIi4vc3ZnL3guc3ZnXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG4gIFwiY29sb3JcIjppbWFnZS5hc3NldC0+Lm1ldGFkYXRhLnBhbGV0dGUuZG9taW5hbnQuYmFja2dyb3VuZFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBzY2FsZVN0YXJ0ID0ge1xuICAgIHNjYWxlOiAuOCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCBzY2FsZUVuZCA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRTdGFydCA9IHtcbiAgICB4OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRFbmQgPSB7XG4gIHg6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcFN0YXJ0ID0ge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcEVuZCA9IHtcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgXG4gICAgfVxuXG4gICAgdGhpcy5kb21SZWZzID0ge307XG4gICAgXG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21SZWZzW2lkXSlcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6bnVsbH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOmlkfSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5kb21SZWZzW2lkXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgXG4gIH1cblxuICBvbkl0ZW1DbGljayA9ICgpID0+IHtcblxuICB9XG5cblxuICBcbiAgXG5cbiAgIFxuICByZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gXCJjb250YWluZXItcHVzaGVkXCIgOiBcImNvbnRhaW5lclwifT5cblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcwJyA6ICcxJ319PlxuXG4gICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVMZWZ0U3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlTGVmdEVuZH19PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaW5uZXIgXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lIG5vLWZsaWNrclwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJpb1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gQ2xpY2sgb24gYW55IHBpZWNlIGZvciBtb3JlIGluZm9ybWF0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgYmVsb3cgdG8gY29weSBpdC4gUmVhY2ggb3V0IGZvciBhbnl0aGluZy48L2Rpdj5cbiAgICAgICA8L2Rpdj5cblxuICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlVXBTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVVcEVuZH19PlxuICAgICAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgIFxuICAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID9cImluZm8tb3BlblwiOlwiaW5mb1wifSA+XG5cbiAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1pbm5lclwiPlxuICAgICAgIFxuICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgIHt0aGlzLnByb3BzLnJ5YW4ubWFwKChyeWFuLCBpKSA9PiAodGhpcy5zdGF0ZS5hY3RpdmUgPT09IHJ5YW4uX2lkICYmIFxuICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgIDxkaXYga2V5PXtyeWFuLl9pZH0+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1uYW1lXCI+e3J5YW4ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWRlc2NcIj57PFJlYWN0TWFya2Rvd24+e3J5YW4uc3VtbWFyeX08L1JlYWN0TWFya2Rvd24+fTwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGF0ZVwiPntyeWFuLmRhdGUuc3BsaXQoXCItXCIpWzBdfTwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICBcblxuICAgICAgIFxuICAgICBcbiAgICAgIDwvZGl2PlxuXG4gIFxuICAgICA8L2Rpdj5cblxuXG5cblxuXG4gICAgIFxuICAgICBcblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW4tbGlzdFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicnlhbi1saXN0LWlubmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpc3RfaXRlbVwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuaGFuZGxlQ2xpY2socnlhbi5faWQpfX0+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIHsvKjwvTGluaz4qL31cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJyMwMDAnIDogJyNmZmYnfTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG4gICAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6I2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItcHVzaGVkIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG5cbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjhzO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDB2dyk7XG4gICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjg1LCAwLCAwLjE1LCAxKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IzAwMDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBcblxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntzaWRlYmFyU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntpbmZvU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4Pntmb250U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5 1/ryan-portfolio/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
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

/***/ }),

/***/ "./pages/svg/x.svg":
/*!*************************!*\
  !*** ./pages/svg/x.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function X (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("style",null,".cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}")),React.createElement("g",{"id":"Layer_2","data-name":"Layer 2","key":1},React.createElement("g",{"id":"Layer_1-2","data-name":"Layer 1"},[React.createElement("line",{"className":"cls-1","x1":"1.5","y1":"1.5","x2":"191.86","y2":"191.86","key":0}),React.createElement("line",{"className":"cls-1","x1":"191.86","y1":"1.5","x2":"1.5","y2":"191.86","key":1})]))]);
}

X.defaultProps = {"viewBox":"0 0 193.36 193.36"};

module.exports = X;

X.default = X;


/***/ })

})
//# sourceMappingURL=index.js.ec83572598fb364d85de.hot-update.js.map