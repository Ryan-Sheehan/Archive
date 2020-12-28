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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _styles_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/gallery */ "./styles/gallery.js");
/* harmony import */ var _styles_info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/info */ "./styles/info.js");
/* harmony import */ var _styles_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/sidebar */ "./styles/sidebar.js");
/* harmony import */ var _styles_fonts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/fonts */ "./styles/fonts.js");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../styles/main */ "./styles/main.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
/* harmony import */ var _components_EmailSVG__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/EmailSVG */ "./components/EmailSVG.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Description */ "./components/Description.js");
/* harmony import */ var _components_GalleryView__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/GalleryView */ "./components/GalleryView.js");
/* harmony import */ var _svg_gallery_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./svg/gallery.svg */ "./pages/svg/gallery.svg");
/* harmony import */ var _svg_gallery_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_svg_gallery_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _svg_list_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./svg/list.svg */ "./pages/svg/list.svg");
/* harmony import */ var _svg_list_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_svg_list_svg__WEBPACK_IMPORTED_MODULE_25__);







var _jsxFileName = "/Volumes/Ryan-T5/ryan-portfolio/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



















var listAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};
var sidebarAnimation = {
  open: {
    opacity: 1,
    x: 0
  },
  closed: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.8
    }
  }
};
var contactAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
    transition: {
      delay: 0.8
    }
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};
var xAnimation = {
  hidden: {
    scale: 0.2,
    transition: {
      delay: 0
    }
  },
  show: {
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      type: "spring",
      stiffness: 100
    }
  }
};
var descriptionAnimation = {
  hidden: {
    x: 300,
    transition: {
      delay: 0.5
    }
  },
  show: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1]
    }
  }
};

