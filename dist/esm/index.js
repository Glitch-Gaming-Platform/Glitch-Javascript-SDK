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

var global$2 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

var global$1 = (typeof global$2 !== "undefined" ? global$2 :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString: toString$1} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString$1.call(thing);
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
const {isArray: isArray$1} = Array;

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
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
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
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

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
const isStream = (val) => isObject(val) && isFunction(val.pipe);

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
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
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

  if (isArray$1(obj)) {
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
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global$1)
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
    } else if (isArray$1(val)) {
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
    if (thisArg && isFunction(val)) {
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
  if (isArray$1(thing)) return thing;
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
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

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

  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

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
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
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
        const target = isArray$1(source) ? [] : {};

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
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils$1 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
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
  noop,
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

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
  ? global$1.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
kMaxLength();

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) ;
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

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

// eslint-disable-next-line strict
var httpAdapter = null;

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
  formData = formData || new (FormData)();

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

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
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

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
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

const VERSION = "1.6.2";

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
    /**
     * Sets a root level domain so the data can persist across
     * subdomains
     *
     * @param rootDomain
     */
    Storage.setRootDomain = function (rootDomain) {
        Storage.rootDomain = rootDomain;
    };
    Storage.getStorageKey = function (key) {
        return Storage.rootDomain ? "".concat(Storage.rootDomain, ":").concat(key) : key;
    };
    Storage.set = function (key, value) {
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
                catch (e) {
                }
                Storage.data[key] = value;
            }
        }
    };
    Storage.get = function (key) {
        try {
            var serializedValue = window.localStorage.getItem(Storage.getStorageKey(key));
            if (serializedValue !== null) {
                return JSON.parse(serializedValue);
            }
        }
        catch (e) {
            try {
                var serializedValue = window.sessionStorage.getItem(Storage.getStorageKey(key));
                if (serializedValue !== null) {
                    return JSON.parse(serializedValue);
                }
            }
            catch (e) {
                var value = null;
                try {
                    value = Storage.getCookie(key);
                }
                catch (e) {
                }
                if (!value) {
                    value = Storage.data[key];
                }
                return value;
            }
        }
    };
    Storage.setAuthToken = function (token) {
        Storage.set('glitch_auth_token', token);
    };
    Storage.getAuthToken = function () {
        return Storage.get('glitch_auth_token');
    };
    Storage.eraseCookie = function (name) {
        if (document) {
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
        if (document) {
            document.cookie =
                name +
                    '=' +
                    (value || '') +
                    expires +
                    '; path=/; domain=' +
                    Storage.rootDomain +
                    '; HttpOnly=false; SameSite=none; Secure';
        }
    };
    Storage.getCookie = function (name) {
        if (document) {
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
        var parts = domain.split('.');
        if (parts.length > 2) {
            parts.shift();
        }
        var formattedDomain = parts.join('.');
        formattedDomain = formattedDomain.replace(/^\./, '');
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
        getPayouts: { url: '/users/payouts', method: HTTP_METHODS.GET },
        verifyAccount: { url: '/users/verify', method: HTTP_METHODS.POST },
        getInstagramAccounts: { url: '/users/instagramAccounts', method: HTTP_METHODS.GET },
        getFacebookPages: { url: "/users/facebookPages", method: HTTP_METHODS.GET },
        getSubreddits: { url: "/users/reddit/subreddits", method: HTTP_METHODS.GET },
        getSubredditFlairs: { url: "/users/reddit/redditflairs/{subreddit}", method: HTTP_METHODS.GET },
        search: { url: '/users/search', method: HTTP_METHODS.GET },
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
        }
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
        Storage.set(Session._id_key, null);
        Storage.set(Session._first_name_key, null);
        Storage.set(Session._last_name_key, null);
        Storage.set(Session._email_key, null);
        Storage.set(Session._username_key, null);
    };
    Session.processAuthentication = function (data) {
        Storage.setAuthToken(data.token.access_token);
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
        AIUsage: AIUsage
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

export { Glitch as default };
//# sourceMappingURL=index.js.map
