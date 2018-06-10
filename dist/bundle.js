/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar config = {\n  server: \"https://itunes.apple.com/search?\",\n  searchResultLimit: 100,\n  songsPerPage: 9\n};\n\nvar SearchApp = function () {\n  function SearchApp() {\n    var _this = this;\n\n    _classCallCheck(this, SearchApp);\n\n    var _document$getElements = document.getElementsByClassName(\"search-form__input\");\n\n    var _document$getElements2 = _slicedToArray(_document$getElements, 1);\n\n    this.searchInput = _document$getElements2[0];\n\n    var _document$getElements3 = document.getElementsByClassName(\"search-results__summary\");\n\n    var _document$getElements4 = _slicedToArray(_document$getElements3, 1);\n\n    this.resultSummary = _document$getElements4[0];\n\n    var _document$getElements5 = document.getElementsByClassName(\"songs\");\n\n    var _document$getElements6 = _slicedToArray(_document$getElements5, 1);\n\n    this.songsList = _document$getElements6[0];\n\n    var _document$getElements7 = document.getElementsByClassName(\"search-form\"),\n        _document$getElements8 = _slicedToArray(_document$getElements7, 1),\n        form = _document$getElements8[0];\n\n    form.addEventListener(\"submit\", function (e) {\n      return _this.processInput(e);\n    });\n  }\n\n  _createClass(SearchApp, [{\n    key: \"processInput\",\n    value: function processInput(event) {\n      event.preventDefault();\n\n      var searchQuery = this.searchInput.value.trim();\n      if (!searchQuery) {\n        window.alert(\"Input cannot be empty.\");\n        this.searchInput.value = \"\";\n        return;\n      }\n\n      this.searchSong(searchQuery);\n      this.searchInput.value = \"\";\n    }\n  }, {\n    key: \"searchSong\",\n    value: function searchSong(searchQuery) {\n      this.callITunesApi(searchQuery).then(function (response) {\n        if (response.status === 200) {\n          return response.json();\n        } else {\n          throw response.status;\n        }\n      }).then(function (data) {\n        console.log(data);\n      }).catch(function (error) {\n        console.error(error);\n      });\n    }\n  }, {\n    key: \"callITunesApi\",\n    value: function callITunesApi(searchQuery) {\n      var term = searchQuery.replace(/\\s+/g, \"+\");\n      var url = encodeURI(config.server + \"term=\" + term + \"&country=US&media=music&entity=song&limit=\" + config.searchResultLimit);\n\n      return fetch(url);\n    }\n  }]);\n\n  return SearchApp;\n}();\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return new SearchApp();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOlsiY29uZmlnIiwic2VydmVyIiwic2VhcmNoUmVzdWx0TGltaXQiLCJzb25nc1BlclBhZ2UiLCJTZWFyY2hBcHAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZWFyY2hJbnB1dCIsInJlc3VsdFN1bW1hcnkiLCJzb25nc0xpc3QiLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2Nlc3NJbnB1dCIsImUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoUXVlcnkiLCJ2YWx1ZSIsInRyaW0iLCJ3aW5kb3ciLCJhbGVydCIsInNlYXJjaFNvbmciLCJjYWxsSVR1bmVzQXBpIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsInRlcm0iLCJyZXBsYWNlIiwidXJsIiwiZW5jb2RlVVJJIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUztBQUNiQyxVQUFRLGtDQURLO0FBRWJDLHFCQUFtQixHQUZOO0FBR2JDLGdCQUFjO0FBSEQsQ0FBZjs7SUFNTUMsUztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBQUEsZ0NBQ1NDLFNBQVNDLHNCQUFULENBQWdDLG9CQUFoQyxDQURUOztBQUFBOztBQUNYLFNBQUtDLFdBRE07O0FBQUEsaUNBRVdGLFNBQVNDLHNCQUFULENBQWdDLHlCQUFoQyxDQUZYOztBQUFBOztBQUVYLFNBQUtFLGFBRk07O0FBQUEsaUNBR09ILFNBQVNDLHNCQUFULENBQWdDLE9BQWhDLENBSFA7O0FBQUE7O0FBR1gsU0FBS0csU0FITTs7QUFBQSxpQ0FLR0osU0FBU0Msc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FMSDtBQUFBO0FBQUEsUUFLTEksSUFMSzs7QUFNWkEsU0FBS0MsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0M7QUFBQSxhQUFLLE1BQUtDLFlBQUwsQ0FBa0JDLENBQWxCLENBQUw7QUFBQSxLQUFoQztBQUNEOzs7O2lDQUVZQyxLLEVBQU87QUFDbEJBLFlBQU1DLGNBQU47O0FBRUEsVUFBTUMsY0FBYyxLQUFLVCxXQUFMLENBQWlCVSxLQUFqQixDQUF1QkMsSUFBdkIsRUFBcEI7QUFDQSxVQUFJLENBQUNGLFdBQUwsRUFBa0I7QUFDaEJHLGVBQU9DLEtBQVAsQ0FBYSx3QkFBYjtBQUNBLGFBQUtiLFdBQUwsQ0FBaUJVLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0E7QUFDRDs7QUFFRCxXQUFLSSxVQUFMLENBQWdCTCxXQUFoQjtBQUNBLFdBQUtULFdBQUwsQ0FBaUJVLEtBQWpCLEdBQXlCLEVBQXpCO0FBQ0Q7OzsrQkFFVUQsVyxFQUFhO0FBQ3RCLFdBQUtNLGFBQUwsQ0FBbUJOLFdBQW5CLEVBQ0dPLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBSUEsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixpQkFBT0QsU0FBU0UsSUFBVCxFQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU1GLFNBQVNDLE1BQWY7QUFDRDtBQUNGLE9BUEgsRUFRR0YsSUFSSCxDQVFRLFVBQUNJLElBQUQsRUFBVTtBQUNkQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0QsT0FWSCxFQVdHRyxLQVhILENBV1MsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCSCxnQkFBUUcsS0FBUixDQUFjQSxLQUFkO0FBQ0QsT0FiSDtBQWNEOzs7a0NBRWFmLFcsRUFBYTtBQUN6QixVQUFNZ0IsT0FBT2hCLFlBQVlpQixPQUFaLENBQW9CLE1BQXBCLEVBQTRCLEdBQTVCLENBQWI7QUFDQSxVQUFNQyxNQUFNQyxVQUFhbkMsT0FBT0MsTUFBcEIsYUFBa0MrQixJQUFsQyxrREFBbUZoQyxPQUFPRSxpQkFBMUYsQ0FBWjs7QUFFQSxhQUFPa0MsTUFBTUYsR0FBTixDQUFQO0FBQ0Q7Ozs7OztBQUdIZixPQUFPUixnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEM7QUFBQSxTQUFNLElBQUlQLFNBQUosRUFBTjtBQUFBLENBQTVDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSB7XHJcbiAgc2VydmVyOiBcImh0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9zZWFyY2g/XCIsXHJcbiAgc2VhcmNoUmVzdWx0TGltaXQ6IDEwMCxcclxuICBzb25nc1BlclBhZ2U6IDlcclxufTtcclxuXHJcbmNsYXNzIFNlYXJjaEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBbdGhpcy5zZWFyY2hJbnB1dF0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VhcmNoLWZvcm1fX2lucHV0XCIpO1xyXG4gICAgW3RoaXMucmVzdWx0U3VtbWFyeV0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VhcmNoLXJlc3VsdHNfX3N1bW1hcnlcIik7XHJcbiAgICBbdGhpcy5zb25nc0xpc3RdID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbmdzXCIpO1xyXG5cclxuICAgIGNvbnN0IFtmb3JtXSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWFyY2gtZm9ybVwiKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHRoaXMucHJvY2Vzc0lucHV0KGUpKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NJbnB1dChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKCFzZWFyY2hRdWVyeSkge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJJbnB1dCBjYW5ub3QgYmUgZW1wdHkuXCIpO1xyXG4gICAgICB0aGlzLnNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VhcmNoU29uZyhzZWFyY2hRdWVyeSk7XHJcbiAgICB0aGlzLnNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHNlYXJjaFNvbmcoc2VhcmNoUXVlcnkpIHtcclxuICAgIHRoaXMuY2FsbElUdW5lc0FwaShzZWFyY2hRdWVyeSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyByZXNwb25zZS5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FsbElUdW5lc0FwaShzZWFyY2hRdWVyeSkge1xyXG4gICAgY29uc3QgdGVybSA9IHNlYXJjaFF1ZXJ5LnJlcGxhY2UoL1xccysvZywgXCIrXCIpO1xyXG4gICAgY29uc3QgdXJsID0gZW5jb2RlVVJJKGAke2NvbmZpZy5zZXJ2ZXJ9dGVybT0ke3Rlcm19JmNvdW50cnk9VVMmbWVkaWE9bXVzaWMmZW50aXR5PXNvbmcmbGltaXQ9JHtjb25maWcuc2VhcmNoUmVzdWx0TGltaXR9YCk7XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gbmV3IFNlYXJjaEFwcCgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);