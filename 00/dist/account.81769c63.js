// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"common/helpers/element.helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSetValues = exports.onSetFormErrors = exports.onSetError = exports.onSubmitForm = exports.onUpdateField = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var onUpdateField = function onUpdateField(id, callback) {
  var element = document.getElementById(id);

  element.oninput = function (event) {
    return callback(event);
  };

  if (element.type !== 'checkbox') {
    element.onblur = function (event) {
      return callback(event);
    };
  }
};

exports.onUpdateField = onUpdateField;

var onSubmitForm = function onSubmitForm(id, callback) {
  var element = document.getElementById(id);

  element.onclick = function (e) {
    e.preventDefault();
    callback();
  };
};

exports.onSubmitForm = onSubmitForm;

var onSetError = function onSetError(id, error) {
  if (error.succeeded) {
    removeElementClass(id);
    setErrorMessage(id, '');
  } else {
    setElementClass(id);
    setErrorMessage(id, error.message);
  }
};

exports.onSetError = onSetError;

var setElementClass = function setElementClass(id) {
  var element = document.getElementById(id);

  if (element) {
    element.classList.add('error');
  }
};

var removeElementClass = function removeElementClass(id) {
  var element = document.getElementById(id);

  if (element) {
    element.classList.remove('error');
  }
};

var setErrorMessage = function setErrorMessage(id, message) {
  var messageElement = document.getElementById("".concat(id, "-error"));

  if (messageElement) {
    messageElement.textContent = message;
  }
};

var onSetFormErrors = function onSetFormErrors(_ref) {
  var fieldErrors = _ref.fieldErrors;
  Object.entries(fieldErrors).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    onSetError(key, value);
  });
};

exports.onSetFormErrors = onSetFormErrors;

var setValue = function setValue(element, value) {
  var elementType = element.tagName.toLowerCase();

  if (elementType === 'select' || elementType === 'input') {
    element.value = value;
  } else {
    element.textContent = value;
  }
};

var onSetValue = function onSetValue(id, value) {
  var element = document.getElementById(id);
  console.log({
    element: element
  });

  if (element) {
    setValue(element, value);
  }
};

var onSetValues = function onSetValues(values) {
  Object.entries(values).forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];

    return onSetValue(key, value);
  });
};

exports.onSetValues = onSetValues;
},{}],"common/helpers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _element = require("./element.helpers");

Object.keys(_element).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _element[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _element[key];
    }
  });
});
},{"./element.helpers":"common/helpers/element.helpers.js"}],"../node_modules/@lemoncode/fonk/dist/@lemoncode/fonk.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMessageWithCustomArgs = exports.createFormValidation = exports.createDefaultValidationResult = exports.createDefaultRecordValidationResult = exports.createDefaultFormValidationResult = exports.Validators = exports.FormValidation = void 0;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
} // TODO: Better naming for this?


var safeArrayLength = function safeArrayLength(collection) {
  return Array.isArray(collection) ? collection.length : 0;
};

var arrayContainsEntries = function arrayContainsEntries(collection) {
  return safeArrayLength(collection) > 0;
}; // https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type


var isFunction = function isFunction(v) {
  return typeof v === 'function';
};

var isUndefinedOrNull = function isUndefinedOrNull(v) {
  return v === void 0 || v === null;
};

var isPromise = function isPromise(value) {
  return value instanceof Promise;
};

var safeObjectKeys = function safeObjectKeys(value) {
  return Boolean(value) ? Object.keys(value) : [];
};

