class LabelManager {
    static initialize(community) {
        LabelManager.community = community;
    }
    static getLabel(labelName, plural, capitalize) {
        let label = LabelManager.community[labelName + (plural ? "_plural" : "_singular")];
        if (capitalize) {
            label = label.charAt(0).toUpperCase() + label.slice(1);
        }
        return label;
    }
    static getUserLabel(plural, capitalize) {
        return LabelManager.getLabel("label_users", plural, capitalize);
    }
    static getCompetitionLabel(plural, capitalize) {
        return LabelManager.getLabel("label_competitions", plural, capitalize);
    }
    static getStreamLabel(plural, capitalize) {
        return LabelManager.getLabel("label_streams", plural, capitalize);
    }
    static getPostLabel(plural, capitalize) {
        return LabelManager.getLabel("label_posts", plural, capitalize);
    }
}

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


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

var process$1 = {
  };

/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (
  ({ hasOwnProperty }) =>
  (obj, prop) =>
    hasOwnProperty.call(obj, prop)
)(Object.prototype);

/**
 * Walk the prototype chain (excluding the shared Object.prototype) looking for
 * an own `prop`. This distinguishes genuine own/inherited members — including
 * class accessors and template prototypes — from members injected via
 * Object.prototype pollution (e.g. `Object.prototype.username = '...'`), which
 * live on Object.prototype itself and are therefore never matched.
 *
 * @param {*} thing The value whose chain to inspect
 * @param {string|symbol} prop The property key to look for
 *
 * @returns {boolean} True when `prop` is owned below Object.prototype
 */
const hasOwnInPrototypeChain = (thing, prop) => {
  let obj = thing;
  const seen = [];

  while (obj != null && obj !== Object.prototype) {
    if (seen.indexOf(obj) !== -1) {
      return false;
    }
    seen.push(obj);

    if (hasOwnProperty(obj, prop)) {
      return true;
    }
    obj = getPrototypeOf(obj);
  }
  return false;
};

/**
 * Read `obj[prop]` only when it is safe from Object.prototype pollution. Own
 * properties and members inherited from a non-Object.prototype source (a class
 * instance or template object) are honored; a value reachable only through a
 * polluted Object.prototype is ignored and `undefined` is returned.
 *
 * @param {*} obj The source object
 * @param {string|symbol} prop The property key to read
 *
 * @returns {*} The resolved value, or undefined when unsafe/absent
 */
const getSafeProp = (obj, prop) =>
  obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : undefined;

const kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};

const typeOfTest = (type) => (thing) => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const { isArray } = Array;

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
function isBuffer(val) {
  return (
    val !== null &&
    !isUndefined(val) &&
    val.constructor !== null &&
    !isUndefined(val.constructor) &&
    isFunction$1(val.constructor.isBuffer) &&
    val.constructor.isBuffer(val)
  );
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
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
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
const isBoolean = (thing) => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (!isObject(val)) {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (
    (prototype === null ||
      prototype === Object.prototype ||
      getPrototypeOf(prototype) === null) &&
    // Treat any genuine (non-Object.prototype-polluted) Symbol.toStringTag or
    // Symbol.iterator as evidence the value is a tagged/iterable type rather
    // than a plain object, while ignoring keys injected onto Object.prototype.
    !hasOwnInPrototypeChain(val, toStringTag) &&
    !hasOwnInPrototypeChain(val, iterator)
  );
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = (val) => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }

  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
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
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = (formData) => formData && typeof formData.getParts !== 'undefined';

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
 * @returns {boolean} True if value is a FileList, otherwise false
 */
const isFileList = kindOfTest('FileList');
const isSet = kindOfTest('Set');

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
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global$1 !== 'undefined') return global$1;
  return {};
}

const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;

const isFormData = (thing) => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction$1(thing.append)) return false;
  const kind = kindOf(thing);
  return (
    kind === 'formdata' ||
    // detect form-data instance
    (kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]')
  );
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = [
  'ReadableStream',
  'Request',
  'Response',
  'Headers',
].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, { allOwnKeys = false } = {}) {
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
    // Buffer check
    if (isBuffer(obj)) {
      return;
    }

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

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }

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
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global$1;
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
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(...objs) {
  const { caseless, skipUndefined } = (isContextDefined(this) && this) || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    // findKey lowercases the key, so caseless lookup only applies to strings —
    // symbol keys are identity-matched.
    const targetKey = (caseless && typeof key === 'string' && findKey(result, key)) || key;
    // Read via own-prop only — a bare `result[targetKey]` walks the prototype
    // chain, so a polluted Object.prototype value could surface here and get
    // copied into the merged result.
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }

    forEach(source, assignValue);

    if (typeof source !== 'object' || isArray(source)) {
      continue;
    }

    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
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
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction$1(val)) {
        Object.defineProperty(a, key, {
          // Null-proto descriptor so a polluted Object.prototype.get cannot
          // hijack defineProperty's accessor-vs-data resolution.
          __proto__: null,
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(a, key, {
          __proto__: null,
          value: val,
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    },
    { allOwnKeys }
  );
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
  if (content.charCodeAt(0) === 0xfeff) {
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
  Object.defineProperty(constructor.prototype, 'constructor', {
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(constructor, 'super', {
    __proto__: null,
    value: superConstructor.prototype,
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
const isTypedArray = ((TypedArray) => {
  // eslint-disable-next-line func-names
  return (thing) => {
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
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
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

const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

const { propertyIsEnumerable } = Object.prototype;

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
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
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
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite((value = +value)) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(
    thing &&
    isFunction$1(thing.append) &&
    thing[toStringTag] === 'FormData' &&
    thing[iterator]
  );
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = (obj) => {
  const visited = new WeakSet();

  const visit = (source) => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }

      if (!('toJSON' in source)) {
        // add-on descent / delete-on-ascent: preserves path semantics, so DAG nodes serialise at every occurrence (see #7230).
        visited.add(source);

        let target;

        if (isSet(source)) {
          target = [];
          for (const value of source) {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && target.push(reducedValue);
          }
        } else {
          target = isArray(source) ? [] : {};

          forEach(source, (value, key) => {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
        }

        visited.delete(source);

        return target;
      }
    }

    return source;
  };

  return visit(obj);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = (thing) =>
  thing &&
  (isObject(thing) || isFunction$1(thing)) &&
  isFunction$1(thing.then) &&
  isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported
    ? ((token, callbacks) => {
        _global.addEventListener(
          'message',
          ({ source, data }) => {
            if (source === _global && data === token) {
              callbacks.length && callbacks.shift()();
            }
          },
          false
        );

        return (cb) => {
          callbacks.push(cb);
          _global.postMessage(token, '*');
        };
      })(`axios@${Math.random()}`, [])
    : (cb) => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction$1(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap =
  typeof queueMicrotask !== 'undefined'
    ? queueMicrotask.bind(_global)
    : (typeof process$1 !== 'undefined' && nextTick) || _setImmediate;

// *********************

const isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);

/**
 * Determine if a value is iterable via an iterator that is NOT sourced solely
 * from a polluted Object.prototype. Use this instead of `isIterable` whenever
 * the iterable comes from untrusted input (e.g. user-supplied header sources),
 * so `Object.prototype[Symbol.iterator] = ...` cannot turn an ordinary object
 * into an attacker-controlled entries iterator.
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value has a non-polluted iterator
 */
const isSafeIterable = (thing) =>
  thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);

var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
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
  hasOwnInPrototypeChain,
  getSafeProp,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable,
  isSafeIterable,
};

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet([
  'age',
  'authorization',
  'content-length',
  'content-type',
  'etag',
  'expires',
  'from',
  'host',
  'if-modified-since',
  'if-unmodified-since',
  'last-modified',
  'location',
  'max-forwards',
  'proxy-authorization',
  'referer',
  'retry-after',
  'user-agent',
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
var parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders &&
    rawHeaders.split('\n').forEach(function parser(line) {
      i = line.indexOf(':');
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();

      const hasKey = utils$1.hasOwnProp(parsed, key);

      if (!key || (hasKey && utils$1.hasOwnProp(ignoreDuplicateOf, key))) {
        return;
      }

      if (key === 'set-cookie') {
        if (hasKey) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = hasKey ? parsed[key] + ', ' + val : val;
      }
    });

  return parsed;
};

function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;

  while (start < end) {
    const code = str.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = str.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === str.length ? str : str.slice(start, end);
}

// The control-code ranges are intentional: header sanitization strips C0/DEL bytes.
// eslint-disable-next-line no-control-regex
const INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g');
// eslint-disable-next-line no-control-regex
const INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');

function sanitizeValue(value, invalidChars) {
  if (utils$1.isArray(value)) {
    return value.map((item) => sanitizeValue(item, invalidChars));
  }

  return trimSPorHTAB(String(value).replace(invalidChars, ''));
}

const sanitizeHeaderValue = (value) =>
  sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);

const sanitizeByteStringHeaderValue = (value) =>
  sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);

function toByteStringHeaderObject(headers) {
  const byteStringHeaders = Object.create(null);

  utils$1.forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });

  return byteStringHeaders;
}

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
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

const parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

function trimOWS(value) {
  let start = 0;
  let end = value.length;

  while (start < end) {
    const code = value.charCodeAt(start);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    start += 1;
  }

  while (end > start) {
    const code = value.charCodeAt(end - 1);

    if (code !== 0x09 && code !== 0x20) {
      break;
    }

    end -= 1;
  }

  return start === 0 && end === value.length ? value : value.slice(start, end);
}

function decodeQuotedString(value) {
  const last = value.length - 1;

  if (last < 1 || value.charCodeAt(0) !== 0x22 || value.charCodeAt(last) !== 0x22) {
    return value;
  }

  let decoded = '';

  for (let i = 1; i < last; i++) {
    const code = value.charCodeAt(i);

    if (code === 0x22) {
      return value;
    }

    if (code === 0x5c) {
      i += 1;

      if (i >= last) {
        return value;
      }
    }

    decoded += value[i];
  }

  return decoded;
}

function parseParameters(value) {
  const parameters = Object.create(null);
  const str = String(value);
  let start = 0;
  let quoted = false;
  let escaped = false;

  function parseParameter(end) {
    const part = trimOWS(str.slice(start, end));
    const equals = part.indexOf('=');

    if (equals < 1) {
      return;
    }

    const name = trimOWS(part.slice(0, equals));

    if (!parameterNameRE.test(name)) {
      return;
    }

    const normalizedName = name.toLowerCase();

    if (
      normalizedName === '__proto__' ||
      normalizedName === 'constructor' ||
      normalizedName === 'prototype'
    ) {
      return;
    }

    const parameterValue = trimOWS(part.slice(equals + 1));
    parameters[normalizedName] = decodeQuotedString(parameterValue);
  }

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (quoted) {
      if (escaped) {
        escaped = false;
      } else if (code === 0x5c) {
        escaped = true;
      } else if (code === 0x22) {
        quoted = false;
      }
    } else if (code === 0x22) {
      quoted = true;
    } else if (code === 0x2c || code === 0x3b) {
      parseParameter(i);
      start = i + 1;
    }
  }

  parseParameter(str.length);

  return parameters;
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
  return header
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true,
    });
  });
}

let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        return;
      }

      const key = utils$1.findKey(self, lHeader);

      if (
        !key ||
        self[key] === undefined ||
        _rewrite === true ||
        (_rewrite === undefined && self[key] !== false)
      ) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isSafeIterable(header)) {
      let obj = Object.create(null),
        dest,
        key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw new TypeError('Object iterator must return a key-value pair');
        }

        key = entry[0];

        if (utils$1.hasOwnProp(obj, key)) {
          dest = obj[key];
          obj[key] = utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
        } else {
          obj[key] = entry[1];
        }
      }

      setHeaders(obj, valueOrRewrite);
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

      return !!(
        key &&
        this[key] !== undefined &&
        (!matcher || matchHeaderValue(this, this[key], key, matcher))
      );
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
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
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
      value != null &&
        value !== false &&
        (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON())
      .map(([header, value]) => header + ': ' + value)
      .join('\n');
  }

  getSetCookie() {
    const value = this.get('set-cookie');
    return utils$1.isArray(value) ? value : value == null || value === false ? [] : [value];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static parseParameters(value) {
    return parseParameters(value);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals =
      (this[$internals] =
      this[$internals] =
        {
          accessors: {},
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
};

AxiosHeaders$1.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    },
  };
});

utils$1.freezeMethods(AxiosHeaders$1);

const REDACTED = '[REDACTED ****]';

function hasOwnOrPrototypeToJSON(source) {
  if (utils$1.hasOwnProp(source, 'toJSON')) {
    return true;
  }

  let prototype = Object.getPrototypeOf(source);

  while (prototype && prototype !== Object.prototype) {
    if (utils$1.hasOwnProp(prototype, 'toJSON')) {
      return true;
    }

    prototype = Object.getPrototypeOf(prototype);
  }

  return false;
}

// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
  const seen = [];

  const visit = (source) => {
    if (source === null || typeof source !== 'object') return source;
    if (utils$1.isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return undefined;

    if (source instanceof AxiosHeaders$1) {
      source = source.toJSON();
    }

    seen.push(source);

    let result;
    if (utils$1.isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!utils$1.isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }

      result = Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!utils$1.isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }

    seen.pop();
    return result;
  };

  return visit(config);
}

function stringifySafely$1(value) {
  try {
    return String(value);
  } catch (err) {
    return '';
  }
}

function aggregateErrorMessage(error) {
  const message = error.errors
    .map((entry) => {
      try {
        return entry && entry.message ? stringifySafely$1(entry.message) : stringifySafely$1(entry);
      } catch (err) {
        return '';
      }
    })
    .filter(Boolean)
    .join('; ');

  return message || error.name || 'AggregateError';
}

let AxiosError$1 = class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    // `AggregateError` (thrown by Node on dual-stack/Happy-Eyeballs connection
    // failures) has an empty `message`; its detail lives in `errors[]`. Without
    // this, the wrapped error surfaces with a blank message (see #6721).
    let message = error.message;
    if (!message && utils$1.isArray(error.errors) && error.errors.length) {
      message = aggregateErrorMessage(error);
    }

    const axiosError = new AxiosError(message, code || error.code, config, request, response);
    // Match native `Error` `cause` semantics: non-enumerable. The wrapped
    // error often carries circular internals (sockets, requests, agents), so
    // an enumerable `cause` makes structured loggers (pino/winston) and any
    // own-property walk throw "Converting circular structure to JSON".
    // Regression from #6982; see #7205. `__proto__: null` mirrors the
    // `message` descriptor below (prototype-pollution-safe descriptor).
    Object.defineProperty(axiosError, 'cause', {
      __proto__: null,
      value: error,
      writable: true,
      enumerable: false,
      configurable: true,
    });
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }

    customProps && Object.assign(axiosError, customProps);
    return axiosError;
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
  constructor(message, code, config, request, response) {
    super(message);

    // Make message enumerable to maintain backward compatibility
    // The native Error constructor sets message as non-enumerable,
    // but axios < v1.13.3 had it as enumerable
    Object.defineProperty(this, 'message', {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true,
    });

    this.name = 'AxiosError';
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }

  toJSON() {
    // Opt-in redaction: when the request config carries a `redact` array, the
    // value of any matching key (case-insensitive, at any depth) is replaced
    // with REDACTED in the serialized snapshot. Undefined or empty leaves the
    // existing serialization behavior unchanged.
    const config = this.config;
    const redactKeys = config && utils$1.hasOwnProp(config, 'redact') ? config.redact : undefined;
    const serializedConfig =
      utils$1.isArray(redactKeys) && redactKeys.length > 0
        ? redactConfig(config, redactKeys)
        : utils$1.toJSONObject(config);

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
      config: serializedConfig,
      code: this.code,
      status: this.status,
    };
  }
};

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError$1.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError$1.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError$1.ECONNABORTED = 'ECONNABORTED';
AxiosError$1.ETIMEDOUT = 'ETIMEDOUT';
AxiosError$1.ECONNREFUSED = 'ECONNREFUSED';
AxiosError$1.ERR_NETWORK = 'ERR_NETWORK';
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError$1.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError$1.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError$1.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError$1.ERR_CANCELED = 'ERR_CANCELED';
AxiosError$1.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError$1.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';

// eslint-disable-next-line strict
var httpAdapter = null;

// Default nesting limit shared with the inverse transform (formDataToJSON) so
// the FormData <-> JSON round-trip stays symmetric.
const DEFAULT_FORM_DATA_MAX_DEPTH = 100;

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
  return path
    .concat(key)
    .map(function each(token, i) {
      // eslint-disable-next-line no-param-reassign
      token = removeBrackets(token);
      return !dots && i ? '[' + token + ']' : token;
    })
    .join(dots ? '.' : '');
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
function toFormData$1(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false,
    },
    false,
    function defined(option, source) {
      // eslint-disable-next-line no-eq-null,eqeqeq
      return !utils$1.isUndefined(source[option]);
    }
  );

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || (typeof Blob !== 'undefined' && Blob);
  const maxDepth = options.maxDepth === undefined ? DEFAULT_FORM_DATA_MAX_DEPTH : options.maxDepth;
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  const stack = [];

  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils$1.isDate(value)) {
      return value.toISOString();
    }

    if (utils$1.isBoolean(value)) {
      return value.toString();
    }

    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.');
    }

    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      if (useBlob && typeof _Blob === 'function') {
        return new _Blob([value]);
      }
      throw new AxiosError$1('Blob is not supported. Use a Buffer instead.', AxiosError$1.ERR_NOT_SUPPORT);
    }

    return value;
  }

  function throwIfMaxDepthExceeded(depth) {
    if (depth > maxDepth) {
      throw new AxiosError$1(
        'Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth,
        AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
    }
  }

  function stringifyWithDepthLimit(value, depth) {
    if (maxDepth === Infinity) {
      return JSON.stringify(value);
    }

    const ancestors = [];

    return JSON.stringify(value, function limitDepth(_key, currentValue) {
      if (!utils$1.isObject(currentValue)) {
        return currentValue;
      }

      while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
        ancestors.pop();
      }

      ancestors.push(currentValue);
      throwIfMaxDepthExceeded(depth + ancestors.length - 1);

      return currentValue;
    });
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

    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }

    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = stringifyWithDepthLimit(value, 1);
      } else if (
        (utils$1.isArray(value) && isFlatArray(value)) ||
        ((utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value)))
      ) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) &&
            formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true
                ? renderKey([key], index, dots)
                : indexes === null
                  ? key
                  : key + '[]',
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

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable,
  });

  function build(value, path, depth = 0) {
    if (utils$1.isUndefined(value)) return;

    throwIfMaxDepthExceeded(depth);

    if (stack.indexOf(value) !== -1) {
      throw new Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils$1.forEach(value, function each(el, key) {
      const result =
        !(utils$1.isUndefined(el) || el === null) &&
        visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);

      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
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
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
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

  params && toFormData$1(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder
    ? (value) => encoder.call(this, value, encode$1)
    : encode$1;

  return this._pairs
    .map(function each(pair) {
      return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '')
    .join('&');
};

/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  url = url || '';

  const _options = utils$1.isFunction(options)
    ? {
        serialize: options,
      }
    : options;

  // Read serializer options pollution-safely: own properties and methods on a
  // class/template prototype are honored, but values injected onto a polluted
  // Object.prototype are ignored.
  const _encode = utils$1.getSafeProp(_options, 'encode') || encode;
  const serializeFn = utils$1.getSafeProp(_options, 'serialize');

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params)
      ? params.toString()
      : new AxiosURLSearchParams(params, _options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');

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
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null,
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
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

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false,
  validateStatusUndefinedResolves: true,
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1,
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = (typeof navigator === 'object' && navigator) || undefined;

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
const hasStandardBrowserEnv =
  hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

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

const origin = (hasBrowserEnv && window.location.href) || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasBrowserEnv: hasBrowserEnv,
    hasStandardBrowserEnv: hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
    navigator: _navigator,
    origin: origin
});

var platform = {
  ...utils,
  ...platform$1,
};

function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options,
  });
}

const MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;

function throwIfDepthExceeded(index) {
  if (index > MAX_DEPTH) {
    throw new AxiosError$1(
      'FormData field is too deeply nested (' + index + ' levels). Max depth: ' + MAX_DEPTH,
      AxiosError$1.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
  }
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z] -> ['foo', 'x', 'y', 'z']
  // foo.x.y.z    -> ['foo', 'x', 'y', 'z']
  // A path is split on `.` and on `[...]` groups. A segment — whether written
  // in dot notation or captured inside brackets — may contain any character
  // except `.`, `[` and `]`, so a key like `user-name` or `user name` is kept
  // literal instead of being split (#5402). `.`, `[` and `]` keep their existing
  // meaning, e.g. `foo[bar.baz]` -> ['foo', 'bar', 'baz'] and `[]` is an array push.
  // Excluding `[` from the bracket group also makes the match fail fast at the
  // next `[`, so a malformed name cannot rescan to the end of the string from
  // every unmatched `[` — parsing stays linear in the length of the name.
  const path = [];
  const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
  let match;

  while ((match = pattern.exec(name)) !== null) {
    throwIfDepthExceeded(path.length);
    path.push(match[0] === '[]' ? '' : match[1] || match[0]);
  }

  return path;
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
    throwIfDepthExceeded(index);

    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = utils$1.isArray(target[name])
          ? target[name].concat(value)
          : [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
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

const own = (obj, key) => (obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : undefined);

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

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || '';
      const hasJSONContentType = contentType.indexOf('application/json') > -1;
      const isObjectPayload = utils$1.isObject(data);

      if (isObjectPayload && utils$1.isHTMLForm(data)) {
        data = new FormData(data);
      }

      const isFormData = utils$1.isFormData(data);

      if (isFormData) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }

      if (
        utils$1.isArrayBuffer(data) ||
        utils$1.isBuffer(data) ||
        utils$1.isStream(data) ||
        utils$1.isFile(data) ||
        utils$1.isBlob(data) ||
        utils$1.isReadableStream(data)
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
        const formSerializer = own(this, 'formSerializer');
        if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
          return toURLEncodedForm(data, formSerializer).toString();
        }

        if (
          (isFileList = utils$1.isFileList(data)) ||
          contentType.indexOf('multipart/form-data') > -1
        ) {
          const env = own(this, 'env');
          const _FormData = env && env.FormData;

          return toFormData$1(
            isFileList ? { 'files[]': data } : data,
            _FormData && new _FormData(),
            formSerializer
          );
        }
      }

      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType('application/json', false);
        return stringifySafely(data);
      }

      return data;
    },
  ],

  transformResponse: [
    function transformResponse(data) {
      const transitional = own(this, 'transitional') || defaults.transitional;
      const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      const responseType = own(this, 'responseType');
      const JSONRequested = responseType === 'json';

      if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
        return data;
      }

      if (
        data &&
        utils$1.isString(data) &&
        ((forcedJSONParsing && !responseType) || JSONRequested)
      ) {
        const silentJSONParsing = transitional && transitional.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;

        try {
          return JSON.parse(data, own(this, 'parseReviver'));
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, own(this, 'response'));
            }
            throw e;
          }
        }
      }

      return data;
    },
  ],

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
    Blob: platform.classes.Blob,
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined,
    },
  },
};

utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query'], (method) => {
  defaults.headers[method] = {};
});

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}

let CanceledError$1 = class CanceledError extends AxiosError$1 {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, AxiosError$1.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
};

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
    reject(new AxiosError$1(
      'Request failed with status code ' + response.status,
      response.status >= 400 && response.status < 500 ? AxiosError$1.ERR_BAD_REQUEST : AxiosError$1.ERR_BAD_RESPONSE,
      response.config,
      response.request,
      response
    ));
  }
}

function parseProtocol(url) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
  return (match && match[1]) || '';
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

    return passed ? Math.round((bytesCount * 1000) / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return throttle((e) => {
    if (!e || typeof e.loaded !== 'number') {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);

    bytesNotified = Math.max(bytesNotified, loaded);

    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true,
    };

    listener(data);
  }, freq);
};

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [
    (loaded) =>
      throttled[0]({
        lengthComputable,
        total,
        loaded,
      }),
    throttled[1],
  ];
};

const asyncDecorator =
  (fn, scheduler = utils$1.asap) =>
  (...args) =>
    scheduler(() => fn(...args));

var isURLSameOrigin = platform.hasStandardBrowserEnv
  ? ((origin, isMSIE) => (url) => {
      url = new URL(url, platform.origin);

      return (
        origin.protocol === url.protocol &&
        origin.host === url.host &&
        (isMSIE || origin.port === url.port)
      );
    })(
      new URL(platform.origin),
      platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
    )
  : () => true;

var cookies = platform.hasStandardBrowserEnv
  ? // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure, sameSite) {
        if (typeof document === 'undefined') return;

        const cookie = [`${name}=${encodeURIComponent(value)}`];

        if (utils$1.isNumber(expires)) {
          cookie.push(`expires=${new Date(expires).toUTCString()}`);
        }
        if (utils$1.isString(path)) {
          cookie.push(`path=${path}`);
        }
        if (utils$1.isString(domain)) {
          cookie.push(`domain=${domain}`);
        }
        if (secure === true) {
          cookie.push('secure');
        }
        if (utils$1.isString(sameSite)) {
          cookie.push(`SameSite=${sameSite}`);
        }

        document.cookie = cookie.join('; ');
      },

      read(name) {
        if (typeof document === 'undefined') return null;
        // Match name=value by splitting on the semicolon separator instead of building a
        // RegExp from `name` — interpolating an unescaped string into a RegExp would let
        // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
        // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
        // "; ", so ignore optional whitespace before each cookie name.
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].replace(/^\s+/, '');
          const eq = cookie.indexOf('=');
          if (eq !== -1 && cookie.slice(0, eq) === name) {
            try {
              return decodeURIComponent(cookie.slice(eq + 1));
            } catch (e) {
              return cookie.slice(eq + 1);
            }
          }
        }
        return null;
      },

      remove(name) {
        this.write(name, '', Date.now() - 86400000, '/');
      },
    }
  : // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {},
      read() {
        return null;
      },
      remove() {},
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
  if (typeof url !== 'string') {
    return false;
  }

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
  if (!relativeURL) {
    return baseURL;
  }

  let end = baseURL.length;

  while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
    end--;
  }

  return baseURL.slice(0, end) + '/' + relativeURL.replace(/^\/+/, '');
}

const malformedHttpProtocol = /^https?:(?!\/\/)/i;
const httpProtocolControlCharacters = /[\t\n\r]/g;

function stripLeadingC0ControlOrSpace(url) {
  let i = 0;
  while (i < url.length && url.charCodeAt(i) <= 0x20) {
    i++;
  }
  return url.slice(i);
}

function normalizeURLForProtocolCheck(url) {
  return stripLeadingC0ControlOrSpace(url).replace(httpProtocolControlCharacters, '');
}

// Redact the parts of a URL that can carry secrets before it is embedded in an
// error message. AxiosError.toJSON() serializes `message` verbatim and errors
// are commonly logged, while the opt-in `config.redact` model only cleans
// config keys — it cannot reach the message. Redact only the genuinely
// sensitive substrings — userinfo (credentials), query parameter values and
// fragment contents — with the same REDACTED marker the config redaction uses,
// while keeping the scheme, host, path and parameter names so the offending
// request stays accurately identifiable.
function redactFragment(fragment) {
  if (!fragment) {
    return fragment;
  }

  return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = '') => {
    return `${separator}${parameterName}${REDACTED}`;
  });
}

function redactSensitiveURLParts(url) {
  const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
  const fragmentIndex = redactedURL.indexOf('#');
  const urlWithoutFragment =
    fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
  const redactedURLWithoutFragment = urlWithoutFragment.replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${REDACTED}`
  );

  if (fragmentIndex === -1) {
    return redactedURLWithoutFragment;
  }

  return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
}

function assertValidHttpProtocolURL(url, config) {
  if (typeof url === 'string') {
    const normalizedURL = normalizeURLForProtocolCheck(url);
    if (malformedHttpProtocol.test(normalizedURL)) {
      throw new AxiosError$1(
        `Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`,
        AxiosError$1.ERR_INVALID_URL,
        config
      );
    }
  }
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
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
  assertValidHttpProtocolURL(requestedURL, config);
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    assertValidHttpProtocolURL(baseURL, config);
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

const headersToObject = (thing) => (thing instanceof AxiosHeaders$1 ? { ...thing } : thing);

const ownEnumerableKeys = (thing) => {
  if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
    return Object.keys(thing).concat(
      Object.getOwnPropertySymbols(thing).filter(
        (symbol) => Object.getOwnPropertyDescriptor(thing, symbol).enumerable
      )
    );
  }
  return Object.keys(thing);
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig$1(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config1 = config1 || {};
  config2 = config2 || {};

  // Use a null-prototype object so that downstream reads such as `config.auth`
  // or `config.baseURL` cannot inherit polluted values from Object.prototype.
  // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
  // ergonomics for user code that relies on it.
  const config = Object.create(null);
  Object.defineProperty(config, 'hasOwnProperty', {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true,
  });

  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({ caseless }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
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

  function getMergedTransitionalOption(prop) {
    const transitional2 = utils$1.hasOwnProp(config2, 'transitional')
      ? config2.transitional
      : undefined;

    if (!utils$1.isUndefined(transitional2)) {
      if (utils$1.isPlainObject(transitional2)) {
        if (utils$1.hasOwnProp(transitional2, prop)) {
          return transitional2[prop];
        }
      } else {
        return undefined;
      }
    }

    const transitional1 = utils$1.hasOwnProp(config1, 'transitional')
      ? config1.transitional
      : undefined;

    if (utils$1.isPlainObject(transitional1) && utils$1.hasOwnProp(transitional1, prop)) {
      return transitional1[prop];
    }

    return undefined;
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (utils$1.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils$1.hasOwnProp(config1, prop)) {
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
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) =>
      mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true),
  };

  utils$1.forEach(ownEnumerableKeys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : undefined;
    const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : undefined;
    const configValue = merge(a, b, prop);
    (utils$1.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  if (
    utils$1.hasOwnProp(config2, 'validateStatus') &&
    utils$1.isUndefined(config2.validateStatus) &&
    getMergedTransitionalOption('validateStatusUndefinedResolves') === false
  ) {
    if (utils$1.hasOwnProp(config1, 'validateStatus')) {
      config.validateStatus = getMergedValue(undefined, config1.validateStatus);
    } else {
      delete config.validateStatus;
    }
  }

  return config;
}

const FORM_DATA_CONTENT_HEADERS = ['content-type', 'content-length'];

/**
 * Apply the headers generated by a FormData implementation to the request headers,
 * honoring the `formDataHeaderPolicy` option: with 'content-only', copy only the
 * content-* headers; otherwise merge all of them.
 *
 * @param {AxiosHeaders} headers - the request headers to mutate
 * @param {Object | null | undefined} formHeaders - headers produced by the FormData implementation
 * @param {String} [policy] - the resolved `formDataHeaderPolicy` config value
 *
 * @returns {void}
 */
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }

  Object.entries(formHeaders || {}).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8$1 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

function resolveConfig(config) {
  const newConfig = mergeConfig$1({}, config);

  // Read only own properties to prevent prototype pollution gadgets
  // (e.g. Object.prototype.baseURL = 'https://evil.com').
  const own = (key) => (utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : undefined);

  const data = own('data');
  let withXSRFToken = own('withXSRFToken');
  const xsrfHeaderName = own('xsrfHeaderName');
  const xsrfCookieName = own('xsrfCookieName');
  let headers = own('headers');
  const auth = own('auth');
  const baseURL = own('baseURL');
  const allowAbsoluteUrls = own('allowAbsoluteUrls');
  const url = own('url');

  newConfig.headers = headers = AxiosHeaders$1.from(headers);

  newConfig.url = buildURL(
    buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig),
    own('params'),
    own('paramsSerializer')
  );

  // HTTP basic authentication
  if (auth) {
    const username = utils$1.getSafeProp(auth, 'username') || '';
    const password = utils$1.getSafeProp(auth, 'password') || '';

    try {
      headers.set(
        'Authorization',
        'Basic ' + btoa(username + ':' + (password ? encodeUTF8$1(password) : ''))
      );
    } catch (e) {
      throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_OPTION_VALUE, config);
    }
  }

  if (utils$1.isFormData(data)) {
    if (
      platform.hasStandardBrowserEnv ||
      platform.hasStandardBrowserWebWorkerEnv ||
      utils$1.isReactNative(data)
    ) {
      headers.setContentType(undefined); // browser/web worker/RN handles it
    } else if (utils$1.isFunction(data.getHeaders)) {
      // Node.js FormData (like form-data package)
      setFormDataHeaders(headers, data.getHeaders(), own('formDataHeaderPolicy'));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    if (utils$1.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }

    // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
    // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
    // the XSRF token cross-origin.
    const shouldSendXSRF =
      withXSRFToken === true || (withXSRFToken == null && isURLSameOrigin(newConfig.url));

    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported &&
  function (config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      const _config = resolveConfig(config);
      let requestData = _config.data;
      const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
      let { responseType, onUploadProgress, onDownloadProgress } = _config;
      let onCanceled;
      let uploadThrottled, downloadThrottled;
      let flushUpload, flushDownload;

      function done() {
        flushUpload && flushUpload(); // flush events
        flushDownload && flushDownload(); // flush events

        _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

        _config.signal && _config.signal.removeEventListener('abort', onCanceled);
      }

      let request = new XMLHttpRequest();

      request.open(_config.method.toUpperCase(), _config.url, true);

      // Set the request timeout in MS
      request.timeout = _config.timeout;

      function onloadend() {
        if (!request) {
          return;
        }
        // Prepare the response
        const responseHeaders = AxiosHeaders$1.from(
          'getAllResponseHeaders' in request && request.getAllResponseHeaders()
        );
        const responseData =
          !responseType || responseType === 'text' || responseType === 'json'
            ? request.responseText
            : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request,
        };

        settle(
          function _resolve(value) {
            resolve(value);
            done();
          },
          function _reject(err) {
            reject(err);
            done();
          },
          response
        );

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
          if (
            request.status === 0 &&
            !(request.responseURL && request.responseURL.startsWith('file:'))
          ) {
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

        reject(new AxiosError$1('Request aborted', AxiosError$1.ECONNABORTED, config, request));
        done();

        // Clean up request
        request = null;
      };

      // Handle low level network errors
      request.onerror = function handleError(event) {
        // Browsers deliver a ProgressEvent in XHR onerror
        // (message may be empty; when present, surface it)
        // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
        const msg = event && event.message ? event.message : 'Network Error';
        const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config, request);
        // attach the underlying event for consumers who want details
        err.event = event || null;
        reject(err);
        done();
        request = null;
      };

      // Handle timeout
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = _config.timeout
          ? 'timeout of ' + _config.timeout + 'ms exceeded'
          : 'timeout exceeded';
        const transitional = _config.transitional || transitionalDefaults;
        if (_config.timeoutErrorMessage) {
          timeoutErrorMessage = _config.timeoutErrorMessage;
        }
        reject(
          new AxiosError$1(
            timeoutErrorMessage,
            transitional.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
            config,
            request
          )
        );
        done();

        // Clean up request
        request = null;
      };

      // Remove Content-Type if data is undefined
      requestData === undefined && requestHeaders.setContentType(null);

      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }

      // Add withCredentials to request if needed
      if (!utils$1.isUndefined(_config.withCredentials)) {
        request.withCredentials = !!_config.withCredentials;
      }

      // Add responseType to request if needed
      if (responseType && responseType !== 'json') {
        request.responseType = _config.responseType;
      }

      // Handle progress if needed
      if (onDownloadProgress) {
        [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
        request.addEventListener('progress', downloadThrottled);
      }

      // Not all browsers support upload events
      if (onUploadProgress && request.upload) {
        [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);

        request.upload.addEventListener('progress', uploadThrottled);

        request.upload.addEventListener('loadend', flushUpload);
      }

      if (_config.cancelToken || _config.signal) {
        // Handle cancellation
        // eslint-disable-next-line func-names
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError$1(null, config, request) : cancel);
          request.abort();
          done();
          request = null;
        };

        _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
        if (_config.signal) {
          _config.signal.aborted
            ? onCanceled()
            : _config.signal.addEventListener('abort', onCanceled);
        }
      }

      const protocol = parseProtocol(_config.url);

      if (protocol && !platform.protocols.includes(protocol)) {
        reject(
          new AxiosError$1(
            'Unsupported protocol ' + protocol + ':',
            AxiosError$1.ERR_BAD_REQUEST,
            config
          )
        );
        done();
        return;
      }

      // Send the request
      request.send(requestData || null);
    });
  };

const composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];

  if (!timeout && !signals.length) {
    return;
  }

  const controller = new AbortController();

  let aborted = false;

  const onabort = function (reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(
        err instanceof AxiosError$1
          ? err
          : new CanceledError$1(err instanceof Error ? err.message : err)
      );
    }
  };

  let timer =
    timeout &&
    setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);

  const unsubscribe = () => {
    if (!signals) { return; }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach((signal) => {
      signal.unsubscribe
        ? signal.unsubscribe(onabort)
        : signal.removeEventListener('abort', onabort);
    });
    signals = null;
  };

  signals.forEach((signal) => {
    if (aborted) {
      return;
    }

    if (signal.aborted) {
      onabort.call(signal);
      return;
    }

    signal.addEventListener('abort', onabort, { once: true });
  });

  const { signal } = controller;

  signal.unsubscribe = () => utils$1.asap(unsubscribe);

  return signal;
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };

  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done, value } = await iterator.next();

          if (done) {
            _onFinish();
            controller.close();
            return;
          }

          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = (bytes += len);
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator.return();
      },
    },
    {
      highWaterMark: 2,
    }
  );
};

/**
 * Estimate data: URL byte lengths *without* allocating large buffers.
 * - Fetch percent-decodes a base64 body before decoding it.
 * - Node's Buffer.from(body, 'base64') sizes its backing allocation from the
 *   raw body, including ignored characters and content after padding.
 * - Non-base64 data is percent-decoded and then encoded as UTF-8.
 */
const isHexDigit = (charCode) =>
  (charCode >= 48 && charCode <= 57) ||
  (charCode >= 65 && charCode <= 70) ||
  (charCode >= 97 && charCode <= 102);

const isPercentEncodedByte = (str, i, len) =>
  i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));

const hexValue = (charCode) => (charCode <= 57 ? charCode - 48 : (charCode & 0xdf) - 55);

const isBase64Char = (charCode) =>
  (charCode >= 65 && charCode <= 90) || // A-Z
  (charCode >= 97 && charCode <= 122) || // a-z
  (charCode >= 48 && charCode <= 57) || // 0-9
  charCode === 43 || // +
  charCode === 47 || // /
  charCode === 45 || // - (base64url)
  charCode === 95; // _ (base64url)

const isBase64Whitespace = (charCode) =>
  charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;

const base64Bytes = (significant) => {
  const groups = Math.floor(significant / 4);
  const remainder = significant % 4;
  return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
};

// Buffer.byteLength(body, 'base64') uses the raw string length as an allocation
// upper bound even when Buffer.from later ignores characters or stops at '='.
const estimateBase64BufferAllocation = (body) => {
  const len = body.length;
  let padding = 0;

  if (len > 0 && body.charCodeAt(len - 1) === 61 /* '=' */) {
    padding++;

    if (len > 1 && body.charCodeAt(len - 2) === 61 /* '=' */) {
      padding++;
    }
  }

  return Math.floor(((len - padding) * 3) / 4);
};

const estimatePercentDecodedBase64Bytes = (body) => {
  const len = body.length;
  let significant = 0;
  let padding = 0;
  let invalid = false;

  for (let i = 0; i < len; i++) {
    let code = body.charCodeAt(i);

    if (code === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
      i += 2;
    }

    if (isBase64Whitespace(code)) {
      continue;
    }

    if (code === 61 /* '=' */) {
      padding++;
      continue;
    }

    if (!isBase64Char(code) || padding > 0) {
      invalid = true;
      continue;
    }

    significant++;
  }

  // Fetch rejects malformed forgiving-base64 input. Returning the raw-size
  // allocation bound keeps that invalid input from becoming a pre-check bypass.
  if (
    invalid ||
    padding > 2 ||
    (padding > 0 && (significant + padding) % 4 !== 0) ||
    significant % 4 === 1
  ) {
    return estimateBase64BufferAllocation(body);
  }

  return base64Bytes(significant);
};

const estimateDataURLBytes = (url, estimateBase64) => {
  if (!url || typeof url !== 'string') return 0;
  if (!url.startsWith('data:')) return 0;

  const comma = url.indexOf(',');
  if (comma < 0) return 0;

  const meta = url.slice(5, comma);
  const body = url.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);

  if (isBase64) {
    return estimateBase64(body);
  }

  // Compute UTF-8 byte length directly from UTF-16 code units without allocating
  // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
  // Valid %XX triplets count as one decoded byte; this matches the bytes that
  // decodeURIComponent(body) would produce before Buffer re-encodes the string.
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      bytes += 1;
      i += 2;
    } else if (c < 0x80) {
      bytes += 1;
    } else if (c < 0x800) {
      bytes += 2;
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
};

/**
 * Estimate the percent-decoded payload size used by Fetch data: URLs.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLDecodedBytes(url) {
  // Fetch removes URL fragments before processing a data: URL.
  const fragmentIndex = typeof url === 'string' ? url.indexOf('#') : -1;

  return estimateDataURLBytes(
    fragmentIndex === -1 ? url : url.slice(0, fragmentIndex),
    estimatePercentDecodedBase64Bytes
  );
}

const VERSION$1 = "1.19.0";

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const { isFunction } = utils$1;

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = (str) =>
  encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  );

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe = (value) => {
  if (!utils$1.isString(value)) {
    return value;
  }

  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};

const maybeWithAuthCredentials = (url) => {
  const protocolIndex = url.indexOf('://');
  let urlToCheck = url;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes('@') || urlToCheck.includes(':');
};

const factory = (env) => {
  const globalObject =
    utils$1.global !== undefined && utils$1.global !== null
      ? utils$1.global
      : globalThis;
  const { ReadableStream, TextEncoder } = globalObject;

  env = utils$1.merge.call(
    {
      skipUndefined: true,
    },
    {
      Request: globalObject.Request,
      Response: globalObject.Response,
    },
    env
  );

  const { fetch: envFetch, Request, Response } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);

  if (!isFetchSupported) {
    return false;
  }

  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);

  const encodeText =
    isFetchSupported &&
    (typeof TextEncoder === 'function'
      ? (
          (encoder) => (str) =>
            encoder.encode(str)
        )(new TextEncoder())
      : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));

  const supportsRequestStream =
    isRequestSupported &&
    isReadableStreamSupported &&
    test(() => {
      let duplexAccessed = false;

      const request = new Request(platform.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          duplexAccessed = true;
          return 'half';
        },
      });

      const hasContentType = request.headers.has('Content-Type');

      if (request.body != null) {
        request.body.cancel();
      }

      return duplexAccessed && !hasContentType;
    });

  const supportsResponseStream =
    isResponseSupported &&
    isReadableStreamSupported &&
    test(() => utils$1.isReadableStream(new Response('').body));

  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body),
  };

  isFetchSupported &&
    (() => {
      ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((type) => {
        !resolvers[type] &&
          (resolvers[type] = (res, config) => {
            let method = res && res[type];

            if (method) {
              return method.call(res);
            }

            throw new AxiosError$1(
              `Response type '${type}' is not supported`,
              AxiosError$1.ERR_NOT_SUPPORT,
              config
            );
          });
      });
    })();

  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }

    if (utils$1.isBlob(body)) {
      return body.size;
    }

    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body,
      });
      return (await _request.arrayBuffer()).byteLength;
    }

    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }

    if (utils$1.isURLSearchParams(body)) {
      body = body + '';
    }

    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };

  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());

    return length == null ? getBodyLength(body) : length;
  };

  return async (config) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
      maxContentLength,
      maxBodyLength,
    } = resolveConfig(config);

    const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
    const own = (key) => (utils$1.hasOwnProp(config, key) ? config[key] : undefined);

    let _fetch = envFetch || fetch;

    responseType = responseType ? (responseType + '').toLowerCase() : 'text';

    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );

    let request = null;

    const unsubscribe =
      composedSignal &&
      composedSignal.unsubscribe &&
      (() => {
        composedSignal.unsubscribe();
      });

    let requestContentLength;

    // AxiosError we raise while the request body is being streamed. Captured
    // by identity so the catch block can surface it directly, regardless of
    // how the runtime wraps the resulting fetch rejection (undici exposes it
    // as `err.cause`; some browsers drop the original error entirely).
    let pendingBodyError = null;

    const maxBodyLengthError = () =>
      new AxiosError$1(
        'Request body larger than maxBodyLength limit',
        AxiosError$1.ERR_BAD_REQUEST,
        config,
        request
      );

    try {
      // HTTP basic authentication
      let auth = undefined;
      const configAuth = own('auth');

      if (configAuth) {
        const username = utils$1.getSafeProp(configAuth, 'username') || '';
        const password = utils$1.getSafeProp(configAuth, 'password') || '';
        auth = {
          username,
          password
        };
      }

      if (maybeWithAuthCredentials(url)) {
        const parsedURL = new URL(url, platform.origin);

        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe(parsedURL.username);
          const urlPassword = decodeURIComponentSafe(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword
          };
        }

        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = '';
          parsedURL.password = '';
          url = parsedURL.href;
        }
      }

      if (auth) {
        headers.delete('authorization');
        headers.set(
          'Authorization',
          'Basic ' + btoa(encodeUTF8((auth.username || '') + ':' + (auth.password || '')))
        );
      }

      // Enforce maxContentLength for data: URLs up-front so we never materialize
      // an oversized payload. The HTTP adapter applies the same check (see http.js
      // "if (protocol === 'data:')" branch).
      if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
        const estimated = estimateDataURLDecodedBytes(url);
        if (estimated > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      // Enforce maxBodyLength against known-size bodies before dispatch using
      // the body's *actual* size — never a caller-declared Content-Length,
      // which could under-report to slip an oversized body past the check.
      // Unknown-size streams return undefined here and are counted per-chunk
      // below as fetch consumes them.
      if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
        const outboundLength = await getBodyLength(data);
        if (typeof outboundLength === 'number' && isFinite(outboundLength)) {
          requestContentLength = outboundLength;
          if (outboundLength > maxBodyLength) {
            throw maxBodyLengthError();
          }
        }
      }

      // A streamed body under maxBodyLength must be counted as fetch consumes
      // it; its size is never trusted from a caller-declared Content-Length.
      const mustEnforceStreamBody =
        hasMaxBodyLength && (utils$1.isReadableStream(data) || utils$1.isStream(data));

      const trackRequestStream = (stream, onProgress, flush) =>
        trackStream(
          stream,
          DEFAULT_CHUNK_SIZE,
          (loadedBytes) => {
            if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
              throw (pendingBodyError = maxBodyLengthError());
            }
            onProgress && onProgress(loadedBytes);
          },
          flush
        );

      if (
        supportsRequestStream &&
        method !== 'get' &&
        method !== 'head' &&
        (onUploadProgress || mustEnforceStreamBody)
      ) {
        requestContentLength =
          requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;

        // A declared length of 0 is only trusted to skip the wrap when we are
        // not enforcing a stream limit (which must not rely on that header).
        if (requestContentLength !== 0 || mustEnforceStreamBody) {
          let _request = new Request(url, {
            method: 'POST',
            body: data,
            duplex: 'half',
          });

          let contentTypeHeader;

          if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
            headers.setContentType(contentTypeHeader);
          }

          if (_request.body) {
            const [onProgress, flush] =
              (onUploadProgress &&
                progressEventDecorator(
                  requestContentLength,
                  progressEventReducer(asyncDecorator(onUploadProgress))
                )) ||
              [];

            data = trackRequestStream(_request.body, onProgress, flush);
          }
        }
      } else if (
        mustEnforceStreamBody &&
        !isRequestSupported &&
        isReadableStreamSupported &&
        method !== 'get' &&
        method !== 'head'
      ) {
        data = trackRequestStream(data);
      } else if (
        mustEnforceStreamBody &&
        isRequestSupported &&
        !supportsRequestStream &&
        method !== 'get' &&
        method !== 'head'
      ) {
        throw new AxiosError$1(
          'Stream request bodies are not supported by the current fetch implementation',
          AxiosError$1.ERR_NOT_SUPPORT,
          config,
          request
        );
      }

      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      // If data is FormData and Content-Type is multipart/form-data without boundary,
      // delete it so fetch can set it correctly with the boundary
      if (utils$1.isFormData(data)) {
        const contentType = headers.getContentType();
        if (
          contentType &&
          /^multipart\/form-data/i.test(contentType) &&
          !/boundary=/i.test(contentType)
        ) {
          headers.delete('content-type');
        }
      }

      // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
      headers.set('User-Agent', 'axios/' + VERSION$1, false);

      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: toByteStringHeaderObject(headers.normalize()),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined,
      };

      request = isRequestSupported && new Request(url, resolvedOptions);

      let response = await (isRequestSupported
        ? _fetch(request, fetchOptions)
        : _fetch(url, resolvedOptions));

      const responseHeaders = AxiosHeaders$1.from(response.headers);

      // Cheap pre-check: if the server honestly declares a content-length that
      // already exceeds the cap, reject before we start streaming.
      if (hasMaxContentLength) {
        const declaredLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      const isStreamResponse =
        supportsResponseStream && (responseType === 'stream' || responseType === 'response');

      if (
        supportsResponseStream &&
        response.body &&
        (onDownloadProgress || hasMaxContentLength || (isStreamResponse && unsubscribe))
      ) {
        const options = {};

        ['status', 'statusText', 'headers'].forEach((prop) => {
          options[prop] = response[prop];
        });

        const responseContentLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());

        const [onProgress, flush] =
          (onDownloadProgress &&
            progressEventDecorator(
              responseContentLength,
              progressEventReducer(asyncDecorator(onDownloadProgress), true)
            )) ||
          [];

        let bytesRead = 0;
        const onChunkProgress = (loadedBytes) => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new AxiosError$1(
                'maxContentLength size of ' + maxContentLength + ' exceeded',
                AxiosError$1.ERR_BAD_RESPONSE,
                config,
                request
              );
            }
          }
          onProgress && onProgress(loadedBytes);
        };

        response = new Response(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }

      responseType = responseType || 'text';

      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](
        response,
        config
      );

      // Fallback enforcement for environments without ReadableStream support
      // (legacy runtimes). Detect materialized size from typed output; skip
      // streams/Response passthrough since the user will read those themselves.
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === 'number') {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === 'number') {
            materializedSize = responseData.size;
          } else if (typeof responseData === 'string') {
            materializedSize =
              typeof TextEncoder === 'function'
                ? new TextEncoder().encode(responseData).byteLength
                : responseData.length;
          }
        }
        if (typeof materializedSize === 'number' && materializedSize > maxContentLength) {
          throw new AxiosError$1(
            'maxContentLength size of ' + maxContentLength + ' exceeded',
            AxiosError$1.ERR_BAD_RESPONSE,
            config,
            request
          );
        }
      }

      !isStreamResponse && unsubscribe && unsubscribe();

      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request,
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      // Safari can surface fetch aborts as a DOMException-like object whose
      // branded getters throw. Prefer our composed signal reason before reading
      // the caught error, preserving timeout vs cancellation semantics.
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError$1) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        if (err !== canceledError) {
          // Non-enumerable to match native Error `cause` semantics so loggers
          // don't recurse into circular fetch internals (see #7205).
          Object.defineProperty(canceledError, 'cause', {
            __proto__: null,
            value: err,
            writable: true,
            enumerable: false,
            configurable: true,
          });
        }
        throw canceledError;
      }

      // Surface a maxBodyLength violation we raised while the request body was
      // being streamed. Matching by identity (rather than reading
      // `err.cause.isAxiosError`) keeps the error deterministic across runtimes
      // and avoids both prototype-pollution reads and mis-attributing a foreign
      // AxiosError that merely happened to land in `err.cause`.
      if (pendingBodyError) {
        request && !pendingBodyError.request && (pendingBodyError.request = request);
        throw pendingBodyError;
      }

      // Re-throw AxiosErrors we raised synchronously (data: URL / content-length
      // pre-checks, response size enforcement) without re-wrapping them.
      if (err instanceof AxiosError$1) {
        request && !err.request && (err.request = request);
        throw err;
      }

      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        const networkError = new AxiosError$1(
          'Network Error',
          AxiosError$1.ERR_NETWORK,
          config,
          request,
          err && err.response
        );
        // Non-enumerable to match native Error `cause` semantics so loggers
        // don't recurse into circular fetch internals (see #7205).
        Object.defineProperty(networkError, 'cause', {
          __proto__: null,
          value: err.cause || err,
          writable: true,
          enumerable: false,
          configurable: true,
        });
        throw networkError;
      }

      throw AxiosError$1.from(err, err && err.code, config, request, err && err.response);
    }
  };
};

const seedCache = new Map();

const getFetch = (config) => {
  let env = (config && config.env) || {};
  const { fetch, Request, Response } = env;
  const seeds = [Request, Response, fetch];

  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;

  while (i--) {
    seed = seeds[i];
    target = map.get(seed);

    target === undefined && map.set(seed, (target = i ? new Map() : factory(env)));

    map = target;
  }

  return target;
};

getFetch();

/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch,
  },
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      // Null-proto descriptors so a polluted Object.prototype.get cannot turn
      // these data descriptors into accessor descriptors on the way in.
      Object.defineProperty(fn, 'name', { __proto__: null, value });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', { __proto__: null, value });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */
const renderReason = (reason) => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = (adapter) =>
  utils$1.isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter$1(adapters, config) {
  adapters = utils$1.isArray(adapters) ? adapters : [adapters];

  const { length } = adapters;
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
        throw new AxiosError$1(`Unknown adapter '${id}'`);
      }
    }

    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }

    rejectedReasons[id || '#' + i] = adapter;
  }

  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) =>
        `adapter ${id} ` +
        (state === false ? 'is not supported by the environment' : 'is not available in the build')
    );

    let s = length
      ? reasons.length > 1
        ? 'since :\n' + reasons.map(renderReason).join('\n')
        : ' ' + renderReason(reasons[0])
      : 'as no adapter specified';

    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      AxiosError$1.ERR_NOT_SUPPORT
    );
  }

  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
var adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: getAdapter$1,

  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters,
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
    throw new CanceledError$1(null, config);
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
  config.data = transformData.call(config, config.transformRequest);

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);

  return adapter(config).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Expose the current response on config so that transformResponse can
      // attach it to any AxiosError it throws (e.g. on JSON parse failure).
      // We clean it up afterwards to avoid polluting the config object.
      config.response = response;
      try {
        response.data = transformData.call(config, config.transformResponse, response);
      } finally {
        delete config.response;
      }

      response.headers = AxiosHeaders$1.from(response.headers);

      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          config.response = reason.response;
          try {
            reason.response.data = transformData.call(
              config,
              config.transformResponse,
              reason.response
            );
          } finally {
            delete config.response;
          }
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }

      return Promise.reject(reason);
    }
  );
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
    return (
      '[Axios v' +
      VERSION$1 +
      "] Transitional option '" +
      opt +
      "'" +
      desc +
      (message ? '. ' + message : '')
    );
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError$1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError$1.ERR_DEPRECATED
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

validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
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
  if (typeof options !== 'object' || options === null) {
    throw new AxiosError$1('options must be an object', AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
    // a non-function validator and cause a TypeError.
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1(
          'option ' + opt + ' must be ' + result,
          AxiosError$1.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1('Unknown option ' + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1,
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager(),
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
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = (() => {
          if (!dummy.stack) {
            return '';
          }

          const firstNewlineIndex = dummy.stack.indexOf('\n');

          return firstNewlineIndex === -1 ? '' : dummy.stack.slice(firstNewlineIndex + 1);
        })();
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex =
              firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines =
              secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);

            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig$1(this.defaults, config);

    const { transitional, paramsSerializer, headers } = config;

    if (transitional !== undefined) {
      validator.assertOptions(
        transitional,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
          advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
          validateStatusUndefinedResolves: validators.transitional(validators.boolean),
        },
        false
      );
    }

    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer,
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function,
          },
          true
        );
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(
      config,
      {
        baseUrl: validators.spelling('baseURL'),
        withXsrfToken: validators.spelling('withXSRFToken'),
      },
      true
    );

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);

    headers &&
      utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'query', 'common'], (method) => {
        delete headers[method];
      });

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      const transitional = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering =
        transitional && transitional.legacyInterceptorReqResOrdering;

      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
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
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
      } catch (error) {
        if (!onRejected) {
          promise = Promise.reject(error);
          break;
        }

        try {
          const rejectedResult = onRejected.call(this, error);

          if (utils$1.isThenable(rejectedResult)) {
            promise = Promise.resolve(rejectedResult).then(() =>
              dispatchRequest.call(this, newConfig)
            );
          }
        } catch (rejectedError) {
          promise = Promise.reject(rejectedError);
        }

        break;
      }
    }

    if (!promise) {
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        promise = Promise.reject(error);
      }
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function (url, config) {
    return this.request(
      mergeConfig$1(config || {}, {
        method,
        url,
        data: config && utils$1.hasOwnProp(config, 'data') ? config.data : undefined,
      })
    );
  };
});

utils$1.forEach(['post', 'put', 'patch', 'query'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(
        mergeConfig$1(config || {}, {
          method,
          headers: isForm
            ? {
                'Content-Type': 'multipart/form-data',
              }
            : {},
          url,
          data,
        })
      );
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  // QUERY is a safe/idempotent read method; multipart form bodies don't fit
  // its semantics, so no queryForm shorthand is generated.
  if (method !== 'query') {
    Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
});

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
let CancelToken$1 = class CancelToken {
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
    this.promise.then((cancel) => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = (onfulfilled) => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise((resolve) => {
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

      token.reason = new CanceledError$1(message, config, request);
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

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
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
      cancel,
    };
  }
};

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
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
function spread$1(callback) {
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
function isAxiosError$1(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}

const HttpStatusCode$1 = {
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
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};

Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});

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
  utils$1.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });

  // Copy context to instance
  utils$1.extend(instance, context, null, { allOwnKeys: true });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$1(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError$1;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel$1;
axios.VERSION = VERSION$1;
axios.toFormData = toFormData$1;

// Expose AxiosError class
axios.AxiosError = AxiosError$1;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread$1;

// Expose isAxiosError
axios.isAxiosError = isAxiosError$1;

// Expose mergeConfig
axios.mergeConfig = mergeConfig$1;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig,
  create,
} = axios;

const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

class Requests {
    constructor(config) {
        Requests.config = config;
    }
    static setBaseUrl(url) {
        Requests.baseUrl = url;
    }
    static setAuthToken(token) {
        Requests.authToken = token;
    }
    static setCommunityID(community_id) {
        Requests.community_id = community_id;
    }
    /**
     * Build an absolute API URL using the currently configured base URL.
     *
     * This is useful for browser primitives such as EventSource that need a URL
     * string instead of an Axios request wrapper.
     */
    static buildUrl(url, params) {
        let path = url;
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .filter(([, value]) => value !== undefined && value !== null && value !== '')
                .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}[]=${encodeURIComponent(item)}`).join('&');
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
                .filter(Boolean)
                .join('&');
            if (queryString) {
                path = `${path}${path.includes('?') ? '&' : '?'}${queryString}`;
            }
        }
        return Requests.baseUrl.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '');
    }
    static request(method, url, data, fileData) {
        let headers = {
            'Content-Type': 'application/json',
        };
        if (Requests.authToken) {
            headers['Authorization'] = `Bearer ${Requests.authToken}`;
        }
        if (fileData) {
            headers['Content-Type'] = 'multipart/form-data';
        }
        url = url.replace(/\/\//g, '/');
        const uri = `${Requests.baseUrl}${url}`;
        const axiosPromise = axios({
            method,
            url: uri,
            data: fileData || data,
            headers,
        });
        return axiosPromise;
    }
    static get(url, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}[]=${encodeURIComponent(item)}`).join('&');
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
                .join('&');
            url = `${url}?${queryString}`;
        }
        if (Requests.community_id) {
            const separator = url.includes('?') ? '&' : '?';
            url = `${url}${separator}community_id=${Requests.community_id}`;
        }
        return Requests.request('GET', url);
    }
    static download(url, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .filter(([, value]) => value !== undefined && value !== null && value !== '')
                .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}[]=${encodeURIComponent(item)}`).join('&');
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
                .filter(Boolean)
                .join('&');
            if (queryString) {
                url = `${url}?${queryString}`;
            }
        }
        if (Requests.community_id) {
            const separator = url.includes('?') ? '&' : '?';
            url = `${url}${separator}community_id=${Requests.community_id}`;
        }
        const headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = `Bearer ${Requests.authToken}`;
        }
        const uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        return axios({
            method: 'GET',
            url: uri,
            headers,
            responseType: 'blob',
        });
    }
    static post(url, data, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        if (Requests.community_id) {
            data = Object.assign(Object.assign({}, data), { communities: [Requests.community_id] });
        }
        return Requests.request('POST', url, data);
    }
    static put(url, data, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        if (Requests.community_id) {
            data = Object.assign(Object.assign({}, data), { community_id: Requests.community_id });
        }
        return Requests.request('PUT', url, data);
    }
    static patch(url, data, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        if (Requests.community_id) {
            data = Object.assign(Object.assign({}, data), { community_id: Requests.community_id });
        }
        return Requests.request('PATCH', url, data);
    }
    static delete(url, params) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        if (Requests.community_id) {
            const separator = url.includes('?') ? '&' : '?';
            url = `${url}${separator}community_id=${Requests.community_id}`;
        }
        return Requests.request('DELETE', url);
    }
    static uploadFile(url, filename, file, data, params, onUploadProgress) {
        // Process URL and params
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        // Prepare FormData
        const formData = new FormData();
        formData.append(filename, file);
        if (Requests.community_id) {
            data = Object.assign(Object.assign({}, data), { communities: [Requests.community_id] });
        }
        for (let key in data) {
            formData.append(key, data[key]);
        }
        // Prepare headers
        let headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = `Bearer ${Requests.authToken}`;
        }
        // Format URL correctly
        const uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        // Make the request
        return axios({
            method: 'POST',
            url: uri,
            data: formData,
            headers,
            onUploadProgress,
        });
    }
    static postFormData(url, formData, params, onUploadProgress) {
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .filter(([, value]) => value !== undefined && value !== null && value !== '')
                .map(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.map((item) => `${key}[]=${encodeURIComponent(item)}`).join('&');
                }
                return `${key}=${encodeURIComponent(value)}`;
            })
                .filter(Boolean)
                .join('&');
            if (queryString) {
                url = `${url}?${queryString}`;
            }
        }
        let headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = `Bearer ${Requests.authToken}`;
        }
        const uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        return axios({
            method: 'POST',
            url: uri,
            data: formData,
            headers,
            onUploadProgress,
        });
    }
    static uploadBlob(url, filename, blob, data, params, onUploadProgress) {
        // Process URL and params
        if (params && Object.keys(params).length > 0) {
            const queryString = Object.entries(params)
                .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
                .join('&');
            url = `${url}?${queryString}`;
        }
        // Prepare FormData
        const formData = new FormData();
        formData.append(filename, blob);
        if (Requests.community_id) {
            data = Object.assign(Object.assign({}, data), { communities: [Requests.community_id] });
        }
        for (let key in data) {
            formData.append(key, data[key]);
        }
        // Prepare headers
        let headers = {};
        if (Requests.authToken) {
            headers['Authorization'] = `Bearer ${Requests.authToken}`;
        }
        // Format URL correctly
        const uri = Requests.baseUrl.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
        // Make the request
        return axios({
            method: 'POST',
            url: uri,
            data: formData,
            headers,
            onUploadProgress,
        });
    }
    // Method adapted for browser environments
    static uploadFileInChunks(file, uploadUrl, onProgress, data, chunkSize) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!chunkSize) {
                chunkSize = 1024 * 1024;
            }
            const fileSize = file.size;
            const totalChunks = Math.ceil(fileSize / chunkSize);
            let currentChunkIndex = 0;
            // Generate a unique identifier for this upload session using the Web Cryptography API
            const array = new Uint32Array(4);
            window.crypto.getRandomValues(array);
            const identifier = Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
            while (currentChunkIndex <= totalChunks) {
                const start = currentChunkIndex * chunkSize;
                const end = Math.min(start + chunkSize, fileSize);
                const chunk = file.slice(start, end);
                const formData = new FormData();
                formData.append('video', chunk, file.name);
                formData.append('chunkIndex', currentChunkIndex.toString());
                formData.append('totalChunks', totalChunks.toString());
                formData.append('identifier', identifier);
                // If there's additional data, append each key-value pair to the formData
                if (data) {
                    for (const key in data) {
                        formData.append(key, data[key]);
                    }
                }
                // Construct the full URL if necessary or use a method to determine the base URL
                const fullUploadUrl = `${Requests.baseUrl}${uploadUrl}`;
                // Make sure the authorization token is included if required
                const headers = {};
                if (Requests.authToken) {
                    headers['Authorization'] = `Bearer ${Requests.authToken}`;
                }
                // Perform the upload
                yield axios.post(fullUploadUrl, formData, {
                    headers,
                    onUploadProgress: (progressEvent) => {
                        progressEvent.loaded; // Bytes uploaded of the current chunk
                        if (onProgress) {
                            onProgress(fileSize, end);
                        }
                    }
                });
                currentChunkIndex++;
            }
        });
    }
    static processRoute(route, data, routeReplace, params) {
        let url = route.url;
        if (routeReplace) {
            for (let key in routeReplace) {
                url = url.replace("{" + key + "}", routeReplace[key]);
            }
        }
        if (route.method == HTTP_METHODS.GET) {
            return Requests.get(url, params);
        }
        else if (route.method == HTTP_METHODS.POST) {
            return Requests.post(url, data, params);
        }
        else if (route.method == HTTP_METHODS.PATCH) {
            return Requests.patch(url, data, params);
        }
        else if (route.method == HTTP_METHODS.PUT) {
            return Requests.put(url, data, params);
        }
        else if (route.method == HTTP_METHODS.DELETE) {
            return Requests.delete(url, params);
        }
        return Requests.get(url);
    }
}
Requests.baseUrl = "";
Requests.authToken = "";
Requests.community_id = "";

class Storage {
    static setRootDomain(rootDomain) {
        Storage.rootDomain = rootDomain;
    }
    static getStorageKey(key) {
        return Storage.rootDomain ? `${Storage.rootDomain}:${key}` : key;
    }
    static shouldShareAcrossSubdomains(key) {
        return !!Storage.rootDomain && Storage.crossDomainKeys.has(key);
    }
    static set(key, value) {
        Storage.data[key] = value;
        if (typeof window !== 'undefined') {
            try {
                const serializedValue = JSON.stringify(value);
                window.localStorage.setItem(Storage.getStorageKey(key), serializedValue);
            }
            catch (e) {
                try {
                    const serializedValue = JSON.stringify(value);
                    window.sessionStorage.setItem(Storage.getStorageKey(key), serializedValue);
                }
                catch (e) { }
            }
        }
        // Important: shared session keys must be written to a root-domain cookie.
        if (Storage.shouldShareAcrossSubdomains(key)) {
            if (value === null || value === undefined) {
                Storage.eraseCookie(key);
            }
            else {
                Storage.setCookie(key, value, 31);
            }
        }
    }
    static get(key) {
        // Important: for shared session keys, cookie must win over localStorage.
        // Otherwise stale www.glitch.fun localStorage can override the real shared cookie.
        if (Storage.shouldShareAcrossSubdomains(key)) {
            try {
                const cookieValue = Storage.getCookie(key);
                if (cookieValue !== null && cookieValue !== undefined && cookieValue !== 'null') {
                    return cookieValue;
                }
            }
            catch (e) { }
        }
        if (typeof window !== 'undefined') {
            try {
                const serializedValue = window.localStorage.getItem(Storage.getStorageKey(key));
                if (serializedValue !== null)
                    return JSON.parse(serializedValue);
            }
            catch (e) {
                try {
                    const serializedValue = window.sessionStorage.getItem(Storage.getStorageKey(key));
                    if (serializedValue !== null)
                        return JSON.parse(serializedValue);
                }
                catch (e) { }
            }
        }
        try {
            const cookieValue = Storage.getCookie(key);
            if (cookieValue !== null && cookieValue !== undefined && cookieValue !== 'null') {
                return cookieValue;
            }
        }
        catch (e) { }
        return Storage.data[key];
    }
    static setAuthToken(token) {
        Storage.set('glitch_auth_token', token);
    }
    static getAuthToken() {
        const token = Storage.get('glitch_auth_token');
        return token === 'null' || !token ? null : token;
    }
    static eraseCookie(name) {
        if (typeof document === 'undefined')
            return;
        // Clear host-only cookie.
        document.cookie =
            `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`;
        // Clear root-domain cookie.
        if (Storage.rootDomain) {
            document.cookie =
                `${name}=; Path=/; Domain=${Storage.rootDomain}; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`;
        }
    }
    static setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; Expires=' + date.toUTCString();
        }
        if (typeof document !== 'undefined') {
            const encodedValue = encodeURIComponent(JSON.stringify(value));
            document.cookie =
                `${name}=${encodedValue}${expires}; Path=/; Domain=${Storage.rootDomain}; SameSite=Lax; Secure`;
        }
    }
    static getCookie(name) {
        if (typeof document !== 'undefined') {
            const nameEQ = name + '=';
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    const rawValue = c.substring(nameEQ.length, c.length);
                    try {
                        const decodedValue = decodeURIComponent(rawValue);
                        return JSON.parse(decodedValue);
                    }
                    catch (e) {
                        try {
                            return decodeURIComponent(rawValue);
                        }
                        catch (e2) {
                            return rawValue;
                        }
                    }
                }
            }
        }
        return null;
    }
    static setTokenExpiry(expiresInSeconds) {
        const expiryTime = Date.now() + expiresInSeconds * 1000;
        Storage.set('glitch_token_expiry', expiryTime);
    }
    static getTokenExpiry() {
        const expiry = Storage.get('glitch_token_expiry');
        return expiry ? parseInt(String(expiry), 10) : null;
    }
    static isTokenExpired() {
        const expiry = this.getTokenExpiry();
        if (!expiry)
            return false;
        return Date.now() > expiry;
    }
}
Storage.rootDomain = '';
Storage.data = {};
Storage.crossDomainKeys = new Set([
    'glitch_auth_token',
    'glitch_token_expiry',
    'user_id',
    'user_first_name',
    'user_last_name',
    'username',
    'email',
    'session_id',
    'community_id',
]);

/**
 * Config
 *
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
class Config {
    /**
     * Set the configuration
     *
     * @param baseUrl The url base endpoint of the api
     * @param authToken The JSON Web Token
     */
    static setConfig(baseUrl, authToken, lock) {
        this.setBaseUrl(baseUrl, lock);
        this.setAuthToken(authToken);
        Requests.setBaseUrl(baseUrl);
        Requests.setAuthToken(authToken);
    }
    /**
     * Sets the endpoint for the API
     *
     * @param baseUrl The url that connects to the APIs base
     * @param lock If set to true, will lock the baseUrl so it cannot be changed
     */
    static setBaseUrl(baseUrl, lock) {
        if (!this._baseUrlLocked) {
            Config._baseUrl = baseUrl;
            Requests.setBaseUrl(baseUrl);
        }
        if (lock) {
            this._baseUrlLocked = true;
        }
    }
    /**
     * Gets the base URL
     */
    static getBaseUrl() {
        return Config._baseUrl;
    }
    /**
     * Set the JSON Web Token (JWT) that will be passed to the API
     *
     * @param authToken The JWT
     */
    static setAuthToken(authToken) {
        Config._authToken = authToken;
        Requests.setAuthToken(authToken);
    }
    /**
    * Gets the auth token
    */
    static getAuthToken() {
        return Config._authToken;
    }
    /**
     * Set the community to be associated with this config through
     *
     * @param community The object of the community
     */
    static setCommunity(community) {
        Config._community = community;
        Requests.setCommunityID(community.id);
        LabelManager.initialize(community);
    }
    /**
     * Sets the root level domain so data can be accessed across
     * multiple subdomains
     *
     * @param domain The domain ie: example.com
     */
    static setRootDomain(domain) {
        if (!domain) {
            console.error("setRootDomain: domain is undefined or null");
            return;
        }
        // If the domain already starts with a dot, keep it.
        // If not, and it's a standard domain, we usually want the dot for subdomains.
        let formattedDomain = domain;
        // REMOVE THIS LINE: formattedDomain = formattedDomain.replace(/^\./, '');
        // We WANT the dot.
        this._rootDomain = formattedDomain;
        Storage.setRootDomain(formattedDomain);
    }
    /**
     * Gets the root domain
     */
    static getRootDomain() {
        return this._rootDomain;
    }
    /**
     * Gets base url
     */
    static get baseUrl() {
        return Config._baseUrl;
    }
    /**
     * Gets auth token
     */
    static get authToken() {
        return Config._authToken;
    }
    /**
     * Gets the community currently associated
     */
    static get getCommunity() {
        return Config._community;
    }
    /**
    * Checks if the base URL is locked
    */
    static isBaseUrlLocked() {
        return this._baseUrlLocked;
    }
}
Config._baseUrlLocked = false;

class AuthRoutes {
}
AuthRoutes.routes = {
    login: { url: '/auth/login', method: HTTP_METHODS.POST },
    register: { url: '/auth/register', method: HTTP_METHODS.POST },
    one_time_login: { url: '/auth/oneTimeLoginWithToken', method: HTTP_METHODS.POST },
    forgot_password: { url: '/auth/forgotpassword', method: HTTP_METHODS.POST },
    reset_password: { url: '/auth/resetpassword', method: HTTP_METHODS.POST },
};

class Auth {
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
    static loginWithEmail(email, password) {
        return Requests.post(AuthRoutes.routes.login.url, { email: email, password: password });
    }
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
    static loginWithUsername(username, password) {
        return Requests.post(AuthRoutes.routes.login.url, { username: username, password: password });
    }
    /**
     * Attempts to register a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @param data The data the user can register with.
     *
     * @returns A promise
     */
    static register(data) {
        return Requests.processRoute(AuthRoutes.routes.register, data);
    }
    /**
     * Request an authentication token to faciliate a one time login of an user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @returns promise
     */
    static oneTimeLogin(token) {
        return Requests.processRoute(AuthRoutes.routes.one_time_login, { token: token });
    }
    /**
     * Execute the password reset process using a user's email address.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authForgotPassword
     *
     * @param email The email address
     *
     * @returns promise
     */
    static forgotPasswordWithEmail(email) {
        return Requests.processRoute(AuthRoutes.routes.forgot_password, { email: email });
    }
    /**
     * Resets the users password after the forgot password has been executed.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authResetPassword
     *
     * @param data The parameters required to reset the password.
     *
     * @returns promise
     */
    static resetPassword(data) {
        return Requests.processRoute(AuthRoutes.routes.reset_password, data);
    }
}

class AccessKeysRoute {
}
AccessKeysRoute.routes = {
    list: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.GET },
    store: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.POST },
    delete: { url: '/keys/{key_id}', method: HTTP_METHODS.DELETE },
    sendEmail: { url: '/keys/{key_id}/send-email', method: HTTP_METHODS.POST },
};

class AccessKeys {
    /**
     * List all access keys for a given title.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/get_titles__title_id__keys
     *
     * @param title_id The UUID of the title.
     * @param params Optional query parameters for pagination.
     * @returns promise
     */
    static list(title_id, params) {
        return Requests.processRoute(AccessKeysRoute.routes.list, undefined, { title_id }, params);
    }
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
    static store(title_id, data, params) {
        return Requests.processRoute(AccessKeysRoute.routes.store, data, { title_id }, params);
    }
    /**
     * Deletes an unassigned access key.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/delete_keys__key_id_
     *
     * @param key_id The UUID of the access key to delete.
     * @returns promise
     */
    static delete(key_id, params) {
        return Requests.processRoute(AccessKeysRoute.routes.delete, {}, { key_id }, params);
    }
    /**
     * Emails the assigned key to the influencer.
     *
     * @param key_id The UUID of the access key.
     * @returns promise
     */
    static sendEmail(key_id) {
        return Requests.processRoute(AccessKeysRoute.routes.sendEmail, {}, { key_id });
    }
}

class CompetitionRoutes {
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

class Competitions {
    /**
     * List all the competitions
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(CompetitionRoutes.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.create, data, undefined, params);
    }
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
    static update(competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.update, data, { competition_id: competition_id }, params);
    }
    /**
     * Retrieve the information for a single competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     *
     * @param competition_id The id fo the competition to retrieve.
     *
     * @returns promise
     */
    static view(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.view, {}, { competition_id: competition_id }, params);
    }
    /**
     * Deletes a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     *
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    static delete(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.delete, {}, { competition_id: competition_id }, params);
    }
    /**
     * Add a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static addTeam(competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.addTeam, { team_id: team_id }, { competition_id: competition_id });
    }
    /**
     * Adds participant
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addParticipant
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static addParticipant(competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.addParticipant, { user_id: user_id }, { competition_id: competition_id });
    }
    /**
     * Register a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static registerTeam(competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.registerTeam, { team_id: team_id }, { competition_id: competition_id });
    }
    /**
     * Register a user
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerParticipant
     *
     * @param competition_id
     * @returns promise
     */
    static registerUser(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.registerUser, {}, { competition_id: competition_id });
    }
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
    static syncRounds(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.syncRounds, { competition_id: competition_id });
    }
    /**
     * auto generate team brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateTeamBrackets
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static autoGenerate(competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerate, {}, { competition_id: competition_id, round_id: round_id });
    }
    /**
     * auto generate user brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateUserBrackets
     *
     * @param competition_id
     * @returns promise
     */
    static autoGenerateUserBrackets(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerateUserBrackets, {}, { competition_id: competition_id });
    }
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
    static uploadCompetitionMainImageFile(competition_id, file, data, params) {
        let url = CompetitionRoutes.routes.uploadMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadCompetitionMainImageBlob(competition_id, blob, data, params) {
        let url = CompetitionRoutes.routes.uploadMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadCompetitionBannerImageFile(competition_id, file, data, params) {
        let url = CompetitionRoutes.routes.uploadBannerImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadCompetitionsBannerImageBlob(competition_id, blob, data, params) {
        let url = CompetitionRoutes.routes.uploadBannerImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    /**
     * Invites
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserInviteList
     *
     * @param competition_id
     * @returns promise
     */
    static invites(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.invites, {}, { competition_id: competition_id });
    }
    /**
     * Sends invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionSendInvite
     *
     * @param competition_id
     * @returns promise
     */
    static sendInvite(competition_id) {
        return Requests.processRoute(CompetitionRoutes.routes.sendInvite, {}, { competition_id: competition_id });
    }
    /**
     * Accept invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionAcceptInvite
     *
     * @param competition_id
     * @param token
     * @returns promise
     */
    static acceptInvite(competition_id, token) {
        return Requests.processRoute(CompetitionRoutes.routes.acceptInvite, { token: token }, { competition_id: competition_id });
    }
    /**
     * Round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketList1
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static brackets(competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.brackets, {}, { round_id: round_id, competition_id: competition_id });
    }
    /**
     * Store round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketStorage
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static createBracket(competition_id, round_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.bracketStore, data, { round_id: round_id, competition_id: competition_id });
    }
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
    static showBracket(competition_id, round_id, bracket_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showBracket, {}, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    }
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
    static updateBracket(competition_id, round_id, bracket_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, data, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    }
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
    static destroyBracket(competition_id, round_id, bracket_id) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyBracket, {}, { round_id: round_id, bracket_id: bracket_id, competition_id: competition_id });
    }
    /**
     * List round
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundList
     *
     * @param competition_id
     * @returns promise
     */
    static rounds(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.rounds, {}, { competition_id: competition_id });
    }
    /**
     * Create a new round for competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundStorage
     *
     * @param competition_id
     * @returns promise
     */
    static createRound(competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.roundStore, data, { competition_id: competition_id });
    }
    /**
     * Retrieve the information for a single round.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundShow
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static showRound(competition_id, round_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showRound, {}, { round_id: round_id, competition_id: competition_id });
    }
    /**
     * Updating resource in storage with new information.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static updateRound(competition_id, round_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, data, { round_id: round_id, competition_id: competition_id });
    }
    /**
     * Deletes the round for the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static destroyRound(competition_id, round_id) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyRound, {}, { round_id: round_id, competition_id: competition_id });
    }
    /**
     * Retrieve a list of teams associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamList
     *
     * @param competition_id
     * @returns promise
     */
    static team(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.team, {}, { competition_id: competition_id });
    }
    /**
     * Associate a new team with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamStorage
     *
     * @param competition_id
     * @returns promise
     */
    static createCompetitionTeam(competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamStore, data, { competition_id: competition_id });
    }
    /**
     * Display the contents of a single team associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceTeamShow
     *
     * @param competition_id The id of the competition
     * @param team_id The id of the team
     * @returns promise
     */
    static showTeam(competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showTeam, {}, { team_id: team_id, competition_id: competition_id });
    }
    /**
     * Update the team information associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static updateTeam(competition_id, team_id, data) {
        return Requests.processRoute(CompetitionRoutes.routes.updateTeam, data, { team_id: team_id, competition_id: competition_id });
    }
    /**
     * Removes the team from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static destroyTeam(competition_id, team_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyTeam, {}, { team_id: team_id, competition_id: competition_id });
    }
    /**
     * List all the users associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static users(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.users, {}, { competition_id: competition_id });
    }
    /**
     * Associate a new users with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createCompetitionUser
     *
     * @param competition_id
     * @returns promise
     */
    static createCompetitionUser(competition_id, data) {
        return Requests.processRoute(CompetitionRoutes.routes.competitionUser, data, { competition_id: competition_id });
    }
    /**
     * Show a single user by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static showCompetitionUser(competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showCompetitionUser, {}, { user_id: user_id, competition_id: competition_id });
    }
    /**
     * Update the user associated with competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static updateCompetitionUser(competition_id, user_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateCompetitionUser, data, { user_id: user_id, competition_id: competition_id });
    }
    /**
     * Remove the associated user from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static destroyCompetitionUser(competition_id, user_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyCompetitionUser, {}, { user_id: user_id, competition_id: competition_id });
    }
    /**
     * List all the venues associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/venueList
     *
     * @param competition_id
     * @returns promise
     */
    static venues(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.venues, {}, { competition_id: competition_id });
    }
    /**
     * Creating a new venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createVenue
     *
     * @param competition_id
     * @returns promise
     */
    static createVenue(competition_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.newVenue, data, { competition_id: competition_id });
    }
    /**
     * Show a single venue by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static showVenue(competition_id, venue_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.showVenue, {}, { venue_id: venue_id, competition_id: competition_id });
    }
    /**
     * Update the venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static updateVenue(competition_id, venue_id, data, params) {
        return Requests.processRoute(CompetitionRoutes.routes.updateVenue, data, { competition_id: competition_id, venue_id: venue_id });
    }
    /**
     * Deletes the venue from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static destroyVenue(competition_id, venue_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.destroyVenue, {}, { competition_id: competition_id, venue_id: venue_id });
    }
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
    static uploadVenueMainImageFile(competition_id, file, data, params) {
        let url = CompetitionRoutes.routes.uploadVenueMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadVenueMainImageBlob(competition_id, blob, data, params) {
        let url = CompetitionRoutes.routes.uploadVenueMainImage.url.replace('{competition_id}', competition_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    /**
     * Get a leaderboard by a users points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static userPointsLeaderboard(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.userPointsLeaderboard, {}, { competition_id: competition_id }, params);
    }
    /**
     * Get a leaderboard by a users wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardUserWins
     *
     * @param competition_id
     * @returns promise
     */
    static userWinsLeaderboard(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.userWinsLeaderboard, {}, { competition_id: competition_id }, params);
    }
    /**
     * Get a leaderboard by a teams points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static teamPointsLeaderboard(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamPointsLeaderboard, {}, { competition_id: competition_id }, params);
    }
    /**
     * Get a leaderboard by a teams wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamWins
     *
     * @param competition_id
     * @returns promise
     */
    static teamWinsLeaderboard(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.teamWinsLeaderboard, {}, { competition_id: competition_id }, params);
    }
    /**
     * Get all leaderboards.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamPoints
     *
     * @param competition_id
     * @returns promise
     */
    static allLeaderboards(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.allLeaderboards, {}, { competition_id: competition_id }, params);
    }
    /**
     * Gets all the information about a competition for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderboardsAll
     *
     * @param competition_id
     * @returns promise
     */
    static me(competition_id, params) {
        return Requests.processRoute(CompetitionRoutes.routes.me, {}, { competition_id: competition_id }, params);
    }
}

/**
 * AdsRoute holds all the endpoint definitions for:
 * - Ad Campaigns
 * - Ad Groups (Ad Sets)
 * - Ads (Creatives)
 * - Ad Group Triggers
 */
class AdsRoute {
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
    getDetailedBreakdownReport: {
        url: "/ads/reports/detailed-breakdown",
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
    reportSkanAttributionPostback: {
        url: "/.well-known/appattribution/report-attribution",
        method: HTTP_METHODS.POST,
    },
};

class Ads {
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
    static listCampaigns(params) {
        return Requests.processRoute(AdsRoute.routes.getCampaigns, undefined, undefined, params);
    }
    /**
     * Create a new Ad Campaign.
     *
     * @param data  The Ad Campaign payload (JSON) to create
     * @param params Optional query parameters
     * @returns The newly created AdCampaign resource
     */
    static createCampaign(data, params) {
        return Requests.processRoute(AdsRoute.routes.createCampaign, data, {}, params);
    }
    /**
     * Retrieve a single Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to fetch
     * @param params Optional query parameters
     * @returns The requested AdCampaign resource
     */
    static viewCampaign(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveCampaign, {}, { campaign_id: campaign_id }, params);
    }
    /**
     * Update an existing Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to update
     * @param data  The partial or full updated AdCampaign payload
     * @param params Optional query parameters
     * @returns The updated AdCampaign resource
     */
    static updateCampaign(campaign_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateCampaign, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Delete an Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteCampaign(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteCampaign, {}, { campaign_id: campaign_id }, params);
    }
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
    static listGroups(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGroups, {}, { campaign_id }, params);
    }
    /**
     * Create a new Ad Group (ad set) under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param data The AdGroup creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroup resource
     */
    static createGroup(campaign_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.createGroup, data, { campaign_id }, params);
    }
    /**
     * Retrieve a single Ad Group by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to fetch
     * @param params Optional query parameters
     * @returns The requested AdGroup resource
     */
    static viewGroup(campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveGroup, {}, { campaign_id, group_id }, params);
    }
    /**
     * Update an Ad Group (ad set) by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to update
     * @param data Updated fields for the AdGroup
     * @param params Optional query parameters
     * @returns The updated AdGroup resource
     */
    static updateGroup(campaign_id, group_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateGroup, data, { campaign_id, group_id }, params);
    }
    /**
     * Delete an Ad Group (ad set) by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteGroup(campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteGroup, {}, { campaign_id, group_id }, params);
    }
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
    static listAds(params) {
        return Requests.processRoute(AdsRoute.routes.getAds, undefined, undefined, params);
    }
    /**
     * Create a new Ad (creative).
     *
     * @param data The Ad creation payload
     * @param params Optional query parameters
     * @returns The newly created Ad resource
     */
    static createAd(data, params) {
        return Requests.processRoute(AdsRoute.routes.createAd, data, {}, params);
    }
    /**
     * Retrieve a single Ad by ID.
     *
     * @param ad_id The UUID of the Ad to fetch
     * @param params Optional query parameters
     * @returns The requested Ad resource
     */
    static viewAd(ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveAd, {}, { ad_id }, params);
    }
    /**
     * Update an existing Ad by ID.
     *
     * @param ad_id The UUID of the Ad to update
     * @param data The partial or full Ad payload
     * @param params Optional query parameters
     * @returns The updated Ad resource
     */
    static updateAd(ad_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateAd, data, { ad_id }, params);
    }
    /**
     * Delete an Ad by ID.
     *
     * @param ad_id The UUID of the Ad to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteAd(ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteAd, {}, { ad_id }, params);
    }
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
    static listTriggers(campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.getTriggers, {}, { campaign_id, group_id }, params);
    }
    /**
     * Create a new Ad Group Trigger.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param data The trigger creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroupTrigger resource
     */
    static createTrigger(campaign_id, group_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.createTrigger, data, { campaign_id, group_id }, params);
    }
    /**
     * Retrieve a single Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns The requested AdGroupTrigger resource
     */
    static viewTrigger(campaign_id, group_id, trigger_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveTrigger, {}, { campaign_id, group_id, trigger_id }, params);
    }
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
    static updateTrigger(campaign_id, group_id, trigger_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateTrigger, data, { campaign_id, group_id, trigger_id }, params);
    }
    /**
     * Delete an Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteTrigger(campaign_id, group_id, trigger_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteTrigger, {}, { campaign_id, group_id, trigger_id }, params);
    }
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
    static listCampaignBusinesses(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignBusinesses, undefined, // no request body
        { campaign_id }, // path params
        params // query params
        );
    }
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
    static listCampaignAdAccounts(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignAdAccounts, undefined, { campaign_id }, params);
    }
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
    static listCampaignFundingInstruments(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getCampaignFundingInstruments, undefined, { campaign_id }, params);
    }
    /**
   * GET /ads/reddit/targeting/carriers
   *
   * Example usage:
   *   Ads.listRedditCarriers({ scheduler_id: 'uuid-of-scheduler', 'page.size': 50 })
   */
    static listRedditCarriers(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditCarriers, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/communities?names=sub1,sub2
     */
    static listRedditCommunities(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditCommunities, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/communities/search?query=xyz
     */
    static searchRedditCommunities(params) {
        return Requests.processRoute(AdsRoute.routes.searchRedditCommunities, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/devices
     */
    static listRedditDevices(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditDevices, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/geolocations
     */
    static listRedditGeolocations(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditGeolocations, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/interests
     */
    static listRedditInterests(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditInterests, undefined, undefined, params);
    }
    /**
     * GET /ads/reddit/targeting/third_party_audiences
     */
    static listRedditThirdPartyAudiences(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditThirdPartyAudiences, undefined, undefined, params);
    }
    /**
   * Sync an Ad Campaign with the remote platform
   *
   * @param campaign_id The UUID of the campaign to sync
   * @param params Optional query parameters
   * @returns The synced AdCampaign resource
   */
    static syncCampaign(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncCampaign, undefined, { campaign_id }, params);
    }
    /**
     * Sync an Ad Group with the remote platform
     *
     * @param campaign_id The UUID of the parent campaign
     * @param group_id The UUID of the ad group to sync
     * @param params Optional query parameters
     * @returns The synced AdGroup resource
     */
    static syncGroup(campaign_id, group_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncGroup, undefined, { campaign_id, group_id }, params);
    }
    static listRedditAdPosts(params) {
        return Requests.processRoute(AdsRoute.routes.getRedditAdPosts, undefined, undefined, params);
    }
    /** Create a Reddit ad-style social-media post */
    static createRedditAdPost(data, params) {
        return Requests.processRoute(AdsRoute.routes.createRedditAdPost, data, {}, params);
    }
    /** Retrieve a single Reddit ad-style social-media post */
    static viewRedditAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveRedditAdPost, {}, { post_id }, params);
    }
    /** Update a Reddit ad-style social-media post */
    static updateRedditAdPost(post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateRedditAdPost, data, { post_id }, params);
    }
    static listTwitterAdPosts(params) {
        return Requests.processRoute(AdsRoute.routes.getTwitterAdPosts, undefined, undefined, params);
    }
    static createTwitterAdPost(data, params) {
        return Requests.processRoute(AdsRoute.routes.createTwitterAdPost, data, {}, params);
    }
    static viewTwitterAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveTwitterAdPost, {}, { post_id }, params);
    }
    static updateTwitterAdPost(post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateTwitterAdPost, data, { post_id }, params);
    }
    static deleteTwitterAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteTwitterAdPost, {}, { post_id }, params);
    }
    static listFacebookAdPosts(params) {
        return Requests.processRoute(AdsRoute.routes.getFacebookAdPosts, undefined, undefined, params);
    }
    static createFacebookAdPost(data, params) {
        return Requests.processRoute(AdsRoute.routes.createFacebookAdPost, data, {}, params);
    }
    static viewFacebookAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.retrieveFacebookAdPost, {}, { post_id }, params);
    }
    static updateFacebookAdPost(post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateFacebookAdPost, data, { post_id }, params);
    }
    static deleteFacebookAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteFacebookAdPost, {}, { post_id }, params);
    }
    // TikTok Uploads: FILE
    static tiktokUploadImageFile(file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadImage.url, 'image_file', file, data, params, onUploadProgress);
    }
    static tiktokUploadVideoFile(file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadVideo.url, 'video_file', file, data, params, onUploadProgress);
    }
    static tiktokUploadMusicFile(file, data, params, onUploadProgress) {
        return Requests.uploadFile(AdsRoute.routes.tiktokUploadMusic.url, 'music_file', file, data, params, onUploadProgress);
    }
    // TikTok Uploads: BLOB
    static tiktokUploadImageBlob(blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadImage.url, 'image_file', blob, data, params, onUploadProgress);
    }
    static tiktokUploadVideoBlob(blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadVideo.url, 'video_file', blob, data, params, onUploadProgress);
    }
    static tiktokUploadMusicBlob(blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(AdsRoute.routes.tiktokUploadMusic.url, 'music_file', blob, data, params, onUploadProgress);
    }
    static tiktokGetMediaInfo(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokGetMediaInfo, undefined, undefined, params);
    }
    /**
 * Sync an Ad with the remote platform.
 *
 * @param ad_id  UUID of the ad to sync
 * @param params Optional query parameters
 * @returns      The synced Ad resource
 */
    static syncAd(ad_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncAd, undefined, { ad_id }, params);
    }
    /**
 * POST /ads/facebook/targeting/search
 */
    static facebookTargetingSearch(data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSearch, data, undefined, params);
    }
    /**
     * GET /ads/facebook/targeting/geo_search
     */
    static facebookGeoSearch(params) {
        return Requests.processRoute(AdsRoute.routes.facebookGeoSearch, undefined, undefined, params);
    }
    /**
     * GET /ads/facebook/targeting/option_status
     */
    static facebookTargetingOptionStatus(params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingOptionStatus, undefined, undefined, params);
    }
    /**
     * POST /ads/facebook/targeting/suggestions
     */
    static facebookTargetingSuggestions(data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSuggestions, data, undefined, params);
    }
    /**
     * GET /ads/facebook/targeting/browse
     */
    static facebookTargetingBrowse(params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingBrowse, undefined, undefined, params);
    }
    /**
     * POST /ads/facebook/targeting/validation
     */
    static facebookTargetingValidation(data, params) {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingValidation, data, undefined, params);
    }
    /**
     * GET /ads/facebook/targeting/delivery_estimate
     */
    static facebookDeliveryEstimate(params) {
        return Requests.processRoute(AdsRoute.routes.facebookDeliveryEstimate, undefined, undefined, params);
    }
    static tiktokTargetingSearch(data, params) {
        return Requests.processRoute(AdsRoute.routes.tiktokTargetingSearch, data, {}, params);
    }
    static tiktokContextualTags(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContextualTags, undefined, undefined, params);
    }
    static tiktokRecommendHashtags(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokRecommendHashtags, undefined, undefined, params);
    }
    static tiktokListCarriers(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokCarriers, undefined, undefined, params);
    }
    static tiktokListInterestCategories(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokInterestCategories, undefined, undefined, params);
    }
    static tiktokListActionCategories(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokActionCategories, undefined, undefined, params);
    }
    static tiktokListContentExclusions(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContentExclusions, undefined, undefined, params);
    }
    static tiktokListRegions(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokRegions, undefined, undefined, params);
    }
    static tiktokGetTargetingInfo(data, params) {
        return Requests.processRoute(AdsRoute.routes.tiktokTargetingInfo, data, {}, params);
    }
    static tiktokListLanguages(advertiser_id, params) {
        const mergedParams = Object.assign(Object.assign({}, params), { advertiser_id });
        return Requests.processRoute(AdsRoute.routes.tiktokLanguages, undefined, undefined, mergedParams);
    }
    static tiktokRecommendInterestKeywords(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokInterestKeywordRecommend, undefined, undefined, params);
    }
    /**
 * GET /ads/tiktok/targeting/hashtag_info
 */
    static tiktokHashtagInfo(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokHashtagInfo, undefined, undefined, params);
    }
    /**
     * GET /ads/tiktok/targeting/contextual_tag_info
     */
    static tiktokContextualTagInfo(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContextualTagInfo, undefined, undefined, params);
    }
    /**
     * GET /ads/tiktok/targeting/content_exclusion_info
     */
    static tiktokContentExclusionInfo(params) {
        return Requests.processRoute(AdsRoute.routes.tiktokContentExclusionInfo, undefined, undefined, params);
    }
    static listTwitterTargetingCriteria(params) {
        return Requests.processRoute(AdsRoute.routes.twitterListTargetingCriteria, undefined, undefined, params);
    }
    static getTwitterTargetingCriterion(criterion_id, params) {
        return Requests.processRoute(AdsRoute.routes.twitterGetTargetingCriterion, undefined, { criterion_id }, params);
    }
    static createTwitterTargetingCriterion(data, params) {
        return Requests.processRoute(AdsRoute.routes.twitterCreateTargetingCriterion, data, {}, params);
    }
    static deleteTwitterTargetingCriterion(criterion_id, params) {
        return Requests.processRoute(AdsRoute.routes.twitterDeleteTargetingCriterion, undefined, { criterion_id }, params);
    }
    static twitterBatchTargetingCriteria(data, params) {
        return Requests.processRoute(AdsRoute.routes.twitterBatchTargetingCriteria, data, {}, params);
    }
    static lookupTwitterTargeting(resource, params) {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingDiscovery, undefined, { resource }, params);
    }
    /**
     * Look up Twitter location targeting options.
     *
     * Kept as a named convenience method for frontend compatibility while the
     * generic lookupTwitterTargeting method remains the canonical route helper.
     */
    static listTwitterTargetingLocations(params) {
        return this.lookupTwitterTargeting('locations', params);
    }
    static twitterTargetingSuggestions(params) {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingSuggestions, undefined, undefined, params);
    }
    /**
     * Deep-sync a campaign tree (campaign → groups → ads) with its remote platform.
     *
     * @param campaign_id UUID of the campaign to sync
     * @param params      Optional query params
     * @returns           Fully-hydrated AdCampaign resource
     */
    static syncCampaignTree(campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncCampaignTree, undefined, { campaign_id }, params);
    }
    /**
    * Deep-sync all the campaigns for a scheduler.
    *
    * @param scheduler_id UUID of the campaign to sync
    * @param params      Optional query params
    * @returns           Fully-hydrated AdCampaign resource
    */
    static syncSchedulerCampaigns(scheduler_id, params) {
        return Requests.processRoute(AdsRoute.routes.syncSchedulerCampaigns, undefined, { scheduler_id }, params);
    }
    // ----------------------------------------------------------------------
    // AD REPORTS
    // ----------------------------------------------------------------------
    /**
     * Get campaign performance summary.
     */
    static getPerformanceSummary(params) {
        return Requests.processRoute(AdsRoute.routes.getPerformanceSummary, undefined, undefined, params);
    }
    /**
     * Get spend and delivery metrics over time.
     */
    static getSpendDeliveryReport(params) {
        return Requests.processRoute(AdsRoute.routes.getSpendDeliveryReport, undefined, undefined, params);
    }
    /**
     * Compare performance across platforms.
     */
    static getPlatformComparisonReport(params) {
        return Requests.processRoute(AdsRoute.routes.getPlatformComparisonReport, undefined, undefined, params);
    }
    /**
     * Get performance metrics for individual ad creatives.
     */
    static getCreativePerformanceReport(params) {
        return Requests.processRoute(AdsRoute.routes.getCreativePerformanceReport, undefined, undefined, params);
    }
    /**
     * Get time-based performance metrics by hour and day of week.
     */
    static getTimePerformanceReport(params) {
        return Requests.processRoute(AdsRoute.routes.getTimePerformanceReport, undefined, undefined, params);
    }
    /**
     * Get detailed paid campaign performance rows for tables and exports.
     */
    static getDetailedBreakdownReport(params) {
        return Requests.processRoute(AdsRoute.routes.getDetailedBreakdownReport, undefined, undefined, params);
    }
    /**
 * GET /ads/google/targeting/geo/suggest
 */
    static listGoogleGeoSuggestions(params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleGeoSuggestions, undefined, undefined, params);
    }
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static addGoogleLocationTargets(customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.addGoogleLocationTargets, data, { customer_id, campaign_id });
    }
    /**
     * GET /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static getGoogleLocationTargets(customer_id, campaign_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleLocationTargets, undefined, { customer_id, campaign_id }, params);
    }
    /**
     * DELETE /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static removeGoogleLocationTargets(customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.removeGoogleLocationTargets, data, { customer_id, campaign_id });
    }
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/proximity
     */
    static addGoogleProximityTarget(customer_id, campaign_id, data) {
        return Requests.processRoute(AdsRoute.routes.addGoogleProximityTarget, data, { customer_id, campaign_id });
    }
    /**
     * PUT /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static updateGoogleTargetingSettings(resource_type, customer_id, resource_id, data) {
        return Requests.processRoute(AdsRoute.routes.updateGoogleTargetingSettings, data, { resource_type, customer_id, resource_id });
    }
    /**
     * GET /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static getGoogleTargetingSettings(resource_type, customer_id, resource_id, params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleTargetingSettings, undefined, { resource_type, customer_id, resource_id }, params);
    }
    /** GET /ads/posts/google */
    static listGoogleAdPosts(params) {
        return Requests.processRoute(AdsRoute.routes.getGoogleAdPosts, undefined, undefined, params);
    }
    /** POST /ads/posts/google */
    static createGoogleAdPost(data, params) {
        return Requests.processRoute(AdsRoute.routes.createGoogleAdPost, data, {}, params);
    }
    /** PUT /ads/posts/google/{post_id} */
    static updateGoogleAdPost(post_id, data, params) {
        return Requests.processRoute(AdsRoute.routes.updateGoogleAdPost, data, { post_id }, params);
    }
    /** DELETE /ads/posts/google/{post_id} */
    static deleteGoogleAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.deleteGoogleAdPost, {}, { post_id }, params);
    }
    /** POST /ads/posts/google/{post_id}/pause */
    static pauseGoogleAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.pauseGoogleAdPost, {}, { post_id }, params);
    }
    /** POST /ads/posts/google/{post_id}/enable */
    static enableGoogleAdPost(post_id, params) {
        return Requests.processRoute(AdsRoute.routes.enableGoogleAdPost, {}, { post_id }, params);
    }
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
    static createGoogleAccount(data) {
        return Requests.processRoute(AdsRoute.routes.createGoogleAccount, data, undefined, undefined);
    }
    /**
     * Submit a SKAN attribution postback to the public Apple app attribution endpoint.
     * This mirrors POST /.well-known/appattribution/report-attribution.
     */
    static reportSkanAttributionPostback(data, params) {
        return Requests.processRoute(AdsRoute.routes.reportSkanAttributionPostback, data, undefined, params);
    }
}

class CommunitiesRoute {
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
    getMarketResearchAccess: { url: '/communities/{community_id}/market-research-access', method: HTTP_METHODS.GET },
    updateMarketResearchAccess: { url: '/communities/{community_id}/market-research-access', method: HTTP_METHODS.PUT },
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

class Communities {
    /**
     * List all the communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(CommunitiesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.create, data, undefined, params);
    }
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
    static update(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.update, data, { community_id: community_id }, params);
    }
    /**
     * Retrieve the information for a single community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static view(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.view, {}, { community_id: community_id }, params);
    }
    /**
     * Deletes a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static delete(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.delete, {}, { community_id: community_id });
    }
    /**
     * Retrieve the site-admin grant state for the customer-facing game market
     * research product.
     */
    static getMarketResearchAccess(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getMarketResearchAccess, undefined, { community_id }, params);
    }
    /**
     * Enable or disable game market research access for a business account.
     */
    static updateMarketResearchAccess(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateMarketResearchAccess, data, { community_id }, params);
    }
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
    static uploadLogoFile(community_id, file, data, params) {
        let url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    }
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
    static uploadLogoBlob(community_id, blob, data, params) {
        let url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    }
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
    static uploadBannerImageFile(community_id, file, data, params) {
        let url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    }
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
    static uploadBannerImageBlob(community_id, blob, data, params) {
        let url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    }
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
    static uploadVideoLogoFile(community_id, file, data, params) {
        let url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);
        return Requests.uploadFile(url, 'image', file, data, params);
    }
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
    static uploadVideoLogoBlob(community_id, blob, data, params) {
        let url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);
        return Requests.uploadBlob(url, 'image', blob, data, params);
    }
    /**
     * List the invites that have been sent for the community to users.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static listInvites(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listInvites, {}, { community_id: community_id }, params);
    }
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
    static sendInvite(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.sendInvite, data, { community_id: community_id }, params);
    }
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
    static acceptInvite(community_id, token, params) {
        return Requests.processRoute(CommunitiesRoute.routes.acceptInvite, { token: token }, { community_id: community_id }, params);
    }
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
    static retrieveInvite(community_id, token, params) {
        return Requests.processRoute(CommunitiesRoute.routes.retrieveInvite, {}, { community_id: community_id, token: token }, params);
    }
    /**
     * List the users who are currently associated with the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityUserList
     *
     * @param community_id The id of the community.
     *
     * @returns promise
     */
    static listUsers(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listUsers, {}, { community_id: community_id }, params);
    }
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
    static addUser(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.addUser, data, { community_id: community_id }, params);
    }
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
    static getUser(community_id, user_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.showUser, {}, { community_id: community_id, user_id: user_id }, params);
    }
    /**
     * Updates the users information associated with the community.
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static updatetUser(community_id, user_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateUser, data, { community_id: community_id, user_id: user_id }, params);
    }
    /** Correctly-spelled alias retained alongside the legacy method name. */
    static updateUser(community_id, user_id, data, params) {
        return this.updatetUser(community_id, user_id, data, params);
    }
    /**
     * Removes a user from a community.
     *
     * @param community_id The id of community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static removetUser(community_id, user_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.removeUser, {}, { community_id: community_id, user_id: user_id }, params);
    }
    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     *
     * @param domain The subcname of the community.
     *
     * @returns promise
     */
    static findByDomain(domain, params) {
        return Requests.processRoute(CommunitiesRoute.routes.findByDomain, {}, { domain: domain }, params);
    }
    /**
     * Has a user join a community. The join is executed using the current user's authentication token.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static join(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.join, data, { community_id: community_id }, params);
    }
    /**
     * Add a payment method to the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/51802cc0cb758850807345918130cf3e
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static addPaymentMethod(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.addPaymentMethod, data, { community_id: community_id }, params);
    }
    /**
     * Sets the default payment method for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/dd743e8a7da3b2bebe557cbc6675380d
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static setDefaultPaymentMethod(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.setDefaultPaymentMethod, data, { community_id: community_id }, params);
    }
    /**
     * Get the available payment methods.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getPaymentMethods(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getPaymentMethods, {}, { community_id: community_id }, params);
    }
    /**
     * Get the ledger for all transactions from the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getLedger(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getLedger, {}, { community_id: community_id }, params);
    }
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearDocusignAuth(community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearDocusignAuth, {}, { community_id: community_id });
    }
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearSimplesignAuth(community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearSimplesignAuth, {}, { community_id: community_id });
    }
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearHellosignAuth(community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.clearHellosignAuth, {}, { community_id: community_id });
    }
    /**
     * List all the saved email templates for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static listEmailTemplates(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listEmailTemplates, undefined, { community_id: community_id }, params);
    }
    /**
     * Create a new email template for the community
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static createEmailTemplate(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createEmailTemplate, data, { community_id: community_id }, params);
    }
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
    static updateEmailTemplate(community_id, template_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    }
    /**
     * Retrieve a single email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static viewEmailTemplate(community_id, template_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewEmailTemplate, {}, { community_id: community_id, template_id: template_id }, params);
    }
    /**
     * Deletes an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static deleteEmailTemplate(community_id, template_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteEmailTemplate, {}, { community_id: community_id, template_id: template_id });
    }
    /**
     * Populates an email template for the community that will replace the platholders with the data provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static populateEmailTemplate(community_id, template_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.populateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    }
    /**
   * List all newsletters for a community.
   *
   * @param community_id The ID of the community.
   * @param params Query parameters.
   * @returns Promise
   */
    static listNewsletters(params) {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletters, undefined, undefined, params);
    }
    /**
     * Create a new newsletter for a community.
     *
     * @param community_id The ID of the community.
     * @param data The data for the new newsletter.
     * @returns Promise
     */
    static createNewsletter(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createNewsletter, data, { community_id }, params);
    }
    /**
     * Get a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewNewsletter(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletter, undefined, { community_id, newsletter_id }, params);
    }
    /**
     * Update a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data to update.
     * @returns Promise
     */
    static updateNewsletter(community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletter, data, { community_id, newsletter_id }, params);
    }
    /**
     * Delete a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @returns Promise
     */
    static deleteNewsletter(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletter, undefined, { community_id, newsletter_id }, params);
    }
    /**
     * Import subscribers from a CSV or XLS file into a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param file The CSV or XLS file.
     * @param params Additional parameters.
     * @returns Promise
     */
    static importNewsletterSubscribers(community_id, newsletter_id, file, data, params) {
        const url = CommunitiesRoute.routes.importNewsletterSubscribers.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }
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
    static uploadNewsletterBannerImageFile(community_id, newsletter_id, file, data, params) {
        const url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadNewsletterBannerImageBlob(community_id, newsletter_id, blob, data, params) {
        const url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    // Campaigns
    /**
     * List all campaigns for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static listCampaigns(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaigns, undefined, { community_id, newsletter_id }, params);
    }
    /**
     * Create a new campaign for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data for the new campaign.
     * @returns Promise
     */
    static createCampaign(community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createCampaign, data, { community_id, newsletter_id }, params);
    }
    /**
     * Get a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewCampaign(community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }
    /**
     * Update a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The data to update.
     * @returns Promise
     */
    static updateCampaign(community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }
    /**
     * Delete a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    static deleteCampaign(community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }
    /**
     * Send a campaign immediately.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    static sendCampaign(community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.sendCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }
    /**
     * Schedule a campaign to be sent later.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    static scheduleCampaign(community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.scheduleCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }
    /**
     * Test an email campaign by sending an email to the current user.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    static testCampaign(community_id, newsletter_id, campaign_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.testCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }
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
    static listCampaignEmails(community_id, newsletter_id, campaign_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaignEmails, undefined, { community_id, newsletter_id, campaign_id }, params);
    }
    // Subscribers (admin routes)
    /**
     * List all subscribers of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static listNewsletterSubscribers(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletterSubscribers, undefined, { community_id, newsletter_id }, params);
    }
    /**
     * Get a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewNewsletterSubscriber(community_id, newsletter_id, subscriber_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletterSubscriber, undefined, { community_id, newsletter_id, subscriber_id }, params);
    }
    /**
     * Update a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param data The data to update.
     * @returns Promise
     */
    static updateNewsletterSubscriber(community_id, newsletter_id, subscriber_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletterSubscriber, data, { community_id, newsletter_id, subscriber_id }, params);
    }
    /**
     * Delete a specific subscriber from a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @returns Promise
     */
    static deleteNewsletterSubscriber(community_id, newsletter_id, subscriber_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletterSubscriber, undefined, { community_id, newsletter_id, subscriber_id }, params);
    }
    // Subscriber registration (open route)
    /**
     * Register a new subscriber to a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The subscriber data.
     * @returns Promise
     */
    static registerNewsletterSubscriber(community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.registerNewsletterSubscriber, data, { community_id, newsletter_id }, params);
    }
    /**
     * Get newsletter overall reports (subscriber changes, unsubscribes, etc.).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with aggregated data
     */
    static newsletterReports(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterReports, undefined, { community_id, newsletter_id }, params);
    }
    /**
     * Get campaign-level stats for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with campaign stats
     */
    static newsletterCampaignReports(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterCampaignReports, undefined, { community_id, newsletter_id }, params);
    }
    /**
    * Retrieves daily subscriber trend data for the specified newsletter.
    *
    * @param community_id The UUID of the community
    * @param newsletter_id The UUID of the newsletter
    * @param params Optional date-range filter (start_date, end_date, etc.)
    */
    static newsletterSubscriberTrend(community_id, newsletter_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.newsletterSubscriberTrend, undefined, // no body data
        { community_id, newsletter_id }, params);
    }
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
    static exportNewsletterSubscribers(community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.exportNewsletterSubscribers, data, { community_id, newsletter_id }, params);
    }
    /**
     * Import game installs from a game title installations to a newsletter
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    static importGameInstalls(community_id, newsletter_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.importGameInstalls, data, { community_id, newsletter_id }, params);
    }
    /**
     * Retrieve the current user's pending community invitations across all communities.
     *
     * @returns promise
     */
    static myInvites(params) {
        return Requests.processRoute(CommunitiesRoute.routes.myInvites, {}, undefined, params);
    }
    /**
     * Resends an invitation to a user.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to resend.
     *
     * @returns promise
     */
    static resendInvite(community_id, invite_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.resendInvite, {}, { community_id: community_id, invite_id: invite_id }, params);
    }
    /**
     * Revokes/deletes a community invitation.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to delete.
     *
     * @returns promise
     */
    static deleteInvite(community_id, invite_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.deleteInvite, {}, { community_id: community_id, invite_id: invite_id }, params);
    }
    /**
    * Create a one-time immediate invoice for a business account.
    *
    * @param community_id The ID of the community.
    * @param data { amount: number, description: string }
    */
    static createOneTimeInvoice(community_id, data, params) {
        return Requests.processRoute(CommunitiesRoute.routes.createOneTimeInvoice, data, { community_id }, params);
    }
    /**
     * Get a detailed breakdown of a specific invoice including per-title usage.
     *
     * @param community_id The ID of the community.
     * @param invoice_id The Stripe Invoice ID (e.g., in_123...).
     */
    static getInvoiceDetails(community_id, invoice_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.getInvoiceDetails, undefined, { community_id, invoice_id }, params);
    }
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
    static getCustomStatement(community_id, startDate, endDate) {
        // Wrap the strings into a named object so Requests.get can serialize them correctly
        const params = {
            start_date: startDate,
            end_date: endDate
        };
        return Requests.processRoute(CommunitiesRoute.routes.getCustomStatement, undefined, { community_id: community_id }, params);
    }
    /**
 * List all Stripe invoices for the community.
 */
    static listInvoices(community_id) {
        return Requests.processRoute(CommunitiesRoute.routes.listInvoices, undefined, { community_id });
    }
    /**
     * List influencers saved to the community's private talent pool.
     *
     * @param community_id The UUID of the community.
     * @param params Optional filters like 'list_name'.
     */
    static listSavedInfluencers(community_id, params) {
        return Requests.processRoute(CommunitiesRoute.routes.listSavedInfluencers, undefined, { community_id }, params);
    }
    /**
     * Save an influencer to the community's talent pool (Shortlist).
     *
     * @param community_id The UUID of the community.
     * @param data { influencer_id: string, list_name?: string, tags?: string[] }
     */
    static saveInfluencerToPool(community_id, data) {
        return Requests.processRoute(CommunitiesRoute.routes.saveInfluencerToPool, data, { community_id });
    }
}

class UserRoutes {
}
UserRoutes.routes = {
    list: { url: '/users', method: HTTP_METHODS.GET },
    update: { url: '/users', method: HTTP_METHODS.PUT },
    follow: { url: '/users/{user_id}/follow', method: HTTP_METHODS.POST },
    profile: { url: '/users/{user_id}/profile', method: HTTP_METHODS.GET },
    me: { url: '/users/me', method: HTTP_METHODS.GET },
    emailDeliveryStatus: { url: '/users/me/email-delivery', method: HTTP_METHODS.GET },
    restoreEmailDelivery: { url: '/users/me/email-delivery/restore', method: HTTP_METHODS.POST },
    syncInfluencer: { url: '/users/syncInfluencer', method: HTTP_METHODS.POST },
    generateInfluencerProfile: { url: '/users/generateInfluencerProfile', method: HTTP_METHODS.POST },
    oneTimeToken: { url: '/users/oneTimeToken', method: HTTP_METHODS.GET },
    uploadAvatar: { url: '/users/uploadAvatarImage', method: HTTP_METHODS.POST },
    uploadBanner: { url: '/users/uploadBannerImage', method: HTTP_METHODS.POST },
    createDonationPage: { url: '/users/createDonationPage', method: HTTP_METHODS.POST },
    clearTwitchAuth: { url: '/users/clearTwitchAuth', method: HTTP_METHODS.DELETE },
    clearFacebookAuth: { url: '/users/clearFacebookAuth', method: HTTP_METHODS.DELETE },
    clearGoogleAuth: { url: '/users/clearGoogleAuth', method: HTTP_METHODS.DELETE },
    clearGmailAuth: { url: '/users/clearGmailAuth', method: HTTP_METHODS.DELETE },
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
    playedGames: { url: '/users/me/played-games', method: HTTP_METHODS.GET },
    userProgressionStats: { url: '/users/{user_id}/progression/stats', method: HTTP_METHODS.GET },
    userProgressionAchievements: { url: '/users/{user_id}/progression/achievements', method: HTTP_METHODS.GET },
    userProgressionHistory: { url: '/users/{user_id}/progression/history', method: HTTP_METHODS.GET },
    // --- User Media Library (Viral Clip Studio) ---
    listMedia: { url: '/users/me/media', method: HTTP_METHODS.GET },
    storeMedia: { url: '/users/me/media', method: HTTP_METHODS.POST },
    viewMedia: { url: '/users/me/media/{id}', method: HTTP_METHODS.GET },
    updateMedia: { url: '/users/me/media/{id}', method: HTTP_METHODS.PUT },
    deleteMedia: { url: '/users/me/media/{id}', method: HTTP_METHODS.DELETE },
    // AI & Social Actions
    modifyMedia: { url: '/users/me/media/{id}/modify', method: HTTP_METHODS.POST },
    suggestSmartTrim: { url: '/users/me/media/{id}/smart-trim', method: HTTP_METHODS.GET },
    shareMedia: { url: '/users/me/media/{id}/share', method: HTTP_METHODS.POST },
    sentGifts: { url: '/users/me/gifts/sent', method: HTTP_METHODS.GET },
    receivedGifts: { url: '/users/me/gifts/received', method: HTTP_METHODS.GET },
};

class Users {
    /**
     * List all the users.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(UserRoutes.routes.list, undefined, undefined, params);
    }
    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static update(data, params) {
        return Requests.processRoute(UserRoutes.routes.update, data, undefined, params);
    }
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
    static me(params) {
        return Requests.processRoute(UserRoutes.routes.me, {}, undefined, params);
    }
    /**
     * Gets the delivery and suppression state for the authenticated user's
     * current registered email address.
     */
    static emailDeliveryStatus() {
        return Requests.processRoute(UserRoutes.routes.emailDeliveryStatus);
    }
    /**
     * Removes an eligible active suppression for the authenticated user's
     * current verified email address.
     */
    static restoreEmailDelivery(data) {
        return Requests.processRoute(UserRoutes.routes.restoreEmailDelivery, data);
    }
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
    static getCampaignInvites(params) {
        return Requests.processRoute(UserRoutes.routes.getCampaignInvites, {}, undefined, params);
    }
    /**
     * Gets the authenticated influencer's payouts from campaigns and attributed
     * game advertising. Advertising revenue is returned as a separate additive
     * source with provider-period metrics and tracking-link/social-post IDs.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param params Optional campaign, date, status, source, and ordering filters.
     *
     * @returns promise
     */
    static getPayouts(params) {
        return Requests.processRoute(UserRoutes.routes.getPayouts, {}, undefined, params);
    }
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
    static syncInfluencer(params) {
        return Requests.processRoute(UserRoutes.routes.syncInfluencer, {}, undefined, params);
    }
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
    static generateInfluencerProfile(params) {
        return Requests.processRoute(UserRoutes.routes.generateInfluencerProfile, {}, undefined, params);
    }
    /**
     * Will follow and unfollow a user. If the user is not being following, it will follow the user. If they are following, it will unfollow the user. The current JWT is used for the follower.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userToggleFollow
     *
     * @param user_id The id fo the user to retrieve.
     *
     * @returns promise
     */
    static followToggle(user_id) {
        return Requests.processRoute(UserRoutes.routes.follow, {}, { user_id: user_id });
    }
    /**
     * Show a users profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showUser
     *
     * @param user_id The id of the user to delete.
     * @returns promise
     */
    static profile(user_id) {
        return Requests.processRoute(UserRoutes.routes.profile, {}, { user_id: user_id });
    }
    /**
     * Retrieves a user's one time login token based on a users JWT.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userOneTimeLoginToken
     *
     *
     * @returns promise
     */
    static oneTimeLoginToken() {
        return Requests.processRoute(UserRoutes.routes.oneTimeToken, {});
    }
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
    static uploadAvatarImageFile(file, data) {
        return Requests.uploadFile(UserRoutes.routes.uploadAvatar.url, 'image', file, data);
    }
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
    static uploadAvatarImageBlob(blob, data) {
        return Requests.uploadBlob(UserRoutes.routes.uploadAvatar.url, 'image', blob, data);
    }
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
    static uploadBannerImageFile(file, data) {
        return Requests.uploadFile(UserRoutes.routes.uploadBanner.url, 'image', file, data);
    }
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
    static uploadBannerImageBlob(blob, data) {
        return Requests.uploadBlob(UserRoutes.routes.uploadBanner.url, 'image', blob, data);
    }
    /**
     * Creates a donation page for that user by syncing their information with various
     * payment service.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static createDonationPage() {
        return Requests.processRoute(UserRoutes.routes.createDonationPage, {});
    }
    /**
    * Clear Twitches authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearTwitchAuth() {
        return Requests.processRoute(UserRoutes.routes.clearTwitchAuth, {});
    }
    /**
     * Clear Facebook authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearFacebookAuth() {
        return Requests.processRoute(UserRoutes.routes.clearFacebookAuth, {});
    }
    /**
     * Clear Google authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearGoogleAuth() {
        return Requests.processRoute(UserRoutes.routes.clearGoogleAuth, {});
    }
    /**
     * Clear Gmail Workspace authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearGmailAuth
     *
     * @returns promise
     */
    static clearGmailAuth() {
        return Requests.processRoute(UserRoutes.routes.clearGmailAuth, {});
    }
    /**
     * Clear Stripe authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearStripeAuth() {
        return Requests.processRoute(UserRoutes.routes.clearStripeAuth, {});
    }
    /**
     * Clear TikTok authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTikTokAuth() {
        return Requests.processRoute(UserRoutes.routes.clearTikTokAuth, {});
    }
    /**
     * Clear YouTube authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearYoutubeAuth() {
        return Requests.processRoute(UserRoutes.routes.clearYoutubeAuth, {});
    }
    /**
     * Clear Reddit authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearRedditAuth() {
        return Requests.processRoute(UserRoutes.routes.clearRedditAuth, {});
    }
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearDocusignAuth
     *
     * @returns promise
     */
    static clearDocusignAuth() {
        return Requests.processRoute(UserRoutes.routes.clearDocusignAuth, {});
    }
    /**
     * Clear Twitter authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTwitterAuth() {
        return Requests.processRoute(UserRoutes.routes.clearTwitterAuth, {});
    }
    /**
    * Clear StreamElements authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearStreamElementsAuth() {
        return Requests.processRoute(UserRoutes.routes.clearStreamElementsAuth, {});
    }
    /**
     * Returns a list of tips received by the authenticated user for a given month and year
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsReceivedForMonth(params) {
        return Requests.processRoute(UserRoutes.routes.getTipsReceivedForMonth, undefined, undefined, params);
    }
    /**
     * Returns a list of tips given by the authenticated user for a given month and year.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsGivenForMonth(params) {
        return Requests.processRoute(UserRoutes.routes.getTipsGivenForMonth, undefined, undefined, params);
    }
    /**
     * Returns the aggregated monthly tips received by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyReceivedTips(params) {
        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyReceivedTips, undefined, undefined, params);
    }
    /**
     * Returns the aggregated monthly tips given by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyGivenTips(params) {
        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyGivenTips, undefined, undefined, params);
    }
    /**
     * Returns the user associated Youtube a channels a user has.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getFacebookGroups(params) {
        return Requests.processRoute(UserRoutes.routes.getFacebookGroups, undefined, undefined, params);
    }
    /**
     * Add a genre to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the genre information.
     *
     * @returns Promise
     */
    static addGenre(data, params) {
        return Requests.processRoute(UserRoutes.routes.addGenre, data, undefined, params);
    }
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeGenre(genre_id, params) {
        return Requests.processRoute(UserRoutes.routes.removeGenre, undefined, { genre_id: genre_id }, params);
    }
    /**
     * Add a type to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the type information.
     *
     * @returns Promise
     */
    static addType(data, params) {
        return Requests.processRoute(UserRoutes.routes.addType, data, undefined, params);
    }
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeType(type_id, params) {
        return Requests.processRoute(UserRoutes.routes.removeType, undefined, { type_id: type_id }, params);
    }
    /**
    * Verify a user's account to complete their sign-up process.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/verifyAccount
    *
    * @param data The genre information to be passed to update the type information.
    *
    * @returns Promise
    */
    static verifyAccount(data, params) {
        return Requests.processRoute(UserRoutes.routes.verifyAccount, data, undefined, params);
    }
    /**
     * Gets the instagram accounts associated with the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getInstagramAccounts
     *
     * @returns promise
     */
    static getInstagramAccounts(params) {
        return Requests.processRoute(UserRoutes.routes.getInstagramAccounts, undefined, undefined, params);
    }
    /**
   * Gets the Facebook Pages associated with the user.
   *
   * @see https://api.glitch.fun/api/documentation#/Users%20Route/getFacebookPages
   *
   * @returns Promise resolving to the list of Facebook Pages
   */
    static getFacebookPages(params) {
        return Requests.processRoute(UserRoutes.routes.getFacebookPages, undefined, undefined, params);
    }
    /**
     * Gets the subreddits the user is subscribed to.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubreddits
     *
     * @returns Promise resolving to the list of subreddits
     */
    static getSubreddits(params) {
        return Requests.processRoute(UserRoutes.routes.getSubreddits, undefined, undefined, params);
    }
    /**
     * Gets the flairs for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditFlairs
     *
     * @param subreddit The name of the subreddit to get flairs for.
     * @returns Promise resolving to the list of flairs
     */
    static getSubredditFlairs(subreddit, params) {
        return Requests.processRoute(UserRoutes.routes.getSubredditFlairs, undefined, { subreddit: subreddit }, params);
    }
    /**
     * Search all the users with advanced meilisearch options
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSearch
     *
     * @returns promise
     */
    static search(params) {
        return Requests.processRoute(UserRoutes.routes.search, undefined, undefined, params);
    }
    /**
     * Resends the verification email to the authenticated user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/resendVerificationEmail
     *
     * @returns Promise
     */
    static resendVerificationEmail() {
        return Requests.processRoute(UserRoutes.routes.resendVerificationEmail, {});
    }
    /**
     * Clear Instagram authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearInstagramAuth
     *
     * @returns promise
     */
    static clearInstagramAuth() {
        return Requests.processRoute(UserRoutes.routes.clearInstagramAuth, {});
    }
    /**
     * Gets the rules for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditRules
     *
     * @param subreddit The name of the subreddit to get rules for.
     * @returns Promise resolving to the list of rules
     */
    static getSubredditRules(subreddit, params) {
        return Requests.processRoute(UserRoutes.routes.getSubredditRules, undefined, { subreddit: subreddit }, params);
    }
    /**
     * Get a list of games the current user has played.
     * Includes playtime and last played timestamps.
     */
    static playedGames(params) {
        return Requests.processRoute(UserRoutes.routes.playedGames, undefined, undefined, params);
    }
    /**
     * Get all stats for a user, optionally filtered by title_id.
     */
    static getProgressionStats(user_id, params) {
        return Requests.processRoute(UserRoutes.routes.userProgressionStats, undefined, { user_id }, params);
    }
    /**
     * Get all achievements for a user.
     */
    static getProgressionAchievements(user_id, params) {
        return Requests.processRoute(UserRoutes.routes.userProgressionAchievements, undefined, { user_id }, params);
    }
    /**
     * Get the raw gameplay history (Run Records) for a user.
     */
    static getProgressionHistory(user_id, params) {
        return Requests.processRoute(UserRoutes.routes.userProgressionHistory, undefined, { user_id }, params);
    }
    /**
    * List the authenticated user's media library (clips, screenshots, AI generated).
    *
    * @param params Optional filters: { type: 'clip'|'screenshot'|'ai_generated', title_id: string }
    */
    static listMedia(params) {
        return Requests.processRoute(UserRoutes.routes.listMedia, undefined, undefined, params);
    }
    /**
     * Add a Media record to the user's personal library.
     *
     * @param data { media_id: string, type: string, title_id?: string, label?: string, studio_metadata?: object }
     */
    static storeMedia(data) {
        return Requests.processRoute(UserRoutes.routes.storeMedia, data);
    }
    /**
     * Retrieve details for a specific library item.
     */
    static viewMedia(id) {
        return Requests.processRoute(UserRoutes.routes.viewMedia, undefined, { id });
    }
    /**
     * Update a library item's label or metadata.
     */
    static updateMedia(id, data) {
        return Requests.processRoute(UserRoutes.routes.updateMedia, data, { id });
    }
    /**
     * Remove an item from the user's library (Soft Delete).
     */
    static deleteMedia(id) {
        return Requests.processRoute(UserRoutes.routes.deleteMedia, undefined, { id });
    }
    /**
     * Apply AI transformations (Style Transfer/Upscale) to a library item.
     *
     * @param id The UUID of the UserMedia record.
     * @param data { prompt: string, tool: 'style_transfer'|'upscale' }
     */
    static modifyMedia(id, data) {
        return Requests.processRoute(UserRoutes.routes.modifyMedia, data, { id });
    }
    /**
     * Get AI-generated suggestions for the best 15-second window to trim a video.
     */
    static suggestSmartTrim(id) {
        return Requests.processRoute(UserRoutes.routes.suggestSmartTrim, undefined, { id });
    }
    /**
     * Share a library item to social media as User Generated Content (UGC).
     * This uses the player media share route, not the developer/scheduler post route.
     *
     * @param id The UUID of the UserMedia record.
     * @param data Player post payload, including platform/channel/schedule options.
     */
    static shareMedia(id, data) {
        return Requests.processRoute(UserRoutes.routes.shareMedia, data, { id });
    }
    /**
     * List all gifts purchased by the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSentGifts
     *
     * @param params Optional filters: title_id, status, gift_type, min_amount, max_amount, start_date, end_date, sort_by, sort_order.
     * @returns promise
     */
    static sentGifts(params) {
        return Requests.processRoute(UserRoutes.routes.sentGifts, undefined, undefined, params);
    }
    /**
     * List all gifts received by the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userReceivedGifts
     *
     * @param params Optional filters: title_id, status, start_date, sort_by.
     * @returns promise
     */
    static receivedGifts(params) {
        return Requests.processRoute(UserRoutes.routes.receivedGifts, undefined, undefined, params);
    }
}

class EventsRoutes {
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

class RecordingsRoute {
}
RecordingsRoute.routes = {
    update: { url: '/events/{event_id}/recording/{recording_id}', method: HTTP_METHODS.PUT },
};

class Events {
    /**
     * List all the events
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(EventsRoutes.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     *
     * @param data The data to be passed when creating an event.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(EventsRoutes.routes.create, data, undefined, params);
    }
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
    static update(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.update, data, { event_id: event_id }, params);
    }
    /**
     * Retrieve the information for a single event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     *
     * @param event_id The id fo the event to retrieve.
     *
     * @returns promise
     */
    static view(event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.view, {}, { event_id: event_id }, params);
    }
    /**
     * Deletes a event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     *
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    static delete(event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.delete, {}, { event_id: event_id }, params);
    }
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
    static updateInvirtuEvent(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.updateInvirtu, data, { event_id: event_id }, params);
    }
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
    static addRTMPSource(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addRTMPSource, data, { event_id: event_id }, params);
    }
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
    static updateRTMPSource(event_id, stream_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.updateRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    }
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
    static removeRTMPSource(event_id, stream_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.removeRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    }
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
    static addTwitchMulticast(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addTwitchMulticast, data, { event_id: event_id }, params);
    }
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
    static addFacebookMulticast(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addFacebookMulticast, data, { event_id: event_id }, params);
    }
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
    static addYoutubeMulticast(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.addYoutubeMulticast, data, { event_id: event_id }, params);
    }
    /**
     * A function that should be run on an interval to set the event as live when the live stream is active.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/syncLive
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static syncAsLive(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.syncAsLive, data, { event_id: event_id }, params);
    }
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
    static uploadMainImageFile(event_id, file, data, params) {
        let url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadMainImageBlob(event_id, blob, data, params) {
        let url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadBannerImageFile(event_id, file, data, params) {
        let url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadBannerImageBlob(event_id, blob, data, params) {
        let url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static enableBroadcastMode(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableBroadcastMode, data, { event_id: event_id }, params);
    }
    /**
     * Enable livestream mode, in which the stream will be delivered to the invirtu RTMP endpoint for
     * streaming.
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableLivestreamMode(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    }
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
    static sendOnScreenContent(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    }
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
    static addOverlayAsFile(event_id, file, data) {
        let url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static addOverlayAsBlob(event_id, blob, data, params) {
        let url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static removeOverlay(event_id, overlay_id, params) {
        return Requests.processRoute(EventsRoutes.routes.removeOverlay, {}, { event_id: event_id, subid: overlay_id }, params);
    }
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
    static enableOverlay(event_id, overlay_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableOverlay, data, { event_id: event_id, subid: overlay_id }, params);
    }
    /**
     * Disables the overlay so it no longer appears on-screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static disableOverlay(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableOverlay, data, { event_id: event_id }, params);
    }
    /**
     * Enable the donations to appear on-screen
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableDonations
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableDonations(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableDonations, data, { event_id: event_id }, params);
    }
    /**
     * Disable the donations and remove from the screen.
     *
     * @param event_id
     * @returns
     */
    static disableDonations(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableDonations, data, { event_id: event_id }, params);
    }
    static sendInvite(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.sendInvite, data, { event_id: event_id }, params);
    }
    static acceptInvite(event_id, token, params) {
        return Requests.processRoute(EventsRoutes.routes.acceptInvite, { token: token }, { event_id: event_id }, params);
    }
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
    static updateRecording(event_id, recording_id, data, params) {
        return Requests.processRoute(RecordingsRoute.routes.update, data, { event_id: event_id, recording_id: recording_id }, params);
    }
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
    static enableWidget(event_id, widget_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.enableWidget, data, { event_id: event_id, widget_id: widget_id }, params);
    }
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
    static disableWidget(event_id, widget_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.disableWidget, data, { event_id: event_id, widget_id: widget_id }, params);
    }
    /**
     * Get all the tips associated with the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     *
     * @returns promise
     */
    static getTips(event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.getTips, {}, { event_id: event_id }, params);
    }
    /**
     * Sets the personality attribute of the AI to adjust how it will respond.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarPersonalityAttribute(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarPersonalityAttribute, data, { event_id: event_id }, params);
    }
    /**
     * Sets the AI Avatars name, which it can respond too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarName(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarName, data, { event_id: event_id }, params);
    }
    /**
     * Sets the AI Avatars accent, that will dictate the void in which it responds.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAccent(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAccent, data, { event_id: event_id }, params);
    }
    /**
     * Sets the AI Avatar to that it willr respond to users in the chat.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarRespondToChat(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarRespondToChat, data, { event_id: event_id }, params);
    }
    /**
     * Sets the AI Avatar so that it will respond to you.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarRespondToMe(event_id, data, params) {
        return Requests.processRoute(EventsRoutes.routes.setAIAvatarRespondToMe, data, { event_id: event_id }, params);
    }
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getStreamStatistics
     *
     * @returns promise
     */
    static statistics(event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.statistics, undefined, { event_id: event_id }, params);
    }
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getEventStreamViewCounts
     *
     * @returns promise
     */
    static getStreamViewCounts(event_id, params) {
        return Requests.processRoute(EventsRoutes.routes.streamViewCounts, undefined, { event_id: event_id }, params);
    }
}

class FingerprintingRoute {
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

class Fingerprinting {
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
    static listFingerprints(params) {
        return Requests.processRoute(FingerprintingRoute.routes.listFingerprints, {}, undefined, params);
    }
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
    static userJourneyReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.userJourneyReport, {}, undefined, params);
    }
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
    static attributionReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.attributionReport, {}, undefined, params);
    }
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
    static deviceClusterReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.deviceClusterReport, {}, undefined, params);
    }
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
    static identityClusterReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.identityClusterReport, {}, undefined, params);
    }
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
    static attributionFunnelReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.attributionFunnelReport, {}, undefined, params);
    }
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
    static deviceEnvironmentReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.deviceEnvironmentReport, {}, undefined, params);
    }
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
    static uniqueReturningReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.uniqueReturningReport, {}, undefined, params);
    }
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
    static fraudDetectionReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.fraudDetectionReport, {}, undefined, params);
    }
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
    static geolocationReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.geolocationReport, {}, undefined, params);
    }
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
    static pixelAttributionReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.pixelAttributionReport, {}, undefined, params);
    }
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
    static installJourneyReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.installJourneyReport, {}, undefined, params);
    }
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
    static adCampaignPerformanceReport(params) {
        return Requests.processRoute(FingerprintingRoute.routes.adCampaignPerformanceReport, {}, undefined, params);
    }
}

class TeamsRoute {
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

class Teams {
    /**
     * List all the teams
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(TeamsRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(TeamsRoute.routes.create, data, undefined, params);
    }
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
    static update(team_id, data, params) {
        return Requests.processRoute(TeamsRoute.routes.create, data, { team_id: team_id }, undefined);
    }
    /**
     * Retrieve the information for a single team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamShow
     *
     * @param team_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    static view(team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.view, {}, { team_id: team_id }, params);
    }
    /**
     * Deletes a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamDelete
     *
     * @param team_id The id of the team to delete.
     * @returns promise
     */
    static delete(team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.delete, {}, { team_id: team_id }, params);
    }
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
    static uploadMainImageFile(team_id, file, data) {
        let url = TeamsRoute.routes.uploadMainImage.url.replace('{team_id}', team_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadMainImageBlob(team_id, blob, data) {
        let url = TeamsRoute.routes.uploadMainImage.url.replace('{team_id}', team_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadBannerImageFile(team_id, file, data) {
        let url = TeamsRoute.routes.uploadBannerImage.url.replace('{team_id}', team_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadBannerImageBlob(team_id, blob, data) {
        let url = TeamsRoute.routes.uploadBannerImage.url.replace('{team_id}', team_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    /**
     * List the invites that have been sent for the team to users.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsUserInviteList
     *
     * @param team_id The id of the team
     *
     * @returns promise
     */
    static listInvites(team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.listInvites, {}, { team_id: team_id }, params);
    }
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
    static sendInvite(team_id, data) {
        return Requests.processRoute(TeamsRoute.routes.sendInvite, data, { team_id: team_id });
    }
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
    static acceptInvite(team_id, token) {
        return Requests.processRoute(TeamsRoute.routes.acceptInvite, {}, { team_id: team_id });
    }
    /**
     * List the users who are currently associated with the team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUserList
     *
     * @param team_id The id of the team.
     *
     * @returns promise
     */
    static listUsers(team_id, params) {
        return Requests.processRoute(TeamsRoute.routes.listTeamUsers, {}, { team_id: team_id }, params);
    }
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
    static addUser(team_id, data) {
        return Requests.processRoute(TeamsRoute.routes.addTeamUser, data, { team_id: team_id });
    }
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
    static getUser(team_id, user_id) {
        return Requests.processRoute(TeamsRoute.routes.showTeamUser, {}, { team_id: team_id, user_id });
    }
    /**
     * Updates the users information associated with the team.
     *
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static updatetUser(team_id, user_id, data) {
        return Requests.processRoute(TeamsRoute.routes.updateTeamUser, data, { team_id: team_id, user_id });
    }
    /**
     * Removes a user from a team.
     *
     * @param team_id The id of team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static removetUser(team_id, user_id) {
        return Requests.processRoute(TeamsRoute.routes.removeTeamUser, {}, { team_id: team_id, user_id });
    }
}

class WaitlistRoutes {
}
WaitlistRoutes.routes = {
    list: { url: '/waitlists', method: HTTP_METHODS.GET },
    create: { url: '/waitlists', method: HTTP_METHODS.POST },
    show: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.GET },
    update: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.DELETE },
};

class Waitlists {
    /**
     * List all the waitlist sign-ups.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(WaitlistRoutes.routes.list, undefined, undefined, params);
    }
    /**
     * Sign-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(WaitlistRoutes.routes.create, data, undefined, params);
    }
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
    static update(waitlist_id, data, params) {
        return Requests.processRoute(WaitlistRoutes.routes.update, data, { waitlist_id: waitlist_id }, params);
    }
    /**
     * Retrieve the information for a single user who signed-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     *
     * @param waitlist_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    static view(waitlist_id, params) {
        return Requests.processRoute(WaitlistRoutes.routes.view, {}, { waitlist_id: waitlist_id }, params);
    }
    /**
     * Deletes an entry from the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistDelete
     *
     * @param waitlist_id The id of the team to delete.
     * @returns promise
     */
    static delete(waitlist_id, params) {
        return Requests.processRoute(WaitlistRoutes.routes.delete, {}, { waitlist_id: waitlist_id }, params);
    }
}

class PostsRoute {
}
PostsRoute.routes = {
    list: { url: '/posts', method: HTTP_METHODS.GET },
    create: { url: '/posts', method: HTTP_METHODS.POST },
    view: { url: '/posts/{post_id}', method: HTTP_METHODS.GET },
    update: { url: '/posts/{post_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/posts/{post_id}', method: HTTP_METHODS.DELETE },
    toggleInteraction: { url: '/posts/{post_id}/toggleInteraction', method: HTTP_METHODS.POST },
    join: { url: '/posts/{post_id}/join', method: HTTP_METHODS.POST },
    follow: { url: '/posts/{post_id}/follow', method: HTTP_METHODS.POST },
    leave: { url: '/posts/{post_id}/leave', method: HTTP_METHODS.DELETE },
    resolve: { url: '/posts/{post_id}/resolve', method: HTTP_METHODS.PATCH },
    updatePreferences: { url: '/posts/{post_id}/participants/me', method: HTTP_METHODS.PUT },
};

class Posts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(PostsRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(PostsRoute.routes.create, data, undefined, params);
    }
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
    static createWithFile(file, data) {
        return Requests.uploadFile(PostsRoute.routes.create.url, 'file', file, data);
    }
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
    static createWithBlob(blob, data) {
        return Requests.uploadBlob(PostsRoute.routes.create.url, 'file', blob, data);
    }
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
    static createWithFileInChunks(file, chunkSize = 1 * 1024 * 1024, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalChunks = Math.ceil(file.size / chunkSize);
            for (let i = 0; i < totalChunks; i++) {
                const start = i * chunkSize;
                const end = start + chunkSize;
                const chunk = file.slice(start, end);
                const formData = new FormData();
                formData.append('file', chunk, `${i}-${file.name}`); // Naming chunks as index-filename for identification
                formData.append('totalChunks', totalChunks.toString());
                formData.append('currentChunk', i.toString());
                // merge any other data if provided
                for (let key in data) {
                    formData.append(key, data[key]);
                }
                // If it's the last chunk, save the response
                if (i === totalChunks - 1) {
                    yield Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData);
                }
                else {
                    yield Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData);
                }
            }
            {
                throw new Error("No response from the last chunk upload");
            }
        });
    }
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
    static update(post_id, data, params) {
        return Requests.processRoute(PostsRoute.routes.update, data, { post_id: post_id }, params);
    }
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view(post_id, params) {
        return Requests.processRoute(PostsRoute.routes.view, {}, { post_id: post_id }, params);
    }
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete(post_id, params) {
        return Requests.processRoute(PostsRoute.routes.delete, {}, { post_id: post_id }, params);
    }
    /**
     * Toggle a social interaction and off for a post.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Post%20Route/postToggleInteraction
     *
     * @param data The data to be passed when toggling the interaction.
     *
     * @returns Promise
     */
    static toggleInteraction(post_id, data, params) {
        return Requests.processRoute(PostsRoute.routes.toggleInteraction, data, { post_id: post_id }, params);
    }
    /**
     * Join a Play Together session.
     */
    static joinSession(post_id, data) {
        return Requests.processRoute(PostsRoute.routes.join, data, { post_id });
    }
    /**
     * Follow a bug report for updates.
     */
    static followBug(post_id, data) {
        return Requests.processRoute(PostsRoute.routes.follow, data, { post_id });
    }
    /**
     * Update notification preferences for a post.
     */
    static updatePreferences(post_id, data) {
        return Requests.processRoute(PostsRoute.routes.updatePreferences, data, { post_id });
    }
    /**
     * Leave a session or unfollow a bug.
     */
    static leave(post_id) {
        return Requests.processRoute(PostsRoute.routes.leave, {}, { post_id });
    }
    /**
     * Mark a bug as resolved (Admin only).
     */
    static resolveBug(post_id) {
        return Requests.processRoute(PostsRoute.routes.resolve, {}, { post_id });
    }
}

class SocialRoute {
}
SocialRoute.routes = {
    postVideoToTikTok: { url: '/social/postVideoToTikTok', method: HTTP_METHODS.POST },
    postVideoToFacebookGroup: { url: '/social/postVideoToFacebookGroup', method: HTTP_METHODS.POST },
    postVideoToTwitter: { url: '/social/postVideoToTwitter', method: HTTP_METHODS.POST },
};

class Social {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static postVideoToTikTokFile(file, data, params) {
        let url = SocialRoute.routes.postVideoToTikTok.url;
        return Requests.uploadFile(url, 'video', file, data);
    }
    static postVideoToTikTokBlob(blob, data, params) {
        let url = SocialRoute.routes.postVideoToTikTok.url;
        return Requests.uploadBlob(url, 'video', blob, data);
    }
    static postVideoToFacebookGroupFile(file, data, params) {
        let url = SocialRoute.routes.postVideoToFacebookGroup.url;
        return Requests.uploadFile(url, 'video', file, data);
    }
    static postVideoToFacebookGroupBlob(blob, data, params) {
        let url = SocialRoute.routes.postVideoToFacebookGroup.url;
        return Requests.uploadBlob(url, 'video', blob, data);
    }
    static postVideoToTwitter(file, data, onProgress, params) {
        let url = SocialRoute.routes.postVideoToTwitter.url;
        return Requests.uploadFileInChunks(file, url, onProgress, data);
    }
}

class TemplatesRoute {
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

class Templates {
    /**
     * List all the templates.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/resourceTemplateList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(TemplatesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/newTemplateResourceStorage
     *
     * @param data The data to be passed when creating a template.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(TemplatesRoute.routes.create, data, undefined, params);
    }
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
    static update(template_id, data, params) {
        return Requests.processRoute(TemplatesRoute.routes.update, data, { template_id: template_id }, params);
    }
    /**
     * Retrieve the information for a single template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/showTemplateStorage
     *
     * @param template_id The id fo the template to retrieve.
     *
     * @returns promise
     */
    static view(template_id, params) {
        return Requests.processRoute(TemplatesRoute.routes.view, {}, { template_id: template_id }, params);
    }
    /**
     * Deletes a template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/destoryTemplateStorage
     *
     * @param template_id The id of the template to delete.
     * @returns promise
     */
    static delete(template_id, params) {
        return Requests.processRoute(TemplatesRoute.routes.delete, {}, { template_id: template_id }, params);
    }
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
    static uploadLogoFile(template_id, file, data, params) {
        let url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadLogoBlob(template_id, blob, data, params) {
        let url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadMainImageFile(template_id, file, data, params) {
        let url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadMainImageBlob(template_id, blob, data, params) {
        let url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
}

class UtilityRoutes {
}
UtilityRoutes.routes = {
    social_interactions: { url: '/util/socialinteractions', method: HTTP_METHODS.GET },
    genres: { url: '/util/genres', method: HTTP_METHODS.GET },
    countries: { url: '/util/countries', method: HTTP_METHODS.GET },
    genders: { url: '/util/genders', method: HTTP_METHODS.GET },
    ethnicities: { url: '/util/ethnicities', method: HTTP_METHODS.GET },
    types: { url: '/util/types', method: HTTP_METHODS.GET },
    genres_active: { url: '/util/genres/active', method: HTTP_METHODS.GET },
};

class Utility {
    /**
     * Get all the social interactions and emojis that are available.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilSocialInteraction
     *
     * @returns promise
     */
    static listSocialInteractions(params) {
        return Requests.processRoute(UtilityRoutes.routes.social_interactions, undefined, undefined, params);
    }
    /**
     * Get all the genres available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listGenres(params) {
        return Requests.processRoute(UtilityRoutes.routes.genres, undefined, undefined, params);
    }
    /**
     * Get all the genders available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenders
     *
     * @returns promise
     */
    static listGenders(params) {
        return Requests.processRoute(UtilityRoutes.routes.genders, undefined, undefined, params);
    }
    /**
     * Get all the countries available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listCountries(params) {
        return Requests.processRoute(UtilityRoutes.routes.countries, undefined, undefined, params);
    }
    /**
     * Get all the ethnicities available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listEthnicities(params) {
        return Requests.processRoute(UtilityRoutes.routes.ethnicities, undefined, undefined, params);
    }
    /**
     * Get all the game types available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilTypes
     *
     * @returns promise
     */
    static listTypes(params) {
        return Requests.processRoute(UtilityRoutes.routes.types, undefined, undefined, params);
    }
    /**
     * Get all genres that are associated with at least one game title.
     * Includes the 'titles_count' property.
     *
     * @returns promise
     */
    static listActiveGenres(params) {
        return Requests.processRoute(UtilityRoutes.routes.genres_active, undefined, undefined, params);
    }
}

class TipRoute {
}
TipRoute.routes = {
    give: { url: '/tips/give', method: HTTP_METHODS.POST },
};

class Tips {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static give(data, params) {
        return Requests.processRoute(TipRoute.routes.give, data, {}, params);
    }
}

class TipEmojiRoute {
}
TipEmojiRoute.routes = {
    list: { url: '/tipstypes', method: HTTP_METHODS.GET },
    create: { url: '/tipstypes', method: HTTP_METHODS.POST },
    view: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.GET },
    update: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.PUT },
    DELETE: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.DELETE },
};

class TipEmojis {
    /**
     * Retrieve a list of emojis for tupping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(TipEmojiRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new emoji to use when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(TipEmojiRoute.routes.create, data, undefined, params);
    }
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
    static update(type_id, data, params) {
        return Requests.processRoute(TipEmojiRoute.routes.update, data, { type_id: type_id }, params);
    }
    /**
     * Retrieve a single emoji resource to be used when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param type_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view(type_id, params) {
        return Requests.processRoute(TipEmojiRoute.routes.view, {}, { type_id: type_id }, params);
    }
    /**
     * Delete an emoji resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param type_id The id of the post to delete.
     * @returns promise
     */
    static delete(type_id, params) {
        return Requests.processRoute(TipEmojiRoute.routes.delete, {}, { type_id: type_id }, params);
    }
}

class TipPackagesRoute {
}
TipPackagesRoute.routes = {
    list: { url: '/tipspackages', method: HTTP_METHODS.GET },
    create: { url: '/tipspackages', method: HTTP_METHODS.POST },
    view: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.GET },
    update: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.PUT },
    DELETE: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.DELETE },
};

class TipPackages {
    /**
     * Retrieve a list of tip packages.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(TipPackagesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(TipPackagesRoute.routes.create, data, undefined, params);
    }
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
    static update(package_id, data, params) {
        return Requests.processRoute(TipPackagesRoute.routes.update, data, { package_id: package_id }, params);
    }
    /**
     * Retrieve a single tip package resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param package_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view(package_id, params) {
        return Requests.processRoute(TipPackagesRoute.routes.view, {}, { package_id: package_id }, params);
    }
    /**
     * Delete a tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param package_id The id of the post to delete.
     * @returns promise
     */
    static delete(package_id, params) {
        return Requests.processRoute(TipPackagesRoute.routes.delete, {}, { package_id: package_id }, params);
    }
}

class TipPackagePurchaseRoute {
}
TipPackagePurchaseRoute.routes = {
    stripe: { url: '/tipspackagepurchases/stripe', method: HTTP_METHODS.POST },
    getStripePaymentIntent: { url: '/tipspackagepurchases/getstripepaymentintent', method: HTTP_METHODS.POST },
    processStripePaymentIntent: { url: '/tipspackagepurchases/processstripepaymentintent', method: HTTP_METHODS.POST },
};

class TipPackagePurchases {
    /**
     * Purchase a package with Stripe as the processor.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static stripe(data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.stripe, data, {}, params);
    }
    /**
     * Get a stripe payment intent token.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static getStripePaymentIntent(data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.getStripePaymentIntent, data, {}, params);
    }
    /**
    * Process the stripe payment intent after payment is complete.
    *
    * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
    *
    * @returns A promise
    */
    static processStripePaymentIntent(data, params) {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.processStripePaymentIntent, data, {}, params);
    }
}

class SocialPostsRoute {
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
    /**
    * Get social media posts correlated with installs, wishlists, and purchases.
    * GET /reports/fingerprinting/social-post-attribution
    */
    socialPostAttribution: {
        url: '/reports/fingerprinting/social-post-attribution',
        method: HTTP_METHODS.GET
    },
    influencerAttribution: {
        url: '/reports/fingerprinting/influencer-attribution',
        method: HTTP_METHODS.GET
    },
    /**
     * Get UTM performance correlated with installs and revenue.
     * GET /reports/fingerprinting/utm-attribution
     */
    utmAttribution: {
        url: '/reports/fingerprinting/utm-attribution',
        method: HTTP_METHODS.GET
    },
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

class SocialPosts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(SocialPostsRoute.routes.getPosts, undefined, undefined, params);
    }
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static create(data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.createPost, data, {}, params);
    }
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.retrievePost, {}, { post_id: post_id }, params);
    }
    /**
     * Update the informationa bout a post, as long as it hasn't been posted.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static update(post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updatePost, data, { post_id: post_id }, params);
    }
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.deletePost, {}, { post_id: post_id }, params);
    }
    /**
    * Dispute a post as being fraudulent.,s
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static dispute(post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.dispute, data, { post_id: post_id }, params);
    }
    /**
    * Get the change of the post metrics over a period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static history(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.history, {}, { post_id: post_id }, params);
    }
    /**
    * Get the change progression of a social media post over period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static progression(params) {
        return Requests.processRoute(SocialPostsRoute.routes.progression, {}, {}, params);
    }
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
    static addMedia(post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.addMedia, data, { post_id: post_id }, params);
    }
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
    static removeMedia(post_id, media_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.removeMedia, {}, { post_id: post_id, media_id: media_id }, params);
    }
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
    static reschedule(post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.reschedule, data, { post_id: post_id }, params);
    }
    /**
    * Get the reports for a social media post
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static reports(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.reports, undefined, { post_id }, params);
    }
    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static updatePostImpressions(post_id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updatePostImpressions, data, { post_id: post_id }, params);
    }
    /**
    * Get reports on all the the short links
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static shortLinkReports(params) {
        return Requests.processRoute(SocialPostsRoute.routes.shortLinkReports, undefined, undefined, params);
    }
    /**
     * List comments for a social media post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters for filtering and sorting.
     * @returns A promise
     */
    static listComments(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.listComments, undefined, { post_id }, params);
    }
    /**
     * Sync comments from the social media platform for a specific post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters (e.g., limit).
     * @returns A promise
     */
    static syncComments(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.syncComments, undefined, { post_id }, params);
    }
    /**
     * Get a list of all comments that are pending a response.
     *
     * @param params Optional query parameters for filtering.
     * @returns A promise
     */
    static listPendingResponses(params) {
        return Requests.processRoute(SocialPostsRoute.routes.listPendingResponses, undefined, undefined, params);
    }
    /**
     * Retrieve a single comment by its ID.
     *
     * @param comment_id The ID of the comment.
     * @param params Optional query parameters (e.g., include_thread).
     * @returns A promise
     */
    static viewComment(comment_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.viewComment, undefined, { comment_id }, params);
    }
    /**
     * Post a reply to a comment.
     *
     * @param comment_id The ID of the comment to reply to.
     * @param data The content of the reply.
     * @returns A promise
     */
    static replyToComment(comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.replyToComment, data, { comment_id });
    }
    /**
     * Moderate a comment (approve, reject, spam, hide, show).
     *
     * @param comment_id The ID of the comment to moderate.
     * @param data The moderation action and optional reason.
     * @returns A promise
     */
    static moderateComment(comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.moderateComment, data, { comment_id });
    }
    /**
     * Mark a comment as needing a response.
     *
     * @param comment_id The ID of the comment.
     * @returns A promise
     */
    static markCommentForResponse(comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.markCommentForResponse, undefined, { comment_id });
    }
    /**
     * Get the full thread for a given comment.
     *
     * @param comment_id The ID of a comment within the thread.
     * @returns A promise
     */
    static getCommentThread(comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getCommentThread, undefined, { comment_id });
    }
    /**
     * Trigger a manual update of a comment's metrics from its platform.
     *
     * @param comment_id The ID of the comment to update.
     * @returns A promise
     */
    static updateCommentMetrics(comment_id) {
        return Requests.processRoute(SocialPostsRoute.routes.updateCommentMetrics, undefined, { comment_id });
    }
    /**
     * Create a new top-level comment on a post.
     *
     * @param post_id The ID of the social media post to comment on.
     * @param data The content of the comment.
     * @returns A promise
     */
    static createComment(post_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.createComment, data, { post_id });
    }
    /**
   * Get game install attribution data for a specific social media post.
   *
   * @param post_id The ID of the social media post.
   * @param params Optional query parameters (start_date, end_date, confidence_threshold).
   * @returns A promise
   */
    static getPostAttribution(post_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.getPostAttribution, undefined, { post_id }, params);
    }
    /**
    * Get a report of all social media posts for a title that are converting to game installs.
    *
    * @param params Query parameters (title_id, start_date, end_date, confidence_threshold).
    * @returns A promise
    */
    static getSocialPostAttributionReport(params) {
        return Requests.processRoute(SocialPostsRoute.routes.getSocialPostAttributionReport, undefined, undefined, params);
    }
    /**
   * Get a summary of clicks for each short link in a post.
   *
   * @param post_id The ID of the social media post.
   * @returns A promise
   */
    static getLinkSummary(post_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getLinkSummary, undefined, { post_id });
    }
    /**
     * Trigger a historical sync for a specific platform for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/syncHistory
     *
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     *
     * @returns promise
     */
    static syncHistory(platform, params) {
        return Requests.processRoute(SocialPostsRoute.routes.syncHistory, {}, { platform }, params);
    }
    /**
     * Perform a social action (Like, Repost, Vote) on a post.
     *
     * @param post_id The ID of the social media post.
     * @param action The action to perform.
     * @returns promise
     */
    static performAction(post_id, action) {
        return Requests.processRoute(SocialPostsRoute.routes.performAction, { action }, { post_id });
    }
    /**
     * Perform a social action (Like, Repost, Vote) on a comment.
     *
     * @param comment_id The ID of the comment.
     * @param action The action to perform.
     * @returns promise
     */
    static performCommentAction(comment_id, action) {
        return Requests.processRoute(SocialPostsRoute.routes.performCommentAction, { action }, { comment_id });
    }
    /**
     * Get ad creative performance matrix.
     */
    static creativePerformance(params) {
        return Requests.processRoute(SocialPostsRoute.routes.creativePerformance, {}, {}, params);
    }
    /**
    * List social media conversations.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialConversations
    *
    * @param params Query parameters (scheduler_id, platform, page, per_page).
    * @returns promise
    */
    static listConversations(params) {
        return Requests.processRoute(SocialPostsRoute.routes.listConversations, undefined, undefined, params);
    }
    /**
     * Sync conversations from external platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/syncSocialConversations
     *
     * @param data Body parameters (platform, scheduler_id).
     * @returns promise
     */
    static syncConversations(data) {
        return Requests.processRoute(SocialPostsRoute.routes.syncConversations, data);
    }
    /**
     * Get a specific conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/getSocialConversation
     *
     * @param conversation_id The ID of the conversation.
     * @returns promise
     */
    static getConversation(conversation_id) {
        return Requests.processRoute(SocialPostsRoute.routes.getConversation, undefined, { conversation_id });
    }
    /**
     * List messages in a conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialMessages
     *
     * @param conversation_id The ID of the conversation.
     * @param params Query parameters (sync, page, per_page).
     * @returns promise
     */
    static getConversationMessages(conversation_id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.getConversationMessages, undefined, { conversation_id }, params);
    }
    /**
     * Send a Direct Message.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/sendSocialMessage
     *
     * @param data Body parameters (message, conversation_id, recipient_id, platform, scheduler_id, media_ids).
     * @returns promise
     */
    static sendSocialMessage(data) {
        return Requests.processRoute(SocialPostsRoute.routes.sendSocialMessage, data);
    }
    /**
     * Reply to a high-intent TikTok comment via Direct Message.
     *
     * @param comment_id The ID of the comment.
     * @param data { message: string }
     */
    static replyViaDm(comment_id, data) {
        return Requests.processRoute(SocialPostsRoute.routes.replyViaDm, data, { comment_id });
    }
    /**
     * List all discovered Reddit questions (Admin Only).
     *
     * @param params Query parameters: status, subreddit, is_question.
     */
    static listRedditQuestions(params) {
        return Requests.processRoute(SocialPostsRoute.routes.listRedditQuestions, undefined, undefined, params);
    }
    /**
     * Retrieve details for a specific discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    static viewRedditQuestion(id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.viewRedditQuestion, {}, { id }, params);
    }
    /**
     * Update a Reddit question's status or metadata (Admin Only).
     *
     * @param id The UUID of the question.
     * @param data { status: 'pending'|'answered'|'ignored', metadata?: object }
     */
    static updateRedditQuestion(id, data, params) {
        return Requests.processRoute(SocialPostsRoute.routes.updateRedditQuestion, data, { id }, params);
    }
    /**
     * Delete a discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    static deleteRedditQuestion(id, params) {
        return Requests.processRoute(SocialPostsRoute.routes.deleteRedditQuestion, {}, { id }, params);
    }
    /**
     * Optimize a Reddit post for a specific subreddit using the AI engine (Admin Only).
     *
     * @param data { subreddit: string, content: string, title_id: string }
     */
    static optimizeRedditPost(data) {
        return Requests.processRoute(SocialPostsRoute.routes.optimizeRedditPost, data);
    }
    /**
     * Get a report attributing game installs, wishlists, and purchases to specific social media posts.
     *
     * @param params Filter object:
     *   - title_id: string (Required)
     *   - start_date?: string (YYYY-MM-DD)
     *   - end_date?: string (YYYY-MM-DD)
     *   - confidence_threshold?: number (0-100)
     */
    static getSocialPostAttribution(params) {
        return Requests.processRoute(SocialPostsRoute.routes.socialPostAttribution, {}, undefined, params);
    }
    /**
     * Get a report attributing game installs and revenue to specific UTM sources and campaigns.
     *
     * @param params Filter object:
     *   - title_id: string (Required)
     *   - start_date?: string (YYYY-MM-DD)
     *   - end_date?: string (YYYY-MM-DD)
     *   - confidence_threshold?: number (0-100)
     */
    static getUtmAttribution(params) {
        return Requests.processRoute(SocialPostsRoute.routes.utmAttribution, {}, undefined, params);
    }
    static getInfluencerAttribution(params) {
        return Requests.processRoute(SocialPostsRoute.routes.influencerAttribution, {}, undefined, params);
    }
}

class TitlesRoute {
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
    getPlaySession: { url: '/titles/{title_id}/play', method: HTTP_METHODS.POST },
    initiateMultipartUpload: { url: '/titles/{title_id}/deployments/multipart/initiate', method: HTTP_METHODS.POST },
    getMultipartUrls: { url: '/titles/{title_id}/deployments/multipart/urls', method: HTTP_METHODS.POST },
    completeMultipartUpload: { url: '/titles/{title_id}/deployments/multipart/complete', method: HTTP_METHODS.POST },
    // Aegis Payouts
    listDeveloperPayouts: { url: '/titles/{title_id}/payouts', method: HTTP_METHODS.GET },
    viewDeveloperPayout: { url: '/titles/{title_id}/payouts/{payout_id}', method: HTTP_METHODS.GET },
    developerPayoutSummary: { url: '/titles/{title_id}/payouts/summary', method: HTTP_METHODS.GET },
    /**
    * The Aegis Handshake: Validates if a specific install/session is authorized to play.
    * POST /titles/{title_id}/installs/{install_id}/validate
    */
    validateInstall: {
        url: '/titles/{title_id}/installs/{install_id}/validate',
        method: HTTP_METHODS.POST
    },
    listBuilds: { url: '/titles/{title_id}/deployments', method: HTTP_METHODS.GET },
    listSaves: { url: '/titles/{title_id}/installs/{install_id}/saves', method: HTTP_METHODS.GET },
    storeSave: { url: '/titles/{title_id}/installs/{install_id}/saves', method: HTTP_METHODS.POST },
    resolveSaveConflict: { url: '/titles/{title_id}/installs/{install_id}/saves/{save_id}/resolve', method: HTTP_METHODS.POST },
    wishlistToggle: {
        url: '/titles/{title_id}/wishlist',
        method: HTTP_METHODS.POST
    },
    wishlistUpdateScore: {
        url: '/titles/{title_id}/wishlist/score',
        method: HTTP_METHODS.POST
    },
    wishlistStats: {
        url: '/titles/{title_id}/wishlist/stats',
        method: HTTP_METHODS.GET
    },
    myWishlists: {
        url: '/users/me/wishlists',
        method: HTTP_METHODS.GET
    },
    wishlistMe: {
        url: '/titles/{title_id}/wishlist/me',
        method: HTTP_METHODS.GET
    },
    attributionFunnel: {
        url: '/titles/{title_id}/reports/attribution-funnel',
        method: HTTP_METHODS.GET
    },
    updateBuildStatus: { url: '/titles/{title_id}/deployments/{build_id}/status', method: HTTP_METHODS.PUT },
    // Inside the routes object in TitlesRoute.ts
    getMatchmakerServer: {
        url: '/titles/{title_id}/matchmaker/server',
        method: HTTP_METHODS.GET
    },
    matchmakerSessionHeartbeat: {
        url: '/titles/{title_id}/matchmaker/session/heartbeat',
        method: HTTP_METHODS.POST
    },
    matchmakerSessionRelease: {
        url: '/titles/{title_id}/matchmaker/session/release',
        method: HTTP_METHODS.POST
    },
    getTechnicalEventSummary: {
        url: '/titles/{title_id}/analytics/events-summary',
        method: HTTP_METHODS.GET
    },
    // --- Title Progression Definitions (Developer API) ---
    progressionStatsList: { url: '/titles/{title_id}/progression/stats', method: HTTP_METHODS.GET },
    progressionStatsStore: { url: '/titles/{title_id}/progression/stats', method: HTTP_METHODS.POST },
    progressionStatsDelete: { url: '/titles/{title_id}/progression/stats/{id}', method: HTTP_METHODS.DELETE },
    progressionAchievementsList: { url: '/titles/{title_id}/progression/achievements', method: HTTP_METHODS.GET },
    progressionAchievementsStore: { url: '/titles/{title_id}/progression/achievements', method: HTTP_METHODS.POST },
    progressionLeaderboardsList: { url: '/titles/{title_id}/progression/leaderboards', method: HTTP_METHODS.GET },
    progressionLeaderboardsStore: { url: '/titles/{title_id}/progression/leaderboards', method: HTTP_METHODS.POST },
    progressionSeasonsList: { url: '/titles/{title_id}/progression/seasons', method: HTTP_METHODS.GET },
    progressionSeasonsStore: { url: '/titles/{title_id}/progression/seasons', method: HTTP_METHODS.POST },
    // --- In-Game Progression (Client API) ---
    progressionSubmit: { url: '/titles/{title_id}/installs/{install_id}/submit', method: HTTP_METHODS.POST },
    progressionPlayerStats: { url: '/titles/{title_id}/installs/{install_id}/stats', method: HTTP_METHODS.GET },
    progressionPlayerAchievements: { url: '/titles/{title_id}/installs/{install_id}/achievements', method: HTTP_METHODS.GET },
    progressionLeaderboardView: { url: '/titles/{title_id}/leaderboards/{api_key}', method: HTTP_METHODS.GET },
    communityActivity: { url: '/titles/activity/trending', method: HTTP_METHODS.GET },
    socialTrending: { url: '/titles/activity/social', method: HTTP_METHODS.GET },
    discoveryQueue: { url: '/titles/discovery/queue', method: HTTP_METHODS.GET },
    /**
    * Curated, playable feed for the Swipe interface.
    * GET /titles/discovery/swipe
    */
    swipeFeed: { url: '/titles/discovery/swipe', method: HTTP_METHODS.GET },
    developerPayoutConsolidatedSummary: {
        url: '/titles/{title_id}/payouts/consolidated-summary',
        method: HTTP_METHODS.GET
    },
    wishlistHistory: { url: '/titles/{title_id}/wishlist/history', method: HTTP_METHODS.GET },
    wishlistInfluencers: { url: '/titles/{title_id}/wishlist/influencers', method: HTTP_METHODS.GET },
    wishlistAds: { url: '/titles/{title_id}/wishlist/ads', method: HTTP_METHODS.GET },
    wishlistUtms: { url: '/titles/{title_id}/wishlist/utms', method: HTTP_METHODS.GET },
    wishlistConversions: { url: '/titles/{title_id}/wishlist/conversions', method: HTTP_METHODS.GET },
    wishlistGeo: { url: '/titles/{title_id}/wishlist/geo', method: HTTP_METHODS.GET },
    wishlistDevices: { url: '/titles/{title_id}/wishlist/devices', method: HTTP_METHODS.GET },
    // Game Reviews
    reviewsList: { url: '/titles/{title_id}/reviews', method: HTTP_METHODS.GET },
    reviewsSummary: { url: '/titles/{title_id}/review-summary', method: HTTP_METHODS.GET },
    reviewsCreate: { url: '/titles/{title_id}/reviews', method: HTTP_METHODS.POST },
    reviewsShow: { url: '/reviews/{review_id}', method: HTTP_METHODS.GET },
    reviewsUpdate: { url: '/reviews/{review_id}', method: HTTP_METHODS.PATCH },
    reviewsDelete: { url: '/reviews/{review_id}', method: HTTP_METHODS.DELETE },
    reviewsVote: { url: '/reviews/{review_id}/vote', method: HTTP_METHODS.POST },
    reviewsReport: { url: '/reviews/{review_id}/report', method: HTTP_METHODS.POST },
    reviewsDeveloperResponse: { url: '/reviews/{review_id}/developer-response', method: HTTP_METHODS.POST },
};

class Titles {
    /**
     * List all the Titles.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(TitlesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(TitlesRoute.routes.create, data, undefined, params);
    }
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
    static update(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.update, data, { title_id: title_id }, params);
    }
    /**
     * Retrieve the information for a single title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     *
     * @param title_id The id fo the title to retrieve.
     *
     * @returns promise
     */
    static view(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.view, {}, { title_id: title_id }, params);
    }
    /**
     * Deletes a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     *
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    static delete(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.delete, {}, { title_id: title_id }, params);
    }
    /**
     * Approve a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static approve(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.approve, data, { title_id: title_id }, params);
    }
    /**
     * Reject a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static reject(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.reject, data, { title_id: title_id }, params);
    }
    /**
     * Add a user as an administrator to a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/addTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static addAdministrator(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.addAdministrator, data, { title_id: title_id }, params);
    }
    /**
     * Remove a user as an administrator toa  tile
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/removeTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static removeAdministrator(title_id, user_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.removeAdministrator, data, { title_id: title_id, user_id: user_id }, params);
    }
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
    static uploadMainImageFile(title_id, file, data, params) {
        let url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadMainImageBlob(title_id, blob, data, params) {
        let url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadBannerImageFile(title_id, file, data, params) {
        let url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadBannerImageBlob(title_id, blob, data, params) {
        let url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    /**
    * Add media to a title.
    */
    static addMedia(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.addMedia, data, { title_id: title_id }, params);
    }
    /**
     * Remove media from a title.
     */
    static removeMedia(title_id, media_id, params) {
        return Requests.processRoute(TitlesRoute.routes.removeMedia, {}, { title_id: title_id, media_id: media_id }, params);
    }
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
    static updateMediaOrder(title_id, media_order) {
        return Requests.processRoute(TitlesRoute.routes.updateMediaOrder, { media_order }, { title_id: title_id });
    }
    /**
     * Upload a CSV/Excel file containing wishlist data for a title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Any additional form data, e.g. platform
     * @returns AxiosPromise
     */
    static importWishlist(title_id, file, data, params) {
        let url = TitlesRoute.routes.importWishlist.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }
    /**
     * Retrieve the wishlist data for a specific title.
     *
     * @param title_id The UUID of the title
     * @param params Optional query params, e.g. { platform: 'steam', start_date: '2025-01-01', end_date: '2025-01-31'}
     * @returns AxiosPromise
     */
    static getWishlist(title_id, params) {
        TitlesRoute.routes.getWishlist.url.replace('{title_id}', title_id);
        return Requests.processRoute(TitlesRoute.routes.getWishlist, {}, { title_id }, params);
    }
    /**
   * Create a new API token for a title.
   * Returns { full_token: string, token: TitleToken }.
   */
    static createTitleToken(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createToken, data, { title_id });
    }
    /**
     * List all tokens for a title.
     */
    static listTitleTokens(title_id) {
        return Requests.processRoute(TitlesRoute.routes.listTokens, {}, { title_id });
    }
    /**
     * Revoke a specific token by ID.
     */
    static revokeTitleToken(title_id, token_id) {
        return Requests.processRoute(TitlesRoute.routes.revokeToken, {}, { title_id, token_id });
    }
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
    static search(params) {
        return Requests.processRoute(TitlesRoute.routes.search, {}, undefined, params);
    }
    /**
    * List game installs for a specific title.
    */
    static listInstalls(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listInstalls, {}, { title_id: title_id }, params);
    }
    /**
     * View a single game install record.
     */
    static viewInstall(title_id, install_id, params) {
        return Requests.processRoute(TitlesRoute.routes.viewInstall, {}, { title_id: title_id, install_id: install_id }, params);
    }
    /**
     * Create or update a game install record.
     *
     * `user_install_id` is required. `game_build_id` is optional: send the
     * exact Glitch build UUID returned as `build_id` by a play session when it
     * is available, and omit it for external/legacy/unknown builds. Do not
     * guess a build id. `game_version`, `build_type`, `device_id`, platform,
     * device type, and operating system may be sent independently.
     */
    static createInstall(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.createInstall, data, { title_id: title_id }, params);
    }
    /**
     * List retention events for a specific title.
     */
    static listRetentions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listRetentions, {}, { title_id: title_id }, params);
    }
    /**
     * Get a summary report of retention events for a specific title.
     */
    static retentionSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.retentionSummary, {}, { title_id: title_id }, params);
    }
    /** Filter/group by platform, device_type, operating_system, game_version, optional game_build_id, or optional device_id. */
    static activeRetentions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.activeRetentions, {}, { title_id }, params);
    }
    static retentionAnalysis(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.retentionAnalysis, {}, { title_id }, params);
    }
    /** Returns string dimensions plus labeled `builds` and `devices` options for report filters. */
    static distinctDimensions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.distinctDimensions, {}, { title_id }, params);
    }
    /**
     * List sessions for a specific title, with optional filters and pagination.
     * Returns a paginated list of sessions with start/end times, session_length,
     * build/version/device snapshots, and user info. `game_build_id` and
     * `device_id` filters are optional; unattributed/unknown options are exposed
     * by distinctDimensions.
     */
    static listSessions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listSessions, {}, { title_id }, params);
    }
    /**
     * Get aggregated average session length data (daily/weekly/monthly) for a title.
     * Optionally filter/group by platform, device type, OS, version, exact
     * build id, or device id.
     */
    static sessionsAverage(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.sessionsAverage, {}, { title_id }, params);
    }
    static sessionsHistogram(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.sessionsHistogram, {}, { title_id }, params);
    }
    /**
     * Upload a CSV/Excel file containing daily UTM analytics for a specific title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Optional form fields (if needed)
     * @param params Optional query parameters
     * @returns AxiosPromise
     */
    static importUtmAnalytics(title_id, file, data, params) {
        const url = TitlesRoute.routes.importUtmAnalytics.url.replace("{title_id}", title_id);
        return Requests.uploadFile(url, "file", file, data, params);
    }
    /**
     * Retrieve the UTM analytics data for a title (paginated, filterable, sortable).
     *
     * GET /titles/{title_id}/utm
     *
     * @param title_id The UUID of the title
     * @param params Optional query params: start_date, end_date, source, device_type, sort_by, etc.
     * @returns AxiosPromise
     */
    static getUtmAnalytics(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getUtmAnalytics, {}, { title_id }, params);
    }
    /**
     * Get the web tracking token used for websites.
     *
     * GET /titles/{title_id}/webTrackingToken
     *
     * @param title_id The UUID of the title
     * @param params Optional query params:
     * @returns AxiosPromise
     */
    static getWebTrackingToken(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getWebTrackingToken, {}, { title_id }, params);
    }
    /**
     * Analyze UTM data with optional group_by (source, campaign, medium, device_type, etc.)
     *
     * GET /titles/{title_id}/utm/analysis
     *
     * @param title_id The UUID of the title
     * @param params e.g. ?group_by=source&start_date=YYYY-MM-DD
     * @returns AxiosPromise
     */
    static analyzeUtmAnalytics(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.analyzeUtmAnalytics, {}, { title_id }, params);
    }
    /**
     * List all chat sessions for a title.
     */
    static chatListSessions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatListSessions, {}, { title_id }, params);
    }
    /**
     * Get a specific chat session and its messages.
     */
    static chatShowSession(title_id, session_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatShowSession, {}, { title_id, session_id }, params);
    }
    /**
     * Search messages across all sessions of a title.
     */
    static chatListMessages(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.chatListMessages, {}, { title_id }, params);
    }
    /**
     * Update a specific chat message.
     */
    static chatUpdateMessage(title_id, message_id, data) {
        return Requests.processRoute(TitlesRoute.routes.chatUpdateMessage, data, { title_id, message_id });
    }
    /**
  * List all purchase events for a specific title.
  * Matches GET /titles/{title_id}/purchases
  */
    static listPurchases(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesList, {}, { title_id }, params);
    }
    /**
     * Retrieve a single purchase record by ID.
     * Matches GET /titles/{title_id}/purchases/{purchase_id}
     */
    static viewPurchase(title_id, purchase_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesShow, {}, { title_id, purchase_id }, params);
    }
    /**
     * Create a new purchase record.
     * Matches POST /titles/{title_id}/purchases
     */
    static createPurchase(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesCreate, data, { title_id }, params);
    }
    /**
     * Get a summary of total revenue, grouped by day or purchase_type.
     * Matches GET /titles/{title_id}/purchases/summary
     */
    static purchaseSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesSummary, {}, { title_id }, params);
    }
    /**
     * Revenue by time (daily, weekly, or monthly).
     * Matches GET /titles/{title_id}/purchases/reports/time
     */
    static purchaseRevenueByTime(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesTimeReport, {}, { title_id }, params);
    }
    /**
     * 30-day LTV (Lifetime Value) per install.
     * Matches GET /titles/{title_id}/purchases/reports/ltv30
     */
    static purchaseLtv30(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesLtv30Report, {}, { title_id }, params);
    }
    /**
     * Show breakdown of revenue per currency, with optional USD conversion.
     * Matches GET /titles/{title_id}/purchases/reports/currency
     */
    static purchaseCurrencyBreakdown(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesCurrencyBreakdown, {}, { title_id }, params);
    }
    /**
     * Distribution of installs by total revenue, plus a histogram array.
     * Matches GET /titles/{title_id}/purchases/reports/install-distribution
     */
    static installRevenueDistribution(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesInstallDistribution, {}, { title_id }, params);
    }
    /**
     * Stats by item SKU, purchase type, and repeat purchase analysis.
     * Matches GET /titles/{title_id}/purchases/reports/item-type-stats
     */
    static itemAndPurchaseTypeStats(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.purchasesItemTypeStats, {}, { title_id }, params);
    }
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
    static importKeys(title_id, file, data, params) {
        const url = TitlesRoute.routes.importKeys.url.replace("{title_id}", title_id);
        return Requests.uploadFile(url, "file", file, data, params);
    }
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
    static updateAdministrator(title_id, user_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.updateAdministrator, data, { title_id: title_id, user_id: user_id }, params);
    }
    /**
 * List ad conversion events for a title with filtering
 */
    static listAdConversionEvents(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listAdConversionEvents, {}, { title_id }, params);
    }
    /**
     * Retry a failed or pending ad conversion event
     */
    static retryAdConversionEvent(title_id, event_id) {
        return Requests.processRoute(TitlesRoute.routes.retryAdConversionEvent, {}, { title_id, event_id });
    }
    /**
    * List all landing pages for a specific title.
    * @param title_id The UUID of the title.
    * @param params Optional query parameters for pagination.
    */
    static listLandingPages(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listLandingPages, {}, { title_id }, params);
    }
    /**
     * Create a new landing page for a title.
     * @param title_id The UUID of the title.
     * @param data The data for the new landing page.
     */
    static createLandingPage(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.createLandingPage, data, { title_id }, params);
    }
    /**
     * View a specific landing page by its ID.
     * @param landing_page_id The UUID of the landing page.
     */
    static viewLandingPage(landing_page_id, params) {
        return Requests.processRoute(TitlesRoute.routes.viewLandingPage, {}, { landing_page_id }, params);
    }
    /**
     * Update an existing landing page.
     * @param landing_page_id The UUID of the landing page to update.
     * @param data The new data for the landing page.
     */
    static updateLandingPage(landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.updateLandingPage, data, { landing_page_id }, params);
    }
    /**
     * Delete a landing page.
     * @param landing_page_id The UUID of the landing page to delete.
     */
    static deleteLandingPage(landing_page_id, params) {
        return Requests.processRoute(TitlesRoute.routes.deleteLandingPage, {}, { landing_page_id }, params);
    }
    /**
     * Trigger an AI translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param data An object containing the target language code, e.g., { language_code: 'es' }.
     */
    static translateLandingPage(landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.translateLandingPage, data, { landing_page_id }, params);
    }
    /**
    * Generate or regenerate AI-powered HTML content for a landing page.
    * @param landing_page_id The UUID of the landing page.
    * @param data An object containing the prompt, language_code, and privacy_mode.
    */
    static generateLandingPageAiContent(landing_page_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.generateLandingPageAiContent, data, { landing_page_id }, params);
    }
    /**
     * Create or update a specific translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param translationData The full translation object to be saved.
     */
    static saveLandingPageTranslation(landing_page_id, translationData, params) {
        return Requests.processRoute(TitlesRoute.routes.saveLandingPageTranslation, translationData, { landing_page_id }, params);
    }
    static cohorts(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.cohorts, {}, { title_id }, params);
    }
    /**
 * Get an aggregated report of ad conversion events for charting.
 */
    static getAdConversionEventsReport(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getAdConversionEventsReport, {}, { title_id }, params);
    }
    /**
     * Get a geographical distribution report for installs.
     * @param params e.g., { group_by: 'country_code', start_date: '2025-01-01' }
     */
    static geoReport(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.geoReport, {}, { title_id }, params);
    }
    /**
     * List and filter raw game events (telemetry).
     */
    static listEvents(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listEvents, {}, { title_id }, params);
    }
    /**
     * Record a single in-game action.
     *
     * Keep step_key and action_key stable. Optional step_label,
     * step_description, event_label, and event_description fields are
     * canonical display text for those keys within the title.
     */
    static createEvent(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createEvent, data, { title_id });
    }
    /**
     * Record multiple events in one request (Batching).
     * @param data { events: Array<{game_install_id, step_key, step_label?, step_description?, action_key, event_label?, event_description?, previous_step_key?, metadata?, event_timestamp?}> }
     */
    static bulkCreateEvents(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.bulkCreateEvents, data, { title_id });
    }
    /**
     * Get a summary of actions per step.
     */
    static eventSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.eventSummary, {}, { title_id }, params);
    }
    /**
     * Get all unique step and action keys used in this title.
     */
    static eventDistinctKeys(title_id) {
        return Requests.processRoute(TitlesRoute.routes.eventDistinctKeys, {}, { title_id });
    }
    /**
     * List all saved behavioral funnel definitions.
     */
    static listBehavioralFunnels(title_id) {
        return Requests.processRoute(TitlesRoute.routes.listBehavioralFunnels, {}, { title_id });
    }
    /**
     * Create and save a new behavioral funnel definition.
     * @param data { name: string, description?: string, steps: string[] }
     */
    static createBehavioralFunnel(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.createBehavioralFunnel, data, { title_id });
    }
    /**
     * Generate the drop-off report for a specific behavioral funnel.
     * @param params { start_date?: string, end_date?: string }
     */
    static behavioralFunnelReport(title_id, funnel_id, params) {
        return Requests.processRoute(TitlesRoute.routes.behavioralFunnelReport, {}, { title_id, funnel_id }, params);
    }
    /**
     * Delete a saved behavioral funnel definition.
     */
    static deleteBehavioralFunnel(title_id, funnel_id) {
        return Requests.processRoute(TitlesRoute.routes.deleteBehavioralFunnel, {}, { title_id, funnel_id });
    }
    /**
    * Generates a presigned S3 URL for uploading a game build ZIP.
    */
    static getDeploymentUploadUrl(title_id) {
        return Requests.processRoute(TitlesRoute.routes.getDeploymentUploadUrl, {}, { title_id });
    }
    /**
     * Confirms the upload and starts the automated deployment/extraction process.
     * @param data { file_path: string, version_string: string, entry_point?: string }
     */
    static confirmDeployment(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.confirmDeployment, data, { title_id });
    }
    /**
     * Initializes a play session. Handles age-gating and license verification.
     * Returns the CDN URL for WASM/iFrame or Signaling URL for Pixel Streaming.
     */
    static getPlaySession(title_id, data, params) {
        return Requests.processRoute(TitlesRoute.routes.getPlaySession, data, { title_id }, params);
    }
    /**
     * List all developer payouts for a title.
     */
    static listDeveloperPayouts(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listDeveloperPayouts, undefined, { title_id }, params);
    }
    /**
     * View a specific payout record.
     */
    static viewDeveloperPayout(title_id, payout_id) {
        return Requests.processRoute(TitlesRoute.routes.viewDeveloperPayout, {}, { title_id, payout_id });
    }
    /**
     * Get the total earnings and playtime summary for a title.
     */
    static getDeveloperPayoutSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.developerPayoutSummary, {}, { title_id }, params);
    }
    /**
     * The Aegis Handshake: Verify if a player is allowed to play.
     *
     * This is used by the game engine (Unity/Unreal) to confirm that the
     * current session is valid and the user has a proper license.
     *
     * @see https://api.glitch.fun/api/documentation#/Aegis%20Security/validateGameSession
     *
     * @param title_id The UUID of the game title.
     * @param install_id The UUID of the specific install/session.
     * @returns AxiosPromise containing { valid: boolean, user_name: string, license_type: string }
     */
    static validateInstall(title_id, install_id) {
        return Requests.processRoute(TitlesRoute.routes.validateInstall, {}, { title_id: title_id, install_id: install_id });
    }
    /**
     * List all builds/deployments for a specific title.
     * @param title_id The UUID of the title.
     */
    static listBuilds(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.listBuilds, {}, { title_id }, params);
    }
    /**
     * List all cloud save slots for the player associated with this install.
     */
    static listSaves(title_id, install_id) {
        return Requests.processRoute(TitlesRoute.routes.listSaves, {}, { title_id, install_id });
    }
    /**
     * Upload game progress. The user is identified by the install_id.
     */
    static storeSave(title_id, install_id, data) {
        return Requests.processRoute(TitlesRoute.routes.storeSave, data, { title_id, install_id });
    }
    /**
     * Resolve a conflict.
     */
    static resolveSaveConflict(title_id, install_id, save_id, conflict_id, choice) {
        return Requests.processRoute(TitlesRoute.routes.resolveSaveConflict, { conflict_id, choice }, { title_id, install_id, save_id });
    }
    /**
    * Toggle a game on the current user's wishlist.
    * If the game is not wishlisted, it will be added. If it is, it will be removed.
    *
    * @param title_id The UUID of the title.
    * @param data Optional context: { fingerprint_id?: string, short_link_click_id?: string }
    */
    static wishlistToggle(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.wishlistToggle, data, { title_id });
    }
    /**
     * Record a self-assigned excitement score (1-5) for a wishlisted game.
     *
     * @param title_id The UUID of the title.
     * @param data { score: number } - Must be between 1 and 5.
     */
    static wishlistUpdateScore(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.wishlistUpdateScore, data, { title_id });
    }
    /**
     * Retrieve the current user's personal wishlist collection.
     *
     * @param params Optional pagination parameters (?page=1&per_page=25)
     */
    static myWishlists(params) {
        return Requests.processRoute(TitlesRoute.routes.myWishlists, undefined, undefined, params);
    }
    /**
     * Get Wishlist Intelligence statistics for a title.
     * Includes funnel data and predictive revenue forecasting.
     * Note: Requires Title Administrator permissions.
     *
     * @param title_id The UUID of the title.
     */
    static wishlistStats(title_id) {
        return Requests.processRoute(TitlesRoute.routes.wishlistStats, undefined, { title_id });
    }
    /**
     * Get the current user's specific wishlist for a title.
     * @param title_id The UUID of the title.
     */
    static wishlistMe(title_id) {
        return Requests.processRoute(TitlesRoute.routes.wishlistMe, undefined, { title_id });
    }
    /**
     * Get the consolidated attribution funnel report.
     * @param title_id The UUID of the title.
     */
    static attributionFunnel(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.attributionFunnel, undefined, { title_id }, params);
    }
    /**
     * Update the status of a specific deployment build.
     * @param title_id The UUID of the title.
     * @param build_id The UUID of the build.
     * @param status The new status ('ready', 'inactive', or 'failed').
     */
    static updateBuildStatus(title_id, build_id, status) {
        return Requests.processRoute(TitlesRoute.routes.updateBuildStatus, { status }, { title_id, build_id });
    }
    /**
 * Proxies a request through the backend to the matchmaker.
 * This avoids HTTPS -> HTTP mixed content blocks.
 *
 * @param title_id The UUID of the game title.
 * @returns AxiosPromise containing { signallingServer: string }
 */
    static getMatchmakerServer(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getMatchmakerServer, {}, { title_id }, params // ← passes as ?sessionId=xxx via Requests.get()
        );
    }
    /**
     * Send a session heartbeat to keep the dedicated instance claimed.
     * Called every 30s during active gameplay.
     */
    static matchmakerSessionHeartbeat(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.matchmakerSessionHeartbeat, data, { title_id });
    }
    /**
     * Release the session (starts reclaim countdown).
     * Called on beforeunload or explicit navigation away.
     */
    static matchmakerSessionRelease(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.matchmakerSessionRelease, data, { title_id });
    }
    /**
    * Initiates a resumable S3 multipart upload for large files.
    */
    static initiateMultipartUpload(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.initiateMultipartUpload, data, { title_id });
    }
    /**
     * Get presigned URLs for specific chunk parts.
     */
    static getMultipartUrls(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.getMultipartUrls, data, { title_id });
    }
    /**
     * Stitch together all uploaded chunks to complete the file in S3.
     */
    static completeMultipartUpload(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.completeMultipartUpload, data, { title_id });
    }
    // --- Developer Definition Methods ---
    static listProgressionStats(title_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionStatsList, undefined, { title_id });
    }
    static createProgressionStat(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.progressionStatsStore, data, { title_id });
    }
    static deleteProgressionStat(title_id, id) {
        return Requests.processRoute(TitlesRoute.routes.progressionStatsDelete, undefined, { title_id, id });
    }
    static listProgressionAchievements(title_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionAchievementsList, undefined, { title_id });
    }
    static createProgressionAchievement(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.progressionAchievementsStore, data, { title_id });
    }
    static listProgressionLeaderboards(title_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionLeaderboardsList, undefined, { title_id });
    }
    static createProgressionLeaderboard(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.progressionLeaderboardsStore, data, { title_id });
    }
    static listProgressionSeasons(title_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionSeasonsList, undefined, { title_id });
    }
    static createProgressionSeason(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.progressionSeasonsStore, data, { title_id });
    }
    /**
     * Submit a gameplay run. Updates stats and scores using the install_id for privacy.
     * @param data { idempotency_key: string, payload: { stats: {}, scores: {} } }
     */
    static submitProgressionRun(title_id, install_id, data) {
        return Requests.processRoute(TitlesRoute.routes.progressionSubmit, data, { title_id, install_id });
    }
    static getProgressionPlayerStats(title_id, install_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionPlayerStats, undefined, { title_id, install_id });
    }
    static getProgressionPlayerAchievements(title_id, install_id) {
        return Requests.processRoute(TitlesRoute.routes.progressionPlayerAchievements, undefined, { title_id, install_id });
    }
    /** Compatibility alias matching the list-style naming used by the frontend. */
    static listProgressionPlayerAchievements(title_id, install_id) {
        return this.getProgressionPlayerAchievements(title_id, install_id);
    }
    /**
     * View leaderboard rankings.
     * @param params Optional filters like { around_me: true, install_id: 'uuid', season_id: 'uuid' }
     */
    static getProgressionLeaderboard(title_id, api_key, params) {
        return Requests.processRoute(TitlesRoute.routes.progressionLeaderboardView, undefined, { title_id, api_key }, params);
    }
    static getTechnicalEventSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.getTechnicalEventSummary, {}, { title_id }, params);
    }
    /**
     * Get games ranked by community activity (active players).
     *
     * @param params
     *   - window: number (hours, default 24)
     *   - limit: number (default 10)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getCommunityActivity(params) {
        return Requests.processRoute(TitlesRoute.routes.communityActivity, {}, {}, params);
    }
    /**
     * Get games trending on social media.
     *
     * @param params
     *   - type: 'influencer' (campaigns) or 'organic' (non-paid)
     *   - window: number (hours, default 168)
     *   - limit: number (default 10)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getSocialTrending(params) {
        return Requests.processRoute(TitlesRoute.routes.socialTrending, {}, {}, params);
    }
    /**
     * Get a personalized discovery queue of games.
     *
     * @param params
     *   - limit: number (default 12)
     *   - device_id: string (highly recommended for guest tracking)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getDiscoveryQueue(params) {
        return Requests.processRoute(TitlesRoute.routes.discoveryQueue, {}, {}, params);
    }
    /**
    * Get a curated, playable feed for the Swipe interface.
    * This route ensures games have builds and images, and supports seeded randomization.
    *
    * @see https://api.glitch.fun/api/documentation#/Discovery/getSwipeFeed
    *
    * @param params Object of query params:
    *   - seed?: number (For consistent randomization)
    *   - genres?: string[] (Filter by genre names)
    *   - models?: string[] (premium, rental, subscription, free)
    *   - is_nsfw?: 1 | 0 (1 for adult titles only, 0 for safe titles only)
    *   - excluded_ids?: string[] (UUIDs to skip)
    *   - page?: number
    *   - per_page?: number
    */
    static swipeFeed(params) {
        return Requests.processRoute(TitlesRoute.routes.swipeFeed, {}, undefined, params);
    }
    /**
     * Get a consolidated report of all earnings for a title, including
     * playtime payouts, direct premium purchases, and rentals (minus refunds).
     *
     * @param title_id The UUID of the title.
     * @returns AxiosPromise containing the consolidated financial data.
     */
    static getDeveloperPayoutConsolidatedSummary(title_id) {
        return Requests.processRoute(TitlesRoute.routes.developerPayoutConsolidatedSummary, {}, { title_id });
    }
    static wishlistHistory(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistHistory, undefined, { title_id }, params);
    }
    static wishlistInfluencers(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistInfluencers, undefined, { title_id }, params);
    }
    static wishlistAds(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistAds, undefined, { title_id }, params);
    }
    static wishlistUtms(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistUtms, undefined, { title_id }, params);
    }
    static wishlistConversions(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistConversions, undefined, { title_id }, params);
    }
    static wishlistGeo(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistGeo, undefined, { title_id }, params);
    }
    static wishlistDevices(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.wishlistDevices, undefined, { title_id }, params);
    }
    /**
     * List public reviews for a title.
     *
     * @param title_id The UUID of the title.
     * @param params Optional filters: recommendation, language, current_version_only,
     * verified_only, platform, acquisition_type, complaint, playtime, sort, per_page.
     */
    static listReviews(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.reviewsList, {}, { title_id }, params);
    }
    /**
     * Get aggregate review scores and structured praise/complaint summaries.
     */
    static reviewSummary(title_id, params) {
        return Requests.processRoute(TitlesRoute.routes.reviewsSummary, {}, { title_id }, params);
    }
    /**
     * Create the current user's review for a title. The backend verifies play/purchase eligibility.
     */
    static createReview(title_id, data) {
        return Requests.processRoute(TitlesRoute.routes.reviewsCreate, data, { title_id });
    }
    /**
     * View a single review, including revision history when the backend includes it.
     */
    static viewReview(review_id, params) {
        return Requests.processRoute(TitlesRoute.routes.reviewsShow, {}, { review_id }, params);
    }
    /**
     * Update the current user's review and preserve a backend revision trail.
     */
    static updateReview(review_id, data) {
        return Requests.processRoute(TitlesRoute.routes.reviewsUpdate, data, { review_id });
    }
    /**
     * Delete the current user's review, or a title admin's moderated review.
     */
    static deleteReview(review_id) {
        return Requests.processRoute(TitlesRoute.routes.reviewsDelete, {}, { review_id });
    }
    /**
     * Vote on a review as helpful, funny, detailed, or not helpful.
     */
    static voteReview(review_id, vote_type) {
        return Requests.processRoute(TitlesRoute.routes.reviewsVote, { vote_type }, { review_id });
    }
    /**
     * Report a review for moderation.
     */
    static reportReview(review_id, data) {
        return Requests.processRoute(TitlesRoute.routes.reviewsReport, data, { review_id });
    }
    /**
     * Create or update the title developer's official response to a review.
     */
    static respondToReview(review_id, data) {
        return Requests.processRoute(TitlesRoute.routes.reviewsDeveloperResponse, data, { review_id });
    }
}

class CampaignsRoute {
}
CampaignsRoute.routes = {
    listCampaigns: { url: '/campaigns', method: HTTP_METHODS.GET },
    listPublicCampaigns: { url: '/campaigns/public', method: HTTP_METHODS.GET },
    createCampaign: { url: '/campaigns', method: HTTP_METHODS.POST },
    viewCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
    updateCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
    deleteCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
    getLedger: { url: '/campaigns/{campaign_id}/ledger', method: HTTP_METHODS.GET },
    getPosts: { url: '/campaigns/{campaign_id}/posts', method: HTTP_METHODS.GET },
    getCampaignCalendar: { url: '/campaigns/{campaign_id}/calendar', method: HTTP_METHODS.GET },
    statistics: { url: '/campaigns/{campaign_id}/statistics', method: HTTP_METHODS.GET },
    streamViewCounts: { url: '/campaigns/{campaign_id}/streamViewCounts', method: HTTP_METHODS.GET },
    listCampaignLinks: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.GET },
    createCampaignLink: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.POST },
    getCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.GET },
    updateCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.PUT },
    deleteCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.DELETE },
    createInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers', method: HTTP_METHODS.POST },
    listInfluencerCampaigns: { url: '/campaigns/influencers', method: HTTP_METHODS.GET },
    getInfluencerCalendar: { url: '/campaigns/influencers/calendar', method: HTTP_METHODS.GET },
    viewInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.GET },
    saveInfluencerCalendarPosts: { url: '/campaigns/{campaign_id}/influencers/{user_id}/calendar-posts', method: HTTP_METHODS.POST },
    updateInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.PUT },
    deleteInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.DELETE },
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
    influencerInviteProfileContext: { url: '/campaigns/{campaign_id}/influencers/invites/profile-context', method: HTTP_METHODS.GET },
    influencerInviteProfileSend: { url: '/campaigns/{campaign_id}/influencers/invites/profile-send', method: HTTP_METHODS.POST },
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

class Campaigns {
    /**
     * List all the Campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaigns, undefined, undefined, params);
    }
    /**
     * List public influencer campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getPublicCampaigns
     *
     * @returns promise
     */
    static listPublic(params) {
        return Requests.processRoute(CampaignsRoute.routes.listPublicCampaigns, undefined, undefined, params);
    }
    /**
     * Create a new campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/createCampaign
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaign, data, undefined, params);
    }
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
    static update(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaign, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignByUuid
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static view(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.viewCampaign, {}, { campaign_id: campaign_id }, params);
    }
    /**
     * Deletes a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaign
     *
     * @param campaign_id The id of the campaign to delete.
     * @returns promise
     */
    static delete(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteCampaign, {}, { campaign_id: campaign_id }, params);
    }
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getLedger(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getLedger, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Get the post associated with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getPosts(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getPosts, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Get planned influencer content for a campaign calendar.
     *
     * @param campaign_id The campaign id to retrieve calendar posts for.
     * @param params Optional filters such as scheduled_at_from, scheduled_at_to, status, or user_id.
     */
    static getCampaignCalendar(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getCampaignCalendar, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/campaignStatistics
     *
     * @returns promise
     */
    static statistics(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.statistics, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignStreamViewCounts
     *
     * @returns promise
     */
    static getStreamViewCounts(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.streamViewCounts, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Retrieve recommended influencers for a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/recommendInfluencers
     *
     * @returns promise
     */
    static getRecommendedInfluencers(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getRecommendedInfluencers, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listCampaignLinks(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignLinks, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listInfluencerCampaignLinkClicks(campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinkClicks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Create a new campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignLink(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaignLink, data, { campaign_id: campaign_id }, params);
    }
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
    static updateCampaignLink(campaign_id, link_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaignLink, data, { campaign_id: campaign_id, link_id: link_id }, params);
    }
    /**
     * Delete a campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaignLink
     *
     * @param campaign_id The id of the campaign to update.
     * @param link_id The id of the campaign link to delete.
     *
     * @returns promise
     */
    static deleteCampaignLink(campaign_id, link_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteCampaignLink, {}, { campaign_id: campaign_id, link_id: link_id }, params);
    }
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignLink(campaign_id, link_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getCampaignLink, {}, { campaign_id: campaign_id, link_id: link_id }, params);
    }
    /**
    * List all the influencers associated with a campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerCampaigns
    *
    * @returns promise
    */
    static listInfluencerCampaigns(params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaigns, undefined, undefined, params);
    }
    /**
    * List planned influencer content across the authenticated influencer's accepted campaigns.
    */
    static getInfluencerCalendar(params) {
        return Requests.processRoute(CampaignsRoute.routes.getInfluencerCalendar, undefined, undefined, params);
    }
    /**
     * Create an influencer campaign
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/6d834c837c5f330d6a4cef5786c45c90
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createInfluencerCampaign(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createInfluencerCampaign, data, { campaign_id: campaign_id }, params);
    }
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
    static updateInfluencerCampaign(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCampaign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
    * Delete an influencer campaign relationship.
    *
    * The backend route currently exists, but the controller destroy implementation is intentionally
    * treated as an agent/admin stop-gate because removal can orphan posts, payouts, or contracts.
    */
    static deleteInfluencerCampaign(campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteInfluencerCampaign, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/showInfluencerCampaign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerCampaign(campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.viewInfluencerCampaign, {}, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Create or update planned campaign content for an influencer.
     *
     * @param campaign_id The campaign id.
     * @param user_id The influencer user id.
     * @param data The posts payload.
     */
    static saveInfluencerCalendarPosts(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.saveInfluencerCalendarPosts, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Mark an influencer campaign as completed.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/markCompleted
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignComplete(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignComplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Mark an influencer campaign as incomplete.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/afffdc7a0c7fc4d9740f10517c53933e
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignIncomplete(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignIncomplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Get all the links associated with an influencer's campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static listInfluencerCampaignLinks(campaign_id, user_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
    * List all the campaign mentions.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
    *
    * @returns promise
    */
    static listCampaignMentions(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignMentions, undefined, { campaign_id: campaign_id }, params);
    }
    /**
     * Create a new campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignMention(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.createCampaignMention, data, { campaign_id: campaign_id }, params);
    }
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
    static updateCampaignMention(campaign_id, mention_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateCampaignMention, data, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }
    /**
     * Retrieve the information for a single campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignMention(campaign_id, mention_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }
    /**
    * Delete the information for a single campaign mention.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static deleteCampaignMention(campaign_id, mention_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.deleteCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }
    /**
     * Associate a country with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addCountryToCampaign
     *
     * @param data The country information to be passed to update the country campaigns information.
     *
     * @returns Promise
     */
    static addCountry(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addCountry, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Remove a country
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeCountry
     *
     * @param country_id The id of the country to remove.
     *
     * @returns Promise
     */
    static removeCountry(campaign_id, country_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeCountry, undefined, { campaign_id: campaign_id, country_id: country_id }, params);
    }
    /**
     * Associate a gender with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The gener information to be passed to update the gender information.
     *
     * @returns Promise
     */
    static addGender(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addGender, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Remove a gender
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the gender to remove.
     *
     * @returns Promise
     */
    static removeGender(campaign_id, gender_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeGender, undefined, { campaign_id: campaign_id, gender_id: gender_id }, params);
    }
    /**
     * Associate an ethnicity with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The ethnicity information to be passed to update the campaign information.
     *
     * @returns Promise
     */
    static addEthnicity(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addEthnicity, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Remove an ethnicity
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeEthnicity(campaign_id, ethnicity_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeEthnicity, undefined, { campaign_id: campaign_id, ethnicity_id: ethnicity_id }, params);
    }
    /**
    * Associate a type with the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
    *
    * @param data The type information to be passed to update the campaign information.
    *
    * @returns Promise
    */
    static addType(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.addType, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Remove an type
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param type_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeType(campaign_id, type_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.removeType, undefined, { campaign_id: campaign_id, type_id: type_id }, params);
    }
    /**
     * Get a list of influencer invites that have been sent for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvites
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static listInfluencerInvites(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerInvites, {}, { campaign_id: campaign_id }, params);
    }
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/inviteInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendInfluencerInvite(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendInfluencerInvite, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Get creator context used when preparing a personalized invite.
     */
    static creatorInviteContext(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.influencerInviteProfileContext, {}, { campaign_id: campaign_id }, params);
    }
    /**
     * Send a personalized creator invite after review.
     */
    static sendCreatorInvite(campaign_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.influencerInviteProfileSend, data, { campaign_id: campaign_id }, params);
    }
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerInvite(campaign_id, influencer_id, token, params) {
        // Ensure params is defined and includes the token
        const updatedParams = Object.assign(Object.assign({}, params), { token });
        return Requests.processRoute(CampaignsRoute.routes.viewInfluencerInvite, {}, { campaign_id: campaign_id, influencer_id: influencer_id }, updatedParams);
    }
    /**
     * Updates the influencer invite information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
     * Updates the influencer invite compenstation information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCompensationInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerCompensationInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCompensationInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
    * The route for an influencer to accept an invite.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static acceptInfluencerInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/delinceInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/withdrawInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static widthdrawInfluencerInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.widthdrawInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /** Correctly-spelled alias retained alongside the legacy method name. */
    static withdrawInfluencerInvite(campaign_id, influencer_id, data, params) {
        return this.widthdrawInfluencerInvite(campaign_id, influencer_id, data, params);
    }
    /**
    * The route to mark an influencer reachout and finished, and it will no longer send reachouts.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/finishInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static finishInfluencerInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.finishInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
   * The route to accept an influnecers request to join the campaign.
   *
   * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencer
   *
   * @param campaign_id The id fo the campaign to retrieve.
   *
   * @returns promise
   */
    static acceptInfluencerRequest(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * The route to deny an influencer request to join the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/denyInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerRequest(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * The route the route to mark the influencers request as in review.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/reviewInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static reviewInfluencerRequest(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.reviewInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Generate post content for the influencer to help them with their content creation.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generatePostContent
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContentForInfluencer(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateContentForInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Get a list of all active campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getActiveCampaignLinks
     *
     * @returns promise
     */
    static getActiveCampaignLinks(params) {
        return Requests.processRoute(CampaignsRoute.routes.getActiveCampaignLinks, undefined, undefined, params);
    }
    /**
     * Generate a contract for the influencer based on the values in the invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generateInfluencerContract
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContractFromInvite(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateContractFromInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendContractWithDocusign(campaign_id, influencer_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendContractWithDocusign, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }
    /**
     * Resend the acceptance email for the influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/resendInfluencerAcceptance
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static resendAcceptanceEmail(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.resendAcceptanceEmail, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Pay the influencer a custom amount for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/payInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static payInfluencer(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.payInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignPayouts
     *
     * @returns promise
     */
    static listPayouts(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.listPayouts, undefined, { campaign_id: campaign_id }, params);
    }
    /**
    * Generate a contract for the influencer based on the values in the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/generateCampaignContract
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static generateCampaignContract(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.generateCampaignContract, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendCampaignContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendCampaignContractWithDocusign(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.sendCampaignContractWithDocusign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }
    /**
     * Search IGDB for the campaign's game.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., search_query, limit).
     * @returns promise
     */
    static sourcingSearchIgdbForCampaignGame(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchIgdbForCampaignGame, undefined, { campaign_id }, params);
    }
    /**
     * Find popular similar games from IGDB.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., igdb_id, limit).
     * @returns promise
     */
    static sourcingGetSimilarIgdbGames(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetSimilarIgdbGames, undefined, { campaign_id }, params);
    }
    /**
     * Find content creators for selected games. This does not save them to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    static sourcingFindCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindCreators, data, { campaign_id });
    }
    /**
     * Update campaign sourcing settings.
     * @param campaign_id The UUID of the campaign.
     * @param data The settings to update (igdb_id, similar_game_igdb_ids, etc.).
     * @returns promise
     */
    static updateSourcingSettings(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcingSettings, data, { campaign_id });
    }
    /**
     * Find and save content creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    static sourcingFindAndSaveCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveCreators, data, { campaign_id });
    }
    /**
     * Get sourced creators for a campaign from the database.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for filtering, sorting, and pagination.
     * @returns promise
     */
    static getSourcedCreators(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreators, undefined, { campaign_id }, params);
    }
    /**
     * Get a single sourced creator.
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator.
     * @returns promise
     */
    static getSourcedCreator(campaign_id, sourced_creator_id) {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreator, undefined, { campaign_id, sourced_creator_id });
    }
    /**
     * Update a sourced creator (e.g., approve or reject).
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to update.
     * @param data The update data (e.g., is_approved, is_rejected).
     * @returns promise
     */
    static updateSourcedCreator(campaign_id, sourced_creator_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcedCreator, data, { campaign_id, sourced_creator_id });
    }
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
    static assignKeyToInfluencer(campaign_id, user_id, data, params) {
        return Requests.processRoute(CampaignsRoute.routes.assignKeyToInfluencer, data, { campaign_id, user_id }, params);
    }
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
    static enrichSourcedCreator(campaign_id, sourced_creator_id) {
        return Requests.processRoute(CampaignsRoute.routes.enrichSourcedCreator, {}, { campaign_id, sourced_creator_id });
    }
    /**
    * Find and save Twitch creators for selected games to the database.
    * @param campaign_id The UUID of the campaign.
    * @param data The search criteria (source, igdb_ids, etc.).
    * @returns promise
    */
    static sourcingFindAndSaveTwitchCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveTwitchCreators, data, { campaign_id });
    }
    /**
     * Find and save YouTube creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (igdb_ids, period).
     * @returns promise
     */
    static sourcingFindAndSaveYouTubeCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveYouTubeCreators, data, { campaign_id });
    }
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
    static exportSourcedCreators(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.exportSourcedCreators, undefined, { campaign_id }, params);
    }
    /**
    * Search IGDB for any game by a query string.
    * @param campaign_id The UUID of the campaign (for permission checking).
    * @param params Query parameters including 'search_query' and optional 'limit'.
    * @returns promise
    */
    static sourcingSearchAnyIgdbGame(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchAnyIgdbGame, undefined, { campaign_id }, params);
    }
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    static sourcingGetGamesByIds(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetGamesByIds, data, { campaign_id });
    }
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    static updateAutoInviteCriteria(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateAutoInviteCriteria, data, { campaign_id });
    }
    static updateCustomRanking(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateCustomRanking, data, { campaign_id });
    }
    static updateCreatorBucket(campaign_id, creator_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateCreatorBucket, data, { campaign_id, creator_id });
    }
    static reRankSourcedCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.reRankSourcedCreators, data, { campaign_id });
    }
    /**
     * Queue multiple sourced creators for profile enrichment.
     * This dispatches a background job for each creator to find their social media profiles and contact information.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of SourcedCreator IDs to enrich.
     * @param data.creator_ids An array of SourcedCreator UUIDs.
     * @returns A promise that resolves with a confirmation message and the count of queued jobs.
     */
    static bulkEnrichSourcedCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.bulkEnrichSourcedCreators, data, { campaign_id });
    }
    /**
     * Get install attribution breakdown by influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInstallReport
     *
     * @param campaign_id The UUID of the campaign.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    static getInfluencerInstallReport(campaign_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getInfluencerInstallReport, undefined, { campaign_id }, params);
    }
    /**
     * Get detailed install report for a specific influencer.
     * Accessible by Campaign Owners and the specific Influencer.
     *
     * @param campaign_id The UUID of the campaign.
     * @param influencer_id The UUID of the influencer.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    static getSpecificInfluencerInstallReport(campaign_id, influencer_id, params) {
        return Requests.processRoute(CampaignsRoute.routes.getSpecificInfluencerInstallReport, undefined, { campaign_id, influencer_id }, params);
    }
    /**
     * Generate AI Landing Page for an Influencer Campaign.
     */
    static generateInfluencerLandingPage(campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.generateInfluencerLandingPage, data, { campaign_id, user_id });
    }
    /**
     * Update settings for the Influencer Landing Page.
     */
    static updateInfluencerLandingPage(campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerLandingPage, data, { campaign_id, user_id });
    }
    /**
     * Export influencer invites to CSV.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data Filters for the export (stages, status).
     */
    static exportInfluencerInvites(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.exportInfluencerInvites, data, { campaign_id: campaign_id });
    }
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
    static sourcingFindAndSaveFanslyCreators(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveFanslyCreators, data, { campaign_id });
    }
    static sendOnboarding(campaign_id, user_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.sendOnboarding, data, { campaign_id, user_id });
    }
    /**
     * Bulk invite influencers from a previous campaign into the current one.
     *
     * @param campaign_id The UUID of the target campaign.
     * @param data { source_campaign_id: string, only_successful: boolean }
     */
    static crossPromote(campaign_id, data) {
        return Requests.processRoute(CampaignsRoute.routes.crossPromote, data, { campaign_id });
    }
}

class SubscriptionsRoute {
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
    getDeveloperToolAccess: { url: '/subscriptions/developer-tools/access', method: HTTP_METHODS.GET },
    createCustomCommunitySubscription: {
        url: '/subscriptions/communities/custom/{community_id}',
        method: HTTP_METHODS.POST
    },
    purchaseLicense: { url: '/titles/{title_id}/purchase', method: HTTP_METHODS.POST },
    listMyLicenses: { url: '/subscriptions/my-licenses', method: HTTP_METHODS.GET },
    refundLicense: { url: '/subscriptions/licenses/{license_id}/refund', method: HTTP_METHODS.POST },
    purchaseGift: { url: '/subscriptions/gifts/purchase', method: HTTP_METHODS.POST },
    redeemGift: { url: '/subscriptions/gifts/redeem', method: HTTP_METHODS.POST },
    cancelGift: { url: '/subscriptions/gifts/{gift_id}', method: HTTP_METHODS.DELETE },
    validateCoupon: { url: '/subscriptions/coupons/validate', method: HTTP_METHODS.POST },
};

class Subscriptions {
    /**
     * Get a creator subscription for the creator program.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscription
     *
     * @returns promise
     */
    static getCreatorSubscription(stripe_subscription_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.getCreatorSubscription, undefined, { stripe_subscription_id: stripe_subscription_id }, params);
    }
    /**
     * Get a s subscription plan that a community has to talk with influencers
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscription
     *
     * @returns promise
     */
    static getCommunityInfluencerSubscription(community_id, stripe_subscription_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.getCommunityInfluencerSubscription, undefined, { community_id: community_id, stripe_subscription_id: stripe_subscription_id }, params);
    }
    /**
     * List all the subscription plans that a creator has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscriptions
     *
     * @returns promise
     */
    static listCreatorSubscriptions(params) {
        return Requests.processRoute(SubscriptionsRoute.routes.listCreatorSubscriptions, undefined, undefined, params);
    }
    /**
     * List all the subscription plans that a community has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscriptions
     *
     * @returns promise
     */
    static listCommunityInfluencerSubscriptions(community_id, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.listCommunityInfluencerSubscriptions, undefined, { community_id: community_id }, params);
    }
    /**
     * Check whether the current user can access developer tool creation for a feature.
     *
     * @param params { feature: 'social_media'|'influencers'|'ads', community_id?: string, title_id?: string, scheduler_id?: string }
     * @returns promise
     */
    static getDeveloperToolAccess(params) {
        return Requests.processRoute(SubscriptionsRoute.routes.getDeveloperToolAccess, undefined, undefined, params);
    }
    /**
     * Create a new subscription of a content creator
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static createCreatorSubscription(data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCreatorSubscription, data, {}, params);
    }
    /**
     * Create a new subscription of a community engaging in influencer marketing
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static createCommunityInfluencerSubscription(community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCommunityInfluencerSubscription, data, { community_id: community_id }, params);
    }
    /**
     * Cancels a creator subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCreatorSubscription
     *
     * @returns A promise
     */
    static cancelCreatorSubscription(stripe_subscription_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCreatorSubscription, data, { stripe_subscription_id: stripe_subscription_id }, params);
    }
    /**
     * Cancels a community subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static cancelCommunityInfluencerSubscription(community_id, stripe_subscription_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCommunityInfluencerSubscription, data, { community_id: community_id, stripe_subscription_id: stripe_subscription_id }, params);
    }
    /**
     * Change the current subscription that the community is associated with.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static changeCommunityInfluencerSubscription(community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.changeCommunityInfluencerSubscription, data, { community_id: community_id }, params);
    }
    /**
    * Create a custom tailored subscription for a business/community.
    * Only accessible by Glitch administrators.
    *
    * @param community_id The ID of the community.
    * @param data { priceId, paymentMethod, custom_name, limits: { posts, enrichments, invites, ads }, metered_prices: [] }
    */
    static createCustomCommunitySubscription(community_id, data, params) {
        return Requests.processRoute(SubscriptionsRoute.routes.createCustomCommunitySubscription, data, { community_id }, params);
    }
    /**
     * Purchase a permanent license or rent a game title.
     * If a rental was active in the last 7 days, the fee is automatically deducted from the premium price.
     * @param data { purchase_type: 'premium' | 'rental', payment_method_id: string }
     */
    static purchaseLicense(title_id, data) {
        return Requests.processRoute(SubscriptionsRoute.routes.purchaseLicense, data, { title_id });
    }
    /**
     * List all game licenses (Premium/Rental) owned by the current user.
     */
    static listMyLicenses(params) {
        return Requests.processRoute(SubscriptionsRoute.routes.listMyLicenses, undefined, undefined, params);
    }
    /**
     * Request a refund for a premium purchase.
     */
    static refundLicense(license_id) {
        return Requests.processRoute(SubscriptionsRoute.routes.refundLicense, {}, { license_id });
    }
    /**
     * Purchase a game or subscription as a gift for another user.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/purchaseGift
     *
     * @param data { gift_type: 'premium'|'rental'|'subscription', payment_method_id: string, title_id?: string, recipient_id?: string, recipient_email?: string, recipient_name?: string }
     * @returns promise
     */
    static purchaseGift(data) {
        return Requests.processRoute(SubscriptionsRoute.routes.purchaseGift, data);
    }
    /**
     * Redeem a gift code to grant access to a game or subscription.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/redeemGift
     *
     * @param redemption_code The unique GLITCH-XXXX-XXXX code.
     * @returns promise
     */
    static redeemGift(redemption_code) {
        return Requests.processRoute(SubscriptionsRoute.routes.redeemGift, { redemption_code });
    }
    /**
     * Cancel an unredeemed gift and trigger a refund.
     * Only the user who purchased the gift (the giver) can perform this action.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelGift
     *
     * @param gift_id The UUID of the gift to cancel.
     * @returns promise
     */
    static cancelGift(gift_id) {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelGift, {}, { gift_id });
    }
    /**
     * Validates a coupon code and returns the calculated discount.
     * @param data { code: string, price: number, currency?: string }
     */
    static validateCoupon(data) {
        return Requests.processRoute(SubscriptionsRoute.routes.validateCoupon, data);
    }
}

class MessagesRoute {
}
MessagesRoute.routes = {
    listMessageThreads: { url: '/messages', method: HTTP_METHODS.GET },
    sendMessage: { url: '/messages', method: HTTP_METHODS.POST },
    updateMessage: { url: '/messages/{message_id}', method: HTTP_METHODS.PUT },
    deleteMessage: { url: '/messages/{message_id}', method: HTTP_METHODS.DELETE },
    createOrGetThread: { url: '/messages/makeThread', method: HTTP_METHODS.POST },
    getThread: { url: '/messages/thread/{thread_id}', method: HTTP_METHODS.GET },
};

class Messages {
    /**
     * Get all the message threads that a user has particpated in.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getConversations
     *
     * @returns promise
     */
    static listMessageThreads(params) {
        return Requests.processRoute(MessagesRoute.routes.listMessageThreads, undefined, undefined, params);
    }
    /**
     * Send a new message that will be added to a thread
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/storeMessage
     *
     * @returns A promise
     */
    static sendMessage(data, params) {
        return Requests.processRoute(MessagesRoute.routes.sendMessage, data, {}, params);
    }
    /**
     * Updates a message.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/updateMessage
     *
     * @returns A promise
     */
    static updateMessage(message_id, data, params) {
        return Requests.processRoute(MessagesRoute.routes.updateMessage, data, { message_id: message_id }, params);
    }
    /**
     * Deletes a message.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/destroyMessage
     *
     * @returns A promise
     */
    static deleteMessage(message_id, data, params) {
        return Requests.processRoute(MessagesRoute.routes.deleteMessage, data, { message_id: message_id }, params);
    }
    /**
     * A message thread is a thread between multiple users. Pass the user ids in the thread and it will either
     * get the current thread or create a new thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/conversations
     *
     * @returns A promise
     */
    static createOrGetThread(data, params) {
        return Requests.processRoute(MessagesRoute.routes.createOrGetThread, data, {}, params);
    }
    /**
     * Get a single thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getThread
     *
     * @returns promise
     */
    static getThread(thread_id, params) {
        return Requests.processRoute(MessagesRoute.routes.getThread, undefined, { thread_id: thread_id }, params);
    }
}

class FeedbackRoute {
}
FeedbackRoute.routes = {
    listFeedback: { url: '/feedback', method: HTTP_METHODS.GET },
    sendFeedback: { url: '/feedback', method: HTTP_METHODS.POST },
    viewFeedback: { url: '/feedback/{feedback_id}', method: HTTP_METHODS.GET },
    listSupportTickets: { url: '/support/tickets', method: HTTP_METHODS.GET },
    createSupportTicket: { url: '/support/tickets', method: HTTP_METHODS.POST },
    viewSupportTicket: { url: '/support/tickets/{feedback_id}', method: HTTP_METHODS.GET },
    replySupportTicket: { url: '/support/tickets/{feedback_id}/replies', method: HTTP_METHODS.POST },
    adminListFeedback: { url: '/admin/support/feedback', method: HTTP_METHODS.GET },
    adminViewFeedback: { url: '/admin/support/feedback/{feedback_id}', method: HTTP_METHODS.GET },
    adminUpdateFeedback: { url: '/admin/support/feedback/{feedback_id}', method: HTTP_METHODS.PUT },
    adminReplyFeedback: { url: '/admin/support/feedback/{feedback_id}/reply', method: HTTP_METHODS.POST },
    adminRewardFeedback: { url: '/admin/support/feedback/{feedback_id}/reward', method: HTTP_METHODS.POST },
};

class Feedback {
    /**
     * List all the feedback that been left by users.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/listFeedback
     *
     * @returns promise
     */
    static listFeedback(params) {
        return Requests.processRoute(FeedbackRoute.routes.listFeedback, undefined, undefined, params);
    }
    /**
     * View a particular item of feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/getFeedbackById
     *
     * @returns promise
     */
    static viewFeedback(feedback_id, params) {
        return Requests.processRoute(FeedbackRoute.routes.viewFeedback, undefined, { feedback_id: feedback_id }, params);
    }
    /**
     * List support tickets owned by the logged-in user.
     */
    static listSupportTickets(params) {
        return Requests.processRoute(FeedbackRoute.routes.listSupportTickets, undefined, undefined, params);
    }
    /**
     * Create a support ticket for the logged-in user.
     */
    static createSupportTicket(data, params) {
        return Requests.processRoute(FeedbackRoute.routes.createSupportTicket, data, {}, params);
    }
    /**
     * View a support ticket owned by the logged-in user.
     */
    static viewSupportTicket(feedback_id, params) {
        return Requests.processRoute(FeedbackRoute.routes.viewSupportTicket, undefined, { feedback_id: feedback_id }, params);
    }
    /**
     * Reply to a support ticket owned by the logged-in user.
     */
    static replySupportTicket(feedback_id, data, params) {
        return Requests.processRoute(FeedbackRoute.routes.replySupportTicket, data, { feedback_id: feedback_id }, params);
    }
    /**
     * Admin support inbox covering support tickets and feedback.
     */
    static adminListFeedback(params) {
        return Requests.processRoute(FeedbackRoute.routes.adminListFeedback, undefined, undefined, params);
    }
    static adminViewFeedback(feedback_id, params) {
        return Requests.processRoute(FeedbackRoute.routes.adminViewFeedback, undefined, { feedback_id: feedback_id }, params);
    }
    static adminUpdateFeedback(feedback_id, data, params) {
        return Requests.processRoute(FeedbackRoute.routes.adminUpdateFeedback, data, { feedback_id: feedback_id }, params);
    }
    static adminReplyFeedback(feedback_id, data, params) {
        return Requests.processRoute(FeedbackRoute.routes.adminReplyFeedback, data, { feedback_id: feedback_id }, params);
    }
    static adminRewardFeedback(feedback_id, data, params) {
        return Requests.processRoute(FeedbackRoute.routes.adminRewardFeedback, data, { feedback_id: feedback_id }, params);
    }
    /**
     * Submit feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @returns A promise
     */
    static sendFeedback(data, params) {
        return Requests.processRoute(FeedbackRoute.routes.sendFeedback, data, {}, params);
    }
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
    static sendFeedbackWithFile(file, data, params) {
        let url = FeedbackRoute.routes.sendFeedback.url;
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static sendFeedbackWithBlob(blob, data, params) {
        let url = FeedbackRoute.routes.sendFeedback.url;
        return Requests.uploadBlob(url, 'image', blob, data);
    }
}

class InfluencerRoutes {
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

class Influencers {
    /**
     * Add a new influencer to the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static addInfluencer(data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.addInfluencer, data, {}, params);
    }
    /**
     * Get a list of influencers available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     *
     * @returns promise
     */
    static listInfluencers(params) {
        return Requests.processRoute(InfluencerRoutes.routes.listInfluencers, undefined, undefined, params);
    }
    /**
     * Retrieve information on a single influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencerById
     *
     * @returns promise
     */
    static viewInfluencer(influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.viewInfluencer, undefined, { influencer_id: influencer_id }, params);
    }
    /**
     * Generate a profile for an influencer based on their data.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/generateInfluencerProfile
     *
     * @returns promise
     */
    static generateProfile(influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.generateProfile, undefined, { influencer_id: influencer_id }, params);
    }
    /**
     * List all the notes left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNotes
     *
     * @returns promise
     */
    static listNotes(influencer_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.listNotes, undefined, { influencer_id: influencer_id }, params);
    }
    /**
     * View a note left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNote
     *
     * @returns promise
     */
    static viewNote(influencer_id, note_id, params) {
        return Requests.processRoute(InfluencerRoutes.routes.viewNote, undefined, { influencer_id: influencer_id, note_id: note_id }, params);
    }
    /**
     * Create a new note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static createNote(influencer_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.createNote, data, { influencer_id: influencer_id }, params);
    }
    /**
    * Update a note about an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/updateInfluencersNote
    *
    * @returns promise
    */
    static updateNote(influencer_id, note_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.updateNote, data, { influencer_id: influencer_id, note_id: note_id }, params);
    }
    /**
     * Delete a note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/deleteInfluencersNote
     *
     * @returns promise
     */
    static deleteNote(influencer_id, note_id, data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.deleteNote, data, { influencer_id: influencer_id, note_id: note_id }, params);
    }
    /**
    * Get a list of contracts associated with an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
    *
    * @returns promise
    */
    static listContracts(params) {
        return Requests.processRoute(InfluencerRoutes.routes.listContracts, undefined, undefined, params);
    }
    /**
     * Download the influencer work
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/downloadInfluencersWorkbook
     *
     * @returns promise
     */
    static workbook(data, params) {
        return Requests.processRoute(InfluencerRoutes.routes.workbook, data, {}, params);
    }
}

class GamesRoutes {
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

class Games {
    /**
     * Get a list of Games available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     *
     * @returns promise
     */
    static listGames(params) {
        return Requests.processRoute(GamesRoutes.routes.listGames, undefined, undefined, params);
    }
    /**
     * Retrieve information on a single game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     *
     * @returns promise
     */
    static viewGame(game_id, params) {
        return Requests.processRoute(GamesRoutes.routes.viewGame, undefined, { game_id: game_id }, params);
    }
    /**
     * Generates campaign data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createCampaignData(game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createCampaignData, data, { game_id: game_id }, params);
    }
    /**
     * Generates campaign data with a game title.
     *
     * @returns promise
     */
    static createCampaignWithTitle(game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createCampaignWithTitle, data, { game_id: game_id }, params);
    }
    /**
     * Generates game data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createGameTitle(game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createGameTitle, data, { game_id: game_id }, params);
    }
    /**
     * Generates game scheduler data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createGameScheduler(game_id, data, params) {
        return Requests.processRoute(GamesRoutes.routes.createGameScheduler, data, { game_id: game_id }, params);
    }
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
    static getReleaseStats(params) {
        // Defensive check: ensure precision is valid if provided
        if ((params === null || params === void 0 ? void 0 : params.precision) && !['day', 'month', 'year'].includes(params.precision)) {
            console.warn(`Invalid precision '${params.precision}' passed to getReleaseStats. Defaulting to 'day'.`);
        }
        return Requests.processRoute(GamesRoutes.routes.releaseStats, undefined, undefined, params);
    }
}

class PublicationsRoutes {
}
PublicationsRoutes.routes = {
    list: { url: '/publications', method: HTTP_METHODS.GET },
    download: { url: '/publications/download', method: HTTP_METHODS.POST },
};

class Publications {
    /**
     * Get a list of all publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/getPublications
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(PublicationsRoutes.routes.list, undefined, undefined, params);
    }
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/downloadPublications
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static download(data, params) {
        return Requests.processRoute(PublicationsRoutes.routes.download, data, undefined, params);
    }
}

class GameShowsRoute {
}
/**
 * Canonical API route templates. JSON routes are substituted by
 * Requests.processRoute; multipart methods replace tokens before upload.
 */
GameShowsRoute.routes = {
    list: { url: '/gameshows', method: HTTP_METHODS.GET },
    create: { url: '/gameshows', method: HTTP_METHODS.POST },
    view: { url: '/gameshows/{show_id}', method: HTTP_METHODS.GET },
    update: { url: '/gameshows/{show_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/gameshows/{show_id}', method: HTTP_METHODS.DELETE },
    uploadLogo: { url: '/gameshows/{show_id}/uploadLogo', method: HTTP_METHODS.POST },
    uploadBannerImage: { url: '/gameshows/{show_id}/uploadBannerImage', method: HTTP_METHODS.POST },
    registerTitle: { url: '/gameshows/{show_id}/registerTitle', method: HTTP_METHODS.POST },
    // Schema-driven developer registration questions and organizer reports.
    listRegistrationQuestions: { url: '/gameshows/{show_id}/registration-questions', method: HTTP_METHODS.GET },
    manageRegistrationQuestions: { url: '/gameshows/{show_id}/registration-form/questions', method: HTTP_METHODS.GET },
    createRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions', method: HTTP_METHODS.POST },
    updateRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions/{question_id}', method: HTTP_METHODS.PUT },
    deleteRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions/{question_id}', method: HTTP_METHODS.DELETE },
    reorderRegistrationQuestions: { url: '/gameshows/{show_id}/registration-form/questions/reorder', method: HTTP_METHODS.POST },
    listRegistrationResponses: { url: '/gameshows/{show_id}/registration-form/responses', method: HTTP_METHODS.GET },
    registrationQuestionReports: { url: '/gameshows/{show_id}/registration-form/reports', method: HTTP_METHODS.GET },
    listTitles: { url: '/gameshows/{show_id}/titles', method: HTTP_METHODS.GET },
    addTitle: { url: '/gameshows/{show_id}/addTitle', method: HTTP_METHODS.POST },
    // External registration file preview/import endpoints.
    previewExternalTitles: { url: '/gameshows/{show_id}/external-titles/preview', method: HTTP_METHODS.POST },
    importExternalTitles: { url: '/gameshows/{show_id}/external-titles/import', method: HTTP_METHODS.POST },
    listTitleClaims: { url: '/gameshows/{show_id}/title-claims', method: HTTP_METHODS.GET },
    inviteTitleClaim: { url: '/gameshows/{show_id}/titles/{title_id}/claim-invitation', method: HTTP_METHODS.POST },
    viewTitleClaim: { url: '/gameshows/{show_id}/title-claims/{token}', method: HTTP_METHODS.GET },
    claimTitle: { url: '/gameshows/{show_id}/title-claims/{token}/claim', method: HTTP_METHODS.POST },
    completeTitleClaim: { url: '/gameshows/{show_id}/title-claims/{token}/complete', method: HTTP_METHODS.POST },
    viewTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.GET },
    updateTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.PUT },
    deleteTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.DELETE },
    listBlocks: { url: '/gameshows/{show_id}/blocks', method: HTTP_METHODS.GET },
    listBlockTitles: { url: '/gameshows/{show_id}/blocks/{block_id}/titles', method: HTTP_METHODS.GET },
    createBlock: { url: '/gameshows/{show_id}/blocks', method: HTTP_METHODS.POST },
    updateBlock: { url: '/gameshows/{show_id}/blocks/{block_id}', method: HTTP_METHODS.PUT },
    deleteBlock: { url: '/gameshows/{show_id}/blocks/{block_id}', method: HTTP_METHODS.DELETE },
    reorderBlocks: { url: '/gameshows/{show_id}/blocks/reorder', method: HTTP_METHODS.POST },
    listSchedule: { url: '/gameshows/{show_id}/schedule', method: HTTP_METHODS.GET },
    getScheduleItem: { url: '/gameshows/{show_id}/schedule/{schedule_id}', method: HTTP_METHODS.GET },
    createScheduleItem: { url: '/gameshows/{show_id}/schedule', method: HTTP_METHODS.POST },
    updateScheduleItem: { url: '/gameshows/{show_id}/schedule/{schedule_id}', method: HTTP_METHODS.PUT },
    deleteScheduleItem: { url: '/gameshows/{show_id}/schedule/{schedule_id}', method: HTTP_METHODS.DELETE },
    listScheduleTicketTypes: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types', method: HTTP_METHODS.GET },
    manageScheduleTicketTypes: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/manage', method: HTTP_METHODS.GET },
    createScheduleTicketType: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types', method: HTTP_METHODS.POST },
    updateScheduleTicketType: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/{ticket_type_id}', method: HTTP_METHODS.PUT },
    deleteScheduleTicketType: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/{ticket_type_id}', method: HTTP_METHODS.DELETE },
    purchaseScheduleTickets: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases', method: HTTP_METHODS.POST },
    confirmScheduleTicketPurchase: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/confirm', method: HTTP_METHODS.POST },
    getScheduleTicketReceipt: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/receipt', method: HTTP_METHODS.GET },
    listScheduleTicketPurchases: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases', method: HTTP_METHODS.GET },
    refundScheduleTicketPurchase: { url: '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/refund', method: HTTP_METHODS.POST },
    discoveryQueue: { url: '/gameshows/{show_id}/discovery', method: HTTP_METHODS.GET },
    trackAnalytics: { url: '/gameshows/{show_id}/analytics', method: HTTP_METHODS.POST },
    analyticsReport: { url: '/gameshows/{show_id}/analytics/report', method: HTTP_METHODS.GET },
    joinWishlist: { url: '/gameshows/{show_id}/wishlist', method: HTTP_METHODS.POST },
    confirmWishlist: { url: '/gameshows/wishlist/confirm/{token}', method: HTTP_METHODS.GET },
    listWishlist: { url: '/gameshows/{show_id}/wishlist', method: HTTP_METHODS.GET },
    // Festival awards, prizes, swag, metric leaderboards, and recipients.
    listPublicRewards: { url: '/gameshows/{show_id}/rewards', method: HTTP_METHODS.GET },
    getPublicReward: { url: '/gameshows/{show_id}/rewards/{reward_id}', method: HTTP_METHODS.GET },
    getPublicRewardLeaderboard: { url: '/gameshows/{show_id}/rewards/{reward_id}/leaderboard/public', method: HTTP_METHODS.GET },
    manageRewards: { url: '/gameshows/{show_id}/rewards/manage', method: HTTP_METHODS.GET },
    claimReward: { url: '/gameshows/{show_id}/rewards/{reward_id}/claim', method: HTTP_METHODS.POST },
    createReward: { url: '/gameshows/{show_id}/rewards', method: HTTP_METHODS.POST },
    updateReward: { url: '/gameshows/{show_id}/rewards/{reward_id}', method: HTTP_METHODS.PUT },
    deleteReward: { url: '/gameshows/{show_id}/rewards/{reward_id}', method: HTTP_METHODS.DELETE },
    rewardLeaderboard: { url: '/gameshows/{show_id}/rewards/{reward_id}/leaderboard', method: HTTP_METHODS.GET },
    autoAwardReward: { url: '/gameshows/{show_id}/rewards/{reward_id}/auto-award', method: HTTP_METHODS.POST },
    addRewardRecipient: { url: '/gameshows/{show_id}/rewards/{reward_id}/recipients', method: HTTP_METHODS.POST },
    updateRewardRecipient: { url: '/gameshows/{show_id}/rewards/{reward_id}/recipients/{recipient_id}', method: HTTP_METHODS.PUT },
    listForTitle: { url: '/titles/{title_id}/gameshows', method: HTTP_METHODS.GET },
    // Organizer sponsor lifecycle and placement administration.
    listSponsors: { url: '/gameshows/{show_id}/sponsors', method: HTTP_METHODS.GET },
    createSponsor: { url: '/gameshows/{show_id}/sponsors', method: HTTP_METHODS.POST },
    getSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.GET },
    updateSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.PUT },
    deleteSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.DELETE },
    resendSponsorInvitation: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/invite', method: HTTP_METHODS.POST },
    createSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements', method: HTTP_METHODS.POST },
    updateSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements/{placement_id}', method: HTTP_METHODS.PUT },
    deleteSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements/{placement_id}', method: HTTP_METHODS.DELETE },
    // Privacy-limited anonymous sponsor inventory.
    listPublicSponsors: { url: '/gameshows/{show_id}/sponsors/public', method: HTTP_METHODS.GET },
    // Token-protected sponsor self-service; backend applies per-route limits.
    sponsorInvitation: { url: '/gameshow-sponsor-invitations/{token}', method: HTTP_METHODS.GET },
    sponsorInvitationUpload: { url: '/gameshow-sponsor-invitations/{token}/media', method: HTTP_METHODS.POST },
    sponsorInvitationSubmit: { url: '/gameshow-sponsor-invitations/{token}/submit', method: HTTP_METHODS.POST },
    sponsorInvitationPayment: { url: '/gameshow-sponsor-invitations/{token}/payment', method: HTTP_METHODS.POST },
    sponsorInvitationConfirmPayment: { url: '/gameshow-sponsor-invitations/{token}/payment/confirm', method: HTTP_METHODS.POST },
    sponsorInvitationRewards: { url: '/gameshow-sponsor-invitations/{token}/rewards', method: HTTP_METHODS.GET },
    sponsorInvitationCreateReward: { url: '/gameshow-sponsor-invitations/{token}/rewards', method: HTTP_METHODS.POST },
    sponsorInvitationUpdateReward: { url: '/gameshow-sponsor-invitations/{token}/rewards/{reward_id}', method: HTTP_METHODS.PUT },
    sponsorInvitationDeleteReward: { url: '/gameshow-sponsor-invitations/{token}/rewards/{reward_id}', method: HTTP_METHODS.DELETE },
};

class GameShows {
    /**
     * List all the GameShows.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShows
     *
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(GameShowsRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/createGameShow
     *
     * @param data The data to be passed when creating a game show.
     *
     * @returns Promise
     */
    static create(data, params) {
        return Requests.processRoute(GameShowsRoute.routes.create, data, undefined, params);
    }
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
    static update(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.update, data, { show_id: show_id }, params);
    }
    /**
     * Retrieve the information for a single game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShowByUuid
     *
     * @param show_id The id fo the game show to retrieve.
     *
     * @returns promise
     */
    static view(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.view, {}, { show_id: show_id }, params);
    }
    /**
     * Deletes a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/deleteGameShow
     *
     * @param show_id The id of the game show to delete.
     * @returns promise
     */
    static delete(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.delete, {}, { show_id: show_id }, params);
    }
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
    static uploadLogoFile(show_id, file, data, params) {
        let url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadLogoBlob(show_id, blob, data, params) {
        let url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
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
    static uploadBannerImageFile(show_id, file, data, params) {
        let url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'image', file, data);
    }
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
    static uploadBannerImageBlob(show_id, blob, data, params) {
        let url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);
        return Requests.uploadBlob(url, 'image', blob, data);
    }
    /**
     * Register a title to a game show.
     */
    static registerTitle(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.registerTitle, data, { show_id: show_id }, params);
    }
    /** List the active ordered custom-question schema used by public registration. */
    static listRegistrationQuestions(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listRegistrationQuestions, {}, { show_id: show_id }, params);
    }
    /** List active, inactive, and archived custom questions for organizers. */
    static manageRegistrationQuestions(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.manageRegistrationQuestions, {}, { show_id: show_id }, params);
    }
    /** Create one schema-driven custom developer-registration question. */
    static createRegistrationQuestion(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createRegistrationQuestion, data, { show_id: show_id }, params);
    }
    /** Update wording, validation, visibility, ordering, or stable choices. */
    static updateRegistrationQuestion(show_id, question_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateRegistrationQuestion, data, { show_id: show_id, question_id: question_id }, params);
    }
    /** Archive a question while preserving historical answers and reporting. */
    static deleteRegistrationQuestion(show_id, question_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteRegistrationQuestion, {}, { show_id: show_id, question_id: question_id }, params);
    }
    /** Apply the organizer's exact ordered list of question UUIDs. */
    static reorderRegistrationQuestions(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.reorderRegistrationQuestions, data, { show_id: show_id }, params);
    }
    /** Review custom answers grouped by submitted game. */
    static listRegistrationResponses(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listRegistrationResponses, {}, { show_id: show_id }, params);
    }
    /** Retrieve type-aware aggregate reports without exposing free-text values. */
    static registrationQuestionReports(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.registrationQuestionReports, {}, { show_id: show_id }, params);
    }
    /**
     * Add a title to a game show by admin.
     */
    static addTitle(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.addTitle, data, { show_id: show_id }, params);
    }
    /** Preview CSV/TSV/TXT/ZIP registrations without writing showcase data. */
    static previewExternalTitles(show_id, file, data, params) {
        // Multipart helpers require the concrete URL before uploading.
        const url = GameShowsRoute.routes.previewExternalTitles.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }
    /** Import valid external registrations after organizer preview. */
    static importExternalTitles(show_id, file, data, params) {
        const url = GameShowsRoute.routes.importExternalTitles.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }
    /**
     * List all titles for a game show.
     */
    static listTitles(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listTitles, {}, { show_id: show_id }, params);
    }
    /**
     * Get details of a specific title in a game show.
     */
    static getTitle(show_id, title_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.viewTitle, {}, { show_id: show_id, title_id: title_id }, params);
    }
    /**
     * Update a specific title in a game show.
     */
    static updateTitle(show_id, title_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateTitle, data, { show_id: show_id, title_id: title_id }, params);
    }
    /**
     * Delete a specific title from a game show.
     */
    static deleteTitle(show_id, title_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteTitle, {}, { show_id: show_id, title_id: title_id }, params);
    }
    /**
     * List public page-builder blocks for a game show.
     */
    static listBlocks(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listBlocks, {}, { show_id: show_id }, params);
    }
    /** Paginate one Page Builder game section without downloading its full catalog. */
    static listBlockTitles(show_id, block_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listBlockTitles, {}, { show_id, block_id }, params);
    }
    /**
     * Create a page-builder block for a game show. Requires organizer permissions.
     */
    static createBlock(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createBlock, data, { show_id: show_id }, params);
    }
    /**
     * Update a page-builder block for a game show. Requires organizer permissions.
     */
    static updateBlock(show_id, block_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateBlock, data, { show_id: show_id, block_id: block_id }, params);
    }
    /**
     * Delete a page-builder block from a game show. Requires organizer permissions.
     */
    static deleteBlock(show_id, block_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteBlock, {}, { show_id: show_id, block_id: block_id }, params);
    }
    /**
     * Reorder page-builder blocks for a game show. Requires organizer permissions.
     */
    static reorderBlocks(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.reorderBlocks, data, { show_id: show_id }, params);
    }
    /**
     * List livestream and programming schedule items for a game show.
     */
    static listSchedule(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listSchedule, {}, { show_id: show_id }, params);
    }
    /** Fetch one public or organizer-visible festival schedule item. */
    static getScheduleItem(show_id, schedule_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.getScheduleItem, {}, { show_id: show_id, schedule_id: schedule_id }, params);
    }
    /**
     * Create a schedule item for a game show. Requires organizer permissions.
     */
    static createScheduleItem(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createScheduleItem, data, { show_id: show_id }, params);
    }
    /**
     * Update a schedule item for a game show. Requires organizer permissions.
     */
    static updateScheduleItem(show_id, schedule_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateScheduleItem, data, { show_id: show_id, schedule_id: schedule_id }, params);
    }
    /**
     * Delete a schedule item from a game show. Requires organizer permissions.
     */
    static deleteScheduleItem(show_id, schedule_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteScheduleItem, {}, { show_id: show_id, schedule_id: schedule_id }, params);
    }
    /** List public early-bird, regular, and other ticket tiers for one session. */
    static listScheduleTicketTypes(show_id, schedule_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listScheduleTicketTypes, {}, { show_id, schedule_id }, params);
    }
    /** List every ticket tier, including archived tiers, for festival organizers. */
    static manageScheduleTicketTypes(show_id, schedule_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.manageScheduleTicketTypes, {}, { show_id, schedule_id }, params);
    }
    /** Create one session ticket price tier. */
    static createScheduleTicketType(show_id, schedule_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createScheduleTicketType, data, { show_id, schedule_id }, params);
    }
    /** Update ticket price, inventory, availability window, or publication state. */
    static updateScheduleTicketType(show_id, schedule_id, ticket_type_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateScheduleTicketType, data, { show_id, schedule_id, ticket_type_id }, params);
    }
    /** Archive a ticket tier while retaining historical purchases. */
    static deleteScheduleTicketType(show_id, schedule_id, ticket_type_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteScheduleTicketType, {}, { show_id, schedule_id, ticket_type_id }, params);
    }
    /** Reserve inventory and create/confirm the session ticket PaymentIntent. */
    static purchaseScheduleTickets(show_id, schedule_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.purchaseScheduleTickets, data, { show_id, schedule_id }, params);
    }
    /** Synchronize the same ticket PaymentIntent after Stripe.js completes 3DS. */
    static confirmScheduleTicketPurchase(show_id, schedule_id, purchase_id, access_token, params) {
        return Requests.processRoute(GameShowsRoute.routes.confirmScheduleTicketPurchase, { access_token }, { show_id, schedule_id, purchase_id }, params);
    }
    /** Retrieve a token-protected customer receipt. */
    static getScheduleTicketReceipt(show_id, schedule_id, purchase_id, access_token, params) {
        return Requests.processRoute(GameShowsRoute.routes.getScheduleTicketReceipt, {}, { show_id, schedule_id, purchase_id }, Object.assign(Object.assign({}, params), { access_token }));
    }
    /** List ticket purchasers and refund state for festival organizers. */
    static listScheduleTicketPurchases(show_id, schedule_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listScheduleTicketPurchases, {}, { show_id, schedule_id }, params);
    }
    /** Issue a partial or full destination-charge refund at organizer discretion. */
    static refundScheduleTicketPurchase(show_id, schedule_id, purchase_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.refundScheduleTicketPurchase, data, { show_id, schedule_id, purchase_id }, params);
    }
    /**
     * Get the game show discovery queue.
     */
    static discoveryQueue(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.discoveryQueue, {}, { show_id: show_id }, params);
    }
    /**
     * Track public game show analytics events.
     */
    static trackAnalytics(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.trackAnalytics, data, { show_id: show_id }, params);
    }
    /**
     * Get organizer analytics for a game show.
     */
    static analyticsReport(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.analyticsReport, {}, { show_id: show_id }, params);
    }
    /**
     * Join or update a public notification signup for a game show.
     */
    static joinWishlist(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.joinWishlist, data, { show_id: show_id }, params);
    }
    /**
     * Confirm the double-opt-in token from a festival reminder email.
     * The response contains confirmation state and festival identity only.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/confirmGameShowWishlist
     */
    static confirmWishlist(token, params) {
        return Requests.processRoute(GameShowsRoute.routes.confirmWishlist, {}, { token }, params);
    }
    /**
     * List notification signups for a game show. Requires organizer permissions.
     */
    static listWishlist(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listWishlist, {}, { show_id: show_id }, params);
    }
    /** List the anonymous, published festival award/prize/swag catalog. */
    static listPublicRewards(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listPublicRewards, {}, { show_id }, params);
    }
    /** Retrieve one SSR-ready public festival reward. */
    static getPublicReward(show_id, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.getPublicReward, {}, { show_id, reward_id }, params);
    }
    /** Retrieve a privacy-safe public game leaderboard for one reward. */
    static getPublicRewardLeaderboard(show_id, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.getPublicRewardLeaderboard, {}, { show_id, reward_id }, params);
    }
    /** List drafts, sponsor items, inventory, recipients, and fulfillment for organizers. */
    static manageRewards(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.manageRewards, {}, { show_id }, params);
    }
    /** Claim an eligible attendee, entrant, points, or previously awarded festival reward. */
    static claimReward(show_id, reward_id, data = {}, params) {
        return Requests.processRoute(GameShowsRoute.routes.claimReward, data, { show_id, reward_id }, params);
    }
    /** Create an organizer-controlled festival award, prize, swag item, or reward. */
    static createReward(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createReward, data, { show_id }, params);
    }
    /** Update publication, eligibility, metrics, inventory, or rich content. */
    static updateReward(show_id, reward_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateReward, data, { show_id, reward_id }, params);
    }
    /** Soft-delete one festival reward. */
    static deleteReward(show_id, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteReward, {}, { show_id, reward_id }, params);
    }
    /** Preview the organizer-only game or attendee performance leaderboard. */
    static rewardLeaderboard(show_id, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.rewardLeaderboard, {}, { show_id, reward_id }, params);
    }
    /** Snapshot current metric leaders as reward recipients. */
    static autoAwardReward(show_id, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.autoAwardReward, {}, { show_id, reward_id }, params);
    }
    /** Add a manual nominee, winner, honoree, claimant, or fulfillment record. */
    static addRewardRecipient(show_id, reward_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.addRewardRecipient, data, { show_id, reward_id }, params);
    }
    /** Update judging, claim, revocation, rank, or fulfillment state. */
    static updateRewardRecipient(show_id, reward_id, recipient_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateRewardRecipient, data, { show_id, reward_id, recipient_id }, params);
    }
    /**
     * List public game shows that include a title. Useful for game-page festival banners.
     */
    static listForTitle(title_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listForTitle, {}, { title_id: title_id }, params);
    }
    /** List organizer-visible developer claim and completion workflows. */
    static listTitleClaims(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listTitleClaims, {}, { show_id }, params);
    }
    /** Invite or remind a developer to claim and complete a festival game. */
    static inviteTitleClaim(show_id, title_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.inviteTitleClaim, data, { show_id, title_id }, params);
    }
    /** Open a private festival game claim before authentication. */
    static viewTitleClaim(show_id, token, params) {
        return Requests.processRoute(GameShowsRoute.routes.viewTitleClaim, {}, { show_id, token }, params);
    }
    /** Bind the invited game to the current user and one administered business. */
    static claimTitle(show_id, token, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.claimTitle, data, { show_id, token }, params);
    }
    /** Finish required game information and record the optional build choice. */
    static completeTitleClaim(show_id, token, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.completeTitleClaim, data, { show_id, token }, params);
    }
    /** List private sponsor workflow, contact, billing, media, and placements. */
    static listSponsors(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listSponsors, {}, { show_id }, params);
    }
    /** Create a manual sponsor or send a self-service invitation. */
    static createSponsor(show_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createSponsor, data, { show_id }, params);
    }
    /** Retrieve one organizer-authorized festival sponsor. */
    static getSponsor(show_id, sponsor_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.getSponsor, {}, { show_id, sponsor_id }, params);
    }
    /** Update sponsor workflow, creative metadata, schedule, or billing terms. */
    static updateSponsor(show_id, sponsor_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateSponsor, data, { show_id, sponsor_id }, params);
    }
    /** Delete an unpaid sponsor and its placements. */
    static deleteSponsor(show_id, sponsor_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteSponsor, {}, { show_id, sponsor_id }, params);
    }
    /** Replace the private token and resend the sponsor invitation. */
    static resendSponsorInvitation(show_id, sponsor_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.resendSponsorInvitation, {}, { show_id, sponsor_id }, params);
    }
    /** Add another festival, game, session, or event placement. */
    static createSponsorPlacement(show_id, sponsor_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.createSponsorPlacement, data, { show_id, sponsor_id }, params);
    }
    /** Partially update an existing sponsor placement. */
    static updateSponsorPlacement(show_id, sponsor_id, placement_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.updateSponsorPlacement, data, { show_id, sponsor_id, placement_id }, params);
    }
    /** Delete one placement without deleting the sponsor creative. */
    static deleteSponsorPlacement(show_id, sponsor_id, placement_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.deleteSponsorPlacement, {}, { show_id, sponsor_id, placement_id }, params);
    }
    /** List privacy-limited, publicly eligible creatives and placements. */
    static listPublicSponsors(show_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.listPublicSponsors, {}, { show_id }, params);
    }
    /** Open a token-protected sponsor portal without a user session. */
    static sponsorInvitation(token, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitation, {}, { token }, params);
    }
    /** Upload sponsor image/video through the shared Media pipeline. */
    static uploadSponsorInvitationMedia(token, file, data, params) {
        // Sponsor uploads use the `media` multipart field documented by API.
        const url = GameShowsRoute.routes.sponsorInvitationUpload.url.replace('{token}', token);
        return Requests.uploadFile(url, 'media', file, data, params);
    }
    /** Submit sponsor identity, destination, and accessibility metadata. */
    static submitSponsorInvitation(token, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationSubmit, data, { token }, params);
    }
    /** Create/confirm a destination PaymentIntent from a PaymentMethod ID. */
    static paySponsorInvitation(token, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationPayment, data, { token }, params);
    }
    /** Synchronize the same intent after Stripe.js completes required 3DS. */
    static confirmSponsorInvitationPayment(token, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationConfirmPayment, {}, { token }, params);
    }
    /** List awards, prizes, and swag owned by a sponsor invitation. */
    static sponsorInvitationRewards(token, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationRewards, {}, { token }, params);
    }
    /** Create a draft sponsor-owned award, prize, or swag item. */
    static createSponsorInvitationReward(token, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationCreateReward, data, { token }, params);
    }
    /** Update sponsor-owned reward content and eligibility. */
    static updateSponsorInvitationReward(token, reward_id, data, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationUpdateReward, data, { token, reward_id }, params);
    }
    /** Remove a sponsor-owned draft reward. */
    static deleteSponsorInvitationReward(token, reward_id, params) {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationDeleteReward, {}, { token, reward_id }, params);
    }
}

class NewslettersRoutes {
}
NewslettersRoutes.routes = {
    downloadMarketingChecklist: { url: '/newsletters/downloadMarketingChecklist', method: HTTP_METHODS.POST },
    joinCourseWaitlist: { url: '/newsletters/joinCourseWaitlist', method: HTTP_METHODS.POST },
    joinRaffleWaitlist: { url: '/newsletters/joinRaffleWaitlist', method: HTTP_METHODS.POST },
    joinDiscordMarketplaceWaitlist: { url: '/newsletters/joinDiscordMarketplaceWaitlist', method: HTTP_METHODS.POST },
    joinNsfwWaitlist: { url: '/newsletters/joinNsfwWaitlist', method: HTTP_METHODS.POST },
    joinCodexCreditWaitlist: { url: '/newsletters/joinCodexCreditWaitlist', method: HTTP_METHODS.POST },
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
    joinConsumerWaitlist: { url: '/newsletters/joinConsumerWaitlist', method: HTTP_METHODS.POST },
};

class Newsletters {
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static downloadMarketingChecklist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.downloadMarketingChecklist, data, undefined, params);
    }
    /**
     * Join the marketing course waitlist.
     *
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    static joinCourseWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinCourseWaitlist, data, undefined, params);
    }
    /**
 * Join the raffle feature waitlist.
 *
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    static joinRaffleWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinRaffleWaitlist, data, undefined, params);
    }
    /**
     * Join the Discord Marketplace waitlist.
     *
     * @param data { name, email, game, categories[] }
     */
    static joinDiscordMarketplaceWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinDiscordMarketplaceWaitlist, data, undefined, params);
    }
    /**
     * Join the NSFW/Lewd game marketing waitlist.
     *
     * @param data { name, email, game }
     */
    static joinNsfwWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinNsfwWaitlist, data, undefined, params);
    }
    /**
     * Apply for Codex credit support for a playable AI game.
     *
     * @param data { name, email, game, game_description, game_url }
     */
    static joinCodexCreditWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinCodexCreditWaitlist, data, undefined, params);
    }
    // --- ADMINISTRATIVE CAMPAIGN METHODS ---
    /**
     * List all newsletter campaigns (Admin only).
     */
    static listCampaigns(params) {
        return Requests.processRoute(NewslettersRoutes.routes.listCampaigns, undefined, undefined, params);
    }
    /**
     * Create a new newsletter campaign draft (Admin only).
     */
    static createCampaign(data) {
        return Requests.processRoute(NewslettersRoutes.routes.createCampaign, data);
    }
    /**
     * Retrieve a specific newsletter campaign (Admin only).
     */
    static viewCampaign(id) {
        return Requests.processRoute(NewslettersRoutes.routes.viewCampaign, undefined, { id });
    }
    /**
     * Update a newsletter campaign draft (Admin only).
     */
    static updateCampaign(id, data) {
        return Requests.processRoute(NewslettersRoutes.routes.updateCampaign, data, { id });
    }
    /**
     * Delete a newsletter campaign (Admin only).
     */
    static deleteCampaign(id) {
        return Requests.processRoute(NewslettersRoutes.routes.deleteCampaign, undefined, { id });
    }
    /**
     * Get high-level analytics for a specific campaign (Admin only).
     */
    static getCampaignStats(id) {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignStats, undefined, { id });
    }
    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    static getCampaignLogs(id, params) {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignLogs, undefined, { id }, params);
    }
    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     */
    static sendCampaign(id) {
        return Requests.processRoute(NewslettersRoutes.routes.sendCampaign, undefined, { id });
    }
    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    static sendTestEmail(id, email) {
        return Requests.processRoute(NewslettersRoutes.routes.sendTest, { email }, { id });
    }
    // --- ADMINISTRATIVE SUBSCRIBER METHODS ---
    /**
     * List all newsletter subscribers (Admin only).
     */
    static listSubscribers(params) {
        return Requests.processRoute(NewslettersRoutes.routes.listSubscribers, undefined, undefined, params);
    }
    /**
     * Manually create a new newsletter subscriber (Admin only).
     */
    static createSubscriber(data) {
        return Requests.processRoute(NewslettersRoutes.routes.createSubscriber, data);
    }
    /**
     * Retrieve a specific subscriber's details (Admin only).
     */
    static viewSubscriber(id) {
        return Requests.processRoute(NewslettersRoutes.routes.viewSubscriber, undefined, { id });
    }
    /**
     * Update a subscriber's information or status (Admin only).
     */
    static updateSubscriber(id, data) {
        return Requests.processRoute(NewslettersRoutes.routes.updateSubscriber, data, { id });
    }
    /**
     * Permanently delete a subscriber from the system (Admin only).
     */
    static deleteSubscriber(id) {
        return Requests.processRoute(NewslettersRoutes.routes.deleteSubscriber, undefined, { id });
    }
    /**
     * Join the distribution platform waitlist for indie developers.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/joinDistributionWaitlist
     *
     * @param data { name: string, email: string, game: string, team_size: string, revenue_goal: string }
     * @returns Promise
     */
    static joinDistributionWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinDistributionWaitlist, data, undefined, params);
    }
    /**
     * Register for Consumer Early Access to the streaming platform.
     *
     * @param data { name, email }
     */
    static joinConsumerWaitlist(data, params) {
        return Requests.processRoute(NewslettersRoutes.routes.joinConsumerWaitlist, data, undefined, params);
    }
}

class PlayTestsRoute {
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
    getResults: { url: '/playtests/{title_id}/{playtest_id}/results', method: HTTP_METHODS.GET },
    uploadAnswer: { url: '/playtests/{title_id}/{playtest_id}/upload-answer', method: HTTP_METHODS.POST },
};

class PlayTests {
    /**
     * Get a list of play tests associated with a title.
     *
     * @param title_id The ID of the title.
     * @param params Optional query parameters.
     * @returns Promise
     */
    static list(title_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.index, undefined, { title_id }, params);
    }
    /**
     * User requests to test a title.
     *
     * @param title_id The ID of the title.
     * @param data Optional data for the request.
     * @returns Promise
     */
    static requestPlayTest(title_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.request, data, { title_id }, params);
    }
    /**
     * Title administrator invites a user to test a title.
     *
     * @param title_id The ID of the title.
     * @param data The data containing user_id and other optional fields.
     * @returns Promise
     */
    static invitePlayTester(title_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.invite, data, { title_id }, params);
    }
    /**
     * User submits or updates their answers for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The answers data.
     * @returns Promise
     */
    static submitAnswers(title_id, playtest_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.submitAnswers, data, { title_id, playtest_id }, params);
    }
    /**
     * Title admin updates test questions for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The questions data.
     * @returns Promise
     */
    static updateQuestions(title_id, playtest_id, data, params) {
        return Requests.processRoute(PlayTestsRoute.routes.updateQuestions, data, { title_id, playtest_id }, params);
    }
    /**
     * User accepts an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static acceptInvite(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.acceptInvite, {}, { title_id, playtest_id }, params);
    }
    /**
     * User rejects an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static rejectInvite(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.rejectInvite, {}, { title_id, playtest_id }, params);
    }
    /**
     * Title admin approves a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static approveRequest(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.approveRequest, {}, { title_id, playtest_id }, params);
    }
    /**
     * Title admin declines a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static declineRequest(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.declineRequest, {}, { title_id, playtest_id }, params);
    }
    /**
     * User cancels their own play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static cancelRequest(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.cancelRequest, {}, { title_id, playtest_id }, params);
    }
    /**
     * Retrieve a single play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static show(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.show, {}, { title_id, playtest_id }, params);
    }
    /**
     * Get all the play tests that are associated with the current user.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static mine(params) {
        return Requests.processRoute(PlayTestsRoute.routes.mine, {}, {}, params);
    }
    /**
     * Get aggregated results for a play test (publisher view).
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static getResults(title_id, playtest_id, params) {
        return Requests.processRoute(PlayTestsRoute.routes.getResults, {}, { title_id, playtest_id }, params);
    }
    /**
     * Upload an audio/video answer file for a play test question. The file is
     * stored by the Glitch backend (authenticated with the session token) and a
     * media URL is returned that can then be passed to submitAnswers().
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param file The recorded audio/video file or blob.
     * @param data Additional fields (question_id, media_type, title, description).
     * @param params Optional query parameters.
     * @param onUploadProgress Optional progress callback.
     * @returns Promise
     */
    static uploadAnswer(title_id, playtest_id, file, data, params, onUploadProgress) {
        const url = PlayTestsRoute.routes.uploadAnswer.url
            .replace('{title_id}', title_id)
            .replace('{playtest_id}', playtest_id);
        return Requests.uploadFile(url, 'file', file, data, params, onUploadProgress);
    }
}

class MediaRoute {
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
    processVideo: { url: '/media/{media_id}/process', method: HTTP_METHODS.POST },
};

class Media {
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
    static uploadFile(file, data, params, onUploadProgress) {
        return Requests.uploadFile(MediaRoute.routes.upload.url, 'media', file, data, params, onUploadProgress);
    }
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
    static uploadBlob(blob, data, params, onUploadProgress) {
        return Requests.uploadBlob(MediaRoute.routes.upload.url, 'media', blob, data, params, onUploadProgress);
    }
    /**
     * Get media details.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     *
     * @param id The ID of the media item.
     *
     * @returns promise
     */
    static get(media_id, params) {
        return Requests.processRoute(MediaRoute.routes.getMedia, {}, { media_id: media_id }, params);
    }
    /**
     * Crop and resize an image to Steam capsule dimensions.
     *
     * @param request The crop request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static cropSteamCapsule(request, params) {
        return Requests.processRoute(MediaRoute.routes.cropSteamCapsule, request, {}, params);
    }
    /**
     * Analyze a Steam capsule image using AI.
     *
     * @param request The analysis request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static analyzeSteamCapsule(request, params) {
        return Requests.processRoute(MediaRoute.routes.analyzeSteamCapsule, request, {}, params);
    }
    /**
     * Remove background from an image to create transparent PNG.
     *
     * @param request The background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackground(request, params) {
        return Requests.processRoute(MediaRoute.routes.removeBackground, request, {}, params);
    }
    /**
     * Remove background from an image using AI analysis for better results.
     *
     * @param request The AI-enhanced background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackgroundAI(request, params) {
        return Requests.processRoute(MediaRoute.routes.removeBackgroundAI, request, {}, params);
    }
    /**
     * Create a Steam Library Logo meeting Steam's requirements.
     *
     * @param request The library logo creation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static createLibraryLogo(request, params) {
        return Requests.processRoute(MediaRoute.routes.createLibraryLogo, request, {}, params);
    }
    /**
     * Validate a screenshot against Steam's requirements.
     *
     * @param request The screenshot validation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static validateScreenshot(request, params) {
        return Requests.processRoute(MediaRoute.routes.validateScreenshot, request, {}, params);
    }
    /**
     * Get Steam capsule dimensions for a specific type.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns The dimensions object or null if invalid type.
     */
    static getSteamCapsuleDimensions(capsuleType) {
        const dimensions = {
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
    }
    /**
     * Get Steam capsule type information and requirements.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns Information about the capsule type.
     */
    static getSteamCapsuleInfo(capsuleType) {
        const info = {
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
    }
    /**
     * Get Steam screenshot requirements.
     *
     * @returns Screenshot requirements object.
     */
    static getSteamScreenshotRequirements() {
        return {
            minWidth: 1920,
            minHeight: 1080,
            aspectRatio: 16 / 9,
            minCount: 5,
            format: 'Should be high-res, widescreen format',
            content: 'Should show gameplay, not menus or concept art'
        };
    }
    /**
     * Get Steam library logo requirements.
     *
     * @returns Library logo requirements object.
     */
    static getSteamLibraryLogoRequirements() {
        return {
            maxWidth: 1280,
            maxHeight: 720,
            format: 'PNG with transparent background',
            requirement: 'Either 1280px wide and/or 720px tall',
            content: 'Logo only, should be legible against any background'
        };
    }
    /**
     * Upload an audio file to TikTok's asset library via our Media controller.
     *
     * @param file The audio file (mp3).
     * @param scheduler_id The ID of the scheduler to provide OAuth context.
     */
    static uploadTikTokMusic(file, scheduler_id) {
        // We use the raw URL here as it's a specialized upload path
        return Requests.uploadFile('/media/tiktok/music', 'audio', file, { scheduler_id });
    }
    /**
     * Generate an S3 Presigned URL for direct upload.
     *
     * @param filename The original name of the file.
     * @param extension The file extension (e.g., 'mp4').
     * @param is_public Set to true if the file should be publicly accessible via URL.
     */
    static getPresignedUrl(filename, extension, is_public = false // Added parameter
    ) {
        return Requests.processRoute(MediaRoute.routes.getPresignedUrl, {
            filename,
            extension,
            is_public // Pass to backend
        });
    }
    /**
     * Confirm a successful S3 upload and create the database record.
     * Call this after the direct S3 upload is complete.
     *
     * @param data The file metadata (path, size, mime_type).
     * @returns AxiosPromise containing the created Media resource.
     */
    static confirmS3Upload(data) {
        return Requests.processRoute(MediaRoute.routes.confirmS3Upload, data);
    }
    /**
    * Submit a video for processing (Trim, Crop, Text, etc.)
    * This triggers a background job on the server.
    *
    * @param media_id The UUID of the source video.
    * @param data The edit manifest containing the array of transformations.
    * @returns Promise with the pending_media_id.
    */
    static process(media_id, data) {
        return Requests.processRoute(MediaRoute.routes.processVideo, data, { media_id: media_id });
    }
}

class SchedulerRoute {
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
    getRedditSubredditRules: { url: '/schedulers/{scheduler_id}/reddit/subreddits/{subreddit}/rules', method: HTTP_METHODS.GET },
    getDiscordChannels: { url: '/schedulers/{scheduler_id}/discord/channels', method: HTTP_METHODS.GET },
    searchDiscordMedia: { url: '/schedulers/{scheduler_id}/discord/media', method: HTTP_METHODS.GET },
    importDiscordMedia: { url: '/schedulers/{scheduler_id}/discord/media/import', method: HTTP_METHODS.POST },
    getDiscordUserCommandStatus: { url: '/schedulers/{scheduler_id}/discord/user-command', method: HTTP_METHODS.GET },
    disconnectDiscordUserCommand: { url: '/schedulers/{scheduler_id}/discord/user-command', method: HTTP_METHODS.DELETE },
    listDiscordMediaCaptures: { url: '/schedulers/{scheduler_id}/discord/captures', method: HTTP_METHODS.GET },
    importDiscordMediaCapture: { url: '/schedulers/{scheduler_id}/discord/captures/import', method: HTTP_METHODS.POST },
    dismissDiscordMediaCapture: { url: '/schedulers/{scheduler_id}/discord/captures/{capture_id}', method: HTTP_METHODS.DELETE },
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
    crossPromoteSearch: {
        url: '/schedulers/cross-promote/search',
        method: HTTP_METHODS.GET
    },
    crossPromoteInvitationSend: {
        url: '/schedulers/cross-promote/invitations',
        method: HTTP_METHODS.POST
    },
    crossPromoteInvitationRespond: {
        url: '/schedulers/cross-promote/invitations/{invitation_id}/respond',
        method: HTTP_METHODS.POST
    },
    crossPromoteRelationshipsList: {
        url: '/schedulers/cross-promote/relationships',
        method: HTTP_METHODS.GET
    },
    crossPromoteRelationshipEnd: {
        url: '/schedulers/cross-promote/relationships/{relationship_id}/end',
        method: HTTP_METHODS.POST
    },
    crossPromoteRelationshipLogs: {
        url: '/schedulers/cross-promote/relationships/{relationship_id}/logs',
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
    getRedditSubredditMatches: { url: '/schedulers/{scheduler_id}/reddit/subreddit-matches', method: HTTP_METHODS.POST },
    getRedditSubredditPositioning: { url: '/schedulers/{scheduler_id}/reddit/subreddit-positioning', method: HTTP_METHODS.POST },
    listDestinations: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations', method: HTTP_METHODS.GET },
    createDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations', method: HTTP_METHODS.POST },
    getDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.GET },
    updateDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.PUT },
    deleteDestination: { url: '/schedulers/{scheduler_id}/updates/{update_id}/destinations/{destination_id}', method: HTTP_METHODS.DELETE },
    getSchedulerPostsWithComments: { url: '/schedulers/{scheduler_id}/posts-with-comments', method: HTTP_METHODS.GET },
    syncAllSchedulerComments: { url: '/schedulers/{scheduler_id}/sync-all-comments', method: HTTP_METHODS.POST },
    getConversionActions: { url: '/schedulers/{scheduler_id}/conversion-actions', method: HTTP_METHODS.GET },
    sendTestConversionEvent: { url: '/schedulers/{scheduler_id}/test-event/{platform}', method: HTTP_METHODS.GET },
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
    getTikTokRecommendedKeywords: { url: '/schedulers/{scheduler_id}/tiktok/discovery/search-keywords/recommend', method: HTTP_METHODS.GET },
};

class Scheduler {
    /**
     * List promotion schedules.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedules
     *
     * @returns promise
     */
    static listSchedules(params) {
        return Requests.processRoute(SchedulerRoute.routes.listSchedules, {}, {}, params);
    }
    /**
     * Create a new promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitlePromotionSchedule
     *
     * @param data The data for the new schedule.
     *
     * @returns promise
     */
    static createSchedule(data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createSchedule, data, {}, params);
    }
    /**
     * Get a specific promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedule(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedule, {}, { scheduler_id }, params);
    }
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
    static updateSchedule(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateSchedule, data, { scheduler_id }, params);
    }
    /**
     * Delete a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static deleteSchedule(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteSchedule, {}, { scheduler_id }, params);
    }
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
    static testTone(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.testTone, data, { scheduler_id }, params);
    }
    /**
     * Get social media posts related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getPromotionScheduleSocialPosts
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedulePosts(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulePosts, {}, { scheduler_id }, params);
    }
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
    static generateTitleContent(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateContent, data, // request body
        { scheduler_id }, // path params
        params // query params
        );
    }
    /**
     * List title updates for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static listUpdates(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listUpdates, {}, { scheduler_id }, params);
    }
    /**
     * Search the updates related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/searchTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static searchUpdates(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listUpdates, {}, { scheduler_id }, params);
    }
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
    static createUpdate(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createUpdate, data, { scheduler_id }, params);
    }
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
    static getUpdate(scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getUpdate, {}, { scheduler_id, update_id }, params);
    }
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
    static updateUpdate(scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateUpdate, data, { scheduler_id, update_id }, params);
    }
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
    static deleteUpdate(scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteUpdate, {}, { scheduler_id, update_id }, params);
    }
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
    static scheduleUpdate(scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.scheduleUpdate, data, { scheduler_id, update_id }, params);
    }
    /**
     * Clear Twitter OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitterAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitterAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Facebook OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearFacebookAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearFacebookAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Instagram OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearInstagramAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearInstagramAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Snapchat OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSnapchatAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearSnapchatAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear TikTok OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTikTokAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTikTokAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Twitch OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitchAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitchAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Kick OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearKickAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearKickAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Reddit OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Reddit Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAdsAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAdsAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear YouTube OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearYouTubeAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearYouTubeAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Patreon OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPatreonAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearPatreonAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Pinterest OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPinterestAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearPinterestAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Steam OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSteamAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearSteamAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Discord OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearDiscordAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearDiscordAuth, {}, { scheduler_id }, params);
    }
    /**
     * Clear Bluesky OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearBlueskyAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearBlueskyAuth, {}, { scheduler_id }, params);
    }
    /**
    * Get Facebook groups associated with the scheduler's Facebook account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getFacebookGroups(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getFacebookGroups, {}, { scheduler_id }, params);
    }
    /**
     * Get Instagram accounts associated with the scheduler's Instagram account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getInstagramAccounts(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getInstagramAccounts, {}, { scheduler_id }, params);
    }
    /**
     * Get Reddit subreddits associated with the scheduler's Reddit account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getRedditSubreddits(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubreddits, {}, { scheduler_id }, params);
    }
    /**
     * Get flairs for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    static getRedditSubredditFlairs(scheduler_id, subreddit, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditFlairs, {}, { scheduler_id, subreddit }, params);
    }
    /**
     * Get posting rules for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    static getRedditSubredditRules(scheduler_id, subreddit, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditRules, {}, { scheduler_id, subreddit }, params);
    }
    /**
    * Get Discord channels associated with the scheduler's Discord account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getDiscordChannels(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getDiscordChannels, {}, { scheduler_id }, params);
    }
    /**
     * Search image and video attachments in the connected Discord server.
     * This call only returns remote candidates; it does not copy files into the
     * Library and does not create or schedule social posts.
     */
    static searchDiscordMedia(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.searchDiscordMedia, {}, { scheduler_id }, params);
    }
    /**
     * Import explicitly selected Discord attachments as pending, unscheduled
     * Library updates. Callers can group files by message or create one item
     * per file through title_update_mode.
     */
    static importDiscordMedia(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.importDiscordMedia, data, { scheduler_id }, params);
    }
    /** Get the current user's personal Save to Glitch command setup state. */
    static getDiscordUserCommandStatus(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getDiscordUserCommandStatus, {}, { scheduler_id }, params);
    }
    /** Disconnect the current user's personal command from this Library. */
    static disconnectDiscordUserCommand(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.disconnectDiscordUserCommand, {}, { scheduler_id }, params);
    }
    /** List messages saved through the user-installed Discord command. */
    static listDiscordMediaCaptures(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listDiscordMediaCaptures, {}, { scheduler_id }, params);
    }
    /** Import selected staged attachments into pending Library content. */
    static importDiscordMediaCapture(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.importDiscordMediaCapture, data, { scheduler_id }, params);
    }
    /** Dismiss one saved Discord message and delete its temporary staged files. */
    static dismissDiscordMediaCapture(scheduler_id, capture_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.dismissDiscordMediaCapture, {}, { scheduler_id, capture_id }, params);
    }
    /**
     * Clear Google Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearGoogleAdsAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearGoogleAdsAuth, {}, // no body
        { scheduler_id }, // path params
        params // optional query params
        );
    }
    /**
     * Clear Tiktok Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTiktokAdsAuth(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.clearTiktokAdsAuth, {}, // no body
        { scheduler_id }, // path params
        params // optional query params
        );
    }
    /**
     * Get aggregated reports for a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerReports(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerReports, {}, { scheduler_id }, params);
    }
    /**
     * Get progression data for social media posts over time.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerProgression(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerProgression, {}, { scheduler_id }, params);
    }
    /**
      * List cross-promote relationships for a scheduler (with optional pagination).
      * GET /schedulers/{scheduler_id}/crosspromote/relationships
      */
    static crossPromoteListRelationships(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteListRelationships, {}, { scheduler_id }, params);
    }
    /**
     * Find potential cross-promote partners for a scheduler (with optional filters).
     * GET /schedulers/{scheduler_id}/crosspromote/find
     */
    static crossPromoteFind(scheduler_id, params) {
        // e.g. { platform:'twitter', min_followers:500, sort:'desc', page:2, limit:5 }
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteFind, {}, { scheduler_id }, params);
    }
    /**
     * List cross-promote invites for a scheduler (incoming + outgoing).
     * GET /schedulers/{scheduler_id}/crosspromote/invites
     */
    static crossPromoteInvitesList(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInvitesList, {}, { scheduler_id }, params);
    }
    /**
     * Send an invite to cross-promote (from scheduler_id to partner_scheduler_id).
     * POST /schedulers/{scheduler_id}/crosspromote/invites
     *
     * @param data { partner_scheduler_id, optional_message }
     */
    static crossPromoteInviteSend(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteSend, data, { scheduler_id }, params);
    }
    /**
     * Accept an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept
     */
    static crossPromoteInviteAccept(scheduler_id, invite_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteAccept, {}, { scheduler_id, invite_id }, params);
    }
    /**
     * Reject an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject
     */
    static crossPromoteInviteReject(scheduler_id, invite_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInviteReject, {}, { scheduler_id, invite_id }, params);
    }
    /**
     * End a cross-promote relationship (delete).
     * DELETE /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}
     */
    static crossPromoteRelationshipDelete(scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipDelete, {}, { scheduler_id, relationship_id }, params);
    }
    /**
     * Get which platforms are cross-promoted in an existing relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     */
    static crossPromoteRelationshipGetPlatforms(scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipGetPlatforms, {}, { scheduler_id, relationship_id }, params);
    }
    /**
     * Set which platforms are cross-promoted in an existing relationship.
     * PUT /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     * data = { platforms: ['twitter','facebook',...]}
     */
    static crossPromoteRelationshipSetPlatforms(scheduler_id, relationship_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipSetPlatforms, data, { scheduler_id, relationship_id }, params);
    }
    /**
     * Get recently cross-promoted logs under a relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts
     */
    static crossPromoteRelationshipPosts(scheduler_id, relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipPosts, {}, { scheduler_id, relationship_id }, params);
    }
    /**
     * Search cross-promote opportunities using the normalized route family.
     * GET /schedulers/cross-promote/search
     */
    static crossPromoteSearch(params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteSearch, {}, {}, params);
    }
    /**
     * Send a normalized cross-promote invitation.
     * POST /schedulers/cross-promote/invitations
     */
    static crossPromoteInvitationSend(data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInvitationSend, data, {}, params);
    }
    /**
     * Respond to a normalized cross-promote invitation.
     * POST /schedulers/cross-promote/invitations/{invitation_id}/respond
     */
    static crossPromoteInvitationRespond(invitation_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteInvitationRespond, data, { invitation_id }, params);
    }
    /**
     * List normalized cross-promote relationships.
     * GET /schedulers/cross-promote/relationships
     */
    static crossPromoteRelationshipsList(params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipsList, {}, {}, params);
    }
    /**
     * End a normalized cross-promote relationship.
     * POST /schedulers/cross-promote/relationships/{relationship_id}/end
     */
    static crossPromoteRelationshipEnd(relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipEnd, {}, { relationship_id }, params);
    }
    /**
     * List normalized cross-promote relationship logs.
     * GET /schedulers/cross-promote/relationships/{relationship_id}/logs
     */
    static crossPromoteRelationshipLogs(relationship_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.crossPromoteRelationshipLogs, {}, { relationship_id }, params);
    }
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
    static listCampaignBusinesses(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignBusinesses, undefined, // no request body
        { scheduler_id }, // path params
        params // query params
        );
    }
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
    static listCampaignAdAccounts(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignAdAccounts, undefined, { scheduler_id }, params);
    }
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
    static listCampaignFundingInstruments(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getCampaignFundingInstruments, undefined, { scheduler_id }, params);
    }
    /**
     * List Google Ads conversion actions available to a scheduler account.
     * GET /schedulers/{scheduler_id}/conversion-actions
     */
    static listConversionActions(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getConversionActions, undefined, { scheduler_id }, params);
    }
    /**
     * List all destinations for a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/listTitleUpdateDestinations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @returns promise
     */
    static listDestinations(scheduler_id, update_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.listDestinations, {}, { scheduler_id, update_id }, params);
    }
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
    static createDestination(scheduler_id, update_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.createDestination, data, { scheduler_id, update_id }, params);
    }
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
    static getDestination(scheduler_id, update_id, destination_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getDestination, {}, { scheduler_id, update_id, destination_id }, params);
    }
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
    static updateDestination(scheduler_id, update_id, destination_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.updateDestination, data, { scheduler_id, update_id, destination_id }, params);
    }
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
    static deleteDestination(scheduler_id, update_id, destination_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.deleteDestination, {}, { scheduler_id, update_id, destination_id }, params);
    }
    /**
     * Get subreddit recommendations for a scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerRedditRecommendations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The context for the post (title, content, media type).
     * @returns promise
     */
    static getRedditRecommendations(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditRecommendations, data, { scheduler_id }, params);
    }
    /**
     * Generate tailored content for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/generateRedditContentForSubreddit
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and post context.
     * @returns promise
     */
    static generateRedditContent(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateRedditContent, data, { scheduler_id }, params);
    }
    /**
     * Match the scheduler title to indexed Reddit communities.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data Optional post context and filters.
     * @returns promise
     */
    static getRedditSubredditMatches(scheduler_id, data = {}, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditMatches, data, { scheduler_id }, params);
    }
    /**
     * Position a registered game for a subreddit and optionally prepare Reddit draft content.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and optional post context.
     * @returns promise
     */
    static getRedditSubredditPositioning(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditPositioning, data, { scheduler_id }, params);
    }
    /**
    * Get all posts and comments for a scheduler.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param params Optional query parameters for filtering and sorting.
    * @returns promise
    */
    static getSchedulerPostsWithComments(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerPostsWithComments, {}, { scheduler_id }, params);
    }
    /**
     * Sync all comments for all posts in a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Optional query parameters (e.g., limit_per_post).
     * @returns promise
     */
    static syncAllSchedulerComments(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.syncAllSchedulerComments, {}, { scheduler_id }, params);
    }
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
    static getConversionActions(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getConversionActions, {}, { scheduler_id }, params);
    }
    /**
    * Send a platform test conversion event through the backend scheduler route.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param platform Platform key, e.g. reddit, tiktok, facebook, google.
    * @param params Query parameters such as Reddit test_id or Meta test_event_code.
    */
    static sendTestConversionEvent(scheduler_id, platform, params) {
        return Requests.processRoute(SchedulerRoute.routes.sendTestConversionEvent, {}, { scheduler_id, platform }, params);
    }
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
    static syncHistory(scheduler_id, platform, params) {
        return Requests.processRoute(SchedulerRoute.routes.syncHistory, {}, { scheduler_id, platform }, params);
    }
    /**
     * Generate hashtags for content based on scheduler settings.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data { content: string, platform?: string }
     *
     * @returns promise
     */
    static generateHashtags(scheduler_id, data, params) {
        return Requests.processRoute(SchedulerRoute.routes.generateHashtags, data, { scheduler_id }, params);
    }
    /**
 * Get TikTok hashtag suggestions based on a keyword.
 *
 * @param scheduler_id The ID of the promotion schedule.
 * @param params { keyword: string }
 */
    static getTikTokHashtags(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokHashtags, {}, { scheduler_id }, params);
    }
    /**
     * Get trending commercial music from TikTok's library.
     *
     * @param scheduler_id The ID of the promotion schedule.
     */
    static getTikTokMusic(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokMusic, {}, { scheduler_id }, params);
    }
    /**
 * Get TikTok Music List with advanced filtering (Keyword, Recommendations, Liked).
 * @param params { music_scene: 'CREATIVE_ASSET'|'CAROUSEL_ADS', search_type: string, filtering: object }
 */
    static getTikTokMusicList(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokMusicList, {}, { scheduler_id }, params);
    }
    /**
     * Get the top 200 trending hashtags on TikTok.
     * @param params { country_code: string, category_name: string, date_range: string }
     */
    static getTikTokTrendingHashtags(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokTrendingHashtags, {}, { scheduler_id }, params);
    }
    /**
     * Get trending search keywords on TikTok.
     * @param params { is_personalized: boolean }
     */
    static getTikTokTrendingKeywords(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokTrendingKeywords, {}, { scheduler_id }, params);
    }
    /**
     * Get recommended search keywords on TikTok.
     * @param params { is_personalized: boolean }
     */
    static getTikTokRecommendedKeywords(scheduler_id, params) {
        return Requests.processRoute(SchedulerRoute.routes.getTikTokRecommendedKeywords, {}, { scheduler_id }, params);
    }
}

class RedditSubredditsRoute {
}
RedditSubredditsRoute.routes = {
    list: { url: '/reddit/subreddits', method: HTTP_METHODS.GET },
    show: { url: '/reddit/subreddits/{subreddit}', method: HTTP_METHODS.GET },
    match: { url: '/reddit/subreddits/match', method: HTTP_METHODS.POST },
    matchTitle: { url: '/titles/{title_id}/reddit/subreddit-matches', method: HTTP_METHODS.POST },
    ingest: { url: '/admin/reddit/subreddits/ingest', method: HTTP_METHODS.POST },
    refresh: { url: '/admin/reddit/subreddits/{subreddit}/refresh', method: HTTP_METHODS.POST },
};

class RedditSubreddits {
    /**
     * Search indexed Reddit communities for game marketing research.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/indexRedditSubreddits
     */
    static list(params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Get an analyzed subreddit record by display name.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/showRedditSubreddit
     */
    static show(subreddit, params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.show, undefined, { subreddit }, params);
    }
    /**
     * Match a game concept to relevant Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/matchRedditSubreddits
     */
    static match(data, params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.match, data, undefined, params);
    }
    /**
     * Match one of the authenticated user's administered titles to Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/titleRedditSubredditMatches
     */
    static matchTitle(title_id, data = {}, params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.matchTitle, data, { title_id }, params);
    }
    /**
     * Admin-only ingestion of subreddit metadata and rules.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/ingestRedditSubreddits
     */
    static ingest(data, params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.ingest, data, undefined, params);
    }
    /**
     * Admin-only refresh for one subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/refreshRedditSubreddit
     */
    static refresh(subreddit, data = {}, params) {
        return Requests.processRoute(RedditSubredditsRoute.routes.refresh, data, { subreddit }, params);
    }
}

// src/routes/FunnelRoutes.tsx
class FunnelRoutes {
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

// src/controllers/Funnel.tsx
class Funnel {
    /**
     * Get funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel metrics data
     */
    static index(params) {
        return Requests.processRoute(FunnelRoutes.routes.index, undefined, undefined, params);
    }
    /**
     * Get funnel-optimized metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_funnel
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel data optimized for visual funnels
     */
    static funnel(params) {
        return Requests.processRoute(FunnelRoutes.routes.funnel, undefined, undefined, params);
    }
    /**
     * Get available metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_metrics
     *
     * @returns Promise with list of available metrics
     */
    static metrics() {
        return Requests.processRoute(FunnelRoutes.routes.metrics);
    }
    /**
     * Get available stages.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_stages
     *
     * @returns Promise with list of available stages
     */
    static stages() {
        return Requests.processRoute(FunnelRoutes.routes.stages);
    }
    /**
     * Get daily funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_daily
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with daily funnel metrics data
     */
    static daily(params) {
        return Requests.processRoute(FunnelRoutes.routes.daily, undefined, undefined, params);
    }
    /**
     * Get monthly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_monthly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with monthly funnel metrics data
     */
    static monthly(params) {
        return Requests.processRoute(FunnelRoutes.routes.monthly, undefined, undefined, params);
    }
    /**
     * Get yearly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_yearly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with yearly funnel metrics data
     */
    static yearly(params) {
        return Requests.processRoute(FunnelRoutes.routes.yearly, undefined, undefined, params);
    }
    /**
     * Get gamified funnel metrics with recommended targets, scores, and ranks.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_gamify
     *
     * @param params Query parameters (title_id, community_id, start_date, end_date)
     * @returns Promise with the gamified funnel data
     */
    static gamify(params) {
        return Requests.processRoute(FunnelRoutes.routes.gamify, undefined, undefined, params);
    }
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
    static diagnostic(params) {
        return Requests.processRoute(FunnelRoutes.routes.diagnostic, undefined, undefined, params);
    }
}

class SocialStatsRoute {
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

// src/api/SocialStats.ts
class SocialStats {
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
    static list(params) {
        return Requests.processRoute(SocialStatsRoute.routes.getStats, undefined, undefined, params);
    }
    /**
     * Get platform-level statistics, such as average follower count per platform.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
     *
     * @returns promise
     */
    static platformStatistics(params) {
        return Requests.processRoute(SocialStatsRoute.routes.getPlatformStatistics, undefined, undefined, params);
    }
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
    static reports(params) {
        return Requests.processRoute(SocialStatsRoute.routes.getReports, undefined, undefined, params);
    }
    /**
     * Retrieve a single social media account statistic record by its ID.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
     *
     * @param id The ID of the statistic record.
     * @returns promise
     */
    static view(id, params) {
        return Requests.processRoute(SocialStatsRoute.routes.getStatById, {}, { id: id }, params);
    }
}

class HashtagRoute {
}
HashtagRoute.routes = {
    list: { url: '/hashtags', method: HTTP_METHODS.GET },
    top: { url: '/hashtags/top', method: HTTP_METHODS.GET },
};

class Hashtags {
    /**
     * List all the hashtags
     *
     *
     * @returns A promise
     */
    static list(params) {
        return Requests.processRoute(HashtagRoute.routes.list, {}, {}, params);
    }
    /**
     * Get the top hashtags for a title, campaign, or schedule.
     *
     * @param params - e.g. { title_id: '...', limit: 10, sort: 'sum_views', start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     * @returns AxiosPromise of an array of aggregated hashtags
     */
    static top(params) {
        return Requests.processRoute(HashtagRoute.routes.top, {}, {}, params);
    }
}

class WebsiteAnalyticsRoute {
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
    },
    landingPageReport: {
        url: '/analytics/reports/landing-page',
        method: HTTP_METHODS.GET
    },
};

class WebsiteAnalytics {
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
    static listSessions(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listSessions, {}, undefined, params);
    }
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
    static listPageviews(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listPageviews, {}, undefined, params);
    }
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
    static listEvents(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.listEvents, {}, undefined, params);
    }
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
    static overview(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.overview, {}, undefined, params);
    }
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
    static collect(data) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.collect, data);
    }
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
    static sessionsAverage(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.sessionsAverage, {}, undefined, params);
    }
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
    static sessionsHistogram(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.sessionsHistogram, {}, undefined, params);
    }
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
    static pageviewsOverTime(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.pageviewsOverTime, {}, undefined, params);
    }
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
    static topPages(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.topPages, {}, undefined, params);
    }
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
    static eventsSummary(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.eventsSummary, {}, undefined, params);
    }
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
    static popularEvents(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.popularEvents, {}, undefined, params);
    }
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
    static geoDistribution(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.geoDistribution, {}, undefined, params);
    }
    /**
     * Get device type breakdown
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     * @returns Promise with device breakdown data
     */
    static deviceBreakdown(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.deviceBreakdown, {}, undefined, params);
    }
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
    static referrers(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.referrers, {}, undefined, params);
    }
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
    static utmPerformance(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.utmPerformance, {}, undefined, params);
    }
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
    static userJourney(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.journey, // references our new route definition  
        {}, // no body data (GET request)  
        undefined, params);
    }
    /**
   * Get a detailed marketing report for the game's landing page.
   * Includes scroll depth, video watch time distribution, and CTA performance.
   *
   * @param params
   *   - title_id: string (Required)
   *   - start_date?: string (YYYY-MM-DD)
   *   - end_date?: string (YYYY-MM-DD)
   *   - group_by?: 'country' | 'device'
   */
    static landingPageReport(params) {
        return Requests.processRoute(WebsiteAnalyticsRoute.routes.landingPageReport, {}, undefined, params);
    }
}

class ShortLinksRoute {
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

class ShortLinks {
    /**
     * List all short links with optional filters
     */
    static list(params) {
        return Requests.processRoute(ShortLinksRoute.routes.listShortLinks, undefined, undefined, params);
    }
    /**
     * Create a new short link
     */
    static create(data, params) {
        return Requests.processRoute(ShortLinksRoute.routes.createShortLink, data, {}, params);
    }
    /**
     * Get a specific short link by ID
     */
    static view(id, params) {
        return Requests.processRoute(ShortLinksRoute.routes.viewShortLink, {}, { id }, params);
    }
    /**
     * Update a short link
     */
    static update(id, data, params) {
        return Requests.processRoute(ShortLinksRoute.routes.updateShortLink, data, { id }, params);
    }
    // Uncomment when delete is supported
    // public static delete<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    //   return Requests.processRoute(ShortLinksRoute.routes.deleteShortLink, {}, { id }, params);
    // }
    /**
    * Get click-summary report
    *  - Example usage: ShortLinks.clickSummary({ short_link_id: 'uuid-here' })
    */
    static clickSummary(params) {
        return Requests.processRoute(ShortLinksRoute.routes.clickSummary, undefined, undefined, params);
    }
    /**
     * Get geo & device breakdown report
     *  - Example usage: ShortLinks.geoDeviceBreakdown({ short_link_id: 'uuid-here' })
     */
    static geoDeviceBreakdown(params) {
        return Requests.processRoute(ShortLinksRoute.routes.geoDeviceBreakdown, undefined, undefined, params);
    }
    /**
     * Get time-series report
     *  - Example usage: ShortLinks.timeSeries({ short_link_id: 'uuid-here', group_by: 'day' })
     */
    static timeSeries(params) {
        return Requests.processRoute(ShortLinksRoute.routes.timeSeries, undefined, undefined, params);
    }
    /**
     * Get referrer & UTM report
     *  - Example usage: ShortLinks.referrerReport({ short_link_id: 'uuid-here' })
     */
    static referrerReport(params) {
        return Requests.processRoute(ShortLinksRoute.routes.referrerReport, undefined, undefined, params);
    }
    static campaignPerformance(params) {
        return Requests.processRoute(ShortLinksRoute.routes.campaignPerformance, undefined, undefined, params);
    }
    static influencerPerformance(params) {
        return Requests.processRoute(ShortLinksRoute.routes.influencerPerformance, undefined, undefined, params);
    }
    static socialPostPerformance(params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostPerformance, undefined, undefined, params);
    }
    static conversionFunnel(params) {
        return Requests.processRoute(ShortLinksRoute.routes.conversionFunnel, undefined, undefined, params);
    }
    static clickHeatmap(params) {
        return Requests.processRoute(ShortLinksRoute.routes.clickHeatmap, undefined, undefined, params);
    }
    static botAnalysis(params) {
        return Requests.processRoute(ShortLinksRoute.routes.botAnalysis, undefined, undefined, params);
    }
    static attributionReport(params) {
        return Requests.processRoute(ShortLinksRoute.routes.attributionReport, undefined, undefined, params);
    }
    static socialPostDeepDive(params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostDeepDive, undefined, undefined, params);
    }
    static socialPostContentAnalysis(params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostContentAnalysis, undefined, undefined, params);
    }
    static socialPostEngagementBreakdown(params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostEngagementBreakdown, undefined, undefined, params);
    }
    static socialPostTrackingEffectiveness(params) {
        return Requests.processRoute(ShortLinksRoute.routes.socialPostTrackingEffectiveness, undefined, undefined, params);
    }
}

class AIUsageRoute {
}
AIUsageRoute.routes = {
    listUsage: { url: '/billing/ai-usage', method: HTTP_METHODS.GET },
    summaryUsage: { url: '/billing/ai-usage/summary', method: HTTP_METHODS.GET }
};

class AIUsage {
    /**
     * List all AI usage entries with optional filters (date range, service, model, etc.).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsage
     *
     * @param params Query parameters for filtering and grouping
     * @returns AxiosPromise
     */
    static list(params) {
        return Requests.processRoute(AIUsageRoute.routes.listUsage, undefined, undefined, params);
    }
    /**
     * Get summarized AI usage statistics (token totals, cost, grouped by service/model).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsageSummary
     *
     * @param params Query parameters for filtering by date range
     * @returns AxiosPromise
     */
    static summary(params) {
        return Requests.processRoute(AIUsageRoute.routes.summaryUsage, undefined, undefined, params);
    }
}

class MarketingAgenciesRoute {
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

class MarketingAgencies {
    /**
     * List all marketing agencies.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies
     *
     * @param params Optional query parameters (e.g., is_admin, sort_by, sort_order, page, per_page).
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies
     *
     * @param data The data for the new agency.
     * @returns Promise
     */
    static create(data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.create, data);
    }
    /**
     * Retrieve a single marketing agency by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id
     *
     * @param id The UUID of the agency to retrieve.
     * @returns promise
     */
    static view(id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.view, {}, { id });
    }
    /**
     * Update a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/putMarketing-agencies-id
     *
     * @param id The UUID of the agency to update.
     * @param data The data to update.
     * @returns promise
     */
    static update(id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.update, data, { id });
    }
    /**
     * Deletes a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id
     *
     * @param id The UUID of the agency to delete.
     * @returns promise
     */
    static delete(id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.delete, {}, { id });
    }
    /**
     * Add a user as an administrator to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-administrators
     *
     * @param id The UUID of the agency.
     * @param data The data containing the user_id to add.
     * @returns Promise
     */
    static addAdministrator(id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addAdministrator, data, { id });
    }
    /**
     * Remove a user as an administrator from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-administrators-user_id
     *
     * @param id The UUID of the agency.
     * @param user_id The UUID of the user to remove.
     * @returns Promise
     */
    static removeAdministrator(id, user_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeAdministrator, {}, { id, user_id });
    }
    /**
     * Set the logo for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-logo
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id for the logo.
     * @returns Promise
     */
    static setLogo(id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.setLogo, data, { id });
    }
    /**
     * Add a case study to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id and optional order.
     * @returns Promise
     */
    static addCaseStudy(id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addCaseStudy, data, { id });
    }
    /**
     * Remove a case study from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-case-studies-media_id
     *
     * @param id The UUID of the agency.
     * @param media_id The UUID of the media to remove.
     * @returns Promise
     */
    static removeCaseStudy(id, media_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeCaseStudy, {}, { id, media_id });
    }
    /**
     * Update the order of case studies for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies-order
     *
     * @param id The UUID of the agency.
     * @param order_data An array of objects with media_id and new order.
     * @returns Promise
     */
    static updateCaseStudyOrder(id, order_data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.updateCaseStudyOrder, { order_data }, { id });
    }
    /**
     * Invite a user to become an administrator of an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @param data The data containing the email of the user to invite.
     * @returns Promise
     */
    static invite(id, data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.invite, data, { id });
    }
    /**
     * List all pending invitations for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @returns Promise
     */
    static listInvites(id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.listInvites, {}, { id });
    }
    /**
     * Revoke a pending invitation.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-invites-invite_id
     *
     * @param id The UUID of the agency.
     * @param invite_id The UUID of the invitation to revoke.
     * @returns Promise
     */
    static revokeInvite(id, invite_id) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.revokeInvite, {}, { id, invite_id });
    }
    /**
     * Get the details of a pending invitation using its token.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-invites-details
     *
     * @param params An object containing the token.
     * @returns Promise
     */
    static getInviteDetails(params) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.getInviteDetails, undefined, undefined, params);
    }
    /**
     * Accept an invitation to become an administrator.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-invites-accept
     *
     * @param data The data containing the invitation token.
     * @returns Promise
     */
    static acceptInvite(data) {
        return Requests.processRoute(MarketingAgenciesRoute.routes.acceptInvite, data);
    }
}

class TwitchReportingRoute {
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
    discoverActiveGames: {
        url: '/reporting/twitch/games/discovery',
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

class TwitchReporting {
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
    static getCreatorCcvHistory(twitch_streamer_id, params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getCreatorCcvHistory, undefined, { twitch_streamer_id }, params);
    }
    /**
     * Get a summary of game performance metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getGamesSummary
     *
     * @param params Optional query parameters for filtering and sorting (e.g., start_date, end_date, sort_by, limit).
     *
     * @returns promise
     */
    static getGamesSummary(params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getGamesSummary, undefined, undefined, params);
    }
    /**
     * Get most recently active streamers.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveStreamers
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveStreamers(params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getMostActiveStreamers, undefined, undefined, params);
    }
    /**
     * Get most recently streamed games.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveGames
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveGames(params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getMostActiveGames, undefined, undefined, params);
    }
    /**
     * Discover the most active Twitch games with Steam/IGDB genre, category,
     * theme, live snapshot, and trend metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/discoverActiveTwitchGames
     *
     * @param params Optional query parameters (e.g., genres, categories, match_mode, trend_days, sort_by, limit).
     *
     * @returns promise
     */
    static discoverActiveGames(params) {
        return Requests.processRoute(TwitchReportingRoute.routes.discoverActiveGames, undefined, undefined, params);
    }
    /**
     * Get top streamers by performance (average or peak CCV).
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getTopStreamers
     *
     * @param params Optional query parameters for filtering and sorting (e.g., sort_by, start_date, limit).
     *
     * @returns promise
     */
    static getTopStreamers(params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getTopStreamers, undefined, undefined, params);
    }
    /**
     * Get a streamer's typical streaming schedule as a heatmap.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorStreamingSchedule
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     *
     * @returns promise
     */
    static getCreatorStreamingSchedule(twitch_streamer_id) {
        return Requests.processRoute(TwitchReportingRoute.routes.getCreatorStreamingSchedule, undefined, { twitch_streamer_id });
    }
    /**
    * Get a list of games played by a specific streamer.
    *
    * @param twitch_streamer_id The ID of the Twitch streamer.
    * @returns promise
    */
    static getStreamerGameHistory(twitch_streamer_id) {
        return Requests.processRoute(TwitchReportingRoute.routes.getStreamerGameHistory, undefined, { twitch_streamer_id });
    }
    /**
     * Get a paginated list of streamers who played a specific game.
     *
     * @param game_name The URL-encoded name of the game.
     * @param params Optional query parameters for pagination (e.g., page, per_page).
     * @returns promise
     */
    static getStreamersForGame(game_name, params) {
        return Requests.processRoute(TwitchReportingRoute.routes.getStreamersForGame, undefined, { game_name: encodeURIComponent(game_name) }, params);
    }
}

class RafflesRoute {
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

class Raffles {
    /**
     * List all raffles with optional filters.
     */
    static list(params) {
        return Requests.processRoute(RafflesRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Create a new raffle (Game Owner).
     */
    static create(data) {
        return Requests.processRoute(RafflesRoute.routes.create, data);
    }
    /**
     * Retrieve details for a specific raffle.
     */
    static view(id) {
        return Requests.processRoute(RafflesRoute.routes.view, {}, { id });
    }
    /**
     * Enter a raffle (User/Player). Requires Steam ID.
     */
    static enter(id, data) {
        return Requests.processRoute(RafflesRoute.routes.enter, data, { id });
    }
    /**
     * Get the authenticated user's entry status for a specific raffle.
     */
    static me(id) {
        return Requests.processRoute(RafflesRoute.routes.me, {}, { id });
    }
    /**
     * Record a viral action (e.g., Steam Wishlist, Social Share).
     */
    static performAction(id, data) {
        return Requests.processRoute(RafflesRoute.routes.performAction, data, { id });
    }
    /**
     * Post raffle content to social media via Glitch API.
     */
    static shareSocially(id, data) {
        return Requests.processRoute(RafflesRoute.routes.shareSocially, data, { id });
    }
    /**
     * Send an invitation email to a friend.
     */
    static inviteFriend(id, data) {
        return Requests.processRoute(RafflesRoute.routes.inviteFriend, data, { id });
    }
    /**
     * Add a prize tier to a raffle (Game Owner).
     */
    static addPrize(id, data) {
        return Requests.processRoute(RafflesRoute.routes.addPrize, data, { id });
    }
    /**
     * Trigger the automated drawing process (Game Owner).
     */
    static drawWinners(id) {
        return Requests.processRoute(RafflesRoute.routes.drawWinners, {}, { id });
    }
    /**
     * Manually select a winner for a specific prize (Live Event Mode).
     */
    static pickWinner(id, data) {
        return Requests.processRoute(RafflesRoute.routes.pickWinner, data, { id });
    }
    /**
     * Get the public list of winners for a completed raffle.
     */
    static winners(id) {
        return Requests.processRoute(RafflesRoute.routes.winners, {}, { id });
    }
    /**
     * List all participants/entries for a raffle (Game Owner).
     */
    static participants(id, params) {
        return Requests.processRoute(RafflesRoute.routes.participants, {}, { id }, params);
    }
    /**
     * Update shipping/tracking info for a prize (Game Owner).
     */
    static fulfillPrize(entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.fulfillPrize, data, { entry_id });
    }
    /**
     * Submit shipping address for a won prize (User/Winner).
     */
    static updateAddress(entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.updateAddress, data, { entry_id });
    }
    /**
     * Disqualify a specific entry (Game Owner).
     */
    static disqualify(id, entry_id, data) {
        return Requests.processRoute(RafflesRoute.routes.disqualify, data, { id, entry_id });
    }
    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    static escrowStatus(id) {
        return Requests.processRoute(RafflesRoute.routes.escrowStatus, {}, { id });
    }
    /**
     * Get viral loop analytics (K-Factor, Cost Per Entry).
     */
    static analytics(id) {
        return Requests.processRoute(RafflesRoute.routes.analytics, {}, { id });
    }
    /**
     * Update a raffle (Game Owner).
     * Handles status transitions (e.g., moving from draft to active).
     */
    static update(id, data) {
        return Requests.processRoute(RafflesRoute.routes.update, data, { id });
    }
}

class DiscordMarketplaceRoute {
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

class DiscordMarketplace {
    /**
     * Search for Discord servers available for sponsorship.
     */
    static listListings(params) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listListings, undefined, undefined, params);
    }
    /**
     * List a Discord server in the marketplace (Owner).
     */
    static createListing(data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createListing, data);
    }
    /**
     * Get details for a specific server listing.
     */
    static viewListing(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewListing, {}, { id });
    }
    /**
     * Update listing settings like price or auto-approve (Owner).
     */
    static updateListing(id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.updateListing, data, { id });
    }
    /**
     * Remove a server from the marketplace (Owner).
     */
    static deleteListing(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.deleteListing, {}, { id });
    }
    /**
     * List sponsored post orders. Use params { mode: 'buyer' | 'seller' }.
     */
    static listOrders(params) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listOrders, undefined, undefined, params);
    }
    /**
     * Submit a post to a Discord server for sponsorship (Game Developer).
     */
    static createOrder(data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createOrder, data);
    }
    /**
     * Get details for a specific order.
     */
    static viewOrder(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewOrder, {}, { id });
    }
    /**
     * Approve and publish a sponsored post (Owner).
     */
    static approveOrder(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.approveOrder, {}, { id });
    }
    /**
     * Reject a sponsored post (Owner).
     */
    static rejectOrder(id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.rejectOrder, data, { id });
    }
    /**
     * Request changes to the post content (Owner).
     */
    static requestChanges(id, data) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.requestChanges, data, { id });
    }
    /**
     * Resubmit a post after making requested changes (Game Developer).
     */
    static resubmitOrder(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.resubmitOrder, {}, { id });
    }
    /**
     * Get available text channels for a specific Discord listing.
     */
    static getChannels(id) {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.getChannels, {}, { id });
    }
}

class EducationRoute {
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

class Education {
    // --- 1. CATEGORIES ---
    static listCategories(params) {
        return Requests.processRoute(EducationRoute.routes.listCategories, undefined, undefined, params);
    }
    static viewCategory(uuid, params) {
        return Requests.processRoute(EducationRoute.routes.viewCategory, undefined, { uuid }, params);
    }
    static createCategory(data) {
        return Requests.processRoute(EducationRoute.routes.createCategory, data);
    }
    static updateCategory(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateCategory, data, { uuid });
    }
    static deleteCategory(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteCategory, undefined, { uuid });
    }
    // --- 2. TRACKS ---
    static listTracks(params) {
        return Requests.processRoute(EducationRoute.routes.listTracks, undefined, undefined, params);
    }
    static viewTrack(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewTrack, undefined, { uuid });
    }
    static createTrack(data) {
        return Requests.processRoute(EducationRoute.routes.createTrack, data);
    }
    static updateTrack(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateTrack, data, { uuid });
    }
    static deleteTrack(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteTrack, undefined, { uuid });
    }
    static registerForTrack(uuid) {
        return Requests.processRoute(EducationRoute.routes.registerTrack, {}, { uuid });
    }
    static myTracks() {
        return Requests.processRoute(EducationRoute.routes.myTracks);
    }
    static getTrackAnalytics(uuid) {
        return Requests.processRoute(EducationRoute.routes.trackAnalytics, undefined, { uuid });
    }
    // --- 3. CONTENT ---
    static listContent(params) {
        return Requests.processRoute(EducationRoute.routes.listContent, undefined, undefined, params);
    }
    static viewContent(uuid, params) {
        return Requests.processRoute(EducationRoute.routes.viewContent, undefined, { uuid }, params);
    }
    static createContent(data) {
        return Requests.processRoute(EducationRoute.routes.createContent, data);
    }
    static updateContent(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateContent, data, { uuid });
    }
    static deleteContent(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteContent, undefined, { uuid });
    }
    static heartbeat(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.contentHeartbeat, data, { uuid });
    }
    static getSecureVideo(uuid) {
        return Requests.processRoute(EducationRoute.routes.getSecureVideo, undefined, { uuid });
    }
    static getPreviewSecureVideo(uuid) {
        return Requests.processRoute(EducationRoute.routes.getPreviewSecureVideo, undefined, { uuid });
    }
    static listAllProgress(params) {
        return Requests.processRoute(EducationRoute.routes.listAllProgress, undefined, undefined, params);
    }
    // --- 4. TRACK CONTENT (PIVOT) ---
    static listTrackContent(track_id) {
        return Requests.processRoute(EducationRoute.routes.listTrackContent, undefined, { track_id });
    }
    static addContentToTrack(track_id, data) {
        return Requests.processRoute(EducationRoute.routes.addContentToTrack, data, { track_id });
    }
    static removeContentFromTrack(track_id, content_id) {
        return Requests.processRoute(EducationRoute.routes.removeContentFromTrack, undefined, { track_id, content_id });
    }
    static reorderTrackContent(track_id, content_ids) {
        return Requests.processRoute(EducationRoute.routes.reorderTrackContent, { content_ids }, { track_id });
    }
    // --- 5. QUIZZES ---
    static listQuizzes(params) {
        return Requests.processRoute(EducationRoute.routes.listQuizzes, undefined, undefined, params);
    }
    static viewQuiz(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuiz, undefined, { uuid });
    }
    static submitQuiz(uuid, answers) {
        return Requests.processRoute(EducationRoute.routes.submitQuiz, { answers }, { uuid });
    }
    static myQuizAttempts(uuid) {
        return Requests.processRoute(EducationRoute.routes.myQuizAttempts, undefined, { uuid });
    }
    static viewQuizAttempt(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizAttempt, undefined, { uuid });
    }
    static createQuiz(data) {
        return Requests.processRoute(EducationRoute.routes.createQuiz, data);
    }
    static updateQuiz(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuiz, data, { uuid });
    }
    static deleteQuiz(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuiz, undefined, { uuid });
    }
    // --- 6. QUIZ QUESTIONS & OPTIONS ---
    static listQuizQuestions(quiz_id) {
        return Requests.processRoute(EducationRoute.routes.listQuizQuestions, undefined, { quiz_id });
    }
    static createQuizQuestion(quiz_id, data) {
        return Requests.processRoute(EducationRoute.routes.createQuizQuestion, data, { quiz_id });
    }
    static reorderQuizQuestions(quiz_id, question_ids) {
        return Requests.processRoute(EducationRoute.routes.reorderQuizQuestions, { question_ids }, { quiz_id });
    }
    static listQuizOptions(question_id) {
        return Requests.processRoute(EducationRoute.routes.listQuizOptions, undefined, { question_id });
    }
    static createQuizOption(question_id, data) {
        return Requests.processRoute(EducationRoute.routes.createQuizOption, data, { question_id });
    }
    static viewQuizQuestion(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizQuestion, undefined, { uuid });
    }
    static updateQuizQuestion(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuizQuestion, data, { uuid });
    }
    static deleteQuizQuestion(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuizQuestion, undefined, { uuid });
    }
    // --- QUIZ OPTIONS (CRUD) ---
    static viewQuizOption(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewQuizOption, undefined, { uuid });
    }
    static updateQuizOption(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateQuizOption, data, { uuid });
    }
    static deleteQuizOption(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteQuizOption, undefined, { uuid });
    }
    // --- 7. PROGRESS & REGISTRATIONS ---
    static syncProgress(data) {
        return Requests.processRoute(EducationRoute.routes.syncProgress, data);
    }
    static getMyProgressByContent(content_id) {
        return Requests.processRoute(EducationRoute.routes.myProgressByContent, undefined, { content_id });
    }
    static listRegistrations(params) {
        return Requests.processRoute(EducationRoute.routes.listRegistrations, undefined, undefined, params);
    }
    static refreshUserTrack(uuid) {
        return Requests.processRoute(EducationRoute.routes.refreshUserTrack, {}, { uuid });
    }
    // --- 8. ANALYTICS & MODULE DATA ---
    static logView(data) {
        return Requests.processRoute(EducationRoute.routes.logView, data);
    }
    static saveModuleData(data) {
        return Requests.processRoute(EducationRoute.routes.saveModuleData, data);
    }
    static getModuleData(uuid) {
        return Requests.processRoute(EducationRoute.routes.viewModuleData, undefined, { uuid });
    }
    static getConversionReport() {
        return Requests.processRoute(EducationRoute.routes.reportConversion);
    }
    static getAdoptionReport() {
        return Requests.processRoute(EducationRoute.routes.reportAdoption);
    }
    static getQuestionPerformanceReport(params) {
        return Requests.processRoute(EducationRoute.routes.reportQuestionPerformance, undefined, undefined, params);
    }
    static getRetentionReport() {
        return Requests.processRoute(EducationRoute.routes.reportRetention);
    }
    /**
     * List raw engagement logs.
     * @param params Filter by user_id, content_id, or is_paid
     */
    static listViews(params) {
        return Requests.processRoute(EducationRoute.routes.listViews, undefined, undefined, params);
    }
    // --- 9. ACHIEVEMENTS (BADGES & CERTIFICATES) ---
    static myBadges() {
        return Requests.processRoute(EducationRoute.routes.myBadges);
    }
    static awardBadge(data) {
        return Requests.processRoute(EducationRoute.routes.awardBadge, data);
    }
    static myCertificates() {
        return Requests.processRoute(EducationRoute.routes.myCertificates);
    }
    static downloadCertificate(uuid) {
        return Requests.processRoute(EducationRoute.routes.downloadCertificate, undefined, { uuid });
    }
    // --- 10. TEMPLATES & UPLOADS ---
    static listTemplates(params) {
        return Requests.processRoute(EducationRoute.routes.listTemplates, undefined, undefined, params);
    }
    static createTemplate(data) {
        return Requests.processRoute(EducationRoute.routes.createTemplate, data);
    }
    static viewTemplate(uuid, params) {
        return Requests.processRoute(EducationRoute.routes.viewTemplate, undefined, { uuid }, params);
    }
    static updateTemplate(uuid, data) {
        return Requests.processRoute(EducationRoute.routes.updateTemplate, data, { uuid });
    }
    static deleteTemplate(uuid) {
        return Requests.processRoute(EducationRoute.routes.deleteTemplate, undefined, { uuid });
    }
    static uploadTemplateSignature(uuid, file) {
        const url = EducationRoute.routes.uploadTemplateSignature.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    }
    static uploadTemplateBackground(uuid, file) {
        const url = EducationRoute.routes.uploadTemplateBackground.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    }
}

class CrmRoute {
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
    // Newsletter and Campaign Management
    listCampaigns: { url: '/admin/crm/campaigns', method: HTTP_METHODS.GET },
    createCampaign: { url: '/admin/crm/campaigns', method: HTTP_METHODS.POST },
    viewCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
    updateCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
    deleteCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
    previewCampaignAudience: { url: '/admin/crm/campaigns/preview', method: HTTP_METHODS.POST },
    getCampaignFilterOptions: { url: '/admin/crm/campaigns/filter-options', method: HTTP_METHODS.GET },
    getCampaignMergeFields: { url: '/admin/crm/campaigns/merge-fields', method: HTTP_METHODS.GET },
    renderCampaignTemplatePreview: { url: '/admin/crm/campaigns/render-preview', method: HTTP_METHODS.POST },
    sendCampaignTestEmail: { url: '/admin/crm/campaigns/test-email', method: HTTP_METHODS.POST },
    getCampaignDeliveryStatus: { url: '/admin/crm/campaigns/delivery-status', method: HTTP_METHODS.GET },
    sendCampaign: { url: '/admin/crm/campaigns/{campaign_id}/send', method: HTTP_METHODS.POST },
    getCampaignStats: { url: '/admin/crm/campaigns/{campaign_id}/stats', method: HTTP_METHODS.GET },
    listCampaignRecipients: { url: '/admin/crm/campaigns/{campaign_id}/recipients', method: HTTP_METHODS.GET },
    previewCampaignProspectImport: { url: '/admin/crm/campaigns/import-prospects/preview', method: HTTP_METHODS.POST },
    importCampaignProspects: { url: '/admin/crm/campaigns/import-prospects', method: HTTP_METHODS.POST },
    previewFestivalSubmissionImport: { url: '/admin/crm/imports/festival-submissions/preview', method: HTTP_METHODS.POST },
    importFestivalSubmissions: { url: '/admin/crm/imports/festival-submissions', method: HTTP_METHODS.POST },
    listFestivalSubmissionSources: { url: '/admin/crm/imports/festival-submissions/sources', method: HTTP_METHODS.GET },
    createFestivalSubmissionSource: { url: '/admin/crm/imports/festival-submissions/sources', method: HTTP_METHODS.POST },
    updateFestivalSubmissionSource: { url: '/admin/crm/imports/festival-submissions/sources/{source_id}', method: HTTP_METHODS.PUT },
    deleteFestivalSubmissionSource: { url: '/admin/crm/imports/festival-submissions/sources/{source_id}', method: HTTP_METHODS.DELETE },
    listEmailProviderAddresses: { url: '/admin/crm/email-provider-addresses', method: HTTP_METHODS.GET },
    getEmailProviderAddressOptions: { url: '/admin/crm/email-provider-addresses/options', method: HTTP_METHODS.GET },
    createEmailProviderAddress: { url: '/admin/crm/email-provider-addresses', method: HTTP_METHODS.POST },
    updateEmailProviderAddress: { url: '/admin/crm/email-provider-addresses/{address_id}', method: HTTP_METHODS.PUT },
    deactivateEmailProviderAddress: { url: '/admin/crm/email-provider-addresses/{address_id}', method: HTTP_METHODS.DELETE },
    // Automation Triggers
    triggerSourcing: { url: '/admin/crm/automation/source', method: HTTP_METHODS.POST },
    triggerSync: { url: '/admin/crm/automation/sync', method: HTTP_METHODS.POST },
    // Analytics
    funnelStats: { url: '/admin/crm/analytics/funnel', method: HTTP_METHODS.GET },
    performanceStats: { url: '/admin/crm/analytics/performance', method: HTTP_METHODS.GET },
    getInterestStats: { url: '/admin/crm/analytics/interests', method: HTTP_METHODS.GET },
};

class Crm {
    /**
     * List and search CRM leads.
     */
    static listLeads(params) {
        return Requests.processRoute(CrmRoute.routes.listLeads, undefined, undefined, params);
    }
    /**
     * Manually create a new lead.
     */
    static createLead(data) {
        return Requests.processRoute(CrmRoute.routes.createLead, data);
    }
    /**
     * View a single lead with contacts and activity timeline.
     */
    static viewLead(lead_id) {
        return Requests.processRoute(CrmRoute.routes.viewLead, {}, { lead_id });
    }
    /**
     * Update lead information.
     */
    static updateLead(lead_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateLead, data, { lead_id });
    }
    /**
     * Delete a lead (Soft Delete).
     */
    static deleteLead(lead_id) {
        return Requests.processRoute(CrmRoute.routes.deleteLead, {}, { lead_id });
    }
    /**
     * Assign a Super Admin as the owner of a lead.
     */
    static assignOwner(lead_id, user_id) {
        return Requests.processRoute(CrmRoute.routes.assignOwner, { user_id }, { lead_id });
    }
    /**
     * Manually trigger Apollo enrichment and website scraping for a lead.
     */
    static enrichLead(lead_id) {
        return Requests.processRoute(CrmRoute.routes.enrichLead, {}, { lead_id });
    }
    /**
     * Approve a specific contact to start the Apollo email sequence.
     */
    static approveContact(contact_id) {
        return Requests.processRoute(CrmRoute.routes.approveContact, {}, { contact_id });
    }
    /**
     * Manually update the pipeline status of a lead.
     */
    static updateStatus(lead_id, status, note) {
        return Requests.processRoute(CrmRoute.routes.updateStatus, { status, note }, { lead_id });
    }
    /**
     * Add a manual note to the lead's activity timeline.
     */
    static addNote(lead_id, content) {
        return Requests.processRoute(CrmRoute.routes.addNote, { content }, { lead_id });
    }
    /**
     * Manually add a contact person to a lead.
     */
    static addContact(lead_id, data) {
        return Requests.processRoute(CrmRoute.routes.addContact, data, { lead_id });
    }
    /**
     * Mark a lead as lost and record the reason.
     */
    static markAsLost(lead_id, reason) {
        return Requests.processRoute(CrmRoute.routes.markAsLost, { reason }, { lead_id });
    }
    /**
     * Record that a staff member has manually replied to a prospect.
     */
    static recordStaffReply(lead_id) {
        return Requests.processRoute(CrmRoute.routes.recordStaffReply, {}, { lead_id });
    }
    /**
     * Approve a batch of contacts for outreach.
     */
    static bulkApprove(contact_ids) {
        return Requests.processRoute(CrmRoute.routes.bulkApprove, { contact_ids });
    }
    /**
     * Manually trigger the bi-weekly sourcing automation.
     */
    static triggerSourcing() {
        return Requests.processRoute(CrmRoute.routes.triggerSourcing, {});
    }
    /**
     * Manually trigger the Apollo status and conversion sync.
     */
    static triggerSync() {
        return Requests.processRoute(CrmRoute.routes.triggerSync, {});
    }
    /**
     * Get funnel conversion percentages.
     */
    static getFunnelStats() {
        return Requests.processRoute(CrmRoute.routes.funnelStats);
    }
    /**
     * Get win rates and response time analytics.
     */
    static getPerformanceStats() {
        return Requests.processRoute(CrmRoute.routes.performanceStats);
    }
    /**
     * Get the analytics on what users indcated they were interested in.
     */
    static getInterestStats() {
        return Requests.processRoute(CrmRoute.routes.getInterestStats);
    }
    /**
    * Update an existing contact's information.
    */
    static updateContact(contact_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateContact, data, { contact_id });
    }
    /**
     * Remove a contact from a lead.
     */
    static deleteContact(contact_id) {
        return Requests.processRoute(CrmRoute.routes.deleteContact, {}, { contact_id });
    }
    /**
     * List CRM newsletter and mass-email campaigns.
     */
    static listCampaigns(params) {
        return Requests.processRoute(CrmRoute.routes.listCampaigns, undefined, undefined, params);
    }
    /**
     * Create a CRM campaign draft with filters, exclusions, and optional variants.
     */
    static createCampaign(data) {
        return Requests.processRoute(CrmRoute.routes.createCampaign, data);
    }
    /**
     * View a CRM campaign. Pass include_recipients in params for a small recipient sample.
     */
    static viewCampaign(campaign_id, params) {
        return Requests.processRoute(CrmRoute.routes.viewCampaign, {}, { campaign_id }, params);
    }
    /**
     * Update an editable CRM campaign draft or paused campaign.
     */
    static updateCampaign(campaign_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateCampaign, data, { campaign_id });
    }
    /**
     * Delete an unsent CRM campaign draft.
     */
    static deleteCampaign(campaign_id) {
        return Requests.processRoute(CrmRoute.routes.deleteCampaign, {}, { campaign_id });
    }
    /**
     * Preview campaign audience filters and exclusions without creating recipients.
     */
    static previewCampaignAudience(data) {
        return Requests.processRoute(CrmRoute.routes.previewCampaignAudience, data);
    }
    /**
     * List human-readable filter options for the CRM campaign composer.
     */
    static getCampaignFilterOptions() {
        return Requests.processRoute(CrmRoute.routes.getCampaignFilterOptions);
    }
    /**
     * List the backend-supported CRM campaign merge fields for the composer.
     */
    static getCampaignMergeFields() {
        return Requests.processRoute(CrmRoute.routes.getCampaignMergeFields);
    }
    /**
     * Render CRM campaign content with the same merge-field engine used at send time.
     */
    static renderCampaignTemplatePreview(data) {
        return Requests.processRoute(CrmRoute.routes.renderCampaignTemplatePreview, data);
    }
    /**
     * Send a non-tracked CRM campaign test email with rendered merge fields.
     */
    static sendCampaignTestEmail(data) {
        return Requests.processRoute(CrmRoute.routes.sendCampaignTestEmail, data);
    }
    /**
     * Read CRM campaign queue depth and Azure/system email rate-limit windows.
     */
    static getCampaignDeliveryStatus() {
        return Requests.processRoute(CrmRoute.routes.getCampaignDeliveryStatus);
    }
    /**
     * Materialize and queue a CRM campaign, optionally with a limit or dispatch=false.
     */
    static sendCampaign(campaign_id, data = {}) {
        return Requests.processRoute(CrmRoute.routes.sendCampaign, data, { campaign_id });
    }
    /**
     * Refresh and read CRM campaign engagement, reply, and conversion stats.
     */
    static getCampaignStats(campaign_id) {
        return Requests.processRoute(CrmRoute.routes.getCampaignStats, {}, { campaign_id });
    }
    /**
     * List campaign recipient audit rows with optional status or variant filters.
     */
    static listCampaignRecipients(campaign_id, params) {
        return Requests.processRoute(CrmRoute.routes.listCampaignRecipients, {}, { campaign_id }, params);
    }
    /**
     * Validate external prospect rows and preview field mapping/dedupe outcomes.
     */
    static previewCampaignProspectImport(prospects, options = {}) {
        return Requests.processRoute(CrmRoute.routes.previewCampaignProspectImport, Object.assign({ prospects }, options));
    }
    /**
     * Import external prospects into CRM leads and contacts for future campaigns.
     */
    static importCampaignProspects(prospects, options = {}) {
        return Requests.processRoute(CrmRoute.routes.importCampaignProspects, Object.assign({ prospects }, options));
    }
    /**
     * Preview uploaded festival submission sheets without writing External Game or CRM records.
     */
    static previewFestivalSubmissionImport(files, options = {}, onUploadProgress) {
        return Requests.postFormData(CrmRoute.routes.previewFestivalSubmissionImport.url, Crm.festivalSubmissionFormData(files, options), undefined, onUploadProgress);
    }
    /**
     * Import uploaded festival submission sheets into External Games and CRM leads/contacts.
     */
    static importFestivalSubmissions(files, options = {}, onUploadProgress) {
        return Requests.postFormData(CrmRoute.routes.importFestivalSubmissions.url, Crm.festivalSubmissionFormData(files, options), undefined, onUploadProgress);
    }
    /**
     * List saved recurring Google Sheet sources for festival submission imports.
     */
    static listFestivalSubmissionSources() {
        return Requests.processRoute(CrmRoute.routes.listFestivalSubmissionSources);
    }
    /**
     * Save a recurring Google Sheet source for festival submission imports.
     */
    static createFestivalSubmissionSource(data) {
        return Requests.processRoute(CrmRoute.routes.createFestivalSubmissionSource, data);
    }
    /**
     * Update a recurring Google Sheet source for festival submission imports.
     */
    static updateFestivalSubmissionSource(source_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateFestivalSubmissionSource, data, { source_id });
    }
    /**
     * Delete a recurring Google Sheet source for festival submission imports.
     */
    static deleteFestivalSubmissionSource(source_id) {
        return Requests.processRoute(CrmRoute.routes.deleteFestivalSubmissionSource, {}, { source_id });
    }
    /**
     * List provider-managed sender and reply-to addresses for CRM campaigns.
     */
    static listEmailProviderAddresses(params) {
        return Requests.processRoute(CrmRoute.routes.listEmailProviderAddresses, undefined, undefined, params);
    }
    /**
     * List sender/reply-to dropdown options and defaults for the campaign composer.
     */
    static getEmailProviderAddressOptions() {
        return Requests.processRoute(CrmRoute.routes.getEmailProviderAddressOptions);
    }
    /**
     * Add a provider-managed sender or reply-to address.
     */
    static createEmailProviderAddress(data) {
        return Requests.processRoute(CrmRoute.routes.createEmailProviderAddress, data);
    }
    /**
     * Update provider verification, sendability, capabilities, defaults, or notes.
     */
    static updateEmailProviderAddress(address_id, data) {
        return Requests.processRoute(CrmRoute.routes.updateEmailProviderAddress, data, { address_id });
    }
    /**
     * Deactivate a provider address while keeping the audit record.
     */
    static deactivateEmailProviderAddress(address_id) {
        return Requests.processRoute(CrmRoute.routes.deactivateEmailProviderAddress, {}, { address_id });
    }
    static festivalSubmissionFormData(files, options) {
        const formData = new FormData();
        files.forEach((file, index) => {
            const candidate = file;
            formData.append('files[]', file, (candidate === null || candidate === void 0 ? void 0 : candidate.name) || `festival-submission-${index + 1}`);
        });
        Object.entries(options || {}).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                return;
            }
            if (Array.isArray(value)) {
                value.forEach((item) => formData.append(`${key}[]`, String(item)));
                return;
            }
            formData.append(key, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
        });
        return formData;
    }
}

class MultiplayerRoute {
}
MultiplayerRoute.routes = {
    searchLobbies: { url: '/titles/{title_id}/multiplayer/lobbies', method: HTTP_METHODS.GET },
    createLobby: { url: '/titles/{title_id}/multiplayer/lobbies', method: HTTP_METHODS.POST },
    showLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}', method: HTTP_METHODS.GET },
    updateLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}', method: HTTP_METHODS.PUT },
    joinLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/join', method: HTTP_METHODS.POST },
    leaveLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/leave', method: HTTP_METHODS.POST },
    setLobbyServer: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/server', method: HTTP_METHODS.POST },
    listLobbyMessages: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/messages', method: HTTP_METHODS.GET },
    sendLobbyMessage: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/messages', method: HTTP_METHODS.POST },
    listVoiceRooms: { url: '/titles/{title_id}/multiplayer/voice/rooms', method: HTTP_METHODS.GET },
    createVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms', method: HTTP_METHODS.POST },
    showVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}', method: HTTP_METHODS.GET },
    updateVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}', method: HTTP_METHODS.PUT },
    joinVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}/join', method: HTTP_METHODS.POST },
    heartbeatVoice: { url: '/multiplayer/voice/heartbeat', method: HTTP_METHODS.POST },
    leaveVoice: { url: '/multiplayer/voice/leave', method: HTTP_METHODS.POST },
    sendVoicePacket: { url: '/multiplayer/voice/packets', method: HTTP_METHODS.POST },
    pollVoicePackets: { url: '/multiplayer/voice/poll', method: HTTP_METHODS.POST },
    browseServers: { url: '/titles/{title_id}/multiplayer/servers', method: HTTP_METHODS.GET },
    registerServer: { url: '/titles/{title_id}/multiplayer/servers', method: HTTP_METHODS.POST },
    heartbeatServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/heartbeat', method: HTTP_METHODS.POST },
    reserveServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/reserve', method: HTTP_METHODS.POST },
    heartbeatSession: { url: '/multiplayer/sessions/heartbeat', method: HTTP_METHODS.POST },
    releaseSession: { url: '/multiplayer/sessions/release', method: HTTP_METHODS.POST },
    issueAuthTicket: { url: '/titles/{title_id}/multiplayer/auth-tickets', method: HTTP_METHODS.POST },
    validateAuthTicket: { url: '/titles/{title_id}/multiplayer/auth-tickets/validate', method: HTTP_METHODS.POST },
    validateAuthTicketForServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/auth-tickets/validate', method: HTTP_METHODS.POST },
    listFavorites: { url: '/titles/{title_id}/multiplayer/favorites', method: HTTP_METHODS.GET },
    addFavorite: { url: '/titles/{title_id}/multiplayer/favorites', method: HTTP_METHODS.POST },
    deleteFavorite: { url: '/titles/{title_id}/multiplayer/favorites/{favorite_id}', method: HTTP_METHODS.DELETE },
    // MMO world layer: realms, zones, instances, presence.
    listRealms: { url: '/titles/{title_id}/multiplayer/realms', method: HTTP_METHODS.GET },
    createRealm: { url: '/titles/{title_id}/multiplayer/realms', method: HTTP_METHODS.POST },
    showRealm: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}', method: HTTP_METHODS.GET },
    updateRealm: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}', method: HTTP_METHODS.PUT },
    listZones: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}/zones', method: HTTP_METHODS.GET },
    createZone: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}/zones', method: HTTP_METHODS.POST },
    listInstances: { url: '/titles/{title_id}/multiplayer/zones/{zone_id}/instances', method: HTTP_METHODS.GET },
    showInstance: { url: '/titles/{title_id}/multiplayer/instances/{instance_id}', method: HTTP_METHODS.GET },
    listInstancePresence: { url: '/titles/{title_id}/multiplayer/instances/{instance_id}/presence', method: HTTP_METHODS.GET },
    enterZone: { url: '/titles/{title_id}/multiplayer/world/enter', method: HTTP_METHODS.POST },
    updatePresence: { url: '/titles/{title_id}/multiplayer/world/presence', method: HTTP_METHODS.POST },
    leaveWorld: { url: '/titles/{title_id}/multiplayer/world/leave', method: HTTP_METHODS.POST },
    // Ticketed matchmaking.
    enqueueTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets', method: HTTP_METHODS.POST },
    showTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets/{ticket_id}', method: HTTP_METHODS.GET },
    cancelTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets/{ticket_id}', method: HTTP_METHODS.DELETE },
    // Real-time negotiate + trust/moderation.
    negotiateRealtime: { url: '/titles/{title_id}/multiplayer/realtime/negotiate', method: HTTP_METHODS.POST },
    listBans: { url: '/titles/{title_id}/multiplayer/bans', method: HTTP_METHODS.GET },
    createBan: { url: '/titles/{title_id}/multiplayer/bans', method: HTTP_METHODS.POST },
    deleteBan: { url: '/titles/{title_id}/multiplayer/bans/{ban_id}', method: HTTP_METHODS.DELETE },
};

/**
 * Steam-style multiplayer APIs for Glitch titles.
 *
 * The multiplayer surface is split into three groups:
 * lobby coordination, voice coordination, server browser/reservations, and short-lived auth tickets.
 * User JWTs can infer the player from the authenticated user. Title-token clients
 * and game clients without a Glitch user session should pass a stable `player_id`.
 * Dedicated servers use `server_token` on heartbeat and server-side ticket validation
 * so they do not need to hold a user JWT or title token.
 *
 * These endpoints are intentionally database-agnostic from the SDK's point of view:
 * callers work with public identifiers, metadata objects, and lifecycle events,
 * while the backend owns how those records are stored.
 */
class Multiplayer {
    /**
     * Search joinable, non-expired lobbies for a title.
     *
     * Filters are exact-match except `skill_band`, which the backend can use for
     * near sorting. Default results exclude full, closed, unjoinable, and expired
     * lobbies. Lifecycle context: clients usually call this before `joinLobby`;
     * joins create a `lobby.joined` event on the backend.
     *
     * @param title_id Title UUID.
     * @param params Optional filters such as region, game mode, map, lobby type, skill band, and limit.
     * @example
     * Multiplayer.searchLobbies('title-uuid', {
     *   region: 'us-central',
     *   game_mode: 'ranked_duos',
     *   skill_band: 1840,
     *   limit: 25
     * });
     */
    static searchLobbies(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.searchLobbies, undefined, { title_id }, params);
    }
    /**
     * Create a lobby and insert the owner as the first joined member.
     *
     * Use this when matchmaking has no suitable lobby, when a player invites
     * friends, or when a party needs pre-game setup before server assignment.
     * Lifecycle events: `lobby.created`, then `lobby.joined` for the owner.
     *
     * @param title_id Title UUID.
     * @param data Lobby configuration and optional owner/member metadata.
     * @example
     * Multiplayer.createLobby('title-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   display_name: 'CinderAce',
     *   lobby_type: 'public',
     *   max_members: 4,
     *   region: 'us-central',
     *   game_mode: 'ranked_duos',
     *   metadata: { playlist: 'ranked', allow_voice: true }
     * });
     */
    static createLobby(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.createLobby, data, { title_id });
    }
    /**
     * Retrieve a lobby with members and assigned server information when present.
     *
     * Call this after lobby lifecycle notifications such as `lobby.joined`,
     * `lobby.updated`, `lobby.owner_transferred`, or `lobby.server_assigned`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     */
    static showLobby(title_id, lobby_id) {
        return Requests.processRoute(MultiplayerRoute.routes.showLobby, undefined, { title_id, lobby_id });
    }
    /**
     * Join a lobby or refresh an existing membership.
     *
     * This call is idempotent for a player already in the lobby and can update
     * display name, ready state, or member metadata. It returns 409 when the lobby
     * is full, closed, expired, or not joinable. Lifecycle event: `lobby.joined`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Player identity and optional member metadata.
     * @example
     * Multiplayer.joinLobby('title-uuid', 'lobby-uuid', {
     *   player_id: 'steam:76561198000000001',
     *   display_name: 'Nova',
     *   ready: false,
     *   member_data: { character: 'Ash', rank: 1799 }
     * });
     */
    static joinLobby(title_id, lobby_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.joinLobby, data, { title_id, lobby_id });
    }
    /**
     * Leave a lobby.
     *
     * If the owner leaves, ownership transfers to the oldest remaining joined
     * member. If no members remain, the lobby closes. Lifecycle events:
     * `lobby.left`, optionally `lobby.owner_transferred` or `lobby.updated`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Optional player_id for title-token clients.
     */
    static leaveLobby(title_id, lobby_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.leaveLobby, data, { title_id, lobby_id });
    }
    /**
     * Update lobby metadata, visibility, joinability, limits, or state.
     *
     * This is owner-only. `max_members` cannot be lower than the current member
     * count. Keep metadata low-frequency and mostly search/display oriented.
     * Lifecycle event: `lobby.updated`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Owner identity plus fields to update.
     */
    static updateLobby(title_id, lobby_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.updateLobby, data, { title_id, lobby_id });
    }
    /**
     * Assign a registered game server to a lobby.
     *
     * This owner-only handoff mirrors Steam's SetLobbyGameServer flow. Clients
     * should react by reserving or connecting to the assigned server, then
     * optionally leaving the lobby. Lifecycle event: `lobby.server_assigned`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Server UUID and optional lobby state/joinability updates.
     */
    static setLobbyServer(title_id, lobby_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.setLobbyServer, data, { title_id, lobby_id });
    }
    /**
     * List ordered low-bandwidth lobby messages.
     *
     * Use `after_sequence` to poll for messages missed during reconnects or after
     * a realtime `lobby.message_sent` event. This channel is for chat and control
     * messages, not gameplay, positional data, or voice streaming.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param params Optional sequence cursor and limit.
     */
    static listLobbyMessages(title_id, lobby_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listLobbyMessages, undefined, { title_id, lobby_id }, params);
    }
    /**
     * Send a low-bandwidth message to all lobby members.
     *
     * Payloads are capped at 4KB by the backend. Use this for chat, ready signals,
     * invite/kick control messages, and owner-arbitrated choices. Lifecycle event:
     * `lobby.message_sent`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Message type, sender identity, and JSON payload.
     * @example
     * Multiplayer.sendLobbyMessage('title-uuid', 'lobby-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   message_type: 'ready',
     *   payload: { ready: true }
     * });
     */
    static sendLobbyMessage(title_id, lobby_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.sendLobbyMessage, data, { title_id, lobby_id });
    }
    /**
     * List active/non-expired voice rooms for a title.
     *
     * Rooms can be attached to a lobby, a server, a party, or a proximity group.
     * Use this to discover existing voice state before joining. Lifecycle context:
     * realtime transports should mirror `voice.room_created`, `voice.room_updated`,
     * `voice.joined`, and `voice.left`.
     *
     * @param title_id Title UUID.
     * @param params Optional room filters such as lobby_id, server_id, provider, topology, state, region, and limit.
     */
    static listVoiceRooms(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listVoiceRooms, undefined, { title_id }, params);
    }
    /**
     * Create a voice room and join the creator as the first participant.
     *
     * The backend returns `voice_token` once. Keep it client-side and use it for
     * voice heartbeat, packet send, packet polling, and leave calls. `glitch_relay`
     * can carry base64 Opus frames for prototypes, small-party fallback, or
     * signaling. For production-scale audio, set `provider: 'external'` and reuse
     * the room/token contract with WebRTC, an SFU, Vivox, Steam Networking, or an
     * engine-native transport. Lifecycle events: `voice.room_created`,
     * `voice.joined`.
     *
     * @param title_id Title UUID.
     * @param data Voice codec, topology, linked lobby/server, and owner metadata.
     * @example
     * const { data } = await Multiplayer.createVoiceRoom('title-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   display_name: 'CinderAce',
     *   lobby_id: 'lobby-uuid',
     *   provider: 'glitch_relay',
     *   topology: 'lobby',
     *   codec: 'opus',
     *   sample_rate: 48000,
     *   frame_duration_ms: 20,
     *   channels: 1,
     *   metadata: { push_to_talk: true }
     * });
     */
    static createVoiceRoom(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.createVoiceRoom, data, { title_id });
    }
    /**
     * Retrieve a voice room with participant media states.
     *
     * Use this after `voice.joined`, `voice.heartbeat`, `voice.left`, or
     * `voice.room_updated` to refresh in-game UI such as speaker lists, mute
     * icons, or team voice controls.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     */
    static showVoiceRoom(title_id, voice_room_id) {
        return Requests.processRoute(MultiplayerRoute.routes.showVoiceRoom, undefined, { title_id, voice_room_id });
    }
    /**
     * Update owner-controlled voice room state.
     *
     * Owner-only. Use this to close a room, adjust capacity, update moderation
     * flags, or provide external provider connection details. The backend rejects
     * lowering `max_participants` below the current participant count. Lifecycle
     * event: `voice.room_updated`.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     * @param data Owner player identity and room fields to update.
     */
    static updateVoiceRoom(title_id, voice_room_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.updateVoiceRoom, data, { title_id, voice_room_id });
    }
    /**
     * Join a voice room and receive a participant-scoped token.
     *
     * Rejoining with the same player is idempotent and rotates the token. The
     * token is used by participant endpoints instead of requiring a user JWT or
     * title token on every media request. Returns 409 when the room is closed,
     * expired, or full. Lifecycle event: `voice.joined`.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     * @param data Player identity, display name, metadata, and token TTL.
     */
    static joinVoiceRoom(title_id, voice_room_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.joinVoiceRoom, data, { title_id, voice_room_id });
    }
    /**
     * Heartbeat voice participant state.
     *
     * Call every 10-30 seconds and whenever mute/deafen/speaking state changes.
     * `last_sequence` tells the backend how far this participant has processed
     * ordered packets. Expired participants are rejected with 409. Lifecycle event:
     * `voice.heartbeat`.
     *
     * @param data Participant voice token and mutable media state.
     */
    static heartbeatVoice(data) {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatVoice, data);
    }
    /**
     * Leave the current voice room for a participant token.
     *
     * This is idempotent for disconnect cleanup: room participant count is
     * decremented once, room ownership is transferred when possible, and an
     * empty room closes. The token remains valid only for retrying this leave
     * call; heartbeat, send, and poll calls reject left participants. Lifecycle
     * event: `voice.left`.
     *
     * @param data Participant voice token.
     */
    static leaveVoice(data) {
        return Requests.processRoute(MultiplayerRoute.routes.leaveVoice, data);
    }
    /**
     * Send one ordered voice-room packet.
     *
     * `audio` packets should contain compact compressed frames such as base64 Opus
     * at 48kHz mono/20ms. `offer`, `answer`, and `ice` packets support WebRTC
     * signaling. `control`, `speaking`, and `mute_state` packets are for custom
     * engine state. Audio payloads are capped at 16KB; non-audio packets at 4KB.
     * Muted participants cannot send audio. Lifecycle event: `voice.packet_sent`.
     *
     * @param data Participant token, packet type, payload, and optional duration.
     * @example
     * await Multiplayer.sendVoicePacket({
     *   voice_token: voiceToken,
     *   packet_type: 'audio',
     *   payload: base64OpusFrame,
     *   duration_ms: 20
     * });
     */
    static sendVoicePacket(data) {
        return Requests.processRoute(MultiplayerRoute.routes.sendVoicePacket, data);
    }
    /**
     * Poll ordered voice-room packets after a known sequence.
     *
     * Defaults to excluding packets sent by the caller. Use the highest returned
     * sequence as the next `after_sequence` cursor. This is useful for fallback
     * relay, WebRTC signaling, reconnect recovery, and small-party prototypes.
     * Lifecycle event: `voice.packet_polled`.
     *
     * @param data Participant token, optional sequence cursor, limit, and self-exclusion flag.
     */
    static pollVoicePackets(data) {
        return Requests.processRoute(MultiplayerRoute.routes.pollVoicePackets, data);
    }
    /**
     * Browse public, joinable multiplayer servers for a title.
     *
     * Default results exclude private, draining, offline, stale, expired, and full
     * servers. Title administrators can pass `include_private` to inspect servers
     * that normal clients cannot join.
     *
     * @param title_id Title UUID.
     * @param params Optional server browser filters.
     */
    static browseServers(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.browseServers, undefined, { title_id }, params);
    }
    /**
     * Register or refresh a multiplayer server and receive a one-time server token.
     *
     * Store `server_token` only on the server process. The backend stores only a
     * hash and will not return the plain token again. Counts are validated so
     * `current_players + bot_players` cannot exceed `max_players`. Lifecycle event:
     * `server.registered`.
     *
     * @param title_id Title UUID.
     * @param data Server browser, connection, rule, and capacity metadata.
     * @example
     * Multiplayer.registerServer('title-uuid', {
     *   name: 'Ranked US Central 01',
     *   server_type: 'dedicated',
     *   status: 'active',
     *   host: '203.0.113.42',
     *   game_port: 7777,
     *   query_port: 27015,
     *   transport: 'udp',
     *   max_players: 16,
     *   secure: true,
     *   tags: ['ranked', 'duos']
     * });
     */
    static registerServer(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.registerServer, data, { title_id });
    }
    /**
     * Heartbeat a multiplayer server with its dedicated `server_token`.
     *
     * Call every 30-60 seconds and whenever player counts, rules, or metadata
     * change. Stale servers are hidden from default browsing and reservation.
     * This endpoint is for dedicated/listen server processes and does not require
     * a user JWT. Lifecycle event: `server.heartbeat`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Server token and optional mutable server state.
     */
    static heartbeatServer(title_id, server_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatServer, data, { title_id, server_id });
    }
    /**
     * Reserve a short-lived slot on a multiplayer server before connecting.
     *
     * Reservations protect capacity during game handoff. The backend rejects stale,
     * private, full, draining, offline, expired, or duplicate open reservations.
     * The plain `reservation_token` is returned once and is used for session
     * heartbeat/release calls. Lifecycle event: `server.reserved`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Optional player/lobby identity and reservation TTL.
     */
    static reserveServer(title_id, server_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.reserveServer, data, { title_id, server_id });
    }
    /**
     * Heartbeat an open multiplayer session reservation.
     *
     * Use this after a successful reservation while the client is connecting or
     * playing. Expired sessions are marked expired and capacity is recovered before
     * the backend returns 409. Lifecycle events: `session.heartbeat` or
     * `session.expired`.
     *
     * @param data Reservation token and optional state/TTL.
     */
    static heartbeatSession(data) {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatSession, data);
    }
    /**
     * Release an open multiplayer session reservation.
     *
     * Call this on normal disconnect, failed connection attempts, or shutdown so
     * server capacity is decremented promptly. The backend makes release safe to
     * call more than once for an already closed reservation. Lifecycle event:
     * `session.released`.
     *
     * @param data Reservation token returned by `reserveServer`.
     */
    static releaseSession(data) {
        return Requests.processRoute(MultiplayerRoute.routes.releaseSession, data);
    }
    /**
     * Issue a short-lived multiplayer auth ticket for a player.
     *
     * The plain `auth_ticket` is returned once and only a hash is stored by the
     * backend. Use this for P2P or dedicated-server admission before game traffic
     * begins. `remote_identity` can bind the ticket to a server or validator.
     * Lifecycle event: `auth_ticket.issued`.
     *
     * @param title_id Title UUID.
     * @param data Player identity, optional remote identity, and TTL.
     */
    static issueAuthTicket(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.issueAuthTicket, data, { title_id });
    }
    /**
     * Validate a multiplayer auth ticket from a trusted title/user context.
     *
     * Pass `consume: true` for one-time tickets to prevent replay. Dedicated
     * servers should usually call `validateAuthTicketForServer` so they can use
     * `server_token` instead of a title token or user JWT. Lifecycle event:
     * `auth_ticket.validated`.
     *
     * @param title_id Title UUID.
     * @param data Ticket, optional remote identity check, and consume flag.
     */
    static validateAuthTicket(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.validateAuthTicket, data, { title_id });
    }
    /**
     * Validate an auth ticket as a dedicated server.
     *
     * This server-token endpoint lets a dedicated server admit players without
     * holding a user JWT or title token. Pass `consume: true` to prevent replay.
     * Lifecycle event: `auth_ticket.validated`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Server token, player auth ticket, optional remote identity, and consume flag.
     */
    static validateAuthTicketForServer(title_id, server_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.validateAuthTicketForServer, data, { title_id, server_id });
    }
    /**
     * List a player's server favorites or history entries.
     *
     * Use this for Steam-like favorites and recent servers tabs. Title-token
     * clients should pass `player_id`; user JWT clients default to the user UUID.
     *
     * @param title_id Title UUID.
     * @param params Optional player and favorite/history filter.
     */
    static listFavorites(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listFavorites, undefined, { title_id }, params);
    }
    /**
     * Add or update a favorite/history server entry for a player.
     *
     * Provide `server_id` for a registered Glitch server, or `host` plus
     * `game_port` for a direct/community server. Lifecycle event:
     * `favorite.upserted`.
     *
     * @param title_id Title UUID.
     * @param data Favorite/history target and optional metadata.
     */
    static addFavorite(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.addFavorite, data, { title_id });
    }
    /**
     * Delete a player's favorite/history server entry.
     *
     * The SDK sends optional `player_id` as a query parameter because the shared
     * request helper treats DELETE payloads as query params. This maps cleanly to
     * the backend's optional player identity validation for title-token clients.
     * Lifecycle event: `favorite.deleted`.
     *
     * @param title_id Title UUID.
     * @param favorite_id Favorite/history UUID.
     * @param params Optional player_id for title-token clients.
     */
    static deleteFavorite(title_id, favorite_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.deleteFavorite, undefined, { title_id, favorite_id }, params);
    }
    // -----------------------------------------------------------------------
    // MMO world layer
    // -----------------------------------------------------------------------
    /**
     * List realms (persistent world shards) so a player can choose where to log in.
     *
     * @param title_id Title UUID.
     * @param params Optional region/status filters; recommended realms sort first.
     * @example
     * Multiplayer.listRealms('title-uuid', { region: 'us-central', status: 'active' });
     */
    static listRealms(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listRealms, undefined, { title_id }, params);
    }
    /**
     * Create a realm. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param data Realm configuration.
     * @example
     * Multiplayer.createRealm('title-uuid', { name: 'Aurora', region: 'us-central', population_cap: 5000, recommended: true });
     */
    static createRealm(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.createRealm, data, { title_id });
    }
    /**
     * Retrieve a single realm.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     */
    static showRealm(title_id, realm_id) {
        return Requests.processRoute(MultiplayerRoute.routes.showRealm, undefined, { title_id, realm_id });
    }
    /**
     * Update a realm (status, population cap, ruleset). Requires a title admin JWT.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param data Fields to update.
     */
    static updateRealm(title_id, realm_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.updateRealm, data, { title_id, realm_id });
    }
    /**
     * List the zones defined for a realm.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param params Optional zone_type filter.
     */
    static listZones(title_id, realm_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listZones, undefined, { title_id, realm_id }, params);
    }
    /**
     * Create a zone in a realm. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param data Zone configuration, including interest-management grid cell size.
     * @example
     * Multiplayer.createZone('title-uuid', 'realm-uuid', {
     *   zone_key: 'ashfall_valley',
     *   display_name: 'Ashfall Valley',
     *   zone_type: 'overworld',
     *   max_players_per_instance: 100,
     *   grid_cell_size: 64
     * });
     */
    static createZone(title_id, realm_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.createZone, data, { title_id, realm_id });
    }
    /**
     * List the active/other instances (runtime copies) of a zone.
     *
     * @param title_id Title UUID.
     * @param zone_id Zone UUID.
     * @param params Optional state filter.
     */
    static listInstances(title_id, zone_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listInstances, undefined, { title_id, zone_id }, params);
    }
    /**
     * Retrieve a single instance.
     *
     * @param title_id Title UUID.
     * @param instance_id Instance UUID.
     */
    static showInstance(title_id, instance_id) {
        return Requests.processRoute(MultiplayerRoute.routes.showInstance, undefined, { title_id, instance_id });
    }
    /**
     * List players present in an instance. Pass grid_cell (and optional radius) to
     * receive only players in the caller's area of interest — the key to keeping
     * per-player fan-out bounded regardless of how populated the zone is.
     *
     * @param title_id Title UUID.
     * @param instance_id Instance UUID.
     * @param params grid_cell "cx:cy" and radius (0-4) to scope the query.
     * @example
     * Multiplayer.listInstancePresence('title-uuid', 'instance-uuid', { grid_cell: '12:8', radius: 1 });
     */
    static listInstancePresence(title_id, instance_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listInstancePresence, undefined, { title_id, instance_id }, params);
    }
    /**
     * Enter a zone. The backend places the player into an active instance with
     * capacity (creating a new layer if all are full), enforces bans and realm
     * capacity, and upserts presence. Returns the instance and presence so the
     * client can connect and subscribe to the instance's real-time group.
     *
     * @param title_id Title UUID.
     * @param data Realm/zone target plus optional spawn position and metadata.
     * @example
     * Multiplayer.enterZone('title-uuid', {
     *   player_id: 'steam:765...',
     *   realm_id: 'realm-uuid',
     *   zone_id: 'zone-uuid',
     *   pos_x: 128.0, pos_z: 64.0
     * });
     */
    static enterZone(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.enterZone, data, { title_id });
    }
    /**
     * Update presence (position, heading, rich status) and refresh the TTL. Call
     * on a movement interval and on notable state changes.
     *
     * @param title_id Title UUID.
     * @param data New position/status for the player.
     */
    static updatePresence(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.updatePresence, data, { title_id });
    }
    /**
     * Leave the world. Frees the player's instance slot and realm population.
     *
     * @param title_id Title UUID.
     * @param data Optional player_id for title-token clients.
     */
    static leaveWorld(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.leaveWorld, data, { title_id });
    }
    // -----------------------------------------------------------------------
    // Matchmaking
    // -----------------------------------------------------------------------
    /**
     * Enqueue a matchmaking ticket. Idempotent per (queue, player): an existing
     * open ticket is returned rather than duplicated, so retries are safe. Poll
     * the ticket or subscribe to `matchmaking.matched` for the assignment.
     *
     * @param title_id Title UUID.
     * @param data Queue name plus optional party, skill, region, and attributes.
     * @example
     * Multiplayer.enqueueTicket('title-uuid', { player_id: 'steam:765...', queue: 'ranked_2v2', skill: 1840, region: 'us-central' });
     */
    static enqueueTicket(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.enqueueTicket, data, { title_id });
    }
    /**
     * Poll a matchmaking ticket. A queued ticket past its TTL is reported as
     * `timed_out`; a matched ticket carries the connection `assignment`.
     *
     * @param title_id Title UUID.
     * @param ticket_id Ticket UUID.
     */
    static showTicket(title_id, ticket_id) {
        return Requests.processRoute(MultiplayerRoute.routes.showTicket, undefined, { title_id, ticket_id });
    }
    /**
     * Cancel a queued matchmaking ticket.
     *
     * @param title_id Title UUID.
     * @param ticket_id Ticket UUID.
     */
    static cancelTicket(title_id, ticket_id) {
        return Requests.processRoute(MultiplayerRoute.routes.cancelTicket, undefined, { title_id, ticket_id });
    }
    // -----------------------------------------------------------------------
    // Real-time negotiate + trust/moderation
    // -----------------------------------------------------------------------
    /**
     * Negotiate a real-time push connection. Returns the authorized group names
     * and the push endpoint. When SignalR/Web PubSub is configured, an
     * access_token scoped to those groups is included; otherwise `configured` is
     * false and the client should fall back to the polling endpoints.
     *
     * @param title_id Title UUID.
     * @param data Optional player_id and the scopes (lobby/voice/zone/instance) to subscribe to.
     * @example
     * Multiplayer.negotiateRealtime('title-uuid', { player_id: 'steam:765...', scopes: [{ type: 'instance', id: 'instance-uuid' }] });
     */
    static negotiateRealtime(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.negotiateRealtime, data, { title_id });
    }
    /**
     * List bans for a title. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param params Optional scope/player/source filters and active_only.
     */
    static listBans(title_id, params) {
        return Requests.processRoute(MultiplayerRoute.routes.listBans, undefined, { title_id }, params);
    }
    /**
     * Ban a player at a scope (title/realm/lobby/server/voice). Requires a title
     * administrator JWT. Omit expires_at for a permanent ban.
     *
     * @param title_id Title UUID.
     * @param data Ban target and scope.
     * @example
     * Multiplayer.createBan('title-uuid', { player_id: 'steam:765...', scope: 'title', reason: 'Cheating: aimbot' });
     */
    static createBan(title_id, data) {
        return Requests.processRoute(MultiplayerRoute.routes.createBan, data, { title_id });
    }
    /**
     * Lift a ban. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param ban_id Ban UUID.
     */
    static deleteBan(title_id, ban_id) {
        return Requests.processRoute(MultiplayerRoute.routes.deleteBan, undefined, { title_id, ban_id });
    }
}

class ServerOperationsRoute {
}
ServerOperationsRoute.routes = {
    listDeployments: {
        url: '/admin/server-operations/deployments',
        method: HTTP_METHODS.GET
    },
    updatePolicy: {
        url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/policy',
        method: HTTP_METHODS.PUT
    },
    updateContainerAppResources: {
        url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/container-app',
        method: HTTP_METHODS.PUT
    },
    updateCapacityModel: {
        url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/capacity-model',
        method: HTTP_METHODS.PUT
    },
    listRealms: {
        url: '/admin/server-operations/titles/{title_id}/realms',
        method: HTTP_METHODS.GET
    },
    createRealm: {
        url: '/admin/server-operations/titles/{title_id}/realms',
        method: HTTP_METHODS.POST
    },
    updateRealm: {
        url: '/admin/server-operations/titles/{title_id}/realms/{realm_id}',
        method: HTTP_METHODS.PUT
    },
    deleteRealm: {
        url: '/admin/server-operations/titles/{title_id}/realms/{realm_id}',
        method: HTTP_METHODS.DELETE
    },
};

class ServerOperations {
    static listDeployments(params) {
        return Requests.processRoute(ServerOperationsRoute.routes.listDeployments, undefined, undefined, params);
    }
    /**
     * Update the warm/spare/ceiling shape of a matchmaker managed instance pool.
     * Rejected for any build whose capacity model is not "pooled".
     */
    static updatePolicy(title_id, build_id, data) {
        return Requests.processRoute(ServerOperationsRoute.routes.updatePolicy, data, { title_id, build_id });
    }
    /**
     * Resize the Container App behind a build. Replica bounds are enforced
     * server side against the build's capacity model, so a singleton world
     * cannot be given a second replica. Pass acknowledge_outage when
     * deliberately setting min replicas to 0 on a singleton or replicated
     * deployment, which takes the game offline.
     */
    static updateContainerAppResources(title_id, build_id, data) {
        return Requests.processRoute(ServerOperationsRoute.routes.updateContainerAppResources, data, { title_id, build_id });
    }
    /**
     * Declare how many server processes a build may run at once: singleton,
     * replicated, pooled, serverless, or static. Re-clamps the stored replica
     * shape and is honored by the next deployment.
     */
    static updateCapacityModel(title_id, build_id, data) {
        return Requests.processRoute(ServerOperationsRoute.routes.updateCapacityModel, data, { title_id, build_id });
    }
    /**
     * Realms are how a singleton world scales: one process per realm, all
     * sharing a database. These are the site-admin views of the multiplayer
     * realm records.
     */
    static listRealms(title_id, params) {
        return Requests.processRoute(ServerOperationsRoute.routes.listRealms, undefined, { title_id }, params);
    }
    static createRealm(title_id, data) {
        return Requests.processRoute(ServerOperationsRoute.routes.createRealm, data, { title_id });
    }
    static updateRealm(title_id, realm_id, data) {
        return Requests.processRoute(ServerOperationsRoute.routes.updateRealm, data, { title_id, realm_id });
    }
    static deleteRealm(title_id, realm_id) {
        return Requests.processRoute(ServerOperationsRoute.routes.deleteRealm, undefined, { title_id, realm_id });
    }
}

class AgentsRoute {
}
AgentsRoute.routes = {
    listTitles: { url: "/agents/titles", method: HTTP_METHODS.GET },
    listCommunitySubscriptions: { url: "/agents/communities/{community_id}/subscriptions", method: HTTP_METHODS.GET },
    cancelCommunitySubscription: { url: "/agents/communities/{community_id}/subscriptions/{stripe_subscription_id}", method: HTTP_METHODS.DELETE },
    routeCatalog: { url: "/agents/routes/catalog", method: HTTP_METHODS.GET },
    workspace: { url: "/agents/titles/{title_id}/workspace", method: HTTP_METHODS.GET },
    listAgents: { url: "/agents/titles/{title_id}/agents", method: HTTP_METHODS.GET },
    createAgent: { url: "/agents/titles/{title_id}/agents", method: HTTP_METHODS.POST },
    viewAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.GET },
    updateAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.PUT },
    deleteAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.DELETE },
    runAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}/run", method: HTTP_METHODS.POST },
    streamAnswer: { url: "/agents/titles/{title_id}/agents/{agent_id}/stream-answer", method: HTTP_METHODS.POST },
    uploadAgentFiles: { url: "/agents/titles/{title_id}/agents/{agent_id}/files", method: HTTP_METHODS.POST },
    listGoogleDriveFiles: { url: "/agents/titles/{title_id}/gmail/drive/files", method: HTTP_METHODS.GET },
    attachGoogleDriveFile: { url: "/agents/titles/{title_id}/agents/{agent_id}/drive/files", method: HTTP_METHODS.POST },
    downloadAgentFile: { url: "/agents/titles/{title_id}/files/{file_id}/download", method: HTTP_METHODS.GET },
    exportAgentFileToGoogleDrive: { url: "/agents/titles/{title_id}/files/{file_id}/export/google-drive", method: HTTP_METHODS.POST },
    listRuns: { url: "/agents/titles/{title_id}/runs", method: HTTP_METHODS.GET },
    viewRun: { url: "/agents/titles/{title_id}/runs/{run_id}", method: HTTP_METHODS.GET },
    listRunEvents: { url: "/agents/titles/{title_id}/runs/{run_id}/events", method: HTTP_METHODS.GET },
    heartbeatRun: { url: "/agents/titles/{title_id}/runs/{run_id}/heartbeat", method: HTTP_METHODS.POST },
    cancelRun: { url: "/agents/titles/{title_id}/runs/{run_id}/cancel", method: HTTP_METHODS.POST },
    interjectRun: { url: "/agents/titles/{title_id}/runs/{run_id}/interject", method: HTTP_METHODS.POST },
    listActions: { url: "/agents/titles/{title_id}/actions", method: HTTP_METHODS.GET },
    approveAction: { url: "/agents/titles/{title_id}/actions/{action_id}/approve", method: HTTP_METHODS.POST },
    rejectAction: { url: "/agents/titles/{title_id}/actions/{action_id}/reject", method: HTTP_METHODS.POST },
    executeAction: { url: "/agents/titles/{title_id}/actions/{action_id}/execute", method: HTTP_METHODS.POST },
    listGuidance: { url: "/agents/titles/{title_id}/guidance", method: HTTP_METHODS.GET },
    answerGuidance: { url: "/agents/titles/{title_id}/guidance/{guidance_id}/answer", method: HTTP_METHODS.POST },
    rewriteAgentDraft: { url: "/agents/titles/{title_id}/drafts/rewrite", method: HTTP_METHODS.POST },
    listMemories: { url: "/agents/titles/{title_id}/memories", method: HTTP_METHODS.GET },
    updateMemory: { url: "/agents/titles/{title_id}/memories/{memory_id}", method: HTTP_METHODS.PATCH },
    deactivateMemory: { url: "/agents/titles/{title_id}/memories/{memory_id}", method: HTTP_METHODS.DELETE },
    results: { url: "/agents/titles/{title_id}/results", method: HTTP_METHODS.GET },
    usage: { url: "/agents/titles/{title_id}/usage", method: HTTP_METHODS.GET },
    credits: { url: "/agents/titles/{title_id}/credits", method: HTTP_METHODS.GET },
    purchaseCredits: { url: "/agents/titles/{title_id}/credits/purchase", method: HTTP_METHODS.POST },
    startTrial: { url: "/agents/titles/{title_id}/subscription/trial", method: HTTP_METHODS.POST },
    listSchedulers: { url: "/schedulers", method: HTTP_METHODS.GET },
    createScheduler: { url: "/schedulers", method: HTTP_METHODS.POST },
    agencyOverview: { url: "/agents/agency/overview", method: HTTP_METHODS.GET },
    agencyInbox: { url: "/agents/agency/inbox", method: HTTP_METHODS.GET },
};

class Agents {
    static fetchWithAuth(path, init, options = {}) {
        var _a;
        const url = Requests.buildUrl(path, options.params);
        const token = (_a = Config.getAuthToken) === null || _a === void 0 ? void 0 : _a.call(Config);
        const headers = Object.assign({}, (init.headers || {}));
        if (token && !headers.Authorization) {
            headers.Authorization = `Bearer ${token}`;
        }
        Object.assign(headers, options.headers || {});
        const fetcher = options.fetcher || (typeof globalThis !== "undefined" ? globalThis.fetch : undefined);
        if (!fetcher) {
            return Promise.reject(new Error("Fetch API is not available in this environment."));
        }
        return fetcher(url, Object.assign(Object.assign({}, init), { headers, signal: options.signal }));
    }
    /**
     * List game titles that can be managed in the Agents section.
     */
    static listTitles(params) {
        return Requests.processRoute(AgentsRoute.routes.listTitles, {}, {}, params);
    }
    /**
     * List title-agent subscriptions linked to titles in a community.
     */
    static listCommunitySubscriptions(community_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listCommunitySubscriptions, {}, { community_id }, params);
    }
    /**
     * Cancel a title-agent subscription linked to a community title.
     */
    static cancelCommunitySubscription(community_id, stripe_subscription_id, params) {
        return Requests.processRoute(AgentsRoute.routes.cancelCommunitySubscription, {}, { community_id, stripe_subscription_id }, params);
    }
    /**
     * Return the full Laravel API route catalog agents use for route-aware planning.
     */
    static routeCatalog(params) {
        return Requests.processRoute(AgentsRoute.routes.routeCatalog, {}, {}, params);
    }
    /**
     * Get a title-scoped agent workspace with setup, billing, counts, and route summary.
     */
    static workspace(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.workspace, {}, { title_id }, params);
    }
    /**
     * List agents for a title.
     */
    static listAgents(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listAgents, {}, { title_id }, params);
    }
    /**
     * Create an agent before payment. Runs/results remain gated until subscription or prepaid credits.
     */
    static createAgent(title_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.createAgent, data, { title_id }, params);
    }
    /**
     * View one agent.
     */
    static viewAgent(title_id, agent_id, params) {
        return Requests.processRoute(AgentsRoute.routes.viewAgent, {}, { title_id, agent_id }, params);
    }
    /**
     * Update an agent's setup, policies, and guidance stop rules.
     */
    static updateAgent(title_id, agent_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.updateAgent, data, { title_id, agent_id }, params);
    }
    /**
     * Archive an agent.
     */
    static deleteAgent(title_id, agent_id, params) {
        return Requests.processRoute(AgentsRoute.routes.deleteAgent, {}, { title_id, agent_id }, params);
    }
    /**
     * Run an agent planning cycle. Returns 402 when subscription or prepaid credits are required.
     */
    static runAgent(title_id, agent_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.runAgent, data, { title_id, agent_id }, params);
    }
    /**
     * Stream a quick advisory answer for the agent workspace.
     *
     * This returns the native Fetch API Response so callers can consume the
     * ReadableStream body incrementally. A 409 response means streaming is
     * disabled server-side and the caller should fall back to the normal run
     * flow.
     */
    static streamAnswer(title_id, agent_id, data, options = {}) {
        const body = typeof data === "string" ? { prompt: data } : data;
        const path = AgentsRoute.routes.streamAnswer.url
            .replace("{title_id}", title_id)
            .replace("{agent_id}", agent_id);
        return Agents.fetchWithAuth(path, {
            method: AgentsRoute.routes.streamAnswer.method,
            headers: {
                "Content-Type": "application/json",
                Accept: "text/event-stream",
            },
            body: JSON.stringify(body),
        }, options);
    }
    /**
     * Upload one file for an agent run. data can include { agent_run_id }.
     */
    static uploadAgentFile(title_id, agent_id, file, data, params, onUploadProgress) {
        const url = AgentsRoute.routes.uploadAgentFiles.url
            .replace("{title_id}", title_id)
            .replace("{agent_id}", agent_id);
        return Requests.uploadFile(url, "file", file, data, params, onUploadProgress);
    }
    /**
     * Alias for callers that use plural naming while uploading one file at a time.
     */
    static uploadAgentFiles(title_id, agent_id, file, data, params, onUploadProgress) {
        return Agents.uploadAgentFile(title_id, agent_id, file, data, params, onUploadProgress);
    }
    /**
     * List Google Drive files/folders available to attach to a title agent.
     */
    static listGoogleDriveFiles(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listGoogleDriveFiles, {}, { title_id }, params);
    }
    /**
     * Attach a Google Drive file as a reference file for an agent.
     */
    static attachGoogleDriveFile(title_id, agent_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.attachGoogleDriveFile, data || {}, { title_id, agent_id }, params);
    }
    /**
     * Download a protected agent file through the authenticated API route.
     *
     * Returns the native Fetch API Response so callers can inspect headers such
     * as Content-Disposition before creating a browser download or preview blob.
     */
    static downloadAgentFile(title_id, file_id, options = {}) {
        const path = AgentsRoute.routes.downloadAgentFile.url
            .replace("{title_id}", title_id)
            .replace("{file_id}", file_id);
        return Agents.fetchWithAuth(path, {
            method: AgentsRoute.routes.downloadAgentFile.method,
            headers: {
                Accept: "application/octet-stream",
            },
        }, options);
    }
    /**
     * Export a generated agent artifact to Google Drive.
     */
    static exportAgentFileToGoogleDrive(title_id, file_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.exportAgentFileToGoogleDrive, data || {}, { title_id, file_id }, params);
    }
    /**
     * List agent runs for a title.
     */
    static listRuns(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listRuns, {}, { title_id }, params);
    }
    /**
     * View one durable agent run, including events, files, actions, and guidance when loaded by the API.
     */
    static viewRun(title_id, run_id, params) {
        return Requests.processRoute(AgentsRoute.routes.viewRun, {}, { title_id, run_id }, params);
    }
    /**
     * List real-time user-visible events for an agent run.
     */
    static listRunEvents(title_id, run_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listRunEvents, {}, { title_id, run_id }, params);
    }
    /**
     * Mark a queued or running agent run as being watched live so the UI can stream the loop
     * and the backend can avoid sending delayed background summaries to active viewers.
     */
    static heartbeatRun(title_id, run_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.heartbeatRun, data || {}, { title_id, run_id }, params);
    }
    /**
     * Request cancellation for a queued or running agent run.
     */
    static cancelRun(title_id, run_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.cancelRun, data || {}, { title_id, run_id }, params);
    }
    /**
     * Send a course correction to a queued or running agent run.
     */
    static interjectRun(title_id, run_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.interjectRun, data || {}, { title_id, run_id }, params);
    }
    /**
     * List agent actions/approval queue for a title.
     */
    static listActions(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listActions, {}, { title_id }, params);
    }
    /**
     * Approve an agent action.
     */
    static approveAction(title_id, action_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.approveAction, data || {}, { title_id, action_id }, params);
    }
    /**
     * Reject an agent action.
     */
    static rejectAction(title_id, action_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.rejectAction, data || {}, { title_id, action_id }, params);
    }
    /**
     * Execute an approved safe action.
     */
    static executeAction(title_id, action_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.executeAction, data || {}, { title_id, action_id }, params);
    }
    /**
     * List guidance requests where agents have stopped for developer direction.
     */
    static listGuidance(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listGuidance, {}, { title_id }, params);
    }
    /**
     * Answer a guidance request and write structured agent memory.
     */
    static answerGuidance(title_id, guidance_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.answerGuidance, data, { title_id, guidance_id }, params);
    }
    /**
     * Rewrite an editable agent draft for review without executing the parent action.
     */
    static rewriteAgentDraft(title_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.rewriteAgentDraft, data, { title_id }, params);
    }
    /**
     * Agent workflow convenience wrapper for creator invite context.
     */
    static creatorInviteContext(campaign_id, params) {
        return Campaigns.creatorInviteContext(campaign_id, params);
    }
    /**
     * Agent workflow convenience wrapper for sending a reviewed creator invite.
     */
    static sendCreatorInvite(campaign_id, data, params) {
        return Campaigns.sendCreatorInvite(campaign_id, data || {}, params);
    }
    /**
     * Agent workflow convenience wrapper for updating a drafted social post.
     */
    static updateSocialPost(post_id, data, params) {
        return SocialPosts.update(post_id, data || {}, params);
    }
    /**
     * Agent workflow convenience wrapper for updating campaign settings.
     */
    static updateCampaign(campaign_id, data, params) {
        return Campaigns.update(campaign_id, data || {}, params);
    }
    /**
     * Agent workflow convenience wrapper for saving manual access keys.
     */
    static createAccessKeys(title_id, data, params) {
        return AccessKeys.store(title_id, data, params);
    }
    /**
     * List structured agent memories for a title.
     */
    static listMemories(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.listMemories, {}, { title_id }, params);
    }
    /**
     * Update one structured agent memory.
     */
    static updateMemory(title_id, memory_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.updateMemory, data || {}, { title_id, memory_id }, params);
    }
    /**
     * Deactivate one structured agent memory.
     */
    static deactivateMemory(title_id, memory_id, params) {
        return Requests.processRoute(AgentsRoute.routes.deactivateMemory, {}, { title_id, memory_id }, params);
    }
    /**
     * Get results and outcome summary for title agents. Returns 402 until subscription or prepaid credits are active.
     */
    static results(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.results, {}, { title_id }, params);
    }
    /**
     * Get this title's agent usage against plan limits (agents used/included, monthly runs, and
     * AI dollars spent vs the configured monthly AI budget). Powers usage meters and limit warnings.
     */
    static usage(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.usage, {}, { title_id }, params);
    }
    /**
     * Get the prepaid agent credit balance and ledger (Pay-As-You-Go plan).
     */
    static credits(title_id, params) {
        return Requests.processRoute(AgentsRoute.routes.credits, {}, { title_id }, params);
    }
    /**
     * Buy prepaid agent credits (Pay-As-You-Go). Charges the card up front; the agent draws down
     * credits per run and stops when they run out. data: { paymentMethod, amount_usd }.
     */
    static purchaseCredits(title_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.purchaseCredits, data, { title_id }, params);
    }
    /**
     * Start a Stripe-backed agent subscription after setup.
     */
    static startTrial(title_id, data, params) {
        return Requests.processRoute(AgentsRoute.routes.startTrial, data, { title_id }, params);
    }
    /**
     * List social/ad schedulers. Useful when agent setup needs to attach to an existing workflow.
     */
    static listSchedulers(params) {
        return Requests.processRoute(AgentsRoute.routes.listSchedulers, {}, {}, params);
    }
    /**
     * Create a scheduler inline from an agent setup flow.
     */
    static createScheduler(data, params) {
        return Requests.processRoute(AgentsRoute.routes.createScheduler, data || {}, {}, params);
    }
    /**
     * Cross-title agency cockpit: per-title agent status, billing/credits, and portfolio totals.
     */
    static agencyOverview(params) {
        return Requests.processRoute(AgentsRoute.routes.agencyOverview, {}, {}, params);
    }
    /**
     * Unified cross-title "needs you" inbox (open guidance + pending approvals across all titles).
     */
    static agencyInbox(params) {
        return Requests.processRoute(AgentsRoute.routes.agencyInbox, {}, {}, params);
    }
}

/**
 * Glitch MCP paid facade (/mcp/v1).
 *
 * Mirrors the routes served by McpAgentController. These endpoints authenticate
 * with either a Glitch user JWT or a title-scoped MCP token and keep all planner,
 * billing, and executor logic server-side. The public @glitch/mcp adapter calls
 * the same endpoints; this SDK surface lets first-party TypeScript clients reuse them.
 */
class McpRoute {
}
McpRoute.routes = {
    authStatus: { url: "/mcp/v1/auth/status", method: HTTP_METHODS.GET },
    listTitles: { url: "/mcp/v1/titles", method: HTTP_METHODS.GET },
    titleContext: { url: "/mcp/v1/titles/{title_id}/context", method: HTTP_METHODS.GET },
    billing: { url: "/mcp/v1/titles/{title_id}/billing", method: HTTP_METHODS.GET },
    startRun: { url: "/mcp/v1/titles/{title_id}/runs", method: HTTP_METHODS.POST },
    viewRun: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}", method: HTTP_METHODS.GET },
    runEvents: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/events", method: HTTP_METHODS.GET },
    streamRun: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/stream", method: HTTP_METHODS.GET },
    finalReport: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/report", method: HTTP_METHODS.GET },
    artifacts: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/artifacts", method: HTTP_METHODS.GET },
    listActions: { url: "/mcp/v1/titles/{title_id}/actions", method: HTTP_METHODS.GET },
    approveAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/approve", method: HTTP_METHODS.POST },
    rejectAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/reject", method: HTTP_METHODS.POST },
    executeAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/execute", method: HTTP_METHODS.POST },
    listGuidance: { url: "/mcp/v1/titles/{title_id}/guidance", method: HTTP_METHODS.GET },
    answerGuidance: { url: "/mcp/v1/titles/{title_id}/guidance/{guidance_id}/answer", method: HTTP_METHODS.POST },
    createUpload: { url: "/mcp/v1/titles/{title_id}/uploads", method: HTTP_METHODS.POST },
    uploadFile: { url: "/mcp/v1/titles/{title_id}/files", method: HTTP_METHODS.POST },
    listTokens: { url: "/mcp/v1/titles/{title_id}/tokens", method: HTTP_METHODS.GET },
    createToken: { url: "/mcp/v1/titles/{title_id}/tokens", method: HTTP_METHODS.POST },
    revokeToken: { url: "/mcp/v1/titles/{title_id}/tokens/{token_id}", method: HTTP_METHODS.DELETE },
};

/**
 * Client for the Glitch MCP paid facade (/mcp/v1).
 *
 * Authenticate with a Glitch user JWT or a title-scoped MCP token. The facade
 * enforces subscription, title permissions, scope, and approval guardrails on
 * every call; this client only forwards requests.
 */
class Mcp {
    /** Health/auth probe. Returns authenticated=false (200) when no credential is set. */
    static authStatus(params) {
        return Requests.processRoute(McpRoute.routes.authStatus, {}, {}, params);
    }
    /** List titles visible to the current user token or title-scoped MCP token. */
    static listTitles(params) {
        return Requests.processRoute(McpRoute.routes.listTitles, {}, {}, params);
    }
    /** Fetch safe, subscription-gated workspace context for a title. */
    static titleContext(title_id, params) {
        return Requests.processRoute(McpRoute.routes.titleContext, {}, { title_id }, params);
    }
    /** Check subscription, trial, plan, and credit state for a title. */
    static billing(title_id, params) {
        return Requests.processRoute(McpRoute.routes.billing, {}, { title_id }, params);
    }
    /** Start a paid Glitch Agent run for a title. */
    static startRun(title_id, data, params) {
        return Requests.processRoute(McpRoute.routes.startRun, data !== null && data !== void 0 ? data : {}, { title_id }, params);
    }
    /** Fetch a durable run with status, actions, guidance, events, files, and report. */
    static viewRun(title_id, run_id, params) {
        return Requests.processRoute(McpRoute.routes.viewRun, {}, { title_id, run_id }, params);
    }
    /** List user-visible timeline events for a run. */
    static runEvents(title_id, run_id, params) {
        return Requests.processRoute(McpRoute.routes.runEvents, {}, { title_id, run_id }, params);
    }
    /** Fetch the human-friendly final or partial report for a run. */
    static finalReport(title_id, run_id, params) {
        return Requests.processRoute(McpRoute.routes.finalReport, {}, { title_id, run_id }, params);
    }
    /**
     * Server-Sent Events URL for a run's live event stream.
     *
     * Returns the absolute URL to open with an EventSource/fetch reader; the
     * endpoint emits `status`, `run_event`, and a terminal `settled`/`timeout` event.
     */
    static runStreamUrl(title_id, run_id, params) {
        const url = McpRoute.routes.streamRun.url
            .replace("{title_id}", encodeURIComponent(title_id))
            .replace("{run_id}", encodeURIComponent(run_id));
        return Requests.buildUrl(url, params);
    }
    /** List downloadable files and hosted report artifacts for a run. */
    static artifacts(title_id, run_id, params) {
        return Requests.processRoute(McpRoute.routes.artifacts, {}, { title_id, run_id }, params);
    }
    /** List proposed/guidance/approval/executed actions for a title. */
    static listActions(title_id, params) {
        return Requests.processRoute(McpRoute.routes.listActions, {}, { title_id }, params);
    }
    /** Approve a reviewable action. Execution remains guarded server-side. */
    static approveAction(title_id, action_id, data, params) {
        return Requests.processRoute(McpRoute.routes.approveAction, data !== null && data !== void 0 ? data : {}, { title_id, action_id }, params);
    }
    /** Reject a proposed or approval-needed action. */
    static rejectAction(title_id, action_id, data, params) {
        return Requests.processRoute(McpRoute.routes.rejectAction, data !== null && data !== void 0 ? data : {}, { title_id, action_id }, params);
    }
    /** Execute an approved action. Public/paid/creator-facing work stays guarded. */
    static executeAction(title_id, action_id, data, params) {
        return Requests.processRoute(McpRoute.routes.executeAction, data !== null && data !== void 0 ? data : {}, { title_id, action_id }, params);
    }
    /** List open or answered guidance requests for a title or run. */
    static listGuidance(title_id, params) {
        return Requests.processRoute(McpRoute.routes.listGuidance, {}, { title_id }, params);
    }
    /** Answer a guidance request and resume the server-side workflow when possible. */
    static answerGuidance(title_id, guidance_id, data, params) {
        return Requests.processRoute(McpRoute.routes.answerGuidance, data !== null && data !== void 0 ? data : {}, { title_id, guidance_id }, params);
    }
    /** Get instructions for uploading a file (points at uploadFile below). */
    static createUpload(title_id, data, params) {
        return Requests.processRoute(McpRoute.routes.createUpload, data !== null && data !== void 0 ? data : {}, { title_id }, params);
    }
    /**
     * Upload a file (image, video, or document) to a title or run as multipart/form-data.
     * The facade re-checks the title scope, subscription, and allowed mime types.
     */
    static uploadFile(title_id, file, data, params, onUploadProgress) {
        const url = McpRoute.routes.uploadFile.url.replace("{title_id}", title_id);
        return Requests.uploadFile(url, "file", file, data, params, onUploadProgress);
    }
    /** List MCP title tokens (user JWT only). */
    static listTokens(title_id, params) {
        return Requests.processRoute(McpRoute.routes.listTokens, {}, { title_id }, params);
    }
    /** Create a revocable title-scoped MCP token (user JWT only). */
    static createToken(title_id, data, params) {
        return Requests.processRoute(McpRoute.routes.createToken, data !== null && data !== void 0 ? data : {}, { title_id }, params);
    }
    /** Revoke a title-scoped MCP token (user JWT only). */
    static revokeToken(title_id, token_id, params) {
        return Requests.processRoute(McpRoute.routes.revokeToken, {}, { title_id, token_id }, params);
    }
}

/**
 * Route declarations for the PR Directory API.
 *
 * These mirror the Laravel routes under `/api/pr/*` and the title-scoped
 * matcher/research routes under `/api/titles/{title_id}/pr/*`. Keeping the URL
 * templates in one place lets the SDK methods stay small and consistent with
 * the rest of the package's route-wrapper pattern.
 */
class PrDirectoryRoutes {
}
PrDirectoryRoutes.routes = {
    listPublications: { url: "/pr/publications", method: HTTP_METHODS.GET },
    viewPublication: { url: "/pr/publications/{publication_id}", method: HTTP_METHODS.GET },
    listPeople: { url: "/pr/people", method: HTTP_METHODS.GET },
    viewPerson: { url: "/pr/people/{person_id}", method: HTTP_METHODS.GET },
    listFeeds: { url: "/pr/feeds", method: HTTP_METHODS.GET },
    viewFeed: { url: "/pr/feeds/{feed_id}", method: HTTP_METHODS.GET },
    listStories: { url: "/pr/stories", method: HTTP_METHODS.GET },
    viewStory: { url: "/pr/stories/{story_id}", method: HTTP_METHODS.GET },
    listTags: { url: "/pr/tags", method: HTTP_METHODS.GET },
    report: { url: "/pr/report", method: HTTP_METHODS.GET },
    titleMatches: { url: "/titles/{title_id}/pr/matches", method: HTTP_METHODS.GET },
    titleResearch: { url: "/titles/{title_id}/pr/research", method: HTTP_METHODS.GET },
    titleDraft: { url: "/titles/{title_id}/pr/drafts", method: HTTP_METHODS.POST },
    queueVerification: { url: "/admin/pr/verification/queue", method: HTTP_METHODS.POST },
    refreshFeeds: { url: "/admin/pr/feeds/refresh", method: HTTP_METHODS.POST },
};

/**
 * SDK wrapper for the PR Directory API.
 *
 * The PR directory is read-friendly by default: public endpoints expose
 * searchable publications, people, feeds, stories, tags, and reporting metrics.
 * Authenticated title admins can request title-specific research and review-only
 * outreach drafts, and site admins can queue verification or feed refresh jobs.
 */
class PrDirectory {
    /**
     * Search gaming-focused PR publications, independent blogs, and podcasts.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.listPublications({
     *   q: "indie RPG",
     *   has_email: true,
     *   eligibility_status: "eligible",
     *   sort: "-last_verified_at",
     * });
     * ```
     */
    static listPublications(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.listPublications, {}, {}, params);
    }
    /**
     * Retrieve one PR publication profile with loaded people, contact points,
     * evidence links, and tags.
     */
    static viewPublication(publication_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.viewPublication, {}, { publication_id }, params);
    }
    /**
     * Search PR people and roles across all known publications.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.listPeople({
     *   q: "reviews editor",
     *   has_email: true,
     *   role_category: "editor",
     * });
     * ```
     */
    static listPeople(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.listPeople, {}, {}, params);
    }
    /**
     * Retrieve one PR person profile with their outlet roles, profile links,
     * contact points, and metadata tags.
     */
    static viewPerson(person_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.viewPerson, {}, { person_id }, params);
    }
    /**
     * Search discovered RSS/Atom/JSON feeds across known publications.
     */
    static listFeeds(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.listFeeds, {}, {}, params);
    }
    /**
     * Retrieve one feed with freshness metadata and recent imported stories.
     * Pass `include_raw: true` to request the stored XML/RSS payload.
     */
    static viewFeed(feed_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.viewFeed, {}, { feed_id }, params);
    }
    /**
     * Search imported stories, reviews, guides, and episodes by outlet or byline.
     */
    static listStories(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.listStories, {}, {}, params);
    }
    /**
     * Retrieve one imported story with feed, publication, and byline evidence.
     */
    static viewStory(story_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.viewStory, {}, { story_id }, params);
    }
    /**
     * List the normalized tag vocabulary used for PR search, filters, matching,
     * and reporting.
     */
    static listTags(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.listTags, {}, {}, params);
    }
    /**
     * Get aggregate PR directory reporting metrics. Publication filters can be
     * supplied to scope the outlet portion of the report.
     */
    static report(params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.report, {}, {}, params);
    }
    /**
     * Match a registered game title to PR outlets. Requires an auth token for a
     * user who can administer the requested title.
     */
    static titleMatches(title_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.titleMatches, {}, { title_id }, params);
    }
    /**
     * Get a title-scoped PR research workspace with outlet matches, recent story
     * context, media kit readiness, and next steps.
     */
    static titleResearch(title_id, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.titleResearch, {}, { title_id }, params);
    }
    /**
     * Create a formatted, review-only PR email draft for a selected title target.
     * The backend returns HTML with paragraphs, bullets, and links but sends no email.
     */
    static titleDraft(title_id, data, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.titleDraft, data || {}, { title_id }, params);
    }
    /**
     * Queue PR verification jobs. Requires a site-admin auth token.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.queueVerification({ due: true, limit: 250 });
     * ```
     */
    static queueVerification(data, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.queueVerification, data || {}, {}, params);
    }
    /**
     * Discover, queue, or synchronously refresh PR feeds. Requires a site-admin
     * auth token.
     */
    static refreshFeeds(data, params) {
        return Requests.processRoute(PrDirectoryRoutes.routes.refreshFeeds, data || {}, {}, params);
    }
}

class AdminReportsRoute {
}
AdminReportsRoute.routes = {
    usersRevenue: {
        url: '/admin/reports/users-revenue',
        method: HTTP_METHODS.GET
    },
    steam: {
        url: '/admin/reports/steam',
        method: HTTP_METHODS.GET
    },
};

class AdminReports {
    /**
     * Returns aggregate site-admin reporting for user growth, churn, acquisition,
     * engagement, and user-generated revenue.
     */
    static usersRevenue(params) {
        return Requests.processRoute(AdminReportsRoute.routes.usersRevenue, undefined, undefined, params);
    }
    /**
     * Returns site-admin Steam market reports, including social profile coverage,
     * platform usage, follower benchmarks, review/player relationships, and
     * optional target-app game reports.
     */
    static steam(params) {
        return Requests.processRoute(AdminReportsRoute.routes.steam, undefined, undefined, params);
    }
}

class AdminUsersRoute {
}
AdminUsersRoute.routes = {
    // List and search every user in the system (site admin only).
    list: {
        url: '/admin/users',
        method: HTTP_METHODS.GET
    },
    // Aggregated user analytics for charts on the admin directory.
    analytics: {
        url: '/admin/users/analytics',
        method: HTTP_METHODS.GET
    },
    // Full profile for a single user (site admin only).
    view: {
        url: '/admin/users/{user_id}',
        method: HTTP_METHODS.GET
    },
    // Securely impersonate a user (super admin only, audited).
    impersonate: {
        url: '/admin/users/impersonate',
        method: HTTP_METHODS.POST
    },
};

/**
 * Site-administrator user management.
 *
 * These endpoints back the admin dashboard user directory. They require a
 * site-admin auth token (Super Administrator or Administrator), and
 * impersonation additionally requires a Super Administrator token.
 */
class AdminUsers {
    /**
     * List and search all users in the system.
     *
     * Supported params include `search` (matches name, username, email, or id),
     * `is_site_admin`, `is_verified`, `sort_by`, `sort_order`, `per_page`, and
     * `page`.
     *
     * @param params Optional query parameters.
     * @returns promise
     */
    static list(params) {
        return Requests.processRoute(AdminUsersRoute.routes.list, undefined, undefined, params);
    }
    /**
     * Retrieve aggregated user analytics for the admin directory.
     *
     * Supported params include `search`, `is_site_admin`, `is_verified`,
     * `user_type`, `start_date`, `end_date`, `period`, `sort_by`, and
     * `sort_order`.
     *
     * @param params Optional query parameters.
     * @returns promise
     */
    static analytics(params) {
        return Requests.processRoute(AdminUsersRoute.routes.analytics, undefined, undefined, params);
    }
    /**
     * Retrieve a comprehensive profile for a single user, including communities,
     * administered titles, games played, roles, billing status, social presence,
     * and activity counts.
     *
     * @param user_id The id of the user to view.
     * @param params Optional query parameters.
     * @returns promise
     */
    static view(user_id, params) {
        return Requests.processRoute(AdminUsersRoute.routes.view, undefined, { user_id: user_id }, params);
    }
    /**
     * Impersonate a user. Issues a JWT for the target account so a Super
     * Administrator can operate as that user. Administrator accounts cannot be
     * impersonated, and every call is written to the impersonation audit log.
     *
     * @param user_id The id of the user to impersonate.
     * @returns promise resolving to an access token and the impersonated user summary.
     */
    static impersonate(user_id) {
        return Requests.processRoute(AdminUsersRoute.routes.impersonate, { user_id: user_id });
    }
}

class MarketResearchRoute {
}
MarketResearchRoute.routes = {
    access: { url: '/market-research/access', method: HTTP_METHODS.GET },
    filterOptions: { url: '/market-research/filter-options', method: HTTP_METHODS.GET },
    listGames: { url: '/market-research/games', method: HTTP_METHODS.GET },
    viewGame: { url: '/market-research/games/{game_id}', method: HTTP_METHODS.GET },
    exportGames: { url: '/market-research/games/export', method: HTTP_METHODS.GET },
    exportGame: { url: '/market-research/games/{game_id}/export', method: HTTP_METHODS.GET },
};

class MarketResearch {
    static access(params) {
        return Requests.processRoute(MarketResearchRoute.routes.access, undefined, undefined, params);
    }
    static filterOptions(params) {
        return Requests.processRoute(MarketResearchRoute.routes.filterOptions, undefined, undefined, params);
    }
    static listGames(params) {
        return Requests.processRoute(MarketResearchRoute.routes.listGames, undefined, undefined, params);
    }
    static viewGame(game_id, params) {
        return Requests.processRoute(MarketResearchRoute.routes.viewGame, undefined, { game_id }, params);
    }
    static exportGames(params) {
        return Requests.download(MarketResearchRoute.routes.exportGames.url, params);
    }
    static exportGame(game_id, params) {
        const url = MarketResearchRoute.routes.exportGame.url.replace('{game_id}', game_id);
        return Requests.download(url, params);
    }
}

class GameAdvertisingRoute {
}
/**
 * Route templates for publisher game-ad inventory, telemetry, earnings, and
 * site administration. Placeholders are expanded by Requests.processRoute.
 */
GameAdvertisingRoute.routes = {
    settings: { url: '/titles/{title_id}/advertising/settings', method: HTTP_METHODS.GET },
    updateSettings: { url: '/titles/{title_id}/advertising/settings', method: HTTP_METHODS.PUT },
    createSession: { url: '/titles/{title_id}/advertising/sessions', method: HTTP_METHODS.POST },
    storeEvent: { url: '/titles/{title_id}/advertising/sessions/{session_id}/events', method: HTTP_METHODS.POST },
    revenueSummary: { url: '/titles/{title_id}/advertising/revenue-summary', method: HTTP_METHODS.GET },
    inGamePlacements: { url: '/titles/{title_id}/advertising/in-game/placements', method: HTTP_METHODS.GET },
    replaceInGamePlacements: { url: '/titles/{title_id}/advertising/in-game/placements', method: HTTP_METHODS.PUT },
    adminDashboard: { url: '/admin/game-advertising', method: HTTP_METHODS.GET },
    adminUpdateSettings: { url: '/admin/game-advertising/settings', method: HTTP_METHODS.PUT },
    adminStoreRevenue: { url: '/admin/game-advertising/revenue', method: HTTP_METHODS.POST },
    adminProviderApps: { url: '/admin/game-advertising/provider-apps', method: HTTP_METHODS.GET },
    adminUpsertProviderApp: { url: '/admin/game-advertising/provider-apps', method: HTTP_METHODS.PUT },
};

/**
 * Typed client for platform-served game advertising.
 *
 * These endpoints manage publisher inventory displayed around playable games;
 * they are intentionally separate from APIs used to buy advertising campaigns.
 */
class GameAdvertising {
    /** Return developer-visible ad-earnings settings for a title. */
    static settings(title_id) {
        return Requests.processRoute(GameAdvertisingRoute.routes.settings, undefined, { title_id });
    }
    /** Update developer ad-earnings activation and optional title provider ID. */
    static updateSettings(title_id, data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.updateSettings, data, { title_id });
    }
    /** Resolve ad eligibility and create an expiring provider manifest/session. */
    static createSession(title_id, data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.createSession, data, { title_id });
    }
    /** Store one normalized, idempotent event for an advertising session. */
    static storeEvent(title_id, session_id, data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.storeEvent, data, { title_id, session_id });
    }
    /** Return developer-visible estimated/finalized earnings and delivery totals. */
    static revenueSummary(title_id, params) {
        return Requests.processRoute(GameAdvertisingRoute.routes.revenueSummary, undefined, { title_id }, params);
    }
    /** Return every intrinsic-ad surface configured for a title. */
    static inGamePlacements(title_id) {
        return Requests.processRoute(GameAdvertisingRoute.routes.inGamePlacements, undefined, { title_id });
    }
    /** Atomically replace a title's provider-neutral intrinsic-ad surfaces. */
    static replaceInGamePlacements(title_id, placements) {
        return Requests.processRoute(GameAdvertisingRoute.routes.replaceInGamePlacements, { placements }, { title_id });
    }
    /** Return site-admin delivery settings, aggregate metrics, and recent revenue. */
    static adminDashboard() {
        return Requests.processRoute(GameAdvertisingRoute.routes.adminDashboard);
    }
    /** Partially update platform-wide providers and delivery frequency. */
    static adminUpdateSettings(data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.adminUpdateSettings, data);
    }
    /** Import or reconcile one provider revenue report row. */
    static adminStoreRevenue(data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.adminStoreRevenue, data);
    }
    /** Return public provider app keys and platform mappings for site admins. */
    static adminProviderApps() {
        return Requests.processRoute(GameAdvertisingRoute.routes.adminProviderApps);
    }
    /** Create or update a provider app mapping without accepting report secrets. */
    static adminUpsertProviderApp(data) {
        return Requests.processRoute(GameAdvertisingRoute.routes.adminUpsertProviderApp, data);
    }
}

/** Route catalog for game website hosting and its direct or Marketplace billing. */
class HostingRoute {
}
HostingRoute.routes = {
    catalog: { url: '/hosting/catalog', method: HTTP_METHODS.GET },
    dashboard: { url: '/titles/{title_id}/hosting', method: HTTP_METHODS.GET },
    channelAnalytics: { url: '/titles/{title_id}/hosting/analytics/channels', method: HTTP_METHODS.GET },
    billingCheckout: { url: '/titles/{title_id}/hosting/billing/checkout', method: HTTP_METHODS.POST },
    confirmBillingCheckout: { url: '/titles/{title_id}/hosting/billing/confirm', method: HTTP_METHODS.POST },
    resolveMarketplacePurchase: { url: '/hosting/marketplace/resolve', method: HTTP_METHODS.POST },
    activateMarketplaceSubscription: { url: '/hosting/marketplace/subscriptions/{subscription_id}/activate', method: HTTP_METHODS.POST },
    marketplaceSubscription: { url: '/hosting/marketplace/subscriptions/{subscription_id}', method: HTTP_METHODS.GET },
    resolveAwsMarketplacePurchase: { url: '/hosting/aws-marketplace/resolve', method: HTTP_METHODS.POST },
    activateAwsMarketplaceSubscription: { url: '/hosting/aws-marketplace/subscriptions/{subscription_id}/activate', method: HTTP_METHODS.POST },
    awsMarketplaceSubscription: { url: '/hosting/aws-marketplace/subscriptions/{subscription_id}', method: HTTP_METHODS.GET },
    createSite: { url: '/titles/{title_id}/hosting/sites', method: HTTP_METHODS.POST },
    updateSite: { url: '/titles/{title_id}/hosting/sites/{site_id}', method: HTTP_METHODS.PUT },
    uploadUrl: { url: '/titles/{title_id}/hosting/sites/{site_id}/upload-url', method: HTTP_METHODS.POST },
    releases: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases', method: HTTP_METHODS.GET },
    createRelease: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases', method: HTTP_METHODS.POST },
    promoteRelease: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases/{release_id}/promote', method: HTTP_METHODS.POST },
    connectDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains', method: HTTP_METHODS.POST },
    verifyDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains/{domain_id}/verify', method: HTTP_METHODS.POST },
    checkDomain: { url: '/hosting/domains/check', method: HTTP_METHODS.POST },
    purchaseDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains/purchase', method: HTTP_METHODS.POST },
    aiInstructions: { url: '/titles/{title_id}/hosting/sites/{site_id}/ai-instructions', method: HTTP_METHODS.POST },
    services: { url: '/titles/{title_id}/hosting/sites/{site_id}/services', method: HTTP_METHODS.GET },
    estimateServices: { url: '/titles/{title_id}/hosting/sites/{site_id}/services/estimate', method: HTTP_METHODS.POST },
    applyServices: { url: '/titles/{title_id}/hosting/sites/{site_id}/services/apply', method: HTTP_METHODS.POST },
    putServiceSecret: { url: '/titles/{title_id}/hosting/sites/{site_id}/services/{service_id}/secrets/{name}', method: HTTP_METHODS.PUT },
    deleteServiceSecret: { url: '/titles/{title_id}/hosting/sites/{site_id}/services/{service_id}/secrets/{name}', method: HTTP_METHODS.DELETE },
    resolve: { url: '/hosting/resolve', method: HTTP_METHODS.GET },
    startPlaySession: { url: '/hosting/play-sessions', method: HTTP_METHODS.POST },
    heartbeatPlaySession: { url: '/hosting/play-sessions/{session_id}/heartbeat', method: HTTP_METHODS.POST },
    databases: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases', method: HTTP_METHODS.GET },
    createDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases', method: HTTP_METHODS.POST },
    database: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.GET },
    databaseCredentials: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}/credentials', method: HTTP_METHODS.POST },
    updateDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.PUT },
    retryDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}/retry', method: HTTP_METHODS.POST },
    deleteDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.DELETE },
};

/**
 * Typed SDK for game website hosting, Azure database add-ons, domains, usage,
 * deployment instructions, and hosted-play attribution.
 */
class Hosting {
    static catalog() {
        return Requests.processRoute(HostingRoute.routes.catalog);
    }
    static dashboard(title_id) {
        return Requests.processRoute(HostingRoute.routes.dashboard, undefined, { title_id });
    }
    static channelAnalytics(title_id, params) {
        return Requests.processRoute(HostingRoute.routes.channelAnalytics, undefined, { title_id }, params);
    }
    /** Start or apply a bandwidth-based Hosting plan, separate from Store distribution. */
    static billingCheckout(title_id, plan) {
        return Requests.processRoute(HostingRoute.routes.billingCheckout, { plan }, { title_id });
    }
    /** Confirm a paid Stripe Checkout session before provisioning its Azure resource. */
    static confirmBillingCheckout(title_id, checkout_session_id) {
        return Requests.processRoute(HostingRoute.routes.confirmBillingCheckout, { checkout_session_id }, { title_id });
    }
    /** Resolve the one-hour purchase token passed to Glitch by Microsoft Marketplace. */
    static resolveMarketplacePurchase(token) {
        return Requests.processRoute(HostingRoute.routes.resolveMarketplacePurchase, { token });
    }
    /** Link a resolved Microsoft Marketplace subscription to a billable Glitch business account. */
    static activateMarketplaceSubscription(subscription_id, community_id) {
        return Requests.processRoute(HostingRoute.routes.activateMarketplaceSubscription, { community_id }, { subscription_id });
    }
    /** Retrieve safe Microsoft Marketplace entitlement and lifecycle status. */
    static marketplaceSubscription(subscription_id) {
        return Requests.processRoute(HostingRoute.routes.marketplaceSubscription, undefined, { subscription_id });
    }
    /** Claim the one-time Glitch code created after AWS ResolveCustomer succeeds. */
    static resolveAwsMarketplacePurchase(activation_code) {
        return Requests.processRoute(HostingRoute.routes.resolveAwsMarketplacePurchase, { activation_code });
    }
    /** Connect a paid AWS Marketplace contract to one Glitch business account. */
    static activateAwsMarketplaceSubscription(subscription_id, community_id) {
        return Requests.processRoute(HostingRoute.routes.activateAwsMarketplaceSubscription, { community_id }, { subscription_id });
    }
    /** Refresh and retrieve the safe AWS Marketplace entitlement state. */
    static awsMarketplaceSubscription(subscription_id) {
        return Requests.processRoute(HostingRoute.routes.awsMarketplaceSubscription, undefined, { subscription_id });
    }
    static createSite(title_id, data) {
        return Requests.processRoute(HostingRoute.routes.createSite, data, { title_id });
    }
    static updateSite(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.updateSite, data, { title_id, site_id });
    }
    static createUploadUrl(title_id, site_id) {
        return Requests.processRoute(HostingRoute.routes.uploadUrl, {}, { title_id, site_id });
    }
    /** Upload directly to the short-lived Azure URL returned by createUploadUrl. */
    static uploadBuild(uploadUrl, file, requiredHeaders = {}, onUploadProgress) {
        return axios.put(uploadUrl, file, {
            headers: Object.assign({ 'x-ms-blob-type': 'BlockBlob', 'Content-Type': 'application/zip' }, requiredHeaders),
            onUploadProgress,
        });
    }
    static releases(title_id, site_id, params) {
        return Requests.processRoute(HostingRoute.routes.releases, undefined, { title_id, site_id }, params);
    }
    static createRelease(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.createRelease, data, { title_id, site_id });
    }
    static promoteRelease(title_id, site_id, release_id) {
        return Requests.processRoute(HostingRoute.routes.promoteRelease, {}, { title_id, site_id, release_id });
    }
    static connectDomain(title_id, site_id, hostname) {
        return Requests.processRoute(HostingRoute.routes.connectDomain, { hostname }, { title_id, site_id });
    }
    static verifyDomain(title_id, site_id, domain_id) {
        return Requests.processRoute(HostingRoute.routes.verifyDomain, {}, { title_id, site_id, domain_id });
    }
    static checkDomain(hostname) {
        return Requests.processRoute(HostingRoute.routes.checkDomain, { hostname });
    }
    static purchaseDomain(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.purchaseDomain, data, { title_id, site_id });
    }
    static aiInstructions(title_id, site_id, data = {}) {
        return Requests.processRoute(HostingRoute.routes.aiInstructions, data, { title_id, site_id });
    }
    static services(title_id, site_id) {
        return Requests.processRoute(HostingRoute.routes.services, undefined, { title_id, site_id });
    }
    /** Calculate the always-on floor without creating resources or charges. */
    static estimateServices(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.estimateServices, data, { title_id, site_id });
    }
    /** Queue an immutable multi-service release. Publishing remains a separate operation. */
    static applyServices(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.applyServices, data, { title_id, site_id });
    }
    /** Store or rotate a secret. The API never returns the value. Interactive administrators only. */
    static putServiceSecret(title_id, site_id, service_id, name, value) {
        return Requests.processRoute(HostingRoute.routes.putServiceSecret, { value }, { title_id, site_id, service_id, name });
    }
    static deleteServiceSecret(title_id, site_id, service_id, name) {
        return Requests.processRoute(HostingRoute.routes.deleteServiceSecret, undefined, { title_id, site_id, service_id, name });
    }
    static resolve(hostname, gatewayToken) {
        if (!gatewayToken) {
            return Requests.processRoute(HostingRoute.routes.resolve, undefined, undefined, { hostname });
        }
        const base = (Config.getBaseUrl() || '').replace(/\/+$/, '');
        const path = HostingRoute.routes.resolve.url.replace(/^\/+/, '');
        return axios.get(`${base}/${path}`, {
            params: { hostname },
            headers: { 'X-Glitch-Hosting-Gateway': gatewayToken },
        });
    }
    static startPlaySession(data) {
        return Requests.processRoute(HostingRoute.routes.startPlaySession, data);
    }
    static heartbeatPlaySession(session_id, sessionToken) {
        const path = HostingRoute.routes.heartbeatPlaySession.url.replace('{session_id}', session_id);
        const base = (Config.getBaseUrl() || '').replace(/\/+$/, '');
        return axios.post(`${base}/${path.replace(/^\/+/, '')}`, {}, { headers: { Authorization: `Bearer ${sessionToken}` } });
    }
    static databases(title_id, site_id, params) {
        return Requests.processRoute(HostingRoute.routes.databases, undefined, { title_id, site_id }, params);
    }
    static createDatabase(title_id, site_id, data) {
        return Requests.processRoute(HostingRoute.routes.createDatabase, data, { title_id, site_id });
    }
    static database(title_id, site_id, database_id) {
        return Requests.processRoute(HostingRoute.routes.database, undefined, { title_id, site_id, database_id });
    }
    /**
     * Reveal credentials to a signed-in business billing administrator after an
     * exact database-name confirmation. Hosting and MCP tokens are rejected.
     */
    static databaseCredentials(title_id, site_id, database_id, confirmation) {
        return Requests.processRoute(HostingRoute.routes.databaseCredentials, { confirmation }, { title_id, site_id, database_id });
    }
    static updateDatabase(title_id, site_id, database_id, data) {
        return Requests.processRoute(HostingRoute.routes.updateDatabase, data, { title_id, site_id, database_id });
    }
    static retryDatabase(title_id, site_id, database_id) {
        return Requests.processRoute(HostingRoute.routes.retryDatabase, {}, { title_id, site_id, database_id });
    }
    static deleteDatabase(title_id, site_id, database_id, confirmation) {
        return Requests.processRoute(HostingRoute.routes.deleteDatabase, undefined, { title_id, site_id, database_id }, { confirmation });
    }
}

class GameDesignRoute {
}
GameDesignRoute.routes = {
    generateBlueprint: {
        url: '/tools/game-design/blueprint',
        method: HTTP_METHODS.POST,
    },
};

/** Public AI-assisted tools for turning an early game idea into testable design documentation. */
class GameDesign {
    /** Generate a mechanics and core-loop blueprint without requiring authentication. */
    static generateBlueprint(input) {
        return Requests.processRoute(GameDesignRoute.routes.generateBlueprint, input);
    }
}

class Parser {
    /**
     * To be used inside a catch close, this function will parse out any JSON in a error response from the api.
     *
     * @param error The Error object from the catch clause
     *
     * @returns Either returns a JSON object or false.
     */
    static parseJSONFromError(error) {
        let errorString = error.toString();
        errorString = errorString.replace('Error: ', '');
        try {
            return JSON.parse(errorString);
        }
        catch (e) {
            return false;
        }
    }
}

// Browser implementation using crypto-js
class BrowserCrypto {
    constructor() {
        this.CryptoJS = require('crypto-js');
    }
    createHmac(algorithm, secret) {
        let data = '';
        const hmac = {
            update: (updateData) => {
                data = updateData;
                return hmac;
            },
            digest: (encoding) => {
                if (encoding !== 'hex') {
                    throw new Error('Only hex encoding is supported in browser implementation');
                }
                return this.CryptoJS.HmacSHA256(data, secret).toString(this.CryptoJS.enc.Hex);
            }
        };
        return hmac;
    }
}
// Node.js implementation that maintains sync interface
class NodeCrypto {
    constructor() {
        // Use dynamic import but handle it synchronously for interface compliance
        try {
            // This will throw in browser environments
            this.crypto = require('crypto');
        }
        catch (e) {
            this.crypto = undefined;
        }
    }
    createHmac(algorithm, secret) {
        if (!this.crypto) {
            throw new Error('Node.js crypto module not available');
        }
        return this.crypto.createHmac(algorithm, secret);
    }
}
// Determine which crypto implementation to use
const getCrypto = () => {
    var _a;
    try {
        // Check if we're in Node.js environment and crypto is available
        if (typeof process !== 'undefined' && ((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node)) {
            const nodeCrypto = new NodeCrypto();
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
const cryptoInstance = getCrypto();
class Session {
    static isLoggedIn() {
        const authToken = Storage.getAuthToken();
        const expired = Storage.isTokenExpired();
        if (expired) {
            Session.end(); // Auto-clear if expired
            return false;
        }
        return authToken !== null && authToken !== 'null' && authToken !== undefined;
    }
    static getAuthToken() {
        return Storage.getAuthToken();
    }
    static getID() {
        return Storage.get(Session._id_key);
    }
    static getFirstName() {
        return Storage.get(Session._first_name_key);
    }
    static getLastName() {
        return Storage.get(Session._last_name_key);
    }
    static getEmail() {
        return Storage.get(Session._email_key);
    }
    static hasJoinedCommunity() {
        const community = Storage.get('community');
        return !!(community === null || community === void 0 ? void 0 : community.me);
    }
    static end() {
        Storage.setAuthToken(null);
        Storage.set('glitch_token_expiry', null); // Clear expiry
        Storage.eraseCookie('glitch_token_expiry');
        Storage.set(Session._id_key, null);
        Storage.set(Session._first_name_key, null);
        Storage.set(Session._last_name_key, null);
        Storage.set(Session._email_key, null);
        Storage.set(Session._username_key, null);
    }
    static processAuthentication(data) {
        Storage.setAuthToken(data.token.access_token);
        Storage.setTokenExpiry(data.token.expires_in); // Save the timeout
        Storage.set(Session._id_key, data.id);
        Storage.set(Session._first_name_key, data.first_name);
        Storage.set(Session._last_name_key, data.last_name);
        Storage.set(Session._username_key, data.username);
        Storage.set(Session._email_key, data.email);
        Config.setAuthToken(data.token.access_token);
    }
    /**
     * Generate a tracking token for analytics collection
     * @param titleId The title ID to generate token for
     * @param secret The secret key (should match server config)
     * @returns HMAC-SHA256 token
     * @throws Error if crypto operations fail
     */
    static generateTrackingToken(titleId, secret) {
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
    }
}
Session._id_key = 'user_id';
Session._first_name_key = 'user_first_name';
Session._last_name_key = 'user_last_name';
Session._username_key = 'username';
Session._email_key = 'email';

class Data {
    static dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    }
    static convertToHHMMSS(time) {
        if (!time) {
            return time;
        }
        const sec_num = parseInt(time, 10);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);
        if (hours < 10) {
            hours = Number('0' + hours);
        }
        if (minutes < 10) {
            minutes = Number('0' + minutes);
        }
        if (seconds < 10) {
            seconds = Number('0' + seconds);
        }
        return `${hours}:${minutes}:${seconds}`;
    }
}

const AcceptanceStatus = Object.freeze({
    UNAPPROVED: 0,
    APPROVED: 1,
    IN_REVIEW: 2,
    PENDING: 3,
    REQUIRE_MORE_INFORMATION: 4,
    DENIED: 5,
    BANNED: 6,
    PROBATION: 7,
});

const AddressLocationType = Object.freeze({
    VIRTUAL: 1,
    IN_PERSON: 2,
    HYBRID: 3,
});

const CampaignObjective = {
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

const ContentStatus = Object.freeze({
    UNAPPROVED: 0,
    APPROVED: 1,
    IN_REVIEW: 2,
    PENDING: 3,
    FLAGGED: 4,
    REMOVED: 5,
    DELETED: 6,
});

const CompetitionTypes = Object.freeze({
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

const InfluencerCampaignType = {
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

const PostTypes = Object.freeze({
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
class Glitch {
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
    RedditSubreddits: RedditSubreddits,
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
    Multiplayer: Multiplayer,
    ServerOperations: ServerOperations,
    Agents: Agents,
    Mcp: Mcp,
    PrDirectory: PrDirectory,
    AdminReports: AdminReports,
    AdminUsers: AdminUsers,
    MarketResearch: MarketResearch,
    GameAdvertising: GameAdvertising,
    Hosting: Hosting,
    GameDesign: GameDesign,
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

export { Glitch as default };
//# sourceMappingURL=index.js.map
