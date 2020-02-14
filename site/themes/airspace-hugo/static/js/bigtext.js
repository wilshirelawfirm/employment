/*! BigText - v1.0.1 - 2017-10-02
 * https://github.com/zachleat/bigtext
 * Copyright (c) 2017 Zach Leatherman (@zachleat)
 * MIT License */
(function(e, f) {
  var a = 0,
    d = f("head"),
    c = e.BigText,
    g = f.fn.bigtext,
    b = {
      DEBUG_MODE: false,
      DEFAULT_MIN_FONT_SIZE_PX: null,
      DEFAULT_MAX_FONT_SIZE_PX: 528,
      GLOBAL_STYLE_ID: "bigtext-style",
      STYLE_ID: "bigtext-id",
      LINE_CLASS_PREFIX: "bigtext-line",
      EXEMPT_CLASS: "bigtext-exempt",
      noConflict: function(h) {
        if (h) {
          f.fn.bigtext = g;
          e.BigText = c
        }
        return b
      },
      supports: {
        wholeNumberFontSizeOnly: (function() {
          if (!("getComputedStyle" in e)) {
            return true
          }
          var j = f("<div/>").css({
              position: "absolute",
              "font-size": "14.1px"
            }).insertBefore(f("script").eq(0)),
            h = e.getComputedStyle(j[0], null);
          var i = h && h.getPropertyValue("font-size") === "14px";
          j.remove();
          return i
        })()
      },
      init: function() {
        if (!f("#" + b.GLOBAL_STYLE_ID).length) {
          d.append(b.generateStyleTag(b.GLOBAL_STYLE_ID, [".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }", ".bigtext ." + b.EXEMPT_CLASS + ", .bigtext ." + b.EXEMPT_CLASS + " * { white-space: normal; }"]))
        }
      },
      bindResize: function(h, i) {
        var j;
        f(e).off(h).on(h, function() {
          if (j) {
            clearTimeout(j)
          }
          j = setTimeout(i, 100)
        })
      },
      getStyleId: function(h) {
        return b.STYLE_ID + "-" + h
      },
      generateStyleTag: function(i, h) {
        return f("<style>" + h.join("\n") + "</style>").attr("id", i)
      },
      clearCss: function(i) {
        var h = b.getStyleId(i);
        f("#" + h).remove()
      },
      generateCss: function(p, o, n, m) {
        var l = [];
        b.clearCss(p);
        for (var i = 0, h = o.length; i < h; i++) {
          l.push("#" + p + " ." + b.LINE_CLASS_PREFIX + i + " {" + (m[i] ? " white-space: normal;" : "") + (o[i] ? " font-size: " + o[i] + "px;" : "") + (n[i] ? " word-spacing: " + n[i] + "px;" : "") + "}")
        }
        return b.generateStyleTag(b.getStyleId(p), l)
      },
      jQueryMethod: function(h) {
        b.init();
        h = f.extend({
          minfontsize: b.DEFAULT_MIN_FONT_SIZE_PX,
          maxfontsize: b.DEFAULT_MAX_FONT_SIZE_PX,
          childSelector: "",
          resize: true
        }, h || {});
        this.each(function() {
          var m = f(this).addClass("bigtext"),
            k = m.width(),
            l = m.attr("id"),
            i = h.childSelector ? m.find(h.childSelector) : m.children();
          if (!l) {
            l = "bigtext-id" + (a++);
            m.attr("id", l)
          }
          if (h.resize) {
            b.bindResize("resize.bigtext-event-" + l, function() {
              b.jQueryMethod.call(f("#" + l), h)
            })
          }
          b.clearCss(l);
          i.addClass(function(n, o) {
            return [o.replace(new RegExp("\\b" + b.LINE_CLASS_PREFIX + "\\d+\\b"), ""), b.LINE_CLASS_PREFIX + n].join(" ")
          });
          var j = b.calculateSizes(m, i, k, h.maxfontsize, h.minfontsize);
          d.append(b.generateCss(l, j.fontSizes, j.wordSpacings, j.minFontSizes))
        });
        return this.trigger("bigtext:complete")
      },
      testLineDimensions: function(n, p, o, q, i, l, k) {
        var h;
        k = typeof k === "number" ? k : 0;
        n.css(o, q + l);
        h = n.width();
        if (h >= p) {
          n.css(o, "");
          if (h === p) {
            return {
              match: "exact",
              size: parseFloat((parseFloat(q) - 0.1).toFixed(3))
            }
          }
          var m = p - k,
            j = h - p;
          return {
            match: "estimate",
            size: parseFloat((parseFloat(q) - (o === "word-spacing" && k && (j < m) ? 0 : i)).toFixed(3))
          }
        }
        return h
      },
      calculateSizes: function(k, o, p, q, n) {
        var i = k.clone(true).addClass("bigtext-cloned").css({
          fontFamily: k.css("font-family"),
          textTransform: k.css("text-transform"),
          wordSpacing: k.css("word-spacing"),
          letterSpacing: k.css("letter-spacing"),
          position: "absolute",
          left: b.DEBUG_MODE ? 0 : -9999,
          top: b.DEBUG_MODE ? 0 : -9999
        }).appendTo(document.body);
        var j = [],
          h = [],
          m = [],
          l = [];
        o.css("float", "left").each(function() {
          var A = f(this),
            v = b.supports.wholeNumberFontSizeOnly ? [8, 4, 1] : [8, 4, 1, 0.1],
            x, z;
          if (A.hasClass(b.EXEMPT_CLASS)) {
            j.push(null);
            l.push(null);
            m.push(false);
            return
          }
          var B = 32,
            y = parseFloat(A.css("font-size")),
            w = (A.width() / y).toFixed(6);
          z = parseInt(p / w, 10) - B;
          outer: for (var s = 0, r = v.length; s < r; s++) {
            inner: for (var u = 1, t = 10; u <= t; u++) {
              if (z + u * v[s] > q) {
                z = q;
                break outer
              }
              x = b.testLineDimensions(A, p, "font-size", z + u * v[s], v[s], "px", x);
              if (typeof x !== "number") {
                z = x.size;
                if (x.match === "exact") {
                  break outer
                }
                break inner
              }
            }
          }
          l.push(p / z);
          if (z > q) {
            j.push(q);
            m.push(false)
          } else {
            if (!!n && z < n) {
              j.push(n);
              m.push(true)
            } else {
              j.push(z);
              m.push(false)
            }
          }
        }).each(function(s) {
          var w = f(this),
            v = 0,
            t = 1,
            u;
          if (w.hasClass(b.EXEMPT_CLASS)) {
            h.push(null);
            return
          }
          w.css("font-size", j[s] + "px");
          for (var r = 1, x = 3; r < x; r += t) {
            u = b.testLineDimensions(w, p, "word-spacing", r, t, "px", u);
            if (typeof u !== "number") {
              v = u.size;
              break
            }
          }
          w.css("font-size", "");
          h.push(v)
        }).removeAttr("style");
        if (!b.DEBUG_MODE) {
          i.remove()
        } else {
          i.css({
            "background-color": "rgba(255,255,255,.4)"
          })
        }
        return {
          fontSizes: j,
          wordSpacings: h,
          ratios: l,
          minFontSizes: m
        }
      }
    };
  f.fn.bigtext = b.jQueryMethod;
  e.BigText = b
})(this, jQuery);