var reduceAsync = function reduceAsync(collection, callback, defaultResult) {
  return collection.reduce(function (promise, item, index) {
    return promise.then(function (result) {
      return callback(result, item, index);
    });
  }, Promise.resolve(defaultResult));
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */

var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction$1(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */


function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var createDefaultValidationResult = function createDefaultValidationResult() {
  return {
    type: '',
    succeeded: true,
    message: ''
  };
};

exports.createDefaultValidationResult = createDefaultValidationResult;

var createDefaultInternalValidationResult = function createDefaultInternalValidationResult() {
  return {
    key: '',
    type: '',
    succeeded: true,
    message: ''
  };
};

var createDefaultRecordValidationResult = function createDefaultRecordValidationResult() {
  return {
    succeeded: true,
    recordErrors: {}
  };
};

exports.createDefaultRecordValidationResult = createDefaultRecordValidationResult;

var createDefaultFormValidationResult = function createDefaultFormValidationResult() {
  return {
    succeeded: true,
    fieldErrors: {},
    recordErrors: {}
  };
};

exports.createDefaultFormValidationResult = createDefaultFormValidationResult;

var createDefaultInternalFormValidationResult = function createDefaultInternalFormValidationResult() {
  return {
    succeeded: true,
    fieldErrors: {},
    recordErrors: {}
  };
}; // Sugar we admit both flavors syncrhonous and asynchronous validators


var convertFieldValidationToAsyncIfNeeded = function convertFieldValidationToAsyncIfNeeded(validation) {
  return function (fieldValidatorArgs) {
    var result = validation ? validation(fieldValidatorArgs) : createDefaultValidationResult();
    return isPromise(result) ? result : Promise.resolve(result);
  };
};

var convertRecordValidationToAsyncIfNeeded = function convertRecordValidationToAsyncIfNeeded(validation) {
  return function (recordValidatorArgs) {
    var result = validation ? validation(recordValidatorArgs) : createDefaultValidationResult();
    return isPromise(result) ? result : Promise.resolve(result);
  };
};

var mapToInternalFieldValidation = function mapToInternalFieldValidation(fieldValidation) {
  return isFunction(fieldValidation) ? {
    validator: convertFieldValidationToAsyncIfNeeded(fieldValidation),
    message: void 0,
    customArgs: void 0
  } : {
    validator: convertFieldValidationToAsyncIfNeeded(isFunction(fieldValidation.validator) ? fieldValidation.validator : fieldValidation.validator.validator),
    customArgs: fieldValidation.customArgs,
    message: fieldValidation.message
  };
};

var mapToInternalValidationCollection = function mapToInternalValidationCollection(fieldValidations) {
  return Array.isArray(fieldValidations) ? fieldValidations.map(mapToInternalFieldValidation) : [];
};

var buildIntertalSchema = function buildIntertalSchema(internalSchema) {
  return internalSchema.reduce(function (internalFieldValidations, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        fieldId = _ref2[0],
        fieldValidations = _ref2[1];

    internalFieldValidations[fieldId] = fieldValidations;
    return internalFieldValidations;
  }, {});
};

var mapToInternalFieldValidationSchema = function mapToInternalFieldValidationSchema(fieldValidationSchema) {
  var validationSchema = fieldValidationSchema instanceof Object ? fieldValidationSchema : {};
  var internalFieldValidations = Object.entries(validationSchema).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        fielId = _ref4[0],
        fieldValidations = _ref4[1];

    return [fielId, mapToInternalValidationCollection(fieldValidations)];
  });
  return buildIntertalSchema(internalFieldValidations);
};

var mapToInternalRecordValidation = function mapToInternalRecordValidation(recordValidation) {
  return isFunction(recordValidation) ? {
    validator: convertRecordValidationToAsyncIfNeeded(recordValidation),
    message: void 0
  } : {
    validator: convertRecordValidationToAsyncIfNeeded(isFunction(recordValidation.validator) ? recordValidation.validator : recordValidation.validator.validator),
    message: recordValidation.message
  };
};

var mapToInternalValidationCollection$1 = function mapToInternalValidationCollection(recordValidations) {
  return Array.isArray(recordValidations) ? recordValidations.map(mapToInternalRecordValidation) : [];
};

