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
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");







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

      _this.setState({
        active: id
      });

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
          lineNumber: 101,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        style: {
          'transform': this.state.active !== null ? 'translateX(-40vw)' : 'translateX(0)',
          'backgroundColor': this.state.active !== null ? '#000' : '#fff'
        },
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          opacity: this.state.active !== null ? '0' : '1'
        },
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 6
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        key: this.props.ryan._id,
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: translateLeftStart,
          visible: translateLeftEnd
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-inner ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-name no-flickr",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 6
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        className: "contact",
        key: this.props.ryan._id,
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: translateUpStart,
          visible: translateUpEnd
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "ryan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }
      }, this.props.ryan.map(function (ryan, i) {
        return __jsx("li", {
          key: ryan._id,
          ref: function ref(_ref) {
            _this2.domRefs[ryan._id] = _ref;
          },
          className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]) + " " + "list_item",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }
        }, __jsx("a", {
          className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
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
            lineNumber: 153,
            columnNumber: 21
          }
        }, __jsx("img", {
          onClick: function onClick() {
            _this2.handleClick(ryan._id);
          },
          src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_14__["default"])(ryan.image).width(800),
          width: "800",
          height: 800 / ryan.imageAspect,
          className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash) + " jsx-2807870438 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["128568582", [_this2.state.active !== null ? '#000' : '#fff']]]),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 21
          }
        }))));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "128568582",
        dynamic: [_this2.state.active !== null ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:".concat(this.state.active !== null ? '#000' : '#fff', ";color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJLeUIsQUFHb0IsU0FFMEIsbUNBQ0Qsa0NBQ1ksOENBQ25DLFdBQ2IiLCJmaWxlIjoiL1ZvbHVtZXMvUnlhbi1UNS9leGFtcGxlLWZyb250ZW5kLW5leHQtanMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG4gXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5pbXBvcnQgRW1haWxTVkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRW1haWxTVkdcIjtcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbn1bMC4uLjUwXVxuYDtcblxuY29uc3Qgc2NhbGVTdGFydCA9IHtcbiAgICBzY2FsZTogLjgsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3Qgc2NhbGVFbmQgPSB7XG4gIHNjYWxlOiAxLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5jb25zdCB0cmFuc2xhdGVMZWZ0U3RhcnQgPSB7XG4gICAgeDogLTIwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVMZWZ0RW5kID0ge1xuICB4OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBTdGFydCA9IHtcbiAgICB5OiA0MDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlVXBFbmQgPSB7XG4gIHk6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cblxuXG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgXG4gICAgfVxuXG4gICAgdGhpcy5kb21SZWZzID0ge307XG5cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21SZWZzW2lkXSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTppZH0pXG4gICAgdGhpcy5kb21SZWZzW2lkXS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG4gICAgXG4gIH1cblxuICBvbkl0ZW1DbGljayA9ICgpID0+IHtcblxuICB9XG5cblxuICBcbiAgXG5cbiAgIFxuICByZW5kZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgPGRpdiBpZD1cIm1haW5cIiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyd0cmFuc2Zvcm0nOiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICd0cmFuc2xhdGVYKC00MHZ3KScgOiAndHJhbnNsYXRlWCgwKScsXG4gICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6IHRoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJyMwMDAnIDogJyNmZmYnfX0+XG5cbiAgICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnMCcgOiAnMSd9fT5cblxuICAgICA8bW90aW9uLmRpdiBrZXk9e3RoaXMucHJvcHMucnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiB0cmFuc2xhdGVMZWZ0U3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlTGVmdEVuZH19PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaW5uZXIgXCI+XG4gICAgIDxkaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lIG5vLWZsaWNrclwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi4gQ2xpY2sgb24gdGhlIGVtYWlsIHRvIGNvcHkgaXQuPC9kaXY+XG5cbiAgICAgPC9kaXY+XG5cbiAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGtleT17dGhpcy5wcm9wcy5yeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cblxuICAgICA8RW1haWxTVkcvPlxuICAgICAgICAgXG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgey8qcnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IHRoaXMuc3RhdGUuYWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1kYXRlXCI+e3J5YW4uZGF0ZS5zcGxpdChcIi1cIilbMF19PC9kaXY+KSkpKi99XG4gICAgIFxuICAgICBcblxuXG4gICAgIFxuICAgICAgXG4gICAgIFxuICAgICBcblxuICAgICA8L2Rpdj5cblxuXG4gICAgIFxuICAgICBcblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucnlhbi5tYXAoKHJ5YW4sIGkpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaXN0X2l0ZW1cIn0+XG4gICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9XCIvcnlhbi9baWRdXCIgYXM9e2Avcnlhbi8ke3J5YW4uX2lkfWB9PiovfVxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogc2NhbGVTdGFydCx2aXNpYmxlOiBzY2FsZUVuZH19PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVDbGljayhyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxGb3Iocnlhbi5pbWFnZSkud2lkdGgoODAwKX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MDAgLyByeWFuLmltYWdlQXNwZWN0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgey8qPC9MaW5rPiovfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcjMDAwJyA6ICcjZmZmJ307XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Rpc3BsYXktQmxhY2sud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLUJvbGRfQ2lsYXRpLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfVGV4dC1SZWd1bGFyLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItQm9sZC53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLVJlZ3VsYXIud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVHJhdHRhdGVsbG8nO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9UcmF0dGF0ZWxsb0ZvbnQudHRmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdFbGZyZXRoQmxhY2snO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9FbGZyZXRoQmxhY2sub3RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdFbGZyZXRoQm9sZCc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL0VsZnJldGhCb2xkLm90ZicpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwdncgNjB2dztcblxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XG4gICAgICAgICAgbWFyZ2luOiAwcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5vLWZsaWNrciB7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnNpZGViYXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEsIDFmcik7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWlubmVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG5cbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIuNXJlbSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1iaW8ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrUmVndWxhcic7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdUcmF0dGF0ZWxsbyc7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OjE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAxO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlLTEuMjVyZW0pO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kYXRlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyMHZ3O1xuICAgICAgICAgIGJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMtYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFsIHtcbiAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OjE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAubGlzdF9pdGVtIHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubGlzdF9pdGVtOmhvdmVyIHtcbiAgICAgICAgICBcbiAgICBcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJ5YW4gLmxpc3QgaDMge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAudGFncyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cblxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2807870438",
        __self: this
      }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.woff');}@font-face{font-family:'Trattatello';src:url('./static/TrattatelloFont.ttf');}@font-face{font-family:'ElfrethBlack';src:url('./static/ElfrethBlack.otf');}@font-face{font-family:'ElfrethBold';src:url('./static/ElfrethBold.otf');}.container.jsx-2807870438{height:100vh;width:100vw;display:grid;grid-template-columns:40vw 60vw;grid-template-rows:100vh;margin:0rem;position:relative;overflow:hidden;-webkit-transition-delay:0.5s;transition-delay:0.5s;-webkit-transition-duration:1s;transition-duration:1s;}.sidebar.jsx-2807870438{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(1,1fr);padding:0.625rem;-webkit-transition-duration:0.5s;transition-duration:0.5s;}.sidebar-name.jsx-2807870438{font-size:3.6rem;line-height:4rem;margin-bottom:0.625rem;}.sidebar-inner.jsx-2807870438{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;height:calc(100% - 2.5rem);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-2807870438{font-family:'ProtoGroteskRegular';font-family:'Trattatello';font-family:'SwearTextRegular';font-size:1.4rem;line-height:1.8rem;}.sidebar-description.jsx-2807870438{font-family:'SwearTextRegular';font-size:0.8rem;grid-column-start:3;grid-row-start:1;grid-row-end:1;height:calc(100%-1.25rem);width:100%;overflow:hidden;padding:0 0.625rem;}.sidebar-date.jsx-2807870438{grid-column-start:1;grid-column-end:2;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-2807870438{grid-column-start:1;grid-column-end:1;grid-row-start:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-2807870438{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-2807870438{height:3rem;margin-right:0.625rem;margin-top:0.625rem;cursor:pointer;}.contact.jsx-2807870438{grid-column-start:1;grid-row-start:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;height:100%;width:100%;font-family:'SwearTextRegular';}.contact-header.jsx-2807870438{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.3125rem;}.color-selector.jsx-2807870438{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-2807870438{grid-column-start:1;}.rpbw.jsx-2807870438{grid-column-start:2;}.color-option.jsx-2807870438{margin:0.3125rem;border-radius:10px;}.ryan.jsx-2807870438{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-2807870438 .list.jsx-2807870438 h3.jsx-2807870438{line-height:1em;padding:0.5em 0;}.tags.jsx-2807870438{grid-column-start:2;grid-row-start:1;font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVMa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBSVIsQUFJQyxBQUlELEFBS2IsQUFtQkQsQUFjSyxBQU1tQixBQVdGLEFBT0gsQUFZWCxBQVdBLEFBa0JELEFBT1AsQUFNUSxBQVlnQixBQU1oQixBQVFBLEFBSUEsQUFJSCxBQVlBLEFBU0QsQUFJSSxZQXRKQSxBQXNGRSxDQXpHVixHQXNLSSxDQXJJQyxBQWlIRSxBQVlQLEVBNURBLENBN0JNLEFBV0EsQUFnQ0YsQUFpQkMsQUFTbkIsQUFJQSxBQTRCa0IsS0F6S0gsQ0FkMkIsQUFRSixDQUpDLEVBd0tqQixFQXhMd0IsQUFJRSxBQThFN0IsQ0EvRjRCLEFBMEQ3QixBQW1KbEIsQ0FyTWdELENBYUcsQUFtRDFCLEFBZ0JHLEFBd0ROLEVBNUk4QixBQTBFL0IsQUFtRkYsQUF3Qm5CLENBbENlLEFBaUJBLEFBeUN1QixDQXpLSixBQXFFQSxBQVVoQixVQXZCSSxDQXJDUCxBQTJJRyxDQTdCVSxHQVBGLENBakJULENBbEVLLEFBMkNELEVBaERyQixHQWVpQyxFQXZEakMsQUEwQnNDLEVBOUJ0QyxFQUpBLEFBNktrQixFQXRHQSxDQWlEbEIsQ0F4RzJCLEFBb0VSLEdBb0dBLEVBcE1uQixBQWtFb0IsQ0EwRmdCLENBektwQyxBQWlCQSxBQWlKQSxFQTFKQSxHQStMQSxDQWxMQSxFQTRFaUIsQ0E3RmpCLENBMEdjLEdBb0dXLENBekhOLEVBVFUsQUF3RE4sRUE5RlQsR0FrQnNCLEVBc0NSLE9BdkRSLENBK0NDLENBZ0ZFLEVBbkJDLEVBNER4QixPQWxJZSxLQXJDRSxDQXVESixDQVJiLEdBZ0ZBLENBOUdtQixNQXVDRCxJQXZETSxPQWlCRyxBQTREWixLQXJCTSxRQVVHLFVBMEJJLENBbkM1QixpQkFrRHFCLElBMUdJLENBb0NPLFlBZmhDLEVBc0Z3QixjQTlCQyxRQStCWCxZQUNELEtBM0diLE1BNEdpQyxpQkE1Q0osTUEyQjdCLFFBa0JBLHlCQTFFd0Isc0JBeUNLLDRDQVhBLFlBN0I3QixlQThCQSxrQ0FXd0IsOEVBQ0osa0JBQ1AsV0FDSSxlQUVRLHVCQUV6QiIsImZpbGUiOiIvVm9sdW1lcy9SeWFuLVQ1L2V4YW1wbGUtZnJvbnRlbmQtbmV4dC1qcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBpbWFnZVVybEZvciBmcm9tIFwiLi4vdXRpbHMvaW1hZ2VVcmxGb3JcIjtcbmltcG9ydCBFbWFpbFNWRyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbWFpbFNWR1wiO1xuXG5jb25zdCBxdWVyeSA9IGAqW190eXBlID09IFwicnlhblwiXSB7XG4gIF9pZCxcbiAgbmFtZSxcbiAgc3VtbWFyeSxcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIFwiaW1hZ2VBc3BlY3RcIjogaW1hZ2UuYXNzZXQtPi5tZXRhZGF0YS5kaW1lbnNpb25zLmFzcGVjdFJhdGlvLFxufVswLi4uNTBdXG5gO1xuXG5jb25zdCBzY2FsZVN0YXJ0ID0ge1xuICAgIHNjYWxlOiAuOCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCBzY2FsZUVuZCA9IHtcbiAgc2NhbGU6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRTdGFydCA9IHtcbiAgICB4OiAtMjAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZUxlZnRFbmQgPSB7XG4gIHg6IDAsXG4gIG9wYWNpdHk6IDEsXG4gIHRyYW5zaXRpb246IHtcbiAgICBkZWxheTogMFxuICB9XG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcFN0YXJ0ID0ge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwXG59O1xuXG5jb25zdCB0cmFuc2xhdGVVcEVuZCA9IHtcbiAgeTogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuXG5cblxuXG5cbmNsYXNzIFJ5YW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IG51bGwsXG4gICAgICBcbiAgICB9XG5cbiAgICB0aGlzLmRvbVJlZnMgPSB7fTtcblxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbVJlZnNbaWRdKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOmlkfSlcbiAgICB0aGlzLmRvbVJlZnNbaWRdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICBcbiAgfVxuXG4gIG9uSXRlbUNsaWNrID0gKCkgPT4ge1xuXG4gIH1cblxuXG4gIFxuICBcblxuICAgXG4gIHJlbmRlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7J3RyYW5zZm9ybSc6IHRoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJ3RyYW5zbGF0ZVgoLTQwdncpJyA6ICd0cmFuc2xhdGVYKDApJyxcbiAgICAgICAgICAnYmFja2dyb3VuZENvbG9yJzogdGhpcy5zdGF0ZS5hY3RpdmUgIT09IG51bGwgPyAnIzAwMCcgOiAnI2ZmZid9fT5cblxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCIgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLmFjdGl2ZSAhPT0gbnVsbCA/ICcwJyA6ICcxJ319PlxuXG4gICAgIDxtb3Rpb24uZGl2IGtleT17dGhpcy5wcm9wcy5yeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZUxlZnRTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVMZWZ0RW5kfX0+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1pbm5lciBcIj5cbiAgICAgPGRpdj5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWUgbm8tZmxpY2tyXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIEhvdmVyIG92ZXIgYW55IHBpZWNlIGZvciBhIGRlc2NyaXB0aW9uLiBDbGljayBvbiB0aGUgZW1haWwgdG8gY29weSBpdC48L2Rpdj5cblxuICAgICA8L2Rpdj5cblxuICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWN0XCIga2V5PXt0aGlzLnByb3BzLnJ5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlVXBTdGFydCx2aXNpYmxlOiB0cmFuc2xhdGVVcEVuZH19PlxuXG4gICAgIDxFbWFpbFNWRy8+XG4gICAgICAgICBcbiAgICAgPC9tb3Rpb24uZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICAgICB7LypyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gdGhpcy5zdGF0ZS5hY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRhdGVcIj57cnlhbi5kYXRlLnNwbGl0KFwiLVwiKVswXX08L2Rpdj4pKSkqL31cbiAgICAgXG4gICAgIFxuXG5cbiAgICAgXG4gICAgICBcbiAgICAgXG4gICAgIFxuXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgXG4gICAgIFxuXG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW5cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5yeWFuLm1hcCgocnlhbiwgaSkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IFxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7dGhpcy5kb21SZWZzW3J5YW4uX2lkXSA9IHJlZn19XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpc3RfaXRlbVwifT5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHt0aGlzLmhhbmRsZUNsaWNrKHJ5YW4uX2lkKX19XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoaXMuc3RhdGUuYWN0aXZlICE9PSBudWxsID8gJyMwMDAnIDogJyNmZmYnfTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfRGlzcGxheS1CbGFjay53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItQm9sZF9DaWxhdGkud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJSZWd1bGFyJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvU3dlYXJfQmFubmVyLVJlZ3VsYXIud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9UZXh0LVJlZ3VsYXIud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrQm9sZCc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1Cb2xkLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza1JlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Qcm90b0dyb3Rlc2tXZWItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdUcmF0dGF0ZWxsbyc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1RyYXR0YXRlbGxvRm9udC50dGYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsZnJldGhCbGFjayc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL0VsZnJldGhCbGFjay5vdGYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0VsZnJldGhCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvRWxmcmV0aEJvbGQub3RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lciB7XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDB2dyA2MHZ3O1xuXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICBtYXJnaW46IDByZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubm8tZmxpY2tyIHtcblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2lkZWJhciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OjE7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItaW5uZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcblxuICAgICAgICAgIHBhZGRpbmc6IDAgMC42MjVyZW07XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMi41cmVtKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWJpbyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tSZWd1bGFyJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1RyYXR0YXRlbGxvJztcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDE7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUtMS4yNXJlbSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLWRhdGUge1xuICAgICAgICAgIFxuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICBcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyRGlzcGxheUJsYWNrJztcbiAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgICAgICAgYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItc29jaWFscy1idXR0b25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6MTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyVGV4dFJlZ3VsYXInO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0LWhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lckJvbGRDaWxhdGknO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNvbG9yLXNlbGVjdG9yIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMztcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5nYnlvIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAucnBidyB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9yLW9wdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwLjMxMjVyZW07XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5saXN0X2l0ZW0ge1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5saXN0X2l0ZW06aG92ZXIge1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICB9XG4gICAgICAgIC5yeWFuIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAucnlhbiAubGlzdCBoMyB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC50YWdzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDoxO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJCb2xkQ2lsYXRpJztcbiAgICAgICAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuXG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJ5YW4gPSBhd2FpdCBzYW5pdHkuZmV0Y2gocXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcnlhbiB9IC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSeWFuczsiXX0= */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_13__["default"].__hash,
        __self: this
      }, _styles_list__WEBPACK_IMPORTED_MODULE_13__["default"])));
    }
  }]);

  return Ryans;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.d321414e4620564c222e.hot-update.js.map