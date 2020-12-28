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
      _this.lastScrollY = _this.domRefs[_this.firstImage].scrollTop;
      console.log(_this.lastScrollY);

      if (!_this.ticking) {
        window.requestAnimationFrame(function () {
          _this.ticking = false;
        });
        _this.ticking = true;
      }
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
      scrollPos: 0,
      galleryPopups: false,
      mobile: false,
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
    console.log(_this.firstImage);
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
          lineNumber: 342,
          columnNumber: 5
        }
      }, __jsx("div", {
        style: {
          backgroundColor: this.state.mobile && "rgb(".concat(255 - this.state.scrollPos, ",").concat(255 - this.state.scrollPos, ",").concat(255 - this.state.scrollPos, ")")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 5
        }
      }, __jsx("div", {
        id: "main",
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.open ? "container container-pushed" : "container") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
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
          lineNumber: 347,
          columnNumber: 6
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "closed",
        animate: !this.state.open ? "open" : "closed",
        transition: {
          duration: 0.8
        },
        variants: sidebarAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 8
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 10
        }
      }, "Ryan Sheehan"), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "sidebar-bio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
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
          lineNumber: 358,
          columnNumber: 8
        }
      }, __jsx(_components_EmailSVG__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 10
        }
      }))))), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.open ? "info info-open" : "info") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "info-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
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
          lineNumber: 372,
          columnNumber: 9
        }
      }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: this.state.open ? "show" : "hidden",
        variants: xAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 10
        }
      }, "X")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_11__["motion"].div, {
        initial: "hidden",
        animate: this.state.open ? "show" : "hidden",
        variants: descriptionAnimation,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
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
          lineNumber: 387,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-list-inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 9
        }
      }, this.state.mobile ? this.listPhotosMobile : this.listPhotos)), this.state.mode === "gallery" && __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 7
        }
      }, this.state.galleryPopups && __jsx("div", {
        style: this.popupStyles,
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "ryan-gallery-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 36
        }
      }, this.galleryDescriptions[this.state.currentDesc]), __jsx(_components_GalleryView__WEBPACK_IMPORTED_MODULE_23__["default"], {
        photos: this.galleryPhotos,
        setActive: this.setActive,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 7
        }
      })), __jsx("label", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + ((this.state.mode === "gallery" ? "checkbox-open" : "checkbox-closed") || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
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
          lineNumber: 408,
          columnNumber: 13
        }
      }), " Info on hover"), __jsx("div", {
        className: "jsx-".concat(_styles_main__WEBPACK_IMPORTED_MODULE_19__["default"].__hash, " jsx-").concat(_styles_sidebar__WEBPACK_IMPORTED_MODULE_17__["default"].__hash, " jsx-").concat(_styles_list__WEBPACK_IMPORTED_MODULE_14__["default"].__hash, " jsx-").concat(_styles_gallery__WEBPACK_IMPORTED_MODULE_15__["default"].__hash, " jsx-").concat(_styles_info__WEBPACK_IMPORTED_MODULE_16__["default"].__hash, " jsx-").concat(_styles_fonts__WEBPACK_IMPORTED_MODULE_18__["default"].__hash) + " " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3501740625", [this.state.open ? '#000' : '#fff']]]) + " " + "mode-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
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
          lineNumber: 419,
          columnNumber: 7
        }
      }, __jsx(_svg_gallery_svg__WEBPACK_IMPORTED_MODULE_24___default.a, {
        height: 40,
        width: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
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
          lineNumber: 422,
          columnNumber: 7
        }
      }, __jsx(_svg_list_svg__WEBPACK_IMPORTED_MODULE_25___default.a, {
        height: 40,
        width: 40,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 7
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3501740625",
        dynamic: [this.state.open ? '#000' : '#fff'],
        __self: this
      }, "body{margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-transition-duration:1s;transition-duration:1s;background-color:".concat(this.state.open ? '#000' : '#fff', ";color:#000;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMGF5QixBQUdvQixTQUMwQixtQ0FDRCxrQ0FDWCxzREFDdUIsOENBQ25DLFdBQ08sa0JBQ3BCIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvcnlhbi1wb3J0Zm9saW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbiBcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgc2FuaXR5IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5pbXBvcnQgbGlzdFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2xpc3RcIjtcbmltcG9ydCBnYWxsZXJ5U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZ2FsbGVyeVwiO1xuaW1wb3J0IGluZm9TdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmZvXCI7XG5pbXBvcnQgc2lkZWJhclN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NpZGViYXJcIjtcbmltcG9ydCBmb250U3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZm9udHNcIjtcbmltcG9ydCBtYWluU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvbWFpblwiO1xuaW1wb3J0IGltYWdlVXJsRm9yIGZyb20gXCIuLi91dGlscy9pbWFnZVVybEZvclwiO1xuXG5cbmltcG9ydCBFbWFpbFNWRyBmcm9tIFwiLi4vY29tcG9uZW50cy9FbWFpbFNWR1wiO1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgR2FsbGVyeVZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2FsbGVyeVZpZXdcIjtcblxuaW1wb3J0IEdhbGxlcnlJY29uIGZyb20gXCIuL3N2Zy9nYWxsZXJ5LnN2Z1wiXG5pbXBvcnQgTGlzdEljb24gZnJvbSBcIi4vc3ZnL2xpc3Quc3ZnXCJcblxuY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInJ5YW5cIl0ge1xuICBfaWQsXG4gIG5hbWUsXG4gIHN1bW1hcnksXG4gIGRhdGUsXG4gIGltYWdlLFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBcImltYWdlQXNwZWN0XCI6IGltYWdlLmFzc2V0LT4ubWV0YWRhdGEuZGltZW5zaW9ucy5hc3BlY3RSYXRpbyxcbiAgXCJjb2xvclwiOmltYWdlLmFzc2V0LT4ubWV0YWRhdGEucGFsZXR0ZS5kb21pbmFudC5iYWNrZ3JvdW5kXG59WzAuLi41MF1cbmA7XG5cblxuY29uc3QgbGlzdEFuaW1hdGlvbiA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgc2hvdzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjVcbiAgICB9XG4gIH1cbn1cblxuXG5jb25zdCBzaWRlYmFyQW5pbWF0aW9uID0ge1xuICBvcGVuOiB7IFxuICAgIG9wYWNpdHk6IDEsIFxuICAgIHg6IDAgXG4gIH0sXG4gIGNsb3NlZDogeyBcbiAgICBvcGFjaXR5OiAwLCBcbiAgICB4OiAtMTAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBcbiAgICB9IFxuICB9XG59XG5cbmNvbnN0IGNvbnRhY3RBbmltYXRpb24gPSB7XG4gIGhpZGRlbjoge1xuICAgIHk6IDQwMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGRlbGF5OiAwLjhcbiAgICB9XG4gIH0sXG4gIHNob3c6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuOFxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgeEFuaW1hdGlvbiA9IHtcbiAgaGlkZGVuOiB7XG4gICAgc2NhbGU6IDAuMixcbiAgICBcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMFxuICAgIH1cbiAgfSxcbiAgc2hvdzoge1xuICAgIHNjYWxlOiAxLFxuICAgIFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICBkZWxheTogMC41LFxuICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsIFxuICAgICAgICBzdGlmZm5lc3M6IDEwMCBcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uQW5pbWF0aW9uID0ge1xuICBoaWRkZW46IHtcbiAgICB4OiAzMDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuNSwgIFxuICAgIH1cbiAgfSxcbiAgc2hvdzoge1xuICAgIHg6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuMyxcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBlYXNlOiBbMCwgMC41NSwgMC40NSwgMV1cbiAgICB9XG4gIH1cbn07XG5cblxuXG5jbGFzcyBSeWFucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgY3VycmVudERlc2M6IG51bGwsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIHhIb3ZlcmVkOiBmYWxzZSxcbiAgICAgIHg6MCxcbiAgICAgIHk6MCxcbiAgICAgIHdpZHRoOiAwLCBcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHNjcm9sbFBvczogMCxcbiAgICAgIGdhbGxlcnlQb3B1cHM6IGZhbHNlLFxuICAgICAgbW9iaWxlOiBmYWxzZSxcblxuICAgICAgbW9kZTogJ2xpc3QnXG4gICAgfVxuICAgIHRoaXMucG9wdXBTdHlsZXMgPSB7bGVmdDp0aGlzLnN0YXRlLngrMjAsdG9wOnRoaXMuc3RhdGUueSsyMH1cblxuICAgIHRoaXMuZG9tUmVmcyA9IHt9O1xuICAgIFxuXG4gICAgdGhpcy5sYXN0U2Nyb2xsWSA9IDA7XG4gICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmxpc3REZXNjcmlwdGlvbnMgPSB7fTtcbiAgICB0aGlzLmdhbGxlcnlEZXNjcmlwdGlvbnMgPSB7fTtcblxuICAgIHRoaXMuZ2FsbGVyeVBob3RvcyA9IFtdO1xuICAgIHRoaXMubGlzdFBob3RvcyA9IFtdXG4gICAgdGhpcy5saXN0UGhvdG9zTW9iaWxlID0gW11cblxuICAgIHRoaXMucHJvcHMucnlhbi5mb3JFYWNoKChyeWFuLCBpKSA9PiB7XG4gICAgICB0aGlzLmxpc3REZXNjcmlwdGlvbnNbcnlhbi5faWRdID0gPERlc2NyaXB0aW9uIGluZm89e3J5YW59IG1vZGU9e1wibGlzdFwifS8+O1xuICAgICAgdGhpcy5nYWxsZXJ5RGVzY3JpcHRpb25zW3J5YW4uX2lkXSA9IDxEZXNjcmlwdGlvbiBpbmZvPXtyeWFufSBtb2RlPXtcImdhbGxlcnlcIn0vPjtcbiAgICAgIFxuXG4gICAgICB0aGlzLmdhbGxlcnlQaG90b3MucHVzaChcbiAgICAgICAge1wic3JjXCI6IGltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCkudG9TdHJpbmcoKSxcbiAgICAgICAgXCJpZFwiOiByeWFuLl9pZCxcbiAgICAgICAgXCJuYW1lXCI6IHJ5YW4ubmFtZSxcbiAgICAgICAgXCJkZXNjXCI6IHJ5YW4uc3VtbWFyeSxcbiAgICAgICAgXCJ3aWR0aFwiOjgwMCwgXG4gICAgICAgIFwiaGVpZ2h0XCI6ODAwIC8gcnlhbi5pbWFnZUFzcGVjdFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxpc3RJdGVtQW5pbWF0aW9uID0ge1xuICAgICAgICBoaWRkZW46IHtcbiAgICAgICAgICBzY2FsZTogLjIsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdzoge1xuICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZGVsYXk6IGkgKiAwLjIsXG4gICAgICAgICAgICBkdXJhdGlvbjowLjQsXG4gICAgICAgICAgICBlYXNlOiBbMC44NSwgMCwgMC4xNSwgMV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0UGhvdG9zLnB1c2goXG4gICAgICAgIDxsaSBrZXk9e3J5YW4uX2lkfSBcbiAgICAgICAgICAgIHJlZj17KHJlZikgPT4ge3RoaXMuZG9tUmVmc1tyeWFuLl9pZF0gPSByZWZ9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJ5YW4tbGlzdC1pdGVtXCJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5zZXRBY3RpdmUocnlhbi5faWQsIFwiY2xpY2tlZFwiKX19XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtpZiAodGhpcy5zdGF0ZS5vcGVuKSB0aGlzLnNldEFjdGl2ZShyeWFuLl9pZCwgXCJob3ZlcmVkXCIpfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3J5YW4uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJzaG93XCIgdmFyaWFudHM9e2xpc3RJdGVtQW5pbWF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmxGb3Iocnlhbi5pbWFnZSkud2lkdGgoODAwKX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17ODAwIC8gcnlhbi5pbWFnZUFzcGVjdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgICAgIDwvbGk+XG4gICAgICApXG5cbiAgICAgIHRoaXMubGlzdFBob3Rvc01vYmlsZS5wdXNoKFxuICAgICAgICA8bGkga2V5PXtyeWFuLl9pZH0gXG4gICAgICAgICAgICByZWY9eyhyZWYpID0+IHt0aGlzLmRvbVJlZnNbcnlhbi5faWRdID0gcmVmfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyeWFuLWxpc3QtaXRlbVwifVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtyeWFuLmltYWdlICYmIChcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwic2hvd1wiIHZhcmlhbnRzPXtsaXN0SXRlbUFuaW1hdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsRm9yKHJ5YW4uaW1hZ2UpLndpZHRoKDgwMCl9XG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57bGlzdFN0eWxlc308L3N0eWxlPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuXG4gICAgfSlcbiAgICBcbiAgICBcbiAgICB0aGlzLmZpcnN0SW1hZ2UgPSB0aGlzLnByb3BzLnJ5YW5bMF0uX2lkO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RJbWFnZSlcblxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCwgdHJ1ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVNb3VzZVBvc2l0aW9uKGUpXG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgdGhpcy51cGRhdGVNb3VzZVBvc2l0aW9uKGUpXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IChzdGF0ZSxjYWxsYmFjayk9PntcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gIH1cblxuXG4gIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblxuICAgIHRoaXMubGFzdFNjcm9sbFkgPSB0aGlzLmRvbVJlZnNbdGhpcy5maXJzdEltYWdlXS5zY3JvbGxUb3A7XG4gICAgY29uc29sZS5sb2codGhpcy5sYXN0U2Nyb2xsWSlcblxuICAgIGlmICghdGhpcy50aWNraW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICBcbiAgICAgIHRoaXMudGlja2luZyA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIHVwZGF0ZU1vdXNlUG9zaXRpb24gPSAoY29vcmRzKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7eDogY29vcmRzLnBhZ2VYLCB5OiBjb29yZHMucGFnZVl9KTtcbiAgICB0aGlzLmNhbGN1bGF0ZVBvcHVwUG9zaXRpb24oKTtcbiAgfVxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA3MjgpIHRoaXMuc2V0U3RhdGUoeyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LCBtb2JpbGU6IHRydWUgfSk7XG4gICAgZWxzZSB0aGlzLnNldFN0YXRlKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgbW9iaWxlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvcHVwUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5wb3B1cFN0eWxlcyA9IHtsZWZ0OnRoaXMuc3RhdGUueCsyMCx0b3A6dGhpcy5zdGF0ZS55KzIwfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUueCArIDUwMCA+IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgIHRoaXMucG9wdXBTdHlsZXMubGVmdCA9IHRoaXMuc3RhdGUueC04NDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnggKyA1MDAgPD0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgdGhpcy5wb3B1cFN0eWxlcy5sZWZ0ID0gdGhpcy5zdGF0ZS54KzIwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnkgKyAzMDAgPiB0aGlzLnN0YXRlLmhlaWdodCkge1xuICAgICAgdGhpcy5wb3B1cFN0eWxlcy50b3AgPSB0aGlzLnN0YXRlLnktMzIwO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS55ICsgMzAwIDw9IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XG4gICAgICB0aGlzLnBvcHVwU3R5bGVzLnRvcCA9IHRoaXMuc3RhdGUueSsyMDtcbiAgICB9XG4gICAgXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtnYWxsZXJ5UG9wdXBzOiAhdGhpcy5zdGF0ZS5nYWxsZXJ5UG9wdXBzfSk7XG4gIH1cblxuXG4gIHNldEFjdGl2ZSA9IChpZCwgbWV0aG9kKSA9PiB7XG4gICAgaWYgKCh0aGlzLnN0YXRlLmFjdGl2ZSA9PT0gaWQgfHwgaWQgPT09IG51bGwpICYmIG1ldGhvZCA9PT0gXCJjbGlja2VkXCIpIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTpudWxsLCBvcGVuOiBmYWxzZX0pXG4gIFxuICAgIGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJjbGlja2VkXCIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZTppZCwgY3VycmVudERlc2M6IGlkLCBvcGVuOiB0cnVlfSlcbiAgICAgIHRoaXMuZG9tUmVmc1tpZF0uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtZXRob2QgPT09IFwiZ2FsbGVyeS1ob3ZlclwiKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RGVzYzogaWR9KVxuICAgICAgXG4gICAgfVxuICB9XG5cblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldEFjdGl2ZShudWxsLCBcImNsaWNrZWRcIilcbiAgICB0aGlzLnNldFN0YXRlKHt4SG92ZXJlZDpmYWxzZX0pXG4gIH0gXG5cbiAgc2V0TW9kZSA9IChjdXJyZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlOm51bGwsIG9wZW46IGZhbHNlLCBnYWxsZXJ5UG9wdXBzOmZhbHNlfSwgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kZTpjdXJyZW50fSkpXG4gIH1cblxuIFxuICByZW5kZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICh0aGlzLnN0YXRlLm1vYmlsZSAmJiBgcmdiKCR7MjU1LXRoaXMuc3RhdGUuc2Nyb2xsUG9zfSwkezI1NS10aGlzLnN0YXRlLnNjcm9sbFBvc30sJHsyNTUtdGhpcy5zdGF0ZS5zY3JvbGxQb3N9KWApfX0+XG4gICAgIDxkaXYgaWQ9XCJtYWluXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm9wZW4gPyBcImNvbnRhaW5lciBjb250YWluZXItcHVzaGVkXCIgOiBcImNvbnRhaW5lclwifT5cblxuICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlYmFyXCJ9IHN0eWxlPXt7b3BhY2l0eTogdGhpcy5zdGF0ZS5vcGVuIHx8IHRoaXMuc3RhdGUubW9kZSA9PT0gXCJnYWxsZXJ5XCIgPyAnMCcgOiAnMSd9fT5cblxuICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiY2xvc2VkXCIgYW5pbWF0ZT17IXRoaXMuc3RhdGUub3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn0gdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19IHZhcmlhbnRzPXtzaWRlYmFyQW5pbWF0aW9ufT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWlubmVyXCI+XG4gICAgICAgXG4gICAgICAgPGRpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1uYW1lXCI+UnlhbiBTaGVlaGFuPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBDbGljayBvbiBhbnkgcGllY2UgZm9yIG1vcmUgaW5mb3JtYXRpb24uIENsaWNrIG9uIHRoZSBlbWFpbCBiZWxvdyB0byBjb3B5IGl0LiBSZWFjaCBvdXQgZm9yIGFueXRoaW5nLjwvZGl2PlxuICAgICAgIDwvZGl2PlxuXG4gICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPXshdGhpcy5zdGF0ZS5vcGVuID8gXCJzaG93XCIgOiBcImhpZGRlblwifSB2YXJpYW50cz17Y29udGFjdEFuaW1hdGlvbn0+XG4gICAgICAgICA8RW1haWxTVkcvPlxuICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgPC9tb3Rpb24uZGl2PlxuICBcbiAgICAgPC9kaXY+XG5cblxuICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5vcGVuID8gXCJpbmZvIGluZm8tb3BlblwiIDogXCJpbmZvXCJ9ID5cbiAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8taW5uZXJcIj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS54SG92ZXJlZCA/IFwiaW5mby14IGluZm8teC1ob3ZlclwiIDogXCJpbmZvLXhcIn0gXG4gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt4SG92ZXJlZDp0cnVlfSl9IFxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7eEhvdmVyZWQ6ZmFsc2V9KX1cbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKCl9XG4gICAgICAgID48bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT17dGhpcy5zdGF0ZS5vcGVuID8gXCJzaG93XCIgOiBcImhpZGRlblwifSB2YXJpYW50cz17eEFuaW1hdGlvbn0+WDwvbW90aW9uLmRpdj48L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPXt0aGlzLnN0YXRlLm9wZW4gPyBcInNob3dcIiA6IFwiaGlkZGVuXCJ9IHZhcmlhbnRzPXtkZXNjcmlwdGlvbkFuaW1hdGlvbn0+XG4gICAgICAgIHt0aGlzLmxpc3REZXNjcmlwdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50RGVzY119XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPC9kaXY+XG4gIFxuICAgIDwvZGl2PlxuXG4gICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuLWxpc3RcIiAgc3R5bGU9e3tvcGFjaXR5OiB0aGlzLnN0YXRlLm1vZGUgPT09IFwiZ2FsbGVyeVwiID8gJzAnIDogJzEnfX0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJyeWFuLWxpc3QtaW5uZXJcIiA+XG4gICAgICAgICAge3RoaXMuc3RhdGUubW9iaWxlID8gdGhpcy5saXN0UGhvdG9zTW9iaWxlIDogdGhpcy5saXN0UGhvdG9zfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXYgPlxuXG4gICAgICBcbiAgICBcblxuICAgICAge3RoaXMuc3RhdGUubW9kZSA9PT0gXCJnYWxsZXJ5XCIgJiYgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1nYWxsZXJ5XCI+XG4gICAgICB7dGhpcy5zdGF0ZS5nYWxsZXJ5UG9wdXBzICYmIDxkaXYgY2xhc3NOYW1lPVwicnlhbi1nYWxsZXJ5LXBvcHVwXCIgc3R5bGU9e3RoaXMucG9wdXBTdHlsZXN9Pnt0aGlzLmdhbGxlcnlEZXNjcmlwdGlvbnNbdGhpcy5zdGF0ZS5jdXJyZW50RGVzY119PC9kaXY+fVxuICAgICAgPEdhbGxlcnlWaWV3IHBob3Rvcz17dGhpcy5nYWxsZXJ5UGhvdG9zfSBzZXRBY3RpdmU9e3RoaXMuc2V0QWN0aXZlfS8+XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB9XG5cblxuICAgICAgezxsYWJlbCBjbGFzc05hbWU9e3RoaXMuc3RhdGUubW9kZSA9PT0gXCJnYWxsZXJ5XCIgPyBcImNoZWNrYm94LW9wZW5cIjpcImNoZWNrYm94LWNsb3NlZFwifT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5nYWxsZXJ5UG9wdXBzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPiBJbmZvIG9uIGhvdmVyXG4gICAgICAgIDwvbGFiZWw+IH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZS1tZW51XCI+XG4gICAgICBcbiAgICAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm1vZGUgPT09IFwiZ2FsbGVyeVwiID8gXCJtb2RlIG1vZGUtc2VsZWN0ZWRcIiA6IFwibW9kZSBtb2RlLW5vdC1zZWxlY3RlZFwifSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldE1vZGUoXCJnYWxsZXJ5XCIpfT5cbiAgICAgIDxHYWxsZXJ5SWNvbiBoZWlnaHQ9ezQwfSB3aWR0aD17NDB9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubW9kZSA9PT0gXCJsaXN0XCIgPyBcIm1vZGUgbW9kZS1zZWxlY3RlZFwiIDogXCJtb2RlIG1vZGUtbm90LXNlbGVjdGVkXCJ9IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0TW9kZShcImxpc3RcIil9PlxuICAgICAgPExpc3RJY29uIGhlaWdodD17NDB9IHdpZHRoPXs0MH0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLnN0YXRlLm9wZW4gPyAnIzAwMCcgOiAnI2ZmZid9O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgXG4gICAgICA8c3R5bGUganN4PnttYWluU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntzaWRlYmFyU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntsaXN0U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntnYWxsZXJ5U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntpbmZvU3R5bGVzfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4Pntmb250U3R5bGVzfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByeWFuID0gYXdhaXQgc2FuaXR5LmZldGNoKHF1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJ5YW4gfSAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUnlhbnM7Il19 */\n/*@ sourceURL=/Volumes/Ryan-T5/ryan-portfolio/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
//# sourceMappingURL=index.js.a15eae17e125c1ce7c63.hot-update.js.map