var buildIntertalSchema$1 = function buildIntertalSchema(internalSchema) {
  return internalSchema.reduce(function (internalRecordValidations, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        recordId = _ref2[0],
        recordValidations = _ref2[1];

    internalRecordValidations[recordId] = recordValidations;
    return internalRecordValidations;
  }, {});
};

var mapToInternalRecordValidationSchema = function mapToInternalRecordValidationSchema(recordValidationSchema) {
  var validationSchema = recordValidationSchema instanceof Object ? recordValidationSchema : {};
  var internalRecordValidations = Object.entries(validationSchema).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        fielId = _ref4[0],
        recordValidations = _ref4[1];

    return [fielId, mapToInternalValidationCollection$1(recordValidations)];
  });
  return buildIntertalSchema$1(internalRecordValidations);
};

var renameFieldNameKeys = function renameFieldNameKeys(internalValidationResult, fieldKey, fieldErrors, index) {
  var fieldNames = Object.keys(fieldErrors);
  return fieldNames.reduce(function (result, fieldName) {
    return Object.assign(Object.assign({}, result), _defineProperty({}, "".concat(fieldKey, "[").concat(index, "].").concat(fieldName), fieldErrors[fieldName]));
  }, {});
};

var mapArrayErrorListToValidationResult = function mapArrayErrorListToValidationResult(internalValidationResult, fieldKey) {
  return internalValidationResult.arrayErrors.reduce(function (validationResult, fieldErrors, index) {
    return Object.assign(Object.assign({}, validationResult), renameFieldNameKeys(internalValidationResult, fieldKey, fieldErrors, index));
  }, {});
};

var mapInternalValidationResultToValidationResult = function mapInternalValidationResultToValidationResult(internalValidationResult) {
  return Boolean(internalValidationResult.arrayErrors) ? mapArrayErrorListToValidationResult(internalValidationResult, internalValidationResult.key) : {
    type: internalValidationResult.type,
    message: internalValidationResult.message,
    succeeded: internalValidationResult.succeeded
  };
};

var mapInternalFieldErrorsToFieldErrors = function mapInternalFieldErrorsToFieldErrors(internalFieldErrors) {
  return Object.keys(internalFieldErrors).reduce(function (fieldErrors, field) {
    var validationResult = internalFieldErrors[field];
    var fieldValidationResult = Boolean(validationResult.arrayErrors) ? mapArrayErrorListToValidationResult(validationResult, field) : _defineProperty({}, field, validationResult);
    return Object.assign(Object.assign({}, fieldErrors), fieldValidationResult);
  }, {});
};

var mapInternalFormValidationResultToFormValidationResult = function mapInternalFormValidationResultToFormValidationResult(internalFormValidationResult) {
  return {
    succeeded: internalFormValidationResult.succeeded,
    recordErrors: internalFormValidationResult.recordErrors,
    fieldErrors: mapInternalFieldErrorsToFieldErrors(internalFormValidationResult.fieldErrors)
  };
};

var fireAllFieldsValidations = function fireAllFieldsValidations(fieldIds, values, schema, validateField) {
  return fieldIds.map(function (fieldId) {
    return validateField(fieldId, get_1(values, fieldId, undefined), values, schema);
  });
};

var fireAllRecordsValidations = function fireAllRecordsValidations(recordIds, values, schema, validateRecord) {
  return recordIds.map(function (recordId) {
    return validateRecord(recordId, values, schema);
  });
};

var checkValidationResult = function checkValidationResult(validationResult) {
  var result = validationResult;

  if (!validationResult || isUndefinedOrNull(validationResult.succeeded)) {
    // show a console error, warn the user one of his validators is not well formed
    console.error('form-validators: One of the record validator is returning a non expected value.');
    result = createDefaultInternalValidationResult();
  }

  return result;
};

var fireValidation = function fireValidation(values, internalRecordValidation) {
  return internalRecordValidation.validator({
    values: values,
    message: internalRecordValidation.message
  }).then(checkValidationResult);
}; // Sequentially resolve promises with reduce: https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
// Example run promises until one succeeds: https://gist.github.com/greggman/0b6eafb335de4bbb557c


