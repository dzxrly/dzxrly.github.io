function me(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: je } = Object.prototype,
  { getPrototypeOf: Z } = Object,
  H = ((e) => (t) => {
    const n = je.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  A = (e) => ((e = e.toLowerCase()), (t) => H(t) === e),
  I = (e) => (t) => typeof t === e,
  { isArray: C } = Array,
  _ = I('undefined');
function He(e) {
  return (
    e !== null &&
    !_(e) &&
    e.constructor !== null &&
    !_(e.constructor) &&
    R(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ye = A('ArrayBuffer');
function Ie(e) {
  let t;
  return (
    typeof ArrayBuffer != 'undefined' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ye(e.buffer)),
    t
  );
}
const qe = I('string'),
  R = I('function'),
  Ee = I('number'),
  q = (e) => e !== null && typeof e == 'object',
  Me = (e) => e === !0 || e === !1,
  L = (e) => {
    if (H(e) !== 'object') return !1;
    const t = Z(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  ze = A('Date'),
  Je = A('File'),
  ve = A('Blob'),
  $e = A('FileList'),
  Ve = (e) => q(e) && R(e.pipe),
  We = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (R(e.append) &&
          ((t = H(e)) === 'formdata' ||
            (t === 'object' &&
              R(e.toString) &&
              e.toString() === '[object FormData]'))))
    );
  },
  Ke = A('URLSearchParams'),
  Ge = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function B(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == 'undefined') return;
  let r, s;
  if ((typeof e != 'object' && (e = [e]), C(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function we(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const be = (() =>
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : global)(),
  Se = (e) => !_(e) && e !== be;
function W() {
  const { caseless: e } = (Se(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && we(t, s)) || s;
      L(t[o]) && L(r)
        ? (t[o] = W(t[o], r))
        : L(r)
        ? (t[o] = W({}, r))
        : C(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && B(arguments[r], n);
  return t;
}
const Xe = (e, t, n, { allOwnKeys: r } = {}) => (
    B(
      t,
      (s, o) => {
        n && R(s) ? (e[o] = me(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Qe = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ze = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ye = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && Z(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  et = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tt = (e) => {
    if (!e) return null;
    if (C(e)) return e;
    let t = e.length;
    if (!Ee(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  nt = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array != 'undefined' && Z(Uint8Array)),
  rt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  st = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ot = A('HTMLFormElement'),
  it = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  se = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  at = A('RegExp'),
  Re = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    B(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  ct = (e) => {
    Re(e, (t, n) => {
      if (R(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (!!R(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ut = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return C(e) ? r(e) : r(String(e).split(t)), n;
  },
  lt = () => {},
  ft = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  J = 'abcdefghijklmnopqrstuvwxyz',
  oe = '0123456789',
  Oe = { DIGIT: oe, ALPHA: J, ALPHA_DIGIT: J + J.toUpperCase() + oe },
  dt = (e = 16, t = Oe.ALPHA_DIGIT) => {
    let n = '';
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function pt(e) {
  return !!(
    e &&
    R(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  );
}
const ht = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (q(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!('toJSON' in r)) {
            t[s] = r;
            const o = C(r) ? [] : {};
            return (
              B(r, (i, c) => {
                const p = n(i, s + 1);
                !_(p) && (o[c] = p);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  mt = A('AsyncFunction'),
  yt = (e) => e && (q(e) || R(e)) && R(e.then) && R(e.catch);
var a = {
  isArray: C,
  isArrayBuffer: ye,
  isBuffer: He,
  isFormData: We,
  isArrayBufferView: Ie,
  isString: qe,
  isNumber: Ee,
  isBoolean: Me,
  isObject: q,
  isPlainObject: L,
  isUndefined: _,
  isDate: ze,
  isFile: Je,
  isBlob: ve,
  isRegExp: at,
  isFunction: R,
  isStream: Ve,
  isURLSearchParams: Ke,
  isTypedArray: nt,
  isFileList: $e,
  forEach: B,
  merge: W,
  extend: Xe,
  trim: Ge,
  stripBOM: Qe,
  inherits: Ze,
  toFlatObject: Ye,
  kindOf: H,
  kindOfTest: A,
  endsWith: et,
  toArray: tt,
  forEachEntry: rt,
  matchAll: st,
  isHTMLForm: ot,
  hasOwnProperty: se,
  hasOwnProp: se,
  reduceDescriptors: Re,
  freezeMethods: ct,
  toObjectSet: ut,
  toCamelCase: it,
  noop: lt,
  toFiniteNumber: ft,
  findKey: we,
  global: be,
  isContextDefined: Se,
  ALPHABET: Oe,
  generateString: dt,
  isSpecCompliantForm: pt,
  toJSONObject: ht,
  isAsyncFn: mt,
  isThenable: yt,
};
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ae = m.prototype,
  Te = {};
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
  'ERR_INVALID_URL',
].forEach((e) => {
  Te[e] = { value: e };
});
Object.defineProperties(m, Te);
Object.defineProperty(Ae, 'isAxiosError', { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ae);
  return (
    a.toFlatObject(
      e,
      i,
      function (p) {
        return p !== Error.prototype;
      },
      (c) => c !== 'isAxiosError'
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
var Et = null;
function K(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ge(e) {
  return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function ie(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = ge(s)), !n && o ? '[' + s + ']' : s;
        })
        .join(n ? '.' : '')
    : t;
}
function wt(e) {
  return a.isArray(e) && !e.some(K);
}
const bt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function M(e, t, n) {
  if (!a.isObject(e)) throw new TypeError('target must be an object');
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, w) {
        return !a.isUndefined(w[d]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || l,
    o = n.dots,
    i = n.indexes,
    p =
      (n.Blob || (typeof Blob != 'undefined' && Blob)) &&
      a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError('visitor must be a function');
  function h(f) {
    if (f === null) return '';
    if (a.isDate(f)) return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m('Blob is not supported. Use a Buffer instead.');
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? p && typeof Blob == 'function'
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function l(f, d, w) {
    let b = f;
    if (f && !w && typeof f == 'object') {
      if (a.endsWith(d, '{}'))
        (d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (a.isArray(f) && wt(f)) ||
        ((a.isFileList(f) || a.endsWith(d, '[]')) && (b = a.toArray(f)))
      )
        return (
          (d = ge(d)),
          b.forEach(function (x, ke) {
            !(a.isUndefined(x) || x === null) &&
              t.append(
                i === !0 ? ie([d], ke, o) : i === null ? d : d + '[]',
                h(x)
              );
          }),
          !1
        );
    }
    return K(f) ? !0 : (t.append(ie(w, d, o), h(f)), !1);
  }
  const u = [],
    E = Object.assign(bt, {
      defaultVisitor: l,
      convertValue: h,
      isVisitable: K,
    });
  function S(f, d) {
    if (!a.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error('Circular reference detected in ' + d.join('.'));
      u.push(f),
        a.forEach(f, function (b, g) {
          (!(a.isUndefined(b) || b === null) &&
            s.call(t, b, a.isString(g) ? g.trim() : g, d, E)) === !0 &&
            S(b, d ? d.concat(g) : [g]);
        }),
        u.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError('data must be an object');
  return S(e), t;
}
function ae(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Y(e, t) {
  (this._pairs = []), e && M(e, this, t);
}
const xe = Y.prototype;
xe.append = function (t, n) {
  this._pairs.push([t, n]);
};
xe.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ae);
      }
    : ae;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + '=' + n(s[1]);
    }, '')
    .join('&');
};
function St(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']');
}
function Ne(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || St,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new Y(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf('#');
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
  }
  return e;
}
class Rt {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
var ce = Rt,
  Pe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Ot = typeof URLSearchParams != 'undefined' ? URLSearchParams : Y,
  At = typeof FormData != 'undefined' ? FormData : null,
  Tt = typeof Blob != 'undefined' ? Blob : null,
  gt = {
    isBrowser: !0,
    classes: { URLSearchParams: Ot, FormData: At, Blob: Tt },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
const Ce = typeof window != 'undefined' && typeof document != 'undefined',
  xt = ((e) => Ce && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator != 'undefined' && navigator.product
  ),
  Nt = (() =>
    typeof WorkerGlobalScope != 'undefined' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')();
var Pt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ce,
        hasStandardBrowserWebWorkerEnv: Nt,
        hasStandardBrowserEnv: xt,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  O = { ...Pt, ...gt };
function Ct(e, t) {
  return M(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ft(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function _t(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Fe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === '__proto__') return !0;
    const c = Number.isFinite(+i),
      p = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      p
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = _t(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Ft(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Bt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r;
    }
  return (n || JSON.stringify)(e);
}
const ee = {
  transitional: Pe,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        s = r.indexOf('application/json') > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(Fe(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return Ct(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const p = this.env && this.env.FormData;
          return M(c ? { 'files[]': t } : t, p && new p(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType('application/json', !1), Bt(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ee.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === 'json';
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === 'SyntaxError'
              ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
};
a.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  ee.headers[e] = {};
});
var te = ee;
const Dt = a.toObjectSet([
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
var Lt = (e) => {
  const t = {};
  let n, r, s;
  return (
    e &&
      e
        .split(
          `
`
        )
        .forEach(function (i) {
          (s = i.indexOf(':')),
            (n = i.substring(0, s).trim().toLowerCase()),
            (r = i.substring(s + 1).trim()),
            !(!n || (t[n] && Dt[n])) &&
              (n === 'set-cookie'
                ? t[n]
                  ? t[n].push(r)
                  : (t[n] = [r])
                : (t[n] = t[n] ? t[n] + ', ' + r : r));
        }),
    t
  );
};
const ue = Symbol('internals');
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function U(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(U) : String(e);
}
function Ut(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const kt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function v(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function jt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ht(e, t) {
  const n = a.toCamelCase(' ' + t);
  ['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const l = F(p);
      if (!l) throw new Error('header name must be a non-empty string');
      const u = a.findKey(s, l);
      (!u || s[u] === void 0 || h === !0 || (h === void 0 && s[u] !== !1)) &&
        (s[u || p] = U(c));
    }
    const i = (c, p) => a.forEach(c, (h, l) => o(h, l, p));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !kt(t)
        ? i(Lt(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Ut(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || v(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = F(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || v(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || v(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = U(s)), delete n[o];
          return;
        }
        const c = t ? jt(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = U(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(', ') : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ue] = this[ue] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = F(i);
      r[c] || (Ht(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
z.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
]);
a.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(z);
var T = z;
function $(e, t) {
  const n = this || te,
    r = t || n,
    s = T.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function _e(e) {
  return !!(e && e.__CANCEL__);
}
function D(e, t, n) {
  m.call(this, e == null ? 'canceled' : e, m.ERR_CANCELED, t, n),
    (this.name = 'CanceledError');
}
a.inherits(D, m, { __CANCEL__: !0 });
function It(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          'Request failed with status code ' + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
var qt = O.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + '=' + encodeURIComponent(t)];
        a.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
          a.isString(r) && i.push('path=' + r),
          a.isString(s) && i.push('domain=' + s),
          o === !0 && i.push('secure'),
          (document.cookie = i.join('; '));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, '', Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Mt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zt(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Be(e, t) {
  return e && !Mt(t) ? zt(e, t) : t;
}
var Jt = O.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a');
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute('href', i), (i = n.href)),
          n.setAttribute('href', i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const c = a.isString(i) ? s(i) : i;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function vt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || '';
}
function $t(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (p) {
      const h = Date.now(),
        l = r[o];
      i || (i = h), (n[s] = p), (r[s] = h);
      let u = o,
        E = 0;
      for (; u !== s; ) (E += n[u++]), (u = u % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), h - i < t)) return;
      const S = l && h - l;
      return S ? Math.round((E * 1e3) / S) : void 0;
    }
  );
}
function le(e, t) {
  let n = 0;
  const r = $t(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      c = o - n,
      p = r(c),
      h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s,
    };
    (l[t ? 'download' : 'upload'] = !0), e(l);
  };
}
const Vt = typeof XMLHttpRequest != 'undefined';
var Wt =
  Vt &&
  function (e) {
    return new Promise(function (n, r) {
      let s = e.data;
      const o = T.from(e.headers).normalize();
      let { responseType: i, withXSRFToken: c } = e,
        p;
      function h() {
        e.cancelToken && e.cancelToken.unsubscribe(p),
          e.signal && e.signal.removeEventListener('abort', p);
      }
      let l;
      if (a.isFormData(s)) {
        if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
          o.setContentType(!1);
        else if ((l = o.getContentType()) !== !1) {
          const [d, ...w] = l
            ? l
                .split(';')
                .map((b) => b.trim())
                .filter(Boolean)
            : [];
          o.setContentType([d || 'multipart/form-data', ...w].join('; '));
        }
      }
      let u = new XMLHttpRequest();
      if (e.auth) {
        const d = e.auth.username || '',
          w = e.auth.password
            ? unescape(encodeURIComponent(e.auth.password))
            : '';
        o.set('Authorization', 'Basic ' + btoa(d + ':' + w));
      }
      const E = Be(e.baseURL, e.url);
      u.open(e.method.toUpperCase(), Ne(E, e.params, e.paramsSerializer), !0),
        (u.timeout = e.timeout);
      function S() {
        if (!u) return;
        const d = T.from(
            'getAllResponseHeaders' in u && u.getAllResponseHeaders()
          ),
          b = {
            data:
              !i || i === 'text' || i === 'json' ? u.responseText : u.response,
            status: u.status,
            statusText: u.statusText,
            headers: d,
            config: e,
            request: u,
          };
        It(
          function (x) {
            n(x), h();
          },
          function (x) {
            r(x), h();
          },
          b
        ),
          (u = null);
      }
      if (
        ('onloadend' in u
          ? (u.onloadend = S)
          : (u.onreadystatechange = function () {
              !u ||
                u.readyState !== 4 ||
                (u.status === 0 &&
                  !(u.responseURL && u.responseURL.indexOf('file:') === 0)) ||
                setTimeout(S);
            }),
        (u.onabort = function () {
          !u || (r(new m('Request aborted', m.ECONNABORTED, e, u)), (u = null));
        }),
        (u.onerror = function () {
          r(new m('Network Error', m.ERR_NETWORK, e, u)), (u = null);
        }),
        (u.ontimeout = function () {
          let w = e.timeout
            ? 'timeout of ' + e.timeout + 'ms exceeded'
            : 'timeout exceeded';
          const b = e.transitional || Pe;
          e.timeoutErrorMessage && (w = e.timeoutErrorMessage),
            r(
              new m(
                w,
                b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                e,
                u
              )
            ),
            (u = null);
        }),
        O.hasStandardBrowserEnv &&
          (c && a.isFunction(c) && (c = c(e)), c || (c !== !1 && Jt(E))))
      ) {
        const d =
          e.xsrfHeaderName && e.xsrfCookieName && qt.read(e.xsrfCookieName);
        d && o.set(e.xsrfHeaderName, d);
      }
      s === void 0 && o.setContentType(null),
        'setRequestHeader' in u &&
          a.forEach(o.toJSON(), function (w, b) {
            u.setRequestHeader(b, w);
          }),
        a.isUndefined(e.withCredentials) ||
          (u.withCredentials = !!e.withCredentials),
        i && i !== 'json' && (u.responseType = e.responseType),
        typeof e.onDownloadProgress == 'function' &&
          u.addEventListener('progress', le(e.onDownloadProgress, !0)),
        typeof e.onUploadProgress == 'function' &&
          u.upload &&
          u.upload.addEventListener('progress', le(e.onUploadProgress)),
        (e.cancelToken || e.signal) &&
          ((p = (d) => {
            !u ||
              (r(!d || d.type ? new D(null, e, u) : d), u.abort(), (u = null));
          }),
          e.cancelToken && e.cancelToken.subscribe(p),
          e.signal &&
            (e.signal.aborted ? p() : e.signal.addEventListener('abort', p)));
      const f = vt(E);
      if (f && O.protocols.indexOf(f) === -1) {
        r(new m('Unsupported protocol ' + f + ':', m.ERR_BAD_REQUEST, e));
        return;
      }
      u.send(s || null);
    });
  };
const G = { http: Et, xhr: Wt };
a.forEach(G, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t });
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t });
  }
});
const fe = (e) => `- ${e}`,
  Kt = (e) => a.isFunction(e) || e === null || e === !1;
var De = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (
        ((r = n),
        !Kt(n) && ((r = G[(i = String(n)).toLowerCase()]), r === void 0))
      )
        throw new m(`Unknown adapter '${i}'`);
      if (r) break;
      s[i || '#' + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, p]) =>
          `adapter ${c} ` +
          (p === !1
            ? 'is not supported by the environment'
            : 'is not available in the build')
      );
      let i = t
        ? o.length > 1
          ? `since :
` +
            o.map(fe).join(`
`)
          : ' ' + fe(o[0])
        : 'as no adapter specified';
      throw new m(
        'There is no suitable adapter to dispatch the request ' + i,
        'ERR_NOT_SUPPORT'
      );
    }
    return r;
  },
  adapters: G,
};
function V(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new D(null, e);
}
function de(e) {
  return (
    V(e),
    (e.headers = T.from(e.headers)),
    (e.data = $.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    De.getAdapter(e.adapter || te.adapter)(e).then(
      function (r) {
        return (
          V(e),
          (r.data = $.call(e, e.transformResponse, r)),
          (r.headers = T.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          _e(r) ||
            (V(e),
            r &&
              r.response &&
              ((r.response.data = $.call(e, e.transformResponse, r.response)),
              (r.response.headers = T.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const pe = (e) => (e instanceof T ? e.toJSON() : e);
function P(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, u) {
    return a.isPlainObject(h) && a.isPlainObject(l)
      ? a.merge.call({ caseless: u }, h, l)
      : a.isPlainObject(l)
      ? a.merge({}, l)
      : a.isArray(l)
      ? l.slice()
      : l;
  }
  function s(h, l, u) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h)) return r(void 0, h, u);
    } else return r(h, l, u);
  }
  function o(h, l) {
    if (!a.isUndefined(l)) return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h)) return r(void 0, h);
    } else return r(void 0, l);
  }
  function c(h, l, u) {
    if (u in t) return r(h, l);
    if (u in e) return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (h, l) => s(pe(h), pe(l), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const u = p[l] || s,
        E = u(e[l], t[l], l);
      (a.isUndefined(E) && u !== c) || (n[l] = E);
    }),
    n
  );
}
const Le = '1.6.7',
  ne = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    ne[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
    };
  }
);
const he = {};
ne.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      '[Axios v' +
      Le +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? '. ' + r : '')
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, ' has been removed' + (n ? ' in ' + n : '')),
        m.ERR_DEPRECATED
      );
    return (
      n &&
        !he[i] &&
        ((he[i] = !0),
        console.warn(
          s(
            i,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function Gt(e, t, n) {
  if (typeof e != 'object')
    throw new m('options must be an object', m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        p = c === void 0 || i(c, o, e);
      if (p !== !0)
        throw new m('option ' + o + ' must be ' + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m('Unknown option ' + o, m.ERR_BAD_OPTION);
  }
}
var X = { assertOptions: Gt, validators: ne };
const N = X.validators;
class j {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ce(), response: new ce() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, '') : '';
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = P(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      X.assertOptions(
        r,
        {
          silentJSONParsing: N.transitional(N.boolean),
          forcedJSONParsing: N.transitional(N.boolean),
          clarifyTimeoutError: N.transitional(N.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : X.assertOptions(
              s,
              { encode: N.function, serialize: N.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (f) => {
          delete o[f];
        }
      ),
      (n.headers = T.concat(i, o));
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == 'function' && d.runWhen(n) === !1) ||
        ((p = p && d.synchronous), c.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (d) {
      h.push(d.fulfilled, d.rejected);
    });
    let l,
      u = 0,
      E;
    if (!p) {
      const f = [de.bind(this), void 0];
      for (
        f.unshift.apply(f, c),
          f.push.apply(f, h),
          E = f.length,
          l = Promise.resolve(n);
        u < E;

      )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    E = c.length;
    let S = n;
    for (u = 0; u < E; ) {
      const f = c[u++],
        d = c[u++];
      try {
        S = f(S);
      } catch (w) {
        d.call(this, w);
        break;
      }
    }
    try {
      l = de.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, E = h.length; u < E; ) l = l.then(h[u++], h[u++]);
    return l;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = Be(t.baseURL, t.url);
    return Ne(n, t.params, t.paramsSerializer);
  }
}
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
  j.prototype[t] = function (n, r) {
    return this.request(
      P(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        P(c || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (j.prototype[t] = n()), (j.prototype[t + 'Form'] = n(!0));
});
var k = j;
class re {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.');
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new D(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new re(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
var Xt = re;
function Qt(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Zt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Q = {
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
Object.entries(Q).forEach(([e, t]) => {
  Q[t] = e;
});
var Yt = Q;
function Ue(e) {
  const t = new k(e),
    n = me(k.prototype.request, t);
  return (
    a.extend(n, k.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ue(P(e, s));
    }),
    n
  );
}
const y = Ue(te);
y.Axios = k;
y.CanceledError = D;
y.CancelToken = Xt;
y.isCancel = _e;
y.VERSION = Le;
y.toFormData = M;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function (t) {
  return Promise.all(t);
};
y.spread = Qt;
y.isAxiosError = Zt;
y.mergeConfig = P;
y.AxiosHeaders = T;
y.formToJSON = (e) => Fe(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = De.getAdapter;
y.HttpStatusCode = Yt;
y.default = y;
var en = y;
export { en as a };