var Ryans = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Ryans, _React$Component);

  var _super = _createSuper(Ryans);

  function Ryans(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ryans);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleScroll", function () {
      var scrolled = _this.domRefs[_this.firstImage].getBoundingClientRect().top;

      if (scrolled >= 0) _this.setState({
        scrollPos: scrolled
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateMousePosition", function (coords) {
      _this.setState({
        x: coords.pageX,
        y: coords.pageY
      });

      _this.calculatePopupPosition();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateWindowDimensions", function () {
      if (window.innerWidth <= 728) _this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: true
      });else _this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        mobile: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "calculatePopupPosition", function () {
      _this.popupStyles = {
        left: _this.state.x + 20,
        top: _this.state.y + 20
      };

      if (_this.state.x + 500 > _this.state.width) {
        _this.popupStyles.left = _this.state.x - 840;
      }

      if (_this.state.x + 500 <= _this.state.width) {
        _this.popupStyles.left = _this.state.x + 20;
      }

      if (_this.state.y + 300 > _this.state.height) {
        _this.popupStyles.top = _this.state.y - 320;
      }

      if (_this.state.y + 300 <= _this.state.height) {
        _this.popupStyles.top = _this.state.y + 20;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      _this.setState({
        galleryPopups: !_this.state.galleryPopups
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setActive", function (id, method) {
      if ((_this.state.active === id || id === null) && method === "clicked") _this.setState({
        active: null,
        open: false
      });else if (method === "clicked") {
        _this.setState({
          active: id,
          currentDesc: id,
          open: true
        });

        _this.domRefs[id].scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else if (method === "gallery-hover") {
        _this.setState({
          currentDesc: id
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClose", function () {
      _this.setActive(null, "clicked");

      _this.setState({
        xHovered: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setMode", function (current) {
      _this.setState({
        active: null,
        open: false,
        galleryPopups: false
      }, function () {
        return _this.setState({
          mode: current
        });
      });
    });

    _this.state = {
      active: null,
      currentDesc: null,
      open: false,
      xHovered: false,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      scrollPos: 355,
      galleryPopups: false,
      mobile: true,
      mode: 'list'
    };
    _this.popupStyles = {
      left: _this.state.x + 20,
      top: _this.state.y + 20
    };
    _this.domRefs = {};
    _this.lastScrollY = 0;
    _this.ticking = false;
    _this.listDescriptions = {};
    _this.galleryDescriptions = {};
    _this.galleryPhotos = [];
    _this.listPhotos = [];
    _this.listPhotosMobile = [];

    _this.props.ryan.forEach(function (ryan, i) {
      _this.listDescriptions[ryan._id] = __jsx(_components_Description__WEBPACK_IMPORTED_MODULE_22__["default"], {
        info: ryan,
        mode: "list",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 41
        }
      });
      _this.galleryDescriptions[ryan._id] = __jsx(_components_Description__WEBPACK_IMPORTED_MODULE_22__["default"], {
        info: ryan,
        mode: "gallery",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 44
        }
      });

      _this.galleryPhotos.push({
        "src": Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_20__["default"])(ryan.image).width(800).toString(),
        "id": ryan._id,
        "name": ryan.name,
        "desc": ryan.summary,
        "width": 800,
        "height": 800 / ryan.imageAspect
      });

      var listItemAnimation = {
        hidden: {
          scale: .2,
          opacity: 0
        },
        show: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: i * 0.2,
            duration: 0.4,
            ease: [0.85, 0, 0.15, 1]
          }
        }
      };

      _this.listPhotos.push(__jsx("li", {
        key: ryan._id,
        ref: function ref(_ref) {
          _this.domRefs[ryan._id] = _ref;
        },
        onClick: function onClick() {
          _this.setActive(ryan._id, "clicked");
        },
        onMouseEnter: function onMouseEnter() {
          if (_this.state.open) _this.setActive(ryan._id, "hovered");
        },
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "ryan-list-item",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 9
        }
      }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: "show",
        variants: listItemAnimation,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_20__["default"])(ryan.image).width(800),
        width: "800",
        height: 800 / ryan.imageAspect,
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)
      }, _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"])));

      _this.listPhotosMobile.push(__jsx("li", {
        key: ryan._id,
        ref: function ref(_ref2) {
          _this.domRefs[ryan._id] = _ref2;
        },
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "ryan-list-item",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 9
        }
      }, ryan.image && __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: "show",
        variants: listItemAnimation,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_20__["default"])(ryan.image).width(800),
        width: "800",
        height: 800 / ryan.imageAspect,
        className: "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 17
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)
      }, _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"])));
    });

    _this.firstImage = _this.props.ryan[0]._id;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ryans, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateWindowDimensions();
      window.addEventListener('scroll', this.handleScroll, true);
      window.addEventListener('resize', this.updateWindowDimensions);
      document.addEventListener('mousemove', function (e) {
        _this2.updateMousePosition(e);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.updateWindowDimensions);
      document.removeEventListener('mousemove', function (e) {
        _this3.updateMousePosition(e);
      });

      this.setState = function (state, callback) {
        return;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 5
        }
      }, __jsx("div", {
        style: {
          backgroundColor: this.state.mobile && "rgb(".concat(this.state.scrollPos - 100, ",").concat(this.state.scrollPos - 100, ",").concat(this.state.scrollPos - 100, ")")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.open ? "container container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          opacity: this.state.open || this.state.mode === "gallery" ? '0' : '1'
        },
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 6
        }
      }, this.state.mobile ? __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information on the project. Click on the email icon below to copy it. Reach out for anything I'm currently avaiable to work.")), __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 8
        }
      })) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "closed",
        animate: !this.state.open ? "open" : "closed",
        transition: {
          duration: 0.8
        },
        variants: sidebarAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
          columnNumber: 10
        }
      }, "An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information. Click on the email below to copy it. Reach out for anything.")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        className: "contact",
        initial: "hidden",
        animate: !this.state.open ? "show" : "hidden",
        variants: contactAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 9
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.open ? "info info-open" : "info") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 7
        }
      }, __jsx("div", {
        onMouseEnter: function onMouseEnter() {
          return _this4.setState({
            xHovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this4.setState({
            xHovered: false
          });
        },
        onClick: function onClick() {
          return _this4.handleClose();
        },
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.xHovered ? "info-x info-x-hover" : "info-x") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 9
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: this.state.open ? "show" : "hidden",
        variants: xAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 10
        }
      }, "X")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: this.state.open ? "show" : "hidden",
        variants: descriptionAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 9
        }
      }, this.listDescriptions[this.state.currentDesc]))), __jsx("div", {
        style: {
          opacity: this.state.mode === "gallery" ? '0' : '1'
        },
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-list-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 9
        }
      }, this.state.mobile ? this.listPhotosMobile : this.listPhotos)), this.state.mode === "gallery" && __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 7
        }
      }, this.state.galleryPopups && __jsx("div", {
        style: this.popupStyles,
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-gallery-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 36
        }
      }, this.galleryDescriptions[this.state.currentDesc]), __jsx(_components_GalleryView__WEBPACK_IMPORTED_MODULE_23__["default"], {
        photos: this.galleryPhotos,
        setActive: this.setActive,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 7
        }
      })), __jsx("label", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.mode === "gallery" ? "checkbox-open" : "checkbox-closed") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 8
        }
      }, __jsx("input", {
        type: "checkbox",
        checked: this.state.galleryPopups,
        onChange: this.handleChange,
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 13
        }
      }), " Info on hover"), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "mode-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 7
        }
      }, __jsx("div", {
        onClick: function onClick() {
          return _this4.setMode("gallery");
        },
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.mode === "gallery" ? "mode mode-selected" : "mode mode-not-selected") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 7
        }
      }, __jsx(_svg_gallery_svg__WEBPACK_IMPORTED_MODULE_24___default.a, {
        height: 40,
        width: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 7
        }
      })), __jsx("div", {
        onClick: function onClick() {
          return _this4.setMode("list");
        },
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.mode === "list" ? "mode mode-selected" : "mode mode-not-selected") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 7
        }
      }, __jsx(_svg_list_svg__WEBPACK_IMPORTED_MODULE_25___default.a, {
        height: 40,
        width: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 7
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3501740625",
        dynamic: [this.state.open ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.open ? '#000' : '#fff', ";color:#000;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWJ5QixBQUdvQixTQUMwQixtQ0FDRCxrQ0FDWCxzREFDdUIsOENBQ25DLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBnYWxsZXJ5U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2FsbGVyeVwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBtYWluU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbWFpblwiO1xuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5cbmltcG9ydCBFbWFpbFNWRyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbWFpbFNWR1wiO1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgR2FsbGVyeVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FsbGVyeVZpZXdcIjtcblxuaW1wb3J0IEdhbGxlcnlJY29uIGZyb20gXCIuL3N2Zy9nYWxsZXJ5LnN2Z1wiXG5pbXBvcnQgTGlzdEljb24gZnJvbSBcIi4vc3ZnL2xpc3Quc3ZnXCJcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbiAgXCJjb2xvclwiOmltYWdlLmFzc2V0LT4ubWV0YWRhdGEucGFsZXR0ZS5kb21pbmFudC5iYWNrZ3JvdW5kXG59WzAuLi41MF1cbmA7XG5cblxuY29uc3QgbGlzdEFuaW1hdGlvbiA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjVcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBzaWRlYmFyQW5pbWF0aW9uID0ge1xuICBvcGVuOiB7IFxuICAgIG9wYWNpdHk6IDEsIFxuICAgIHg6IDAgXG4gIH0sXG4gIGNsb3NlZDogeyBcbiAgICBvcGFjaXR5OiAwLCBcbiAgICB4OiAtMTAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBcbiAgICB9IFxuICB9XG59XG5cbmNvbnN0IGNvbnRhY3RBbmltYXRpb24gPSB7XG4gIGhpZGRlbjoge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjhcbiAgICB9XG4gIH0sXG4gIHNob3c6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuOFxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgeEFuaW1hdGlvbiA9IHtcbiAgaGlkZGVuOiB7XG4gICAgc2NhbGU6IDAuMixcbiAgICBcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMFxuICAgIH1cbiAgfSxcbiAgc2hvdzoge1xuICAgIHNjYWxlOiAxLFxuICAgIFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICBkZWxheTogMC41LFxuICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsIFxuICAgICAgICBzdGlmZm5lc3M6IDEwMCBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uQW5pbWF0aW9uID0ge1xuICBoaWRkZW46IHtcbiAgICB4OiAzMDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuNSwgIFxuICAgIH1cbiAgfSxcbiAgc2hvdzoge1xuICAgIHg6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuMyxcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBlYXNlOiBbMCwgMC41NSwgMC40NSwgMV1cbiAgICB9XG4gIH1cbn07XG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgY3VycmVudERlc2M6IG51bGwsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHhIb3ZlcmVkOiBmYWxzZSxcbiAgICAgIHg6MCxcbiAgICAgIHk6MCxcbiAgICAgIHdpZHRoOiAwLCBcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHNjcm9sbFBvczogMzU1LFxuICAgICAgZ2FsbGVyeVBvcHVwczogZmFsc2UsXG4gICAgICBtb2JpbGU6IHRydWUsXG5cbiAgICAgIG1vZGU6ICdsaXN0J1xuICAgIH1cbiAgICB0aGlzLnBvcHVwU3R5bGVzID0ge2xlZnQ6dGhpcy5zdGF0ZS54KzIwLHRvcDp0aGlzLnN0YXRlLnkrMjB9XG5cbiAgICB0aGlzLmRvbVJlZnMgPSB7fTtcbiAgICBcblxuICAgIHRoaXMubGFzdFNjcm9sbFkgPSAwO1xuICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5saXN0RGVzY3JpcHRpb25zID0ge307XG4gICAgdGhpcy5nYWxsZXJ5RGVzY3JpcHRpb25zID0ge307XG5cbiAgICB0aGlzLmdhbGxlcnlQaG90b3MgPSBbXTtcbiAgICB0aGlzLmxpc3RQaG90b3MgPSBbXVxuICAgIHRoaXMubGlzdFBob3Rvc01vYmlsZSA9IFtdXG5cbiAgICB0aGlzLnByb3BzLnJ5YW4uZm9yRWFjaCgocnlhbiwgaSkgPT4ge1xuICAgICAgdGhpcy5saXN0RGVzY3JpcHRpb25zW3J5YW4uX2lkXSA9IDxEZXNjcmlwdGlvbiBpbmZvPXtyeWFufSBtb2RlPXtcImxpc3RcIn0vPjtcbiAgICAgIHRoaXMuZ2FsbGVyeURlc2NyaXB0aW9uc1tyeWFuLl9pZF0gPSA8RGVzY3JpcHRpb24gaW5mbz17cnlhbn0gbW9kZT17XCJnYWxsZXJ5XCJ9Lz47XG4gICAgICBcblxuICAgICAgdGhpcy5nYWxsZXJ5UGhvdG9zLnB1c2goXG4gICAgICAgIHtcInNyY1wiOiBpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApLnRvU3RyaW5nKCksXG4gICAgICAgIFwiaWRcIjogcnlhbi5faWQsXG4gICAgICAgIFwibmFtZVwiOiByeWFuLm5hbWUsXG4gICAgICAgIFwiZGVzY1wiOiByeWFuLnN1bW1hcnksXG4gICAgICAgIFwid2lkdGhcIjo4MDAsIFxuICAgICAgICBcImhlaWdodFwiOjgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3RcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaXN0SXRlbUFuaW1hdGlvbiA9IHtcbiAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgc2NhbGU6IC4yLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGRlbGF5OiBpICogMC4yLFxuICAgICAgICAgICAgZHVyYXRpb246MC40LFxuICAgICAgICAgICAgZWFzZTogWzAuODUsIDAsIDAuMTUsIDFdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdFBob3Rvcy5wdXNoKFxuICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+IHt0aGlzLmRvbVJlZnNbcnlhbi5faWRdID0gcmVmfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyeWFuLWxpc3QtaXRlbVwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMuc2V0QWN0aXZlKHJ5YW4uX2lkLCBcImNsaWNrZWRcIil9fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7aWYgKHRoaXMuc3RhdGUub3BlbikgdGhpcy5zZXRBY3RpdmUocnlhbi5faWQsIFwiaG92ZXJlZFwiKX19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwic2hvd1wiIHZhcmlhbnRzPXtsaXN0SXRlbUFuaW1hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuXG4gICAgICB0aGlzLmxpc3RQaG90b3NNb2JpbGUucHVzaChcbiAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IFxuICAgICAgICAgICAgcmVmPXsocmVmKSA9PiB7dGhpcy5kb21SZWZzW3J5YW4uX2lkXSA9IHJlZn19XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wicnlhbi1saXN0LWl0ZW1cIn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInNob3dcIiB2YXJpYW50cz17bGlzdEl0ZW1BbmltYXRpb259PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MDBcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs4MDAgLyByeWFuLmltYWdlQXNwZWN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICAgICAgPC9saT5cbiAgICAgIClcblxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgdGhpcy5maXJzdEltYWdlID0gdGhpcy5wcm9wcy5yeWFuWzBdLl9pZDtcbiAgICBcblxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCwgdHJ1ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVNb3VzZVBvc2l0aW9uKGUpXG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgdGhpcy51cGRhdGVNb3VzZVBvc2l0aW9uKGUpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IChzdGF0ZSxjYWxsYmFjayk9PntcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cblxuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblxuICAgIGxldCBzY3JvbGxlZCA9IHRoaXMuZG9tUmVmc1t0aGlzLmZpcnN0SW1hZ2VdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgIGlmIChzY3JvbGxlZCA+PSAwKSB0aGlzLnNldFN0YXRlKHtzY3JvbGxQb3M6c2Nyb2xsZWR9KTtcbiAgICBcbiAgfTtcblxuICB1cGRhdGVNb3VzZVBvc2l0aW9uID0gKGNvb3JkcykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3g6IGNvb3Jkcy5wYWdlWCwgeTogY29vcmRzLnBhZ2VZfSk7XG4gICAgdGhpcy5jYWxjdWxhdGVQb3B1cFBvc2l0aW9uKCk7XG4gIH1cbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzI4KSB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgbW9iaWxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdGhpcy5zZXRTdGF0ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsIG1vYmlsZTogZmFsc2UgfSk7XG4gIH1cblxuICBjYWxjdWxhdGVQb3B1cFBvc2l0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMucG9wdXBTdHlsZXMgPSB7bGVmdDp0aGlzLnN0YXRlLngrMjAsdG9wOnRoaXMuc3RhdGUueSsyMH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnggKyA1MDAgPiB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICB0aGlzLnBvcHVwU3R5bGVzLmxlZnQgPSB0aGlzLnN0YXRlLngtODQwO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS54ICsgNTAwIDw9IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgIHRoaXMucG9wdXBTdHlsZXMubGVmdCA9IHRoaXMuc3RhdGUueCsyMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS55ICsgMzAwID4gdGhpcy5zdGF0ZS5oZWlnaHQpIHtcbiAgICAgIHRoaXMucG9wdXBTdHlsZXMudG9wID0gdGhpcy5zdGF0ZS55LTMyMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUueSArIDMwMCA8PSB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgdGhpcy5wb3B1cFN0eWxlcy50b3AgPSB0aGlzLnN0YXRlLnkrMjA7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Z2FsbGVyeVBvcHVwczogIXRoaXMuc3RhdGUuZ2FsbGVyeVBvcHVwc30pO1xuICB9XG5cblxuICBzZXRBY3RpdmUgPSAoaWQsIG1ldGhvZCkgPT4ge1xuICAgIGlmICgodGhpcy5zdGF0ZS5hY3RpdmUgPT09IGlkIHx8IGlkID09PSBudWxsKSAmJiBtZXRob2QgPT09IFwiY2xpY2tlZFwiKSB0aGlzLnNldFN0YXRlKHthY3RpdmU6bnVsbCwgb3BlbjogZmFsc2V9KVxuICBcbiAgICBlbHNlIGlmIChtZXRob2QgPT09IFwiY2xpY2tlZFwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmU6aWQsIGN1cnJlbnREZXNjOiBpZCwgb3BlbjogdHJ1ZX0pXG4gICAgICB0aGlzLmRvbVJlZnNbaWRdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWV0aG9kID09PSBcImdhbGxlcnktaG92ZXJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudERlc2M6IGlkfSlcbiAgICAgIFxuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRBY3RpdmUobnVsbCwgXCJjbGlja2VkXCIpXG4gICAgdGhpcy5zZXRTdGF0ZSh7eEhvdmVyZWQ6ZmFsc2V9KVxuICB9IFxuXG4gIHNldE1vZGUgPSAoY3VycmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTpudWxsLCBvcGVuOiBmYWxzZSwgZ2FsbGVyeVBvcHVwczpmYWxzZX0sICgpID0+IHRoaXMuc2V0U3RhdGUoe21vZGU6Y3VycmVudH0pKVxuICB9XG5cbiBcbiAgcmVuZGVyKCkge1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAodGhpcy5zdGF0ZS5tb2JpbGUgJiYgYHJnYigke3RoaXMuc3RhdGUuc2Nyb2xsUG9zLTEwMH0sJHt0aGlzLnN0YXRlLnNjcm9sbFBvcy0xMDB9LCR7dGhpcy5zdGF0ZS5zY3JvbGxQb3MtMTAwfSlgKX19PlxuICAgICA8ZGl2IGlkPVwibWFpblwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5vcGVuID8gXCJjb250YWluZXIgY29udGFpbmVyLXB1c2hlZFwiIDogXCJjb250YWluZXJcIn0+XG5cbiAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZWJhclwifSBzdHlsZT17e29wYWNpdHk6IHRoaXMuc3RhdGUub3BlbiB8fCB0aGlzLnN0YXRlLm1vZGUgPT09IFwiZ2FsbGVyeVwiID8gJzAnIDogJzEnfX0+XG5cbiAgICAgXG5cbiAgICAge3RoaXMuc3RhdGUubW9iaWxlID8gXG5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItaW5uZXJcIj5cbiAgICAgICBcbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLW5hbWVcIj5SeWFuIFNoZWVoYW48L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1iaW9cIj5BbiBhcmNoaXZlIG9mIHNvbWUgb2YgdGhlIGdyYXBoaWMgd29yayBSeWFuIGhhcyBtYWRlIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuIENsaWNrIG9uIGFueSBwaWVjZSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGUgcHJvamVjdC4gQ2xpY2sgb24gdGhlIGVtYWlsIGljb24gYmVsb3cgdG8gY29weSBpdC4gUmVhY2ggb3V0IGZvciBhbnl0aGluZyBJJ20gY3VycmVudGx5IGF2YWlhYmxlIHRvIHdvcmsuPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPEVtYWlsU1ZHLz5cblxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgIDpcblxuICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiY2xvc2VkXCIgYW5pbWF0ZT17IXRoaXMuc3RhdGUub3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19IHZhcmlhbnRzPXtzaWRlYmFyQW5pbWF0aW9ufT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWlubmVyXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBDbGljayBvbiBhbnkgcGllY2UgZm9yIG1vcmUgaW5mb3JtYXRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCBiZWxvdyB0byBjb3B5IGl0LiBSZWFjaCBvdXQgZm9yIGFueXRoaW5nLjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT17IXRoaXMuc3RhdGUub3BlbiA/IFwic2hvd1wiIDogXCJoaWRkZW5cIn0gdmFyaWFudHM9e2NvbnRhY3RBbmltYXRpb259PlxuICAgICAgICAgPEVtYWlsU1ZHLz5cbiAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICA8L21vdGlvbi5kaXY+XG4gICAgIH1cbiAgXG4gICAgIDwvZGl2PlxuXG5cbiAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUub3BlbiA/IFwiaW5mbyBpbmZvLW9wZW5cIiA6IFwiaW5mb1wifSA+XG4gIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWlubmVyXCI+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUueEhvdmVyZWQgPyBcImluZm8teCBpbmZvLXgtaG92ZXJcIiA6IFwiaW5mby14XCJ9IFxuICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7eEhvdmVyZWQ6dHJ1ZX0pfSBcbiAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuc2V0U3RhdGUoe3hIb3ZlcmVkOmZhbHNlfSl9XG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZSgpfVxuICAgICAgICA+PG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9e3RoaXMuc3RhdGUub3BlbiA/IFwic2hvd1wiIDogXCJoaWRkZW5cIn0gdmFyaWFudHM9e3hBbmltYXRpb259Plg8L21vdGlvbi5kaXY+PC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT17dGhpcy5zdGF0ZS5vcGVuID8gXCJzaG93XCIgOiBcImhpZGRlblwifSB2YXJpYW50cz17ZGVzY3JpcHRpb25BbmltYXRpb259PlxuICAgICAgICB7dGhpcy5saXN0RGVzY3JpcHRpb25zW3RoaXMuc3RhdGUuY3VycmVudERlc2NdfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDwvZGl2PlxuICBcbiAgICA8L2Rpdj5cblxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1saXN0XCIgIHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5tb2RlID09PSBcImdhbGxlcnlcIiA/ICcwJyA6ICcxJ319PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicnlhbi1saXN0LWlubmVyXCIgPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vYmlsZSA/IHRoaXMubGlzdFBob3Rvc01vYmlsZSA6IHRoaXMubGlzdFBob3Rvc31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2ID5cblxuICAgICAgXG4gICAgXG5cbiAgICAgIHt0aGlzLnN0YXRlLm1vZGUgPT09IFwiZ2FsbGVyeVwiICYmIFxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ5YW4tZ2FsbGVyeVwiPlxuICAgICAge3RoaXMuc3RhdGUuZ2FsbGVyeVBvcHVwcyAmJiA8ZGl2IGNsYXNzTmFtZT1cInJ5YW4tZ2FsbGVyeS1wb3B1cFwiIHN0eWxlPXt0aGlzLnBvcHVwU3R5bGVzfT57dGhpcy5nYWxsZXJ5RGVzY3JpcHRpb25zW3RoaXMuc3RhdGUuY3VycmVudERlc2NdfTwvZGl2Pn1cbiAgICAgIDxHYWxsZXJ5VmlldyBwaG90b3M9e3RoaXMuZ2FsbGVyeVBob3Rvc30gc2V0QWN0aXZlPXt0aGlzLnNldEFjdGl2ZX0vPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgfVxuXG5cbiAgICAgIHs8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1vZGUgPT09IFwiZ2FsbGVyeVwiID8gXCJjaGVja2JveC1vcGVuXCI6XCJjaGVja2JveC1jbG9zZWRcIn0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZ2FsbGVyeVBvcHVwc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz4gSW5mbyBvbiBob3ZlclxuICAgICAgICA8L2xhYmVsPiB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGUtbWVudVwiPlxuICAgICAgXG4gICAgICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5tb2RlID09PSBcImdhbGxlcnlcIiA/IFwibW9kZSBtb2RlLXNlbGVjdGVkXCIgOiBcIm1vZGUgbW9kZS1ub3Qtc2VsZWN0ZWRcIn0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRNb2RlKFwiZ2FsbGVyeVwiKX0+XG4gICAgICA8R2FsbGVyeUljb24gaGVpZ2h0PXs0MH0gd2lkdGg9ezQwfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1vZGUgPT09IFwibGlzdFwiID8gXCJtb2RlIG1vZGUtc2VsZWN0ZWRcIiA6IFwibW9kZSBtb2RlLW5vdC1zZWxlY3RlZFwifSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldE1vZGUoXCJsaXN0XCIpfT5cbiAgICAgIDxMaXN0SWNvbiBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhpcy5zdGF0ZS5vcGVuID8gJyMwMDAnIDogJyNmZmYnfTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57bWFpblN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57c2lkZWJhclN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57Z2FsbGVyeVN0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57aW5mb1N0eWxlc308L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57Zm9udFN0eWxlc308L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/ryan-portfolio/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash,
        __self: this
      }, _styles_main__WEBPACK_IMPORTED_MODULE_19__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash,
        __self: this
      }, _styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash,
        __self: this
      }, _styles_list__WEBPACK_IMPORTED_MODULE_14__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash,
        __self: this
      }, _styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash,
        __self: this
      }, _styles_info__WEBPACK_IMPORTED_MODULE_16__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash,
        __self: this
      }, _styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"]))));
    }
  }]);

  return Ryans;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.beefc5f3f18e102af71d.hot-update.js.map