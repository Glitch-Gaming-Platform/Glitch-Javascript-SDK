'use strict';

var require$$1 = require('util');
var stream = require('stream');
var require$$1$1 = require('path');
var require$$3 = require('http');
var require$$4 = require('https');
var require$$0$1 = require('url');
var require$$6 = require('fs');
var require$$4$1 = require('assert');
var require$$0$3 = require('tty');
var require$$0$2 = require('os');
var zlib = require('zlib');
var EventEmitter = require('events');

var LabelManager = /** @class */ (function () {
    function LabelManager() {
    }
    LabelManager.initialize = function (community) {
        LabelManager.community = community;
    };
    LabelManager.getLabel = function (labelName, plural, capitalize) {
        var label = LabelManager.community[labelName + (plural ? "_plural" : "_singular")];
        if (capitalize) {
            label = label.charAt(0).toUpperCase() + label.slice(1);
        }
        return label;
    };
    LabelManager.getUserLabel = function (plural, capitalize) {
        return LabelManager.getLabel("label_users", plural, capitalize);
    };
    LabelManager.getCompetitionLabel = function (plural, capitalize) {
        return LabelManager.getLabel("label_competitions", plural, capitalize);
    };
    LabelManager.getStreamLabel = function (plural, capitalize) {
        return LabelManager.getLabel("label_streams", plural, capitalize);
    };
    LabelManager.getPostLabel = function (plural, capitalize) {
        return LabelManager.getLabel("label_posts", plural, capitalize);
    };
    return LabelManager;
}());

/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString$1 = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction$1(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction$1(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop$1 = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData,
  isArrayBufferView,
  isString: isString$1,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var Stream$2 = stream.Stream;
var util$2 = require$$1;

var delayed_stream = DelayedStream$1;
function DelayedStream$1() {
  this.source = null;
  this.dataSize = 0;
  this.maxDataSize = 1024 * 1024;
  this.pauseStream = true;

  this._maxDataSizeExceeded = false;
  this._released = false;
  this._bufferedEvents = [];
}
util$2.inherits(DelayedStream$1, Stream$2);

DelayedStream$1.create = function(source, options) {
  var delayedStream = new this();

  options = options || {};
  for (var option in options) {
    delayedStream[option] = options[option];
  }

  delayedStream.source = source;

  var realEmit = source.emit;
  source.emit = function() {
    delayedStream._handleEmit(arguments);
    return realEmit.apply(source, arguments);
  };

  source.on('error', function() {});
  if (delayedStream.pauseStream) {
    source.pause();
  }

  return delayedStream;
};

Object.defineProperty(DelayedStream$1.prototype, 'readable', {
  configurable: true,
  enumerable: true,
  get: function() {
    return this.source.readable;
  }
});

DelayedStream$1.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};

DelayedStream$1.prototype.resume = function() {
  if (!this._released) {
    this.release();
  }

  this.source.resume();
};

DelayedStream$1.prototype.pause = function() {
  this.source.pause();
};

DelayedStream$1.prototype.release = function() {
  this._released = true;

  this._bufferedEvents.forEach(function(args) {
    this.emit.apply(this, args);
  }.bind(this));
  this._bufferedEvents = [];
};

DelayedStream$1.prototype.pipe = function() {
  var r = Stream$2.prototype.pipe.apply(this, arguments);
  this.resume();
  return r;
};

DelayedStream$1.prototype._handleEmit = function(args) {
  if (this._released) {
    this.emit.apply(this, args);
    return;
  }

  if (args[0] === 'data') {
    this.dataSize += args[1].length;
    this._checkIfMaxDataSizeExceeded();
  }

  this._bufferedEvents.push(args);
};

DelayedStream$1.prototype._checkIfMaxDataSizeExceeded = function() {
  if (this._maxDataSizeExceeded) {
    return;
  }

  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  this._maxDataSizeExceeded = true;
  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this.emit('error', new Error(message));
};

var util$1 = require$$1;
var Stream$1 = stream.Stream;
var DelayedStream = delayed_stream;

var combined_stream = CombinedStream$1;
function CombinedStream$1() {
  this.writable = false;
  this.readable = true;
  this.dataSize = 0;
  this.maxDataSize = 2 * 1024 * 1024;
  this.pauseStreams = true;

  this._released = false;
  this._streams = [];
  this._currentStream = null;
  this._insideLoop = false;
  this._pendingNext = false;
}
util$1.inherits(CombinedStream$1, Stream$1);

CombinedStream$1.create = function(options) {
  var combinedStream = new this();

  options = options || {};
  for (var option in options) {
    combinedStream[option] = options[option];
  }

  return combinedStream;
};

CombinedStream$1.isStreamLike = function(stream) {
  return (typeof stream !== 'function')
    && (typeof stream !== 'string')
    && (typeof stream !== 'boolean')
    && (typeof stream !== 'number')
    && (!Buffer.isBuffer(stream));
};

CombinedStream$1.prototype.append = function(stream) {
  var isStreamLike = CombinedStream$1.isStreamLike(stream);

  if (isStreamLike) {
    if (!(stream instanceof DelayedStream)) {
      var newStream = DelayedStream.create(stream, {
        maxDataSize: Infinity,
        pauseStream: this.pauseStreams,
      });
      stream.on('data', this._checkDataSize.bind(this));
      stream = newStream;
    }

    this._handleErrors(stream);

    if (this.pauseStreams) {
      stream.pause();
    }
  }

  this._streams.push(stream);
  return this;
};

CombinedStream$1.prototype.pipe = function(dest, options) {
  Stream$1.prototype.pipe.call(this, dest, options);
  this.resume();
  return dest;
};

CombinedStream$1.prototype._getNext = function() {
  this._currentStream = null;

  if (this._insideLoop) {
    this._pendingNext = true;
    return; // defer call
  }

  this._insideLoop = true;
  try {
    do {
      this._pendingNext = false;
      this._realGetNext();
    } while (this._pendingNext);
  } finally {
    this._insideLoop = false;
  }
};

CombinedStream$1.prototype._realGetNext = function() {
  var stream = this._streams.shift();


  if (typeof stream == 'undefined') {
    this.end();
    return;
  }

  if (typeof stream !== 'function') {
    this._pipeNext(stream);
    return;
  }

  var getStream = stream;
  getStream(function(stream) {
    var isStreamLike = CombinedStream$1.isStreamLike(stream);
    if (isStreamLike) {
      stream.on('data', this._checkDataSize.bind(this));
      this._handleErrors(stream);
    }

    this._pipeNext(stream);
  }.bind(this));
};

CombinedStream$1.prototype._pipeNext = function(stream) {
  this._currentStream = stream;

  var isStreamLike = CombinedStream$1.isStreamLike(stream);
  if (isStreamLike) {
    stream.on('end', this._getNext.bind(this));
    stream.pipe(this, {end: false});
    return;
  }

  var value = stream;
  this.write(value);
  this._getNext();
};

CombinedStream$1.prototype._handleErrors = function(stream) {
  var self = this;
  stream.on('error', function(err) {
    self._emitError(err);
  });
};

CombinedStream$1.prototype.write = function(data) {
  this.emit('data', data);
};

CombinedStream$1.prototype.pause = function() {
  if (!this.pauseStreams) {
    return;
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
  this.emit('pause');
};

CombinedStream$1.prototype.resume = function() {
  if (!this._released) {
    this._released = true;
    this.writable = true;
    this._getNext();
  }

  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
  this.emit('resume');
};

CombinedStream$1.prototype.end = function() {
  this._reset();
  this.emit('end');
};

CombinedStream$1.prototype.destroy = function() {
  this._reset();
  this.emit('close');
};

CombinedStream$1.prototype._reset = function() {
  this.writable = false;
  this._streams = [];
  this._currentStream = null;
};

CombinedStream$1.prototype._checkDataSize = function() {
  this._updateDataSize();
  if (this.dataSize <= this.maxDataSize) {
    return;
  }

  var message =
    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
  this._emitError(new Error(message));
};

CombinedStream$1.prototype._updateDataSize = function() {
  this.dataSize = 0;

  var self = this;
  this._streams.forEach(function(stream) {
    if (!stream.dataSize) {
      return;
    }

    self.dataSize += stream.dataSize;
  });

  if (this._currentStream && this._currentStream.dataSize) {
    this.dataSize += this._currentStream.dataSize;
  }
};

CombinedStream$1.prototype._emitError = function(err) {
  this._reset();
  this.emit('error', err);
};

var mimeTypes = {};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"es",
		"ecma"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.slides": {
	source: "iana"
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hl7cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/step": {
	source: "iana"
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana"
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 */

var mimeDb = require$$0;

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (exports) {

	/**
	 * Module dependencies.
	 * @private
	 */

	var db = mimeDb;
	var extname = require$$1$1.extname;

	/**
	 * Module variables.
	 * @private
	 */

	var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
	var TEXT_TYPE_REGEXP = /^text\//i;

	/**
	 * Module exports.
	 * @public
	 */

	exports.charset = charset;
	exports.charsets = { lookup: charset };
	exports.contentType = contentType;
	exports.extension = extension;
	exports.extensions = Object.create(null);
	exports.lookup = lookup;
	exports.types = Object.create(null);

	// Populate the extensions/types maps
	populateMaps(exports.extensions, exports.types);

	/**
	 * Get the default charset for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function charset (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);
	  var mime = match && db[match[1].toLowerCase()];

	  if (mime && mime.charset) {
	    return mime.charset
	  }

	  // default text/* to utf-8
	  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
	    return 'UTF-8'
	  }

	  return false
	}

	/**
	 * Create a full Content-Type header given a MIME type or extension.
	 *
	 * @param {string} str
	 * @return {boolean|string}
	 */

	function contentType (str) {
	  // TODO: should this even be in this module?
	  if (!str || typeof str !== 'string') {
	    return false
	  }

	  var mime = str.indexOf('/') === -1
	    ? exports.lookup(str)
	    : str;

	  if (!mime) {
	    return false
	  }

	  // TODO: use content-type or other module
	  if (mime.indexOf('charset') === -1) {
	    var charset = exports.charset(mime);
	    if (charset) mime += '; charset=' + charset.toLowerCase();
	  }

	  return mime
	}

	/**
	 * Get the default extension for a MIME type.
	 *
	 * @param {string} type
	 * @return {boolean|string}
	 */

	function extension (type) {
	  if (!type || typeof type !== 'string') {
	    return false
	  }

	  // TODO: use media-typer
	  var match = EXTRACT_TYPE_REGEXP.exec(type);

	  // get extensions
	  var exts = match && exports.extensions[match[1].toLowerCase()];

	  if (!exts || !exts.length) {
	    return false
	  }

	  return exts[0]
	}

	/**
	 * Lookup the MIME type for a file path/extension.
	 *
	 * @param {string} path
	 * @return {boolean|string}
	 */

	function lookup (path) {
	  if (!path || typeof path !== 'string') {
	    return false
	  }

	  // get the extension ("ext" or ".ext" or full path)
	  var extension = extname('x.' + path)
	    .toLowerCase()
	    .substr(1);

	  if (!extension) {
	    return false
	  }

	  return exports.types[extension] || false
	}

	/**
	 * Populate the extensions and types maps.
	 * @private
	 */

	function populateMaps (extensions, types) {
	  // source preference (least -> most)
	  var preference = ['nginx', 'apache', undefined, 'iana'];

	  Object.keys(db).forEach(function forEachMimeType (type) {
	    var mime = db[type];
	    var exts = mime.extensions;

	    if (!exts || !exts.length) {
	      return
	    }

	    // mime -> extensions
	    extensions[type] = exts;

	    // extension -> mime
	    for (var i = 0; i < exts.length; i++) {
	      var extension = exts[i];

	      if (types[extension]) {
	        var from = preference.indexOf(db[types[extension]].source);
	        var to = preference.indexOf(mime.source);

	        if (types[extension] !== 'application/octet-stream' &&
	          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
	          // skip the remapping
	          continue
	        }
	      }

	      // set the extension -> mime
	      types[extension] = type;
	    }
	  });
	} 
} (mimeTypes));

var defer_1 = defer$1;

/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */
function defer$1(fn)
{
  var nextTick = typeof setImmediate == 'function'
    ? setImmediate
    : (
      typeof process == 'object' && typeof process.nextTick == 'function'
      ? process.nextTick
      : null
    );

  if (nextTick)
  {
    nextTick(fn);
  }
  else
  {
    setTimeout(fn, 0);
  }
}

var defer = defer_1;

// API
var async_1 = async$2;

/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */
function async$2(callback)
{
  var isAsync = false;

  // check if async happened
  defer(function() { isAsync = true; });

  return function async_callback(err, result)
  {
    if (isAsync)
    {
      callback(err, result);
    }
    else
    {
      defer(function nextTick_callback()
      {
        callback(err, result);
      });
    }
  };
}

// API
var abort_1 = abort$2;

/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */
function abort$2(state)
{
  Object.keys(state.jobs).forEach(clean.bind(state));

  // reset leftover jobs
  state.jobs = {};
}

/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */
function clean(key)
{
  if (typeof this.jobs[key] == 'function')
  {
    this.jobs[key]();
  }
}

var async$1 = async_1
  , abort$1 = abort_1
  ;

// API
var iterate_1 = iterate$2;

/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */
function iterate$2(list, iterator, state, callback)
{
  // store current index
  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
  {
    // don't repeat yourself
    // skip secondary callbacks
    if (!(key in state.jobs))
    {
      return;
    }

    // clean up jobs
    delete state.jobs[key];

    if (error)
    {
      // don't process rest of the results
      // stop still active jobs
      // and reset the list
      abort$1(state);
    }
    else
    {
      state.results[key] = output;
    }

    // return salvaged results
    callback(error, state.results);
  });
}

/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */
function runJob(iterator, key, item, callback)
{
  var aborter;

  // allow shortcut if iterator expects only two arguments
  if (iterator.length == 2)
  {
    aborter = iterator(item, async$1(callback));
  }
  // otherwise go with full three arguments
  else
  {
    aborter = iterator(item, key, async$1(callback));
  }

  return aborter;
}

// API
var state_1 = state;

/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */
function state(list, sortMethod)
{
  var isNamedList = !Array.isArray(list)
    , initState =
    {
      index    : 0,
      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
      jobs     : {},
      results  : isNamedList ? {} : [],
      size     : isNamedList ? Object.keys(list).length : list.length
    }
    ;

  if (sortMethod)
  {
    // sort array keys based on it's values
    // sort object's keys just on own merit
    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
    {
      return sortMethod(list[a], list[b]);
    });
  }

  return initState;
}

var abort = abort_1
  , async = async_1
  ;

// API
var terminator_1 = terminator$2;

/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */
function terminator$2(callback)
{
  if (!Object.keys(this.jobs).length)
  {
    return;
  }

  // fast forward iteration index
  this.index = this.size;

  // abort jobs
  abort(this);

  // send back results we have so far
  async(callback)(null, this.results);
}

var iterate$1    = iterate_1
  , initState$1  = state_1
  , terminator$1 = terminator_1
  ;

// Public API
var parallel_1 = parallel;

/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function parallel(list, iterator, callback)
{
  var state = initState$1(list);

  while (state.index < (state['keyedList'] || list).length)
  {
    iterate$1(list, iterator, state, function(error, result)
    {
      if (error)
      {
        callback(error, result);
        return;
      }

      // looks like it's the last one
      if (Object.keys(state.jobs).length === 0)
      {
        callback(null, state.results);
        return;
      }
    });

    state.index++;
  }

  return terminator$1.bind(state, callback);
}

var serialOrdered$2 = {exports: {}};

var iterate    = iterate_1
  , initState  = state_1
  , terminator = terminator_1
  ;

// Public API
serialOrdered$2.exports = serialOrdered$1;
// sorting helpers
serialOrdered$2.exports.ascending  = ascending;
serialOrdered$2.exports.descending = descending;

/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serialOrdered$1(list, iterator, sortMethod, callback)
{
  var state = initState(list, sortMethod);

  iterate(list, iterator, state, function iteratorHandler(error, result)
  {
    if (error)
    {
      callback(error, result);
      return;
    }

    state.index++;

    // are we there yet?
    if (state.index < (state['keyedList'] || list).length)
    {
      iterate(list, iterator, state, iteratorHandler);
      return;
    }

    // done here
    callback(null, state.results);
  });

  return terminator.bind(state, callback);
}

/*
 * -- Sort methods
 */

/**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function ascending(a, b)
{
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */
function descending(a, b)
{
  return -1 * ascending(a, b);
}

var serialOrderedExports = serialOrdered$2.exports;

var serialOrdered = serialOrderedExports;

// Public API
var serial_1 = serial;

/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */
function serial(list, iterator, callback)
{
  return serialOrdered(list, iterator, null, callback);
}

var asynckit$1 =
{
  parallel      : parallel_1,
  serial        : serial_1,
  serialOrdered : serialOrderedExports
};

// populates missing values
var populate$1 = function(dst, src) {

  Object.keys(src).forEach(function(prop)
  {
    dst[prop] = dst[prop] || src[prop];
  });

  return dst;
};

var CombinedStream = combined_stream;
var util = require$$1;
var path = require$$1$1;
var http$1 = require$$3;
var https$1 = require$$4;
var parseUrl$1 = require$$0$1.parse;
var fs = require$$6;
var Stream = stream.Stream;
var mime = mimeTypes;
var asynckit = asynckit$1;
var populate = populate$1;

// Public API
var form_data = FormData$1;

// make it a Stream
util.inherits(FormData$1, CombinedStream);

/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
 */
function FormData$1(options) {
  if (!(this instanceof FormData$1)) {
    return new FormData$1(options);
  }

  this._overheadLength = 0;
  this._valueLength = 0;
  this._valuesToMeasure = [];

  CombinedStream.call(this);

  options = options || {};
  for (var option in options) {
    this[option] = options[option];
  }
}

FormData$1.LINE_BREAK = '\r\n';
FormData$1.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

FormData$1.prototype.append = function(field, value, options) {

  options = options || {};

  // allow filename as single option
  if (typeof options == 'string') {
    options = {filename: options};
  }

  var append = CombinedStream.prototype.append.bind(this);

  // all that streamy business can't handle numbers
  if (typeof value == 'number') {
    value = '' + value;
  }

  // https://github.com/felixge/node-form-data/issues/38
  if (util.isArray(value)) {
    // Please convert your array into string
    // the way web server expects it
    this._error(new Error('Arrays are not supported.'));
    return;
  }

  var header = this._multiPartHeader(field, value, options);
  var footer = this._multiPartFooter();

  append(header);
  append(value);
  append(footer);

  // pass along options.knownLength
  this._trackLength(header, value, options);
};

FormData$1.prototype._trackLength = function(header, value, options) {
  var valueLength = 0;

  // used w/ getLengthSync(), when length is known.
  // e.g. for streaming directly from a remote server,
  // w/ a known file a size, and not wanting to wait for
  // incoming file to finish to get its size.
  if (options.knownLength != null) {
    valueLength += +options.knownLength;
  } else if (Buffer.isBuffer(value)) {
    valueLength = value.length;
  } else if (typeof value === 'string') {
    valueLength = Buffer.byteLength(value);
  }

  this._valueLength += valueLength;

  // @check why add CRLF? does this account for custom/multiple CRLFs?
  this._overheadLength +=
    Buffer.byteLength(header) +
    FormData$1.LINE_BREAK.length;

  // empty or either doesn't have path or not an http response or not a stream
  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
    return;
  }

  // no need to bother with the length
  if (!options.knownLength) {
    this._valuesToMeasure.push(value);
  }
};

FormData$1.prototype._lengthRetriever = function(value, callback) {

  if (value.hasOwnProperty('fd')) {

    // take read range into a account
    // `end` = Infinity –> read file till the end
    //
    // TODO: Looks like there is bug in Node fs.createReadStream
    // it doesn't respect `end` options without `start` options
    // Fix it when node fixes it.
    // https://github.com/joyent/node/issues/7819
    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

      // when end specified
      // no need to calculate range
      // inclusive, starts with 0
      callback(null, value.end + 1 - (value.start ? value.start : 0));

    // not that fast snoopy
    } else {
      // still need to fetch file size from fs
      fs.stat(value.path, function(err, stat) {

        var fileSize;

        if (err) {
          callback(err);
          return;
        }

        // update final size based on the range options
        fileSize = stat.size - (value.start ? value.start : 0);
        callback(null, fileSize);
      });
    }

  // or http response
  } else if (value.hasOwnProperty('httpVersion')) {
    callback(null, +value.headers['content-length']);

  // or request stream http://github.com/mikeal/request
  } else if (value.hasOwnProperty('httpModule')) {
    // wait till response come back
    value.on('response', function(response) {
      value.pause();
      callback(null, +response.headers['content-length']);
    });
    value.resume();

  // something else
  } else {
    callback('Unknown stream');
  }
};

FormData$1.prototype._multiPartHeader = function(field, value, options) {
  // custom header specified (as string)?
  // it becomes responsible for boundary
  // (e.g. to handle extra CRLFs on .NET servers)
  if (typeof options.header == 'string') {
    return options.header;
  }

  var contentDisposition = this._getContentDisposition(value, options);
  var contentType = this._getContentType(value, options);

  var contents = '';
  var headers  = {
    // add custom disposition as third element or keep it two elements if not
    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
    // if no content type. allow it to be empty array
    'Content-Type': [].concat(contentType || [])
  };

  // allow custom headers.
  if (typeof options.header == 'object') {
    populate(headers, options.header);
  }

  var header;
  for (var prop in headers) {
    if (!headers.hasOwnProperty(prop)) continue;
    header = headers[prop];

    // skip nullish headers.
    if (header == null) {
      continue;
    }

    // convert all headers to arrays.
    if (!Array.isArray(header)) {
      header = [header];
    }

    // add non-empty headers.
    if (header.length) {
      contents += prop + ': ' + header.join('; ') + FormData$1.LINE_BREAK;
    }
  }

  return '--' + this.getBoundary() + FormData$1.LINE_BREAK + contents + FormData$1.LINE_BREAK;
};

FormData$1.prototype._getContentDisposition = function(value, options) {

  var filename
    , contentDisposition
    ;

  if (typeof options.filepath === 'string') {
    // custom filepath for relative paths
    filename = path.normalize(options.filepath).replace(/\\/g, '/');
  } else if (options.filename || value.name || value.path) {
    // custom filename take precedence
    // formidable and the browser add a name property
    // fs- and request- streams have path property
    filename = path.basename(options.filename || value.name || value.path);
  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
    // or try http response
    filename = path.basename(value.client._httpMessage.path || '');
  }

  if (filename) {
    contentDisposition = 'filename="' + filename + '"';
  }

  return contentDisposition;
};

FormData$1.prototype._getContentType = function(value, options) {

  // use custom content-type above all
  var contentType = options.contentType;

  // or try `name` from formidable, browser
  if (!contentType && value.name) {
    contentType = mime.lookup(value.name);
  }

  // or try `path` from fs-, request- streams
  if (!contentType && value.path) {
    contentType = mime.lookup(value.path);
  }

  // or if it's http-reponse
  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
    contentType = value.headers['content-type'];
  }

  // or guess it from the filepath or filename
  if (!contentType && (options.filepath || options.filename)) {
    contentType = mime.lookup(options.filepath || options.filename);
  }

  // fallback to the default content type if `value` is not simple value
  if (!contentType && typeof value == 'object') {
    contentType = FormData$1.DEFAULT_CONTENT_TYPE;
  }

  return contentType;
};

FormData$1.prototype._multiPartFooter = function() {
  return function(next) {
    var footer = FormData$1.LINE_BREAK;

    var lastPart = (this._streams.length === 0);
    if (lastPart) {
      footer += this._lastBoundary();
    }

    next(footer);
  }.bind(this);
};

FormData$1.prototype._lastBoundary = function() {
  return '--' + this.getBoundary() + '--' + FormData$1.LINE_BREAK;
};

FormData$1.prototype.getHeaders = function(userHeaders) {
  var header;
  var formHeaders = {
    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
  };

  for (header in userHeaders) {
    if (userHeaders.hasOwnProperty(header)) {
      formHeaders[header.toLowerCase()] = userHeaders[header];
    }
  }

  return formHeaders;
};

FormData$1.prototype.setBoundary = function(boundary) {
  this._boundary = boundary;
};

FormData$1.prototype.getBoundary = function() {
  if (!this._boundary) {
    this._generateBoundary();
  }

  return this._boundary;
};

FormData$1.prototype.getBuffer = function() {
  var dataBuffer = new Buffer.alloc( 0 );
  var boundary = this.getBoundary();

  // Create the form content. Add Line breaks to the end of data.
  for (var i = 0, len = this._streams.length; i < len; i++) {
    if (typeof this._streams[i] !== 'function') {

      // Add content to the buffer.
      if(Buffer.isBuffer(this._streams[i])) {
        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
      }else {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
      }

      // Add break after content.
      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData$1.LINE_BREAK)] );
      }
    }
  }

  // Add the footer and return the Buffer object.
  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
};

FormData$1.prototype._generateBoundary = function() {
  // This generates a 50 character boundary similar to those used by Firefox.
  // They are optimized for boyer-moore parsing.
  var boundary = '--------------------------';
  for (var i = 0; i < 24; i++) {
    boundary += Math.floor(Math.random() * 10).toString(16);
  }

  this._boundary = boundary;
};

// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually
// and add it as knownLength option
FormData$1.prototype.getLengthSync = function() {
  var knownLength = this._overheadLength + this._valueLength;

  // Don't get confused, there are 3 "internal" streams for each keyval pair
  // so it basically checks if there is any value added to the form
  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  // https://github.com/form-data/form-data/issues/40
  if (!this.hasKnownLength()) {
    // Some async length retrievers are present
    // therefore synchronous length calculation is false.
    // Please use getLength(callback) to get proper length
    this._error(new Error('Cannot calculate proper length in synchronous way.'));
  }

  return knownLength;
};

// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData$1.prototype.hasKnownLength = function() {
  var hasKnownLength = true;

  if (this._valuesToMeasure.length) {
    hasKnownLength = false;
  }

  return hasKnownLength;
};

FormData$1.prototype.getLength = function(cb) {
  var knownLength = this._overheadLength + this._valueLength;

  if (this._streams.length) {
    knownLength += this._lastBoundary().length;
  }

  if (!this._valuesToMeasure.length) {
    process.nextTick(cb.bind(this, null, knownLength));
    return;
  }

  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
    if (err) {
      cb(err);
      return;
    }

    values.forEach(function(length) {
      knownLength += length;
    });

    cb(null, knownLength);
  });
};

FormData$1.prototype.submit = function(params, cb) {
  var request
    , options
    , defaults = {method: 'post'}
    ;

  // parse provided url if it's string
  // or treat it as options object
  if (typeof params == 'string') {

    params = parseUrl$1(params);
    options = populate({
      port: params.port,
      path: params.pathname,
      host: params.hostname,
      protocol: params.protocol
    }, defaults);

  // use custom params
  } else {

    options = populate(params, defaults);
    // if no port provided use default one
    if (!options.port) {
      options.port = options.protocol == 'https:' ? 443 : 80;
    }
  }

  // put that good code in getHeaders to some use
  options.headers = this.getHeaders(params.headers);

  // https if specified, fallback to http in any other case
  if (options.protocol == 'https:') {
    request = https$1.request(options);
  } else {
    request = http$1.request(options);
  }

  // get content length and fire away
  this.getLength(function(err, length) {
    if (err && err !== 'Unknown stream') {
      this._error(err);
      return;
    }

    // add content length
    if (length) {
      request.setHeader('Content-Length', length);
    }

    this.pipe(request);
    if (cb) {
      var onResponse;

      var callback = function (error, responce) {
        request.removeListener('error', callback);
        request.removeListener('response', onResponse);

        return cb.call(this, error, responce);
      };

      onResponse = callback.bind(this, null);

      request.on('error', callback);
      request.on('response', onResponse);
    }
  }.bind(this));

  return request;
};

FormData$1.prototype._error = function(err) {
  if (!this.error) {
    this.error = err;
    this.pause();
    this.emit('error', err);
  }
};

FormData$1.prototype.toString = function () {
  return '[object FormData]';
};

var FormData$2 = /*@__PURE__*/getDefaultExportFromCjs(form_data);

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData$2 || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils$1.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams = require$$0$1.URLSearchParams;

var platform$1 = {
  isNode: true,
  classes: {
    URLSearchParams,
    FormData: FormData$2,
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  protocols: [ 'http', 'https', 'file', 'data' ]
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = (
  (product) => {
    return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0
  })(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};

    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);

    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils$1.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils$1.isArrayBuffer(data) ||
      utils$1.isBuffer(data) ||
      utils$1.isStream(data) ||
      utils$1.isFile(data) ||
      utils$1.isBlob(data)
    ) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils$1.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils$1.isString(value)) return;

  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils$1.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils$1.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils$1.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils$1.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var parseUrl = require$$0$1.parse;

var DEFAULT_PORTS = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
};

var stringEndsWith = String.prototype.endsWith || function(s) {
  return s.length <= this.length &&
    this.indexOf(s, this.length - s.length) !== -1;
};

/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return '';  // Don't proxy URLs without a valid scheme or host.
  }

  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return '';  // Don't proxy URLs that match NO_PROXY.
  }

  var proxy =
    getEnv('npm_config_' + proto + '_proxy') ||
    getEnv(proto + '_proxy') ||
    getEnv('npm_config_proxy') ||
    getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY =
    (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
  if (!NO_PROXY) {
    return true;  // Always proxy if NO_PROXY is not set.
  }
  if (NO_PROXY === '*') {
    return false;  // Never proxy if wildcard is set.
  }

  return NO_PROXY.split(/[,\s]/).every(function(proxy) {
    if (!proxy) {
      return true;  // Skip zero-length hosts.
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true;  // Skip if ports don't match.
    }

    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }

    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !stringEndsWith.call(hostname, parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}

var getProxyForUrl_1 = getProxyForUrl;

var followRedirects$1 = {exports: {}};

var src = {exports: {}};

var node = {exports: {}};

var hasFlag;
var hasRequiredHasFlag;

function requireHasFlag () {
	if (hasRequiredHasFlag) return hasFlag;
	hasRequiredHasFlag = 1;
	hasFlag = (flag, argv) => {
		argv = argv || process.argv;
		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
		const pos = argv.indexOf(prefix + flag);
		const terminatorPos = argv.indexOf('--');
		return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
	};
	return hasFlag;
}

var supportsColor_1;
var hasRequiredSupportsColor;

function requireSupportsColor () {
	if (hasRequiredSupportsColor) return supportsColor_1;
	hasRequiredSupportsColor = 1;
	const os = require$$0$2;
	const hasFlag = requireHasFlag();

	const env = process.env;

	let forceColor;
	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		forceColor = false;
	} else if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		forceColor = true;
	}
	if ('FORCE_COLOR' in env) {
		forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
	}

	function translateLevel(level) {
		if (level === 0) {
			return false;
		}

		return {
			level,
			hasBasic: true,
			has256: level >= 2,
			has16m: level >= 3
		};
	}

	function supportsColor(stream) {
		if (forceColor === false) {
			return 0;
		}

		if (hasFlag('color=16m') ||
			hasFlag('color=full') ||
			hasFlag('color=truecolor')) {
			return 3;
		}

		if (hasFlag('color=256')) {
			return 2;
		}

		if (stream && !stream.isTTY && forceColor !== true) {
			return 0;
		}

		const min = forceColor ? 1 : 0;

		if (process.platform === 'win32') {
			// Node.js 7.5.0 is the first version of Node.js to include a patch to
			// libuv that enables 256 color output on Windows. Anything earlier and it
			// won't work. However, here we target Node.js 8 at minimum as it is an LTS
			// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
			// release that supports 256 colors. Windows 10 build 14931 is the first release
			// that supports 16m/TrueColor.
			const osRelease = os.release().split('.');
			if (
				Number(process.versions.node.split('.')[0]) >= 8 &&
				Number(osRelease[0]) >= 10 &&
				Number(osRelease[2]) >= 10586
			) {
				return Number(osRelease[2]) >= 14931 ? 3 : 2;
			}

			return 1;
		}

		if ('CI' in env) {
			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
				return 1;
			}

			return min;
		}

		if ('TEAMCITY_VERSION' in env) {
			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
		}

		if (env.COLORTERM === 'truecolor') {
			return 3;
		}

		if ('TERM_PROGRAM' in env) {
			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

			switch (env.TERM_PROGRAM) {
				case 'iTerm.app':
					return version >= 3 ? 3 : 2;
				case 'Apple_Terminal':
					return 2;
				// No default
			}
		}

		if (/-256(color)?$/i.test(env.TERM)) {
			return 2;
		}

		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
			return 1;
		}

		if ('COLORTERM' in env) {
			return 1;
		}

		if (env.TERM === 'dumb') {
			return min;
		}

		return min;
	}

	function getSupportLevel(stream) {
		const level = supportsColor(stream);
		return translateLevel(level);
	}

	supportsColor_1 = {
		supportsColor: getSupportLevel,
		stdout: getSupportLevel(process.stdout),
		stderr: getSupportLevel(process.stderr)
	};
	return supportsColor_1;
}

/**
 * Helpers.
 */

var ms;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms;
	hasRequiredMs = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var w = d * 7;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isFinite(val)) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'weeks':
	    case 'week':
	    case 'w':
	      return n * w;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (msAbs >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (msAbs >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (msAbs >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  var msAbs = Math.abs(ms);
	  if (msAbs >= d) {
	    return plural(ms, msAbs, d, 'day');
	  }
	  if (msAbs >= h) {
	    return plural(ms, msAbs, h, 'hour');
	  }
	  if (msAbs >= m) {
	    return plural(ms, msAbs, m, 'minute');
	  }
	  if (msAbs >= s) {
	    return plural(ms, msAbs, s, 'second');
	  }
	  return ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, msAbs, n, name) {
	  var isPlural = msAbs >= n * 1.5;
	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
	}
	return ms;
}

var common;
var hasRequiredCommon;

function requireCommon () {
	if (hasRequiredCommon) return common;
	hasRequiredCommon = 1;
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 */

	function setup(env) {
		createDebug.debug = createDebug;
		createDebug.default = createDebug;
		createDebug.coerce = coerce;
		createDebug.disable = disable;
		createDebug.enable = enable;
		createDebug.enabled = enabled;
		createDebug.humanize = requireMs();
		createDebug.destroy = destroy;

		Object.keys(env).forEach(key => {
			createDebug[key] = env[key];
		});

		/**
		* The currently active debug mode names, and names to skip.
		*/

		createDebug.names = [];
		createDebug.skips = [];

		/**
		* Map of special "%n" handling functions, for the debug "format" argument.
		*
		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		*/
		createDebug.formatters = {};

		/**
		* Selects a color for a debug namespace
		* @param {String} namespace The namespace string for the debug instance to be colored
		* @return {Number|String} An ANSI color code for the given namespace
		* @api private
		*/
		function selectColor(namespace) {
			let hash = 0;

			for (let i = 0; i < namespace.length; i++) {
				hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
				hash |= 0; // Convert to 32bit integer
			}

			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
		}
		createDebug.selectColor = selectColor;

		/**
		* Create a debugger with the given `namespace`.
		*
		* @param {String} namespace
		* @return {Function}
		* @api public
		*/
		function createDebug(namespace) {
			let prevTime;
			let enableOverride = null;
			let namespacesCache;
			let enabledCache;

			function debug(...args) {
				// Disabled?
				if (!debug.enabled) {
					return;
				}

				const self = debug;

				// Set `diff` timestamp
				const curr = Number(new Date());
				const ms = curr - (prevTime || curr);
				self.diff = ms;
				self.prev = prevTime;
				self.curr = curr;
				prevTime = curr;

				args[0] = createDebug.coerce(args[0]);

				if (typeof args[0] !== 'string') {
					// Anything else let's inspect with %O
					args.unshift('%O');
				}

				// Apply any `formatters` transformations
				let index = 0;
				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
					// If we encounter an escaped % then don't increase the array index
					if (match === '%%') {
						return '%';
					}
					index++;
					const formatter = createDebug.formatters[format];
					if (typeof formatter === 'function') {
						const val = args[index];
						match = formatter.call(self, val);

						// Now we need to remove `args[index]` since it's inlined in the `format`
						args.splice(index, 1);
						index--;
					}
					return match;
				});

				// Apply env-specific formatting (colors, etc.)
				createDebug.formatArgs.call(self, args);

				const logFn = self.log || createDebug.log;
				logFn.apply(self, args);
			}

			debug.namespace = namespace;
			debug.useColors = createDebug.useColors();
			debug.color = createDebug.selectColor(namespace);
			debug.extend = extend;
			debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

			Object.defineProperty(debug, 'enabled', {
				enumerable: true,
				configurable: false,
				get: () => {
					if (enableOverride !== null) {
						return enableOverride;
					}
					if (namespacesCache !== createDebug.namespaces) {
						namespacesCache = createDebug.namespaces;
						enabledCache = createDebug.enabled(namespace);
					}

					return enabledCache;
				},
				set: v => {
					enableOverride = v;
				}
			});

			// Env-specific initialization logic for debug instances
			if (typeof createDebug.init === 'function') {
				createDebug.init(debug);
			}

			return debug;
		}

		function extend(namespace, delimiter) {
			const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
			newDebug.log = this.log;
			return newDebug;
		}

		/**
		* Enables a debug mode by namespaces. This can include modes
		* separated by a colon and wildcards.
		*
		* @param {String} namespaces
		* @api public
		*/
		function enable(namespaces) {
			createDebug.save(namespaces);
			createDebug.namespaces = namespaces;

			createDebug.names = [];
			createDebug.skips = [];

			let i;
			const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
			const len = split.length;

			for (i = 0; i < len; i++) {
				if (!split[i]) {
					// ignore empty strings
					continue;
				}

				namespaces = split[i].replace(/\*/g, '.*?');

				if (namespaces[0] === '-') {
					createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
				} else {
					createDebug.names.push(new RegExp('^' + namespaces + '$'));
				}
			}
		}

		/**
		* Disable debug output.
		*
		* @return {String} namespaces
		* @api public
		*/
		function disable() {
			const namespaces = [
				...createDebug.names.map(toNamespace),
				...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
			].join(',');
			createDebug.enable('');
			return namespaces;
		}

		/**
		* Returns true if the given mode name is enabled, false otherwise.
		*
		* @param {String} name
		* @return {Boolean}
		* @api public
		*/
		function enabled(name) {
			if (name[name.length - 1] === '*') {
				return true;
			}

			let i;
			let len;

			for (i = 0, len = createDebug.skips.length; i < len; i++) {
				if (createDebug.skips[i].test(name)) {
					return false;
				}
			}

			for (i = 0, len = createDebug.names.length; i < len; i++) {
				if (createDebug.names[i].test(name)) {
					return true;
				}
			}

			return false;
		}

		/**
		* Convert regexp to namespace
		*
		* @param {RegExp} regxep
		* @return {String} namespace
		* @api private
		*/
		function toNamespace(regexp) {
			return regexp.toString()
				.substring(2, regexp.toString().length - 2)
				.replace(/\.\*\?$/, '*');
		}

		/**
		* Coerce `val`.
		*
		* @param {Mixed} val
		* @return {Mixed}
		* @api private
		*/
		function coerce(val) {
			if (val instanceof Error) {
				return val.stack || val.message;
			}
			return val;
		}

		/**
		* XXX DO NOT USE. This is a temporary stub function.
		* XXX It WILL be removed in the next major release.
		*/
		function destroy() {
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}

		createDebug.enable(createDebug.load());

		return createDebug;
	}

	common = setup;
	return common;
}

/**
 * Module dependencies.
 */

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	(function (module, exports) {
		const tty = require$$0$3;
		const util = require$$1;

		/**
		 * This is the Node.js implementation of `debug()`.
		 */

		exports.init = init;
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.destroy = util.deprecate(
			() => {},
			'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
		);

		/**
		 * Colors.
		 */

		exports.colors = [6, 2, 3, 4, 5, 1];

		try {
			// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
			// eslint-disable-next-line import/no-extraneous-dependencies
			const supportsColor = requireSupportsColor();

			if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
				exports.colors = [
					20,
					21,
					26,
					27,
					32,
					33,
					38,
					39,
					40,
					41,
					42,
					43,
					44,
					45,
					56,
					57,
					62,
					63,
					68,
					69,
					74,
					75,
					76,
					77,
					78,
					79,
					80,
					81,
					92,
					93,
					98,
					99,
					112,
					113,
					128,
					129,
					134,
					135,
					148,
					149,
					160,
					161,
					162,
					163,
					164,
					165,
					166,
					167,
					168,
					169,
					170,
					171,
					172,
					173,
					178,
					179,
					184,
					185,
					196,
					197,
					198,
					199,
					200,
					201,
					202,
					203,
					204,
					205,
					206,
					207,
					208,
					209,
					214,
					215,
					220,
					221
				];
			}
		} catch (error) {
			// Swallow - we only care if `supports-color` is available; it doesn't have to be.
		}

		/**
		 * Build up the default `inspectOpts` object from the environment variables.
		 *
		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
		 */

		exports.inspectOpts = Object.keys(process.env).filter(key => {
			return /^debug_/i.test(key);
		}).reduce((obj, key) => {
			// Camel-case
			const prop = key
				.substring(6)
				.toLowerCase()
				.replace(/_([a-z])/g, (_, k) => {
					return k.toUpperCase();
				});

			// Coerce string value into JS value
			let val = process.env[key];
			if (/^(yes|on|true|enabled)$/i.test(val)) {
				val = true;
			} else if (/^(no|off|false|disabled)$/i.test(val)) {
				val = false;
			} else if (val === 'null') {
				val = null;
			} else {
				val = Number(val);
			}

			obj[prop] = val;
			return obj;
		}, {});

		/**
		 * Is stdout a TTY? Colored output is enabled when `true`.
		 */

		function useColors() {
			return 'colors' in exports.inspectOpts ?
				Boolean(exports.inspectOpts.colors) :
				tty.isatty(process.stderr.fd);
		}

		/**
		 * Adds ANSI color escape codes if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			const {namespace: name, useColors} = this;

			if (useColors) {
				const c = this.color;
				const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
				const prefix = `  ${colorCode};1m${name} \u001B[0m`;

				args[0] = prefix + args[0].split('\n').join('\n' + prefix);
				args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
			} else {
				args[0] = getDate() + name + ' ' + args[0];
			}
		}

		function getDate() {
			if (exports.inspectOpts.hideDate) {
				return '';
			}
			return new Date().toISOString() + ' ';
		}

		/**
		 * Invokes `util.format()` with the specified arguments and writes to stderr.
		 */

		function log(...args) {
			return process.stderr.write(util.format(...args) + '\n');
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			if (namespaces) {
				process.env.DEBUG = namespaces;
			} else {
				// If you set a process.env field to null or undefined, it gets cast to the
				// string 'null' or 'undefined'. Just delete instead.
				delete process.env.DEBUG;
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
			return process.env.DEBUG;
		}

		/**
		 * Init logic for `debug` instances.
		 *
		 * Create a new `inspectOpts` object in case `useColors` is set
		 * differently for a particular `debug` instance.
		 */

		function init(debug) {
			debug.inspectOpts = {};

			const keys = Object.keys(exports.inspectOpts);
			for (let i = 0; i < keys.length; i++) {
				debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %o to `util.inspect()`, all on a single line.
		 */

		formatters.o = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts)
				.split('\n')
				.map(str => str.trim())
				.join(' ');
		};

		/**
		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
		 */

		formatters.O = function (v) {
			this.inspectOpts.colors = this.useColors;
			return util.inspect(v, this.inspectOpts);
		}; 
	} (node, node.exports));
	return node.exports;
}

var browser = {exports: {}};

/* eslint-env browser */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {
		/**
		 * This is the web browser implementation of `debug()`.
		 */

		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = localstorage();
		exports.destroy = (() => {
			let warned = false;

			return () => {
				if (!warned) {
					warned = true;
					console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
				}
			};
		})();

		/**
		 * Colors.
		 */

		exports.colors = [
			'#0000CC',
			'#0000FF',
			'#0033CC',
			'#0033FF',
			'#0066CC',
			'#0066FF',
			'#0099CC',
			'#0099FF',
			'#00CC00',
			'#00CC33',
			'#00CC66',
			'#00CC99',
			'#00CCCC',
			'#00CCFF',
			'#3300CC',
			'#3300FF',
			'#3333CC',
			'#3333FF',
			'#3366CC',
			'#3366FF',
			'#3399CC',
			'#3399FF',
			'#33CC00',
			'#33CC33',
			'#33CC66',
			'#33CC99',
			'#33CCCC',
			'#33CCFF',
			'#6600CC',
			'#6600FF',
			'#6633CC',
			'#6633FF',
			'#66CC00',
			'#66CC33',
			'#9900CC',
			'#9900FF',
			'#9933CC',
			'#9933FF',
			'#99CC00',
			'#99CC33',
			'#CC0000',
			'#CC0033',
			'#CC0066',
			'#CC0099',
			'#CC00CC',
			'#CC00FF',
			'#CC3300',
			'#CC3333',
			'#CC3366',
			'#CC3399',
			'#CC33CC',
			'#CC33FF',
			'#CC6600',
			'#CC6633',
			'#CC9900',
			'#CC9933',
			'#CCCC00',
			'#CCCC33',
			'#FF0000',
			'#FF0033',
			'#FF0066',
			'#FF0099',
			'#FF00CC',
			'#FF00FF',
			'#FF3300',
			'#FF3333',
			'#FF3366',
			'#FF3399',
			'#FF33CC',
			'#FF33FF',
			'#FF6600',
			'#FF6633',
			'#FF9900',
			'#FF9933',
			'#FFCC00',
			'#FFCC33'
		];

		/**
		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
		 * and the Firebug extension (any Firefox version) are known
		 * to support "%c" CSS customizations.
		 *
		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
		 */

		// eslint-disable-next-line complexity
		function useColors() {
			// NB: In an Electron preload script, document will be defined but not fully
			// initialized. Since we know we're in Chrome, we'll just detect this case
			// explicitly
			if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
				return true;
			}

			// Internet Explorer and Edge do not support colors.
			if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
				return false;
			}

			// Is webkit? http://stackoverflow.com/a/16459606/376773
			// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
			return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
				// Is firebug? http://stackoverflow.com/a/398120/376773
				(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
				// Is firefox >= v31?
				// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
				// Double check webkit in userAgent just in case we are in a worker
				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}

		/**
		 * Colorize log arguments if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
			args[0] = (this.useColors ? '%c' : '') +
				this.namespace +
				(this.useColors ? ' %c' : ' ') +
				args[0] +
				(this.useColors ? '%c ' : ' ') +
				'+' + module.exports.humanize(this.diff);

			if (!this.useColors) {
				return;
			}

			const c = 'color: ' + this.color;
			args.splice(1, 0, c, 'color: inherit');

			// The final "%c" is somewhat tricky, because there could be other
			// arguments passed either before or after the %c, so we need to
			// figure out the correct index to insert the CSS into
			let index = 0;
			let lastC = 0;
			args[0].replace(/%[a-zA-Z%]/g, match => {
				if (match === '%%') {
					return;
				}
				index++;
				if (match === '%c') {
					// We only are interested in the *last* %c
					// (the user may have provided their own)
					lastC = index;
				}
			});

			args.splice(lastC, 0, c);
		}

		/**
		 * Invokes `console.debug()` when available.
		 * No-op when `console.debug` is not a "function".
		 * If `console.debug` is not available, falls back
		 * to `console.log`.
		 *
		 * @api public
		 */
		exports.log = console.debug || console.log || (() => {});

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */
		function save(namespaces) {
			try {
				if (namespaces) {
					exports.storage.setItem('debug', namespaces);
				} else {
					exports.storage.removeItem('debug');
				}
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */
		function load() {
			let r;
			try {
				r = exports.storage.getItem('debug');
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}

			// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
			if (!r && typeof process !== 'undefined' && 'env' in process) {
				r = process.env.DEBUG;
			}

			return r;
		}

		/**
		 * Localstorage attempts to return the localstorage.
		 *
		 * This is necessary because safari throws
		 * when a user disables cookies/localstorage
		 * and you attempt to access it.
		 *
		 * @return {LocalStorage}
		 * @api private
		 */

		function localstorage() {
			try {
				// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
				// The Browser also has localStorage in the global context.
				return localStorage;
			} catch (error) {
				// Swallow
				// XXX (@Qix-) should we be logging these?
			}
		}

		module.exports = requireCommon()(exports);

		const {formatters} = module.exports;

		/**
		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
		 */

		formatters.j = function (v) {
			try {
				return JSON.stringify(v);
			} catch (error) {
				return '[UnexpectedJSONParseError]: ' + error.message;
			}
		}; 
	} (browser, browser.exports));
	return browser.exports;
}

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src.exports;
	hasRequiredSrc = 1;
	if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
		src.exports = requireBrowser();
	} else {
		src.exports = requireNode();
	}
	return src.exports;
}

var debug$1;

var debug_1 = function () {
  if (!debug$1) {
    try {
      /* eslint global-require: off */
      debug$1 = requireSrc()("follow-redirects");
    }
    catch (error) { /* */ }
    if (typeof debug$1 !== "function") {
      debug$1 = function () { /* */ };
    }
  }
  debug$1.apply(null, arguments);
};

var url = require$$0$1;
var URL$1 = url.URL;
var http = require$$3;
var https = require$$4;
var Writable = stream.Writable;
var assert = require$$4$1;
var debug = debug_1;

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

var InvalidUrlError = createErrorType(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
);
// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  destroyRequest(this._currentRequest);
  this._currentRequest.abort();
  this.emit("abort");
};

RedirectableRequest.prototype.destroy = function (error) {
  destroyRequest(this._currentRequest, error);
  destroy.call(this, error);
  return this;
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!isString(data) && !isBuffer(data)) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (isFunction(data)) {
    callback = data;
    data = encoding = null;
  }
  else if (isFunction(encoding)) {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;

  // Destroys the socket on timeout
  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Stops a timeout from triggering
  function clearTimer() {
    // Clear the timeout
    if (self._timeout) {
      clearTimeout(self._timeout);
      self._timeout = null;
    }

    // Clean up all attached listeners
    self.removeListener("abort", clearTimer);
    self.removeListener("error", clearTimer);
    self.removeListener("response", clearTimer);
    self.removeListener("close", clearTimer);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!self.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Attach callback if passed
  if (callback) {
    this.on("timeout", callback);
  }

  // Start the timer if or when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  // Clean up on events
  this.on("socket", destroyOnTimeout);
  this.on("abort", clearTimer);
  this.on("error", clearTimer);
  this.on("response", clearTimer);
  this.on("close", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.slice(0, -1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request and set up its event handlers
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  request._redirectable = this;
  for (var event of events) {
    request.on(event, eventHandlers[event]);
  }

  // RFC7230§5.3.1: When making a request directly to an origin server, […]
  // a client MUST send only the absolute path […] as the request-target.
  this._currentUrl = /^\//.test(this._options.path) ?
    url.format(this._options) :
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.

  // If the response is not a redirect; return it as-is
  var location = response.headers.location;
  if (!location || this._options.followRedirects === false ||
      statusCode < 300 || statusCode >= 400) {
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
    return;
  }

  // The response is a redirect, so abort the current request
  destroyRequest(this._currentRequest);
  // Discard the remainder of the response to avoid waiting for data
  response.destroy();

  // RFC7231§6.4: A client SHOULD detect and intervene
  // in cyclical redirections (i.e., "infinite" redirection loops).
  if (++this._redirectCount > this._options.maxRedirects) {
    this.emit("error", new TooManyRedirectsError());
    return;
  }

  // Store the request headers if applicable
  var requestHeaders;
  var beforeRedirect = this._options.beforeRedirect;
  if (beforeRedirect) {
    requestHeaders = Object.assign({
      // The Host header was set by nativeProtocol.request
      Host: response.req.getHeader("host"),
    }, this._options.headers);
  }

  // RFC7231§6.4: Automatic redirection needs to done with
  // care for methods not known to be safe, […]
  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
  // the request method from POST to GET for the subsequent request.
  var method = this._options.method;
  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    this._options.method = "GET";
    // Drop a possible entity and headers related to it
    this._requestBodyBuffers = [];
    removeMatchingHeaders(/^content-/i, this._options.headers);
  }

  // Drop the Host header, as the redirect might lead to a different host
  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

  // If the redirect is relative, carry over the host of the last request
  var currentUrlParts = url.parse(this._currentUrl);
  var currentHost = currentHostHeader || currentUrlParts.host;
  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    url.format(Object.assign(currentUrlParts, { host: currentHost }));

  // Determine the URL of the redirection
  var redirectUrl;
  try {
    redirectUrl = url.resolve(currentUrl, location);
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
    return;
  }

  // Create the redirected request
  debug("redirecting to", redirectUrl);
  this._isRedirect = true;
  var redirectUrlParts = url.parse(redirectUrl);
  Object.assign(this._options, redirectUrlParts);

  // Drop confidential headers when redirecting to a less secure protocol
  // or to a different domain that is not a superdomain
  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
     redirectUrlParts.protocol !== "https:" ||
     redirectUrlParts.host !== currentHost &&
     !isSubdomain(redirectUrlParts.host, currentHost)) {
    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
  }

  // Evaluate the beforeRedirect callback
  if (isFunction(beforeRedirect)) {
    var responseDetails = {
      headers: response.headers,
      statusCode: statusCode,
    };
    var requestDetails = {
      url: currentUrl,
      method: method,
      headers: requestHeaders,
    };
    try {
      beforeRedirect(this._options, responseDetails, requestDetails);
    }
    catch (err) {
      this.emit("error", err);
      return;
    }
    this._sanitizeOptions(this._options);
  }

  // Perform the redirected request
  try {
    this._performRequest();
  }
  catch (cause) {
    this.emit("error", new RedirectionError({ cause: cause }));
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (isString(input)) {
        var parsed;
        try {
          parsed = urlToOptions(new URL$1(input));
        }
        catch (err) {
          /* istanbul ignore next */
          parsed = url.parse(input);
        }
        if (!isString(parsed.protocol)) {
          throw new InvalidUrlError({ input });
        }
        input = parsed;
      }
      else if (URL$1 && (input instanceof URL$1)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (isFunction(options)) {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;
      if (!isString(options.host) && !isString(options.hostname)) {
        options.hostname = "::1";
      }

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return (lastValue === null || typeof lastValue === "undefined") ?
    undefined : String(lastValue).trim();
}

function createErrorType(code, message, baseClass) {
  // Create constructor
  function CustomError(properties) {
    Error.captureStackTrace(this, this.constructor);
    Object.assign(this, properties || {});
    this.code = code;
    this.message = this.cause ? message + ": " + this.cause.message : message;
  }

  // Attach constructor and set default properties
  CustomError.prototype = new (baseClass || Error)();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  return CustomError;
}

function destroyRequest(request, error) {
  for (var event of events) {
    request.removeListener(event, eventHandlers[event]);
  }
  request.on("error", noop);
  request.destroy(error);
}

function isSubdomain(subdomain, domain) {
  assert(isString(subdomain) && isString(domain));
  var dot = subdomain.length - domain.length - 1;
  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}

function isString(value) {
  return typeof value === "string" || value instanceof String;
}

function isFunction(value) {
  return typeof value === "function";
}

function isBuffer(value) {
  return typeof value === "object" && ("length" in value);
}

// Exports
followRedirects$1.exports = wrap({ http: http, https: https });
followRedirects$1.exports.wrap = wrap;

var followRedirectsExports = followRedirects$1.exports;
var followRedirects = /*@__PURE__*/getDefaultExportFromCjs(followRedirectsExports);

const VERSION = "1.6.2";

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

const DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform.classes.Blob;
  const protocol = parseProtocol(uri);

  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }

  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;

    const match = DATA_URL_PATTERN.exec(uri);

    if (!match) {
      throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
    }

    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? 'base64' : 'utf8');

    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
      }

      return new _Blob([buffer], {type: mime});
    }

    return buffer;
  }

  throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1000 / freq;
  let timer = null;
  return function throttled(force, args) {
    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, args);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, args);
      }, threshold - (now - timestamp));
    }
  };
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

const kInternals = Symbol('internals');

class AxiosTransformStream extends stream.Transform{
  constructor(options) {
    options = utils$1.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils$1.isUndefined(source[prop]);
    });

    super({
      readableHighWaterMark: options.chunkSize
    });

    const self = this;

    const internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };

    const _speedometer = speedometer(internals.ticksRate * options.samplesCount, internals.timeWindow);

    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });

    let bytesNotified = 0;

    internals.updateProgress = throttle(function throttledHandler() {
      const totalBytes = internals.length;
      const bytesTransferred = internals.bytesSeen;
      const progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self.destroyed) return;

      const rate = _speedometer(progressBytes);

      bytesNotified = bytesTransferred;

      process.nextTick(() => {
        self.emit('progress', {
          'loaded': bytesTransferred,
          'total': totalBytes,
          'progress': totalBytes ? (bytesTransferred / totalBytes) : undefined,
          'bytes': progressBytes,
          'rate': rate ? rate : undefined,
          'estimated': rate && totalBytes && bytesTransferred <= totalBytes ?
            (totalBytes - bytesTransferred) / rate : undefined
        });
      });
    }, internals.ticksRate);

    const onFinish = () => {
      internals.updateProgress(true);
    };

    this.once('end', onFinish);
    this.once('error', onFinish);
  }

  _read(size) {
    const internals = this[kInternals];

    if (internals.onReadCallback) {
      internals.onReadCallback();
    }

    return super._read(size);
  }

  _transform(chunk, encoding, callback) {
    const self = this;
    const internals = this[kInternals];
    const maxRate = internals.maxRate;

    const readableHighWaterMark = this.readableHighWaterMark;

    const timeWindow = internals.timeWindow;

    const divider = 1000 / timeWindow;
    const bytesThreshold = (maxRate / divider);
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;

    function pushChunk(_chunk, _callback) {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;

      if (internals.isCaptured) {
        internals.updateProgress();
      }

      if (self.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    }

    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;

      if (maxRate) {
        const now = Date.now();

        if (!internals.ts || (passed = (now - internals.ts)) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }

        bytesLeft = bytesThreshold - internals.bytes;
      }

      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }

        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }

      if (maxChunkSize && chunkSize > maxChunkSize && (chunkSize - maxChunkSize) > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }

      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };

    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }

      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }

  setLength(length) {
    this[kInternals].length = +length;
    return this;
  }
}

var AxiosTransformStream$1 = AxiosTransformStream;

const {asyncIterator} = Symbol;

const readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};

var readBlob$1 = readBlob;

const BOUNDARY_ALPHABET = utils$1.ALPHABET.ALPHA_DIGIT + '-_';

const textEncoder = new require$$1.TextEncoder();

const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;

class FormDataPart {
  constructor(name, value) {
    const {escapeName} = this.constructor;
    const isStringValue = utils$1.isString(value);

    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${
      !isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''
    }${CRLF}`;

    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
    }

    this.headers = textEncoder.encode(headers + CRLF);

    this.contentLength = isStringValue ? value.byteLength : value.size;

    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;

    this.name = name;
    this.value = value;
  }

  async *encode(){
    yield this.headers;

    const {value} = this;

    if(utils$1.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob$1(value);
    }

    yield CRLF_BYTES;
  }

  static escapeName(name) {
      return String(name).replace(/[\r\n"]/g, (match) => ({
        '\r' : '%0D',
        '\n' : '%0A',
        '"' : '%22',
      }[match]));
  }
}

const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + utils$1.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};

  if(!utils$1.isFormData(form)) {
    throw TypeError('FormData instance required');
  }

  if (boundary.length < 1 || boundary.length > 70) {
    throw Error('boundary must be 10-70 characters long')
  }

  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;

  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });

  contentLength += boundaryBytes.byteLength * parts.length;

  contentLength = utils$1.toFiniteNumber(contentLength);

  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  };

  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }

  headersHandler && headersHandler(computedHeaders);

  return stream.Readable.from((async function *() {
    for(const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }

    yield footerBytes;
  })());
};

var formDataToStream$1 = formDataToStream;

class ZlibHeaderTransformStream extends stream.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }

  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) { // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C 
        this.push(header, encoding);
      }
    }

    this.__transform(chunk, encoding, callback);
  }
}

var ZlibHeaderTransformStream$1 = ZlibHeaderTransformStream;

const callbackify = (fn, reducer) => {
  return utils$1.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};

var callbackify$1 = callbackify;

const zlibOptions = {
  flush: zlib.constants.Z_SYNC_FLUSH,
  finishFlush: zlib.constants.Z_SYNC_FLUSH
};

const brotliOptions = {
  flush: zlib.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
};

const isBrotliSupported = utils$1.isFunction(zlib.createBrotliDecompress);

const {http: httpFollow, https: httpsFollow} = followRedirects;

const isHttps = /https:?/;

const supportedProtocols = platform.protocols.map(protocol => {
  return protocol + ':';
});

/**
 * If the proxy or config beforeRedirects functions are defined, call them with the options
 * object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options);
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 *
 * @returns {http.ClientRequestArgs}
 */
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = getProxyForUrl_1(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    // Basic proxy authorization
    if (proxy.username) {
      proxy.auth = (proxy.username || '') + ':' + (proxy.password || '');
    }

    if (proxy.auth) {
      // Support proxy auth object form
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || '') + ':' + (proxy.auth.password || '');
      }
      const base64 = Buffer
        .from(proxy.auth, 'utf8')
        .toString('base64');
      options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    }

    options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    // Replace 'host' since options is not a URL object
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(':') ? proxy.protocol : `${proxy.protocol}:`;
    }
  }

  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}

const isHttpAdapterSupported = typeof process !== 'undefined' && utils$1.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;

    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };

    const _resolve = (value) => {
      done(value);
      resolve(value);
    };

    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    };

    asyncExecutor(_resolve, _reject, (onDoneHandler) => (onDone = onDoneHandler)).catch(_reject);
  })
};

const resolveFamily = ({address, family}) => {
  if (!utils$1.isString(address)) {
    throw TypeError('address must be a string');
  }
  return ({
    address,
    family: family || (address.indexOf('.') < 0 ? 6 : 4)
  });
};

const buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {address, family});

/*eslint consistent-return:0*/
var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    let {data, lookup, family} = config;
    const {responseType, responseEncoding} = config;
    const method = config.method.toUpperCase();
    let isDone;
    let rejected = false;
    let req;

    if (lookup) {
      const _lookup = callbackify$1(lookup, (value) => utils$1.isArray(value) ? value : [value]);
      // hotfix to support opt.all option which is required for node 20.x
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          const addresses = utils$1.isArray(arg0) ? arg0.map(addr => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];

          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }

    // temporary internal emitter until the AxiosRequest class will be implemented
    const emitter = new EventEmitter();

    const onFinished = () => {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', abort);
      }

      emitter.removeAllListeners();
    };

    onDone((value, isRejected) => {
      isDone = true;
      if (isRejected) {
        rejected = true;
        onFinished();
      }
    });

    function abort(reason) {
      emitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
    }

    emitter.once('abort', reject);

    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
      }
    }

    // Parse url
    const fullPath = buildFullPath(config.baseURL, config.url);
    const parsed = new URL(fullPath, 'http://localhost');
    const protocol = parsed.protocol || supportedProtocols[0];

    if (protocol === 'data:') {
      let convertedData;

      if (method !== 'GET') {
        return settle(resolve, reject, {
          status: 405,
          statusText: 'method not allowed',
          headers: {},
          config
        });
      }

      try {
        convertedData = fromDataURI(config.url, responseType === 'blob', {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
      }

      if (responseType === 'text') {
        convertedData = convertedData.toString(responseEncoding);

        if (!responseEncoding || responseEncoding === 'utf8') {
          convertedData = utils$1.stripBOM(convertedData);
        }
      } else if (responseType === 'stream') {
        convertedData = stream.Readable.from(convertedData);
      }

      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: 'OK',
        headers: new AxiosHeaders$1(),
        config
      });
    }

    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError(
        'Unsupported protocol ' + protocol,
        AxiosError.ERR_BAD_REQUEST,
        config
      ));
    }

    const headers = AxiosHeaders$1.from(config.headers).normalize();

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    // User-Agent is specified; handle case where no UA header is desired
    // Only set header if it hasn't been set in config
    headers.set('User-Agent', 'axios/' + VERSION, false);

    const onDownloadProgress = config.onDownloadProgress;
    const onUploadProgress = config.onUploadProgress;
    const maxRate = config.maxRate;
    let maxUploadRate = undefined;
    let maxDownloadRate = undefined;

    // support for spec compliant FormData objects
    if (utils$1.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);

      data = formDataToStream$1(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || undefined
      });
      // support for https://www.npmjs.com/package/form-data api
    } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders)) {
      headers.set(data.getHeaders());

      if (!headers.hasContentLength()) {
        try {
          const knownLength = await require$$1.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          /*eslint no-empty:0*/
        } catch (e) {
        }
      }
    } else if (utils$1.isBlob(data)) {
      data.size && headers.setContentType(data.type || 'application/octet-stream');
      headers.setContentLength(data.size || 0);
      data = stream.Readable.from(readBlob$1(data));
    } else if (data && !utils$1.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$1.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$1.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new AxiosError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }

      // Add Content-Length header if data exists
      headers.setContentLength(data.length, false);

      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new AxiosError(
          'Request body larger than maxBodyLength limit',
          AxiosError.ERR_BAD_REQUEST,
          config
        ));
      }
    }

    const contentLength = utils$1.toFiniteNumber(headers.getContentLength());

    if (utils$1.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }

    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils$1.isStream(data)) {
        data = stream.Readable.from(data, {objectMode: false});
      }

      data = stream.pipeline([data, new AxiosTransformStream$1({
        length: contentLength,
        maxRate: utils$1.toFiniteNumber(maxUploadRate)
      })], utils$1.noop);

      onUploadProgress && data.on('progress', progress => {
        onUploadProgress(Object.assign(progress, {
          upload: true
        }));
      });
    }

    // HTTP basic authentication
    let auth = undefined;
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password || '';
      auth = username + ':' + password;
    }

    if (!auth && parsed.username) {
      const urlUsername = parsed.username;
      const urlPassword = parsed.password;
      auth = urlUsername + ':' + urlPassword;
    }

    auth && headers.delete('authorization');

    let path;

    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, '');
    } catch (err) {
      const customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      return reject(customErr);
    }

    headers.set(
      'Accept-Encoding',
      'gzip, compress, deflate' + (isBrotliSupported ? ', br' : ''), false
      );

    const options = {
      path,
      method: method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };

    // cacheable-lookup integration hotfix
    !utils$1.isUndefined(lookup) && (options.lookup = lookup);

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
      setProxy(options, config.proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    let transport;
    const isHttpsRequest = isHttps.test(options.protocol);
    options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsRequest ? require$$4 : require$$3;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      if (config.beforeRedirect) {
        options.beforeRedirects.config = config.beforeRedirect;
      }
      transport = isHttpsRequest ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    } else {
      // follow-redirects does not skip comparison, so it should always succeed for axios -1 unlimited
      options.maxBodyLength = Infinity;
    }

    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }

    // Create the request
    req = transport.request(options, function handleResponse(res) {
      if (req.destroyed) return;

      const streams = [res];

      const responseLength = +res.headers['content-length'];

      if (onDownloadProgress) {
        const transformStream = new AxiosTransformStream$1({
          length: utils$1.toFiniteNumber(responseLength),
          maxRate: utils$1.toFiniteNumber(maxDownloadRate)
        });

        onDownloadProgress && transformStream.on('progress', progress => {
          onDownloadProgress(Object.assign(progress, {
            download: true
          }));
        });

        streams.push(transformStream);
      }

      // decompress the response body transparently if required
      let responseStream = res;

      // return the last request in case of redirects
      const lastRequest = res.req || req;

      // if decompress disabled we should not decompress
      if (config.decompress !== false && res.headers['content-encoding']) {
        // if no content, but headers still say that it is encoded,
        // remove the header not confuse downstream operations
        if (method === 'HEAD' || res.statusCode === 204) {
          delete res.headers['content-encoding'];
        }

        switch ((res.headers['content-encoding'] || '').toLowerCase()) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'x-gzip':
        case 'compress':
        case 'x-compress':
          // add the unzipper to the body stream processing pipeline
          streams.push(zlib.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'deflate':
          streams.push(new ZlibHeaderTransformStream$1());

          // add the unzipper to the body stream processing pipeline
          streams.push(zlib.createUnzip(zlibOptions));

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        case 'br':
          if (isBrotliSupported) {
            streams.push(zlib.createBrotliDecompress(brotliOptions));
            delete res.headers['content-encoding'];
          }
        }
      }

      responseStream = streams.length > 1 ? stream.pipeline(streams, utils$1.noop) : streams[0];

      const offListeners = stream.finished(responseStream, () => {
        offListeners();
        onFinished();
      });

      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders$1(res.headers),
        config,
        request: lastRequest
      };

      if (responseType === 'stream') {
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;

        responseStream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            // stream.destroy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            responseStream.destroy();
            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });

        responseStream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }

          const err = new AxiosError(
            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
            AxiosError.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err);
          reject(err);
        });

        responseStream.on('error', function handleStreamError(err) {
          if (req.destroyed) return;
          reject(AxiosError.from(err, null, config, lastRequest));
        });

        responseStream.on('end', function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== 'arraybuffer') {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === 'utf8') {
                responseData = utils$1.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }

      emitter.once('abort', err => {
        if (!responseStream.destroyed) {
          responseStream.emit('error', err);
          responseStream.destroy();
        }
      });
    });

    emitter.once('abort', err => {
      reject(err);
      req.destroy(err);
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      // @todo remove
      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
      reject(AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      socket.setKeepAlive(true, 1000 * 60);
    });

    // Handle request timeout
    if (config.timeout) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      const timeout = parseInt(config.timeout, 10);

      if (Number.isNaN(timeout)) {
        reject(new AxiosError(
          'error trying to parse `config.timeout` to int',
          AxiosError.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));

        return;
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devouring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, function handleRequestTimeout() {
        if (isDone) return;
        let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
        const transitional = config.transitional || transitionalDefaults;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError(
          timeoutErrorMessage,
          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
          config,
          req
        ));
        abort();
      });
    }


    // Send the request
    if (utils$1.isStream(data)) {
      let ended = false;
      let errored = false;

      data.on('end', () => {
        ended = true;
      });

      data.once('error', err => {
        errored = true;
        req.destroy(err);
      });

      data.on('close', () => {
        if (!ended && !errored) {
          abort(new CanceledError('Request stream has been aborted', config, req));
        }
      });

      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

var cookies = platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils$1.isString(path) && cookie.push('path=' + path);

      utils$1.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  };

var isURLSameOrigin = platform.hasStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils$1.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    let {responseType, withXSRFToken} = config;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils$1.isFormData(requestData)) {
      if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if ((contentType = requestHeaders.getContentType()) !== false) {
        // fix semicolon duplication issue for ReactNative FormData implementation
        const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
        requestHeaders.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if(platform.hasStandardBrowserEnv) {
      withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));

      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(fullPath))) {
        // Add xsrf header
        const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

        if (xsrfValue) {
          requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({caseless}, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils$1.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils$1.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// this module should only have a default export
var axios$1 = axios;

var HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

var Requests = /** @class */ (function () {
    function Requests(config) {
        Requests.config = config;
    }
    Requests.setBaseUrl = function (url) {
        Requests.baseUrl = url;
    };
    Requests.setAuthToken = function (token) {
        Requests.authToken = token;
    };
    Requests.setCommunityID = function (community_id) {
        Requests.community_id = community_id;
    };
    Requests.request = function (method, url, data, fileData) {
        var headers = {
            'Content-Type': 'application/json',
        };
        if (Requests.authToken) {
            headers['Authorization'] = "Bearer ".concat(Requests.authToken);
        }
        if (fileData) {
            headers['Content-Type'] = 'multipart/form-data';
        }
        url = url.replace(/\/\//g, '/');
        var uri = "".concat(Requests.baseUrl).concat(url);
        var axiosPromise = axios$1({
            method: method,
            url: uri,
            data: fileData || data,
            headers: headers,
        });
        return axiosPromise;
    };
    Requests.get = function (url, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                if (Array.isArray(value)) {
                    return value.map(function (item) { return "".concat(key, "[]=").concat(encodeURIComponent(item)); }).join('&');
                }
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        if (Requests.community_id) {
            var separator = url.includes('?') ? '&' : '?';
            url = "".concat(url).concat(separator, "community_id=").concat(Requests.community_id);
        }
        return Requests.request('GET', url);
    };
    Requests.post = function (url, data, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        if (Requests.community_id) {
            data = __assign(__assign({}, data), { communities: [Requests.community_id] });
        }
        return Requests.request('POST', url, data);
    };
    Requests.put = function (url, data, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        if (Requests.community_id) {
            data = __assign(__assign({}, data), { community_id: Requests.community_id });
        }
        return Requests.request('PUT', url, data);
    };
    Requests.delete = function (url, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        if (Requests.community_id) {
            var separator = url.includes('?') ? '&' : '?';
            url = "".concat(url).concat(separator, "community_id=").concat(Requests.community_id);
        }
        return Requests.request('DELETE', url);
    };
    Requests.uploadFile = function (url, filename, file, data, params, onUploadProgress) {
        // Process URL and params
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        // Prepare FormData
        var formData = new FormData();
        formData.append(filename, file);
        if (Requests.community_id) {
            data = __assign(__assign({}, data), { communities: [Requests.community_id] });
        }
        for (var key in data) {
            formData.append(key, data[key]);
        }
        // Prepare headers
        var headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = "Bearer ".concat(Requests.authToken);
        }
        // Format URL correctly
        var uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        // Make the request
        return axios$1({
            method: 'POST',
            url: uri,
            data: formData,
            headers: headers,
            onUploadProgress: onUploadProgress,
        });
    };
    Requests.uploadBlob = function (url, filename, blob, data, params, onUploadProgress) {
        // Process URL and params
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        // Prepare FormData
        var formData = new FormData();
        formData.append(filename, blob);
        if (Requests.community_id) {
            data = __assign(__assign({}, data), { communities: [Requests.community_id] });
        }
        for (var key in data) {
            formData.append(key, data[key]);
        }
        // Prepare headers
        var headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = "Bearer ".concat(Requests.authToken);
        }
        // Format URL correctly
        var uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        // Make the request
        return axios$1({
            method: 'POST',
            url: uri,
            data: formData,
            headers: headers,
            onUploadProgress: onUploadProgress,
        });
    };
    // Method adapted for browser environments
    Requests.uploadFileInChunks = function (file, uploadUrl, onProgress, data, chunkSize) {
        return __awaiter(this, void 0, void 0, function () {
            var fileSize, totalChunks, currentChunkIndex, array, identifier, _loop_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!chunkSize) {
                            chunkSize = 1024 * 1024;
                        }
                        fileSize = file.size;
                        totalChunks = Math.ceil(fileSize / chunkSize);
                        currentChunkIndex = 0;
                        array = new Uint32Array(4);
                        window.crypto.getRandomValues(array);
                        identifier = Array.from(array, function (dec) { return ('0' + dec.toString(16)).substr(-2); }).join('');
                        _loop_1 = function () {
                            var start, end, chunk, formData, key, fullUploadUrl, headers;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        start = currentChunkIndex * chunkSize;
                                        end = Math.min(start + chunkSize, fileSize);
                                        chunk = file.slice(start, end);
                                        formData = new FormData();
                                        formData.append('video', chunk, file.name);
                                        formData.append('chunkIndex', currentChunkIndex.toString());
                                        formData.append('totalChunks', totalChunks.toString());
                                        formData.append('identifier', identifier);
                                        // If there's additional data, append each key-value pair to the formData
                                        if (data) {
                                            for (key in data) {
                                                formData.append(key, data[key]);
                                            }
                                        }
                                        fullUploadUrl = "".concat(Requests.baseUrl).concat(uploadUrl);
                                        headers = {};
                                        if (Requests.authToken) {
                                            headers['Authorization'] = "Bearer ".concat(Requests.authToken);
                                        }
                                        // Perform the upload
                                        return [4 /*yield*/, axios$1.post(fullUploadUrl, formData, {
                                                headers: headers,
                                                onUploadProgress: function (progressEvent) {
                                                    progressEvent.loaded; // Bytes uploaded of the current chunk
                                                    if (onProgress) {
                                                        onProgress(fileSize, end);
                                                    }
                                                }
                                            })];
                                    case 1:
                                        // Perform the upload
                                        _b.sent();
                                        currentChunkIndex++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1:
                        if (!(currentChunkIndex <= totalChunks)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Requests.processRoute = function (route, data, routeReplace, params) {
        var url = route.url;
        if (routeReplace) {
            for (var key in routeReplace) {
                url = url.replace("{" + key + "}", routeReplace[key]);
            }
        }
        if (route.method == HTTP_METHODS.GET) {
            return Requests.get(url, params);
        }
        else if (route.method == HTTP_METHODS.POST) {
            return Requests.post(url, data, params);
        }
        else if (route.method == HTTP_METHODS.PUT) {
            return Requests.put(url, data, params);
        }
        else if (route.method == HTTP_METHODS.DELETE) {
            return Requests.delete(url, params);
        }
        return Requests.get(url);
    };
    Requests.baseUrl = "";
    Requests.authToken = "";
    Requests.community_id = "";
    return Requests;
}());

var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.setRootDomain = function (rootDomain) {
        Storage.rootDomain = rootDomain;
    };
    Storage.getStorageKey = function (key) {
        return Storage.rootDomain ? "".concat(Storage.rootDomain, ":").concat(key) : key;
    };
    Storage.set = function (key, value) {
        // 1. Always update in-memory fallback for the current process
        Storage.data[key] = value;
        // 2. Only attempt browser storage if window exists
        if (typeof window !== 'undefined') {
            try {
                var serializedValue = JSON.stringify(value);
                window.localStorage.setItem(Storage.getStorageKey(key), serializedValue);
            }
            catch (e) {
                try {
                    var serializedValue = JSON.stringify(value);
                    window.sessionStorage.setItem(Storage.getStorageKey(key), serializedValue);
                }
                catch (e) {
                    try {
                        this.setCookie(key, value, 31);
                    }
                    catch (e) { }
                }
            }
        }
    };
    Storage.get = function (key) {
        // 1. Try Browser Storage if available
        if (typeof window !== 'undefined') {
            try {
                var serializedValue = window.localStorage.getItem(Storage.getStorageKey(key));
                if (serializedValue !== null)
                    return JSON.parse(serializedValue);
            }
            catch (e) {
                try {
                    var serializedValue = window.sessionStorage.getItem(Storage.getStorageKey(key));
                    if (serializedValue !== null)
                        return JSON.parse(serializedValue);
                }
                catch (e) { }
            }
        }
        // 2. Try Cookie (getCookie is now SSR safe)
        var value = null;
        try {
            value = Storage.getCookie(key);
        }
        catch (e) { }
        // 3. Fallback to in-memory data
        if (!value) {
            value = Storage.data[key];
        }
        return value;
    };
    Storage.setAuthToken = function (token) {
        if (Storage.rootDomain) {
            if (token) {
                this.setCookie('glitch_auth_token', token, 31);
            }
            else {
                this.eraseCookie('glitch_auth_token');
            }
        }
        Storage.set('glitch_auth_token', token);
    };
    Storage.getAuthToken = function () {
        var token = Storage.getCookie('glitch_auth_token');
        if (!token || token === 'null') {
            token = Storage.get('glitch_auth_token');
        }
        return (token === 'null' || !token) ? null : token;
    };
    Storage.eraseCookie = function (name) {
        // Use typeof check to prevent ReferenceError
        if (typeof document !== 'undefined') {
            document.cookie =
                name +
                    '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    };
    Storage.setCookie = function (name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        if (typeof document !== 'undefined') {
            document.cookie =
                name +
                    '=' +
                    (value || '') +
                    expires +
                    '; path=/; domain=' +
                    Storage.rootDomain +
                    '; SameSite=Lax; Secure';
        }
    };
    Storage.getCookie = function (name) {
        // Use typeof check to prevent ReferenceError
        if (typeof document !== 'undefined') {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    };
    Storage.setTokenExpiry = function (expiresInSeconds) {
        var expiryTime = Date.now() + (expiresInSeconds * 1000);
        Storage.set('glitch_token_expiry', expiryTime);
        if (Storage.rootDomain && typeof document !== 'undefined') {
            this.setCookie('glitch_token_expiry', expiryTime.toString(), 31);
        }
    };
    Storage.getTokenExpiry = function () {
        var expiry = Storage.getCookie('glitch_token_expiry');
        if (!expiry) {
            expiry = Storage.get('glitch_token_expiry');
        }
        return expiry ? parseInt(expiry) : null;
    };
    Storage.isTokenExpired = function () {
        var expiry = this.getTokenExpiry();
        if (!expiry)
            return false;
        return Date.now() > expiry;
    };
    Storage.rootDomain = '';
    Storage.data = {};
    return Storage;
}());

/**
 * Config
 *
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
var Config = /** @class */ (function () {
    function Config() {
    }
    /**
     * Set the configuration
     *
     * @param baseUrl The url base endpoint of the api
     * @param authToken The JSON Web Token
     */
    Config.setConfig = function (baseUrl, authToken, lock) {
        this.setBaseUrl(baseUrl, lock);
        this.setAuthToken(authToken);
        Requests.setBaseUrl(baseUrl);
        Requests.setAuthToken(authToken);
    };
    /**
     * Sets the endpoint for the API
     *
     * @param baseUrl The url that connects to the APIs base
     * @param lock If set to true, will lock the baseUrl so it cannot be changed
     */
    Config.setBaseUrl = function (baseUrl, lock) {
        if (!this._baseUrlLocked) {
            Config._baseUrl = baseUrl;
            Requests.setBaseUrl(baseUrl);
        }
        if (lock) {
            this._baseUrlLocked = true;
        }
    };
    /**
     * Set the JSON Web Token (JWT) that will be passed to the API
     *
     * @param authToken The JWT
     */
    Config.setAuthToken = function (authToken) {
        Config._authToken = authToken;
        Requests.setAuthToken(authToken);
    };
    /**
     * Set the community to be associated with this config through
     *
     * @param community The object of the community
     */
    Config.setCommunity = function (community) {
        Config._community = community;
        Requests.setCommunityID(community.id);
        LabelManager.initialize(community);
    };
    /**
     * Sets the root level domain so data can be accessed across
     * multiple subdomains
     *
     * @param domain The domain ie: example.com
     */
    Config.setRootDomain = function (domain) {
        if (!domain) {
            console.error("setRootDomain: domain is undefined or null");
            return;
        }
        // If the domain already starts with a dot, keep it.
        // If not, and it's a standard domain, we usually want the dot for subdomains.
        var formattedDomain = domain;
        // REMOVE THIS LINE: formattedDomain = formattedDomain.replace(/^\./, '');
        // We WANT the dot.
        this._rootDomain = formattedDomain;
        Storage.setRootDomain(formattedDomain);
    };
    Config.getRootDomain = function () {
        return this._rootDomain;
    };
    Object.defineProperty(Config, "baseUrl", {
        /**
         * Gets base url
         */
        get: function () {
            return Config._baseUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config, "authToken", {
        /**
         * Gets auth token
         */
        get: function () {
            return Config._authToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Config, "getCommunity", {
        /**
         * Gets the community currently associated
         */
        get: function () {
            return Config._community;
        },
        enumerable: false,
        configurable: true
    });
    Config._baseUrlLocked = false;
    return Config;
}());

var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
    }
    AuthRoutes.routes = {
        login: { url: '/auth/login', method: HTTP_METHODS.POST },
        register: { url: '/auth/register', method: HTTP_METHODS.POST },
        one_time_login: { url: '/auth/oneTimeLoginWithToken', method: HTTP_METHODS.POST },
        forgot_password: { url: '/auth/forgotpassword', method: HTTP_METHODS.POST },
        reset_password: { url: '/auth/resetpassword', method: HTTP_METHODS.POST },
    };
    return AuthRoutes;
}());

var Auth = /** @class */ (function () {
    function Auth() {
    }
    /**
     * Attempts to authenticate a user using their email address.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @param email The email address of the user
     * @param password The password of the user
     *
     * @returns A promise
     */
    Auth.loginWithEmail = function (email, password) {
        return Requests.post(AuthRoutes.routes.login.url, { email: email, password: password });
    };
    /**
     * Attempts to authenticate a user using their username.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @param username The username of the user
     * @param password The password of the user
     *
     * @returns A promise
     */
    Auth.loginWithUsername = function (username, password) {
        return Requests.post(AuthRoutes.routes.login.url, { username: username, password: password });
    };
    /**
     * Attempts to register a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @param data The data the user can register with.
     *
     * @returns A promise
     */
    Auth.register = function (data) {
        return Requests.processRoute(AuthRoutes.routes.register, data);
    };
    /**
     * Request an authentication token to faciliate a one time login of an user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @returns promise
     */
    Auth.oneTimeLogin = function (token) {
        return Requests.processRoute(AuthRoutes.routes.one_time_login, { token: token });
    };
    /**
     * Execute the password reset process using a user's email address.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authForgotPassword
     *
     * @param email The email address
     *
     * @returns promise
     */
    Auth.forgotPasswordWithEmail = function (email) {
        return Requests.processRoute(AuthRoutes.routes.forgot_password, { email: email });
    };
    /**
     * Resets the users password after the forgot password has been executed.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authResetPassword
     *
     * @param data The parameters required to reset the password.
     *
     * @returns promise
     */
    Auth.resetPassword = function (data) {
        return Requests.processRoute(AuthRoutes.routes.reset_password, data);
    };
    return Auth;
}());

var AccessKeysRoute = /** @class */ (function () {
    function AccessKeysRoute() {
    }
    AccessKeysRoute.routes = {
        list: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.GET },
        store: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.POST },
        delete: { url: '/keys/{key_id}', method: HTTP_METHODS.DELETE },
        sendEmail: { url: '/keys/{key_id}/send-email', method: HTTP_METHODS.POST },
    };
    return AccessKeysRoute;
}());

var AccessKeys = /** @class */ (function () {
    function AccessKeys() {
    }
    /**
     * List all access keys for a given title.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/get_titles__title_id__keys
     *
     * @param title_id The UUID of the title.
     * @param params Optional query parameters for pagination.
     * @returns promise
     */
    AccessKeys.list = function (title_id, params) {
        return Requests.processRoute(AccessKeysRoute.routes.list, undefined, { title_id: title_id }, params);
    };
    /**
     * Bulk create access keys from a string of codes.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/post_titles__title_id__keys
     *
     * @param title_id The UUID of the title.
     * @param data The platform and codes to upload.
     * @param data.platform The platform for the keys (e.g., 'steam').
     * @param data.codes A string of codes separated by newlines, commas, or spaces.
     * @returns Promise
     */
    AccessKeys.store = function (title_id, data, params) {
        return Requests.processRoute(AccessKeysRoute.routes.store, data, { title_id: title_id }, params);
    };
    /**
     * Deletes an unassigned access key.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/delete_keys__key_id_
     *
     * @param key_id The UUID of the access key to delete.
     * @returns promise
     */
    AccessKeys.delete = function (key_id, params) {
        return Requests.processRoute(AccessKeysRoute.routes.delete, {}, { key_id: key_id }, params);
    };
    /**
     * Emails the assigned key to the influencer.
     *
     * @param key_id The UUID of the access key.
     * @returns promise
     */
    AccessKeys.sendEmail = function (key_id) {
        return Requests.processRoute(AccessKeysRoute.routes.sendEmail, {}, { key_id: key_id });
    };
    return AccessKeys;
}());

var CompetitionRoutes = /** @class */ (function () {
    function CompetitionRoutes() {
    }
    CompetitionRoutes.routes = {
        list: { url: '/competitions', method: HTTP_METHODS.GET },
        create: { url: '/competitions', method: HTTP_METHODS.POST },
        view: { url: '/competitions/{competition_id}', method: HTTP_METHODS.GET },
        update: { url: '/competitions/{competition_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/competitions/{competition_id}', method: HTTP_METHODS.DELETE },
        addTeam: { url: '/competitions/{competition_id}/addTeam', method: HTTP_METHODS.POST },
        addParticipant: { url: '/competitions/{competition_id}/addParticipant', method: HTTP_METHODS.POST },
        registerTeam: { url: '/competitions/{competition_id}/registerTeam', method: HTTP_METHODS.POST },
        registerUser: { url: '/competitions/{competition_id}/registerUser', method: HTTP_METHODS.POST },
        syncRounds: { url: '/competitions/{competition_id}/syncRounds', method: HTTP_METHODS.GET },
        autoGenerate: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/autoGenerate', method: HTTP_METHODS.GET },
        autoGenerateUserBrackets: { url: '/competitions/{competition_id}/autoGenerateUserBrackets', method: HTTP_METHODS.GET },
        uploadMainImage: { url: '/competitions/{competition_id}/uploadMainImage', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/competitions/{competition_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        invites: { url: '/competitions/{competition_id}/invites', method: HTTP_METHODS.GET },
        sendInvite: { url: '/competitions/{competition_id}/sendInvite', method: HTTP_METHODS.POST },
        acceptInvite: { url: '/competitions/{competition_id}/acceptInvite', method: HTTP_METHODS.POST },
        brackets: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets', method: HTTP_METHODS.GET },
        bracketStore: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets', method: HTTP_METHODS.POST },
        showBracket: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.GET },
        updateBracket: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.PUT },
        destroyBracket: { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.DELETE },
        rounds: { url: '/competitions/{competition_id}/rounds', method: HTTP_METHODS.GET },
        roundStore: { url: '/competitions/{competition_id}/rounds', method: HTTP_METHODS.POST },
        showRound: { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.GET },
        updateRound: { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.PUT },
        destroyRound: { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.DELETE },
        team: { url: '/competitions/{competition_id}/teams', method: HTTP_METHODS.GET },
        teamStore: { url: '/competitions/{competition_id}/teams', method: HTTP_METHODS.POST },
        showTeam: { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.GET },
        updateTeam: { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.PUT },
        destroyTeam: { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.DELETE },
        users: { url: '/competitions/{competition_id}/users', method: HTTP_METHODS.GET },
        competitionUser: { url: '/competitions/{competition_id}/users', method: HTTP_METHODS.POST },
        showCompetitionUser: { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.GET },
        updateCompetitionUser: { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.PUT },
        destroyCompetitionUser: { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.DELETE },
        venues: { url: '/competitions/{competition_id}/venues', method: HTTP_METHODS.GET },
        newVenue: { url: '/competitions/{competition_id}/venues', method: HTTP_METHODS.POST },
        showVenue: { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.GET },
        updateVenue: { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.PUT },
        destroyVenue: { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.DELETE },
        uploadVenueMainImage: { url: '/competitions/{competition_id}/venues/{venue_id}/uploadMainImage', method: HTTP_METHODS.POST },
        userPointsLeaderboard: { url: '/competitions/{competition_id}/userPointsLeaderboard', method: HTTP_METHODS.GET },
        teamPointsLeaderboard: { url: '/competitions/{competition_id}/teamPointsLeaderboard', method: HTTP_METHODS.GET },
        userWinsLeaderboard: { url: '/competitions/{competition_id}/userWinsLeaderboard', method: HTTP_METHODS.GET },
        teamWinsLeaderboard: { url: '/competitions/{competition_id}/teamWinsLeaderboard', method: HTTP_METHODS.GET },
        allLeaderboards: { url: '/competitions/{competition_id}/allLeaderboards', method: HTTP_METHODS.GET },
        me: { url: '/competitions/{competition_id}/me', method: HTTP_METHODS.GET },
    };
    return CompetitionRoutes;
}());

var Competitions = /** @class */ (function () {
    function Competitions() {
    }
    /**
     * List all the competitions
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     *
     * @returns promise
     */
    Competitions.list = function (params) {
        return Requests.processRoute(CompetitionRoutes.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    Competitions.create = function (data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.create, data, undefined, params);
    };
    /**
     * Update a competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateStorage
     *
     * @param competition_id The id of the competition to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Competitions.update = function (competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.update, data, { competition_id: competition_id }, params);
    };
    /**
     * Retrieve the information for a single competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     *
     * @param competition_id The id fo the competition to retrieve.
     *
     * @returns promise
     */
    Competitions.view = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.view, {}, { competition_id: competition_id }, params);
    };
    /**
     * Deletes a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     *
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    Competitions.delete = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.delete, {}, { competition_id: competition_id }, params);
    };
    /**
     * Add a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    Competitions.addTeam = function (competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.addTeam, { team_id: team_id }, { competition_id: competition_id });
    };
    /**
     * Adds participant
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addParticipant
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    Competitions.addParticipant = function (competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.addParticipant, { user_id: user_id }, { competition_id: competition_id });
    };
    /**
     * Register a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    Competitions.registerTeam = function (competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.registerTeam, { team_id: team_id }, { competition_id: competition_id });
    };
    /**
     * Register a user
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerParticipant
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.registerUser = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.registerUser, {}, { competition_id: competition_id });
    };
    /**
     * Sync rounds
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/syncRounds
     *
     * @param competition_id
     * @param number_of_competitors
     * @param competitors_per_bracket
     * @returns promise
     */
    Competitions.syncRounds = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.syncRounds, { competition_id: competition_id });
    };
    /**
     * auto generate team brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateTeamBrackets
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.autoGenerate = function (competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerate, {}, { competition_id: competition_id, round_id: round_id });
    };
    /**
     * auto generate user brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateUserBrackets
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.autoGenerateUserBrackets = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerateUserBrackets, {}, { competition_id: competition_id });
    };
    /**
         * Updates the main image for the event using a File object.
         *
         * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadMainImage
         *
         * @param file The file object to upload.
         * @param data Any additional data to pass along to the upload.
         *
         * @returns promise
         */
    Competitions.uploadCompetitionMainImageFile = function (competition_id, file, data, params) {
        var url = CompetitionRoutes.routes.uploadMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the competition using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Competitions.uploadCompetitionMainImageBlob = function (competition_id, blob, data, params) {
        var url = CompetitionRoutes.routes.uploadMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the banner image for the competition using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Competitions.uploadCompetitionBannerImageFile = function (competition_id, file, data, params) {
        var url = CompetitionRoutes.routes.uploadBannerImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the competition using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Competitions.uploadCompetitionsBannerImageBlob = function (competition_id, blob, data, params) {
        var url = CompetitionRoutes.routes.uploadBannerImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Invites
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserInviteList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.invites = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.invites, {}, { competition_id: competition_id });
    };
    /**
     * Sends invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionSendInvite
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.sendInvite = function (competition_id) {
        return Requests.processRoute(CompetitionRoutes.routes.sendInvite, {}, { competition_id: competition_id });
    };
    /**
     * Accept invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionAcceptInvite
     *
     * @param competition_id
     * @param token
     * @returns promise
     */
    Competitions.acceptInvite = function (competition_id, token) {
        return Requests.processRoute(CompetitionRoutes.routes.acceptInvite, { token: token }, { competition_id: competition_id });
    };
    /**
     * Round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketList1
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.brackets = function (competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.brackets, {}, { round_id: round_id, competition_id: competition_id });
    };
    /**
     * Store round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketStorage
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.createBracket = function (competition_id, round_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.bracketStore, data, { round_id: round_id, competition_id: competition_id });
    };
    /**
     * Show round bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketShow
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    Competitions.showBracket = function (competition_id, round_id, bracket_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showBracket, {}, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    };
    /**
     * Update bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRoundBracket
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    Competitions.updateBracket = function (competition_id, round_id, bracket_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, data, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    };
    /**
     * Delete bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRoundBracket
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    Competitions.destroyBracket = function (competition_id, round_id, bracket_id) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyBracket, {}, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    };
    /**
     * List round
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.rounds = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.rounds, {}, { competition_id: competition_id });
    };
    /**
     * Create a new round for competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundStorage
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.createRound = function (competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.roundStore, data, { competition_id: competition_id });
    };
    /**
     * Retrieve the information for a single round.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundShow
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.showRound = function (competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showRound, {}, { round_id: round_id, competition_id: competition_id });
    };
    /**
     * Updating resource in storage with new information.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.updateRound = function (competition_id, round_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, data, { round_id: round_id, competition_id: competition_id });
    };
    /**
     * Deletes the round for the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    Competitions.destroyRound = function (competition_id, round_id) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyRound, {}, { round_id: round_id, competition_id: competition_id });
    };
    /**
     * Retrieve a list of teams associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.team = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.team, {}, { competition_id: competition_id });
    };
    /**
     * Associate a new team with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamStorage
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.createCompetitionTeam = function (competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamStore, data, { competition_id: competition_id });
    };
    /**
     * Display the contents of a single team associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceTeamShow
     *
     * @param competition_id The id of the competition
     * @param team_id The id of the team
     * @returns promise
     */
    Competitions.showTeam = function (competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showTeam, {}, { team_id: team_id, competition_id: competition_id });
    };
    /**
     * Update the team information associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    Competitions.updateTeam = function (competition_id, team_id, data) {
        return Requests.processRoute(CompetitionRoutes.routes.updateTeam, data, { team_id: team_id, competition_id: competition_id });
    };
    /**
     * Removes the team from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    Competitions.destroyTeam = function (competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyTeam, {}, { team_id: team_id, competition_id: competition_id });
    };
    /**
     * List all the users associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.users = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.users, {}, { competition_id: competition_id });
    };
    /**
     * Associate a new users with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createCompetitionUser
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.createCompetitionUser = function (competition_id, data) {
        return Requests.processRoute(CompetitionRoutes.routes.competitionUser, data, { competition_id: competition_id });
    };
    /**
     * Show a single user by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    Competitions.showCompetitionUser = function (competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showCompetitionUser, {}, { user_id: user_id, competition_id: competition_id });
    };
    /**
     * Update the user associated with competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    Competitions.updateCompetitionUser = function (competition_id, user_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateCompetitionUser, data, { user_id: user_id, competition_id: competition_id });
    };
    /**
     * Remove the associated user from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    Competitions.destroyCompetitionUser = function (competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyCompetitionUser, {}, { user_id: user_id, competition_id: competition_id });
    };
    /**
     * List all the venues associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/venueList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.venues = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.venues, {}, { competition_id: competition_id });
    };
    /**
     * Creating a new venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createVenue
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.createVenue = function (competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.newVenue, data, { competition_id: competition_id });
    };
    /**
     * Show a single venue by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    Competitions.showVenue = function (competition_id, venue_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showVenue, {}, { venue_id: venue_id, competition_id: competition_id });
    };
    /**
     * Update the venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    Competitions.updateVenue = function (competition_id, venue_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateVenue, data, { competition_id: competition_id, venue_id: venue_id });
    };
    /**
     * Deletes the venue from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    Competitions.destroyVenue = function (competition_id, venue_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyVenue, {}, { competition_id: competition_id, venue_id: venue_id });
    };
    /**
         * Updates the main image for the venue using a File object.
         *
         * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadVenueMainImage
         *
         * @param file The file object to upload.
         * @param data Any additional data to pass along to the upload.
         *
         * @returns promise
         */
    Competitions.uploadVenueMainImageFile = function (competition_id, file, data, params) {
        var url = CompetitionRoutes.routes.uploadVenueMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the venue using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadVenueMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Competitions.uploadVenueMainImageBlob = function (competition_id, blob, data, params) {
        var url = CompetitionRoutes.routes.uploadVenueMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Get a leaderboard by a users points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.userPointsLeaderboard = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.userPointsLeaderboard, {}, { competition_id: competition_id }, params);
    };
    /**
     * Get a leaderboard by a users wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardUserWins
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.userWinsLeaderboard = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.userWinsLeaderboard, {}, { competition_id: competition_id }, params);
    };
    /**
     * Get a leaderboard by a teams points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.teamPointsLeaderboard = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamPointsLeaderboard, {}, { competition_id: competition_id }, params);
    };
    /**
     * Get a leaderboard by a teams wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamWins
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.teamWinsLeaderboard = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamWinsLeaderboard, {}, { competition_id: competition_id }, params);
    };
    /**
     * Get all leaderboards.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamPoints
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.allLeaderboards = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.allLeaderboards, {}, { competition_id: competition_id }, params);
    };
    /**
     * Gets all the information about a competition for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderboardsAll
     *
     * @param competition_id
     * @returns promise
     */
    Competitions.me = function (competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.me, {}, { competition_id: competition_id }, params);
    };
    return Competitions;
}());

/**
 * AdsRoute holds all the endpoint definitions for:
 * - Ad Campaigns
 * - Ad Groups (Ad Sets)
 * - Ads (Creatives)
 * - Ad Group Triggers
 */
var AdsRoute = /** @class */ (function () {
    function AdsRoute() {
    }
    AdsRoute.routes = {
        // ----------------------------------------------------------------
        // AD CAMPAIGNS
        // ----------------------------------------------------------------
        getCampaigns: {
            url: "/ads/campaigns",
            method: HTTP_METHODS.GET,
        },
        createCampaign: {
            url: "/ads/campaigns",
            method: HTTP_METHODS.POST,
        },
        retrieveCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.GET,
        },
        updateCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.DELETE,
        },
        getCampaignBusinesses: {
            url: "/ads/campaigns/{campaign_id}/businesses",
            method: HTTP_METHODS.GET,
        },
        getCampaignAdAccounts: {
            url: "/ads/campaigns/{campaign_id}/ad_accounts",
            method: HTTP_METHODS.GET,
        },
        getCampaignFundingInstruments: {
            url: "/ads/campaigns/{campaign_id}/funding_instruments",
            method: HTTP_METHODS.GET,
        },
        // ----------------------------------------------------------------
        // AD GROUPS (AKA AD SETS)
        // ----------------------------------------------------------------
        getGroups: {
            url: "/ads/campaigns/{campaign_id}/groups",
            method: HTTP_METHODS.GET,
        },
        createGroup: {
            url: "/ads/campaigns/{campaign_id}/groups",
            method: HTTP_METHODS.POST,
        },
        retrieveGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.GET,
        },
        updateGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.DELETE,
        },
        // ----------------------------------------------------------------
        // ADS (CREATIVES)
        // ----------------------------------------------------------------
        getAds: {
            url: "/ads/creatives",
            method: HTTP_METHODS.GET,
        },
        createAd: {
            url: "/ads/creatives",
            method: HTTP_METHODS.POST,
        },
        retrieveAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.GET,
        },
        updateAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.DELETE,
        },
        // ----------------------------------------------------------------
        // AD GROUP TRIGGERS
        // ----------------------------------------------------------------
        getTriggers: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers",
            method: HTTP_METHODS.GET,
        },
        createTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers",
            method: HTTP_METHODS.POST,
        },
        retrieveTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.GET,
        },
        updateTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.DELETE,
        },
        // REDDIT TARGETING routes
        getRedditCarriers: {
            url: "/ads/reddit/targeting/carriers",
            method: HTTP_METHODS.GET,
        },
        getRedditCommunities: {
            url: "/ads/reddit/targeting/communities",
            method: HTTP_METHODS.GET,
        },
        searchRedditCommunities: {
            url: "/ads/reddit/targeting/communities/search",
            method: HTTP_METHODS.GET,
        },
        getRedditDevices: {
            url: "/ads/reddit/targeting/devices",
            method: HTTP_METHODS.GET,
        },
        getRedditGeolocations: {
            url: "/ads/reddit/targeting/geolocations",
            method: HTTP_METHODS.GET,
        },
        getRedditInterests: {
            url: "/ads/reddit/targeting/interests",
            method: HTTP_METHODS.GET,
        },
        getRedditThirdPartyAudiences: {
            url: "/ads/reddit/targeting/third_party_audiences",
            method: HTTP_METHODS.GET,
        },
        syncCampaign: {
            url: "/ads/campaigns/{campaign_id}/sync",
            method: HTTP_METHODS.POST,
        },
        syncGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/sync",
            method: HTTP_METHODS.POST,
        },
        getRedditAdPosts: {
            url: "/ads/posts/reddit",
            method: HTTP_METHODS.GET,
        },
        createRedditAdPost: {
            url: "/ads/posts/reddit",
            method: HTTP_METHODS.POST,
        },
        retrieveRedditAdPost: {
            url: "/ads/posts/reddit/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateRedditAdPost: {
            url: "/ads/posts/reddit/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        getTwitterAdPosts: {
            url: "/ads/posts/twitter",
            method: HTTP_METHODS.GET,
        },
        createTwitterAdPost: {
            url: "/ads/posts/twitter",
            method: HTTP_METHODS.POST,
        },
        retrieveTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.DELETE,
        },
        getFacebookAdPosts: {
            url: "/ads/posts/facebook",
            method: HTTP_METHODS.GET,
        },
        createFacebookAdPost: {
            url: "/ads/posts/facebook",
            method: HTTP_METHODS.POST,
        },
        retrieveFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.DELETE,
        },
        tiktokUploadImage: {
            url: "/ads/posts/tiktok/upload/image",
            method: HTTP_METHODS.POST,
        },
        tiktokUploadVideo: {
            url: "/ads/posts/tiktok/upload/video",
            method: HTTP_METHODS.POST,
        },
        tiktokUploadMusic: {
            url: "/ads/posts/tiktok/upload/music",
            method: HTTP_METHODS.POST,
        },
        tiktokGetMediaInfo: {
            url: "/ads/posts/tiktok/media/info",
            method: HTTP_METHODS.GET,
        },
        syncAd: {
            url: "/ads/creatives/{ad_id}/sync",
            method: HTTP_METHODS.POST,
        },
        facebookTargetingSearch: {
            url: "/ads/facebook/targeting/search",
            method: HTTP_METHODS.POST,
        },
        facebookGeoSearch: {
            url: "/ads/facebook/targeting/geo_search",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingOptionStatus: {
            url: "/ads/facebook/targeting/option_status",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingSuggestions: {
            url: "/ads/facebook/targeting/suggestions",
            method: HTTP_METHODS.POST,
        },
        facebookTargetingBrowse: {
            url: "/ads/facebook/targeting/browse",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingValidation: {
            url: "/ads/facebook/targeting/validation",
            method: HTTP_METHODS.POST,
        },
        facebookDeliveryEstimate: {
            url: "/ads/facebook/targeting/delivery_estimate",
            method: HTTP_METHODS.GET,
        },
        tiktokTargetingSearch: {
            url: "/ads/tiktok/targeting/search",
            method: HTTP_METHODS.POST,
        },
        tiktokContextualTags: {
            url: "/ads/tiktok/targeting/contextual_tags",
            method: HTTP_METHODS.GET,
        },
        tiktokRecommendHashtags: {
            url: "/ads/tiktok/targeting/hashtags",
            method: HTTP_METHODS.GET,
        },
        tiktokCarriers: {
            url: "/ads/tiktok/targeting/carriers",
            method: HTTP_METHODS.GET,
        },
        tiktokInterestCategories: {
            url: "/ads/tiktok/targeting/interest_categories",
            method: HTTP_METHODS.GET,
        },
        tiktokActionCategories: {
            url: "/ads/tiktok/targeting/action_categories",
            method: HTTP_METHODS.GET,
        },
        tiktokContentExclusions: {
            url: "/ads/tiktok/targeting/content_exclusions",
            method: HTTP_METHODS.GET,
        },
        tiktokRegions: {
            url: "/ads/tiktok/targeting/regions",
            method: HTTP_METHODS.GET,
        },
        tiktokTargetingInfo: {
            url: "/ads/tiktok/targeting/info",
            method: HTTP_METHODS.POST,
        },
        tiktokLanguages: {
            url: "/ads/tiktok/targeting/languages",
            method: HTTP_METHODS.GET,
        },
        tiktokHashtagInfo: {
            url: "/ads/tiktok/targeting/hashtag_info",
            method: HTTP_METHODS.GET,
        },
        tiktokContextualTagInfo: {
            url: "/ads/tiktok/targeting/contextual_tag_info",
            method: HTTP_METHODS.GET,
        },
        tiktokContentExclusionInfo: {
            url: "/ads/tiktok/targeting/content_exclusion_info",
            method: HTTP_METHODS.GET,
        },
        tiktokInterestKeywordRecommend: {
            url: "/ads/tiktok/targeting/interest_keywords",
            method: HTTP_METHODS.GET,
        },
        twitterListTargetingCriteria: {
            url: "/ads/twitter/targeting/criteria",
            method: HTTP_METHODS.GET,
        },
        twitterGetTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria/{criterion_id}",
            method: HTTP_METHODS.GET,
        },
        twitterCreateTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria",
            method: HTTP_METHODS.POST,
        },
        twitterDeleteTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria/{criterion_id}",
            method: HTTP_METHODS.DELETE,
        },
        twitterBatchTargetingCriteria: {
            url: "/ads/twitter/targeting/batch_criteria",
            method: HTTP_METHODS.POST,
        },
        twitterTargetingDiscovery: {
            url: "/ads/twitter/targeting/{resource}",
            method: HTTP_METHODS.GET,
        },
        twitterTargetingSuggestions: {
            url: "/ads/twitter/targeting/suggestions",
            method: HTTP_METHODS.GET,
        },
        syncCampaignTree: {
            url: "/ads/campaigns/{campaign_id}/sync_tree",
            method: HTTP_METHODS.POST,
        },
        syncSchedulerCampaigns: {
            url: "/ads/campaigns/scheduler/{scheduler_id}/syncAll",
            method: HTTP_METHODS.POST,
        },
        // ----------------------------------------------------------------
        // AD REPORTS
        // ----------------------------------------------------------------
        getPerformanceSummary: {
            url: "/ads/reports/summary",
            method: HTTP_METHODS.GET,
        },
        getSpendDeliveryReport: {
            url: "/ads/reports/spend-delivery",
            method: HTTP_METHODS.GET,
        },
        getPlatformComparisonReport: {
            url: "/ads/reports/platform-comparison",
            method: HTTP_METHODS.GET,
        },
        getCreativePerformanceReport: {
            url: "/ads/reports/creative-performance",
            method: HTTP_METHODS.GET,
        },
        getTimePerformanceReport: {
            url: "/ads/reports/time-performance",
            method: HTTP_METHODS.GET,
        },
        getGoogleGeoSuggestions: {
            url: "/ads/google/targeting/geo/suggest",
            method: HTTP_METHODS.GET,
        },
        addGoogleLocationTargets: {
            url: "/ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations",
            method: HTTP_METHODS.POST,
        },
        getGoogleLocationTargets: {
            url: "/ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations",
            method: HTTP_METHODS.GET,
        },
        removeGoogleLocationTargets: {
            url: "/ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations",
            method: HTTP_METHODS.DELETE,
        },
        addGoogleProximityTarget: {
            url: "/ads/google/targeting/campaigns/{customer_id}/{campaign_id}/proximity",
            method: HTTP_METHODS.POST,
        },
        updateGoogleTargetingSettings: {
            url: "/ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings",
            method: HTTP_METHODS.PUT,
        },
        getGoogleTargetingSettings: {
            url: "/ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings",
            method: HTTP_METHODS.GET,
        },
        getGoogleAdPosts: {
            url: "/ads/posts/google",
            method: HTTP_METHODS.GET,
        },
        createGoogleAdPost: {
            url: "/ads/posts/google",
            method: HTTP_METHODS.POST,
        },
        updateGoogleAdPost: {
            url: "/ads/posts/google/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteGoogleAdPost: {
            url: "/ads/posts/google/{post_id}",
            method: HTTP_METHODS.DELETE,
        },
        pauseGoogleAdPost: {
            url: "/ads/posts/google/{post_id}/pause",
            method: HTTP_METHODS.POST,
        },
        enableGoogleAdPost: {
            url: "/ads/posts/google/{post_id}/enable",
            method: HTTP_METHODS.POST,
        },
        createGoogleAccount: {
            url: "/ads/google/accounts/create",
            method: HTTP_METHODS.POST,
        },
    };
    return AdsRoute;
}());

var Ads = /** @class */ (function () {
    function Ads() {
    }
    // ----------------------------------------------------------------------
    // AD CAMPAIGNS
    // ----------------------------------------------------------------------
    /**
     * List Ad Campaigns.
     *
     * Example usage:
     *  Ads.listCampaigns({ community: 'uuid-of-community', platform: 'tiktok' })
     *
     * @param params Query parameters (e.g. community, platform, advertiser_id, etc.)
     * @returns A paginated list of AdCampaign resources
     */
    Ads.listCampaigns = function (params) {
        return Requests.processRoute(AdsRoute.routes.getCampaigns, undefined, undefined, params);
    };
    /**
     * Create a new Ad Campaign.
     *
     * @param data  The Ad Campaign payload (JSON) to create
     * @param params Optional query parameters
     * @returns The newly created AdCampaign resource
     */
    Ads.createCampaign = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createCampaign, data, {}, params);
    };
    /**
     * Retrieve a single Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to fetch
     * @param params Optional query parameters
     * @returns The requested AdCampaign resource
     */
    Ads.viewCampaign = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveCampaign, {}, { campaign_id: campaign_id }, params);
    };
    /**
     * Update an existing Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to update
     * @param data  The partial or full updated AdCampaign payload
     * @param params Optional query parameters
     * @returns The updated AdCampaign resource
     */
    Ads.updateCampaign = function (campaign_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateCampaign, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Delete an Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    Ads.deleteCampaign = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteCampaign, {}, { campaign_id: campaign_id }, params);
    };
    // ----------------------------------------------------------------------
    // AD GROUPS (AD SETS)
    // ----------------------------------------------------------------------
    /**
     * List Ad Groups (ad sets) for a specific campaign.
     *
     * Example usage:
     *  Ads.listGroups('some-campaign-uuid', { promotion_type: 'WEBSITE' })
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param params Optional query parameters (e.g. promotion_type, operation_status, etc.)
     * @returns A paginated list of AdGroup resources
     */
    Ads.listGroups = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGroups, {}, { campaign_id: campaign_id }, params);
    };
    /**
     * Create a new Ad Group (ad set) under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param data The AdGroup creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroup resource
     */
    Ads.createGroup = function (campaign_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.createGroup, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Retrieve a single Ad Group by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to fetch
     * @param params Optional query parameters
     * @returns The requested AdGroup resource
     */
    Ads.viewGroup = function (campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveGroup, {}, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    /**
     * Update an Ad Group (ad set) by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to update
     * @param data Updated fields for the AdGroup
     * @param params Optional query parameters
     * @returns The updated AdGroup resource
     */
    Ads.updateGroup = function (campaign_id, group_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateGroup, data, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    /**
     * Delete an Ad Group (ad set) by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    Ads.deleteGroup = function (campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteGroup, {}, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    // ----------------------------------------------------------------------
    // ADS (CREATIVES)
    // ----------------------------------------------------------------------
    /**
     * List Ads (creatives).
     *
     * Supports filtering by ad_group_id, social_media_post_id, operation_status, etc.
     *
     * @param params Optional query parameters for filtering/sorting
     * @returns A paginated list of Ad resources
     */
    Ads.listAds = function (params) {
        return Requests.processRoute(AdsRoute.routes.getAds, undefined, undefined, params);
    };
    /**
     * Create a new Ad (creative).
     *
     * @param data The Ad creation payload
     * @param params Optional query parameters
     * @returns The newly created Ad resource
     */
    Ads.createAd = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createAd, data, {}, params);
    };
    /**
     * Retrieve a single Ad by ID.
     *
     * @param ad_id The UUID of the Ad to fetch
     * @param params Optional query parameters
     * @returns The requested Ad resource
     */
    Ads.viewAd = function (ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveAd, {}, { ad_id: ad_id }, params);
    };
    /**
     * Update an existing Ad by ID.
     *
     * @param ad_id The UUID of the Ad to update
     * @param data The partial or full Ad payload
     * @param params Optional query parameters
     * @returns The updated Ad resource
     */
    Ads.updateAd = function (ad_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateAd, data, { ad_id: ad_id }, params);
    };
    /**
     * Delete an Ad by ID.
     *
     * @param ad_id The UUID of the Ad to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    Ads.deleteAd = function (ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteAd, {}, { ad_id: ad_id }, params);
    };
    // ----------------------------------------------------------------------
    // AD GROUP TRIGGERS
    // ----------------------------------------------------------------------
    /**
     * List triggers defined for a given Ad Group.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param params Optional query parameters (pagination, etc.)
     * @returns A paginated list of AdGroupTrigger resources
     */
    Ads.listTriggers = function (campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.getTriggers, {}, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    /**
     * Create a new Ad Group Trigger.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param data The trigger creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroupTrigger resource
     */
    Ads.createTrigger = function (campaign_id, group_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.createTrigger, data, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    /**
     * Retrieve a single Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns The requested AdGroupTrigger resource
     */
    Ads.viewTrigger = function (campaign_id, group_id, trigger_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveTrigger, {}, { campaign_id: campaign_id, group_id: group_id, trigger_id: trigger_id }, params);
    };
    /**
     * Update an existing Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger to update
     * @param data Updated trigger fields
     * @param params Optional query parameters
     * @returns The updated AdGroupTrigger resource
     */
    Ads.updateTrigger = function (campaign_id, group_id, trigger_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateTrigger, data, { campaign_id: campaign_id, group_id: group_id, trigger_id: trigger_id }, params);
    };
    /**
     * Delete an Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    Ads.deleteTrigger = function (campaign_id, group_id, trigger_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteTrigger, {}, { campaign_id: campaign_id, group_id: group_id, trigger_id: trigger_id }, params);
    };
    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /ads/campaigns/{id}/businesses on the backend.
     *
     * Typically relevant for Reddit (list businesses), or might return a
     * "not supported" message for Meta/TikTok.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    Ads.listCampaignBusinesses = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignBusinesses, undefined, // no request body
        { campaign_id: campaign_id }, // path params
        params // query params
        );
    };
    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /ads/campaigns/{id}/ad_accounts on the backend.
     *
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    Ads.listCampaignAdAccounts = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignAdAccounts, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * List funding instruments for the given campaign ID,
     * as defined by /ads/campaigns/{id}/funding_instruments on the backend.
     *
     * For Twitter, pass ?account_id=...
     * For Reddit, pass ?ad_account_id=... or ?business_id=...
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    Ads.listCampaignFundingInstruments = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignFundingInstruments, undefined, { campaign_id: campaign_id }, params);
    };
    /**
   * GET /ads/reddit/targeting/carriers
   *
   * Example usage:
   *   Ads.listRedditCarriers({ scheduler_id: 'uuid-of-scheduler', 'page.size': 50 })
   */
    Ads.listRedditCarriers = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditCarriers, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/communities?names=sub1,sub2
     */
    Ads.listRedditCommunities = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditCommunities, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/communities/search?query=xyz
     */
    Ads.searchRedditCommunities = function (params) {
        return Requests.processRoute(AdsRoute.routes.searchRedditCommunities, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/devices
     */
    Ads.listRedditDevices = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditDevices, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/geolocations
     */
    Ads.listRedditGeolocations = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditGeolocations, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/interests
     */
    Ads.listRedditInterests = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditInterests, undefined, undefined, params);
    };
    /**
     * GET /ads/reddit/targeting/third_party_audiences
     */
    Ads.listRedditThirdPartyAudiences = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditThirdPartyAudiences, undefined, undefined, params);
    };
    /**
   * Sync an Ad Campaign with the remote platform
   *
   * @param campaign_id The UUID of the campaign to sync
   * @param params Optional query parameters
   * @returns The synced AdCampaign resource
   */
    Ads.syncCampaign = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncCampaign, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Sync an Ad Group with the remote platform
     *
     * @param campaign_id The UUID of the parent campaign
     * @param group_id The UUID of the ad group to sync
     * @param params Optional query parameters
     * @returns The synced AdGroup resource
     */
    Ads.syncGroup = function (campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncGroup, undefined, { campaign_id: campaign_id, group_id: group_id }, params);
    };
    Ads.listRedditAdPosts = function (params) {
        return Requests.processRoute(AdsRoute.routes.getRedditAdPosts, undefined, undefined, params);
    };
    /** Create a Reddit ad-style social-media post */
    Ads.createRedditAdPost = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createRedditAdPost, data, {}, params);
    };
    /** Retrieve a single Reddit ad-style social-media post */
    Ads.viewRedditAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveRedditAdPost, {}, { post_id: post_id }, params);
    };
    /** Update a Reddit ad-style social-media post */
    Ads.updateRedditAdPost = function (post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateRedditAdPost, data, { post_id: post_id }, params);
    };
    Ads.listTwitterAdPosts = function (params) {
        return Requests.processRoute(AdsRoute.routes.getTwitterAdPosts, undefined, undefined, params);
    };
    Ads.createTwitterAdPost = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createTwitterAdPost, data, {}, params);
    };
    Ads.viewTwitterAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveTwitterAdPost, {}, { post_id: post_id }, params);
    };
    Ads.updateTwitterAdPost = function (post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateTwitterAdPost, data, { post_id: post_id }, params);
    };
    Ads.deleteTwitterAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteTwitterAdPost, {}, { post_id: post_id }, params);
    };
    Ads.listFacebookAdPosts = function (params) {
        return Requests.processRoute(AdsRoute.routes.getFacebookAdPosts, undefined, undefined, params);
    };
    Ads.createFacebookAdPost = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createFacebookAdPost, data, {}, params);
    };
    Ads.viewFacebookAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveFacebookAdPost, {}, { post_id: post_id }, params);
    };
    Ads.updateFacebookAdPost = function (post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateFacebookAdPost, data, { post_id: post_id }, params);
    };
    Ads.deleteFacebookAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteFacebookAdPost, {}, { post_id: post_id }, params);
    };
    // TikTok Uploads: FILE
    Ads.tiktokUploadImageFile = function (file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadImage.url, 'image_file', file, data, params, onUploadProgress);
    };
    Ads.tiktokUploadVideoFile = function (file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadVideo.url, 'video_file', file, data, params, onUploadProgress);
    };
    Ads.tiktokUploadMusicFile = function (file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadMusic.url, 'music_file', file, data, params, onUploadProgress);
    };
    // TikTok Uploads: BLOB
    Ads.tiktokUploadImageBlob = function (blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadImage.url, 'image_file', blob, data, params, onUploadProgress);
    };
    Ads.tiktokUploadVideoBlob = function (blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadVideo.url, 'video_file', blob, data, params, onUploadProgress);
    };
    Ads.tiktokUploadMusicBlob = function (blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadMusic.url, 'music_file', blob, data, params, onUploadProgress);
    };
    Ads.tiktokGetMediaInfo = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokGetMediaInfo, undefined, undefined, params);
    };
    /**
 * Sync an Ad with the remote platform.
 *
 * @param ad_id  UUID of the ad to sync
 * @param params Optional query parameters
 * @returns      The synced Ad resource
 */
    Ads.syncAd = function (ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncAd, undefined, { ad_id: ad_id }, params);
    };
    /**
 * POST /ads/facebook/targeting/search
 */
    Ads.facebookTargetingSearch = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSearch, data, undefined, params);
    };
    /**
     * GET /ads/facebook/targeting/geo_search
     */
    Ads.facebookGeoSearch = function (params) {
        return Requests.processRoute(AdsRoute.routes.facebookGeoSearch, undefined, undefined, params);
    };
    /**
     * GET /ads/facebook/targeting/option_status
     */
    Ads.facebookTargetingOptionStatus = function (params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingOptionStatus, undefined, undefined, params);
    };
    /**
     * POST /ads/facebook/targeting/suggestions
     */
    Ads.facebookTargetingSuggestions = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSuggestions, data, undefined, params);
    };
    /**
     * GET /ads/facebook/targeting/browse
     */
    Ads.facebookTargetingBrowse = function (params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingBrowse, undefined, undefined, params);
    };
    /**
     * POST /ads/facebook/targeting/validation
     */
    Ads.facebookTargetingValidation = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingValidation, data, undefined, params);
    };
    /**
     * GET /ads/facebook/targeting/delivery_estimate
     */
    Ads.facebookDeliveryEstimate = function (params) {
        return Requests.processRoute(AdsRoute.routes.facebookDeliveryEstimate, undefined, undefined, params);
    };
    Ads.tiktokTargetingSearch = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.tiktokTargetingSearch, data, {}, params);
    };
    Ads.tiktokContextualTags = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContextualTags, undefined, undefined, params);
    };
    Ads.tiktokRecommendHashtags = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokRecommendHashtags, undefined, undefined, params);
    };
    Ads.tiktokListCarriers = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokCarriers, undefined, undefined, params);
    };
    Ads.tiktokListInterestCategories = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokInterestCategories, undefined, undefined, params);
    };
    Ads.tiktokListActionCategories = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokActionCategories, undefined, undefined, params);
    };
    Ads.tiktokListContentExclusions = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContentExclusions, undefined, undefined, params);
    };
    Ads.tiktokListRegions = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokRegions, undefined, undefined, params);
    };
    Ads.tiktokGetTargetingInfo = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.tiktokTargetingInfo, data, {}, params);
    };
    Ads.tiktokListLanguages = function (advertiser_id, params) {
        var mergedParams = __assign(__assign({}, params), { advertiser_id: advertiser_id });
        return Requests.processRoute(AdsRoute.routes.tiktokLanguages, undefined, undefined, mergedParams);
    };
    Ads.tiktokRecommendInterestKeywords = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokInterestKeywordRecommend, undefined, undefined, params);
    };
    /**
 * GET /ads/tiktok/targeting/hashtag_info
 */
    Ads.tiktokHashtagInfo = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokHashtagInfo, undefined, undefined, params);
    };
    /**
     * GET /ads/tiktok/targeting/contextual_tag_info
     */
    Ads.tiktokContextualTagInfo = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContextualTagInfo, undefined, undefined, params);
    };
    /**
     * GET /ads/tiktok/targeting/content_exclusion_info
     */
    Ads.tiktokContentExclusionInfo = function (params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContentExclusionInfo, undefined, undefined, params);
    };
    Ads.listTwitterTargetingCriteria = function (params) {
        return Requests.processRoute(AdsRoute.routes.twitterListTargetingCriteria, undefined, undefined, params);
    };
    Ads.getTwitterTargetingCriterion = function (criterion_id, params) {
        return Requests.processRoute(AdsRoute.routes.twitterGetTargetingCriterion, undefined, { criterion_id: criterion_id }, params);
    };
    Ads.createTwitterTargetingCriterion = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.twitterCreateTargetingCriterion, data, {}, params);
    };
    Ads.deleteTwitterTargetingCriterion = function (criterion_id, params) {
        return Requests.processRoute(AdsRoute.routes.twitterDeleteTargetingCriterion, undefined, { criterion_id: criterion_id }, params);
    };
    Ads.twitterBatchTargetingCriteria = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.twitterBatchTargetingCriteria, data, {}, params);
    };
    Ads.lookupTwitterTargeting = function (resource, params) {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingDiscovery, undefined, { resource: resource }, params);
    };
    Ads.twitterTargetingSuggestions = function (params) {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingSuggestions, undefined, undefined, params);
    };
    /**
     * Deep-sync a campaign tree (campaign → groups → ads) with its remote platform.
     *
     * @param campaign_id UUID of the campaign to sync
     * @param params      Optional query params
     * @returns           Fully-hydrated AdCampaign resource
     */
    Ads.syncCampaignTree = function (campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncCampaignTree, undefined, { campaign_id: campaign_id }, params);
    };
    /**
    * Deep-sync all the campaigns for a scheduler.
    *
    * @param scheduler_id UUID of the campaign to sync
    * @param params      Optional query params
    * @returns           Fully-hydrated AdCampaign resource
    */
    Ads.syncSchedulerCampaigns = function (scheduler_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncSchedulerCampaigns, undefined, { scheduler_id: scheduler_id }, params);
    };
    // ----------------------------------------------------------------------
    // AD REPORTS
    // ----------------------------------------------------------------------
    /**
     * Get campaign performance summary.
     */
    Ads.getPerformanceSummary = function (params) {
        return Requests.processRoute(AdsRoute.routes.getPerformanceSummary, undefined, undefined, params);
    };
    /**
     * Get spend and delivery metrics over time.
     */
    Ads.getSpendDeliveryReport = function (params) {
        return Requests.processRoute(AdsRoute.routes.getSpendDeliveryReport, undefined, undefined, params);
    };
    /**
     * Compare performance across platforms.
     */
    Ads.getPlatformComparisonReport = function (params) {
        return Requests.processRoute(AdsRoute.routes.getPlatformComparisonReport, undefined, undefined, params);
    };
    /**
     * Get performance metrics for individual ad creatives.
     */
    Ads.getCreativePerformanceReport = function (params) {
        return Requests.processRoute(AdsRoute.routes.getCreativePerformanceReport, undefined, undefined, params);
    };
    /**
     * Get time-based performance metrics by hour and day of week.
     */
    Ads.getTimePerformanceReport = function (params) {
        return Requests.processRoute(AdsRoute.routes.getTimePerformanceReport, undefined, undefined, params);
    };
    /**
 * GET /ads/google/targeting/geo/suggest
 */
    Ads.listGoogleGeoSuggestions = function (params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleGeoSuggestions, undefined, undefined, params);
    };
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    Ads.addGoogleLocationTargets = function (customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.addGoogleLocationTargets, data, { customer_id: customer_id, campaign_id: campaign_id });
    };
    /**
     * GET /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    Ads.getGoogleLocationTargets = function (customer_id, campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleLocationTargets, undefined, { customer_id: customer_id, campaign_id: campaign_id }, params);
    };
    /**
     * DELETE /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    Ads.removeGoogleLocationTargets = function (customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.removeGoogleLocationTargets, data, { customer_id: customer_id, campaign_id: campaign_id });
    };
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/proximity
     */
    Ads.addGoogleProximityTarget = function (customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.addGoogleProximityTarget, data, { customer_id: customer_id, campaign_id: campaign_id });
    };
    /**
     * PUT /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    Ads.updateGoogleTargetingSettings = function (resource_type, customer_id, resource_id, data) {
        return Requests.processRoute(AdsRoute.routes.updateGoogleTargetingSettings, data, { resource_type: resource_type, customer_id: customer_id, resource_id: resource_id });
    };
    /**
     * GET /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    Ads.getGoogleTargetingSettings = function (resource_type, customer_id, resource_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleTargetingSettings, undefined, { resource_type: resource_type, customer_id: customer_id, resource_id: resource_id }, params);
    };
    /** GET /ads/posts/google */
    Ads.listGoogleAdPosts = function (params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleAdPosts, undefined, undefined, params);
    };
    /** POST /ads/posts/google */
    Ads.createGoogleAdPost = function (data, params) {
        return Requests.processRoute(AdsRoute.routes.createGoogleAdPost, data, {}, params);
    };
    /** PUT /ads/posts/google/{post_id} */
    Ads.updateGoogleAdPost = function (post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateGoogleAdPost, data, { post_id: post_id }, params);
    };
    /** DELETE /ads/posts/google/{post_id} */
    Ads.deleteGoogleAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteGoogleAdPost, {}, { post_id: post_id }, params);
    };
    /** POST /ads/posts/google/{post_id}/pause */
    Ads.pauseGoogleAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.pauseGoogleAdPost, {}, { post_id: post_id }, params);
    };
    /** POST /ads/posts/google/{post_id}/enable */
    Ads.enableGoogleAdPost = function (post_id, params) {
        return Requests.processRoute(AdsRoute.routes.enableGoogleAdPost, {}, { post_id: post_id }, params);
    };
    /**
     * Creates a new Google Ads client account under a specified manager account.
     * Corresponds to POST /ads/google/accounts/create
     *
     * @param data The creation payload.
     * @param data.scheduler_id The UUID of the scheduler with auth tokens.
     * @param data.manager_customer_id The 10-digit MCC ID.
     * @param data.descriptive_name The name for the new account.
     * @param data.currency_code ISO 4217 currency code.
     * @param data.time_zone Time zone identifier (e.g., 'America/New_York').
     * @returns The newly created Google Ads account details.
     */
    Ads.createGoogleAccount = function (data) {
        return Requests.processRoute(AdsRoute.routes.createGoogleAccount, data, undefined, undefined);
    };
    return Ads;
}());

var CommunitiesRoute = /** @class */ (function () {
    function CommunitiesRoute() {
    }
    CommunitiesRoute.routes = {
        list: { url: '/communities', method: HTTP_METHODS.GET },
        create: { url: '/communities', method: HTTP_METHODS.POST },
        view: { url: '/communities/{community_id}', method: HTTP_METHODS.GET },
        update: { url: '/communities/{community_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/communities/{community_id}', method: HTTP_METHODS.DELETE },
        uploadLogo: { url: '/communities/{community_id}/uploadLogo', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/communities/{community_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        uploadVideoLogo: { url: '/communities/{community_id}/uploadVideoLogo', method: HTTP_METHODS.POST },
        listInvites: { url: '/communities/{community_id}/invites', method: HTTP_METHODS.GET },
        sendInvite: { url: '/communities/{community_id}/sendInvite', method: HTTP_METHODS.POST },
        acceptInvite: { url: '/communities/{community_id}/acceptInvite', method: HTTP_METHODS.POST },
        retrieveInvite: { url: '/communities/{community_id}/invites/{token}', method: HTTP_METHODS.GET },
        listUsers: { url: '/communities/{community_id}/users', method: HTTP_METHODS.GET },
        myInvites: { url: '/communities/invites/mine', method: HTTP_METHODS.GET },
        resendInvite: { url: '/communities/{community_id}/invites/{invite_id}/resend', method: HTTP_METHODS.POST },
        deleteInvite: { url: '/communities/{community_id}/invites/{invite_id}', method: HTTP_METHODS.DELETE },
        addUser: { url: '/communities/{community_id}/users', method: HTTP_METHODS.POST },
        showUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.GET },
        updateUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.PUT },
        removeUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.DELETE },
        join: { url: '/communities/{community_id}/join', method: HTTP_METHODS.POST },
        findByDomain: { url: '/communities/findByDomain/{domain}', method: HTTP_METHODS.GET },
        addPaymentMethod: { url: '/communities/{community_id}/payment/methods', method: HTTP_METHODS.POST },
        getPaymentMethods: { url: '/communities/{community_id}/payment/methods', method: HTTP_METHODS.GET },
        setDefaultPaymentMethod: { url: '/communities/{community_id}/payment/methods/default', method: HTTP_METHODS.POST },
        getLedger: { url: '/communities/{community_id}/payment/ledger', method: HTTP_METHODS.GET },
        clearDocusignAuth: { url: '/communities/{community_id}/clearDocusignAuth', method: HTTP_METHODS.DELETE },
        clearHellosignAuth: { url: '/communities/{community_id}/clearHellosignAuth', method: HTTP_METHODS.DELETE },
        clearSimplesignAuth: { url: '/communities/{community_id}/clearSimplesignAuth', method: HTTP_METHODS.DELETE },
        listEmailTemplates: { url: '/communities/{community_id}/emails/templates', method: HTTP_METHODS.GET },
        createEmailTemplate: { url: '/communities/{community_id}/emails/templates', method: HTTP_METHODS.POST },
        viewEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.GET },
        updateEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.PUT },
        deleteEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.DELETE },
        populateEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}/populate', method: HTTP_METHODS.POST },
        // Newsletters
        listNewsletters: { url: '/communities/newsletters', method: HTTP_METHODS.GET },
        createNewsletter: { url: '/communities/{community_id}/newsletters', method: HTTP_METHODS.POST },
        viewNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.GET },
        updateNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.PUT },
        deleteNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.DELETE },
        importNewsletterSubscribers: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/import', method: HTTP_METHODS.POST },
        uploadNewsletterBannerImage: { url: '/communities/{community_id}/newsletters/{newsletter_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        newsletterReports: {
            url: '/communities/{community_id}/newsletters/{newsletter_id}/reports',
            method: HTTP_METHODS.GET
        },
        newsletterCampaignReports: {
            url: '/communities/{community_id}/newsletters/{newsletter_id}/reports/campaign',
            method: HTTP_METHODS.GET
        },
        newsletterSubscriberTrend: {
            url: '/communities/{community_id}/newsletters/{newsletter_id}/reports/subscriber_trend',
            method: HTTP_METHODS.GET
        },
        exportNewsletterSubscribers: {
            url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/export',
            method: HTTP_METHODS.POST
        },
        importGameInstalls: {
            url: '/communities/{community_id}/newsletters/{newsletter_id}/import_game_installs',
            method: HTTP_METHODS.POST
        },
        // Campaigns
        listCampaigns: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns', method: HTTP_METHODS.GET },
        createCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns', method: HTTP_METHODS.POST },
        viewCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
        updateCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
        deleteCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
        sendCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/send', method: HTTP_METHODS.POST },
        scheduleCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/schedule', method: HTTP_METHODS.POST },
        testCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/test', method: HTTP_METHODS.POST },
        // Emails
        listCampaignEmails: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/emails', method: HTTP_METHODS.GET },
        // Subscribers (admin routes)
        listNewsletterSubscribers: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers', method: HTTP_METHODS.GET },
        viewNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.GET },
        updateNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.PUT },
        deleteNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.DELETE },
        // Subscriber registration (open route)
        registerNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers', method: HTTP_METHODS.POST },
        createOneTimeInvoice: {
            url: '/communities/{community_id}/invoice-once',
            method: HTTP_METHODS.POST
        },
        // New Invoicing and Statement Routes
        listInvoices: {
            url: '/communities/{community_id}/payment/invoices',
            method: HTTP_METHODS.GET
        },
        getInvoiceDetails: {
            url: '/communities/{community_id}/payment/invoices/{invoice_id}',
            method: HTTP_METHODS.GET
        },
        getCustomStatement: {
            url: '/communities/{community_id}/payment/statement',
            method: HTTP_METHODS.GET
        },
        listSavedInfluencers: { url: '/communities/{community_id}/influencers', method: HTTP_METHODS.GET },
        saveInfluencerToPool: { url: '/communities/{community_id}/influencers', method: HTTP_METHODS.POST }
    };
    return CommunitiesRoute;
}());

var Communities = /** @class */ (function () {
    function Communities() {
    }
    /**
     * List all the communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    Communities.list = function (params) {
        return Requests.processRoute(CommunitiesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    Communities.create = function (data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Communities.update = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.update, data, { community_id: community_id }, params);
    };
    /**
     * Retrieve the information for a single community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    Communities.view = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.view, {}, { community_id: community_id }, params);
    };
    /**
     * Deletes a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    Communities.delete = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.delete, {}, { community_id: community_id });
    };
    /**
     * Updates the main image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Communities.uploadLogoFile = function (community_id, file, data, params) {
        var url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    };
    /**
     * Updates the main image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Communities.uploadLogoBlob = function (community_id, blob, data, params) {
        var url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    };
    /**
     * Updates the banner image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Communities.uploadBannerImageFile = function (community_id, file, data, params) {
        var url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    };
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Communities.uploadBannerImageBlob = function (community_id, blob, data, params) {
        var url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    };
    /**
    * Updates the banner image for the community using a File object.
    *
    * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    Communities.uploadVideoLogoFile = function (community_id, file, data, params) {
        var url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    };
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Communities.uploadVideoLogoBlob = function (community_id, blob, data, params) {
        var url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    };
    /**
     * List the invites that have been sent for the community to users.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    Communities.listInvites = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listInvites, {}, { community_id: community_id }, params);
    };
    /**
     * Send an invitation to a user to join the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitySendInvite
     *
     * @param community_id The id of the community.
     * @param data The data that will be passed into sending an invite.
     *
     * @returns promise
     */
    Communities.sendInvite = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.sendInvite, data, { community_id: community_id }, params);
    };
    /**
     * Accept an invite to a community. The JSON Web Token (JWT) must be related to the token.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to accept the user.
     *
     * @returns promise
     */
    Communities.acceptInvite = function (community_id, token, params) {
        return Requests.processRoute(CommunitiesRoute.routes.acceptInvite, { token: token }, { community_id: community_id }, params);
    };
    /**
     * Retrieves a user's invite that have been sent.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to get the invite.
     *
     * @returns promise
     */
    Communities.retrieveInvite = function (community_id, token, params) {
        return Requests.processRoute(CommunitiesRoute.routes.retrieveInvite, {}, { community_id: community_id, token: token }, params);
    };
    /**
     * List the users who are currently associated with the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityUserList
     *
     * @param community_id The id of the community.
     *
     * @returns promise
     */
    Communities.listUsers = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listUsers, {}, { community_id: community_id }, params);
    };
    /**
     * Add a user to a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/createcommunityUser
     *
     * @param community_id The id of the community.
     * @param data The data to be passed when adding a user.
     *
     * @returns promise
     */
    Communities.addUser = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.addUser, data, { community_id: community_id }, params);
    };
    /**
     * Retrieves a single user and their information that is associated with a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/showcommunityUser
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Communities.getUser = function (community_id, user_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.showUser, {}, { community_id: community_id, user_id: user_id }, params);
    };
    /**
     * Updates the users information associated with the community.
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Communities.updatetUser = function (community_id, user_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateUser, data, { community_id: community_id, user_id: user_id }, params);
    };
    /**
     * Removes a user from a community.
     *
     * @param community_id The id of community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Communities.removetUser = function (community_id, user_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.removeUser, {}, { community_id: community_id, user_id: user_id }, params);
    };
    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     *
     * @param domain The subcname of the community.
     *
     * @returns promise
     */
    Communities.findByDomain = function (domain, params) {
        return Requests.processRoute(CommunitiesRoute.routes.findByDomain, {}, { domain: domain }, params);
    };
    /**
     * Has a user join a community. The join is executed using the current user's authentication token.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    Communities.join = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.join, data, { community_id: community_id }, params);
    };
    /**
     * Add a payment method to the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/51802cc0cb758850807345918130cf3e
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    Communities.addPaymentMethod = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.addPaymentMethod, data, { community_id: community_id }, params);
    };
    /**
     * Sets the default payment method for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/dd743e8a7da3b2bebe557cbc6675380d
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    Communities.setDefaultPaymentMethod = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.setDefaultPaymentMethod, data, { community_id: community_id }, params);
    };
    /**
     * Get the available payment methods.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    Communities.getPaymentMethods = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getPaymentMethods, {}, { community_id: community_id }, params);
    };
    /**
     * Get the ledger for all transactions from the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    Communities.getLedger = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getLedger, {}, { community_id: community_id }, params);
    };
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Communities.clearDocusignAuth = function (community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearDocusignAuth, {}, { community_id: community_id });
    };
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Communities.clearSimplesignAuth = function (community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearSimplesignAuth, {}, { community_id: community_id });
    };
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Communities.clearHellosignAuth = function (community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearHellosignAuth, {}, { community_id: community_id });
    };
    /**
     * List all the saved email templates for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    Communities.listEmailTemplates = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listEmailTemplates, undefined, { community_id: community_id }, params);
    };
    /**
     * Create a new email template for the community
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    Communities.createEmailTemplate = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createEmailTemplate, data, { community_id: community_id }, params);
    };
    /**
     * Update an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Communities.updateEmailTemplate = function (community_id, template_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    };
    /**
     * Retrieve a single email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    Communities.viewEmailTemplate = function (community_id, template_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewEmailTemplate, {}, { community_id: community_id, template_id: template_id }, params);
    };
    /**
     * Deletes an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    Communities.deleteEmailTemplate = function (community_id, template_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteEmailTemplate, {}, { community_id: community_id, template_id: template_id });
    };
    /**
     * Populates an email template for the community that will replace the platholders with the data provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    Communities.populateEmailTemplate = function (community_id, template_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.populateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    };
    /**
   * List all newsletters for a community.
   *
   * @param community_id The ID of the community.
   * @param params Query parameters.
   * @returns Promise
   */
    Communities.listNewsletters = function (params) {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletters, undefined, undefined, params);
    };
    /**
     * Create a new newsletter for a community.
     *
     * @param community_id The ID of the community.
     * @param data The data for the new newsletter.
     * @returns Promise
     */
    Communities.createNewsletter = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createNewsletter, data, { community_id: community_id }, params);
    };
    /**
     * Get a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.viewNewsletter = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletter, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Update a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data to update.
     * @returns Promise
     */
    Communities.updateNewsletter = function (community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletter, data, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Delete a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @returns Promise
     */
    Communities.deleteNewsletter = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletter, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Import subscribers from a CSV or XLS file into a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param file The CSV or XLS file.
     * @param params Additional parameters.
     * @returns Promise
     */
    Communities.importNewsletterSubscribers = function (community_id, newsletter_id, file, data, params) {
        var url = CommunitiesRoute.routes.importNewsletterSubscribers.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    };
    /**
     * Updates the banner image for the game show using a File object.
    *
    * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    Communities.uploadNewsletterBannerImageFile = function (community_id, newsletter_id, file, data, params) {
        var url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Communities.uploadNewsletterBannerImageBlob = function (community_id, newsletter_id, blob, data, params) {
        var url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    // Campaigns
    /**
     * List all campaigns for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.listCampaigns = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaigns, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Create a new campaign for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data for the new campaign.
     * @returns Promise
     */
    Communities.createCampaign = function (community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createCampaign, data, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Get a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.viewCampaign = function (community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewCampaign, undefined, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    /**
     * Update a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The data to update.
     * @returns Promise
     */
    Communities.updateCampaign = function (community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateCampaign, data, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    /**
     * Delete a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    Communities.deleteCampaign = function (community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteCampaign, undefined, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    /**
     * Send a campaign immediately.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    Communities.sendCampaign = function (community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.sendCampaign, undefined, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    /**
     * Schedule a campaign to be sent later.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    Communities.scheduleCampaign = function (community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.scheduleCampaign, data, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    /**
     * Test an email campaign by sending an email to the current user.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    Communities.testCampaign = function (community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.testCampaign, data, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    // Emails
    /**
     * List all emails sent in a campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.listCampaignEmails = function (community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaignEmails, undefined, { community_id: community_id, newsletter_id: newsletter_id, campaign_id: campaign_id }, params);
    };
    // Subscribers (admin routes)
    /**
     * List all subscribers of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.listNewsletterSubscribers = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletterSubscribers, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Get a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param params Query parameters.
     * @returns Promise
     */
    Communities.viewNewsletterSubscriber = function (community_id, newsletter_id, subscriber_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletterSubscriber, undefined, { community_id: community_id, newsletter_id: newsletter_id, subscriber_id: subscriber_id }, params);
    };
    /**
     * Update a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param data The data to update.
     * @returns Promise
     */
    Communities.updateNewsletterSubscriber = function (community_id, newsletter_id, subscriber_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletterSubscriber, data, { community_id: community_id, newsletter_id: newsletter_id, subscriber_id: subscriber_id }, params);
    };
    /**
     * Delete a specific subscriber from a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @returns Promise
     */
    Communities.deleteNewsletterSubscriber = function (community_id, newsletter_id, subscriber_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletterSubscriber, undefined, { community_id: community_id, newsletter_id: newsletter_id, subscriber_id: subscriber_id }, params);
    };
    // Subscriber registration (open route)
    /**
     * Register a new subscriber to a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The subscriber data.
     * @returns Promise
     */
    Communities.registerNewsletterSubscriber = function (community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.registerNewsletterSubscriber, data, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Get newsletter overall reports (subscriber changes, unsubscribes, etc.).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with aggregated data
     */
    Communities.newsletterReports = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterReports, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Get campaign-level stats for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with campaign stats
     */
    Communities.newsletterCampaignReports = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterCampaignReports, undefined, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
    * Retrieves daily subscriber trend data for the specified newsletter.
    *
    * @param community_id The UUID of the community
    * @param newsletter_id The UUID of the newsletter
    * @param params Optional date-range filter (start_date, end_date, etc.)
    */
    Communities.newsletterSubscriberTrend = function (community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterSubscriberTrend, undefined, // no body data
        { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Export subscribers for a specific newsletter.
     * The file is generated asynchronously on the server and
     * the user is emailed a link to download the file.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    Communities.exportNewsletterSubscribers = function (community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.exportNewsletterSubscribers, data, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Import game installs from a game title installations to a newsletter
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    Communities.importGameInstalls = function (community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.importGameInstalls, data, { community_id: community_id, newsletter_id: newsletter_id }, params);
    };
    /**
     * Retrieve the current user's pending community invitations across all communities.
     *
     * @returns promise
     */
    Communities.myInvites = function (params) {
        return Requests.processRoute(CommunitiesRoute.routes.myInvites, {}, undefined, params);
    };
    /**
     * Resends an invitation to a user.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to resend.
     *
     * @returns promise
     */
    Communities.resendInvite = function (community_id, invite_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.resendInvite, {}, { community_id: community_id, invite_id: invite_id }, params);
    };
    /**
     * Revokes/deletes a community invitation.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to delete.
     *
     * @returns promise
     */
    Communities.deleteInvite = function (community_id, invite_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteInvite, {}, { community_id: community_id, invite_id: invite_id }, params);
    };
    /**
    * Create a one-time immediate invoice for a business account.
    *
    * @param community_id The ID of the community.
    * @param data { amount: number, description: string }
    */
    Communities.createOneTimeInvoice = function (community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createOneTimeInvoice, data, { community_id: community_id }, params);
    };
    /**
     * Get a detailed breakdown of a specific invoice including per-title usage.
     *
     * @param community_id The ID of the community.
     * @param invoice_id The Stripe Invoice ID (e.g., in_123...).
     */
    Communities.getInvoiceDetails = function (community_id, invoice_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getInvoiceDetails, undefined, { community_id: community_id, invoice_id: invoice_id }, params);
    };
    /**
     * Generate a custom date-range statement for reimbursement.
     *
     * @param community_id The ID of the community.
     * @param params Should include { start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     */
    /**
 * Generate a custom date-range statement for reimbursement.
 *
 * @param community_id The ID of the community.
 * @param startDate 'YYYY-MM-DD'
 * @param endDate 'YYYY-MM-DD'
 */
    Communities.getCustomStatement = function (community_id, startDate, endDate) {
        // Wrap the strings into a named object so Requests.get can serialize them correctly
        var params = {
            start_date: startDate,
            end_date: endDate
        };
        return Requests.processRoute(CommunitiesRoute.routes.getCustomStatement, undefined, { community_id: community_id }, params);
    };
    /**
 * List all Stripe invoices for the community.
 */
    Communities.listInvoices = function (community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.listInvoices, undefined, { community_id: community_id });
    };
    /**
     * List influencers saved to the community's private talent pool.
     *
     * @param community_id The UUID of the community.
     * @param params Optional filters like 'list_name'.
     */
    Communities.listSavedInfluencers = function (community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listSavedInfluencers, undefined, { community_id: community_id }, params);
    };
    /**
     * Save an influencer to the community's talent pool (Shortlist).
     *
     * @param community_id The UUID of the community.
     * @param data { influencer_id: string, list_name?: string, tags?: string[] }
     */
    Communities.saveInfluencerToPool = function (community_id, data) {
        return Requests.processRoute(CommunitiesRoute.routes.saveInfluencerToPool, data, { community_id: community_id });
    };
    return Communities;
}());

var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    UserRoutes.routes = {
        list: { url: '/users', method: HTTP_METHODS.GET },
        update: { url: '/users', method: HTTP_METHODS.PUT },
        follow: { url: '/users/{user_id}/follow', method: HTTP_METHODS.POST },
        profile: { url: '/users/{user_id}/profile', method: HTTP_METHODS.GET },
        me: { url: '/users/me', method: HTTP_METHODS.GET },
        syncInfluencer: { url: '/users/syncInfluencer', method: HTTP_METHODS.POST },
        generateInfluencerProfile: { url: '/users/generateInfluencerProfile', method: HTTP_METHODS.POST },
        oneTimeToken: { url: '/users/oneTimeToken', method: HTTP_METHODS.GET },
        uploadAvatar: { url: '/users/uploadAvatarImage', method: HTTP_METHODS.POST },
        uploadBanner: { url: '/users/uploadBannerImage', method: HTTP_METHODS.POST },
        createDonationPage: { url: '/users/createDonationPage', method: HTTP_METHODS.POST },
        clearTwitchAuth: { url: '/users/clearTwitchAuth', method: HTTP_METHODS.DELETE },
        clearFacebookAuth: { url: '/users/clearFacebookAuth', method: HTTP_METHODS.DELETE },
        clearGoogleAuth: { url: '/users/clearGoogleAuth', method: HTTP_METHODS.DELETE },
        clearStripeAuth: { url: '/users/clearStripeAuth', method: HTTP_METHODS.DELETE },
        clearTikTokAuth: { url: '/users/clearTikTokAuth', method: HTTP_METHODS.DELETE },
        clearYoutubeAuth: { url: '/users/clearYoutubeAuth', method: HTTP_METHODS.DELETE },
        clearRedditAuth: { url: '/users/clearRedditAuth', method: HTTP_METHODS.DELETE },
        clearTwitterAuth: { url: '/users/clearTwitterAuth', method: HTTP_METHODS.DELETE },
        clearDocusignAuth: { url: '/users/clearDocusignAuth', method: HTTP_METHODS.DELETE },
        clearStreamElementsAuth: { url: '/users/clearStreamElementsAuth', method: HTTP_METHODS.DELETE },
        getTipsReceivedForMonth: { url: '/users/getTipsReceivedForMonth', method: HTTP_METHODS.GET },
        getTipsGivenForMonth: { url: '/users/getTipsGivenForMonth', method: HTTP_METHODS.GET },
        aggregateMonthlyReceivedTips: { url: '/users/aggregateMonthlyReceivedTips', method: HTTP_METHODS.GET },
        aggregateMonthlyGivenTips: { url: '/users/aggregateMonthlyGivenTips', method: HTTP_METHODS.GET },
        getYoutubeChannels: { url: '/users/getYoutubeChannels', method: HTTP_METHODS.GET },
        getFacebookGroups: { url: '/users/getFacebookGroups', method: HTTP_METHODS.GET },
        addGenre: { url: '/users/addGenre', method: HTTP_METHODS.POST },
        removeGenre: { url: '/users/removeGenre/{genre_id}', method: HTTP_METHODS.DELETE },
        addType: { url: '/users/addType', method: HTTP_METHODS.POST },
        removeType: { url: '/users/removeType/{type_id}', method: HTTP_METHODS.DELETE },
        getCampaignInvites: { url: '/users/getCampaignInvites', method: HTTP_METHODS.GET },
        getPayouts: { url: '/users/getCampaignPayouts', method: HTTP_METHODS.GET },
        verifyAccount: { url: '/users/verify', method: HTTP_METHODS.POST },
        getInstagramAccounts: { url: '/users/instagramAccounts', method: HTTP_METHODS.GET },
        getFacebookPages: { url: "/users/facebookPages", method: HTTP_METHODS.GET },
        getSubreddits: { url: "/users/reddit/subreddits", method: HTTP_METHODS.GET },
        getSubredditFlairs: { url: "/users/reddit/redditflairs/{subreddit}", method: HTTP_METHODS.GET },
        search: { url: '/users/search', method: HTTP_METHODS.GET },
        resendVerificationEmail: { url: '/users/resendVerificationEmail', method: HTTP_METHODS.POST },
        clearInstagramAuth: { url: '/users/clearInstagramAuth', method: HTTP_METHODS.DELETE },
        getSubredditRules: { url: "/users/reddit/redditrules/{subreddit}", method: HTTP_METHODS.GET },
    };
    return UserRoutes;
}());

var Users = /** @class */ (function () {
    function Users() {
    }
    /**
     * List all the users.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     *
     * @returns promise
     */
    Users.list = function (params) {
        return Requests.processRoute(UserRoutes.routes.list, undefined, undefined, params);
    };
    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    Users.update = function (data, params) {
        return Requests.processRoute(UserRoutes.routes.update, data, undefined, params);
    };
    /**
     * Gets the current users information based on the current Json Web Token (JWT).
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Users.me = function (params) {
        return Requests.processRoute(UserRoutes.routes.me, {}, undefined, params);
    };
    /**
     * Gets the campaigns the users has been invited too.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Users.getCampaignInvites = function (params) {
        return Requests.processRoute(UserRoutes.routes.getCampaignInvites, {}, undefined, params);
    };
    /**
     * Gets payouts from past campaings
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Users.getPayouts = function (params) {
        return Requests.processRoute(UserRoutes.routes.getPayouts, {}, undefined, params);
    };
    /**
     * Sync the current influencer's information.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Users.syncInfluencer = function (params) {
        return Requests.processRoute(UserRoutes.routes.syncInfluencer, {}, undefined, params);
    };
    /**
     * Create profile data for an influencer based on their synced information and social media posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/generateUserInfluencerProfile
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Users.generateInfluencerProfile = function (params) {
        return Requests.processRoute(UserRoutes.routes.generateInfluencerProfile, {}, undefined, params);
    };
    /**
     * Will follow and unfollow a user. If the user is not being following, it will follow the user. If they are following, it will unfollow the user. The current JWT is used for the follower.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userToggleFollow
     *
     * @param user_id The id fo the user to retrieve.
     *
     * @returns promise
     */
    Users.followToggle = function (user_id) {
        return Requests.processRoute(UserRoutes.routes.follow, {}, { user_id: user_id });
    };
    /**
     * Show a users profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showUser
     *
     * @param user_id The id of the user to delete.
     * @returns promise
     */
    Users.profile = function (user_id) {
        return Requests.processRoute(UserRoutes.routes.profile, {}, { user_id: user_id });
    };
    /**
     * Retrieves a user's one time login token based on a users JWT.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userOneTimeLoginToken
     *
     *
     * @returns promise
     */
    Users.oneTimeLoginToken = function () {
        return Requests.processRoute(UserRoutes.routes.oneTimeToken, {});
    };
    /**
     * Updates the avatar image for the user using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Users.uploadAvatarImageFile = function (file, data) {
        return Requests.uploadFile(UserRoutes.routes.uploadAvatar.url, 'image', file, data);
    };
    /**
     * Updates the avatar image for the user using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Users.uploadAvatarImageBlob = function (blob, data) {
        return Requests.uploadBlob(UserRoutes.routes.uploadAvatar.url, 'image', blob, data);
    };
    /**
     * Upload a banner image for the user, as a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Users.uploadBannerImageFile = function (file, data) {
        return Requests.uploadFile(UserRoutes.routes.uploadBanner.url, 'image', file, data);
    };
    /**
     * Upload a banner image for the user, as a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Users.uploadBannerImageBlob = function (blob, data) {
        return Requests.uploadBlob(UserRoutes.routes.uploadBanner.url, 'image', blob, data);
    };
    /**
     * Creates a donation page for that user by syncing their information with various
     * payment service.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.createDonationPage = function () {
        return Requests.processRoute(UserRoutes.routes.createDonationPage, {});
    };
    /**
    * Clear Twitches authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    Users.clearTwitchAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearTwitchAuth, {});
    };
    /**
     * Clear Facebook authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearFacebookAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearFacebookAuth, {});
    };
    /**
     * Clear Google authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearGoogleAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearGoogleAuth, {});
    };
    /**
     * Clear Stripe authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearStripeAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearStripeAuth, {});
    };
    /**
     * Clear TikTok authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearTikTokAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearTikTokAuth, {});
    };
    /**
     * Clear YouTube authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearYoutubeAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearYoutubeAuth, {});
    };
    /**
     * Clear Reddit authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearRedditAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearRedditAuth, {});
    };
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearDocusignAuth
     *
     * @returns promise
     */
    Users.clearDocusignAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearDocusignAuth, {});
    };
    /**
     * Clear Twitter authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.clearTwitterAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearTwitterAuth, {});
    };
    /**
    * Clear StreamElements authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    Users.clearStreamElementsAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearStreamElementsAuth, {});
    };
    /**
     * Returns a list of tips received by the authenticated user for a given month and year
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.getTipsReceivedForMonth = function (params) {
        return Requests.processRoute(UserRoutes.routes.getTipsReceivedForMonth, undefined, undefined, params);
    };
    /**
     * Returns a list of tips given by the authenticated user for a given month and year.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.getTipsGivenForMonth = function (params) {
        return Requests.processRoute(UserRoutes.routes.getTipsGivenForMonth, undefined, undefined, params);
    };
    /**
     * Returns the aggregated monthly tips received by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.aggregateMonthlyReceivedTips = function (params) {
        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyReceivedTips, undefined, undefined, params);
    };
    /**
     * Returns the aggregated monthly tips given by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.aggregateMonthlyGivenTips = function (params) {
        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyGivenTips, undefined, undefined, params);
    };
    /**
     * Returns the user associated Youtube a channels a user has.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    Users.getFacebookGroups = function (params) {
        return Requests.processRoute(UserRoutes.routes.getFacebookGroups, undefined, undefined, params);
    };
    /**
     * Add a genre to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the genre information.
     *
     * @returns Promise
     */
    Users.addGenre = function (data, params) {
        return Requests.processRoute(UserRoutes.routes.addGenre, data, undefined, params);
    };
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    Users.removeGenre = function (genre_id, params) {
        return Requests.processRoute(UserRoutes.routes.removeGenre, undefined, { genre_id: genre_id }, params);
    };
    /**
     * Add a type to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the type information.
     *
     * @returns Promise
     */
    Users.addType = function (data, params) {
        return Requests.processRoute(UserRoutes.routes.addType, data, undefined, params);
    };
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    Users.removeType = function (type_id, params) {
        return Requests.processRoute(UserRoutes.routes.removeType, undefined, { type_id: type_id }, params);
    };
    /**
    * Verify a user's account to complete their sign-up process.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/verifyAccount
    *
    * @param data The genre information to be passed to update the type information.
    *
    * @returns Promise
    */
    Users.verifyAccount = function (data, params) {
        return Requests.processRoute(UserRoutes.routes.verifyAccount, data, undefined, params);
    };
    /**
     * Gets the instagram accounts associated with the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getInstagramAccounts
     *
     * @returns promise
     */
    Users.getInstagramAccounts = function (params) {
        return Requests.processRoute(UserRoutes.routes.getInstagramAccounts, undefined, undefined, params);
    };
    /**
   * Gets the Facebook Pages associated with the user.
   *
   * @see https://api.glitch.fun/api/documentation#/Users%20Route/getFacebookPages
   *
   * @returns Promise resolving to the list of Facebook Pages
   */
    Users.getFacebookPages = function (params) {
        return Requests.processRoute(UserRoutes.routes.getFacebookPages, undefined, undefined, params);
    };
    /**
     * Gets the subreddits the user is subscribed to.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubreddits
     *
     * @returns Promise resolving to the list of subreddits
     */
    Users.getSubreddits = function (params) {
        return Requests.processRoute(UserRoutes.routes.getSubreddits, undefined, undefined, params);
    };
    /**
     * Gets the flairs for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditFlairs
     *
     * @param subreddit The name of the subreddit to get flairs for.
     * @returns Promise resolving to the list of flairs
     */
    Users.getSubredditFlairs = function (subreddit, params) {
        return Requests.processRoute(UserRoutes.routes.getSubredditFlairs, undefined, { subreddit: subreddit }, params);
    };
    /**
     * Search all the users with advanced meilisearch options
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSearch
     *
     * @returns promise
     */
    Users.search = function (params) {
        return Requests.processRoute(UserRoutes.routes.search, undefined, undefined, params);
    };
    /**
     * Resends the verification email to the authenticated user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/resendVerificationEmail
     *
     * @returns Promise
     */
    Users.resendVerificationEmail = function () {
        return Requests.processRoute(UserRoutes.routes.resendVerificationEmail, {});
    };
    /**
     * Clear Instagram authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearInstagramAuth
     *
     * @returns promise
     */
    Users.clearInstagramAuth = function () {
        return Requests.processRoute(UserRoutes.routes.clearInstagramAuth, {});
    };
    /**
     * Gets the rules for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditRules
     *
     * @param subreddit The name of the subreddit to get rules for.
     * @returns Promise resolving to the list of rules
     */
    Users.getSubredditRules = function (subreddit, params) {
        return Requests.processRoute(UserRoutes.routes.getSubredditRules, undefined, { subreddit: subreddit }, params);
    };
    return Users;
}());

var EventsRoutes = /** @class */ (function () {
    function EventsRoutes() {
    }
    EventsRoutes.routes = {
        list: { url: '/events', method: HTTP_METHODS.GET },
        create: { url: '/events', method: HTTP_METHODS.POST },
        view: { url: '/events/{event_id}', method: HTTP_METHODS.GET },
        update: { url: '/events/{event_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/events/{event_id}', method: HTTP_METHODS.DELETE },
        updateInvirtu: { url: '/events/{event_id}/invirtu', method: HTTP_METHODS.PUT },
        syncAsLive: { url: '/events/{event_id}/syncAsLive', method: HTTP_METHODS.POST },
        addRTMPSource: { url: '/events/{event_id}/addRTMPSource', method: HTTP_METHODS.POST },
        updateRTMPSource: { url: '/events/{event_id}/updateRTMPSource/{subid}', method: HTTP_METHODS.PUT },
        removeRTMPSource: { url: '/events/{event_id}/removeRTMPSource/{subid}', method: HTTP_METHODS.DELETE },
        uploadMainImage: { url: '/events/{event_id}/uploadMainImage', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/events/{event_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        enableBroadcastMode: { url: '/events/{event_id}/enableBroadcastMode', method: HTTP_METHODS.POST },
        enableLivestreamMode: { url: '/events/{event_id}/enableLivestreamMode', method: HTTP_METHODS.POST },
        sendOnScreenContent: { url: '/events/{event_id}/sendOnScreenContent', method: HTTP_METHODS.POST },
        addOverlay: { url: '/events/{event_id}/addOverlay', method: HTTP_METHODS.POST },
        removeOverlay: { url: '/events/{event_id}/removeOverlay/{subid}', method: HTTP_METHODS.DELETE },
        enableOverlay: { url: '/events/{event_id}/enableOverlay/{subid}', method: HTTP_METHODS.POST },
        disableOverlay: { url: '/events/{event_id}/disableOverlay', method: HTTP_METHODS.POST },
        enableDonations: { url: '/events/{event_id}/enableDonations', method: HTTP_METHODS.POST },
        disableDonations: { url: '/events/{event_id}/disableDonations', method: HTTP_METHODS.POST },
        sendInvite: { url: '/events/{event_id}/sendInvite', method: HTTP_METHODS.POST },
        acceptInvite: { url: '/events/{event_id}/acceptInvite', method: HTTP_METHODS.POST },
        addTwitchMulticast: { url: '/events/{event_id}/addTwitchMulticast', method: HTTP_METHODS.POST },
        addFacebookMulticast: { url: '/events/{event_id}/addFacebookMulticast', method: HTTP_METHODS.POST },
        addYoutubeMulticast: { url: '/events/{event_id}/addYoutubeMulticast', method: HTTP_METHODS.POST },
        enableWidget: { url: '/events/{event_id}/enableWidget/{widget_id}', method: HTTP_METHODS.POST },
        disableWidget: { url: '/events/{event_id}/disableWidget/{widget_id}', method: HTTP_METHODS.DELETE },
        getTips: { url: '/events/{event_id}/tips', method: HTTP_METHODS.GET },
        setAIAvatarPersonalityAttribute: { url: '/events/{event_id}/setAIAvatarPersonalityAttribute', method: HTTP_METHODS.POST },
        setAIAvatarName: { url: '/events/{event_id}/setAIAvatarName', method: HTTP_METHODS.POST },
        setAIAccent: { url: '/events/{event_id}/setAIAccent', method: HTTP_METHODS.POST },
        setAIAvatarRespondToChat: { url: '/events/{event_id}/setAIAvatarRespondToChat', method: HTTP_METHODS.POST },
        setAIAvatarRespondToMe: { url: '/events/{event_id}/setAIAvatarRespondToMe', method: HTTP_METHODS.POST },
        statistics: { url: '/events/{event_id}/statistics', method: HTTP_METHODS.GET },
        streamViewCounts: { url: '/events/{event_id}/streamViewCounts', method: HTTP_METHODS.GET },
    };
    return EventsRoutes;
}());

var RecordingsRoute = /** @class */ (function () {
    function RecordingsRoute() {
    }
    RecordingsRoute.routes = {
        update: { url: '/events/{event_id}/recording/{recording_id}', method: HTTP_METHODS.PUT },
    };
    return RecordingsRoute;
}());

var Events = /** @class */ (function () {
    function Events() {
    }
    /**
     * List all the events
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     *
     * @returns promise
     */
    Events.list = function (params) {
        return Requests.processRoute(EventsRoutes.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     *
     * @param data The data to be passed when creating an event.
     *
     * @returns Promise
     */
    Events.create = function (data, params) {
        return Requests.processRoute(EventsRoutes.routes.create, data, undefined, params);
    };
    /**
     * Update a event
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Events.update = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.update, data, { event_id: event_id }, params);
    };
    /**
     * Retrieve the information for a single event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     *
     * @param event_id The id fo the event to retrieve.
     *
     * @returns promise
     */
    Events.view = function (event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.view, {}, { event_id: event_id }, params);
    };
    /**
     * Deletes a event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     *
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    Events.delete = function (event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.delete, {}, { event_id: event_id }, params);
    };
    /**
     * The event is synced with Invirtu for the lie streams. This will allow you to update
     *
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Events.updateInvirtuEvent = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.updateInvirtu, data, { event_id: event_id }, params);
    };
    /**
     * Add an RTMP source to multicast a stream too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.addRTMPSource = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addRTMPSource, data, { event_id: event_id }, params);
    };
    /**
     * Update an RTMP Source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.updateRTMPSource = function (event_id, stream_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.updateRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    };
    /**
     * Remove a RTMP source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.removeRTMPSource = function (event_id, stream_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.removeRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    };
    /**
     * Add a Twitch Stream to the current event. The user must have authenticatd with Twitch.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.addTwitchMulticast = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addTwitchMulticast, data, { event_id: event_id }, params);
    };
    /**
     * Add a Facebook Stream to the current event. The user must have authenticatd with Facebook.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.addFacebookMulticast = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addFacebookMulticast, data, { event_id: event_id }, params);
    };
    /**
     * Add a Youtube Stream to the current event. The user must have authenticatd with Google.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    Events.addYoutubeMulticast = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addYoutubeMulticast, data, { event_id: event_id }, params);
    };
    /**
     * A function that should be run on an interval to set the event as live when the live stream is active.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/syncLive
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.syncAsLive = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.syncAsLive, data, { event_id: event_id }, params);
    };
    /**
     * Updates the main image for the event using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Events.uploadMainImageFile = function (event_id, file, data, params) {
        var url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the event using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Events.uploadMainImageBlob = function (event_id, blob, data, params) {
        var url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the banner image for the event using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Events.uploadBannerImageFile = function (event_id, file, data, params) {
        var url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the event using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Events.uploadBannerImageBlob = function (event_id, blob, data, params) {
        var url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Enable Broadcast Mode. Broadcast mode is when the live stream is broadcasted from the game play through a protocol
     * such as screen sharing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableBroadcastMode
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.enableBroadcastMode = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableBroadcastMode, data, { event_id: event_id }, params);
    };
    /**
     * Enable livestream mode, in which the stream will be delivered to the invirtu RTMP endpoint for
     * streaming.
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.enableLivestreamMode = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    };
    /**
     * Sends content that will appear on-screen to the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/sendOnScreenContent
     *
     * @param event_id The id of the event.
     * @param data The information to send on-screen.
     *
     * @returns promise
     */
    Events.sendOnScreenContent = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    };
    /**
     * Uploads an image that can be used and overlay later. A File object is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param file The image as a file.
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    Events.addOverlayAsFile = function (event_id, file, data) {
        var url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Uploads an image that can be used and overlay later. A blob is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param blob Image data as a blob
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    Events.addOverlayAsBlob = function (event_id, blob, data, params) {
        var url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Deletes an overlay image.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryOverlayStorage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    Events.removeOverlay = function (event_id, overlay_id, params) {
        return Requests.processRoute(EventsRoutes.routes.removeOverlay, {}, { event_id: event_id, subid: overlay_id }, params);
    };
    /**
     * Enables an overlay so that it will appear on screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableOverlayImage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    Events.enableOverlay = function (event_id, overlay_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableOverlay, data, { event_id: event_id, subid: overlay_id }, params);
    };
    /**
     * Disables the overlay so it no longer appears on-screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.disableOverlay = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableOverlay, data, { event_id: event_id }, params);
    };
    /**
     * Enable the donations to appear on-screen
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableDonations
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.enableDonations = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableDonations, data, { event_id: event_id }, params);
    };
    /**
     * Disable the donations and remove from the screen.
     *
     * @param event_id
     * @returns
     */
    Events.disableDonations = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableDonations, data, { event_id: event_id }, params);
    };
    Events.sendInvite = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.sendInvite, data, { event_id: event_id }, params);
    };
    Events.acceptInvite = function (event_id, token, params) {
        return Requests.processRoute(EventsRoutes.routes.acceptInvite, { token: token }, { event_id: event_id }, params);
    };
    /**
     * Update a recording related to an event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param recording_id The id of the recording to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Events.updateRecording = function (event_id, recording_id, data, params) {
        return Requests.processRoute(RecordingsRoute.routes.update, data, { event_id: event_id, recording_id: recording_id }, params);
    };
    /**
     * Enable a widget for the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param widget_id The id of the widget to enable.
     * @param data The data, which should contain the roles.
     *
     * @returns promise
     */
    Events.enableWidget = function (event_id, widget_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableWidget, data, { event_id: event_id, widget_id: widget_id }, params);
    };
    /**
     * Disable a widget for the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param widget_id The id of the widget to disable.
     *
     * @returns promise
     */
    Events.disableWidget = function (event_id, widget_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableWidget, data, { event_id: event_id, widget_id: widget_id }, params);
    };
    /**
     * Get all the tips associated with the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     *
     * @returns promise
     */
    Events.getTips = function (event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.getTips, {}, { event_id: event_id }, params);
    };
    /**
     * Sets the personality attribute of the AI to adjust how it will respond.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.setAIAvatarPersonalityAttribute = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarPersonalityAttribute, data, { event_id: event_id }, params);
    };
    /**
     * Sets the AI Avatars name, which it can respond too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.setAIAvatarName = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarName, data, { event_id: event_id }, params);
    };
    /**
     * Sets the AI Avatars accent, that will dictate the void in which it responds.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.setAIAccent = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAccent, data, { event_id: event_id }, params);
    };
    /**
     * Sets the AI Avatar to that it willr respond to users in the chat.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.setAIAvatarRespondToChat = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarRespondToChat, data, { event_id: event_id }, params);
    };
    /**
     * Sets the AI Avatar so that it will respond to you.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    Events.setAIAvatarRespondToMe = function (event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarRespondToMe, data, { event_id: event_id }, params);
    };
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getStreamStatistics
     *
     * @returns promise
     */
    Events.statistics = function (event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.statistics, undefined, { event_id: event_id }, params);
    };
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getEventStreamViewCounts
     *
     * @returns promise
     */
    Events.getStreamViewCounts = function (event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.streamViewCounts, undefined, { event_id: event_id }, params);
    };
    return Events;
}());

var FingerprintingRoute = /** @class */ (function () {
    function FingerprintingRoute() {
    }
    FingerprintingRoute.routes = {
        listFingerprints: {
            url: '/reports/fingerprinting/fingerprints',
            method: HTTP_METHODS.GET
        },
        userJourneyReport: {
            url: '/reports/fingerprinting/user-journeys',
            method: HTTP_METHODS.GET
        },
        attributionReport: {
            url: '/reports/fingerprinting/attribution',
            method: HTTP_METHODS.GET
        },
        deviceClusterReport: {
            url: '/reports/fingerprinting/device-clusters',
            method: HTTP_METHODS.GET
        },
        identityClusterReport: {
            url: '/reports/fingerprinting/identity-clusters',
            method: HTTP_METHODS.GET
        },
        attributionFunnelReport: {
            url: '/reports/fingerprinting/attribution-funnel',
            method: HTTP_METHODS.GET
        },
        deviceEnvironmentReport: {
            url: '/reports/fingerprinting/device-environment',
            method: HTTP_METHODS.GET
        },
        uniqueReturningReport: {
            url: '/reports/fingerprinting/unique-returning',
            method: HTTP_METHODS.GET
        },
        fraudDetectionReport: {
            url: '/reports/fingerprinting/fraud-detection',
            method: HTTP_METHODS.GET
        },
        geolocationReport: {
            url: '/reports/fingerprinting/geolocation',
            method: HTTP_METHODS.GET
        },
        pixelAttributionReport: {
            url: '/reports/fingerprinting/pixel-attribution',
            method: HTTP_METHODS.GET
        },
        installJourneyReport: {
            url: '/reports/fingerprinting/install-journey',
            method: HTTP_METHODS.GET
        },
        adCampaignPerformanceReport: {
            url: '/reports/fingerprinting/ad-campaign-performance',
            method: HTTP_METHODS.GET
        },
    };
    return FingerprintingRoute;
}());

var Fingerprinting = /** @class */ (function () {
    function Fingerprinting() {
    }
    /**
     * List identified user fingerprints with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - device_id?: string - Filter by device ID
     *   - user_install_id?: string - Filter by user install ID
     *   - browser_fingerprint?: string - Filter by browser fingerprint hash
     *   - device_fingerprint?: string - Filter by device fingerprint hash
     *   - is_bot?: boolean - Filter by bot status
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - sort?: 'first_seen_at'|'last_seen_at'|'match_confidence' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated fingerprints data
     */
    Fingerprinting.listFingerprints = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.listFingerprints, {}, undefined, params);
    };
    /**
     * Get cross-platform user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - fingerprint_id?: string - Specific fingerprint ID to analyze
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: 'web'|'ios'|'android'|'steam'|'console' - Filter by platform
     *   - event_type?: string - Filter by event type
     *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
     *   - include_paths?: boolean - Include journey paths in response
     * @returns Promise with user journey report data
     */
    Fingerprinting.userJourneyReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.userJourneyReport, {}, undefined, params);
    };
    /**
     * Get cross-platform attribution reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: 'game_install'|'game_purchase'|'web_event' - Conversion event to analyze
     *   - attribution_model?: 'first_touch'|'last_touch'|'linear'|'time_decay'|'position_based' - Attribution model
     * @returns Promise with attribution report data
     */
    Fingerprinting.attributionReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.attributionReport, {}, undefined, params);
    };
    /**
     * Get cross-device identity clusters
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum match confidence score (0-100)
     * @returns Promise with device cluster report data
     */
    Fingerprinting.deviceClusterReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.deviceClusterReport, {}, undefined, params);
    };
    /**
     * Get combined identity clusters and user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to include (0-100)
     *   - platform?: string - Filter by platform
     *   - include_journeys?: boolean - Include detailed journeys
     * @returns Promise with identity cluster report data
     */
    Fingerprinting.identityClusterReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.identityClusterReport, {}, undefined, params);
    };
    /**
     * Get combined attribution paths and conversion funnels
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: string - Conversion event type
     *   - attribution_model?: string - Attribution model
     *   - funnel_steps?: string - Comma-separated funnel steps
     * @returns Promise with attribution and funnel report data
     */
    Fingerprinting.attributionFunnelReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.attributionFunnelReport, {}, undefined, params);
    };
    /**
     * Get device and environment breakdown reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: string - Filter by platform
     *   - group_by?: 'device_type'|'os'|'browser'|'country_code' - Grouping field
     * @returns Promise with device and environment report data
     */
    Fingerprinting.deviceEnvironmentReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.deviceEnvironmentReport, {}, undefined, params);
    };
    /**
     * Get unique vs returning user metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - retention_period?: number - Days to consider for retention
     * @returns Promise with retention metrics data
     */
    Fingerprinting.uniqueReturningReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.uniqueReturningReport, {}, undefined, params);
    };
    /**
     * Get fraud and bot detection metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to flag (0-100)
     * @returns Promise with fraud detection data
     */
    Fingerprinting.fraudDetectionReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.fraudDetectionReport, {}, undefined, params);
    };
    /**
     * Get geolocation distribution of users
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    Fingerprinting.geolocationReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.geolocationReport, {}, undefined, params);
    };
    /**
     * Get pixel and utem reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    Fingerprinting.pixelAttributionReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.pixelAttributionReport, {}, undefined, params);
    };
    /**
     * Get an understanding of the path people take to install your game
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    Fingerprinting.installJourneyReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.installJourneyReport, {}, undefined, params);
    };
    /**
     * Get how the ad campaigns are performing and turning into installs
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    Fingerprinting.adCampaignPerformanceReport = function (params) {
        return Requests.processRoute(FingerprintingRoute.routes.adCampaignPerformanceReport, {}, undefined, params);
    };
    return Fingerprinting;
}());

var TeamsRoute = /** @class */ (function () {
    function TeamsRoute() {
    }
    TeamsRoute.routes = {
        list: { url: '/teams', method: HTTP_METHODS.GET },
        create: { url: '/teams', method: HTTP_METHODS.POST },
        view: { url: '/teams/{team_id}', method: HTTP_METHODS.GET },
        update: { url: '/teams/{team_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/teams/{team_id}', method: HTTP_METHODS.DELETE },
        uploadMainImage: { url: '/teams/{team_id}/uploadMainImage', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/teams/{team_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        listInvites: { url: '/teams/{team_id}/invites', method: HTTP_METHODS.GET },
        sendInvite: { url: '/teams/{team_id}/sendInvite', method: HTTP_METHODS.POST },
        acceptInvite: { url: '/teams/{team_id}/acceptInvite', method: HTTP_METHODS.POST },
        listTeamUsers: { url: '/teams/{team_id}/users', method: HTTP_METHODS.GET },
        addTeamUser: { url: '/teams/{team_id}/users', method: HTTP_METHODS.POST },
        showTeamUser: { url: '/teams/{team_id}/users/{user_id}', method: HTTP_METHODS.GET },
        updateTeamUser: { url: '/teams/{team_id}/users/{user_id}', method: HTTP_METHODS.PUT },
        removeTeamUser: { url: '/teams/{team_id}/users/{user_id}', method: HTTP_METHODS.DELETE }
    };
    return TeamsRoute;
}());

var Teams = /** @class */ (function () {
    function Teams() {
    }
    /**
     * List all the teams
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsList
     *
     * @returns promise
     */
    Teams.list = function (params) {
        return Requests.processRoute(TeamsRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    Teams.create = function (data, params) {
        return Requests.processRoute(TeamsRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUpdate
     *
     * @param team_id The id of the team to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Teams.update = function (team_id, data, params) {
        return Requests.processRoute(TeamsRoute.routes.create, data, { team_id: team_id }, undefined);
    };
    /**
     * Retrieve the information for a single team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamShow
     *
     * @param team_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    Teams.view = function (team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.view, {}, { team_id: team_id }, params);
    };
    /**
     * Deletes a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamDelete
     *
     * @param team_id The id of the team to delete.
     * @returns promise
     */
    Teams.delete = function (team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.delete, {}, { team_id: team_id }, params);
    };
    /**
     * Updates the main image for the team using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Teams.uploadMainImageFile = function (team_id, file, data) {
        var url = TeamsRoute.routes.uploadMainImage.url.replace('{team_id}', team_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the team using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Teams.uploadMainImageBlob = function (team_id, blob, data) {
        var url = TeamsRoute.routes.uploadMainImage.url.replace('{team_id}', team_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the banner image for the team using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Teams.uploadBannerImageFile = function (team_id, file, data) {
        var url = TeamsRoute.routes.uploadBannerImage.url.replace('{team_id}', team_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the team using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Teams.uploadBannerImageBlob = function (team_id, blob, data) {
        var url = TeamsRoute.routes.uploadBannerImage.url.replace('{team_id}', team_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * List the invites that have been sent for the team to users.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsUserInviteList
     *
     * @param team_id The id of the team
     *
     * @returns promise
     */
    Teams.listInvites = function (team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.listInvites, {}, { team_id: team_id }, params);
    };
    /**
     * Send an invitation to a user to join the team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamSendInvite
     *
     * @param team_id The id of the team.
     * @param data The data that will be passed into sending an invite.
     *
     * @returns promise
     */
    Teams.sendInvite = function (team_id, data) {
        return Requests.processRoute(TeamsRoute.routes.sendInvite, data, { team_id: team_id });
    };
    /**
     * Accept an invite to a team. The JSON Web Token (JWT) must be related to the token.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamAcceptInvite
     *
     * @param team_id The id of the team
     * @param token The token required to accept the user.
     *
     * @returns promise
     */
    Teams.acceptInvite = function (team_id, token) {
        return Requests.processRoute(TeamsRoute.routes.acceptInvite, {}, { team_id: team_id });
    };
    /**
     * List the users who are currently associated with the team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUserList
     *
     * @param team_id The id of the team.
     *
     * @returns promise
     */
    Teams.listUsers = function (team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.listTeamUsers, {}, { team_id: team_id }, params);
    };
    /**
     * Add a user to a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/createTeamUser
     *
     * @param team_id The id of the team.
     * @param data The data to be passed when adding a user.
     *
     * @returns promise
     */
    Teams.addUser = function (team_id, data) {
        return Requests.processRoute(TeamsRoute.routes.addTeamUser, data, { team_id: team_id });
    };
    /**
     * Retrieves a single user and their information that is associated with a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/showTeamUser
     *
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Teams.getUser = function (team_id, user_id) {
        return Requests.processRoute(TeamsRoute.routes.showTeamUser, {}, { team_id: team_id, user_id: user_id });
    };
    /**
     * Updates the users information associated with the team.
     *
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Teams.updatetUser = function (team_id, user_id, data) {
        return Requests.processRoute(TeamsRoute.routes.updateTeamUser, data, { team_id: team_id, user_id: user_id });
    };
    /**
     * Removes a user from a team.
     *
     * @param team_id The id of team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    Teams.removetUser = function (team_id, user_id) {
        return Requests.processRoute(TeamsRoute.routes.removeTeamUser, {}, { team_id: team_id, user_id: user_id });
    };
    return Teams;
}());

var WaitlistRoutes = /** @class */ (function () {
    function WaitlistRoutes() {
    }
    WaitlistRoutes.routes = {
        list: { url: '/waitlists', method: HTTP_METHODS.GET },
        create: { url: '/waitlists', method: HTTP_METHODS.POST },
        show: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.GET },
        update: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.DELETE },
    };
    return WaitlistRoutes;
}());

var Waitlists = /** @class */ (function () {
    function Waitlists() {
    }
    /**
     * List all the waitlist sign-ups.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistList
     *
     * @returns promise
     */
    Waitlists.list = function (params) {
        return Requests.processRoute(WaitlistRoutes.routes.list, undefined, undefined, params);
    };
    /**
     * Sign-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    Waitlists.create = function (data, params) {
        return Requests.processRoute(WaitlistRoutes.routes.create, data, undefined, params);
    };
    /**
     * Update a waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     *
     * @param waitlist_id The id of the team to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Waitlists.update = function (waitlist_id, data, params) {
        return Requests.processRoute(WaitlistRoutes.routes.update, data, { waitlist_id: waitlist_id }, params);
    };
    /**
     * Retrieve the information for a single user who signed-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     *
     * @param waitlist_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    Waitlists.view = function (waitlist_id, params) {
        return Requests.processRoute(WaitlistRoutes.routes.view, {}, { waitlist_id: waitlist_id }, params);
    };
    /**
     * Deletes an entry from the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistDelete
     *
     * @param waitlist_id The id of the team to delete.
     * @returns promise
     */
    Waitlists.delete = function (waitlist_id, params) {
        return Requests.processRoute(WaitlistRoutes.routes.delete, {}, { waitlist_id: waitlist_id }, params);
    };
    return Waitlists;
}());

var PostsRoute = /** @class */ (function () {
    function PostsRoute() {
    }
    PostsRoute.routes = {
        list: { url: '/posts', method: HTTP_METHODS.GET },
        create: { url: '/posts', method: HTTP_METHODS.POST },
        view: { url: '/posts/{post_id}', method: HTTP_METHODS.GET },
        update: { url: '/posts/{post_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/posts/{post_id}', method: HTTP_METHODS.DELETE },
        toggleInteraction: { url: '/posts/{post_id}/toggleInteraction', method: HTTP_METHODS.POST },
    };
    return PostsRoute;
}());

var Posts = /** @class */ (function () {
    function Posts() {
    }
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    Posts.list = function (params) {
        return Requests.processRoute(PostsRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    Posts.create = function (data, params) {
        return Requests.processRoute(PostsRoute.routes.create, data, undefined, params);
    };
    /**
    * Create a new post with a file. The file should either be an image or video.
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    Posts.createWithFile = function (file, data) {
        return Requests.uploadFile(PostsRoute.routes.create.url, 'file', file, data);
    };
    /**
     * Create a new post with a blob. The blob should either be an image or video.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Posts.createWithBlob = function (blob, data) {
        return Requests.uploadBlob(PostsRoute.routes.create.url, 'file', blob, data);
    };
    /**
   * Create a new post with a file divided into chunks.
   *
   * @param file The file object to upload.
   * @param chunkSize Size of each chunk in bytes. Default is 1MB.
   * @param data Any additional data to pass along to the upload.
   *
   * @returns Promise
   */
    /**
     * Create a new post with a file divided into chunks.
     *
     * @param file The file object to upload.
     * @param chunkSize Size of each chunk in bytes. Default is 1MB.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns Promise
     */
    Posts.createWithFileInChunks = function (file, chunkSize, data) {
        if (chunkSize === void 0) { chunkSize = 1 * 1024 * 1024; }
        if (data === void 0) { data = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var totalChunks, i, start, end, chunk, formData, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totalChunks = Math.ceil(file.size / chunkSize);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < totalChunks)) return [3 /*break*/, 6];
                        start = i * chunkSize;
                        end = start + chunkSize;
                        chunk = file.slice(start, end);
                        formData = new FormData();
                        formData.append('file', chunk, "".concat(i, "-").concat(file.name)); // Naming chunks as index-filename for identification
                        formData.append('totalChunks', totalChunks.toString());
                        formData.append('currentChunk', i.toString());
                        // merge any other data if provided
                        for (key in data) {
                            formData.append(key, data[key]);
                        }
                        if (!(i === totalChunks - 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        {
                            throw new Error("No response from the last chunk upload");
                        }
                }
            });
        });
    };
    /**
     * Update a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param post_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Posts.update = function (post_id, data, params) {
        return Requests.processRoute(PostsRoute.routes.update, data, { post_id: post_id }, params);
    };
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    Posts.view = function (post_id, params) {
        return Requests.processRoute(PostsRoute.routes.view, {}, { post_id: post_id }, params);
    };
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    Posts.delete = function (post_id, params) {
        return Requests.processRoute(PostsRoute.routes.delete, {}, { post_id: post_id }, params);
    };
    /**
     * Toggle a social interaction and off for a post.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Post%20Route/postToggleInteraction
     *
     * @param data The data to be passed when toggling the interaction.
     *
     * @returns Promise
     */
    Posts.toggleInteraction = function (post_id, data, params) {
        return Requests.processRoute(PostsRoute.routes.toggleInteraction, data, { post_id: post_id }, params);
    };
    return Posts;
}());

var SocialRoute = /** @class */ (function () {
    function SocialRoute() {
    }
    SocialRoute.routes = {
        postVideoToTikTok: { url: '/social/postVideoToTikTok', method: HTTP_METHODS.POST },
        postVideoToFacebookGroup: { url: '/social/postVideoToFacebookGroup', method: HTTP_METHODS.POST },
        postVideoToTwitter: { url: '/social/postVideoToTwitter', method: HTTP_METHODS.POST },
    };
    return SocialRoute;
}());

var Social = /** @class */ (function () {
    function Social() {
    }
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    Social.postVideoToTikTokFile = function (file, data, params) {
        var url = SocialRoute.routes.postVideoToTikTok.url;
        return Requests.uploadFile(url, 'video', file, data);
    };
    Social.postVideoToTikTokBlob = function (blob, data, params) {
        var url = SocialRoute.routes.postVideoToTikTok.url;
        return Requests.uploadBlob(url, 'video', blob, data);
    };
    Social.postVideoToFacebookGroupFile = function (file, data, params) {
        var url = SocialRoute.routes.postVideoToFacebookGroup.url;
        return Requests.uploadFile(url, 'video', file, data);
    };
    Social.postVideoToFacebookGroupBlob = function (blob, data, params) {
        var url = SocialRoute.routes.postVideoToFacebookGroup.url;
        return Requests.uploadBlob(url, 'video', blob, data);
    };
    Social.postVideoToTwitter = function (file, data, onProgress, params) {
        var url = SocialRoute.routes.postVideoToTwitter.url;
        return Requests.uploadFileInChunks(file, url, onProgress, data);
    };
    return Social;
}());

var TemplatesRoute = /** @class */ (function () {
    function TemplatesRoute() {
    }
    TemplatesRoute.routes = {
        list: { url: '/templates', method: HTTP_METHODS.GET },
        create: { url: '/templates', method: HTTP_METHODS.POST },
        view: { url: '/templates/{template_id}', method: HTTP_METHODS.GET },
        update: { url: '/templates/{template_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/templates/{template_id}', method: HTTP_METHODS.DELETE },
        uploadLogo: { url: '/templates/{template_id}/uploadLogo', method: HTTP_METHODS.POST },
        uploadMainImage: { url: '/templates/{template_id}/uploadMainImage', method: HTTP_METHODS.POST },
    };
    return TemplatesRoute;
}());

var Templates = /** @class */ (function () {
    function Templates() {
    }
    /**
     * List all the templates.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/resourceTemplateList
     *
     * @returns promise
     */
    Templates.list = function (params) {
        return Requests.processRoute(TemplatesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/newTemplateResourceStorage
     *
     * @param data The data to be passed when creating a template.
     *
     * @returns Promise
     */
    Templates.create = function (data, params) {
        return Requests.processRoute(TemplatesRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/updateTemplateStorage
     *
     * @param template_id The id of the template to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Templates.update = function (template_id, data, params) {
        return Requests.processRoute(TemplatesRoute.routes.update, data, { template_id: template_id }, params);
    };
    /**
     * Retrieve the information for a single template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/showTemplateStorage
     *
     * @param template_id The id fo the template to retrieve.
     *
     * @returns promise
     */
    Templates.view = function (template_id, params) {
        return Requests.processRoute(TemplatesRoute.routes.view, {}, { template_id: template_id }, params);
    };
    /**
     * Deletes a template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/destoryTemplateStorage
     *
     * @param template_id The id of the template to delete.
     * @returns promise
     */
    Templates.delete = function (template_id, params) {
        return Requests.processRoute(TemplatesRoute.routes.delete, {}, { template_id: template_id }, params);
    };
    /**
     * Updates the logo for the template using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Templates.uploadLogoFile = function (template_id, file, data, params) {
        var url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the logo for the template using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Templates.uploadLogoBlob = function (template_id, blob, data, params) {
        var url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the main image for the template using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Templates.uploadMainImageFile = function (template_id, file, data, params) {
        var url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the template using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Templates.uploadMainImageBlob = function (template_id, blob, data, params) {
        var url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    return Templates;
}());

var UtilityRoutes = /** @class */ (function () {
    function UtilityRoutes() {
    }
    UtilityRoutes.routes = {
        social_interactions: { url: '/util/socialinteractions', method: HTTP_METHODS.GET },
        genres: { url: '/util/genres', method: HTTP_METHODS.GET },
        countries: { url: '/util/countries', method: HTTP_METHODS.GET },
        genders: { url: '/util/genders', method: HTTP_METHODS.GET },
        ethnicities: { url: '/util/ethnicities', method: HTTP_METHODS.GET },
        types: { url: '/util/types', method: HTTP_METHODS.GET },
    };
    return UtilityRoutes;
}());

var Utility = /** @class */ (function () {
    function Utility() {
    }
    /**
     * Get all the social interactions and emojis that are available.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilSocialInteraction
     *
     * @returns promise
     */
    Utility.listSocialInteractions = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.social_interactions, undefined, undefined, params);
    };
    /**
     * Get all the genres available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    Utility.listGenres = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.genres, undefined, undefined, params);
    };
    /**
     * Get all the genders available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenders
     *
     * @returns promise
     */
    Utility.listGenders = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.genders, undefined, undefined, params);
    };
    /**
     * Get all the countries available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    Utility.listCountries = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.countries, undefined, undefined, params);
    };
    /**
     * Get all the ethnicities available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    Utility.listEthnicities = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.ethnicities, undefined, undefined, params);
    };
    /**
     * Get all the game types available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilTypes
     *
     * @returns promise
     */
    Utility.listTypes = function (params) {
        return Requests.processRoute(UtilityRoutes.routes.types, undefined, undefined, params);
    };
    return Utility;
}());

var TipRoute = /** @class */ (function () {
    function TipRoute() {
    }
    TipRoute.routes = {
        give: { url: '/tips/give', method: HTTP_METHODS.POST },
    };
    return TipRoute;
}());

var Tips = /** @class */ (function () {
    function Tips() {
    }
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    Tips.give = function (data, params) {
        return Requests.processRoute(TipRoute.routes.give, data, {}, params);
    };
    return Tips;
}());

var TipEmojiRoute = /** @class */ (function () {
    function TipEmojiRoute() {
    }
    TipEmojiRoute.routes = {
        list: { url: '/tipstypes', method: HTTP_METHODS.GET },
        create: { url: '/tipstypes', method: HTTP_METHODS.POST },
        view: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.GET },
        update: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.PUT },
        DELETE: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.DELETE },
    };
    return TipEmojiRoute;
}());

var TipEmojis = /** @class */ (function () {
    function TipEmojis() {
    }
    /**
     * Retrieve a list of emojis for tupping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    TipEmojis.list = function (params) {
        return Requests.processRoute(TipEmojiRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new emoji to use when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    TipEmojis.create = function (data, params) {
        return Requests.processRoute(TipEmojiRoute.routes.create, data, undefined, params);
    };
    /**
     * Update an emoji for tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param type_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    TipEmojis.update = function (type_id, data, params) {
        return Requests.processRoute(TipEmojiRoute.routes.update, data, { type_id: type_id }, params);
    };
    /**
     * Retrieve a single emoji resource to be used when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param type_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    TipEmojis.view = function (type_id, params) {
        return Requests.processRoute(TipEmojiRoute.routes.view, {}, { type_id: type_id }, params);
    };
    /**
     * Delete an emoji resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param type_id The id of the post to delete.
     * @returns promise
     */
    TipEmojis.delete = function (type_id, params) {
        return Requests.processRoute(TipEmojiRoute.routes.delete, {}, { type_id: type_id }, params);
    };
    return TipEmojis;
}());

var TipPackagesRoute = /** @class */ (function () {
    function TipPackagesRoute() {
    }
    TipPackagesRoute.routes = {
        list: { url: '/tipspackages', method: HTTP_METHODS.GET },
        create: { url: '/tipspackages', method: HTTP_METHODS.POST },
        view: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.GET },
        update: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.PUT },
        DELETE: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.DELETE },
    };
    return TipPackagesRoute;
}());

var TipPackages = /** @class */ (function () {
    function TipPackages() {
    }
    /**
     * Retrieve a list of tip packages.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    TipPackages.list = function (params) {
        return Requests.processRoute(TipPackagesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    TipPackages.create = function (data, params) {
        return Requests.processRoute(TipPackagesRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param package_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    TipPackages.update = function (package_id, data, params) {
        return Requests.processRoute(TipPackagesRoute.routes.update, data, { package_id: package_id }, params);
    };
    /**
     * Retrieve a single tip package resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param package_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    TipPackages.view = function (package_id, params) {
        return Requests.processRoute(TipPackagesRoute.routes.view, {}, { package_id: package_id }, params);
    };
    /**
     * Delete a tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param package_id The id of the post to delete.
     * @returns promise
     */
    TipPackages.delete = function (package_id, params) {
        return Requests.processRoute(TipPackagesRoute.routes.delete, {}, { package_id: package_id }, params);
    };
    return TipPackages;
}());

var TipPackagePurchaseRoute = /** @class */ (function () {
    function TipPackagePurchaseRoute() {
    }
    TipPackagePurchaseRoute.routes = {
        stripe: { url: '/tipspackagepurchases/stripe', method: HTTP_METHODS.POST },
        getStripePaymentIntent: { url: '/tipspackagepurchases/getstripepaymentintent', method: HTTP_METHODS.POST },
        processStripePaymentIntent: { url: '/tipspackagepurchases/processstripepaymentintent', method: HTTP_METHODS.POST },
    };
    return TipPackagePurchaseRoute;
}());

var TipPackagePurchases = /** @class */ (function () {
    function TipPackagePurchases() {
    }
    /**
     * Purchase a package with Stripe as the processor.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    TipPackagePurchases.stripe = function (data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.stripe, data, {}, params);
    };
    /**
     * Get a stripe payment intent token.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    TipPackagePurchases.getStripePaymentIntent = function (data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.getStripePaymentIntent, data, {}, params);
    };
    /**
    * Process the stripe payment intent after payment is complete.
    *
    * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
    *
    * @returns A promise
    */
    TipPackagePurchases.processStripePaymentIntent = function (data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.processStripePaymentIntent, data, {}, params);
    };
    return TipPackagePurchases;
}());

var SocialPostsRoute = /** @class */ (function () {
    function SocialPostsRoute() {
    }
    SocialPostsRoute.routes = {
        getPosts: { url: '/socialposts', method: HTTP_METHODS.GET },
        createPost: { url: '/socialposts', method: HTTP_METHODS.POST },
        retrievePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.GET },
        updatePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.PUT },
        deletePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.DELETE },
        dispute: { url: '/social/{post_id}/dispute', method: HTTP_METHODS.POST },
        history: { url: '/socialposts/{post_id}/history', method: HTTP_METHODS.GET },
        progression: { url: '/socialposts/progression', method: HTTP_METHODS.GET },
        addMedia: { url: '/socialposts/{post_id}/addMedia', method: HTTP_METHODS.POST },
        removeMedia: { url: '/socialposts/{post_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
        reschedule: { url: '/socialposts/{post_id}/reschedule', method: HTTP_METHODS.POST },
        reports: { url: '/socialposts/{post_id}/reports', method: HTTP_METHODS.GET },
        updatePostImpressions: { url: '/socialposts/{post_id}/impressions', method: HTTP_METHODS.PUT },
        shortLinkReports: { url: '/socialposts/shortlinks/reports', method: HTTP_METHODS.GET },
        // New Comment Routes
        listComments: { url: '/socialposts/{post_id}/comments', method: HTTP_METHODS.GET },
        syncComments: { url: '/socialposts/{post_id}/sync-comments', method: HTTP_METHODS.POST },
        listPendingResponses: { url: '/socialposts/comments/pending-responses', method: HTTP_METHODS.GET },
        viewComment: { url: '/socialposts/comments/{comment_id}', method: HTTP_METHODS.GET },
        replyToComment: { url: '/socialposts/comments/{comment_id}/reply', method: HTTP_METHODS.POST },
        moderateComment: { url: '/socialposts/comments/{comment_id}/moderate', method: HTTP_METHODS.PUT },
        markCommentForResponse: { url: '/socialposts/comments/{comment_id}/mark-for-response', method: HTTP_METHODS.PUT },
        getCommentThread: { url: '/socialposts/comments/{comment_id}/thread', method: HTTP_METHODS.GET },
        updateCommentMetrics: { url: '/socialposts/comments/{comment_id}/update-metrics', method: HTTP_METHODS.PUT },
        createComment: { url: '/socialposts/{post_id}/comments', method: HTTP_METHODS.POST },
        getPostAttribution: { url: '/socialposts/{post_id}/attribution', method: HTTP_METHODS.GET },
        getSocialPostAttributionReport: { url: '/reports/fingerprinting/social-post-attribution', method: HTTP_METHODS.GET },
        getLinkSummary: { url: '/socialposts/{post_id}/link-summary', method: HTTP_METHODS.GET },
        syncHistory: { url: '/social/sync-history/{platform}', method: HTTP_METHODS.POST },
        performAction: { url: '/socialposts/{post_id}/action', method: HTTP_METHODS.POST },
        performCommentAction: { url: '/socialposts/comments/{comment_id}/action', method: HTTP_METHODS.POST },
        creativePerformance: { url: '/socialposts/creative-performance', method: HTTP_METHODS.GET },
        // Social Messaging (DM) Routes
        listConversations: { url: '/social/conversations', method: HTTP_METHODS.GET },
        syncConversations: { url: '/social/conversations/sync', method: HTTP_METHODS.POST },
        getConversation: { url: '/social/conversations/{conversation_id}', method: HTTP_METHODS.GET },
        getConversationMessages: { url: '/social/conversations/{conversation_id}/messages', method: HTTP_METHODS.GET },
        sendSocialMessage: { url: '/social/messages', method: HTTP_METHODS.POST },
        replyViaDm: { url: '/socialposts/comments/{comment_id}/reply-via-dm', method: HTTP_METHODS.POST },
        // Reddit Sales Engine (Admin Only)
        listRedditQuestions: { url: '/admin/reddit/questions', method: HTTP_METHODS.GET },
        viewRedditQuestion: { url: '/admin/reddit/questions/{id}', method: HTTP_METHODS.GET },
        updateRedditQuestion: { url: '/admin/reddit/questions/{id}', method: HTTP_METHODS.PUT },
        deleteRedditQuestion: { url: '/admin/reddit/questions/{id}', method: HTTP_METHODS.DELETE },
        optimizeRedditPost: { url: '/admin/reddit/optimize', method: HTTP_METHODS.POST },
    };
    return SocialPostsRoute;
}());

var SocialPosts = /** @class */ (function () {
    function SocialPosts() {
    }
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    SocialPosts.list = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.getPosts, undefined, undefined, params);
    };
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    SocialPosts.create = function (data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.createPost, data, {}, params);
    };
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    SocialPosts.view = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.retrievePost, {}, { post_id: post_id }, params);
    };
    /**
     * Update the informationa bout a post, as long as it hasn't been posted.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    SocialPosts.update = function (post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updatePost, data, { post_id: post_id }, params);
    };
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    SocialPosts.delete = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.deletePost, {}, { post_id: post_id }, params);
    };
    /**
    * Dispute a post as being fraudulent.,s
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    SocialPosts.dispute = function (post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.dispute, data, { post_id: post_id }, params);
    };
    /**
    * Get the change of the post metrics over a period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    SocialPosts.history = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.history, {}, { post_id: post_id }, params);
    };
    /**
    * Get the change progression of a social media post over period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    SocialPosts.progression = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.progression, {}, {}, params);
    };
    /**
     * Add media to a social media post.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
     *
     * @param post_id The ID of the social media post.
     * @param data The data to be sent in the request body.
     *
     * @returns promise
     */
    SocialPosts.addMedia = function (post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.addMedia, data, { post_id: post_id }, params);
    };
    /**
     * Remove media from a social media post.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/removeMediaFromSocialMediaPost
     *
     * @param post_id The ID of the social media post.
     * @param media_id The ID of the media to remove.
     *
     * @returns promise
     */
    SocialPosts.removeMedia = function (post_id, media_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.removeMedia, {}, { post_id: post_id, media_id: media_id }, params);
    };
    /**
    * Reschedule a post that has failed.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
    *
    * @param post_id The ID of the social media post.
    * @param data The data to be sent in the request body.
    *
    * @returns promise
    */
    SocialPosts.reschedule = function (post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.reschedule, data, { post_id: post_id }, params);
    };
    /**
    * Get the reports for a social media post
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    SocialPosts.reports = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.reports, undefined, undefined, params);
    };
    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    SocialPosts.updatePostImpressions = function (post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updatePostImpressions, data, { post_id: post_id }, params);
    };
    /**
    * Get reports on all the the short links
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    SocialPosts.shortLinkReports = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.shortLinkReports, undefined, undefined, params);
    };
    /**
     * List comments for a social media post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters for filtering and sorting.
     * @returns A promise
     */
    SocialPosts.listComments = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.listComments, undefined, { post_id: post_id }, params);
    };
    /**
     * Sync comments from the social media platform for a specific post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters (e.g., limit).
     * @returns A promise
     */
    SocialPosts.syncComments = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.syncComments, undefined, { post_id: post_id }, params);
    };
    /**
     * Get a list of all comments that are pending a response.
     *
     * @param params Optional query parameters for filtering.
     * @returns A promise
     */
    SocialPosts.listPendingResponses = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.listPendingResponses, undefined, undefined, params);
    };
    /**
     * Retrieve a single comment by its ID.
     *
     * @param comment_id The ID of the comment.
     * @param params Optional query parameters (e.g., include_thread).
     * @returns A promise
     */
    SocialPosts.viewComment = function (comment_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.viewComment, undefined, { comment_id: comment_id }, params);
    };
    /**
     * Post a reply to a comment.
     *
     * @param comment_id The ID of the comment to reply to.
     * @param data The content of the reply.
     * @returns A promise
     */
    SocialPosts.replyToComment = function (comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.replyToComment, data, { comment_id: comment_id });
    };
    /**
     * Moderate a comment (approve, reject, spam, hide, show).
     *
     * @param comment_id The ID of the comment to moderate.
     * @param data The moderation action and optional reason.
     * @returns A promise
     */
    SocialPosts.moderateComment = function (comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.moderateComment, data, { comment_id: comment_id });
    };
    /**
     * Mark a comment as needing a response.
     *
     * @param comment_id The ID of the comment.
     * @returns A promise
     */
    SocialPosts.markCommentForResponse = function (comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.markCommentForResponse, undefined, { comment_id: comment_id });
    };
    /**
     * Get the full thread for a given comment.
     *
     * @param comment_id The ID of a comment within the thread.
     * @returns A promise
     */
    SocialPosts.getCommentThread = function (comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getCommentThread, undefined, { comment_id: comment_id });
    };
    /**
     * Trigger a manual update of a comment's metrics from its platform.
     *
     * @param comment_id The ID of the comment to update.
     * @returns A promise
     */
    SocialPosts.updateCommentMetrics = function (comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.updateCommentMetrics, undefined, { comment_id: comment_id });
    };
    /**
     * Create a new top-level comment on a post.
     *
     * @param post_id The ID of the social media post to comment on.
     * @param data The content of the comment.
     * @returns A promise
     */
    SocialPosts.createComment = function (post_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.createComment, data, { post_id: post_id });
    };
    /**
   * Get game install attribution data for a specific social media post.
   *
   * @param post_id The ID of the social media post.
   * @param params Optional query parameters (start_date, end_date, confidence_threshold).
   * @returns A promise
   */
    SocialPosts.getPostAttribution = function (post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.getPostAttribution, undefined, { post_id: post_id }, params);
    };
    /**
    * Get a report of all social media posts for a title that are converting to game installs.
    *
    * @param params Query parameters (title_id, start_date, end_date, confidence_threshold).
    * @returns A promise
    */
    SocialPosts.getSocialPostAttributionReport = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.getSocialPostAttributionReport, undefined, undefined, params);
    };
    /**
   * Get a summary of clicks for each short link in a post.
   *
   * @param post_id The ID of the social media post.
   * @returns A promise
   */
    SocialPosts.getLinkSummary = function (post_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getLinkSummary, undefined, { post_id: post_id });
    };
    /**
     * Trigger a historical sync for a specific platform for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/syncHistory
     *
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     *
     * @returns promise
     */
    SocialPosts.syncHistory = function (platform, params) {
        return Requests.processRoute(SocialPostsRoute.routes.syncHistory, {}, { platform: platform }, params);
    };
    /**
     * Perform a social action (Like, Repost, Vote) on a post.
     *
     * @param post_id The ID of the social media post.
     * @param action The action to perform.
     * @returns promise
     */
    SocialPosts.performAction = function (post_id, action) {
        return Requests.processRoute(SocialPostsRoute.routes.performAction, { action: action }, { post_id: post_id });
    };
    /**
     * Perform a social action (Like, Repost, Vote) on a comment.
     *
     * @param comment_id The ID of the comment.
     * @param action The action to perform.
     * @returns promise
     */
    SocialPosts.performCommentAction = function (comment_id, action) {
        return Requests.processRoute(SocialPostsRoute.routes.performCommentAction, { action: action }, { comment_id: comment_id });
    };
    /**
     * Get ad creative performance matrix.
     */
    SocialPosts.creativePerformance = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.creativePerformance, {}, {}, params);
    };
    /**
    * List social media conversations.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialConversations
    *
    * @param params Query parameters (scheduler_id, platform, page, per_page).
    * @returns promise
    */
    SocialPosts.listConversations = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.listConversations, undefined, undefined, params);
    };
    /**
     * Sync conversations from external platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/syncSocialConversations
     *
     * @param data Body parameters (platform, scheduler_id).
     * @returns promise
     */
    SocialPosts.syncConversations = function (data) {
        return Requests.processRoute(SocialPostsRoute.routes.syncConversations, data);
    };
    /**
     * Get a specific conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/getSocialConversation
     *
     * @param conversation_id The ID of the conversation.
     * @returns promise
     */
    SocialPosts.getConversation = function (conversation_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getConversation, undefined, { conversation_id: conversation_id });
    };
    /**
     * List messages in a conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialMessages
     *
     * @param conversation_id The ID of the conversation.
     * @param params Query parameters (sync, page, per_page).
     * @returns promise
     */
    SocialPosts.getConversationMessages = function (conversation_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.getConversationMessages, undefined, { conversation_id: conversation_id }, params);
    };
    /**
     * Send a Direct Message.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/sendSocialMessage
     *
     * @param data Body parameters (message, conversation_id, recipient_id, platform, scheduler_id, media_ids).
     * @returns promise
     */
    SocialPosts.sendSocialMessage = function (data) {
        return Requests.processRoute(SocialPostsRoute.routes.sendSocialMessage, data);
    };
    /**
     * Reply to a high-intent TikTok comment via Direct Message.
     *
     * @param comment_id The ID of the comment.
     * @param data { message: string }
     */
    SocialPosts.replyViaDm = function (comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.replyViaDm, data, { comment_id: comment_id });
    };
    /**
     * List all discovered Reddit questions (Admin Only).
     *
     * @param params Query parameters: status, subreddit, is_question.
     */
    SocialPosts.listRedditQuestions = function (params) {
        return Requests.processRoute(SocialPostsRoute.routes.listRedditQuestions, undefined, undefined, params);
    };
    /**
     * Retrieve details for a specific discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    SocialPosts.viewRedditQuestion = function (id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.viewRedditQuestion, {}, { id: id }, params);
    };
    /**
     * Update a Reddit question's status or metadata (Admin Only).
     *
     * @param id The UUID of the question.
     * @param data { status: 'pending'|'answered'|'ignored', metadata?: object }
     */
    SocialPosts.updateRedditQuestion = function (id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updateRedditQuestion, data, { id: id }, params);
    };
    /**
     * Delete a discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    SocialPosts.deleteRedditQuestion = function (id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.deleteRedditQuestion, {}, { id: id }, params);
    };
    /**
     * Optimize a Reddit post for a specific subreddit using the AI engine (Admin Only).
     *
     * @param data { subreddit: string, content: string, title_id: string }
     */
    SocialPosts.optimizeRedditPost = function (data) {
        return Requests.processRoute(SocialPostsRoute.routes.optimizeRedditPost, data);
    };
    return SocialPosts;
}());

var TitlesRoute = /** @class */ (function () {
    function TitlesRoute() {
    }
    TitlesRoute.routes = {
        list: { url: '/titles', method: HTTP_METHODS.GET },
        create: { url: '/titles', method: HTTP_METHODS.POST },
        view: { url: '/titles/{title_id}', method: HTTP_METHODS.GET },
        update: { url: '/titles/{title_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/titles/{title_id}', method: HTTP_METHODS.DELETE },
        approve: { url: '/titles/{title_id}/approve', method: HTTP_METHODS.POST },
        reject: { url: '/titles/{title_id}/reject', method: HTTP_METHODS.POST },
        uploadMainImage: { url: '/titles/{title_id}/uploadMainImage', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/titles/{title_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        addAdministrator: { url: '/titles/{title_id}/addAdministrator', method: HTTP_METHODS.POST },
        removeAdministrator: { url: '/titles/{title_id}/removeAdministrator/{user_id}', method: HTTP_METHODS.DELETE },
        addMedia: { url: '/titles/{title_id}/addMedia', method: HTTP_METHODS.POST },
        removeMedia: { url: '/titles/{title_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
        updateMediaOrder: { url: '/titles/{title_id}/updateMediaOrder', method: HTTP_METHODS.POST },
        importWishlist: { url: '/titles/{title_id}/wishlist/import', method: HTTP_METHODS.POST },
        getWishlist: { url: '/titles/{title_id}/wishlist', method: HTTP_METHODS.GET },
        createToken: { url: '/titles/{title_id}/tokens', method: HTTP_METHODS.POST },
        listTokens: { url: '/titles/{title_id}/tokens', method: HTTP_METHODS.GET },
        revokeToken: { url: '/titles/{title_id}/tokens/{token_id}', method: HTTP_METHODS.DELETE },
        search: { url: '/titles/search', method: HTTP_METHODS.GET },
        listInstalls: { url: '/titles/{title_id}/installs', method: HTTP_METHODS.GET },
        viewInstall: { url: '/titles/{title_id}/installs/{install_id}', method: HTTP_METHODS.GET },
        createInstall: { url: '/titles/{title_id}/installs', method: HTTP_METHODS.POST },
        listRetentions: { url: '/titles/{title_id}/retentions', method: HTTP_METHODS.GET },
        retentionSummary: { url: '/titles/{title_id}/retentions/summary', method: HTTP_METHODS.GET },
        activeRetentions: { url: '/titles/{title_id}/retentions/active', method: HTTP_METHODS.GET },
        retentionAnalysis: { url: '/titles/{title_id}/retentions/analysis', method: HTTP_METHODS.GET },
        distinctDimensions: { url: '/titles/{title_id}/installs/distinctDimensions', method: HTTP_METHODS.GET },
        updateAdministrator: { url: '/titles/{title_id}/updateAdministrator/{user_id}', method: HTTP_METHODS.PUT },
        listSessions: {
            url: '/titles/{title_id}/installs/sessions',
            method: HTTP_METHODS.GET
        },
        sessionsAverage: {
            url: '/titles/{title_id}/installs/sessions/average',
            method: HTTP_METHODS.GET
        },
        sessionsHistogram: {
            url: '/titles/{title_id}/sessions/histogram',
            method: HTTP_METHODS.GET
        },
        /**
         * 1) Import a CSV/Excel file containing daily UTM analytics data for a Title
         *    POST /titles/{title_id}/utm/import
         */
        importUtmAnalytics: {
            url: "/titles/{title_id}/utm/import",
            method: HTTP_METHODS.POST,
        },
        /**
         * 2) Retrieve paginated/filterable UTM analytics data for a Title
         *    GET /titles/{title_id}/utm
         */
        getUtmAnalytics: {
            url: "/titles/{title_id}/utm",
            method: HTTP_METHODS.GET,
        },
        getWebTrackingToken: {
            url: "/titles/{title_id}/webTrackingToken",
            method: HTTP_METHODS.GET,
        },
        /**
         * 3) Analyze UTM data with optional group_by / dimension-based aggregates
         *    GET /titles/{title_id}/utm/analysis
         */
        analyzeUtmAnalytics: {
            url: "/titles/{title_id}/utm/analysis",
            method: HTTP_METHODS.GET,
        },
        chatListSessions: {
            url: '/titles/{title_id}/chat/sessions',
            method: HTTP_METHODS.GET
        },
        chatShowSession: {
            url: '/titles/{title_id}/chat/sessions/{session_id}',
            method: HTTP_METHODS.GET
        },
        chatListMessages: {
            url: '/titles/{title_id}/chat/messages',
            method: HTTP_METHODS.GET
        },
        chatUpdateMessage: {
            url: '/titles/{title_id}/chat/messages/{message_id}',
            method: HTTP_METHODS.PUT
        },
        importKeys: { url: '/titles/{title_id}/import-keys', method: HTTP_METHODS.POST },
        // ─────────────────────────────────────────────────────────────────  
        // Purchase/Revenue Endpoints  
        // ─────────────────────────────────────────────────────────────────  
        purchasesList: {
            url: "/titles/{title_id}/purchases",
            method: HTTP_METHODS.GET,
        },
        purchasesShow: {
            url: "/titles/{title_id}/purchases/{purchase_id}",
            method: HTTP_METHODS.GET,
        },
        purchasesCreate: {
            url: "/titles/{title_id}/purchases",
            method: HTTP_METHODS.POST,
        },
        purchasesSummary: {
            url: "/titles/{title_id}/purchases/summary",
            method: HTTP_METHODS.GET,
        },
        // Advanced analytics sub-routes  
        purchasesTimeReport: {
            url: "/titles/{title_id}/purchases/reports/time",
            method: HTTP_METHODS.GET,
        },
        purchasesLtv30Report: {
            url: "/titles/{title_id}/purchases/reports/ltv30",
            method: HTTP_METHODS.GET,
        },
        purchasesCurrencyBreakdown: {
            url: "/titles/{title_id}/purchases/reports/currency",
            method: HTTP_METHODS.GET,
        },
        purchasesInstallDistribution: {
            url: "/titles/{title_id}/purchases/reports/install-distribution",
            method: HTTP_METHODS.GET,
        },
        purchasesItemTypeStats: {
            url: "/titles/{title_id}/purchases/reports/item-type-stats",
            method: HTTP_METHODS.GET,
        },
        listAdConversionEvents: {
            url: '/titles/{title_id}/ad-conversion-events',
            method: HTTP_METHODS.GET
        },
        retryAdConversionEvent: {
            url: '/titles/{title_id}/ad-conversion-events/{event_id}/retry',
            method: HTTP_METHODS.POST
        },
        getAdConversionEventsReport: {
            url: '/titles/{title_id}/ad-conversion-events/report',
            method: HTTP_METHODS.GET
        },
        listLandingPages: { url: '/titles/{title_id}/landing-pages', method: HTTP_METHODS.GET },
        createLandingPage: { url: '/titles/{title_id}/landing-pages', method: HTTP_METHODS.POST },
        viewLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.GET },
        updateLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.PUT },
        deleteLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.DELETE },
        translateLandingPage: { url: '/landing-pages/{landing_page_id}/translate', method: HTTP_METHODS.POST },
        generateLandingPageAiContent: { url: '/landing-pages/{landing_page_id}/generate-ai-content', method: HTTP_METHODS.POST },
        saveLandingPageTranslation: { url: '/landing-pages/{landing_page_id}/translations', method: HTTP_METHODS.POST },
        cohorts: { url: '/titles/{title_id}/installs/cohorts', method: HTTP_METHODS.GET },
        geoReport: { url: '/titles/{title_id}/installs/geo-report', method: HTTP_METHODS.GET },
        // Game Events (Behavioral Telemetry)
        listEvents: { url: '/titles/{title_id}/events', method: HTTP_METHODS.GET },
        createEvent: { url: '/titles/{title_id}/events', method: HTTP_METHODS.POST },
        bulkCreateEvents: { url: '/titles/{title_id}/events/bulk', method: HTTP_METHODS.POST },
        eventSummary: { url: '/titles/{title_id}/events/summary', method: HTTP_METHODS.GET },
        eventDistinctKeys: { url: '/titles/{title_id}/events/distinct-keys', method: HTTP_METHODS.GET },
        // Behavioral Funnels
        listBehavioralFunnels: { url: '/titles/{title_id}/behavioral-funnels', method: HTTP_METHODS.GET },
        createBehavioralFunnel: { url: '/titles/{title_id}/behavioral-funnels', method: HTTP_METHODS.POST },
        behavioralFunnelReport: { url: '/titles/{title_id}/behavioral-funnels/{funnel_id}/report', method: HTTP_METHODS.GET },
        deleteBehavioralFunnel: { url: '/titles/{title_id}/behavioral-funnels/{funnel_id}', method: HTTP_METHODS.DELETE },
        // Aegis Deployment
        getDeploymentUploadUrl: { url: '/titles/{title_id}/deployments/presigned-url', method: HTTP_METHODS.POST },
        confirmDeployment: { url: '/titles/{title_id}/deployments/confirm', method: HTTP_METHODS.POST },
        getPlaySession: { url: '/titles/{title_id}/play', method: HTTP_METHODS.GET },
        // Aegis Payouts
        listDeveloperPayouts: { url: '/titles/{title_id}/payouts', method: HTTP_METHODS.GET },
        viewDeveloperPayout: { url: '/titles/{title_id}/payouts/{payout_id}', method: HTTP_METHODS.GET },
        developerPayoutSummary: { url: '/titles/{title_id}/payouts/summary', method: HTTP_METHODS.GET },
    };
    return TitlesRoute;
}());

var Titles = /** @class */ (function () {
    function Titles() {
    }
    /**
     * List all the Titles.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    Titles.list = function (params) {
        return Requests.processRoute(TitlesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    Titles.create = function (data, params) {
        return Requests.processRoute(TitlesRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitle
     *
     * @param title_id The id of the title to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Titles.update = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.update, data, { title_id: title_id }, params);
    };
    /**
     * Retrieve the information for a single title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     *
     * @param title_id The id fo the title to retrieve.
     *
     * @returns promise
     */
    Titles.view = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.view, {}, { title_id: title_id }, params);
    };
    /**
     * Deletes a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     *
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    Titles.delete = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.delete, {}, { title_id: title_id }, params);
    };
    /**
     * Approve a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    Titles.approve = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.approve, data, { title_id: title_id }, params);
    };
    /**
     * Reject a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    Titles.reject = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.reject, data, { title_id: title_id }, params);
    };
    /**
     * Add a user as an administrator to a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/addTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    Titles.addAdministrator = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.addAdministrator, data, { title_id: title_id }, params);
    };
    /**
     * Remove a user as an administrator toa  tile
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/removeTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    Titles.removeAdministrator = function (title_id, user_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.removeAdministrator, data, { title_id: title_id, user_id: user_id }, params);
    };
    /**
       * Updates the main image for the title using a File object.
       *
       * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
       *
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       *
       * @returns promise
       */
    Titles.uploadMainImageFile = function (title_id, file, data, params) {
        var url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the title using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Titles.uploadMainImageBlob = function (title_id, blob, data, params) {
        var url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the banner image for the title using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Titles.uploadBannerImageFile = function (title_id, file, data, params) {
        var url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the title using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Titles.uploadBannerImageBlob = function (title_id, blob, data, params) {
        var url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
    * Add media to a title.
    */
    Titles.addMedia = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.addMedia, data, { title_id: title_id }, params);
    };
    /**
     * Remove media from a title.
     */
    Titles.removeMedia = function (title_id, media_id, params) {
        return Requests.processRoute(TitlesRoute.routes.removeMedia, {}, { title_id: title_id, media_id: media_id }, params);
    };
    /**
     * Update the ordering of media items (images, videos, etc.) for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateMediaOrder
     *
     * @param title_id The ID of the title to update
     * @param media_order An array of objects, each containing:
     *                    - media_id: string (the UUID of the media)
     *                    - order: number (the new order/index)
     * @returns Promise containing the server response
     */
    Titles.updateMediaOrder = function (title_id, media_order) {
        return Requests.processRoute(TitlesRoute.routes.updateMediaOrder, { media_order: media_order }, { title_id: title_id });
    };
    /**
     * Upload a CSV/Excel file containing wishlist data for a title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Any additional form data, e.g. platform
     * @returns AxiosPromise
     */
    Titles.importWishlist = function (title_id, file, data, params) {
        var url = TitlesRoute.routes.importWishlist.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    };
    /**
     * Retrieve the wishlist data for a specific title.
     *
     * @param title_id The UUID of the title
     * @param params Optional query params, e.g. { platform: 'steam', start_date: '2025-01-01', end_date: '2025-01-31'}
     * @returns AxiosPromise
     */
    Titles.getWishlist = function (title_id, params) {
        TitlesRoute.routes.getWishlist.url.replace('{title_id}', title_id);
        return Requests.processRoute(TitlesRoute.routes.getWishlist, {}, { title_id: title_id }, params);
    };
    /**
   * Create a new API token for a title.
   * Returns { full_token: string, token: TitleToken }.
   */
    Titles.createTitleToken = function (title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createToken, data, { title_id: title_id });
    };
    /**
     * List all tokens for a title.
     */
    Titles.listTitleTokens = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.listTokens, {}, { title_id: title_id });
    };
    /**
     * Revoke a specific token by ID.
     */
    Titles.revokeTitleToken = function (title_id, token_id) {
        return Requests.processRoute(TitlesRoute.routes.revokeToken, {}, { title_id: title_id, token_id: token_id });
    };
    /**
     * Search for Titles using Meilisearch or fallback based on the query and filters.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/searchTitles
     *
     * @param params Object of query params:
     *   - q?: string, filters?: string,
     *   - sort_by?: string, sort_order?: 'asc'|'desc',
     *   - page?: number, per_page?: number
     */
    Titles.search = function (params) {
        return Requests.processRoute(TitlesRoute.routes.search, {}, undefined, params);
    };
    /**
    * List game installs for a specific title.
    */
    Titles.listInstalls = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listInstalls, {}, { title_id: title_id }, params);
    };
    /**
     * View a single game install record.
     */
    Titles.viewInstall = function (title_id, install_id, params) {
        return Requests.processRoute(TitlesRoute.routes.viewInstall, {}, { title_id: title_id, install_id: install_id }, params);
    };
    /**
     * Create a new game install record.
     */
    Titles.createInstall = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.createInstall, data, { title_id: title_id }, params);
    };
    /**
     * List retention events for a specific title.
     */
    Titles.listRetentions = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listRetentions, {}, { title_id: title_id }, params);
    };
    /**
     * Get a summary report of retention events for a specific title.
     */
    Titles.retentionSummary = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.retentionSummary, {}, { title_id: title_id }, params);
    };
    Titles.activeRetentions = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.activeRetentions, {}, { title_id: title_id }, params);
    };
    Titles.retentionAnalysis = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.retentionAnalysis, {}, { title_id: title_id }, params);
    };
    Titles.distinctDimensions = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.distinctDimensions, {}, { title_id: title_id }, params);
    };
    /**
     * List sessions for a specific title, with optional filters and pagination.
     * Returns a paginated list of sessions with start/end times, session_length, user info, etc.
     */
    Titles.listSessions = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listSessions, {}, { title_id: title_id }, params);
    };
    /**
     * Get aggregated average session length data (daily/weekly/monthly) for a title.
     * Optionally filter by platform/device_type/OS/version and group by one dimension.
     */
    Titles.sessionsAverage = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.sessionsAverage, {}, { title_id: title_id }, params);
    };
    Titles.sessionsHistogram = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.sessionsHistogram, {}, { title_id: title_id }, params);
    };
    /**
     * Upload a CSV/Excel file containing daily UTM analytics for a specific title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Optional form fields (if needed)
     * @param params Optional query parameters
     * @returns AxiosPromise
     */
    Titles.importUtmAnalytics = function (title_id, file, data, params) {
        var url = TitlesRoute.routes.importUtmAnalytics.url.replace("{title_id}", title_id);
        return Requests.uploadFile(url, "file", file, data, params);
    };
    /**
     * Retrieve the UTM analytics data for a title (paginated, filterable, sortable).
     *
     * GET /titles/{title_id}/utm
     *
     * @param title_id The UUID of the title
     * @param params Optional query params: start_date, end_date, source, device_type, sort_by, etc.
     * @returns AxiosPromise
     */
    Titles.getUtmAnalytics = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getUtmAnalytics, {}, { title_id: title_id }, params);
    };
    /**
     * Get the web tracking token used for websites.
     *
     * GET /titles/{title_id}/webTrackingToken
     *
     * @param title_id The UUID of the title
     * @param params Optional query params:
     * @returns AxiosPromise
     */
    Titles.getWebTrackingToken = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getWebTrackingToken, {}, { title_id: title_id }, params);
    };
    /**
     * Analyze UTM data with optional group_by (source, campaign, medium, device_type, etc.)
     *
     * GET /titles/{title_id}/utm/analysis
     *
     * @param title_id The UUID of the title
     * @param params e.g. ?group_by=source&start_date=YYYY-MM-DD
     * @returns AxiosPromise
     */
    Titles.analyzeUtmAnalytics = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.analyzeUtmAnalytics, {}, { title_id: title_id }, params);
    };
    /**
     * List all chat sessions for a title.
     */
    Titles.chatListSessions = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatListSessions, {}, { title_id: title_id }, params);
    };
    /**
     * Get a specific chat session and its messages.
     */
    Titles.chatShowSession = function (title_id, session_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatShowSession, {}, { title_id: title_id, session_id: session_id }, params);
    };
    /**
     * Search messages across all sessions of a title.
     */
    Titles.chatListMessages = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatListMessages, {}, { title_id: title_id }, params);
    };
    /**
     * Update a specific chat message.
     */
    Titles.chatUpdateMessage = function (title_id, message_id, data) {
        return Requests.processRoute(TitlesRoute.routes.chatUpdateMessage, data, { title_id: title_id, message_id: message_id });
    };
    /**
  * List all purchase events for a specific title.
  * Matches GET /titles/{title_id}/purchases
  */
    Titles.listPurchases = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesList, {}, { title_id: title_id }, params);
    };
    /**
     * Retrieve a single purchase record by ID.
     * Matches GET /titles/{title_id}/purchases/{purchase_id}
     */
    Titles.viewPurchase = function (title_id, purchase_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesShow, {}, { title_id: title_id, purchase_id: purchase_id }, params);
    };
    /**
     * Create a new purchase record.
     * Matches POST /titles/{title_id}/purchases
     */
    Titles.createPurchase = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesCreate, data, { title_id: title_id }, params);
    };
    /**
     * Get a summary of total revenue, grouped by day or purchase_type.
     * Matches GET /titles/{title_id}/purchases/summary
     */
    Titles.purchaseSummary = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesSummary, {}, { title_id: title_id }, params);
    };
    /**
     * Revenue by time (daily, weekly, or monthly).
     * Matches GET /titles/{title_id}/purchases/reports/time
     */
    Titles.purchaseRevenueByTime = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesTimeReport, {}, { title_id: title_id }, params);
    };
    /**
     * 30-day LTV (Lifetime Value) per install.
     * Matches GET /titles/{title_id}/purchases/reports/ltv30
     */
    Titles.purchaseLtv30 = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesLtv30Report, {}, { title_id: title_id }, params);
    };
    /**
     * Show breakdown of revenue per currency, with optional USD conversion.
     * Matches GET /titles/{title_id}/purchases/reports/currency
     */
    Titles.purchaseCurrencyBreakdown = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesCurrencyBreakdown, {}, { title_id: title_id }, params);
    };
    /**
     * Distribution of installs by total revenue, plus a histogram array.
     * Matches GET /titles/{title_id}/purchases/reports/install-distribution
     */
    Titles.installRevenueDistribution = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesInstallDistribution, {}, { title_id: title_id }, params);
    };
    /**
     * Stats by item SKU, purchase type, and repeat purchase analysis.
     * Matches GET /titles/{title_id}/purchases/reports/item-type-stats
     */
    Titles.itemAndPurchaseTypeStats = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesItemTypeStats, {}, { title_id: title_id }, params);
    };
    /**
       * Bulk import access keys for a title from a CSV or Excel file.
       * The file must contain 'platform' and 'code' columns.
       *
       * @see https://api.glitch.fun/api/documentation#/Titles/importTitleKeys
       *
       * @param title_id The UUID of the title.
       * @param file The CSV or Excel file to upload.
       * @param data Optional additional form data.
       * @param params Optional query parameters.
       * @returns AxiosPromise
       */
    Titles.importKeys = function (title_id, file, data, params) {
        var url = TitlesRoute.routes.importKeys.url.replace("{title_id}", title_id);
        return Requests.uploadFile(url, "file", file, data, params);
    };
    /**
     * Update administrator email preferences for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitleAdministrator
     *
     * @param title_id The id of the title.
     * @param user_id The id of the user/administrator.
     * @param data The preference data to update (notify_promotion_schedule_reminder_email, notify_weekly_promotion_performance_email).
     *
     * @returns Promise
     */
    Titles.updateAdministrator = function (title_id, user_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.updateAdministrator, data, { title_id: title_id, user_id: user_id }, params);
    };
    /**
 * List ad conversion events for a title with filtering
 */
    Titles.listAdConversionEvents = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listAdConversionEvents, {}, { title_id: title_id }, params);
    };
    /**
     * Retry a failed or pending ad conversion event
     */
    Titles.retryAdConversionEvent = function (title_id, event_id) {
        return Requests.processRoute(TitlesRoute.routes.retryAdConversionEvent, {}, { title_id: title_id, event_id: event_id });
    };
    /**
    * List all landing pages for a specific title.
    * @param title_id The UUID of the title.
    * @param params Optional query parameters for pagination.
    */
    Titles.listLandingPages = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listLandingPages, {}, { title_id: title_id }, params);
    };
    /**
     * Create a new landing page for a title.
     * @param title_id The UUID of the title.
     * @param data The data for the new landing page.
     */
    Titles.createLandingPage = function (title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.createLandingPage, data, { title_id: title_id }, params);
    };
    /**
     * View a specific landing page by its ID.
     * @param landing_page_id The UUID of the landing page.
     */
    Titles.viewLandingPage = function (landing_page_id, params) {
        return Requests.processRoute(TitlesRoute.routes.viewLandingPage, {}, { landing_page_id: landing_page_id }, params);
    };
    /**
     * Update an existing landing page.
     * @param landing_page_id The UUID of the landing page to update.
     * @param data The new data for the landing page.
     */
    Titles.updateLandingPage = function (landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.updateLandingPage, data, { landing_page_id: landing_page_id }, params);
    };
    /**
     * Delete a landing page.
     * @param landing_page_id The UUID of the landing page to delete.
     */
    Titles.deleteLandingPage = function (landing_page_id, params) {
        return Requests.processRoute(TitlesRoute.routes.deleteLandingPage, {}, { landing_page_id: landing_page_id }, params);
    };
    /**
     * Trigger an AI translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param data An object containing the target language code, e.g., { language_code: 'es' }.
     */
    Titles.translateLandingPage = function (landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.translateLandingPage, data, { landing_page_id: landing_page_id }, params);
    };
    /**
    * Generate or regenerate AI-powered HTML content for a landing page.
    * @param landing_page_id The UUID of the landing page.
    * @param data An object containing the prompt, language_code, and privacy_mode.
    */
    Titles.generateLandingPageAiContent = function (landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.generateLandingPageAiContent, data, { landing_page_id: landing_page_id }, params);
    };
    /**
     * Create or update a specific translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param translationData The full translation object to be saved.
     */
    Titles.saveLandingPageTranslation = function (landing_page_id, translationData, params) {
        return Requests.processRoute(TitlesRoute.routes.saveLandingPageTranslation, translationData, { landing_page_id: landing_page_id }, params);
    };
    Titles.cohorts = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.cohorts, {}, { title_id: title_id }, params);
    };
    /**
 * Get an aggregated report of ad conversion events for charting.
 */
    Titles.getAdConversionEventsReport = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getAdConversionEventsReport, {}, { title_id: title_id }, params);
    };
    /**
     * Get a geographical distribution report for installs.
     * @param params e.g., { group_by: 'country_code', start_date: '2025-01-01' }
     */
    Titles.geoReport = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.geoReport, {}, { title_id: title_id }, params);
    };
    /**
     * List and filter raw game events (telemetry).
     */
    Titles.listEvents = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listEvents, {}, { title_id: title_id }, params);
    };
    /**
     * Record a single in-game action.
     */
    Titles.createEvent = function (title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createEvent, data, { title_id: title_id });
    };
    /**
     * Record multiple events in one request (Batching).
     * @param data { events: Array<{game_install_id, step_key, action_key, metadata?}> }
     */
    Titles.bulkCreateEvents = function (title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.bulkCreateEvents, data, { title_id: title_id });
    };
    /**
     * Get a summary of actions per step.
     */
    Titles.eventSummary = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.eventSummary, {}, { title_id: title_id }, params);
    };
    /**
     * Get all unique step and action keys used in this title.
     */
    Titles.eventDistinctKeys = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.eventDistinctKeys, {}, { title_id: title_id });
    };
    /**
     * List all saved behavioral funnel definitions.
     */
    Titles.listBehavioralFunnels = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.listBehavioralFunnels, {}, { title_id: title_id });
    };
    /**
     * Create and save a new behavioral funnel definition.
     * @param data { name: string, description?: string, steps: string[] }
     */
    Titles.createBehavioralFunnel = function (title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createBehavioralFunnel, data, { title_id: title_id });
    };
    /**
     * Generate the drop-off report for a specific behavioral funnel.
     * @param params { start_date?: string, end_date?: string }
     */
    Titles.behavioralFunnelReport = function (title_id, funnel_id, params) {
        return Requests.processRoute(TitlesRoute.routes.behavioralFunnelReport, {}, { title_id: title_id, funnel_id: funnel_id }, params);
    };
    /**
     * Delete a saved behavioral funnel definition.
     */
    Titles.deleteBehavioralFunnel = function (title_id, funnel_id) {
        return Requests.processRoute(TitlesRoute.routes.deleteBehavioralFunnel, {}, { title_id: title_id, funnel_id: funnel_id });
    };
    /**
    * Generates a presigned S3 URL for uploading a game build ZIP.
    */
    Titles.getDeploymentUploadUrl = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.getDeploymentUploadUrl, {}, { title_id: title_id });
    };
    /**
     * Confirms the upload and starts the automated deployment/extraction process.
     * @param data { file_path: string, version_string: string, entry_point?: string }
     */
    Titles.confirmDeployment = function (title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.confirmDeployment, data, { title_id: title_id });
    };
    /**
     * Initializes a play session. Handles age-gating and license verification.
     * Returns the CDN URL for WASM/iFrame or Signaling URL for Pixel Streaming.
     */
    Titles.getPlaySession = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.getPlaySession, {}, { title_id: title_id });
    };
    /**
     * List all developer payouts for a title.
     */
    Titles.listDeveloperPayouts = function (title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listDeveloperPayouts, undefined, { title_id: title_id }, params);
    };
    /**
     * View a specific payout record.
     */
    Titles.viewDeveloperPayout = function (title_id, payout_id) {
        return Requests.processRoute(TitlesRoute.routes.viewDeveloperPayout, {}, { title_id: title_id, payout_id: payout_id });
    };
    /**
     * Get the total earnings and playtime summary for a title.
     */
    Titles.getDeveloperPayoutSummary = function (title_id) {
        return Requests.processRoute(TitlesRoute.routes.developerPayoutSummary, {}, { title_id: title_id });
    };
    return Titles;
}());

var CampaignsRoute = /** @class */ (function () {
    function CampaignsRoute() {
    }
    CampaignsRoute.routes = {
        listCampaigns: { url: '/campaigns', method: HTTP_METHODS.GET },
        createCampaign: { url: '/campaigns', method: HTTP_METHODS.POST },
        viewCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
        updateCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
        deleteCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
        getLedger: { url: '/campaigns/{campaign_id}/ledger', method: HTTP_METHODS.GET },
        getPosts: { url: '/campaigns/{campaign_id}/posts', method: HTTP_METHODS.GET },
        statistics: { url: '/campaigns/{campaign_id}/statistics', method: HTTP_METHODS.GET },
        streamViewCounts: { url: '/campaigns/{campaign_id}/streamViewCounts', method: HTTP_METHODS.GET },
        listCampaignLinks: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.GET },
        createCampaignLink: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.POST },
        getCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.GET },
        updateCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.PUT },
        createInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers', method: HTTP_METHODS.POST },
        listInfluencerCampaigns: { url: '/campaigns/influencers', method: HTTP_METHODS.GET },
        viewInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.GET },
        updateInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.PUT },
        markInfluencerCampaignComplete: { url: '/campaigns/{campaign_id}/influencers/{user_id}/setComplete', method: HTTP_METHODS.POST },
        markInfluencerCampaignIncomplete: { url: '/campaigns/{campaign_id}/influencers/{user_id}/setIncomplete', method: HTTP_METHODS.POST },
        listInfluencerCampaignLinks: { url: '/campaigns/{campaign_id}/influencers/{user_id}/links', method: HTTP_METHODS.GET },
        listInfluencerCampaignLinkClicks: { url: '/campaigns/{campaign_id}/influencers/{user_id}/linkClicks', method: HTTP_METHODS.GET },
        listCampaignMentions: { url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.GET },
        createCampaignMention: { url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.POST },
        getCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.GET },
        updateCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.PUT },
        deleteCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.DELETE },
        addCountry: { url: '/campaigns/{campaign_id}/addCountry', method: HTTP_METHODS.POST },
        removeCountry: { url: '/campaigns/{campaign_id}/removeCountry/{country_id}', method: HTTP_METHODS.DELETE },
        addGender: { url: '/campaigns/{campaign_id}/addGender', method: HTTP_METHODS.POST },
        removeGender: { url: '/campaigns/{campaign_id}/removeGender/{gender_id}', method: HTTP_METHODS.DELETE },
        addEthnicity: { url: '/campaigns/{campaign_id}/addEthnicity', method: HTTP_METHODS.POST },
        removeEthnicity: { url: '/campaigns/{campaign_id}/removeEthnicity/{ethnicity_id}', method: HTTP_METHODS.DELETE },
        addType: { url: '/campaigns/{campaign_id}/addType', method: HTTP_METHODS.POST },
        removeType: { url: '/campaigns/{campaign_id}/removeType/{type_id}', method: HTTP_METHODS.DELETE },
        inviteInfluencer: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.POST },
        viewInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}', method: HTTP_METHODS.GET },
        updateInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}', method: HTTP_METHODS.PUT },
        updateInfluencerCompensationInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/compensation', method: HTTP_METHODS.PUT },
        listInfluencerInvites: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.GET },
        sendInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.POST },
        acceptInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/accept', method: HTTP_METHODS.POST },
        declineInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/decline', method: HTTP_METHODS.POST },
        widthdrawInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/withdraw', method: HTTP_METHODS.POST },
        finishInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/finish', method: HTTP_METHODS.POST },
        acceptInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/accept', method: HTTP_METHODS.POST },
        declineInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/deny', method: HTTP_METHODS.POST },
        reviewInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/review', method: HTTP_METHODS.POST },
        getRecommendedInfluencers: { url: '/campaigns/{campaign_id}/recommendInfluencers', method: HTTP_METHODS.GET },
        generateContentForInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/generatePostContent', method: HTTP_METHODS.POST },
        getActiveCampaignLinks: { url: '/campaigns/active', method: HTTP_METHODS.GET },
        generateContractFromInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/contract', method: HTTP_METHODS.POST },
        sendContractWithDocusign: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/docusign', method: HTTP_METHODS.POST },
        resendAcceptanceEmail: { url: '/campaigns/{campaign_id}/influencers/{user_id}/resendInvite', method: HTTP_METHODS.POST },
        payInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/payInfluencer', method: HTTP_METHODS.POST },
        listPayouts: { url: '/campaigns/{campaign_id}/payouts', method: HTTP_METHODS.GET },
        generateCampaignContract: { url: '/campaigns/{campaign_id}/influencers/{user_id}/contract', method: HTTP_METHODS.POST },
        sendCampaignContractWithDocusign: { url: '/campaigns/{campaign_id}/influencers/{user_id}/docusign', method: HTTP_METHODS.POST },
        sourcingSearchIgdbForCampaignGame: { url: '/campaigns/{campaign_id}/sourcing/search-game', method: HTTP_METHODS.GET },
        sourcingGetSimilarIgdbGames: { url: '/campaigns/{campaign_id}/sourcing/similar-games', method: HTTP_METHODS.GET },
        sourcingFindCreators: { url: '/campaigns/{campaign_id}/sourcing/find-creators', method: HTTP_METHODS.POST },
        updateSourcingSettings: { url: '/campaigns/{campaign_id}/sourcing/settings', method: HTTP_METHODS.PUT },
        sourcingFindAndSaveCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-creators', method: HTTP_METHODS.POST },
        getSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators', method: HTTP_METHODS.GET },
        getSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}', method: HTTP_METHODS.GET },
        updateSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}', method: HTTP_METHODS.PUT },
        assignKeyToInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/assign-key', method: HTTP_METHODS.POST },
        enrichSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}/enrich', method: HTTP_METHODS.POST },
        sourcingFindAndSaveTwitchCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-twitch-creators', method: HTTP_METHODS.POST },
        sourcingFindAndSaveYouTubeCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-youtube-creators', method: HTTP_METHODS.POST },
        exportSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators/export', method: HTTP_METHODS.GET },
        sourcingSearchAnyIgdbGame: { url: '/campaigns/{campaign_id}/sourcing/search-any-game', method: HTTP_METHODS.GET },
        sourcingGetGamesByIds: { url: '/campaigns/{campaign_id}/sourcing/games-by-ids', method: HTTP_METHODS.POST },
        updateAutoInviteCriteria: { url: '/campaigns/{campaign_id}/sourcing/auto-invite-criteria', method: HTTP_METHODS.PUT },
        updateCustomRanking: { url: '/campaigns/{campaign_id}/sourcing/custom-ranking', method: HTTP_METHODS.PUT },
        updateCreatorBucket: { url: '/campaigns/{campaign_id}/sourcing/creators/{creator_id}/bucket', method: HTTP_METHODS.PUT },
        reRankSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/re-rank', method: HTTP_METHODS.POST },
        bulkEnrichSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators/bulk-enrich', method: HTTP_METHODS.POST },
        getInfluencerInstallReport: { url: '/campaigns/{campaign_id}/reports/influencer-installs', method: HTTP_METHODS.GET },
        getSpecificInfluencerInstallReport: {
            url: '/campaigns/{campaign_id}/reports/influencer-installs/{influencer_id}',
            method: HTTP_METHODS.GET
        },
        generateInfluencerLandingPage: {
            url: '/campaigns/{campaign_id}/influencers/{user_id}/landing-page/generate',
            method: HTTP_METHODS.POST
        },
        updateInfluencerLandingPage: {
            url: '/campaigns/{campaign_id}/influencers/{user_id}/landing-page',
            method: HTTP_METHODS.PUT
        },
        exportInfluencerInvites: {
            url: '/campaigns/{campaign_id}/influencers/invites/export',
            method: HTTP_METHODS.POST
        },
        sourcingFindAndSaveFanslyCreators: {
            url: '/campaigns/{campaign_id}/sourcing/find-save-fansly-creators',
            method: HTTP_METHODS.POST
        },
        sendOnboarding: { url: '/campaigns/{campaign_id}/influencers/{user_id}/onboarding', method: HTTP_METHODS.POST },
        crossPromote: { url: '/campaigns/{campaign_id}/cross-promote', method: HTTP_METHODS.POST },
    };
    return CampaignsRoute;
}());

var Campaigns = /** @class */ (function () {
    function Campaigns() {
    }
    /**
     * List all the Campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    Campaigns.list = function (params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaigns, undefined, undefined, params);
    };
    /**
     * Create a new campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/createCampaign
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.create = function (data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaign, data, undefined, params);
    };
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateCampaign
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Campaigns.update = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaign, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignByUuid
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.view = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.viewCampaign, {}, { campaign_id: campaign_id }, params);
    };
    /**
     * Deletes a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaign
     *
     * @param campaign_id The id of the campaign to delete.
     * @returns promise
     */
    Campaigns.delete = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteCampaign, {}, { campaign_id: campaign_id }, params);
    };
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    Campaigns.getLedger = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getLedger, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get the post associated with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    Campaigns.getPosts = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getPosts, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/campaignStatistics
     *
     * @returns promise
     */
    Campaigns.statistics = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.statistics, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignStreamViewCounts
     *
     * @returns promise
     */
    Campaigns.getStreamViewCounts = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.streamViewCounts, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Retrieve recommended influencers for a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/recommendInfluencers
     *
     * @returns promise
     */
    Campaigns.getRecommendedInfluencers = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getRecommendedInfluencers, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    Campaigns.listCampaignLinks = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignLinks, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    Campaigns.listInfluencerCampaignLinkClicks = function (campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinkClicks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Create a new campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.createCampaignLink = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaignLink, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Campaigns.updateCampaignLink = function (campaign_id, link_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaignLink, data, { campaign_id: campaign_id, link_id: link_id }, params);
    };
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.getCampaignLink = function (campaign_id, link_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getCampaignLink, {}, { campaign_id: campaign_id, link_id: link_id }, params);
    };
    /**
    * List all the influencers associated with a campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerCampaigns
    *
    * @returns promise
    */
    Campaigns.listInfluencerCampaigns = function (params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaigns, undefined, undefined, params);
    };
    /**
     * Create an influencer campaign
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/6d834c837c5f330d6a4cef5786c45c90
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.createInfluencerCampaign = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createInfluencerCampaign, data, { campaign_id: campaign_id }, params);
    };
    /**
    * Update an influencer campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCampaign
    *
    * @param campaign_id The id of the campaign to update.
    * @param data The data to update.
    *
    * @returns promise
    */
    Campaigns.updateInfluencerCampaign = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCampaign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/showInfluencerCampaign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.viewInfluencerCampaign = function (campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.viewInfluencerCampaign, {}, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Mark an influencer campaign as completed.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/markCompleted
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.markInfluencerCampaignComplete = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignComplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Mark an influencer campaign as incomplete.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/afffdc7a0c7fc4d9740f10517c53933e
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.markInfluencerCampaignIncomplete = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignIncomplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Get all the links associated with an influencer's campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    Campaigns.listInfluencerCampaignLinks = function (campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
    * List all the campaign mentions.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
    *
    * @returns promise
    */
    Campaigns.listCampaignMentions = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignMentions, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Create a new campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    Campaigns.createCampaignMention = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaignMention, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Update a campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Campaigns.updateCampaignMention = function (campaign_id, mention_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaignMention, data, { campaign_id: campaign_id, mention_id: mention_id }, params);
    };
    /**
     * Retrieve the information for a single campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.getCampaignMention = function (campaign_id, mention_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    };
    /**
    * Delete the information for a single campaign mention.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    Campaigns.deleteCampaignMention = function (campaign_id, mention_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    };
    /**
     * Associate a country with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addCountryToCampaign
     *
     * @param data The country information to be passed to update the country campaigns information.
     *
     * @returns Promise
     */
    Campaigns.addCountry = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addCountry, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Remove a country
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeCountry
     *
     * @param country_id The id of the country to remove.
     *
     * @returns Promise
     */
    Campaigns.removeCountry = function (campaign_id, country_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeCountry, undefined, { campaign_id: campaign_id, country_id: country_id }, params);
    };
    /**
     * Associate a gender with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The gener information to be passed to update the gender information.
     *
     * @returns Promise
     */
    Campaigns.addGender = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addGender, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Remove a gender
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the gender to remove.
     *
     * @returns Promise
     */
    Campaigns.removeGender = function (campaign_id, gender_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeGender, undefined, { campaign_id: campaign_id, gender_id: gender_id }, params);
    };
    /**
     * Associate an ethnicity with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The ethnicity information to be passed to update the campaign information.
     *
     * @returns Promise
     */
    Campaigns.addEthnicity = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addEthnicity, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Remove an ethnicity
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    Campaigns.removeEthnicity = function (campaign_id, ethnicity_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeEthnicity, undefined, { campaign_id: campaign_id, ethnicity_id: ethnicity_id }, params);
    };
    /**
    * Associate a type with the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
    *
    * @param data The type information to be passed to update the campaign information.
    *
    * @returns Promise
    */
    Campaigns.addType = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addType, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Remove an type
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param type_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    Campaigns.removeType = function (campaign_id, type_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeType, undefined, { campaign_id: campaign_id, type_id: type_id }, params);
    };
    /**
     * Get a list of influencer invites that have been sent for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvites
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.listInfluencerInvites = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerInvites, {}, { campaign_id: campaign_id }, params);
    };
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/inviteInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.sendInfluencerInvite = function (campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendInfluencerInvite, data, { campaign_id: campaign_id }, params);
    };
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.viewInfluencerInvite = function (campaign_id, influencer_id, token, params) {
        // Ensure params is defined and includes the token
        var updatedParams = __assign(__assign({}, params), { token: token });
        return Requests.processRoute(CampaignsRoute.routes.viewInfluencerInvite, {}, { campaign_id: campaign_id, influencer_id: influencer_id }, updatedParams);
    };
    /**
     * Updates the influencer invite information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.updateInfluencerInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * Updates the influencer invite compenstation information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCompensationInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.updateInfluencerCompensationInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCompensationInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
    * The route for an influencer to accept an invite.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    Campaigns.acceptInfluencerInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/delinceInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.declineInfluencerInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/withdrawInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.widthdrawInfluencerInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.widthdrawInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
    * The route to mark an influencer reachout and finished, and it will no longer send reachouts.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/finishInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    Campaigns.finishInfluencerInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.finishInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
   * The route to accept an influnecers request to join the campaign.
   *
   * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencer
   *
   * @param campaign_id The id fo the campaign to retrieve.
   *
   * @returns promise
   */
    Campaigns.acceptInfluencerRequest = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * The route to deny an influencer request to join the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/denyInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.declineInfluencerRequest = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * The route the route to mark the influencers request as in review.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/reviewInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.reviewInfluencerRequest = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.reviewInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Generate post content for the influencer to help them with their content creation.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generatePostContent
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.generateContentForInfluencer = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateContentForInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Get a list of all active campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getActiveCampaignLinks
     *
     * @returns promise
     */
    Campaigns.getActiveCampaignLinks = function (params) {
        return Requests.processRoute(CampaignsRoute.routes.getActiveCampaignLinks, undefined, undefined, params);
    };
    /**
     * Generate a contract for the influencer based on the values in the invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generateInfluencerContract
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.generateContractFromInvite = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateContractFromInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.sendContractWithDocusign = function (campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendContractWithDocusign, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * Resend the acceptance email for the influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/resendInfluencerAcceptance
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.resendAcceptanceEmail = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.resendAcceptanceEmail, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Pay the influencer a custom amount for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/payInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.payInfluencer = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.payInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignPayouts
     *
     * @returns promise
     */
    Campaigns.listPayouts = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getLedger, undefined, { campaign_id: campaign_id }, params);
    };
    /**
    * Generate a contract for the influencer based on the values in the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/generateCampaignContract
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    Campaigns.generateCampaignContract = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateCampaignContract, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendCampaignContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    Campaigns.sendCampaignContractWithDocusign = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendCampaignContractWithDocusign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Search IGDB for the campaign's game.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., search_query, limit).
     * @returns promise
     */
    Campaigns.sourcingSearchIgdbForCampaignGame = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchIgdbForCampaignGame, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Find popular similar games from IGDB.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., igdb_id, limit).
     * @returns promise
     */
    Campaigns.sourcingGetSimilarIgdbGames = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetSimilarIgdbGames, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Find content creators for selected games. This does not save them to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    Campaigns.sourcingFindCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Update campaign sourcing settings.
     * @param campaign_id The UUID of the campaign.
     * @param data The settings to update (igdb_id, similar_game_igdb_ids, etc.).
     * @returns promise
     */
    Campaigns.updateSourcingSettings = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcingSettings, data, { campaign_id: campaign_id });
    };
    /**
     * Find and save content creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    Campaigns.sourcingFindAndSaveCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Get sourced creators for a campaign from the database.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for filtering, sorting, and pagination.
     * @returns promise
     */
    Campaigns.getSourcedCreators = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreators, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get a single sourced creator.
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator.
     * @returns promise
     */
    Campaigns.getSourcedCreator = function (campaign_id, sourced_creator_id) {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreator, undefined, { campaign_id: campaign_id, sourced_creator_id: sourced_creator_id });
    };
    /**
     * Update a sourced creator (e.g., approve or reject).
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to update.
     * @param data The update data (e.g., is_approved, is_rejected).
     * @returns promise
     */
    Campaigns.updateSourcedCreator = function (campaign_id, sourced_creator_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcedCreator, data, { campaign_id: campaign_id, sourced_creator_id: sourced_creator_id });
    };
    /**
     * Assigns an available access key to an influencer for a specific campaign.
     * This will find the next available key for the given platform and assign it.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/assignKey
     *
     * @param campaign_id The ID of the campaign.
     * @param user_id The ID of the user (influencer).
     * @param data The platform for which to assign a key.
     * @param data.platform The platform of the key to assign (e.g., 'steam').
     * @returns promise
     */
    Campaigns.assignKeyToInfluencer = function (campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.assignKeyToInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    };
    /**
     * Manually trigger a real-time profile enrichment for a sourced creator.
     * This synchronously scrapes and parses social media profiles to enrich the creator's data and returns the updated record.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/enrichSourcedCreator
     *
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to enrich.
     * @returns promise containing the fully enriched SourcedCreator object.
     */
    Campaigns.enrichSourcedCreator = function (campaign_id, sourced_creator_id) {
        return Requests.processRoute(CampaignsRoute.routes.enrichSourcedCreator, {}, { campaign_id: campaign_id, sourced_creator_id: sourced_creator_id });
    };
    /**
    * Find and save Twitch creators for selected games to the database.
    * @param campaign_id The UUID of the campaign.
    * @param data The search criteria (source, igdb_ids, etc.).
    * @returns promise
    */
    Campaigns.sourcingFindAndSaveTwitchCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveTwitchCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Find and save YouTube creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (igdb_ids, period).
     * @returns promise
     */
    Campaigns.sourcingFindAndSaveYouTubeCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveYouTubeCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Export sourced creators for a campaign to a CSV or XLSX file.
     * This method applies the same filtering and sorting parameters as getSourcedCreators.
     * The browser will automatically trigger a download for the returned file.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/exportSourcedCreators
     *
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for the export, including the required 'format' and any filters.
     * @param params.format The desired file format ('csv' or 'xlsx').
     * @param params.search Optional search term.
     * @param params.status Optional status filter ('pending', 'approved', 'rejected').
     * @param params.has_email Optional filter for creators with an email address (true/false).
     * @returns A promise that resolves with the file blob for download.
     */
    Campaigns.exportSourcedCreators = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.exportSourcedCreators, undefined, { campaign_id: campaign_id }, params);
    };
    /**
    * Search IGDB for any game by a query string.
    * @param campaign_id The UUID of the campaign (for permission checking).
    * @param params Query parameters including 'search_query' and optional 'limit'.
    * @returns promise
    */
    Campaigns.sourcingSearchAnyIgdbGame = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchAnyIgdbGame, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    Campaigns.sourcingGetGamesByIds = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetGamesByIds, data, { campaign_id: campaign_id });
    };
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    Campaigns.updateAutoInviteCriteria = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateAutoInviteCriteria, data, { campaign_id: campaign_id });
    };
    Campaigns.updateCustomRanking = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateCustomRanking, data, { campaign_id: campaign_id });
    };
    Campaigns.updateCreatorBucket = function (campaign_id, creator_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateCreatorBucket, data, { campaign_id: campaign_id, creator_id: creator_id });
    };
    Campaigns.reRankSourcedCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.reRankSourcedCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Queue multiple sourced creators for profile enrichment.
     * This dispatches a background job for each creator to find their social media profiles and contact information.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of SourcedCreator IDs to enrich.
     * @param data.creator_ids An array of SourcedCreator UUIDs.
     * @returns A promise that resolves with a confirmation message and the count of queued jobs.
     */
    Campaigns.bulkEnrichSourcedCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.bulkEnrichSourcedCreators, data, { campaign_id: campaign_id });
    };
    /**
     * Get install attribution breakdown by influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInstallReport
     *
     * @param campaign_id The UUID of the campaign.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    Campaigns.getInfluencerInstallReport = function (campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getInfluencerInstallReport, undefined, { campaign_id: campaign_id }, params);
    };
    /**
     * Get detailed install report for a specific influencer.
     * Accessible by Campaign Owners and the specific Influencer.
     *
     * @param campaign_id The UUID of the campaign.
     * @param influencer_id The UUID of the influencer.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    Campaigns.getSpecificInfluencerInstallReport = function (campaign_id, influencer_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getSpecificInfluencerInstallReport, undefined, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    };
    /**
     * Generate AI Landing Page for an Influencer Campaign.
     */
    Campaigns.generateInfluencerLandingPage = function (campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.generateInfluencerLandingPage, data, { campaign_id: campaign_id, user_id: user_id });
    };
    /**
     * Update settings for the Influencer Landing Page.
     */
    Campaigns.updateInfluencerLandingPage = function (campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerLandingPage, data, { campaign_id: campaign_id, user_id: user_id });
    };
    /**
     * Export influencer invites to CSV.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data Filters for the export (stages, status).
     */
    Campaigns.exportInfluencerInvites = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.exportInfluencerInvites, data, { campaign_id: campaign_id });
    };
    /**
     * Find and save Fansly creators for a specific campaign.
     *
     * @see CampaignCreatorSourcingController@findAndSaveFanslyCreators
     *
     * @param campaign_id The UUID of the campaign.
     * @param data Parameters for sourcing.
     * @param data.query The search term (e.g., 'gaming', 'cosplay'). Defaults to 'gaming'.
     * @param data.pages Number of pages to crawl (25 results per page). Defaults to 10.
     * @returns promise
     */
    Campaigns.sourcingFindAndSaveFanslyCreators = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveFanslyCreators, data, { campaign_id: campaign_id });
    };
    Campaigns.sendOnboarding = function (campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sendOnboarding, data, { campaign_id: campaign_id, user_id: user_id });
    };
    /**
     * Bulk invite influencers from a previous campaign into the current one.
     *
     * @param campaign_id The UUID of the target campaign.
     * @param data { source_campaign_id: string, only_successful: boolean }
     */
    Campaigns.crossPromote = function (campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.crossPromote, data, { campaign_id: campaign_id });
    };
    return Campaigns;
}());

var SubscriptionsRoute = /** @class */ (function () {
    function SubscriptionsRoute() {
    }
    SubscriptionsRoute.routes = {
        createCreatorSubscription: { url: '/subscriptions/creators/subscribe', method: HTTP_METHODS.POST },
        getCreatorSubscription: { url: '/subscriptions/creators/{stripe_subscription_id}', method: HTTP_METHODS.GET },
        cancelCreatorSubscription: { url: '/subscriptions/creators/{stripe_subscription_id}', method: HTTP_METHODS.DELETE },
        listCreatorSubscriptions: { url: '/subscriptions/creators', method: HTTP_METHODS.GET },
        createCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/subscribe/{community_id}', method: HTTP_METHODS.POST },
        getCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/{community_id}/{stripe_subscription_id}', method: HTTP_METHODS.GET },
        cancelCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/{community_id}/{stripe_subscription_id}', method: HTTP_METHODS.DELETE },
        listCommunityInfluencerSubscriptions: { url: '/subscriptions/communities/influencers/{community_id}', method: HTTP_METHODS.GET },
        changeCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/change/{community_id}', method: HTTP_METHODS.POST },
        createCustomCommunitySubscription: {
            url: '/subscriptions/communities/custom/{community_id}',
            method: HTTP_METHODS.POST
        },
        purchaseLicense: { url: '/titles/{title_id}/purchase', method: HTTP_METHODS.POST },
    };
    return SubscriptionsRoute;
}());

var Subscriptions = /** @class */ (function () {
    function Subscriptions() {
    }
    /**
     * Get a creator subscription for the creator program.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscription
     *
     * @returns promise
     */
    Subscriptions.getCreatorSubscription = function (stripe_subscription_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.getCreatorSubscription, undefined, { stripe_subscription_id: stripe_subscription_id }, params);
    };
    /**
     * Get a s subscription plan that a community has to talk with influencers
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscription
     *
     * @returns promise
     */
    Subscriptions.getCommunityInfluencerSubscription = function (community_id, stripe_subscription_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.getCommunityInfluencerSubscription, undefined, { community_id: community_id, stripe_subscription_id: stripe_subscription_id }, params);
    };
    /**
     * List all the subscription plans that a creator has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscriptions
     *
     * @returns promise
     */
    Subscriptions.listCreatorSubscriptions = function (params) {
        return Requests.processRoute(SubscriptionsRoute.routes.listCreatorSubscriptions, undefined, undefined, params);
    };
    /**
     * List all the subscription plans that a community has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscriptions
     *
     * @returns promise
     */
    Subscriptions.listCommunityInfluencerSubscriptions = function (community_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.listCommunityInfluencerSubscriptions, undefined, { community_id: community_id }, params);
    };
    /**
     * Create a new subscription of a content creator
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    Subscriptions.createCreatorSubscription = function (data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCreatorSubscription, data, {}, params);
    };
    /**
     * Create a new subscription of a community engaging in influencer marketing
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    Subscriptions.createCommunityInfluencerSubscription = function (community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCommunityInfluencerSubscription, data, { community_id: community_id }, params);
    };
    /**
     * Cancels a creator subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCreatorSubscription
     *
     * @returns A promise
     */
    Subscriptions.cancelCreatorSubscription = function (stripe_subscription_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCreatorSubscription, data, { stripe_subscription_id: stripe_subscription_id }, params);
    };
    /**
     * Cancels a community subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    Subscriptions.cancelCommunityInfluencerSubscription = function (community_id, stripe_subscription_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCommunityInfluencerSubscription, data, { community_id: community_id, stripe_subscription_id: stripe_subscription_id }, params);
    };
    /**
     * Change the current subscription that the community is associated with.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    Subscriptions.changeCommunityInfluencerSubscription = function (community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.changeCommunityInfluencerSubscription, data, { community_id: community_id }, params);
    };
    /**
    * Create a custom tailored subscription for a business/community.
    * Only accessible by Glitch administrators.
    *
    * @param community_id The ID of the community.
    * @param data { priceId, paymentMethod, custom_name, limits: { posts, enrichments, invites, ads }, metered_prices: [] }
    */
    Subscriptions.createCustomCommunitySubscription = function (community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCustomCommunitySubscription, data, { community_id: community_id }, params);
    };
    /**
     * Purchase a permanent license or rent a game title.
     * If a rental was active in the last 7 days, the fee is automatically deducted from the premium price.
     * @param data { purchase_type: 'premium' | 'rental', payment_method_id: string }
     */
    Subscriptions.purchaseLicense = function (title_id, data) {
        return Requests.processRoute(SubscriptionsRoute.routes.purchaseLicense, data, { title_id: title_id });
    };
    return Subscriptions;
}());

var MessagesRoute = /** @class */ (function () {
    function MessagesRoute() {
    }
    MessagesRoute.routes = {
        listMessageThreads: { url: '/messages', method: HTTP_METHODS.GET },
        sendMessage: { url: '/messages', method: HTTP_METHODS.POST },
        deleteMessage: { url: '/messages/{message_id}', method: HTTP_METHODS.DELETE },
        createOrGetThread: { url: '/messages/makeThread', method: HTTP_METHODS.POST },
        getThread: { url: '/messages/thread/{thread_id}', method: HTTP_METHODS.GET },
    };
    return MessagesRoute;
}());

var Messages = /** @class */ (function () {
    function Messages() {
    }
    /**
     * Get all the message threads that a user has particpated in.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getConversations
     *
     * @returns promise
     */
    Messages.listMessageThreads = function (params) {
        return Requests.processRoute(MessagesRoute.routes.listMessageThreads, undefined, undefined, params);
    };
    /**
     * Send a new message that will be added to a thread
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/storeMessage
     *
     * @returns A promise
     */
    Messages.sendMessage = function (data, params) {
        return Requests.processRoute(MessagesRoute.routes.sendMessage, data, {}, params);
    };
    /**
     * Deletes a message.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/destroyMessage
     *
     * @returns A promise
     */
    Messages.deleteMessage = function (message_id, data, params) {
        return Requests.processRoute(MessagesRoute.routes.deleteMessage, data, { message_id: message_id }, params);
    };
    /**
     * A message thread is a thread between multiple users. Pass the user ids in the thread and it will either
     * get the current thread or create a new thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/conversations
     *
     * @returns A promise
     */
    Messages.createOrGetThread = function (data, params) {
        return Requests.processRoute(MessagesRoute.routes.createOrGetThread, data, {}, params);
    };
    /**
     * Get a single thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getThread
     *
     * @returns promise
     */
    Messages.getThread = function (thread_id, params) {
        return Requests.processRoute(MessagesRoute.routes.getThread, undefined, { thread_id: thread_id }, params);
    };
    return Messages;
}());

var FeedbackRoute = /** @class */ (function () {
    function FeedbackRoute() {
    }
    FeedbackRoute.routes = {
        listFeedback: { url: '/feedback', method: HTTP_METHODS.GET },
        sendFeedback: { url: '/feedback', method: HTTP_METHODS.POST },
        viewFeedback: { url: '/feedback/{feedback_id}', method: HTTP_METHODS.GET },
    };
    return FeedbackRoute;
}());

var Feedback = /** @class */ (function () {
    function Feedback() {
    }
    /**
     * List all the feedback that been left by users.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/listFeedback
     *
     * @returns promise
     */
    Feedback.listFeedback = function (params) {
        return Requests.processRoute(FeedbackRoute.routes.listFeedback, undefined, undefined, params);
    };
    /**
     * View a particular item of feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/getFeedbackById
     *
     * @returns promise
     */
    Feedback.viewFeedback = function (feedback_id, params) {
        return Requests.processRoute(FeedbackRoute.routes.viewFeedback, undefined, { feedback_id: feedback_id }, params);
    };
    /**
     * Submit feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @returns A promise
     */
    Feedback.sendFeedback = function (data, params) {
        return Requests.processRoute(FeedbackRoute.routes.sendFeedback, data, {}, params);
    };
    /**
    * Submit feedback with the log file as a file.
    *
    * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    Feedback.sendFeedbackWithFile = function (file, data, params) {
        var url = FeedbackRoute.routes.sendFeedback.url;
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Submit feedback with the log file as a blob.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    Feedback.sendFeedbackWithBlob = function (blob, data, params) {
        var url = FeedbackRoute.routes.sendFeedback.url;
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    return Feedback;
}());

var InfluencerRoutes = /** @class */ (function () {
    function InfluencerRoutes() {
    }
    InfluencerRoutes.routes = {
        addInfluencer: { url: '/influencers', method: HTTP_METHODS.POST },
        listInfluencers: { url: '/influencers', method: HTTP_METHODS.GET },
        viewInfluencer: { url: '/influencers/{influencer_id}', method: HTTP_METHODS.GET },
        generateProfile: { url: '/influencers/{influencer_id}/generateProfile', method: HTTP_METHODS.POST },
        listNotes: { url: '/influencers/{influencer_id}/notes', method: HTTP_METHODS.GET },
        viewNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.GET },
        createNote: { url: '/influencers/{influencer_id}/notes', method: HTTP_METHODS.POST },
        updateNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.PUT },
        deleteNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.DELETE },
        listContracts: { url: '/influencers/contracts', method: HTTP_METHODS.GET },
        workbook: { url: '/influencers/workbook', method: HTTP_METHODS.POST },
    };
    return InfluencerRoutes;
}());

var Influencers = /** @class */ (function () {
    function Influencers() {
    }
    /**
     * Add a new influencer to the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    Influencers.addInfluencer = function (data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.addInfluencer, data, {}, params);
    };
    /**
     * Get a list of influencers available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     *
     * @returns promise
     */
    Influencers.listInfluencers = function (params) {
        return Requests.processRoute(InfluencerRoutes.routes.listInfluencers, undefined, undefined, params);
    };
    /**
     * Retrieve information on a single influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencerById
     *
     * @returns promise
     */
    Influencers.viewInfluencer = function (influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.viewInfluencer, undefined, { influencer_id: influencer_id }, params);
    };
    /**
     * Generate a profile for an influencer based on their data.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/generateInfluencerProfile
     *
     * @returns promise
     */
    Influencers.generateProfile = function (influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.generateProfile, undefined, { influencer_id: influencer_id }, params);
    };
    /**
     * List all the notes left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNotes
     *
     * @returns promise
     */
    Influencers.listNotes = function (influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.listNotes, undefined, { influencer_id: influencer_id }, params);
    };
    /**
     * View a note left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNote
     *
     * @returns promise
     */
    Influencers.viewNote = function (influencer_id, note_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.viewNote, undefined, { influencer_id: influencer_id, note_id: note_id }, params);
    };
    /**
     * Create a new note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    Influencers.createNote = function (influencer_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.createNote, data, { influencer_id: influencer_id }, params);
    };
    /**
    * Update a note about an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/updateInfluencersNote
    *
    * @returns promise
    */
    Influencers.updateNote = function (influencer_id, note_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.updateNote, data, { influencer_id: influencer_id, note_id: note_id }, params);
    };
    /**
     * Delete a note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/deleteInfluencersNote
     *
     * @returns promise
     */
    Influencers.deleteNote = function (influencer_id, note_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.deleteNote, data, { influencer_id: influencer_id, note_id: note_id }, params);
    };
    /**
    * Get a list of contracts associated with an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
    *
    * @returns promise
    */
    Influencers.listContracts = function (params) {
        return Requests.processRoute(InfluencerRoutes.routes.listContracts, undefined, undefined, params);
    };
    /**
     * Download the influencer work
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/downloadInfluencersWorkbook
     *
     * @returns promise
     */
    Influencers.workbook = function (data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.workbook, data, {}, params);
    };
    return Influencers;
}());

var GamesRoutes = /** @class */ (function () {
    function GamesRoutes() {
    }
    GamesRoutes.routes = {
        listGames: { url: '/games', method: HTTP_METHODS.GET },
        viewGame: { url: '/games/{game_id}', method: HTTP_METHODS.GET },
        createCampaignData: { url: '/games/{game_id}/generateCampaign', method: HTTP_METHODS.POST },
        createCampaignWithTitle: { url: '/games/{game_id}/generateCampaignWithTitle', method: HTTP_METHODS.POST },
        createGameTitle: { url: '/games/{game_id}/generateTitle', method: HTTP_METHODS.POST },
        createGameScheduler: { url: '/games/{game_id}/generateScheduler', method: HTTP_METHODS.POST },
        releaseStats: { url: '/games/release-stats', method: HTTP_METHODS.GET },
    };
    return GamesRoutes;
}());

var Games = /** @class */ (function () {
    function Games() {
    }
    /**
     * Get a list of Games available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     *
     * @returns promise
     */
    Games.listGames = function (params) {
        return Requests.processRoute(GamesRoutes.routes.listGames, undefined, undefined, params);
    };
    /**
     * Retrieve information on a single game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     *
     * @returns promise
     */
    Games.viewGame = function (game_id, params) {
        return Requests.processRoute(GamesRoutes.routes.viewGame, undefined, { game_id: game_id }, params);
    };
    /**
     * Generates campaign data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    Games.createCampaignData = function (game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createCampaignData, data, { game_id: game_id }, params);
    };
    /**
     * Generates campaign data with a game title.
     *
     * @returns promise
     */
    Games.createCampaignWithTitle = function (game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createCampaignWithTitle, data, { game_id: game_id }, params);
    };
    /**
     * Generates game data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    Games.createGameTitle = function (game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createGameTitle, data, { game_id: game_id }, params);
    };
    /**
     * Generates game scheduler data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    Games.createGameScheduler = function (game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createGameScheduler, data, { game_id: game_id }, params);
    };
    /**
    * Get release competition statistics and Steam danger zones.
    *
    * This tool analyzes the 'ExternalGames' database to show how many other games
    * are releasing around a specific date. It also overlays hard-coded Steam events
    * like NextFest and Seasonal Sales.
    *
    * @see https://api.glitch.fun/api/documentation#/ExternalGames/getReleaseStats
    *
    * @param params Filtering options:
    *   - precision: 'day' | 'month' | 'year' (Default: 'day'). Use 'month' for long-term planning.
    *   - start_date: 'YYYY-MM-DD'. The date to begin the analysis from.
    *
    * @returns AxiosPromise<Response<ReleaseStatsResponse>>
    *
    * @example
    * Games.getReleaseStats({ precision: 'day', start_date: '2025-06-01' })
    *   .then(res => console.log(res.data.data));
    */
    Games.getReleaseStats = function (params) {
        // Defensive check: ensure precision is valid if provided
        if ((params === null || params === void 0 ? void 0 : params.precision) && !['day', 'month', 'year'].includes(params.precision)) {
            console.warn("Invalid precision '".concat(params.precision, "' passed to getReleaseStats. Defaulting to 'day'."));
        }
        return Requests.processRoute(GamesRoutes.routes.releaseStats, undefined, undefined, params);
    };
    return Games;
}());

var PublicationsRoutes = /** @class */ (function () {
    function PublicationsRoutes() {
    }
    PublicationsRoutes.routes = {
        list: { url: '/publications', method: HTTP_METHODS.GET },
        download: { url: '/publications/download', method: HTTP_METHODS.POST },
    };
    return PublicationsRoutes;
}());

var Publications = /** @class */ (function () {
    function Publications() {
    }
    /**
     * Get a list of all publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/getPublications
     *
     * @returns promise
     */
    Publications.list = function (params) {
        return Requests.processRoute(PublicationsRoutes.routes.list, undefined, undefined, params);
    };
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/downloadPublications
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    Publications.download = function (data, params) {
        return Requests.processRoute(PublicationsRoutes.routes.download, data, undefined, params);
    };
    return Publications;
}());

var GameShowsRoute = /** @class */ (function () {
    function GameShowsRoute() {
    }
    GameShowsRoute.routes = {
        list: { url: '/gameshows', method: HTTP_METHODS.GET },
        create: { url: '/gameshows', method: HTTP_METHODS.POST },
        view: { url: '/gameshows/{show_id}', method: HTTP_METHODS.GET },
        update: { url: '/gameshows/{show_id}', method: HTTP_METHODS.PUT },
        delete: { url: '/gameshows/{show_id}', method: HTTP_METHODS.DELETE },
        uploadLogo: { url: '/gameshows/{show_id}/uploadLogo', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/gameshows/{show_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        registerTitle: { url: '/gameshows/{show_id}/registerTitle', method: HTTP_METHODS.POST },
        listTitles: { url: '/gameshows/{show_id}/titles', method: HTTP_METHODS.GET },
        addTitle: { url: '/gameshows/{show_id}/addTitle', method: HTTP_METHODS.POST },
        viewTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.GET },
        updateTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.PUT },
        deleteTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.DELETE },
    };
    return GameShowsRoute;
}());

var GameShows = /** @class */ (function () {
    function GameShows() {
    }
    /**
     * List all the GameShows.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShows
     *
     * @returns promise
     */
    GameShows.list = function (params) {
        return Requests.processRoute(GameShowsRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/createGameShow
     *
     * @param data The data to be passed when creating a game show.
     *
     * @returns Promise
     */
    GameShows.create = function (data, params) {
        return Requests.processRoute(GameShowsRoute.routes.create, data, undefined, params);
    };
    /**
     * Update a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/updateGameShow
     *
     * @param show_id The id of the game show to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    GameShows.update = function (show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.update, data, { show_id: show_id }, params);
    };
    /**
     * Retrieve the information for a single game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShowByUuid
     *
     * @param show_id The id fo the game show to retrieve.
     *
     * @returns promise
     */
    GameShows.view = function (show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.view, {}, { show_id: show_id }, params);
    };
    /**
     * Deletes a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/deleteGameShow
     *
     * @param show_id The id of the game show to delete.
     * @returns promise
     */
    GameShows.delete = function (show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.delete, {}, { show_id: show_id }, params);
    };
    /**
       * Updates the main image for the game show using a File object.
       *
       * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
       *
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       *
       * @returns promise
       */
    GameShows.uploadLogoFile = function (show_id, file, data, params) {
        var url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the main image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    GameShows.uploadLogoBlob = function (show_id, blob, data, params) {
        var url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Updates the banner image for the game show using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    GameShows.uploadBannerImageFile = function (show_id, file, data, params) {
        var url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'image', file, data);
    };
    /**
     * Updates the banner image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    GameShows.uploadBannerImageBlob = function (show_id, blob, data, params) {
        var url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    };
    /**
     * Register a title to a game show.
     */
    GameShows.registerTitle = function (show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.registerTitle, data, { show_id: show_id }, params);
    };
    /**
     * Add a title to a game show by admin.
     */
    GameShows.addTitle = function (show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.addTitle, data, { show_id: show_id }, params);
    };
    /**
     * List all titles for a game show.
     */
    GameShows.listTitles = function (show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listTitles, {}, { show_id: show_id }, params);
    };
    /**
     * Get details of a specific title in a game show.
     */
    GameShows.getTitle = function (show_id, title_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.getTitle, {}, { show_id: show_id, title_id: title_id }, params);
    };
    /**
     * Update a specific title in a game show.
     */
    GameShows.updateTitle = function (show_id, title_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateTitle, data, { show_id: show_id, title_id: title_id }, params);
    };
    /**
     * Delete a specific title from a game show.
     */
    GameShows.deleteTitle = function (show_id, title_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteTitle, {}, { show_id: show_id, title_id: title_id }, params);
    };
    return GameShows;
}());

var NewslettersRoutes = /** @class */ (function () {
    function NewslettersRoutes() {
    }
    NewslettersRoutes.routes = {
        downloadMarketingChecklist: { url: '/newsletters/downloadMarketingChecklist', method: HTTP_METHODS.POST },
        joinCourseWaitlist: { url: '/newsletters/joinCourseWaitlist', method: HTTP_METHODS.POST },
        joinRaffleWaitlist: { url: '/newsletters/joinRaffleWaitlist', method: HTTP_METHODS.POST },
        joinDiscordMarketplaceWaitlist: { url: '/newsletters/joinDiscordMarketplaceWaitlist', method: HTTP_METHODS.POST },
        joinNsfwWaitlist: { url: '/newsletters/joinNsfwWaitlist', method: HTTP_METHODS.POST },
        // --- Admin Campaign Management ---
        listCampaigns: { url: '/admin/newsletters/campaigns', method: HTTP_METHODS.GET },
        createCampaign: { url: '/admin/newsletters/campaigns', method: HTTP_METHODS.POST },
        viewCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.GET },
        updateCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.PUT },
        deleteCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.DELETE },
        // --- Admin Campaign Actions & Analytics ---
        getCampaignStats: { url: '/admin/newsletters/campaigns/{id}/stats', method: HTTP_METHODS.GET },
        getCampaignLogs: { url: '/admin/newsletters/campaigns/{id}/logs', method: HTTP_METHODS.GET },
        sendCampaign: { url: '/admin/newsletters/campaigns/{id}/send', method: HTTP_METHODS.POST },
        sendTest: { url: '/admin/newsletters/campaigns/{id}/test', method: HTTP_METHODS.POST },
        // --- Admin Subscriber Management ---
        listSubscribers: { url: '/admin/newsletters/subscribers', method: HTTP_METHODS.GET },
        createSubscriber: { url: '/admin/newsletters/subscribers', method: HTTP_METHODS.POST },
        viewSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.GET },
        updateSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.PUT },
        deleteSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.DELETE },
        joinDistributionWaitlist: { url: '/newsletters/joinDistributionWaitlist', method: HTTP_METHODS.POST },
    };
    return NewslettersRoutes;
}());

var Newsletters = /** @class */ (function () {
    function Newsletters() {
    }
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    Newsletters.downloadMarketingChecklist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.downloadMarketingChecklist, data, undefined, params);
    };
    /**
     * Join the marketing course waitlist.
     *
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    Newsletters.joinCourseWaitlist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinCourseWaitlist, data, undefined, params);
    };
    /**
 * Join the raffle feature waitlist.
 *
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    Newsletters.joinRaffleWaitlist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinRaffleWaitlist, data, undefined, params);
    };
    /**
     * Join the Discord Marketplace waitlist.
     *
     * @param data { name, email, game, categories[] }
     */
    Newsletters.joinDiscordMarketplaceWaitlist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinDiscordMarketplaceWaitlist, data, undefined, params);
    };
    /**
     * Join the NSFW/Lewd game marketing waitlist.
     *
     * @param data { name, email, game }
     */
    Newsletters.joinNsfwWaitlist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinNsfwWaitlist, data, undefined, params);
    };
    // --- ADMINISTRATIVE CAMPAIGN METHODS ---
    /**
     * List all newsletter campaigns (Admin only).
     */
    Newsletters.listCampaigns = function (params) {
        return Requests.processRoute(NewslettersRoutes.routes.listCampaigns, undefined, undefined, params);
    };
    /**
     * Create a new newsletter campaign draft (Admin only).
     */
    Newsletters.createCampaign = function (data) {
        return Requests.processRoute(NewslettersRoutes.routes.createCampaign, data);
    };
    /**
     * Retrieve a specific newsletter campaign (Admin only).
     */
    Newsletters.viewCampaign = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.viewCampaign, undefined, { id: id });
    };
    /**
     * Update a newsletter campaign draft (Admin only).
     */
    Newsletters.updateCampaign = function (id, data) {
        return Requests.processRoute(NewslettersRoutes.routes.updateCampaign, data, { id: id });
    };
    /**
     * Delete a newsletter campaign (Admin only).
     */
    Newsletters.deleteCampaign = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.deleteCampaign, undefined, { id: id });
    };
    /**
     * Get high-level analytics for a specific campaign (Admin only).
     */
    Newsletters.getCampaignStats = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignStats, undefined, { id: id });
    };
    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    Newsletters.getCampaignLogs = function (id, params) {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignLogs, undefined, { id: id }, params);
    };
    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     */
    Newsletters.sendCampaign = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.sendCampaign, undefined, { id: id });
    };
    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    Newsletters.sendTestEmail = function (id, email) {
        return Requests.processRoute(NewslettersRoutes.routes.sendTest, { email: email }, { id: id });
    };
    // --- ADMINISTRATIVE SUBSCRIBER METHODS ---
    /**
     * List all newsletter subscribers (Admin only).
     */
    Newsletters.listSubscribers = function (params) {
        return Requests.processRoute(NewslettersRoutes.routes.listSubscribers, undefined, undefined, params);
    };
    /**
     * Manually create a new newsletter subscriber (Admin only).
     */
    Newsletters.createSubscriber = function (data) {
        return Requests.processRoute(NewslettersRoutes.routes.createSubscriber, data);
    };
    /**
     * Retrieve a specific subscriber's details (Admin only).
     */
    Newsletters.viewSubscriber = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.viewSubscriber, undefined, { id: id });
    };
    /**
     * Update a subscriber's information or status (Admin only).
     */
    Newsletters.updateSubscriber = function (id, data) {
        return Requests.processRoute(NewslettersRoutes.routes.updateSubscriber, data, { id: id });
    };
    /**
     * Permanently delete a subscriber from the system (Admin only).
     */
    Newsletters.deleteSubscriber = function (id) {
        return Requests.processRoute(NewslettersRoutes.routes.deleteSubscriber, undefined, { id: id });
    };
    /**
     * Join the distribution platform waitlist for indie developers.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/joinDistributionWaitlist
     *
     * @param data { name: string, email: string, game: string, team_size: string, revenue_goal: string }
     * @returns Promise
     */
    Newsletters.joinDistributionWaitlist = function (data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinDistributionWaitlist, data, undefined, params);
    };
    return Newsletters;
}());

var PlayTestsRoute = /** @class */ (function () {
    function PlayTestsRoute() {
    }
    PlayTestsRoute.routes = {
        index: { url: '/playtests/{title_id}', method: HTTP_METHODS.GET },
        request: { url: '/playtests/{title_id}/request', method: HTTP_METHODS.POST },
        invite: { url: '/playtests/{title_id}/invite', method: HTTP_METHODS.POST },
        submitAnswers: { url: '/playtests/{title_id}/answers/{playtest_id}', method: HTTP_METHODS.PUT },
        updateQuestions: { url: '/playtests/{title_id}/questions/{playtest_id}', method: HTTP_METHODS.PUT },
        acceptInvite: { url: '/playtests/{title_id}/accept/{playtest_id}', method: HTTP_METHODS.POST },
        rejectInvite: { url: '/playtests/{title_id}/reject/{playtest_id}', method: HTTP_METHODS.POST },
        approveRequest: { url: '/playtests/{title_id}/approve/{playtest_id}', method: HTTP_METHODS.POST },
        declineRequest: { url: '/playtests/{title_id}/decline/{playtest_id}', method: HTTP_METHODS.POST },
        cancelRequest: { url: '/playtests/{title_id}/cancel/{playtest_id}', method: HTTP_METHODS.POST },
        show: { url: '/playtests/{title_id}/view/{playtest_id}', method: HTTP_METHODS.GET },
        mine: { url: '/playtests/mine', method: HTTP_METHODS.GET },
    };
    return PlayTestsRoute;
}());

var PlayTests = /** @class */ (function () {
    function PlayTests() {
    }
    /**
     * Get a list of play tests associated with a title.
     *
     * @param title_id The ID of the title.
     * @param params Optional query parameters.
     * @returns Promise
     */
    PlayTests.list = function (title_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.index, undefined, { title_id: title_id }, params);
    };
    /**
     * User requests to test a title.
     *
     * @param title_id The ID of the title.
     * @param data Optional data for the request.
     * @returns Promise
     */
    PlayTests.requestPlayTest = function (title_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.request, data, { title_id: title_id }, params);
    };
    /**
     * Title administrator invites a user to test a title.
     *
     * @param title_id The ID of the title.
     * @param data The data containing user_id and other optional fields.
     * @returns Promise
     */
    PlayTests.invitePlayTester = function (title_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.invite, data, { title_id: title_id }, params);
    };
    /**
     * User submits or updates their answers for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The answers data.
     * @returns Promise
     */
    PlayTests.submitAnswers = function (title_id, playtest_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.submitAnswers, data, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * Title admin updates test questions for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The questions data.
     * @returns Promise
     */
    PlayTests.updateQuestions = function (title_id, playtest_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.updateQuestions, data, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * User accepts an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.acceptInvite = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.acceptInvite, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * User rejects an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.rejectInvite = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.rejectInvite, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * Title admin approves a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.approveRequest = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.approveRequest, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * Title admin declines a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.declineRequest = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.declineRequest, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * User cancels their own play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.cancelRequest = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.cancelRequest, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * Retrieve a single play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.show = function (title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.show, {}, { title_id: title_id, playtest_id: playtest_id }, params);
    };
    /**
     * Get all the play tests that are associated with the current user.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    PlayTests.mine = function (params) {
        return Requests.processRoute(PlayTestsRoute.routes.mine, {}, {}, params);
    };
    return PlayTests;
}());

var MediaRoute = /** @class */ (function () {
    function MediaRoute() {
    }
    MediaRoute.routes = {
        upload: { url: '/media', method: HTTP_METHODS.POST },
        getMedia: { url: '/media/{media_id}', method: HTTP_METHODS.GET },
        cropSteamCapsule: { url: '/media/crop-steam-capsule', method: HTTP_METHODS.POST },
        analyzeSteamCapsule: { url: '/media/analyze-steam-capsule', method: HTTP_METHODS.POST },
        removeBackground: { url: '/media/remove-background', method: HTTP_METHODS.POST },
        removeBackgroundAI: { url: '/media/remove-background-ai', method: HTTP_METHODS.POST },
        createLibraryLogo: { url: '/media/create-library-logo', method: HTTP_METHODS.POST },
        validateScreenshot: { url: '/media/validate-screenshot', method: HTTP_METHODS.POST },
        uploadTikTokMusic: { url: '/media/tiktok/music', method: HTTP_METHODS.POST },
        getPresignedUrl: { url: '/media/presigned-url', method: HTTP_METHODS.POST },
        confirmS3Upload: { url: '/media/s3-confirm', method: HTTP_METHODS.POST },
    };
    return MediaRoute;
}());

var Media = /** @class */ (function () {
    function Media() {
    }
    /**
     * Upload media content using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Media.uploadFile = function (file, data, params, onUploadProgress) {
        return Requests.uploadFile(MediaRoute.routes.upload.url, 'media', file, data, params, onUploadProgress);
    };
    /**
     * Upload media content using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     *
     * @param blob The Blob object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    Media.uploadBlob = function (blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(MediaRoute.routes.upload.url, 'media', blob, data, params, onUploadProgress);
    };
    /**
     * Get media details.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     *
     * @param id The ID of the media item.
     *
     * @returns promise
     */
    Media.get = function (media_id, params) {
        return Requests.processRoute(MediaRoute.routes.getMedia, {}, { media_id: media_id }, params);
    };
    /**
     * Crop and resize an image to Steam capsule dimensions.
     *
     * @param request The crop request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.cropSteamCapsule = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.cropSteamCapsule, request, {}, params);
    };
    /**
     * Analyze a Steam capsule image using AI.
     *
     * @param request The analysis request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.analyzeSteamCapsule = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.analyzeSteamCapsule, request, {}, params);
    };
    /**
     * Remove background from an image to create transparent PNG.
     *
     * @param request The background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.removeBackground = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.removeBackground, request, {}, params);
    };
    /**
     * Remove background from an image using AI analysis for better results.
     *
     * @param request The AI-enhanced background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.removeBackgroundAI = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.removeBackgroundAI, request, {}, params);
    };
    /**
     * Create a Steam Library Logo meeting Steam's requirements.
     *
     * @param request The library logo creation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.createLibraryLogo = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.createLibraryLogo, request, {}, params);
    };
    /**
     * Validate a screenshot against Steam's requirements.
     *
     * @param request The screenshot validation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    Media.validateScreenshot = function (request, params) {
        return Requests.processRoute(MediaRoute.routes.validateScreenshot, request, {}, params);
    };
    /**
     * Get Steam capsule dimensions for a specific type.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns The dimensions object or null if invalid type.
     */
    Media.getSteamCapsuleDimensions = function (capsuleType) {
        var dimensions = {
            'header': { width: 920, height: 430 },
            'small': { width: 462, height: 174 },
            'main': { width: 1232, height: 706 },
            'vertical': { width: 748, height: 896 },
            'library': { width: 600, height: 900 },
            'library_header': { width: 920, height: 430 },
            'library_hero': { width: 3840, height: 1240 },
            'page_background': { width: 1438, height: 810 }
        };
        return dimensions[capsuleType] || null;
    };
    /**
     * Get Steam capsule type information and requirements.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns Information about the capsule type.
     */
    Media.getSteamCapsuleInfo = function (capsuleType) {
        var info = {
            'header': {
                name: 'Header Capsule',
                purpose: 'Appears at the top of store page, in recommended sections, grid view in libraries',
                textRequirement: 'Logo must be clearly legible',
                designFocus: 'Focus on branding of your product'
            },
            'small': {
                name: 'Small Capsule',
                purpose: 'Used for all lists throughout Steam: search results, top-sellers, new releases',
                textRequirement: 'Logo should nearly fill the small capsule for readability',
                designFocus: 'Focus on making logo clearly legible at smallest size'
            },
            'main': {
                name: 'Main Capsule',
                purpose: 'Appears at top of front page in featured and recommended carousel',
                textRequirement: 'Logo should be prominent and readable',
                designFocus: 'Designed to market the product with key art and logo'
            },
            'vertical': {
                name: 'Vertical Capsule',
                purpose: 'Can appear at top of front page during seasonal sales',
                textRequirement: 'Logo should be clearly visible',
                designFocus: 'Vertical asset designed to market your game'
            },
            'library': {
                name: 'Library Capsule',
                purpose: 'Used in library overview and collection views',
                textRequirement: 'Game name/logo should be easily legible against background',
                designFocus: 'Graphically-centric to give user sense of experience'
            },
            'library_header': {
                name: 'Library Header',
                purpose: 'Appears in various places in Steam Client Library',
                textRequirement: 'Logo must be clearly legible',
                designFocus: 'Focus on branding, similar to Library Capsule'
            },
            'library_hero': {
                name: 'Library Hero',
                purpose: 'Appears at top of user\'s library details page',
                textRequirement: 'Should NOT contain any text or logos',
                designFocus: 'Visually rich, easily recognizable key art'
            },
            'page_background': {
                name: 'Page Background',
                purpose: 'Background image for store page',
                textRequirement: 'Minimal or no text',
                designFocus: 'Should be ambient, not compete with page content'
            }
        };
        return info[capsuleType] || null;
    };
    /**
     * Get Steam screenshot requirements.
     *
     * @returns Screenshot requirements object.
     */
    Media.getSteamScreenshotRequirements = function () {
        return {
            minWidth: 1920,
            minHeight: 1080,
            aspectRatio: 16 / 9,
            minCount: 5,
            format: 'Should be high-res, widescreen format',
            content: 'Should show gameplay, not menus or concept art'
        };
    };
    /**
     * Get Steam library logo requirements.
     *
     * @returns Library logo requirements object.
     */
    Media.getSteamLibraryLogoRequirements = function () {
        return {
            maxWidth: 1280,
            maxHeight: 720,
            format: 'PNG with transparent background',
            requirement: 'Either 1280px wide and/or 720px tall',
            content: 'Logo only, should be legible against any background'
        };
    };
    /**
     * Upload an audio file to TikTok's asset library via our Media controller.
     *
     * @param file The audio file (mp3).
     * @param scheduler_id The ID of the scheduler to provide OAuth context.
     */
    Media.uploadTikTokMusic = function (file, scheduler_id) {
        // We use the raw URL here as it's a specialized upload path
        return Requests.uploadFile('/media/tiktok/music', 'audio', file, { scheduler_id: scheduler_id });
    };
    /**
     * Generate an S3 Presigned URL for direct upload.
     * Use this for large files (up to 2GB) to bypass the Laravel server.
     *
     * @param filename The original name of the file.
     * @param extension The file extension (e.g., 'mp4').
     * @returns AxiosPromise containing upload_url and file_path.
     */
    Media.getPresignedUrl = function (filename, extension) {
        return Requests.processRoute(MediaRoute.routes.getPresignedUrl, { filename: filename, extension: extension });
    };
    /**
     * Confirm a successful S3 upload and create the database record.
     * Call this after the direct S3 upload is complete.
     *
     * @param data The file metadata (path, size, mime_type).
     * @returns AxiosPromise containing the created Media resource.
     */
    Media.confirmS3Upload = function (data) {
        return Requests.processRoute(MediaRoute.routes.confirmS3Upload, data);
    };
    return Media;
}());

var SchedulerRoute = /** @class */ (function () {
    function SchedulerRoute() {
    }
    SchedulerRoute.routes = {
        // Title Promotion Schedule Routes
        listSchedules: { url: '/schedulers', method: HTTP_METHODS.GET },
        createSchedule: { url: '/schedulers', method: HTTP_METHODS.POST },
        getSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.GET },
        updateSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.PUT },
        deleteSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.DELETE },
        getSchedulePosts: { url: '/schedulers/{scheduler_id}/posts', method: HTTP_METHODS.GET },
        // Title Update Routes
        listUpdates: { url: '/schedulers/{scheduler_id}/updates', method: HTTP_METHODS.GET },
        searchUpdates: { url: '/schedulers/{scheduler_id}/updates/search', method: HTTP_METHODS.GET },
        createUpdate: { url: '/schedulers/{scheduler_id}/updates', method: HTTP_METHODS.POST },
        getUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.GET },
        updateUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.PUT },
        deleteUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.DELETE },
        scheduleUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}/schedule', method: HTTP_METHODS.POST },
        testTone: { url: '/schedulers/{scheduler_id}/tone', method: HTTP_METHODS.POST },
        getSchedulerReports: { url: '/schedulers/{scheduler_id}/reports', method: HTTP_METHODS.GET },
        getSchedulerProgression: { url: '/schedulers/{scheduler_id}/progression', method: HTTP_METHODS.GET },
        // Clear OAuth Routes
        clearTwitterAuth: { url: '/schedulers/{scheduler_id}/clearTwitterAuth', method: HTTP_METHODS.DELETE },
        clearFacebookAuth: { url: '/schedulers/{scheduler_id}/clearFacebookAuth', method: HTTP_METHODS.DELETE },
        clearInstagramAuth: { url: '/schedulers/{scheduler_id}/clearInstagramAuth', method: HTTP_METHODS.DELETE },
        clearSnapchatAuth: { url: '/schedulers/{scheduler_id}/clearSnapchatAuth', method: HTTP_METHODS.DELETE },
        clearTikTokAuth: { url: '/schedulers/{scheduler_id}/clearTikTokAuth', method: HTTP_METHODS.DELETE },
        clearTwitchAuth: { url: '/schedulers/{scheduler_id}/clearTwitchAuth', method: HTTP_METHODS.DELETE },
        clearKickAuth: { url: '/schedulers/{scheduler_id}/clearKickAuth', method: HTTP_METHODS.DELETE },
        clearRedditAuth: { url: '/schedulers/{scheduler_id}/clearRedditAuth', method: HTTP_METHODS.DELETE },
        clearRedditAdsAuth: { url: '/schedulers/{scheduler_id}/clearRedditAdsAuth', method: HTTP_METHODS.DELETE },
        clearYouTubeAuth: { url: '/schedulers/{scheduler_id}/clearYouTubeAuth', method: HTTP_METHODS.DELETE },
        clearPatreonAuth: { url: '/schedulers/{scheduler_id}/clearPatreonAuth', method: HTTP_METHODS.DELETE },
        clearPinterestAuth: { url: '/schedulers/{scheduler_id}/clearPinterestAuth', method: HTTP_METHODS.DELETE },
        clearSteamAuth: { url: '/schedulers/{scheduler_id}/clearSteamAuth', method: HTTP_METHODS.DELETE },
        clearDiscordAuth: { url: '/schedulers/{scheduler_id}/clearDiscordAuth', method: HTTP_METHODS.DELETE },
        clearBlueskyAuth: { url: '/schedulers/{scheduler_id}/clearBlueskyAuth', method: HTTP_METHODS.DELETE },
        clearTiktokAdsAuth: { url: '/schedulers/{scheduler_id}/clearTiktokAdsAuth', method: HTTP_METHODS.DELETE },
        clearGoogleAdsAuth: { url: '/schedulers/{scheduler_id}/clearGoogleAdsAuth', method: HTTP_METHODS.DELETE },
        //Social Utility Routes
        getFacebookGroups: { url: '/schedulers/{scheduler_id}/facebook/groups', method: HTTP_METHODS.GET },
        getInstagramAccounts: { url: '/schedulers/{scheduler_id}/instagram/accounts', method: HTTP_METHODS.GET },
        getRedditSubreddits: { url: '/schedulers/{scheduler_id}/reddit/subreddits', method: HTTP_METHODS.GET },
        getRedditSubredditFlairs: { url: '/schedulers/{scheduler_id}/reddit/subreddits/{subreddit}/flairs', method: HTTP_METHODS.GET },
        getDiscordChannels: { url: '/schedulers/{scheduler_id}/discord/channels', method: HTTP_METHODS.GET },
        crossPromoteListRelationships: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships',
            method: HTTP_METHODS.GET
        },
        crossPromoteFind: {
            url: '/schedulers/{scheduler_id}/crosspromote/find',
            method: HTTP_METHODS.GET
        },
        crossPromoteInvitesList: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites',
            method: HTTP_METHODS.GET
        },
        crossPromoteInviteSend: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites',
            method: HTTP_METHODS.POST
        },
        crossPromoteInviteAccept: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept',
            method: HTTP_METHODS.POST
        },
        crossPromoteInviteReject: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject',
            method: HTTP_METHODS.POST
        },
        crossPromoteRelationshipDelete: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}',
            method: HTTP_METHODS.DELETE
        },
        crossPromoteRelationshipGetPlatforms: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms',
            method: HTTP_METHODS.GET
        },
        crossPromoteRelationshipSetPlatforms: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms',
            method: HTTP_METHODS.PUT
        },
        crossPromoteRelationshipPosts: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts',
            method: HTTP_METHODS.GET
        },
        getCampaignBusinesses: {
            url: "/schedulers/{scheduler_id}/businesses",
            method: HTTP_METHODS.GET,
        },
        getCampaignAdAccounts: {
            url: "/schedulers/{scheduler_id}/ad_accounts",
            method: HTTP_METHODS.GET,
        },
        getCampaignFundingInstruments: {
            url: "/schedulers/{scheduler_id}/funding_instruments",
            method: HTTP_METHODS.GET,
        },
        generateContent: {
            url: '/schedulers/{scheduler_id}/generateContent',
            method: HTTP_METHODS.POST
        },
        getRedditRecommendations: { url: '/schedulers/{scheduler_id}/reddit/recommendations', method: HTTP_METHODS.POST },
        generateRedditContent: { url: '/schedulers/{scheduler_id}/reddit/generateContent', method: HTTP_METHODS.POST },
        listDestinations: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations', method: HTTP_METHODS.GET },
        createDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations', method: HTTP_METHODS.POST },
        getDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.GET },
        updateDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.PUT },
        deleteDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.DELETE },
        getSchedulerPostsWithComments: { url: '/schedulers/{scheduler_id}/posts-with-comments', method: HTTP_METHODS.GET },
        syncAllSchedulerComments: { url: '/schedulers/{scheduler_id}/sync-all-comments', method: HTTP_METHODS.POST },
        getConversionActions: { url: '/schedulers/{scheduler_id}/conversion-actions', method: HTTP_METHODS.GET },
        syncHistory: { url: '/schedulers/{scheduler_id}/sync-history/{platform}', method: HTTP_METHODS.POST },
        generateHashtags: {
            url: '/schedulers/{scheduler_id}/generateHashtags',
            method: HTTP_METHODS.POST
        },
        getTikTokHashtags: { url: '/schedulers/{scheduler_id}/tiktok/discovery/hashtags', method: HTTP_METHODS.GET },
        getTikTokMusic: { url: '/schedulers/{scheduler_id}/tiktok/discovery/music', method: HTTP_METHODS.GET },
        getTikTokMusicList: { url: '/schedulers/{scheduler_id}/tiktok/music', method: HTTP_METHODS.GET },
        getTikTokTrendingHashtags: { url: '/schedulers/{scheduler_id}/tiktok/discovery/hashtags/trending', method: HTTP_METHODS.GET },
        getTikTokHashtagDetail: { url: '/schedulers/{scheduler_id}/tiktok/discovery/hashtags/detail', method: HTTP_METHODS.GET },
        getTikTokTrendingKeywords: { url: '/schedulers/{scheduler_id}/tiktok/discovery/search-keywords', method: HTTP_METHODS.GET },
    };
    return SchedulerRoute;
}());

var Scheduler = /** @class */ (function () {
    function Scheduler() {
    }
    /**
     * List promotion schedules.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedules
     *
     * @returns promise
     */
    Scheduler.listSchedules = function (params) {
        return Requests.processRoute(SchedulerRoute.routes.listSchedules, {}, {}, params);
    };
    /**
     * Create a new promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitlePromotionSchedule
     *
     * @param data The data for the new schedule.
     *
     * @returns promise
     */
    Scheduler.createSchedule = function (data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createSchedule, data, {}, params);
    };
    /**
     * Get a specific promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    Scheduler.getSchedule = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedule, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Update a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     *
     * @returns promise
     */
    Scheduler.updateSchedule = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateSchedule, data, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Delete a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    Scheduler.deleteSchedule = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteSchedule, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Test the tone of the scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     *
     * @returns promise
     */
    Scheduler.testTone = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.testTone, data, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get social media posts related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getPromotionScheduleSocialPosts
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    Scheduler.getSchedulePosts = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulePosts, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
         * Rewrite / generate content for a promotion schedule.
         *
         * @see https://api.glitch.fun/api/documentation#/Scheduler/generateTitleContent
         *
         * @param scheduler_id UUID of the promotion schedule.
         * @param data         Body payload. At minimum you must supply
         *                     `{ platform: 'twitter' }` plus either `content`
         *                     **or** a `media` array containing at least one
         *                     `{ id: '<media-uuid>' }`.
         * @returns Axios promise with `{ content, title? }`
         */
    Scheduler.generateTitleContent = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateContent, data, // request body
        { scheduler_id: scheduler_id }, // path params
        params // query params
        );
    };
    /**
     * List title updates for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    Scheduler.listUpdates = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listUpdates, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Search the updates related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/searchTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    Scheduler.searchUpdates = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listUpdates, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Create a new title update for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data for the new update.
     *
     * @returns promise
     */
    Scheduler.createUpdate = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createUpdate, data, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get a specific title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     *
     * @returns promise
     */
    Scheduler.getUpdate = function (scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getUpdate, {}, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Update a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Scheduler.updateUpdate = function (scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateUpdate, data, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Delete a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     *
     * @returns promise
     */
    Scheduler.deleteUpdate = function (scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteUpdate, {}, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Schedule title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     *
     * @returns promise
     */
    Scheduler.scheduleUpdate = function (scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.scheduleUpdate, data, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Clear Twitter OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearTwitterAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitterAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Facebook OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearFacebookAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearFacebookAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Instagram OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearInstagramAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearInstagramAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Snapchat OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearSnapchatAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearSnapchatAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear TikTok OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearTikTokAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTikTokAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Twitch OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearTwitchAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitchAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Kick OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearKickAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearKickAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Reddit OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearRedditAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Reddit Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearRedditAdsAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAdsAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear YouTube OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearYouTubeAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearYouTubeAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Patreon OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearPatreonAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearPatreonAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Pinterest OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearPinterestAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearPinterestAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Steam OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearSteamAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearSteamAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Discord OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearDiscordAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearDiscordAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Bluesky OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearBlueskyAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearBlueskyAuth, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
    * Get Facebook groups associated with the scheduler's Facebook account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    Scheduler.getFacebookGroups = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getFacebookGroups, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get Instagram accounts associated with the scheduler's Instagram account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.getInstagramAccounts = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getInstagramAccounts, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get Reddit subreddits associated with the scheduler's Reddit account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.getRedditSubreddits = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubreddits, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get flairs for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    Scheduler.getRedditSubredditFlairs = function (scheduler_id, subreddit, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditFlairs, {}, { scheduler_id: scheduler_id, subreddit: subreddit }, params);
    };
    /**
    * Get Discord channels associated with the scheduler's Discord account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    Scheduler.getDiscordChannels = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getDiscordChannels, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Clear Google Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearGoogleAdsAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearGoogleAdsAuth, {}, // no body
        { scheduler_id: scheduler_id }, // path params
        params // optional query params
        );
    };
    /**
     * Clear Tiktok Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    Scheduler.clearTiktokAdsAuth = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTiktokAdsAuth, {}, // no body
        { scheduler_id: scheduler_id }, // path params
        params // optional query params
        );
    };
    /**
     * Get aggregated reports for a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    Scheduler.getSchedulerReports = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerReports, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get progression data for social media posts over time.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    Scheduler.getSchedulerProgression = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerProgression, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
      * List cross-promote relationships for a scheduler (with optional pagination).
      * GET /schedulers/{scheduler_id}/crosspromote/relationships
      */
    Scheduler.crossPromoteListRelationships = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteListRelationships, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Find potential cross-promote partners for a scheduler (with optional filters).
     * GET /schedulers/{scheduler_id}/crosspromote/find
     */
    Scheduler.crossPromoteFind = function (scheduler_id, params) {
        // e.g. { platform:'twitter', min_followers:500, sort:'desc', page:2, limit:5 }
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteFind, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * List cross-promote invites for a scheduler (incoming + outgoing).
     * GET /schedulers/{scheduler_id}/crosspromote/invites
     */
    Scheduler.crossPromoteInvitesList = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInvitesList, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Send an invite to cross-promote (from scheduler_id to partner_scheduler_id).
     * POST /schedulers/{scheduler_id}/crosspromote/invites
     *
     * @param data { partner_scheduler_id, optional_message }
     */
    Scheduler.crossPromoteInviteSend = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteSend, data, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Accept an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept
     */
    Scheduler.crossPromoteInviteAccept = function (scheduler_id, invite_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteAccept, {}, { scheduler_id: scheduler_id, invite_id: invite_id }, params);
    };
    /**
     * Reject an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject
     */
    Scheduler.crossPromoteInviteReject = function (scheduler_id, invite_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteReject, {}, { scheduler_id: scheduler_id, invite_id: invite_id }, params);
    };
    /**
     * End a cross-promote relationship (delete).
     * DELETE /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}
     */
    Scheduler.crossPromoteRelationshipDelete = function (scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipDelete, {}, { scheduler_id: scheduler_id, relationship_id: relationship_id }, params);
    };
    /**
     * Get which platforms are cross-promoted in an existing relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     */
    Scheduler.crossPromoteRelationshipGetPlatforms = function (scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipGetPlatforms, {}, { scheduler_id: scheduler_id, relationship_id: relationship_id }, params);
    };
    /**
     * Set which platforms are cross-promoted in an existing relationship.
     * PUT /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     * data = { platforms: ['twitter','facebook',...]}
     */
    Scheduler.crossPromoteRelationshipSetPlatforms = function (scheduler_id, relationship_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipSetPlatforms, data, { scheduler_id: scheduler_id, relationship_id: relationship_id }, params);
    };
    /**
     * Get recently cross-promoted logs under a relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts
     */
    Scheduler.crossPromoteRelationshipPosts = function (scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipPosts, {}, { scheduler_id: scheduler_id, relationship_id: relationship_id }, params);
    };
    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/businesses on the backend.
     *
     * Typically relevant for Reddit (list businesses), or might return a
     * "not supported" message for Meta/TikTok.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    Scheduler.listCampaignBusinesses = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignBusinesses, undefined, // no request body
        { scheduler_id: scheduler_id }, // path params
        params // query params
        );
    };
    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/ad_accounts on the backend.
     *
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    Scheduler.listCampaignAdAccounts = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignAdAccounts, undefined, { scheduler_id: scheduler_id }, params);
    };
    /**
     * List funding instruments for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/funding_instruments on the backend.
     *
     * For Twitter, pass ?account_id=...
     * For Reddit, pass ?ad_account_id=... or ?business_id=...
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    Scheduler.listCampaignFundingInstruments = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignFundingInstruments, undefined, { scheduler_id: scheduler_id }, params);
    };
    /**
     * List all destinations for a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/listTitleUpdateDestinations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @returns promise
     */
    Scheduler.listDestinations = function (scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listDestinations, {}, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Create a new destination for a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data for the new destination.
     * @returns promise
     */
    Scheduler.createDestination = function (scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createDestination, data, { scheduler_id: scheduler_id, update_id: update_id }, params);
    };
    /**
     * Get a specific title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    Scheduler.getDestination = function (scheduler_id, update_id, destination_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getDestination, {}, { scheduler_id: scheduler_id, update_id: update_id, destination_id: destination_id }, params);
    };
    /**
     * Update a title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @param data The data to update.
     * @returns promise
     */
    Scheduler.updateDestination = function (scheduler_id, update_id, destination_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateDestination, data, { scheduler_id: scheduler_id, update_id: update_id, destination_id: destination_id }, params);
    };
    /**
     * Delete a title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    Scheduler.deleteDestination = function (scheduler_id, update_id, destination_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteDestination, {}, { scheduler_id: scheduler_id, update_id: update_id, destination_id: destination_id }, params);
    };
    /**
     * Get AI-powered subreddit recommendations for a scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerRedditRecommendations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The context for the post (title, content, media type).
     * @returns promise
     */
    Scheduler.getRedditRecommendations = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditRecommendations, data, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Generate tailored content for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/generateRedditContentForSubreddit
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and post context.
     * @returns promise
     */
    Scheduler.generateRedditContent = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateRedditContent, data, { scheduler_id: scheduler_id }, params);
    };
    /**
    * Get all posts and comments for a scheduler.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param params Optional query parameters for filtering and sorting.
    * @returns promise
    */
    Scheduler.getSchedulerPostsWithComments = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerPostsWithComments, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Sync all comments for all posts in a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Optional query parameters (e.g., limit_per_post).
     * @returns promise
     */
    Scheduler.syncAllSchedulerComments = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.syncAllSchedulerComments, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
    * Get ad conversion actions for a specific platform linked to the scheduler.
    *
    * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerConversionActions
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param params Query parameters, including 'platform' (required) and 'account_id' (optional).
    *
    * @returns promise
    */
    Scheduler.getConversionActions = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getConversionActions, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Trigger a historical sync for a specific platform on a scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/syncHistory
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     *
     * @returns promise
     */
    Scheduler.syncHistory = function (scheduler_id, platform, params) {
        return Requests.processRoute(SchedulerRoute.routes.syncHistory, {}, { scheduler_id: scheduler_id, platform: platform }, params);
    };
    /**
     * Generate hashtags for content based on scheduler settings.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data { content: string, platform?: string }
     *
     * @returns promise
     */
    Scheduler.generateHashtags = function (scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateHashtags, data, { scheduler_id: scheduler_id }, params);
    };
    /**
 * Get TikTok hashtag suggestions based on a keyword.
 *
 * @param scheduler_id The ID of the promotion schedule.
 * @param params { keyword: string }
 */
    Scheduler.getTikTokHashtags = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokHashtags, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get trending commercial music from TikTok's library.
     *
     * @param scheduler_id The ID of the promotion schedule.
     */
    Scheduler.getTikTokMusic = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokMusic, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
 * Get TikTok Music List with advanced filtering (Keyword, Recommendations, Liked).
 * @param params { music_scene: 'CREATIVE_ASSET'|'CAROUSEL_ADS', search_type: string, filtering: object }
 */
    Scheduler.getTikTokMusicList = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokMusicList, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get the top 200 trending hashtags on TikTok.
     * @param params { country_code: string, category_name: string, date_range: string }
     */
    Scheduler.getTikTokTrendingHashtags = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokTrendingHashtags, {}, { scheduler_id: scheduler_id }, params);
    };
    /**
     * Get trending search keywords on TikTok.
     * @param params { is_personalized: boolean }
     */
    Scheduler.getTikTokTrendingKeywords = function (scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokTrendingKeywords, {}, { scheduler_id: scheduler_id }, params);
    };
    return Scheduler;
}());

// src/routes/FunnelRoutes.tsx
var FunnelRoutes = /** @class */ (function () {
    function FunnelRoutes() {
    }
    FunnelRoutes.routes = {
        index: { url: '/funnels', method: HTTP_METHODS.GET },
        funnel: { url: '/funnels/funnel', method: HTTP_METHODS.GET },
        metrics: { url: '/funnels/metrics', method: HTTP_METHODS.GET },
        stages: { url: '/funnels/stages', method: HTTP_METHODS.GET },
        daily: { url: '/funnels/daily', method: HTTP_METHODS.GET },
        monthly: { url: '/funnels/monthly', method: HTTP_METHODS.GET },
        yearly: { url: '/funnels/yearly', method: HTTP_METHODS.GET },
        gamify: { url: '/funnels/gamify', method: HTTP_METHODS.GET },
        diagnostic: { url: '/funnels/diagnostic', method: HTTP_METHODS.GET },
    };
    return FunnelRoutes;
}());

// src/controllers/Funnel.tsx
var Funnel = /** @class */ (function () {
    function Funnel() {
    }
    /**
     * Get funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel metrics data
     */
    Funnel.index = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.index, undefined, undefined, params);
    };
    /**
     * Get funnel-optimized metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_funnel
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel data optimized for visual funnels
     */
    Funnel.funnel = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.funnel, undefined, undefined, params);
    };
    /**
     * Get available metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_metrics
     *
     * @returns Promise with list of available metrics
     */
    Funnel.metrics = function () {
        return Requests.processRoute(FunnelRoutes.routes.metrics);
    };
    /**
     * Get available stages.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_stages
     *
     * @returns Promise with list of available stages
     */
    Funnel.stages = function () {
        return Requests.processRoute(FunnelRoutes.routes.stages);
    };
    /**
     * Get daily funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_daily
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with daily funnel metrics data
     */
    Funnel.daily = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.daily, undefined, undefined, params);
    };
    /**
     * Get monthly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_monthly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with monthly funnel metrics data
     */
    Funnel.monthly = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.monthly, undefined, undefined, params);
    };
    /**
     * Get yearly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_yearly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with yearly funnel metrics data
     */
    Funnel.yearly = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.yearly, undefined, undefined, params);
    };
    /**
     * Get gamified funnel metrics with recommended targets, scores, and ranks.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_gamify
     *
     * @param params Query parameters (title_id, community_id, start_date, end_date)
     * @returns Promise with the gamified funnel data
     */
    Funnel.gamify = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.gamify, undefined, undefined, params);
    };
    /**
    * Get comprehensive funnel diagnostic report.
    *
    * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_diagnostic
    *
    * @param params Query parameters:
    *  - title_id (string): Required
    *  - start_date (string): Required (YYYY-MM-DD)
    *  - end_date (string): Required (YYYY-MM-DD)
    *  - group_by (string): Optional ('none', 'platform', 'utm_source')
    *
    * @returns Promise with diagnostic data including conversion rates, costs, and health indicators
    */
    Funnel.diagnostic = function (params) {
        return Requests.processRoute(FunnelRoutes.routes.diagnostic, undefined, undefined, params);
    };
    return Funnel;
}());

var SocialStatsRoute = /** @class */ (function () {
    function SocialStatsRoute() {
    }
    SocialStatsRoute.routes = {
        /**
         * Retrieve a list of social statistics with optional filters.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics
         */
        getStats: { url: '/socialstats', method: HTTP_METHODS.GET },
        /**
         * Retrieve platform-level statistics (e.g., average followers).
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
         */
        getPlatformStatistics: { url: '/socialstats/statistics', method: HTTP_METHODS.GET },
        /**
         * Generate reports with various insights based on report_type and filters.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/reports
         */
        getReports: { url: '/socialstats/reports', method: HTTP_METHODS.GET },
        /**
         * Retrieve a single social media account statistic record by its ID.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
         */
        getStatById: { url: '/socialstats/{id}', method: HTTP_METHODS.GET },
    };
    return SocialStatsRoute;
}());

// src/api/SocialStats.ts
var SocialStats = /** @class */ (function () {
    function SocialStats() {
    }
    /**
     * List all the social media account statistics, with optional filters.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics
     *
     * @param params Optional query parameters:
     *  - platform (string | string[]): Filter by platform(s)
     *  - start_date (string): Filter records created on or after this date (YYYY-MM-DD)
     *  - end_date (string): Filter records created on or before this date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by TitlePromotionSchedule ID
     * @returns promise
     */
    SocialStats.list = function (params) {
        return Requests.processRoute(SocialStatsRoute.routes.getStats, undefined, undefined, params);
    };
    /**
     * Get platform-level statistics, such as average follower count per platform.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
     *
     * @returns promise
     */
    SocialStats.platformStatistics = function (params) {
        return Requests.processRoute(SocialStatsRoute.routes.getPlatformStatistics, undefined, undefined, params);
    };
    /**
     * Generate various reports for social media account statistics.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/reports
     *
     * @param params Query parameters:
     *  - report_type (string): Required (e.g. average_followers, growth, platform_breakdown)
     *  - platform (string or string[]): Filter by platform(s)
     *  - start_date (string): Filter from date (YYYY-MM-DD)
     *  - end_date (string): Filter to date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by schedule ID
     *
     * @returns promise
     */
    SocialStats.reports = function (params) {
        return Requests.processRoute(SocialStatsRoute.routes.getReports, undefined, undefined, params);
    };
    /**
     * Retrieve a single social media account statistic record by its ID.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
     *
     * @param id The ID of the statistic record.
     * @returns promise
     */
    SocialStats.view = function (id, params) {
        return Requests.processRoute(SocialStatsRoute.routes.getStatById, {}, { id: id }, params);
    };
    return SocialStats;
}());

var HashtagRoute = /** @class */ (function () {
    function HashtagRoute() {
    }
    HashtagRoute.routes = {
        list: { url: '/hashtags', method: HTTP_METHODS.GET },
        top: { url: '/hashtags/top', method: HTTP_METHODS.GET },
    };
    return HashtagRoute;
}());

var Hashtags = /** @class */ (function () {
    function Hashtags() {
    }
    /**
     * List all the hashtags
     *
     *
     * @returns A promise
     */
    Hashtags.list = function (params) {
        return Requests.processRoute(HashtagRoute.routes.list, {}, {}, params);
    };
    /**
     * Get the top hashtags for a title, campaign, or schedule.
     *
     * @param params - e.g. { title_id: '...', limit: 10, sort: 'sum_views', start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     * @returns AxiosPromise of an array of aggregated hashtags
     */
    Hashtags.top = function (params) {
        return Requests.processRoute(HashtagRoute.routes.top, {}, {}, params);
    };
    return Hashtags;
}());

var WebsiteAnalyticsRoute = /** @class */ (function () {
    function WebsiteAnalyticsRoute() {
    }
    WebsiteAnalyticsRoute.routes = {
        listSessions: {
            url: '/analytics/sessions',
            method: HTTP_METHODS.GET
        },
        listPageviews: {
            url: '/analytics/pageviews',
            method: HTTP_METHODS.GET
        },
        listEvents: {
            url: '/analytics/events',
            method: HTTP_METHODS.GET
        },
        overview: {
            url: '/analytics/overview',
            method: HTTP_METHODS.GET
        },
        collect: {
            url: '/analytics/collect',
            method: HTTP_METHODS.POST
        },
        sessionsAverage: {
            url: '/analytics/sessions/average',
            method: HTTP_METHODS.GET
        },
        sessionsHistogram: {
            url: '/analytics/sessions/histogram',
            method: HTTP_METHODS.GET
        },
        pageviewsOverTime: {
            url: '/analytics/pageviews/over-time',
            method: HTTP_METHODS.GET
        },
        topPages: {
            url: '/analytics/pageviews/top-pages',
            method: HTTP_METHODS.GET
        },
        eventsSummary: {
            url: '/analytics/events/summary',
            method: HTTP_METHODS.GET
        },
        popularEvents: {
            url: '/analytics/events/popular',
            method: HTTP_METHODS.GET
        },
        geoDistribution: {
            url: '/analytics/geo-distribution',
            method: HTTP_METHODS.GET
        },
        deviceBreakdown: {
            url: '/analytics/device-breakdown',
            method: HTTP_METHODS.GET
        },
        referrers: {
            url: '/analytics/referrers',
            method: HTTP_METHODS.GET
        },
        utmPerformance: {
            url: '/analytics/utm-performance',
            method: HTTP_METHODS.GET
        },
        journey: {
            url: '/analytics/journey',
            method: HTTP_METHODS.GET
        }
    };
    return WebsiteAnalyticsRoute;
}());

var WebsiteAnalytics = /** @class */ (function () {
    function WebsiteAnalytics() {
    }
    /**
     * List website analytics sessions with comprehensive filtering
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - device_type?: 'desktop'|'mobile'|'tablet'|'bot'|'other'
     *   - country_code?: string - 2-letter country code
     *   - is_bot?: boolean - Filter by bot status
     *   - sort?: 'started_at'|'total_duration'|'pageview_count' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated sessions data
     */
    WebsiteAnalytics.listSessions = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listSessions, {}, undefined, params);
    };
    /**
     * Get a paginated list of pageviews with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - analytics_session_id?: string - Filter by session ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - is_exit?: boolean - Filter by exit pageviews
     *   - sort?: 'occurred_at'|'load_time_ms'|'dom_complete_ms' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated pageviews data
     */
    WebsiteAnalytics.listPageviews = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listPageviews, {}, undefined, params);
    };
    /**
     * Get a paginated list of events with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - analytics_session_id?: string - Filter by session ID
     *   - event_name?: string - Filter by event name
     *   - event_category?: string - Filter by event category
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - sort?: 'occurred_at'|'event_name' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated events data
     */
    WebsiteAnalytics.listEvents = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listEvents, {}, undefined, params);
    };
    /**
     * Get an analytics overview with summarized metrics
     *
     * @param params Overview options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
     *   - include_breakdowns?: boolean - Include detailed breakdowns
     * @returns Promise with overview data
     */
    WebsiteAnalytics.overview = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.overview, {}, undefined, params);
    };
    /**
     * Single ingestion endpoint for sessions, pageviews and events
     *
     * @param data Analytics data payload with type property:
     *   - type: 'session'|'pageview'|'event' - Type of analytics data
     *   - title_id: string - Title ID
     *   - tracking_token: string - HMAC token for verification
     *   - plus type-specific fields
     * @returns Promise with acceptance response
     */
    WebsiteAnalytics.collect = function (data) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.collect, data);
    };
    /**
     * Get average session length data with optional grouping
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'day'|'week'|'month' - Grouping period
     *   - device_type?: string - Filter by device type
     *   - country_code?: string - Filter by country
     * @returns Promise with average session data
     */
    WebsiteAnalytics.sessionsAverage = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.sessionsAverage, {}, undefined, params);
    };
    /**
     * Get session duration histogram data
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - bucket_size?: number - Duration bucket size in seconds
     * @returns Promise with histogram data
     */
    WebsiteAnalytics.sessionsHistogram = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.sessionsHistogram, {}, undefined, params);
    };
    /**
     * Get pageviews over time with optional grouping
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'hour'|'day'|'week'|'month' - Grouping period
     *   - path?: string - Filter by specific path
     * @returns Promise with pageviews over time data
     */
    WebsiteAnalytics.pageviewsOverTime = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.pageviewsOverTime, {}, undefined, params);
    };
    /**
     * Get top pages by views
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of top pages to return
     * @returns Promise with top pages data
     */
    WebsiteAnalytics.topPages = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.topPages, {}, undefined, params);
    };
    /**
     * Get summary of events
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - event_category?: string - Filter by event category
     * @returns Promise with events summary data
     */
    WebsiteAnalytics.eventsSummary = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.eventsSummary, {}, undefined, params);
    };
    /**
     * Get most popular events
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of events to return
     * @returns Promise with popular events data
     */
    WebsiteAnalytics.popularEvents = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.popularEvents, {}, undefined, params);
    };
    /**
     * Get geographic distribution of visitors
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of countries to return
     * @returns Promise with geo distribution data
     */
    WebsiteAnalytics.geoDistribution = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.geoDistribution, {}, undefined, params);
    };
    /**
     * Get device type breakdown
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     * @returns Promise with device breakdown data
     */
    WebsiteAnalytics.deviceBreakdown = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.deviceBreakdown, {}, undefined, params);
    };
    /**
     * Get top referrers
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of referrers to return
     * @returns Promise with referrers data
     */
    WebsiteAnalytics.referrers = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.referrers, {}, undefined, params);
    };
    /**
     * Get UTM campaign performance
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'source'|'medium'|'campaign' - Grouping field
     * @returns Promise with UTM performance data
     */
    WebsiteAnalytics.utmPerformance = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.utmPerformance, {}, undefined, params);
    };
    /**
     * Get a combined user journey across short link clicks, web sessions, game installations, etc.
     *
     * @param params Filtering options. All are optional except `title_id`.
     *   - title_id: string                   Required. The UUID of the title to unify user events.
     *   - device_id?: string                Filter by device ID
     *   - session_id?: string               Filter by session ID
     *   - short_link_click_id?: string      Filter by short link click ID
     *   - user_install_id?: string          Filter by game install user_install_id
     *   - browser_fingerprint?: string      Filter by browser fingerprint hash
     *   - hardware_fingerprint?: string     Filter by hardware fingerprint hash
     *   - start_date?: string               Optional. Start date (YYYY-MM-DD) if your API supports time limiting
     *   - end_date?: string                 Optional. End date (YYYY-MM-DD) if your API supports time limiting
     *
     * @returns Promise with a unified timeline of the user’s journey, in chronological order.
     */
    WebsiteAnalytics.userJourney = function (params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.journey, // references our new route definition  
        {}, // no body data (GET request)  
        undefined, params);
    };
    return WebsiteAnalytics;
}());

var ShortLinksRoute = /** @class */ (function () {
    function ShortLinksRoute() {
    }
    ShortLinksRoute.routes = {
        listShortLinks: { url: '/shortlinks', method: HTTP_METHODS.GET },
        createShortLink: { url: '/shortlinks', method: HTTP_METHODS.POST },
        viewShortLink: { url: '/shortlinks/{id}', method: HTTP_METHODS.GET },
        updateShortLink: { url: '/shortlinks/{id}', method: HTTP_METHODS.PUT },
        // Delete can be added if supported
        // deleteShortLink:   { url: '/shortlinks/{id}', method: HTTP_METHODS.DELETE }
        clickSummary: { url: '/shortlinks/reports/click-summary', method: HTTP_METHODS.GET },
        geoDeviceBreakdown: { url: '/shortlinks/reports/geo-device', method: HTTP_METHODS.GET },
        timeSeries: { url: '/shortlinks/reports/time-series', method: HTTP_METHODS.GET },
        referrerReport: { url: '/shortlinks/reports/referrer', method: HTTP_METHODS.GET },
        campaignPerformance: { url: '/shortlinks/reports/campaign-performance', method: HTTP_METHODS.GET },
        influencerPerformance: { url: '/shortlinks/reports/influencer-performance', method: HTTP_METHODS.GET },
        socialPostPerformance: { url: '/shortlinks/reports/social-post-performance', method: HTTP_METHODS.GET },
        conversionFunnel: { url: '/shortlinks/reports/conversion-funnel', method: HTTP_METHODS.GET },
        clickHeatmap: { url: '/shortlinks/reports/click-heatmap', method: HTTP_METHODS.GET },
        botAnalysis: { url: '/shortlinks/reports/bot-analysis', method: HTTP_METHODS.GET },
        attributionReport: { url: '/shortlinks/reports/attribution', method: HTTP_METHODS.GET },
        getLinkSummary: { url: '/socialposts/{post_id}/link-summary', method: HTTP_METHODS.GET },
        // Social Media Post Reports
        socialPostDeepDive: { url: '/shortlinks/reports/social-post-deep-dive', method: HTTP_METHODS.GET },
        socialPostContentAnalysis: { url: '/shortlinks/reports/social-post-content-analysis', method: HTTP_METHODS.GET },
        socialPostEngagementBreakdown: { url: '/shortlinks/reports/social-post-engagement-breakdown', method: HTTP_METHODS.GET },
        socialPostTrackingEffectiveness: { url: '/shortlinks/reports/social-post-tracking-effectiveness', method: HTTP_METHODS.GET },
    };
    return ShortLinksRoute;
}());

var ShortLinks = /** @class */ (function () {
    function ShortLinks() {
    }
    /**
     * List all short links with optional filters
     */
    ShortLinks.list = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.listShortLinks, undefined, undefined, params);
    };
    /**
     * Create a new short link
     */
    ShortLinks.create = function (data, params) {
        return Requests.processRoute(ShortLinksRoute.routes.createShortLink, data, {}, params);
    };
    /**
     * Get a specific short link by ID
     */
    ShortLinks.view = function (id, params) {
        return Requests.processRoute(ShortLinksRoute.routes.viewShortLink, {}, { id: id }, params);
    };
    /**
     * Update a short link
     */
    ShortLinks.update = function (id, data, params) {
        return Requests.processRoute(ShortLinksRoute.routes.updateShortLink, data, { id: id }, params);
    };
    // Uncomment when delete is supported
    // public static delete<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    //   return Requests.processRoute(ShortLinksRoute.routes.deleteShortLink, {}, { id }, params);
    // }
    /**
    * Get click-summary report
    *  - Example usage: ShortLinks.clickSummary({ short_link_id: 'uuid-here' })
    */
    ShortLinks.clickSummary = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.clickSummary, undefined, undefined, params);
    };
    /**
     * Get geo & device breakdown report
     *  - Example usage: ShortLinks.geoDeviceBreakdown({ short_link_id: 'uuid-here' })
     */
    ShortLinks.geoDeviceBreakdown = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.geoDeviceBreakdown, undefined, undefined, params);
    };
    /**
     * Get time-series report
     *  - Example usage: ShortLinks.timeSeries({ short_link_id: 'uuid-here', group_by: 'day' })
     */
    ShortLinks.timeSeries = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.timeSeries, undefined, undefined, params);
    };
    /**
     * Get referrer & UTM report
     *  - Example usage: ShortLinks.referrerReport({ short_link_id: 'uuid-here' })
     */
    ShortLinks.referrerReport = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.referrerReport, undefined, undefined, params);
    };
    ShortLinks.campaignPerformance = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.campaignPerformance, undefined, undefined, params);
    };
    ShortLinks.influencerPerformance = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.influencerPerformance, undefined, undefined, params);
    };
    ShortLinks.socialPostPerformance = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostPerformance, undefined, undefined, params);
    };
    ShortLinks.conversionFunnel = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.conversionFunnel, undefined, undefined, params);
    };
    ShortLinks.clickHeatmap = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.clickHeatmap, undefined, undefined, params);
    };
    ShortLinks.botAnalysis = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.botAnalysis, undefined, undefined, params);
    };
    ShortLinks.attributionReport = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.attributionReport, undefined, undefined, params);
    };
    ShortLinks.socialPostDeepDive = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostDeepDive, undefined, undefined, params);
    };
    ShortLinks.socialPostContentAnalysis = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostContentAnalysis, undefined, undefined, params);
    };
    ShortLinks.socialPostEngagementBreakdown = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostEngagementBreakdown, undefined, undefined, params);
    };
    ShortLinks.socialPostTrackingEffectiveness = function (params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostTrackingEffectiveness, undefined, undefined, params);
    };
    return ShortLinks;
}());

var AIUsageRoute = /** @class */ (function () {
    function AIUsageRoute() {
    }
    AIUsageRoute.routes = {
        listUsage: { url: '/billing/ai-usage', method: HTTP_METHODS.GET },
        summaryUsage: { url: '/billing/ai-usage/summary', method: HTTP_METHODS.GET }
    };
    return AIUsageRoute;
}());

var AIUsage = /** @class */ (function () {
    function AIUsage() {
    }
    /**
     * List all AI usage entries with optional filters (date range, service, model, etc.).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsage
     *
     * @param params Query parameters for filtering and grouping
     * @returns AxiosPromise
     */
    AIUsage.list = function (params) {
        return Requests.processRoute(AIUsageRoute.routes.listUsage, undefined, undefined, params);
    };
    /**
     * Get summarized AI usage statistics (token totals, cost, grouped by service/model).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsageSummary
     *
     * @param params Query parameters for filtering by date range
     * @returns AxiosPromise
     */
    AIUsage.summary = function (params) {
        return Requests.processRoute(AIUsageRoute.routes.summaryUsage, undefined, undefined, params);
    };
    return AIUsage;
}());

var MarketingAgenciesRoute = /** @class */ (function () {
    function MarketingAgenciesRoute() {
    }
    MarketingAgenciesRoute.routes = {
        // CRUD for agencies
        list: { url: '/marketing-agencies', method: HTTP_METHODS.GET },
        create: { url: '/marketing-agencies', method: HTTP_METHODS.POST },
        view: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.GET },
        update: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.PUT },
        delete: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.DELETE },
        // Administrator management
        addAdministrator: { url: '/marketing-agencies/{id}/administrators', method: HTTP_METHODS.POST },
        removeAdministrator: { url: '/marketing-agencies/{id}/administrators/{user_id}', method: HTTP_METHODS.DELETE },
        // Logo management
        setLogo: { url: '/marketing-agencies/{id}/logo', method: HTTP_METHODS.POST },
        // Case Study management
        addCaseStudy: { url: '/marketing-agencies/{id}/case-studies', method: HTTP_METHODS.POST },
        removeCaseStudy: { url: '/marketing-agencies/{id}/case-studies/{media_id}', method: HTTP_METHODS.DELETE },
        updateCaseStudyOrder: { url: '/marketing-agencies/{id}/case-studies/order', method: HTTP_METHODS.POST },
        // Invitation management
        invite: { url: '/marketing-agencies/{id}/invites', method: HTTP_METHODS.POST },
        listInvites: { url: '/marketing-agencies/{id}/invites', method: HTTP_METHODS.GET },
        revokeInvite: { url: '/marketing-agencies/{id}/invites/{invite_id}', method: HTTP_METHODS.DELETE },
        getInviteDetails: { url: '/marketing-agencies/invites/details', method: HTTP_METHODS.GET },
        acceptInvite: { url: '/marketing-agencies/invites/accept', method: HTTP_METHODS.POST },
    };
    return MarketingAgenciesRoute;
}());

var MarketingAgencies = /** @class */ (function () {
    function MarketingAgencies() {
    }
    /**
     * List all marketing agencies.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies
     *
     * @param params Optional query parameters (e.g., is_admin, sort_by, sort_order, page, per_page).
     * @returns promise
     */
    MarketingAgencies.list = function (params) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies
     *
     * @param data The data for the new agency.
     * @returns Promise
     */
    MarketingAgencies.create = function (data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.create, data);
    };
    /**
     * Retrieve a single marketing agency by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id
     *
     * @param id The UUID of the agency to retrieve.
     * @returns promise
     */
    MarketingAgencies.view = function (id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.view, {}, { id: id });
    };
    /**
     * Update a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/putMarketing-agencies-id
     *
     * @param id The UUID of the agency to update.
     * @param data The data to update.
     * @returns promise
     */
    MarketingAgencies.update = function (id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.update, data, { id: id });
    };
    /**
     * Deletes a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id
     *
     * @param id The UUID of the agency to delete.
     * @returns promise
     */
    MarketingAgencies.delete = function (id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.delete, {}, { id: id });
    };
    /**
     * Add a user as an administrator to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-administrators
     *
     * @param id The UUID of the agency.
     * @param data The data containing the user_id to add.
     * @returns Promise
     */
    MarketingAgencies.addAdministrator = function (id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addAdministrator, data, { id: id });
    };
    /**
     * Remove a user as an administrator from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-administrators-user_id
     *
     * @param id The UUID of the agency.
     * @param user_id The UUID of the user to remove.
     * @returns Promise
     */
    MarketingAgencies.removeAdministrator = function (id, user_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeAdministrator, {}, { id: id, user_id: user_id });
    };
    /**
     * Set the logo for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-logo
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id for the logo.
     * @returns Promise
     */
    MarketingAgencies.setLogo = function (id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.setLogo, data, { id: id });
    };
    /**
     * Add a case study to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id and optional order.
     * @returns Promise
     */
    MarketingAgencies.addCaseStudy = function (id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addCaseStudy, data, { id: id });
    };
    /**
     * Remove a case study from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-case-studies-media_id
     *
     * @param id The UUID of the agency.
     * @param media_id The UUID of the media to remove.
     * @returns Promise
     */
    MarketingAgencies.removeCaseStudy = function (id, media_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeCaseStudy, {}, { id: id, media_id: media_id });
    };
    /**
     * Update the order of case studies for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies-order
     *
     * @param id The UUID of the agency.
     * @param order_data An array of objects with media_id and new order.
     * @returns Promise
     */
    MarketingAgencies.updateCaseStudyOrder = function (id, order_data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.updateCaseStudyOrder, { order_data: order_data }, { id: id });
    };
    /**
     * Invite a user to become an administrator of an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @param data The data containing the email of the user to invite.
     * @returns Promise
     */
    MarketingAgencies.invite = function (id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.invite, data, { id: id });
    };
    /**
     * List all pending invitations for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @returns Promise
     */
    MarketingAgencies.listInvites = function (id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.listInvites, {}, { id: id });
    };
    /**
     * Revoke a pending invitation.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-invites-invite_id
     *
     * @param id The UUID of the agency.
     * @param invite_id The UUID of the invitation to revoke.
     * @returns Promise
     */
    MarketingAgencies.revokeInvite = function (id, invite_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.revokeInvite, {}, { id: id, invite_id: invite_id });
    };
    /**
     * Get the details of a pending invitation using its token.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-invites-details
     *
     * @param params An object containing the token.
     * @returns Promise
     */
    MarketingAgencies.getInviteDetails = function (params) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.getInviteDetails, undefined, undefined, params);
    };
    /**
     * Accept an invitation to become an administrator.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-invites-accept
     *
     * @param data The data containing the invitation token.
     * @returns Promise
     */
    MarketingAgencies.acceptInvite = function (data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.acceptInvite, data);
    };
    return MarketingAgencies;
}());

var TwitchReportingRoute = /** @class */ (function () {
    function TwitchReportingRoute() {
    }
    TwitchReportingRoute.routes = {
        getCreatorCcvHistory: {
            url: '/reporting/twitch/streamers/{twitch_streamer_id}/ccv-history',
            method: HTTP_METHODS.GET
        },
        getGamesSummary: {
            url: '/reporting/twitch/games/summary',
            method: HTTP_METHODS.GET
        },
        getMostActiveStreamers: {
            url: '/reporting/twitch/streamers/most-active',
            method: HTTP_METHODS.GET
        },
        getMostActiveGames: {
            url: '/reporting/twitch/games/most-active',
            method: HTTP_METHODS.GET
        },
        getTopStreamers: {
            url: '/reporting/twitch/streamers/top',
            method: HTTP_METHODS.GET
        },
        getCreatorStreamingSchedule: {
            url: '/reporting/twitch/streamers/{twitch_streamer_id}/streaming-schedule',
            method: HTTP_METHODS.GET
        },
        getStreamerGameHistory: {
            url: '/reporting/twitch/streamers/{twitch_streamer_id}/games',
            method: HTTP_METHODS.GET
        },
        getStreamersForGame: {
            url: '/reporting/twitch/games/{game_name}/streamers',
            method: HTTP_METHODS.GET
        },
    };
    return TwitchReportingRoute;
}());

var TwitchReporting = /** @class */ (function () {
    function TwitchReporting() {
    }
    /**
     * Get a streamer's Concurrent Viewership (CCV) history.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorCcvHistory
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     * @param params Optional query parameters for filtering (e.g., start_date, end_date, per_page).
     *
     * @returns promise
     */
    TwitchReporting.getCreatorCcvHistory = function (twitch_streamer_id, params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getCreatorCcvHistory, undefined, { twitch_streamer_id: twitch_streamer_id }, params);
    };
    /**
     * Get a summary of game performance metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getGamesSummary
     *
     * @param params Optional query parameters for filtering and sorting (e.g., start_date, end_date, sort_by, limit).
     *
     * @returns promise
     */
    TwitchReporting.getGamesSummary = function (params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getGamesSummary, undefined, undefined, params);
    };
    /**
     * Get most recently active streamers.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveStreamers
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    TwitchReporting.getMostActiveStreamers = function (params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getMostActiveStreamers, undefined, undefined, params);
    };
    /**
     * Get most recently streamed games.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveGames
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    TwitchReporting.getMostActiveGames = function (params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getMostActiveGames, undefined, undefined, params);
    };
    /**
     * Get top streamers by performance (average or peak CCV).
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getTopStreamers
     *
     * @param params Optional query parameters for filtering and sorting (e.g., sort_by, start_date, limit).
     *
     * @returns promise
     */
    TwitchReporting.getTopStreamers = function (params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getTopStreamers, undefined, undefined, params);
    };
    /**
     * Get a streamer's typical streaming schedule as a heatmap.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorStreamingSchedule
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     *
     * @returns promise
     */
    TwitchReporting.getCreatorStreamingSchedule = function (twitch_streamer_id) {
        return Requests.processRoute(TwitchReportingRoute.routes.getCreatorStreamingSchedule, undefined, { twitch_streamer_id: twitch_streamer_id });
    };
    /**
    * Get a list of games played by a specific streamer.
    *
    * @param twitch_streamer_id The ID of the Twitch streamer.
    * @returns promise
    */
    TwitchReporting.getStreamerGameHistory = function (twitch_streamer_id) {
        return Requests.processRoute(TwitchReportingRoute.routes.getStreamerGameHistory, undefined, { twitch_streamer_id: twitch_streamer_id });
    };
    /**
     * Get a paginated list of streamers who played a specific game.
     *
     * @param game_name The URL-encoded name of the game.
     * @param params Optional query parameters for pagination (e.g., page, per_page).
     * @returns promise
     */
    TwitchReporting.getStreamersForGame = function (game_name, params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getStreamersForGame, undefined, { game_name: encodeURIComponent(game_name) }, params);
    };
    return TwitchReporting;
}());

var RafflesRoute = /** @class */ (function () {
    function RafflesRoute() {
    }
    RafflesRoute.routes = {
        list: { url: '/raffles', method: HTTP_METHODS.GET },
        create: { url: '/raffles', method: HTTP_METHODS.POST },
        view: { url: '/raffles/{id}', method: HTTP_METHODS.GET },
        update: { url: '/raffles/{id}', method: HTTP_METHODS.PUT },
        enter: { url: '/raffles/{id}/enter', method: HTTP_METHODS.POST },
        me: { url: '/raffles/{id}/me', method: HTTP_METHODS.GET },
        performAction: { url: '/raffles/{id}/actions', method: HTTP_METHODS.POST },
        shareSocially: { url: '/raffles/{id}/share', method: HTTP_METHODS.POST },
        inviteFriend: { url: '/raffles/{id}/invite-friend', method: HTTP_METHODS.POST },
        // Prize Management
        addPrize: { url: '/raffles/{id}/prizes', method: HTTP_METHODS.POST },
        // Drawing & Winners
        drawWinners: { url: '/raffles/{id}/draw', method: HTTP_METHODS.POST },
        pickWinner: { url: '/raffles/{id}/pick-winner', method: HTTP_METHODS.POST },
        winners: { url: '/raffles/{id}/winners', method: HTTP_METHODS.GET },
        // Participant & Fulfillment Management
        participants: { url: '/raffles/{id}/participants', method: HTTP_METHODS.GET },
        fulfillPrize: { url: '/raffles/entries/{entry_id}/fulfill', method: HTTP_METHODS.PUT },
        updateAddress: { url: '/raffles/entries/{entry_id}/address', method: HTTP_METHODS.PUT },
        disqualify: { url: '/raffles/{id}/disqualify/{entry_id}', method: HTTP_METHODS.POST },
        // Analytics & Finance
        escrowStatus: { url: '/raffles/{id}/escrow', method: HTTP_METHODS.GET },
        analytics: { url: '/raffles/{id}/analytics', method: HTTP_METHODS.GET },
    };
    return RafflesRoute;
}());

var Raffles = /** @class */ (function () {
    function Raffles() {
    }
    /**
     * List all raffles with optional filters.
     */
    Raffles.list = function (params) {
        return Requests.processRoute(RafflesRoute.routes.list, undefined, undefined, params);
    };
    /**
     * Create a new raffle (Game Owner).
     */
    Raffles.create = function (data) {
        return Requests.processRoute(RafflesRoute.routes.create, data);
    };
    /**
     * Retrieve details for a specific raffle.
     */
    Raffles.view = function (id) {
        return Requests.processRoute(RafflesRoute.routes.view, {}, { id: id });
    };
    /**
     * Enter a raffle (User/Player). Requires Steam ID.
     */
    Raffles.enter = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.enter, data, { id: id });
    };
    /**
     * Get the authenticated user's entry status for a specific raffle.
     */
    Raffles.me = function (id) {
        return Requests.processRoute(RafflesRoute.routes.me, {}, { id: id });
    };
    /**
     * Record a viral action (e.g., Steam Wishlist, Social Share).
     */
    Raffles.performAction = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.performAction, data, { id: id });
    };
    /**
     * Post raffle content to social media via Glitch API.
     */
    Raffles.shareSocially = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.shareSocially, data, { id: id });
    };
    /**
     * Send an invitation email to a friend.
     */
    Raffles.inviteFriend = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.inviteFriend, data, { id: id });
    };
    /**
     * Add a prize tier to a raffle (Game Owner).
     */
    Raffles.addPrize = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.addPrize, data, { id: id });
    };
    /**
     * Trigger the automated drawing process (Game Owner).
     */
    Raffles.drawWinners = function (id) {
        return Requests.processRoute(RafflesRoute.routes.drawWinners, {}, { id: id });
    };
    /**
     * Manually select a winner for a specific prize (Live Event Mode).
     */
    Raffles.pickWinner = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.pickWinner, data, { id: id });
    };
    /**
     * Get the public list of winners for a completed raffle.
     */
    Raffles.winners = function (id) {
        return Requests.processRoute(RafflesRoute.routes.winners, {}, { id: id });
    };
    /**
     * List all participants/entries for a raffle (Game Owner).
     */
    Raffles.participants = function (id, params) {
        return Requests.processRoute(RafflesRoute.routes.participants, {}, { id: id }, params);
    };
    /**
     * Update shipping/tracking info for a prize (Game Owner).
     */
    Raffles.fulfillPrize = function (entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.fulfillPrize, data, { entry_id: entry_id });
    };
    /**
     * Submit shipping address for a won prize (User/Winner).
     */
    Raffles.updateAddress = function (entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.updateAddress, data, { entry_id: entry_id });
    };
    /**
     * Disqualify a specific entry (Game Owner).
     */
    Raffles.disqualify = function (id, entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.disqualify, data, { id: id, entry_id: entry_id });
    };
    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    Raffles.escrowStatus = function (id) {
        return Requests.processRoute(RafflesRoute.routes.escrowStatus, {}, { id: id });
    };
    /**
     * Get viral loop analytics (K-Factor, Cost Per Entry).
     */
    Raffles.analytics = function (id) {
        return Requests.processRoute(RafflesRoute.routes.analytics, {}, { id: id });
    };
    /**
     * Update a raffle (Game Owner).
     * Handles status transitions (e.g., moving from draft to active).
     */
    Raffles.update = function (id, data) {
        return Requests.processRoute(RafflesRoute.routes.update, data, { id: id });
    };
    return Raffles;
}());

var DiscordMarketplaceRoute = /** @class */ (function () {
    function DiscordMarketplaceRoute() {
    }
    DiscordMarketplaceRoute.routes = {
        // Listings
        listListings: { url: '/discord-marketplace/listings', method: HTTP_METHODS.GET },
        createListing: { url: '/discord-marketplace/listings', method: HTTP_METHODS.POST },
        viewListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.GET },
        updateListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.PUT },
        deleteListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.DELETE },
        // Orders
        listOrders: { url: '/discord-marketplace/orders', method: HTTP_METHODS.GET },
        createOrder: { url: '/discord-marketplace/orders', method: HTTP_METHODS.POST },
        viewOrder: { url: '/discord-marketplace/orders/{id}', method: HTTP_METHODS.GET },
        approveOrder: { url: '/discord-marketplace/orders/{id}/approve', method: HTTP_METHODS.POST },
        rejectOrder: { url: '/discord-marketplace/orders/{id}/reject', method: HTTP_METHODS.POST },
        requestChanges: { url: '/discord-marketplace/orders/{id}/request-changes', method: HTTP_METHODS.POST },
        resubmitOrder: { url: '/discord-marketplace/orders/{id}/resubmit', method: HTTP_METHODS.POST },
        getChannels: { url: '/discord-marketplace/listings/{id}/channels', method: HTTP_METHODS.GET },
    };
    return DiscordMarketplaceRoute;
}());

var DiscordMarketplace = /** @class */ (function () {
    function DiscordMarketplace() {
    }
    /**
     * Search for Discord servers available for sponsorship.
     */
    DiscordMarketplace.listListings = function (params) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listListings, undefined, undefined, params);
    };
    /**
     * List a Discord server in the marketplace (Owner).
     */
    DiscordMarketplace.createListing = function (data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createListing, data);
    };
    /**
     * Get details for a specific server listing.
     */
    DiscordMarketplace.viewListing = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewListing, {}, { id: id });
    };
    /**
     * Update listing settings like price or auto-approve (Owner).
     */
    DiscordMarketplace.updateListing = function (id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.updateListing, data, { id: id });
    };
    /**
     * Remove a server from the marketplace (Owner).
     */
    DiscordMarketplace.deleteListing = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.deleteListing, {}, { id: id });
    };
    /**
     * List sponsored post orders. Use params { mode: 'buyer' | 'seller' }.
     */
    DiscordMarketplace.listOrders = function (params) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listOrders, undefined, undefined, params);
    };
    /**
     * Submit a post to a Discord server for sponsorship (Game Developer).
     */
    DiscordMarketplace.createOrder = function (data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createOrder, data);
    };
    /**
     * Get details for a specific order.
     */
    DiscordMarketplace.viewOrder = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewOrder, {}, { id: id });
    };
    /**
     * Approve and publish a sponsored post (Owner).
     */
    DiscordMarketplace.approveOrder = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.approveOrder, {}, { id: id });
    };
    /**
     * Reject a sponsored post (Owner).
     */
    DiscordMarketplace.rejectOrder = function (id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.rejectOrder, data, { id: id });
    };
    /**
     * Request changes to the post content (Owner).
     */
    DiscordMarketplace.requestChanges = function (id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.requestChanges, data, { id: id });
    };
    /**
     * Resubmit a post after making requested changes (Game Developer).
     */
    DiscordMarketplace.resubmitOrder = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.resubmitOrder, {}, { id: id });
    };
    /**
     * Get available text channels for a specific Discord listing.
     */
    DiscordMarketplace.getChannels = function (id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.getChannels, {}, { id: id });
    };
    return DiscordMarketplace;
}());

var EducationRoute = /** @class */ (function () {
    function EducationRoute() {
    }
    EducationRoute.routes = {
        // 1. EducationCategoryController
        listCategories: { url: '/education/categories', method: HTTP_METHODS.GET },
        viewCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.GET },
        createCategory: { url: '/education/categories', method: HTTP_METHODS.POST },
        updateCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.PUT },
        deleteCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.DELETE },
        // 2. EducationTrackController
        listTracks: { url: '/education/tracks', method: HTTP_METHODS.GET },
        viewTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.GET },
        createTrack: { url: '/education/tracks', method: HTTP_METHODS.POST },
        updateTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.PUT },
        deleteTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.DELETE },
        registerTrack: { url: '/education/tracks/{uuid}/register', method: HTTP_METHODS.POST },
        myTracks: { url: '/education/my-tracks', method: HTTP_METHODS.GET },
        trackAnalytics: { url: '/education/tracks/{uuid}/analytics', method: HTTP_METHODS.GET },
        // 3. EducationContentController
        listContent: { url: '/education/content', method: HTTP_METHODS.GET },
        viewContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.GET },
        createContent: { url: '/education/content', method: HTTP_METHODS.POST },
        updateContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.PUT },
        deleteContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.DELETE },
        contentHeartbeat: { url: '/education/content/{uuid}/heartbeat', method: HTTP_METHODS.POST },
        saveContentModuleState: { url: '/education/content/{uuid}/module-state', method: HTTP_METHODS.POST },
        getContentModuleState: { url: '/education/content/{uuid}/module-state', method: HTTP_METHODS.GET },
        getSecureVideo: { url: '/education/content/{uuid}/secure-video', method: HTTP_METHODS.GET },
        getPreviewSecureVideo: { url: '/education/content/{uuid}/preview-secure-video', method: HTTP_METHODS.GET },
        // 4. EducationContentTrackController (Pivot)
        listTrackContent: { url: '/education/tracks/{track_id}/content', method: HTTP_METHODS.GET },
        addContentToTrack: { url: '/education/tracks/{track_id}/content', method: HTTP_METHODS.POST },
        updateContentInTrack: { url: '/education/tracks/{track_id}/content/{content_id}', method: HTTP_METHODS.PUT },
        removeContentFromTrack: { url: '/education/tracks/{track_id}/content/{content_id}', method: HTTP_METHODS.DELETE },
        reorderTrackContent: { url: '/education/tracks/{track_id}/reorder', method: HTTP_METHODS.POST },
        // 5. QuizController
        listQuizzes: { url: '/education/quizzes', method: HTTP_METHODS.GET },
        viewQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.GET },
        createQuiz: { url: '/education/quizzes', method: HTTP_METHODS.POST },
        updateQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.PUT },
        deleteQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.DELETE },
        submitQuiz: { url: '/education/quizzes/{uuid}/submit', method: HTTP_METHODS.POST },
        myQuizAttempts: { url: '/education/quizzes/{uuid}/attempts', method: HTTP_METHODS.GET },
        viewQuizAttempt: { url: '/education/quizzes/attempts/{uuid}', method: HTTP_METHODS.GET },
        // 6. QuizQuestionController
        listQuizQuestions: { url: '/education/quizzes/{quiz_id}/questions', method: HTTP_METHODS.GET },
        createQuizQuestion: { url: '/education/quizzes/{quiz_id}/questions', method: HTTP_METHODS.POST },
        viewQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.GET },
        updateQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.PUT },
        deleteQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.DELETE },
        reorderQuizQuestions: { url: '/education/quizzes/{quiz_id}/questions/reorder', method: HTTP_METHODS.POST },
        // 7. QuizOptionController
        listQuizOptions: { url: '/education/questions/{question_id}/options', method: HTTP_METHODS.GET },
        createQuizOption: { url: '/education/questions/{question_id}/options', method: HTTP_METHODS.POST },
        viewQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.GET },
        updateQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.PUT },
        deleteQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.DELETE },
        // 8. QuizAttemptController
        listAllQuizAttempts: { url: '/education/quiz-attempts', method: HTTP_METHODS.GET },
        viewSpecificQuizAttempt: { url: '/education/quiz-attempts/{uuid}', method: HTTP_METHODS.GET },
        deleteQuizAttempt: { url: '/education/quiz-attempts/{uuid}', method: HTTP_METHODS.DELETE },
        listUserQuizAttempts: { url: '/users/{user_id}/quiz-attempts', method: HTTP_METHODS.GET },
        // 9. QuizAttemptAnswerController
        listAttemptAnswers: { url: '/education/quiz-attempts/{attempt_id}/answers', method: HTTP_METHODS.GET },
        viewSpecificAnswer: { url: '/education/quiz-attempt-answers/{uuid}', method: HTTP_METHODS.GET },
        reportQuestionPerformance: { url: '/education/reports/question-performance', method: HTTP_METHODS.GET },
        // 10. UserEducationProgressController
        listAllProgress: { url: '/education/progress', method: HTTP_METHODS.GET },
        syncProgress: { url: '/education/progress/sync', method: HTTP_METHODS.POST },
        viewProgress: { url: '/education/progress/{uuid}', method: HTTP_METHODS.GET },
        deleteProgress: { url: '/education/progress/{uuid}', method: HTTP_METHODS.DELETE },
        myProgressByContent: { url: '/education/content/{content_id}/my-progress', method: HTTP_METHODS.GET },
        // 11. UserTrackController
        listUserTracks: { url: '/education/user-tracks', method: HTTP_METHODS.GET },
        viewUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.GET },
        updateUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.PUT },
        deleteUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.DELETE },
        refreshUserTrack: { url: '/education/user-tracks/{uuid}/refresh', method: HTTP_METHODS.POST },
        // 12. UserTrackRegistrationController
        listRegistrations: { url: '/education/registrations', method: HTTP_METHODS.GET },
        createRegistration: { url: '/education/registrations', method: HTTP_METHODS.POST },
        viewRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.GET },
        updateRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.PUT },
        deleteRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.DELETE },
        listTrackRegistrations: { url: '/education/tracks/{track_id}/registrations', method: HTTP_METHODS.GET },
        // 13. EducationViewController
        listViews: { url: '/education/views', method: HTTP_METHODS.GET },
        logView: { url: '/education/views', method: HTTP_METHODS.POST },
        viewLogDetails: { url: '/education/views/{uuid}', method: HTTP_METHODS.GET },
        reportConversion: { url: '/education/reports/conversion-impact', method: HTTP_METHODS.GET },
        reportAdoption: { url: '/education/reports/adoption-metrics', method: HTTP_METHODS.GET },
        reportRetention: { url: '/education/reports/retention-impact', method: HTTP_METHODS.GET },
        // 14. EducationModuleDataController
        listModuleData: { url: '/education/module-data', method: HTTP_METHODS.GET },
        saveModuleData: { url: '/education/module-data', method: HTTP_METHODS.POST },
        viewModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.GET },
        updateModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.PUT },
        deleteModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.DELETE },
        // 15. EducationCertificateTemplateController
        listTemplates: { url: '/education/certificate-templates', method: HTTP_METHODS.GET },
        createTemplate: { url: '/education/certificate-templates', method: HTTP_METHODS.POST },
        viewTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.GET },
        updateTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.PUT },
        deleteTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.DELETE },
        uploadTemplateSignature: { url: '/education/certificate-templates/{uuid}/uploadSignature', method: HTTP_METHODS.POST },
        uploadTemplateBackground: { url: '/education/certificate-templates/{uuid}/uploadBackground', method: HTTP_METHODS.POST },
        // 16. CertificateController
        listAllCertificates: { url: '/certificates', method: HTTP_METHODS.GET },
        myCertificates: { url: '/certificates/mine', method: HTTP_METHODS.GET },
        viewCertificate: { url: '/certificates/{uuid}', method: HTTP_METHODS.GET },
        downloadCertificate: { url: '/certificates/{uuid}/download', method: HTTP_METHODS.GET },
        issueCertificate: { url: '/certificates', method: HTTP_METHODS.POST },
        revokeCertificate: { url: '/certificates/{uuid}', method: HTTP_METHODS.DELETE },
        listUserCertificates: { url: '/users/{user_id}/certificates', method: HTTP_METHODS.GET },
        // 17. BadgeController
        listAllBadges: { url: '/badges', method: HTTP_METHODS.GET },
        myBadges: { url: '/badges/mine', method: HTTP_METHODS.GET },
        viewBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.GET },
        awardBadge: { url: '/badges', method: HTTP_METHODS.POST },
        updateBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.PUT },
        revokeBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.DELETE },
        listUserBadges: { url: '/users/{user_id}/badges', method: HTTP_METHODS.GET },
    };
    return EducationRoute;
}());

var Education = /** @class */ (function () {
    function Education() {
    }
    // --- 1. CATEGORIES ---
    Education.listCategories = function (params) {
        return Requests.processRoute(EducationRoute.routes.listCategories, undefined, undefined, params);
    };
    Education.viewCategory = function (uuid, params) {
        return Requests.processRoute(EducationRoute.routes.viewCategory, undefined, { uuid: uuid }, params);
    };
    Education.createCategory = function (data) {
        return Requests.processRoute(EducationRoute.routes.createCategory, data);
    };
    Education.updateCategory = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateCategory, data, { uuid: uuid });
    };
    Education.deleteCategory = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteCategory, undefined, { uuid: uuid });
    };
    // --- 2. TRACKS ---
    Education.listTracks = function (params) {
        return Requests.processRoute(EducationRoute.routes.listTracks, undefined, undefined, params);
    };
    Education.viewTrack = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewTrack, undefined, { uuid: uuid });
    };
    Education.createTrack = function (data) {
        return Requests.processRoute(EducationRoute.routes.createTrack, data);
    };
    Education.updateTrack = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateTrack, data, { uuid: uuid });
    };
    Education.deleteTrack = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteTrack, undefined, { uuid: uuid });
    };
    Education.registerForTrack = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.registerTrack, {}, { uuid: uuid });
    };
    Education.myTracks = function () {
        return Requests.processRoute(EducationRoute.routes.myTracks);
    };
    Education.getTrackAnalytics = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.trackAnalytics, undefined, { uuid: uuid });
    };
    // --- 3. CONTENT ---
    Education.listContent = function (params) {
        return Requests.processRoute(EducationRoute.routes.listContent, undefined, undefined, params);
    };
    Education.viewContent = function (uuid, params) {
        return Requests.processRoute(EducationRoute.routes.viewContent, undefined, { uuid: uuid }, params);
    };
    Education.createContent = function (data) {
        return Requests.processRoute(EducationRoute.routes.createContent, data);
    };
    Education.updateContent = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateContent, data, { uuid: uuid });
    };
    Education.deleteContent = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteContent, undefined, { uuid: uuid });
    };
    Education.heartbeat = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.contentHeartbeat, data, { uuid: uuid });
    };
    Education.getSecureVideo = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.getSecureVideo, undefined, { uuid: uuid });
    };
    Education.getPreviewSecureVideo = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.getPreviewSecureVideo, undefined, { uuid: uuid });
    };
    Education.listAllProgress = function (params) {
        return Requests.processRoute(EducationRoute.routes.listAllProgress, undefined, undefined, params);
    };
    // --- 4. TRACK CONTENT (PIVOT) ---
    Education.listTrackContent = function (track_id) {
        return Requests.processRoute(EducationRoute.routes.listTrackContent, undefined, { track_id: track_id });
    };
    Education.addContentToTrack = function (track_id, data) {
        return Requests.processRoute(EducationRoute.routes.addContentToTrack, data, { track_id: track_id });
    };
    Education.removeContentFromTrack = function (track_id, content_id) {
        return Requests.processRoute(EducationRoute.routes.removeContentFromTrack, undefined, { track_id: track_id, content_id: content_id });
    };
    Education.reorderTrackContent = function (track_id, content_ids) {
        return Requests.processRoute(EducationRoute.routes.reorderTrackContent, { content_ids: content_ids }, { track_id: track_id });
    };
    // --- 5. QUIZZES ---
    Education.listQuizzes = function (params) {
        return Requests.processRoute(EducationRoute.routes.listQuizzes, undefined, undefined, params);
    };
    Education.viewQuiz = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuiz, undefined, { uuid: uuid });
    };
    Education.submitQuiz = function (uuid, answers) {
        return Requests.processRoute(EducationRoute.routes.submitQuiz, { answers: answers }, { uuid: uuid });
    };
    Education.myQuizAttempts = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.myQuizAttempts, undefined, { uuid: uuid });
    };
    Education.viewQuizAttempt = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizAttempt, undefined, { uuid: uuid });
    };
    Education.createQuiz = function (data) {
        return Requests.processRoute(EducationRoute.routes.createQuiz, data);
    };
    Education.updateQuiz = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuiz, data, { uuid: uuid });
    };
    Education.deleteQuiz = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuiz, undefined, { uuid: uuid });
    };
    // --- 6. QUIZ QUESTIONS & OPTIONS ---
    Education.listQuizQuestions = function (quiz_id) {
        return Requests.processRoute(EducationRoute.routes.listQuizQuestions, undefined, { quiz_id: quiz_id });
    };
    Education.createQuizQuestion = function (quiz_id, data) {
        return Requests.processRoute(EducationRoute.routes.createQuizQuestion, data, { quiz_id: quiz_id });
    };
    Education.reorderQuizQuestions = function (quiz_id, question_ids) {
        return Requests.processRoute(EducationRoute.routes.reorderQuizQuestions, { question_ids: question_ids }, { quiz_id: quiz_id });
    };
    Education.listQuizOptions = function (question_id) {
        return Requests.processRoute(EducationRoute.routes.listQuizOptions, undefined, { question_id: question_id });
    };
    Education.createQuizOption = function (question_id, data) {
        return Requests.processRoute(EducationRoute.routes.createQuizOption, data, { question_id: question_id });
    };
    Education.viewQuizQuestion = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizQuestion, undefined, { uuid: uuid });
    };
    Education.updateQuizQuestion = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuizQuestion, data, { uuid: uuid });
    };
    Education.deleteQuizQuestion = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuizQuestion, undefined, { uuid: uuid });
    };
    // --- QUIZ OPTIONS (CRUD) ---
    Education.viewQuizOption = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizOption, undefined, { uuid: uuid });
    };
    Education.updateQuizOption = function (uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuizOption, data, { uuid: uuid });
    };
    Education.deleteQuizOption = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuizOption, undefined, { uuid: uuid });
    };
    // --- 7. PROGRESS & REGISTRATIONS ---
    Education.syncProgress = function (data) {
        return Requests.processRoute(EducationRoute.routes.syncProgress, data);
    };
    Education.getMyProgressByContent = function (content_id) {
        return Requests.processRoute(EducationRoute.routes.myProgressByContent, undefined, { content_id: content_id });
    };
    Education.listRegistrations = function (params) {
        return Requests.processRoute(EducationRoute.routes.listRegistrations, undefined, undefined, params);
    };
    Education.refreshUserTrack = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.refreshUserTrack, {}, { uuid: uuid });
    };
    // --- 8. ANALYTICS & MODULE DATA ---
    Education.logView = function (data) {
        return Requests.processRoute(EducationRoute.routes.logView, data);
    };
    Education.saveModuleData = function (data) {
        return Requests.processRoute(EducationRoute.routes.saveModuleData, data);
    };
    Education.getModuleData = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.viewModuleData, undefined, { uuid: uuid });
    };
    Education.getConversionReport = function () {
        return Requests.processRoute(EducationRoute.routes.reportConversion);
    };
    Education.getAdoptionReport = function () {
        return Requests.processRoute(EducationRoute.routes.reportAdoption);
    };
    Education.getQuestionPerformanceReport = function (params) {
        return Requests.processRoute(EducationRoute.routes.reportQuestionPerformance, undefined, undefined, params);
    };
    Education.getRetentionReport = function () {
        return Requests.processRoute(EducationRoute.routes.reportRetention);
    };
    /**
     * List raw engagement logs.
     * @param params Filter by user_id, content_id, or is_paid
     */
    Education.listViews = function (params) {
        return Requests.processRoute(EducationRoute.routes.listViews, undefined, undefined, params);
    };
    // --- 9. ACHIEVEMENTS (BADGES & CERTIFICATES) ---
    Education.myBadges = function () {
        return Requests.processRoute(EducationRoute.routes.myBadges);
    };
    Education.awardBadge = function (data) {
        return Requests.processRoute(EducationRoute.routes.awardBadge, data);
    };
    Education.myCertificates = function () {
        return Requests.processRoute(EducationRoute.routes.myCertificates);
    };
    Education.downloadCertificate = function (uuid) {
        return Requests.processRoute(EducationRoute.routes.downloadCertificate, undefined, { uuid: uuid });
    };
    // --- 10. TEMPLATES & UPLOADS ---
    Education.listTemplates = function () {
        return Requests.processRoute(EducationRoute.routes.listTemplates);
    };
    Education.uploadTemplateSignature = function (uuid, file) {
        var url = EducationRoute.routes.uploadTemplateSignature.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    };
    Education.uploadTemplateBackground = function (uuid, file) {
        var url = EducationRoute.routes.uploadTemplateBackground.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    };
    return Education;
}());

var CrmRoute = /** @class */ (function () {
    function CrmRoute() {
    }
    CrmRoute.routes = {
        // Lead Management
        listLeads: { url: '/admin/crm/leads', method: HTTP_METHODS.GET },
        createLead: { url: '/admin/crm/leads', method: HTTP_METHODS.POST },
        viewLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.GET },
        updateLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.PUT },
        deleteLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.DELETE },
        // Pipeline Actions
        assignOwner: { url: '/admin/crm/leads/{lead_id}/assign', method: HTTP_METHODS.POST },
        enrichLead: { url: '/admin/crm/leads/{lead_id}/enrich', method: HTTP_METHODS.POST },
        approveContact: { url: '/admin/crm/contacts/{contact_id}/approve', method: HTTP_METHODS.POST },
        updateStatus: { url: '/admin/crm/leads/{lead_id}/status', method: HTTP_METHODS.POST },
        addNote: { url: '/admin/crm/leads/{lead_id}/notes', method: HTTP_METHODS.POST },
        addContact: { url: '/admin/crm/leads/{lead_id}/contacts', method: HTTP_METHODS.POST },
        markAsLost: { url: '/admin/crm/leads/{lead_id}/lost', method: HTTP_METHODS.POST },
        recordStaffReply: { url: '/admin/crm/leads/{lead_id}/replied', method: HTTP_METHODS.POST },
        bulkApprove: { url: '/admin/crm/contacts/bulk-approve', method: HTTP_METHODS.POST },
        updateContact: { url: '/admin/crm/contacts/{contact_id}', method: HTTP_METHODS.PUT },
        deleteContact: { url: '/admin/crm/contacts/{contact_id}', method: HTTP_METHODS.DELETE },
        // Automation Triggers
        triggerSourcing: { url: '/admin/crm/automation/source', method: HTTP_METHODS.POST },
        triggerSync: { url: '/admin/crm/automation/sync', method: HTTP_METHODS.POST },
        // Analytics
        funnelStats: { url: '/admin/crm/analytics/funnel', method: HTTP_METHODS.GET },
        performanceStats: { url: '/admin/crm/analytics/performance', method: HTTP_METHODS.GET },
        getInterestStats: { url: '/admin/crm/analytics/interests', method: HTTP_METHODS.GET },
    };
    return CrmRoute;
}());

var Crm = /** @class */ (function () {
    function Crm() {
    }
    /**
     * List and search CRM leads.
     */
    Crm.listLeads = function (params) {
        return Requests.processRoute(CrmRoute.routes.listLeads, undefined, undefined, params);
    };
    /**
     * Manually create a new lead.
     */
    Crm.createLead = function (data) {
        return Requests.processRoute(CrmRoute.routes.createLead, data);
    };
    /**
     * View a single lead with contacts and activity timeline.
     */
    Crm.viewLead = function (lead_id) {
        return Requests.processRoute(CrmRoute.routes.viewLead, {}, { lead_id: lead_id });
    };
    /**
     * Update lead information.
     */
    Crm.updateLead = function (lead_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateLead, data, { lead_id: lead_id });
    };
    /**
     * Delete a lead (Soft Delete).
     */
    Crm.deleteLead = function (lead_id) {
        return Requests.processRoute(CrmRoute.routes.deleteLead, {}, { lead_id: lead_id });
    };
    /**
     * Assign a Super Admin as the owner of a lead.
     */
    Crm.assignOwner = function (lead_id, user_id) {
        return Requests.processRoute(CrmRoute.routes.assignOwner, { user_id: user_id }, { lead_id: lead_id });
    };
    /**
     * Manually trigger Apollo enrichment and website scraping for a lead.
     */
    Crm.enrichLead = function (lead_id) {
        return Requests.processRoute(CrmRoute.routes.enrichLead, {}, { lead_id: lead_id });
    };
    /**
     * Approve a specific contact to start the Apollo email sequence.
     */
    Crm.approveContact = function (contact_id) {
        return Requests.processRoute(CrmRoute.routes.approveContact, {}, { contact_id: contact_id });
    };
    /**
     * Manually update the pipeline status of a lead.
     */
    Crm.updateStatus = function (lead_id, status, note) {
        return Requests.processRoute(CrmRoute.routes.updateStatus, { status: status, note: note }, { lead_id: lead_id });
    };
    /**
     * Add a manual note to the lead's activity timeline.
     */
    Crm.addNote = function (lead_id, content) {
        return Requests.processRoute(CrmRoute.routes.addNote, { content: content }, { lead_id: lead_id });
    };
    /**
     * Manually add a contact person to a lead.
     */
    Crm.addContact = function (lead_id, data) {
        return Requests.processRoute(CrmRoute.routes.addContact, data, { lead_id: lead_id });
    };
    /**
     * Mark a lead as lost and record the reason.
     */
    Crm.markAsLost = function (lead_id, reason) {
        return Requests.processRoute(CrmRoute.routes.markAsLost, { reason: reason }, { lead_id: lead_id });
    };
    /**
     * Record that a staff member has manually replied to a prospect.
     */
    Crm.recordStaffReply = function (lead_id) {
        return Requests.processRoute(CrmRoute.routes.recordStaffReply, {}, { lead_id: lead_id });
    };
    /**
     * Approve a batch of contacts for outreach.
     */
    Crm.bulkApprove = function (contact_ids) {
        return Requests.processRoute(CrmRoute.routes.bulkApprove, { contact_ids: contact_ids });
    };
    /**
     * Manually trigger the bi-weekly sourcing automation.
     */
    Crm.triggerSourcing = function () {
        return Requests.processRoute(CrmRoute.routes.triggerSourcing, {});
    };
    /**
     * Manually trigger the Apollo status and conversion sync.
     */
    Crm.triggerSync = function () {
        return Requests.processRoute(CrmRoute.routes.triggerSync, {});
    };
    /**
     * Get funnel conversion percentages.
     */
    Crm.getFunnelStats = function () {
        return Requests.processRoute(CrmRoute.routes.funnelStats);
    };
    /**
     * Get win rates and response time analytics.
     */
    Crm.getPerformanceStats = function () {
        return Requests.processRoute(CrmRoute.routes.performanceStats);
    };
    /**
     * Get the analytics on what users indcated they were interested in.
     */
    Crm.getInterestStats = function () {
        return Requests.processRoute(CrmRoute.routes.getInterestStats);
    };
    /**
    * Update an existing contact's information.
    */
    Crm.updateContact = function (contact_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateContact, data, { contact_id: contact_id });
    };
    /**
     * Remove a contact from a lead.
     */
    Crm.deleteContact = function (contact_id) {
        return Requests.processRoute(CrmRoute.routes.deleteContact, {}, { contact_id: contact_id });
    };
    return Crm;
}());

var Parser = /** @class */ (function () {
    function Parser() {
    }
    /**
     * To be used inside a catch close, this function will parse out any JSON in a error response from the api.
     *
     * @param error The Error object from the catch clause
     *
     * @returns Either returns a JSON object or false.
     */
    Parser.parseJSONFromError = function (error) {
        var errorString = error.toString();
        errorString = errorString.replace('Error: ', '');
        try {
            return JSON.parse(errorString);
        }
        catch (e) {
            return false;
        }
    };
    return Parser;
}());

// Browser implementation using crypto-js
var BrowserCrypto = /** @class */ (function () {
    function BrowserCrypto() {
        this.CryptoJS = require('crypto-js');
    }
    BrowserCrypto.prototype.createHmac = function (algorithm, secret) {
        var _this = this;
        var data = '';
        var hmac = {
            update: function (updateData) {
                data = updateData;
                return hmac;
            },
            digest: function (encoding) {
                if (encoding !== 'hex') {
                    throw new Error('Only hex encoding is supported in browser implementation');
                }
                return _this.CryptoJS.HmacSHA256(data, secret).toString(_this.CryptoJS.enc.Hex);
            }
        };
        return hmac;
    };
    return BrowserCrypto;
}());
// Node.js implementation that maintains sync interface
var NodeCrypto = /** @class */ (function () {
    function NodeCrypto() {
        // Use dynamic import but handle it synchronously for interface compliance
        try {
            // This will throw in browser environments
            this.crypto = require('crypto');
        }
        catch (e) {
            this.crypto = undefined;
        }
    }
    NodeCrypto.prototype.createHmac = function (algorithm, secret) {
        if (!this.crypto) {
            throw new Error('Node.js crypto module not available');
        }
        return this.crypto.createHmac(algorithm, secret);
    };
    return NodeCrypto;
}());
// Determine which crypto implementation to use
var getCrypto = function () {
    var _a;
    try {
        // Check if we're in Node.js environment and crypto is available
        if (typeof process !== 'undefined' && ((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node)) {
            var nodeCrypto = new NodeCrypto();
            // Verify crypto was actually loaded
            try {
                nodeCrypto.createHmac('sha256', 'test');
                return nodeCrypto;
            }
            catch (e) {
                console.warn('Node.js crypto not available, falling back to browser implementation');
            }
        }
    }
    catch (e) {
        console.warn('Node.js environment detection failed, falling back to browser implementation');
    }
    // Fall back to browser implementation
    return new BrowserCrypto();
};
// Singleton crypto instance
var cryptoInstance = getCrypto();
var Session = /** @class */ (function () {
    function Session() {
    }
    Session.isLoggedIn = function () {
        var authToken = Storage.getAuthToken();
        var expired = Storage.isTokenExpired();
        if (expired) {
            Session.end(); // Auto-clear if expired
            return false;
        }
        return authToken !== null && authToken !== 'null' && authToken !== undefined;
    };
    Session.getAuthToken = function () {
        return Storage.getAuthToken();
    };
    Session.getID = function () {
        return Storage.get(Session._id_key);
    };
    Session.getFirstName = function () {
        return Storage.get(Session._first_name_key);
    };
    Session.getLastName = function () {
        return Storage.get(Session._last_name_key);
    };
    Session.getEmail = function () {
        return Storage.get(Session._email_key);
    };
    Session.hasJoinedCommunity = function () {
        var community = Storage.get('community');
        return !!(community === null || community === void 0 ? void 0 : community.me);
    };
    Session.end = function () {
        Storage.setAuthToken(null);
        Storage.set('glitch_token_expiry', null); // Clear expiry
        Storage.eraseCookie('glitch_token_expiry');
        Storage.set(Session._id_key, null);
        Storage.set(Session._first_name_key, null);
        Storage.set(Session._last_name_key, null);
        Storage.set(Session._email_key, null);
        Storage.set(Session._username_key, null);
    };
    Session.processAuthentication = function (data) {
        Storage.setAuthToken(data.token.access_token);
        Storage.setTokenExpiry(data.token.expires_in); // Save the timeout
        Storage.set(Session._id_key, data.id);
        Storage.set(Session._first_name_key, data.first_name);
        Storage.set(Session._last_name_key, data.last_name);
        Storage.set(Session._username_key, data.username);
        Storage.set(Session._email_key, data.email);
        Config.setAuthToken(data.token.access_token);
    };
    /**
     * Generate a tracking token for analytics collection
     * @param titleId The title ID to generate token for
     * @param secret The secret key (should match server config)
     * @returns HMAC-SHA256 token
     * @throws Error if crypto operations fail
     */
    Session.generateTrackingToken = function (titleId, secret) {
        try {
            if (!titleId) {
                throw new Error('titleId is required');
            }
            if (!secret) {
                throw new Error('secret is required');
            }
            return cryptoInstance
                .createHmac('sha256', secret)
                .update(titleId)
                .digest('hex');
        }
        catch (error) {
            console.error('Failed to generate tracking token:', error);
            throw new Error('Failed to generate tracking token');
        }
    };
    Session._id_key = 'user_id';
    Session._first_name_key = 'user_first_name';
    Session._last_name_key = 'user_last_name';
    Session._username_key = 'username';
    Session._email_key = 'email';
    return Session;
}());

var Data = /** @class */ (function () {
    function Data() {
    }
    Data.dataURItoBlob = function (dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], { type: mimeString });
        return blob;
    };
    Data.convertToHHMMSS = function (time) {
        if (!time) {
            return time;
        }
        var sec_num = parseInt(time, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        if (hours < 10) {
            hours = Number('0' + hours);
        }
        if (minutes < 10) {
            minutes = Number('0' + minutes);
        }
        if (seconds < 10) {
            seconds = Number('0' + seconds);
        }
        return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
    return Data;
}());

var AcceptanceStatus = Object.freeze({
    UNAPPROVED: 0,
    APPROVED: 1,
    IN_REVIEW: 2,
    PENDING: 3,
    REQUIRE_MORE_INFORMATION: 4,
    DENIED: 5,
    BANNED: 6,
    PROBATION: 7,
});

var AddressLocationType = Object.freeze({
    VIRTUAL: 1,
    IN_PERSON: 2,
    HYBRID: 3,
});

var CampaignObjective = {
    BrandAwareness: 1, // Increasing visibility and recognition of the brand.
    AudienceEngagement: 2, // Boosting interactions like likes, comments, and shares.
    LeadGeneration: 3, // Collecting potential customer information for nurturing leads.
    SalesConversion: 4, // Directly driving sales of products or services.
    BrandIdentityReputation: 5, // Shaping brand perception and reputation.
    CustomerLoyaltyRetention: 6, // Encouraging repeat business and customer loyalty.
    ContentAmplificationDiversity: 7, // Enriching content strategy with influencer content.
    MarketFeedbackInsight: 8, // Gathering product feedback and market insights.
    EducatingAudience: 9, // Informing about product features and benefits.
    CommunityBuilding: 10, // Creating or enhancing a community around the brand.
    DrivingWebTraffic: 11, // Increasing visitors to the brand’s website or landing pages.
    SEOBenefits: 12 // Enhancing search engine optimization through online presence.
};

var ContentStatus = Object.freeze({
    UNAPPROVED: 0,
    APPROVED: 1,
    IN_REVIEW: 2,
    PENDING: 3,
    FLAGGED: 4,
    REMOVED: 5,
    DELETED: 6,
});

var CompetitionTypes = Object.freeze({
    SINGLE_ELIMINATION: 1,
    DOUBLE_ELIMINATION: 2,
    MULTILEVEL: 3,
    STRAIGHT_ROUND_ROBIN: 4,
    ROUND_ROBIN_DOUBLE_SPLIT: 5,
    ROUND_ROBIN_TRIPLE_SPLIT: 6,
    ROUND_ROBIN_QUADRUPLE_SPLIT: 7,
    SEMI_ROUND_ROBINS: 8,
    EXTENDED: 9,
});

var InfluencerCampaignType = {
    SponsoredContent: 1, // Sponsored Content Campaigns: Brands pay influencers to create content featuring their products or services.
    AffiliateMarketing: 2, // Affiliate Marketing: Influencers promote products with a unique link or code, earning a commission per sale.
    ProductGifting: 3, // Product Gifting: Brands send free products to influencers, hoping for them to be featured in their content.
    BrandAmbassador: 4, // Brand Ambassador Programs: Influencers have a long-term relationship with a brand, consistently promoting its products.
    SocialMediaTakeover: 5, // Social Media Takeovers: Influencers take over a brand's social media account for a period, creating and sharing content.
    ContestsGiveaways: 6, // Contests and Giveaways: Collaborations for hosting contests or giveaways, engaging audiences of both parties.
    EventCoverage: 7, // Event Coverage: Influencers are invited to events to cover them on their platforms.
    CoCreationOfProducts: 8, // Co-Creation of Products: Collaboration between brands and influencers to create a product.
    InfluencerWhitelisting: 9, // Influencer Whitelisting: Brands gain access to an influencer's account to run paid ads.
    SocialIssuesCauseCampaigns: 10 // Social Issues and Cause Campaigns: Promoting social causes or charitable organizations.
};

var Modes;
(function (Modes) {
    Modes[Modes["BROADCAST"] = 0] = "BROADCAST";
    Modes[Modes["OBS"] = 1] = "OBS";
    Modes[Modes["RTMP"] = 2] = "RTMP";
})(Modes || (Modes = {}));

var PostTypes = Object.freeze({
    TEXT: 'text',
    LINK: 'link',
    POLL: 'poll',
    IMAGE: 'image',
    VIDEO: 'video',
});

var Roles;
(function (Roles) {
    Roles[Roles["NONE"] = 0] = "NONE";
    Roles[Roles["SUPER_ADMINISTRATOR"] = 1] = "SUPER_ADMINISTRATOR";
    Roles[Roles["ADMINISTRATOR"] = 2] = "ADMINISTRATOR";
    Roles[Roles["MODERATOR"] = 3] = "MODERATOR";
    Roles[Roles["SPEAKER"] = 4] = "SPEAKER";
    Roles[Roles["SUBSCRIBER"] = 5] = "SUBSCRIBER";
    Roles[Roles["BLOCKED"] = 6] = "BLOCKED";
    Roles[Roles["PRODUCER"] = 7] = "PRODUCER";
    Roles[Roles["PARTICIPANT"] = 8] = "PARTICIPANT";
})(Roles || (Roles = {}));

var TeamJoinProcess;
(function (TeamJoinProcess) {
    TeamJoinProcess[TeamJoinProcess["ANYONE"] = 1] = "ANYONE";
    TeamJoinProcess[TeamJoinProcess["INVITE"] = 2] = "INVITE";
    TeamJoinProcess[TeamJoinProcess["APPROVAL"] = 3] = "APPROVAL";
})(TeamJoinProcess || (TeamJoinProcess = {}));

var SocialInteractions;
(function (SocialInteractions) {
    SocialInteractions["LIKE"] = "\uD83D\uDC4D";
    SocialInteractions["LOVE"] = "\u2764\uFE0F";
    SocialInteractions["CARE"] = "\uD83E\uDD70";
    SocialInteractions["HAHA"] = "\uD83D\uDE02";
    SocialInteractions["WOW"] = "\uD83D\uDE2E";
    SocialInteractions["SAD"] = "\uD83D\uDE1E";
    SocialInteractions["CRY"] = "\uD83D\uDE22";
    SocialInteractions["ANGRY"] = "\uD83D\uDE21";
    SocialInteractions["THUMBS_UP"] = "\uD83D\uDC4D";
    SocialInteractions["THUMBS_DOWN"] = "\uD83D\uDC4E";
    SocialInteractions["SMILE"] = "\uD83D\uDE0A";
    SocialInteractions["GRIN"] = "\uD83D\uDE01";
    SocialInteractions["LAUGH"] = "\uD83D\uDE04";
    SocialInteractions["JOY"] = "\uD83D\uDE03";
    SocialInteractions["BLUSH"] = "\uD83D\uDE0A";
    SocialInteractions["SURPRISE"] = "\uD83D\uDE2E";
    SocialInteractions["SHOCK"] = "\uD83D\uDE32";
    SocialInteractions["WOW_FACE"] = "\uD83D\uDE2F";
    SocialInteractions["MIND_BLOWN"] = "\uD83E\uDD2F";
    SocialInteractions["ASTONISHED"] = "\uD83D\uDE33";
    SocialInteractions["CLAP"] = "\uD83D\uDC4F";
    SocialInteractions["PARTY"] = "\uD83C\uDF89";
    SocialInteractions["FIRE"] = "\uD83D\uDD25";
    SocialInteractions["COOL"] = "\uD83D\uDE0E";
    SocialInteractions["OK"] = "\uD83D\uDC4C";
    SocialInteractions["EYES"] = "\uD83D\uDC40";
    SocialInteractions["WINK"] = "\uD83D\uDE09";
    SocialInteractions["TONGUE_OUT"] = "\uD83D\uDE1C";
    SocialInteractions["SILLY"] = "\uD83E\uDD2A";
    SocialInteractions["COFFEE"] = "\u2615";
    SocialInteractions["TEA"] = "\uD83C\uDF75";
    SocialInteractions["BEER"] = "\uD83C\uDF7A";
    SocialInteractions["WINE"] = "\uD83C\uDF77";
    SocialInteractions["COCKTAIL"] = "\uD83C\uDF78";
    SocialInteractions["BALLOON"] = "\uD83C\uDF88";
    SocialInteractions["GIFT"] = "\uD83C\uDF81";
    SocialInteractions["CAMERA"] = "\uD83D\uDCF7";
    SocialInteractions["VIDEO_CAMERA"] = "\uD83D\uDCF9";
    SocialInteractions["MUSIC"] = "\uD83C\uDFB5";
    SocialInteractions["HEADPHONES"] = "\uD83C\uDFA7";
    SocialInteractions["TV"] = "\uD83D\uDCFA";
    SocialInteractions["BOOK"] = "\uD83D\uDCDA";
    SocialInteractions["PEN"] = "\uD83D\uDD8A\uFE0F";
    SocialInteractions["PAPERCLIP"] = "\uD83D\uDCCE";
    SocialInteractions["LOCK"] = "\uD83D\uDD12";
    SocialInteractions["KEY"] = "\uD83D\uDD11";
    SocialInteractions["MAGNIFYING_GLASS"] = "\uD83D\uDD0D";
    SocialInteractions["EARTH_GLOBE"] = "\uD83C\uDF0D";
    SocialInteractions["MAP"] = "\uD83D\uDDFA\uFE0F";
    SocialInteractions["SUN"] = "\u2600\uFE0F";
    SocialInteractions["MOON"] = "\uD83C\uDF19";
    SocialInteractions["STARS"] = "\uD83C\uDF1F";
    SocialInteractions["UMBRELLA"] = "\u2602\uFE0F";
    SocialInteractions["RAINBOW"] = "\uD83C\uDF08";
    SocialInteractions["CLOCK"] = "\u23F0";
    SocialInteractions["HOURGLASS"] = "\u231B";
    SocialInteractions["MONEY_BAG"] = "\uD83D\uDCB0";
    SocialInteractions["SHOPPING_CART"] = "\uD83D\uDED2";
    SocialInteractions["THUMBS_UP_SIGN"] = "\uD83D\uDC4D\uD83C\uDFFB";
    SocialInteractions["THUMBS_DOWN_SIGN"] = "\uD83D\uDC4E\uD83C\uDFFB";
    SocialInteractions["SMILING_FACE_WITH_HALO"] = "\uD83D\uDE07";
    SocialInteractions["NERD_FACE"] = "\uD83E\uDD13";
    SocialInteractions["ROLLING_ON_THE_FLOOR_LAUGHING"] = "\uD83E\uDD23";
    SocialInteractions["UPSIDE_DOWN_FACE"] = "\uD83D\uDE43";
    SocialInteractions["WAVING_HAND"] = "\uD83D\uDC4B";
    SocialInteractions["RAISED_HAND"] = "\u270B";
    SocialInteractions["VICTORY_HAND"] = "\u270C\uFE0F";
    SocialInteractions["FOLDED_HANDS"] = "\uD83D\uDE4F";
    SocialInteractions["PERSON_RAISING_HAND"] = "\uD83D\uDE4B";
    SocialInteractions["PERSON_BOWING"] = "\uD83D\uDE47";
    SocialInteractions["PERSON_SHRUGGING"] = "\uD83E\uDD37";
    SocialInteractions["PERSON_WALKING"] = "\uD83D\uDEB6";
    SocialInteractions["PERSON_RUNNING"] = "\uD83C\uDFC3";
    SocialInteractions["PERSON_SWIMMING"] = "\uD83C\uDFCA";
    SocialInteractions["PERSON_BIKING"] = "\uD83D\uDEB4";
    SocialInteractions["PERSON_DANCING"] = "\uD83D\uDC83";
    SocialInteractions["PEOPLE_HUGGING"] = "\uD83E\uDD17";
    SocialInteractions["SPEECH_BUBBLE"] = "\uD83D\uDCAC";
    SocialInteractions["THOUGHT_BUBBLE"] = "\uD83D\uDCAD";
    SocialInteractions["BUST_IN_SILHOUETTE"] = "\uD83D\uDC64";
    SocialInteractions["BUSTS_IN_SILHOUETTE"] = "\uD83D\uDC65";
    SocialInteractions["MONKEY_FACE"] = "\uD83D\uDC35";
    SocialInteractions["DOG_FACE"] = "\uD83D\uDC36";
    SocialInteractions["CAT_FACE"] = "\uD83D\uDC31";
    SocialInteractions["PIG_FACE"] = "\uD83D\uDC37";
    SocialInteractions["COW_FACE"] = "\uD83D\uDC2E";
    SocialInteractions["RABBIT_FACE"] = "\uD83D\uDC30";
    SocialInteractions["BEAR_FACE"] = "\uD83D\uDC3B";
    SocialInteractions["PANDA_FACE"] = "\uD83D\uDC3C";
    SocialInteractions["PENGUIN"] = "\uD83D\uDC27";
    SocialInteractions["BIRD"] = "\uD83D\uDC26";
    SocialInteractions["BABY_CHICK"] = "\uD83D\uDC24";
    SocialInteractions["HATCHING_CHICK"] = "\uD83D\uDC23";
    SocialInteractions["BUG"] = "\uD83D\uDC1B";
    SocialInteractions["BUTTERFLY"] = "\uD83E\uDD8B";
    SocialInteractions["SNAIL"] = "\uD83D\uDC0C";
    SocialInteractions["LADY_BEETLE"] = "\uD83D\uDC1E";
    SocialInteractions["SPIDER"] = "\uD83D\uDD77\uFE0F";
    SocialInteractions["WEB"] = "\uD83D\uDD78\uFE0F";
    SocialInteractions["TURTLE"] = "\uD83D\uDC22";
    SocialInteractions["FISH"] = "\uD83D\uDC1F";
    SocialInteractions["WHALE"] = "\uD83D\uDC33";
    SocialInteractions["DOLPHIN"] = "\uD83D\uDC2C";
    SocialInteractions["OCTOPUS"] = "\uD83D\uDC19";
    SocialInteractions["CACTUS"] = "\uD83C\uDF35";
    SocialInteractions["TULIP"] = "\uD83C\uDF37";
    SocialInteractions["ROSE"] = "\uD83C\uDF39";
    SocialInteractions["SUNFLOWER"] = "\uD83C\uDF3B";
    SocialInteractions["PALM_TREE"] = "\uD83C\uDF34";
    SocialInteractions["EVERGREEN_TREE"] = "\uD83C\uDF32";
    SocialInteractions["DECIDUOUS_TREE"] = "\uD83C\uDF33";
    SocialInteractions["EGGPLANT"] = "\uD83C\uDF46";
    SocialInteractions["TOMATO"] = "\uD83C\uDF45";
    SocialInteractions["CARROT"] = "\uD83E\uDD55";
    SocialInteractions["BROCCOLI"] = "\uD83E\uDD66";
    SocialInteractions["CORN"] = "\uD83C\uDF3D";
    SocialInteractions["HOT_PEPPER"] = "\uD83C\uDF36\uFE0F";
    SocialInteractions["BREAD"] = "\uD83C\uDF5E";
    SocialInteractions["CHEESE"] = "\uD83E\uDDC0";
    SocialInteractions["HAMBURGER"] = "\uD83C\uDF54";
    SocialInteractions["PIZZA"] = "\uD83C\uDF55";
    SocialInteractions["TACO"] = "\uD83C\uDF2E";
    SocialInteractions["SUSHI"] = "\uD83C\uDF63";
    SocialInteractions["CUPCAKE"] = "\uD83E\uDDC1";
    SocialInteractions["ICE_CREAM"] = "\uD83C\uDF68";
    SocialInteractions["DONUT"] = "\uD83C\uDF69";
    SocialInteractions["CAKE"] = "\uD83C\uDF82";
    SocialInteractions["COOKIES"] = "\uD83C\uDF6A";
})(SocialInteractions || (SocialInteractions = {}));

var TicketTypes;
(function (TicketTypes) {
    TicketTypes[TicketTypes["PAID"] = 1] = "PAID";
    TicketTypes[TicketTypes["FREE"] = 2] = "FREE";
    TicketTypes[TicketTypes["DONATION"] = 3] = "DONATION";
})(TicketTypes || (TicketTypes = {}));
var TicketTypes$1 = TicketTypes;

var TicketUsageTypes;
(function (TicketUsageTypes) {
    TicketUsageTypes[TicketUsageTypes["REGULAR"] = 1] = "REGULAR";
    TicketUsageTypes[TicketUsageTypes["DAY_PASS"] = 2] = "DAY_PASS";
    TicketUsageTypes[TicketUsageTypes["TRACK_PASS"] = 3] = "TRACK_PASS";
    TicketUsageTypes[TicketUsageTypes["WHOLE_EVENT_PASS"] = 4] = "WHOLE_EVENT_PASS";
})(TicketUsageTypes || (TicketUsageTypes = {}));

var TicketVisibility;
(function (TicketVisibility) {
    TicketVisibility[TicketVisibility["VISIBLE"] = 1] = "VISIBLE";
    TicketVisibility[TicketVisibility["HIDDEN"] = 2] = "HIDDEN";
    TicketVisibility[TicketVisibility["HIDDEN_WHEN_NO_SALE"] = 3] = "HIDDEN_WHEN_NO_SALE";
    TicketVisibility[TicketVisibility["SCHEDULED"] = 4] = "SCHEDULED";
})(TicketVisibility || (TicketVisibility = {}));

/**
 * Select what kind of venue this is for the event.
 * @readonly
 * @enum {integer}
 */
var VenueType;
(function (VenueType) {
    /** @member {integer} */
    /** A virtual only event. */
    VenueType[VenueType["VIRTUAL"] = 1] = "VIRTUAL";
    /** @member {integer} */
    /** An in person only event (IRL). */
    VenueType[VenueType["IN_PERSON"] = 2] = "IN_PERSON";
    /** @member {integer} */
    /** Combination of IRL and in-person. */
    VenueType[VenueType["HYBRID"] = 3] = "HYBRID";
})(VenueType || (VenueType = {}));

//Configuration
var Glitch = /** @class */ (function () {
    function Glitch() {
    }
    Glitch.config = {
        Config: Config
    };
    Glitch.api = {
        Ads: Ads,
        AccessKeys: AccessKeys,
        Auth: Auth,
        Campaigns: Campaigns,
        Competitions: Competitions,
        Communities: Communities,
        Users: Users,
        Events: Events,
        Games: Games,
        GameShows: GameShows,
        Hashtags: Hashtags,
        Feedback: Feedback,
        Influencers: Influencers,
        Teams: Teams,
        Posts: Posts,
        Messages: Messages,
        Templates: Templates,
        Waitlists: Waitlists,
        Utility: Utility,
        Tips: Tips,
        Titles: Titles,
        Social: Social,
        SocialPosts: SocialPosts,
        Subscriptions: Subscriptions,
        TipPackages: TipPackages,
        TipEmojis: TipEmojis,
        TipPackagePurchases: TipPackagePurchases,
        Publications: Publications,
        Newsletters: Newsletters,
        PlayTests: PlayTests,
        Media: Media,
        Scheduler: Scheduler,
        Funnel: Funnel,
        SocialStats: SocialStats,
        WebsiteAnalytics: WebsiteAnalytics,
        Fingerprinting: Fingerprinting,
        ShortLinks: ShortLinks,
        AIUsage: AIUsage,
        MarketingAgencies: MarketingAgencies,
        TwitchReporting: TwitchReporting,
        Raffles: Raffles,
        DiscordMarketplace: DiscordMarketplace,
        Education: Education,
        Crm: Crm,
    };
    Glitch.util = {
        Requests: Requests,
        Parser: Parser,
        Session: Session,
        Storage: Storage,
        Data: Data,
        LabelManager: LabelManager,
    };
    Glitch.constants = {
        AcceptanceStatus: AcceptanceStatus,
        AddressLocationType: AddressLocationType,
        CampaignObjective: CampaignObjective,
        CompetitionTypes: CompetitionTypes,
        ContentStatus: ContentStatus,
        InfluencerCampaignType: InfluencerCampaignType,
        Modes: Modes,
        PostTypes: PostTypes,
        Roles: Roles,
        SocialInteractions: SocialInteractions,
        TeamJoinProcess: TeamJoinProcess,
        TicketTypes: TicketTypes$1,
        TicketUsageTypes: TicketUsageTypes,
        TicketVisibility: TicketVisibility,
        VenueType: VenueType
    };
    return Glitch;
}());

module.exports = Glitch;
//# sourceMappingURL=index.js.map
