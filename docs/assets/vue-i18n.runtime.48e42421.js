import {
  d as ot,
  h as jt,
  e as In,
  i as On,
  o as bn,
  a as hn,
  c as be,
  w as Ze,
  F as Bt,
  g as Jt,
  f as Cn,
  r as An,
  s as Pn,
  j as Sn,
  T as yn,
} from './index.59749b07.js';
/*!
 * shared v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const ve = typeof window != 'undefined',
  le = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Rn = (e, t, n) => kn({ l: e, k: t, s: n }),
  kn = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
      .replace(/\u0027/g, '\\u0027'),
  X = (e) => typeof e == 'number' && isFinite(e),
  Dn = (e) => qt(e) === '[object Date]',
  Ue = (e) => qt(e) === '[object RegExp]',
  xe = (e) => F(e) && Object.keys(e).length === 0,
  K = Object.assign;
let Nt;
const we = () =>
  Nt ||
  (Nt =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : {});
function gt(e) {
  return e
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
const Mn = Object.prototype.hasOwnProperty;
function We(e, t) {
  return Mn.call(e, t);
}
const Y = Array.isArray,
  V = (e) => typeof e == 'function',
  P = (e) => typeof e == 'string',
  W = (e) => typeof e == 'boolean',
  U = (e) => e !== null && typeof e == 'object',
  Fn = (e) => U(e) && V(e.then) && V(e.catch),
  Qt = Object.prototype.toString,
  qt = (e) => Qt.call(e),
  F = (e) => {
    if (!U(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object;
  },
  vn = (e) =>
    e == null
      ? ''
      : Y(e) || (F(e) && e.toString === Qt)
      ? JSON.stringify(e, null, 2)
      : String(e);
function Un(e, t = '') {
  return e.reduce((n, r, a) => (a === 0 ? n + r : n + t + r), '');
}
function it(e) {
  let t = e;
  return () => ++t;
}
function wn(e, t) {
  typeof console != 'undefined' &&
    (console.warn('[intlify] ' + e), t && console.warn(t.stack));
}
const De = (e) => !U(e) || Y(e);
function Fe(e, t) {
  if (De(e) || De(t)) throw new Error('Invalid value');
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: a } = n.pop();
    Object.keys(r).forEach((s) => {
      De(r[s]) || De(a[s]) ? (a[s] = r[s]) : n.push({ src: r[s], des: a[s] });
    });
  }
}
/*!
 * message-compiler v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ function Wn(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ze(e, t, n) {
  const r = { start: e, end: t };
  return n != null && (r.source = n), r;
}
const Vn = /\{([0-9a-zA-Z]+)\}/g;
function xn(e, ...t) {
  return (
    t.length === 1 && $n(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(Vn, (n, r) => (t.hasOwnProperty(r) ? t[r] : ''))
  );
}
const Zt = Object.assign,
  Lt = (e) => typeof e == 'string',
  $n = (e) => e !== null && typeof e == 'object';
function zt(e, t = '') {
  return e.reduce((n, r, a) => (a === 0 ? n + r : n + t + r), '');
}
const R = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17,
  },
  Yn = {
    [R.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [R.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:
      'Unterminated single quote in placeholder',
    [R.UNKNOWN_ESCAPE_SEQUENCE]: 'Unknown escape sequence: \\{0}',
    [R.INVALID_UNICODE_ESCAPE_SEQUENCE]: 'Invalid unicode escape sequence: {0}',
    [R.UNBALANCED_CLOSING_BRACE]: 'Unbalanced closing brace',
    [R.UNTERMINATED_CLOSING_BRACE]: 'Unterminated closing brace',
    [R.EMPTY_PLACEHOLDER]: 'Empty placeholder',
    [R.NOT_ALLOW_NEST_PLACEHOLDER]: 'Not allowed nest placeholder',
    [R.INVALID_LINKED_FORMAT]: 'Invalid linked format',
    [R.MUST_HAVE_MESSAGES_IN_PLURAL]: 'Plural must have messages',
    [R.UNEXPECTED_EMPTY_LINKED_MODIFIER]: 'Unexpected empty linked modifier',
    [R.UNEXPECTED_EMPTY_LINKED_KEY]: 'Unexpected empty linked key',
    [R.UNEXPECTED_LEXICAL_ANALYSIS]:
      "Unexpected lexical analysis in token: '{0}'",
    [R.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [R.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'",
  };
function Te(e, t, n = {}) {
  const { domain: r, messages: a, args: s } = n,
    c = xn((a || Yn)[e] || '', ...(s || [])),
    f = new SyntaxError(String(c));
  return (f.code = e), t && (f.location = t), (f.domain = r), f;
}
function Gn(e) {
  throw e;
}
const re = ' ',
  Xn = '\r',
  H = `
`,
  Hn = String.fromCharCode(8232),
  Kn = String.fromCharCode(8233);
function jn(e) {
  const t = e;
  let n = 0,
    r = 1,
    a = 1,
    s = 0;
  const c = (k) => t[k] === Xn && t[k + 1] === H,
    f = (k) => t[k] === H,
    i = (k) => t[k] === Kn,
    d = (k) => t[k] === Hn,
    p = (k) => c(k) || f(k) || i(k) || d(k),
    T = () => n,
    L = () => r,
    S = () => a,
    y = () => s,
    D = (k) => (c(k) || i(k) || d(k) ? H : t[k]),
    C = () => D(n),
    u = () => D(n + s);
  function N() {
    return (s = 0), p(n) && (r++, (a = 0)), c(n) && n++, n++, a++, t[n];
  }
  function I() {
    return c(n + s) && s++, s++, t[n + s];
  }
  function E() {
    (n = 0), (r = 1), (a = 1), (s = 0);
  }
  function b(k = 0) {
    s = k;
  }
  function h() {
    const k = n + s;
    for (; k !== n; ) N();
    s = 0;
  }
  return {
    index: T,
    line: L,
    column: S,
    peekOffset: y,
    charAt: D,
    currentChar: C,
    currentPeek: u,
    next: N,
    peek: I,
    reset: E,
    resetPeek: b,
    skipToPeek: h,
  };
}
const oe = void 0,
  Bn = '.',
  Tt = "'",
  Jn = 'tokenizer';
function Qn(e, t = {}) {
  const n = t.location !== !1,
    r = jn(e),
    a = () => r.index(),
    s = () => Wn(r.line(), r.column(), r.index()),
    c = s(),
    f = a(),
    i = {
      currentType: 14,
      offset: f,
      startLoc: c,
      endLoc: c,
      lastType: 14,
      lastOffset: f,
      lastStartLoc: c,
      lastEndLoc: c,
      braceNest: 0,
      inLinked: !1,
      text: '',
    },
    d = () => i,
    { onError: p } = t;
  function T(l, o, m, ...O) {
    const M = d();
    if (((o.column += m), (o.offset += m), p)) {
      const v = n ? ze(M.startLoc, o) : null,
        Z = Te(l, v, { domain: Jn, args: O });
      p(Z);
    }
  }
  function L(l, o, m) {
    (l.endLoc = s()), (l.currentType = o);
    const O = { type: o };
    return (
      n && (O.loc = ze(l.startLoc, l.endLoc)), m != null && (O.value = m), O
    );
  }
  const S = (l) => L(l, 14);
  function y(l, o) {
    return l.currentChar() === o
      ? (l.next(), o)
      : (T(R.EXPECTED_TOKEN, s(), 0, o), '');
  }
  function D(l) {
    let o = '';
    for (; l.currentPeek() === re || l.currentPeek() === H; )
      (o += l.currentPeek()), l.peek();
    return o;
  }
  function C(l) {
    const o = D(l);
    return l.skipToPeek(), o;
  }
  function u(l) {
    if (l === oe) return !1;
    const o = l.charCodeAt(0);
    return (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 95;
  }
  function N(l) {
    if (l === oe) return !1;
    const o = l.charCodeAt(0);
    return o >= 48 && o <= 57;
  }
  function I(l, o) {
    const { currentType: m } = o;
    if (m !== 2) return !1;
    D(l);
    const O = u(l.currentPeek());
    return l.resetPeek(), O;
  }
  function E(l, o) {
    const { currentType: m } = o;
    if (m !== 2) return !1;
    D(l);
    const O = l.currentPeek() === '-' ? l.peek() : l.currentPeek(),
      M = N(O);
    return l.resetPeek(), M;
  }
  function b(l, o) {
    const { currentType: m } = o;
    if (m !== 2) return !1;
    D(l);
    const O = l.currentPeek() === Tt;
    return l.resetPeek(), O;
  }
  function h(l, o) {
    const { currentType: m } = o;
    if (m !== 8) return !1;
    D(l);
    const O = l.currentPeek() === '.';
    return l.resetPeek(), O;
  }
  function k(l, o) {
    const { currentType: m } = o;
    if (m !== 9) return !1;
    D(l);
    const O = u(l.currentPeek());
    return l.resetPeek(), O;
  }
  function A(l, o) {
    const { currentType: m } = o;
    if (!(m === 8 || m === 12)) return !1;
    D(l);
    const O = l.currentPeek() === ':';
    return l.resetPeek(), O;
  }
  function $(l, o) {
    const { currentType: m } = o;
    if (m !== 10) return !1;
    const O = () => {
        const v = l.currentPeek();
        return v === '{'
          ? u(l.peek())
          : v === '@' ||
            v === '%' ||
            v === '|' ||
            v === ':' ||
            v === '.' ||
            v === re ||
            !v
          ? !1
          : v === H
          ? (l.peek(), O())
          : u(v);
      },
      M = O();
    return l.resetPeek(), M;
  }
  function B(l) {
    D(l);
    const o = l.currentPeek() === '|';
    return l.resetPeek(), o;
  }
  function ce(l) {
    const o = D(l),
      m = l.currentPeek() === '%' && l.peek() === '{';
    return l.resetPeek(), { isModulo: m, hasSpace: o.length > 0 };
  }
  function J(l, o = !0) {
    const m = (M = !1, v = '', Z = !1) => {
        const ne = l.currentPeek();
        return ne === '{'
          ? v === '%'
            ? !1
            : M
          : ne === '@' || !ne
          ? v === '%'
            ? !0
            : M
          : ne === '%'
          ? (l.peek(), m(M, '%', !0))
          : ne === '|'
          ? v === '%' || Z
            ? !0
            : !(v === re || v === H)
          : ne === re
          ? (l.peek(), m(!0, re, Z))
          : ne === H
          ? (l.peek(), m(!0, H, Z))
          : !0;
      },
      O = m();
    return o && l.resetPeek(), O;
  }
  function fe(l, o) {
    const m = l.currentChar();
    return m === oe ? oe : o(m) ? (l.next(), m) : null;
  }
  function Ae(l) {
    return fe(l, (m) => {
      const O = m.charCodeAt(0);
      return (
        (O >= 97 && O <= 122) ||
        (O >= 65 && O <= 90) ||
        (O >= 48 && O <= 57) ||
        O === 95 ||
        O === 36
      );
    });
  }
  function Ye(l) {
    return fe(l, (m) => {
      const O = m.charCodeAt(0);
      return O >= 48 && O <= 57;
    });
  }
  function Ge(l) {
    return fe(l, (m) => {
      const O = m.charCodeAt(0);
      return (
        (O >= 48 && O <= 57) || (O >= 65 && O <= 70) || (O >= 97 && O <= 102)
      );
    });
  }
  function Pe(l) {
    let o = '',
      m = '';
    for (; (o = Ye(l)); ) m += o;
    return m;
  }
  function Xe(l) {
    C(l);
    const o = l.currentChar();
    return o !== '%' && T(R.EXPECTED_TOKEN, s(), 0, o), l.next(), '%';
  }
  function Se(l) {
    let o = '';
    for (;;) {
      const m = l.currentChar();
      if (m === '{' || m === '}' || m === '@' || m === '|' || !m) break;
      if (m === '%')
        if (J(l)) (o += m), l.next();
        else break;
      else if (m === re || m === H)
        if (J(l)) (o += m), l.next();
        else {
          if (B(l)) break;
          (o += m), l.next();
        }
      else (o += m), l.next();
    }
    return o;
  }
  function te(l) {
    C(l);
    let o = '',
      m = '';
    for (; (o = Ae(l)); ) m += o;
    return l.currentChar() === oe && T(R.UNTERMINATED_CLOSING_BRACE, s(), 0), m;
  }
  function ye(l) {
    C(l);
    let o = '';
    return (
      l.currentChar() === '-' ? (l.next(), (o += `-${Pe(l)}`)) : (o += Pe(l)),
      l.currentChar() === oe && T(R.UNTERMINATED_CLOSING_BRACE, s(), 0),
      o
    );
  }
  function He(l) {
    C(l), y(l, "'");
    let o = '',
      m = '';
    const O = (v) => v !== Tt && v !== H;
    for (; (o = fe(l, O)); ) o === '\\' ? (m += Ke(l)) : (m += o);
    const M = l.currentChar();
    return M === H || M === oe
      ? (T(R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0),
        M === H && (l.next(), y(l, "'")),
        m)
      : (y(l, "'"), m);
  }
  function Ke(l) {
    const o = l.currentChar();
    switch (o) {
      case '\\':
      case "'":
        return l.next(), `\\${o}`;
      case 'u':
        return Re(l, o, 4);
      case 'U':
        return Re(l, o, 6);
      default:
        return T(R.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, o), '';
    }
  }
  function Re(l, o, m) {
    y(l, o);
    let O = '';
    for (let M = 0; M < m; M++) {
      const v = Ge(l);
      if (!v) {
        T(
          R.INVALID_UNICODE_ESCAPE_SEQUENCE,
          s(),
          0,
          `\\${o}${O}${l.currentChar()}`
        );
        break;
      }
      O += v;
    }
    return `\\${o}${O}`;
  }
  function je(l) {
    C(l);
    let o = '',
      m = '';
    const O = (M) => M !== '{' && M !== '}' && M !== re && M !== H;
    for (; (o = fe(l, O)); ) m += o;
    return m;
  }
  function Et(l) {
    let o = '',
      m = '';
    for (; (o = Ae(l)); ) m += o;
    return m;
  }
  function Be(l) {
    const o = (m = !1, O) => {
      const M = l.currentChar();
      return M === '{' ||
        M === '%' ||
        M === '@' ||
        M === '|' ||
        M === '(' ||
        M === ')' ||
        !M ||
        M === re
        ? O
        : M === H || M === Bn
        ? ((O += M), l.next(), o(m, O))
        : ((O += M), l.next(), o(!0, O));
    };
    return o(!1, '');
  }
  function pe(l) {
    C(l);
    const o = y(l, '|');
    return C(l), o;
  }
  function Ie(l, o) {
    let m = null;
    switch (l.currentChar()) {
      case '{':
        return (
          o.braceNest >= 1 && T(R.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0),
          l.next(),
          (m = L(o, 2, '{')),
          C(l),
          o.braceNest++,
          m
        );
      case '}':
        return (
          o.braceNest > 0 &&
            o.currentType === 2 &&
            T(R.EMPTY_PLACEHOLDER, s(), 0),
          l.next(),
          (m = L(o, 3, '}')),
          o.braceNest--,
          o.braceNest > 0 && C(l),
          o.inLinked && o.braceNest === 0 && (o.inLinked = !1),
          m
        );
      case '@':
        return (
          o.braceNest > 0 && T(R.UNTERMINATED_CLOSING_BRACE, s(), 0),
          (m = de(l, o) || S(o)),
          (o.braceNest = 0),
          m
        );
      default:
        let M = !0,
          v = !0,
          Z = !0;
        if (B(l))
          return (
            o.braceNest > 0 && T(R.UNTERMINATED_CLOSING_BRACE, s(), 0),
            (m = L(o, 1, pe(l))),
            (o.braceNest = 0),
            (o.inLinked = !1),
            m
          );
        if (
          o.braceNest > 0 &&
          (o.currentType === 5 || o.currentType === 6 || o.currentType === 7)
        )
          return (
            T(R.UNTERMINATED_CLOSING_BRACE, s(), 0), (o.braceNest = 0), Oe(l, o)
          );
        if ((M = I(l, o))) return (m = L(o, 5, te(l))), C(l), m;
        if ((v = E(l, o))) return (m = L(o, 6, ye(l))), C(l), m;
        if ((Z = b(l, o))) return (m = L(o, 7, He(l))), C(l), m;
        if (!M && !v && !Z)
          return (
            (m = L(o, 13, je(l))),
            T(R.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, m.value),
            C(l),
            m
          );
        break;
    }
    return m;
  }
  function de(l, o) {
    const { currentType: m } = o;
    let O = null;
    const M = l.currentChar();
    switch (
      ((m === 8 || m === 9 || m === 12 || m === 10) &&
        (M === H || M === re) &&
        T(R.INVALID_LINKED_FORMAT, s(), 0),
      M)
    ) {
      case '@':
        return l.next(), (O = L(o, 8, '@')), (o.inLinked = !0), O;
      case '.':
        return C(l), l.next(), L(o, 9, '.');
      case ':':
        return C(l), l.next(), L(o, 10, ':');
      default:
        return B(l)
          ? ((O = L(o, 1, pe(l))), (o.braceNest = 0), (o.inLinked = !1), O)
          : h(l, o) || A(l, o)
          ? (C(l), de(l, o))
          : k(l, o)
          ? (C(l), L(o, 12, Et(l)))
          : $(l, o)
          ? (C(l), M === '{' ? Ie(l, o) || O : L(o, 11, Be(l)))
          : (m === 8 && T(R.INVALID_LINKED_FORMAT, s(), 0),
            (o.braceNest = 0),
            (o.inLinked = !1),
            Oe(l, o));
    }
  }
  function Oe(l, o) {
    let m = { type: 14 };
    if (o.braceNest > 0) return Ie(l, o) || S(o);
    if (o.inLinked) return de(l, o) || S(o);
    switch (l.currentChar()) {
      case '{':
        return Ie(l, o) || S(o);
      case '}':
        return T(R.UNBALANCED_CLOSING_BRACE, s(), 0), l.next(), L(o, 3, '}');
      case '@':
        return de(l, o) || S(o);
      default:
        if (B(l))
          return (m = L(o, 1, pe(l))), (o.braceNest = 0), (o.inLinked = !1), m;
        const { isModulo: M, hasSpace: v } = ce(l);
        if (M) return v ? L(o, 0, Se(l)) : L(o, 4, Xe(l));
        if (J(l)) return L(o, 0, Se(l));
        break;
    }
    return m;
  }
  function Je() {
    const { currentType: l, offset: o, startLoc: m, endLoc: O } = i;
    return (
      (i.lastType = l),
      (i.lastOffset = o),
      (i.lastStartLoc = m),
      (i.lastEndLoc = O),
      (i.offset = a()),
      (i.startLoc = s()),
      r.currentChar() === oe ? L(i, 14) : Oe(r, i)
    );
  }
  return { nextToken: Je, currentOffset: a, currentPosition: s, context: d };
}
const qn = 'parser',
  Zn = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function zn(e, t, n) {
  switch (e) {
    case '\\\\':
      return '\\';
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : '\uFFFD';
    }
  }
}
function er(e = {}) {
  const t = e.location !== !1,
    { onError: n } = e;
  function r(u, N, I, E, ...b) {
    const h = u.currentPosition();
    if (((h.offset += E), (h.column += E), n)) {
      const k = t ? ze(I, h) : null,
        A = Te(N, k, { domain: qn, args: b });
      n(A);
    }
  }
  function a(u, N, I) {
    const E = { type: u };
    return t && ((E.start = N), (E.end = N), (E.loc = { start: I, end: I })), E;
  }
  function s(u, N, I, E) {
    E && (u.type = E), t && ((u.end = N), u.loc && (u.loc.end = I));
  }
  function c(u, N) {
    const I = u.context(),
      E = a(3, I.offset, I.startLoc);
    return (E.value = N), s(E, u.currentOffset(), u.currentPosition()), E;
  }
  function f(u, N) {
    const I = u.context(),
      { lastOffset: E, lastStartLoc: b } = I,
      h = a(5, E, b);
    return (
      (h.index = parseInt(N, 10)),
      u.nextToken(),
      s(h, u.currentOffset(), u.currentPosition()),
      h
    );
  }
  function i(u, N) {
    const I = u.context(),
      { lastOffset: E, lastStartLoc: b } = I,
      h = a(4, E, b);
    return (
      (h.key = N),
      u.nextToken(),
      s(h, u.currentOffset(), u.currentPosition()),
      h
    );
  }
  function d(u, N) {
    const I = u.context(),
      { lastOffset: E, lastStartLoc: b } = I,
      h = a(9, E, b);
    return (
      (h.value = N.replace(Zn, zn)),
      u.nextToken(),
      s(h, u.currentOffset(), u.currentPosition()),
      h
    );
  }
  function p(u) {
    const N = u.nextToken(),
      I = u.context(),
      { lastOffset: E, lastStartLoc: b } = I,
      h = a(8, E, b);
    return N.type !== 12
      ? (r(u, R.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0),
        (h.value = ''),
        s(h, E, b),
        { nextConsumeToken: N, node: h })
      : (N.value == null &&
          r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, z(N)),
        (h.value = N.value || ''),
        s(h, u.currentOffset(), u.currentPosition()),
        { node: h });
  }
  function T(u, N) {
    const I = u.context(),
      E = a(7, I.offset, I.startLoc);
    return (E.value = N), s(E, u.currentOffset(), u.currentPosition()), E;
  }
  function L(u) {
    const N = u.context(),
      I = a(6, N.offset, N.startLoc);
    let E = u.nextToken();
    if (E.type === 9) {
      const b = p(u);
      (I.modifier = b.node), (E = b.nextConsumeToken || u.nextToken());
    }
    switch (
      (E.type !== 10 &&
        r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z(E)),
      (E = u.nextToken()),
      E.type === 2 && (E = u.nextToken()),
      E.type)
    ) {
      case 11:
        E.value == null &&
          r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z(E)),
          (I.key = T(u, E.value || ''));
        break;
      case 5:
        E.value == null &&
          r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z(E)),
          (I.key = i(u, E.value || ''));
        break;
      case 6:
        E.value == null &&
          r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z(E)),
          (I.key = f(u, E.value || ''));
        break;
      case 7:
        E.value == null &&
          r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z(E)),
          (I.key = d(u, E.value || ''));
        break;
      default:
        r(u, R.UNEXPECTED_EMPTY_LINKED_KEY, N.lastStartLoc, 0);
        const b = u.context(),
          h = a(7, b.offset, b.startLoc);
        return (
          (h.value = ''),
          s(h, b.offset, b.startLoc),
          (I.key = h),
          s(I, b.offset, b.startLoc),
          { nextConsumeToken: E, node: I }
        );
    }
    return s(I, u.currentOffset(), u.currentPosition()), { node: I };
  }
  function S(u) {
    const N = u.context(),
      I = N.currentType === 1 ? u.currentOffset() : N.offset,
      E = N.currentType === 1 ? N.endLoc : N.startLoc,
      b = a(2, I, E);
    b.items = [];
    let h = null;
    do {
      const $ = h || u.nextToken();
      switch (((h = null), $.type)) {
        case 0:
          $.value == null &&
            r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z($)),
            b.items.push(c(u, $.value || ''));
          break;
        case 6:
          $.value == null &&
            r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z($)),
            b.items.push(f(u, $.value || ''));
          break;
        case 5:
          $.value == null &&
            r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z($)),
            b.items.push(i(u, $.value || ''));
          break;
        case 7:
          $.value == null &&
            r(u, R.UNEXPECTED_LEXICAL_ANALYSIS, N.lastStartLoc, 0, z($)),
            b.items.push(d(u, $.value || ''));
          break;
        case 8:
          const B = L(u);
          b.items.push(B.node), (h = B.nextConsumeToken || null);
          break;
      }
    } while (N.currentType !== 14 && N.currentType !== 1);
    const k = N.currentType === 1 ? N.lastOffset : u.currentOffset(),
      A = N.currentType === 1 ? N.lastEndLoc : u.currentPosition();
    return s(b, k, A), b;
  }
  function y(u, N, I, E) {
    const b = u.context();
    let h = E.items.length === 0;
    const k = a(1, N, I);
    (k.cases = []), k.cases.push(E);
    do {
      const A = S(u);
      h || (h = A.items.length === 0), k.cases.push(A);
    } while (b.currentType !== 14);
    return (
      h && r(u, R.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0),
      s(k, u.currentOffset(), u.currentPosition()),
      k
    );
  }
  function D(u) {
    const N = u.context(),
      { offset: I, startLoc: E } = N,
      b = S(u);
    return N.currentType === 14 ? b : y(u, I, E, b);
  }
  function C(u) {
    const N = Qn(u, Zt({}, e)),
      I = N.context(),
      E = a(0, I.offset, I.startLoc);
    return (
      t && E.loc && (E.loc.source = u),
      (E.body = D(N)),
      e.onCacheKey && (E.cacheKey = e.onCacheKey(u)),
      I.currentType !== 14 &&
        r(
          N,
          R.UNEXPECTED_LEXICAL_ANALYSIS,
          I.lastStartLoc,
          0,
          u[I.offset] || ''
        ),
      s(E, N.currentOffset(), N.currentPosition()),
      E
    );
  }
  return { parse: C };
}
function z(e) {
  if (e.type === 14) return 'EOF';
  const t = (e.value || '').replace(/\r?\n/gu, '\\n');
  return t.length > 10 ? t.slice(0, 9) + '\u2026' : t;
}
function tr(e, t = {}) {
  const n = { ast: e, helpers: new Set() };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function pt(e, t) {
  for (let n = 0; n < e.length; n++) ut(e[n], t);
}
function ut(e, t) {
  switch (e.type) {
    case 1:
      pt(e.cases, t), t.helper('plural');
      break;
    case 2:
      pt(e.items, t);
      break;
    case 6:
      ut(e.key, t), t.helper('linked'), t.helper('type');
      break;
    case 5:
      t.helper('interpolate'), t.helper('list');
      break;
    case 4:
      t.helper('interpolate'), t.helper('named');
      break;
  }
}
function nr(e, t = {}) {
  const n = tr(e);
  n.helper('normalize'), e.body && ut(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function rr(e) {
  const t = e.body;
  return t.type === 2 ? It(t) : t.cases.forEach((n) => It(n)), e;
}
function It(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = zt(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const ar = 'minifier';
function Ne(e) {
  switch (((e.t = e.type), e.type)) {
    case 0:
      const t = e;
      Ne(t.body), (t.b = t.body), delete t.body;
      break;
    case 1:
      const n = e,
        r = n.cases;
      for (let p = 0; p < r.length; p++) Ne(r[p]);
      (n.c = r), delete n.cases;
      break;
    case 2:
      const a = e,
        s = a.items;
      for (let p = 0; p < s.length; p++) Ne(s[p]);
      (a.i = s),
        delete a.items,
        a.static && ((a.s = a.static), delete a.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const c = e;
      c.value && ((c.v = c.value), delete c.value);
      break;
    case 6:
      const f = e;
      Ne(f.key),
        (f.k = f.key),
        delete f.key,
        f.modifier && (Ne(f.modifier), (f.m = f.modifier), delete f.modifier);
      break;
    case 5:
      const i = e;
      (i.i = i.index), delete i.index;
      break;
    case 4:
      const d = e;
      (d.k = d.key), delete d.key;
      break;
    default:
      throw Te(R.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: ar,
        args: [e.type],
      });
  }
  delete e.type;
}
const sr = 'parser';
function lr(e, t) {
  const { sourceMap: n, filename: r, breakLineCode: a, needIndent: s } = t,
    c = t.location !== !1,
    f = {
      filename: r,
      code: '',
      column: 1,
      line: 1,
      offset: 0,
      map: void 0,
      breakLineCode: a,
      needIndent: s,
      indentLevel: 0,
    };
  c && e.loc && (f.source = e.loc.source);
  const i = () => f;
  function d(C, u) {
    f.code += C;
  }
  function p(C, u = !0) {
    const N = u ? a : '';
    d(s ? N + '  '.repeat(C) : N);
  }
  function T(C = !0) {
    const u = ++f.indentLevel;
    C && p(u);
  }
  function L(C = !0) {
    const u = --f.indentLevel;
    C && p(u);
  }
  function S() {
    p(f.indentLevel);
  }
  return {
    context: i,
    push: d,
    indent: T,
    deindent: L,
    newline: S,
    helper: (C) => `_${C}`,
    needIndent: () => f.needIndent,
  };
}
function cr(e, t) {
  const { helper: n } = e;
  e.push(`${n('linked')}(`),
    ge(e, t.key),
    t.modifier
      ? (e.push(', '), ge(e, t.modifier), e.push(', _type'))
      : e.push(', undefined, _type'),
    e.push(')');
}
function or(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n('normalize')}([`), e.indent(r());
  const a = t.items.length;
  for (let s = 0; s < a && (ge(e, t.items[s]), s !== a - 1); s++) e.push(', ');
  e.deindent(r()), e.push('])');
}
function ir(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n('plural')}([`), e.indent(r());
    const a = t.cases.length;
    for (let s = 0; s < a && (ge(e, t.cases[s]), s !== a - 1); s++)
      e.push(', ');
    e.deindent(r()), e.push('])');
  }
}
function ur(e, t) {
  t.body ? ge(e, t.body) : e.push('null');
}
function ge(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ur(e, t);
      break;
    case 1:
      ir(e, t);
      break;
    case 2:
      or(e, t);
      break;
    case 6:
      cr(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n('interpolate')}(${n('list')}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n('interpolate')}(${n('named')}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw Te(R.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: sr,
        args: [t.type],
      });
  }
}
const fr = (e, t = {}) => {
  const n = Lt(t.mode) ? t.mode : 'normal',
    r = Lt(t.filename) ? t.filename : 'message.intl',
    a = !!t.sourceMap,
    s =
      t.breakLineCode != null
        ? t.breakLineCode
        : n === 'arrow'
        ? ';'
        : `
`,
    c = t.needIndent ? t.needIndent : n !== 'arrow',
    f = e.helpers || [],
    i = lr(e, {
      mode: n,
      filename: r,
      sourceMap: a,
      breakLineCode: s,
      needIndent: c,
    });
  i.push(n === 'normal' ? 'function __msg__ (ctx) {' : '(ctx) => {'),
    i.indent(c),
    f.length > 0 &&
      (i.push(
        `const { ${zt(
          f.map((T) => `${T}: _${T}`),
          ', '
        )} } = ctx`
      ),
      i.newline()),
    i.push('return '),
    ge(i, e),
    i.deindent(c),
    i.push('}'),
    delete e.helpers;
  const { code: d, map: p } = i.context();
  return { ast: e, code: d, map: p ? p.toJSON() : void 0 };
};
function _r(e, t = {}) {
  const n = Zt({}, t),
    r = !!n.jit,
    a = !!n.minify,
    s = n.optimize == null ? !0 : n.optimize,
    f = er(n).parse(e);
  return r
    ? (s && rr(f), a && Ne(f), { ast: f, code: '' })
    : (nr(f, n), fr(f, n));
}
/*!
 * core-base v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ function mr() {
  typeof __INTLIFY_JIT_COMPILATION__ != 'boolean' &&
    (we().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != 'boolean' &&
      (we().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const ue = [];
ue[0] = { w: [0], i: [3, 0], ['[']: [4], o: [7] };
ue[1] = { w: [1], ['.']: [2], ['[']: [4], o: [7] };
ue[2] = { w: [2], i: [3, 0], [0]: [3, 0] };
ue[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ['.']: [2, 1],
  ['[']: [4, 1],
  o: [7, 1],
};
ue[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ['[']: [4, 2],
  [']']: [1, 3],
  o: 8,
  l: [4, 0],
};
ue[5] = { ["'"]: [4, 0], o: 8, l: [5, 0] };
ue[6] = { ['"']: [4, 0], o: 8, l: [6, 0] };
const dr = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Er(e) {
  return dr.test(e);
}
function Nr(e) {
  const t = e.charCodeAt(0),
    n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function gr(e) {
  if (e == null) return 'o';
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return 'i';
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return 'w';
  }
  return 'i';
}
function Lr(e) {
  const t = e.trim();
  return e.charAt(0) === '0' && isNaN(parseInt(e))
    ? !1
    : Er(t)
    ? Nr(t)
    : '*' + t;
}
function Tr(e) {
  const t = [];
  let n = -1,
    r = 0,
    a = 0,
    s,
    c,
    f,
    i,
    d,
    p,
    T;
  const L = [];
  (L[0] = () => {
    c === void 0 ? (c = f) : (c += f);
  }),
    (L[1] = () => {
      c !== void 0 && (t.push(c), (c = void 0));
    }),
    (L[2] = () => {
      L[0](), a++;
    }),
    (L[3] = () => {
      if (a > 0) a--, (r = 4), L[0]();
      else {
        if (((a = 0), c === void 0 || ((c = Lr(c)), c === !1))) return !1;
        L[1]();
      }
    });
  function S() {
    const y = e[n + 1];
    if ((r === 5 && y === "'") || (r === 6 && y === '"'))
      return n++, (f = '\\' + y), L[0](), !0;
  }
  for (; r !== null; )
    if ((n++, (s = e[n]), !(s === '\\' && S()))) {
      if (
        ((i = gr(s)),
        (T = ue[r]),
        (d = T[i] || T.l || 8),
        d === 8 ||
          ((r = d[0]),
          d[1] !== void 0 && ((p = L[d[1]]), p && ((f = s), p() === !1))))
      )
        return;
      if (r === 7) return t;
    }
}
const Ot = new Map();
function pr(e, t) {
  return U(e) ? e[t] : null;
}
function Ir(e, t) {
  if (!U(e)) return null;
  let n = Ot.get(t);
  if ((n || ((n = Tr(t)), n && Ot.set(t, n)), !n)) return null;
  const r = n.length;
  let a = e,
    s = 0;
  for (; s < r; ) {
    const c = a[n[s]];
    if (c === void 0 || V(a)) return null;
    (a = c), s++;
  }
  return a;
}
const Or = (e) => e,
  br = (e) => '',
  hr = 'text',
  Cr = (e) => (e.length === 0 ? '' : Un(e)),
  Ar = vn;
function bt(e, t) {
  return (
    (e = Math.abs(e)),
    t === 2 ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function Pr(e) {
  const t = X(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (X(e.named.count) || X(e.named.n))
    ? X(e.named.count)
      ? e.named.count
      : X(e.named.n)
      ? e.named.n
      : t
    : t;
}
function Sr(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function yr(e = {}) {
  const t = e.locale,
    n = Pr(e),
    r = U(e.pluralRules) && P(t) && V(e.pluralRules[t]) ? e.pluralRules[t] : bt,
    a = U(e.pluralRules) && P(t) && V(e.pluralRules[t]) ? bt : void 0,
    s = (u) => u[r(n, u.length, a)],
    c = e.list || [],
    f = (u) => c[u],
    i = e.named || {};
  X(e.pluralIndex) && Sr(n, i);
  const d = (u) => i[u];
  function p(u) {
    const N = V(e.messages)
      ? e.messages(u)
      : U(e.messages)
      ? e.messages[u]
      : !1;
    return N || (e.parent ? e.parent.message(u) : br);
  }
  const T = (u) => (e.modifiers ? e.modifiers[u] : Or),
    L = F(e.processor) && V(e.processor.normalize) ? e.processor.normalize : Cr,
    S =
      F(e.processor) && V(e.processor.interpolate)
        ? e.processor.interpolate
        : Ar,
    y = F(e.processor) && P(e.processor.type) ? e.processor.type : hr,
    C = {
      list: f,
      named: d,
      plural: s,
      linked: (u, ...N) => {
        const [I, E] = N;
        let b = 'text',
          h = '';
        N.length === 1
          ? U(I)
            ? ((h = I.modifier || h), (b = I.type || b))
            : P(I) && (h = I || h)
          : N.length === 2 && (P(I) && (h = I || h), P(E) && (b = E || b));
        const k = p(u)(C),
          A = b === 'vnode' && Y(k) && h ? k[0] : k;
        return h ? T(h)(A, b) : A;
      },
      message: p,
      type: y,
      interpolate: S,
      normalize: L,
      values: K({}, c, i),
    };
  return C;
}
const Rr = {
    NOT_FOUND_KEY: 1,
    FALLBACK_TO_TRANSLATE: 2,
    CANNOT_FORMAT_NUMBER: 3,
    FALLBACK_TO_NUMBER_FORMAT: 4,
    CANNOT_FORMAT_DATE: 5,
    FALLBACK_TO_DATE_FORMAT: 6,
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
    __EXTEND_POINT__: 8,
  },
  en = R.__EXTEND_POINT__,
  me = it(en),
  ee = {
    INVALID_ARGUMENT: en,
    INVALID_DATE_ARGUMENT: me(),
    INVALID_ISO_DATE_ARGUMENT: me(),
    NOT_SUPPORT_NON_STRING_MESSAGE: me(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: me(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: me(),
    NOT_SUPPORT_LOCALE_TYPE: me(),
    __EXTEND_POINT__: me(),
  };
function ae(e) {
  return Te(e, null, void 0);
}
function ft(e, t) {
  return t.locale != null ? ht(t.locale) : ht(e.locale);
}
let Qe;
function ht(e) {
  if (P(e)) return e;
  if (V(e)) {
    if (e.resolvedOnce && Qe != null) return Qe;
    if (e.constructor.name === 'Function') {
      const t = e();
      if (Fn(t)) throw ae(ee.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (Qe = t);
    } else throw ae(ee.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else throw ae(ee.NOT_SUPPORT_LOCALE_TYPE);
}
function kr(e, t, n) {
  return [
    ...new Set([n, ...(Y(t) ? t : U(t) ? Object.keys(t) : P(t) ? [t] : [n])]),
  ];
}
function tn(e, t, n) {
  const r = P(n) ? n : Ve,
    a = e;
  a.__localeChainCache || (a.__localeChainCache = new Map());
  let s = a.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let c = [n];
    for (; Y(c); ) c = Ct(s, c, t);
    const f = Y(t) || !F(t) ? t : t.default ? t.default : null;
    (c = P(f) ? [f] : f), Y(c) && Ct(s, c, !1), a.__localeChainCache.set(r, s);
  }
  return s;
}
function Ct(e, t, n) {
  let r = !0;
  for (let a = 0; a < t.length && W(r); a++) {
    const s = t[a];
    P(s) && (r = Dr(e, t[a], n));
  }
  return r;
}
function Dr(e, t, n) {
  let r;
  const a = t.split('-');
  do {
    const s = a.join('-');
    (r = Mr(e, s, n)), a.splice(-1, 1);
  } while (a.length && r === !0);
  return r;
}
function Mr(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = t[t.length - 1] !== '!';
    const a = t.replace(/!/g, '');
    e.push(a), (Y(n) || F(n)) && n[a] && (r = n[a]);
  }
  return r;
}
const Fr = '9.9.1',
  $e = -1,
  Ve = 'en-US',
  At = '',
  Pt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function vr() {
  return {
    upper: (e, t) =>
      t === 'text' && P(e)
        ? e.toUpperCase()
        : t === 'vnode' && U(e) && '__v_isVNode' in e
        ? e.children.toUpperCase()
        : e,
    lower: (e, t) =>
      t === 'text' && P(e)
        ? e.toLowerCase()
        : t === 'vnode' && U(e) && '__v_isVNode' in e
        ? e.children.toLowerCase()
        : e,
    capitalize: (e, t) =>
      t === 'text' && P(e)
        ? Pt(e)
        : t === 'vnode' && U(e) && '__v_isVNode' in e
        ? Pt(e.children)
        : e,
  };
}
let nn;
function Ur(e) {
  nn = e;
}
let rn;
function wr(e) {
  rn = e;
}
let an;
function Wr(e) {
  an = e;
}
let sn = null;
const St = (e) => {
    sn = e;
  },
  Vr = () => sn;
let yt = 0;
function xr(e = {}) {
  const t = V(e.onWarn) ? e.onWarn : wn,
    n = P(e.version) ? e.version : Fr,
    r = P(e.locale) || V(e.locale) ? e.locale : Ve,
    a = V(r) ? Ve : r,
    s =
      Y(e.fallbackLocale) ||
      F(e.fallbackLocale) ||
      P(e.fallbackLocale) ||
      e.fallbackLocale === !1
        ? e.fallbackLocale
        : a,
    c = F(e.messages) ? e.messages : { [a]: {} },
    f = F(e.datetimeFormats) ? e.datetimeFormats : { [a]: {} },
    i = F(e.numberFormats) ? e.numberFormats : { [a]: {} },
    d = K({}, e.modifiers || {}, vr()),
    p = e.pluralRules || {},
    T = V(e.missing) ? e.missing : null,
    L = W(e.missingWarn) || Ue(e.missingWarn) ? e.missingWarn : !0,
    S = W(e.fallbackWarn) || Ue(e.fallbackWarn) ? e.fallbackWarn : !0,
    y = !!e.fallbackFormat,
    D = !!e.unresolving,
    C = V(e.postTranslation) ? e.postTranslation : null,
    u = F(e.processor) ? e.processor : null,
    N = W(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    I = !!e.escapeParameter,
    E = V(e.messageCompiler) ? e.messageCompiler : nn,
    b = V(e.messageResolver) ? e.messageResolver : rn || pr,
    h = V(e.localeFallbacker) ? e.localeFallbacker : an || kr,
    k = U(e.fallbackContext) ? e.fallbackContext : void 0,
    A = e,
    $ = U(A.__datetimeFormatters) ? A.__datetimeFormatters : new Map(),
    B = U(A.__numberFormatters) ? A.__numberFormatters : new Map(),
    ce = U(A.__meta) ? A.__meta : {};
  yt++;
  const J = {
    version: n,
    cid: yt,
    locale: r,
    fallbackLocale: s,
    messages: c,
    modifiers: d,
    pluralRules: p,
    missing: T,
    missingWarn: L,
    fallbackWarn: S,
    fallbackFormat: y,
    unresolving: D,
    postTranslation: C,
    processor: u,
    warnHtmlMessage: N,
    escapeParameter: I,
    messageCompiler: E,
    messageResolver: b,
    localeFallbacker: h,
    fallbackContext: k,
    onWarn: t,
    __meta: ce,
  };
  return (
    (J.datetimeFormats = f),
    (J.numberFormats = i),
    (J.__datetimeFormatters = $),
    (J.__numberFormatters = B),
    J
  );
}
function _t(e, t, n, r, a) {
  const { missing: s, onWarn: c } = e;
  if (s !== null) {
    const f = s(e, n, t, a);
    return P(f) ? f : t;
  } else return t;
}
function he(e, t, n) {
  const r = e;
  (r.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function qe(e) {
  return (n) => $r(n, e);
}
function $r(e, t) {
  const n = t.b || t.body;
  if ((n.t || n.type) === 1) {
    const r = n,
      a = r.c || r.cases;
    return e.plural(a.reduce((s, c) => [...s, Rt(e, c)], []));
  } else return Rt(e, n);
}
function Rt(e, t) {
  const n = t.s || t.static;
  if (n) return e.type === 'text' ? n : e.normalize([n]);
  {
    const r = (t.i || t.items).reduce((a, s) => [...a, et(e, s)], []);
    return e.normalize(r);
  }
}
function et(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const a = t;
      return a.v || a.value;
    case 4:
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    case 5:
      const c = t;
      return e.interpolate(e.list(c.i != null ? c.i : c.index));
    case 6:
      const f = t,
        i = f.m || f.modifier;
      return e.linked(et(e, f.k || f.key), i ? et(e, i) : void 0, e.type);
    case 7:
      const d = t;
      return d.v || d.value;
    case 8:
      const p = t;
      return p.v || p.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const Yr = (e) => e;
let Me = Object.create(null);
const Le = (e) =>
  U(e) && (e.t === 0 || e.type === 0) && ('b' in e || 'body' in e);
function Gr(e, t = {}) {
  let n = !1;
  const r = t.onError || Gn;
  return (
    (t.onError = (a) => {
      (n = !0), r(a);
    }),
    { ..._r(e, t), detectError: n }
  );
}
function Xr(e, t) {
  if (
    __INTLIFY_JIT_COMPILATION__ &&
    !__INTLIFY_DROP_MESSAGE_COMPILER__ &&
    P(e)
  ) {
    W(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || Yr)(e),
      a = Me[r];
    if (a) return a;
    const { ast: s, detectError: c } = Gr(e, { ...t, location: !1, jit: !0 }),
      f = qe(s);
    return c ? f : (Me[r] = f);
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Me[n];
      return r || (Me[n] = qe(e));
    } else return qe(e);
  }
}
const kt = () => '',
  se = (e) => V(e);
function Dt(e, ...t) {
  const {
      fallbackFormat: n,
      postTranslation: r,
      unresolving: a,
      messageCompiler: s,
      fallbackLocale: c,
      messages: f,
    } = e,
    [i, d] = tt(...t),
    p = W(d.missingWarn) ? d.missingWarn : e.missingWarn,
    T = W(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn,
    L = W(d.escapeParameter) ? d.escapeParameter : e.escapeParameter,
    S = !!d.resolvedMessage,
    y =
      P(d.default) || W(d.default)
        ? W(d.default)
          ? s
            ? i
            : () => i
          : d.default
        : n
        ? s
          ? i
          : () => i
        : '',
    D = n || y !== '',
    C = ft(e, d);
  L && Hr(d);
  let [u, N, I] = S ? [i, C, f[C] || {}] : ln(e, i, C, c, T, p),
    E = u,
    b = i;
  if (
    (!S && !(P(E) || Le(E) || se(E)) && D && ((E = y), (b = E)),
    !S && (!(P(E) || Le(E) || se(E)) || !P(N)))
  )
    return a ? $e : i;
  let h = !1;
  const k = () => {
      h = !0;
    },
    A = se(E) ? E : cn(e, i, N, E, b, k);
  if (h) return E;
  const $ = Br(e, N, I, d),
    B = yr($),
    ce = Kr(e, A, B);
  return r ? r(ce, i) : ce;
}
function Hr(e) {
  Y(e.list)
    ? (e.list = e.list.map((t) => (P(t) ? gt(t) : t)))
    : U(e.named) &&
      Object.keys(e.named).forEach((t) => {
        P(e.named[t]) && (e.named[t] = gt(e.named[t]));
      });
}
function ln(e, t, n, r, a, s) {
  const { messages: c, onWarn: f, messageResolver: i, localeFallbacker: d } = e,
    p = d(e, r, n);
  let T = {},
    L,
    S = null;
  const y = 'translate';
  for (
    let D = 0;
    D < p.length &&
    ((L = p[D]),
    (T = c[L] || {}),
    (S = i(T, t)) === null && (S = T[t]),
    !(P(S) || Le(S) || se(S)));
    D++
  ) {
    const C = _t(e, t, L, s, y);
    C !== t && (S = C);
  }
  return [S, L, T];
}
function cn(e, t, n, r, a, s) {
  const { messageCompiler: c, warnHtmlMessage: f } = e;
  if (se(r)) {
    const d = r;
    return (d.locale = d.locale || n), (d.key = d.key || t), d;
  }
  if (c == null) {
    const d = () => r;
    return (d.locale = n), (d.key = t), d;
  }
  const i = c(r, jr(e, n, a, r, f, s));
  return (i.locale = n), (i.key = t), (i.source = r), i;
}
function Kr(e, t, n) {
  return t(n);
}
function tt(...e) {
  const [t, n, r] = e,
    a = {};
  if (!P(t) && !X(t) && !se(t) && !Le(t)) throw ae(ee.INVALID_ARGUMENT);
  const s = X(t) ? String(t) : (se(t), t);
  return (
    X(n)
      ? (a.plural = n)
      : P(n)
      ? (a.default = n)
      : F(n) && !xe(n)
      ? (a.named = n)
      : Y(n) && (a.list = n),
    X(r) ? (a.plural = r) : P(r) ? (a.default = r) : F(r) && K(a, r),
    [s, a]
  );
}
function jr(e, t, n, r, a, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: a,
    onError: (c) => {
      throw (s && s(c), c);
    },
    onCacheKey: (c) => Rn(t, n, c),
  };
}
function Br(e, t, n, r) {
  const {
      modifiers: a,
      pluralRules: s,
      messageResolver: c,
      fallbackLocale: f,
      fallbackWarn: i,
      missingWarn: d,
      fallbackContext: p,
    } = e,
    L = {
      locale: t,
      modifiers: a,
      pluralRules: s,
      messages: (S) => {
        let y = c(n, S);
        if (y == null && p) {
          const [, , D] = ln(p, S, t, f, i, d);
          y = c(D, S);
        }
        if (P(y) || Le(y)) {
          let D = !1;
          const u = cn(e, S, t, y, S, () => {
            D = !0;
          });
          return D ? kt : u;
        } else return se(y) ? y : kt;
      },
    };
  return (
    e.processor && (L.processor = e.processor),
    r.list && (L.list = r.list),
    r.named && (L.named = r.named),
    X(r.plural) && (L.pluralIndex = r.plural),
    L
  );
}
function Mt(e, ...t) {
  const {
      datetimeFormats: n,
      unresolving: r,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: c,
    } = e,
    { __datetimeFormatters: f } = e,
    [i, d, p, T] = nt(...t),
    L = W(p.missingWarn) ? p.missingWarn : e.missingWarn;
  W(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
  const S = !!p.part,
    y = ft(e, p),
    D = c(e, a, y);
  if (!P(i) || i === '') return new Intl.DateTimeFormat(y, T).format(d);
  let C = {},
    u,
    N = null;
  const I = 'datetime format';
  for (
    let h = 0;
    h < D.length && ((u = D[h]), (C = n[u] || {}), (N = C[i]), !F(N));
    h++
  )
    _t(e, i, u, L, I);
  if (!F(N) || !P(u)) return r ? $e : i;
  let E = `${u}__${i}`;
  xe(T) || (E = `${E}__${JSON.stringify(T)}`);
  let b = f.get(E);
  return (
    b || ((b = new Intl.DateTimeFormat(u, K({}, N, T))), f.set(E, b)),
    S ? b.formatToParts(d) : b.format(d)
  );
}
const on = [
  'localeMatcher',
  'weekday',
  'era',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'timeZoneName',
  'formatMatcher',
  'hour12',
  'timeZone',
  'dateStyle',
  'timeStyle',
  'calendar',
  'dayPeriod',
  'numberingSystem',
  'hourCycle',
  'fractionalSecondDigits',
];
function nt(...e) {
  const [t, n, r, a] = e,
    s = {};
  let c = {},
    f;
  if (P(t)) {
    const i = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!i) throw ae(ee.INVALID_ISO_DATE_ARGUMENT);
    const d = i[3]
      ? i[3].trim().startsWith('T')
        ? `${i[1].trim()}${i[3].trim()}`
        : `${i[1].trim()}T${i[3].trim()}`
      : i[1].trim();
    f = new Date(d);
    try {
      f.toISOString();
    } catch {
      throw ae(ee.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Dn(t)) {
    if (isNaN(t.getTime())) throw ae(ee.INVALID_DATE_ARGUMENT);
    f = t;
  } else if (X(t)) f = t;
  else throw ae(ee.INVALID_ARGUMENT);
  return (
    P(n)
      ? (s.key = n)
      : F(n) &&
        Object.keys(n).forEach((i) => {
          on.includes(i) ? (c[i] = n[i]) : (s[i] = n[i]);
        }),
    P(r) ? (s.locale = r) : F(r) && (c = r),
    F(a) && (c = a),
    [s.key || '', f, s, c]
  );
}
function Ft(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    !r.__datetimeFormatters.has(s) || r.__datetimeFormatters.delete(s);
  }
}
function vt(e, ...t) {
  const {
      numberFormats: n,
      unresolving: r,
      fallbackLocale: a,
      onWarn: s,
      localeFallbacker: c,
    } = e,
    { __numberFormatters: f } = e,
    [i, d, p, T] = rt(...t),
    L = W(p.missingWarn) ? p.missingWarn : e.missingWarn;
  W(p.fallbackWarn) ? p.fallbackWarn : e.fallbackWarn;
  const S = !!p.part,
    y = ft(e, p),
    D = c(e, a, y);
  if (!P(i) || i === '') return new Intl.NumberFormat(y, T).format(d);
  let C = {},
    u,
    N = null;
  const I = 'number format';
  for (
    let h = 0;
    h < D.length && ((u = D[h]), (C = n[u] || {}), (N = C[i]), !F(N));
    h++
  )
    _t(e, i, u, L, I);
  if (!F(N) || !P(u)) return r ? $e : i;
  let E = `${u}__${i}`;
  xe(T) || (E = `${E}__${JSON.stringify(T)}`);
  let b = f.get(E);
  return (
    b || ((b = new Intl.NumberFormat(u, K({}, N, T))), f.set(E, b)),
    S ? b.formatToParts(d) : b.format(d)
  );
}
const un = [
  'localeMatcher',
  'style',
  'currency',
  'currencyDisplay',
  'currencySign',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'compactDisplay',
  'notation',
  'signDisplay',
  'unit',
  'unitDisplay',
  'roundingMode',
  'roundingPriority',
  'roundingIncrement',
  'trailingZeroDisplay',
];
function rt(...e) {
  const [t, n, r, a] = e,
    s = {};
  let c = {};
  if (!X(t)) throw ae(ee.INVALID_ARGUMENT);
  const f = t;
  return (
    P(n)
      ? (s.key = n)
      : F(n) &&
        Object.keys(n).forEach((i) => {
          un.includes(i) ? (c[i] = n[i]) : (s[i] = n[i]);
        }),
    P(r) ? (s.locale = r) : F(r) && (c = r),
    F(a) && (c = a),
    [s.key || '', f, s, c]
  );
}
function Ut(e, t, n) {
  const r = e;
  for (const a in n) {
    const s = `${t}__${a}`;
    !r.__numberFormatters.has(s) || r.__numberFormatters.delete(s);
  }
}
mr();
/*!
 * vue-i18n v9.9.1
 * (c) 2024 kazuya kawaguchi
 * Released under the MIT License.
 */ const Jr = '9.9.1';
