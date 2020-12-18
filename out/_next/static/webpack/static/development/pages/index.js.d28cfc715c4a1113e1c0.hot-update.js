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
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _styles_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/info */ "./styles/info.js");
/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/sidebar */ "./styles/sidebar.js");
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");







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

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + ((this.state.active !== null ? "container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          opacity: this.state.active !== null ? '0' : '1'
        },
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: translateLeftStart,
          visible: translateLeftEnd
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-inner ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-name no-flickr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
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
          lineNumber: 124,
          columnNumber: 8
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        style: {
          opacity: this.state.active !== null ? '0' : '1'
        },
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "info-desc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")))), __jsx("div", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }
      }, this.props.ryan.map(function (ryan, i) {
        return __jsx("li", {
          key: ryan._id,
          ref: function ref(_ref) {
            _this2.domRefs[ryan._id] = _ref;
          },
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list_item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 17
          }
        }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
          initial: "hidden",
          animate: "visible",
          variants: {
            hidden: scaleStart,
            visible: scaleEnd
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 21
          }
        }, __jsx("img", {
          onClick: function onClick() {
            _this2.handleClick(ryan._id);
          },
          src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_17__["default"])(ryan.image).width(800),
          width: "800",
          height: 800 / ryan.imageAspect,
          className: "jsx-".concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_16__["default"].__hash) + " jsx-1810590658 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2360739818", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }
        }))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2360739818",
        dynamic: [_this2.state.active !== null ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.active !== null ? '#000' : '#fff', ";color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStMeUIsQUFHb0IsU0FFMEIsbUNBQ0Qsa0NBQ1gsc0RBQ3VCLDhDQUNuQyxXQUNiIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuIFxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBzYW5pdHkgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcbmltcG9ydCBsaXN0U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbGlzdFwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcbmltcG9ydCBFbWFpbFNWRyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbWFpbFNWR1wiO1xuXG5jb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicnlhblwiXSB7XG4gIF9pZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIFwiaW1hZ2VBc3BlY3RcIjogaW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5kaW1lbnNpb25zLmFzcGVjdFJhdGlvLFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBzY2FsZVN0YXJ0ID0ge1xuICAgIHNjYWxlOiAuOCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCBzY2FsZUVuZCA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRTdGFydCA9IHtcbiAgICB4OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRFbmQgPSB7XG4gIHg6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcFN0YXJ0ID0ge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcEVuZCA9IHtcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cblxuXG5cbmNsYXNzIFJ5YW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IG51bGwsXG4gICAgICBcbiAgICB9XG5cbiAgICB0aGlzLmRvbVJlZnMgPSB7fTtcblxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbVJlZnNbaWRdKVxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTpudWxsfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6aWR9KVxuICAgIH1cbiAgICBcbiAgICB0aGlzLmRvbVJlZnNbaWRdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICBcbiAgfVxuXG4gIG9uSXRlbUNsaWNrID0gKCkgPT4ge1xuXG4gIH1cblxuXG4gIFxuICBcblxuICAgXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyBcImNvbnRhaW5lci1wdXNoZWRcIiA6IFwiY29udGFpbmVyXCJ9PlxuXG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIiBzdHlsZT17e29wYWNpdHk6IHRoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJzAnIDogJzEnfX0+XG5cbiAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZUxlZnRTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVMZWZ0RW5kfX0+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1pbm5lciBcIj5cbiAgICAgICBcbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWUgbm8tZmxpY2tyXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi4gQ2xpY2sgb24gdGhlIGVtYWlsIHRvIGNvcHkgaXQuPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWN0XCIgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cbiAgICAgICAgIDxFbWFpbFNWRy8+XG4gICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICBcbiAgICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gIFxuICAgICA8L2Rpdj5cblxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnMCcgOiAnMSd9fT5cblxuICAgICBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWlubmVyXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1uYW1lXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tZGVzY1wiPkFuIGFyY2hpdmUgb2Ygc29tZSBvZiB0aGUgZ3JhcGhpYyB3b3JrIFJ5YW4gaGFzIG1hZGUgaW4gbm8gcGFydGljdWxhciBvcmRlci4gSG92ZXIgb3ZlciBhbnkgcGllY2UgZm9yIGEgZGVzY3JpcHRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCB0byBjb3B5IGl0LjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgXG4gICAgIFxuICAgICAgPC9kaXY+XG5cbiAgXG4gICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgXG4gICAgIFxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1saXN0XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaXN0X2l0ZW1cIn0+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVDbGljayhyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxGb3Iocnlhbi5pbWFnZSkud2lkdGgoODAwKX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MDAgLyByeWFuLmltYWdlQXNwZWN0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnIzAwMCcgOiAnI2ZmZid9O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICAgIC5jb250YWluZXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcblxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6I2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItcHVzaGVkIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHZ3IDYwdnc7XG5cbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xuICAgICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuOHM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MHZ3KTtcbiAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuODUsIDAsIDAuMTUsIDEpO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojMDAwO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e3NpZGViYXJTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2luZm9TdHlsZXN9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2ZvbnRTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1810590658",
        __self: this
      }, ".container.jsx-1810590658{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;overflow:hidden;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);backgroundColor:#fff;}.container-pushed.jsx-1810590658{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;overflow:hidden;-webkit-transition-delay:0s;transition-delay:0s;-webkit-transition-duration:0.8s;transition-duration:0.8s;-webkit-transform:translateX(-40vw);-ms-transform:translateX(-40vw);transform:translateX(-40vw);-webkit-transition-timing-function:cubic-bezier(0.85,0,0.15,1);transition-timing-function:cubic-bezier(0.85,0,0.15,1);backgroundColor:#000;}.sidebar.jsx-1810590658{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(1,1fr);padding:0.625rem;-webkit-transition-duration:0.5s;transition-duration:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZNa0IsQUFLd0IsQUFrQkEsQUFtQkQsWUFDUSxDQXJDUixBQWtCQSxZQWpCQyxBQWtCQSxPQW1CRyxNQXBDZ0IsQUFrQkEsV0FtQm5CLGFBQ3VCLFFBcENYLEFBa0JBLHlCQWpCYixBQWtCQSxHQWtCc0IsU0FuQ2hCLEFBa0JBLGtCQWpCSCxBQWtCQSxNQWlCRSxVQWxDRyxBQWtCQSxPQWlCSyx5Q0FsQ0EsQUFrQkEsaUJBcUIzQix5Q0F0QzRELEFBa0I5QixnR0FDOEIsc0JBbEJsQyxvRkFDSixZQWtCQSxTQWpCdEIsWUFtQkEiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG4gXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW5mb1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2luZm9cIjtcbmltcG9ydCBzaWRlYmFyU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2lkZWJhclwiO1xuaW1wb3J0IGZvbnRTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9mb250c1wiO1xuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuaW1wb3J0IEVtYWlsU1ZHIGZyb20gXCIuLi9jb21wb25lbnRzL0VtYWlsU1ZHXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cblxuXG5cblxuY2xhc3MgUnlhbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgIFxuICAgIH1cblxuICAgIHRoaXMuZG9tUmVmcyA9IHt9O1xuXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tUmVmc1tpZF0pXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlID09PSBpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOm51bGx9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTppZH0pXG4gICAgfVxuICAgIFxuICAgIHRoaXMuZG9tUmVmc1tpZF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIFxuICB9XG5cbiAgb25JdGVtQ2xpY2sgPSAoKSA9PiB7XG5cbiAgfVxuXG5cbiAgXG4gIFxuXG4gICBcbiAgcmVuZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/IFwiY29udGFpbmVyLXB1c2hlZFwiIDogXCJjb250YWluZXJcIn0+XG5cbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnMCcgOiAnMSd9fT5cblxuICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWlubmVyIFwiPlxuICAgICAgIFxuICAgICAgIDxkaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZSBuby1mbGlja3JcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIEhvdmVyIG92ZXIgYW55IHBpZWNlIGZvciBhIGRlc2NyaXB0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgdG8gY29weSBpdC48L2Rpdj5cbiAgICAgICA8L2Rpdj5cblxuICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlVXBTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVVcEVuZH19PlxuICAgICAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgIFxuICAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCIgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcwJyA6ICcxJ319PlxuXG4gICAgIFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taW5uZXJcIj5cbiAgICAgICBcbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLW5hbWVcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1kZXNjXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi4gQ2xpY2sgb24gdGhlIGVtYWlsIHRvIGNvcHkgaXQuPC9kaXY+XG4gICAgICAgPC9kaXY+XG5cbiAgICAgICBcbiAgICAgXG4gICAgICA8L2Rpdj5cblxuICBcbiAgICAgPC9kaXY+XG5cblxuXG5cblxuICAgICBcbiAgICAgXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuLWxpc3RcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yeWFuLm1hcCgocnlhbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IFxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7dGhpcy5kb21SZWZzW3J5YW4uX2lkXSA9IHJlZn19XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpc3RfaXRlbVwifT5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUNsaWNrKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcjMDAwJyA6ICcjZmZmJ307XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBcbiAgICAgICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA2MHZ3O1xuXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjojZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci1wdXNoZWQge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcblxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC44cztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQwdncpO1xuICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC44NSwgMCwgMC4xNSwgMSk7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiMwMDA7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OjE7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgXG5cblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57c2lkZWJhclN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57aW5mb1N0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57Zm9udFN0eWxlc308L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJ5YW4gPSBhd2FpdCBzYW5pdHkuZmV0Y2gocXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcnlhbiB9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSeWFuczsiXX0= */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
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

