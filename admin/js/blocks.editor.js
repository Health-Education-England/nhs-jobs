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
/******/ 	return __webpack_require__(__webpack_require__.s = "pE9T");
/******/ })
/************************************************************************/
/******/ ({

/***/ "g1iy":
/*!******************************************!*\
  !*** ./assets/blocks/jobs-block/icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icon = React.createElement("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("path", null));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "pE9T":
/*!********************************!*\
  !*** ./assets/blocks/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jobs_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jobs-block */ "xCW8");


/***/ }),

/***/ "xCW8":
/*!*******************************************!*\
  !*** ./assets/blocks/jobs-block/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "g1iy");
// Block dependancies
 // Internal block libraries

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/jobsfeed', {
  title: __('Jobs Block', 'nhsjobs'),
  description: __('Add feed from the NHS jobs site in here. If you leave this field blank the default is: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title ', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_0__["default"],
  keywords: [__('Jobs listings list', 'nhsjobs'), __('Feed Vacencies Nursing', 'nhsjobs')],
  attributes: {
    title: {
      type: 'string'
    }
  },
  supports: {
    align: true,
    // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
    anchor: true,
    // allow support for an anchor tag
    customClassName: true,
    // allows a custom classname to be added by the user
    className: true,
    // allow default custom classname to be added to your block
    html: true,
    // allow the html to be edited
    inserter: true,
    // set to false if you don't want the block to be insertable
    multiple: true,
    // allows more than one block of that type on the page
    reusable: true // whether block is allowed to be a reusable block

  },
  edit: function edit(props) {
    var title = props.attributes.title,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    return React.createElement("div", {
      className: className
    }, React.createElement(RichText, {
      tagName: "h2",
      placeholder: __("Add Title", "_vt"),
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      },
      value: title
    }));
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    return null;
  }
}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9qb2JzLWJsb2NrL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmxvY2tzL2pvYnMtYmxvY2svaW5kZXguanMiXSwibmFtZXMiOlsiaWNvbiIsIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJSaWNoVGV4dCIsImVkaXRvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwiYXR0cmlidXRlcyIsInR5cGUiLCJzdXBwb3J0cyIsImFsaWduIiwiYW5jaG9yIiwiY3VzdG9tQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaHRtbCIsImluc2VydGVyIiwibXVsdGlwbGUiLCJyZXVzYWJsZSIsImVkaXQiLCJwcm9wcyIsImlzU2VsZWN0ZWQiLCJzZXRBdHRyaWJ1dGVzIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQU1BLElBQUksR0FBRztBQUFLLE9BQUssRUFBQyxNQUFYO0FBQWtCLFFBQU0sRUFBQyxNQUF6QjtBQUFnQyxTQUFPLEVBQUMsYUFBeEM7QUFBc0QsT0FBSyxFQUFDO0FBQTVELEdBQ1osaUNBRFksQ0FBYjtBQUllQSxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0NBS0E7O0lBRVFDLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7SUFDQUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7SUFDQUUsUSxHQUFhSixFQUFFLENBQUNLLE0sQ0FBaEJELFEsRUFFUjs7QUFFZUYsZ0ZBQWlCLENBQy9CLGtCQUQrQixFQUUvQjtBQUNDSSxPQUFLLEVBQUVQLEVBQUUsQ0FBQyxZQUFELEVBQWUsU0FBZixDQURWO0FBRUNRLGFBQVcsRUFBRVIsRUFBRSxDQUFDLG9LQUFELEVBQXVLLFNBQXZLLENBRmhCO0FBR0NTLFVBQVEsRUFBRSxXQUhYO0FBSUNWLE1BQUksRUFBRUEsNkNBSlA7QUFLQ1csVUFBUSxFQUFFLENBQ1RWLEVBQUUsQ0FBRSxvQkFBRixFQUF3QixTQUF4QixDQURPLEVBRVRBLEVBQUUsQ0FBRSx3QkFBRixFQUE0QixTQUE1QixDQUZPLENBTFg7QUFTQ1csWUFBVSxFQUFFO0FBQ1hKLFNBQUssRUFBRTtBQUNOSyxVQUFJLEVBQUU7QUFEQTtBQURJLEdBVGI7QUFjQ0MsVUFBUSxFQUFFO0FBQ1RDLFNBQUssRUFBRSxJQURFO0FBQ0k7QUFDYkMsVUFBTSxFQUFFLElBRkM7QUFFSztBQUNkQyxtQkFBZSxFQUFFLElBSFI7QUFHYztBQUN2QkMsYUFBUyxFQUFFLElBSkY7QUFJUTtBQUNqQkMsUUFBSSxFQUFFLElBTEc7QUFLRztBQUNaQyxZQUFRLEVBQUUsSUFORDtBQU1PO0FBQ2hCQyxZQUFRLEVBQUUsSUFQRDtBQU9PO0FBQ2hCQyxZQUFRLEVBQUUsSUFSRCxDQVFPOztBQVJQLEdBZFg7QUF3QkNDLE1BQUksRUFBRSxjQUFBQyxLQUFLLEVBQUk7QUFBQSxRQUNRaEIsS0FEUixHQUMwRGdCLEtBRDFELENBQ05aLFVBRE0sQ0FDUUosS0FEUjtBQUFBLFFBQ2lCVSxTQURqQixHQUMwRE0sS0FEMUQsQ0FDaUJOLFNBRGpCO0FBQUEsUUFDNEJPLFVBRDVCLEdBQzBERCxLQUQxRCxDQUM0QkMsVUFENUI7QUFBQSxRQUN3Q0MsYUFEeEMsR0FDMERGLEtBRDFELENBQ3dDRSxhQUR4QztBQUVkLFdBQ0M7QUFBSyxlQUFTLEVBQUdSO0FBQWpCLE9BQ0Msb0JBQUMsUUFBRDtBQUNDLGFBQU8sRUFBQyxJQURUO0FBRUMsaUJBQVcsRUFBR2pCLEVBQUUsQ0FBRSxXQUFGLEVBQWUsS0FBZixDQUZqQjtBQUdDLGNBQVEsRUFBRyxrQkFBQU8sS0FBSztBQUFBLGVBQUlrQixhQUFhLENBQUU7QUFBRWxCLGVBQUssRUFBTEE7QUFBRixTQUFGLENBQWpCO0FBQUEsT0FIakI7QUFJQyxXQUFLLEVBQUdBO0FBSlQsTUFERCxDQUREO0FBVUEsR0FwQ0Y7QUFxQ0NtQixNQUFJLEVBQUUsY0FBQUgsS0FBSyxFQUFJO0FBQUEsUUFDTlosVUFETSxHQUNvQlksS0FEcEIsQ0FDTlosVUFETTtBQUFBLFFBQ01NLFNBRE4sR0FDb0JNLEtBRHBCLENBQ01OLFNBRE47QUFFZCxXQUFPLElBQVA7QUFDQTtBQXhDRixDQUYrQixDQUFoQyxFIiwiZmlsZSI6Ii4vYWRtaW4vanMvYmxvY2tzLmVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcInBFOVRcIik7XG4iLCJjb25zdCBpY29uID0gPHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cblx0PHBhdGggLz5cbjwvc3ZnPjtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbjsiLCJpbXBvcnQgXCIuL2pvYnMtYmxvY2tcIjsiLCIvLyBCbG9jayBkZXBlbmRhbmNpZXNcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcblxuXG4vLyBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgUmljaFRleHQgfSA9IHdwLmVkaXRvcjtcblxuLy8gUmVnaXN0ZXIgQmxvY2tcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXG5cdCduaHNqb2JzL2pvYnNmZWVkJyxcblx0e1xuXHRcdHRpdGxlOiBfXygnSm9icyBCbG9jaycsICduaHNqb2JzJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXygnQWRkIGZlZWQgZnJvbSB0aGUgTkhTIGpvYnMgc2l0ZSBpbiBoZXJlLiBJZiB5b3UgbGVhdmUgdGhpcyBmaWVsZCBibGFuayB0aGUgZGVmYXVsdCBpczogaHR0cHM6Ly93d3cuam9icy5uaHMudWsvc2VhcmNoX3htbD9rZXl3b3JkPW51cnNpbmclMjBhc3NvY2lhdGUmZmllbGQ9dGl0bGUgJywgJ25oc2pvYnMnICksXG5cdFx0Y2F0ZWdvcnk6ICduaHNibG9ja3MnLFxuXHRcdGljb246IGljb24sXG5cdFx0a2V5d29yZHM6IFtcblx0XHRcdF9fKCAnSm9icyBsaXN0aW5ncyBsaXN0JywgJ25oc2pvYnMnICksXG5cdFx0XHRfXyggJ0ZlZWQgVmFjZW5jaWVzIE51cnNpbmcnLCAnbmhzam9icycgKSxcblx0XHRdLFxuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdXBwb3J0czoge1xuXHRcdFx0YWxpZ246IHRydWUsIC8vIGFsbG93IGFsbCBhbGlnbm1lbnRzIGNhbiBhbHNvIGNob29zZSBhcnJheSBvZiBhbGxvd2VkIGFsaWdubWVudHMgZWcgWyAnbGVmdCcsICdyaWdodCcsICdmdWxsJyBdXG5cdFx0XHRhbmNob3I6IHRydWUsIC8vIGFsbG93IHN1cHBvcnQgZm9yIGFuIGFuY2hvciB0YWdcblx0XHRcdGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3dzIGEgY3VzdG9tIGNsYXNzbmFtZSB0byBiZSBhZGRlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2xhc3NOYW1lOiB0cnVlLCAvLyBhbGxvdyBkZWZhdWx0IGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8geW91ciBibG9ja1xuXHRcdFx0aHRtbDogdHJ1ZSwgLy8gYWxsb3cgdGhlIGh0bWwgdG8gYmUgZWRpdGVkXG5cdFx0XHRpbnNlcnRlcjogdHJ1ZSwgLy8gc2V0IHRvIGZhbHNlIGlmIHlvdSBkb24ndCB3YW50IHRoZSBibG9jayB0byBiZSBpbnNlcnRhYmxlXG5cdFx0XHRtdWx0aXBsZTogdHJ1ZSwgLy8gYWxsb3dzIG1vcmUgdGhhbiBvbmUgYmxvY2sgb2YgdGhhdCB0eXBlIG9uIHRoZSBwYWdlXG5cdFx0XHRyZXVzYWJsZTogdHJ1ZSwgLy8gd2hldGhlciBibG9jayBpcyBhbGxvd2VkIHRvIGJlIGEgcmV1c2FibGUgYmxvY2tcblx0XHR9LFxuXHRcdGVkaXQ6IHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyB0aXRsZSB9LCBjbGFzc05hbWUsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSA+XG5cdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHR0YWdOYW1lPVwiaDJcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggXCJBZGQgVGl0bGVcIiwgXCJfdnRcIiApIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGl0bGUgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZSB9ICkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyB0aXRsZSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0c2F2ZTogcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fSxcblxuKTsiXSwic291cmNlUm9vdCI6IiJ9