var iterateValidationsUntilFailOrAllSucceeded = function iterateValidationsUntilFailOrAllSucceeded(values, internalRecordValidations) {
  return internalRecordValidations.reduce(function (result, next) {
    return result.then(function (validationResult) {
      return validationResult.succeeded ? fireValidation(values, next) : validationResult;
    });
  }, fireValidation(values, internalRecordValidations[0]) // Initial reduce value
  );
};

var fireSingleRecordValidations = function fireSingleRecordValidations(values, internalRecordValidations) {
  return arrayContainsEntries(internalRecordValidations) ? iterateValidationsUntilFailOrAllSucceeded(values, internalRecordValidations) : Promise.resolve(createDefaultInternalValidationResult());
};

var checkValidationResult$1 = function checkValidationResult(validationResult) {
  var result = validationResult;

  if (!validationResult || isUndefinedOrNull(validationResult.succeeded)) {
    // show a console error, warn the user one of his validators is not well formed
    console.error('form-validators: One of the field validator is returning a non expected value.');
    result = createDefaultInternalValidationResult();
  }

  return result;
};

var fireValidation$1 = function fireValidation(value, values, internalFieldValidation) {
  return internalFieldValidation.validator({
    value: value,
    values: values,
    customArgs: internalFieldValidation.customArgs,
    message: internalFieldValidation.message
  }).then(checkValidationResult$1);
}; // Sequentially resolve promises with reduce: https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
// Example run promises until one succeeds: https://gist.github.com/greggman/0b6eafb335de4bbb557c


var iterateValidationsUntilFailOrAllSucceeded$1 = function iterateValidationsUntilFailOrAllSucceeded(value, values, internalFieldValidations) {
  return internalFieldValidations.reduce(function (result, next) {
    return result.then(function (validationResult) {
      return validationResult.succeeded ? fireValidation$1(value, values, next) : validationResult;
    });
  }, fireValidation$1(value, values, internalFieldValidations[0]) // Initial reduce value
  );
};