/***/ "./styles/sidebar.js":
/*!***************************!*\
  !*** ./styles/sidebar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* styles.js */
var _defaultExport = new String(".sidebar-name.jsx-735189762{font-size:3.6rem;line-height:4rem;margin-bottom:0.625rem;}.sidebar-inner.jsx-735189762{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;height:calc(100% - 2.5rem);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-735189762{font-family:'ProtoGroteskRegular';font-family:'Trattatello';font-family:'SwearTextRegular';font-size:1.4rem;line-height:1.8rem;}.sidebar-description.jsx-735189762{font-family:'SwearTextRegular';font-size:0.8rem;grid-column-start:3;grid-row-start:1;grid-row-end:1;height:calc(100%-1.25rem);width:100%;overflow:hidden;padding:0 0.625rem;}.sidebar-socials.jsx-735189762{grid-column-start:1;grid-column-end:1;grid-row-start:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-735189762{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-735189762{height:3rem;margin-right:0.625rem;margin-top:0.625rem;cursor:pointer;}.contact.jsx-735189762{grid-column-start:1;grid-row-start:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;height:100%;width:100%;font-family:'SwearTextRegular';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3N0eWxlcy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQixBQUc0QixBQU1tQixBQVdGLEFBT0gsQUFZWCxBQWtCRCxBQU9QLEFBTVEsWUFMRSxLQTdETCxFQXNETCxDQWxCTSxBQWdDRixXQTVDQyxHQXZCTSxBQWdCRyxBQTZDTixFQXZERCxDQThETixDQWhDRyxVQVpJLE1Bc0NMLENBdkRLLEFBZ0NELEVBckNyQixHQWVpQyxRQVFmLENBc0NsQixNQXZEb0IsVUFrQkgsTUFSRSxFQVRVLEFBNkNOLE9BM0JLLFFBUlAsR0FrREcsU0EzRFQsTUFrQkYsQ0FSYixVQVNrQixXQVdILEtBVk0sa0JBeUJPLENBeEI1QixpQkF1Q3FCLEtBM0RXLGNBNERSLGNBOUJDLFFBK0JYLFlBQ0QsV0FDb0IsdUJBakJqQyxRQWtCQSx5QkEvRHdCLHNCQThCSyx3REE3QjdCLGlEQThCd0IsOEVBQ0osa0JBQ1AsV0FDSSxlQUVRLHVCQUV6QiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1L2V4YW1wbGUtZnJvbnRlbmQtbmV4dC1qcy9zdHlsZXMvc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlcy5qcyAqL1xuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY3NzYFxuLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItaW5uZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcblxuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMi41cmVtKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1RyYXR0YXRlbGxvJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDE7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUtMS4yNXJlbSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMtYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFsIHtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OjE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuYDsiXX0= */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/styles/sidebar.js */");

_defaultExport.__hash = "735189762";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ })

})
//# sourceMappingURL=index.js.d28cfc715c4a1113e1c0.hot-update.js.map