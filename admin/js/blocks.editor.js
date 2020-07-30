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

/***/ "/5b1":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-trim.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "GHVm");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "gfA+");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "/EgQ":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "/UzC":
/*!*************************************************!*\
  !*** ./assets/blocks/opportunities-cpt/icon.js ***!
  \*************************************************/
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

/***/ "04Ix":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "hdMt");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "0BK2":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "0Dky":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "1lkh":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "cEKj");
var store = __webpack_require__(/*! ../internals/shared-store */ "doUz");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "2oRo":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "39uu":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "3uAa":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "GUr9");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "Y4yM");
var toObject = __webpack_require__(/*! ../internals/to-object */ "T/97");
var toLength = __webpack_require__(/*! ../internals/to-length */ "ZyXh");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "Q0Rw");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "45KF":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(/*! ../array/virtual/map */ "UQe+");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),

/***/ "4ZM+":
/*!******************************************************!*\
  !*** ./assets/blocks/opportunities-cpt/taxSelect.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "sMBO");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "FLGM");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "lHQ6");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/defineProperty */ "04Ix");
/* harmony import */ var _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);




var __ = wp.i18n.__;
var withSelect = wp.data.withSelect;
var SelectControl = wp.components.SelectControl;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withState = _wp$compose.withState;
var dispatch = wp.data.dispatch;

var NHSTaxSelect = function NHSTaxSelect(_ref) {
  var parentTerms = _ref.parentTerms,
      parentAttribute = _ref.parentAttribute,
      parentAttrName = _ref.parentAttrName,
      parentLabel = _ref.parentLabel,
      childAttribute = _ref.childAttribute,
      childTerms = _ref.childTerms,
      childAttrName = _ref.childAttrName,
      childLabel = _ref.childLabel,
      block = _ref.block,
      currentPost = _ref.currentPost,
      term = _ref.term;

  var updateTaxonomy = function updateTaxonomy(select, attribute, relationship) {
    // updates block attribites
    dispatch('core/block-editor').updateBlockAttributes(block.clientId, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, attribute, select)); // checks whether this is a parent or child taxonomy

    var termIds = relationship ? [_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(select)] : [_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(select), _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(parentAttribute)];
    dispatch('core').editEntityRecord('postType', currentPost.type, currentPost.id, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, term, termIds));
  };

  var parentSelect = function parentSelect(parentTerms) {
    var selectItem = [{
      label: 'Select ' + parentLabel,
      value: 0
    }];

    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(parentTerms).call(parentTerms, function (term, index) {
      selectItem.push({
        label: term.name,
        value: term.id
      });
    });

    return selectItem;
  };

  var childSelect = function childSelect(childTerms) {
    if (childTerms) {
      var selectItem = [{
        label: 'Select ' + childLabel,
        value: 0
      }];

      _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(childTerms).call(childTerms, function (term, index) {
        selectItem.push({
          label: term.name,
          value: term.id
        });
      });

      return selectItem;
    } else {
      return [];
    }
  };

  return React.createElement("div", null, React.createElement(SelectControl, {
    label: parentLabel,
    value: parentAttribute,
    options: parentSelect(parentTerms),
    onChange: function onChange(select) {
      updateTaxonomy(select, parentAttrName, true);
    }
  }), React.createElement(SelectControl, {
    label: childLabel,
    value: childAttribute,
    options: childSelect(childTerms),
    onChange: function onChange(select) {
      updateTaxonomy(select, childAttrName, false);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withSelect(function (select, ownProps) {
  var parent_query = {
    'parent': 0,
    'hide_empty': false,
    'per_page': -1
  };
  var child_query = {
    'parent': ownProps.parentAttribute,
    'hide_empty': false,
    'per_page': -1
  };
  return {
    parentTerms: select('core').getEntityRecords('taxonomy', 'nhs_location', parent_query),
    childTerms: select('core').getEntityRecords('taxonomy', 'nhs_location', child_query),
    block: select("core/editor").getSelectedBlock(),
    currentPost: select('core/editor').getCurrentPost(),
    ownProps: ownProps
  };
})(NHSTaxSelect));

/***/ }),

/***/ "4vuT":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/parse-int.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var trim = __webpack_require__(/*! ../internals/string-trim */ "/5b1").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "gfA+");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "93I0":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "VpIT");
var uid = __webpack_require__(/*! ../internals/uid */ "kOOl");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "A2Ma":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var shared = __webpack_require__(/*! ../internals/shared */ "1lkh");
var uid = __webpack_require__(/*! ../internals/uid */ "PoCt");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "HmPo");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "AnMC":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "QYBB");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "LGyv");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "Bvq2":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "DPsx":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "zBJ4");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "DQNa":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "busE");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "FLGM":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ "XGjS");

/***/ }),

