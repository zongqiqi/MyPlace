(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(Gw3x) {
        if (!Gw3x || !Gw3x.length) return null;
        var bei1x = window;
        for (var a = Gw3x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bei1x = bei1x[a[i]] = bei1x[a[i]] || {}, i++);
        return bei1x
    };
    NEJ.Q = function(bJ3x, Gw3x) {
        bJ3x = bJ3x || NEJ.O;
        var bs3x = Gw3x.split(".");
        for (var i = 0, l = bs3x.length; i < l; i++) {
            bJ3x = bJ3x[bs3x[i]];
            if (!bJ3x) break
        }
        return bJ3x
    };
    NEJ.C = function() {
        var bGF8x = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bBC7v = function(D2x, bz3x) {
            for (var x in bz3x)
                if (D2x == bz3x[x]) return x;
            return null
        };
        var bye6Y = {
                cw3x: 0,
                bm3x: 1,
                bC3x: 2,
                bW3x: 3,
                bL3x: 4,
                eX4b: 5,
                kl6f: 6,
                eE4I: 7
            },
            ut9k = {
                cF3x: 0,
                bn3x: 1,
                bG3x: 2,
                ci3x: 3,
                bQ3x: 4,
                gL5Q: 5,
                ll6f: 6,
                gj5o: 7
            };
        return function() {
            var fI4M = function() {
                this.bBF7y();
                return this.cw3x.apply(this, arguments)
            };
            fI4M.prototype.bBF7y = NEJ.F;
            fI4M.prototype.cw3x = NEJ.F;
            fI4M.N2x = function(AQ1x, bIv8n) {
                if (bGF8x(AQ1x)) return;
                if (bIv8n == null || !!bIv8n) NEJ.X(this, AQ1x, bGF8x);
                this.bWf9W = AQ1x;
                this.cs3x = AQ1x.prototype;
                var bI3x = function() {};
                bI3x.prototype = AQ1x.prototype;
                this.prototype = new bI3x;
                var GL3x = this.prototype;
                GL3x.constructor = this;
                var ck3x;
                for (var x in bye6Y) {
                    ck3x = bBC7v(bye6Y[x], ut9k);
                    if (!ck3x || !this.cs3x[x]) continue;
                    GL3x[x] = function(W2x) {
                        return function() {
                            this[W2x].apply(this, arguments)
                        }
                    }(ck3x)
                }
                var Ew2x = {};
                for (var x in ut9k) {
                    ck3x = bBC7v(ut9k[x], bye6Y);
                    if (!ck3x || !this.cs3x[ck3x]) continue;
                    Ew2x[ck3x] = AQ1x;
                    GL3x[x] = function(W2x) {
                        return function() {
                            var m2x, bI3x = this.bya6U[W2x],
                                VX8P = bI3x.prototype[W2x];
                            this.bya6U[W2x] = bI3x.bWf9W || AQ1x;
                            if (!!VX8P) m2x = VX8P.apply(this, arguments);
                            this.bya6U[W2x] = AQ1x;
                            return m2x
                        }
                    }(ck3x)
                }
                GL3x.bBF7y = function() {
                    this.bya6U = NEJ.X({}, Ew2x)
                };
                GL3x.cKz1x = GL3x.cF3x;
                return GL3x
            };
            return fI4M
        }
    }();
    NEJ.X = function(gn5s, bR3x, dZ4d) {
        if (!gn5s || !bR3x) return gn5s;
        dZ4d = dZ4d || NEJ.F;
        for (var x in bR3x) {
            if (bR3x.hasOwnProperty(x) && !dZ4d(bR3x[x], x)) gn5s[x] = bR3x[x]
        }
        return gn5s
    };
    NEJ.EX = function(gn5s, bR3x) {
        if (!gn5s || !bR3x) return gn5s;
        for (var x in gn5s) {
            if (gn5s.hasOwnProperty(x) && bR3x[x] != null) gn5s[x] = bR3x[x]
        }
        return gn5s
    };
    var Ik3x = Function.prototype;
    Ik3x.eH4L = function(lT6N, wv0x) {
        var f = NEJ.F,
            wv0x = wv0x || f,
            lT6N = lT6N || f,
            dv4z = this;
        return function() {
            var d2x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lT6N(d2x);
            if (!d2x.stopped) {
                d2x.value = dv4z.apply(this, d2x.args);
                wv0x(d2x)
            }
            return d2x.value
        }
    };
    Ik3x.f2x = function() {
        var bf2x = arguments,
            gn5s = arguments[0],
            bxW6Q = this;
        return function() {
            var tJ9A = NEJ.R.slice.call(bf2x, 1);
            NEJ.R.push.apply(tJ9A, arguments);
            return bxW6Q.apply(gn5s || window, tJ9A)
        }
    };
    Ik3x.ew4A = function() {
        var bf2x = arguments,
            gn5s = NEJ.R.shift.call(bf2x),
            bxW6Q = this;
        return function() {
            NEJ.R.push.apply(arguments, bf2x);
            return bxW6Q.apply(gn5s || window, arguments)
        }
    };
    var Ik3x = String.prototype;
    if (!Ik3x.trim) {
        Ik3x.trim = function() {
            var dg3x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(dg3x, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        O2x = c2x("nej.p"),
        vB9s = window.navigator.platform,
        vw9n = window.navigator.userAgent;
    var lt6n = {
        mac: vB9s,
        win: vB9s,
        linux: vB9s,
        ipad: vw9n,
        ipod: vw9n,
        iphone: vB9s,
        android: vw9n
    };
    O2x.Il3x = lt6n;
    for (var x in lt6n) lt6n[x] = (new RegExp(x, "i")).test(lt6n[x]);
    lt6n.ios = lt6n.ipad || lt6n.iphone || lt6n.ipod;
    lt6n.tablet = lt6n.ipad;
    lt6n.desktop = lt6n.mac || lt6n.win || lt6n.linux && !lt6n.android;
    var iu5z = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    O2x.dr4v = iu5z;
    if (/msie\s+(.*?);/i.test(vw9n) || /trident\/.+rv:([\d\.]+)/i.test(vw9n)) {
        iu5z.engine = "trident";
        iu5z.browser = "ie";
        iu5z.version = RegExp.$1;
        iu5z.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mC7v = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iu5z.release = mC7v[document.documentMode] || mC7v[parseInt(iu5z.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vw9n)) {
        iu5z.engine = "webkit";
        iu5z.release = RegExp.$1 || "";
        iu5z.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vw9n)) {
        iu5z.engine = "gecko";
        iu5z.release = RegExp.$1 || "";
        iu5z.browser = "firefox";
        iu5z.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vw9n)) iu5z.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vw9n)) {
        iu5z.engine = "presto";
        iu5z.release = RegExp.$1 || "";
        iu5z.browser = "opera";
        iu5z.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vw9n)) iu5z.version = RegExp.$1 || ""
    }
    if (iu5z.browser == "unknow") {
        var mC7v = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mC7v.length, W2x; i < l; i++) {
            W2x = mC7v[i] == "safari" ? "version" : mC7v[i];
            if ((new RegExp(W2x + "/(.*?)(?=\\s|$)", "i")).test(vw9n)) {
                iu5z.browser = mC7v[i];
                iu5z.version = RegExp.$1.trim();
                break
            }
        }
    }
    O2x.bJc8U = {};
    var bfr1x = iu5z.engine != "trident";
    O2x.mW7P = {
        gecko: iu5z.engine != "gecko",
        webkit: iu5z.engine != "webkit",
        presto: iu5z.engine != "presto",
        trident0: bfr1x || iu5z.release > "2.0",
        trident1: bfr1x || iu5z.release < "6.0",
        trident2: bfr1x || iu5z.release > "3.0",
        trident: bfr1x || iu5z.release >= "6.0"
    }
})();
(function() {
    var it5y = NEJ.P("nej.c"),
        R2x = {};
    var bxR6L = function() {
        var dg3x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y2x) {
            Y2x = Y2x || "";
            if (dg3x.test(Y2x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var PT6N = function() {
        var bJj8b = function(i2x, bz3x) {
            if (!i2x || !i2x.length) return;
            for (var i = 0, l = i2x.length, kb6V; i < l; i++) {
                kb6V = i2x[i];
                if (kb6V.indexOf("://") > 0) bz3x[bxR6L(kb6V)] = kb6V
            }
        };
        var bg2x = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bR3x) {
            it5y.Im3x("root", bR3x.root || "/res/");
            var bxI6C, ga5f = it5y.B2x("root");
            for (var x in bg2x) {
                bxI6C = bg2x[x];
                it5y.Im3x(x, bR3x[bxI6C.name] || ga5f + bxI6C.dft)
            }
            var AO1x = bR3x.p_csrf;
            if (AO1x == !0) {
                AO1x = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            it5y.Im3x("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, AO1x));
            R2x.frames = {};
            bJj8b(bR3x.p_frame, R2x.frames);
            R2x.flashs = {};
            bJj8b(bR3x.p_flash, R2x.flashs)
        }
    }();
    it5y.Im3x = function(K2x, D2x) {
        R2x[K2x] = D2x
    };
    it5y.B2x = function(K2x) {
        return R2x[K2x]
    };
    it5y.bWg9X = function(Y2x) {
        var pP8H = bxR6L(Y2x);
        return R2x.frames[pP8H] || pP8H + "/res/nej_proxy_frame.html"
    };
    it5y.bWk9b = function(Y2x) {
        return R2x.flashs[bxR6L(Y2x)]
    };
    PT6N(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        it5y = c2x("nej.c"),
        bR3x = window.NEJ_CONF || NEJ.O;
    if (O2x.mW7P.trident) return;
    it5y.Im3x("storage.swf", bR3x.storage || it5y.B2x("root") + "nej_storage.swf");
    if (O2x.dr4v.release < "4.0") {
        it5y.Im3x("blank.png", bR3x.blank || it5y.B2x("root") + "nej_blank.gif")
    }
    var i2x = bR3x.xdr,
        gO5T = /^(https?:\/\/.*?)(?=\/|$)/i,
        kf6Z = /[\/?=&]/i;
    var bHb8T = function(Y2x) {
        return (gO5T.test(Y2x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i2x && !!i2x.length)
        for (var i = i2x.length - 1, Y2x, K2x; i >= 0; i--) {
            Y2x = i2x[i];
            K2x = bHb8T(Y2x);
            if (!!K2x) it5y.Im3x(K2x, Y2x)
        }
    it5y.cKu1x = function(Y2x) {
        var K2x = bHb8T(Y2x);
        if (!K2x) {
            if (kf6Z.test(Y2x)) {
                K2x = location.protocol + "//" + location.host
            } else if (Y2x.indexOf("://") < 0) {
                K2x = location.protocol + "//" + Y2x
            } else {
                K2x = Y2x
            }
        }
        return it5y.B2x(K2x) || K2x + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c2x = NEJ.P,
        it5y = c2x("nej.c"),
        O2x = c2x("nej.g"),
        gG5L = +(new Date);
    O2x.cKt1x = 1e4 - gG5L;
    O2x.bxi6c = 10001 - gG5L;
    O2x.cKr1x = 10002 - gG5L;
    O2x.bNN0x = 10003 - gG5L;
    O2x.bWq9h = 10004 - gG5L;
    O2x.cKp1x = 10005 - gG5L;
    O2x.bxd6X = 10006 - gG5L;
    O2x.bWv9m = 10007 - gG5L;
    O2x.ym0x = "Content-Type";
    O2x.cKl1x = "text/plain";
    O2x.HK3x = "multipart/form-data";
    O2x.bWx9o = "application/x-www-form-urlencoded";
    O2x.bwJ5O = it5y.B2x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c2x = NEJ.P,
        fu4y = NEJ.R,
        O2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        be2x = c2x("nej.h");
    var ku6o = O2x.dr4v.prefix,
        bKw9n = O2x.bJc8U,
        bWA9r = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bWE9v = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        PH6B = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var PT6N = function() {
        var tw9n = be2x.bSO2x();
        bKw9n.css3d = !!tw9n && tw9n.m41 != null;
        var dg3x = /-([a-z])/g;
        for (var x in PH6B) {
            PH6B[bTE8w(x)] = PH6B[x]
        }
    };
    var bTE8w = function() {
        var dg3x = /-([a-z])/g;
        return function(W2x) {
            W2x = W2x || "";
            return W2x.replace(dg3x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bUm9d = function(W2x) {
        return (!bKw9n.css3d ? bWA9r : bWE9v)[W2x]
    };
    var bzr6l = function() {
        var dg3x = /\s+/;
        return function(fI4M) {
            fI4M = (fI4M || "").trim();
            return !!fI4M ? fI4M.split(dg3x) : null
        }
    }();
    var beU1x = function(F2x, u2x, fI4M) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return;
        k2x.bd2x(bzr6l(fI4M), function(ed4h) {
            F2x.classList[u2x](ed4h)
        })
    };
    be2x.Is3x = function(i2x) {
        return fu4y.slice.call(i2x, 0)
    };
    be2x.bwy5D = function(F2x) {
        return be2x.Is3x(F2x.children)
    };
    be2x.bwv5A = function(F2x, fI4M) {
        return be2x.Is3x(F2x.getElementsByClassName(fI4M))
    };
    be2x.bwu5z = function(F2x, Iu3x) {
        beU1x(F2x, "add", Iu3x)
    };
    be2x.bwl5q = function(F2x, Iy3x) {
        beU1x(F2x, "remove", Iy3x)
    };
    be2x.QR7K = function(F2x, Iy3x, Iu3x) {
        beU1x(F2x, "remove", Iy3x);
        beU1x(F2x, "add", Iu3x)
    };
    be2x.bwe5j = function(F2x, fI4M) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return !1;
        var i2x = F2x.classList;
        if (!i2x || !i2x.length) return !1;
        return k2x.dl4p(bzr6l(fI4M), function(ed4h) {
            return i2x.contains(ed4h)
        }) >= 0
    };
    be2x.bwd5i = function(F2x, ed4h) {};
    be2x.bvZ5e = function(F2x) {};
    be2x.bvY5d = function(gf5k, ou7n) {
        gf5k.selectionEnd = ou7n.end || 0;
        gf5k.selectionStart = ou7n.start || 0;
        gf5k.focus()
    };
    be2x.bvX5c = function(gf5k) {
        return {
            end: gf5k.selectionEnd,
            start: gf5k.selectionStart
        }
    };
    be2x.bvW5b = function() {
        var Gx3x = function(ed4h, d2x) {
            var F2x = h2x.X2x(d2x);
            if (!F2x.value) a1x.x2x(F2x, ed4h)
        };
        var Iz3x = function(ed4h, d2x) {
            a1x.y2x(h2x.X2x(d2x), ed4h)
        };
        return function(F2x, fn4r, ed4h) {
            if (fn4r == 1) {
                h2x.s2x(F2x, "blur", Gx3x.f2x(null, ed4h))
            }
            if (fn4r == 1 || fn4r == -1) {
                h2x.s2x(F2x, "focus", Iz3x.f2x(null, ed4h))
            }
        }
    }();
    be2x.bvQ5V = function(G2x) {
        return (new XMLSerializer).serializeToString(G2x) || ""
    };
    be2x.bvP5U = function(Bw1x) {
        var ga5f = (new DOMParser).parseFromString(Bw1x, "text/xml").documentElement;
        return ga5f.nodeName == "parsererror" ? null : ga5f
    };
    be2x.bvJ5O = function(F2x) {};
    be2x.nK7D = function(F2x) {
        return null
    };
    be2x.bvG5L = function(F2x) {
        return null
    };
    be2x.bvD5I = function(dR4V) {};
    be2x.bvA5F = function() {
        var bf2x = be2x.Is3x(arguments);
        bf2x[0] = a1x.B2x(bf2x[0]);
        if (!bf2x[0]) return null;
        bf2x[1] = (bf2x[1] || "").toLowerCase();
        if (!bf2x[1]) return null;
        return bf2x
    };
    be2x.AN1x = function() {
        var xv0x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            jp6j = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bWF9w = function(u2x) {
            return (ku6o.evt || ku6o.pro) + u2x
        };
        return function() {
            var bf2x = be2x.bvA5F.apply(be2x, arguments);
            if (!bf2x) return;
            var beD1x = jp6j[bf2x[1]],
                beC1x = xv0x[bf2x[1]];
            if (!!beD1x) {
                bf2x[4] = bf2x[1];
                bf2x[1] = bWF9w(beD1x)
            } else if (!!beC1x) {
                var W2x = "on" + bf2x[1];
                if (!(W2x in bf2x[0])) {
                    bf2x[4] = bf2x[1];
                    bf2x[1] = beC1x
                }
            }
            return bf2x
        }
    }();
    be2x.buU5Z = function() {
        var bf2x = arguments;
        bf2x[0].addEventListener(bf2x[1], bf2x[2], !!bf2x[3])
    };
    be2x.bey1x = function() {
        var bf2x = arguments;
        bf2x[0].removeEventListener(bf2x[1], bf2x[2], !!bf2x[3])
    };
    be2x.buH5M = function(F2x, u2x, e2x) {
        var d2x = document.createEvent("Event");
        d2x.initEvent(u2x, !0, !0);
        NEJ.X(d2x, e2x);
        F2x.dispatchEvent(d2x)
    };
    be2x.bSO2x = function() {
        var gO5T = /\((.*?)\)/,
            kf6Z = /\s*,\s*/,
            i2x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bew1x = function(tw9n) {
            var is5x = {};
            if (gO5T.test(tw9n || "")) {
                k2x.bd2x(RegExp.$1.split(kf6Z), function(D2x, r2x) {
                    is5x[i2x[r2x]] = D2x || ""
                })
            }
            return is5x
        };
        return function(tw9n) {
            if (!!window.CSSMatrix) return new CSSMatrix(tw9n);
            var W2x = ku6o.clz + "CSSMatrix";
            if (!!window[W2x]) return new window[W2x](tw9n || "");
            return bew1x(tw9n)
        }
    }();
    be2x.bEd7W = function() {
        var dg3x = /\{(.*?)\}/g;
        return function(W2x, bz3x) {
            bz3x = bz3x || o;
            var pc7V = bUm9d(W2x);
            return !pc7V ? "" : pc7V.replace(dg3x, function($1, $2) {
                var bs3x = $2.split("|");
                return bz3x[bs3x[0]] || bs3x[1] || "0"
            })
        }
    }();
    be2x.buA5F = function(F2x, W2x, D2x) {
        F2x.style[be2x.bFW8O(W2x)] = D2x
    };
    be2x.bFW8O = function() {
        var dg3x = /^[a-z]/,
            buw5B = ku6o.css;
        var bWG9x = function(W2x) {
            return W2x.replace(dg3x, function($1) {
                return buw5B + $1.toUpperCase()
            })
        };
        return function(W2x) {
            W2x = bTE8w(W2x);
            var bWN9E = be2x.bWQ9H(W2x, PH6B);
            return bWN9E ? bWG9x(W2x) : W2x
        }
    }();
    be2x.bWQ9H = function() {
        var dg3x = /^([a-z]+?)[A-Z]/;
        return function(W2x, bz3x) {
            if (!bz3x[W2x]) {
                if (dg3x.test(W2x)) W2x = RegExp.$1
            }
            return !!bz3x[W2x]
        }
    }();
    be2x.bWT9K = function() {
        var dg3x = /\$<(.*?)>/gi,
            buw5B = "-" + ku6o.css.toLowerCase() + "-";
        return function(kt6n) {
            return kt6n.replace(dg3x, function($1, $2) {
                var fv4z = $2,
                    bs3x = fv4z.split("|"),
                    pc7V = bUm9d(bs3x[0]);
                if (!!pc7V) {
                    return be2x.bEd7W(bs3x[0], k2x.hu5z(bs3x[1]))
                }
                return !be2x.bWZ0x(fv4z, PH6B) ? fv4z : buw5B + fv4z
            })
        }
    }();
    be2x.bWZ0x = function(W2x, bz3x) {
        return !!bz3x[W2x]
    };
    be2x.bun5s = function(cj3x, kt6n) {
        cj3x.textContent = kt6n
    };
    be2x.bum5r = function(cj3x, kt6n) {
        var yW0x = cj3x.sheet,
            bq3x = yW0x.cssRules.length;
        yW0x.insertRule(kt6n, bq3x);
        return yW0x.cssRules[bq3x]
    };
    be2x.cJY1x = function(F2x, e2x) {};
    be2x.beq1x = function(beo1x) {
        return (beo1x || "").toLowerCase() != "transparent"
    };
    be2x.bXd0x = function(F2x) {};
    be2x.bug5l = function(F2x, W2x) {
        if (!!F2x.getAttribute) return F2x.getAttribute(W2x);
        return ""
    };
    be2x.bem1x = function(eM4Q) {
        a1x.cM3x(eM4Q)
    };
    PT6N()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.p"),
        be2x = c2x("nej.h");
    if (O2x.mW7P.trident0) return;
    var gG5L = +(new Date);
    R2x = {};
    be2x.bwd5i = be2x.bwd5i.eH4L(function(d2x) {
        d2x.stopped = !0;
        var bf2x = d2x.args,
            C2x = a1x.lQ6K(bf2x[0]),
            K2x = "hover-" + C2x;
        if (!C2x || !!R2x[K2x]) return;
        R2x[K2x] = !0;
        h2x.s2x(C2x, "mouseenter", a1x.y2x.f2x(a1x, C2x, bf2x[1]));
        h2x.s2x(C2x, "mouseleave", a1x.x2x.f2x(a1x, C2x, bf2x[1]))
    });
    be2x.bvZ5e = function() {
        var cJW0x = function() {};
        return be2x.bvZ5e.eH4L(function(d2x) {
            d2x.stopped = !0;
            var F2x = d2x.args[0],
                C2x = "fixed-" + a1x.lQ6K(F2x);
            if (!!R2x[C2x]) return;
            var bg2x = {};
            R2x[C2x] = bg2x
        })
    }();
    be2x.bvJ5O = be2x.bvJ5O.eH4L(function(d2x) {
        d2x.stopped = !0;
        var F2x = d2x.args[0],
            cj3x = F2x.style,
            bCm7f = a1x.pn8f();
        cj3x.width = bCm7f.scrollWidth + "px";
        cj3x.height = bCm7f.scrollHeight + "px"
    });
    be2x.nK7D = be2x.nK7D.eH4L(function(d2x) {
        d2x.stopped = !0;
        var F2x = d2x.args[0],
            lk6e = R2x[F2x.msk];
        if (!lk6e) {
            F2x.msk = gG5L++;
            lk6e = a1x.di3x("iframe");
            lk6e.style.position = "absolute";
            R2x[F2x.msk] = lk6e
        }
        d2x.value = lk6e;
        var cj3x = lk6e.style;
        cj3x.top = (parseInt(a1x.df3x(F2x, "top")) || 0) + "px";
        cj3x.left = (parseInt(a1x.df3x(F2x, "left")) || 0) + "px";
        cj3x.width = F2x.offsetWidth + "px";
        cj3x.height = F2x.offsetHeight + "px";
        F2x.insertAdjacentElement("beforeBegin", lk6e)
    });
    be2x.bvG5L = be2x.bvG5L.eH4L(function(d2x) {
        d2x.stopped = !0;
        var lk6e = R2x[d2x.args[0].msk];
        if (!!lk6e) a1x.mR7K(lk6e)
    })
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        be2x = c2x("nej.h");
    if (O2x.mW7P.trident1) return;
    be2x.AN1x = function() {
        var xv0x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be2x.AN1x.eH4L(function(d2x) {
            var bf2x = be2x.bvA5F.apply(be2x, d2x.args);
            if (!bf2x) {
                d2x.stopped = !0;
                return
            }
            var u2x = xv0x[bf2x[1]];
            if (!!u2x && ("on" + u2x).toLowerCase() in bf2x[0]) {
                bf2x[4] = bf2x[1];
                bf2x[1] = u2x;
                d2x.stopped = !0;
                d2x.value = bf2x
            }
        })
    }();
    be2x.beq1x = function(beo1x) {
        return !0
    };
    be2x.bem1x = be2x.bem1x.eH4L(function(d2x) {
        d2x.stopped = !0;
        var eM4Q = d2x.args[0];
        a1x.ba2x(eM4Q, "display", "none");
        try {
            eM4Q.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        O2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        be2x = c2x("nej.h"),
        buc5h = {};
    if (O2x.mW7P.trident) return;
    be2x.Is3x = be2x.Is3x.eH4L(function(d2x) {
        d2x.stopped = !0;
        var i2x = d2x.args[0];
        if (!i2x) {
            d2x.value = null;
            return
        }
        var r2x = 0,
            m2x = [];
        while (!!i2x[r2x]) {
            m2x.push(i2x[r2x++])
        }
        d2x.value = m2x
    });
    be2x.bwy5D = be2x.bwy5D.eH4L(function(d2x) {
        d2x.stopped = !0;
        var bs3x = [];
        k2x.bd2x(d2x.args[0].childNodes, function(g2x) {
            if (g2x.nodeType == 1) bs3x.push(g2x)
        });
        d2x.value = bs3x
    });
    be2x.bwv5A = be2x.bwv5A.eH4L(function(d2x) {
        var F2x = d2x.args[0];
        if (!!F2x.getElementsByClassName) return;
        d2x.stopped = !0;
        var m2x = [],
            NG5L = new RegExp("(\\s|^)(?:" + d2x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k2x.bd2x(F2x.getElementsByTagName("*"), function(g2x) {
            if (NG5L.test(g2x.className)) m2x.push(g2x)
        });
        d2x.value = m2x
    });
    be2x.bvY5d = be2x.bvY5d.eH4L(function(d2x) {
        var gf5k = d2x.args[0],
            ou7n = d2x.args[1];
        if (gf5k.selectionStart == null) {
            d2x.stopped = !0;
            var de3x = gf5k.createTextRange();
            de3x.collapse(!0);
            de3x.moveStart("character", ou7n.start);
            de3x.moveEnd("character", ou7n.end - ou7n.start);
            de3x.select();
            gf5k.focus()
        }
    });
    be2x.bvX5c = be2x.bvX5c.eH4L(function(d2x) {
        var gf5k = d2x.args[0];
        gf5k.focus();
        if (gf5k.selectionStart == null) {
            d2x.stopped = !0;
            var bEW7P = document.selection.createRange();
            var bJU9L = gf5k.createTextRange();
            bJU9L.moveToBookmark(bEW7P.getBookmark());
            var btX5c = gf5k.createTextRange();
            btX5c.collapse(!0);
            btX5c.setEndPoint("EndToStart", bJU9L);
            var hv5A = btX5c.text.length;
            d2x.value = {
                start: hv5A,
                end: hv5A + bEW7P.text.length
            }
        }
    });
    be2x.bvQ5V = be2x.bvQ5V.eH4L(function(d2x) {
        if (!!window.XMLSerializer) return;
        d2x.stopped = !0;
        var F2x = d2x.args[0];
        d2x.value = F2x.xml != null ? F2x.xml : F2x.outHTML
    });
    be2x.bvP5U = function() {
        var NK5P = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXe0x = function() {
            try {
                for (var i = 0, l = NK5P.length; i < l; i++) return new ActiveXObject(NK5P[i])
            } catch (ex) {
                return null
            }
        };
        return be2x.bvP5U.eH4L(function(d2x) {
            if (!!window.DOMParser) return;
            d2x.stopped = !0;
            var nL7E = bXe0x();
            if (!!nL7E && nL7E.loadXML(d2x.args[0]) && !nL7E.parseError.errorCode) d2x.value = nL7E.documentElement
        })
    }();
    be2x.AN1x = function() {
        var jp6j = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jp6j) buc5h[jp6j[x]] = !0;
        var bXK0x = function(F2x, u2x) {
            if ("on" + u2x in F2x) return null;
            return jp6j[u2x] || ""
        };
        var bYc0x = function(u2x, dv4z) {
            var cA3x = dv4z;
            switch (u2x) {
                case "readystatechange":
                    cA3x = function(d2x) {
                        var F2x = h2x.X2x(d2x) || this;
                        if (F2x.readyState == "loaded" || F2x.readyState == "complete") {
                            d2x.target = F2x;
                            dv4z.call(F2x, d2x)
                        }
                    };
                    break;
                case "propertychange":
                    cA3x = function(d2x) {
                        var F2x = h2x.X2x(d2x) || this;
                        if ("value" in F2x && d2x.propertyName == "value") {
                            d2x.target = F2x;
                            dv4z.call(F2x, d2x)
                        }
                    };
                    break
            }
            return cA3x
        };
        return be2x.AN1x.eH4L(function(d2x) {
            var bf2x = be2x.bvA5F.apply(be2x, d2x.args);
            if (!bf2x) {
                d2x.stopped = !0;
                return
            }
            var u2x = bXK0x(bf2x[0], bf2x[1]);
            if (!!u2x) {
                d2x.stopped = !0;
                bf2x[4] = bf2x[1];
                bf2x[1] = u2x;
                if (!!bf2x[2]) {
                    bf2x[5] = bf2x[2];
                    bf2x[2] = bYc0x(bf2x[1], bf2x[2])
                }
                d2x.value = bf2x
            }
        }, function(d2x) {
            var bf2x = d2x.value;
            if (!bf2x[0] || !k2x.gE5J(bf2x[2])) return;
            if (!k2x.gE5J(bf2x[5])) bf2x[5] = bf2x[2];
            bf2x[2] = bf2x[2].f2x(bf2x[0])
        })
    }();
    be2x.buU5Z = be2x.buU5Z.eH4L(function(d2x) {
        var bf2x = d2x.args;
        if (!!buc5h[bf2x[1]] || !document.addEventListener) {
            d2x.stopped = !0;
            bf2x[0].attachEvent("on" + bf2x[1], bf2x[2])
        }
    });
    be2x.bey1x = be2x.bey1x.eH4L(function(d2x) {
        var bf2x = d2x.args;
        if (!!buc5h[bf2x[1]] || !document.removeEventListener) {
            d2x.stopped = !0;
            bf2x[0].detachEvent("on" + bf2x[1], bf2x[2])
        }
    });
    be2x.buH5M = be2x.buH5M.eH4L(function(d2x) {
        if (!document.createEvent) {
            d2x.stopped = !0;
            var bf2x = d2x.args,
                bPG0x = document.createEventObject();
            NEJ.X(bPG0x, bf2x[2]);
            try {
                bf2x[0].fireEvent("on" + bf2x[1], bPG0x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be2x.buA5F = be2x.buA5F.eH4L(function(d2x) {
        var bf2x = d2x.args,
            W2x = bf2x[1].toLowerCase();
        if (W2x == "opacity" && !(W2x in document.body.style)) {
            bf2x[1] = "filter";
            bf2x[2] = "alpha(opacity=" + bf2x[2] * 100 + ")"
        }
    });
    be2x.bun5s = function() {
        var fq4u = 30;
        return be2x.bun5s.eH4L(function(d2x) {
            var F2x = d2x.args[0];
            if (!F2x.styleSheet) return;
            d2x.stopped = !0;
            var kt6n = d2x.args[1];
            var i2x = document.styleSheets;
            if (i2x.length > fq4u) {
                F2x = i2x[fq4u];
                kt6n = F2x.cssText + kt6n
            } else {
                F2x = F2x.styleSheet
            }
            F2x.cssText = kt6n
        })
    }();
    be2x.bum5r = be2x.bum5r.eH4L(function(d2x) {
        var bf2x = d2x.args,
            yW0x = bf2x[0].sheet;
        if (!!yW0x) return;
        d2x.stopped = !0;
        var yW0x = bf2x[0].styleSheet,
            bq3x = yW0x.rules.length,
            bs3x = bf2x[1].split(/[\{\}]/);
        yW0x.addRule(bs3x[0], bs3x[1], bq3x);
        d2x.value = yW0x.rules[bq3x]
    });
    be2x.bvW5b = function() {
        var Gx3x = function(ed4h, d2x) {
            a1x.x2x(h2x.X2x(d2x), ed4h)
        };
        return be2x.bvW5b.eH4L(function(d2x) {
            if (O2x.dr4v.release >= "4.0") return;
            var bf2x = d2x.args;
            if (bf2x[1] != 1) {
                h2x.s2x(bf2x[0], "blur", Gx3x.f2x(null, bf2x[2]));
                bf2x[1] = -1
            }
        })
    }();
    be2x.beq1x = function(beo1x) {
        return !0
    };
    be2x.bug5l = be2x.bug5l.eH4L(function(d2x) {
        var bf2x = d2x.args,
            g2x = (bf2x[0].attributes || bb2x)[bf2x[1]];
        if (!!g2x) {
            d2x.stopped = !0;
            d2x.value = g2x.value
        }
    }, function(d2x) {
        var bf2x = d2x.args;
        if (bf2x[1] == "maxlength" && d2x.value == 2147483647) d2x.value = ""
    });
    if (O2x.dr4v.release < 5) {
        be2x.bvD5I = function() {
            var eh4l, eM4Q, kz6t = [],
                btU5Z = "cb-" + +(new Date),
                bo3x = '<script>parent.nej.h["' + btU5Z + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bzx6r = function() {
                eh4l = window.clearTimeout(eh4l);
                if (!kz6t.length) return;
                var dR4V = kz6t.shift();
                try {
                    var ws0x = eM4Q.contentWindow.document;
                    ws0x.open();
                    ws0x.write("<head><title>");
                    ws0x.write(document.title);
                    ws0x.write("</title>");
                    ws0x.write(bo3x.replace("#<HASH>", encodeURIComponent(dR4V)));
                    ws0x.write("</head><body></body>");
                    if (location.hostname != document.domain) ws0x.domain = document.domain;
                    ws0x.close();
                    be2x[btU5Z] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kz6t.unshift(dR4V)
                }
                eh4l = window.setTimeout(bzx6r, 50)
            };
            return be2x.bvD5I.eH4L(function(d2x) {
                d2x.stopped = !0;
                var dR4V = d2x.args[0];
                if (!!be2x[btU5Z] || !eM4Q && !dR4V) return;
                kz6t.push(dR4V);
                if (!eM4Q) eM4Q = a1x.beh1x();
                bzx6r()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        be2x = c2x("nej.h"),
        O2x = c2x("nej.p"),
        beg1x = O2x.bJc8U;
    if (O2x.mW7P.gecko) return;
    var PT6N = function() {
        beg1x.css3d = beg1x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(je5j, F2x) {
            if (!je5j || !F2x) return;
            switch (je5j) {
                case "beforeEnd":
                    this.appendChild(F2x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F2x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F2x) : this.insertBefore(F2x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F2x) : this.parentNode.insertBefore(F2x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bo3x) {
                this.textContent = bo3x
            })
        }
    };
    be2x.AN1x = function() {
        var gO5T = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be2x.AN1x.eH4L(function(d2x) {
            var bf2x = d2x.args;
            if (gO5T.test(bf2x[1] || "")) {
                d2x.stopped = !0;
                d2x.value = bf2x
            }
        })
    }();
    be2x.bXd0x = function() {
        var bYj0x = function(d2x) {
            h2x.bh2x(d2x);
            h2x.X2x(d2x).control.click()
        };
        return function(F2x) {
            h2x.s2x(F2x, "click", bYj0x)
        }
    }();
    PT6N()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        be2x = c2x("nej.h");
    var bee1x = function() {
        var mC7v = !!document.body.classList;
        return function() {
            return mC7v
        }
    }();
    var bCZ7S = function() {
        var dg3x = /\s+/g;
        return function(fI4M) {
            fI4M = (fI4M || "").trim();
            return !fI4M ? null : new RegExp("(\\s|^)(?:" + fI4M.replace(dg3x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be2x.QR7K = be2x.QR7K.eH4L(function(d2x) {
        if (bee1x()) return;
        d2x.stopped = !0;
        var bf2x = d2x.args,
            F2x = a1x.B2x(bf2x[0]);
        if (!F2x || !bf2x[1] && !bf2x[2]) return;
        var fI4M = F2x.className || "";
        var Iu3x = " " + (bf2x[2] || ""),
            Iy3x = bCZ7S((bf2x[1] || "") + Iu3x);
        !!Iy3x && (fI4M = fI4M.replace(Iy3x, "$1"));
        F2x.className = (fI4M + Iu3x).replace(/\s+/g, " ").trim()
    });
    be2x.bwu5z = be2x.bwu5z.eH4L(function(d2x) {
        if (bee1x()) return;
        d2x.stopped = !0;
        var bf2x = d2x.args;
        be2x.QR7K(bf2x[0], "", bf2x[1])
    });
    be2x.bwl5q = be2x.bwl5q.eH4L(function(d2x) {
        if (bee1x()) return;
        d2x.stopped = !0;
        var bf2x = d2x.args;
        be2x.QR7K(bf2x[0], bf2x[1], "")
    });
    be2x.bwe5j = be2x.bwe5j.eH4L(function(d2x) {
        if (bee1x()) return;
        d2x.stopped = !0;
        var bf2x = d2x.args,
            F2x = a1x.B2x(bf2x[0]);
        if (!F2x) {
            d2x.value = !1;
            return
        }
        var dg3x = bCZ7S(bf2x[1]);
        d2x.value = !dg3x ? !1 : dg3x.test(F2x.className || "")
    })
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be2x = c2x("nej.h");
    if (O2x.mW7P.webkit) return;
    be2x.beq1x = function(beo1x) {
        return !0
    }
})();
(function() {
    var c2x = NEJ.P,
        be2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        db3x = c2x("nej.x"),
        R2x = {};
    var bEo7h = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x || !R2x[F2x.id]) return;
        var bec1x = !0,
            C2x = F2x.id;
        k2x.eI4M(R2x[C2x], function() {
            bec1x = !1;
            return !0
        });
        if (bec1x) delete R2x[C2x]
    };
    h2x.s2x = db3x.s2x = function() {
        var bYq0x = function() {
            var bf2x = be2x.AN1x.apply(be2x, arguments);
            if (!bf2x || !bf2x[2]) return;
            var ur9i = a1x.lQ6K(bf2x[0]),
                pi7b = R2x[ur9i] || {};
            R2x[ur9i] = pi7b;
            ur9i = bf2x[4] || bf2x[1];
            var Do2x = pi7b[ur9i] || [];
            pi7b[ur9i] = Do2x;
            Do2x.push({
                type: bf2x[1],
                func: bf2x[2],
                capt: !!bf2x[3],
                sfun: bf2x[5] || bf2x[2]
            });
            return bf2x.slice(0, 4)
        };
        return function() {
            var bf2x = bYq0x.apply(null, arguments);
            if (!!bf2x) be2x.buU5Z.apply(be2x, bf2x);
            return this
        }
    }();
    h2x.ms7l = db3x.ms7l = function() {
        var bZf0x = function() {
            var tJ9A = arguments,
                ur9i = a1x.lQ6K(tJ9A[0]),
                pi7b = R2x[ur9i],
                u2x = (tJ9A[1] || "").toLowerCase(),
                d2x = tJ9A[2];
            if (!pi7b || !u2x || !d2x) return;
            pi7b = pi7b[u2x];
            if (!pi7b) return;
            var bZi0x = !!tJ9A[3],
                r2x = k2x.dl4p(pi7b, function(jp6j) {
                    return d2x == jp6j.sfun && bZi0x == jp6j.capt
                });
            if (r2x < 0) return;
            var jp6j = pi7b.splice(r2x, 1)[0];
            return !jp6j ? null : [a1x.B2x(ur9i), jp6j.type, jp6j.func, jp6j.capt]
        };
        return function() {
            var bf2x = bZf0x.apply(null, arguments);
            if (!!bf2x) {
                be2x.bey1x.apply(be2x, bf2x);
                bEo7h(bf2x[0])
            }
            return this
        }
    }();
    h2x.hj5o = db3x.hj5o = function() {
        var bIX8P = function() {
            var tJ9A = arguments,
                ur9i = a1x.lQ6K(tJ9A[0]),
                pi7b = R2x[ur9i],
                Do2x = (tJ9A[1] || "").toLowerCase();
            if (!pi7b || !Do2x) return;
            var F2x = a1x.B2x(ur9i);
            k2x.mY7R(pi7b[Do2x], function(jp6j, r2x, i2x) {
                be2x.bey1x(F2x, jp6j.type, jp6j.func, jp6j.capt);
                i2x.splice(r2x, 1)
            });
            delete pi7b[Do2x]
        };
        var bZj0x = function(F2x) {
            F2x = a1x.B2x(F2x);
            if (!F2x) return;
            var C2x = F2x.id;
            k2x.eI4M(R2x[C2x], function(i2x, u2x) {
                bIX8P(C2x, u2x)
            });
            delete R2x[C2x]
        };
        return function(F2x, u2x) {
            !u2x ? bZj0x(F2x) : bIX8P(F2x, u2x);
            bEo7h(F2x);
            return this
        }
    }();
    h2x.X2x = function() {
        var btA5F;
        var IK3x = function(W2x, F2x) {
            var bs3x = W2x.split(":");
            if (bs3x.length > 1) {
                if (!btA5F) btA5F = {
                    c: a1x.bE3x,
                    d: a1x.t2x,
                    a: a1x.gH5M
                };
                var IL3x = btA5F[bs3x[0]];
                if (!!IL3x) return !!IL3x(F2x, bs3x[1]);
                W2x = bs3x[1]
            }
            return !!a1x.gH5M(F2x, W2x) || !!a1x.t2x(F2x, W2x) || a1x.bE3x(F2x, W2x)
        };
        return function(d2x) {
            if (!d2x) return null;
            var F2x = d2x.target || d2x.srcElement,
                dZ4d = arguments[1];
            if (!dZ4d) return F2x;
            if (k2x.fB4F(dZ4d)) dZ4d = IK3x.f2x(null, dZ4d);
            if (k2x.gE5J(dZ4d)) {
                while (F2x) {
                    if (!!dZ4d(F2x)) return F2x;
                    F2x = F2x.parentNode
                }
                return null
            }
            return F2x
        }
    }();
    h2x.bh2x = function(d2x) {
        h2x.uj9a(d2x);
        h2x.cn3x(d2x);
        return this
    };
    h2x.uj9a = function(d2x) {
        if (!!d2x) {
            !!d2x.stopPropagation ? d2x.stopPropagation() : d2x.cancelBubble = !0
        }
        return this
    };
    h2x.cn3x = function(d2x) {
        if (!!d2x) {
            !!d2x.preventDefault ? d2x.preventDefault() : d2x.returnValue = !1
        }
        return this
    };
    h2x.cJM0x = function() {
        var rb8T = !1;
        var bZn0x = function() {
            if (rb8T) return;
            rb8T = !0;
            h2x.s2x(document, "click", bZB0x, !0)
        };
        var bZB0x = function(d2x) {
            var F2x = h2x.X2x(d2x),
                bZO0x = a1x.t2x(F2x, "stopped");
            if (bZO0x == "true") {
                h2x.bh2x(d2x);
                a1x.t2x(F2x, "stopped", "false")
            }
        };
        return function(d2x) {
            if (!d2x) return;
            if (d2x.type == "click") {
                h2x.bh2x(d2x);
                return
            }
            bZn0x();
            a1x.t2x(h2x.X2x(d2x), "stopped", "true")
        }
    }();
    h2x.jD6x = function(d2x) {
        return d2x.pageX != null ? d2x.pageX : d2x.clientX + a1x.pn8f().scrollLeft
    };
    h2x.lX6R = function(d2x) {
        return d2x.pageY != null ? d2x.pageY : d2x.clientY + a1x.pn8f().scrollTop
    };
    h2x.z2x = db3x.z2x = function(F2x, u2x, e2x) {
        var bf2x = be2x.AN1x(F2x, u2x);
        if (!!bf2x) be2x.buH5M(bf2x[0], bf2x[1], e2x);
        return this
    };
    c2x("dbg").dumpEV = function() {
        return R2x
    };
    db3x.isChange = !0
})();
(function() {
    var o = !0,
        w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {}
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {}
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = {
                        toString: 1
                    }, f).toString != m) p = function(a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0,
                    b, h, n;
                (b = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function(a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function(a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {
                        92: "\\\\",
                        34: '\\"',
                        8: "\\b",
                        12: "\\f",
                        10: "\\n",
                        13: "\\r",
                        9: "\\t"
                    },
                    u = function(a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function(a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function(a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function(a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {
                        92: "\\",
                        34: '"',
                        47: "/",
                        98: "\b",
                        116: "\t",
                        110: "\n",
                        102: "\f",
                        114: "\r"
                    },
                    b, A, j = function() {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function() {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function(a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function(a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function(a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function(a) {
                                I(d, a, c)
                            });
                        return c.call(a, b, d)
                    };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p");
    if (O2x.mW7P.trident0) return;
    JSON.parse = JSON.parse.eH4L(function(d2x) {
        var cN3x = d2x.args[0] || "";
        if (cN3x.length >= 5e5) {
            d2x.stopped = !0;
            d2x.value = eval("(" + cN3x + ")")
        }
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        en4r = c2x("nej.g"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        be2x = c2x("nej.h"),
        db3x = c2x("nej.x"),
        IN3x, btq5v = {},
        R2x = document.createDocumentFragment();
    a1x.lQ6K = db3x.lQ6K = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return;
        var C2x = !!F2x.id ? F2x.id : "auto-id-" + k2x.OK6E(16);
        F2x.id = C2x;
        if (a1x.B2x(C2x) != F2x) btq5v[C2x] = F2x;
        return C2x
    };
    a1x.B2x = db3x.B2x = function(F2x) {
        var g2x = btq5v["" + F2x];
        if (!!g2x) return g2x;
        if (!k2x.fB4F(F2x) && !k2x.td9U(F2x)) return F2x;
        return document.getElementById(F2x)
    };
    a1x.dm4q = db3x.dm4q = function(F2x, ed4h) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return null;
        var i2x = be2x.bwy5D(F2x);
        if (!!ed4h) k2x.mY7R(i2x, function(g2x, r2x) {
            if (!a1x.bE3x(g2x, ed4h)) i2x.splice(r2x, 1)
        });
        return i2x
    };
    a1x.H2x = db3x.H2x = function(F2x, fI4M) {
        F2x = a1x.B2x(F2x);
        return !F2x ? null : be2x.bwv5A(F2x, fI4M.trim())
    };
    a1x.bDj7c = db3x.bDj7c = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!!F2x) {
            F2x = F2x.parentNode;
            while (!!F2x) {
                if (F2x.scrollHeight > F2x.clientHeight) break;
                F2x = F2x.parentNode
            }
            if (!!F2x) return F2x
        }
        var pi7b = document.body.scrollHeight,
            Do2x = document.documentElement.scrollHeight;
        return Do2x >= pi7b ? document.documentElement : document.body
    };
    a1x.pn8f = function() {
        var bDC7v = function(i2x) {
            var m2x = 0;
            k2x.bd2x(i2x, function(eG4K) {
                if (!eG4K) return;
                if (!m2x) {
                    m2x = eG4K
                } else {
                    m2x = Math.min(m2x, eG4K)
                }
            });
            return m2x
        };
        return function(ws0x) {
            var IO3x = ws0x || document,
                CM1x = IO3x.body,
                CJ1x = IO3x.documentElement,
                m2x = {
                    scrollTop: Math.max(CM1x.scrollTop, CJ1x.scrollTop),
                    scrollLeft: Math.max(CM1x.scrollLeft, CJ1x.scrollLeft),
                    clientWidth: bDC7v([CM1x.clientWidth, CM1x.offsetWidth, CJ1x.clientWidth, CJ1x.offsetWidth]),
                    clientHeight: bDC7v([CM1x.clientHeight, CM1x.offsetHeight, CJ1x.clientHeight, CJ1x.offsetHeight])
                };
            m2x.scrollWidth = Math.max(m2x.clientWidth, CM1x.scrollWidth, CJ1x.scrollWidth);
            m2x.scrollHeight = Math.max(m2x.clientHeight, CM1x.scrollHeight, CJ1x.scrollHeight);
            return m2x
        }
    }();
    a1x.cJG0x = function(fq4u, ox7q) {
        var m2x = NEJ.X({}, ox7q),
            bFO8G = fq4u.width / fq4u.height,
            bdS1x = ox7q.width / ox7q.height;
        if (bFO8G > bdS1x && ox7q.height > fq4u.height) {
            m2x.height = fq4u.height;
            m2x.width = m2x.height * bdS1x
        }
        if (bFO8G < bdS1x && ox7q.width > fq4u.width) {
            m2x.width = fq4u.width;
            m2x.height = m2x.width / bdS1x
        }
        return m2x
    };
    a1x.cJF0x = function() {
        var dg3x = /\s+/;
        var uA9r = {
            left: function() {
                return 0
            },
            center: function(hD5I, ox7q) {
                return (hD5I.width - ox7q.width) / 2
            },
            right: function(hD5I, ox7q) {
                return hD5I.width - ox7q.width
            },
            top: function() {
                return 0
            },
            middle: function(hD5I, ox7q) {
                return (hD5I.height - ox7q.height) / 2
            },
            bottom: function(hD5I, ox7q) {
                return hD5I.height - ox7q.height
            }
        };
        return function(hD5I, ox7q, oo7h) {
            var m2x = {},
                bs3x = (oo7h || "").split(dg3x),
                gy5D = uA9r[bs3x[1]] || uA9r.middle,
                gZ5e = uA9r[bs3x[0]] || uA9r.center;
            m2x.top = gy5D(hD5I, ox7q);
            m2x.left = gZ5e(hD5I, ox7q);
            return m2x
        }
    }();
    a1x.tu9l = db3x.tu9l = function(F2x, ed4h) {
        be2x.bwd5i(F2x, ed4h || a1x.t2x(F2x, "hover") || "js-hover");
        return this
    };
    a1x.IR3x = db3x.IR3x = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return;
        be2x.bvZ5e(F2x)
    };
    a1x.cai0x = db3x.cai0x = function() {
        var R2x = {},
            bJE9v = 2;
        var caF0x = function(C2x, ed4h, d2x) {
            R2x[C2x] = [h2x.jD6x(d2x), h2x.lX6R(d2x)];
            a1x.y2x(C2x, ed4h)
        };
        var caR1x = function(C2x, ed4h, d2x) {
            var bM3x = R2x[C2x];
            if (!k2x.eJ4N(bM3x)) return;
            var cbr1x = Math.abs(h2x.jD6x(d2x) - bM3x[0]),
                cbG1x = Math.abs(h2x.lX6R(d2x) - bM3x[1]);
            if (cbr1x > bJE9v || cbG1x > bJE9v) bsR4V(C2x, ed4h)
        };
        var bsR4V = function(C2x, ed4h) {
            if (k2x.eJ4N(R2x[C2x])) {
                R2x[C2x] = -1;
                a1x.x2x(C2x, ed4h)
            }
        };
        return function(F2x, ed4h) {
            var C2x = a1x.lQ6K(F2x);
            if (!C2x || R2x[C2x] != null) return;
            R2x[C2x] = -1;
            ed4h = ed4h || a1x.t2x(C2x, "highlight") || "js-highlight";
            h2x.s2x(C2x, "touchstart", caF0x.f2x(null, C2x, ed4h));
            h2x.s2x(document, "touchmove", caR1x.f2x(null, C2x, ed4h));
            h2x.s2x(document, "touchend", bsR4V.f2x(null, C2x, ed4h));
            h2x.s2x(document, "touchcancel", bsR4V.f2x(null, C2x, ed4h))
        }
    }();
    a1x.Ct1x = db3x.Ct1x = function() {
        var cbI1x = function(C2x, ed4h, cbY1x) {
            var F2x = a1x.B2x(C2x),
                d2x = {
                    clazz: ed4h,
                    target: F2x
                };
            if (a1x.bE3x(F2x, ed4h)) {
                d2x.toggled = !1;
                a1x.x2x(F2x, ed4h)
            } else {
                d2x.toggled = !0;
                a1x.y2x(F2x, ed4h)
            }
            cbY1x.call(null, d2x)
        };
        return function(F2x, e2x) {
            F2x = a1x.B2x(F2x);
            if (!!F2x) {
                var is5x = {
                    ontoggle: br3x,
                    clazz: "js-toggle",
                    element: F2x.parentNode
                };
                if (k2x.fB4F(e2x)) {
                    var g2x = a1x.B2x(e2x);
                    !!g2x ? is5x.element = g2x : is5x.clazz = e2x
                } else {
                    NEJ.EX(is5x, e2x);
                    is5x.element = a1x.B2x(is5x.element)
                }
                var C2x = a1x.lQ6K(is5x.element);
                h2x.s2x(F2x, "click", cbI1x.f2x(null, C2x, is5x.clazz, is5x.ontoggle || br3x))
            }
            return this
        }
    }();
    a1x.mt7m = db3x.mt7m = function(F2x, e2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return;
        var fn4r = 0,
            ed4h = "js-focus";
        if (k2x.td9U(e2x)) {
            fn4r = e2x
        } else if (k2x.fB4F(e2x)) {
            ed4h = e2x
        } else if (k2x.lG6A(e2x)) {
            fn4r = e2x.mode || fn4r;
            ed4h = e2x.clazz || ed4h
        }
        var D2x = parseInt(a1x.t2x(F2x, "mode"));
        if (!isNaN(D2x)) fn4r = D2x;
        D2x = a1x.t2x(F2x, "focus");
        if (!!D2x) ed4h = D2x;
        be2x.bvW5b(F2x, fn4r, ed4h);
        return this
    };
    a1x.di3x = function() {
        var bz3x = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fy4C, fI4M, bI3x) {
            var F2x = document.createElement(fy4C);
            NEJ.X(F2x, bz3x[fy4C.toLowerCase()]);
            if (!!fI4M) F2x.className = fI4M;
            bI3x = a1x.B2x(bI3x);
            if (!!bI3x) bI3x.appendChild(F2x);
            return F2x
        }
    }();
    a1x.beh1x = function() {
        var cci1x = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ccT1x = function(W2x) {
            W2x = W2x.trim();
            if (!W2x) return a1x.di3x("iframe");
            var eM4Q;
            try {
                eM4Q = document.createElement('<iframe name="' + W2x + '"></iframe>');
                eM4Q.frameBorder = 0
            } catch (e) {
                eM4Q = a1x.di3x("iframe");
                eM4Q.name = W2x
            }
            return eM4Q
        };
        return function(e2x) {
            e2x = e2x || bb2x;
            var eM4Q = ccT1x(e2x.name || "");
            if (!e2x.visible) eM4Q.style.display = "none";
            if (k2x.gE5J(e2x.onload)) h2x.s2x(eM4Q, "load", function(d2x) {
                if (!eM4Q.src) return;
                h2x.hj5o(eM4Q, "load");
                e2x.onload(d2x)
            });
            var bI3x = e2x.parent;
            if (k2x.gE5J(bI3x)) {
                try {
                    bI3x(eM4Q)
                } catch (e) {}
            } else {
                (a1x.B2x(bI3x) || document.body).appendChild(eM4Q)
            }
            var cS3x = e2x.src || cci1x();
            window.setTimeout(function() {
                eM4Q.src = cS3x
            }, 0);
            return eM4Q
        }
    }();
    a1x.cM3x = db3x.cM3x = function() {
        var bQS1x = function(Ar1x) {
            Ar1x.src = en4r.bwJ5O
        };
        var bSE2x = function(em4q) {
            em4q.src = "about:blank"
        };
        return function(F2x, cdf1x) {
            F2x = a1x.B2x(F2x);
            if (!F2x) return this;
            if (!cdf1x) h2x.hj5o(F2x);
            delete btq5v[F2x.id];
            var fy4C = F2x.tagName;
            if (fy4C == "IFRAME") {
                bSE2x(F2x)
            } else if (fy4C == "IMG") {
                bQS1x(F2x)
            } else if (!!F2x.getElementsByTagName) {
                k2x.bd2x(F2x.getElementsByTagName("img"), bQS1x);
                k2x.bd2x(F2x.getElementsByTagName("iframe"), bSE2x)
            }
            if (!!F2x.parentNode) {
                F2x.parentNode.removeChild(F2x)
            }
            return this
        }
    }();
    a1x.mR7K = db3x.mR7K = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!!F2x) R2x.appendChild(F2x);
        return this
    };
    a1x.bTy8q = db3x.bTy8q = function(F2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return;
        k2x.mY7R(F2x.childNodes, function(g2x) {
            a1x.cM3x(g2x)
        })
    };
    a1x.IV3x = db3x.IV3x = function() {
        var ed4h, gO5T = /\s+/;
        var cdx1x = function() {
            if (!!ed4h) return;
            ed4h = a1x.ty9p(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a1x.bVK9B()
        };
        return function(F2x, e2x) {
            F2x = a1x.B2x(F2x);
            if (!F2x) return;
            cdx1x();
            e2x = e2x || bb2x;
            var bI3x = F2x.parentNode;
            if (!a1x.bE3x(bI3x, ed4h)) {
                bI3x = a1x.di3x("span", ed4h);
                F2x.insertAdjacentElement("beforeBegin", bI3x);
                bI3x.appendChild(F2x)
            }
            var bzk6e = e2x.nid || "",
                g2x = a1x.H2x(bI3x, bzk6e || ed4h + "-show")[0];
            if (!g2x) {
                var ee4i = ((e2x.clazz || "") + " " + bzk6e).trim();
                ee4i = ed4h + "-show" + (!ee4i ? "" : " ") + ee4i;
                g2x = a1x.di3x(e2x.tag || "span", ee4i);
                bI3x.appendChild(g2x)
            }
            var ee4i = e2x.clazz;
            if (!!ee4i) {
                ee4i = (ee4i || "").trim().split(gO5T)[0] + "-parent";
                a1x.y2x(bI3x, ee4i)
            }
            return g2x
        }
    }();
    a1x.t2x = db3x.t2x = function() {
        var bsE4I = {},
            fy4C = "data-",
            dg3x = /\-(.{1})/gi;
        var Fk2x = function(F2x) {
            var C2x = a1x.lQ6K(F2x);
            if (!!bsE4I[C2x]) return;
            var bz3x = {};
            k2x.bd2x(F2x.attributes, function(g2x) {
                var K2x = g2x.nodeName;
                if (K2x.indexOf(fy4C) != 0) return;
                K2x = K2x.replace(fy4C, "").replace(dg3x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz3x[K2x] = g2x.nodeValue || ""
            });
            bsE4I[C2x] = bz3x
        };
        return function(F2x, K2x, D2x) {
            F2x = a1x.B2x(F2x);
            if (!F2x) return null;
            var bdM1x = F2x.dataset;
            if (!bdM1x) {
                Fk2x(F2x);
                bdM1x = bsE4I[F2x.id]
            }
            if (D2x !== undefined) bdM1x[K2x] = D2x;
            return bdM1x[K2x]
        }
    }();
    a1x.gH5M = db3x.gH5M = function(F2x, W2x, D2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return "";
        if (D2x !== undefined && !!F2x.setAttribute) F2x.setAttribute(W2x, D2x);
        return be2x.bug5l(F2x, W2x)
    };
    a1x.os7l = function(dW4a) {
        var rG8y = document.createElement("div");
        rG8y.innerHTML = dW4a;
        var i2x = a1x.dm4q(rG8y);
        return i2x.length > 1 ? rG8y : i2x[0]
    };
    a1x.cdS1x = db3x.cdS1x = function(F2x) {
        F2x = a1x.B2x(F2x);
        return !F2x ? "" : be2x.bvQ5V(F2x)
    };
    a1x.bCl7e = function(Bw1x) {
        Bw1x = (Bw1x || "").trim();
        return !Bw1x ? null : be2x.bvP5U(Bw1x)
    };
    a1x.cea1x = function(cK3x, u2x) {
        cK3x = cK3x || "";
        switch (u2x) {
            case "xml":
                cK3x = a1x.bCl7e(cK3x);
                break;
            case "json":
                try {
                    cK3x = JSON.parse(cK3x)
                } catch (ex) {
                    cK3x = null
                }
                break
        }
        return cK3x
    };
    a1x.hO5T = db3x.hO5T = function() {
        var cfj2x = function(F2x) {
            return F2x == document.body || F2x == document.documentElement
        };
        return function(ec4g, nI7B) {
            ec4g = a1x.B2x(ec4g);
            if (!ec4g) return null;
            nI7B = a1x.B2x(nI7B) || null;
            var m2x = {
                    x: 0,
                    y: 0
                },
                bsk4o, dq4u, bdF1x;
            while (!!ec4g && ec4g != nI7B) {
                bsk4o = cfj2x(ec4g);
                dq4u = bsk4o ? 0 : ec4g.scrollLeft;
                bdF1x = parseInt(a1x.df3x(ec4g, "borderLeftWidth")) || 0;
                m2x.x += ec4g.offsetLeft + bdF1x - dq4u;
                dq4u = bsk4o ? 0 : ec4g.scrollTop;
                bdF1x = parseInt(a1x.df3x(ec4g, "borderTopWidth")) || 0;
                m2x.y += ec4g.offsetTop + bdF1x - dq4u;
                ec4g = ec4g.offsetParent
            }
            return m2x
        }
    }();
    a1x.nb7U = db3x.nb7U = function(F2x) {
        var bi2x = a1x.hO5T(F2x);
        window.scrollTo(bi2x.x, bi2x.y);
        return this
    };
    a1x.cJe0x = function(tw9n) {
        tw9n = (tw9n || "").trim();
        return be2x.bSO2x(tw9n)
    };
    a1x.cfm2x = db3x.cfm2x = function(F2x, W2x, bz3x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return this;
        var D2x = be2x.bEd7W(W2x, bz3x);
        if (!D2x) return this;
        a1x.ba2x(F2x, "transform", D2x);
        return this
    };
    a1x.fa4e = db3x.fa4e = function(F2x, bz3x) {
        F2x = a1x.B2x(F2x);
        if (!!F2x) k2x.eI4M(bz3x, function(D2x, W2x) {
            a1x.ba2x(F2x, W2x, D2x)
        });
        return this
    };
    a1x.cfq2x = db3x.cfq2x = function(gf5k, e2x) {
        gf5k = a1x.B2x(gf5k);
        if (!gf5k) return {
            start: 0,
            end: 0
        };
        if (k2x.td9U(e2x)) e2x = {
            start: e2x,
            end: e2x
        };
        if (e2x != null) {
            if (e2x.end == null) e2x.end = e2x.start || 0;
            be2x.bvY5d(gf5k, e2x)
        } else {
            e2x = be2x.bvX5c(gf5k)
        }
        return e2x
    };
    a1x.ba2x = db3x.ba2x = function(F2x, W2x, D2x) {
        F2x = a1x.B2x(F2x);
        if (!!F2x) be2x.buA5F(F2x, W2x, D2x);
        return this
    };
    a1x.df3x = db3x.df3x = function(F2x, W2x) {
        F2x = a1x.B2x(F2x);
        if (!F2x) return "";
        var hc5h = !window.getComputedStyle ? F2x.currentStyle || bb2x : window.getComputedStyle(F2x, null);
        return hc5h[be2x.bFW8O(W2x)] || ""
    };
    a1x.bFZ8R = function() {
        var dg3x = /[\s\r\n]+/gi;
        return function(cj3x) {
            cj3x = (cj3x || "").trim().replace(dg3x, " ");
            if (!cj3x) return;
            var g2x = a1x.di3x("style");
            document.head.appendChild(g2x);
            be2x.bun5s(g2x, be2x.bWT9K(cj3x));
            return g2x
        }
    }();
    a1x.bGt8l = function(ye0x) {
        try {
            ye0x = ye0x.trim();
            if (!!ye0x) return (new Function(ye0x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a1x.ty9p = function() {
        var dg3x = /#<.*?>/g,
            gG5L = +(new Date);
        return function(kt6n) {
            if (!IN3x) IN3x = [];
            var fI4M = "auto-" + gG5L++;
            IN3x.push(kt6n.replace(dg3x, fI4M));
            return fI4M
        }
    }();
    a1x.bVK9B = function() {
        if (!!IN3x) {
            a1x.bFZ8R(IN3x.join(""));
            IN3x = null
        }
        return this
    };
    a1x.cJb0x = function(cj3x, kt6n) {
        cj3x = a1x.B2x(cj3x);
        return !cj3x ? null : be2x.bum5r(cj3x, kt6n)
    };
    a1x.y2x = db3x.y2x = function() {
        be2x.bwu5z.apply(be2x, arguments);
        return this
    };
    a1x.x2x = db3x.x2x = function() {
        be2x.bwl5q.apply(be2x, arguments);
        return this
    };
    a1x.fk4o = db3x.fk4o = function() {
        be2x.QR7K.apply(be2x, arguments);
        return this
    };
    a1x.bE3x = db3x.bE3x = function() {
        return be2x.bwe5j.apply(be2x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    db3x.isChange = !0
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        be2x = c2x("nej.h"),
        k2x = c2x("nej.u");
    var Ef2x = function(j2x, u2x) {
        try {
            u2x = u2x.toLowerCase();
            if (j2x === null) return u2x == "null";
            if (j2x === undefined) return u2x == "undefined";
            return bb2x.toString.call(j2x).toLowerCase() == "[object " + u2x + "]"
        } catch (e) {
            return !1
        }
    };
    k2x.gE5J = function(j2x) {
        return Ef2x(j2x, "function")
    };
    k2x.fB4F = function(j2x) {
        return Ef2x(j2x, "string")
    };
    k2x.td9U = function(j2x) {
        return Ef2x(j2x, "number")
    };
    k2x.cJa0x = function(j2x) {
        return Ef2x(j2x, "boolean")
    };
    k2x.EQ2x = function(j2x) {
        return Ef2x(j2x, "date")
    };
    k2x.eJ4N = function(j2x) {
        return Ef2x(j2x, "array")
    };
    k2x.lG6A = function(j2x) {
        return Ef2x(j2x, "object")
    };
    k2x.fx4B = function() {
        var dg3x = /[^\x00-\xfff]/g;
        return function(bo3x) {
            return ("" + (bo3x || "")).replace(dg3x, "**").length
        }
    }();
    k2x.dl4p = function(i2x, p2x) {
        var dZ4d = k2x.gE5J(p2x) ? p2x : function(D2x) {
                return D2x === p2x
            },
            r2x = k2x.eI4M(i2x, dZ4d);
        return r2x != null ? r2x : -1
    };
    k2x.cIW0x = function() {
        var bJA9r;
        var PN6H = function(i2x, oO7H, pb7U) {
            if (oO7H > pb7U) return -1;
            var Gd2x = Math.ceil((oO7H + pb7U) / 2),
                m2x = bJA9r(i2x[Gd2x], Gd2x, i2x);
            if (m2x == 0) return Gd2x;
            if (m2x < 0) return PN6H(i2x, oO7H, Gd2x - 1);
            return PN6H(i2x, Gd2x + 1, pb7U)
        };
        return function(i2x, IL3x) {
            bJA9r = IL3x || br3x;
            return PN6H(i2x, 0, i2x.length - 1)
        }
    }();
    k2x.mY7R = function(i2x, cA3x, P2x) {
        if (!i2x || !i2x.length || !k2x.gE5J(cA3x)) return null;
        for (var i = i2x.length - 1; i >= 0; i--)
            if (!!cA3x.call(P2x, i2x[i], i, i2x)) return i;
        return null
    };
    k2x.bd2x = function(i2x, cA3x, P2x) {
        if (!i2x || !i2x.length || !k2x.gE5J(cA3x)) return this;
        if (!!i2x.forEach) {
            i2x.forEach(cA3x, P2x);
            return this
        }
        for (var i = 0, l = i2x.length; i < l; i++) cA3x.call(P2x, i2x[i], i, i2x);
        return this
    };
    k2x.eI4M = function(i2x, cA3x, P2x) {
        if (!i2x || !k2x.gE5J(cA3x)) return null;
        if (i2x.length != null) {
            if (i2x.length > 0)
                for (var i = 0, l = i2x.length; i < l; i++)
                    if (!!cA3x.call(P2x, i2x[i], i, i2x)) return i
        }
        if (k2x.lG6A(i2x)) {
            for (var x in i2x)
                if (i2x.hasOwnProperty(x) && !!cA3x.call(P2x, i2x[x], x, i2x)) return x
        }
        return null
    };
    k2x.cgd2x = function(jm5r, cgs2x, e2x) {
        jm5r = jm5r || [];
        e2x = e2x || bb2x;
        var bNl9c = !!e2x.union,
            wY0x = !!e2x.begin,
            bdl1x = e2x.compare,
            cgt2x = bNl9c && wY0x ? k2x.mY7R : k2x.bd2x;
        cgt2x(cgs2x, function(p2x) {
            if (!!bdl1x) bdl1x = bdl1x.ew4A(p2x);
            var r2x = k2x.dl4p(jm5r, bdl1x || p2x);
            if (r2x >= 0) jm5r.splice(r2x, 1);
            if (bNl9c) jm5r[wY0x ? "unshift" : "push"](p2x)
        });
        return jm5r
    };
    k2x.Cb1x = function(bz3x, bo3x) {
        if (!bz3x || !bo3x || !bo3x.replace) return bo3x || "";
        return bo3x.replace(bz3x.r, function($1) {
            var m2x = bz3x[!bz3x.i ? $1.toLowerCase() : $1];
            return m2x != null ? m2x : $1
        })
    };
    k2x.dH4L = function() {
        var bz3x = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bo3x) {
            return k2x.Cb1x(bz3x, bo3x)
        }
    }();
    k2x.Az1x = function() {
        var bz3x = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bo3x) {
            return k2x.Cb1x(bz3x, bo3x)
        }
    }();
    k2x.ia5f = function() {
        var bz3x = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cgQ2x = ["上午", "下午"],
            cgY2x = ["A.M.", "P.M."],
            brh4l = ["日", "一", "二", "三", "四", "五", "六"],
            cha2x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            chF2x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var QQ7J = function(gW5b) {
            gW5b = parseInt(gW5b) || 0;
            return (gW5b < 10 ? "0" : "") + gW5b
        };
        var chQ2x = function(qj8b) {
            return qj8b < 12 ? 0 : 1
        };
        return function(bA3x, Jj3x, cia2x) {
            if (!bA3x || !Jj3x) return "";
            bA3x = k2x.bdb1x(bA3x);
            bz3x.yyyy = bA3x.getFullYear();
            bz3x.yy = ("" + bz3x.yyyy).substr(2);
            bz3x.M = bA3x.getMonth() + 1;
            bz3x.MM = QQ7J(bz3x.M);
            bz3x.eM = chF2x[bz3x.M - 1];
            bz3x.cM = cha2x[bz3x.M - 1];
            bz3x.d = bA3x.getDate();
            bz3x.dd = QQ7J(bz3x.d);
            bz3x.H = bA3x.getHours();
            bz3x.HH = QQ7J(bz3x.H);
            bz3x.m = bA3x.getMinutes();
            bz3x.mm = QQ7J(bz3x.m);
            bz3x.s = bA3x.getSeconds();
            bz3x.ss = QQ7J(bz3x.s);
            bz3x.ms = bA3x.getMilliseconds();
            bz3x.w = brh4l[bA3x.getDay()];
            var bUG9x = chQ2x(bz3x.H);
            bz3x.ct = cgQ2x[bUG9x];
            bz3x.et = cgY2x[bUG9x];
            if (!!cia2x) {
                bz3x.H = bz3x.H % 12
            }
            return k2x.Cb1x(bz3x, Jj3x)
        }
    }();
    k2x.bdb1x = function(bA3x) {
        var da3x = bA3x;
        if (k2x.fB4F(bA3x)) da3x = new Date(Date.parse(bA3x));
        if (!k2x.EQ2x(bA3x)) da3x = new Date(bA3x);
        return da3x
    };
    k2x.IR3x = function(cic2x, cio3x) {
        return (new Number(cic2x)).toFixed(cio3x)
    };
    k2x.bqJ4N = function() {
        var gO5T = /([^\/:])\/.*$/,
            kf6Z = /\/[^\/]+$/,
            EW2x = /[#\?]/,
            bqE4I = location.href.split(/[?#]/)[0],
            tH9y = document.createElement("a");
        var bqC4G = function(jt6n) {
            return (jt6n || "").indexOf("://") > 0
        };
        var bBi7b = function(jt6n) {
            return (jt6n || "").split(EW2x)[0].replace(kf6Z, "/")
        };
        var ciK3x = function(jt6n, ga5f) {
            if (jt6n.indexOf("/") == 0) return ga5f.replace(gO5T, "$1") + jt6n;
            return bBi7b(ga5f) + jt6n
        };
        bqE4I = bBi7b(bqE4I);
        return function(jt6n, ga5f) {
            jt6n = (jt6n || "").trim();
            if (!bqC4G(ga5f)) ga5f = bqE4I;
            if (!jt6n) return ga5f;
            if (bqC4G(jt6n)) return jt6n;
            jt6n = ciK3x(jt6n, ga5f);
            tH9y.href = jt6n;
            jt6n = tH9y.href;
            return bqC4G(jt6n) ? jt6n : tH9y.getAttribute("href", 4)
        }
    }();
    k2x.ciO3x = function() {
        var dg3x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y2x) {
            if (dg3x.test(Y2x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k2x.bBE7x = function(G2x, is5x) {
        if (!G2x) return is5x;
        var W2x = G2x.tagName.toLowerCase(),
            i2x = a1x.dm4q(G2x);
        if (!i2x || !i2x.length) {
            is5x[W2x] = G2x.textContent || G2x.text || "";
            return is5x
        }
        var ck3x = {};
        is5x[W2x] = ck3x;
        k2x.bd2x(i2x, function(g2x) {
            k2x.bBE7x(g2x, ck3x)
        });
        return is5x
    };
    k2x.cIz0x = function(Bw1x) {
        try {
            return k2x.bBE7x(a1x.bCl7e(Bw1x), {})
        } catch (ex) {
            return null
        }
    };
    k2x.Ro7h = function(ig5l, Ry7r) {
        var is5x = {};
        k2x.bd2x((ig5l || "").split(Ry7r), function(W2x) {
            var bcS1x = W2x.split("=");
            if (!bcS1x || !bcS1x.length) return;
            var K2x = bcS1x.shift();
            if (!K2x) return;
            is5x[decodeURIComponent(K2x)] = decodeURIComponent(bcS1x.join("="))
        });
        return is5x
    };
    k2x.uN9E = function(gn5s, Ry7r, ckm3x) {
        if (!gn5s) return "";
        var bs3x = [];
        for (var x in gn5s) {
            bs3x.push(encodeURIComponent(x) + "=" + (!!ckm3x ? encodeURIComponent(gn5s[x]) : gn5s[x]))
        }
        return bs3x.join(Ry7r || ",")
    };
    k2x.hu5z = function(bv3x) {
        return k2x.Ro7h(bv3x, "&")
    };
    k2x.cC3x = function(gn5s) {
        return k2x.uN9E(gn5s, "&", !0)
    };
    k2x.cIx0x = function(gn5s) {
        return be2x.Is3x(gn5s)
    };
    k2x.cIw0x = function(i2x, dZ4d) {
        var m2x = {};
        k2x.bd2x(i2x, function(p2x) {
            var K2x = p2x;
            if (!!dZ4d) {
                K2x = dZ4d(p2x)
            }
            m2x[K2x] = p2x
        });
        return m2x
    };
    k2x.cIv0x = function(gW5b, gc5h) {
        var ckn3x = ("" + gW5b).length,
            ckt3x = Math.max(1, parseInt(gc5h) || 0),
            dq4u = ckt3x - ckn3x;
        if (dq4u > 0) {
            gW5b = (new Array(dq4u + 1)).join("0") + gW5b
        }
        return "" + gW5b
    };
    k2x.bcJ0x = function(gn5s, W2x) {
        if (!k2x.eJ4N(W2x)) {
            try {
                delete gn5s[W2x]
            } catch (e) {
                gn5s[W2x] = undefined
            }
            return this
        }
        k2x.bd2x(W2x, k2x.bcJ0x.f2x(k2x, gn5s));
        return this
    };
    k2x.OK6E = function() {
        var bFs8k = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq3x) {
            bq3x = bq3x || 10;
            var m2x = [];
            for (var i = 0, bFH8z; i < bq3x; ++i) {
                bFH8z = Math.floor(Math.random() * bFs8k.length);
                m2x.push(bFs8k.charAt(bFH8z))
            }
            return m2x.join("")
        }
    }();
    k2x.Bq1x = function(fC4G, fq4u) {
        return Math.floor(Math.random() * (fq4u - fC4G) + fC4G)
    };
    k2x.nM7F = function(bq3x) {
        bq3x = Math.max(0, Math.min(bq3x || 8, 30));
        var fC4G = Math.pow(10, bq3x - 1),
            fq4u = fC4G * 10;
        return k2x.Bq1x(fC4G, fq4u).toString()
    };
    k2x.bcG0x = function() {
        var gG5L = +(new Date);
        return function() {
            return "" + gG5L++
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        pr8j;
    if (!!O2x.cJ3x) return;
    O2x.cJ3x = NEJ.C();
    pr8j = O2x.cJ3x.prototype;
    O2x.cJ3x.A2x = function(e2x) {
        e2x = e2x || {};
        var cE3x = !!this.Bh1x && this.Bh1x.shift();
        if (!cE3x) {
            cE3x = new this(e2x);
            this.ckw3x = (this.ckw3x || 0) + 1
        }
        cE3x.bm3x(e2x);
        return cE3x
    };
    O2x.cJ3x.T2x = function() {
        var SJ7C = function(p2x, r2x, i2x) {
            p2x.T2x();
            i2x.splice(r2x, 1)
        };
        return function(cE3x) {
            if (!cE3x) return null;
            if (!k2x.eJ4N(cE3x)) {
                if (!(cE3x instanceof this)) {
                    var fI4M = cE3x.constructor;
                    if (!!fI4M.T2x) fI4M.T2x(cE3x);
                    return null
                }
                if (cE3x == this.fl4p) delete this.fl4p;
                if (cE3x == this.Be1x) delete this.Be1x;
                cE3x.bC3x();
                if (!this.Bh1x) this.Bh1x = [];
                if (k2x.dl4p(this.Bh1x, cE3x) < 0) {
                    this.Bh1x.push(cE3x)
                }
                return null
            }
            k2x.mY7R(cE3x, SJ7C, this)
        }
    }();
    O2x.cJ3x.gk5p = function(e2x) {
        e2x = e2x || {};
        if (!this.fl4p) this.fl4p = this.A2x(e2x);
        return this.fl4p
    };
    O2x.cJ3x.bJd8V = function(e2x, rM8E) {
        e2x = e2x || {};
        if (!!rM8E && !!this.Be1x) {
            this.Be1x.T2x();
            delete this.Be1x
        }
        if (!this.Be1x) {
            this.Be1x = this.A2x(e2x)
        } else {
            this.Be1x.bm3x(e2x)
        }
        return this.Be1x
    };
    pr8j.cw3x = function() {
        var gG5L = +(new Date);
        return function() {
            this.id = gG5L++;
            this.mj7c = {};
            this.bJC9t = {}
        }
    }();
    pr8j.bm3x = function(e2x) {
        this.bpA4E(e2x)
    };
    pr8j.bC3x = function() {
        this.hj5o();
        this.Js3x()
    };
    pr8j.bX3x = function() {
        var gG5L = +(new Date);
        var ckU3x = function(bf2x) {
            if (!bf2x || bf2x.length < 3) return;
            this.bJC9t["de-" + gG5L++] = bf2x;
            h2x.s2x.apply(h2x, bf2x)
        };
        return function(i2x) {
            k2x.bd2x(i2x, ckU3x, this)
        }
    }();
    pr8j.Js3x = function() {
        var ckZ3x = function(bf2x, K2x, bz3x) {
            delete bz3x[K2x];
            h2x.ms7l.apply(h2x, bf2x)
        };
        return function() {
            k2x.eI4M(this.bJC9t, ckZ3x)
        }
    }();
    pr8j.cIo0x = function(dZ4d) {
        dZ4d = dZ4d || br3x;
        k2x.eI4M(this, function(FN2x, K2x, bz3x) {
            if (!!FN2x && !!FN2x.T2x && !dZ4d(FN2x)) {
                delete bz3x[K2x];
                FN2x.T2x()
            }
        })
    };
    pr8j.T2x = function() {
        this.constructor.T2x(this)
    };
    pr8j.bpx4B = function(u2x) {
        var d2x = this.mj7c[u2x.toLowerCase()];
        return !!d2x && d2x !== br3x
    };
    pr8j.s2x = function(u2x, d2x) {
        this.xx0x.apply(this, arguments);
        return this
    };
    pr8j.ms7l = function(u2x, d2x) {
        var u2x = (u2x || "").toLowerCase(),
            eg4k = this.mj7c[u2x];
        if (!k2x.eJ4N(eg4k)) {
            if (eg4k == d2x) delete this.mj7c[u2x];
            return
        }
        k2x.mY7R(eg4k, function(ez4D, r2x, i2x) {
            if (ez4D == d2x) i2x.splice(r2x, 1)
        })
    };
    pr8j.xx0x = function(u2x, d2x) {
        if (!!u2x && k2x.gE5J(d2x)) this.mj7c[u2x.toLowerCase()] = d2x;
        return this
    };
    pr8j.bpA4E = function() {
        var cmE4I = function(d2x, u2x) {
            this.xx0x(u2x, d2x)
        };
        return function(eg4k) {
            k2x.eI4M(eg4k, cmE4I, this);
            return this
        }
    }();
    pr8j.hj5o = function() {
        var bpq4u = function(d2x, u2x) {
            this.hj5o(u2x)
        };
        return function(u2x) {
            var u2x = (u2x || "").toLowerCase();
            if (!!u2x) {
                delete this.mj7c[u2x]
            } else {
                k2x.eI4M(this.mj7c, bpq4u, this)
            }
            return this
        }
    }();
    pr8j.bpo4s = function(u2x, d2x) {
        if (!u2x || !k2x.gE5J(d2x)) return this;
        u2x = u2x.toLowerCase();
        var eg4k = this.mj7c[u2x];
        if (!eg4k) {
            this.mj7c[u2x] = d2x;
            return this
        }
        if (!k2x.eJ4N(eg4k)) {
            this.mj7c[u2x] = [eg4k]
        }
        this.mj7c[u2x].push(d2x);
        return this
    };
    pr8j.z2x = function(u2x) {
        var d2x = this.mj7c[(u2x || "").toLowerCase()];
        if (!d2x) return this;
        var bf2x = fu4y.slice.call(arguments, 1);
        if (!k2x.eJ4N(d2x)) return d2x.apply(this, bf2x);
        k2x.bd2x(d2x, function(dv4z) {
            try {
                dv4z.apply(this, bf2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O2x.bcx0x = function() {
        var R2x = {};
        return function(C2x, fI4M, e2x) {
            var fj4n = fI4M.cnB4F;
            if (!fj4n) {
                fj4n = k2x.OK6E(10);
                fI4M.cnB4F = fj4n
            }
            var K2x = C2x + "-" + fj4n,
                cE3x = R2x[K2x];
            if (!!e2x && !cE3x) {
                cE3x = fI4M.A2x(e2x);
                cE3x.T2x = cE3x.T2x.eH4L(function(d2x) {
                    delete R2x[K2x];
                    delete cE3x.T2x
                });
                R2x[K2x] = cE3x
            }
            return cE3x
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gC5H = function() {
        var da3x = new Date,
            cnW4a = +da3x,
            bpc4g = 864e5;
        var cot4x = function(W2x) {
            var rN8F = document.cookie,
                ti9Z = "\\b" + W2x + "=",
                bcu0x = rN8F.search(ti9Z);
            if (bcu0x < 0) return "";
            bcu0x += ti9Z.length - 2;
            var xC0x = rN8F.indexOf(";", bcu0x);
            if (xC0x < 0) xC0x = rN8F.length;
            return rN8F.substring(bcu0x, xC0x) || ""
        };
        return function(W2x, j2x) {
            if (j2x === undefined) return cot4x(W2x);
            if (u.fB4F(j2x)) {
                if (!!j2x) {
                    document.cookie = W2x + "=" + j2x + ";";
                    return j2x
                }
                j2x = {
                    expires: -100
                }
            }
            j2x = j2x || o;
            var rN8F = W2x + "=" + (j2x.value || "") + ";";
            delete j2x.value;
            if (j2x.expires !== undefined) {
                da3x.setTime(cnW4a + j2x.expires * bpc4g);
                j2x.expires = da3x.toGMTString()
            }
            rN8F += u.uN9E(j2x, ";");
            document.cookie = rN8F
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        it5y = c2x("nej.c"),
        en4r = c2x("nej.g"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ut.j"),
        k2x = c2x("nej.u"),
        b2x;
    if (!!O2x.Jw3x) return;
    O2x.Jw3x = NEJ.C();
    b2x = O2x.Jw3x.N2x(I2x.cJ3x);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.pF8x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pF8x, e2x);
        var AO1x = it5y.B2x("csrf");
        if ((/^\/[^\/]/.test(this.pF8x.url) || this.pF8x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!AO1x.cookie && !!AO1x.param) {
            var bv3x = encodeURIComponent(AO1x.param) + "=" + encodeURIComponent(v2x.gC5H(AO1x.cookie) || ""),
                Ry7r = this.pF8x.url.indexOf("?") < 0 ? "?" : "&";
            this.pF8x.url += Ry7r + bv3x
        }
        this.bcp0x = e2x.headers || {};
        var bo3x = this.bcp0x[en4r.ym0x];
        if (bo3x == null) this.bcp0x[en4r.ym0x] = en4r.bWx9o
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.AK1x;
        delete this.pF8x;
        delete this.bcp0x
    };
    b2x.coI4M = function(bo3x) {
        var bz3x = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pF8x.noescape) {
            return k2x.Cb1x(bz3x, bo3x)
        } else {
            return bo3x
        }
    };
    b2x.va9R = function(d2x) {
        var ey4C = d2x.status;
        if (ey4C == -1) {
            this.z2x("onerror", {
                code: en4r.bNN0x,
                message: "请求[" + this.pF8x.url + "]超时！"
            });
            return
        }
        if (("" + ey4C).indexOf("2") != 0) {
            this.z2x("onerror", {
                data: ey4C,
                code: en4r.bxd6X,
                message: "服务器返回异常状态[" + ey4C + "]!",
                extData: d2x.result
            });
            return
        }
        this.z2x("onload", a1x.cea1x(this.coI4M(d2x.result), this.pF8x.type))
    };
    b2x.cp3x = br3x;
    b2x.boG3x = function(j2x) {
        var Y2x = this.pF8x.url;
        if (!Y2x) {
            this.z2x("onerror", {
                code: en4r.bxi6c,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pF8x.data = j2x == null ? null : j2x;
            var d2x = {
                request: this.pF8x,
                headers: this.bcp0x
            };
            try {
                this.z2x("onbeforerequest", d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cp3x(d2x)
        } catch (e) {
            this.z2x("onerror", {
                code: en4r.bxd6X,
                message: "请求[" + Y2x + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b2x.kk6e = br3x
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        be2x = c2x("nej.h"),
        en4r = c2x("nej.g"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut.j"),
        R2x = {},
        TO7H;
    if (!!O2x.bck0x) return;
    O2x.bck0x = NEJ.C();
    TO7H = O2x.bck0x.N2x(O2x.Jw3x);
    TO7H.bC3x = function() {
        this.bG3x();
        window.clearTimeout(this.ei4m);
        delete this.ei4m;
        try {
            this.rQ8I.onreadystatechange = br3x;
            this.rQ8I.abort()
        } catch (e) {}
        delete this.rQ8I
    };
    TO7H.cp3x = function() {
        var coP4T = function(D2x, K2x) {
            this.rQ8I.setRequestHeader(K2x, D2x)
        };
        return function(e2x) {
            var gl5q = e2x.request,
                oW7P = e2x.headers;
            this.rQ8I = be2x.boC3x();
            if (oW7P[en4r.ym0x] === en4r.HK3x) {
                delete oW7P[en4r.ym0x];
                this.rQ8I.upload.onprogress = this.gw5B.f2x(this, 1);
                if (gl5q.data.tagName === "FORM") gl5q.data = new FormData(gl5q.data)
            }
            this.rQ8I.onreadystatechange = this.gw5B.f2x(this, 2);
            if (gl5q.timeout != 0) {
                this.ei4m = window.setTimeout(this.gw5B.f2x(this, 3), gl5q.timeout)
            }
            this.rQ8I.open(gl5q.method, gl5q.url, !gl5q.sync);
            k2x.eI4M(oW7P, coP4T, this);
            if (!!this.pF8x.cookie && "withCredentials" in this.rQ8I) this.rQ8I.withCredentials = !0;
            this.rQ8I.send(gl5q.data)
        }
    }();
    TO7H.gw5B = function(u2x) {
        switch (u2x) {
            case 1:
                this.z2x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.rQ8I.readyState == 4) this.va9R({
                    status: this.rQ8I.status,
                    result: this.rQ8I.responseText || ""
                });
                break;
            case 3:
                this.va9R({
                    status: -1
                });
                break
        }
    };
    TO7H.kk6e = function() {
        this.va9R({
            status: 0
        });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var TV8N = {},
        bcj0x = [],
        bCM7F = /\s+/g,
        gG5L = +(new Date),
        JB3x, bR3x, hL5Q;
    var FS2x = function() {
        var gO5T = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            kf6Z = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            EW2x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bot3x = /^new\s+/,
            coW4a = /['"]/;
        var cps4w = function(D2x) {
            if (gO5T.test(D2x)) return;
            D2x = D2x.split(".")[0].trim();
            if (!D2x || coW4a.test(D2x)) return;
            D2x = D2x.replace(bot3x, "");
            try {
                if (EW2x.test(D2x)) return;
                hL5Q[D2x] = 1
            } catch (e) {}
        };
        return function(bo3x) {
            bo3x = bo3x || "";
            if (!bo3x || gO5T.test(bo3x)) return;
            var bs3x = bo3x.split(kf6Z);
            for (var i = 0, l = bs3x.length; i < l; i++) cps4w(bs3x[i])
        }
    }();
    var cpu4y = function(dK4O) {
        if (dK4O[2] != "in") throw "bad for loop statement: " + dK4O.join(" ");
        bcj0x.push(dK4O[1]);
        FS2x(dK4O[3]);
        return "var __HASH__" + dK4O[1] + " = " + dK4O[3] + "," + dK4O[1] + "," + dK4O[1] + "_count=0;" + "if (!!__HASH__" + dK4O[1] + ")" + "for(var " + dK4O[1] + "_key in __HASH__" + dK4O[1] + "){" + dK4O[1] + " = __HASH__" + dK4O[1] + "[" + dK4O[1] + "_key];" + "if (typeof(" + dK4O[1] + ')=="function") continue;' + dK4O[1] + "_count++;"
    };
    var cpw4A = function() {
        var dK4O = bcj0x[bcj0x.length - 1];
        return "}; if(!__HASH__" + dK4O + "||!" + dK4O + "_count){"
    };
    var cpy4C = function() {
        bcj0x.pop();
        return "};"
    };
    var cpz4D = function(dK4O) {
        if (dK4O[2] != "as") throw "bad for list loop statement: " + dK4O.join(" ");
        var UN8F = dK4O[1].split("..");
        if (UN8F.length > 1) {
            FS2x(UN8F[0]);
            FS2x(UN8F[1]);
            return "for(var " + dK4O[3] + "," + dK4O[3] + "_index=0," + dK4O[3] + "_beg=" + UN8F[0] + "," + dK4O[3] + "_end=" + UN8F[1] + "," + dK4O[3] + "_length=parseInt(" + dK4O[3] + "_end-" + dK4O[3] + "_beg+1);" + dK4O[3] + "_index<" + dK4O[3] + "_length;" + dK4O[3] + "_index++){" + dK4O[3] + " = " + dK4O[3] + "_beg+" + dK4O[3] + "_index;"
        } else {
            FS2x(dK4O[1]);
            return "for(var __LIST__" + dK4O[3] + " = " + dK4O[1] + "," + dK4O[3] + "," + dK4O[3] + "_index=0," + dK4O[3] + "_length=__LIST__" + dK4O[3] + ".length;" + dK4O[3] + "_index<" + dK4O[3] + "_length;" + dK4O[3] + "_index++){" + dK4O[3] + " = __LIST__" + dK4O[3] + "[" + dK4O[3] + "_index];"
        }
    };
    var cpA4E = function(dK4O) {
        if (!dK4O || !dK4O.length) return;
        dK4O.shift();
        var W2x = dK4O[0].split("(")[0];
        return "var " + W2x + " = function" + dK4O.join("").replace(W2x, "") + "{var __OUT=[];"
    };
    var cpB4F = function(dK4O) {
        if (!dK4O[1]) throw "bad include statement: " + dK4O.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var boa3x = function(ku6o, dK4O) {
        FS2x(dK4O.slice(1).join(" "));
        return ku6o
    };
    var cpD5I = function(dK4O) {
        return boa3x("if(", dK4O)
    };
    var cpH5M = function(dK4O) {
        return boa3x("}else if(", dK4O)
    };
    var cpO5T = function(dK4O) {
        return boa3x("var ", dK4O)
    };
    bR3x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cpD5I,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cpH5M,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cpu4y,
                pmin: 3
            },
            forelse: {
                pfix: cpw4A
            },
            "/for": {
                pfix: cpy4C
            },
            list: {
                pfix: cpz4D,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cpO5T,
                sfix: ";"
            },
            macro: {
                pfix: cpA4E
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    JB3x = !0
                }
            },
            "/trim": {
                pfix: function() {
                    JB3x = null
                }
            },
            inline: {
                pfix: cpB4F,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(ku6o) {
                return (ku6o || "") + "" + gG5L
            },
            "default": function(D2x, kA6u) {
                return D2x || kA6u
            }
        }
    };
    var cpS5X = function() {
        var cpU5Z = /\\([\{\}])/g;
        return function(bo3x, jC6w) {
            bo3x = bo3x.replace(cpU5Z, "$1");
            var dK4O = bo3x.slice(1, -1).split(bCM7F),
                bg2x = bR3x.def[dK4O[0]];
            if (!bg2x) {
                bbV0x(bo3x, jC6w);
                return
            }
            if (!!bg2x.pmin && bg2x.pmin >= dK4O.length) throw "Statement needs more parameters:" + bo3x;
            jC6w.push(!!bg2x.pfix && typeof bg2x.pfix != "string" ? bg2x.pfix(dK4O) : bg2x.pfix || "");
            if (!!bg2x.sfix) {
                if (dK4O.length <= 1) {
                    if (!!bg2x.pdft) jC6w.push(bg2x.pdft)
                } else {
                    for (var i = 1, l = dK4O.length; i < l; i++) {
                        if (i > 1) jC6w.push(" ");
                        jC6w.push(dK4O[i])
                    }
                }
                jC6w.push(bg2x.sfix)
            }
        }
    }();
    var bGY8Q = function(JL3x, jC6w) {
        if (!JL3x || !JL3x.length) return;
        if (JL3x.length == 1) {
            var bnN3x = JL3x.pop();
            FS2x(bnN3x);
            jC6w.push(bnN3x == "" ? '""' : bnN3x);
            return
        }
        var bnM3x = JL3x.pop().split(":");
        jC6w.push("__MDF['" + bnM3x.shift() + "'](");
        bGY8Q(JL3x, jC6w);
        if (bnM3x.length > 0) {
            var bf2x = bnM3x.join(":");
            FS2x(bf2x);
            jC6w.push("," + bf2x)
        }
        jC6w.push(")")
    };
    var bbV0x = function(bo3x, jC6w) {
        if (!bo3x) return;
        var xE0x = bo3x.split("\n");
        if (!xE0x || !xE0x.length) return;
        for (var i = 0, l = xE0x.length, hx5C; i < l; i++) {
            hx5C = xE0x[i];
            if (!!JB3x) {
                hx5C = hx5C.trim();
                if (!hx5C) continue
            }
            cqk5p(hx5C, jC6w);
            if (!!JB3x && i < l - 1) jC6w.push("__OUT.push('\\n');")
        }
    };
    var cqk5p = function() {
        var cqo5t = /\|\|/g,
            cqr5w = /#@@#/g;
        return function(bo3x, jC6w) {
            var Nh4l = "}",
                Nj4n = -1,
                bq3x = bo3x.length,
                wY0x, fQ4U, JR4V, bbJ0x, Nx5C;
            while (Nj4n + Nh4l.length < bq3x) {
                wY0x = "${";
                fQ4U = "}";
                JR4V = bo3x.indexOf(wY0x, Nj4n + Nh4l.length);
                if (JR4V < 0) break;
                if (bo3x.charAt(JR4V + 2) == "%") {
                    wY0x = "${%";
                    fQ4U = "%}"
                }
                bbJ0x = bo3x.indexOf(fQ4U, JR4V + wY0x.length);
                if (bbJ0x < 0) break;
                bbH0x(bo3x.substring(Nj4n + Nh4l.length, JR4V), jC6w);
                Nx5C = bo3x.substring(JR4V + wY0x.length, bbJ0x).replace(cqo5t, "#@@#").split("|");
                for (var i = 0, l = Nx5C.length; i < l; Nx5C[i] = Nx5C[i].replace(cqr5w, "||"), i++);
                jC6w.push("__OUT.push(");
                bGY8Q(Nx5C, jC6w);
                jC6w.push(");");
                Nh4l = fQ4U;
                Nj4n = bbJ0x
            }
            bbH0x(bo3x.substring(Nj4n + Nh4l.length), jC6w)
        }
    }();
    var bbH0x = function() {
        var bz3x = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cqv5A = function(bo3x) {
            return (bo3x || "").replace(bz3x.r, function($1) {
                return bz3x[$1] || $1
            })
        };
        return function(bo3x, jC6w) {
            if (!bo3x) return;
            jC6w.push("__OUT.push('" + cqv5A(bo3x) + "');")
        }
    }();
    var cqD5I = function() {
        var cqE5J = /\t/g,
            cqF5K = /\n/g,
            cqG5L = /\r\n?/g;
        var bLr9i = function(bo3x, wY0x) {
            var r2x = bo3x.indexOf("}", wY0x + 1);
            while (bo3x.charAt(r2x - 1) == "\\") {
                r2x = bo3x.indexOf("}", r2x + 1)
            }
            return r2x
        };
        var cqK5P = function() {
            var bs3x = [],
                EJ2x = arguments[0];
            for (var x in EJ2x) {
                x = (x || "").trim();
                if (!x) continue;
                bs3x.push(x + "=$v('" + x + "')")
            }
            return bs3x.length > 0 ? "var " + bs3x.join(",") + ";" : ""
        };
        return function(bo3x) {
            hL5Q = {};
            bo3x = bo3x.replace(cqG5L, "\n").replace(cqE5J, "    ");
            var sc8U = ["if(!__CTX) return '';", ""];
            sc8U.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sc8U.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sc8U.push("__OUT=[];");
            var ET2x = -1,
                bq3x = bo3x.length;
            var nE7x, JT4X, NC5H, NH5M, Ba1x, NJ5O, bmG3x, NN5S;
            while (ET2x + 1 < bq3x) {
                nE7x = ET2x;
                nE7x = bo3x.indexOf("{", nE7x + 1);
                while (nE7x >= 0) {
                    JT4X = bLr9i(bo3x, nE7x);
                    NC5H = bo3x.substring(nE7x, JT4X);
                    NH5M = NC5H.match(bR3x.blk);
                    if (!!NH5M) {
                        Ba1x = NH5M[1].length + 1;
                        NJ5O = bo3x.indexOf("}", nE7x + Ba1x);
                        if (NJ5O >= 0) {
                            bmG3x = NJ5O - nE7x - Ba1x <= 0 ? "{/" + NH5M[1] + "}" : NC5H.substr(Ba1x + 1);
                            Ba1x = bo3x.indexOf(bmG3x, NJ5O + 1);
                            if (Ba1x >= 0) {
                                bbV0x(bo3x.substring(ET2x + 1, nE7x), sc8U);
                                NN5S = bo3x.substring(NJ5O + 1, Ba1x);
                                switch (NH5M[1]) {
                                    case "cdata":
                                        bbH0x(NN5S, sc8U);
                                        break;
                                    case "minify":
                                        bbH0x(NN5S.replace(cqF5K, " ").replace(bCM7F, " "), sc8U);
                                        break;
                                    case "eval":
                                        if (!!NN5S) sc8U.push("__OUT.push((function(){" + NN5S + "})());");
                                        break
                                }
                                nE7x = ET2x = Ba1x + bmG3x.length - 1
                            }
                        }
                    } else if (bo3x.charAt(nE7x - 1) != "$" && bo3x.charAt(nE7x - 1) != "\\" && NC5H.substr(NC5H.charAt(1) == "/" ? 2 : 1).search(bR3x.tag) == 0) {
                        break
                    }
                    nE7x = bo3x.indexOf("{", nE7x + 1)
                }
                if (nE7x < 0) break;
                JT4X = bLr9i(bo3x, nE7x);
                if (JT4X < 0) break;
                bbV0x(bo3x.substring(ET2x + 1, nE7x), sc8U);
                cpS5X(bo3x.substring(nE7x, JT4X + 1), sc8U);
                ET2x = JT4X
            }
            bbV0x(bo3x.substring(ET2x + 1), sc8U);
            sc8U.push(';return __OUT.join("");');
            sc8U[1] = cqK5P(hL5Q);
            hL5Q = null;
            return new Function("__CTX", "__MDF", sc8U.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gG5L
    };
    TrimPath.merge = function() {
        var NO5T = {};
        TrimPath.dump = function() {
            return {
                func: NO5T,
                text: TV8N
            }
        };
        return function(fj4n, j2x, jT6N) {
            try {
                j2x = j2x || {};
                if (!NO5T[fj4n] && !TV8N[fj4n]) return "";
                if (!NO5T[fj4n]) {
                    NO5T[fj4n] = cqD5I(TV8N[fj4n]);
                    delete TV8N[fj4n]
                }
                if (!!jT6N) {
                    for (var x in bR3x.ext)
                        if (!jT6N[x]) jT6N[x] = bR3x.ext[x]
                }
                return NO5T[fj4n](j2x, jT6N || bR3x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqL5Q = +(new Date);
        return function(bo3x, fj4n) {
            if (!bo3x) return "";
            fj4n = fj4n || "ck_" + cqL5Q++;
            TV8N[fj4n] = bo3x;
            return fj4n
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        eA4E = {},
        bSr2x = {};
    a1x.Ka4e = TrimPath.seed;
    a1x.cc3x = function() {
        var bSH2x = function(C2x) {
            return !a1x.iN5S ? "" : a1x.iN5S(C2x)
        };
        return function(fj4n, j2x, jT6N) {
            j2x = NEJ.X(NEJ.X({}, bSr2x), j2x);
            j2x.inline = bSH2x;
            jT6N = NEJ.X(NEJ.X({}, eA4E), jT6N);
            jT6N.rand = k2x.nM7F;
            jT6N.format = k2x.ia5f;
            jT6N.escape = k2x.dH4L;
            jT6N.inline = bSH2x;
            return TrimPath.merge(fj4n, j2x, jT6N)
        }
    }();
    a1x.eC4G = function(bo3x, cqP5U) {
        if (!bo3x) return "";
        var fj4n, F2x = a1x.B2x(bo3x);
        if (!!F2x) {
            fj4n = F2x.id;
            bo3x = F2x.value || F2x.innerText;
            if (!cqP5U) a1x.cM3x(F2x)
        }
        return TrimPath.parse(bo3x, fj4n)
    };
    a1x.dA4E = function(bI3x, fj4n, j2x, jT6N) {
        bI3x = a1x.B2x(bI3x);
        if (!!bI3x) bI3x.innerHTML = a1x.cc3x(fj4n, j2x, jT6N);
        return this
    };
    a1x.cHB0x = function(bz3x) {
        NEJ.X(eA4E, bz3x)
    };
    a1x.crA5F = function(bz3x) {
        NEJ.X(bSr2x, bz3x)
    };
    c2x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var dx4B = NEJ.P("nej.p"),
        O2x = window,
        lt6n = dx4B.Il3x,
        bTL8D = lt6n.ipad || lt6n.iphone;
    if (!bTL8D && !!O2x.requestAnimationFrame && !!O2x.cancelRequestAnimationFrame) return;
    var ku6o = dx4B.dr4v.prefix.pro;
    if (!bTL8D && !!O2x[ku6o + "RequestAnimationFrame"] && !!O2x[ku6o + "CancelRequestAnimationFrame"]) {
        O2x.requestAnimationFrame = O2x[ku6o + "RequestAnimationFrame"];
        O2x.cancelRequestAnimationFrame = O2x[ku6o + "CancelRequestAnimationFrame"];
        return
    }
    var bbx0x = lt6n.desktop ? 80 : lt6n.ios ? 50 : 30;
    O2x.requestAnimationFrame = function(cA3x) {
        return window.setTimeout(function() {
            try {
                cA3x(+(new Date))
            } catch (ex) {}
        }, 1e3 / bbx0x)
    };
    O2x.cancelRequestAnimationFrame = function(C2x) {
        window.clearTimeout(C2x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        be2x = c2x("nej.h"),
        db3x = c2x("nej.x"),
        bbt0x = c2x("nej.ut.j.cb"),
        gi5n;
    if (!!a1x.sf8X) return;
    a1x.sf8X = db3x.sf8X = function() {
        var R2x = {},
            gO5T = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d2x) {
            var C2x = decodeURIComponent(d2x.target),
                u2x = d2x.type.toLowerCase();
            var dv4z = R2x[C2x + "-on" + u2x];
            if (!!dv4z) {
                try {
                    dv4z(d2x)
                } catch (e) {}
                return
            }
            var cR3x = R2x[C2x + "-tgt"];
            if (!!cR3x && gO5T.test(u2x)) {
                byV6P(cR3x, d2x)
            }
        };
        var bmc3x = function(e2x) {
            var bI3x = a1x.B2x(e2x.parent) || document.body,
                dW4a = a1x.cc3x(gi5n, e2x);
            bI3x.insertAdjacentHTML(!e2x.hidden ? "beforeEnd" : "afterBegin", dW4a)
        };
        var byV6P = function(C2x, d2x) {
            var u2x = d2x.type.toLowerCase();
            requestAnimationFrame(function() {
                h2x.z2x(C2x, u2x)
            })
        };
        var crF5K = function(hQ5V) {
            return !!hQ5V && !!hQ5V.inited && !!hQ5V.inited()
        };
        var Of6Z = function(C2x) {
            var bs3x = [document.embeds[C2x], a1x.B2x(C2x), document[C2x], window[C2x]],
                r2x = k2x.eI4M(bs3x, crF5K),
                hQ5V = bs3x[r2x],
                blZ3x = C2x + "-count";
            R2x[blZ3x]++;
            if (!!hQ5V || R2x[blZ3x] > 100) {
                R2x[C2x](hQ5V);
                delete R2x[C2x];
                delete R2x[blZ3x];
                return
            }
            window.setTimeout(Of6Z.f2x(null, C2x), 300)
        };
        var crN5S = function(e2x) {
            var C2x = e2x.id,
                cm3x = e2x.params;
            if (!cm3x) {
                cm3x = {};
                e2x.params = cm3x
            }
            var hL5Q = cm3x.flashvars || "";
            hL5Q += (!hL5Q ? "" : "&") + ("id=" + C2x);
            if (!e2x.hidden && (!!e2x.target || be2x.beq1x(cm3x.wmode))) {
                var hR5W = a1x.lQ6K(e2x.target) || a1x.lQ6K(e2x.parent),
                    bbs0x = k2x.bcG0x();
                bbt0x["cb" + bbs0x] = byV6P.f2x(null, hR5W);
                hL5Q += "&onevent=nej.ut.j.cb.cb" + bbs0x;
                R2x[C2x + "-tgt"] = hR5W
            }
            cm3x.flashvars = hL5Q;
            k2x.eI4M(e2x, function(D2x, K2x) {
                if (k2x.gE5J(D2x) && K2x != "onready") {
                    R2x[C2x + "-" + K2x] = D2x
                }
            })
        };
        return function(e2x) {
            e2x = NEJ.X({}, e2x);
            if (!e2x.src) return;
            var C2x = "flash_" + k2x.bcG0x();
            e2x.id = C2x;
            crN5S(e2x);
            bmc3x(e2x);
            if (!e2x.onready) return;
            R2x[C2x] = e2x.onready;
            R2x[C2x + "-count"] = 0;
            Of6Z(C2x)
        }
    }();
    gi5n = a1x.eC4G('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    db3x.isChange = !0
})();
(function() {
    var c2x = NEJ.P,
        it5y = c2x("nej.c"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut.j"),
        bbt0x = c2x("nej.ut.j.cb"),
        R2x = {},
        gG5L = +(new Date),
        blT3x;
    if (!!O2x.blS3x) return;
    bbt0x["ld" + gG5L] = function(K2x, cK3x) {
        var jW6Q = R2x[K2x];
        if (!jW6Q) return;
        delete R2x[K2x];
        jW6Q.va9R({
            status: 200,
            result: cK3x
        })
    };
    bbt0x["er" + gG5L] = function(K2x, ey4C) {
        var jW6Q = R2x[K2x];
        if (!jW6Q) return;
        delete R2x[K2x];
        jW6Q.va9R({
            status: ey4C || 0
        })
    };
    O2x.blS3x = NEJ.C();
    blT3x = O2x.blS3x.N2x(O2x.Jw3x);
    blT3x.cp3x = function(e2x) {
        var hQ5V = R2x.flash;
        if (k2x.eJ4N(hQ5V)) {
            hQ5V.push(this.cp3x.f2x(this, e2x));
            return
        }
        if (!hQ5V) {
            R2x.flash = [this.cp3x.f2x(this, e2x)];
            a1x.sf8X({
                hidden: !0,
                src: it5y.B2x("ajax.swf"),
                onready: function(hQ5V) {
                    if (!hQ5V) return;
                    var i2x = R2x.flash;
                    R2x.flash = hQ5V;
                    k2x.mY7R(i2x, function(dv4z) {
                        try {
                            dv4z()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AK1x = "swf-" + k2x.nM7F();
        R2x[this.AK1x] = this;
        var j2x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e2x.request);
        j2x.key = this.AK1x;
        j2x.headers = e2x.headers;
        j2x.onerror = "nej.ut.j.cb.er" + gG5L;
        j2x.onloaded = "nej.ut.j.cb.ld" + gG5L;
        var bBU7N = it5y.bWk9b(j2x.url);
        if (!!bBU7N) j2x.policyURL = bBU7N;
        hQ5V.request(j2x)
    };
    blT3x.kk6e = function() {
        delete R2x[this.AK1x];
        this.va9R({
            status: 0
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        be2x = c2x("nej.h");
    be2x.bCd7W = function() {
        var dg3x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kV6P) {
            kV6P = kV6P || "";
            if (dg3x.test(kV6P)) return RegExp.$1;
            return "*"
        }
    }();
    be2x.blJ3x = function(j2x) {
        return j2x
    };
    be2x.blI3x = function(bbl0x, e2x) {
        if (!bbl0x.postMessage) return;
        e2x = e2x || bb2x;
        bbl0x.postMessage(be2x.blJ3x(e2x.data), be2x.bCd7W(e2x.origin))
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.fN4R) return;
    O2x.fN4R = NEJ.C();
    b2x = O2x.fN4R.N2x(O2x.cJ3x);
    b2x.cw3x = function() {
        this.S2x = {};
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.Oq6k = a1x.B2x(e2x.element) || window;
        this.bDy7r(e2x.event);
        this.csb5g();
        this.z2x("oninit")
    };
    b2x.bC3x = function() {
        var DW2x = function(D2x, K2x, bz3x) {
            if (!k2x.eJ4N(D2x)) {
                k2x.bcJ0x(this.Oq6k, K2x)
            }
            delete bz3x[K2x]
        };
        return function() {
            this.bG3x();
            k2x.eI4M(this.S2x, DW2x, this);
            delete this.Oq6k
        }
    }();
    b2x.bbi0x = function(F2x, u2x) {
        F2x = a1x.B2x(F2x);
        return F2x == this.Oq6k && (!u2x || !!this.S2x["on" + u2x])
    };
    b2x.bDy7r = function(d2x) {
        if (k2x.fB4F(d2x)) {
            var W2x = "on" + d2x;
            if (!this.S2x[W2x]) {
                this.S2x[W2x] = this.csc5h.f2x(this, d2x)
            }
            this.bEB7u(d2x);
            return
        }
        if (k2x.eJ4N(d2x)) {
            k2x.bd2x(d2x, this.bDy7r, this)
        }
    };
    b2x.bEB7u = function(u2x) {
        var d2x = "on" + u2x,
            dv4z = this.Oq6k[d2x],
            bED7w = this.S2x[d2x];
        if (dv4z != bED7w) {
            this.bbh0x(u2x);
            if (!!dv4z && dv4z != br3x) this.bEK7D(u2x, dv4z);
            this.Oq6k[d2x] = bED7w
        }
    };
    b2x.bEK7D = function(u2x, dv4z, cse5j) {
        var i2x = this.S2x[u2x];
        if (!i2x) {
            i2x = [];
            this.S2x[u2x] = i2x
        }
        if (k2x.gE5J(dv4z)) {
            !cse5j ? i2x.push(dv4z) : i2x.unshift(dv4z)
        }
    };
    b2x.bbh0x = function(u2x, dv4z) {
        var i2x = this.S2x[u2x];
        if (!i2x || !i2x.length) return;
        if (!dv4z) {
            delete this.S2x[u2x];
            return
        }
        k2x.mY7R(i2x, function(D2x, r2x, Km4q) {
            if (dv4z === D2x) {
                Km4q.splice(r2x, 1);
                return !0
            }
        })
    };
    b2x.csc5h = function(u2x, d2x) {
        d2x = d2x || {
            noargs: !0
        };
        d2x.type = u2x;
        this.z2x("ondispatch", d2x);
        if (!!d2x.stopped) return;
        k2x.bd2x(this.S2x[u2x], function(dv4z) {
            try {
                dv4z(d2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b2x.csb5g = function() {
        var bll3x = function(d2x) {
            var bf2x = d2x.args,
                u2x = bf2x[1].toLowerCase();
            if (this.bbi0x(bf2x[0], u2x)) {
                d2x.stopped = !0;
                this.bEB7u(u2x);
                this.bEK7D(u2x, bf2x[2], bf2x[3]);
                this.z2x("oneventadd", {
                    type: u2x,
                    listener: bf2x[2]
                })
            }
        };
        var csf5k = function(d2x) {
            var bf2x = d2x.args,
                u2x = bf2x[1].toLowerCase();
            if (this.bbi0x(bf2x[0], u2x)) {
                d2x.stopped = !0;
                this.bbh0x(u2x, bf2x[2])
            }
        };
        var bpq4u = function(d2x) {
            var bf2x = d2x.args,
                u2x = (bf2x[1] || "").toLowerCase();
            if (this.bbi0x(bf2x[0])) {
                if (!!u2x) {
                    this.bbh0x(u2x);
                    return
                }
                k2x.eI4M(this.S2x, function(D2x, K2x) {
                    if (k2x.eJ4N(D2x)) {
                        this.bbh0x(K2x)
                    }
                }, this)
            }
        };
        var csk5p = function(d2x) {
            var bf2x = d2x.args,
                u2x = bf2x[1].toLowerCase();
            if (this.bbi0x(bf2x[0], u2x)) {
                d2x.stopped = !0;
                bf2x[0]["on" + u2x].apply(bf2x[0], bf2x.slice(2))
            }
        };
        return function() {
            if (!!this.csQ5V) return;
            this.csQ5V = true;
            h2x.s2x = h2x.s2x.eH4L(bll3x.f2x(this));
            h2x.ms7l = h2x.ms7l.eH4L(csf5k.f2x(this));
            h2x.hj5o = h2x.hj5o.eH4L(bpq4u.f2x(this));
            h2x.z2x = h2x.z2x.eH4L(csk5p.f2x(this))
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be2x = c2x("nej.h"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut");
    if (O2x.mW7P.trident) return;
    if (!!window.postMessage) {
        be2x.blJ3x = be2x.blJ3x.eH4L(function(d2x) {
            d2x.stopped = !0;
            d2x.value = JSON.stringify(d2x.args[0])
        });
        return
    }
    var K2x = "MSG|",
        kz6t = [];
    var cue6Y = function() {
        var W2x = unescape(window.name || "").trim();
        if (!W2x || W2x.indexOf(K2x) != 0) return;
        window.name = "";
        var m2x = k2x.Ro7h(W2x.replace(K2x, ""), "|"),
            kV6P = (m2x.origin || "").toLowerCase();
        if (!!kV6P && kV6P != "*" && location.href.toLowerCase().indexOf(kV6P) != 0) return;
        h2x.z2x(window, "message", {
            data: JSON.parse(m2x.data || "null"),
            source: window.frames[m2x.self] || m2x.self,
            origin: be2x.bCd7W(m2x.ref || document.referrer)
        })
    };
    var cuz6t = function() {
        var bbb0x;
        var cuT6N = function(bz3x, r2x, i2x) {
            if (k2x.dl4p(bbb0x, bz3x.w) < 0) {
                bbb0x.push(bz3x.w);
                i2x.splice(r2x, 1);
                bz3x.w.name = bz3x.d
            }
        };
        return function() {
            bbb0x = [];
            k2x.mY7R(kz6t, cuT6N);
            bbb0x = null
        }
    }();
    be2x.blI3x = function() {
        var cvk6e = function(j2x) {
            var m2x = {};
            j2x = j2x || bb2x;
            m2x.origin = j2x.origin || "";
            m2x.ref = location.href;
            m2x.self = j2x.source;
            m2x.data = JSON.stringify(j2x.data);
            return K2x + k2x.uN9E(m2x, "|", !0)
        };
        return be2x.blI3x.eH4L(function(d2x) {
            d2x.stopped = !0;
            var bf2x = d2x.args;
            kz6t.unshift({
                w: bf2x[0],
                d: escape(cvk6e(bf2x[1]))
            })
        })
    }();
    I2x.fN4R.A2x({
        element: window,
        event: "message"
    });
    window.setInterval(cuz6t, 100);
    window.setInterval(cue6Y, 20)
})();
(function() {
    var c2x = NEJ.P,
        be2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j");
    v2x.cvx7q = function() {
        var gA5F = window.name || "_parent",
            cvA7t = {
                gy5D: window.top,
                gA5F: window,
                bI3x: window.parent
            };
        return function(cR3x, e2x) {
            if (typeof cR3x == "string") {
                cR3x = cvA7t[cR3x] || window.frames[cR3x];
                if (!cR3x) return this
            }
            var j2x = NEJ.X({
                origin: "*",
                source: gA5F
            }, e2x);
            be2x.blI3x(cR3x, j2x);
            return this
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        it5y = c2x("nej.c"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        R2x = {},
        baT0x;
    if (!!O2x.bkS2x) return;
    O2x.bkS2x = NEJ.C();
    baT0x = O2x.bkS2x.N2x(O2x.Jw3x);
    baT0x.cw3x = function() {
        var fc4g = "NEJ-AJAX-DATA:",
            Fk2x = !1;
        var bkR2x = function(d2x) {
            var j2x = d2x.data;
            if (j2x.indexOf(fc4g) != 0) return;
            j2x = JSON.parse(j2x.replace(fc4g, ""));
            var jW6Q = R2x[j2x.key];
            if (!jW6Q) return;
            delete R2x[j2x.key];
            j2x.result = decodeURIComponent(j2x.result || "");
            jW6Q.va9R(j2x)
        };
        var bkO2x = function() {
            if (!Fk2x) {
                Fk2x = !0;
                h2x.s2x(window, "message", bkR2x)
            }
        };
        return function() {
            this.cF3x();
            bkO2x()
        }
    }();
    baT0x.cp3x = function(e2x) {
        var gl5q = e2x.request,
            jW6Q = it5y.bWg9X(gl5q.url),
            em4q = R2x[jW6Q];
        if (k2x.eJ4N(em4q)) {
            em4q.push(this.cp3x.f2x(this, e2x));
            return
        }
        if (!em4q) {
            R2x[jW6Q] = [this.cp3x.f2x(this, e2x)];
            a1x.beh1x({
                src: jW6Q,
                visible: !1,
                onload: function(d2x) {
                    var i2x = R2x[jW6Q];
                    R2x[jW6Q] = h2x.X2x(d2x).contentWindow;
                    k2x.mY7R(i2x, function(dv4z) {
                        try {
                            dv4z()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AK1x = "frm-" + k2x.nM7F();
        R2x[this.AK1x] = this;
        var j2x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gl5q);
        j2x.key = this.AK1x;
        j2x.headers = e2x.headers;
        v2x.cvx7q(R2x[jW6Q], {
            data: j2x
        })
    };
    baT0x.kk6e = function() {
        delete R2x[this.AK1x];
        this.va9R({
            status: 0
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        en4r = c2x("nej.g"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        R2x = {},
        Kr4v;
    if (!!O2x.bkK2x) return;
    O2x.bkK2x = NEJ.C();
    Kr4v = O2x.bkK2x.N2x(O2x.Jw3x);
    Kr4v.cw3x = function() {
        var fc4g = "NEJ-UPLOAD-RESULT:",
            Fk2x = !1;
        var bkR2x = function(d2x) {
            var j2x = d2x.data;
            if (j2x.indexOf(fc4g) != 0) return;
            j2x = JSON.parse(j2x.replace(fc4g, ""));
            var jW6Q = R2x[j2x.key];
            if (!jW6Q) return;
            delete R2x[j2x.key];
            jW6Q.va9R(decodeURIComponent(j2x.result))
        };
        var bkO2x = function() {
            if (!Fk2x) {
                Fk2x = !0;
                h2x.s2x(window, "message", bkR2x)
            }
        };
        return function() {
            this.cF3x();
            bkO2x()
        }
    }();
    Kr4v.bC3x = function() {
        this.bG3x();
        a1x.cM3x(this.bkA2x);
        delete this.bkA2x;
        window.clearTimeout(this.ei4m);
        delete this.ei4m
    };
    Kr4v.va9R = function(cK3x) {
        var Q2x;
        try {
            Q2x = JSON.parse(cK3x);
            this.z2x("onload", Q2x)
        } catch (e) {
            this.z2x("onerror", {
                code: en4r.bWq9h,
                message: cK3x
            })
        }
    };
    Kr4v.cp3x = function() {
        var cvG7z = function() {
            var mQ7J, cK3x;
            try {
                var mQ7J = this.bkA2x.contentWindow.document.body,
                    cK3x = mQ7J.innerText || mQ7J.textContent
            } catch (e) {
                return
            }
            this.va9R(cK3x)
        };
        var bkr2x = function(Y2x, fn4r, rN8F) {
            v2x.bl3x(Y2x, {
                type: "json",
                method: "POST",
                cookie: rN8F,
                mode: parseInt(fn4r) || 0,
                onload: function(j2x) {
                    if (!this.ei4m) return;
                    this.z2x("onuploading", j2x);
                    this.ei4m = window.setTimeout(bkr2x.f2x(this, Y2x, fn4r, rN8F), 1e3)
                }.f2x(this),
                onerror: function(ca3x) {
                    if (!this.ei4m) return;
                    this.ei4m = window.setTimeout(bkr2x.f2x(this, Y2x, fn4r, rN8F), 1e3)
                }.f2x(this)
            })
        };
        return function(e2x) {
            var gl5q = e2x.request,
                oW7P = e2x.headers,
                fh4l = gl5q.data,
                W2x = "fom-" + k2x.nM7F();
            R2x[W2x] = this;
            fh4l.target = W2x;
            fh4l.method = "POST";
            fh4l.enctype = en4r.HK3x;
            fh4l.encoding = en4r.HK3x;
            var Y2x = fh4l.action || "",
                lJ6D = Y2x.indexOf("?") <= 0 ? "?" : "&";
            fh4l.action = Y2x + lJ6D + "_proxy_=form";
            this.bkA2x = a1x.beh1x({
                name: W2x,
                onload: function(d2x) {
                    var em4q = h2x.X2x(d2x);
                    h2x.s2x(em4q, "load", cvG7z.f2x(this));
                    fh4l.submit();
                    var bJL9C = (fh4l.nej_query || bb2x).value;
                    if (!bJL9C) return;
                    var fn4r = (fh4l.nej_mode || bb2x).value,
                        rN8F = (fh4l.nej_cookie || bb2x).value == "true";
                    this.ei4m = window.setTimeout(bkr2x.f2x(this, bJL9C, fn4r, rN8F), 100)
                }.f2x(this)
            })
        }
    }();
    Kr4v.kk6e = function() {
        this.z2x("onerror", {
            code: en4r.bWv9m,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        be2x = c2x("nej.h"),
        O2x = c2x("nej.ut.j");
    be2x.boC3x = function() {
        return new XMLHttpRequest
    };
    be2x.bkq2x = function(fn4r, baK0x, e2x) {
        var bz3x = !!baK0x ? {
            2: O2x.bkK2x
        } : {
            2: O2x.bkS2x,
            3: O2x.blS3x
        };
        return (bz3x[fn4r] || O2x.bck0x).A2x(e2x)
    }
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        be2x = c2x("nej.h");
    if (O2x.mW7P.trident) return;
    be2x.boC3x = function() {
        var NK5P = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cwp7i = function() {
            for (var i = 0, l = NK5P.length; i < l; i++) {
                try {
                    return new ActiveXObject(NK5P[i])
                } catch (e) {}
            }
            return null
        };
        return be2x.boC3x.eH4L(function(d2x) {
            if (!!window.XMLHttpRequest) return;
            d2x.stopped = !0;
            d2x.value = cwp7i()
        })
    }();
    be2x.bkq2x = function() {
        var Ew2x = {
            0: 2,
            1: 3
        };
        return be2x.bkq2x.eH4L(function(d2x) {
            var bf2x = d2x.args,
                fn4r = bf2x[0] || 0;
            bf2x[0] = !!bf2x[1] ? 2 : Ew2x[fn4r] || fn4r
        })
    }()
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        be2x = c2x("nej.h"),
        en4r = c2x("nej.g"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j"),
        nQ7J = {},
        IK3x = br3x;
    v2x.kk6e = function(fj4n) {
        var R2x = nQ7J[fj4n];
        if (!R2x) return this;
        R2x.req.kk6e();
        return this
    };
    v2x.bfw1x = function(dZ4d) {
        IK3x = dZ4d || br3x;
        return this
    };
    v2x.bl3x = function() {
        var jK6E = (location.protocol + "//" + location.host).toLowerCase();
        var cwu7n = function(Y2x) {
            var kV6P = k2x.ciO3x(Y2x);
            return !!kV6P && kV6P != jK6E
        };
        var cww7p = function(oW7P) {
            return (oW7P || bb2x)[en4r.ym0x] == en4r.HK3x
        };
        var cwB7u = function(e2x) {
            var baK0x = cww7p(e2x.headers);
            if (!cwu7n(e2x.url) && !baK0x) return O2x.bck0x.A2x(e2x);
            return be2x.bkq2x(e2x.mode, baK0x, e2x)
        };
        var DW2x = function(fj4n) {
            var R2x = nQ7J[fj4n];
            if (!R2x) return;
            if (!!R2x.req) R2x.req.T2x();
            delete nQ7J[fj4n]
        };
        var bMf9W = function(fj4n, u2x) {
            var R2x = nQ7J[fj4n];
            if (!R2x) return;
            DW2x(fj4n);
            try {
                var d2x = {
                    type: u2x,
                    result: arguments[2]
                };
                IK3x(d2x);
                if (!d2x.stopped)(R2x[u2x] || br3x)(d2x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yE0x = function(fj4n, j2x) {
            bMf9W(fj4n, "onload", j2x)
        };
        var BO1x = function(fj4n, ca3x) {
            bMf9W(fj4n, "onerror", ca3x)
        };
        return function(Y2x, e2x) {
            e2x = e2x || {};
            var fj4n = k2x.nM7F(),
                R2x = {
                    onload: e2x.onload || br3x,
                    onerror: e2x.onerror || br3x
                };
            nQ7J[fj4n] = R2x;
            e2x.onload = yE0x.f2x(null, fj4n);
            e2x.onerror = BO1x.f2x(null, fj4n);
            if (!!e2x.query) {
                var lJ6D = Y2x.indexOf("?") < 0 ? "?" : "&",
                    bv3x = e2x.query;
                if (k2x.lG6A(bv3x)) bv3x = k2x.cC3x(bv3x);
                if (!!bv3x) Y2x += lJ6D + bv3x
            }
            e2x.url = Y2x;
            R2x.req = cwB7u(e2x);
            R2x.req.boG3x(e2x.data);
            return fj4n
        }
    }();
    v2x.hV5a = function(fh4l, e2x) {
        var dM4Q = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(dM4Q, e2x);
        dM4Q.data = fh4l;
        dM4Q.method = "POST";
        dM4Q.timeout = 0;
        dM4Q.headers[en4r.ym0x] = en4r.HK3x;
        return v2x.bl3x(fh4l.action, dM4Q)
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        en4r = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ut.j"),
        mG7z, gU5Z = 6e4;
    if (!!O2x.Pb6V) return;
    O2x.Pb6V = NEJ.C();
    mG7z = O2x.Pb6V.N2x(I2x.cJ3x);
    mG7z.cw3x = function() {
        this.cF3x();
        this.Pg6a = {
            onerror: this.cwC7v.f2x(this),
            onloaded: this.cwD7w.f2x(this)
        };
        if (!this.constructor.S2x) this.constructor.S2x = {
            loaded: {}
        }
    };
    mG7z.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.KA4E = e2x.version;
        this.bjE2x = e2x.timeout;
        this.Pg6a.version = this.KA4E;
        this.Pg6a.timeout = this.bjE2x
    };
    mG7z.bQt0x = function(K2x) {
        delete this.constructor.S2x[K2x]
    };
    mG7z.BZ1x = function(K2x) {
        return this.constructor.S2x[K2x]
    };
    mG7z.bRx1x = function(K2x, j2x) {
        this.constructor.S2x[K2x] = j2x
    };
    mG7z.bax0x = br3x;
    mG7z.bRH2x = function(gl5q) {
        h2x.hj5o(gl5q)
    };
    mG7z.bjA2x = function(gl5q) {
        gl5q.src = this.kF6z;
        document.head.appendChild(gl5q)
    };
    mG7z.Cd1x = function() {
        var R2x = this.BZ1x(this.kF6z);
        if (!R2x) return;
        window.clearTimeout(R2x.timer);
        this.bRH2x(R2x.request);
        delete R2x.bind;
        delete R2x.timer;
        delete R2x.request;
        this.bQt0x(this.kF6z);
        this.BZ1x("loaded")[this.kF6z] = !0
    };
    mG7z.baw0x = function(W2x) {
        var R2x = this.BZ1x(this.kF6z);
        if (!R2x) return;
        var i2x = R2x.bind;
        this.Cd1x();
        if (!!i2x && i2x.length > 0) {
            var cE3x;
            while (i2x.length) {
                cE3x = i2x.shift();
                try {
                    cE3x.z2x(W2x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cE3x.T2x()
            }
        }
    };
    mG7z.dO4S = function(ca3x) {
        this.baw0x("onerror", ca3x)
    };
    mG7z.bSF2x = function() {
        this.baw0x("onloaded")
    };
    mG7z.cwF7y = function(Y2x) {
        this.constructor.A2x(this.Pg6a).Ii3x(Y2x)
    };
    mG7z.bSX2x = function(ca3x) {
        var R2x = this.BZ1x(this.wW0x);
        if (!R2x) return;
        if (!!ca3x) R2x.error++;
        R2x.loaded++;
        if (R2x.loaded < R2x.total) return;
        this.bQt0x(this.wW0x);
        this.z2x(R2x.error > 0 ? "onerror" : "onloaded")
    };
    mG7z.cwC7v = function(ca3x) {
        this.bSX2x(!0)
    };
    mG7z.cwD7w = function() {
        this.bSX2x()
    };
    mG7z.Ii3x = function(Y2x) {
        Y2x = k2x.bqJ4N(Y2x);
        if (!Y2x) {
            this.z2x("onerror", {
                code: en4r.bxi6c,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kF6z = Y2x;
        if (!!this.KA4E) this.kF6z += (this.kF6z.indexOf("?") < 0 ? "?" : "&") + this.KA4E;
        if (this.BZ1x("loaded")[this.kF6z]) {
            try {
                this.z2x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T2x();
            return this
        }
        var R2x = this.BZ1x(this.kF6z),
            gl5q;
        if (!!R2x) {
            R2x.bind.unshift(this);
            R2x.timer = window.clearTimeout(R2x.timer)
        } else {
            gl5q = this.bax0x();
            R2x = {
                request: gl5q,
                bind: [this]
            };
            this.bRx1x(this.kF6z, R2x);
            h2x.s2x(gl5q, "load", this.bSF2x.f2x(this));
            h2x.s2x(gl5q, "error", this.dO4S.f2x(this, {
                code: en4r.bxd6X,
                message: "无法加载指定资源文件[" + this.kF6z + "]！"
            }))
        }
        if (this.bjE2x != 0) R2x.timer = window.setTimeout(this.dO4S.f2x(this, {
            code: en4r.bNN0x,
            message: "指定资源文件[" + this.kF6z + "]载入超时！"
        }), this.bjE2x || gU5Z);
        if (!!gl5q) this.bjA2x(gl5q);
        this.z2x("onloading");
        return this
    };
    mG7z.bTj2x = function(i2x) {
        if (!i2x || !i2x.length) {
            this.z2x("onerror", {
                code: en4r.bxi6c,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wW0x = k2x.nM7F();
        var R2x = {
            error: 0,
            loaded: 0,
            total: i2x.length
        };
        this.bRx1x(this.wW0x, R2x);
        for (var i = 0, l = i2x.length; i < l; i++) {
            if (!i2x[i]) {
                R2x.total--;
                continue
            }
            this.cwF7y(i2x[i])
        }
        this.z2x("onloading");
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        be2x = c2x("nej.h"),
        O2x = c2x("nej.ut.j"),
        Pq6k;
    if (!!O2x.bji2x) return;
    O2x.bji2x = NEJ.C();
    Pq6k = O2x.bji2x.N2x(O2x.Pb6V);
    Pq6k.bax0x = function() {
        var eM4Q = a1x.di3x("iframe");
        eM4Q.width = 0;
        eM4Q.height = 0;
        eM4Q.style.display = "none";
        return eM4Q
    };
    Pq6k.bjA2x = function(gl5q) {
        gl5q.src = this.kF6z;
        document.body.appendChild(gl5q)
    };
    Pq6k.dO4S = function(ca3x) {
        var eM4Q = (this.BZ1x(this.kF6z) || bb2x).request;
        this.baw0x("onerror", ca3x);
        be2x.bem1x(eM4Q)
    };
    Pq6k.bSF2x = function() {
        var mQ7J = null,
            eM4Q = (this.BZ1x(this.kF6z) || bb2x).request;
        try {
            mQ7J = eM4Q.contentWindow.document.body
        } catch (ex) {}
        this.baw0x("onloaded", mQ7J);
        be2x.bem1x(eM4Q)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ut.j"),
        bje2x;
    if (!!O2x.ban0x) return;
    O2x.ban0x = NEJ.C();
    bje2x = O2x.ban0x.N2x(O2x.Pb6V);
    bje2x.bax0x = function() {
        return a1x.di3x("link")
    };
    bje2x.bjA2x = function(gl5q) {
        gl5q.href = this.kF6z;
        document.head.appendChild(gl5q)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ut.j"),
        bam0x;
    if (!!O2x.bak0x) return;
    O2x.bak0x = NEJ.C();
    bam0x = O2x.bak0x.N2x(O2x.Pb6V);
    bam0x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.bUa9R = e2x.async;
        this.biT2x = e2x.charset;
        this.Pg6a.async = !1;
        this.Pg6a.charset = this.biT2x
    };
    bam0x.bax0x = function() {
        var gl5q = a1x.di3x("script");
        if (this.bUa9R != null) gl5q.async = !!this.bUa9R;
        if (this.biT2x != null) gl5q.charset = this.biT2x;
        return gl5q
    };
    bam0x.bRH2x = function(gl5q) {
        a1x.cM3x(gl5q)
    }
})();
(function() {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut.j");
    v2x.cwG7z = function(Y2x, e2x) {
        O2x.bak0x.A2x(e2x).Ii3x(Y2x);
        return this
    };
    v2x.cwH7A = function(i2x, e2x) {
        O2x.bak0x.A2x(e2x).bTj2x(i2x);
        return this
    };
    v2x.cGv0x = function(Y2x, e2x) {
        O2x.ban0x.A2x(e2x).Ii3x(Y2x);
        return this
    };
    v2x.cxB8t = function(i2x, e2x) {
        O2x.ban0x.A2x(e2x).bTj2x(i2x);
        return this
    };
    v2x.bys6m = function(Y2x, e2x) {
        O2x.bji2x.A2x(e2x).Ii3x(Y2x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        R2x = {},
        te9V = +(new Date) + "-";
    a1x.cX3x = function() {
        var cz3x = 0;
        var Py6s = function() {
            if (cz3x > 0) return;
            cz3x = 0;
            h2x.z2x(document, "templateready");
            h2x.hj5o(document, "templateready")
        };
        var bai0x = function(gf5k, e2x) {
            var cS3x = a1x.t2x(gf5k, "src");
            if (!cS3x) return;
            e2x = e2x || bb2x;
            var ga5f = e2x.root;
            if (!ga5f) {
                ga5f = gf5k.ownerDocument.location.href
            } else {
                ga5f = k2x.bqJ4N(ga5f)
            }
            cS3x = cS3x.split(",");
            k2x.bd2x(cS3x, function(D2x, r2x, i2x) {
                i2x[r2x] = k2x.bqJ4N(D2x, ga5f)
            });
            return cS3x
        };
        var cxK8C = function(gf5k, e2x) {
            if (!gf5k) return;
            var cS3x = bai0x(gf5k, e2x);
            if (!!cS3x) v2x.cxB8t(cS3x, {
                version: a1x.t2x(gf5k, "version")
            });
            a1x.bFZ8R(gf5k.value)
        };
        var cxL8D = function(D2x) {
            cz3x--;
            a1x.bGt8l(D2x);
            Py6s()
        };
        var cxO8G = function(gf5k, e2x) {
            if (!gf5k) return;
            var cS3x = bai0x(gf5k, e2x),
                fv4z = gf5k.value;
            if (!!cS3x) {
                cz3x++;
                var e2x = {
                    version: a1x.t2x(gf5k, "version"),
                    onloaded: cxL8D.f2x(null, fv4z)
                };
                window.setTimeout(v2x.cwH7A.f2x(v2x, cS3x, e2x), 0);
                return
            }
            a1x.bGt8l(fv4z)
        };
        var cxQ8I = function(mQ7J) {
            cz3x--;
            a1x.cX3x(mQ7J);
            Py6s()
        };
        var cxR8J = function(gf5k, e2x) {
            if (!gf5k) return;
            var cS3x = bai0x(gf5k, e2x)[0];
            if (!!cS3x) {
                cz3x++;
                var e2x = {
                    version: a1x.t2x(gf5k, "version"),
                    onloaded: cxQ8I
                };
                window.setTimeout(v2x.bys6m.f2x(v2x, cS3x, e2x), 0)
            }
        };
        var cxS8K = function(C2x, cK3x) {
            cz3x--;
            a1x.KF4J(C2x, cK3x || "");
            Py6s()
        };
        var cxT8L = function(gf5k, e2x) {
            if (!gf5k || !gf5k.id) return;
            var C2x = gf5k.id,
                cS3x = bai0x(gf5k, e2x)[0];
            if (!!cS3x) {
                cz3x++;
                var Y2x = cS3x + (cS3x.indexOf("?") < 0 ? "?" : "&") + (a1x.t2x(gf5k, "version") || ""),
                    e2x = {
                        type: "text",
                        method: "GET",
                        onload: cxS8K.f2x(null, C2x)
                    };
                window.setTimeout(v2x.bl3x.f2x(v2x, Y2x, e2x), 0)
            }
        };
        var cyq8i = function(g2x, e2x) {
            var u2x = g2x.name.toLowerCase();
            switch (u2x) {
                case "jst":
                    a1x.eC4G(g2x, !0);
                    return;
                case "txt":
                    a1x.KF4J(g2x.id, g2x.value || "");
                    return;
                case "ntp":
                    a1x.jq6k(g2x.value || "", g2x.id);
                    return;
                case "js":
                    cxO8G(g2x, e2x);
                    return;
                case "css":
                    cxK8C(g2x, e2x);
                    return;
                case "html":
                    cxR8J(g2x, e2x);
                    return;
                case "res":
                    cxT8L(g2x, e2x);
                    return
            }
        };
        I2x.fN4R.A2x({
            element: document,
            event: "templateready",
            oneventadd: Py6s
        });
        return function(F2x, e2x) {
            F2x = a1x.B2x(F2x);
            if (!!F2x) {
                var i2x = F2x.tagName == "TEXTAREA" ? [F2x] : F2x.getElementsByTagName("textarea");
                k2x.bd2x(i2x, function(g2x) {
                    cyq8i(g2x, e2x)
                });
                a1x.cM3x(F2x, !0)
            }
            Py6s();
            return this
        }
    }();
    a1x.KF4J = function(K2x, D2x) {
        R2x[K2x] = D2x || "";
        return this
    };
    a1x.iN5S = function(K2x) {
        return R2x[K2x] || ""
    };
    a1x.jq6k = function(F2x, K2x) {
        K2x = K2x || k2x.nM7F();
        F2x = a1x.B2x(F2x) || F2x;
        a1x.KF4J(te9V + K2x, F2x);
        a1x.mR7K(F2x);
        return K2x
    };
    a1x.dF4J = function(K2x) {
        if (!K2x) return null;
        K2x = te9V + K2x;
        var D2x = a1x.iN5S(K2x);
        if (!D2x) return null;
        if (k2x.fB4F(D2x)) {
            D2x = a1x.os7l(D2x);
            a1x.KF4J(K2x, D2x)
        }
        return D2x.cloneNode(!0)
    };
    a1x.Co1x = function() {
        var IK3x = function(D2x, K2x) {
            return K2x == "offset" || K2x == "limit"
        };
        return function(i2x, p2x, e2x) {
            var bs3x = [];
            if (!i2x || !i2x.length || !p2x) return bs3x;
            e2x = e2x || bb2x;
            var dt4x = i2x.length,
                jO6I = parseInt(e2x.offset) || 0,
                fQ4U = Math.min(dt4x, jO6I + (parseInt(e2x.limit) || dt4x)),
                ct3x = {
                    total: i2x.length,
                    range: [jO6I, fQ4U]
                };
            NEJ.X(ct3x, e2x, IK3x);
            for (var i = jO6I, cE3x; i < fQ4U; i++) {
                ct3x.index = i;
                ct3x.data = i2x[i];
                cE3x = p2x.A2x(ct3x);
                var C2x = cE3x.Fo2x();
                R2x[C2x] = cE3x;
                cE3x.T2x = cE3x.T2x.eH4L(function(C2x, cE3x) {
                    delete R2x[C2x];
                    delete cE3x.T2x
                }.f2x(null, C2x, cE3x));
                bs3x.push(cE3x)
            }
            return bs3x
        }
    }();
    a1x.bCg7Z = function(C2x) {
        return R2x[C2x]
    };
    a1x.cGf0x = function(ee4i, e2x) {
        e2x = e2x || bb2x;
        a1x.cX3x(e2x.tid || "template-box");
        h2x.s2x(document, "templateready", function() {
            ee4i.A2x().z2x("onshow", e2x)
        })
    };
    c2x("dbg").dumpTC = function() {
        return R2x
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.ej4n) return;
    O2x.ej4n = NEJ.C();
    b2x = O2x.ej4n.N2x(I2x.cJ3x);
    b2x.cw3x = function() {
        this.cF3x();
        a1x.bVK9B();
        this.ch3x();
        this.bW3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.cys8k(e2x.clazz);
        this.bCN7G(e2x.parent)
    };
    b2x.bC3x = function() {
        this.bG3x();
        this.bCY7R();
        delete this.ge5j;
        a1x.mR7K(this.o2x);
        a1x.x2x(this.o2x, this.bix2x);
        delete this.bix2x
    };
    b2x.ch3x = br3x;
    b2x.bW3x = function() {
        if (!this.cf3x) this.KJ4N();
        this.o2x = a1x.dF4J(this.cf3x);
        if (!this.o2x) this.o2x = a1x.di3x("div", this.md7W);
        a1x.y2x(this.o2x, this.md7W)
    };
    b2x.KJ4N = br3x;
    b2x.cys8k = function(ed4h) {
        this.bix2x = ed4h || "";
        a1x.y2x(this.o2x, this.bix2x)
    };
    b2x.czY8Q = function() {
        if (!this.md7W) return;
        a1x.y2x(this.ge5j, this.md7W + "-parent")
    };
    b2x.bCY7R = function() {
        if (!this.md7W) return;
        a1x.x2x(this.ge5j, this.md7W + "-parent")
    };
    b2x.lK6E = function() {
        return this.o2x
    };
    b2x.bCN7G = function(bI3x) {
        if (!this.o2x) return this;
        this.bCY7R();
        if (k2x.gE5J(bI3x)) {
            this.ge5j = bI3x(this.o2x)
        } else {
            this.ge5j = a1x.B2x(bI3x);
            if (!!this.ge5j) this.ge5j.appendChild(this.o2x)
        }
        this.czY8Q();
        return this
    };
    b2x.J2x = function() {
        if (!this.ge5j || !this.o2x || this.o2x.parentNode == this.ge5j) return this;
        this.ge5j.appendChild(this.o2x);
        return this
    };
    b2x.bt3x = function() {
        a1x.mR7K(this.o2x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        be2x = c2x("nej.h"),
        O2x = c2x("nej.ui"),
        wQ0x, bEH7A;
    if (!!O2x.PJ6D) return;
    O2x.PJ6D = NEJ.C();
    wQ0x = O2x.PJ6D.N2x(O2x.ej4n);
    bEH7A = O2x.PJ6D.cs3x;
    wQ0x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.xx0x("oncontentready", e2x.oncontentready || this.cAb8T.f2x(this));
        this.cAw9n = !!e2x.nohack;
        this.cAB9s = !!e2x.destroyable;
        this.KK4O(e2x.content)
    };
    wQ0x.bC3x = function() {
        this.z2x("onbeforerecycle");
        this.bG3x();
        this.bad0x();
        this.KK4O("");
        a1x.fa4e(this.o2x, {
            top: "",
            left: ""
        })
    };
    wQ0x.cAb8T = br3x;
    wQ0x.KL4P = br3x;
    wQ0x.bad0x = function() {
        a1x.mR7K(this.o2x);
        if (!!this.nK7D) {
            this.nK7D = be2x.bvG5L(this.o2x);
            delete this.nK7D
        }
    };
    wQ0x.KK4O = function(bo3x) {
        if (!this.o2x || !this.Cr1x || bo3x == null) return this;
        bo3x = bo3x || "";
        k2x.fB4F(bo3x) ? this.Cr1x.innerHTML = bo3x : this.Cr1x.appendChild(bo3x);
        this.z2x("oncontentready", this.Cr1x);
        return this
    };
    wQ0x.gK5P = function(bi2x) {
        var D2x = bi2x.top;
        if (D2x != null) {
            D2x += "px";
            a1x.ba2x(this.o2x, "top", D2x);
            a1x.ba2x(this.nK7D, "top", D2x)
        }
        var D2x = bi2x.left;
        if (D2x != null) {
            D2x += "px";
            a1x.ba2x(this.o2x, "left", D2x);
            a1x.ba2x(this.nK7D, "left", D2x)
        }
        return this
    };
    wQ0x.J2x = function() {
        a1x.ba2x(this.o2x, "visibility", "hidden");
        bEH7A.J2x.apply(this, arguments);
        this.KL4P();
        a1x.ba2x(this.o2x, "visibility", "");
        if (!this.cAw9n) {
            this.nK7D = be2x.nK7D(this.o2x)
        }
        return this
    };
    wQ0x.bt3x = function() {
        this.cAB9s ? this.T2x() : this.bad0x();
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ui"),
        Cs1x;
    if (!!O2x.baa0x) return;
    O2x.baa0x = NEJ.C();
    Cs1x = O2x.baa0x.N2x(O2x.ej4n);
    Cs1x.bm3x = function(e2x) {
        this.PR6L();
        this.bn3x(this.cAG9x(e2x));
        this.cg3x.onbeforerecycle = this.T2x.f2x(this);
        this.oK7D = this.bie2x()
    };
    Cs1x.bC3x = function() {
        this.z2x("onbeforerecycle");
        this.bG3x();
        delete this.cg3x;
        a1x.mR7K(this.o2x);
        var Cu1x = this.oK7D;
        if (!!Cu1x) {
            delete this.oK7D;
            Cu1x.T2x()
        }
    };
    Cs1x.bie2x = br3x;
    Cs1x.cAG9x = function(e2x) {
        var m2x = {};
        k2x.eI4M(e2x, function(p2x, K2x) {
            this.cg3x.hasOwnProperty(K2x) ? this.cg3x[K2x] = p2x : m2x[K2x] = p2x
        }, this);
        return m2x
    };
    Cs1x.PR6L = function() {
        this.cg3x = {
            clazz: "",
            parent: null,
            content: this.o2x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    Cs1x.J2x = function() {
        if (!!this.oK7D) this.oK7D.J2x();
        this.z2x("onaftershow");
        return this
    };
    Cs1x.bt3x = function() {
        if (!!this.oK7D) this.oK7D.bt3x();
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        en4r = c2x("nej.g"),
        be2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ui"),
        VW8O, bGM8E;
    if (!!O2x.KN4R) return;
    var jd5i = a1x.ty9p(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + en4r.bwJ5O + ");}");
    O2x.KN4R = NEJ.C();
    VW8O = O2x.KN4R.N2x(O2x.ej4n);
    bGM8E = O2x.KN4R.cs3x;
    VW8O.bm3x = function(e2x) {
        this.bn3x(e2x);
        var bo3x = e2x.content || "&nbsp;";
        k2x.fB4F(bo3x) ? this.o2x.innerHTML = bo3x : this.o2x.appendChild(bo3x)
    };
    VW8O.bC3x = function() {
        this.bG3x();
        this.o2x.innerHTML = "&nbsp;"
    };
    VW8O.ch3x = function() {
        this.md7W = jd5i
    };
    VW8O.J2x = function() {
        be2x.bvJ5O(this.o2x);
        bGM8E.J2x.apply(this, arguments);
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ut"),
        wL0x;
    if (!!O2x.um9d) return;
    O2x.um9d = NEJ.C();
    wL0x = O2x.um9d.N2x(O2x.cJ3x);
    wL0x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.cBc9T = !!e2x.overflow;
        this.o2x = a1x.B2x(e2x.body);
        this.Cz1x = a1x.B2x(e2x.view) || a1x.bDj7c(this.o2x);
        this.bHS8K = a1x.B2x(e2x.mbar) || this.o2x;
        this.ZW0x = parseInt(e2x.direction) || 0;
        if (!!e2x.isRelative) {
            this.o2x.style.position = "relative";
            this.bhU2x = true;
            this.bhS2x()
        }
        this.bX3x([
            [document, "mouseup", this.bhR2x.f2x(this)],
            [document, "mousemove", this.bhP2x.f2x(this)],
            [this.bHS8K, "mousedown", this.PW6Q.f2x(this)]
        ])
    };
    wL0x.bhS2x = function() {
        if (!!this.bhU2x) {
            this.KR4V = a1x.hO5T(this.o2x, this.Cz1x);
            this.KR4V.x -= parseInt(a1x.df3x(this.o2x, "left")) || 0;
            this.KR4V.y -= parseInt(a1x.df3x(this.o2x, "top")) || 0
        }
    };
    wL0x.bC3x = function() {
        this.bG3x();
        delete this.o2x;
        delete this.bHS8K;
        delete this.Cz1x
    };
    wL0x.bhy2x = function() {
        return {
            x: Math.max(this.Cz1x.clientWidth, this.Cz1x.scrollWidth) - this.o2x.offsetWidth,
            y: Math.max(this.Cz1x.clientHeight, this.Cz1x.scrollHeight) - this.o2x.offsetHeight
        }
    };
    wL0x.PW6Q = function(d2x) {
        h2x.bh2x(d2x);
        if (!!this.hW5b) return;
        this.hW5b = {
            x: h2x.jD6x(d2x),
            y: h2x.lX6R(d2x)
        };
        this.bJH9y = this.bhy2x();
        this.z2x("ondragstart", d2x)
    };
    wL0x.bhP2x = function(d2x) {
        if (!this.hW5b) return;
        var bi2x = {
            x: h2x.jD6x(d2x),
            y: h2x.lX6R(d2x)
        };
        var pI8A = bi2x.x - this.hW5b.x,
            pW8O = bi2x.y - this.hW5b.y,
            D2x = {
                top: (parseInt(a1x.df3x(this.o2x, "top")) || 0) + pW8O,
                left: (parseInt(a1x.df3x(this.o2x, "left")) || 0) + pI8A
            };
        if (this.bhU2x) {
            this.bhS2x();
            D2x.top = D2x.top + this.KR4V.y;
            D2x.left = D2x.left + this.KR4V.x
        }
        this.hW5b = bi2x;
        this.gK5P(D2x)
    };
    wL0x.bhR2x = function(d2x) {
        if (!this.hW5b) return;
        delete this.bJH9y;
        delete this.hW5b;
        this.z2x("ondragend", this.bhr2x())
    };
    wL0x.gK5P = function(d2x) {
        if (!this.cBc9T) {
            var bJZ9Q = this.bJH9y || this.bhy2x();
            d2x.top = Math.min(bJZ9Q.y, Math.max(0, d2x.top));
            d2x.left = Math.min(bJZ9Q.x, Math.max(0, d2x.left))
        }
        var cj3x = this.o2x.style;
        if (this.bhU2x) {
            this.bhS2x();
            d2x.top = d2x.top - this.KR4V.y;
            d2x.left = d2x.left - this.KR4V.x
        }
        if (this.ZW0x == 0 || this.ZW0x == 2) cj3x.top = d2x.top + "px";
        if (this.ZW0x == 0 || this.ZW0x == 1) cj3x.left = d2x.left + "px";
        this.z2x("onchange", d2x);
        return this
    };
    wL0x.bhr2x = function() {
        return {
            left: parseInt(a1x.df3x(this.o2x, "left")) || 0,
            top: parseInt(a1x.df3x(this.o2x, "top")) || 0
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = NEJ.P("nej.e"),
        h2x = NEJ.P("nej.v"),
        k2x = NEJ.P("nej.u"),
        I2x = NEJ.P("nej.ut"),
        O2x = NEJ.P("nej.ui"),
        jd5i, gi5n, b2x, L2x;
    if (!!O2x.ZL9C) return;
    O2x.ZL9C = NEJ.C();
    b2x = O2x.ZL9C.N2x(O2x.PJ6D);
    L2x = O2x.ZL9C.cs3x;
    b2x.cw3x = function() {
        this.sp8h = {};
        this.kL6F = {
            onchange: this.bhP2x.f2x(this)
        };
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.cBG9x(e2x.mask);
        this.cBO9F(e2x.align);
        this.CL1x(e2x.title);
        if (!e2x.draggable) return;
        this.iT5Y = I2x.um9d.A2x(this.kL6F)
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.qP8H;
        delete this.Qk6e;
        if (!!this.CO1x) {
            this.CO1x.T2x();
            delete this.CO1x
        }
        if (!!this.iT5Y) {
            this.iT5Y.T2x();
            delete this.iT5Y
        }
    };
    b2x.ch3x = function() {
        this.md7W = jd5i;
        this.cf3x = gi5n
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.dm4q(this.o2x);
        this.Cr1x = i2x[1];
        this.kL6F.mbar = i2x[0];
        this.kL6F.body = this.o2x;
        h2x.s2x(i2x[2], "mousedown", this.cCg9X.f2x(this));
        h2x.s2x(this.kL6F.mbar, "mousedown", this.PW6Q.f2x(this));
        this.bNg9X = a1x.dm4q(this.kL6F.mbar)[0]
    };
    b2x.cCg9X = function(d2x) {
        h2x.bh2x(d2x);
        this.z2x("onclose", d2x);
        if (!d2x.stopped) {
            this.bt3x()
        }
    };
    b2x.PW6Q = function(d2x) {
        h2x.z2x(document, "click")
    };
    b2x.bhP2x = function(d2x) {
        if (!this.nK7D) return;
        a1x.fa4e(this.nK7D, {
            top: d2x.top + "px",
            left: d2x.left + "px"
        })
    };
    b2x.KL4P = function() {
        var ez4D = [function() {
                return 0
            }, function(ov7o, mU7N, bi2x, K2x) {
                if (K2x == "top" && window.top != window.self) {
                    var ZG9x = 0,
                        Eo2x = 0;
                    if (top.g_topBarHeight) ZG9x = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) Eo2x = top.g_bottomBarHeight;
                    if (ov7o.top <= ZG9x) {
                        var bhb2x = Math.max(0, (mU7N.height - (ZG9x - ov7o.top) - Eo2x - bi2x.height) / 2);
                        return bhb2x + ZG9x
                    } else {
                        var bhb2x = Math.max(0, (mU7N.height - Eo2x - bi2x.height) / 2);
                        return bhb2x + ov7o.top
                    }
                }
                return Math.max(0, ov7o[K2x] + (mU7N[iE5J[K2x]] - bi2x[iE5J[K2x]]) / 2)
            }, function(ov7o, mU7N, bi2x, K2x) {
                return ov7o[K2x] + (mU7N[iE5J[K2x]] - bi2x[iE5J[K2x]])
            }],
            cCx9o = ["left", "top"],
            iE5J = {
                left: "width",
                top: "height"
            };
        return function() {
            var D2x = {},
                cj3x = this.o2x.style,
                jI6C = a1x.pn8f(),
                ov7o = {
                    left: jI6C.scrollLeft,
                    top: jI6C.scrollTop
                },
                mU7N = {
                    width: jI6C.clientWidth,
                    height: jI6C.clientHeight
                },
                bi2x = {
                    width: this.o2x.offsetWidth,
                    height: this.o2x.offsetHeight
                },
                dq4u = {
                    left: jI6C.clientWidth - this.o2x.offsetWidth,
                    top: jI6C.clientHeight - this.o2x.offsetHeight
                };
            k2x.bd2x(cCx9o, function(K2x, r2x) {
                var dv4z = ez4D[this.qP8H[r2x]];
                if (!dv4z) return;
                D2x[K2x] = dv4z(ov7o, mU7N, bi2x, K2x)
            }, this);
            this.gK5P(D2x)
        }
    }();
    b2x.cCC9t = function() {
        if (!this.CO1x) {
            if (!this.Qk6e) return;
            this.sp8h.parent = this.ge5j;
            this.CO1x = this.Qk6e.A2x(this.sp8h)
        }
        this.CO1x.J2x()
    };
    b2x.bad0x = function() {
        if (!!this.CO1x) this.CO1x.bt3x();
        L2x.bad0x.apply(this, arguments)
    };
    b2x.cBG9x = function(lk6e) {
        if (!!lk6e) {
            if (lk6e instanceof O2x.KN4R) {
                this.CO1x = lk6e;
                return
            }
            if (k2x.gE5J(lk6e)) {
                this.Qk6e = lk6e;
                return
            }
            this.Qk6e = O2x.KN4R;
            if (k2x.fB4F(lk6e)) this.sp8h.clazz = lk6e;
            return
        }
        this.Qk6e = null
    };
    b2x.CL1x = function(eo4s, dW4a) {
        if (!!this.bNg9X) {
            var VX8P = !dW4a ? "innerText" : "innerHTML";
            this.bNg9X[VX8P] = eo4s || "标题"
        }
        return this
    };
    b2x.cBO9F = function() {
        var dg3x = /\s+/,
            cCD9u = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cCE9v = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function(oo7h) {
            this.qP8H = (oo7h || "").split(dg3x);
            var ck3x = cCD9u[this.qP8H[0]];
            if (ck3x == null) ck3x = 1;
            this.qP8H[0] = ck3x;
            var ck3x = cCE9v[this.qP8H[1]];
            if (ck3x == null) ck3x = 1;
            this.qP8H[1] = ck3x;
            return this
        }
    }();
    b2x.J2x = function() {
        L2x.J2x.apply(this, arguments);
        this.cCC9t();
        return this
    };
    jd5i = a1x.ty9p(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gi5n = a1x.jq6k('<div class="' + jd5i + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        bha2x;
    if (!!O2x.ZE9v) return;
    O2x.ZE9v = NEJ.C();
    bha2x = O2x.ZE9v.N2x(O2x.baa0x);
    bha2x.bie2x = function() {
        return O2x.ZL9C.A2x(this.cg3x)
    };
    bha2x.PR6L = function() {
        O2x.ZE9v.cs3x.PR6L.apply(this, arguments);
        this.cg3x.mask = null;
        this.cg3x.title = "标题";
        this.cg3x.align = "";
        this.cg3x.draggable = !1;
        this.cg3x.onclose = null
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        bc2x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.eq4u = NEJ.C();
    b2x = n2x.eq4u.N2x(bc2x.ZE9v);
    b2x.bm3x = function(e2x) {
        e2x.clazz = "m-layer z-show " + (e2x.clazz || "");
        e2x.nohack = true;
        e2x.draggable = true;
        this.bn3x(e2x)
    };
    b2x.dX4b = function(g2x, bF3x) {
        if (!g2x) return;
        a1x.ba2x(g2x, "display", !bF3x ? "none" : "");
        g2x.lastChild.innerText = bF3x || ""
    };
    b2x.dV4Z = function(gN5S, dc3x, Qs6m, Qt6n) {
        var ee4i = "js-lock";
        if (dc3x === undefined) return a1x.bE3x(gN5S, ee4i);
        !dc3x ? a1x.x2x(gN5S, ee4i) : a1x.y2x(gN5S, ee4i);
        gN5S.firstChild.innerText = !dc3x ? Qs6m : Qt6n
    };
    n2x.eq4u.J2x = function(e2x) {
        e2x = e2x || {};
        if (e2x.mask === undefined) e2x.mask = "m-mask";
        if (e2x.parent === undefined) e2x.parent = document.body;
        if (e2x.draggable === undefined) e2x.draggable = true;
        !!this.fl4p && this.fl4p.T2x();
        this.fl4p = this.A2x(e2x);
        this.fl4p.J2x(e2x);
        return this.fl4p
    };
    n2x.eq4u.bt3x = function() {
        !!this.fl4p && this.fl4p.T2x()
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.bgP1x = NEJ.C();
    b2x = n2x.bgP1x.N2x(n2x.eq4u);
    L2x = n2x.bgP1x.cs3x;
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        if (e2x.bubble === undefined) e2x.bubble = true;
        this.Qv6p = e2x.bubble;
        this.qD8v = e2x.message || ""
    };
    b2x.ch3x = function() {
        this.cf3x = a1x.jq6k('<div class="lyct f-cb f-tc"></div>')
    };
    b2x.bW3x = function() {
        this.ci3x();
        h2x.s2x(this.o2x, "click", this.cL3x.f2x(this))
    };
    b2x.cL3x = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action");
        if (!g2x) return;
        if (g2x.href) h2x.cn3x(d2x);
        if (a1x.t2x(g2x, "action") == "close") this.bt3x();
        if (this.Qv6p === !1) h2x.uj9a(d2x);
        this.z2x("onaction", a1x.t2x(g2x, "action"))
    };
    b2x.J2x = function() {
        L2x.J2x.call(this);
        this.o2x.innerHTML = this.qD8v
    };
    var gG5L = a1x.eC4G('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l2x.ne7X = function() {
        var eh4l;
        var cE3x;
        var bgN1x = function(eO4S, V2x) {
            if (k2x.gE5J(eO4S, "function") && eO4S(V2x) != -1) cE3x.T2x()
        };
        var Da2x = function() {
            !!cE3x && cE3x.bt3x()
        };
        return function(e2x) {
            clearTimeout(eh4l);
            e2x = e2x || {};
            e2x.title = e2x.title || "提示";
            e2x.clazz = e2x.clazz || "";
            e2x.parent = e2x.parent || document.body;
            e2x.buttons = e2x.buttons || [];
            e2x.message = a1x.cc3x(gG5L, e2x);
            e2x.onaction = bgN1x.f2x(null, e2x.action);
            if (e2x.mask === undefined) e2x.mask = true;
            if (e2x.draggable === undefined) e2x.draggable = true;
            !!cE3x && cE3x.T2x();
            cE3x = n2x.bgP1x.A2x(e2x);
            cE3x.J2x();
            if (e2x.autoclose) eh4l = setTimeout(Da2x.f2x(null), 2e3);
            return cE3x
        }
    }();
    l2x.ft4x = function(e2x) {
        e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w1";
        e2x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e2x.btntxt || "确定"
        }];
        var cE3x = l2x.ne7X(e2x);
        return cE3x
    };
    l2x.hr5w = function(e2x) {
        e2x = e2x || {};
        e2x.clazz = e2x.clazz || "m-layer-w2";
        e2x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e2x.btnok || "确定",
            style: e2x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e2x.btncc || "取消",
            style: e2x.ccstyle || ""
        }];
        var cE3x = l2x.ne7X(e2x);
        return cE3x
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u");
    a1x.cCJ9A = function() {
        var gO5T = /[\r\n]/gi,
            R2x = {};
        var cCP9G = function(cN3x) {
            return (cN3x || "").replace(gO5T, "aa").length
        };
        var bUK9B = function(C2x) {
            var bg2x = R2x[C2x],
                bVc9T = a1x.B2x(C2x),
                qU8M = a1x.B2x(C2x + "-counter");
            if (!bVc9T || !bg2x) return;
            var d2x = {
                input: bVc9T.value
            };
            d2x.length = bg2x.onlength(d2x.input);
            d2x.delta = bg2x.max - d2x.length;
            bg2x.onchange(d2x);
            qU8M.innerHTML = d2x.value || "剩余" + d2x.delta + "个字"
        };
        return function(F2x, e2x) {
            var C2x = a1x.lQ6K(F2x);
            if (!C2x || !!R2x[C2x]) return;
            var bg2x = NEJ.X({}, e2x);
            bg2x.onchange = bg2x.onchange || br3x;
            bg2x.onlength = cCP9G;
            if (!bg2x.max) {
                var bVj9a = parseInt(a1x.gH5M(C2x, "maxlength")),
                    bVF9w = parseInt(a1x.t2x(C2x, "maxLength"));
                bg2x.max = bVj9a || bVF9w || 100;
                if (!bVj9a && !!bVF9w) bg2x.onlength = k2x.fx4B
            }
            R2x[C2x] = bg2x;
            h2x.s2x(C2x, "input", bUK9B.f2x(null, C2x));
            var g2x = a1x.IV3x(C2x, {
                nid: bg2x.nid || "js-counter",
                clazz: bg2x.clazz
            });
            bg2x.xid = C2x + "-counter";
            g2x.id = bg2x.xid;
            bUK9B(C2x)
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        be2x = c2x("nej.h");
    be2x.bgL1x = function(F2x, ed4h) {}
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        O2x = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        be2x = c2x("nej.h");
    if (O2x.mW7P.trident) return;
    be2x.bgL1x = function() {
        var R2x = {};
        var Iz3x = function(d2x) {
            var dn4r = h2x.X2x(d2x);
            if (!!dn4r.value) return;
            a1x.ba2x(a1x.IV3x(dn4r), "display", "none")
        };
        var Gx3x = function(d2x) {
            var dn4r = h2x.X2x(d2x);
            if (!!dn4r.value) return;
            a1x.ba2x(a1x.IV3x(dn4r), "display", "")
        };
        var cCS9J = function(dn4r, ed4h) {
            var C2x = a1x.lQ6K(dn4r),
                iV5a = a1x.IV3x(dn4r, {
                    tag: "label",
                    clazz: ed4h
                });
            iV5a.htmlFor = C2x;
            var cK3x = a1x.gH5M(dn4r, "placeholder") || "";
            iV5a.innerText = cK3x == "null" ? "" : cK3x;
            var ce3x = dn4r.offsetHeight + "px";
            a1x.fa4e(iV5a, {
                left: 0,
                display: !dn4r.value ? "" : "none"
            })
        };
        return be2x.bgL1x.eH4L(function(d2x) {
            d2x.stopped = !0;
            var bf2x = d2x.args,
                dn4r = a1x.B2x(bf2x[0]);
            if (!!R2x[dn4r.id]) return;
            cCS9J(dn4r, bf2x[1]);
            R2x[dn4r.id] = !0;
            h2x.s2x(dn4r, "blur", Gx3x.f2x(null));
            h2x.s2x(dn4r, "focus", Iz3x.f2x(null))
        })
    }()
})();
(function() {
    var c2x = NEJ.P,
        be2x = c2x("nej.h"),
        a1x = c2x("nej.e"),
        db3x = c2x("nej.x");
    a1x.gv5A = db3x.gv5A = function(F2x, ed4h) {
        be2x.bgL1x(F2x, a1x.t2x(F2x, "holder") || ed4h || "js-placeholder");
        return this
    };
    db3x.isChange = !0
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        hN5S;
    if (!!O2x.Qy6s) return;
    O2x.Qy6s = NEJ.C();
    hN5S = O2x.Qy6s.N2x(O2x.cJ3x);
    hN5S.cw3x = function() {
        this.cF3x();
        this.GQ3x = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    hN5S.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.gt5y = document.forms[e2x.form] || a1x.B2x(e2x.form);
        this.bX3x([
            [this.gt5y, "keypress", this.cCW9N.f2x(this)]
        ]);
        this.qD8v = e2x.message || {};
        this.qD8v.pass = this.qD8v.pass || "&nbsp;";
        var fn4r = this.qn8f(this.gt5y, "focusMode", 1);
        if (!isNaN(fn4r)) {
            this.bzK6E = {
                mode: fn4r,
                clazz: e2x.focus
            }
        }
        this.Dd2x = e2x.holder;
        this.GQ3x.tp.clazz = "js-mhd " + (e2x.tip || "js-tip");
        this.GQ3x.ok.clazz = "js-mhd " + (e2x.pass || "js-pass");
        this.GQ3x.er.clazz = "js-mhd " + (e2x.error || "js-error");
        this.bzU6O = e2x.invalid || "js-invalid";
        this.cDf9W(e2x);
        this.gM5R();
        if (!!this.Df2x) this.Df2x.focus()
    };
    hN5S.bC3x = function() {
        this.bG3x();
        delete this.qD8v;
        delete this.Df2x;
        delete this.Hj3x;
        delete this.gt5y;
        delete this.bAY6S;
        delete this.QE7x
    };
    hN5S.qn8f = function(g2x, wx0x, u2x) {
        var D2x = a1x.t2x(g2x, wx0x);
        switch (u2x) {
            case 1:
                return parseInt(D2x);
            case 2:
                return (D2x || "").toLowerCase() == "true";
            case 3:
                return this.bgp1x(D2x)
        }
        return D2x
    };
    hN5S.Dh2x = function(D2x, u2x) {
        if (u2x == "date") return this.bgp1x(D2x);
        return parseInt(D2x)
    };
    hN5S.Zu9l = function() {
        var kf6Z = /^button|submit|reset|image|hidden|file$/i;
        return function(g2x) {
            g2x = this.B2x(g2x) || g2x;
            var u2x = g2x.type;
            return !!g2x.name && !kf6Z.test(g2x.type || "")
        }
    }();
    hN5S.cDj9a = function() {
        var kf6Z = /^hidden$/i;
        return function(g2x) {
            if (this.Zu9l(g2x)) return !0;
            g2x = this.B2x(g2x) || g2x;
            var u2x = g2x.type || "";
            return kf6Z.test(u2x)
        }
    }();
    hN5S.bgp1x = function() {
        var dg3x = /[-\/]/;
        var cDY9P = function(D2x) {
            if (!D2x) return "";
            D2x = D2x.split(dg3x);
            D2x.push(D2x.shift());
            return D2x.join("/")
        };
        return function(D2x) {
            if ((D2x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cDY9P(D2x))
        }
    }();
    hN5S.cCW9N = function(d2x) {
        if (d2x.keyCode != 13) return;
        this.z2x("onenter", d2x)
    };
    hN5S.cEg9X = function(C2x, W2x) {
        var st8l = this.QE7x[W2x],
            D2x = this.qn8f(C2x, W2x);
        if (!D2x || !st8l) return;
        this.Zt9k(C2x, st8l);
        this.bgg1x(C2x, W2x, D2x)
    };
    hN5S.cEi9Z = function(C2x, W2x) {
        try {
            var bCk7d = this.qn8f(C2x, W2x);
            if (!bCk7d) return;
            var D2x = new RegExp(bCk7d);
            this.bgg1x(C2x, W2x, D2x);
            this.Zt9k(C2x, this.QE7x[W2x])
        } catch (e) {}
    };
    hN5S.cEp9g = function(C2x, W2x) {
        var st8l = this.QE7x[W2x];
        if (!!st8l && this.qn8f(C2x, W2x, 2)) this.Zt9k(C2x, st8l)
    };
    hN5S.bga1x = function(C2x, W2x, D2x) {
        D2x = parseInt(D2x);
        if (isNaN(D2x)) return;
        this.bgg1x(C2x, W2x, D2x);
        this.Zt9k(C2x, this.QE7x[W2x])
    };
    hN5S.bCv7o = function(C2x, W2x) {
        this.bga1x(C2x, W2x, this.qn8f(C2x, W2x))
    };
    hN5S.bCz7s = function(C2x, W2x) {
        this.bga1x(C2x, W2x, a1x.gH5M(C2x, W2x))
    };
    hN5S.bCL7E = function(C2x, W2x, u2x) {
        var D2x = this.Dh2x(this.qn8f(C2x, W2x), this.qn8f(C2x, "type"));
        this.bga1x(C2x, W2x, D2x)
    };
    hN5S.cEu9l = function() {
        var gO5T = /^input|textarea$/i;
        var Iz3x = function(d2x) {
            this.qa8S(h2x.X2x(d2x))
        };
        var Gx3x = function(d2x) {
            var g2x = h2x.X2x(d2x);
            if (!this.qn8f(g2x, "ignore", 2)) {
                this.bCO7H(g2x)
            }
        };
        return function(g2x) {
            if (this.qn8f(g2x, "autoFocus", 2)) this.Df2x = g2x;
            var qE8w = a1x.gH5M(g2x, "placeholder");
            if (!!qE8w && qE8w != "null") a1x.gv5A(g2x, this.Dd2x);
            if (!!this.bzK6E && gO5T.test(g2x.tagName)) a1x.mt7m(g2x, this.bzK6E);
            var C2x = a1x.lQ6K(g2x);
            this.cEp9g(C2x, "required");
            this.cEg9X(C2x, "type");
            this.cEi9Z(C2x, "pattern");
            this.bCz7s(C2x, "maxlength");
            this.bCz7s(C2x, "minlength");
            this.bCv7o(C2x, "maxLength");
            this.bCv7o(C2x, "minLength");
            this.bCL7E(C2x, "min");
            this.bCL7E(C2x, "max");
            var W2x = g2x.name;
            this.qD8v[W2x + "-tip"] = this.qn8f(g2x, "tip");
            this.qD8v[W2x + "-error"] = this.qn8f(g2x, "message");
            this.qa8S(g2x);
            var bx3x = this.Hj3x[C2x],
                j2x = (bx3x || bb2x).data || bb2x,
                MY4c = this.qn8f(g2x, "counter", 2);
            if (MY4c && (j2x.maxlength || j2x.maxLength)) {
                a1x.cCJ9A(C2x, {
                    nid: this.GQ3x.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx3x && gO5T.test(g2x.tagName)) {
                this.bX3x([
                    [g2x, "focus", Iz3x.f2x(this)],
                    [g2x, "blur", Gx3x.f2x(this)]
                ])
            } else if (this.qn8f(g2x, "focus", 2)) {
                this.bX3x([
                    [g2x, "focus", Iz3x.f2x(this)]
                ])
            }
        }
    }();
    hN5S.cDf9W = function() {
        var DO2x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bgp1x(v))
            }
        };
        var cEv9m = {
            required: function(g2x) {
                var u2x = g2x.type,
                    cEB9s = !g2x.value,
                    cEE9v = (u2x == "checkbox" || u2x == "radio") && !g2x.checked;
                if (cEE9v || cEB9s) return -1
            },
            type: function(g2x, e2x) {
                var dg3x = this.bAY6S[e2x.type],
                    fv4z = g2x.value.trim(),
                    cEG9x = !!dg3x.test && !dg3x.test(fv4z),
                    cFa9R = k2x.gE5J(dg3x) && !dg3x.call(this, fv4z);
                if (cEG9x || cFa9R) return -2
            },
            pattern: function(g2x, e2x) {
                if (!e2x.pattern.test(g2x.value)) return -3
            },
            maxlength: function(g2x, e2x) {
                if (g2x.value.length > e2x.maxlength) return -4
            },
            minlength: function(g2x, e2x) {
                if (g2x.value.length < e2x.minlength) return -5
            },
            maxLength: function(g2x, e2x) {
                if (k2x.fx4B(g2x.value) > e2x.maxLength) return -4
            },
            minLength: function(g2x, e2x) {
                if (k2x.fx4B(g2x.value) < e2x.minLength) return -5
            },
            min: function(g2x, e2x) {
                var gW5b = this.Dh2x(g2x.value, e2x.type);
                if (isNaN(gW5b) || gW5b < e2x.min) return -6
            },
            max: function(g2x, e2x) {
                var gW5b = this.Dh2x(g2x.value, e2x.type);
                if (isNaN(gW5b) || gW5b > e2x.max) return -7
            }
        };
        return function(e2x) {
            this.bAY6S = NEJ.X(NEJ.X({}, DO2x), e2x.type);
            this.QE7x = NEJ.X(NEJ.X({}, cEv9m), e2x.attr)
        }
    }();
    hN5S.Zt9k = function(C2x, yv0x) {
        if (!k2x.gE5J(yv0x)) return;
        var bx3x = this.Hj3x[C2x];
        if (!bx3x || !bx3x.func) {
            bx3x = bx3x || {};
            bx3x.func = [];
            this.Hj3x[C2x] = bx3x
        }
        bx3x.func.push(yv0x)
    };
    hN5S.bgg1x = function(C2x, W2x, D2x) {
        if (!W2x) return;
        var bx3x = this.Hj3x[C2x];
        if (!bx3x || !bx3x.data) {
            bx3x = bx3x || {};
            bx3x.data = {};
            this.Hj3x[C2x] = bx3x
        }
        bx3x.data[W2x] = D2x
    };
    hN5S.bCO7H = function(g2x) {
        g2x = this.B2x(g2x) || g2x;
        var bx3x = this.Hj3x[a1x.lQ6K(g2x)];
        if (!g2x || !bx3x || !this.Zu9l(g2x)) return !0;
        var m2x;
        k2x.eI4M(bx3x.func, function(ez4D) {
            m2x = ez4D.call(this, g2x, bx3x.data);
            return m2x != null
        }, this);
        if (m2x == null) {
            var d2x = {
                target: g2x,
                form: this.gt5y
            };
            this.z2x("oncheck", d2x);
            m2x = d2x.value
        }
        var d2x = {
            target: g2x,
            form: this.gt5y
        };
        if (m2x != null) {
            d2x.code = m2x;
            this.z2x("oninvalid", d2x);
            if (!d2x.stopped) {
                this.cFf0x(g2x, d2x.value || this.qD8v[g2x.name + m2x])
            }
        } else {
            this.z2x("onvalid", d2x);
            if (!d2x.stopped) this.cFe0x(g2x, d2x.value)
        }
        return m2x == null
    };
    hN5S.zM1x = function() {
        var cFd0x = function(beD1x, beC1x) {
            return beD1x == beC1x ? "block" : "none"
        };
        var cFc0x = function(g2x, u2x, bF3x) {
            var qE8w = bEL7E.call(this, g2x, u2x);
            if (!qE8w && !!bF3x) qE8w = a1x.IV3x(g2x, this.GQ3x[u2x]);
            return qE8w
        };
        var bEL7E = function(g2x, u2x) {
            var qE8w;
            if (u2x == "tp") qE8w = a1x.B2x(g2x.name + "-tip");
            if (!qE8w) qE8w = a1x.H2x(g2x.parentNode, this.GQ3x[u2x].nid)[0];
            return qE8w
        };
        return function(g2x, bF3x, u2x) {
            g2x = this.B2x(g2x) || g2x;
            if (!g2x) return;
            u2x == "er" ? a1x.y2x(g2x, this.bzU6O) : a1x.x2x(g2x, this.bzU6O);
            var qE8w = cFc0x.call(this, g2x, u2x, bF3x);
            if (!!qE8w && !!bF3x) qE8w.innerHTML = bF3x;
            k2x.eI4M(this.GQ3x, function(D2x, K2x) {
                a1x.ba2x(bEL7E.call(this, g2x, K2x), "display", cFd0x(u2x, K2x))
            }, this)
        }
    }();
    hN5S.qa8S = function(g2x, bF3x) {
        this.zM1x(g2x, bF3x || this.qD8v[g2x.name + "-tip"], "tp");
        return this
    };
    hN5S.cFe0x = function(g2x, bF3x) {
        this.zM1x(g2x, bF3x || this.qD8v[g2x.name + "-pass"] || this.qD8v.pass, "ok");
        return this
    };
    hN5S.cFf0x = function(g2x, bF3x) {
        this.zM1x(g2x, bF3x || this.qD8v[g2x.name + "-error"], "er");
        return this
    };
    hN5S.jb5g = function() {
        var gO5T = /^(?:radio|checkbox)$/i;
        var cFb9S = function(D2x) {
            return D2x == null ? "" : D2x
        };
        var bEU7N = function(D2x, g2x) {
            if (gO5T.test(g2x.type || "")) {
                g2x.checked = D2x == g2x.value
            } else {
                g2x.value = cFb9S(D2x)
            }
        };
        return function(W2x, D2x) {
            var g2x = this.B2x(W2x);
            if (!g2x) return this;
            if (g2x.tagName == "SELECT" || !g2x.length) {
                bEU7N(D2x, g2x)
            } else {
                k2x.bd2x(g2x, bEU7N.f2x(null, D2x))
            }
            return this
        }
    }();
    hN5S.B2x = function(W2x) {
        return this.gt5y.elements[W2x]
    };
    hN5S.cFh0x = function() {
        return this.gt5y
    };
    hN5S.Zk9b = function() {
        var gO5T = /^radio|checkbox$/i,
            kf6Z = /^number|date$/;
        var cEZ9Q = function(bz3x, g2x) {
            var W2x = g2x.name,
                D2x = g2x.value,
                bx3x = bz3x[W2x],
                u2x = this.qn8f(g2x, "type");
            if (kf6Z.test(u2x)) D2x = this.Dh2x(D2x, u2x);
            if (gO5T.test(g2x.type) && !g2x.checked) {
                D2x = this.qn8f(g2x, "value");
                if (!D2x) return
            }
            if (!!bx3x) {
                if (!k2x.eJ4N(bx3x)) {
                    bx3x = [bx3x];
                    bz3x[W2x] = bx3x
                }
                bx3x.push(D2x)
            } else {
                bz3x[W2x] = D2x
            }
        };
        return function() {
            var m2x = {};
            k2x.bd2x(this.gt5y.elements, function(g2x) {
                if (this.cDj9a(g2x)) cEZ9Q.call(this, m2x, g2x)
            }, this);
            return m2x
        }
    }();
    hN5S.QT7M = function() {
        var cEY9P = function(g2x) {
            if (this.Zu9l(g2x)) this.qa8S(g2x)
        };
        return function() {
            this.gt5y.reset();
            k2x.bd2x(this.gt5y.elements, cEY9P, this);
            return this
        }
    }();
    hN5S.cHR0x = function() {
        this.gt5y.submit();
        return this
    };
    hN5S.gM5R = function() {
        var cEL9C = function(g2x) {
            if (this.Zu9l(g2x)) this.cEu9l(g2x)
        };
        return function() {
            this.Hj3x = {};
            k2x.bd2x(this.gt5y.elements, cEL9C, this);
            return this
        }
    }();
    hN5S.cEK9B = function(g2x) {
        g2x = this.B2x(g2x) || g2x;
        if (!!g2x) return this.bCO7H(g2x);
        var m2x = !0;
        k2x.bd2x(this.gt5y.elements, function(g2x) {
            var jw6q = this.cEK9B(g2x);
            m2x = m2x && jw6q
        }, this);
        return m2x
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.Zc9T = NEJ.C();
    b2x = n2x.Zc9T.N2x(n2x.eq4u);
    L2x = n2x.Zc9T.cs3x;
    b2x.bW3x = function() {
        this.ci3x();
        h2x.s2x(this.o2x, "click", this.cL3x.f2x(this));
        h2x.s2x(document, "mousewheel", this.Cx1x.f2x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Cx1x.f2x(this))
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        if (e2x.jst) {
            this.o2x.innerHTML = a1x.cc3x(e2x.jst, e2x.data)
        } else if (e2x.ntp) {
            this.o2x.appendChild(a1x.dF4J(e2x.ntp))
        } else if (e2x.txt) {
            this.o2x.innerHTML = a1x.iN5S(e2x.txt)
        } else if (e2x.html) {
            this.o2x.innerHTML = e2x.html
        }
        var Rd7W = this.o2x.getElementsByTagName("form");
        if (Rd7W.length) {
            this.gt5y = I2x.Qy6s.A2x({
                form: Rd7W[0]
            })
        }
        this.EB2x = a1x.dm4q(this.o2x)[0]
    };
    b2x.bC3x = function() {
        this.z2x("ondestroy");
        this.bG3x();
        this.o2x.innerHTML = "";
        delete this.EB2x
    };
    b2x.cL3x = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action"),
            j2x = this.gt5y ? this.gt5y.Zk9b() : null,
            d2x = {
                action: a1x.t2x(g2x, "action")
            };
        if (j2x) d2x.data = j2x;
        if (d2x.action) {
            this.z2x("onaction", d2x);
            if (d2x.stopped) return;
            this.bt3x()
        }
    };
    b2x.Cx1x = function(d2x) {
        if (!this.EB2x) return;
        h2x.bh2x(d2x);
        var dq4u = d2x.wheelDelta || -d2x.detail;
        this.EB2x.scrollTop -= dq4u
    };
    l2x.kr6l = function(e2x) {
        e2x.destroyable = e2x.destroyable || true;
        e2x.title = e2x.title || "提示";
        e2x.draggable = true;
        e2x.parent = e2x.parent || document.body;
        e2x.mask = e2x.mask || true;
        var Cu1x = n2x.Zc9T.A2x(e2x);
        Cu1x.J2x();
        return Cu1x
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bGp8h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Rf7Y = {},
        EH2x = {};
    for (var i = 0, l = bGp8h.length, c; i < l; i++) {
        c = bGp8h.charAt(i);
        Rf7Y[i] = c;
        EH2x[c] = i
    }
    var cEJ9A = function(iv5A) {
        var r2x = 0,
            c, m2x = [];
        while (r2x < iv5A.length) {
            c = iv5A[r2x];
            if (c < 128) {
                m2x.push(String.fromCharCode(c));
                r2x++
            } else if (c > 191 && c < 224) {
                m2x.push(String.fromCharCode((c & 31) << 6 | iv5A[r2x + 1] & 63));
                r2x += 2
            } else {
                m2x.push(String.fromCharCode((c & 15) << 12 | (iv5A[r2x + 1] & 63) << 6 | iv5A[r2x + 2] & 63));
                r2x += 3
            }
        }
        return m2x.join("")
    };
    var cEF9w = function() {
        var hx5C = /\r\n/g;
        return function(j2x) {
            j2x = j2x.replace(hx5C, "\n");
            var m2x = [],
                mC7v = String.fromCharCode(237);
            if (mC7v.charCodeAt(0) < 0)
                for (var i = 0, l = j2x.length, c; i < l; i++) {
                    c = j2x.charCodeAt(i);
                    c > 0 ? m2x.push(c) : m2x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j2x.length, c; i < l; i++) {
                        c = j2x.charCodeAt(i);
                        if (c < 128) m2x.push(c);
                        else if (c > 127 && c < 2048) m2x.push(c >> 6 | 192, c & 63 | 128);
                        else m2x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return m2x
        }
    }();
    var Lp4t = function(iv5A) {
        var r2x = 0,
            m2x = [],
            fn4r = iv5A.length % 3;
        if (fn4r == 1) iv5A.push(0, 0);
        if (fn4r == 2) iv5A.push(0);
        while (r2x < iv5A.length) {
            m2x.push(Rf7Y[iv5A[r2x] >> 2], Rf7Y[(iv5A[r2x] & 3) << 4 | iv5A[r2x + 1] >> 4], Rf7Y[(iv5A[r2x + 1] & 15) << 2 | iv5A[r2x + 2] >> 6], Rf7Y[iv5A[r2x + 2] & 63]);
            r2x += 3
        }
        if (fn4r == 1) m2x[m2x.length - 1] = m2x[m2x.length - 2] = "=";
        if (fn4r == 2) m2x[m2x.length - 1] = "=";
        return m2x.join("")
    };
    var bGT8L = function() {
        var rM8E = /\n|\r|=/g;
        return function(j2x) {
            var r2x = 0,
                m2x = [];
            j2x = j2x.replace(rM8E, "");
            for (var i = 0, l = j2x.length; i < l; i += 4) m2x.push(EH2x[j2x.charAt(i)] << 2 | EH2x[j2x.charAt(i + 1)] >> 4, (EH2x[j2x.charAt(i + 1)] & 15) << 4 | EH2x[j2x.charAt(i + 2)] >> 2, (EH2x[j2x.charAt(i + 2)] & 3) << 6 | EH2x[j2x.charAt(i + 3)]);
            var bq3x = m2x.length,
                fn4r = j2x.length % 4;
            if (fn4r == 2) m2x = m2x.slice(0, bq3x - 2);
            if (fn4r == 3) m2x = m2x.slice(0, bq3x - 1);
            return m2x
        }
    }();
    p.cFk0x = function(j2x) {
        return cEJ9A(bGT8L(j2x))
    };
    p.cEA9r = function(j2x) {
        var iv5A = bGT8L(j2x),
            dt4x = iv5A.length,
            it5y;
        var r2x = 0;
        while (it5y = iv5A[r2x]) {
            if (it5y > 128) {
                iv5A[r2x] = it5y - 256
            }
            r2x++
        }
        return iv5A
    };
    p.cEz9q = function(j2x) {
        try {
            return window.btoa(j2x)
        } catch (ex) {
            return Lp4t(cEF9w(j2x))
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n2x.bHG8y = NEJ.C();
    b2x = n2x.bHG8y.N2x(n2x.eq4u);
    b2x.ch3x = function() {
        this.cf3x = "m-download-layer"
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.bwX5c = i2x[0];
        this.bwI5N = i2x[1];
        this.bHU8M = i2x[2];
        v2x.bl3x("/client/version/get", {
            type: "json",
            onload: this.cEy9p.f2x(this)
        });
        if (O2x.Il3x.mac) {
            a1x.x2x(this.bwX5c.parentNode, "f-hide");
            a1x.y2x(this.bwI5N.parentNode, "f-hide");
            a1x.y2x(this.bHU8M, "f-hide")
        } else {
            a1x.y2x(this.bwX5c.parentNode, "f-hide");
            a1x.x2x(this.bwI5N.parentNode, "f-hide");
            a1x.x2x(this.bHU8M, "f-hide")
        }
    };
    b2x.bm3x = function(e2x) {
        e2x.clazz = " m-layer-down";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "下载";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bn3x(e2x);
        this.bX3x([
            [this.o2x, "click", this.bT3x.f2x(this)]
        ]);
        this.ev4z = TYPE_MAP[e2x.type];
        this.gY5d = e2x.id
    };
    b2x.bC3x = function() {
        this.bG3x()
    };
    b2x.BR1x = function() {
        this.bt3x()
    };
    b2x.FG2x = function(d2x) {
        this.z2x("onok", D2x);
        this.bt3x()
    };
    b2x.bT3x = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action");
        switch (a1x.t2x(g2x, "action")) {
            case "download":
                this.bt3x();
                window.open(a1x.t2x(g2x, "src"));
                break;
            case "orpheus":
                this.bt3x();
                location.href = "orpheus://" + k2x.cEz9q(JSON.stringify({
                    type: this.ev4z,
                    id: this.gY5d,
                    cmd: "download"
                }));
                break
        }
    };
    b2x.cEy9p = function(d2x) {
        if ((d2x || bb2x).code == 200) {
            this.KA4E = d2x.data;
            this.bwX5c.innerText = "V" + this.KA4E.mac;
            this.bwI5N.innerText = "V" + this.KA4E.pc
        }
    };
    l2x.Lr4v = function(e2x) {
        n2x.bHG8y.A2x(e2x).J2x()
    }
})();
(function() {
    var c2x = NEJ.P,
        l2x = c2x("nm.x");
    var FullscreenApi = {};
    var apiMap = [
        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];
    var specApi = apiMap[0];
    var browserApi;
    for (var i = 0; i < apiMap.length; i++) {
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    }
    if (browserApi) {
        for (var i = 0; i < browserApi.length; i++) {
            FullscreenApi[specApi[i]] = browserApi[i]
        }
    }
    l2x.FM2x = FullscreenApi
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        k2x = c2x("nej.u"),
        q2x = c2x("nm.d"),
        bR3x = {};
    q2x.B2x = function(K2x) {
        return bR3x[K2x]
    };
    q2x.nm7f = function(K2x, bg2x) {
        bR3x[K2x] = bg2x
    };
    q2x.fr4v = function(j2x) {
        k2x.eI4M(j2x, function(p2x, K2x) {
            var bg2x = bR3x[K2x] || {};
            NEJ.X(bg2x, p2x);
            bR3x[K2x] = bg2x
        })
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        be2x = c2x("nej.h");
    be2x.YV9M = function(K2x) {
        return localStorage.getItem(K2x)
    };
    be2x.YU9L = function(K2x, D2x) {
        localStorage.setItem(K2x, D2x)
    };
    be2x.bwf5k = function(K2x) {
        localStorage.removeItem(K2x)
    };
    be2x.bvK5P = function() {
        localStorage.clear()
    };
    be2x.cEx9o = function() {
        var m2x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m2x.push(localStorage.key(i));
        return m2x
    };
    be2x.bvo5t = function() {
        (document.onstorageready || br3x)()
    };
    be2x.buV5a = function() {
        return !0
    }
})();
(function() {
    var c2x = NEJ.P,
        O2x = c2x("nej.p"),
        it5y = c2x("nej.c"),
        be2x = c2x("nej.h"),
        tQ9H;
    if (O2x.mW7P.trident || !!window.localStorage) return;
    var cEw9n = function() {
        var rG8y, eh4l;
        var bmc3x = function() {
            rG8y = document.createElement("div");
            NEJ.X(rG8y.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rG8y);
            rG8y.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it5y.B2x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Of6Z = function() {
            eh4l = window.clearTimeout(eh4l);
            var hQ5V = rG8y.getElementsByTagName("object")[0];
            if (!!hQ5V.initStorage) {
                delete rG8y;
                tQ9H = hQ5V;
                tQ9H.initStorage("nej-storage");
                (document.onstorageready || br3x)();
                return
            }
            eh4l = window.setTimeout(Of6Z, 500)
        };
        return function() {
            if (!!tQ9H) return;
            bmc3x();
            Of6Z()
        }
    }();
    be2x.YV9M = be2x.YV9M.eH4L(function(d2x) {
        d2x.stopped = !0;
        if (!tQ9H) return;
        d2x.value = tQ9H.getItem(d2x.args[0])
    });
    be2x.YU9L = be2x.YU9L.eH4L(function(d2x) {
        d2x.stopped = !0;
        if (!tQ9H) return;
        var bf2x = d2x.args;
        tQ9H.setItem(bf2x[0], bf2x[1])
    });
    be2x.bwf5k = be2x.bwf5k.eH4L(function(d2x) {
        d2x.stopped = !0;
        if (!tQ9H) return;
        tQ9H.removeItem(d2x.args[0])
    });
    be2x.bvK5P = be2x.bvK5P.eH4L(function(d2x) {
        d2x.stopped = !0;
        if (!!tQ9H) tQ9H.clear()
    });
    be2x.bvo5t = be2x.bvo5t.eH4L(function(d2x) {
        d2x.stopped = !0;
        cEw9n()
    });
    be2x.buV5a = be2x.buV5a.eH4L(function(d2x) {
        d2x.stopped = !0;
        d2x.value = !!tQ9H
    })
})();
(function() {
    var c2x = NEJ.P,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        be2x = c2x("nej.h"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        R2x = {};
    v2x.vv9m = function(K2x, D2x) {
        var bKN9E = JSON.stringify(D2x);
        try {
            be2x.YU9L(K2x, bKN9E)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKN9E != be2x.YV9M(K2x)) R2x[K2x] = D2x;
        return this
    };
    v2x.tR9I = function(K2x) {
        var j2x = JSON.parse(be2x.YV9M(K2x) || "null");
        return j2x == null ? R2x[K2x] : j2x
    };
    v2x.bLb9S = function(K2x, D2x) {
        var j2x = v2x.tR9I(K2x);
        if (j2x == null) {
            j2x = D2x;
            v2x.vv9m(K2x, j2x)
        }
        return j2x
    };
    v2x.Lu4y = function(K2x) {
        delete R2x[K2x];
        be2x.bwf5k(K2x);
        return this
    };
    v2x.cFm0x = function() {
        var buG5L = function(p2x, K2x, bz3x) {
            delete bz3x[K2x]
        };
        return function() {
            k2x.eI4M(R2x, buG5L);
            be2x.bvK5P();
            return this
        }
    }();
    v2x.cFn0x = function(m2x) {
        m2x = m2x || {};
        k2x.bd2x(be2x.cEx9o(), function(K2x) {
            m2x[K2x] = v2x.tR9I(K2x)
        });
        return m2x
    };
    I2x.fN4R.A2x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (be2x.buV5a()) {
                document.onstorageready()
            }
        }
    });
    var cEt9k = function() {
        var cEr9i = function(D2x, K2x, bz3x) {
            be2x.YU9L(K2x, JSON.stringify(D2x));
            delete bz3x[K2x]
        };
        return function() {
            k2x.eI4M(R2x, cEr9i)
        }
    }();
    h2x.s2x(document, "storageready", cEt9k);
    be2x.bvo5t()
})();
(function() {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        Ly4C;
    if (!!O2x.bur5w) return;
    O2x.bur5w = NEJ.C();
    Ly4C = O2x.bur5w.N2x(O2x.cJ3x);
    Ly4C.cw3x = function() {
        var gG5L = +(new Date),
            nf7Y = "dat-" + gG5L;
        return function() {
            this.cF3x();
            var R2x = this.constructor[nf7Y];
            if (!R2x) {
                R2x = {};
                this.constructor[nf7Y] = R2x
            }
            this.S2x = R2x
        }
    }();
    Ly4C.B2x = function(K2x) {
        return this.S2x[K2x]
    };
    Ly4C.nm7f = function(K2x, D2x) {
        var ni7b = this.S2x[K2x];
        this.S2x[K2x] = D2x;
        h2x.z2x(localCache, "cachechange", {
            key: K2x,
            type: "set",
            oldValue: ni7b,
            newValue: D2x
        });
        return this
    };
    Ly4C.cM3x = function(K2x) {
        var ni7b = this.S2x[K2x];
        k2x.bcJ0x(this.S2x, K2x);
        h2x.z2x(localCache, "cachechange", {
            key: K2x,
            type: "delete",
            oldValue: ni7b,
            newValue: undefined
        });
        return ni7b
    };
    Ly4C.YP9G = function(Gw3x) {
        return NEJ.Q(this.S2x, Gw3x)
    };
    window.localCache = O2x.bur5w.A2x();
    O2x.fN4R.A2x({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c2x = NEJ.P,
        fu4y = NEJ.R,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.ut"),
        nf7Y = "dat-" + +(new Date),
        nj7c;
    if (!!O2x.bud5i) return;
    O2x.bud5i = NEJ.C();
    nj7c = O2x.bud5i.N2x(O2x.cJ3x);
    nj7c.cw3x = function() {
        this.cF3x();
        this.S2x = this.constructor[nf7Y];
        if (!this.S2x) {
            this.S2x = {};
            this.S2x[nf7Y + "-l"] = {};
            this.constructor[nf7Y] = this.S2x
        }
    };
    nj7c.sE9v = function(K2x) {
        return this.S2x[K2x]
    };
    nj7c.pQ8I = function(K2x, D2x) {
        this.S2x[K2x] = D2x
    };
    nj7c.lF6z = function(K2x, kA6u) {
        var j2x = this.sE9v(K2x);
        if (j2x == null) {
            j2x = kA6u;
            this.pQ8I(K2x, j2x)
        }
        return j2x
    };
    nj7c.cEq9h = function(K2x) {
        if (K2x != null) {
            delete this.S2x[K2x];
            return
        }
        k2x.eI4M(this.S2x, function(p2x, K2x) {
            if (K2x == nf7Y + "-l") return;
            this.cEq9h(K2x)
        }, this)
    };
    nj7c.cFo0x = function(K2x) {
        if (!!v2x.Lu4y) return v2x.Lu4y(K2x)
    };
    nj7c.cEl9c = function(K2x) {
        if (!!v2x.tR9I) return v2x.tR9I(K2x)
    };
    nj7c.cEk9b = function(K2x, D2x) {
        if (!!v2x.vv9m) v2x.vv9m(K2x, D2x)
    };
    nj7c.Hl3x = function(K2x, kA6u) {
        var j2x = this.RT7M(K2x);
        if (j2x == null) {
            j2x = kA6u;
            this.xr0x(K2x, j2x)
        }
        return j2x
    };
    nj7c.RT7M = function(K2x) {
        var j2x = this.sE9v(K2x);
        if (j2x != null) return j2x;
        j2x = this.cEl9c(K2x);
        if (j2x != null) this.pQ8I(K2x, j2x);
        return j2x
    };
    nj7c.xr0x = function(K2x, D2x) {
        this.cEk9b(K2x, D2x);
        this.pQ8I(K2x, D2x)
    };
    nj7c.bQX1x = function(K2x) {
        if (K2x != null) {
            delete this.S2x[K2x];
            if (!!v2x.Lu4y) v2x.Lu4y(K2x);
            return
        }
        k2x.eI4M(this.S2x, function(p2x, K2x) {
            if (K2x == nf7Y + "-l") return;
            this.bQX1x(K2x)
        }, this)
    };
    nj7c.cFp0x = function() {
        this.bQX1x();
        return this
    };
    nj7c.cFq0x = function(K2x) {
        var j2x = this.S2x[nf7Y + "-l"];
        delete j2x[K2x]
    };
    nj7c.btj5o = function(K2x) {
        var j2x = this.S2x[nf7Y + "-l"],
            bf2x = fu4y.slice.call(arguments, 1);
        k2x.bd2x(j2x[K2x], function(cA3x) {
            try {
                cA3x.apply(null, bf2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j2x[K2x]
    };
    nj7c.bti5n = function(K2x, cA3x) {
        cA3x = cA3x || br3x;
        var i2x = this.S2x[nf7Y + "-l"][K2x];
        if (!i2x) {
            i2x = [cA3x];
            this.S2x[nf7Y + "-l"][K2x] = i2x;
            return !1
        }
        i2x.push(cA3x);
        return !0
    };
    nj7c.cEf9W = function(i2x, bi2x, gc5h) {
        if (!i2x) return !1;
        bi2x = parseInt(bi2x) || 0;
        gc5h = parseInt(gc5h) || 0;
        if (!gc5h) {
            if (!i2x.loaded) return !1;
            gc5h = i2x.length
        }
        if (!!i2x.loaded) gc5h = Math.min(gc5h, i2x.length - bi2x);
        for (var i = 0; i < gc5h; i++)
            if (!i2x[bi2x + i]) return !1;
        return !0
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x, L2x;
    if (!!O2x.RU7N) return;
    O2x.RU7N = NEJ.C();
    b2x = O2x.RU7N.N2x(O2x.bud5i);
    L2x = O2x.RU7N.cs3x;
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.wW0x = e2x.key || "id";
        this.bk3x = e2x.data || bb2x;
        this.cEe9V = !!e2x.autogc;
        this.cEc9T(e2x.id)
    };
    b2x.bC3x = function() {
        this.bG3x();
        if (!!this.ei4m) {
            this.bSf2x()
        }
    };
    b2x.cEc9T = function(C2x) {
        var R2x;
        if (!!C2x) {
            R2x = this.S2x[C2x];
            if (!R2x) {
                R2x = {};
                this.S2x[C2x] = R2x
            }
        }
        R2x = R2x || this.S2x;
        R2x.hash = R2x.hash || {};
        this.RX7Q = R2x
    };
    b2x.bSf2x = function() {
        this.ei4m = window.clearTimeout(this.ei4m);
        var bz3x = {};
        k2x.eI4M(this.RX7Q, function(i2x, K2x) {
            if (K2x == "hash") return;
            if (!k2x.eJ4N(i2x)) return;
            k2x.bd2x(i2x, function(p2x) {
                if (!p2x) return;
                bz3x[p2x[this.wW0x]] = !0
            }, this)
        }, this);
        k2x.eI4M(this.YF9w(), function(p2x, C2x, dR4V) {
            if (!bz3x[C2x]) {
                delete dR4V[C2x]
            }
        })
    };
    b2x.cEb9S = function() {
        if (!!this.ei4m) {
            this.ei4m = window.clearTimeout(this.ei4m)
        }
        this.ei4m = window.setTimeout(this.bSf2x.f2x(this), 150)
    };
    b2x.AF1x = function(p2x, YD9u) {
        p2x = this.bSI2x(p2x, YD9u) || p2x;
        if (!p2x) return null;
        var K2x = p2x[this.wW0x];
        if (K2x != null) {
            var id5i = this.YF9w()[K2x];
            if (!!id5i) p2x = NEJ.X(id5i, p2x);
            this.YF9w()[K2x] = p2x
        }
        delete p2x.bSR2x;
        return p2x
    };
    b2x.bSI2x = br3x;
    b2x.bsg4k = function(K2x, p2x) {
        if (!p2x) return;
        if (!k2x.eJ4N(p2x)) {
            var i2x = this.hF5K(K2x),
                p2x = this.AF1x(p2x, K2x);
            if (!!p2x) i2x.unshift(p2x);
            return
        }
        k2x.mY7R(p2x, this.bsg4k.f2x(this, K2x))
    };
    b2x.Sa7T = function(K2x, cB3x) {
        var i2x = this.hF5K(K2x);
        i2x.length = Math.max(i2x.length, cB3x);
        this.bsa4e(K2x);
        return this
    };
    b2x.lo6i = function(K2x) {
        return this.hF5K(K2x).length
    };
    b2x.bsa4e = function(K2x, oV7O) {
        this.hF5K(K2x).loaded = oV7O != !1;
        return this
    };
    b2x.Yy9p = function(K2x) {
        return !!this.hF5K(K2x).loaded
    };
    b2x.uK9B = function(K2x, i2x) {
        this.uI9z(K2x);
        this.brB4F({
            key: K2x,
            offset: 0,
            limit: i2x.length + 1
        }, {
            list: i2x,
            total: i2x.length
        })
    };
    b2x.hF5K = function() {
        var DT2x = function(K2x) {
            return (K2x || "") + (!K2x ? "" : "-") + "list"
        };
        return function(K2x) {
            var K2x = DT2x(K2x),
                i2x = this.RX7Q[K2x];
            if (!i2x) {
                i2x = [];
                this.RX7Q[K2x] = i2x
            }
            return i2x
        }
    }();
    b2x.YF9w = function() {
        var dR4V = this.RX7Q.hash;
        if (!dR4V) {
            dR4V = {};
            this.RX7Q.hash = dR4V
        }
        return dR4V
    };
    b2x.bru4y = function() {
        var DT2x = function(e2x) {
            return "r-" + e2x.key
        };
        return function(e2x) {
            var iP5U = NEJ.X({}, e2x),
                ow7p = DT2x(iP5U);
            if (!this.bti5n(ow7p, this.z2x.f2x(this))) {
                iP5U.rkey = ow7p;
                iP5U.onload = this.cEa9R.f2x(this, iP5U);
                this.z2x("dopullrefresh", iP5U)
            }
            return this
        }
    }();
    b2x.cEa9R = function(e2x, i2x) {
        this.bsg4k(e2x.key, i2x);
        this.btj5o(e2x.rkey, "onpullrefresh", e2x)
    };
    b2x.lw6q = function() {
        var DT2x = function(e2x) {
            return "r-" + e2x.key + "-" + e2x.offset + "-" + e2x.limit
        };
        return function(e2x) {
            e2x = e2x || bb2x;
            var iP5U = {
                    key: "" + e2x.key || "",
                    ext: e2x.ext || null,
                    data: e2x.data || null,
                    offset: parseInt(e2x.offset) || 0,
                    limit: parseInt(e2x.limit) || 0
                },
                i2x = this.hF5K(iP5U.key);
            if (this.cEf9W(i2x, iP5U.offset, iP5U.limit)) {
                this.z2x("onlistload", iP5U);
                return this
            }
            var ow7p = DT2x(iP5U);
            if (!this.bti5n(ow7p, this.z2x.f2x(this))) {
                iP5U.rkey = ow7p;
                iP5U.onload = this.brB4F.f2x(this, iP5U);
                this.z2x("doloadlist", iP5U)
            }
            return this
        }
    }();
    b2x.brB4F = function() {
        var DW2x = function(p2x, r2x, i2x) {
            if (!!p2x) {
                return !0
            }
            i2x.splice(r2x, 1)
        };
        return function(e2x, m2x) {
            e2x = e2x || bb2x;
            var K2x = e2x.key,
                bi2x = e2x.offset,
                bVq9h = this.hF5K(K2x);
            var i2x = m2x || [];
            if (!k2x.eJ4N(i2x)) {
                i2x = m2x.result || m2x.list || [];
                var cB3x = parseInt(m2x.total);
                if (!isNaN(cB3x) || cB3x > i2x.length) {
                    this.Sa7T(K2x, cB3x)
                }
            }
            k2x.bd2x(i2x, function(p2x, r2x) {
                bVq9h[bi2x + r2x] = this.AF1x(p2x, K2x)
            }, this);
            if (i2x.length < e2x.limit) {
                this.bsa4e(K2x);
                k2x.mY7R(bVq9h, DW2x)
            }
            this.btj5o(e2x.rkey, "onlistload", e2x)
        }
    }();
    b2x.uI9z = function() {
        var DW2x = function(p2x, r2x, i2x) {
            i2x.splice(r2x, 1)
        };
        return function(K2x) {
            var i2x = this.hF5K(K2x);
            k2x.mY7R(i2x, DW2x);
            this.bsa4e(K2x, !1);
            if (this.cEe9V) {
                this.cEb9S()
            }
            return this
        }
    }();
    b2x.bVt9k = function(p2x, YD9u) {
        return !p2x.bSR2x
    };
    b2x.eL4P = function(C2x) {
        return this.YF9w()[C2x]
    };
    b2x.cFr0x = function(C2x) {
        var p2x = this.eL4P(C2x);
        if (!!p2x) p2x.bSR2x = !0
    };
    b2x.Yu9l = function() {
        var DT2x = function(e2x) {
            return "r-" + e2x.key + "-" + e2x.id
        };
        return function(e2x) {
            e2x = e2x || bb2x;
            var C2x = e2x[this.wW0x],
                iP5U = {
                    id: C2x,
                    ext: e2x.ext,
                    data: e2x.data || {},
                    key: "" + e2x.key || ""
                };
            p2x = this.eL4P(C2x);
            iP5U.data[this.wW0x] = C2x;
            if (!!p2x && this.bVt9k(p2x, iP5U.key)) {
                this.z2x("onitemload", iP5U);
                return this
            }
            var ow7p = DT2x(iP5U);
            if (!this.bti5n(ow7p, this.z2x.f2x(this))) {
                iP5U.rkey = ow7p;
                iP5U.onload = this.cDX9O.f2x(this, iP5U);
                this.z2x("doloaditem", iP5U)
            }
            return this
        }
    }();
    b2x.cDX9O = function(e2x, p2x) {
        e2x = e2x || bb2x;
        this.AF1x(p2x, e2x.key);
        this.btj5o(e2x.rkey, "onitemload", e2x)
    };
    b2x.jJ6D = function(e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.zx1x.f2x(this, e2x);
        this.z2x("doadditem", e2x)
    };
    b2x.zx1x = function(e2x, p2x) {
        var K2x = e2x.key;
        p2x = this.AF1x(p2x, K2x);
        if (!!p2x) {
            var fc4g = 0,
                i2x = this.hF5K(K2x);
            if (!e2x.push) {
                fc4g = -1;
                var bi2x = e2x.offset || 0;
                i2x.splice(bi2x, 0, p2x)
            } else if (i2x.loaded) {
                fc4g = 1;
                i2x.push(p2x)
            } else {
                i2x.length++
            }
        }
        var d2x = {
            key: K2x,
            flag: fc4g,
            data: p2x,
            action: "add",
            ext: e2x.ext
        };
        this.z2x("onitemadd", d2x);
        return d2x
    };
    b2x.LH4L = function(e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.bqm4q.f2x(this, e2x);
        this.z2x("dodeleteitem", e2x)
    };
    b2x.bqm4q = function(e2x, bzg6a) {
        var p2x, K2x = e2x.key;
        if (!!bzg6a) {
            p2x = this.eL4P(e2x.id) || null;
            var C2x = e2x.id,
                cDW9N = this.wW0x,
                i2x = this.hF5K(K2x),
                r2x = k2x.dl4p(i2x, function(id5i) {
                    return !!id5i && id5i[cDW9N] == C2x
                });
            if (r2x >= 0) i2x.splice(r2x, 1)
        }
        var d2x = {
            key: K2x,
            data: p2x,
            action: "delete",
            ext: e2x.ext
        };
        this.z2x("onitemdelete", d2x);
        return d2x
    };
    b2x.Yp9g = function(e2x) {
        e2x = NEJ.X({}, e2x);
        e2x.onload = this.cDU9L.f2x(this, e2x);
        this.z2x("doupdateitem", e2x)
    };
    b2x.cDU9L = function(e2x, p2x) {
        var K2x = e2x.key;
        if (!!p2x) p2x = this.AF1x(p2x, K2x);
        var d2x = {
            key: K2x,
            data: p2x,
            action: "update",
            ext: e2x.ext
        };
        this.z2x("onitemupdate", d2x);
        return d2x
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.bqi4m) return;
    O2x.bqi4m = NEJ.C();
    b2x = O2x.bqi4m.N2x(O2x.RU7N);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.bpA4E({
            doloadlist: this.Yo9f.f2x(this),
            doloaditem: this.bpL4P.f2x(this),
            doadditem: this.bzG6A.f2x(this),
            dodeleteitem: this.Yj9a.f2x(this),
            doupdateitem: this.Yh9Y.f2x(this),
            dopullrefresh: this.bzO6I.f2x(this)
        })
    };
    b2x.Yo9f = br3x;
    b2x.bzO6I = br3x;
    b2x.bpL4P = br3x;
    b2x.bzG6A = br3x;
    b2x.Yj9a = br3x;
    b2x.Yh9Y = br3x
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        b2x, L2x;
    q2x.hM5R = NEJ.C();
    b2x = q2x.hM5R.N2x(I2x.bqi4m);
    b2x.cp3x = function() {
        var Dx2x = location.protocol + "//" + location.host;
        var cDT9K = function(bs3x, j2x) {
            var bz3x = {
                conf: {},
                data: {},
                urls: []
            };
            k2x.bd2x(bs3x, function(K2x, r2x, i2x) {
                var bg2x = q2x.B2x(K2x);
                if (!bg2x) return;
                var bps4w = bAo6i(bg2x.url, j2x[K2x]);
                bz3x.urls.push(bps4w);
                bz3x.conf[bps4w] = bg2x;
                bz3x.data[bps4w] = JSON.stringify(j2x[K2x] == null ? "" : j2x[K2x])
            });
            return bz3x
        };
        var bAo6i = function(Y2x, j2x) {
            return Y2x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j2x[$2] || $1
            })
        };
        var bAq6k = function(bg2x, e2x, d2x) {
            h2x.z2x(window, "requesterror", d2x);
            if (!!d2x.stopped) return;
            var DB2x = bg2x.onerror || e2x.onerror;
            if (k2x.fB4F(DB2x)) {
                this.z2x(DB2x, d2x, e2x)
            } else {
                (DB2x || br3x).call(this, d2x, e2x)
            }
            var d2x = {
                result: d2x,
                option: e2x
            };
            this.z2x("onerror", d2x);
            if (!d2x.stopped)(bg2x.onmessage || br3x).call(this, d2x.result.code, d2x.result)
        };
        var bAs6m = function(Q2x, bg2x, e2x) {
            var m2x = Q2x;
            if (k2x.gE5J(bg2x.format)) {
                m2x = bg2x.format.call(this, Q2x, e2x)
            }
            return m2x
        };
        var yE0x = function(Q2x, bg2x, e2x, ut9k) {
            if (k2x.gE5J(bg2x.beforeload)) {
                bg2x.beforeload.call(this, Q2x, e2x, bg2x)
            }
            if (Q2x && Q2x.code != null && Q2x.code != 200) {
                bAq6k.call(this, bg2x, e2x, {
                    key: e2x.key,
                    code: Q2x.code,
                    message: Q2x.message || "",
                    captchaId: Q2x.captchaId,
                    ext: Q2x
                });
                return
            }
            var m2x = Q2x;
            if (!ut9k) {
                m2x = bAs6m.call(this, Q2x, bg2x, e2x)
            } else if (k2x.gE5J(bg2x.format)) {
                var bpj4n = [];
                k2x.bd2x(ut9k.urls, function(Y2x) {
                    bpj4n.push(bAs6m.call(this, Q2x[Y2x], ut9k.conf[Y2x], e2x))
                }, this);
                bpj4n.push(e2x);
                m2x = bg2x.format.apply(this, bpj4n)
            }
            var nZ7S = bg2x.onload || e2x.onload,
                bBb6V = bg2x.finaly || e2x.finaly || br3x;
            if (k2x.fB4F(nZ7S)) {
                bBb6V.call(this, this.z2x(nZ7S, m2x), e2x)
            } else {
                bBb6V.call(this, (nZ7S || br3x).call(this, m2x), e2x)
            }
        };
        var BO1x = function(bg2x, e2x, ca3x) {
            bAq6k.call(this, bg2x, e2x, {
                key: e2x.key,
                code: ca3x.code || -1,
                message: ca3x.message || ""
            })
        };
        return function(bg2x, e2x) {
            if (k2x.fB4F(bg2x)) {
                bg2x = q2x.B2x(bg2x)
            }
            delete e2x.value;
            (bg2x.filter || br3x).call(this, e2x, bg2x);
            var Q2x = e2x.value;
            if (!!Q2x) {
                yE0x.call(this, Q2x, bg2x, e2x);
                return
            }
            var Y2x, j2x = e2x.data || bb2x,
                zm0x = {
                    cookie: !0,
                    type: bg2x.rtype || "json",
                    method: bg2x.type || "POST",
                    onerror: BO1x.f2x(this, bg2x, e2x),
                    noescape: bg2x.noescape
                };
            if (k2x.eJ4N(bg2x.url)) {
                var ut9k = cDT9K(bg2x.url, j2x);
                Y2x = Dx2x + "/api/batch";
                zm0x.data = k2x.cC3x(ut9k.data);
                zm0x.onload = yE0x.ew4A(this, bg2x, e2x, ut9k);
                zm0x.headers = {
                    "batch-method": "POST"
                };
                delete ut9k.data
            } else {
                var ku6o = bg2x.url.indexOf(":") < 0 ? Dx2x : "";
                Y2x = bAo6i(ku6o + bg2x.url, j2x);
                zm0x.data = k2x.cC3x(e2x.data);
                zm0x.onload = yE0x.ew4A(this, bg2x, e2x)
            }
            if (zm0x.method == "GET") zm0x.query = zm0x.data;
            return v2x.bl3x(Y2x, zm0x)
        }
    }();
    b2x.ES2x = function() {
        var gO5T = /^get|list|pull$/i;
        return function(bBl7e, e2x) {
            var K2x = e2x.key,
                bg2x = q2x.B2x(K2x.split("-")[0] + "-" + bBl7e);
            if (gO5T.test(bBl7e) && K2x.indexOf("post-") < 0) bg2x.type = "GET";
            this.cp3x(bg2x, e2x)
        }
    }();
    b2x.cFs0x = function(K2x, i2x) {
        var cB3x = i2x.length;
        this.brB4F({
            key: K2x,
            offset: 0,
            limit: cB3x + 1
        }, {
            list: i2x,
            total: cB3x
        })
    };
    b2x.Yo9f = function(e2x) {
        this.ES2x("list", e2x)
    };
    b2x.bpL4P = function(e2x) {
        this.ES2x("get", e2x)
    };
    b2x.bzO6I = function(e2x) {
        this.ES2x("pull", e2x)
    };
    b2x.bzG6A = function(e2x) {
        this.ES2x("add", e2x)
    };
    b2x.Yj9a = function(e2x) {
        this.ES2x("del", e2x)
    };
    b2x.Yh9Y = function(e2x) {
        this.ES2x("update", e2x)
    };
    b2x.cDO9F = function(p2x) {
        this.AF1x(p2x)
    };
    I2x.fN4R.A2x({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        bpi4m = {},
        b2x, L2x;
    var uR9I = function(m2x, e2x) {
        m2x.conf = e2x.conf;
        return m2x
    };
    q2x.fr4v({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q2x, e2x) {
                return uR9I({
                    mv: Q2x
                }, e2x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m2x, e2x) {
                if (!!m2x.songs && m2x.songs.length > 0) m2x.song = m2x.songs[0];
                else m2x.song = bpi4m;
                delete m2x.songs;
                return uR9I(m2x, e2x)
            },
            filter: function(e2x) {
                e2x.data.ids = "[" + e2x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: uR9I
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: uR9I
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m2x, e2x) {
                m2x.playlist = m2x.result;
                delete m2x.result;
                return uR9I(m2x, e2x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: uR9I
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: uR9I
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: uR9I
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e2x) {
                var i2x = e2x.data.id.split("-");
                e2x.data.radioId = i2x[0];
                e2x.data.asc = i2x[1] == 2;
                e2x.data.limit = 1e3;
                delete e2x.data.id
            },
            format: function(Q2x, e2x) {
                var cDN9E = {
                    id: e2x.data.radioId,
                    programs: Q2x.programs
                };
                return uR9I({
                    djradio: cDN9E
                }, e2x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: uR9I
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e2x) {
                e2x.data.lv = 0;
                e2x.data.tv = 0
            },
            format: function(m2x, e2x) {
                var xq0x = {
                    lyric: "",
                    nolyric: true
                };
                if (m2x.code == 200 && m2x.lrc && m2x.lrc.lyric) {
                    xq0x.lyric = m2x.lrc.lyric;
                    xq0x.nolyric = false
                } else {
                    xq0x.nolyric = true
                }
                return uR9I({
                    lyric: xq0x
                }, e2x)
            }
        }
    });
    q2x.xp0x = NEJ.C();
    b2x = q2x.xp0x.N2x(q2x.hM5R);
    b2x.cDL9C = function(u2x, cU3x) {
        return this.sE9v(this.Yf9W(u2x, cU3x))
    };
    b2x.Sw7p = function(u2x, cU3x, e2x) {
        e2x = e2x || {};
        var j2x = this.sE9v(this.Yf9W(u2x, cU3x));
        if (j2x && (u2x != 13 && u2x != 19 || e2x.conf && e2x.conf.useCache)) {
            this.z2x("onresourceload", u2x, cU3x, j2x, e2x.conf);
            return
        }
        e2x.data = {
            id: cU3x
        };
        e2x.onload = this.cDK9B.f2x(this, u2x, cU3x);
        e2x.onerror = this.cDJ9A.f2x(this, u2x, cU3x);
        this.cp3x("res-" + this.CY2x(u2x) + "-get", e2x)
    };
    b2x.cDK9B = function(u2x, cU3x, m2x) {
        var j2x = m2x[this.CY2x(u2x)];
        this.pQ8I(this.Yf9W(u2x, cU3x), j2x);
        this.z2x("onresourceload", u2x, cU3x, j2x, m2x.conf)
    };
    b2x.cDJ9A = function(u2x, cU3x, m2x, e2x) {
        if (m2x.code != 404) {
            this.z2x("onresourceerror", u2x, cU3x, m2x.code);
            return
        }
        this.pQ8I(this.Yf9W(u2x, cU3x), bpi4m);
        this.z2x("onresourceload", u2x, cU3x, bpi4m, e2x.conf)
    };
    b2x.cFt0x = function(u2x, e2x) {
        this.cp3x("res-" + this.CY2x(u2x) + "-play", e2x)
    };
    b2x.Yf9W = function(u2x, cU3x) {
        return "res-" + this.CY2x(u2x) + "-" + cU3x
    };
    b2x.CY2x = function(u2x) {
        var bz3x = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz3x[u2x]
    };
    q2x.xp0x.LK4O = function(u2x, cU3x) {
        if (!this.fl4p) this.fl4p = q2x.xp0x.A2x({});
        return this.fl4p.cDL9C(u2x, cU3x)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        boE3x = /^[1-9][0-9]*$/,
        b2x, L2x;
    var LOCAL_LOG_KEY = "local-log";
    q2x.fr4v({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    q2x.hP5U = NEJ.C();
    b2x = q2x.hP5U.N2x(q2x.hM5R);
    b2x.eS4W = function(V2x, bg2x) {
        if (!V2x || !bg2x) return;
        if (k2x.fB4F(bg2x)) {
            try {
                bg2x = JSON.parse(bg2x)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a1x)
                }
            }
        }
        if (!k2x.lG6A(bg2x)) return;
        this.cp3x("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: V2x,
                    json: bg2x
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V2x + ", json=" + JSON.stringify(bg2x))
        }
    };
    b2x.Yc9T = function(nO7H) {
        if (!k2x.eJ4N(nO7H)) return;
        this.cp3x("bi-batch-log", {
            data: {
                logs: JSON.stringify(nO7H)
            }
        })
    };
    b2x.bCW7P = function(bg2x) {
        if (!bg2x || !bg2x.type || !bg2x.rid) return;
        var nP7I = bg2x.type;
        if (boE3x.test(nP7I)) {
            nP7I = this.CY2x(nP7I)
        }
        if (!nP7I) return;
        if (nP7I == "playlist") nP7I = "list";
        this.eS4W("search", {
            type: nP7I,
            id: bg2x.rid || null,
            keyword: bg2x.keyword || null
        })
    };
    b2x.SD7w = function() {
        var cDE9v = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bg2x) {
            if (!bg2x || !bg2x.type || !bg2x.rid) return;
            if (bg2x.play === undefined) bg2x.play = true;
            var nP7I = bg2x.type;
            if (boE3x.test(nP7I)) {
                nP7I = this.CY2x(nP7I)
            }
            if (!nP7I) return;
            if (nP7I == "playlist") nP7I = "list";
            var Q2x = {
                id: bg2x.rid,
                type: nP7I
            };
            if (nP7I == "song" && bg2x.source) {
                Q2x.source = this.bDd7W(bg2x.source);
                if (!!bg2x.sourceid) Q2x.sourceid = bg2x.sourceid
            }
            this.eS4W(!bg2x.play ? "addto" : "play", Q2x);
            if (nP7I == "song" && bg2x.hash && bg2x.hash.match(cDE9v)) {
                this.eS4W(!bg2x.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b2x.boe3x = function(C2x, bA3x, ec4g, Ge2x) {
        var Q2x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cDB9s = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q2x.id = C2x;
        Q2x.time = Math.round(bA3x);
        Q2x.end = k2x.fB4F(Ge2x) ? Ge2x : cDB9s[Ge2x] || "";
        if (ec4g && ec4g.fid) {
            Q2x.source = this.bDd7W(ec4g.fid);
            Q2x.sourceId = ec4g.fdata
        }
        this.eS4W("play", Q2x)
    };
    b2x.bDA7t = function(u2x, cU3x) {
        if (!u2x || !cU3x) return;
        if (boE3x.test(u2x)) u2x = this.CY2x(u2x);
        if (u2x != "playlist" && u2x != "dj") return;
        var bg2x = q2x.B2x("plus-" + u2x + "-count");
        if (!bg2x) return !1;
        this.cp3x(bg2x, {
            data: {
                id: cU3x
            }
        });
        var R2x = this.lF6z("play-hist-" + u2x, []);
        if (k2x.dl4p(R2x, cU3x) < 0) {
            R2x.push(cU3x);
            return !0
        }
        return !1
    };
    b2x.CY2x = function(u2x) {
        var bz3x = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz3x[u2x]
    };
    b2x.bDd7W = function(LO4S) {
        var bz3x = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bz3x[LO4S]
    };
    b2x.bDP7I = function(hf5k) {
        var nO7H = this.Hl3x(LOCAL_LOG_KEY, []);
        nO7H.unshift(hf5k);
        if (nO7H.length > 200) {
            nO7H.length = 200
        }
        this.xr0x(LOCAL_LOG_KEY, nO7H)
    };
    b2x.cDz9q = function() {
        return this.RT7M(LOCAL_LOG_KEY)
    };
    b2x.ep4t = function(Q2x) {
        this.eS4W("play", Q2x)
    };
    var bEf7Y = q2x.hP5U.gk5p();
    l2x.su8m = function() {
        bEf7Y.eS4W.apply(bEf7Y, arguments)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d");
    var FullscreenApi = l2x.FM2x || {};
    if (!q2x.xp0x) return;
    var R2x = q2x.xp0x.A2x({
        onresourceload: cDx9o
    });
    var wf0x = q2x.hP5U.gk5p();

    function cDx9o(u2x, cU3x, j2x, bg2x) {
        var i2x = [];
        switch (parseInt(u2x)) {
            case 2:
                i2x = j2x;
                break;
            case 13:
                i2x = j2x.tracks;
                break;
            case 18:
                i2x.push(j2x);
                break;
            case 19:
                i2x = j2x.songs;
                break;
            case 21:
                if (j2x.mp && j2x.mp.fee && j2x.mp.pl <= 0) {
                    l2x.XX9O(j2x.data.id, j2x.mp.fee);
                    return
                }
                break
        }
        if (l2x.LQ4U(i2x, true, null, u2x == 19 ? {
                source: "album",
                sourceid: cU3x
            } : null) == 0) {
            return
        }
        l2x.ft4x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bg2x.message
        })
    }

    function cDw9n(d2x, oa7T, zW1x, eA4E) {
        eA4E = eA4E || {};
        if (d2x.action == "ok") {
            if (zW1x) {
                location.dispatch2("/payfee?songId=" + zW1x)
            } else {
                location.dispatch2("/payfee?fee=" + oa7T || 1)
            }
            wf0x.eS4W("click", {
                type: "tobuyvip",
                name: "box",
                source: eA4E.source || "song",
                sourceid: eA4E.sourceid || zW1x || 0
            })
        } else if (d2x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zW1x);
            wf0x.eS4W("click", {
                type: "tobuyone",
                name: "box",
                source: eA4E.source || "song",
                sourceid: eA4E.sourceid || zW1x || 0
            })
        }
    }

    function SM7F(bF3x) {
        l2x.ft4x({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF3x,
            btntxt: "知道了"
        })
    }

    function SN7G(bF3x, Q2x) {
        SM7F((Q2x || bb2x).toast || bF3x)
    }
    l2x.iC5H = function(bF3x, C2x, u2x, cDu9l, bj3x) {
        bF3x = bF3x || "由于版权保护，您所在的地区暂时无法使用。";
        if (cDu9l && bj3x && bj3x.privilege && bj3x.privilege.toast) {
            v2x.bl3x("/api/song/toast", {
                query: {
                    id: bj3x.id
                },
                type: "json",
                onload: SN7G.f2x(this, bF3x),
                onerror: SN7G.f2x(this, bF3x)
            })
        } else if (C2x && u2x) {
            R2x.Sw7p(u2x, C2x, {
                conf: {
                    message: bF3x,
                    useCache: u2x != 18
                }
            })
        } else {
            SM7F(bF3x)
        }
    };
    l2x.vZ0x = function(oa7T, zW1x, u2x, eA4E, nv7o) {
        var bR3x, pc7V = "m-popup-info",
            bmS3x = "单首购买",
            bmO3x = "马上去开通",
            cV3x = "唱片公司要求，当前歌曲须付费使用。",
            bFh7a = true;
        try {
            bR3x = top.api.feeMessage || {}
        } catch (e) {
            bR3x = {}
        }
        if (oa7T == 1 || oa7T == 8 || oa7T == 16) {
            if (u2x == "song") {
                pc7V = "m-popup-song-buy";
                cV3x = bR3x["vip2"] || cV3x;
                bmO3x = bR3x["vip2button"] || "包月购买";
                bmS3x = bR3x["vip2link"] || bmS3x;
                if (nv7o && nv7o.flag !== undefined) {
                    var bs3x = nv7o.flag.toString(2).split("");
                    if (parseInt(bs3x.pop(), 10) == 1) {
                        bFh7a = false
                    }
                }
            } else {
                cV3x = bR3x["vip"] || cV3x
            }
        } else if (oa7T == 4) {
            cV3x = bR3x["album"] || cV3x;
            bmO3x = "立即订购"
        } else {
            cV3x = bR3x["unknow"] || cV3x
        }
        l2x.kr6l({
            clazz: "m-layer-w5",
            html: a1x.cc3x(pc7V, {
                songTxt: bmS3x,
                tip: cV3x,
                oktext: bmO3x,
                cctext: "以后再说",
                showSongText: bFh7a
            }),
            onaction: cDw9n.ew4A(null, oa7T, zW1x, eA4E)
        })
    };
    l2x.bFk8c = function(hy5D, gm5r) {
        l2x.hr5w({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u2x) {
                if (u2x == "ok") {
                    l2x.Lr4v({
                        id: hy5D,
                        type: gm5r
                    })
                }
            }
        })
    };
    l2x.XX9O = function(kg6a, oa7T) {
        var bR3x, cV3x = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR3x = top.api.feeMessage || {}
        } catch (e) {
            bR3x = {}
        }
        if (oa7T == 1 || oa7T == 8) {
            cV3x = bR3x["vip"] || cV3x
        } else if (oa7T == 4) {
            cV3x = bR3x["album"] || cV3x
        } else {
            cV3x = bR3x["unknow"] || cV3x
        }
        return l2x.kr6l({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a1x.cc3x("m-popup-info", {
                tip: cV3x,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d2x) {
                if (d2x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kg6a);
                    wf0x.eS4W("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kg6a || 0
                    })
                }
            }
        })
    };
    l2x.LQ4U = function() {
        function compareFee(cDt9k, cDq9h) {
            var bz3x = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz3x[cDt9k] || 0) - (bz3x[cDq9h] || 0)
        }
        return function(i2x, cV3x, so8g, eA4E) {
            so8g = so8g || {};
            var yv0x = [],
                LR4V = {},
                bFL8D = 0,
                bFN8F = 0,
                LS4W = null;
            if (!i2x || !i2x.length) return yv0x;
            k2x.bd2x(i2x, function(bj3x) {
                var fw4A = l2x.pX8P(bj3x);
                if (fw4A == 0) {
                    yv0x.push(bj3x)
                } else if (fw4A == 10) {
                    if (bj3x.privilege) {
                        bj3x.fee = bj3x.privilege.fee
                    }
                    if (compareFee(bj3x.fee, LR4V.fee) > 0) {
                        LR4V = bj3x
                    }
                } else if (fw4A == 11) {
                    ++bFL8D;
                    if (!so8g.play) yv0x.push(bj3x)
                } else if (fw4A == 1e3) {
                    ++bFN8F;
                    if (!so8g.download) yv0x.push(bj3x)
                } else if (fw4A == 100) {
                    LS4W = bj3x
                }
            });
            if (yv0x.length == 0 && cV3x) {
                if (bFL8D == i2x.length) {
                    var tm9d = i2x[0].privilege || {};
                    if (tm9d.payed) {
                        l2x.iC5H("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l2x.vZ0x(tm9d.fee, null, null, eA4E)
                    }
                } else if (bFN8F == i2x.length) {
                    l2x.iC5H("因版权方要求，该歌曲不支持下载")
                } else if (LR4V.id) {
                    l2x.vZ0x(LR4V.fee, LR4V.id, null, eA4E, LR4V.privilege)
                } else {
                    if (LS4W && i2x.length == 1 && LS4W.privilege && LS4W.privilege.st < 0 && LS4W.privilege.toast) {
                        l2x.iC5H(null, null, null, true, LS4W)
                    } else {
                        l2x.iC5H()
                    }
                }
            }
            return yv0x
        }
    }();
    l2x.pX8P = function(bj3x) {
        if (!bj3x) return 0;
        var fw4A = bj3x.privilege;
        if (bj3x.program) return 0;
        if (window.GAbroad) return 100;
        if (fw4A) {
            if (fw4A.st != null && fw4A.st < 0) {
                return 100
            }
            if (fw4A.fee > 0 && fw4A.fee != 8 && fw4A.payed == 0 && fw4A.pl <= 0) return 10;
            if (fw4A.fee == 16) return 11;
            if ((fw4A.fee == 0 || fw4A.payed) && fw4A.pl > 0 && fw4A.dl == 0) return 1e3;
            if (fw4A.pl == 0 && fw4A.dl == 0) return 100;
            return 0
        } else {
            var ey4C = bj3x.status != null ? bj3x.status : bj3x.st != null ? bj3x.st : 0;
            if (bj3x.status >= 0) return 0;
            if (bj3x.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        b2x;
    if (!!w2x.bGg8Y) return;
    var ck3x = ~[];
    ck3x = {
        bGn8f: ++ck3x,
        cDo9f: (![] + "")[ck3x],
        ki6c: ++ck3x,
        LU4Y: (![] + "")[ck3x],
        XO9F: (ck3x[ck3x] + "")[ck3x],
        bGy8q: ++ck3x,
        cFv0x: ({} + "")[ck3x],
        cDl9c: (ck3x[ck3x] + "")[ck3x],
        cDk9b: (![] + "")[ck3x],
        SX7Q: ++ck3x,
        XK9B: (!"" + "")[ck3x],
        cFw0x: ++ck3x,
        Ci1x: ++ck3x,
        bHi8a: ({} + "")[ck3x],
        xh0x: ++ck3x,
        cDh9Y: ++ck3x,
        cFx0x: ++ck3x,
        cFy0x: ++ck3x
    };
    ck3x.LX4b = (ck3x.LX4b = ck3x + "")[ck3x.Ci1x] + (ck3x.LZ4d = ck3x.LX4b[ck3x.ki6c]) + (ck3x.XI9z = (ck3x.DH2x + "")[ck3x.ki6c]) + (!ck3x + "")[ck3x.SX7Q] + (ck3x.DI2x = ck3x.LX4b[ck3x.xh0x]) + (ck3x.DH2x = (!"" + "")[ck3x.ki6c]) + (cDc9T = (!"" + "")[ck3x.bGy8q]) + ck3x.LX4b[ck3x.Ci1x] + ck3x.DI2x + ck3x.LZ4d + ck3x.DH2x;
    ck3x.XI9z = ck3x.DH2x + (!"" + "")[ck3x.SX7Q] + ck3x.DI2x + cDc9T + ck3x.DH2x + ck3x.XI9z;
    ck3x.DH2x = ck3x.bGn8f[ck3x.LX4b][ck3x.LX4b];
    w2x.bGg8Y = ck3x
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.XG9x) return;
    var jd5i = a1x.ty9p(".#<uispace>{position:absolute;background:#fff;}");
    O2x.XG9x = NEJ.C();
    b2x = O2x.XG9x.N2x(O2x.PJ6D);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.bX3x([
            [document, "click", this.sT9K.f2x(this)]
        ]);
        this.cDa9R = !!e2x.nostop;
        this.bJg8Y = {
            top: e2x.top,
            left: e2x.left
        }
    };
    b2x.bC3x = function() {
        delete this.zk0x;
        delete this.bkv2x;
        delete this.qP8H;
        delete this.bJB9s;
        delete this.XE9v;
        delete this.bJg8Y;
        this.bG3x()
    };
    b2x.ch3x = function() {
        this.md7W = jd5i
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.Cr1x = this.o2x;
        h2x.s2x(this.o2x, "click", this.cCZ9Q.f2x(this))
    };
    b2x.sT9K = function(d2x) {
        if (d2x.button != 2) this.bt3x()
    };
    b2x.cCZ9Q = function(d2x) {
        if (this.cDa9R) return;
        h2x.uj9a(d2x);
        var F2x = h2x.X2x(d2x);
        if (F2x.tagName == "A") h2x.cn3x(d2x)
    };
    b2x.cCY9P = function() {
        var dg3x = /\s+/i;
        return function(oo7h) {
            oo7h = (oo7h || "").trim().toLowerCase().split(dg3x);
            oo7h[0] = oo7h[0] || "bottom";
            oo7h[1] = oo7h[1] || "left";
            this.qP8H = oo7h
        }
    }();
    b2x.cCX9O = function(oo7h) {
        var m2x = {},
            nn7g = this.bkv2x,
            cFz0x = a1x.pn8f(),
            cD3x = this.o2x.offsetWidth,
            ce3x = this.o2x.offsetHeight;
        switch (oo7h[0]) {
            case "top":
                m2x.top = nn7g.top - ce3x;
                m2x.left = oo7h[1] == "right" ? nn7g.left + nn7g.width - cD3x : nn7g.left;
                break;
            case "left":
                m2x.left = nn7g.left - cD3x;
                m2x.top = oo7h[1] == "bottom" ? nn7g.top + nn7g.height - ce3x : nn7g.top;
                break;
            case "right":
                m2x.left = nn7g.left + nn7g.width;
                m2x.top = oo7h[1] == "bottom" ? nn7g.top + nn7g.height - ce3x : nn7g.top;
                break;
            default:
                m2x.top = nn7g.top + nn7g.height;
                m2x.left = oo7h[1] == "right" ? nn7g.left + nn7g.width - cD3x : nn7g.left;
                break
        }
        return m2x
    };
    b2x.KL4P = function() {
        if (!this.bJB9s) {
            this.gK5P(this.bJg8Y);
            return
        }
        if (!!this.XE9v) {
            this.gK5P(this.zk0x);
            return
        }
        if (!!this.bkv2x) this.gK5P(this.cCX9O(this.qP8H))
    };
    b2x.cCV9M = function(F2x, dq4u, d2x) {
        dq4u = dq4u || bb2x;
        var bKs9j = a1x.pn8f(),
            db3x = h2x.jD6x(d2x) + (dq4u.left || 0),
            hw5B = h2x.lX6R(d2x) + (dq4u.top || 0),
            cD3x = F2x.offsetWidth + (dq4u.right || 0),
            ce3x = F2x.offsetHeight + (dq4u.bottom || 0),
            Md4h = bKs9j.scrollWidth,
            bjb2x = bKs9j.scrollHeight,
            bja2x = db3x + cD3x,
            biU2x = hw5B + ce3x;
        switch (this.qP8H[0]) {
            case "top":
                hw5B = biU2x > bjb2x ? hw5B - ce3x : hw5B;
                if (this.qP8H[1] == "right") {
                    db3x = db3x - cD3x < 0 ? 0 : db3x - cD3x
                } else {
                    db3x = bja2x > Md4h ? Md4h - cD3x : db3x
                }
                break;
            case "left":
                db3x = bja2x > Md4h ? Md4h - cD3x : db3x;
                if (this.qP8H[1] == "top") {
                    hw5B = biU2x > bjb2x ? hw5B - ce3x : hw5B
                } else {
                    hw5B = hw5B - ce3x < 0 ? hw5B : hw5B - ce3x
                }
                break;
            case "right":
                db3x = db3x - cD3x < 0 ? 0 : db3x - cD3x;
                if (this.qP8H[1] == "top") {
                    hw5B = biU2x > bjb2x ? hw5B - ce3x : hw5B
                } else {
                    hw5B = hw5B - ce3x < 0 ? hw5B : hw5B - ce3x
                }
                break;
            default:
                hw5B = hw5B - ce3x < 0 ? hw5B : hw5B - ce3x;
                if (this.qP8H[1] == "left") {
                    db3x = bja2x > Md4h ? Md4h - cD3x : db3x
                } else {
                    db3x = db3x - cD3x < 0 ? 0 : db3x - cD3x
                }
                break
        }
        return {
            top: hw5B,
            left: db3x
        }
    };
    b2x.biO2x = function() {
        var cCT9K = function(F2x, dq4u) {
            F2x = a1x.B2x(F2x);
            if (!F2x) return;
            dq4u = dq4u || bb2x;
            var bi2x = a1x.hO5T(F2x);
            return {
                top: bi2x.y - (dq4u.top || 0),
                left: bi2x.x - (dq4u.left || 0),
                width: F2x.offsetWidth + (dq4u.right || 0),
                height: F2x.offsetHeight + (dq4u.bottom || 0)
            }
        };
        return function(e2x) {
            e2x = e2x || bb2x;
            this.XE9v = e2x.event;
            this.cCY9P(e2x.align);
            if (!!this.XE9v) this.zk0x = this.cCV9M(e2x.target, e2x.delta, this.XE9v);
            this.bkv2x = cCT9K(e2x.target, e2x.delta);
            this.bJB9s = !!e2x.fitable;
            this.J2x();
            return this
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        b2x, L2x;
    if (!!O2x.Bb1x) return;
    O2x.Bb1x = NEJ.C();
    b2x = O2x.Bb1x.N2x(O2x.baa0x);
    L2x = O2x.Bb1x.cs3x;
    O2x.Bb1x.cFA0x = function() {
        var cCR9I = function(d2x, C2x, fI4M, kv6p, TD7w) {
            var cE3x, K2x = C2x + "-i",
                R2x = fI4M.zV1x,
                bLu9l = !!kv6p.noclear,
                bLR9I = !!kv6p.toggled;
            if (k2x.gE5J(kv6p.onbeforeclick)) {
                var Xv9m = kv6p.noclear,
                    cCQ9H = kv6p.toggled;
                try {
                    kv6p.onbeforeclick(kv6p)
                } catch (e) {}
                bLu9l = !!kv6p.noclear;
                bLR9I = !!kv6p.toggled;
                kv6p.toggled = cCQ9H;
                kv6p.noclear = Xv9m
            }
            var FN2x = R2x[K2x];
            if (bLR9I && !!FN2x) {
                FN2x.bt3x();
                return
            }
            h2x.bh2x(d2x);
            if (!bLu9l) {
                h2x.z2x(document, "click");
                cE3x = fI4M.A2x(kv6p)
            } else {
                cE3x = fI4M.bJd8V(kv6p, !0)
            }
            R2x[K2x] = cE3x;
            cE3x.xx0x("onbeforerecycle", function() {
                delete R2x[K2x]
            });
            cE3x.biO2x(TD7w)
        };
        return function(g2x, e2x) {
            g2x = a1x.B2x(g2x);
            if (!g2x) return this;
            if (!this.zV1x) this.zV1x = {};
            var C2x = a1x.lQ6K(g2x);
            if (!!this.zV1x[C2x]) return this;
            e2x = NEJ.X({}, e2x);
            var TD7w = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e2x);
            TD7w.target = C2x;
            e2x.destroyable = !0;
            if (!e2x.fixed) {
                TD7w.fitable = !0;
                e2x.parent = document.body
            }
            this.zV1x[C2x] = [C2x, e2x.event || "click", cCR9I.ew4A(null, C2x, this, e2x, TD7w)];
            h2x.s2x.apply(h2x, this.zV1x[C2x]);
            return this
        }
    }();
    O2x.Bb1x.cFB0x = function(g2x) {
        if (!this.zV1x) return this;
        var C2x = a1x.lQ6K(g2x),
            d2x = this.zV1x[C2x];
        if (!d2x) return this;
        delete this.zV1x[C2x];
        h2x.ms7l.apply(h2x, d2x);
        var cE3x = this.zV1x[C2x + "-i"];
        if (!!cE3x) cE3x.bt3x();
        return this
    };
    b2x.bie2x = function() {
        return O2x.XG9x.A2x(this.cg3x)
    };
    b2x.PR6L = function() {
        L2x.PR6L.apply(this, arguments);
        this.cg3x.top = null;
        this.cg3x.left = null;
        this.cg3x.nostop = !1
    };
    b2x.biO2x = function(e2x) {
        if (!!this.oK7D) this.oK7D.biO2x(e2x);
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bc2x = c2x("nej.ui"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.bia2x = NEJ.C();
    b2x = n2x.bia2x.N2x(bc2x.Bb1x);
    b2x.bm3x = function(e2x) {
        e2x.nohack = true;
        this.bn3x(e2x)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    var FullscreenApi = l2x.FM2x || {};
    n2x.Z2x = NEJ.C();
    b2x = n2x.Z2x.N2x(n2x.bia2x);
    L2x = n2x.Z2x.cs3x;
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.ev4z = e2x.type || 1
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.o2x = a1x.os7l(this.cCN9E());
        var i2x = a1x.dm4q(this.o2x);
        this.ri8a = i2x[0];
        this.cu3x = i2x[1]
    };
    b2x.cCN9E = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b2x.KL4P = function() {
        var D2x = {},
            cj3x = this.o2x.style,
            jI6C = a1x.pn8f(),
            ov7o = {
                left: jI6C.scrollLeft,
                top: jI6C.scrollTop
            },
            dq4u = {
                left: jI6C.clientWidth - this.o2x.offsetWidth,
                top: jI6C.clientHeight - this.o2x.offsetHeight
            };
        D2x.top = Math.max(0, ov7o.top + dq4u.top / 2);
        D2x.left = Math.max(0, ov7o.left + dq4u.left / 2);
        this.oK7D.gK5P(D2x)
    };
    b2x.J2x = function(e2x) {
        L2x.J2x.call(this);
        this.KL4P();
        this.ev4z == 1 ? a1x.fk4o(this.ri8a, "u-icn-32", "u-icn-31") : a1x.fk4o(this.ri8a, "u-icn-31", "u-icn-32");
        this.cu3x.innerHTML = e2x.tip || ""
    };
    window.g_showTipCard = n2x.Z2x.J2x = function() {
        var eh4l;
        return function(e2x) {
            clearTimeout(eh4l);
            if (e2x.parent === undefined) e2x.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e2x.autoclose === undefined) e2x.autoclose = true;
            e2x.clazz = "m-sysmsg";
            !!this.fl4p && this.fl4p.T2x();
            this.fl4p = this.A2x(e2x);
            this.fl4p.J2x(e2x);
            if (e2x.autoclose) eh4l = setTimeout(this.bt3x.f2x(this), 2e3)
        }.f2x(n2x.Z2x)
    }();
    n2x.Z2x.bt3x = function() {
        !!this.fl4p && this.fl4p.bt3x()
    }
})();
(function() {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v2x.bl3x = v2x.bl3x.eH4L(function(d2x) {
            e2x = d2x.args[1];
            e2x.query = e2x.query || {};
            if (k2x.fB4F(e2x.query)) e2x.query = k2x.hu5z(e2x.query);
            e2x.query.ref = "mail"
        })
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        fu4y = NEJ.R,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        K2x = "playlist-tracks_",
        b2x;
    q2x.fr4v({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q2x, e2x) {
                this.cCM9D(Q2x.playlist);
                return {
                    total: 0,
                    list: fu4y
                }
            },
            onerror: function() {
                this.z2x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q2x, e2x) {
                var na7T = Q2x.playlist;
                na7T.creator = GUser;
                na7T.isHost = !0;
                na7T.typeFlag = "playlist";
                return na7T
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.hY5d, "listchange", d2x)
            },
            onmessage: function() {
                var lV6P = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY3x) {
                    n2x.Z2x.J2x({
                        tip: lV6P[bY3x] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e2x) {
                e2x.id = e2x.data.pid
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.hY5d, "listchange", d2x)
            },
            onmessage: function() {
                var lV6P = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY3x) {
                    n2x.Z2x.J2x({
                        tip: lV6P[bY3x] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e2x) {
                var eA4E = e2x.ext || {};
                e2x.ext = NEJ.X(eA4E, e2x.data);
                e2x.data = {
                    id: e2x.ext.id
                }
            },
            format: function(Q2x, e2x) {
                n2x.Z2x.J2x({
                    tip: "收藏成功" + (Q2x.point > 0 ? ' 获得<em class="s-fc6">' + Q2x.point + "积分</em>" : "")
                });
                var p2x = e2x.ext;
                p2x.subscribedCount++;
                return p2x
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.cCL9C, "listchange", d2x);
                h2x.z2x(q2x.cCL9C, "itemchange", {
                    attr: "subscribedCount",
                    data: d2x.data
                })
            },
            onmessage: function() {
                var lV6P = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(bY3x) {
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: lV6P[bY3x] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e2x) {
                e2x.id = e2x.data.id = e2x.data.pid
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.hY5d, "listchange", d2x)
            },
            onmessage: function() {
                var lV6P = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY3x) {
                    n2x.Z2x.J2x({
                        tip: lV6P[bY3x],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e2x) {
                var j2x = e2x.data,
                    Xs8k = {};
                Xs8k["playlist-update-name"] = {
                    id: j2x.id,
                    name: j2x.name
                };
                Xs8k["playlist-update-tag"] = {
                    id: j2x.id,
                    tags: j2x.tags.join(";")
                };
                Xs8k["playlist-update-desc"] = {
                    id: j2x.id,
                    desc: j2x.description
                };
                e2x.data = Xs8k;
                e2x.ext = j2x
            },
            format: function(W2x, ro8g, TI7B, e2x) {
                if (W2x.code == 200 && ro8g.code == 200 && TI7B.code == 200) {
                    e2x.ext.allSuccess = true;
                    n2x.Z2x.J2x({
                        tip: "保存成功"
                    })
                } else if (W2x.code == 407 || ro8g.code == 407 || TI7B.code == 407) {
                    e2x.ext.allSuccess = false;
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e2x.ext.allSuccess = false;
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eL4P(e2x.ext.id)
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.hY5d, "listchange", d2x)
            },
            onmessage: function(bY3x) {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q2x, e2x) {
                var p2x = this.eL4P(e2x.ext.id);
                if (Q2x.code == 200) p2x.name = e2x.ext.name;
                return Q2x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q2x, e2x) {
                var p2x = this.eL4P(e2x.ext.id);
                if (Q2x.code == 200) p2x.tags = e2x.ext.tags;
                return Q2x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q2x, e2x) {
                var p2x = this.eL4P(e2x.ext.id);
                if (Q2x.code == 200) p2x.description = e2x.ext.description;
                return Q2x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e2x) {
                e2x.url = e2x.data.url;
                delete e2x.data.url
            },
            format: function(Q2x, e2x) {
                n2x.Z2x.J2x({
                    tip: "保存成功"
                });
                var p2x = this.eL4P(e2x.data.id);
                p2x.coverImgUrl = e2x.url;
                e2x.ext = p2x;
                return p2x
            },
            onmessage: function(bY3x) {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.hY5d, "itemchange", {
                    attr: "coverImgUrl",
                    data: e2x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q2x, e2x) {
                var na7T = this.eL4P(e2x.data.id);
                if (!na7T) return;
                na7T.playCount++;
                h2x.z2x(q2x.hY5d, "itemchange", {
                    attr: "playcount",
                    data: na7T
                })
            }
        }
    });
    q2x.hY5d = NEJ.C();
    b2x = q2x.hY5d.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bPm0x = function() {
        var do4s = GUser.userId;
        this.lw6q({
            limit: 1001,
            key: "playlist_my-" + do4s,
            data: {
                offset: 0,
                limit: 1001,
                uid: do4s
            }
        })
    };
    b2x.cCM9D = function(i2x) {
        var do4s = GUser.userId,
            iQ5V = [],
            bQa0x = [];
        k2x.bd2x(i2x, function(p2x) {
            p2x.typeFlag = "playlist";
            if (p2x.creator && p2x.creator.userId == do4s) {
                if (p2x.specialType == 5) p2x.name = "我喜欢的音乐";
                p2x.isHost = !0;
                iQ5V.push(p2x)
            } else {
                bQa0x.push(p2x)
            }
        });
        this.uK9B("playlist_new-" + do4s, iQ5V);
        this.uK9B("playlist_fav-" + do4s, bQa0x)
    };
    b2x.cCK9B = function(j2x) {
        this.cp3x("playlist-update-cover", {
            data: j2x
        })
    };
    b2x.cFC0x = function() {
        var TL7E = this.cCI9z.B2x("host-plist");
        if (TL7E.length == 0) {
            return
        }
        if (TL7E.length == 1 && TL7E[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = TL7E.length; i < len; i++) {
            var p2x = TL7E[i];
            if (p2x.trackCount > 0) return p2x.id
        }
        return this.cCI9z.B2x("host-plist")[0].id
    };
    b2x.cCH9y = function(C2x) {
        if (GUser && GUser.userId > 0) {
            this.cp3x("playlist-upcount", {
                data: {
                    id: C2x
                }
            })
        }
    };
    b2x.Fe2x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b2x.cFD0x = function() {
        return GUser.userId
    };
    b2x.Fh2x = function(p2x) {
        if (p2x.userId == GUser.userId && p2x.specialType == 5) p2x.name = "我喜欢的音乐";
        h2x.z2x(this.constructor, "itemchange", {
            data: this.AF1x(p2x)
        });
        return p2x
    };
    I2x.fN4R.A2x({
        element: q2x.hY5d,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c2x = NEJ.P,
        fu4y = NEJ.R,
        br3x = NEJ.F,
        bb2x = NEJ.O,
        I2x = c2x("nej.ut"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    q2x.fr4v({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q2x) {
                return Q2x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e2x) {
                e2x.data.limit = 1e3;
                delete e2x.data.id
            },
            format: function(Q2x, e2x) {
                var bRe1x = [],
                    qr8j = Q2x.programs;
                if (qr8j) {
                    for (var i = 0, l = qr8j.length; i < l; i++) {
                        if (qr8j[i].programFeeType < 10 || qr8j[i].buyed) {
                            bRe1x.push(qr8j[i])
                        }
                    }
                }
                return bRe1x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q2x, e2x) {
                return Q2x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e2x) {
                e2x.ext = e2x.data;
                e2x.data = {
                    id: e2x.ext.id
                };
                e2x.id = e2x.data.id
            },
            format: function(Q2x, e2x) {
                n2x.Z2x.J2x({
                    tip: "收藏成功"
                });
                var p2x = e2x.ext;
                p2x.subscribedCount++;
                p2x.subscribed = !0;
                return p2x
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.rw8o, "listchange", d2x)
            },
            onmessage: function() {
                var lV6P = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(bY3x) {
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: lV6P[bY3x] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.rw8o, "listchange", d2x)
            },
            onmessage: function() {
                var lV6P = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(bY3x) {
                    l2x.bhs2x({
                        txt: lV6P[bY3x] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e2x) {
                var p2x = this.eL4P(e2x.data.id) || bb2x;
                e2x.ext = (p2x.listenerCount || 0) + 1
            },
            format: function(Q2x, e2x) {
                var p2x = this.eL4P(e2x.data.id);
                if (!!p2x) {
                    p2x.listenerCount = Math.max(e2x.ext, p2x.listenerCount || 0)
                }
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.rw8o, "itemchange", {
                    attr: "playCount",
                    data: this.eL4P(e2x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e2x) {
                e2x.data = {
                    threadId: "A_DJ_1_" + e2x.id
                }
            },
            format: function(Q2x, e2x) {
                var p2x = e2x.ext.data || this.eL4P(e2x.id);
                p2x.liked = true;
                p2x.likedCount++;
                e2x.ext.data = p2x;
                try {
                    top.player.setLike(p2x)
                } catch (e) {}
                return p2x
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.rw8o, "itemchange", {
                    attr: "likedCount",
                    data: e2x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e2x) {
                e2x.data = {
                    threadId: "A_DJ_1_" + e2x.id
                }
            },
            format: function(Q2x, e2x) {
                var p2x = e2x.ext.data || this.eL4P(e2x.id);
                p2x.liked = false;
                p2x.likedCount--;
                e2x.ext.data = p2x;
                try {
                    top.player.setLike(p2x)
                } catch (e) {}
                return p2x
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.rw8o, "itemchange", {
                    attr: "likedCount",
                    data: e2x.ext.data
                })
            }
        }
    });
    q2x.rw8o = NEJ.C();
    b2x = q2x.rw8o.N2x(q2x.hM5R);
    b2x.cFE0x = function() {
        var do4s = GUser.userId;
        this.lw6q({
            limit: 1001,
            key: "program_fav-" + do4s,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do4s
            }
        })
    };
    b2x.cFF0x = function(cY3x) {
        var qu8m = cY3x[this.wW0x];
        l2x.cCB9s(4, function(R2x) {
            R2x.uK9B("track_program-" + qu8m, cY3x.songs)
        });
        delete cY3x.songs;
        var bO3x = cY3x.mainSong;
        l2x.cCB9s(4, function(R2x) {
            R2x.uK9B("track_program_main-" + qu8m, !bO3x ? [] : [bO3x])
        });
        cY3x.mainSong = (bO3x || bb2x).id
    };
    b2x.cFH0x = function(C2x) {
        var cY3x = this.eL4P(C2x),
            do4s = localCache.YP9G("host.profile.userId");
        return !!cY3x && cY3x.dj.userId == do4s
    };
    b2x.cFI0x = function(C2x) {
        return !1
    };
    b2x.Fh2x = function(p2x) {
        h2x.z2x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.AF1x(p2x)
        });
        return p2x
    };
    b2x.cCH9y = function(C2x) {
        this.cp3x("program-update-count", {
            data: {
                id: C2x
            }
        })
    };
    l2x.bSj2x = function(e2x) {
        var R2x = q2x.rw8o.A2x({
            onitemadd: function() {
                (e2x.onsuccess || br3x)()
            },
            onerror: function() {
                (e2x.onerror || br3x)()
            }
        });
        if (e2x.data.liked) {
            R2x.vd9U(e2x.data)
        } else {
            R2x.oZ7S(e2x.data)
        }
    };
    b2x.oZ7S = function(cY3x) {
        if (!l2x.gT5Y()) return;
        var ct3x = {
            ext: {}
        };
        if (k2x.lG6A(cY3x)) {
            ct3x.id = cY3x.id;
            ct3x.ext.data = cY3x
        } else {
            ct3x.id = cY3x
        }
        this.cp3x("program-like", ct3x)
    };
    b2x.vd9U = function(cY3x) {
        if (!l2x.gT5Y()) return;
        var ct3x = {
            ext: {}
        };
        if (k2x.lG6A(cY3x)) {
            ct3x.id = cY3x.id;
            ct3x.ext.data = cY3x
        } else {
            ct3x.id = cY3x
        }
        this.cp3x("program-unlike", ct3x)
    };
    I2x.fN4R.A2x({
        element: q2x.rw8o,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        fu4y = NEJ.R,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        l2x = c2x("nm.x"),
        K2x = "playlist-tracks_",
        l2x = c2x("nm.x"),
        b2x;
    q2x.fr4v({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e2x) {
                e2x.data.c = JSON.stringify([{
                    id: e2x.data.id
                }])
            },
            format: function(Q2x, e2x) {
                var bj3x = l2x.FP2x(Q2x.songs[0]);
                bj3x.privilege = Q2x.privileges[0];
                return bj3x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e2x) {
                e2x.data.n = 1e3
            },
            format: function(Q2x, e2x) {
                var hB5G = [];
                this.tv9m.Fh2x(Q2x.playlist);
                k2x.bd2x(Q2x.playlist.tracks, function(bO3x, r2x) {
                    var bSN2x = l2x.FP2x(bO3x);
                    bSN2x.privilege = Q2x.privileges[r2x];
                    hB5G.push(bSN2x)
                }, this);
                return hB5G
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q2x, e2x) {
                var hB5G = [];
                k2x.bd2x(Q2x.songs, function(bj3x) {
                    hB5G.push(l2x.FP2x(bj3x))
                });
                return hB5G
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e2x) {
                var bz3x = {},
                    j2x = e2x.data,
                    cCp9g = this.hF5K(e2x.key) || [];
                FU2x = [];
                k2x.bd2x(cCp9g, function(bO3x) {
                    var C2x = k2x.lG6A(bO3x) ? bO3x.id : bO3x;
                    bz3x[C2x] = true
                });
                e2x.ext = [];
                k2x.bd2x(j2x.tracks, function(bO3x) {
                    var C2x = k2x.lG6A(bO3x) ? bO3x.id : bO3x;
                    if (!bz3x[C2x]) {
                        FU2x.push(C2x);
                        bz3x[C2x] = true;
                        e2x.ext.push(bO3x)
                    }
                });
                j2x.trackIds = JSON.stringify(FU2x);
                j2x.op = "add";
                if (!FU2x.length) {
                    e2x.value = {
                        code: 502
                    }
                }
            },
            format: function(Q2x, e2x) {
                n2x.Z2x.J2x({
                    tip: "已添加至歌单"
                });
                var na7T = this.tv9m.eL4P(e2x.data.pid);
                if (!!Q2x.coverImgUrl) na7T.coverImgUrl = Q2x.coverImgUrl;
                k2x.mY7R(e2x.ext, function(bO3x) {
                    this.zx1x(e2x, k2x.lG6A(bO3x) ? bO3x : null);
                    if (!!na7T) na7T.trackCount++
                }, this);
                h2x.z2x(q2x.hY5d, "itemchange", {
                    data: na7T || {},
                    cmd: "add"
                });
                this.z2x("onaddsuccess");
                return null
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.xI0x, "listchange", {
                    key: e2x.key,
                    action: "refresh"
                });
                var qu8m = e2x.data.pid,
                    cB3x = this.lo6i(e2x.key)
            },
            onmessage: function() {
                var lV6P = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(bY3x) {
                    setTimeout(function() {
                        n2x.Z2x.J2x({
                            tip: lV6P[bY3x] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e2x) {
                var j2x = e2x.data;
                e2x.ext = j2x.trackIds;
                j2x.trackIds = JSON.stringify(j2x.trackIds);
                j2x.op = "del"
            },
            format: function(Q2x, e2x) {
                var na7T = this.tv9m.eL4P(e2x.data.pid);
                k2x.bd2x(e2x.ext, function(C2x) {
                    this.bqm4q({
                        id: C2x,
                        key: "track_playlist-" + e2x.data.pid
                    }, !0);
                    if (!!na7T) na7T.trackCount = Math.max(0, na7T.trackCount - 1)
                }, this);
                h2x.z2x(q2x.hY5d, "itemchange", {
                    data: na7T || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d2x, e2x) {
                h2x.z2x(q2x.xI0x, "listchange", {
                    key: e2x.key,
                    action: "refresh"
                })
            },
            onmessage: function(bY3x) {
                l2x.bhs2x({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q2x, e2x) {
                return this.bSY2x.Fh2x(Q2x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q2x, e2x) {
                var i2x = [];
                if (e2x.data.type == -1) {
                    if (Q2x.weekData && Q2x.weekData.length) {
                        e2x.data.type = 1
                    } else {
                        e2x.data.type = 0
                    }
                }
                if (e2x.data.type == 1) {
                    i2x = this.bTa2x(Q2x.weekData)
                } else {
                    i2x = this.bTa2x(Q2x.allData)
                }
                return i2x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q2x, e2x) {
                var nO7H = [],
                    i2x = Q2x.recommend || [];
                k2x.bd2x(i2x, function(bj3x, r2x) {
                    nO7H.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj3x.alg,
                            scene: "user-song",
                            position: r2x,
                            id: bj3x.id
                        }
                    })
                });
                this.kO6I.Yc9T(nO7H);
                e2x.limit = i2x.length;
                return i2x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e2x) {
                e2x.data.lv = 0;
                e2x.data.tv = 0
            },
            format: function(m2x, e2x) {
                return m2x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q2x.xI0x = NEJ.C();
    b2x = q2x.xI0x.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        this.cF3x();
        this.tv9m = q2x.hY5d.A2x();
        this.bSY2x = q2x.rw8o.A2x();
        this.kO6I = q2x.hP5U.A2x()
    };
    b2x.bTa2x = function(i2x) {
        var m2x = [],
            fq4u = 0;
        k2x.bd2x(i2x, function(p2x, r2x) {
            var bj3x = l2x.FP2x(p2x.song);
            if (r2x == 0) {
                fq4u = p2x.score
            }
            bj3x.max = fq4u;
            bj3x.playCount = p2x.playCount;
            bj3x.score = p2x.score;
            m2x.push(bj3x)
        });
        return m2x
    };
    I2x.fN4R.A2x({
        element: q2x.xI0x,
        event: ["listchange"]
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        cx3x = c2x("nm.pc");
    var bhn2x = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qI8A = function(bR3x) {
        var Dx2x = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR3x), Dx2x)
    };
    var cCo9f = function(lZ7S) {
        var kV6P = "http://" + location.host + "/",
            TP7I = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dQ4U = TP7I.exec(lZ7S);
        if (!dQ4U) return cCn9e(lZ7S);
        var gm5r = dQ4U[2],
            hy5D = dQ4U[3],
            do4s = dQ4U[4] || "",
            jr6l = "";
        switch (gm5r) {
            case "album":
                jr6l = "#/m/album/comment/?rid=" + bhn2x[gm5r] + hy5D + "&id=" + hy5D;
                break;
            case "playlist":
                jr6l = "#/m/playlist/comment/?rid=" + bhn2x[gm5r] + hy5D + "&id=" + hy5D;
                break;
            case "song":
            case "dj":
            case "program":
                jr6l = "#/m/song?rid=" + bhn2x[gm5r] + hy5D;
                break;
            case "event":
                jr6l = "#/m/friend/event/?id=" + hy5D + "&uid=" + do4s;
                break;
            case "user/home":
                jr6l = "#/m/personal/?uid=" + hy5D;
                break;
            case "mv":
                jr6l = "#/m2/mv/?id=" + hy5D;
                break;
            case "activity":
                jr6l = "#/m/friend/activity?id=" + hy5D;
                break;
            case "video":
                jr6l = "#/m2/mv/?id=" + hy5D + "&type=1";
                break;
            default:
                jr6l = "#/m/" + gm5r + "/?id=" + hy5D
        }
        return kV6P + jr6l
    };
    var cCn9e = function(lZ7S) {
        var cCk9b = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ4U = cCk9b.exec(lZ7S);
        if (dQ4U) return "http://v.youku.com/v_show/id_" + dQ4U[1];
        return lZ7S
    };
    cx3x.ep4t = function(gm5r, hy5D) {
        qI8A({
            name: "play",
            args: {
                type: gm5r,
                id: hy5D
            }
        })
    };
    cx3x.fG4K = function() {
        qI8A({
            name: "pause"
        })
    };
    cx3x.AL1x = function(lZ7S) {
        qI8A({
            name: "open",
            args: {
                link: cCo9f(lZ7S)
            }
        })
    };
    cx3x.kI6C = function(gm5r, hy5D, cK3x) {
        qI8A({
            name: "share",
            args: {
                type: gm5r,
                id: hy5D,
                shareContent: cK3x
            }
        })
    };
    cx3x.bUN9E = function(gm5r, hy5D) {
        qI8A({
            name: "comment",
            args: {
                type: gm5r,
                id: hy5D
            }
        })
    };
    cx3x.cCj9a = function() {
        qI8A({
            name: "init"
        })
    };
    cx3x.AR1x = function(ce3x) {
        qI8A({
            name: "setHeight",
            args: {
                height: ce3x
            }
        })
    };
    cx3x.im5r = function(bF3x, U2x) {
        qI8A({
            name: "toast",
            args: {
                message: bF3x || "",
                state: U2x
            }
        })
    };
    cx3x.GD3x = function(lZ7S) {
        qI8A({
            name: "login",
            args: {
                link: lZ7S
            }
        })
    };
    cx3x.bVz9q = function(AS1x) {
        qI8A({
            name: "topbar",
            args: {
                show: !!AS1x
            }
        })
    };
    cx3x.cCi9Z = function(bx3x) {
        qI8A({
            name: "refreshtopbar",
            args: {
                info: bx3x
            }
        })
    };
    cx3x.cCf9W = function(bs3x, r2x) {
        qI8A({
            name: "big",
            args: {
                arr: bs3x,
                index: r2x
            }
        })
    };
    cx3x.Lr4v = function(cy3x) {
        qI8A({
            name: "download",
            args: {
                img: cy3x
            }
        })
    };
    cx3x.byi6c = function(cCd9U) {
        qI8A({
            name: "scrollable",
            args: {
                scrollable: cCd9U
            }
        })
    }
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = {
                            v: b[227]
                        },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var byu6o;
    var uU9L = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cCc9T = 0;
    var byB6v = 0;
    var byM6G = 1;
    var byO6I = 0;
    var bgD1x = "";
    var byY6S = "";
    var bzf6Z = "";
    var Xl8d = "";
    var Xj8b = "";
    var bgc1x = "";
    var bzn6h = 0;
    var bzo6i = "";
    var Mr4v = "";
    var Hb3x = 0;
    var bfT1x = ntes_get_domain();
    var bfJ1x = null;
    var cFL0x = "//analytics.163.com";
    var cBV9M = function() {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfT1x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfT1x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfT1x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cBU9L = 0;
    var Ub8T = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Ub8T))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << Ub8T) - 1;
        for (var b = 0; b < d.length * Ub8T; b += Ub8T) {
            c[b >> 5] |= (d.charCodeAt(b / Ub8T) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cBU9L ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        Xl8d = "-";
        bgc1x = "-";
        Xj8b = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            Xl8d = b.width + "x" + b.height;
            bgc1x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Xl8d = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Xj8b = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Xj8b = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzn6h = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cFM0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cBV9M;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || byu6o;
        bgD1x = escape(a || document.location);
        byY6S = escape(m || document.title);
        bzf6Z = l === true ? "" : escape(l || document.referrer);
        bzo6i = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfJ1x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfJ1x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bgD1x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfJ1x) {
                uU9L = fetch_visitor_hash();
                byB6v = 1;
                ntes_set_cookie_long("_ntes_nnid", uU9L + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uU9L)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uU9L = h.substr(0, o);
            Hb3x = h.substr(o + 1, p - o - 1);
            if (Hb3x == 0) {
                Hb3x = (new Date).getTime();
                f = true
            }
            if (!uU9L) {
                uU9L = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uU9L + "," + Hb3x);
                ntes_set_cookie_long("_ntes_nuid", uU9L)
            }
            if (Hb3x != 0 && b - Hb3x > 365 * 86400 * 1e3) {
                Hb3x = 0;
                ntes_set_cookie_long("_ntes_nnid", uU9L + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uU9L)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Mr4v = c("P_INFO", "P_OINFO");
        Mr4v = Mr4v ? Mr4v.substr(0, Mr4v.indexOf("|")) : "";
        byO6I = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uU9L, "&_nvtm=", cCc9T, "&_nvsf=", byM6G, "&_nvfi=", byB6v, "&_nlag=", Xj8b, "&_nlmf=", bzn6h, "&_nres=", Xl8d, "&_nscd=", bgc1x, "&_nstm=", byO6I, "&_nurl=", bgD1x, "&_ntit=", byY6S, "&_nref=", bzf6Z, "&_nfla=", bzo6i, "&_nssn=", Mr4v, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        byM6G = 0;
        neteaseTracker.callback = null
    }
    byu6o = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function() {
                this.j2x = new r.init;
                this.bAi6c = 0
            },
            Xf8X: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this.j2x.concat(a);
                this.bAi6c += a.sigBytes
            },
            By1x: function(a) {
                var c = this.j2x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bAg6a, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bAk6e(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.j2x = this.j2x.clone();
                return a
            },
            bAg6a: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bxH6B()
        },
        update: function(a) {
            this.Xf8X(a);
            this.By1x();
            return this
        },
        finalize: function(a) {
            a && this.Xf8X(a);
            return this.Xc8U()
        },
        blockSize: 16,
        byd6X: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cBN9E: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bz3x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this.bz3x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bz3x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bxH6B: function() {
            this.dR4V = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bAk6e: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR4V.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Xc8U: function() {
            var b = this.j2x,
                n = b.words,
                a = 8 * this.bAi6c,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.By1x();
            b = this.dR4V;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dR4V = this.dR4V.clone();
            return b
        }
    });
    t.MD5 = v.byd6X(r);
    t.HmacMD5 = v.cBN9E(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function(d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this.bxE6y, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.cBE9v, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bAA6u = e;
                this.K2x = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.bxH6B()
            },
            process: function(e) {
                this.Xf8X(e);
                return this.By1x()
            },
            finalize: function(e) {
                e && this.Xf8X(e);
                return this.Xc8U()
            },
            keySize: 4,
            ivSize: 4,
            bxE6y: 1,
            cBE9v: 2,
            byd6X: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Xc8U: function() {
            return this.By1x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this.bAE6y;
            c ? this.bAE6y = u : c = this.bAG6A;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this.bAN6H = e;
                this.bAE6y = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAN6H,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAG6A = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAN6H,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAG6A = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bAA6u == this.bxE6y) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bAg6a = 1;
            this.fn4r = c.call(a, this, b && b.words)
        },
        bAk6e: function(a, b) {
            this.fn4r.processBlock(a, b)
        },
        Xc8U: function() {
            var a = this.cfg.padding;
            if (this.bAA6u == this.bxE6y) {
                a.pad(this.j2x, this.blockSize);
                var b = this.By1x(!0)
            } else b = this.By1x(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) {
                this.mixIn(a)
            },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.bew1x(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            bew1x: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.bew1x(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bxH6B: function() {
                for (var a = this.K2x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBC9t = d + 6) + 1), e = this.cBB9s = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cBA9r = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this.bAP6J(a, b, this.cBB9s, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bAP6J(a, c, this.cBA9r, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bAP6J: function(a, b, c, d, e, j, l, f) {
                for (var m = this.cBC9t, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.byd6X(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        // window.console.info(b.toString()),
        // window.console.info(c.toString()),
        window.console.info(f.toString())
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = "FFFFFFFFFFFFFFFF";
            //window.console.info(d)
            h.encText = b(d, g);
            //window.console.info(h.encText)
            h.encText = b(h.encText, i);
        return h.encText , h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function() {
    var c2x = NEJ.P,
        en4r = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        Uf8X = c2x("nm.x.ek");
    Uf8X.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Uf8X.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c2x = NEJ.P,
        en4r = c2x("nej.g"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        Uf8X = c2x("nm.x.ek"),
        l2x = c2x("nm.x");
    if (v2x.bl3x.redefine) return;
    window.GEnc = true;
    var bwA5F = function(cBy9p) {
        var m2x = [];
        k2x.bd2x(cBy9p, function(cBx9o) {
            m2x.push(Uf8X.emj[cBx9o])
        });
        return m2x.join("")
    };
    var cBw9n = v2x.bl3x;
    v2x.bl3x = function(Y2x, e2x) {
        var j2x = {},
            e2x = NEJ.X({}, e2x),
            lJ6D = Y2x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y2x) && !(e2x.headers && e2x.headers[en4r.ym0x] == en4r.HK3x) && !e2x.noEnc) {
            if (lJ6D != -1) {
                j2x = k2x.hu5z(Y2x.substring(lJ6D + 1));
                Y2x = Y2x.substring(0, lJ6D)
            }
            if (e2x.query) {
                j2x = NEJ.X(j2x, k2x.fB4F(e2x.query) ? k2x.hu5z(e2x.query) : e2x.query)
            }
            if (e2x.data) {
                j2x = NEJ.X(j2x, k2x.fB4F(e2x.data) ? k2x.hu5z(e2x.data) : e2x.data)
            }
            j2x["csrf_token"] = v2x.gC5H("__csrf");
            Y2x = Y2x.replace("api", "weapi");
            e2x.method = "post";
            delete e2x.query;
            var bBj7c = window.asrsea(JSON.stringify(j2x), bwA5F(["流泪", "强"]), bwA5F(Uf8X.md), bwA5F(["爱心", "女孩", "惊恐", "大笑"]));
            
            e2x.data = k2x.cC3x({
                params: bBj7c.encText,
                encSecKey: bBj7c.encSecKey
            })
        }
        cBw9n(Y2x, e2x)
    };
    v2x.bl3x.redefine = true
})();
(function() {
    window.setTimeout(function() {
        if (!location.href.match(/^https?:\/\/([a-zA-Z0-9\-]+?\.)*?music\.163\.com($|\/)/gi)) return;
        var getNode = function(tagName, attrName, attrValue) {
            if (!tagName || !attrName || !attrValue) return null;
            var nodes = document.getElementsByTagName(tagName);
            if (nodes && nodes.length) {
                for (var i = 0, ii = nodes.length; i < ii; i++) {
                    if ((nodes[i][attrName] || "").toLowerCase() == attrValue.toLowerCase()) {
                        return nodes[i]
                    }
                }
            }
            return null
        };
        var meta = getNode("meta", "name", "robots");
        if (meta && (meta.content || "").toLowerCase() == "nofollow") return;
        var canonicalURL, curProtocol;
        var link = getNode("link", "rel", "canonical");
        if (link && link.href) canonicalURL = link.href;
        if (!canonicalURL) {
            curProtocol = location.protocol.split(":")[0]
        } else {
            curProtocol = canonicalURL.split(":")[0]
        }
        if (!canonicalURL) canonicalURL = location.href;
        var pushHref = String(curProtocol).toLowerCase() === "https" ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif" : "//api.share.baidu.com/s.gif";
        var params = [];
        if (document.referrer) {
            params.push("r=" + encodeURIComponent(document.referrer))
        }
        params.push("l=" + encodeURIComponent(canonicalURL));
        (new Image).src = pushHref + "?" + params.join("&")
    }, 3e3)
})();
(function() {})();
(function() {})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        dx4B = c2x("nej.p"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        dE4I = c2x("nm.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        cx3x = c2x("nm.pc"),
        buj5o = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j2x = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        },
        cBs9j = function() {
            if (h2x && h2x.z2x) {
                h2x.dispatchEventalias = h2x.z2x
            }
        };
    cBs9j();
    l2x.btF5K = function(bO3x) {
        if (!bO3x || bO3x.copyrightId === undefined || !!bO3x.program) return false;
        if (window.GAbroad) {
            bO3x.fee = 0;
            return true
        }
        if (bO3x.status < 0) return true;
        var Uk8c;
        if (typeof GCopyrights !== "undefined") Uk8c = GCopyrights;
        try {
            if (!Uk8c && !!top.GCopyrights) Uk8c = top.GCopyrights
        } catch (e) {}
        if (Uk8c) {
            var r2x = k2x.dl4p(Uk8c, bO3x.copyrightId);
            if (r2x >= 0) return true
        }
        return false
    };
    l2x.btc5h = function() {
        var Dq2x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            xv0x = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            },
            cBn9e = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cBm9d = function(K2x, j2x, Uo8g) {
            switch (K2x) {
                case "event":
                    j2x = j2x.split("|");
                    return "/event?id=" + j2x[0] + "&uid=" + j2x[1];
                case "searchsong":
                case "searchlyric":
                    var u2x = K2x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j2x) + "&type=" + u2x;
                case "toplist":
                    return "/discover/toplist?id=" + j2x + "&_hash=songlist-" + Uo8g;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Uo8g;;
                case "record":
                    j2x = j2x.split("|");
                    return "/user/songs/rank?id=" + j2x[0] + "&cat=" + j2x[1];
                    break;
                default:
                    return "/" + K2x + "?id=" + j2x + "&_hash=songlist-" + Uo8g
            }
        };
        return function(ec4g, Uo8g) {
            if (!ec4g) return null;
            var LO4S = ec4g.fid || (ec4g.type != 18 ? ec4g.type : null),
                bsc4g = ec4g.fdata || ec4g.rid,
                bCe7X = ec4g.page || ec4g.fhref;
            var K2x = xv0x[LO4S];
            if (!K2x) {
                var Ak1x = (bCe7X || "").match(Dq2x);
                if (Ak1x) K2x = Ak1x[1]
            }
            if (!K2x) return null;
            return {
                title: cBn9e[K2x],
                link: !xv0x[LO4S] ? bCe7X : cBm9d(K2x, bsc4g, Uo8g),
                fid: LO4S,
                fdata: bsc4g
            }
        }
    }();
    l2x.WT8L = function(kA6u) {
        var dp4t = kA6u;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp4t = GUser;
        return dp4t
    };
    l2x.gT5Y = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l2x.Mv4z = function() {
        var Dq2x = /#(.*?)$/;
        return function(gy5D) {
            var jK6E = gy5D === false ? location : top.location;
            return Dq2x.test(jK6E.href) ? RegExp.$1 : ""
        }
    }();
    l2x.Dc2x = function() {
        var CX2x = a1x.di3x("audio"),
            cBj9a = CX2x.canPlayType && CX2x.canPlayType("audio/mpeg");
        if (cBj9a) return 2;
        var cBh9Y = l2x.bqp4t().supported;
        if (cBh9Y) return 1;
        return 0
    };
    l2x.bqp4t = function() {
        var gn5s, bpT4X = !1,
            bpE4I = "";
        if (dx4B.dr4v.browser == "ie") {
            try {
                gn5s = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gn5s = null
            }
            if (gn5s) {
                bpT4X = !0;
                bpE4I = gn5s.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gn5s = navigator.plugins["Shockwave Flash"];
                if (gn5s) {
                    bpT4X = !0;
                    bpE4I = gn5s.description
                }
            }
        }
        return {
            supported: bpT4X,
            version: bpE4I
        }
    };
    l2x.rF8x = function() {
        return "网易云音乐"
    };
    l2x.cBg9X = function() {
        return j2x
    };
    l2x.bCX7Q = function(cK3x) {
        var C2x = j2x[cK3x];
        return C2x == null ? "" : buj5o.replace("{ID}", C2x)
    };
    l2x.wI0x = function(bo3x, ee4i, CE1x) {
        if (!bo3x) return "";
        if (!!CE1x) {
            bo3x = l2x.cBf9W(bo3x)
        }
        return l2x.WN8F(l2x.cBe9V(bo3x, ee4i))
    };
    l2x.WM8E = function() {
        var TP7I = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            boN3x = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            cBd9U = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            },
            cAZ9Q = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cAW9N = function(dL4P, boz3x) {
            dL4P = MA4E(dL4P);
            if (!!boz3x) {
                dL4P = dL4P.replace(TP7I.MLINE, "\n\n").replace(TP7I.LING, "</br>")
            }
            dL4P = l2x.WN8F(dL4P);
            return dL4P
        };
        var MA4E = function(bo3x) {
            return k2x.Cb1x(cBd9U, bo3x)
        };
        return function(dL4P, e2x, dC4G) {
            e2x = e2x || {};
            dC4G = dC4G || {};
            dC4G.actHash = {};
            var cAQ9H = !!e2x.parseLink,
                cAL9C = !!e2x.parseAct,
                cAK9B = e2x.linkTpl || boN3x.LINK,
                cAJ9A = e2x.atTpl || boN3x.AT,
                cAI9z = e2x.atUrl || "/user/home?nickname=",
                cAH9y = e2x.actTpl || boN3x.ACT,
                boz3x = !!e2x.keepSpace,
                bnT3x = e2x.linkKlass || "s-fc7";
            cFV0x = e2x.actBiJson || "";
            if (!dL4P) return "";
            dL4P = dL4P.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lA6u = cAZ9Q[cAQ9H + 2 * cAL9C],
                dg3x = TP7I[lA6u],
                bs3x = null,
                jZ6T = null,
                gq5v = 0,
                cFW0x = "",
                cFX0x = "";
            var pT8L = [];
            dg3x.lastIndex = 0;
            while (bs3x = dg3x.exec(dL4P)) {
                var dQ4U = {
                    html: "",
                    before: bs3x.index - 1,
                    after: bs3x.index + bs3x[0].length
                };
                if (bs3x[1]) {
                    var jZ6T = bs3x[2].replace(/[^\x00-\xff]/g, "**");
                    if (jZ6T.length < 4 || jZ6T.length > 32) {} else {
                        var EE2x = a1x.eC4G(cAJ9A);
                        dQ4U.html = a1x.cc3x(EE2x, {
                            value: MA4E(bs3x[2]),
                            url: encodeURI(cAI9z + bs3x[2]),
                            klass: bnT3x
                        });
                        pT8L.push(dQ4U)
                    }
                } else if (bs3x.length > 8 && bs3x[4]) {
                    var EE2x = a1x.eC4G(cAK9B);
                    dQ4U.html = a1x.cc3x(EE2x, {
                        value: MA4E(bs3x[4]),
                        url: bs3x[4],
                        klass: bnT3x
                    });
                    pT8L.push(dQ4U)
                } else {
                    var bEM7F = lA6u == "ACT_NOLINK" ? 4 : 9;
                    var EE2x = a1x.eC4G(cAH9y);
                    dQ4U.html = a1x.cc3x(EE2x, {
                        value: MA4E(bs3x[bEM7F]),
                        klass: bnT3x
                    });
                    pT8L.push(dQ4U);
                    dC4G.actHash[bs3x[bEM7F].slice(1, -1)] = true
                }
            }
            var bnh3x = pT8L.length,
                kA6u = {
                    before: dL4P.length - 1,
                    after: 0
                },
                bnc3x = "";
            for (var i = 0; i <= bnh3x; i++) {
                var hv5A, fQ4U;
                hv5A = (pT8L[i - 1] || kA6u).after;
                fQ4U = (pT8L[i] || kA6u).before;
                if (fQ4U >= hv5A && hv5A >= 0 && fQ4U <= dL4P.length - 1) {
                    bnc3x += cAW9N(dL4P.substring(hv5A, fQ4U + 1), boz3x)
                }
                if (pT8L[i]) {
                    bnc3x += pT8L[i].html
                }
            }
            return bnc3x
        }
    }();
    l2x.cBf9W = function() {
        var dg3x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bo3x) {
            return (bo3x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dg3x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l2x.cBe9V = function() {
        var dg3x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ez4D = function(jZ6T, ee4i) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jZ6T) + '" class="' + (ee4i || "") + '">@' + jZ6T + "</a>"
        };
        return function(bo3x, ee4i) {
            return (bo3x || "").replace(dg3x, function($0, $1) {
                return ez4D($1, ee4i)
            })
        }
    }();
    l2x.WN8F = function() {
        var dg3x = /\[(.*?)\]/g;
        return function(bo3x) {
            return (bo3x || "").replace(dg3x, function($1, $2) {
                var Y2x = l2x.bCX7Q($2);
                return !Y2x ? $1 : '<img src="' + Y2x + '"/>'
            })
        }
    }();
    l2x.Ct1x = function(F2x, ee4i) {
        a1x.bE3x(F2x, ee4i) ? a1x.x2x(F2x, ee4i) : a1x.y2x(F2x, ee4i)
    };
    l2x.MB4F = function(cR3x, kV6P) {
        cR3x = a1x.B2x(cR3x);
        kV6P = a1x.B2x(kV6P);
        if (!cR3x || !kV6P) return !1;
        for (kV6P = kV6P.parentNode; !!kV6P && kV6P != cR3x; kV6P = kV6P.parentNode);
        return kV6P == cR3x
    };
    l2x.lq6k = function() {
        var bEV7O = function(gW5b) {
            return (gW5b < 10 ? "0" : "") + gW5b
        };
        return function(kX6R) {
            kX6R = parseInt(kX6R) || 0;
            if (!kX6R) return "00:00";
            var Av1x = Math.floor(kX6R % 60),
                cAx9o = Math.floor(kX6R / 60);
            return bEV7O(cAx9o) + ":" + bEV7O(Av1x)
        }
    }();
    l2x.Ay1x = function(fU4Y, xJ0x) {
        if (!fU4Y || fU4Y.length == 0) return "";
        xJ0x = xJ0x || "/";
        var bs3x = [];
        for (var i = fU4Y.length - 1; i >= 0; i--) {
            bs3x.unshift(fU4Y[i].name)
        }
        return bs3x.join(xJ0x)
    };
    l2x.rT8L = function() {
        var UF8x = function(hX5c, ee4i, cR3x, WI8A) {
            var ez4D = WI8A ? l2x.bmC3x : k2x.dH4L;
            if (!hX5c || !hX5c.name) return "";
            if (!hX5c.id) return '<span class="' + ee4i + '">' + ez4D(hX5c.name) + "</span>";
            return "<a" + (cR3x ? ' target="_blank"' : "") + ' class="' + ee4i + '" href="/artist?id=' + hX5c.id + '" hidefocus="true">' + ez4D(hX5c.name) + "</a>"
        };
        return function(fU4Y, W2x, xJ0x, cR3x, bFB8t, WI8A) {
            if (!fU4Y || !fU4Y.length) return "";
            xJ0x = xJ0x || "/";
            W2x = W2x || "";
            MC4G = "";
            var eo4s = [];
            for (var i = 0, i2x = [], tP9G = [], fJ4N; i < fU4Y.length; ++i) {
                eo4s.push(fU4Y[i].name);
                if (!fU4Y[i] || fU4Y[i].id <= 0) {
                    tP9G.push(fU4Y[i]);
                    continue
                }
                if (k2x.gE5J(W2x)) {
                    fJ4N = W2x(fU4Y[i])
                } else {
                    fJ4N = UF8x(fU4Y[i], W2x, cR3x, WI8A)
                }
                if (fJ4N && bFB8t && fU4Y[i].tns && fU4Y[i].tns.length > 0) {
                    MC4G = k2x.dH4L(fU4Y[i].tns[0]);
                    fJ4N += '<span class="s-fc8" title="' + MC4G + '"> - (' + MC4G + ")</span>"
                }!!fJ4N && i2x.push(fJ4N)
            }
            for (var i = 0, fJ4N; i < tP9G.length; ++i) {
                if (k2x.gE5J(W2x)) {
                    fJ4N = W2x(tP9G[i])
                } else {
                    fJ4N = UF8x(tP9G[i], W2x, cR3x, WI8A)
                }
                if (fJ4N && bFB8t && tP9G[i].tns && tP9G[i].tns.length > 0) {
                    MC4G = k2x.dH4L(tP9G[i].tns[0]);
                    fJ4N += '<span class="s-fc8" title="' + MC4G + '"> - (' + MC4G + ")</span>"
                }!!fJ4N && i2x.push(fJ4N)
            }
            return '<span title="' + eo4s.join(xJ0x) + '">' + i2x.join(xJ0x) + "</span>"
        }
    }();
    l2x.Ac1x = function(fz4D, pY8Q) {
        pY8Q = pY8Q || "86";
        return !!fz4D && (pY8Q == "86" ? /^\d{11}$/ : /^\d+$/).test(fz4D)
    };
    l2x.cFY0x = function(fz4D) {
        if (!l2x.Ac1x(fz4D)) return fz4D;
        return fz4D.substring(0, 3) + "****" + fz4D.substr(7)
    };
    l2x.kw6q = function() {
        var dg3x = /^\s+$/g;
        return function(ig5l) {
            return !ig5l || dg3x.test(ig5l)
        }
    }();
    l2x.UJ8B = function() {
        var blX3x = /[^\x00-\xfff]/g;
        return function(ig5l) {
            var cAv9m = ig5l.match(blX3x) || [],
                dt4x = cAv9m.length;
            return ig5l.length + dt4x
        }
    }();
    l2x.AW1x = function() {
        var blX3x = /[^\x00-\xfff]/;
        return function(ig5l, eG4K) {
            for (var i = 0, len = ig5l.length; i < len && eG4K > 0; i++) {
                if (blX3x.test(ig5l.charAt(i))) {
                    eG4K -= 2;
                    if (eG4K < 0) {
                        break
                    }
                } else {
                    eG4K -= 1
                }
            }
            return ig5l.substring(0, i)
        }
    }();
    l2x.AZ1x = function(ig5l, eG4K, MY4c) {
        eG4K = eG4K || 10;
        MY4c = MY4c || nej.p.dr4v.engine == "trident" && parseInt(nej.p.dr4v.release) < 5;
        if (MY4c && l2x.UJ8B(ig5l) > eG4K) {
            return l2x.AW1x(ig5l, eG4K) + "..."
        } else {
            return ig5l
        }
    };
    l2x.bGr8j = function(g2x) {
        return g2x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g2x.type || g2x.href || ~g2x.tabIndex)
    };
    l2x.cAt9k = function(d2x, cR3x) {
        if (!d2x || !cR3x) return !0;
        var g2x, u2x = d2x.type.toLowerCase();
        if (u2x == "mouseout") {
            g2x = d2x.relatedTarget || d2x.toElement
        } else if (u2x == "mouseover") {
            g2x = d2x.relatedTarget || d2x.fromElement
        }
        return !g2x || g2x !== cR3x && !l2x.MB4F(cR3x, g2x)
    };
    l2x.tu9l = function() {
        R2x = {};
        return function(g2x, ed4h) {
            var C2x = a1x.lQ6K(g2x),
                K2x = "hover-" + C2x;
            if (!ed4h || !C2x || !!R2x[K2x]) return;
            R2x[K2x] = !0;
            h2x.s2x(C2x, "mouseover", function() {
                var ble3x = a1x.H2x(g2x, "hshow") || [];
                var bla3x = a1x.H2x(g2x, "icn-dislike") || [];
                a1x.y2x(C2x, "z-hover");
                a1x.ba2x(ble3x[0], "display", "block");
                a1x.ba2x(bla3x[0], "display", "block")
            });
            h2x.s2x(C2x, "mouseout", function() {
                var ble3x = a1x.H2x(g2x, "hshow") || [];
                var bla3x = a1x.H2x(g2x, "icn-dislike") || [];
                a1x.x2x(C2x, "z-hover");
                a1x.ba2x(ble3x[0], "display", "none");
                a1x.ba2x(bla3x[0], "display", "none")
            })
        }
    }();
    l2x.bGA8s = function() {
        var bz3x = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(ig5l) {
            return k2x.Cb1x(bz3x, ig5l)
        }
    }();
    l2x.zp0x = function(bA3x) {
        if (k2x.EQ2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        if (ko6i <= 6e4) return "刚刚";
        var ns7l = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= ns7l) {
            if (ko6i < 36e5) {
                var FZ2x = Math.floor(ko6i / 6e4);
                return FZ2x + "分钟前"
            }
            return k2x.ia5f(bA3x, "HH:mm")
        } else {
            if (ko6i < ns7l + 864e5) {
                return "昨天" + k2x.ia5f(bA3x, "HH:mm")
            } else {
                var gF5K = eT4X.getFullYear(),
                    UL8D = new Date(gF5K, 0, 1);
                var ns7l = eT4X.getTime() - UL8D.getTime();
                if (ko6i < ns7l) {
                    return k2x.ia5f(bA3x, "M月d日 HH:mm")
                }
                return k2x.ia5f(bA3x, "yyyy年M月d日")
            }
        }
    };
    l2x.cAs9j = function(bA3x) {
        if (k2x.EQ2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        var ns7l = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= ns7l) {
            return "今天" + k2x.ia5f(bA3x, "HH:mm")
        } else {
            if (ko6i < ns7l + 864e5) {
                return "昨天" + k2x.ia5f(bA3x, "HH:mm")
            } else {
                return k2x.ia5f(bA3x, "yy-MM-dd HH:mm")
            }
        }
    };
    l2x.cAr9i = function(bA3x) {
        if (k2x.EQ2x(bA3x)) bA3x = bA3x.getTime();
        var eT4X = new Date,
            ko6i = eT4X.getTime() - bA3x;
        if (ko6i <= 6e4) return "刚刚";
        var ns7l = eT4X.getHours() * 36e5 + eT4X.getMinutes() * 6e4 + eT4X.getSeconds() * 1e3;
        if (ko6i <= ns7l) {
            if (ko6i < 36e5) {
                var FZ2x = Math.floor(ko6i / 6e4);
                return FZ2x + "分钟前"
            }
            return k2x.ia5f(bA3x, "HH:mm")
        } else {
            if (ko6i < ns7l + 864e5) {
                return "昨天" + k2x.ia5f(bA3x, "HH:mm")
            } else if (ko6i < ns7l + 864e5 * 6) {
                var gF5K = eT4X.getFullYear(),
                    UL8D = new Date(gF5K, 0, 1);
                var ns7l = eT4X.getTime() - UL8D.getTime();
                if (ko6i < ns7l) {
                    return k2x.ia5f(bA3x, "M月d日 HH:mm")
                }
                return k2x.ia5f(bA3x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l2x.WF8x = function() {
        var dg3x = /\{(.*?)\}/gi;
        return function(pc7V, j2x) {
            return (pc7V || "").replace(dg3x, function($1, $2) {
                var D2x = j2x[$2];
                return D2x == null ? $1 : D2x
            })
        }
    }();
    l2x.fr4v = function() {
        var bf2x = Array.prototype.slice.call(arguments, 0),
            pc7V = bf2x.shift();
        if (pc7V) {
            return pc7V.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bf2x.length ? bf2x[$2] : $1
            })
        }
        return ""
    };
    l2x.ME4I = function(i2x, ee4i, ku6o) {
        return "";
        ku6o = ku6o || " - ";
        if (i2x && i2x.length) {
            return ku6o + (!!ee4i ? '<span class="' + ee4i + '">' + i2x[0] + "</span>" : i2x[0])
        }
        return ""
    };
    l2x.bHC8u = function() {
        if (window.getSelection) {
            var si8a = window.getSelection();
            if (si8a && si8a.focusNode && si8a.focusNode.tagName) {
                var BG1x = a1x.dm4q(si8a.focusNode);
                for (var i = 0, yt0x; i < BG1x.length; ++i) {
                    yt0x = BG1x[i].tagName;
                    if (!yt0x) continue;
                    yt0x = yt0x.toLowerCase();
                    if (yt0x == "textarea" || yt0x == "input") return !0
                }
            }
        } else if (document.selection) {
            var de3x = document.selection.createRange();
            if (de3x) {
                var g2x = de3x.parentElement();
                if (g2x && g2x.tagName) {
                    var yt0x = g2x.tagName.toLowerCase();
                    if (yt0x == "textarea" || yt0x == "input") return !0
                }
            }
        }
        return !1
    };
    l2x.Cc1x = function(fF4J) {
        if (/^[A-Z]\:\\/i.test(fF4J)) {
            fF4J = fF4J.split("\\")
        } else {
            fF4J = fF4J.split("/")
        }
        fF4J = fF4J[fF4J.length - 1];
        return fF4J
    };
    l2x.cAq9h = function() {
        var DO2x = [13, 17, 34, 19, 18, 21];
        return function(C2x) {
            var bs3x = (C2x || "").split("_");
            return {
                type: DO2x[bs3x[2]] || -1,
                id: bs3x[3] || ""
            }
        }
    }();
    l2x.bIB8t = function(gn5s) {
        if (!gn5s) {
            return true
        }
        for (var k in gn5s) {
            return false
        }
        return true
    };
    l2x.bko2x = function(dp4t) {
        if (!dp4t) {
            return ""
        }
        if (4 == dp4t.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp4t.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp4t.expertTags && dp4t.expertTags.length || !l2x.bIB8t(dp4t.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l2x.UP8H = function(hI5N) {
        if (!hI5N) return "";
        var dt4x = hI5N.length,
            ip5u = [];
        ip5u[0] = dt4x / 3 | 0;
        ip5u[1] = ip5u[0] + ((dt4x - ip5u[0]) / 2 | 0);
        return hI5N.substring(0, ip5u[0]) + hI5N.substring(ip5u[0], ip5u[1]).replace(/\d/g, "*") + hI5N.substring(ip5u[1], dt4x)
    };
    l2x.cFZ0x = function(r2x, cB3x) {
        return (r2x % cB3x + cB3x) % cB3x
    };
    l2x.biE2x = function() {
        var DO2x = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C2x) {
            var bs3x = (C2x || "").split("_"),
                m2x = {
                    type: DO2x[bs3x[2]] || -1,
                    id: bs3x[3] || ""
                };
            if (m2x.type == "event") {
                m2x.uid = bs3x[4] || "";
                return "/" + m2x.type + "?id=" + m2x.id + "&uid=" + m2x.uid
            }
            return "/" + m2x.type + "?id=" + m2x.id
        }
    }();
    l2x.bil2x = function() {
        var DO2x = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C2x) {
            var bs3x = (C2x || "").split("_");
            return DO2x[bs3x[2]] || "资源"
        }
    }();
    l2x.cAn8f = function(bv3x) {
        var qs = bv3x.length > 0 ? bv3x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l2x.bgM1x = function(ot7m, Vb8T) {
        var Wv8n = 0,
            ey4C = new Array;
        k2x.bd2x(ot7m, function(Y2x, r2x) {
            var cy3x = a1x.di3x("img");
            cy3x.src = Y2x;
            h2x.s2x(cy3x, "load", function(r2x, d2x) {
                ey4C[r2x] = 1;
                Wv8n++;
                if (Wv8n == ot7m.length) Vb8T(ot7m, ey4C)
            }.f2x(this, r2x));
            h2x.s2x(cy3x, "error", function(d2x, r2x) {
                ey4C[r2x] = 0;
                Wv8n++;
                if (Wv8n == ot7m.length) Vb8T(ot7m, ey4C)
            }.f2x(this, r2x))
        })
    };
    l2x.MM4Q = function(i2x, dZ4d) {
        var m2x = [];
        k2x.bd2x(i2x, function(p2x, r2x, P2x) {
            m2x.push(dZ4d(p2x, r2x, P2x))
        });
        return m2x
    };
    l2x.bfw1x = function(i2x, dZ4d, P2x) {
        var m2x = [];
        k2x.bd2x(i2x, function(p2x, r2x) {
            if (dZ4d.call(P2x, p2x, r2x, i2x)) {
                m2x.push(p2x)
            }
        });
        return m2x
    };
    l2x.bJI9z = function(bo3x) {
        return k2x.dH4L((bo3x || "").replace(/\s{2,}/g, " ").trim())
    };
    var cAk8c = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l2x.cAj8b = function(bo3x) {
        return k2x.Cb1x(cAk8c, bo3x)
    };
    l2x.bxL6F = function(bj3x) {
        if (bj3x.transNames && bj3x.transNames.length) {
            return bj3x.transNames[0]
        } else if (bj3x.alias && bj3x.alias.length) {
            return bj3x.alias[0]
        }
    };
    l2x.bwC5H = function(TI7B) {
        if (TI7B) {
            return TI7B.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l2x.bvv5A = function(g2x) {
        var g2x = a1x.B2x(g2x),
            cK3x = g2x && g2x.getElementsByTagName("textarea")[0],
            K2x = a1x.t2x(g2x, "key"),
            btY5d = a1x.t2x(g2x, "simple") == "1",
            cAi8a = a1x.t2x(g2x, "pvnamed") == "1",
            cAh8Z = q2x.xI0x.gk5p();
        if (!(g2x && cK3x && K2x)) return;
        var Wn8f, bmf3x, Wh8Z;
        Wn8f = a1x.H2x(a1x.B2x("m-playlist"), "j-img");
        k2x.bd2x(Wn8f, function(iW5b) {
            if (!Wh8Z && a1x.t2x(iW5b, "key")) {
                Wh8Z = a1x.t2x(iW5b, "key");
                iW5b.removeAttribute("data-key")
            }
        });
        Wn8f = a1x.H2x(a1x.B2x("m-playlist"), "m-info");
        k2x.bd2x(Wn8f, function(iW5b) {
            if (!bmf3x && iW5b.id && iW5b.id.indexOf("auto-id-") == 0) {
                bmf3x = iW5b.id.slice(8, 12)
            }
        });
        var D2x = cK3x.value || cK3x.defaultValue;
        if (Wh8Z) {
            D2x = decodeURIComponent(k2x.cAg8Y(D2x, "param=" + bmf3x + Wh8Z))
        }
        D2x = JSON.parse(D2x);
        if (cAi8a) {
            l2x.cAd8V(D2x)
        }
        if (btY5d) {
            D2x = l2x.FP2x(D2x)
        }
        cAh8Z.uK9B(K2x, D2x);
        g2x.innerHTML = "";
        return K2x
    };
    l2x.cAc8U = function(qp8h) {
        if (!qp8h.onbeforelistload) {
            qp8h.onbeforelistload = function(d2x) {
                d2x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qp8h.onemptylist) {
            qp8h.onemptylist = function(d2x) {
                d2x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qp8h.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qp8h
    };
    l2x.cAd8V = function(hB5G) {
        k2x.bd2x(hB5G, function(bO3x) {
            bO3x.privilege = bO3x.pv;
            delete bO3x.pv
        })
    };
    l2x.FP2x = function(ir5w) {
        if (k2x.eJ4N(ir5w)) {
            var dC4G = [];
            k2x.bd2x(ir5w, function(btY5d) {
                dC4G.push(bLh9Y(btY5d))
            });
            return dC4G
        } else {
            return bLh9Y(ir5w)
        }

        function bLh9Y(ir5w) {
            if (!ir5w) return null;
            var dC4G = {
                album: ir5w.al,
                alias: ir5w.alia || ir5w.ala || [],
                artists: ir5w.ar || [],
                commentThreadId: "R_SO_4_" + ir5w.id,
                copyrightId: ir5w.cp || 0,
                duration: ir5w.dt || 0,
                id: ir5w.id,
                mvid: ir5w.mv || 0,
                name: ir5w.name || "",
                cd: ir5w.cd,
                position: ir5w.no || 0,
                ringtone: ir5w.rt,
                rtUrl: ir5w.rtUrl,
                status: ir5w.st || 0,
                pstatus: ir5w.pst || 0,
                fee: ir5w.fee || 0,
                version: ir5w.v || 0,
                eq: ir5w.eq,
                songType: ir5w.t || 0,
                mst: ir5w.mst,
                score: ir5w.pop || 0,
                ftype: ir5w.ftype,
                rtUrls: ir5w.rtUrls,
                transNames: ir5w.tns,
                privilege: ir5w.privilege,
                lyrics: ir5w.lyrics
            };
            return dC4G
        }
    };
    l2x.cGa0x = function() {
        var g2x = a1x.os7l('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g2x);
        h2x.s2x(g2x, "click", function(d2x) {
            h2x.bh2x(d2x);
            a1x.cM3x(g2x)
        })
    };
    l2x.iG5L = function(cz3x) {
        if (cz3x < 1e5) {
            return cz3x
        } else if (cz3x < 1e8) {
            return Math.floor(cz3x / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz3x / 1e7) / 10 + "亿"
        }
    };
    l2x.wa0x = function(cz3x, cK3x) {
        return "<i>" + (cz3x ? "(" + cz3x + ")" : cK3x) + "</i>"
    };
    l2x.bLy9p = function(u2x, ih5m) {
        var e2x = {};
        if (!k2x.lG6A(ih5m)) {
            return e2x
        }
        switch (parseInt(u2x)) {
            case 17:
                e2x.title = ih5m.name;
                e2x.author = (ih5m.radio || []).name;
                e2x.picUrl = ih5m.coverUrl;
                e2x.category = ih5m.radio.category;
                break;
            case 19:
                e2x.title = ih5m.name;
                e2x.author = l2x.Ay1x(ih5m.artists);
                e2x.authors = l2x.Ay1x(ih5m.artists, " / ");
                e2x.picUrl = ih5m.picUrl;
                break;
            case 13:
                e2x.title = ih5m.name;
                e2x.author = (ih5m.creator || []).nickname;
                e2x.picUrl = ih5m.coverImgUrl;
                break;
            case 18:
                e2x.title = ih5m.name;
                e2x.author = l2x.Ay1x(ih5m.artists);
                e2x.picUrl = (ih5m.album || []).picUrl;
                break;
            case 20:
                e2x.title = ih5m.name;
                e2x.author = "";
                e2x.picUrl = ih5m.img1v1Url;
                break;
            case 21:
                e2x.title = ih5m.name;
                e2x.author = ih5m.artistName;
                e2x.authors = l2x.Ay1x(ih5m.artists, " / ");
                e2x.picUrl = ih5m.newCover || ih5m.cover;
                break;
            case 70:
                e2x.title = ih5m.name;
                e2x.author = (ih5m.dj || []).nickname;
                e2x.picUrl = ih5m.picUrl;
                e2x.category = ih5m.category;
                break;
            default:
                break
        }
        return e2x
    };
    l2x.bMa9R = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l2x.Vw8o = function(ez4D, or7k, e2x) {
        var bJ3x, bf2x, m2x;
        var gU5Z = null;
        var vO9F = 0;
        if (!e2x) e2x = {};
        var As1x = function() {
            vO9F = e2x.leading === false ? 0 : +(new Date);
            gU5Z = null;
            m2x = ez4D.apply(bJ3x, bf2x);
            if (!gU5Z) bJ3x = bf2x = null
        };
        return function() {
            var eT4X = +(new Date);
            if (!vO9F && e2x.leading === false) vO9F = eT4X;
            var HB3x = or7k - (eT4X - vO9F);
            bJ3x = this;
            bf2x = arguments;
            if (HB3x <= 0 || HB3x > or7k) {
                if (gU5Z) {
                    clearTimeout(gU5Z);
                    gU5Z = null
                }
                vO9F = eT4X;
                m2x = ez4D.apply(bJ3x, bf2x);
                if (!gU5Z) bJ3x = bf2x = null
            } else if (!gU5Z && e2x.trailing !== false) {
                gU5Z = setTimeout(As1x, HB3x)
            }
            return m2x
        }
    };
    l2x.MR4V = function(ez4D, or7k, pt8l) {
        var gU5Z, bf2x, bJ3x, Ch1x, m2x;
        var As1x = function() {
            var gq5v = new Date - Ch1x;
            if (gq5v < or7k && gq5v >= 0) {
                gU5Z = setTimeout(As1x, or7k - gq5v)
            } else {
                gU5Z = null;
                if (!pt8l) {
                    m2x = ez4D.apply(bJ3x, bf2x);
                    if (!gU5Z) bJ3x = bf2x = null
                }
            }
        };
        return function() {
            bJ3x = this;
            bf2x = arguments;
            Ch1x = new Date;
            var Vy8q = pt8l && !gU5Z;
            if (!gU5Z) gU5Z = setTimeout(As1x, or7k);
            if (Vy8q) {
                m2x = ez4D.apply(bJ3x, bf2x);
                bJ3x = bf2x = null
            }
            return m2x
        }
    };
    l2x.Vz8r = function(g2x, hk5p) {
        if (g2x) {
            var g2x = g2x.firstElementChild;
            if (g2x) {
                g2x.firstElementChild && (g2x = g2x.firstElementChild);
                g2x.setAttribute("xlink:href", "/style/pc/svg/" + hk5p)
            }
        }
    };
    l2x.bNz0x = function(eo4s) {
        if (!eo4s || !eo4s.length) {
            return
        }
        eo4s = /^#(.+?)#$/.exec(eo4s)[1];
        eo4s = eo4s.replace(/\s/g, " ");
        v2x.bl3x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k2x.cC3x({
                actname: eo4s
            }),
            onload: function(Q2x) {
                if (!Q2x || Q2x.code != 200 || !Q2x.act) {
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q2x.act.actId)
                }
            },
            onerror: function(ca3x) {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l2x.cAa8S = function(eo4s) {
        if (!eo4s || !eo4s.length) {
            return
        }
        var VA8s = location.host;
        eo4s = /^#(.+?)#$/.exec(eo4s)[1];
        eo4s = eo4s.replace(/\s/g, " ");
        v2x.bl3x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k2x.cC3x({
                actname: eo4s
            }),
            onload: function(Q2x) {
                if (!Q2x || Q2x.code != 200 || !Q2x.act) {
                    cx3x.im5r("该话题暂未创建")
                } else {
                    cx3x.AL1x(VA8s + "/activity?id=" + Q2x.act.actId)
                }
            },
            onerror: function(ca3x) {
                cx3x.im5r("操作失败，请稍后再试")
            }
        })
    };
    l2x.boV3x = function(yX0x, sD9u) {
        if (!yX0x || !sD9u) return false;
        if (yX0x == sD9u) return true;
        return l2x.boV3x(yX0x, sD9u.parentNode)
    };
    a1x.cI3x = function(bI3x, jg5l) {
        if (!bI3x) return null;
        if (!jg5l) return bI3x.firstChild;
        return a1x.H2x(bI3x, jg5l)[0]
    };
    l2x.bOE0x = function(ig5l) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ig5l)
    };
    l2x.bOI0x = function(ig5l, VO8G) {
        VO8G = VO8G || "86";
        if (VO8G == "86") return /^\d{11}$/.test(ig5l);
        return /^\d+$/.test(ig5l)
    };
    l2x.cGb0x = function(vi9Z) {
        if (!vi9Z) {
            return "0b"
        }
        var czX8P = ["Bytes", "KB", "MB", "GB"];
        var bc2x = Math.floor(Math.log(vi9Z) / Math.log(1024));
        return (vi9Z / Math.pow(1024, Math.floor(bc2x))).toFixed(bc2x == 1 ? 0 : 1) + czX8P[bc2x]
    };
    l2x.bPo0x = function(dL4P, fq4u, czW8O) {
        if (!dL4P) return dL4P;
        var dt4x = k2x.fx4B(dL4P);
        if (dt4x <= fq4u) return dL4P;
        var bgi1x = dt4x - dL4P.length,
            bxF6z = dL4P.length - bgi1x;
        var fC4G = Math.ceil(fq4u / 2),
            czU8M = fq4u,
            bPU0x = 0;
        if (bgi1x < fC4G) fC4G = fq4u - bgi1x;
        if (bxF6z < fq4u) fq4u = bxF6z + Math.ceil((fq4u - bxF6z) / 2);
        while (fC4G <= fq4u) {
            bPU0x = k2x.fx4B(dL4P.substr(0, fC4G));
            var bqg4k = czU8M - bPU0x;
            if (bqg4k == 0) break;
            if (bqg4k == 1) {
                var czT8L = k2x.fx4B(dL4P.charAt(fC4G));
                if (czT8L == 1) {
                    fC4G++;
                    break
                } else {
                    break
                }
            }
            fC4G += Math.floor(bqg4k / 2)
        }
        return dL4P.substr(0, fC4G) + (!!czW8O ? "" : "...")
    };
    l2x.czR8J = function(bq3x) {
        bq3x = bq3x || 10;
        var cN3x = "";
        for (var i = 0; i < bq3x; i++) {
            cN3x += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cN3x
    };
    var czQ8I = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        czP8H = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        czO8G = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQD1x = function(czN8F) {
        var bq3x = k2x.Bq1x(1, 5),
            czM8E = Math.random() < .5,
            iQ5V = "";
        if (czN8F) {
            if (czM8E) {
                while (bq3x >= 0) {
                    iQ5V += czO8G[k2x.Bq1x(0, 500)];
                    bq3x--
                }
            } else {
                iQ5V = l2x.czR8J(bq3x)
            }
        } else {
            iQ5V = k2x.OK6E(bq3x)
        }
        return '<div class="soil">' + iQ5V + "</div>"
    };
    l2x.bmC3x = function(er4v) {
        er4v = k2x.Az1x(er4v);
        try {
            var bq3x = er4v.length,
                r2x = k2x.Bq1x(1, bq3x - 1);
            while (r2x < bq3x) {
                if (czP8H.test(er4v.charAt(r2x))) {
                    return k2x.dH4L(er4v.slice(0, r2x)) + bQD1x(true) + k2x.dH4L(er4v.slice(r2x))
                } else if (czQ8I.test(er4v.charAt(r2x))) {
                    return k2x.dH4L(er4v.slice(0, r2x)) + bQD1x() + k2x.dH4L(er4v.slice(r2x))
                } else {
                    r2x++
                }
            }
            return k2x.dH4L(er4v)
        } catch (e) {
            return k2x.dH4L(er4v)
        }
    };
    l2x.baJ0x = function(li6c, mM7F) {
        return "//nos.netease.com/" + li6c + "/" + mM7F
    };
    l2x.czK8C = function(fF4J) {
        var dQ4U = /(.+)(\.[^\.]+$)/.exec(fF4J);
        return dQ4U ? {
            filename: dQ4U[1],
            suffix: dQ4U[2]
        } : {
            filename: fF4J || "",
            suffix: ""
        }
    };
    l2x.bRh1x = function(bs3x, czH8z) {
        var dC4G = [];
        k2x.bd2x(bs3x, function(id5i) {
            dC4G.push(czH8z(id5i))
        });
        return dC4G
    };
    var czG8y = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l2x.bRn1x = function(xM0x) {
        var j2x = NEJ.X({}, xM0x);
        k2x.eI4M(xM0x, function(p2x, K2x) {
            var bRs1x = czG8y[K2x];
            if (bRs1x) {
                j2x[bRs1x] = p2x
            }
        });
        var VS8K = xM0x.creator || [];
        if (!k2x.eJ4N(VS8K)) {
            VS8K = [VS8K]
        }
        if (VS8K) {
            j2x.artists = [];
            k2x.bd2x(VS8K, function(p2x) {
                j2x.artists.push({
                    name: p2x.nickname || p2x.userName,
                    id: p2x.userId
                })
            })
        }
        if (!!xM0x.aliaName) {
            j2x.alias = [xM0x.aliaName]
        }
        if (!!xM0x.transName) {
            j2x.transNames = [xM0x.transName]
        }
        return j2x
    };
    l2x.czE8w = function(Y2x) {
        return (Y2x || "").replace(/^https?:/, "")
    };
    l2x.Fh2x = function(cN3x) {
        if (!k2x.fB4F(cN3x)) return cN3x;
        var dC4G = null;
        try {
            dC4G = JSON.parse(cN3x)
        } catch (_e) {}
        return dC4G
    };
    var czB8t = '<span class="s-fc7 f-tdn">${value}</span>';
    l2x.czA8s = function(cK3x, uk9b, e2x) {
        e2x = e2x || {};
        if (!uk9b) {
            return k2x.dH4L(cK3x)
        }
        cK3x = k2x.Az1x(cK3x);
        var pT8L = [],
            bs3x = null,
            NG5L = new RegExp(l2x.bGA8s(uk9b), "gi"),
            pc7V = e2x.tpl || czB8t;
        while (bs3x = NG5L.exec(cK3x)) {
            var dQ4U = {
                html: "",
                before: bs3x.index - 1,
                after: bs3x.index + bs3x[0].length
            };
            var EE2x = a1x.eC4G(pc7V);
            dQ4U.html = a1x.cc3x(EE2x, {
                value: k2x.dH4L(bs3x[0])
            });
            pT8L.push(dQ4U)
        }
        var bnh3x = pT8L.length,
            kA6u = {
                before: cK3x.length - 1,
                after: 0
            },
            dC4G = "";
        for (var i = 0; i <= bnh3x; i++) {
            var hv5A, fQ4U;
            hv5A = (pT8L[i - 1] || kA6u).after;
            fQ4U = (pT8L[i] || kA6u).before;
            if (fQ4U >= hv5A && hv5A >= 0 && fQ4U <= cK3x.length - 1) {
                dC4G += k2x.dH4L(cK3x.substring(hv5A, fQ4U + 1))
            }
            if (pT8L[i]) {
                dC4G += pT8L[i].html
            }
        }
        return dC4G
    };
    l2x.oi7b = function() {
        if (!window.WM) {
            var g2x = document.createElement("script");
            var pP8H = window.location.hostname;
            var bRR2x = window.location.protocol;
            a1x.gH5M(g2x, "type", "text/javascript");
            if (pP8H === "music.163.com") {
                a1x.gH5M(g2x, "src", bRR2x + "//s3.music.126.net/js/web2/3rd/acstatic-dun.min.js")
            } else {
                a1x.gH5M(g2x, "src", bRR2x + "//" + pP8H + "/js/web2/3rd/acstatic-dun.min.js")
            }
            g2x.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g2x)
        }
    };
    l2x.sL9C = function(nZ7S) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", nZ7S)
        }
    };
    l2x.Dr2x = function(nZ7S) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", nZ7S)
        }
    }
})();
(function() {
    var k2x = NEJ.P("nej.u");

    function czx8p() {
        var Dl2x = function(if5k) {
            if (if5k < -128) {
                return Dl2x(128 - (-128 - if5k))
            } else if (if5k >= -128 && if5k <= 127) {
                return if5k
            } else if (if5k > 127) {
                return Dl2x(-129 + if5k - 127)
            } else {
                throw new Error("1001")
            }
        };
        var czw8o = function(if5k, bi2x) {
            return Dl2x(if5k + bi2x)
        };
        var czv8n = function(Wb8T, bkU2x) {
            if (Wb8T == null) {
                return null
            }
            if (bkU2x == null) {
                return Wb8T
            }
            var qZ8R = [];
            var czu8m = bkU2x.length;
            for (var i = 0, bq3x = Wb8T.length; i < bq3x; i++) {
                qZ8R[i] = czw8o(Wb8T[i], bkU2x[i % czu8m])
            }
            return qZ8R
        };
        var czt8l = function(Wc8U) {
            if (Wc8U == null) {
                return Wc8U
            }
            var qZ8R = [];
            var czq8i = Wc8U.length;
            for (var i = 0, bq3x = czq8i; i < bq3x; i++) {
                qZ8R[i] = Dl2x(0 - Wc8U[i])
            }
            return qZ8R
        };
        var czn8f = function(bmV3x, VD8v) {
            bmV3x = Dl2x(bmV3x);
            VD8v = Dl2x(VD8v);
            return Dl2x(bmV3x ^ VD8v)
        };
        var bTg2x = function(VB8t, bhe2x) {
            if (VB8t == null || bhe2x == null || VB8t.length != bhe2x.length) {
                return VB8t
            }
            var qZ8R = [];
            var czm8e = VB8t.length;
            for (var i = 0, bq3x = czm8e; i < bq3x; i++) {
                qZ8R[i] = czn8f(VB8t[i], bhe2x[i])
            }
            return qZ8R
        };
        var bTq2x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var czl8d = function(dx4B) {
            var MQ4U = [];
            MQ4U.push(bTq2x[dx4B >>> 4 & 15]);
            MQ4U.push(bTq2x[dx4B & 15]);
            return MQ4U.join("")
        };
        var bTA8s = function(vi9Z) {
            var bq3x = vi9Z.length;
            if (vi9Z == null || bq3x < 0) {
                return new String("")
            }
            var MQ4U = [];
            for (var i = 0; i < bq3x; i++) {
                MQ4U.push(czl8d(vi9Z[i]))
            }
            return MQ4U.join("")
        };
        var bTC8u = function(Wj8b) {
            if (Wj8b == null || Wj8b.length == 0) {
                return Wj8b
            }
            var bob3x = new String(Wj8b);
            var qZ8R = [];
            var bq3x = bob3x.length / 2;
            var bi2x = 0;
            for (var i = 0; i < bq3x; i++) {
                var pb7U = parseInt(bob3x.charAt(bi2x++), 16) << 4;
                var oO7H = parseInt(bob3x.charAt(bi2x++), 16);
                qZ8R[i] = Dl2x(pb7U + oO7H)
            }
            return qZ8R
        };
        var bTK8C = function(cN3x) {
            if (cN3x == null || cN3x == undefined) {
                return cN3x
            }
            var Vo8g = encodeURIComponent(cN3x);
            var vi9Z = [];
            var bTO8G = Vo8g.length;
            for (var i = 0; i < bTO8G; i++) {
                if (Vo8g.charAt(i) == "%") {
                    if (i + 2 < bTO8G) {
                        vi9Z.push(bTC8u(Vo8g.charAt(++i) + "" + Vo8g.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vi9Z.push(Vo8g.charCodeAt(i))
                }
            }
            return vi9Z
        };
        var czi8a = function(wn0x) {
            var bc2x = 0;
            bc2x += (wn0x[0] & 255) << 24;
            bc2x += (wn0x[1] & 255) << 16;
            bc2x += (wn0x[2] & 255) << 8;
            bc2x += wn0x[3] & 255;
            return bc2x
        };
        var cGd0x = function(bc2x) {
            var wn0x = [];
            wn0x[0] = bc2x >>> 24 & 255;
            wn0x[1] = bc2x >>> 16 & 255;
            wn0x[2] = bc2x >>> 8 & 255;
            wn0x[3] = bc2x & 255;
            return wn0x
        };
        var cze8W = function(cS3x, bsi4m, bq3x) {
            var dC4G = [];
            if (cS3x == null || cS3x.length == 0) {
                return dC4G
            }
            if (cS3x.length < bq3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq3x; i++) {
                dC4G[i] = cS3x[bsi4m + i]
            }
            return dC4G
        };
        var bhl2x = function(cS3x, bsi4m, sJ9A, cyZ8R, bq3x) {
            if (cS3x == null || cS3x.length == 0) {
                return sJ9A
            }
            if (sJ9A == null) {
                throw new Error("1004")
            }
            if (cS3x.length < bq3x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq3x; i++) {
                sJ9A[cyZ8R + i] = cS3x[bsi4m + i]
            }
            return sJ9A
        };
        var cyW8O = function(bq3x) {
            var bs3x = [];
            for (var i = 0; i < bq3x; i++) {
                bs3x[i] = 0
            }
            return bs3x
        };
        var cyV8N = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var MI4M = 64;
        var WA8s = 64;
        var bVm9d = 4;
        var cyU8M = function(qC8u) {
            var bVv9m = [];
            if (qC8u == null || qC8u == undefined || qC8u.length == 0) {
                return cyW8O(WA8s)
            }
            if (qC8u.length >= WA8s) {
                return cze8W(qC8u, 0, WA8s)
            } else {
                for (var i = 0; i < WA8s; i++) {
                    bVv9m[i] = qC8u[i % qC8u.length]
                }
            }
            return bVv9m
        };
        var cyT8L = function(WB8t) {
            if (WB8t == null || WB8t.length % MI4M != 0) {
                throw new Error("1005")
            }
            var biG2x = [];
            var bi2x = 0;
            var cyS8K = WB8t.length / MI4M;
            for (var i = 0; i < cyS8K; i++) {
                biG2x[i] = [];
                for (var j = 0; j < MI4M; j++) {
                    biG2x[i][j] = WB8t[bi2x++]
                }
            }
            return biG2x
        };
        var cyR8J = function(bVM9D) {
            var pb7U = bVM9D >>> 4 & 15;
            var oO7H = bVM9D & 15;
            var bi2x = pb7U * 16 + oO7H;
            return cyV8N[bi2x]
        };
        var bVO9F = function(bkp2x) {
            if (bkp2x == null) {
                return null
            }
            var bVT9K = [];
            for (var i = 0, bq3x = bkp2x.length; i < bq3x; i++) {
                bVT9K[i] = cyR8J(bkp2x[i])
            }
            return bVT9K
        };
        var bVU9L = function(MD4H, qC8u) {
            if (MD4H == null) {
                return null
            }
            if (MD4H.length == 0) {
                return []
            }
            if (MD4H.length % MI4M != 0) {
                throw new Error("1005")
            }
            qC8u = cyU8M(qC8u);
            var bkW2x = qC8u;
            var bom3x = cyT8L(MD4H);
            var UB8t = [];
            var cyQ8I = bom3x.length;
            for (var i = 0; i < cyQ8I; i++) {
                var bpB4F = bVO9F(bom3x[i]);
                bpB4F = bVO9F(bpB4F);
                var bpX4b = bTg2x(bpB4F, bkW2x);
                var cyP8H = czv8n(bpX4b, czt8l(bkW2x));
                bpX4b = bTg2x(cyP8H, qC8u);
                bhl2x(bpX4b, 0, UB8t, i * MI4M, MI4M);
                bkW2x = bom3x[i]
            }
            var byQ6K = [];
            bhl2x(UB8t, UB8t.length - bVm9d, byQ6K, 0, bVm9d);
            var bq3x = czi8a(byQ6K);
            if (bq3x > UB8t.length) {
                throw new Error("1006")
            }
            var qZ8R = [];
            bhl2x(UB8t, 0, qZ8R, 0, bq3x);
            return qZ8R
        };
        var cyO8G = function(WQ8I, K2x) {
            if (WQ8I == null) {
                return null
            }
            var bzc6W = new String(WQ8I);
            if (bzc6W.length == 0) {
                return []
            }
            var MD4H = bTC8u(bzc6W);
            if (K2x == null || K2x == undefined) {
                throw new Error("1007")
            }
            var qC8u = bTK8C(K2x);
            return bVU9L(MD4H, qC8u)
        };
        this.cyN8F = function(WQ8I, K2x) {
            var brc4g = cyO8G(WQ8I, K2x);
            var FB2x = new String(bTA8s(brc4g));
            var Af1x = [];
            var bsm4q = FB2x.length / 2;
            var bi2x = 0;
            for (var i = 0; i < bsm4q; i++) {
                Af1x.push("%");
                Af1x.push(FB2x.charAt(bi2x++));
                Af1x.push(FB2x.charAt(bi2x++))
            }
            return Af1x.join("")
        };
        k2x.cAg8Y = function(bsp4t, K2x) {
            return k2x.cyM8E(k2x.cEA9r(bsp4t), K2x)
        };
        k2x.cyM8E = function(bsp4t, K2x) {
            var brc4g = bVU9L(bsp4t, bTK8C(K2x));
            var FB2x = new String(bTA8s(brc4g));
            var Af1x = [];
            var bsm4q = FB2x.length / 2;
            var bi2x = 0;
            for (var i = 0; i < bsm4q; i++) {
                Af1x.push("%");
                Af1x.push(FB2x.charAt(bi2x++));
                Af1x.push(FB2x.charAt(bi2x++))
            }
            return Af1x.join("")
        }
    }
    window.settmusic = (new czx8p).cyN8F
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        K2x = "Search-tracks_",
        b2x;
    q2x.fr4v({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q2x) {
                return Q2x
            },
            onerror: function(Q2x, e2x) {
                if (Q2x.code == 407) {
                    e2x.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e2x, bg2x) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cyL8D(parseInt(e2x.data.type)) || "suggest",
                    keyword: e2x.data.s,
                    offset: e2x.offset
                })
            },
            format: function(Q2x, e2x) {
                if (Q2x.abroad) {
                    try {
                        Q2x.result = JSON.parse(decodeURIComponent(settmusic(Q2x.result, q2x.sk)))
                    } catch (e) {}
                }
                Q2x.result = Q2x.result || {};
                var i2x, cB3x, hK5P = [],
                    qs8k = e2x.data.s || "",
                    gc5h = e2x.data.limit,
                    u2x = parseInt(e2x.data.type) || 1,
                    m2x = Q2x.result;
                switch (u2x) {
                    case 1:
                        i2x = this.bzD6x(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cB3x = m2x.songCount;
                        break;
                    case 10:
                        i2x = m2x.albums;
                        cB3x = m2x.albumCount;
                        break;
                    case 100:
                        i2x = m2x.artists;
                        cB3x = m2x.artistCount;
                        break;
                    case 1e3:
                        i2x = m2x.playlists;
                        cB3x = m2x.playlistCount;
                        break;
                    case 1002:
                        i2x = m2x.userprofiles;
                        cB3x = m2x.userprofileCount;
                        break;
                    case 1004:
                        i2x = m2x.mvs;
                        cB3x = m2x.mvCount;
                        break;
                    case 1014:
                        i2x = l2x.bRh1x(m2x.videos, l2x.bRn1x);
                        cB3x = m2x.videoCount;
                        break;
                    case 1006:
                        i2x = this.bzD6x(m2x.songs, e2x.data.hlpretag, e2x.data.hlposttag);
                        cB3x = m2x.songCount;
                        break;
                    case 1009:
                        var rq8i = m2x.djRadios;
                        if (!!rq8i) {
                            k2x.bd2x(rq8i, function(D2x, r2x, cyK8C) {
                                D2x.xid = D2x.id;
                                D2x.id = D2x.id + "_rad"
                            });
                            if (rq8i.length) {
                                this.uK9B("radio_search-" + e2x.data.s, rq8i)
                            }
                        }
                        cB3x = Math.min(m2x.djprogramCount, 500);
                        i2x = m2x.djprograms || [];
                        if (e2x.data.isPub) {
                            k2x.mY7R(rq8i, function(D2x, r2x, cyK8C) {
                                D2x.stype = 1;
                                i2x.unshift(D2x)
                            });
                            cB3x = Math.min(i2x.length, 500)
                        }
                        break
                }
                this.z2x("onsearchload", Q2x);
                if (i2x && i2x.length) {
                    for (var i = 0; i < gc5h; i++) {
                        if (i < i2x.length) {
                            hK5P.push(i2x[i])
                        } else {
                            hK5P.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB3x || 0, qs8k.length < 3 ? 500 : 5e3),
                    list: hK5P
                }
            },
            onerror: function(Q2x, e2x) {
                e2x.onload(e2x, []);
                if (k2x.gE5J(e2x.onerror)) {
                    e2x.onerror(Q2x)
                }
            }
        }
    });
    q2x.FR2x = NEJ.C();
    b2x = q2x.FR2x.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.cyJ8B = function(K2x, e2x) {
        if (!K2x) return;
        if (!!this.bzM6G) v2x.kk6e(this.bzM6G);
        this.bzM6G = this.cp3x("search-suggest", NEJ.X({
            data: {
                s: K2x,
                limit: 8
            }
        }, e2x))
    };
    b2x.cyG8y = function(K2x, e2x) {
        if (!K2x) return;
        this.cp3x("search-multimatch", NEJ.X({
            data: {
                s: K2x
            }
        }, e2x))
    };
    b2x.bzD6x = function() {
        var cyF8x = function(hx5C, bzQ6K, bzR6L) {
            var cyE8w = hx5C.match(new RegExp(bzQ6K + "(.+?)" + bzR6L, "gi")),
                cz3x = 0;
            k2x.bd2x(cyE8w, function(p2x) {
                cz3x += p2x.replace(new RegExp(bzQ6K, "g"), "").replace(new RegExp(bzR6L, "g"), "").length
            });
            return cz3x
        };
        return function(jy6s, cyD8v, cyC8u) {
            var bAa6U = [];
            k2x.bd2x(jy6s, function(bj3x, bc2x) {
                bj3x = l2x.FP2x(bj3x);
                var WX8P = bj3x.lyrics || [],
                    dt4x = WX8P.length,
                    jO6I = 0,
                    cB3x = 4,
                    Xa8S = {
                        l: 0,
                        v: 0
                    },
                    bxs6m;
                if (dt4x > 4) {
                    k2x.bd2x(WX8P, function(hx5C, r2x) {
                        var bAl6f = cyF8x(hx5C, cyD8v, cyC8u);
                        if (bAl6f > Xa8S.v) {
                            Xa8S.v = bAl6f;
                            Xa8S.l = r2x
                        }
                    });
                    jO6I = Xa8S.l;
                    jO6I = Math.max(jO6I, 0);
                    bxs6m = dt4x - jO6I - 4;
                    if (bxs6m < 0) jO6I += bxs6m;
                    bj3x.lrcAbstractEnd = jO6I + cB3x - 1
                } else {
                    bj3x.lrcAbstractEnd = dt4x - 1
                }
                bj3x.lrcAbstractStart = jO6I;
                bj3x.indexId = (WX8P && WX8P.length ? "L" : "NL") + bj3x.id;
                bAa6U.push(bj3x)
            });
            return bAa6U
        }
    }();
    b2x.cyL8D = function(u2x) {
        switch (u2x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1014:
                return "video";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        E2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        dw4A = c2x("nm.i"),
        M2x = c2x("nm.m.sch"),
        b2x, L2x;
    var Xd8V = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M2x.Uc8U = NEJ.C();
    b2x = M2x.Uc8U.N2x(I2x.cJ3x);
    b2x.cw3x = function(g2x) {
        this.cF3x();
        this.bW3x(g2x);
        this.S2x = q2x.FR2x.gk5p()
    };
    b2x.bW3x = function(g2x) {
        this.o2x = g2x;
        var i2x = a1x.H2x(g2x, "j-flag");
        this.eU4Y = i2x[0];
        this.bfI1x = i2x[1];
        this.cr3x = i2x[2];
        this.nk7d = i2x[3];
        h2x.s2x(this.eU4Y, "input", this.gh5m.f2x(this));
        h2x.s2x(this.eU4Y, "keyup", this.gh5m.f2x(this));
        h2x.s2x(this.eU4Y, "focus", this.gQ5V.f2x(this));
        h2x.s2x(this.bfI1x, "click", this.gQ5V.f2x(this));
        h2x.s2x(this.eU4Y, "blur", this.bfS1x.f2x(this));
        h2x.s2x(this.cr3x, "click", this.Xg8Y.f2x(this));
        h2x.s2x(this.o2x, "keydown", this.bhE2x.f2x(this));
        h2x.s2x(this.o2x, "keypress", this.Xr8j.f2x(this));
        h2x.s2x(this.nk7d, "mouseover", this.TG7z.f2x(this));
        h2x.s2x(this.nk7d, "mouseout", this.TG7z.f2x(this));
        if (this.eU4Y.value) {
            this.eU4Y.value = ""
        }
        if (this.eU4Y.style.opacity != null) {
            this.eU4Y.style.opacity = 1
        }
    };
    b2x.gh5m = function(d2x) {
        if (d2x.type == "keyup" && d2x.keyCode == 8 || d2x.keyCode == 46) {
            this.GB3x()
        } else if (d2x.type == "input" || d2x.type == "propertychange") {
            setTimeout(this.GB3x.f2x(this), 0)
        }
    };
    b2x.gQ5V = function() {
        this.xU0x(this.bfI1x, !1);
        a1x.y2x(this.o2x, "m-srch-fcs");
        this.eU4Y.focus();
        this.GB3x();
        a1x.y2x((a1x.H2x("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b2x.bfS1x = function() {
        if (!this.eU4Y.value) {
            this.xU0x(this.bfI1x, !0)
        }
        var GE3x = a1x.H2x(this.nk7d, "slt");
        if (this.Xw9n(this.nk7d) && GE3x.length > 0 && a1x.t2x(GE3x[0], "type")) {
            var hk5p = GE3x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hk5p)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eU4Y.value
                })
            }
            this.bir2x(GE3x[0].href)
        }
        this.xU0x(this.nk7d, !1);
        a1x.x2x(this.o2x, "m-srch-fcs")
    };
    b2x.xU0x = function(g2x, lY6S) {
        a1x.ba2x(g2x, "display", !lY6S ? "none" : "")
    };
    b2x.Xw9n = function(g2x) {
        return a1x.df3x(g2x, "display") != "none"
    };
    b2x.GB3x = function() {
        var cyB8t = function(ig5l) {
            ig5l = k2x.Az1x(ig5l);
            var eG4K = this.o2x.clientWidth > 250 ? 41 : 17;
            if (l2x.UJ8B(ig5l) > eG4K) {
                ig5l = l2x.AW1x(ig5l, eG4K) + "..."
            }
            return k2x.dH4L(ig5l)
        };
        var Xx9o = function(m2x) {
            return m2x.songs && m2x.songs.length || m2x.albums && m2x.albums.length || m2x.artists && m2x.artists.length || m2x.playlists && m2x.playlists.length
        };
        var nZ7S = function(uk9b, d2x) {
            if (!l2x.bGr8j(this.eU4Y) || l2x.kw6q(this.eU4Y.value)) {
                this.xU0x(this.nk7d, !1);
                return
            }
            d2x.keyword = k2x.dH4L(uk9b);
            var dW4a = a1x.cc3x("m-search-suggest", d2x, {
                    mark: l2x.czA8s.ew4A(this, uk9b),
                    cutStr: cyB8t.f2x(this)
                }),
                tL9C = d2x.result.order;
            this.nk7d.innerHTML = dW4a;
            this.xU0x(this.nk7d, Xx9o(d2x.result) ? !0 : !1);
            if (!!tL9C && !!tL9C.length && Xd8V[tL9C[0]]) {
                this.biy2x = {
                    keyword: uk9b,
                    type: Xd8V[tL9C[0]]
                }
            }
        };
        var cyA8s = function() {
            this.xU0x(this.nk7d, !1);
            return
        };
        return function() {
            var D2x = this.eU4Y.value;
            if (l2x.kw6q(D2x)) {
                this.xU0x(this.nk7d, !1);
                return
            }
            this.S2x.cyJ8B(D2x, {
                onload: nZ7S.f2x(this, D2x),
                onForbidden: cyA8s.f2x(this)
            })
        }
    }();
    b2x.Xr8j = function(d2x) {
        if (d2x.keyCode != 13) return;
        var GE3x = a1x.H2x(this.nk7d, "slt");
        if (this.Xw9n(this.nk7d) && GE3x.length > 0) {
            this.bir2x(GE3x[0].href);
            this.xU0x(this.nk7d, !1);
            return
        }
        this.Xg8Y();
        this.xU0x(this.nk7d, !1)
    };
    b2x.bhE2x = function(d2x) {
        if (!this.Xw9n(this.nk7d)) return;
        var i2x = a1x.H2x(this.nk7d, "xtag"),
            dt4x = i2x.length,
            r2x = k2x.dl4p(i2x, function(p2x) {
                return a1x.bE3x(p2x, "slt")
            });
        switch (d2x.keyCode) {
            case 38:
                if (r2x >= 0) a1x.x2x(i2x[r2x], "slt");
                a1x.y2x(i2x[r2x <= 0 ? dt4x - 1 : r2x - 1], "slt");
                break;
            case 40:
                if (r2x >= 0) a1x.x2x(i2x[r2x], "slt");
                a1x.y2x(i2x[(r2x + 1) % dt4x], "slt");
                break
        }
    };
    b2x.TG7z = function(d2x) {
        if (!this.Xw9n(this.nk7d)) return;
        var Ty7r, F2x = h2x.X2x(d2x),
            i2x = a1x.H2x(this.nk7d, "xtag");
        if (F2x.tagName.toLowerCase() == "a") Ty7r = F2x;
        else if (F2x.parentNode.tagName.toLowerCase() == "a") Ty7r = F2x.parentNode;
        if (!Ty7r) return;
        k2x.bd2x(i2x, function(p2x) {
            a1x.x2x(p2x, "slt");
            a1x.t2x(p2x, "type", "")
        });
        if (d2x.type == "mouseout") return;
        a1x.y2x(Ty7r, "slt");
        a1x.t2x(Ty7r, "type", "mouse")
    };
    b2x.Xg8Y = function() {
        var dR4V = location.hash,
            r2x = dR4V.indexOf("?"),
            bv3x = k2x.hu5z(dR4V.substring(r2x + 1));
        bv3x.s = this.eU4Y.value;
        if (l2x.kw6q(bv3x.s)) return;
        if (!bv3x.type && this.biy2x && this.biy2x.keyword == bv3x.s) {
            bv3x.type = this.biy2x.type
        }
        this.bir2x("/search/#/?" + k2x.cC3x(bv3x));
        this.eU4Y.blur()
    };
    b2x.bir2x = function(Y2x) {
        if (location.dispatch2) {
            location.dispatch2(Y2x)
        } else {
            location.href = Y2x
        }
    };
    M2x.Uc8U.cyz8r = function() {
        var i2x = a1x.H2x(document.body, "j-suggest");
        k2x.bd2x(i2x, function(p2x) {
            new M2x.Uc8U(p2x)
        })
    };
    M2x.Uc8U.cyz8r()
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        b2x;
    q2x.fr4v({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q2x) {
                return {
                    total: Q2x.size || 0,
                    list: Q2x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q2x) {
                return {
                    total: Q2x.size || 0,
                    list: Q2x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q2x) {
                return Q2x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q2x, e2x) {
                if (e2x.offset == 0) {
                    var pH8z = Q2x.data[0];
                    this.z2x("onfirstload", pH8z);
                    Q2x.data.splice(0, 1);
                    return Q2x.data
                } else {
                    return Q2x.data
                }
            }
        }
    });
    q2x.GR3x = NEJ.C();
    b2x = q2x.GR3x.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.biL2x = function() {
        var te9V = "LOCAL_FLAG";
        return function(u2x, cyx8p) {
            var j2x = this.Hl3x(te9V, {});
            if (j2x[u2x]) {
                return true
            } else {
                if (!cyx8p) {
                    j2x[u2x] = true;
                    this.xr0x(te9V, j2x)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        biX2x;
    if (!!O2x.oj7c) return;
    O2x.oj7c = NEJ.C();
    biX2x = O2x.oj7c.N2x(O2x.cJ3x);
    biX2x.bm3x = function() {
        var cyw8o = function(d2x) {
            d2x.matched = d2x.source == d2x.target
        };
        return function(e2x) {
            e2x.oncheck = e2x.oncheck || cyw8o;
            this.bn3x(e2x);
            this.bU3x = e2x.list;
            this.jk5p = e2x.dataset || "id";
            this.kT6N = e2x.selected || "js-selected"
        }
    }();
    biX2x.od7W = function(D2x) {
        var F2x, d2x = {
            target: D2x
        };
        k2x.bd2x(this.bU3x, function(g2x) {
            delete d2x.matched;
            d2x.source = a1x.t2x(g2x, this.jk5p);
            this.z2x("oncheck", d2x);
            if (!d2x.matched) {
                a1x.x2x(g2x, this.kT6N)
            } else {
                F2x = g2x;
                a1x.y2x(g2x, this.kT6N)
            }
        }, this);
        return F2x
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ut"),
        pR8J;
    if (!!O2x.dh3x) return;
    O2x.dh3x = NEJ.C();
    pR8J = O2x.dh3x.N2x(O2x.cJ3x);
    pR8J.cw3x = function() {
        this.jf5k = {};
        this.cF3x();
        this.bL3x()
    };
    pR8J.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.bjl2x = e2x.umi || "";
        this.Dg2x = e2x.dispatcher;
        this.Me4i = e2x.composite || bb2x;
        this.bpA4E({
            onshow: this.eX4b.f2x(this),
            onhide: this.kl6f.f2x(this),
            onrefresh: this.eE4I.f2x(this),
            onmessage: this.qS8K.f2x(this),
            onbeforehide: this.cyv8n.f2x(this)
        })
    };
    pR8J.bC3x = function() {
        delete this.bjl2x;
        this.jf5k = {};
        this.bG3x()
    };
    pR8J.wi0x = function(d2x) {
        if (!!d2x) d2x.stopped = !0
    };
    pR8J.bL3x = br3x;
    pR8J.eX4b = br3x;
    pR8J.kl6f = br3x;
    pR8J.eE4I = br3x;
    pR8J.qS8K = br3x;
    pR8J.cyv8n = br3x;
    pR8J.no7h = function(nI7B, bF3x, fn4r) {
        this.Dg2x.bjs2x({
            to: nI7B,
            mode: fn4r || 0,
            data: bF3x,
            from: this.bjl2x
        })
    };
    pR8J.cGe0x = function(u2x, j2x) {
        this.Dg2x.Du2x(u2x, {
            from: this.bjl2x,
            data: j2x
        })
    };
    pR8J.cGg0x = function() {
        this.Dg2x.mw7p.apply(this.Dg2x, arguments)
    };
    pR8J.cyp8h = function() {
        return this.jf5k
    };
    a1x.XB9s = function() {
        if (!!window.dispatcher) {
            dispatcher.bDz7s.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        br3x = NEJ.F,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        zU1x;
    if (!!O2x.du4y) return;
    O2x.du4y = NEJ.C();
    zU1x = O2x.du4y.N2x(O2x.dh3x);
    zU1x.cyo8g = function(e2x) {
        var bI3x;
        if (!bI3x) {
            var j2x = e2x.input || bb2x;
            bI3x = a1x.B2x(j2x.parent)
        }
        if (!bI3x) {
            var j2x = e2x.data || bb2x;
            bI3x = a1x.B2x(j2x.parent)
        }
        if (!bI3x) {
            bI3x = a1x.B2x(e2x.parent)
        }
        return bI3x
    };
    zU1x.eX4b = function(e2x) {
        var bI3x = this.cyo8g(e2x);
        if (!!bI3x && !!this.o2x) bI3x.appendChild(this.o2x);
        this.gL5Q(e2x);
        this.bDN7G("onshow", e2x);
        this.eE4I(e2x)
    };
    zU1x.eE4I = function(e2x) {
        this.gj5o(e2x);
        this.bDN7G("onrefresh", e2x)
    };
    zU1x.kl6f = function() {
        this.ll6f();
        this.cyn8f();
        a1x.mR7K(this.o2x)
    };
    zU1x.bDT7M = function() {
        var gO5T = /^onshow|onrefresh|delay$/;
        return function(cl3x) {
            return gO5T.test(cl3x)
        }
    }();
    zU1x.bDX7Q = br3x;
    zU1x.bDN7G = function() {
        var bDZ7S = function(bv3x, e2x, cl3x, qu8m) {
            if (this.bDT7M(qu8m)) return;
            if (!!bv3x) cl3x += (cl3x.indexOf("?") > 1 ? "&" : "?") + bv3x;
            var dn4r = this.bDX7Q(qu8m, e2x) || {};
            dn4r.location = e2x;
            dn4r.parent = this.jf5k[qu8m];
            this.Dg2x.iA5F(cl3x, {
                input: dn4r
            })
        };
        return function(u2x, e2x) {
            if (!e2x.nodelay) {
                if (!!this.Me4i.delay) return;
                var bEc7V = this.Me4i[u2x] || bb2x;
                if (bEc7V.delay) return
            }
            var bv3x = k2x.cC3x(e2x.param) || "";
            if (u2x == "onrefresh") {
                k2x.eI4M(this.Me4i, bDZ7S.f2x(this, bv3x, e2x))
            }
            k2x.eI4M(bEc7V, bDZ7S.f2x(this, bv3x, e2x))
        }
    }();
    zU1x.cyn8f = function() {
        var Da2x = function(cl3x, qu8m) {
            if (!this.bDT7M(qu8m)) this.Dg2x.bt3x(cl3x)
        };
        return function() {
            k2x.eI4M(this.Me4i, Da2x, this);
            k2x.eI4M(this.Me4i.onshow, Da2x, this);
            k2x.eI4M(this.Me4i.onrefresh, Da2x, this)
        }
    }()
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        E2x = c2x("nm.m"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        b2x, L2x;
    E2x.Tk7d = NEJ.C();
    b2x = E2x.Tk7d.N2x(I2x.cJ3x);
    b2x.cw3x = function() {
        this.cF3x();
        this.o2x = a1x.B2x("g-topbar");
        var i2x = a1x.H2x(this.o2x, "j-tflag");
        this.bjK2x = i2x[0];
        this.HM3x = i2x[1];
        this.bEi7b = i2x[2];
        this.bjR2x = i2x[3];
        this.cym8e = I2x.oj7c.A2x({
            list: this.bjK2x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bjX2x = I2x.oj7c.A2x({
            list: this.bjR2x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX3x([
            [this.o2x, "click", this.Tg7Z.f2x(this)],
            [this.HM3x, "click", this.cL3x.f2x(this)],
            [this.HM3x, "mouseout", this.bEv7o.f2x(this, 0)],
            [this.HM3x, "mouseover", this.bEv7o.f2x(this, 1)]
        ]);
        window.scrollTopbar = this.cyl8d.f2x(this);
        window.matchNav = this.bEx7q.f2x(this);
        window.polling = this.wk0x.f2x(this);
        this.blb3x = q2x.GR3x.A2x();
        this.cyk8c();
        this.LY4c();
        var bv3x = k2x.hu5z(location.href.split("?")[1]) || {};
        if (bv3x.market) {
            a1x.B2x("topbar-download-link").href = "/download?market=" + bv3x.market
        }
        var blc3x = a1x.H2x(this.o2x, "j-showoff");
        if (blc3x && !this.blb3x.biL2x("newMvSearch")) {
            a1x.x2x(blc3x[0], "f-hide");
            window.setTimeout(function() {
                a1x.y2x(blc3x[0], "f-hide")
            }, 5e3)
        }
        l2x.oi7b()
    };
    b2x.wk0x = function(d2x) {
        var dR4V = l2x.Mv4z();
        if (!/^\/msg/.test(dR4V)) {
            var wu0x = 0;
            wu0x += d2x.comment;
            wu0x += d2x.forward;
            wu0x += d2x.msg;
            wu0x += d2x.notice;
            if (wu0x > 0) {
                wu0x = wu0x > 99 ? "99+" : wu0x;
                this.SW7P.innerText = wu0x;
                this.LV4Z.innerText = wu0x;
                a1x.x2x(this.SW7P, "f-hide");
                a1x.x2x(this.LV4Z, "f-hide");
                this.XP9G = true
            } else {
                a1x.y2x(this.SW7P, "f-hide");
                a1x.y2x(this.LV4Z, "f-hide");
                this.XP9G = false
            }
            var eV4Z = "/at";
            if (d2x.notice) eV4Z = "/notify";
            if (d2x.comment) eV4Z = "/comment";
            if (d2x.msg > 0) eV4Z = "/private";
            if (d2x.forward > 0) eV4Z = "/at";
            this.LV4Z.parentNode.href = "/msg/#" + eV4Z
        } else {
            this.LV4Z.parentNode.href = "javascript:;";
            a1x.y2x(this.SW7P, "f-hide");
            a1x.y2x(this.LV4Z, "f-hide");
            this.XP9G = false
        }
        var i2x = a1x.H2x(this.bjK2x, "j-t");
        if (!/^\/friend/.test(dR4V)) {
            if (i2x && i2x.length) {
                a1x.ba2x(i2x[0], "display", d2x.event > 0 ? "" : "none")
            }
        } else {
            a1x.ba2x(i2x[0], "display", "none")
        }
    };
    b2x.cL3x = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action");
        if (g2x) {
            switch (a1x.t2x(g2x, "action")) {
                case "login":
                    h2x.cn3x(d2x);
                    var u2x = a1x.t2x(g2x, "type");
                    if (u2x) {
                        if (u2x == "sina" || u2x == "tencent") {
                            this.Dk2x = g2x.href;
                            l2x.Dr2x(this.la6U.f2x(this));
                            this.SO7H = top.open()
                        } else top.login(u2x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h2x.cn3x(d2x);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.blb3x.biL2x("storeNew")) {
                        a1x.y2x(this.cGh0x, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.blb3x.biL2x("levelNew")) {
                        a1x.y2x(this.cGi0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b2x.la6U = function(cG3x) {
        this.Dk2x += "&checkToken=" + cG3x || "";
        this.SO7H.location.href = this.Dk2x
    };
    b2x.Tg7Z = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action");
        if (!g2x) return;
        var V2x = a1x.t2x(g2x, "action");
        switch (V2x) {
            case "bilog":
                var bnd3x = a1x.t2x(g2x, "logAction"),
                    bnK3x = a1x.t2x(g2x, "logJson");
                window.log(bnd3x, bnK3x);
                break
        }
    };
    b2x.bEv7o = function(LM4Q, d2x) {
        if (this.boi3x) {
            this.boi3x.style.display = !LM4Q ? "none" : "";
            (LM4Q || !this.XP9G ? a1x.y2x : a1x.x2x).call(window, this.SW7P, "f-hide")
        }
    };
    b2x.cyl8d = function(gb5g) {
        a1x.ba2x(this.o2x, "top", -gb5g + "px")
    };
    b2x.bEx7q = function(eV4Z, cyh8Z) {
        this.cym8e.od7W(eV4Z);
        if (eV4Z == "discover") {
            a1x.y2x(this.bEi7b, "f-hide");
            a1x.x2x(this.bjR2x, "f-hide");
            window.g_topBarHeight = 105;
            this.bjX2x.od7W(cyh8Z)
        } else {
            a1x.x2x(this.bEi7b, "f-hide");
            a1x.y2x(this.bjR2x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b2x.cyk8c = function() {
        var em4q = a1x.B2x("g_iframe");
        if (!em4q) return;
        var gy5D = em4q.contentWindow.document.getElementById("g_top");
        this.bEx7q(a1x.t2x(gy5D, "module"), a1x.t2x(gy5D, "sub"))
    };
    var Yb9S = {},
        bFr8j = /\/\/\w+/,
        cyg8Y = {
            avatarUrl: function(a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bFr8j, "") !== b.replace(bFr8j, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b2x.cyc8U = function(Yi9Z) {
        var nU7N = k2x.dl4p(cyg8Y, function(D2x, K2x) {
            if (k2x.gE5J(D2x)) {
                return D2x(Yi9Z[K2x], Yb9S[K2x])
            } else {
                return Yi9Z[K2x] !== Yb9S[K2x]
            }
        });
        Yb9S = Yi9Z;
        return Yi9Z[nU7N]
    };
    b2x.LY4c = function() {
        var dp4t = GUser || {},
            cyb8T = GUserAcc || {};
        if (dp4t && dp4t.userId) {
            var bFC8u = NEJ.X(dp4t, cyb8T);
            if (this.cyc8U(bFC8u)) {
                a1x.dA4E(this.HM3x, "m-topbar-user-login", bFC8u)
            }
        } else {
            Yb9S = {};
            this.HM3x.innerHTML = a1x.iN5S("m-topbar-user-unlogin");
            var i2x = a1x.H2x(this.bjK2x, "j-t");
            a1x.ba2x(i2x[0], "display", "none")
        }
        a1x.x2x(this.HM3x, "f-hide");
        this.XP9G = false;
        var i2x = a1x.H2x(this.HM3x, "j-uflag");
        if (dp4t && dp4t.userId) {
            this.SW7P = i2x.shift();
            this.boi3x = i2x.shift();
            this.LV4Z = i2x.shift()
        } else {
            this.boi3x = i2x.shift()
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        b2x, L2x;
    q2x.fr4v({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q2x) {
                h2x.z2x(q2x.tx9o, "message", Q2x)
            }
        }
    });
    q2x.tx9o = NEJ.C();
    b2x = q2x.tx9o.N2x(q2x.hM5R);
    b2x.Yk9b = function() {
        this.cp3x("polling-get", {})
    };
    b2x.wb0x = function() {
        var eh4l;
        return function() {
            if (!!eh4l) return;
            eh4l = window.setInterval(this.Yk9b.f2x(this), 1e5);
            this.Yk9b()
        }
    }();
    I2x.fN4R.A2x({
        event: "message",
        element: q2x.tx9o
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        };
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() {
            this.open = true
        };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;

            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
                args = arguments;
            WebSocket.Yl9c(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.Yl9c(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.Sn7g.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bpZ4d();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return {
                        w3: aa,
                        pv: ag,
                        wk: af,
                        ie: X,
                        win: ae,
                        mac: ac
                    }
                }(),
                k = function() {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function() {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function() {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function() {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gY5d = WebSocket.cya8S++;
            WebSocket.bFU8M[self.gY5d] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mj7c = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Yl9c(function() {
                    WebSocket.pG8y.create(self.gY5d, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pG8y.send(this.gY5d, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.pG8y.close(this.gY5d)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.mj7c)) {
                this.mj7c[type] = []
            }
            this.mj7c[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.mj7c)) return;
            var events = this.mj7c[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.mj7c[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cxZ8R = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bGa8S(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bGa8S("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cxW8O("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bGa8S = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.prototype.cxW8O = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.pG8y = null;
        WebSocket.bFU8M = {};
        WebSocket.Sn7g = [];
        WebSocket.cya8S = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Yl9c(function() {
                WebSocket.pG8y.loadManualPolicyFile(url)
            })
        };
        WebSocket.bpZ4d = function() {
            if (WebSocket.pG8y) return;
            if (WebSocket.cxV8N) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxV8N
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cxU8M()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cGj0x = function() {
            setTimeout(function() {
                WebSocket.pG8y = document.getElementById("webSocketFlash");
                WebSocket.pG8y.setCallerUrl(location.href);
                WebSocket.pG8y.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Sn7g.length; ++i) {
                    WebSocket.Sn7g[i]()
                }
                WebSocket.Sn7g = []
            }, 0)
        };
        WebSocket.cGk0x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.pG8y.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFU8M[events[i].webSocketId].cxZ8R(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cGl0x = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dX4b = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Yl9c = function(task) {
            if (WebSocket.pG8y) {
                task()
            } else {
                WebSocket.Sn7g.push(task)
            }
        };
        WebSocket.cxU8M = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bpZ4d()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bpZ4d()
                })
            }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        };
        HTMLFile.prototype.c2x = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c2x(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c2x = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.eg4k) this.eg4k = {};
        this.bGk8c = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.eg4k || !this.eg4k.error || isArray(this.eg4k.error) && !this.eg4k.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.eg4k) return false;
        var handler = this.eg4k[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.eg4k) this.eg4k = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.eg4k[type]) {
            this.eg4k[type] = listener
        } else if (isArray(this.eg4k[type])) {
            this.eg4k[type].push(listener)
        } else {
            this.eg4k[type] = [this.eg4k[type], listener]
        }
        if (isArray(this.eg4k[type]) && !this.eg4k[type].warned) {
            var m;
            if (this.bGk8c !== undefined) {
                m = this.bGk8c
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.eg4k[type].length > m) {
                this.eg4k[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eg4k[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.eg4k || !this.eg4k[type]) return this;
        var list = this.eg4k[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.eg4k[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.eg4k = {};
            return this
        }
        var events = this.eg4k && this.eg4k[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.eg4k[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.eg4k) this.eg4k = {};
        if (!this.eg4k[type]) this.eg4k[type] = [];
        if (!isArray(this.eg4k[type])) {
            this.eg4k[type] = [this.eg4k[type]]
        }
        return this.eg4k[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        dE4I = c2x("nm.u"),
        q2x = c2x("nm.d"),
        Si7b = c2x("pomelo"),
        U2x = 0,
        b2x, L2x;
    q2x.fr4v({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q2x) {
                U2x = 2;
                var tt9k = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j2x = Q2x.account || bb2x,
                    do4s = GUser.userId;
                Si7b.init(tt9k.host, tt9k.port, true, this.cxP8H.f2x(this, {
                    user: do4s,
                    nonce: j2x.nonce,
                    domain: tt9k.domain,
                    productKey: tt9k.key,
                    signature: j2x.signature,
                    expire_time: j2x.expireTime
                }))
            },
            onerror: function() {
                return this.bqo4s()
            }
        }
    });
    q2x.CU2x = NEJ.C();
    b2x = q2x.CU2x.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        var rb8T = !1;
        return function(e2x) {
            if (!rb8T) {
                rb8T = !0
            }
            this.cF3x(e2x);
            Si7b.on("specify", this.qS8K.f2x(this));
            Si7b.on("broadcast", this.qS8K.f2x(this))
        }
    }();
    b2x.qS8K = function(d2x) {
        k2x.bd2x(d2x, function(bF3x) {
            h2x.z2x(q2x.CU2x, "message", bF3x)
        }, this)
    };
    b2x.bqo4s = function() {
        var bA3x = 500;
        return function() {
            U2x = 0;
            Si7b.disconnect();
            if (bA3x > 6e4) bA3x = 500;
            bA3x *= 2
        }
    }();
    b2x.cxP8H = function(e2x, ca3x) {
        if (!!ca3x) {
            return this.bqo4s()
        }
        U2x = 3;
        Si7b.registerAndBind(e2x, function(m2x) {
            if (m2x.code != 200) {
                return this.bqo4s()
            }
            U2x = 4
        }.f2x(this))
    };
    b2x.cGn0x = function() {
        dE4I.cxM8E.gk5p().cGo0x()
    };
    b2x.cGp0x = function() {
        dE4I.cxM8E.gk5p().cGq0x()
    };
    b2x.btl5q = function() {
        var rb8T = !1;
        return function() {
            if (rb8T) return;
            rb8T = !0;
            this.cp3x("polling-init", {})
        }
    }();
    I2x.fN4R.A2x({
        event: "message",
        element: q2x.CU2x
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        dx4B = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        cx3x = c2x("api"),
        b2x, L2x;
    var gi5n = a1x.jq6k('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n2x.btG5L = NEJ.C();
    b2x = n2x.btG5L.N2x(n2x.eq4u);
    L2x = n2x.btG5L.cs3x;
    b2x.bm3x = function(e2x) {
        e2x.title = "意见反馈";
        this.bn3x(e2x)
    };
    b2x.ch3x = function() {
        this.cf3x = gi5n
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.hz5E = {};
        var LB4F = a1x.H2x;
        var Eu2x = h2x.s2x;
        this.hz5E.submit_btn = LB4F(this.o2x, "u-btn2")[0];
        this.hz5E.cancle_btn = LB4F(this.o2x, "u-btn2")[1];
        this.hz5E.prompt_msg = LB4F(this.o2x, "u-err")[0];
        this.hz5E.zs = LB4F(this.o2x, "zs")[0];
        a1x.ba2x(this.hz5E.zs, "display", "none");
        this.hz5E.fb_txt = LB4F(this.o2x, "u-txt")[0];
        this.hz5E.contact = LB4F(this.o2x, "u-txt")[1];
        a1x.gv5A(this.hz5E.fb_txt, "holder");
        a1x.gv5A(this.hz5E.contact, "holder");
        if (a1x.bE3x(this.hz5E.fb_txt.parentNode, "holder-parent")) {
            a1x.ba2x(this.hz5E.fb_txt.parentNode, "display", "block")
        }
        if (a1x.bE3x(this.hz5E.contact.parentNode, "holder-parent")) {
            a1x.ba2x(this.hz5E.contact.parentNode, "display", "block")
        }
        Eu2x(this.hz5E.submit_btn, "click", this.cxI8A.f2x(this));
        Eu2x(this.hz5E.cancle_btn, "click", this.cxH8z.f2x(this));
        Eu2x(this.hz5E.prompt_msg, "msgShow", this.cxG8y.f2x(this));
        Eu2x(this.hz5E.fb_txt, "keyup", this.vU0x.f2x(this));
        Eu2x(this.hz5E.fb_txt, "input", this.fR4V.f2x(this));
        Eu2x(this.hz5E.contact, "keyup", this.cxF8x.f2x(this));
        Eu2x(this.hz5E.contact, "input", this.bHm8e.f2x(this));
        this.kO6I = q2x.hP5U.A2x()
    };
    b2x.cxI8A = function(d2x) {
        h2x.bh2x(d2x);
        if (this.cQ3x()) return;
        var bo3x = this.hz5E.fb_txt.value.trim();
        var bq3x = bo3x.length;
        var e2x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHq8i = this.hz5E.contact.value.trim();
        var YM9D = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l2x.bqp4t(),
            contact: bHq8i
        };
        var j2x = {
                content: bo3x,
                client: "web",
                xInfo: JSON.stringify(YM9D)
            },
            nO7H = this.kO6I.cDz9q();
        if (nO7H && nO7H.length) {
            j2x.log = nO7H.join("\n")
        }
        if (bq3x == 0) {
            this.hz5E.prompt_msg.innerHTML = "反馈内容不能为空";
            a1x.ba2x(this.hz5E.prompt_msg, "display", "block");
            return
        }
        if (bHq8i.length > 100) {
            this.hz5E.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a1x.ba2x(this.hz5E.prompt_msg, "display", "block");
            return
        }
        this.cQ3x(true);
        e2x.data = k2x.cC3x(j2x);
        e2x.onload = this.cxE8w.f2x(this);
        e2x.onerror = this.iZ5e.f2x(this);
        v2x.bl3x("/api/feedback/web", e2x)
    };
    b2x.fR4V = function(d2x) {
        var bq3x = this.hz5E.fb_txt.value.trim().length;
        if (bq3x > 0) a1x.ba2x(this.hz5E.prompt_msg, "display", "none");
        dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "7.0" ? setTimeout(this.gh5m.f2x(this), 0) : this.gh5m()
    };
    b2x.vU0x = function(d2x) {
        if (d2x.keyCode === 8) this.gh5m()
    };
    b2x.gh5m = function() {
        var bq3x = this.hz5E.fb_txt.value.trim().length;
        this.hz5E.zs.innerHTML = !bq3x ? "0/140" : bq3x + "/140"
    };
    b2x.bHm8e = function(d2x) {
        var bq3x = this.hz5E.contact.value.trim().length;
        if (bq3x > 0) a1x.ba2x(this.hz5E.prompt_msg, "display", "none")
    };
    b2x.cxF8x = function(d2x) {
        if (d2x.keyCode === 8) this.bHm8e()
    };
    b2x.cxH8z = function(d2x) {
        h2x.cn3x(d2x);
        this.bt3x()
    };
    b2x.cxG8y = function(d2x) {
        var g2x = h2x.X2x(d2x);
        g2x.innerHTML = "请输入反馈内容"
    };
    b2x.cGs0x = function(cGt0x) {
        var g2x = h2x.X2x(d2x);
        g2x.innerHTML = ""
    };
    b2x.cxE8w = function(m2x) {
        this.cQ3x(false);
        this.bt3x();
        n2x.Z2x.J2x({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b2x.iZ5e = function(m2x) {
        this.cQ3x(false);
        n2x.Z2x.J2x({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b2x.cQ3x = function(dc3x) {
        return this.dV4Z(this.hz5E.submit_btn, dc3x, "发送意见", "发送中...")
    };
    b2x.J2x = function() {
        L2x.J2x.call(this);
        this.cQ3x(false);
        this.hz5E.fb_txt.value = "";
        this.hz5E.contact.value = "";
        a1x.ba2x(this.hz5E.prompt_msg, "display", "none");
        this.gh5m()
    };
    l2x.cxz8r = function(e2x) {
        e2x = e2x || {};
        if (e2x.title === undefined) e2x.title = "意见反馈";
        n2x.btG5L.J2x(e2x)
    };
    cx3x.feedback = l2x.feedback = l2x.cxz8r
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        O2x = c2x("nej.ui"),
        b2x;
    if (!!O2x.zF1x) return;
    O2x.zF1x = NEJ.C();
    b2x = O2x.zF1x.N2x(O2x.ej4n);
    b2x.cw3x = function() {
        this.gY5d = this.bIc8U();
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.cq3x = e2x.index;
        this.gz5E = e2x.total;
        this.hA5F = e2x.range;
        this.gM5R(e2x.data)
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.bk3x;
        delete this.cq3x;
        delete this.gz5E;
        delete this.hA5F
    };
    b2x.ix5C = br3x;
    b2x.bIc8U = function() {
        var gG5L = +(new Date);
        return function() {
            return "itm-" + ++gG5L
        }
    }();
    b2x.Fo2x = function() {
        return this.gY5d
    };
    b2x.ii5n = function() {
        return this.bk3x
    };
    b2x.gM5R = function(j2x) {
        this.bk3x = j2x || {};
        this.ix5C(this.bk3x)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        O2x = c2x("nej.ui"),
        b2x, L2x;
    if (!!O2x.vP9G) return;
    O2x.vP9G = NEJ.C();
    b2x = O2x.vP9G.N2x(O2x.zF1x);
    L2x = O2x.vP9G.cs3x;
    b2x.bm3x = function(e2x) {
        this.cxy8q = e2x.pkey || "id";
        this.bn3x(e2x)
    };
    b2x.EV2x = function(j2x) {
        this.z2x("ondelete", {
            ext: j2x,
            id: this.Fo2x(),
            data: this.ii5n(),
            body: this.lK6E()
        })
    };
    b2x.tn9e = function(j2x) {
        this.z2x("onupdate", {
            ext: j2x,
            id: this.Fo2x(),
            data: this.ii5n(),
            body: this.lK6E()
        })
    };
    b2x.gM5R = function(j2x) {
        L2x.gM5R.apply(this, arguments);
        this.gY5d = this.bk3x[this.cxy8q] || this.bIc8U()
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ui"),
        b2x, jd5i, buQ5V;
    if (!!O2x.buZ5e) return;
    O2x.buZ5e = NEJ.C();
    b2x = O2x.buZ5e.N2x(O2x.ej4n);
    b2x.bm3x = function(e2x) {
        this.YR9I = NEJ.X({}, e2x);
        this.fS4W = NEJ.X({}, e2x);
        delete this.YR9I.onchange;
        this.fS4W.onchange = this.fZ5e.f2x(this);
        this.bn3x(e2x);
        this.cxx8p({
            number: e2x.number,
            label: e2x.label || bb2x
        })
    };
    b2x.bC3x = function() {
        this.bG3x();
        if (!!this.lu6o) {
            this.lu6o.T2x();
            delete this.lu6o
        }
        delete this.YR9I;
        delete this.fS4W;
        this.cxw8o();
        this.o2x.innerHTML = "&nbsp;"
    };
    b2x.ch3x = function() {
        this.md7W = jd5i
    };
    b2x.cxx8p = function(j2x) {
        a1x.dA4E(this.o2x, buQ5V, j2x);
        var gG5L = a1x.Ka4e();
        this.fS4W.list = a1x.H2x(this.o2x, "js-i-" + gG5L);
        this.fS4W.pbtn = (a1x.H2x(this.o2x, "js-p-" + gG5L) || fu4y)[0];
        this.fS4W.nbtn = (a1x.H2x(this.o2x, "js-n-" + gG5L) || fu4y)[0]
    };
    b2x.bW3x = function() {
        this.ci3x()
    };
    b2x.cGw0x = function(j2x) {
        return a1x.cc3x(buQ5V, j2x)
    };
    b2x.fZ5e = function(d2x) {
        if (this.Rr7k) return;
        var r2x = d2x.index,
            cB3x = d2x.total;
        this.Rr7k = !0;
        this.Rq7j(r2x, cB3x);
        k2x.bd2x(this.YT9K, function(tk9b) {
            tk9b.Rq7j(r2x, cB3x)
        });
        this.Rr7k = !1;
        this.z2x("onchange", d2x)
    };
    b2x.f2x = function(bI3x) {
        bI3x = a1x.B2x(bI3x);
        if (!bI3x) return this;
        var ct3x = NEJ.X({}, this.YR9I);
        ct3x.parent = bI3x;
        ct3x.index = this.tj9a();
        ct3x.total = this.lo6i();
        var tk9b = this.constructor.A2x(ct3x);
        tk9b.xx0x("onchange", this.fS4W.onchange);
        if (!this.YT9K) this.YT9K = [];
        this.YT9K.push(tk9b);
        return this
    };
    b2x.cxw8o = function() {
        var buG5L = function(tk9b, r2x, i2x) {
            tk9b.T2x();
            i2x.splice(r2x, 1)
        };
        return function() {
            k2x.mY7R(this.YT9K, buG5L)
        }
    }();
    b2x.kQ6K = function(r2x) {
        if (!this.lu6o) return;
        this.lu6o.kQ6K(r2x)
    };
    b2x.tj9a = function() {
        if (!this.lu6o) return 1;
        return this.lu6o.tj9a()
    };
    b2x.lo6i = function() {
        if (!this.lu6o) return 1;
        return this.lu6o.lo6i()
    };
    b2x.Rq7j = function(r2x, cB3x) {
        if (!this.lu6o) return;
        this.lu6o.Rq7j(r2x, cB3x)
    };
    b2x.bwz5E = function(cB3x) {
        if (!this.lu6o) return;
        this.lu6o.bwz5E(cB3x)
    };
    jd5i = a1x.ty9p(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    buQ5V = a1x.eC4G('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.YX9O) return;
    O2x.YX9O = NEJ.C();
    b2x = O2x.YX9O.N2x(O2x.cJ3x);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.YY9P = e2x.pbtn;
        this.cr3x = e2x.nbtn;
        this.Zf9W = e2x.sbtn;
        this.Zi9Z = e2x.ebtn;
        this.jk5p = e2x.event || "click";
        this.kT6N = e2x.selected || "js-selected";
        this.nT7M = e2x.disabled || "js-disabled";
        this.cxu8m(e2x.list);
        this.Rq7j(e2x.index || 1, e2x.total || 1)
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.bU3x;
        delete this.jk5p;
        delete this.YY9P;
        delete this.cr3x;
        delete this.Zf9W;
        delete this.Zi9Z;
        delete this.bKT9K;
        delete this.gz5E;
        delete this.cq3x;
        delete this.kT6N;
        delete this.nT7M
    };
    b2x.cxu8m = function() {
        var bfL1x = function(g2x) {
            this.bU3x.push(g2x);
            this.bX3x([
                [g2x, this.jk5p, this.cv3x.ew4A(this, 0)]
            ])
        };
        return function(i2x) {
            this.bU3x = [];
            this.bX3x([
                [this.YY9P, "click", this.cv3x.ew4A(this, -1)],
                [this.cr3x, "click", this.cv3x.ew4A(this, 1)],
                [this.Zf9W, "click", this.cv3x.ew4A(this, -2)],
                [this.Zi9Z, "click", this.cv3x.ew4A(this, 2)]
            ]);
            k2x.bd2x(i2x, bfL1x, this)
        }
    }();
    b2x.FA2x = function(g2x, r2x) {
        if (r2x == null) {
            g2x.innerText = "";
            a1x.ba2x(g2x, "display", "none");
            a1x.x2x(g2x, this.kT6N)
        } else {
            g2x.innerText = r2x;
            a1x.ba2x(g2x, "display", "");
            r2x == this.cq3x ? a1x.y2x(g2x, this.kT6N) : a1x.x2x(g2x, this.kT6N)
        }
    };
    b2x.bfR1x = function() {
        if (this.cq3x <= 1) {
            a1x.y2x(this.YY9P, this.nT7M);
            a1x.y2x(this.Zf9W, this.nT7M)
        } else {
            a1x.x2x(this.YY9P, this.nT7M);
            a1x.x2x(this.Zf9W, this.nT7M)
        }
        if (this.cq3x >= this.gz5E) {
            a1x.y2x(this.cr3x, this.nT7M);
            a1x.y2x(this.Zi9Z, this.nT7M)
        } else {
            a1x.x2x(this.cr3x, this.nT7M);
            a1x.x2x(this.Zi9Z, this.nT7M)
        }
    };
    b2x.Zs9j = br3x;
    b2x.bgk1x = function() {
        this.Zs9j();
        this.bfR1x();
        this.z2x("onchange", {
            last: this.bKT9K,
            total: this.gz5E,
            index: this.cq3x,
            ext: this.bgl1x
        })
    };
    b2x.bLQ9H = function(r2x) {
        r2x = parseInt(r2x);
        if (isNaN(r2x) || this.gz5E == null) return !1;
        r2x = Math.max(1, Math.min(r2x, this.gz5E));
        this.bKT9K = this.cq3x;
        this.cq3x = r2x;
        return !0
    };
    b2x.bgr1x = function(cB3x) {
        cB3x = parseInt(cB3x);
        if (isNaN(cB3x) || cB3x < 1) return !1;
        this.gz5E = cB3x;
        return !0
    };
    b2x.cv3x = function(d2x, fc4g) {
        h2x.cn3x(d2x);
        var F2x = h2x.X2x(d2x);
        if (!F2x || a1x.bE3x(F2x, this.kT6N) || a1x.bE3x(F2x, this.nT7M)) return;
        var r2x = F2x.innerText;
        switch (fc4g) {
            case 1:
            case -1:
                r2x = this.cq3x + fc4g;
                break;
            case 2:
                r2x = this.gz5E;
                break;
            case -2:
                r2x = 1;
                break
        }
        this.kQ6K(r2x)
    };
    b2x.tj9a = function() {
        return this.cq3x
    };
    b2x.kQ6K = function(r2x) {
        var cxt8l = this.cq3x;
        this.bLQ9H(r2x);
        if (cxt8l != this.cq3x) this.bgk1x();
        return this
    };
    b2x.lo6i = function() {
        return this.gz5E
    };
    b2x.Sa7T = function(cB3x) {
        if (this.bgr1x(cB3x) && this.cq3x != null) {
            this.cq3x = 1;
            this.bgk1x()
        }
        return this
    };
    b2x.bwz5E = function(cB3x) {
        if (this.bgr1x(cB3x)) {
            this.Zs9j();
            this.bfR1x()
        }
        return this
    };
    b2x.Rq7j = function(r2x, cB3x) {
        if (!this.bgr1x(cB3x) || !this.bLQ9H(r2x)) return this;
        this.bgk1x();
        return this
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        db3x = c2x("nej.x"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.QC6w) return;
    O2x.QC6w = NEJ.C();
    b2x = O2x.QC6w.N2x(O2x.YX9O);
    b2x.cw3x = function() {
        this.cF3x();
        var g2x = a1x.di3x("span", "zdot");
        g2x.innerText = "...";
        this.Zv9m = [g2x.cloneNode(true), g2x]
    };
    b2x.bC3x = function() {
        this.bG3x();
        this.bMv9m()
    };
    b2x.bMv9m = function() {
        a1x.mR7K(this.Zv9m[0]);
        a1x.mR7K(this.Zv9m[1])
    };
    b2x.Zs9j = function() {
        this.bgl1x = {
            last: !1,
            first: !1,
            list: this.bU3x
        };
        this.bMv9m();
        this.FA2x(this.bU3x[0], 1);
        var bM3x = 1,
            bq3x = this.bU3x.length;
        if (this.gz5E < bq3x) {
            for (var qH8z; bM3x < bq3x; bM3x++) {
                qH8z = bM3x + 1;
                this.FA2x(this.bU3x[bM3x], qH8z > this.gz5E ? null : qH8z)
            }
            return
        }
        if (this.cq3x > 1) {
            var cz3x = Math.floor((bq3x - 2) / 2),
                cxs8k = this.gz5E - bq3x + 2,
                hv5A = Math.max(2, this.cq3x - cz3x);
            if (this.gz5E >= bq3x) {
                hv5A = Math.min(hv5A, cxs8k)
            }
            if (hv5A > 2) {
                this.bU3x[0].insertAdjacentElement("afterEnd", this.Zv9m[0]);
                this.bgl1x.first = !0
            }
            for (var r2x;; bM3x++) {
                r2x = hv5A + bM3x - 1;
                if (r2x > this.cq3x) break;
                this.FA2x(this.bU3x[bM3x], r2x)
            }
        }
        if (this.cq3x < this.gz5E) {
            var r2x, hv5A = this.cq3x + 1;
            for (var i = 0, l = bq3x - 2;; i++, bM3x++) {
                r2x = hv5A + i;
                if (bM3x > l || r2x > this.gz5E) break;
                this.FA2x(this.bU3x[bM3x], r2x)
            }
            if (r2x < this.gz5E) {
                this.bU3x[bM3x].insertAdjacentElement("beforeBegin", this.Zv9m[1]);
                this.bgl1x.last = !0
            }
            if (r2x <= this.gz5E) {
                this.FA2x(this.bU3x[bM3x++], this.gz5E)
            }
        }
        for (; bM3x < bq3x; bM3x++) {
            this.FA2x(this.bU3x[bM3x])
        }
    };
    a1x.cxr8j = db3x.cxr8j = function(bI3x, e2x) {
        var C2x = a1x.lQ6K(bI3x);
        if (!C2x) return null;
        if (!O2x.bcx0x(C2x, O2x.QC6w)) {
            e2x = e2x || {};
            var i2x = !e2x.clazz ? a1x.dm4q(C2x) : a1x.H2x(C2x, e2x.clazz);
            e2x.pbtn = i2x.shift();
            e2x.nbtn = i2x.pop();
            e2x.list = i2x;
            delete e2x.clazz
        }
        return O2x.bcx0x(C2x, O2x.QC6w, e2x || bb2x)
    };
    db3x.isChange = !0
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        O2x = c2x("nej.ui"),
        b2x, L2x, gi5n;
    if (!!O2x.QA6u) return;
    O2x.QA6u = NEJ.C();
    b2x = O2x.QA6u.N2x(O2x.buZ5e);
    L2x = O2x.QA6u.cs3x;
    b2x.bm3x = function(e2x) {
        e2x.number = parseInt(e2x.number) || 9;
        this.bn3x(e2x);
        this.lu6o = I2x.QC6w.A2x(this.fS4W)
    };
    b2x.fZ5e = function(d2x) {
        if (!!this.YR9I.noend) {
            var bMI9z = d2x.ext || bb2x,
                i2x = bMI9z.list || fu4y;
            if (bMI9z.last) {
                a1x.ba2x(i2x[i2x.length - 1], "display", "none")
            }
        }
        L2x.fZ5e.apply(this, arguments)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bc2x = c2x("nej.ui"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.Zy9p) return;
    O2x.Zy9p = NEJ.C();
    b2x = O2x.Zy9p.N2x(O2x.cJ3x);
    b2x.bm3x = function(e2x) {
        this.jh5m = {};
        this.bn3x(e2x);
        this.in5s = a1x.B2x(e2x.parent);
        this.fg4k = {
            parent: this.in5s
        };
        this.oN7G = parseInt(e2x.limit) || 10;
        this.yn0x = parseInt(e2x.first) || this.oN7G;
        this.cxq8i(e2x.item);
        this.cxp8h(e2x.cache || bb2x);
        this.cxo7h(e2x.pager || bb2x);
        this.gM5R()
    };
    b2x.bC3x = function() {
        this.z2x("onbeforerecycle");
        this.Qi6c();
        this.bG3x();
        if (this.jh5m.clear) {
            this.S2x.uI9z(this.jh5m.key)
        }
        this.S2x.T2x();
        if (!!this.jx6r) {
            this.jx6r.T2x();
            delete this.jx6r
        }
        delete this.bNQ0x;
        delete this.fS4W;
        delete this.ZJ9A;
        delete this.S2x;
        delete this.in5s;
        delete this.Qf6Z;
        delete this.fg4k;
        delete this.jh5m
    };
    b2x.bOl0x = function() {
        var dg3x = /\{(.*?)\}/gi,
            cxn7g = function(pc7V, j2x) {
                return (pc7V || "{id}{seed}").replace(dg3x, function($1, $2) {
                    var D2x = j2x[$2];
                    return D2x == null ? $1 : D2x
                })
            };
        return function(C2x) {
            var K2x = cxn7g(this.fg4k.jstIdTempalte, {
                id: C2x,
                seed: a1x.Ka4e()
            });
            if (!this.fg4k.jstIdType) {
                return a1x.B2x(K2x)
            } else if (this.fg4k.jstIdType == 1) {
                return (a1x.H2x(this.in5s, K2x) || [])[0]
            }
        }
    }();
    b2x.BW1x = function(bM3x, bi2x, gc5h, bq3x) {
        var m2x = {
            index: 1,
            total: 1
        };
        if (bi2x >= bM3x) {
            m2x.index = Math.floor((bi2x - bM3x) / gc5h) + 2
        }
        if (bq3x > bM3x) {
            m2x.total = Math.ceil((bq3x - bM3x) / gc5h) + 1
        }
        return m2x
    };
    b2x.bOw0x = function(K2x) {
        delete this.Qf6Z;
        this.KV4Z = K2x;
        this.bX3x([
            [this.in5s, "click", this.cxm7f.f2x(this)]
        ])
    };
    b2x.cxq8i = function(p2x) {
        if (k2x.fB4F(p2x)) {
            this.bOw0x(p2x);
            return
        }
        NEJ.X(this.fg4k, p2x);
        var ee4i = this.fg4k.klass;
        delete this.fg4k.klass;
        if (k2x.fB4F(ee4i)) {
            this.bOw0x(ee4i);
            return
        }
        delete this.KV4Z;
        this.Qf6Z = ee4i;
        this.fg4k.ondelete = this.z2x.f2x(this, "ondelete");
        this.fg4k.onupdate = this.z2x.f2x(this, "onupdate")
    };
    b2x.cxp8h = function(R2x) {
        var ee4i = R2x.klass,
            kv6p = NEJ.X({}, R2x);
        this.jh5m.key = kv6p.lkey;
        this.jh5m.data = kv6p.data || {};
        this.jh5m.clear = !!kv6p.clear;
        this.fg4k.pkey = kv6p.key || "id";
        kv6p.onlistload = this.bhK2x.f2x(this);
        kv6p.onpullrefresh = this.cxl7e.f2x(this);
        if (!!ee4i && "onlistchange" in ee4i) {
            this.bX3x([
                [ee4i, "listchange", this.bid2x.f2x(this)]
            ])
        } else {
            kv6p.onitemadd = this.ZY0x.f2x(this);
            kv6p.onitemdelete = this.bab0x.f2x(this);
            kv6p.onitemupdate = this.bPz0x.f2x(this)
        }
        this.S2x = (ee4i || O2x.RU7N).A2x(kv6p);
        if (R2x.total != null) {
            this.S2x.Sa7T(this.jh5m.key, R2x.total)
        }
        if (!!R2x.list) {
            this.S2x.uK9B(this.jh5m.key, R2x.list)
        }
    };
    b2x.cxo7h = function(tk9b) {
        this.bNQ0x = tk9b.klass || bc2x.QA6u;
        this.fS4W = NEJ.X({}, tk9b);
        if (k2x.eJ4N(tk9b.parent)) {
            this.fS4W.parent = tk9b.parent[0];
            this.PP6J = tk9b.parent.slice(1);
            if (!this.PP6J || !this.PP6J.length) {
                delete this.PP6J
            }
        }
        delete this.fS4W.klass
    };
    b2x.Qi6c = function() {
        var gO5T = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z2x("onbeforelistclear", {
                parent: this.in5s
            });
            if (!!this.fH4L && this.fH4L.length > 0) {
                this.fH4L = this.Qf6Z.T2x(this.fH4L);
                delete this.fH4L
            }
            if (gO5T.test(this.in5s.tagName)) {
                a1x.bTy8q(this.in5s)
            } else {
                this.in5s.innerHTML = ""
            }
        }
    }();
    b2x.bio2x = function(bac0x) {
        if (!!this.fS4W.fixed) return;
        a1x.ba2x(this.fS4W.parent, "display", bac0x);
        k2x.bd2x(this.PP6J, function(bI3x) {
            a1x.ba2x(bI3x, "display", bac0x)
        }, this)
    };
    b2x.bit2x = function() {
        var r2x = this.fS4W.index || 1;
        delete this.fS4W.index;
        if (!!this.jx6r) {
            r2x = this.jx6r.tj9a()
        }
        this.BJ1x({
            last: r2x,
            index: r2x
        })
    };
    b2x.BJ1x = function(d2x) {
        this.z2x("onpagechange", d2x)
    };
    b2x.bQb0x = function(bi2x) {
        this.jh5m.offset = bi2x;
        this.Yo9f()
    };
    b2x.bQf0x = function(e2x) {
        return e2x
    };
    b2x.Yo9f = function() {
        this.PC6w();
        var j2x = this.jh5m.data;
        j2x.offset = this.jh5m.offset;
        var pH8z = j2x.offset == 0;
        j2x.total = pH8z;
        this.jh5m.limit = pH8z ? this.yn0x : this.oN7G;
        j2x.limit = this.jh5m.limit;
        this.S2x.lw6q(this.bQf0x(NEJ.X({}, this.jh5m)))
    };
    b2x.bhK2x = function(e2x) {
        if (e2x.key != this.jh5m.key || e2x.offset != this.jh5m.offset) return;
        this.bag0x();
        var i2x = this.S2x.hF5K(e2x.key);
        if (!i2x || !i2x.length) {
            this.biQ2x();
            return
        }
        var gc5h = e2x.limit,
            bi2x = e2x.offset;
        if (this.bjd2x(i2x, bi2x, gc5h)) return;
        this.z2x("onbeforelistrender", {
            list: i2x,
            offset: bi2x,
            parent: this.in5s
        });
        if (!!this.KV4Z) {
            this.fg4k.xlist = i2x;
            this.fg4k.beg = bi2x;
            this.fg4k.end = Math.min(i2x.length, bi2x + gc5h) - 1;
            this.fg4k.act = "list";
            var dW4a = a1x.cc3x(this.KV4Z, this.fg4k);
            this.Pu6o(dW4a)
        } else {
            this.fg4k.limit = gc5h;
            this.fg4k.offset = bi2x;
            var hm5r = a1x.Co1x(i2x, this.Qf6Z, this.fg4k);
            this.Pt6n(hm5r)
        }
        this.z2x("onafterlistrender", {
            list: i2x,
            offset: bi2x,
            parent: this.in5s
        })
    };
    b2x.cxl7e = function(e2x) {
        if (!this.ZJ9A) return;
        delete this.ZJ9A;
        this.bag0x("onafterpullrefresh");
        this.gM5R()
    };
    b2x.bQO1x = function(r2x, cB3x) {
        if (!!this.jx6r) {
            var xC0x = this.jx6r.tj9a(),
                cxj7c = this.jx6r.lo6i();
            if (xC0x > cB3x || cB3x != cxj7c) {
                this.jx6r.T2x();
                delete this.jx6r;
                this.BJ1x({
                    last: xC0x,
                    index: Math.min(r2x, cB3x)
                });
                return !0
            }
        } else {
            this.fS4W.index = r2x;
            this.fS4W.total = cB3x;
            this.jx6r = this.bNQ0x.A2x(this.fS4W);
            this.jx6r.xx0x("onchange", this.BJ1x.f2x(this));
            k2x.bd2x(this.PP6J, function(bI3x) {
                this.jx6r.f2x(bI3x)
            }, this)
        }
    };
    b2x.bap0x = function() {
        var gG5L = +(new Date);
        return function(j2x) {
            var C2x = j2x[this.fg4k.pkey];
            if (!C2x) {
                j2x["dirty-data"] = !0;
                j2x[this.fg4k.pkey] = "dirty-" + gG5L++
            }
            return j2x
        }
    }();
    b2x.baq0x = function(j2x) {
        var C2x = j2x[this.fg4k.pkey];
        if (!!j2x["dirty-data"]) {
            delete j2x["dirty-data"];
            delete j2x[this.fg4k.pkey]
        }
        return C2x
    };
    b2x.bas0x = function() {
        var cxi7b = function(kB6v, mQ7J) {
            this.in5s.insertAdjacentElement(kB6v, mQ7J)
        };
        return function(kB6v, j2x) {
            var Km4q = [j2x];
            if (!!this.KV4Z) {
                this.fg4k.xlist = Km4q;
                this.fg4k.beg = 0;
                this.fg4k.end = 0;
                this.fg4k.act = "add";
                this.Pu6o(a1x.cc3x(this.KV4Z, this.fg4k), kB6v)
            } else {
                this.fg4k.limit = 1;
                this.fg4k.offset = 0;
                this.fg4k.parent = cxi7b.f2x(this, kB6v);
                var hm5r = a1x.Co1x(Km4q, this.Qf6Z, this.fg4k);
                this.fg4k.parent = this.in5s;
                this.Pt6n(hm5r)
            }
        }
    }();
    b2x.PC6w = br3x;
    b2x.bag0x = function(W2x) {
        var d2x = {
            parent: this.in5s
        };
        this.z2x(W2x || "onafterlistload", d2x);
        if (!d2x.stopped) {
            a1x.mR7K(this.cu3x)
        }
    };
    b2x.bjd2x = br3x;
    b2x.baA0x = function(bF3x, kB6v) {
        if (k2x.fB4F(bF3x)) {
            if (!this.cu3x) this.cu3x = a1x.di3x("div");
            this.cu3x.innerHTML = bF3x
        } else {
            this.cu3x = bF3x
        }
        this.in5s.insertAdjacentElement(kB6v || "beforeEnd", this.cu3x)
    };
    b2x.zM1x = function(W2x, kA6u, kB6v) {
        var d2x = {
            parent: this.in5s
        };
        this.z2x(W2x, d2x);
        if (!d2x.stopped) {
            this.baA0x(d2x.value || kA6u, kB6v)
        }
    };
    b2x.biQ2x = br3x;
    b2x.Pu6o = br3x;
    b2x.Pt6n = br3x;
    b2x.cxm7f = function() {
        var gO5T = /^(?:delete|update)$/;
        return function(d2x) {
            var g2x = h2x.X2x(d2x, "d:action");
            if (!g2x) return;
            var V2x = a1x.t2x(g2x, "action");
            if (!gO5T.test(V2x)) return;
            var C2x = a1x.t2x(g2x, "id");
            if (!C2x) return;
            var p2x = this.S2x.eL4P(C2x);
            if (!p2x) return;
            h2x.bh2x(d2x);
            this.z2x("on" + V2x, {
                data: p2x,
                id: p2x[this.fg4k.pkey],
                body: a1x.B2x(this.bOl0x(C2x))
            })
        }
    }();
    b2x.ZY0x = br3x;
    b2x.Yj9a = function(d2x) {
        var j2x = d2x.data || {},
            e2x = {
                data: j2x,
                key: this.jh5m.key,
                id: j2x[this.fg4k.pkey]
            };
        this.z2x("onbeforedelete", e2x);
        this.S2x.LH4L(e2x)
    };
    b2x.bab0x = br3x;
    b2x.Yh9Y = function(d2x) {
        var j2x = d2x.data || {},
            e2x = {
                data: j2x,
                key: this.jh5m.key
            };
        this.z2x("onbeforeupdate", e2x);
        this.S2x.Yp9g(e2x)
    };
    b2x.bPz0x = function(d2x) {
        this.Pd6X(d2x, "onafterupdate");
        if (d2x.stopped) return;
        var C2x = d2x.data[this.fg4k.pkey];
        if (!!this.fH4L) {
            var p2x = a1x.bCg7Z(C2x);
            if (!!p2x) p2x.gM5R(d2x.data)
        } else {
            var g2x = a1x.B2x(C2x + "" + a1x.Ka4e());
            if (!g2x) return;
            var i2x = this.S2x.hF5K(d2x.key),
                r2x = k2x.dl4p(i2x, d2x.data);
            if (r2x < 0) return;
            this.fg4k.list = i2x;
            this.fg4k.beg = r2x;
            this.fg4k.end = r2x;
            this.fg4k.act = "update";
            var dW4a = a1x.cc3x(this.KV4Z, this.fg4k);
            g2x.insertAdjacentHTML("afterEnd", dW4a);
            a1x.cM3x(g2x)
        }
    };
    b2x.Pd6X = function(d2x, W2x) {
        var p2x = d2x.data;
        if (!p2x || p2x[this.fg4k.pkey] == null) {
            this.z2x("onerror", d2x);
            d2x.stopped = !0
        }
        if (!d2x.stopped) {
            this.z2x(W2x, d2x)
        }
    };
    b2x.bjQ2x = br3x;
    b2x.bjU2x = br3x;
    b2x.bid2x = function(d2x) {
        if (d2x.key != this.jh5m.key) return;
        switch (d2x.action) {
            case "add":
                this.ZY0x(d2x);
                break;
            case "delete":
                this.bab0x(d2x);
                break;
            case "update":
                this.bPz0x(d2x);
                break;
            case "refresh":
                this.gM5R();
                break;
            case "unshift":
                this.bjU2x(d2x.offset, d2x.limit);
                break;
            case "append":
                this.bjQ2x(d2x.offset, d2x.limit);
                break
        }
    };
    b2x.qm8e = function(p2x) {
        this.Yh9Y({
            data: p2x
        })
    };
    b2x.mv7o = function(p2x) {
        this.Yj9a({
            data: p2x
        })
    };
    b2x.sW9N = function(p2x) {
        this.S2x.jJ6D({
            data: p2x,
            key: this.jh5m.key
        })
    };
    b2x.sV9M = function() {
        return this.S2x
    };
    b2x.bjW2x = function(j2x) {
        this.bas0x("afterBegin", this.bap0x(j2x));
        return this.baq0x(j2x)
    };
    b2x.bRF2x = function(j2x) {
        this.bas0x("beforeEnd", this.bap0x(j2x));
        return this.baq0x(j2x)
    };
    b2x.gM5R = function() {
        this.Qi6c();
        this.bit2x()
    };
    b2x.cGx0x = function() {
        this.S2x.uI9z(this.jh5m.key);
        this.gM5R()
    };
    b2x.bru4y = function() {
        if (!!this.ZJ9A) return;
        this.ZJ9A = !0;
        this.zM1x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i2x = this.S2x.hF5K(this.jh5m.key);
        if (i2x && i2x[0]) {
            this.jh5m.data.aftertime = i2x[0].eventTime || ""
        }
        this.S2x.bru4y({
            key: this.jh5m.key,
            data: this.jh5m.data
        })
    };
    b2x.lo6i = function() {
        return this.S2x.lo6i(this.jh5m.key)
    };
    b2x.bRN2x = function() {
        return this.jx6r
    };
    b2x.Yy9p = function() {
        return this.S2x.Yy9p(this.jh5m.key)
    };
    b2x.cxg7Z = function() {
        return this.fH4L
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        k2x = c2x("nej.u"),
        a1x = c2x("nej.e"),
        O2x = c2x("nej.ut"),
        b2x, L2x;
    if (!!O2x.ks6m) return;
    O2x.ks6m = NEJ.C();
    b2x = O2x.ks6m.N2x(O2x.Zy9p);
    L2x = O2x.ks6m.cs3x;
    b2x.BW1x = function(bi2x, bq3x) {
        return L2x.BW1x.call(this, this.yn0x, bi2x, this.oN7G, bq3x)
    };
    b2x.bjY2x = function(r2x) {
        var bi2x = 0;
        if (r2x > 1) bi2x = this.yn0x + (r2x - 2) * this.oN7G;
        return bi2x
    };
    b2x.BJ1x = function(d2x) {
        L2x.BJ1x.apply(this, arguments);
        if (!d2x.stopped) {
            this.bQb0x(this.bjY2x(d2x.index))
        }
    };
    b2x.PC6w = function() {
        this.Qi6c();
        this.zM1x("onbeforelistload", "列表加载中...")
    };
    b2x.bag0x = function() {
        L2x.bag0x.apply(this, arguments);
        this.Qi6c()
    };
    b2x.bjd2x = function(i2x, bi2x, gc5h) {
        var bx3x = this.BW1x(bi2x, i2x.length);
        if (this.bQO1x(bx3x.index, bx3x.total)) return !0;
        this.bio2x(bx3x.total > 1 ? "" : "none")
    };
    b2x.biQ2x = function() {
        this.zM1x("onemptylist", "没有列表数据！")
    };
    b2x.baA0x = function(bF3x, kB6v) {
        if (!kB6v && k2x.fB4F(bF3x)) {
            this.in5s.innerHTML = bF3x;
            return
        }
        L2x.baA0x.apply(this, arguments)
    };
    b2x.Pu6o = function(dW4a) {
        this.in5s.innerHTML = dW4a
    };
    b2x.Pt6n = function(hm5r) {
        this.fH4L = hm5r
    };
    b2x.ZY0x = function(d2x) {
        this.Pd6X(d2x, "onafteradd");
        if (!d2x.stopped) this.gM5R()
    };
    b2x.bab0x = function(d2x) {
        this.Pd6X(d2x, "onafterdelete");
        if (!d2x.stopped) this.gM5R()
    };
    b2x.bjQ2x = function(bi2x, gc5h) {
        var r2x = 1;
        if (!!this.jx6r) {
            r2x = this.jx6r.tj9a()
        }
        var jO6I = this.bjY2x(r2x),
            fQ4U = jO6I + (r2x > 1 ? this.oN7G : this.yn0x);
        if (bi2x >= fQ4U && !!this.jx6r) {
            var bx3x = this.BW1x(0, this.lo6i());
            this.jx6r.bwz5E(bx3x.total);
            this.bio2x(bx3x.total > 1 ? "" : "none")
        } else {
            this.gM5R()
        }
    };
    b2x.bjU2x = function(bi2x, gc5h) {
        var r2x = 1;
        if (!!this.jx6r) {
            r2x = this.jx6r.tj9a()
        }
        var jO6I = this.bjY2x(r2x),
            bx3x = this.BW1x(jO6I, this.lo6i());
        this.BJ1x({
            last: r2x,
            index: bx3x.index
        })
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        w2x = c2x("nm.w"),
        fq4u = 40,
        b2x, L2x;
    w2x.baG0x = NEJ.C();
    b2x = w2x.baG0x.N2x(I2x.cJ3x);
    L2x = w2x.baG0x.cs3x;
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.OV6P = e2x.inputer;
        this.bke2x = e2x.tipper;
        this.bX3x([
            [this.OV6P, "input", this.fR4V.f2x(this)]
        ])
    };
    b2x.bC3x = function() {
        this.bG3x();
        this.Ku4y(null, null)
    };
    b2x.fR4V = function(d2x) {
        if (d2x && d2x.type == "keyup" && (d2x.keyCode != 8 || d2x.keyCode != 68)) return;
        var W2x = this.OV6P.value,
            cGy0x;
        if (l2x.UJ8B(W2x) > fq4u) {
            this.OV6P.value = l2x.AW1x(W2x, fq4u);
            this.Ku4y("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f2x(this))
        } else if (W2x.indexOf("#") >= 0 || W2x.indexOf("@") >= 0) {
            this.Ku4y("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ku4y(null, null);
            this.z2x("onchange", {
                value: W2x
            })
        }
    };
    b2x.cxe7X = function() {
        this.fR4V()
    };
    b2x.Ku4y = function() {
        var C2x = 0;
        return function(dL4P, bSx2x) {
            if (!!C2x) window.clearTimeout(C2x);
            if (!dL4P) {
                a1x.y2x(this.bke2x, "f-vhide");
                this.bSA2x = !1;
                return
            }
            this.bke2x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dL4P;
            a1x.x2x(this.bke2x, "f-vhide");
            this.bSA2x = !0;
            if (k2x.gE5J(bSx2x)) C2x = window.setTimeout(function() {
                this.Ku4y(null, null);
                bSx2x()
            }.f2x(this), 1e3)
        }
    }();
    b2x.bSB2x = function() {
        if (this.bSA2x) return !1;
        if (l2x.kw6q(this.OV6P.value)) {
            this.Ku4y("歌单名不能为空");
            return !1
        }
        return !0
    };
    b2x.gd5i = function() {
        return this.OV6P.value
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    n2x.baN0x = NEJ.C();
    b2x = n2x.baN0x.N2x(n2x.eq4u);
    L2x = n2x.baN0x.cs3x;
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.baO0x = {
            inputer: i2x[0],
            tipper: i2x[1]
        };
        this.iJ5O = {
            onerror: this.bSK2x.f2x(this),
            onitemadd: this.bSK2x.f2x(this)
        };
        this.lC6w = i2x[2];
        h2x.s2x(i2x[2], "click", this.Ho3x.f2x(this));
        h2x.s2x(i2x[3], "click", this.BR1x.f2x(this));
        h2x.s2x(this.o2x, "keypress", this.bSQ2x.f2x(this))
    };
    b2x.ch3x = function() {
        this.cf3x = "m-wgt-create"
    };
    b2x.bm3x = function(e2x) {
        e2x.clazz = " m-layer-w2";
        e2x.parent = e2x.parent || document.body;
        e2x.title = "新建歌单";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bn3x(e2x);
        this.baO0x.inputer.value = e2x.name || "";
        this.vl9c = w2x.baG0x.A2x(this.baO0x);
        this.vl9c.cxe7X();
        this.S2x = q2x.hY5d.A2x(this.iJ5O);
        setTimeout(function() {
            this.baO0x.inputer.focus()
        }.f2x(this), 0)
    };
    b2x.bC3x = function() {
        this.bG3x();
        if (this.vl9c) {
            this.vl9c.T2x();
            delete this.vl9c
        }
        this.sR9I(!1);
        this.baO0x.inputer.value = ""
    };
    b2x.sR9I = function(OI6C) {
        this.ps8k = OI6C;
        if (OI6C) {
            this.lC6w.innerHTML = "<i>新建中...</i>";
            a1x.y2x(this.lC6w, "u-btn2-dis")
        } else {
            this.lC6w.innerHTML = "<i>新 建</i>";
            a1x.x2x(this.lC6w, "u-btn2-dis")
        }
    };
    b2x.Ho3x = function() {
        if (this.ps8k || !this.vl9c.bSB2x()) return;
        var ct3x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vl9c.gd5i()
            },
            offset: 1
        };
        this.S2x.jJ6D(ct3x);
        this.sR9I(!0)
    };
    b2x.bSK2x = function(d2x) {
        var bY3x = (d2x.result || bb2x).code;
        if (!bY3x) {
            this.z2x("onsuccess", d2x.data)
        } else {
            this.z2x("onerror", d2x)
        }
        this.bt3x()
    };
    b2x.BR1x = function() {
        this.bt3x()
    };
    b2x.bSQ2x = function(d2x) {
        if (d2x.keyCode == 13) this.Ho3x()
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.bkL2x = NEJ.C();
    b2x = n2x.bkL2x.N2x(n2x.eq4u);
    L2x = n2x.bkL2x.cs3x;
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.iL5Q = {
            limit: 301,
            parent: i2x[1],
            cache: {
                klass: q2x.hY5d,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkQ2x.f2x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l2x.AZ1x,
                escape: k2x.dH4L
            }
        };
        this.iJ5O = {
            onsuccess: this.baZ0x.f2x(this),
            onerror: this.dO4S.f2x(this)
        };
        h2x.s2x(i2x[0], "click", this.Ho3x.f2x(this));
        h2x.s2x(i2x[1], "click", this.kZ6T.f2x(this))
    };
    b2x.ch3x = function() {
        this.cf3x = "m-wgt-subscribe"
    };
    b2x.bm3x = function(e2x) {
        e2x.parent = e2x.parent || document.body;
        e2x.clazz = " m-layer-w2";
        e2x.title = "添加到歌单";
        e2x.draggable = !0;
        e2x.mask = !0;
        this.bn3x(e2x);
        this.bba0x = (e2x.tracks || []).reverse();
        this.iL5Q.item.size = this.bba0x.length;
        this.iJ5O.name = e2x.name || "";
        this.bTr8j = q2x.xI0x.A2x({
            onaddsuccess: this.Bj1x.f2x(this)
        });
        this.tv9m = q2x.hY5d.A2x({
            onlistload: this.cxd7W.f2x(this)
        });
        this.tv9m.bPm0x();
        k2x.bd2x(this.bba0x, function(p2x, r2x, i2x) {
            if (!k2x.lG6A(p2x)) {
                i2x[r2x] = this.bTr8j.eL4P(p2x) || p2x
            }
        }, this)
    };
    b2x.cxd7W = function() {
        if (this.dJ4N) this.dJ4N.T2x();
        this.dJ4N = I2x.ks6m.A2x(this.iL5Q)
    };
    b2x.Ho3x = function() {
        this.bt3x();
        if (this.HG3x) this.HG3x.T2x();
        this.HG3x = n2x.baN0x.A2x(this.iJ5O);
        this.HG3x.J2x()
    };
    b2x.kZ6T = function() {
        var cxb7U = function(g2x) {
            while (g2x && g2x != document) {
                if (g2x.tagName.toLowerCase() == "li") {
                    return g2x
                }
                g2x = g2x.parentNode
            }
        };
        return function(d2x) {
            h2x.cn3x(d2x);
            var F2x = h2x.X2x(d2x),
                zz1x = cxb7U(F2x);
            if (!!zz1x && !a1x.bE3x(zz1x, "dis")) {
                this.baZ0x({
                    id: a1x.t2x(zz1x, "id")
                })
            }
        }
    }();
    b2x.baZ0x = function(d2x) {
        var C2x = d2x.id;
        if (!C2x || !this.bba0x.length) return;
        this.bTr8j.jJ6D({
            key: "track_playlist-" + C2x,
            data: {
                tracks: this.bba0x,
                pid: C2x
            }
        });
        this.bt3x()
    };
    b2x.Bj1x = function() {
        this.z2x("onsuccess");
        n2x.Z2x.J2x({
            tip: "收藏成功"
        })
    };
    b2x.dO4S = function(d2x) {
        this.bt3x();
        this.z2x("onerror", d2x);
        var cV3x = "收藏失败";
        switch (d2x.code) {
            case 405:
                cV3x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cV3x = "歌单数量超过限制";
                break;
            case 502:
                cV3x = "歌曲已经存在"
        }
        n2x.Z2x.J2x({
            tip: cV3x,
            type: 2
        })
    };
    b2x.bkQ2x = function() {
        this.bt3x();
        n2x.Z2x.J2x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l2x.mw7p = function(e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n2x.bkL2x.J2x(e2x)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        dx4B = c2x("nej.p"),
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x");
    var blk3x, oV7O, Y2x = decodeURIComponent(location.href),
        jW6Q = /.+(https?:\/\/.+\/proxy.html)/.test(Y2x) ? RegExp.$1 : "";
    if (!!jW6Q) {
        v2x.vv9m("mail_proxy_url", jW6Q)
    } else {
        jW6Q = v2x.tR9I("mail_proxy_url") || "about:blank"
    }
    blk3x = a1x.beh1x({
        src: jW6Q,
        onload: function() {
            oV7O = true
        }
    });
    var bTI8A = function() {
        v2x.gC5H("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cxa7T = function() {
        if (dx4B.dr4v.browser == "ie" && parseInt(dx4B.dr4v.version) < 9) {
            l2x.ft4x({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l2x.Kj4n = function(u2x, C2x, V2x) {
        if (!cxa7T()) return;
        bTI8A();
        if (V2x == "stop") {
            if (!oV7O) throw "proxy not loaded";
            bTI8A();
            blk3x.contentWindow.location.replace(jW6Q + "#" + k2x.cC3x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            blk3x.contentWindow.location.replace(jW6Q + "#" + k2x.cC3x({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u2x,
                    id: C2x,
                    s: +(new Date),
                    action: V2x
                })
            }))
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        q2x = c2x("nm.d");
    var kO6I = q2x.hP5U.A2x();
    var pk8c = q2x.xI0x.A2x({
        onlistload: cwZ7S,
        onitemload: cwY7R,
        onerror: dO4S
    });
    var HU3x = q2x.rw8o.A2x({
        onlistload: cwX7Q,
        onitemload: cwW7P,
        onerror: dO4S
    });
    var bUk9b = {};

    function xw0x(d2x) {
        var g2x = h2x.X2x(d2x, "d:resAction"),
            V2x = a1x.t2x(g2x, "resAction");
        if (g2x && (V2x == "play" || V2x == "addto")) {
            var u2x = parseInt(a1x.t2x(g2x, "resType"));
            bUp9g({
                action: V2x,
                type: u2x,
                id: a1x.t2x(g2x, "resId"),
                from: a1x.t2x(g2x, "resFrom"),
                data: a1x.t2x(g2x, "resData"),
                order: a1x.t2x(g2x, "resOrder"),
                node: g2x
            });
            if (u2x != 13) bUx9o(g2x)
        }
    }

    function bUp9g(bR3x) {
        var V2x = bR3x.action,
            u2x = bR3x.type,
            C2x = bR3x.id,
            ec4g = bR3x.from,
            j2x = bR3x.data,
            tL9C = bR3x.order,
            e2x = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C2x
                },
                ext: {
                    id: C2x,
                    action: V2x,
                    type: u2x,
                    from: ec4g,
                    data: j2x,
                    node: bR3x.node
                }
            };
        if (V2x != "play" && V2x != "addto" || !u2x) return;
        if (window.GRef && GRef == "mail") {
            l2x.Kj4n(u2x, C2x, V2x);
            return
        }
        switch (u2x) {
            case 13:
                e2x.key = "track_playlist-" + C2x;
                pk8c.lw6q(e2x);
                break;
            case 17:
                e2x.key = "program";
                e2x.id = C2x;
                HU3x.Yu9l(e2x);
                if (V2x == "play") {
                    v2x.bl3x("/api/dj/program/listen", {
                        query: {
                            id: C2x
                        }
                    })
                }
                break;
            case 18:
                e2x.key = "track";
                e2x.id = C2x;
                pk8c.Yu9l(e2x);
                break;
            case 19:
                e2x.key = "track_album-" + C2x;
                pk8c.lw6q(e2x);
                break;
            case 24:
                e2x.key = "track_day";
                pk8c.lw6q(e2x);
                break;
            case 2:
                e2x.key = "track_artist_top-" + C2x;
                pk8c.lw6q(e2x);
                break;
            case 70:
                e2x.key = "program_djradio-" + C2x + "-" + tL9C;
                e2x.data.radioId = C2x;
                e2x.data.asc = tL9C == 2;
                HU3x.lw6q(e2x);
                break
        }
    }

    function bUD9u(i2x) {
        var m2x = [];
        k2x.bd2x(i2x, function(p2x) {
            if (p2x.mainSong) {
                p2x.mainSong.program = p2x;
                m2x.push(p2x.mainSong);
                p2x.localupdatetime = +(new Date);
                pk8c.cDO9F(p2x.mainSong);
                p2x.mainTrackId = p2x.mainSong.id;
                delete p2x.mainSong
            } else {
                var bUE9v = pk8c.eL4P(p2x.mainTrackId);
                bUE9v && m2x.push(bUE9v)
            }
        });
        return m2x
    }

    function bbm0x(i2x, e2x) {
        var rM8E = e2x.action == "play" && e2x.type != 17 && e2x.type != 18,
            fY5d = e2x.action == "play";
        if (!i2x.length) return;
        if (e2x.type == 19) {
            i2x = l2x.LQ4U(i2x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e2x.id
            })
        } else {
            i2x = l2x.LQ4U(i2x, true, {
                play: true
            })
        }
        k2x.bd2x(i2x, function(p2x) {
            p2x.source = l2x.btc5h({
                fid: e2x.from,
                fdata: e2x.data,
                type: e2x.type,
                rid: e2x.id
            }, p2x.id)
        });
        top.player.addTo(i2x, rM8E, fY5d);
        kO6I.SD7w({
            rid: e2x.id,
            type: e2x.type,
            hash: l2x.Mv4z(),
            play: fY5d,
            source: e2x.from,
            sourceid: e2x.data
        })
    }

    function cwZ7S(d2x) {
        var eA4E = d2x.ext || {};
        i2x = pk8c.hF5K(d2x.key);
        bbm0x(i2x, eA4E);
        if (eA4E.type == 13 && eA4E.action == "play" && i2x && i2x.length > 0) {
            bUx9o(eA4E.node);
            v2x.bl3x("/api/playlist/update/playcount", {
                query: {
                    id: eA4E.id
                }
            })
        }
    }

    function cwY7R(d2x) {
        var i2x = [pk8c.eL4P(d2x.id)],
            bj3x = i2x[0],
            qx8p = l2x.pX8P(bj3x),
            tm9d = bj3x.privilege || {};
        if (qx8p == 10) {
            l2x.vZ0x(tm9d.fee || bj3x.fee, bj3x.id, "song", null, tm9d)
        } else if (qx8p == 100) {
            l2x.iC5H(null, null, null, true, bj3x)
        } else if (qx8p == 11) {
            l2x.bFk8c(bj3x.id, 18)
        } else {
            bbm0x(i2x, d2x.ext)
        }
    }

    function cwX7Q(d2x) {
        var i2x = bUD9u(HU3x.hF5K(d2x.key));
        bbm0x(i2x, d2x.ext)
    }

    function cwW7P(d2x) {
        var i2x = bUD9u([HU3x.eL4P(d2x.id)]);
        bbm0x(i2x, d2x.ext)
    }

    function dO4S() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bUx9o(g2x) {
        var u2x = a1x.t2x(g2x, "resType"),
            C2x = a1x.t2x(g2x, "resId"),
            K2x = u2x + "-" + C2x;
        if (bUk9b[K2x]) return;
        var bUL9C = a1x.B2x("play-count"),
            blG3x = a1x.H2x(g2x.parentNode, "nb"),
            Oh6b = null;
        if (bUL9C) {
            Oh6b = bUL9C
        } else {
            Oh6b = !!blG3x && !!blG3x[0] ? blG3x[0] : null
        }
        if (Oh6b) {
            var cz3x = Oh6b.innerHTML;
            if (/^\d+$/.test(cz3x)) {
                Oh6b.innerText = +cz3x + 1
            }
            bUk9b[K2x] = true
        }
    }
    l2x.cwV7O = function(g2x) {
        h2x.s2x(g2x || document.body, "click", xw0x.f2x(this))
    };
    l2x.cwU7N = function(V2x, u2x, C2x) {
        bUp9g({
            action: V2x,
            type: u2x,
            id: C2x
        })
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    q2x.fr4v({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m2x, e2x) {
                this.cwS7L(m2x, e2x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m2x, e2x) {
                this.z2x("onshareall", e2x.result)
            },
            onerror: function(m2x, e2x) {
                this.z2x("onshareall", e2x.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m2x, e2x) {
                e2x.options.picUrl = m2x.picUrl;
                this.bVe9V(e2x.options, e2x.result)
            },
            onerror: function(m2x, e2x) {
                this.z2x("onshareall", e2x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q2x, e2x) {
                this.pQ8I("vid_info-" + e2x.data.nosKey, Q2x);
                return Q2x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e2x) {},
            format: function(m2x, e2x) {
                e2x.data = e2x.data2;
                this.cp3x("share-all", e2x)
            },
            onerror: "onshareerror"
        }
    });
    q2x.bmd3x = NEJ.C();
    b2x = q2x.bmd3x.N2x(q2x.hM5R);
    b2x.cwR7K = function() {
        var vj9a = function(Q2x, e2x) {
            e2x.times++;
            if (e2x.times > 10) {
                this.z2x("onvinfoerror", e2x.key, Q2x)
            } else {
                setTimeout(ez4D.f2x(this, e2x), e2x.times * 1e3)
            }
        };
        var zP1x = function(Q2x, e2x) {
            this.z2x("onvinfo", e2x.key, Q2x)
        };
        var ez4D = function(e2x) {
            var Y2x = e2x.url;
            v2x.bl3x(Y2x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: zP1x.ew4A(this, e2x),
                onerror: vj9a.ew4A(this, e2x)
            })
        };
        return function(e2x) {
            e2x.times = 0;
            ez4D.call(this, e2x)
        }
    }();
    b2x.cGA0x = function() {
        var DC2x;
        var vj9a = function(Q2x, e2x) {
            if (Q2x.code > 0) {
                clearInterval(this.DD2x);
                this.z2x("onviderror", e2x.data.nosKey)
            }
        };
        var zP1x = function(K2x, Q2x) {
            if (Q2x.vid && Q2x.covers) {
                clearInterval(this.DD2x);
                this.z2x("onvid", K2x, Q2x)
            }
        };
        var ez4D = function(e2x) {
            if (+(new Date) - DC2x > 60 * 60 * 1e3) {
                clearInterval(this.DD2x);
                this.z2x("onviderror", e2x.data.nosKey);
                return
            }
            e2x.onload = zP1x.f2x(this, e2x.data.nosKey);
            e2x.onerror = vj9a.f2x(this);
            this.cp3x("vid-get", e2x)
        };
        return function(e2x) {
            if (!e2x || !e2x.data) return;
            DC2x = +(new Date);
            this.DD2x = clearInterval(this.DD2x);
            this.DD2x = setInterval(ez4D.f2x(this, e2x), 1e4);
            ez4D.apply(this, arguments)
        }
    }();
    b2x.cwO7H = function() {
        this.DD2x = clearInterval(this.DD2x)
    };
    b2x.cwS7L = function(m2x, ob7U) {
        if (m2x.event && ob7U.snsTypes) {
            if (ob7U.pics) {
                var bVB9s = [];
                for (var i = 0, len = ob7U.pics.length; i < len; i++) {
                    bVB9s[i] = ob7U.pics[i].originId
                }
                this.cp3x("share_img_compound", {
                    data: {
                        picIds: bVB9s.join(",")
                    },
                    options: ob7U,
                    result: m2x
                })
            } else {
                ob7U.picUrl = ob7U.picUrl;
                this.bVe9V(ob7U, m2x)
            }
        } else {
            this.z2x("onshareall", m2x)
        }
        var wf0x = q2x.hP5U.A2x();
        wf0x.eS4W(ob7U.isPub ? "pubevent" : "shareevent", {
            id: m2x.id
        })
    };
    b2x.bVe9V = function(ob7U, m2x) {
        var ct3x = {},
            d2x = m2x.event || {};
        ct3x.eventid = d2x.id;
        ct3x.eventtype = d2x.type;
        ob7U.picUrl && (ct3x.picUrl = ob7U.picUrl);
        ct3x.snsTypes = ob7U.snsTypes;
        ct3x.msg = ob7U.data.msg || "";
        ct3x.type = ob7U.data.type;
        ob7U.data.id && (ct3x.id = ob7U.data.id);
        if (ct3x.eventtype == 41) {
            var Q2x = l2x.Fh2x(d2x.json);
            ct3x.eventtype = 39;
            if (ct3x.msg) {
                ct3x.msg += "  "
            }
            ct3x.msg += "分享" + Q2x.video.creator.nickname + "的视频《" + Q2x.video.title + "》";
            delete ct3x.id
        }
        this.cp3x("share-sns", {
            data: ct3x,
            result: m2x
        })
    };
    b2x.cwN7G = function(e2x) {
        var j2x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k2x.nM7F(5)
        };
        j2x = NEJ.EX(j2x, e2x);
        if (j2x.id < 0) {
            delete j2x.id;
            j2x.type = "noresource"
        }
        if (!j2x.threadId) {
            delete j2x.threadId
        }
        if (!j2x.actId) {
            delete j2x.actId
        }
        if (!j2x.pics) {
            delete j2x.pics
        } else {
            j2x.pics = JSON.stringify(j2x.pics)
        }
        this.cp3x("share-all", {
            data: j2x,
            snsTypes: e2x.snsTypes,
            picUrl: e2x.picUrl,
            pics: e2x.pics,
            isPub: e2x.isPub
        })
    };
    b2x.cwM7F = function(e2x) {
        this.cp3x("share-private", e2x)
    };
    b2x.cwK7D = function(e2x) {
        this.cp3x("video-submit", e2x)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    var cwJ7C = {
        40: !0
    };
    q2x.fr4v({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e2x) {
                e2x.data.getcounts = true;
                e2x.data.pagesize = e2x.data.limit;
                if (e2x.data.offset == 0) {
                    e2x.data.lasttime = -1
                }
                delete e2x.data.offset
            },
            format: function(Q2x, e2x) {
                Q2x.event = l2x.bfw1x(Q2x.event, function(p2x, r2x) {
                    return !cwJ7C[p2x.type]
                });
                this.cwI7B(Q2x.event);
                e2x.data.lasttime = Q2x.lasttime;
                if (Q2x.event.length) {
                    Q2x.event.length = e2x.limit
                }
                return {
                    list: Q2x.event,
                    total: Q2x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q2x, e2x) {
                return {
                    list: Q2x.events,
                    total: Q2x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e2x) {
                e2x.data.pagesize = 20
            },
            format: function(Q2x, e2x) {
                return Q2x.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e2x) {
                if (e2x.data.offset == 0) {
                    e2x.data.time = -1
                }
                delete e2x.data.offset;
                e2x.data.getcounts = true
            },
            format: function(Q2x, e2x) {
                e2x.data.time = Q2x.lasttime;
                var i2x = Q2x.events;
                if (Q2x.more && i2x.length < e2x.data.limit) {
                    i2x = this.JY4c(i2x, e2x.data.limit)
                }
                return {
                    list: i2x,
                    total: Q2x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m2x, e2x) {
                m2x.conf = e2x.conf;
                return m2x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e2x, bg2x) {
                if (e2x.like) {
                    if (e2x.comment) {
                        bg2x.url = "/api/v1/comment/like"
                    } else {
                        bg2x.url = "/api/resource/like"
                    }
                    bg2x.onload = "oneventlike";
                    bg2x.onerror = "oneventlikeerr"
                } else {
                    if (e2x.comment) {
                        bg2x.url = "/api/v1/comment/unlike"
                    } else {
                        bg2x.url = "/api/resource/unlike"
                    }
                    bg2x.onload = "oneventunlike";
                    bg2x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m2x, e2x) {
                m2x.eid = e2x.eid;
                m2x.origin = e2x.origin;
                m2x.ext = e2x.ext;
                return m2x
            },
            onmessage: function(bY3x, m2x) {
                if (bY3x == 250) {
                    n2x.Z2x.J2x({
                        tip: m2x.message || m2x.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m2x, e2x) {
                m2x.id = e2x.data.id;
                return m2x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e2x, bg2x) {
                if (e2x.data.type == "nointer") {
                    bg2x.url = "/api/event/rcmd/reject"
                } else if (e2x.data.transcoding) {
                    bg2x.url = "/api/event/video/transcoding/delete"
                } else {
                    bg2x.url = "/api/event/delete"
                }
            },
            format: function(m2x, e2x) {
                m2x.id = e2x.data.id;
                return m2x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m2x, e2x) {
                m2x.id = e2x.data.id;
                return m2x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e2x) {
                e2x.data.lasttime = e2x.data.lasttime || -1;
                e2x.data.pagesize = e2x.data.limit;
                e2x.data.getcounts = true;
                delete e2x.data.offset
            },
            format: function(Q2x, e2x) {
                e2x.data.lasttime = Q2x.lasttime;
                var i2x = Q2x.events;
                if (Q2x.more) i2x = this.JY4c(i2x, e2x.data.pagesize);
                return {
                    list: i2x,
                    total: Q2x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q2x.zX1x = NEJ.C();
    b2x = q2x.zX1x.N2x(q2x.hM5R);
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bmI3x = function(u2x, cU3x) {
        return u2x + "-" + cU3x
    };
    b2x.cGB0x = function(e2x) {
        this.cp3x("ievent-get", e2x)
    };
    b2x.cGD0x = function(e2x) {
        this.cp3x("ievent-new-get", e2x)
    };
    b2x.cGE0x = function(e2x) {
        this.cp3x("ievent-user-get", e2x)
    };
    b2x.cGF0x = function(u2x, cU3x) {
        return this.sE9v(this.bmI3x(u2x, cU3x))
    };
    b2x.cGG0x = function(JU4Y, e2x) {
        if (!JU4Y || !JU4Y.length) return;
        e2x = e2x || {};
        var bz3x = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, FU2x = [], byz6t = [], j2x; i < JU4Y.length; ++i) {
            j2x = JU4Y[i];
            j2x = this.sE9v(this.bmI3x(j2x.type, j2x.id));
            if (!j2x) {
                FU2x.push(JU4Y[i].id);
                byz6t.push(bz3x[JU4Y[i].type] || 0)
            }
        }
        if (!FU2x.length) {
            this.z2x("oneventresload", e2x.conf);
            return
        }
        e2x.data = {
            ids: JSON.stringify(FU2x),
            types: JSON.stringify(byz6t)
        };
        e2x.onload = this.cwA7t.f2x(this);
        this.cp3x("ievent-res-get", e2x)
    };
    b2x.cwA7t = function(m2x) {
        if (m2x.code != 200) {
            this.z2x("oneventreserror", m2x.code);
            return
        }
        var bz3x = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i2x = m2x.results; i < i2x.length; ++i) {
            this.pQ8I(this.bmI3x(bz3x[i2x[i].type], i2x[i].id), i2x[i])
        }
        this.z2x("oneventresload", m2x.conf)
    };
    b2x.byD6x = function(j2x) {
        var K2x = "event-list";
        this.bsg4k(K2x, j2x);
        this.z2x("onitemadd", {
            key: K2x,
            action: "add",
            data: j2x,
            flag: -1
        })
    };
    b2x.oZ7S = function(e2x) {
        this.cp3x("ievent-like", e2x)
    };
    b2x.mv7o = function(e2x) {
        this.cp3x("ievent-delete", e2x)
    };
    b2x.JY4c = function(i2x, gc5h) {
        for (var i = i2x.length; i < gc5h; i++) i2x.push(null);
        return i2x
    };
    b2x.cwI7B = function(i2x) {
        var m2x = [];
        if (!i2x || !i2x.length) return;
        k2x.bd2x(i2x, function(d2x) {
            d2x.biData = this.byE6y(d2x)
        }, this)
    };
    b2x.byE6y = function() {
        var Xd8V = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cwy7r = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d2x) {
            var Q2x = {
                id: d2x.id,
                sourceid: d2x.user.userId,
                alg: d2x.rcmdInfo ? d2x.rcmdInfo.alg : null,
                contentType: Xd8V[d2x.type] || (k2x.dl4p(cwy7r, d2x.type) != -1 ? "user_event" : "other")
            };
            return Q2x
        }
    }();
    b2x.DU2x = function(cwv7o, d2x) {
        var Q2x = this.byE6y(d2x);
        Q2x.actionType = cwv7o;
        if (window.log) log("eventclick", Q2x)
    };
    b2x.cGI0x = function(e2x) {
        this.cp3x("event_latest-list", e2x)
    }
})();
(function(factory) {
    window.SparkMD5 = factory()
})(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
            return a + b & 4294967295
        },
        hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [],
            i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "",
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function(contents) {
        this.rX8P += contents;
        this.bq3x += contents.length;
        var length = this.rX8P.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR4V, md5blk(this.rX8P.substring(i - 64, i)))
        }
        this.rX8P = this.rX8P.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function(raw) {
        var buff = this.rX8P,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pa7T(tail, length);
        ret = hex(this.dR4V);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function() {
        this.rX8P = "";
        this.bq3x = 0;
        this.dR4V = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.rX8P,
            length: this.bq3x,
            hash: this.dR4V
        }
    };
    SparkMD5.prototype.setState = function(state) {
        this.rX8P = state.buff;
        this.bq3x = state.length;
        this.dR4V = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function() {
        delete this.dR4V;
        delete this.rX8P;
        delete this.bq3x
    };
    SparkMD5.prototype.pa7T = function(tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR4V, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq3x * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR4V, tail)
    };
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.rX8P.buffer, arr, true),
            length = buff.length,
            i;
        this.bq3x += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR4V, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.rX8P = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.rX8P,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pa7T(tail, length);
        ret = hex(this.dR4V);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.rX8P = new Uint8Array(0);
        this.bq3x = 0;
        this.dR4V = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.pa7T = SparkMD5.prototype.pa7T;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        en4r = c2x("nej.g"),
        k2x = c2x("nej.u"),
        fJ4N = c2x("nej.n"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        io5t = c2x("nm.x.nos"),
        w2x = c2x("nm.w");
    var cwt7m = 1024 * 256,
        cws7l = 1024 * 1024 * 2,
        rk8c = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bzj6d = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br3x,
        rj8b = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jz6t = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var nQ7J = {};
    var wf0x = q2x.hP5U.A2x();
    io5t.cGJ0x = function() {
        return jz6t
    };
    var cwo7h = function() {
        return k2x.nM7F(6) + +(new Date)
    };
    var JS4W = function(iK5P, e2x) {
        if (!nQ7J[e2x.taskId]) {
            return
        }(e2x.onuploading || br3x).call(this, iK5P)
    };
    var bna3x = function(R2x) {
        var cwn7g = R2x.md5,
            cT3x = R2x.file,
            cwm7f = cwn7g + cT3x.size;
        return "nos_file_hash_" + cwm7f
    };
    var cwl7e = function(R2x) {
        var K2x = bna3x(R2x),
            j2x = v2x.bLb9S(K2x, "{}");
        try {
            j2x = JSON.parse(j2x)
        } catch (e) {
            j2x = {}
        }
        return j2x
    };
    var cwk7d = function(R2x, e2x) {
        if (!R2x.md5) {
            return
        }
        var K2x = bna3x(R2x),
            j2x = v2x.bLb9S(K2x, "{}");
        try {
            j2x = JSON.parse(j2x)
        } catch (e) {
            j2x = {}
        }
        NEJ.X(j2x, e2x);
        v2x.vv9m(K2x, JSON.stringify(j2x))
    };
    var cwj7c = function(R2x) {
        var K2x = bna3x(R2x);
        v2x.Lu4y(K2x)
    };
    var cwh7a = function(R2x, eO4S) {
        var Y2x = R2x.urls[Math.min(R2x.urlIndex, R2x.urls.length - 1)],
            cT3x = R2x.file,
            li6c = R2x.bucket,
            mM7F = R2x.objectKey,
            cG3x = R2x.token,
            bJ3x = R2x.context,
            oW7P = {},
            Np5u = bzj6d.call(cT3x, R2x.beg, R2x.end),
            bv3x = {
                offset: R2x.beg,
                complete: R2x.lastChunk || false,
                version: "1.0"
            };
        if (bJ3x) {
            bv3x.context = bJ3x
        }
        oW7P["x-nos-token"] = cG3x;
        oW7P[en4r.ym0x] = cT3x.type;
        R2x.reqId = v2x.bl3x(Y2x + "/" + li6c + "/" + mM7F, {
            type: "json",
            method: "POST",
            headers: oW7P,
            query: bv3x,
            data: Np5u,
            onload: eO4S.onload,
            onerror: eO4S.onerror
        })
    };
    var cwg7Z = function(m2x, R2x, e2x) {
        m2x = {
            code: 200,
            fileName: e2x.file.name,
            size: e2x.file.size,
            type: e2x.file.type,
            bucket: R2x.bucket,
            docId: R2x.docId,
            objectKey: R2x.objectKey,
            url: "//nos.netease.com/" + R2x.bucket + "/" + R2x.objectKey,
            taskId: e2x.taskId
        };
        cwj7c(R2x);
        if (!nQ7J[e2x.taskId]) {
            return
        }
        delete nQ7J[e2x.taskId];
        wf0x.eS4W("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m2x)
        });
        (e2x.onsuccess || br3x).call(this, m2x)
    };
    var cwf7Y = function(m2x, e2x) {
        (e2x.onerror || br3x).call(this, m2x)
    };
    var cwc7V = function(m2x, R2x, e2x) {
        R2x.context = m2x.context;
        R2x.beg = m2x.offset;
        var iK5P = R2x.beg / R2x.file.size;
        cwk7d(R2x, {
            bucket: R2x.bucket,
            objectKey: R2x.objectKey,
            token: R2x.token,
            context: R2x.context,
            beg: R2x.beg,
            updateTime: +(new Date)
        });
        iK5P = rj8b.DNS_GET + (rj8b.UPLOADED - rj8b.DNS_GET) * iK5P;
        JS4W(iK5P, e2x);
        if (R2x.lastChunk) {
            cwg7Z(m2x, R2x, e2x)
        } else {
            bbR0x(R2x, e2x)
        }
    };
    var cwb7U = function(m2x, R2x, e2x) {
        wf0x.eS4W("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m2x.data,
            body: m2x.extData,
            ext: JSON.stringify(R2x),
            timging: +(new Date) - R2x.chuckUploadStartTime
        });
        if (R2x.urlIndex < Math.max(R2x.urls.length - 1, 5)) {
            R2x.urlIndex++;
            bbR0x(R2x, e2x)
        } else {
            cwf7Y(m2x, e2x)
        }
    };
    var bbR0x = function(R2x, e2x) {
        if (!R2x || R2x.step == -1) {
            return
        }
        R2x.end = R2x.beg + cwt7m;
        if (R2x.end >= R2x.file.size) {
            R2x.end = R2x.file.size;
            R2x.lastChunk = true
        }
        R2x.chuckUploadStartTime = +(new Date);
        cwh7a(R2x, {
            onload: cwc7V.ew4A(this, R2x, e2x),
            onerror: cwb7U.ew4A(this, R2x, e2x)
        })
    };
    var cvZ7S = function(m2x, R2x, e2x) {
        R2x.beg = m2x.offset;
        var iK5P = R2x.beg / R2x.file.size;
        iK5P = rj8b.DNS_GET + (rj8b.UPLOADED - rj8b.DNS_GET) * iK5P;
        JS4W(iK5P, e2x);
        bbR0x(R2x, e2x)
    };
    var cvY7R = function(m2x, R2x, e2x) {
        R2x.beg = 0;
        delete R2x.context;
        bnO3x(R2x, e2x)
    };
    var bAd6X = function(VI8A, R2x, e2x) {
        R2x.lastChunk = false;
        R2x.urls = VI8A;
        R2x.urlIndex = 0;
        JS4W(rj8b.DNS_GET, e2x);
        if (R2x.fromExist) {
            delete R2x.fromExist;
            var Y2x = R2x.urls[Math.min(R2x.urlIndex, R2x.urls.length - 1)],
                li6c = R2x.bucket,
                mM7F = R2x.objectKey,
                cG3x = R2x.token,
                bJ3x = R2x.context,
                oW7P = {},
                bv3x = {
                    context: bJ3x,
                    version: "1.0"
                };
            oW7P["x-nos-token"] = cG3x;
            R2x.reqId = v2x.bl3x(Y2x + "/" + li6c + "/" + mM7F + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oW7P,
                query: bv3x,
                onload: cvZ7S.ew4A(this, R2x, e2x),
                onerror: cvY7R.ew4A(this, R2x, e2x)
            })
        } else {
            R2x.beg = 0;
            bbR0x(R2x, e2x)
        }
    };
    var cvT7M = function(m2x, R2x, e2x) {
        m2x.code = rk8c.DNS_ERROR;
        (e2x.onerror || br3x).call(this, m2x)
    };
    var bAj6d = function(j2x, e2x) {
        var m2x = j2x.result || {},
            li6c = m2x.bucket,
            mM7F = m2x.objectKey,
            cG3x = m2x.token,
            R2x = nQ7J[e2x.taskId];
        if (!li6c || !mM7F || !cG3x || !R2x) {
            m2x.code = rk8c.TOKEN_ERROR;
            (e2x.onerror || br3x).call(this, m2x);
            return
        }
        R2x.bucket = li6c;
        R2x.objectKey = mM7F;
        R2x.docId = m2x.docId;
        R2x.token = cG3x;
        JS4W(rj8b.TOKEN_GET, e2x);
        if (location.protocol == "https:") {
            bAd6X(["//nosup-hz1.127.net"], R2x, e2x)
        } else {
            R2x.reqId = io5t.cvS7L({
                bucket: li6c,
                onload: bAd6X.ew4A(this, R2x, e2x),
                onerror: cvT7M.ew4A(this, R2x, e2x)
            })
        }
        R2x.step = 1
    };
    var cvR7K = function(m2x, e2x) {
        m2x.code = rk8c.TOKEN_ERROR;
        (e2x.onerror || br3x).call(this, m2x)
    };
    var bnO3x = function(R2x, e2x) {
        var cT3x = e2x.file,
            eP4T = cT3x.name || "",
            eA4E = eP4T.split(".").pop();
        io5t.bbX0x(NEJ.X({
            filename: eP4T,
            ext: eA4E,
            onload: bAj6d.ew4A(this, e2x),
            onerror: cvR7K.ew4A(this, e2x)
        }, e2x, function(p2x) {
            return k2x.gE5J(p2x) || k2x.lG6A(p2x)
        }))
    };
    var cvQ7J = function(R2x, e2x) {
        if (!R2x || R2x.step == -1) {
            return
        }
        R2x.md5 = R2x.spark.end();
        var JI3x = cwl7e(R2x) || {},
            li6c = JI3x.bucket,
            mM7F = JI3x.objectKey,
            cG3x = JI3x.token;
        if (!li6c || !mM7F || !cG3x) {
            bnO3x(R2x, e2x)
        } else {
            R2x.context = JI3x.context;
            R2x.beg = JI3x.beg;
            R2x.fromExist = true;
            bAj6d({
                result: JI3x
            }, e2x)
        }
    };
    var cvP7I = function(EI2x, R2x, e2x) {
        if (!R2x || R2x.step == -1) {
            return
        }
        R2x.beg = R2x.end;
        var iK5P = R2x.beg / R2x.file.size;
        iK5P = 0 + rj8b.MD5_DONE * iK5P;
        JS4W(iK5P, e2x);
        R2x.spark.append(EI2x.result);
        if (R2x.lastChunk) {
            cvQ7J(R2x, e2x)
        } else {
            bAy6s(R2x, e2x)
        }
    };
    var cvO7H = function(m2x, R2x, e2x) {
        R2x.md5 = "";
        bnO3x(R2x, e2x)
    };
    var bAy6s = function(R2x, e2x) {
        if (!R2x || R2x.step == -1) {
            return
        }
        R2x.end = R2x.beg + cws7l;
        if (R2x.end >= R2x.file.size) {
            R2x.end = R2x.file.size;
            R2x.lastChunk = true
        }
        var EI2x = new FileReader;
        EI2x.onload = cvP7I.f2x(this, EI2x, R2x, e2x);
        EI2x.onerror = cvO7H.f2x(this, EI2x, R2x, e2x);
        EI2x.readAsArrayBuffer(bzj6d.call(R2x.file, R2x.beg, R2x.end))
    };
    io5t.hV5a = function(e2x) {
        var cT3x = e2x.file,
            eP4T = cT3x.name || "",
            eA4E = eP4T.split(".").pop(),
            EK2x = cwo7h();
        e2x.taskId = EK2x;
        nQ7J[EK2x] = {
            step: 0
        };
        JS4W(0, e2x);
        var R2x = nQ7J[EK2x];
        R2x.id = EK2x;
        R2x.file = cT3x;
        R2x.beg = 0;
        R2x.lastChunk = false;
        R2x.spark = new SparkMD5.ArrayBuffer;
        var cvM7F = e2x.onerror || br3x;
        e2x.onerror = function() {
            if (!nQ7J[EK2x]) {
                return
            }
            delete nQ7J[EK2x];
            cvM7F.apply(this, arguments)
        };
        wf0x.eS4W("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAy6s(R2x, e2x);
        return EK2x
    };
    io5t.kk6e = function(C2x) {
        var R2x = nQ7J[C2x];
        if (R2x) {
            if (R2x.step == 0) {
                delete nQ7J[C2x]
            } else {
                R2x.step = -1;
                if (R2x.reqId) {
                    v2x.kk6e(R2x.reqId)
                }
                delete nQ7J[C2x]
            }
        }
    };
    io5t.bbX0x = function() {
        var yE0x = function(m2x, e2x) {
            (e2x.onload || br3x).call(this, m2x)
        };
        var BO1x = function(m2x, e2x) {
            (e2x.onerror || br3x).call(this, m2x)
        };
        var bAL6F = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e2x) {
            var bcb0x = e2x.returnBody || bAL6F;
            if (k2x.lG6A(bcb0x)) {
                try {
                    JSON.stringify(bcb0x)
                } catch (e) {
                    bcb0x = bAL6F
                }
            }
            return v2x.bl3x("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e2x.filename || "",
                    ext: e2x.ext || "",
                    type: e2x.type || jz6t.OTHER,
                    bucket: e2x.bucket || "",
                    local: e2x.local || false,
                    nos_product: e2x.nosProduct || 0,
                    return_body: bcb0x
                },
                onload: yE0x.ew4A(this, e2x),
                onerror: BO1x.ew4A(this, e2x)
            })
        }
    }();
    io5t.cvS7L = function() {
        var cvI7B = "//wanproxy.127.net/lbs";
        var yE0x = function(m2x, e2x) {
            if (m2x.lbs) {}
            var VI8A = m2x.upload;
            if (!VI8A || !VI8A.length) {
                BO1x(m2x, e2x)
            }(e2x.onload || br3x).call(this, VI8A)
        };
        var BO1x = function(m2x, e2x) {
            (e2x.onerror || br3x).call(this, m2x)
        };
        return function(e2x) {
            var li6c = e2x.bucket;
            return v2x.bl3x(cvI7B, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: li6c
                },
                onload: yE0x.ew4A(this, e2x),
                onerror: BO1x.ew4A(this, e2x)
            })
        }
    }();
    io5t.bcc0x = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        cd3x = c2x("nej.ut"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        io5t = c2x("nm.x.nos"),
        E2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        b2x, L2x;
    var gi5n = a1x.jq6k('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w2x.JD3x = NEJ.C();
    b2x = w2x.JD3x.N2x(bD3x.ej4n);
    b2x.ch3x = function() {
        this.cf3x = gi5n
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.bH3x = this.o2x;
        this.hE5J = a1x.H2x(this.o2x, "j-file")[0];
        h2x.s2x(this.hE5J, "change", this.pL8D.f2x(this))
    };
    b2x.bm3x = function(e2x) {
        e2x = e2x || {};
        this.bn3x(e2x);
        this.hE5J.id = e2x.inputId || "";
        this.hE5J.accept = e2x.accept || "*";
        this.xA0x = e2x
    };
    b2x.bcd0x = function() {
        return a1x.lQ6K(this.hE5J)
    };
    b2x.pL8D = function(d2x) {
        if (this.hE5J.value == "") return;
        var kC6w = this.hE5J.value.split("\\"),
            eP4T = kC6w.length > 0 ? kC6w[kC6w.length - 1] : kC6w[0],
            oz7s = (this.hE5J.files || [{}])[0];
        var cm3x = {
            files: this.hE5J.files,
            filename: eP4T,
            size: oz7s.size,
            cancelUpload: false
        };
        this.z2x("onchange", cm3x);
        if (cm3x.cancelUpload) {
            this.hE5J.value = "";
            return
        }
        if (cm3x.stopped) {
            return
        }
        this.Uv8n()
    };
    b2x.Uv8n = function() {
        if (this.hE5J.value == "") return;
        var kC6w = this.hE5J.value.split("\\"),
            eP4T = kC6w.length > 0 ? kC6w[kC6w.length - 1] : kC6w[0],
            eA4E = (eP4T.split(".") || []).pop(),
            oz7s = (this.hE5J.files || [{}])[0],
            EY2x = (oz7s.type || "").split("/").shift();
        if (oz7s.size > 100 * 1024 * 1024) {
            return this.mf7Y("onerror", {
                code: -200
            })
        }
        this.z2x("onuploading", 0);
        this.bBA7t = io5t.bbX0x(NEJ.X({
            onload: this.Uu8m.ew4A(this, eP4T),
            onerror: this.mf7Y.f2x(this)
        }, this.xA0x, function(p2x) {
            return k2x.gE5J(p2x) || k2x.lG6A(p2x)
        }))
    };
    b2x.Uu8m = function(bN3x, eP4T) {
        var m2x = bN3x.result || {},
            li6c = m2x.bucket,
            mM7F = m2x.objectKey,
            cG3x = m2x.token;
        if (!li6c || !mM7F || !cG3x) {
            bN3x.code = -100;
            this.mf7Y.call(this, bN3x);
            return
        }
        var oz7s = (this.hE5J.files || [{}])[0];
        var hK5P = a1x.dm4q(this.bH3x);
        hK5P[0].value = mM7F;
        hK5P[1].value = cG3x;
        hK5P[2].value = "json";
        if (oz7s.type && oz7s.type.indexOf("audio") == 0) {
            hK5P[3].value = "audio/mpeg"
        } else {
            hK5P[3].value = oz7s.type || ""
        }
        this.bH3x.action = "//nos.netease.com/" + li6c;
        this.Fc2x = m2x;
        this.ry8q = eP4T;
        this.z2x("onuploading", .2);
        this.hV5a()
    };
    b2x.hV5a = function() {
        this.bBA7t = v2x.hV5a(this.bH3x, {
            type: "json",
            onload: this.uW9N.f2x(this),
            onerror: this.mf7Y.f2x(this),
            onuploading: this.bcf0x.f2x(this)
        })
    };
    b2x.kk6e = function() {
        v2x.kk6e(this.bBA7t);
        this.bH3x.reset()
    };
    b2x.uW9N = function(bN3x) {
        var cG3x = this.Fc2x,
            eP4T = this.ry8q,
            oz7s = (this.hE5J.files || [{}])[0],
            kA6u = {
                code: 200,
                fileName: eP4T,
                size: oz7s.size,
                bucket: cG3x.bucket,
                docId: cG3x.docId,
                objectKey: cG3x.objectKey,
                url: "//nos.netease.com/" + cG3x.bucket + "/" + cG3x.objectKey
            };
        if (!bN3x) {
            bN3x = kA6u
        }
        if (!bN3x.code || bN3x.code == 200) {
            this.z2x("onsuccess", NEJ.X(kA6u, bN3x))
        } else {
            this.z2x("onerror", bN3x)
        }
        this.bH3x.reset()
    };
    b2x.mf7Y = function(bN3x) {
        this.z2x("onerror", bN3x);
        this.bH3x.reset()
    };
    b2x.bcf0x = function(iK5P) {
        this.z2x("onuploading", .2 + iK5P.loaded / iK5P.total * .8)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        cd3x = c2x("nej.ut"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        io5t = c2x("nm.x.nos"),
        E2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        b2x, L2x;
    w2x.Ur8j = NEJ.C();
    b2x = w2x.Ur8j.N2x(cd3x.cJ3x);
    b2x.bm3x = function(e2x) {
        e2x = e2x || {};
        this.bn3x(e2x);
        this.bci0x = w2x.JD3x.A2x(NEJ.X({
            parent: e2x.parent,
            onchange: this.pL8D.f2x(this),
            onuploading: this.z2x.f2x(this, "onuploading"),
            onsuccess: this.z2x.f2x(this, "onsuccess"),
            onerror: this.z2x.f2x(this, "onerror")
        }, e2x, function(p2x) {
            return k2x.gE5J(p2x) || k2x.lG6A(p2x)
        }));
        if (e2x.multiple && io5t.bcc0x()) {
            a1x.gH5M(this.bci0x.bcd0x(), "multiple", true)
        }
        this.xA0x = e2x
    };
    b2x.pL8D = function(e2x) {
        var eP4T = e2x.filename,
            eA4E = (eP4T.split(".") || []).pop();
        this.bBY7R = (e2x.files || [{}])[0];
        this.z2x("onchange", e2x);
        if (io5t.bcc0x() && !e2x.stopped && !e2x.cancelUpload) {
            this.Uv8n(true);
            e2x.stopped = true
        }
    };
    b2x.bcd0x = function() {
        return this.bci0x.bcd0x()
    };
    b2x.cvH7A = function() {
        return this.bBY7R
    };
    b2x.Uv8n = function(fc4g, cT3x) {
        cT3x = cT3x || this.bBY7R;
        if (io5t.bcc0x()) {
            this.bCc7V = io5t.hV5a(NEJ.X({
                file: cT3x,
                local: this.xA0x.bucket && this.xA0x.bucket.length,
                onuploading: this.z2x.f2x(this, "onuploading"),
                onsuccess: this.z2x.f2x(this, "onsuccess"),
                onerror: this.z2x.f2x(this, "onerror")
            }, this.xA0x, function(p2x) {
                return k2x.gE5J(p2x) || k2x.lG6A(p2x)
            }));
            return this.bCc7V
        } else if (!fc4g) {
            this.bci0x.Uv8n()
        }
    };
    b2x.kk6e = function(C2x) {
        C2x = C2x || this.bCc7V;
        if (C2x) {
            io5t.kk6e(C2x)
        }
        this.bci0x.kk6e()
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        en4r = c2x("nej.g"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        fJ4N = c2x("nej.n"),
        I2x = c2x("nej.ut"),
        bc2x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        M2x = c2x("nm.x.f"),
        io5t = c2x("nm.x.nos"),
        b2x, L2x, bos3x = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        boA3x = 5 * 1024 * 1024,
        cGK0x = 80,
        bcl0x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w2x.bCi7b = NEJ.C();
    b2x = w2x.bCi7b.N2x(I2x.um9d);
    b2x.bhy2x = function() {
        return {
            x: this.Cz1x.clientWidth - this.o2x.offsetWidth,
            y: this.Cz1x.clientHeight - this.o2x.offsetHeight
        }
    };
    w2x.boM3x = NEJ.C();
    b2x = w2x.boM3x.N2x(bc2x.ej4n);
    b2x.ch3x = function() {
        this.cf3x = "m-xwgt-share-upload"
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.bcq0x = i2x.shift();
        this.Jy3x = i2x.shift();
        this.SR7K = i2x.shift();
        this.bCn7g = {
            onchange: this.bCr7k.ew4A(this, 0),
            onerror: this.dO4S.f2x(this),
            onsuccess: this.rK8C.f2x(this),
            multiple: true,
            parent: this.Jy3x,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bpC4G = {
            onchange: this.bCr7k.ew4A(this, 1),
            onerror: this.dO4S.f2x(this),
            onsuccess: this.rK8C.f2x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cvF7y = w2x.Ur8j.A2x(this.bCn7g)
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.bpC4G.parent = e2x.button;
        this.Jq3x && this.Jq3x.T2x();
        this.Jq3x = w2x.Ur8j.A2x(this.bpC4G);
        this.o2x.style.display = "none";
        if (!!this.eZ4d) {
            for (var i = this.eZ4d.length - 1; i >= 0; i--) {
                a1x.cM3x(this.eZ4d[i].element, false);
                if (this.eZ4d[i].dragger) this.eZ4d[i].dragger.T2x()
            }
        }
        this.eZ4d = [];
        if (this.Bp1x) {
            clearTimeout(this.Bp1x)
        }
        this.bcE0x(0);
        this.Sz7s = 0;
        this.bX3x([
            [this.bCn7g.parent, "click", this.bCU7N.f2x(this)],
            [this.bpC4G.parent, "click", this.bCU7N.f2x(this)]
        ])
    };
    b2x.bC3x = function() {
        h2x.hj5o(this.sM9D, "click");
        if (!!this.eZ4d) {
            for (var i = this.eZ4d.length - 1; i >= 0; i--) {
                a1x.cM3x(this.eZ4d[i].element, false);
                if (this.eZ4d[i].dragger) this.eZ4d[i].dragger.T2x()
            }
        }
        this.eZ4d = [];
        if (this.Bp1x) {
            clearTimeout(this.Bp1x)
        }
        this.Bp1x = 0;
        this.Jq3x && this.Jq3x.T2x();
        delete this.Jq3x;
        this.bG3x()
    };
    b2x.bCU7N = function(d2x) {
        if (!io5t.bcc0x() && this.eZ4d.doing) {
            h2x.bh2x(d2x)
        }
    };
    b2x.bCr7k = function(e2x, r2x) {
        var lv6p = e2x.files,
            hp5u;
        e2x.stopped = true;
        if (!lv6p) {
            if (e2x.filename) {
                lv6p = [{
                    name: e2x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = lv6p.length; i < len; i++) {
            if (!bcl0x.test(lv6p[i].name)) {
                this.bpG4K({
                    path: lv6p[i].name,
                    index: r2x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (lv6p[i].size > boA3x) {
                this.bpK4O(-3);
                this.bpG4K({
                    path: lv6p[i].name,
                    index: r2x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpG4K({
                    path: lv6p[i].name,
                    file: lv6p[i],
                    index: r2x,
                    status: 0
                })
            }
        }
    };
    b2x.bpG4K = function(tZ9Q) {
        if (this.eZ4d.length >= 9) {
            this.bpK4O(-10, 3e3, this.bDf7Y.f2x(this));
            return
        }
        this.cvE7x(tZ9Q);
        this.eZ4d.push(tZ9Q);
        if (!!this.eZ4d.length) {
            this.o2x.style.display = ""
        }
        if (this.eZ4d.length >= 9) {
            this.Jy3x.style.display = "none"
        } else {
            this.Jy3x.style.display = ""
        }
        this.Jn3x()
    };
    b2x.Jn3x = function() {
        var bpN4R = -1,
            bDl7e = 0;
        for (var i = 0, l = this.eZ4d.length; i < l; i++) {
            if (this.eZ4d[i].status == 1) {
                return
            }
            if (this.eZ4d[i].status == 0 && bpN4R < 0) {
                bpN4R = i
            }
            if (this.eZ4d[i].status == 2 || this.eZ4d[i].status < 0) {
                bDl7e++
            }
        }
        var p2x = this.eZ4d[bpN4R];
        if (p2x) {
            (p2x.index == 0 ? this.cvF7y : this.Jq3x).Uv8n(false, p2x.file);
            p2x.status = 1;
            this.eZ4d.doing = p2x;
            this.z2x("onstartupload", {})
        } else if (bDl7e == this.eZ4d.length) {
            this.z2x("onfinishupload", {})
        }
    };
    b2x.bpS4W = function() {
        return this.eZ4d.doing || {}
    };
    b2x.dO4S = function(d2x) {
        var tZ9Q = this.bpS4W();
        tZ9Q.status = -4;
        tZ9Q.fail = "上传<br>失败";
        this.bDo7h(tZ9Q);
        this.eZ4d.doing = null;
        this.Jn3x()
    };
    b2x.rK8C = function(d2x) {
        var tZ9Q = this.bpS4W(),
            dQ4U = d2x.fileName.match(bcl0x);
        tZ9Q.picUrl = d2x.url;
        v2x.bl3x("/upload/event/img/v1", {
            query: {
                imgid: d2x.docId,
                format: dQ4U[1]
            },
            type: "json",
            onload: this.bDq7j.f2x(this),
            onerror: this.bDq7j.f2x(this)
        })
    };
    b2x.bDq7j = function(d2x) {
        if (d2x && d2x.code == 200 && d2x.picInfo) {
            var tZ9Q = this.bpS4W();
            tZ9Q.status = 2;
            var bx3x = NEJ.X({}, d2x.picInfo);
            bx3x.originId = bx3x.originIdStr;
            bx3x.squareId = bx3x.squareIdStr;
            bx3x.rectangleId = bx3x.rectangleIdStr;
            bx3x.pcSquareId = bx3x.pcSquareIdStr;
            bx3x.pcRectangleId = bx3x.pcRectangleIdStr;
            bx3x.originJpgId = bx3x.originJpgIdStr || bx3x.originJpgId;
            tZ9Q.picInfo = bx3x;
            this.bDo7h(tZ9Q);
            this.eZ4d.doing = null;
            this.Jn3x()
        } else {
            this.dO4S(d2x)
        }
    };
    b2x.bpK4O = function(r2x, kX6R, eO4S) {
        if (this.Sz7s < r2x) {
            return
        }
        if (this.Bp1x) {
            clearTimeout(this.Bp1x);
            this.Bp1x = 0
        }
        if (kX6R) {
            this.SR7K.innerText = bos3x[r2x * 1];
            this.Sz7s = r2x;
            this.Bp1x = setTimeout(this.bcE0x.f2x(this, r2x, eO4S), kX6R)
        } else {
            this.SR7K.innerText = bos3x[r2x];
            this.Sz7s = r2x
        }
        this.SR7K.style.display = ""
    };
    b2x.bcE0x = function(r2x, eO4S) {
        if (r2x && this.Sz7s !== r2x) {
            return
        }
        this.Sz7s = 0;
        this.SR7K.innerText = bos3x[0];
        this.SR7K.style.display = "none";
        eO4S && eO4S()
    };
    b2x.cvE7x = function(cT3x) {
        var j2x = {};
        if (cT3x.fail) {
            j2x.fail = cT3x.fail
        }
        var dW4a = a1x.cc3x("m-xwgt-share-upload-preview", j2x);
        cT3x.element = a1x.os7l(dW4a);
        h2x.s2x(a1x.H2x(cT3x.element, "del")[0], "mousedown", this.cvD7w.f2x(this, cT3x), false);
        this.bcq0x.insertBefore(cT3x.element, this.bcq0x.lastElementChild);
        cT3x.dragger = w2x.bCi7b.A2x({
            view: this.bcq0x.parentNode,
            body: cT3x.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.PW6Q.f2x(this, cT3x),
            onchange: this.cvB7u.f2x(this, cT3x),
            ondragend: this.bhR2x.f2x(this, cT3x)
        })
    };
    b2x.bDo7h = function(cT3x) {
        if (!cT3x || !cT3x.element) {
            return false
        }
        var j2x = {};
        if (cT3x.fail) {
            j2x.fail = cT3x.fail
        } else {
            j2x.url = cT3x.picUrl
        }
        a1x.y2x(cT3x.element, "z-fail");
        cT3x.element.firstChild.outerHTML = a1x.cc3x("m-xwgt-share-upload-preview-img", j2x)
    };
    b2x.PW6Q = function(p2x, kB6v) {
        a1x.y2x(p2x.element, "z-sel")
    };
    b2x.cvB7u = function(p2x, kB6v) {
        var cGL0x, gq5v = this.eZ4d.length - 1,
            nU7N;
        for (var i = gq5v; i >= 0; i--) {
            a1x.x2x(this.eZ4d[i].element, "z-jump");
            if (this.eZ4d[i] == p2x) {
                nU7N = i
            } else {
                a1x.fa4e(this.eZ4d[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var RG7z = {
            x: 46 + 92 * (nU7N % 5) + kB6v.left,
            y: 46 + 92 * (nU7N / 5 >> 0) + kB6v.top
        };
        var bqe4i = RG7z.x / 92 >> 0,
            bqk4o = RG7z.y / 92 >> 0,
            yS0x = Math.max(0, Math.min(gq5v, bqk4o * 5 + bqe4i));
        if (yS0x == nU7N) {
            return
        }
        var cvy7r = yS0x < nU7N;
        for (var i = Math.min(yS0x, nU7N); i <= Math.max(yS0x, nU7N); i++) {
            if (i !== nU7N) {
                var bDH7A = i % 5;
                if (cvy7r) {
                    if (bDH7A == 4) {
                        a1x.fa4e(this.eZ4d[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a1x.fa4e(this.eZ4d[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDH7A == 0) {
                        a1x.fa4e(this.eZ4d[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a1x.fa4e(this.eZ4d[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b2x.bhR2x = function(p2x, kB6v) {
        var cGM0x, gq5v = this.eZ4d.length - 1,
            nU7N;
        for (var i = gq5v; i >= 0; i--) {
            a1x.fa4e(this.eZ4d[i].element, {
                left: "",
                top: ""
            });
            if (this.eZ4d[i] == p2x) {
                nU7N = i
            }
        }
        a1x.x2x(p2x.element, "z-sel");
        var RG7z = {
            x: 46 + 92 * (nU7N % 5) + kB6v.left,
            y: 46 + 92 * (nU7N / 5 >> 0) + kB6v.top
        };
        var bqe4i = RG7z.x / 92 >> 0,
            bqk4o = RG7z.y / 92 >> 0,
            yS0x = Math.max(0, Math.min(gq5v, bqk4o * 5 + bqe4i));
        if (yS0x == nU7N) {
            return
        }
        this.bcq0x.insertBefore(p2x.element, (this.eZ4d[yS0x + (yS0x > nU7N ? 1 : 0)] || {}).element || this.Jy3x);
        this.eZ4d.splice(nU7N, 1);
        this.eZ4d.splice(yS0x, 0, p2x)
    };
    b2x.cvD7w = function(p2x, d2x) {
        a1x.cM3x(p2x.element, false);
        if (p2x.dragger) p2x.dragger.T2x();
        delete p2x.dragger;
        var r2x = -1;
        for (var i = this.eZ4d.length - 1; i >= 0; i--) {
            if (this.eZ4d[i] == p2x) {
                r2x = i;
                break
            }
        }
        this.eZ4d.splice(r2x, r2x >= 0 ? 1 : 0);
        delete p2x;
        if (this.eZ4d.length >= 9) {
            this.Jy3x.style.display = "none"
        } else {
            this.Jy3x.style.display = ""
        }
        if (!this.eZ4d.length) {
            this.o2x.style.display = "none";
            this.bcE0x(0)
        } else {
            this.bDf7Y()
        }
        if (this.eZ4d.doing == p2x) {
            this.eZ4d.doing = null
        }
        this.Jn3x()
    };
    b2x.bDf7Y = function() {
        var bDL7E = false;
        for (var i = 0, len = this.eZ4d.length; i < len; i++) {
            if (this.eZ4d[i].status == -3) {
                bDL7E = true
            }
        }
        if (bDL7E) {
            this.bpK4O(-3)
        } else {
            this.bcE0x(-3)
        }
    };
    b2x.Rx7q = function() {
        var dC4G = [];
        for (var i = this.eZ4d.length - 1; i >= 0; i--) {
            if (this.eZ4d[i].status == 2) {
                dC4G.unshift(this.eZ4d[i].picInfo)
            }
        }
        return dC4G
    };
    I2x.fN4R.A2x({
        element: w2x.boM3x,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        bc2x = c2x("nej.ui"),
        O2x = c2x("nej.ut"),
        b2x, L2x;
    if (!!O2x.nx7q) return;
    O2x.nx7q = NEJ.C();
    b2x = O2x.nx7q.N2x(O2x.Zy9p);
    L2x = O2x.nx7q.cs3x;
    b2x.bm3x = function(e2x) {
        this.cvv7o(e2x.more);
        this.FO2x = a1x.B2x(e2x.sbody);
        this.cvt7m = e2x.fixScrollPosition;
        this.bX3x([
            [this.FO2x, "scroll", this.cvs7l.f2x(this)]
        ]);
        var dq4u = e2x.delta;
        if (dq4u == null) dq4u = 30;
        this.Rb7U = Math.max(0, dq4u);
        var cz3x = parseInt(e2x.count) || 0;
        this.jB6v = Math.max(0, cz3x);
        var gW5b = parseInt(e2x.number) || 0;
        if (gW5b > 1 && gW5b <= cz3x) {
            this.Dh2x = gW5b
        }
        this.bn3x(e2x)
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.BL1x;
        delete this.FO2x;
        delete this.tT9K;
        delete this.bdd1x
    };
    b2x.BW1x = function(bi2x, bq3x) {
        var bM3x = this.yn0x + (this.jB6v - 1) * this.oN7G,
            gc5h = this.jB6v * this.oN7G;
        return L2x.BW1x.call(this, bM3x, bi2x, gc5h, bq3x)
    };
    b2x.cvv7o = function(bde1x) {
        this.BL1x = a1x.B2x(bde1x);
        this.bX3x([
            [this.BL1x, "click", this.pq8i.f2x(this)]
        ])
    };
    b2x.bqS4W = function(F2x) {
        F2x = F2x || {};
        if (this.tT9K || !F2x) return;
        if (!F2x.scrollHeight) F2x = a1x.pn8f();
        var bi2x = a1x.hO5T(this.in5s, this.cvt7m ? F2x : null),
            dq4u = bi2x.y + this.in5s.offsetHeight - F2x.scrollTop - F2x.clientHeight,
            bqU4Y = F2x.scrollHeight <= F2x.clientHeight;
        if (dq4u <= this.Rb7U || bqU4Y && !this.tT9K) {
            this.pq8i()
        }
    };
    b2x.cvs7l = function(d2x) {
        if (this.tT9K) return;
        this.bqS4W(h2x.X2x(d2x))
    };
    b2x.BJ1x = function(d2x) {
        L2x.BJ1x.apply(this, arguments);
        if (!d2x.stopped) {
            this.Qi6c();
            var bi2x = 0;
            if (d2x.index > 1) {
                bi2x = this.yn0x + ((d2x.index - 1) * this.jB6v - 1) * this.oN7G
            }
            this.hW5b = bi2x;
            this.pq8i()
        }
    };
    b2x.bQf0x = function(e2x) {
        if (!!this.Dh2x) {
            var dq4u = e2x.offset > 0 ? this.oN7G : this.yn0x,
                gc5h = dq4u + this.oN7G * (this.Dh2x - 1);
            this.hW5b = e2x.offset + gc5h;
            e2x.data.limit = gc5h;
            e2x.limit = gc5h;
            delete this.Dh2x
        }
        return e2x
    };
    b2x.bhK2x = function(e2x) {
        delete this.bdd1x;
        L2x.bhK2x.apply(this, arguments);
        this.bEn7g()
    };
    b2x.bid2x = function(d2x) {
        if (d2x.key != this.jh5m.key) return;
        switch (d2x.action) {
            case "refresh":
            case "append":
                delete this.bdd1x;
                break
        }
        L2x.bid2x.apply(this, arguments)
    };
    b2x.PC6w = function() {
        this.zM1x("onbeforelistload", "列表加载中...");
        a1x.ba2x(this.BL1x, "display", "none")
    };
    b2x.bjd2x = function(i2x, bi2x, gc5h) {
        var bq3x = i2x.length,
            brd4h = i2x.loaded ? bi2x + gc5h >= bq3x : bi2x + gc5h > bq3x;
        this.hW5b = Math.min(this.hW5b, bq3x);
        a1x.ba2x(this.BL1x, "display", brd4h ? "none" : "");
        if (brd4h) this.tT9K = !0;
        if (this.jB6v > 0) {
            var bx3x = this.BW1x(bi2x, i2x.length);
            if (this.bQO1x(bx3x.index, bx3x.total)) return !0;
            var dq4u = this.yn0x - this.oN7G,
                gW5b = this.jB6v * this.oN7G;
            this.tT9K = (bi2x + gc5h - dq4u) % gW5b == 0 || brd4h;
            a1x.ba2x(this.BL1x, "display", this.tT9K ? "none" : "");
            this.bio2x(this.tT9K && bx3x.total > 1 ? "" : "none")
        }
    };
    b2x.biQ2x = function() {
        this.hW5b = 0;
        this.tT9K = !0;
        this.zM1x("onemptylist", "没有列表数据！")
    };
    b2x.Pu6o = function(dW4a, kB6v) {
        this.in5s.insertAdjacentHTML(kB6v || "beforeEnd", dW4a)
    };
    b2x.Pt6n = function(hm5r) {
        this.fH4L = this.fH4L || [];
        if (k2x.eJ4N(hm5r)) {
            fu4y.push.apply(this.fH4L, hm5r)
        } else {
            this.fH4L.push(hm5r)
        }
    };
    b2x.ZY0x = function(d2x) {
        a1x.mR7K(this.cu3x);
        this.Pd6X(d2x, "onafteradd");
        var fc4g = d2x.flag;
        if (d2x.stopped || !fc4g) return;
        if (this.jB6v > 0) {
            this.bit2x();
            return
        }
        this.hW5b += 1;
        fc4g == -1 ? this.bjW2x(d2x.data) : this.bRF2x(d2x.data)
    };
    b2x.bab0x = function(d2x) {
        this.Pd6X(d2x, "onafterdelete");
        if (d2x.stopped) return;
        if (this.jB6v > 0) {
            this.bit2x();
            return
        }
        var C2x = d2x.data[this.fg4k.pkey];
        if (!!this.fH4L) {
            var p2x = a1x.bCg7Z(C2x),
                r2x = k2x.dl4p(this.fH4L, p2x);
            if (r2x >= 0) {
                this.fH4L.splice(r2x, 1);
                this.hW5b -= 1
            }
            if (!!p2x) p2x.T2x()
        } else {
            var g2x = a1x.B2x(this.bOl0x(C2x));
            if (!!g2x) this.hW5b -= 1;
            a1x.cM3x(g2x)
        }
        if (this.hW5b <= 0) this.pq8i()
    };
    b2x.bjQ2x = function(bi2x, gc5h) {
        if (bi2x != this.hW5b) return;
        if (this.Yy9p()) {
            this.tT9K = !1;
            this.bEn7g()
        }
    };
    b2x.bjU2x = function(bi2x, gc5h) {
        if (bi2x != 0) return;
        var Km4q = this.S2x.hF5K(this.jh5m.key);
        for (var i = gc5h - 1; i >= 0; i--) {
            this.bjW2x(Km4q[i])
        }
    };
    b2x.bEn7g = function() {
        var F2x = this.FO2x;
        if (!F2x || this.tT9K) return;
        this.bqS4W(this.FO2x)
    };
    b2x.gM5R = function() {
        delete this.tT9K;
        L2x.gM5R.apply(this, arguments)
    };
    b2x.pq8i = function() {
        if (!!this.bdd1x) return;
        this.bdd1x = !0;
        var bi2x = this.hW5b;
        this.hW5b += bi2x == 0 ? this.yn0x : this.oN7G;
        this.bQb0x(bi2x)
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        db3x = c2x("nej.x"),
        O2x = c2x("nej.ut"),
        b2x;
    if (!!O2x.Gb2x) return;
    O2x.Gb2x = NEJ.C();
    b2x = O2x.Gb2x.N2x(O2x.cJ3x);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.jk5p = e2x.event || "click";
        this.kT6N = e2x.selected || "js-selected";
        this.nT7M = e2x.disabled || "js-disabled";
        this.bEq7j = !!e2x.inverse;
        this.cvp6j(e2x.list);
        this.Qo6i(e2x.index || 0)
    };
    b2x.bC3x = function() {
        var cvo6i = function(g2x) {
            this.brV4Z(g2x, !1)
        };
        return function() {
            this.bG3x();
            k2x.bd2x(this.bU3x, cvo6i, this);
            delete this.bU3x;
            delete this.jk5p;
            delete this.cq3x;
            delete this.nT7M;
            delete this.kT6N;
            delete this.bEq7j
        }
    }();
    b2x.cvp6j = function() {
        var bfL1x = function(p2x) {
            if (!p2x) return;
            this.bU3x.push(p2x);
            var r2x = this.bU3x.length - 1,
                dv4z = this.bsh4l[r2x];
            if (!dv4z) {
                dv4z = this.Qo6i.f2x(this, r2x);
                this.bsh4l[r2x] = dv4z
            }
            this.bX3x([
                [p2x, this.jk5p, dv4z]
            ])
        };
        return function(i2x) {
            this.bU3x = [];
            if (!this.bsh4l) this.bsh4l = [];
            k2x.bd2x(i2x, bfL1x, this)
        }
    }();
    b2x.brV4Z = function(F2x, cvn6h) {
        !!cvn6h && !this.bEq7j ? a1x.y2x(F2x, this.kT6N) : a1x.x2x(F2x, this.kT6N)
    };
    b2x.Qo6i = function(r2x, PE6y, j2x) {
        var F2x = this.bU3x[r2x];
        if (PE6y != !0 && (r2x == this.cq3x || !F2x || a1x.bE3x(F2x, this.nT7M))) {
            h2x.cn3x(arguments[1]);
            return this
        }
        var d2x = {
            index: r2x,
            last: this.cq3x,
            list: this.lw6q(),
            data: j2x || a1x.t2x(F2x, "value")
        };
        this.cq3x = r2x;
        F2x = this.bU3x[d2x.last];
        if (!!F2x) this.brV4Z(F2x, !1);
        F2x = this.bU3x[this.cq3x];
        this.brV4Z(F2x, !0);
        this.z2x("onchange", d2x);
        if (!d2x.nostop) h2x.cn3x(arguments[1]);
        return this
    };
    b2x.tj9a = function() {
        return this.cq3x
    };
    b2x.lw6q = function() {
        return this.bU3x
    };
    a1x.cvm6g = db3x.cvm6g = function(bI3x, e2x) {
        var C2x = a1x.lQ6K(bI3x);
        if (!C2x) return null;
        if (!O2x.bcx0x(C2x, O2x.Gb2x)) {
            e2x = e2x || {};
            e2x.list = !e2x.clazz ? a1x.dm4q(C2x) : a1x.H2x(C2x, e2x.clazz);
            delete e2x.clazz
        }
        return O2x.bcx0x(C2x, O2x.Gb2x, e2x || bb2x)
    };
    db3x.isChange = !0
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        l2x = c2x("nm.x");
    var SETTING_KEY = "player-setting";
    var nB7u = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nB7u = v2x.tR9I(SETTING_KEY) || nB7u;
    l2x.bsT4X = function() {
        return nB7u
    };
    l2x.Gk2x = function(Gl2x) {
        if (Gl2x) {
            nB7u = Gl2x;
            v2x.vv9m(SETTING_KEY, Gl2x)
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        l2x = c2x("nm.x"),
        q2x = c2x("nm.d"),
        hf5k = c2x("nm.w.player.log");
    var kO6I = q2x.hP5U.A2x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hd5i = function(u2x, bF3x, qx8p) {
        var cK3x = l2x.fr4v("{0} {1} {2}", k2x.ia5f(new Date, "yyyy-MM-dd HH:mm:ss"), u2x, bF3x);
        if (qx8p == LogLevel.ERROR) {
            kO6I.eS4W("playerror", {
                message: bF3x
            })
        }
        if (qx8p >= LogLevel.INFO) {
            kO6I.bDP7I(cK3x)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cK3x)
        }
    };
    hf5k.cb3x = function() {
        hd5i("PLAY_ERROR", l2x.fr4v.apply(null, arguments), LogLevel.ERROR)
    };
    hf5k.pM8E = function() {
        hd5i("PLAY_INFO", l2x.fr4v.apply(null, arguments), LogLevel.INFO)
    };
    hf5k.cGN0x = function() {
        hd5i("PLAY_DEBUG", l2x.fr4v.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        k2x = c2x("nej.u"),
        w2x = c2x("nm.w"),
        eO4S = c2x("flash.cb");
    var eg4k = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Gq2x, bdV1x, uG9x;
    w2x.cvi6c = function(u2x, cA3x) {
        if (u2x != "flash") {
            if (!Gq2x) {
                Gq2x = a1x.di3x("audio");
                k2x.bd2x(eg4k, function(u2x) {
                    h2x.s2x(Gq2x, u2x, onMediaCallBack)
                })
            }
            if (Gq2x && Gq2x.canPlayType && Gq2x.canPlayType("audio/mpeg")) {
                cA3x(new MediaWrap("audio"));
                return
            }
        }
        if (!bdV1x) {
            a1x.sf8X({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hQ5V) {
                    bdV1x = hQ5V;
                    k2x.bd2x(eg4k, function(u2x) {
                        eO4S[u2x] = onMediaCallBack;
                        bdV1x.addCallback(u2x, "flash.cb." + u2x)
                    });
                    cA3x(new MediaWrap("flash"))
                }.f2x(this)
            })
        } else {
            cA3x(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Gu3x) {
        var gR5W;
        I2x.fN4R.A2x({
            element: this,
            event: eg4k.concat(["interrupt", "recover"])
        });
        gR5W = Gu3x == "audio" ? Gq2x : bdV1x;
        this.type = Gu3x;
        this.destroy = function() {};
        this.setSrc = function(Y2x) {
            if (uG9x != this) {
                var gq5v = uG9x;
                if (gq5v) {
                    gq5v.interrupt()
                }
                uG9x = this
            }
            if (Gu3x == "flash") {
                gR5W.setSrc(Y2x)
            } else {
                gR5W.src = Y2x
            }
        };
        this.play = function() {
            if (uG9x != this) {
                var gq5v = uG9x;
                if (gq5v) {
                    gq5v.interrupt();
                    uG9x = this;
                    this.recover()
                } else {
                    uG9x = this
                }
            }
            if (Gu3x == "flash") {
                gR5W.as_play()
            } else {
                gR5W.play()
            }
        };
        this.pause = function() {
            if (uG9x != this) return;
            if (Gu3x == "flash") {
                gR5W.as_pause()
            } else {
                gR5W.pause()
            }
        };
        this.load = function() {
            if (uG9x != this) return;
            if (Gu3x == "flash") {
                gR5W.as_load()
            } else {
                gR5W.load()
            }
        };
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        };
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        };
        this.getMedia = function() {
            return gR5W
        };
        var oA7t = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k2x.bd2x(oA7t, function(W2x) {
            var OC6w = "get" + W2x,
                Oz6t = "set" + W2x;
            if (Gu3x == "flash") {
                if (!this[OC6w]) {
                    this[OC6w] = function() {
                        return gR5W[OC6w]()
                    }
                }
                if (!this[Oz6t]) {
                    this[Oz6t] = function(value) {
                        gR5W[Oz6t](value)
                    }
                }
            } else {
                var bFe7X = W2x.slice(0, 1).toLowerCase() + W2x.slice(1);
                if (!this[OC6w]) {
                    this[OC6w] = function() {
                        return gR5W[bFe7X]
                    }
                }
                if (!this[Oz6t]) {
                    this[Oz6t] = function(value) {
                        gR5W[bFe7X] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d2x) {
        if (uG9x) {
            h2x.z2x(uG9x, d2x.type, d2x)
        }
    }
})();
(function() {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        dx4B = c2x("nej.p"),
        w2x = c2x("nm.w"),
        l2x = c2x("nm.x"),
        hf5k = c2x("nm.w.player.log"),
        b2x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bFf7Y = false;
    w2x.fX4b = NEJ.C();
    b2x = w2x.fX4b.N2x(I2x.cJ3x);
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.cP3x = {};
        this.bdW1x(e2x.media);
        v2x.bl3x("/api/cdns", {
            type: "json",
            onload: function(d2x) {
                if (d2x.code) {
                    this.rp8h = d2x.data
                }
            }.f2x(this)
        })
    };
    b2x.bC3x = function() {
        this.bG3x();
        delete this.cP3x
    };
    b2x.bdX1x = function(bj3x) {
        if (!bj3x) return;
        var wP0x = this.cP3x.volume;
        if (this.dU4Y) {
            this.dU4Y.pause()
        }
        this.cP3x = {
            time: 0,
            id: bj3x.id,
            duration: bj3x.duration / 1e3,
            play: this.cP3x.play,
            stalledRetryCount: 0
        };
        if (wP0x != null) {
            this.cP3x.volume = wP0x
        }
        this.cP3x.loadState = LoadState.LOAD_START;
        this.bFx8p(bj3x.id);
        hf5k.pM8E("play song id: {0}", bj3x.id)
    };
    b2x.ep4t = function() {
        if (this.cP3x.error) {
            this.cP3x.error = null;
            if (this.cP3x.error == ErrorType.INFO_GET_ERR || this.bFy8q()) {
                this.bFz8r()
            } else {
                this.Ol6f()
            }
        } else {
            if (this.dU4Y) {
                this.dU4Y.play()
            }
        }
        this.cP3x.play = true;
        this.pu8m("play")
    };
    b2x.fG4K = function() {
        if (this.dU4Y) {
            this.dU4Y.pause()
        }
        this.cP3x.play = false;
        this.pu8m("pause")
    };
    b2x.oQ7J = function(bA3x) {
        if (this.dU4Y) {
            this.dU4Y.setCurrentTime(bA3x)
        }
        this.cP3x.time = bA3x;
        hf5k.pM8E("seek to: {0}", bA3x)
    };
    b2x.btz5E = function() {
        return this.cP3x.duration || 0
    };
    b2x.uD9u = function() {
        return !!this.cP3x.play
    };
    b2x.my7r = function(Oj6d) {
        this.cP3x.volume = Oj6d;
        if (this.dU4Y) {
            this.dU4Y.setVolume(Oj6d)
        }
    };
    b2x.bdY1x = function() {
        return this.cP3x.time
    };
    b2x.bdW1x = function(u2x) {
        w2x.cvi6c(u2x, function(gR5W) {
            this.dU4Y = gR5W;
            hf5k.pM8E("media loaded: {0}", gR5W.type);
            this.bX3x([
                [this.dU4Y, "loadedmetadata", this.cvh6b.f2x(this)],
                [this.dU4Y, "ended", this.cvg6a.f2x(this)],
                [this.dU4Y, "waiting", this.zJ1x.f2x(this)],
                [this.dU4Y, "play", this.uC9t.f2x(this)],
                [this.dU4Y, "pause", this.buI5N.f2x(this)],
                [this.dU4Y, "playing", this.Ni4m.f2x(this)],
                [this.dU4Y, "timeupdate", this.cve6Y.f2x(this)],
                [this.dU4Y, "progress", this.rr8j.f2x(this)],
                [this.dU4Y, "stalled", this.buL5Q.f2x(this)],
                [this.dU4Y, "interrupt", this.fG4K.f2x(this)],
                [this.dU4Y, "recover", this.cvd6X.f2x(this)],
                [this.dU4Y, "error", this.dO4S.f2x(this)]
            ]);
            if (this.cP3x) {
                if (this.cP3x.loadState == LoadState.LOAD_START || this.cP3x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bvg5l();
                    if (this.cP3x.volume != null) {
                        this.dU4Y.setVolume(this.cP3x.volume)
                    }
                }
            }
        }.f2x(this))
    };
    b2x.cvb6V = function(u2x) {
        this.Js3x();
        this.dU4Y.destroy();
        this.cP3x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zJ1x();
        this.bdW1x(u2x);
        hf5k.pM8E("switch media")
    };
    b2x.cGO0x = function() {
        return this.dU4Y
    };
    b2x.bFx8p = function() {
        this.zJ1x();
        v2x.bl3x("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cP3x.id]),
                br: DEFAULT_BR
            },
            onload: this.bGl8d.f2x(this),
            onerror: this.bGl8d.f2x(this)
        })
    };
    b2x.bGl8d = function(d2x) {
        if (d2x.code == 200 && d2x.data && d2x.data.length) {
            var bx3x = d2x.data[0];
            if (!bx3x.url) {
                this.cP3x.error = ErrorType.INFO_GET_ERR;
                this.pu8m("error", {
                    code: this.cP3x.error
                });
                return
            }
            this.cP3x.playUrl = bx3x.url;
            this.cP3x.expireTime = (new Date).getTime() + bx3x.expi * 1e3;
            this.bvg5l()
        } else {
            this.cP3x.error = ErrorType.INFO_GET_ERR;
            this.pu8m("error", {
                code: this.cP3x.error
            });
            hf5k.cb3x("info load error")
        }
    };
    b2x.bvg5l = function() {
        if (this.dU4Y) {
            var Y2x = this.cP3x.playUrl;
            if (this.cP3x.time > 0 && (this.cP3x.loadState == LoadState.IN_RE_GET_URL || this.cP3x.loadState == LoadState.IN_RE_GET_URL)) {
                Y2x += "#t=" + this.cP3x.time
            }
            this.dU4Y.setSrc(Y2x);
            hf5k.pM8E("load mp3: {0},loadState: {1}.", Y2x, this.cP3x.loadState)
        }
    };
    b2x.bGm8e = function() {
        if (/#t=(\d+)$/.test(this.dU4Y.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b2x.Ol6f = function() {
        var bA3x = parseInt(this.cP3x.time) || 0,
            cuZ6T = this.bGm8e();
        if (bA3x === cuZ6T) {
            this.dU4Y.load()
        } else {
            this.dU4Y.setSrc(this.cP3x.playUrl + "#t=" + bA3x)
        }
        this.cP3x.loadState = LoadState.IN_RELOAD;
        this.zJ1x();
        hf5k.pM8E("reload from: {0}", bA3x)
    };
    b2x.bFz8r = function() {
        this.cP3x.loadState = LoadState.IN_RE_GET_URL;
        this.bFx8p()
    };
    b2x.bGo8g = function() {
        var pP8H = getHost(this.cP3x.playUrl);
        if (pP8H) {
            for (var i = 0; i < this.rp8h.length; i++) {
                var ip5u = this.rp8h[i] || [],
                    r2x = ip5u.indexOf(pP8H);
                if (r2x >= 0 && ip5u.length > 1) {
                    return ip5u[(r2x + 1) % ip5u.length]
                }
            }
        }

        function getHost(Y2x) {
            if (CDN_HOST_REG.test(Y2x)) return RegExp.$1
        }
    };
    b2x.cuY6S = function() {
        this.cP3x.playUrl = this.cP3x.playUrl.replace(CDN_HOST_REG, this.bGo8g());
        this.cP3x.loadState = LoadState.IN_SWITCH_CDN;
        this.bvg5l();
        this.zJ1x()
    };
    b2x.cvh6b = function() {
        if (this.cP3x.loadState == LoadState.LOAD_START) {
            this.cP3x.loadState = LoadState.LOADED_META;
            if (this.dU4Y.type == "audio") {
                this.cP3x.duration = this.dU4Y.getDuration()
            }
            this.pu8m("loadedmeta", {
                duration: this.cP3x.duration
            })
        } else {
            this.cP3x.loadState = LoadState.LOADED_META
        }
        if (this.cP3x.play) {
            this.dU4Y.play()
        } else {
            this.dU4Y.pause()
        }
        if (this.cP3x.time && parseInt(this.cP3x.time) != this.bGm8e()) {
            this.dU4Y.setCurrentTime(this.cP3x.time)
        }
        this.IA3x();
        this.Ni4m();
        bFf7Y = true;
        hf5k.pM8E("loaded meta")
    };
    b2x.cvg6a = function() {
        this.cP3x.ended = true;
        this.pu8m("ended")
    };
    b2x.zJ1x = function() {
        if (!this.cP3x.waiting) {
            this.cP3x.waiting = true;
            this.cP3x.waitTimestamp = +(new Date);
            this.pu8m("waiting")
        }
    };
    b2x.Ni4m = function() {
        this.cP3x.waiting = false;
        this.cP3x.waitTimestamp = 0;
        this.pu8m("playing")
    };
    b2x.uC9t = function() {
        this.pu8m("play")
    };
    b2x.buI5N = function() {
        this.pu8m("pause")
    };
    b2x.cve6Y = function() {
        if (this.cP3x.loadState != LoadState.LOADED_META) return;
        var bA3x = this.dU4Y.getCurrentTime();
        if (this.cP3x.waiting && bA3x > this.cP3x.time) {
            this.Ni4m()
        }
        this.cP3x.time = bA3x;
        this.pu8m("timeupdate", {
            time: this.cP3x.time,
            duration: this.cP3x.duration
        })
    };
    b2x.rr8j = function(d2x) {
        if (this.cP3x.loadState != LoadState.LOADED_META) return;
        var m2x = {};
        if (d2x.data) {
            m2x.total = d2x.data.total;
            m2x.loaded = d2x.data.loaded
        } else {
            var zh0x = this.dU4Y.getBuffered(),
                bA3x = this.dU4Y.getCurrentTime(),
                oV7O = 0;
            for (var i = 0; i < zh0x.length; i++) {
                if (bA3x > zh0x.start(i) && bA3x < zh0x.end(i)) {
                    oV7O = zh0x.end(i);
                    break
                }
            }
            m2x.total = this.cP3x.duration;
            m2x.loaded = Math.min(oV7O, m2x.total)
        }
        this.pu8m("progress", m2x)
    };
    b2x.IA3x = function() {
        if (this.cP3x.retry) {
            clearTimeout(this.cP3x.retry.tid);
            this.cP3x.retry = null
        }
    };
    b2x.dO4S = function() {
        var ca3x = this.dU4Y.getError();
        hf5k.cb3x("media error code: {0}, netState: {1}", ca3x.code, this.dU4Y.getNetworkState());
        if (ca3x.code == MediaError.MEDIA_ERR_NETWORK || ca3x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gl2x = l2x.bsT4X();
            if (!this.cP3x.retry) {
                this.cP3x.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cP3x.retry.tid)
            }
            if (this.cP3x.retry.level == RetryLevel.NONE) {
                if (this.bFy8q()) {
                    this.cP3x.retry.level = RetryLevel.GET_URL;
                    this.bFz8r();
                    hf5k.pM8E("Url expired, get url.")
                } else {
                    this.cP3x.retry.level = RetryLevel.RELOAD;
                    this.cP3x.retry.tid = setTimeout(this.Ol6f.f2x(this), 3e3);
                    hf5k.pM8E("Reload mp3 3s later.")
                }
            } else if (this.cP3x.retry.level == RetryLevel.GET_URL) {
                this.cP3x.retry.level = RetryLevel.RELOAD;
                this.cP3x.retry.tid = setTimeout(this.Ol6f.f2x(this), 3e3);
                hf5k.pM8E("Reload mp3 3s later.")
            } else if (this.cP3x.retry.level == RetryLevel.RELOAD) {
                this.cP3x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGo8g()) {
                    this.cP3x.retry.tid = setTimeout(this.cuY6S.f2x(this), 5e3);
                    hf5k.pM8E("Switch CDN 5s later.")
                } else {
                    this.cP3x.retry.tid = setTimeout(this.Ol6f.f2x(this), 5e3);
                    hf5k.pM8E("Reload mp3 5s later.")
                }
            } else if (!bFf7Y && this.dU4Y.type == "audio" && !Gl2x.useFlash && !dx4B.Il3x.mac && l2x.bqp4t().supported) {
                Gl2x.useFlash = true;
                l2x.Gk2x(Gl2x);
                this.cvb6V("flash")
            } else {
                this.IA3x();
                this.fG4K();
                this.cP3x.error = ErrorType.NET_ERR;
                this.pu8m("error", {
                    code: this.cP3x.error
                });
                hf5k.cb3x("error can not retry.")
            }
        } else {
            this.IA3x();
            this.fG4K();
            this.cP3x.error = ErrorType.UNKNOWN_ERR;
            this.pu8m("error", {
                code: this.cP3x.error
            });
            hf5k.cb3x("error can not retry.")
        }
    };
    b2x.buL5Q = function() {
        var hR5W = 0,
            bGs8k = 5e3;
        return function() {
            this.zJ1x();
            clearTimeout(hR5W);
            setTimeout(function() {
                var eT4X = +(new Date);
                if (this.cP3x.waiting && eT4X - this.cP3x.waitTimestamp >= bGs8k && this.cP3x.stalledRetryCount < MAX_STALLED_RETRY) {
                    hf5k.pM8E("stalled too long retry.");
                    this.cP3x.stalledRetryCount++;
                    this.Ol6f()
                }
            }.f2x(this), bGs8k);
            hf5k.pM8E("stalled")
        }
    }();
    b2x.bFy8q = function() {
        var eT4X = +(new Date);
        return eT4X > this.cP3x.expireTime
    };
    b2x.cvd6X = function() {
        var bA3x = parseInt(this.cP3x.time) || 0;
        this.dU4Y.setSrc(this.cP3x.playUrl + "#t=" + bA3x);
        this.cP3x.loadState = LoadState.IN_RELOAD;
        this.zJ1x();
        hf5k.pM8E("recover from: {0}", bA3x)
    };
    b2x.pu8m = function(V2x, j2x) {
        h2x.z2x(w2x.fX4b, "playaction", {
            action: V2x,
            data: j2x || {}
        })
    };
    I2x.fN4R.A2x({
        element: w2x.fX4b,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        I2x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        b2x;
    w2x.Hf3x = NEJ.C();
    b2x = w2x.Hf3x.N2x(w2x.fX4b);
    L2x = w2x.Hf3x.cs3x;
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.cuX6R = function(bO3x) {
        this.bdX1x(bO3x);
        this.ep4t()
    };
    b2x.bvR5W = function() {
        this.fG4K()
    };
    b2x.xw0x = function(d2x) {
        if (d2x.action == "play") {
            this.fG4K()
        }
    };
    b2x.pu8m = function(V2x, j2x) {
        h2x.z2x(w2x.Hf3x, "tmpplayaction", {
            action: V2x,
            data: j2x || {},
            tmp: true
        })
    };
    b2x.to9f = function() {
        return this.cP3x
    };
    I2x.fN4R.A2x({
        element: w2x.Hf3x,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        fJ4N = c2x("nej.n"),
        v2x = c2x("nej.j"),
        I2x = c2x("nej.ut"),
        bc2x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        n2x = c2x("nm.l"),
        kN6H = c2x("nm.c"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x, beO1x = [{
            item: "m-publish-search-single",
            type: 1
        }, {
            item: "m-publish-search-artist",
            type: 100
        }, {
            item: "m-publish-search-album",
            type: 10
        }, {
            item: "m-publish-search-mv",
            type: 1004
        }, {
            item: "m-publish-search-playlist",
            type: 1e3
        }, {
            item: "m-publish-search-djRadio",
            type: 1009
        }];
    var bwg5l = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w2x.bwk5p = NEJ.C();
    b2x = w2x.bwk5p.N2x(bc2x.ej4n);
    b2x.cw3x = function(e2x) {
        this.cF3x(e2x);
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.cGP0x = i2x.shift();
        this.cuU6O = i2x.shift();
        this.Iv3x = i2x.shift();
        this.bwp5u = i2x.shift();
        this.bws5x = [i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift(), i2x.shift()];
        this.beS1x = i2x.shift();
        this.bHd8V = i2x.shift();
        this.rD8v = {
            list: this.bws5x,
            selected: "z-curr",
            onchange: this.bHh8Z.f2x(this)
        };
        h2x.s2x(this.Iv3x, "input", this.beV1x.f2x(this));
        h2x.s2x(this.Iv3x, "propertychange", this.beV1x.f2x(this));
        h2x.s2x(this.Iv3x, "keyup", this.beV1x.f2x(this));
        h2x.s2x(this.cuU6O, "click", this.beV1x.f2x(this));
        h2x.s2x(this.beS1x, "click", this.cL3x.f2x(this));
        h2x.s2x(this.bHd8V, "click", function() {
            this.z2x("oncancel", {})
        }.f2x(this));
        this.S2x = q2x.FR2x.gk5p();
        this.PF6z = top.nm.w.Hf3x.gk5p();
        I2x.fN4R.A2x({
            element: top.nm.w.Hf3x,
            event: ["tmpplayaction"]
        });
        this.sp8h = {
            limit: 100,
            offset: 0,
            parent: this.beS1x,
            onbeforelistload: this.qM8E.f2x(this)
        };
        q2x.sk = "fuck" + a1x.t2x(this.bwp5u, "xname") + "458";
        h2x.s2x(top.nm.w.Hf3x, "tmpplayaction", this.xw0x.f2x(this))
    };
    b2x.ch3x = function() {
        this.cf3x = "m-xwgt-publish-search"
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        if (!!this.CZ2x) {
            this.CZ2x.T2x();
            delete this.CZ2x
        }
        this.rD8v.index = bwg5l[e2x.type || "song"];
        this.CZ2x = I2x.Gb2x.A2x(this.rD8v);
        this.Iv3x.value = "";
        this.Iv3x.focus();
        this.uv9m = "";
        this.cGQ0x = 0;
        if (e2x.showMV == true) {
            this.bws5x[bwg5l["mv"]].parentNode.style.display = "";
            a1x.y2x(this.bwp5u, "srchtab-1")
        } else {
            this.bws5x[bwg5l["mv"]].parentNode.style.display = "none";
            a1x.x2x(this.bwp5u, "srchtab-1")
        }
        if (!!this.dJ4N) {
            this.dJ4N = this.dJ4N.T2x()
        }
        if (e2x.hideBack) {
            a1x.y2x(this.bHd8V.parentNode, "f-hide")
        }
    };
    b2x.bC3x = function() {
        this.PF6z.bvR5W();
        this.bG3x()
    };
    b2x.beV1x = function() {
        var value = this.Iv3x.value.trim();
        if (value && value.length) {
            if (value != this.uv9m) {
                this.uv9m = value;
                this.bHh8Z({
                    index: this.CZ2x.tj9a()
                })
            }
        } else {
            if (this.dJ4N) {
                this.dJ4N = this.dJ4N.T2x()
            }
        }
        this.uv9m = value
    };
    b2x.cL3x = function() {
        var cuS6M = function(F2x) {
                return a1x.bE3x(F2x, "sitm") || a1x.bE3x(F2x, "itm") || a1x.bE3x(F2x, "mv-item")
            },
            cuR6L = function(F2x) {
                return a1x.bE3x(F2x, "ply")
            },
            bHx8p = function() {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            cuQ6K = function() {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            bwW5b = function(bj3x) {
                if (bj3x && bj3x.privilege && bj3x.privilege.toast) {
                    v2x.bl3x("/api/song/toast", {
                        query: {
                            id: bj3x.id
                        },
                        type: "json",
                        onload: SN7G.f2x(this),
                        onerror: SN7G.f2x(this)
                    })
                } else {
                    SM7F()
                }
            },
            SN7G = function(Q2x) {
                SM7F((Q2x || bb2x).toast)
            },
            SM7F = function(bF3x) {
                n2x.Z2x.J2x({
                    type: 2,
                    tip: bF3x || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function(d2x) {
            var HA3x = h2x.X2x(d2x, cuR6L),
                i2x = h2x.X2x(d2x, cuS6M),
                ey4C = this.PF6z.to9f();
            if (!!i2x) {
                h2x.bh2x(d2x);
                this.OG6A = a1x.t2x(i2x, "id");
                this.Os6m = a1x.t2x(i2x, "type");
                if (this.Os6m == 18) {
                    var bO3x = this.S2x.eL4P(this.OG6A),
                        qx8p = l2x.pX8P(bO3x);
                    if (!HA3x) {
                        if (qx8p == 10) {
                            bHx8p();
                            return
                        } else if (qx8p == 100) {
                            bwW5b(bO3x);
                            return
                        }
                    } else {
                        if (qx8p == 10) {
                            bHx8p();
                            return
                        } else if (qx8p == 100) {
                            bwW5b(bO3x);
                            return
                        } else if (qx8p == 11) {
                            cuQ6K();
                            return
                        } else {
                            a1x.x2x(this.De2x, "z-pause z-loading");
                            if (HA3x == this.De2x && ey4C.play && !ey4C.ended) {
                                this.PF6z.bvR5W()
                            } else {
                                this.De2x = HA3x;
                                this.PF6z.cuX6R(bO3x)
                            }
                            return
                        }
                    }
                } else if (this.Os6m == 70) {
                    if (a1x.bE3x(i2x, "z-noprogram")) {
                        n2x.Z2x.J2x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cuN6H()
            }
        }
    }();
    b2x.cuN6H = function() {
        var ih5m = this.S2x.eL4P(this.OG6A),
            tB9s = l2x.bLy9p(this.Os6m, ih5m);
        tB9s.title = tB9s.title || "";
        tB9s.author = tB9s.author || "";
        tB9s.picUrl = tB9s.picUrl || "";
        tB9s.authors = tB9s.authors || "";
        if (this.Os6m == 70) {
            this.OG6A = this.OG6A.slice(0, -4)
        }
        this.z2x("onfinish", {
            id: this.OG6A,
            type: this.Os6m,
            data: tB9s
        })
    };
    b2x.xw0x = function(d2x) {
        var j2x = d2x.data;
        if (!this.De2x) {
            return
        }
        switch (d2x.action) {
            case "play":
                a1x.fk4o(this.De2x, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a1x.x2x(this.De2x, "z-pause z-loading");
                break;
            case "error":
                n2x.Z2x.J2x({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a1x.x2x(this.De2x, "z-pause z-loading");
                break;
            case "playing":
                a1x.fk4o(this.De2x, "z-loading", "z-pause");
                break;
            case "waiting":
                a1x.fk4o(this.De2x, "z-pause", "z-loading");
                break
        }
    };
    b2x.cuL6F = function(d2x) {
        if (d2x.result.code == 407) {
            this.beS1x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.beS1x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b2x.bHh8Z = function(d2x) {
        if (!this.uv9m || d2x.index < 0 || d2x.index > 5) {
            return
        }
        this.PF6z.bvR5W();
        var bg2x = beO1x[d2x.index],
            e2x = NEJ.X({}, this.sp8h);
        e2x.cache = {
            klass: q2x.FR2x,
            clear: true,
            onerror: this.cuL6F.f2x(this)
        };
        e2x.cache.lkey = "search-publish-" + bg2x.type + "-" + this.uv9m;
        e2x.item = {
            klass: bg2x.item,
            getRestrictLevel: l2x.pX8P,
            dur2time: l2x.lq6k
        };
        if (!e2x.cache.data) {
            e2x.cache.data = {}
        }
        e2x.cache.data.s = this.uv9m;
        e2x.cache.data.type = bg2x.type;
        e2x.cache.data.isPub = true;
        if (bg2x.type == 1) {
            e2x.cache.data.hlpretag = '<span class="s-fc7">';
            e2x.cache.data.hlposttag = "</span>"
        }
        e2x.onemptylist = this.cuK6E.f2x(this, this.uv9m);
        if (!!this.HH3x) this.S2x.uI9z(this.HH3x);
        if (!!this.dJ4N) {
            this.dJ4N = this.dJ4N.T2x()
        }
        this.dJ4N = I2x.nx7q.A2x(e2x);
        this.HH3x = e2x.cache.lkey
    };
    b2x.qM8E = function(d2x) {
        d2x.value = a1x.iN5S("m-publish-search-loading")
    };
    b2x.cuK6E = function(K2x, d2x) {
        a1x.dA4E(d2x.parent, "m-publish-emtpy-message", {
            key: K2x
        });
        d2x.stopped = true
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dx4B = c2x("nej.p"),
        v2x = c2x("nej.j"),
        cd3x = c2x("nej.ut"),
        bD3x = c2x("nej.ui"),
        w2x = c2x("nm.w"),
        b2x, L2x;
    var cuI6C = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w2x.HI3x = NEJ.C();
    b2x = w2x.HI3x.N2x(bD3x.ej4n);
    var gi5n = a1x.eC4G("m-wgt-receiverInput");
    var cuw6q = a1x.eC4G("m-wgt-receiverList");
    var jd5i = a1x.ty9p(cuI6C);
    var cut6n = a1x.eC4G('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b2x.cw3x = function(e2x) {
        this.bk3x = [];
        this.ww0x = e2x.receiver || null;
        this.cur6l = e2x.unique || false;
        this.nc7V = e2x.err;
        this.bIZ8R(this.bJa8S, e2x.uid);
        this.cF3x(e2x)
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.Tq7j();
        this.SU7N();
        this.bfl1x();
        if (e2x.receiver) this.bxG6A(e2x.receiver.nickname, e2x.receiver.userId);
        a1x.ba2x(this.Dd2x, "display", "block");
        a1x.ba2x(this.bxJ6D, "cursor", "text");
        a1x.ba2x(this.Dd2x, "cursor", "text")
    };
    b2x.ch3x = function() {
        var j2x = this.bJk8c();
        this.cf3x = a1x.jq6k(a1x.cc3x(gi5n, {
            receiver: this.ww0x,
            users: j2x
        }));
        this.md7W = jd5i
    };
    b2x.bW3x = function() {
        this.ci3x();
        var bS3x = a1x.H2x(this.o2x, "j-flag");
        var hm5r = a1x.H2x(this.o2x, "j-item");
        this.bxJ6D = bS3x[0];
        this.bJy9p = bS3x[1];
        this.ef4j = bS3x[2];
        this.Dd2x = bS3x[3];
        this.bfp1x = bS3x[4];
        this.bxN6H = bS3x[5];
        this.fH4L = hm5r;
        a1x.y2x(this.fH4L[0], "j-selected");
        h2x.s2x(this.ef4j, "keyup", this.bxP6J.f2x(this));
        h2x.s2x(this.ef4j, "keydown", this.UV8N.f2x(this));
        h2x.s2x(this.ef4j, "focus", this.lm6g.f2x(this));
        h2x.s2x(this.bfp1x, "click", this.cuq6k.f2x(this));
        h2x.s2x(this.bxJ6D, "click", this.cup6j.f2x(this));
        h2x.s2x(document.body, "click", this.pl8d.f2x(this));
        h2x.s2x(this.ef4j, "input", this.fR4V.f2x(this));
        h2x.s2x(this.ef4j, "blur", this.nW7P.f2x(this))
    };
    b2x.bC3x = function(e2x) {
        h2x.ms7l(document.body, "click", this.pl8d.f2x(this));
        this.bG3x();
        this.bfl1x();
        this.cum6g();
        this.pl8d()
    };
    b2x.bxP6J = function(d2x) {
        h2x.bh2x(d2x);
        var jS6M = d2x.keyCode || d2x.which;
        var bo3x = this.ef4j.value;
        var bq3x = this.fH4L.length;
        var sg8Y = a1x.H2x(this.o2x, "j-selected")[0];
        switch (jS6M) {
            case 13:
                var lr6l = a1x.gH5M(sg8Y, "data-username");
                var iq5v = a1x.gH5M(sg8Y, "data-userId");
                this.bxG6A(lr6l, iq5v);
                this.pl8d();
                this.ef4j.value = "";
                break;
            case 38:
                var r2x = a1x.gH5M(sg8Y, "data-index") - 1 < 0 ? bq3x - 1 : a1x.gH5M(sg8Y, "data-index") - 1;
                a1x.x2x(sg8Y, "j-selected");
                a1x.y2x(this.fH4L[r2x], "j-selected");
                break;
            case 40:
                var r2x = parseInt(a1x.gH5M(sg8Y, "data-index")) + 1 >= bq3x ? 0 : parseInt(a1x.gH5M(sg8Y, "data-index")) + 1;
                a1x.x2x(sg8Y, "j-selected");
                a1x.y2x(this.fH4L[r2x], "j-selected");
                break;
            default:
                this.wp0x()
        }
    };
    b2x.UV8N = function(d2x) {
        var jS6M = d2x.keyCode || d2x.which;
        var bo3x = this.ef4j.value;
        var r2x = a1x.H2x(this.o2x, "j-receiver").length - 1;
        if (jS6M === 8 && bo3x === "") this.cul6f(r2x)
    };
    b2x.fR4V = function(d2x) {
        var bo3x = this.ef4j.value;
        if (bo3x.length > 10) {
            this.ef4j.value = bo3x.substring(0, 10);
            return
        }
        dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "7.0" ? setTimeout(this.bxY6S.f2x(this), 0) : this.bxY6S();
        this.SU7N()
    };
    b2x.lm6g = function() {
        if (this.bk3x[0]) this.wp0x();
        else this.bIZ8R(this.cui6c);
        a1x.ba2x(this.Dd2x, "display", "none")
    };
    b2x.nW7P = function() {
        var bq3x = a1x.H2x(this.o2x, "j-receiver").length;
        if (this.ef4j.value.trim() == "" && bq3x <= 0) a1x.ba2x(this.Dd2x, "display", "block")
    };
    b2x.bxG6A = function(lr6l, iq5v) {
        var KD4H = this.PU6O();
        if (KD4H.length >= 10) {
            this.dX4b();
            return
        }
        var bc2x;
        for (bc2x = 0; bc2x < KD4H.length; bc2x++) {
            if (KD4H[bc2x] == iq5v) {
                this.pl8d();
                return
            }
        }
        if (!lr6l || !iq5v) return;
        var g2x = a1x.dF4J(a1x.jq6k(a1x.cc3x(cut6n, {
            username: lr6l,
            userId: iq5v
        })));
        var bI3x = this.bJy9p.parentNode;
        if (this.cur6l) {
            this.bfl1x()
        }
        bI3x.insertBefore(g2x, this.bJy9p);
        this.ef4j.value = "";
        var bq3x = a1x.H2x(this.o2x, "j-receiver").length;
        if (bq3x > 1) a1x.ba2x(this.Dd2x, "display", "none");
        this.bxY6S();
        this.SU7N()
    };
    b2x.bfl1x = function() {
        var QM7F = a1x.H2x(this.o2x, "j-receiver");
        var bc2x;
        if (QM7F.length > 0) {
            for (bc2x = 0; bc2x < QM7F.length; bc2x++) {
                a1x.cM3x(QM7F[bc2x], false)
            }
        }
    };
    b2x.cum6g = function() {
        this.ef4j.value = ""
    };
    b2x.cul6f = function(r2x) {
        this.dX4b(!0);
        var QM7F = a1x.H2x(this.o2x, "j-receiver");
        a1x.cM3x(QM7F[r2x], false);
        this.SU7N()
    };
    b2x.wp0x = function() {
        var bo3x = this.ef4j.value;
        var bv3x = bo3x.trim().toLowerCase();
        var j2x;
        bv3x = bv3x.replace(/\[/g, "\\[");
        bv3x = bv3x.replace(/\]/g, "\\]");
        j2x = this.bJk8c(bv3x);
        this.cuh6b(j2x)
    };
    b2x.pl8d = function(d2x) {
        a1x.ba2x(this.bfp1x, "display", "none")
    };
    b2x.dX4b = function(dM4Q) {
        if (dM4Q && this.nc7V) {
            a1x.ba2x(this.nc7V, "display", "none");
            return
        }
        if (this.nc7V) a1x.ba2x(this.nc7V, "display", "block")
    };
    b2x.cuq6k = function(d2x) {
        h2x.cn3x(d2x);
        var bP3x = d2x.target || d2x.srcElement;
        if (a1x.bE3x(bP3x, "j-flag")) return;
        var bI3x = bP3x.nodeName.toLowerCase() == "a" ? bP3x.parentNode : bP3x.parentNode.parentNode;
        var lr6l = a1x.gH5M(bI3x, "data-username");
        var iq5v = a1x.gH5M(bI3x, "data-userId");
        this.bxG6A(lr6l, iq5v);
        this.pl8d();
        a1x.ba2x(this.Dd2x, "display", "none")
    };
    b2x.cup6j = function(d2x) {
        h2x.bh2x(d2x);
        var bP3x = d2x.target || d2x.srcElement;
        if (a1x.bE3x(bP3x.parentNode, "j-receiver")) {
            a1x.cM3x(bP3x.parentNode, false);
            this.dX4b(!0);
            this.SU7N()
        } else this.ef4j.focus()
    };
    b2x.bxY6S = function() {
        this.bxN6H.innerHTML = this.ef4j.value;
        var cD3x = this.bxN6H.offsetWidth + 2;
        a1x.ba2x(this.ef4j, "width", cD3x + "px")
    };
    b2x.SU7N = function() {
        var bft1x = a1x.hO5T(this.ef4j, this.o2x).y;
        var bLa9R = Math.floor((bft1x - 8) / 27);
        if (bLa9R < 0) return;
        a1x.ba2x(this.bxJ6D, "height", 19 + bLa9R * 29 + "px")
    };
    b2x.Tq7j = function() {
        var qk8c = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qk8c.length; i++) {
            a1x.ba2x(this.bxN6H, qk8c[i], a1x.df3x(this.ef4j, qk8c[i]))
        }
    };
    b2x.bIZ8R = function(cA3x, C2x) {
        var do4s = C2x ? C2x : window.GUser.userId;
        var Y2x = "/api/user/getfollows/" + do4s;
        var gl5q = v2x.bl3x(Y2x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA3x.f2x(this),
            onerror: function(j2x) {
                this.bk3x = []
            },
            onbeforerequest: function(j2x) {}
        })
    };
    b2x.bJa8S = function(j2x) {
        this.bk3x = JSON.parse(j2x).follow || [];
        var C2x = GUser.userId;
        for (var i = 0; i < this.bk3x.length; i++) {
            if (this.bk3x[i].userId == C2x) {
                this.bk3x.splice(i, 1);
                continue
            }
            this.bk3x[i].avatarUrl = this.bk3x[i].avatarUrl + "?param=30y30"
        }
    };
    b2x.cui6c = function(j2x) {
        if (this.bk3x[0]) return;
        this.bJa8S(j2x);
        this.wp0x()
    };
    b2x.bJk8c = function(bv3x) {
        var bv3x = bv3x ? bv3x : "";
        this.bk3x = this.bk3x[0] ? this.bk3x : [];
        var bq3x = this.bk3x.length;
        var QG7z = this.PU6O();
        var th9Y = [];
        var Ok6e, Pa6U, bxS6M;
        if (!this.bk3x[0]) return th9Y;
        for (var bc2x = 0; bc2x < bq3x; bc2x++) {
            bxS6M = false;
            for (var v2x = 0; v2x < QG7z.length; v2x++) {
                if (this.bk3x[bc2x].userId == QG7z[v2x]) {
                    bxS6M = true;
                    break
                }
            }
            if (bxS6M) continue;
            Ok6e = this.bk3x[bc2x].nickname.toLowerCase().search(bv3x);
            Pa6U = this.bk3x[bc2x].py ? this.bk3x[bc2x].py.toLowerCase().search(bv3x) : -1;
            if (Ok6e !== -1 || Pa6U != -1) th9Y.push(this.bk3x[bc2x])
        }
        return th9Y
    };
    b2x.cuh6b = function(j2x) {
        a1x.dA4E(this.bfp1x, cuw6q, {
            users: j2x
        });
        a1x.y2x(a1x.H2x(this.o2x, "j-item")[0], "j-selected");
        this.fH4L = a1x.H2x(this.o2x, "j-item");
        a1x.ba2x(this.bfp1x, "display", "block")
    };
    b2x.PU6O = function() {
        var th9Y = a1x.H2x(this.o2x, "j-receiver") || [];
        var iq5v = [];
        for (var i = 0; i < th9Y.length; i++) {
            iq5v.push(a1x.gH5M(th9Y[i], "data-id"))
        }
        return iq5v
    };
    b2x.cGT0x = function() {
        var iq5v = this.PU6O();
        var th9Y = [];
        for (var i = 0; i < iq5v.length; i++) {
            for (var j = 0; j < this.bk3x.length; j++) {
                if (iq5v[i] == this.bk3x[j].userId) th9Y.push(this.bk3x[j])
            }
        }
        return th9Y
    };
    b2x.cuf6Z = function() {
        this.bfl1x()
    };
    w2x.HI3x.J2x = function(e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n2x.pg7Z.J2x({
                title: "登录"
            });
            return
        }
        e2x = e2x || {};
        if (e2x.parent === undefined) e2x.parent = document.body;
        !!this.fl4p && this.fl4p.T2x();
        this.fl4p = this.A2x(e2x)
    };
    w2x.HI3x.bt3x = function() {
        !!this.fl4p && this.fl4p.T2x()
    };
    w2x.HI3x.HS3x = function() {
        return this.pl8d()
    };
    w2x.HI3x.cGU0x = function() {
        return this.wp0x()
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        k2x = c2x("nej.u"),
        h2x = c2x("nej.v"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        b2x, L2x;
    n2x.In3x = NEJ.C();
    b2x = n2x.In3x.N2x(n2x.bia2x);
    L2x = n2x.In3x.cs3x;
    b2x.bm3x = function() {
        var HP3x;
        var cub6V = function(D2x, K2x) {
            HP3x = HP3x || [];
            if (K2x != "18") HP3x.push({
                key: K2x,
                value: D2x
            })
        };
        return function(e2x) {
            this.bn3x(e2x);
            if (e2x.upwards) {
                a1x.y2x(this.o2x, "m-emts-up")
            } else {
                a1x.x2x(this.o2x, "m-emts-up")
            }
            if (e2x.rightwards) {
                a1x.y2x(this.o2x, "m-emts-right")
            } else {
                a1x.x2x(this.o2x, "m-emts-right")
            }
            if (!HP3x) {
                var bz3x = l2x.cBg9X();
                k2x.eI4M(bz3x, cub6V)
            }
            var bq3x = HP3x.length;
            HP3x.splice(bq3x - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bfn1x = HP3x;
            this.ctY6S = !!e2x.autoHide
        }
    }();
    b2x.ch3x = function() {
        this.cf3x = "ntp-portrait"
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        this.bK3x = i2x[0];
        this.ctW6Q = i2x[1];
        this.ctV6P = i2x[2];
        this.ctS6M = i2x[3];
        h2x.s2x(this.bK3x, "click", this.yD0x.f2x(this));
        h2x.s2x(this.ctW6Q, "click", this.HL3x.f2x(this, 1));
        h2x.s2x(this.ctS6M, "click", this.HL3x.f2x(this, 2))
    };
    b2x.bxD6x = function(r2x) {
        this.bfk1x = r2x;
        var bi2x = (r2x - 1) * 50;
        var i2x = this.bfn1x.slice(bi2x, Math.min(bi2x + 50, this.bfn1x.length));
        this.bK3x.innerHTML = a1x.cc3x("jst-portrait", {
            plist: i2x
        }, {
            purl: l2x.bCX7Q
        });
        this.ctV6P.innerText = r2x + "/" + Math.ceil(this.bfn1x.length / 50)
    };
    b2x.HL3x = function(r2x) {
        var ctR6L = Math.ceil(this.bfn1x.length / 50);
        if (r2x == 1 && this.bfk1x == 1 || r2x == 2 && this.bfk1x == ctR6L) return;
        r2x == 1 ? this.bxD6x(this.bfk1x - 1) : this.bxD6x(this.bfk1x + 1)
    };
    b2x.yD0x = function(d2x) {
        var F2x = h2x.X2x(d2x, "d:text");
        if (!F2x) return;
        var d2x = {
            url: a1x.t2x(F2x, "url"),
            text: a1x.t2x(F2x, "text")
        };
        this.z2x("onselect", d2x);
        if (this.ctY6S && !d2x.stopped) {
            this.bt3x()
        }
    };
    b2x.J2x = function() {
        L2x.J2x.call(this);
        this.bxD6x(1)
    }
})();
(function() {
    var c2x = NEJ.P,
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        dx4B = c2x("nej.p"),
        be2x = c2x("nej.h"),
        I2x = c2x("nej.ut"),
        kf6Z = /^[#?]+/,
        EW2x = /#(.*?)$/,
        zT1x = window,
        bxz6t = !history.pushState || dx4B.Il3x.android || !history.auto;
    var bfj1x = function(Y2x, bxx6r) {
        zT1x.history[!bxx6r ? "pushState" : "replaceState"](null, document.title, Y2x)
    };
    var bfh1x = function() {
        return location.parse(zT1x.location.href)
    };
    bfj1x = bfj1x.eH4L(function(d2x) {
        if (!bxz6t) return;
        var bf2x = d2x.args;
        d2x.stopped = !0;
        Y2x = bf2x[0].replace(kf6Z, "");
        !bf2x[1] ? zT1x.location.hash = Y2x : zT1x.location.replace("#" + Y2x)
    });
    bfh1x = bfh1x.eH4L(function(d2x) {
        if (!bxz6t) return;
        d2x.stopped = !0;
        var dR4V = EW2x.test(zT1x.location.href) ? RegExp.$1 : "";
        d2x.value = location.parse(dR4V.replace(kf6Z, ""))
    });
    location.redirect = function(Y2x, bxx6r) {
        bfj1x(Y2x, bxx6r);
        return this
    };
    location.active = function() {
        var eh4l, Y2x, jK6E, dc3x, Vb8T;
        var bxb5g = function(hk5p) {
            if (!!dc3x) {
                dc3x = !1;
                return
            }
            var d2x = {
                oldValue: jK6E,
                newValue: bfh1x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h2x.z2x(location, "beforeurlchange", d2x);
                if (d2x.stopped) {
                    if (!!jK6E) {
                        dc3x = !0;
                        bfj1x(jK6E.href, !0)
                    }
                    return
                }
            }
            Y2x = zT1x.location.href;
            jK6E = d2x.newValue;
            h2x.z2x(location, "urlchange", jK6E);
            be2x.bvD5I(jK6E.href)
        };
        var bNx0x = function() {
            if (Y2x != zT1x.location.href) bxb5g();
            eh4l = requestAnimationFrame(bNx0x)
        };
        return function(bJ3x) {
            if (!!Vb8T) return this;
            Vb8T = !0;
            zT1x = bJ3x || window;
            if (bxz6t && "onhashchange" in window && dx4B.mW7P.trident2) {
                h2x.s2x(zT1x, "hashchange", bxb5g);
                bxb5g()
            } else if (!eh4l) {
                eh4l = requestAnimationFrame(bNx0x)
            }
            return this
        }
    }();
    location.parse = function() {
        var gO5T = /^https?:\/\/.*?\//i,
            kf6Z = /[?#]/;
        return function(Y2x) {
            var m2x = {
                href: Y2x
            };
            Y2x = (Y2x || "").replace(gO5T, "/").split(kf6Z);
            var cz3x = 1;
            if (Y2x[0] == "/" && (Y2x[1] || "").indexOf("/") == 0) cz3x = 2;
            m2x.path = Y2x.splice(0, cz3x).join("?");
            m2x.query = k2x.hu5z(Y2x.join("&"));
            return m2x
        }
    }();
    location.same = function(Y2x) {
        return bfh1x().href == Y2x
    };
    I2x.fN4R.A2x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        gr5w = c2x("nm.ut");
    gr5w.uu9l = function(er4v) {
        var hg5l = {
            text: "",
            start: 0,
            end: 0
        };
        if (er4v.setSelectionRange) {
            hg5l.start = er4v.selectionStart;
            hg5l.end = er4v.selectionEnd;
            hg5l.text = hg5l.start != hg5l.end ? er4v.value.substring(hg5l.start, hg5l.end) : ""
        } else if (document.selection) {
            var i, bfa1x = document.selection.createRange(),
                xW0x = document.body.createTextRange();
            xW0x.moveToElementText(er4v);
            hg5l.text = bfa1x.text;
            hg5l.bookmark = bfa1x.getBookmark();
            for (i = 0; xW0x.compareEndPoints("StartToStart", bfa1x) < 0 && bfa1x.moveStart("character", -1) !== 0; i++) {
                if (er4v.value.charAt(i) == "\n") {
                    i++
                }
            }
            hg5l.start = i;
            hg5l.end = hg5l.text.length + hg5l.start
        }
        return hg5l
    };
    gr5w.beZ1x = function(er4v, hg5l) {
        var xW0x;
        if (!hg5l) {
            hg5l = {
                text: "",
                start: 0,
                end: 0
            }
        }
        er4v.focus();
        if (er4v.setSelectionRange) {
            er4v.setSelectionRange(hg5l.start, hg5l.end)
        } else if (er4v.createTextRange) {
            xW0x = er4v.createTextRange();
            if (er4v.value.length === hg5l.start) {
                xW0x.collapse(false);
                xW0x.select()
            } else {
                xW0x.moveToBookmark(hg5l.bookmark);
                xW0x.select()
            }
        }
    };
    gr5w.Ir3x = function(er4v, hg5l, cK3x) {
        var hg5l = hg5l || {
            text: "",
            start: 0,
            end: 0
        };
        var bwD5I, bOf0x, xW0x, Po6i, bOm0x, bOo0x, Hy3x;
        this.beZ1x(er4v, hg5l);
        if (er4v.setSelectionRange) {
            bwD5I = er4v.value;
            bOf0x = bwD5I.substring(0, hg5l.start) + cK3x + bwD5I.substring(hg5l.end);
            bOm0x = bOo0x = hg5l.start + cK3x.length;
            Hy3x = er4v.scrollTop;
            er4v.value = bOf0x;
            if (er4v.scrollTop != Hy3x) {
                er4v.scrollTop = Hy3x
            }
            er4v.setSelectionRange(bOm0x, bOo0x)
        } else if (er4v.createTextRange) {
            Po6i = document.selection.createRange();
            Po6i.text = cK3x;
            Po6i.setEndPoint("StartToEnd", Po6i);
            Po6i.select()
        }
        h2x.z2x(er4v, "keyup")
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dx4B = c2x("nej.p"),
        k2x = c2x("nej.u"),
        cd3x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        gr5w = c2x("nm.ut"),
        b2x;
    w2x.bOs0x = NEJ.C();
    b2x = w2x.bOs0x.N2x(cd3x.cJ3x);
    b2x.cw3x = function(e2x) {
        this.cF3x(e2x)
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.gs5x = e2x.txt;
        this.Ht3x = e2x.sgtsContainer;
        this.bOA0x = e2x.sgtsList[0];
        this.beT1x = e2x.sgtsItem;
        this.pd7W = e2x.rangeData;
        this.It3x = e2x.atIndex;
        a1x.y2x(this.beT1x[0], "selected-item");
        this.Hq3x()
    };
    b2x.bC3x = function() {
        this.bG3x();
        h2x.ms7l(document.body, "keyup", this.bOO0x.f2x(this));
        h2x.ms7l(document.body, "click", this.bPd0x.f2x(this))
    };
    b2x.Hq3x = function() {
        this.bX3x([
            [document.body, "keyup", this.bOO0x.f2x(this)],
            [document.body, "click", this.bPd0x.f2x(this)],
            [this.gs5x, "keydown", this.bPi0x.f2x(this)],
            [this.gs5x, "keypress", this.bPi0x.f2x(this)],
            [this.bOA0x, "click", this.bPk0x.f2x(this)],
            [this.bOA0x, "mouseover", this.Hp3x.f2x(this)]
        ])
    };
    b2x.Hp3x = function(d2x) {
        var bP3x = h2x.X2x(d2x);
        var p2x = a1x.H2x(this.Ht3x, "selected-item");
        if (a1x.bE3x(bP3x, "j-sgt")) {
            a1x.x2x(p2x[0], "selected-item");
            a1x.y2x(bP3x, "selected-item")
        }
    };
    b2x.bOO0x = function(d2x) {
        var p2x = a1x.H2x(this.Ht3x, "selected-item");
        var bq3x = this.beT1x.length;
        var jS6M = d2x.keyCode || d2x.which;
        var r2x, j2x;
        switch (jS6M) {
            case 38:
                r2x = a1x.gH5M(p2x[0], "data-index") - 1 < 0 ? bq3x - 1 : a1x.gH5M(p2x[0], "data-index") - 1;
                a1x.x2x(p2x[0], "selected-item");
                a1x.y2x(this.beT1x[r2x], "selected-item");
                break;
            case 40:
                r2x = parseInt(a1x.gH5M(p2x[0], "data-index")) + 1 >= bq3x ? 0 : parseInt(a1x.gH5M(p2x[0], "data-index")) + 1;
                a1x.x2x(p2x[0], "selected-item");
                a1x.y2x(this.beT1x[r2x], "selected-item");
                break;
            case 13:
                this.bPk0x(d2x);
                break;
            case 27:
                this.pl8d();
                break;
            case 32:
                var bo3x = this.gs5x.value;
                var r2x = gr5w.uu9l(this.gs5x);
                if (bo3x.charAt(r2x.start - 1) !== " ") return;
                this.pl8d();
                break
        }
    };
    b2x.bPi0x = function(d2x) {
        var jS6M = d2x.keyCode || d2x.which;
        if (jS6M === 13 || jS6M === 38 || jS6M === 40) {
            h2x.cn3x(d2x);
            d2x.keyCode = 0;
            d2x.which = 0;
            d2x.returnvalue = false
        }
    };
    b2x.bPd0x = function(d2x) {
        var bP3x = d2x.target || d2x.srcElement;
        if (bP3x === this.gs5x) return;
        this.pl8d()
    };
    b2x.bPk0x = function(d2x) {
        h2x.bh2x(d2x);
        var p2x = a1x.H2x(this.Ht3x, "selected-item")[0];
        var sg8Y = d2x.target || d2x.srcElement;
        var u2x = d2x.type;
        if (a1x.bE3x(sg8Y, "lst")) return;
        if (u2x == "click") {
            a1x.x2x(p2x, "selected-item");
            a1x.y2x(sg8Y, "selected-item")
        } else sg8Y = p2x;
        var j2x = sg8Y.innerHTML + " ";
        this.pl8d();
        var hg5l = this.pd7W;
        hg5l.start = this.It3x + 1;
        if (dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "9.0") {
            this.gs5x.value = this.gs5x.value.substring(0, hg5l.start) + this.gs5x.value.substring(hg5l.end, this.gs5x.value.length);
            hg5l.end = hg5l.start
        }
        gr5w.Ir3x(this.gs5x, hg5l, j2x);
        h2x.z2x(this.gs5x, "keyup")
    };
    b2x.pl8d = function(d2x) {
        if (!!this.Ht3x) a1x.ba2x(this.Ht3x, "display", "none");
        this.T2x()
    };
    b2x.wp0x = function(d2x) {
        if (!!this.Ht3x) a1x.ba2x(this.Ht3x, "display", "block")
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        cd3x = c2x("nej.ut"),
        bD3x = c2x("nej.ui"),
        b2x;
    var ctQ6K = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ctP6J = a1x.eC4G("m-wgt-atlist");
    var jd5i = a1x.ty9p(ctQ6K);
    w2x.bPp0x = NEJ.C();
    b2x = w2x.bPp0x.N2x(bD3x.ej4n);
    b2x.cw3x = function(e2x) {
        this.fS4W = {};
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.fS4W.txt = a1x.B2x(e2x.target);
        this.fS4W.data = e2x.data;
        this.fS4W.offset = e2x.offset;
        this.fS4W.rangeData = e2x.rangeData;
        this.fS4W.atIndex = e2x.atIndex;
        this.ctO6I(e2x);
        this.bn3x(e2x);
        this.fS4W.sgtsContainer = this.o2x;
        this.fS4W.sgtsList = a1x.H2x(this.o2x, "lst");
        this.fS4W.sgtsItem = a1x.H2x(this.o2x, "f-thide");
        this.QT7M(e2x);
        this.ctL6F = w2x.bOs0x.A2x(this.fS4W)
    };
    b2x.bC3x = function(e2x) {
        this.bG3x();
        this.ctL6F.T2x()
    };
    b2x.ch3x = function() {
        this.md7W = jd5i
    };
    b2x.bW3x = function() {
        this.ci3x()
    };
    b2x.ctO6I = function(e2x) {
        this.o2x = a1x.dF4J(a1x.jq6k(a1x.cc3x(ctP6J, e2x.data)))
    };
    b2x.QT7M = function(e2x) {
        var bPt0x = a1x.H2x(this.o2x, "selected-item")[0];
        if (bPt0x) a1x.x2x(bPt0x, "selected-item");
        var db3x = e2x.offset.x + "px";
        var hw5B = e2x.offset.y + "px";
        a1x.ba2x(this.o2x, "left", db3x);
        a1x.ba2x(this.o2x, "top", hw5B)
    }
})();
(function() {
    var c2x = NEJ.P,
        v2x = c2x("nej.j"),
        gr5w = c2x("nm.ut");
    gr5w.bPy0x = function(bo3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dg3x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ix3x = bo3x.match(dg3x) || [];
        for (var bc2x = 0; bc2x < Ix3x.length; bc2x++) {
            Ix3x[bc2x] = Ix3x[bc2x].split("@")[1]
        }
        Ix3x = Ix3x.reverse();
        var iq5v = GUser.userId;
        var ctK6E = v2x.tR9I("mentioners" + iq5v) || [];
        var jQ6K = Ix3x.concat(ctK6E);
        if (jQ6K.length > 10) jQ6K = jQ6K.slice(0, 10);
        v2x.vv9m("mentioners" + iq5v, jQ6K)
    };
    gr5w.ctJ6D = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var iq5v = GUser.userId;
        return v2x.tR9I("mentioners" + iq5v) || []
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        dx4B = c2x("nej.p"),
        v2x = c2x("nej.j"),
        k2x = c2x("nej.u"),
        cd3x = c2x("nej.ut"),
        w2x = c2x("nm.w"),
        gr5w = c2x("nm.ut"),
        l2x = c2x("nm.x"),
        b2x;
    var FullscreenApi = l2x.FM2x || {};
    w2x.bPI0x = NEJ.C();
    b2x = w2x.bPI0x.N2x(cd3x.cJ3x);
    b2x.cw3x = function(e2x) {
        this.cF3x(e2x);
        this.bPJ0x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.gs5x = e2x.txt;
        this.o2x = e2x.body;
        this.bPL0x = e2x.before;
        this.Rr7k = e2x.flag;
        this.ctH6B = e2x.after;
        this.qN8F = [];
        if (dx4B.dr4v.browser != "ie") {
            setTimeout(function() {
                this.lU6O()
            }.f2x(this), 0)
        }
        this.Hq3x()
    };
    b2x.bC3x = function() {
        this.bG3x();
        if (this.ux9o) this.ux9o.T2x();
        delete this.ux9o
    };
    b2x.Hq3x = function() {
        this.bX3x([
            [this.gs5x, "keyup", this.bQc0x.f2x(this, this.gs5x)],
            [this.gs5x, "click", this.bQc0x.f2x(this, this.gs5x)],
            [this.gs5x, "focus", this.lU6O.f2x(this)]
        ])
    };
    b2x.lU6O = function(d2x) {
        this.pd7W = gr5w.uu9l(this.gs5x)
    };
    b2x.bPJ0x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do4s = window.GUser.userId;
        var Y2x = "/api/user/getfollows/" + do4s;
        var gl5q = v2x.bl3x(Y2x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j2x) {
                window.GFollowers = JSON.parse(j2x).follow
            }.f2x(this),
            onerror: function(j2x) {},
            onbeforerequest: function(j2x) {}
        })
    };
    b2x.bQe0x = function(index) {
        var D2x = this.gs5x.value,
            bi2x, bvH5M, bvE5J, Sv7o;
        this.bPL0x.innerHTML = k2x.dH4L(D2x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mC7v = a1x.H2x(this.bPL0x, "j-test");
        for (var bc2x = 0; bc2x < mC7v.length; bc2x++) {
            mC7v[bc2x].innerText = " "
        }
        this.Rr7k.innerHTML = D2x.charAt(index);
        this.ctH6B.innerHTML = k2x.dH4L(D2x.substr(index + 1, D2x.length));
        Sv7o = parseInt(a1x.df3x(this.gs5x, "lineHeight"));
        a1x.ba2x(this.o2x, "display", "block");
        bvH5M = a1x.hO5T(this.Rr7k, this.o2x);
        bvE5J = a1x.hO5T(this.gs5x);
        a1x.ba2x(this.o2x, "display", "none");
        var db3x = bvH5M.x + bvE5J.x;
        var hw5B = bvH5M.y + bvE5J.y + Sv7o;
        bi2x = {
            x: db3x,
            y: hw5B
        };
        this.ctF6z(bi2x)
    };
    b2x.bQc0x = function(er4v, d2x) {
        h2x.cn3x(d2x);
        var er4v = er4v;
        var D2x = er4v.value;
        var bq3x = D2x.length;
        var r2x = gr5w.uu9l(er4v).start;
        var bQl0x = 0;
        var jS6M = d2x.keyCode || d2x.which;
        var jQ6K;
        this.pd7W = gr5w.uu9l(er4v);
        var bQm0x = false;
        for (var i = 1; i < 20; i++) {
            jQ6K = r2x - i;
            if (D2x.charAt(jQ6K) === " ") break;
            if (D2x.charAt(jQ6K) === "@") {
                bQm0x = true;
                this.It3x = bQl0x = jQ6K;
                break
            }
        }
        if (bQm0x && d2x.shiftKey === false && jS6M !== 38 && jS6M !== 40) {
            if (jS6M !== 27 && jS6M !== 13) {
                this.ux9o ? this.ux9o.T2x() : null;
                this.bQe0x(bQl0x)
            }
        } else if (jS6M !== 38 && jS6M !== 40 && d2x.keyCode !== 32) {
            this.ux9o ? this.ux9o.T2x() : null
        }
    };
    b2x.ctF6z = function(bi2x) {
        var bi2x = bi2x;
        var j2x = this.uy9p();
        var e2x = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi2x,
            data: j2x,
            target: this.gs5x,
            rangeData: this.pd7W,
            atIndex: this.It3x
        };
        this.ux9o ? this.ux9o.T2x() : null;
        this.ux9o = w2x.bPp0x.A2x(e2x)
    };
    b2x.uy9p = function() {
        var ctE6y = gr5w.uu9l(this.gs5x).start;
        var ctC6w = this.It3x + 1;
        var bQr0x = gr5w.ctJ6D() || [];
        var bQs0x = [];
        var bv3x = this.gs5x.value.substring(ctC6w, ctE6y).toLowerCase();
        bv3x = bv3x.replace(/\[/g, "\\[");
        bv3x = bv3x.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qN8F = window.GFollowers[0] ? window.GFollowers : []
        } else this.qN8F = [];
        if (!this.qN8F[0]) this.bPJ0x();
        for (var bc2x = 0; bc2x < bQr0x.length; bc2x++) {
            for (var v2x = 0; v2x < this.qN8F.length; v2x++) {
                if (this.qN8F[v2x].nickname == bQr0x[bc2x]) bQs0x.push(this.qN8F[v2x])
            }
        }
        this.qN8F = k2x.cgd2x(this.qN8F, bQs0x, {
            union: true,
            begin: true
        });
        var ctB6v = this.qN8F.length;
        var beJ1x = [];
        var Ok6e, Pa6U;
        if (!this.qN8F[0]) return {
            suggests: beJ1x
        };
        for (var i = 0; i < ctB6v; i++) {
            Ok6e = this.qN8F[i].nickname.toLowerCase().search(bv3x);
            Pa6U = this.qN8F[i].py ? this.qN8F[i].py.toLowerCase().search(bv3x) : -1;
            if (Ok6e !== -1 || Pa6U != -1) beJ1x.push(this.qN8F[i]);
            if (beJ1x.length === 10) break
        }
        return {
            suggests: beJ1x
        }
    };
    b2x.ST7M = function() {
        var hg5l = this.pd7W || {
            text: "",
            start: 0,
            end: 0
        };
        h2x.z2x(this.gs5x, "focus");
        gr5w.Ir3x(this.gs5x, hg5l, "@");
        this.pd7W = gr5w.uu9l(this.gs5x);
        this.It3x = hg5l.start;
        this.bQe0x(this.It3x)
    };
    b2x.HS3x = function() {
        if (this.ux9o) this.ux9o.T2x()
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        cd3x = c2x("nej.ut"),
        bD3x = c2x("nej.ui"),
        b2x;
    var ctz6t = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cty6s = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gi5n = a1x.jq6k(cty6s);
    var jd5i = a1x.ty9p(ctz6t);
    w2x.SZ7S = NEJ.C();
    b2x = w2x.SZ7S.N2x(bD3x.ej4n);
    b2x.cw3x = function(e2x) {
        this.fS4W = {};
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x);
        this.fS4W.txt = a1x.B2x(e2x.target);
        this.Tq7j();
        this.Tc7V = w2x.bPI0x.A2x(this.fS4W)
    };
    b2x.bC3x = function(e2x) {
        this.bG3x();
        this.Tc7V.T2x()
    };
    b2x.ch3x = function() {
        this.cf3x = gi5n;
        this.md7W = jd5i
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.dm4q(a1x.B2x(this.o2x));
        this.fS4W.body = this.o2x;
        this.fS4W.before = i2x[0];
        this.fS4W.flag = i2x[1];
        this.fS4W.after = i2x[2]
    };
    b2x.Tq7j = function() {
        var qk8c = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qk8c.length; i++) {
            if (qk8c[i] === "width" && a1x.df3x(this.fS4W.txt, qk8c[i]) == "100%") {
                var ctx6r = this.fS4W.txt.offsetWidth;
                if (!ctx6r) {
                    setTimeout(function() {
                        a1x.ba2x(this.o2x, qk8c[i], this.fS4W.txt.offsetWidth + "px")
                    }.f2x(this), 300)
                } else {
                    a1x.ba2x(this.o2x, qk8c[i], this.fS4W.txt.offsetWidth + "px")
                }
                continue
            }
            a1x.ba2x(this.o2x, qk8c[i], a1x.df3x(this.fS4W.txt, qk8c[i]))
        }
    };
    b2x.ST7M = function() {
        this.Tc7V.ST7M()
    };
    b2x.HS3x = function() {
        this.Tc7V.HS3x()
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        kN6H = c2x("nm.c"),
        R2x = {},
        b2x;
    if (!!kN6H.bvt5y) return;
    kN6H.bvt5y = NEJ.C();
    b2x = kN6H.bvt5y.N2x(I2x.cJ3x);
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x)
    };
    b2x.bC3x = function() {
        this.bG3x()
    };
    b2x.Hc3x = function(fj4n, cA3x, beG1x) {
        if (R2x[fj4n]) {
            this.gB5G("register commonJST[" + fj4n + "] duplicate");
            return
        }
        if (!k2x.gE5J(cA3x)) {
            cA3x = ctl.comJST.cto6i(fj4n, cA3x, beG1x)
        }
        R2x[fj4n] = cA3x
    };
    b2x.ctm6g = function(beE1x) {
        if (k2x.eJ4N(beE1x)) {
            k2x.bd2x(beE1x, function(p2x) {
                ctl.comJST.Hc3x.apply(this, p2x)
            }, this)
        } else if (k2x.lG6A(beE1x)) {
            k2x.eI4M(beE1x, function(fv4z, K2x) {
                ctl.comJST.Hc3x(K2x, fv4z)
            })
        }
    };
    b2x.cto6i = function(fj4n, uz9q, beG1x) {
        uz9q = uz9q || {};
        NEJ.X(uz9q, {
            comJST: this.nw7p
        });
        if (uz9q.resetDataName && !k2x.eJ4N(uz9q.resetDataName)) {
            uz9q.resetDataName = [uz9q.resetDataName]
        }
        return function() {
            var j2x = arguments[0],
                jT6N = arguments[1];
            if (uz9q.resetDataName) {
                var jQ6K = {};
                for (var i = 0, ii = uz9q.resetDataName.length; i < ii; i++) {
                    jQ6K[uz9q.resetDataName[i]] = arguments[i]
                }
                j2x = jQ6K;
                jT6N = arguments[ii]
            }
            NEJ.X(j2x, uz9q, dZ4d);
            if (beG1x) {
                jT6N = jT6N || {};
                NEJ.X(jT6N, beG1x)
            }
            return a1x.cc3x(fj4n, j2x, jT6N)
        }
    };
    b2x.nw7p = function(fj4n) {
        if (!R2x[fj4n]) {
            this.gB5G("commonJST[" + fj4n + "] is unregister");
            return ""
        } else {
            return R2x[fj4n].apply(null, fu4y.slice.call(arguments, 1))
        }
    };
    b2x.dump = function() {
        return R2x
    };
    b2x.gB5G = function(cti6c) {
        if (console && console.log) {
            console.log(cti6c)
        }
    };
    var dZ4d = function(fv4z, K2x) {
        return K2x == "resetDataName"
    };
    c2x("ctl").comJST = kN6H.bvt5y.gk5p();
    a1x.crA5F({
        comJST: c2x("ctl").comJST.nw7p
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        br3x = NEJ.F,
        fu4y = NEJ.R,
        a1x = c2x("nej.e"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        kN6H = c2x("nm.c"),
        l2x = c2x("nm.x"),
        R2x = {},
        b2x;
    if (!!kN6H.bva5f) return;
    kN6H.bva5f = NEJ.C();
    b2x = kN6H.bva5f.N2x(I2x.cJ3x);
    b2x.cw3x = function() {
        this.cF3x();
        var e2x = {
            "com-mv-artists": function(fU4Y, ed4h, UW8O, buY5d) {
                return a1x.cc3x("com-mv-artists", {
                    artists: fU4Y,
                    clazz: ed4h,
                    boxClazz: buY5d,
                    mark: UW8O || function(cN3x) {
                        return cN3x
                    },
                    escape: k2x.dH4L,
                    comJST: ctl.comJST.nw7p
                })
            },
            "com-album-artists": function(fU4Y, ed4h, UW8O, buY5d) {
                return a1x.cc3x("com-album-artists", {
                    artists: fU4Y,
                    clazz: ed4h,
                    boxClazz: buY5d,
                    mark: UW8O || function(cN3x) {
                        return cN3x
                    },
                    escape: k2x.dH4L,
                    comJST: ctl.comJST.nw7p
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k2x.dH4L
            },
            "com-user-type": function(dp4t, ed4h, lT6N, wv0x, bRz2x) {
                return a1x.cc3x("com-user-type", {
                    x: dp4t,
                    clazz: ed4h || "",
                    clazz2: typeof bRz2x == "undefined" ? "icn" : bRz2x,
                    before: lT6N || "",
                    after: wv0x || "",
                    isEmptyObject: l2x.bIB8t
                })
            }
        };
        for (var C2x in e2x) {
            ctl.comJST.Hc3x(C2x, e2x[C2x])
        }
    };
    b2x.bm3x = function(e2x) {
        this.bn3x(e2x)
    };
    b2x.bC3x = function() {
        this.bG3x()
    };
    c2x("ctl").comJSTUtil = kN6H.bva5f.gk5p()
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        a1x = c2x("nej.e"),
        dx4B = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        w2x = c2x("nm.w"),
        gr5w = c2x("nm.ut"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        n2x = c2x("nm.l"),
        buW5b = [2, 3],
        ee4i = ["sn", "db"],
        b2x, L2x, cth6b = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video",
            41: "cloudvideo"
        },
        beB1x = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频",
            cloudvideo: "视频"
        },
        bRG2x = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by ",
            cloudvideo: " by "
        },
        ctd5i = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        GW3x = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        },
        FullscreenApi = l2x.FM2x || {};
    n2x.oT7M = NEJ.C();
    b2x = n2x.oT7M.N2x(n2x.eq4u);
    L2x = n2x.oT7M.cs3x;
    b2x.bm3x = function(e2x) {
        if (e2x.onclose === undefined) {
            e2x.onclose = this.bRP2x.f2x(this)
        }
        this.bn3x(e2x);
        this.zH1x = e2x.isPub;
        this.jH6B = e2x.rid || -1;
        this.ev4z = e2x.type || -1;
        this.buC5H = e2x.purl;
        this.No5t = e2x.name || "";
        this.Nw5B = e2x.author || "";
        this.bux5C = e2x.authors || "";
        this.ber1x = e2x.actId;
        this.ben1x = e2x.actName;
        this.bSv2x = e2x.title;
        this.bej1x = {};
        this.ctc5h = e2x.mesg || "";
        this.ctb5g = e2x.placeholder || "说点什么吧";
        this.btW5b = e2x.hideTip;
        this.cta5f = e2x.videoJumpUrl;
        var i2x, eT4X = +(new Date);
        try {
            i2x = top.localCache.B2x("user") || {}
        } catch (e) {
            i2x = {}
        }
        for (var i = 0, i2x = i2x.bindings || [], cG3x; i < i2x.length; ++i) {
            cG3x = !i2x[i].tokenJsonStr ? null : JSON.parse(i2x[i].tokenJsonStr);
            if (!cG3x || cG3x.expires_in === undefined) continue;
            var bed1x = parseInt(cG3x.expires_in),
                bea1x = parseInt(i2x[i].refreshTime),
                csZ5e = (bed1x + bea1x) * 1e3 - 5 * 60 * 1e3;
            if (csZ5e > eT4X) this.bej1x[i2x[i].type] = !0
        }
        this.ww0x = w2x.HI3x.A2x({
            parent: this.bdZ1x,
            err: this.bSL2x
        });
        if (this.hC5H) {
            this.hC5H.T2x()
        }
        this.hC5H = w2x.SZ7S.A2x({
            parent: document.body,
            target: this.ex4B
        });
        if (this.ev4z == 24 || this.ev4z == 21 || this.ev4z == 41 || this.GM3x()) {
            this.Ah1x.style.display = "none"
        } else {
            this.Ah1x.style.display = "";
            this.oJ7C = w2x.boM3x.A2x({
                parent: this.bty5D,
                button: this.Ah1x,
                onstartupload: this.bSZ2x.f2x(this, true),
                onfinishupload: this.bSZ2x.f2x(this, false)
            })
        }
        if (this.GM3x()) {
            this.pS8K.innerText = "";
            a1x.y2x(this.pS8K, "info-video");
            a1x.y2x(this.btv5A, "f-hide")
        } else {
            a1x.x2x(this.btv5A, "f-hide")
        }
    };
    b2x.bC3x = function() {
        this.bG3x();
        if (this.ww0x) {
            this.ww0x.T2x();
            delete this.ww0x
        }
        if (this.hC5H) {
            this.hC5H.T2x();
            delete this.hC5H
        }
        if (this.oJ7C) {
            this.oJ7C.T2x();
            delete this.oJ7C
        }
        if (this.mN7G) {
            this.mN7G.T2x();
            delete this.mN7G
        }
    };
    b2x.ch3x = function() {
        this.cf3x = "m-wgt-sharewin"
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.bTi2x = a1x.dm4q(this.o2x)[0];
        var bu3x = a1x.H2x(this.o2x, "j-flag");
        this.rm8e = bu3x.shift();
        this.bSL2x = bu3x.shift();
        this.bdZ1x = bu3x.shift();
        this.ex4B = bu3x.shift();
        this.pS8K = bu3x.shift();
        this.bts5x = bu3x.shift();
        this.csY5d = bu3x.shift();
        this.Ah1x = bu3x.shift();
        this.cu3x = bu3x.shift();
        this.bty5D = bu3x.shift();
        this.Cf1x = bu3x.shift();
        this.cGX0x = bu3x.shift();
        this.btv5A = bu3x.shift();
        this.el4p = bu3x.shift();
        this.bdT1x = a1x.H2x(this.btv5A, "j-t");
        this.CZ2x = I2x.Gb2x.A2x({
            list: a1x.dm4q(this.rm8e),
            selected: "z-slt",
            onchange: this.btk5p.f2x(this)
        });
        if (dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "8.0") {
            a1x.ba2x(this.bdZ1x, "position", "relative");
            a1x.ba2x(this.bdZ1x, "zIndex", "10")
        }
        h2x.s2x(window, "snsbind", this.OT6N.f2x(this));
        h2x.s2x(this.ex4B, "input", this.fR4V.f2x(this));
        h2x.s2x(this.ex4B, "keyup", this.vU0x.f2x(this));
        h2x.s2x(this.o2x, "click", this.cL3x.f2x(this));
        this.S2x = q2x.bmd3x.A2x();
        this.S2x.s2x("onshareall", this.bdR1x.f2x(this, 0));
        this.S2x.s2x("onshareerror", this.iZ5e.f2x(this));
        this.S2x.s2x("onshareprivate", this.bdR1x.f2x(this, 1));
        this.bdQ1x = q2x.zX1x.A2x();
        this.gB5G = q2x.hP5U.A2x();
        try {
            this.OZ6T = top.api.sharePermission
        } catch (e) {}
        if (!this.OZ6T) {
            this.OZ6T = GW3x;
            v2x.bl3x("/api/event/user/permission", {
                type: "json",
                onload: function(d2x) {
                    if (d2x.code == 200) {
                        this.OZ6T = NEJ.EX(GW3x, d2x)
                    }
                }.f2x(this)
            })
        }
        l2x.oi7b()
    };
    b2x.btk5p = function(d2x) {
        d2x.index == 0 ? a1x.x2x(this.bTi2x, "m-plshare") : a1x.y2x(this.bTi2x, "m-plshare");
        this.bdZ1x.style.display = d2x.index == 0 ? "none" : "";
        this.csY5d.style.display = d2x.index == 0 ? "" : "none";
        this.Ah1x.style.display = d2x.index == 0 ? "" : "none";
        if (this.ev4z == 24 || this.ev4z == 21) {
            this.Ah1x.style.display = "none"
        }
        this.bSL2x.style.display = "none";
        this.ex4B.value = "";
        this.cb3x();
        this.Gp2x();
        if (d2x.index == 0) {
            var cD3x = a1x.df3x(this.ex4B, "width");
            if (cD3x == "auto" || !cD3x) {
                return
            } else {
                if (this.hC5H) {
                    this.hC5H.T2x()
                }
                this.hC5H = w2x.SZ7S.A2x({
                    parent: document.body,
                    target: this.ex4B
                })
            }
            this.bty5D.style.display = ""
        } else {
            if (this.hC5H) {
                this.hC5H.T2x();
                delete this.hC5H
            }
            this.bty5D.style.display = "none"
        }
    };
    b2x.cL3x = function(d2x) {
        var g2x = h2x.X2x(d2x, "d:action");
        if (!g2x) return;
        if (a1x.t2x(g2x, "action") == "search") {
            h2x.cn3x(d2x)
        } else if (a1x.t2x(g2x, "default") === undefined) {
            h2x.cn3x(d2x)
        }
        switch (a1x.t2x(g2x, "action")) {
            case "txt":
                this.lU6O();
                break;
            case "search":
                if (this.GM3x()) {
                    top.location.href = this.cta5f
                } else if (this.zH1x && this.ev4z != 24) {
                    if (this.mN7G) {
                        this.mN7G.T2x()
                    }
                    this.mN7G = w2x.bwk5p.A2x({
                        parent: this.o2x.parentNode,
                        onfinish: this.btd5i.f2x(this),
                        oncancel: this.csS5X.f2x(this)
                    });
                    this.bsU4Y = true;
                    this.o2x.style.display = "none";
                    this.Gj2x(this.jH6B < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h2x.uj9a(d2x);
                !!this.hn5s && this.hn5s.bt3x();
                this.hC5H.ST7M();
                this.gh5m();
                break;
            case "emot":
                h2x.uj9a(d2x);
                !!this.hC5H && this.hC5H.HS3x();
                if (!this.hn5s) {
                    this.hn5s = n2x.In3x.A2x({
                        parent: this.bts5x
                    });
                    this.hn5s.s2x("onselect", this.yD0x.f2x(this))
                }
                this.hn5s.J2x();
                break;
            case "upload":
                break;
            case "sns":
                h2x.bh2x(d2x);
                var bsJ4N, bv3x, u2x = a1x.t2x(g2x, "type");
                if (!this.bej1x[u2x]) {
                    bsJ4N = g2x.href.split("?");
                    bv3x = k2x.hu5z(bsJ4N[1]);
                    bv3x["csrf_token"] = v2x.gC5H("__csrf");
                    top.open(bsJ4N[0] + "?" + k2x.cC3x(bv3x));
                    return
                }
                var bz3x = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l2x.Ct1x(g2x, "u-slg-" + bz3x[u2x] + "-gray");
                break;
            case "close":
                !!this.hn5s && this.hn5s.bt3x();
                this.bRP2x();
                break;
            case "share":
                h2x.bh2x(d2x);
                if (this.GM3x()) {
                    if (!a1x.bE3x(g2x, "u-btn2-2-dis")) {
                        this.csR5W()
                    }
                } else if (a1x.bE3x(g2x, "u-btn2-2-dis")) {
                    if (!this.OZ6T.pubEventWithoutResource && this.jH6B < 0) {
                        this.csP5U()
                    } else {}
                } else if (this.jH6B < 0 && !this.ex4B.value && this.oJ7C && this.oJ7C.Rx7q().length == 0) {
                    n2x.Z2x.J2x({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.csO5T()
                }
                break
        }
    };
    b2x.csP5U = function() {
        var tC9t = 0,
            bsG4K = function() {
                if (tC9t % 2) {
                    a1x.x2x(this.pS8K, "z-show")
                } else {
                    a1x.y2x(this.pS8K, "z-show")
                }
                tC9t++;
                if (tC9t > 5) {
                    clearInterval(eh4l)
                }
            },
            eh4l;
        return function() {
            tC9t = 0;
            clearInterval(eh4l);
            eh4l = setInterval(bsG4K.f2x(this), 200)
        }
    }();
    b2x.OT6N = function(m2x) {
        m2x = m2x.result;
        this.bej1x[m2x.type] = !0;
        var r2x = k2x.dl4p(buW5b, m2x.type),
            cj3x = "u-slg-" + ee4i[r2x] + "-gray";
        a1x.x2x(this.bdT1x[r2x], cj3x)
    };
    b2x.btd5i = function(bx3x) {
        var j2x = bx3x.data;
        this.jH6B = bx3x.id;
        this.ev4z = bx3x.type;
        this.o2x.style.display = "";
        this.Gj2x(this.bSv2x);
        this.mN7G && this.mN7G.T2x();
        this.bsU4Y = false;
        this.buC5H = j2x.picUrl;
        this.No5t = j2x.title || "";
        this.Nw5B = j2x.author || "";
        this.bux5C = j2x.authors || "";
        this.csN5S();
        this.bdE1x()
    };
    b2x.csS5X = function() {
        this.mN7G && this.mN7G.T2x();
        this.o2x.style.display = "";
        this.Gj2x(this.bSv2x);
        this.bsU4Y = false;
        this.bdE1x()
    };
    b2x.yD0x = function(d2x) {
        var bo3x = "[" + d2x.text + "]";
        gr5w.Ir3x(this.ex4B, this.pd7W, bo3x);
        this.gh5m()
    };
    b2x.fR4V = function(d2x) {
        dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "7.0" ? setTimeout(this.gh5m.f2x(this), 0) : this.gh5m()
    };
    b2x.vU0x = function(d2x) {
        this.lU6O();
        if (d2x.keyCode == 8) this.gh5m()
    };
    b2x.gh5m = function() {
        this.lU6O();
        this.Gp2x()
    };
    b2x.Gp2x = function() {
        var bq3x = Math.ceil(k2x.fx4B(this.ex4B.value.trim()) / 2);
        this.cu3x.innerText = 140 - bq3x;
        bq3x > 140 ? a1x.fk4o(this.cu3x, "s-fc4", "s-fc6") : a1x.fk4o(this.cu3x, "s-fc6", "s-fc4")
    };
    b2x.csO5T = function() {
        if (this.cQ3x()) return;
        if (k2x.fx4B(this.ex4B.value.trim()) > 280) {
            this.cb3x("字数超过140个字符");
            return
        }
        l2x.sL9C(this.csL5Q.f2x(this))
    };
    b2x.csL5Q = function(cG3x) {
        var u2x = this.CZ2x.tj9a(),
            j2x;
        if (u2x == 0) {
            for (var i = 0, IY3x = []; i < this.bdT1x.length; ++i) {
                if (!a1x.bE3x(this.bdT1x[i], "u-slg-" + ee4i[i] + "-gray")) IY3x.push(buW5b[i])
            }
            this.cQ3x(!0);
            j2x = {
                id: this.jH6B,
                msg: this.ex4B.value.trim(),
                type: this.bdy1x(this.ev4z),
                picUrl: this.buC5H,
                snsTypes: IY3x.join(","),
                isPub: this.zH1x,
                checkToken: cG3x || ""
            };
            if (this.ber1x > 0) {
                j2x.actId = this.ber1x;
                if (this.ben1x) {
                    j2x.msg = "#" + this.ben1x + "#" + j2x.msg
                }
            }
            var nV7O = this.oJ7C && this.oJ7C.Rx7q();
            if (nV7O && nV7O.length) {
                j2x.pics = nV7O
            }
            this.S2x.cwN7G(j2x)
        } else {
            var th9Y = this.ww0x.PU6O();
            if (th9Y.length <= 0) {
                this.cb3x("请至少选择一位好友");
                return
            }
            this.S2x.cwM7F({
                data: {
                    id: this.jH6B,
                    msg: this.ex4B.value.trim(),
                    type: this.bdy1x(this.ev4z == 41 ? 39 : this.ev4z),
                    userIds: "[" + th9Y.join(",") + "]",
                    checkToken: cG3x || ""
                }
            })
        }
    };
    b2x.csR5W = function() {
        if (this.cQ3x()) {
            return
        }
        this.gB5G.eS4W("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k2x.fx4B(this.ex4B.value.trim()) > 280) {
            this.cb3x("字数超过140个字符");
            return
        }
        l2x.sL9C(this.csJ5O.bind(this))
    };
    b2x.csJ5O = function(cG3x) {
        this.cQ3x(!0);
        var j2x = {
                msg: this.ex4B.value.trim() || "",
                type: "video",
                checkToken: cG3x || ""
            },
            csI5N = {
                videoId: this.jH6B
            };
        if (this.ber1x > 0) {
            j2x.actId = this.ber1x;
            if (this.ben1x) {
                j2x.msg = "#" + this.ben1x + "#" + j2x.msg
            }
        }
        j2x.videoinfo = JSON.stringify(csI5N);
        this.S2x.cwK7D({
            data: {
                videoId: this.jH6B,
                commit: true
            },
            data2: j2x,
            snsTypes: ""
        })
    };
    b2x.bdR1x = function(u2x, m2x) {
        this.cQ3x(!1);
        this.bt3x();
        if (!this.btW5b) {
            if (this.GM3x()) {
                n2x.Z2x.J2x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n2x.Z2x.J2x({
                    tip: "分享成功" + (m2x.point > 0 ? ' 获得<em class="s-fc6">' + m2x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h2x.z2x(n2x.oT7M, "sharesuccess", {
            isPrivate: u2x,
            rid: this.jH6B,
            rtype: this.ev4z,
            data: m2x.event
        });
        this.z2x("onshare")
    };
    b2x.iZ5e = function(m2x) {
        this.cQ3x(!1);
        var bF3x = "分享失败";
        if (m2x.code) {
            switch (m2x.code) {
                case 250:
                    bF3x = m2x.message || m2x.msg || (this.zH1x ? "发布异常" : "分享异常");
                    break;
                case 404:
                    bF3x = "分享的资源不存在";
                    break;
                case 407:
                    bF3x = "输入内容包含有关键字";
                    break;
                case 408:
                    bF3x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF3x = m2x.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l2x.ft4x({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.cb3x(bF3x)
    };
    b2x.lU6O = function() {
        this.pd7W = gr5w.uu9l(this.ex4B)
    };
    b2x.cb3x = function(bF3x) {
        this.dX4b(this.el4p, bF3x)
    };
    b2x.cQ3x = function(dc3x) {
        return this.dV4Z(this.Cf1x, dc3x, "分享", "分享中...")
    };
    b2x.bdy1x = function(if5k) {
        return cth6b[if5k] || ""
    };
    b2x.csH5M = function() {
        var er4v, uM9D = this.bdy1x(this.ev4z);
        this.pS8K.style.display = "";
        if (this.jH6B < 0) {
            this.pS8K.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.No5t) {
                this.pS8K.style.display = "none";
                return
            }
            var bds1x = this.zH1x && this.ev4z != 24;
            er4v = (beB1x[uM9D] ? beB1x[uM9D] + "：" : "") + this.No5t + (bRG2x[uM9D] || " ") + (uM9D == "mv" || uM9D == "album" ? this.bux5C || this.Nw5B : this.Nw5B);
            a1x.dA4E(this.pS8K, "m-xwgt-share-infobar", {
                canChange: bds1x,
                info: er4v
            });
            if (bds1x) {
                a1x.x2x(this.pS8K, "z-dis")
            } else {
                a1x.y2x(this.pS8K, "z-dis")
            }
        }
        a1x.x2x(this.pS8K, "info-video")
    };
    b2x.csN5S = function() {
        var uM9D = this.bdy1x(this.ev4z),
            er4v = (beB1x[uM9D] ? beB1x[uM9D] + "：" : "") + this.No5t + (bRG2x[uM9D] || " ") + (uM9D == "mv" || uM9D == "album" ? this.bux5C || this.Nw5B : this.Nw5B);
        bds1x = this.zH1x && this.ev4z != 24;
        if (this.GM3x()) {} else {
            a1x.x2x(this.pS8K, "info-video");
            a1x.dA4E(this.pS8K, "m-xwgt-share-infobar", {
                canChange: bds1x,
                isPub: this.zH1x,
                info: er4v
            })
        }
    };
    b2x.csG5L = function() {
        var Je3x = this.ex4B.value;
        if (this.zH1x) {
            if (!!this.bsU4Y) {
                return !!Je3x && !!Je3x.length || !!this.oJ7C && this.oJ7C.Rx7q().length > 0
            } else {
                return !(this.jH6B < 0) || !!Je3x && !!Je3x.length || !!this.oJ7C && this.oJ7C.Rx7q().length > 0
            }
        } else {
            return !!Je3x && !!Je3x.length || !!this.oJ7C && this.oJ7C.Rx7q().length > 0
        }
    };
    b2x.bdE1x = function() {
        var bVa9R = false;
        if (!this.zH1x || this.OZ6T.pubEventWithoutResource || !(this.jH6B < 0)) {
            bVa9R = true
        }
        if (bVa9R) {
            a1x.x2x(this.Cf1x, "u-btn2-2-dis")
        } else {
            a1x.y2x(this.Cf1x, "u-btn2-2-dis")
        }
    };
    b2x.bSZ2x = function(brE4I) {
        if (brE4I) {
            a1x.y2x(this.Cf1x, "u-btn2-2-dis")
        } else {
            this.bdE1x()
        }
    };
    b2x.bRP2x = function(d2x) {
        if (d2x) {
            d2x.stopped = true
        }
        if (this.csG5L()) {
            l2x.hr5w({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(V2x) {
                    if (V2x == "ok") {
                        this.z2x("forceclose", {});
                        this.bt3x();
                        h2x.z2x(n2x.oT7M, "shareclose", {})
                    }
                }.f2x(this)
            })
        } else {
            this.z2x("forceclose", {});
            this.bt3x();
            h2x.z2x(n2x.oT7M, "shareclose", {})
        }
    };
    b2x.Gj2x = function(eo4s, dW4a) {
        this.oK7D.CL1x(eo4s, dW4a)
    };
    b2x.bdr1x = function(u2x) {
        this.gB5G.eS4W("page", {
            type: u2x
        })
    };
    b2x.GM3x = function() {
        return this.ev4z == 39
    };
    b2x.J2x = function() {
        var csF5K = function(p2x, r2x) {
            var cj3x = "u-slg-" + ee4i[r2x] + "-gray";
            !this.bej1x[buW5b[r2x]] ? a1x.y2x(p2x, cj3x) : a1x.x2x(p2x, cj3x)
        };
        return function() {
            L2x.J2x.call(this);
            this.o2x.style.display = "";
            this.cb3x();
            this.cQ3x(!1);
            this.CZ2x.Qo6i(0);
            this.ex4B.focus();
            this.ex4B.value = this.ctc5h || "";
            this.ex4B.placeholder = this.ctb5g || "";
            if (!this.GM3x()) {
                this.csH5M()
            } else {
                a1x.y2x(this.pS8K, "info-video");
                a1x.dA4E(this.pS8K, "m-xwgt-share-videobar", {
                    title: this.No5t,
                    picUrl: this.buC5H
                })
            }
            this.gh5m();
            this.ww0x.cuf6Z();
            k2x.bd2x(this.bdT1x, csF5K, this);
            this.lU6O();
            if (this.zH1x) {
                this.rm8e.style.display = "none"
            } else {
                this.rm8e.style.display = ""
            }
            this.bdE1x()
        }
    }();
    b2x.bt3x = function(d2x) {
        L2x.bt3x.call(this);
        !!this.hn5s && this.hn5s.bt3x();
        if (this.ww0x) {
            this.ww0x.T2x();
            delete this.ww0x
        }
        if (this.hC5H) {
            this.hC5H.T2x();
            delete this.hC5H
        }
        if (this.oJ7C) {
            this.oJ7C.T2x();
            delete this.oJ7C
        }
        if (this.bVg9X) {
            this.bVg9X = this.bVg9X.T2x()
        }
        if (this.mN7G) {
            this.mN7G.T2x();
            delete this.mN7G
        }
    };
    l2x.kI6C = function(e2x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e2x.title === undefined) {
            e2x.title = "分享"
        }
        if (e2x.actId && e2x.type != 39) {
            var u2x = ctd5i[e2x.resourceType],
                bV3x = e2x.resourceJson,
                ih5m;
            if (k2x.fB4F(bV3x)) {
                try {
                    bV3x = JSON.parse(bV3x)
                } catch (e) {}
            }
            if (u2x) {
                ih5m = l2x.bLy9p(u2x, bV3x);
                e2x.name = ih5m.title;
                e2x.author = ih5m.author;
                e2x.picUrl = ih5m.picUrl;
                e2x.type = u2x;
                e2x.rid = (bV3x || []).id
            }
        }
        n2x.oT7M.J2x(e2x)
    };
    I2x.fN4R.A2x({
        element: n2x.oT7M,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    n2x.bdn1x = NEJ.C();
    b2x = n2x.bdn1x.N2x(n2x.eq4u);
    L2x = n2x.bdn1x.cs3x;
    b2x.cw3x = function() {
        this.cF3x()
    };
    b2x.bW3x = function() {
        this.ci3x();
        var i2x = a1x.H2x(this.o2x, "j-flag");
        h2x.s2x(i2x[0], "click", this.FG2x.f2x(this))
    };
    b2x.ch3x = function() {
        this.cf3x = "m-import-ok"
    };
    b2x.bm3x = function(e2x) {
        e2x.parent = e2x.parent || document.body;
        e2x.title = "歌曲同步完成";
        this.bn3x(e2x)
    };
    b2x.bC3x = function() {
        this.bG3x()
    };
    b2x.FG2x = function(d2x) {
        this.bt3x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b2x.BR1x = function() {
        this.bt3x()
    };
    b2x.bSQ2x = function(d2x) {
        if (d2x.keyCode == 13) this.Ho3x()
    }
})();
(function() {
    var c2x = NEJ.P,
        bb2x = NEJ.O,
        h2x = c2x("nej.v"),
        a1x = c2x("nej.e"),
        v2x = c2x("nej.j"),
        O2x = c2x("nej.p"),
        k2x = c2x("nej.u"),
        n2x = c2x("nm.l"),
        w2x = c2x("nm.w"),
        bD3x = c2x("nej.ui"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        b2x, L2x;
    n2x.bVk9b = NEJ.C();
    b2x = n2x.bVk9b.N2x(n2x.eq4u);
    b2x.ch3x = function() {
        this.cf3x = "m-programtips-layer"
    };
    b2x.bW3x = function() {
        this.ci3x();
        this.bU3x = a1x.H2x(this.o2x, "j-flag")
    };
    b2x.bm3x = function(e2x) {
        if (e2x.inner) {
            var innerNode = a1x.H2x(this.o2x, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e2x.inner
            }
        }
        e2x.clazz = " m-layer-programtips " + (e2x.clazz || "");
        e2x.parent = e2x.parent || document.body;
        e2x.title = e2x.title || "付费内容提示";
        e2x.draggable = !0;
        e2x.destroyalbe = !0;
        e2x.mask = true;
        this.bn3x(e2x);
        this.gY5d = e2x.id;
        this.csz5E = e2x.radiotype;
        this.kF6z = location.protocol + "//" + (this.brk4o() || "music.163.com") + "/m/" + this.csz5E + "?id=" + this.gY5d;
        this.kF6z = e2x.url || this.kF6z;
        this.csw5B()
    };
    b2x.bC3x = function() {
        this.bG3x()
    };
    b2x.BR1x = function() {
        this.bt3x()
    };
    b2x.FG2x = function(d2x) {
        this.z2x("onok", D2x);
        this.bt3x()
    };
    l2x.bre4i = function(e2x) {
        n2x.bVk9b.A2x(e2x).J2x()
    };
    b2x.csw5B = function() {
        v2x.bl3x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k2x.cC3x({
                url: this.kF6z,
                size: 180
            }),
            onload: function(j2x) {
                if (j2x.code == 200) {
                    this.csv5A(j2x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f2x(this)
        })
    };
    b2x.brk4o = function() {
        var VA8s = location.host;
        if (VA8s.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b2x.csv5A = function(ka6U) {
        this.bU3x[0].style.backgroundImage = "url(" + ka6U + ")"
    }
})();
(function() {
    var c2x = NEJ.P,
        a1x = c2x("nej.e"),
        dx4B = c2x("nej.p"),
        h2x = c2x("nej.v"),
        k2x = c2x("nej.u"),
        I2x = c2x("nej.ut"),
        v2x = c2x("nej.j"),
        q2x = c2x("nm.d"),
        l2x = c2x("nm.x"),
        E2x = c2x("nm.m"),
        n2x = c2x("nm.l"),
        M2x = c2x("nm.m.f"),
        b2x, L2x;
    E2x.dh3x = NEJ.C();
    b2x = E2x.dh3x.N2x(I2x.du4y);
    b2x.bL3x = function() {
        var rb8T = !1;
        return function() {
            if (rb8T) return;
            rb8T = !0;
            this.bQ3x();
            if (top == self) {
                return
            }
            this.tD9u = a1x.B2x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bVA9r()
            }
            I2x.fN4R.A2x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX3x([
                [window, "scroll", this.BQ1x.f2x(this)],
                [document, "keyup", this.csu5z.f2x(this)],
                [document.body, "click", this.sT9K.f2x(this)],
                [document, "mouseup", this.cst5y.f2x(this)],
                [this.tD9u, "click", this.QV7O.f2x(this)],
                [q2x.tx9o, "message", this.wk0x.f2x(this)]
            ]);
            l2x.cwV7O(document.body);
            this.BQ1x();
            if (this.BN1x !== false && typeof GUser !== "undefined" && GUser.userId > 0) q2x.tx9o.gk5p().wb0x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dx4B.dr4v.browser == "ie" && parseInt(dx4B.dr4v.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hc5h = top.player.getPlaying();
                    if (hc5h && hc5h.track && hc5h.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hc5h.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.yF0x.f2x(this);
            this.ke6Y = q2x.hP5U.A2x();
            window.log = this.hd5i.f2x(this);
            var ti9Z = location.search;
            if (ti9Z) {
                var bv3x = ti9Z.substr(ti9Z.indexOf("?") + 1),
                    gn5s = k2x.hu5z(bv3x);
                if (gn5s && gn5s["_hash"]) location.hash = gn5s["_hash"]
            }
        }
    }();
    b2x.csu5z = function(d2x) {
        var g2x = h2x.X2x(d2x);
        try {
            if (d2x.keyCode == 80 && l2x.bHC8u() || ["textarea", "input"].indexOf(g2x.tagName.toLowerCase()) >= 0) return;
            h2x.z2x(top.document, "keyup", {
                ctrlKey: d2x.ctrlKey,
                keyCode: d2x.keyCode
            })
        } catch (e) {}
    };
    b2x.sT9K = function(d2x) {
        var g2x = h2x.X2x(d2x);
        if (g2x && g2x.tagName == "INPUT") return;
        var g2x = h2x.X2x(d2x, "d:pid");
        if (g2x) {
            h2x.cn3x(d2x);
            var qu8m = a1x.t2x(g2x, "pid"),
                BH1x = a1x.t2x(g2x, "ptype"),
                V2x = a1x.t2x(g2x, "action") || "play";
            switch (V2x) {
                case "subscribe":
                    l2x.mw7p({
                        tracks: [qu8m]
                    });
                    break
            }
        }
        g2x = h2x.X2x(d2x, "d:resAction");
        if (g2x && g2x.className.indexOf("-dis") == -1) {
            var cU3x = a1x.t2x(g2x, "resId"),
                u2x = a1x.t2x(g2x, "resType"),
                bqM4Q = a1x.t2x(g2x, "resRadiotype"),
                bqH4L = a1x.t2x(g2x, "resRadioid"),
                ec4g = a1x.t2x(g2x, "resFrom"),
                j2x = a1x.t2x(g2x, "resData"),
                V2x = a1x.t2x(g2x, "resAction"),
                bwW5b = a1x.t2x(g2x, "resCopyright"),
                bcY1x = a1x.t2x(g2x, "resAuditstatus");
            if (V2x != "log" && V2x != "bilog") h2x.cn3x(d2x);
            switch (V2x) {
                case "log":
                    j2x = (j2x || "").split("|");
                    if (!!j2x[0]) {
                        var bg2x = {
                            id: cU3x,
                            alg: j2x[2] || "itembased",
                            scene: j2x[3],
                            position: j2x[1] || 0
                        };
                        if (!!j2x[4]) bg2x.srcid = j2x[4];
                        window.log(j2x[0], bg2x)
                    }
                    break;
                case "bilog":
                    var bnd3x = a1x.t2x(g2x, "logAction"),
                        bnK3x = a1x.t2x(g2x, "logJson");
                    window.log(bnd3x, bnK3x);
                    break;
                case "share":
                    if (bcY1x && bcY1x == 1) {
                        l2x.iC5H("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cU3x, u2x, a1x.t2x(g2x, "resPic"), a1x.t2x(g2x, "resName"), a1x.t2x(g2x, "resAuthor"), a1x.t2x(g2x, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (u2x == 18) {
                        var qx8p = a1x.t2x(g2x, "resLevel"),
                            oa7T = a1x.t2x(g2x, "resFee");
                        if (qx8p == 10) {
                            l2x.vZ0x(oa7T, cU3x, "song");
                            break
                        }
                        l2x.mw7p({
                            tracks: [cU3x]
                        })
                    }
                    break;
                case "download":
                    l2x.Lr4v({
                        id: cU3x,
                        type: u2x
                    });
                    break;
                case "programtips":
                    if (bcY1x && bcY1x == 1) {
                        l2x.iC5H("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l2x.bre4i({
                            id: bqH4L,
                            radiotype: bqM4Q
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d2x)
        } catch (e) {}
    };
    b2x.cst5y = function(d2x) {
        try {
            h2x.z2x(top.document, "mouseup")
        } catch (e) {}
    };
    b2x.BQ1x = function() {
        var css5x = function() {
            var ce3x = window.innerHeight;
            if (!k2x.td9U(ce3x)) ce3x = (document.documentElement || document.body).clientHeight;
            return ce3x
        };
        return function(d2x) {
            if (!this.tD9u) return;
            var bcW1x = css5x(),
                gb5g = document.documentElement.scrollTop || document.body.scrollTop;
            a1x.ba2x(this.tD9u, "display", gb5g > 0 ? "" : "none");
            if (dx4B.dr4v.browser == "ie" && dx4B.dr4v.version < "7.0") {
                var gy5D = Math.min(document.body.clientHeight, bcW1x + gb5g) - 204;
                a1x.ba2x(this.tD9u, "top", gy5D + "px")
            }
        }
    }();
    b2x.QV7O = function(d2x) {
        h2x.cn3x(d2x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b2x.yF0x = function() {
        var bqn4r = function(d2x) {
            h2x.z2x(window, "share", d2x)
        };
        return function(cU3x, u2x, yQ0x, W2x, FL2x, FJ2x) {
            l2x.kI6C({
                rid: cU3x,
                type: u2x,
                purl: yQ0x,
                name: W2x,
                author: FL2x,
                authors: FJ2x,
                onshare: bqn4r.f2x(this)
            })
        }
    }();
    b2x.hd5i = function(V2x, bg2x) {
        try {
            top.log(V2x, bg2x)
        } catch (e) {
            if (V2x.indexOf("new|") == 0) {
                return this.ke6Y.eS4W(V2x.slice(4), bg2x)
            }
            switch (V2x) {
                case "play":
                    this.ke6Y.ep4t(bg2x);
                    break;
                case "search":
                    this.ke6Y.bCW7P(bg2x);
                    break;
                default:
                    this.ke6Y.eS4W(V2x, bg2x)
            }
        }
    };
    b2x.bVA9r = function() {
        var bcR0x, bqh4l = false,
            bs3x = [45, 60];
        var csr5w = function(bF3x) {
            if (bF3x.title != "MailBoxImport") return;
            var Q2x = JSON.parse(bF3x.content || "null") || bb2x;
            if (Q2x.status == 10) {
                n2x.bdn1x.A2x().J2x();
                window.clearTimeout(bcR0x)
            }
        };
        var nZ7S = function(d2x) {
            if (d2x.code == 200) {
                if (d2x.status == 1) {
                    h2x.s2x(q2x.CU2x, "message", csr5w.f2x(this));
                    q2x.CU2x.A2x().btl5q();
                    bqh4l = true
                } else {
                    if (bqh4l) {
                        if (d2x.status == 10) {
                            n2x.bdn1x.A2x().J2x();
                            h2x.hj5o(q2x.CU2x, "message");
                            window.clearTimeout(bcR0x);
                            bqh4l = false
                        }
                    } else {
                        window.clearTimeout(bcR0x)
                    }
                }
            }
        };
        return function() {
            var tV9M = bs3x.shift() * 1e3;
            v2x.bl3x("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: nZ7S.f2x(this)
            });
            if (tV9M) {
                bcR0x = window.setTimeout(arguments.callee, tV9M)
            }
        }
    }();
    b2x.wk0x = function(d2x) {
        try {
            top.polling(d2x)
        } catch (e) {}
    }
})()