var fireSingleFieldValidations = function fireSingleFieldValidations(value, values, internalFieldValidations) {
  return arrayContainsEntries(internalFieldValidations) ? iterateValidationsUntilFailOrAllSucceeded$1(value, values, internalFieldValidations) : Promise.resolve(createDefaultInternalValidationResult());
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */


function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

var didAllValidationsSucceeded = function didAllValidationsSucceeded(validationResults) {
  return validationResults.every(function (fvr) {
    return fvr.succeeded;
  });
};

var extractErrors = function extractErrors(validationResults) {
  return validationResults.reduce(function (errors, _a) {
    var key = _a.key,
        validationResult = __rest(_a, ["key"]);

    errors[key] = Object.assign({}, validationResult);
    return errors;
  }, {});
};

var buildRecordValidationResult = function buildRecordValidationResult(validationResults) {
  var recordValidationResult = createDefaultRecordValidationResult();

  if (arrayContainsEntries(validationResults)) {
    recordValidationResult.succeeded = didAllValidationsSucceeded(validationResults);
    recordValidationResult.recordErrors = extractErrors(validationResults);
  }

  return recordValidationResult;
};

var buildFormValidationResult = function buildFormValidationResult(fieldValidationResults, recordValidationResults) {
  var formValidationResult = createDefaultInternalFormValidationResult();

  if (arrayContainsEntries(fieldValidationResults)) {
    formValidationResult.succeeded = didAllValidationsSucceeded(fieldValidationResults);
    formValidationResult.fieldErrors = extractErrors(fieldValidationResults);
  }

  if (arrayContainsEntries(recordValidationResults)) {
    var recordResults = buildRecordValidationResult(recordValidationResults);
    formValidationResult.succeeded = formValidationResult.succeeded && recordResults.succeeded;
    formValidationResult.recordErrors = recordResults.recordErrors;
  }

  return formValidationResult;
};

var isIdInSchema = function isIdInSchema(fieldId, schema) {
  return !isUndefinedOrNull(schema) && !isUndefinedOrNull(schema[fieldId]);
};

var validateField = function validateField(fieldId, value, values, schema) {
  return !isIdInSchema(fieldId, schema) ? Promise.resolve(createDefaultInternalValidationResult()) : fireSingleFieldValidations(value, values, schema[fieldId]).then(function (validationResult) {
    validationResult.key = fieldId;
    return validationResult;
  })["catch"](function (error) {
    var message = "Validation Exception, field: ".concat(fieldId);
    console.error(message);
    throw error;
  });
};

var validateSingleRecord = function validateSingleRecord(recordId, values, schema) {
  return !isIdInSchema(recordId, schema) ? Promise.resolve(createDefaultInternalValidationResult()) : fireSingleRecordValidations(values, schema[recordId]).then(function (validationResult) {
    validationResult.key = recordId;
    return validationResult;
  })["catch"](function (error) {
    var message = "Validation Exception, record: ".concat(recordId);
    console.error(message);
    throw error;
  });
};

var validateRecord = function validateRecord(values, schema) {
  var promiseValidationResults = fireAllRecordsValidations(safeObjectKeys(schema), values, schema, validateSingleRecord);
  return Promise.all(promiseValidationResults).then(function (validationResults) {
    return buildRecordValidationResult(validationResults);
  })["catch"](function (error) {
    var message = 'Uncontrolled error validating records';
    console.error(message);
    throw error;
  });
};

var validateForm = function validateForm(values, fieldSchema, recordSchema) {
  var promiseFieldValidationResults = fireAllFieldsValidations(safeObjectKeys(fieldSchema), values, fieldSchema, validateField);
  var promiseRecordValidationResults = fireAllRecordsValidations(safeObjectKeys(recordSchema), values, recordSchema, validateSingleRecord);
  return Promise.all(promiseFieldValidationResults).then(function (fieldValidationResults) {
    return Promise.all(promiseRecordValidationResults).then(function (recordValidationResults) {
      return [fieldValidationResults, recordValidationResults];
    });
  }).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        fieldValidationResults = _ref2[0],
        recordValidationResults = _ref2[1];

    return buildFormValidationResult(fieldValidationResults, recordValidationResults);
  })["catch"](function (error) {
    var message = 'Uncontrolled error validating records';
    console.error(message);
    throw error;
  });
};

var FormValidation = function FormValidation(validationSchema) {
  var _this = this;

  _classCallCheck(this, FormValidation);

  this.fieldSchema = {};
  this.recordSchema = {};

  this.setupValidationSchema = function (validationSchema) {
    if (validationSchema && _typeof(validationSchema) === 'object') {
      var record = validationSchema.record,
          field = validationSchema.field;

      if (field && _typeof(field) === 'object') {
        _this.fieldSchema = mapToInternalFieldValidationSchema(validationSchema.field);
      }

      if (record && _typeof(record) === 'object') {
        _this.recordSchema = mapToInternalRecordValidationSchema(validationSchema.record);
      }
    } else {
      console.error('ValidationSchema must be a valid object');
    }
  };

  this.validateField = function (fieldId, value, values) {
    return validateField(fieldId, value, values, _this.fieldSchema).then(mapInternalValidationResultToValidationResult);
  };

  this.validateRecord = function (values) {
    return validateRecord(values, _this.recordSchema);
  };

  this.validateForm = function (values) {
    return validateForm(values, _this.fieldSchema, _this.recordSchema).then(mapInternalFormValidationResultToFormValidationResult);
  };

  this.updateValidationSchema = function (validationSchema) {
    _this.setupValidationSchema(validationSchema);
  };

  this.setupValidationSchema(validationSchema);
};

exports.FormValidation = FormValidation;

var createFormValidation = function createFormValidation(validationSchema) {
  return new FormValidation(validationSchema);
};

