'use strict';

var require$$1 = require('http');
var require$$2 = require('https');
var require$$0$1 = require('url');
var require$$3 = require('stream');
var require$$4 = require('assert');
var require$$8 = require('zlib');
var require$$1$1 = require('util');
var require$$1$2 = require('path');
var require$$6 = require('fs');

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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var axiosExports$1 = {};
var axios$3 = {
  get exports(){ return axiosExports$1; },
  set exports(v){ axiosExports$1 = v; },
};

var axiosExports = {};
var axios$2 = {
  get exports(){ return axiosExports; },
  set exports(v){ axiosExports = v; },
};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
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
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

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
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

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
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

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
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

var utils$b = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

var utils$a = utils$b;

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
 * @returns {string} The formatted url
 */
var buildURL$1 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$a.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$a.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$a.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$a.forEach(val, function parseValue(v) {
        if (utils$a.isDate(v)) {
          v = v.toISOString();
        } else if (utils$a.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$9 = utils$b;

function InterceptorManager$1() {
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
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$9.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$8 = utils$b;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$8.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

var utils$7 = utils$b;

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError$2(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$7.inherits(AxiosError$2, Error, {
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
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError$2.prototype;
var descriptors = {};

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
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError$2, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError$2.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils$7.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError$2.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

var AxiosError_1 = AxiosError$2;

var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var utils$6 = utils$b;

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData$1(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils$6.isDate(value)) {
      return value.toISOString();
    }

    if (utils$6.isArrayBuffer(value) || utils$6.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils$6.isPlainObject(data) || utils$6.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils$6.forEach(data, function each(value, key) {
        if (utils$6.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils$6.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils$6.endsWith(key, '[]') && (arr = utils$6.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils$6.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

var toFormData_1 = toFormData$1;

var settle;
var hasRequiredSettle;

function requireSettle () {
	if (hasRequiredSettle) return settle;
	hasRequiredSettle = 1;

	var AxiosError = AxiosError_1;

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
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
	};
	return settle;
}

var cookies;
var hasRequiredCookies;

function requireCookies () {
	if (hasRequiredCookies) return cookies;
	hasRequiredCookies = 1;

	var utils = utils$b;

	cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }

	          if (secure === true) {
	            cookie.push('secure');
	          }

	          document.cookie = cookie.join('; ');
	        },

	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },

	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);
	return cookies;
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var parseHeaders;
var hasRequiredParseHeaders;

function requireParseHeaders () {
	if (hasRequiredParseHeaders) return parseHeaders;
	hasRequiredParseHeaders = 1;

	var utils = utils$b;

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

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
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};
	return parseHeaders;
}

var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;

function requireIsURLSameOrigin () {
	if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
	hasRequiredIsURLSameOrigin = 1;

	var utils = utils$b;

	isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;

	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;

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
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);
	return isURLSameOrigin;
}

var CanceledError_1;
var hasRequiredCanceledError;

function requireCanceledError () {
	if (hasRequiredCanceledError) return CanceledError_1;
	hasRequiredCanceledError = 1;

	var AxiosError = AxiosError_1;
	var utils = utils$b;

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function CanceledError(message) {
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
	  this.name = 'CanceledError';
	}

	utils.inherits(CanceledError, AxiosError, {
	  __CANCEL__: true
	});

	CanceledError_1 = CanceledError;
	return CanceledError_1;
}

var parseProtocol;
var hasRequiredParseProtocol;

function requireParseProtocol () {
	if (hasRequiredParseProtocol) return parseProtocol;
	hasRequiredParseProtocol = 1;

	parseProtocol = function parseProtocol(url) {
	  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	  return match && match[1] || '';
	};
	return parseProtocol;
}

var xhr;
var hasRequiredXhr;

function requireXhr () {
	if (hasRequiredXhr) return xhr;
	hasRequiredXhr = 1;

	var utils = utils$b;
	var settle = requireSettle();
	var cookies = requireCookies();
	var buildURL = buildURL$1;
	var buildFullPath = buildFullPath$1;
	var parseHeaders = requireParseHeaders();
	var isURLSameOrigin = requireIsURLSameOrigin();
	var transitionalDefaults = transitional;
	var AxiosError = AxiosError_1;
	var CanceledError = requireCanceledError();
	var parseProtocol = requireParseProtocol();

	xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	    var responseType = config.responseType;
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }

	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }

	    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);

	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
	        request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
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
	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = config.transitional || transitionalDefaults;
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
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (responseType && responseType !== 'json') {
	      request.responseType = config.responseType;
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken || config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function(cancel) {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
	        request.abort();
	        request = null;
	      };

	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }

	    if (!requestData) {
	      requestData = null;
	    }

	    var protocol = parseProtocol(fullPath);

	    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
	      return;
	    }


	    // Send the request
	    request.send(requestData);
	  });
	};
	return xhr;
}

var followRedirectsExports = {};
var followRedirects = {
  get exports(){ return followRedirectsExports; },
  set exports(v){ followRedirectsExports = v; },
};

var debug_1;
var hasRequiredDebug;

function requireDebug () {
	if (hasRequiredDebug) return debug_1;
	hasRequiredDebug = 1;
	var debug;

	debug_1 = function () {
	  if (!debug) {
	    try {
	      /* eslint global-require: off */
	      debug = require("debug")("follow-redirects");
	    }
	    catch (error) { /* */ }
	    if (typeof debug !== "function") {
	      debug = function () { /* */ };
	    }
	  }
	  debug.apply(null, arguments);
	};
	return debug_1;
}

