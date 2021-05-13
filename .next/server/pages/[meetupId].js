module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "E:\\Aman\\Newfolder\\React.js\\Next.js\\project\\components\\meetups\\MeetupDetails.js";

const MeetupDetails = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: props.image,
      alt: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (MeetupDetails);

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "E:\\Aman\\Newfolder\\React.js\\Next.js\\project\\pages\\[meetupId]\\index.js";




const MeetupInfo = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.dataLists.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image: props.dataLists.image,
      id: props.dataLists.id,
      title: props.dataLists.title,
      address: props.dataLists.address,
      description: props.dataLists.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

const getStaticPaths = async () => {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');
  const connectDB = client.db();
  const meetupCollections = connectDB.collection('meetups');
  const meetups = await meetupCollections.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map(meetup => {
      return {
        params: {
          meetupId: meetup._id.toString()
        }
      };
    })
  };
};
const getStaticProps = async context => {
  const meetupId = context.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__["MongoClient"].connect('mongodb+srv://aman001:aman28@mycluster.o3hq5.mongodb.net/nextjs?retryWrites=true&w=majority');
  const connectDB = client.db();
  const meetupCollections = connectDB.collection('meetups');
  const selectMeetup = await meetupCollections.findOne({
    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__["ObjectId"])(meetupId)
  });
  client.close(); // fetch the data from API

  return {
    props: {
      dataLists: {
        id: selectMeetup._id.toString(),
        image: selectMeetup.image,
        title: selectMeetup.title,
        address: selectMeetup.address,
        description: selectMeetup.description
      }
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (MeetupInfo);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cEluZm8iLCJkYXRhTGlzdHMiLCJpZCIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiY29ubmVjdERCIiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0TWVldHVwIiwiZmluZE9uZSIsIk9iamVjdElkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGQSxNQUFNQSxhQUFhLEdBQUlDLEtBQUQsSUFBVTtBQUM1QixzQkFDSTtBQUFBLDRCQUNBO0FBQUssU0FBRyxFQUFFQSxLQUFLLENBQUNDLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUQsS0FBSyxDQUFDRTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBQSxnQkFBS0YsS0FBSyxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkEsZUFHQTtBQUFBLGdCQUFJRixLQUFLLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIQSxlQUlBO0FBQUEsZ0JBQUlILEtBQUssQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpBO0FBQUEsa0JBREo7QUFRSCxDQVREOztBQVdlTCw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQTtBQUVBOztBQUVBLE1BQU1NLFVBQVUsR0FBSUwsS0FBRCxJQUFXO0FBQzFCLHNCQUNJO0FBQUEsNEJBQ0EscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBLGtCQUFRQSxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JKO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBSUEscUVBQUMseUVBQUQ7QUFDSSxXQUFLLEVBQUVGLEtBQUssQ0FBQ00sU0FBTixDQUFnQkwsS0FEM0I7QUFFSSxRQUFFLEVBQUVELEtBQUssQ0FBQ00sU0FBTixDQUFnQkMsRUFGeEI7QUFHSSxXQUFLLEVBQUVQLEtBQUssQ0FBQ00sU0FBTixDQUFnQkosS0FIM0I7QUFJSSxhQUFPLEVBQUVGLEtBQUssQ0FBQ00sU0FBTixDQUFnQkgsT0FKN0I7QUFLSSxpQkFBVyxFQUFFSCxLQUFLLENBQUNNLFNBQU4sQ0FBZ0JGO0FBTGpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkE7QUFBQSxrQkFESjtBQWNILENBZkQ7O0FBaUJPLE1BQU1JLGNBQWMsR0FBRyxZQUFZO0FBRXRDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQW9CLDZGQUFwQixDQUFyQjtBQUVBLFFBQU1DLFNBQVMsR0FBR0gsTUFBTSxDQUFDSSxFQUFQLEVBQWxCO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdGLFNBQVMsQ0FBQ0csVUFBVixDQUFxQixTQUFyQixDQUExQjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUIsRUFBdkIsRUFBMEI7QUFBQ0MsT0FBRyxFQUFDO0FBQUwsR0FBMUIsRUFBbUNDLE9BQW5DLEVBQXRCO0FBRUFWLFFBQU0sQ0FBQ1csS0FBUDtBQUVBLFNBQU07QUFDRkMsWUFBUSxFQUFDLEtBRFA7QUFFRkMsU0FBSyxFQUFDTixPQUFPLENBQUNPLEdBQVIsQ0FBYUMsTUFBRCxJQUFVO0FBQ3hCLGFBQU07QUFDRkMsY0FBTSxFQUFDO0FBQ0hDLGtCQUFRLEVBQUVGLE1BQU0sQ0FBQ04sR0FBUCxDQUFXUyxRQUFYO0FBRFA7QUFETCxPQUFOO0FBS0gsS0FOSztBQUZKLEdBQU47QUFVSCxDQXRCTTtBQXdCQSxNQUFNQyxjQUFjLEdBQUcsTUFBTUMsT0FBTixJQUFpQjtBQUUzQyxRQUFNSCxRQUFRLEdBQUdHLE9BQU8sQ0FBQ0osTUFBUixDQUFlQyxRQUFoQztBQUVBLFFBQU1qQixNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQiw2RkFBcEIsQ0FBckI7QUFFQSxRQUFNQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksRUFBUCxFQUFsQjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHRixTQUFTLENBQUNHLFVBQVYsQ0FBcUIsU0FBckIsQ0FBMUI7QUFFQSxRQUFNZSxZQUFZLEdBQUcsTUFBTWhCLGlCQUFpQixDQUFDaUIsT0FBbEIsQ0FBMEI7QUFBQ2IsT0FBRyxFQUFFYyx3REFBUSxDQUFDTixRQUFEO0FBQWQsR0FBMUIsQ0FBM0I7QUFFQWpCLFFBQU0sQ0FBQ1csS0FBUCxHQVoyQyxDQWEzQzs7QUFDQSxTQUFNO0FBQ0ZwQixTQUFLLEVBQUM7QUFDRk0sZUFBUyxFQUFDO0FBQ05DLFVBQUUsRUFBQ3VCLFlBQVksQ0FBQ1osR0FBYixDQUFpQlMsUUFBakIsRUFERztBQUVOMUIsYUFBSyxFQUFDNkIsWUFBWSxDQUFDN0IsS0FGYjtBQUdOQyxhQUFLLEVBQUM0QixZQUFZLENBQUM1QixLQUhiO0FBSU5DLGVBQU8sRUFBQzJCLFlBQVksQ0FBQzNCLE9BSmY7QUFLTkMsbUJBQVcsRUFBQzBCLFlBQVksQ0FBQzFCO0FBTG5CO0FBRFI7QUFESixHQUFOO0FBV0gsQ0F6Qk07QUEyQlFDLHlFQUFmLEU7Ozs7Ozs7Ozs7O0FDMUVBLG9DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1ttZWV0dXBJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanNcIik7XG4iLCJcclxuXHJcbmNvbnN0IE1lZXR1cERldGFpbHMgPSAocHJvcHMpID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICA8cD57cHJvcHMuYWRkcmVzc308L3A+XHJcbiAgICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsczsiLCJpbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlscyc7XHJcblxyXG5pbXBvcnQge01vbmdvQ2xpZW50LE9iamVjdElkfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBNZWV0dXBJbmZvID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntwcm9wcy5kYXRhTGlzdHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPE1lZXR1cERldGFpbHNcclxuICAgICAgICAgICAgaW1hZ2U9e3Byb3BzLmRhdGFMaXN0cy5pbWFnZX1cclxuICAgICAgICAgICAgaWQ9e3Byb3BzLmRhdGFMaXN0cy5pZH1cclxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmRhdGFMaXN0cy50aXRsZX1cclxuICAgICAgICAgICAgYWRkcmVzcz17cHJvcHMuZGF0YUxpc3RzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kYXRhTGlzdHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hbWFuMDAxOmFtYW4yOEBteWNsdXN0ZXIubzNocTUubW9uZ29kYi5uZXQvbmV4dGpzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3REQiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb25zID0gY29ubmVjdERCLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbnMuZmluZCh7fSx7X2lkOjF9KS50b0FycmF5KCk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGZhbGxiYWNrOmZhbHNlLFxyXG4gICAgICAgIHBhdGhzOm1lZXR1cHMubWFwKChtZWV0dXApPT57XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIHBhcmFtczp7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoY29udGV4dCkgPT57XHJcblxyXG4gICAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuICAgIFxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hbWFuMDAxOmFtYW4yOEBteWNsdXN0ZXIubzNocTUubW9uZ29kYi5uZXQvbmV4dGpzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG5cclxuICAgIGNvbnN0IGNvbm5lY3REQiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb25zID0gY29ubmVjdERCLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RNZWV0dXAgPSBhd2FpdCBtZWV0dXBDb2xsZWN0aW9ucy5maW5kT25lKHtfaWQ6IE9iamVjdElkKG1lZXR1cElkKX0pO1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgLy8gZmV0Y2ggdGhlIGRhdGEgZnJvbSBBUElcclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIGRhdGFMaXN0czp7XHJcbiAgICAgICAgICAgICAgICBpZDpzZWxlY3RNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZTpzZWxlY3RNZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpzZWxlY3RNZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOnNlbGVjdE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246c2VsZWN0TWVldHVwLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEluZm87IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=