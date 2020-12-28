webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GalleryView.js":
/*!***********************************!*\
  !*** ./components/GalleryView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var _SelectedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectedImage */ "./components/SelectedImage.js");
var _jsxFileName = "/Volumes/Ryan-T5/ryan-portfolio/components/GalleryView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var galleryAnimation = {
  hidden: {
    opacity: 1,
    backgroundColor: "#fff"
  },
  show: {
    opacity: 1,
    backgroundColor: "#000",
    transition: {
      delay: 0.2,
      duration: 0.4
    }
  }
};
function GalleryView(_ref) {
  var _this = this;

  var photos = _ref.photos,
      setActive = _ref.setActive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      selectAll = _useState[0],
      setSelectAll = _useState[1];

  var toggleSelectAll = function toggleSelectAll() {
    setSelectAll(!selectAll);
  };

  var imageRenderer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var index = _ref2.index,
        left = _ref2.left,
        top = _ref2.top,
        key = _ref2.key,
        photo = _ref2.photo;
    return __jsx(_SelectedImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selected: selectAll ? true : false,
      key: key,
      margin: "2px",
      index: index,
      stagger: index * 0.05,
      photo: photo,
      left: left,
      top: top,
      setActive: setActive,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    });
  }, [selectAll]);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    variants: galleryAnimation,
    initial: "hidden",
    animate: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(react_photo_gallery__WEBPACK_IMPORTED_MODULE_2__["default"], {
    photos: photos,
    renderImage: imageRenderer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.5a524f16995d07aaa5cc.hot-update.js.map