var hasRequiredFollowRedirects;

function requireFollowRedirects () {
	if (hasRequiredFollowRedirects) return followRedirectsExports;
	hasRequiredFollowRedirects = 1;
	var url = require$$0$1;
	var URL = url.URL;
	var http = require$$1;
	var https = require$$2;
	var Writable = require$$3.Writable;
	var assert = require$$4;
	var debug = requireDebug();

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
	  abortRequest(this._currentRequest);
	  this.emit("abort");
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
	  abortRequest(this._currentRequest);
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
	          parsed = urlToOptions(new URL(input));
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
	      else if (URL && (input instanceof URL)) {
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

	function abortRequest(request) {
	  for (var event of events) {
	    request.removeListener(event, eventHandlers[event]);
	  }
	  request.on("error", noop);
	  request.abort();
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
	followRedirects.exports = wrap({ http: http, https: https });
	followRedirectsExports.wrap = wrap;
	return followRedirectsExports;
}

var data;
var hasRequiredData;

function requireData () {
	if (hasRequiredData) return data;
	hasRequiredData = 1;
	data = {
	  "version": "0.27.2"
	};
	return data;
}

var http_1;
var hasRequiredHttp;

function requireHttp () {
	if (hasRequiredHttp) return http_1;
	hasRequiredHttp = 1;

	var utils = utils$b;
	var settle = requireSettle();
	var buildFullPath = buildFullPath$1;
	var buildURL = buildURL$1;
	var http = require$$1;
	var https = require$$2;
	var httpFollow = requireFollowRedirects().http;
	var httpsFollow = requireFollowRedirects().https;
	var url = require$$0$1;
	var zlib = require$$8;
	var VERSION = requireData().version;
	var transitionalDefaults = transitional;
	var AxiosError = AxiosError_1;
	var CanceledError = requireCanceledError();

	var isHttps = /https:?/;

	var supportedProtocols = [ 'http:', 'https:', 'file:' ];

	/**
	 *
	 * @param {http.ClientRequestArgs} options
	 * @param {AxiosProxyConfig} proxy
	 * @param {string} location
	 */
	function setProxy(options, proxy, location) {
	  options.hostname = proxy.host;
	  options.host = proxy.host;
	  options.port = proxy.port;
	  options.path = location;

	  // Basic proxy authorization
	  if (proxy.auth) {
	    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
	    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
	  }

	  // If a proxy is used, any redirects must also pass through the proxy
	  options.beforeRedirect = function beforeRedirect(redirection) {
	    redirection.headers.host = redirection.host;
	    setProxy(redirection, proxy, redirection.href);
	  };
	}

	/*eslint consistent-return:0*/
	http_1 = function httpAdapter(config) {
	  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }

	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }
	    var resolve = function resolve(value) {
	      done();
	      resolvePromise(value);
	    };
	    var rejected = false;
	    var reject = function reject(value) {
	      done();
	      rejected = true;
	      rejectPromise(value);
	    };
	    var data = config.data;
	    var headers = config.headers;
	    var headerNames = {};

	    Object.keys(headers).forEach(function storeLowerName(name) {
	      headerNames[name.toLowerCase()] = name;
	    });

	    // Set User-Agent (required by some servers)
	    // See https://github.com/axios/axios/issues/69
	    if ('user-agent' in headerNames) {
	      // User-Agent is specified; handle case where no UA header is desired
	      if (!headers[headerNames['user-agent']]) {
	        delete headers[headerNames['user-agent']];
	      }
	      // Otherwise, use specified value
	    } else {
	      // Only set header if it hasn't been set in config
	      headers['User-Agent'] = 'axios/' + VERSION;
	    }

	    // support for https://www.npmjs.com/package/form-data api
	    if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
	      Object.assign(headers, data.getHeaders());
	    } else if (data && !utils.isStream(data)) {
	      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
	        data = Buffer.from(new Uint8Array(data));
	      } else if (utils.isString(data)) {
	        data = Buffer.from(data, 'utf-8');
	      } else {
	        return reject(new AxiosError(
	          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
	          AxiosError.ERR_BAD_REQUEST,
	          config
	        ));
	      }

	      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
	        return reject(new AxiosError(
	          'Request body larger than maxBodyLength limit',
	          AxiosError.ERR_BAD_REQUEST,
	          config
	        ));
	      }

	      // Add Content-Length header if data exists
	      if (!headerNames['content-length']) {
	        headers['Content-Length'] = data.length;
	      }
	    }

	    // HTTP basic authentication
	    var auth = undefined;
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      auth = username + ':' + password;
	    }

	    // Parse url
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    var parsed = url.parse(fullPath);
	    var protocol = parsed.protocol || supportedProtocols[0];

	    if (supportedProtocols.indexOf(protocol) === -1) {
	      return reject(new AxiosError(
	        'Unsupported protocol ' + protocol,
	        AxiosError.ERR_BAD_REQUEST,
	        config
	      ));
	    }

	    if (!auth && parsed.auth) {
	      var urlAuth = parsed.auth.split(':');
	      var urlUsername = urlAuth[0] || '';
	      var urlPassword = urlAuth[1] || '';
	      auth = urlUsername + ':' + urlPassword;
	    }

	    if (auth && headerNames.authorization) {
	      delete headers[headerNames.authorization];
	    }

	    var isHttpsRequest = isHttps.test(protocol);
	    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

	    try {
	      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
	    } catch (err) {
	      var customErr = new Error(err.message);
	      customErr.config = config;
	      customErr.url = config.url;
	      customErr.exists = true;
	      reject(customErr);
	    }

	    var options = {
	      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
	      method: config.method.toUpperCase(),
	      headers: headers,
	      agent: agent,
	      agents: { http: config.httpAgent, https: config.httpsAgent },
	      auth: auth
	    };

	    if (config.socketPath) {
	      options.socketPath = config.socketPath;
	    } else {
	      options.hostname = parsed.hostname;
	      options.port = parsed.port;
	    }

	    var proxy = config.proxy;
	    if (!proxy && proxy !== false) {
	      var proxyEnv = protocol.slice(0, -1) + '_proxy';
	      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
	      if (proxyUrl) {
	        var parsedProxyUrl = url.parse(proxyUrl);
	        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
	        var shouldProxy = true;

	        if (noProxyEnv) {
	          var noProxy = noProxyEnv.split(',').map(function trim(s) {
	            return s.trim();
	          });

	          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
	            if (!proxyElement) {
	              return false;
	            }
	            if (proxyElement === '*') {
	              return true;
	            }
	            if (proxyElement[0] === '.' &&
	                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
	              return true;
	            }

	            return parsed.hostname === proxyElement;
	          });
	        }

	        if (shouldProxy) {
	          proxy = {
	            host: parsedProxyUrl.hostname,
	            port: parsedProxyUrl.port,
	            protocol: parsedProxyUrl.protocol
	          };

	          if (parsedProxyUrl.auth) {
	            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
	            proxy.auth = {
	              username: proxyUrlAuth[0],
	              password: proxyUrlAuth[1]
	            };
	          }
	        }
	      }
	    }

	    if (proxy) {
	      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
	      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
	    }

	    var transport;
	    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
	    if (config.transport) {
	      transport = config.transport;
	    } else if (config.maxRedirects === 0) {
	      transport = isHttpsProxy ? https : http;
	    } else {
	      if (config.maxRedirects) {
	        options.maxRedirects = config.maxRedirects;
	      }
	      if (config.beforeRedirect) {
	        options.beforeRedirect = config.beforeRedirect;
	      }
	      transport = isHttpsProxy ? httpsFollow : httpFollow;
	    }

	    if (config.maxBodyLength > -1) {
	      options.maxBodyLength = config.maxBodyLength;
	    }

	    if (config.insecureHTTPParser) {
	      options.insecureHTTPParser = config.insecureHTTPParser;
	    }

	    // Create the request
	    var req = transport.request(options, function handleResponse(res) {
	      if (req.aborted) return;

	      // uncompress the response body transparently if required
	      var stream = res;

	      // return the last request in case of redirects
	      var lastRequest = res.req || req;


	      // if no content, is HEAD request or decompress disabled we should not decompress
	      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
	        switch (res.headers['content-encoding']) {
	        /*eslint default-case:0*/
	        case 'gzip':
	        case 'compress':
	        case 'deflate':
	        // add the unzipper to the body stream processing pipeline
	          stream = stream.pipe(zlib.createUnzip());

	          // remove the content-encoding in order to not confuse downstream operations
	          delete res.headers['content-encoding'];
	          break;
	        }
	      }

	      var response = {
	        status: res.statusCode,
	        statusText: res.statusMessage,
	        headers: res.headers,
	        config: config,
	        request: lastRequest
	      };

	      if (config.responseType === 'stream') {
	        response.data = stream;
	        settle(resolve, reject, response);
	      } else {
	        var responseBuffer = [];
	        var totalResponseBytes = 0;
	        stream.on('data', function handleStreamData(chunk) {
	          responseBuffer.push(chunk);
	          totalResponseBytes += chunk.length;

	          // make sure the content length is not over the maxContentLength if specified
	          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
	            // stream.destoy() emit aborted event before calling reject() on Node.js v16
	            rejected = true;
	            stream.destroy();
	            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
	              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
	          }
	        });

	        stream.on('aborted', function handlerStreamAborted() {
	          if (rejected) {
	            return;
	          }
	          stream.destroy();
	          reject(new AxiosError(
	            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
	            AxiosError.ERR_BAD_RESPONSE,
	            config,
	            lastRequest
	          ));
	        });

	        stream.on('error', function handleStreamError(err) {
	          if (req.aborted) return;
	          reject(AxiosError.from(err, null, config, lastRequest));
	        });

	        stream.on('end', function handleStreamEnd() {
	          try {
	            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
	            if (config.responseType !== 'arraybuffer') {
	              responseData = responseData.toString(config.responseEncoding);
	              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
	                responseData = utils.stripBOM(responseData);
	              }
	            }
	            response.data = responseData;
	          } catch (err) {
	            reject(AxiosError.from(err, null, config, response.request, response));
	          }
	          settle(resolve, reject, response);
	        });
	      }
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
	      var timeout = parseInt(config.timeout, 10);

	      if (isNaN(timeout)) {
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
	      // And then these socket which be hang up will devoring CPU little by little.
	      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
	      req.setTimeout(timeout, function handleRequestTimeout() {
	        req.abort();
	        var transitional = config.transitional || transitionalDefaults;
	        reject(new AxiosError(
	          'timeout of ' + timeout + 'ms exceeded',
	          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
	          config,
	          req
	        ));
	      });
	    }

	    if (config.cancelToken || config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function(cancel) {
	        if (req.aborted) return;

	        req.abort();
	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
	      };

	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }


	    // Send the request
	    if (utils.isStream(data)) {
	      data.on('error', function handleStreamError(err) {
	        reject(AxiosError.from(err, config, null, req));
	      }).pipe(req);
	    } else {
	      req.end(data);
	    }
	  });
	};
	return http_1;
}