exports.createFormValidation = createFormValidation;

var getArgsToParse = function getArgsToParse(message) {
  return message.match(/{{[^{}][\w\.]*}}/g);
};

var getArgPath = function getArgPath(arg) {
  return arg.replace(/[{}]/g, '');
};

var parseMessage = function parseMessage(message, customArgs) {
  var parsableArgs = getArgsToParse(message);
  return Array.isArray(parsableArgs) ? parsableArgs.reduce(function (customMessage, arg) {
    return customMessage.replace(arg, get_1(customArgs, getArgPath(arg), arg));
  }, message) : message;
};

var parseMessageWithCustomArgs = function parseMessageWithCustomArgs(message, customArgs) {
  return message ? parseMessage(message, customArgs) : '';
};

exports.parseMessageWithCustomArgs = parseMessageWithCustomArgs;
var VALIDATOR_TYPE = 'REQUIRED';
var defaultMessage = 'Please fill in this mandatory field.';

var setErrorMessage = function setErrorMessage(message) {
  return defaultMessage = message;
};

var DEFAULT_PARAMS = {
  trim: true
};

var isStringValid = function isStringValid(value, trim) {
  return trim ? value.trim().length > 0 : value.length > 0;
};

var isNonStringValid = function isNonStringValid(value) {
  return value !== void 0 && value !== null;
};

var isValidField = function isValidField(value, trim) {
  return typeof value === 'string' ? isStringValid(value, trim) : isNonStringValid(value);
};

var validator = function validator(fieldValidatorArgs) {
  var value = fieldValidatorArgs.value,
      _fieldValidatorArgs$c = fieldValidatorArgs.customArgs,
      customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS : _fieldValidatorArgs$c,
      _fieldValidatorArgs$m = fieldValidatorArgs.message,
      message = _fieldValidatorArgs$m === void 0 ? defaultMessage : _fieldValidatorArgs$m;
  var succeeded = isValidField(value, Boolean(customArgs.trim));
  return {
    succeeded: succeeded,
    message: succeeded ? '' : parseMessageWithCustomArgs(message, customArgs),
    type: VALIDATOR_TYPE
  };
};

var required = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setErrorMessage: setErrorMessage,
  validator: validator
});

var isEmptyValue = function isEmptyValue(value) {
  return value === null || value === undefined || value === '';
};

var isValidPattern = function isValidPattern(value, pattern) {
  return isEmptyValue(value) ? true : pattern.test(value);
};

var VALIDATOR_TYPE$1 = 'EMAIL';
var defaultMessage$1 = 'Please enter a valid email address.';

var setErrorMessage$1 = function setErrorMessage(message) {
  return defaultMessage$1 = message;
}; // RegExp from http://emailregex.com


var EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var isValidField$1 = function isValidField(value) {
  return isValidPattern(value, EMAIL_PATTERN);
};

var validator$1 = function validator(fieldValidatorArgs) {
  var value = fieldValidatorArgs.value,
      _fieldValidatorArgs$m = fieldValidatorArgs.message,
      message = _fieldValidatorArgs$m === void 0 ? defaultMessage$1 : _fieldValidatorArgs$m;
  var succeeded = isValidField$1(value);
  return {
    succeeded: succeeded,
    message: succeeded ? '' : message,
    type: VALIDATOR_TYPE$1
  };
};

var email = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setErrorMessage: setErrorMessage$1,
  validator: validator$1
});
var VALIDATOR_TYPE$2 = 'PATTERN';
var defaultMessage$2 = 'Please provide a valid format.';

var setErrorMessage$2 = function setErrorMessage(message) {
  return defaultMessage$2 = message;
};

var BAD_PARAMETER = 'FieldValidationError: pattern option for pattern validation is mandatory. Example: { pattern: /d+/ }.';
var DEFAULT_PARAMS$1 = null;

function getRegExp(pattern) {
  return pattern instanceof RegExp ? pattern : new RegExp(pattern);
}