function Qr() {
  typeof __INTLIFY_JIT_COMPILATION__ != 'boolean' &&
    (we().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != 'boolean' &&
      (we().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const fn = Rr.__EXTEND_POINT__,
  ie = it(fn);
ie(), ie(), ie(), ie(), ie(), ie(), ie(), ie();
const _n = ee.__EXTEND_POINT__,
  j = it(_n),
  Q = {
    UNEXPECTED_RETURN_TYPE: _n,
    INVALID_ARGUMENT: j(),
    MUST_BE_CALL_SETUP_TOP: j(),
    NOT_INSTALLED: j(),
    NOT_AVAILABLE_IN_LEGACY_MODE: j(),
    REQUIRED_VALUE: j(),
    INVALID_VALUE: j(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: j(),
    NOT_INSTALLED_WITH_PROVIDE: j(),
    UNEXPECTED_ERROR: j(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: j(),
    BRIDGE_SUPPORT_VUE_2_ONLY: j(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: j(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: j(),
    __EXTEND_POINT__: j(),
  };
function q(e, ...t) {
  return Te(e, null, void 0);
}
const at = le('__translateVNode'),
  st = le('__datetimeParts'),
  lt = le('__numberParts'),
  qr = le('__setPluralRules');
le('__intlifyMeta');
const Zr = le('__injectWithOption'),
  ct = le('__dispose');
function Ce(e) {
  if (!U(e)) return e;
  for (const t in e)
    if (!!We(e, t))
      if (!t.includes('.')) U(e[t]) && Ce(e[t]);
      else {
        const n = t.split('.'),
          r = n.length - 1;
        let a = e,
          s = !1;
        for (let c = 0; c < r; c++) {
          if ((n[c] in a || (a[n[c]] = {}), !U(a[n[c]]))) {
            s = !0;
            break;
          }
          a = a[n[c]];
        }
        s || ((a[n[r]] = e[t]), delete e[t]), U(a[n[r]]) && Ce(a[n[r]]);
      }
  return e;
}
function mn(e, t) {
  const { messages: n, __i18n: r, messageResolver: a, flatJson: s } = t,
    c = F(n) ? n : Y(r) ? {} : { [e]: {} };
  if (
    (Y(r) &&
      r.forEach((f) => {
        if ('locale' in f && 'resource' in f) {
          const { locale: i, resource: d } = f;
          i ? ((c[i] = c[i] || {}), Fe(d, c[i])) : Fe(d, c);
        } else P(f) && Fe(JSON.parse(f), c);
      }),
    a == null && s)
  )
    for (const f in c) We(c, f) && Ce(c[f]);
  return c;
}
function zr(e) {
  return e.type;
}
function ea(e, t, n) {
  let r = U(t.messages) ? t.messages : {};
  '__i18nGlobal' in n &&
    (r = mn(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const a = Object.keys(r);
  a.length &&
    a.forEach((s) => {
      e.mergeLocaleMessage(s, r[s]);
    });
  {
    if (U(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length &&
        s.forEach((c) => {
          e.mergeDateTimeFormat(c, t.datetimeFormats[c]);
        });
    }
    if (U(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length &&
        s.forEach((c) => {
          e.mergeNumberFormat(c, t.numberFormats[c]);
        });
    }
  }
}
function wt(e) {
  return Sn(yn, null, e, 0);
}
const Wt = () => [],
  ta = () => !1;
let Vt = 0;
function xt(e) {
  return (t, n, r, a) => e(n, r, Jt() || void 0, a);
}
function dn(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e,
    a = n === void 0,
    s = e.flatJson,
    c = ve ? An : Pn;
  let f = W(e.inheritLocale) ? e.inheritLocale : !0;
  const i = c(n && f ? n.locale.value : P(e.locale) ? e.locale : Ve),
    d = c(
      n && f
        ? n.fallbackLocale.value
        : P(e.fallbackLocale) ||
          Y(e.fallbackLocale) ||
          F(e.fallbackLocale) ||
          e.fallbackLocale === !1
        ? e.fallbackLocale
        : i.value
    ),
    p = c(mn(i.value, e)),
    T = c(F(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }),
    L = c(F(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let S = n
      ? n.missingWarn
      : W(e.missingWarn) || Ue(e.missingWarn)
      ? e.missingWarn
      : !0,
    y = n
      ? n.fallbackWarn
      : W(e.fallbackWarn) || Ue(e.fallbackWarn)
      ? e.fallbackWarn
      : !0,
    D = n ? n.fallbackRoot : W(e.fallbackRoot) ? e.fallbackRoot : !0,
    C = !!e.fallbackFormat,
    u = V(e.missing) ? e.missing : null,
    N = V(e.missing) ? xt(e.missing) : null,
    I = V(e.postTranslation) ? e.postTranslation : null,
    E = n ? n.warnHtmlMessage : W(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
    b = !!e.escapeParameter;
  const h = n ? n.modifiers : F(e.modifiers) ? e.modifiers : {};
  let k = e.pluralRules || (n && n.pluralRules),
    A;
  (A = (() => {
    a && St(null);
    const _ = {
      version: Jr,
      locale: i.value,
      fallbackLocale: d.value,
      messages: p.value,
      modifiers: h,
      pluralRules: k,
      missing: N === null ? void 0 : N,
      missingWarn: S,
      fallbackWarn: y,
      fallbackFormat: C,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: E,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: 'vue' },
    };
    (_.datetimeFormats = T.value),
      (_.numberFormats = L.value),
      (_.__datetimeFormatters = F(A) ? A.__datetimeFormatters : void 0),
      (_.__numberFormatters = F(A) ? A.__numberFormatters : void 0);
    const g = xr(_);
    return a && St(g), g;
  })()),
    he(A, i.value, d.value);
  function B() {
    return [i.value, d.value, p.value, T.value, L.value];
  }
  const ce = be({
      get: () => i.value,
      set: (_) => {
        (i.value = _), (A.locale = i.value);
      },
    }),
    J = be({
      get: () => d.value,
      set: (_) => {
        (d.value = _), (A.fallbackLocale = d.value), he(A, i.value, _);
      },
    }),
    fe = be(() => p.value),
    Ae = be(() => T.value),
    Ye = be(() => L.value);
  function Ge() {
    return V(I) ? I : null;
  }
  function Pe(_) {
    (I = _), (A.postTranslation = _);
  }
  function Xe() {
    return u;
  }
  function Se(_) {
    _ !== null && (N = xt(_)), (u = _), (A.missing = N);
  }
  const te = (_, g, w, x, _e, ke) => {
    B();
    let Ee;
    try {
      a || (A.fallbackContext = n ? Vr() : void 0), (Ee = _(A));
    } finally {
      a || (A.fallbackContext = void 0);
    }
    if (
      (w !== 'translate exists' && X(Ee) && Ee === $e) ||
      (w === 'translate exists' && !Ee)
    ) {
      const [pn, pa] = g();
      return n && D ? x(n) : _e(pn);
    } else {
      if (ke(Ee)) return Ee;
      throw q(Q.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ye(..._) {
    return te(
      (g) => Reflect.apply(Dt, null, [g, ..._]),
      () => tt(..._),
      'translate',
      (g) => Reflect.apply(g.t, g, [..._]),
      (g) => g,
      (g) => P(g)
    );
  }
  function He(..._) {
    const [g, w, x] = _;
    if (x && !U(x)) throw q(Q.INVALID_ARGUMENT);
    return ye(g, w, K({ resolvedMessage: !0 }, x || {}));
  }
  function Ke(..._) {
    return te(
      (g) => Reflect.apply(Mt, null, [g, ..._]),
      () => nt(..._),
      'datetime format',
      (g) => Reflect.apply(g.d, g, [..._]),
      () => At,
      (g) => P(g)
    );
  }
  function Re(..._) {
    return te(
      (g) => Reflect.apply(vt, null, [g, ..._]),
      () => rt(..._),
      'number format',
      (g) => Reflect.apply(g.n, g, [..._]),
      () => At,
      (g) => P(g)
    );
  }
  function je(_) {
    return _.map((g) => (P(g) || X(g) || W(g) ? wt(String(g)) : g));
  }
  const Be = { normalize: je, interpolate: (_) => _, type: 'vnode' };
  function pe(..._) {
    return te(
      (g) => {
        let w;
        const x = g;
        try {
          (x.processor = Be), (w = Reflect.apply(Dt, null, [x, ..._]));
        } finally {
          x.processor = null;
        }
        return w;
      },
      () => tt(..._),
      'translate',
      (g) => g[at](..._),
      (g) => [wt(g)],
      (g) => Y(g)
    );
  }
  function Ie(..._) {
    return te(
      (g) => Reflect.apply(vt, null, [g, ..._]),
      () => rt(..._),
      'number format',
      (g) => g[lt](..._),
      Wt,
      (g) => P(g) || Y(g)
    );
  }
  function de(..._) {
    return te(
      (g) => Reflect.apply(Mt, null, [g, ..._]),
      () => nt(..._),
      'datetime format',
      (g) => g[st](..._),
      Wt,
      (g) => P(g) || Y(g)
    );
  }
  function Oe(_) {
    (k = _), (A.pluralRules = k);
  }
  function Je(_, g) {
    return te(
      () => {
        if (!_) return !1;
        const w = P(g) ? g : i.value,
          x = m(w),
          _e = A.messageResolver(x, _);
        return Le(_e) || se(_e) || P(_e);
      },
      () => [_],
      'translate exists',
      (w) => Reflect.apply(w.te, w, [_, g]),
      ta,
      (w) => W(w)
    );
  }
  function l(_) {
    let g = null;
    const w = tn(A, d.value, i.value);
    for (let x = 0; x < w.length; x++) {
      const _e = p.value[w[x]] || {},
        ke = A.messageResolver(_e, _);
      if (ke != null) {
        g = ke;
        break;
      }
    }
    return g;
  }
  function o(_) {
    const g = l(_);
    return g != null ? g : n ? n.tm(_) || {} : {};
  }
  function m(_) {
    return p.value[_] || {};
  }
  function O(_, g) {
    if (s) {
      const w = { [_]: g };
      for (const x in w) We(w, x) && Ce(w[x]);
      g = w[_];
    }
    (p.value[_] = g), (A.messages = p.value);
  }
  function M(_, g) {
    p.value[_] = p.value[_] || {};
    const w = { [_]: g };
    if (s) for (const x in w) We(w, x) && Ce(w[x]);
    (g = w[_]), Fe(g, p.value[_]), (A.messages = p.value);
  }
  function v(_) {
    return T.value[_] || {};
  }
  function Z(_, g) {
    (T.value[_] = g), (A.datetimeFormats = T.value), Ft(A, _, g);
  }
  function ne(_, g) {
    (T.value[_] = K(T.value[_] || {}, g)),
      (A.datetimeFormats = T.value),
      Ft(A, _, g);
  }
  function gn(_) {
    return L.value[_] || {};
  }
  function Ln(_, g) {
    (L.value[_] = g), (A.numberFormats = L.value), Ut(A, _, g);
  }
  function Tn(_, g) {
    (L.value[_] = K(L.value[_] || {}, g)),
      (A.numberFormats = L.value),
      Ut(A, _, g);
  }
  Vt++,
    n &&
      ve &&
      (Ze(n.locale, (_) => {
        f && ((i.value = _), (A.locale = _), he(A, i.value, d.value));
      }),
      Ze(n.fallbackLocale, (_) => {
        f && ((d.value = _), (A.fallbackLocale = _), he(A, i.value, d.value));
      }));
  const G = {
    id: Vt,
    locale: ce,
    fallbackLocale: J,
    get inheritLocale() {
      return f;
    },
    set inheritLocale(_) {
      (f = _),
        _ &&
          n &&
          ((i.value = n.locale.value),
          (d.value = n.fallbackLocale.value),
          he(A, i.value, d.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: fe,
    get modifiers() {
      return h;
    },
    get pluralRules() {
      return k || {};
    },
    get isGlobal() {
      return a;
    },
    get missingWarn() {
      return S;
    },
    set missingWarn(_) {
      (S = _), (A.missingWarn = S);
    },
    get fallbackWarn() {
      return y;
    },
    set fallbackWarn(_) {
      (y = _), (A.fallbackWarn = y);
    },
    get fallbackRoot() {
      return D;
    },
    set fallbackRoot(_) {
      D = _;
    },
    get fallbackFormat() {
      return C;
    },
    set fallbackFormat(_) {
      (C = _), (A.fallbackFormat = C);
    },
    get warnHtmlMessage() {
      return E;
    },
    set warnHtmlMessage(_) {
      (E = _), (A.warnHtmlMessage = _);
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(_) {
      (b = _), (A.escapeParameter = _);
    },
    t: ye,
    getLocaleMessage: m,
    setLocaleMessage: O,
    mergeLocaleMessage: M,
    getPostTranslationHandler: Ge,
    setPostTranslationHandler: Pe,
    getMissingHandler: Xe,
    setMissingHandler: Se,
    [qr]: Oe,
  };
  return (
    (G.datetimeFormats = Ae),
    (G.numberFormats = Ye),
    (G.rt = He),
    (G.te = Je),
    (G.tm = o),
    (G.d = Ke),
    (G.n = Re),
    (G.getDateTimeFormat = v),
    (G.setDateTimeFormat = Z),
    (G.mergeDateTimeFormat = ne),
    (G.getNumberFormat = gn),
    (G.setNumberFormat = Ln),
    (G.mergeNumberFormat = Tn),
    (G[Zr] = r),
    (G[at] = pe),
    (G[st] = de),
    (G[lt] = Ie),
    G
  );
}
const mt = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => e === 'parent' || e === 'global',
    default: 'parent',
  },
  i18n: { type: Object },
};
function na({ slots: e }, t) {
  return t.length === 1 && t[0] === 'default'
    ? (e.default ? e.default() : []).reduce(
        (r, a) => [...r, ...(a.type === Bt ? a.children : [a])],
        []
      )
    : t.reduce((n, r) => {
        const a = e[r];
        return a && (n[r] = a()), n;
      }, {});
}
function En(e) {
  return Bt;
}
const ra = ot({
    name: 'i18n-t',
    props: K(
      {
        keypath: { type: String, required: !0 },
        plural: { type: [Number, String], validator: (e) => X(e) || !isNaN(e) },
      },
      mt
    ),
    setup(e, t) {
      const { slots: n, attrs: r } = t,
        a = e.i18n || dt({ useScope: e.scope, __useComponent: !0 });
      return () => {
        const s = Object.keys(n).filter((T) => T !== '_'),
          c = {};
        e.locale && (c.locale = e.locale),
          e.plural !== void 0 &&
            (c.plural = P(e.plural) ? +e.plural : e.plural);
        const f = na(t, s),
          i = a[at](e.keypath, f, c),
          d = K({}, r),
          p = P(e.tag) || U(e.tag) ? e.tag : En();
        return jt(p, d, i);
      };
    },
  }),
  $t = ra;
function aa(e) {
  return Y(e) && !P(e[0]);
}
function Nn(e, t, n, r) {
  const { slots: a, attrs: s } = t;
  return () => {
    const c = { part: !0 };
    let f = {};
    e.locale && (c.locale = e.locale),
      P(e.format)
        ? (c.key = e.format)
        : U(e.format) &&
          (P(e.format.key) && (c.key = e.format.key),
          (f = Object.keys(e.format).reduce(
            (L, S) => (n.includes(S) ? K({}, L, { [S]: e.format[S] }) : L),
            {}
          )));
    const i = r(e.value, c, f);
    let d = [c.key];
    Y(i)
      ? (d = i.map((L, S) => {
          const y = a[L.type],
            D = y ? y({ [L.type]: L.value, index: S, parts: i }) : [L.value];
          return aa(D) && (D[0].key = `${L.type}-${S}`), D;
        }))
      : P(i) && (d = [i]);
    const p = K({}, s),
      T = P(e.tag) || U(e.tag) ? e.tag : En();
    return jt(T, p, d);
  };
}
const sa = ot({
    name: 'i18n-n',
    props: K(
      {
        value: { type: Number, required: !0 },
        format: { type: [String, Object] },
      },
      mt
    ),
    setup(e, t) {
      const n = e.i18n || dt({ useScope: 'parent', __useComponent: !0 });
      return Nn(e, t, un, (...r) => n[lt](...r));
    },
  }),
  Yt = sa,
  la = ot({
    name: 'i18n-d',
    props: K(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      mt
    ),
    setup(e, t) {
      const n = e.i18n || dt({ useScope: 'parent', __useComponent: !0 });
      return Nn(e, t, on, (...r) => n[st](...r));
    },
  }),
  Gt = la;
function ca(e, t) {
  const n = e;
  if (e.mode === 'composition') return n.__getInstance(t) || e.global;
  {
    const r = n.__getInstance(t);
    return r != null ? r.__composer : e.global.__composer;
  }
}
function oa(e) {
  const t = (c) => {
    const { instance: f, modifiers: i, value: d } = c;
    if (!f || !f.$) throw q(Q.UNEXPECTED_ERROR);
    const p = ca(e, f.$),
      T = Xt(d);
    return [Reflect.apply(p.t, p, [...Ht(T)]), p];
  };
  return {
    created: (c, f) => {
      const [i, d] = t(f);
      ve &&
        e.global === d &&
        (c.__i18nWatcher = Ze(d.locale, () => {
          f.instance && f.instance.$forceUpdate();
        })),
        (c.__composer = d),
        (c.textContent = i);
    },
    unmounted: (c) => {
      ve &&
        c.__i18nWatcher &&
        (c.__i18nWatcher(), (c.__i18nWatcher = void 0), delete c.__i18nWatcher),
        c.__composer && ((c.__composer = void 0), delete c.__composer);
    },
    beforeUpdate: (c, { value: f }) => {
      if (c.__composer) {
        const i = c.__composer,
          d = Xt(f);
        c.textContent = Reflect.apply(i.t, i, [...Ht(d)]);
      }
    },
    getSSRProps: (c) => {
      const [f] = t(c);
      return { textContent: f };
    },
  };
}
function Xt(e) {
  if (P(e)) return { path: e };
  if (F(e)) {
    if (!('path' in e)) throw q(Q.REQUIRED_VALUE, 'path');
    return e;
  } else throw q(Q.INVALID_VALUE);
}
function Ht(e) {
  const { path: t, locale: n, args: r, choice: a, plural: s } = e,
    c = {},
    f = r || {};
  return (
    P(n) && (c.locale = n),
    X(a) && (c.plural = a),
    X(s) && (c.plural = s),
    [t, f, c]
  );
}
function ia(e, t, ...n) {
  const r = F(n[0]) ? n[0] : {},
    a = !!r.useI18nComponentName;
  (W(r.globalInstall) ? r.globalInstall : !0) &&
    ([a ? 'i18n' : $t.name, 'I18nT'].forEach((c) => e.component(c, $t)),
    [Yt.name, 'I18nN'].forEach((c) => e.component(c, Yt)),
    [Gt.name, 'I18nD'].forEach((c) => e.component(c, Gt))),
    e.directive('t', oa(t));
}
const ua = le('global-vue-i18n');
function Oa(e = {}, t) {
  const n = W(e.globalInjection) ? e.globalInjection : !0,
    r = !0,
    a = new Map(),
    [s, c] = fa(e),
    f = le('');
  function i(T) {
    return a.get(T) || null;
  }
  function d(T, L) {
    a.set(T, L);
  }
  function p(T) {
    a.delete(T);
  }
  {
    const T = {
      get mode() {
        return 'composition';
      },
      get allowComposition() {
        return r;
      },
      async install(L, ...S) {
        if (
          ((L.__VUE_I18N_SYMBOL__ = f),
          L.provide(L.__VUE_I18N_SYMBOL__, T),
          F(S[0]))
        ) {
          const C = S[0];
          (T.__composerExtend = C.__composerExtend),
            (T.__vueI18nExtend = C.__vueI18nExtend);
        }
        let y = null;
        n && (y = Ta(L, T.global)), ia(L, T, ...S);
        const D = L.unmount;
        L.unmount = () => {
          y && y(), T.dispose(), D();
        };
      },
      get global() {
        return c;
      },
      dispose() {
        s.stop();
      },
      __instances: a,
      __getInstance: i,
      __setInstance: d,
      __deleteInstance: p,
    };
    return T;
  }
}
function dt(e = {}) {
  const t = Jt();
  if (t == null) throw q(Q.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    t.appContext.app != null &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw q(Q.NOT_INSTALLED);
  const n = _a(t),
    r = da(n),
    a = zr(t),
    s = ma(e, a);
  if (s === 'global') return ea(r, e, a), r;
  if (s === 'parent') {
    let i = Ea(n, t, e.__useComponent);
    return i == null && (i = r), i;
  }
  const c = n;
  let f = c.__getInstance(t);
  if (f == null) {
    const i = K({}, e);
    '__i18n' in a && (i.__i18n = a.__i18n),
      r && (i.__root = r),
      (f = dn(i)),
      c.__composerExtend && (f[ct] = c.__composerExtend(f)),
      ga(c, t, f),
      c.__setInstance(t, f);
  }
  return f;
}
function fa(e, t, n) {
  const r = In();
  {
    const a = r.run(() => dn(e));
    if (a == null) throw q(Q.UNEXPECTED_ERROR);
    return [r, a];
  }
}
function _a(e) {
  {
    const t = On(e.isCE ? ua : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t) throw q(e.isCE ? Q.NOT_INSTALLED_WITH_PROVIDE : Q.UNEXPECTED_ERROR);
    return t;
  }
}
function ma(e, t) {
  return xe(e)
    ? '__i18n' in t
      ? 'local'
      : 'global'
    : e.useScope
    ? e.useScope
    : 'local';
}
function da(e) {
  return e.mode === 'composition' ? e.global : e.global.__composer;
}
function Ea(e, t, n = !1) {
  let r = null;
  const a = t.root;
  let s = Na(t, n);
  for (; s != null; ) {
    const c = e;
    if (
      (e.mode === 'composition' && (r = c.__getInstance(s)),
      r != null || a === s)
    )
      break;
    s = s.parent;
  }
  return r;
}
function Na(e, t = !1) {
  return e == null ? null : (t && e.vnode.ctx) || e.parent;
}
function ga(e, t, n) {
  bn(() => {}, t),
    hn(() => {
      const r = n;
      e.__deleteInstance(t);
      const a = r[ct];
      a && (a(), delete r[ct]);
    }, t);
}
const La = ['locale', 'fallbackLocale', 'availableLocales'],
  Kt = ['t', 'rt', 'd', 'n', 'tm', 'te'];
function Ta(e, t) {
  const n = Object.create(null);
  return (
    La.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s) throw q(Q.UNEXPECTED_ERROR);
      const c = Cn(s.value)
        ? {
            get() {
              return s.value.value;
            },
            set(f) {
              s.value.value = f;
            },
          }
        : {
            get() {
              return s.get && s.get();
            },
          };
      Object.defineProperty(n, a, c);
    }),
    (e.config.globalProperties.$i18n = n),
    Kt.forEach((a) => {
      const s = Object.getOwnPropertyDescriptor(t, a);
      if (!s || !s.value) throw q(Q.UNEXPECTED_ERROR);
      Object.defineProperty(e.config.globalProperties, `$${a}`, s);
    }),
    () => {
      delete e.config.globalProperties.$i18n,
        Kt.forEach((a) => {
          delete e.config.globalProperties[`$${a}`];
        });
    }
  );
}
Qr();
__INTLIFY_JIT_COMPILATION__ && Ur(Xr);
wr(Ir);
Wr(tn);
export { Oa as c, dt as u };
