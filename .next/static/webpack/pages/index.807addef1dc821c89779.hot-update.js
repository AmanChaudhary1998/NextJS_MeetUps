webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "E:\\Aman\\Newfolder\\React.js\\Next.js\\project\\pages\\index.js",
    _this = undefined;


 // const DUMMY_LISTS = [
//     {
//         id:'m1',
//         title:'A First Meetup',
//         image:'https://elementor.com/marketing/wp-content/uploads/sites/15/2020/04/meet-coiv.png',
//         address:'woow address',
//         description:'This is first meet'
//     },
//     {
//         id:'m2',
//         title:'A Second Meetup',
//         image:'https://elementor.com/marketing/wp-content/uploads/sites/15/2020/04/meet-coiv.png',
//         address:'yeah address',
//         description:'This is second meet'
//     }
// ];
// These method cannot be used as while the page re renders it gives the blank page as dosn't do with async 
//so to over come prefer METHOD 2
// const HomePage = () =>{
//     const [loadingMeetups,setLodingMeetups] = useState([]);
//     useEffect(()=>{
//         setLodingMeetups(DUMMY_LISTS)
//     },[])
//     return(
//         <>
//         <MeetupList meetups = {loadingMeetups} />
//         </>
//     )
// }
// Method - 2

var HomePage = function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Next Meetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Browse a huge list of NextJS based mmetups"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: props.dataLists
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
}; // export const getStaticServerProps = async (context) =>{
//     // fetch the data from API
//     const req = context.req;
//     const res = context.res;
//     return{
//         props:{
//             dataLists:DUMMY_LISTS
//         }
//     };
// };


_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsImRhdGFMaXN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaUJBQWlCLG1CQUFPLENBQUMscUZBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0RDtDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVU7QUFFdkIsc0JBQ0k7QUFBQSw0QkFDQSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFLQSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBSUEsS0FBSyxDQUFDQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEE7QUFBQSxrQkFESjtBQVNILENBWEQsQyxDQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0F2Qk1GLFE7O0FBc0RTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MDdhZGRlZjFkYzgyMWM4OTc3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xyXG5cclxuaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuLy8gY29uc3QgRFVNTVlfTElTVFMgPSBbXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6J20xJyxcclxuLy8gICAgICAgICB0aXRsZTonQSBGaXJzdCBNZWV0dXAnLFxyXG4vLyAgICAgICAgIGltYWdlOidodHRwczovL2VsZW1lbnRvci5jb20vbWFya2V0aW5nL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8xNS8yMDIwLzA0L21lZXQtY29pdi5wbmcnLFxyXG4vLyAgICAgICAgIGFkZHJlc3M6J3dvb3cgYWRkcmVzcycsXHJcbi8vICAgICAgICAgZGVzY3JpcHRpb246J1RoaXMgaXMgZmlyc3QgbWVldCdcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgaWQ6J20yJyxcclxuLy8gICAgICAgICB0aXRsZTonQSBTZWNvbmQgTWVldHVwJyxcclxuLy8gICAgICAgICBpbWFnZTonaHR0cHM6Ly9lbGVtZW50b3IuY29tL21hcmtldGluZy93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvMTUvMjAyMC8wNC9tZWV0LWNvaXYucG5nJyxcclxuLy8gICAgICAgICBhZGRyZXNzOid5ZWFoIGFkZHJlc3MnLFxyXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOidUaGlzIGlzIHNlY29uZCBtZWV0J1xyXG4vLyAgICAgfVxyXG4vLyBdO1xyXG5cclxuXHJcbi8vIFRoZXNlIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBhcyB3aGlsZSB0aGUgcGFnZSByZSByZW5kZXJzIGl0IGdpdmVzIHRoZSBibGFuayBwYWdlIGFzIGRvc24ndCBkbyB3aXRoIGFzeW5jIFxyXG4vL3NvIHRvIG92ZXIgY29tZSBwcmVmZXIgTUVUSE9EIDJcclxuXHJcbi8vIGNvbnN0IEhvbWVQYWdlID0gKCkgPT57XHJcblxyXG4vLyAgICAgY29uc3QgW2xvYWRpbmdNZWV0dXBzLHNldExvZGluZ01lZXR1cHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuLy8gICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4vLyAgICAgICAgIHNldExvZGluZ01lZXR1cHMoRFVNTVlfTElTVFMpXHJcbi8vICAgICB9LFtdKVxyXG5cclxuLy8gICAgIHJldHVybihcclxuLy8gICAgICAgICA8PlxyXG4vLyAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHMgPSB7bG9hZGluZ01lZXR1cHN9IC8+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIE1ldGhvZCAtIDJcclxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+e1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dCBNZWV0dXBzPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkJyb3dzZSBhIGh1Z2UgbGlzdCBvZiBOZXh0SlMgYmFzZWQgbW1ldHVwc1wiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHMgPSB7cHJvcHMuZGF0YUxpc3RzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2V0U3RhdGljU2VydmVyUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XHJcbi8vICAgICAvLyBmZXRjaCB0aGUgZGF0YSBmcm9tIEFQSVxyXG4vLyAgICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcclxuXHJcbi8vICAgICByZXR1cm57XHJcbi8vICAgICAgICAgcHJvcHM6e1xyXG4vLyAgICAgICAgICAgICBkYXRhTGlzdHM6RFVNTVlfTElTVFNcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG4vLyB9O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+e1xyXG4gICAgLy8gZmV0Y2ggdGhlIGRhdGEgZnJvbSBBUElcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vYW1hbjAwMTphbWFuMjhAbXljbHVzdGVyLm8zaHE1Lm1vbmdvZGIubmV0L25leHRqcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuXHJcbiAgICBjb25zdCBjb25uZWN0REIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9ucyA9IGNvbm5lY3REQi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb25zLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIGRhdGFMaXN0czogbWVldHVwcy5tYXAoKG1lZXR1cCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTptZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6bWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246bWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOm1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgRFVNTVlfTElTVFMgd2l0aCBtZWV0dXBzIGFzIGZldGNoIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAgICAgLy8gd2l0aCB0aGVzZSB5b3VyIHBhZ2Ugd2lsbCByZWdlbnJhdGVkIGFmdGVyIGV2ZXJ5IDEwIHNlYyBzbyB0aGF0IHVwZGF0aW5nIHJlZmxlY3RzIG9udG8gdGhlIHBhZ2VcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=