"use strict";

console.log('global');
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// TypeIt by Alex MacArthur - https://typeitjs.com
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e || self).TypeIt = t();
}(void 0, function () {
  var e = [null, null, {}];

  var t = function t(e, _t) {
    return Object.assign({}, e, _t);
  },
      n = function n(e) {
    return Array.from(e);
  },
      r = function r(e) {
    var t = document.implementation.createHTMLDocument();
    return t.body.innerHTML = e, t.body;
  };

  var o = function o(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var i = n(e.childNodes).flatMap(function (e) {
      return 3 === (t = e).nodeType || "BR" === t.tagName ? e : o(e);
      var t;
    });
    return t && (i = i.filter(function (e) {
      return !t.contains(e);
    })), r ? i.reverse() : i;
  },
      i = function i(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return {
      node: t,
      content: e
    };
  };

  function s(e) {
    var t = r(e);
    return o(t).flatMap(function (e) {
      return e.nodeValue ? n(e.nodeValue).map(function (t) {
        return i(t, e);
      }) : i(e);
    });
  }

  function u(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    return t ? s(e) : n(e).map(function (e) {
      return i(e);
    });
  }

  var l = function l(e) {
    return document.createElement(e);
  },
      c = function c(e) {
    return document.createTextNode(e);
  },
      a = function a(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var n = l("style");
    n.id = t, n.appendChild(c(e)), document.head.appendChild(n);
  },
      f = function f(e) {
    return Array.isArray(e);
  };

  var h = function h(e) {
    return Number.isInteger(e);
  },
      d = function d(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    return t["querySelector" + (n ? "All" : "")](e);
  },
      m = "ti-cursor",
      v = "START",
      p = {
    started: !1,
    completed: !1,
    frozen: !1,
    destroyed: !1
  },
      y = {
    breakLines: !0,
    cursor: !0,
    cursorChar: "|",
    cursorSpeed: 1e3,
    deleteSpeed: null,
    html: !0,
    lifeLike: !0,
    loop: !1,
    loopDelay: 750,
    nextStringDelay: 750,
    speed: 100,
    startDelay: 250,
    startDelete: !1,
    strings: [],
    waitUntilVisible: !1,
    beforeString: function beforeString() {},
    afterString: function afterString() {},
    beforeStep: function beforeStep() {},
    afterStep: function afterStep() {},
    afterComplete: function afterComplete() {}
  };

  var g = function g(_ref) {
    var e = _ref.el,
        t = _ref.move,
        n = _ref.cursorPos,
        r = _ref.to;
    return h(t) ? -1 * t : function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : v;
      var r = new RegExp("END", "i").test(n),
          i = d(".ti-cursor", t),
          s = e ? d(e, t) : t,
          u = o(s, i, !0),
          l = u[0],
          c = u[u.length - 1],
          a = r && !e ? 0 : o(t, i, !0).findIndex(function (e) {
        return e.isSameNode(r ? l : c);
      });
      return r && a--, a + 1;
    }(t, e, r) - n;
  },
      P = function P(e) {
    return f(e) || (e = [e / 2, e / 2]), e;
  },
      b = function b(e, t) {
    return Math.abs(Math.random() * (e + t - (e - t)) + (e - t));
  };

  var N = function N(e) {
    return e / 2;
  };

  var S = function S(e) {
    return "value" in e;
  };

  var M = function M(e) {
    return "function" == typeof e ? e() : e;
  };

  var T = function T(e) {
    return "BODY" === e.tagName;
  };

  var j = function j(e, t) {
    var r = n(d("*", t, !0));
    return [t].concat(r.reverse()).find(function (t) {
      return t.cloneNode().isEqualNode(e.cloneNode());
    });
  },
      L = function L(e, t, n, r) {
    var i = t.content instanceof HTMLElement,
        s = t.node,
        u = null == s ? void 0 : s.parentNode,
        l = i ? t.content : c(t.content);
    if (S(e)) return void (e.value = "" + e.value + t.content);

    if (!i && u && !T(u)) {
      var _r = j(u, e);

      if (_r && function (e, t) {
        var n = e.nextSibling;
        return !n || n.isEqualNode(t);
      }(_r, n)) e = _r;else {
        l = u.cloneNode(), l.appendChild(c(t.content));

        var _n = u.parentNode,
            _r2 = _n.cloneNode();

        if (!T(_n)) {
          var _t2 = j(_r2, e);

          for (; !_t2 && !T(_n);) {
            var _o = _r2;
            _o.innerHTML = l.outerHTML, l = _o, _n = _n.parentNode, _r2 = _n.cloneNode(), _t2 = j(_r2, e);
          }

          e = _t2 || e;
        }
      }
    }

    var a = o(e, n, !0)[r - 1],
        f = a ? a.parentNode : e;
    f.insertBefore(l, f.contains(n) ? n : null);
  };

  var w = function w(e) {
    return e && e.remove();
  };

  var x = {
    "font-family": "",
    "font-weight": "",
    "font-size": "",
    "font-style": "",
    "line-height": "",
    color: "",
    "margin-left": "-.125em",
    "margin-right": ".125em"
  };

  function D(e, t, n) {
    if (!e.s) {
      if (n instanceof E) {
        if (!n.s) return void (n.o = D.bind(null, e, t));
        1 & t && (t = n.s), n = n.v;
      }

      if (n && n.then) return void n.then(D.bind(null, e, t), D.bind(null, e, 2));
      e.s = t, e.v = n;
      var _r3 = e.o;
      _r3 && _r3(e);
    }
  }

  var E = function () {
    function e() {}

    return e.prototype.then = function (t, n) {
      var r = new e(),
          o = this.s;

      if (o) {
        var _e = 1 & o ? t : n;

        if (_e) {
          try {
            D(r, 1, _e(this.v));
          } catch (e) {
            D(r, 2, e);
          }

          return r;
        }

        return this;
      }

      return this.o = function (e) {
        try {
          var _o2 = e.v;
          1 & e.s ? D(r, 1, t ? t(_o2) : _o2) : n ? D(r, 1, n(_o2)) : D(r, 2, _o2);
        } catch (e) {
          D(r, 2, e);
        }
      }, r;
    }, e;
  }();

  function k(e) {
    return e instanceof E && 1 & e.s;
  }

  function C(e, t, n) {
    var r,
        o,
        i = -1;
    return function s(u) {
      try {
        for (; ++i < e.length && (!n || !n());) {
          if ((u = t(i)) && u.then) {
            if (!k(u)) return void u.then(s, o || (o = D.bind(null, r = new E(), 2)));
            u = u.v;
          }
        }

        r ? D(r, 1, u) : r = u;
      } catch (e) {
        D(r || (r = new E()), 2, e);
      }
    }(), r;
  }

  function H(e, t, n) {
    for (var r;;) {
      var o = e();
      if (k(o) && (o = o.v), !o) return i;

      if (o.then) {
        r = 0;
        break;
      }

      var i = n();

      if (i && i.then) {
        if (!k(i)) {
          r = 1;
          break;
        }

        i = i.s;
      }

      if (t) {
        var s = t();

        if (s && s.then && !k(s)) {
          r = 2;
          break;
        }
      }
    }

    var u = new E(),
        l = D.bind(null, u, 2);
    return (0 === r ? o.then(a) : 1 === r ? i.then(c) : s.then(f)).then(void 0, l), u;

    function c(r) {
      i = r;

      do {
        if (t && (s = t()) && s.then && !k(s)) return void s.then(f).then(void 0, l);
        if (!(o = e()) || k(o) && !o.v) return void D(u, 1, i);
        if (o.then) return void o.then(a).then(void 0, l);
        k(i = n()) && (i = i.v);
      } while (!i || !i.then);

      i.then(c).then(void 0, l);
    }

    function a(e) {
      e ? (i = n()) && i.then ? i.then(c).then(void 0, l) : c(i) : D(u, 1, i);
    }

    function f() {
      (o = e()) ? o.then ? o.then(a).then(void 0, l) : a(o) : D(u, 1, i);
    }
  }

  return function (c) {
    var _this = this;

    var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var j = this,
        D = this,
        E = function E(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

      try {
        var _r4 = function _r4() {
          function r(r) {
            return Promise.resolve(function (e, t, n) {
              try {
                return Promise.resolve(new Promise(function (r) {
                  n.push(setTimeout(function () {
                    try {
                      return Promise.resolve(e()).then(function () {
                        r();
                      });
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  }, t));
                }));
              } catch (e) {
                return Promise.reject(e);
              }
            }(e, t, X)).then(function () {
              return n ? void 0 : Promise.resolve(ee.afterStep(j)).then(function (e) {});
            });
          }

          return n ? r() : Promise.resolve(ee.beforeStep(j)).then(r);
        };

        var _o3 = function () {
          if (_.frozen) return Promise.resolve(new Promise(function (e) {
            j.unfreeze = function () {
              _.frozen = !1, e();
            };
          })).then(function () {});
        }();

        return Promise.resolve(_o3 && _o3.then ? _o3.then(_r4) : _r4());
      } catch (e) {
        return Promise.reject(e);
      }
    },
        k = function k() {
      return S(K);
    },
        z = function z(e) {
      return function (e) {
        var t = e.speed,
            n = e.deleteSpeed,
            r = e.lifeLike;
        return n = null !== n ? n : t / 3, r ? [b(t, N(t)), b(n, N(n))] : [t, n];
      }(ee)[e];
    },
        I = function I(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return e ? z(t) : 0;
    },
        B = function B(e, t) {
      return ne.add(e), function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = e.delay;
        t && ne.add([[U, t]]);
      }(t), _this;
    },
        R = function R() {
      return function (e) {
        return S(e) ? n(e.value) : o(e, d(".ti-cursor", e), !0);
      }(K);
    },
        A = function A() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return [[F, e], [F, ee]];
    },
        O = function O(e) {
      var t = ee.nextStringDelay;
      ne.add([[U, t[0]]].concat(_toConsumableArray(e), [[U, t[1]]]));
    },
        V = function V(e) {
      re && (oe.classList.toggle("disabled", e), oe.classList.toggle("with-delay", !e));
    },
        q = function q() {
      try {
        var _e2;

        _.started = !0;

        var _t3 = ne.getItems();

        var _n2 = function (e, n) {
          try {
            var r = function () {
              function e() {
                return _.completed = !0, Promise.resolve(ee.afterComplete(D)).then(function () {
                  if (!ee.loop) throw "";
                  var e = ee.loopDelay;
                  E(function () {
                    try {
                      return Promise.resolve(function (e) {
                        try {
                          var _t4 = function _t4(t) {
                            return ne.reset(), ne.set(0, [U, e, {}]), Promise.resolve(J({
                              num: null
                            })).then(function () {});
                          };

                          return Promise.resolve(Z ? Promise.resolve(Q({
                            value: Z
                          })).then(_t4) : _t4());
                        } catch (e) {
                          return Promise.reject(e);
                        }
                      }(e[0])).then(function () {
                        q();
                      });
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  }, e[1]);
                });
              }

              var n = C(_t3, function (e) {
                var n = _t3[e],
                    r = n[2];
                return r.freezeCursor && V(!0), Promise.resolve(n[0].call(D, n[1], r)).then(function () {
                  ne.setMeta(e, {
                    executed: !0
                  }), V(!1);
                });
              });
              return n && n.then ? n.then(e) : e();
            }();
          } catch (e) {
            return;
          }

          return r && r.then ? r.then(void 0, function () {}) : r;
        }();

        return Promise.resolve(_n2 && _n2.then ? _n2.then(function (t) {
          return _e2 ? t : D;
        }) : _e2 ? _n2 : D);
      } catch (e) {
        return Promise.reject(e);
      }
    },
        U = function U() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return E(function () {}, e);
    },
        Q = function Q(_ref2) {
      var e = _ref2.value,
          _ref2$to = _ref2.to,
          t = _ref2$to === void 0 ? v : _ref2$to,
          _ref2$instant = _ref2.instant,
          n = _ref2$instant === void 0 ? !1 : _ref2$instant;

      try {
        var _r5 = g({
          el: K,
          move: e,
          cursorPos: Z,
          to: t
        }),
            _o4 = function _o4() {
          var e, t, n;
          e = _r5 < 0 ? -1 : 1, t = Z, n = R(), Z = Math.min(Math.max(t + e, 0), n.length), function (e, t, n, r) {
            var o = t[r - 1];
            (e = (null == o ? void 0 : o.parentNode) || e).insertBefore(n, o || null);
          }(K, R(), oe, Z);
        };

        return Promise.resolve(E(function () {
          try {
            var _e3 = 0;

            var _t5 = H(function () {
              return _e3 < Math.abs(_r5);
            }, function () {
              return _e3++;
            }, function () {
              return n ? void _o4() : Promise.resolve(E(_o4, z(0))).then(function (e) {});
            });

            return Promise.resolve(_t5 && _t5.then ? _t5.then(function () {}) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        }, I(n))).then(function () {});
      } catch (e) {
        return Promise.reject(e);
      }
    },
        Y = function Y(_ref3) {
      var e = _ref3.chars,
          t = _ref3.instant,
          n = _ref3.silent;
      var r = _this;
      return E(function () {
        try {
          var _o5 = function _o5(o) {
            function s() {
              return n ? void 0 : Promise.resolve(ee.afterString(e, r)).then(function (e) {});
            }

            var u = C(e, function (n) {
              return t ? void _i(e[n]) : Promise.resolve(E(function () {
                _i(e[n]);
              }, z(0))).then(function (e) {});
            });
            return u && u.then ? u.then(s) : s();
          };

          var _i = function _i(e) {
            return L(K, e, oe, Z);
          };

          return Promise.resolve(n ? _o5() : Promise.resolve(ee.beforeString(e, r)).then(_o5));
        } catch (e) {
          return Promise.reject(e);
        }
      }, I(t), !0);
    },
        F = function F(e) {
      try {
        return ee = t(ee, e), Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    },
        G = function G() {
      try {
        return k() ? (K.value = "", Promise.resolve()) : (R().forEach(function (e) {
          w(e);
        }), Promise.resolve());
      } catch (e) {
        return Promise.reject(e);
      }
    },
        J = function J(_ref4) {
      var _ref4$num = _ref4.num,
          e = _ref4$num === void 0 ? null : _ref4$num,
          _ref4$instant = _ref4.instant,
          t = _ref4$instant === void 0 ? !1 : _ref4$instant,
          _ref4$to = _ref4.to,
          n = _ref4$to === void 0 ? v : _ref4$to;

      try {
        return Promise.resolve(E(function () {
          try {
            var _r6 = h(e) ? e : g({
              el: K,
              move: e,
              cursorPos: Z,
              to: n
            });

            var _o6 = function _o6() {
              var e = R();
              var t;
              e.length && (k() ? K.value = K.value.slice(0, -1) : (w(e[Z]), t = oe, d("*", K, !0).forEach(function (e) {
                if (!e.innerHTML && "BR" !== e.tagName && !e.isSameNode(t)) {
                  var _t6 = e;

                  for (; 1 === _t6.parentElement.childNodes.length;) {
                    _t6 = _t6.parentElement;
                  }

                  w(_t6);
                }
              })));
            };

            var _i2 = 0;

            var _s = H(function () {
              return _i2 < _r6;
            }, function () {
              return _i2++;
            }, function () {
              return t ? void _o6() : Promise.resolve(E(_o6, z(1))).then(function (e) {});
            });

            return Promise.resolve(_s && _s.then ? _s.then(function () {}) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        }, I(t, 1))).then(function () {
          var t = function () {
            if (null === e && R().length - 1 > 0) return Promise.resolve(J({
              num: null
            })).then(function () {});
          }();

          if (t && t.then) return t.then(function () {});
        });
      } catch (e) {
        return Promise.reject(e);
      }
    };

    this["break"] = function (e) {
      var t = i(l("BR"));
      return B([[Y, {
        chars: [t],
        silent: !0
      }]], e);
    }, this["delete"] = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      e = M(e);
      var n = A(t),
          r = e,
          o = t.instant,
          i = t.to;
      return B([n[0], [J, {
        num: r,
        instant: o,
        to: i
      }, $], n[1]], t);
    }, this.empty = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return B([[G]], e);
    }, this.exec = function (e, t) {
      var n = A(t);
      return B([n[0], [e, null], n[1]], t);
    }, this.move = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      e = M(e);
      var n = A(t),
          r = t.instant,
          o = t.to;
      return B([n[0], [Q, {
        value: null === e ? "" : e,
        to: o,
        instant: r
      }, $], n[1]], t);
    }, this.options = function (e) {
      return e = M(e), B([[F, e]], e);
    }, this.pause = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return B([[U, M(e)]], t);
    }, this.type = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      e = M(e);
      var n = A(t),
          r = u(e, ee.html),
          o = t.instant;
      return B([n[0], [Y, {
        chars: r,
        instant: o
      }, $], n[1]], t);
    }, this.is = function (e) {
      return _[e];
    }, this.destroy = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      X.forEach(function (e) {
        return clearTimeout(e);
      }), X = [], M(e) && w(oe), _.destroyed = !0;
    }, this.freeze = function () {
      _.frozen = !0;
    }, this.unfreeze = function () {}, this.reset = function () {
      !this.is("destroyed") && this.destroy(), ne.reset(), Z = 0;

      for (var _e4 in _) {
        _[_e4] = !1;
      }

      return K[k() ? "value" : "innerHTML"] = "", this;
    }, this.go = function () {
      return _.started ? this : (function () {
        try {
          !k() && K.appendChild(oe), re ? (function (e, t, n) {
            var r = "[data-typeit-id='" + e + "'] ." + m,
                o = getComputedStyle(n),
                i = Object.entries(x).reduce(function (e, _ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  t = _ref6[0],
                  n = _ref6[1];

              return e + " " + t + ": var(--ti-" + t + ", " + (n || o[t]) + ");";
            }, "");
            a("@keyframes blink-" + e + " { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } " + r + " { display: inline; letter-spacing: -1em; " + i + " animation: blink-" + e + " " + t.cursorSpeed / 1e3 + "s infinite; } " + r + ".with-delay { animation-delay: 500ms; } " + r + ".disabled { animation: none; }", e);
          }(te, ee, K), Promise.resolve()) : Promise.resolve();
        } catch (e) {
          return Promise.reject(e);
        }
      }(), ee.waitUntilVisible ? (function (e, t) {
        new IntersectionObserver(function (n, r) {
          n.forEach(function (n) {
            n.isIntersecting && (t(), r.unobserve(e));
          });
        }, {
          threshold: 1
        }).observe(e);
      }(K, q.bind(this)), this) : (q(), this));
    }, this.getQueue = function () {
      return ne;
    }, this.getOptions = function () {
      return ee;
    }, this.getElement = function () {
      return K;
    };
    var K = "string" == typeof (W = c) ? d(W) : W;
    var W;

    var X = [],
        Z = 0,
        $ = {
      freezeCursor: !0
    },
        _ = t({}, p),
        ee = t(y, T);

    ee = t(ee, {
      html: !k() && ee.html,
      nextStringDelay: P(ee.nextStringDelay),
      loopDelay: P(ee.loopDelay)
    });

    var te = Math.random().toString().substring(2, 9),
        ne = function (n) {
      var r = function r(t) {
        return o = o.concat(t.map(function (t) {
          return e.map(function (e, n) {
            return t[n] ? t[n] : e;
          });
        })), this;
      };

      var o = [];
      return r(n), {
        add: r,
        set: function set(e, t) {
          o[e] = t;
        },
        reset: function reset() {
          o = o.map(function (e) {
            return e[2].executed = !1, e;
          });
        },
        getItems: function getItems() {
          return o.filter(function (e) {
            return !e[2].executed;
          });
        },
        setMeta: function setMeta(e, n) {
          o[e][2] = t(o[e][2], n);
        }
      };
    }([[U, ee.startDelay]]);

    K.dataset.typeitId = te, a("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}");

    var re = ee.cursor && !k(),
        oe = function () {
      if (k()) return;
      var e = l("span");
      return e.className = m, re ? (e.innerHTML = r(ee.cursorChar).innerHTML, e) : (e.style.visibility = "hidden", e);
    }();

    var ie;
    ee.strings = function (e) {
      var t = K.innerHTML;
      return t ? (K.innerHTML = "", ee.startDelete ? (s(t).forEach(function (e) {
        L(K, e, oe, Z);
      }), O([[J, {
        num: null
      }]]), e) : t.trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)) : e;
    }(f(ie = ee.strings) ? ie : [ie]), ee.strings.length && function () {
      var e = ee.strings.filter(function (e) {
        return !!e;
      });
      e.forEach(function (t, n) {
        var r = u(t, ee.html);
        if (ne.add([[Y, {
          chars: r
        }, $]]), n + 1 === e.length) return;
        var o = ee.breakLines ? [[Y, {
          chars: [i(l("BR"))],
          silent: !0
        }, $]] : [[J, {
          num: r.length
        }, $]];
        O(o);
      });
    }();
  };
});
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
function init() {
  var toggleNavButton = document.querySelector('.toggle_nav');
  var overlay = document.querySelector('.overlay');
  var typingElem = document.querySelectorAll('.typing');
  var tabNavs = document.querySelectorAll('.tab_navs > *');
  var tabContent = document.querySelectorAll('.tab_content > *');
  var moreButtons = document.querySelectorAll('.more');

  if (toggleNavButton) {
    var toggleNavHandler = function toggleNavHandler(e) {
      e.preventDefault();
      document.querySelector('body').classList.toggle('nav_open');
    };

    var closeAll = function closeAll(e) {
      e.preventDefault();
      document.querySelector('body').classList.remove('nav_open');
    };

    toggleNavButton.addEventListener('click', toggleNavHandler);
    overlay.addEventListener('click', closeAll);
  }

  if (typingElem.length) {
    var typingHandler = function typingHandler(elem, arr) {
      var instance = new TypeIt(elem, {
        loop: true
      });
      arr.map(function (str) {
        instance.type(str).pause(1000)["delete"]();
      });
      instance.go();
    };

    Array.from(typingElem).map(function (elem) {
      var str = elem.dataset.str;
      if (!str) return false;
      typingHandler(elem, str.split(','));
    });
  }

  if (tabNavs.length && tabContent.length) {
    var navs = Array.from(tabNavs);
    var tabs = Array.from(tabContent);
    var activeIndex = 0;

    var tabHandler = function tabHandler() {
      var newIndex = navs.indexOf(this);
      navs[activeIndex].classList.remove('active');
      tabs[activeIndex].style.display = 'none';
      navs[newIndex].classList.add('active');
      tabs[newIndex].style.display = 'block';
      activeIndex = newIndex;
    };

    navs.map(function (elem, index) {
      elem.addEventListener('click', tabHandler);
    });
  }

  if (moreButtons.length) {
    var showMoreHandler = function showMoreHandler(e) {
      e.preventDefault();
      var prevEl = this.previousElementSibling;
      prevEl.style.webkitLineClamp = 13;
      this.remove();
    };

    Array.from(moreButtons).map(function (elem) {
      elem.addEventListener('click', showMoreHandler);
    });
  }
}

document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map
