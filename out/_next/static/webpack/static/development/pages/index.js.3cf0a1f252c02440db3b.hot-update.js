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
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/list */ "./styles/list.js");
/* harmony import */ var _utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/imageUrlFor */ "./utils/imageUrlFor.js");
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

var Email = function Email() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      copied = _useState[0],
      setCopied = _useState[1];

  test(function () {
    setCopied(true);
    clearInterval();

    if (copied) {
      setInterval(function () {
        setCopied(false);
      }, 1000);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__["CopyToClipboard"], {
    text: "sheehan.w.ryan @gmail.com",
    onCopy: function onCopy() {
      return test();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3352381095" + " " + ((copied ? "contact-email contact-email-clicked" : "contact-email") || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "sheehan.w.ryan @gmail.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3352381095",
    __self: _this
  }, ".contact-email.jsx-3352381095{font-size:1.6rem;word-wrap:break-word;-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;cursor:pointer;}.contact-email-clicked.jsx-3352381095::after{content:\"Copied!\";background-color:#FFE100;position:absolute;margin-left:-10px;font-family:'ProtoGroteskBold';font-size:0.8rem;-webkit-animation:200ms ease-out 0s slideInFromBottom-jsx-3352381095;animation:200ms ease-out 0s slideInFromBottom-jsx-3352381095;}@-webkit-keyframes slideInFromBottom-jsx-3352381095{0%{-webkit-transform:translateX(-15px) scale(0);-ms-transform:translateX(-15px) scale(0);transform:translateX(-15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}@keyframes slideInFromBottom-jsx-3352381095{0%{-webkit-transform:translateX(-15px) scale(0);-ms-transform:translateX(-15px) scale(0);transform:translateX(-15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}.contact-email.jsx-3352381095:hover{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFJNEIsQUFRQyxBQVdvQixBQUdKLEFBS1IsaUJBMUJMLENBUUksb0JBUEosS0FRSCxpQkFrQlksQ0FqQlosa0JBQ2EsU0FUTCxzQkFVVCxDQVVsQixZQUhBLElBTitDLENBZ0JoRCxvQkExQmdDLG9FQUNmLGVBQ2pCLDBCQVVBIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cbmNvbnN0IEVtYWlsID0gKCkgPT4geyBcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdGVzdCgoKSA9PiB7XG4gICAgc2V0Q29waWVkKHRydWUpXG4gICAgICBjbGVhckludGVydmFsKCk7XG4gICAgICBpZiAoY29waWVkKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRDb3BpZWQoZmFsc2UpO1xuXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtcInNoZWVoYW4udy5yeWFuIEBnbWFpbC5jb21cIn1cbiAgICAgICAgICBvbkNvcHk9eygpID0+IHRlc3QoKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvcGllZCA/IFwiY29udGFjdC1lbWFpbCBjb250YWN0LWVtYWlsLWNsaWNrZWRcIiA6IFwiY29udGFjdC1lbWFpbFwifT5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5jb250YWN0LWVtYWlsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGRTEwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwtY2xpY2tlZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiQ29waWVkIVwiO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkUxMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGFuaW1hdGlvbjogMjAwbXMgZWFzZS1vdXQgMHMgc2xpZGVJbkZyb21Cb3R0b207XG5cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tQm90dG9tIHtcbiAgICAgICAgIDAlIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSBzY2FsZSgwKTtcbiAgICAgICAgIH1cbiAgICAgICAgIDEwMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LWVtYWlsOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkUxMDA7XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuY29uc3QgUnlhbnMgPSAoeyByeWFuIH0pID0+IHtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuXG4gICBcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIFxuXG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cblxuICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRlclwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi48L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgey8qcnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGF0ZVwiPntyeWFuLmRhdGUuc3BsaXQoXCItXCIpWzBdfTwvZGl2PikpKSovfVxuICAgICBcbiAgICAgXG4gICAgIHtyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIFxuICAgICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRlc2NyaXB0aW9uXCI+e3J5YW4uc3VtbWFyeX08L2Rpdj5cbiAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICkpKX1cbiAgICAgIFxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbHNcIj5cbiAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj5Db250YWN0PC9kaXY+XG5cbiAgICAgPEVtYWlsLz5cbiAgICAgXG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCIvL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiLy93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgPC9kaXY+XG4gICAgIFxuXG4gICAgIDwvZGl2PlxuICAgICBcblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEFjdGl2ZShyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldEFjdGl2ZShudWxsKX19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9EaXNwbGF5LUJsYWNrLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1Cb2xkX0NpbGF0aS53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX1RleHQtUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLUJvbGQud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1SZWd1bGFyLmVvdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1iaW8ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJSZWd1bGFyJztcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kYXRlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgICBib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMtYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMC42MjVyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRkZFMTAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbC1jbGlja2VkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJDb3BpZWQhXCI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTEwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrQm9sZCc7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgYW5pbWF0aW9uOiAyMDBtcyBlYXNlLW91dCAwcyBzbGlkZUluRnJvbUJvdHRvbTtcblxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAgICAgICAgMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHNjYWxlKDApO1xuICAgICAgICAgfVxuICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtZW1haWw6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGRTEwMDtcblxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yeWFuIC5saXN0IGgzIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"));
};

var Ryans = function Ryans(_ref) {
  var ryan = _ref.ryan;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      active = _useState2[0],
      setActive = _useState2[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    key: ryan._id,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: translateLeftStart,
      visible: translateLeftEnd
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  }, "Ryan Sheehan"), __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-bio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 6
    }
  }, "An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description."))), ryan.map(function (ryan) {
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
        lineNumber: 145,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 8
      }
    }, ryan.summary));
  }), __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 6
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    key: ryan._id,
    initial: "hidden",
    animate: "visible",
    variants: {
      hidden: translateUpStart,
      visible: translateUpEnd
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "contact-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 6
    }
  }, "Contact"), __jsx(Email, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-socials-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//github.com/Ryan-Sheehan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/github.svg",
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 6
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "//www.instagram.com/ryan__sheehan/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/instagram.svg",
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 6
    }
  })))))), __jsx("div", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "ryan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, ryan.map(function (ryan) {
    return __jsx("li", {
      key: ryan._id,
      className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "list__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
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
        lineNumber: 185,
        columnNumber: 21
      }
    }, __jsx("img", {
      onMouseEnter: function onMouseEnter() {
        setActive(ryan._id);
      },
      onMouseLeave: function onMouseLeave() {
        setActive(null);
      },
      src: Object(_utils_imageUrlFor__WEBPACK_IMPORTED_MODULE_8__["default"])(ryan.image).width(800),
      width: "800",
      height: 800 / ryan.imageAspect,
      className: "jsx-3787924367 " + "jsx-".concat(_styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }))));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3787924367",
    __self: _this
  }, "@font-face{font-family:'SwearDisplayBlack';src:url('./static/Swear_Display-Black.woff');}@font-face{font-family:'SwearBannerBoldCilati';src:url('./static/Swear_Banner-Bold_Cilati.woff');}@font-face{font-family:'SwearBannerRegular';src:url('./static/Swear_Banner-Regular.woff');}@font-face{font-family:'SwearTextRegular';src:url('./static/Swear_Text-Regular.woff');}@font-face{font-family:'ProtoGroteskBold';src:url('./static/ProtoGroteskWeb-Bold.woff');}@font-face{font-family:'ProtoGroteskRegular';src:url('./static/ProtoGroteskWeb-Regular.eot');}.sidebar.jsx-3787924367{height:100%;grid-column-start:1;grid-row-start:1;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);padding:0.625rem;}.sidebar-name.jsx-3787924367{font-size:2.8rem;line-height:3.2rem;margin-bottom:0.625rem;}.sidebar-header.jsx-3787924367{font-family:'SwearBannerBoldCilati';padding:0 0.625rem;grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sidebar-bio.jsx-3787924367{font-family:'SwearBannerRegular';font-size:1.6rem;}.sidebar-description.jsx-3787924367{font-family:'SwearTextRegular';grid-column-start:2;grid-row-start:1;grid-row-end:3;padding:0 0.625rem;}.sidebar-date.jsx-3787924367{grid-column-start:1;grid-column-end:2;grid-row-start:3;font-family:'SwearDisplayBlack';font-size:3.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-top:0px solid black;}.sidebar-socials.jsx-3787924367{grid-column-start:1;grid-column-end:1;grid-row-start:2;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;width:20vw;bottom:1.25rem;padding:0 0.625rem;padding-bottom:1.25rem;}.sidebar-socials-buttons.jsx-3787924367{margin-top:1.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.sidebar-social.jsx-3787924367{height:4rem;margin:0 0.625rem;cursor:pointer;}.contact.jsx-3787924367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 0.625rem;margin-bottom:1.25rem;font-family:'SwearTextRegular';}.contact-header.jsx-3787924367{font-family:'SwearBannerBoldCilati';font-size:2.8rem;margin-bottom:0.625rem;}.contact-email.jsx-3787924367{font-size:1.6rem;word-wrap:break-word;-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:500ms;transition-duration:500ms;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;cursor:pointer;}.contact-email-clicked.jsx-3787924367::after{content:\"Copied!\";background-color:#FFE100;position:absolute;margin-left:-10px;font-family:'ProtoGroteskBold';font-size:0.8rem;-webkit-animation:200ms ease-out 0s slideInFromBottom-jsx-3787924367;animation:200ms ease-out 0s slideInFromBottom-jsx-3787924367;}@-webkit-keyframes slideInFromBottom-jsx-3787924367{0%{-webkit-transform:translateX(-15px) scale(0);-ms-transform:translateX(-15px) scale(0);transform:translateX(-15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}@keyframes slideInFromBottom-jsx-3787924367{0%{-webkit-transform:translateX(-15px) scale(0);-ms-transform:translateX(-15px) scale(0);transform:translateX(-15px) scale(0);}100%{-webkit-transform:translateX(0) scale(1);-ms-transform:translateX(0) scale(1);transform:translateX(0) scale(1);}}.contact-email.jsx-3787924367:hover{-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#FFE100;text-decoration-color:#FFE100;}.color-selector.jsx-3787924367{grid-column-start:1;grid-row-start:3;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(4,1fr);margin-bottom:0.5rem;}.gbyo.jsx-3787924367{grid-column-start:1;}.rpbw.jsx-3787924367{grid-column-start:2;}.color-option.jsx-3787924367{margin:0.3125rem;border-radius:10px;}.ryan.jsx-3787924367{padding:0.625rem;height:100%;grid-column-start:2;grid-row-start:1;overflow-y:auto;}.ryan.jsx-3787924367 .list.jsx-3787924367 h3.jsx-3787924367{line-height:1em;padding:0.5em 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJNa0IsQUFHMkMsQUFJSSxBQUlILEFBS0YsQUFJQSxBQUlHLEFBUXRCLEFBV0ssQUFLbUIsQUFXSCxBQUtGLEFBU1gsQUFXQSxBQWtCRCxBQU1QLEFBS0MsQUFPdUIsQUFLbkIsQUFRQyxBQVdvQixBQUdKLEFBS1IsQUFLTixBQVFBLEFBSUEsQUFJSCxBQUtBLEFBU0QsWUExSkksQUE0RUYsSUErRUYsQ0FoSkcsQUFrRkUsQUFpREYsQUFLUCxDQTlDYSxDQS9CYixDQTdCTSxBQVdBLEFBeUVELEFBU25CLEFBSUEsU0FVc0IsQ0F2RUwsQ0E3RjZCLEFBSUUsQUE0QzFCLENBN0R5QixBQThCNUIsQUEySm5CLENBakxnRCxBQWdEN0IsQ0FuQytCLEVBakJFLEFBcUMzQixBQUlKLEFBd0VGLEFBdURuQixDQWpCZSxDQXBGSSxBQVdBLEFBeUNJLEtBUUgsRUF4QnBCLElBM0VlLEFBa0pJLENBeEhuQixBQWtHNEIsQ0E3RlQsRUF1RE0sRUF2RUgsQUF5QlksQUFhYixJQTNDckIsQ0EyR2dDLENBakJaLENBbkdrQixJQWtKcEIsRUFuSEQsTUE4Q08sQ0FoR3hCLEFBa0NvQixDQXVFcEIsQUFzQ29DLENBNUpwQyxBQWlCQSxFQVRBLEFBNEhpQyxHQS9HakMsQUE4SkEsQ0FuSHFCLEdBNURyQixDQW9FbUIsQ0FtRFMsS0EzRVQsQUFtRFMsS0FsRVEsSUFnQ3BDLEVBUWMsS0FvRlMsQ0E1R04sQUFvRkUsQ0FVbEIsWUFIQSxFQTFGYyxFQW9GaUMsQ0FnQmhELEVBUUEsQ0E1SG1CLGlCQUVuQixBQWlEZSxBQXVDaUIsSUFkWCxtQkFDRyxPQXJDQSxlQXNDUyxLQVhqQyxDQWxEd0IsaUJBMEVQLE1BdkNRLEVBMkJ6QixPQWFBLDBCQVVBLG9CQXBGQSxVQXVCNkIsNENBWUEsNkRBWEEsMkJBQzdCLGlCQVd3Qiw4RUFDSixrQkFDUCxXQUNJLGVBQ0ksbUJBQ0ksdUJBRXpCIiwiZmlsZSI6Ii9Wb2x1bWVzL1J5YW4tVDUvZXhhbXBsZS1mcm9udGVuZC1uZXh0LWpzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJzsgXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHNhbml0eSBmcm9tIFwiLi4vbGliL3Nhbml0eVwiO1xuaW1wb3J0IGxpc3RTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9saXN0XCI7XG5pbXBvcnQgaW1hZ2VVcmxGb3IgZnJvbSBcIi4uL3V0aWxzL2ltYWdlVXJsRm9yXCI7XG5cbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJyeWFuXCJdIHtcbiAgX2lkLFxuICBuYW1lLFxuICBzdW1tYXJ5LFxuICBkYXRlLFxuICBpbWFnZSxcbiAgXCJpbWFnZUFzcGVjdFwiOiBpbWFnZS5hc3NldC0+Lm1ldGFkYXRhLmRpbWVuc2lvbnMuYXNwZWN0UmF0aW8sXG59WzAuLi41MF1cbmA7XG5cbmNvbnN0IHNjYWxlU3RhcnQgPSB7XG4gICAgc2NhbGU6IC44LFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHNjYWxlRW5kID0ge1xuICBzY2FsZTogMSxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cblxuY29uc3QgdHJhbnNsYXRlTGVmdFN0YXJ0ID0ge1xuICAgIHg6IC0yMDAsXG4gICAgb3BhY2l0eTogMFxufTtcblxuY29uc3QgdHJhbnNsYXRlTGVmdEVuZCA9IHtcbiAgeDogMCxcbiAgb3BhY2l0eTogMSxcbiAgdHJhbnNpdGlvbjoge1xuICAgIGRlbGF5OiAwXG4gIH1cbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwU3RhcnQgPSB7XG4gICAgeTogNDAwLFxuICAgIG9wYWNpdHk6IDBcbn07XG5cbmNvbnN0IHRyYW5zbGF0ZVVwRW5kID0ge1xuICB5OiAwLFxuICBvcGFjaXR5OiAxLFxuICB0cmFuc2l0aW9uOiB7XG4gICAgZGVsYXk6IDBcbiAgfVxufTtcblxuXG5cbmNvbnN0IEVtYWlsID0gKCkgPT4geyBcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdGVzdCgoKSA9PiB7XG4gICAgc2V0Q29waWVkKHRydWUpXG4gICAgICBjbGVhckludGVydmFsKCk7XG4gICAgICBpZiAoY29waWVkKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBzZXRDb3BpZWQoZmFsc2UpO1xuXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXtcInNoZWVoYW4udy5yeWFuIEBnbWFpbC5jb21cIn1cbiAgICAgICAgICBvbkNvcHk9eygpID0+IHRlc3QoKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvcGllZCA/IFwiY29udGFjdC1lbWFpbCBjb250YWN0LWVtYWlsLWNsaWNrZWRcIiA6IFwiY29udGFjdC1lbWFpbFwifT5zaGVlaGFuLncucnlhbiBAZ21haWwuY29tPC9kaXY+XG4gICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5jb250YWN0LWVtYWlsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGRTEwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwtY2xpY2tlZDo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiQ29waWVkIVwiO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkUxMDA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1Byb3RvR3JvdGVza0JvbGQnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIGFuaW1hdGlvbjogMjAwbXMgZWFzZS1vdXQgMHMgc2xpZGVJbkZyb21Cb3R0b207XG5cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Gcm9tQm90dG9tIHtcbiAgICAgICAgIDAlIHtcbiAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KSBzY2FsZSgwKTtcbiAgICAgICAgIH1cbiAgICAgICAgIDEwMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LWVtYWlsOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNGRkUxMDA7XG5cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuY29uc3QgUnlhbnMgPSAoeyByeWFuIH0pID0+IHtcblxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuXG4gICBcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgIFxuXG4gICAgIFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cblxuICAgICA8bW90aW9uLmRpdiBrZXk9e3J5YW4uX2lkfSBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInZpc2libGVcIiB2YXJpYW50cz17e2hpZGRlbjogdHJhbnNsYXRlTGVmdFN0YXJ0LHZpc2libGU6IHRyYW5zbGF0ZUxlZnRFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWhlYWRlclwiPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItbmFtZVwiPlJ5YW4gU2hlZWhhbjwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItYmlvXCI+QW4gYXJjaGl2ZSBvZiBzb21lIG9mIHRoZSBncmFwaGljIHdvcmsgUnlhbiBoYXMgbWFkZSBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLiBIb3ZlciBvdmVyIGFueSBwaWVjZSBmb3IgYSBkZXNjcmlwdGlvbi48L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgey8qcnlhbi5tYXAocnlhbiA9PiAoKHJ5YW4uX2lkID09IGFjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItZGF0ZVwiPntyeWFuLmRhdGUuc3BsaXQoXCItXCIpWzBdfTwvZGl2PikpKSovfVxuICAgICBcbiAgICAgXG4gICAgIHtyeWFuLm1hcChyeWFuID0+ICgocnlhbi5faWQgPT0gYWN0aXZlICYmIFxuICAgICAgIDxtb3Rpb24uZGl2IGtleT17cnlhbi5faWR9IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWRlc2NyaXB0aW9uXCI+e3J5YW4uc3VtbWFyeX08L2Rpdj5cbiAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICkpKX1cbiAgICAgIFxuICAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNvY2lhbHNcIj5cbiAgICAgPG1vdGlvbi5kaXYga2V5PXtyeWFuLl9pZH0gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJ2aXNpYmxlXCIgdmFyaWFudHM9e3toaWRkZW46IHRyYW5zbGF0ZVVwU3RhcnQsdmlzaWJsZTogdHJhbnNsYXRlVXBFbmR9fT5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0XCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj5Db250YWN0PC9kaXY+XG5cbiAgICAgPEVtYWlsLz5cbiAgICAgXG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFscy1idXR0b25zXCI+XG4gICAgIDxMaW5rIGhyZWY9XCIvL2dpdGh1Yi5jb20vUnlhbi1TaGVlaGFuXCI+XG4gICAgIDxpbWcgY2xhc3NOYW1lPVwic2lkZWJhci1zb2NpYWxcIiBzcmM9XCIvZ2l0aHViLnN2Z1wiLz5cbiAgICAgPC9MaW5rPlxuICAgICA8TGluayBocmVmPVwiLy93d3cuaW5zdGFncmFtLmNvbS9yeWFuX19zaGVlaGFuL1wiPlxuICAgICA8aW1nIGNsYXNzTmFtZT1cInNpZGViYXItc29jaWFsXCIgc3JjPVwiL2luc3RhZ3JhbS5zdmdcIi8+XG4gICAgIDwvTGluaz5cbiAgICAgPC9kaXY+XG4gICAgIDwvbW90aW9uLmRpdj5cbiAgICAgPC9kaXY+XG4gICAgIFxuXG4gICAgIDwvZGl2PlxuICAgICBcblxuXG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyeWFuXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3J5YW4ubWFwKHJ5YW4gPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cnlhbi5faWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgey8qPExpbmsgaHJlZj1cIi9yeWFuL1tpZF1cIiBhcz17YC9yeWFuLyR7cnlhbi5faWR9YH0+Ki99XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICB7cnlhbi5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJoaWRkZW5cIiBhbmltYXRlPVwidmlzaWJsZVwiIHZhcmlhbnRzPXt7aGlkZGVuOiBzY2FsZVN0YXJ0LHZpc2libGU6IHNjYWxlRW5kfX0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldEFjdGl2ZShyeWFuLl9pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge3NldEFjdGl2ZShudWxsKX19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybEZvcihyeWFuLmltYWdlKS53aWR0aCg4MDApfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezgwMCAvIHJ5YW4uaW1hZ2VBc3BlY3R9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7Lyo8L0xpbms+Ki99XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJEaXNwbGF5QmxhY2snO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9EaXNwbGF5LUJsYWNrLndvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX0Jhbm5lci1Cb2xkX0NpbGF0aS53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckJhbm5lclJlZ3VsYXInO1xuICAgICAgICAgIHNyYzogdXJsKCcuL3N0YXRpYy9Td2Vhcl9CYW5uZXItUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1N3ZWFyX1RleHQtUmVndWxhci53b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQcm90b0dyb3Rlc2tCb2xkJztcbiAgICAgICAgICBzcmM6IHVybCgnLi9zdGF0aWMvUHJvdG9Hcm90ZXNrV2ViLUJvbGQud29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrUmVndWxhcic7XG4gICAgICAgICAgc3JjOiB1cmwoJy4vc3RhdGljL1Byb3RvR3JvdGVza1dlYi1SZWd1bGFyLmVvdCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5zaWRlYmFyIHtcblxuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGViYXItaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1iaW8ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJCYW5uZXJSZWd1bGFyJztcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhclRleHRSZWd1bGFyJztcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1kYXRlIHtcbiAgICAgICAgICBcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdTd2VhckRpc3BsYXlCbGFjayc7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWxzIHtcbiAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjB2dztcbiAgICAgICAgICBib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICB9XG4gICAgICAgIC5zaWRlYmFyLXNvY2lhbHMtYnV0dG9ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2lkZWJhci1zb2NpYWwge1xuICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMC42MjVyZW07XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3dlYXJUZXh0UmVndWxhcic7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1N3ZWFyQmFubmVyQm9sZENpbGF0aSc7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtZW1haWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjRkZFMTAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1lbWFpbC1jbGlja2VkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJDb3BpZWQhXCI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTEwMDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUHJvdG9Hcm90ZXNrQm9sZCc7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgYW5pbWF0aW9uOiAyMDBtcyBlYXNlLW91dCAwcyBzbGlkZUluRnJvbUJvdHRvbTtcblxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbkZyb21Cb3R0b20ge1xuICAgICAgICAgMCUge1xuICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpIHNjYWxlKDApO1xuICAgICAgICAgfVxuICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhY3QtZW1haWw6aG92ZXIge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI0ZGRTEwMDtcblxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1zZWxlY3RvciB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZ2J5byB7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnJwYncge1xuICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5jb2xvci1vcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMC4zMTI1cmVtO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucnlhbiB7XG4gICAgICAgICAgcGFkZGluZzogMC42MjVyZW07XG5cbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yeWFuIC5saXN0IGgzIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2xpc3RTdHlsZXN9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcnlhbiA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByeWFuIH0gLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ5YW5zOyJdfQ== */\n/*@ sourceURL=/Volumes/Ryan-T5/example-frontend-next-js/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    __self: _this
  }, _styles_list__WEBPACK_IMPORTED_MODULE_7__["default"]));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Ryans);

/***/ })

})
//# sourceMappingURL=index.js.3cf0a1f252c02440db3b.hot-update.js.map