function parsePattern(_ref) {
  var pattern = _ref.pattern; // Avoid RegExp like /true/ /false/ and /null/ without an explicit "true", "false" or "null"

  if (typeof pattern === 'boolean' || pattern === null) {
    throw new Error(BAD_PARAMETER);
  }

  return getRegExp(pattern);
}

var validator$2 = function validator(fieldValidatorArgs) {
  if (!fieldValidatorArgs.customArgs) {
    throw new Error(BAD_PARAMETER);
  }

  var value = fieldValidatorArgs.value,
      _fieldValidatorArgs$c = fieldValidatorArgs.customArgs,
      customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$1 : _fieldValidatorArgs$c,
      _fieldValidatorArgs$m = fieldValidatorArgs.message,
      message = _fieldValidatorArgs$m === void 0 ? defaultMessage$2 : _fieldValidatorArgs$m;
  var pattern = parsePattern(customArgs);
  var succeeded = isValidPattern(value, pattern);
  return {
    succeeded: succeeded,
    message: succeeded ? '' : parseMessageWithCustomArgs(message, customArgs),
    type: VALIDATOR_TYPE$2
  };
};

var pattern = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setErrorMessage: setErrorMessage$2,
  validator: validator$2
});

function parseLengthParams(customParams, errorMessage) {
  var length = customParams.length === null ? NaN : Number(customParams.length);

  if (isNaN(length)) {
    throw new Error(errorMessage);
  }

  return length;
}

function isLengthValid(value, length, validatorFn) {
  // Don't try to validate non string values
  return typeof value === 'string' ? validatorFn(value, length) : true;
}

var VALIDATOR_TYPE$3 = 'MIN_LENGTH';
var defaultMessage$3 = 'The value provided does not fulfill min length.';

var setErrorMessage$3 = function setErrorMessage(message) {
  return defaultMessage$3 = message;
};

var BAD_PARAMETER$1 = 'FieldValidationError: Parameter "length" for minLength in customArgs is mandatory and should be a valid number. Example: { length: 4 }.';
var DEFAULT_PARAMS$2 = null;

var isStringLengthValid = function isStringLengthValid(value, length) {
  return value.length >= length;
};

var validator$3 = function validator(fieldValidatorArgs) {
  if (!fieldValidatorArgs.customArgs) {
    throw new Error(BAD_PARAMETER$1);
  }

  var value = fieldValidatorArgs.value,
      _fieldValidatorArgs$c = fieldValidatorArgs.customArgs,
      customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$2 : _fieldValidatorArgs$c,
      _fieldValidatorArgs$m = fieldValidatorArgs.message,
      message = _fieldValidatorArgs$m === void 0 ? defaultMessage$3 : _fieldValidatorArgs$m;
  var length = parseLengthParams(customArgs, BAD_PARAMETER$1);
  var succeeded = isLengthValid(value, length, isStringLengthValid);
  return {
    succeeded: succeeded,
    message: succeeded ? '' : parseMessageWithCustomArgs(message, customArgs),
    type: VALIDATOR_TYPE$3
  };
};

var minLength = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setErrorMessage: setErrorMessage$3,
  validator: validator$3
});
var VALIDATOR_TYPE$4 = 'MAX_LENGTH';
var defaultMessage$4 = 'The value provided does not fulfill max length.';

var setErrorMessage$4 = function setErrorMessage(message) {
  return defaultMessage$4 = message;
};

var BAD_PARAMETER$2 = 'FieldValidationError: Parameter "length" for maxLength in customArgs is mandatory and should be a valid number. Example: { length: 4 }.';
var DEFAULT_PARAMS$3 = null;

var isStringLengthValid$1 = function isStringLengthValid(value, length) {
  return value.length <= length;
};

