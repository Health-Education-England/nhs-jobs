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

/***/ "18l4":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

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

/***/ "1mbr":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),

/***/ "2fOL":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "b42z");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "C3ug");

module.exports = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


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

  // console.log( parentAttrName, childTerms );
  var updateTaxonomy = function updateTaxonomy(select, attribute, relationship) {
    // updates block attribites
    dispatch('core/block-editor').updateBlockAttributes(block.clientId, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, attribute, select)); // checks whether this is a parent or child taxonomy
    // If it is a child category make sure both parent and child category are updated to be selected

    var termIds = relationship ? [_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(select)] : [_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(select), _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(parentAttribute)];
    dispatch('core').editEntityRecord('postType', currentPost.type, currentPost.id, _babel_runtime_corejs3_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({}, term, termIds));
  };

  var parentSelect = function parentSelect(parentTerms) {
    if (parentTerms) {
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
    } else {
      return [];
    }
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
  }), childSelect && React.createElement(SelectControl, {
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
  var childTerms = ownProps.childAttrName ? select('core').getEntityRecords('taxonomy', ownProps.term, child_query) : false;
  return {
    parentTerms: select('core').getEntityRecords('taxonomy', ownProps.term, parent_query),
    childTerms: childTerms,
    block: select("core/block-editor").getSelectedBlock(),
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

/***/ "5RnW":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var isArray = __webpack_require__(/*! ../internals/is-array */ "YiBS");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "68PV":
/*!**********************************!*\
  !*** ./assets/blocks/style.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7GIe":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "b42z");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "L5f0");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "7b0v":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "mIMY");

module.exports = getBuiltIn('document', 'documentElement');


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

/***/ "9XUY":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "u4PT").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "SJYm");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "LGyv");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "KHTo");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9fuf":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "Bvq2");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


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

/***/ "C3ug":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "j5XY");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
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

/***/ "ExbJ":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ "nNNY");

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

/***/ "FvEI":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "UUWy");
__webpack_require__(/*! ../modules/es.string.iterator */ "Pkew");

module.exports = __webpack_require__(/*! ../internals/get-iterator */ "2fOL");


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

/***/ "HAoi":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ "j5XY");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


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

/***/ "JUWB":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/entries.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.entries */ "yBKE");
var path = __webpack_require__(/*! ../../internals/path */ "dktu");

module.exports = path.Object.entries;


/***/ }),

/***/ "KHTo":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "QYBB").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var has = __webpack_require__(/*! ../internals/has */ "eOcF");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "HAoi");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var METHOD_REQUIRED = toString !== ({}).toString;

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && METHOD_REQUIRED) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),

/***/ "L1rz":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "lulC");
var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var objectHas = __webpack_require__(/*! ../internals/has */ "eOcF");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "su3n");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "bpon");

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

/***/ "L5f0":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "39uu");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


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

/***/ "LcC2":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/is-iterable */ "WIy9");

/***/ }),

/***/ "MnKc":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/object/entries */ "JUWB");


/***/ }),

/***/ "OFcY":
/*!*******************************************!*\
  !*** ./assets/blocks/jobs-cards/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ "zLi2");
/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/entries */ "i5y0");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "FLGM");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "jcY6");



// Block dependancies
 // Internal block libraries

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    URLInputButton = _wp$blockEditor.URLInputButton,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/jobscards', {
  title: __('Jobs Cards', 'nhsjobs'),
  description: __('Adds three of the latest jobs', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    },
    type: {
      type: 'string',
      default: 'jobs'
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
        type = _props$attributes.type,
        setAttributes = props.setAttributes;
    var CardLength = [{
      title: 'Job Title',
      details: {
        Location: 'Job Location',
        Salary: 'Job Salary'
      }
    }, {
      title: 'Job Title',
      details: {
        Location: 'Job Location',
        Salary: 'Job Salary'
      }
    }, {
      title: 'Job Title',
      details: {
        Location: 'Job Location',
        Salary: 'Job Salary'
      }
    }];

    function JobCard(card) {
      var _context;

      return React.createElement("div", {
        className: "nhsuk-grid-column-one-third"
      }, React.createElement("a", {
        className: "nhsuk-promo__link-wrapper"
      }, React.createElement("div", {
        className: "nhsuk-promo__content"
      }, React.createElement("h3", {
        className: "nhsuk-promo__heading"
      }, card.job.title), React.createElement("dl", {
        className: "nhsuk-summary-list"
      }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = _babel_runtime_corejs3_core_js_stable_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(card.job.details)).call(_context, function (_ref, key) {
        var _ref2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            name = _ref2[0],
            title = _ref2[1];

        return React.createElement("div", {
          key: key,
          className: "nhsuk-summary-list__row"
        }, React.createElement("dt", {
          className: "nhsuk-summary-list__key"
        }, title), React.createElement("dd", {
          className: "nhsuk-summary-list__value"
        }, name));
      })), React.createElement("div", {
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
      }, card.btn))))));
    }

    return [React.createElement(InspectorControls, null, React.createElement(PanelBody, null, React.createElement(PanelRow, null, React.createElement(SelectControl, {
      label: "Size",
      value: type,
      options: [{
        label: 'NHS Jobs Feed',
        value: 'jobs'
      }, {
        label: 'NHS Volunteering Feed',
        value: 'opportunity'
      }],
      onChange: function onChange(type) {
        setAttributes({
          type: type
        });
      }
    })))), React.createElement("section", {
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
    }, _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(CardLength).call(CardLength, function (job, index) {
      return React.createElement(JobCard, {
        key: index,
        job: job,
        btn: "View Vacancy"
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
    }))))))];
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

/***/ "Pkew":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "y9AQ").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "L1rz");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "QFZC");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
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

/***/ "QFZC":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "9XUY");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "V3kF");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "7GIe");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "KHTo");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var redefine = __webpack_require__(/*! ../internals/redefine */ "1mbr");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "cEKj");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "u4PT");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
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

/***/ "RQhY":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "FWHo");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "S/P8":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "oBZR");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "pCEo");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "cEPT").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "SJYm":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "b42z");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "wjB2");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "nleh");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "bpon");
var html = __webpack_require__(/*! ../internals/html */ "7b0v");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "ejc7");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "su3n");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


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

/***/ "UUWy":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es.array.iterator */ "kQON");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "eKLf");
var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),

/***/ "V3kF":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "eOcF");
var toObject = __webpack_require__(/*! ../internals/to-object */ "T/97");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "su3n");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "9fuf");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
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
    },
    speciality: {
      type: 'string'
    },
    partners: {
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
        speciality = _props$attributes.speciality,
        partners = _props$attributes.partners,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    return React.createElement("div", {
      className: className
    }, React.createElement("h2", null, __('Post Meta', 'nhsjobs')), React.createElement("h3", null, __('End Date', 'nhsjobs')), React.createElement(DateTimePicker, {
      currentDate: end,
      onChange: function onChange(end) {
        return setAttributes({
          end: end
        });
      },
      is12Hour: true
    }), React.createElement("h3", null, __('Location', 'nhsjobs')), React.createElement(_taxSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      parentAttribute: location,
      childAttribute: country,
      parentAttrName: "location",
      childAttrName: "country",
      term: "nhs_location",
      parentLabel: "Continent",
      childLabel: "Country"
    }), React.createElement("h3", null, __('Speciality', 'nhsjobs')), React.createElement(_taxSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      parentAttribute: speciality,
      childAttrName: false,
      parentAttrName: "speciality",
      term: "nhs_speciality",
      parentLabel: "Speciality"
    }), React.createElement("h3", null, __('Partners', 'nhsjobs')), React.createElement(_taxSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      parentAttribute: partners,
      childAttrName: false,
      parentAttrName: "partners",
      term: "nhs_partners",
      parentLabel: "Partners"
    }));
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    return null;
  }
}));