var FormDataExports = {};
var FormData$1 = {
  get exports(){ return FormDataExports; },
  set exports(v){ FormDataExports = v; },
};

var delayed_stream;
var hasRequiredDelayed_stream;

function requireDelayed_stream () {
	if (hasRequiredDelayed_stream) return delayed_stream;
	hasRequiredDelayed_stream = 1;
	var Stream = require$$3.Stream;
	var util = require$$1$1;

	delayed_stream = DelayedStream;
	function DelayedStream() {
	  this.source = null;
	  this.dataSize = 0;
	  this.maxDataSize = 1024 * 1024;
	  this.pauseStream = true;

	  this._maxDataSizeExceeded = false;
	  this._released = false;
	  this._bufferedEvents = [];
	}
	util.inherits(DelayedStream, Stream);

	DelayedStream.create = function(source, options) {
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

	Object.defineProperty(DelayedStream.prototype, 'readable', {
	  configurable: true,
	  enumerable: true,
	  get: function() {
	    return this.source.readable;
	  }
	});

	DelayedStream.prototype.setEncoding = function() {
	  return this.source.setEncoding.apply(this.source, arguments);
	};

	DelayedStream.prototype.resume = function() {
	  if (!this._released) {
	    this.release();
	  }

	  this.source.resume();
	};

	DelayedStream.prototype.pause = function() {
	  this.source.pause();
	};

	DelayedStream.prototype.release = function() {
	  this._released = true;

	  this._bufferedEvents.forEach(function(args) {
	    this.emit.apply(this, args);
	  }.bind(this));
	  this._bufferedEvents = [];
	};

	DelayedStream.prototype.pipe = function() {
	  var r = Stream.prototype.pipe.apply(this, arguments);
	  this.resume();
	  return r;
	};

	DelayedStream.prototype._handleEmit = function(args) {
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

	DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
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
	return delayed_stream;
}

var combined_stream;
var hasRequiredCombined_stream;

function requireCombined_stream () {
	if (hasRequiredCombined_stream) return combined_stream;
	hasRequiredCombined_stream = 1;
	var util = require$$1$1;
	var Stream = require$$3.Stream;
	var DelayedStream = requireDelayed_stream();

	combined_stream = CombinedStream;
	function CombinedStream() {
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
	util.inherits(CombinedStream, Stream);

	CombinedStream.create = function(options) {
	  var combinedStream = new this();

	  options = options || {};
	  for (var option in options) {
	    combinedStream[option] = options[option];
	  }

	  return combinedStream;
	};

	CombinedStream.isStreamLike = function(stream) {
	  return (typeof stream !== 'function')
	    && (typeof stream !== 'string')
	    && (typeof stream !== 'boolean')
	    && (typeof stream !== 'number')
	    && (!Buffer.isBuffer(stream));
	};

	CombinedStream.prototype.append = function(stream) {
	  var isStreamLike = CombinedStream.isStreamLike(stream);

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

	CombinedStream.prototype.pipe = function(dest, options) {
	  Stream.prototype.pipe.call(this, dest, options);
	  this.resume();
	  return dest;
	};

	CombinedStream.prototype._getNext = function() {
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

	CombinedStream.prototype._realGetNext = function() {
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
	    var isStreamLike = CombinedStream.isStreamLike(stream);
	    if (isStreamLike) {
	      stream.on('data', this._checkDataSize.bind(this));
	      this._handleErrors(stream);
	    }

	    this._pipeNext(stream);
	  }.bind(this));
	};

	CombinedStream.prototype._pipeNext = function(stream) {
	  this._currentStream = stream;

	  var isStreamLike = CombinedStream.isStreamLike(stream);
	  if (isStreamLike) {
	    stream.on('end', this._getNext.bind(this));
	    stream.pipe(this, {end: false});
	    return;
	  }

	  var value = stream;
	  this.write(value);
	  this._getNext();
	};

	CombinedStream.prototype._handleErrors = function(stream) {
	  var self = this;
	  stream.on('error', function(err) {
	    self._emitError(err);
	  });
	};

	CombinedStream.prototype.write = function(data) {
	  this.emit('data', data);
	};

	CombinedStream.prototype.pause = function() {
	  if (!this.pauseStreams) {
	    return;
	  }

	  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
	  this.emit('pause');
	};

	CombinedStream.prototype.resume = function() {
	  if (!this._released) {
	    this._released = true;
	    this.writable = true;
	    this._getNext();
	  }

	  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
	  this.emit('resume');
	};

	CombinedStream.prototype.end = function() {
	  this._reset();
	  this.emit('end');
	};

	CombinedStream.prototype.destroy = function() {
	  this._reset();
	  this.emit('close');
	};

	CombinedStream.prototype._reset = function() {
	  this.writable = false;
	  this._streams = [];
	  this._currentStream = null;
	};

	CombinedStream.prototype._checkDataSize = function() {
	  this._updateDataSize();
	  if (this.dataSize <= this.maxDataSize) {
	    return;
	  }

	  var message =
	    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
	  this._emitError(new Error(message));
	};

	CombinedStream.prototype._updateDataSize = function() {
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

	CombinedStream.prototype._emitError = function(err) {
	  this._reset();
	  this.emit('error', err);
	};
	return combined_stream;
}

var mimeTypes = {};

var mimeDbExports = {};
var mimeDb = {
  get exports(){ return mimeDbExports; },
  set exports(v){ mimeDbExports = v; },
};

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

var hasRequiredMimeDb;

function requireMimeDb () {
	if (hasRequiredMimeDb) return mimeDbExports;
	hasRequiredMimeDb = 1;
	(function (module) {
		/**
		 * Module exports.
		 */

		module.exports = require$$0;
} (mimeDb));
	return mimeDbExports;
}

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredMimeTypes;

function requireMimeTypes () {
	if (hasRequiredMimeTypes) return mimeTypes;
	hasRequiredMimeTypes = 1;
	(function (exports) {

		/**
		 * Module dependencies.
		 * @private
		 */

		var db = requireMimeDb();
		var extname = require$$1$2.extname;

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
	return mimeTypes;
}

var defer_1;
var hasRequiredDefer;

function requireDefer () {
	if (hasRequiredDefer) return defer_1;
	hasRequiredDefer = 1;
	defer_1 = defer;

	/**
	 * Runs provided function on next iteration of the event loop
	 *
	 * @param {function} fn - function to run
	 */
	function defer(fn)
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
	return defer_1;
}

var async_1;
var hasRequiredAsync;

function requireAsync () {
	if (hasRequiredAsync) return async_1;
	hasRequiredAsync = 1;
	var defer = requireDefer();

	// API
	async_1 = async;

	/**
	 * Runs provided callback asynchronously
	 * even if callback itself is not
	 *
	 * @param   {function} callback - callback to invoke
	 * @returns {function} - augmented callback
	 */
	function async(callback)
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
	return async_1;
}

var abort_1;
var hasRequiredAbort;

function requireAbort () {
	if (hasRequiredAbort) return abort_1;
	hasRequiredAbort = 1;
	// API
	abort_1 = abort;

	/**
	 * Aborts leftover active jobs
	 *
	 * @param {object} state - current state object
	 */
	function abort(state)
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
	return abort_1;
}

var iterate_1;
var hasRequiredIterate;

function requireIterate () {
	if (hasRequiredIterate) return iterate_1;
	hasRequiredIterate = 1;
	var async = requireAsync()
	  , abort = requireAbort()
	  ;

	// API
	iterate_1 = iterate;

	/**
	 * Iterates over each job object
	 *
	 * @param {array|object} list - array or object (named list) to iterate over
	 * @param {function} iterator - iterator to run
	 * @param {object} state - current job status
	 * @param {function} callback - invoked when all elements processed
	 */
	function iterate(list, iterator, state, callback)
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
	      abort(state);
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
	    aborter = iterator(item, async(callback));
	  }
	  // otherwise go with full three arguments
	  else
	  {
	    aborter = iterator(item, key, async(callback));
	  }

	  return aborter;
	}
	return iterate_1;
}

var state_1;
var hasRequiredState;

function requireState () {
	if (hasRequiredState) return state_1;
	hasRequiredState = 1;
	// API
	state_1 = state;

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
	return state_1;
}

var terminator_1;
var hasRequiredTerminator;

function requireTerminator () {
	if (hasRequiredTerminator) return terminator_1;
	hasRequiredTerminator = 1;
	var abort = requireAbort()
	  , async = requireAsync()
	  ;

	// API
	terminator_1 = terminator;

	/**
	 * Terminates jobs in the attached state context
	 *
	 * @this  AsyncKitState#
	 * @param {function} callback - final callback to invoke after termination
	 */
	function terminator(callback)
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
	return terminator_1;
}

var parallel_1;
var hasRequiredParallel;

function requireParallel () {
	if (hasRequiredParallel) return parallel_1;
	hasRequiredParallel = 1;
	var iterate    = requireIterate()
	  , initState  = requireState()
	  , terminator = requireTerminator()
	  ;

	// Public API
	parallel_1 = parallel;

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
	  var state = initState(list);

	  while (state.index < (state['keyedList'] || list).length)
	  {
	    iterate(list, iterator, state, function(error, result)
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

	  return terminator.bind(state, callback);
	}
	return parallel_1;
}

var serialOrderedExports = {};
var serialOrdered = {
  get exports(){ return serialOrderedExports; },
  set exports(v){ serialOrderedExports = v; },
};

var hasRequiredSerialOrdered;

function requireSerialOrdered () {
	if (hasRequiredSerialOrdered) return serialOrderedExports;
	hasRequiredSerialOrdered = 1;
	var iterate    = requireIterate()
	  , initState  = requireState()
	  , terminator = requireTerminator()
	  ;

	// Public API
	serialOrdered.exports = serialOrdered$1;
	// sorting helpers
	serialOrderedExports.ascending  = ascending;
	serialOrderedExports.descending = descending;

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
	return serialOrderedExports;
}

var serial_1;
var hasRequiredSerial;

function requireSerial () {
	if (hasRequiredSerial) return serial_1;
	hasRequiredSerial = 1;
	var serialOrdered = requireSerialOrdered();

	// Public API
	serial_1 = serial;

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
	return serial_1;
}

var asynckit;
var hasRequiredAsynckit;

function requireAsynckit () {
	if (hasRequiredAsynckit) return asynckit;
	hasRequiredAsynckit = 1;
	asynckit =
	{
	  parallel      : requireParallel(),
	  serial        : requireSerial(),
	  serialOrdered : requireSerialOrdered()
	};
	return asynckit;
}

var populate;
var hasRequiredPopulate;

function requirePopulate () {
	if (hasRequiredPopulate) return populate;
	hasRequiredPopulate = 1;
	// populates missing values
	populate = function(dst, src) {

	  Object.keys(src).forEach(function(prop)
	  {
	    dst[prop] = dst[prop] || src[prop];
	  });

	  return dst;
	};
	return populate;
}

var form_data;
var hasRequiredForm_data;

function requireForm_data () {
	if (hasRequiredForm_data) return form_data;
	hasRequiredForm_data = 1;
	var CombinedStream = requireCombined_stream();
	var util = require$$1$1;
	var path = require$$1$2;
	var http = require$$1;
	var https = require$$2;
	var parseUrl = require$$0$1.parse;
	var fs = require$$6;
	var Stream = require$$3.Stream;
	var mime = requireMimeTypes();
	var asynckit = requireAsynckit();
	var populate = requirePopulate();

	// Public API
	form_data = FormData;

	// make it a Stream
	util.inherits(FormData, CombinedStream);

	/**
	 * Create readable "multipart/form-data" streams.
	 * Can be used to submit forms
	 * and file uploads to other web applications.
	 *
	 * @constructor
	 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
	 */
	function FormData(options) {
	  if (!(this instanceof FormData)) {
	    return new FormData(options);
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

	FormData.LINE_BREAK = '\r\n';
	FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

	FormData.prototype.append = function(field, value, options) {

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

	FormData.prototype._trackLength = function(header, value, options) {
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
	    FormData.LINE_BREAK.length;

	  // empty or either doesn't have path or not an http response or not a stream
	  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
	    return;
	  }

	  // no need to bother with the length
	  if (!options.knownLength) {
	    this._valuesToMeasure.push(value);
	  }
	};

	FormData.prototype._lengthRetriever = function(value, callback) {

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

	FormData.prototype._multiPartHeader = function(field, value, options) {
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
	      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
	    }
	  }

	  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
	};

	FormData.prototype._getContentDisposition = function(value, options) {

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

	FormData.prototype._getContentType = function(value, options) {

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
	    contentType = FormData.DEFAULT_CONTENT_TYPE;
	  }

	  return contentType;
	};

	FormData.prototype._multiPartFooter = function() {
	  return function(next) {
	    var footer = FormData.LINE_BREAK;

	    var lastPart = (this._streams.length === 0);
	    if (lastPart) {
	      footer += this._lastBoundary();
	    }

	    next(footer);
	  }.bind(this);
	};

	FormData.prototype._lastBoundary = function() {
	  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
	};

	FormData.prototype.getHeaders = function(userHeaders) {
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

	FormData.prototype.setBoundary = function(boundary) {
	  this._boundary = boundary;
	};

	FormData.prototype.getBoundary = function() {
	  if (!this._boundary) {
	    this._generateBoundary();
	  }

	  return this._boundary;
	};

	FormData.prototype.getBuffer = function() {
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
	        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );
	      }
	    }
	  }

	  // Add the footer and return the Buffer object.
	  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
	};

	FormData.prototype._generateBoundary = function() {
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
	FormData.prototype.getLengthSync = function() {
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
	FormData.prototype.hasKnownLength = function() {
	  var hasKnownLength = true;

	  if (this._valuesToMeasure.length) {
	    hasKnownLength = false;
	  }

	  return hasKnownLength;
	};

	FormData.prototype.getLength = function(cb) {
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

	FormData.prototype.submit = function(params, cb) {
	  var request
	    , options
	    , defaults = {method: 'post'}
	    ;

	  // parse provided url if it's string
	  // or treat it as options object
	  if (typeof params == 'string') {

	    params = parseUrl(params);
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
	    request = https.request(options);
	  } else {
	    request = http.request(options);
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

	FormData.prototype._error = function(err) {
	  if (!this.error) {
	    this.error = err;
	    this.pause();
	    this.emit('error', err);
	  }
	};

	FormData.prototype.toString = function () {
	  return '[object FormData]';
	};
	return form_data;
}

var hasRequiredFormData;

function requireFormData () {
	if (hasRequiredFormData) return FormDataExports;
	hasRequiredFormData = 1;
	(function (module) {
		// eslint-disable-next-line strict
		module.exports = requireForm_data();
} (FormData$1));
	return FormDataExports;
}

var utils$5 = utils$b;
var normalizeHeaderName = normalizeHeaderName$1;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = requireXhr();
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = requireHttp();
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils$5.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
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
    FormData: requireFormData()
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$4 = utils$b;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1;
var hasRequiredIsCancel;

function requireIsCancel () {
	if (hasRequiredIsCancel) return isCancel$1;
	hasRequiredIsCancel = 1;

	isCancel$1 = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};
	return isCancel$1;
}

var utils$3 = utils$b;
var transformData = transformData$1;
var isCancel = requireIsCancel();
var defaults$1 = defaults_1;
var CanceledError = requireCanceledError();

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$3.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$2 = utils$b;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var VERSION = requireData().version;
var AxiosError = AxiosError_1;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
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
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
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

var validator$1 = {
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$1 = utils$b;
var buildURL = buildURL$1;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath = buildFullPath$1;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios_1 = Axios$1;

var CancelToken_1;
var hasRequiredCancelToken;

function requireCancelToken () {
	if (hasRequiredCancelToken) return CancelToken_1;
	hasRequiredCancelToken = 1;

	var CanceledError = requireCanceledError();

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;

	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;

	  // eslint-disable-next-line func-names
	  this.promise.then(function(cancel) {
	    if (!token._listeners) return;

	    var i;
	    var l = token._listeners.length;

	    for (i = 0; i < l; i++) {
	      token._listeners[i](cancel);
	    }
	    token._listeners = null;
	  });

	  // eslint-disable-next-line func-names
	  this.promise.then = function(onfulfilled) {
	    var _resolve;
	    // eslint-disable-next-line func-names
	    var promise = new Promise(function(resolve) {
	      token.subscribe(resolve);
	      _resolve = resolve;
	    }).then(onfulfilled);

	    promise.cancel = function reject() {
	      token.unsubscribe(_resolve);
	    };

	    return promise;
	  };

	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new CanceledError(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Subscribe to the cancel signal
	 */

	CancelToken.prototype.subscribe = function subscribe(listener) {
	  if (this.reason) {
	    listener(this.reason);
	    return;
	  }

	  if (this._listeners) {
	    this._listeners.push(listener);
	  } else {
	    this._listeners = [listener];
	  }
	};

	/**
	 * Unsubscribe from the cancel signal
	 */

	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
	  if (!this._listeners) {
	    return;
	  }
	  var index = this._listeners.indexOf(listener);
	  if (index !== -1) {
	    this._listeners.splice(index, 1);
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	CancelToken_1 = CancelToken;
	return CancelToken_1;
}

var spread;
var hasRequiredSpread;

function requireSpread () {
	if (hasRequiredSpread) return spread;
	hasRequiredSpread = 1;

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
	 * @returns {Function}
	 */
	spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};
	return spread;
}

var isAxiosError;
var hasRequiredIsAxiosError;

function requireIsAxiosError () {
	if (hasRequiredIsAxiosError) return isAxiosError;
	hasRequiredIsAxiosError = 1;

	var utils = utils$b;

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	isAxiosError = function isAxiosError(payload) {
	  return utils.isObject(payload) && (payload.isAxiosError === true);
	};
	return isAxiosError;
}

var utils = utils$b;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Expose Cancel & CancelToken
axios$1.CanceledError = requireCanceledError();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.VERSION = requireData().version;
axios$1.toFormData = toFormData_1;

// Expose AxiosError class
axios$1.AxiosError = AxiosError_1;

// alias for CanceledError for backward compatibility
axios$1.Cancel = axios$1.CanceledError;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = requireSpread();

// Expose isAxiosError
axios$1.isAxiosError = requireIsAxiosError();

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axiosExports.default = axios$1;

(function (module) {
	module.exports = axiosExports;
} (axios$3));

var axios = /*@__PURE__*/getDefaultExportFromCjs(axiosExports$1);

var HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

var Requests = /** @class */ (function () {
    function Requests(config) {
        this.config = config;
    }
    /**
     * Sets the base url of the API.
     *
     * @param url The url to of the API.
     */
    Requests.setBaseUrl = function (url) {
        this.baseUrl = url;
    };
    /**
     * Sets the JSON Web token
     *
     * @param token
     */
    Requests.setAuthToken = function (token) {
        this.authToken = token;
    };
    /**
     * Sets the community id that will be associated with all requests
     *
     * @param token
     */
    Requests.setCommunityID = function (community_id) {
        this.community_id = community_id;
    };
    Requests.request = function (method, url, data, fileData) {
        var headers = {
            'Content-Type': 'application/json',
        };
        if (this.authToken) {
            headers['Authorization'] = "Bearer ".concat(this.authToken);
        }
        if (fileData) {
            headers['Content-Type'] = 'multipart/form-data';
        }
        //Remove double slashes
        url = url.replace(/\/\//g, '/');
        var uri = "".concat(this.baseUrl).concat(url);
        var axiosPromise = axios({
            method: method,
            url: uri,
            baseURL: this.baseUrl,
            data: fileData || data,
            headers: headers,
        });
        return axiosPromise;
    };
    /**
     * Calls a GET request to the url endpoint.
     *
     * @param url
     * @returns
     */
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
        if (this.community_id) {
            // Check if the URL already contains query parameters
            var separator = url.includes('?') ? '&' : '?';
            // Append the community_id query parameter
            url = "".concat(url).concat(separator, "community_id=").concat(this.community_id);
        }
        return this.request('GET', url);
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
        if (this.community_id) {
            // Add the community_id to the request body
            data = __assign(__assign({}, data), { communities: [this.community_id] });
        }
        return this.request('POST', url, data);
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
        if (this.community_id) {
            // Add the community_id to the request body
            data = __assign(__assign({}, data), { community_id: this.community_id });
        }
        return this.request('PUT', url, data);
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
        if (this.community_id) {
            // Check if the URL already contains query parameters
            var separator = url.includes('?') ? '&' : '?';
            // Append the community_id query parameter
            url = "".concat(url).concat(separator, "community_id=").concat(this.community_id);
        }
        return this.request('DELETE', url);
    };
    Requests.uploadFile = function (url, filename, file, data, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        var formData = new FormData();
        formData.append(filename, file);
        if (this.community_id) {
            // Add the community_id to the request body
            data = __assign(__assign({}, data), { communities: [this.community_id] });
        }
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return this.request('POST', url, data, formData);
    };
    Requests.uploadBlob = function (url, filename, blob, data, params) {
        if (params && Object.keys(params).length > 0) {
            var queryString = Object.entries(params)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, "=").concat(encodeURIComponent(value));
            })
                .join('&');
            url = "".concat(url, "?").concat(queryString);
        }
        var formData = new FormData();
        formData.append(filename, blob);
        if (this.community_id) {
            // Add the community_id to the request body
            data = __assign(__assign({}, data), { communities: [this.community_id] });
        }
        for (var key in data) {
            formData.append(key, data[key]);
        }
        return this.request('POST', url, data, formData);
    };
    /**
     *  The Route class contains the method and url, thereforce items can be
     *  automatically routed depending on the configuration.
     *
     * @param route
     * @param data
     * @returns
     */
    Requests.processRoute = function (route, data, routeReplace, params) {
        var url = route.url;
        if (routeReplace) {
            for (var key in routeReplace) {
                url = url.replace("{" + key + "}", routeReplace[key]);
            }
        }
        if (route.method == HTTP_METHODS.GET) {
            return this.get(url, params);
        }
        else if (route.method == HTTP_METHODS.POST) {
            return this.post(url, data, params);
        }
        else if (route.method == HTTP_METHODS.PUT) {
            return this.put(url, data, params);
        }
        else if (route.method == HTTP_METHODS.DELETE) {
            return this.delete(url, params);
        }
        return this.get(url);
    };
    //The base url of the API.
    Requests.baseUrl = "";
    //The Json Web Token to send in the header
    Requests.authToken = "";
    //The ID of the community that will be added to request
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
                this.setCookie(key, value, 31);
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
                var value = Storage.getCookie(key);
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
        document.cookie =
            name +
                '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    Storage.setCookie = function (name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie =
            name +
                '=' +
                (value || '') +
                expires +
                '; path=/; domain=' +
                Storage.rootDomain +
                '; HttpOnly=false; SameSite=none; Secure';
    };
    Storage.getCookie = function (name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
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
     * Sets the root level domain so data can accessed across
     * multiple subdomains
     *
     * @param domain The domain ie: example.com
     */
    Config.setRootDomain = function (domain) {
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
        return Requests.processRoute(AuthRoutes.routes.forgot_password, data);
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
        findByDomain: { url: '/communities/findByDomain/{domain}', method: HTTP_METHODS.GET }
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
        oneTimeToken: { url: '/users/oneTimeToken', method: HTTP_METHODS.GET },
        uploadAvatar: { url: '/users/uploadAvatarImage', method: HTTP_METHODS.POST },
        uploadBanner: { url: '/users/uploadBannerImage', method: HTTP_METHODS.POST },
        createDonationPage: { url: '/users/createDonationPage', method: HTTP_METHODS.POST },
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
        uploadMainImage: { url: '/events/{event_id}/removeRTMPSource/{subid}', method: HTTP_METHODS.POST },
        uploadBannerImage: { url: '/events/{event_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        enableBroadcastMode: { url: '/events/{event_id}/uploadBannerImage', method: HTTP_METHODS.POST },
        enableLivestreamMode: { url: '/events/{event_id}/enableLivestreamMode', method: HTTP_METHODS.POST },
        sendOnScreenContent: { url: '/events/{event_id}/sendOnScreenContent', method: HTTP_METHODS.POST },
        addOverlay: { url: '/events/{event_id}/addOverlay', method: HTTP_METHODS.POST },
        removeOverlay: { url: '/events/{event_id}/removeOverlay/{subid}', method: HTTP_METHODS.DELETE },
        enableOverlay: { url: '/events/{event_id}/enableOverlay/{subid}', method: HTTP_METHODS.POST },
        disableOverlay: { url: '/events/{event_id}/disableOverlay', method: HTTP_METHODS.POST },
        enableDonations: { url: '/events/{event_id}/enableDonations', method: HTTP_METHODS.POST },
        disableDonations: { url: '/events/{event_id}/disableDonations', method: HTTP_METHODS.POST },
        sendInvite: { url: '/events/{event_id}/sendInvite', method: HTTP_METHODS.POST },
        acceptInvite: { url: '/events/{event_id}/sendInvite', method: HTTP_METHODS.POST }
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
     * Updates the banner image for the team using a File object.
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
     * Updates the banner image for the team using a Blob.
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
    return Events;
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
    return Utility;
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
        if (!community) {
            return false;
        }
        return (community === null || community === void 0 ? void 0 : community.me) ? true : false;
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
        Auth: Auth,
        Competitions: Competitions,
        Communities: Communities,
        Users: Users,
        Events: Events,
        Teams: Teams,
        Posts: Posts,
        Templates: Templates,
        Waitlists: Waitlists,
        Utility: Utility,
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
        CompetitionTypes: CompetitionTypes,
        ContentStatus: ContentStatus,
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