var validator$4 = function validator(fieldValidatorArgs) {
  if (!fieldValidatorArgs.customArgs) {
    throw new Error(BAD_PARAMETER$2);
  }

  var value = fieldValidatorArgs.value,
      _fieldValidatorArgs$c = fieldValidatorArgs.customArgs,
      customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$3 : _fieldValidatorArgs$c,
      _fieldValidatorArgs$m = fieldValidatorArgs.message,
      message = _fieldValidatorArgs$m === void 0 ? defaultMessage$4 : _fieldValidatorArgs$m;
  var length = parseLengthParams(customArgs, BAD_PARAMETER$2);
  var succeeded = isLengthValid(value, length, isStringLengthValid$1);
  return {
    succeeded: succeeded,
    message: succeeded ? '' : parseMessageWithCustomArgs(message, customArgs),
    type: VALIDATOR_TYPE$4
  };
};

var maxLength = /*#__PURE__*/Object.freeze({
  __proto__: null,
  setErrorMessage: setErrorMessage$4,
  validator: validator$4
});

var createEmptyArrayValidationResult = function createEmptyArrayValidationResult() {
  return {
    succeeded: true,
    arrayErrors: []
  };
};

var validator$5 = function validator(validatorArgs) {
  var value = validatorArgs.value,
      customArgs = validatorArgs.customArgs;
  var formValidation = createFormValidation(customArgs);
  return reduceAsync(value, function (validationResult, item) {
    return formValidation.validateForm(item).then(function (_ref) {
      var fieldErrors = _ref.fieldErrors,
          succeeded = _ref.succeeded;
      return {
        succeeded: validationResult.succeeded && succeeded,
        arrayErrors: [].concat(_toConsumableArray(validationResult.arrayErrors), [fieldErrors])
      };
    });
  }, createEmptyArrayValidationResult()).then(function (arrayValidationResult) {
    return {
      succeeded: arrayValidationResult.succeeded,
      type: 'ARRAY_VALIDATIONS',
      message: null,
      arrayErrors: arrayValidationResult.arrayErrors
    };
  });
};

var array = /*#__PURE__*/Object.freeze({
  __proto__: null,
  validator: validator$5
});
var index = {
  required: required,
  email: email,
  pattern: pattern,
  minLength: minLength,
  maxLength: maxLength,
  array: array
};
exports.Validators = index;
},{}],"pages/account/account.validations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formValidation = void 0;

var _fonk = require("@lemoncode/fonk");

var validationSchema = {
  field: {
    type: [_fonk.Validators.required],
    alias: [_fonk.Validators.required]
  }
};
var formValidation = (0, _fonk.createFormValidation)(validationSchema);
exports.formValidation = formValidation;
},{"@lemoncode/fonk":"../node_modules/@lemoncode/fonk/dist/@lemoncode/fonk.esm.js"}],"pages/account/account.js":[function(require,module,exports) {
"use strict";

var _helpers = require("../../common/helpers");

var _account = require("./account.validations");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var account = {
  id: '',
  type: '',
  alias: ''
};
(0, _helpers.onUpdateField)('type', function (event) {
  var value = event.target.value;
  account = _objectSpread(_objectSpread({}, account), {}, {
    type: value
  });

  _account.formValidation.validateField('type', account.type).then(function (result) {
    (0, _helpers.onSetError)('type', result);
  });
});
(0, _helpers.onUpdateField)('alias', function (event) {
  var value = event.target.value;
  account = _objectSpread(_objectSpread({}, account), {}, {
    alias: value
  });

  _account.formValidation.validateField('alias', account.alias).then(function (result) {
    (0, _helpers.onSetError)('alias', result);
  });
});
(0, _helpers.onSubmitForm)('save-button', function () {
  _account.formValidation.validateForm(account).then(function (result) {
    (0, _helpers.onSetFormErrors)(result);

    if (result.succeeded) {
      console.log(account);
    }
  });
});
},{"../../common/helpers":"common/helpers/index.js","./account.validations":"pages/account/account.validations.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56874" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","pages/account/account.js"], null)
//# sourceMappingURL=/account.81769c63.js.map