/***/ "FWHo":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "GHVm":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "GUr9":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/bind-context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "zJQS");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "HmPo":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "LGyv":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "OFcY":
/*!*******************************************!*\
  !*** ./assets/blocks/jobs-cards/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "FLGM");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "jcY6");

// Block dependancies
 // Internal block libraries

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    RichText = _wp$blockEditor.RichText; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/jobscards', {
  title: __('Jobs Cards', 'nhsjobs'),
  description: __('Adds three of the latest jobs', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  keywords: [__('Jobs listings list', 'nhsjobs'), __('Feed Vacencies Nursing', 'nhsjobs')],
  attributes: {
    url: {
      type: 'string'
    },
    title: {
      type: 'string',
      default: 'Latest Vacancies'
    },
    linkTxt: {
      type: 'string',
      default: 'View all Vacancies'
    }
  },
  supports: {
    align: false,
    // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
    anchor: true,
    // allow support for an anchor tag
    customClassName: true,
    // allows a custom classname to be added by the user
    className: true,
    // allow default custom classname to be added to your block
    html: false,
    // allow the html to be edited
    inserter: true,
    // set to false if you don't want the block to be insertable
    multiple: true,
    // allows more than one block of that type on the page
    reusable: true // whether block is allowed to be a reusable block

  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        url = _props$attributes.url,
        title = _props$attributes.title,
        linkTxt = _props$attributes.linkTxt,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    var CardLength = [1, 2, 3];

    function JobCard(props) {
      return React.createElement("div", {
        className: "nhsuk-grid-column-one-third"
      }, React.createElement("a", {
        className: "nhsuk-promo__link-wrapper"
      }, React.createElement("div", {
        className: "nhsuk-promo__content"
      }, React.createElement("h3", {
        className: "nhsuk-promo__heading"
      }, "Job Title ", props.i), React.createElement("dl", {
        className: "nhsuk-summary-list"
      }, React.createElement("div", {
        className: "nhsuk-summary-list__row"
      }, React.createElement("dt", {
        className: "nhsuk-summary-list__key"
      }, "Location"), React.createElement("dd", {
        className: "nhsuk-summary-list__value"
      }, "Job Location")), React.createElement("div", {
        className: "nhsuk-summary-list__row"
      }, React.createElement("dt", {
        className: "nhsuk-summary-list__key"
      }, "Salary"), React.createElement("dd", {
        className: "nhsuk-summary-list__value"
      }, "Job Salary"))), React.createElement("div", {
        className: "nhsuk-action-link"
      }, React.createElement("span", {
        className: "nhsuk-action-link__link"
      }, React.createElement("svg", {
        className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, React.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }), React.createElement("path", {
        d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"
      })), React.createElement("span", {
        className: "nhsuk-action-link__text"
      }, "View Vacancy"))))));
    }

    return React.createElement("section", {
      className: "nhsuk-grid-row"
    }, React.createElement("div", {
      className: "nhsuk-width-container"
    }, React.createElement("div", {
      className: "nhsuk-grid__item nhsuk-grid-column-full"
    }, React.createElement(RichText, {
      tagName: "h2",
      value: title,
      onChange: function onChange(title) {
        return setAttributes({
          title: title
        });
      }
    }), React.createElement("div", {
      className: "nhsuk-grid-row nhsuk-promo-group homepage-vacancies"
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(CardLength).call(CardLength, function (i, index) {
      return React.createElement(JobCard, {
        key: index
      });
    })), React.createElement(URLInputButton, {
      url: url,
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      }
    }), React.createElement("div", {
      className: "nhsuk-action-link text-center"
    }, React.createElement("a", {
      className: "nhsuk-action-link__link"
    }, React.createElement("svg", {
      className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true"
    }, React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), React.createElement("path", {
      d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"
    })), React.createElement(RichText, {
      tagName: "span",
      className: "nhsuk-action-link__text",
      value: linkTxt,
      onChange: function onChange(linkTxt) {
        return setAttributes({
          linkTxt: linkTxt
        });
      }
    }))))));
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    return null;
  }
}));

/***/ }),

/***/ "OsYe":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "Pkdo":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "QYBB");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "PoCt":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "Q0Rw":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");
var isArray = __webpack_require__(/*! ../internals/is-array */ "YiBS");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "QQub":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "3uAa").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "nJYk");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "QYBB":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "d7IX");
var anObject = __webpack_require__(/*! ../internals/an-object */ "b42z");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "cWgI");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "RLqH":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "cEPT");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "LGyv");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "pCEo");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "cWgI");
var has = __webpack_require__(/*! ../internals/has */ "eOcF");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "d7IX");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "T/97":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "GHVm");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "UQe+":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.map */ "QQub");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "oWnS");

module.exports = entryVirtual('Array').map;


/***/ }),

/***/ "UTVS":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "VpIT":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "xDBR");
var store = __webpack_require__(/*! ../internals/shared-store */ "xs3f");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "VxFp":
/*!**************************************************!*\
  !*** ./assets/blocks/opportunities-cpt/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "DQNa");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "/UzC");
/* harmony import */ var _taxSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxSelect */ "4ZM+");

// Block dependancies

 // Internal block libraries

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var URLInput = wp.blockEditor.URLInput;
var _wp$components = wp.components,
    DateTimePicker = _wp$components.DateTimePicker,
    ToggleControl = _wp$components.ToggleControl; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/opportunites', {
  title: __('Opportunites', 'nhsjobs'),
  description: __('Add a feed from the NHS jobs site.', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  keywords: [__('Jobs listings list', 'nhsjobs'), __('Feed Vacencies Nursing', 'nhsjobs')],
  attributes: {
    url: {
      type: 'string'
    },
    end: {
      type: 'string',
      default: new Date(),
      source: 'meta',
      meta: 'nhsjobs_end'
    },
    location: {
      type: 'string'
    },
    country: {
      type: 'string'
    }
  },
  supports: {
    align: false,
    // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
    anchor: true,
    // allow support for an anchor tag
    customClassName: true,
    // allows a custom classname to be added by the user
    className: true,
    // allow default custom classname to be added to your block
    html: false,
    // allow the html to be edited
    inserter: true,
    // set to false if you don't want the block to be insertable
    multiple: false,
    // allows more than one block of that type on the page
    reusable: true // whether block is allowed to be a reusable block

  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        end = _props$attributes.end,
        location = _props$attributes.location,
        country = _props$attributes.country,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    return React.createElement("div", {
      className: className
    }, React.createElement(DateTimePicker, {
      currentDate: end,
      onChange: function onChange(end) {
        return setAttributes({
          end: end
        });
      },
      is12Hour: true
    }), React.createElement(_taxSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      parentAttribute: location,
      childAttribute: country,
      parentAttrName: "location",
      childAttrName: "country",
      term: "nhs_location",
      parentLabel: "Continent",
      childLabel: "Country"
    }), console.log(location, country));
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    return null;
  }
}));

/***/ }),

/***/ "XGjS":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/instance/map */ "45KF");


/***/ }),

/***/ "XGwC":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "Y4yM":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "/EgQ");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "YiBS":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "/EgQ");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "ZyXh":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "FWHo");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "afO8":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "f5p1");
var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var objectHas = __webpack_require__(/*! ../internals/has */ "UTVS");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "93I0");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "0BK2");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "b42z":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "busE":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var shared = __webpack_require__(/*! ../internals/shared */ "VpIT");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");
var has = __webpack_require__(/*! ../internals/has */ "UTVS");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "zk60");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "noGo");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "afO8");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "cEKj":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "cEPT":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "cWgI":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "d7IX":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "ejc7");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "dktu":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "doUz":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "j60x");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "eOcF":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "eTws":
/*!***************************************************!*\
  !*** ./node_modules/core-js-pure/es/parse-int.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es.parse-int */ "r4HA");
var path = __webpack_require__(/*! ../internals/path */ "dktu");

module.exports = path.parseInt;


/***/ }),

/***/ "ejc7":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "f5p1":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "noGo");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

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

/***/ "g4Mb":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/stable/parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../es/parse-int */ "eTws");


/***/ }),