/***/ }),

/***/ "WIy9":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom-collections.iterator */ "UUWy");
__webpack_require__(/*! ../modules/es.string.iterator */ "Pkew");

module.exports = __webpack_require__(/*! ../internals/is-iterable */ "WdfZ");


/***/ }),

/***/ "WdfZ":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-iterable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "j5XY");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "Wrk+":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/is-array.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.array.is-array */ "5RnW");
var path = __webpack_require__(/*! ../../internals/path */ "dktu");

module.exports = path.Array.isArray;


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

/***/ "Y4Ys":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "pCEo");
var toLength = __webpack_require__(/*! ../internals/to-length */ "ZyXh");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "RQhY");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
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

/***/ "bpon":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


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

/***/ "cqiv":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "ExbJ");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

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

/***/ "dGO/":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


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

/***/ "eKLf":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


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

/***/ "i5y0":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/object/entries */ "MnKc");

/***/ }),

/***/ "iYz8":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ "FvEI");

/***/ }),

/***/ "j5XY":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "/EgQ");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
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

/***/ "kQON":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "pCEo");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "xE4W");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "dGO/");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "L1rz");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "QFZC");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


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

/***/ "lulC":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "OsYe");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "q4US");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


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

/***/ "mIMY":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "dktu");
var global = __webpack_require__(/*! ../internals/global */ "OsYe");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
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

/***/ "nNNY":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/is-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../../es/array/is-array */ "Wrk+");


/***/ }),

/***/ "nleh":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


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

/***/ "oBZR":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "syO3");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "nleh");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "68PV");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jobs_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jobs-block */ "xCW8");
/* harmony import */ var _jobs_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobs-cards */ "OFcY");
/* harmony import */ var _opportunities_cpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opportunities-cpt */ "VxFp");





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

/***/ "q4US":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-to-string.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "1lkh");

module.exports = shared('native-function-to-string', Function.toString);


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

/***/ "su3n":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "1lkh");
var uid = __webpack_require__(/*! ../internals/uid */ "PoCt");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "syO3":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "eOcF");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "pCEo");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "Y4Ys").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "bpon");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "u4PT":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "V3kF");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "AnMC");
var has = __webpack_require__(/*! ../internals/has */ "eOcF");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "A2Ma");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "cEKj");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


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

/***/ "wjB2":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "wbIY");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "QYBB");
var anObject = __webpack_require__(/*! ../internals/an-object */ "b42z");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "oBZR");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


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
var _wp$blockEditor = wp.blockEditor,
    URLInput = _wp$blockEditor.URLInput,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl;
var Fragment = wp.element.Fragment; // Register Block

/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('nhsjobs/jobsfeed', {
  title: __('Jobs Block', 'nhsjobs'),
  description: __('Add a feed from the NHS jobs site.', 'nhsjobs'),
  category: 'nhsblocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_0__["default"],
  keywords: [__('Jobs listings list', 'nhsjobs'), __('Feed Vacencies Nursing', 'nhsjobs')],
  attributes: {
    url: {
      type: 'string'
    },
    type: {
      type: 'string',
      default: 'jobs'
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
        url = _props$attributes.url,
        type = _props$attributes.type,
        className = props.className,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes;
    return [React.createElement(InspectorControls, null, React.createElement(PanelBody, {
      title: __('Feed Options', 'nhsjobs')
    }, React.createElement(PanelRow, null, React.createElement(SelectControl, {
      label: "Size",
      value: type,
      options: [{
        label: 'NHS Jobs Feed',
        value: 'jobs'
      }, {
        label: 'NHS Volunteering Feed',
        value: 'opportunity'
      }],
      onChange: function onChange(type) {
        setAttributes({
          type: type
        });
      }
    })))), React.createElement("div", {
      className: className
    }, type == 'jobs' ? React.createElement(Fragment, null, React.createElement("h3", null, __('NHS Jobs Feed:', 'nhsjobs')), React.createElement(URLInput, {
      placeholder: __("Add NHS feed URL", "_vt"),
      onChange: function onChange(url) {
        return setAttributes({
          url: url
        });
      },
      value: url
    }), React.createElement("p", null, __('If you leave this field blank the feed will default to: https://www.jobs.nhs.uk/search_xml?keyword=nursing%20associate&field=title'), " ")) : React.createElement(Fragment, null, React.createElement("h3", null, __('NHS Oppertunities Feed:', 'nhsjobs')), React.createElement("p", null, __('Oppertunities feed imported from this website'), " ")))];
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

/***/ "xE4W":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


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

/***/ "y9AQ":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "FWHo");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "GHVm");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "yBKE":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.entries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "pevS");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "S/P8").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "yGg+":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "iYz8");

var _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ "LcC2");

