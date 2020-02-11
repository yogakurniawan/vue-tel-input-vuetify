(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vuetify/lib')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vuetify/lib'], factory) :
	(global = global || self, factory(global['vue-tel-input-vuetify'] = {}, global.lib$1));
}(this, (function (exports, lib$1) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.10' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode:  'global',
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var _functionToString = _shared('native-function-to-string', Function.toString);

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');

	var TO_STRING = 'toString';
	var TPL = ('' + _functionToString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return _functionToString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
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

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$1
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	// all object keys, includes non-enumerable and symbols



	var Reflect$1 = _global.Reflect;
	var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
	  var keys = _objectGopn.f(_anObject(it));
	  var getSymbols = _objectGops.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$4 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$4
	};

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	// https://github.com/tc39/proposal-object-getownpropertydescriptors






	_export(_export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = _toIobject(object);
	    var getDesc = _objectGopd.f;
	    var keys = _ownKeys(O);
	    var result = {};
	    var i = 0;
	    var key, desc;
	    while (keys.length > i) {
	      desc = getDesc(O, key = keys[i++]);
	      if (desc !== undefined) _createProperty(result, key, desc);
	    }
	    return result;
	  }
	});

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterators = {};

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if ( typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ( (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR$1 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
	    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	    _iterators[NAME] = ArrayValues;
	    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
	  }
	}

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	var _global$1 = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core$1 = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.10' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1$1 = _core$1.version;

	var _aFunction$1 = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx$1 = function (fn, that, length) {
	  _aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
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

	var _isObject$1 = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject$1 = function (it) {
	  if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails$1 = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors$1 = !_fails$1(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$3 = _global$1.document;
	// typeof document.createElement is 'object' in old IE
	var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
	var _domCreate$1 = function (it) {
	  return is$1 ? document$3.createElement(it) : {};
	};

	var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
	  return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive$1 = function (it, S) {
	  if (!_isObject$1(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP$1 = Object.defineProperty;

	var f$5 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject$1(O);
	  P = _toPrimitive$1(P, true);
	  _anObject$1(Attributes);
	  if (_ie8DomDefine$1) try {
	    return dP$1(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp$1 = {
		f: f$5
	};

	var _propertyDesc$1 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide$1 = _descriptors$1 ? function (object, key, value) {
	  return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty$1 = {}.hasOwnProperty;
	var _has$1 = function (it, key) {
	  return hasOwnProperty$1.call(it, key);
	};

	var PROTOTYPE$2 = 'prototype';

	var $export$1 = function (type, name, source) {
	  var IS_FORCED = type & $export$1.F;
	  var IS_GLOBAL = type & $export$1.G;
	  var IS_STATIC = type & $export$1.S;
	  var IS_PROTO = type & $export$1.P;
	  var IS_BIND = type & $export$1.B;
	  var IS_WRAP = type & $export$1.W;
	  var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
	  var expProto = exports[PROTOTYPE$2];
	  var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$2];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has$1(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx$1(out, _global$1)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE$2] = C[PROTOTYPE$2];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export$1.R && expProto && !expProto[key]) _hide$1(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export$1.F = 1;   // forced
	$export$1.G = 2;   // global
	$export$1.S = 4;   // static
	$export$1.P = 8;   // proto
	$export$1.B = 16;  // bind
	$export$1.W = 32;  // wrap
	$export$1.U = 64;  // safe
	$export$1.R = 128; // real proto method for `library`
	var _export$1 = $export$1;

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export$1(_export$1.S + _export$1.F * !_descriptors$1, 'Object', { defineProperty: _objectDp$1.f });

	var $Object = _core$1.Object;
	var defineProperty = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty$1 = defineProperty;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$1(obj, key, {
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

	// 21.2.5.3 get RegExp.prototype.flags

	var _flags = function () {
	  var that = _anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	// 21.2.5.3 get RegExp.prototype.flags()
	if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: _flags
	});

	var TO_STRING = 'toString';
	var $toString = /./[TO_STRING];

	var define = function (fn) {
	  _redefine(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
	  define(function toString() {
	    var R = _anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if ($toString.name != TO_STRING) {
	  define(function toString() {
	    return $toString.call(this);
	  });
	}

	// Array of country objects for the flag dropdown.
	// Here is the criteria for the plugin to support a given country/territory
	// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
	// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
	// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
	// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
	// Each country array has the following information:
	// [
	//    Country name,
	//    iso2 code,
	//    International dial code,
	//    Order (if >1 country with same dial code),
	//    Area codes
	// ]
	var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', 0], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', 1, ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86'], ['Christmas Island', 'cx', '61', 2], ['Cocos (Keeling) Islands', 'cc', '61', 1], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', 0], ['France', 'fr', '33'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502'], ['Guernsey', 'gg', '44', 1], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354'], ['India (भारत)', 'in', '91'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353'], ['Isle of Man', 'im', '44', 2], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81'], ['Jersey', 'je', '44', 3], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kosovo', 'xk', '383'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mayotte', 'yt', '262', 1], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212', 0], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', 0], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63'], ['Poland (Polska)', 'pl', '48'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262', 0], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy', 'bl', '590', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Svalbard and Jan Mayen', 'sj', '47', 1], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46'], ['Switzerland (Schweiz)', 'ch', '41'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', 0], ['United States', 'us', '1', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna (Wallis-et-Futuna)', 'wf', '681'], ['Western Sahara (‫الصحراء الغربية‬‎)', 'eh', '212', 1], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263'], ['Åland Islands', 'ax', '358', 1]];
	var allCountries$1 = allCountries.map(function (country) {
	  return {
	    name: country[0],
	    iso2: country[1].toUpperCase(),
	    dialCode: country[2],
	    priority: country[3] || 0,
	    areaCodes: country[4] || null
	  };
	});

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	function getCountry() {
	  return fetch('https://ip2c.org/s').then(function (response) {
	    return response.text();
	  }).then(function (response) {
	    var result = (response || '').toString();

	    if (!result || result[0] !== '1') {
	      throw new Error('unable to fetch the country');
	    }

	    return result.substr(2, 2);
	  });
	} // Credits: http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/

	function setCaretPosition(ctrl, pos) {
	  // Modern browsers
	  if (ctrl.setSelectionRange) {
	    ctrl.focus();
	    ctrl.setSelectionRange(pos, pos); // IE8 and below
	  } else if (ctrl.createTextRange) {
	    var range = ctrl.createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', pos);
	    range.moveStart('character', pos);
	    range.select();
	  }
	}
	var defaultOptions = {
	  placeholder: 'Enter a phone number',
	  disabledFetchingCountry: false,
	  disabled: false,
	  disabledFormatting: false,
	  mode: '',
	  invalidMsg: '',
	  required: false,
	  allCountries: allCountries$1,
	  defaultCountry: '',
	  enabledCountryCode: false,
	  enabledFlags: true,
	  preferredCountries: [],
	  onlyCountries: [],
	  ignoredCountries: [],
	  autofocus: false,
	  autocomplete: 'on',
	  name: 'telephone',
	  wrapperClasses: '',
	  inputClasses: '',
	  inputId: '',
	  dropdownOptions: {},
	  inputOptions: {},
	  maxLen: 25,
	  validCharactersOnly: false,
	  dynamicPlaceholder: false
	};
	var utils = {
	  options: _objectSpread({}, defaultOptions)
	};

	var dP$2 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME$1 = 'name';

	// 19.2.4.2 name
	NAME$1 in FProto || _descriptors && dP$2(FProto, NAME$1, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	// 7.2.8 IsRegExp(argument)


	var MATCH = _wks('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	// helper for String#{startsWith, endsWith, includes}



	var _stringContext = function (that, searchString, NAME) {
	  if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(_defined(that));
	};

	var MATCH$1 = _wks('match');
	var _failsIsRegexp = function (KEY) {
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch (e) {
	    try {
	      re[MATCH$1] = false;
	      return !'/./'[KEY](re);
	    } catch (f) { /* empty */ }
	  } return true;
	};

	var STARTS_WITH = 'startsWith';
	var $startsWith = ''[STARTS_WITH];

	_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = _stringContext(this, searchString, STARTS_WITH);
	    var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var SPECIES = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find = _arrayMethods(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $find$1 = _arrayMethods(5);
	var KEY$1 = 'find';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	_export(_export.P + _export.F * forced$1, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	var toString$1 = {}.toString;

	var _cof$1 = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	// 7.2.2 IsArray(argument)

	var _isArray$1 = Array.isArray || function isArray(arg) {
	  return _cof$1(arg) == 'Array';
	};

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


	_export$1(_export$1.S, 'Array', { isArray: _isArray$1 });

	var isArray = _core$1.Array.isArray;

	var isArray$1 = isArray;

	function _arrayWithoutHoles(arr) {
	  if (isArray$1(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	// 7.1.4 ToInteger
	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;
	var _toInteger$1 = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor$1 : ceil$1)(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined$1 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined$1(that));
	    var i = _toInteger$1(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var _redefine$1 = _hide$1;

	var _iterators$1 = {};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject$1 = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof$1(it) == 'String' ? it.split('') : Object(it);
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject$1 = function (it) {
	  return _iobject$1(_defined$1(it));
	};

	// 7.1.15 ToLength

	var min$2 = Math.min;
	var _toLength$1 = function (it) {
	  return it > 0 ? min$2(_toInteger$1(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max$1 = Math.max;
	var min$3 = Math.min;
	var _toAbsoluteIndex$1 = function (index, length) {
	  index = _toInteger$1(index);
	  return index < 0 ? max$1(index + length, 0) : min$3(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes$1 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject$1($this);
	    var length = _toLength$1(O.length);
	    var index = _toAbsoluteIndex$1(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared$1 = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global$1[SHARED] || (_global$1[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core$1.version,
	  mode:  'pure' ,
	  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id$1 = 0;
	var px$1 = Math.random();
	var _uid$1 = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$1 + px$1).toString(36));
	};

	var shared$1 = _shared$1('keys');

	var _sharedKey$1 = function (key) {
	  return shared$1[key] || (shared$1[key] = _uid$1(key));
	};

	var arrayIndexOf$1 = _arrayIncludes$1(false);
	var IE_PROTO$3 = _sharedKey$1('IE_PROTO');

	var _objectKeysInternal$1 = function (object, names) {
	  var O = _toIobject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO$3) _has$1(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has$1(O, key = names[i++])) {
	    ~arrayIndexOf$1(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys$1 = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys$1 = Object.keys || function keys(O) {
	  return _objectKeysInternal$1(O, _enumBugKeys$1);
	};

	var _objectDps$1 = _descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject$1(O);
	  var keys = _objectKeys$1(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp$1.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$4 = _global$1.document;
	var _html$1 = document$4 && document$4.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$4 = _sharedKey$1('IE_PROTO');
	var Empty$1 = function () { /* empty */ };
	var PROTOTYPE$3 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict$1 = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate$1('iframe');
	  var i = _enumBugKeys$1.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html$1.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict$1 = iframeDocument.F;
	  while (i--) delete createDict$1[PROTOTYPE$3][_enumBugKeys$1[i]];
	  return createDict$1();
	};

	var _objectCreate$1 = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty$1[PROTOTYPE$3] = _anObject$1(O);
	    result = new Empty$1();
	    Empty$1[PROTOTYPE$3] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$4] = O;
	  } else result = createDict$1();
	  return Properties === undefined ? result : _objectDps$1(result, Properties);
	};

	var _wks$1 = createCommonjsModule(function (module) {
	var store = _shared$1('wks');

	var Symbol = _global$1.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid$1)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def$1 = _objectDp$1.f;

	var TAG$1 = _wks$1('toStringTag');

	var _setToStringTag$1 = function (it, tag, stat) {
	  if (it && !_has$1(it = stat ? it : it.prototype, TAG$1)) def$1(it, TAG$1, { configurable: true, value: tag });
	};

	var IteratorPrototype$1 = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide$1(IteratorPrototype$1, _wks$1('iterator'), function () { return this; });

	var _iterCreate$1 = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate$1(IteratorPrototype$1, { next: _propertyDesc$1(1, next) });
	  _setToStringTag$1(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject$1 = function (it) {
	  return Object(_defined$1(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$5 = _sharedKey$1('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo$1 = Object.getPrototypeOf || function (O) {
	  O = _toObject$1(O);
	  if (_has$1(O, IE_PROTO$5)) return O[IE_PROTO$5];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	var ITERATOR$2 = _wks$1('iterator');
	var BUGGY$1 = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR$1 = '@@iterator';
	var KEYS$1 = 'keys';
	var VALUES$1 = 'values';

	var returnThis$1 = function () { return this; };

	var _iterDefine$1 = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate$1(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY$1 && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS$1: return function keys() { return new Constructor(this, kind); };
	      case VALUES$1: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES$1;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR$2] || proto[FF_ITERATOR$1] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo$1($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag$1(IteratorPrototype, TAG, true);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES$1) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if (( FORCED) && (BUGGY$1 || VALUES_BUG || !proto[ITERATOR$2])) {
	    _hide$1(proto, ITERATOR$2, $default);
	  }
	  // Plug for library
	  _iterators$1[NAME] = $default;
	  _iterators$1[TAG] = returnThis$1;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES$1),
	      keys: IS_SET ? $default : getMethod(KEYS$1),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine$1(proto, key, methods[key]);
	    } else _export$1(_export$1.P + _export$1.F * (BUGGY$1 || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine$1(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject$1(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject$1(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$3 = _wks$1('iterator');
	var ArrayProto$1 = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators$1.Array === it || ArrayProto$1[ITERATOR$3] === it);
	};

	var _createProperty$1 = function (object, index, value) {
	  if (index in object) _objectDp$1.f(object, index, _propertyDesc$1(0, value));
	  else object[index] = value;
	};

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$2 = _wks$1('toStringTag');
	// ES3 wrong here
	var ARG = _cof$1(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$2)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof$1(O)
	    // ES3 arguments fallback
	    : (B = _cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$4 = _wks$1('iterator');

	var core_getIteratorMethod = _core$1.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$4]
	    || it['@@iterator']
	    || _iterators$1[_classof(it)];
	};

	var ITERATOR$5 = _wks$1('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$5]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$5]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$5] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	_export$1(_export$1.S + _export$1.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject$1(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx$1(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty$1(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength$1(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty$1(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	var from_1 = _core$1.Array.from;

	var from_1$1 = from_1;

	var _iterStep$1 = function (done, value) {
	  return { value: value, done: !!done };
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator$1 = _iterDefine$1(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject$1(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep$1(1);
	  }
	  if (kind == 'keys') return _iterStep$1(0, index);
	  if (kind == 'values') return _iterStep$1(0, O[index]);
	  return _iterStep$1(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators$1.Arguments = _iterators$1.Array;

	var TO_STRING_TAG$1 = _wks$1('toStringTag');

	var DOMIterables$1 = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i$1 = 0; i$1 < DOMIterables$1.length; i$1++) {
	  var NAME$2 = DOMIterables$1[i$1];
	  var Collection$1 = _global$1[NAME$2];
	  var proto$1 = Collection$1 && Collection$1.prototype;
	  if (proto$1 && !proto$1[TO_STRING_TAG$1]) _hide$1(proto$1, TO_STRING_TAG$1, NAME$2);
	  _iterators$1[NAME$2] = _iterators$1.Array;
	}

	var ITERATOR$6 = _wks$1('iterator');

	var core_isIterable = _core$1.isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$6] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || _iterators$1.hasOwnProperty(_classof(O));
	};

	var isIterable = core_isIterable;

	var isIterable$1 = isIterable;

	function _iterableToArray(iter) {
	  if (isIterable$1(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return from_1$1(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	// https://github.com/tc39/Array.prototype.includes

	var $includes = _arrayIncludes(true);

	_export(_export.P, 'Array', {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	_addToUnscopables('includes');

	var INCLUDES = 'includes';

	_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~_stringContext(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	var setPrototypeOf = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
	    setPrototypeOf(that, P);
	  } return that;
	};

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var gOPN = _objectGopn.f;
	var gOPD$1 = _objectGopd.f;
	var dP$3 = _objectDp.f;
	var $trim = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto$2 = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto$2)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto$2.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key$1; keys.length > j; j++) {
	    if (_has(Base, key$1 = keys[j]) && !_has($Number, key$1)) {
	      dP$3($Number, key$1, gOPD$1(Base, key$1));
	    }
	  }
	  $Number.prototype = proto$2;
	  proto$2.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	/*!
	 * Vue.js v2.6.10
	 * (c) 2014-2019 Evan You
	 * Released under the MIT License.
	 */
	/*  */

	var emptyObject = Object.freeze({});

	// These helpers produce better VM code in JS engines due to their
	// explicitness and function inlining.
	function isUndef (v) {
	  return v === undefined || v === null
	}

	function isDef (v) {
	  return v !== undefined && v !== null
	}

	function isTrue (v) {
	  return v === true
	}

	function isFalse (v) {
	  return v === false
	}

	/**
	 * Check if value is primitive.
	 */
	function isPrimitive (value) {
	  return (
	    typeof value === 'string' ||
	    typeof value === 'number' ||
	    // $flow-disable-line
	    typeof value === 'symbol' ||
	    typeof value === 'boolean'
	  )
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Get the raw type string of a value, e.g., [object Object].
	 */
	var _toString = Object.prototype.toString;

	function toRawType (value) {
	  return _toString.call(value).slice(8, -1)
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
	  return _toString.call(obj) === '[object Object]'
	}

	function isRegExp (v) {
	  return _toString.call(v) === '[object RegExp]'
	}

	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
	  var n = parseFloat(String(val));
	  return n >= 0 && Math.floor(n) === n && isFinite(val)
	}

	function isPromise (val) {
	  return (
	    isDef(val) &&
	    typeof val.then === 'function' &&
	    typeof val.catch === 'function'
	  )
	}

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString$2 (val) {
	  return val == null
	    ? ''
	    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert an input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber$1 (val) {
	  var n = parseFloat(val);
	  return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Check if an attribute is a reserved attribute.
	 */
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

	/**
	 * Remove an item from an array.
	 */
	function remove (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether an object has the property.
	 */
	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty$2.call(obj, key)
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return (function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  })
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '-$1').toLowerCase()
	});

	/**
	 * Simple bind polyfill for environments that do not support it,
	 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
	 * since native bind is now performant enough in most browsers.
	 * But removing it would mean breaking code that was able to run in
	 * PhantomJS 1.x, so this must be kept for backward compatibility.
	 */

	/* istanbul ignore next */
	function polyfillBind (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }

	  boundFn._length = fn.length;
	  return boundFn
	}

	function nativeBind (fn, ctx) {
	  return fn.bind(ctx)
	}

	var bind = Function.prototype.bind
	  ? nativeBind
	  : polyfillBind;

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/* eslint-disable no-unused-vars */

	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
	 */
	function noop (a, b, c) {}

	/**
	 * Always return false.
	 */
	var no = function (a, b, c) { return false; };

	/* eslint-enable no-unused-vars */

	/**
	 * Return the same value.
	 */
	var identity = function (_) { return _; };

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  if (a === b) { return true }
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    try {
	      var isArrayA = Array.isArray(a);
	      var isArrayB = Array.isArray(b);
	      if (isArrayA && isArrayB) {
	        return a.length === b.length && a.every(function (e, i) {
	          return looseEqual(e, b[i])
	        })
	      } else if (a instanceof Date && b instanceof Date) {
	        return a.getTime() === b.getTime()
	      } else if (!isArrayA && !isArrayB) {
	        var keysA = Object.keys(a);
	        var keysB = Object.keys(b);
	        return keysA.length === keysB.length && keysA.every(function (key) {
	          return looseEqual(a[key], b[key])
	        })
	      } else {
	        /* istanbul ignore next */
	        return false
	      }
	    } catch (e) {
	      /* istanbul ignore next */
	      return false
	    }
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b)
	  } else {
	    return false
	  }
	}

	/**
	 * Return the first index at which a loosely equal value can be
	 * found in the array (if value is a plain object, the array must
	 * contain an object of the same shape), or -1 if it is not present.
	 */
	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn.apply(this, arguments);
	    }
	  }
	}

	var SSR_ATTR = 'data-server-rendered';

	var ASSET_TYPES = [
	  'component',
	  'directive',
	  'filter'
	];

	var LIFECYCLE_HOOKS = [
	  'beforeCreate',
	  'created',
	  'beforeMount',
	  'mounted',
	  'beforeUpdate',
	  'updated',
	  'beforeDestroy',
	  'destroyed',
	  'activated',
	  'deactivated',
	  'errorCaptured',
	  'serverPrefetch'
	];

	/*  */



	var config = ({
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  // $flow-disable-line
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Show production mode tip message on boot?
	   */
	  productionTip: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Whether to record perf
	   */
	  performance: false,

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Warn handler for watcher warns
	   */
	  warnHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  // $flow-disable-line
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if an attribute is reserved so that it cannot be used as a component
	   * prop. This is platform-dependent and may be overwritten.
	   */
	  isReservedAttr: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * Perform updates asynchronously. Intended to be used by Vue Test Utils
	   * This will significantly reduce performance if set to false.
	   */
	  async: true,

	  /**
	   * Exposed for legacy reasons
	   */
	  _lifecycleHooks: LIFECYCLE_HOOKS
	});

	/*  */

	/**
	 * unicode letters used for parsing html tags, component names and property paths.
	 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
	 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
	 */
	var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def$2 (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  }
	  var segments = path.split('.');
	  return function (obj) {
	    for (var i = 0; i < segments.length; i++) {
	      if (!obj) { return }
	      obj = obj[segments[i]];
	    }
	    return obj
	  }
	}

	/*  */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
	var isPhantomJS = UA && /phantomjs/.test(UA);
	var isFF = UA && UA.match(/firefox\/(\d+)/);

	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;

	var supportsPassive = false;
	if (inBrowser) {
	  try {
	    var opts = {};
	    Object.defineProperty(opts, 'passive', ({
	      get: function get () {
	        /* istanbul ignore next */
	        supportsPassive = true;
	      }
	    })); // https://github.com/facebook/flow/issues/285
	    window.addEventListener('test-passive', null, opts);
	  } catch (e) {}
	}

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function () {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}

	var hasSymbol =
	  typeof Symbol !== 'undefined' && isNative(Symbol) &&
	  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = /*@__PURE__*/(function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] === true
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/*  */

	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';
	  var classifyRE = /(?:^|[-_])(\w)/g;
	  var classify = function (str) { return str
	    .replace(classifyRE, function (c) { return c.toUpperCase(); })
	    .replace(/[-_]/g, ''); };

	  warn = function (msg, vm) {
	    var trace = vm ? generateComponentTrace(vm) : '';

	    if (config.warnHandler) {
	      config.warnHandler.call(null, msg, vm, trace);
	    } else if (hasConsole && (!config.silent)) {
	      console.error(("[Vue warn]: " + msg + trace));
	    }
	  };

	  tip = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.warn("[Vue tip]: " + msg + (
	        vm ? generateComponentTrace(vm) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm, includeFile) {
	    if (vm.$root === vm) {
	      return '<Root>'
	    }
	    var options = typeof vm === 'function' && vm.cid != null
	      ? vm.options
	      : vm._isVue
	        ? vm.$options || vm.constructor.options
	        : vm;
	    var name = options.name || options._componentTag;
	    var file = options.__file;
	    if (!name && file) {
	      var match = file.match(/([^/\\]+)\.vue$/);
	      name = match && match[1];
	    }

	    return (
	      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
	      (file && includeFile !== false ? (" at " + file) : '')
	    )
	  };

	  var repeat = function (str, n) {
	    var res = '';
	    while (n) {
	      if (n % 2 === 1) { res += str; }
	      if (n > 1) { str += str; }
	      n >>= 1;
	    }
	    return res
	  };

	  generateComponentTrace = function (vm) {
	    if (vm._isVue && vm.$parent) {
	      var tree = [];
	      var currentRecursiveSequence = 0;
	      while (vm) {
	        if (tree.length > 0) {
	          var last = tree[tree.length - 1];
	          if (last.constructor === vm.constructor) {
	            currentRecursiveSequence++;
	            vm = vm.$parent;
	            continue
	          } else if (currentRecursiveSequence > 0) {
	            tree[tree.length - 1] = [last, currentRecursiveSequence];
	            currentRecursiveSequence = 0;
	          }
	        }
	        tree.push(vm);
	        vm = vm.$parent;
	      }
	      return '\n\nfound in\n\n' + tree
	        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
	            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
	            : formatComponentName(vm))); })
	        .join('\n')
	    } else {
	      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
	    }
	  };
	}

	/*  */

	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stabilize the subscriber list first
	  var subs = this.subs.slice();
	  if (process.env.NODE_ENV !== 'production' && !config.async) {
	    // subs aren't sorted in scheduler if not running async
	    // we need to sort them now to make sure they fire in correct
	    // order
	    subs.sort(function (a, b) { return a.id - b.id; });
	  }
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// The current target watcher being evaluated.
	// This is globally unique because only one watcher
	// can be evaluated at a time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (target) {
	  targetStack.push(target);
	  Dep.target = target;
	}

	function popTarget () {
	  targetStack.pop();
	  Dep.target = targetStack[targetStack.length - 1];
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  context,
	  componentOptions,
	  asyncFactory
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.fnContext = undefined;
	  this.fnOptions = undefined;
	  this.fnScopeId = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.componentInstance = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	  this.asyncFactory = asyncFactory;
	  this.asyncMeta = undefined;
	  this.isAsyncPlaceholder = false;
	};

	var prototypeAccessors = { child: { configurable: true } };

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
	  return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function (text) {
	  if ( text === void 0 ) text = '';

	  var node = new VNode();
	  node.text = text;
	  node.isComment = true;
	  return node
	};

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    // #7975
	    // clone children array to avoid mutating original in case of cloning
	    // a child.
	    vnode.children && vnode.children.slice(),
	    vnode.text,
	    vnode.elm,
	    vnode.context,
	    vnode.componentOptions,
	    vnode.asyncFactory
	  );
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isComment = vnode.isComment;
	  cloned.fnContext = vnode.fnContext;
	  cloned.fnOptions = vnode.fnOptions;
	  cloned.fnScopeId = vnode.fnScopeId;
	  cloned.asyncMeta = vnode.asyncMeta;
	  cloned.isCloned = true;
	  return cloned
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);

	var methodsToPatch = [
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	];

	/**
	 * Intercept mutating methods and emit events
	 */
	methodsToPatch.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def$2(arrayMethods, method, function mutator () {
	    var args = [], len = arguments.length;
	    while ( len-- ) args[ len ] = arguments[ len ];

	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * In some cases we may want to disable observation inside a component's
	 * update computation.
	 */
	var shouldObserve = true;

	function toggleObserving (value) {
	  shouldObserve = value;
	}

	/**
	 * Observer class that is attached to each observed
	 * object. Once attached, the observer converts the target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatch updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def$2(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    if (hasProto) {
	      protoAugment(value, arrayMethods);
	    } else {
	      copyAugment(value, arrayMethods, arrayKeys);
	    }
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through all properties and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment a target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment a target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def$2(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
	  if (!isObject(value) || value instanceof VNode) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    shouldObserve &&
	    !isServerRendering() &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter,
	  shallow
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	  if ((!getter || setter) && arguments.length === 2) {
	    val = obj[key];
	  }

	  var childOb = !shallow && observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	          if (Array.isArray(value)) {
	            dependArray(value);
	          }
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || (newVal !== newVal && value !== value)) {
	        return
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      // #7981: for accessor properties without setter
	      if (getter && !setter) { return }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = !shallow && observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
	  if (process.env.NODE_ENV !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.length = Math.max(target.length, key);
	    target.splice(key, 1, val);
	    return val
	  }
	  if (key in target && !(key in Object.prototype)) {
	    target[key] = val;
	    return val
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return val
	  }
	  if (!ob) {
	    target[key] = val;
	    return val
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
	  if (process.env.NODE_ENV !== 'production' &&
	    (isUndef(target) || isPrimitive(target))
	  ) {
	    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
	  }
	  if (Array.isArray(target) && isValidArrayIndex(key)) {
	    target.splice(key, 1);
	    return
	  }
	  var ob = (target).__ob__;
	  if (target._isVue || (ob && ob.vmCount)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(target, key)) {
	    return
	  }
	  delete target[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  if (!from) { return to }
	  var key, toVal, fromVal;

	  var keys = hasSymbol
	    ? Reflect.ownKeys(from)
	    : Object.keys(from);

	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    // in case the object is already observed...
	    if (key === '__ob__') { continue }
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (
	      toVal !== fromVal &&
	      isPlainObject(toVal) &&
	      isPlainObject(fromVal)
	    ) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	function mergeDataOrFn (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
	        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
	      )
	    }
	  } else {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm, vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm, vm)
	        : parentVal;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}

	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    if (childVal && typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );

	      return parentVal
	    }
	    return mergeDataOrFn(parentVal, childVal)
	  }

	  return mergeDataOrFn(parentVal, childVal, vm)
	};

	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  var res = childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal;
	  return res
	    ? dedupeHooks(res)
	    : res
	}

	function dedupeHooks (hooks) {
	  var res = [];
	  for (var i = 0; i < hooks.length; i++) {
	    if (res.indexOf(hooks[i]) === -1) {
	      res.push(hooks[i]);
	    }
	  }
	  return res
	}

	LIFECYCLE_HOOKS.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  var res = Object.create(parentVal || null);
	  if (childVal) {
	    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm);
	    return extend(res, childVal)
	  } else {
	    return res
	  }
	}

	ASSET_TYPES.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  // work around Firefox's Object.prototype.watch...
	  if (parentVal === nativeWatch) { parentVal = undefined; }
	  if (childVal === nativeWatch) { childVal = undefined; }
	  /* istanbul ignore if */
	  if (!childVal) { return Object.create(parentVal || null) }
	  if (process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key$1 in childVal) {
	    var parent = ret[key$1];
	    var child = childVal[key$1];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key$1] = parent
	      ? parent.concat(child)
	      : Array.isArray(child) ? child : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.inject =
	strats.computed = function (
	  parentVal,
	  childVal,
	  vm,
	  key
	) {
	  if (childVal && process.env.NODE_ENV !== 'production') {
	    assertObjectType(key, childVal, vm);
	  }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  if (childVal) { extend(ret, childVal); }
	  return ret
	};
	strats.provide = mergeDataOrFn;

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    validateComponentName(key);
	  }
	}

	function validateComponentName (name) {
	  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
	    warn(
	      'Invalid component name: "' + name + '". Component names ' +
	      'should conform to valid custom element name in html5 specification.'
	    );
	  }
	  if (isBuiltInTag(name) || config.isReservedTag(name)) {
	    warn(
	      'Do not use built-in or reserved HTML elements as component ' +
	      'id: ' + name
	    );
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn(
	      "Invalid value for option \"props\": expected an Array or an Object, " +
	      "but got " + (toRawType(props)) + ".",
	      vm
	    );
	  }
	  options.props = res;
	}

	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
	  var inject = options.inject;
	  if (!inject) { return }
	  var normalized = options.inject = {};
	  if (Array.isArray(inject)) {
	    for (var i = 0; i < inject.length; i++) {
	      normalized[inject[i]] = { from: inject[i] };
	    }
	  } else if (isPlainObject(inject)) {
	    for (var key in inject) {
	      var val = inject[key];
	      normalized[key] = isPlainObject(val)
	        ? extend({ from: key }, val)
	        : { from: val };
	    }
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn(
	      "Invalid value for option \"inject\": expected an Array or an Object, " +
	      "but got " + (toRawType(inject)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def$$1 = dirs[key];
	      if (typeof def$$1 === 'function') {
	        dirs[key] = { bind: def$$1, update: def$$1 };
	      }
	    }
	  }
	}

	function assertObjectType (name, value, vm) {
	  if (!isPlainObject(value)) {
	    warn(
	      "Invalid value for option \"" + name + "\": expected an Object, " +
	      "but got " + (toRawType(value)) + ".",
	      vm
	    );
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }

	  if (typeof child === 'function') {
	    child = child.options;
	  }

	  normalizeProps(child, vm);
	  normalizeInject(child, vm);
	  normalizeDirectives(child);

	  // Apply extends and mixins on the child options,
	  // but only if it is a raw options object that isn't
	  // the result of another mergeOptions call.
	  // Only merged options has the _base property.
	  if (!child._base) {
	    if (child.extends) {
	      parent = mergeOptions(parent, child.extends, vm);
	    }
	    if (child.mixins) {
	      for (var i = 0, l = child.mixins.length; i < l; i++) {
	        parent = mergeOptions(parent, child.mixins[i], vm);
	      }
	    }
	  }

	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) { return assets[id] }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */



	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // boolean casting
	  var booleanIndex = getTypeIndex(Boolean, prop.type);
	  if (booleanIndex > -1) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      // only cast empty string / same name to boolean if
	      // boolean has higher priority
	      var stringIndex = getTypeIndex(String, prop.type);
	      if (stringIndex < 0 || booleanIndex < stringIndex) {
	        value = true;
	      }
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldObserve = shouldObserve;
	    toggleObserving(true);
	    observe(value);
	    toggleObserving(prevShouldObserve);
	  }
	  if (
	    process.env.NODE_ENV !== 'production' &&
	    // skip validation for weex recycle-list child component props
	    !(false)
	  ) {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
	    warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm._props[key] !== undefined
	  ) {
	    return vm._props[key]
	  }
	  // call factory function for non-Function types
	  // a value is Function if its prototype is function even across different execution context
	  return typeof def === 'function' && getType(prop.type) !== 'Function'
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }

	  if (!valid) {
	    warn(
	      getInvalidTypeMessage(name, value, expectedTypes),
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (simpleCheckRE.test(expectedType)) {
	    var t = typeof value;
	    valid = t === expectedType.toLowerCase();
	    // for primitive wrapper objects
	    if (!valid && t === 'object') {
	      valid = value instanceof type;
	    }
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match ? match[1] : ''
	}

	function isSameType (a, b) {
	  return getType(a) === getType(b)
	}

	function getTypeIndex (type, expectedTypes) {
	  if (!Array.isArray(expectedTypes)) {
	    return isSameType(expectedTypes, type) ? 0 : -1
	  }
	  for (var i = 0, len = expectedTypes.length; i < len; i++) {
	    if (isSameType(expectedTypes[i], type)) {
	      return i
	    }
	  }
	  return -1
	}

	function getInvalidTypeMessage (name, value, expectedTypes) {
	  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
	    " Expected " + (expectedTypes.map(capitalize).join(', '));
	  var expectedType = expectedTypes[0];
	  var receivedType = toRawType(value);
	  var expectedValue = styleValue(value, expectedType);
	  var receivedValue = styleValue(value, receivedType);
	  // check if we need to specify expected value
	  if (expectedTypes.length === 1 &&
	      isExplicable(expectedType) &&
	      !isBoolean(expectedType, receivedType)) {
	    message += " with value " + expectedValue;
	  }
	  message += ", got " + receivedType + " ";
	  // check if we need to specify received value
	  if (isExplicable(receivedType)) {
	    message += "with value " + receivedValue + ".";
	  }
	  return message
	}

	function styleValue (value, type) {
	  if (type === 'String') {
	    return ("\"" + value + "\"")
	  } else if (type === 'Number') {
	    return ("" + (Number(value)))
	  } else {
	    return ("" + value)
	  }
	}

	function isExplicable (value) {
	  var explicitTypes = ['string', 'number', 'boolean'];
	  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
	}

	function isBoolean () {
	  var args = [], len = arguments.length;
	  while ( len-- ) args[ len ] = arguments[ len ];

	  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
	}

	/*  */

	function handleError (err, vm, info) {
	  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
	  // See: https://github.com/vuejs/vuex/issues/1505
	  pushTarget();
	  try {
	    if (vm) {
	      var cur = vm;
	      while ((cur = cur.$parent)) {
	        var hooks = cur.$options.errorCaptured;
	        if (hooks) {
	          for (var i = 0; i < hooks.length; i++) {
	            try {
	              var capture = hooks[i].call(cur, err, vm, info) === false;
	              if (capture) { return }
	            } catch (e) {
	              globalHandleError(e, cur, 'errorCaptured hook');
	            }
	          }
	        }
	      }
	    }
	    globalHandleError(err, vm, info);
	  } finally {
	    popTarget();
	  }
	}

	function invokeWithErrorHandling (
	  handler,
	  context,
	  args,
	  vm,
	  info
	) {
	  var res;
	  try {
	    res = args ? handler.apply(context, args) : handler.call(context);
	    if (res && !res._isVue && isPromise(res) && !res._handled) {
	      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
	      // issue #9511
	      // avoid catch triggering multiple times when nested calls
	      res._handled = true;
	    }
	  } catch (e) {
	    handleError(e, vm, info);
	  }
	  return res
	}

	function globalHandleError (err, vm, info) {
	  if (config.errorHandler) {
	    try {
	      return config.errorHandler.call(null, err, vm, info)
	    } catch (e) {
	      // if the user intentionally throws the original error in the handler,
	      // do not log it twice
	      if (e !== err) {
	        logError(e, null, 'config.errorHandler');
	      }
	    }
	  }
	  logError(err, vm, info);
	}

	function logError (err, vm, info) {
	  if (process.env.NODE_ENV !== 'production') {
	    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
	  }
	  /* istanbul ignore else */
	  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
	    console.error(err);
	  } else {
	    throw err
	  }
	}

	/*  */

	var isUsingMicroTask = false;

	var callbacks = [];
	var pending = false;

	function flushCallbacks () {
	  pending = false;
	  var copies = callbacks.slice(0);
	  callbacks.length = 0;
	  for (var i = 0; i < copies.length; i++) {
	    copies[i]();
	  }
	}

	// Here we have async deferring wrappers using microtasks.
	// In 2.5 we used (macro) tasks (in combination with microtasks).
	// However, it has subtle problems when state is changed right before repaint
	// (e.g. #6813, out-in transitions).
	// Also, using (macro) tasks in event handler would cause some weird behaviors
	// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
	// So we now use microtasks everywhere, again.
	// A major drawback of this tradeoff is that there are some scenarios
	// where microtasks have too high a priority and fire in between supposedly
	// sequential events (e.g. #4521, #6690, which have workarounds)
	// or even between bubbling of the same event (#6566).
	var timerFunc;

	// The nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
	  var p = Promise.resolve();
	  timerFunc = function () {
	    p.then(flushCallbacks);
	    // In problematic UIWebViews, Promise.then doesn't completely break, but
	    // it can get stuck in a weird state where callbacks are pushed into the
	    // microtask queue but the queue isn't being flushed, until the browser
	    // needs to do some other work, e.g. handle a timer. Therefore we can
	    // "force" the microtask queue to be flushed by adding an empty timer.
	    if (isIOS) { setTimeout(noop); }
	  };
	  isUsingMicroTask = true;
	} else if (!isIE && typeof MutationObserver !== 'undefined' && (
	  isNative(MutationObserver) ||
	  // PhantomJS and iOS 7.x
	  MutationObserver.toString() === '[object MutationObserverConstructor]'
	)) {
	  // Use MutationObserver where native Promise is not available,
	  // e.g. PhantomJS, iOS7, Android 4.4
	  // (#6466 MutationObserver is unreliable in IE11)
	  var counter = 1;
	  var observer = new MutationObserver(flushCallbacks);
	  var textNode = document.createTextNode(String(counter));
	  observer.observe(textNode, {
	    characterData: true
	  });
	  timerFunc = function () {
	    counter = (counter + 1) % 2;
	    textNode.data = String(counter);
	  };
	  isUsingMicroTask = true;
	} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
	  // Fallback to setImmediate.
	  // Techinically it leverages the (macro) task queue,
	  // but it is still a better choice than setTimeout.
	  timerFunc = function () {
	    setImmediate(flushCallbacks);
	  };
	} else {
	  // Fallback to setTimeout.
	  timerFunc = function () {
	    setTimeout(flushCallbacks, 0);
	  };
	}

	function nextTick (cb, ctx) {
	  var _resolve;
	  callbacks.push(function () {
	    if (cb) {
	      try {
	        cb.call(ctx);
	      } catch (e) {
	        handleError(e, ctx, 'nextTick');
	      }
	    } else if (_resolve) {
	      _resolve(ctx);
	    }
	  });
	  if (!pending) {
	    pending = true;
	    timerFunc();
	  }
	  // $flow-disable-line
	  if (!cb && typeof Promise !== 'undefined') {
	    return new Promise(function (resolve) {
	      _resolve = resolve;
	    })
	  }
	}

	/*  */

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function (target, key) {
	    warn(
	      "Property or method \"" + key + "\" is not defined on the instance but " +
	      'referenced during render. Make sure that this property is reactive, ' +
	      'either in the data option, or for class-based components, by ' +
	      'initializing the property. ' +
	      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
	      target
	    );
	  };

	  var warnReservedPrefix = function (target, key) {
	    warn(
	      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
	      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
	      'prevent conflicts with Vue internals' +
	      'See: https://vuejs.org/v2/api/#data',
	      target
	    );
	  };

	  var hasProxy =
	    typeof Proxy !== 'undefined' && isNative(Proxy);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set (target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
	          return false
	        } else {
	          target[key] = value;
	          return true
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) ||
	        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
	      if (!has && !isAllowed) {
	        if (key in target.$data) { warnReservedPrefix(target, key); }
	        else { warnNonPresent(target, key); }
	      }
	      return has || !isAllowed
	    }
	  };

	  var getHandler = {
	    get: function get (target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        if (key in target.$data) { warnReservedPrefix(target, key); }
	        else { warnNonPresent(target, key); }
	      }
	      return target[key]
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped
	        ? getHandler
	        : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var seenObjects = new _Set();

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	function traverse (val) {
	  _traverse(val, seenObjects);
	  seenObjects.clear();
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	var mark;
	var measure;

	if (process.env.NODE_ENV !== 'production') {
	  var perf = inBrowser && window.performance;
	  /* istanbul ignore if */
	  if (
	    perf &&
	    perf.mark &&
	    perf.measure &&
	    perf.clearMarks &&
	    perf.clearMeasures
	  ) {
	    mark = function (tag) { return perf.mark(tag); };
	    measure = function (name, startTag, endTag) {
	      perf.measure(name, startTag, endTag);
	      perf.clearMarks(startTag);
	      perf.clearMarks(endTag);
	      // perf.clearMeasures(name)
	    };
	  }
	}

	/*  */

	var normalizeEvent = cached(function (name) {
	  var passive = name.charAt(0) === '&';
	  name = passive ? name.slice(1) : name;
	  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
	  name = once$$1 ? name.slice(1) : name;
	  var capture = name.charAt(0) === '!';
	  name = capture ? name.slice(1) : name;
	  return {
	    name: name,
	    once: once$$1,
	    capture: capture,
	    passive: passive
	  }
	});

	function createFnInvoker (fns, vm) {
	  function invoker () {
	    var arguments$1 = arguments;

	    var fns = invoker.fns;
	    if (Array.isArray(fns)) {
	      var cloned = fns.slice();
	      for (var i = 0; i < cloned.length; i++) {
	        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
	      }
	    } else {
	      // return handler return value for single handlers
	      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
	    }
	  }
	  invoker.fns = fns;
	  return invoker
	}

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  createOnceHandler,
	  vm
	) {
	  var name, def$$1, cur, old, event;
	  for (name in on) {
	    def$$1 = cur = on[name];
	    old = oldOn[name];
	    event = normalizeEvent(name);
	    if (isUndef(cur)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
	        vm
	      );
	    } else if (isUndef(old)) {
	      if (isUndef(cur.fns)) {
	        cur = on[name] = createFnInvoker(cur, vm);
	      }
	      if (isTrue(event.once)) {
	        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
	      }
	      add(event.name, cur, event.capture, event.passive, event.params);
	    } else if (cur !== old) {
	      old.fns = cur;
	      on[name] = old;
	    }
	  }
	  for (name in oldOn) {
	    if (isUndef(on[name])) {
	      event = normalizeEvent(name);
	      remove$$1(event.name, oldOn[name], event.capture);
	    }
	  }
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook) {
	  if (def instanceof VNode) {
	    def = def.data.hook || (def.data.hook = {});
	  }
	  var invoker;
	  var oldHook = def[hookKey];

	  function wrappedHook () {
	    hook.apply(this, arguments);
	    // important: remove merged hook to ensure it's called only once
	    // and prevent memory leak
	    remove(invoker.fns, wrappedHook);
	  }

	  if (isUndef(oldHook)) {
	    // no existing hook
	    invoker = createFnInvoker([wrappedHook]);
	  } else {
	    /* istanbul ignore if */
	    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
	      // already a merged invoker
	      invoker = oldHook;
	      invoker.fns.push(wrappedHook);
	    } else {
	      // existing plain hook
	      invoker = createFnInvoker([oldHook, wrappedHook]);
	    }
	  }

	  invoker.merged = true;
	  def[hookKey] = invoker;
	}

	/*  */

	function extractPropsFromVNodeData (
	  data,
	  Ctor,
	  tag
	) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (isUndef(propOptions)) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  if (isDef(attrs) || isDef(props)) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      if (process.env.NODE_ENV !== 'production') {
	        var keyInLowerCase = key.toLowerCase();
	        if (
	          key !== keyInLowerCase &&
	          attrs && hasOwn(attrs, keyInLowerCase)
	        ) {
	          tip(
	            "Prop \"" + keyInLowerCase + "\" is passed to component " +
	            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
	            " \"" + key + "\". " +
	            "Note that HTML attributes are case-insensitive and camelCased " +
	            "props need to use their kebab-case equivalents when using in-DOM " +
	            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
	          );
	        }
	      }
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey, false);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (isDef(hash)) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren (children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children)
	    }
	  }
	  return children
	}

	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren (children) {
	  return isPrimitive(children)
	    ? [createTextVNode(children)]
	    : Array.isArray(children)
	      ? normalizeArrayChildren(children)
	      : undefined
	}

	function isTextNode (node) {
	  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}

	function normalizeArrayChildren (children, nestedIndex) {
	  var res = [];
	  var i, c, lastIndex, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (isUndef(c) || typeof c === 'boolean') { continue }
	    lastIndex = res.length - 1;
	    last = res[lastIndex];
	    //  nested
	    if (Array.isArray(c)) {
	      if (c.length > 0) {
	        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
	        // merge adjacent text nodes
	        if (isTextNode(c[0]) && isTextNode(last)) {
	          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
	          c.shift();
	        }
	        res.push.apply(res, c);
	      }
	    } else if (isPrimitive(c)) {
	      if (isTextNode(last)) {
	        // merge adjacent text nodes
	        // this is necessary for SSR hydration because text nodes are
	        // essentially merged when rendered to HTML strings
	        res[lastIndex] = createTextVNode(last.text + c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (isTextNode(c) && isTextNode(last)) {
	        // merge adjacent text nodes
	        res[lastIndex] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (isTrue(children._isVList) &&
	          isDef(c.tag) &&
	          isUndef(c.key) &&
	          isDef(nestedIndex)) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res
	}

	/*  */

	function initProvide (vm) {
	  var provide = vm.$options.provide;
	  if (provide) {
	    vm._provided = typeof provide === 'function'
	      ? provide.call(vm)
	      : provide;
	  }
	}

	function initInjections (vm) {
	  var result = resolveInject(vm.$options.inject, vm);
	  if (result) {
	    toggleObserving(false);
	    Object.keys(result).forEach(function (key) {
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production') {
	        defineReactive$$1(vm, key, result[key], function () {
	          warn(
	            "Avoid mutating an injected value directly since the changes will be " +
	            "overwritten whenever the provided component re-renders. " +
	            "injection being mutated: \"" + key + "\"",
	            vm
	          );
	        });
	      } else {
	        defineReactive$$1(vm, key, result[key]);
	      }
	    });
	    toggleObserving(true);
	  }
	}

	function resolveInject (inject, vm) {
	  if (inject) {
	    // inject is :any because flow is not smart enough to figure out cached
	    var result = Object.create(null);
	    var keys = hasSymbol
	      ? Reflect.ownKeys(inject)
	      : Object.keys(inject);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      // #6574 in case the inject object is observed...
	      if (key === '__ob__') { continue }
	      var provideKey = inject[key].from;
	      var source = vm;
	      while (source) {
	        if (source._provided && hasOwn(source._provided, provideKey)) {
	          result[key] = source._provided[provideKey];
	          break
	        }
	        source = source.$parent;
	      }
	      if (!source) {
	        if ('default' in inject[key]) {
	          var provideDefault = inject[key].default;
	          result[key] = typeof provideDefault === 'function'
	            ? provideDefault.call(vm)
	            : provideDefault;
	        } else if (process.env.NODE_ENV !== 'production') {
	          warn(("Injection \"" + key + "\" not found"), vm);
	        }
	      }
	    }
	    return result
	  }
	}

	/*  */



	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
	  children,
	  context
	) {
	  if (!children || !children.length) {
	    return {}
	  }
	  var slots = {};
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i];
	    var data = child.data;
	    // remove slot attribute if the node is resolved as a Vue slot node
	    if (data && data.attrs && data.attrs.slot) {
	      delete data.attrs.slot;
	    }
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.fnContext === context) &&
	      data && data.slot != null
	    ) {
	      var name = data.slot;
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children || []);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      (slots.default || (slots.default = [])).push(child);
	    }
	  }
	  // ignore slots that contains only whitespace
	  for (var name$1 in slots) {
	    if (slots[name$1].every(isWhitespace)) {
	      delete slots[name$1];
	    }
	  }
	  return slots
	}

	function isWhitespace (node) {
	  return (node.isComment && !node.asyncFactory) || node.text === ' '
	}

	/*  */

	function normalizeScopedSlots (
	  slots,
	  normalSlots,
	  prevSlots
	) {
	  var res;
	  var hasNormalSlots = Object.keys(normalSlots).length > 0;
	  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
	  var key = slots && slots.$key;
	  if (!slots) {
	    res = {};
	  } else if (slots._normalized) {
	    // fast path 1: child component re-render only, parent did not change
	    return slots._normalized
	  } else if (
	    isStable &&
	    prevSlots &&
	    prevSlots !== emptyObject &&
	    key === prevSlots.$key &&
	    !hasNormalSlots &&
	    !prevSlots.$hasNormal
	  ) {
	    // fast path 2: stable scoped slots w/ no normal slots to proxy,
	    // only need to normalize once
	    return prevSlots
	  } else {
	    res = {};
	    for (var key$1 in slots) {
	      if (slots[key$1] && key$1[0] !== '$') {
	        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
	      }
	    }
	  }
	  // expose normal slots on scopedSlots
	  for (var key$2 in normalSlots) {
	    if (!(key$2 in res)) {
	      res[key$2] = proxyNormalSlot(normalSlots, key$2);
	    }
	  }
	  // avoriaz seems to mock a non-extensible $scopedSlots object
	  // and when that is passed down this would cause an error
	  if (slots && Object.isExtensible(slots)) {
	    (slots)._normalized = res;
	  }
	  def$2(res, '$stable', isStable);
	  def$2(res, '$key', key);
	  def$2(res, '$hasNormal', hasNormalSlots);
	  return res
	}

	function normalizeScopedSlot(normalSlots, key, fn) {
	  var normalized = function () {
	    var res = arguments.length ? fn.apply(null, arguments) : fn({});
	    res = res && typeof res === 'object' && !Array.isArray(res)
	      ? [res] // single vnode
	      : normalizeChildren(res);
	    return res && (
	      res.length === 0 ||
	      (res.length === 1 && res[0].isComment) // #9658
	    ) ? undefined
	      : res
	  };
	  // this is a slot using the new v-slot syntax without scope. although it is
	  // compiled as a scoped slot, render fn users would expect it to be present
	  // on this.$slots because the usage is semantically a normal slot.
	  if (fn.proxy) {
	    Object.defineProperty(normalSlots, key, {
	      get: normalized,
	      enumerable: true,
	      configurable: true
	    });
	  }
	  return normalized
	}

	function proxyNormalSlot(slots, key) {
	  return function () { return slots[key]; }
	}

	/*  */

	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
	  val,
	  render
	) {
	  var ret, i, l, keys, key;
	  if (Array.isArray(val) || typeof val === 'string') {
	    ret = new Array(val.length);
	    for (i = 0, l = val.length; i < l; i++) {
	      ret[i] = render(val[i], i);
	    }
	  } else if (typeof val === 'number') {
	    ret = new Array(val);
	    for (i = 0; i < val; i++) {
	      ret[i] = render(i + 1, i);
	    }
	  } else if (isObject(val)) {
	    if (hasSymbol && val[Symbol.iterator]) {
	      ret = [];
	      var iterator = val[Symbol.iterator]();
	      var result = iterator.next();
	      while (!result.done) {
	        ret.push(render(result.value, ret.length));
	        result = iterator.next();
	      }
	    } else {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	  }
	  if (!isDef(ret)) {
	    ret = [];
	  }
	  (ret)._isVList = true;
	  return ret
	}

	/*  */

	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
	  name,
	  fallback,
	  props,
	  bindObject
	) {
	  var scopedSlotFn = this.$scopedSlots[name];
	  var nodes;
	  if (scopedSlotFn) { // scoped slot
	    props = props || {};
	    if (bindObject) {
	      if (process.env.NODE_ENV !== 'production' && !isObject(bindObject)) {
	        warn(
	          'slot v-bind without argument expects an Object',
	          this
	        );
	      }
	      props = extend(extend({}, bindObject), props);
	    }
	    nodes = scopedSlotFn(props) || fallback;
	  } else {
	    nodes = this.$slots[name] || fallback;
	  }

	  var target = props && props.slot;
	  if (target) {
	    return this.$createElement('template', { slot: target }, nodes)
	  } else {
	    return nodes
	  }
	}

	/*  */

	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
	  return resolveAsset(this.$options, 'filters', id, true) || identity
	}

	/*  */

	function isKeyNotMatch (expect, actual) {
	  if (Array.isArray(expect)) {
	    return expect.indexOf(actual) === -1
	  } else {
	    return expect !== actual
	  }
	}

	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
	  eventKeyCode,
	  key,
	  builtInKeyCode,
	  eventKeyName,
	  builtInKeyName
	) {
	  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
	  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
	    return isKeyNotMatch(builtInKeyName, eventKeyName)
	  } else if (mappedKeyCode) {
	    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
	  } else if (eventKeyName) {
	    return hyphenate(eventKeyName) !== key
	  }
	}

	/*  */

	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
	  data,
	  tag,
	  value,
	  asProp,
	  isSync
	) {
	  if (value) {
	    if (!isObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-bind without argument expects an Object or Array value',
	        this
	      );
	    } else {
	      if (Array.isArray(value)) {
	        value = toObject(value);
	      }
	      var hash;
	      var loop = function ( key ) {
	        if (
	          key === 'class' ||
	          key === 'style' ||
	          isReservedAttribute(key)
	        ) {
	          hash = data;
	        } else {
	          var type = data.attrs && data.attrs.type;
	          hash = asProp || config.mustUseProp(tag, type, key)
	            ? data.domProps || (data.domProps = {})
	            : data.attrs || (data.attrs = {});
	        }
	        var camelizedKey = camelize(key);
	        var hyphenatedKey = hyphenate(key);
	        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
	          hash[key] = value[key];

	          if (isSync) {
	            var on = data.on || (data.on = {});
	            on[("update:" + key)] = function ($event) {
	              value[key] = $event;
	            };
	          }
	        }
	      };

	      for (var key in value) loop( key );
	    }
	  }
	  return data
	}

	/*  */

	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
	  index,
	  isInFor
	) {
	  var cached = this._staticTrees || (this._staticTrees = []);
	  var tree = cached[index];
	  // if has already-rendered static tree and not inside v-for,
	  // we can reuse the same tree.
	  if (tree && !isInFor) {
	    return tree
	  }
	  // otherwise, render a fresh tree.
	  tree = cached[index] = this.$options.staticRenderFns[index].call(
	    this._renderProxy,
	    null,
	    this // for render fns generated for functional component templates
	  );
	  markStatic(tree, ("__static__" + index), false);
	  return tree
	}

	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
	  tree,
	  index,
	  key
	) {
	  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	  return tree
	}

	function markStatic (
	  tree,
	  key,
	  isOnce
	) {
	  if (Array.isArray(tree)) {
	    for (var i = 0; i < tree.length; i++) {
	      if (tree[i] && typeof tree[i] !== 'string') {
	        markStaticNode(tree[i], (key + "_" + i), isOnce);
	      }
	    }
	  } else {
	    markStaticNode(tree, key, isOnce);
	  }
	}

	function markStaticNode (node, key, isOnce) {
	  node.isStatic = true;
	  node.key = key;
	  node.isOnce = isOnce;
	}

	/*  */

	function bindObjectListeners (data, value) {
	  if (value) {
	    if (!isPlainObject(value)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'v-on without argument expects an Object value',
	        this
	      );
	    } else {
	      var on = data.on = data.on ? extend({}, data.on) : {};
	      for (var key in value) {
	        var existing = on[key];
	        var ours = value[key];
	        on[key] = existing ? [].concat(existing, ours) : ours;
	      }
	    }
	  }
	  return data
	}

	/*  */

	function resolveScopedSlots (
	  fns, // see flow/vnode
	  res,
	  // the following are added in 2.6
	  hasDynamicKeys,
	  contentHashKey
	) {
	  res = res || { $stable: !hasDynamicKeys };
	  for (var i = 0; i < fns.length; i++) {
	    var slot = fns[i];
	    if (Array.isArray(slot)) {
	      resolveScopedSlots(slot, res, hasDynamicKeys);
	    } else if (slot) {
	      // marker for reverse proxying v-slot without scope on this.$slots
	      if (slot.proxy) {
	        slot.fn.proxy = true;
	      }
	      res[slot.key] = slot.fn;
	    }
	  }
	  if (contentHashKey) {
	    (res).$key = contentHashKey;
	  }
	  return res
	}

	/*  */

	function bindDynamicKeys (baseObj, values) {
	  for (var i = 0; i < values.length; i += 2) {
	    var key = values[i];
	    if (typeof key === 'string' && key) {
	      baseObj[values[i]] = values[i + 1];
	    } else if (process.env.NODE_ENV !== 'production' && key !== '' && key !== null) {
	      // null is a speical value for explicitly removing a binding
	      warn(
	        ("Invalid value for dynamic directive argument (expected string or null): " + key),
	        this
	      );
	    }
	  }
	  return baseObj
	}

	// helper to dynamically append modifier runtime markers to event names.
	// ensure only append when value is already string, otherwise it will be cast
	// to string and cause the type check to miss.
	function prependModifier (value, symbol) {
	  return typeof value === 'string' ? symbol + value : value
	}

	/*  */

	function installRenderHelpers (target) {
	  target._o = markOnce;
	  target._n = toNumber$1;
	  target._s = toString$2;
	  target._l = renderList;
	  target._t = renderSlot;
	  target._q = looseEqual;
	  target._i = looseIndexOf;
	  target._m = renderStatic;
	  target._f = resolveFilter;
	  target._k = checkKeyCodes;
	  target._b = bindObjectProps;
	  target._v = createTextVNode;
	  target._e = createEmptyVNode;
	  target._u = resolveScopedSlots;
	  target._g = bindObjectListeners;
	  target._d = bindDynamicKeys;
	  target._p = prependModifier;
	}

	/*  */

	function FunctionalRenderContext (
	  data,
	  props,
	  children,
	  parent,
	  Ctor
	) {
	  var this$1 = this;

	  var options = Ctor.options;
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var contextVm;
	  if (hasOwn(parent, '_uid')) {
	    contextVm = Object.create(parent);
	    // $flow-disable-line
	    contextVm._original = parent;
	  } else {
	    // the context vm passed in is a functional context as well.
	    // in this case we want to make sure we are able to get a hold to the
	    // real context instance.
	    contextVm = parent;
	    // $flow-disable-line
	    parent = parent._original;
	  }
	  var isCompiled = isTrue(options._compiled);
	  var needNormalization = !isCompiled;

	  this.data = data;
	  this.props = props;
	  this.children = children;
	  this.parent = parent;
	  this.listeners = data.on || emptyObject;
	  this.injections = resolveInject(options.inject, parent);
	  this.slots = function () {
	    if (!this$1.$slots) {
	      normalizeScopedSlots(
	        data.scopedSlots,
	        this$1.$slots = resolveSlots(children, parent)
	      );
	    }
	    return this$1.$slots
	  };

	  Object.defineProperty(this, 'scopedSlots', ({
	    enumerable: true,
	    get: function get () {
	      return normalizeScopedSlots(data.scopedSlots, this.slots())
	    }
	  }));

	  // support for compiled functional template
	  if (isCompiled) {
	    // exposing $options for renderStatic()
	    this.$options = options;
	    // pre-resolve slots for renderSlot()
	    this.$slots = this.slots();
	    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
	  }

	  if (options._scopeId) {
	    this._c = function (a, b, c, d) {
	      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
	      if (vnode && !Array.isArray(vnode)) {
	        vnode.fnScopeId = options._scopeId;
	        vnode.fnContext = parent;
	      }
	      return vnode
	    };
	  } else {
	    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
	  }
	}

	installRenderHelpers(FunctionalRenderContext.prototype);

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  contextVm,
	  children
	) {
	  var options = Ctor.options;
	  var props = {};
	  var propOptions = options.props;
	  if (isDef(propOptions)) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData || emptyObject);
	    }
	  } else {
	    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
	    if (isDef(data.props)) { mergeProps(props, data.props); }
	  }

	  var renderContext = new FunctionalRenderContext(
	    data,
	    props,
	    children,
	    contextVm,
	    Ctor
	  );

	  var vnode = options.render.call(null, renderContext._c, renderContext);

	  if (vnode instanceof VNode) {
	    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
	  } else if (Array.isArray(vnode)) {
	    var vnodes = normalizeChildren(vnode) || [];
	    var res = new Array(vnodes.length);
	    for (var i = 0; i < vnodes.length; i++) {
	      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
	    }
	    return res
	  }
	}

	function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
	  // #7817 clone node before setting fnContext, otherwise if the node is reused
	  // (e.g. it was from a cached normal slot) the fnContext causes named slots
	  // that should not be matched to match.
	  var clone = cloneVNode(vnode);
	  clone.fnContext = contextVm;
	  clone.fnOptions = options;
	  if (process.env.NODE_ENV !== 'production') {
	    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
	  }
	  if (data.slot) {
	    (clone.data || (clone.data = {})).slot = data.slot;
	  }
	  return clone
	}

	function mergeProps (to, from) {
	  for (var key in from) {
	    to[camelize(key)] = from[key];
	  }
	}

	/*  */

	/*  */

	/*  */

	/*  */

	// inline hooks to be invoked on component VNodes during patch
	var componentVNodeHooks = {
	  init: function init (vnode, hydrating) {
	    if (
	      vnode.componentInstance &&
	      !vnode.componentInstance._isDestroyed &&
	      vnode.data.keepAlive
	    ) {
	      // kept-alive components, treat as a patch
	      var mountedNode = vnode; // work around flow
	      componentVNodeHooks.prepatch(mountedNode, mountedNode);
	    } else {
	      var child = vnode.componentInstance = createComponentInstanceForVnode(
	        vnode,
	        activeInstance
	      );
	      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	    }
	  },

	  prepatch: function prepatch (oldVnode, vnode) {
	    var options = vnode.componentOptions;
	    var child = vnode.componentInstance = oldVnode.componentInstance;
	    updateChildComponent(
	      child,
	      options.propsData, // updated props
	      options.listeners, // updated listeners
	      vnode, // new parent vnode
	      options.children // new children
	    );
	  },

	  insert: function insert (vnode) {
	    var context = vnode.context;
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isMounted) {
	      componentInstance._isMounted = true;
	      callHook(componentInstance, 'mounted');
	    }
	    if (vnode.data.keepAlive) {
	      if (context._isMounted) {
	        // vue-router#1212
	        // During updates, a kept-alive component's child components may
	        // change, so directly walking the tree here may call activated hooks
	        // on incorrect children. Instead we push them into a queue which will
	        // be processed after the whole patch process ended.
	        queueActivatedComponent(componentInstance);
	      } else {
	        activateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  },

	  destroy: function destroy (vnode) {
	    var componentInstance = vnode.componentInstance;
	    if (!componentInstance._isDestroyed) {
	      if (!vnode.data.keepAlive) {
	        componentInstance.$destroy();
	      } else {
	        deactivateChildComponent(componentInstance, true /* direct */);
	      }
	    }
	  }
	};

	var hooksToMerge = Object.keys(componentVNodeHooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (isUndef(Ctor)) {
	    return
	  }

	  var baseCtor = context.$options._base;

	  // plain options object: turn it into a constructor
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  // if at this stage it's not a constructor or an async component factory,
	  // reject.
	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // async component
	  var asyncFactory;
	  if (isUndef(Ctor.cid)) {
	    asyncFactory = Ctor;
	    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
	    if (Ctor === undefined) {
	      // return a placeholder node for async component, which is rendered
	      // as a comment node but preserves all the raw information for the node.
	      // the information will be used for async server-rendering and hydration.
	      return createAsyncPlaceholder(
	        asyncFactory,
	        data,
	        context,
	        children,
	        tag
	      )
	    }
	  }

	  data = data || {};

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // transform component v-model data into props & events
	  if (isDef(data.model)) {
	    transformModel(Ctor.options, data);
	  }

	  // extract props
	  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

	  // functional component
	  if (isTrue(Ctor.options.functional)) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  // so it gets processed during parent component patch.
	  data.on = data.nativeOn;

	  if (isTrue(Ctor.options.abstract)) {
	    // abstract components do not keep anything
	    // other than props & listeners & slot

	    // work around flow
	    var slot = data.slot;
	    data = {};
	    if (slot) {
	      data.slot = slot;
	    }
	  }

	  // install component management hooks onto the placeholder node
	  installComponentHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
	    asyncFactory
	  );

	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var options = {
	    _isComponent: true,
	    _parentVnode: vnode,
	    parent: parent
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (isDef(inlineTemplate)) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnode.componentOptions.Ctor(options)
	}

	function installComponentHooks (data) {
	  var hooks = data.hook || (data.hook = {});
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var existing = hooks[key];
	    var toMerge = componentVNodeHooks[key];
	    if (existing !== toMerge && !(existing && existing._merged)) {
	      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
	    }
	  }
	}

	function mergeHook$1 (f1, f2) {
	  var merged = function (a, b) {
	    // flow complains about extra args which is why we use any
	    f1(a, b);
	    f2(a, b);
	  };
	  merged._merged = true;
	  return merged
	}

	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
	  var prop = (options.model && options.model.prop) || 'value';
	  var event = (options.model && options.model.event) || 'input'
	  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
	  var on = data.on || (data.on = {});
	  var existing = on[event];
	  var callback = data.model.callback;
	  if (isDef(existing)) {
	    if (
	      Array.isArray(existing)
	        ? existing.indexOf(callback) === -1
	        : existing !== callback
	    ) {
	      on[event] = [callback].concat(existing);
	    }
	  } else {
	    on[event] = callback;
	  }
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType,
	  alwaysNormalize
	) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (isTrue(alwaysNormalize)) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children,
	  normalizationType
	) {
	  if (isDef(data) && isDef((data).__ob__)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return createEmptyVNode()
	  }
	  // object syntax in v-bind
	  if (isDef(data) && isDef(data.is)) {
	    tag = data.is;
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode()
	  }
	  // warn against non-primitive key
	  if (process.env.NODE_ENV !== 'production' &&
	    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
	  ) {
	    {
	      warn(
	        'Avoid using non-primitive value as key, ' +
	        'use string/number value instead.',
	        context
	      );
	    }
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) &&
	    typeof children[0] === 'function'
	  ) {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(
	        config.parsePlatformTagName(tag), data, children,
	        undefined, undefined, context
	      );
	    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(
	        tag, data, children,
	        undefined, undefined, context
	      );
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (Array.isArray(vnode)) {
	    return vnode
	  } else if (isDef(vnode)) {
	    if (isDef(ns)) { applyNS(vnode, ns); }
	    if (isDef(data)) { registerDeepBindings(data); }
	    return vnode
	  } else {
	    return createEmptyVNode()
	  }
	}

	function applyNS (vnode, ns, force) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    ns = undefined;
	    force = true;
	  }
	  if (isDef(vnode.children)) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (isDef(child.tag) && (
	        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
	        applyNS(child, ns, force);
	      }
	    }
	  }
	}

	// ref #5318
	// necessary to ensure parent re-render when deep bindings like :style and
	// :class are used on slot nodes
	function registerDeepBindings (data) {
	  if (isObject(data.style)) {
	    traverse(data.style);
	  }
	  if (isObject(data.class)) {
	    traverse(data.class);
	  }
	}

	/*  */

	function initRender (vm) {
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null; // v-once cached trees
	  var options = vm.$options;
	  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(options._renderChildren, renderContext);
	  vm.$scopedSlots = emptyObject;
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

	  // $attrs & $listeners are exposed for easier HOC creation.
	  // they need to be reactive so that HOCs using them are always updated
	  var parentData = parentVnode && parentVnode.data;

	  /* istanbul ignore else */
	  if (process.env.NODE_ENV !== 'production') {
	    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
	    }, true);
	    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
	      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
	    }, true);
	  } else {
	    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
	    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
	  }
	}

	var currentRenderingInstance = null;

	function renderMixin (Vue) {
	  // install runtime convenience helpers
	  installRenderHelpers(Vue.prototype);

	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this)
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var _parentVnode = ref._parentVnode;

	    if (_parentVnode) {
	      vm.$scopedSlots = normalizeScopedSlots(
	        _parentVnode.data.scopedSlots,
	        vm.$slots,
	        vm.$scopedSlots
	      );
	    }

	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      // There's no need to maintain a stack becaues all render fns are called
	      // separately from one another. Nested component's render fns are called
	      // when parent component is patched.
	      currentRenderingInstance = vm;
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      handleError(e, vm, "render");
	      // return error render result,
	      // or previous vnode to prevent render error causing blank component
	      /* istanbul ignore else */
	      if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {
	        try {
	          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
	        } catch (e) {
	          handleError(e, vm, "renderError");
	          vnode = vm._vnode;
	        }
	      } else {
	        vnode = vm._vnode;
	      }
	    } finally {
	      currentRenderingInstance = null;
	    }
	    // if the returned array contains only a single node, allow it
	    if (Array.isArray(vnode) && vnode.length === 1) {
	      vnode = vnode[0];
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };
	}

	/*  */

	function ensureCtor (comp, base) {
	  if (
	    comp.__esModule ||
	    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
	  ) {
	    comp = comp.default;
	  }
	  return isObject(comp)
	    ? base.extend(comp)
	    : comp
	}

	function createAsyncPlaceholder (
	  factory,
	  data,
	  context,
	  children,
	  tag
	) {
	  var node = createEmptyVNode();
	  node.asyncFactory = factory;
	  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
	  return node
	}

	function resolveAsyncComponent (
	  factory,
	  baseCtor
	) {
	  if (isTrue(factory.error) && isDef(factory.errorComp)) {
	    return factory.errorComp
	  }

	  if (isDef(factory.resolved)) {
	    return factory.resolved
	  }

	  var owner = currentRenderingInstance;
	  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
	    // already pending
	    factory.owners.push(owner);
	  }

	  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
	    return factory.loadingComp
	  }

	  if (owner && !isDef(factory.owners)) {
	    var owners = factory.owners = [owner];
	    var sync = true;
	    var timerLoading = null;
	    var timerTimeout = null

	    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

	    var forceRender = function (renderCompleted) {
	      for (var i = 0, l = owners.length; i < l; i++) {
	        (owners[i]).$forceUpdate();
	      }

	      if (renderCompleted) {
	        owners.length = 0;
	        if (timerLoading !== null) {
	          clearTimeout(timerLoading);
	          timerLoading = null;
	        }
	        if (timerTimeout !== null) {
	          clearTimeout(timerTimeout);
	          timerTimeout = null;
	        }
	      }
	    };

	    var resolve = once(function (res) {
	      // cache resolved
	      factory.resolved = ensureCtor(res, baseCtor);
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        forceRender(true);
	      } else {
	        owners.length = 0;
	      }
	    });

	    var reject = once(function (reason) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	      if (isDef(factory.errorComp)) {
	        factory.error = true;
	        forceRender(true);
	      }
	    });

	    var res = factory(resolve, reject);

	    if (isObject(res)) {
	      if (isPromise(res)) {
	        // () => Promise
	        if (isUndef(factory.resolved)) {
	          res.then(resolve, reject);
	        }
	      } else if (isPromise(res.component)) {
	        res.component.then(resolve, reject);

	        if (isDef(res.error)) {
	          factory.errorComp = ensureCtor(res.error, baseCtor);
	        }

	        if (isDef(res.loading)) {
	          factory.loadingComp = ensureCtor(res.loading, baseCtor);
	          if (res.delay === 0) {
	            factory.loading = true;
	          } else {
	            timerLoading = setTimeout(function () {
	              timerLoading = null;
	              if (isUndef(factory.resolved) && isUndef(factory.error)) {
	                factory.loading = true;
	                forceRender(false);
	              }
	            }, res.delay || 200);
	          }
	        }

	        if (isDef(res.timeout)) {
	          timerTimeout = setTimeout(function () {
	            timerTimeout = null;
	            if (isUndef(factory.resolved)) {
	              reject(
	                process.env.NODE_ENV !== 'production'
	                  ? ("timeout (" + (res.timeout) + "ms)")
	                  : null
	              );
	            }
	          }, res.timeout);
	        }
	      }
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.loading
	      ? factory.loadingComp
	      : factory.resolved
	  }
	}

	/*  */

	function isAsyncPlaceholder (node) {
	  return node.isComment && node.asyncFactory
	}

	/*  */

	function getFirstComponentChild (children) {
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      var c = children[i];
	      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
	        return c
	      }
	    }
	  }
	}

	/*  */

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add (event, fn) {
	  target.$on(event, fn);
	}

	function remove$1 (event, fn) {
	  target.$off(event, fn);
	}

	function createOnceHandler (event, fn) {
	  var _target = target;
	  return function onceHandler () {
	    var res = fn.apply(null, arguments);
	    if (res !== null) {
	      _target.$off(event, onceHandler);
	    }
	  }
	}

	function updateComponentListeners (
	  vm,
	  listeners,
	  oldListeners
	) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
	  target = undefined;
	}

	function eventsMixin (Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;
	    if (Array.isArray(event)) {
	      for (var i = 0, l = event.length; i < l; i++) {
	        vm.$on(event[i], fn);
	      }
	    } else {
	      (vm._events[event] || (vm._events[event] = [])).push(fn);
	      // optimize hook:event cost by using a boolean flag marked at registration
	      // instead of a hash lookup
	      if (hookRE.test(event)) {
	        vm._hasHookEvent = true;
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // array of events
	    if (Array.isArray(event)) {
	      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
	        vm.$off(event[i$1], fn);
	      }
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (!fn) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    if (process.env.NODE_ENV !== 'production') {
	      var lowerCaseEvent = event.toLowerCase();
	      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
	        tip(
	          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
	          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
	          "Note that HTML attributes are case-insensitive and you cannot use " +
	          "v-on to listen to camelCase events when using in-DOM templates. " +
	          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
	        );
	      }
	    }
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      var info = "event handler for \"" + event + "\"";
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var activeInstance = null;
	var isUpdatingChildComponent = false;

	function setActiveInstance(vm) {
	  var prevActiveInstance = activeInstance;
	  activeInstance = vm;
	  return function () {
	    activeInstance = prevActiveInstance;
	  }
	}

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = null;
	  vm._directInactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var restoreActiveInstance = setActiveInstance(vm);
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    restoreActiveInstance();
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    // updated hook is called by the scheduler to ensure that children are
	    // updated in a parent's updated hook.
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	    // fire destroyed hook
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // release circular reference (#6759)
	    if (vm.$vnode) {
	      vm.$vnode.parent = null;
	    }
	  };
	}

	function mountComponent (
	  vm,
	  el,
	  hydrating
	) {
	  vm.$el = el;
	  if (!vm.$options.render) {
	    vm.$options.render = createEmptyVNode;
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
	        vm.$options.el || el) {
	        warn(
	          'You are using the runtime-only build of Vue where the template ' +
	          'compiler is not available. Either pre-compile the templates into ' +
	          'render functions, or use the compiler-included build.',
	          vm
	        );
	      } else {
	        warn(
	          'Failed to mount component: template or render function not defined.',
	          vm
	        );
	      }
	    }
	  }
	  callHook(vm, 'beforeMount');

	  var updateComponent;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	    updateComponent = function () {
	      var name = vm._name;
	      var id = vm._uid;
	      var startTag = "vue-perf-start:" + id;
	      var endTag = "vue-perf-end:" + id;

	      mark(startTag);
	      var vnode = vm._render();
	      mark(endTag);
	      measure(("vue " + name + " render"), startTag, endTag);

	      mark(startTag);
	      vm._update(vnode, hydrating);
	      mark(endTag);
	      measure(("vue " + name + " patch"), startTag, endTag);
	    };
	  } else {
	    updateComponent = function () {
	      vm._update(vm._render(), hydrating);
	    };
	  }

	  // we set this to vm._watcher inside the watcher's constructor
	  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
	  // component's mounted hook), which relies on vm._watcher being already defined
	  new Watcher(vm, updateComponent, noop, {
	    before: function before () {
	      if (vm._isMounted && !vm._isDestroyed) {
	        callHook(vm, 'beforeUpdate');
	      }
	    }
	  }, true /* isRenderWatcher */);
	  hydrating = false;

	  // manually mounted instance, call mounted on self
	  // mounted is called for render-created child components in its inserted hook
	  if (vm.$vnode == null) {
	    vm._isMounted = true;
	    callHook(vm, 'mounted');
	  }
	  return vm
	}

	function updateChildComponent (
	  vm,
	  propsData,
	  listeners,
	  parentVnode,
	  renderChildren
	) {
	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = true;
	  }

	  // determine whether component has slot children
	  // we need to do this before overwriting $options._renderChildren.

	  // check if there are dynamic scopedSlots (hand-written or compiled but with
	  // dynamic slot names). Static scoped slots compiled from template has the
	  // "$stable" marker.
	  var newScopedSlots = parentVnode.data.scopedSlots;
	  var oldScopedSlots = vm.$scopedSlots;
	  var hasDynamicScopedSlot = !!(
	    (newScopedSlots && !newScopedSlots.$stable) ||
	    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
	    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
	  );

	  // Any static slot children from the parent may have changed during parent's
	  // update. Dynamic scoped slots may also have changed. In such cases, a forced
	  // update is necessary to ensure correctness.
	  var needsForceUpdate = !!(
	    renderChildren ||               // has new static slots
	    vm.$options._renderChildren ||  // has old static slots
	    hasDynamicScopedSlot
	  );

	  vm.$options._parentVnode = parentVnode;
	  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

	  if (vm._vnode) { // update child tree's parent
	    vm._vnode.parent = parentVnode;
	  }
	  vm.$options._renderChildren = renderChildren;

	  // update $attrs and $listeners hash
	  // these are also reactive so they may trigger child update if the child
	  // used them during render
	  vm.$attrs = parentVnode.data.attrs || emptyObject;
	  vm.$listeners = listeners || emptyObject;

	  // update props
	  if (propsData && vm.$options.props) {
	    toggleObserving(false);
	    var props = vm._props;
	    var propKeys = vm.$options._propKeys || [];
	    for (var i = 0; i < propKeys.length; i++) {
	      var key = propKeys[i];
	      var propOptions = vm.$options.props; // wtf flow?
	      props[key] = validateProp(key, propOptions, propsData, vm);
	    }
	    toggleObserving(true);
	    // keep a copy of raw propsData
	    vm.$options.propsData = propsData;
	  }

	  // update listeners
	  listeners = listeners || emptyObject;
	  var oldListeners = vm.$options._parentListeners;
	  vm.$options._parentListeners = listeners;
	  updateComponentListeners(vm, listeners, oldListeners);

	  // resolve slots + force update if has children
	  if (needsForceUpdate) {
	    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	    vm.$forceUpdate();
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    isUpdatingChildComponent = false;
	  }
	}

	function isInInactiveTree (vm) {
	  while (vm && (vm = vm.$parent)) {
	    if (vm._inactive) { return true }
	  }
	  return false
	}

	function activateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = false;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  } else if (vm._directInactive) {
	    return
	  }
	  if (vm._inactive || vm._inactive === null) {
	    vm._inactive = false;
	    for (var i = 0; i < vm.$children.length; i++) {
	      activateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'activated');
	  }
	}

	function deactivateChildComponent (vm, direct) {
	  if (direct) {
	    vm._directInactive = true;
	    if (isInInactiveTree(vm)) {
	      return
	    }
	  }
	  if (!vm._inactive) {
	    vm._inactive = true;
	    for (var i = 0; i < vm.$children.length; i++) {
	      deactivateChildComponent(vm.$children[i]);
	    }
	    callHook(vm, 'deactivated');
	  }
	}

	function callHook (vm, hook) {
	  // #7573 disable dep collection when invoking lifecycle hooks
	  pushTarget();
	  var handlers = vm.$options[hook];
	  var info = hook + " hook";
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	  popTarget();
	}

	/*  */

	var MAX_UPDATE_COUNT = 100;

	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  index = queue.length = activatedChildren.length = 0;
	  has = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	// Async edge case #6566 requires saving the timestamp when event listeners are
	// attached. However, calling performance.now() has a perf overhead especially
	// if the page has thousands of event listeners. Instead, we take a timestamp
	// every time the scheduler flushes and use that for all event listeners
	// attached during that flush.
	var currentFlushTimestamp = 0;

	// Async edge case fix requires storing an event listener's attach timestamp.
	var getNow = Date.now;

	// Determine what event timestamp the browser is using. Annoyingly, the
	// timestamp can either be hi-res (relative to page load) or low-res
	// (relative to UNIX epoch), so in order to compare time we have to use the
	// same timestamp type when saving the flush timestamp.
	// All IE versions use low-res event timestamps, and have problematic clock
	// implementations (#9632)
	if (inBrowser && !isIE) {
	  var performance = window.performance;
	  if (
	    performance &&
	    typeof performance.now === 'function' &&
	    getNow() > document.createEvent('Event').timeStamp
	  ) {
	    // if the event timestamp, although evaluated AFTER the Date.now(), is
	    // smaller than it, it means the event is using a hi-res timestamp,
	    // and we need to use the hi-res version for event listener timestamps as
	    // well.
	    getNow = function () { return performance.now(); };
	  }
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  currentFlushTimestamp = getNow();
	  flushing = true;
	  var watcher, id;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    watcher = queue[index];
	    if (watcher.before) {
	      watcher.before();
	    }
	    id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > MAX_UPDATE_COUNT) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // keep copies of post queues before resetting state
	  var activatedQueue = activatedChildren.slice();
	  var updatedQueue = queue.slice();

	  resetSchedulerState();

	  // call component updated and activated hooks
	  callActivatedHooks(activatedQueue);
	  callUpdatedHooks(updatedQueue);

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }
	}

	function callUpdatedHooks (queue) {
	  var i = queue.length;
	  while (i--) {
	    var watcher = queue[i];
	    var vm = watcher.vm;
	    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
	      callHook(vm, 'updated');
	    }
	  }
	}

	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
	  // setting _inactive to false here so that a render function can
	  // rely on checking whether it's in an inactive tree (e.g. router-view)
	  vm._inactive = false;
	  activatedChildren.push(vm);
	}

	function callActivatedHooks (queue) {
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]._inactive = true;
	    activateChildComponent(queue[i], true /* true */);
	  }
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    has[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i > index && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(i + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;

	      if (process.env.NODE_ENV !== 'production' && !config.async) {
	        flushSchedulerQueue();
	        return
	      }
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */



	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options,
	  isRenderWatcher
	) {
	  this.vm = vm;
	  if (isRenderWatcher) {
	    vm._watcher = this;
	  }
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	    this.before = options.before;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production'
	    ? expOrFn.toString()
	    : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = noop;
	      process.env.NODE_ENV !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value;
	  var vm = this.vm;
	  try {
	    value = this.getter.call(vm, vm);
	  } catch (e) {
	    if (this.user) {
	      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
	    } else {
	      throw e
	    }
	  } finally {
	    // "touch" every property so they are all tracked as
	    // dependencies for deep watching
	    if (this.deep) {
	      traverse(value);
	    }
	    popTarget();
	    this.cleanupDeps();
	  }
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	    if (
	      value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	  }
	};

	/*  */

	var sharedPropertyDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function proxy (target, sourceKey, key) {
	  sharedPropertyDefinition.get = function proxyGetter () {
	    return this[sourceKey][key]
	  };
	  sharedPropertyDefinition.set = function proxySetter (val) {
	    this[sourceKey][key] = val;
	  };
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function initState (vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) { initProps(vm, opts.props); }
	  if (opts.methods) { initMethods(vm, opts.methods); }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) { initComputed(vm, opts.computed); }
	  if (opts.watch && opts.watch !== nativeWatch) {
	    initWatch(vm, opts.watch);
	  }
	}

	function initProps (vm, propsOptions) {
	  var propsData = vm.$options.propsData || {};
	  var props = vm._props = {};
	  // cache prop keys so that future props updates can iterate using Array
	  // instead of dynamic object key enumeration.
	  var keys = vm.$options._propKeys = [];
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  if (!isRoot) {
	    toggleObserving(false);
	  }
	  var loop = function ( key ) {
	    keys.push(key);
	    var value = validateProp(key, propsOptions, propsData, vm);
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      var hyphenatedKey = hyphenate(key);
	      if (isReservedAttribute(hyphenatedKey) ||
	          config.isReservedAttr(hyphenatedKey)) {
	        warn(
	          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
	          vm
	        );
	      }
	      defineReactive$$1(props, key, value, function () {
	        if (!isRoot && !isUpdatingChildComponent) {
	          warn(
	            "Avoid mutating a prop directly since the value will be " +
	            "overwritten whenever the parent component re-renders. " +
	            "Instead, use a data or computed property based on the prop's " +
	            "value. Prop being mutated: \"" + key + "\"",
	            vm
	          );
	        }
	      });
	    } else {
	      defineReactive$$1(props, key, value);
	    }
	    // static props are already proxied on the component's prototype
	    // during Vue.extend(). We only need to proxy props defined at
	    // instantiation here.
	    if (!(key in vm)) {
	      proxy(vm, "_props", key);
	    }
	  };

	  for (var key in propsOptions) loop( key );
	  toggleObserving(true);
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? getData(data, vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn(
	      'data functions should return an object:\n' +
	      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var methods = vm.$options.methods;
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    if (process.env.NODE_ENV !== 'production') {
	      if (methods && hasOwn(methods, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a data property."),
	          vm
	        );
	      }
	    }
	    if (props && hasOwn(props, key)) {
	      process.env.NODE_ENV !== 'production' && warn(
	        "The data property \"" + key + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else if (!isReserved(key)) {
	      proxy(vm, "_data", key);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	function getData (data, vm) {
	  // #7573 disable dep collection when invoking data getters
	  pushTarget();
	  try {
	    return data.call(vm, vm)
	  } catch (e) {
	    handleError(e, vm, "data()");
	    return {}
	  } finally {
	    popTarget();
	  }
	}

	var computedWatcherOptions = { lazy: true };

	function initComputed (vm, computed) {
	  // $flow-disable-line
	  var watchers = vm._computedWatchers = Object.create(null);
	  // computed properties are just getters during SSR
	  var isSSR = isServerRendering();

	  for (var key in computed) {
	    var userDef = computed[key];
	    var getter = typeof userDef === 'function' ? userDef : userDef.get;
	    if (process.env.NODE_ENV !== 'production' && getter == null) {
	      warn(
	        ("Getter is missing for computed property \"" + key + "\"."),
	        vm
	      );
	    }

	    if (!isSSR) {
	      // create internal watcher for the computed property.
	      watchers[key] = new Watcher(
	        vm,
	        getter || noop,
	        noop,
	        computedWatcherOptions
	      );
	    }

	    // component-defined computed properties are already defined on the
	    // component prototype. We only need to define computed properties defined
	    // at instantiation here.
	    if (!(key in vm)) {
	      defineComputed(vm, key, userDef);
	    } else if (process.env.NODE_ENV !== 'production') {
	      if (key in vm.$data) {
	        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
	      } else if (vm.$options.props && key in vm.$options.props) {
	        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
	      }
	    }
	  }
	}

	function defineComputed (
	  target,
	  key,
	  userDef
	) {
	  var shouldCache = !isServerRendering();
	  if (typeof userDef === 'function') {
	    sharedPropertyDefinition.get = shouldCache
	      ? createComputedGetter(key)
	      : createGetterInvoker(userDef);
	    sharedPropertyDefinition.set = noop;
	  } else {
	    sharedPropertyDefinition.get = userDef.get
	      ? shouldCache && userDef.cache !== false
	        ? createComputedGetter(key)
	        : createGetterInvoker(userDef.get)
	      : noop;
	    sharedPropertyDefinition.set = userDef.set || noop;
	  }
	  if (process.env.NODE_ENV !== 'production' &&
	      sharedPropertyDefinition.set === noop) {
	    sharedPropertyDefinition.set = function () {
	      warn(
	        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
	        this
	      );
	    };
	  }
	  Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function createComputedGetter (key) {
	  return function computedGetter () {
	    var watcher = this._computedWatchers && this._computedWatchers[key];
	    if (watcher) {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value
	    }
	  }
	}

	function createGetterInvoker(fn) {
	  return function computedGetter () {
	    return fn.call(this, this)
	  }
	}

	function initMethods (vm, methods) {
	  var props = vm.$options.props;
	  for (var key in methods) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof methods[key] !== 'function') {
	        warn(
	          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	      }
	      if (props && hasOwn(props, key)) {
	        warn(
	          ("Method \"" + key + "\" has already been defined as a prop."),
	          vm
	        );
	      }
	      if ((key in vm) && isReserved(key)) {
	        warn(
	          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
	          "Avoid defining component methods that start with _ or $."
	        );
	      }
	    }
	    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
	  }
	}

	function initWatch (vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher (
	  vm,
	  expOrFn,
	  handler,
	  options
	) {
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  return vm.$watch(expOrFn, handler, options)
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () { return this._data };
	  var propsDef = {};
	  propsDef.get = function () { return this._props };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function () {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	    propsDef.set = function () {
	      warn("$props is readonly.", this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);
	  Object.defineProperty(Vue.prototype, '$props', propsDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    if (isPlainObject(cb)) {
	      return createWatcher(vm, expOrFn, cb, options)
	    }
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      try {
	        cb.call(vm, watcher.value);
	      } catch (error) {
	        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
	      }
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	/*  */

	var uid$3 = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid$3++;

	    var startTag, endTag;
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      startTag = "vue-perf-start:" + (vm._uid);
	      endTag = "vue-perf-end:" + (vm._uid);
	      mark(startTag);
	    }

	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    initRender(vm);
	    callHook(vm, 'beforeCreate');
	    initInjections(vm); // resolve injections before data/props
	    initState(vm);
	    initProvide(vm); // resolve provide after data/props
	    callHook(vm, 'created');

	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
	      vm._name = formatComponentName(vm, false);
	      mark(endTag);
	      measure(("vue " + (vm._name) + " init"), startTag, endTag);
	    }

	    if (vm.$options.el) {
	      vm.$mount(vm.$options.el);
	    }
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  var parentVnode = options._parentVnode;
	  opts.parent = options.parent;
	  opts._parentVnode = parentVnode;

	  var vnodeComponentOptions = parentVnode.componentOptions;
	  opts.propsData = vnodeComponentOptions.propsData;
	  opts._parentListeners = vnodeComponentOptions.listeners;
	  opts._renderChildren = vnodeComponentOptions.children;
	  opts._componentTag = vnodeComponentOptions.tag;

	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = resolveConstructorOptions(Ctor.super);
	    var cachedSuperOptions = Ctor.superOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed,
	      // need to resolve new options.
	      Ctor.superOptions = superOptions;
	      // check if there are any late-modified/attached options (#4976)
	      var modifiedOptions = resolveModifiedOptions(Ctor);
	      // update base extend options
	      if (modifiedOptions) {
	        extend(Ctor.extendOptions, modifiedOptions);
	      }
	      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function resolveModifiedOptions (Ctor) {
	  var modified;
	  var latest = Ctor.options;
	  var sealed = Ctor.sealedOptions;
	  for (var key in latest) {
	    if (latest[key] !== sealed[key]) {
	      if (!modified) { modified = {}; }
	      modified[key] = latest[key];
	    }
	  }
	  return modified
	}

	function Vue (options) {
	  if (process.env.NODE_ENV !== 'production' &&
	    !(this instanceof Vue)
	  ) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	renderMixin(Vue);

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
	    if (installedPlugins.indexOf(plugin) > -1) {
	      return this
	    }

	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else if (typeof plugin === 'function') {
	      plugin.apply(null, args);
	    }
	    installedPlugins.push(plugin);
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	    return this
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId]
	    }

	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production' && name) {
	      validateComponentName(name);
	    }

	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;

	    // For props and computed properties, we define the proxy getters on
	    // the Vue instances at extension time, on the extended prototype. This
	    // avoids Object.defineProperty calls for each instance created.
	    if (Sub.options.props) {
	      initProps$1(Sub);
	    }
	    if (Sub.options.computed) {
	      initComputed$1(Sub);
	    }

	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;

	    // create asset registers, so extended classes
	    // can have their private assets too.
	    ASSET_TYPES.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }

	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    Sub.sealedOptions = extend({}, Sub.options);

	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub
	  };
	}

	function initProps$1 (Comp) {
	  var props = Comp.options.props;
	  for (var key in props) {
	    proxy(Comp.prototype, "_props", key);
	  }
	}

	function initComputed$1 (Comp) {
	  var computed = Comp.options.computed;
	  for (var key in computed) {
	    defineComputed(Comp.prototype, key, computed[key]);
	  }
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  ASSET_TYPES.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production' && type === 'component') {
	          validateComponentName(id);
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	/*  */



	function getComponentName (opts) {
	  return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
	  if (Array.isArray(pattern)) {
	    return pattern.indexOf(name) > -1
	  } else if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1
	  } else if (isRegExp(pattern)) {
	    return pattern.test(name)
	  }
	  /* istanbul ignore next */
	  return false
	}

	function pruneCache (keepAliveInstance, filter) {
	  var cache = keepAliveInstance.cache;
	  var keys = keepAliveInstance.keys;
	  var _vnode = keepAliveInstance._vnode;
	  for (var key in cache) {
	    var cachedNode = cache[key];
	    if (cachedNode) {
	      var name = getComponentName(cachedNode.componentOptions);
	      if (name && !filter(name)) {
	        pruneCacheEntry(cache, key, keys, _vnode);
	      }
	    }
	  }
	}

	function pruneCacheEntry (
	  cache,
	  key,
	  keys,
	  current
	) {
	  var cached$$1 = cache[key];
	  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
	    cached$$1.componentInstance.$destroy();
	  }
	  cache[key] = null;
	  remove(keys, key);
	}

	var patternTypes = [String, RegExp, Array];

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,

	  props: {
	    include: patternTypes,
	    exclude: patternTypes,
	    max: [String, Number]
	  },

	  created: function created () {
	    this.cache = Object.create(null);
	    this.keys = [];
	  },

	  destroyed: function destroyed () {
	    for (var key in this.cache) {
	      pruneCacheEntry(this.cache, key, this.keys);
	    }
	  },

	  mounted: function mounted () {
	    var this$1 = this;

	    this.$watch('include', function (val) {
	      pruneCache(this$1, function (name) { return matches(val, name); });
	    });
	    this.$watch('exclude', function (val) {
	      pruneCache(this$1, function (name) { return !matches(val, name); });
	    });
	  },

	  render: function render () {
	    var slot = this.$slots.default;
	    var vnode = getFirstComponentChild(slot);
	    var componentOptions = vnode && vnode.componentOptions;
	    if (componentOptions) {
	      // check pattern
	      var name = getComponentName(componentOptions);
	      var ref = this;
	      var include = ref.include;
	      var exclude = ref.exclude;
	      if (
	        // not included
	        (include && (!name || !matches(include, name))) ||
	        // excluded
	        (exclude && name && matches(exclude, name))
	      ) {
	        return vnode
	      }

	      var ref$1 = this;
	      var cache = ref$1.cache;
	      var keys = ref$1.keys;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
	        : vnode.key;
	      if (cache[key]) {
	        vnode.componentInstance = cache[key].componentInstance;
	        // make current key freshest
	        remove(keys, key);
	        keys.push(key);
	      } else {
	        cache[key] = vnode;
	        keys.push(key);
	        // prune oldest entry
	        if (this.max && keys.length > parseInt(this.max)) {
	          pruneCacheEntry(cache, keys[0], keys, this._vnode);
	        }
	      }

	      vnode.data.keepAlive = true;
	    }
	    return vnode || (slot && slot[0])
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);

	  // exposed util methods.
	  // NOTE: these are not considered part of the public API - avoid relying on
	  // them unless you are aware of the risk.
	  Vue.util = {
	    warn: warn,
	    extend: extend,
	    mergeOptions: mergeOptions,
	    defineReactive: defineReactive$$1
	  };

	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  // 2.6 explicit observable API
	  Vue.observable = function (obj) {
	    observe(obj);
	    return obj
	  };

	  Vue.options = Object.create(null);
	  ASSET_TYPES.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue);

	Object.defineProperty(Vue.prototype, '$isServer', {
	  get: isServerRendering
	});

	Object.defineProperty(Vue.prototype, '$ssrContext', {
	  get: function get () {
	    /* istanbul ignore next */
	    return this.$vnode && this.$vnode.ssrContext
	  }
	});

	// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
	  value: FunctionalRenderContext
	});

	Vue.version = '2.6.10';

	/*  */

	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class');

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
	var mustUseProp = function (tag, type, attr) {
	  return (
	    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
	    (attr === 'selected' && tag === 'option') ||
	    (attr === 'checked' && tag === 'input') ||
	    (attr === 'muted' && tag === 'video')
	  )
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

	var convertEnumeratedValue = function (key, value) {
	  return isFalsyAttrValue(value) || value === 'false'
	    ? 'false'
	    // allow arbitrary string value for contenteditable
	    : key === 'contenteditable' && isValidContentEditableValue(value)
	      ? value
	      : 'true'
	};

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (isDef(childNode.componentInstance)) {
	    childNode = childNode.componentInstance._vnode;
	    if (childNode && childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (isDef(parentNode = parentNode.parent)) {
	    if (parentNode && parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return renderClass(data.staticClass, data.class)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: isDef(child.class)
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function renderClass (
	  staticClass,
	  dynamicClass
	) {
	  if (isDef(staticClass) || isDef(dynamicClass)) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  if (Array.isArray(value)) {
	    return stringifyArray(value)
	  }
	  if (isObject(value)) {
	    return stringifyObject(value)
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function stringifyArray (value) {
	  var res = '';
	  var stringified;
	  for (var i = 0, l = value.length; i < l; i++) {
	    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
	      if (res) { res += ' '; }
	      res += stringified;
	    }
	  }
	  return res
	}

	function stringifyObject (value) {
	  var res = '';
	  for (var key in value) {
	    if (value[key]) {
	      if (res) { res += ' '; }
	      res += key;
	    }
	  }
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template,blockquote,iframe,tfoot'
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
	  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	var isTextInputType = makeMap('text,number,password,search,email,tel,url');

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selected = document.querySelector(el);
	    if (!selected) {
	      process.env.NODE_ENV !== 'production' && warn(
	        'Cannot find element: ' + el
	      );
	      return document.createElement('div')
	    }
	    return selected
	  } else {
	    return el
	  }
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  // false or null will remove the attribute but undefined will not
	  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function setStyleScope (node, scopeId) {
	  node.setAttribute(scopeId, '');
	}

	var nodeOps = /*#__PURE__*/Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  setStyleScope: setStyleScope
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!isDef(key)) { return }

	  var vm = vnode.context;
	  var ref = vnode.componentInstance || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (!Array.isArray(refs[key])) {
	        refs[key] = [ref];
	      } else if (refs[key].indexOf(ref) < 0) {
	        // $flow-disable-line
	        refs[key].push(ref);
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

	function sameVnode (a, b) {
	  return (
	    a.key === b.key && (
	      (
	        a.tag === b.tag &&
	        a.isComment === b.isComment &&
	        isDef(a.data) === isDef(b.data) &&
	        sameInputType(a, b)
	      ) || (
	        isTrue(a.isAsyncPlaceholder) &&
	        a.asyncFactory === b.asyncFactory &&
	        isUndef(b.asyncFactory.error)
	      )
	    )
	  )
	}

	function sameInputType (a, b) {
	  if (a.tag !== 'input') { return true }
	  var i;
	  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
	  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
	  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks.length; ++i) {
	    cbs[hooks[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (isDef(modules[j][hooks[i]])) {
	        cbs[hooks[i]].push(modules[j][hooks[i]]);
	      }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeNode (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (isDef(parent)) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function isUnknownElement$$1 (vnode, inVPre) {
	    return (
	      !inVPre &&
	      !vnode.ns &&
	      !(
	        config.ignoredElements.length &&
	        config.ignoredElements.some(function (ignore) {
	          return isRegExp(ignore)
	            ? ignore.test(vnode.tag)
	            : ignore === vnode.tag
	        })
	      ) &&
	      config.isUnknownElement(vnode.tag)
	    )
	  }

	  var creatingElmInVPre = 0;

	  function createElm (
	    vnode,
	    insertedVnodeQueue,
	    parentElm,
	    refElm,
	    nested,
	    ownerArray,
	    index
	  ) {
	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // This vnode was used in a previous render!
	      // now it's used as a new node, overwriting its elm would cause
	      // potential patch errors down the road when it's used as an insertion
	      // reference node. Instead, we clone the node on-demand before creating
	      // associated DOM element for it.
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }

	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          creatingElmInVPre++;
	        }
	        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }

	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        creatingElmInVPre--;
	      }
	    } else if (isTrue(vnode.isComment)) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.componentInstance)) {
	        initComponent(vnode, insertedVnodeQueue);
	        insert(parentElm, vnode.elm, refElm);
	        if (isTrue(isReactivated)) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true
	      }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (isDef(vnode.data.pendingInsert)) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	      vnode.data.pendingInsert = null;
	    }
	    vnode.elm = vnode.componentInstance.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.componentInstance) {
	      innerNode = innerNode.componentInstance._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert (parent, elm, ref$$1) {
	    if (isDef(parent)) {
	      if (isDef(ref$$1)) {
	        if (nodeOps.parentNode(ref$$1) === parent) {
	          nodeOps.insertBefore(parent, elm, ref$$1);
	        }
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      if (process.env.NODE_ENV !== 'production') {
	        checkDuplicateKeys(children);
	      }
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.componentInstance) {
	      vnode = vnode.componentInstance._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (isDef(i.create)) { i.create(emptyNode, vnode); }
	      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.fnScopeId)) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    } else {
	      var ancestor = vnode;
	      while (ancestor) {
	        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
	          nodeOps.setStyleScope(vnode.elm, i);
	        }
	        ancestor = ancestor.parent;
	      }
	    }
	    // for slot content they should also get the scopeId from the host instance.
	    if (isDef(i = activeInstance) &&
	      i !== vnode.context &&
	      i !== vnode.fnContext &&
	      isDef(i = i.$options._scopeId)
	    ) {
	      nodeOps.setStyleScope(vnode.elm, i);
	    }
	  }

	  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (isDef(rm) || isDef(vnode.data)) {
	      var i;
	      var listeners = cbs.remove.length + 1;
	      if (isDef(rm)) {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      } else {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    if (process.env.NODE_ENV !== 'production') {
	      checkDuplicateKeys(newCh);
	    }

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key)
	          ? oldKeyToIdx[newStartVnode.key]
	          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
	        if (isUndef(idxInOld)) { // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	        } else {
	          vnodeToMove = oldCh[idxInOld];
	          if (sameVnode(vnodeToMove, newStartVnode)) {
	            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
	          }
	        }
	        newStartVnode = newCh[++newStartIdx];
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function checkDuplicateKeys (children) {
	    var seenKeys = {};
	    for (var i = 0; i < children.length; i++) {
	      var vnode = children[i];
	      var key = vnode.key;
	      if (isDef(key)) {
	        if (seenKeys[key]) {
	          warn(
	            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
	            vnode.context
	          );
	        } else {
	          seenKeys[key] = true;
	        }
	      }
	    }
	  }

	  function findIdxInOld (node, oldCh, start, end) {
	    for (var i = start; i < end; i++) {
	      var c = oldCh[i];
	      if (isDef(c) && sameVnode(node, c)) { return i }
	    }
	  }

	  function patchVnode (
	    oldVnode,
	    vnode,
	    insertedVnodeQueue,
	    ownerArray,
	    index,
	    removeOnly
	  ) {
	    if (oldVnode === vnode) {
	      return
	    }

	    if (isDef(vnode.elm) && isDef(ownerArray)) {
	      // clone reused vnode
	      vnode = ownerArray[index] = cloneVNode(vnode);
	    }

	    var elm = vnode.elm = oldVnode.elm;

	    if (isTrue(oldVnode.isAsyncPlaceholder)) {
	      if (isDef(vnode.asyncFactory.resolved)) {
	        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
	      } else {
	        vnode.isAsyncPlaceholder = true;
	      }
	      return
	    }

	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (isTrue(vnode.isStatic) &&
	      isTrue(oldVnode.isStatic) &&
	      vnode.key === oldVnode.key &&
	      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
	    ) {
	      vnode.componentInstance = oldVnode.componentInstance;
	      return
	    }

	    var i;
	    var data = vnode.data;
	    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }

	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (isDef(data) && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (process.env.NODE_ENV !== 'production') {
	          checkDuplicateKeys(ch);
	        }
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (isTrue(initial) && isDef(vnode.parent)) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var hydrationBailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  // Note: style is excluded because it relies on initial clone for future
	  // deep updates (#7063).
	  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
	    var i;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    inVPre = inVPre || (data && data.pre);
	    vnode.elm = elm;

	    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
	      vnode.isAsyncPlaceholder = true;
	      return true
	    }
	    // assert node match
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode, inVPre)) {
	        return false
	      }
	    }
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.componentInstance)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          // v-html and domProps: innerHTML
	          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
	            if (i !== elm.innerHTML) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('server innerHTML: ', i);
	                console.warn('client innerHTML: ', elm.innerHTML);
	              }
	              return false
	            }
	          } else {
	            // iterate and compare children lists
	            var childrenMatch = true;
	            var childNode = elm.firstChild;
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
	                childrenMatch = false;
	                break
	              }
	              childNode = childNode.nextSibling;
	            }
	            // if childNode is not null, it means the actual childNodes list is
	            // longer than the virtual children list.
	            if (!childrenMatch || childNode) {
	              /* istanbul ignore if */
	              if (process.env.NODE_ENV !== 'production' &&
	                typeof console !== 'undefined' &&
	                !hydrationBailed
	              ) {
	                hydrationBailed = true;
	                console.warn('Parent: ', elm);
	                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	              }
	              return false
	            }
	          }
	        }
	      }
	      if (isDef(data)) {
	        var fullInvoke = false;
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            fullInvoke = true;
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break
	          }
	        }
	        if (!fullInvoke && data['class']) {
	          // ensure collecting deps for deep class bindings for future updates
	          traverse(data['class']);
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode, inVPre) {
	    if (isDef(vnode.tag)) {
	      return vnode.tag.indexOf('vue-component') === 0 || (
	        !isUnknownElement$$1(vnode, inVPre) &&
	        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
	      )
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3)
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (isUndef(vnode)) {
	      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (isUndef(oldVnode)) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
	            oldVnode.removeAttribute(SSR_ATTR);
	            hydrating = true;
	          }
	          if (isTrue(hydrating)) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }

	        // replacing existing element
	        var oldElm = oldVnode.elm;
	        var parentElm = nodeOps.parentNode(oldElm);

	        // create new node
	        createElm(
	          vnode,
	          insertedVnodeQueue,
	          // extremely rare edge case: do not insert if old element is in a
	          // leaving transition. Only happens when combining transition +
	          // keep-alive + HOCs. (#4590)
	          oldElm._leaveCb ? null : parentElm,
	          nodeOps.nextSibling(oldElm)
	        );

	        // update parent placeholder node element, recursively
	        if (isDef(vnode.parent)) {
	          var ancestor = vnode.parent;
	          var patchable = isPatchable(vnode);
	          while (ancestor) {
	            for (var i = 0; i < cbs.destroy.length; ++i) {
	              cbs.destroy[i](ancestor);
	            }
	            ancestor.elm = vnode.elm;
	            if (patchable) {
	              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	                cbs.create[i$1](emptyNode, ancestor);
	              }
	              // #6513
	              // invoke insert hooks that may have been merged by create hooks.
	              // e.g. for directives that uses the "inserted" hook.
	              var insert = ancestor.data.hook.insert;
	              if (insert.merged) {
	                // start at index 1 to avoid re-invoking component mounted hook
	                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
	                  insert.fns[i$2]();
	                }
	              }
	            } else {
	              registerRef(ancestor);
	            }
	            ancestor = ancestor.parent;
	          }
	        }

	        // destroy old node
	        if (isDef(parentElm)) {
	          removeVnodes(parentElm, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update (oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      dir.oldArg = oldDir.arg;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode, 'insert', callInsert);
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode, 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    });
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    // $flow-disable-line
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      // $flow-disable-line
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  // $flow-disable-line
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    try {
	      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	    } catch (e) {
	      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
	    }
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  var opts = vnode.componentOptions;
	  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
	    return
	  }
	  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(attrs.__ob__)) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  // #6666: IE/Edge forces progress value down to 1 before setting a max
	  /* istanbul ignore if */
	  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (isUndef(attrs[key])) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (el.tagName.indexOf('-') > -1) {
	    baseSetAttr(el, key, value);
	  } else if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      // technically allowfullscreen is a boolean attribute for <iframe>,
	      // but Flash expects a value of "true" when used on <embed> tag
	      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
	        ? 'true'
	        : key;
	      el.setAttribute(key, value);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, convertEnumeratedValue(key, value));
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    baseSetAttr(el, key, value);
	  }
	}

	function baseSetAttr (el, key, value) {
	  if (isFalsyAttrValue(value)) {
	    el.removeAttribute(key);
	  } else {
	    // #7138: IE10 & 11 fires input event when setting placeholder on
	    // <textarea>... block the first input event and remove the blocker
	    // immediately.
	    /* istanbul ignore if */
	    if (
	      isIE && !isIE9 &&
	      el.tagName === 'TEXTAREA' &&
	      key === 'placeholder' && value !== '' && !el.__ieph
	    ) {
	      var blocker = function (e) {
	        e.stopImmediatePropagation();
	        el.removeEventListener('input', blocker);
	      };
	      el.addEventListener('input', blocker);
	      // $flow-disable-line
	      el.__ieph = true; /* IE placeholder patched */
	    }
	    el.setAttribute(key, value);
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (
	    isUndef(data.staticClass) &&
	    isUndef(data.class) && (
	      isUndef(oldData) || (
	        isUndef(oldData.staticClass) &&
	        isUndef(oldData.class)
	      )
	    )
	  ) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (isDef(transitionClass)) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	/*  */

	/*  */

	/*  */

	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';

	/*  */

	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
	function normalizeEvents (on) {
	  /* istanbul ignore if */
	  if (isDef(on[RANGE_TOKEN])) {
	    // IE input[type=range] only supports `change` event
	    var event = isIE ? 'change' : 'input';
	    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
	    delete on[RANGE_TOKEN];
	  }
	  // This was originally intended to fix #4521 but no longer necessary
	  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
	  /* istanbul ignore if */
	  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
	    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
	    delete on[CHECKBOX_RADIO_TOKEN];
	  }
	}

	var target$1;

	function createOnceHandler$1 (event, handler, capture) {
	  var _target = target$1; // save current target element in closure
	  return function onceHandler () {
	    var res = handler.apply(null, arguments);
	    if (res !== null) {
	      remove$2(event, onceHandler, capture, _target);
	    }
	  }
	}

	// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
	// implementation and does not fire microtasks in between event propagation, so
	// safe to exclude.
	var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

	function add$1 (
	  name,
	  handler,
	  capture,
	  passive
	) {
	  // async edge case #6566: inner click event triggers patch, event handler
	  // attached to outer element during patch, and triggered again. This
	  // happens because browsers fire microtask ticks between event propagation.
	  // the solution is simple: we save the timestamp when a handler is attached,
	  // and the handler would only fire if the event passed to it was fired
	  // AFTER it was attached.
	  if (useMicrotaskFix) {
	    var attachedTimestamp = currentFlushTimestamp;
	    var original = handler;
	    handler = original._wrapper = function (e) {
	      if (
	        // no bubbling, should always fire.
	        // this is just a safety net in case event.timeStamp is unreliable in
	        // certain weird environments...
	        e.target === e.currentTarget ||
	        // event is fired after handler attachment
	        e.timeStamp >= attachedTimestamp ||
	        // bail for environments that have buggy event.timeStamp implementations
	        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
	        // #9681 QtWebEngine event.timeStamp is negative value
	        e.timeStamp <= 0 ||
	        // #9448 bail if event is fired in another document in a multi-page
	        // electron/nw.js app, since event.timeStamp will be using a different
	        // starting reference
	        e.target.ownerDocument !== document
	      ) {
	        return original.apply(this, arguments)
	      }
	    };
	  }
	  target$1.addEventListener(
	    name,
	    handler,
	    supportsPassive
	      ? { capture: capture, passive: passive }
	      : capture
	  );
	}

	function remove$2 (
	  name,
	  handler,
	  capture,
	  _target
	) {
	  (_target || target$1).removeEventListener(
	    name,
	    handler._wrapper || handler,
	    capture
	  );
	}

	function updateDOMListeners (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  normalizeEvents(on);
	  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
	  target$1 = undefined;
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	var svgContainer;

	function updateDOMProps (oldVnode, vnode) {
	  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (isDef(props.__ob__)) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (!(key in props)) {
	      elm[key] = '';
	    }
	  }

	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) { vnode.children.length = 0; }
	      if (cur === oldProps[key]) { continue }
	      // #6601 work around Chrome version <= 55 bug where single textNode
	      // replaced by innerHTML/textContent retains its parentNode property
	      if (elm.childNodes.length === 1) {
	        elm.removeChild(elm.childNodes[0]);
	      }
	    }

	    if (key === 'value' && elm.tagName !== 'PROGRESS') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = isUndef(cur) ? '' : String(cur);
	      if (shouldUpdateValue(elm, strCur)) {
	        elm.value = strCur;
	      }
	    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
	      // IE doesn't support innerHTML for SVG elements
	      svgContainer = svgContainer || document.createElement('div');
	      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
	      var svg = svgContainer.firstChild;
	      while (elm.firstChild) {
	        elm.removeChild(elm.firstChild);
	      }
	      while (svg.firstChild) {
	        elm.appendChild(svg.firstChild);
	      }
	    } else if (
	      // skip the update if old and new VDOM state is the same.
	      // `value` is handled separately because the DOM value may be temporarily
	      // out of sync with VDOM state due to focus, composition and modifiers.
	      // This  #4521 by skipping the unnecesarry `checked` update.
	      cur !== oldProps[key]
	    ) {
	      // some property updates can throw
	      // e.g. `value` on <progress> w/ non-finite value
	      try {
	        elm[key] = cur;
	      } catch (e) {}
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue (elm, checkVal) {
	  return (!elm.composing && (
	    elm.tagName === 'OPTION' ||
	    isNotInFocusAndDirty(elm, checkVal) ||
	    isDirtyWithModifiers(elm, checkVal)
	  ))
	}

	function isNotInFocusAndDirty (elm, checkVal) {
	  // return true when textbox (.number and .trim) loses focus and its value is
	  // not equal to the updated value
	  var notInFocus = true;
	  // #6157
	  // work around IE bug when accessing document.activeElement in an iframe
	  try { notInFocus = document.activeElement !== elm; } catch (e) {}
	  return notInFocus && elm.value !== checkVal
	}

	function isDirtyWithModifiers (elm, newVal) {
	  var value = elm.value;
	  var modifiers = elm._vModifiers; // injected by v-model runtime
	  if (isDef(modifiers)) {
	    if (modifiers.number) {
	      return toNumber$1(value) !== toNumber$1(newVal)
	    }
	    if (modifiers.trim) {
	      return value.trim() !== newVal.trim()
	    }
	  }
	  return value !== newVal
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle
	    ? extend(data.staticStyle, style)
	    : style
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding (bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle)
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle)
	  }
	  return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.componentInstance) {
	      childNode = childNode.componentInstance._vnode;
	      if (
	        childNode && childNode.data &&
	        (styleData = normalizeStyleData(childNode.data))
	      ) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if ((styleData = normalizeStyleData(vnode.data))) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
	  } else {
	    var normalizedName = normalize(name);
	    if (Array.isArray(val)) {
	      // Support values array created by autoprefixer, e.g.
	      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
	      // Set them one by one, and the browser will only set those it can recognize
	      for (var i = 0, len = val.length; i < len; i++) {
	        el.style[normalizedName] = val[i];
	      }
	    } else {
	      el.style[normalizedName] = val;
	    }
	  }
	};

	var vendorNames = ['Webkit', 'Moz', 'ms'];

	var emptyStyle;
	var normalize = cached(function (prop) {
	  emptyStyle = emptyStyle || document.createElement('div').style;
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in emptyStyle)) {
	    return prop
	  }
	  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < vendorNames.length; i++) {
	    var name = vendorNames[i] + capName;
	    if (name in emptyStyle) {
	      return name
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (isUndef(data.staticStyle) && isUndef(data.style) &&
	    isUndef(oldData.staticStyle) && isUndef(oldData.style)
	  ) {
	    return
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldData.staticStyle;
	  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  // store normalized style under a different key for next diff
	  // make sure to clone it if it's reactive, since the user likely wants
	  // to mutate it.
	  vnode.data.normalizedStyle = isDef(style.__ob__)
	    ? extend({}, style)
	    : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (isUndef(newStyle[name])) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	var whitespaceRE = /\s+/;

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !(cls = cls.trim())) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	    if (!el.classList.length) {
	      el.removeAttribute('class');
	    }
	  } else {
	    var cur = " " + (el.getAttribute('class') || '') + " ";
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    cur = cur.trim();
	    if (cur) {
	      el.setAttribute('class', cur);
	    } else {
	      el.removeAttribute('class');
	    }
	  }
	}

	/*  */

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    enterToClass: (name + "-enter-to"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveClass: (name + "-leave"),
	    leaveToClass: (name + "-leave-to"),
	    leaveActiveClass: (name + "-leave-active")
	  }
	});

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  ) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  ) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
	var raf = inBrowser
	  ? window.requestAnimationFrame
	    ? window.requestAnimationFrame.bind(window)
	    : setTimeout
	  : /* istanbul ignore next */ function (fn) { return fn(); };

	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
	  if (transitionClasses.indexOf(cls) < 0) {
	    transitionClasses.push(cls);
	    addClass(el, cls);
	  }
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  // JSDOM may return undefined for transition properties
	  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
	  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
	  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
	  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
	  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
	// in a locale-dependent way, using a comma instead of a dot.
	// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
	// as a floor function) causing unexpected behaviors
	function toMs (s) {
	  return Number(s.slice(0, -1).replace(',', '.')) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (isDef(el._leaveCb)) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data)) {
	    return
	  }

	  /* istanbul ignore if */
	  if (isDef(el._enterCb) || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;
	  var duration = data.duration;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    context = transitionNode.context;
	    transitionNode = transitionNode.parent;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear && appearClass
	    ? appearClass
	    : enterClass;
	  var activeClass = isAppear && appearActiveClass
	    ? appearActiveClass
	    : enterActiveClass;
	  var toClass = isAppear && appearToClass
	    ? appearToClass
	    : enterToClass;

	  var beforeEnterHook = isAppear
	    ? (beforeAppear || beforeEnter)
	    : beforeEnter;
	  var enterHook = isAppear
	    ? (typeof appear === 'function' ? appear : enter)
	    : enter;
	  var afterEnterHook = isAppear
	    ? (afterAppear || afterEnter)
	    : afterEnter;
	  var enterCancelledHook = isAppear
	    ? (appearCancelled || enterCancelled)
	    : enterCancelled;

	  var explicitEnterDuration = toNumber$1(
	    isObject(duration)
	      ? duration.enter
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
	    checkDuration(explicitEnterDuration, 'enter', vnode);
	  }

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(enterHook);

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode, 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode &&
	        pendingNode.tag === vnode.tag &&
	        pendingNode.elm._leaveCb
	      ) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    });
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled) {
	        addTransitionClass(el, toClass);
	        if (!userWantsControl) {
	          if (isValidDuration(explicitEnterDuration)) {
	            setTimeout(cb, explicitEnterDuration);
	          } else {
	            whenTransitionEnds(el, type, cb);
	          }
	        }
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (isDef(el._enterCb)) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (isUndef(data) || el.nodeType !== 1) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (isDef(el._leaveCb)) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;
	  var duration = data.duration;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = getHookArgumentsLength(leave);

	  var explicitLeaveDuration = toNumber$1(
	    isObject(duration)
	      ? duration.leave
	      : duration
	  );

	  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
	    checkDuration(explicitLeaveDuration, 'leave', vnode);
	  }

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show && el.parentNode) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled) {
	          addTransitionClass(el, leaveToClass);
	          if (!userWantsControl) {
	            if (isValidDuration(explicitLeaveDuration)) {
	              setTimeout(cb, explicitLeaveDuration);
	            } else {
	              whenTransitionEnds(el, type, cb);
	            }
	          }
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	// only used in dev mode
	function checkDuration (val, name, vnode) {
	  if (typeof val !== 'number') {
	    warn(
	      "<transition> explicit " + name + " duration is not a valid number - " +
	      "got " + (JSON.stringify(val)) + ".",
	      vnode.context
	    );
	  } else if (isNaN(val)) {
	    warn(
	      "<transition> explicit " + name + " duration is NaN - " +
	      'the duration expression might be incorrect.',
	      vnode.context
	    );
	  }
	}

	function isValidDuration (val) {
	  return typeof val === 'number' && !isNaN(val)
	}

	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
	  if (isUndef(fn)) {
	    return false
	  }
	  var invokerFns = fn.fns;
	  if (isDef(invokerFns)) {
	    // invoker
	    return getHookArgumentsLength(
	      Array.isArray(invokerFns)
	        ? invokerFns[0]
	        : invokerFns
	    )
	  } else {
	    return (fn._length || fn.length) > 1
	  }
	}

	function _enter (_, vnode) {
	  if (vnode.data.show !== true) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove$$1 (vnode, rm) {
	    /* istanbul ignore else */
	    if (vnode.data.show !== true) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var directive = {
	  inserted: function inserted (el, binding, vnode, oldVnode) {
	    if (vnode.tag === 'select') {
	      // #6903
	      if (oldVnode.elm && !oldVnode.elm._vOptions) {
	        mergeVNodeHook(vnode, 'postpatch', function () {
	          directive.componentUpdated(el, binding, vnode);
	        });
	      } else {
	        setSelected(el, binding, vnode.context);
	      }
	      el._vOptions = [].map.call(el.options, getValue);
	    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	        // Safari < 10.2 & UIWebView doesn't fire compositionend when
	        // switching focus before confirming composition choice
	        // this also fixes the issue where some browsers e.g. iOS Chrome
	        // fires "change" instead of "input" on autocomplete.
	        el.addEventListener('change', onCompositionEnd);
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },

	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var prevOptions = el._vOptions;
	      var curOptions = el._vOptions = [].map.call(el.options, getValue);
	      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
	        // trigger change event if
	        // no matching option found for at least one value
	        var needReset = el.multiple
	          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
	          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
	        if (needReset) {
	          trigger(el, 'change');
	        }
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  actuallySetSelected(el, binding, vm);
	  /* istanbul ignore if */
	  if (isIE || isEdge) {
	    setTimeout(function () {
	      actuallySetSelected(el, binding, vm);
	    }, 0);
	  }
	}

	function actuallySetSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  return options.every(function (o) { return !looseEqual(o, value); })
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  // prevent triggering an input event for no reason
	  if (!e.target.composing) { return }
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.componentInstance._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay =
	      el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition$$1) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (!value === !oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition$$1 = vnode.data && vnode.data.transition;
	    if (transition$$1) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind (
	    el,
	    binding,
	    vnode,
	    oldVnode,
	    isDestroy
	  ) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: directive,
	  show: show
	};

	/*  */

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String,
	  duration: [Number, String, Object]
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1];
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  if (/\d-keep-alive$/.test(rawChild.tag)) {
	    return h('keep-alive', {
	      props: rawChild.componentOptions.propsData
	    })
	  }
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	function isSameChild (child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

	var isVShowDirective = function (d) { return d.name === 'show'; };

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,

	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(isNotTextNode);
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' &&
	      mode && mode !== 'in-out' && mode !== 'out-in'
	    ) {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    // ensure a key that is unique to the vnode type and to this transition
	    // component instance. This key will be used to remove pending leaving nodes
	    // during entering.
	    var id = "__transition-" + (this._uid) + "-";
	    child.key = child.key == null
	      ? child.isComment
	        ? id + 'comment'
	        : id + child.tag
	      : isPrimitive(child.key)
	        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
	        : child.key;

	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
	      child.data.show = true;
	    }

	    if (
	      oldChild &&
	      oldChild.data &&
	      !isSameChild(child, oldChild) &&
	      !isAsyncPlaceholder(oldChild) &&
	      // #6687 component root is a comment node
	      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
	    ) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        });
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        if (isAsyncPlaceholder(child)) {
	          return oldRawChild
	        }
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave);
	        mergeVNodeHook(data, 'enterCancelled', performLeave);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  beforeMount: function beforeMount () {
	    var this$1 = this;

	    var update = this._update;
	    this._update = function (vnode, hydrating) {
	      var restoreActiveInstance = setActiveInstance(this$1);
	      // force removing pass
	      this$1.__patch__(
	        this$1._vnode,
	        this$1.kept,
	        false, // hydrating
	        true // removeOnly (!important, avoids unnecessary moves)
	      );
	      this$1._vnode = this$1.kept;
	      restoreActiveInstance();
	      update.call(this$1, vnode, hydrating);
	    };
	  },

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    // assign to this to avoid being removed in tree-shaking
	    // $flow-disable-line
	    this._reflow = document.body.offsetHeight;

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (e && e.target !== el) {
	            return
	          }
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      /* istanbul ignore if */
	      if (this._hasMove) {
	        return this._hasMove
	      }
	      // Detect whether an element with the move class applied has
	      // CSS transitions. Since the element may be inside an entering
	      // transition at this very moment, we make a clone of it and remove
	      // all other transition classes applied to ensure only the move class
	      // is applied.
	      var clone = el.cloneNode();
	      if (el._transitionClasses) {
	        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
	      }
	      addClass(clone, moveClass);
	      clone.style.display = 'none';
	      this.$el.appendChild(clone);
	      var info = getTransitionInfo(clone);
	      this.$el.removeChild(clone);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue.config.mustUseProp = mustUseProp;
	Vue.config.isReservedTag = isReservedTag;
	Vue.config.isReservedAttr = isReservedAttr;
	Vue.config.getTagNamespace = getTagNamespace;
	Vue.config.isUnknownElement = isUnknownElement;

	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives);
	extend(Vue.options.components, platformComponents);

	// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop;

	// public mount method
	Vue.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && inBrowser ? query(el) : undefined;
	  return mountComponent(this, el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	if (inBrowser) {
	  setTimeout(function () {
	    if (config.devtools) {
	      if (devtools) {
	        devtools.emit('init', Vue);
	      } else if (
	        process.env.NODE_ENV !== 'production' &&
	        process.env.NODE_ENV !== 'test'
	      ) {
	        console[console.info ? 'info' : 'log'](
	          'Download the Vue Devtools extension for a better development experience:\n' +
	          'https://github.com/vuejs/vue-devtools'
	        );
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' &&
	      process.env.NODE_ENV !== 'test' &&
	      config.productionTip !== false &&
	      typeof console !== 'undefined'
	    ) {
	      console[console.info ? 'info' : 'log'](
	        "You are running Vue in development mode.\n" +
	        "Make sure to turn on production mode when deploying for production.\n" +
	        "See more tips at https://vuejs.org/guide/deployment.html"
	      );
	    }
	  }, 0);
	}

	var lib = createCommonjsModule(function (module, exports) {
	(function(){var h,aa=this;function l(a){return "string"==typeof a}function m(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b;}
	function n(a,b){function c(){}c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ea=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)};}function q(a,b){null!=a&&this.a.apply(this,arguments);}q.prototype.b="";q.prototype.set=function(a){this.b=""+a;};q.prototype.a=function(a,b,c){this.b+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.b+=arguments[d];return this};function r(a){a.b="";}q.prototype.toString=function(){return this.b};var t=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return -1},ba=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var p=g[k];b.call(c,p,k,a)&&(e[f++]=p);}return e},ca=Array.prototype.map?
	function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=l(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};function da(a){return Array.prototype.concat.apply([],arguments)}function ea(a,b){a.sort(b||fa);}function fa(a,b){return a>b?1:a<b?-1:0}function ha(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ia(a,b){this.b=a;this.a={};for(a=0;a<b.length;a++){var c=b[a];this.a[c.a]=c;}}function ja(a){a=ha(a.a);ea(a,function(a,c){return a.a-c.a});return a}function ka(a,b){this.a=a;this.g=!!b.w;this.b=b.c;this.j=b.type;this.i=!1;switch(this.b){case la:case ma:case na:case oa:case pa:case qa:case ra:this.i=!0;}this.f=b.defaultValue;}var ra=1,qa=2,la=3,ma=4,na=6,oa=16,pa=18;function u(){this.b={};this.f=this.h().a;this.a=this.g=null;}h=u.prototype;h.has=function(a){return v(this,a.a)};h.get=function(a,b){return w(this,a.a,b)};h.set=function(a,b){x(this,a.a,b);};h.add=function(a,b){sa(this,a.a,b);};function ta(a,b){for(var c=ja(a.h()),d=0;d<c.length;d++){var e=c[d],f=e.a;if(v(b,f)){a.a&&delete a.a[e.a];var g=11==e.b||10==e.b;if(e.g){e=y(b,f);for(var k=0;k<e.length;k++)sa(a,f,g?e[k].clone():e[k]);}else e=z(b,f),g?(g=z(a,f))?ta(g,e):x(a,f,e.clone()):x(a,f,e);}}}
	h.clone=function(){var a=new this.constructor;a!=this&&(a.b={},a.a&&(a.a={}),ta(a,this));return a};function v(a,b){return null!=a.b[b]}function z(a,b){var c=a.b[b];if(null==c)return null;if(a.g){if(!(b in a.a)){var d=a.g,e=a.f[b];if(null!=c)if(e.g){for(var f=[],g=0;g<c.length;g++)f[g]=d.b(e,c[g]);c=f;}else c=d.b(e,c);return a.a[b]=c}return a.a[b]}return c}function w(a,b,c){var d=z(a,b);return a.f[b].g?d[c||0]:d}
	function A(a,b){if(v(a,b))a=w(a,b,void 0);else a:{a=a.f[b];if(void 0===a.f)if(b=a.j,b===Boolean)a.f=!1;else if(b===Number)a.f=0;else if(b===String)a.f=a.i?"0":"";else{a=new b;break a}a=a.f;}return a}function y(a,b){return z(a,b)||[]}function B(a,b){return a.f[b].g?v(a,b)?a.b[b].length:0:v(a,b)?1:0}function x(a,b,c){a.b[b]=c;a.a&&(a.a[b]=c);}function sa(a,b,c){a.b[b]||(a.b[b]=[]);a.b[b].push(c);a.a&&delete a.a[b];}function C(a,b){var c=[],d;for(d in b)0!=d&&c.push(new ka(d,b[d]));return new ia(a,c)}function D(){u.call(this);}n(D,u);var ua=null;function E(){u.call(this);}n(E,u);var va=null;function F(){u.call(this);}n(F,u);var wa=null;
	D.prototype.h=function(){var a=ua;a||(ua=a=C(D,{0:{name:"NumberFormat",ga:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",w:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}}));return a};D.h=D.prototype.h;
	E.prototype.h=function(){var a=va;a||(va=a=C(E,{0:{name:"PhoneNumberDesc",ga:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},9:{name:"possible_length",w:!0,c:5,type:Number},10:{name:"possible_length_local_only",w:!0,c:5,type:Number},6:{name:"example_number",c:9,type:String}}));return a};E.h=E.prototype.h;
	F.prototype.h=function(){var a=wa;a||(wa=a=C(F,{0:{name:"PhoneMetadata",ga:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:E},2:{name:"fixed_line",c:11,type:E},3:{name:"mobile",c:11,type:E},4:{name:"toll_free",c:11,type:E},5:{name:"premium_rate",c:11,type:E},6:{name:"shared_cost",c:11,type:E},7:{name:"personal_number",c:11,type:E},8:{name:"voip",c:11,type:E},21:{name:"pager",c:11,type:E},25:{name:"uan",c:11,type:E},27:{name:"emergency",c:11,type:E},28:{name:"voicemail",c:11,type:E},
	29:{name:"short_code",c:11,type:E},30:{name:"standard_rate",c:11,type:E},31:{name:"carrier_specific",c:11,type:E},33:{name:"sms_services",c:11,type:E},24:{name:"no_international_dialling",c:11,type:E},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",
	c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",w:!0,c:11,type:D},20:{name:"intl_number_format",w:!0,c:11,type:D},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}}));return a};F.h=F.prototype.h;function G(){}G.prototype.a=function(a){new a.b;throw Error("Unimplemented");};G.prototype.b=function(a,b){if(11==a.b||10==a.b)return b instanceof u?b:this.a(a.j.prototype.h(),b);if(14==a.b)return l(b)&&xa.test(b)&&(a=Number(b),0<a)?a:b;if(!a.i)return b;a=a.j;if(a===String){if("number"==typeof b)return String(b)}else if(a===Number&&l(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||xa.test(b)))return Number(b);return b};var xa=/^-?[0-9]+$/;function ya(){}n(ya,G);ya.prototype.a=function(a,b){a=new a.b;a.g=this;a.b=b;a.a={};return a};function H(){}n(H,ya);H.prototype.b=function(a,b){return 8==a.b?!!b:G.prototype.b.apply(this,arguments)};H.prototype.a=function(a,b){return H.ya.a.call(this,a,b)};function I(){u.call(this);}n(I,u);var za=null,Aa={Da:0,Ca:1,Ba:5,Aa:10,za:20};
	I.prototype.h=function(){var a=za;a||(za=a=C(I,{0:{name:"PhoneNumber",ga:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,c:5,type:Number},2:{name:"national_number",required:!0,c:4,type:Number},3:{name:"extension",c:9,type:String},4:{name:"italian_leading_zero",c:8,type:Boolean},8:{name:"number_of_leading_zeros",c:5,defaultValue:1,type:Number},5:{name:"raw_input",c:9,type:String},6:{name:"country_code_source",c:14,defaultValue:0,type:Aa},7:{name:"preferred_domestic_carrier_code",
	c:9,type:String}}));return a};I.ctor=I;I.ctor.h=I.prototype.h;/*

	 Copyright (C) 2010 The Libphonenumber Authors

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	var J={1:"US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],
	86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],
	253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],
	386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],
	691:["FM"],692:["MH"],800:["001"],808:["001"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],870:["001"],878:["001"],880:["BD"],881:["001"],882:["001"],883:["001"],886:["TW"],888:["001"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],979:["001"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},K={AC:[,[,,"(?:[01589]\\d|[46])\\d{4}",,
	,,,,,[5,6]],[,,"6[2-467]\\d{3}",,,,"62889",,,[5]],[,,"4\\d{4}",,,,"40123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AC",247,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:0[1-9]|[1589]\\d)\\d{4}",,,,"542011",,,[6]],,,[,,,,,,,,,[-1]]],AD:[,[,,"(?:1|6\\d)\\d{7}|[136-9]\\d{5}",,,,,,,[6,8,9]],[,,"[78]\\d{5}",,,,"712345",,,[6]],[,,"690\\d{6}|[36]\\d{5}",,,,"312345",,,[6,9]],[,,"180[02]\\d{4}",,,,"18001234",,,[8]],[,,"[19]\\d{5}",,,,"912345",,,[6]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AD",376,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[136-9]"]],[,"(\\d{4})(\\d{4})","$1 $2",["1"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],,[,,,,,,,,,[-1]],,,[,,"1800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AE:[,[,,"(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",,,,,,,[5,6,7,8,9,10,11,12]],[,,"[2-4679][2-8]\\d{6}",,,,"22345678",,,[8],[7]],[,,"5[024-68]\\d{7}",,,,"501234567",,,[9]],[,,"400\\d{6}|800\\d{2,9}",,,,"800123456"],
	[,,"900[02]\\d{5}",,,,"900234567",,,[9]],[,,"700[05]\\d{5}",,,,"700012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AE",971,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],[,"(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"600[25]\\d{5}",,,,"600212345",,,[9]],,,[,,,,,,,,,[-1]]],AF:[,[,,"[2-7]\\d{8}",,,,,,,[9],[7]],[,,"(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}",
	,,,"234567890",,,,[7]],[,,"7(?:[014-9]\\d|2[89]|3[01])\\d{6}",,,,"701234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AF",93,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AG:[,[,,"(?:268|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}",
	,,,"2684601234",,,,[7]],[,,"268(?:464|7(?:1[3-9]|2\\d|3[246]|64|[78][0-689]))\\d{4}",,,,"2684641234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"26848[01]\\d{4}",,,,"2684801234",,,,[7]],"AG",1,"011","1",,,"1|([457]\\d{6})$","268$1",,,,,[,,"26840[69]\\d{4}",,,,"2684061234",,,,[7]],,"268",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AI:[,[,,"(?:264|[58]\\d\\d|900)\\d{7}",
	,,,,,,[10],[7]],[,,"2644(?:6[12]|9[78])\\d{4}",,,,"2644612345",,,,[7]],[,,"264(?:235|476|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}",,,,"2642351234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AI",1,"011","1",,,"1|([2457]\\d{6})$","264$1",,,,,[,,,,,,,,,[-1]],,"264",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AL:[,[,,"(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
	,,,,,,[6,7,8,9],[5]],[,,"(?:[2358](?:[16-9]\\d[2-9]|[2-5][2-9]\\d)|4(?:[2-57-9][2-9]|6\\d)\\d)\\d{4}",,,,"22345678",,,[8],[5,6,7]],[,,"6[7-9][2-9]\\d{6}",,,,"672123456",,,[9]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"900[1-9]\\d\\d",,,,"900123",,,[6]],[,,"808[1-9]\\d\\d",,,,"808123",,,[6]],[,,"700[2-9]\\d{4}",,,,"70021234",,,[8]],[,,,,,,,,,[-1]],"AL",355,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})",
	"$1 $2 $3",["[2358][2-5]|4"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AM:[,[,,"(?:[1-489]\\d|55|60|77)\\d{6}",,,,,,,[8],[5,6]],[,,"(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}",,,,"10123456",,,,[5,6]],[,,"(?:33|4[1349]|55|77|88|9[13-9])\\d{6}",,,,"77123456"],[,,"800\\d{5}",,,,"80012345"],[,,"90[016]\\d{5}",,,,"90012345"],[,
	,"80[1-4]\\d{5}",,,,"80112345"],[,,,,,,,,,[-1]],[,,"60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|90)\\d{4}",,,,"60271234"],"AM",374,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],[,"(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AO:[,[,,"[29]\\d{8}",,,,,,,[9]],[,,"2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",,,,"222123456"],
	[,,"9[1-49]\\d{7}",,,,"923123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AO",244,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AR:[,[,,"11\\d{8}|(?:[2368]|9\\d)\\d{9}",,,,,,,[10,11],[6,7,8]],[,,"(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:(?:11[2-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
	,,,"1123456789",,,[10],[6,7,8]],[,,"9(?:2(?:646[0-46-9]|9(?:45[02-69]|54[2-8]))|3(?:4(?:3(?:5[0-7]|6[1-69])|5(?:4[0-4679]|[56][024-6]))|585[013-7]|7(?:(?:1[15]|81)[46]|77[2-8])|8(?:(?:21|4[16]|9[12])[46]|35[124-6]|5(?:5[0-46-9]|6[0-246-9])|6(?:5[2-8]|9[46])|86[0-68])))\\d{5}|9(?:2(?:284|657|9(?:20|66))|3(?:4(?:8[27]|92)|755|878))[2-7]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|4[24])|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:(?:26|62)2|3(?:02|2[03])|477|9(?:42|83))|3(?:4(?:[47]6|62|89)|5(?:41|64)|873))[2-6]\\d{5}|(?:675\\d|9(?:11[2-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-7]|[346][45])|80[45]|9(?:[17][4-6]|44|8[45]|9[3-6]))|3(?:364|4(?:1[2-7]|2[4-6]|[38]4)|5(?:1[2-8]|3[4-6]|8[46])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|1[2-6]|34|5[34]|7[24-6]|8[3-5]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:329|4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])|888))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|[24]5|5[25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
	,,,"91123456789",,,,[6,7,8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"60[04579]\\d{7}",,,,"6001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AR",54,"00","0",,,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
	"9$1",,,[[,"(\\d{3})","$1",["[09]|1(?:[02]|1[02-5])"]],[,"(\\d{2})(\\d{4})","$1-$2",["[2-7]|8[0-7]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]|8[013-8]"]],[,"(\\d{4})(\\d{4})","$1-$2",["2[0-8]|[3-8]"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
	"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
	"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
	"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],
	"0$1"],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1"]],[[,"(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
	"2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",,
	1],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],[,"(\\d)(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
	"9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5(?:[24-6]|3[2-5]))|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"]],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3-$4",["91"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3-$4",["9"]]],
	[,,,,,,,,,[-1]],,,[,,"810\\d{7}",,,,,,,[10]],[,,"810\\d{7}",,,,"8101234567",,,[10]],,,[,,,,,,,,,[-1]]],AS:[,[,,"(?:[58]\\d\\d|684|900)\\d{7}",,,,,,,[10],[7]],[,,"6846(?:22|33|44|55|77|88|9[19])\\d{4}",,,,"6846221234",,,,[7]],[,,"684(?:2(?:5[2468]|72)|7(?:3[13]|70))\\d{4}",,,,"6847331234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"AS",1,"011","1",
	,,"1|([267]\\d{6})$","684$1",,,,,[,,,,,,,,,[-1]],,"684",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AT:[,[,,"1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",,,,,,,[4,5,6,7,8,9,10,11,12,13],[3]],[,,"1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}",
	,,,"1234567890",,,,[3]],[,,"6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}",,,,"664123456",,,[7,8,9,10,11,12,13]],[,,"800\\d{6,10}",,,,"800123456",,,[9,10,11,12,13]],[,,"9(?:0[01]|3[019])\\d{6,10}",,,,"900123456",,,[9,10,11,12,13]],[,,"8(?:10|2[018])\\d{6,10}|828\\d{5}",,,,"810123456",,,[8,9,10,11,12,13]],[,,,,,,,,,[-1]],[,,"5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}",,,,"780123456",,,[5,6,7,8,9,10,11,12,13]],"AT",43,"00","0",,,"0",,,,[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})",
	"$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],[,"(\\d{6})","$1",["1"]],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[[,"(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],[,"(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],
	"0$1"],[,"(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],[,"(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AU:[,[,,"1(?:[0-79]\\d{7,8}|8[0-24-9]\\d{7})|(?:[2-478]\\d\\d|550)\\d{6}|1\\d{4,7}",,,,,,,[5,6,7,8,9,10]],[,,"(?:[237]\\d{5}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|(?:[6-8]\\d{3}|9(?:[02-9]\\d\\d|1(?:[0-57-9]\\d|6[0135-9])))\\d))\\d{3}",
	,,,"212345678",,,[9],[8]],[,,"483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,,"550123456",,,[9]],"AU",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|(183[12])",,"0011",
	,[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["13"]],[,"(\\d{3})(\\d{3})","$1 $2",["19"]],[,"(\\d{3})(\\d{4})","$1 $2",["180","1802"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["19"]],[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[[,"(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],
	[,"(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)","$CC ($1)"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],[,,"16\\d{3,7}",,,,"1612345",,,[5,6,7,8,9]],1,,[,,"1[38]00\\d{6}|1(?:345[0-4]|802)\\d{3}|13\\d{4}",,,,,,,[6,7,8,10]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AW:[,[,,"(?:[25-79]\\d\\d|800)\\d{4}",,,,,,,[7]],[,,"5(?:2\\d|8[1-9])\\d{4}",,,,"5212345"],[,,"(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}",
	,,,"5601234"],[,,"800\\d{4}",,,,"8001234"],[,,"900\\d{4}",,,,"9001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:28\\d|501)\\d{4}",,,,"5011234"],"AW",297,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],AX:[,[,,"2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|(?:[147]\\d|3[0-46-9]|50)\\d{4,8}",,,,,,,[5,6,7,8,9,10]],[,,"18[1-8]\\d{3,6}",,,,"181234567",,,[6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",,,,"412345678",,,[6,7,8,9,10]],[,,"800\\d{4,6}",
	,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AX",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,,,[,,,,,,,,,[-1]],,"18",[,,,,,,,,,[-1]],[,,"(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d",,,,"10112345"],,,[,,,,,,,,,[-1]]],AZ:[,[,,"(?:365\\d{3}|900200)\\d{3}|(?:[12457]\\d|60|88)\\d{7}",,,,,,,[9],[7]],[,,"365(?:[0-46-9]\\d|5[0-35-9])\\d{4}|(?:1[28]\\d|2(?:[045]2|1[24]|2[2-4]|33|6[23]))\\d{6}",
	,,,"123123456",,,,[7]],[,,"36554\\d{4}|(?:4[04]|5[015]|60|7[07])\\d{7}",,,,"401234567"],[,,"88\\d{7}",,,,"881234567"],[,,"900200\\d{3}",,,,"900200123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"AZ",994,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[1-9]"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|365","[12]|365","[12]|365(?:[0-46-9]|5[0-35-9])"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",
	["[3-8]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[12]|365","[12]|365","[12]|365(?:[0-46-9]|5[0-35-9])"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-8]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BA:[,[,,"6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",,,,,,,[8,9],[6]],[,,"(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}",
	,,,"30212345",,,[8],[6]],[,,"6(?:0(?:3\\d|40)|[1-356]\\d|44[0-6]|71[137])\\d{5}",,,,"61123456"],[,,"8[08]\\d{6}",,,,"80123456",,,[8]],[,,"9[0246]\\d{6}",,,,"90123456",,,[8]],[,,"8[12]\\d{6}",,,,"82123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BA",387,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1-$2",["[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[[,
	"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:3[0146]|[56]0)\\d{4}",,,,"70341234",,,[8]],,,[,,,,,,,,,[-1]]],BB:[,[,,"(?:246|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}",,,,"2464123456",,,,[7]],[,,"246(?:2(?:[356]\\d|4[0-57-9]|8[0-79])|45\\d|69[5-7]|8(?:[2-5]\\d|83))\\d{4}",
	,,,"2462501234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"(?:246976|900[2-9]\\d\\d)\\d{4}",,,,"9002123456",,,,[7]],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"24631\\d{5}",,,,"2463101234",,,,[7]],"BB",1,"011","1",,,"1|([2-9]\\d{6})$","246$1",,,,,[,,,,,,,,,[-1]],,"246",[,,,,,,,,,[-1]],[,,"246(?:292|367|4(?:1[7-9]|3[01]|44|67)|7(?:36|53))\\d{4}",,,,"2464301234",,,,[7]],,,[,,,,,,,,,[-1]]],BD:[,[,,"[13469]\\d{9}|8[0-79]\\d{7,8}|[2-7]\\d{8}|[2-9]\\d{7}|[3-689]\\d{6}|[57-9]\\d{5}",
	,,,,,,[6,7,8,9,10]],[,,"(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:4(?:31\\d\\d|[46]23)|5(?:222|32[37]))\\d{3}(?:\\d{2})?|(?:3(?:42[47]|529|823)|4(?:027|525|658)|(?:56|73)2|6257|9[35]1)\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[01367]|7[15]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|8(?:4[12]|[5-7]2)|9(?:[024]2|81))\\d{4}|(?:2[45]\\d\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:25|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[569]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:0|217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",
	,,,"27111234"],[,,"(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}",,,,"1812345678",,,[10]],[,,"80[03]\\d{7}",,,,"8001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"96(?:0[469]|1[0-47]|3[389]|6[69]|7[78])\\d{6}",,,,"9604123456",,,[10]],"BD",880,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1-$2",["31[5-7]|[459]1"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:28|4[14]|5)|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
	"0$1"],[,"(\\d{4})(\\d{3,6})","$1-$2",["[13-9]"],"0$1"],[,"(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BE:[,[,,"4\\d{8}|[1-9]\\d{7}",,,,,,,[8,9]],[,,"80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}",,,,"12345678",,,[8]],[,,"4(?:5[56]|6[0135-8]|[79]\\d|8[3-9])\\d{6}",,,,"470123456",,,[9]],[,,"800[1-9]\\d{4}",,,,"80012345",,,[8]],[,,"(?:70(?:2[0-57]|3[0457]|44|69|7[0579])|90(?:0[0-35-8]|1[36]|2[0-3568]|3[0135689]|4[2-68]|5[1-68]|6[0-378]|7[23568]|9[34679]))\\d{4}",
	,,,"90012345",,,[8]],[,,"7879\\d{4}",,,,"78791234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BE",32,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"78(?:0[57]|1[0458]|2[25]|3[5-8]|48|[56]0|7[078])\\d{4}",,,,"78102345",,,[8]],,,
	[,,,,,,,,,[-1]]],BF:[,[,,"[025-7]\\d{7}",,,,,,,[8]],[,,"2(?:0(?:49|5[23]|6[56]|9[016-9])|4(?:4[569]|5[4-6]|6[56]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}",,,,"20491234"],[,,"(?:0[17]|5[1-8]|[67]\\d)\\d{6}",,,,"70123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BF",226,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[025-7]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BG:[,[,,"[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
	,,,,,,[6,7,8,9],[4,5]],[,,"2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}",,,,"2123456",,,[6,7,8],[4,5]],[,,"43[07-9]\\d{5}|(?:48|8[7-9]\\d|9(?:8\\d|9[69]))\\d{6}",,,,"48123456",,,[8,9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,"700\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BG",359,"00","0",,,"0",,,,[[,"(\\d{6})","$1",["1"]],[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})",
	"$1 $2",["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[[,"(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",
	["43[1-6]|70[1-9]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BH:[,[,,"[136-9]\\d{7}",
	,,,,,,[8]],[,,"(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|7[7-9]|88)|9[69][69])|7(?:1(?:11|78)|7\\d\\d))\\d{4}",,,,"17001234"],[,,"(?:3(?:[1-4679]\\d|5[013-69]|8[0-47-9])\\d|6(?:3(?:00|33|6[16])|6(?:3[03-9]|[69]\\d|7[0-6])))\\d{4}",,,,"36001234"],[,,"80\\d{6}",,,,"80123456"],[,,"(?:87|9[014578])\\d{6}",,,,"90123456"],[,,"84\\d{6}",,,,"84123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BH",973,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[13679]|8[047]"]]],,[,,,,,,,,,[-1]],,,[,,,,,
	,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BI:[,[,,"(?:[267]\\d|31)\\d{6}",,,,,,,[8]],[,,"22\\d{6}",,,,"22201234"],[,,"(?:29|31|6[189]|7[125-9])\\d{6}",,,,"79561234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BI",257,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BJ:[,[,,"[2689]\\d{7}",,,,,,,[8]],[,,"2(?:02|1[037]|2[45]|3[68])\\d{5}",,,,"20211234"],[,,"(?:6\\d|9[013-9])\\d{6}",
	,,,"90011234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"857[58]\\d{4}",,,,"85751234"],"BJ",229,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"81\\d{6}",,,,"81123456"],,,[,,,,,,,,,[-1]]],BL:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:2[7-9]|5[12]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,
	,,,,,[-1]],"BL",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BM:[,[,,"(?:441|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"441(?:2(?:02|23|[3479]\\d|61)|[46]\\d\\d|5(?:4\\d|60|89)|824)\\d{4}",,,,"4412345678",,,,[7]],[,,"441(?:[37]\\d|5[0-39])\\d{5}",,,,"4413701234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,
	,,[-1]],"BM",1,"011","1",,,"1|([2-8]\\d{6})$","441$1",,,,,[,,,,,,,,,[-1]],,"441",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BN:[,[,,"[2-578]\\d{6}",,,,,,,[7]],[,,"22[0-7]\\d{4}|(?:2[013-9]|[3-5]\\d)\\d{5}",,,,"2345678"],[,,"(?:22[89]|[78]\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BN",673,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BO:[,[,,"(?:[2-467]\\d\\d|8001)\\d{5}",
	,,,,,,[8,9],[7]],[,,"(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}",,,,"22123456",,,[8],[7]],[,,"[67]\\d{7}",,,,"71234567",,,[8]],[,,"8001[07]\\d{4}",,,,"800171234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BO",591,"00(?:1\\d)?","0",,,"0(1\\d)?",,,,[[,"(\\d)(\\d{7})","$1 $2",["[23]|4[46]"],,"0$CC $1"],[,
	"(\\d{8})","$1",["[67]"],,"0$CC $1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"],,"0$CC $1"]],,[,,,,,,,,,[-1]],,,[,,"8001[07]\\d{4}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BQ:[,[,,"(?:[34]1|7\\d)\\d{5}",,,,,,,[7]],[,,"(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}",,,,"7151234"],[,,"(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}",,,,"3181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BQ",599,"00",,,,,,,,,,[,,,,,,,,
	,[-1]],,"[347]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BR:[,[,,"(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-24679]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}",,,,,,,[8,9,10,11]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}",,,,"1123456789",,,[10],[8]],[,,"(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}",,,,"11961234567",,,[10,11],[8,9]],[,,"800\\d{6,7}",,,,"800123456",,,[9,10]],[,,"300\\d{6}|[59]00\\d{6,7}",,,,"300123456",,,[9,10]],[,,"300\\d{7}|[34]00\\d{5}|4(?:02|37)0\\d{4}",
	,,,"40041234",,,[8,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BR",55,"00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","0",,,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2",,,[[,"(\\d{3,6})","$1",["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]],[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],[,"(\\d{4})(\\d{4})","$1-$2",["[2-57]","[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{5})(\\d{4})",
	"$1-$2",["9"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[[,"(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37)","4(?:02|37)0|[34]00"]],[,"(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)","0 $CC ($1)"],[,"(\\d{2})(\\d{5})(\\d{4})",
	"$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)","0 $CC ($1)"]],[,,,,,,,,,[-1]],,,[,,"4020\\d{4}|[34]00\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BS:[,[,,"(?:242|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-4]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",,,,"2423456789",,,,[7]],[,,"242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}",
	,,,"2423591234",,,,[7]],[,,"242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456",,,,[7]],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"BS",1,"011","1",,,"1|([3-8]\\d{6})$","242$1",,,,,[,,,,,,,,,[-1]],,"242",[,,,,,,,,,[-1]],[,,"242225[0-46-9]\\d{3}",,,,"2422250123"],,,[,,,,,,,,,[-1]]],BT:[,[,,"[17]\\d{7}|[2-8]\\d{6}",,,,,,,[7,8],[6]],[,,"(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}",,,,"2345678",
	,,[7],[6]],[,,"(?:1[67]|77)\\d{6}",,,,"17123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BT",975,"00",,,,,,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-68]|7[246]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|7"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,
	,,[-1]]],BW:[,[,,"90\\d{5}|(?:[2-6]|7\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013])|4(?:6[03]|7[1267]|9[0-5])|5(?:3[0389]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",,,,"2401234",,,[7]],[,,"77200\\d{3}|7(?:[1-6]\\d|7[014-8])\\d{5}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"79(?:1(?:[01]\\d|20)|2[0-2]\\d)\\d{3}",,,,"79101234",,,[8]],"BW",267,"00",,,,,,,,[[,"(\\d{2})(\\d{5})",
	"$1 $2",["90"]],[,"(\\d{3})(\\d{4})","$1 $2",["[2-6]"]],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BY:[,[,,"(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",,,,,,,[6,7,8,9,10,11],[5]],[,,"(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}",
	,,,"152450911",,,[9],[5,6,7]],[,,"(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",,,,"294911911",,,[9]],[,,"800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}",,,,"8011234567"],[,,"(?:810|902)\\d{7}",,,,"9021234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"249\\d{6}",,,,"249123456",,,[9]],"BY",375,"810","8",,,"0|80?",,"8~10",,[[,"(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],[,"(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],[,"(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
	"1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,"800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],BZ:[,[,,"(?:0800\\d|[2-8])\\d{6}",,,,,,,[7,11]],[,,"(?:236|732)\\d{4}|[2-578][02]\\d{5}",
	,,,"2221234",,,[7]],[,,"6[0-35-7]\\d{5}",,,,"6221234",,,[7]],[,,"0800\\d{7}",,,,"08001234123",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"BZ",501,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],[,"(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CA:[,[,,"(?:[2-8]\\d|90)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
	,,,"5062345678",,,,[7]],[,,"(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:04|13|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",,,,"5062345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"(?:5(?:00|2[12]|33|44|66|77|88)|622)[2-9]\\d{6}",,,,"5002345678"],[,,"600[2-9]\\d{6}",,,,"6002012345"],"CA",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CC:[,[,,"1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",,,,"891621234",,,[9],[8]],[,,"483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],
	[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,,"550123456",,,[9]],"CC",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CD:[,[,,"[189]\\d{8}|[1-68]\\d{6}",,,,,,,[7,9]],[,,"12\\d{7}|[1-6]\\d{6}",,,,"1234567"],[,,"88\\d{5}|(?:8[0-2459]|9[017-9])\\d{7}",,,,"991234567"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CD",243,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CF:[,[,,"(?:[27]\\d{3}|8776)\\d{4}",,,,,,,[8]],[,,"2[12]\\d{6}",,,,"21612345"],[,,"7[0257]\\d{6}",,,,"70012345"],[,,,,,,,,,[-1]],
	[,,"8776\\d{4}",,,,"87761234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CF",236,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[278]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CG:[,[,,"222\\d{6}|(?:0\\d|80)\\d{7}",,,,,,,[9]],[,,"222[1-589]\\d{5}",,,,"222123456"],[,,"0[14-6]\\d{7}",,,,"061234567"],[,,,,,,,,,[-1]],[,,"80(?:0\\d\\d|11[0-4])\\d{4}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CG",242,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["801"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CH:[,[,,"8\\d{11}|[2-9]\\d{8}",,,,,,,[9,12]],[,,"(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}",,,,"212345678",,,[9]],[,,"7[35-9]\\d{7}",,,,"781234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[016]\\d{6}",,,,"900123456",,,[9]],[,,"84[0248]\\d{6}",,,,"840123456",,,[9]],[,,"878\\d{6}",,,,"878123456",
	,,[9]],[,,,,,,,,,[-1]],"CH",41,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],,[,,"74[0248]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,"5[18]\\d{7}",,,,"581234567",,,[9]],,,[,,"860\\d{9}",,,,"860123456789",,,[12]]],CI:[,[,,"[02-9]\\d{7}",,,,,,,[8]],[,,"(?:2(?:0[023]|1[02357]|[23][045]|4[03-5])|3(?:0[06]|1[069]|[2-4][07]|5[09]|6[08]))\\d{5}",
	,,,"21234567"],[,,"97[0-3]\\d{5}|(?:0[1-9]|[457]\\d|6[014-9]|8[4-9]|95)\\d{6}",,,,"01234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CI",225,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[02-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CK:[,[,,"[2-8]\\d{4}",,,,,,,[5]],[,,"(?:2\\d|3[13-7]|4[1-5])\\d{3}",,,,"21234"],[,,"[5-8]\\d{4}",,,,"71234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],"CK",682,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1 $2",["[2-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CL:[,[,,"12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",,,,,,,[9,10,11]],[,,"(?:2(?:1962|3(?:2\\d\\d|300))|80[1-9]\\d\\d)\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}",,,,"221234567",,,[9]],[,,"(?:2(?:1962|3(?:2\\d\\d|300))|80[1-9]\\d\\d)\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2-9])\\d{7}",,,,"221234567",,,[9]],[,,"(?:123|8)00\\d{6}",
	,,,"800123456",,,[9,11]],[,,,,,,,,,[-1]],[,,"600\\d{7,8}",,,,"6001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,"44\\d{7}",,,,"441234567",,,[9]],"CL",56,"(?:0|1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))0",,,,,,,1,[[,"(\\d{4})","$1",["1(?:[03-589]|21)|[29]0|78"]],[,"(\\d{5})(\\d{4})","$1 $2",["21"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
	"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[[,"(\\d{5})(\\d{4})","$1 $2",["21"],"($1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[23]"],"($1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9[2-9]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",
	["60|8"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]],[,,,,,,,,,[-1]],,,[,,"600\\d{7,8}",,,,,,,[10,11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CM:[,[,,"(?:[26]\\d\\d|88)\\d{6}",,,,,,,[8,9]],[,,"2(?:22|33|4[23])\\d{6}",,,,"222123456",,,[9]],[,,"6[5-9]\\d{7}",,,,"671234567",,,[9]],[,,"88\\d{6}",,,,"88012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CM",237,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
	["88"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CN:[,[,,"1[1279]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-68]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}",,,,,,,[7,8,9,10,11,12],[5,6]],[,,"(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",
	,,,"1012345678",,,[7,8,9,10,11],[5,6]],[,,"1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|5[0-35-9]|6[25-7]|7[0-35-8]|9[189])\\d{8}",,,,"13123456789",,,[11]],[,,"(?:(?:10|21)8|8)00\\d{7}",,,,"8001234567",,,[10,12]],[,,"16[08]\\d{5}",,,,"16812345",,,[8]],[,,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
	,,,"4001234567",,,[7,8,9,10,11],[5,6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CN",86,"00|1(?:[12]\\d|79|9[0235-7])\\d\\d00","0",,,"0|(1(?:[12]\\d|79|9[0235-7])\\d\\d)",,"00",,[[,"(\\d{5,6})","$1",["96"]],[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{4})","$1 $2",["[1-9]","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],[,
	"(\\d{4})(\\d{4})","$1 $2",["16[08]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
	"85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],
	"0$1","$CC $1"],[,"(\\d{4})(\\d{4})","$1 $2",["[1-9]","1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])","26|3(?:[0268]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|50|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9])|(?:34|85[23])[0-8]|(?:1|58)[1-9]|(?:63|95)[06-9]|(?:33|85[23]9)[0-46-9]|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
	"26|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:1|58|85[23]10)[1-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"]],
	[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})",
	"$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[[,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]","(?:10|2[0-57-9])(?:10|9[56])","(?:10|2[0-57-9])(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
	"(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
	"85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1","$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],
	"0$1","$CC $1",1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{7,8})","$1 $2",["9"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1","$CC $1",1],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"],,"$CC $1"],
	[,"(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}",,,,,,,[10,11,12]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CO:[,[,,"(?:1\\d|3)\\d{9}|[124-8]\\d{7}",,,,,,,[8,10,11],[7]],[,,"[124-8][2-9]\\d{6}",,,,"12345678",,,[8],[7]],[,,"3(?:0[0-5]|1\\d|2[0-3]|5[01])\\d{7}",,,,"3211234567",,,[10]],[,,"1800\\d{7}",,,,"18001234567",,,[11]],[,,"19(?:0[01]|4[78])\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	"CO",57,"00(?:4(?:[14]4|56)|[579])","0",,,"0([3579]|4(?:[14]4|56))?",,,,[[,"(\\d)(\\d{7})","$1 $2",["1[2-79]|[25-8]|(?:18|4)[2-9]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1(?:80|9)","1(?:800|9)"],"0$1"]],[[,"(\\d)(\\d{7})","$1 $2",["1[2-79]|[25-8]|(?:18|4)[2-9]"],"($1)","0$CC $1"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],,"0$CC $1"],[,"(\\d)(\\d{3})(\\d{7})","$1 $2 $3",["1(?:80|9)","1(?:800|9)"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],,,[,,,,,,,,,[-1]]],CR:[,[,,"(?:8\\d|90)\\d{8}|[24-8]\\d{7}",,,,,,,[8,10]],[,,"210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}",,,,"22123456",,,[8]],[,,"6500[01]\\d{3}|5(?:0[01]|7[0-3])\\d{5}|(?:6[0-4]|7[0-3]|8[3-9])\\d{6}",,,,"83123456",,,[8]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"90[059]\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:210[0-6]|4\\d{3}|5100)\\d{4}",,,,"40001234",,,[8]],"CR",506,"00",,,,"(19(?:0[0-2468]|1[09]|20|66|77|99))",,,,[[,"(\\d{4})(\\d{4})",
	"$1 $2",["[24-7]|8[3-9]"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CU:[,[,,"[27]\\d{6,7}|[34]\\d{5,7}|5\\d{7}",,,,,,,[6,7,8],[4,5]],[,,"(?:3[23]|48)\\d{4,6}|(?:31|4[36])\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}",,,,"71234567",,,,[4,5]],[,,"5\\d{7}",,,,"51234567",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CU",53,"119","0",,,"0",,,,[[,"(\\d{2})(\\d{4,6})","$1 $2",
	["2[1-4]|[34]"],"(0$1)"],[,"(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["5"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CV:[,[,,"[2-59]\\d{6}",,,,,,,[7]],[,,"2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",,,,"2211234"],[,,"(?:[34][36]|5[1-389]|9\\d)\\d{5}",,,,"9911234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CV",238,"0",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-59]"]]],,[,,,,
	,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CW:[,[,,"(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",,,,,,,[7,8]],[,,"9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",,,,"94351234"],[,,"953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}",,,,"95181234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"60[0-2]\\d{4}",,,,"6001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"CW",599,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[3467]"]],[,"(\\d)(\\d{3})(\\d{4})",
	"$1 $2 $3",["9[4-8]"]]],,[,,"955\\d{5}",,,,"95581234",,,[8]],1,"[69]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CX:[,[,,"1(?:[0-79]\\d|8[0-24-9])\\d{7}|(?:[148]\\d\\d|550)\\d{6}|1\\d{5,7}",,,,,,,[6,7,8,9,10]],[,,"8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",,,,"891641234",,,[9],[8]],[,,"483[0-3]\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[06-9]|7[02-9]|8[0-2457-9]|9[0-27-9])\\d{6}",,,,"412345678",,,[9]],[,,
	"180(?:0\\d{3}|2)\\d{3}",,,,"1800123456",,,[7,10]],[,,"190[0-26]\\d{6}",,,,"1900123456",,,[10]],[,,"13(?:00\\d{3}|45[0-4])\\d{3}|13\\d{4}",,,,"1300123456",,,[6,8,10]],[,,,,,,,,,[-1]],[,,"(?:14(?:5(?:1[0458]|[23][458])|71\\d)|550\\d\\d)\\d{4}",,,,"550123456",,,[9]],"CX",61,"001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","0",,,"0|([59]\\d{7})$","8$1","0011",,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],CY:[,[,,"(?:[279]\\d|[58]0)\\d{6}",,,,,,,[8]],[,,"2[2-6]\\d{6}",,
	,,"22345678"],[,,"9[4-79]\\d{6}",,,,"96123456"],[,,"800\\d{5}",,,,"80001234"],[,,"90[09]\\d{5}",,,,"90012345"],[,,"80[1-9]\\d{5}",,,,"80112345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"CY",357,"00",,,,,,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:50|77)\\d{6}",,,,"77123456"],,,[,,,,,,,,,[-1]]],CZ:[,[,,"(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",,,,,,,[9,10,11,12]],[,,"(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}",,,,"212345678",,,[9]],[,,"(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}",
	,,,"601123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:0[05689]|76)\\d{6}",,,,"900123456",,,[9]],[,,"8[134]\\d{7}",,,,"811234567",,,[9]],[,,"70[01]\\d{6}",,,,"700123456",,,[9]],[,,"9[17]0\\d{6}",,,,"910123456",,,[9]],"CZ",420,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"9(?:5\\d|7[2-4])\\d{6}",,,,"972123456",
	,,[9]],,,[,,"9(?:3\\d{9}|6\\d{7,10})",,,,"93123456789"]],DE:[,[,,"[2579]\\d{5,14}|49(?:[05]\\d{10}|[46][1-8]\\d{4,9})|49(?:[0-25]\\d|3[1-689]|7[1-7])\\d{4,8}|49(?:[0-2579]\\d|[34][1-9]|6[0-8])\\d{3}|49\\d{3,4}|(?:1|[368]\\d|4[0-8])\\d{3,13}",,,,,,,[4,5,6,7,8,9,10,11,12,13,14,15],[2,3]],[,,"(?:32|49[4-6]\\d)\\d{9}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",
	,,,"30123456",,,[5,6,7,8,9,10,11,12,13,14,15],[2,3,4]],[,,"15[0-25-9]\\d{8}|1(?:6[023]|7\\d)\\d{7,8}",,,,"15123456789",,,[10,11]],[,,"800\\d{7,12}",,,,"8001234567890",,,[10,11,12,13,14,15]],[,,"(?:137[7-9]|900(?:[135]|9\\d))\\d{6}",,,,"9001234567",,,[10,11]],[,,"180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}",,,,"18012345",,,[7,8,9,10,11,12,13,14]],[,,"700\\d{8}",,,,"70012345678",,,[11]],[,,,,,,,,,[-1]],"DE",49,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],[,"(\\d{3})(\\d{3,12})",
	"$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],[,"(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
	"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],[,"(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],[,"(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],[,"(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],[,"(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],[,"(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],[,"(\\d{5})(\\d{6})","$1 $2",["15[0568]"],"0$1"],
	[,"(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],[,"(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],,[,,"16(?:4\\d{1,10}|[89]\\d{1,11})",,,,"16412345",,,[4,5,6,7,8,9,10,11,12,13,14]],,,[,,,,,,,,,[-1]],[,,"18(?:1\\d{5,11}|[2-9]\\d{8})",,,,"18500123456",,,[8,9,10,11,12,13,14]],,,[,,"1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",
	,,,"177991234567",,,[12,13]]],DJ:[,[,,"(?:2\\d|77)\\d{6}",,,,,,,[8]],[,,"2(?:1[2-5]|7[45])\\d{5}",,,,"21360003"],[,,"77\\d{6}",,,,"77831001"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DJ",253,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DK:[,[,,"[2-9]\\d{7}",,,,,,,[8]],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",,,,"32123456"],[,,"(?:[2-7]\\d|8[126-9]|9[1-36-9])\\d{6}",
	,,,"32123456"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"DK",45,"00",,,,,,,1,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DM:[,[,,"(?:[58]\\d\\d|767|900)\\d{7}",,,,,,,[10],[7]],[,,"767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4]|70[1-3])\\d{4}",,,,"7674201234",,,,[7]],[,,"767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-7])\\d{4}",,,,"7672251234",,,,[7]],
	[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DM",1,"011","1",,,"1|([2-7]\\d{6})$","767$1",,,,,[,,,,,,,,,[-1]],,"767",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DO:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}",
	,,,"8092345678",,,,[7]],[,,"8[024]9[2-9]\\d{6}",,,,"8092345678",,,,[7]],[,,"8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"DO",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"8001|8[024]9",[,,"80014\\d{5}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],DZ:[,[,,"(?:[1-4]|[5-79]\\d|80)\\d{7}",,,,,,,[8,9]],[,,"9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[0135689])\\d{6}",
	,,,"12345678"],[,,"67[0-6]\\d{6}|(?:5[4-6]|6[569]|7[7-9])\\d{7}",,,,"551234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"80[3-689]1\\d{5}",,,,"808123456",,,[9]],[,,"80[12]1\\d{5}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,"98[23]\\d{6}",,,,"983123456",,,[9]],"DZ",213,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],,[,,,,,
	,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EC:[,[,,"1800\\d{6,7}|(?:[2-7]|9\\d)\\d{7}",,,,,,,[8,9,10,11],[7]],[,,"[2-7][2-7]\\d{6}",,,,"22123456",,,[8],[7]],[,,"964[0-2]\\d{5}|9(?:39|[57][89]|6[0-37-9]|[89]\\d)\\d{6}",,,,"991234567",,,[9]],[,,"1800\\d{6,7}",,,,"18001234567",,,[10,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"[2-7]890\\d{4}",,,,"28901234",,,[8]],"EC",593,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-7]"]],[,"(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],
	"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-7]"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EE:[,[,,"8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d\\d|900)\\d{4}",,,,,,,[7,8,10]],[,,"(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",,,,"3212345",,,[7]],[,,"(?:5\\d|8[1-4])\\d{6}|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}",
	,,,"51234567",,,[7,8]],[,,"800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}",,,,"80012345"],[,,"(?:40\\d\\d|900)\\d{4}",,,,"9001234",,,[7,8]],[,,,,,,,,,[-1]],[,,"70[0-2]\\d{5}",,,,"70012345",,,[8]],[,,,,,,,,,[-1]],"EE",372,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],[,"(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-4])","[45]|8(?:00[1-9]|[1-4])"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],
	[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["80"]]],,[,,,,,,,,,[-1]],,,[,,"800[2-9]\\d{3}",,,,,,,[7]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EG:[,[,,"[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"(?:15\\d|57[23])\\d{5,6}|(?:13[23]|(?:2[2-4]|3)\\d|4(?:0[2-5]|[578][23]|64)|5(?:0[2-7]|5\\d)|6[24-689]3|8(?:2[2-57]|4[26]|6[237]|8[2-4])|9(?:2[27]|3[24]|52|6[2356]|7[2-4]))\\d{6}",,,,"234567890",,,[8,9],[6,7]],[,,"1[0-25]\\d{8}",,,,"1001234567",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],
	[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"EG",20,"00","0",,,"0",,,,[[,"(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],[,"(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[189]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],EH:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"528[89]\\d{5}",,,,"528812345"],[,,"692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}",
	,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[0-2]\\d{4}",,,,"592401234"],"EH",212,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"528[89]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ER:[,[,,"[178]\\d{6}",,,,,,,[7],[6]],[,,"(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}",,,,"8370362",,,,[6]],[,,"(?:17[1-3]|7\\d\\d)\\d{4}",,,,"7123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ER",291,"00",
	"0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ES:[,[,,"(?:51|[6-9]\\d)\\d{7}",,,,,,,[9]],[,,"96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",,,,"810123456"],[,,"9(?:6906(?:09|10)|7390\\d\\d)\\d\\d|(?:6\\d|7[1-48])\\d{7}",,,,"612345678"],[,,"[89]00\\d{6}",,,,"800123456"],[,
	,"80[367]\\d{6}",,,,"803123456"],[,,"90[12]\\d{6}",,,,"901123456"],[,,"70\\d{7}",,,,"701234567"],[,,,,,,,,,[-1]],"ES",34,"00",,,,,,,,[[,"(\\d{4})","$1",["905"]],[,"(\\d{6})","$1",["[79]9"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"51\\d{7}",,,,"511234567"],,,[,,,,,,,,,[-1]]],
	ET:[,[,,"(?:11|[2-59]\\d)\\d{7}",,,,,,,[9],[7]],[,,"(?:11(?:1(?:1[124]|2[2-57]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[78]|2[69]|39|4[5-7]|5[1-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
	,,,"111112345",,,,[7]],[,,"9\\d{8}",,,,"911234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ET",251,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-59]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FI:[,[,,"(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}|[1-35689]\\d{4}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1[3-79][1-8]|[235689][1-8]\\d)\\d{2,6}",,,,"131234567",,,[5,6,7,8,9]],[,,"(?:4[0-8]|50)\\d{4,8}",,,,"412345678",
	,,[6,7,8,9,10]],[,,"800\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"[67]00\\d{5,6}",,,,"600123456",,,[8,9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FI",358,"00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","0",,,"0",,"00",,[[,"(\\d{5})","$1",["75[12]"],"0$1"],[,"(\\d)(\\d{4,9})","$1 $2",["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{6})","$1",["11"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[12]0|7)0|[368]"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["[12457]"],"0$1"]],[[,"(\\d)(\\d{4,9})","$1 $2",
	["[2568][1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"],[,"(\\d{3})(\\d{3,7})","$1 $2",["(?:[12]0|7)0|[368]"],"0$1"],[,"(\\d{2})(\\d{4,8})","$1 $2",["[12457]"],"0$1"]],[,,,,,,,,,[-1]],1,"1[03-79]|[2-9]",[,,"20(?:2[023]|9[89])\\d{1,6}|60[12]\\d{5,6}|(?:606|7(?:1|3\\d))\\d{7}|(?:[1-3]00|75[03-9])\\d{3,7}"],[,,"(?:10|[23][09])\\d{4,8}|60(?:[12]\\d{5,6}|6\\d{7})|7(?:(?:1|3\\d)\\d{7}|5[03-9]\\d{3,7})|20[2-59]\\d\\d",,,,"10112345"],,,[,,,,,,,,,[-1]]],FJ:[,[,,"45\\d{5}|(?:0800\\d|[235-9])\\d{6}",,,,,,,[7,11]],[,,"603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}",
	,,,"3212345",,,[7]],[,,"(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",,,,"7012345",,,[7]],[,,"0800\\d{7}",,,,"08001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FJ",679,"0(?:0|52)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FK:[,[,,"[2-7]\\d{4}",,,,,,,[5]],[,,"[2-47]\\d{4}",,,,"31234"],[,,"[56]\\d{4}",,,,"51234"],[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FK",500,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FM:[,[,,"[39]\\d{6}",,,,,,,[7]],[,,"(?:3[2357]0[1-9]|9[2-6]\\d\\d)\\d{3}",,,,"3201234"],[,,"(?:3[2357]0[1-9]|9[2-7]\\d\\d)\\d{3}",,,,"3501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"FM",691,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[39]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
	FO:[,[,,"(?:[2-8]\\d|90)\\d{4}",,,,,,,[6]],[,,"(?:20|[34]\\d|8[19])\\d{4}",,,,"201234"],[,,"(?:[27][1-9]|5\\d)\\d{4}",,,,"211234"],[,,"80[257-9]\\d{3}",,,,"802123"],[,,"90(?:[13-5][15-7]|2[125-7]|99)\\d\\d",,,,"901123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:6[0-36]|88)\\d{4}",,,,"601234"],"FO",298,"00",,,,"(10(?:01|[12]0|88))",,,,[[,"(\\d{6})","$1",["[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],FR:[,[,,"[1-9]\\d{8}",,,,,,,[9]],[,,"[1-5]\\d{8}",,,,"123456789"],
	[,,"700\\d{6}|(?:6\\d|7[3-9])\\d{7}",,,,"612345678"],[,,"80[0-5]\\d{6}",,,,"801234567"],[,,"8[129]\\d{7}",,,,"891123456"],[,,"884\\d{6}",,,,"884012345"],[,,,,,,,,,[-1]],[,,"9\\d{8}",,,,"912345678"],"FR",33,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["10"]],[,"(\\d{3})(\\d{3})","$1 $2",["1"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"80[6-9]\\d{6}",,,,"806123456"],,,[,,,,,,,,,[-1]]],GA:[,[,,"(?:0\\d|[2-7])\\d{6}",,,,,,,[7,8]],[,,"01\\d{6}",,,,"01441234",,,[8]],[,,"(?:0[2-7]|[2-7])\\d{6}",,,,"06031234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GA",241,"00",,,,,,,,[[,"(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,
	[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GB:[,[,,"[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",,,,,,,[7,9,10],[4,5,6,8]],[,,"(?:1(?:(?:1(?:3[0-58]|4[0-5]|5[0-26-9]|6[0-4]|[78][0-49])|3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d\\d|2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d\\d|1(?:[0-7]\\d\\d|80[04589])))|2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d|7(?:(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))\\d|6888[2-46-8]))\\d\\d",
	,,,"1212345678",,,[9,10],[4,5,6,7,8]],[,,"7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",,,,"7400123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",
	,,[10]],"GB",44,"00","0"," x",,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[024-9])",
	"[25]|7(?:0|6(?:[04-9]|2[356]))"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],1,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GD:[,[,,"(?:473|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",,,,"4732691234",
	,,,[7]],[,,"473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}",,,,"4734031234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GD",1,"011","1",,,"1|([2-9]\\d{6})$","473$1",,,,,[,,,,,,,,,[-1]],,"473",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GE:[,[,,"(?:[3-57]\\d\\d|800)\\d{6}",,,,,,,[9],[6,7]],[,,"(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}",
	,,,"322123456",,,,[6,7]],[,,"5(?:0(?:0[05]|55)\\d|1111|2222|3333|5200|75(?:00|7[78])|8(?:58[89]|888))\\d{4}|(?:5(?:[14]4|5[0157-9]|68|7[0147-9]|9[1-35-9])|790)\\d{6}",,,,"555123456"],[,,"800\\d{6}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"706\\d{6}",,,,"706123456"],"GE",995,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],
	[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"706\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GF:[,[,,"[56]94\\d{6}",,,,,,,[9]],[,,"594(?:[023]\\d|1[01]|4[03-9]|5[6-9]|6[0-3]|80|9[014])\\d{4}",,,,"594101234"],[,,"694(?:[0-249]\\d|3[0-48])\\d{4}",,,,"694201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GF",594,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],,[,,,,,,,,,[-1]],,
	,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GG:[,[,,"(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",,,,,,,[7,9,10],[6]],[,,"1481[25-9]\\d{5}",,,,"1481256789",,,[10],[6]],[,,"7(?:(?:781|839)\\d|911[17])\\d{5}",,,,"7781123456",,,[10]],[,,"80[08]\\d{7}|800\\d{6}|8001111",,,,"8001234567"],[,,"(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",,,,"9012345678",,,[7,10]],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678",,,[10]],[,,"56\\d{8}",,,,"5612345678",,,[10]],"GG",44,"00","0",,,"0|([25-9]\\d{5})$",
	"1481$1",,,,,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456",,,[10]],,,[,,,,,,,,,[-1]],[,,"(?:3[0347]|55)\\d{8}",,,,"5512345678",,,[10]],,,[,,,,,,,,,[-1]]],GH:[,[,,"(?:[235]\\d{3}|800)\\d{5}",,,,,,,[8,9],[7]],[,,"3(?:[167]2[0-6]|22[0-5]|32[0-3]|4(?:2[013-9]|3[01])|52[0-7]|82[0-2])\\d{5}|3(?:[0-8]8|9[28])0\\d{5}|3(?:0[237]|[1-9]7)\\d{6}",,,,"302345678",,,[9],[7]],[,,"56[01]\\d{6}|(?:2[0346-8]|5[0457])\\d{7}",,,,"231234567",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GH",233,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[237]|80"]],[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[[,"(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[235]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"800\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GI:[,[,,"(?:[25]\\d\\d|629)\\d{5}",,,,,,,[8]],[,,"2190[0-2]\\d{3}|2(?:00\\d|16[24-7]|2(?:2[2457]|50))\\d{4}",
	,,,"20012345"],[,,"(?:5[46-8]\\d|629)\\d{5}",,,,"57123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GI",350,"00",,,,,,,,[[,"(\\d{3})(\\d{5})","$1 $2",["2"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GL:[,[,,"(?:19|[2-689]\\d)\\d{4}",,,,,,,[6]],[,,"(?:19|3[1-7]|6[14689]|8[14-79]|9\\d)\\d{4}",,,,"321000"],[,,"(?:[25][1-9]|4[2-9])\\d{4}",,,,"221234"],[,,"80\\d{4}",,,,"801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[89]\\d{4}",
	,,,"381234"],"GL",299,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GM:[,[,,"[2-9]\\d{6}",,,,,,,[7]],[,,"(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:54[0-7]|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}",,,,"5661234"],[,,"(?:[23679]\\d|5[0-3])\\d{5}",,,,"3012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GM",220,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GN:[,[,,"(?:30|6\\d\\d|722)\\d{6}",,,,,,,[8,9]],[,,"30(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])\\d{4}",,,,"30241234",,,[8]],[,,"6[02356]\\d{7}",,,,"601123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"722\\d{6}",,,,"722123456",,,[9]],"GN",224,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]],,[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GP:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}",,,,"590201234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GP",590,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,
	,,,,[-1]]],GQ:[,[,,"222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",,,,,,,[9]],[,,"33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}",,,,"333091234"],[,,"(?:222|55[015])\\d{6}",,,,"222123456"],[,,"80\\d[1-9]\\d{5}",,,,"800123456"],[,,"90\\d[1-9]\\d{5}",,,,"900123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GQ",240,"00",,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],[,"(\\d{3})(\\d{6})","$1 $2",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GR:[,[,,"(?:[268]\\d|[79]0)\\d{8}",
	,,,,,,[10]],[,,"2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",,,,"2123456789"],[,,"6(?:8[57-9]|9\\d)\\d{7}",,,,"6912345678"],[,,"800\\d{7}",,,,"8001234567"],[,,"90[19]\\d{7}",,,
	,"9091234567"],[,,"8(?:0[16]|12|25)\\d{7}",,,,"8011234567"],[,,"70(?:0[3-8]0|707)\\d{5}",,,,"7003000123"],[,,,,,,,,,[-1]],"GR",30,"00",,,,,,,,[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],[,"(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GT:[,[,,"(?:1\\d{3}|[2-7])\\d{7}",,,,,,,[8,11]],[,,"[267][2-9]\\d{6}",,,,"22456789",,,[8]],[,,
	"[3-5]\\d{7}",,,,"51234567",,,[8]],[,,"18[01]\\d{8}",,,,"18001112222",,,[11]],[,,"19\\d{9}",,,,"19001112222",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GT",502,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GU:[,[,,"(?:[58]\\d\\d|671|900)\\d{7}",,,,,,,[10],[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
	,,,"6713001234",,,,[7]],[,,"671(?:3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[0236-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",,,,"6713001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"GU",1,"011","1",,,"1|([3-9]\\d{6})$",
	"671$1",,1,,,[,,,,,,,,,[-1]],,"671",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GW:[,[,,"[49]\\d{8}|4\\d{6}",,,,,,,[7,9]],[,,"443\\d{6}",,,,"443201234",,,[9]],[,,"9(?:5\\d|6[569]|77)\\d{6}",,,,"955012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"40\\d{5}",,,,"4012345",,,[7]],"GW",245,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["40"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],GY:[,
	[,,"(?:862\\d|9008)\\d{3}|(?:[2-46]\\d|77)\\d{5}",,,,,,,[7]],[,,"(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-24-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|77[1-57])\\d{4}",,,,"2201234"],[,,"6\\d{6}",,,,"6091234"],[,,"(?:289|862)\\d{4}",,,,"2891234"],[,,"9008\\d{3}",,,,"9008123"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"GY",592,"001",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HK:[,[,,"8[0-46-9]\\d{6,7}|9\\d{4}(?:\\d(?:\\d(?:\\d{4})?)?)?|(?:[235-79]\\d|46)\\d{6}",
	,,,,,,[5,6,7,8,9,11]],[,,"(?:384[0-24]|58(?:0[1-8]|1[2-9]))\\d{4}|(?:2(?:[13-8]\\d|2[013-9]|9[0-24-9])|3(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69]|89))\\d{5}",,,,"21234567",,,[8]],[,,"(?:46(?:0[0-6]|1[0-2]|4[0-57-9])|5730|(?:626|848)[01]|707[1-5]|929[03-9])\\d{4}|(?:5(?:[1-59][0-46-9]|6[0-4689]|7[0-2469])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}",,,,"51234567",,,[8]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900(?:[0-24-9]\\d{7}|3\\d{1,4})",,,,"90012345678",
	,,[5,6,7,8,11]],[,,,,,,,,,[-1]],[,,"8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",,,,"81123456",,,[8]],[,,,,,,,,,[-1]],"HK",852,"00(?:30|5[09]|[126-9]?)",,,,,,"00",,[[,"(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],[,"(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],,[,,"7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
	,,,"71123456",,,[8]],,,[,,,,,,,,,[-1]],[,,"30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}",,,,"30161234",,,[8]],,,[,,,,,,,,,[-1]]],HN:[,[,,"8\\d{10}|[237-9]\\d{7}",,,,,,,[8,11]],[,,"2(?:2(?:0[019]|1[1-36]|[23]\\d|4[04-6]|5[57]|6[24]|7[0135689]|8[01346-9]|9[0-2])|4(?:07|2[3-59]|3[13-689]|4[0-68]|5[1-35])|5(?:0[78]|16|4[03-5]|5\\d|6[014-6]|74|80)|6(?:[056]\\d|17|2[07]|3[04]|4[0-378]|[78][0-8]|9[01])|7(?:6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",,,,"22123456",,,[8]],[,,"[37-9]\\d{7}",,
	,,"91234567",,,[8]],[,,"8002\\d{7}",,,,"80021234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"HN",504,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["8"]]],[[,"(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]],[,,,,,,,,,[-1]],,,[,,"8002\\d{7}",,,,,,,[11]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HR:[,[,,"(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}",,,,,,,[6,7,8,9]],[,,"1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
	,,,"12345678",,,[8,9],[6,7]],[,,"9(?:751\\d{5}|8\\d{6,7})|9(?:01|[1259]\\d|7[0679])\\d{6}",,,,"921234567",,,[8,9]],[,,"80[01]\\d{4,6}",,,,"800123456",,,[7,8,9]],[,,"6[01459]\\d{6}|6[01]\\d{4,5}",,,,"611234",,,[6,7,8]],[,,,,,,,,,[-1]],[,,"7[45]\\d{6}",,,,"74123456",,,[8]],[,,,,,,,,,[-1]],"HR",385,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["6[01]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})",
	"$1 $2 $3",["[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-5]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"62\\d{6,7}|72\\d{6}",,,,"62123456",,,[8,9]],,,[,,,,,,,,,[-1]]],HT:[,[,,"[2-489]\\d{7}",,,,,,,[8]],[,,"2(?:2\\d|5[1-5]|81|9[149])\\d{5}",,,,"22453300"],[,,"[34]\\d{7}",,,,"34101234"],[,,"8\\d{7}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}",
	,,,"98901234"],"HT",509,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-489]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],HU:[,[,,"[2357]\\d{8}|[1-9]\\d{7}",,,,,,,[8,9],[6,7]],[,,"(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}",,,,"12345678",,,[8],[6,7]],[,,"(?:[257]0|3[01])\\d{7}",,,,"201234567",,,[9]],[,,"[48]0\\d{6}",,,,"80123456",,,[8]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"21\\d{7}",,,,"211234567",
	,,[9]],"HU",36,"00","06",,,"06",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57-9]"],"06 $1"]],,[,,,,,,,,,[-1]],,,[,,"[48]0\\d{6}",,,,,,,[8]],[,,"38\\d{7}",,,,"381234567",,,[9]],,,[,,,,,,,,,[-1]]],ID:[,[,,"(?:(?:007803|8\\d{4})\\d|[1-36])\\d{6}|[1-9]\\d{8,10}|[2-9]\\d{7}",,,,,,,[7,8,9,10,11,12,13],[5,6]],[,,"2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
	,,,"218350123",,,[7,8,9,10,11],[5,6]],[,,"8[1-35-9]\\d{7,10}",,,,"812345678",,,[9,10,11,12]],[,,"007803\\d{7}|(?:177\\d|800)\\d{5,7}",,,,"8001234567",,,[8,9,10,11,13]],[,,"809\\d{7}",,,,"8091234567",,,[10]],[,,"804\\d{7}",,,,"8041234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ID",62,"00[189]","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],
	[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],[,"(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],[,"(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],[,"(\\d{3})(\\d{5,8})",
	"$1 $2",["[2-79]"],"(0$1)"],[,"(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],[,"(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],[,"(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"(?:007803\\d|8071)\\d{6}",,,,,,,[10,13]],[,,"(?:1500|8071\\d{3})\\d{3}",,,,"8071123456",,,[7,10]],,,[,,,,,,,,,[-1]]],IE:[,[,,"(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
	,,,,,,[7,8,9,10],[5,6]],[,,"(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8[0-46-9])|5[23679]|6[4-6]|7[14]|9[04])\\d{7}",,,,"2212345",,,,[5,6]],[,,"8(?:22|[35-9]\\d)\\d{6}",,,,"850123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"15(?:1[2-8]|[2-8]0|9[089])\\d{6}",,,,"1520123456",,,[10]],[,,"18[59]0\\d{6}",,,,"1850123456",,,[10]],[,,"700\\d{6}",,,,"700123456",,,[9]],[,,"76\\d{7}",,,,"761234567",,,[9]],"IE",353,
	"00","0",,,"0",,,,[[,"(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],[,"(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d)(\\d{3})(\\d{4})",
	"$1 $2 $3 $4",["8"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,"18[59]0\\d{6}",,,,,,,[10]],[,,"818\\d{6}",,,,"818123456",,,[9]],,,[,,"8[35-9]5\\d{7}",,,,"8551234567",,,[10]]],IL:[,[,,"1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",,,,,,,[7,8,9,10,11,12]],[,,"153\\d{8,9}|[2-489]\\d{7}",,,,"21234567",,,[8,11,12],[7]],[,,"5(?:(?:[0-389][2-9]|4[1-9]|6\\d)\\d|5(?:01|2[2-6]|3[23]|4[45]|5[05689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}",,,,"502345678",,,[9]],[,,"1(?:255|80[019]\\d{3})\\d{3}",
	,,,"1800123456",,,[7,10]],[,,"1212\\d{4}|1(?:200|9(?:0[01]|19))\\d{6}",,,,"1919123456",,,[8,10]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,"78(?:33|55|77|81)\\d{5}|7(?:18|2[23]|3[237]|47|6[58]|7\\d|82|9[235-9])\\d{6}",,,,"771234567",,,[9]],"IL",972,"0(?:0|1[2-9])","0",,,"0",,,,[[,"(\\d{4})(\\d{3})","$1-$2",["125"]],[,"(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],[,"(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})",
	"$1-$2-$3",["12"]],[,"(\\d{4})(\\d{6})","$1-$2",["159"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],[,"(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],,[,,,,,,,,,[-1]],,,[,,"1700\\d{6}",,,,,,,[10]],[,,"1599\\d{6}",,,,"1599123456",,,[10]],,,[,,"151\\d{8,9}",,,,"15112340000",,,[11,12]]],IM:[,[,,"1624\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1624[5-8]\\d{5}",,,,"1624756789",,,,[6]],[,,"76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}",,,,"7924123456"],[,,"808162\\d{4}",
	,,,"8081624567"],[,,"8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}",,,,"9016247890"],[,,,,,,,,,[-1]],[,,"70\\d{8}",,,,"7012345678"],[,,"56\\d{8}",,,,"5612345678"],"IM",44,"00","0",,,"0|([5-8]\\d{5})$","1624$1",,,,,[,,,,,,,,,[-1]],,"74576|(?:16|7[56])24",[,,,,,,,,,[-1]],[,,"3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}",,,,"5512345678"],,,[,,,,,,,,,[-1]]],IN:[,[,,"(?:00800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",,,,,,,[8,9,10,11,12,13],[6,7]],[,,"782[0-6][2-7]\\d{5}|(?:170[24]|2(?:80[13468]|90\\d)|380\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:11|2[02]|33|4[04]|79|80)[2-7]\\d{7}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[13-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1-5]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[0189])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",
	,,,"7410410123",,,[10],[6,7,8]],[,,"(?:6(?:1279|350[0-6])|7(?:3(?:1(?:11|7[02-8])|411)|4[47](?:11|7[02-8])|5111|700[02-9]|88(?:11|7[02-9])|9(?:313|79[07-9]))|8(?:079[04-9]|(?:16|2[014]|3[126]|6[136]|7[78]|8[34]|91)7[02-8]))\\d{5}|7(?:28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7])[089]\\d{5}|(?:6(?:0(?:0[0-3569]|26|33)|2(?:[06]\\d|3[02589]|8[0-479]|9[0-79])|3(?:0[0-79]|5[1-9]|6[0-4679]|7[0-24-9]|[89]\\d)|9(?:0[019]|13))|7(?:0\\d\\d|19[0-5]|2(?:[0235-79]\\d|[14][017-9]|8[0-59])|3(?:[05-8]\\d|1[089]|2[5-8]|3[017-9]|4[07-9]|9[016-9])|4(?:0\\d|1[015-9]|[29][89]|39|[47][089]|8[389])|5(?:[0346-8]\\d|1[07-9]|2[04-9]|5[017-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589]|[6-9]\\d)|7(?:0[289]|[1-9]\\d)|8(?:[0-79]\\d|8[089])|9(?:[089]\\d|7[02-8]))|8(?:0(?:[01589]\\d|6[67]|7[02-8])|1(?:[0-57-9]\\d|6[089])|2(?:[014][089]|[235-9]\\d)|3(?:[03-57-9]\\d|[126][089])|[45]\\d\\d|6(?:[02457-9]\\d|[136][089])|7(?:0[07-9]|[1-69]\\d|[78][089])|8(?:[0-25-9]\\d|3[089]|4[0489])|9(?:[02-9]\\d|1[0289]))|9\\d{3})\\d{6}",
	,,,"8123456789",,,[10]],[,,"00800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))",,,,"1800123456"],[,,"186[12]\\d{9}",,,,"1861123456789",,,[13]],[,,"1860\\d{7}",,,,"18603451234",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IN",91,"00","0",,,"0",,,,[[,"(\\d{7})","$1",["575"]],[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
	["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
	"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"],
	"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],
	"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{2})(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3 $4",["0"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],,,1]],[[,"(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],,,1],[,"(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",
	["140"],,,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-7]|80[2-46]","11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
	"1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|(?:55|61)2|7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:1(?:29|60|8[06])|261|552|788[01])[2-7]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])"],
	"0$1",,1],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|[4-8])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|[4-8])|7(?:1(?:[013-8]|9[6-9])|3179)|807(?:1|9[1-3])|(?:1552|7(?:28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],
	"0$1",,1],[,"(\\d{5})(\\d{5})","$1 $2",["[6-9]"],"0$1",,1],[,"(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["1(?:6|8[06])","1(?:6|8[06]0)"],,,1],[,"(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],,,1]],[,,,,,,,,,[-1]],,,[,,"1(?:600\\d{6}|800\\d{4,9})|(?:00800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"],[,,"140\\d{7}",,,,"1409305260",,,[10]],,,[,,,,,,,,,[-1]]],IO:[,[,,"3\\d{6}",,,,,,,[7]],[,,"37\\d{5}",,,,"3709100"],[,,"38\\d{5}",,,,"3801234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],"IO",246,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IQ:[,[,,"(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}",,,,"12345678",,,[8,9],[6,7]],[,,"7[3-9]\\d{8}",,,,"7912345678",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"IQ",964,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],IR:[,[,,"[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",,,,,,,[4,5,6,7,10],[8]],[,,"(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}",,,,"2123456789",,,[6,7,10],[4,5,
	8]],[,,"9(?:(?:0(?:[1-35]\\d|44)|(?:[13]\\d|2[0-2])\\d)\\d|9(?:(?:[0-2]\\d|44)\\d|5[15]0|8(?:1\\d|88)|9(?:0[013]|1[0134]|21|77|9[6-9])))\\d{5}",,,,"9123456789",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"993\\d{7}",,,,"9932123456",,,[10]],"IR",98,"00","0",,,"0",,,,[[,"(\\d{4,5})","$1",["96"],"0$1"],[,"(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],
	[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))",,,,,,,[4,5,10]],[,,"96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",,,,"9601",,,[4,5]],,,[,,,,,,,,,[-1]]],IS:[,[,,"(?:38\\d|[4-9])\\d{6}",,,,,,,[7,9]],[,,"(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-245]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|87[23])\\d{4}",
	,,,"4101234",,,[7]],[,,"(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[027-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-8]\\d|9[0-3])|8(?:2[0-59]|[3469]\\d|5[1-9]|8[28]))\\d{4}",,,,"6111234"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"90\\d{5}",,,,"9011234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"49\\d{5}",,,,"4921234",,,[7]],"IS",354,"00|1(?:0(?:01|[12]0)|100)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],
	[,,"809\\d{4}",,,,"8091234",,,[7]],,,[,,"(?:689|8(?:7[0189]|80)|95[48])\\d{4}",,,,"6891234",,,[7]]],IT:[,[,,"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,,[6,7,8,9,10,11,12]],[,,"0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
	,,,"0212345678",,,[6,7,8,9,10,11]],[,,"3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",,,,"800123456",,,[6,9]],[,,"(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"IT",39,"00",,,,,,,,[[,"(\\d{4,5})","$1",["1(?:0|9[246])","1(?:0|9(?:2[2-9]|[46]))"]],
	[,"(\\d{6})","$1",["1(?:1|92)"]],[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{2})(\\d{4})(\\d{5})",
	"$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[[,"(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],[,"(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],[,"(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],[,"(\\d{4})(\\d{4})","$1 $2",["894"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1[4679]|[38]"]],
	[,"(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],[,"(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["3"]]],[,,,,,,,,,[-1]],1,,[,,"848\\d{6}",,,,,,,[9]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],JE:[,[,,"1534\\d{6}|(?:[3578]\\d|90)\\d{8}",,,,,,,[10],[6]],[,,"1534[0-24-8]\\d{5}",,,,"1534456789",,,,[6]],[,,"7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",,,,"7797712345"],
	[,,"80(?:07(?:35|81)|8901)\\d{4}",,,,"8007354567"],[,,"(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",,,,"9018105678"],[,,,,,,,,,[-1]],[,,"701511\\d{4}",,,,"7015115678"],[,,"56\\d{8}",,,,"5612345678"],"JE",44,"00","0",,,"0|([0-24-8]\\d{5})$","1534$1",,,,,[,,"76(?:0[0-2]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}",,,,"7640123456"],,,[,,,,,,,,,[-1]],[,,"(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
	,,,"5512345678"],,,[,,,,,,,,,[-1]]],JM:[,[,,"(?:[58]\\d\\d|658|900)\\d{7}",,,,,,,[10],[7]],[,,"(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:5(?:02|1[0-468]|2[35]|63)|6(?:0[1-3579]|1[0237-9]|[23]\\d|40|5[06]|6[2-589]|7[05]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}",,,,"8765230123",,,,[7]],[,,"(?:658295|876(?:(?:2[14-9]|[348]\\d)\\d|5(?:0[13-9]|17|[2-57-9]\\d|6[0-24-9])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",,,,"8762101234",
	,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"JM",1,"011","1",,,"1",,,,,,[,,,,,,,,,[-1]],,"658|876",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],JO:[,[,,"900\\d{5}|(?:(?:[268]|7\\d)\\d|32|53)\\d{6}",,,,,,,[8,9]],[,,"(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[57][023]|6[03])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:[029]0|7[08]))\\d{4}",
	,,,"62001234",,,[8]],[,,"7(?:55[0-49]|(?:7[025-9]|[89][0-25-9])\\d)\\d{5}",,,,"790123456",,,[9]],[,,"80\\d{6}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,"85\\d{6}",,,,"85012345",,,[8]],[,,"70\\d{7}",,,,"700123456",,,[9]],[,,,,,,,,,[-1]],"JO",962,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],[,"(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,"74(?:66|77)\\d{5}",
	,,,"746612345",,,[9]],,,[,,,,,,,,,[-1]],[,,"8(?:10|8\\d)\\d{5}",,,,"88101234",,,[8]],,,[,,,,,,,,,[-1]]],JP:[,[,,"00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",,,,,,,[8,9,10,11,12,13,14,15,16,17]],[,,"(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}",,,,"312345678",,,[9]],[,,"[7-9]0[1-9]\\d{7}",
	,,,"9012345678",,,[10]],[,,"00(?:(?:37|66)\\d{6,13}|(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d)|(?:120|800\\d)\\d{6}",,,,"120123456"],[,,"990\\d{6}",,,,"990123456",,,[9]],[,,,,,,,,,[-1]],[,,"60\\d{7}",,,,"601234567",,,[9]],[,,"50[1-9]\\d{7}",,,,"5012345678",,,[10]],"JP",81,"010","0",,,"0",,,,[[,"(\\d{4})(\\d{4})","$1-$2",["007","0077","00777","00777[01]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])",
	"1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
	"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])","[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"],"0$1"],[,"(\\d{4})(\\d{2})(\\d{3,4})","$1-$2-$3",["007"]],[,"(\\d{4})(\\d{2})(\\d{4})","$1-$2-$3",["008"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3,4})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{4})(\\d{4,5})","$1-$2-$3",
	["0"]],[,"(\\d{4})(\\d{5})(\\d{5,6})","$1-$2-$3",["0"]],[,"(\\d{4})(\\d{6})(\\d{6,7})","$1-$2-$3",["0"]]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],[,"(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))|1(?:45|58)[67]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["[36]|4(?:2[09]|7[01])","[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[279]|49|6[0-24-689]|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9])|5(?:2|3[045]|4[0-369]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|49|6(?:[0-24]|5[0-3589]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:49|55|83)[29]|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
	"1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[0468][01]|[1-3]|5[0-69]|7[015-9]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17|3[015-9]))|4(?:2(?:[13-79]|2[01]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3[045]|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9(?:[019]|4[1-3]|6(?:[0-47-9]|5[01346-9])))|3(?:[29]|7(?:[017-9]|6[6-8]))|49|6(?:[0-24]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:223|8699)[014-9]|(?:48|829(?:2|66)|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],
	"0$1"],[,"(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3[3-8]|5[2-9])","[14]|[29][2-9]|5[3-9]|7[2-4679]|8(?:[246-9]|3(?:[3-6][2-9]|7|8[2-5])|5[2-9])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[2579]|80"],"0$1"]],[,,"20\\d{8}",,,,"2012345678",,,[10]],,,[,,"00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66)\\d{6,13}"],[,,"570\\d{6}",,,,"570123456",,,[9]],,,[,,,,,,,,,[-1]]],KE:[,[,,"(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
	,,,,,,[7,8,9,10]],[,,"(?:4[245]|5[2-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|51|66)\\d{6,7}",,,,"202012345",,,[7,8,9]],[,,"(?:1(?:0[0-2]|1[01])|7\\d\\d)\\d{6}",,,,"712123456",,,[9]],[,,"800[24-8]\\d{5,6}",,,,"800223456",,,[9,10]],[,,"900[02-9]\\d{5}",,,,"900223456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KE",254,"000","0",,,"0",,,,[[,"(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",
	["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KG:[,[,,"8\\d{9}|(?:[235-8]\\d|99)\\d{7}",,,,,,,[9,10],[5,6]],[,,"(?:3(?:1(?:[256]\\d|3[1-9]|47)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}",,,,"312123456",,,[9],[5,6]],[,,"8801\\d{5}|(?:2(?:0[0-35]|2\\d)|5(?:0[0-57-9]|[124-7]\\d)|7(?:[07]\\d|55)|99[05-9])\\d{6}",,,,"700123456",,,[9]],[,
	,"800\\d{6,7}",,,,"800123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KG",996,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],[,"(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KH:[,[,,"1\\d{9}|[1-9]\\d{7,8}",,,,,,,[8,9,10],[6,7]],[,,"23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
	,,,"23756789",,,[8,9],[6,7]],[,,"(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}",,,,"91234567",,,[8,9]],[,,"1800(?:1\\d|2[019])\\d{4}",,,,"1800123456",,,[10]],[,,"1900(?:1\\d|2[09])\\d{4}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KH",855,"00[14-9]","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KI:[,[,,"(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",,,,,,,[5,8]],[,,"(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}",,,,"31234"],[,,"73140\\d{3}|(?:630[01]|730[0-5])\\d{4}|[67]200[01]\\d{3}",,,,"72001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"30(?:0[01]\\d\\d|12(?:11|20))\\d\\d",,,,"30010000",,,[8]],
	"KI",686,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KM:[,[,,"[3478]\\d{6}",,,,,,,[7]],[,,"7[4-7]\\d{5}",,,,"7712345"],[,,"[34]\\d{6}",,,,"3212345"],[,,,,,,,,,[-1]],[,,"8\\d{6}",,,,"8001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KM",269,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KN:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"869(?:2(?:29|36)|302|4(?:6[015-9]|70))\\d{4}",
	,,,"8692361234",,,,[7]],[,,"869(?:5(?:5[6-8]|6[5-7])|66\\d|76[02-7])\\d{4}",,,,"8697652917",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"KN",1,"011","1",,,"1|([2-7]\\d{6})$","869$1",,,,,[,,,,,,,,,[-1]],,"869",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KP:[,[,,"85\\d{6}|(?:19\\d|2)\\d{7}",,,,,,,[8,10],[6,7]],[,,"(?:2\\d|85)\\d{6}",,,,"21234567",
	,,[8],[6,7]],[,,"19[1-3]\\d{7}",,,,"1921234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KP",850,"00|99","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KR:[,[,,"00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
	,,,,,,[5,6,8,9,10,11,12,13,14],[3,4,7]],[,,"(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",,,,"22123456",,,[5,6,8,9,10],[3,4,7]],[,,"10[01]\\d{6}|1(?:0[2-9]|[126-9]\\d)\\d{6,7}",,,,"1020000000",,,[9,10]],[,,"00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}",,,,"801234567",,,[9,11,12,13,14]],[,,"60[2-9]\\d{6}",,,,"602345678",,,[9]],[,,,,,,,,,[-1]],[,,"50\\d{8,9}",,,,"5012345678",,,[10,11]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"KR",82,"00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
	"0",,,"0(8(?:[1-46-8]|5\\d\\d))?",,,,[[,"(\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"],"0$1"],[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3})(\\d{3})",
	"$1 $2 $3",["003","0030"]],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"],[,"(\\d{5})(\\d{3,4})(\\d{4})","$1 $2 $3",["0"]],[,"(\\d{5})(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["0"]]],[[,"(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1","0$CC-$1"],[,"(\\d{4})(\\d{4})","$1-$2",["1"]],[,"(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60|8"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],
	"0$1","0$CC-$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1","0$CC-$1"],[,"(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1","0$CC-$1"]],[,,"15\\d{7,8}",,,,"1523456789",,,[9,10]],,,[,,"00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})",,,,,,,[11,12,13,14]],[,,"1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))\\d{4}",,,,"15441234",,,[8]],,,[,,,,,,,,,[-1]]],KW:[,[,,"(?:18|[2569]\\d\\d)\\d{5}",,,,,,,[7,8]],[,,"2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}",
	,,,"22345678",,,[8]],[,,"(?:52(?:22|5[25])|6(?:222|444|70[013-9]|888|93[039])|9(?:11[01]|333|702))\\d{4}|(?:5(?:[05]\\d|1[0-7]|6[56])|6(?:0[034679]|5[015-9]|6\\d|7[67]|9[069])|9(?:0[09]|22|4[01479]|55|6[0679]|7[1-9]|8[057-9]|9\\d))\\d{5}",,,,"50012345",,,[8]],[,,"18\\d{5}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"KW",965,"00",,,,,,,,[[,"(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],[,"(\\d{3})(\\d{5})","$1 $2",["[25]"]]],,[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KY:[,[,,"(?:345|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"345(?:2(?:22|44)|444|6(?:23|38|40)|7(?:4[35-79]|6[6-9]|77)|8(?:00|1[45]|25|[48]8)|9(?:14|4[035-9]))\\d{4}",,,,"3452221234",,,,[7]],[,,"345(?:32[1-9]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|9(?:1[67]|2[2-9]|3[689]))\\d{4}",,,,"3453231234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"(?:345976|900[2-9]\\d\\d)\\d{4}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"KY",1,"011","1",,,"1|([2-9]\\d{6})$","345$1",,,,,[,,"345849\\d{4}",,,,"3458491234"],,"345",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],KZ:[,[,,"33622\\d{5}|(?:7\\d|80)\\d{8}",,,,,,,[10],[5,6]],[,,"(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
	,,,"7123456789",,,,[5,6]],[,,"7(?:0[0-25-8]|47|6[02-4]|7[15-8]|85)\\d{7}",,,,"7710009998"],[,,"800\\d{7}",,,,"8001234567"],[,,"809\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,"751\\d{7}",,,,"7511234567"],"KZ",7,"810","8",,,"8",,"8~10",,,,[,,,,,,,,,[-1]],,"33|7",[,,"751\\d{7}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LA:[,[,,"(?:2\\d|3)\\d{8}|(?:[235-8]\\d|41)\\d{6}",,,,,,,[8,9,10],[6]],[,,"(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",,,,"21212862",,,[8],[6]],[,,"20(?:[29]\\d|5[24-689]|7[6-8])\\d{6}",
	,,,"2023123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LA",856,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"30\\d{7}",,,,"301234567",,,[9]],,,[,,,,,,,,,[-1]]],LB:[,[,,"[7-9]\\d{7}|[13-9]\\d{6}",,,,,,,[7,8]],[,,"(?:(?:[14-69]\\d|8[02-9])\\d|7(?:[2-57]\\d|62|8[0-7]|9[04-9]))\\d{4}",
	,,,"1123456",,,[7]],[,,"(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[1-3]))\\d{5}",,,,"71123456"],[,,,,,,,,,[-1]],[,,"9[01]\\d{6}",,,,"90123456",,,[8]],[,,"80\\d{6}",,,,"80123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LB",961,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LC:[,[,,"(?:[58]\\d\\d|758|900)\\d{7}",
	,,,,,,[10],[7]],[,,"758(?:4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|638)\\d{4}",,,,"7584305678",,,,[7]],[,,"758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[01]))\\d{4}",,,,"7582845678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"LC",1,"011","1",,,"1|([2-7]\\d{6})$","758$1",,,,,[,,,,,,,,,[-1]],,"758",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	,,[,,,,,,,,,[-1]]],LI:[,[,,"90\\d{5}|(?:[2378]|6\\d\\d)\\d{6}",,,,,,,[7,9]],[,,"(?:2(?:01|1[27]|22|3\\d|6[02-578]|96)|3(?:33|40|7[0135-7]|8[048]|9[0269]))\\d{4}",,,,"2345678",,,[7]],[,,"756\\d{4}|(?:6(?:499|5[0-3]\\d|6(?:0[0-7]|10|2[06-9]|39))|7[37-9])\\d{5}",,,,"660234567"],[,,"80(?:02[28]|9\\d\\d)\\d\\d",,,,"8002222",,,[7]],[,,"90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d",,,,"9002222",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LI",423,"00","0",,,"0|(10(?:01|20|66))",,,,[[,"(\\d{3})(\\d{2})(\\d{2})",
	"$1 $2 $3",["[237-9]"],,"$CC $1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"870(?:28|87)\\d\\d",,,,"8702812",,,[7]],,,[,,"697(?:56|[78]\\d)\\d{4}",,,,"697861234",,,[9]]],LK:[,[,,"(?:[1-7]\\d|[89]1)\\d{7}",,,,,,,[9],[7]],[,,"(?:[189]1|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}",,,,"112345678",,,,[7]],[,,"7[0-25-8]\\d{7}",,,,"712345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,
	,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LK",94,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"1973\\d{5}",,,,"197312345"],,,[,,,,,,,,,[-1]]],LR:[,[,,"(?:2|33|5\\d|77|88)\\d{7}|[45]\\d{6}",,,,,,,[7,8,9]],[,,"(?:2\\d{3}|33333)\\d{4}",,,,"21234567",,,[8,9]],[,,"(?:(?:330|555|(?:77|88)\\d)\\d|4[67])\\d{5}|5\\d{6}",,,,"770123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"332(?:02|[34]\\d)\\d{4}",
	,,,"332021234",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LR",231,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[45]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3578]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LS:[,[,,"(?:[256]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2\\d{7}",,,,"22123456"],[,,"[56]\\d{7}",,,,"50123456"],[,,"800[256]\\d{4}",,,,"80021234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LS",266,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2568]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LT:[,[,,"(?:[3469]\\d|52|[78]0)\\d{6}",,,,,,,[8]],[,,"(?:3[1478]|4[124-6]|52)\\d{6}",,,,"31234567"],[,,"6\\d{7}",,,,"61234567"],[,,"800\\d{5}",,,,"80012345"],[,,"9(?:0[0239]|10)\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,"700\\d{5}",,,,"70012345"],[,,,,,,,,,[-1]],"LT",370,"00","8",,,"[08]",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",
	["52[0-79]"],"(8-$1)",,1],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"8 $1",,1],[,"(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(8-$1)",,1],[,"(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(8-$1)",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70[67]\\d{5}",,,,"70712345"],,,[,,,,,,,,,[-1]]],LU:[,[,,"35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",,,,,,,[4,5,6,7,8,9,10,11]],[,,"(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",,,,
	"27123456"],[,,"6(?:[269][18]|5[158]|7[189]|81)\\d{6}",,,,"628123456",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"90[015]\\d{5}",,,,"90012345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,,,,,,,,[-1]],[,,"20(?:1\\d{5}|[2-689]\\d{1,7})",,,,"20201234",,,[4,5,6,7,8,9,10]],"LU",352,"00",,,,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",,,,[[,"(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
	,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"],,"$CC $1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"],,"$CC $1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",
	["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],,"$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],LV:[,[,,"(?:[268]\\d|90)\\d{6}",,,,,,,[8]],[,,"6\\d{7}",,,,"63123456"],[,,"2\\d{7}",,,,"21234567"],[,,"80\\d{6}",,,,"80123456"],[,,"90\\d{6}",,,,"90123456"],[,,"81\\d{6}",,,,"81123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LV",371,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[269]|8[01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],
	LY:[,[,,"(?:[2569]\\d|71)\\d{7}",,,,,,,[9],[7]],[,,"(?:2[13-5]|5[1347]|6[1-479]|71)\\d{7}",,,,"212345678",,,,[7]],[,,"9[1-6]\\d{7}",,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"LY",218,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{7})","$1-$2",["[25-79]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MA:[,[,,"[5-8]\\d{8}",,,,,,,[9]],[,,"5(?:29|38)[89]0\\d{4}|5(?:2(?:[015-7]\\d|2[2-9]|3[2-57]|4[2-46-8]|8[235-7]|90)|3(?:[0-4]\\d|[57][2-9]|6[2-8]|80|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
	,,,"520123456"],[,,"692[12]\\d{5}|(?:6(?:[0-7]\\d|8[0-247-9]|9[013-9])|7(?:0[06-8]|6[1267]|7[0-27]))\\d{6}",,,,"650123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89\\d{7}",,,,"891234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5924[0-2]\\d{4}",,,,"592401234"],"MA",212,"00","0",,,"0",,,,[[,"(\\d{5})(\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5[45]"],"0$1"],[,"(\\d{4})(\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|9)|892"],"0$1"],[,"(\\d{2})(\\d{7})",
	"$1-$2",["8"],"0$1"],[,"(\\d{3})(\\d{6})","$1-$2",["[5-7]"],"0$1"]],,[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MC:[,[,,"870\\d{5}|(?:[349]|6\\d)\\d{7}",,,,,,,[8,9]],[,,"(?:870|9[2-47-9]\\d)\\d{5}",,,,"99123456",,,[8]],[,,"4(?:4\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",,,,"612345678"],[,,"90\\d{6}",,,,"90123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MC",377,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["8"]],[,"(\\d{2})(\\d{3})(\\d{3})",
	"$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[39]"]],[,"(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["6"],"0$1"]],[,,,,,,,,,[-1]],,,[,,"870\\d{5}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MD:[,[,,"(?:[235-7]\\d|[89]0)\\d{6}",,,,,,,[8]],[,,"(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}",
	,,,"22212345"],[,,"(?:562|6\\d\\d|7(?:[189]\\d|6[07]|7[457-9]))\\d{5}",,,,"62112345"],[,,"800\\d{5}",,,,"80012345"],[,,"90[056]\\d{5}",,,,"90012345"],[,,"808\\d{5}",,,,"80812345"],[,,,,,,,,,[-1]],[,,"3[08]\\d{6}",,,,"30123456"],"MD",373,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"803\\d{5}",,,,"80312345"],,,[,,,,,,,,,[-1]]],ME:[,
	[,,"(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",,,,,,,[8,9],[6]],[,,"(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:[01][2467]|2[2-467]))\\d{5}",,,,"30234567",,,[8],[6]],[,,"6(?:00|3[024]|6[0-25]|[7-9]\\d)\\d{5}",,,,"67622901",,,[8]],[,,"80(?:[0-2578]|9\\d)\\d{5}",,,,"80080002"],[,,"9(?:4[1568]|5[178])\\d{5}",,,,"94515151",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"78[1-49]\\d{5}",,,,"78108780",,,[8]],"ME",382,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],,[,
	,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"77[1-9]\\d{5}",,,,"77273012",,,[8]],,,[,,,,,,,,,[-1]]],MF:[,[,,"(?:590|69\\d)\\d{6}",,,,,,,[9]],[,,"590(?:0[079]|[14]3|[27][79]|30|5[0-268]|87)\\d{4}",,,,"590271234"],[,,"69(?:0\\d\\d|1(?:2[29]|3[0-5]))\\d{4}",,,,"690001234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MF",590,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MG:[,[,,"[23]\\d{8}",,,,,,,[9],[7]],[,,"2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}",
	,,,"202123456",,,,[7]],[,,"3[2-49]\\d{7}",,,,"321234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"22\\d{7}",,,,"221234567"],"MG",261,"00","0",,,"0|([24-9]\\d{6})$","20$1",,,[[,"(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MH:[,[,,"329\\d{4}|(?:[256]\\d|45)\\d{5}",,,,,,,[7]],[,,"(?:247|528|625)\\d{4}",,,,"2471234"],[,,"(?:(?:23|54)5|329|45[56])\\d{4}",,,,"2351234"],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"635\\d{4}",,,,"6351234"],"MH",692,"011","1",,,"1",,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MK:[,[,,"[2-578]\\d{7}",,,,,,,[8],[6,7]],[,,"(?:2(?:[23]\\d|5[0-24578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}",,,,"22012345",,,,[6,7]],[,,"7(?:(?:[0-25-8]\\d|3[2-4]|9[23])\\d|4(?:21|60))\\d{4}",,,,"72345678"],[,,"800\\d{5}",
	,,,"80012345"],[,,"5[02-9]\\d{6}",,,,"50012345"],[,,"8(?:0[1-9]|[1-9]\\d)\\d{5}",,,,"80123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MK",389,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ML:[,[,,"(?:[246-9]\\d|50)\\d{6}",,,,,,,[8]],[,,"2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",
	,,,"20212345"],[,,"2(?:079|17\\d)\\d{4}|(?:50|[679]\\d|8[239])\\d{6}",,,,"65012345"],[,,"80\\d{6}",,,,"80012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ML",223,"00",,,,,,,,[[,"(\\d{4})","$1",["67[057-9]|74[045]","67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]],[,,,,,,,,,[-1]],,,[,,"80\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MM:[,[,,"1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
	,,,,,,[6,7,8,9,10],[5]],[,,"(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[2-469]|39|46|6[25]|7[0-3]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|2[246]|39|46|62|7[0-3]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[0-3])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|247[23]|3(?:20\\d|470)|4(?:2[04]\\d|47[23])|7(?:(?:3\\d|8[01459])\\d|4(?:39|60|7[013]))))\\d{4}|5(?:2(?:2\\d{5,6}|47[023]\\d{4})|(?:347[23]|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[0-2])|8(?:20\\d|47[02])|9(?:20\\d|47[01]))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:2\\d|4[1-9]|51)\\d|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",
	,,,"1234567",,,[6,7,8,9],[5]],[,,"(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|6[7-9]\\d|7(?:3|[5-9]\\d)|8(?:8[4-9]|9\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6]|9(?:[089]|[5-7]\\d\\d))\\d)\\d{4}|9[69]1\\d{6}|9[68]\\d{6}",,,,"92123456",,,[7,8,9,10]],[,,"80080(?:[01][1-9]|2\\d)\\d{3}",,,,"8008001234",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1333\\d{4}|[12]468\\d{4}",,,,"13331234",,,[8]],"MM",95,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],
	[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],[,"(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],[,"(\\d)(\\d{5})(\\d{4})","$1 $2 $3",
	["9"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MN:[,[,,"[12]\\d{7,9}|[57-9]\\d{7}",,,,,,,[8,9,10],[4,5,6]],[,,"[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}|(?:11(?:3\\d|4[568])|(?:(?:21|5[0568])\\d|70[0-5])\\d)\\d{4}|[12]2(?:[1-3]\\d{5,6}|7\\d{6})",,,,"50123456",,,,[4,5,6]],[,,"(?:8(?:[05689]\\d|3[01])|9(?:[014-9]\\d|20|3[0-4]))\\d{5}",,,,"88123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"7(?:100|5(?:0[0579]|1[015]|[389]5|[57][57])|(?:6[0167]|7\\d|8[01])\\d)\\d{4}",
	,,,"75153456",,,[8]],"MN",976,"001","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[12]1"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[57-9]"]],[,"(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],[,"(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],[,"(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MO:[,[,,"(?:28|[68]\\d)\\d{6}",,,,,,,[8]],[,,"(?:28[2-57-9]|8(?:11|[2-57-9]\\d))\\d{5}",
	,,,"28212345"],[,,"6(?:[2356]\\d\\d|8(?:[02][5-9]|[1478]\\d|[356][0-4]))\\d{4}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MO",853,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[268]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MP:[,[,,"[58]\\d{9}|(?:67|90)0\\d{7}",,,,,,,[10],[7]],[,,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,
	,"670(?:2(?:3[3-7]|56|8[5-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",,,,"6702345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"MP",1,"011","1",,,"1|([2-9]\\d{6})$","670$1",,1,,,[,,,,,,,,,[-1]],,"670",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MQ:[,[,,"(?:596|69\\d)\\d{6}",,,,,,,[9]],[,,"596(?:0[0-7]|10|2[7-9]|3[05-9]|4[0-46-8]|[5-7]\\d|8[09]|9[4-8])\\d{4}",
	,,,"596301234"],[,,"69(?:6(?:[0-47-9]\\d|5[0-6]|6[0-4])|727)\\d{4}",,,,"696201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MQ",596,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[56]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MR:[,[,,"(?:[2-4]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"(?:25[08]|35\\d|45[1-7])\\d{5}",,,,"35123456"],[,,"[2-4][0-46-9]\\d{6}",,,,"22123456"],[,,"800\\d{5}",,,,"80012345"],[,,
	,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MR",222,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MS:[,[,,"66449\\d{5}|(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"664491\\d{4}",,,,"6644912345",,,,[7]],[,,"66449[2-6]\\d{4}",,,,"6644923456",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",
	,,,"5002345678"],[,,,,,,,,,[-1]],"MS",1,"011","1",,,"1|(4\\d{6})$","664$1",,,,,[,,,,,,,,,[-1]],,"664",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MT:[,[,,"3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",,,,,,,[8]],[,,"2(?:0(?:[19]\\d|3[1-4]|6[059])|[1-357]\\d\\d)\\d{4}",,,,"21001234"],[,,"(?:7(?:210|[79]\\d\\d)|9(?:2(?:1[01]|31)|69[67]|8(?:1[1-3]|89|97)|9\\d\\d))\\d{4}",,,,"96961234"],[,,"800[3467]\\d{4}",,,,"80071234"],[,,"5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",,,,"50037123"],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3550\\d{4}",,,,"35501234"],"MT",356,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]],,[,,"7117\\d{4}",,,,"71171234"],,,[,,,,,,,,,[-1]],[,,"501\\d{5}",,,,"50112345"],,,[,,,,,,,,,[-1]]],MU:[,[,,"(?:[2-468]|5\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:2(?:[03478]\\d|1[0-7]|6[0-79])|4(?:[013568]\\d|2[4-7])|54(?:[34]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}",,,,"54480123"],[,,"5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|5(?:2[589]|4[3489]|7\\d|8[0-689]|9[0-8])\\d{5}",,,,"52512345",
	,,[8]],[,,"80[0-2]\\d{4}",,,,"8001234",,,[7]],[,,"30\\d{5}",,,,"3012345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3(?:20|9\\d)\\d{4}",,,,"3201234",,,[7]],"MU",230,"0(?:0|[24-7]0|3[03])",,,,,,"020",,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],[,"(\\d{4})(\\d{4})","$1 $2",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MV:[,[,,"(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",,,,,,,[7,10]],[,,"(?:3(?:0[0-3]|3[0-59])|6(?:[57][02468]|6[024-68]|8[024689]))\\d{4}",,,,"6701234",
	,,[7]],[,,"46[46]\\d{4}|(?:7[2-9]|9[13-9])\\d{5}",,,,"7712345",,,[7]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MV",960,"0(?:0|19)",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1-$2",["[3467]|9[13-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"4[05]0\\d{4}",,,,"4001234",,,[7]],,,[,,,,,,,,,[-1]]],MW:[,[,,"1\\d{6}(?:\\d{2})?|(?:[23]1|77|88|99)\\d{7}",,,,,,,[7,9]],[,,"(?:1[2-9]|21\\d\\d)\\d{5}",
	,,,"1234567"],[,,"111\\d{6}|(?:77|88|99)\\d{7}",,,,"991234567",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"31\\d{7}",,,,"310123456",,,[9]],"MW",265,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[17-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MX:[,
	[,,"(?:1(?:[01467]\\d|[2359][1-9]|8[1-79])|[2-9]\\d)\\d{8}",,,,,,,[10,11],[7,8]],[,,"(?:2(?:0[01]|2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
	,,,"2001234567",,,[10],[7,8]],[,,"(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))\\d{7}",
	,,,"12221234567",,,,[7,8]],[,,"8(?:00|88)\\d{7}",,,,"8001234567",,,[10]],[,,"900\\d{7}",,,,"9001234567",,,[10]],[,,"300\\d{7}",,,,"3001234567",,,[10]],[,,"500\\d{7}",,,,"5001234567",,,[10]],[,,,,,,,,,[-1]],"MX",52,"0[09]","01",,,"0(?:[12]|4[45])|1",,"00",,[[,"(\\d{5})","$1",["53"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],,,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],,,1],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})",
	"$2 $3 $4",["1"],,,1]],[[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"],,,1],[,"(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 $3 $4",["1(?:33|5[56]|81)"],,,1],[,"(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 $3 $4",["1"],,,1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MY:[,[,,"1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",,,,,,,[8,9,10],[6,7]],[,,"(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",
	,,,"323856789",,,[8,9],[6,7]],[,,"1(?:4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:0[3-9]|1[01]))|(?:[2379][2-9]|4[235-9]|(?:59|6)\\d)\\d|8(?:1[23]|[236]\\d|4[06]|5[7-9]|7[016-9]|8[01]|9[0-8]))\\d{5}",,,,"123456789",,,[9,10]],[,,"1[378]00\\d{6}",,,,"1300123456",,,[10]],[,,"1600\\d{6}",,,,"1600123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"154(?:6(?:0\\d|1[0-3])|8(?:[25]1|4[0189]|7[0-4679]))\\d{4}",,,,"1546012345",,,[10]],"MY",
	60,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[37][2-9]|8[1-9])|8"],"0$1"],[,"(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1[36-8]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],MZ:[,[,,"(?:2|8\\d)\\d{7}",,,,,,,[8,9]],[,,"2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}",
	,,,"21123456",,,[8]],[,,"8[2-7]\\d{7}",,,,"821234567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"MZ",258,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NA:[,[,,"[68]\\d{7,8}",,,,,,,[8,9]],[,,"6(?:1(?:[02-4]\\d\\d|17)|2(?:17|54\\d|69|70)|3(?:17|2[0237]\\d|34|6[289]|7[01]|81)|4(?:17|(?:27|41|5[25])\\d|69|7[01])|5(?:17|2[236-8]\\d|69|7[01])|6(?:17|26\\d|38|42|69|7[01])|7(?:17|(?:2[2-4]|30)\\d|6[89]|7[01]))\\d{4}|6(?:1(?:2[2-7]|3[01378]|4[0-4]|69|7[014])|25[0-46-8]|32\\d|4(?:2[0-27]|4[016]|5[0-357])|52[02-9]|62[56]|7(?:2[2-69]|3[013]))\\d{4}",
	,,,"61221234"],[,,"(?:60|8[1245])\\d{7}",,,,"811234567",,,[9]],[,,"80\\d{7}",,,,"800123456",,,[9]],[,,"8701\\d{5}",,,,"870123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8(?:3\\d\\d|86)\\d{5}",,,,"88612345"],"NA",264,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,
	[-1]],,,[,,,,,,,,,[-1]]],NC:[,[,,"[2-57-9]\\d{5}",,,,,,,[6]],[,,"(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}",,,,"201234"],[,,"(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",,,,"751234"],[,,,,,,,,,[-1]],[,,"36\\d{4}",,,,"366711"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NC",687,"00",,,,,,,,[[,"(\\d{3})","$1",["5[6-8]"]],[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]],[[,"(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[2-57-9]"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NE:[,[,,"[0289]\\d{7}",
	,,,,,,[8]],[,,"2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",,,,"20201234"],[,,"(?:8[014589]|9\\d)\\d{6}",,,,"93123456"],[,,"08\\d{6}",,,,"08123456"],[,,"09\\d{6}",,,,"09123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NE",227,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[01]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NF:[,[,,"[13]\\d{5}",
	,,,,,,[6],[5]],[,,"(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}",,,,"106609",,,,[5]],[,,"3[58]\\d{4}",,,,"381234",,,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NF",672,"00",,,,"([0-258]\\d{4})$","3$1",,,[[,"(\\d{2})(\\d{4})","$1 $2",["1"]],[,"(\\d)(\\d{5})","$1 $2",["3"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NG:[,[,,"(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}",,,,,,,[7,8,10,11,12,13,14],[5,6]],[,,"(?:(?:[1-356]\\d|4[02-8]|7[0-79]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[0-3578])\\d{5}",
	,,,"18040123",,,[7,8],[5,6]],[,,"(?:707[0-3]|8(?:01|19)[01])\\d{6}|(?:70[1-689]|8(?:0[2-9]|1[0-8])|90[1-35-9])\\d{7}",,,,"8021234567",,,[10]],[,,"800\\d{7,11}",,,,"80017591759",,,[10,11,12,13,14]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NG",234,"009","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["78"],"0$1"],[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[3-7]|8[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})",
	"$1 $2 $3",["[7-9]"],"0$1"],[,"(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],[,"(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"700\\d{7,11}",,,,"7001234567",,,[10,11,12,13,14]],,,[,,,,,,,,,[-1]]],NI:[,[,,"(?:1800|[25-8]\\d{3})\\d{4}",,,,,,,[8]],[,,"2\\d{7}",,,,"21234567"],[,,"(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}",,,,"81234567"],[,,"1800\\d{4}",,,,"18001234"],[,,,,,,,,,[-1]],[,,,,,,,,,
	[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NI",505,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NL:[,[,,"(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|[89]\\d{6,9}|1\\d{4,5}",,,,,,,[5,6,7,8,9,10]],[,,"(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
	,,,"101234567",,,[9]],[,,"6[1-58]\\d{7}",,,,"612345678",,,[9]],[,,"800\\d{4,7}",,,,"8001234",,,[7,8,9,10]],[,,"90[069]\\d{4,7}",,,,"9061234",,,[7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:85|91)\\d{7}",,,,"851234567",,,[9]],"NL",31,"00","0",,,"0",,,,[[,"(\\d{4})","$1",["1[238]|[34]"]],[,"(\\d{2})(\\d{3,4})","$1 $2",["14"]],[,"(\\d{6})","$1",["1"]],[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})",
	"$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],[[,"(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],[,"(\\d)(\\d{8})","$1 $2",["6"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],[,,"66\\d{7}",,,,"662345678",,,[9]],,,[,,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d",
	,,,,,,[5,6]],[,,"140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d",,,,"14020",,,[5,6,9]],,,[,,,,,,,,,[-1]]],NO:[,[,,"(?:0|[2-9]\\d{3})\\d{4}",,,,,,,[5,8]],[,,"(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}",,,,"21234567",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"40612345",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,
	"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"NO",47,"00",,,,,,,,[[,"(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[489]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-7]"]]],,[,,,,,,,,,[-1]],1,"[02-689]|7[0-8]",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],NP:[,[,,"9\\d{9}|[1-9]\\d{7}",,,,,,,[8,10],[6,7]],[,,"1[0-6]\\d{6}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-79])[2-6]\\d{5}",
	,,,"14567890",,,[8],[6,7]],[,,"9(?:6[0-3]|7[245]|8[0-24-68])\\d{7}",,,,"9841234567",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NP",977,"00","0",,,"0",,,,[[,"(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],[,"(\\d{2})(\\d{6})","$1-$2",["[1-8]|9(?:[1-579]|6[2-6])"],"0$1"],[,"(\\d{3})(\\d{7})","$1-$2",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NR:[,[,,"(?:444|55\\d|888)\\d{4}",,,,,,,[7]],[,,"(?:444|888)\\d{4}",,,,"4441234"],[,
	,"55[4-9]\\d{4}",,,,"5551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NR",674,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[458]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NU:[,[,,"(?:[47]|888\\d)\\d{3}",,,,,,,[4,7]],[,,"[47]\\d{3}",,,,"7012",,,[4]],[,,"888[4-9]\\d{3}",,,,"8884012",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"NU",683,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["8"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],NZ:[,[,,"[28]\\d{7,9}|[346]\\d{7}|(?:508|[79]\\d)\\d{6,7}",,,,,,,[8,9,10],[7]],[,,"24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}",,,,"32345678",,,[8],[7]],[,,"2[0-28]\\d{8}|2[0-27-9]\\d{7}|21\\d{6}",,,,"211234567"],[,,"508\\d{6,7}|80\\d{6,8}",,,,"800123456"],[,,"90\\d{6,7}",,,,"900123456",,,[8,9]],[,,,,,,,,,[-1]],[,,"70\\d{7}",,,,"701234567",,,[9]],[,,,,,,,,,[-1]],"NZ",64,"0(?:0|161)","0",,,"0",,"00",,[[,"(\\d{3})(\\d{2})(\\d{3})",
	"$1 $2 $3",["[89]0"],"0$1"],[,"(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[59]|80"],"0$1"],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["2[028]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7|86"],"0$1"]],,[,,"[28]6\\d{6,7}",,,,"26123456",,,[8,9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],OM:[,[,,"(?:[279]\\d{3}|500)\\d{4}|8007\\d{4,5}",,,,,,,[7,8,9]],[,,"2[2-6]\\d{6}",,,,"23123456",
	,,[8]],[,,"90[1-9]\\d{5}|(?:7[1289]|9[1-9])\\d{6}",,,,"92123456",,,[8]],[,,"500\\d{4}|8007\\d{4,5}",,,,"80071234"],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"OM",968,"00",,,,,,,,[[,"(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],[,"(\\d{2})(\\d{6})","$1 $2",["2"]],[,"(\\d{4})(\\d{4})","$1 $2",["[79]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PA:[,[,,"(?:[1-57-9]|6\\d)\\d{6}",,,,,,,[7,8]],[,,"(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|[68][58]|7[0167]|9[39])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[026-9])|3(?:[089]\\d|1[014-7]|2[0-35]|33|4[0-579]|55|6[068]|7[06-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[05]|7[0-24-9]|8[7-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
	,,,"2001234",,,[7]],[,,"(?:1[16]1|21[89]|6(?:[02-9]\\d|1[0-6])\\d|8(?:1[01]|7[23]))\\d{4}",,,,"61234567"],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,"(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}",,,,"8601234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PA",507,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],[,"(\\d{4})(\\d{4})","$1-$2",["6"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PE:[,[,,"(?:[14-8]|9\\d)\\d{7}",,,,,,,[8,9],[6,7]],[,,"19(?:[02-68]\\d|1[035-9]|7[0-689]|9[1-9])\\d{4}|(?:1[0-8]|4[1-4]|5[1-46]|6[1-7]|7[2-46]|8[2-4])\\d{6}",
	,,,"11234567",,,[8],[6,7]],[,,"9\\d{8}",,,,"912345678",,,[9]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"805\\d{5}",,,,"80512345",,,[8]],[,,"801\\d{5}",,,,"80112345",,,[8]],[,,"80[24]\\d{5}",,,,"80212345",,,[8]],[,,,,,,,,,[-1]],"PE",51,"19(?:1[124]|77|90)00","0"," Anexo ",,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],[,"(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],[,"(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,
	,,,,,[-1]],,,[,,,,,,,,,[-1]]],PF:[,[,,"[48]\\d{7}|4\\d{5}",,,,,,,[6,8]],[,,"4(?:[09][4-689]\\d|4)\\d{4}",,,,"40412345"],[,,"8[7-9]\\d{6}",,,,"87123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PF",689,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[48]"]]],,[,,,,,,,,,[-1]],,,[,,"44\\d{4}",,,,,,,[6]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PG:[,[,,"(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
	,,,,,,[7,8]],[,,"(?:64[1-9]|7730|85[02-46-9])\\d{4}|(?:3[0-2]|4[257]|5[34]|77[0-24]|9[78])\\d{5}",,,,"3123456"],[,,"775\\d{5}|(?:7[0-689]|81)\\d{6}",,,,"70123456",,,[8]],[,,"180\\d{4}",,,,"1801234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"2(?:0[0-47]|7[568])\\d{4}",,,,"2751234",,,[7]],"PG",675,"00|140[1-3]",,,,,,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85"]],[,"(\\d{4})(\\d{4})","$1 $2",["[78]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PH:[,
	[,,"1800\\d{7,9}|(?:2|[89]\\d{4})\\d{5}|[2-8]\\d{8}|[28]\\d{7}",,,,,,,[6,8,9,10,11,12,13],[4,5,7]],[,,"(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|2\\d{5}(?:\\d{2})?|8[2-8]\\d{7}",,,,"21234567",,,[6,8,9,10],[4,5,7]],[,,"(?:81[37]|9(?:0[5-9]|1[0-24-9]|2[0-35-9]|[35]\\d|4[235-9]|6[0-25-8]|7[1-9]|8[19]|9[4-9]))\\d{7}",,,,"9051234567",,,[10]],[,,"1800\\d{7,9}",,,,"180012345678",,,[11,12,13]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PH",63,
	"00","0",,,"0",,,,[[,"(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],[,"(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})",
	"$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PK:[,[,,"122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[025-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",,,,,,,[8,9,10,11,12],[5,6,7]],[,,"(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}",
	,,,"2123456789",,,[9,10],[5,6,7,8]],[,,"3(?:[014]\\d|2[0-5]|3[0-7]|55|64)\\d{7}",,,,"3012345678",,,[10]],[,,"800\\d{5}",,,,"80012345",,,[8]],[,,"900\\d{5}",,,,"90012345",,,[8]],[,,,,,,,,,[-1]],[,,"122\\d{6}",,,,"122044444",,,[9]],[,,,,,,,,,[-1]],"PK",92,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["[89]0"],"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["1"]],[,"(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],[,"(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
	"9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],[,"(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],[,"(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
	,,,"21111825888",,,[11,12]],,,[,,,,,,,,,[-1]]],PL:[,[,,"[1-57-9]\\d{6}(?:\\d{2})?|6\\d{5,8}",,,,,,,[6,7,8,9]],[,,"(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))",,,,"123456789",,,[7,9]],[,,"(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}",,,,"512345678",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"70[01346-8]\\d{6}",,,,"701234567",,,[9]],[,,"801\\d{6}",,,,"801234567",,,[9]],[,,,,,,,,,[-1]],[,,"39\\d{7}",,,,"391234567",,,
	[9]],"PL",48,"00",,,,,,,,[[,"(\\d{5})","$1",["19"]],[,"(\\d{3})(\\d{3})","$1 $2",["11|64"]],[,"(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],[,"(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["39|45|5[0137]|6[0469]|7[02389]|8[08]"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-8]|9[145]"]]],
	,[,,"64\\d{4,7}",,,,"641234567"],,,[,,,,,,,,,[-1]],[,,"804\\d{6}",,,,"804123456",,,[9]],,,[,,,,,,,,,[-1]]],PM:[,[,,"[45]\\d{5}",,,,,,,[6]],[,,"(?:4[1-3]|50)\\d{4}",,,,"430123"],[,,"(?:4[02-4]|5[05])\\d{4}",,,,"551234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PM",508,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[45]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PR:[,[,,"(?:[589]\\d\\d|787)\\d{7}",,,,,,,[10],
	[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"(?:787|939)[2-9]\\d{6}",,,,"7872345678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"PR",1,"011","1",,,"1",,,1,,,[,,,,,,,,,[-1]],,"787|939",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PS:[,[,,"[2489]2\\d{6}|(?:1\\d|5)\\d{8}",,,,,,,[8,9,10],[7]],[,,"(?:22[2-47-9]|42[45]|82[01458]|92[369])\\d{5}",
	,,,"22234567",,,[8],[7]],[,,"5[69]\\d{7}",,,,"599123456",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,,,,,,,,[-1]],[,,"1700\\d{6}",,,,"1700123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PS",970,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PT:[,[,,"(?:[26-9]\\d|30)\\d{7}",,,,,,,[9]],[,,"2(?:[12]\\d|[35][1-689]|4[1-59]|6[1-35689]|7[1-9]|8[1-69]|9[1256])\\d{6}",
	,,,"212345678"],[,,"9(?:[1-36]\\d\\d|480)\\d{5}",,,,"912345678"],[,,"80[02]\\d{6}",,,,"800123456"],[,,"(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}",,,,"760123456"],[,,"80(?:8\\d|9[1579])\\d{5}",,,,"808123456"],[,,"884[0-4689]\\d{5}",,,,"884123456"],[,,"30\\d{7}",,,,"301234567"],"PT",351,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"70(?:7\\d|8[17])\\d{5}",,,,"707123456"],
	,,[,,"600\\d{6}",,,,"600110000"]],PW:[,[,,"(?:[25-8]\\d\\d|345|488|900)\\d{4}",,,,,,,[7]],[,,"(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}",,,,"2771234"],[,,"(?:6[2-4689]0|77\\d|88[0-4])\\d{4}",,,,"6201234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"PW",680,"01[12]",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],PY:[,[,,"59\\d{4,6}|(?:[2-46-9]\\d|5[0-8])\\d{4,7}",
	,,,,,,[6,7,8,9],[5]],[,,"(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-46-8])|7(?:4[0-4]|6[1-578]|75|8[0-8])|858)\\d{5,6}",,,,"212345678",,,[7,8,9],[5,6]],[,,"9(?:51|6[129]|[78][1-6]|9[1-5])\\d{6}",,,,"961456789",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"8700[0-4]\\d{4}",,,,"870012345",,,[9]],"PY",595,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,6})",
	"$1 $2",["[2-9]0"],"0$1"],[,"(\\d{2})(\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6[347]|7[46-8]|85"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],[,"(\\d{3})(\\d{6})","$1 $2",["9"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"[2-9]0\\d{4,7}",,,,"201234567"],
	,,[,,,,,,,,,[-1]]],QA:[,[,,"800\\d{4}|(?:2|[3-7]\\d)\\d{6}",,,,,,,[7,8]],[,,"4[04]\\d{6}",,,,"44123456",,,[8]],[,,"[35-7]\\d{7}",,,,"33123456",,,[8]],[,,"800\\d{4}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"QA",974,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["2[126]|8"]],[,"(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]],,[,,"2(?:[12]\\d|61)\\d{4}",,,,"2123456",,,[7]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RE:[,[,,"(?:26|[68]\\d)\\d{7}",,,,,,,[9]],[,,
	"262\\d{6}",,,,"262161234"],[,,"69(?:2\\d\\d|3(?:0[0-46]|1[013]|2[0-2]|3[0-39]|4\\d|5[05]|6[0-26]|7[0-27]|8[0-8]|9[0-479]))\\d{4}",,,,"692123456"],[,,"80\\d{7}",,,,"801234567"],[,,"89[1-37-9]\\d{6}",,,,"891123456"],[,,"8(?:1[019]|2[0156]|84|90)\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RE",262,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[268]"],"0$1"]],,[,,,,,,,,,[-1]],1,"262|69|8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RO:[,[,,"(?:[237]\\d|[89]0)\\d{7}|[23]\\d{5}",
	,,,,,,[6,9]],[,,"[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",,,,"211234567"],[,,"7120\\d{5}|7(?:[02-7]\\d|1[01]|8[03-8]|99)\\d{6}",,,,"712034567",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"90[036]\\d{6}",,,,"900123456",,,[9]],[,,"801\\d{6}",,,,"801123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RO",40,"00","0"," int ",,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],[,"(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],
	"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[237-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"37\\d{7}",,,,"372123456",,,[9]],,,[,,,,,,,,,[-1]]],RS:[,[,,"38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",,,,,,,[6,7,8,9,10,11,12],[4,5]],[,,"(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}",,,,"10234567",,,[7,8,9,10,11,12],[4,5,6]],[,,"6(?:[0-689]|7\\d)\\d{6,7}",,,,"601234567",,,[8,9,10]],
	[,,"800\\d{3,9}",,,,"80012345"],[,,"(?:78\\d|90[0169])\\d{3,7}",,,,"90012345",,,[6,7,8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RS",381,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],[,"(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7[06]\\d{4,10}",,,,"700123456"],,,[,,,,,,,,,[-1]]],RU:[,[,,"[347-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
	,,,"3011234567",,,,[7]],[,,"9\\d{9}",,,,"9123456789"],[,,"80[04]\\d{7}",,,,"8001234567"],[,,"80[39]\\d{7}",,,,"8091234567"],[,,,,,,,,,[-1]],[,,"808\\d{7}",,,,"8081234567"],[,,,,,,,,,[-1]],"RU",7,"810","8",,,"8",,"8~10",,[[,"(\\d{3})(\\d{2})(\\d{2})","$1-$2-$3",["[0-79]"]],[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[[,"(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",
	["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-6]2|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-6]2|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",,1],[,"(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{4})",
	"$1 $2 $3",["7"],"8 ($1)",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[3489]"],"8 ($1)",,1]],[,,,,,,,,,[-1]],1,"3[04-689]|[489]",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],RW:[,[,,"(?:06|[27]\\d\\d|[89]00)\\d{6}",,,,,,,[8,9]],[,,"(?:06|2[258]\\d)\\d{6}",,,,"250123456"],[,,"7[238]\\d{7}",,,,"720123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"900\\d{6}",,,,"900123456",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"RW",250,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["0"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SA:[,[,,"92\\d{7}|(?:[15]|8\\d)\\d{8}",,,,,,,[9,10],[7]],[,,"1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}",,,,"112345678",,,[9],[7]],[,,"5(?:[013-689]\\d|7[0-36-8])\\d{6}",,,,"512345678",,,[9]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"925\\d{6}",,,,"925012345",,,[9]],[,,"920\\d{6}",,,,"920012345",
	,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SA",966,"00","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["9"]],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["81"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"811\\d{7}",,,,"8110123456",,,[10]],,,[,,,,,,,,,[-1]]],SB:[,[,,"(?:[1-6]|[7-9]\\d\\d)\\d{4}",,,,,,,[5,7]],[,,"(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}",
	,,,"40123",,,[5]],[,,"48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}",,,,"7421234"],[,,"1[38]\\d{3}",,,,"18123",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[12]\\d{3}",,,,"51123",,,[5]],"SB",677,"0[01]",,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SC:[,[,,"8000\\d{3}|(?:[249]\\d|64)\\d{5}",,,,,,,[7]],[,,"4[2-46]\\d{5}",,,,"4217123"],
	[,,"2[5-8]\\d{5}",,,,"2510123"],[,,"8000\\d{3}",,,,"8000000"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"971\\d{4}|(?:64|95)\\d{5}",,,,"6412345"],"SC",248,"010|0[0-2]",,,,,,"00",,[[,"(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SD:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"1(?:5[3-7]|8[35-7])\\d{6}",,,,"153123456"],[,,"(?:1[0-2]|9[0-3569])\\d{7}",,,,"911231234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
	,,,,,,,,[-1]],"SD",249,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SE:[,[,,"(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",,,,,,,[6,7,8,9,10,12]],[,,"10[1-8]\\d{6}|90[1-9]\\d{4,6}|(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d{5,7}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
	,,,"8123456",,,[7,8,9]],[,,"7[02369]\\d{7}",,,,"701234567",,,[9]],[,,"20\\d{4,7}",,,,"20123456",,,[6,7,8,9]],[,,"649\\d{6}|9(?:00|39|44)[1-8]\\d{3,6}",,,,"9001234567",,,[7,8,9,10]],[,,"77[0-7]\\d{6}",,,,"771234567",,,[9]],[,,"75[1-8]\\d{6}",,,,"751234567",,,[9]],[,,,,,,,,,[-1]],"SE",46,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1"],[,"(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44)"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1"],
	[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1"],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["7"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})",
	"$1-$2 $3 $4",["8"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1"],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1"]],[[,"(\\d{2})(\\d{2,3})(\\d{2})","$1 $2 $3",["20"]],[,"(\\d{3})(\\d{4})","$1 $2",["9(?:00|39|44)"]],[,"(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]],[,"(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2,3})(\\d{2})","$1 $2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2,3})(\\d{3})","$1 $2 $3",["9(?:00|39|44)"]],[,"(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7"]],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]],[,"(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["9"]],[,"(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]"]]],[,,"74[02-9]\\d{6}",,,,"740123456",,,[9]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"(?:25[245]|67[3-68])\\d{9}",,,,"254123456789",,,[12]]],SG:[,[,,"(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",,,,,,,[8,10,11]],[,,"6[1-9]\\d{6}",,,,"61234567",,,[8]],[,,"89(?:[01]\\d|2[4-8])\\d{4}|(?:8[1-8]|9[0-8])\\d{6}",
	,,,"81234567",,,[8]],[,,"(?:18|8)00\\d{7}",,,,"18001234567",,,[10,11]],[,,"1900\\d{7}",,,,"19001234567",,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"3[12]\\d{6}",,,,"31234567",,,[8]],"SG",65,"0[0-3]\\d",,,,,,,,[[,"(\\d{4,5})","$1",["1[0135-7]|77"]],[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[[,"(\\d{4})(\\d{4})","$1 $2",["[369]|8[1-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})",
	"$1 $2 $3",["8"]],[,"(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],[,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"7000\\d{7}",,,,"70001234567",,,[11]],,,[,,,,,,,,,[-1]]],SH:[,[,,"(?:[256]\\d|8)\\d{3}",,,,,,,[4,5]],[,,"2(?:[0-57-9]\\d|6[4-9])\\d\\d",,,,"22158"],[,,"[56]\\d{4}",,,,"51234",,,[5]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"262\\d\\d",,,,"26212",,,[5]],"SH",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],1,"[256]",[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],,,[,,,,,,,,,[-1]]],SI:[,[,,"[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",,,,,,,[5,6,7,8]],[,,"(?:[1-357][2-8]|4[24-8])\\d{6}",,,,"12345678",,,[8],[7]],[,,"65(?:1\\d|55|[67]0)\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}",,,,"31234567",,,[8]],[,,"80\\d{4,6}",,,,"80123456",,,[6,7,8]],[,,"89[1-3]\\d{2,5}|90\\d{4,6}",,,,"90123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"(?:59\\d\\d|8(?:1(?:[67]\\d|8[01389])|2(?:0\\d|2[0378]|8[0-2489])|3[389]\\d))\\d{4}",,,,"59012345",,,[8]],"SI",386,"00|10(?:22|66|88|99)","0",
	,,"0",,"00",,[[,"(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],[,"(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"],"0$1"],[,"(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SJ:[,[,,"0\\d{4}|(?:[4589]\\d|79)\\d{6}",,,,,,,[5,8]],[,,"79\\d{6}",,,,"79123456",,,[8]],[,,"(?:4[015-8]|5[89]|9\\d)\\d{6}",,,,"41234567",,,[8]],[,,"80[01]\\d{5}",,,,"80012345",,,[8]],
	[,,"82[09]\\d{5}",,,,"82012345",,,[8]],[,,"810(?:0[0-6]|[2-8]\\d)\\d{3}",,,,"81021234",,,[8]],[,,"880\\d{5}",,,,"88012345",,,[8]],[,,"85[0-5]\\d{5}",,,,"85012345",,,[8]],"SJ",47,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"79",[,,,,,,,,,[-1]],[,,"(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}",,,,"02000"],,,[,,"81[23]\\d{5}",,,,"81212345",,,[8]]],SK:[,[,,"[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",,,,,,,[6,7,9]],[,,"(?:2(?:16|[2-9]\\d{3})|[3-5][1-8]\\d{3})\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d",,
	,,"221234567"],[,,"909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|[45]\\d)\\d{6}",,,,"912123456",,,[9]],[,,"800\\d{6}",,,,"800123456",,,[9]],[,,"9(?:00|[78]\\d)\\d{6}",,,,"900123456",,,[9]],[,,"8[5-9]\\d{7}",,,,"850123456",,,[9]],[,,,,,,,,,[-1]],[,,"6(?:02|5[0-4]|9[0-6])\\d{6}",,,,"690123456",,,[9]],"SK",421,"00","0",,,"0",,,,[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d{4})(\\d{3})","$1 $2",["909","9090"],"0$1"],
	[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],"0$1"]],[[,"(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],[,"(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],[,"(\\d)(\\d{3})(\\d{3})(\\d{2})","$1/$2 $3 $4",["2"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1/$2 $3 $4",["[3-5]"],
	"0$1"]],[,,"9090\\d{3}",,,,"9090123",,,[7]],,,[,,"9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}",,,,,,,[7,9]],[,,"96\\d{7}",,,,"961234567",,,[9]],,,[,,,,,,,,,[-1]]],SL:[,[,,"(?:[2378]\\d|99)\\d{6}",,,,,,,[8],[6]],[,,"22\\d{6}",,,,"22221234",,,,[6]],[,,"(?:25|3[0134]|7[5-9]|8[08]|99)\\d{6}",,,,"25123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SL",232,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{6})","$1 $2",["[237-9]"],"(0$1)"]],,[,,,,,,,,,[-1]],,,[,,,,
	,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SM:[,[,,"(?:0549|[5-7]\\d)\\d{6}",,,,,,,[8,10],[6]],[,,"0549(?:8[0157-9]|9\\d)\\d{4}",,,,"0549886377",,,[10],[6]],[,,"6[16]\\d{6}",,,,"66661212",,,[8]],[,,,,,,,,,[-1]],[,,"7[178]\\d{6}",,,,"71123456",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"5[158]\\d{6}",,,,"58001110",,,[8]],"SM",378,"00",,,,"([89]\\d{5})$","0549$1",,,[[,"(\\d{6})","$1",["[89]"]],[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
	"$1 $2 $3 $4",["[5-7]"]],[,"(\\d{4})(\\d{6})","$1 $2",["0"]]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SN:[,[,,"(?:[378]\\d{4}|93330)\\d{4}",,,,,,,[9]],[,,"3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}",,,,"301012345"],[,,"7(?:[06-8]\\d|21|90)\\d{6}",,,,"701234567"],[,,"800\\d{6}",,,,"800123456"],[,,"88[4689]\\d{6}",,,,"884123456"],[,,"81[02468]\\d{6}",,,,"810123456"],[,,,,,,,,,[-1]],[,,"93330\\d{4}|3(?:392|9[01]\\d)\\d{5}",,,,"933301234"],"SN",221,"00",,,,,,,,[[,
	"(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SO:[,[,,"[346-9]\\d{8}|[12679]\\d{7}|(?:[1-4]\\d|59)\\d{5}|[1348]\\d{5}",,,,,,,[6,7,8,9]],[,,"(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|59)\\d{5}|(?:[134]\\d|8[125])\\d{4}",,,,"4012345",,,[6,7]],[,,"28\\d{5}|(?:6[1-9]|79)\\d{6,7}|(?:15|24|(?:3[59]|4[89]|8[08])\\d|60|7[1-8]|9(?:0[67]|[2-9]))\\d{6}",,,,"71123456",,,[7,8,9]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SO",252,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{4})","$1 $2",["8[125]"]],[,"(\\d{6})","$1",["[134]"]],[,"(\\d)(\\d{6})","$1 $2",["1|2[0-79]|3[0-46-8]|4[0-7]|59"]],[,"(\\d)(\\d{7})","$1 $2",["24|[67]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[348]|64|79[0-8]|90"]],[,"(\\d{2})(\\d{5,7})","$1 $2",["1|28|6[1-35-9]|799|9[2-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SR:[,[,,"(?:[2-5]|68|[78]\\d)\\d{5}",
	,,,,,,[6,7]],[,,"(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}",,,,"211234"],[,,"(?:7[124-7]|8[125-9])\\d{5}",,,,"7412345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"56\\d{4}",,,,"561234",,,[6]],"SR",597,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],[,"(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],[,"(\\d{3})(\\d{4})","$1-$2",["[6-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SS:[,[,,"[19]\\d{8}",,,,,,,[9]],[,,"18\\d{7}",,,,"181234567"],
	[,,"(?:12|9[1257])\\d{7}",,,,"977123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SS",211,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ST:[,[,,"(?:22|9\\d)\\d{5}",,,,,,,[7]],[,,"22\\d{5}",,,,"2221234"],[,,"900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}",,,,"9812345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ST",239,"00",,,,
	,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[29]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SV:[,[,,"[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?",,,,,,,[7,8,11]],[,,"2[1-6]\\d{6}",,,,"21234567",,,[8]],[,,"[67]\\d{7}",,,,"70123456",,,[8]],[,,"800\\d{4}(?:\\d{4})?",,,,"8001234",,,[7,11]],[,,"900\\d{4}(?:\\d{4})?",,,,"9001234",,,[7,11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SV",503,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[89]"]],[,"(\\d{4})(\\d{4})","$1 $2",["[267]"]],[,
	"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SX:[,[,,"7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"7215(?:4[2-8]|8[239]|9[056])\\d{4}",,,,"7215425678",,,,[7]],[,,"7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}",,,,"7215205678",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002123456"],[,,"900[2-9]\\d{6}",,,,"9002123456"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,
	,[-1]],"SX",1,"011","1",,,"1|(5\\d{6})$","721$1",,,,,[,,,,,,,,,[-1]],,"721",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SY:[,[,,"[1-39]\\d{8}|[1-5]\\d{7}",,,,,,,[8,9],[6,7]],[,,"[12]1\\d{6,7}|(?:1(?:[2356]|4\\d)|2[235]|3(?:[13]\\d|4)|4[13]|5[1-3])\\d{6}",,,,"112345678",,,,[6,7]],[,,"9(?:22|[3-589]\\d|6[024-9])\\d{6}",,,,"944567890",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"SY",963,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-5]"],
	"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1",,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],SZ:[,[,,"0800\\d{4}|(?:[237]\\d|900)\\d{6}",,,,,,,[8,9]],[,,"[23][2-5]\\d{6}",,,,"22171234",,,[8]],[,,"7[6-9]\\d{6}",,,,"76123456",,,[8]],[,,"0800\\d{4}",,,,"08001234",,,[8]],[,,"900\\d{6}",,,,"900012345",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"70\\d{6}",,,,"70012345",,,[8]],"SZ",268,"00",,,,,,,,[[,"(\\d{4})(\\d{4})","$1 $2",["[0237]"]],[,"(\\d{5})(\\d{4})","$1 $2",
	["9"]]],,[,,,,,,,,,[-1]],,,[,,"0800\\d{4}",,,,,,,[8]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TA:[,[,,"8\\d{3}",,,,,,,[4]],[,,"8\\d{3}",,,,"8999"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TA",290,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"8",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TC:[,[,,"(?:[58]\\d\\d|649|900)\\d{7}",,,,,,,[10],[7]],[,,"649(?:712|9(?:4\\d|50))\\d{4}",,,,"6497121234",,,,[7]],[,,"649(?:2(?:3[129]|4[1-7])|3(?:3[1-389]|4[1-8])|4[34][1-3])\\d{4}",
	,,,"6492311234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,"64971[01]\\d{4}",,,,"6497101234",,,,[7]],"TC",1,"011","1",,,"1|([2-479]\\d{6})$","649$1",,,,,[,,,,,,,,,[-1]],,"649",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TD:[,[,,"(?:22|[69]\\d|77)\\d{6}",,,,,,,[8]],[,,"22(?:[37-9]0|5[0-5]|6[89])\\d{4}",,,,"22501234"],[,,"(?:6[023568]|77|9\\d)\\d{6}",,
	,,"63012345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TD",235,"00|16",,,,,,"00",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2679]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TG:[,[,,"[279]\\d{7}",,,,,,,[8]],[,,"2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}",,,,"22212345"],[,,"(?:7[09]|9[0-36-9])\\d{6}",,,,"90112345"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TG",228,"00",,,,,,,,[[,
	"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TH:[,[,,"1\\d{8,9}|(?:[2-57]|[689]\\d)\\d{7}",,,,,,,[8,9,10]],[,,"(?:2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}",,,,"21234567",,,[8]],[,,"(?:14|6[1-6]|[89]\\d)\\d{7}",,,,"812345678",,,[9]],[,,"1800\\d{6}",,,,"1800123456",,,[10]],[,,"1900\\d{6}",,,,"1900123456",,,[10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"6[08]\\d{7}",,,,"601234567",,,[9]],"TH",66,"00[1-9]","0",,,"0",,,,[[,
	"(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["14|[3-9]"],"0$1"],[,"(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TJ:[,[,,"(?:00|[3-59]\\d|77|88)\\d{7}",,,,,,,[9],[3,5,6,7]],[,,"(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",,,,"372123456",,,,[3,5,6,7]],[,,"41[18]\\d{6}|(?:00|5[05]|77|88|9\\d)\\d{7}",,,,"917123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
	,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TJ",992,"810","8",,,"8",,"8~10",,[[,"(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"],,,1],[,"(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[34]7|91[78]"],,,1],[,"(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3"],,,1],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[0457-9]"],,,1]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TK:[,[,,"[2-47]\\d{3,6}",,,,,,,[4,5,6,7]],[,,"(?:2[2-4]|[34]\\d)\\d{2,5}",,,,"3101"],[,,"7[2-4]\\d{2,5}",,,,"7290"],[,,,,,,,,,[-1]],[,,,,,,,
	,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TK",690,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TL:[,[,,"7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",,,,,,,[7,8]],[,,"(?:2[1-5]|3[1-9]|4[1-4])\\d{5}",,,,"2112345",,,[7]],[,,"7[3-8]\\d{6}",,,,"77212345",,,[8]],[,,"80\\d{5}",,,,"8012345",,,[7]],[,,"90\\d{5}",,,,"9012345",,,[7]],[,,,,,,,,,[-1]],[,,"70\\d{5}",,,,"7012345",,,[7]],[,,,,,,,,,[-1]],"TL",670,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],
	[,"(\\d{4})(\\d{4})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TM:[,[,,"[1-6]\\d{7}",,,,,,,[8]],[,,"(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}",,,,"12345678"],[,,"6[1-9]\\d{6}",,,,"66123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TM",993,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],[,"(\\d{3})(\\d)(\\d{2})(\\d{2})",
	"$1 $2-$3-$4",["[1-5]"],"(8 $1)"],[,"(\\d{2})(\\d{6})","$1 $2",["6"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TN:[,[,,"[2-57-9]\\d{7}",,,,,,,[8]],[,,"81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}",,,,"30010123"],[,,"3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-6])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",,,,"20123456"],[,,"8010\\d{4}",,,,"80101234"],[,,"88\\d{6}",,,,"88123456"],[,,"8[12]10\\d{4}",,,,"81101234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TN",216,"00",,,,,,,,[[,"(\\d{2})(\\d{3})(\\d{3})",
	"$1 $2 $3",["[2-57-9]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TO:[,[,,"(?:0800|[5-8]\\d{3})\\d{3}|[2-8]\\d{4}",,,,,,,[5,7]],[,,"(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}",,,,"20123",,,[5]],[,,"(?:6(?:3[02]|85|90)|7(?:[2-46]0|[578]\\d)|8[46-9]\\d)\\d{4}",,,,"7715123",,,[7]],[,,"0800\\d{3}",,,,"0800222",,,[7]],[,,"55[04]\\d{4}",,,,"5501234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TO",676,"00",,,,,,,,[[,"(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],
	[,"(\\d{4})(\\d{3})","$1 $2",["0"]],[,"(\\d{3})(\\d{4})","$1 $2",["[5-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TR:[,[,,"(?:[2-58]\\d\\d|900)\\d{7}|4\\d{6}",,,,,,,[7,10]],[,,"(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",,,,"2123456789",,,[10]],[,,"56161\\d{5}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}",,,,"5012345678",,,[10]],[,,"800\\d{7}",,,,"8001234567",,,[10]],[,,"(?:8[89]8|900)\\d{7}",
	,,,"9001234567",,,[10]],[,,,,,,,,,[-1]],[,,"592(?:21[12]|461)\\d{4}",,,,"5922121234",,,[10]],[,,,,,,,,,[-1]],"TR",90,"00","0",,,"0",,,,[[,"(\\d{3})(\\d)(\\d{3})","$1 $2 $3",["444"],,,1],[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[0589]|90"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[0589]|90"],
	"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5(?:[0-59]|61)","5(?:[0-59]|616)","5(?:[0-59]|6161)"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",,1]],[,,"512\\d{7}",,,,"5123456789",,,[10]],,,[,,"444\\d{4}",,,,,,,[7]],[,,"(?:444|850\\d{3})\\d{4}",,,,"4441444"],,,[,,,,,,,,,[-1]]],TT:[,[,,"(?:[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"868(?:2(?:01|1[89]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}",,,,"8682211234",
	,,,[7]],[,,"868(?:2(?:6[6-9]|[7-9]\\d)|[37](?:0[1-9]|1[02-9]|[2-9]\\d)|4[6-9]\\d|6(?:20|78|8\\d))\\d{4}",,,,"8682911234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"TT",1,"011","1",,,"1|([2-46-8]\\d{6})$","868$1",,,,,[,,,,,,,,,[-1]],,"868",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"868619\\d{4}",,,,"8686191234",,,,[7]]],TV:[,[,,"(?:2|7\\d\\d|90)\\d{4}",
	,,,,,,[5,6,7]],[,,"2[02-9]\\d{3}",,,,"20123",,,[5]],[,,"(?:7[01]\\d|90)\\d{4}",,,,"901234",,,[6,7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"TV",688,"00",,,,,,,,,,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],TW:[,[,,"(?:[24589]|7\\d)\\d{8}|[2-8]\\d{7}|2\\d{6}",,,,,,,[7,8,9,10]],[,,"24\\d{6,7}|(?:6412|8(?:2(?:3\\d|66)|36[24-9]))\\d{4}|(?:2[235-8]\\d|3[2-9]|4(?:[239]\\d|[78])|5[2-8]|6[235-79]|7[1-9]|8[7-9])\\d{6}",,,,"221234567",,,[8,9]],
	[,,"9[0-8]\\d{7}",,,,"912345678",,,[9]],[,,"80[0-79]\\d{6}",,,,"800123456",,,[9]],[,,"20(?:[013-9]\\d\\d|2)\\d{4}",,,,"203123456",,,[7,9]],[,,,,,,,,,[-1]],[,,"99\\d{7}",,,,"990123456",,,[9]],[,,"70\\d{8}",,,,"7012345678",,,[10]],"TW",886,"0(?:0[25-79]|19)","0","#",,"0",,,,[[,"(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],[,"(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[25][2-8]|[346]|7[1-9]|8[237-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[258]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",
	["9"],"0$1"],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"50[0-46-9]\\d{6}",,,,"500123456",,,[9]],,,[,,,,,,,,,[-1]]],TZ:[,[,,"(?:[26-8]\\d|41|90)\\d{7}",,,,,,,[9]],[,,"2[2-8]\\d{7}",,,,"222345678"],[,,"(?:6[2-9]|7[13-9])\\d{7}",,,,"621234567"],[,,"80[08]\\d{6}",,,,"800123456"],[,,"90\\d{7}",,,,"900123456"],[,,"8(?:40|6[01])\\d{6}",,,,"840123456"],[,,,,,,,,,[-1]],[,,"41\\d{7}",,,,"412345678"],"TZ",255,"00[056]","0",,,"0",,,,[[,"(\\d{3})(\\d{2})(\\d{4})",
	"$1 $2 $3",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,"(?:8(?:[04]0|6[01])|90\\d)\\d{6}"],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UA:[,[,,"[89]\\d{9}|[3-9]\\d{8}",,,,,,,[9,10],[5,6,7]],[,,"(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",,,,"311234567",,,[9],[5,6,7]],[,,"(?:50|6[36-8]|7[1-3]|9[1-9])\\d{7}",,,,"501234567",,,[9]],[,,"800[1-8]\\d{5,6}",,,,"800123456"],[,,"900[239]\\d{5,6}",,,,"900212345"],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"89[1-579]\\d{6}",,,,"891234567",,,[9]],"UA",380,"00","0",,,"0",,"0~0",,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["4[45][0-5]|5(?:0|6[37])|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]","4[45][0-5]|5(?:0|6(?:3[14-7]|7))|6(?:[12][018]|[36-8])|7|89|9[1-9]|(?:48|57)[0137-9]"],
	"0$1"],[,"(\\d{4})(\\d{5})","$1 $2",["[3-6]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UG:[,[,,"800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",,,,,,,[9],[5,6,7]],[,,"(?:20(?:(?:(?:[0147]\\d|5[0-4])\\d|2(?:40|[5-9]\\d)|3(?:0[67]|2[0-4])|810)\\d|6(?:00[0-2]|[15-9]\\d\\d|30[0-4]))|[34]\\d{5})\\d{3}",,,,"312345678",,,,[5,6,7]],[,,"7260\\d{5}|7(?:[0157-9]\\d|20|4[0-4])\\d{6}",,,,"712345678"],[,,"800[1-3]\\d{5}",,,,"800123456"],
	[,,"90[1-3]\\d{6}",,,,"901123456"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UG",256,"00[057]","0",,,"0",,,,[[,"(\\d{4})(\\d{5})","$1 $2",["202","2024"],"0$1"],[,"(\\d{3})(\\d{6})","$1 $2",["[27-9]|4(?:6[45]|[7-9])"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[34]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],US:[,[,,"[2-9]\\d{9}",,,,,,,[10],[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
	,,,"2015550123",,,,[7]],[,,"(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[167]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[017]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|2[08]|3[0-28]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[0179]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
	,,,"2015550123",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"US",1,"011","1",,,"1",,,1,[[,"(\\d{3})(\\d{4})","$1-$2",["[2-9]"]],[,"(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],,,1]],[[,"(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[2-9]"]]],[,,,,,,,,,[-1]],1,,[,,,,,,,,,[-1]],[,,"710[2-9]\\d{6}",,,,"7102123456"],,,[,,,,,,,,,[-1]]],UY:[,[,,"(?:[249]\\d\\d|80)\\d{5}|9\\d{6}",
	,,,,,,[7,8]],[,,"(?:2\\d|4[2-7])\\d{6}",,,,"21231234",,,[8],[7]],[,,"9[1-9]\\d{6}",,,,"94231234",,,[8]],[,,"80[05]\\d{4}",,,,"8001234",,,[7]],[,,"90[0-8]\\d{4}",,,,"9001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UY",598,"0(?:0|1[3-9]\\d)","0"," int. ",,"0",,"00",,[[,"(\\d{3})(\\d{4})","$1 $2",["8|90"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],[,"(\\d{4})(\\d{4})","$1 $2",["[24]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],UZ:[,[,,"[679]\\d{8}",
	,,,,,,[9]],[,,"78(?:1(?:13|2[02]|50)|2(?:10|2[139]|98)|77[01])\\d{4}|(?:6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|1[12]\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|6(?:22|3[12457]|4[13-8])|9(?:22|5[1-9])))\\d{5}",,,,"669050123"],[,,"(?:6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:0\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|6(?:2(?:2[1245]|4[2-4])|39\\d|41[179]|5(?:[349]\\d|5[0-2])|7(?:0[017]|[13]\\d|22|44|55|67|88))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07])))|9[0-57-9]\\d{3})\\d{4}",
	,,,"912345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"UZ",998,"810","8",,,"8",,"8~10",,[[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[679]"],"8 $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VA:[,[,,"0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",,,,,,,[6,7,8,9,10,11,12]],[,,"06698\\d{1,6}",,,,"0669812345",,,[6,7,8,9,10,11]],[,,"3[1-9]\\d{8}|3[2-9]\\d{7}",,,,"3123456789",,,[9,10]],[,,"80(?:0\\d{3}|3)\\d{3}",
	,,,"800123456",,,[6,9]],[,,"(?:0878\\d\\d|89(?:2|4[5-9]\\d))\\d{3}|89[45][0-4]\\d\\d|(?:1(?:44|6[346])|89(?:5[5-9]|9))\\d{6}",,,,"899123456",,,[6,8,9,10]],[,,"84(?:[08]\\d{3}|[17])\\d{3}",,,,"848123456",,,[6,9]],[,,"1(?:78\\d|99)\\d{6}",,,,"1781234567",,,[9,10]],[,,"55\\d{8}",,,,"5512345678",,,[10]],"VA",39,"00",,,,,,,,,,[,,,,,,,,,[-1]],,"06698",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"3[2-8]\\d{9,10}",,,,"33101234501",,,[11,12]]],VC:[,[,,"(?:[58]\\d\\d|784|900)\\d{7}",,,,,,,[10],[7]],[,,"784(?:266|3(?:6[6-9]|7\\d|8[0-24-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}",
	,,,"7842661234",,,,[7]],[,,"784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4]))\\d{4}",,,,"7844301234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VC",1,"011","1",,,"1|([2-7]\\d{6})$","784$1",,,,,[,,,,,,,,,[-1]],,"784",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VE:[,[,,"[89]00\\d{7}|(?:[24]\\d|50)\\d{8}",,,,,,,[10],[7]],[,,"(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|50[01])\\d{7}",
	,,,"2121234567",,,,[7]],[,,"4(?:1[24-8]|2[46])\\d{7}",,,,"4121234567"],[,,"800\\d{7}",,,,"8001234567"],[,,"900\\d{7}",,,,"9001234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"VE",58,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{7})","$1-$2",["[24589]"],"0$1","$CC $1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VG:[,[,,"(?:284|[58]\\d\\d|900)\\d{7}",,,,,,,[10],[7]],[,,"284496[0-5]\\d{3}|284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}",,,,"2842291234",,,,[7]],[,,"284496[6-9]\\d{3}|284(?:3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|99)|54[0-57])\\d{4}",
	,,,"2843001234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VG",1,"011","1",,,"1|([2-578]\\d{6})$","284$1",,,,,[,,,,,,,,,[-1]],,"284",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],VI:[,[,,"[58]\\d{9}|(?:34|90)0\\d{7}",,,,,,,[10],[7]],[,,"340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:22|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",
	,,,"3406421234",,,,[7]],[,,"340(?:2(?:0[12]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:22|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|27|7\\d)|884|998)\\d{4}",,,,"3406421234",,,,[7]],[,,"8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",,,,"8002345678"],[,,"900[2-9]\\d{6}",,,,"9002345678"],[,,,,,,,,,[-1]],[,,"5(?:00|2[12]|33|44|66|77|88)[2-9]\\d{6}",,,,"5002345678"],[,,,,,,,,,[-1]],"VI",1,"011","1",,,"1|([2-9]\\d{6})$","340$1",,1,,,[,,,,,,,,,[-1]],,"340",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,
	,[-1]]],VN:[,[,,"[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",,,,,,,[7,8,9,10]],[,,"2(?:0[3-9]|1[0-689]|2[0-25-9]|3[2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|8[2-79]|9[0-4679])\\d{7}",,,,"2101234567",,,[10]],[,,"(?:52[238]|8(?:79|9[689])|99[013-9])\\d{6}|(?:3\\d|5[689]|7[06-9]|8[1-68]|9[0-8])\\d{7}",,,,"912345678",,,[9]],[,,"1800\\d{4,6}|12(?:03|28)\\d{4}",,,,"1800123456",,,[8,9,10]],[,,"1900\\d{4,6}",,,,"1900123456",,,[8,9,10]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"672\\d{6}",,,,"672012345",,,[9]],
	"VN",84,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[17]99"],"0$1",,1],[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",,1],[,"(\\d{3})(\\d{4,5})","$1 $2",["69"],"0$1",,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[[,"(\\d{2})(\\d{5})","$1 $2",["80"],"0$1",
	,1],[,"(\\d{4})(\\d{4,6})","$1 $2",["1"],,,1],[,"(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[69]"],"0$1",,1],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[3578]"],"0$1",,1],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",,1],[,"(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",,1]],[,,,,,,,,,[-1]],,,[,,"[17]99\\d{4}|69\\d{5,6}",,,,,,,[7,8]],[,,"(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",,,,"1992000",,,[7,8]],,,[,,,,,,,,,[-1]]],VU:[,[,,"(?:[23]\\d|[48]8)\\d{3}|(?:[57]\\d|90)\\d{5}",,,,,,,[5,7]],
	[,,"(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}",,,,"22123",,,[5]],[,,"57[2-5]\\d{4}|(?:5[0-689]|7[013-7])\\d{5}",,,,"5912345",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"90[1-9]\\d{4}",,,,"9010123",,,[7]],"VU",678,"00",,,,,,,,[[,"(\\d{3})(\\d{4})","$1 $2",["[579]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"(?:3[03]|900\\d)\\d{3}",,,,"30123"],,,[,,,,,,,,,[-1]]],WF:[,[,,"(?:[45]0|68|72|8\\d)\\d{4}",,,,,,,[6]],[,,"(?:50|68|72)\\d{4}",,,,"501234"],[,,"(?:50|68|72|8[23])\\d{4}",
	,,,"501234"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WF",681,"00",,,,,,,,[[,"(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[4-8]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"[48]0\\d{4}",,,,"401234"]],WS:[,[,,"[2-6]\\d{4}|8\\d{5}(?:\\d{4})?|[78]\\d{6}",,,,,,,[5,6,7,10]],[,,"(?:[2-5]\\d|6[1-9])\\d{3}",,,,"22123",,,[5]],[,,"(?:7[25-7]|8(?:[3-7]|9\\d{3}))\\d{5}",,,,"7212345",,,[7,10]],[,,"800\\d{3}",,,,"800123",,,[6]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"WS",685,"0",,,,,,,,[[,"(\\d{5})","$1",["[2-6]"]],[,"(\\d{3})(\\d{3,7})","$1 $2",["8"]],[,"(\\d{2})(\\d{5})","$1 $2",["7"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],XK:[,[,,"[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}",,,,,,,[8,9]],[,,"(?:2[89]|39)0\\d{6}|[23][89]\\d{6}",,,,"28012345"],[,,"4[3-9]\\d{6}",,,,"43201234",,,[8]],[,,"800\\d{5}",,,,"80001234",,,[8]],[,,"900\\d{5}",,,,"90001234",,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	"XK",383,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[23]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YE:[,[,,"(?:1|7\\d)\\d{7}|[1-7]\\d{6}",,,,,,,[7,8,9],[6]],[,,"17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-68])\\d{5}",,,,"1234567",,,[7,8],[6]],[,,"7[0137]\\d{7}",,,,"712345678",,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"YE",967,"00","0",,,"0",,,,[[,"(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],YT:[,[,,"80\\d{7}|(?:26|63)9\\d{6}",,,,,,,[9]],[,,"269(?:0[67]|5[01]|6\\d|[78]0)\\d{4}",,,,"269601234"],[,,"639(?:0[0-79]|1[019]|[267]\\d|3[09]|[45]0|9[04-79])\\d{4}",,,,"639012345"],[,,"80\\d{7}",,,,"801234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,
	,,,[-1]],[,,,,,,,,,[-1]],"YT",262,"00","0",,,"0",,,,,,[,,,,,,,,,[-1]],,"269|63",[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZA:[,[,,"[1-9]\\d{8}|8\\d{4,7}",,,,,,,[5,6,7,8,9]],[,,"(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",,,,"101234567",,,[9]],[,,"8[1-4]\\d{3,7}|(?:6\\d|7[0-46-9]|85)\\d{7}",,,,"711234567"],[,,"80\\d{7}",,,,"801234567",,,[9]],[,,"(?:86[2-9]|9[0-2]\\d)\\d{6}",,,,"862345678",,,[9]],[,,"860\\d{6}",,,,"860123456",,,[9]],[,,,,,,,,,[-1]],[,,"87\\d{7}",,,,"871234567",,,[9]],
	"ZA",27,"00","0",,,"0",,,,[[,"(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"861\\d{6}",,,,"861123456",,,[9]],,,[,,,,,,,,,[-1]]],ZM:[,[,,"800\\d{6}|(?:21|[79]\\d)\\d{7}",,,,,,,[9],[6]],[,,"21[1-8]\\d{6}",,,,"211234567",,,,[6]],[,,"(?:7[67]|9[5-8])\\d{7}",,,,"955123456"],[,,"800\\d{6}",,,,"800123456"],
	[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"ZM",260,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3})","$1 $2",["[1-9]"]],[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],[,"(\\d{2})(\\d{7})","$1 $2",["[79]"],"0$1"]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],ZW:[,[,,"2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
	,,,,,,[5,6,7,8,9,10],[3,4]],[,,"(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
	,,,"1312345",,,,[3,4]],[,,"7(?:1[2-9]|[378][1-9])\\d{6}",,,,"712345678",,,[9]],[,,"80(?:[01]\\d|20|8[0-8])\\d{3}",,,,"8001234",,,[7]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"86(?:1[12]|22|30|44|55|77|8[368])\\d{6}",,,,"8686123456",,,[10]],"ZW",263,"00","0",,,"0",,,,[[,"(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"],"0$1"],[,"(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],[,"(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],
	[,"(\\d{2})(\\d{7})","$1 $2",["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2","2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"],"(0$1)"],[,"(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],[,"(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)","2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"],"0$1"],[,"(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"],[,"(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
	"0$1"],[,"(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]|39|54"],"0$1"],[,"(\\d{4})(\\d{3,5})","$1 $2",["(?:25|54)8","258|5483"],"0$1"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],800:[,[,,"\\d{8}",,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",800,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],808:[,[,,"\\d{8}",
	,,,,,,[8]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{8}",,,,"12345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",808,,,,,,,,1,[[,"(\\d{4})(\\d{4})","$1 $2"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],870:[,[,,"[35-7]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"(?:[356]\\d|7[6-8])\\d{7}",,,,"301234567"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",870,,,,,,,,,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[35-7]"]]],
	,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],878:[,[,,"10\\d{10}",,,,,,,[12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"10\\d{10}",,,,"101234567890"],"001",878,,,,,,,,1,[[,"(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],881:[,[,,"[67]\\d{8}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,"[67]\\d{8}",,,,"612345678"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
	,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",881,,,,,,,,,[[,"(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[67]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],882:[,[,,"1\\d{6,11}|3\\d{6}(?:\\d{2,5})?",,,,,,,[7,8,9,10,11,12]],[,,,,,,,,,[-1]],[,,"3(?:37\\d\\d|42)\\d{4}|3(?:2|47|7\\d{3})\\d{7}",,,,"3421234",,,[7,9,10,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|3(?:45|9\\d{3})\\d{7}",
	,,,"390123456789"],"001",882,,,,,,,,,[[,"(\\d{2})(\\d{5})","$1 $2",["16|342"]],[,"(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],[,"(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1"]],[,"(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["34[57]"]],[,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],[,"(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[13]"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,"348[57]\\d{7}",,,,"34851234567",,,[11]]],883:[,[,,"51\\d{7}(?:\\d{3})?",
	,,,,,,[9,12]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"51[013]0\\d{8}|5100\\d{5}",,,,"510012345"],"001",883,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],[,"(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["510"]],[,"(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["5"]]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]],888:[,[,,"\\d{11}",,,,,,,[11]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,
	,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",888,,,,,,,,1,[[,"(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,"\\d{11}",,,,"12345678901"],,,[,,,,,,,,,[-1]]],979:[,[,,"\\d{9}",,,,,,,[9]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,"\\d{9}",,,,"123456789"],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],"001",979,,,,,,,,1,[[,"(\\d)(\\d{4})(\\d{4})","$1 $2 $3"]],,[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]],[,,,,,,,,,[-1]],,,[,,,,,,,,,[-1]]]};/*

	 Copyright (C) 2010 The Libphonenumber Authors.

	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.
	*/
	function L(){this.a={};}L.a=void 0;L.b=function(){return L.a?L.a:L.a=new L};
	var Ba={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ca={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
	7:"7",8:"8",9:"9","+":"+","*":"*","#":"#"},Da={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",
	B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ea=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,Fa=/[+\uff0b]+/,M=/^[+\uff0b]+/,Ga=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Ha=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ia=/[\\\/] *x/,Ja=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Ka=/(?:.*?[A-Za-z]){3}.*/,La=/(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
	Ma=/^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|\u0434\u043e\u0431|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
	Na=/(\$\d)/,Oa=/^\(?\$1\)?$/;function Pa(a){var b=a.search(Ha);0<=b?(a=a.substring(b),a=a.replace(Ja,""),b=a.search(Ia),0<=b&&(a=a.substring(0,b))):a="";return a}function Qa(a){return 2>a.length?!1:N(Ma,a)}function Ra(a){return N(Ka,a)?O(a,Da):O(a,Ba)}function Sa(a){var b=Ra(a.toString());r(a);a.a(b);}function Ta(){return ba(Object.keys(K),function(a){return isNaN(a)})}function Ua(){var a=ba(Object.keys(K),function(a){return !isNaN(a)});return ca(a,function(a){return parseInt(a,10)})}
	function Va(){var a=Object.keys(J);return da(Ua(),ca(a,function(a){return parseInt(a,10)}))}function Wa(a){return null!=a&&(1!=B(a,9)||-1!=y(a,9)[0])}function O(a,b){for(var c=new q,d,e=a.length,f=0;f<e;++f)d=a.charAt(f),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function Xa(a){return 0==a.length||Oa.test(a)}function P(a){return null!=a&&isNaN(a)&&a.toUpperCase()in K}
	function R(a,b,c){if(0==w(b,2)&&v(b,5)){var d=A(b,5);if(0<d.length)return d}d=A(b,1);var e=S(b);if(0==c)return Ya(d,0,e,"");if(!(d in J))return e;a=T(a,d,U(d));b=Za(b,a,c);e=$a(e,a,c);return Ya(d,c,e,b)}function T(a,b,c){return "001"==c?V(a,""+b):V(a,c)}
	function ab(a,b){var c=W;if(!P(b))return R(c,a,1);var d=A(a,1),e=S(a);if(!(d in J))return e;if(1==d){if(null!=b&&0<=t(J[1],b.toUpperCase()))return d+" "+R(c,a,2)}else if(d==bb(c,b))return R(c,a,2);var f=V(c,b),g=A(f,11);b="";N(Ea,g)?b=g:v(f,17)&&(b=A(f,17));c=T(c,d,U(d));e=$a(e,c,1);a=Za(a,c,1);return 0<b.length?b+" "+d+" "+e+a:Ya(d,1,e,a)}function S(a){if(!v(a,2))return "";var b=""+w(a,2);return v(a,4)&&w(a,4)&&0<A(a,8)?Array(A(a,8)+1).join("0")+b:b}
	function Ya(a,b,c,d){switch(b){case 0:return "+"+a+c+d;case 1:return "+"+a+" "+c+d;case 3:return "tel:+"+a+"-"+c+d;default:return c+d}}
	function $a(a,b,c){a:{b=0==y(b,20).length||2==c?y(b,19):y(b,20);for(var d,e=b.length,f=0;f<e;++f){d=b[f];var g=B(d,3);if(0==g||0==a.search(w(d,3,g-1)))if(g=new RegExp(w(d,1)),N(g,a)){b=d;break a}}b=null;}null!=b&&(e=b,b=A(e,2),d=new RegExp(w(e,1)),A(e,5),e=A(e,4),a=2==c&&null!=e&&0<e.length?a.replace(d,b.replace(Na,e)):a.replace(d,b),3==c&&(a=a.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),a=a.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,
	"-")));return c=a}function cb(a,b){var c=W;if(!P(a))return null;b=db(V(c,a),b);try{if(v(b,6)){var d=w(b,6);return eb(c,d,a)}}catch(e){}return null}function Za(a,b,c){return v(a,3)&&0!=w(a,3).length?3==c?";ext="+w(a,3):v(b,13)?w(b,13)+A(a,3):" ext. "+A(a,3):""}
	function db(a,b){switch(b){case 4:return w(a,5);case 3:return w(a,4);case 1:return w(a,3);case 0:case 2:return w(a,2);case 5:return w(a,6);case 6:return w(a,8);case 7:return w(a,7);case 8:return w(a,21);case 9:return w(a,25);case 10:return w(a,28);default:return w(a,1)}}function fb(a,b){return X(a,w(b,1))?X(a,w(b,5))?4:X(a,w(b,4))?3:X(a,w(b,6))?5:X(a,w(b,8))?6:X(a,w(b,7))?7:X(a,w(b,21))?8:X(a,w(b,25))?9:X(a,w(b,28))?10:X(a,w(b,2))?w(b,18)||X(a,w(b,3))?2:0:!w(b,18)&&X(a,w(b,3))?1:-1:-1}
	function V(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(null==c){c=K[b];if(null==c)return null;c=(new H).a(F.h(),c);a.a[b]=c;}return c}function X(a,b){var c=a.length;return 0<B(b,9)&&-1==t(y(b,9),c)?!1:N(A(b,2),a)}function gb(a){var b=W,c=hb(b,a);var d=A(a,1);var e=T(b,d,c);null==e||"001"!=c&&d!=bb(b,c)?e=!1:(a=S(a),e=-1!=fb(a,e));return e}
	function hb(a,b){if(null==b)return null;var c=A(b,1);c=J[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=S(b);for(var d,e=c.length,f=0;f<e;f++){d=c[f];var g=V(a,d);if(v(g,23)){if(0==b.search(w(g,23))){a=d;break a}}else if(-1!=fb(b,g)){a=d;break a}}a=null;}return a}function U(a){a=J[a];return null==a?"ZZ":a[0]}function bb(a,b){a=V(a,b);if(null==a)throw Error("Invalid region code: "+b);return A(a,10)}function ib(a){a=jb(a);return 0==a||4==a}
	function kb(a,b,c,d){var e=db(c,d),f=0==B(e,9)?y(w(c,1),9):y(e,9);e=y(e,10);if(2==d)if(Wa(db(c,0)))a=db(c,1),Wa(a)&&(f=f.concat(0==B(a,9)?y(w(c,1),9):y(a,9)),ea(f),0==e.length?e=y(a,10):(e=e.concat(y(a,10)),ea(e)));else return kb(a,b,c,1);if(-1==f[0])return 5;b=b.length;if(-1<t(e,b))return 4;c=f[0];return c==b?0:c>b?2:f[f.length-1]<b?3:-1<t(f,b,1)?0:5}function jb(a){var b=W,c=S(a);a=A(a,1);if(!(a in J))return 1;a=T(b,a,U(a));return kb(b,c,a,-1)}
	function lb(a,b){a=a.toString();if(0==a.length||"0"==a.charAt(0))return 0;for(var c,d=a.length,e=1;3>=e&&e<=d;++e)if(c=parseInt(a.substring(0,e),10),c in J)return b.a(a.substring(e)),c;return 0}
	function mb(a,b,c,d,e){if(0==b.length)return 0;b=new q(b);var f;null!=c&&(f=w(c,11));null==f&&(f="NonMatch");var g=b.toString();if(0==g.length)f=20;else if(M.test(g))g=g.replace(M,""),r(b),b.a(Ra(g)),f=1;else{g=new RegExp(f);Sa(b);f=b.toString();if(0==f.search(g)){g=f.match(g)[0].length;var k=f.substring(g).match(Ga);k&&null!=k[1]&&0<k[1].length&&"0"==O(k[1],Ba)?f=!1:(r(b),b.a(f.substring(g)),f=!0);}else f=!1;f=f?5:20;}if(20!=f){if(2>=b.b.length)throw Error("Phone number too short after IDD");a=lb(b,
	d);if(0!=a)return x(e,1,a),a;throw Error("Invalid country calling code");}if(null!=c&&(f=A(c,10),g=""+f,k=b.toString(),0==k.lastIndexOf(g,0)&&(g=new q(k.substring(g.length)),k=w(c,1),k=new RegExp(A(k,2)),nb(g,c,null),g=g.toString(),!N(k,b.toString())&&N(k,g)||3==kb(a,b.toString(),c,-1))))return d.a(g),x(e,1,f),f;x(e,1,0);return 0}
	function nb(a,b,c){var d=a.toString(),e=d.length,f=w(b,15);if(0!=e&&null!=f&&0!=f.length){var g=new RegExp("^(?:"+f+")");if(e=g.exec(d)){f=new RegExp(A(w(b,1),2));var k=N(f,d),p=e.length-1;b=w(b,16);if(null==b||0==b.length||null==e[p]||0==e[p].length){if(!k||N(f,d.substring(e[0].length)))null!=c&&0<p&&null!=e[p]&&c.a(e[1]),a.set(d.substring(e[0].length));}else if(d=d.replace(g,b),!k||N(f,d))null!=c&&0<p&&c.a(e[1]),a.set(d);}}}
	function eb(a,b,c){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var d=new q,e=b.indexOf(";phone-context=");if(0<=e){var f=e+15;if("+"==b.charAt(f)){var g=b.indexOf(";",f);0<g?d.a(b.substring(f,g)):d.a(b.substring(f));}f=b.indexOf("tel:");d.a(b.substring(0<=f?f+4:0,e));}else d.a(Pa(b));b=d.toString();e=b.indexOf(";isub=");0<e&&(r(d),d.a(b.substring(0,e)));if(!Qa(d.toString()))throw Error("The string supplied did not seem to be a phone number");
	b=d.toString();if(!(P(c)||null!=b&&0<b.length&&M.test(b)))throw Error("Invalid country calling code");b=new I;a:{e=d.toString();f=e.search(La);if(0<=f&&Qa(e.substring(0,f))){g=e.match(La);for(var k=g.length,p=1;p<k;++p)if(null!=g[p]&&0<g[p].length){r(d);d.a(e.substring(0,f));e=g[p];break a}}e="";}0<e.length&&x(b,3,e);f=V(a,c);e=new q;g=0;k=d.toString();try{g=mb(a,k,f,e,b);}catch(Q){if("Invalid country calling code"==Q.message&&M.test(k)){if(k=k.replace(M,""),g=mb(a,k,f,e,b),0==g)throw Q;}else throw Q;
	}0!=g?(d=U(g),d!=c&&(f=T(a,g,d))):(Sa(d),e.a(d.toString()),null!=c&&(g=A(f,10),x(b,1,g)));if(2>e.b.length)throw Error("The string supplied is too short to be a phone number");null!=f&&(c=new q(e.toString()),nb(c,f,new q),a=kb(a,c.toString(),f,-1),2!=a&&4!=a&&5!=a&&(e=c));a=e.toString();c=a.length;if(2>c)throw Error("The string supplied is too short to be a phone number");if(17<c)throw Error("The string supplied is too long to be a phone number");if(1<a.length&&"0"==a.charAt(0)){x(b,4,!0);for(c=1;c<
	a.length-1&&"0"==a.charAt(c);)c++;1!=c&&x(b,8,c);}x(b,2,parseInt(a,10));return b}function N(a,b){return (a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1}function ob(a){this.ha=/\u2008/;this.ca="";this.m=new q;this.$="";this.j=new q;this.o=new q;this.l=!0;this.aa=this.s=this.ea=!1;this.fa=L.b();this.u=0;this.b=new q;this.ba=!1;this.i="";this.a=new q;this.f=[];this.da=a;this.ma=this.g=pb(this,this.da);}var qb=new F;x(qb,11,"NA");
	var rb=/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]*(\$\d[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]*)+$/,sb=/[- ]/;function pb(a,b){b=P(b)?bb(a.fa,b):0;a=V(a.fa,U(b));return null!=a?a:qb}
	function tb(a){for(var b=a.f.length,c=0;c<b;++c){var d=a.f[c],e=A(d,1);if(a.$==e)return !1;var f=a;var g=d,k=A(g,1);r(f.m);var p=f;g=A(g,2);var Q="999999999999999".match(k)[0];Q.length<p.a.b.length?p="":(p=Q.replace(new RegExp(k,"g"),g),p=p.replace(/9/g,"\u2008"));0<p.length?(f.m.a(p),f=!0):f=!1;if(f)return a.$=e,a.ba=sb.test(w(d,4)),a.u=0,!0}return a.l=!1}
	function ub(a,b){for(var c=[],d=b.length-3,e=a.f.length,f=0;f<e;++f){var g=a.f[f];0==B(g,3)?c.push(a.f[f]):(g=w(g,3,Math.min(d,B(g,3)-1)),0==b.search(g)&&c.push(a.f[f]));}a.f=c;}
	function vb(a,b){a.j.a(b);var c=b;Ga.test(c)||1==a.j.b.length&&Fa.test(c)?("+"==b?(c=b,a.o.a(b)):(c=Ba[b],a.o.a(c),a.a.a(c)),b=c):(a.l=!1,a.ea=!0);if(!a.l){if(!a.ea)if(wb(a)){if(xb(a))return yb(a)}else if(0<a.i.length&&(b=a.a.toString(),r(a.a),a.a.a(a.i),a.a.a(b),b=a.b.toString(),c=b.lastIndexOf(a.i),r(a.b),a.b.a(b.substring(0,c))),a.i!=zb(a))return a.b.a(" "),yb(a);return a.j.toString()}switch(a.o.b.length){case 0:case 1:case 2:return a.j.toString();case 3:if(wb(a))a.aa=!0;else return a.i=zb(a),
	Ab(a);default:if(a.aa)return xb(a)&&(a.aa=!1),a.b.toString()+a.a.toString();if(0<a.f.length){b=Bb(a,b);c=Cb(a);if(0<c.length)return c;ub(a,a.a.toString());return tb(a)?Db(a):a.l?Eb(a,b):a.j.toString()}return Ab(a)}}function yb(a){a.l=!0;a.aa=!1;a.f=[];a.u=0;r(a.m);a.$="";return Ab(a)}
	function Cb(a){for(var b=a.a.toString(),c=a.f.length,d=0;d<c;++d){var e=a.f[d],f=A(e,1);if((new RegExp("^(?:"+f+")$")).test(b)&&(a.ba=sb.test(w(e,4)),e=b.replace(new RegExp(f,"g"),w(e,2)),e=Eb(a,e),O(e,Ca)==a.o))return e}return ""}function Eb(a,b){var c=a.b.b.length;return a.ba&&0<c&&" "!=a.b.toString().charAt(c-1)?a.b+" "+b:a.b+b}
	function Ab(a){var b=a.a.toString();if(3<=b.length){for(var c=a.s&&0==a.i.length&&0<B(a.g,20)?y(a.g,20):y(a.g,19),d=c.length,e=0;e<d;++e){var f=c[e];0<a.i.length&&Xa(A(f,4))&&!w(f,6)&&!v(f,5)||(0!=a.i.length||a.s||Xa(A(f,4))||w(f,6))&&rb.test(A(f,2))&&a.f.push(f);}ub(a,b);b=Cb(a);return 0<b.length?b:tb(a)?Db(a):a.j.toString()}return Eb(a,b)}function Db(a){var b=a.a.toString(),c=b.length;if(0<c){for(var d="",e=0;e<c;e++)d=Bb(a,b.charAt(e));return a.l?Eb(a,d):a.j.toString()}return a.b.toString()}
	function zb(a){var b=a.a.toString(),c=0;if(1!=w(a.g,10))var d=!1;else d=a.a.toString(),d="1"==d.charAt(0)&&"0"!=d.charAt(1)&&"1"!=d.charAt(1);d?(c=1,a.b.a("1").a(" "),a.s=!0):v(a.g,15)&&(d=new RegExp("^(?:"+w(a.g,15)+")"),d=b.match(d),null!=d&&null!=d[0]&&0<d[0].length&&(a.s=!0,c=d[0].length,a.b.a(b.substring(0,c))));r(a.a);a.a.a(b.substring(c));return b.substring(0,c)}
	function wb(a){var b=a.o.toString(),c=new RegExp("^(?:\\+|"+w(a.g,11)+")");c=b.match(c);return null!=c&&null!=c[0]&&0<c[0].length?(a.s=!0,c=c[0].length,r(a.a),a.a.a(b.substring(c)),r(a.b),a.b.a(b.substring(0,c)),"+"!=b.charAt(0)&&a.b.a(" "),!0):!1}function xb(a){if(0==a.a.b.length)return !1;var b=new q,c=lb(a.a,b);if(0==c)return !1;r(a.a);a.a.a(b.toString());b=U(c);"001"==b?a.g=V(a.fa,""+c):b!=a.da&&(a.g=pb(a,b));a.b.a(""+c).a(" ");a.i="";return !0}
	function Bb(a,b){var c=a.m.toString();if(0<=c.substring(a.u).search(a.ha)){var d=c.search(a.ha);b=c.replace(a.ha,b);r(a.m);a.m.a(b);a.u=d;return b.substring(0,a.u+1)}1==a.f.length&&(a.l=!1);a.$="";return a.j.toString()}var W=L.b();function Fb(a){var b=W,c=hb(b,a);b=T(b,A(a,1),c);null==b?a=-1:(a=S(a),a=fb(a,b));switch(a){case 0:return "fixed-line";case 2:return "fixed-line-or-mobile";case 1:return "mobile";case 8:return "pager";case 7:return "personal-number";case 4:return "premium-rate";case 5:return "shared-cost";case 3:return "toll-free";case 9:return "uan";case 6:return "voip";default:case -1:return "unknown"}}
	function Gb(a){switch(a){case "fixed-line":return 0;case "fixed-line-or-mobile":return 2;case "mobile":return 1;case "pager":return 8;case "personal-number":return 7;case "premium-rate":return 4;case "shared-cost":return 5;case "toll-free":return 3;case "uan":return 9;case "voip":return 6;default:case "unknown":return -1}}
	function Hb(a){try{switch(jb(a)){case 0:return "is-possible";case 1:return "invalid-country-code";case 3:return "too-long";case 2:return "too-short"}if(ib(a))return "is-possible"}catch(b){}return "unknown"}function Ib(a){if("+"!==a.charAt(0))return {parsed:b,v:c};try{var b=eb(W,a,void 0);}catch(e){}if(b){var c=hb(W,b);if(null!=c&&"ZZ"!==c)return {parsed:b,v:c}}for(var d=1;4>d;++d){c=void 0;if(a.length<d+1)return {parsed:b,v:c};c=U(a.substring(1,d+1));if("ZZ"!==c)return {v:c}}return {parsed:b,v:void 0}}
	function Y(a,b){if(!(this instanceof Y))return new Y(a,b);if("string"===typeof a)var c=!1;else try{gb(a),c=!0;}catch(f){c=!1;}if(!c&&"string"!==typeof a)throw Error("Invalid phone number, expected a string");if(!c&&null!=b&&"string"!==typeof b)throw Error("Invalid region code, expected a string");if(!c){if(b&&"+"===a.charAt(0)){var d=Jb(b);a.substr(1,(""+d).length)!==""+d&&(b=null);}if(!b){var e=Ib(a);b=void 0===e.v?null:e.v;e=e.parsed;}}this.a={number:{},regionCode:b,valid:!1,possible:!1};if(c)this.b=
	a;else{this.b=null;this.a.number.input=a;if(b){if(d=Jb(b),0===d){this.a.possibility="invalid-country-code";return}}else{this.a.possibility="invalid-country-code";return}try{e?this.b=e:this.b=eb(W,a,b);}catch(f){this.a.possibility=Hb(a);return}}this.a.number.international=R(W,this.b,1);this.a.number.national=R(W,this.b,2);this.a.number.e164=R(W,this.b,0);this.a.number.rfc3966=R(W,this.b,3);this.a.number.significant=S(this.b);a=this.a;b=this.b;c=W;c=V(c,hb(c,b));null==c?b=!0:(b=S(b),b=!X(b,w(c,24)));
	a.canBeInternationallyDialled=b;this.a.possible=ib(this.b);this.a.valid=gb(this.b);this.a.type=Fb(this.b);this.a.possibility=Hb(this.b);}function Jb(a){return P(a)?bb(W,a):0}h=Y.prototype;h.toJSON=function(){return this.a};h.ka=function(){return this.a.canBeInternationallyDialled};h.va=function(){return this.a.valid};h.ua=function(){return this.a.possible};h.ra=function(){return this.a.type};h.ta=function(){return "mobile"===this.a.type||"fixed-line-or-mobile"===this.a.type};
	h.sa=function(){return "fixed-line"===this.a.type||"fixed-line-or-mobile"===this.a.type};h.na=function(a){return this.a.number[null==a?"e164":a]};h.oa=function(a){return ab(this.b,a)};h.qa=function(){return this.a.regionCode};h.la=function(){return Jb(this.a.regionCode)};function Z(a){this.f=a;this.b=new ob(a);this.a="";}h=Z.prototype;h.ja=function(a){var b=this.b;b.ca=vb(b,a);return this.a=b.ca};h.wa=function(){return this.a};
	h.xa=function(){var a=this.a;0<a.length&&this.ia(a.substr(0,a.length-1));return this.a};h.ia=function(a){var b=this.b;b.ca="";r(b.j);r(b.o);r(b.m);b.u=0;b.$="";r(b.b);b.i="";r(b.a);b.l=!0;b.ea=!1;b.s=!1;b.aa=!1;b.f=[];b.ba=!1;b.g!=b.ma&&(b.g=pb(b,b.da));if(a){b=0;for(var c=a.length;b<c;++b)this.ja(a.charAt(b));}return this.a};h.pa=function(){return new Y(this.a,this.f)};aa=exports;m("PhoneNumber",Y);
	m("PhoneNumber.getCountryCodeForRegionCode",Jb);m("PhoneNumber.getRegionCodeForCountryCode",function(a){return U(a)});m("PhoneNumber.getSupportedRegionCodes",function(){return Ta()});m("PhoneNumber.getSupportedCallingCodes",function(){return Va()});m("PhoneNumber.getExample",function(a,b){b=b?cb(a,Gb(b)):cb(a,0);return new Y(b,a)});m("PhoneNumber.getAsYouType",function(a){return new Z(a)});m("PhoneNumber.prototype.toJSON",Y.prototype.toJSON);m("PhoneNumber.prototype.canBeInternationallyDialled",Y.prototype.ka);
	m("PhoneNumber.prototype.isValid",Y.prototype.va);m("PhoneNumber.prototype.isPossible",Y.prototype.ua);m("PhoneNumber.prototype.getType",Y.prototype.ra);m("PhoneNumber.prototype.isMobile",Y.prototype.ta);m("PhoneNumber.prototype.isFixedLine",Y.prototype.sa);m("PhoneNumber.prototype.getNumber",Y.prototype.na);m("PhoneNumber.prototype.getNumberFrom",Y.prototype.oa);m("PhoneNumber.prototype.getRegionCode",Y.prototype.qa);m("PhoneNumber.prototype.getCountryCode",Y.prototype.la);m("AsYouType",Z);
	m("AsYouType.prototype.addChar",Z.prototype.ja);m("AsYouType.prototype.number",Z.prototype.wa);m("AsYouType.prototype.removeChar",Z.prototype.xa);m("AsYouType.prototype.reset",Z.prototype.ia);m("AsYouType.prototype.getPhoneNumber",Z.prototype.pa);})();
	});

	var awesomePhonenumber = createCommonjsModule(function (module) {

	module.exports = lib.PhoneNumber;

	Object.defineProperty(
		module.exports,
		"__esModule",
		{
			value: true
		}
	);

	module.exports.default = module.exports;
	});

	var PhoneNumber = unwrapExports(awesomePhonenumber);

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function getDefault(key) {
	  var value = utils.options[key];

	  if (typeof value === 'undefined') {
	    return utils.options[key];
	  }

	  return value;
	} // Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727


	function getParents(node, memo) {
	  var parsedMemo = memo || [];
	  var parentNode = node.parentNode;

	  if (!parentNode) {
	    return parsedMemo;
	  }

	  return getParents(parentNode, parsedMemo.concat(parentNode));
	}

	var script = {
	  name: 'VueTelInputVuetify',
	  components: {
	    VSelect: lib$1.VSelect,
	    VTextField: lib$1.VTextField
	  },
	  directives: {
	    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside
	    'click-outside': {
	      bind: function bind(el, binding, vNode) {
	        // Provided expression must evaluate to a function.
	        if (typeof binding.value !== 'function') {
	          var compName = vNode.context.name;
	          var warn = "[Vue-click-outside:] provided expression ".concat(binding.expression, " is not a function, but has to be");

	          if (compName) {
	            warn += "Found in component ".concat(compName);
	          }

	          console.warn(warn);
	        } // Define Handler and cache it on the element


	        var bubble = binding.modifiers.bubble;

	        var handler = function handler(e) {
	          // Fall back to composedPath if e.path is undefined
	          var path = e.path || (e.composedPath ? e.composedPath() : false) || getParents(e.target);

	          if (bubble || path.length && !el.contains(path[0]) && el !== path[0]) {
	            binding.value(e);
	          }
	        };

	        el.__vueClickOutside__ = handler; // add Event Listeners

	        document.addEventListener('click', handler);
	      },
	      unbind: function unbind(el) {
	        // Remove Event Listeners
	        document.removeEventListener('click', el.__vueClickOutside__);
	        el.__vueClickOutside__ = null;
	      }
	    }
	  },
	  props: {
	    value: {
	      type: String,
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: function _default() {
	        return getDefault('placeholder');
	      }
	    },
	    disabledFetchingCountry: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('disabledFetchingCountry');
	      }
	    },
	    disabled: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('disabled');
	      }
	    },
	    disabledFormatting: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('disabledFormatting');
	      }
	    },
	    mode: {
	      type: String,
	      default: function _default() {
	        return getDefault('mode');
	      }
	    },
	    invalidMsg: {
	      type: String,
	      default: function _default() {
	        return getDefault('invalidMsg');
	      }
	    },
	    required: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('required');
	      }
	    },
	    allCountries: {
	      type: Array,
	      default: function _default() {
	        return getDefault('allCountries');
	      }
	    },
	    defaultCountry: {
	      // Default country code, ie: 'AU'
	      // Will override the current country of user
	      type: String,
	      default: function _default() {
	        return getDefault('defaultCountry');
	      }
	    },
	    enabledCountryCode: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('enabledCountryCode');
	      }
	    },
	    enabledFlags: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('enabledFlags');
	      }
	    },
	    preferredCountries: {
	      type: Array,
	      default: function _default() {
	        return getDefault('preferredCountries');
	      }
	    },
	    onlyCountries: {
	      type: Array,
	      default: function _default() {
	        return getDefault('onlyCountries');
	      }
	    },
	    ignoredCountries: {
	      type: Array,
	      default: function _default() {
	        return getDefault('ignoredCountries');
	      }
	    },
	    autocomplete: {
	      type: String,
	      default: function _default() {
	        return getDefault('autocomplete');
	      }
	    },
	    autofocus: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('autofocus');
	      }
	    },
	    name: {
	      type: String,
	      default: function _default() {
	        return getDefault('name');
	      }
	    },
	    wrapperClasses: {
	      type: [String, Array, Object],
	      default: function _default() {
	        return getDefault('wrapperClasses');
	      }
	    },
	    inputClasses: {
	      type: [String, Array, Object],
	      default: function _default() {
	        return getDefault('inputClasses');
	      }
	    },
	    inputId: {
	      type: String,
	      default: function _default() {
	        return getDefault('inputId');
	      }
	    },
	    dropdownOptions: {
	      type: Object,
	      default: function _default() {
	        return getDefault('dropdownOptions');
	      }
	    },
	    inputOptions: {
	      type: Object,
	      default: function _default() {
	        return getDefault('inputOptions');
	      }
	    },
	    maxLen: {
	      type: Number,
	      default: function _default() {
	        return getDefault('maxLen');
	      }
	    },
	    validCharactersOnly: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('validCharactersOnly');
	      }
	    },
	    dynamicPlaceholder: {
	      type: Boolean,
	      default: function _default() {
	        return getDefault('dynamicPlaceholder');
	      }
	    }
	  },
	  data: function data() {
	    return {
	      phone: '',
	      activeCountry: {
	        iso2: ''
	      },
	      open: false,
	      finishMounted: false,
	      selectedIndex: null,
	      typeToFindInput: '',
	      typeToFindTimer: null,
	      cursorPosition: 0,
	      countryCode: null
	    };
	  },
	  computed: {
	    parsedPlaceholder: function parsedPlaceholder() {
	      if (!this.finishMounted) {
	        return '';
	      }

	      if (this.dynamicPlaceholder) {
	        var mode = this.mode || 'international';
	        return PhoneNumber.getExample(this.activeCountry.iso2, 'mobile').getNumber(mode);
	      }

	      return this.placeholder;
	    },
	    parsedMode: function parsedMode() {
	      if (this.mode) {
	        if (!['international', 'national'].includes(this.mode)) {
	          console.error('Invalid value of prop "mode"');
	        } else {
	          return this.mode;
	        }
	      }

	      if (!this.phone || this.phone[0] !== '+') {
	        return 'national';
	      }

	      return 'international';
	    },
	    filteredCountries: function filteredCountries() {
	      var _this = this;

	      // List countries after filtered
	      if (this.onlyCountries.length) {
	        return this.getCountries(this.onlyCountries);
	      }

	      if (this.ignoredCountries.length) {
	        return this.allCountries.filter(function (_ref) {
	          var iso2 = _ref.iso2;
	          return !_this.ignoredCountries.includes(iso2.toUpperCase()) && !_this.ignoredCountries.includes(iso2.toLowerCase());
	        });
	      }

	      return this.allCountries;
	    },
	    sortedCountries: function sortedCountries() {
	      // Sort the list countries: from preferred countries to all countries
	      var preferredCountries = this.getCountries(this.preferredCountries).map(function (country) {
	        return _objectSpread$1({}, country, {
	          preferred: true
	        });
	      });
	      return [].concat(_toConsumableArray(preferredCountries), _toConsumableArray(this.filteredCountries));
	    },
	    phoneObject: function phoneObject() {
	      var result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();
	      Object.assign(result, {
	        isValid: result.valid,
	        country: this.activeCountry
	      });
	      return result;
	    },
	    phoneText: function phoneText() {
	      var key = 'input';

	      if (this.phoneObject.valid) {
	        key = this.parsedMode;
	      }

	      return this.phoneObject.number[key] || '';
	    }
	  },
	  watch: {
	    // eslint-disable-next-line func-names
	    'phoneObject.valid': function phoneObjectValid(value) {
	      if (value) {
	        this.phone = this.phoneText;
	      }

	      this.$emit('validate', this.phoneObject);
	      this.$emit('onValidate', this.phoneObject); // Deprecated
	    },
	    value: function value() {
	      this.phone = this.value;
	    },
	    open: function open(isDropdownOpened) {
	      // Emit open and close events
	      if (isDropdownOpened) {
	        this.$emit('open');
	      } else {
	        this.$emit('close');
	      }
	    },
	    phone: function phone(newValue, oldValue) {
	      var _this2 = this;

	      if (this.validCharactersOnly && !this.testCharacters()) {
	        this.$nextTick(function () {
	          _this2.phone = oldValue;
	        });
	      } else if (newValue) {
	        if (newValue[0] === '+') {
	          var code = PhoneNumber(newValue).getRegionCode();

	          if (code) {
	            this.activeCountry = this.findCountry(code) || this.activeCountry;
	          }
	        }
	      } // Reset the cursor to current position if it's not the last character.


	      if (this.cursorPosition < oldValue.length) {
	        this.$nextTick(function () {
	          setCaretPosition(_this2.$refs.input, _this2.cursorPosition);
	        });
	      }
	    },
	    activeCountry: function activeCountry(value) {
	      if (value && value.iso2) {
	        this.$emit('country-changed', value);
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this3 = this;

	    this.initializeCountry().then(function () {
	      if (!_this3.phone && _this3.inputOptions && _this3.inputOptions.showDialCode && _this3.activeCountry.dialCode) {
	        _this3.phone = "+".concat(_this3.activeCountry.dialCode);
	      }

	      _this3.countryCode = _this3.activeCountry;

	      _this3.$emit('validate', _this3.phoneObject);

	      _this3.$emit('onValidate', _this3.phoneObject); // Deprecated

	    }).catch(console.error).finally(function () {
	      _this3.finishMounted = true;
	    });
	  },
	  created: function created() {
	    if (this.value) {
	      this.phone = this.value.trim();
	    }
	  },
	  methods: {
	    initializeCountry: function initializeCountry() {
	      var _this4 = this;

	      return new Promise(function (resolve) {
	        /**
	         * 1. If the phone included prefix (+12), try to get the country and set it
	         */
	        if (_this4.phone && _this4.phone[0] === '+') {
	          var activeCountry = PhoneNumber(_this4.phone).getRegionCode();

	          if (activeCountry) {
	            _this4.choose(activeCountry);

	            resolve();
	            return;
	          }
	        }
	        /**
	         * 2. Use default country if passed from parent
	         */


	        if (_this4.defaultCountry) {
	          var defaultCountry = _this4.findCountry(_this4.defaultCountry);

	          if (defaultCountry) {
	            _this4.choose(defaultCountry);

	            resolve();
	            return;
	          }
	        }

	        var fallbackCountry = _this4.findCountry(_this4.preferredCountries[0]) || _this4.filteredCountries[0];
	        /**
	         * 3. Check if fetching country based on user's IP is allowed, set it as the default country
	         */


	        if (!_this4.disabledFetchingCountry) {
	          getCountry().then(function (res) {
	            _this4.activeCountry = _this4.findCountry(res) || _this4.activeCountry;
	            console.log(_this4.activeCountry);
	          }).catch(function (error) {
	            console.warn(error);
	            /**
	             * 4. Use the first country from preferred list (if available) or all countries list
	             */

	            _this4.choose(fallbackCountry);
	          }).finally(function () {
	            resolve();
	          });
	        } else {
	          /**
	           * 4. Use the first country from preferred list (if available) or all countries list
	           */
	          _this4.choose(fallbackCountry);

	          resolve();
	        }
	      });
	    },

	    /**
	     * Get the list of countries from the list of iso2 code
	     */
	    getCountries: function getCountries() {
	      var _this5 = this;

	      var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      return list.map(function (countryCode) {
	        return _this5.findCountry(countryCode);
	      }).filter(Boolean);
	    },
	    findCountry: function findCountry() {
	      var iso = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      return this.allCountries.find(function (country) {
	        return country.iso2 === iso.toUpperCase();
	      });
	    },
	    getItemClass: function getItemClass(index, iso2) {
	      var highlighted = this.selectedIndex === index;
	      var lastPreferred = index === this.preferredCountries.length - 1;
	      var preferred = this.preferredCountries.some(function (c) {
	        return c.toUpperCase() === iso2;
	      });
	      return {
	        highlighted: highlighted,
	        'last-preferred': lastPreferred,
	        preferred: preferred
	      };
	    },
	    choose: function choose(country) {
	      var toEmitInputEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      this.activeCountry = country || this.activeCountry || {};

	      if (this.phone && this.phone[0] === '+' && this.activeCountry.iso2 && this.phoneObject.number.national) {
	        // Attach the current phone number with the newly selected country
	        this.phone = PhoneNumber(this.phoneObject.number.national, this.activeCountry.iso2).getNumber('international');
	      } else if (this.inputOptions && this.inputOptions.showDialCode && country) {
	        // Reset phone if the showDialCode is set
	        this.phone = "+".concat(country.dialCode);
	      }

	      if (toEmitInputEvent) {
	        this.$emit('input', this.phoneText, this.phoneObject);
	        this.$emit('onInput', this.phoneObject); // Deprecated
	      }
	    },
	    testCharacters: function testCharacters() {
	      var re = /^[()\-+0-9\s]*$/;
	      return re.test(this.phone);
	    },
	    onInput: function onInput(e) {
	      if (this.validCharactersOnly && !this.testCharacters()) {
	        return;
	      } // this.$refs.input.setCustomValidity(
	      //   this.phoneObject.valid ? "" : this.invalidMsg
	      // );
	      // Returns response.number to assign it to v-model (if being used)
	      // Returns full response for cases @input is used
	      // and parent wants to return the whole response.


	      this.$emit('input', this.phoneText, this.phoneObject);
	      this.$emit('onInput', this.phoneObject); // Deprecated
	      // Keep the current cursor position just in case the input reformatted
	      // and it gets moved to the last character.

	      if (e && e.target) {
	        this.cursorPosition = e.target.selectionStart;
	      }
	    },
	    onBlur: function onBlur() {
	      this.$emit('blur');
	      this.$emit('onBlur'); // Deprecated
	    },
	    onEnter: function onEnter() {
	      this.$emit('enter');
	      this.$emit('onEnter'); // Deprecated
	    },
	    onSpace: function onSpace() {
	      this.$emit('space');
	      this.$emit('onSpace'); // Deprecated
	    },
	    focus: function focus() {
	      this.$refs.input.focus();
	    },
	    toggleDropdown: function toggleDropdown() {
	      if (this.disabled) {
	        return;
	      }

	      this.open = !this.open;
	    },
	    clickedOutside: function clickedOutside() {
	      this.open = false;
	    },
	    keyboardNav: function keyboardNav(e) {
	      var _this6 = this;

	      if (e.keyCode === 40) {
	        // down arrow
	        e.preventDefault();
	        this.open = true;

	        if (this.selectedIndex === null) {
	          this.selectedIndex = 0;
	        } else {
	          this.selectedIndex = Math.min(this.sortedCountries.length - 1, this.selectedIndex + 1);
	        }

	        var selEle = this.$refs.list.children[this.selectedIndex];

	        if (selEle.offsetTop + selEle.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight) {
	          this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight + selEle.clientHeight;
	        }
	      } else if (e.keyCode === 38) {
	        // up arrow
	        e.preventDefault();
	        this.open = true;

	        if (this.selectedIndex === null) {
	          this.selectedIndex = this.sortedCountries.length - 1;
	        } else {
	          this.selectedIndex = Math.max(0, this.selectedIndex - 1);
	        }

	        var _selEle = this.$refs.list.children[this.selectedIndex];

	        if (_selEle.offsetTop < this.$refs.list.scrollTop) {
	          this.$refs.list.scrollTop = _selEle.offsetTop;
	        }
	      } else if (e.keyCode === 13) {
	        // enter key
	        if (this.selectedIndex !== null) {
	          this.choose(this.sortedCountries[this.selectedIndex]);
	        }

	        this.open = !this.open;
	      } else {
	        // typing a country's name
	        this.typeToFindInput += e.key;
	        clearTimeout(this.typeToFindTimer);
	        this.typeToFindTimer = setTimeout(function () {
	          _this6.typeToFindInput = '';
	        }, 700); // don't include preferred countries so we jump to the right place in the alphabet

	        var typedCountryI = this.sortedCountries.slice(this.preferredCountries.length).findIndex(function (c) {
	          return c.name.toLowerCase().startsWith(_this6.typeToFindInput);
	        });

	        if (typedCountryI >= 0) {
	          this.selectedIndex = this.preferredCountries.length + typedCountryI;
	          var _selEle2 = this.$refs.list.children[this.selectedIndex];
	          var needToScrollTop = _selEle2.offsetTop < this.$refs.list.scrollTop;
	          var needToScrollBottom = _selEle2.offsetTop + _selEle2.clientHeight > this.$refs.list.scrollTop + this.$refs.list.clientHeight;

	          if (needToScrollTop || needToScrollBottom) {
	            this.$refs.list.scrollTop = _selEle2.offsetTop - this.$refs.list.clientHeight / 2;
	          }
	        }
	      }
	    },
	    reset: function reset() {
	      this.selectedIndex = this.sortedCountries.map(function (c) {
	        return c.iso2;
	      }).indexOf(this.activeCountry.iso2);
	      this.open = false;
	    },
	    onChangeCountryCode: function onChangeCountryCode() {
	      this.choose(this.countryCode, true);
	    }
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	    if (typeof shadowMode !== 'boolean') {
	        createInjectorSSR = createInjector;
	        createInjector = shadowMode;
	        shadowMode = false;
	    }
	    // Vue.extend constructor export interop.
	    const options = typeof script === 'function' ? script.options : script;
	    // render functions
	    if (template && template.render) {
	        options.render = template.render;
	        options.staticRenderFns = template.staticRenderFns;
	        options._compiled = true;
	        // functional template
	        if (isFunctionalTemplate) {
	            options.functional = true;
	        }
	    }
	    // scopedId
	    if (scopeId) {
	        options._scopeId = scopeId;
	    }
	    let hook;
	    if (moduleIdentifier) {
	        // server build
	        hook = function (context) {
	            // 2.3 injection
	            context =
	                context || // cached call
	                    (this.$vnode && this.$vnode.ssrContext) || // stateful
	                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
	            // 2.2 with runInNewContext: true
	            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	                context = __VUE_SSR_CONTEXT__;
	            }
	            // inject component styles
	            if (style) {
	                style.call(this, createInjectorSSR(context));
	            }
	            // register component module identifier for async chunk inference
	            if (context && context._registeredComponents) {
	                context._registeredComponents.add(moduleIdentifier);
	            }
	        };
	        // used by ssr in case component is cached and beforeCreate
	        // never gets called
	        options._ssrRegister = hook;
	    }
	    else if (style) {
	        hook = shadowMode
	            ? function (context) {
	                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
	            }
	            : function (context) {
	                style.call(this, createInjector(context));
	            };
	    }
	    if (hook) {
	        if (options.functional) {
	            // register for functional component in vue file
	            const originalRender = options.render;
	            options.render = function renderWithStyleInjection(h, context) {
	                hook.call(context);
	                return originalRender(h, context);
	            };
	        }
	        else {
	            // inject component registration as beforeCreate hook
	            const existing = options.beforeCreate;
	            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	        }
	    }
	    return script;
	}

	const isOldIE = typeof navigator !== 'undefined' &&
	    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
	function createInjector(context) {
	    return (id, style) => addStyle(id, style);
	}
	let HEAD;
	const styles = {};
	function addStyle(id, css) {
	    const group = isOldIE ? css.media || 'default' : id;
	    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
	    if (!style.ids.has(id)) {
	        style.ids.add(id);
	        let code = css.source;
	        if (css.map) {
	            // https://developer.chrome.com/devtools/docs/javascript-debugging
	            // this makes source maps inside style tags work properly in Chrome
	            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
	            // http://stackoverflow.com/a/26603875
	            code +=
	                '\n/*# sourceMappingURL=data:application/json;base64,' +
	                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
	                    ' */';
	        }
	        if (!style.element) {
	            style.element = document.createElement('style');
	            style.element.type = 'text/css';
	            if (css.media)
	                style.element.setAttribute('media', css.media);
	            if (HEAD === undefined) {
	                HEAD = document.head || document.getElementsByTagName('head')[0];
	            }
	            HEAD.appendChild(style.element);
	        }
	        if ('styleSheet' in style.element) {
	            style.styles.push(code);
	            style.element.styleSheet.cssText = style.styles
	                .filter(Boolean)
	                .join('\n');
	        }
	        else {
	            const index = style.ids.size - 1;
	            const textNode = document.createTextNode(code);
	            const nodes = style.element.childNodes;
	            if (nodes[index])
	                style.element.removeChild(nodes[index]);
	            if (nodes.length)
	                style.element.insertBefore(textNode, nodes[index]);
	            else
	                style.element.appendChild(textNode);
	        }
	    }
	}

	var __vue_script__ = script;
	/* template */

	var __vue_render__ = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c("div", {
	    staticClass: "custom-tel-input"
	  }, [_c("div", {
	    staticClass: "country-code"
	  }, [_c("v-select", {
	    attrs: {
	      items: _vm.sortedCountries,
	      "item-text": "name",
	      "item-value": "dialCode",
	      "return-object": ""
	    },
	    on: {
	      change: _vm.onChangeCountryCode
	    },
	    scopedSlots: _vm._u([{
	      key: "item",
	      fn: function fn(data) {
	        return [_c("div", {
	          staticClass: "vti__flag",
	          class: data.item.iso2.toLowerCase()
	        }), _vm._v("\n        " + _vm._s(data.item.name) + " " + _vm._s("+" + data.item.dialCode) + "\n      ")];
	      }
	    }]),
	    model: {
	      value: _vm.countryCode,
	      callback: function callback($$v) {
	        _vm.countryCode = $$v;
	      },
	      expression: "countryCode"
	    }
	  }, [_c("template", {
	    slot: "selection"
	  }, [_c("div", {
	    staticClass: "vti__flag",
	    class: _vm.activeCountry.iso2.toLowerCase()
	  })])], 2)], 1), _vm._v(" "), _c("v-text-field", {
	    ref: "input",
	    attrs: {
	      type: "tel",
	      label: "Enter a Phone Number",
	      autofocus: _vm.autofocus,
	      name: _vm.name,
	      disabled: _vm.disabled,
	      required: _vm.required,
	      autocomplete: _vm.autocomplete,
	      id: _vm.inputId,
	      maxlength: _vm.maxLen,
	      tabindex: _vm.inputOptions && _vm.inputOptions.tabindex ? _vm.inputOptions.tabindex : 0
	    },
	    on: {
	      input: _vm.onInput,
	      blur: _vm.onBlur,
	      keyup: [function ($event) {
	        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
	          return null;
	        }

	        return _vm.onEnter($event);
	      }, function ($event) {
	        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])) {
	          return null;
	        }

	        return _vm.onSpace($event);
	      }]
	    },
	    model: {
	      value: _vm.phone,
	      callback: function callback($$v) {
	        _vm.phone = $$v;
	      },
	      expression: "phone"
	    }
	  })], 1);
	};

	var __vue_staticRenderFns__ = [];
	__vue_render__._withStripped = true;
	/* style */

	var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
	  if (!inject) return;
	  inject("data-v-a6b6dff4_0", {
	    source: ".vti__flag {\n  width: 20px;\n}\n.vti__flag.be {\n  width: 18px;\n}\n.vti__flag.ch {\n  width: 15px;\n}\n.vti__flag.mc {\n  width: 19px;\n}\n.vti__flag.ne {\n  width: 18px;\n}\n.vti__flag.np {\n  width: 13px;\n}\n.vti__flag.va {\n  width: 15px;\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n.vti__flag {\n    background-size: 5630px 15px;\n}\n}\n.vti__flag.ac {\n  height: 10px;\n  background-position: 0px 0px;\n}\n.vti__flag.ad {\n  height: 14px;\n  background-position: -22px 0px;\n}\n.vti__flag.ae {\n  height: 10px;\n  background-position: -44px 0px;\n}\n.vti__flag.af {\n  height: 14px;\n  background-position: -66px 0px;\n}\n.vti__flag.ag {\n  height: 14px;\n  background-position: -88px 0px;\n}\n.vti__flag.ai {\n  height: 10px;\n  background-position: -110px 0px;\n}\n.vti__flag.al {\n  height: 15px;\n  background-position: -132px 0px;\n}\n.vti__flag.am {\n  height: 10px;\n  background-position: -154px 0px;\n}\n.vti__flag.ao {\n  height: 14px;\n  background-position: -176px 0px;\n}\n.vti__flag.aq {\n  height: 14px;\n  background-position: -198px 0px;\n}\n.vti__flag.ar {\n  height: 13px;\n  background-position: -220px 0px;\n}\n.vti__flag.as {\n  height: 10px;\n  background-position: -242px 0px;\n}\n.vti__flag.at {\n  height: 14px;\n  background-position: -264px 0px;\n}\n.vti__flag.au {\n  height: 10px;\n  background-position: -286px 0px;\n}\n.vti__flag.aw {\n  height: 14px;\n  background-position: -308px 0px;\n}\n.vti__flag.ax {\n  height: 13px;\n  background-position: -330px 0px;\n}\n.vti__flag.az {\n  height: 10px;\n  background-position: -352px 0px;\n}\n.vti__flag.ba {\n  height: 10px;\n  background-position: -374px 0px;\n}\n.vti__flag.bb {\n  height: 14px;\n  background-position: -396px 0px;\n}\n.vti__flag.bd {\n  height: 12px;\n  background-position: -418px 0px;\n}\n.vti__flag.be {\n  height: 15px;\n  background-position: -440px 0px;\n}\n.vti__flag.bf {\n  height: 14px;\n  background-position: -460px 0px;\n}\n.vti__flag.bg {\n  height: 12px;\n  background-position: -482px 0px;\n}\n.vti__flag.bh {\n  height: 12px;\n  background-position: -504px 0px;\n}\n.vti__flag.bi {\n  height: 12px;\n  background-position: -526px 0px;\n}\n.vti__flag.bj {\n  height: 14px;\n  background-position: -548px 0px;\n}\n.vti__flag.bl {\n  height: 14px;\n  background-position: -570px 0px;\n}\n.vti__flag.bm {\n  height: 10px;\n  background-position: -592px 0px;\n}\n.vti__flag.bn {\n  height: 10px;\n  background-position: -614px 0px;\n}\n.vti__flag.bo {\n  height: 14px;\n  background-position: -636px 0px;\n}\n.vti__flag.bq {\n  height: 14px;\n  background-position: -658px 0px;\n}\n.vti__flag.br {\n  height: 14px;\n  background-position: -680px 0px;\n}\n.vti__flag.bs {\n  height: 10px;\n  background-position: -702px 0px;\n}\n.vti__flag.bt {\n  height: 14px;\n  background-position: -724px 0px;\n}\n.vti__flag.bv {\n  height: 15px;\n  background-position: -746px 0px;\n}\n.vti__flag.bw {\n  height: 14px;\n  background-position: -768px 0px;\n}\n.vti__flag.by {\n  height: 10px;\n  background-position: -790px 0px;\n}\n.vti__flag.bz {\n  height: 14px;\n  background-position: -812px 0px;\n}\n.vti__flag.ca {\n  height: 10px;\n  background-position: -834px 0px;\n}\n.vti__flag.cc {\n  height: 10px;\n  background-position: -856px 0px;\n}\n.vti__flag.cd {\n  height: 15px;\n  background-position: -878px 0px;\n}\n.vti__flag.cf {\n  height: 14px;\n  background-position: -900px 0px;\n}\n.vti__flag.cg {\n  height: 14px;\n  background-position: -922px 0px;\n}\n.vti__flag.ch {\n  height: 15px;\n  background-position: -944px 0px;\n}\n.vti__flag.ci {\n  height: 14px;\n  background-position: -961px 0px;\n}\n.vti__flag.ck {\n  height: 10px;\n  background-position: -983px 0px;\n}\n.vti__flag.cl {\n  height: 14px;\n  background-position: -1005px 0px;\n}\n.vti__flag.cm {\n  height: 14px;\n  background-position: -1027px 0px;\n}\n.vti__flag.cn {\n  height: 14px;\n  background-position: -1049px 0px;\n}\n.vti__flag.co {\n  height: 14px;\n  background-position: -1071px 0px;\n}\n.vti__flag.cp {\n  height: 14px;\n  background-position: -1093px 0px;\n}\n.vti__flag.cr {\n  height: 12px;\n  background-position: -1115px 0px;\n}\n.vti__flag.cu {\n  height: 10px;\n  background-position: -1137px 0px;\n}\n.vti__flag.cv {\n  height: 12px;\n  background-position: -1159px 0px;\n}\n.vti__flag.cw {\n  height: 14px;\n  background-position: -1181px 0px;\n}\n.vti__flag.cx {\n  height: 10px;\n  background-position: -1203px 0px;\n}\n.vti__flag.cy {\n  height: 14px;\n  background-position: -1225px 0px;\n}\n.vti__flag.cz {\n  height: 14px;\n  background-position: -1247px 0px;\n}\n.vti__flag.de {\n  height: 12px;\n  background-position: -1269px 0px;\n}\n.vti__flag.dg {\n  height: 10px;\n  background-position: -1291px 0px;\n}\n.vti__flag.dj {\n  height: 14px;\n  background-position: -1313px 0px;\n}\n.vti__flag.dk {\n  height: 15px;\n  background-position: -1335px 0px;\n}\n.vti__flag.dm {\n  height: 10px;\n  background-position: -1357px 0px;\n}\n.vti__flag.do {\n  height: 13px;\n  background-position: -1379px 0px;\n}\n.vti__flag.dz {\n  height: 14px;\n  background-position: -1401px 0px;\n}\n.vti__flag.ea {\n  height: 14px;\n  background-position: -1423px 0px;\n}\n.vti__flag.ec {\n  height: 14px;\n  background-position: -1445px 0px;\n}\n.vti__flag.ee {\n  height: 13px;\n  background-position: -1467px 0px;\n}\n.vti__flag.eg {\n  height: 14px;\n  background-position: -1489px 0px;\n}\n.vti__flag.eh {\n  height: 10px;\n  background-position: -1511px 0px;\n}\n.vti__flag.er {\n  height: 10px;\n  background-position: -1533px 0px;\n}\n.vti__flag.es {\n  height: 14px;\n  background-position: -1555px 0px;\n}\n.vti__flag.et {\n  height: 10px;\n  background-position: -1577px 0px;\n}\n.vti__flag.eu {\n  height: 14px;\n  background-position: -1599px 0px;\n}\n.vti__flag.fi {\n  height: 12px;\n  background-position: -1621px 0px;\n}\n.vti__flag.fj {\n  height: 10px;\n  background-position: -1643px 0px;\n}\n.vti__flag.fk {\n  height: 10px;\n  background-position: -1665px 0px;\n}\n.vti__flag.fm {\n  height: 11px;\n  background-position: -1687px 0px;\n}\n.vti__flag.fo {\n  height: 15px;\n  background-position: -1709px 0px;\n}\n.vti__flag.fr {\n  height: 14px;\n  background-position: -1731px 0px;\n}\n.vti__flag.ga {\n  height: 15px;\n  background-position: -1753px 0px;\n}\n.vti__flag.gb {\n  height: 10px;\n  background-position: -1775px 0px;\n}\n.vti__flag.gd {\n  height: 12px;\n  background-position: -1797px 0px;\n}\n.vti__flag.ge {\n  height: 14px;\n  background-position: -1819px 0px;\n}\n.vti__flag.gf {\n  height: 14px;\n  background-position: -1841px 0px;\n}\n.vti__flag.gg {\n  height: 14px;\n  background-position: -1863px 0px;\n}\n.vti__flag.gh {\n  height: 14px;\n  background-position: -1885px 0px;\n}\n.vti__flag.gi {\n  height: 10px;\n  background-position: -1907px 0px;\n}\n.vti__flag.gl {\n  height: 14px;\n  background-position: -1929px 0px;\n}\n.vti__flag.gm {\n  height: 14px;\n  background-position: -1951px 0px;\n}\n.vti__flag.gn {\n  height: 14px;\n  background-position: -1973px 0px;\n}\n.vti__flag.gp {\n  height: 14px;\n  background-position: -1995px 0px;\n}\n.vti__flag.gq {\n  height: 14px;\n  background-position: -2017px 0px;\n}\n.vti__flag.gr {\n  height: 14px;\n  background-position: -2039px 0px;\n}\n.vti__flag.gs {\n  height: 10px;\n  background-position: -2061px 0px;\n}\n.vti__flag.gt {\n  height: 13px;\n  background-position: -2083px 0px;\n}\n.vti__flag.gu {\n  height: 11px;\n  background-position: -2105px 0px;\n}\n.vti__flag.gw {\n  height: 10px;\n  background-position: -2127px 0px;\n}\n.vti__flag.gy {\n  height: 12px;\n  background-position: -2149px 0px;\n}\n.vti__flag.hk {\n  height: 14px;\n  background-position: -2171px 0px;\n}\n.vti__flag.hm {\n  height: 10px;\n  background-position: -2193px 0px;\n}\n.vti__flag.hn {\n  height: 10px;\n  background-position: -2215px 0px;\n}\n.vti__flag.hr {\n  height: 10px;\n  background-position: -2237px 0px;\n}\n.vti__flag.ht {\n  height: 12px;\n  background-position: -2259px 0px;\n}\n.vti__flag.hu {\n  height: 10px;\n  background-position: -2281px 0px;\n}\n.vti__flag.ic {\n  height: 14px;\n  background-position: -2303px 0px;\n}\n.vti__flag.id {\n  height: 14px;\n  background-position: -2325px 0px;\n}\n.vti__flag.ie {\n  height: 10px;\n  background-position: -2347px 0px;\n}\n.vti__flag.il {\n  height: 15px;\n  background-position: -2369px 0px;\n}\n.vti__flag.im {\n  height: 10px;\n  background-position: -2391px 0px;\n}\n.vti__flag.in {\n  height: 14px;\n  background-position: -2413px 0px;\n}\n.vti__flag.io {\n  height: 10px;\n  background-position: -2435px 0px;\n}\n.vti__flag.iq {\n  height: 14px;\n  background-position: -2457px 0px;\n}\n.vti__flag.ir {\n  height: 12px;\n  background-position: -2479px 0px;\n}\n.vti__flag.is {\n  height: 15px;\n  background-position: -2501px 0px;\n}\n.vti__flag.it {\n  height: 14px;\n  background-position: -2523px 0px;\n}\n.vti__flag.je {\n  height: 12px;\n  background-position: -2545px 0px;\n}\n.vti__flag.jm {\n  height: 10px;\n  background-position: -2567px 0px;\n}\n.vti__flag.jo {\n  height: 10px;\n  background-position: -2589px 0px;\n}\n.vti__flag.jp {\n  height: 14px;\n  background-position: -2611px 0px;\n}\n.vti__flag.ke {\n  height: 14px;\n  background-position: -2633px 0px;\n}\n.vti__flag.kg {\n  height: 12px;\n  background-position: -2655px 0px;\n}\n.vti__flag.kh {\n  height: 13px;\n  background-position: -2677px 0px;\n}\n.vti__flag.ki {\n  height: 10px;\n  background-position: -2699px 0px;\n}\n.vti__flag.km {\n  height: 12px;\n  background-position: -2721px 0px;\n}\n.vti__flag.kn {\n  height: 14px;\n  background-position: -2743px 0px;\n}\n.vti__flag.kp {\n  height: 10px;\n  background-position: -2765px 0px;\n}\n.vti__flag.kr {\n  height: 14px;\n  background-position: -2787px 0px;\n}\n.vti__flag.kw {\n  height: 10px;\n  background-position: -2809px 0px;\n}\n.vti__flag.ky {\n  height: 10px;\n  background-position: -2831px 0px;\n}\n.vti__flag.kz {\n  height: 10px;\n  background-position: -2853px 0px;\n}\n.vti__flag.la {\n  height: 14px;\n  background-position: -2875px 0px;\n}\n.vti__flag.lb {\n  height: 14px;\n  background-position: -2897px 0px;\n}\n.vti__flag.lc {\n  height: 10px;\n  background-position: -2919px 0px;\n}\n.vti__flag.li {\n  height: 12px;\n  background-position: -2941px 0px;\n}\n.vti__flag.lk {\n  height: 10px;\n  background-position: -2963px 0px;\n}\n.vti__flag.lr {\n  height: 11px;\n  background-position: -2985px 0px;\n}\n.vti__flag.ls {\n  height: 14px;\n  background-position: -3007px 0px;\n}\n.vti__flag.lt {\n  height: 12px;\n  background-position: -3029px 0px;\n}\n.vti__flag.lu {\n  height: 12px;\n  background-position: -3051px 0px;\n}\n.vti__flag.lv {\n  height: 10px;\n  background-position: -3073px 0px;\n}\n.vti__flag.ly {\n  height: 10px;\n  background-position: -3095px 0px;\n}\n.vti__flag.ma {\n  height: 14px;\n  background-position: -3117px 0px;\n}\n.vti__flag.mc {\n  height: 15px;\n  background-position: -3139px 0px;\n}\n.vti__flag.md {\n  height: 10px;\n  background-position: -3160px 0px;\n}\n.vti__flag.me {\n  height: 10px;\n  background-position: -3182px 0px;\n}\n.vti__flag.mf {\n  height: 14px;\n  background-position: -3204px 0px;\n}\n.vti__flag.mg {\n  height: 14px;\n  background-position: -3226px 0px;\n}\n.vti__flag.mh {\n  height: 11px;\n  background-position: -3248px 0px;\n}\n.vti__flag.mk {\n  height: 10px;\n  background-position: -3270px 0px;\n}\n.vti__flag.ml {\n  height: 14px;\n  background-position: -3292px 0px;\n}\n.vti__flag.mm {\n  height: 14px;\n  background-position: -3314px 0px;\n}\n.vti__flag.mn {\n  height: 10px;\n  background-position: -3336px 0px;\n}\n.vti__flag.mo {\n  height: 14px;\n  background-position: -3358px 0px;\n}\n.vti__flag.mp {\n  height: 10px;\n  background-position: -3380px 0px;\n}\n.vti__flag.mq {\n  height: 14px;\n  background-position: -3402px 0px;\n}\n.vti__flag.mr {\n  height: 14px;\n  background-position: -3424px 0px;\n}\n.vti__flag.ms {\n  height: 10px;\n  background-position: -3446px 0px;\n}\n.vti__flag.mt {\n  height: 14px;\n  background-position: -3468px 0px;\n}\n.vti__flag.mu {\n  height: 14px;\n  background-position: -3490px 0px;\n}\n.vti__flag.mv {\n  height: 14px;\n  background-position: -3512px 0px;\n}\n.vti__flag.mw {\n  height: 14px;\n  background-position: -3534px 0px;\n}\n.vti__flag.mx {\n  height: 12px;\n  background-position: -3556px 0px;\n}\n.vti__flag.my {\n  height: 10px;\n  background-position: -3578px 0px;\n}\n.vti__flag.mz {\n  height: 14px;\n  background-position: -3600px 0px;\n}\n.vti__flag.na {\n  height: 14px;\n  background-position: -3622px 0px;\n}\n.vti__flag.nc {\n  height: 10px;\n  background-position: -3644px 0px;\n}\n.vti__flag.ne {\n  height: 15px;\n  background-position: -3666px 0px;\n}\n.vti__flag.nf {\n  height: 10px;\n  background-position: -3686px 0px;\n}\n.vti__flag.ng {\n  height: 10px;\n  background-position: -3708px 0px;\n}\n.vti__flag.ni {\n  height: 12px;\n  background-position: -3730px 0px;\n}\n.vti__flag.nl {\n  height: 14px;\n  background-position: -3752px 0px;\n}\n.vti__flag.no {\n  height: 15px;\n  background-position: -3774px 0px;\n}\n.vti__flag.np {\n  height: 15px;\n  background-position: -3796px 0px;\n}\n.vti__flag.nr {\n  height: 10px;\n  background-position: -3811px 0px;\n}\n.vti__flag.nu {\n  height: 10px;\n  background-position: -3833px 0px;\n}\n.vti__flag.nz {\n  height: 10px;\n  background-position: -3855px 0px;\n}\n.vti__flag.om {\n  height: 10px;\n  background-position: -3877px 0px;\n}\n.vti__flag.pa {\n  height: 14px;\n  background-position: -3899px 0px;\n}\n.vti__flag.pe {\n  height: 14px;\n  background-position: -3921px 0px;\n}\n.vti__flag.pf {\n  height: 14px;\n  background-position: -3943px 0px;\n}\n.vti__flag.pg {\n  height: 15px;\n  background-position: -3965px 0px;\n}\n.vti__flag.ph {\n  height: 10px;\n  background-position: -3987px 0px;\n}\n.vti__flag.pk {\n  height: 14px;\n  background-position: -4009px 0px;\n}\n.vti__flag.pl {\n  height: 13px;\n  background-position: -4031px 0px;\n}\n.vti__flag.pm {\n  height: 14px;\n  background-position: -4053px 0px;\n}\n.vti__flag.pn {\n  height: 10px;\n  background-position: -4075px 0px;\n}\n.vti__flag.pr {\n  height: 14px;\n  background-position: -4097px 0px;\n}\n.vti__flag.ps {\n  height: 10px;\n  background-position: -4119px 0px;\n}\n.vti__flag.pt {\n  height: 14px;\n  background-position: -4141px 0px;\n}\n.vti__flag.pw {\n  height: 13px;\n  background-position: -4163px 0px;\n}\n.vti__flag.py {\n  height: 11px;\n  background-position: -4185px 0px;\n}\n.vti__flag.qa {\n  height: 8px;\n  background-position: -4207px 0px;\n}\n.vti__flag.re {\n  height: 14px;\n  background-position: -4229px 0px;\n}\n.vti__flag.ro {\n  height: 14px;\n  background-position: -4251px 0px;\n}\n.vti__flag.rs {\n  height: 14px;\n  background-position: -4273px 0px;\n}\n.vti__flag.ru {\n  height: 14px;\n  background-position: -4295px 0px;\n}\n.vti__flag.rw {\n  height: 14px;\n  background-position: -4317px 0px;\n}\n.vti__flag.sa {\n  height: 14px;\n  background-position: -4339px 0px;\n}\n.vti__flag.sb {\n  height: 10px;\n  background-position: -4361px 0px;\n}\n.vti__flag.sc {\n  height: 10px;\n  background-position: -4383px 0px;\n}\n.vti__flag.sd {\n  height: 10px;\n  background-position: -4405px 0px;\n}\n.vti__flag.se {\n  height: 13px;\n  background-position: -4427px 0px;\n}\n.vti__flag.sg {\n  height: 14px;\n  background-position: -4449px 0px;\n}\n.vti__flag.sh {\n  height: 10px;\n  background-position: -4471px 0px;\n}\n.vti__flag.si {\n  height: 10px;\n  background-position: -4493px 0px;\n}\n.vti__flag.sj {\n  height: 15px;\n  background-position: -4515px 0px;\n}\n.vti__flag.sk {\n  height: 14px;\n  background-position: -4537px 0px;\n}\n.vti__flag.sl {\n  height: 14px;\n  background-position: -4559px 0px;\n}\n.vti__flag.sm {\n  height: 15px;\n  background-position: -4581px 0px;\n}\n.vti__flag.sn {\n  height: 14px;\n  background-position: -4603px 0px;\n}\n.vti__flag.so {\n  height: 14px;\n  background-position: -4625px 0px;\n}\n.vti__flag.sr {\n  height: 14px;\n  background-position: -4647px 0px;\n}\n.vti__flag.ss {\n  height: 10px;\n  background-position: -4669px 0px;\n}\n.vti__flag.st {\n  height: 10px;\n  background-position: -4691px 0px;\n}\n.vti__flag.sv {\n  height: 12px;\n  background-position: -4713px 0px;\n}\n.vti__flag.sx {\n  height: 14px;\n  background-position: -4735px 0px;\n}\n.vti__flag.sy {\n  height: 14px;\n  background-position: -4757px 0px;\n}\n.vti__flag.sz {\n  height: 14px;\n  background-position: -4779px 0px;\n}\n.vti__flag.ta {\n  height: 10px;\n  background-position: -4801px 0px;\n}\n.vti__flag.tc {\n  height: 10px;\n  background-position: -4823px 0px;\n}\n.vti__flag.td {\n  height: 14px;\n  background-position: -4845px 0px;\n}\n.vti__flag.tf {\n  height: 14px;\n  background-position: -4867px 0px;\n}\n.vti__flag.tg {\n  height: 13px;\n  background-position: -4889px 0px;\n}\n.vti__flag.th {\n  height: 14px;\n  background-position: -4911px 0px;\n}\n.vti__flag.tj {\n  height: 10px;\n  background-position: -4933px 0px;\n}\n.vti__flag.tk {\n  height: 10px;\n  background-position: -4955px 0px;\n}\n.vti__flag.tl {\n  height: 10px;\n  background-position: -4977px 0px;\n}\n.vti__flag.tm {\n  height: 14px;\n  background-position: -4999px 0px;\n}\n.vti__flag.tn {\n  height: 14px;\n  background-position: -5021px 0px;\n}\n.vti__flag.to {\n  height: 10px;\n  background-position: -5043px 0px;\n}\n.vti__flag.tr {\n  height: 14px;\n  background-position: -5065px 0px;\n}\n.vti__flag.tt {\n  height: 12px;\n  background-position: -5087px 0px;\n}\n.vti__flag.tv {\n  height: 10px;\n  background-position: -5109px 0px;\n}\n.vti__flag.tw {\n  height: 14px;\n  background-position: -5131px 0px;\n}\n.vti__flag.tz {\n  height: 14px;\n  background-position: -5153px 0px;\n}\n.vti__flag.ua {\n  height: 14px;\n  background-position: -5175px 0px;\n}\n.vti__flag.ug {\n  height: 14px;\n  background-position: -5197px 0px;\n}\n.vti__flag.um {\n  height: 11px;\n  background-position: -5219px 0px;\n}\n.vti__flag.us {\n  height: 11px;\n  background-position: -5241px 0px;\n}\n.vti__flag.uy {\n  height: 14px;\n  background-position: -5263px 0px;\n}\n.vti__flag.uz {\n  height: 10px;\n  background-position: -5285px 0px;\n}\n.vti__flag.va {\n  height: 15px;\n  background-position: -5307px 0px;\n}\n.vti__flag.vc {\n  height: 14px;\n  background-position: -5324px 0px;\n}\n.vti__flag.ve {\n  height: 14px;\n  background-position: -5346px 0px;\n}\n.vti__flag.vg {\n  height: 10px;\n  background-position: -5368px 0px;\n}\n.vti__flag.vi {\n  height: 14px;\n  background-position: -5390px 0px;\n}\n.vti__flag.vn {\n  height: 14px;\n  background-position: -5412px 0px;\n}\n.vti__flag.vu {\n  height: 12px;\n  background-position: -5434px 0px;\n}\n.vti__flag.wf {\n  height: 14px;\n  background-position: -5456px 0px;\n}\n.vti__flag.ws {\n  height: 10px;\n  background-position: -5478px 0px;\n}\n.vti__flag.xk {\n  height: 15px;\n  background-position: -5500px 0px;\n}\n.vti__flag.ye {\n  height: 14px;\n  background-position: -5522px 0px;\n}\n.vti__flag.yt {\n  height: 14px;\n  background-position: -5544px 0px;\n}\n.vti__flag.za {\n  height: 14px;\n  background-position: -5566px 0px;\n}\n.vti__flag.zm {\n  height: 14px;\n  background-position: -5588px 0px;\n}\n.vti__flag.zw {\n  height: 10px;\n  background-position: -5610px 0px;\n}\n.vti__flag {\n  width: 20px;\n  height: 15px;\n  box-shadow: 0px 0px 1px 0px #888;\n  background-image: url('data:image/png;base64,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');\n  background-repeat: no-repeat;\n  background-color: #dbdbdb;\n  background-position: 20px 0;\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n.vti__flag {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAK/wAAAAeCAMAAACaRItPAAADAFBMVEUAAABxHmAJN5IlMob////OECUBAAAAI33uKTn80RbSDzT/AQEAKX/+zQAAI5XQFiwAl0DwKyz+4ADeKA9Cit0COJTCJy3uGyPmBRX/+/v5+/wAn0rbJB4BfjzWKyDkHh/CAwP+1AABm2ICeV7HCzAAYjPpDi4BN6gEa0IAJ2UgQ4zHCh3aFRvRKzwBAYwQrisCMpkDUqMAhFDbAQYBak4EaacEM4FluOYetToAHaXbDCQBrcr+vwYFWrgkS6X64+MnrWYAot7v9Pn73g4CJYkAa8F2qttKrtYFKnoBeTTeMTfQ2umvHisHiTDGMT7rJjj00tYAbDV2s97dEToAgAD730X3x8rhUg7zpwcZigBIl9CfLzcAZgABBmkCQBs6fs4DL6AgXjcCP4gAf//qqq/6fQH77eoQR7E6eESvvNdmzP/POVX+9fQ6dMRzq+ApnzwAcs/QAQHQKBLvQESMGjj9xyG70uuZq9fyfYEAcsYRQHqmp8Xi5eE9XbimkSn4u7vpZm73rrNMpFr+1SJalrLUdoGvDy4eikVasIdYWVc+dyng6/Trixi5TVS+CiwBUpXBqhmvCwrMpj02ki8Dlcb9mjMmHFL8PTLP3tHulpj/UBDt8u7tAQEOEhVddrAtT4xHbJAgHhYztDr/7wgDRa36V1jdT2Thyim/wzrtwwxgiMUBNrhxen0SiAbAYXQ/mgGLjI9hWg/gbREBmQDdtBGho6NhXIgUtTkYIm+AfkxKTHl2i7gHcGmYuiHWERKNnMEXGJcNMW6IrYHPyMTQxxY4W5z98EKNdRCmLVBKbakFmLYBsGWDDRKgyeYAcix4s5xZnte6u7VaqRmc0rQEUPDbm6JTdlHdT0fPghYskQw5BQg8MgeLpUjo0wmq2MOLSDhxkTCxXRSWv5xOLmj02Z3FSSn46L5AQTkSRJpRU5L732IibLecg29nChS6mGXXwYPubCwTdci02a8wSGmCNxgyJnk6QaO/lpU1ra9pnaslgqQFUkXztU0IXAImrNkvhOgeZRpTAAAABHRSTlMA/luzB+5e6QAAyUxJREFUeNrsnQtYU1UcwLM2FzqbUVpbitqbAWoWsxBdDSqCUtIcpFlmNF3Q03iEMIYvIMAwUiECNBJFjYLUQkRCINJPSyyRUCQKxQxTo6zMHufcx+777tyxCWm/e+77//Gx3XPPPffeH38usyalb1DMUigWBAcvUCgUQ34otYbOUXC5DHAPjUJ3BsEDaMDYgSR3Pv2FGDC2P509I2n88hEdGNvSH4kWECrps41ABMbeiQiMlSMCY59CBMa+gAiMnYXAypV7lsLYKxGBsWuT0zeMBiwYOHABmN3zQ/Fa46ejucDYaxGBsXfQsIzKGDAgbNDmwju4wNi3EIGxV0HGxlaPnaS1DOJQcRUJjFXSUFiiaVgU9H0w9i5EWHX90JvTbZyfP4X53V6NCIyVIcKMDV3iY6c+ytSy0EgvuUogBOzwigwFQTB2HJOUOjd+8ONAMTZWI7OhTr6SjsA5bPSRqzjA2ABEYKwHIjD2YURg7GBEYOyTvhOQgLGLkIh+lll31urNNZ41C0xWwbrzACIwNvdA0pIlk+0jtd0bSHKdXsZBf51tN4x9DBEY+wwCX64LD4OxOox4Hcn3Nw8A3Py9joXoMX5x/XQaGdhnEwVGPEunQy2zoTlyIx2pV7Tb6Jg1GrFW4SY6bXIaYdHss/caRGCsGxLSWwUlIjD21V/HXhWIAIwdgojU32HI9hQkpLbmBSEa5Nj+iGD1DFzZlQqdEqtnQYohW0ut2Klp3lWdB2tm9S7sAGlgbPre8ePHv2B/hLE304jUg0NbfDMvMPZ2Nt8GrFkj+/IW9mYY68miJgT8bHWoiq+1uYXL7QkC35kXIjDWHRG8NzQDaZDaku6RcIwHzCzLfnGMfaR+D48gAmPHIsI8Lwz1Osgu/rpPtJOLPQGw/oJZPKi/oeN5kNqmTkWE+fuGnPkh+MopW8/EyPiQ2vbdiAiMLY6IkhmqtQqSAj3o8/noCxQk2uqISJXVyKpnHh6cOQVfGxW1diBgbRTfZ6vKRq8PMibq5Cm3AqYkq3l+rhwRvp+rVpMzJlLbXzki7FhVhhuNKs5xC8TQpcUH2ujuhlPWDhib8gEaMHbiRN+JE59P14T8CJd8uRNikHpezKATQ6u/mhjGLhg79HMkhnK+3wzx/kNnauq9NyAgpQ8j9S73JUSwniEi+JOXq5AKjPVBhF3XNft8aWwaREdqXb8BYzA+OyKj0fEsHRirQQTGqhCBsSsQkdLfkfo9vIgIs+95PMYY7HFQH3tcsO85mMYNX9GvFxGcY+w3bVquWsZo6kwmemMIduZOm+YHY0eNGjWo6t3BIrxbNQgEwdjliI/iiHrmkn7qrYjA2NmISD3G39ZFI4GdFyK8u77Ecoj22e5AhP79Mg8zdxuMzb9lOBJSrwETEJH6/V6HCIx9DhGp92/+iDDuRb5fJorUdt0fEalPcWciAmOvRwS7ziMCY9Frw3s0NlrcB40iGOSecfPNA6gCY99ERGoPnNHzjVslCPIThbHaNKxXkuFe5O4efs3LNvyLivyptWvC3UFAONYr+ZjG3VVuNDJU7O9sECKco7btDRrbOEftJkRg7P1sXjvz1Jkz93OAsVqCwkJioT4E3ETVU1sJsLt5RKS2ZvDQmpj3M3qh585TEMHuuhGReiW8neKu27/SaKjGP4JzDs3iYeTLIznA2LbtaMBYnRhBhTH6Yuqz3YYIjA1DAMY9RDE8R8YgZzhtJ+d9BaOHeoSxC6u7iEh5VyD1Of0Vl18mghIRoWcji9y4SD1jvL29dwwbtsPbe5gJ8S0U6+wSOAv86ESo6X1dxi6p/YoWuR9ybEzibOTaKiNJePpJMaT2iwenzPSIi4rzaEu5cfdbIkg9bmeXvoOE1OeLTzD5606R+9sHEZH65o7eC9Yf+PxVIXry/kFnEb/6TkZEan24DxEY+ygiMHbi3ImgALA5P6vXB2DtwxwahedPnJhODCfOB3OORefD6Fc+XxqHBwEO+/Iita9rTTZU66jz4viH4LzQCfUAEJHSkkv9uXcjIvXnDqez/jMaK0bQkWpuzEMExury0duSsjFowNi5iMDY5IPeSEi9tiQiIqWtlhrrSYfhu2TcTEdq2zeAwcy7hJB67/4yIjBWIUYQ83s4eXQYEjD2XsDCo5mZXV2Z7QvvFUbqvTD9vQMkYiQ/Un/uEtmW/jidhlCVl6CpI1R3/ljMBcaO5vLrjoFc7LVR71a1ljTkU+fxRESk3v1s29q9bVv31m3E/PuZD/MjJVZqm7ob8vtuu3DfFQdEcX/aayTn1rlxqLv3RhJp9/foLYjUTz8MEaznvXTaNNSeANEikS3R/PkiV3cliVZLLgUtEzgbJiHi+JtGNTWAFRwZCeXMpSZojNZgUWDs44jA2C1/ffPBNwhctrU0zhgCqgOsDKAqgLX0AoWT5d+HvhAq0uXfpS1I7i8UWfk/2//yL4/4e3Lp0OJco9SuNHgNmhRSQLwWvQeupReM7vPy79jjBebEwqxBbCws+VdBDlz51zb8l+VfcDucWyzaXdDINOC9oArovwLqrwq8VQRBrpJ/Bc7hymUqBnLyIWzHiekBkEVFizil1Ta9APLvGGokVjmbsbqQ/+dup8q/4W+/7Ur5d0nugdxixMcYS1k8TM0ZCMi/arWY/PtBVdUHTpF/Z6wvKfeQUw+um0j7Vykm/yK6vx7OlX8Fr2iulH9VduTfsL4v//qp+gWODQwccpX44ID8q1OigPecxPXf9dmo8i/zRb52tdngbKmCqmdKvJ7NwerZhl2xZlDXZikrY8z1YK6tNpvrYazGEDMV6r2wvCA4vyTk31EIBZN/Ed1fyfKv154WKeLMtKFtQAC+COVfrP4WeGL11zMeW6scz4Ngm3qxyL8+xUlRspBKLb/8q608gEcw65kqPFzFnvPf4qr55V81/bMF1O3va/Iv7Pvm5enBT+3T8m93XVogSbylQgdm5I4mSv69Pxtd/sUEX1L+hYU7wDLRznlRU9NdgyT/amRc+ffzXz9B4NfPpcq/LWs2HTmSeq9T5V+0u1zXy7+Ijhgu/05GGTjyr8a58u9gMIACBjH5V+r5Bm722IW7SbL8i97fcUj+vUF84pj8O44c+OTfoWSBsfOBGDHfSDXKapOso0NmojXhRiwExpaMArRWvTgYQL9nJXmxqhVGlGDfA+hsXCLyr0dYmIf8aHl5uQfPMc7Oripxgvy7v25zw5r+PZV/ycPM2KBmfr/5Tz40HAH7fSMlU/5N3fn7RSv/brZAwjH8M5r5CbfJvzWY/BspitR23d8/Otz+cCnLv3Ig/cIRTHD595WRCLzS2/Lv2Dlp7eX46++wcGD3+oe9TJJRVJRhWwnzh+ov2HkRyL8/Lv7ww65Nv2354zVB+bewMja2up4u/1Jbpcu/Uu/04OOD2lq1min/ws4FNV5o+Te/5SSgJV9M/oWgyb8rG9o6Z9k4kMsF/xNh58i/QQUhSZEDLrj8q9E4Rf596X4wihcXy7/awsudI/9Sz0ZOnyafjfxR4sZF6hnj7R0cfPBgcPAOZ8u/3n5k4ci/1B7p8i94SeyHGiuLip07u5fl39dT5rUB+bdtXkqTqPwr9bh9/XW/Hajyr3x5y39W/q0t/V/+tQcuaG3YNxFj3wYB9ffNgICs19nybxdwf8myArq/Ph4qfMSPxRdPz3Sh/Dt/rXWt/b7uVuz9sQ47L2Ydh2uGSoUd9UkDuHjl38HOlX+z5+FFfDIPl3Q9kduSaWWukX+jkhj27wju1LXyr3BbzRVZBWMvXflXq1TwEBhUQ/8e+h9qD5Mk/2ZaKrqW/NblfPk3ynowF0n+9UYYsJ/rVSxrJO3fdL2PoP0rZNIsZvEHR/69x3H5F7q/6zaX5fe/EPLvtq2gbINzWEqX8CM1lrwEIMq/v0/FDWA49FH5F6EFcbn8m98f6r8uk391ithYRV+Rf6H2Kyj/3gWGcalH8kLjDvZA/n3/fZb8K6vtfPwDFPlXEQhzaYbsgpUBVAXwmgt44X0486+K+8eHa9ZwNu1RgVDez/bfkn+vFZN/H3hhqvhIyr8I4m+oDCD1sfHoe85GghejifC16FnwUjQmcTRFQQFX/n3ghd6XfwGVhsqrtFnImX8VF2fmX4A61CpWHxfmyNQamcnqxdepUHl5WU0yjVqWs9BV8q/QOQzkX47+i382telYx4lFAZDWokWtRa0BrQFA+cWkX3K6yMXy75jBFJT/y95O1IX87budJv9GP/u2a+XfAweScqnMvz7UAgsYG8+iJl5bX6gFMxYC8m9ysrD8+3hdUVFra9VjXPbv55F//1n8jAD/7FyX4UHUdR2gOy2rIi3e4cy/L1ZNp7HCY5hz5V+xK5pSAX61ykowAYsXMPNveXhYn5d/VSq/Zd9fdZULMv8qgrQKVPlXVP8dfjg6G0n+BbUjiqwh+FlWWJmgcb5UoRjCqmcbQB2bNUsRq4nZpWiq0ZrzzIWg8xCE/74aIvkvnPDNL6HMv6OoKcUoxpTM/LvvWrtFuvzrtbxFkjhDCsAXmfzrGbQt02pMwOrvNqyd9PQcz4NQm3qxyL+VByj9lyP/am17q4l65gesCazRDwMT9hzu82Pe4pqS9Gqu/KvWJ5no8m9Aa1V2n5J/1bURtZnLl2eCmbovy79NrRVKyvfNiieXlWmthAmMCafnHMr8CxZ/FMTOeRFU1hnocObfzz8JClKyBu6GTyTLv8BF7PzpWMKRL+91nvyLcJfrTPn3nXeEM/8iDIT8izHZ3iie+Xfiwh7Kv7j7C0d78m8MIrTMv3LGvR9nRS5R/kXv70iXf29A0H97lPl3HEf+HcrM/AvS+gI1wqq3/UFlxwlAh+2PLPVWsBskB4axhxpI/Zdxz0osvEuovw2H8O8B6r+XhPwr9ygv2VzSjKu/XPk3+9usnsq/L1atywKvSXoq/6oTEtg3ehpNQoKa9f0+iZL8V2rfaMLO9al9UP7du9eO/NtdgyD/Wv6EhL0NeNa/OXzmq1zaw5tt8m9hPJgUhIoitV339w+P9oeITaMvQfl3EDPzrxyMRObfkUhcCPl3krj6W07Iv4T+m7HjZZxyd/dyYnFHBqH+Xgj596gr5F9fWDB8r/2tufnUqYqKjOZTi+9/jdjHlH/r6wsqq82VDPkXbq2EW6XLv0itGVf+5Wb+ZYwXVP5t2UPQ4ozMvw2D2launDULFIwEExf89304refyb5A2NiFuAIQr/27EcJH8m5DjpMy/L03s3cy/v37e74rLnSL/etZsK8WejcyfTz4bWSkg/4qfMTodS/690wq40wWZf71hgajY8q83VSTLv+A1sR9irGm6ybDhttm9Kv8ObUtJ2RK1MyWlbea5twjOvbX73LmF83a/tXv3ue3EVnvHraamJogp/36d+Dmq/CtfdvK/Kv/qD2T2mvx7FE6whaP4jFX6kvw793mD5imY9fcpjeF5QfX36adZ8u8mPO8vLOdPewBUHh7BHthIyL9f3PKLy+Rfa7Ixbu2V86fY6eti/9PHmFdpDg42b11CZEH8P/MvW/71GzHi1h5k/s2eJwbcS0i6x1ei/pfCaWVS5N/3EAom/0IDYhhQfOEgqP+OcKn8K36N3VJvWxSKvXTlX11MPY/6q0izMOXf/msaMsIkyL8//VTRVfETJv+mOlX+NQ0daUWRf72Rf67KKzIqZw2hweVERQrZv0J1ZzGTnevWM+Tfez49e/bTTx2Wf/fXEf/LyvXyLynzEvMcEz9SY7E7/ISoWvwRmsYgBCH/7n1wd1/P/CulBSGfEAsD90qXf90a+mP6r2vkX4VCWVgIbk56Wf41hUaFqkNNepNen6QPTTIak0KNxihW5t+7YLnxuzx9BLR/w3iLXfm37JvH338cjo9/8/rjeNJOQ9Nf+/d/AIrocNmCBdVmY65eplf56I3JUYYF1QsW6Jwt/z4kVKTLv3I58+7j0KH+ZWVwSuckdiBEPpuSoG/LvzNiY2L27t3HL/8Cu9cuD1Dyr7j4q8n5re03qfIv9f0OHKhPIr7f0SQhIVz5d0t1n5B/zyYCtFnimX8VtuFizfwblbTERzTz75iPU/Ng826MJJL/qlRwJNL+RhrhvrzUj8e4Sv4VOofxd7x+Kj8M6t+vqcnURsdOTF8UQFAEdF/+zL+vIBTHMv8yTd/9+3nyKNnqwpO+PZF/3cBA4A/cX1fLvxEHiqHtixVygVoi12HsHAa6SZXmkJyQEHNloY65h0/+VatNq1aZ1GoB+beuCCT+rSrisX/r6njk38Xrn+Hnj3XhUGqi5N+0rEGbK+KRM/+Ow6dc9/cE7v46Wf4Vv6JVG3Rms85Qzc78O9dFmX/LsWlYee9k/tUiQgojfkt/PX58iDjS5V/trtj6OVj+X51gIeVfMf13eErKunUI8i+sG+fPM+XfeO0us8bpUgVVz1Twyq4B9cxsMMfmaWLyZIaF3/2cbTbIQmLNBvL3NYTsHX/JZ/4dBf1efApn1OBOn+Ly7z5g/4oUhzP/Ak5KE2coAdhV8u/w7W+8sX0covw7pLCwh/Ivu/6S7eR4jOcI8DXxNlV7/HghQMuSfx+wjYC9oIvO3NqX5F+Flqn/UvIvcw9Rz9qaM0RpbmPc4qqTViXzyb/Jq5LUdPk3oLVuv6Py7+mMjNNOln/VstLlmQeWLz+QubxUpu6z8m93RcW6ioo0PO9vRUWdpYIwfrsPwx1NSlL+fekmBzP/Ph8TIoDIeQEJXHmyM8jhzL+fBLFRKjlbpMu/8MVkftmbJzqO5XwFEgAPdob8i3CX6yz597rMyZ9v2tSvX+Z1/PIvSiHk38kI6q+LM/8Oxu1fMIjKv1IztUDhBgwQOCcW8SVyh/TMv+j9HcnyLxrS5d9xtoGb+RcyFA74Mab0XuJB7rHysLDyY8SjW0oNxvuIdP2Xgqn+4v0HOQDqv70v/44gJxTUZifIv5Dy8PKjKn75F/Lt5mga/tyJuPy7f/3mhkPsPjgi9H8raUjblGOQMTDkfJhmUDO/X6Tkv2LXAIhu9dZCZubfPin/pqeLyr9Bys5uMMHQcQuv/Nve3A6EkV9eJdmDrbS3k/JvfOGCgsIaRPkXFjhSSwLtOjB7of67AkzgjLt8aWb+HQTuqsAEyr8D5Jj+Cyd9TP49nnhcVP0l5V9S/yWT/17j7n4NmfYXV38dlX/9mSNnE0P+PZoR5srMv77Vpc0dp2KrF/9Re6r5VPVE23ZS/iVT/5rNu1jyL7VVuvwr6V2XWh/a2Nho1JtY8m/vZf49uWfPyRYAnEuTf1U88m+beyeYrkxrSMP135Ev86sI8CFomhT5Nz6+uzs+nuX+7goxFg8gkTPk342zu5uamuLv2egK+Vfz1Xca58i/WOpfFhNfoo8uln8nD/j8e0H9V4kI/SwI6dcvhDgLGt14YPWLOWfMnK6uOUz512pNSoqzSsr8azAgZf71U4HCm/mX2OdI5l9Ai5xX//UIY8Wqj0WBFuj52b0p/1qXdKUe0XyV2rWk9C0A1H6b5r3lO+/bb5t274ZTQv4VbekCFQrPP1f+ChYo+Rdydhma/AvY0wfk31eYhRyp0kcz/2ZmtmVGXqDMvxMmOJr5N3bvRIy9scLqL1v+LTyFmb9wOH8Qpv2F2q/KAyuE/AvoXOYa+dcaqo+bf+Xa3Pn2jYUYeF6YfHxM4D5fZgbnhVKBEwTgkX/TYxcvjk2/eOXfwWz5F3q/ED9H5F9S/RXK+QsLKf9C5uSjyb/A/nVF5l/s3x8H2/L+jmBPXZ35V6ythnrJghxzEJhjiMRSStMFk399rC6Rf0dSIwW11V7m3yBFYFqWe1pgEF3+BZRtXhGGLP+W/vZTV4UlE5N/4eAk+VefHCEfeTApKcqe/AvwRihYnVR5+ejzOvvjNMqKBexfobrDTvy77ieG/Hu2AHAWXf7lpv2FYvJ/OvOvOi/hVM6pUzl5eaADmCgEKf/+juX9ndCHM/9KuQdmiAc8SZDVDmb+LSsh9V+p8u+UtXblX0VlAWwHKs2K3pR/1WqjNcmqhzdEubkRuUnW5Ny4ZGsEU/7NHjeOSP6bYzJaHc38+01De3tDQ3tZWUNDcwMm/8Ln+lsaRo2yWx+CAT4+KhUoKjiHq0HUHwn2ucy/4H1DCxW8pv8ay5qGhnwLWKC2tnhhB0L8s3l69vXMvzP2GjQaDfBqpl7LlX8Jt3cqmAjMwQiAsSLiL3TR8xq7ftlz8mStZPkXf2k5EJ9dh89Gk3z6KVv+/WdfaemD/zhf/t3NLHALdyOzi5MYEnI2nrB//Z2c+TetbTJ4u9qW1sflX3VEsUouDH5ZH3M3eLMI3xCqvOBGLwi+pILvEsHDNRBytwvlX+45DFBBHp758EwAmFHyr0ZjS60eBVIATw8IcAsH7smiIji04tNFRa7N/AsZg01IJ9TdnfUmFe6i1YU/zzko/7q5LZp+6gScLZoenfE2wLXyb0RE0oElk+3DlX8XxyR8l/Pdd/rvckIq7cu/pri1wCSKM/HLvx8U1X3z2OPfVAW8/xibb77hkX93rpvxDA8z1peUe8gZ8m+8pSSrW4eU+ZdyfsnlFw+T4i9kRfAwZ8u/Ilc05a76XdVanU5bDRaUNPl39uzqSbNnuyLzry3lb1hYL8i/6YjYssX5yYtDNYY8gwgOyL+xhuo5iJl/NwrrvwsPLxyeHZ0tKP+qqVlHxpsmGV3+hdRXpztXqqDqGbhC2OrZAo0MPImYt9CwcGd2YbyuIF2mqbb9vhpDzFRo+Qrrv86Qf1v6tPzLzfxLQW2kMv/iIzbjX53hkPwLfBwp8u+Uq6+esooSgJ0v/74xF+MNBPlXO2TsEIsFTLQ9kH+F6u/U8ZDKyj/+gON4DNG7BOVTU/e9dubMmaeUIpl/96an7+27mX/Zki8p/7KlYLye+aXdeLg1QJDWwzem+dFucU3JcQPX5urZ8q8+d+3AuGQTJf9C6qqyHZR/o6OdL/9G3GmN2LMnwnpnhB3512SMiIgwmtS9If9W1GXVWeoqlETeX0g8nhAY22Gh5N/XUhzI/AvYYBDqFIjfPWu1nocOeWq1Dmf+ZaGEhYUD8i9gacuahs2LpgP/90jqvU6QfxHucp0l/3ZN+P7V1HNpP/zdxSf/oqi/VOZfwv+dLDZ3cebfwbAgZf7diAg98y8YyEVyidohWf5F7+84Iv/ewEjzSy1SO3qS+XccV/6F2i8BjIVNnHE+sCPmG8F+MBiPNjeHGcECYwfRR2Trv9RtLKX+kvIvqf+6Uv5d00kuda6Rkvl3hDMz/0JuFjrG2ThVJYTm64+S+Zeb9pfx6Zh38auuBu/HwNTeEyCNZkvnprRGPNGvGp8mNKZt6vxQo2F8v0jJf+09QW08cb5Dy5B/D/8+gcXvv//e2/JvY6OY/NvZUAZo6AYOB3Lm30HtrwJmwml7+y+/tDeTLnA7If8WLsgLqYz3/D5SFHq7Trbg5EAVduZfOOLT6HAwMpZdn/n3ZUQuoPzrvtmymcj8i+f9BWUATf71Igu2cvToSPZGL9fLv5N2bdg16Ti/+ttcDllBfLuk/utevgMu7fD3x+fl7oT6e2Ey/2Ycpcm/dzhX/n3Nd+9vzR37fFev3rT6x321b9Y+YLN/mfJvvdlcUM+Rf+tjwFbp8q/4nZ6WgLrTM9XWNn64pbY2VK1mZ/4luMCZf09i6u9JOAGLPc78W5IFJivbSkaVtGH2b5KRi+33bZMg/3ZXALoZ6u+c6oRcm9op98mly78bu7OKihpa3S26jS6QfxNSU3N6Lv9yvd+XYGHhavkXvCrvt01A/1UiQpwFB0+D2t/PYukX7KM6DXNORbtxsXf9D+zqCmTIvzusEUlxw4Jh5l+1CPR/p6wxmzUaxMy/3ryZf1W2fTBWhYjt7GpZ6sfj/gZksM4YQnswT5rde/KvyWTKM8gMeSZTyFsQ3ybLt/N8fc9t73za13f76u1gGXv7KXbc0pqCFPHAelEEdddQ8i9kY78dAxHkX8jyll6Xf/tE5l+dVPk386dMUEpLMy+A/Dvhd8AEx+TfiXMnvvf88++BmZD6y5V/u05A9fc8GFcE42l/fYYB/xfOggn5F/L0TFfIv/OTo6D3uxYIwMJQ54WPCp4a1HlBMpphhGgwZFveAGyRaQRxWP5V23CV/JuT41jmX9L/lS7/IkKTdIPyUeRfaP9KkX/fI6cU7C3kd2aKOOgtxghXyr/i11jd4oLV9QoCwdheyfxbnByJy79P3y4AjI1DBL/7GTkSjOwBFMZWuvzLVX+7LeCGkPk94K5NVvSKMET592hmaSYAk39Tgfz7pXPk31ziFjQUIfMvHMUlYEL+lQMxx6hJ64/zoWyJl5yLsA33x2IaX34JVyn5957ExGqzuTox8VNH5N/960Ha33ya7SRV/i1DhJ3NF5ZMAaTGyqAdd+rNN9881QhcvJjbhCDk3/FT+3zmX3v3wPFaHV3+VR/rOGbS4FcrbPVEB1gjVzV5YLdaQP71EDzLgIxf4lYGOt/Lpjk/86+iulKhUyq0hRIz/yYmwtGZ8q/VmmuNA/5vnD7OGKc35gIdmCn/brakjAMA+/fer/L0uQeDccKIEU4o+Vfc/i0vb24HDjCe+Rd7x1nbsNndDlhlwKsB3iNi3N7Nux1M+pr8K19KNSllZfmWBgso+SD9L0n+UvxACH+2oJ0fbmpsLPhwSxCv/DtsxAjvZcvlI0bIly/zBqu9JP/GGgivJn3vA/u48i+u/wKmwjnfOin/Cou/sJb89ssvJ0GpkKkly7/UC1E4xyajKVjy7wPVpT6RpdUvOFf+ncAB3P9O4MLs4syOjR07icr96+/EzL9thMU7pa1vy7+y0Fwx+5e8rI9ZmAMbepMVWr/WCKMxwgodYKsJbs1ZCNRfV8q/3HOYlH/lmYYEQ+menDxDlxdct302ugFsOrbi9GcBkEWtWN5fLPOvi+XfMYPp7G91B7TuH8zaQa8L+X/udizz73SQ5uxYR8cJt0UdK952vfxrXXKguHgyASPpr7j8q43N2dm4M+e7n3N21n6XY9bak3+jVsGVVVH88m+V+/6qD95/bL/7B6TyC9ZIWPLvP4D1bjvh7BkG/+xcl+FBr+tKQHxFWkW3EoeUf5Us2K/eSW44PJ0Cur888u9aDEflX7ErWrpZqcAxp9My/85NfD5kQ+Ikp2f+DSvPGBRejmf9zcjoBflXhghDGMmNEo2VLv8GVZorg2B+KAT5F+q/c+fS9N/hw1NIDkev/zb6WyH5l3qT35FRfor5+8ZjFBbEaJwv/8L6BWUYsp7NUihn1cdWz3sdDE/vrJw1S6mYRX+Qn44l/yULZ+6I/PsoVQANqx5+eG3Xo4ztzpF/UxJAdM/lX0r9pfL/ujPy/8ICY+nZfWcwBnwC1V/HMv9CliNl4yPU3xWnT59ecXoKLQOwM+Vf6P5O2rh69cZJc++wK/9uy0obOzYNjlnbHJd/eesvKf/uG3q0HZTypfvGQ0TvEpQzzAmxsbFnzugo+ZdLTMzUPi3/Qv33N1L0rcTl30qm+kvJvzdtv+lwiRsvJYfBTob8q59/3cDrVhnVTPlXbVwFNs/X0+RfdzC0VmU7JP9e7eZ2tfPl35bS5JaW5NIWcfnXFFEcCd4RRBbn6nsj829TRVZFU3cgRNfUZLE0pSmxlXi4Iw3bQQinvtmI8u+PkA3pIIkRvmAQQPS80C0we3Z2xptXOynzr/KTbVs/UToh8y9kT8shS4kb6BkfSzjyJfR/B6PKvwcPcrch3OU6S/5V3bfr1a2rv9+6aURPM/+i4OrMvwAi86+T5V85LJTq6/Uvd2cD18R5x/H18wkiDsekK3pZR2VzboJs7bqyrVPpgnXM9KOszsDmXHWjUUbcS6kh05AAihADNro6k2W8lUmIZkz4gGtEyyDyoWw6RKdSRUGK0CoCq07Uupf/cy+59+OCwb187/Lcc0+uVpN7fe6b30VFodk45hshgcq/8s93Apd/P/5T9KIKKOmCekEZuPxLBf+KJf/CSH7H7IBfqJujU69Gm6HGjASmzhG5+i9f/aXlX1r/DVT+1aWkw2NkUnQy5N/GUuglhv9BaaOA/MuzfGfNSk2dNWs+F0o3koPgdxyRWl9/NVpc/gX6bJtXb4P+oW3bNqMJWciQf9+ocZmQ+wsj9fmzpdc503MNubPnzBaGIf/ahzwwdFEdIDBRdkHDIY8T432+EP4rjdQxACj3DNV5EtjyLzf5t6iotbXozn9U/rVaLFZx+Te53WZqbzfZ6sJFEE7+fRX3fsH6TUtLA//3SvctvIlK/m1pVqkrWuTIv7DLXkfZvqhK1KhWKOHlT/4F9oLdi0o84xdKRn3Rw0j+nSaThyX/xsTYbDHtpkjwf6nkXzSECCb/vgJjdzcq6ba4h5H8u6QsW5/R1PaemPpbfH8gka1Wg/6bhkf+pqWh8tE0XP0Nnvy7aPVqKfm3Pq14ksm/hYUTJ/9uH2jv2vT8M4caGz3PL/5bV7t6E/UOP/kXHhVGy7+MVin5d+dOgUbJvVk55DTduwehTbEs+bcRl39Zyb8h9EMHiHpgW9vk5d8LyP09sWPXrh0nkP17QVT+BWTIv7+KaUelCTKzTdLyL86am3LlX4vXa7N5vRaG+9umZ8b+VmvszLM+SyS4vxeTqqqObzkoxAPJv6rO/Pz+ICX//gwGdgXV6dfUy7/AikfA/n1w+XdsbEb88ndNpndXRcQXj4nIv5JbDCIhgSXZgCPlqD6f+9ZC2cm/Sr1++3a9Xikt/xKZv4BI8u9Csgi0n4q638y3f9OqiucJ9B9gOoVy2W/X/afkX4ej64xdebl/3DH+OuLevaMbj4Lye3Ro6OZR0H83ntuIZ/9KfG/Jtp0toWDnb/mC5dj6Fqb8C9x+2yAJfZzedWNq5d/OGkRnEOTfKU/+TQhA/i2pRfLvipHaWnz2KvMVZPkX3N+inp6iO5OSf4ENL6nVL20QVX/58q8H1F98uD9GxP6C+osmEfR38Recz96aAvl3f2Li/izD/ulZ0w2GCeVf0vsFA5i1P4PuNuht4+YeKhVbX7t+/bWtCuX/XvIvCEA+KAJN/qVif+dPQv7tlwkroXdBaWWpBNRZyKre0xMSePIvoDNXg+KLRnixRlRMKvm3RiaSx9i263A21WtJfuq1cDQrfTwur8Apn0D+XRQU+Re2HLDaoJwx46pNDPwsWiZo2fMyYcu/4XAHg2JpsjcmEk5ol3LlX6CyfTPov7Lk3/P43rkkH6m/SAC+/LDlX0r/hfJp6T+XeAZ3usIzjcCjcMRBCxtxG46Wf+/evbvd5drOkn//eLtZrVKpm28HnvwLsb/HG9oZHXaldbZA5d9LMqHTfGEgR1+KMIEuq8DsvlEbAPavUanf8FsRcPkX+OYdVELxX5v8K7oHid248y/r69bv3EhsT1TP8YDb5bo2oCWN34GGhjCwfQHc/L3mcrkHMMwv/0YzRiiiYcrFn8XtdoOxeWPXquAm/wIoBD2hKSE0APm3o2xJTnZGTk52ds6Sso4gyL9ACp7460hMT8xzOLTp2hRziiFdy/qOu9NsvwT3F42f6bRrzULhv6mU/CvFO3Xg/16peweq5N9hMNFh9XanSYNioLeqdHmaxPgIyIJ2aDLIGOjk8qbylnPev9/87JalDyT/zvEUSRGI/Mt/8EgleL9uACaV9J9AfhEi/zagxagYvDaoVRhbBOXfE7sX7r5x4cbChVBA9QRX/n1VJuIrToQc+VdP2w4Q//sJrvwLDxj+CQzg+UKJz/HmoY6WFRZ/AXSTwNl7CzHsVASW/Et/vmZ4IKr/8/0Ckz82/ZEh/45Xz1hV3bgsuPJvBZf3K7ZXCMA+xXnyyffKMnLKCfs3qMm/b0/38/Z/t/wLZ72agnhp+Rf4wx+KnOjmoCYzPoXcrcVnalCLs+gP4P5Oofwrtg3jfa8lCoXzhRNnFQpa/h3yNJIPvaQEYK2hIBEjMoABMv+Xln9fkXpx5N/dogU/+ddv+v70eFVV5KVLkdC3+VO8FUae/AuUHi2SQEz+vTYwYHQ6nUb74ECKYWzq5d/qguqCTIbvS5V0U7yQ/Bub8UF/P4w9ra120H/t2VLyL3xvGiwXzeRCBcP48u9pONycNh07HknE/P7+UuSx099lpP/CjF/+vVvjgnMnl8tV89KPmNx1paWGkEQXo2XbEBVtFRVtBI/MwHmkjQP+HfMp5Lu/fPnXrADMk5V/JY5oseVt+MNhoGgrj6Xl398uUyutGTlBT/5NTZsZGZNWTyb//i/IvyEwxsWnB1f+DS9HWTHwgUM1QXik5V9Ar6bTf/t6evoKST71S9fmzT2fEpR/McUAnKgAifeL67sTFXz5F4it2OoMqvyL1jMlOrJH+NczFMOTrXC25oPnkA+7WWtTW0cG6+8LJylTmfzbu2bXGhh7pyD5d6NPK/yZvSIT6oKOtnyBsCS4roMXAfEGP/kXXviEHflLVCYn/wInhiyS+OXfsbF9+8ZmzRobQ8KMsAAc6OdwmkX5wSUVG7zegxVLDpaz3+HLv+WmI+uehJvi646Yyicv/9L7Sdb6u/UriFMj3Q3dxcWpVwn5V/IqIeFvBxIxHbaMLf8uw188qHf+u+TfMoImtbmgIE8Hnxwh/6ryDAVmmFU3kQv45V/gSz1hAvR8Cd5iy786SP7NzeMn/+blQvKvjp38C/rv8dOTkn83bw62/Kv01U7rNVy4YOidVutTip4hYykF1P3I+FwN9pDlXyDhpsmSAFO8vgVu2cEM5w1KOD0qU/7VI9RKhQqvnDwghsR2AYTn3D585GsbQoOS/Aue7+EDB8D+FU/+jZMv/6I7k9DRiNrg9HjQfgYCgD8uR/5dnp4iIP8GepV7isVPOFUatOx+DrXV+2fNyqqu5baT8q9ILiQ10AmRBTKZ6uRfapyS5F8YQ0pK4jLPdo3Piwi5Mj68IoR6I/DkX/nnO4F+DvkymXTyL/i/fPmXCv6NogRvlugLyb/19ZD8yxSC6XNEnv7LV39p+ZfWf29YRBE4p02By8h581ZkFqRgE52nljZ6pl0oKbkwzdNYOmHy76zUseK0tOKx1NkC8u8jMhH6jqOL3UBxtJj8m9+K1pMeu1YCEfn3pz3H4emIQ4csHguVaGBzs6VXA6Z1KFKyJpR/VRYcoxI+VW1Kihb9EtqIWg55VAKf7w+KJJE6BgA/LPzsh4Ws5N/WmiKO+9vqWuTmGcFo2R0yQctmyURY/lWXlqrF5d8WCI6AweQlTA7+KJr8e6L7yi3oXG9Iu9KN0n+h6RYt/5Y1NZUvWFCWIgm9X6d25Zz0X6Kkk385bEYvf52eCSSL9H9d/o2MqRtqaDc1DLXHkMm/IP4i/1dI/u1+5ZXuq1dRSbU8nOTf9zqyVUqV/sASrvrbi6u/e0cHtZiCm6sMXSz1aJIKRf1MQv0NYvLvwICU/Fsck3ZVRP6Nl5Z/jx0Tl3+fgReanBw5t+n5X/yiwt5V/otfPP+Sdzwbb+bLv2XNGeoMnvyLWrPLReXfnetNpvV8/Vdyb1b+9T8d/XDo5tf/RN/4xLRaX1dXihauYwSTf0PIEte7ZELLtPNegGfWCQ/zBOXf0hPg/O4IwdkBFvCJ0omTfzGdRPLvTFL+jSHlX8hU48GQlV+wyJR/b3ptly7Z6Ojf5IQmtSPTr/7OMKScwdWJIzjvv3upKqnK1l4VCeXfjwjwQPKvPb8ov9MZFPl3MQw4xJSq0y9A3r2Cycu/wIy33xXSf8NlwtwKjO++m0JuBV0i8i+9xUQwtxia8PJyhvxbff7pt8D+fTw9TwqG/JvR8dprHRkTyr9ABEr3jeDKv7T5C6BlM/mcF/vhjV+rD2Hqv2ArzktLKq6P5vYf6OCWMfTGWg+sWxe4/LvR8+Dy7/LejYX9qv7Cjb0lxPNNj26sa9959LWbQ3V1YP62t/fdw5sl9nTJLet3rrd4+4Z6bKZQjvwLfEKtlYB5nJbTv8hWf7+/81GZ8i/cs0HdRUmumrvf5BJoXyTrouNsUOXfBHgFmvxbcqXEBMNDSP59vajnuA2exMGTf9Fdhs+jYmM+FJ/6PEoh4cm/gNUqrv7y5d/yUST/Ivf3PBH7u/xxpP9GLCdmzlPyL2KoNleSSci/uTpNFpJ/p0vJv9RDzxVwna+Nj9ei7UIP20U4nhl6pKqq5lJV1RGoktvFSRx9U4da3dGkPynKZOVfLAXQaFCpmxL5V+ccGXHqAk/+RebvJJN/nTJhS7pLshNTjKL4z0JWjUXOpImJ4dYA4r7nb2UN9GeGpRgeJ0J+g5X8u4iN2w1FWhpUOG9InZW+1/S917xer6Xje88sCQWklk1eOhy2OWxzWthwaPJDSP6tTjenYClmB/yma/kiKdVQIRMReX1wUEReDw3t6CDPQMoS/LG/loZIWBUiheRfoK4B6b8y5N+SEi8MRPIvetnlyr+zV66cLS7/Jualh8w9bzbr5Cf/Pv3EyulPIAF4IXeg5V8gzqA4NI3AojBz7TIpG247RevM1u0jI+zk39tNKH5Sld10O2D593TNJVsdM/bX1FATqPwbKRNC6EUeL0BOz6YLE+iycBI3usdmazDZ9tjRXRMx0LKHZCIq/+rsUyz/Sl4Dx66v+8fG4X/Urd/CTv51ud24/zs4qMTnYsD2VSghcxCZv4BI8i9QX88ygokXvUW2h+H677xVwU3+RcAVfUK4XPk3B8RffQcu/2Zk53ToM6AhCPKvTgvoYMB0iVoMSh2asvZiF9sbGvoKSf236LIzBcJ/eciRf4H2dlB//fJv4ua9T2sUjSeefuItCT6yNrRMbTbUvr91+fKtHWpNbu37sOsk5N+N5R5P290PtySIy7+uS5dc0vIvErqkEJZ/o6Li4sTkX+AGuUupu1jX4A4D3A1QJW9N3KC+CJF/G5BsV9y/PzCgsAsm/z6+G56rhH5njX5jDdXdTzB44AcIAqnFxdHi8i+V8nvKqqBRWk9x5F+ZoGVFxV9ECSH/jhjtzgC7jeEQkaM376++vfWjH92aozbvz7z9NfazUMsUOX75F1iWWQumS3Dl3/kc5uRqDPvn8yF3JDRNqqaP0dm/EyT/4gEuDQ2o3CaZ/Ns7nUHvQ5J/rTLhnWLpNNWS8i/BF78Ktxcx2JspMNX4uApigHUwqzwDbwBTKP+KbMNv7sKTf+H+1u7d4zqG/DsNqEQGMPUkqQJ0IlSAJDPt4LVr25JI0LKE3SvNK5T8K92bByWMtPxLZ/yeTqq65L3Z0nLTC32cp1GL/23ufu+ibbUoTPk3jBn8O2h0IjTalP2/fgjJvxpHrrlghTTxfPn3rr2r1dgP90f7+vL77f2tziYJ+de837DP4UAzDsc+w34zX/59JxJyBLshTZlwf6su4RLwdyn/93TV72n590fbiVOnGlbw7/dq3P7Oveh6N35aquZwdgbOWW47W/7l5v5ew0e4xJgC+Vf8iNam7gj106FuI+VfYIleqQL3N7jJv0AqyL8vP0rx8OXfRJmQwkhIXHV8CD7RqEThy79PPikt/yISkpvKpKN/0bJ48C88RgWmhP7bA0cSV0+hn5rNrhqYFRLgRuu7i+/f3wM3CveAp8GTf39IhP82qYMp/64NPcBZzx4Lt8KFYNmWLc354Drcxe/HKfCtgXmSon+R0n8p63fyyb99bNrnr4kqyYxaM7+d8wbZ0dFCj/BSKzFK/o2gBhH5d/2tNVGZ1QaNkGCYJhO0LC7+kkCtob3O69rTW9fegOYYb/E61L5HTvltk5F/50bFAZkacu3RpOtE1of5AOT+zt83tnflyr170aygABzw58Cg6viGDWD/ejyeJQc3bDhexXyPJ/+ueyz2MaIGlXUPJP+uXYDvJ49Q62/JkZYFhPw7fna8+vx4wcgyfFbyKiFh0998GVt9L/GTfwUc4GV07b9I/k3kokE/99Xwmmn5F1F4LIzDMQj04sm/mM68z6HDOPIvNDv2mXUYLf9G4kMSCv/9b5B/MUXB7t2758IIkwKYFemETMmdQVOdgj1k+RcAx3cpBci/yPflvOFPmy2UJ/8qEQoEquivLxZBYrsAtnzttsVy8AtDWyaWf+Uk/x5punNn+xGJ5N8Tu2TKv5QcUdnegDdvWw3+72Xwf5GFKi3/5ul0AvJvoFe5CiYqvZJ2oFUTdnbvm6XYt08xa5/QekZ4YCxPDEB1dnsgHe5TmfzLdH8nkn+zZcJL/g0ZHvf5Rpy1ISEl43G0kBO4/Cv/fCfQz6HzDOKDM9QEvS7zW/oDlX/p4F9+8m8UKf7Syb8IJP1mgSKRpVHozqemLsf8swpWKixf/+WpvwDvc4iAHHm5N3Ywc+a8XTjzMs3YROepQ42VuwsKdlc2Dk2bSP6dPVa8KK24OG1R8Rht/z6BikCTWkI4FIe5gbBiEfm31W7E7d/8fqf09iYQ+3vMhZ6OWOmz2y1kRE1DWj1T/p2TCxeNs6DXZbq0/IspG/HgX58SA7u6OjOzGtxqTOnzoOZGJcb7fCuNCimkjwHhRw55DnmOJLCSf9khv3eKjs+E+52td/jy769kgpZN4dPaJdAoKP/q4a7YIb2I/At4XTiWpeHCiMi/AJJ/u9O6G5D5CyMr+XdLy5YtCxYc1siQfwFi103xOaryMUaJlm2QSaDCdIlMhK8hKy1Dpf9R+bc3as2aqF5c/g2ZMY8K/mXIv3FoBF7Z0z0X5F8o9rxCt0998u97bfi1uSq7Y8l7DPX3CK7+dt8fGNRRW9tbP2frv8Vvpaalpb5VDOovk7ceXP4NGxwMk07+Zcu/T8lJ/i3s+cxn+vo+85meQsnk37+Ndt8FXXJxhc5YjqzJu8MZ5DvPsOTftmy1Xp9RFkvLv8xWcfnX5nbb+PKv5N4M5N9/es7dY8q/SAnp8sFXw5V/6VMQvETLvisTRpLuelHWcORfOvj3hF+9I6J/peVfTOsbGXfi8m+EgPxrcqNyyGQzDa1FGLV8mEnFUWD/flkCUv6FyxT3zJlu+KUiFfubkZIb73d/M/PsRZ/E+7734czqRl0CddNMMKm6sk+AB5J/+/OBTueDyr9/k4nsewWTl3+R/nuEr/+Gy4TVN5KVtbXDCFvBkeQF7jA+UltMQls4Ma2tXcpI/n0LRjR5WgqG/Gtt/uEPm60Tyr9I/MURTv6NwN3gZ0XOFdLTRY699La1g2n/pi6qTwsLS9oczek/uAa+g+6aFq5oc9YFKv+e6zr34PIvuL91BbqCusKNFlz+vddns7Xj1q8JngsEVEDjn/70usT31rJz/YIWi6Vv403vcRNX/gX+9RMrCjslkOzvqNYopODKv787ffoYHO5+I0P+vVuTRDkxfPsXLWs2m/NYA0KgkZf8Ox7c5N/A5d+rpu5uU7epxD9PT4Oe/FtU424QkH8/X9jZCXtF+G1fZ/8ZKAr7+zuLOPLvbxfDeP06PuWpv8Ly7zCZ+7t3OZ73izu/j0MFWI6EA1r+BfLtCikmJf+mZE3PkpKDAPI632rOLTicAdtFkwq/zifNQUtVlc10qcoCVYBhIcSqlUp17FPiTFL+xRKzAIcDlRoMC778axzpGh7uGjFOKvkXeFZc/j11SsTcwGRCyr+/hUcCbkDT22/PfmK5CIyfTNVH0u5vQ0MMpwagZTfJhPmZJTqWU+bvE7xxEvLvKzx2v3D16u7d3FbJY+xTz9w77Nn++qkDHfi81LIg/6YZNjdc6R6G+amXf+MN0B2OaXLjgyn/YhxA/dVqkf7LgZB/m5pCWSQvbYGrQRDBheRfy9C0ykpQLDYT+q+0/Huu1wv6r7c3/zmCMzKTf1c6NCDzO6aLyL+ANmpuLkwmkn8pnl5pMKM/cf8cPguZ/VQRcbmKRqq7zJkSEce2fyVsOFr+dbVCyUn+zUFrgjI754/y5V869vciK/bX1XrnweXfJDSIyr+II+SkRIRAl4WgGJB/EXu6jJj0+quTiaj86xs3Tq38K7oHoeTfVudOlvwL6AaQ4guW5WbXNR1mdMXEjKow5QBk6kEjMKBTkPIvL+Y3LQ0K4eRfjv4b1ORfAH4ZEC5X/m3KKFvSDIm/HR1L0CsnuzmnLKPpweVfSEZWohBKEqUSNXB6uivruhtMVPjvpzuN2rzcycq/O98hptTVyqLUakxhvzVX8llpTVaNAZ0CoZUB3QJBc8SF3ZGbFZ5vfdhRDlVh+de159KekREoXMGWf6NWnIchTlT+3XGB3KmYbORlq9tmqislL+WoL0L835bsG4Rrub2D9gWCyb+E+nsBIPTfYMu/0cWbi+sjROVf/YufwKcqBQPVMrb8C7lNnAEfeQNaVlT8BZR2q/fELaDLZwy027jMCjdF3//aF9BtUbgHqkZzXwDUaioT6Tad/IsYH4diUvKvW0z+XcXm2Wpd5rOrVmWu4sKTf2/nALE28eRfGpT8C89ybG+HQjr514IU3ixqnG55OPLvczJh75ywFEd1RIgM+Rf0X7hewxQwGnfvNhI1ez6ovw9B/j3A3IbD8W34MCn/eobRD+NU47T8S9+R8HSlJyp0ZkN1dQFUEkG7JAzg1dso+VcmgT7K6+M0Pz0eWQVdLDgt0L0J4b80/FspdTWS8q8Qg06jEfxfR3r62NhDkH8hyL6gmtZ82Ym/FDz5t03d2m/0efP7hnvq6uq67P399jZx+VeDpvv8hYYv/37nWFVVw5WqSHB8gePU9DgUiN/9/ne0/Auirwt68lp/xOBfrS76txepaa67PxLSjtJn4KQLaUdE5BZ6UUWPazXN/dTHp0L+FT+ilWe0hfppyyin5d8NGcv0m9YFOfkXSF2Utgjk3/9Y8m+8TEj5Nz5EkwsFPB465O3YJyWEXqb5+9iTXi8UE8i/bdlWdXP5hPIvuL9MDrtcm12FPX2forJ/kfz7S578C3ltWsVoPUkx/3vb4ie2I0MlfZY1Vyb4eoZfFvwwdGtEBL7XNaP1rK0jPLmt/LMfVmy8+ZeNsWtjO9pCeemB1pMc73fyyb9JbFJfjXjC8v6qiFdTOW/wk38BNYYOcJAZGcdC4Hbh0AtwL64g3eHg2r+8yyr3TFEYyb+UA9xgA/vXMgSxVJEIsh1GtGx5+U3GQFX4Tfj6KxN/8u9cVESd1SkATW6iBhOXf/eB87t3b/HK+WNQAYQE4EA/hyQGkd6Dnh5Pj7cHCs9BbyTzPY78e8Qb+ySDWO8RjvybQVOegGjLEAQ/M8XPE7asxfeTC4i5ryBe7Ow8U5tb9NyZF/FZyauEhJeeOYrYxJZ/pfnvSv6N5xEB8Ftp+Zep/ybBSKm/fPkX0JoTMQVX/oVubbMWJpzkXxguHT8dRPk3QiZ8+Tfl53Pmzn366blz5/w8RVT+1Rbg/c1oRORqFQ/wdwhU/iVPGi0toX4sN+l6MjXjl3+f/6Us+VeFgy4nEfrrYkhuF+Gem4ctliM3Ly5YKiH/KpUyk3//3vTN5577ZtPfw4WTf+N27ECPO5Yl/9J2xEUTtBL+77VB4+XO5yaQf3O1Zp3hUR6BXOVyZVqF9RNWKBlV6c5uhwHHwW0ne15Yub/r4NRuw+c+t46TFRm4/MtP/r0eFPmXdn8nlH9VfKxWgUZO8i+MJSPz4laofHFxXQVx1BuoPVD5V/75TqDbvNEpj8km/yL/VyD5FwYC5s1GjIr61WqiozVaMggY2lk9cXz9l1Z/BeTfiPgJ9V/e/leTuctPpoa3/23kYF8z1+GYu8bObUfL0oIvIrV40djYIvQqTqXbEbhEwmNOSckcfivxb4vAR3Ka6iYiBtyprHZK/m1VOfN/2dqKRwB/oAxI/j1N3Cap9BgVKk8pkZFSnBrBSv7NyzPnznHkmQ1zYGYlb6Tl30PI/T2kVCK7GoHcaqWy0QLNhyYl/0r0Dv99xRVgxd+l5N9WPOiIK/8KPqmjvKm5GdJyuQjuz5RwN66fLxAIyr9WUMaHrKLy79Kb7XVAe0v4JOTfV2/BUyTSbq25tWYNLv+eIOVfinczJRH54UNTk0AjrvfJJJAfxwa6LN/9bQT3d6iy9D8l/7q9Ja+88MIrvaaZKPmX0H+Fk39B/t1zNcpkirq6B+RfBnFTLv8ewOXfZlr+ffIxQv0tHh1IxIjrZiIvLK345XrUoUJowI/WR8KDw+ofJZRf1NVS/3Ix5Ic9uPy7WqdbLSr/Xo2qL66/epWf/Cst/x4t7CMqfdLy70vje04t3q7PgC5lyEzavviuafQl1M5O/i3vaFZZM2DV76DlX6JVTbTy5d9v4+V68BxM68kGGsm9Gci/Xz+6886f2PJvog8dnESTf+lnDLwpE1pj6f0Ui0JGvVdY/r1xAYxfElSfUP41jo70wvMcxZJ/f+W24ZMhyP1FnHXwof++wLxez91OcajkX4u3ISamwWvxx/6mV9Oxv7maM8+Rfd9ZOFfh98BVl+oq25H8a1uexedB5F8nOG6Fhfn2B5V/VTyc0O3Ob5V/r2Dy8i+w4hGe/ZssE3/fyPsJa7fu3evvG3GF8ZHYYsIP57aR2jy9xSzk8bhghbEHVTZv396sVEwg/1KK70Io+Mm/EczkX1745cBorQaeWjzBXecTz9IX5vX1SXjfRxo3+ffaakhbwd3YkxvWBST/brQ3EpX1hzaem7T8W1jYu8KgM1ztLfw0Lv/mN8xsOHfPBD/3MW00gZ/R9ycw3Y+C/Cuxp/twvaWv3eM1fRhq84by5F/gXyeVCkwY9nE6Pl0nX/5959jpd07XP5ra/ejE8i9yf/32r5D8q+ChUqtV/Napl38TApJ/ATB/Td17SsRz4VUymTj5905PTU0rX/79VNHly5dht9gPnEEeMCo/z5Z/ry/Lhl+Fb1h8PXvZdY76KyL/eq7hwb/3x6IBlPkbAQ4wqi0njQNa/kUU9iuDK//uT0zcPz0rN2v6/v3SzypuVqG93XvEdpGA5goOh+NPzKwYHR2pGR2tgCpA/h2egtdrZXp92WtQFxmeCXRPriTRwNXcbwyO38DErBQALfuGTISeGGk3je7ZM2qyQzXA5N/5MEom/774ooi5USATUv49WOGq6FmC7N/fvhv3m7eEYZ6F+O1fd0x7e4ybXQP4MU4Iu92u5uPX2wYHBrTavPNiyb+oNdB+n90c4IzN4/OdreW2S+2rk5+6vqys2fPDv/3wMXydlFx26fAiw95FV9KGl0ok/y4KjvwLxDswuPKJnzGR/KuSiVDfP2iFWi0cwTHB5F8KOvbXHYlCoMH/tYXy5F/7oa5K9LvqzaT+K5386/WiEZd/i4rO2Itkyb/7NbqUdIdZq9kvKv/qcs875Mi/C2GAMcusxTSG3FzDfphjjrwfqUfEZWK+UvKK3K7L5Nm/ZB8nWnfWMtadw9v93N3Ol3/LmvWQENJcFqD8C79nt9VVMjsSG+CZUN8IVP6N4ZAUMxMkf5hw8Au9VAHj+FlhAl1WgTl9EPwLw55RI5z7iRHguRxf/kUPUh8xjUyt/Cu1B0Hy7/pG47mdHPkXQn5dSP6FLuCwQWwAPv1tg1iiyz0zBpd/0S+X+cm/0WiMTkqKRnVB+feiyVYHAmd7WAOh/woy6eRfvT5ctvzbDI9kyqGjflG9TN/sn53snUanz+dzYk77Vl+GLyPDt9UOM6iJcwVysT3Nhof/wvAZCP/VGM7zkZZ/fwfQNbSsNnd5fVhYffRyh8p744Q4H0khf/3UHB/fHBqKVoe82mTc/fU0ld21bKw4dFNE/k0aGR8B9uwZH4kJrvy7YkXcihUgAIvKv8+eoH5S0BBD0kCljJ+gv2Cxf1v4gowBiLG+dr8rNFw4+ReihVH3ygWYBl/+hRPk1LTN0WLy7ym9Vb/spe8tY6sCypMv+Qm0Q+JXj7y6Iyo3PQXjiL8AZrcrfSj7d9xpxJfNkwmeBLo/832UgtQ8e3YzHoGkzqtG06YmKGho+Td7mSz518bATci/M20CCMm/eenPggGsyBOVf2ly1OrbW2yykn+762ybbZWVUNR1SyX/9k5n0RtU+XffLAEC1UGYtwlDJGAf1v/whyInvhaOjyvR1Fn0B3B/H4b8CzdlDyeEvokfrEKT1yY3GfNyI3D5V9na49n+le1OlvxLc2ONZdinNKfDPxTLLfDf49RBXn2gWYbpMkHL0rG/xyLB/YXzUpzQUBRucAzeFZV/4dw0QPn3mtFpHBwwOMwOh0Fa/t0fHPk3Pd1R4Bd+iQoNahWSf5vt/XbjyEhXj7dvZ9+tYZ291dgsLv8mgvNLsy+RJ/8Cpy/NdF8inN93iABgaDsNBQlT/v0XV/6960pLpX+F4WqFTOCA5V8mtPt7jXZ/p0b+pY9oW1lHtNjYhFA/CbGxDPl304acKUn+fTm1vh6mwMsv/wfk3xCZkGlxuYmQUknktjw775GlwrAFjFhvLJJ/YSIt/8Y2K5Vlosm/CZT8CxzEBeBN6g1QDtcU5oPxe4ySf3tq+gpRnb2HxhQDEA1Uj+hGw6Cw/BtLpP+igCGp7/hpmeA3hA0FTe/B3RtIB8lI+GEo3k0Gz9fpUCmcH+QcOdeM2ZXZsaHhHfwtR6XG9d8gJP9Wsol6IWLG4fVRES9Ecd7AP4cW5gAfhlqpUmEpgpIj1/1dNW9ooxHDH5PMgvP4JjdcAroXiYCWxf1emksN8OSbdhtM0Buc5N9SmYgcfRwOkaMPGfyLXnEF6N9TYHBkputE5d+xYiQAj6FiFswKCsCBfg5I9CReUHoObkCxv0s8Hu+Sgx7qjUgB+fecrfxJBuW2cxz5N0EmxH4S1N+WlhbYT25tgSPgdqu54EVc/r3cZS/IVXcZieRfiasE4KTKOz4y7DxJdySxQn5PnoSCrj8s+fc5mQjuJyNweM20/MvQf5OKo6Prk2j1ly//ItjyLw0/+TfSH/77rW+JyL8YG1r+5YCWLebT3S3QKCT/Pv3zp0+cgEJc/sXM9M1I5P/GC54J5MkkUPm3lE+l2P7hZzj3PqAZhTs7H/BAy55CwK9KrcvwykkxOOcaW1nbRTKIv3U7z2UMlYrIvwrMaFfau5RGo1JG8u/hZae2bz/1k8Miyb+7blC/6O12icL5fOE/grSBMIpt1yAA+AwEAH9cWP4Fr8ahA/n38fPc8N9Ar3I5lhoqTp6kqtLJvzpM81ENjJhOJPmXmfubobB7PHZFBtWCXkFJ/r1Xdvdu2b0gyL909O9E8i9X7QMOHEClsGwfAgMJ8i9LPhitjfLVCiT/DvIxmwUaAz3fSZeJ8KM4E83mRP7xOGD5lw7+5cm/BFH4yD2fTMSVX3gsczquASdCm0Tq7sX2mTE4M5GgKiT/RjjM8Yz0X40c+Vdbu4tBrZa7bDqHs7vmnj07d9dZbjsv+XfW2KKXU8eA1JcXjRGnMxLybzy8GhvxCht8PYvDiSCn9ZeI+4zubnZ7BC7/5hsV/b/002qXL/9CRApxm2ToUJfK3jgEURC2NPRQGqb8m6XNBet3zuw8jVTyL6A0dlksQ0Yl2NXzSMCtxoxDFksX7IkDlX+lz41i4fHFV0tKYhnyb2tNEUv9vVNUA/cbIfOltWgC+belLMOqAtevrEWG/Ks04g/jdMqSf7umAV1i8i+wFhFK1BP4o6T8eyWtAXqIFiHABKaSf8tJ3j88sfyr5OHzeHz81kDlX4VMAl12GhePBwnAXZXy5N8XXgi2/Gsb8lpsJou3vcGf/BsCDjCd/BvHlH+7vV6Pt54p/8ZNefIv7M47slUKJdxjYqi/V8D8vT86qCUumbOb8CNLFU5kJOxwUYJ5/aNpyIlMe7QepZnDrhhmcAKVf48Bp9HoZxTDRqn6af+bxLd2FWJ/QYFzp1Ly71Py5N9CeD3X2fkcqgrLv5DsC1zf6tv+/PPLMAWgOvX889tHzgrKv01qa0aGXl3GkX/VaqKVL/+Scb/tNlsf4f5Cgx/JvRmSfyu8915nyb8KnVan4Mq/IRGMU5Agyb/5nfn0zLcY8u8JmfD2DiD/6oyjXhTpIiz/Ar8y2XqH1vqZ+3M+5N931arU6BmrZsyrPuQRh5Z/TTabiZB/k8uz7QZG7G+6vRPcX0r+nZWVte/qJbSGt1ceR5OG5dDIHgj5d0wGQvLvZTB/CwtBNXtA+VfBRatzOnVaXnOgZ4fS/fR8+TfT4DBk4uG/73L03z0y8feNwPOx0B0VmLTchTsqm8P4CG8x6fgWU344NpSEln/lwJF/9VarfkL5dyEe7LtQNPkXRlQIXVNdu38/ynH//jWd1LEMQgEvhJD6b1pSUhhBUj1L/h0cXD0zLAw0MaheUy773DpBhOXfLudGMgHY7pu8/FvUlV6r0Z0tSO+qwOVfkCJNR/vcyIw81zBzZsO9eza37dzrr0vt6ZaeO17jha11586bX+DIv/8ipz/Ry0j+BSIKtDLl339895jpyu4rqb95pbvh0Ynk385LzD7UTgH5F+Ni7OryNRp5zjJX/k05OwXJvwkTy7/vUrxdXTIyAmNt5iNiufAHZCIt/yLugOEL7i8v+bcInjNTlF/UD+JvUX9RZ1Hn5c4irvxrVW5aDGxSWq+z1F8x+bd8lHB/z0ejxN94KFHhN3+58i9Q5Ayq/JuVp3NMz3Lsn24wSMu/KdWg/tL3zxKarWh/hrg53HwyO/tkG22EPEXwzGuNja8985Q4ge7JD5CcnTXbAGGhDsPs2WfFvuMPLssaPhC6g6kYbQdGoSIl/36ckn9Xr+Yk/84Xl3/1ehFzYwefqCiBRlL+9dREVsEdAoJHJI4XMyjqY8i034vQPdEQQ9ck0mZ12kStVidy7YMlDtwHRzol0Zz7OBJ9BUYg0CP7biZzT1z41c3KLoh+TEwv2c1CfF+dbBk+8mZb2d3DsbFv3hy2wEoqviySX4dnzoSnmiwahuqUJ/8C6YkarQNVlrvFQMt6ZCL0vQ1iCng4OzaoEJV/+bG/8IKhhSP/Vh7CFIeIgDU3of9Kyr/QrXEVBkL+PQP9xnLk36yUREPWylxDXqImiy//JpKkkFOHjOTflRoMc2Q9MeeJJ6AAGOrvQjr5l7J/47XGSlKK61JUc+1f6rzvsdBkvD8/PCE0/IA1r2A7h9a7TPn3dk42kHM7EPn3D2+cPu42MbsLIfa3Bo5EAcu/qTzG9t7fy28lhV5iJAtfijCBLqvAjGTy7yh0oakPiBEE+dfpA5nS6FRgwvKv6zhu/bqE5F+LTCSvgWM/v3Nnv+8f7ORfDFMoMZT9izxL16HmEZPXa2psPuSCWXB/XQP+SAGm9ouzMLWqKnUh2UhMaPn3Ylh7e1j7NEL/vQiy1g4h/HsmUv5duZIh/xocgIG1Z0qmKC/3Z8hMKP/mlJHmb5vnsL+pw//25Hr8MaWvC1RfpbPpNkmTU+nzQaOSfQVChP9uRNm/X/rUZ57rNyaa+UjLvzuB7+I/saMifhQpIP/Cc+rOg2HRKPWM57VvPkY4Q8nJCaDFwurwHm4S/ap7uCkDpOWm4atvhosk/5acv4/utu7ZE9zk3/O5cXHnz8fF5Z4XkX+BG6XA0NA5Uw2J6dzQEGq7QX/Bov+28LXN2rS9AwO6xrV8+RdA8i9BKZJ/dwdV/o1ILS5ODYl2F0eLyL8Q+atUn9RblZLyr4JL4sAo5AjwmieQfxNHUTg12L8+2OsE+uCGtV/42hfYfO2PjJmyMq78e+qULPk3hgkh/8YI8YDy75PZ2U8uibXJSf5tqKwj5N+6ygap5N8VRPAvKhArgir/jo0FU/6F2LbceJnyL/DFD+AwQK5ASsUHoP4+HPk3LmTFjl3z5u2KANB0x65M3OKLq/XtNtUNeW4V0PJvex3zpANtxaU3eg/5ChzL0Z+NR7DTh98kWUMksU0oZYBhlBiKDN83LqHOiy0JW5KT4eYS2L8teMMbHw+W/Bu2LQwyzZzG0bFfQ2qlmSn/ZvnJ1RKXogbR9G69TGj5V5p4rvwbC1G/Z0f23B/N957LH77VO9wF0b+xovJv3kdZ5AnJv5Du+w6UtPxLc/o0R/69G1bT6XKB4UvwvRp3fTSl/ta7a74HbQ8o//Jzf8XkX80Dyb/iR7RmJaMrNlbZTMq/FJOTf6OjpZJ/yRdQX/9fL/9GxDkUOthrBCT/2soJB3EC+TcUzpI6QidM/j2Yc5AQgHP0qDJc09NX2LONkH9/2QczAE/+HR0trmfSzRMlcPWXorwsQxUs+bepo8kK/521jAgUzuhA6UVKmDar0CV5cxn+BSkZp7sYOC0YarPqXwxK8i9f/o2o/fDWKkH5N4OLU+3zGbVmLnz5d82qGbc++3knuqGjk5B/ZzZcAbrdMyXlXzreNzLMZTtuO9fjOm5zhUXSocAAvueXifBFJTaYKPIdxwGg/86l5V+HIz5dIS7/7sXl35VQ2Sck/2a+fbgs0M+BjHlFBS7/LvHWbNhQ412yAcm/9Jtc+bf8yGOMObhBXv4A8u+yZV/5JpH0SyT8nvrKj6FElerq6vj46urMU/is+D4VSF72ElyPj/9rWbJg8u9JWNH96K0nmV4wWtbqR0/KvyetQgS673PJZBLy71Dh8Xw6yKs7JDU1pLvw6Gf48m8ihxRC/k3htpPrQ0wSbf+i8N+6OhH518Ahdz6Sf+fncttFji0mk0CjgPw7F64yp02be2LaXFH5V1fAzP0FqrUC21CGTAKVf6dxAPf3IuzqBPcPPyN4kVprdIM4giL24sXPwE0dq1J9HdUOqJQi4EqD2HZRbhmq6Dtddri0NFxE/lV2+bQDo3Z7v0o0+Ze2fA8vO9AEuY+H3wwXSP4F4uBXuDtQ5dxPReGv6zsuwPPzw9j+72Xwf/ny73lHbu5yh05rNuSlaPLY+m+gV7kKdgw+Lf9alRNKV/v24WOW0PfGehI8oFcY88E51DMeER+c5N/rh4B7wUv+hVeA8i+g37RJz29lJf9SO7Iop92nsH+QGQJ1Th4f2tSZA2bNBqzsRlgo0PMdjA147vhUBQG+ojef6d252eEw52GYLPn3MenkX9IA5sm/UfF+eE+SUGiywJeoroYiS4M3PGz5F0uft4vBPNYVlpA0+OpulPy7+1VuO1/+LU4bi4Q+EijSiieQf+eUDD87P6KrK2L+s8Mlc3jyr05jyMw0aHTkFMPgmUEQIY5h7HYdLv+2KiD4l0z+BfL7nTLl39M11NMRSystPstQ5cV2FPsbwpF/dQrH7NnTUxSk/DufKuaz5V/Aafd0KTFd9a55JLuqdZiyy2OHv1HA8q/EuREQ68MRl3+L3EV3WmvcrtaiO+5Wafm3pUKtwFFXyJB/nehu3J/lyb9Wy7S6umkWq7j8m4CDKoEl/97q7r6VtsgPNFHyr57CrpFEcN+navR4GpW85v8T+be3N+jJvxct5e2WJd72GJB/cfWXn/wbR8q/3Xv2eIdNXnCA6dapT/4FlhzI1mc0tb3HVn+J0F+VHsxf0IKnUv59g+aLOG/YlUr7G0SVASn/utMg+bd4Zr1Y8m+8oPy7sQfc3zNW6xmwf3s2SiT/bjpkBPl38SYdbMrXYf6U7/AmQg2m5V9S/22GOPA2pvwLrWXNqLVcQP7tW084wABR6WO8Kbk3K4ffKnj/8emvf50l/yIkkn9DoAiG/Ft0uUgk+TdEJkLJv1rfKAT/9g7rxORfYMFaP6EqBR/y77vj1bSxeTt2zFgVdaNSFOoKfYvFC1i2JMCHXKY3V8/wk6u5XET3fWcBs7II+ddUeomUf4FUegQ7OEvgajPFnJ5u5l5qCsm/9vx8JP92OoMs/2q12OXLmJYnPwZyryDQfvq/Z1ZnpmuxRHiWIa7/HgH9d3Lyr3vRtgY3ELZ5cxiaNrhXbwsTQGqLAR5c/gWUaJxI/qXEXygFkn9xIgSTf7GB+/cdEZn39+4dwMSPZZWHDoH9uwO3f1PD0KcCJEH0r6j8O4A55u0SRFD+Pee0k8G/rU6lZ9Lyr8+p9TlVRrvOufV1AGX+9h1Fdy/d5/qgNN2712My3QP5V+J78x4/97Of9dz7a8WHHw4ls+Xfn/yLsoB/Yk0UYpLyL3Ds0pXUfWPds1Kv2Lonkn9ryM5S4ehfwc/M3mo3dvomTv6tDar8mwAvWcm/WyiG00tG0s+evVpw9sgWAfB7NjLB5V9p/nQHjCuO/Avkd565fKazCMzfy8gALuo801/0Kbb8u/jUqcUAMT1Iq7+i8u8wcn9X712OS79ABMP8nZz828PANhOw9QiCy7/Afg2od/ulk38Ft4twan/25hVvdnZzNuM510/57V9wfyUIdE/+FMk4kn/NGiT/ji8W+XOVMhH44blR4WsHfAqfUzL59+Ok/HvsGC3/PgujRPLvKav1lJj8u4s1wHj1KpTs4UHlXyDSNm2aLZJRE5d/scF/U3cucE1ddxxfP58AynRMbGmTrSirug503Uu2WVe6YB0T1rJ1Tdhct7WjmXxI66YVMhtDxFLeLrJZw1Jec/JoMxdYwoqoKJEhGwwjH5ECyqM81AbChIpa5vY/9+bmvm9uILrte2/OOffc+/GDgdzcx/f+TorRmMJ9PRS+yy9MFhYePTqrkCZqtgh+Z0lJ1Goo+JZZ8m97b8mxq2+aTdioR3j4b6FbAubfV09Pg2j38p37/33ng4bJyWlIYOTfFrXql9bk5dVE1EPzHsi/qcmaSrizBK2wQT4w80gkHL+3sTHi5V3+JWJ/YYYiNHdTHFX+LTGDcmcfFy3/Xny6sPDp0R6Qf4EceImRf/fCI9o7kxWJiTHSvWz5N4BBlID8S2i+xfDcHli/iBUwkbCTf5H9G5IoHw/EsUmyothnCKWekN9bWNX2+maW+7u0mpR/kf1bCoD7K17+RbG/1tYKqtRihce/vwn4Kv9+mYkmY2BWoTnJdb/6GPJ4oSDqozz4ui1KcMXs30mX1iRL+ywfC5Z/7XaXA5J/HS6jiVv+PZEJdVXmCS75N4hJNDwbC9kVTASP6CNfeAGG5X6BJv/KOjrkpu91jLmqIPp3sWv69PT05z43DZVrMQr+nRtTp3WY2Mm/kPkPFBw+XOBZCqcn/xpq+/r6FvdhfyC6WGsf/93vG4gUuDmv2nsEfb265V9oJarViXqPDIy23c9BAJ/8y8I86SxvYfX66kRKMMD9dRgdDpB/P3/qFPokfb5RLcO67DLmGUjfEBb++xU0Qfivlo2g/Fu7Y0fYDkyHbe0B3N9q1hqrdSM8OiEs/y4JokMsD/Q0lKZnlqdbnD0D3Mm/RZOFc3+9iOTfySJ/yr87QPq9mJwMhX4Hr/y7/xgaceE2jfXQdWw/+Qvm+79BXa6OkajGJMcEkn9x/C//ohNMiJ6sg4JH/v1hmpw4JRYv/6pHIIN5EqLyGXiGeXpz4o0wdEBOE4BNrjmXWiYZaHfO51Lw54W5cYMq/4oEbVtHQxkcHF7HCZf8W6lO3QDPSD8rRv79wpXSlD1lBhHJv/tA+q3q66sCCXifUPLvukUA6f+u86v8e/CgP+VfQBpTnCpW/v2LkUgPQhj/cq/kX+JqK5QecyUEk39n4drmTMPA006P/Hv4cOwlg8cAbp9o7w2ET3Lv1olCm13ujpUidtKhIvH1M0HG/gKuLuDya+VlEFkc1HAYdZ1AbjCn/Ftb/Zx4+ReGM0aT1mTSZsDzo3KThiL/ZnhQyLBTUZkigwu0rUUkaFsInMyqpHu+qCJmgJ38G92mHTbai4oKJq/PTjY7J2YG7Neb89ui+eRftQZqDxo1S/5lcCb0T9TF995jyL/Nzf8G4/d1aAH/bq4in7lQJlXdgr6Fy7+ZDPdXWP5VzFf+5f9Ga2tcQulqbOOWf6U88Mi/SiVv8i+JUgnF/778G5CclVyJPTIQcDbyCw/wSxVXCP5whdJkQ3k8pK2spWWJV/l3j2QPUn8Jru7btSvzxL5uEH+B32Q/zCH/otxfLPMXL+eYz/bQLiy+iJUtTfn+kX8j0WPxjSnp0VCXNaU0QvV8S3pK2/NBz+9ucjhK4/DVZdRhpYsVUkJ66viqiOTfdV7kX8Zz7JUzz27Y+ujMmplKWKDCcxPdMstzE50e/BscvPWF1Y/a4atQKhGQf61JuPRqFZJ/I7AJm2MvFZ0YbM7JaR48UXSJXAHTguVf9ZgqZkzFfTELhf7ihF3ANlDo4TaZkPz7zLKDU5j8u4xL/P0JHJH5+j4g2dM9xYY2vFPeUm7u7zdD9U5DqGdNBEv+/elPoaAtL0D+/Sofm7OyLqRWFuuzyORf9j6VoM1hs9ksjtIg7/JvfH4HM/n3nIcfPoXk36tP3f/Dcxz4su/zdZ+6jkUIwO4l5N/ti2P7HyHYWrBrV8FWaLDl3yNMHsS+vlndaFu37h3hdr7PQPjvzAyP/PuMh0XPrFkDMy7/YkCXB573obaW532QUpEkHgicQPLvROCBRAnP6XtiKjX4F1in4LiBeEMk85R/S0qIU4W+2lYYoLyvgl/+/ScRoSTVxnR1GbVSPvl3PS7/QuMn+TIeBD8X9bnjjYP9pdMVJUHc8q/M1KxVjYwYjc0mMfLvufRGc+Pr3Mm/wH4Y47gdNbZ9iheuY4L2kj7abbl9YO+ZLnc+yZJ/VYkxyZD8q0mUxmRIFTT719ezXFrsb/xP8qHEmvk/iYeSBL+xI3FPGBL9EcURmPVomboObXuKzifi7fUuV709/hOMFQtO/i23NDRYyhcs/xKpvzD5KP8iQ/flPXtehiqf/fOS54F4GZUsmy3MujAZFkJCKDmsQ4KmFABkXgY+H+/QkF82yuQy1DBeviz3dlyi1qDUfg3nd/fbHpriMfk3rZE3ZYII/uVJ/g3DJ5b8Czs72AKuksAlkmRosh58oKu/NRHApUuorGntY8u/QMg6Uv3NUIv5O1Nn7aeRpWZse4DOyt6JlXr9yonelYwVLPlXCcJcwdRLL01BlaQUln8DZh0hDxXa7YUPhThmA1jyb2Ma0lLSGr3VmPzbJTEi5zcTCpzM6zEcMOXf7UTsL0aJuQTCyolIAFL+BRIlmod2PqSQFD8EC888iApqg3bOYJRD6ITb/Q1GswK0dKNUMg/5V/jYKPJW3i2YH6DIvzn9N+nJvzdv5gA3b0I/l/x7mph3p8jc+6CU3ZQV0OK6qd2FBf/mXJaJkH/jS/oWL+4rieeSf+NEwi3/IvuXW/5VePj/kH9jRMJ53lJhGy8JHK8oESX/JoyPJ/hZ/o2orW1o6G5oxeTfYNz8BQGYTP6l+L+jPUWwqa6oZwfZjbjr8u+VJ9reLm25Qqq/BQdd2FD0+Wnpb7ddeWCT++rDRlB+X6pD11RO/hKxvC4UXOC65djCSXS1pe4l0IA3LkD+zWlGoMcTTMNYM4dD/i0A+beOLf8KJ/9mb3vkKznxMll8zlce2ZYtIP/+pNuR8o1fPfUTdGzzAVjAKeZ6RvJvKUZbaWljYyPWRA/m5GPNNqIXwTib1w2upjGooywI7s3Kyru7x3/wcHm5d/kXgNKPyb+Zxi6q+/tt/8i/Rq3D5ZxxztqMMrb8O4HRPkGhvVLPBv953+idsPZMtO9HGvCE4JWKaMTu6dzcaeT+RjbFF6d6Yn/XFScOQ+wvRf5Fqu8oFvlbW6FDlQF6lNDvnmEBCjx/izqpiqcgBKxYJaX2SjiTfzszs8H/9b/8K42/fNkoVS30UQrx1+lR8q+mOEYK9lAyyL/A0/dR7V9P5FU53GsQwJfrB3yfGD/Kv+j8hmjFpPIn/4Ldi+X/ciX/roVunuTfsTl90VzUqjn9wbkxKe9d53ETZs20I/s3HKiLBQMYns6gJ/9CijDcbxnDjpmT10UFcMMp/w7LHFAixh3N80/+NRm1oP6a5EZtGri/f1vfPdh6vLsGk391UA6u/9vt7m5YI/R7A4fzF7f7+39RPthwgiH/5r8CBc79liMc0PdI62A8MZHy7w/OXFLu3Guz7T20XNmz3Iv8WxVKRZT8a++8fn3Y6PX8NuZCoV+Tf32Vf09bVFmjiTEXRpMT7778CyD1l538m93ZCdG/OaAAGzuBnM7hrk6m/Pvzn38DwGtC/RWQf83XgLmpcDchpPnLI/+iLHZ+fB3IfBFCvzdDIyD+kr83vv3ZktbabvN4bjRV/l2PJqigRBPXDKt93JPDv3sFJiT/LtIfKd57RL8Ik3+vMKYvLughPpPDBsG/TidE/9rgKpyA/Esk/2Zm0pN/eeTfc6+88kqHTNYB1Tm2uQFiL4BKok4oKEiAFtFBT/59p7yqvP8JaPzhD+9HvXWSG6r8W0dYvhGtQATZEpB/1TaLy9XoUPHIv7MNZoul0ZIBwyIVb+GL/mX8u0YjFLRlvmsYcLNkpqJi/NjVYxVmIyJxEvoKZ4/iq/n31dOnJycb2r71yivfagP59zTIv8Lfxw/MGR57zDAH5+P3Qv5dV7kOvaC19St8LFD+VcE9LhifHSph+RdFHTdEkLG/MBkYyb+BFXZLbi5UrYT6Kyj/FhYONAwUQvIvhjj5d6cKrs5kqDNUUph2suTflSJB27rl3mdipDE7ParvTv1Dz6yANpqwmSkVhwRE7ZXkBuKYJcVR0EP/Hnqdj1udt/D69VvVzVT5F8TFGzdAXvRB/j1fXaWDMfg99Oms8Ej4Nxcs/8IojXqVNhfu0+qhSQOzWJosjY1QEPVRHnzdFh3FGV2Tky4XeoTiLsq/2lmX0eGyGx2TEk75tyrzMyfQjaLMKu/yb0tLdFNkWVN0Swu9X3gPsjuvdfVl+TaG/HsnP/7xDvmwaw7s3yowf3HerFpcY61yXZajDUj5N5yQfwuSgFjQsVBdgHUz5N+K2tZAa20ggKX/GnRcoG0LEVkaQH9kJ5oWYeiLj2hiYjRHivXerBDx8i/4k06W/Tu/b2GZDYv51ZoaT526euPU1VOnGk1aLAzYxpB/AYh8sPZvw+zfLz3yZA4bYfkXvqYfxM7Lh8g7KrIqKzAmMTVMCI0YFMTNu0NF03s6v/+dzpZjRaPvcsq/kIo1V5yF5N/ZSX/KvxezRsOyLiRnhY1mXeSRf4GzH/yCgw/OUn/BQbzE2dI6OtJscdDkSP71p/y7gQmMNV+wZcOGT+9S0roJ+RdxDm4tsIjffL+Q/KtyFSUlFblUfPIvjwA8NlcEUlGRS7Yg+RdugPLju/wbLBLW7R+EXqE5soYNW/5FNMobPxFp8J78u89QodvX17dPV2FA8i8JW/4l8av8+7uXkIrx0u/+i/KvzG6UAEa77F7KvzwEDFwfBjXH0TxMyr+xAARjxFaBAVwR2N7bFxbY3l4y2jfRDgd+42a4EIrvme+6/HvePXaRuQySOVtKmy53tcDhPN536Txn8m+f4TlAtPz73AgcGV+bywD5N1GrSE5UHKHIv/EUmuBUtDGeG3a+pnCyg6JYn8Gb/Msn/74ND2arxlyTF+x2l2vSOWtXQ8fbvPIv/A0sIxaX7ZVKvMm/fzp86T1aB0P+fR2TfiHgF7hVlaQMcBNeUAVasFf5dy+v/PslInwrE5e2r2GvualPc8i/RzIQ+H5XrcAWjsxL/g3ipqWUbJe2BLHk3z98tkMm8SX5NyQc5dOHw/mDF/m3QPl/IP+CohAVsg6dH1Uq5LygbYm2dsRENE0jWu5tiWt/8BQd/5ix0fTk3/Q9UKCWc9++6irn1x84nk2Dkc3eg6u/WMX5zY5Zv78m43/LwErwh/wLUTtpLXDE0GaC4a6hboRn2GCE3LgUSbxlYnRowoivjvb8vKrExIuaGBhbAEMO4b90XsFFy1QKKEpTmsU/JG4nHeearQk7hma2rnEyVnDuobXNFmeO1rv8OxMMwb+rH71QrK9U88u/S62GpCEILS+yGgTkXzrWwfLXLn+v6figld6/YPlXBQdsIy7uIz0U/Iv5v6kKvFOqgIv0/PLvooMHnzlUcHDR1K4pTvEX4ev7cJjKGbjCZ24wwwwP+J+hraLLv5GReE3t8bv8C1w2yfWa4RPx+JLQWcKSoNLNTotl0lIKTZb8C3R0cLcBxullSz1K/m15gpO7Kf/GMFGsA/dXweom5V+l4RGCN8JjY8Pf4JR/Py4S4qiM8H+hjChonQkLm6nN45J/KUO4K3GmFi/2NEk/neN9sBp0rRUVrTqD1Wvyb1ZCwoEDMzMHDiQkZPEk/0ozwPmlTcHJHPLvJuDzIl7zk39/DGAKcF+rzgoYWvsqeORf4H4iXVYGiVfD0OaUf0H6xeVf4IPNfAh9Lk7n5tbmms1tkeY3+eRfbbMM5N/rxmatN/kXOPaT9NfLb5e/T++lyL9vwHwX5d8tMeoMkDI1+r2JKgVEe1LXiTrL5U/+ldGawpqAFB4LU8DMOUzjKjr7Ey1vDo2+2Zi4n7Fiwcm/sKuuNzcsXP7F1V/fk39l+Xtefvnnb7/985df3pPPn/xL1E9fn4wKiIoiB+PGWpzyrywlPa2pKS0dREM6Ph/vUJEZL2uNl43QMnV1dhpl3uTfYgxO+VdLosoA+TcxRssJ2pYS/MuSf0l8l3/Z6u+J7dtPkPovS/7lU3/53wdV6n4aqSrGtivpHCiZWJmaunKi5ABjBevqz6GkAuXUVETE1JTSm/z7UKHDMTtrczhss7MOBz36Fzt7jYNL5y/GvYjV0VBHv9jSAgWzn1v+zdu6jgOG/Pv7E2dooyOi2N8kGJWGJf8+pJccyZBoNOpFsIAbv7QGS+K3vYHvJF69775XVxVjv+T5yr9BfCx531Jus5Vb3l/CLf8CN3NuAjkw5zzOln/B7fVQlu9R/8u8Jv+aOiH39++g/16WeZV/0yyBNYsX1wRa0jjk3/0i4ZF/h4bgxsbGpJ6hGVQhG/jVIez4N1UknClVMsf4OIQ330v5t1Ak3OctFblg/wLe5d+Bmdrx8dqZAb/Kv5BJXtCgK5jxJP+uYib/kiFLoytHi3S6otGEIUL9vTfJv8CVPU/g6u80Un/nXOCiyZD524Kbv275F5RfCvAsw0llUpLyJOzMaCtOLkD+bTaa4CvEJAGwhrGZK/kXKPBR/gWefCQHJfTmQAPglX9/1d1g+gCcX5XFJt381FMfGM0pxKr1uPwbzwI9asHuZSb/Gl5YTeEFAzP5N4iPSBiVfuYfeTuGXhSf/IvPC5d/O7WZUPo3+feyzG4fnrU1NMA9SDVb/l3B5tN82k3IaG/fUG1t6+gU3OJ7dlV7ibD8i9iNxf62pSj0wQGecVP2Xs75FHXUu0MYi3oOhx6+1BfYiuTfUb7PEOMQqk4J1NEOojjlX1lXDlxSy8zOMfpV/gVM/dXV/aYF56iLv06P5F8U/CuVgqH0LM5Ziv67BCcS/oXGyCX8+Hr9IIiJKPn3IUH4P11siORfmAD+5F8E+1h3ZE6vd1WmuvT6uRH+Y90Ss6UE1b0BGwIwkmJjF4cH1DHk32tjYyPqa3CwqkhFYo0P8q8R5F833T8m8fVBIZnDKNPa5DKHPf7Ob3+7fv30ttptg0sx+dewtMbafby7u/u2W/4N4uFzedO/GHT0334n90RuUBwp/yKhL+0VT/jvO/ftf4sFbY+EBvkQK/+eP3FGeVGdkqK+GK6sUwrLv7eqsNhfoqi6xZZ/ZQxAz4EzMK2E2X+Xk3+BaN+Sf20m+1G7NitLq716L+RfgC3/Ppw5PNwFxm9nF6YAI3JY8i8Bqf4Kyb9lLgj+nbuIYn9p5i+v/JsJ+2M/yr/PYOzUQyjgM0II7882jTccP358N2V/tl4kvu7Jvwgg13f2wZ0ZxYrE4owjXMm/C5R/LeZmnbO5qanZ2WrrbpB5S/6t7u/Pzu7vr8bl3zXYvIFT/n0lLT9fDnd4YDy7V3iTf4kqbHR01GqFIozej8u/QHn5O5j6e+Psgyu2rOCGPGpaBe4vQQ1ckaC0BORflcU82Wxu5kn+Vc/euuV4bbNNIYUtky8K/Azktz9o8xDQyVpmy7+j6LiyosRsNh+rr6iwILTawoTC2cIEUv7lEbDiJidzX7/T0XHn9dzJyThQsPi3xaN/z7z35zP10BCSfzf6Q/4l8av8K6MhlYxduwaKwzV43oa9X6eqXJviDJTYX2zyRP8S3/PmCkyxINRfYfkX1F8nvHySfzVg/OrVar0eIpCkmoXJv7jxq1cTEcKw8GV9oqb4GXr4LzOJPwDGtzUH4uRK9sJBikj5t3ppJ1ZVoYqQf9mD3ImQf+GalpV6mbCi1oDF/s5L/n2LypffWqGQOcxyuKG54i06+P5Xi2at1l0n8uDrtujTLQONU2uXy1EwBR9oW7VIOOVfo23WbjcaHbpW+Htny7/oFlFmFRjAoAB7lX9LS5eURUeXQU3vF96DPLCtdvVlibN2G/UB2Pw7aaD3wv2k6y4YLcRc78YM44VUD3/1ezKQf7mSf+siDnuIqOOQf1tbSypqa8TIv4u40ceA/Qvub4zGX/JvvbMI7F+z3+RfI5i+Rkz+hVEtkfyLdbDlX6CktsdqGPzSl8D+fRReLITl3+UAU/5VHazZVWNVG2dWPigA3x/D+z25H330nfT073z0Ue7om0s45N/DVZNFPVPwhlmLJq2H+eXft3IFYcu/+uKLFysvPn3xIozHyS//rr3vqV+xeOq+ADHyL3C6qaNj+DQ0OJN/2ydKPL+YiXaW/KsTCXY4dIAxjY4mJCTAE1HWggRK7xuk/Atwqlr5mwXkX6k3+ZdHAJaMFY24dDrwSaTzln9Plaanl576L8m/3Wwyuzngln9v7AEiDV6Tf3ft6qtFyb+1fbt2CSX/Pg2Bv9iMF0/PX/4dZTBkWAwYhpj985d/VRl6uN4iVv597LrEeCABJUYkHDBKrj/mTf4tSuJmfvJvQAitBjbMbB9otzlmZh6b2EDKvwBhAJ8paJ0YVSbA+UdvSa/nToXZoZUSz94c9jrPT/7dfiYU59LpINAYYHC13aVdXZGfu+TuPrOdJf+WHM8RgCX/Lr42ps3PN2lHFCaTQpOhmZqa+h1F/i2nUIZurpVz46uGVplVmeVs8A5N/m3UNmshr0drnAX516XVIjHP2MQr/wIKalKusPwL/OlS6InzP+CVf0l+WF1TF06ov3U11SAEU+RfI4PZYIxZZj8r+RfcXxJwfznlXwkLv8q/KfHRRDM6PsX9jRZJ4UObghdO+VeJHjVQepd/65bz4h6OziBiLrqr8i9xqyZqXbK3T68aRzr2nErtRvXcmJTzAH6JSIgjJyT9ggIMJbJ/rzqdV6EC/ZdX/kXRvwRFI1IuWWM3SSSe/lv+moIDX+VfSXyKSZKfkga1DF75kpR4CDpLkctT8tVIRjZiq1Pknp8XhiP89BY9iKae8N9vMWGdIEkAgROk1XS+O7B1/1aYB77LWMF1NCTTmo9aukXIv68GB4+vXv0Ve2owRNNIeZN/a4p6ZmaOzs4WFfFLr9V0zvTX22zDnfX9Z6rP0FYsWP4tgue1ior45F/E/pnMHEE84syhg1Nrpg4dOniQKf6S+Po+KKn87tg7T/SD9Yoe8D/2O9oquvzboHsASgoP6Bruhvy72W7S63M6v+dN/gWibZZbk5O2FOcSavLvZuwlAFqJSY4UUiG2NvUsN3dT/i3FaYyHT1pGlmavHN1iWxcjh8W9WVkZ8Y2lOG75N/eREw1feQTn+PahcKUyfGj78YXKv6EwRRACcGxEknLH2rVRM17k34273MTGEq2NwvIvmLGYQsUl/+ppVFZWrtuydeuWddBgZ10pMJIrmRQr6ODy7yk0nxKu5y3//utf//oxAP+nS+jtu4T+jzzyL/CKTIIBT1cNQwgpX/KvW/5dLzB9Q/BzMQ4Oz3S51uEUkH+12pERhzj598P65tvlzc4POZN/CXyWf9/oraD+Jey7NjJmvJzzpHvb5VQg9RfOhS5e1BdnJCZfpCX/+nqWe04k2GeTiSbjyJEMDaub64w4ubl1aKi1OZnrjLhZJFzJv7ed5rffNjtvc8m/8BFIFTFX4pLjfJN/5Ztf3pMeH5++5+XNck75NwAmVOLVUe1sVDA18xcvOBJDZelp6TdupKeky5jSoO/HOyQwrMllTPqVQQU+ohfBG57F0euTFVIuwVtDQb8lfIteww3aFhd/+ZJ/w/CZJf8ir1yxEzyJykoodiqgg/EzsNXfTwKk/ssn/27tFj7WoEoeTPk3xov8G9i7MitrZW8gr/y7gkj+Ldi4bAoNNje1bGMB8V2xglv+TXU4HJDEADM0Ulnyr0Se3taWLpd4qzH5t1liAvG3uZlQfwfC+KV4gu39Z6ijIwK1Ooj9pW5LWr76GPhFZex8kARWeWCcM8hkpa8GrwLuOw371lfhHhJ0csq/E5V6IQS+A5a8aylypjU0pDmLLO965N/marrle/NxEH+hgF6W/EvldLnc8+kv9yb/yuHxDVB/P/Xkk10mr/Jv/rgBYvxiDeP5HPJvgEi45d92OBAemtmImj1JPUkzWPLvguVfMLcrKmwy2b2Uf7eKxNfzljAGW8dfGId5q3/lX6u1dWBAZ7UuRcm/qwKwF8yk/EsyOtozWlQ02qPTUczfBSf/Zo3yQsi/wBO4+ps7VHdwDkJ/5fHI/H1g0ybauEN09XdpHaqUUNQtpeu/85Z/gWbaAyrg/nLJvwUFNXT594uE/LuOV/49noOefpFIwIToyjnOIf+uRzPidZs9Zf1Tr1mApqfWpzns55761VME9L0ZTGygl/NsPq9mkBb8W5MnVv7dZB460PqPvKH6IG/yL/mYEeVII1ckXPLvly4bsx/2a/IvAMm/9q6mzmYL3IPkkH8lIsHl31qdbrzBtSsJv8X3aolX+ReIi2xMS64kY381iV0Q+0tAuW+TdwkususqLsVC8O+2bg5YP69iSokxpfAm/xoh+DcbBtXK6ZL5Wf41oiMH44LlX/HX6ZH8+2yqZm9Gsn7dswTBZ99H+i91FDIk37dBgyuN4J7JvydrBUHbprGxo/ML+oSfS6DYXwA3gJnybwjqXIuV7NHCrs3ps+wXZpOzpg6O8Cb/kvS+sYG4OxCbBKfoIfTkX7CRJBAPqY+KCiGFG7LglX9f0MqMULHAzqlEgiX/2rVyE0godm0a5P7+bf3x1ta8waURyPs11Bh03d0wNtDfvMi/02e6ywcHz/f/+oWPYImUf8/Fg1Ul7wD5182es4Ly74CX64sM+ff8UE860DMEp1Je5V8CPvlXwkINSHxP/j3rh+TfaJ/kX23WrP3oBZO23B/y702R0JN/M0H8Bek3JxMejEC/xEwoHqXJv2z1V1j+dULu78Et4QgO81dm0l7u6qTKvz8ezxXEV/lXrz+CpiN6aAhMem/7s7LbN28voezPzorE1z05Zv4CIP9qILBYr9np7+RfqcRuNjuLmpqa0puadM5up8lb8m91JhyEZGdWe0v+Bb4Xj49mFf+9+7mTf4kXzGE9Vit4YtaeMEovKf8SPJEeE6PlxXPU9OxU6FIPETBTWkLJvw6I9jU7ZJzvmSpmtuk1h6PJkjEmRZEPhQmc0PfrndnZnVoJY5kl/45u3Yrl/gaWjCMqSizoWoNWmjg0NDkE64Tl39PvOnPffU3+1e/Jm97Ndb57WljdQ9RXVdVDJZz8+z8s/0qYjI2MwSzwUDI4jnDsPm0NxWJ/YSYEYGtcEF3+LYFXrRVXf0XIvw0+y7/FqmfgBX7uzkSptHiB8u9aTCdG/85afGGFPkOq1kAD74CCLf8CUVmeUf7H5YkhUSHi5N/m6luoqq6BCsCONtnc95BX+ff8iSoYy4oaIEDE/iKw/aRIOEYAC1PJLOOOZJUqjGMEsAsi8XVbXO6Xa6Um7/tfp0g45V+TA84pYoocky7O5N9LoP0+WV0Nzm/mJWH5d0lpS2Qk3oyE3MElYuXfTQ2T3au7zS90T+o2kefAsm999VvfMjXn5TUb56zWSRg2FZsnrdaqrm/d6YjnlH8BZdJhN0lK0gkm5V+wf2t1iyswJ0sXa+0L5ERA/tWoVZqdOzUqtb+Sf1ucRYjJ+hY/yL9SE+zoIekXS/49VVoKBST/QhKw1uEwcUZtDCVZB0H+xWf6NC/5N1GtUsdY2r+84qQAH+OTYy02S155enpLps3ScJoz+Td0suilgoKquqSiyVCB5N8vBwrCln81xZVhkP47Coqqhk/+BUKu/orF1QBx8i9w+tat01BxJ/+2T/T2lmBfGr29HPJvkkjQtr1MdD14bdDRuqny7w/jJRzI+OVfQD0yCX+6I2ph+ZctAKtAvtKBTeJaQPJvukSS7s/k3zoayuDg8DpO0LZ/Fwmn/AvsiY+/sdvgLfl3177Wvqo+mFv37RJK/h1YhLMTrwbmL/9uY5J5Bnb6v2F1z1v+lSaDByJW/v3LX3JMEtPRo+i219Gj0Mz5y2PC8u/osmWHOKZlPsu/xN1eeg1FX18e0Ne3P4Qi/+7bdyl2n9sATloRHq4MTwgL6GVklfg5+VdY/o2OA4LiXr9s5pV/Sz762+NCsOXfkXwtJP5CLKlJnvw7EH9JsMN+kfh6O0efdaGyOdM7NPm3CVxfmcyEHnxxzbnkJpnMOKxtFJJ/Yw4dOgIcOhQjQv4F3vvTH/mSf0n+3VxF3ltVJlXdoqxD22YyaAjGaOD6vwm7v/de/l0S2UIM8QCNSDjgw2/qJXimrakXeeGSfwPCwU6C90tY/hUGbXtMJHdV/iXEkGK110/vOpGw5N9or/LvO/gLoDSY+i9zbzNSBMPP9cCjOTw/Lyb9ouxfHPB/p89e5MBX+bc06PmgtniZvO3555fAmJvxkIYXCa5DShyMhu2CAO93nw8qhdVNnp9XvXfLyZN6hdQTiJfz5Nd+/+TvPa8nv/akr3vSR5m0HkpIOOL8rqib3erZ2Vmn2m/yr3VyaGbGCdLrZNJSPum1nE6/biDTnJk5oOtnrFi4/IuSf3nl3/0roxLG4SaiIKRouWhq6mDB1CGW+Evi6/vAGOjixjeeeKel5Z0nvnEjgL7mnsq/JOc6jhamgPvrXf412522fG2Tc6ielH9ZbIaJbBML2GmrSO6m/BuEgDwgUH8r11VeaGzE5d9Gome2Eb9Q4JF/PWSfWBxbEB5eELv4RPbCk39D0YTVQNLytWsTwP0VI//WUOTfGgH5FzDUYg6VgdnPve87OTT0S3YveUMuS8FEw3FDbhNSe1EhWJ+ap/wL9i8ir9Ua6373wP71Kv/KTLLERKlJxi3/fvCND3D5F1pQcL7WC8u/nxsff/Oj1eWlDbv55F+Zw2bUaodtw3IR8m9Qbn9Of81AHJ2Fyb/7J2AMfbr524WZv1zy75a9alWMBp413lus37Kchq9nub8QCfbvMrmaf+hQ/lVWN5f8W4uJEttqueTfbSLhSP69DYHOb7/dZjbf5pB/FSIhkn+J2Rf5F4DoX3SWiYJ/eZN/yedAo1LtR0fpPg4U3PJvCrf86/vxDoFMa+zqBOUpxyiDAx7v8i8gVWk0KinncUm4SMixR/CJP/k3jC7/SpG6sAFSfyENtvhZaCCplCmGstVfpv7Lln+3jn9b4Hjjrsu/ZFr8xpfWIPl3zUsbp5YJJ/+usjlsDqTwQGVbxZJ/ScFXuMbk30ytZPg3HmoTBBOxydjfWqpGVUHE/tKSf1eseXAFVA8t0muOPPgQWobpQZhhQg0ouOTfNyH69437TkcDb2bxyb8l7VEBggh9B3youeZqhIeKXC7Nh5Tk35zHGeTk3GR1sq9QtPkg/2o7YT/+dyT/dmq9yb8dr7XGLgZiW1/r8KP8C8YvMDMDBnDSEGolQU3Kv4ki4Uz+1eZCbI9W+r8q/5aUBIqauORfsH+Braxu8efdHPJvRESoobXVGhoB8i+u/jKSf4EoNAM7elYi+XfljpUEfkj+lTVv44Ui/16BF6i/BQch9BfM36bSJ3Dzl0f+VSaFJi1HjaQkVC6HRaU/5F8g8zo5HsH1zN9zyb8FowV1daT8+0VRyb858fkmoxYNk2rKj89hy78U0me1m9eXWYAvru+wOzq+gYX+4vj617uagsGaR1GBrYbV4uRfINoMnkZh/aYgH5J/cdC2BpHwyb9+T/7tkpnsxq7m5i673SRly79bRIL/vKOtuWaLrUgZLF7+jWtJV2jWkbG/ycZOiP314DmCgYfD8mIPh7b2GWCMoG/DJmxYv4vkOiVGXbIX+VebA+YvmnM6tX6Wf1VqdCS3YPn3cyLB5V933C+V9yPB/qUkkbblw/FzKRIS70Xyb2Qkp/y7Ysf3BcGOr9iU2nnOJXDtN2QtZ/IvAlvDJf+OzB3NmgWypuZEyL9Au9v+XRVeBwHASobQK1VD7HQIT+yvkPwrNb3AI/8+KxIsngTuoYCHYpSbUn57+/jt9bd1htZuqwHo1hlqt21r1bV2/1ZQ/gUacrvzTuT9afqj06T8i7hfDmM8Qy1K/vV+fZEp/45eTAcuKoXlXwQu/0YQ8i9HgESKSO5u8i/xERMv/54G+Xf2giLLbtIeQ4u7qZz2Xf6tFglN/v12dva2bODR72Y/+ijaOX4XdpHfpcm/LPVXWP41X7s2N8U0f0ntF56/gD8Wivz740Av+Cr/KkTi6/7sQZH4uidHni962ZY9+OBbmuK34J+Y/aIfkn9lFLTmbiT/djZ1phc5zd0OiZxcx5H8C/bv9ocf3g4NXP7dgOY1XPIv8Apmp8RD7i9f8q9n3j/aU1NTVdMz+gZArmHIv8ezt2d/MpsX4qjp2YHzXuE8pxobhhSWMc5zKunIyGwTGgCoMXlEhUaHuvohJ7R/Vz6cnT0slzCWWfLvQO6xgdHR9l63/FtCyL+K0dEdQ7n1DcLyL1wWbRi3paWnp1nGG7CUdjF/v//P8m8mk9/gBRPyfYjMbwta0oB7v2TyLxShuk1xNPkXXWDB1V8R8m9hIai/hYX/PfkXWIvLvwhS/oVeePEk/wIhUZUSRwkxrJMKhrsVJf8ibnWC+UvKv/vZRL0lKP+yY39LqLG/gK/fWb10xiGCNzd3a7FpnLHCt9GLxG/r6/73ayLhlH8lMrXMMTQiUUsXJP8CjW1ku61RdPLvMau13/zo6m6nwXqMIv923LnTIRvO++M2x9iIazKrGCNr0jVy/c7Nm9/qYMq/RMjv2vAkt/sbvpa+hvhEVlhja/HUX6T+/vhhLrjuoro1OT2v/BtCFCHi5d+Wq2Yn0ieR/XvVD/KvzAi7eshxNpos6CztfSgsJiPqcdiNMn7592Ewff2S/IvId/YkCcMr/x4z108HPbApurSxfjqOS/49bCXk32pI/vWj/JtVfHFlVnKxfqVQ8i+Q0PKrp2j8qiVBpPxLwJf8OzHRPoG9n1hjQfJvIJPWS9hV/4oztbRuqvx7Lp9T/v0ev/wLxIyAIxQj4ZN/+QVgGZgkoP7OX/69kSKTpbCGRD11at7ybwSNguBg5dIILvwh//40Pf0LT2DZvw2Cyb+6Pl1fn65CJ5z8m/sMbUeVO3/591MszgDct70fEQnj+cDE4soQcfLvY5lGdJsQou8BKKFtzHxMSP7dFraGGz8l/wIbXh1/773xVzeEkPLvvsOXDu87DCXm/9YUIHW8oKBAV0tXJu6u/Aucd3u+09G7wWPAiucjr7uN4POwAU3+/ej244Av8u9zY/ljcwc1yRmJWu2R3wHzl38rRIK2TU7OKPZZ/m004vKvNj/t8jWXCcm/zdq3heRfKdwdVyhQJSz/snnvPT7591YVcS0Pia1Vzf/+GUP+fe839Kk2JBgIqWX0v4e25XB/r5Hu772Xf4H4+OiyaJjj47FFluCygx8O+ReoKyiogypkYfLvF0Tiy17BV0kX31kEVCbK5Ca5AL7Lv+KTf4m8XyjRhGqyDfovj/yrlUvGpHMu1JRiy2ru5F/C/31x+v2tASc58PX3FtSYgnyYoLimlBbwYZ4vS2kqg8Xn21Iao6+Y66+4Vz9P/rzqyi2f9gwxrO36/WMsFiz/Dsb2Vkg6V3Pd7M5gooK76zGmFCYs+XcmOHhm9epHLxTrK+G95ZN/l/YUgvSa65zsKeSXXv9Ap0F3NvP27cyz/Q2MFQuTf0HgKUJHekUxvMm/W1942BtUcWbR1CFe8Rfh6/uwlk7A+z/HeD+AsYK+f4iMxGvuHsZF/7JoRAv/Rf+vCnHuHBQi5N+ySYtl1gljQJWR8q9X/ufkX4r6GxlUisu/pfRetvwL6i8Qi2bgRPbC5N/QCJT4GxuKXjBtVC5fHjboRf6dUuJMLV7saQrJv4ABJf8aON8HkH2/DEDpYccOvKb14xc3V8FwtazdgVoPKyhTMCb/fl7UNF/5F+zfH/3rR38ykOK0obaER/791f3us0aTVma3y7Qmrv3DZgSIa/npmwURPnue0dW2DtS2Dr25hFv+hS+Ahmat0dkALoh3+XfJu8f6zwwExfkx+be9t09HiL/PwSgZkBZJ33Y5jS2a5L0QqVqsjrm4nI74s1zf5d9TbG7c4Ojkkn/3h+0PC4OCW/7NFTF1b+NI/m1zlt8uLf2g3FnOkH99/e6mur/+lH+J0bbJjN+AMMdogIjkX6ksJT2tqSktPYU5qL7vxzsEpuHOTmzs1C4TDDENrWET49+NUalgVlGrmBio0IusVIk+y79I+xVI/oXJk/xLqr+k8ktqwNBmCBFs9Zet/6JtqeqvEIzfhYop/6rY8u8B6lwysTI1deVEyQFYInvZ8i+K/gXpV6kECbhAuUZA/gVmHTY7ukILhc0xy3ooqeXFJS/C3OKtRttC6K/clOlO/u3eGgB4kX+3n69mPMXRp7PCOCv0bZd5OLQMbhBDCS2YiE6iYH2Om05/CFecT0ejSw/vzkq505173xCjlAXxUW5udg0Pu5rry4Mo8u/Nxzns38f55d/TMENVlu/58JeR3ae55F+ZsRPuvf39UyD/gnLvRf5Ncy1djLHUlebn5N8ZzP/tKZhBZc8Q1NA1tFD5V2qyBAJmE1cy+AsiQdvmi8RX+TdbJPzybwKn/BsjCq7kX7jTW1MDFZ78CzMUAavI5N+olRRw+ZeAWLkw+TcHD2xlFQAp/wK7Qf2F0F9k/raB+Yu6+ORfUH9D606i1smNG/G6LhT0X3/Iv8Cwifj6ggXu5F+AkvwrTv7NR+8GAFW+kPwLvDZrj7cA5ltpdhekALtBDbRtPAsZippjwTybz7NaB/PczUGrNU+s/AtsKquvj4Tau/yLH4B4Kux+hUjY8i/Qqc30c/Ivkn8lWshamHUYtVKQf0MWIv+uenXcYnPYBlYh/2ZVe0mgV/k37sXSlL1k7G+wXnE5hyX0ehbyDOibUHfi29D2q/yLDslAPcsZ7uoyLUz+lbPQAuzeeyD/Po18XzqUa5Et6XJ5eguuJN51+Tfy6NFIzuRfEfLvi2x+nS9hQztuC2En/yIvOARK7uRfo81ZWGizHC102ow88u94oBtzCSp7A9z6b0g43DyiCb3oOGrvOor6GyJK/gWMUpnFD/KvQya3wak9VLdA/t3WfVu31NA9OAiJv4ODrduOgwE8eNur/BuX+9Hg4GDe6dwguvz7b3laPin/vnPf/rf45V9R1xdJ+fdf58//accyVUeHapmyoE7pRf6tDiWIACummkP+/alImPJvzAU/yr8k4pN/LSbtBUVMst2UeGyhyb++fuuQeu9q9IKCG7QtU/0Vln/LXNfmLpLmL0v7JY+E/oH4V4moa979FLBkLkM/J77ucYOEuUfyL67/Nu4EncRs+fSKFYea3Gm/T5Av3+Xfr1K41d1tLmqCkRUsTUXd27rPUddxJP8C2wGovCb/Ah0yZIXdzyn/AqT7C4yi5N9RWOBN/v31w98Rxn3U9GztY97hPnq0v/aakfvoUX0N5F+H3WGzXEBP5aW3bOKG9rtAgzzBY96MZZb8e9/Vlvugai8pMSMqci0IbWIhdL7a0nJMWP4Fpi31EPTuqLdMk+qeAEtgvhfyb52yboqcewb58FX+/ZdIqMm/WOwvbv3SiGj4PF3+7TNg6q8o+Xf06cLCp0d7fJJ/NaqdD+nVar2+WCGVahYq/yK3V6+W7kVN91KiBsxiaJMvjjMEyEJQGyvc7q1dmhoVIkb+vXXr1uvNEc3Eoq/3dwj3lyP2t/nxb5L4+p0VSKfELjPacgs19hKO74tkkfi6bbpIFi7/wjC/Q6865BJu+RfdIsqsrgYF+MRiQfl3SVlkNLkUHVm2RKT8GxdtNgBWQ+4DcZRz4Pw7d/Ilpm0/gGucElkRkfxbZJLEPw7ybz5H8m84VqxVHsZQruX4lOEyfh+u/tbCXS54CJQ94XdquNRfQBNTfESjOVIcoxGOhAsRI/+2IPUXY7Jo0ll/deHyr9aBeb4O4+wON1mwYHdAt1bq2ZbU5HushkFc+33UL8m/UpnE3mr16rYFiYQt/8I7VVBQVFWQBA1/yr+jWZVPF2dlZT1dmbVFSP7dcPbl+39C4f6Xz27wg/wLJEzAdzZk/0Lub/uBA36Wfyt02Hh/tZf45d/N8TIu+beDKv/KWZi0Wg65iZB/BQTgRKkMO7mVzjf590YK3BVlEh8/b/nXQKEGl3+XGjjwh/z7hS9cKU3ZU2bwkvy7y1DRV1LSV2HYJZD8CwwQsb9QQPCvH+Xf31efP1/9e87b3mEiYf1+1YpKEfLvY1/rksGXklolkWJIVGpYlHXBinsg/5K3dMk6wC30tbcHgPtLSf4F8/cSqL/IAAb/F758UIGqS4bW2j6G/HvY6zxP+Rc4EQocbtgUt9ud/bt7U8PhWOg7Qbmoifsd6x8HfJN/r2m1cyjvd6o4PwNKaHrwdRAai0jwAROSL/gm/wJtpuHrMplWa+x4LT3Fjsm/DlPbiwLyLyIjA5W+yr9nznDLvz+srvHEKoXX1VT/8Gc08Fu429/bTr488i+zH23rNff33su/kPgraWuTEAnAPsoEbPk3RAmp2SELTv59QCS+7hViRELIvxve+PDKFRE/gxpHOvacSu1G9dyYVM0EbRsnEvLIac/bWEWPAabpv4wUL3s33MNQqdA+VwJviK2BQ/79NcX/nb5v/1pOcIFTHGhbdCFe3tRWKoc6v7GtSQKklbalQCVNN5vTJDJsNSVdIUa/t1ijlqKm6XoO34UZNRUJoOaGR/6t4JN/1zHBUnzjUaQCbWLJv/9h70yA2qgCMBxnqHijrVeitt5HaK06Wh2tovGoFi3xSvG+GCxCPUABNYYUpRKhSj0TEWithVJjpR1QIyJCZBCVQYqkKNAWtEVrLd546/92s9kzyXskUTy+fft28xYx3bCb3bff/juCe5dvOupYrz7JpQ8h/5bu6BvatGloKFTi7YkyXvA07eRetsyxU5PnBfkSxlsu1Mm/o1tHUdKDyb/fXXoIi/wbUvwlsK6H6QoOvJjc+3jxgdNDyr833shPtVvk68HUNovQYQjeEUpJ6LOEKpw8Vxn3q4qXyb8X8KNAbm4Q+fcdCZkpu6RkvqNNLOVfpeQryL8KKVgh/0L9lQP9Vy7/rlRyAPf1rWqWJP/yE0IqbsiaX9b0hEYnb4oA1hf+LjHuc889fucXTQE014NteX//cpu2/AsE/1cu/74paxcvz2diDyIjqVpDtPyBkvHKvxXXI/y3fZCsOn4lQr4LIv9+nWvwbx1OXPhH/lrwdBC8MIQm9HYx0udA13Rf+4XxweTfrO5hq3O420Aj/0L03bQJbVFL/l38MXI0/eYvIn83cpG/IeRfkF+QlpTmSk+3KNpZznIjl38Bjfwrcrm2/OsLX3yayb+nLEOgFMqyUyKVf0X3l1H+NV2w8IG85OS8BxZeYFL/XoXjSybzlnAmjrxV6/2amjNAs0nZzn68I+DERR+ecoNzY89G50al/Gt3UWHXgXwJ9rlT59rztdEBSfCvSv6VIr5f7M0sOTAociyYV7wU369a/Z2JotZ/dUCi/rLIv1lFj8ooUh7TLpVz6MdfHmq3H/rlx4cqFqjl332+Kp09u5SMXx0QUv49sNrk7Ya/4/Wi6vaaqg9UyL/49BsbsR8LN+XOHGH/Oq2trYVPPPHIpv1DK1pC7G/ZWkQBjQjmyfK1ZYj9Vf7s/ZTogOi7IOIp4z4IWCgXomrx6vUmp14pvVS8T6eUhbrWWOV2f45LCxL5F894pEAHeMNX4L4Mg38XdP99YZJ/yxHgDt7DWLwxnPy7ddcAW0PJvwnBxmDJv31E/0W55juiAAMyHRrik38zKdHYR5nqllfgw1leVx5hQu/vlLD+3jsoCSL/btoUJPk3jgpN+VfIfZpcStRfefKvUvMVXwZaEiOWf0Pv+aTq79ZyYv5+xpm/weVfqL8rZvtF3ymTJ0/xt85eAf03cvmX4DTwHv3z2vJvKpf8Wzs/mPw7Q1P+faPHajKYkpNRWXve0JR/TyGFo3l0lJN/u0dHm8+XweXwEzoQLN5YydNIEk0b5a1AdTa/uXbPss2PgM1le9ZuPopW/hVhTv6NXP4tdPY8HP3kX0NcltXpdKKjXpH8y3okt9vij23bRkev3LQYb2oxLjKGlX8vrGo2u8TY30yXs+fwS4LJv+CQ68FRJ+1NKf9avvLfCmoJI//GIYi6fLjYEAcik3+/poRl3bL200P+5Zi3E8J+Vezhp62ysk20EhUlyvLvrDVrZo1X/n1MzSklejVC8i8ZQiX/JqiTf0Hy6sYl71Q2LllSuTo5Tkv+rXB7HbxLUmdo4O3fxfw1ZDwyMkEi/+q34ijVXJ0Im0ZOglgFlX8bcMljQeTyL0QwL0n+NZian3zy3QWbyT7O5vO98cYbeASMb3NZbdmyJwkhFY/zPI6bmja32BznyeXf2zv/uD33Qz/71q0EOSvlCHuk7449hEH+BR81vTy0xXX//a4tpYOlU8LIv12Dk0UGu+bIYRJkGWGXf2exJf8S+TfNPOYt90ZL/t2TovDyLyU6QKP+ivLvjm1PzRXMX7X2C2Ty7/WUgRenSBjYEwycoslEkX9Z9uQn8ny2sGinT3b67ESkAtoro5H8K8u38Pl8trpGyL8NtmUjy06Vop38+8QqFL/8ezQKyf/Vln8/SDaU4NlhH9Ak/y7eUltfX7tlcdDk38eOuCQcOsC5v5Ty70JtHlA28Mm/o8iGb0A6vGs0vaT5LHi+s9SDTP4FVkRZYSJ7re7DeP+T1+/mph8v56hzEsxrlhI+eX2n0PIvocHbu2xZr7dBru6FJvby72w5tcFglX+vpUS6HjwB6/cwOZM9F0rl37X1RP2llX8R+8qa/JuT7jrwgIKsgnQ9hpxI5V9CSpI+KYdP+QU59gNTpmEq6r9a8i/s3wRzudCt1BBnT0wII//+hHHVnl0Pta6KTP59Hvez22Sxv7aaVYj9jZb8CxxWcrO+161sZ7nhmvVnj6EkYvnXicfL7VjTPer1JmnKvzWFhzcNDDQdXlgTWv41NhvjNV5S7UGMDo/HYZQ//cY0Z44prrzwkasWeA1b63/l5d9f6z815P7442W5Bsi/Jfz75b1fkXUrONYdrFgg/WTbd631q7/a+OXflMAgYof7m5QE+9ceXP6lT/51+8XfX7np9rbI5F9g6gYNXq93LHvLUHb20JbsIu4pc2g1iT8ravL1AwtO4q3fs4vVMMu/8EUa2rFrDEMk8u/YDj9jUZV/s4tcRRsA/soSQ8i/YE2ujDVoik7yL1F+P37/YxSiAUdX/oXzXtbev7zetjyI/AsuKIlTY8qTyr+5lEjl35AJwMKDECiRXhZ9CxyvpLJy3PLviRJsvPxbW3WimmjIv6DR1LgXsn9tCvk3Xhwg/9a3t/f34wFzIZN/wTu8+Ut45+Soyr/PY9SWf6dk0wz8pWy5+1s0I6z8++qrxeVkb2LJnGGO4zDPyLSQlvLiV2fGXv6dpEr+FefQ6wOkyb+8+DvIlXNFeBG4BgYw2eq4n6WEUyYokXZqPj9IOi9aLhSuwxnv4xqeF5YL3U9vvHvGuORfV4ELzm9+QYErf1EB5gSU9z42txzX0pisDet+pLeXNfkXGJOHh63fDA8XFrrdxa2YL2/9JtkYTv5dNC75d/16Lfn3j9aa0sCl1fmpNT+hTSX/wu2VDQH5V9b8hFz+fZ53f7cJ7m9Q+beAYOF1Rwv3IsryL5G5qqqI4BUN+RckkIJxYsq/LIdj2E08+slee50XDuktNdZPy4XZ8k+DZHx4KNEB3vHNK9FK/hX1X3Xyr9vTECfIGobteKGV/GskhfDJ3UhXfVNjmM76KK1cY3wVMV8yZu3RkYxpY/ysRpLH14HTibjeghJjfBtZnCyRf816vZnr/3MOPx+0YyZTQjX0VX1Rpias8m+ijEmJk/Bu9IZkzTvvj5JxzeWI/j0WF9theweRf0H9jvohQj29/Ot7e/sSj+ca99s+Dfm3jhKtdDD91q2ffro1Sa8t/5JH8lHKvxTiL4F1PUzneJMUngM5MCNfokgGr3p9vxMk7Pd61QkRyb+X3Xbqqbehko4qWM8SLhMICMCdJSWdwmtxoji9bHtl7i4pr7SdpUks5d9mqfork3/l+q9U/j1pYFcNBk6Syr9JCswrua85s9bNF6L5O5mvZqeee+7s2YNN69WdvPkK7Lz8q/LgtNZDbfvasrK17bWa8q+KN7dA/lUhES3T9PLNrmAGaT2Srwgsj6Bkl39F/fcR26Df/QWDQeXfywzCYYPVaUUxhHw0YETy77fffXtefMt3I8HkXwMvF5vImwkr/wIoZKijlPz76Jd43hhn/m6D+dsjmL8h5d8N6easLJclyZI+V76A4Sz3r5d/QTD518HH//rEmhukM1rJvyIRy797i4VF/jWU4CLNratX37pQFf2rA7LQX9Qo8+ZJTgqFovl+S/KAumeF9XjHEADXcshEb9Cj4lBuQ9PnUsGdKVhF0gvmTt1gTrJqogNE/Q2W/Lv/DLEI60Ee9asOAhbWg1z9FbRfzCj0Xx0Q1V8m+VefduSjEo6U7We1pMG7lx7qch269G5lu+QYZpp/esD8r0pTU0u/mn+AsEBb/t3NanJuxGG804lqo9Nk3U2Z/NuYjE+7sS3MlE/+BYWc++uD2RgcoVeHj/11NLgbRgKdv6nzE1S9LydSIlm/5U53N/a7HS3ocgCoOyADd7ud5ZL1Gyr2l7kHdQ+J/NvKIP/KWZbst3WWHRdG/i1BjuMwduldPV09PdbQ8m/nroFLgnvu2qkp/yaQEpwg8m9f6jV3qxlKjVj+tY74cWKTlMJ6i/85lIxD/j2IogSRf6/BGH35lwfyLy/+okYR5F8aYi//Gh22Xz+1Jnc2tu133nnBe0AE9Xdy6Zt38axDBLB/9s3SyUT/jYb8699urJryL+xfjKRmS/59o5jc/dLVhaqn+Ai1/CvngwY3Z/82XB2I/RXlXyNHVWVzY2MbN9tG9rZt8lagPpvfXL/nnkQ32XPP+s1HRV/+FQ4+hMOPyOVfULyx+OFoJv8CIv/yaMq/b1LCy793z06dOr+2bzFxfysqlmsPywX598JZHRkW+24Bqguksb8nqeRfcBBhb1r5N8u1jgv+dWWFk38JPcVxkcu/51PCcobF1E8vyL9zM4PYv6LwO0uYi3ny7x5G4x5RlX/j/KSnq5N/uXhf7eRfQQDWuJEwr7KxcvVqVHkaNxLyfozbb5YY3ML159OFkJCp4haTjjCIokkK9Zc2+ddXjmMwzPPcNF75Fy57VrmzPMtpzX0S9u/P0H33rLfZfIR2Wz32eO+Gk39BS0v8Ly3nfduiSP7dlx8Jf9xekqQFv0ei71+8NkBT2WbblGdypvTVD6buHlL+BavOnSyA4N8JLf+CWQzJv9uTvGNFaWt6rbz828IX/5Rd/oXZO3hY2MIu/4rqL4X86/71K2L+mrM0tF+V/HvU9Tv/S+Vflj35iQLND/DTL5pRqWH9NjmVMAcjmbh9Ix6b293qtnl8PkH+nRM8+XfVKjJSJf/eXpJ7++25Jbdryr9K1vVt2dK3jlN/A4jy74lvXBIeHaByf0GIbegFrW1IjxwVl2us14VnKTobjecFg/WzWEq4G+4vb/9yHbnkjk69Zc1SHiwLK/++VtV8f3Oz8bVoyb+zyRix/LsnJbGXfy/0lNmCUeZxtAjy7/L2Uqi/1PLvEg+BRf4Fi9LtB+a4LGZzEgJ7I5R/p3PFhUN3+L6EaRgI00Mn//IdGgVxjp156uLyE0PLv601rahWdZH5SORf3M+OSEup41Zf0wr3N5ryb4UbD+nyuiu0vi+WUMLys3+p/DvqHR21jFm6rV6rWv4lNBU2nX02ql3DyL+VxniNl5R7EOzpFOfApk7kvBu6F1x1VeE3NfU1Y0T+HdtWX7/1sh87TXpc3ukU5F8FqeisQFdGqqRpqrCVydTfS3DqF1r+FUlBwQBycuy4ZGO25+TI5d8EceQr1OHl3893EPf3V1JhTiX/GiiR9sR6vU4S/juWPdS+ZYttKLuIxP46vV55Tyyo6B9KLdv8MJ/xe0TxRqsaVvkXSSU+8ryN9WEYv/w7+VysKwJW12GToyj/HrqhqMheXV1dVLTh0NDy79wCfZxIwdzoyb8ErNAvuZmlB0dR/l0L/bDfZmvHM2qDyb8AW5yK5A+k8u/tlAjyL40ArAOLKOEui1KiA62UBJF/62Mo//7wADCW2UIm/97z4IP9/Q8+eE/o5F+wSbB4N50ckfxLiQ5kZ9Ppv/JTJbOrGvvFcPLvzEJnHAn7tROpyp5msaTZJ2HWnk5anYUz/7rkX/GJr0ohmMz5hd4Hz5Xov+cClQH8tq1dB5ooYVU8xEumTYj+tfFWw6z7jPG2FYHY35mC/FvxC9Rfdvn3SitIN7lI9m9+msVQ7pLLvwUBLIYMnIreb7AUaKEDF1CiA0WuXtd2NvkXNCP6t7V1YPMT69c/gaeBdDuHv2m+OZz8a7Gwy78EDfn3p5rU+ZP8TC2taf3jFiX+S7iXiKKvNPlXpgXL5N87QuT+ivKviCUOWCQN7PIvDZHLvwITNvmXpcPn9ISdzjsBh7V7Uci/nwncilGcVaEDKygRj5xefDFI8i/g9V/lv83q89R58ZeA0lDn2x6nkn9lsb8XT+eZpBjZ5d/4qg7jdTd3VMW3dcyKN3YY4zva4tG2x6yOquvOczi4xUa0yVLH+HfcUxiiY+ZICTOS8N9UH6kJq/yLQ3zJgFdmcvU8uSW8/Dty8eVHjiyw6tPN5vTgyb/1A/V9Q7ahvrKB2tk08i+oGhiwDQ15BgaqIryjv0HFdqBu5eRfPJKPWv6lEH8JrOuBF3zVyNrV8q+vrOoECVVlvsjkXwDfd07nHDKdg4L5yOVfFZ25uZ1yH1iQfz8IcPX5n0P+/fz8fa/+QINYyr8S9Vch/8r134D8+8YRA7W7alI7gIWC/BunIIuXf7OU7f6jssPOnXwYaq6Qiuft9bLwX61bDxelEPk3ZZGyXfMIbu3mpqbNa1XN2vLvxbYw8m91kjxvu4hYv1L9Vwe+oYRZ/pXdQ88n/2IlYjUGk3870hYFSMMjGrTP2DopCb1dnCdMgsq/PLTyLyFayb/vf9xvq0Xk77at1o1dovgbUv492JW1KClpQ1qSWVP+Dc0ElH854ZdMMPrIhJ/6hAYyVSf/Rlf+Fd1fWvlXNHQXPvDAQkw05V+gMHAmkYobRIJsm8PDGo2sxzsNlHD7HUp0YHWA5mQL5N+k3MbVq9Vltf8M5CRhCJ/8qxZ9tYRgHRDVXxUy/Zfb3o7k1F82+Rekr3lUwpp05WecpqD30UN7ew99tFfZLsi/MvbZZ/78ffxR8RIBWHGxJgW3lVTn2/OruQq3lqRIFvo1pptvRhVuKsi/hAXLOkLCbxd3kNjf5STHxGQd8cf+1pJ7UyOXfw3WbodjxGow5FZx5i+qKoRzWEccjm6rIbB+hdjfiOVfdIwBSfJv64/jlH9bKjNKTKaSjMqWcPIvErZLyrFb7zHg9NhpCCn/XtYj4bKgyb9U8m+9jZDKMbu0T5vU2azJMgY51jq3w+F2uOusigUTSP6lguH9Ri7/7onCyb/E+uWDf/3yb7Y87Veb7JjKv4L6m9y5WjB/g8u/vPqL2F+B0hUrSjERwn85/Zdd/t0sp9WAPT++CQytigWKT02Qf0+kkn8PL+7q6kIsNzc5PIj8K1q+9y4j7u8p94pNZCqRf3GDRV5GbqNU/hVakxu15V/wSFl9LagvewQvYpv8y72IWP4FhV2F2sm/myhRJ/+Gln/tlPDvd25pAqlwRjTmDn2bMnF/cUqZlhmI/Z2R7+w5Wxr7K8q/mpwkH9XyL0h3fYXcX1d6HI386xw2/LXybwYlrP30kH/n5ue78EyIIzXs3z3kzEKJufxLiIH8i5P+RYGDVDH5F0Uz+ZdYwQncMo2ttqR54erKyoULm0vitOVfh3vEb6tUYIbn40lE/02YOlUq9Ga5EhJlGkECrfwLug2wf338K597vPKvqwipWGtcmIw9SYD9W19Pio2f2nw/c+2sn9uHcm7PDfHtOwn9i+zy71VNTe1D2c9NW1dfPyWs/PsT7F/B/f1pAsu/szBSJf9WCox5e3vHvEXonKmr1EAHPqFESP7lhuAlbPLvsRryr6D+0si/VY9vqHZ5nUrtV1v+Papi53+r/MuyJ3/99U/44ZXmLxAAfOJZje5P0KYaWPvreLsXI+Ehn8/n8eCya7vP4RPF3zlBkn9FiPx7OleODiL/Xtb5AeJ/Oy8LnvwrDriFbDFfSZsF+RfqL6X8C/eXCu73UsJnJG4d3bZt9FOM3R3+2F8VaGLt95E/u+j9jyvwDeN2GpLSliyVEfZv0mhENbGSf1muI7opGZ/82+JRYPPYJAjyb/8Q1F8G+ddT6PFgZJN/c8xJ+Tkp9vxFSZacSOVfnhSLXu/Kgfc7DRXv+6qTfzXs30QX7mjiccel4agllPxb28pNI5N/EftbW7ZWajbZanAj+DmRyb9rVXh27PCoWzkzhRLWn11NSeTy7+iOMfNY1lh3MPm3ZtXA4YcPrKrRkn8/kfA0xmAvx3MOTA7FuejfR2w1NVs/3VFUtGN0a039tmK+1xlLNeXfqZMPKz344NLDJk8VGhTJv2t59fcQqL+U8q9CA853gXzMRiH5t00a/bvDLV3EuueP82OyWtEf64T8O5RNxiJnNxqsJuUZyPK1ffW2BSfxnD1sLcnIU8Gc/Osduerlj8ITgfxLeBzqL5lGVf49dH/EWrrSXPsfGkb+Tcw0GwxCbo05MzEq8i94dOmjSxPJ/Tofv5+I2UejmfzbXmtrX2uzIUdWQ/4NFf1r6LwhFvKvKAC/zx2S5VDCelm0hpK/Xv4FDyQnP/CtI2TyL+jvRxU6+Zfg2DRvxox5mxwn/3Xy75RsqiJ/qHwa3N9w8u/M07CPx7VB0vUBEgn8XIILzXGGHvxIKPl3mmJkl38poU/z5XW8iy6hGfiOwipKFJ2ad7wN+7eFpJrFx98H9/ftOxRfbNefcgZgkn93vXLbNngNac60NEv+sxyucoNFLv/mBLCnc6ei6fk5WrDKv67egqJWZvm3DdG/TmtGw/DoaHfD/U5nq7OkLaz8q9dHSf69elVt4ImqU9fVrrr6FjU6QMRfovlyoyL594nAAj75V+3+Ari/4eTfgjhQ8NfKv9mBil3+nbjJvyWU6MDd35+w13kUyN+vsayKdxCN+2nALP9ScfMRqkuL1m7f9u3dceXb6zweZ7la/uUyf28WYn9hV4ZM/j2MonAn7c24tp5njN8jD0exjTfHG8nFt8pZ8R0mhOO13XdfYxy3OL5D/n4RBr+xeCagkn8zoyn/ShHkXwON/Av7d7fdrilKc7ksiixdaUdHfRkuKD5ePxvTPbXQlDWqPJs8vraIH+e1MyU68N2lh1DBdahRiL8E1vUwnQa1/Pu6x3iCBKPn9UjkX0rY5V8IvkIlomqR76Nyvyby7ytfd5ZowbLvYz2SttgTMtOaq+KBWv4lGJtNcVlpAfn38IHBc4MyOHC4Qv5NL0jSq+VffVKBcGVWkvw7mR+gsAbmB5uk9q/GdiHKvxqf8bEqLiJFRbDk37uCy7/E7Z0hi5bKSpuxm8CR4lnuI5REIP8iGHKQX2eEQZu2/PvFvGnh0IEvKKHeLkLLv0BT/t1DMQBF0zjl38UfI3PgwSsR+buRi/ylk39xE3m6OX/KhgJ9wZR/hfxLQYyTf0UY5V9C7sKFuepW1rPBl9R89JFGI+vxTgUlrPLvfgE+y+Xk3zzMnqAs/LEnzJigyb986i8GIfkXO09LDuyIHEsc5kUUC4QLyk3P7x2C55uEC8q8+ssu/+otmY8GyLTolZ9xj4KNm0jy76aNynYdENN9UUtQNunATpRwZ6+USOTfZQvDwG0XzzfxT0ccqSvXW93L+dhfnKBGQf7VG+rcI+6ROpgm+Ju9ENzXloEXDQ401xkC3fShYn8j6UE9AzDJvy1CAVWNzc2NVZiRL9DaP5g2FhefPVyuuX+4LThU8m+CZJIglX/pYJV/1X/rXcWFhcXDqr/1/+VfmuRfEb/8S0ds5V+jY8eoN2/1WfudF7YHZAoJ952cOuWuALNXrJgtvpqSijwBLGeVf1PkpOn15vx8M7RQxQK1/MuS/Eu032JAFOCwyb/gFKAtUBoD0b95lRL5V2ztCCL/gksf2WyzbX7k0qNiJP8C1NFM/gVBkn+foCSc/Jug1BMp4d8v6QhFnbDuym0h8Mu/bXnm/N0C7m91mrNYFHvl8i8lOmBVgJQsr7ItiPwLoiL/3klRzme5VsDYTw/5N9NuwdOpFtnn7qa2f/dQ8w+Vf/Vmi91uMeul8i8M3+mkViX/ojlE8i8oySX3y+WamPrVPl58unIPasmUq7+AQf5d4MT2aB12+3zu4W7feOXfxGw/b17z85PvIuX3jc1lZWX1sH4xkqzDMt+7aI5M/v0DsVMhnvX6HdxfVvkXfNT08kfr102Zvw7ubzj5F/ZvDdfbUQP3dwLLv4BO/jUIFKzpQ+xv0ZK+oiSDBizHTKzfOjLh9+FCPwtI9bBS/t313Leh/tLJv9t31OHbntN+Lwr394DY33+t/MuyJw/8h9NWNjyA3N9G+7Sgv/drSmR93nN4+9exzOMZ8Cxz+B4S24Mk/wpQJf9+IEwUsIp1j510CRWcCDgzRvIv+rA/3TaKZ4Td3ya6vooCWPt9lirAU8Qrljt61yjbKf4m9/gny78mSpjlX57z1KjXw5dbDgasyb+bmJJ/wUpLljnNVZBuWXlghPLvdH/Eb05But7istvzV4rOrzr5V01iUVzdzjwOgwWqTnD596effopc/iWxv1KdDbezc7G/Ecq/SImRDng5CDCVt56rA+mUsP6sgZKI5d/yT81JvWvMZqs1S0v+BTUQfs/GvIb8K6RfCKelkkG2aNznwIZvCgdsZZ9u3VpDorbf/tQ6uqpsK6/oKOTfqaSAdbXrhImIKP+urd1VUH+p5d8UociJXP4FbSTyF2AiDf4FrHt+YY15vV6DgST/bsmGf7NlKpJ/DVyj/Aykv52P/SUDYn/Lcys/O0EFq/zb8NtHcH/Do2NBLf+eW1NzmIb8y4Ja/oX9uwHA/Q0j/yYkFqXr4zj06UWJ8sNuRqZJOBjj9PfxjKMv358+TUFE/zawHBvP27a1/bB/Q8i/++YlmwgGyXnsBSr59wKKUcdICiU6RrooYZJ/Y4Y6+Re0t6PSTP6lg13+RW6SJnurk38P5seQteJUKaugaEZCqB3kzFeLy4mGGej64HKW+DmY9xayrLz41ZkxS/6NIRdRogNGSnRA9rjU9eeuGPR829LyreftFeeuly3SMRJI/f0UPZ35X3nzn/3qWZ6v0iyK5N99AqxM4k9FV+6jBZP8y8jNIo3l3mFnrjfDm5zRnbsR842zxIW62AH594/WGjFVaX5qzU+3aKED6xW08/JvuyoqH8jc321+93dqePnXEpn8y4hc+s3WLLFO/v2eEpa9AtMWyYBC/oWL6PHAQQwq/75NiY6RODlWr8fT0OBrJepv8OTfbz+5mKi/QtLvJFkG8Jtsyb+MSGO5hk+bGR35l5FJUliSf8FN312zf2Z1PiwUOay3eVVVGSUDMFbttBOZUyyImfwbI5jWAyMnSLgRxu9+/Ox+RvIyAvk3VshtX5QgErD8/Sb75V/tTBXWfV8lJePYhjb1lYakb5P0Apc+q+AZV5ZeIf+i2fVMAZoD8q/f/OURPVZMSfhvxPLvpcequVQy1TGym5/MRVmSQ+VMXvtF4Wb+Uvm31r/aMAxqJ/9+vWnatCkhB/7M9UxKdAwwJ/9+/xoF37/D/vf76JcVax/fBvO3hzN/qeXfDbiLfAOmcy125THMBIFa/mUgZPLvmYURyL8RHe8YwOrVpI7w976kwRUabcw9OpSwy7+83yvKv59xTWLhoUn+3V+S/KsI+BVRRALrYoj8/1qQeaTg/hboVZ/xb3Ku9f22tKho6W++axULOPmXklhKA08QfB0LaeTfAeHpiI667vKGupGKfpsi9pe991KUfxtG3I66ES+2nOTGZVVVy5Drjw5ndzfs3wa//DtBeJoSLZnWO2w2Dw93m5VEcs6QQAqHOt5Px0gmJZoKnL9/T0nM5N8YESP5N0bEUv59ZftYc2U48xfoGIhM/s0xZ1nsKSl2XKzOiaxP/wiF/ds13AO6uuD+ytAxYuRpy8hobKtSyr9tuaRVlH8p0TFAl/zLw9oTtBvHNTcF5Rr+J/yq/RMU5Q6W5N/xHnkmlE4OCSf/GiuTF0lif+3mjarY35PG0ff9PAW6GHI+FXfy4joljP30kH+rLVncXaiZl3P27z+aEPJvWjWRxvXy5F8QJPl3ulBO177xpvv++7vVrYrjeId7Zxnvnx7BFqOUf4HPyenH5SaT03e9Wv6dEbIicAJR9vx161Cysy/+mfDuz8s2lw3Y6ssGBsrKPMg8dPu4dh0jUvX3dnwIhih9+14r4ar165v61q17bvfw8i/oWkXomjNngsu/s6jk38CvSVrSt8Fc3rtlqFcfpwHr0xrfpkQp/x5SWBygq6enUCb/ThDY5N+//+iRZU9+gMjKMeRBrwwhFd9LCS//ziHFz5yHPvA2bK9r8D4E95dfQkaK5F9wNFdOF+RfOnRArySLr5ToYgS7/AvwfkqaP+O1X4wq0Mba75OtYunS7yD7Klt1MSKW8m8ZJRNl26RGkH83zFuyZMk8NvkXpLgsZrPFtYuyXceI8N9NxwOqCshvXCn3foMm/4paXHVc9848I+VJMyDG6RhglX/XN9WUra2QXq+oJ7G/Ecu/kymJVfJvDP9+1fIvIWmMy2YIJv8WHn54YRD5l5IIzoHLs0Zbvykfra8vw7Cq8/cfW9Pl/3re/A0wf/50Mpk+fz5pVzgxUH/bZervSeoSPPk3RVv+ZeQsOe7tj5PcX0XwL2Dd8wvrq9tghfzr9I71jvWijHmd3QY0dZdL1hkf+/vESTyHd1lL8h7YSwNG+ZcddvlXIPryr0ho+RfgLnaxiyMi+VcJon8R/Dst2vIv6O/fuQLyuzrD6QYJH+R1duZ15iYnC9HGeeIyHSBqLyHcVMfILpToGPmJkokj/yqTf4Eq+TfW8i9hbzJKXsrndIC3e0Obv6rkX4LebA8l/xY6cUUpLt2emJigdYiRaE+PwzUlZ2Ew+Xfaf1L+nSlKvgj/XbFi8uDg5BUrpLG/M8ct/8L9NRcUQPzN9+ZD/vWDuTDyr/3vk39BxjfD3d84M5zOjG++aW0tz0DTXyP//lSTOn+Sn6mlNa1/3KKJVldKHy//9ml1pahzf4n7G/PkX0ak3u/flfy7ePE116CEHlGYO98oGb/8C9cC8i+qoJfqvqUk4stOemsDd8NYCPn327sTof6ikGESRnFKmv8S+ddQ/k3hzJkTSP6lS/4lLPCma6/fbEp0YN68efsrhoSEefvvL2vGD/0T5d9sSiKQf0GV7XWIvxCAX7chdnuCy7/BiLn8u5CScWxDp0/Ck5PB/PmoVFMsO116QSNrUf7u9kVJSvk3aZF99/xFWfLkX3LjNmoyi3kxAlgM/2WXfynRMRKwezPT/LnG+vRF1f42YeFfKP/iRnp/dDJW3dsv/3b99RUVSvn3FeL+hgJLWR5jFS3516CR/Lv/O1Tsr2MEJ+wjO7ZaN3Zx4i+D/CuyYcp/V/6NXvIvIyY1JSUajZHLv2CCy78EhfwrIpN/Twqd/OuvdUDUe/VxKvQBNfivk3/R7VCUOe/II+dlFpkVb0kjAWbBI9f2L1nSf+0jCzQSYMSMX3EizotTHbiRknHIvwuWUX4fS56OONKwvKJ/rTT2N2LhxORwNLgdDvQ6Yz452UQ2aqvD4W6oc5sm1kW2xeAaWQHqNu1nka1EWTlXnarFiGj4hkbHyKOUhMi//F/+/dfIv3UdvPk7ceRfe9KiHE4CXpRkj6L8C94gMlFX8RtHREf+rWrOyMirFOVfZetfL/+KWUqk5gqtnEoQj+SOvBgdXxdrFslzRXi79/nQBT+iPBuKgfw7NXVF+Evwbc3S2N9Ml7VLbf4SdIxQZf7FECL20hC5/GsPIf/+yd7ZxzZRxnH8TFZf0FBFEe+cG6hRIy4jaqaZ6LRRp86wyZKVqPENnS5T0albg5WpEd3cZkycoaOOOV8Ki4uBZZjIgkRwAVSUoQgB4Q98wRcyERMFVPR7d7s+17vr9Xnau/Zuu8/zPL/n6XP9o2u2ru19+m1IejXK1zxb7X77N5n8C/jQpEkhXvWIP5bs60cxSv7FAXkYf/BmB9DvauXfVm34r6/UOvkX3Ls6Eo5Gw5F92Eo3+ffxhp07dw60DwQbbn3zhcOHjx594eib/YePfvjh4cMt/Z2dLxzp/PTo4c5M5N8zKmpNSF/+Bf/e+fLpJgJRuRGOl39BCYP8y9//w2g4ugHBvxnLv6zvPd2WhHNeev4lT/7NDNZH8mkqTguFlkyzTP6VKZf70+HVK48cWbk6XLcVm+Qge/IvJRyIUsLZyIMS72iKfov87ggVy6YS9dcg+JdZ/p3dp2G2jHaXM8TZ8u9FlDjlb5NZ/v2ho2P0/Q5W+RdMq6ycpt/lGFFUX3BZYeWJhWddpnJ+UVIm/0LNqX840jt29iDycP1Mv53y7yeDapOtG7G/KxD7m13591ZKWK/bSEnm8i/P5zX/YCz/krNEazEZyr++1B1kFtkQef7Qj4OD+ObXwd/Kr7rqCkHQyL+mFCiFAxr1lzX513r5FwwfEMXfUbi/P1sg//LRDVFBCI9EBelshiAI0IHDgoBt1X0GTX4wHvv7/N5oxdBPkz35l17+LaqS5d+qIqvl3/xXdu16pdBy+ZewapVO/tWz9cbAmECwVSP/grkQfOeazQ6Sf/HRhdQNj2vOkX8JRP7NYvIvJWNqDtTefBSzrpN/+bKumGnyr5AnIBnIn+QbjxD+60eaEK6UMvm3cCLJv4ls2zMF7CGxv5kk/8L9bQ4dFF3fULQqtDSOw+Xfi5vaDq2P7DuEtj4cabo4W/Lvir74mdWCgb4Vt89PgpEa2T5Jot1IjZTc37Xx3F+U9oJ8h8q/DaQaYHfyr48SB8q/ACZiEjhwPSUcI3nG8Mnk3/sWLvzujksANF8fqnqJGUMl/84wGxnJv9FIS3Gxo+RfyuRf8FLYwIyRhDJKWL4mzI3y70xKMpN/17zaes/U1tap97S+usaZ8i8tLpV/FebN08/6ExplT0w7edqSGj5R/uVrlmD7iTIi/4q6L9FXFRcYVewI/zWXf086KcvyL9F8ixY3V5XV1pY1h4pwSRv9a7/8S6J/pXtKCv5ddZdEd4L8++uZhXTJvwFKbEv+tZFdvf179xpE/p5Khrn8Cyaw/Juz5N8mSjz5Vy3/kujfpMm/qJI8CTHiiRocSvq8ska6CmcjeRrwDYnbt99fhf8XKeXflzF275YXevnXlEKp2i//vkn9/1iV297bKsX+Bn3AIvlXiOzvRxsReF7xDYQRbKzsj/LOem7ko8TweTXOsqHr4BjRi79+/QpwNuHJvxNB/mXFfvk31KWsukJWyr8Eq+TfzUNNFXU92uTfzevqKpp6cpv8S2B5r571mdwCye19DcWkotmf/Bvse5viFHxFTcw3SSFWg9hfIv3KuFX+lfj6hseuljrWZId0m+XfWBUvPRzFqt1v/5ok//JdsVgXr0n+9Zsk/4pN7KzvUx1vxq4XSy2Uf8G936xc+Q02mOXforj8Oz0I8XcgGGy442hnZ+exY8c6RW4vR8E6Trry75+bQqZkIv+Cfy+zQv5lwGb5twSDMvmX/MJur6nasB1/x1bIv0iJ/5ui30vkX2M8+TcX8i/BQvlXHf07d275VlA+d+4V5Ahd8m8penry7z5KOBsxMn+BdovIv4G6zQkxvxpK0pB/V1DC6bFT/p2dqfzLarvUUsI5BEn+7RgdRVQnhfxLB8dIYszvZRiK8psy+ZfYv0VlbfuPlxnJi820U/5NiP3t3Ti4fD1ifzOUf5muayPvUGJB8i+fV3U/puTy7ycLFnySRP4FPr9pRc9U/hUih4TvRfn3N2HLVVdtEfIM5d8CaehRdjnQfXz3zWeT2F9K+ZdQabn8Cz6A+3vggwMfYGlB8q8Q2RAOj0QCURAOhzECkZFweENEUN1nO+e9qsT+nvdlpK0Osb+e/Est/4JYLS9GM8V8fkvlX5D/+ef59sm/oDul/AvG5N+2G+/WyL+pcVTy73pKnCP/5j7591SMVAHArLl8eXGqFhelOO0i/kOqJ+qvkf5bX4Urmcu/hfGFi+XfHoqukn+L4wWW6JQpaxeQ0F/0tOXfp/5RjN8aofmga+Tf++4bqgiH10fwxQGRiqHEI5yNkC9UDc5bfmQ+sEz+hfur4vWCfEfKvwnOb4PRSJn8O5Hl3+RIt+EmmsZ+G/IM89lMkn//OO5MKfNX1H2V0F9l5cM6G8m/QnjflcUOk3/pk38vCuNH8OTfXMu/Uy9G0PaiRVPFhSf/5lD+LSjQz/oTGrVI/n23S5/82/Uukn9rVfLvFNLFBsRZcYIR/msi/x586qmD2ZZ/SbxvUezZxc/Gioj3m/XkX9ALSUy+w/oWrert1su/v2+S/F65k5XSxjrL445tyb82sr8F5q8ZnvzryOTf9yjx5F+V/Avr1zT5F0NJ/i2tRqwveQqpA0cQDlxdytkE6+/OnSawyL8gK/LvQ0cfocIg0Z18ONUa+VdYvb+/dSQs5yHINTzSCvtXEJz13IhJ/qXEtttgI+T0BwpBve3Jv578a6n8+4Rq6WT5d3hdRUVj3RCRf1W7OUv+lfGhi43Iv59RNHb5V3J73xKHUR07uMB++Xdgxts0+VtdJPa3qCv81dmahzO3y78pYTpXwC7/NtfyUmBLNZi0ydX2r1ny73O1tc8ZJP+io2jlX//YUcABv4+q+TlAnoj1ouj4vNRC+ZeQQfLvdJzCm44+XZR/j0GFPSZOAAVIF9KXf4/76OQ3TPHkX835B1b5F5TV1ED9NUYV2GLeFfmXBk/+nTjyb3li9i8gG/KERp/8e0Ea8u9DlHA28iAVRP6NNl1zPVAH/6pbWsm/z1DCGeD05F8W2yVECecQrgXfdPz21+LFo7mTf2UuIYU++ZfYv/4qQbF/V+cttlP+Vcf+7l5EYn8zlX+DlHA2ciElmcu/BGP5F6xdi5I0+ReY1/TlXwL//fLl3wtCY3l5m+b2Er9XTYF6m8i/XxD1lzL5t1IqSrdD/n1zVBR/fx62Rv6F/TsyEgmjjKwGmHABRVDfZ4OLlNjfa7+KVqz7abIn/7LIv6DrYZ5/uAsLa+VfkJ9faKP8C2jk38aAIAiBtqYz9PIv4n0xHp2LgYXRcJD8+x8lzpF/45xgmvzLgC3Jvw7BWP4tJArwhEn+LSb+r8w2XexvcXry7+wHliqEyrqWukj+LekZqmtsk97LL8me/Bt3mdqXr/9vvpXy74JvNe4vlfz7rkQW5V+S+jvOkn+dwCmU2ClKLATf3aHk/cq2L2axA588oXA2Iv6mRg+9VVzsNPk3nvz7tyf/ukL+nXUPxpo10iIRzoW4Tf5l/9n45iU4TaeVf3GblzRjm8i/sugrdwwi/k6Ry4ptJvJve3u25V/i+eo5n0xZkn/B7t2LXu3bs2fP4MZVvbjYLbu/RP79oBCMab6ALMgldA5UUOLG5F9a3Cj/0uLG5N/xLP/Swiz/qqJ/kyb/As4h2CL/MsAk/9pIYp77vKDfZ538C/hAa38kkJdAILKyNcA77INRTpB/nYBGjyNDm5XpQjz5lzMg9/KvGufKvz3DQ4G2urq6ps0q+Re766TddcO5kn99aABFnjgA99fG5F+lERVYXTEWcDaCm+Jvp/zyXXXsb6TFMNnpUjfKv7TYm/xbHXuuqqxKdH/db/8mlX8BL/WE5F80eL765F/5kF/Wf1mfVxw/xv6Rkf2G4b++0qzJv0Wk6i8CDkxvCA4MBAd2NsjJv0j7xRgTgOUldtKVf/98BXqvJ/+yyb8lrPIvT6oeEtiSAk/+9eRfDRww1H7lPdVuOUXy7wXomFwq/7KA5+9tQxfL1i8KBpqWEk/+TUf+deNr97Hk379GRztymfyLBkhRtlBVyb8M2Cn/qj/OTmJ/M5N/mYITbOQZSqyRf3lz+Xc5VibJvz6TmmnyL7l9tbUoeNQU9PJvARF+UaShqYBjxDjut9J6+Xf4QL80WyT/Ah5Bvyo2RHnNfYbYX5mWSKBx86zJnvzLKv/6m3m+2W+D/AscIP/euKWxcUvT1rvvdnny7xmUOEb+Jem+Jsm/tsq/+sBfZc818q+KcSH/9phWDug0X2B0iV3+Pen1pSreXeps+Xehho8X9gBMGjgbGVN/B/pW3D4fUMm/Mwzl3xnxIxxQ3N9f0DG9fks+hfxLyKb826BUdAygmbOT/OtPNrtb/i2h6PbKv4j9vfUSoOT8ipPk/KKgyQdsln+FQKSluNjB8q+X/OsS+VfkHkn89eRfF8i/ebXNZUbyb1lzrepng907A4O0+EUwQyxTPtn2WjL59wKQk+RfcD6aNJMOpJpV+RfZv6s2bly0cRXcX4luDCL/DudL5i9N8u+vlHjy74STf73kX1fJv7B+TZN/xcmTfx0r/3Yj9re9wLK0WfJ+cxihjwnwQjjMO+1bEZQXf1LHmMjyb5LcX3LIk389+Xfiyb/LEPHbtK6pYojIv1gsa2rDbl3Fslwn/wKS/AtsSf6V7V60sUkygBPUX3Fhs/xbMO9tSvl3kkIIsb/6hzLXJv/SwnSugF3+rY7FQrH66upxYP+yyb/AD73XIPkXSAKwvzR9+bc3Gu3FpGfXi6WOSv5tGNi5c6C9PSjKvyT0F6tOTFgeK+9MU/59ZtMbb3jybzrJvyUs8i/geR7VNPnXk389+Tcd+ZcE/CZ2FLLNkPxbmp78+1rq5iD5V6hYNlUxfAFZkkte8u8Ek393zOno6JjjvORfVKIBO1D+FWN/W667bjzJvwFK7E7+JbAn/5KFne/a5lNQkJ78S1TfSqmJ3Q3yLzLRBF5QXtQIYUF7n0mxvxedd+6+trZ110ye7Mm/jPIvqC8rq/eNW/kXnKHd4Bhwo/zrBE5R4aDk31PVa9fIv4Wul397xA5MKweI5otBKCYL9HTk36cQ+6vG4fLvixpuVSYNnI3I0bXzlh+ZDyjk3xmUyb+Jub9wf50r/xI03m/2kn/9KfxfF8u/VHA2svC7J+WoX1SfOKsygJV9cXA2IkT3XVmcE/mXHafIv06QjRwq/86a5cm/bpF/83gMnfyrOXkn6b0Y8owhO7/ECMZ6z9rXnCT/no+OZgR2UbIm/xL9F/R2G/3N/zqHBP/KXSlo5EAhB66mhBvnePKvQfJvjuTfBynx5F+1/Euif42Tf8/0kn8dSPzhfONg0tjfjIQTQZ8rxqM5Uv5NwI8+MeVfY7zkX0/+ncjyr6j/NkkZv0T+JbtDwzmTfzHkCZXIv5/ZkvybGP0rm8BkxhCLzcm/wT64v0zyb31zmMT+koppYsi/dOcK2OVfLZvWuNb+NZF/CUT+vUTpWvlX3sws+be7tRXyryGfl9op/zLy+PTgQLAh2CAm/8rir5T/K0q/GNLFNOXf4z56I5fyr0NglH9LMBiTfwnm8m+Daccg8u/l0njob8PJvfIvLZ78mzL5t1y1j0ol/8L7nRjJv4G6YaL7qvN/Sb9+fMm/szOTfxlw42t3Wf7dMWdO/Y5cyr8k51cumOLdqcm/3WLs7+Hrxpf8m0dJruVfM/2XhP/aL/8WkEoKWaad/FuJjqam0lL5FwxjWCf/Enig3yXOXMveQOOyWZM9+Ted5N+ZodDM8Zv8K+LJvwyMb/lXxkv+/b+dO3ZpIwzjOP4ucSmVUujQUtoUOnVxt2Bb6JzV0DVTR5d2aZcO0qF06lDE4GbM6p8gig6C4CI4uLj4D+gk6KvH5VETL88F37vnvft+colw5+LgkLsvv2LjX6WQj3PaS0tRxb8NJRfQ1ezvn97GRUcV/3rK+PdW+3s+/zKi+FcUFf9mi3v5t/T499jP/mq4gP7/mpkh/iX+Jf6tX/ybkvhXSPyrsblvKP5VKCr+Fd17/ud3XisQ/xL/Go1/vykR/96Jf+9b/k0Q/xo02Ejpt/3sb4D4d9R95ucxxL/1Xf4l/iX+Jf69abCdurKV1JIS/8rZEpd/hSz/Bol/lVxA62+eqsjftvrh6OOTYbVb/s0wWfxbofo3V/wrhuNfkT/+VThszBqKf5sLC03/2fTLv/+Smd80//XH4ITL6WxxeZn4N//y76TxL8u/KduBVozxr0z/yvKvf8t55fJvXeLf73Ofs1Uu/n1M/Dsu/m0deCXGvwr24t/udr+38f4T8W8Z8a+CheXfK1Z6xDmd/PGvjsS/v3+8+Ppzetp8/Ftl6vgXUMgf/9rL2xAn9VfRimu8Wu+vfemM5QJ6lDB+4wsILjv+/XvzmgMip49/9azEvwDwEHxApWAnXNQKFv8CQIWUn28AsCmm+Fcrd/y702q9TQ//vn7FW/8aMKXRXZx1AGD8iWsa+w5LLySfDgAQmD7+5T5HwfTxL6qP+BcZiH8RDQtfRS2Yb/f2Oh3iX8AGC8u/QAbiXwAoyHXaO+7lf8dVHPEvgDoi/gVA/DuK856djvLuhPp3UlM6uw4AjD9xldI3PQY/5QrxLwBMgPi3Ooh/nbsEijgz4sWfyq0AAAAASUVORK5CYII=');\n}\n}\n.vti__flag.np {\n  background-color: transparent;\n}\n",
	    map: undefined,
	    media: undefined
	  }), inject("data-v-a6b6dff4_1", {
	    source: ".custom-tel-input[data-v-a6b6dff4] {\n  display: flex;\n  align-items: center;\n}\n.country-code[data-v-a6b6dff4] {\n  width: 75px;\n}\nli.last-preferred[data-v-a6b6dff4] {\n  border-bottom: 1px solid #cacaca;\n}\n.vti__flag[data-v-a6b6dff4] {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=vue-tel-input-vuetify.vue.map */",
	    map: {
	      "version": 3,
	      "sources": ["/Users/Kafilah/experiment/vue-tel-input/src/components/vue-tel-input-vuetify.vue", "vue-tel-input-vuetify.vue"],
	      "names": [],
	      "mappings": "AAmlBA;EACA,aAAA;EACA,mBAAA;ACllBA;ADqlBA;EACA,WAAA;ACllBA;ADqlBA;EACA,gCAAA;ACllBA;ADolBA;EACA,iBAAA;EACA,gBAAA;ACjlBA;;AAEA,oDAAoD",
	      "file": "vue-tel-input-vuetify.vue",
	      "sourcesContent": ["<template>\n  <div class=\"custom-tel-input\">\n    <div class=\"country-code\">\n      <v-select\n        v-model=\"countryCode\"\n        @change=\"onChangeCountryCode\"\n        :items=\"sortedCountries\"\n        item-text=\"name\"\n        item-value=\"dialCode\"\n        return-object\n      >\n        <template slot=\"selection\">\n          <div :class=\"activeCountry.iso2.toLowerCase()\" class=\"vti__flag\" />\n        </template>\n        <template slot=\"item\" scope=\"data\">\n          <div :class=\"data.item.iso2.toLowerCase()\" class=\"vti__flag\" />\n          {{ data.item.name }} {{ `+${data.item.dialCode}` }}\n        </template>\n      </v-select>\n    </div>\n    <v-text-field\n      ref=\"input\"\n      type=\"tel\"\n      v-model=\"phone\"\n      label=\"Enter a Phone Number\"\n      :autofocus=\"autofocus\"\n      :name=\"name\"\n      :disabled=\"disabled\"\n      :required=\"required\"\n      :autocomplete=\"autocomplete\"\n      :id=\"inputId\"\n      :maxlength=\"maxLen\"\n      :tabindex=\"inputOptions && inputOptions.tabindex ? inputOptions.tabindex : 0\"\n      @input=\"onInput\"\n      @blur=\"onBlur\"\n      @keyup.enter=\"onEnter\"\n      @keyup.space=\"onSpace\"\n    ></v-text-field>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue';\nimport PhoneNumber from 'awesome-phonenumber';\nimport { VSelect, VTextField } from 'vuetify/lib';\nimport utils, { getCountry, setCaretPosition } from '../utils';\n\nfunction getDefault(key) {\n  const value = utils.options[key];\n  if (typeof value === 'undefined') {\n    return utils.options[key];\n  }\n  return value;\n}\n\n// Polyfill for Event.path in IE 11: https://stackoverflow.com/a/46093727\nfunction getParents(node, memo) {\n  const parsedMemo = memo || [];\n  const { parentNode } = node;\n  if (!parentNode) {\n    return parsedMemo;\n  }\n  return getParents(parentNode, parsedMemo.concat(parentNode));\n}\n\nexport default {\n  name: 'VueTelInputVuetify',\n  components: {\n    VSelect,\n    VTextField,\n  },\n  directives: {\n    // Click-outside by BosNaufal: https://github.com/BosNaufal/vue-click-outside\n    'click-outside': {\n      bind(el, binding, vNode) {\n        // Provided expression must evaluate to a function.\n        if (typeof binding.value !== 'function') {\n          const compName = vNode.context.name;\n          let warn = `[Vue-click-outside:] provided expression ${binding.expression} is not a function, but has to be`;\n          if (compName) {\n            warn += `Found in component ${compName}`;\n          }\n          console.warn(warn);\n        }\n        // Define Handler and cache it on the element\n        const { bubble } = binding.modifiers;\n        const handler = (e) => {\n          // Fall back to composedPath if e.path is undefined\n          const path = e.path\n            || (e.composedPath ? e.composedPath() : false)\n            || getParents(e.target);\n          if (\n            bubble\n            || (path.length && !el.contains(path[0]) && el !== path[0])\n          ) {\n            binding.value(e);\n          }\n        };\n        el.__vueClickOutside__ = handler;\n        // add Event Listeners\n        document.addEventListener('click', handler);\n      },\n      unbind(el) {\n        // Remove Event Listeners\n        document.removeEventListener('click', el.__vueClickOutside__);\n        el.__vueClickOutside__ = null;\n      },\n    },\n  },\n  props: {\n    value: {\n      type: String,\n      default: '',\n    },\n    placeholder: {\n      type: String,\n      default: () => getDefault('placeholder'),\n    },\n    disabledFetchingCountry: {\n      type: Boolean,\n      default: () => getDefault('disabledFetchingCountry'),\n    },\n    disabled: {\n      type: Boolean,\n      default: () => getDefault('disabled'),\n    },\n    disabledFormatting: {\n      type: Boolean,\n      default: () => getDefault('disabledFormatting'),\n    },\n    mode: {\n      type: String,\n      default: () => getDefault('mode'),\n    },\n    invalidMsg: {\n      type: String,\n      default: () => getDefault('invalidMsg'),\n    },\n    required: {\n      type: Boolean,\n      default: () => getDefault('required'),\n    },\n    allCountries: {\n      type: Array,\n      default: () => getDefault('allCountries'),\n    },\n    defaultCountry: {\n      // Default country code, ie: 'AU'\n      // Will override the current country of user\n      type: String,\n      default: () => getDefault('defaultCountry'),\n    },\n    enabledCountryCode: {\n      type: Boolean,\n      default: () => getDefault('enabledCountryCode'),\n    },\n    enabledFlags: {\n      type: Boolean,\n      default: () => getDefault('enabledFlags'),\n    },\n    preferredCountries: {\n      type: Array,\n      default: () => getDefault('preferredCountries'),\n    },\n    onlyCountries: {\n      type: Array,\n      default: () => getDefault('onlyCountries'),\n    },\n    ignoredCountries: {\n      type: Array,\n      default: () => getDefault('ignoredCountries'),\n    },\n    autocomplete: {\n      type: String,\n      default: () => getDefault('autocomplete'),\n    },\n    autofocus: {\n      type: Boolean,\n      default: () => getDefault('autofocus'),\n    },\n    name: {\n      type: String,\n      default: () => getDefault('name'),\n    },\n    wrapperClasses: {\n      type: [String, Array, Object],\n      default: () => getDefault('wrapperClasses'),\n    },\n    inputClasses: {\n      type: [String, Array, Object],\n      default: () => getDefault('inputClasses'),\n    },\n    inputId: {\n      type: String,\n      default: () => getDefault('inputId'),\n    },\n    dropdownOptions: {\n      type: Object,\n      default: () => getDefault('dropdownOptions'),\n    },\n    inputOptions: {\n      type: Object,\n      default: () => getDefault('inputOptions'),\n    },\n    maxLen: {\n      type: Number,\n      default: () => getDefault('maxLen'),\n    },\n    validCharactersOnly: {\n      type: Boolean,\n      default: () => getDefault('validCharactersOnly'),\n    },\n    dynamicPlaceholder: {\n      type: Boolean,\n      default: () => getDefault('dynamicPlaceholder'),\n    },\n  },\n  data() {\n    return {\n      phone: '',\n      activeCountry: { iso2: '' },\n      open: false,\n      finishMounted: false,\n      selectedIndex: null,\n      typeToFindInput: '',\n      typeToFindTimer: null,\n      cursorPosition: 0,\n      countryCode: null,\n    };\n  },\n  computed: {\n    parsedPlaceholder() {\n      if (!this.finishMounted) {\n        return '';\n      }\n      if (this.dynamicPlaceholder) {\n        const mode = this.mode || 'international';\n        return PhoneNumber.getExample(\n          this.activeCountry.iso2,\n          'mobile',\n        ).getNumber(mode);\n      }\n      return this.placeholder;\n    },\n    parsedMode() {\n      if (this.mode) {\n        if (!['international', 'national'].includes(this.mode)) {\n          console.error('Invalid value of prop \"mode\"');\n        } else {\n          return this.mode;\n        }\n      }\n      if (!this.phone || this.phone[0] !== '+') {\n        return 'national';\n      }\n      return 'international';\n    },\n    filteredCountries() {\n      // List countries after filtered\n      if (this.onlyCountries.length) {\n        return this.getCountries(this.onlyCountries);\n      }\n      if (this.ignoredCountries.length) {\n        return this.allCountries.filter(\n          ({ iso2 }) => !this.ignoredCountries.includes(iso2.toUpperCase())\n            && !this.ignoredCountries.includes(iso2.toLowerCase()),\n        );\n      }\n      return this.allCountries;\n    },\n    sortedCountries() {\n      // Sort the list countries: from preferred countries to all countries\n      const preferredCountries = this.getCountries(this.preferredCountries).map(\n        country => ({ ...country, preferred: true }),\n      );\n      return [...preferredCountries, ...this.filteredCountries];\n    },\n    phoneObject() {\n      const result = PhoneNumber(this.phone, this.activeCountry.iso2).toJSON();\n      Object.assign(result, {\n        isValid: result.valid,\n        country: this.activeCountry,\n      });\n      return result;\n    },\n    phoneText() {\n      let key = 'input';\n      if (this.phoneObject.valid) {\n        key = this.parsedMode;\n      }\n      return this.phoneObject.number[key] || '';\n    },\n  },\n  watch: {\n    // eslint-disable-next-line func-names\n    'phoneObject.valid': function (value) {\n      if (value) {\n        this.phone = this.phoneText;\n      }\n      this.$emit('validate', this.phoneObject);\n      this.$emit('onValidate', this.phoneObject); // Deprecated\n    },\n    value() {\n      this.phone = this.value;\n    },\n    open(isDropdownOpened) {\n      // Emit open and close events\n      if (isDropdownOpened) {\n        this.$emit('open');\n      } else {\n        this.$emit('close');\n      }\n    },\n    phone(newValue, oldValue) {\n      if (this.validCharactersOnly && !this.testCharacters()) {\n        this.$nextTick(() => {\n          this.phone = oldValue;\n        });\n      } else if (newValue) {\n        if (newValue[0] === '+') {\n          const code = PhoneNumber(newValue).getRegionCode();\n          if (code) {\n            this.activeCountry = this.findCountry(code) || this.activeCountry;\n          }\n        }\n      }\n      // Reset the cursor to current position if it's not the last character.\n      if (this.cursorPosition < oldValue.length) {\n        this.$nextTick(() => {\n          setCaretPosition(this.$refs.input, this.cursorPosition);\n        });\n      }\n    },\n    activeCountry(value) {\n      if (value && value.iso2) {\n        this.$emit('country-changed', value);\n      }\n    },\n  },\n  mounted() {\n    this.initializeCountry()\n      .then(() => {\n        if (\n          !this.phone\n          && this.inputOptions\n          && this.inputOptions.showDialCode\n          && this.activeCountry.dialCode\n        ) {\n          this.phone = `+${this.activeCountry.dialCode}`;\n        }\n        this.countryCode = this.activeCountry;\n        this.$emit('validate', this.phoneObject);\n        this.$emit('onValidate', this.phoneObject); // Deprecated\n      })\n      .catch(console.error)\n      .finally(() => {\n        this.finishMounted = true;\n      });\n  },\n  created() {\n    if (this.value) {\n      this.phone = this.value.trim();\n    }\n  },\n  methods: {\n    initializeCountry() {\n      return new Promise((resolve) => {\n        /**\n         * 1. If the phone included prefix (+12), try to get the country and set it\n         */\n        if (this.phone && this.phone[0] === '+') {\n          const activeCountry = PhoneNumber(this.phone).getRegionCode();\n          if (activeCountry) {\n            this.choose(activeCountry);\n            resolve();\n            return;\n          }\n        }\n        /**\n         * 2. Use default country if passed from parent\n         */\n        if (this.defaultCountry) {\n          const defaultCountry = this.findCountry(this.defaultCountry);\n          if (defaultCountry) {\n            this.choose(defaultCountry);\n            resolve();\n            return;\n          }\n        }\n        const fallbackCountry = this.findCountry(this.preferredCountries[0])\n          || this.filteredCountries[0];\n        /**\n         * 3. Check if fetching country based on user's IP is allowed, set it as the default country\n         */\n        if (!this.disabledFetchingCountry) {\n          getCountry()\n            .then((res) => {\n              this.activeCountry = this.findCountry(res) || this.activeCountry;\n              console.log(this.activeCountry);\n            })\n            .catch((error) => {\n              console.warn(error);\n              /**\n               * 4. Use the first country from preferred list (if available) or all countries list\n               */\n              this.choose(fallbackCountry);\n            })\n            .finally(() => {\n              resolve();\n            });\n        } else {\n          /**\n           * 4. Use the first country from preferred list (if available) or all countries list\n           */\n          this.choose(fallbackCountry);\n          resolve();\n        }\n      });\n    },\n    /**\n     * Get the list of countries from the list of iso2 code\n     */\n    getCountries(list = []) {\n      return list\n        .map(countryCode => this.findCountry(countryCode))\n        .filter(Boolean);\n    },\n    findCountry(iso = '') {\n      return this.allCountries.find(\n        country => country.iso2 === iso.toUpperCase(),\n      );\n    },\n    getItemClass(index, iso2) {\n      const highlighted = this.selectedIndex === index;\n      const lastPreferred = index === this.preferredCountries.length - 1;\n      const preferred = this.preferredCountries.some(\n        c => c.toUpperCase() === iso2,\n      );\n      return {\n        highlighted,\n        'last-preferred': lastPreferred,\n        preferred,\n      };\n    },\n    choose(country, toEmitInputEvent = false) {\n      this.activeCountry = country || this.activeCountry || {};\n      if (\n        this.phone\n        && this.phone[0] === '+'\n        && this.activeCountry.iso2\n        && this.phoneObject.number.national\n      ) {\n        // Attach the current phone number with the newly selected country\n        this.phone = PhoneNumber(\n          this.phoneObject.number.national,\n          this.activeCountry.iso2,\n        ).getNumber('international');\n      } else if (\n        this.inputOptions\n        && this.inputOptions.showDialCode\n        && country\n      ) {\n        // Reset phone if the showDialCode is set\n        this.phone = `+${country.dialCode}`;\n      }\n      if (toEmitInputEvent) {\n        this.$emit('input', this.phoneText, this.phoneObject);\n        this.$emit('onInput', this.phoneObject); // Deprecated\n      }\n    },\n    testCharacters() {\n      const re = /^[()\\-+0-9\\s]*$/;\n      return re.test(this.phone);\n    },\n    onInput(e) {\n      if (this.validCharactersOnly && !this.testCharacters()) {\n        return;\n      }\n      // this.$refs.input.setCustomValidity(\n      //   this.phoneObject.valid ? \"\" : this.invalidMsg\n      // );\n      // Returns response.number to assign it to v-model (if being used)\n      // Returns full response for cases @input is used\n      // and parent wants to return the whole response.\n      this.$emit('input', this.phoneText, this.phoneObject);\n      this.$emit('onInput', this.phoneObject); // Deprecated\n      // Keep the current cursor position just in case the input reformatted\n      // and it gets moved to the last character.\n      if (e && e.target) {\n        this.cursorPosition = e.target.selectionStart;\n      }\n    },\n    onBlur() {\n      this.$emit('blur');\n      this.$emit('onBlur'); // Deprecated\n    },\n    onEnter() {\n      this.$emit('enter');\n      this.$emit('onEnter'); // Deprecated\n    },\n    onSpace() {\n      this.$emit('space');\n      this.$emit('onSpace'); // Deprecated\n    },\n    focus() {\n      this.$refs.input.focus();\n    },\n    toggleDropdown() {\n      if (this.disabled) {\n        return;\n      }\n      this.open = !this.open;\n    },\n    clickedOutside() {\n      this.open = false;\n    },\n    keyboardNav(e) {\n      if (e.keyCode === 40) {\n        // down arrow\n        e.preventDefault();\n        this.open = true;\n        if (this.selectedIndex === null) {\n          this.selectedIndex = 0;\n        } else {\n          this.selectedIndex = Math.min(\n            this.sortedCountries.length - 1,\n            this.selectedIndex + 1,\n          );\n        }\n        const selEle = this.$refs.list.children[this.selectedIndex];\n        if (\n          selEle.offsetTop + selEle.clientHeight\n          > this.$refs.list.scrollTop + this.$refs.list.clientHeight\n        ) {\n          this.$refs.list.scrollTop = selEle.offsetTop\n            - this.$refs.list.clientHeight\n            + selEle.clientHeight;\n        }\n      } else if (e.keyCode === 38) {\n        // up arrow\n        e.preventDefault();\n        this.open = true;\n        if (this.selectedIndex === null) {\n          this.selectedIndex = this.sortedCountries.length - 1;\n        } else {\n          this.selectedIndex = Math.max(0, this.selectedIndex - 1);\n        }\n        const selEle = this.$refs.list.children[this.selectedIndex];\n        if (selEle.offsetTop < this.$refs.list.scrollTop) {\n          this.$refs.list.scrollTop = selEle.offsetTop;\n        }\n      } else if (e.keyCode === 13) {\n        // enter key\n        if (this.selectedIndex !== null) {\n          this.choose(this.sortedCountries[this.selectedIndex]);\n        }\n        this.open = !this.open;\n      } else {\n        // typing a country's name\n        this.typeToFindInput += e.key;\n        clearTimeout(this.typeToFindTimer);\n        this.typeToFindTimer = setTimeout(() => {\n          this.typeToFindInput = '';\n        }, 700);\n        // don't include preferred countries so we jump to the right place in the alphabet\n        const typedCountryI = this.sortedCountries\n          .slice(this.preferredCountries.length)\n          .findIndex(c => c.name.toLowerCase().startsWith(this.typeToFindInput));\n        if (typedCountryI >= 0) {\n          this.selectedIndex = this.preferredCountries.length + typedCountryI;\n          const selEle = this.$refs.list.children[this.selectedIndex];\n          const needToScrollTop = selEle.offsetTop < this.$refs.list.scrollTop;\n          const needToScrollBottom = selEle.offsetTop + selEle.clientHeight\n            > this.$refs.list.scrollTop + this.$refs.list.clientHeight;\n          if (needToScrollTop || needToScrollBottom) {\n            this.$refs.list.scrollTop = selEle.offsetTop - this.$refs.list.clientHeight / 2;\n          }\n        }\n      }\n    },\n    reset() {\n      this.selectedIndex = this.sortedCountries\n        .map(c => c.iso2)\n        .indexOf(this.activeCountry.iso2);\n      this.open = false;\n    },\n    onChangeCountryCode() {\n      this.choose(this.countryCode, true);\n    },\n  },\n};\n</script>\n\n<style src=\"../assets/sprite.css\"></style>\n<style lang=\"scss\" scoped>\n.custom-tel-input {\n  display: flex;\n  align-items: center;\n}\n\n.country-code {\n  width: 75px;\n}\n\nli.last-preferred {\n  border-bottom: 1px solid #cacaca;\n}\n.vti__flag {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n</style>\n", ".custom-tel-input {\n  display: flex;\n  align-items: center;\n}\n\n.country-code {\n  width: 75px;\n}\n\nli.last-preferred {\n  border-bottom: 1px solid #cacaca;\n}\n\n.vti__flag {\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=vue-tel-input-vuetify.vue.map */"]
	    },
	    media: undefined
	  });
	};
	/* scoped */


	var __vue_scope_id__ = "data-v-a6b6dff4";
	/* module identifier */

	var __vue_module_identifier__ = undefined;
	/* functional template */

	var __vue_is_functional_template__ = false;
	/* style inject SSR */

	/* style inject shadow dom */

	var __vue_component__ = normalizeComponent({
	  render: __vue_render__,
	  staticRenderFns: __vue_staticRenderFns__
	}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	function install(Vue) {
	  var customOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  if (install.installed) return;

	  if (!customOptions || !customOptions.vuetify) {
	    return;
	  }

	  var vuetifyFramework = customOptions.vuetify;
	  install.installed = true;
	  install.vuetify = vuetifyFramework;
	  utils.options = _objectSpread$2({}, defaultOptions, {}, customOptions);
	  console.log(vuetifyFramework);
	  Vue.use(vuetifyFramework);
	  Vue.component("vue-tel-input-vuetify", __vue_component__);
	}
	var plugin = {
	  install: install
	}; // Auto-install

	var GlobalVue = null;

	if (typeof window !== "undefined") {
	  GlobalVue = window.Vue;
	} else if (typeof global !== "undefined") {
	  GlobalVue = global.Vue;
	}

	if (GlobalVue) {
	  GlobalVue.use(plugin);
	}

	exports.VueTelInputVuetify = __vue_component__;
	exports.default = plugin;
	exports.install = install;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