/***/ "g6v/":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "0Dky");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "gfA+":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/whitespaces.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "glrk":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "hdMt":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ "mhMO");

/***/ }),

/***/ "hh1v":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "j60x":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "jcY6":
/*!******************************************!*\
  !*** ./assets/blocks/jobs-cards/icon.js ***!
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

/***/ "kOOl":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "kRJp":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "m/L8");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "XGwC");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "lHQ6":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/parse-int */ "g4Mb");

/***/ }),

/***/ "m/L8":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "DPsx");
var anObject = __webpack_require__(/*! ../internals/an-object */ "glrk");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "wE6v");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "mhMO":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/define-property */ "o4zr");


/***/ }),

/***/ "nJYk":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "noGo":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "VpIT");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "o4zr":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.define-property */ "Pkdo");
var path = __webpack_require__(/*! ../../internals/path */ "dktu");

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),

/***/ "oOVA":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "oWnS":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "dktu");

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ "pCEo":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "Y4yM");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "GHVm");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


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
/* harmony import */ var _jobs_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-cards */ "OFcY");
/* harmony import */ var _opportunities_cpt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opportunities-cpt */ "VxFp");




/***/ }),

/***/ "pevS":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "RLqH").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "oOVA");
var path = __webpack_require__(/*! ../internals/path */ "dktu");
var bind = __webpack_require__(/*! ../internals/bind-context */ "GUr9");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var has = __webpack_require__(/*! ../internals/has */ "eOcF");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "r4HA":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.parse-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "4vuT");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "sMBO":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "g6v/");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "m/L8").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "wE6v":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "wbIY":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


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
var URLInput = wp.blockEditor.URLInput; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/jobsfeed', {
  title: __('Jobs Block', 'nhsjobs'),
  description: __('Add a feed from the NHS jobs site.', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_0__["default"],
  keywords: [__('Jobs listings list', 'nhsjobs'), __('Feed Vacencies Nursing', 'nhsjobs')],
  attributes: {
    url: {
      type: 'string'
    }
  },
  supports: {
    align: false,
    // allow all alignments can also choose array of allowed alignments eg [ 'left', 'right', 'full' ]
    anchor: true,
    // allow support for an anchor tag
    customClassName: true,
    // allows a custom classname to be added by the user
    className: true,
    // allow default custom classname to be added to your block
    html: false,
    // allow the html to be edited
    inserter: true,
    // set to false if you don't want the block to be insertable
    multiple: false,
    // allows more than one block of that type on the page
    reusable: true // whether block is allowed to be a reusable block

  },
  edit: function edit(props) {
    var url = props.attributes.url,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    return React.createElement("div", {
      className: className
    }, React.createElement("h3", null, __('Add feed from the NHS jobs site in here:', 'nhsjobs')), React.createElement(URLInput, {
      placeholder: __("Add NHS feed URL", "_vt"),
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      },
      value: url
    }), React.createElement("p", null, __('If you leave this field blank the feed will default to: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title'), " "));
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    return null;
  }
}));

/***/ }),