function _iterableToArrayLimit(arr, i) {
  if (!(_isIterable(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

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

/***/ "zLi2":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "cqiv");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "yGg+");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "18l4");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9vcHBvcnR1bml0aWVzLWNwdC9pY29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmxvY2tzL29wcG9ydHVuaXRpZXMtY3B0L3RheFNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5LmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9jb3JlLWpzLXN0YWJsZS9pbnN0YW5jZS9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYmluZC1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9qb2JzLWNhcmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ibG9ja3Mvb3Bwb3J0dW5pdGllcy1jcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9qb2JzLWJsb2NrL2ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL29iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYmxvY2tzL2pvYnMtY2FyZHMvaWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2NvcmUtanMtc3RhYmxlL3BhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2FycmF5L2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jsb2Nrcy9qb2JzLWJsb2NrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLm9iamVjdC5lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMzL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMy9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiXSwibmFtZXMiOlsiaWNvbiIsIl9fIiwid3AiLCJpMThuIiwid2l0aFNlbGVjdCIsImRhdGEiLCJTZWxlY3RDb250cm9sIiwiY29tcG9uZW50cyIsImNvbXBvc2UiLCJ3aXRoU3RhdGUiLCJkaXNwYXRjaCIsIk5IU1RheFNlbGVjdCIsInBhcmVudFRlcm1zIiwicGFyZW50QXR0cmlidXRlIiwicGFyZW50QXR0ck5hbWUiLCJwYXJlbnRMYWJlbCIsImNoaWxkQXR0cmlidXRlIiwiY2hpbGRUZXJtcyIsImNoaWxkQXR0ck5hbWUiLCJjaGlsZExhYmVsIiwiYmxvY2siLCJjdXJyZW50UG9zdCIsInRlcm0iLCJ1cGRhdGVUYXhvbm9teSIsInNlbGVjdCIsImF0dHJpYnV0ZSIsInJlbGF0aW9uc2hpcCIsInVwZGF0ZUJsb2NrQXR0cmlidXRlcyIsImNsaWVudElkIiwidGVybUlkcyIsImVkaXRFbnRpdHlSZWNvcmQiLCJ0eXBlIiwiaWQiLCJwYXJlbnRTZWxlY3QiLCJzZWxlY3RJdGVtIiwibGFiZWwiLCJ2YWx1ZSIsImluZGV4IiwicHVzaCIsIm5hbWUiLCJjaGlsZFNlbGVjdCIsIm93blByb3BzIiwicGFyZW50X3F1ZXJ5IiwiY2hpbGRfcXVlcnkiLCJnZXRFbnRpdHlSZWNvcmRzIiwiZ2V0U2VsZWN0ZWRCbG9jayIsImdldEN1cnJlbnRQb3N0IiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJibG9ja0VkaXRvciIsIlVSTElucHV0QnV0dG9uIiwiUmljaFRleHQiLCJJbnNwZWN0b3JDb250cm9scyIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwidXJsIiwiZGVmYXVsdCIsImxpbmtUeHQiLCJzdXBwb3J0cyIsImFsaWduIiwiYW5jaG9yIiwiY3VzdG9tQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaHRtbCIsImluc2VydGVyIiwibXVsdGlwbGUiLCJyZXVzYWJsZSIsImVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJDYXJkTGVuZ3RoIiwiZGV0YWlscyIsIkxvY2F0aW9uIiwiU2FsYXJ5IiwiSm9iQ2FyZCIsImNhcmQiLCJqb2IiLCJrZXkiLCJidG4iLCJzYXZlIiwiVVJMSW5wdXQiLCJEYXRlVGltZVBpY2tlciIsIlRvZ2dsZUNvbnRyb2wiLCJlbmQiLCJEYXRlIiwic291cmNlIiwibWV0YSIsImxvY2F0aW9uIiwiY291bnRyeSIsInNwZWNpYWxpdHkiLCJwYXJ0bmVycyIsImlzU2VsZWN0ZWQiLCJGcmFnbWVudCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ0pBLHFCQUFxQixtQkFBTyxDQUFDLDhCQUFrQjs7QUFFL0MsMkJBQTJCLG1CQUFPLENBQUMsb0NBQXdCOztBQUUzRCxzQkFBc0IsbUJBQU8sQ0FBQywrQkFBbUI7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7Ozs7QUNWQSxhQUFhLG1CQUFPLENBQUMsaUNBQXFCO0FBQzFDLGtDQUFrQyxtQkFBTyxDQUFDLHlEQUE2Qzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vYWRtaW4vanMvYmxvY2tzLmVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcInBFOVRcIik7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJjb25zdCBpY29uID0gPHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cblx0PHBhdGggLz5cbjwvc3ZnPjtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbjsiLCJ2YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjMuMycsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW51bWVyYWJsZSkgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCBrZXksIHZhbHVlKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChpdCk7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JNZXRob2QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgfSByZXR1cm4gYW5PYmplY3QoaXRlcmF0b3JNZXRob2QuY2FsbChpdCkpO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2JpbmQtY29udGV4dCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7ICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KVxufTtcbiIsInZhciBtYXAgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL21hcCcpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5tYXA7XG4gIHJldHVybiBpdCA9PT0gQXJyYXlQcm90b3R5cGUgfHwgKGl0IGluc3RhbmNlb2YgQXJyYXkgJiYgb3duID09PSBBcnJheVByb3RvdHlwZS5tYXApID8gbWFwIDogb3duO1xufTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XG5jb25zdCB7IFNlbGVjdENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IGNvbXBvc2UsIHdpdGhTdGF0ZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgZGlzcGF0Y2ggfSA9IHdwLmRhdGE7XG5cbmNvbnN0IE5IU1RheFNlbGVjdCA9ICggeyBwYXJlbnRUZXJtcywgcGFyZW50QXR0cmlidXRlLCBwYXJlbnRBdHRyTmFtZSwgcGFyZW50TGFiZWwsIGNoaWxkQXR0cmlidXRlLCBjaGlsZFRlcm1zLCBjaGlsZEF0dHJOYW1lLCBjaGlsZExhYmVsLCBibG9jaywgY3VycmVudFBvc3QsIHRlcm0gfSApID0+IHtcblxuXHQvLyBjb25zb2xlLmxvZyggcGFyZW50QXR0ck5hbWUsIGNoaWxkVGVybXMgKTtcblxuXG5cdGNvbnN0IHVwZGF0ZVRheG9ub215ID0gKCBzZWxlY3QsIGF0dHJpYnV0ZSwgcmVsYXRpb25zaGlwICk9PntcblxuXHRcdC8vIHVwZGF0ZXMgYmxvY2sgYXR0cmliaXRlc1xuXG5cdFx0ZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS51cGRhdGVCbG9ja0F0dHJpYnV0ZXMoIGJsb2NrLmNsaWVudElkLCB7IFsgYXR0cmlidXRlIF06IHNlbGVjdCB9ICk7XG5cblx0XHQvLyBjaGVja3Mgd2hldGhlciB0aGlzIGlzIGEgcGFyZW50IG9yIGNoaWxkIHRheG9ub215XG5cdFx0Ly8gSWYgaXQgaXMgYSBjaGlsZCBjYXRlZ29yeSBtYWtlIHN1cmUgYm90aCBwYXJlbnQgYW5kIGNoaWxkIGNhdGVnb3J5IGFyZSB1cGRhdGVkIHRvIGJlIHNlbGVjdGVkXG5cdFx0XG5cdFx0bGV0IHRlcm1JZHMgPSByZWxhdGlvbnNoaXAgPyBbIHBhcnNlSW50KCBzZWxlY3QgKSBdIDogWyBwYXJzZUludCggc2VsZWN0ICksIHBhcnNlSW50KCBwYXJlbnRBdHRyaWJ1dGUgKSBdO1x0XHRcblxuXHRcdGRpc3BhdGNoKCAnY29yZScgKS5lZGl0RW50aXR5UmVjb3JkKCAncG9zdFR5cGUnLCBjdXJyZW50UG9zdC50eXBlLCBjdXJyZW50UG9zdC5pZCwgeyBbIHRlcm0gXTogdGVybUlkcyB9ICk7XG5cblx0fVxuXG5cdGNvbnN0IHBhcmVudFNlbGVjdCA9ICggcGFyZW50VGVybXMgKSA9PntcblxuXHRcdGlmKCBwYXJlbnRUZXJtcyApe1xuXHRcdFxuXHRcdFx0bGV0IHNlbGVjdEl0ZW0gPSBbIHsgbGFiZWw6ICdTZWxlY3QgJyArICBwYXJlbnRMYWJlbCwgdmFsdWU6IDAgfSBdO1xuXG5cdFx0XHRwYXJlbnRUZXJtcy5tYXAoKHRlcm0sIGluZGV4KSA9PiB7XG5cdFx0ICAgICAgICBzZWxlY3RJdGVtLnB1c2goIHsgbGFiZWw6IHRlcm0ubmFtZSwgdmFsdWU6IHRlcm0uaWQgfSApXG5cdFx0ICAgICB9KVxuXG5cdFx0XHRyZXR1cm4gc2VsZWN0SXRlbTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybltdO1xuXHRcdH1cblx0fVxuXG5cblxuXHRjb25zdCBjaGlsZFNlbGVjdCA9ICggY2hpbGRUZXJtcyApID0+e1xuXG5cdFx0aWYoIGNoaWxkVGVybXMgKXtcblxuXHRcdFx0bGV0IHNlbGVjdEl0ZW0gPSBbIHsgbGFiZWw6ICdTZWxlY3QgJyArICBjaGlsZExhYmVsLCB2YWx1ZTogMCB9IF07XG5cblx0XHRcdGNoaWxkVGVybXMubWFwKCh0ZXJtLCBpbmRleCkgPT4ge1xuXHRcdCAgICAgICAgc2VsZWN0SXRlbS5wdXNoKCB7IGxhYmVsOiB0ZXJtLm5hbWUsIHZhbHVlOiB0ZXJtLmlkIH0gKVxuXHRcdCAgICB9KVxuXG5cdFx0XHRyZXR1cm4gc2VsZWN0SXRlbTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0fVxuXG5cblx0cmV0dXJuKFxuXG5cdDxkaXY+XG5cblx0XHQ8U2VsZWN0Q29udHJvbFxuXHQgICAgICAgIGxhYmVsPXsgcGFyZW50TGFiZWwgfVxuXHQgICAgICAgIHZhbHVlPXsgcGFyZW50QXR0cmlidXRlIH1cblx0ICAgICAgICBvcHRpb25zPXsgXG5cdFx0XHRcdHBhcmVudFNlbGVjdCggcGFyZW50VGVybXMgKVxuXHQgICAgICAgIFx0fVxuXHQgICAgICAgIG9uQ2hhbmdlPXsgKCBzZWxlY3QgKSA9PiB7IHVwZGF0ZVRheG9ub215KCBzZWxlY3QsIHBhcmVudEF0dHJOYW1lLCB0cnVlICkgfSB9XG5cdCAgICAvPlxuXG5cdCAgICB7XG5cdCAgICBcdGNoaWxkU2VsZWN0ICYmIChcblxuXHQgICAgXHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHQgICAgICAgIGxhYmVsPXsgY2hpbGRMYWJlbCB9XG5cdFx0XHQgICAgICAgIHZhbHVlPXsgY2hpbGRBdHRyaWJ1dGUgfVxuXHRcdFx0ICAgICAgICBvcHRpb25zPXsgXG5cdFx0XHRcdFx0XHRjaGlsZFNlbGVjdCggY2hpbGRUZXJtcyApXG5cdFx0XHQgICAgICAgIH1cblx0XHRcdCAgICAgICAgb25DaGFuZ2U9eyAoIHNlbGVjdCApID0+IHsgdXBkYXRlVGF4b25vbXkoIHNlbGVjdCwgY2hpbGRBdHRyTmFtZSwgZmFsc2UgKSB9IH1cblx0XHRcdCAgICAvPlxuXHQgICAgXHQpXG5cdCAgICB9XG5cblx0ICAgIFxuXG5cblx0PC9kaXY+XG5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VsZWN0KCAoIHNlbGVjdCwgb3duUHJvcHMgKSA9PiB7IFxuXG5cdFx0bGV0IHBhcmVudF9xdWVyeSA9IHtcblx0XHRcdCdwYXJlbnQnICAgICA6IDAsXG5cdFx0XHQnaGlkZV9lbXB0eScgOiBmYWxzZSxcblx0XHRcdCdwZXJfcGFnZScgICA6IC0xXG5cdFx0fVxuXG5cdFx0bGV0IGNoaWxkX3F1ZXJ5ID0ge1xuXHRcdFx0J3BhcmVudCcgICAgIDogb3duUHJvcHMucGFyZW50QXR0cmlidXRlLFxuXHRcdFx0J2hpZGVfZW1wdHknIDogZmFsc2UsXG5cdFx0XHQncGVyX3BhZ2UnICAgOiAtMVxuXHRcdH1cblxuXHRcdGxldCBjaGlsZFRlcm1zID0gb3duUHJvcHMuY2hpbGRBdHRyTmFtZSA/IHNlbGVjdCgnY29yZScpLmdldEVudGl0eVJlY29yZHMoJ3RheG9ub215Jywgb3duUHJvcHMudGVybSwgY2hpbGRfcXVlcnkgKSA6IGZhbHNlO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHBhcmVudFRlcm1zOiBzZWxlY3QoJ2NvcmUnKS5nZXRFbnRpdHlSZWNvcmRzKCd0YXhvbm9teScsIG93blByb3BzLnRlcm0sIHBhcmVudF9xdWVyeSApLFxuXHRcdFx0Y2hpbGRUZXJtczogY2hpbGRUZXJtcyxcblx0XHRcdGJsb2NrOiBzZWxlY3QoXCJjb3JlL2Jsb2NrLWVkaXRvclwiKS5nZXRTZWxlY3RlZEJsb2NrKCksXG5cdFx0XHRjdXJyZW50UG9zdDogc2VsZWN0KCAnY29yZS9lZGl0b3InICkuZ2V0Q3VycmVudFBvc3QoKSxcblx0XHRcdG93blByb3BzOiBvd25Qcm9wc1xuXHRcdH1cbn0pKE5IU1RheFNlbGVjdCk7IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgbmF0aXZlUGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8IG5hdGl2ZVBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gbmF0aXZlUGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogbmF0aXZlUGFyc2VJbnQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbi8vIGBBcnJheS5pc0FycmF5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBzdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdXG4gICAgfHwgKE5BVElWRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRUaW1lID0gRGF0ZVByb3RvdHlwZS5nZXRUaW1lO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gbmF0aXZlRGF0ZVRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2FycmF5L2lzLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvbWFwXCIpOyIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpICE9PSAnW29iamVjdCB6XScgPyBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufSA6IHRlc3QudG9TdHJpbmc7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguT2JqZWN0LmVudHJpZXM7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIE1FVEhPRF9SRVFVSVJFRCA9IHRvU3RyaW5nICE9PSAoe30pLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMsIFNFVF9NRVRIT0QpIHtcbiAgaWYgKGl0KSB7XG4gICAgdmFyIHRhcmdldCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlO1xuICAgIGlmICghaGFzKHRhcmdldCwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gICAgfVxuICAgIGlmIChTRVRfTUVUSE9EICYmIE1FVEhPRF9SRVFVSVJFRCkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldCwgJ3RvU3RyaW5nJywgdG9TdHJpbmcpO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvaXMtaXRlcmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9vYmplY3QvZW50cmllcycpO1xuIiwiLy8gQmxvY2sgZGVwZW5kYW5jaWVzXG5cbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7XG5cblxuLy8gSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IFxuXHRVUkxJbnB1dEJ1dHRvbixcblx0UmljaFRleHQsXG5cdEluc3BlY3RvckNvbnRyb2xzXG59ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcbiAgICBQYW5lbEJvZHksXG4gICAgUGFuZWxSb3csXG4gICAgU2VsZWN0Q29udHJvbFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIFJlZ2lzdGVyIEJsb2NrXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFxuXHQnbmhzam9icy9qb2JzY2FyZHMnLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCdKb2JzIENhcmRzJywgJ25oc2pvYnMnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCdBZGRzIHRocmVlIG9mIHRoZSBsYXRlc3Qgam9icycsICduaHNqb2JzJyApLFxuXHRcdGNhdGVnb3J5OiAnbmhzYmxvY2tzJyxcblx0XHRpY29uOiBpY29uLFxuXHRcdGtleXdvcmRzOiBbXG5cdFx0XHRfXyggJ0pvYnMgbGlzdGluZ3MgbGlzdCcsICduaHNqb2JzJyApLFxuXHRcdFx0X18oICdGZWVkIFZhY2VuY2llcyBOdXJzaW5nJywgJ25oc2pvYnMnICksXG5cdFx0XSxcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHR1cmw6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogJ0xhdGVzdCBWYWNhbmNpZXMnXG5cdFx0XHR9LFxuXHRcdFx0bGlua1R4dDoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogJ1ZpZXcgYWxsIFZhY2FuY2llcydcblx0XHRcdH0sXG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRkZWZhdWx0OiAnam9icydcblx0XHRcdH1cblx0XHR9LFxuXHRcdHN1cHBvcnRzOiB7XG5cdFx0XHRhbGlnbjogZmFsc2UsIC8vIGFsbG93IGFsbCBhbGlnbm1lbnRzIGNhbiBhbHNvIGNob29zZSBhcnJheSBvZiBhbGxvd2VkIGFsaWdubWVudHMgZWcgWyAnbGVmdCcsICdyaWdodCcsICdmdWxsJyBdXG5cdFx0XHRhbmNob3I6IHRydWUsIC8vIGFsbG93IHN1cHBvcnQgZm9yIGFuIGFuY2hvciB0YWdcblx0XHRcdGN1c3RvbUNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3dzIGEgY3VzdG9tIGNsYXNzbmFtZSB0byBiZSBhZGRlZCBieSB0aGUgdXNlclxuXHRcdFx0Y2xhc3NOYW1lOiB0cnVlLCAvLyBhbGxvdyBkZWZhdWx0IGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgdG8geW91ciBibG9ja1xuXHRcdFx0aHRtbDogZmFsc2UsIC8vIGFsbG93IHRoZSBodG1sIHRvIGJlIGVkaXRlZFxuXHRcdFx0aW5zZXJ0ZXI6IHRydWUsIC8vIHNldCB0byBmYWxzZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgYmxvY2sgdG8gYmUgaW5zZXJ0YWJsZVxuXHRcdFx0bXVsdGlwbGU6IHRydWUsIC8vIGFsbG93cyBtb3JlIHRoYW4gb25lIGJsb2NrIG9mIHRoYXQgdHlwZSBvbiB0aGUgcGFnZVxuXHRcdFx0cmV1c2FibGU6IHRydWUsIC8vIHdoZXRoZXIgYmxvY2sgaXMgYWxsb3dlZCB0byBiZSBhIHJldXNhYmxlIGJsb2NrXG5cdFx0fSxcblx0XHRlZGl0OiBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXM6IHsgdXJsLCB0aXRsZSwgbGlua1R4dCwgdHlwZSB9LCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0XHRcdGNvbnN0IENhcmRMZW5ndGggPSBbIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6ICdKb2IgVGl0bGUnLFxuXHRcdFx0XHRcdGRldGFpbHM6IHtcblx0XHRcdFx0XHRcdExvY2F0aW9uOiAnSm9iIExvY2F0aW9uJyxcblx0XHRcdFx0XHRcdFNhbGFyeTogJ0pvYiBTYWxhcnknXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9LCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiAnSm9iIFRpdGxlJyxcblx0XHRcdFx0XHRkZXRhaWxzOiB7XG5cdFx0XHRcdFx0XHRMb2NhdGlvbjogJ0pvYiBMb2NhdGlvbicsXG5cdFx0XHRcdFx0XHRTYWxhcnk6ICdKb2IgU2FsYXJ5J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aXRsZTogJ0pvYiBUaXRsZScsXG5cdFx0XHRcdFx0ZGV0YWlsczoge1xuXHRcdFx0XHRcdFx0TG9jYXRpb246ICdKb2IgTG9jYXRpb24nLFxuXHRcdFx0XHRcdFx0U2FsYXJ5OiAnSm9iIFNhbGFyeSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gXG5cdFx0XHRdO1xuXG5cdFx0XHRmdW5jdGlvbiBKb2JDYXJkKCBjYXJkICkge1xuXG5cdFx0XHQgIFx0cmV0dXJuKFxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5oc3VrLWdyaWQtY29sdW1uLW9uZS10aGlyZFwiPlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmhzdWstcHJvbW9fX2xpbmstd3JhcHBlclwiPlxuXHQgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmhzdWstcHJvbW9fX2NvbnRlbnRcIj5cblx0ICAgICAgICBcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIm5oc3VrLXByb21vX19oZWFkaW5nXCI+eyBjYXJkLmpvYi50aXRsZSB9PC9oMz5cblxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGwgY2xhc3NOYW1lPVwibmhzdWstc3VtbWFyeS1saXN0XCI+XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgXHR7IE9iamVjdC5lbnRyaWVzKCBjYXJkLmpvYi5kZXRhaWxzICkubWFwKCggWyBuYW1lLCB0aXRsZSBdLCBrZXkpID0+IChcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuaHN1ay1zdW1tYXJ5LWxpc3RfX3Jvd1wiXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwibmhzdWstc3VtbWFyeS1saXN0X19rZXlcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm5oc3VrLXN1bW1hcnktbGlzdF9fdmFsdWVcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RkPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGw+XG5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaHN1ay1hY3Rpb24tbGlua1wiPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmhzdWstYWN0aW9uLWxpbmtfX2xpbmtcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIm5oc3VrLWljb24gbmhzdWstaWNvbl9fYXJyb3ctcmlnaHQtY2lyY2xlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyYTEwIDEwIDAgMCAwLTkuOTUgOWgxMS42NEw5Ljc0IDcuMDVhMSAxIDAgMCAxIDEuNDEtMS40MWw1LjY2IDUuNjVhMSAxIDAgMCAxIDAgMS40MmwtNS42NiA1LjY1YTEgMSAwIDAgMS0xLjQxIDAgMSAxIDAgMCAxIDAtMS40MUwxMy42OSAxM0gyLjA1QTEwIDEwIDAgMSAwIDEyIDJ6XCI+PC9wYXRoPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5oc3VrLWFjdGlvbi1saW5rX190ZXh0XCI+eyBjYXJkLmJ0biB9PC9zcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHQgICAgICAgICAgICBcdDwvYT5cblx0XHQgICAgICAgIFx0PC9kaXY+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHQgIFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0ICBcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHQgIFx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0ICAgICAgICBsYWJlbD1cIlNpemVcIlxuXHRcdFx0XHRcdFx0ICAgICAgICB2YWx1ZT17IHR5cGUgfVxuXHRcdFx0XHRcdFx0ICAgICAgICBvcHRpb25zPXsgW1xuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgeyBsYWJlbDogJ05IUyBKb2JzIEZlZWQnLCB2YWx1ZTogJ2pvYnMnIH0sXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICB7IGxhYmVsOiAnTkhTIFZvbHVudGVlcmluZyBGZWVkJywgdmFsdWU6ICdvcHBvcnR1bml0eScgfSxcblx0XHRcdFx0XHRcdCAgICAgICAgXSB9XG5cdFx0XHRcdFx0XHQgICAgICAgIG9uQ2hhbmdlPXsgKCB0eXBlICkgPT4geyBzZXRBdHRyaWJ1dGVzKCB7IHR5cGUgfSApIH0gfVxuXHRcdFx0XHRcdFx0ICAgIC8+XG5cdFx0ICBcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0ICBcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHQgIFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwibmhzdWstZ3JpZC1yb3dcIj5cbiAgICBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmhzdWstd2lkdGgtY29udGFpbmVyXCI+XG4gICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmhzdWstZ3JpZF9faXRlbSBuaHN1ay1ncmlkLWNvbHVtbi1mdWxsXCI+XG4gICAgXHRcdFx0XHRcdDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHR0YWdOYW1lPVwiaDJcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRpdGxlIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHRpdGxlICkgPT4gc2V0QXR0cmlidXRlcyggeyB0aXRsZSB9ICkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaHN1ay1ncmlkLXJvdyBuaHN1ay1wcm9tby1ncm91cCBob21lcGFnZS12YWNhbmNpZXNcIj5cblx0XHQgICAgICAgICAgICAgICAgXHR7XG5cdFx0XHRcdFx0XHRcdFx0Q2FyZExlbmd0aC5tYXAoKGpvYiwgaW5kZXgpID0+IHtcblxuXHRcdFx0XHRcdFx0XHQgICAgICAgIHJldHVybiA8Sm9iQ2FyZCBcblx0XHRcdFx0XHRcdFx0ICAgICAgICBcdFx0XHRrZXk9eyBpbmRleCB9IFxuXHRcdFx0XHRcdFx0XHQgICAgICAgIFx0XHRcdGpvYj17IGpvYiB9XG5cdFx0XHRcdFx0XHRcdCAgICAgICAgXHRcdFx0YnRuPSdWaWV3IFZhY2FuY3knXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgXHRcdC8+XG5cdFx0XHRcdFx0XHRcdCAgICAgIH0pXG5cdFx0ICAgICAgICAgICAgICAgIFx0fVxuXHRcdCAgICAgICAgICAgICAgICAgICAgXG5cdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cdFx0ICAgICAgICAgICAgICAgIDxVUkxJbnB1dEJ1dHRvblxuXHRcdFx0XHRcdFx0XHR1cmw9eyB1cmwgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggdXJsICkgPT4gc2V0QXR0cmlidXRlcyggeyB1cmwgfSApIH1cblx0XHRcdFx0XHRcdC8+XG5cblx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuaHN1ay1hY3Rpb24tbGluayB0ZXh0LWNlbnRlclwiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmhzdWstYWN0aW9uLWxpbmtfX2xpbmtcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cIm5oc3VrLWljb24gbmhzdWstaWNvbl9fYXJyb3ctcmlnaHQtY2lyY2xlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAyYTEwIDEwIDAgMCAwLTkuOTUgOWgxMS42NEw5Ljc0IDcuMDVhMSAxIDAgMCAxIDEuNDEtMS40MWw1LjY2IDUuNjVhMSAxIDAgMCAxIDAgMS40MmwtNS42NiA1LjY1YTEgMSAwIDAgMS0xLjQxIDAgMSAxIDAgMCAxIDAtMS40MUwxMy42OSAxM0gyLjA1QTEwIDEwIDAgMSAwIDEyIDJ6XCI+PC9wYXRoPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFnTmFtZT1cInNwYW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmhzdWstYWN0aW9uLWxpbmtfX3RleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBsaW5rVHh0IH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBsaW5rVHh0ICkgPT4gc2V0QXR0cmlidXRlcyggeyBsaW5rVHh0IH0gKSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cblx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0ICAgICAgICAgICAgPC9kaXY+XG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0XTtcblx0XHR9LFxuXHRcdHNhdmU6IHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlcywgY2xhc3NOYW1lIH0gPSBwcm9wcztcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH0sXG5cdH0sXG5cbik7XG5cblxuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKSB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGxlbmd0aCwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKS5mO1xuXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVE9fRU5UUklFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoTywga2V5KSkge1xuICAgICAgICByZXN1bHQucHVzaChUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiAgZW50cmllczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGpzID0gJ2phdmEnICsgc2NyaXB0ICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoanMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgc2NyaXB0ICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnLycgKyBzY3JpcHQgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5tYXAnKTtcbnZhciBlbnRyeVZpcnR1YWwgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbHMvZW50cnktdmlydHVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJ5VmlydHVhbCgnQXJyYXknKS5tYXA7XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiAhQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICB9XG4gIEl0ZXJhdG9yc1tDT0xMRUNUSU9OX05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjMuMycsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiLy8gQmxvY2sgZGVwZW5kYW5jaWVzXG5cbmltcG9ydCBpY29uIGZyb20gJy4vaWNvbic7XG5pbXBvcnQgTkhTVGF4U2VsZWN0IGZyb20gJy4vdGF4U2VsZWN0J1xuXG5cbi8vIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBVUkxJbnB1dCB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IERhdGVUaW1lUGlja2VyLCBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vLyBSZWdpc3RlciBCbG9ja1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZShcblx0J25oc2pvYnMvb3Bwb3J0dW5pdGVzJyxcblx0e1xuXHRcdHRpdGxlOiBfXygnT3Bwb3J0dW5pdGVzJywgJ25oc2pvYnMnICksXG5cdFx0ZGVzY3JpcHRpb246IF9fKCdBZGQgYSBmZWVkIGZyb20gdGhlIE5IUyBqb2JzIHNpdGUuJywgJ25oc2pvYnMnICksXG5cdFx0Y2F0ZWdvcnk6ICduaHNibG9ja3MnLFxuXHRcdGljb246IGljb24sXG5cdFx0a2V5d29yZHM6IFtcblx0XHRcdF9fKCAnSm9icyBsaXN0aW5ncyBsaXN0JywgJ25oc2pvYnMnICksXG5cdFx0XHRfXyggJ0ZlZWQgVmFjZW5jaWVzIE51cnNpbmcnLCAnbmhzam9icycgKSxcblx0XHRdLFxuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdHVybDoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdGVuZDoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogbmV3IERhdGUoKSxcblx0XHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRcdG1ldGE6ICduaHNqb2JzX2VuZCcsXG5cdFx0XHR9LFxuXHRcdFx0bG9jYXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHRjb3VudHJ5OiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0c3BlY2lhbGl0eToge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdHBhcnRuZXJzOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdXBwb3J0czoge1xuXHRcdFx0YWxpZ246IGZhbHNlLCAvLyBhbGxvdyBhbGwgYWxpZ25tZW50cyBjYW4gYWxzbyBjaG9vc2UgYXJyYXkgb2YgYWxsb3dlZCBhbGlnbm1lbnRzIGVnIFsgJ2xlZnQnLCAncmlnaHQnLCAnZnVsbCcgXVxuXHRcdFx0YW5jaG9yOiB0cnVlLCAvLyBhbGxvdyBzdXBwb3J0IGZvciBhbiBhbmNob3IgdGFnXG5cdFx0XHRjdXN0b21DbGFzc05hbWU6IHRydWUsIC8vIGFsbG93cyBhIGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgYnkgdGhlIHVzZXJcblx0XHRcdGNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3cgZGVmYXVsdCBjdXN0b20gY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHlvdXIgYmxvY2tcblx0XHRcdGh0bWw6IGZhbHNlLCAvLyBhbGxvdyB0aGUgaHRtbCB0byBiZSBlZGl0ZWRcblx0XHRcdGluc2VydGVyOiB0cnVlLCAvLyBzZXQgdG8gZmFsc2UgaWYgeW91IGRvbid0IHdhbnQgdGhlIGJsb2NrIHRvIGJlIGluc2VydGFibGVcblx0XHRcdG11bHRpcGxlOiBmYWxzZSwgLy8gYWxsb3dzIG1vcmUgdGhhbiBvbmUgYmxvY2sgb2YgdGhhdCB0eXBlIG9uIHRoZSBwYWdlXG5cdFx0XHRyZXVzYWJsZTogdHJ1ZSwgLy8gd2hldGhlciBibG9jayBpcyBhbGxvd2VkIHRvIGJlIGEgcmV1c2FibGUgYmxvY2tcblx0XHR9LFxuXHRcdGVkaXQ6IHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyBlbmQsIGxvY2F0aW9uLCBjb3VudHJ5LCBzcGVjaWFsaXR5LCBwYXJ0bmVycyB9LCBjbGFzc05hbWUsIGlzU2VsZWN0ZWQsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9ID5cblx0XHRcdFx0XHQ8aDI+e19fKCdQb3N0IE1ldGEnLCAnbmhzam9icycpIH08L2gyPlxuXHRcdFx0XHRcdDxoMz57X18oJ0VuZCBEYXRlJywgJ25oc2pvYnMnKSB9PC9oMz5cblx0XHRcdFx0XHQ8RGF0ZVRpbWVQaWNrZXJcblx0XHRcdCAgICAgICAgICAgIGN1cnJlbnREYXRlPXsgZW5kIH1cblx0XHRcdCAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBlbmQgKSA9PiBzZXRBdHRyaWJ1dGVzKCB7IGVuZCB9ICkgfVxuXHRcdFx0ICAgICAgICAgICAgaXMxMkhvdXI9eyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntfXygnTG9jYXRpb24nLCAnbmhzam9icycpIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TkhTVGF4U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudEF0dHJpYnV0ZT17IGxvY2F0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgXHRjaGlsZEF0dHJpYnV0ZT17IGNvdW50cnkgfVxuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudEF0dHJOYW1lPSdsb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgXHRjaGlsZEF0dHJOYW1lPSdjb3VudHJ5J1xuICAgICAgICAgICAgICAgICAgICBcdHRlcm09J25oc19sb2NhdGlvbidcbiAgICAgICAgICAgICAgICAgICAgXHRwYXJlbnRMYWJlbD0nQ29udGluZW50J1xuICAgICAgICAgICAgICAgICAgICBcdGNoaWxkTGFiZWw9J0NvdW50cnknXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57X18oJ1NwZWNpYWxpdHknLCAnbmhzam9icycpIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TkhTVGF4U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudEF0dHJpYnV0ZT17IHNwZWNpYWxpdHkgfVxuICAgICAgICAgICAgICAgICAgICBcdGNoaWxkQXR0ck5hbWU9eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIFx0cGFyZW50QXR0ck5hbWU9J3NwZWNpYWxpdHknXG4gICAgICAgICAgICAgICAgICAgIFx0dGVybT0nbmhzX3NwZWNpYWxpdHknXG4gICAgICAgICAgICAgICAgICAgIFx0cGFyZW50TGFiZWw9J1NwZWNpYWxpdHknXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57X18oJ1BhcnRuZXJzJywgJ25oc2pvYnMnKSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPE5IU1RheFNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgXHRwYXJlbnRBdHRyaWJ1dGU9eyBwYXJ0bmVycyB9XG4gICAgICAgICAgICAgICAgICAgIFx0Y2hpbGRBdHRyTmFtZT17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgXHRwYXJlbnRBdHRyTmFtZT0ncGFydG5lcnMnXG4gICAgICAgICAgICAgICAgICAgIFx0dGVybT0nbmhzX3BhcnRuZXJzJ1xuICAgICAgICAgICAgICAgICAgICBcdHBhcmVudExhYmVsPSdQYXJ0bmVycydcbiAgICAgICAgICAgICAgICAgICAgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0c2F2ZTogcHJvcHMgPT4ge1xuXHRcdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUgfSA9IHByb3BzO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fSxcblxuKTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWl0ZXJhYmxlJyk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGguQXJyYXkuaXNBcnJheTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvbWFwJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcobmF0aXZlRnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoJ3RvU3RyaW5nJyk7XG5cbnNoYXJlZCgnaW5zcGVjdFNvdXJjZScsIGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gbmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbn0pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IG5hdGl2ZUZ1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIF9BcnJheSRpc0FycmF5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvaXMtYXJyYXlcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKF9BcnJheSRpc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnBhcnNlLWludCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGgucGFyc2VJbnQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcbiIsImNvbnN0IGljb24gPSA8c3ZnIHdpZHRoPScyMHB4JyBoZWlnaHQ9JzIwcHgnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPlxuXHQ8cGF0aCAvPlxuPC9zdmc+O1xuXG5leHBvcnQgZGVmYXVsdCBpY29uOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vZXMvcGFyc2UtaW50Jyk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvZmVhdHVyZXMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvb2JqZWN0L2VudHJpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dldC1pdGVyYXRvclwiKTsiLCJ2YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJjb25zdCBpY29uID0gPHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz5cblx0PHBhdGggLz5cbjwvc3ZnPjtcblxuZXhwb3J0IGRlZmF1bHQgaWNvbjsiLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRldW5tYXBwZWRhcmd1bWVudHNvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvcGFyc2UtaW50XCIpOyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2VzL29iamVjdC9kZWZpbmUtcHJvcGVydHknKTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9lcy9hcnJheS9pcy1hcnJheScpO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbHMvcGF0aCcpO1xuXG52YXIgT2JqZWN0ID0gcGF0aC5PYmplY3Q7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eS5zaGFtKSBkZWZpbmVQcm9wZXJ0eS5zaGFtID0gdHJ1ZTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SKSB7XG4gIHJldHVybiBwYXRoW0NPTlNUUlVDVE9SICsgJ1Byb3RvdHlwZSddO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmltcG9ydCBcIi4vam9icy1ibG9ja1wiO1xuXG5pbXBvcnQgXCIuL2pvYnMtY2FyZHNcIjtcblxuaW1wb3J0IFwiLi9vcHBvcnR1bml0aWVzLWNwdFwiOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYmluZC1jb250ZXh0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIHdyYXBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICB2YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiKTtcbiAgICAgIH0gcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiLCBjKTtcbiAgICB9IHJldHVybiBOYXRpdmVDb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIFBST1RPID0gb3B0aW9ucy5wcm90bztcblxuICB2YXIgbmF0aXZlU291cmNlID0gR0xPQkFMID8gZ2xvYmFsIDogU1RBVElDID8gZ2xvYmFsW1RBUkdFVF0gOiAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcblxuICB2YXIgdGFyZ2V0ID0gR0xPQkFMID8gcGF0aCA6IHBhdGhbVEFSR0VUXSB8fCAocGF0aFtUQVJHRVRdID0ge30pO1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcblxuICB2YXIgRk9SQ0VELCBVU0VfTkFUSVZFLCBWSVJUVUFMX1BST1RPVFlQRTtcbiAgdmFyIGtleSwgc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5LCBuYXRpdmVQcm9wZXJ0eSwgcmVzdWx0UHJvcGVydHksIGRlc2NyaXB0b3I7XG5cbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBVU0VfTkFUSVZFID0gIUZPUkNFRCAmJiBuYXRpdmVTb3VyY2UgJiYgaGFzKG5hdGl2ZVNvdXJjZSwga2V5KTtcblxuICAgIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSkgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmF0aXZlU291cmNlLCBrZXkpO1xuICAgICAgbmF0aXZlUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIG5hdGl2ZVByb3BlcnR5ID0gbmF0aXZlU291cmNlW2tleV07XG5cbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIGltcGxlbWVudGF0aW9uXG4gICAgc291cmNlUHJvcGVydHkgPSAoVVNFX05BVElWRSAmJiBuYXRpdmVQcm9wZXJ0eSkgPyBuYXRpdmVQcm9wZXJ0eSA6IHNvdXJjZVtrZXldO1xuXG4gICAgaWYgKFVTRV9OQVRJVkUgJiYgdHlwZW9mIHRhcmdldFByb3BlcnR5ID09PSB0eXBlb2Ygc291cmNlUHJvcGVydHkpIGNvbnRpbnVlO1xuXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBpZiAob3B0aW9ucy5iaW5kICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gYmluZChzb3VyY2VQcm9wZXJ0eSwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdzIGluIHRoaXMgdmVyc2lvblxuICAgIGVsc2UgaWYgKG9wdGlvbnMud3JhcCAmJiBVU0VfTkFUSVZFKSByZXN1bHRQcm9wZXJ0eSA9IHdyYXBDb25zdHJ1Y3Rvcihzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgZWxzZSBpZiAoUFJPVE8gJiYgdHlwZW9mIHNvdXJjZVByb3BlcnR5ID09ICdmdW5jdGlvbicpIHJlc3VsdFByb3BlcnR5ID0gYmluZChGdW5jdGlvbi5jYWxsLCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gZGVmYXVsdCBjYXNlXG4gICAgZWxzZSByZXN1bHRQcm9wZXJ0eSA9IHNvdXJjZVByb3BlcnR5O1xuXG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHNvdXJjZVByb3BlcnR5ICYmIHNvdXJjZVByb3BlcnR5LnNoYW0pIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHJlc3VsdFByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cblxuICAgIHRhcmdldFtrZXldID0gcmVzdWx0UHJvcGVydHk7XG5cbiAgICBpZiAoUFJPVE8pIHtcbiAgICAgIFZJUlRVQUxfUFJPVE9UWVBFID0gVEFSR0VUICsgJ1Byb3RvdHlwZSc7XG4gICAgICBpZiAoIWhhcyhwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFLCB7fSk7XG4gICAgICB9XG4gICAgICAvLyBleHBvcnQgdmlydHVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgcGF0aFtWSVJUVUFMX1BST1RPVFlQRV1ba2V5XSA9IHNvdXJjZVByb3BlcnR5O1xuICAgICAgLy8gZXhwb3J0IHJlYWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIGlmIChvcHRpb25zLnJlYWwgJiYgdGFyZ2V0UHJvdG90eXBlICYmICF0YXJnZXRQcm90b3R5cGVba2V5XSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0UHJvdG90eXBlLCBrZXksIHNvdXJjZVByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsIi8vIEJsb2NrIGRlcGVuZGFuY2llc1xuXG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24nO1xuXG5cbi8vIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBcblx0VVJMSW5wdXQsXG5cdEluc3BlY3RvckNvbnRyb2xzIFxufSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG4gICAgUGFuZWxCb2R5LFxuICAgIFBhbmVsUm93LFxuICAgIFNlbGVjdENvbnRyb2xcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7XG4gICAgRnJhZ21lbnRcbn0gPSB3cC5lbGVtZW50O1xuXG5cbi8vIFJlZ2lzdGVyIEJsb2NrXG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyQmxvY2tUeXBlKFxuXHQnbmhzam9icy9qb2JzZmVlZCcsXG5cdHtcblx0XHR0aXRsZTogX18oJ0pvYnMgQmxvY2snLCAnbmhzam9icycgKSxcblx0XHRkZXNjcmlwdGlvbjogX18oJ0FkZCBhIGZlZWQgZnJvbSB0aGUgTkhTIGpvYnMgc2l0ZS4nLCAnbmhzam9icycgKSxcblx0XHRjYXRlZ29yeTogJ25oc2Jsb2NrcycsXG5cdFx0aWNvbjogaWNvbixcblx0XHRrZXl3b3JkczogW1xuXHRcdFx0X18oICdKb2JzIGxpc3RpbmdzIGxpc3QnLCAnbmhzam9icycgKSxcblx0XHRcdF9fKCAnRmVlZCBWYWNlbmNpZXMgTnVyc2luZycsICduaHNqb2JzJyApLFxuXHRcdF0sXG5cdFx0YXR0cmlidXRlczoge1xuXHRcdFx0dXJsOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0ZGVmYXVsdDogJ2pvYnMnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdXBwb3J0czoge1xuXHRcdFx0YWxpZ246IGZhbHNlLCAvLyBhbGxvdyBhbGwgYWxpZ25tZW50cyBjYW4gYWxzbyBjaG9vc2UgYXJyYXkgb2YgYWxsb3dlZCBhbGlnbm1lbnRzIGVnIFsgJ2xlZnQnLCAncmlnaHQnLCAnZnVsbCcgXVxuXHRcdFx0YW5jaG9yOiB0cnVlLCAvLyBhbGxvdyBzdXBwb3J0IGZvciBhbiBhbmNob3IgdGFnXG5cdFx0XHRjdXN0b21DbGFzc05hbWU6IHRydWUsIC8vIGFsbG93cyBhIGN1c3RvbSBjbGFzc25hbWUgdG8gYmUgYWRkZWQgYnkgdGhlIHVzZXJcblx0XHRcdGNsYXNzTmFtZTogdHJ1ZSwgLy8gYWxsb3cgZGVmYXVsdCBjdXN0b20gY2xhc3NuYW1lIHRvIGJlIGFkZGVkIHRvIHlvdXIgYmxvY2tcblx0XHRcdGh0bWw6IGZhbHNlLCAvLyBhbGxvdyB0aGUgaHRtbCB0byBiZSBlZGl0ZWRcblx0XHRcdGluc2VydGVyOiB0cnVlLCAvLyBzZXQgdG8gZmFsc2UgaWYgeW91IGRvbid0IHdhbnQgdGhlIGJsb2NrIHRvIGJlIGluc2VydGFibGVcblx0XHRcdG11bHRpcGxlOiBmYWxzZSwgLy8gYWxsb3dzIG1vcmUgdGhhbiBvbmUgYmxvY2sgb2YgdGhhdCB0eXBlIG9uIHRoZSBwYWdlXG5cdFx0XHRyZXVzYWJsZTogdHJ1ZSwgLy8gd2hldGhlciBibG9jayBpcyBhbGxvd2VkIHRvIGJlIGEgcmV1c2FibGUgYmxvY2tcblx0XHR9LFxuXHRcdGVkaXQ6IHByb3BzID0+IHtcblx0XHRcdGNvbnN0IHsgYXR0cmlidXRlczogeyB1cmwsIHR5cGUgfSwgY2xhc3NOYW1lLCBpc1NlbGVjdGVkLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0XHRcdHJldHVybiBbXG5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdGZWVkIE9wdGlvbnMnLCAnbmhzam9icycgKSB9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdCAgICAgICAgbGFiZWw9XCJTaXplXCJcblx0XHRcdFx0ICAgICAgICB2YWx1ZT17IHR5cGUgfVxuXHRcdFx0XHQgICAgICAgIG9wdGlvbnM9eyBbXG5cdFx0XHRcdCAgICAgICAgICAgIHsgbGFiZWw6ICdOSFMgSm9icyBGZWVkJywgdmFsdWU6ICdqb2JzJyB9LFxuXHRcdFx0XHQgICAgICAgICAgICB7IGxhYmVsOiAnTkhTIFZvbHVudGVlcmluZyBGZWVkJywgdmFsdWU6ICdvcHBvcnR1bml0eScgfSxcblx0XHRcdFx0ICAgICAgICBdIH1cblx0XHRcdFx0ICAgICAgICBvbkNoYW5nZT17ICggdHlwZSApID0+IHsgc2V0QXR0cmlidXRlcyggeyB0eXBlIH0gKSB9IH1cblx0XHRcdFx0ICAgIC8+XG5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSA+XG5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0eXBlID09ICdqb2JzJyA/IChcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57IF9fKCdOSFMgSm9icyBGZWVkOicsICduaHNqb2JzJyApIH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxVUkxJbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9eyBfXyggXCJBZGQgTkhTIGZlZWQgVVJMXCIsIFwiX3Z0XCIgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHVybCA9PiBzZXRBdHRyaWJ1dGVzKCB7IHVybCB9ICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyB1cmwgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PHA+eyBfXygnSWYgeW91IGxlYXZlIHRoaXMgZmllbGQgYmxhbmsgdGhlIGZlZWQgd2lsbCBkZWZhdWx0IHRvOiBodHRwczovL3d3dy5qb2JzLm5ocy51ay9zZWFyY2hfeG1sP2tleXdvcmQ9bnVyc2luZyUyMGFzc29jaWF0ZSZmaWVsZD10aXRsZScpIH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXG5cdFx0XHRcdFx0XHQpOihcblx0XHRcdFx0XHRcdFx0PEZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHRcdDxoMz57IF9fKCdOSFMgT3BwZXJ0dW5pdGllcyBGZWVkOicsICduaHNqb2JzJyApIH08L2gzPlxuXHRcdFx0XHRcdFx0XHRcdDxwPnsgX18oJ09wcGVydHVuaXRpZXMgZmVlZCBpbXBvcnRlZCBmcm9tIHRoaXMgd2Vic2l0ZScpIH0gPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdF07XG5cdFx0fSxcblx0XHRzYXZlOiBwcm9wcyA9PiB7XG5cdFx0XHRjb25zdCB7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9LFxuXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRlbnRyaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLmVudHJpZXM7XG5cbi8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKE8pIHtcbiAgICByZXR1cm4gJGVudHJpZXMoTyk7XG4gIH1cbn0pO1xuIiwidmFyIF9nZXRJdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9pc0l0ZXJhYmxlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoX2lzSXRlcmFibGUoT2JqZWN0KGFycikpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IF9nZXRJdGVyYXRvcihhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9