/***/ "xDBR":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "xs3f":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "zk60");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "zBJ4":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var isObject = __webpack_require__(/*! ../internals/is-object */ "hh1v");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "zJQS":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "zk60":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "2oRo");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "kRJp");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9vcHBvcnR1bml0aWVzLWNwdC9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvb3Bwb3J0dW5pdGllcy1jcHQvdGF4U2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvam9icy1jYXJkcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvbWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmxvY2tzL29wcG9ydHVuaXRpZXMtY3B0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvam9icy1ibG9jay9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvam9icy1jYXJkcy9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnRyeS12aXJ0dWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9qb2JzLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyJdLCJuYW1lcyI6WyJpY29uIiwiX18iLCJ3cCIsImkxOG4iLCJ3aXRoU2VsZWN0IiwiZGF0YSIsIlNlbGVjdENvbnRyb2wiLCJjb21wb25lbnRzIiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsImRpc3BhdGNoIiwiTkhTVGF4U2VsZWN0IiwicGFyZW50VGVybXMiLCJwYXJlbnRBdHRyaWJ1dGUiLCJwYXJlbnRBdHRyTmFtZSIsInBhcmVudExhYmVsIiwiY2hpbGRBdHRyaWJ1dGUiLCJjaGlsZFRlcm1zIiwiY2hpbGRBdHRyTmFtZSIsImNoaWxkTGFiZWwiLCJibG9jayIsImN1cnJlbnRQb3N0IiwidGVybSIsInVwZGF0ZVRheG9ub215Iiwic2VsZWN0IiwiYXR0cmlidXRlIiwicmVsYXRpb25zaGlwIiwidXBkYXRlQmxvY2tBdHRyaWJ1dGVzIiwiY2xpZW50SWQiLCJ0ZXJtSWRzIiwiZWRpdEVudGl0eVJlY29yZCIsInR5cGUiLCJpZCIsInBhcmVudFNlbGVjdCIsInNlbGVjdEl0ZW0iLCJsYWJlbCIsInZhbHVlIiwiaW5kZXgiLCJwdXNoIiwibmFtZSIsImNoaWxkU2VsZWN0Iiwib3duUHJvcHMiLCJwYXJlbnRfcXVlcnkiLCJjaGlsZF9xdWVyeSIsImdldEVudGl0eVJlY29yZHMiLCJnZXRTZWxlY3RlZEJsb2NrIiwiZ2V0Q3VycmVudFBvc3QiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsImJsb2NrRWRpdG9yIiwiVVJMSW5wdXRCdXR0b24iLCJSaWNoVGV4dCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwiYXR0cmlidXRlcyIsInVybCIsImRlZmF1bHQiLCJsaW5rVHh0Iiwic3VwcG9ydHMiLCJhbGlnbiIsImFuY2hvciIsImN1c3RvbUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImh0bWwiLCJpbnNlcnRlciIsIm11bHRpcGxlIiwicmV1c2FibGUiLCJlZGl0IiwicHJvcHMiLCJpc1NlbGVjdGVkIiwic2V0QXR0cmlidXRlcyIsIkNhcmRMZW5ndGgiLCJKb2JDYXJkIiwiaSIsInNhdmUiLCJVUkxJbnB1dCIsIkRhdGVUaW1lUGlja2VyIiwiVG9nZ2xlQ29udHJvbCIsImVuZCIsIkRhdGUiLCJzb3VyY2UiLCJtZXRhIiwibG9jYXRpb24iLCJjb3VudHJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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O0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDSkEsYUFBYSxtQkFBTyxDQUFDLGlDQUFxQjtBQUMxQyxrQ0FBa0MsbUJBQU8sQ0FBQyx5REFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL2FkbWluL2pzL2Jsb2Nrcy5lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJwRTlUXCIpO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwiY29uc3QgaWNvbiA9IDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMjBweCcgdmlld0JveD0nMCAwIDEwMCAxMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG5cdDxwYXRoIC8+XG48L3N2Zz47XG5cbmV4cG9ydCBkZWZhdWx0IGljb247IiwidmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMy4zJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgbWFwID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9tYXAnKTtcblxudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgb3duID0gaXQubWFwO1xuICByZXR1cm4gaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUubWFwKSA/IG1hcCA6IG93bjtcbn07XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBTZWxlY3RDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBjb21wb3NlLCB3aXRoU3RhdGUgfSA9IHdwLmNvbXBvc2U7XG5jb25zdCB7IGRpc3BhdGNoIH0gPSB3cC5kYXRhO1xuXG5jb25zdCBOSFNUYXhTZWxlY3QgPSAoIHsgcGFyZW50VGVybXMsIHBhcmVudEF0dHJpYnV0ZSwgcGFyZW50QXR0ck5hbWUsIHBhcmVudExhYmVsLCBjaGlsZEF0dHJpYnV0ZSwgY2hpbGRUZXJtcywgY2hpbGRBdHRyTmFtZSwgY2hpbGRMYWJlbCwgYmxvY2ssIGN1cnJlbnRQb3N0LCB0ZXJtIH0gKSA9PiB7XG5cblxuXG5cdGNvbnN0IHVwZGF0ZVRheG9ub215ID0gKCBzZWxlY3QsIGF0dHJpYnV0ZSwgcmVsYXRpb25zaGlwICk9PntcblxuXHRcdC8vIHVwZGF0ZXMgYmxvY2sgYXR0cmliaXRlc1xuXG5cdFx0ZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7IFsgYXR0cmlidXRlIF06IHNlbGVjdCB9ICk7XG5cblx0XHQvLyBjaGVja3Mgd2hldGhlciB0aGlzIGlzIGEgcGFyZW50IG9yIGNoaWxkIHRheG9ub215XG5cdFx0XG5cdFx0bGV0IHRlcm1JZHMgPSByZWxhdGlvbnNoaXAgPyBbIHBhcnNlSW50KCBzZWxlY3QgKSBdIDogWyBwYXJzZUludCggc2VsZWN0ICksIHBhcnNlSW50KCBwYXJlbnRBdHRyaWJ1dGUgKSBdO1x0XHRcblxuXHRcdGRpc3BhdGNoKCAnY29yZScgKS5lZGl0RW50aXR5UmVjb3JkKCAncG9zdFR5cGUnLCBjdXJyZW50UG9zdC50eXBlLCBjdXJyZW50UG9zdC5pZCwgeyBbIHRlcm0gXTogdGVybUlkcyB9ICk7XG5cblx0fVxuXG5cdGNvbnN0IHBhcmVudFNlbGVjdCA9ICggcGFyZW50VGVybXMgKSA9Pntcblx0XHRcblx0XHRsZXQgc2VsZWN0SXRlbSA9IFsgeyBsYWJlbDogJ1NlbGVjdCAnICsgIHBhcmVudExhYmVsLCB2YWx1ZTogMCB9IF07XG5cblx0XHRwYXJlbnRUZXJtcy5tYXAoKHRlcm0sIGluZGV4KSA9PiB7XG5cdCAgICAgICAgc2VsZWN0SXRlbS5wdXNoKCB7IGxhYmVsOiB0ZXJtLm5hbWUsIHZhbHVlOiB0ZXJtLmlkIH0gKVxuXHQgICAgIH0pXG5cblx0XHRyZXR1cm4gc2VsZWN0SXRlbTtcblx0fVxuXG5cblxuXHRjb25zdCBjaGlsZFNlbGVjdCA9ICggY2hpbGRUZXJtcyApID0+e1xuXG5cdFx0aWYoIGNoaWxkVGVybXMgKXtcblxuXHRcdFx0bGV0IHNlbGVjdEl0ZW0gPSBbIHsgbGFiZWw6ICdTZWxlY3QgJyArICBjaGlsZExhYmVsLCB2YWx1ZTogMCB9IF07XG5cblx0XHRcdGNoaWxkVGVybXMubWFwKCh0ZXJtLCBpbmRleCkgPT4ge1xuXHRcdCAgICAgICAgc2VsZWN0SXRlbS5wdXNoKCB7IGxhYmVsOiB0ZXJtLm5hbWUsIHZhbHVlOiB0ZXJtLmlkIH0gKVxuXHRcdCAgICB9KVxuXG5cdFx0XHRyZXR1cm4gc2VsZWN0SXRlbTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cblx0cmV0dXJuKFxuXG5cdDxkaXY+XG5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHQgICAgICAgIGxhYmVsPXsgcGFyZW50TGFiZWwgfVxuXHQgICAgICAgIHZhbHVlPXsgcGFyZW50QXR0cmlidXRlIH1cblx0ICAgICAgICBvcHRpb25zPXsgXG5cdFx0XHRcdHBhcmVudFNlbGVjdCggcGFyZW50VGVybXMgKVxuXHQgICAgICAgIFx0fVxuXHQgICAgICAgIG9uQ2hhbmdlPXsgKCBzZWxlY3QgKSA9PiB7IHVwZGF0ZVRheG9ub215KCBzZWxlY3QsIHBhcmVudEF0dHJOYW1lLCB0cnVlICkgfSB9XG5cdCAgICAvPlxuXG5cdCAgICA8U2VsZWN0Q29udHJvbFxuXHQgICAgICAgIGxhYmVsPXsgY2hpbGRMYWJlbCB9XG5cdCAgICAgICAgdmFsdWU9eyBjaGlsZEF0dHJpYnV0ZSB9XG5cdCAgICAgICAgb3B0aW9ucz17IFxuXHRcdFx0XHRjaGlsZFNlbGVjdCggY2hpbGRUZXJtcyApXG5cdCAgICAgICAgfVxuXHQgICAgICAgIG9uQ2hhbmdlPXsgKCBzZWxlY3QgKSA9PiB7IHVwZGF0ZVRheG9ub215KCBzZWxlY3QsIGNoaWxkQXR0ck5hbWUsIGZhbHNlICkgfSB9XG5cdCAgICAvPlxuXG5cblx0PC9kaXY+XG5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCAoIHNlbGVjdCwgb3duUHJvcHMgKSA9PiB7IFxuXG5cdFx0bGV0IHBhcmVudF9xdWVyeSA9IHtcblx0XHRcdCdwYXJlbnQnICAgICA6IDAsXG5cdFx0XHQnaGlkZV9lbXB0eScgOiBmYWxzZSxcblx0XHRcdCdwZXJfcGFnZScgICA6IC0xXG5cdFx0fVxuXG5cdFx0bGV0IGNoaWxkX3F1ZXJ5ID0ge1xuXHRcdFx0J3BhcmVudCcgICAgIDogb3duUHJvcHMucGFyZW50QXR0cmlidXRlLFxuXHRcdFx0J2hpZGVfZW1wdHknIDogZmFsc2UsXG5cdFx0XHQncGVyX3BhZ2UnICAgOiAtMVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJlbnRUZXJtczogc2VsZWN0KCdjb3JlJykuZ2V0RW50aXR5UmVjb3JkcygndGF4b25vbXknLCAnbmhzX2xvY2F0aW9uJywgcGFyZW50X3F1ZXJ5ICksXG5cdFx0XHRjaGlsZFRlcm1zOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCd0YXhvbm9teScsICduaHNfbG9jYXRpb24nLCBjaGlsZF9xdWVyeSApLFxuXHRcdFx0YmxvY2s6IHNlbGVjdChcImNvcmUvZWRpdG9yXCIpLmdldFNlbGVjdGVkQmxvY2soKSxcblx0XHRcdGN1cnJlbnRQb3N0OiBzZWxlY3QoICdjb3JlL2VkaXRvcicgKS5nZXRDdXJyZW50UG9zdCgpLFxuXHRcdFx0b3duUHJvcHM6IG93blByb3BzXG5cdFx0fVxufSkoTkhTVGF4U2VsZWN0KTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciBuYXRpdmVQYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiBuYXRpdmVQYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiBuYXRpdmVQYXJzZUludDtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgc3RvcmUgPSBzaGFyZWQoJ3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIFN5bWJvbFtuYW1lXVxuICAgIHx8IChOQVRJVkVfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvbWFwXCIpOyIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIi8vIEJsb2NrIGRlcGVuZGFuY2llc1xuXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nO1xuXG5cbi8vIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBcblx0VVJMSW5wdXRCdXR0b24sXG5cdFJpY2hUZXh0XG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbi8vIFJlZ2lzdGVyIEJsb2NrXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFxuXHQnbmhzam9icy9qb2JzY2FyZHMnLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCdKb2JzIENhcmRzJywgJ25oc2pvYnMnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCdBZGRzIHRocmVlIG9mIHRoZSBsYXRlc3Qgam9icycsICduaHNqb2JzJyApLFxuXHRcdGNhdGVnb3J5OiAnbmhzYmxvY2tzJyxcblx0XHRpY29uOiBpY29uLFxuXHRcdGtleXdvcmRzOiBbXG5cdFx0XHRfXyggJ0pvYnMgbGlzdGluZ3MgbGlzdCcsICduaHNqb2JzJyApLFxuXHRcdFx0X18oICdGZWVkIFZhY2VuY2llcyBOdXJzaW5nJywgJ25oc2pvYnMnICksXG5cdFx0XSxcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR1cmw6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogJ0xhdGVzdCBWYWNhbmNpZXMnXG5cdFx0XHR9LFxuXHRcdFx0bGlua1R4dDoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogJ1ZpZXcgYWxsIFZhY2FuY2llcydcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN1cHBvcnRzOiB7XG5cdFx0XHRhbGlnbjogZmFsc2UsIC8vIGFsbG93IGFsbCBhbGlnbm1lbnRzIGNhbiBhbHNvIGNob29zZSBhcnJheSBvZiBhbGxvd2VkIGFsaWdubWVudHMgZWcgWyAnbGVmdCcsICdyaWdodCcsICdmdWxsJyBdXG5cdFx0XHRhbmNob3I6IHRydWUsIC8vIGFsbG93IHN1cHBvcnQgZm9yIGFuIGFuY2hvciB0YWdcblx0XHRcdGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3dzIGEgY3VzdG9tIGNsYXNzbmFtZSB0byBiZSBhZGRlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2xhc3NOYW1lOiB0cnVlLCAvLyBhbGxvdyBkZWZhdWx0IGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8geW91ciBibG9ja1xuXHRcdFx0aHRtbDogZmFsc2UsIC8vIGFsbG93IHRoZSBodG1sIHRvIGJlIGVkaXRlZFxuXHRcdFx0aW5zZXJ0ZXI6IHRydWUsIC8vIHNldCB0byBmYWxzZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgYmxvY2sgdG8gYmUgaW5zZXJ0YWJsZVxuXHRcdFx0bXVsdGlwbGU6IHRydWUsIC8vIGFsbG93cyBtb3JlIHRoYW4gb25lIGJsb2NrIG9mIHRoYXQgdHlwZSBvbiB0aGUgcGFnZVxuXHRcdFx0cmV1c2FibGU6IHRydWUsIC8vIHdoZXRoZXIgYmxvY2sgaXMgYWxsb3dlZCB0byBiZSBhIHJldXNhYmxlIGJsb2NrXG5cdFx0fSxcblx0XHRlZGl0OiBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgdXJsLCB0aXRsZSwgbGlua1R4dCB9LCBjbGFzc05hbWUsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRcdFx0Y29uc3QgQ2FyZExlbmd0aCA9IFsxLCAyLCAzXTtcblxuXHRcdFx0ZnVuY3Rpb24gSm9iQ2FyZCggcHJvcHMgKSB7XG5cdFx0XHQgIFx0cmV0dXJuKFxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5oc3VrLWdyaWQtY29sdW1uLW9uZS10aGlyZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmhzdWstcHJvbW9fX2xpbmstd3JhcHBlclwiPlxuXHQgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmhzdWstcHJvbW9fX2NvbnRlbnRcIj5cblx0ICAgICAgICBcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm5oc3VrLXByb21vX19oZWFkaW5nXCI+Sm9iIFRpdGxlIHtwcm9wcy5pIH08L2gzPlxuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkbCBjbGFzc05hbWU9XCJuaHN1ay1zdW1tYXJ5LWxpc3RcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaHN1ay1zdW1tYXJ5LWxpc3RfX3Jvd1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cIm5oc3VrLXN1bW1hcnktbGlzdF9fa2V5XCI+TG9jYXRpb248L2R0PlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm5oc3VrLXN1bW1hcnktbGlzdF9fdmFsdWVcIj5Kb2IgTG9jYXRpb248L2RkPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaHN1ay1zdW1tYXJ5LWxpc3RfX3Jvd1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cIm5oc3VrLXN1bW1hcnktbGlzdF9fa2V5XCI+U2FsYXJ5PC9kdD5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzc05hbWU9XCJuaHN1ay1zdW1tYXJ5LWxpc3RfX3ZhbHVlXCI+Sm9iIFNhbGFyeTwvZGQ+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2RsPlxuXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmhzdWstYWN0aW9uLWxpbmtcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5oc3VrLWFjdGlvbi1saW5rX19saW5rXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJuaHN1ay1pY29uIG5oc3VrLWljb25fX2Fycm93LXJpZ2h0LWNpcmNsZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmExMCAxMCAwIDAgMC05Ljk1IDloMTEuNjRMOS43NCA3LjA1YTEgMSAwIDAgMSAxLjQxLTEuNDFsNS42NiA1LjY1YTEgMSAwIDAgMSAwIDEuNDJsLTUuNjYgNS42NWExIDEgMCAwIDEtMS40MSAwIDEgMSAwIDAgMSAwLTEuNDFMMTMuNjkgMTNIMi4wNUExMCAxMCAwIDEgMCAxMiAyelwiPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuaHN1ay1hY3Rpb24tbGlua19fdGV4dFwiPlZpZXcgVmFjYW5jeTwvc3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgXHQ8L2E+XG5cdFx0ICAgICAgICBcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJuaHN1ay1ncmlkLXJvd1wiPlxuICAgIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuaHN1ay13aWR0aC1jb250YWluZXJcIj5cbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuaHN1ay1ncmlkX19pdGVtIG5oc3VrLWdyaWQtY29sdW1uLWZ1bGxcIj5cbiAgICBcdFx0XHRcdFx0PFJpY2hUZXh0XG5cdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJoMlwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgdGl0bGUgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggdGl0bGUgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IHRpdGxlIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5oc3VrLWdyaWQtcm93IG5oc3VrLXByb21vLWdyb3VwIGhvbWVwYWdlLXZhY2FuY2llc1wiPlxuXHRcdCAgICAgICAgICAgICAgICBcdHtcblx0XHRcdFx0XHRcdFx0XHRDYXJkTGVuZ3RoLm1hcCgoaSwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0ICAgICAgICByZXR1cm4gPEpvYkNhcmQga2V5PXsgaW5kZXggfSAvPlxuXHRcdFx0XHRcdFx0XHQgICAgICB9KVxuXHRcdCAgICAgICAgICAgICAgICBcdH1cblx0XHQgICAgICAgICAgICAgICAgICAgIFxuXHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHRcdCAgICAgICAgICAgICAgICA8VVJMSW5wdXRCdXR0b25cblx0XHRcdFx0XHRcdFx0dXJsPXsgdXJsIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHVybCApID0+IHNldEF0dHJpYnV0ZXMoIHsgdXJsIH0gKSB9XG5cdFx0XHRcdFx0XHQvPlxuXG5cdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmhzdWstYWN0aW9uLWxpbmsgdGV4dC1jZW50ZXJcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5oc3VrLWFjdGlvbi1saW5rX19saW5rXCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJuaHN1ay1pY29uIG5oc3VrLWljb25fX2Fycm93LXJpZ2h0LWNpcmNsZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIj48L3BhdGg+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMmExMCAxMCAwIDAgMC05Ljk1IDloMTEuNjRMOS43NCA3LjA1YTEgMSAwIDAgMSAxLjQxLTEuNDFsNS42NiA1LjY1YTEgMSAwIDAgMSAwIDEuNDJsLTUuNjYgNS42NWExIDEgMCAwIDEtMS40MSAwIDEgMSAwIDAgMSAwLTEuNDFMMTMuNjkgMTNIMi4wNUExMCAxMCAwIDEgMCAxMiAyelwiPjwvcGF0aD5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8UmljaFRleHRcblx0XHRcdFx0XHRcdFx0XHRcdHRhZ05hbWU9XCJzcGFuXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5oc3VrLWFjdGlvbi1saW5rX190ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgbGlua1R4dCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbGlua1R4dCApID0+IHNldEF0dHJpYnV0ZXMoIHsgbGlua1R4dCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XG5cdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdCAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRzYXZlOiBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9LFxuXG4pO1xuXG5cbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuYXJyYXkubWFwJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ0FycmF5JykubWFwO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMy4zJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIvLyBCbG9jayBkZXBlbmRhbmNpZXNcblxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uJztcbmltcG9ydCBOSFNUYXhTZWxlY3QgZnJvbSAnLi90YXhTZWxlY3QnXG5cblxuLy8gSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IFVSTElucHV0IH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgRGF0ZVRpbWVQaWNrZXIsIFRvZ2dsZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIFJlZ2lzdGVyIEJsb2NrXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFxuXHQnbmhzam9icy9vcHBvcnR1bml0ZXMnLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCdPcHBvcnR1bml0ZXMnLCAnbmhzam9icycgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oJ0FkZCBhIGZlZWQgZnJvbSB0aGUgTkhTIGpvYnMgc2l0ZS4nLCAnbmhzam9icycgKSxcblx0XHRjYXRlZ29yeTogJ25oc2Jsb2NrcycsXG5cdFx0aWNvbjogaWNvbixcblx0XHRrZXl3b3JkczogW1xuXHRcdFx0X18oICdKb2JzIGxpc3RpbmdzIGxpc3QnLCAnbmhzam9icycgKSxcblx0XHRcdF9fKCAnRmVlZCBWYWNlbmNpZXMgTnVyc2luZycsICduaHNqb2JzJyApLFxuXHRcdF0sXG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dXJsOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0ZW5kOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRkZWZhdWx0OiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdFx0bWV0YTogJ25oc2pvYnNfZW5kJyxcblx0XHRcdH0sXG5cdFx0XHRsb2NhdGlvbjoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdGNvdW50cnk6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN1cHBvcnRzOiB7XG5cdFx0XHRhbGlnbjogZmFsc2UsIC8vIGFsbG93IGFsbCBhbGlnbm1lbnRzIGNhbiBhbHNvIGNob29zZSBhcnJheSBvZiBhbGxvd2VkIGFsaWdubWVudHMgZWcgWyAnbGVmdCcsICdyaWdodCcsICdmdWxsJyBdXG5cdFx0XHRhbmNob3I6IHRydWUsIC8vIGFsbG93IHN1cHBvcnQgZm9yIGFuIGFuY2hvciB0YWdcblx0XHRcdGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3dzIGEgY3VzdG9tIGNsYXNzbmFtZSB0byBiZSBhZGRlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2xhc3NOYW1lOiB0cnVlLCAvLyBhbGxvdyBkZWZhdWx0IGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8geW91ciBibG9ja1xuXHRcdFx0aHRtbDogZmFsc2UsIC8vIGFsbG93IHRoZSBodG1sIHRvIGJlIGVkaXRlZFxuXHRcdFx0aW5zZXJ0ZXI6IHRydWUsIC8vIHNldCB0byBmYWxzZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgYmxvY2sgdG8gYmUgaW5zZXJ0YWJsZVxuXHRcdFx0bXVsdGlwbGU6IGZhbHNlLCAvLyBhbGxvd3MgbW9yZSB0aGFuIG9uZSBibG9jayBvZiB0aGF0IHR5cGUgb24gdGhlIHBhZ2Vcblx0XHRcdHJldXNhYmxlOiB0cnVlLCAvLyB3aGV0aGVyIGJsb2NrIGlzIGFsbG93ZWQgdG8gYmUgYSByZXVzYWJsZSBibG9ja1xuXHRcdH0sXG5cdFx0ZWRpdDogcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IGVuZCwgbG9jYXRpb24sIGNvdW50cnkgfSwgY2xhc3NOYW1lLCBpc1NlbGVjdGVkLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0gPlxuXHRcdFx0XHRcdDxEYXRlVGltZVBpY2tlclxuXHRcdFx0ICAgICAgICAgICAgY3VycmVudERhdGU9eyBlbmQgfVxuXHRcdFx0ICAgICAgICAgICAgb25DaGFuZ2U9eyAoIGVuZCApID0+IHNldEF0dHJpYnV0ZXMoIHsgZW5kIH0gKSB9XG5cdFx0XHQgICAgICAgICAgICBpczEySG91cj17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8TkhTVGF4U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudEF0dHJpYnV0ZT17IGxvY2F0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgXHRjaGlsZEF0dHJpYnV0ZT17IGNvdW50cnkgfVxuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudEF0dHJOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgXHRjaGlsZEF0dHJOYW1lPSdjb3VudHJ5J1xuICAgICAgICAgICAgICAgICAgICBcdHRlcm09J25oc19sb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgXHRwYXJlbnRMYWJlbD0nQ29udGluZW50J1xuICAgICAgICAgICAgICAgICAgICBcdGNoaWxkTGFiZWw9J0NvdW50cnknXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHsgY29uc29sZS5sb2coIGxvY2F0aW9uLCBjb3VudHJ5ICkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRzYXZlOiBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9LFxuXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvbWFwJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcpLnNwbGl0KCd0b1N0cmluZycpO1xuXG5zaGFyZWQoJ2luc3BlY3RTb3VyY2UnLCBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG59KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnBhcnNlLWludCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGgucGFyc2VJbnQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcbiIsImNvbnN0IGljb24gPSA8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzIwcHgnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuXHQ8cGF0aCAvPlxuPC9zdmc+O1xuXG5leHBvcnQgZGVmYXVsdCBpY29uOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vZXMvcGFyc2UtaW50Jyk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwiY29uc3QgaWNvbiA9IDxzdmcgd2lkdGg9JzIwcHgnIGhlaWdodD0nMjBweCcgdmlld0JveD0nMCAwIDEwMCAxMDAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+XG5cdDxwYXRoIC8+XG48L3N2Zz47XG5cbmV4cG9ydCBkZWZhdWx0IGljb247IiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvcGFyc2UtaW50XCIpOyIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eScpO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG52YXIgT2JqZWN0ID0gcGF0aC5PYmplY3Q7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eS5zaGFtKSBkZWZpbmVQcm9wZXJ0eS5zaGFtID0gdHJ1ZTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUikge1xuICByZXR1cm4gcGF0aFtDT05TVFJVQ1RPUiArICdQcm90b3R5cGUnXTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwiaW1wb3J0IFwiLi9qb2JzLWJsb2NrXCI7XG5cbmltcG9ydCBcIi4vam9icy1jYXJkc1wiO1xuXG5pbXBvcnQgXCIuL29wcG9ydHVuaXRpZXMtY3B0XCI7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgd3JhcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE5hdGl2ZUNvbnN0cnVjdG9yKSB7XG4gIHZhciBXcmFwcGVyID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5hdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIpO1xuICAgICAgfSByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIsIGMpO1xuICAgIH0gcmV0dXJuIE5hdGl2ZUNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICByZXR1cm4gV3JhcHBlcjtcbn07XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgUFJPVE8gPSBvcHRpb25zLnByb3RvO1xuXG4gIHZhciBuYXRpdmVTb3VyY2UgPSBHTE9CQUwgPyBnbG9iYWwgOiBTVEFUSUMgPyBnbG9iYWxbVEFSR0VUXSA6IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuXG4gIHZhciB0YXJnZXQgPSBHTE9CQUwgPyBwYXRoIDogcGF0aFtUQVJHRVRdIHx8IChwYXRoW1RBUkdFVF0gPSB7fSk7XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXG4gIHZhciBGT1JDRUQsIFVTRV9OQVRJVkUsIFZJUlRVQUxfUFJPVE9UWVBFO1xuICB2YXIga2V5LCBzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHksIG5hdGl2ZVByb3BlcnR5LCByZXN1bHRQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblxuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIFVTRV9OQVRJVkUgPSAhRk9SQ0VEICYmIG5hdGl2ZVNvdXJjZSAmJiBoYXMobmF0aXZlU291cmNlLCBrZXkpO1xuXG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFKSBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVTb3VyY2UsIGtleSk7XG4gICAgICBuYXRpdmVQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgbmF0aXZlUHJvcGVydHkgPSBuYXRpdmVTb3VyY2Vba2V5XTtcblxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgaW1wbGVtZW50YXRpb25cbiAgICBzb3VyY2VQcm9wZXJ0eSA9IChVU0VfTkFUSVZFICYmIG5hdGl2ZVByb3BlcnR5KSA/IG5hdGl2ZVByb3BlcnR5IDogc291cmNlW2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSAmJiB0eXBlb2YgdGFyZ2V0UHJvcGVydHkgPT09IHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSkgY29udGludWU7XG5cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGlmIChvcHRpb25zLmJpbmQgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSBiaW5kKHNvdXJjZVByb3BlcnR5LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ3MgaW4gdGhpcyB2ZXJzaW9uXG4gICAgZWxzZSBpZiAob3B0aW9ucy53cmFwICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gd3JhcENvbnN0cnVjdG9yKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICBlbHNlIGlmIChQUk9UTyAmJiB0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gJ2Z1bmN0aW9uJykgcmVzdWx0UHJvcGVydHkgPSBiaW5kKEZ1bmN0aW9uLmNhbGwsIHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBkZWZhdWx0IGNhc2VcbiAgICBlbHNlIHJlc3VsdFByb3BlcnR5ID0gc291cmNlUHJvcGVydHk7XG5cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAoc291cmNlUHJvcGVydHkgJiYgc291cmNlUHJvcGVydHkuc2hhbSkgfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocmVzdWx0UHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGFyZ2V0W2tleV0gPSByZXN1bHRQcm9wZXJ0eTtcblxuICAgIGlmIChQUk9UTykge1xuICAgICAgVklSVFVBTF9QUk9UT1RZUEUgPSBUQVJHRVQgKyAnUHJvdG90eXBlJztcbiAgICAgIGlmICghaGFzKHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUsIHt9KTtcbiAgICAgIH1cbiAgICAgIC8vIGV4cG9ydCB2aXJ0dWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBwYXRoW1ZJUlRVQUxfUFJPVE9UWVBFXVtrZXldID0gc291cmNlUHJvcGVydHk7XG4gICAgICAvLyBleHBvcnQgcmVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgaWYgKG9wdGlvbnMucmVhbCAmJiB0YXJnZXRQcm90b3R5cGUgJiYgIXRhcmdldFByb3RvdHlwZVtrZXldKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXRQcm90b3R5cGUsIGtleSwgc291cmNlUHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gQmxvY2sgZGVwZW5kYW5jaWVzXG5cbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7XG5cblxuLy8gSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IFVSTElucHV0IH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuLy8gUmVnaXN0ZXIgQmxvY2tcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoXG5cdCduaHNqb2JzL2pvYnNmZWVkJyxcblx0e1xuXHRcdHRpdGxlOiBfXygnSm9icyBCbG9jaycsICduaHNqb2JzJyApLFxuXHRcdGRlc2NyaXB0aW9uOiBfXygnQWRkIGEgZmVlZCBmcm9tIHRoZSBOSFMgam9icyBzaXRlLicsICduaHNqb2JzJyApLFxuXHRcdGNhdGVnb3J5OiAnbmhzYmxvY2tzJyxcblx0XHRpY29uOiBpY29uLFxuXHRcdGtleXdvcmRzOiBbXG5cdFx0XHRfXyggJ0pvYnMgbGlzdGluZ3MgbGlzdCcsICduaHNqb2JzJyApLFxuXHRcdFx0X18oICdGZWVkIFZhY2VuY2llcyBOdXJzaW5nJywgJ25oc2pvYnMnICksXG5cdFx0XSxcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR1cmw6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN1cHBvcnRzOiB7XG5cdFx0XHRhbGlnbjogZmFsc2UsIC8vIGFsbG93IGFsbCBhbGlnbm1lbnRzIGNhbiBhbHNvIGNob29zZSBhcnJheSBvZiBhbGxvd2VkIGFsaWdubWVudHMgZWcgWyAnbGVmdCcsICdyaWdodCcsICdmdWxsJyBdXG5cdFx0XHRhbmNob3I6IHRydWUsIC8vIGFsbG93IHN1cHBvcnQgZm9yIGFuIGFuY2hvciB0YWdcblx0XHRcdGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3dzIGEgY3VzdG9tIGNsYXNzbmFtZSB0byBiZSBhZGRlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2xhc3NOYW1lOiB0cnVlLCAvLyBhbGxvdyBkZWZhdWx0IGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8geW91ciBibG9ja1xuXHRcdFx0aHRtbDogZmFsc2UsIC8vIGFsbG93IHRoZSBodG1sIHRvIGJlIGVkaXRlZFxuXHRcdFx0aW5zZXJ0ZXI6IHRydWUsIC8vIHNldCB0byBmYWxzZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgYmxvY2sgdG8gYmUgaW5zZXJ0YWJsZVxuXHRcdFx0bXVsdGlwbGU6IGZhbHNlLCAvLyBhbGxvd3MgbW9yZSB0aGFuIG9uZSBibG9jayBvZiB0aGF0IHR5cGUgb24gdGhlIHBhZ2Vcblx0XHRcdHJldXNhYmxlOiB0cnVlLCAvLyB3aGV0aGVyIGJsb2NrIGlzIGFsbG93ZWQgdG8gYmUgYSByZXVzYWJsZSBibG9ja1xuXHRcdH0sXG5cdFx0ZWRpdDogcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzOiB7IHVybCB9LCBjbGFzc05hbWUsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSA+XG5cdFx0XHRcdFx0PGgzPnsgX18oJ0FkZCBmZWVkIGZyb20gdGhlIE5IUyBqb2JzIHNpdGUgaW4gaGVyZTonLCAnbmhzam9icycgKSB9PC9oMz5cblx0XHRcdFx0XHQ8VVJMSW5wdXRcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXsgX18oIFwiQWRkIE5IUyBmZWVkIFVSTFwiLCBcIl92dFwiICkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB1cmwgPT4gc2V0QXR0cmlidXRlcyggeyB1cmwgfSApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgdXJsIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxwPnsgX18oJ0lmIHlvdSBsZWF2ZSB0aGlzIGZpZWxkIGJsYW5rIHRoZSBmZWVkIHdpbGwgZGVmYXVsdCB0bzogaHR0cHM6Ly93d3cuam9icy5uaHMudWsvc2VhcmNoX3htbD9rZXl3b3JkPW51cnNpbmclMjBhc3NvY2lhdGUmZmllbGQ9dGl0bGUnKSB9IDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0c2F2ZTogcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fSxcblxuKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=