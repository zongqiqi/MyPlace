(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(Gw5B) {
        if (!Gw5B || !Gw5B.length) return null;
        var bei3x = window;
        for (var a = Gw5B.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; bei3x = bei3x[a[i]] = bei3x[a[i]] || {}, i++);
        return bei3x
    };
    NEJ.Q = function(bJ4N, Gw5B) {
        bJ4N = bJ4N || NEJ.O;
        var bs4w = Gw5B.split(".");
        for (var i = 0, l = bs4w.length; i < l; i++) {
            bJ4N = bJ4N[bs4w[i]];
            if (!bJ4N) break
        }
        return bJ4N
    };
    NEJ.C = function() {
        var bGF0x = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bBC9t = function(D3x, bz4D) {
            for (var x in bz4D)
                if (D3x == bz4D[x]) return x;
            return null
        };
        var bye8W = {
                cw4A: 0,
                bm4q: 1,
                bC4G: 2,
                bW4a: 3,
                bL4P: 4,
                eX5c: 5,
                kl7e: 6,
                eE5J: 7
            },
            ut1x = {
                cF4J: 0,
                bn4r: 1,
                bG4K: 2,
                ci4m: 3,
                bQ4U: 4,
                gL6F: 5,
                ll8d: 6,
                gj6d: 7
            };
        return function() {
            var fI6C = function() {
                this.bBF9w();
                return this.cw4A.apply(this, arguments)
            };
            fI6C.prototype.bBF9w = NEJ.F;
            fI6C.prototype.cw4A = NEJ.F;
            fI6C.N3x = function(AQ4U, bIv1x) {
                if (bGF0x(AQ4U)) return;
                if (bIv1x == null || !!bIv1x) NEJ.X(this, AQ4U, bGF0x);
                this.bWf6Z = AQ4U;
                this.cs4w = AQ4U.prototype;
                var bI4M = function() {};
                bI4M.prototype = AQ4U.prototype;
                this.prototype = new bI4M;
                var GL5Q = this.prototype;
                GL5Q.constructor = this;
                var ck4o;
                for (var x in bye8W) {
                    ck4o = bBC9t(bye8W[x], ut1x);
                    if (!ck4o || !this.cs4w[x]) continue;
                    GL5Q[x] = function(W3x) {
                        return function() {
                            this[W3x].apply(this, arguments)
                        }
                    }(ck4o)
                }
                var Ew5B = {};
                for (var x in ut1x) {
                    ck4o = bBC9t(ut1x[x], bye8W);
                    if (!ck4o || !this.cs4w[ck4o]) continue;
                    Ew5B[ck4o] = AQ4U;
                    GL5Q[x] = function(W3x) {
                        return function() {
                            var m3x, bI4M = this.bya8S[W3x],
                                VX0x = bI4M.prototype[W3x];
                            this.bya8S[W3x] = bI4M.bWf6Z || AQ4U;
                            if (!!VX0x) m3x = VX0x.apply(this, arguments);
                            this.bya8S[W3x] = AQ4U;
                            return m3x
                        }
                    }(ck4o)
                }
                GL5Q.bBF9w = function() {
                    this.bya8S = NEJ.X({}, Ew5B)
                };
                GL5Q.cKz6t = GL5Q.cF4J;
                return GL5Q
            };
            return fI6C
        }
    }();
    NEJ.X = function(gn6h, bR4V, dZ5e) {
        if (!gn6h || !bR4V) return gn6h;
        dZ5e = dZ5e || NEJ.F;
        for (var x in bR4V) {
            if (bR4V.hasOwnProperty(x) && !dZ5e(bR4V[x], x)) gn6h[x] = bR4V[x]
        }
        return gn6h
    };
    NEJ.EX = function(gn6h, bR4V) {
        if (!gn6h || !bR4V) return gn6h;
        for (var x in gn6h) {
            if (gn6h.hasOwnProperty(x) && bR4V[x] != null) gn6h[x] = bR4V[x]
        }
        return gn6h
    };
    var Ik6e = Function.prototype;
    Ik6e.eH5M = function(lT8L, wv2x) {
        var f = NEJ.F,
            wv2x = wv2x || f,
            lT8L = lT8L || f,
            dv5A = this;
        return function() {
            var d3x = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            lT8L(d3x);
            if (!d3x.stopped) {
                d3x.value = dv5A.apply(this, d3x.args);
                wv2x(d3x)
            }
            return d3x.value
        }
    };
    Ik6e.f3x = function() {
        var bf4j = arguments,
            gn6h = arguments[0],
            bxW8O = this;
        return function() {
            var tJ0x = NEJ.R.slice.call(bf4j, 1);
            NEJ.R.push.apply(tJ0x, arguments);
            return bxW8O.apply(gn6h || window, tJ0x)
        }
    };
    Ik6e.ew5B = function() {
        var bf4j = arguments,
            gn6h = NEJ.R.shift.call(bf4j),
            bxW8O = this;
        return function() {
            NEJ.R.push.apply(arguments, bf4j);
            return bxW8O.apply(gn6h || window, arguments)
        }
    };
    var Ik6e = String.prototype;
    if (!Ik6e.trim) {
        Ik6e.trim = function() {
            var dg5l = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(dg5l, "")
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
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        O3x = c3x("nej.p"),
        vB2x = window.navigator.platform,
        vw2x = window.navigator.userAgent;
    var lt8l = {
        mac: vB2x,
        win: vB2x,
        linux: vB2x,
        ipad: vw2x,
        ipod: vw2x,
        iphone: vB2x,
        android: vw2x
    };
    O3x.Il6f = lt8l;
    for (var x in lt8l) lt8l[x] = (new RegExp(x, "i")).test(lt8l[x]);
    lt8l.ios = lt8l.ipad || lt8l.iphone || lt8l.ipod;
    lt8l.tablet = lt8l.ipad;
    lt8l.desktop = lt8l.mac || lt8l.win || lt8l.linux && !lt8l.android;
    var iu7n = {
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
    O3x.dr5w = iu7n;
    if (/msie\s+(.*?);/i.test(vw2x) || /trident\/.+rv:([\d\.]+)/i.test(vw2x)) {
        iu7n.engine = "trident";
        iu7n.browser = "ie";
        iu7n.version = RegExp.$1;
        iu7n.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var mC8u = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        iu7n.release = mC8u[document.documentMode] || mC8u[parseInt(iu7n.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(vw2x)) {
        iu7n.engine = "webkit";
        iu7n.release = RegExp.$1 || "";
        iu7n.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(vw2x)) {
        iu7n.engine = "gecko";
        iu7n.release = RegExp.$1 || "";
        iu7n.browser = "firefox";
        iu7n.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(vw2x)) iu7n.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(vw2x)) {
        iu7n.engine = "presto";
        iu7n.release = RegExp.$1 || "";
        iu7n.browser = "opera";
        iu7n.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(vw2x)) iu7n.version = RegExp.$1 || ""
    }
    if (iu7n.browser == "unknow") {
        var mC8u = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = mC8u.length, W3x; i < l; i++) {
            W3x = mC8u[i] == "safari" ? "version" : mC8u[i];
            if ((new RegExp(W3x + "/(.*?)(?=\\s|$)", "i")).test(vw2x)) {
                iu7n.browser = mC8u[i];
                iu7n.version = RegExp.$1.trim();
                break
            }
        }
    }
    O3x.bJc1x = {};
    var bfr3x = iu7n.engine != "trident";
    O3x.mW8O = {
        gecko: iu7n.engine != "gecko",
        webkit: iu7n.engine != "webkit",
        presto: iu7n.engine != "presto",
        trident0: bfr3x || iu7n.release > "2.0",
        trident1: bfr3x || iu7n.release < "6.0",
        trident2: bfr3x || iu7n.release > "3.0",
        trident: bfr3x || iu7n.release >= "6.0"
    }
})();
(function() {
    var it7m = NEJ.P("nej.c"),
        R3x = {};
    var bxR8J = function() {
        var dg5l = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y3x) {
            Y3x = Y3x || "";
            if (dg5l.test(Y3x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var PT8L = function() {
        var bJj1x = function(i3x, bz4D) {
            if (!i3x || !i3x.length) return;
            for (var i = 0, l = i3x.length, kb7U; i < l; i++) {
                kb7U = i3x[i];
                if (kb7U.indexOf("://") > 0) bz4D[bxR8J(kb7U)] = kb7U
            }
        };
        var bg4k = {
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
        return function(bR4V) {
            it7m.Im6g("root", bR4V.root || "/res/");
            var bxI8A, ga6U = it7m.B3x("root");
            for (var x in bg4k) {
                bxI8A = bg4k[x];
                it7m.Im6g(x, bR4V[bxI8A.name] || ga6U + bxI8A.dft)
            }
            var AO4S = bR4V.p_csrf;
            if (AO4S == !0) {
                AO4S = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            it7m.Im6g("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, AO4S));
            R3x.frames = {};
            bJj1x(bR4V.p_frame, R3x.frames);
            R3x.flashs = {};
            bJj1x(bR4V.p_flash, R3x.flashs)
        }
    }();
    it7m.Im6g = function(K3x, D3x) {
        R3x[K3x] = D3x
    };
    it7m.B3x = function(K3x) {
        return R3x[K3x]
    };
    it7m.bWg6a = function(Y3x) {
        var pP9G = bxR8J(Y3x);
        return R3x.frames[pP9G] || pP9G + "/res/nej_proxy_frame.html"
    };
    it7m.bWk6e = function(Y3x) {
        return R3x.flashs[bxR8J(Y3x)]
    };
    PT8L(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        it7m = c3x("nej.c"),
        bR4V = window.NEJ_CONF || NEJ.O;
    if (O3x.mW8O.trident) return;
    it7m.Im6g("storage.swf", bR4V.storage || it7m.B3x("root") + "nej_storage.swf");
    if (O3x.dr5w.release < "4.0") {
        it7m.Im6g("blank.png", bR4V.blank || it7m.B3x("root") + "nej_blank.gif")
    }
    var i3x = bR4V.xdr,
        gO6I = /^(https?:\/\/.*?)(?=\/|$)/i,
        kf7Y = /[\/?=&]/i;
    var bHb1x = function(Y3x) {
        return (gO6I.test(Y3x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i3x && !!i3x.length)
        for (var i = i3x.length - 1, Y3x, K3x; i >= 0; i--) {
            Y3x = i3x[i];
            K3x = bHb1x(Y3x);
            if (!!K3x) it7m.Im6g(K3x, Y3x)
        }
    it7m.cKu6o = function(Y3x) {
        var K3x = bHb1x(Y3x);
        if (!K3x) {
            if (kf7Y.test(Y3x)) {
                K3x = location.protocol + "//" + location.host
            } else if (Y3x.indexOf("://") < 0) {
                K3x = location.protocol + "//" + Y3x
            } else {
                K3x = Y3x
            }
        }
        return it7m.B3x(K3x) || K3x + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c3x = NEJ.P,
        it7m = c3x("nej.c"),
        O3x = c3x("nej.g"),
        gG6A = +(new Date);
    O3x.cKt6n = 1e4 - gG6A;
    O3x.bxi8a = 10001 - gG6A;
    O3x.cKr6l = 10002 - gG6A;
    O3x.bNN2x = 10003 - gG6A;
    O3x.bWq6k = 10004 - gG6A;
    O3x.cKp6j = 10005 - gG6A;
    O3x.bxd8V = 10006 - gG6A;
    O3x.bWv6p = 10007 - gG6A;
    O3x.ym3x = "Content-Type";
    O3x.cKl6f = "text/plain";
    O3x.HK6E = "multipart/form-data";
    O3x.bWx6r = "application/x-www-form-urlencoded";
    O3x.bwJ8B = it7m.B3x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c3x = NEJ.P,
        fu5z = NEJ.R,
        O3x = c3x("nej.p"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        be4i = c3x("nej.h");
    var ku8m = O3x.dr5w.prefix,
        bKw1x = O3x.bJc1x,
        bWA6u = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        },
        bWE6y = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        },
        PH8z = {
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
    var PT8L = function() {
        var tw0x = be4i.bSO5T();
        bKw1x.css3d = !!tw0x && tw0x.m41 != null;
        var dg5l = /-([a-z])/g;
        for (var x in PH8z) {
            PH8z[bTE5J(x)] = PH8z[x]
        }
    };
    var bTE5J = function() {
        var dg5l = /-([a-z])/g;
        return function(W3x) {
            W3x = W3x || "";
            return W3x.replace(dg5l, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bUm5r = function(W3x) {
        return (!bKw1x.css3d ? bWA6u : bWE6y)[W3x]
    };
    var bzr8j = function() {
        var dg5l = /\s+/;
        return function(fI6C) {
            fI6C = (fI6C || "").trim();
            return !!fI6C ? fI6C.split(dg5l) : null
        }
    }();
    var beU3x = function(F3x, u3x, fI6C) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return;
        k3x.bd4h(bzr8j(fI6C), function(ed5i) {
            F3x.classList[u3x](ed5i)
        })
    };
    be4i.Is6m = function(i3x) {
        return fu5z.slice.call(i3x, 0)
    };
    be4i.bwy8q = function(F3x) {
        return be4i.Is6m(F3x.children)
    };
    be4i.bwv8n = function(F3x, fI6C) {
        return be4i.Is6m(F3x.getElementsByClassName(fI6C))
    };
    be4i.bwu8m = function(F3x, Iu6o) {
        beU3x(F3x, "add", Iu6o)
    };
    be4i.bwl8d = function(F3x, Iy6s) {
        beU3x(F3x, "remove", Iy6s)
    };
    be4i.QR8J = function(F3x, Iy6s, Iu6o) {
        beU3x(F3x, "remove", Iy6s);
        beU3x(F3x, "add", Iu6o)
    };
    be4i.bwe8W = function(F3x, fI6C) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return !1;
        var i3x = F3x.classList;
        if (!i3x || !i3x.length) return !1;
        return k3x.dl5q(bzr8j(fI6C), function(ed5i) {
            return i3x.contains(ed5i)
        }) >= 0
    };
    be4i.bwd8V = function(F3x, ed5i) {};
    be4i.bvZ8R = function(F3x) {};
    be4i.bvY8Q = function(gf6Z, ou9l) {
        gf6Z.selectionEnd = ou9l.end || 0;
        gf6Z.selectionStart = ou9l.start || 0;
        gf6Z.focus()
    };
    be4i.bvX8P = function(gf6Z) {
        return {
            end: gf6Z.selectionEnd,
            start: gf6Z.selectionStart
        }
    };
    be4i.bvW8O = function() {
        var Gx5C = function(ed5i, d3x) {
            var F3x = h3x.X3x(d3x);
            if (!F3x.value) a2x.x3x(F3x, ed5i)
        };
        var Iz6t = function(ed5i, d3x) {
            a2x.y3x(h3x.X3x(d3x), ed5i)
        };
        return function(F3x, fn5s, ed5i) {
            if (fn5s == 1) {
                h3x.s3x(F3x, "blur", Gx5C.f3x(null, ed5i))
            }
            if (fn5s == 1 || fn5s == -1) {
                h3x.s3x(F3x, "focus", Iz6t.f3x(null, ed5i))
            }
        }
    }();
    be4i.bvQ8I = function(G3x) {
        return (new XMLSerializer).serializeToString(G3x) || ""
    };
    be4i.bvP7I = function(Bw4A) {
        var ga6U = (new DOMParser).parseFromString(Bw4A, "text/xml").documentElement;
        return ga6U.nodeName == "parsererror" ? null : ga6U
    };
    be4i.bvJ7C = function(F3x) {};
    be4i.nK9B = function(F3x) {
        return null
    };
    be4i.bvG7z = function(F3x) {
        return null
    };
    be4i.bvD7w = function(dR5W) {};
    be4i.bvA7t = function() {
        var bf4j = be4i.Is6m(arguments);
        bf4j[0] = a2x.B3x(bf4j[0]);
        if (!bf4j[0]) return null;
        bf4j[1] = (bf4j[1] || "").toLowerCase();
        if (!bf4j[1]) return null;
        return bf4j
    };
    be4i.AN4R = function() {
        var xv3x = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            },
            jp7i = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bWF6z = function(u3x) {
            return (ku8m.evt || ku8m.pro) + u3x
        };
        return function() {
            var bf4j = be4i.bvA7t.apply(be4i, arguments);
            if (!bf4j) return;
            var beD3x = jp7i[bf4j[1]],
                beC3x = xv3x[bf4j[1]];
            if (!!beD3x) {
                bf4j[4] = bf4j[1];
                bf4j[1] = bWF6z(beD3x)
            } else if (!!beC3x) {
                var W3x = "on" + bf4j[1];
                if (!(W3x in bf4j[0])) {
                    bf4j[4] = bf4j[1];
                    bf4j[1] = beC3x
                }
            }
            return bf4j
        }
    }();
    be4i.buU7N = function() {
        var bf4j = arguments;
        bf4j[0].addEventListener(bf4j[1], bf4j[2], !!bf4j[3])
    };
    be4i.bey3x = function() {
        var bf4j = arguments;
        bf4j[0].removeEventListener(bf4j[1], bf4j[2], !!bf4j[3])
    };
    be4i.buH7A = function(F3x, u3x, e3x) {
        var d3x = document.createEvent("Event");
        d3x.initEvent(u3x, !0, !0);
        NEJ.X(d3x, e3x);
        F3x.dispatchEvent(d3x)
    };
    be4i.bSO5T = function() {
        var gO6I = /\((.*?)\)/,
            kf7Y = /\s*,\s*/,
            i3x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var bew3x = function(tw0x) {
            var is7l = {};
            if (gO6I.test(tw0x || "")) {
                k3x.bd4h(RegExp.$1.split(kf7Y), function(D3x, r3x) {
                    is7l[i3x[r3x]] = D3x || ""
                })
            }
            return is7l
        };
        return function(tw0x) {
            if (!!window.CSSMatrix) return new CSSMatrix(tw0x);
            var W3x = ku8m.clz + "CSSMatrix";
            if (!!window[W3x]) return new window[W3x](tw0x || "");
            return bew3x(tw0x)
        }
    }();
    be4i.bEd0x = function() {
        var dg5l = /\{(.*?)\}/g;
        return function(W3x, bz4D) {
            bz4D = bz4D || o;
            var pc9T = bUm5r(W3x);
            return !pc9T ? "" : pc9T.replace(dg5l, function($1, $2) {
                var bs4w = $2.split("|");
                return bz4D[bs4w[0]] || bs4w[1] || "0"
            })
        }
    }();
    be4i.buA7t = function(F3x, W3x, D3x) {
        F3x.style[be4i.bFW0x(W3x)] = D3x
    };
    be4i.bFW0x = function() {
        var dg5l = /^[a-z]/,
            buw7p = ku8m.css;
        var bWG6A = function(W3x) {
            return W3x.replace(dg5l, function($1) {
                return buw7p + $1.toUpperCase()
            })
        };
        return function(W3x) {
            W3x = bTE5J(W3x);
            var bWN6H = be4i.bWQ6K(W3x, PH8z);
            return bWN6H ? bWG6A(W3x) : W3x
        }
    }();
    be4i.bWQ6K = function() {
        var dg5l = /^([a-z]+?)[A-Z]/;
        return function(W3x, bz4D) {
            if (!bz4D[W3x]) {
                if (dg5l.test(W3x)) W3x = RegExp.$1
            }
            return !!bz4D[W3x]
        }
    }();
    be4i.bWT6N = function() {
        var dg5l = /\$<(.*?)>/gi,
            buw7p = "-" + ku8m.css.toLowerCase() + "-";
        return function(kt8l) {
            return kt8l.replace(dg5l, function($1, $2) {
                var fv5A = $2,
                    bs4w = fv5A.split("|"),
                    pc9T = bUm5r(bs4w[0]);
                if (!!pc9T) {
                    return be4i.bEd0x(bs4w[0], k3x.hu6o(bs4w[1]))
                }
                return !be4i.bWZ6T(fv5A, PH8z) ? fv5A : buw7p + fv5A
            })
        }
    }();
    be4i.bWZ6T = function(W3x, bz4D) {
        return !!bz4D[W3x]
    };
    be4i.bun7g = function(cj4n, kt8l) {
        cj4n.textContent = kt8l
    };
    be4i.bum7f = function(cj4n, kt8l) {
        var yW3x = cj4n.sheet,
            bq4u = yW3x.cssRules.length;
        yW3x.insertRule(kt8l, bq4u);
        return yW3x.cssRules[bq4u]
    };
    be4i.cJY6S = function(F3x, e3x) {};
    be4i.beq3x = function(beo3x) {
        return (beo3x || "").toLowerCase() != "transparent"
    };
    be4i.bXd6X = function(F3x) {};
    be4i.bug7Z = function(F3x, W3x) {
        if (!!F3x.getAttribute) return F3x.getAttribute(W3x);
        return ""
    };
    be4i.bem3x = function(eM5R) {
        a2x.cM4Q(eM5R)
    };
    PT8L()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        O3x = c3x("nej.p"),
        be4i = c3x("nej.h");
    if (O3x.mW8O.trident0) return;
    var gG6A = +(new Date);
    R3x = {};
    be4i.bwd8V = be4i.bwd8V.eH5M(function(d3x) {
        d3x.stopped = !0;
        var bf4j = d3x.args,
            C3x = a2x.lQ8I(bf4j[0]),
            K3x = "hover-" + C3x;
        if (!C3x || !!R3x[K3x]) return;
        R3x[K3x] = !0;
        h3x.s3x(C3x, "mouseenter", a2x.y3x.f3x(a2x, C3x, bf4j[1]));
        h3x.s3x(C3x, "mouseleave", a2x.x3x.f3x(a2x, C3x, bf4j[1]))
    });
    be4i.bvZ8R = function() {
        var cJW6Q = function() {};
        return be4i.bvZ8R.eH5M(function(d3x) {
            d3x.stopped = !0;
            var F3x = d3x.args[0],
                C3x = "fixed-" + a2x.lQ8I(F3x);
            if (!!R3x[C3x]) return;
            var bg4k = {};
            R3x[C3x] = bg4k
        })
    }();
    be4i.bvJ7C = be4i.bvJ7C.eH5M(function(d3x) {
        d3x.stopped = !0;
        var F3x = d3x.args[0],
            cj4n = F3x.style,
            bCm9d = a2x.pn9e();
        cj4n.width = bCm9d.scrollWidth + "px";
        cj4n.height = bCm9d.scrollHeight + "px"
    });
    be4i.nK9B = be4i.nK9B.eH5M(function(d3x) {
        d3x.stopped = !0;
        var F3x = d3x.args[0],
            lk8c = R3x[F3x.msk];
        if (!lk8c) {
            F3x.msk = gG6A++;
            lk8c = a2x.di5n("iframe");
            lk8c.style.position = "absolute";
            R3x[F3x.msk] = lk8c
        }
        d3x.value = lk8c;
        var cj4n = lk8c.style;
        cj4n.top = (parseInt(a2x.df5k(F3x, "top")) || 0) + "px";
        cj4n.left = (parseInt(a2x.df5k(F3x, "left")) || 0) + "px";
        cj4n.width = F3x.offsetWidth + "px";
        cj4n.height = F3x.offsetHeight + "px";
        F3x.insertAdjacentElement("beforeBegin", lk8c)
    });
    be4i.bvG7z = be4i.bvG7z.eH5M(function(d3x) {
        d3x.stopped = !0;
        var lk8c = R3x[d3x.args[0].msk];
        if (!!lk8c) a2x.mR8J(lk8c)
    })
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        a2x = c3x("nej.e"),
        be4i = c3x("nej.h");
    if (O3x.mW8O.trident1) return;
    be4i.AN4R = function() {
        var xv3x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return be4i.AN4R.eH5M(function(d3x) {
            var bf4j = be4i.bvA7t.apply(be4i, d3x.args);
            if (!bf4j) {
                d3x.stopped = !0;
                return
            }
            var u3x = xv3x[bf4j[1]];
            if (!!u3x && ("on" + u3x).toLowerCase() in bf4j[0]) {
                bf4j[4] = bf4j[1];
                bf4j[1] = u3x;
                d3x.stopped = !0;
                d3x.value = bf4j
            }
        })
    }();
    be4i.beq3x = function(beo3x) {
        return !0
    };
    be4i.bem3x = be4i.bem3x.eH5M(function(d3x) {
        d3x.stopped = !0;
        var eM5R = d3x.args[0];
        a2x.ba3x(eM5R, "display", "none");
        try {
            eM5R.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        O3x = c3x("nej.p"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        be4i = c3x("nej.h"),
        buc7V = {};
    if (O3x.mW8O.trident) return;
    be4i.Is6m = be4i.Is6m.eH5M(function(d3x) {
        d3x.stopped = !0;
        var i3x = d3x.args[0];
        if (!i3x) {
            d3x.value = null;
            return
        }
        var r3x = 0,
            m3x = [];
        while (!!i3x[r3x]) {
            m3x.push(i3x[r3x++])
        }
        d3x.value = m3x
    });
    be4i.bwy8q = be4i.bwy8q.eH5M(function(d3x) {
        d3x.stopped = !0;
        var bs4w = [];
        k3x.bd4h(d3x.args[0].childNodes, function(g3x) {
            if (g3x.nodeType == 1) bs4w.push(g3x)
        });
        d3x.value = bs4w
    });
    be4i.bwv8n = be4i.bwv8n.eH5M(function(d3x) {
        var F3x = d3x.args[0];
        if (!!F3x.getElementsByClassName) return;
        d3x.stopped = !0;
        var m3x = [],
            NG7z = new RegExp("(\\s|^)(?:" + d3x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k3x.bd4h(F3x.getElementsByTagName("*"), function(g3x) {
            if (NG7z.test(g3x.className)) m3x.push(g3x)
        });
        d3x.value = m3x
    });
    be4i.bvY8Q = be4i.bvY8Q.eH5M(function(d3x) {
        var gf6Z = d3x.args[0],
            ou9l = d3x.args[1];
        if (gf6Z.selectionStart == null) {
            d3x.stopped = !0;
            var de5j = gf6Z.createTextRange();
            de5j.collapse(!0);
            de5j.moveStart("character", ou9l.start);
            de5j.moveEnd("character", ou9l.end - ou9l.start);
            de5j.select();
            gf6Z.focus()
        }
    });
    be4i.bvX8P = be4i.bvX8P.eH5M(function(d3x) {
        var gf6Z = d3x.args[0];
        gf6Z.focus();
        if (gf6Z.selectionStart == null) {
            d3x.stopped = !0;
            var bEW0x = document.selection.createRange();
            var bJU1x = gf6Z.createTextRange();
            bJU1x.moveToBookmark(bEW0x.getBookmark());
            var btX7Q = gf6Z.createTextRange();
            btX7Q.collapse(!0);
            btX7Q.setEndPoint("EndToStart", bJU1x);
            var hv6p = btX7Q.text.length;
            d3x.value = {
                start: hv6p,
                end: hv6p + bEW0x.text.length
            }
        }
    });
    be4i.bvQ8I = be4i.bvQ8I.eH5M(function(d3x) {
        if (!!window.XMLSerializer) return;
        d3x.stopped = !0;
        var F3x = d3x.args[0];
        d3x.value = F3x.xml != null ? F3x.xml : F3x.outHTML
    });
    be4i.bvP7I = function() {
        var NK7D = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bXe6Y = function() {
            try {
                for (var i = 0, l = NK7D.length; i < l; i++) return new ActiveXObject(NK7D[i])
            } catch (ex) {
                return null
            }
        };
        return be4i.bvP7I.eH5M(function(d3x) {
            if (!!window.DOMParser) return;
            d3x.stopped = !0;
            var nL9C = bXe6Y();
            if (!!nL9C && nL9C.loadXML(d3x.args[0]) && !nL9C.parseError.errorCode) d3x.value = nL9C.documentElement
        })
    }();
    be4i.AN4R = function() {
        var jp7i = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in jp7i) buc7V[jp7i[x]] = !0;
        var bXK6E = function(F3x, u3x) {
            if ("on" + u3x in F3x) return null;
            return jp7i[u3x] || ""
        };
        var bYc6W = function(u3x, dv5A) {
            var cA4E = dv5A;
            switch (u3x) {
                case "readystatechange":
                    cA4E = function(d3x) {
                        var F3x = h3x.X3x(d3x) || this;
                        if (F3x.readyState == "loaded" || F3x.readyState == "complete") {
                            d3x.target = F3x;
                            dv5A.call(F3x, d3x)
                        }
                    };
                    break;
                case "propertychange":
                    cA4E = function(d3x) {
                        var F3x = h3x.X3x(d3x) || this;
                        if ("value" in F3x && d3x.propertyName == "value") {
                            d3x.target = F3x;
                            dv5A.call(F3x, d3x)
                        }
                    };
                    break
            }
            return cA4E
        };
        return be4i.AN4R.eH5M(function(d3x) {
            var bf4j = be4i.bvA7t.apply(be4i, d3x.args);
            if (!bf4j) {
                d3x.stopped = !0;
                return
            }
            var u3x = bXK6E(bf4j[0], bf4j[1]);
            if (!!u3x) {
                d3x.stopped = !0;
                bf4j[4] = bf4j[1];
                bf4j[1] = u3x;
                if (!!bf4j[2]) {
                    bf4j[5] = bf4j[2];
                    bf4j[2] = bYc6W(bf4j[1], bf4j[2])
                }
                d3x.value = bf4j
            }
        }, function(d3x) {
            var bf4j = d3x.value;
            if (!bf4j[0] || !k3x.gE6y(bf4j[2])) return;
            if (!k3x.gE6y(bf4j[5])) bf4j[5] = bf4j[2];
            bf4j[2] = bf4j[2].f3x(bf4j[0])
        })
    }();
    be4i.buU7N = be4i.buU7N.eH5M(function(d3x) {
        var bf4j = d3x.args;
        if (!!buc7V[bf4j[1]] || !document.addEventListener) {
            d3x.stopped = !0;
            bf4j[0].attachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.bey3x = be4i.bey3x.eH5M(function(d3x) {
        var bf4j = d3x.args;
        if (!!buc7V[bf4j[1]] || !document.removeEventListener) {
            d3x.stopped = !0;
            bf4j[0].detachEvent("on" + bf4j[1], bf4j[2])
        }
    });
    be4i.buH7A = be4i.buH7A.eH5M(function(d3x) {
        if (!document.createEvent) {
            d3x.stopped = !0;
            var bf4j = d3x.args,
                bPG3x = document.createEventObject();
            NEJ.X(bPG3x, bf4j[2]);
            try {
                bf4j[0].fireEvent("on" + bf4j[1], bPG3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    be4i.buA7t = be4i.buA7t.eH5M(function(d3x) {
        var bf4j = d3x.args,
            W3x = bf4j[1].toLowerCase();
        if (W3x == "opacity" && !(W3x in document.body.style)) {
            bf4j[1] = "filter";
            bf4j[2] = "alpha(opacity=" + bf4j[2] * 100 + ")"
        }
    });
    be4i.bun7g = function() {
        var fq5v = 30;
        return be4i.bun7g.eH5M(function(d3x) {
            var F3x = d3x.args[0];
            if (!F3x.styleSheet) return;
            d3x.stopped = !0;
            var kt8l = d3x.args[1];
            var i3x = document.styleSheets;
            if (i3x.length > fq5v) {
                F3x = i3x[fq5v];
                kt8l = F3x.cssText + kt8l
            } else {
                F3x = F3x.styleSheet
            }
            F3x.cssText = kt8l
        })
    }();
    be4i.bum7f = be4i.bum7f.eH5M(function(d3x) {
        var bf4j = d3x.args,
            yW3x = bf4j[0].sheet;
        if (!!yW3x) return;
        d3x.stopped = !0;
        var yW3x = bf4j[0].styleSheet,
            bq4u = yW3x.rules.length,
            bs4w = bf4j[1].split(/[\{\}]/);
        yW3x.addRule(bs4w[0], bs4w[1], bq4u);
        d3x.value = yW3x.rules[bq4u]
    });
    be4i.bvW8O = function() {
        var Gx5C = function(ed5i, d3x) {
            a2x.x3x(h3x.X3x(d3x), ed5i)
        };
        return be4i.bvW8O.eH5M(function(d3x) {
            if (O3x.dr5w.release >= "4.0") return;
            var bf4j = d3x.args;
            if (bf4j[1] != 1) {
                h3x.s3x(bf4j[0], "blur", Gx5C.f3x(null, bf4j[2]));
                bf4j[1] = -1
            }
        })
    }();
    be4i.beq3x = function(beo3x) {
        return !0
    };
    be4i.bug7Z = be4i.bug7Z.eH5M(function(d3x) {
        var bf4j = d3x.args,
            g3x = (bf4j[0].attributes || bb3x)[bf4j[1]];
        if (!!g3x) {
            d3x.stopped = !0;
            d3x.value = g3x.value
        }
    }, function(d3x) {
        var bf4j = d3x.args;
        if (bf4j[1] == "maxlength" && d3x.value == 2147483647) d3x.value = ""
    });
    if (O3x.dr5w.release < 5) {
        be4i.bvD7w = function() {
            var eh5m, eM5R, kz8r = [],
                btU7N = "cb-" + +(new Date),
                bo4s = '<script>parent.nej.h["' + btU7N + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bzx8p = function() {
                eh5m = window.clearTimeout(eh5m);
                if (!kz8r.length) return;
                var dR5W = kz8r.shift();
                try {
                    var ws2x = eM5R.contentWindow.document;
                    ws2x.open();
                    ws2x.write("<head><title>");
                    ws2x.write(document.title);
                    ws2x.write("</title>");
                    ws2x.write(bo4s.replace("#<HASH>", encodeURIComponent(dR5W)));
                    ws2x.write("</head><body></body>");
                    if (location.hostname != document.domain) ws2x.domain = document.domain;
                    ws2x.close();
                    be4i[btU7N] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    kz8r.unshift(dR5W)
                }
                eh5m = window.setTimeout(bzx8p, 50)
            };
            return be4i.bvD7w.eH5M(function(d3x) {
                d3x.stopped = !0;
                var dR5W = d3x.args[0];
                if (!!be4i[btU7N] || !eM5R && !dR5W) return;
                kz8r.push(dR5W);
                if (!eM5R) eM5R = a2x.beh3x();
                bzx8p()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
})();
(function() {
    var c3x = NEJ.P,
        h3x = c3x("nej.v"),
        be4i = c3x("nej.h"),
        O3x = c3x("nej.p"),
        beg3x = O3x.bJc1x;
    if (O3x.mW8O.gecko) return;
    var PT8L = function() {
        beg3x.css3d = beg3x.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(je7X, F3x) {
            if (!je7X || !F3x) return;
            switch (je7X) {
                case "beforeEnd":
                    this.appendChild(F3x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F3x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F3x) : this.insertBefore(F3x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F3x) : this.parentNode.insertBefore(F3x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bo4s) {
                this.textContent = bo4s
            })
        }
    };
    be4i.AN4R = function() {
        var gO6I = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return be4i.AN4R.eH5M(function(d3x) {
            var bf4j = d3x.args;
            if (gO6I.test(bf4j[1] || "")) {
                d3x.stopped = !0;
                d3x.value = bf4j
            }
        })
    }();
    be4i.bXd6X = function() {
        var bYj6d = function(d3x) {
            h3x.bh4l(d3x);
            h3x.X3x(d3x).control.click()
        };
        return function(F3x) {
            h3x.s3x(F3x, "click", bYj6d)
        }
    }();
    PT8L()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        be4i = c3x("nej.h");
    var bee3x = function() {
        var mC8u = !!document.body.classList;
        return function() {
            return mC8u
        }
    }();
    var bCZ9Q = function() {
        var dg5l = /\s+/g;
        return function(fI6C) {
            fI6C = (fI6C || "").trim();
            return !fI6C ? null : new RegExp("(\\s|^)(?:" + fI6C.replace(dg5l, "|") + ")(?=\\s|$)", "g")
        }
    }();
    be4i.QR8J = be4i.QR8J.eH5M(function(d3x) {
        if (bee3x()) return;
        d3x.stopped = !0;
        var bf4j = d3x.args,
            F3x = a2x.B3x(bf4j[0]);
        if (!F3x || !bf4j[1] && !bf4j[2]) return;
        var fI6C = F3x.className || "";
        var Iu6o = " " + (bf4j[2] || ""),
            Iy6s = bCZ9Q((bf4j[1] || "") + Iu6o);
        !!Iy6s && (fI6C = fI6C.replace(Iy6s, "$1"));
        F3x.className = (fI6C + Iu6o).replace(/\s+/g, " ").trim()
    });
    be4i.bwu8m = be4i.bwu8m.eH5M(function(d3x) {
        if (bee3x()) return;
        d3x.stopped = !0;
        var bf4j = d3x.args;
        be4i.QR8J(bf4j[0], "", bf4j[1])
    });
    be4i.bwl8d = be4i.bwl8d.eH5M(function(d3x) {
        if (bee3x()) return;
        d3x.stopped = !0;
        var bf4j = d3x.args;
        be4i.QR8J(bf4j[0], bf4j[1], "")
    });
    be4i.bwe8W = be4i.bwe8W.eH5M(function(d3x) {
        if (bee3x()) return;
        d3x.stopped = !0;
        var bf4j = d3x.args,
            F3x = a2x.B3x(bf4j[0]);
        if (!F3x) {
            d3x.value = !1;
            return
        }
        var dg5l = bCZ9Q(bf4j[1]);
        d3x.value = !dg5l ? !1 : dg5l.test(F3x.className || "")
    })
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        be4i = c3x("nej.h");
    if (O3x.mW8O.webkit) return;
    be4i.beq3x = function(beo3x) {
        return !0
    }
})();
(function() {
    var c3x = NEJ.P,
        be4i = c3x("nej.h"),
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        db5g = c3x("nej.x"),
        R3x = {};
    var bEo0x = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x || !R3x[F3x.id]) return;
        var bec3x = !0,
            C3x = F3x.id;
        k3x.eI5N(R3x[C3x], function() {
            bec3x = !1;
            return !0
        });
        if (bec3x) delete R3x[C3x]
    };
    h3x.s3x = db5g.s3x = function() {
        var bYq6k = function() {
            var bf4j = be4i.AN4R.apply(be4i, arguments);
            if (!bf4j || !bf4j[2]) return;
            var ur1x = a2x.lQ8I(bf4j[0]),
                pi9Z = R3x[ur1x] || {};
            R3x[ur1x] = pi9Z;
            ur1x = bf4j[4] || bf4j[1];
            var Do4s = pi9Z[ur1x] || [];
            pi9Z[ur1x] = Do4s;
            Do4s.push({
                type: bf4j[1],
                func: bf4j[2],
                capt: !!bf4j[3],
                sfun: bf4j[5] || bf4j[2]
            });
            return bf4j.slice(0, 4)
        };
        return function() {
            var bf4j = bYq6k.apply(null, arguments);
            if (!!bf4j) be4i.buU7N.apply(be4i, bf4j);
            return this
        }
    }();
    h3x.ms8k = db5g.ms8k = function() {
        var bZf6Z = function() {
            var tJ0x = arguments,
                ur1x = a2x.lQ8I(tJ0x[0]),
                pi9Z = R3x[ur1x],
                u3x = (tJ0x[1] || "").toLowerCase(),
                d3x = tJ0x[2];
            if (!pi9Z || !u3x || !d3x) return;
            pi9Z = pi9Z[u3x];
            if (!pi9Z) return;
            var bZi6c = !!tJ0x[3],
                r3x = k3x.dl5q(pi9Z, function(jp7i) {
                    return d3x == jp7i.sfun && bZi6c == jp7i.capt
                });
            if (r3x < 0) return;
            var jp7i = pi9Z.splice(r3x, 1)[0];
            return !jp7i ? null : [a2x.B3x(ur1x), jp7i.type, jp7i.func, jp7i.capt]
        };
        return function() {
            var bf4j = bZf6Z.apply(null, arguments);
            if (!!bf4j) {
                be4i.bey3x.apply(be4i, bf4j);
                bEo0x(bf4j[0])
            }
            return this
        }
    }();
    h3x.hj6d = db5g.hj6d = function() {
        var bIX1x = function() {
            var tJ0x = arguments,
                ur1x = a2x.lQ8I(tJ0x[0]),
                pi9Z = R3x[ur1x],
                Do4s = (tJ0x[1] || "").toLowerCase();
            if (!pi9Z || !Do4s) return;
            var F3x = a2x.B3x(ur1x);
            k3x.mY8Q(pi9Z[Do4s], function(jp7i, r3x, i3x) {
                be4i.bey3x(F3x, jp7i.type, jp7i.func, jp7i.capt);
                i3x.splice(r3x, 1)
            });
            delete pi9Z[Do4s]
        };
        var bZj6d = function(F3x) {
            F3x = a2x.B3x(F3x);
            if (!F3x) return;
            var C3x = F3x.id;
            k3x.eI5N(R3x[C3x], function(i3x, u3x) {
                bIX1x(C3x, u3x)
            });
            delete R3x[C3x]
        };
        return function(F3x, u3x) {
            !u3x ? bZj6d(F3x) : bIX1x(F3x, u3x);
            bEo0x(F3x);
            return this
        }
    }();
    h3x.X3x = function() {
        var btA7t;
        var IK6E = function(W3x, F3x) {
            var bs4w = W3x.split(":");
            if (bs4w.length > 1) {
                if (!btA7t) btA7t = {
                    c: a2x.bE4I,
                    d: a2x.t3x,
                    a: a2x.gH6B
                };
                var IL6F = btA7t[bs4w[0]];
                if (!!IL6F) return !!IL6F(F3x, bs4w[1]);
                W3x = bs4w[1]
            }
            return !!a2x.gH6B(F3x, W3x) || !!a2x.t3x(F3x, W3x) || a2x.bE4I(F3x, W3x)
        };
        return function(d3x) {
            if (!d3x) return null;
            var F3x = d3x.target || d3x.srcElement,
                dZ5e = arguments[1];
            if (!dZ5e) return F3x;
            if (k3x.fB5G(dZ5e)) dZ5e = IK6E.f3x(null, dZ5e);
            if (k3x.gE6y(dZ5e)) {
                while (F3x) {
                    if (!!dZ5e(F3x)) return F3x;
                    F3x = F3x.parentNode
                }
                return null
            }
            return F3x
        }
    }();
    h3x.bh4l = function(d3x) {
        h3x.uj1x(d3x);
        h3x.cn4r(d3x);
        return this
    };
    h3x.uj1x = function(d3x) {
        if (!!d3x) {
            !!d3x.stopPropagation ? d3x.stopPropagation() : d3x.cancelBubble = !0
        }
        return this
    };
    h3x.cn4r = function(d3x) {
        if (!!d3x) {
            !!d3x.preventDefault ? d3x.preventDefault() : d3x.returnValue = !1
        }
        return this
    };
    h3x.cJM6G = function() {
        var rb0x = !1;
        var bZn6h = function() {
            if (rb0x) return;
            rb0x = !0;
            h3x.s3x(document, "click", bZB7u, !0)
        };
        var bZB7u = function(d3x) {
            var F3x = h3x.X3x(d3x),
                bZO7H = a2x.t3x(F3x, "stopped");
            if (bZO7H == "true") {
                h3x.bh4l(d3x);
                a2x.t3x(F3x, "stopped", "false")
            }
        };
        return function(d3x) {
            if (!d3x) return;
            if (d3x.type == "click") {
                h3x.bh4l(d3x);
                return
            }
            bZn6h();
            a2x.t3x(h3x.X3x(d3x), "stopped", "true")
        }
    }();
    h3x.jD7w = function(d3x) {
        return d3x.pageX != null ? d3x.pageX : d3x.clientX + a2x.pn9e().scrollLeft
    };
    h3x.lX8P = function(d3x) {
        return d3x.pageY != null ? d3x.pageY : d3x.clientY + a2x.pn9e().scrollTop
    };
    h3x.z3x = db5g.z3x = function(F3x, u3x, e3x) {
        var bf4j = be4i.AN4R(F3x, u3x);
        if (!!bf4j) be4i.buH7A(bf4j[0], bf4j[1], e3x);
        return this
    };
    c3x("dbg").dumpEV = function() {
        return R3x
    };
    db5g.isChange = !0
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
    var c3x = NEJ.P,
        O3x = c3x("nej.p");
    if (O3x.mW8O.trident0) return;
    JSON.parse = JSON.parse.eH5M(function(d3x) {
        var cN4R = d3x.args[0] || "";
        if (cN4R.length >= 5e5) {
            d3x.stopped = !0;
            d3x.value = eval("(" + cN4R + ")")
        }
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        en5s = c3x("nej.g"),
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        be4i = c3x("nej.h"),
        db5g = c3x("nej.x"),
        IN6H, btq7j = {},
        R3x = document.createDocumentFragment();
    a2x.lQ8I = db5g.lQ8I = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return;
        var C3x = !!F3x.id ? F3x.id : "auto-id-" + k3x.OK8C(16);
        F3x.id = C3x;
        if (a2x.B3x(C3x) != F3x) btq7j[C3x] = F3x;
        return C3x
    };
    a2x.B3x = db5g.B3x = function(F3x) {
        var g3x = btq7j["" + F3x];
        if (!!g3x) return g3x;
        if (!k3x.fB5G(F3x) && !k3x.td0x(F3x)) return F3x;
        return document.getElementById(F3x)
    };
    a2x.dm5r = db5g.dm5r = function(F3x, ed5i) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return null;
        var i3x = be4i.bwy8q(F3x);
        if (!!ed5i) k3x.mY8Q(i3x, function(g3x, r3x) {
            if (!a2x.bE4I(g3x, ed5i)) i3x.splice(r3x, 1)
        });
        return i3x
    };
    a2x.H3x = db5g.H3x = function(F3x, fI6C) {
        F3x = a2x.B3x(F3x);
        return !F3x ? null : be4i.bwv8n(F3x, fI6C.trim())
    };
    a2x.bDj9a = db5g.bDj9a = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!!F3x) {
            F3x = F3x.parentNode;
            while (!!F3x) {
                if (F3x.scrollHeight > F3x.clientHeight) break;
                F3x = F3x.parentNode
            }
            if (!!F3x) return F3x
        }
        var pi9Z = document.body.scrollHeight,
            Do4s = document.documentElement.scrollHeight;
        return Do4s >= pi9Z ? document.documentElement : document.body
    };
    a2x.pn9e = function() {
        var bDC0x = function(i3x) {
            var m3x = 0;
            k3x.bd4h(i3x, function(eG5L) {
                if (!eG5L) return;
                if (!m3x) {
                    m3x = eG5L
                } else {
                    m3x = Math.min(m3x, eG5L)
                }
            });
            return m3x
        };
        return function(ws2x) {
            var IO6I = ws2x || document,
                CM4Q = IO6I.body,
                CJ4N = IO6I.documentElement,
                m3x = {
                    scrollTop: Math.max(CM4Q.scrollTop, CJ4N.scrollTop),
                    scrollLeft: Math.max(CM4Q.scrollLeft, CJ4N.scrollLeft),
                    clientWidth: bDC0x([CM4Q.clientWidth, CM4Q.offsetWidth, CJ4N.clientWidth, CJ4N.offsetWidth]),
                    clientHeight: bDC0x([CM4Q.clientHeight, CM4Q.offsetHeight, CJ4N.clientHeight, CJ4N.offsetHeight])
                };
            m3x.scrollWidth = Math.max(m3x.clientWidth, CM4Q.scrollWidth, CJ4N.scrollWidth);
            m3x.scrollHeight = Math.max(m3x.clientHeight, CM4Q.scrollHeight, CJ4N.scrollHeight);
            return m3x
        }
    }();
    a2x.cJG6A = function(fq5v, ox9o) {
        var m3x = NEJ.X({}, ox9o),
            bFO0x = fq5v.width / fq5v.height,
            bdS3x = ox9o.width / ox9o.height;
        if (bFO0x > bdS3x && ox9o.height > fq5v.height) {
            m3x.height = fq5v.height;
            m3x.width = m3x.height * bdS3x
        }
        if (bFO0x < bdS3x && ox9o.width > fq5v.width) {
            m3x.width = fq5v.width;
            m3x.height = m3x.width / bdS3x
        }
        return m3x
    };
    a2x.cJF6z = function() {
        var dg5l = /\s+/;
        var uA1x = {
            left: function() {
                return 0
            },
            center: function(hD6x, ox9o) {
                return (hD6x.width - ox9o.width) / 2
            },
            right: function(hD6x, ox9o) {
                return hD6x.width - ox9o.width
            },
            top: function() {
                return 0
            },
            middle: function(hD6x, ox9o) {
                return (hD6x.height - ox9o.height) / 2
            },
            bottom: function(hD6x, ox9o) {
                return hD6x.height - ox9o.height
            }
        };
        return function(hD6x, ox9o, oo9f) {
            var m3x = {},
                bs4w = (oo9f || "").split(dg5l),
                gy6s = uA1x[bs4w[1]] || uA1x.middle,
                gZ6T = uA1x[bs4w[0]] || uA1x.center;
            m3x.top = gy6s(hD6x, ox9o);
            m3x.left = gZ6T(hD6x, ox9o);
            return m3x
        }
    }();
    a2x.tu0x = db5g.tu0x = function(F3x, ed5i) {
        be4i.bwd8V(F3x, ed5i || a2x.t3x(F3x, "hover") || "js-hover");
        return this
    };
    a2x.IR6L = db5g.IR6L = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return;
        be4i.bvZ8R(F3x)
    };
    a2x.cai7b = db5g.cai7b = function() {
        var R3x = {},
            bJE1x = 2;
        var caF7y = function(C3x, ed5i, d3x) {
            R3x[C3x] = [h3x.jD7w(d3x), h3x.lX8P(d3x)];
            a2x.y3x(C3x, ed5i)
        };
        var caR7K = function(C3x, ed5i, d3x) {
            var bM4Q = R3x[C3x];
            if (!k3x.eJ5O(bM4Q)) return;
            var cbr7k = Math.abs(h3x.jD7w(d3x) - bM4Q[0]),
                cbG7z = Math.abs(h3x.lX8P(d3x) - bM4Q[1]);
            if (cbr7k > bJE1x || cbG7z > bJE1x) bsR7K(C3x, ed5i)
        };
        var bsR7K = function(C3x, ed5i) {
            if (k3x.eJ5O(R3x[C3x])) {
                R3x[C3x] = -1;
                a2x.x3x(C3x, ed5i)
            }
        };
        return function(F3x, ed5i) {
            var C3x = a2x.lQ8I(F3x);
            if (!C3x || R3x[C3x] != null) return;
            R3x[C3x] = -1;
            ed5i = ed5i || a2x.t3x(C3x, "highlight") || "js-highlight";
            h3x.s3x(C3x, "touchstart", caF7y.f3x(null, C3x, ed5i));
            h3x.s3x(document, "touchmove", caR7K.f3x(null, C3x, ed5i));
            h3x.s3x(document, "touchend", bsR7K.f3x(null, C3x, ed5i));
            h3x.s3x(document, "touchcancel", bsR7K.f3x(null, C3x, ed5i))
        }
    }();
    a2x.Ct4x = db5g.Ct4x = function() {
        var cbI7B = function(C3x, ed5i, cbY7R) {
            var F3x = a2x.B3x(C3x),
                d3x = {
                    clazz: ed5i,
                    target: F3x
                };
            if (a2x.bE4I(F3x, ed5i)) {
                d3x.toggled = !1;
                a2x.x3x(F3x, ed5i)
            } else {
                d3x.toggled = !0;
                a2x.y3x(F3x, ed5i)
            }
            cbY7R.call(null, d3x)
        };
        return function(F3x, e3x) {
            F3x = a2x.B3x(F3x);
            if (!!F3x) {
                var is7l = {
                    ontoggle: br4v,
                    clazz: "js-toggle",
                    element: F3x.parentNode
                };
                if (k3x.fB5G(e3x)) {
                    var g3x = a2x.B3x(e3x);
                    !!g3x ? is7l.element = g3x : is7l.clazz = e3x
                } else {
                    NEJ.EX(is7l, e3x);
                    is7l.element = a2x.B3x(is7l.element)
                }
                var C3x = a2x.lQ8I(is7l.element);
                h3x.s3x(F3x, "click", cbI7B.f3x(null, C3x, is7l.clazz, is7l.ontoggle || br4v))
            }
            return this
        }
    }();
    a2x.mt8l = db5g.mt8l = function(F3x, e3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return;
        var fn5s = 0,
            ed5i = "js-focus";
        if (k3x.td0x(e3x)) {
            fn5s = e3x
        } else if (k3x.fB5G(e3x)) {
            ed5i = e3x
        } else if (k3x.lG8y(e3x)) {
            fn5s = e3x.mode || fn5s;
            ed5i = e3x.clazz || ed5i
        }
        var D3x = parseInt(a2x.t3x(F3x, "mode"));
        if (!isNaN(D3x)) fn5s = D3x;
        D3x = a2x.t3x(F3x, "focus");
        if (!!D3x) ed5i = D3x;
        be4i.bvW8O(F3x, fn5s, ed5i);
        return this
    };
    a2x.di5n = function() {
        var bz4D = {
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
        return function(fy5D, fI6C, bI4M) {
            var F3x = document.createElement(fy5D);
            NEJ.X(F3x, bz4D[fy5D.toLowerCase()]);
            if (!!fI6C) F3x.className = fI6C;
            bI4M = a2x.B3x(bI4M);
            if (!!bI4M) bI4M.appendChild(F3x);
            return F3x
        }
    }();
    a2x.beh3x = function() {
        var cci7b = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var ccT7M = function(W3x) {
            W3x = W3x.trim();
            if (!W3x) return a2x.di5n("iframe");
            var eM5R;
            try {
                eM5R = document.createElement('<iframe name="' + W3x + '"></iframe>');
                eM5R.frameBorder = 0
            } catch (e) {
                eM5R = a2x.di5n("iframe");
                eM5R.name = W3x
            }
            return eM5R
        };
        return function(e3x) {
            e3x = e3x || bb3x;
            var eM5R = ccT7M(e3x.name || "");
            if (!e3x.visible) eM5R.style.display = "none";
            if (k3x.gE6y(e3x.onload)) h3x.s3x(eM5R, "load", function(d3x) {
                if (!eM5R.src) return;
                h3x.hj6d(eM5R, "load");
                e3x.onload(d3x)
            });
            var bI4M = e3x.parent;
            if (k3x.gE6y(bI4M)) {
                try {
                    bI4M(eM5R)
                } catch (e) {}
            } else {
                (a2x.B3x(bI4M) || document.body).appendChild(eM5R)
            }
            var cS4W = e3x.src || cci7b();
            window.setTimeout(function() {
                eM5R.src = cS4W
            }, 0);
            return eM5R
        }
    }();
    a2x.cM4Q = db5g.cM4Q = function() {
        var bQS4W = function(Ar3x) {
            Ar3x.src = en5s.bwJ8B
        };
        var bSE5J = function(em5r) {
            em5r.src = "about:blank"
        };
        return function(F3x, cdf7Y) {
            F3x = a2x.B3x(F3x);
            if (!F3x) return this;
            if (!cdf7Y) h3x.hj6d(F3x);
            delete btq7j[F3x.id];
            var fy5D = F3x.tagName;
            if (fy5D == "IFRAME") {
                bSE5J(F3x)
            } else if (fy5D == "IMG") {
                bQS4W(F3x)
            } else if (!!F3x.getElementsByTagName) {
                k3x.bd4h(F3x.getElementsByTagName("img"), bQS4W);
                k3x.bd4h(F3x.getElementsByTagName("iframe"), bSE5J)
            }
            if (!!F3x.parentNode) {
                F3x.parentNode.removeChild(F3x)
            }
            return this
        }
    }();
    a2x.mR8J = db5g.mR8J = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!!F3x) R3x.appendChild(F3x);
        return this
    };
    a2x.bTy5D = db5g.bTy5D = function(F3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return;
        k3x.mY8Q(F3x.childNodes, function(g3x) {
            a2x.cM4Q(g3x)
        })
    };
    a2x.IV6P = db5g.IV6P = function() {
        var ed5i, gO6I = /\s+/;
        var cdx8p = function() {
            if (!!ed5i) return;
            ed5i = a2x.ty0x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a2x.bVK6E()
        };
        return function(F3x, e3x) {
            F3x = a2x.B3x(F3x);
            if (!F3x) return;
            cdx8p();
            e3x = e3x || bb3x;
            var bI4M = F3x.parentNode;
            if (!a2x.bE4I(bI4M, ed5i)) {
                bI4M = a2x.di5n("span", ed5i);
                F3x.insertAdjacentElement("beforeBegin", bI4M);
                bI4M.appendChild(F3x)
            }
            var bzk8c = e3x.nid || "",
                g3x = a2x.H3x(bI4M, bzk8c || ed5i + "-show")[0];
            if (!g3x) {
                var ee5j = ((e3x.clazz || "") + " " + bzk8c).trim();
                ee5j = ed5i + "-show" + (!ee5j ? "" : " ") + ee5j;
                g3x = a2x.di5n(e3x.tag || "span", ee5j);
                bI4M.appendChild(g3x)
            }
            var ee5j = e3x.clazz;
            if (!!ee5j) {
                ee5j = (ee5j || "").trim().split(gO6I)[0] + "-parent";
                a2x.y3x(bI4M, ee5j)
            }
            return g3x
        }
    }();
    a2x.t3x = db5g.t3x = function() {
        var bsE7x = {},
            fy5D = "data-",
            dg5l = /\-(.{1})/gi;
        var Fk5p = function(F3x) {
            var C3x = a2x.lQ8I(F3x);
            if (!!bsE7x[C3x]) return;
            var bz4D = {};
            k3x.bd4h(F3x.attributes, function(g3x) {
                var K3x = g3x.nodeName;
                if (K3x.indexOf(fy5D) != 0) return;
                K3x = K3x.replace(fy5D, "").replace(dg5l, function($1, $2) {
                    return $2.toUpperCase()
                });
                bz4D[K3x] = g3x.nodeValue || ""
            });
            bsE7x[C3x] = bz4D
        };
        return function(F3x, K3x, D3x) {
            F3x = a2x.B3x(F3x);
            if (!F3x) return null;
            var bdM3x = F3x.dataset;
            if (!bdM3x) {
                Fk5p(F3x);
                bdM3x = bsE7x[F3x.id]
            }
            if (D3x !== undefined) bdM3x[K3x] = D3x;
            return bdM3x[K3x]
        }
    }();
    a2x.gH6B = db5g.gH6B = function(F3x, W3x, D3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return "";
        if (D3x !== undefined && !!F3x.setAttribute) F3x.setAttribute(W3x, D3x);
        return be4i.bug7Z(F3x, W3x)
    };
    a2x.os9j = function(dW5b) {
        var rG0x = document.createElement("div");
        rG0x.innerHTML = dW5b;
        var i3x = a2x.dm5r(rG0x);
        return i3x.length > 1 ? rG0x : i3x[0]
    };
    a2x.cdS8K = db5g.cdS8K = function(F3x) {
        F3x = a2x.B3x(F3x);
        return !F3x ? "" : be4i.bvQ8I(F3x)
    };
    a2x.bCl9c = function(Bw4A) {
        Bw4A = (Bw4A || "").trim();
        return !Bw4A ? null : be4i.bvP7I(Bw4A)
    };
    a2x.cea8S = function(cK4O, u3x) {
        cK4O = cK4O || "";
        switch (u3x) {
            case "xml":
                cK4O = a2x.bCl9c(cK4O);
                break;
            case "json":
                try {
                    cK4O = JSON.parse(cK4O)
                } catch (ex) {
                    cK4O = null
                }
                break
        }
        return cK4O
    };
    a2x.hO6I = db5g.hO6I = function() {
        var cfj8b = function(F3x) {
            return F3x == document.body || F3x == document.documentElement
        };
        return function(ec5h, nI9z) {
            ec5h = a2x.B3x(ec5h);
            if (!ec5h) return null;
            nI9z = a2x.B3x(nI9z) || null;
            var m3x = {
                    x: 0,
                    y: 0
                },
                bsk7d, dq5v, bdF3x;
            while (!!ec5h && ec5h != nI9z) {
                bsk7d = cfj8b(ec5h);
                dq5v = bsk7d ? 0 : ec5h.scrollLeft;
                bdF3x = parseInt(a2x.df5k(ec5h, "borderLeftWidth")) || 0;
                m3x.x += ec5h.offsetLeft + bdF3x - dq5v;
                dq5v = bsk7d ? 0 : ec5h.scrollTop;
                bdF3x = parseInt(a2x.df5k(ec5h, "borderTopWidth")) || 0;
                m3x.y += ec5h.offsetTop + bdF3x - dq5v;
                ec5h = ec5h.offsetParent
            }
            return m3x
        }
    }();
    a2x.nb8T = db5g.nb8T = function(F3x) {
        var bi4m = a2x.hO6I(F3x);
        window.scrollTo(bi4m.x, bi4m.y);
        return this
    };
    a2x.cJe5j = function(tw0x) {
        tw0x = (tw0x || "").trim();
        return be4i.bSO5T(tw0x)
    };
    a2x.cfm8e = db5g.cfm8e = function(F3x, W3x, bz4D) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return this;
        var D3x = be4i.bEd0x(W3x, bz4D);
        if (!D3x) return this;
        a2x.ba3x(F3x, "transform", D3x);
        return this
    };
    a2x.fa5f = db5g.fa5f = function(F3x, bz4D) {
        F3x = a2x.B3x(F3x);
        if (!!F3x) k3x.eI5N(bz4D, function(D3x, W3x) {
            a2x.ba3x(F3x, W3x, D3x)
        });
        return this
    };
    a2x.cfq8i = db5g.cfq8i = function(gf6Z, e3x) {
        gf6Z = a2x.B3x(gf6Z);
        if (!gf6Z) return {
            start: 0,
            end: 0
        };
        if (k3x.td0x(e3x)) e3x = {
            start: e3x,
            end: e3x
        };
        if (e3x != null) {
            if (e3x.end == null) e3x.end = e3x.start || 0;
            be4i.bvY8Q(gf6Z, e3x)
        } else {
            e3x = be4i.bvX8P(gf6Z)
        }
        return e3x
    };
    a2x.ba3x = db5g.ba3x = function(F3x, W3x, D3x) {
        F3x = a2x.B3x(F3x);
        if (!!F3x) be4i.buA7t(F3x, W3x, D3x);
        return this
    };
    a2x.df5k = db5g.df5k = function(F3x, W3x) {
        F3x = a2x.B3x(F3x);
        if (!F3x) return "";
        var hc6W = !window.getComputedStyle ? F3x.currentStyle || bb3x : window.getComputedStyle(F3x, null);
        return hc6W[be4i.bFW0x(W3x)] || ""
    };
    a2x.bFZ0x = function() {
        var dg5l = /[\s\r\n]+/gi;
        return function(cj4n) {
            cj4n = (cj4n || "").trim().replace(dg5l, " ");
            if (!cj4n) return;
            var g3x = a2x.di5n("style");
            document.head.appendChild(g3x);
            be4i.bun7g(g3x, be4i.bWT6N(cj4n));
            return g3x
        }
    }();
    a2x.bGt0x = function(ye3x) {
        try {
            ye3x = ye3x.trim();
            if (!!ye3x) return (new Function(ye3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a2x.ty0x = function() {
        var dg5l = /#<.*?>/g,
            gG6A = +(new Date);
        return function(kt8l) {
            if (!IN6H) IN6H = [];
            var fI6C = "auto-" + gG6A++;
            IN6H.push(kt8l.replace(dg5l, fI6C));
            return fI6C
        }
    }();
    a2x.bVK6E = function() {
        if (!!IN6H) {
            a2x.bFZ0x(IN6H.join(""));
            IN6H = null
        }
        return this
    };
    a2x.cJb5g = function(cj4n, kt8l) {
        cj4n = a2x.B3x(cj4n);
        return !cj4n ? null : be4i.bum7f(cj4n, kt8l)
    };
    a2x.y3x = db5g.y3x = function() {
        be4i.bwu8m.apply(be4i, arguments);
        return this
    };
    a2x.x3x = db5g.x3x = function() {
        be4i.bwl8d.apply(be4i, arguments);
        return this
    };
    a2x.fk5p = db5g.fk5p = function() {
        be4i.QR8J.apply(be4i, arguments);
        return this
    };
    a2x.bE4I = db5g.bE4I = function() {
        return be4i.bwe8W.apply(be4i, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    db5g.isChange = !0
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        be4i = c3x("nej.h"),
        k3x = c3x("nej.u");
    var Ef5k = function(j3x, u3x) {
        try {
            u3x = u3x.toLowerCase();
            if (j3x === null) return u3x == "null";
            if (j3x === undefined) return u3x == "undefined";
            return bb3x.toString.call(j3x).toLowerCase() == "[object " + u3x + "]"
        } catch (e) {
            return !1
        }
    };
    k3x.gE6y = function(j3x) {
        return Ef5k(j3x, "function")
    };
    k3x.fB5G = function(j3x) {
        return Ef5k(j3x, "string")
    };
    k3x.td0x = function(j3x) {
        return Ef5k(j3x, "number")
    };
    k3x.cJa5f = function(j3x) {
        return Ef5k(j3x, "boolean")
    };
    k3x.EQ5V = function(j3x) {
        return Ef5k(j3x, "date")
    };
    k3x.eJ5O = function(j3x) {
        return Ef5k(j3x, "array")
    };
    k3x.lG8y = function(j3x) {
        return Ef5k(j3x, "object")
    };
    k3x.fx5C = function() {
        var dg5l = /[^\x00-\xfff]/g;
        return function(bo4s) {
            return ("" + (bo4s || "")).replace(dg5l, "**").length
        }
    }();
    k3x.dl5q = function(i3x, p3x) {
        var dZ5e = k3x.gE6y(p3x) ? p3x : function(D3x) {
                return D3x === p3x
            },
            r3x = k3x.eI5N(i3x, dZ5e);
        return r3x != null ? r3x : -1
    };
    k3x.cIW5b = function() {
        var bJA1x;
        var PN8F = function(i3x, oO9F, pb9S) {
            if (oO9F > pb9S) return -1;
            var Gd5i = Math.ceil((oO9F + pb9S) / 2),
                m3x = bJA1x(i3x[Gd5i], Gd5i, i3x);
            if (m3x == 0) return Gd5i;
            if (m3x < 0) return PN8F(i3x, oO9F, Gd5i - 1);
            return PN8F(i3x, Gd5i + 1, pb9S)
        };
        return function(i3x, IL6F) {
            bJA1x = IL6F || br4v;
            return PN8F(i3x, 0, i3x.length - 1)
        }
    }();
    k3x.mY8Q = function(i3x, cA4E, P3x) {
        if (!i3x || !i3x.length || !k3x.gE6y(cA4E)) return null;
        for (var i = i3x.length - 1; i >= 0; i--)
            if (!!cA4E.call(P3x, i3x[i], i, i3x)) return i;
        return null
    };
    k3x.bd4h = function(i3x, cA4E, P3x) {
        if (!i3x || !i3x.length || !k3x.gE6y(cA4E)) return this;
        if (!!i3x.forEach) {
            i3x.forEach(cA4E, P3x);
            return this
        }
        for (var i = 0, l = i3x.length; i < l; i++) cA4E.call(P3x, i3x[i], i, i3x);
        return this
    };
    k3x.eI5N = function(i3x, cA4E, P3x) {
        if (!i3x || !k3x.gE6y(cA4E)) return null;
        if (i3x.length != null) {
            if (i3x.length > 0)
                for (var i = 0, l = i3x.length; i < l; i++)
                    if (!!cA4E.call(P3x, i3x[i], i, i3x)) return i
        }
        if (k3x.lG8y(i3x)) {
            for (var x in i3x)
                if (i3x.hasOwnProperty(x) && !!cA4E.call(P3x, i3x[x], x, i3x)) return x
        }
        return null
    };
    k3x.cgd8V = function(jm7f, cgs8k, e3x) {
        jm7f = jm7f || [];
        e3x = e3x || bb3x;
        var bNl2x = !!e3x.union,
            wY2x = !!e3x.begin,
            bdl3x = e3x.compare,
            cgt8l = bNl2x && wY2x ? k3x.mY8Q : k3x.bd4h;
        cgt8l(cgs8k, function(p3x) {
            if (!!bdl3x) bdl3x = bdl3x.ew5B(p3x);
            var r3x = k3x.dl5q(jm7f, bdl3x || p3x);
            if (r3x >= 0) jm7f.splice(r3x, 1);
            if (bNl2x) jm7f[wY2x ? "unshift" : "push"](p3x)
        });
        return jm7f
    };
    k3x.Cb4f = function(bz4D, bo4s) {
        if (!bz4D || !bo4s || !bo4s.replace) return bo4s || "";
        return bo4s.replace(bz4D.r, function($1) {
            var m3x = bz4D[!bz4D.i ? $1.toLowerCase() : $1];
            return m3x != null ? m3x : $1
        })
    };
    k3x.dH5M = function() {
        var bz4D = {
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
        return function(bo4s) {
            return k3x.Cb4f(bz4D, bo4s)
        }
    }();
    k3x.Az3x = function() {
        var bz4D = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bo4s) {
            return k3x.Cb4f(bz4D, bo4s)
        }
    }();
    k3x.ia6U = function() {
        var bz4D = {
                i: !0,
                r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
            },
            cgQ8I = ["上午", "下午"],
            cgY8Q = ["A.M.", "P.M."],
            brh6b = ["日", "一", "二", "三", "四", "五", "六"],
            cha8S = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            chF9w = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var QQ8I = function(gW6Q) {
            gW6Q = parseInt(gW6Q) || 0;
            return (gW6Q < 10 ? "0" : "") + gW6Q
        };
        var chQ9H = function(qj9a) {
            return qj9a < 12 ? 0 : 1
        };
        return function(bA4E, Jj6d, cia9R) {
            if (!bA4E || !Jj6d) return "";
            bA4E = k3x.bdb3x(bA4E);
            bz4D.yyyy = bA4E.getFullYear();
            bz4D.yy = ("" + bz4D.yyyy).substr(2);
            bz4D.M = bA4E.getMonth() + 1;
            bz4D.MM = QQ8I(bz4D.M);
            bz4D.eM = chF9w[bz4D.M - 1];
            bz4D.cM = cha8S[bz4D.M - 1];
            bz4D.d = bA4E.getDate();
            bz4D.dd = QQ8I(bz4D.d);
            bz4D.H = bA4E.getHours();
            bz4D.HH = QQ8I(bz4D.H);
            bz4D.m = bA4E.getMinutes();
            bz4D.mm = QQ8I(bz4D.m);
            bz4D.s = bA4E.getSeconds();
            bz4D.ss = QQ8I(bz4D.s);
            bz4D.ms = bA4E.getMilliseconds();
            bz4D.w = brh6b[bA4E.getDay()];
            var bUG5L = chQ9H(bz4D.H);
            bz4D.ct = cgQ8I[bUG5L];
            bz4D.et = cgY8Q[bUG5L];
            if (!!cia9R) {
                bz4D.H = bz4D.H % 12
            }
            return k3x.Cb4f(bz4D, Jj6d)
        }
    }();
    k3x.bdb3x = function(bA4E) {
        var da5f = bA4E;
        if (k3x.fB5G(bA4E)) da5f = new Date(Date.parse(bA4E));
        if (!k3x.EQ5V(bA4E)) da5f = new Date(bA4E);
        return da5f
    };
    k3x.IR6L = function(cic9T, cio9f) {
        return (new Number(cic9T)).toFixed(cio9f)
    };
    k3x.bqJ6D = function() {
        var gO6I = /([^\/:])\/.*$/,
            kf7Y = /\/[^\/]+$/,
            EW5b = /[#\?]/,
            bqE6y = location.href.split(/[?#]/)[0],
            tH0x = document.createElement("a");
        var bqC6w = function(jt7m) {
            return (jt7m || "").indexOf("://") > 0
        };
        var bBi9Z = function(jt7m) {
            return (jt7m || "").split(EW5b)[0].replace(kf7Y, "/")
        };
        var ciK9B = function(jt7m, ga6U) {
            if (jt7m.indexOf("/") == 0) return ga6U.replace(gO6I, "$1") + jt7m;
            return bBi9Z(ga6U) + jt7m
        };
        bqE6y = bBi9Z(bqE6y);
        return function(jt7m, ga6U) {
            jt7m = (jt7m || "").trim();
            if (!bqC6w(ga6U)) ga6U = bqE6y;
            if (!jt7m) return ga6U;
            if (bqC6w(jt7m)) return jt7m;
            jt7m = ciK9B(jt7m, ga6U);
            tH0x.href = jt7m;
            jt7m = tH0x.href;
            return bqC6w(jt7m) ? jt7m : tH0x.getAttribute("href", 4)
        }
    }();
    k3x.ciO9F = function() {
        var dg5l = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(Y3x) {
            if (dg5l.test(Y3x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k3x.bBE9v = function(G3x, is7l) {
        if (!G3x) return is7l;
        var W3x = G3x.tagName.toLowerCase(),
            i3x = a2x.dm5r(G3x);
        if (!i3x || !i3x.length) {
            is7l[W3x] = G3x.textContent || G3x.text || "";
            return is7l
        }
        var ck4o = {};
        is7l[W3x] = ck4o;
        k3x.bd4h(i3x, function(g3x) {
            k3x.bBE9v(g3x, ck4o)
        });
        return is7l
    };
    k3x.cIz5E = function(Bw4A) {
        try {
            return k3x.bBE9v(a2x.bCl9c(Bw4A), {})
        } catch (ex) {
            return null
        }
    };
    k3x.Ro8g = function(ig6a, Ry9p) {
        var is7l = {};
        k3x.bd4h((ig6a || "").split(Ry9p), function(W3x) {
            var bcS2x = W3x.split("=");
            if (!bcS2x || !bcS2x.length) return;
            var K3x = bcS2x.shift();
            if (!K3x) return;
            is7l[decodeURIComponent(K3x)] = decodeURIComponent(bcS2x.join("="))
        });
        return is7l
    };
    k3x.uN1x = function(gn6h, Ry9p, ckm9d) {
        if (!gn6h) return "";
        var bs4w = [];
        for (var x in gn6h) {
            bs4w.push(encodeURIComponent(x) + "=" + (!!ckm9d ? encodeURIComponent(gn6h[x]) : gn6h[x]))
        }
        return bs4w.join(Ry9p || ",")
    };
    k3x.hu6o = function(bv4z) {
        return k3x.Ro8g(bv4z, "&")
    };
    k3x.cC4G = function(gn6h) {
        return k3x.uN1x(gn6h, "&", !0)
    };
    k3x.cIx5C = function(gn6h) {
        return be4i.Is6m(gn6h)
    };
    k3x.cIw5B = function(i3x, dZ5e) {
        var m3x = {};
        k3x.bd4h(i3x, function(p3x) {
            var K3x = p3x;
            if (!!dZ5e) {
                K3x = dZ5e(p3x)
            }
            m3x[K3x] = p3x
        });
        return m3x
    };
    k3x.cIv5A = function(gW6Q, gc6W) {
        var ckn9e = ("" + gW6Q).length,
            ckt9k = Math.max(1, parseInt(gc6W) || 0),
            dq5v = ckt9k - ckn9e;
        if (dq5v > 0) {
            gW6Q = (new Array(dq5v + 1)).join("0") + gW6Q
        }
        return "" + gW6Q
    };
    k3x.bcJ2x = function(gn6h, W3x) {
        if (!k3x.eJ5O(W3x)) {
            try {
                delete gn6h[W3x]
            } catch (e) {
                gn6h[W3x] = undefined
            }
            return this
        }
        k3x.bd4h(W3x, k3x.bcJ2x.f3x(k3x, gn6h));
        return this
    };
    k3x.OK8C = function() {
        var bFs0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq4u) {
            bq4u = bq4u || 10;
            var m3x = [];
            for (var i = 0, bFH0x; i < bq4u; ++i) {
                bFH0x = Math.floor(Math.random() * bFs0x.length);
                m3x.push(bFs0x.charAt(bFH0x))
            }
            return m3x.join("")
        }
    }();
    k3x.Bq4u = function(fC5H, fq5v) {
        return Math.floor(Math.random() * (fq5v - fC5H) + fC5H)
    };
    k3x.nM9D = function(bq4u) {
        bq4u = Math.max(0, Math.min(bq4u || 8, 30));
        var fC5H = Math.pow(10, bq4u - 1),
            fq5v = fC5H * 10;
        return k3x.Bq4u(fC5H, fq5v).toString()
    };
    k3x.bcG2x = function() {
        var gG6A = +(new Date);
        return function() {
            return "" + gG6A++
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        pr9i;
    if (!!O3x.cJ4N) return;
    O3x.cJ4N = NEJ.C();
    pr9i = O3x.cJ4N.prototype;
    O3x.cJ4N.A3x = function(e3x) {
        e3x = e3x || {};
        var cE4I = !!this.Bh4l && this.Bh4l.shift();
        if (!cE4I) {
            cE4I = new this(e3x);
            this.ckw9n = (this.ckw9n || 0) + 1
        }
        cE4I.bm4q(e3x);
        return cE4I
    };
    O3x.cJ4N.T3x = function() {
        var SJ9A = function(p3x, r3x, i3x) {
            p3x.T3x();
            i3x.splice(r3x, 1)
        };
        return function(cE4I) {
            if (!cE4I) return null;
            if (!k3x.eJ5O(cE4I)) {
                if (!(cE4I instanceof this)) {
                    var fI6C = cE4I.constructor;
                    if (!!fI6C.T3x) fI6C.T3x(cE4I);
                    return null
                }
                if (cE4I == this.fl5q) delete this.fl5q;
                if (cE4I == this.Be4i) delete this.Be4i;
                cE4I.bC4G();
                if (!this.Bh4l) this.Bh4l = [];
                if (k3x.dl5q(this.Bh4l, cE4I) < 0) {
                    this.Bh4l.push(cE4I)
                }
                return null
            }
            k3x.mY8Q(cE4I, SJ9A, this)
        }
    }();
    O3x.cJ4N.gk6e = function(e3x) {
        e3x = e3x || {};
        if (!this.fl5q) this.fl5q = this.A3x(e3x);
        return this.fl5q
    };
    O3x.cJ4N.bJd1x = function(e3x, rM0x) {
        e3x = e3x || {};
        if (!!rM0x && !!this.Be4i) {
            this.Be4i.T3x();
            delete this.Be4i
        }
        if (!this.Be4i) {
            this.Be4i = this.A3x(e3x)
        } else {
            this.Be4i.bm4q(e3x)
        }
        return this.Be4i
    };
    pr9i.cw4A = function() {
        var gG6A = +(new Date);
        return function() {
            this.id = gG6A++;
            this.mj8b = {};
            this.bJC1x = {}
        }
    }();
    pr9i.bm4q = function(e3x) {
        this.bpA6u(e3x)
    };
    pr9i.bC4G = function() {
        this.hj6d();
        this.Js6m()
    };
    pr9i.bX4b = function() {
        var gG6A = +(new Date);
        var ckU9L = function(bf4j) {
            if (!bf4j || bf4j.length < 3) return;
            this.bJC1x["de-" + gG6A++] = bf4j;
            h3x.s3x.apply(h3x, bf4j)
        };
        return function(i3x) {
            k3x.bd4h(i3x, ckU9L, this)
        }
    }();
    pr9i.Js6m = function() {
        var ckZ9Q = function(bf4j, K3x, bz4D) {
            delete bz4D[K3x];
            h3x.ms8k.apply(h3x, bf4j)
        };
        return function() {
            k3x.eI5N(this.bJC1x, ckZ9Q)
        }
    }();
    pr9i.cIo5t = function(dZ5e) {
        dZ5e = dZ5e || br4v;
        k3x.eI5N(this, function(FN5S, K3x, bz4D) {
            if (!!FN5S && !!FN5S.T3x && !dZ5e(FN5S)) {
                delete bz4D[K3x];
                FN5S.T3x()
            }
        })
    };
    pr9i.T3x = function() {
        this.constructor.T3x(this)
    };
    pr9i.bpx6r = function(u3x) {
        var d3x = this.mj8b[u3x.toLowerCase()];
        return !!d3x && d3x !== br4v
    };
    pr9i.s3x = function(u3x, d3x) {
        this.xx3x.apply(this, arguments);
        return this
    };
    pr9i.ms8k = function(u3x, d3x) {
        var u3x = (u3x || "").toLowerCase(),
            eg5l = this.mj8b[u3x];
        if (!k3x.eJ5O(eg5l)) {
            if (eg5l == d3x) delete this.mj8b[u3x];
            return
        }
        k3x.mY8Q(eg5l, function(ez5E, r3x, i3x) {
            if (ez5E == d3x) i3x.splice(r3x, 1)
        })
    };
    pr9i.xx3x = function(u3x, d3x) {
        if (!!u3x && k3x.gE6y(d3x)) this.mj8b[u3x.toLowerCase()] = d3x;
        return this
    };
    pr9i.bpA6u = function() {
        var cmE0x = function(d3x, u3x) {
            this.xx3x(u3x, d3x)
        };
        return function(eg5l) {
            k3x.eI5N(eg5l, cmE0x, this);
            return this
        }
    }();
    pr9i.hj6d = function() {
        var bpq6k = function(d3x, u3x) {
            this.hj6d(u3x)
        };
        return function(u3x) {
            var u3x = (u3x || "").toLowerCase();
            if (!!u3x) {
                delete this.mj8b[u3x]
            } else {
                k3x.eI5N(this.mj8b, bpq6k, this)
            }
            return this
        }
    }();
    pr9i.bpo6i = function(u3x, d3x) {
        if (!u3x || !k3x.gE6y(d3x)) return this;
        u3x = u3x.toLowerCase();
        var eg5l = this.mj8b[u3x];
        if (!eg5l) {
            this.mj8b[u3x] = d3x;
            return this
        }
        if (!k3x.eJ5O(eg5l)) {
            this.mj8b[u3x] = [eg5l]
        }
        this.mj8b[u3x].push(d3x);
        return this
    };
    pr9i.z3x = function(u3x) {
        var d3x = this.mj8b[(u3x || "").toLowerCase()];
        if (!d3x) return this;
        var bf4j = fu5z.slice.call(arguments, 1);
        if (!k3x.eJ5O(d3x)) return d3x.apply(this, bf4j);
        k3x.bd4h(d3x, function(dv5A) {
            try {
                dv5A.apply(this, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    O3x.bcx2x = function() {
        var R3x = {};
        return function(C3x, fI6C, e3x) {
            var fj5o = fI6C.cnB0x;
            if (!fj5o) {
                fj5o = k3x.OK8C(10);
                fI6C.cnB0x = fj5o
            }
            var K3x = C3x + "-" + fj5o,
                cE4I = R3x[K3x];
            if (!!e3x && !cE4I) {
                cE4I = fI6C.A3x(e3x);
                cE4I.T3x = cE4I.T3x.eH5M(function(d3x) {
                    delete R3x[K3x];
                    delete cE4I.T3x
                });
                R3x[K3x] = cE4I
            }
            return cE4I
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gC6w = function() {
        var da5f = new Date,
            cnW0x = +da5f,
            bpc6W = 864e5;
        var cot0x = function(W3x) {
            var rN0x = document.cookie,
                ti0x = "\\b" + W3x + "=",
                bcu2x = rN0x.search(ti0x);
            if (bcu2x < 0) return "";
            bcu2x += ti0x.length - 2;
            var xC3x = rN0x.indexOf(";", bcu2x);
            if (xC3x < 0) xC3x = rN0x.length;
            return rN0x.substring(bcu2x, xC3x) || ""
        };
        return function(W3x, j3x) {
            if (j3x === undefined) return cot0x(W3x);
            if (u.fB5G(j3x)) {
                if (!!j3x) {
                    document.cookie = W3x + "=" + j3x + ";";
                    return j3x
                }
                j3x = {
                    expires: -100
                }
            }
            j3x = j3x || o;
            var rN0x = W3x + "=" + (j3x.value || "") + ";";
            delete j3x.value;
            if (j3x.expires !== undefined) {
                da5f.setTime(cnW0x + j3x.expires * bpc6W);
                j3x.expires = da5f.toGMTString()
            }
            rN0x += u.uN1x(j3x, ";");
            document.cookie = rN0x
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        it7m = c3x("nej.c"),
        en5s = c3x("nej.g"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        O3x = c3x("nej.ut.j"),
        k3x = c3x("nej.u"),
        b3x;
    if (!!O3x.Jw6q) return;
    O3x.Jw6q = NEJ.C();
    b3x = O3x.Jw6q.N3x(I3x.cJ4N);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.pF9w = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pF9w, e3x);
        var AO4S = it7m.B3x("csrf");
        if ((/^\/[^\/]/.test(this.pF9w.url) || this.pF9w.url.indexOf(location.protocol + "//" + location.host) == 0) && !!AO4S.cookie && !!AO4S.param) {
            var bv4z = encodeURIComponent(AO4S.param) + "=" + encodeURIComponent(v3x.gC6w(AO4S.cookie) || ""),
                Ry9p = this.pF9w.url.indexOf("?") < 0 ? "?" : "&";
            this.pF9w.url += Ry9p + bv4z
        }
        this.bcp2x = e3x.headers || {};
        var bo4s = this.bcp2x[en5s.ym3x];
        if (bo4s == null) this.bcp2x[en5s.ym3x] = en5s.bWx6r
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.AK4O;
        delete this.pF9w;
        delete this.bcp2x
    };
    b3x.coI0x = function(bo4s) {
        var bz4D = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pF9w.noescape) {
            return k3x.Cb4f(bz4D, bo4s)
        } else {
            return bo4s
        }
    };
    b3x.va1x = function(d3x) {
        var ey5D = d3x.status;
        if (ey5D == -1) {
            this.z3x("onerror", {
                code: en5s.bNN2x,
                message: "请求[" + this.pF9w.url + "]超时！"
            });
            return
        }
        if (("" + ey5D).indexOf("2") != 0) {
            this.z3x("onerror", {
                data: ey5D,
                code: en5s.bxd8V,
                message: "服务器返回异常状态[" + ey5D + "]!",
                extData: d3x.result
            });
            return
        }
        this.z3x("onload", a2x.cea8S(this.coI0x(d3x.result), this.pF9w.type))
    };
    b3x.cp4t = br4v;
    b3x.boG6A = function(j3x) {
        var Y3x = this.pF9w.url;
        if (!Y3x) {
            this.z3x("onerror", {
                code: en5s.bxi8a,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pF9w.data = j3x == null ? null : j3x;
            var d3x = {
                request: this.pF9w,
                headers: this.bcp2x
            };
            try {
                this.z3x("onbeforerequest", d3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cp4t(d3x)
        } catch (e) {
            this.z3x("onerror", {
                code: en5s.bxd8V,
                message: "请求[" + Y3x + "]失败:" + e.message + "！"
            })
        }
        return this
    };
    b3x.kk7d = br4v
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        be4i = c3x("nej.h"),
        en5s = c3x("nej.g"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut.j"),
        R3x = {},
        TO9F;
    if (!!O3x.bck2x) return;
    O3x.bck2x = NEJ.C();
    TO9F = O3x.bck2x.N3x(O3x.Jw6q);
    TO9F.bC4G = function() {
        this.bG4K();
        window.clearTimeout(this.ei5n);
        delete this.ei5n;
        try {
            this.rQ0x.onreadystatechange = br4v;
            this.rQ0x.abort()
        } catch (e) {}
        delete this.rQ0x
    };
    TO9F.cp4t = function() {
        var coP0x = function(D3x, K3x) {
            this.rQ0x.setRequestHeader(K3x, D3x)
        };
        return function(e3x) {
            var gl6f = e3x.request,
                oW9N = e3x.headers;
            this.rQ0x = be4i.boC6w();
            if (oW9N[en5s.ym3x] === en5s.HK6E) {
                delete oW9N[en5s.ym3x];
                this.rQ0x.upload.onprogress = this.gw6q.f3x(this, 1);
                if (gl6f.data.tagName === "FORM") gl6f.data = new FormData(gl6f.data)
            }
            this.rQ0x.onreadystatechange = this.gw6q.f3x(this, 2);
            if (gl6f.timeout != 0) {
                this.ei5n = window.setTimeout(this.gw6q.f3x(this, 3), gl6f.timeout)
            }
            this.rQ0x.open(gl6f.method, gl6f.url, !gl6f.sync);
            k3x.eI5N(oW9N, coP0x, this);
            if (!!this.pF9w.cookie && "withCredentials" in this.rQ0x) this.rQ0x.withCredentials = !0;
            this.rQ0x.send(gl6f.data)
        }
    }();
    TO9F.gw6q = function(u3x) {
        switch (u3x) {
            case 1:
                this.z3x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.rQ0x.readyState == 4) this.va1x({
                    status: this.rQ0x.status,
                    result: this.rQ0x.responseText || ""
                });
                break;
            case 3:
                this.va1x({
                    status: -1
                });
                break
        }
    };
    TO9F.kk7d = function() {
        this.va1x({
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
    var TV9M = {},
        bcj2x = [],
        bCM9D = /\s+/g,
        gG6A = +(new Date),
        JB6v, bR4V, hL6F;
    var FS5X = function() {
        var gO6I = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            kf7Y = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            EW5b = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bot6n = /^new\s+/,
            coW0x = /['"]/;
        var cps1x = function(D3x) {
            if (gO6I.test(D3x)) return;
            D3x = D3x.split(".")[0].trim();
            if (!D3x || coW0x.test(D3x)) return;
            D3x = D3x.replace(bot6n, "");
            try {
                if (EW5b.test(D3x)) return;
                hL6F[D3x] = 1
            } catch (e) {}
        };
        return function(bo4s) {
            bo4s = bo4s || "";
            if (!bo4s || gO6I.test(bo4s)) return;
            var bs4w = bo4s.split(kf7Y);
            for (var i = 0, l = bs4w.length; i < l; i++) cps1x(bs4w[i])
        }
    }();
    var cpu1x = function(dK5P) {
        if (dK5P[2] != "in") throw "bad for loop statement: " + dK5P.join(" ");
        bcj2x.push(dK5P[1]);
        FS5X(dK5P[3]);
        return "var __HASH__" + dK5P[1] + " = " + dK5P[3] + "," + dK5P[1] + "," + dK5P[1] + "_count=0;" + "if (!!__HASH__" + dK5P[1] + ")" + "for(var " + dK5P[1] + "_key in __HASH__" + dK5P[1] + "){" + dK5P[1] + " = __HASH__" + dK5P[1] + "[" + dK5P[1] + "_key];" + "if (typeof(" + dK5P[1] + ')=="function") continue;' + dK5P[1] + "_count++;"
    };
    var cpw1x = function() {
        var dK5P = bcj2x[bcj2x.length - 1];
        return "}; if(!__HASH__" + dK5P + "||!" + dK5P + "_count){"
    };
    var cpy1x = function() {
        bcj2x.pop();
        return "};"
    };
    var cpz1x = function(dK5P) {
        if (dK5P[2] != "as") throw "bad for list loop statement: " + dK5P.join(" ");
        var UN9E = dK5P[1].split("..");
        if (UN9E.length > 1) {
            FS5X(UN9E[0]);
            FS5X(UN9E[1]);
            return "for(var " + dK5P[3] + "," + dK5P[3] + "_index=0," + dK5P[3] + "_beg=" + UN9E[0] + "," + dK5P[3] + "_end=" + UN9E[1] + "," + dK5P[3] + "_length=parseInt(" + dK5P[3] + "_end-" + dK5P[3] + "_beg+1);" + dK5P[3] + "_index<" + dK5P[3] + "_length;" + dK5P[3] + "_index++){" + dK5P[3] + " = " + dK5P[3] + "_beg+" + dK5P[3] + "_index;"
        } else {
            FS5X(dK5P[1]);
            return "for(var __LIST__" + dK5P[3] + " = " + dK5P[1] + "," + dK5P[3] + "," + dK5P[3] + "_index=0," + dK5P[3] + "_length=__LIST__" + dK5P[3] + ".length;" + dK5P[3] + "_index<" + dK5P[3] + "_length;" + dK5P[3] + "_index++){" + dK5P[3] + " = __LIST__" + dK5P[3] + "[" + dK5P[3] + "_index];"
        }
    };
    var cpA1x = function(dK5P) {
        if (!dK5P || !dK5P.length) return;
        dK5P.shift();
        var W3x = dK5P[0].split("(")[0];
        return "var " + W3x + " = function" + dK5P.join("").replace(W3x, "") + "{var __OUT=[];"
    };
    var cpB1x = function(dK5P) {
        if (!dK5P[1]) throw "bad include statement: " + dK5P.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var boa5f = function(ku8m, dK5P) {
        FS5X(dK5P.slice(1).join(" "));
        return ku8m
    };
    var cpD1x = function(dK5P) {
        return boa5f("if(", dK5P)
    };
    var cpH1x = function(dK5P) {
        return boa5f("}else if(", dK5P)
    };
    var cpO1x = function(dK5P) {
        return boa5f("var ", dK5P)
    };
    bR4V = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cpD1x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cpH1x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cpu1x,
                pmin: 3
            },
            forelse: {
                pfix: cpw1x
            },
            "/for": {
                pfix: cpy1x
            },
            list: {
                pfix: cpz1x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cpO1x,
                sfix: ";"
            },
            macro: {
                pfix: cpA1x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    JB6v = !0
                }
            },
            "/trim": {
                pfix: function() {
                    JB6v = null
                }
            },
            inline: {
                pfix: cpB1x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(ku8m) {
                return (ku8m || "") + "" + gG6A
            },
            "default": function(D3x, kA8s) {
                return D3x || kA8s
            }
        }
    };
    var cpS1x = function() {
        var cpU1x = /\\([\{\}])/g;
        return function(bo4s, jC7v) {
            bo4s = bo4s.replace(cpU1x, "$1");
            var dK5P = bo4s.slice(1, -1).split(bCM9D),
                bg4k = bR4V.def[dK5P[0]];
            if (!bg4k) {
                bbV2x(bo4s, jC7v);
                return
            }
            if (!!bg4k.pmin && bg4k.pmin >= dK5P.length) throw "Statement needs more parameters:" + bo4s;
            jC7v.push(!!bg4k.pfix && typeof bg4k.pfix != "string" ? bg4k.pfix(dK5P) : bg4k.pfix || "");
            if (!!bg4k.sfix) {
                if (dK5P.length <= 1) {
                    if (!!bg4k.pdft) jC7v.push(bg4k.pdft)
                } else {
                    for (var i = 1, l = dK5P.length; i < l; i++) {
                        if (i > 1) jC7v.push(" ");
                        jC7v.push(dK5P[i])
                    }
                }
                jC7v.push(bg4k.sfix)
            }
        }
    }();
    var bGY1x = function(JL6F, jC7v) {
        if (!JL6F || !JL6F.length) return;
        if (JL6F.length == 1) {
            var bnN5S = JL6F.pop();
            FS5X(bnN5S);
            jC7v.push(bnN5S == "" ? '""' : bnN5S);
            return
        }
        var bnM5R = JL6F.pop().split(":");
        jC7v.push("__MDF['" + bnM5R.shift() + "'](");
        bGY1x(JL6F, jC7v);
        if (bnM5R.length > 0) {
            var bf4j = bnM5R.join(":");
            FS5X(bf4j);
            jC7v.push("," + bf4j)
        }
        jC7v.push(")")
    };
    var bbV2x = function(bo4s, jC7v) {
        if (!bo4s) return;
        var xE3x = bo4s.split("\n");
        if (!xE3x || !xE3x.length) return;
        for (var i = 0, l = xE3x.length, hx6r; i < l; i++) {
            hx6r = xE3x[i];
            if (!!JB6v) {
                hx6r = hx6r.trim();
                if (!hx6r) continue
            }
            cqk1x(hx6r, jC7v);
            if (!!JB6v && i < l - 1) jC7v.push("__OUT.push('\\n');")
        }
    };
    var cqk1x = function() {
        var cqo1x = /\|\|/g,
            cqr1x = /#@@#/g;
        return function(bo4s, jC7v) {
            var Nh7a = "}",
                Nj7c = -1,
                bq4u = bo4s.length,
                wY2x, fQ6K, JR6L, bbJ2x, Nx7q;
            while (Nj7c + Nh7a.length < bq4u) {
                wY2x = "${";
                fQ6K = "}";
                JR6L = bo4s.indexOf(wY2x, Nj7c + Nh7a.length);
                if (JR6L < 0) break;
                if (bo4s.charAt(JR6L + 2) == "%") {
                    wY2x = "${%";
                    fQ6K = "%}"
                }
                bbJ2x = bo4s.indexOf(fQ6K, JR6L + wY2x.length);
                if (bbJ2x < 0) break;
                bbH2x(bo4s.substring(Nj7c + Nh7a.length, JR6L), jC7v);
                Nx7q = bo4s.substring(JR6L + wY2x.length, bbJ2x).replace(cqo1x, "#@@#").split("|");
                for (var i = 0, l = Nx7q.length; i < l; Nx7q[i] = Nx7q[i].replace(cqr1x, "||"), i++);
                jC7v.push("__OUT.push(");
                bGY1x(Nx7q, jC7v);
                jC7v.push(");");
                Nh7a = fQ6K;
                Nj7c = bbJ2x
            }
            bbH2x(bo4s.substring(Nj7c + Nh7a.length), jC7v)
        }
    }();
    var bbH2x = function() {
        var bz4D = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var cqv1x = function(bo4s) {
            return (bo4s || "").replace(bz4D.r, function($1) {
                return bz4D[$1] || $1
            })
        };
        return function(bo4s, jC7v) {
            if (!bo4s) return;
            jC7v.push("__OUT.push('" + cqv1x(bo4s) + "');")
        }
    }();
    var cqD1x = function() {
        var cqE1x = /\t/g,
            cqF1x = /\n/g,
            cqG1x = /\r\n?/g;
        var bLr2x = function(bo4s, wY2x) {
            var r3x = bo4s.indexOf("}", wY2x + 1);
            while (bo4s.charAt(r3x - 1) == "\\") {
                r3x = bo4s.indexOf("}", r3x + 1)
            }
            return r3x
        };
        var cqK1x = function() {
            var bs4w = [],
                EJ5O = arguments[0];
            for (var x in EJ5O) {
                x = (x || "").trim();
                if (!x) continue;
                bs4w.push(x + "=$v('" + x + "')")
            }
            return bs4w.length > 0 ? "var " + bs4w.join(",") + ";" : ""
        };
        return function(bo4s) {
            hL6F = {};
            bo4s = bo4s.replace(cqG1x, "\n").replace(cqE1x, "    ");
            var sc0x = ["if(!__CTX) return '';", ""];
            sc0x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            sc0x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            sc0x.push("__OUT=[];");
            var ET5Y = -1,
                bq4u = bo4s.length;
            var nE9v, JT6N, NC7v, NH7A, Ba4e, NJ7C, bmG5L, NN7G;
            while (ET5Y + 1 < bq4u) {
                nE9v = ET5Y;
                nE9v = bo4s.indexOf("{", nE9v + 1);
                while (nE9v >= 0) {
                    JT6N = bLr2x(bo4s, nE9v);
                    NC7v = bo4s.substring(nE9v, JT6N);
                    NH7A = NC7v.match(bR4V.blk);
                    if (!!NH7A) {
                        Ba4e = NH7A[1].length + 1;
                        NJ7C = bo4s.indexOf("}", nE9v + Ba4e);
                        if (NJ7C >= 0) {
                            bmG5L = NJ7C - nE9v - Ba4e <= 0 ? "{/" + NH7A[1] + "}" : NC7v.substr(Ba4e + 1);
                            Ba4e = bo4s.indexOf(bmG5L, NJ7C + 1);
                            if (Ba4e >= 0) {
                                bbV2x(bo4s.substring(ET5Y + 1, nE9v), sc0x);
                                NN7G = bo4s.substring(NJ7C + 1, Ba4e);
                                switch (NH7A[1]) {
                                    case "cdata":
                                        bbH2x(NN7G, sc0x);
                                        break;
                                    case "minify":
                                        bbH2x(NN7G.replace(cqF1x, " ").replace(bCM9D, " "), sc0x);
                                        break;
                                    case "eval":
                                        if (!!NN7G) sc0x.push("__OUT.push((function(){" + NN7G + "})());");
                                        break
                                }
                                nE9v = ET5Y = Ba4e + bmG5L.length - 1
                            }
                        }
                    } else if (bo4s.charAt(nE9v - 1) != "$" && bo4s.charAt(nE9v - 1) != "\\" && NC7v.substr(NC7v.charAt(1) == "/" ? 2 : 1).search(bR4V.tag) == 0) {
                        break
                    }
                    nE9v = bo4s.indexOf("{", nE9v + 1)
                }
                if (nE9v < 0) break;
                JT6N = bLr2x(bo4s, nE9v);
                if (JT6N < 0) break;
                bbV2x(bo4s.substring(ET5Y + 1, nE9v), sc0x);
                cpS1x(bo4s.substring(nE9v, JT6N + 1), sc0x);
                ET5Y = JT6N
            }
            bbV2x(bo4s.substring(ET5Y + 1), sc0x);
            sc0x.push(';return __OUT.join("");');
            sc0x[1] = cqK1x(hL6F);
            hL6F = null;
            return new Function("__CTX", "__MDF", sc0x.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gG6A
    };
    TrimPath.merge = function() {
        var NO7H = {};
        TrimPath.dump = function() {
            return {
                func: NO7H,
                text: TV9M
            }
        };
        return function(fj5o, j3x, jT7M) {
            try {
                j3x = j3x || {};
                if (!NO7H[fj5o] && !TV9M[fj5o]) return "";
                if (!NO7H[fj5o]) {
                    NO7H[fj5o] = cqD1x(TV9M[fj5o]);
                    delete TV9M[fj5o]
                }
                if (!!jT7M) {
                    for (var x in bR4V.ext)
                        if (!jT7M[x]) jT7M[x] = bR4V.ext[x]
                }
                return NO7H[fj5o](j3x, jT7M || bR4V.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqL1x = +(new Date);
        return function(bo4s, fj5o) {
            if (!bo4s) return "";
            fj5o = fj5o || "ck_" + cqL1x++;
            TV9M[fj5o] = bo4s;
            return fj5o
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        eA5F = {},
        bSr5w = {};
    a2x.Ka6U = TrimPath.seed;
    a2x.cc4g = function() {
        var bSH5M = function(C3x) {
            return !a2x.iN7G ? "" : a2x.iN7G(C3x)
        };
        return function(fj5o, j3x, jT7M) {
            j3x = NEJ.X(NEJ.X({}, bSr5w), j3x);
            j3x.inline = bSH5M;
            jT7M = NEJ.X(NEJ.X({}, eA5F), jT7M);
            jT7M.rand = k3x.nM9D;
            jT7M.format = k3x.ia6U;
            jT7M.escape = k3x.dH5M;
            jT7M.inline = bSH5M;
            return TrimPath.merge(fj5o, j3x, jT7M)
        }
    }();
    a2x.eC5H = function(bo4s, cqP1x) {
        if (!bo4s) return "";
        var fj5o, F3x = a2x.B3x(bo4s);
        if (!!F3x) {
            fj5o = F3x.id;
            bo4s = F3x.value || F3x.innerText;
            if (!cqP1x) a2x.cM4Q(F3x)
        }
        return TrimPath.parse(bo4s, fj5o)
    };
    a2x.dA5F = function(bI4M, fj5o, j3x, jT7M) {
        bI4M = a2x.B3x(bI4M);
        if (!!bI4M) bI4M.innerHTML = a2x.cc4g(fj5o, j3x, jT7M);
        return this
    };
    a2x.cHB5G = function(bz4D) {
        NEJ.X(eA5F, bz4D)
    };
    a2x.crA1x = function(bz4D) {
        NEJ.X(bSr5w, bz4D)
    };
    c3x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var dx5C = NEJ.P("nej.p"),
        O3x = window,
        lt8l = dx5C.Il6f,
        bTL5Q = lt8l.ipad || lt8l.iphone;
    if (!bTL5Q && !!O3x.requestAnimationFrame && !!O3x.cancelRequestAnimationFrame) return;
    var ku8m = dx5C.dr5w.prefix.pro;
    if (!bTL5Q && !!O3x[ku8m + "RequestAnimationFrame"] && !!O3x[ku8m + "CancelRequestAnimationFrame"]) {
        O3x.requestAnimationFrame = O3x[ku8m + "RequestAnimationFrame"];
        O3x.cancelRequestAnimationFrame = O3x[ku8m + "CancelRequestAnimationFrame"];
        return
    }
    var bbx2x = lt8l.desktop ? 80 : lt8l.ios ? 50 : 30;
    O3x.requestAnimationFrame = function(cA4E) {
        return window.setTimeout(function() {
            try {
                cA4E(+(new Date))
            } catch (ex) {}
        }, 1e3 / bbx2x)
    };
    O3x.cancelRequestAnimationFrame = function(C3x) {
        window.clearTimeout(C3x);
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        be4i = c3x("nej.h"),
        db5g = c3x("nej.x"),
        bbt2x = c3x("nej.ut.j.cb"),
        gi6c;
    if (!!a2x.sf0x) return;
    a2x.sf0x = db5g.sf0x = function() {
        var R3x = {},
            gO6I = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d3x) {
            var C3x = decodeURIComponent(d3x.target),
                u3x = d3x.type.toLowerCase();
            var dv5A = R3x[C3x + "-on" + u3x];
            if (!!dv5A) {
                try {
                    dv5A(d3x)
                } catch (e) {}
                return
            }
            var cR4V = R3x[C3x + "-tgt"];
            if (!!cR4V && gO6I.test(u3x)) {
                byV8N(cR4V, d3x)
            }
        };
        var bmc5h = function(e3x) {
            var bI4M = a2x.B3x(e3x.parent) || document.body,
                dW5b = a2x.cc4g(gi6c, e3x);
            bI4M.insertAdjacentHTML(!e3x.hidden ? "beforeEnd" : "afterBegin", dW5b)
        };
        var byV8N = function(C3x, d3x) {
            var u3x = d3x.type.toLowerCase();
            requestAnimationFrame(function() {
                h3x.z3x(C3x, u3x)
            })
        };
        var crF1x = function(hQ6K) {
            return !!hQ6K && !!hQ6K.inited && !!hQ6K.inited()
        };
        var Of8X = function(C3x) {
            var bs4w = [document.embeds[C3x], a2x.B3x(C3x), document[C3x], window[C3x]],
                r3x = k3x.eI5N(bs4w, crF1x),
                hQ6K = bs4w[r3x],
                blZ5e = C3x + "-count";
            R3x[blZ5e]++;
            if (!!hQ6K || R3x[blZ5e] > 100) {
                R3x[C3x](hQ6K);
                delete R3x[C3x];
                delete R3x[blZ5e];
                return
            }
            window.setTimeout(Of8X.f3x(null, C3x), 300)
        };
        var crN1x = function(e3x) {
            var C3x = e3x.id,
                cm4q = e3x.params;
            if (!cm4q) {
                cm4q = {};
                e3x.params = cm4q
            }
            var hL6F = cm4q.flashvars || "";
            hL6F += (!hL6F ? "" : "&") + ("id=" + C3x);
            if (!e3x.hidden && (!!e3x.target || be4i.beq3x(cm4q.wmode))) {
                var hR6L = a2x.lQ8I(e3x.target) || a2x.lQ8I(e3x.parent),
                    bbs2x = k3x.bcG2x();
                bbt2x["cb" + bbs2x] = byV8N.f3x(null, hR6L);
                hL6F += "&onevent=nej.ut.j.cb.cb" + bbs2x;
                R3x[C3x + "-tgt"] = hR6L
            }
            cm4q.flashvars = hL6F;
            k3x.eI5N(e3x, function(D3x, K3x) {
                if (k3x.gE6y(D3x) && K3x != "onready") {
                    R3x[C3x + "-" + K3x] = D3x
                }
            })
        };
        return function(e3x) {
            e3x = NEJ.X({}, e3x);
            if (!e3x.src) return;
            var C3x = "flash_" + k3x.bcG2x();
            e3x.id = C3x;
            crN1x(e3x);
            bmc5h(e3x);
            if (!e3x.onready) return;
            R3x[C3x] = e3x.onready;
            R3x[C3x + "-count"] = 0;
            Of8X(C3x)
        }
    }();
    gi6c = a2x.eC5H('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    db5g.isChange = !0
})();
(function() {
    var c3x = NEJ.P,
        it7m = c3x("nej.c"),
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut.j"),
        bbt2x = c3x("nej.ut.j.cb"),
        R3x = {},
        gG6A = +(new Date),
        blT5Y;
    if (!!O3x.blS5X) return;
    bbt2x["ld" + gG6A] = function(K3x, cK4O) {
        var jW7P = R3x[K3x];
        if (!jW7P) return;
        delete R3x[K3x];
        jW7P.va1x({
            status: 200,
            result: cK4O
        })
    };
    bbt2x["er" + gG6A] = function(K3x, ey5D) {
        var jW7P = R3x[K3x];
        if (!jW7P) return;
        delete R3x[K3x];
        jW7P.va1x({
            status: ey5D || 0
        })
    };
    O3x.blS5X = NEJ.C();
    blT5Y = O3x.blS5X.N3x(O3x.Jw6q);
    blT5Y.cp4t = function(e3x) {
        var hQ6K = R3x.flash;
        if (k3x.eJ5O(hQ6K)) {
            hQ6K.push(this.cp4t.f3x(this, e3x));
            return
        }
        if (!hQ6K) {
            R3x.flash = [this.cp4t.f3x(this, e3x)];
            a2x.sf0x({
                hidden: !0,
                src: it7m.B3x("ajax.swf"),
                onready: function(hQ6K) {
                    if (!hQ6K) return;
                    var i3x = R3x.flash;
                    R3x.flash = hQ6K;
                    k3x.mY8Q(i3x, function(dv5A) {
                        try {
                            dv5A()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AK4O = "swf-" + k3x.nM9D();
        R3x[this.AK4O] = this;
        var j3x = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e3x.request);
        j3x.key = this.AK4O;
        j3x.headers = e3x.headers;
        j3x.onerror = "nej.ut.j.cb.er" + gG6A;
        j3x.onloaded = "nej.ut.j.cb.ld" + gG6A;
        var bBU9L = it7m.bWk6e(j3x.url);
        if (!!bBU9L) j3x.policyURL = bBU9L;
        hQ6K.request(j3x)
    };
    blT5Y.kk7d = function() {
        delete R3x[this.AK4O];
        this.va1x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        be4i = c3x("nej.h");
    be4i.bCd9U = function() {
        var dg5l = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(kV8N) {
            kV8N = kV8N || "";
            if (dg5l.test(kV8N)) return RegExp.$1;
            return "*"
        }
    }();
    be4i.blJ5O = function(j3x) {
        return j3x
    };
    be4i.blI5N = function(bbl2x, e3x) {
        if (!bbl2x.postMessage) return;
        e3x = e3x || bb3x;
        bbl2x.postMessage(be4i.blJ5O(e3x.data), be4i.bCd9U(e3x.origin))
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.fN6H) return;
    O3x.fN6H = NEJ.C();
    b3x = O3x.fN6H.N3x(O3x.cJ4N);
    b3x.cw4A = function() {
        this.S3x = {};
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.Oq8i = a2x.B3x(e3x.element) || window;
        this.bDy0x(e3x.event);
        this.csb1x();
        this.z3x("oninit")
    };
    b3x.bC4G = function() {
        var DW4a = function(D3x, K3x, bz4D) {
            if (!k3x.eJ5O(D3x)) {
                k3x.bcJ2x(this.Oq8i, K3x)
            }
            delete bz4D[K3x]
        };
        return function() {
            this.bG4K();
            k3x.eI5N(this.S3x, DW4a, this);
            delete this.Oq8i
        }
    }();
    b3x.bbi2x = function(F3x, u3x) {
        F3x = a2x.B3x(F3x);
        return F3x == this.Oq8i && (!u3x || !!this.S3x["on" + u3x])
    };
    b3x.bDy0x = function(d3x) {
        if (k3x.fB5G(d3x)) {
            var W3x = "on" + d3x;
            if (!this.S3x[W3x]) {
                this.S3x[W3x] = this.csc1x.f3x(this, d3x)
            }
            this.bEB0x(d3x);
            return
        }
        if (k3x.eJ5O(d3x)) {
            k3x.bd4h(d3x, this.bDy0x, this)
        }
    };
    b3x.bEB0x = function(u3x) {
        var d3x = "on" + u3x,
            dv5A = this.Oq8i[d3x],
            bED0x = this.S3x[d3x];
        if (dv5A != bED0x) {
            this.bbh2x(u3x);
            if (!!dv5A && dv5A != br4v) this.bEK0x(u3x, dv5A);
            this.Oq8i[d3x] = bED0x
        }
    };
    b3x.bEK0x = function(u3x, dv5A, cse1x) {
        var i3x = this.S3x[u3x];
        if (!i3x) {
            i3x = [];
            this.S3x[u3x] = i3x
        }
        if (k3x.gE6y(dv5A)) {
            !cse1x ? i3x.push(dv5A) : i3x.unshift(dv5A)
        }
    };
    b3x.bbh2x = function(u3x, dv5A) {
        var i3x = this.S3x[u3x];
        if (!i3x || !i3x.length) return;
        if (!dv5A) {
            delete this.S3x[u3x];
            return
        }
        k3x.mY8Q(i3x, function(D3x, r3x, Km6g) {
            if (dv5A === D3x) {
                Km6g.splice(r3x, 1);
                return !0
            }
        })
    };
    b3x.csc1x = function(u3x, d3x) {
        d3x = d3x || {
            noargs: !0
        };
        d3x.type = u3x;
        this.z3x("ondispatch", d3x);
        if (!!d3x.stopped) return;
        k3x.bd4h(this.S3x[u3x], function(dv5A) {
            try {
                dv5A(d3x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b3x.csb1x = function() {
        var bll5q = function(d3x) {
            var bf4j = d3x.args,
                u3x = bf4j[1].toLowerCase();
            if (this.bbi2x(bf4j[0], u3x)) {
                d3x.stopped = !0;
                this.bEB0x(u3x);
                this.bEK0x(u3x, bf4j[2], bf4j[3]);
                this.z3x("oneventadd", {
                    type: u3x,
                    listener: bf4j[2]
                })
            }
        };
        var csf1x = function(d3x) {
            var bf4j = d3x.args,
                u3x = bf4j[1].toLowerCase();
            if (this.bbi2x(bf4j[0], u3x)) {
                d3x.stopped = !0;
                this.bbh2x(u3x, bf4j[2])
            }
        };
        var bpq6k = function(d3x) {
            var bf4j = d3x.args,
                u3x = (bf4j[1] || "").toLowerCase();
            if (this.bbi2x(bf4j[0])) {
                if (!!u3x) {
                    this.bbh2x(u3x);
                    return
                }
                k3x.eI5N(this.S3x, function(D3x, K3x) {
                    if (k3x.eJ5O(D3x)) {
                        this.bbh2x(K3x)
                    }
                }, this)
            }
        };
        var csk1x = function(d3x) {
            var bf4j = d3x.args,
                u3x = bf4j[1].toLowerCase();
            if (this.bbi2x(bf4j[0], u3x)) {
                d3x.stopped = !0;
                bf4j[0]["on" + u3x].apply(bf4j[0], bf4j.slice(2))
            }
        };
        return function() {
            if (!!this.csQ1x) return;
            this.csQ1x = true;
            h3x.s3x = h3x.s3x.eH5M(bll5q.f3x(this));
            h3x.ms8k = h3x.ms8k.eH5M(csf1x.f3x(this));
            h3x.hj6d = h3x.hj6d.eH5M(bpq6k.f3x(this));
            h3x.z3x = h3x.z3x.eH5M(csk1x.f3x(this))
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        be4i = c3x("nej.h"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut");
    if (O3x.mW8O.trident) return;
    if (!!window.postMessage) {
        be4i.blJ5O = be4i.blJ5O.eH5M(function(d3x) {
            d3x.stopped = !0;
            d3x.value = JSON.stringify(d3x.args[0])
        });
        return
    }
    var K3x = "MSG|",
        kz8r = [];
    var cue2x = function() {
        var W3x = unescape(window.name || "").trim();
        if (!W3x || W3x.indexOf(K3x) != 0) return;
        window.name = "";
        var m3x = k3x.Ro8g(W3x.replace(K3x, ""), "|"),
            kV8N = (m3x.origin || "").toLowerCase();
        if (!!kV8N && kV8N != "*" && location.href.toLowerCase().indexOf(kV8N) != 0) return;
        h3x.z3x(window, "message", {
            data: JSON.parse(m3x.data || "null"),
            source: window.frames[m3x.self] || m3x.self,
            origin: be4i.bCd9U(m3x.ref || document.referrer)
        })
    };
    var cuz2x = function() {
        var bbb2x;
        var cuT2x = function(bz4D, r3x, i3x) {
            if (k3x.dl5q(bbb2x, bz4D.w) < 0) {
                bbb2x.push(bz4D.w);
                i3x.splice(r3x, 1);
                bz4D.w.name = bz4D.d
            }
        };
        return function() {
            bbb2x = [];
            k3x.mY8Q(kz8r, cuT2x);
            bbb2x = null
        }
    }();
    be4i.blI5N = function() {
        var cvk2x = function(j3x) {
            var m3x = {};
            j3x = j3x || bb3x;
            m3x.origin = j3x.origin || "";
            m3x.ref = location.href;
            m3x.self = j3x.source;
            m3x.data = JSON.stringify(j3x.data);
            return K3x + k3x.uN1x(m3x, "|", !0)
        };
        return be4i.blI5N.eH5M(function(d3x) {
            d3x.stopped = !0;
            var bf4j = d3x.args;
            kz8r.unshift({
                w: bf4j[0],
                d: escape(cvk2x(bf4j[1]))
            })
        })
    }();
    I3x.fN6H.A3x({
        element: window,
        event: "message"
    });
    window.setInterval(cuz2x, 100);
    window.setInterval(cue2x, 20)
})();
(function() {
    var c3x = NEJ.P,
        be4i = c3x("nej.h"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j");
    v3x.cvx2x = function() {
        var gA6u = window.name || "_parent",
            cvA2x = {
                gy6s: window.top,
                gA6u: window,
                bI4M: window.parent
            };
        return function(cR4V, e3x) {
            if (typeof cR4V == "string") {
                cR4V = cvA2x[cR4V] || window.frames[cR4V];
                if (!cR4V) return this
            }
            var j3x = NEJ.X({
                origin: "*",
                source: gA6u
            }, e3x);
            be4i.blI5N(cR4V, j3x);
            return this
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        it7m = c3x("nej.c"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.ut.j"),
        R3x = {},
        baT2x;
    if (!!O3x.bkS5X) return;
    O3x.bkS5X = NEJ.C();
    baT2x = O3x.bkS5X.N3x(O3x.Jw6q);
    baT2x.cw4A = function() {
        var fc5h = "NEJ-AJAX-DATA:",
            Fk5p = !1;
        var bkR5W = function(d3x) {
            var j3x = d3x.data;
            if (j3x.indexOf(fc5h) != 0) return;
            j3x = JSON.parse(j3x.replace(fc5h, ""));
            var jW7P = R3x[j3x.key];
            if (!jW7P) return;
            delete R3x[j3x.key];
            j3x.result = decodeURIComponent(j3x.result || "");
            jW7P.va1x(j3x)
        };
        var bkO5T = function() {
            if (!Fk5p) {
                Fk5p = !0;
                h3x.s3x(window, "message", bkR5W)
            }
        };
        return function() {
            this.cF4J();
            bkO5T()
        }
    }();
    baT2x.cp4t = function(e3x) {
        var gl6f = e3x.request,
            jW7P = it7m.bWg6a(gl6f.url),
            em5r = R3x[jW7P];
        if (k3x.eJ5O(em5r)) {
            em5r.push(this.cp4t.f3x(this, e3x));
            return
        }
        if (!em5r) {
            R3x[jW7P] = [this.cp4t.f3x(this, e3x)];
            a2x.beh3x({
                src: jW7P,
                visible: !1,
                onload: function(d3x) {
                    var i3x = R3x[jW7P];
                    R3x[jW7P] = h3x.X3x(d3x).contentWindow;
                    k3x.mY8Q(i3x, function(dv5A) {
                        try {
                            dv5A()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.AK4O = "frm-" + k3x.nM9D();
        R3x[this.AK4O] = this;
        var j3x = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, gl6f);
        j3x.key = this.AK4O;
        j3x.headers = e3x.headers;
        v3x.cvx2x(R3x[jW7P], {
            data: j3x
        })
    };
    baT2x.kk7d = function() {
        delete R3x[this.AK4O];
        this.va1x({
            status: 0
        });
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        en5s = c3x("nej.g"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.ut.j"),
        R3x = {},
        Kr6l;
    if (!!O3x.bkK5P) return;
    O3x.bkK5P = NEJ.C();
    Kr6l = O3x.bkK5P.N3x(O3x.Jw6q);
    Kr6l.cw4A = function() {
        var fc5h = "NEJ-UPLOAD-RESULT:",
            Fk5p = !1;
        var bkR5W = function(d3x) {
            var j3x = d3x.data;
            if (j3x.indexOf(fc5h) != 0) return;
            j3x = JSON.parse(j3x.replace(fc5h, ""));
            var jW7P = R3x[j3x.key];
            if (!jW7P) return;
            delete R3x[j3x.key];
            jW7P.va1x(decodeURIComponent(j3x.result))
        };
        var bkO5T = function() {
            if (!Fk5p) {
                Fk5p = !0;
                h3x.s3x(window, "message", bkR5W)
            }
        };
        return function() {
            this.cF4J();
            bkO5T()
        }
    }();
    Kr6l.bC4G = function() {
        this.bG4K();
        a2x.cM4Q(this.bkA4E);
        delete this.bkA4E;
        window.clearTimeout(this.ei5n);
        delete this.ei5n
    };
    Kr6l.va1x = function(cK4O) {
        var Q3x;
        try {
            Q3x = JSON.parse(cK4O);
            this.z3x("onload", Q3x)
        } catch (e) {
            this.z3x("onerror", {
                code: en5s.bWq6k,
                message: cK4O
            })
        }
    };
    Kr6l.cp4t = function() {
        var cvG2x = function() {
            var mQ8I, cK4O;
            try {
                var mQ8I = this.bkA4E.contentWindow.document.body,
                    cK4O = mQ8I.innerText || mQ8I.textContent
            } catch (e) {
                return
            }
            this.va1x(cK4O)
        };
        var bkr4v = function(Y3x, fn5s, rN0x) {
            v3x.bl4p(Y3x, {
                type: "json",
                method: "POST",
                cookie: rN0x,
                mode: parseInt(fn5s) || 0,
                onload: function(j3x) {
                    if (!this.ei5n) return;
                    this.z3x("onuploading", j3x);
                    this.ei5n = window.setTimeout(bkr4v.f3x(this, Y3x, fn5s, rN0x), 1e3)
                }.f3x(this),
                onerror: function(ca4e) {
                    if (!this.ei5n) return;
                    this.ei5n = window.setTimeout(bkr4v.f3x(this, Y3x, fn5s, rN0x), 1e3)
                }.f3x(this)
            })
        };
        return function(e3x) {
            var gl6f = e3x.request,
                oW9N = e3x.headers,
                fh5m = gl6f.data,
                W3x = "fom-" + k3x.nM9D();
            R3x[W3x] = this;
            fh5m.target = W3x;
            fh5m.method = "POST";
            fh5m.enctype = en5s.HK6E;
            fh5m.encoding = en5s.HK6E;
            var Y3x = fh5m.action || "",
                lJ8B = Y3x.indexOf("?") <= 0 ? "?" : "&";
            fh5m.action = Y3x + lJ8B + "_proxy_=form";
            this.bkA4E = a2x.beh3x({
                name: W3x,
                onload: function(d3x) {
                    var em5r = h3x.X3x(d3x);
                    h3x.s3x(em5r, "load", cvG2x.f3x(this));
                    fh5m.submit();
                    var bJL1x = (fh5m.nej_query || bb3x).value;
                    if (!bJL1x) return;
                    var fn5s = (fh5m.nej_mode || bb3x).value,
                        rN0x = (fh5m.nej_cookie || bb3x).value == "true";
                    this.ei5n = window.setTimeout(bkr4v.f3x(this, bJL1x, fn5s, rN0x), 100)
                }.f3x(this)
            })
        }
    }();
    Kr6l.kk7d = function() {
        this.z3x("onerror", {
            code: en5s.bWv6p,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        be4i = c3x("nej.h"),
        O3x = c3x("nej.ut.j");
    be4i.boC6w = function() {
        return new XMLHttpRequest
    };
    be4i.bkq4u = function(fn5s, baK2x, e3x) {
        var bz4D = !!baK2x ? {
            2: O3x.bkK5P
        } : {
            2: O3x.bkS5X,
            3: O3x.blS5X
        };
        return (bz4D[fn5s] || O3x.bck2x).A3x(e3x)
    }
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        be4i = c3x("nej.h");
    if (O3x.mW8O.trident) return;
    be4i.boC6w = function() {
        var NK7D = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cwp2x = function() {
            for (var i = 0, l = NK7D.length; i < l; i++) {
                try {
                    return new ActiveXObject(NK7D[i])
                } catch (e) {}
            }
            return null
        };
        return be4i.boC6w.eH5M(function(d3x) {
            if (!!window.XMLHttpRequest) return;
            d3x.stopped = !0;
            d3x.value = cwp2x()
        })
    }();
    be4i.bkq4u = function() {
        var Ew5B = {
            0: 2,
            1: 3
        };
        return be4i.bkq4u.eH5M(function(d3x) {
            var bf4j = d3x.args,
                fn5s = bf4j[0] || 0;
            bf4j[0] = !!bf4j[1] ? 2 : Ew5B[fn5s] || fn5s
        })
    }()
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        be4i = c3x("nej.h"),
        en5s = c3x("nej.g"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.ut.j"),
        nQ9H = {},
        IK6E = br4v;
    v3x.kk7d = function(fj5o) {
        var R3x = nQ9H[fj5o];
        if (!R3x) return this;
        R3x.req.kk7d();
        return this
    };
    v3x.bfw3x = function(dZ5e) {
        IK6E = dZ5e || br4v;
        return this
    };
    v3x.bl4p = function() {
        var jK7D = (location.protocol + "//" + location.host).toLowerCase();
        var cwu2x = function(Y3x) {
            var kV8N = k3x.ciO9F(Y3x);
            return !!kV8N && kV8N != jK7D
        };
        var cww2x = function(oW9N) {
            return (oW9N || bb3x)[en5s.ym3x] == en5s.HK6E
        };
        var cwB2x = function(e3x) {
            var baK2x = cww2x(e3x.headers);
            if (!cwu2x(e3x.url) && !baK2x) return O3x.bck2x.A3x(e3x);
            return be4i.bkq4u(e3x.mode, baK2x, e3x)
        };
        var DW4a = function(fj5o) {
            var R3x = nQ9H[fj5o];
            if (!R3x) return;
            if (!!R3x.req) R3x.req.T3x();
            delete nQ9H[fj5o]
        };
        var bMf2x = function(fj5o, u3x) {
            var R3x = nQ9H[fj5o];
            if (!R3x) return;
            DW4a(fj5o);
            try {
                var d3x = {
                    type: u3x,
                    result: arguments[2]
                };
                IK6E(d3x);
                if (!d3x.stopped)(R3x[u3x] || br4v)(d3x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yE3x = function(fj5o, j3x) {
            bMf2x(fj5o, "onload", j3x)
        };
        var BO4S = function(fj5o, ca4e) {
            bMf2x(fj5o, "onerror", ca4e)
        };
        return function(Y3x, e3x) {
            e3x = e3x || {};
            var fj5o = k3x.nM9D(),
                R3x = {
                    onload: e3x.onload || br4v,
                    onerror: e3x.onerror || br4v
                };
            nQ9H[fj5o] = R3x;
            e3x.onload = yE3x.f3x(null, fj5o);
            e3x.onerror = BO4S.f3x(null, fj5o);
            if (!!e3x.query) {
                var lJ8B = Y3x.indexOf("?") < 0 ? "?" : "&",
                    bv4z = e3x.query;
                if (k3x.lG8y(bv4z)) bv4z = k3x.cC4G(bv4z);
                if (!!bv4z) Y3x += lJ8B + bv4z
            }
            e3x.url = Y3x;
            R3x.req = cwB2x(e3x);
            R3x.req.boG6A(e3x.data);
            return fj5o
        }
    }();
    v3x.hV6P = function(fh5m, e3x) {
        var dM5R = {
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
        NEJ.EX(dM5R, e3x);
        dM5R.data = fh5m;
        dM5R.method = "POST";
        dM5R.timeout = 0;
        dM5R.headers[en5s.ym3x] = en5s.HK6E;
        return v3x.bl4p(fh5m.action, dM5R)
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        en5s = c3x("nej.g"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        O3x = c3x("nej.ut.j"),
        mG8y, gU6O = 6e4;
    if (!!O3x.Pb8T) return;
    O3x.Pb8T = NEJ.C();
    mG8y = O3x.Pb8T.N3x(I3x.cJ4N);
    mG8y.cw4A = function() {
        this.cF4J();
        this.Pg8Y = {
            onerror: this.cwC2x.f3x(this),
            onloaded: this.cwD2x.f3x(this)
        };
        if (!this.constructor.S3x) this.constructor.S3x = {
            loaded: {}
        }
    };
    mG8y.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.KA6u = e3x.version;
        this.bjE4I = e3x.timeout;
        this.Pg8Y.version = this.KA6u;
        this.Pg8Y.timeout = this.bjE4I
    };
    mG8y.bQt3x = function(K3x) {
        delete this.constructor.S3x[K3x]
    };
    mG8y.BZ4d = function(K3x) {
        return this.constructor.S3x[K3x]
    };
    mG8y.bRx4B = function(K3x, j3x) {
        this.constructor.S3x[K3x] = j3x
    };
    mG8y.bax2x = br4v;
    mG8y.bRH5M = function(gl6f) {
        h3x.hj6d(gl6f)
    };
    mG8y.bjA4E = function(gl6f) {
        gl6f.src = this.kF8x;
        document.head.appendChild(gl6f)
    };
    mG8y.Cd4h = function() {
        var R3x = this.BZ4d(this.kF8x);
        if (!R3x) return;
        window.clearTimeout(R3x.timer);
        this.bRH5M(R3x.request);
        delete R3x.bind;
        delete R3x.timer;
        delete R3x.request;
        this.bQt3x(this.kF8x);
        this.BZ4d("loaded")[this.kF8x] = !0
    };
    mG8y.baw2x = function(W3x) {
        var R3x = this.BZ4d(this.kF8x);
        if (!R3x) return;
        var i3x = R3x.bind;
        this.Cd4h();
        if (!!i3x && i3x.length > 0) {
            var cE4I;
            while (i3x.length) {
                cE4I = i3x.shift();
                try {
                    cE4I.z3x(W3x, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cE4I.T3x()
            }
        }
    };
    mG8y.dO5T = function(ca4e) {
        this.baw2x("onerror", ca4e)
    };
    mG8y.bSF5K = function() {
        this.baw2x("onloaded")
    };
    mG8y.cwF2x = function(Y3x) {
        this.constructor.A3x(this.Pg8Y).Ii6c(Y3x)
    };
    mG8y.bSX5c = function(ca4e) {
        var R3x = this.BZ4d(this.wW2x);
        if (!R3x) return;
        if (!!ca4e) R3x.error++;
        R3x.loaded++;
        if (R3x.loaded < R3x.total) return;
        this.bQt3x(this.wW2x);
        this.z3x(R3x.error > 0 ? "onerror" : "onloaded")
    };
    mG8y.cwC2x = function(ca4e) {
        this.bSX5c(!0)
    };
    mG8y.cwD2x = function() {
        this.bSX5c()
    };
    mG8y.Ii6c = function(Y3x) {
        Y3x = k3x.bqJ6D(Y3x);
        if (!Y3x) {
            this.z3x("onerror", {
                code: en5s.bxi8a,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kF8x = Y3x;
        if (!!this.KA6u) this.kF8x += (this.kF8x.indexOf("?") < 0 ? "?" : "&") + this.KA6u;
        if (this.BZ4d("loaded")[this.kF8x]) {
            try {
                this.z3x("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.T3x();
            return this
        }
        var R3x = this.BZ4d(this.kF8x),
            gl6f;
        if (!!R3x) {
            R3x.bind.unshift(this);
            R3x.timer = window.clearTimeout(R3x.timer)
        } else {
            gl6f = this.bax2x();
            R3x = {
                request: gl6f,
                bind: [this]
            };
            this.bRx4B(this.kF8x, R3x);
            h3x.s3x(gl6f, "load", this.bSF5K.f3x(this));
            h3x.s3x(gl6f, "error", this.dO5T.f3x(this, {
                code: en5s.bxd8V,
                message: "无法加载指定资源文件[" + this.kF8x + "]！"
            }))
        }
        if (this.bjE4I != 0) R3x.timer = window.setTimeout(this.dO5T.f3x(this, {
            code: en5s.bNN2x,
            message: "指定资源文件[" + this.kF8x + "]载入超时！"
        }), this.bjE4I || gU6O);
        if (!!gl6f) this.bjA4E(gl6f);
        this.z3x("onloading");
        return this
    };
    mG8y.bTj5o = function(i3x) {
        if (!i3x || !i3x.length) {
            this.z3x("onerror", {
                code: en5s.bxi8a,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wW2x = k3x.nM9D();
        var R3x = {
            error: 0,
            loaded: 0,
            total: i3x.length
        };
        this.bRx4B(this.wW2x, R3x);
        for (var i = 0, l = i3x.length; i < l; i++) {
            if (!i3x[i]) {
                R3x.total--;
                continue
            }
            this.cwF2x(i3x[i])
        }
        this.z3x("onloading");
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        be4i = c3x("nej.h"),
        O3x = c3x("nej.ut.j"),
        Pq8i;
    if (!!O3x.bji4m) return;
    O3x.bji4m = NEJ.C();
    Pq8i = O3x.bji4m.N3x(O3x.Pb8T);
    Pq8i.bax2x = function() {
        var eM5R = a2x.di5n("iframe");
        eM5R.width = 0;
        eM5R.height = 0;
        eM5R.style.display = "none";
        return eM5R
    };
    Pq8i.bjA4E = function(gl6f) {
        gl6f.src = this.kF8x;
        document.body.appendChild(gl6f)
    };
    Pq8i.dO5T = function(ca4e) {
        var eM5R = (this.BZ4d(this.kF8x) || bb3x).request;
        this.baw2x("onerror", ca4e);
        be4i.bem3x(eM5R)
    };
    Pq8i.bSF5K = function() {
        var mQ8I = null,
            eM5R = (this.BZ4d(this.kF8x) || bb3x).request;
        try {
            mQ8I = eM5R.contentWindow.document.body
        } catch (ex) {}
        this.baw2x("onloaded", mQ8I);
        be4i.bem3x(eM5R)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ut.j"),
        bje4i;
    if (!!O3x.ban2x) return;
    O3x.ban2x = NEJ.C();
    bje4i = O3x.ban2x.N3x(O3x.Pb8T);
    bje4i.bax2x = function() {
        return a2x.di5n("link")
    };
    bje4i.bjA4E = function(gl6f) {
        gl6f.href = this.kF8x;
        document.head.appendChild(gl6f)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ut.j"),
        bam2x;
    if (!!O3x.bak2x) return;
    O3x.bak2x = NEJ.C();
    bam2x = O3x.bak2x.N3x(O3x.Pb8T);
    bam2x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.bUa5f = e3x.async;
        this.biT4X = e3x.charset;
        this.Pg8Y.async = !1;
        this.Pg8Y.charset = this.biT4X
    };
    bam2x.bax2x = function() {
        var gl6f = a2x.di5n("script");
        if (this.bUa5f != null) gl6f.async = !!this.bUa5f;
        if (this.biT4X != null) gl6f.charset = this.biT4X;
        return gl6f
    };
    bam2x.bRH5M = function(gl6f) {
        a2x.cM4Q(gl6f)
    }
})();
(function() {
    var c3x = NEJ.P,
        v3x = c3x("nej.j"),
        O3x = c3x("nej.ut.j");
    v3x.cwG2x = function(Y3x, e3x) {
        O3x.bak2x.A3x(e3x).Ii6c(Y3x);
        return this
    };
    v3x.cwH2x = function(i3x, e3x) {
        O3x.bak2x.A3x(e3x).bTj5o(i3x);
        return this
    };
    v3x.cGv5A = function(Y3x, e3x) {
        O3x.ban2x.A3x(e3x).Ii6c(Y3x);
        return this
    };
    v3x.cxB3x = function(i3x, e3x) {
        O3x.ban2x.A3x(e3x).bTj5o(i3x);
        return this
    };
    v3x.bys8k = function(Y3x, e3x) {
        O3x.bji4m.A3x(e3x).Ii6c(Y3x);
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        R3x = {},
        te0x = +(new Date) + "-";
    a2x.cX5c = function() {
        var cz4D = 0;
        var Py8q = function() {
            if (cz4D > 0) return;
            cz4D = 0;
            h3x.z3x(document, "templateready");
            h3x.hj6d(document, "templateready")
        };
        var bai2x = function(gf6Z, e3x) {
            var cS4W = a2x.t3x(gf6Z, "src");
            if (!cS4W) return;
            e3x = e3x || bb3x;
            var ga6U = e3x.root;
            if (!ga6U) {
                ga6U = gf6Z.ownerDocument.location.href
            } else {
                ga6U = k3x.bqJ6D(ga6U)
            }
            cS4W = cS4W.split(",");
            k3x.bd4h(cS4W, function(D3x, r3x, i3x) {
                i3x[r3x] = k3x.bqJ6D(D3x, ga6U)
            });
            return cS4W
        };
        var cxK3x = function(gf6Z, e3x) {
            if (!gf6Z) return;
            var cS4W = bai2x(gf6Z, e3x);
            if (!!cS4W) v3x.cxB3x(cS4W, {
                version: a2x.t3x(gf6Z, "version")
            });
            a2x.bFZ0x(gf6Z.value)
        };
        var cxL3x = function(D3x) {
            cz4D--;
            a2x.bGt0x(D3x);
            Py8q()
        };
        var cxO3x = function(gf6Z, e3x) {
            if (!gf6Z) return;
            var cS4W = bai2x(gf6Z, e3x),
                fv5A = gf6Z.value;
            if (!!cS4W) {
                cz4D++;
                var e3x = {
                    version: a2x.t3x(gf6Z, "version"),
                    onloaded: cxL3x.f3x(null, fv5A)
                };
                window.setTimeout(v3x.cwH2x.f3x(v3x, cS4W, e3x), 0);
                return
            }
            a2x.bGt0x(fv5A)
        };
        var cxQ3x = function(mQ8I) {
            cz4D--;
            a2x.cX5c(mQ8I);
            Py8q()
        };
        var cxR3x = function(gf6Z, e3x) {
            if (!gf6Z) return;
            var cS4W = bai2x(gf6Z, e3x)[0];
            if (!!cS4W) {
                cz4D++;
                var e3x = {
                    version: a2x.t3x(gf6Z, "version"),
                    onloaded: cxQ3x
                };
                window.setTimeout(v3x.bys8k.f3x(v3x, cS4W, e3x), 0)
            }
        };
        var cxS3x = function(C3x, cK4O) {
            cz4D--;
            a2x.KF6z(C3x, cK4O || "");
            Py8q()
        };
        var cxT3x = function(gf6Z, e3x) {
            if (!gf6Z || !gf6Z.id) return;
            var C3x = gf6Z.id,
                cS4W = bai2x(gf6Z, e3x)[0];
            if (!!cS4W) {
                cz4D++;
                var Y3x = cS4W + (cS4W.indexOf("?") < 0 ? "?" : "&") + (a2x.t3x(gf6Z, "version") || ""),
                    e3x = {
                        type: "text",
                        method: "GET",
                        onload: cxS3x.f3x(null, C3x)
                    };
                window.setTimeout(v3x.bl4p.f3x(v3x, Y3x, e3x), 0)
            }
        };
        var cyq3x = function(g3x, e3x) {
            var u3x = g3x.name.toLowerCase();
            switch (u3x) {
                case "jst":
                    a2x.eC5H(g3x, !0);
                    return;
                case "txt":
                    a2x.KF6z(g3x.id, g3x.value || "");
                    return;
                case "ntp":
                    a2x.jq7j(g3x.value || "", g3x.id);
                    return;
                case "js":
                    cxO3x(g3x, e3x);
                    return;
                case "css":
                    cxK3x(g3x, e3x);
                    return;
                case "html":
                    cxR3x(g3x, e3x);
                    return;
                case "res":
                    cxT3x(g3x, e3x);
                    return
            }
        };
        I3x.fN6H.A3x({
            element: document,
            event: "templateready",
            oneventadd: Py8q
        });
        return function(F3x, e3x) {
            F3x = a2x.B3x(F3x);
            if (!!F3x) {
                var i3x = F3x.tagName == "TEXTAREA" ? [F3x] : F3x.getElementsByTagName("textarea");
                k3x.bd4h(i3x, function(g3x) {
                    cyq3x(g3x, e3x)
                });
                a2x.cM4Q(F3x, !0)
            }
            Py8q();
            return this
        }
    }();
    a2x.KF6z = function(K3x, D3x) {
        R3x[K3x] = D3x || "";
        return this
    };
    a2x.iN7G = function(K3x) {
        return R3x[K3x] || ""
    };
    a2x.jq7j = function(F3x, K3x) {
        K3x = K3x || k3x.nM9D();
        F3x = a2x.B3x(F3x) || F3x;
        a2x.KF6z(te0x + K3x, F3x);
        a2x.mR8J(F3x);
        return K3x
    };
    a2x.dF5K = function(K3x) {
        if (!K3x) return null;
        K3x = te0x + K3x;
        var D3x = a2x.iN7G(K3x);
        if (!D3x) return null;
        if (k3x.fB5G(D3x)) {
            D3x = a2x.os9j(D3x);
            a2x.KF6z(K3x, D3x)
        }
        return D3x.cloneNode(!0)
    };
    a2x.Co4s = function() {
        var IK6E = function(D3x, K3x) {
            return K3x == "offset" || K3x == "limit"
        };
        return function(i3x, p3x, e3x) {
            var bs4w = [];
            if (!i3x || !i3x.length || !p3x) return bs4w;
            e3x = e3x || bb3x;
            var dt5y = i3x.length,
                jO7H = parseInt(e3x.offset) || 0,
                fQ6K = Math.min(dt5y, jO7H + (parseInt(e3x.limit) || dt5y)),
                ct4x = {
                    total: i3x.length,
                    range: [jO7H, fQ6K]
                };
            NEJ.X(ct4x, e3x, IK6E);
            for (var i = jO7H, cE4I; i < fQ6K; i++) {
                ct4x.index = i;
                ct4x.data = i3x[i];
                cE4I = p3x.A3x(ct4x);
                var C3x = cE4I.Fo5t();
                R3x[C3x] = cE4I;
                cE4I.T3x = cE4I.T3x.eH5M(function(C3x, cE4I) {
                    delete R3x[C3x];
                    delete cE4I.T3x
                }.f3x(null, C3x, cE4I));
                bs4w.push(cE4I)
            }
            return bs4w
        }
    }();
    a2x.bCg9X = function(C3x) {
        return R3x[C3x]
    };
    a2x.cGf5k = function(ee5j, e3x) {
        e3x = e3x || bb3x;
        a2x.cX5c(e3x.tid || "template-box");
        h3x.s3x(document, "templateready", function() {
            ee5j.A3x().z3x("onshow", e3x)
        })
    };
    c3x("dbg").dumpTC = function() {
        return R3x
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        O3x = c3x("nej.ui"),
        b3x;
    if (!!O3x.ej5o) return;
    O3x.ej5o = NEJ.C();
    b3x = O3x.ej5o.N3x(I3x.cJ4N);
    b3x.cw4A = function() {
        this.cF4J();
        a2x.bVK6E();
        this.ch4l();
        this.bW4a()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.cys3x(e3x.clazz);
        this.bCN9E(e3x.parent)
    };
    b3x.bC4G = function() {
        this.bG4K();
        this.bCY9P();
        delete this.ge6Y;
        a2x.mR8J(this.o3x);
        a2x.x3x(this.o3x, this.bix4B);
        delete this.bix4B
    };
    b3x.ch4l = br4v;
    b3x.bW4a = function() {
        if (!this.cf4j) this.KJ6D();
        this.o3x = a2x.dF5K(this.cf4j);
        if (!this.o3x) this.o3x = a2x.di5n("div", this.md8V);
        a2x.y3x(this.o3x, this.md8V)
    };
    b3x.KJ6D = br4v;
    b3x.cys3x = function(ed5i) {
        this.bix4B = ed5i || "";
        a2x.y3x(this.o3x, this.bix4B)
    };
    b3x.czY3x = function() {
        if (!this.md8V) return;
        a2x.y3x(this.ge6Y, this.md8V + "-parent")
    };
    b3x.bCY9P = function() {
        if (!this.md8V) return;
        a2x.x3x(this.ge6Y, this.md8V + "-parent")
    };
    b3x.lK8C = function() {
        return this.o3x
    };
    b3x.bCN9E = function(bI4M) {
        if (!this.o3x) return this;
        this.bCY9P();
        if (k3x.gE6y(bI4M)) {
            this.ge6Y = bI4M(this.o3x)
        } else {
            this.ge6Y = a2x.B3x(bI4M);
            if (!!this.ge6Y) this.ge6Y.appendChild(this.o3x)
        }
        this.czY3x();
        return this
    };
    b3x.J3x = function() {
        if (!this.ge6Y || !this.o3x || this.o3x.parentNode == this.ge6Y) return this;
        this.ge6Y.appendChild(this.o3x);
        return this
    };
    b3x.bt4x = function() {
        a2x.mR8J(this.o3x);
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        be4i = c3x("nej.h"),
        O3x = c3x("nej.ui"),
        wQ2x, bEH0x;
    if (!!O3x.PJ8B) return;
    O3x.PJ8B = NEJ.C();
    wQ2x = O3x.PJ8B.N3x(O3x.ej5o);
    bEH0x = O3x.PJ8B.cs4w;
    wQ2x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.xx3x("oncontentready", e3x.oncontentready || this.cAb3x.f3x(this));
        this.cAw3x = !!e3x.nohack;
        this.cAB3x = !!e3x.destroyable;
        this.KK6E(e3x.content)
    };
    wQ2x.bC4G = function() {
        this.z3x("onbeforerecycle");
        this.bG4K();
        this.bad1x();
        this.KK6E("");
        a2x.fa5f(this.o3x, {
            top: "",
            left: ""
        })
    };
    wQ2x.cAb3x = br4v;
    wQ2x.KL6F = br4v;
    wQ2x.bad1x = function() {
        a2x.mR8J(this.o3x);
        if (!!this.nK9B) {
            this.nK9B = be4i.bvG7z(this.o3x);
            delete this.nK9B
        }
    };
    wQ2x.KK6E = function(bo4s) {
        if (!this.o3x || !this.Cr4v || bo4s == null) return this;
        bo4s = bo4s || "";
        k3x.fB5G(bo4s) ? this.Cr4v.innerHTML = bo4s : this.Cr4v.appendChild(bo4s);
        this.z3x("oncontentready", this.Cr4v);
        return this
    };
    wQ2x.gK6E = function(bi4m) {
        var D3x = bi4m.top;
        if (D3x != null) {
            D3x += "px";
            a2x.ba3x(this.o3x, "top", D3x);
            a2x.ba3x(this.nK9B, "top", D3x)
        }
        var D3x = bi4m.left;
        if (D3x != null) {
            D3x += "px";
            a2x.ba3x(this.o3x, "left", D3x);
            a2x.ba3x(this.nK9B, "left", D3x)
        }
        return this
    };
    wQ2x.J3x = function() {
        a2x.ba3x(this.o3x, "visibility", "hidden");
        bEH0x.J3x.apply(this, arguments);
        this.KL6F();
        a2x.ba3x(this.o3x, "visibility", "");
        if (!this.cAw3x) {
            this.nK9B = be4i.nK9B(this.o3x)
        }
        return this
    };
    wQ2x.bt4x = function() {
        this.cAB3x ? this.T3x() : this.bad1x();
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ui"),
        Cs4w;
    if (!!O3x.baa1x) return;
    O3x.baa1x = NEJ.C();
    Cs4w = O3x.baa1x.N3x(O3x.ej5o);
    Cs4w.bm4q = function(e3x) {
        this.PR8J();
        this.bn4r(this.cAG3x(e3x));
        this.cg4k.onbeforerecycle = this.T3x.f3x(this);
        this.oK9B = this.bie4i()
    };
    Cs4w.bC4G = function() {
        this.z3x("onbeforerecycle");
        this.bG4K();
        delete this.cg4k;
        a2x.mR8J(this.o3x);
        var Cu4y = this.oK9B;
        if (!!Cu4y) {
            delete this.oK9B;
            Cu4y.T3x()
        }
    };
    Cs4w.bie4i = br4v;
    Cs4w.cAG3x = function(e3x) {
        var m3x = {};
        k3x.eI5N(e3x, function(p3x, K3x) {
            this.cg4k.hasOwnProperty(K3x) ? this.cg4k[K3x] = p3x : m3x[K3x] = p3x
        }, this);
        return m3x
    };
    Cs4w.PR8J = function() {
        this.cg4k = {
            clazz: "",
            parent: null,
            content: this.o3x,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    };
    Cs4w.J3x = function() {
        if (!!this.oK9B) this.oK9B.J3x();
        this.z3x("onaftershow");
        return this
    };
    Cs4w.bt4x = function() {
        if (!!this.oK9B) this.oK9B.bt4x();
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        en5s = c3x("nej.g"),
        be4i = c3x("nej.h"),
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        O3x = c3x("nej.ui"),
        VW0x, bGM1x;
    if (!!O3x.KN6H) return;
    var jd7W = a2x.ty0x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + en5s.bwJ8B + ");}");
    O3x.KN6H = NEJ.C();
    VW0x = O3x.KN6H.N3x(O3x.ej5o);
    bGM1x = O3x.KN6H.cs4w;
    VW0x.bm4q = function(e3x) {
        this.bn4r(e3x);
        var bo4s = e3x.content || "&nbsp;";
        k3x.fB5G(bo4s) ? this.o3x.innerHTML = bo4s : this.o3x.appendChild(bo4s)
    };
    VW0x.bC4G = function() {
        this.bG4K();
        this.o3x.innerHTML = "&nbsp;"
    };
    VW0x.ch4l = function() {
        this.md8V = jd7W
    };
    VW0x.J3x = function() {
        be4i.bvJ7C(this.o3x);
        bGM1x.J3x.apply(this, arguments);
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        O3x = c3x("nej.ut"),
        wL2x;
    if (!!O3x.um1x) return;
    O3x.um1x = NEJ.C();
    wL2x = O3x.um1x.N3x(O3x.cJ4N);
    wL2x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.cBc3x = !!e3x.overflow;
        this.o3x = a2x.B3x(e3x.body);
        this.Cz4D = a2x.B3x(e3x.view) || a2x.bDj9a(this.o3x);
        this.bHS1x = a2x.B3x(e3x.mbar) || this.o3x;
        this.ZW1x = parseInt(e3x.direction) || 0;
        if (!!e3x.isRelative) {
            this.o3x.style.position = "relative";
            this.bhU4Y = true;
            this.bhS4W()
        }
        this.bX4b([
            [document, "mouseup", this.bhR4V.f3x(this)],
            [document, "mousemove", this.bhP4T.f3x(this)],
            [this.bHS1x, "mousedown", this.PW8O.f3x(this)]
        ])
    };
    wL2x.bhS4W = function() {
        if (!!this.bhU4Y) {
            this.KR7K = a2x.hO6I(this.o3x, this.Cz4D);
            this.KR7K.x -= parseInt(a2x.df5k(this.o3x, "left")) || 0;
            this.KR7K.y -= parseInt(a2x.df5k(this.o3x, "top")) || 0
        }
    };
    wL2x.bC4G = function() {
        this.bG4K();
        delete this.o3x;
        delete this.bHS1x;
        delete this.Cz4D
    };
    wL2x.bhy4C = function() {
        return {
            x: Math.max(this.Cz4D.clientWidth, this.Cz4D.scrollWidth) - this.o3x.offsetWidth,
            y: Math.max(this.Cz4D.clientHeight, this.Cz4D.scrollHeight) - this.o3x.offsetHeight
        }
    };
    wL2x.PW8O = function(d3x) {
        h3x.bh4l(d3x);
        if (!!this.hW6Q) return;
        this.hW6Q = {
            x: h3x.jD7w(d3x),
            y: h3x.lX8P(d3x)
        };
        this.bJH1x = this.bhy4C();
        this.z3x("ondragstart", d3x)
    };
    wL2x.bhP4T = function(d3x) {
        if (!this.hW6Q) return;
        var bi4m = {
            x: h3x.jD7w(d3x),
            y: h3x.lX8P(d3x)
        };
        var pI9z = bi4m.x - this.hW6Q.x,
            pW9N = bi4m.y - this.hW6Q.y,
            D3x = {
                top: (parseInt(a2x.df5k(this.o3x, "top")) || 0) + pW9N,
                left: (parseInt(a2x.df5k(this.o3x, "left")) || 0) + pI9z
            };
        if (this.bhU4Y) {
            this.bhS4W();
            D3x.top = D3x.top + this.KR7K.y;
            D3x.left = D3x.left + this.KR7K.x
        }
        this.hW6Q = bi4m;
        this.gK6E(D3x)
    };
    wL2x.bhR4V = function(d3x) {
        if (!this.hW6Q) return;
        delete this.bJH1x;
        delete this.hW6Q;
        this.z3x("ondragend", this.bhr4v())
    };
    wL2x.gK6E = function(d3x) {
        if (!this.cBc3x) {
            var bJZ1x = this.bJH1x || this.bhy4C();
            d3x.top = Math.min(bJZ1x.y, Math.max(0, d3x.top));
            d3x.left = Math.min(bJZ1x.x, Math.max(0, d3x.left))
        }
        var cj4n = this.o3x.style;
        if (this.bhU4Y) {
            this.bhS4W();
            d3x.top = d3x.top - this.KR7K.y;
            d3x.left = d3x.left - this.KR7K.x
        }
        if (this.ZW1x == 0 || this.ZW1x == 2) cj4n.top = d3x.top + "px";
        if (this.ZW1x == 0 || this.ZW1x == 1) cj4n.left = d3x.left + "px";
        this.z3x("onchange", d3x);
        return this
    };
    wL2x.bhr4v = function() {
        return {
            left: parseInt(a2x.df5k(this.o3x, "left")) || 0,
            top: parseInt(a2x.df5k(this.o3x, "top")) || 0
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = NEJ.P("nej.e"),
        h3x = NEJ.P("nej.v"),
        k3x = NEJ.P("nej.u"),
        I3x = NEJ.P("nej.ut"),
        O3x = NEJ.P("nej.ui"),
        jd7W, gi6c, b3x, L3x;
    if (!!O3x.ZL1x) return;
    O3x.ZL1x = NEJ.C();
    b3x = O3x.ZL1x.N3x(O3x.PJ8B);
    L3x = O3x.ZL1x.cs4w;
    b3x.cw4A = function() {
        this.sp0x = {};
        this.kL8D = {
            onchange: this.bhP4T.f3x(this)
        };
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.cBG4K(e3x.mask);
        this.cBO4S(e3x.align);
        this.CL4P(e3x.title);
        if (!e3x.draggable) return;
        this.iT7M = I3x.um1x.A3x(this.kL8D)
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.qP0x;
        delete this.Qk8c;
        if (!!this.CO4S) {
            this.CO4S.T3x();
            delete this.CO4S
        }
        if (!!this.iT7M) {
            this.iT7M.T3x();
            delete this.iT7M
        }
    };
    b3x.ch4l = function() {
        this.md8V = jd7W;
        this.cf4j = gi6c
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.dm5r(this.o3x);
        this.Cr4v = i3x[1];
        this.kL8D.mbar = i3x[0];
        this.kL8D.body = this.o3x;
        h3x.s3x(i3x[2], "mousedown", this.cCg4k.f3x(this));
        h3x.s3x(this.kL8D.mbar, "mousedown", this.PW8O.f3x(this));
        this.bNg2x = a2x.dm5r(this.kL8D.mbar)[0]
    };
    b3x.cCg4k = function(d3x) {
        h3x.bh4l(d3x);
        this.z3x("onclose", d3x);
        if (!d3x.stopped) {
            this.bt4x()
        }
    };
    b3x.PW8O = function(d3x) {
        h3x.z3x(document, "click")
    };
    b3x.bhP4T = function(d3x) {
        if (!this.nK9B) return;
        a2x.fa5f(this.nK9B, {
            top: d3x.top + "px",
            left: d3x.left + "px"
        })
    };
    b3x.KL6F = function() {
        var ez5E = [function() {
                return 0
            }, function(ov9m, mU8M, bi4m, K3x) {
                if (K3x == "top" && window.top != window.self) {
                    var ZG1x = 0,
                        Eo5t = 0;
                    if (top.g_topBarHeight) ZG1x = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) Eo5t = top.g_bottomBarHeight;
                    if (ov9m.top <= ZG1x) {
                        var bhb4f = Math.max(0, (mU8M.height - (ZG1x - ov9m.top) - Eo5t - bi4m.height) / 2);
                        return bhb4f + ZG1x
                    } else {
                        var bhb4f = Math.max(0, (mU8M.height - Eo5t - bi4m.height) / 2);
                        return bhb4f + ov9m.top
                    }
                }
                return Math.max(0, ov9m[K3x] + (mU8M[iE7x[K3x]] - bi4m[iE7x[K3x]]) / 2)
            }, function(ov9m, mU8M, bi4m, K3x) {
                return ov9m[K3x] + (mU8M[iE7x[K3x]] - bi4m[iE7x[K3x]])
            }],
            cCx4B = ["left", "top"],
            iE7x = {
                left: "width",
                top: "height"
            };
        return function() {
            var D3x = {},
                cj4n = this.o3x.style,
                jI7B = a2x.pn9e(),
                ov9m = {
                    left: jI7B.scrollLeft,
                    top: jI7B.scrollTop
                },
                mU8M = {
                    width: jI7B.clientWidth,
                    height: jI7B.clientHeight
                },
                bi4m = {
                    width: this.o3x.offsetWidth,
                    height: this.o3x.offsetHeight
                },
                dq5v = {
                    left: jI7B.clientWidth - this.o3x.offsetWidth,
                    top: jI7B.clientHeight - this.o3x.offsetHeight
                };
            k3x.bd4h(cCx4B, function(K3x, r3x) {
                var dv5A = ez5E[this.qP0x[r3x]];
                if (!dv5A) return;
                D3x[K3x] = dv5A(ov9m, mU8M, bi4m, K3x)
            }, this);
            this.gK6E(D3x)
        }
    }();
    b3x.cCC4G = function() {
        if (!this.CO4S) {
            if (!this.Qk8c) return;
            this.sp0x.parent = this.ge6Y;
            this.CO4S = this.Qk8c.A3x(this.sp0x)
        }
        this.CO4S.J3x()
    };
    b3x.bad1x = function() {
        if (!!this.CO4S) this.CO4S.bt4x();
        L3x.bad1x.apply(this, arguments)
    };
    b3x.cBG4K = function(lk8c) {
        if (!!lk8c) {
            if (lk8c instanceof O3x.KN6H) {
                this.CO4S = lk8c;
                return
            }
            if (k3x.gE6y(lk8c)) {
                this.Qk8c = lk8c;
                return
            }
            this.Qk8c = O3x.KN6H;
            if (k3x.fB5G(lk8c)) this.sp0x.clazz = lk8c;
            return
        }
        this.Qk8c = null
    };
    b3x.CL4P = function(eo5t, dW5b) {
        if (!!this.bNg2x) {
            var VX0x = !dW5b ? "innerText" : "innerHTML";
            this.bNg2x[VX0x] = eo5t || "标题"
        }
        return this
    };
    b3x.cBO4S = function() {
        var dg5l = /\s+/,
            cCD4H = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            },
            cCE4I = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function(oo9f) {
            this.qP0x = (oo9f || "").split(dg5l);
            var ck4o = cCD4H[this.qP0x[0]];
            if (ck4o == null) ck4o = 1;
            this.qP0x[0] = ck4o;
            var ck4o = cCE4I[this.qP0x[1]];
            if (ck4o == null) ck4o = 1;
            this.qP0x[1] = ck4o;
            return this
        }
    }();
    b3x.J3x = function() {
        L3x.J3x.apply(this, arguments);
        this.cCC4G();
        return this
    };
    jd7W = a2x.ty0x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gi6c = a2x.jq7j('<div class="' + jd7W + '"><div class="zbar"><div class="zttl f-thide">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c3x = NEJ.P,
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ui"),
        bha4e;
    if (!!O3x.ZE1x) return;
    O3x.ZE1x = NEJ.C();
    bha4e = O3x.ZE1x.N3x(O3x.baa1x);
    bha4e.bie4i = function() {
        return O3x.ZL1x.A3x(this.cg4k)
    };
    bha4e.PR8J = function() {
        O3x.ZE1x.cs4w.PR8J.apply(this, arguments);
        this.cg4k.mask = null;
        this.cg4k.title = "标题";
        this.cg4k.align = "";
        this.cg4k.draggable = !1;
        this.cg4k.onclose = null
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        bc4g = c3x("nej.ui"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.eq5v = NEJ.C();
    b3x = n3x.eq5v.N3x(bc4g.ZE1x);
    b3x.bm4q = function(e3x) {
        e3x.clazz = "m-layer z-show " + (e3x.clazz || "");
        e3x.nohack = true;
        e3x.draggable = true;
        this.bn4r(e3x)
    };
    b3x.dX5c = function(g3x, bF4J) {
        if (!g3x) return;
        a2x.ba3x(g3x, "display", !bF4J ? "none" : "");
        g3x.lastChild.innerText = bF4J || ""
    };
    b3x.dV5a = function(gN6H, dc5h, Qs8k, Qt8l) {
        var ee5j = "js-lock";
        if (dc5h === undefined) return a2x.bE4I(gN6H, ee5j);
        !dc5h ? a2x.x3x(gN6H, ee5j) : a2x.y3x(gN6H, ee5j);
        gN6H.firstChild.innerText = !dc5h ? Qs8k : Qt8l
    };
    n3x.eq5v.J3x = function(e3x) {
        e3x = e3x || {};
        if (e3x.mask === undefined) e3x.mask = "m-mask";
        if (e3x.parent === undefined) e3x.parent = document.body;
        if (e3x.draggable === undefined) e3x.draggable = true;
        !!this.fl5q && this.fl5q.T3x();
        this.fl5q = this.A3x(e3x);
        this.fl5q.J3x(e3x);
        return this.fl5q
    };
    n3x.eq5v.bt4x = function() {
        !!this.fl5q && this.fl5q.T3x()
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.bgP3x = NEJ.C();
    b3x = n3x.bgP3x.N3x(n3x.eq5v);
    L3x = n3x.bgP3x.cs4w;
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        if (e3x.bubble === undefined) e3x.bubble = true;
        this.Qv8n = e3x.bubble;
        this.qD9u = e3x.message || ""
    };
    b3x.ch4l = function() {
        this.cf4j = a2x.jq7j('<div class="lyct f-cb f-tc"></div>')
    };
    b3x.bW4a = function() {
        this.ci4m();
        h3x.s3x(this.o3x, "click", this.cL4P.f3x(this))
    };
    b3x.cL4P = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action");
        if (!g3x) return;
        if (g3x.href) h3x.cn4r(d3x);
        if (a2x.t3x(g3x, "action") == "close") this.bt4x();
        if (this.Qv8n === !1) h3x.uj1x(d3x);
        this.z3x("onaction", a2x.t3x(g3x, "action"))
    };
    b3x.J3x = function() {
        L3x.J3x.call(this);
        this.o3x.innerHTML = this.qD9u
    };
    var gG6A = a2x.eC5H('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l3x.ne8W = function() {
        var eh5m;
        var cE4I;
        var bgN3x = function(eO5T, V3x) {
            if (k3x.gE6y(eO5T, "function") && eO5T(V3x) != -1) cE4I.T3x()
        };
        var Da4e = function() {
            !!cE4I && cE4I.bt4x()
        };
        return function(e3x) {
            clearTimeout(eh5m);
            e3x = e3x || {};
            e3x.title = e3x.title || "提示";
            e3x.clazz = e3x.clazz || "";
            e3x.parent = e3x.parent || document.body;
            e3x.buttons = e3x.buttons || [];
            e3x.message = a2x.cc4g(gG6A, e3x);
            e3x.onaction = bgN3x.f3x(null, e3x.action);
            if (e3x.mask === undefined) e3x.mask = true;
            if (e3x.draggable === undefined) e3x.draggable = true;
            !!cE4I && cE4I.T3x();
            cE4I = n3x.bgP3x.A3x(e3x);
            cE4I.J3x();
            if (e3x.autoclose) eh5m = setTimeout(Da4e.f3x(null), 2e3);
            return cE4I
        }
    }();
    l3x.ft5y = function(e3x) {
        e3x = e3x || {};
        e3x.clazz = e3x.clazz || "m-layer-w1";
        e3x.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e3x.btntxt || "确定"
        }];
        var cE4I = l3x.ne8W(e3x);
        return cE4I
    };
    l3x.hr6l = function(e3x) {
        e3x = e3x || {};
        e3x.clazz = e3x.clazz || "m-layer-w2";
        e3x.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e3x.btnok || "确定",
            style: e3x.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e3x.btncc || "取消",
            style: e3x.ccstyle || ""
        }];
        var cE4I = l3x.ne8W(e3x);
        return cE4I
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u");
    a2x.cCJ4N = function() {
        var gO6I = /[\r\n]/gi,
            R3x = {};
        var cCP4T = function(cN4R) {
            return (cN4R || "").replace(gO6I, "aa").length
        };
        var bUK5P = function(C3x) {
            var bg4k = R3x[C3x],
                bVc5h = a2x.B3x(C3x),
                qU0x = a2x.B3x(C3x + "-counter");
            if (!bVc5h || !bg4k) return;
            var d3x = {
                input: bVc5h.value
            };
            d3x.length = bg4k.onlength(d3x.input);
            d3x.delta = bg4k.max - d3x.length;
            bg4k.onchange(d3x);
            qU0x.innerHTML = d3x.value || "剩余" + d3x.delta + "个字"
        };
        return function(F3x, e3x) {
            var C3x = a2x.lQ8I(F3x);
            if (!C3x || !!R3x[C3x]) return;
            var bg4k = NEJ.X({}, e3x);
            bg4k.onchange = bg4k.onchange || br4v;
            bg4k.onlength = cCP4T;
            if (!bg4k.max) {
                var bVj5o = parseInt(a2x.gH6B(C3x, "maxlength")),
                    bVF6z = parseInt(a2x.t3x(C3x, "maxLength"));
                bg4k.max = bVj5o || bVF6z || 100;
                if (!bVj5o && !!bVF6z) bg4k.onlength = k3x.fx5C
            }
            R3x[C3x] = bg4k;
            h3x.s3x(C3x, "input", bUK5P.f3x(null, C3x));
            var g3x = a2x.IV6P(C3x, {
                nid: bg4k.nid || "js-counter",
                clazz: bg4k.clazz
            });
            bg4k.xid = C3x + "-counter";
            g3x.id = bg4k.xid;
            bUK5P(C3x)
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        be4i = c3x("nej.h");
    be4i.bgL3x = function(F3x, ed5i) {}
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        O3x = c3x("nej.p"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        be4i = c3x("nej.h");
    if (O3x.mW8O.trident) return;
    be4i.bgL3x = function() {
        var R3x = {};
        var Iz6t = function(d3x) {
            var dn5s = h3x.X3x(d3x);
            if (!!dn5s.value) return;
            a2x.ba3x(a2x.IV6P(dn5s), "display", "none")
        };
        var Gx5C = function(d3x) {
            var dn5s = h3x.X3x(d3x);
            if (!!dn5s.value) return;
            a2x.ba3x(a2x.IV6P(dn5s), "display", "")
        };
        var cCS4W = function(dn5s, ed5i) {
            var C3x = a2x.lQ8I(dn5s),
                iV7O = a2x.IV6P(dn5s, {
                    tag: "label",
                    clazz: ed5i
                });
            iV7O.htmlFor = C3x;
            var cK4O = a2x.gH6B(dn5s, "placeholder") || "";
            iV7O.innerText = cK4O == "null" ? "" : cK4O;
            var ce4i = dn5s.offsetHeight + "px";
            a2x.fa5f(iV7O, {
                left: 0,
                display: !dn5s.value ? "" : "none"
            })
        };
        return be4i.bgL3x.eH5M(function(d3x) {
            d3x.stopped = !0;
            var bf4j = d3x.args,
                dn5s = a2x.B3x(bf4j[0]);
            if (!!R3x[dn5s.id]) return;
            cCS4W(dn5s, bf4j[1]);
            R3x[dn5s.id] = !0;
            h3x.s3x(dn5s, "blur", Gx5C.f3x(null));
            h3x.s3x(dn5s, "focus", Iz6t.f3x(null))
        })
    }()
})();
(function() {
    var c3x = NEJ.P,
        be4i = c3x("nej.h"),
        a2x = c3x("nej.e"),
        db5g = c3x("nej.x");
    a2x.gv6p = db5g.gv6p = function(F3x, ed5i) {
        be4i.bgL3x(F3x, a2x.t3x(F3x, "holder") || ed5i || "js-placeholder");
        return this
    };
    db5g.isChange = !0
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        hN6H;
    if (!!O3x.Qy8q) return;
    O3x.Qy8q = NEJ.C();
    hN6H = O3x.Qy8q.N3x(O3x.cJ4N);
    hN6H.cw4A = function() {
        this.cF4J();
        this.GQ5V = {
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
    hN6H.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.gt6n = document.forms[e3x.form] || a2x.B3x(e3x.form);
        this.bX4b([
            [this.gt6n, "keypress", this.cCW4a.f3x(this)]
        ]);
        this.qD9u = e3x.message || {};
        this.qD9u.pass = this.qD9u.pass || "&nbsp;";
        var fn5s = this.qn9e(this.gt6n, "focusMode", 1);
        if (!isNaN(fn5s)) {
            this.bzK9B = {
                mode: fn5s,
                clazz: e3x.focus
            }
        }
        this.Dd4h = e3x.holder;
        this.GQ5V.tp.clazz = "js-mhd " + (e3x.tip || "js-tip");
        this.GQ5V.ok.clazz = "js-mhd " + (e3x.pass || "js-pass");
        this.GQ5V.er.clazz = "js-mhd " + (e3x.error || "js-error");
        this.bzU9L = e3x.invalid || "js-invalid";
        this.cDf4j(e3x);
        this.gM6G();
        if (!!this.Df4j) this.Df4j.focus()
    };
    hN6H.bC4G = function() {
        this.bG4K();
        delete this.qD9u;
        delete this.Df4j;
        delete this.Hj5o;
        delete this.gt6n;
        delete this.bAY9P;
        delete this.QE8w
    };
    hN6H.qn9e = function(g3x, wx2x, u3x) {
        var D3x = a2x.t3x(g3x, wx2x);
        switch (u3x) {
            case 1:
                return parseInt(D3x);
            case 2:
                return (D3x || "").toLowerCase() == "true";
            case 3:
                return this.bgp3x(D3x)
        }
        return D3x
    };
    hN6H.Dh4l = function(D3x, u3x) {
        if (u3x == "date") return this.bgp3x(D3x);
        return parseInt(D3x)
    };
    hN6H.Zu1x = function() {
        var kf7Y = /^button|submit|reset|image|hidden|file$/i;
        return function(g3x) {
            g3x = this.B3x(g3x) || g3x;
            var u3x = g3x.type;
            return !!g3x.name && !kf7Y.test(g3x.type || "")
        }
    }();
    hN6H.cDj4n = function() {
        var kf7Y = /^hidden$/i;
        return function(g3x) {
            if (this.Zu1x(g3x)) return !0;
            g3x = this.B3x(g3x) || g3x;
            var u3x = g3x.type || "";
            return kf7Y.test(u3x)
        }
    }();
    hN6H.bgp3x = function() {
        var dg5l = /[-\/]/;
        var cDY4c = function(D3x) {
            if (!D3x) return "";
            D3x = D3x.split(dg5l);
            D3x.push(D3x.shift());
            return D3x.join("/")
        };
        return function(D3x) {
            if ((D3x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cDY4c(D3x))
        }
    }();
    hN6H.cCW4a = function(d3x) {
        if (d3x.keyCode != 13) return;
        this.z3x("onenter", d3x)
    };
    hN6H.cEg4k = function(C3x, W3x) {
        var st0x = this.QE8w[W3x],
            D3x = this.qn9e(C3x, W3x);
        if (!D3x || !st0x) return;
        this.Zt1x(C3x, st0x);
        this.bgg3x(C3x, W3x, D3x)
    };
    hN6H.cEi4m = function(C3x, W3x) {
        try {
            var bCk9b = this.qn9e(C3x, W3x);
            if (!bCk9b) return;
            var D3x = new RegExp(bCk9b);
            this.bgg3x(C3x, W3x, D3x);
            this.Zt1x(C3x, this.QE8w[W3x])
        } catch (e) {}
    };
    hN6H.cEp4t = function(C3x, W3x) {
        var st0x = this.QE8w[W3x];
        if (!!st0x && this.qn9e(C3x, W3x, 2)) this.Zt1x(C3x, st0x)
    };
    hN6H.bga3x = function(C3x, W3x, D3x) {
        D3x = parseInt(D3x);
        if (isNaN(D3x)) return;
        this.bgg3x(C3x, W3x, D3x);
        this.Zt1x(C3x, this.QE8w[W3x])
    };
    hN6H.bCv9m = function(C3x, W3x) {
        this.bga3x(C3x, W3x, this.qn9e(C3x, W3x))
    };
    hN6H.bCz9q = function(C3x, W3x) {
        this.bga3x(C3x, W3x, a2x.gH6B(C3x, W3x))
    };
    hN6H.bCL9C = function(C3x, W3x, u3x) {
        var D3x = this.Dh4l(this.qn9e(C3x, W3x), this.qn9e(C3x, "type"));
        this.bga3x(C3x, W3x, D3x)
    };
    hN6H.cEu4y = function() {
        var gO6I = /^input|textarea$/i;
        var Iz6t = function(d3x) {
            this.qa9R(h3x.X3x(d3x))
        };
        var Gx5C = function(d3x) {
            var g3x = h3x.X3x(d3x);
            if (!this.qn9e(g3x, "ignore", 2)) {
                this.bCO9F(g3x)
            }
        };
        return function(g3x) {
            if (this.qn9e(g3x, "autoFocus", 2)) this.Df4j = g3x;
            var qE9v = a2x.gH6B(g3x, "placeholder");
            if (!!qE9v && qE9v != "null") a2x.gv6p(g3x, this.Dd4h);
            if (!!this.bzK9B && gO6I.test(g3x.tagName)) a2x.mt8l(g3x, this.bzK9B);
            var C3x = a2x.lQ8I(g3x);
            this.cEp4t(C3x, "required");
            this.cEg4k(C3x, "type");
            this.cEi4m(C3x, "pattern");
            this.bCz9q(C3x, "maxlength");
            this.bCz9q(C3x, "minlength");
            this.bCv9m(C3x, "maxLength");
            this.bCv9m(C3x, "minLength");
            this.bCL9C(C3x, "min");
            this.bCL9C(C3x, "max");
            var W3x = g3x.name;
            this.qD9u[W3x + "-tip"] = this.qn9e(g3x, "tip");
            this.qD9u[W3x + "-error"] = this.qn9e(g3x, "message");
            this.qa9R(g3x);
            var bx4B = this.Hj5o[C3x],
                j3x = (bx4B || bb3x).data || bb3x,
                MY7R = this.qn9e(g3x, "counter", 2);
            if (MY7R && (j3x.maxlength || j3x.maxLength)) {
                a2x.cCJ4N(C3x, {
                    nid: this.GQ5V.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bx4B && gO6I.test(g3x.tagName)) {
                this.bX4b([
                    [g3x, "focus", Iz6t.f3x(this)],
                    [g3x, "blur", Gx5C.f3x(this)]
                ])
            } else if (this.qn9e(g3x, "focus", 2)) {
                this.bX4b([
                    [g3x, "focus", Iz6t.f3x(this)]
                ])
            }
        }
    }();
    hN6H.cDf4j = function() {
        var DO4S = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bgp3x(v))
            }
        };
        var cEv4z = {
            required: function(g3x) {
                var u3x = g3x.type,
                    cEB4F = !g3x.value,
                    cEE4I = (u3x == "checkbox" || u3x == "radio") && !g3x.checked;
                if (cEE4I || cEB4F) return -1
            },
            type: function(g3x, e3x) {
                var dg5l = this.bAY9P[e3x.type],
                    fv5A = g3x.value.trim(),
                    cEG4K = !!dg5l.test && !dg5l.test(fv5A),
                    cFa4e = k3x.gE6y(dg5l) && !dg5l.call(this, fv5A);
                if (cEG4K || cFa4e) return -2
            },
            pattern: function(g3x, e3x) {
                if (!e3x.pattern.test(g3x.value)) return -3
            },
            maxlength: function(g3x, e3x) {
                if (g3x.value.length > e3x.maxlength) return -4
            },
            minlength: function(g3x, e3x) {
                if (g3x.value.length < e3x.minlength) return -5
            },
            maxLength: function(g3x, e3x) {
                if (k3x.fx5C(g3x.value) > e3x.maxLength) return -4
            },
            minLength: function(g3x, e3x) {
                if (k3x.fx5C(g3x.value) < e3x.minLength) return -5
            },
            min: function(g3x, e3x) {
                var gW6Q = this.Dh4l(g3x.value, e3x.type);
                if (isNaN(gW6Q) || gW6Q < e3x.min) return -6
            },
            max: function(g3x, e3x) {
                var gW6Q = this.Dh4l(g3x.value, e3x.type);
                if (isNaN(gW6Q) || gW6Q > e3x.max) return -7
            }
        };
        return function(e3x) {
            this.bAY9P = NEJ.X(NEJ.X({}, DO4S), e3x.type);
            this.QE8w = NEJ.X(NEJ.X({}, cEv4z), e3x.attr)
        }
    }();
    hN6H.Zt1x = function(C3x, yv3x) {
        if (!k3x.gE6y(yv3x)) return;
        var bx4B = this.Hj5o[C3x];
        if (!bx4B || !bx4B.func) {
            bx4B = bx4B || {};
            bx4B.func = [];
            this.Hj5o[C3x] = bx4B
        }
        bx4B.func.push(yv3x)
    };
    hN6H.bgg3x = function(C3x, W3x, D3x) {
        if (!W3x) return;
        var bx4B = this.Hj5o[C3x];
        if (!bx4B || !bx4B.data) {
            bx4B = bx4B || {};
            bx4B.data = {};
            this.Hj5o[C3x] = bx4B
        }
        bx4B.data[W3x] = D3x
    };
    hN6H.bCO9F = function(g3x) {
        g3x = this.B3x(g3x) || g3x;
        var bx4B = this.Hj5o[a2x.lQ8I(g3x)];
        if (!g3x || !bx4B || !this.Zu1x(g3x)) return !0;
        var m3x;
        k3x.eI5N(bx4B.func, function(ez5E) {
            m3x = ez5E.call(this, g3x, bx4B.data);
            return m3x != null
        }, this);
        if (m3x == null) {
            var d3x = {
                target: g3x,
                form: this.gt6n
            };
            this.z3x("oncheck", d3x);
            m3x = d3x.value
        }
        var d3x = {
            target: g3x,
            form: this.gt6n
        };
        if (m3x != null) {
            d3x.code = m3x;
            this.z3x("oninvalid", d3x);
            if (!d3x.stopped) {
                this.cFf4j(g3x, d3x.value || this.qD9u[g3x.name + m3x])
            }
        } else {
            this.z3x("onvalid", d3x);
            if (!d3x.stopped) this.cFe4i(g3x, d3x.value)
        }
        return m3x == null
    };
    hN6H.zM3x = function() {
        var cFd4h = function(beD3x, beC3x) {
            return beD3x == beC3x ? "block" : "none"
        };
        var cFc4g = function(g3x, u3x, bF4J) {
            var qE9v = bEL0x.call(this, g3x, u3x);
            if (!qE9v && !!bF4J) qE9v = a2x.IV6P(g3x, this.GQ5V[u3x]);
            return qE9v
        };
        var bEL0x = function(g3x, u3x) {
            var qE9v;
            if (u3x == "tp") qE9v = a2x.B3x(g3x.name + "-tip");
            if (!qE9v) qE9v = a2x.H3x(g3x.parentNode, this.GQ5V[u3x].nid)[0];
            return qE9v
        };
        return function(g3x, bF4J, u3x) {
            g3x = this.B3x(g3x) || g3x;
            if (!g3x) return;
            u3x == "er" ? a2x.y3x(g3x, this.bzU9L) : a2x.x3x(g3x, this.bzU9L);
            var qE9v = cFc4g.call(this, g3x, u3x, bF4J);
            if (!!qE9v && !!bF4J) qE9v.innerHTML = bF4J;
            k3x.eI5N(this.GQ5V, function(D3x, K3x) {
                a2x.ba3x(bEL0x.call(this, g3x, K3x), "display", cFd4h(u3x, K3x))
            }, this)
        }
    }();
    hN6H.qa9R = function(g3x, bF4J) {
        this.zM3x(g3x, bF4J || this.qD9u[g3x.name + "-tip"], "tp");
        return this
    };
    hN6H.cFe4i = function(g3x, bF4J) {
        this.zM3x(g3x, bF4J || this.qD9u[g3x.name + "-pass"] || this.qD9u.pass, "ok");
        return this
    };
    hN6H.cFf4j = function(g3x, bF4J) {
        this.zM3x(g3x, bF4J || this.qD9u[g3x.name + "-error"], "er");
        return this
    };
    hN6H.jb7U = function() {
        var gO6I = /^(?:radio|checkbox)$/i;
        var cFb4f = function(D3x) {
            return D3x == null ? "" : D3x
        };
        var bEU0x = function(D3x, g3x) {
            if (gO6I.test(g3x.type || "")) {
                g3x.checked = D3x == g3x.value
            } else {
                g3x.value = cFb4f(D3x)
            }
        };
        return function(W3x, D3x) {
            var g3x = this.B3x(W3x);
            if (!g3x) return this;
            if (g3x.tagName == "SELECT" || !g3x.length) {
                bEU0x(D3x, g3x)
            } else {
                k3x.bd4h(g3x, bEU0x.f3x(null, D3x))
            }
            return this
        }
    }();
    hN6H.B3x = function(W3x) {
        return this.gt6n.elements[W3x]
    };
    hN6H.cFh4l = function() {
        return this.gt6n
    };
    hN6H.Zk1x = function() {
        var gO6I = /^radio|checkbox$/i,
            kf7Y = /^number|date$/;
        var cEZ4d = function(bz4D, g3x) {
            var W3x = g3x.name,
                D3x = g3x.value,
                bx4B = bz4D[W3x],
                u3x = this.qn9e(g3x, "type");
            if (kf7Y.test(u3x)) D3x = this.Dh4l(D3x, u3x);
            if (gO6I.test(g3x.type) && !g3x.checked) {
                D3x = this.qn9e(g3x, "value");
                if (!D3x) return
            }
            if (!!bx4B) {
                if (!k3x.eJ5O(bx4B)) {
                    bx4B = [bx4B];
                    bz4D[W3x] = bx4B
                }
                bx4B.push(D3x)
            } else {
                bz4D[W3x] = D3x
            }
        };
        return function() {
            var m3x = {};
            k3x.bd4h(this.gt6n.elements, function(g3x) {
                if (this.cDj4n(g3x)) cEZ4d.call(this, m3x, g3x)
            }, this);
            return m3x
        }
    }();
    hN6H.QT8L = function() {
        var cEY4c = function(g3x) {
            if (this.Zu1x(g3x)) this.qa9R(g3x)
        };
        return function() {
            this.gt6n.reset();
            k3x.bd4h(this.gt6n.elements, cEY4c, this);
            return this
        }
    }();
    hN6H.cHR5W = function() {
        this.gt6n.submit();
        return this
    };
    hN6H.gM6G = function() {
        var cEL4P = function(g3x) {
            if (this.Zu1x(g3x)) this.cEu4y(g3x)
        };
        return function() {
            this.Hj5o = {};
            k3x.bd4h(this.gt6n.elements, cEL4P, this);
            return this
        }
    }();
    hN6H.cEK4O = function(g3x) {
        g3x = this.B3x(g3x) || g3x;
        if (!!g3x) return this.bCO9F(g3x);
        var m3x = !0;
        k3x.bd4h(this.gt6n.elements, function(g3x) {
            var jw7p = this.cEK4O(g3x);
            m3x = m3x && jw7p
        }, this);
        return m3x
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.Zc1x = NEJ.C();
    b3x = n3x.Zc1x.N3x(n3x.eq5v);
    L3x = n3x.Zc1x.cs4w;
    b3x.bW4a = function() {
        this.ci4m();
        h3x.s3x(this.o3x, "click", this.cL4P.f3x(this));
        h3x.s3x(document, "mousewheel", this.Cx4B.f3x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.Cx4B.f3x(this))
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        if (e3x.jst) {
            this.o3x.innerHTML = a2x.cc4g(e3x.jst, e3x.data)
        } else if (e3x.ntp) {
            this.o3x.appendChild(a2x.dF5K(e3x.ntp))
        } else if (e3x.txt) {
            this.o3x.innerHTML = a2x.iN7G(e3x.txt)
        } else if (e3x.html) {
            this.o3x.innerHTML = e3x.html
        }
        var Rd8V = this.o3x.getElementsByTagName("form");
        if (Rd8V.length) {
            this.gt6n = I3x.Qy8q.A3x({
                form: Rd8V[0]
            })
        }
        this.EB5G = a2x.dm5r(this.o3x)[0]
    };
    b3x.bC4G = function() {
        this.z3x("ondestroy");
        this.bG4K();
        this.o3x.innerHTML = "";
        delete this.EB5G
    };
    b3x.cL4P = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action"),
            j3x = this.gt6n ? this.gt6n.Zk1x() : null,
            d3x = {
                action: a2x.t3x(g3x, "action")
            };
        if (j3x) d3x.data = j3x;
        if (d3x.action) {
            this.z3x("onaction", d3x);
            if (d3x.stopped) return;
            this.bt4x()
        }
    };
    b3x.Cx4B = function(d3x) {
        if (!this.EB5G) return;
        h3x.bh4l(d3x);
        var dq5v = d3x.wheelDelta || -d3x.detail;
        this.EB5G.scrollTop -= dq5v
    };
    l3x.kr7k = function(e3x) {
        e3x.destroyable = e3x.destroyable || true;
        e3x.title = e3x.title || "提示";
        e3x.draggable = true;
        e3x.parent = e3x.parent || document.body;
        e3x.mask = e3x.mask || true;
        var Cu4y = n3x.Zc1x.A3x(e3x);
        Cu4y.J3x();
        return Cu4y
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bGp0x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Rf8X = {},
        EH5M = {};
    for (var i = 0, l = bGp0x.length, c; i < l; i++) {
        c = bGp0x.charAt(i);
        Rf8X[i] = c;
        EH5M[c] = i
    }
    var cEJ4N = function(iv7o) {
        var r3x = 0,
            c, m3x = [];
        while (r3x < iv7o.length) {
            c = iv7o[r3x];
            if (c < 128) {
                m3x.push(String.fromCharCode(c));
                r3x++
            } else if (c > 191 && c < 224) {
                m3x.push(String.fromCharCode((c & 31) << 6 | iv7o[r3x + 1] & 63));
                r3x += 2
            } else {
                m3x.push(String.fromCharCode((c & 15) << 12 | (iv7o[r3x + 1] & 63) << 6 | iv7o[r3x + 2] & 63));
                r3x += 3
            }
        }
        return m3x.join("")
    };
    var cEF4J = function() {
        var hx6r = /\r\n/g;
        return function(j3x) {
            j3x = j3x.replace(hx6r, "\n");
            var m3x = [],
                mC8u = String.fromCharCode(237);
            if (mC8u.charCodeAt(0) < 0)
                for (var i = 0, l = j3x.length, c; i < l; i++) {
                    c = j3x.charCodeAt(i);
                    c > 0 ? m3x.push(c) : m3x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j3x.length, c; i < l; i++) {
                        c = j3x.charCodeAt(i);
                        if (c < 128) m3x.push(c);
                        else if (c > 127 && c < 2048) m3x.push(c >> 6 | 192, c & 63 | 128);
                        else m3x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return m3x
        }
    }();
    var Lp7i = function(iv7o) {
        var r3x = 0,
            m3x = [],
            fn5s = iv7o.length % 3;
        if (fn5s == 1) iv7o.push(0, 0);
        if (fn5s == 2) iv7o.push(0);
        while (r3x < iv7o.length) {
            m3x.push(Rf8X[iv7o[r3x] >> 2], Rf8X[(iv7o[r3x] & 3) << 4 | iv7o[r3x + 1] >> 4], Rf8X[(iv7o[r3x + 1] & 15) << 2 | iv7o[r3x + 2] >> 6], Rf8X[iv7o[r3x + 2] & 63]);
            r3x += 3
        }
        if (fn5s == 1) m3x[m3x.length - 1] = m3x[m3x.length - 2] = "=";
        if (fn5s == 2) m3x[m3x.length - 1] = "=";
        return m3x.join("")
    };
    var bGT1x = function() {
        var rM0x = /\n|\r|=/g;
        return function(j3x) {
            var r3x = 0,
                m3x = [];
            j3x = j3x.replace(rM0x, "");
            for (var i = 0, l = j3x.length; i < l; i += 4) m3x.push(EH5M[j3x.charAt(i)] << 2 | EH5M[j3x.charAt(i + 1)] >> 4, (EH5M[j3x.charAt(i + 1)] & 15) << 4 | EH5M[j3x.charAt(i + 2)] >> 2, (EH5M[j3x.charAt(i + 2)] & 3) << 6 | EH5M[j3x.charAt(i + 3)]);
            var bq4u = m3x.length,
                fn5s = j3x.length % 4;
            if (fn5s == 2) m3x = m3x.slice(0, bq4u - 2);
            if (fn5s == 3) m3x = m3x.slice(0, bq4u - 1);
            return m3x
        }
    }();
    p.cFk5p = function(j3x) {
        return cEJ4N(bGT1x(j3x))
    };
    p.cEA4E = function(j3x) {
        var iv7o = bGT1x(j3x),
            dt5y = iv7o.length,
            it7m;
        var r3x = 0;
        while (it7m = iv7o[r3x]) {
            if (it7m > 128) {
                iv7o[r3x] = it7m - 256
            }
            r3x++
        }
        return iv7o
    };
    p.cEz4D = function(j3x) {
        try {
            return window.btoa(j3x)
        } catch (ex) {
            return Lp7i(cEF4J(j3x))
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        h3x = c3x("nej.v"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.p"),
        k3x = c3x("nej.u"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n3x.bHG1x = NEJ.C();
    b3x = n3x.bHG1x.N3x(n3x.eq5v);
    b3x.ch4l = function() {
        this.cf4j = "m-download-layer"
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.bwX8P = i3x[0];
        this.bwI8A = i3x[1];
        this.bHU1x = i3x[2];
        v3x.bl4p("/client/version/get", {
            type: "json",
            onload: this.cEy4C.f3x(this)
        });
        if (O3x.Il6f.mac) {
            a2x.x3x(this.bwX8P.parentNode, "f-hide");
            a2x.y3x(this.bwI8A.parentNode, "f-hide");
            a2x.y3x(this.bHU1x, "f-hide")
        } else {
            a2x.y3x(this.bwX8P.parentNode, "f-hide");
            a2x.x3x(this.bwI8A.parentNode, "f-hide");
            a2x.x3x(this.bHU1x, "f-hide")
        }
    };
    b3x.bm4q = function(e3x) {
        e3x.clazz = " m-layer-down";
        e3x.parent = e3x.parent || document.body;
        e3x.title = "下载";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bn4r(e3x);
        this.bX4b([
            [this.o3x, "click", this.bT4X.f3x(this)]
        ]);
        this.ev5A = TYPE_MAP[e3x.type];
        this.gY6S = e3x.id
    };
    b3x.bC4G = function() {
        this.bG4K()
    };
    b3x.BR4V = function() {
        this.bt4x()
    };
    b3x.FG5L = function(d3x) {
        this.z3x("onok", D3x);
        this.bt4x()
    };
    b3x.bT4X = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action");
        switch (a2x.t3x(g3x, "action")) {
            case "download":
                this.bt4x();
                window.open(a2x.t3x(g3x, "src"));
                break;
            case "orpheus":
                this.bt4x();
                location.href = "orpheus://" + k3x.cEz4D(JSON.stringify({
                    type: this.ev5A,
                    id: this.gY6S,
                    cmd: "download"
                }));
                break
        }
    };
    b3x.cEy4C = function(d3x) {
        if ((d3x || bb3x).code == 200) {
            this.KA6u = d3x.data;
            this.bwX8P.innerText = "V" + this.KA6u.mac;
            this.bwI8A.innerText = "V" + this.KA6u.pc
        }
    };
    l3x.Lr7k = function(e3x) {
        n3x.bHG1x.A3x(e3x).J3x()
    }
})();
(function() {
    var c3x = NEJ.P,
        l3x = c3x("nm.x");
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
    l3x.FM5R = FullscreenApi
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        k3x = c3x("nej.u"),
        q3x = c3x("nm.d"),
        bR4V = {};
    q3x.B3x = function(K3x) {
        return bR4V[K3x]
    };
    q3x.nm8e = function(K3x, bg4k) {
        bR4V[K3x] = bg4k
    };
    q3x.fr5w = function(j3x) {
        k3x.eI5N(j3x, function(p3x, K3x) {
            var bg4k = bR4V[K3x] || {};
            NEJ.X(bg4k, p3x);
            bR4V[K3x] = bg4k
        })
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        be4i = c3x("nej.h");
    be4i.YV1x = function(K3x) {
        return localStorage.getItem(K3x)
    };
    be4i.YU1x = function(K3x, D3x) {
        localStorage.setItem(K3x, D3x)
    };
    be4i.bwf8X = function(K3x) {
        localStorage.removeItem(K3x)
    };
    be4i.bvK7D = function() {
        localStorage.clear()
    };
    be4i.cEx4B = function() {
        var m3x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m3x.push(localStorage.key(i));
        return m3x
    };
    be4i.bvo7h = function() {
        (document.onstorageready || br4v)()
    };
    be4i.buV7O = function() {
        return !0
    }
})();
(function() {
    var c3x = NEJ.P,
        O3x = c3x("nej.p"),
        it7m = c3x("nej.c"),
        be4i = c3x("nej.h"),
        tQ1x;
    if (O3x.mW8O.trident || !!window.localStorage) return;
    var cEw4A = function() {
        var rG0x, eh5m;
        var bmc5h = function() {
            rG0x = document.createElement("div");
            NEJ.X(rG0x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", rG0x);
            rG0x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it7m.B3x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Of8X = function() {
            eh5m = window.clearTimeout(eh5m);
            var hQ6K = rG0x.getElementsByTagName("object")[0];
            if (!!hQ6K.initStorage) {
                delete rG0x;
                tQ1x = hQ6K;
                tQ1x.initStorage("nej-storage");
                (document.onstorageready || br4v)();
                return
            }
            eh5m = window.setTimeout(Of8X, 500)
        };
        return function() {
            if (!!tQ1x) return;
            bmc5h();
            Of8X()
        }
    }();
    be4i.YV1x = be4i.YV1x.eH5M(function(d3x) {
        d3x.stopped = !0;
        if (!tQ1x) return;
        d3x.value = tQ1x.getItem(d3x.args[0])
    });
    be4i.YU1x = be4i.YU1x.eH5M(function(d3x) {
        d3x.stopped = !0;
        if (!tQ1x) return;
        var bf4j = d3x.args;
        tQ1x.setItem(bf4j[0], bf4j[1])
    });
    be4i.bwf8X = be4i.bwf8X.eH5M(function(d3x) {
        d3x.stopped = !0;
        if (!tQ1x) return;
        tQ1x.removeItem(d3x.args[0])
    });
    be4i.bvK7D = be4i.bvK7D.eH5M(function(d3x) {
        d3x.stopped = !0;
        if (!!tQ1x) tQ1x.clear()
    });
    be4i.bvo7h = be4i.bvo7h.eH5M(function(d3x) {
        d3x.stopped = !0;
        cEw4A()
    });
    be4i.buV7O = be4i.buV7O.eH5M(function(d3x) {
        d3x.stopped = !0;
        d3x.value = !!tQ1x
    })
})();
(function() {
    var c3x = NEJ.P,
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        be4i = c3x("nej.h"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        R3x = {};
    v3x.vv2x = function(K3x, D3x) {
        var bKN2x = JSON.stringify(D3x);
        try {
            be4i.YU1x(K3x, bKN2x)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKN2x != be4i.YV1x(K3x)) R3x[K3x] = D3x;
        return this
    };
    v3x.tR1x = function(K3x) {
        var j3x = JSON.parse(be4i.YV1x(K3x) || "null");
        return j3x == null ? R3x[K3x] : j3x
    };
    v3x.bLb2x = function(K3x, D3x) {
        var j3x = v3x.tR1x(K3x);
        if (j3x == null) {
            j3x = D3x;
            v3x.vv2x(K3x, j3x)
        }
        return j3x
    };
    v3x.Lu7n = function(K3x) {
        delete R3x[K3x];
        be4i.bwf8X(K3x);
        return this
    };
    v3x.cFm5r = function() {
        var buG7z = function(p3x, K3x, bz4D) {
            delete bz4D[K3x]
        };
        return function() {
            k3x.eI5N(R3x, buG7z);
            be4i.bvK7D();
            return this
        }
    }();
    v3x.cFn5s = function(m3x) {
        m3x = m3x || {};
        k3x.bd4h(be4i.cEx4B(), function(K3x) {
            m3x[K3x] = v3x.tR1x(K3x)
        });
        return m3x
    };
    I3x.fN6H.A3x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (be4i.buV7O()) {
                document.onstorageready()
            }
        }
    });
    var cEt4x = function() {
        var cEr4v = function(D3x, K3x, bz4D) {
            be4i.YU1x(K3x, JSON.stringify(D3x));
            delete bz4D[K3x]
        };
        return function() {
            k3x.eI5N(R3x, cEr4v)
        }
    }();
    h3x.s3x(document, "storageready", cEt4x);
    be4i.bvo7h()
})();
(function() {
    var c3x = NEJ.P,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        Ly7r;
    if (!!O3x.bur7k) return;
    O3x.bur7k = NEJ.C();
    Ly7r = O3x.bur7k.N3x(O3x.cJ4N);
    Ly7r.cw4A = function() {
        var gG6A = +(new Date),
            nf8X = "dat-" + gG6A;
        return function() {
            this.cF4J();
            var R3x = this.constructor[nf8X];
            if (!R3x) {
                R3x = {};
                this.constructor[nf8X] = R3x
            }
            this.S3x = R3x
        }
    }();
    Ly7r.B3x = function(K3x) {
        return this.S3x[K3x]
    };
    Ly7r.nm8e = function(K3x, D3x) {
        var ni8a = this.S3x[K3x];
        this.S3x[K3x] = D3x;
        h3x.z3x(localCache, "cachechange", {
            key: K3x,
            type: "set",
            oldValue: ni8a,
            newValue: D3x
        });
        return this
    };
    Ly7r.cM4Q = function(K3x) {
        var ni8a = this.S3x[K3x];
        k3x.bcJ2x(this.S3x, K3x);
        h3x.z3x(localCache, "cachechange", {
            key: K3x,
            type: "delete",
            oldValue: ni8a,
            newValue: undefined
        });
        return ni8a
    };
    Ly7r.YP1x = function(Gw5B) {
        return NEJ.Q(this.S3x, Gw5B)
    };
    window.localCache = O3x.bur7k.A3x();
    O3x.fN6H.A3x({
        element: localCache,
        event: "cachechange"
    })
})();
(function() {
    var c3x = NEJ.P,
        fu5z = NEJ.R,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.ut"),
        nf8X = "dat-" + +(new Date),
        nj8b;
    if (!!O3x.bud7W) return;
    O3x.bud7W = NEJ.C();
    nj8b = O3x.bud7W.N3x(O3x.cJ4N);
    nj8b.cw4A = function() {
        this.cF4J();
        this.S3x = this.constructor[nf8X];
        if (!this.S3x) {
            this.S3x = {};
            this.S3x[nf8X + "-l"] = {};
            this.constructor[nf8X] = this.S3x
        }
    };
    nj8b.sE0x = function(K3x) {
        return this.S3x[K3x]
    };
    nj8b.pQ9H = function(K3x, D3x) {
        this.S3x[K3x] = D3x
    };
    nj8b.lF8x = function(K3x, kA8s) {
        var j3x = this.sE0x(K3x);
        if (j3x == null) {
            j3x = kA8s;
            this.pQ9H(K3x, j3x)
        }
        return j3x
    };
    nj8b.cEq4u = function(K3x) {
        if (K3x != null) {
            delete this.S3x[K3x];
            return
        }
        k3x.eI5N(this.S3x, function(p3x, K3x) {
            if (K3x == nf8X + "-l") return;
            this.cEq4u(K3x)
        }, this)
    };
    nj8b.cFo5t = function(K3x) {
        if (!!v3x.Lu7n) return v3x.Lu7n(K3x)
    };
    nj8b.cEl4p = function(K3x) {
        if (!!v3x.tR1x) return v3x.tR1x(K3x)
    };
    nj8b.cEk4o = function(K3x, D3x) {
        if (!!v3x.vv2x) v3x.vv2x(K3x, D3x)
    };
    nj8b.Hl5q = function(K3x, kA8s) {
        var j3x = this.RT9K(K3x);
        if (j3x == null) {
            j3x = kA8s;
            this.xr3x(K3x, j3x)
        }
        return j3x
    };
    nj8b.RT9K = function(K3x) {
        var j3x = this.sE0x(K3x);
        if (j3x != null) return j3x;
        j3x = this.cEl4p(K3x);
        if (j3x != null) this.pQ9H(K3x, j3x);
        return j3x
    };
    nj8b.xr3x = function(K3x, D3x) {
        this.cEk4o(K3x, D3x);
        this.pQ9H(K3x, D3x)
    };
    nj8b.bQX4b = function(K3x) {
        if (K3x != null) {
            delete this.S3x[K3x];
            if (!!v3x.Lu7n) v3x.Lu7n(K3x);
            return
        }
        k3x.eI5N(this.S3x, function(p3x, K3x) {
            if (K3x == nf8X + "-l") return;
            this.bQX4b(K3x)
        }, this)
    };
    nj8b.cFp5u = function() {
        this.bQX4b();
        return this
    };
    nj8b.cFq5v = function(K3x) {
        var j3x = this.S3x[nf8X + "-l"];
        delete j3x[K3x]
    };
    nj8b.btj7c = function(K3x) {
        var j3x = this.S3x[nf8X + "-l"],
            bf4j = fu5z.slice.call(arguments, 1);
        k3x.bd4h(j3x[K3x], function(cA4E) {
            try {
                cA4E.apply(null, bf4j)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j3x[K3x]
    };
    nj8b.bti7b = function(K3x, cA4E) {
        cA4E = cA4E || br4v;
        var i3x = this.S3x[nf8X + "-l"][K3x];
        if (!i3x) {
            i3x = [cA4E];
            this.S3x[nf8X + "-l"][K3x] = i3x;
            return !1
        }
        i3x.push(cA4E);
        return !0
    };
    nj8b.cEf4j = function(i3x, bi4m, gc6W) {
        if (!i3x) return !1;
        bi4m = parseInt(bi4m) || 0;
        gc6W = parseInt(gc6W) || 0;
        if (!gc6W) {
            if (!i3x.loaded) return !1;
            gc6W = i3x.length
        }
        if (!!i3x.loaded) gc6W = Math.min(gc6W, i3x.length - bi4m);
        for (var i = 0; i < gc6W; i++)
            if (!i3x[bi4m + i]) return !1;
        return !0
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        b3x, L3x;
    if (!!O3x.RU9L) return;
    O3x.RU9L = NEJ.C();
    b3x = O3x.RU9L.N3x(O3x.bud7W);
    L3x = O3x.RU9L.cs4w;
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.wW2x = e3x.key || "id";
        this.bk4o = e3x.data || bb3x;
        this.cEe4i = !!e3x.autogc;
        this.cEc4g(e3x.id)
    };
    b3x.bC4G = function() {
        this.bG4K();
        if (!!this.ei5n) {
            this.bSf5k()
        }
    };
    b3x.cEc4g = function(C3x) {
        var R3x;
        if (!!C3x) {
            R3x = this.S3x[C3x];
            if (!R3x) {
                R3x = {};
                this.S3x[C3x] = R3x
            }
        }
        R3x = R3x || this.S3x;
        R3x.hash = R3x.hash || {};
        this.RX9O = R3x
    };
    b3x.bSf5k = function() {
        this.ei5n = window.clearTimeout(this.ei5n);
        var bz4D = {};
        k3x.eI5N(this.RX9O, function(i3x, K3x) {
            if (K3x == "hash") return;
            if (!k3x.eJ5O(i3x)) return;
            k3x.bd4h(i3x, function(p3x) {
                if (!p3x) return;
                bz4D[p3x[this.wW2x]] = !0
            }, this)
        }, this);
        k3x.eI5N(this.YF1x(), function(p3x, C3x, dR5W) {
            if (!bz4D[C3x]) {
                delete dR5W[C3x]
            }
        })
    };
    b3x.cEb4f = function() {
        if (!!this.ei5n) {
            this.ei5n = window.clearTimeout(this.ei5n)
        }
        this.ei5n = window.setTimeout(this.bSf5k.f3x(this), 150)
    };
    b3x.AF4J = function(p3x, YD1x) {
        p3x = this.bSI5N(p3x, YD1x) || p3x;
        if (!p3x) return null;
        var K3x = p3x[this.wW2x];
        if (K3x != null) {
            var id6X = this.YF1x()[K3x];
            if (!!id6X) p3x = NEJ.X(id6X, p3x);
            this.YF1x()[K3x] = p3x
        }
        delete p3x.bSR5W;
        return p3x
    };
    b3x.bSI5N = br4v;
    b3x.bsg7Z = function(K3x, p3x) {
        if (!p3x) return;
        if (!k3x.eJ5O(p3x)) {
            var i3x = this.hF6z(K3x),
                p3x = this.AF4J(p3x, K3x);
            if (!!p3x) i3x.unshift(p3x);
            return
        }
        k3x.mY8Q(p3x, this.bsg7Z.f3x(this, K3x))
    };
    b3x.Sa9R = function(K3x, cB4F) {
        var i3x = this.hF6z(K3x);
        i3x.length = Math.max(i3x.length, cB4F);
        this.bsa6U(K3x);
        return this
    };
    b3x.lo8g = function(K3x) {
        return this.hF6z(K3x).length
    };
    b3x.bsa6U = function(K3x, oV9M) {
        this.hF6z(K3x).loaded = oV9M != !1;
        return this
    };
    b3x.Yy1x = function(K3x) {
        return !!this.hF6z(K3x).loaded
    };
    b3x.uK1x = function(K3x, i3x) {
        this.uI1x(K3x);
        this.brB6v({
            key: K3x,
            offset: 0,
            limit: i3x.length + 1
        }, {
            list: i3x,
            total: i3x.length
        })
    };
    b3x.hF6z = function() {
        var DT4X = function(K3x) {
            return (K3x || "") + (!K3x ? "" : "-") + "list"
        };
        return function(K3x) {
            var K3x = DT4X(K3x),
                i3x = this.RX9O[K3x];
            if (!i3x) {
                i3x = [];
                this.RX9O[K3x] = i3x
            }
            return i3x
        }
    }();
    b3x.YF1x = function() {
        var dR5W = this.RX9O.hash;
        if (!dR5W) {
            dR5W = {};
            this.RX9O.hash = dR5W
        }
        return dR5W
    };
    b3x.bru6o = function() {
        var DT4X = function(e3x) {
            return "r-" + e3x.key
        };
        return function(e3x) {
            var iP7I = NEJ.X({}, e3x),
                ow9n = DT4X(iP7I);
            if (!this.bti7b(ow9n, this.z3x.f3x(this))) {
                iP7I.rkey = ow9n;
                iP7I.onload = this.cEa4e.f3x(this, iP7I);
                this.z3x("dopullrefresh", iP7I)
            }
            return this
        }
    }();
    b3x.cEa4e = function(e3x, i3x) {
        this.bsg7Z(e3x.key, i3x);
        this.btj7c(e3x.rkey, "onpullrefresh", e3x)
    };
    b3x.lw8o = function() {
        var DT4X = function(e3x) {
            return "r-" + e3x.key + "-" + e3x.offset + "-" + e3x.limit
        };
        return function(e3x) {
            e3x = e3x || bb3x;
            var iP7I = {
                    key: "" + e3x.key || "",
                    ext: e3x.ext || null,
                    data: e3x.data || null,
                    offset: parseInt(e3x.offset) || 0,
                    limit: parseInt(e3x.limit) || 0
                },
                i3x = this.hF6z(iP7I.key);
            if (this.cEf4j(i3x, iP7I.offset, iP7I.limit)) {
                this.z3x("onlistload", iP7I);
                return this
            }
            var ow9n = DT4X(iP7I);
            if (!this.bti7b(ow9n, this.z3x.f3x(this))) {
                iP7I.rkey = ow9n;
                iP7I.onload = this.brB6v.f3x(this, iP7I);
                this.z3x("doloadlist", iP7I)
            }
            return this
        }
    }();
    b3x.brB6v = function() {
        var DW4a = function(p3x, r3x, i3x) {
            if (!!p3x) {
                return !0
            }
            i3x.splice(r3x, 1)
        };
        return function(e3x, m3x) {
            e3x = e3x || bb3x;
            var K3x = e3x.key,
                bi4m = e3x.offset,
                bVq5v = this.hF6z(K3x);
            var i3x = m3x || [];
            if (!k3x.eJ5O(i3x)) {
                i3x = m3x.result || m3x.list || [];
                var cB4F = parseInt(m3x.total);
                if (!isNaN(cB4F) || cB4F > i3x.length) {
                    this.Sa9R(K3x, cB4F)
                }
            }
            k3x.bd4h(i3x, function(p3x, r3x) {
                bVq5v[bi4m + r3x] = this.AF4J(p3x, K3x)
            }, this);
            if (i3x.length < e3x.limit) {
                this.bsa6U(K3x);
                k3x.mY8Q(bVq5v, DW4a)
            }
            this.btj7c(e3x.rkey, "onlistload", e3x)
        }
    }();
    b3x.uI1x = function() {
        var DW4a = function(p3x, r3x, i3x) {
            i3x.splice(r3x, 1)
        };
        return function(K3x) {
            var i3x = this.hF6z(K3x);
            k3x.mY8Q(i3x, DW4a);
            this.bsa6U(K3x, !1);
            if (this.cEe4i) {
                this.cEb4f()
            }
            return this
        }
    }();
    b3x.bVt5y = function(p3x, YD1x) {
        return !p3x.bSR5W
    };
    b3x.eL5Q = function(C3x) {
        return this.YF1x()[C3x]
    };
    b3x.cFr5w = function(C3x) {
        var p3x = this.eL5Q(C3x);
        if (!!p3x) p3x.bSR5W = !0
    };
    b3x.Yu1x = function() {
        var DT4X = function(e3x) {
            return "r-" + e3x.key + "-" + e3x.id
        };
        return function(e3x) {
            e3x = e3x || bb3x;
            var C3x = e3x[this.wW2x],
                iP7I = {
                    id: C3x,
                    ext: e3x.ext,
                    data: e3x.data || {},
                    key: "" + e3x.key || ""
                };
            p3x = this.eL5Q(C3x);
            iP7I.data[this.wW2x] = C3x;
            if (!!p3x && this.bVt5y(p3x, iP7I.key)) {
                this.z3x("onitemload", iP7I);
                return this
            }
            var ow9n = DT4X(iP7I);
            if (!this.bti7b(ow9n, this.z3x.f3x(this))) {
                iP7I.rkey = ow9n;
                iP7I.onload = this.cDX4b.f3x(this, iP7I);
                this.z3x("doloaditem", iP7I)
            }
            return this
        }
    }();
    b3x.cDX4b = function(e3x, p3x) {
        e3x = e3x || bb3x;
        this.AF4J(p3x, e3x.key);
        this.btj7c(e3x.rkey, "onitemload", e3x)
    };
    b3x.jJ7C = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.zx3x.f3x(this, e3x);
        this.z3x("doadditem", e3x)
    };
    b3x.zx3x = function(e3x, p3x) {
        var K3x = e3x.key;
        p3x = this.AF4J(p3x, K3x);
        if (!!p3x) {
            var fc5h = 0,
                i3x = this.hF6z(K3x);
            if (!e3x.push) {
                fc5h = -1;
                var bi4m = e3x.offset || 0;
                i3x.splice(bi4m, 0, p3x)
            } else if (i3x.loaded) {
                fc5h = 1;
                i3x.push(p3x)
            } else {
                i3x.length++
            }
        }
        var d3x = {
            key: K3x,
            flag: fc5h,
            data: p3x,
            action: "add",
            ext: e3x.ext
        };
        this.z3x("onitemadd", d3x);
        return d3x
    };
    b3x.LH7A = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.bqm6g.f3x(this, e3x);
        this.z3x("dodeleteitem", e3x)
    };
    b3x.bqm6g = function(e3x, bzg8Y) {
        var p3x, K3x = e3x.key;
        if (!!bzg8Y) {
            p3x = this.eL5Q(e3x.id) || null;
            var C3x = e3x.id,
                cDW4a = this.wW2x,
                i3x = this.hF6z(K3x),
                r3x = k3x.dl5q(i3x, function(id6X) {
                    return !!id6X && id6X[cDW4a] == C3x
                });
            if (r3x >= 0) i3x.splice(r3x, 1)
        }
        var d3x = {
            key: K3x,
            data: p3x,
            action: "delete",
            ext: e3x.ext
        };
        this.z3x("onitemdelete", d3x);
        return d3x
    };
    b3x.Yp0x = function(e3x) {
        e3x = NEJ.X({}, e3x);
        e3x.onload = this.cDU4Y.f3x(this, e3x);
        this.z3x("doupdateitem", e3x)
    };
    b3x.cDU4Y = function(e3x, p3x) {
        var K3x = e3x.key;
        if (!!p3x) p3x = this.AF4J(p3x, K3x);
        var d3x = {
            key: K3x,
            data: p3x,
            action: "update",
            ext: e3x.ext
        };
        this.z3x("onitemupdate", d3x);
        return d3x
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.bqi6c) return;
    O3x.bqi6c = NEJ.C();
    b3x = O3x.bqi6c.N3x(O3x.RU9L);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.bpA6u({
            doloadlist: this.Yo0x.f3x(this),
            doloaditem: this.bpL6F.f3x(this),
            doadditem: this.bzG8y.f3x(this),
            dodeleteitem: this.Yj0x.f3x(this),
            doupdateitem: this.Yh0x.f3x(this),
            dopullrefresh: this.bzO9F.f3x(this)
        })
    };
    b3x.Yo0x = br4v;
    b3x.bzO9F = br4v;
    b3x.bpL6F = br4v;
    b3x.bzG8y = br4v;
    b3x.Yj0x = br4v;
    b3x.Yh0x = br4v
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        b3x, L3x;
    q3x.hM6G = NEJ.C();
    b3x = q3x.hM6G.N3x(I3x.bqi6c);
    b3x.cp4t = function() {
        var Dx4B = location.protocol + "//" + location.host;
        var cDT4X = function(bs4w, j3x) {
            var bz4D = {
                conf: {},
                data: {},
                urls: []
            };
            k3x.bd4h(bs4w, function(K3x, r3x, i3x) {
                var bg4k = q3x.B3x(K3x);
                if (!bg4k) return;
                var bps6m = bAo9f(bg4k.url, j3x[K3x]);
                bz4D.urls.push(bps6m);
                bz4D.conf[bps6m] = bg4k;
                bz4D.data[bps6m] = JSON.stringify(j3x[K3x] == null ? "" : j3x[K3x])
            });
            return bz4D
        };
        var bAo9f = function(Y3x, j3x) {
            return Y3x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j3x[$2] || $1
            })
        };
        var bAq9h = function(bg4k, e3x, d3x) {
            h3x.z3x(window, "requesterror", d3x);
            if (!!d3x.stopped) return;
            var DB4F = bg4k.onerror || e3x.onerror;
            if (k3x.fB5G(DB4F)) {
                this.z3x(DB4F, d3x, e3x)
            } else {
                (DB4F || br4v).call(this, d3x, e3x)
            }
            var d3x = {
                result: d3x,
                option: e3x
            };
            this.z3x("onerror", d3x);
            if (!d3x.stopped)(bg4k.onmessage || br4v).call(this, d3x.result.code, d3x.result)
        };
        var bAs9j = function(Q3x, bg4k, e3x) {
            var m3x = Q3x;
            if (k3x.gE6y(bg4k.format)) {
                m3x = bg4k.format.call(this, Q3x, e3x)
            }
            return m3x
        };
        var yE3x = function(Q3x, bg4k, e3x, ut1x) {
            if (k3x.gE6y(bg4k.beforeload)) {
                bg4k.beforeload.call(this, Q3x, e3x, bg4k)
            }
            if (Q3x && Q3x.code != null && Q3x.code != 200) {
                bAq9h.call(this, bg4k, e3x, {
                    key: e3x.key,
                    code: Q3x.code,
                    message: Q3x.message || "",
                    captchaId: Q3x.captchaId,
                    ext: Q3x
                });
                return
            }
            var m3x = Q3x;
            if (!ut1x) {
                m3x = bAs9j.call(this, Q3x, bg4k, e3x)
            } else if (k3x.gE6y(bg4k.format)) {
                var bpj6d = [];
                k3x.bd4h(ut1x.urls, function(Y3x) {
                    bpj6d.push(bAs9j.call(this, Q3x[Y3x], ut1x.conf[Y3x], e3x))
                }, this);
                bpj6d.push(e3x);
                m3x = bg4k.format.apply(this, bpj6d)
            }
            var nZ9Q = bg4k.onload || e3x.onload,
                bBb9S = bg4k.finaly || e3x.finaly || br4v;
            if (k3x.fB5G(nZ9Q)) {
                bBb9S.call(this, this.z3x(nZ9Q, m3x), e3x)
            } else {
                bBb9S.call(this, (nZ9Q || br4v).call(this, m3x), e3x)
            }
        };
        var BO4S = function(bg4k, e3x, ca4e) {
            bAq9h.call(this, bg4k, e3x, {
                key: e3x.key,
                code: ca4e.code || -1,
                message: ca4e.message || ""
            })
        };
        return function(bg4k, e3x) {
            if (k3x.fB5G(bg4k)) {
                bg4k = q3x.B3x(bg4k)
            }
            delete e3x.value;
            (bg4k.filter || br4v).call(this, e3x, bg4k);
            var Q3x = e3x.value;
            if (!!Q3x) {
                yE3x.call(this, Q3x, bg4k, e3x);
                return
            }
            var Y3x, j3x = e3x.data || bb3x,
                zm3x = {
                    cookie: !0,
                    type: bg4k.rtype || "json",
                    method: bg4k.type || "POST",
                    onerror: BO4S.f3x(this, bg4k, e3x),
                    noescape: bg4k.noescape
                };
            if (k3x.eJ5O(bg4k.url)) {
                var ut1x = cDT4X(bg4k.url, j3x);
                Y3x = Dx4B + "/api/batch";
                zm3x.data = k3x.cC4G(ut1x.data);
                zm3x.onload = yE3x.ew5B(this, bg4k, e3x, ut1x);
                zm3x.headers = {
                    "batch-method": "POST"
                };
                delete ut1x.data
            } else {
                var ku8m = bg4k.url.indexOf(":") < 0 ? Dx4B : "";
                Y3x = bAo9f(ku8m + bg4k.url, j3x);
                zm3x.data = k3x.cC4G(e3x.data);
                zm3x.onload = yE3x.ew5B(this, bg4k, e3x)
            }
            if (zm3x.method == "GET") zm3x.query = zm3x.data;
            return v3x.bl4p(Y3x, zm3x)
        }
    }();
    b3x.ES5X = function() {
        var gO6I = /^get|list|pull$/i;
        return function(bBl9c, e3x) {
            var K3x = e3x.key,
                bg4k = q3x.B3x(K3x.split("-")[0] + "-" + bBl9c);
            if (gO6I.test(bBl9c) && K3x.indexOf("post-") < 0) bg4k.type = "GET";
            this.cp4t(bg4k, e3x)
        }
    }();
    b3x.cFs5x = function(K3x, i3x) {
        var cB4F = i3x.length;
        this.brB6v({
            key: K3x,
            offset: 0,
            limit: cB4F + 1
        }, {
            list: i3x,
            total: cB4F
        })
    };
    b3x.Yo0x = function(e3x) {
        this.ES5X("list", e3x)
    };
    b3x.bpL6F = function(e3x) {
        this.ES5X("get", e3x)
    };
    b3x.bzO9F = function(e3x) {
        this.ES5X("pull", e3x)
    };
    b3x.bzG8y = function(e3x) {
        this.ES5X("add", e3x)
    };
    b3x.Yj0x = function(e3x) {
        this.ES5X("del", e3x)
    };
    b3x.Yh0x = function(e3x) {
        this.ES5X("update", e3x)
    };
    b3x.cDO4S = function(p3x) {
        this.AF4J(p3x)
    };
    I3x.fN6H.A3x({
        element: window,
        event: "requesterror"
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        q3x = c3x("nm.d"),
        bpi6c = {},
        b3x, L3x;
    var uR1x = function(m3x, e3x) {
        m3x.conf = e3x.conf;
        return m3x
    };
    q3x.fr5w({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q3x, e3x) {
                return uR1x({
                    mv: Q3x
                }, e3x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m3x, e3x) {
                if (!!m3x.songs && m3x.songs.length > 0) m3x.song = m3x.songs[0];
                else m3x.song = bpi6c;
                delete m3x.songs;
                return uR1x(m3x, e3x)
            },
            filter: function(e3x) {
                e3x.data.ids = "[" + e3x.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: uR1x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: uR1x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m3x, e3x) {
                m3x.playlist = m3x.result;
                delete m3x.result;
                return uR1x(m3x, e3x)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: uR1x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: uR1x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: uR1x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e3x) {
                var i3x = e3x.data.id.split("-");
                e3x.data.radioId = i3x[0];
                e3x.data.asc = i3x[1] == 2;
                e3x.data.limit = 1e3;
                delete e3x.data.id
            },
            format: function(Q3x, e3x) {
                var cDN4R = {
                    id: e3x.data.radioId,
                    programs: Q3x.programs
                };
                return uR1x({
                    djradio: cDN4R
                }, e3x)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: uR1x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e3x) {
                e3x.data.lv = 0;
                e3x.data.tv = 0
            },
            format: function(m3x, e3x) {
                var xq3x = {
                    lyric: "",
                    nolyric: true
                };
                if (m3x.code == 200 && m3x.lrc && m3x.lrc.lyric) {
                    xq3x.lyric = m3x.lrc.lyric;
                    xq3x.nolyric = false
                } else {
                    xq3x.nolyric = true
                }
                return uR1x({
                    lyric: xq3x
                }, e3x)
            }
        }
    });
    q3x.xp3x = NEJ.C();
    b3x = q3x.xp3x.N3x(q3x.hM6G);
    b3x.cDL4P = function(u3x, cU4Y) {
        return this.sE0x(this.Yf0x(u3x, cU4Y))
    };
    b3x.Sw9n = function(u3x, cU4Y, e3x) {
        e3x = e3x || {};
        var j3x = this.sE0x(this.Yf0x(u3x, cU4Y));
        if (j3x && (u3x != 13 && u3x != 19 || e3x.conf && e3x.conf.useCache)) {
            this.z3x("onresourceload", u3x, cU4Y, j3x, e3x.conf);
            return
        }
        e3x.data = {
            id: cU4Y
        };
        e3x.onload = this.cDK4O.f3x(this, u3x, cU4Y);
        e3x.onerror = this.cDJ4N.f3x(this, u3x, cU4Y);
        this.cp4t("res-" + this.CY4c(u3x) + "-get", e3x)
    };
    b3x.cDK4O = function(u3x, cU4Y, m3x) {
        var j3x = m3x[this.CY4c(u3x)];
        this.pQ9H(this.Yf0x(u3x, cU4Y), j3x);
        this.z3x("onresourceload", u3x, cU4Y, j3x, m3x.conf)
    };
    b3x.cDJ4N = function(u3x, cU4Y, m3x, e3x) {
        if (m3x.code != 404) {
            this.z3x("onresourceerror", u3x, cU4Y, m3x.code);
            return
        }
        this.pQ9H(this.Yf0x(u3x, cU4Y), bpi6c);
        this.z3x("onresourceload", u3x, cU4Y, bpi6c, e3x.conf)
    };
    b3x.cFt5y = function(u3x, e3x) {
        this.cp4t("res-" + this.CY4c(u3x) + "-play", e3x)
    };
    b3x.Yf0x = function(u3x, cU4Y) {
        return "res-" + this.CY4c(u3x) + "-" + cU4Y
    };
    b3x.CY4c = function(u3x) {
        var bz4D = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bz4D[u3x]
    };
    q3x.xp3x.LK7D = function(u3x, cU4Y) {
        if (!this.fl5q) this.fl5q = q3x.xp3x.A3x({});
        return this.fl5q.cDL4P(u3x, cU4Y)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        boE6y = /^[1-9][0-9]*$/,
        b3x, L3x;
    var LOCAL_LOG_KEY = "local-log";
    q3x.fr5w({
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
    q3x.hP6J = NEJ.C();
    b3x = q3x.hP6J.N3x(q3x.hM6G);
    b3x.eS5X = function(V3x, bg4k) {
        if (!V3x || !bg4k) return;
        if (k3x.fB5G(bg4k)) {
            try {
                bg4k = JSON.parse(bg4k)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a2x)
                }
            }
        }
        if (!k3x.lG8y(bg4k)) return;
        this.cp4t("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: V3x,
                    json: bg4k
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V3x + ", json=" + JSON.stringify(bg4k))
        }
    };
    b3x.Yc0x = function(nO9F) {
        if (!k3x.eJ5O(nO9F)) return;
        this.cp4t("bi-batch-log", {
            data: {
                logs: JSON.stringify(nO9F)
            }
        })
    };
    b3x.bCW9N = function(bg4k) {
        if (!bg4k || !bg4k.type || !bg4k.rid) return;
        var nP9G = bg4k.type;
        if (boE6y.test(nP9G)) {
            nP9G = this.CY4c(nP9G)
        }
        if (!nP9G) return;
        if (nP9G == "playlist") nP9G = "list";
        this.eS5X("search", {
            type: nP9G,
            id: bg4k.rid || null,
            keyword: bg4k.keyword || null
        })
    };
    b3x.SD9u = function() {
        var cDE4I = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bg4k) {
            if (!bg4k || !bg4k.type || !bg4k.rid) return;
            if (bg4k.play === undefined) bg4k.play = true;
            var nP9G = bg4k.type;
            if (boE6y.test(nP9G)) {
                nP9G = this.CY4c(nP9G)
            }
            if (!nP9G) return;
            if (nP9G == "playlist") nP9G = "list";
            var Q3x = {
                id: bg4k.rid,
                type: nP9G
            };
            if (nP9G == "song" && bg4k.source) {
                Q3x.source = this.bDd9U(bg4k.source);
                if (!!bg4k.sourceid) Q3x.sourceid = bg4k.sourceid
            }
            this.eS5X(!bg4k.play ? "addto" : "play", Q3x);
            if (nP9G == "song" && bg4k.hash && bg4k.hash.match(cDE4I)) {
                this.eS5X(!bg4k.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b3x.boe5j = function(C3x, bA4E, ec5h, Ge5j) {
        var Q3x = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cDB4F = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        Q3x.id = C3x;
        Q3x.time = Math.round(bA4E);
        Q3x.end = k3x.fB5G(Ge5j) ? Ge5j : cDB4F[Ge5j] || "";
        if (ec5h && ec5h.fid) {
            Q3x.source = this.bDd9U(ec5h.fid);
            Q3x.sourceId = ec5h.fdata
        }
        this.eS5X("play", Q3x)
    };
    b3x.bDA0x = function(u3x, cU4Y) {
        if (!u3x || !cU4Y) return;
        if (boE6y.test(u3x)) u3x = this.CY4c(u3x);
        if (u3x != "playlist" && u3x != "dj") return;
        var bg4k = q3x.B3x("plus-" + u3x + "-count");
        if (!bg4k) return !1;
        this.cp4t(bg4k, {
            data: {
                id: cU4Y
            }
        });
        var R3x = this.lF8x("play-hist-" + u3x, []);
        if (k3x.dl5q(R3x, cU4Y) < 0) {
            R3x.push(cU4Y);
            return !0
        }
        return !1
    };
    b3x.CY4c = function(u3x) {
        var bz4D = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bz4D[u3x]
    };
    b3x.bDd9U = function(LO7H) {
        var bz4D = {
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
        return bz4D[LO7H]
    };
    b3x.bDP0x = function(hf6Z) {
        var nO9F = this.Hl5q(LOCAL_LOG_KEY, []);
        nO9F.unshift(hf6Z);
        if (nO9F.length > 200) {
            nO9F.length = 200
        }
        this.xr3x(LOCAL_LOG_KEY, nO9F)
    };
    b3x.cDz4D = function() {
        return this.RT9K(LOCAL_LOG_KEY)
    };
    b3x.ep5u = function(Q3x) {
        this.eS5X("play", Q3x)
    };
    var bEf0x = q3x.hP6J.gk6e();
    l3x.su0x = function() {
        bEf0x.eS5X.apply(bEf0x, arguments)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        n3x = c3x("nm.l"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d");
    var FullscreenApi = l3x.FM5R || {};
    if (!q3x.xp3x) return;
    var R3x = q3x.xp3x.A3x({
        onresourceload: cDx4B
    });
    var wf2x = q3x.hP6J.gk6e();

    function cDx4B(u3x, cU4Y, j3x, bg4k) {
        var i3x = [];
        switch (parseInt(u3x)) {
            case 2:
                i3x = j3x;
                break;
            case 13:
                i3x = j3x.tracks;
                break;
            case 18:
                i3x.push(j3x);
                break;
            case 19:
                i3x = j3x.songs;
                break;
            case 21:
                if (j3x.mp && j3x.mp.fee && j3x.mp.pl <= 0) {
                    l3x.XX0x(j3x.data.id, j3x.mp.fee);
                    return
                }
                break
        }
        if (l3x.LQ7J(i3x, true, null, u3x == 19 ? {
                source: "album",
                sourceid: cU4Y
            } : null) == 0) {
            return
        }
        l3x.ft5y({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bg4k.message
        })
    }

    function cDw4A(d3x, oa9R, zW3x, eA5F) {
        eA5F = eA5F || {};
        if (d3x.action == "ok") {
            if (zW3x) {
                location.dispatch2("/payfee?songId=" + zW3x)
            } else {
                location.dispatch2("/payfee?fee=" + oa9R || 1)
            }
            wf2x.eS5X("click", {
                type: "tobuyvip",
                name: "box",
                source: eA5F.source || "song",
                sourceid: eA5F.sourceid || zW3x || 0
            })
        } else if (d3x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zW3x);
            wf2x.eS5X("click", {
                type: "tobuyone",
                name: "box",
                source: eA5F.source || "song",
                sourceid: eA5F.sourceid || zW3x || 0
            })
        }
    }

    function SM9D(bF4J) {
        l3x.ft5y({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bF4J,
            btntxt: "知道了"
        })
    }

    function SN9E(bF4J, Q3x) {
        SM9D((Q3x || bb3x).toast || bF4J)
    }
    l3x.iC7v = function(bF4J, C3x, u3x, cDu4y, bj4n) {
        bF4J = bF4J || "由于版权保护，您所在的地区暂时无法使用。";
        if (cDu4y && bj4n && bj4n.privilege && bj4n.privilege.toast) {
            v3x.bl4p("/api/song/toast", {
                query: {
                    id: bj4n.id
                },
                type: "json",
                onload: SN9E.f3x(this, bF4J),
                onerror: SN9E.f3x(this, bF4J)
            })
        } else if (C3x && u3x) {
            R3x.Sw9n(u3x, C3x, {
                conf: {
                    message: bF4J,
                    useCache: u3x != 18
                }
            })
        } else {
            SM9D(bF4J)
        }
    };
    l3x.vZ2x = function(oa9R, zW3x, u3x, eA5F, nv8n) {
        var bR4V, pc9T = "m-popup-info",
            bmS5X = "单首购买",
            bmO5T = "马上去开通",
            cV4Z = "唱片公司要求，当前歌曲须付费使用。",
            bFh0x = true;
        try {
            bR4V = top.api.feeMessage || {}
        } catch (e) {
            bR4V = {}
        }
        if (oa9R == 1 || oa9R == 8 || oa9R == 16) {
            if (u3x == "song") {
                pc9T = "m-popup-song-buy";
                cV4Z = bR4V["vip2"] || cV4Z;
                bmO5T = bR4V["vip2button"] || "包月购买";
                bmS5X = bR4V["vip2link"] || bmS5X;
                if (nv8n && nv8n.flag !== undefined) {
                    var bs4w = nv8n.flag.toString(2).split("");
                    if (parseInt(bs4w.pop(), 10) == 1) {
                        bFh0x = false
                    }
                }
            } else {
                cV4Z = bR4V["vip"] || cV4Z
            }
        } else if (oa9R == 4) {
            cV4Z = bR4V["album"] || cV4Z;
            bmO5T = "立即订购"
        } else {
            cV4Z = bR4V["unknow"] || cV4Z
        }
        l3x.kr7k({
            clazz: "m-layer-w5",
            html: a2x.cc4g(pc9T, {
                songTxt: bmS5X,
                tip: cV4Z,
                oktext: bmO5T,
                cctext: "以后再说",
                showSongText: bFh0x
            }),
            onaction: cDw4A.ew5B(null, oa9R, zW3x, eA5F)
        })
    };
    l3x.bFk0x = function(hy6s, gm6g) {
        l3x.hr6l({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(u3x) {
                if (u3x == "ok") {
                    l3x.Lr7k({
                        id: hy6s,
                        type: gm6g
                    })
                }
            }
        })
    };
    l3x.XX0x = function(kg7Z, oa9R) {
        var bR4V, cV4Z = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bR4V = top.api.feeMessage || {}
        } catch (e) {
            bR4V = {}
        }
        if (oa9R == 1 || oa9R == 8) {
            cV4Z = bR4V["vip"] || cV4Z
        } else if (oa9R == 4) {
            cV4Z = bR4V["album"] || cV4Z
        } else {
            cV4Z = bR4V["unknow"] || cV4Z
        }
        return l3x.kr7k({
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            clazz: "m-layer-w5",
            html: a2x.cc4g("m-popup-info", {
                tip: cV4Z,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d3x) {
                if (d3x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + kg7Z);
                    wf2x.eS5X("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: kg7Z || 0
                    })
                }
            }
        })
    };
    l3x.LQ7J = function() {
        function compareFee(cDt4x, cDq4u) {
            var bz4D = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bz4D[cDt4x] || 0) - (bz4D[cDq4u] || 0)
        }
        return function(i3x, cV4Z, so0x, eA5F) {
            so0x = so0x || {};
            var yv3x = [],
                LR7K = {},
                bFL0x = 0,
                bFN0x = 0,
                LS7L = null;
            if (!i3x || !i3x.length) return yv3x;
            k3x.bd4h(i3x, function(bj4n) {
                var fw5B = l3x.pX9O(bj4n);
                if (fw5B == 0) {
                    yv3x.push(bj4n)
                } else if (fw5B == 10) {
                    if (bj4n.privilege) {
                        bj4n.fee = bj4n.privilege.fee
                    }
                    if (compareFee(bj4n.fee, LR7K.fee) > 0) {
                        LR7K = bj4n
                    }
                } else if (fw5B == 11) {
                    ++bFL0x;
                    if (!so0x.play) yv3x.push(bj4n)
                } else if (fw5B == 1e3) {
                    ++bFN0x;
                    if (!so0x.download) yv3x.push(bj4n)
                } else if (fw5B == 100) {
                    LS7L = bj4n
                }
            });
            if (yv3x.length == 0 && cV4Z) {
                if (bFL0x == i3x.length) {
                    var tm0x = i3x[0].privilege || {};
                    if (tm0x.payed) {
                        l3x.iC7v("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l3x.vZ2x(tm0x.fee, null, null, eA5F)
                    }
                } else if (bFN0x == i3x.length) {
                    l3x.iC7v("因版权方要求，该歌曲不支持下载")
                } else if (LR7K.id) {
                    l3x.vZ2x(LR7K.fee, LR7K.id, null, eA5F, LR7K.privilege)
                } else {
                    if (LS7L && i3x.length == 1 && LS7L.privilege && LS7L.privilege.st < 0 && LS7L.privilege.toast) {
                        l3x.iC7v(null, null, null, true, LS7L)
                    } else {
                        l3x.iC7v()
                    }
                }
            }
            return yv3x
        }
    }();
    l3x.pX9O = function(bj4n) {
        if (!bj4n) return 0;
        var fw5B = bj4n.privilege;
        if (bj4n.program) return 0;
        if (window.GAbroad) return 100;
        if (fw5B) {
            if (fw5B.st != null && fw5B.st < 0) {
                return 100
            }
            if (fw5B.fee > 0 && fw5B.fee != 8 && fw5B.payed == 0 && fw5B.pl <= 0) return 10;
            if (fw5B.fee == 16) return 11;
            if ((fw5B.fee == 0 || fw5B.payed) && fw5B.pl > 0 && fw5B.dl == 0) return 1e3;
            if (fw5B.pl == 0 && fw5B.dl == 0) return 100;
            return 0
        } else {
            var ey5D = bj4n.status != null ? bj4n.status : bj4n.st != null ? bj4n.st : 0;
            if (bj4n.status >= 0) return 0;
            if (bj4n.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        w3x = c3x("nm.w"),
        b3x;
    if (!!w3x.bGg0x) return;
    var ck4o = ~[];
    ck4o = {
        bGn0x: ++ck4o,
        cDo4s: (![] + "")[ck4o],
        ki7b: ++ck4o,
        LU7N: (![] + "")[ck4o],
        XO0x: (ck4o[ck4o] + "")[ck4o],
        bGy0x: ++ck4o,
        cFv5A: ({} + "")[ck4o],
        cDl4p: (ck4o[ck4o] + "")[ck4o],
        cDk4o: (![] + "")[ck4o],
        SX9O: ++ck4o,
        XK0x: (!"" + "")[ck4o],
        cFw5B: ++ck4o,
        Ci4m: ++ck4o,
        bHi1x: ({} + "")[ck4o],
        xh2x: ++ck4o,
        cDh4l: ++ck4o,
        cFx5C: ++ck4o,
        cFy5D: ++ck4o
    };
    ck4o.LX7Q = (ck4o.LX7Q = ck4o + "")[ck4o.Ci4m] + (ck4o.LZ7S = ck4o.LX7Q[ck4o.ki7b]) + (ck4o.XI0x = (ck4o.DH4L + "")[ck4o.ki7b]) + (!ck4o + "")[ck4o.SX9O] + (ck4o.DI4M = ck4o.LX7Q[ck4o.xh2x]) + (ck4o.DH4L = (!"" + "")[ck4o.ki7b]) + (cDc4g = (!"" + "")[ck4o.bGy0x]) + ck4o.LX7Q[ck4o.Ci4m] + ck4o.DI4M + ck4o.LZ7S + ck4o.DH4L;
    ck4o.XI0x = ck4o.DH4L + (!"" + "")[ck4o.SX9O] + ck4o.DI4M + cDc4g + ck4o.DH4L + ck4o.XI0x;
    ck4o.DH4L = ck4o.bGn0x[ck4o.LX7Q][ck4o.LX7Q];
    w3x.bGg0x = ck4o
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        h3x = c3x("nej.v"),
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ui"),
        b3x;
    if (!!O3x.XG0x) return;
    var jd7W = a2x.ty0x(".#<uispace>{position:absolute;background:#fff;}");
    O3x.XG0x = NEJ.C();
    b3x = O3x.XG0x.N3x(O3x.PJ8B);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.bX4b([
            [document, "click", this.sT0x.f3x(this)]
        ]);
        this.cDa4e = !!e3x.nostop;
        this.bJg1x = {
            top: e3x.top,
            left: e3x.left
        }
    };
    b3x.bC4G = function() {
        delete this.zk3x;
        delete this.bkv4z;
        delete this.qP0x;
        delete this.bJB1x;
        delete this.XE0x;
        delete this.bJg1x;
        this.bG4K()
    };
    b3x.ch4l = function() {
        this.md8V = jd7W
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.Cr4v = this.o3x;
        h3x.s3x(this.o3x, "click", this.cCZ4d.f3x(this))
    };
    b3x.sT0x = function(d3x) {
        if (d3x.button != 2) this.bt4x()
    };
    b3x.cCZ4d = function(d3x) {
        if (this.cDa4e) return;
        h3x.uj1x(d3x);
        var F3x = h3x.X3x(d3x);
        if (F3x.tagName == "A") h3x.cn4r(d3x)
    };
    b3x.cCY4c = function() {
        var dg5l = /\s+/i;
        return function(oo9f) {
            oo9f = (oo9f || "").trim().toLowerCase().split(dg5l);
            oo9f[0] = oo9f[0] || "bottom";
            oo9f[1] = oo9f[1] || "left";
            this.qP0x = oo9f
        }
    }();
    b3x.cCX4b = function(oo9f) {
        var m3x = {},
            nn8f = this.bkv4z,
            cFz5E = a2x.pn9e(),
            cD4H = this.o3x.offsetWidth,
            ce4i = this.o3x.offsetHeight;
        switch (oo9f[0]) {
            case "top":
                m3x.top = nn8f.top - ce4i;
                m3x.left = oo9f[1] == "right" ? nn8f.left + nn8f.width - cD4H : nn8f.left;
                break;
            case "left":
                m3x.left = nn8f.left - cD4H;
                m3x.top = oo9f[1] == "bottom" ? nn8f.top + nn8f.height - ce4i : nn8f.top;
                break;
            case "right":
                m3x.left = nn8f.left + nn8f.width;
                m3x.top = oo9f[1] == "bottom" ? nn8f.top + nn8f.height - ce4i : nn8f.top;
                break;
            default:
                m3x.top = nn8f.top + nn8f.height;
                m3x.left = oo9f[1] == "right" ? nn8f.left + nn8f.width - cD4H : nn8f.left;
                break
        }
        return m3x
    };
    b3x.KL6F = function() {
        if (!this.bJB1x) {
            this.gK6E(this.bJg1x);
            return
        }
        if (!!this.XE0x) {
            this.gK6E(this.zk3x);
            return
        }
        if (!!this.bkv4z) this.gK6E(this.cCX4b(this.qP0x))
    };
    b3x.cCV4Z = function(F3x, dq5v, d3x) {
        dq5v = dq5v || bb3x;
        var bKs1x = a2x.pn9e(),
            db5g = h3x.jD7w(d3x) + (dq5v.left || 0),
            hw6q = h3x.lX8P(d3x) + (dq5v.top || 0),
            cD4H = F3x.offsetWidth + (dq5v.right || 0),
            ce4i = F3x.offsetHeight + (dq5v.bottom || 0),
            Md7W = bKs1x.scrollWidth,
            bjb4f = bKs1x.scrollHeight,
            bja4e = db5g + cD4H,
            biU4Y = hw6q + ce4i;
        switch (this.qP0x[0]) {
            case "top":
                hw6q = biU4Y > bjb4f ? hw6q - ce4i : hw6q;
                if (this.qP0x[1] == "right") {
                    db5g = db5g - cD4H < 0 ? 0 : db5g - cD4H
                } else {
                    db5g = bja4e > Md7W ? Md7W - cD4H : db5g
                }
                break;
            case "left":
                db5g = bja4e > Md7W ? Md7W - cD4H : db5g;
                if (this.qP0x[1] == "top") {
                    hw6q = biU4Y > bjb4f ? hw6q - ce4i : hw6q
                } else {
                    hw6q = hw6q - ce4i < 0 ? hw6q : hw6q - ce4i
                }
                break;
            case "right":
                db5g = db5g - cD4H < 0 ? 0 : db5g - cD4H;
                if (this.qP0x[1] == "top") {
                    hw6q = biU4Y > bjb4f ? hw6q - ce4i : hw6q
                } else {
                    hw6q = hw6q - ce4i < 0 ? hw6q : hw6q - ce4i
                }
                break;
            default:
                hw6q = hw6q - ce4i < 0 ? hw6q : hw6q - ce4i;
                if (this.qP0x[1] == "left") {
                    db5g = bja4e > Md7W ? Md7W - cD4H : db5g
                } else {
                    db5g = db5g - cD4H < 0 ? 0 : db5g - cD4H
                }
                break
        }
        return {
            top: hw6q,
            left: db5g
        }
    };
    b3x.biO4S = function() {
        var cCT4X = function(F3x, dq5v) {
            F3x = a2x.B3x(F3x);
            if (!F3x) return;
            dq5v = dq5v || bb3x;
            var bi4m = a2x.hO6I(F3x);
            return {
                top: bi4m.y - (dq5v.top || 0),
                left: bi4m.x - (dq5v.left || 0),
                width: F3x.offsetWidth + (dq5v.right || 0),
                height: F3x.offsetHeight + (dq5v.bottom || 0)
            }
        };
        return function(e3x) {
            e3x = e3x || bb3x;
            this.XE0x = e3x.event;
            this.cCY4c(e3x.align);
            if (!!this.XE0x) this.zk3x = this.cCV4Z(e3x.target, e3x.delta, this.XE0x);
            this.bkv4z = cCT4X(e3x.target, e3x.delta);
            this.bJB1x = !!e3x.fitable;
            this.J3x();
            return this
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ui"),
        b3x, L3x;
    if (!!O3x.Bb4f) return;
    O3x.Bb4f = NEJ.C();
    b3x = O3x.Bb4f.N3x(O3x.baa1x);
    L3x = O3x.Bb4f.cs4w;
    O3x.Bb4f.cFA5F = function() {
        var cCR4V = function(d3x, C3x, fI6C, kv8n, TD9u) {
            var cE4I, K3x = C3x + "-i",
                R3x = fI6C.zV3x,
                bLu2x = !!kv8n.noclear,
                bLR2x = !!kv8n.toggled;
            if (k3x.gE6y(kv8n.onbeforeclick)) {
                var Xv0x = kv8n.noclear,
                    cCQ4U = kv8n.toggled;
                try {
                    kv8n.onbeforeclick(kv8n)
                } catch (e) {}
                bLu2x = !!kv8n.noclear;
                bLR2x = !!kv8n.toggled;
                kv8n.toggled = cCQ4U;
                kv8n.noclear = Xv0x
            }
            var FN5S = R3x[K3x];
            if (bLR2x && !!FN5S) {
                FN5S.bt4x();
                return
            }
            h3x.bh4l(d3x);
            if (!bLu2x) {
                h3x.z3x(document, "click");
                cE4I = fI6C.A3x(kv8n)
            } else {
                cE4I = fI6C.bJd1x(kv8n, !0)
            }
            R3x[K3x] = cE4I;
            cE4I.xx3x("onbeforerecycle", function() {
                delete R3x[K3x]
            });
            cE4I.biO4S(TD9u)
        };
        return function(g3x, e3x) {
            g3x = a2x.B3x(g3x);
            if (!g3x) return this;
            if (!this.zV3x) this.zV3x = {};
            var C3x = a2x.lQ8I(g3x);
            if (!!this.zV3x[C3x]) return this;
            e3x = NEJ.X({}, e3x);
            var TD9u = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e3x);
            TD9u.target = C3x;
            e3x.destroyable = !0;
            if (!e3x.fixed) {
                TD9u.fitable = !0;
                e3x.parent = document.body
            }
            this.zV3x[C3x] = [C3x, e3x.event || "click", cCR4V.ew5B(null, C3x, this, e3x, TD9u)];
            h3x.s3x.apply(h3x, this.zV3x[C3x]);
            return this
        }
    }();
    O3x.Bb4f.cFB5G = function(g3x) {
        if (!this.zV3x) return this;
        var C3x = a2x.lQ8I(g3x),
            d3x = this.zV3x[C3x];
        if (!d3x) return this;
        delete this.zV3x[C3x];
        h3x.ms8k.apply(h3x, d3x);
        var cE4I = this.zV3x[C3x + "-i"];
        if (!!cE4I) cE4I.bt4x();
        return this
    };
    b3x.bie4i = function() {
        return O3x.XG0x.A3x(this.cg4k)
    };
    b3x.PR8J = function() {
        L3x.PR8J.apply(this, arguments);
        this.cg4k.top = null;
        this.cg4k.left = null;
        this.cg4k.nostop = !1
    };
    b3x.biO4S = function(e3x) {
        if (!!this.oK9B) this.oK9B.biO4S(e3x);
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bc4g = c3x("nej.ui"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.bia4e = NEJ.C();
    b3x = n3x.bia4e.N3x(bc4g.Bb4f);
    b3x.bm4q = function(e3x) {
        e3x.nohack = true;
        this.bn4r(e3x)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        n3x = c3x("nm.l"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    var FullscreenApi = l3x.FM5R || {};
    n3x.Z3x = NEJ.C();
    b3x = n3x.Z3x.N3x(n3x.bia4e);
    L3x = n3x.Z3x.cs4w;
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.ev5A = e3x.type || 1
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.o3x = a2x.os9j(this.cCN4R());
        var i3x = a2x.dm5r(this.o3x);
        this.ri0x = i3x[0];
        this.cu4y = i3x[1]
    };
    b3x.cCN4R = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b3x.KL6F = function() {
        var D3x = {},
            cj4n = this.o3x.style,
            jI7B = a2x.pn9e(),
            ov9m = {
                left: jI7B.scrollLeft,
                top: jI7B.scrollTop
            },
            dq5v = {
                left: jI7B.clientWidth - this.o3x.offsetWidth,
                top: jI7B.clientHeight - this.o3x.offsetHeight
            };
        D3x.top = Math.max(0, ov9m.top + dq5v.top / 2);
        D3x.left = Math.max(0, ov9m.left + dq5v.left / 2);
        this.oK9B.gK6E(D3x)
    };
    b3x.J3x = function(e3x) {
        L3x.J3x.call(this);
        this.KL6F();
        this.ev5A == 1 ? a2x.fk5p(this.ri0x, "u-icn-32", "u-icn-31") : a2x.fk5p(this.ri0x, "u-icn-31", "u-icn-32");
        this.cu4y.innerHTML = e3x.tip || ""
    };
    window.g_showTipCard = n3x.Z3x.J3x = function() {
        var eh5m;
        return function(e3x) {
            clearTimeout(eh5m);
            if (e3x.parent === undefined) e3x.parent = document[FullscreenApi.fullscreenElement] || document.body;
            if (e3x.autoclose === undefined) e3x.autoclose = true;
            e3x.clazz = "m-sysmsg";
            !!this.fl5q && this.fl5q.T3x();
            this.fl5q = this.A3x(e3x);
            this.fl5q.J3x(e3x);
            if (e3x.autoclose) eh5m = setTimeout(this.bt4x.f3x(this), 2e3)
        }.f3x(n3x.Z3x)
    }();
    n3x.Z3x.bt4x = function() {
        !!this.fl5q && this.fl5q.bt4x()
    }
})();
(function() {
    var c3x = NEJ.P,
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v3x.bl4p = v3x.bl4p.eH5M(function(d3x) {
            e3x = d3x.args[1];
            e3x.query = e3x.query || {};
            if (k3x.fB5G(e3x.query)) e3x.query = k3x.hu6o(e3x.query);
            e3x.query.ref = "mail"
        })
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        fu5z = NEJ.R,
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        n3x = c3x("nm.l"),
        K3x = "playlist-tracks_",
        b3x;
    q3x.fr5w({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q3x, e3x) {
                this.cCM4Q(Q3x.playlist);
                return {
                    total: 0,
                    list: fu5z
                }
            },
            onerror: function() {
                this.z3x("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q3x, e3x) {
                var na8S = Q3x.playlist;
                na8S.creator = GUser;
                na8S.isHost = !0;
                na8S.typeFlag = "playlist";
                return na8S
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.hY6S, "listchange", d3x)
            },
            onmessage: function() {
                var lV8N = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY4c) {
                    n3x.Z3x.J3x({
                        tip: lV8N[bY4c] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e3x) {
                e3x.id = e3x.data.pid
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.hY6S, "listchange", d3x)
            },
            onmessage: function() {
                var lV8N = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY4c) {
                    n3x.Z3x.J3x({
                        tip: lV8N[bY4c] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e3x) {
                var eA5F = e3x.ext || {};
                e3x.ext = NEJ.X(eA5F, e3x.data);
                e3x.data = {
                    id: e3x.ext.id
                }
            },
            format: function(Q3x, e3x) {
                n3x.Z3x.J3x({
                    tip: "收藏成功" + (Q3x.point > 0 ? ' 获得<em class="s-fc6">' + Q3x.point + "积分</em>" : "")
                });
                var p3x = e3x.ext;
                p3x.subscribedCount++;
                return p3x
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.cCL4P, "listchange", d3x);
                h3x.z3x(q3x.cCL4P, "itemchange", {
                    attr: "subscribedCount",
                    data: d3x.data
                })
            },
            onmessage: function() {
                var lV8N = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(bY4c) {
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: lV8N[bY4c] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e3x) {
                e3x.id = e3x.data.id = e3x.data.pid
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.hY6S, "listchange", d3x)
            },
            onmessage: function() {
                var lV8N = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(bY4c) {
                    n3x.Z3x.J3x({
                        tip: lV8N[bY4c],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e3x) {
                var j3x = e3x.data,
                    Xs0x = {};
                Xs0x["playlist-update-name"] = {
                    id: j3x.id,
                    name: j3x.name
                };
                Xs0x["playlist-update-tag"] = {
                    id: j3x.id,
                    tags: j3x.tags.join(";")
                };
                Xs0x["playlist-update-desc"] = {
                    id: j3x.id,
                    desc: j3x.description
                };
                e3x.data = Xs0x;
                e3x.ext = j3x
            },
            format: function(W3x, ro0x, TI9z, e3x) {
                if (W3x.code == 200 && ro0x.code == 200 && TI9z.code == 200) {
                    e3x.ext.allSuccess = true;
                    n3x.Z3x.J3x({
                        tip: "保存成功"
                    })
                } else if (W3x.code == 407 || ro0x.code == 407 || TI9z.code == 407) {
                    e3x.ext.allSuccess = false;
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e3x.ext.allSuccess = false;
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eL5Q(e3x.ext.id)
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.hY6S, "listchange", d3x)
            },
            onmessage: function(bY4c) {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q3x, e3x) {
                var p3x = this.eL5Q(e3x.ext.id);
                if (Q3x.code == 200) p3x.name = e3x.ext.name;
                return Q3x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q3x, e3x) {
                var p3x = this.eL5Q(e3x.ext.id);
                if (Q3x.code == 200) p3x.tags = e3x.ext.tags;
                return Q3x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q3x, e3x) {
                var p3x = this.eL5Q(e3x.ext.id);
                if (Q3x.code == 200) p3x.description = e3x.ext.description;
                return Q3x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e3x) {
                e3x.url = e3x.data.url;
                delete e3x.data.url
            },
            format: function(Q3x, e3x) {
                n3x.Z3x.J3x({
                    tip: "保存成功"
                });
                var p3x = this.eL5Q(e3x.data.id);
                p3x.coverImgUrl = e3x.url;
                e3x.ext = p3x;
                return p3x
            },
            onmessage: function(bY4c) {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.hY6S, "itemchange", {
                    attr: "coverImgUrl",
                    data: e3x.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q3x, e3x) {
                var na8S = this.eL5Q(e3x.data.id);
                if (!na8S) return;
                na8S.playCount++;
                h3x.z3x(q3x.hY6S, "itemchange", {
                    attr: "playcount",
                    data: na8S
                })
            }
        }
    });
    q3x.hY6S = NEJ.C();
    b3x = q3x.hY6S.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bPm3x = function() {
        var do5t = GUser.userId;
        this.lw8o({
            limit: 1001,
            key: "playlist_my-" + do5t,
            data: {
                offset: 0,
                limit: 1001,
                uid: do5t
            }
        })
    };
    b3x.cCM4Q = function(i3x) {
        var do5t = GUser.userId,
            iQ7J = [],
            bQa3x = [];
        k3x.bd4h(i3x, function(p3x) {
            p3x.typeFlag = "playlist";
            if (p3x.creator && p3x.creator.userId == do5t) {
                if (p3x.specialType == 5) p3x.name = "我喜欢的音乐";
                p3x.isHost = !0;
                iQ7J.push(p3x)
            } else {
                bQa3x.push(p3x)
            }
        });
        this.uK1x("playlist_new-" + do5t, iQ7J);
        this.uK1x("playlist_fav-" + do5t, bQa3x)
    };
    b3x.cCK4O = function(j3x) {
        this.cp4t("playlist-update-cover", {
            data: j3x
        })
    };
    b3x.cFC5H = function() {
        var TL9C = this.cCI4M.B3x("host-plist");
        if (TL9C.length == 0) {
            return
        }
        if (TL9C.length == 1 && TL9C[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = TL9C.length; i < len; i++) {
            var p3x = TL9C[i];
            if (p3x.trackCount > 0) return p3x.id
        }
        return this.cCI4M.B3x("host-plist")[0].id
    };
    b3x.cCH4L = function(C3x) {
        if (GUser && GUser.userId > 0) {
            this.cp4t("playlist-upcount", {
                data: {
                    id: C3x
                }
            })
        }
    };
    b3x.Fe5j = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b3x.cFD5I = function() {
        return GUser.userId
    };
    b3x.Fh5m = function(p3x) {
        if (p3x.userId == GUser.userId && p3x.specialType == 5) p3x.name = "我喜欢的音乐";
        h3x.z3x(this.constructor, "itemchange", {
            data: this.AF4J(p3x)
        });
        return p3x
    };
    I3x.fN6H.A3x({
        element: q3x.hY6S,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function() {
    var c3x = NEJ.P,
        fu5z = NEJ.R,
        br4v = NEJ.F,
        bb3x = NEJ.O,
        I3x = c3x("nej.ut"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    q3x.fr5w({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q3x) {
                return Q3x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e3x) {
                e3x.data.limit = 1e3;
                delete e3x.data.id
            },
            format: function(Q3x, e3x) {
                var bRe4i = [],
                    qr9i = Q3x.programs;
                if (qr9i) {
                    for (var i = 0, l = qr9i.length; i < l; i++) {
                        if (qr9i[i].programFeeType < 10 || qr9i[i].buyed) {
                            bRe4i.push(qr9i[i])
                        }
                    }
                }
                return bRe4i
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q3x, e3x) {
                return Q3x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e3x) {
                e3x.ext = e3x.data;
                e3x.data = {
                    id: e3x.ext.id
                };
                e3x.id = e3x.data.id
            },
            format: function(Q3x, e3x) {
                n3x.Z3x.J3x({
                    tip: "收藏成功"
                });
                var p3x = e3x.ext;
                p3x.subscribedCount++;
                p3x.subscribed = !0;
                return p3x
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.rw0x, "listchange", d3x)
            },
            onmessage: function() {
                var lV8N = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(bY4c) {
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: lV8N[bY4c] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.rw0x, "listchange", d3x)
            },
            onmessage: function() {
                var lV8N = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(bY4c) {
                    l3x.bhs4w({
                        txt: lV8N[bY4c] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e3x) {
                var p3x = this.eL5Q(e3x.data.id) || bb3x;
                e3x.ext = (p3x.listenerCount || 0) + 1
            },
            format: function(Q3x, e3x) {
                var p3x = this.eL5Q(e3x.data.id);
                if (!!p3x) {
                    p3x.listenerCount = Math.max(e3x.ext, p3x.listenerCount || 0)
                }
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.rw0x, "itemchange", {
                    attr: "playCount",
                    data: this.eL5Q(e3x.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e3x) {
                e3x.data = {
                    threadId: "A_DJ_1_" + e3x.id
                }
            },
            format: function(Q3x, e3x) {
                var p3x = e3x.ext.data || this.eL5Q(e3x.id);
                p3x.liked = true;
                p3x.likedCount++;
                e3x.ext.data = p3x;
                try {
                    top.player.setLike(p3x)
                } catch (e) {}
                return p3x
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.rw0x, "itemchange", {
                    attr: "likedCount",
                    data: e3x.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e3x) {
                e3x.data = {
                    threadId: "A_DJ_1_" + e3x.id
                }
            },
            format: function(Q3x, e3x) {
                var p3x = e3x.ext.data || this.eL5Q(e3x.id);
                p3x.liked = false;
                p3x.likedCount--;
                e3x.ext.data = p3x;
                try {
                    top.player.setLike(p3x)
                } catch (e) {}
                return p3x
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.rw0x, "itemchange", {
                    attr: "likedCount",
                    data: e3x.ext.data
                })
            }
        }
    });
    q3x.rw0x = NEJ.C();
    b3x = q3x.rw0x.N3x(q3x.hM6G);
    b3x.cFE5J = function() {
        var do5t = GUser.userId;
        this.lw8o({
            limit: 1001,
            key: "program_fav-" + do5t,
            data: {
                offset: 0,
                limit: 1e3,
                uid: do5t
            }
        })
    };
    b3x.cFF5K = function(cY5d) {
        var qu9l = cY5d[this.wW2x];
        l3x.cCB4F(4, function(R3x) {
            R3x.uK1x("track_program-" + qu9l, cY5d.songs)
        });
        delete cY5d.songs;
        var bO4S = cY5d.mainSong;
        l3x.cCB4F(4, function(R3x) {
            R3x.uK1x("track_program_main-" + qu9l, !bO4S ? [] : [bO4S])
        });
        cY5d.mainSong = (bO4S || bb3x).id
    };
    b3x.cFH5M = function(C3x) {
        var cY5d = this.eL5Q(C3x),
            do5t = localCache.YP1x("host.profile.userId");
        return !!cY5d && cY5d.dj.userId == do5t
    };
    b3x.cFI5N = function(C3x) {
        return !1
    };
    b3x.Fh5m = function(p3x) {
        h3x.z3x(this.constructor, "itemchange", {
            attr: "detail",
            data: this.AF4J(p3x)
        });
        return p3x
    };
    b3x.cCH4L = function(C3x) {
        this.cp4t("program-update-count", {
            data: {
                id: C3x
            }
        })
    };
    l3x.bSj5o = function(e3x) {
        var R3x = q3x.rw0x.A3x({
            onitemadd: function() {
                (e3x.onsuccess || br4v)()
            },
            onerror: function() {
                (e3x.onerror || br4v)()
            }
        });
        if (e3x.data.liked) {
            R3x.vd2x(e3x.data)
        } else {
            R3x.oZ9Q(e3x.data)
        }
    };
    b3x.oZ9Q = function(cY5d) {
        if (!l3x.gT6N()) return;
        var ct4x = {
            ext: {}
        };
        if (k3x.lG8y(cY5d)) {
            ct4x.id = cY5d.id;
            ct4x.ext.data = cY5d
        } else {
            ct4x.id = cY5d
        }
        this.cp4t("program-like", ct4x)
    };
    b3x.vd2x = function(cY5d) {
        if (!l3x.gT6N()) return;
        var ct4x = {
            ext: {}
        };
        if (k3x.lG8y(cY5d)) {
            ct4x.id = cY5d.id;
            ct4x.ext.data = cY5d
        } else {
            ct4x.id = cY5d
        }
        this.cp4t("program-unlike", ct4x)
    };
    I3x.fN6H.A3x({
        element: q3x.rw0x,
        event: ["listchange", "itemchange"]
    })
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        fu5z = NEJ.R,
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        n3x = c3x("nm.l"),
        l3x = c3x("nm.x"),
        K3x = "playlist-tracks_",
        l3x = c3x("nm.x"),
        b3x;
    q3x.fr5w({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e3x) {
                e3x.data.c = JSON.stringify([{
                    id: e3x.data.id
                }])
            },
            format: function(Q3x, e3x) {
                var bj4n = l3x.FP5U(Q3x.songs[0]);
                bj4n.privilege = Q3x.privileges[0];
                return bj4n
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e3x) {
                e3x.data.n = 1e3
            },
            format: function(Q3x, e3x) {
                var hB6v = [];
                this.tv0x.Fh5m(Q3x.playlist);
                k3x.bd4h(Q3x.playlist.tracks, function(bO4S, r3x) {
                    var bSN5S = l3x.FP5U(bO4S);
                    bSN5S.privilege = Q3x.privileges[r3x];
                    hB6v.push(bSN5S)
                }, this);
                return hB6v
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q3x, e3x) {
                var hB6v = [];
                k3x.bd4h(Q3x.songs, function(bj4n) {
                    hB6v.push(l3x.FP5U(bj4n))
                });
                return hB6v
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e3x) {
                var bz4D = {},
                    j3x = e3x.data,
                    cCp4t = this.hF6z(e3x.key) || [];
                FU5Z = [];
                k3x.bd4h(cCp4t, function(bO4S) {
                    var C3x = k3x.lG8y(bO4S) ? bO4S.id : bO4S;
                    bz4D[C3x] = true
                });
                e3x.ext = [];
                k3x.bd4h(j3x.tracks, function(bO4S) {
                    var C3x = k3x.lG8y(bO4S) ? bO4S.id : bO4S;
                    if (!bz4D[C3x]) {
                        FU5Z.push(C3x);
                        bz4D[C3x] = true;
                        e3x.ext.push(bO4S)
                    }
                });
                j3x.trackIds = JSON.stringify(FU5Z);
                j3x.op = "add";
                if (!FU5Z.length) {
                    e3x.value = {
                        code: 502
                    }
                }
            },
            format: function(Q3x, e3x) {
                n3x.Z3x.J3x({
                    tip: "已添加至歌单"
                });
                var na8S = this.tv0x.eL5Q(e3x.data.pid);
                if (!!Q3x.coverImgUrl) na8S.coverImgUrl = Q3x.coverImgUrl;
                k3x.mY8Q(e3x.ext, function(bO4S) {
                    this.zx3x(e3x, k3x.lG8y(bO4S) ? bO4S : null);
                    if (!!na8S) na8S.trackCount++
                }, this);
                h3x.z3x(q3x.hY6S, "itemchange", {
                    data: na8S || {},
                    cmd: "add"
                });
                this.z3x("onaddsuccess");
                return null
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.xI3x, "listchange", {
                    key: e3x.key,
                    action: "refresh"
                });
                var qu9l = e3x.data.pid,
                    cB4F = this.lo8g(e3x.key)
            },
            onmessage: function() {
                var lV8N = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(bY4c) {
                    setTimeout(function() {
                        n3x.Z3x.J3x({
                            tip: lV8N[bY4c] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e3x) {
                var j3x = e3x.data;
                e3x.ext = j3x.trackIds;
                j3x.trackIds = JSON.stringify(j3x.trackIds);
                j3x.op = "del"
            },
            format: function(Q3x, e3x) {
                var na8S = this.tv0x.eL5Q(e3x.data.pid);
                k3x.bd4h(e3x.ext, function(C3x) {
                    this.bqm6g({
                        id: C3x,
                        key: "track_playlist-" + e3x.data.pid
                    }, !0);
                    if (!!na8S) na8S.trackCount = Math.max(0, na8S.trackCount - 1)
                }, this);
                h3x.z3x(q3x.hY6S, "itemchange", {
                    data: na8S || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d3x, e3x) {
                h3x.z3x(q3x.xI3x, "listchange", {
                    key: e3x.key,
                    action: "refresh"
                })
            },
            onmessage: function(bY4c) {
                l3x.bhs4w({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q3x, e3x) {
                return this.bSY5d.Fh5m(Q3x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q3x, e3x) {
                var i3x = [];
                if (e3x.data.type == -1) {
                    if (Q3x.weekData && Q3x.weekData.length) {
                        e3x.data.type = 1
                    } else {
                        e3x.data.type = 0
                    }
                }
                if (e3x.data.type == 1) {
                    i3x = this.bTa5f(Q3x.weekData)
                } else {
                    i3x = this.bTa5f(Q3x.allData)
                }
                return i3x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q3x, e3x) {
                var nO9F = [],
                    i3x = Q3x.recommend || [];
                k3x.bd4h(i3x, function(bj4n, r3x) {
                    nO9F.push({
                        action: "recommendimpress",
                        json: {
                            alg: bj4n.alg,
                            scene: "user-song",
                            position: r3x,
                            id: bj4n.id
                        }
                    })
                });
                this.kO8G.Yc0x(nO9F);
                e3x.limit = i3x.length;
                return i3x
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e3x) {
                e3x.data.lv = 0;
                e3x.data.tv = 0
            },
            format: function(m3x, e3x) {
                return m3x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    q3x.xI3x = NEJ.C();
    b3x = q3x.xI3x.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        this.cF4J();
        this.tv0x = q3x.hY6S.A3x();
        this.bSY5d = q3x.rw0x.A3x();
        this.kO8G = q3x.hP6J.A3x()
    };
    b3x.bTa5f = function(i3x) {
        var m3x = [],
            fq5v = 0;
        k3x.bd4h(i3x, function(p3x, r3x) {
            var bj4n = l3x.FP5U(p3x.song);
            if (r3x == 0) {
                fq5v = p3x.score
            }
            bj4n.max = fq5v;
            bj4n.playCount = p3x.playCount;
            bj4n.score = p3x.score;
            m3x.push(bj4n)
        });
        return m3x
    };
    I3x.fN6H.A3x({
        element: q3x.xI3x,
        event: ["listchange"]
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        cx4B = c3x("nm.pc");
    var bhn4r = {
        playlist: "A_PL_0_",
        dj: "A_DJ_1_",
        program: "A_DJ_1_",
        album: "R_AL_3_",
        song: "R_SO_4_"
    };
    var qI0x = function(bR4V) {
        var Dx4B = "orpheus://orpheus";
        window.top.postMessage(JSON.stringify(bR4V), Dx4B)
    };
    var cCo4s = function(lZ8R) {
        var kV8N = "http://" + location.host + "/",
            TP9G = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            dQ5V = TP9G.exec(lZ8R);
        if (!dQ5V) return cCn4r(lZ8R);
        var gm6g = dQ5V[2],
            hy6s = dQ5V[3],
            do5t = dQ5V[4] || "",
            jr7k = "";
        switch (gm6g) {
            case "album":
                jr7k = "#/m/album/comment/?rid=" + bhn4r[gm6g] + hy6s + "&id=" + hy6s;
                break;
            case "playlist":
                jr7k = "#/m/playlist/comment/?rid=" + bhn4r[gm6g] + hy6s + "&id=" + hy6s;
                break;
            case "song":
            case "dj":
            case "program":
                jr7k = "#/m/song?rid=" + bhn4r[gm6g] + hy6s;
                break;
            case "event":
                jr7k = "#/m/friend/event/?id=" + hy6s + "&uid=" + do5t;
                break;
            case "user/home":
                jr7k = "#/m/personal/?uid=" + hy6s;
                break;
            case "mv":
                jr7k = "#/m2/mv/?id=" + hy6s;
                break;
            case "activity":
                jr7k = "#/m/friend/activity?id=" + hy6s;
                break;
            case "video":
                jr7k = "#/m2/mv/?id=" + hy6s + "&type=1";
                break;
            default:
                jr7k = "#/m/" + gm6g + "/?id=" + hy6s
        }
        return kV8N + jr7k
    };
    var cCn4r = function(lZ8R) {
        var cCk4o = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var dQ5V = cCk4o.exec(lZ8R);
        if (dQ5V) return "http://v.youku.com/v_show/id_" + dQ5V[1];
        return lZ8R
    };
    cx4B.ep5u = function(gm6g, hy6s) {
        qI0x({
            name: "play",
            args: {
                type: gm6g,
                id: hy6s
            }
        })
    };
    cx4B.fG6A = function() {
        qI0x({
            name: "pause"
        })
    };
    cx4B.AL4P = function(lZ8R) {
        qI0x({
            name: "open",
            args: {
                link: cCo4s(lZ8R)
            }
        })
    };
    cx4B.kI8A = function(gm6g, hy6s, cK4O) {
        qI0x({
            name: "share",
            args: {
                type: gm6g,
                id: hy6s,
                shareContent: cK4O
            }
        })
    };
    cx4B.bUN5S = function(gm6g, hy6s) {
        qI0x({
            name: "comment",
            args: {
                type: gm6g,
                id: hy6s
            }
        })
    };
    cx4B.cCj4n = function() {
        qI0x({
            name: "init"
        })
    };
    cx4B.AR4V = function(ce4i) {
        qI0x({
            name: "setHeight",
            args: {
                height: ce4i
            }
        })
    };
    cx4B.im7f = function(bF4J, U3x) {
        qI0x({
            name: "toast",
            args: {
                message: bF4J || "",
                state: U3x
            }
        })
    };
    cx4B.GD5I = function(lZ8R) {
        qI0x({
            name: "login",
            args: {
                link: lZ8R
            }
        })
    };
    cx4B.bVz6t = function(AS4W) {
        qI0x({
            name: "topbar",
            args: {
                show: !!AS4W
            }
        })
    };
    cx4B.cCi4m = function(bx4B) {
        qI0x({
            name: "refreshtopbar",
            args: {
                info: bx4B
            }
        })
    };
    cx4B.cCf4j = function(bs4w, r3x) {
        qI0x({
            name: "big",
            args: {
                arr: bs4w,
                index: r3x
            }
        })
    };
    cx4B.Lr7k = function(cy4C) {
        qI0x({
            name: "download",
            args: {
                img: cy4C
            }
        })
    };
    cx4B.byi8a = function(cCd4h) {
        qI0x({
            name: "scrollable",
            args: {
                scrollable: cCd4h
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
    var byu8m;
    var uU1x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cCc4g = 0;
    var byB8t = 0;
    var byM8E = 1;
    var byO8G = 0;
    var bgD3x = "";
    var byY8Q = "";
    var bzf8X = "";
    var Xl0x = "";
    var Xj0x = "";
    var bgc3x = "";
    var bzn8f = 0;
    var bzo8g = "";
    var Mr7k = "";
    var Hb5g = 0;
    var bfT3x = ntes_get_domain();
    var bfJ3x = null;
    var cFL5Q = "//analytics.163.com";
    var cBV4Z = function() {};

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
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bfT3x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bfT3x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bfT3x
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
    var cBU4Y = 0;
    var Ub9S = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Ub9S))
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
        var a = (1 << Ub9S) - 1;
        for (var b = 0; b < d.length * Ub9S; b += Ub9S) {
            c[b >> 5] |= (d.charCodeAt(b / Ub9S) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = cBU4Y ? "0123456789ABCDEF" : "0123456789abcdef";
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
        Xl0x = "-";
        bgc3x = "-";
        Xj0x = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            Xl0x = b.width + "x" + b.height;
            bgc3x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Xl0x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Xj0x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Xj0x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bzn8f = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cFM5R(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cBV4Z;
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
        var e = k || byu8m;
        bgD3x = escape(a || document.location);
        byY8Q = escape(m || document.title);
        bzf8X = l === true ? "" : escape(l || document.referrer);
        bzo8g = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bfJ3x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bfJ3x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bgD3x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bfJ3x) {
                uU1x = fetch_visitor_hash();
                byB8t = 1;
                ntes_set_cookie_long("_ntes_nnid", uU1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uU1x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uU1x = h.substr(0, o);
            Hb5g = h.substr(o + 1, p - o - 1);
            if (Hb5g == 0) {
                Hb5g = (new Date).getTime();
                f = true
            }
            if (!uU1x) {
                uU1x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uU1x + "," + Hb5g);
                ntes_set_cookie_long("_ntes_nuid", uU1x)
            }
            if (Hb5g != 0 && b - Hb5g > 365 * 86400 * 1e3) {
                Hb5g = 0;
                ntes_set_cookie_long("_ntes_nnid", uU1x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uU1x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Mr7k = c("P_INFO", "P_OINFO");
        Mr7k = Mr7k ? Mr7k.substr(0, Mr7k.indexOf("|")) : "";
        byO8G = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uU1x, "&_nvtm=", cCc4g, "&_nvsf=", byM8E, "&_nvfi=", byB8t, "&_nlag=", Xj0x, "&_nlmf=", bzn8f, "&_nres=", Xl0x, "&_nscd=", bgc3x, "&_nstm=", byO8G, "&_nurl=", bgD3x, "&_ntit=", byY8Q, "&_nref=", bzf8X, "&_nfla=", bzo8g, "&_nssn=", Mr7k, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        byM8E = 0;
        neteaseTracker.callback = null
    }
    byu8m = "iad";
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
                this.j3x = new r.init;
                this.bAi9Z = 0
            },
            Xf0x: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this.j3x.concat(a);
                this.bAi9Z += a.sigBytes
            },
            By4C: function(a) {
                var c = this.j3x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bAg9X, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bAk9b(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.j3x = this.j3x.clone();
                return a
            },
            bAg9X: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bxH8z()
        },
        update: function(a) {
            this.Xf0x(a);
            this.By4C();
            return this
        },
        finalize: function(a) {
            a && this.Xf0x(a);
            return this.Xc0x()
        },
        blockSize: 16,
        byd8V: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cBN4R: function(a) {
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
                t = this.bz4D;
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
                s = this.bz4D,
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
        bz4D: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
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
        bxH8z: function() {
            this.dR5W = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bAk9b: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dR5W.words,
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
        Xc0x: function() {
            var b = this.j3x,
                n = b.words,
                a = 8 * this.bAi9Z,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.By4C();
            b = this.dR5W;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dR5W = this.dR5W.clone();
            return b
        }
    });
    t.MD5 = v.byd8V(r);
    t.HmacMD5 = v.cBN4R(r)
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
                return this.create(this.bxE8w, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.cBE4I, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bAA9r = e;
                this.K3x = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.bxH8z()
            },
            process: function(e) {
                this.Xf0x(e);
                return this.By4C()
            },
            finalize: function(e) {
                e && this.Xf0x(e);
                return this.Xc0x()
            },
            keySize: 4,
            ivSize: 4,
            bxE8w: 1,
            cBE4I: 2,
            byd8V: function(e) {
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
        Xc0x: function() {
            return this.By4C(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this.bAE9v;
            c ? this.bAE9v = u : c = this.bAG9x;
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
                this.bAN9E = e;
                this.bAE9v = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAN9E,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bAG9x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bAN9E,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bAG9x = d
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
            if (this.bAA9r == this.bxE8w) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bAg9X = 1;
            this.fn5s = c.call(a, this, b && b.words)
        },
        bAk9b: function(a, b) {
            this.fn5s.processBlock(a, b)
        },
        Xc0x: function() {
            var a = this.cfg.padding;
            if (this.bAA9r == this.bxE8w) {
                a.pad(this.j3x, this.blockSize);
                var b = this.By4C(!0)
            } else b = this.By4C(!0), a.unpad(b);
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
                b = this.bew3x(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            bew3x: function(a, b) {
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
                c = this.bew3x(c, l.format);
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
            bxH8z: function() {
                for (var a = this.K3x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cBC4G = d + 6) + 1), e = this.cBB4F = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cBA4E = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) {
                this.bAP9G(a, b, this.cBB4F, t, r, w, v, l)
            },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bAP9G(a, c, this.cBA4E, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bAP9G: function(a, b, c, d, e, j, l, f) {
                for (var m = this.cBC4G, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
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
    u.AES = p.byd8V(d)
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
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function() {
    var c3x = NEJ.P,
        en5s = c3x("nej.g"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        Uf9W = c3x("nm.x.ek");
    Uf9W.emj = {
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
    Uf9W.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c3x = NEJ.P,
        en5s = c3x("nej.g"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        Uf9W = c3x("nm.x.ek"),
        l3x = c3x("nm.x");
    if (v3x.bl4p.redefine) return;
    window.GEnc = true;
    var bwA8s = function(cBy4C) {
        var m3x = [];
        k3x.bd4h(cBy4C, function(cBx4B) {
            m3x.push(Uf9W.emj[cBx4B])
        });
        return m3x.join("")
    };
    var cBw4A = v3x.bl4p;
    v3x.bl4p = function(Y3x, e3x) {
        var j3x = {},
            e3x = NEJ.X({}, e3x),
            lJ8B = Y3x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(Y3x) && !(e3x.headers && e3x.headers[en5s.ym3x] == en5s.HK6E) && !e3x.noEnc) {
            if (lJ8B != -1) {
                j3x = k3x.hu6o(Y3x.substring(lJ8B + 1));
                Y3x = Y3x.substring(0, lJ8B)
            }
            if (e3x.query) {
                j3x = NEJ.X(j3x, k3x.fB5G(e3x.query) ? k3x.hu6o(e3x.query) : e3x.query)
            }
            if (e3x.data) {
                j3x = NEJ.X(j3x, k3x.fB5G(e3x.data) ? k3x.hu6o(e3x.data) : e3x.data)
            }
            j3x["csrf_token"] = v3x.gC6w("__csrf");
            Y3x = Y3x.replace("api", "weapi");
            e3x.method = "post";
            delete e3x.query;
            var bBj9a = window.asrsea(JSON.stringify(j3x), bwA8s(["流泪", "强"]), bwA8s(Uf9W.md), bwA8s(["爱心", "女孩", "惊恐", "大笑"]));
            e3x.data = k3x.cC4G({
                params: bBj9a.encText,
                encSecKey: bBj9a.encSecKey
            })
        }
        cBw4A(Y3x, e3x)
    };
    v3x.bl4p.redefine = true
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
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        dx5C = c3x("nej.p"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        dE5J = c3x("nm.u"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        n3x = c3x("nm.l"),
        cx4B = c3x("nm.pc"),
        buj7c = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j3x = {
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
        cBs4w = function() {
            if (h3x && h3x.z3x) {
                h3x.dispatchEventalias = h3x.z3x
            }
        };
    cBs4w();
    l3x.btF7y = function(bO4S) {
        if (!bO4S || bO4S.copyrightId === undefined || !!bO4S.program) return false;
        if (window.GAbroad) {
            bO4S.fee = 0;
            return true
        }
        if (bO4S.status < 0) return true;
        var Uk9b;
        if (typeof GCopyrights !== "undefined") Uk9b = GCopyrights;
        try {
            if (!Uk9b && !!top.GCopyrights) Uk9b = top.GCopyrights
        } catch (e) {}
        if (Uk9b) {
            var r3x = k3x.dl5q(Uk9b, bO4S.copyrightId);
            if (r3x >= 0) return true
        }
        return false
    };
    l3x.btc7V = function() {
        var Dq4u = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            xv3x = {
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
            cBn4r = {
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
        var cBm4q = function(K3x, j3x, Uo9f) {
            switch (K3x) {
                case "event":
                    j3x = j3x.split("|");
                    return "/event?id=" + j3x[0] + "&uid=" + j3x[1];
                case "searchsong":
                case "searchlyric":
                    var u3x = K3x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j3x) + "&type=" + u3x;
                case "toplist":
                    return "/discover/toplist?id=" + j3x + "&_hash=songlist-" + Uo9f;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Uo9f;;
                case "record":
                    j3x = j3x.split("|");
                    return "/user/songs/rank?id=" + j3x[0] + "&cat=" + j3x[1];
                    break;
                default:
                    return "/" + K3x + "?id=" + j3x + "&_hash=songlist-" + Uo9f
            }
        };
        return function(ec5h, Uo9f) {
            if (!ec5h) return null;
            var LO7H = ec5h.fid || (ec5h.type != 18 ? ec5h.type : null),
                bsc7V = ec5h.fdata || ec5h.rid,
                bCe9V = ec5h.page || ec5h.fhref;
            var K3x = xv3x[LO7H];
            if (!K3x) {
                var Ak3x = (bCe9V || "").match(Dq4u);
                if (Ak3x) K3x = Ak3x[1]
            }
            if (!K3x) return null;
            return {
                title: cBn4r[K3x],
                link: !xv3x[LO7H] ? bCe9V : cBm4q(K3x, bsc7V, Uo9f),
                fid: LO7H,
                fdata: bsc7V
            }
        }
    }();
    l3x.WT0x = function(kA8s) {
        var dp5u = kA8s;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp5u = GUser;
        return dp5u
    };
    l3x.gT6N = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l3x.Mv7o = function() {
        var Dq4u = /#(.*?)$/;
        return function(gy6s) {
            var jK7D = gy6s === false ? location : top.location;
            return Dq4u.test(jK7D.href) ? RegExp.$1 : ""
        }
    }();
    l3x.Dc4g = function() {
        var CX4b = a2x.di5n("audio"),
            cBj4n = CX4b.canPlayType && CX4b.canPlayType("audio/mpeg");
        if (cBj4n) return 2;
        var cBh4l = l3x.bqp6j().supported;
        if (cBh4l) return 1;
        return 0
    };
    l3x.bqp6j = function() {
        var gn6h, bpT6N = !1,
            bpE6y = "";
        if (dx5C.dr5w.browser == "ie") {
            try {
                gn6h = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gn6h = null
            }
            if (gn6h) {
                bpT6N = !0;
                bpE6y = gn6h.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gn6h = navigator.plugins["Shockwave Flash"];
                if (gn6h) {
                    bpT6N = !0;
                    bpE6y = gn6h.description
                }
            }
        }
        return {
            supported: bpT6N,
            version: bpE6y
        }
    };
    l3x.rF0x = function() {
        return "网易云音乐"
    };
    l3x.cBg4k = function() {
        return j3x
    };
    l3x.bCX9O = function(cK4O) {
        var C3x = j3x[cK4O];
        return C3x == null ? "" : buj7c.replace("{ID}", C3x)
    };
    l3x.wI2x = function(bo4s, ee5j, CE4I) {
        if (!bo4s) return "";
        if (!!CE4I) {
            bo4s = l3x.cBf4j(bo4s)
        }
        return l3x.WN0x(l3x.cBe4i(bo4s, ee5j))
    };
    l3x.WM0x = function() {
        var TP9G = {
                AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
                LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
                ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
                ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
                LING: /\n/g,
                BLANK: /\s/g,
                MLINE: /([ \f\r\t\v]*\n){2,}/g
            },
            boN6H = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            },
            cBd4h = {
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
            cAZ3x = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cAW3x = function(dL5Q, boz6t) {
            dL5Q = MA7t(dL5Q);
            if (!!boz6t) {
                dL5Q = dL5Q.replace(TP9G.MLINE, "\n\n").replace(TP9G.LING, "</br>")
            }
            dL5Q = l3x.WN0x(dL5Q);
            return dL5Q
        };
        var MA7t = function(bo4s) {
            return k3x.Cb4f(cBd4h, bo4s)
        };
        return function(dL5Q, e3x, dC5H) {
            e3x = e3x || {};
            dC5H = dC5H || {};
            dC5H.actHash = {};
            var cAQ3x = !!e3x.parseLink,
                cAL3x = !!e3x.parseAct,
                cAK3x = e3x.linkTpl || boN6H.LINK,
                cAJ3x = e3x.atTpl || boN6H.AT,
                cAI3x = e3x.atUrl || "/user/home?nickname=",
                cAH3x = e3x.actTpl || boN6H.ACT,
                boz6t = !!e3x.keepSpace,
                bnT5Y = e3x.linkKlass || "s-fc7";
            cFV5a = e3x.actBiJson || "";
            if (!dL5Q) return "";
            dL5Q = dL5Q.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var lA8s = cAZ3x[cAQ3x + 2 * cAL3x],
                dg5l = TP9G[lA8s],
                bs4w = null,
                jZ7S = null,
                gq6k = 0,
                cFW5b = "",
                cFX5c = "";
            var pT9K = [];
            dg5l.lastIndex = 0;
            while (bs4w = dg5l.exec(dL5Q)) {
                var dQ5V = {
                    html: "",
                    before: bs4w.index - 1,
                    after: bs4w.index + bs4w[0].length
                };
                if (bs4w[1]) {
                    var jZ7S = bs4w[2].replace(/[^\x00-\xff]/g, "**");
                    if (jZ7S.length < 4 || jZ7S.length > 32) {} else {
                        var EE5J = a2x.eC5H(cAJ3x);
                        dQ5V.html = a2x.cc4g(EE5J, {
                            value: MA7t(bs4w[2]),
                            url: encodeURI(cAI3x + bs4w[2]),
                            klass: bnT5Y
                        });
                        pT9K.push(dQ5V)
                    }
                } else if (bs4w.length > 8 && bs4w[4]) {
                    var EE5J = a2x.eC5H(cAK3x);
                    dQ5V.html = a2x.cc4g(EE5J, {
                        value: MA7t(bs4w[4]),
                        url: bs4w[4],
                        klass: bnT5Y
                    });
                    pT9K.push(dQ5V)
                } else {
                    var bEM0x = lA8s == "ACT_NOLINK" ? 4 : 9;
                    var EE5J = a2x.eC5H(cAH3x);
                    dQ5V.html = a2x.cc4g(EE5J, {
                        value: MA7t(bs4w[bEM0x]),
                        klass: bnT5Y
                    });
                    pT9K.push(dQ5V);
                    dC5H.actHash[bs4w[bEM0x].slice(1, -1)] = true
                }
            }
            var bnh5m = pT9K.length,
                kA8s = {
                    before: dL5Q.length - 1,
                    after: 0
                },
                bnc5h = "";
            for (var i = 0; i <= bnh5m; i++) {
                var hv6p, fQ6K;
                hv6p = (pT9K[i - 1] || kA8s).after;
                fQ6K = (pT9K[i] || kA8s).before;
                if (fQ6K >= hv6p && hv6p >= 0 && fQ6K <= dL5Q.length - 1) {
                    bnc5h += cAW3x(dL5Q.substring(hv6p, fQ6K + 1), boz6t)
                }
                if (pT9K[i]) {
                    bnc5h += pT9K[i].html
                }
            }
            return bnc5h
        }
    }();
    l3x.cBf4j = function() {
        var dg5l = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bo4s) {
            return (bo4s || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(dg5l, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l3x.cBe4i = function() {
        var dg5l = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var ez5E = function(jZ7S, ee5j) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(jZ7S) + '" class="' + (ee5j || "") + '">@' + jZ7S + "</a>"
        };
        return function(bo4s, ee5j) {
            return (bo4s || "").replace(dg5l, function($0, $1) {
                return ez5E($1, ee5j)
            })
        }
    }();
    l3x.WN0x = function() {
        var dg5l = /\[(.*?)\]/g;
        return function(bo4s) {
            return (bo4s || "").replace(dg5l, function($1, $2) {
                var Y3x = l3x.bCX9O($2);
                return !Y3x ? $1 : '<img src="' + Y3x + '"/>'
            })
        }
    }();
    l3x.Ct4x = function(F3x, ee5j) {
        a2x.bE4I(F3x, ee5j) ? a2x.x3x(F3x, ee5j) : a2x.y3x(F3x, ee5j)
    };
    l3x.MB7u = function(cR4V, kV8N) {
        cR4V = a2x.B3x(cR4V);
        kV8N = a2x.B3x(kV8N);
        if (!cR4V || !kV8N) return !1;
        for (kV8N = kV8N.parentNode; !!kV8N && kV8N != cR4V; kV8N = kV8N.parentNode);
        return kV8N == cR4V
    };
    l3x.lq8i = function() {
        var bEV0x = function(gW6Q) {
            return (gW6Q < 10 ? "0" : "") + gW6Q
        };
        return function(kX8P) {
            kX8P = parseInt(kX8P) || 0;
            if (!kX8P) return "00:00";
            var Av3x = Math.floor(kX8P % 60),
                cAx3x = Math.floor(kX8P / 60);
            return bEV0x(cAx3x) + ":" + bEV0x(Av3x)
        }
    }();
    l3x.Ay3x = function(fU6O, xJ3x) {
        if (!fU6O || fU6O.length == 0) return "";
        xJ3x = xJ3x || "/";
        var bs4w = [];
        for (var i = fU6O.length - 1; i >= 0; i--) {
            bs4w.unshift(fU6O[i].name)
        }
        return bs4w.join(xJ3x)
    };
    l3x.rT0x = function() {
        var UF9w = function(hX6R, ee5j, cR4V, WI0x) {
            var ez5E = WI0x ? l3x.bmC5H : k3x.dH5M;
            if (!hX6R || !hX6R.name) return "";
            if (!hX6R.id) return '<span class="' + ee5j + '">' + ez5E(hX6R.name) + "</span>";
            return "<a" + (cR4V ? ' target="_blank"' : "") + ' class="' + ee5j + '" href="/artist?id=' + hX6R.id + '" hidefocus="true">' + ez5E(hX6R.name) + "</a>"
        };
        return function(fU6O, W3x, xJ3x, cR4V, bFB0x, WI0x) {
            if (!fU6O || !fU6O.length) return "";
            xJ3x = xJ3x || "/";
            W3x = W3x || "";
            MC7v = "";
            var eo5t = [];
            for (var i = 0, i3x = [], tP1x = [], fJ6D; i < fU6O.length; ++i) {
                eo5t.push(fU6O[i].name);
                if (!fU6O[i] || fU6O[i].id <= 0) {
                    tP1x.push(fU6O[i]);
                    continue
                }
                if (k3x.gE6y(W3x)) {
                    fJ6D = W3x(fU6O[i])
                } else {
                    fJ6D = UF9w(fU6O[i], W3x, cR4V, WI0x)
                }
                if (fJ6D && bFB0x && fU6O[i].tns && fU6O[i].tns.length > 0) {
                    MC7v = k3x.dH5M(fU6O[i].tns[0]);
                    fJ6D += '<span class="s-fc8" title="' + MC7v + '"> - (' + MC7v + ")</span>"
                }!!fJ6D && i3x.push(fJ6D)
            }
            for (var i = 0, fJ6D; i < tP1x.length; ++i) {
                if (k3x.gE6y(W3x)) {
                    fJ6D = W3x(tP1x[i])
                } else {
                    fJ6D = UF9w(tP1x[i], W3x, cR4V, WI0x)
                }
                if (fJ6D && bFB0x && tP1x[i].tns && tP1x[i].tns.length > 0) {
                    MC7v = k3x.dH5M(tP1x[i].tns[0]);
                    fJ6D += '<span class="s-fc8" title="' + MC7v + '"> - (' + MC7v + ")</span>"
                }!!fJ6D && i3x.push(fJ6D)
            }
            return '<span title="' + eo5t.join(xJ3x) + '">' + i3x.join(xJ3x) + "</span>"
        }
    }();
    l3x.Ac3x = function(fz5E, pY9P) {
        pY9P = pY9P || "86";
        return !!fz5E && (pY9P == "86" ? /^\d{11}$/ : /^\d+$/).test(fz5E)
    };
    l3x.cFY5d = function(fz5E) {
        if (!l3x.Ac3x(fz5E)) return fz5E;
        return fz5E.substring(0, 3) + "****" + fz5E.substr(7)
    };
    l3x.kw8o = function() {
        var dg5l = /^\s+$/g;
        return function(ig6a) {
            return !ig6a || dg5l.test(ig6a)
        }
    }();
    l3x.UJ9A = function() {
        var blX5c = /[^\x00-\xfff]/g;
        return function(ig6a) {
            var cAv3x = ig6a.match(blX5c) || [],
                dt5y = cAv3x.length;
            return ig6a.length + dt5y
        }
    }();
    l3x.AW4a = function() {
        var blX5c = /[^\x00-\xfff]/;
        return function(ig6a, eG5L) {
            for (var i = 0, len = ig6a.length; i < len && eG5L > 0; i++) {
                if (blX5c.test(ig6a.charAt(i))) {
                    eG5L -= 2;
                    if (eG5L < 0) {
                        break
                    }
                } else {
                    eG5L -= 1
                }
            }
            return ig6a.substring(0, i)
        }
    }();
    l3x.AZ4d = function(ig6a, eG5L, MY7R) {
        eG5L = eG5L || 10;
        MY7R = MY7R || nej.p.dr5w.engine == "trident" && parseInt(nej.p.dr5w.release) < 5;
        if (MY7R && l3x.UJ9A(ig6a) > eG5L) {
            return l3x.AW4a(ig6a, eG5L) + "..."
        } else {
            return ig6a
        }
    };
    l3x.bGr0x = function(g3x) {
        return g3x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(g3x.type || g3x.href || ~g3x.tabIndex)
    };
    l3x.cAt3x = function(d3x, cR4V) {
        if (!d3x || !cR4V) return !0;
        var g3x, u3x = d3x.type.toLowerCase();
        if (u3x == "mouseout") {
            g3x = d3x.relatedTarget || d3x.toElement
        } else if (u3x == "mouseover") {
            g3x = d3x.relatedTarget || d3x.fromElement
        }
        return !g3x || g3x !== cR4V && !l3x.MB7u(cR4V, g3x)
    };
    l3x.tu0x = function() {
        R3x = {};
        return function(g3x, ed5i) {
            var C3x = a2x.lQ8I(g3x),
                K3x = "hover-" + C3x;
            if (!ed5i || !C3x || !!R3x[K3x]) return;
            R3x[K3x] = !0;
            h3x.s3x(C3x, "mouseover", function() {
                var ble5j = a2x.H3x(g3x, "hshow") || [];
                var bla5f = a2x.H3x(g3x, "icn-dislike") || [];
                a2x.y3x(C3x, "z-hover");
                a2x.ba3x(ble5j[0], "display", "block");
                a2x.ba3x(bla5f[0], "display", "block")
            });
            h3x.s3x(C3x, "mouseout", function() {
                var ble5j = a2x.H3x(g3x, "hshow") || [];
                var bla5f = a2x.H3x(g3x, "icn-dislike") || [];
                a2x.x3x(C3x, "z-hover");
                a2x.ba3x(ble5j[0], "display", "none");
                a2x.ba3x(bla5f[0], "display", "none")
            })
        }
    }();
    l3x.bGA0x = function() {
        var bz4D = {
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
        return function(ig6a) {
            return k3x.Cb4f(bz4D, ig6a)
        }
    }();
    l3x.zp3x = function(bA4E) {
        if (k3x.EQ5V(bA4E)) bA4E = bA4E.getTime();
        var eT5Y = new Date,
            ko7h = eT5Y.getTime() - bA4E;
        if (ko7h <= 6e4) return "刚刚";
        var ns8k = eT5Y.getHours() * 36e5 + eT5Y.getMinutes() * 6e4 + eT5Y.getSeconds() * 1e3;
        if (ko7h <= ns8k) {
            if (ko7h < 36e5) {
                var FZ5e = Math.floor(ko7h / 6e4);
                return FZ5e + "分钟前"
            }
            return k3x.ia6U(bA4E, "HH:mm")
        } else {
            if (ko7h < ns8k + 864e5) {
                return "昨天" + k3x.ia6U(bA4E, "HH:mm")
            } else {
                var gF6z = eT5Y.getFullYear(),
                    UL9C = new Date(gF6z, 0, 1);
                var ns8k = eT5Y.getTime() - UL9C.getTime();
                if (ko7h < ns8k) {
                    return k3x.ia6U(bA4E, "M月d日 HH:mm")
                }
                return k3x.ia6U(bA4E, "yyyy年M月d日")
            }
        }
    };
    l3x.cAs3x = function(bA4E) {
        if (k3x.EQ5V(bA4E)) bA4E = bA4E.getTime();
        var eT5Y = new Date,
            ko7h = eT5Y.getTime() - bA4E;
        var ns8k = eT5Y.getHours() * 36e5 + eT5Y.getMinutes() * 6e4 + eT5Y.getSeconds() * 1e3;
        if (ko7h <= ns8k) {
            return "今天" + k3x.ia6U(bA4E, "HH:mm")
        } else {
            if (ko7h < ns8k + 864e5) {
                return "昨天" + k3x.ia6U(bA4E, "HH:mm")
            } else {
                return k3x.ia6U(bA4E, "yy-MM-dd HH:mm")
            }
        }
    };
    l3x.cAr3x = function(bA4E) {
        if (k3x.EQ5V(bA4E)) bA4E = bA4E.getTime();
        var eT5Y = new Date,
            ko7h = eT5Y.getTime() - bA4E;
        if (ko7h <= 6e4) return "刚刚";
        var ns8k = eT5Y.getHours() * 36e5 + eT5Y.getMinutes() * 6e4 + eT5Y.getSeconds() * 1e3;
        if (ko7h <= ns8k) {
            if (ko7h < 36e5) {
                var FZ5e = Math.floor(ko7h / 6e4);
                return FZ5e + "分钟前"
            }
            return k3x.ia6U(bA4E, "HH:mm")
        } else {
            if (ko7h < ns8k + 864e5) {
                return "昨天" + k3x.ia6U(bA4E, "HH:mm")
            } else if (ko7h < ns8k + 864e5 * 6) {
                var gF6z = eT5Y.getFullYear(),
                    UL9C = new Date(gF6z, 0, 1);
                var ns8k = eT5Y.getTime() - UL9C.getTime();
                if (ko7h < ns8k) {
                    return k3x.ia6U(bA4E, "M月d日 HH:mm")
                }
                return k3x.ia6U(bA4E, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l3x.WF0x = function() {
        var dg5l = /\{(.*?)\}/gi;
        return function(pc9T, j3x) {
            return (pc9T || "").replace(dg5l, function($1, $2) {
                var D3x = j3x[$2];
                return D3x == null ? $1 : D3x
            })
        }
    }();
    l3x.fr5w = function() {
        var bf4j = Array.prototype.slice.call(arguments, 0),
            pc9T = bf4j.shift();
        if (pc9T) {
            return pc9T.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bf4j.length ? bf4j[$2] : $1
            })
        }
        return ""
    };
    l3x.ME7x = function(i3x, ee5j, ku8m) {
        return "";
        ku8m = ku8m || " - ";
        if (i3x && i3x.length) {
            return ku8m + (!!ee5j ? '<span class="' + ee5j + '">' + i3x[0] + "</span>" : i3x[0])
        }
        return ""
    };
    l3x.bHC1x = function() {
        if (window.getSelection) {
            var si0x = window.getSelection();
            if (si0x && si0x.focusNode && si0x.focusNode.tagName) {
                var BG4K = a2x.dm5r(si0x.focusNode);
                for (var i = 0, yt3x; i < BG4K.length; ++i) {
                    yt3x = BG4K[i].tagName;
                    if (!yt3x) continue;
                    yt3x = yt3x.toLowerCase();
                    if (yt3x == "textarea" || yt3x == "input") return !0
                }
            }
        } else if (document.selection) {
            var de5j = document.selection.createRange();
            if (de5j) {
                var g3x = de5j.parentElement();
                if (g3x && g3x.tagName) {
                    var yt3x = g3x.tagName.toLowerCase();
                    if (yt3x == "textarea" || yt3x == "input") return !0
                }
            }
        }
        return !1
    };
    l3x.Cc4g = function(fF6z) {
        if (/^[A-Z]\:\\/i.test(fF6z)) {
            fF6z = fF6z.split("\\")
        } else {
            fF6z = fF6z.split("/")
        }
        fF6z = fF6z[fF6z.length - 1];
        return fF6z
    };
    l3x.cAq3x = function() {
        var DO4S = [13, 17, 34, 19, 18, 21];
        return function(C3x) {
            var bs4w = (C3x || "").split("_");
            return {
                type: DO4S[bs4w[2]] || -1,
                id: bs4w[3] || ""
            }
        }
    }();
    l3x.bIB1x = function(gn6h) {
        if (!gn6h) {
            return true
        }
        for (var k in gn6h) {
            return false
        }
        return true
    };
    l3x.bko4s = function(dp5u) {
        if (!dp5u) {
            return ""
        }
        if (4 == dp5u.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp5u.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp5u.expertTags && dp5u.expertTags.length || !l3x.bIB1x(dp5u.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l3x.UP9G = function(hI6C) {
        if (!hI6C) return "";
        var dt5y = hI6C.length,
            ip7i = [];
        ip7i[0] = dt5y / 3 | 0;
        ip7i[1] = ip7i[0] + ((dt5y - ip7i[0]) / 2 | 0);
        return hI6C.substring(0, ip7i[0]) + hI6C.substring(ip7i[0], ip7i[1]).replace(/\d/g, "*") + hI6C.substring(ip7i[1], dt5y)
    };
    l3x.cFZ5e = function(r3x, cB4F) {
        return (r3x % cB4F + cB4F) % cB4F
    };
    l3x.biE4I = function() {
        var DO4S = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(C3x) {
            var bs4w = (C3x || "").split("_"),
                m3x = {
                    type: DO4S[bs4w[2]] || -1,
                    id: bs4w[3] || ""
                };
            if (m3x.type == "event") {
                m3x.uid = bs4w[4] || "";
                return "/" + m3x.type + "?id=" + m3x.id + "&uid=" + m3x.uid
            }
            return "/" + m3x.type + "?id=" + m3x.id
        }
    }();
    l3x.bil4p = function() {
        var DO4S = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(C3x) {
            var bs4w = (C3x || "").split("_");
            return DO4S[bs4w[2]] || "资源"
        }
    }();
    l3x.cAn3x = function(bv4z) {
        var qs = bv4z.length > 0 ? bv4z.substring(1) : "",
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
    l3x.bgM3x = function(ot9k, Vb0x) {
        var Wv0x = 0,
            ey5D = new Array;
        k3x.bd4h(ot9k, function(Y3x, r3x) {
            var cy4C = a2x.di5n("img");
            cy4C.src = Y3x;
            h3x.s3x(cy4C, "load", function(r3x, d3x) {
                ey5D[r3x] = 1;
                Wv0x++;
                if (Wv0x == ot9k.length) Vb0x(ot9k, ey5D)
            }.f3x(this, r3x));
            h3x.s3x(cy4C, "error", function(d3x, r3x) {
                ey5D[r3x] = 0;
                Wv0x++;
                if (Wv0x == ot9k.length) Vb0x(ot9k, ey5D)
            }.f3x(this, r3x))
        })
    };
    l3x.MM7F = function(i3x, dZ5e) {
        var m3x = [];
        k3x.bd4h(i3x, function(p3x, r3x, P3x) {
            m3x.push(dZ5e(p3x, r3x, P3x))
        });
        return m3x
    };
    l3x.bfw3x = function(i3x, dZ5e, P3x) {
        var m3x = [];
        k3x.bd4h(i3x, function(p3x, r3x) {
            if (dZ5e.call(P3x, p3x, r3x, i3x)) {
                m3x.push(p3x)
            }
        });
        return m3x
    };
    l3x.bJI1x = function(bo4s) {
        return k3x.dH5M((bo4s || "").replace(/\s{2,}/g, " ").trim())
    };
    var cAk3x = {
        r: /\<|\>/g,
        "<": "&lt;",
        ">": "&gt;"
    };
    l3x.cAj3x = function(bo4s) {
        return k3x.Cb4f(cAk3x, bo4s)
    };
    l3x.bxL8D = function(bj4n) {
        if (bj4n.transNames && bj4n.transNames.length) {
            return bj4n.transNames[0]
        } else if (bj4n.alias && bj4n.alias.length) {
            return bj4n.alias[0]
        }
    };
    l3x.bwC8u = function(TI9z) {
        if (TI9z) {
            return TI9z.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l3x.bvv7o = function(g3x) {
        var g3x = a2x.B3x(g3x),
            cK4O = g3x && g3x.getElementsByTagName("textarea")[0],
            K3x = a2x.t3x(g3x, "key"),
            btY7R = a2x.t3x(g3x, "simple") == "1",
            cAi3x = a2x.t3x(g3x, "pvnamed") == "1",
            cAh3x = q3x.xI3x.gk6e();
        if (!(g3x && cK4O && K3x)) return;
        var Wn0x, bmf5k, Wh0x;
        Wn0x = a2x.H3x(a2x.B3x("m-playlist"), "j-img");
        k3x.bd4h(Wn0x, function(iW7P) {
            if (!Wh0x && a2x.t3x(iW7P, "key")) {
                Wh0x = a2x.t3x(iW7P, "key");
                iW7P.removeAttribute("data-key")
            }
        });
        Wn0x = a2x.H3x(a2x.B3x("m-playlist"), "m-info");
        k3x.bd4h(Wn0x, function(iW7P) {
            if (!bmf5k && iW7P.id && iW7P.id.indexOf("auto-id-") == 0) {
                bmf5k = iW7P.id.slice(8, 12)
            }
        });
        var D3x = cK4O.value || cK4O.defaultValue;
        if (Wh0x) {
            D3x = decodeURIComponent(k3x.cAg3x(D3x, "param=" + bmf5k + Wh0x))
        }
        D3x = JSON.parse(D3x);
        if (cAi3x) {
            l3x.cAd3x(D3x)
        }
        if (btY7R) {
            D3x = l3x.FP5U(D3x)
        }
        cAh3x.uK1x(K3x, D3x);
        g3x.innerHTML = "";
        return K3x
    };
    l3x.cAc3x = function(qp9g) {
        if (!qp9g.onbeforelistload) {
            qp9g.onbeforelistload = function(d3x) {
                d3x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qp9g.onemptylist) {
            qp9g.onemptylist = function(d3x) {
                d3x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qp9g.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qp9g
    };
    l3x.cAd3x = function(hB6v) {
        k3x.bd4h(hB6v, function(bO4S) {
            bO4S.privilege = bO4S.pv;
            delete bO4S.pv
        })
    };
    l3x.FP5U = function(ir7k) {
        if (k3x.eJ5O(ir7k)) {
            var dC5H = [];
            k3x.bd4h(ir7k, function(btY7R) {
                dC5H.push(bLh2x(btY7R))
            });
            return dC5H
        } else {
            return bLh2x(ir7k)
        }

        function bLh2x(ir7k) {
            if (!ir7k) return null;
            var dC5H = {
                album: ir7k.al,
                alias: ir7k.alia || ir7k.ala || [],
                artists: ir7k.ar || [],
                commentThreadId: "R_SO_4_" + ir7k.id,
                copyrightId: ir7k.cp || 0,
                duration: ir7k.dt || 0,
                id: ir7k.id,
                mvid: ir7k.mv || 0,
                name: ir7k.name || "",
                cd: ir7k.cd,
                position: ir7k.no || 0,
                ringtone: ir7k.rt,
                rtUrl: ir7k.rtUrl,
                status: ir7k.st || 0,
                pstatus: ir7k.pst || 0,
                fee: ir7k.fee || 0,
                version: ir7k.v || 0,
                eq: ir7k.eq,
                songType: ir7k.t || 0,
                mst: ir7k.mst,
                score: ir7k.pop || 0,
                ftype: ir7k.ftype,
                rtUrls: ir7k.rtUrls,
                transNames: ir7k.tns,
                privilege: ir7k.privilege,
                lyrics: ir7k.lyrics
            };
            return dC5H
        }
    };
    l3x.cGa5f = function() {
        var g3x = a2x.os9j('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(g3x);
        h3x.s3x(g3x, "click", function(d3x) {
            h3x.bh4l(d3x);
            a2x.cM4Q(g3x)
        })
    };
    l3x.iG7z = function(cz4D) {
        if (cz4D < 1e5) {
            return cz4D
        } else if (cz4D < 1e8) {
            return Math.floor(cz4D / 1e3) / 10 + "万"
        } else {
            return Math.floor(cz4D / 1e7) / 10 + "亿"
        }
    };
    l3x.wa2x = function(cz4D, cK4O) {
        return "<i>" + (cz4D ? "(" + cz4D + ")" : cK4O) + "</i>"
    };
    l3x.bLy2x = function(u3x, ih7a) {
        var e3x = {};
        if (!k3x.lG8y(ih7a)) {
            return e3x
        }
        switch (parseInt(u3x)) {
            case 17:
                e3x.title = ih7a.name;
                e3x.author = (ih7a.radio || []).name;
                e3x.picUrl = ih7a.coverUrl;
                e3x.category = ih7a.radio.category;
                break;
            case 19:
                e3x.title = ih7a.name;
                e3x.author = l3x.Ay3x(ih7a.artists);
                e3x.authors = l3x.Ay3x(ih7a.artists, " / ");
                e3x.picUrl = ih7a.picUrl;
                break;
            case 13:
                e3x.title = ih7a.name;
                e3x.author = (ih7a.creator || []).nickname;
                e3x.picUrl = ih7a.coverImgUrl;
                break;
            case 18:
                e3x.title = ih7a.name;
                e3x.author = l3x.Ay3x(ih7a.artists);
                e3x.picUrl = (ih7a.album || []).picUrl;
                break;
            case 20:
                e3x.title = ih7a.name;
                e3x.author = "";
                e3x.picUrl = ih7a.img1v1Url;
                break;
            case 21:
                e3x.title = ih7a.name;
                e3x.author = ih7a.artistName;
                e3x.authors = l3x.Ay3x(ih7a.artists, " / ");
                e3x.picUrl = ih7a.newCover || ih7a.cover;
                break;
            case 70:
                e3x.title = ih7a.name;
                e3x.author = (ih7a.dj || []).nickname;
                e3x.picUrl = ih7a.picUrl;
                e3x.category = ih7a.category;
                break;
            default:
                break
        }
        return e3x
    };
    l3x.bMa2x = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l3x.Vw0x = function(ez5E, or9i, e3x) {
        var bJ4N, bf4j, m3x;
        var gU6O = null;
        var vO2x = 0;
        if (!e3x) e3x = {};
        var As3x = function() {
            vO2x = e3x.leading === false ? 0 : +(new Date);
            gU6O = null;
            m3x = ez5E.apply(bJ4N, bf4j);
            if (!gU6O) bJ4N = bf4j = null
        };
        return function() {
            var eT5Y = +(new Date);
            if (!vO2x && e3x.leading === false) vO2x = eT5Y;
            var HB6v = or9i - (eT5Y - vO2x);
            bJ4N = this;
            bf4j = arguments;
            if (HB6v <= 0 || HB6v > or9i) {
                if (gU6O) {
                    clearTimeout(gU6O);
                    gU6O = null
                }
                vO2x = eT5Y;
                m3x = ez5E.apply(bJ4N, bf4j);
                if (!gU6O) bJ4N = bf4j = null
            } else if (!gU6O && e3x.trailing !== false) {
                gU6O = setTimeout(As3x, HB6v)
            }
            return m3x
        }
    };
    l3x.MR7K = function(ez5E, or9i, pt9k) {
        var gU6O, bf4j, bJ4N, Ch4l, m3x;
        var As3x = function() {
            var gq6k = new Date - Ch4l;
            if (gq6k < or9i && gq6k >= 0) {
                gU6O = setTimeout(As3x, or9i - gq6k)
            } else {
                gU6O = null;
                if (!pt9k) {
                    m3x = ez5E.apply(bJ4N, bf4j);
                    if (!gU6O) bJ4N = bf4j = null
                }
            }
        };
        return function() {
            bJ4N = this;
            bf4j = arguments;
            Ch4l = new Date;
            var Vy0x = pt9k && !gU6O;
            if (!gU6O) gU6O = setTimeout(As3x, or9i);
            if (Vy0x) {
                m3x = ez5E.apply(bJ4N, bf4j);
                bJ4N = bf4j = null
            }
            return m3x
        }
    };
    l3x.Vz0x = function(g3x, hk6e) {
        if (g3x) {
            var g3x = g3x.firstElementChild;
            if (g3x) {
                g3x.firstElementChild && (g3x = g3x.firstElementChild);
                g3x.setAttribute("xlink:href", "/style/pc/svg/" + hk6e)
            }
        }
    };
    l3x.bNz2x = function(eo5t) {
        if (!eo5t || !eo5t.length) {
            return
        }
        eo5t = /^#(.+?)#$/.exec(eo5t)[1];
        eo5t = eo5t.replace(/\s/g, " ");
        v3x.bl4p("/api/act/detail", {
            type: "json",
            method: "post",
            data: k3x.cC4G({
                actname: eo5t
            }),
            onload: function(Q3x) {
                if (!Q3x || Q3x.code != 200 || !Q3x.act) {
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + Q3x.act.actId)
                }
            },
            onerror: function(ca4e) {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    };
    l3x.cAa3x = function(eo5t) {
        if (!eo5t || !eo5t.length) {
            return
        }
        var VA0x = location.host;
        eo5t = /^#(.+?)#$/.exec(eo5t)[1];
        eo5t = eo5t.replace(/\s/g, " ");
        v3x.bl4p("/api/act/detail", {
            type: "json",
            method: "post",
            data: k3x.cC4G({
                actname: eo5t
            }),
            onload: function(Q3x) {
                if (!Q3x || Q3x.code != 200 || !Q3x.act) {
                    cx4B.im7f("该话题暂未创建")
                } else {
                    cx4B.AL4P(VA0x + "/activity?id=" + Q3x.act.actId)
                }
            },
            onerror: function(ca4e) {
                cx4B.im7f("操作失败，请稍后再试")
            }
        })
    };
    l3x.boV6P = function(yX3x, sD0x) {
        if (!yX3x || !sD0x) return false;
        if (yX3x == sD0x) return true;
        return l3x.boV6P(yX3x, sD0x.parentNode)
    };
    a2x.cI4M = function(bI4M, jg7Z) {
        if (!bI4M) return null;
        if (!jg7Z) return bI4M.firstChild;
        return a2x.H3x(bI4M, jg7Z)[0]
    };
    l3x.bOE3x = function(ig6a) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(ig6a)
    };
    l3x.bOI3x = function(ig6a, VO0x) {
        VO0x = VO0x || "86";
        if (VO0x == "86") return /^\d{11}$/.test(ig6a);
        return /^\d+$/.test(ig6a)
    };
    l3x.cGb5g = function(vi2x) {
        if (!vi2x) {
            return "0b"
        }
        var czX3x = ["Bytes", "KB", "MB", "GB"];
        var bc4g = Math.floor(Math.log(vi2x) / Math.log(1024));
        return (vi2x / Math.pow(1024, Math.floor(bc4g))).toFixed(bc4g == 1 ? 0 : 1) + czX3x[bc4g]
    };
    l3x.bPo3x = function(dL5Q, fq5v, czW3x) {
        if (!dL5Q) return dL5Q;
        var dt5y = k3x.fx5C(dL5Q);
        if (dt5y <= fq5v) return dL5Q;
        var bgi3x = dt5y - dL5Q.length,
            bxF8x = dL5Q.length - bgi3x;
        var fC5H = Math.ceil(fq5v / 2),
            czU3x = fq5v,
            bPU3x = 0;
        if (bgi3x < fC5H) fC5H = fq5v - bgi3x;
        if (bxF8x < fq5v) fq5v = bxF8x + Math.ceil((fq5v - bxF8x) / 2);
        while (fC5H <= fq5v) {
            bPU3x = k3x.fx5C(dL5Q.substr(0, fC5H));
            var bqg6a = czU3x - bPU3x;
            if (bqg6a == 0) break;
            if (bqg6a == 1) {
                var czT3x = k3x.fx5C(dL5Q.charAt(fC5H));
                if (czT3x == 1) {
                    fC5H++;
                    break
                } else {
                    break
                }
            }
            fC5H += Math.floor(bqg6a / 2)
        }
        return dL5Q.substr(0, fC5H) + (!!czW3x ? "" : "...")
    };
    l3x.czR3x = function(bq4u) {
        bq4u = bq4u || 10;
        var cN4R = "";
        for (var i = 0; i < bq4u; i++) {
            cN4R += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cN4R
    };
    var czQ3x = /([A-Za-z0-9 \.\-\(\)\!\?])/,
        czP3x = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        czO3x = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bQD4H = function(czN3x) {
        var bq4u = k3x.Bq4u(1, 5),
            czM3x = Math.random() < .5,
            iQ7J = "";
        if (czN3x) {
            if (czM3x) {
                while (bq4u >= 0) {
                    iQ7J += czO3x[k3x.Bq4u(0, 500)];
                    bq4u--
                }
            } else {
                iQ7J = l3x.czR3x(bq4u)
            }
        } else {
            iQ7J = k3x.OK8C(bq4u)
        }
        return '<div class="soil">' + iQ7J + "</div>"
    };
    l3x.bmC5H = function(er5w) {
        er5w = k3x.Az3x(er5w);
        try {
            var bq4u = er5w.length,
                r3x = k3x.Bq4u(1, bq4u - 1);
            while (r3x < bq4u) {
                if (czP3x.test(er5w.charAt(r3x))) {
                    return k3x.dH5M(er5w.slice(0, r3x)) + bQD4H(true) + k3x.dH5M(er5w.slice(r3x))
                } else if (czQ3x.test(er5w.charAt(r3x))) {
                    return k3x.dH5M(er5w.slice(0, r3x)) + bQD4H() + k3x.dH5M(er5w.slice(r3x))
                } else {
                    r3x++
                }
            }
            return k3x.dH5M(er5w)
        } catch (e) {
            return k3x.dH5M(er5w)
        }
    };
    l3x.baJ2x = function(li8a, mM8E) {
        return "//nos.netease.com/" + li8a + "/" + mM8E
    };
    l3x.czK3x = function(fF6z) {
        var dQ5V = /(.+)(\.[^\.]+$)/.exec(fF6z);
        return dQ5V ? {
            filename: dQ5V[1],
            suffix: dQ5V[2]
        } : {
            filename: fF6z || "",
            suffix: ""
        }
    };
    l3x.bRh4l = function(bs4w, czH3x) {
        var dC5H = [];
        k3x.bd4h(bs4w, function(id6X) {
            dC5H.push(czH3x(id6X))
        });
        return dC5H
    };
    var czG3x = {
        title: "name",
        durationms: "duration",
        coverUrl: "cover",
        playTime: "playCount",
        vid: "id",
        subscribed: "subed"
    };
    l3x.bRn4r = function(xM3x) {
        var j3x = NEJ.X({}, xM3x);
        k3x.eI5N(xM3x, function(p3x, K3x) {
            var bRs4w = czG3x[K3x];
            if (bRs4w) {
                j3x[bRs4w] = p3x
            }
        });
        var VS0x = xM3x.creator || [];
        if (!k3x.eJ5O(VS0x)) {
            VS0x = [VS0x]
        }
        if (VS0x) {
            j3x.artists = [];
            k3x.bd4h(VS0x, function(p3x) {
                j3x.artists.push({
                    name: p3x.nickname || p3x.userName,
                    id: p3x.userId
                })
            })
        }
        if (!!xM3x.aliaName) {
            j3x.alias = [xM3x.aliaName]
        }
        if (!!xM3x.transName) {
            j3x.transNames = [xM3x.transName]
        }
        return j3x
    };
    l3x.czE3x = function(Y3x) {
        return (Y3x || "").replace(/^https?:/, "")
    };
    l3x.Fh5m = function(cN4R) {
        if (!k3x.fB5G(cN4R)) return cN4R;
        var dC5H = null;
        try {
            dC5H = JSON.parse(cN4R)
        } catch (_e) {}
        return dC5H
    };
    var czB3x = '<span class="s-fc7 f-tdn">${value}</span>';
    l3x.czA3x = function(cK4O, uk1x, e3x) {
        e3x = e3x || {};
        if (!uk1x) {
            return k3x.dH5M(cK4O)
        }
        cK4O = k3x.Az3x(cK4O);
        var pT9K = [],
            bs4w = null,
            NG7z = new RegExp(l3x.bGA0x(uk1x), "gi"),
            pc9T = e3x.tpl || czB3x;
        while (bs4w = NG7z.exec(cK4O)) {
            var dQ5V = {
                html: "",
                before: bs4w.index - 1,
                after: bs4w.index + bs4w[0].length
            };
            var EE5J = a2x.eC5H(pc9T);
            dQ5V.html = a2x.cc4g(EE5J, {
                value: k3x.dH5M(bs4w[0])
            });
            pT9K.push(dQ5V)
        }
        var bnh5m = pT9K.length,
            kA8s = {
                before: cK4O.length - 1,
                after: 0
            },
            dC5H = "";
        for (var i = 0; i <= bnh5m; i++) {
            var hv6p, fQ6K;
            hv6p = (pT9K[i - 1] || kA8s).after;
            fQ6K = (pT9K[i] || kA8s).before;
            if (fQ6K >= hv6p && hv6p >= 0 && fQ6K <= cK4O.length - 1) {
                dC5H += k3x.dH5M(cK4O.substring(hv6p, fQ6K + 1))
            }
            if (pT9K[i]) {
                dC5H += pT9K[i].html
            }
        }
        return dC5H
    };
    l3x.oi9Z = function() {
        if (!window.WM) {
            var g3x = document.createElement("script");
            var pP9G = window.location.hostname;
            var bRR5W = window.location.protocol;
            a2x.gH6B(g3x, "type", "text/javascript");
            if (pP9G === "music.163.com") {
                a2x.gH6B(g3x, "src", bRR5W + "//s3.music.126.net/js/web2/3rd/acstatic-dun.min.js")
            } else {
                a2x.gH6B(g3x, "src", bRR5W + "//" + pP9G + "/js/web2/3rd/acstatic-dun.min.js")
            }
            g3x.onload = function(data) {
                initWatchman({
                    productNumber: "YD00000558929251",
                    onload: function(instance) {
                        window.WM = instance
                    }
                })
            };
            document.body.appendChild(g3x)
        }
    };
    l3x.sL0x = function(nZ9Q) {
        if (window.WM) {
            window.WM.getToken("bd5d2f973ef74cd2a61325a412ae54d9", nZ9Q)
        }
    };
    l3x.Dr4v = function(nZ9Q) {
        if (window.WM) {
            window.WM.getToken("0b0cdd23ed1144a0b78de049edc09824", nZ9Q)
        }
    }
})();
(function() {
    var k3x = NEJ.P("nej.u");

    function czx3x() {
        var Dl4p = function(if6Z) {
            if (if6Z < -128) {
                return Dl4p(128 - (-128 - if6Z))
            } else if (if6Z >= -128 && if6Z <= 127) {
                return if6Z
            } else if (if6Z > 127) {
                return Dl4p(-129 + if6Z - 127)
            } else {
                throw new Error("1001")
            }
        };
        var czw3x = function(if6Z, bi4m) {
            return Dl4p(if6Z + bi4m)
        };
        var czv3x = function(Wb0x, bkU5Z) {
            if (Wb0x == null) {
                return null
            }
            if (bkU5Z == null) {
                return Wb0x
            }
            var qZ0x = [];
            var czu3x = bkU5Z.length;
            for (var i = 0, bq4u = Wb0x.length; i < bq4u; i++) {
                qZ0x[i] = czw3x(Wb0x[i], bkU5Z[i % czu3x])
            }
            return qZ0x
        };
        var czt3x = function(Wc0x) {
            if (Wc0x == null) {
                return Wc0x
            }
            var qZ0x = [];
            var czq3x = Wc0x.length;
            for (var i = 0, bq4u = czq3x; i < bq4u; i++) {
                qZ0x[i] = Dl4p(0 - Wc0x[i])
            }
            return qZ0x
        };
        var czn3x = function(bmV5a, VD0x) {
            bmV5a = Dl4p(bmV5a);
            VD0x = Dl4p(VD0x);
            return Dl4p(bmV5a ^ VD0x)
        };
        var bTg5l = function(VB0x, bhe4i) {
            if (VB0x == null || bhe4i == null || VB0x.length != bhe4i.length) {
                return VB0x
            }
            var qZ0x = [];
            var czm3x = VB0x.length;
            for (var i = 0, bq4u = czm3x; i < bq4u; i++) {
                qZ0x[i] = czn3x(VB0x[i], bhe4i[i])
            }
            return qZ0x
        };
        var bTq5v = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var czl3x = function(dx5C) {
            var MQ7J = [];
            MQ7J.push(bTq5v[dx5C >>> 4 & 15]);
            MQ7J.push(bTq5v[dx5C & 15]);
            return MQ7J.join("")
        };
        var bTA5F = function(vi2x) {
            var bq4u = vi2x.length;
            if (vi2x == null || bq4u < 0) {
                return new String("")
            }
            var MQ7J = [];
            for (var i = 0; i < bq4u; i++) {
                MQ7J.push(czl3x(vi2x[i]))
            }
            return MQ7J.join("")
        };
        var bTC5H = function(Wj0x) {
            if (Wj0x == null || Wj0x.length == 0) {
                return Wj0x
            }
            var bob5g = new String(Wj0x);
            var qZ0x = [];
            var bq4u = bob5g.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bq4u; i++) {
                var pb9S = parseInt(bob5g.charAt(bi4m++), 16) << 4;
                var oO9F = parseInt(bob5g.charAt(bi4m++), 16);
                qZ0x[i] = Dl4p(pb9S + oO9F)
            }
            return qZ0x
        };
        var bTK5P = function(cN4R) {
            if (cN4R == null || cN4R == undefined) {
                return cN4R
            }
            var Vo0x = encodeURIComponent(cN4R);
            var vi2x = [];
            var bTO5T = Vo0x.length;
            for (var i = 0; i < bTO5T; i++) {
                if (Vo0x.charAt(i) == "%") {
                    if (i + 2 < bTO5T) {
                        vi2x.push(bTC5H(Vo0x.charAt(++i) + "" + Vo0x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vi2x.push(Vo0x.charCodeAt(i))
                }
            }
            return vi2x
        };
        var czi3x = function(wn2x) {
            var bc4g = 0;
            bc4g += (wn2x[0] & 255) << 24;
            bc4g += (wn2x[1] & 255) << 16;
            bc4g += (wn2x[2] & 255) << 8;
            bc4g += wn2x[3] & 255;
            return bc4g
        };
        var cGd5i = function(bc4g) {
            var wn2x = [];
            wn2x[0] = bc4g >>> 24 & 255;
            wn2x[1] = bc4g >>> 16 & 255;
            wn2x[2] = bc4g >>> 8 & 255;
            wn2x[3] = bc4g & 255;
            return wn2x
        };
        var cze3x = function(cS4W, bsi7b, bq4u) {
            var dC5H = [];
            if (cS4W == null || cS4W.length == 0) {
                return dC5H
            }
            if (cS4W.length < bq4u) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq4u; i++) {
                dC5H[i] = cS4W[bsi7b + i]
            }
            return dC5H
        };
        var bhl4p = function(cS4W, bsi7b, sJ0x, cyZ3x, bq4u) {
            if (cS4W == null || cS4W.length == 0) {
                return sJ0x
            }
            if (sJ0x == null) {
                throw new Error("1004")
            }
            if (cS4W.length < bq4u) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq4u; i++) {
                sJ0x[cyZ3x + i] = cS4W[bsi7b + i]
            }
            return sJ0x
        };
        var cyW3x = function(bq4u) {
            var bs4w = [];
            for (var i = 0; i < bq4u; i++) {
                bs4w[i] = 0
            }
            return bs4w
        };
        var cyV3x = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var MI7B = 64;
        var WA0x = 64;
        var bVm5r = 4;
        var cyU3x = function(qC9t) {
            var bVv6p = [];
            if (qC9t == null || qC9t == undefined || qC9t.length == 0) {
                return cyW3x(WA0x)
            }
            if (qC9t.length >= WA0x) {
                return cze3x(qC9t, 0, WA0x)
            } else {
                for (var i = 0; i < WA0x; i++) {
                    bVv6p[i] = qC9t[i % qC9t.length]
                }
            }
            return bVv6p
        };
        var cyT3x = function(WB0x) {
            if (WB0x == null || WB0x.length % MI7B != 0) {
                throw new Error("1005")
            }
            var biG4K = [];
            var bi4m = 0;
            var cyS3x = WB0x.length / MI7B;
            for (var i = 0; i < cyS3x; i++) {
                biG4K[i] = [];
                for (var j = 0; j < MI7B; j++) {
                    biG4K[i][j] = WB0x[bi4m++]
                }
            }
            return biG4K
        };
        var cyR3x = function(bVM6G) {
            var pb9S = bVM6G >>> 4 & 15;
            var oO9F = bVM6G & 15;
            var bi4m = pb9S * 16 + oO9F;
            return cyV3x[bi4m]
        };
        var bVO6I = function(bkp4t) {
            if (bkp4t == null) {
                return null
            }
            var bVT6N = [];
            for (var i = 0, bq4u = bkp4t.length; i < bq4u; i++) {
                bVT6N[i] = cyR3x(bkp4t[i])
            }
            return bVT6N
        };
        var bVU6O = function(MD7w, qC9t) {
            if (MD7w == null) {
                return null
            }
            if (MD7w.length == 0) {
                return []
            }
            if (MD7w.length % MI7B != 0) {
                throw new Error("1005")
            }
            qC9t = cyU3x(qC9t);
            var bkW5b = qC9t;
            var bom5r = cyT3x(MD7w);
            var UB9s = [];
            var cyQ3x = bom5r.length;
            for (var i = 0; i < cyQ3x; i++) {
                var bpB6v = bVO6I(bom5r[i]);
                bpB6v = bVO6I(bpB6v);
                var bpX6R = bTg5l(bpB6v, bkW5b);
                var cyP3x = czv3x(bpX6R, czt3x(bkW5b));
                bpX6R = bTg5l(cyP3x, qC9t);
                bhl4p(bpX6R, 0, UB9s, i * MI7B, MI7B);
                bkW5b = bom5r[i]
            }
            var byQ8I = [];
            bhl4p(UB9s, UB9s.length - bVm5r, byQ8I, 0, bVm5r);
            var bq4u = czi3x(byQ8I);
            if (bq4u > UB9s.length) {
                throw new Error("1006")
            }
            var qZ0x = [];
            bhl4p(UB9s, 0, qZ0x, 0, bq4u);
            return qZ0x
        };
        var cyO3x = function(WQ0x, K3x) {
            if (WQ0x == null) {
                return null
            }
            var bzc8U = new String(WQ0x);
            if (bzc8U.length == 0) {
                return []
            }
            var MD7w = bTC5H(bzc8U);
            if (K3x == null || K3x == undefined) {
                throw new Error("1007")
            }
            var qC9t = bTK5P(K3x);
            return bVU6O(MD7w, qC9t)
        };
        this.cyN3x = function(WQ0x, K3x) {
            var brc6W = cyO3x(WQ0x, K3x);
            var FB5G = new String(bTA5F(brc6W));
            var Af3x = [];
            var bsm7f = FB5G.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bsm7f; i++) {
                Af3x.push("%");
                Af3x.push(FB5G.charAt(bi4m++));
                Af3x.push(FB5G.charAt(bi4m++))
            }
            return Af3x.join("")
        };
        k3x.cAg3x = function(bsp7i, K3x) {
            return k3x.cyM3x(k3x.cEA4E(bsp7i), K3x)
        };
        k3x.cyM3x = function(bsp7i, K3x) {
            var brc6W = bVU6O(bsp7i, bTK5P(K3x));
            var FB5G = new String(bTA5F(brc6W));
            var Af3x = [];
            var bsm7f = FB5G.length / 2;
            var bi4m = 0;
            for (var i = 0; i < bsm7f; i++) {
                Af3x.push("%");
                Af3x.push(FB5G.charAt(bi4m++));
                Af3x.push(FB5G.charAt(bi4m++))
            }
            return Af3x.join("")
        }
    }
    window.settmusic = (new czx3x).cyN3x
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        K3x = "Search-tracks_",
        b3x;
    q3x.fr5w({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q3x) {
                return Q3x
            },
            onerror: function(Q3x, e3x) {
                if (Q3x.code == 407) {
                    e3x.onForbidden()
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
            filter: function(e3x, bg4k) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cyL3x(parseInt(e3x.data.type)) || "suggest",
                    keyword: e3x.data.s,
                    offset: e3x.offset
                })
            },
            format: function(Q3x, e3x) {
                if (Q3x.abroad) {
                    try {
                        Q3x.result = JSON.parse(decodeURIComponent(settmusic(Q3x.result, q3x.sk)))
                    } catch (e) {}
                }
                Q3x.result = Q3x.result || {};
                var i3x, cB4F, hK6E = [],
                    qs9j = e3x.data.s || "",
                    gc6W = e3x.data.limit,
                    u3x = parseInt(e3x.data.type) || 1,
                    m3x = Q3x.result;
                switch (u3x) {
                    case 1:
                        i3x = this.bzD8v(m3x.songs, e3x.data.hlpretag, e3x.data.hlposttag);
                        cB4F = m3x.songCount;
                        break;
                    case 10:
                        i3x = m3x.albums;
                        cB4F = m3x.albumCount;
                        break;
                    case 100:
                        i3x = m3x.artists;
                        cB4F = m3x.artistCount;
                        break;
                    case 1e3:
                        i3x = m3x.playlists;
                        cB4F = m3x.playlistCount;
                        break;
                    case 1002:
                        i3x = m3x.userprofiles;
                        cB4F = m3x.userprofileCount;
                        break;
                    case 1004:
                        i3x = m3x.mvs;
                        cB4F = m3x.mvCount;
                        break;
                    case 1014:
                        i3x = l3x.bRh4l(m3x.videos, l3x.bRn4r);
                        cB4F = m3x.videoCount;
                        break;
                    case 1006:
                        i3x = this.bzD8v(m3x.songs, e3x.data.hlpretag, e3x.data.hlposttag);
                        cB4F = m3x.songCount;
                        break;
                    case 1009:
                        var rq0x = m3x.djRadios;
                        if (!!rq0x) {
                            k3x.bd4h(rq0x, function(D3x, r3x, cyK3x) {
                                D3x.xid = D3x.id;
                                D3x.id = D3x.id + "_rad"
                            });
                            if (rq0x.length) {
                                this.uK1x("radio_search-" + e3x.data.s, rq0x)
                            }
                        }
                        cB4F = Math.min(m3x.djprogramCount, 500);
                        i3x = m3x.djprograms || [];
                        if (e3x.data.isPub) {
                            k3x.mY8Q(rq0x, function(D3x, r3x, cyK3x) {
                                D3x.stype = 1;
                                i3x.unshift(D3x)
                            });
                            cB4F = Math.min(i3x.length, 500)
                        }
                        break
                }
                this.z3x("onsearchload", Q3x);
                if (i3x && i3x.length) {
                    for (var i = 0; i < gc6W; i++) {
                        if (i < i3x.length) {
                            hK6E.push(i3x[i])
                        } else {
                            hK6E.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(cB4F || 0, qs9j.length < 3 ? 500 : 5e3),
                    list: hK6E
                }
            },
            onerror: function(Q3x, e3x) {
                e3x.onload(e3x, []);
                if (k3x.gE6y(e3x.onerror)) {
                    e3x.onerror(Q3x)
                }
            }
        }
    });
    q3x.FR5W = NEJ.C();
    b3x = q3x.FR5W.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.cyJ3x = function(K3x, e3x) {
        if (!K3x) return;
        if (!!this.bzM9D) v3x.kk7d(this.bzM9D);
        this.bzM9D = this.cp4t("search-suggest", NEJ.X({
            data: {
                s: K3x,
                limit: 8
            }
        }, e3x))
    };
    b3x.cyG3x = function(K3x, e3x) {
        if (!K3x) return;
        this.cp4t("search-multimatch", NEJ.X({
            data: {
                s: K3x
            }
        }, e3x))
    };
    b3x.bzD8v = function() {
        var cyF3x = function(hx6r, bzQ9H, bzR9I) {
            var cyE3x = hx6r.match(new RegExp(bzQ9H + "(.+?)" + bzR9I, "gi")),
                cz4D = 0;
            k3x.bd4h(cyE3x, function(p3x) {
                cz4D += p3x.replace(new RegExp(bzQ9H, "g"), "").replace(new RegExp(bzR9I, "g"), "").length
            });
            return cz4D
        };
        return function(jy7r, cyD3x, cyC3x) {
            var bAa9R = [];
            k3x.bd4h(jy7r, function(bj4n, bc4g) {
                bj4n = l3x.FP5U(bj4n);
                var WX0x = bj4n.lyrics || [],
                    dt5y = WX0x.length,
                    jO7H = 0,
                    cB4F = 4,
                    Xa0x = {
                        l: 0,
                        v: 0
                    },
                    bxs8k;
                if (dt5y > 4) {
                    k3x.bd4h(WX0x, function(hx6r, r3x) {
                        var bAl9c = cyF3x(hx6r, cyD3x, cyC3x);
                        if (bAl9c > Xa0x.v) {
                            Xa0x.v = bAl9c;
                            Xa0x.l = r3x
                        }
                    });
                    jO7H = Xa0x.l;
                    jO7H = Math.max(jO7H, 0);
                    bxs8k = dt5y - jO7H - 4;
                    if (bxs8k < 0) jO7H += bxs8k;
                    bj4n.lrcAbstractEnd = jO7H + cB4F - 1
                } else {
                    bj4n.lrcAbstractEnd = dt5y - 1
                }
                bj4n.lrcAbstractStart = jO7H;
                bj4n.indexId = (WX0x && WX0x.length ? "L" : "NL") + bj4n.id;
                bAa9R.push(bj4n)
            });
            return bAa9R
        }
    }();
    b3x.cyL3x = function(u3x) {
        switch (u3x) {
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
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        E3x = c3x("nm.m"),
        n3x = c3x("nm.l"),
        dw5B = c3x("nm.i"),
        M3x = c3x("nm.m.sch"),
        b3x, L3x;
    var Xd0x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    M3x.Uc9T = NEJ.C();
    b3x = M3x.Uc9T.N3x(I3x.cJ4N);
    b3x.cw4A = function(g3x) {
        this.cF4J();
        this.bW4a(g3x);
        this.S3x = q3x.FR5W.gk6e()
    };
    b3x.bW4a = function(g3x) {
        this.o3x = g3x;
        var i3x = a2x.H3x(g3x, "j-flag");
        this.eU5Z = i3x[0];
        this.bfI3x = i3x[1];
        this.cr4v = i3x[2];
        this.nk8c = i3x[3];
        h3x.s3x(this.eU5Z, "input", this.gh6b.f3x(this));
        h3x.s3x(this.eU5Z, "keyup", this.gh6b.f3x(this));
        h3x.s3x(this.eU5Z, "focus", this.gQ6K.f3x(this));
        h3x.s3x(this.bfI3x, "click", this.gQ6K.f3x(this));
        h3x.s3x(this.eU5Z, "blur", this.bfS3x.f3x(this));
        h3x.s3x(this.cr4v, "click", this.Xg0x.f3x(this));
        h3x.s3x(this.o3x, "keydown", this.bhE4I.f3x(this));
        h3x.s3x(this.o3x, "keypress", this.Xr0x.f3x(this));
        h3x.s3x(this.nk8c, "mouseover", this.TG9x.f3x(this));
        h3x.s3x(this.nk8c, "mouseout", this.TG9x.f3x(this));
        if (this.eU5Z.value) {
            this.eU5Z.value = ""
        }
        if (this.eU5Z.style.opacity != null) {
            this.eU5Z.style.opacity = 1
        }
    };
    b3x.gh6b = function(d3x) {
        if (d3x.type == "keyup" && d3x.keyCode == 8 || d3x.keyCode == 46) {
            this.GB5G()
        } else if (d3x.type == "input" || d3x.type == "propertychange") {
            setTimeout(this.GB5G.f3x(this), 0)
        }
    };
    b3x.gQ6K = function() {
        this.xU3x(this.bfI3x, !1);
        a2x.y3x(this.o3x, "m-srch-fcs");
        this.eU5Z.focus();
        this.GB5G();
        a2x.y3x((a2x.H3x("g-topbar", "j-showoff") || [])[0], "f-hide")
    };
    b3x.bfS3x = function() {
        if (!this.eU5Z.value) {
            this.xU3x(this.bfI3x, !0)
        }
        var GE5J = a2x.H3x(this.nk8c, "slt");
        if (this.Xw0x(this.nk8c) && GE5J.length > 0 && a2x.t3x(GE5J[0], "type")) {
            var hk6e = GE5J[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hk6e)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eU5Z.value
                })
            }
            this.bir4v(GE5J[0].href)
        }
        this.xU3x(this.nk8c, !1);
        a2x.x3x(this.o3x, "m-srch-fcs")
    };
    b3x.xU3x = function(g3x, lY8Q) {
        a2x.ba3x(g3x, "display", !lY8Q ? "none" : "")
    };
    b3x.Xw0x = function(g3x) {
        return a2x.df5k(g3x, "display") != "none"
    };
    b3x.GB5G = function() {
        var cyB3x = function(ig6a) {
            ig6a = k3x.Az3x(ig6a);
            var eG5L = this.o3x.clientWidth > 250 ? 41 : 17;
            if (l3x.UJ9A(ig6a) > eG5L) {
                ig6a = l3x.AW4a(ig6a, eG5L) + "..."
            }
            return k3x.dH5M(ig6a)
        };
        var Xx0x = function(m3x) {
            return m3x.songs && m3x.songs.length || m3x.albums && m3x.albums.length || m3x.artists && m3x.artists.length || m3x.playlists && m3x.playlists.length
        };
        var nZ9Q = function(uk1x, d3x) {
            if (!l3x.bGr0x(this.eU5Z) || l3x.kw8o(this.eU5Z.value)) {
                this.xU3x(this.nk8c, !1);
                return
            }
            d3x.keyword = k3x.dH5M(uk1x);
            var dW5b = a2x.cc4g("m-search-suggest", d3x, {
                    mark: l3x.czA3x.ew5B(this, uk1x),
                    cutStr: cyB3x.f3x(this)
                }),
                tL1x = d3x.result.order;
            this.nk8c.innerHTML = dW5b;
            this.xU3x(this.nk8c, Xx0x(d3x.result) ? !0 : !1);
            if (!!tL1x && !!tL1x.length && Xd0x[tL1x[0]]) {
                this.biy4C = {
                    keyword: uk1x,
                    type: Xd0x[tL1x[0]]
                }
            }
        };
        var cyA3x = function() {
            this.xU3x(this.nk8c, !1);
            return
        };
        return function() {
            var D3x = this.eU5Z.value;
            if (l3x.kw8o(D3x)) {
                this.xU3x(this.nk8c, !1);
                return
            }
            this.S3x.cyJ3x(D3x, {
                onload: nZ9Q.f3x(this, D3x),
                onForbidden: cyA3x.f3x(this)
            })
        }
    }();
    b3x.Xr0x = function(d3x) {
        if (d3x.keyCode != 13) return;
        var GE5J = a2x.H3x(this.nk8c, "slt");
        if (this.Xw0x(this.nk8c) && GE5J.length > 0) {
            this.bir4v(GE5J[0].href);
            this.xU3x(this.nk8c, !1);
            return
        }
        this.Xg0x();
        this.xU3x(this.nk8c, !1)
    };
    b3x.bhE4I = function(d3x) {
        if (!this.Xw0x(this.nk8c)) return;
        var i3x = a2x.H3x(this.nk8c, "xtag"),
            dt5y = i3x.length,
            r3x = k3x.dl5q(i3x, function(p3x) {
                return a2x.bE4I(p3x, "slt")
            });
        switch (d3x.keyCode) {
            case 38:
                if (r3x >= 0) a2x.x3x(i3x[r3x], "slt");
                a2x.y3x(i3x[r3x <= 0 ? dt5y - 1 : r3x - 1], "slt");
                break;
            case 40:
                if (r3x >= 0) a2x.x3x(i3x[r3x], "slt");
                a2x.y3x(i3x[(r3x + 1) % dt5y], "slt");
                break
        }
    };
    b3x.TG9x = function(d3x) {
        if (!this.Xw0x(this.nk8c)) return;
        var Ty9p, F3x = h3x.X3x(d3x),
            i3x = a2x.H3x(this.nk8c, "xtag");
        if (F3x.tagName.toLowerCase() == "a") Ty9p = F3x;
        else if (F3x.parentNode.tagName.toLowerCase() == "a") Ty9p = F3x.parentNode;
        if (!Ty9p) return;
        k3x.bd4h(i3x, function(p3x) {
            a2x.x3x(p3x, "slt");
            a2x.t3x(p3x, "type", "")
        });
        if (d3x.type == "mouseout") return;
        a2x.y3x(Ty9p, "slt");
        a2x.t3x(Ty9p, "type", "mouse")
    };
    b3x.Xg0x = function() {
        var dR5W = location.hash,
            r3x = dR5W.indexOf("?"),
            bv4z = k3x.hu6o(dR5W.substring(r3x + 1));
        bv4z.s = this.eU5Z.value;
        if (l3x.kw8o(bv4z.s)) return;
        if (!bv4z.type && this.biy4C && this.biy4C.keyword == bv4z.s) {
            bv4z.type = this.biy4C.type
        }
        this.bir4v("/search/#/?" + k3x.cC4G(bv4z));
        this.eU5Z.blur()
    };
    b3x.bir4v = function(Y3x) {
        if (location.dispatch2) {
            location.dispatch2(Y3x)
        } else {
            location.href = Y3x
        }
    };
    M3x.Uc9T.cyz3x = function() {
        var i3x = a2x.H3x(document.body, "j-suggest");
        k3x.bd4h(i3x, function(p3x) {
            new M3x.Uc9T(p3x)
        })
    };
    M3x.Uc9T.cyz3x()
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        b3x;
    q3x.fr5w({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q3x) {
                return {
                    total: Q3x.size || 0,
                    list: Q3x.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q3x) {
                return {
                    total: Q3x.size || 0,
                    list: Q3x.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q3x) {
                return Q3x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q3x, e3x) {
                if (e3x.offset == 0) {
                    var pH9y = Q3x.data[0];
                    this.z3x("onfirstload", pH9y);
                    Q3x.data.splice(0, 1);
                    return Q3x.data
                } else {
                    return Q3x.data
                }
            }
        }
    });
    q3x.GR5W = NEJ.C();
    b3x = q3x.GR5W.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.biL4P = function() {
        var te0x = "LOCAL_FLAG";
        return function(u3x, cyx3x) {
            var j3x = this.Hl5q(te0x, {});
            if (j3x[u3x]) {
                return true
            } else {
                if (!cyx3x) {
                    j3x[u3x] = true;
                    this.xr3x(te0x, j3x)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        biX4b;
    if (!!O3x.oj9a) return;
    O3x.oj9a = NEJ.C();
    biX4b = O3x.oj9a.N3x(O3x.cJ4N);
    biX4b.bm4q = function() {
        var cyw3x = function(d3x) {
            d3x.matched = d3x.source == d3x.target
        };
        return function(e3x) {
            e3x.oncheck = e3x.oncheck || cyw3x;
            this.bn4r(e3x);
            this.bU4Y = e3x.list;
            this.jk7d = e3x.dataset || "id";
            this.kT8L = e3x.selected || "js-selected"
        }
    }();
    biX4b.od9U = function(D3x) {
        var F3x, d3x = {
            target: D3x
        };
        k3x.bd4h(this.bU4Y, function(g3x) {
            delete d3x.matched;
            d3x.source = a2x.t3x(g3x, this.jk7d);
            this.z3x("oncheck", d3x);
            if (!d3x.matched) {
                a2x.x3x(g3x, this.kT8L)
            } else {
                F3x = g3x;
                a2x.y3x(g3x, this.kT8L)
            }
        }, this);
        return F3x
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ut"),
        pR9I;
    if (!!O3x.dh5m) return;
    O3x.dh5m = NEJ.C();
    pR9I = O3x.dh5m.N3x(O3x.cJ4N);
    pR9I.cw4A = function() {
        this.jf7Y = {};
        this.cF4J();
        this.bL4P()
    };
    pR9I.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.bjl4p = e3x.umi || "";
        this.Dg4k = e3x.dispatcher;
        this.Me7X = e3x.composite || bb3x;
        this.bpA6u({
            onshow: this.eX5c.f3x(this),
            onhide: this.kl7e.f3x(this),
            onrefresh: this.eE5J.f3x(this),
            onmessage: this.qS0x.f3x(this),
            onbeforehide: this.cyv3x.f3x(this)
        })
    };
    pR9I.bC4G = function() {
        delete this.bjl4p;
        this.jf7Y = {};
        this.bG4K()
    };
    pR9I.wi2x = function(d3x) {
        if (!!d3x) d3x.stopped = !0
    };
    pR9I.bL4P = br4v;
    pR9I.eX5c = br4v;
    pR9I.kl7e = br4v;
    pR9I.eE5J = br4v;
    pR9I.qS0x = br4v;
    pR9I.cyv3x = br4v;
    pR9I.no8g = function(nI9z, bF4J, fn5s) {
        this.Dg4k.bjs4w({
            to: nI9z,
            mode: fn5s || 0,
            data: bF4J,
            from: this.bjl4p
        })
    };
    pR9I.cGe5j = function(u3x, j3x) {
        this.Dg4k.Du4y(u3x, {
            from: this.bjl4p,
            data: j3x
        })
    };
    pR9I.cGg5l = function() {
        this.Dg4k.mw8o.apply(this.Dg4k, arguments)
    };
    pR9I.cyp3x = function() {
        return this.jf7Y
    };
    a2x.XB0x = function() {
        if (!!window.dispatcher) {
            dispatcher.bDz0x.apply(dispatcher, arguments)
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        br4v = NEJ.F,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        zU3x;
    if (!!O3x.du5z) return;
    O3x.du5z = NEJ.C();
    zU3x = O3x.du5z.N3x(O3x.dh5m);
    zU3x.cyo3x = function(e3x) {
        var bI4M;
        if (!bI4M) {
            var j3x = e3x.input || bb3x;
            bI4M = a2x.B3x(j3x.parent)
        }
        if (!bI4M) {
            var j3x = e3x.data || bb3x;
            bI4M = a2x.B3x(j3x.parent)
        }
        if (!bI4M) {
            bI4M = a2x.B3x(e3x.parent)
        }
        return bI4M
    };
    zU3x.eX5c = function(e3x) {
        var bI4M = this.cyo3x(e3x);
        if (!!bI4M && !!this.o3x) bI4M.appendChild(this.o3x);
        this.gL6F(e3x);
        this.bDN0x("onshow", e3x);
        this.eE5J(e3x)
    };
    zU3x.eE5J = function(e3x) {
        this.gj6d(e3x);
        this.bDN0x("onrefresh", e3x)
    };
    zU3x.kl7e = function() {
        this.ll8d();
        this.cyn3x();
        a2x.mR8J(this.o3x)
    };
    zU3x.bDT0x = function() {
        var gO6I = /^onshow|onrefresh|delay$/;
        return function(cl4p) {
            return gO6I.test(cl4p)
        }
    }();
    zU3x.bDX0x = br4v;
    zU3x.bDN0x = function() {
        var bDZ0x = function(bv4z, e3x, cl4p, qu9l) {
            if (this.bDT0x(qu9l)) return;
            if (!!bv4z) cl4p += (cl4p.indexOf("?") > 1 ? "&" : "?") + bv4z;
            var dn5s = this.bDX0x(qu9l, e3x) || {};
            dn5s.location = e3x;
            dn5s.parent = this.jf7Y[qu9l];
            this.Dg4k.iA7t(cl4p, {
                input: dn5s
            })
        };
        return function(u3x, e3x) {
            if (!e3x.nodelay) {
                if (!!this.Me7X.delay) return;
                var bEc0x = this.Me7X[u3x] || bb3x;
                if (bEc0x.delay) return
            }
            var bv4z = k3x.cC4G(e3x.param) || "";
            if (u3x == "onrefresh") {
                k3x.eI5N(this.Me7X, bDZ0x.f3x(this, bv4z, e3x))
            }
            k3x.eI5N(bEc0x, bDZ0x.f3x(this, bv4z, e3x))
        }
    }();
    zU3x.cyn3x = function() {
        var Da4e = function(cl4p, qu9l) {
            if (!this.bDT0x(qu9l)) this.Dg4k.bt4x(cl4p)
        };
        return function() {
            k3x.eI5N(this.Me7X, Da4e, this);
            k3x.eI5N(this.Me7X.onshow, Da4e, this);
            k3x.eI5N(this.Me7X.onrefresh, Da4e, this)
        }
    }()
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        E3x = c3x("nm.m"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        b3x, L3x;
    E3x.Tk9b = NEJ.C();
    b3x = E3x.Tk9b.N3x(I3x.cJ4N);
    b3x.cw4A = function() {
        this.cF4J();
        this.o3x = a2x.B3x("g-topbar");
        var i3x = a2x.H3x(this.o3x, "j-tflag");
        this.bjK4O = i3x[0];
        this.HM6G = i3x[1];
        this.bEi0x = i3x[2];
        this.bjR4V = i3x[3];
        this.cym3x = I3x.oj9a.A3x({
            list: this.bjK4O.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bjX4b = I3x.oj9a.A3x({
            list: this.bjR4V.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bX4b([
            [this.o3x, "click", this.Tg9X.f3x(this)],
            [this.HM6G, "click", this.cL4P.f3x(this)],
            [this.HM6G, "mouseout", this.bEv0x.f3x(this, 0)],
            [this.HM6G, "mouseover", this.bEv0x.f3x(this, 1)]
        ]);
        window.scrollTopbar = this.cyl3x.f3x(this);
        window.matchNav = this.bEx0x.f3x(this);
        window.polling = this.wk2x.f3x(this);
        this.blb5g = q3x.GR5W.A3x();
        this.cyk3x();
        this.LY7R();
        var bv4z = k3x.hu6o(location.href.split("?")[1]) || {};
        if (bv4z.market) {
            a2x.B3x("topbar-download-link").href = "/download?market=" + bv4z.market
        }
        var blc5h = a2x.H3x(this.o3x, "j-showoff");
        if (blc5h && !this.blb5g.biL4P("newMvSearch")) {
            a2x.x3x(blc5h[0], "f-hide");
            window.setTimeout(function() {
                a2x.y3x(blc5h[0], "f-hide")
            }, 5e3)
        }
        l3x.oi9Z()
    };
    b3x.wk2x = function(d3x) {
        var dR5W = l3x.Mv7o();
        if (!/^\/msg/.test(dR5W)) {
            var wu2x = 0;
            wu2x += d3x.comment;
            wu2x += d3x.forward;
            wu2x += d3x.msg;
            wu2x += d3x.notice;
            if (wu2x > 0) {
                wu2x = wu2x > 99 ? "99+" : wu2x;
                this.SW9N.innerText = wu2x;
                this.LV7O.innerText = wu2x;
                a2x.x3x(this.SW9N, "f-hide");
                a2x.x3x(this.LV7O, "f-hide");
                this.XP0x = true
            } else {
                a2x.y3x(this.SW9N, "f-hide");
                a2x.y3x(this.LV7O, "f-hide");
                this.XP0x = false
            }
            var eV5a = "/at";
            if (d3x.notice) eV5a = "/notify";
            if (d3x.comment) eV5a = "/comment";
            if (d3x.msg > 0) eV5a = "/private";
            if (d3x.forward > 0) eV5a = "/at";
            this.LV7O.parentNode.href = "/msg/#" + eV5a
        } else {
            this.LV7O.parentNode.href = "javascript:;";
            a2x.y3x(this.SW9N, "f-hide");
            a2x.y3x(this.LV7O, "f-hide");
            this.XP0x = false
        }
        var i3x = a2x.H3x(this.bjK4O, "j-t");
        if (!/^\/friend/.test(dR5W)) {
            if (i3x && i3x.length) {
                a2x.ba3x(i3x[0], "display", d3x.event > 0 ? "" : "none")
            }
        } else {
            a2x.ba3x(i3x[0], "display", "none")
        }
    };
    b3x.cL4P = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action");
        if (g3x) {
            switch (a2x.t3x(g3x, "action")) {
                case "login":
                    h3x.cn4r(d3x);
                    var u3x = a2x.t3x(g3x, "type");
                    if (u3x) {
                        if (u3x == "sina" || u3x == "tencent") {
                            this.Dk4o = g3x.href;
                            l3x.Dr4v(this.la8S.f3x(this));
                            this.SO9F = top.open()
                        } else top.login(u3x == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    h3x.cn4r(d3x);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.blb5g.biL4P("storeNew")) {
                        a2x.y3x(this.cGh5m, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.blb5g.biL4P("levelNew")) {
                        a2x.y3x(this.cGi5n, "f-vhide")
                    }
                    break
            }
        }
    };
    b3x.la8S = function(cG4K) {
        this.Dk4o += "&checkToken=" + cG4K || "";
        this.SO9F.location.href = this.Dk4o
    };
    b3x.Tg9X = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action");
        if (!g3x) return;
        var V3x = a2x.t3x(g3x, "action");
        switch (V3x) {
            case "bilog":
                var bnd5i = a2x.t3x(g3x, "logAction"),
                    bnK5P = a2x.t3x(g3x, "logJson");
                window.log(bnd5i, bnK5P);
                break
        }
    };
    b3x.bEv0x = function(LM7F, d3x) {
        if (this.boi5n) {
            this.boi5n.style.display = !LM7F ? "none" : "";
            (LM7F || !this.XP0x ? a2x.y3x : a2x.x3x).call(window, this.SW9N, "f-hide")
        }
    };
    b3x.cyl3x = function(gb6V) {
        a2x.ba3x(this.o3x, "top", -gb6V + "px")
    };
    b3x.bEx0x = function(eV5a, cyh3x) {
        this.cym3x.od9U(eV5a);
        if (eV5a == "discover") {
            a2x.y3x(this.bEi0x, "f-hide");
            a2x.x3x(this.bjR4V, "f-hide");
            window.g_topBarHeight = 105;
            this.bjX4b.od9U(cyh3x)
        } else {
            a2x.x3x(this.bEi0x, "f-hide");
            a2x.y3x(this.bjR4V, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b3x.cyk3x = function() {
        var em5r = a2x.B3x("g_iframe");
        if (!em5r) return;
        var gy6s = em5r.contentWindow.document.getElementById("g_top");
        this.bEx0x(a2x.t3x(gy6s, "module"), a2x.t3x(gy6s, "sub"))
    };
    var Yb0x = {},
        bFr0x = /\/\/\w+/,
        cyg3x = {
            avatarUrl: function(a, b) {
                a = a || "";
                b = b || "";
                return a.replace(bFr0x, "") !== b.replace(bFr0x, "")
            },
            userId: true,
            nickname: true,
            reward: true,
            topic: true,
            djStatus: true
        };
    b3x.cyc3x = function(Yi0x) {
        var nU9L = k3x.dl5q(cyg3x, function(D3x, K3x) {
            if (k3x.gE6y(D3x)) {
                return D3x(Yi0x[K3x], Yb0x[K3x])
            } else {
                return Yi0x[K3x] !== Yb0x[K3x]
            }
        });
        Yb0x = Yi0x;
        return Yi0x[nU9L]
    };
    b3x.LY7R = function() {
        var dp5u = GUser || {},
            cyb3x = GUserAcc || {};
        if (dp5u && dp5u.userId) {
            var bFC0x = NEJ.X(dp5u, cyb3x);
            if (this.cyc3x(bFC0x)) {
                a2x.dA5F(this.HM6G, "m-topbar-user-login", bFC0x)
            }
        } else {
            Yb0x = {};
            this.HM6G.innerHTML = a2x.iN7G("m-topbar-user-unlogin");
            var i3x = a2x.H3x(this.bjK4O, "j-t");
            a2x.ba3x(i3x[0], "display", "none")
        }
        a2x.x3x(this.HM6G, "f-hide");
        this.XP0x = false;
        var i3x = a2x.H3x(this.HM6G, "j-uflag");
        if (dp5u && dp5u.userId) {
            this.SW9N = i3x.shift();
            this.boi5n = i3x.shift();
            this.LV7O = i3x.shift()
        } else {
            this.boi5n = i3x.shift()
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        q3x = c3x("nm.d"),
        b3x, L3x;
    q3x.fr5w({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(Q3x) {
                h3x.z3x(q3x.tx0x, "message", Q3x)
            }
        }
    });
    q3x.tx0x = NEJ.C();
    b3x = q3x.tx0x.N3x(q3x.hM6G);
    b3x.Yk0x = function() {
        this.cp4t("polling-get", {})
    };
    b3x.wb2x = function() {
        var eh5m;
        return function() {
            if (!!eh5m) return;
            eh5m = window.setInterval(this.Yk0x.f3x(this), 1e5);
            this.Yk0x()
        }
    }();
    I3x.fN6H.A3x({
        event: "message",
        element: q3x.tx0x
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
            WebSocket.Yl0x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.Yl0x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.Sn9e.length = 0;
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
                    WebSocket.bpZ6T();
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
            self.gY6S = WebSocket.cya3x++;
            WebSocket.bFU0x[self.gY6S] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mj8b = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Yl0x(function() {
                    WebSocket.pG9x.create(self.gY6S, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.pG9x.send(this.gY6S, encodeURIComponent(data));
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
            WebSocket.pG9x.close(this.gY6S)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.mj8b)) {
                this.mj8b[type] = []
            }
            this.mj8b[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.mj8b)) return;
            var events = this.mj8b[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.mj8b[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.cxZ3x = function(flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bGa0x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bGa0x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cxW3x("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bGa0x = function(type) {
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
        WebSocket.prototype.cxW3x = function(type, data) {
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
        WebSocket.pG9x = null;
        WebSocket.bFU0x = {};
        WebSocket.Sn9e = [];
        WebSocket.cya3x = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Yl0x(function() {
                WebSocket.pG9x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bpZ6T = function() {
            if (WebSocket.pG9x) return;
            if (WebSocket.cxV3x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cxV3x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cxU3x()) {
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
        WebSocket.cGj5o = function() {
            setTimeout(function() {
                WebSocket.pG9x = document.getElementById("webSocketFlash");
                WebSocket.pG9x.setCallerUrl(location.href);
                WebSocket.pG9x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Sn9e.length; ++i) {
                    WebSocket.Sn9e[i]()
                }
                WebSocket.Sn9e = []
            }, 0)
        };
        WebSocket.cGk5p = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.pG9x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFU0x[events[i].webSocketId].cxZ3x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cGl5q = function(message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dX5c = function(message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.Yl0x = function(task) {
            if (WebSocket.pG9x) {
                task()
            } else {
                WebSocket.Sn9e.push(task)
            }
        };
        WebSocket.cxU3x = function() {
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
                    WebSocket.bpZ6T()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bpZ6T()
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
        HTMLFile.prototype.c3x = function(data, doc) {
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
                self.c3x(msg)
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
        JSONPPolling.prototype.c3x = function(msg) {
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
        if (!this.eg5l) this.eg5l = {};
        this.bGk0x = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.eg5l || !this.eg5l.error || isArray(this.eg5l.error) && !this.eg5l.error.length) {
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
        if (!this.eg5l) return false;
        var handler = this.eg5l[type];
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
        if (!this.eg5l) this.eg5l = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.eg5l[type]) {
            this.eg5l[type] = listener
        } else if (isArray(this.eg5l[type])) {
            this.eg5l[type].push(listener)
        } else {
            this.eg5l[type] = [this.eg5l[type], listener]
        }
        if (isArray(this.eg5l[type]) && !this.eg5l[type].warned) {
            var m;
            if (this.bGk0x !== undefined) {
                m = this.bGk0x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.eg5l[type].length > m) {
                this.eg5l[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.eg5l[type].length);
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
        if (!this.eg5l || !this.eg5l[type]) return this;
        var list = this.eg5l[type];
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
            delete this.eg5l[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.eg5l = {};
            return this
        }
        var events = this.eg5l && this.eg5l[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.eg5l[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.eg5l) this.eg5l = {};
        if (!this.eg5l[type]) this.eg5l[type] = [];
        if (!isArray(this.eg5l[type])) {
            this.eg5l[type] = [this.eg5l[type]]
        }
        return this.eg5l[type]
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
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        l3x = c3x("nm.x"),
        dE5J = c3x("nm.u"),
        q3x = c3x("nm.d"),
        Si9Z = c3x("pomelo"),
        U3x = 0,
        b3x, L3x;
    q3x.fr5w({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q3x) {
                U3x = 2;
                var tt0x = {
                        domain: "music.163.com",
                        host: MUSIC_CONFIG.pushHost,
                        port: MUSIC_CONFIG.pushPort,
                        key: MUSIC_CONFIG.pushKey,
                        secret: "bec0b878892740c498505a85eb3dcec9"
                    },
                    j3x = Q3x.account || bb3x,
                    do5t = GUser.userId;
                Si9Z.init(tt0x.host, tt0x.port, true, this.cxP3x.f3x(this, {
                    user: do5t,
                    nonce: j3x.nonce,
                    domain: tt0x.domain,
                    productKey: tt0x.key,
                    signature: j3x.signature,
                    expire_time: j3x.expireTime
                }))
            },
            onerror: function() {
                return this.bqo6i()
            }
        }
    });
    q3x.CU4Y = NEJ.C();
    b3x = q3x.CU4Y.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        var rb0x = !1;
        return function(e3x) {
            if (!rb0x) {
                rb0x = !0
            }
            this.cF4J(e3x);
            Si9Z.on("specify", this.qS0x.f3x(this));
            Si9Z.on("broadcast", this.qS0x.f3x(this))
        }
    }();
    b3x.qS0x = function(d3x) {
        k3x.bd4h(d3x, function(bF4J) {
            h3x.z3x(q3x.CU4Y, "message", bF4J)
        }, this)
    };
    b3x.bqo6i = function() {
        var bA4E = 500;
        return function() {
            U3x = 0;
            Si9Z.disconnect();
            if (bA4E > 6e4) bA4E = 500;
            bA4E *= 2
        }
    }();
    b3x.cxP3x = function(e3x, ca4e) {
        if (!!ca4e) {
            return this.bqo6i()
        }
        U3x = 3;
        Si9Z.registerAndBind(e3x, function(m3x) {
            if (m3x.code != 200) {
                return this.bqo6i()
            }
            U3x = 4
        }.f3x(this))
    };
    b3x.cGn5s = function() {
        dE5J.cxM3x.gk6e().cGo5t()
    };
    b3x.cGp5u = function() {
        dE5J.cxM3x.gk6e().cGq5v()
    };
    b3x.btl7e = function() {
        var rb0x = !1;
        return function() {
            if (rb0x) return;
            rb0x = !0;
            this.cp4t("polling-init", {})
        }
    }();
    I3x.fN6H.A3x({
        event: "message",
        element: q3x.CU4Y
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        dx5C = c3x("nej.p"),
        k3x = c3x("nej.u"),
        n3x = c3x("nm.l"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        cx4B = c3x("api"),
        b3x, L3x;
    var gi6c = a2x.jq7j('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n3x.btG7z = NEJ.C();
    b3x = n3x.btG7z.N3x(n3x.eq5v);
    L3x = n3x.btG7z.cs4w;
    b3x.bm4q = function(e3x) {
        e3x.title = "意见反馈";
        this.bn4r(e3x)
    };
    b3x.ch4l = function() {
        this.cf4j = gi6c
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.hz6t = {};
        var LB7u = a2x.H3x;
        var Eu5z = h3x.s3x;
        this.hz6t.submit_btn = LB7u(this.o3x, "u-btn2")[0];
        this.hz6t.cancle_btn = LB7u(this.o3x, "u-btn2")[1];
        this.hz6t.prompt_msg = LB7u(this.o3x, "u-err")[0];
        this.hz6t.zs = LB7u(this.o3x, "zs")[0];
        a2x.ba3x(this.hz6t.zs, "display", "none");
        this.hz6t.fb_txt = LB7u(this.o3x, "u-txt")[0];
        this.hz6t.contact = LB7u(this.o3x, "u-txt")[1];
        a2x.gv6p(this.hz6t.fb_txt, "holder");
        a2x.gv6p(this.hz6t.contact, "holder");
        if (a2x.bE4I(this.hz6t.fb_txt.parentNode, "holder-parent")) {
            a2x.ba3x(this.hz6t.fb_txt.parentNode, "display", "block")
        }
        if (a2x.bE4I(this.hz6t.contact.parentNode, "holder-parent")) {
            a2x.ba3x(this.hz6t.contact.parentNode, "display", "block")
        }
        Eu5z(this.hz6t.submit_btn, "click", this.cxI3x.f3x(this));
        Eu5z(this.hz6t.cancle_btn, "click", this.cxH3x.f3x(this));
        Eu5z(this.hz6t.prompt_msg, "msgShow", this.cxG3x.f3x(this));
        Eu5z(this.hz6t.fb_txt, "keyup", this.vU2x.f3x(this));
        Eu5z(this.hz6t.fb_txt, "input", this.fR6L.f3x(this));
        Eu5z(this.hz6t.contact, "keyup", this.cxF3x.f3x(this));
        Eu5z(this.hz6t.contact, "input", this.bHm1x.f3x(this));
        this.kO8G = q3x.hP6J.A3x()
    };
    b3x.cxI3x = function(d3x) {
        h3x.bh4l(d3x);
        if (this.cQ4U()) return;
        var bo4s = this.hz6t.fb_txt.value.trim();
        var bq4u = bo4s.length;
        var e3x = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bHq1x = this.hz6t.contact.value.trim();
        var YM1x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l3x.bqp6j(),
            contact: bHq1x
        };
        var j3x = {
                content: bo4s,
                client: "web",
                xInfo: JSON.stringify(YM1x)
            },
            nO9F = this.kO8G.cDz4D();
        if (nO9F && nO9F.length) {
            j3x.log = nO9F.join("\n")
        }
        if (bq4u == 0) {
            this.hz6t.prompt_msg.innerHTML = "反馈内容不能为空";
            a2x.ba3x(this.hz6t.prompt_msg, "display", "block");
            return
        }
        if (bHq1x.length > 100) {
            this.hz6t.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a2x.ba3x(this.hz6t.prompt_msg, "display", "block");
            return
        }
        this.cQ4U(true);
        e3x.data = k3x.cC4G(j3x);
        e3x.onload = this.cxE3x.f3x(this);
        e3x.onerror = this.iZ7S.f3x(this);
        v3x.bl4p("/api/feedback/web", e3x)
    };
    b3x.fR6L = function(d3x) {
        var bq4u = this.hz6t.fb_txt.value.trim().length;
        if (bq4u > 0) a2x.ba3x(this.hz6t.prompt_msg, "display", "none");
        dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "7.0" ? setTimeout(this.gh6b.f3x(this), 0) : this.gh6b()
    };
    b3x.vU2x = function(d3x) {
        if (d3x.keyCode === 8) this.gh6b()
    };
    b3x.gh6b = function() {
        var bq4u = this.hz6t.fb_txt.value.trim().length;
        this.hz6t.zs.innerHTML = !bq4u ? "0/140" : bq4u + "/140"
    };
    b3x.bHm1x = function(d3x) {
        var bq4u = this.hz6t.contact.value.trim().length;
        if (bq4u > 0) a2x.ba3x(this.hz6t.prompt_msg, "display", "none")
    };
    b3x.cxF3x = function(d3x) {
        if (d3x.keyCode === 8) this.bHm1x()
    };
    b3x.cxH3x = function(d3x) {
        h3x.cn4r(d3x);
        this.bt4x()
    };
    b3x.cxG3x = function(d3x) {
        var g3x = h3x.X3x(d3x);
        g3x.innerHTML = "请输入反馈内容"
    };
    b3x.cGs5x = function(cGt5y) {
        var g3x = h3x.X3x(d3x);
        g3x.innerHTML = ""
    };
    b3x.cxE3x = function(m3x) {
        this.cQ4U(false);
        this.bt4x();
        n3x.Z3x.J3x({
            tip: "意见发送成功",
            autoclose: true
        })
    };
    b3x.iZ7S = function(m3x) {
        this.cQ4U(false);
        n3x.Z3x.J3x({
            tip: "意见发送失败",
            autoclose: true
        })
    };
    b3x.cQ4U = function(dc5h) {
        return this.dV5a(this.hz6t.submit_btn, dc5h, "发送意见", "发送中...")
    };
    b3x.J3x = function() {
        L3x.J3x.call(this);
        this.cQ4U(false);
        this.hz6t.fb_txt.value = "";
        this.hz6t.contact.value = "";
        a2x.ba3x(this.hz6t.prompt_msg, "display", "none");
        this.gh6b()
    };
    l3x.cxz3x = function(e3x) {
        e3x = e3x || {};
        if (e3x.title === undefined) e3x.title = "意见反馈";
        n3x.btG7z.J3x(e3x)
    };
    cx4B.feedback = l3x.feedback = l3x.cxz3x
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        O3x = c3x("nej.ui"),
        b3x;
    if (!!O3x.zF3x) return;
    O3x.zF3x = NEJ.C();
    b3x = O3x.zF3x.N3x(O3x.ej5o);
    b3x.cw4A = function() {
        this.gY6S = this.bIc1x();
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.cq4u = e3x.index;
        this.gz6t = e3x.total;
        this.hA6u = e3x.range;
        this.gM6G(e3x.data)
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.bk4o;
        delete this.cq4u;
        delete this.gz6t;
        delete this.hA6u
    };
    b3x.ix7q = br4v;
    b3x.bIc1x = function() {
        var gG6A = +(new Date);
        return function() {
            return "itm-" + ++gG6A
        }
    }();
    b3x.Fo5t = function() {
        return this.gY6S
    };
    b3x.ii7b = function() {
        return this.bk4o
    };
    b3x.gM6G = function(j3x) {
        this.bk4o = j3x || {};
        this.ix7q(this.bk4o)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        O3x = c3x("nej.ui"),
        b3x, L3x;
    if (!!O3x.vP2x) return;
    O3x.vP2x = NEJ.C();
    b3x = O3x.vP2x.N3x(O3x.zF3x);
    L3x = O3x.vP2x.cs4w;
    b3x.bm4q = function(e3x) {
        this.cxy3x = e3x.pkey || "id";
        this.bn4r(e3x)
    };
    b3x.EV5a = function(j3x) {
        this.z3x("ondelete", {
            ext: j3x,
            id: this.Fo5t(),
            data: this.ii7b(),
            body: this.lK8C()
        })
    };
    b3x.tn0x = function(j3x) {
        this.z3x("onupdate", {
            ext: j3x,
            id: this.Fo5t(),
            data: this.ii7b(),
            body: this.lK8C()
        })
    };
    b3x.gM6G = function(j3x) {
        L3x.gM6G.apply(this, arguments);
        this.gY6S = this.bk4o[this.cxy3x] || this.bIc1x()
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ui"),
        b3x, jd7W, buQ7J;
    if (!!O3x.buZ7S) return;
    O3x.buZ7S = NEJ.C();
    b3x = O3x.buZ7S.N3x(O3x.ej5o);
    b3x.bm4q = function(e3x) {
        this.YR1x = NEJ.X({}, e3x);
        this.fS6M = NEJ.X({}, e3x);
        delete this.YR1x.onchange;
        this.fS6M.onchange = this.fZ6T.f3x(this);
        this.bn4r(e3x);
        this.cxx3x({
            number: e3x.number,
            label: e3x.label || bb3x
        })
    };
    b3x.bC4G = function() {
        this.bG4K();
        if (!!this.lu8m) {
            this.lu8m.T3x();
            delete this.lu8m
        }
        delete this.YR1x;
        delete this.fS6M;
        this.cxw3x();
        this.o3x.innerHTML = "&nbsp;"
    };
    b3x.ch4l = function() {
        this.md8V = jd7W
    };
    b3x.cxx3x = function(j3x) {
        a2x.dA5F(this.o3x, buQ7J, j3x);
        var gG6A = a2x.Ka6U();
        this.fS6M.list = a2x.H3x(this.o3x, "js-i-" + gG6A);
        this.fS6M.pbtn = (a2x.H3x(this.o3x, "js-p-" + gG6A) || fu5z)[0];
        this.fS6M.nbtn = (a2x.H3x(this.o3x, "js-n-" + gG6A) || fu5z)[0]
    };
    b3x.bW4a = function() {
        this.ci4m()
    };
    b3x.cGw5B = function(j3x) {
        return a2x.cc4g(buQ7J, j3x)
    };
    b3x.fZ6T = function(d3x) {
        if (this.Rr8j) return;
        var r3x = d3x.index,
            cB4F = d3x.total;
        this.Rr8j = !0;
        this.Rq8i(r3x, cB4F);
        k3x.bd4h(this.YT1x, function(tk0x) {
            tk0x.Rq8i(r3x, cB4F)
        });
        this.Rr8j = !1;
        this.z3x("onchange", d3x)
    };
    b3x.f3x = function(bI4M) {
        bI4M = a2x.B3x(bI4M);
        if (!bI4M) return this;
        var ct4x = NEJ.X({}, this.YR1x);
        ct4x.parent = bI4M;
        ct4x.index = this.tj0x();
        ct4x.total = this.lo8g();
        var tk0x = this.constructor.A3x(ct4x);
        tk0x.xx3x("onchange", this.fS6M.onchange);
        if (!this.YT1x) this.YT1x = [];
        this.YT1x.push(tk0x);
        return this
    };
    b3x.cxw3x = function() {
        var buG7z = function(tk0x, r3x, i3x) {
            tk0x.T3x();
            i3x.splice(r3x, 1)
        };
        return function() {
            k3x.mY8Q(this.YT1x, buG7z)
        }
    }();
    b3x.kQ8I = function(r3x) {
        if (!this.lu8m) return;
        this.lu8m.kQ8I(r3x)
    };
    b3x.tj0x = function() {
        if (!this.lu8m) return 1;
        return this.lu8m.tj0x()
    };
    b3x.lo8g = function() {
        if (!this.lu8m) return 1;
        return this.lu8m.lo8g()
    };
    b3x.Rq8i = function(r3x, cB4F) {
        if (!this.lu8m) return;
        this.lu8m.Rq8i(r3x, cB4F)
    };
    b3x.bwz8r = function(cB4F) {
        if (!this.lu8m) return;
        this.lu8m.bwz8r(cB4F)
    };
    jd7W = a2x.ty0x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    buQ7J = a2x.eC5H('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.YX1x) return;
    O3x.YX1x = NEJ.C();
    b3x = O3x.YX1x.N3x(O3x.cJ4N);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.YY1x = e3x.pbtn;
        this.cr4v = e3x.nbtn;
        this.Zf1x = e3x.sbtn;
        this.Zi1x = e3x.ebtn;
        this.jk7d = e3x.event || "click";
        this.kT8L = e3x.selected || "js-selected";
        this.nT9K = e3x.disabled || "js-disabled";
        this.cxu3x(e3x.list);
        this.Rq8i(e3x.index || 1, e3x.total || 1)
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.bU4Y;
        delete this.jk7d;
        delete this.YY1x;
        delete this.cr4v;
        delete this.Zf1x;
        delete this.Zi1x;
        delete this.bKT2x;
        delete this.gz6t;
        delete this.cq4u;
        delete this.kT8L;
        delete this.nT9K
    };
    b3x.cxu3x = function() {
        var bfL3x = function(g3x) {
            this.bU4Y.push(g3x);
            this.bX4b([
                [g3x, this.jk7d, this.cv4z.ew5B(this, 0)]
            ])
        };
        return function(i3x) {
            this.bU4Y = [];
            this.bX4b([
                [this.YY1x, "click", this.cv4z.ew5B(this, -1)],
                [this.cr4v, "click", this.cv4z.ew5B(this, 1)],
                [this.Zf1x, "click", this.cv4z.ew5B(this, -2)],
                [this.Zi1x, "click", this.cv4z.ew5B(this, 2)]
            ]);
            k3x.bd4h(i3x, bfL3x, this)
        }
    }();
    b3x.FA5F = function(g3x, r3x) {
        if (r3x == null) {
            g3x.innerText = "";
            a2x.ba3x(g3x, "display", "none");
            a2x.x3x(g3x, this.kT8L)
        } else {
            g3x.innerText = r3x;
            a2x.ba3x(g3x, "display", "");
            r3x == this.cq4u ? a2x.y3x(g3x, this.kT8L) : a2x.x3x(g3x, this.kT8L)
        }
    };
    b3x.bfR3x = function() {
        if (this.cq4u <= 1) {
            a2x.y3x(this.YY1x, this.nT9K);
            a2x.y3x(this.Zf1x, this.nT9K)
        } else {
            a2x.x3x(this.YY1x, this.nT9K);
            a2x.x3x(this.Zf1x, this.nT9K)
        }
        if (this.cq4u >= this.gz6t) {
            a2x.y3x(this.cr4v, this.nT9K);
            a2x.y3x(this.Zi1x, this.nT9K)
        } else {
            a2x.x3x(this.cr4v, this.nT9K);
            a2x.x3x(this.Zi1x, this.nT9K)
        }
    };
    b3x.Zs1x = br4v;
    b3x.bgk3x = function() {
        this.Zs1x();
        this.bfR3x();
        this.z3x("onchange", {
            last: this.bKT2x,
            total: this.gz6t,
            index: this.cq4u,
            ext: this.bgl3x
        })
    };
    b3x.bLQ2x = function(r3x) {
        r3x = parseInt(r3x);
        if (isNaN(r3x) || this.gz6t == null) return !1;
        r3x = Math.max(1, Math.min(r3x, this.gz6t));
        this.bKT2x = this.cq4u;
        this.cq4u = r3x;
        return !0
    };
    b3x.bgr3x = function(cB4F) {
        cB4F = parseInt(cB4F);
        if (isNaN(cB4F) || cB4F < 1) return !1;
        this.gz6t = cB4F;
        return !0
    };
    b3x.cv4z = function(d3x, fc5h) {
        h3x.cn4r(d3x);
        var F3x = h3x.X3x(d3x);
        if (!F3x || a2x.bE4I(F3x, this.kT8L) || a2x.bE4I(F3x, this.nT9K)) return;
        var r3x = F3x.innerText;
        switch (fc5h) {
            case 1:
            case -1:
                r3x = this.cq4u + fc5h;
                break;
            case 2:
                r3x = this.gz6t;
                break;
            case -2:
                r3x = 1;
                break
        }
        this.kQ8I(r3x)
    };
    b3x.tj0x = function() {
        return this.cq4u
    };
    b3x.kQ8I = function(r3x) {
        var cxt3x = this.cq4u;
        this.bLQ2x(r3x);
        if (cxt3x != this.cq4u) this.bgk3x();
        return this
    };
    b3x.lo8g = function() {
        return this.gz6t
    };
    b3x.Sa9R = function(cB4F) {
        if (this.bgr3x(cB4F) && this.cq4u != null) {
            this.cq4u = 1;
            this.bgk3x()
        }
        return this
    };
    b3x.bwz8r = function(cB4F) {
        if (this.bgr3x(cB4F)) {
            this.Zs1x();
            this.bfR3x()
        }
        return this
    };
    b3x.Rq8i = function(r3x, cB4F) {
        if (!this.bgr3x(cB4F) || !this.bLQ2x(r3x)) return this;
        this.bgk3x();
        return this
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        db5g = c3x("nej.x"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.QC8u) return;
    O3x.QC8u = NEJ.C();
    b3x = O3x.QC8u.N3x(O3x.YX1x);
    b3x.cw4A = function() {
        this.cF4J();
        var g3x = a2x.di5n("span", "zdot");
        g3x.innerText = "...";
        this.Zv1x = [g3x.cloneNode(true), g3x]
    };
    b3x.bC4G = function() {
        this.bG4K();
        this.bMv2x()
    };
    b3x.bMv2x = function() {
        a2x.mR8J(this.Zv1x[0]);
        a2x.mR8J(this.Zv1x[1])
    };
    b3x.Zs1x = function() {
        this.bgl3x = {
            last: !1,
            first: !1,
            list: this.bU4Y
        };
        this.bMv2x();
        this.FA5F(this.bU4Y[0], 1);
        var bM4Q = 1,
            bq4u = this.bU4Y.length;
        if (this.gz6t < bq4u) {
            for (var qH0x; bM4Q < bq4u; bM4Q++) {
                qH0x = bM4Q + 1;
                this.FA5F(this.bU4Y[bM4Q], qH0x > this.gz6t ? null : qH0x)
            }
            return
        }
        if (this.cq4u > 1) {
            var cz4D = Math.floor((bq4u - 2) / 2),
                cxs3x = this.gz6t - bq4u + 2,
                hv6p = Math.max(2, this.cq4u - cz4D);
            if (this.gz6t >= bq4u) {
                hv6p = Math.min(hv6p, cxs3x)
            }
            if (hv6p > 2) {
                this.bU4Y[0].insertAdjacentElement("afterEnd", this.Zv1x[0]);
                this.bgl3x.first = !0
            }
            for (var r3x;; bM4Q++) {
                r3x = hv6p + bM4Q - 1;
                if (r3x > this.cq4u) break;
                this.FA5F(this.bU4Y[bM4Q], r3x)
            }
        }
        if (this.cq4u < this.gz6t) {
            var r3x, hv6p = this.cq4u + 1;
            for (var i = 0, l = bq4u - 2;; i++, bM4Q++) {
                r3x = hv6p + i;
                if (bM4Q > l || r3x > this.gz6t) break;
                this.FA5F(this.bU4Y[bM4Q], r3x)
            }
            if (r3x < this.gz6t) {
                this.bU4Y[bM4Q].insertAdjacentElement("beforeBegin", this.Zv1x[1]);
                this.bgl3x.last = !0
            }
            if (r3x <= this.gz6t) {
                this.FA5F(this.bU4Y[bM4Q++], this.gz6t)
            }
        }
        for (; bM4Q < bq4u; bM4Q++) {
            this.FA5F(this.bU4Y[bM4Q])
        }
    };
    a2x.cxr3x = db5g.cxr3x = function(bI4M, e3x) {
        var C3x = a2x.lQ8I(bI4M);
        if (!C3x) return null;
        if (!O3x.bcx2x(C3x, O3x.QC8u)) {
            e3x = e3x || {};
            var i3x = !e3x.clazz ? a2x.dm5r(C3x) : a2x.H3x(C3x, e3x.clazz);
            e3x.pbtn = i3x.shift();
            e3x.nbtn = i3x.pop();
            e3x.list = i3x;
            delete e3x.clazz
        }
        return O3x.bcx2x(C3x, O3x.QC8u, e3x || bb3x)
    };
    db5g.isChange = !0
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        O3x = c3x("nej.ui"),
        b3x, L3x, gi6c;
    if (!!O3x.QA8s) return;
    O3x.QA8s = NEJ.C();
    b3x = O3x.QA8s.N3x(O3x.buZ7S);
    L3x = O3x.QA8s.cs4w;
    b3x.bm4q = function(e3x) {
        e3x.number = parseInt(e3x.number) || 9;
        this.bn4r(e3x);
        this.lu8m = I3x.QC8u.A3x(this.fS6M)
    };
    b3x.fZ6T = function(d3x) {
        if (!!this.YR1x.noend) {
            var bMI2x = d3x.ext || bb3x,
                i3x = bMI2x.list || fu5z;
            if (bMI2x.last) {
                a2x.ba3x(i3x[i3x.length - 1], "display", "none")
            }
        }
        L3x.fZ6T.apply(this, arguments)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        bc4g = c3x("nej.ui"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.Zy1x) return;
    O3x.Zy1x = NEJ.C();
    b3x = O3x.Zy1x.N3x(O3x.cJ4N);
    b3x.bm4q = function(e3x) {
        this.jh7a = {};
        this.bn4r(e3x);
        this.in7g = a2x.B3x(e3x.parent);
        this.fg5l = {
            parent: this.in7g
        };
        this.oN9E = parseInt(e3x.limit) || 10;
        this.yn3x = parseInt(e3x.first) || this.oN9E;
        this.cxq3x(e3x.item);
        this.cxp3x(e3x.cache || bb3x);
        this.cxo3x(e3x.pager || bb3x);
        this.gM6G()
    };
    b3x.bC4G = function() {
        this.z3x("onbeforerecycle");
        this.Qi8a();
        this.bG4K();
        if (this.jh7a.clear) {
            this.S3x.uI1x(this.jh7a.key)
        }
        this.S3x.T3x();
        if (!!this.jx7q) {
            this.jx7q.T3x();
            delete this.jx7q
        }
        delete this.bNQ2x;
        delete this.fS6M;
        delete this.ZJ1x;
        delete this.S3x;
        delete this.in7g;
        delete this.Qf8X;
        delete this.fg5l;
        delete this.jh7a
    };
    b3x.bOl2x = function() {
        var dg5l = /\{(.*?)\}/gi,
            cxn3x = function(pc9T, j3x) {
                return (pc9T || "{id}{seed}").replace(dg5l, function($1, $2) {
                    var D3x = j3x[$2];
                    return D3x == null ? $1 : D3x
                })
            };
        return function(C3x) {
            var K3x = cxn3x(this.fg5l.jstIdTempalte, {
                id: C3x,
                seed: a2x.Ka6U()
            });
            if (!this.fg5l.jstIdType) {
                return a2x.B3x(K3x)
            } else if (this.fg5l.jstIdType == 1) {
                return (a2x.H3x(this.in7g, K3x) || [])[0]
            }
        }
    }();
    b3x.BW4a = function(bM4Q, bi4m, gc6W, bq4u) {
        var m3x = {
            index: 1,
            total: 1
        };
        if (bi4m >= bM4Q) {
            m3x.index = Math.floor((bi4m - bM4Q) / gc6W) + 2
        }
        if (bq4u > bM4Q) {
            m3x.total = Math.ceil((bq4u - bM4Q) / gc6W) + 1
        }
        return m3x
    };
    b3x.bOw2x = function(K3x) {
        delete this.Qf8X;
        this.KV7O = K3x;
        this.bX4b([
            [this.in7g, "click", this.cxm3x.f3x(this)]
        ])
    };
    b3x.cxq3x = function(p3x) {
        if (k3x.fB5G(p3x)) {
            this.bOw2x(p3x);
            return
        }
        NEJ.X(this.fg5l, p3x);
        var ee5j = this.fg5l.klass;
        delete this.fg5l.klass;
        if (k3x.fB5G(ee5j)) {
            this.bOw2x(ee5j);
            return
        }
        delete this.KV7O;
        this.Qf8X = ee5j;
        this.fg5l.ondelete = this.z3x.f3x(this, "ondelete");
        this.fg5l.onupdate = this.z3x.f3x(this, "onupdate")
    };
    b3x.cxp3x = function(R3x) {
        var ee5j = R3x.klass,
            kv8n = NEJ.X({}, R3x);
        this.jh7a.key = kv8n.lkey;
        this.jh7a.data = kv8n.data || {};
        this.jh7a.clear = !!kv8n.clear;
        this.fg5l.pkey = kv8n.key || "id";
        kv8n.onlistload = this.bhK4O.f3x(this);
        kv8n.onpullrefresh = this.cxl3x.f3x(this);
        if (!!ee5j && "onlistchange" in ee5j) {
            this.bX4b([
                [ee5j, "listchange", this.bid4h.f3x(this)]
            ])
        } else {
            kv8n.onitemadd = this.ZY1x.f3x(this);
            kv8n.onitemdelete = this.bab1x.f3x(this);
            kv8n.onitemupdate = this.bPz3x.f3x(this)
        }
        this.S3x = (ee5j || O3x.RU9L).A3x(kv8n);
        if (R3x.total != null) {
            this.S3x.Sa9R(this.jh7a.key, R3x.total)
        }
        if (!!R3x.list) {
            this.S3x.uK1x(this.jh7a.key, R3x.list)
        }
    };
    b3x.cxo3x = function(tk0x) {
        this.bNQ2x = tk0x.klass || bc4g.QA8s;
        this.fS6M = NEJ.X({}, tk0x);
        if (k3x.eJ5O(tk0x.parent)) {
            this.fS6M.parent = tk0x.parent[0];
            this.PP8H = tk0x.parent.slice(1);
            if (!this.PP8H || !this.PP8H.length) {
                delete this.PP8H
            }
        }
        delete this.fS6M.klass
    };
    b3x.Qi8a = function() {
        var gO6I = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z3x("onbeforelistclear", {
                parent: this.in7g
            });
            if (!!this.fH6B && this.fH6B.length > 0) {
                this.fH6B = this.Qf8X.T3x(this.fH6B);
                delete this.fH6B
            }
            if (gO6I.test(this.in7g.tagName)) {
                a2x.bTy5D(this.in7g)
            } else {
                this.in7g.innerHTML = ""
            }
        }
    }();
    b3x.bio4s = function(bac1x) {
        if (!!this.fS6M.fixed) return;
        a2x.ba3x(this.fS6M.parent, "display", bac1x);
        k3x.bd4h(this.PP8H, function(bI4M) {
            a2x.ba3x(bI4M, "display", bac1x)
        }, this)
    };
    b3x.bit4x = function() {
        var r3x = this.fS6M.index || 1;
        delete this.fS6M.index;
        if (!!this.jx7q) {
            r3x = this.jx7q.tj0x()
        }
        this.BJ4N({
            last: r3x,
            index: r3x
        })
    };
    b3x.BJ4N = function(d3x) {
        this.z3x("onpagechange", d3x)
    };
    b3x.bQb3x = function(bi4m) {
        this.jh7a.offset = bi4m;
        this.Yo0x()
    };
    b3x.bQf3x = function(e3x) {
        return e3x
    };
    b3x.Yo0x = function() {
        this.PC8u();
        var j3x = this.jh7a.data;
        j3x.offset = this.jh7a.offset;
        var pH9y = j3x.offset == 0;
        j3x.total = pH9y;
        this.jh7a.limit = pH9y ? this.yn3x : this.oN9E;
        j3x.limit = this.jh7a.limit;
        this.S3x.lw8o(this.bQf3x(NEJ.X({}, this.jh7a)))
    };
    b3x.bhK4O = function(e3x) {
        if (e3x.key != this.jh7a.key || e3x.offset != this.jh7a.offset) return;
        this.bag1x();
        var i3x = this.S3x.hF6z(e3x.key);
        if (!i3x || !i3x.length) {
            this.biQ4U();
            return
        }
        var gc6W = e3x.limit,
            bi4m = e3x.offset;
        if (this.bjd4h(i3x, bi4m, gc6W)) return;
        this.z3x("onbeforelistrender", {
            list: i3x,
            offset: bi4m,
            parent: this.in7g
        });
        if (!!this.KV7O) {
            this.fg5l.xlist = i3x;
            this.fg5l.beg = bi4m;
            this.fg5l.end = Math.min(i3x.length, bi4m + gc6W) - 1;
            this.fg5l.act = "list";
            var dW5b = a2x.cc4g(this.KV7O, this.fg5l);
            this.Pu8m(dW5b)
        } else {
            this.fg5l.limit = gc6W;
            this.fg5l.offset = bi4m;
            var hm6g = a2x.Co4s(i3x, this.Qf8X, this.fg5l);
            this.Pt8l(hm6g)
        }
        this.z3x("onafterlistrender", {
            list: i3x,
            offset: bi4m,
            parent: this.in7g
        })
    };
    b3x.cxl3x = function(e3x) {
        if (!this.ZJ1x) return;
        delete this.ZJ1x;
        this.bag1x("onafterpullrefresh");
        this.gM6G()
    };
    b3x.bQO4S = function(r3x, cB4F) {
        if (!!this.jx7q) {
            var xC3x = this.jx7q.tj0x(),
                cxj3x = this.jx7q.lo8g();
            if (xC3x > cB4F || cB4F != cxj3x) {
                this.jx7q.T3x();
                delete this.jx7q;
                this.BJ4N({
                    last: xC3x,
                    index: Math.min(r3x, cB4F)
                });
                return !0
            }
        } else {
            this.fS6M.index = r3x;
            this.fS6M.total = cB4F;
            this.jx7q = this.bNQ2x.A3x(this.fS6M);
            this.jx7q.xx3x("onchange", this.BJ4N.f3x(this));
            k3x.bd4h(this.PP8H, function(bI4M) {
                this.jx7q.f3x(bI4M)
            }, this)
        }
    };
    b3x.bap2x = function() {
        var gG6A = +(new Date);
        return function(j3x) {
            var C3x = j3x[this.fg5l.pkey];
            if (!C3x) {
                j3x["dirty-data"] = !0;
                j3x[this.fg5l.pkey] = "dirty-" + gG6A++
            }
            return j3x
        }
    }();
    b3x.baq2x = function(j3x) {
        var C3x = j3x[this.fg5l.pkey];
        if (!!j3x["dirty-data"]) {
            delete j3x["dirty-data"];
            delete j3x[this.fg5l.pkey]
        }
        return C3x
    };
    b3x.bas2x = function() {
        var cxi3x = function(kB8t, mQ8I) {
            this.in7g.insertAdjacentElement(kB8t, mQ8I)
        };
        return function(kB8t, j3x) {
            var Km6g = [j3x];
            if (!!this.KV7O) {
                this.fg5l.xlist = Km6g;
                this.fg5l.beg = 0;
                this.fg5l.end = 0;
                this.fg5l.act = "add";
                this.Pu8m(a2x.cc4g(this.KV7O, this.fg5l), kB8t)
            } else {
                this.fg5l.limit = 1;
                this.fg5l.offset = 0;
                this.fg5l.parent = cxi3x.f3x(this, kB8t);
                var hm6g = a2x.Co4s(Km6g, this.Qf8X, this.fg5l);
                this.fg5l.parent = this.in7g;
                this.Pt8l(hm6g)
            }
        }
    }();
    b3x.PC8u = br4v;
    b3x.bag1x = function(W3x) {
        var d3x = {
            parent: this.in7g
        };
        this.z3x(W3x || "onafterlistload", d3x);
        if (!d3x.stopped) {
            a2x.mR8J(this.cu4y)
        }
    };
    b3x.bjd4h = br4v;
    b3x.baA2x = function(bF4J, kB8t) {
        if (k3x.fB5G(bF4J)) {
            if (!this.cu4y) this.cu4y = a2x.di5n("div");
            this.cu4y.innerHTML = bF4J
        } else {
            this.cu4y = bF4J
        }
        this.in7g.insertAdjacentElement(kB8t || "beforeEnd", this.cu4y)
    };
    b3x.zM3x = function(W3x, kA8s, kB8t) {
        var d3x = {
            parent: this.in7g
        };
        this.z3x(W3x, d3x);
        if (!d3x.stopped) {
            this.baA2x(d3x.value || kA8s, kB8t)
        }
    };
    b3x.biQ4U = br4v;
    b3x.Pu8m = br4v;
    b3x.Pt8l = br4v;
    b3x.cxm3x = function() {
        var gO6I = /^(?:delete|update)$/;
        return function(d3x) {
            var g3x = h3x.X3x(d3x, "d:action");
            if (!g3x) return;
            var V3x = a2x.t3x(g3x, "action");
            if (!gO6I.test(V3x)) return;
            var C3x = a2x.t3x(g3x, "id");
            if (!C3x) return;
            var p3x = this.S3x.eL5Q(C3x);
            if (!p3x) return;
            h3x.bh4l(d3x);
            this.z3x("on" + V3x, {
                data: p3x,
                id: p3x[this.fg5l.pkey],
                body: a2x.B3x(this.bOl2x(C3x))
            })
        }
    }();
    b3x.ZY1x = br4v;
    b3x.Yj0x = function(d3x) {
        var j3x = d3x.data || {},
            e3x = {
                data: j3x,
                key: this.jh7a.key,
                id: j3x[this.fg5l.pkey]
            };
        this.z3x("onbeforedelete", e3x);
        this.S3x.LH7A(e3x)
    };
    b3x.bab1x = br4v;
    b3x.Yh0x = function(d3x) {
        var j3x = d3x.data || {},
            e3x = {
                data: j3x,
                key: this.jh7a.key
            };
        this.z3x("onbeforeupdate", e3x);
        this.S3x.Yp0x(e3x)
    };
    b3x.bPz3x = function(d3x) {
        this.Pd8V(d3x, "onafterupdate");
        if (d3x.stopped) return;
        var C3x = d3x.data[this.fg5l.pkey];
        if (!!this.fH6B) {
            var p3x = a2x.bCg9X(C3x);
            if (!!p3x) p3x.gM6G(d3x.data)
        } else {
            var g3x = a2x.B3x(C3x + "" + a2x.Ka6U());
            if (!g3x) return;
            var i3x = this.S3x.hF6z(d3x.key),
                r3x = k3x.dl5q(i3x, d3x.data);
            if (r3x < 0) return;
            this.fg5l.list = i3x;
            this.fg5l.beg = r3x;
            this.fg5l.end = r3x;
            this.fg5l.act = "update";
            var dW5b = a2x.cc4g(this.KV7O, this.fg5l);
            g3x.insertAdjacentHTML("afterEnd", dW5b);
            a2x.cM4Q(g3x)
        }
    };
    b3x.Pd8V = function(d3x, W3x) {
        var p3x = d3x.data;
        if (!p3x || p3x[this.fg5l.pkey] == null) {
            this.z3x("onerror", d3x);
            d3x.stopped = !0
        }
        if (!d3x.stopped) {
            this.z3x(W3x, d3x)
        }
    };
    b3x.bjQ4U = br4v;
    b3x.bjU4Y = br4v;
    b3x.bid4h = function(d3x) {
        if (d3x.key != this.jh7a.key) return;
        switch (d3x.action) {
            case "add":
                this.ZY1x(d3x);
                break;
            case "delete":
                this.bab1x(d3x);
                break;
            case "update":
                this.bPz3x(d3x);
                break;
            case "refresh":
                this.gM6G();
                break;
            case "unshift":
                this.bjU4Y(d3x.offset, d3x.limit);
                break;
            case "append":
                this.bjQ4U(d3x.offset, d3x.limit);
                break
        }
    };
    b3x.qm9d = function(p3x) {
        this.Yh0x({
            data: p3x
        })
    };
    b3x.mv8n = function(p3x) {
        this.Yj0x({
            data: p3x
        })
    };
    b3x.sW0x = function(p3x) {
        this.S3x.jJ7C({
            data: p3x,
            key: this.jh7a.key
        })
    };
    b3x.sV0x = function() {
        return this.S3x
    };
    b3x.bjW4a = function(j3x) {
        this.bas2x("afterBegin", this.bap2x(j3x));
        return this.baq2x(j3x)
    };
    b3x.bRF5K = function(j3x) {
        this.bas2x("beforeEnd", this.bap2x(j3x));
        return this.baq2x(j3x)
    };
    b3x.gM6G = function() {
        this.Qi8a();
        this.bit4x()
    };
    b3x.cGx5C = function() {
        this.S3x.uI1x(this.jh7a.key);
        this.gM6G()
    };
    b3x.bru6o = function() {
        if (!!this.ZJ1x) return;
        this.ZJ1x = !0;
        this.zM3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        var i3x = this.S3x.hF6z(this.jh7a.key);
        if (i3x && i3x[0]) {
            this.jh7a.data.aftertime = i3x[0].eventTime || ""
        }
        this.S3x.bru6o({
            key: this.jh7a.key,
            data: this.jh7a.data
        })
    };
    b3x.lo8g = function() {
        return this.S3x.lo8g(this.jh7a.key)
    };
    b3x.bRN5S = function() {
        return this.jx7q
    };
    b3x.Yy1x = function() {
        return this.S3x.Yy1x(this.jh7a.key)
    };
    b3x.cxg3x = function() {
        return this.fH6B
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        k3x = c3x("nej.u"),
        a2x = c3x("nej.e"),
        O3x = c3x("nej.ut"),
        b3x, L3x;
    if (!!O3x.ks7l) return;
    O3x.ks7l = NEJ.C();
    b3x = O3x.ks7l.N3x(O3x.Zy1x);
    L3x = O3x.ks7l.cs4w;
    b3x.BW4a = function(bi4m, bq4u) {
        return L3x.BW4a.call(this, this.yn3x, bi4m, this.oN9E, bq4u)
    };
    b3x.bjY4c = function(r3x) {
        var bi4m = 0;
        if (r3x > 1) bi4m = this.yn3x + (r3x - 2) * this.oN9E;
        return bi4m
    };
    b3x.BJ4N = function(d3x) {
        L3x.BJ4N.apply(this, arguments);
        if (!d3x.stopped) {
            this.bQb3x(this.bjY4c(d3x.index))
        }
    };
    b3x.PC8u = function() {
        this.Qi8a();
        this.zM3x("onbeforelistload", "列表加载中...")
    };
    b3x.bag1x = function() {
        L3x.bag1x.apply(this, arguments);
        this.Qi8a()
    };
    b3x.bjd4h = function(i3x, bi4m, gc6W) {
        var bx4B = this.BW4a(bi4m, i3x.length);
        if (this.bQO4S(bx4B.index, bx4B.total)) return !0;
        this.bio4s(bx4B.total > 1 ? "" : "none")
    };
    b3x.biQ4U = function() {
        this.zM3x("onemptylist", "没有列表数据！")
    };
    b3x.baA2x = function(bF4J, kB8t) {
        if (!kB8t && k3x.fB5G(bF4J)) {
            this.in7g.innerHTML = bF4J;
            return
        }
        L3x.baA2x.apply(this, arguments)
    };
    b3x.Pu8m = function(dW5b) {
        this.in7g.innerHTML = dW5b
    };
    b3x.Pt8l = function(hm6g) {
        this.fH6B = hm6g
    };
    b3x.ZY1x = function(d3x) {
        this.Pd8V(d3x, "onafteradd");
        if (!d3x.stopped) this.gM6G()
    };
    b3x.bab1x = function(d3x) {
        this.Pd8V(d3x, "onafterdelete");
        if (!d3x.stopped) this.gM6G()
    };
    b3x.bjQ4U = function(bi4m, gc6W) {
        var r3x = 1;
        if (!!this.jx7q) {
            r3x = this.jx7q.tj0x()
        }
        var jO7H = this.bjY4c(r3x),
            fQ6K = jO7H + (r3x > 1 ? this.oN9E : this.yn3x);
        if (bi4m >= fQ6K && !!this.jx7q) {
            var bx4B = this.BW4a(0, this.lo8g());
            this.jx7q.bwz8r(bx4B.total);
            this.bio4s(bx4B.total > 1 ? "" : "none")
        } else {
            this.gM6G()
        }
    };
    b3x.bjU4Y = function(bi4m, gc6W) {
        var r3x = 1;
        if (!!this.jx7q) {
            r3x = this.jx7q.tj0x()
        }
        var jO7H = this.bjY4c(r3x),
            bx4B = this.BW4a(jO7H, this.lo8g());
        this.BJ4N({
            last: r3x,
            index: bx4B.index
        })
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        w3x = c3x("nm.w"),
        fq5v = 40,
        b3x, L3x;
    w3x.baG2x = NEJ.C();
    b3x = w3x.baG2x.N3x(I3x.cJ4N);
    L3x = w3x.baG2x.cs4w;
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.OV8N = e3x.inputer;
        this.bke4i = e3x.tipper;
        this.bX4b([
            [this.OV8N, "input", this.fR6L.f3x(this)]
        ])
    };
    b3x.bC4G = function() {
        this.bG4K();
        this.Ku6o(null, null)
    };
    b3x.fR6L = function(d3x) {
        if (d3x && d3x.type == "keyup" && (d3x.keyCode != 8 || d3x.keyCode != 68)) return;
        var W3x = this.OV8N.value,
            cGy5D;
        if (l3x.UJ9A(W3x) > fq5v) {
            this.OV8N.value = l3x.AW4a(W3x, fq5v);
            this.Ku6o("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.f3x(this))
        } else if (W3x.indexOf("#") >= 0 || W3x.indexOf("@") >= 0) {
            this.Ku6o("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Ku6o(null, null);
            this.z3x("onchange", {
                value: W3x
            })
        }
    };
    b3x.cxe3x = function() {
        this.fR6L()
    };
    b3x.Ku6o = function() {
        var C3x = 0;
        return function(dL5Q, bSx5C) {
            if (!!C3x) window.clearTimeout(C3x);
            if (!dL5Q) {
                a2x.y3x(this.bke4i, "f-vhide");
                this.bSA5F = !1;
                return
            }
            this.bke4i.innerHTML = '<i class="u-icn u-icn-25"></i>' + dL5Q;
            a2x.x3x(this.bke4i, "f-vhide");
            this.bSA5F = !0;
            if (k3x.gE6y(bSx5C)) C3x = window.setTimeout(function() {
                this.Ku6o(null, null);
                bSx5C()
            }.f3x(this), 1e3)
        }
    }();
    b3x.bSB5G = function() {
        if (this.bSA5F) return !1;
        if (l3x.kw8o(this.OV8N.value)) {
            this.Ku6o("歌单名不能为空");
            return !1
        }
        return !0
    };
    b3x.gd6X = function() {
        return this.OV8N.value
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        h3x = c3x("nej.v"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    n3x.baN2x = NEJ.C();
    b3x = n3x.baN2x.N3x(n3x.eq5v);
    L3x = n3x.baN2x.cs4w;
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.baO2x = {
            inputer: i3x[0],
            tipper: i3x[1]
        };
        this.iJ7C = {
            onerror: this.bSK5P.f3x(this),
            onitemadd: this.bSK5P.f3x(this)
        };
        this.lC8u = i3x[2];
        h3x.s3x(i3x[2], "click", this.Ho5t.f3x(this));
        h3x.s3x(i3x[3], "click", this.BR4V.f3x(this));
        h3x.s3x(this.o3x, "keypress", this.bSQ5V.f3x(this))
    };
    b3x.ch4l = function() {
        this.cf4j = "m-wgt-create"
    };
    b3x.bm4q = function(e3x) {
        e3x.clazz = " m-layer-w2";
        e3x.parent = e3x.parent || document.body;
        e3x.title = "新建歌单";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bn4r(e3x);
        this.baO2x.inputer.value = e3x.name || "";
        this.vl2x = w3x.baG2x.A3x(this.baO2x);
        this.vl2x.cxe3x();
        this.S3x = q3x.hY6S.A3x(this.iJ7C);
        setTimeout(function() {
            this.baO2x.inputer.focus()
        }.f3x(this), 0)
    };
    b3x.bC4G = function() {
        this.bG4K();
        if (this.vl2x) {
            this.vl2x.T3x();
            delete this.vl2x
        }
        this.sR0x(!1);
        this.baO2x.inputer.value = ""
    };
    b3x.sR0x = function(OI8A) {
        this.ps9j = OI8A;
        if (OI8A) {
            this.lC8u.innerHTML = "<i>新建中...</i>";
            a2x.y3x(this.lC8u, "u-btn2-dis")
        } else {
            this.lC8u.innerHTML = "<i>新 建</i>";
            a2x.x3x(this.lC8u, "u-btn2-dis")
        }
    };
    b3x.Ho5t = function() {
        if (this.ps9j || !this.vl2x.bSB5G()) return;
        var ct4x = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.vl2x.gd6X()
            },
            offset: 1
        };
        this.S3x.jJ7C(ct4x);
        this.sR0x(!0)
    };
    b3x.bSK5P = function(d3x) {
        var bY4c = (d3x.result || bb3x).code;
        if (!bY4c) {
            this.z3x("onsuccess", d3x.data)
        } else {
            this.z3x("onerror", d3x)
        }
        this.bt4x()
    };
    b3x.BR4V = function() {
        this.bt4x()
    };
    b3x.bSQ5V = function(d3x) {
        if (d3x.keyCode == 13) this.Ho5t()
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        v3x = c3x("nej.j"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.bkL5Q = NEJ.C();
    b3x = n3x.bkL5Q.N3x(n3x.eq5v);
    L3x = n3x.bkL5Q.cs4w;
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.iL7E = {
            limit: 301,
            parent: i3x[1],
            cache: {
                klass: q3x.hY6S,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bkQ5V.f3x(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l3x.AZ4d,
                escape: k3x.dH5M
            }
        };
        this.iJ7C = {
            onsuccess: this.baZ2x.f3x(this),
            onerror: this.dO5T.f3x(this)
        };
        h3x.s3x(i3x[0], "click", this.Ho5t.f3x(this));
        h3x.s3x(i3x[1], "click", this.kZ8R.f3x(this))
    };
    b3x.ch4l = function() {
        this.cf4j = "m-wgt-subscribe"
    };
    b3x.bm4q = function(e3x) {
        e3x.parent = e3x.parent || document.body;
        e3x.clazz = " m-layer-w2";
        e3x.title = "添加到歌单";
        e3x.draggable = !0;
        e3x.mask = !0;
        this.bn4r(e3x);
        this.bba2x = (e3x.tracks || []).reverse();
        this.iL7E.item.size = this.bba2x.length;
        this.iJ7C.name = e3x.name || "";
        this.bTr5w = q3x.xI3x.A3x({
            onaddsuccess: this.Bj4n.f3x(this)
        });
        this.tv0x = q3x.hY6S.A3x({
            onlistload: this.cxd3x.f3x(this)
        });
        this.tv0x.bPm3x();
        k3x.bd4h(this.bba2x, function(p3x, r3x, i3x) {
            if (!k3x.lG8y(p3x)) {
                i3x[r3x] = this.bTr5w.eL5Q(p3x) || p3x
            }
        }, this)
    };
    b3x.cxd3x = function() {
        if (this.dJ5O) this.dJ5O.T3x();
        this.dJ5O = I3x.ks7l.A3x(this.iL7E)
    };
    b3x.Ho5t = function() {
        this.bt4x();
        if (this.HG6A) this.HG6A.T3x();
        this.HG6A = n3x.baN2x.A3x(this.iJ7C);
        this.HG6A.J3x()
    };
    b3x.kZ8R = function() {
        var cxb3x = function(g3x) {
            while (g3x && g3x != document) {
                if (g3x.tagName.toLowerCase() == "li") {
                    return g3x
                }
                g3x = g3x.parentNode
            }
        };
        return function(d3x) {
            h3x.cn4r(d3x);
            var F3x = h3x.X3x(d3x),
                zz3x = cxb3x(F3x);
            if (!!zz3x && !a2x.bE4I(zz3x, "dis")) {
                this.baZ2x({
                    id: a2x.t3x(zz3x, "id")
                })
            }
        }
    }();
    b3x.baZ2x = function(d3x) {
        var C3x = d3x.id;
        if (!C3x || !this.bba2x.length) return;
        this.bTr5w.jJ7C({
            key: "track_playlist-" + C3x,
            data: {
                tracks: this.bba2x,
                pid: C3x
            }
        });
        this.bt4x()
    };
    b3x.Bj4n = function() {
        this.z3x("onsuccess");
        n3x.Z3x.J3x({
            tip: "收藏成功"
        })
    };
    b3x.dO5T = function(d3x) {
        this.bt4x();
        this.z3x("onerror", d3x);
        var cV4Z = "收藏失败";
        switch (d3x.code) {
            case 405:
                cV4Z = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cV4Z = "歌单数量超过限制";
                break;
            case 502:
                cV4Z = "歌曲已经存在"
        }
        n3x.Z3x.J3x({
            tip: cV4Z,
            type: 2
        })
    };
    b3x.bkQ5V = function() {
        this.bt4x();
        n3x.Z3x.J3x({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    };
    l3x.mw8o = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n3x.bkL5Q.J3x(e3x)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        dx5C = c3x("nej.p"),
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        l3x = c3x("nm.x");
    var blk5p, oV9M, Y3x = decodeURIComponent(location.href),
        jW7P = /.+(https?:\/\/.+\/proxy.html)/.test(Y3x) ? RegExp.$1 : "";
    if (!!jW7P) {
        v3x.vv2x("mail_proxy_url", jW7P)
    } else {
        jW7P = v3x.tR1x("mail_proxy_url") || "about:blank"
    }
    blk5p = a2x.beh3x({
        src: jW7P,
        onload: function() {
            oV9M = true
        }
    });
    var bTI5N = function() {
        v3x.gC6w("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var cxa3x = function() {
        if (dx5C.dr5w.browser == "ie" && parseInt(dx5C.dr5w.version) < 9) {
            l3x.ft5y({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l3x.Kj6d = function(u3x, C3x, V3x) {
        if (!cxa3x()) return;
        bTI5N();
        if (V3x == "stop") {
            if (!oV9M) throw "proxy not loaded";
            bTI5N();
            blk5p.contentWindow.location.replace(jW7P + "#" + k3x.cC4G({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            blk5p.contentWindow.location.replace(jW7P + "#" + k3x.cC4G({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: u3x,
                    id: C3x,
                    s: +(new Date),
                    action: V3x
                })
            }))
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        q3x = c3x("nm.d");
    var kO8G = q3x.hP6J.A3x();
    var pk9b = q3x.xI3x.A3x({
        onlistload: cwZ3x,
        onitemload: cwY3x,
        onerror: dO5T
    });
    var HU6O = q3x.rw0x.A3x({
        onlistload: cwX2x,
        onitemload: cwW2x,
        onerror: dO5T
    });
    var bUk5p = {};

    function xw3x(d3x) {
        var g3x = h3x.X3x(d3x, "d:resAction"),
            V3x = a2x.t3x(g3x, "resAction");
        if (g3x && (V3x == "play" || V3x == "addto")) {
            var u3x = parseInt(a2x.t3x(g3x, "resType"));
            bUp5u({
                action: V3x,
                type: u3x,
                id: a2x.t3x(g3x, "resId"),
                from: a2x.t3x(g3x, "resFrom"),
                data: a2x.t3x(g3x, "resData"),
                order: a2x.t3x(g3x, "resOrder"),
                node: g3x
            });
            if (u3x != 13) bUx5C(g3x)
        }
    }

    function bUp5u(bR4V) {
        var V3x = bR4V.action,
            u3x = bR4V.type,
            C3x = bR4V.id,
            ec5h = bR4V.from,
            j3x = bR4V.data,
            tL1x = bR4V.order,
            e3x = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: C3x
                },
                ext: {
                    id: C3x,
                    action: V3x,
                    type: u3x,
                    from: ec5h,
                    data: j3x,
                    node: bR4V.node
                }
            };
        if (V3x != "play" && V3x != "addto" || !u3x) return;
        if (window.GRef && GRef == "mail") {
            l3x.Kj6d(u3x, C3x, V3x);
            return
        }
        switch (u3x) {
            case 13:
                e3x.key = "track_playlist-" + C3x;
                pk9b.lw8o(e3x);
                break;
            case 17:
                e3x.key = "program";
                e3x.id = C3x;
                HU6O.Yu1x(e3x);
                if (V3x == "play") {
                    v3x.bl4p("/api/dj/program/listen", {
                        query: {
                            id: C3x
                        }
                    })
                }
                break;
            case 18:
                e3x.key = "track";
                e3x.id = C3x;
                pk9b.Yu1x(e3x);
                break;
            case 19:
                e3x.key = "track_album-" + C3x;
                pk9b.lw8o(e3x);
                break;
            case 24:
                e3x.key = "track_day";
                pk9b.lw8o(e3x);
                break;
            case 2:
                e3x.key = "track_artist_top-" + C3x;
                pk9b.lw8o(e3x);
                break;
            case 70:
                e3x.key = "program_djradio-" + C3x + "-" + tL1x;
                e3x.data.radioId = C3x;
                e3x.data.asc = tL1x == 2;
                HU6O.lw8o(e3x);
                break
        }
    }

    function bUD5I(i3x) {
        var m3x = [];
        k3x.bd4h(i3x, function(p3x) {
            if (p3x.mainSong) {
                p3x.mainSong.program = p3x;
                m3x.push(p3x.mainSong);
                p3x.localupdatetime = +(new Date);
                pk9b.cDO4S(p3x.mainSong);
                p3x.mainTrackId = p3x.mainSong.id;
                delete p3x.mainSong
            } else {
                var bUE5J = pk9b.eL5Q(p3x.mainTrackId);
                bUE5J && m3x.push(bUE5J)
            }
        });
        return m3x
    }

    function bbm2x(i3x, e3x) {
        var rM0x = e3x.action == "play" && e3x.type != 17 && e3x.type != 18,
            fY6S = e3x.action == "play";
        if (!i3x.length) return;
        if (e3x.type == 19) {
            i3x = l3x.LQ7J(i3x, true, {
                play: true
            }, {
                source: "album",
                sourceid: e3x.id
            })
        } else {
            i3x = l3x.LQ7J(i3x, true, {
                play: true
            })
        }
        k3x.bd4h(i3x, function(p3x) {
            p3x.source = l3x.btc7V({
                fid: e3x.from,
                fdata: e3x.data,
                type: e3x.type,
                rid: e3x.id
            }, p3x.id)
        });
        top.player.addTo(i3x, rM0x, fY6S);
        kO8G.SD9u({
            rid: e3x.id,
            type: e3x.type,
            hash: l3x.Mv7o(),
            play: fY6S,
            source: e3x.from,
            sourceid: e3x.data
        })
    }

    function cwZ3x(d3x) {
        var eA5F = d3x.ext || {};
        i3x = pk9b.hF6z(d3x.key);
        bbm2x(i3x, eA5F);
        if (eA5F.type == 13 && eA5F.action == "play" && i3x && i3x.length > 0) {
            bUx5C(eA5F.node);
            v3x.bl4p("/api/playlist/update/playcount", {
                query: {
                    id: eA5F.id
                }
            })
        }
    }

    function cwY3x(d3x) {
        var i3x = [pk9b.eL5Q(d3x.id)],
            bj4n = i3x[0],
            qx9o = l3x.pX9O(bj4n),
            tm0x = bj4n.privilege || {};
        if (qx9o == 10) {
            l3x.vZ2x(tm0x.fee || bj4n.fee, bj4n.id, "song", null, tm0x)
        } else if (qx9o == 100) {
            l3x.iC7v(null, null, null, true, bj4n)
        } else if (qx9o == 11) {
            l3x.bFk0x(bj4n.id, 18)
        } else {
            bbm2x(i3x, d3x.ext)
        }
    }

    function cwX2x(d3x) {
        var i3x = bUD5I(HU6O.hF6z(d3x.key));
        bbm2x(i3x, d3x.ext)
    }

    function cwW2x(d3x) {
        var i3x = bUD5I([HU6O.eL5Q(d3x.id)]);
        bbm2x(i3x, d3x.ext)
    }

    function dO5T() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bUx5C(g3x) {
        var u3x = a2x.t3x(g3x, "resType"),
            C3x = a2x.t3x(g3x, "resId"),
            K3x = u3x + "-" + C3x;
        if (bUk5p[K3x]) return;
        var bUL5Q = a2x.B3x("play-count"),
            blG5L = a2x.H3x(g3x.parentNode, "nb"),
            Oh8Z = null;
        if (bUL5Q) {
            Oh8Z = bUL5Q
        } else {
            Oh8Z = !!blG5L && !!blG5L[0] ? blG5L[0] : null
        }
        if (Oh8Z) {
            var cz4D = Oh8Z.innerHTML;
            if (/^\d+$/.test(cz4D)) {
                Oh8Z.innerText = +cz4D + 1
            }
            bUk5p[K3x] = true
        }
    }
    l3x.cwV2x = function(g3x) {
        h3x.s3x(g3x || document.body, "click", xw3x.f3x(this))
    };
    l3x.cwU2x = function(V3x, u3x, C3x) {
        bUp5u({
            action: V3x,
            type: u3x,
            id: C3x
        })
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    q3x.fr5w({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(m3x, e3x) {
                this.cwS2x(m3x, e3x)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(m3x, e3x) {
                this.z3x("onshareall", e3x.result)
            },
            onerror: function(m3x, e3x) {
                this.z3x("onshareall", e3x.result)
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
            format: function(m3x, e3x) {
                e3x.options.picUrl = m3x.picUrl;
                this.bVe5j(e3x.options, e3x.result)
            },
            onerror: function(m3x, e3x) {
                this.z3x("onshareall", e3x.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q3x, e3x) {
                this.pQ9H("vid_info-" + e3x.data.nosKey, Q3x);
                return Q3x
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e3x) {},
            format: function(m3x, e3x) {
                e3x.data = e3x.data2;
                this.cp4t("share-all", e3x)
            },
            onerror: "onshareerror"
        }
    });
    q3x.bmd5i = NEJ.C();
    b3x = q3x.bmd5i.N3x(q3x.hM6G);
    b3x.cwR2x = function() {
        var vj2x = function(Q3x, e3x) {
            e3x.times++;
            if (e3x.times > 10) {
                this.z3x("onvinfoerror", e3x.key, Q3x)
            } else {
                setTimeout(ez5E.f3x(this, e3x), e3x.times * 1e3)
            }
        };
        var zP3x = function(Q3x, e3x) {
            this.z3x("onvinfo", e3x.key, Q3x)
        };
        var ez5E = function(e3x) {
            var Y3x = e3x.url;
            v3x.bl4p(Y3x + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: zP3x.ew5B(this, e3x),
                onerror: vj2x.ew5B(this, e3x)
            })
        };
        return function(e3x) {
            e3x.times = 0;
            ez5E.call(this, e3x)
        }
    }();
    b3x.cGA5F = function() {
        var DC4G;
        var vj2x = function(Q3x, e3x) {
            if (Q3x.code > 0) {
                clearInterval(this.DD4H);
                this.z3x("onviderror", e3x.data.nosKey)
            }
        };
        var zP3x = function(K3x, Q3x) {
            if (Q3x.vid && Q3x.covers) {
                clearInterval(this.DD4H);
                this.z3x("onvid", K3x, Q3x)
            }
        };
        var ez5E = function(e3x) {
            if (+(new Date) - DC4G > 60 * 60 * 1e3) {
                clearInterval(this.DD4H);
                this.z3x("onviderror", e3x.data.nosKey);
                return
            }
            e3x.onload = zP3x.f3x(this, e3x.data.nosKey);
            e3x.onerror = vj2x.f3x(this);
            this.cp4t("vid-get", e3x)
        };
        return function(e3x) {
            if (!e3x || !e3x.data) return;
            DC4G = +(new Date);
            this.DD4H = clearInterval(this.DD4H);
            this.DD4H = setInterval(ez5E.f3x(this, e3x), 1e4);
            ez5E.apply(this, arguments)
        }
    }();
    b3x.cwO2x = function() {
        this.DD4H = clearInterval(this.DD4H)
    };
    b3x.cwS2x = function(m3x, ob9S) {
        if (m3x.event && ob9S.snsTypes) {
            if (ob9S.pics) {
                var bVB6v = [];
                for (var i = 0, len = ob9S.pics.length; i < len; i++) {
                    bVB6v[i] = ob9S.pics[i].originId
                }
                this.cp4t("share_img_compound", {
                    data: {
                        picIds: bVB6v.join(",")
                    },
                    options: ob9S,
                    result: m3x
                })
            } else {
                ob9S.picUrl = ob9S.picUrl;
                this.bVe5j(ob9S, m3x)
            }
        } else {
            this.z3x("onshareall", m3x)
        }
        var wf2x = q3x.hP6J.A3x();
        wf2x.eS5X(ob9S.isPub ? "pubevent" : "shareevent", {
            id: m3x.id
        })
    };
    b3x.bVe5j = function(ob9S, m3x) {
        var ct4x = {},
            d3x = m3x.event || {};
        ct4x.eventid = d3x.id;
        ct4x.eventtype = d3x.type;
        ob9S.picUrl && (ct4x.picUrl = ob9S.picUrl);
        ct4x.snsTypes = ob9S.snsTypes;
        ct4x.msg = ob9S.data.msg || "";
        ct4x.type = ob9S.data.type;
        ob9S.data.id && (ct4x.id = ob9S.data.id);
        if (ct4x.eventtype == 41) {
            var Q3x = l3x.Fh5m(d3x.json);
            ct4x.eventtype = 39;
            if (ct4x.msg) {
                ct4x.msg += "  "
            }
            ct4x.msg += "分享" + Q3x.video.creator.nickname + "的视频《" + Q3x.video.title + "》";
            delete ct4x.id
        }
        this.cp4t("share-sns", {
            data: ct4x,
            result: m3x
        })
    };
    b3x.cwN2x = function(e3x) {
        var j3x = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            checkToken: "",
            uuid: "publish-" + +(new Date) + k3x.nM9D(5)
        };
        j3x = NEJ.EX(j3x, e3x);
        if (j3x.id < 0) {
            delete j3x.id;
            j3x.type = "noresource"
        }
        if (!j3x.threadId) {
            delete j3x.threadId
        }
        if (!j3x.actId) {
            delete j3x.actId
        }
        if (!j3x.pics) {
            delete j3x.pics
        } else {
            j3x.pics = JSON.stringify(j3x.pics)
        }
        this.cp4t("share-all", {
            data: j3x,
            snsTypes: e3x.snsTypes,
            picUrl: e3x.picUrl,
            pics: e3x.pics,
            isPub: e3x.isPub
        })
    };
    b3x.cwM2x = function(e3x) {
        this.cp4t("share-private", e3x)
    };
    b3x.cwK2x = function(e3x) {
        this.cp4t("video-submit", e3x)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    var cwJ2x = {
        40: !0
    };
    q3x.fr5w({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e3x) {
                e3x.data.getcounts = true;
                e3x.data.pagesize = e3x.data.limit;
                if (e3x.data.offset == 0) {
                    e3x.data.lasttime = -1
                }
                delete e3x.data.offset
            },
            format: function(Q3x, e3x) {
                Q3x.event = l3x.bfw3x(Q3x.event, function(p3x, r3x) {
                    return !cwJ2x[p3x.type]
                });
                this.cwI2x(Q3x.event);
                e3x.data.lasttime = Q3x.lasttime;
                if (Q3x.event.length) {
                    Q3x.event.length = e3x.limit
                }
                return {
                    list: Q3x.event,
                    total: Q3x.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q3x, e3x) {
                return {
                    list: Q3x.events,
                    total: Q3x.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e3x) {
                e3x.data.pagesize = 20
            },
            format: function(Q3x, e3x) {
                return Q3x.event
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
            filter: function(e3x) {
                if (e3x.data.offset == 0) {
                    e3x.data.time = -1
                }
                delete e3x.data.offset;
                e3x.data.getcounts = true
            },
            format: function(Q3x, e3x) {
                e3x.data.time = Q3x.lasttime;
                var i3x = Q3x.events;
                if (Q3x.more && i3x.length < e3x.data.limit) {
                    i3x = this.JY6S(i3x, e3x.data.limit)
                }
                return {
                    list: i3x,
                    total: Q3x.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m3x, e3x) {
                m3x.conf = e3x.conf;
                return m3x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e3x, bg4k) {
                if (e3x.like) {
                    if (e3x.comment) {
                        bg4k.url = "/api/v1/comment/like"
                    } else {
                        bg4k.url = "/api/resource/like"
                    }
                    bg4k.onload = "oneventlike";
                    bg4k.onerror = "oneventlikeerr"
                } else {
                    if (e3x.comment) {
                        bg4k.url = "/api/v1/comment/unlike"
                    } else {
                        bg4k.url = "/api/resource/unlike"
                    }
                    bg4k.onload = "oneventunlike";
                    bg4k.onerror = "oneventunlikeerr"
                }
            },
            format: function(m3x, e3x) {
                m3x.eid = e3x.eid;
                m3x.origin = e3x.origin;
                m3x.ext = e3x.ext;
                return m3x
            },
            onmessage: function(bY4c, m3x) {
                if (bY4c == 250) {
                    n3x.Z3x.J3x({
                        tip: m3x.message || m3x.msg || "点赞异常",
                        type: 2
                    });
                    return
                }
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e3x, bg4k) {
                if (e3x.data.type == "nointer") {
                    bg4k.url = "/api/event/rcmd/reject"
                } else if (e3x.data.transcoding) {
                    bg4k.url = "/api/event/video/transcoding/delete"
                } else {
                    bg4k.url = "/api/event/delete"
                }
            },
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m3x, e3x) {
                m3x.id = e3x.data.id;
                return m3x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e3x) {
                e3x.data.lasttime = e3x.data.lasttime || -1;
                e3x.data.pagesize = e3x.data.limit;
                e3x.data.getcounts = true;
                delete e3x.data.offset
            },
            format: function(Q3x, e3x) {
                e3x.data.lasttime = Q3x.lasttime;
                var i3x = Q3x.events;
                if (Q3x.more) i3x = this.JY6S(i3x, e3x.data.pagesize);
                return {
                    list: i3x,
                    total: Q3x.size
                }
            },
            onerror: "onlisterror"
        }
    });
    q3x.zX3x = NEJ.C();
    b3x = q3x.zX3x.N3x(q3x.hM6G);
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bmI5N = function(u3x, cU4Y) {
        return u3x + "-" + cU4Y
    };
    b3x.cGB5G = function(e3x) {
        this.cp4t("ievent-get", e3x)
    };
    b3x.cGD5I = function(e3x) {
        this.cp4t("ievent-new-get", e3x)
    };
    b3x.cGE5J = function(e3x) {
        this.cp4t("ievent-user-get", e3x)
    };
    b3x.cGF5K = function(u3x, cU4Y) {
        return this.sE0x(this.bmI5N(u3x, cU4Y))
    };
    b3x.cGG5L = function(JU6O, e3x) {
        if (!JU6O || !JU6O.length) return;
        e3x = e3x || {};
        var bz4D = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, FU5Z = [], byz8r = [], j3x; i < JU6O.length; ++i) {
            j3x = JU6O[i];
            j3x = this.sE0x(this.bmI5N(j3x.type, j3x.id));
            if (!j3x) {
                FU5Z.push(JU6O[i].id);
                byz8r.push(bz4D[JU6O[i].type] || 0)
            }
        }
        if (!FU5Z.length) {
            this.z3x("oneventresload", e3x.conf);
            return
        }
        e3x.data = {
            ids: JSON.stringify(FU5Z),
            types: JSON.stringify(byz8r)
        };
        e3x.onload = this.cwA2x.f3x(this);
        this.cp4t("ievent-res-get", e3x)
    };
    b3x.cwA2x = function(m3x) {
        if (m3x.code != 200) {
            this.z3x("oneventreserror", m3x.code);
            return
        }
        var bz4D = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i3x = m3x.results; i < i3x.length; ++i) {
            this.pQ9H(this.bmI5N(bz4D[i3x[i].type], i3x[i].id), i3x[i])
        }
        this.z3x("oneventresload", m3x.conf)
    };
    b3x.byD8v = function(j3x) {
        var K3x = "event-list";
        this.bsg7Z(K3x, j3x);
        this.z3x("onitemadd", {
            key: K3x,
            action: "add",
            data: j3x,
            flag: -1
        })
    };
    b3x.oZ9Q = function(e3x) {
        this.cp4t("ievent-like", e3x)
    };
    b3x.mv8n = function(e3x) {
        this.cp4t("ievent-delete", e3x)
    };
    b3x.JY6S = function(i3x, gc6W) {
        for (var i = i3x.length; i < gc6W; i++) i3x.push(null);
        return i3x
    };
    b3x.cwI2x = function(i3x) {
        var m3x = [];
        if (!i3x || !i3x.length) return;
        k3x.bd4h(i3x, function(d3x) {
            d3x.biData = this.byE8w(d3x)
        }, this)
    };
    b3x.byE8w = function() {
        var Xd0x = {
                32: "comment",
                33: "activity",
                34: "recomment_artist"
            },
            cwy2x = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d3x) {
            var Q3x = {
                id: d3x.id,
                sourceid: d3x.user.userId,
                alg: d3x.rcmdInfo ? d3x.rcmdInfo.alg : null,
                contentType: Xd0x[d3x.type] || (k3x.dl5q(cwy2x, d3x.type) != -1 ? "user_event" : "other")
            };
            return Q3x
        }
    }();
    b3x.DU4Y = function(cwv2x, d3x) {
        var Q3x = this.byE8w(d3x);
        Q3x.actionType = cwv2x;
        if (window.log) log("eventclick", Q3x)
    };
    b3x.cGI5N = function(e3x) {
        this.cp4t("event_latest-list", e3x)
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
        this.rX0x += contents;
        this.bq4u += contents.length;
        var length = this.rX0x.length,
            i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR5W, md5blk(this.rX0x.substring(i - 64, i)))
        }
        this.rX0x = this.rX0x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function(raw) {
        var buff = this.rX0x,
            length = buff.length,
            i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.pa9R(tail, length);
        ret = hex(this.dR5W);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function() {
        this.rX0x = "";
        this.bq4u = 0;
        this.dR5W = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.rX0x,
            length: this.bq4u,
            hash: this.dR5W
        }
    };
    SparkMD5.prototype.setState = function(state) {
        this.rX0x = state.buff;
        this.bq4u = state.length;
        this.dR5W = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function() {
        delete this.dR5W;
        delete this.rX0x;
        delete this.bq4u
    };
    SparkMD5.prototype.pa9R = function(tail, length) {
        var i = length,
            tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dR5W, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bq4u * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dR5W, tail)
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
        var buff = concatenateArrayBuffers(this.rX0x.buffer, arr, true),
            length = buff.length,
            i;
        this.bq4u += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dR5W, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.rX0x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.rX0x,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.pa9R(tail, length);
        ret = hex(this.dR5W);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.rX0x = new Uint8Array(0);
        this.bq4u = 0;
        this.dR5W = [1732584193, -271733879, -1732584194, 271733878];
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
    SparkMD5.ArrayBuffer.prototype.pa9R = SparkMD5.prototype.pa9R;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        en5s = c3x("nej.g"),
        k3x = c3x("nej.u"),
        fJ6D = c3x("nej.n"),
        I3x = c3x("nej.ut"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        io7h = c3x("nm.x.nos"),
        w3x = c3x("nm.w");
    var cwt2x = 1024 * 256,
        cws2x = 1024 * 1024 * 2,
        rk0x = {
            TOKEN_ERROR: -100,
            DNS_ERROR: -101
        },
        bzj8b = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : br4v,
        rj0x = {
            MD5_DONE: .2,
            TOKEN_GET: .22,
            DNS_GET: .24,
            UPLOADED: 1
        },
        jz7s = {
            AUDIO: "audio",
            IMAGE: "image",
            TXT: "txt",
            RAR: "rar",
            OTHER: "other",
            VIDEO: "video"
        };
    var nQ9H = {};
    var wf2x = q3x.hP6J.A3x();
    io7h.cGJ5O = function() {
        return jz7s
    };
    var cwo2x = function() {
        return k3x.nM9D(6) + +(new Date)
    };
    var JS6M = function(iK7D, e3x) {
        if (!nQ9H[e3x.taskId]) {
            return
        }(e3x.onuploading || br4v).call(this, iK7D)
    };
    var bna5f = function(R3x) {
        var cwn2x = R3x.md5,
            cT4X = R3x.file,
            cwm2x = cwn2x + cT4X.size;
        return "nos_file_hash_" + cwm2x
    };
    var cwl2x = function(R3x) {
        var K3x = bna5f(R3x),
            j3x = v3x.bLb2x(K3x, "{}");
        try {
            j3x = JSON.parse(j3x)
        } catch (e) {
            j3x = {}
        }
        return j3x
    };
    var cwk2x = function(R3x, e3x) {
        if (!R3x.md5) {
            return
        }
        var K3x = bna5f(R3x),
            j3x = v3x.bLb2x(K3x, "{}");
        try {
            j3x = JSON.parse(j3x)
        } catch (e) {
            j3x = {}
        }
        NEJ.X(j3x, e3x);
        v3x.vv2x(K3x, JSON.stringify(j3x))
    };
    var cwj2x = function(R3x) {
        var K3x = bna5f(R3x);
        v3x.Lu7n(K3x)
    };
    var cwh2x = function(R3x, eO5T) {
        var Y3x = R3x.urls[Math.min(R3x.urlIndex, R3x.urls.length - 1)],
            cT4X = R3x.file,
            li8a = R3x.bucket,
            mM8E = R3x.objectKey,
            cG4K = R3x.token,
            bJ4N = R3x.context,
            oW9N = {},
            Np7i = bzj8b.call(cT4X, R3x.beg, R3x.end),
            bv4z = {
                offset: R3x.beg,
                complete: R3x.lastChunk || false,
                version: "1.0"
            };
        if (bJ4N) {
            bv4z.context = bJ4N
        }
        oW9N["x-nos-token"] = cG4K;
        oW9N[en5s.ym3x] = cT4X.type;
        R3x.reqId = v3x.bl4p(Y3x + "/" + li8a + "/" + mM8E, {
            type: "json",
            method: "POST",
            headers: oW9N,
            query: bv4z,
            data: Np7i,
            onload: eO5T.onload,
            onerror: eO5T.onerror
        })
    };
    var cwg2x = function(m3x, R3x, e3x) {
        m3x = {
            code: 200,
            fileName: e3x.file.name,
            size: e3x.file.size,
            type: e3x.file.type,
            bucket: R3x.bucket,
            docId: R3x.docId,
            objectKey: R3x.objectKey,
            url: "//nos.netease.com/" + R3x.bucket + "/" + R3x.objectKey,
            taskId: e3x.taskId
        };
        cwj2x(R3x);
        if (!nQ9H[e3x.taskId]) {
            return
        }
        delete nQ9H[e3x.taskId];
        wf2x.eS5X("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(m3x)
        });
        (e3x.onsuccess || br4v).call(this, m3x)
    };
    var cwf2x = function(m3x, e3x) {
        (e3x.onerror || br4v).call(this, m3x)
    };
    var cwc2x = function(m3x, R3x, e3x) {
        R3x.context = m3x.context;
        R3x.beg = m3x.offset;
        var iK7D = R3x.beg / R3x.file.size;
        cwk2x(R3x, {
            bucket: R3x.bucket,
            objectKey: R3x.objectKey,
            token: R3x.token,
            context: R3x.context,
            beg: R3x.beg,
            updateTime: +(new Date)
        });
        iK7D = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iK7D;
        JS6M(iK7D, e3x);
        if (R3x.lastChunk) {
            cwg2x(m3x, R3x, e3x)
        } else {
            bbR2x(R3x, e3x)
        }
    };
    var cwb2x = function(m3x, R3x, e3x) {
        wf2x.eS5X("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: m3x.data,
            body: m3x.extData,
            ext: JSON.stringify(R3x),
            timging: +(new Date) - R3x.chuckUploadStartTime
        });
        if (R3x.urlIndex < Math.max(R3x.urls.length - 1, 5)) {
            R3x.urlIndex++;
            bbR2x(R3x, e3x)
        } else {
            cwf2x(m3x, e3x)
        }
    };
    var bbR2x = function(R3x, e3x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.end = R3x.beg + cwt2x;
        if (R3x.end >= R3x.file.size) {
            R3x.end = R3x.file.size;
            R3x.lastChunk = true
        }
        R3x.chuckUploadStartTime = +(new Date);
        cwh2x(R3x, {
            onload: cwc2x.ew5B(this, R3x, e3x),
            onerror: cwb2x.ew5B(this, R3x, e3x)
        })
    };
    var cvZ2x = function(m3x, R3x, e3x) {
        R3x.beg = m3x.offset;
        var iK7D = R3x.beg / R3x.file.size;
        iK7D = rj0x.DNS_GET + (rj0x.UPLOADED - rj0x.DNS_GET) * iK7D;
        JS6M(iK7D, e3x);
        bbR2x(R3x, e3x)
    };
    var cvY2x = function(m3x, R3x, e3x) {
        R3x.beg = 0;
        delete R3x.context;
        bnO5T(R3x, e3x)
    };
    var bAd9U = function(VI0x, R3x, e3x) {
        R3x.lastChunk = false;
        R3x.urls = VI0x;
        R3x.urlIndex = 0;
        JS6M(rj0x.DNS_GET, e3x);
        if (R3x.fromExist) {
            delete R3x.fromExist;
            var Y3x = R3x.urls[Math.min(R3x.urlIndex, R3x.urls.length - 1)],
                li8a = R3x.bucket,
                mM8E = R3x.objectKey,
                cG4K = R3x.token,
                bJ4N = R3x.context,
                oW9N = {},
                bv4z = {
                    context: bJ4N,
                    version: "1.0"
                };
            oW9N["x-nos-token"] = cG4K;
            R3x.reqId = v3x.bl4p(Y3x + "/" + li8a + "/" + mM8E + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: oW9N,
                query: bv4z,
                onload: cvZ2x.ew5B(this, R3x, e3x),
                onerror: cvY2x.ew5B(this, R3x, e3x)
            })
        } else {
            R3x.beg = 0;
            bbR2x(R3x, e3x)
        }
    };
    var cvT2x = function(m3x, R3x, e3x) {
        m3x.code = rk0x.DNS_ERROR;
        (e3x.onerror || br4v).call(this, m3x)
    };
    var bAj9a = function(j3x, e3x) {
        var m3x = j3x.result || {},
            li8a = m3x.bucket,
            mM8E = m3x.objectKey,
            cG4K = m3x.token,
            R3x = nQ9H[e3x.taskId];
        if (!li8a || !mM8E || !cG4K || !R3x) {
            m3x.code = rk0x.TOKEN_ERROR;
            (e3x.onerror || br4v).call(this, m3x);
            return
        }
        R3x.bucket = li8a;
        R3x.objectKey = mM8E;
        R3x.docId = m3x.docId;
        R3x.token = cG4K;
        JS6M(rj0x.TOKEN_GET, e3x);
        if (location.protocol == "https:") {
            bAd9U(["//nosup-hz1.127.net"], R3x, e3x)
        } else {
            R3x.reqId = io7h.cvS2x({
                bucket: li8a,
                onload: bAd9U.ew5B(this, R3x, e3x),
                onerror: cvT2x.ew5B(this, R3x, e3x)
            })
        }
        R3x.step = 1
    };
    var cvR2x = function(m3x, e3x) {
        m3x.code = rk0x.TOKEN_ERROR;
        (e3x.onerror || br4v).call(this, m3x)
    };
    var bnO5T = function(R3x, e3x) {
        var cT4X = e3x.file,
            eP5U = cT4X.name || "",
            eA5F = eP5U.split(".").pop();
        io7h.bbX2x(NEJ.X({
            filename: eP5U,
            ext: eA5F,
            onload: bAj9a.ew5B(this, e3x),
            onerror: cvR2x.ew5B(this, e3x)
        }, e3x, function(p3x) {
            return k3x.gE6y(p3x) || k3x.lG8y(p3x)
        }))
    };
    var cvQ2x = function(R3x, e3x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.md5 = R3x.spark.end();
        var JI6C = cwl2x(R3x) || {},
            li8a = JI6C.bucket,
            mM8E = JI6C.objectKey,
            cG4K = JI6C.token;
        if (!li8a || !mM8E || !cG4K) {
            bnO5T(R3x, e3x)
        } else {
            R3x.context = JI6C.context;
            R3x.beg = JI6C.beg;
            R3x.fromExist = true;
            bAj9a({
                result: JI6C
            }, e3x)
        }
    };
    var cvP2x = function(EI5N, R3x, e3x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.beg = R3x.end;
        var iK7D = R3x.beg / R3x.file.size;
        iK7D = 0 + rj0x.MD5_DONE * iK7D;
        JS6M(iK7D, e3x);
        R3x.spark.append(EI5N.result);
        if (R3x.lastChunk) {
            cvQ2x(R3x, e3x)
        } else {
            bAy9p(R3x, e3x)
        }
    };
    var cvO2x = function(m3x, R3x, e3x) {
        R3x.md5 = "";
        bnO5T(R3x, e3x)
    };
    var bAy9p = function(R3x, e3x) {
        if (!R3x || R3x.step == -1) {
            return
        }
        R3x.end = R3x.beg + cws2x;
        if (R3x.end >= R3x.file.size) {
            R3x.end = R3x.file.size;
            R3x.lastChunk = true
        }
        var EI5N = new FileReader;
        EI5N.onload = cvP2x.f3x(this, EI5N, R3x, e3x);
        EI5N.onerror = cvO2x.f3x(this, EI5N, R3x, e3x);
        EI5N.readAsArrayBuffer(bzj8b.call(R3x.file, R3x.beg, R3x.end))
    };
    io7h.hV6P = function(e3x) {
        var cT4X = e3x.file,
            eP5U = cT4X.name || "",
            eA5F = eP5U.split(".").pop(),
            EK5P = cwo2x();
        e3x.taskId = EK5P;
        nQ9H[EK5P] = {
            step: 0
        };
        JS6M(0, e3x);
        var R3x = nQ9H[EK5P];
        R3x.id = EK5P;
        R3x.file = cT4X;
        R3x.beg = 0;
        R3x.lastChunk = false;
        R3x.spark = new SparkMD5.ArrayBuffer;
        var cvM2x = e3x.onerror || br4v;
        e3x.onerror = function() {
            if (!nQ9H[EK5P]) {
                return
            }
            delete nQ9H[EK5P];
            cvM2x.apply(this, arguments)
        };
        wf2x.eS5X("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        bAy9p(R3x, e3x);
        return EK5P
    };
    io7h.kk7d = function(C3x) {
        var R3x = nQ9H[C3x];
        if (R3x) {
            if (R3x.step == 0) {
                delete nQ9H[C3x]
            } else {
                R3x.step = -1;
                if (R3x.reqId) {
                    v3x.kk7d(R3x.reqId)
                }
                delete nQ9H[C3x]
            }
        }
    };
    io7h.bbX2x = function() {
        var yE3x = function(m3x, e3x) {
            (e3x.onload || br4v).call(this, m3x)
        };
        var BO4S = function(m3x, e3x) {
            (e3x.onerror || br4v).call(this, m3x)
        };
        var bAL9C = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e3x) {
            var bcb2x = e3x.returnBody || bAL9C;
            if (k3x.lG8y(bcb2x)) {
                try {
                    JSON.stringify(bcb2x)
                } catch (e) {
                    bcb2x = bAL9C
                }
            }
            return v3x.bl4p("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e3x.filename || "",
                    ext: e3x.ext || "",
                    type: e3x.type || jz7s.OTHER,
                    bucket: e3x.bucket || "",
                    local: e3x.local || false,
                    nos_product: e3x.nosProduct || 0,
                    return_body: bcb2x
                },
                onload: yE3x.ew5B(this, e3x),
                onerror: BO4S.ew5B(this, e3x)
            })
        }
    }();
    io7h.cvS2x = function() {
        var cvI2x = "//wanproxy.127.net/lbs";
        var yE3x = function(m3x, e3x) {
            if (m3x.lbs) {}
            var VI0x = m3x.upload;
            if (!VI0x || !VI0x.length) {
                BO4S(m3x, e3x)
            }(e3x.onload || br4v).call(this, VI0x)
        };
        var BO4S = function(m3x, e3x) {
            (e3x.onerror || br4v).call(this, m3x)
        };
        return function(e3x) {
            var li8a = e3x.bucket;
            return v3x.bl4p(cvI2x, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: li8a
                },
                onload: yE3x.ew5B(this, e3x),
                onerror: BO4S.ew5B(this, e3x)
            })
        }
    }();
    io7h.bcc2x = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        cd4h = c3x("nej.ut"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        io7h = c3x("nm.x.nos"),
        E3x = c3x("nm.m"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        b3x, L3x;
    var gi6c = a2x.jq7j('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    w3x.JD6x = NEJ.C();
    b3x = w3x.JD6x.N3x(bD4H.ej5o);
    b3x.ch4l = function() {
        this.cf4j = gi6c
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.bH4L = this.o3x;
        this.hE6y = a2x.H3x(this.o3x, "j-file")[0];
        h3x.s3x(this.hE6y, "change", this.pL9C.f3x(this))
    };
    b3x.bm4q = function(e3x) {
        e3x = e3x || {};
        this.bn4r(e3x);
        this.hE6y.id = e3x.inputId || "";
        this.hE6y.accept = e3x.accept || "*";
        this.xA3x = e3x
    };
    b3x.bcd2x = function() {
        return a2x.lQ8I(this.hE6y)
    };
    b3x.pL9C = function(d3x) {
        if (this.hE6y.value == "") return;
        var kC8u = this.hE6y.value.split("\\"),
            eP5U = kC8u.length > 0 ? kC8u[kC8u.length - 1] : kC8u[0],
            oz9q = (this.hE6y.files || [{}])[0];
        var cm4q = {
            files: this.hE6y.files,
            filename: eP5U,
            size: oz9q.size,
            cancelUpload: false
        };
        this.z3x("onchange", cm4q);
        if (cm4q.cancelUpload) {
            this.hE6y.value = "";
            return
        }
        if (cm4q.stopped) {
            return
        }
        this.Uv9m()
    };
    b3x.Uv9m = function() {
        if (this.hE6y.value == "") return;
        var kC8u = this.hE6y.value.split("\\"),
            eP5U = kC8u.length > 0 ? kC8u[kC8u.length - 1] : kC8u[0],
            eA5F = (eP5U.split(".") || []).pop(),
            oz9q = (this.hE6y.files || [{}])[0],
            EY5d = (oz9q.type || "").split("/").shift();
        if (oz9q.size > 100 * 1024 * 1024) {
            return this.mf8X("onerror", {
                code: -200
            })
        }
        this.z3x("onuploading", 0);
        this.bBA9r = io7h.bbX2x(NEJ.X({
            onload: this.Uu9l.ew5B(this, eP5U),
            onerror: this.mf8X.f3x(this)
        }, this.xA3x, function(p3x) {
            return k3x.gE6y(p3x) || k3x.lG8y(p3x)
        }))
    };
    b3x.Uu9l = function(bN4R, eP5U) {
        var m3x = bN4R.result || {},
            li8a = m3x.bucket,
            mM8E = m3x.objectKey,
            cG4K = m3x.token;
        if (!li8a || !mM8E || !cG4K) {
            bN4R.code = -100;
            this.mf8X.call(this, bN4R);
            return
        }
        var oz9q = (this.hE6y.files || [{}])[0];
        var hK6E = a2x.dm5r(this.bH4L);
        hK6E[0].value = mM8E;
        hK6E[1].value = cG4K;
        hK6E[2].value = "json";
        if (oz9q.type && oz9q.type.indexOf("audio") == 0) {
            hK6E[3].value = "audio/mpeg"
        } else {
            hK6E[3].value = oz9q.type || ""
        }
        this.bH4L.action = "//nos.netease.com/" + li8a;
        this.Fc5h = m3x;
        this.ry0x = eP5U;
        this.z3x("onuploading", .2);
        this.hV6P()
    };
    b3x.hV6P = function() {
        this.bBA9r = v3x.hV6P(this.bH4L, {
            type: "json",
            onload: this.uW1x.f3x(this),
            onerror: this.mf8X.f3x(this),
            onuploading: this.bcf2x.f3x(this)
        })
    };
    b3x.kk7d = function() {
        v3x.kk7d(this.bBA9r);
        this.bH4L.reset()
    };
    b3x.uW1x = function(bN4R) {
        var cG4K = this.Fc5h,
            eP5U = this.ry0x,
            oz9q = (this.hE6y.files || [{}])[0],
            kA8s = {
                code: 200,
                fileName: eP5U,
                size: oz9q.size,
                bucket: cG4K.bucket,
                docId: cG4K.docId,
                objectKey: cG4K.objectKey,
                url: "//nos.netease.com/" + cG4K.bucket + "/" + cG4K.objectKey
            };
        if (!bN4R) {
            bN4R = kA8s
        }
        if (!bN4R.code || bN4R.code == 200) {
            this.z3x("onsuccess", NEJ.X(kA8s, bN4R))
        } else {
            this.z3x("onerror", bN4R)
        }
        this.bH4L.reset()
    };
    b3x.mf8X = function(bN4R) {
        this.z3x("onerror", bN4R);
        this.bH4L.reset()
    };
    b3x.bcf2x = function(iK7D) {
        this.z3x("onuploading", .2 + iK7D.loaded / iK7D.total * .8)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        cd4h = c3x("nej.ut"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        io7h = c3x("nm.x.nos"),
        E3x = c3x("nm.m"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        b3x, L3x;
    w3x.Ur9i = NEJ.C();
    b3x = w3x.Ur9i.N3x(cd4h.cJ4N);
    b3x.bm4q = function(e3x) {
        e3x = e3x || {};
        this.bn4r(e3x);
        this.bci2x = w3x.JD6x.A3x(NEJ.X({
            parent: e3x.parent,
            onchange: this.pL9C.f3x(this),
            onuploading: this.z3x.f3x(this, "onuploading"),
            onsuccess: this.z3x.f3x(this, "onsuccess"),
            onerror: this.z3x.f3x(this, "onerror")
        }, e3x, function(p3x) {
            return k3x.gE6y(p3x) || k3x.lG8y(p3x)
        }));
        if (e3x.multiple && io7h.bcc2x()) {
            a2x.gH6B(this.bci2x.bcd2x(), "multiple", true)
        }
        this.xA3x = e3x
    };
    b3x.pL9C = function(e3x) {
        var eP5U = e3x.filename,
            eA5F = (eP5U.split(".") || []).pop();
        this.bBY9P = (e3x.files || [{}])[0];
        this.z3x("onchange", e3x);
        if (io7h.bcc2x() && !e3x.stopped && !e3x.cancelUpload) {
            this.Uv9m(true);
            e3x.stopped = true
        }
    };
    b3x.bcd2x = function() {
        return this.bci2x.bcd2x()
    };
    b3x.cvH2x = function() {
        return this.bBY9P
    };
    b3x.Uv9m = function(fc5h, cT4X) {
        cT4X = cT4X || this.bBY9P;
        if (io7h.bcc2x()) {
            this.bCc9T = io7h.hV6P(NEJ.X({
                file: cT4X,
                local: this.xA3x.bucket && this.xA3x.bucket.length,
                onuploading: this.z3x.f3x(this, "onuploading"),
                onsuccess: this.z3x.f3x(this, "onsuccess"),
                onerror: this.z3x.f3x(this, "onerror")
            }, this.xA3x, function(p3x) {
                return k3x.gE6y(p3x) || k3x.lG8y(p3x)
            }));
            return this.bCc9T
        } else if (!fc5h) {
            this.bci2x.Uv9m()
        }
    };
    b3x.kk7d = function(C3x) {
        C3x = C3x || this.bCc9T;
        if (C3x) {
            io7h.kk7d(C3x)
        }
        this.bci2x.kk7d()
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        en5s = c3x("nej.g"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        fJ6D = c3x("nej.n"),
        I3x = c3x("nej.ut"),
        bc4g = c3x("nej.ui"),
        w3x = c3x("nm.w"),
        n3x = c3x("nm.l"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        M3x = c3x("nm.x.f"),
        io7h = c3x("nm.x.nos"),
        b3x, L3x, bos6m = {
            0: "",
            "-1": "不能添加重复图片",
            "-10": "最多只能添加9张",
            "-3": "请选择不超过5M的图片"
        },
        boA6u = 5 * 1024 * 1024,
        cGK5P = 80,
        bcl2x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    w3x.bCi9Z = NEJ.C();
    b3x = w3x.bCi9Z.N3x(I3x.um1x);
    b3x.bhy4C = function() {
        return {
            x: this.Cz4D.clientWidth - this.o3x.offsetWidth,
            y: this.Cz4D.clientHeight - this.o3x.offsetHeight
        }
    };
    w3x.boM6G = NEJ.C();
    b3x = w3x.boM6G.N3x(bc4g.ej5o);
    b3x.ch4l = function() {
        this.cf4j = "m-xwgt-share-upload"
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.bcq2x = i3x.shift();
        this.Jy6s = i3x.shift();
        this.SR9I = i3x.shift();
        this.bCn9e = {
            onchange: this.bCr9i.ew5B(this, 0),
            onerror: this.dO5T.f3x(this),
            onsuccess: this.rK0x.f3x(this),
            multiple: true,
            parent: this.Jy6s,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bpC6w = {
            onchange: this.bCr9i.ew5B(this, 1),
            onerror: this.dO5T.f3x(this),
            onsuccess: this.rK0x.f3x(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cvF2x = w3x.Ur9i.A3x(this.bCn9e)
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.bpC6w.parent = e3x.button;
        this.Jq6k && this.Jq6k.T3x();
        this.Jq6k = w3x.Ur9i.A3x(this.bpC6w);
        this.o3x.style.display = "none";
        if (!!this.eZ5e) {
            for (var i = this.eZ5e.length - 1; i >= 0; i--) {
                a2x.cM4Q(this.eZ5e[i].element, false);
                if (this.eZ5e[i].dragger) this.eZ5e[i].dragger.T3x()
            }
        }
        this.eZ5e = [];
        if (this.Bp4t) {
            clearTimeout(this.Bp4t)
        }
        this.bcE2x(0);
        this.Sz9q = 0;
        this.bX4b([
            [this.bCn9e.parent, "click", this.bCU9L.f3x(this)],
            [this.bpC6w.parent, "click", this.bCU9L.f3x(this)]
        ])
    };
    b3x.bC4G = function() {
        h3x.hj6d(this.sM0x, "click");
        if (!!this.eZ5e) {
            for (var i = this.eZ5e.length - 1; i >= 0; i--) {
                a2x.cM4Q(this.eZ5e[i].element, false);
                if (this.eZ5e[i].dragger) this.eZ5e[i].dragger.T3x()
            }
        }
        this.eZ5e = [];
        if (this.Bp4t) {
            clearTimeout(this.Bp4t)
        }
        this.Bp4t = 0;
        this.Jq6k && this.Jq6k.T3x();
        delete this.Jq6k;
        this.bG4K()
    };
    b3x.bCU9L = function(d3x) {
        if (!io7h.bcc2x() && this.eZ5e.doing) {
            h3x.bh4l(d3x)
        }
    };
    b3x.bCr9i = function(e3x, r3x) {
        var lv8n = e3x.files,
            hp6j;
        e3x.stopped = true;
        if (!lv8n) {
            if (e3x.filename) {
                lv8n = [{
                    name: e3x.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = lv8n.length; i < len; i++) {
            if (!bcl2x.test(lv8n[i].name)) {
                this.bpG6A({
                    path: lv8n[i].name,
                    index: r3x,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (lv8n[i].size > boA6u) {
                this.bpK6E(-3);
                this.bpG6A({
                    path: lv8n[i].name,
                    index: r3x,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bpG6A({
                    path: lv8n[i].name,
                    file: lv8n[i],
                    index: r3x,
                    status: 0
                })
            }
        }
    };
    b3x.bpG6A = function(tZ1x) {
        if (this.eZ5e.length >= 9) {
            this.bpK6E(-10, 3e3, this.bDf9W.f3x(this));
            return
        }
        this.cvE2x(tZ1x);
        this.eZ5e.push(tZ1x);
        if (!!this.eZ5e.length) {
            this.o3x.style.display = ""
        }
        if (this.eZ5e.length >= 9) {
            this.Jy6s.style.display = "none"
        } else {
            this.Jy6s.style.display = ""
        }
        this.Jn6h()
    };
    b3x.Jn6h = function() {
        var bpN6H = -1,
            bDl9c = 0;
        for (var i = 0, l = this.eZ5e.length; i < l; i++) {
            if (this.eZ5e[i].status == 1) {
                return
            }
            if (this.eZ5e[i].status == 0 && bpN6H < 0) {
                bpN6H = i
            }
            if (this.eZ5e[i].status == 2 || this.eZ5e[i].status < 0) {
                bDl9c++
            }
        }
        var p3x = this.eZ5e[bpN6H];
        if (p3x) {
            (p3x.index == 0 ? this.cvF2x : this.Jq6k).Uv9m(false, p3x.file);
            p3x.status = 1;
            this.eZ5e.doing = p3x;
            this.z3x("onstartupload", {})
        } else if (bDl9c == this.eZ5e.length) {
            this.z3x("onfinishupload", {})
        }
    };
    b3x.bpS6M = function() {
        return this.eZ5e.doing || {}
    };
    b3x.dO5T = function(d3x) {
        var tZ1x = this.bpS6M();
        tZ1x.status = -4;
        tZ1x.fail = "上传<br>失败";
        this.bDo9f(tZ1x);
        this.eZ5e.doing = null;
        this.Jn6h()
    };
    b3x.rK0x = function(d3x) {
        var tZ1x = this.bpS6M(),
            dQ5V = d3x.fileName.match(bcl2x);
        tZ1x.picUrl = d3x.url;
        v3x.bl4p("/upload/event/img/v1", {
            query: {
                imgid: d3x.docId,
                format: dQ5V[1]
            },
            type: "json",
            onload: this.bDq9h.f3x(this),
            onerror: this.bDq9h.f3x(this)
        })
    };
    b3x.bDq9h = function(d3x) {
        if (d3x && d3x.code == 200 && d3x.picInfo) {
            var tZ1x = this.bpS6M();
            tZ1x.status = 2;
            var bx4B = NEJ.X({}, d3x.picInfo);
            bx4B.originId = bx4B.originIdStr;
            bx4B.squareId = bx4B.squareIdStr;
            bx4B.rectangleId = bx4B.rectangleIdStr;
            bx4B.pcSquareId = bx4B.pcSquareIdStr;
            bx4B.pcRectangleId = bx4B.pcRectangleIdStr;
            bx4B.originJpgId = bx4B.originJpgIdStr || bx4B.originJpgId;
            tZ1x.picInfo = bx4B;
            this.bDo9f(tZ1x);
            this.eZ5e.doing = null;
            this.Jn6h()
        } else {
            this.dO5T(d3x)
        }
    };
    b3x.bpK6E = function(r3x, kX8P, eO5T) {
        if (this.Sz9q < r3x) {
            return
        }
        if (this.Bp4t) {
            clearTimeout(this.Bp4t);
            this.Bp4t = 0
        }
        if (kX8P) {
            this.SR9I.innerText = bos6m[r3x * 1];
            this.Sz9q = r3x;
            this.Bp4t = setTimeout(this.bcE2x.f3x(this, r3x, eO5T), kX8P)
        } else {
            this.SR9I.innerText = bos6m[r3x];
            this.Sz9q = r3x
        }
        this.SR9I.style.display = ""
    };
    b3x.bcE2x = function(r3x, eO5T) {
        if (r3x && this.Sz9q !== r3x) {
            return
        }
        this.Sz9q = 0;
        this.SR9I.innerText = bos6m[0];
        this.SR9I.style.display = "none";
        eO5T && eO5T()
    };
    b3x.cvE2x = function(cT4X) {
        var j3x = {};
        if (cT4X.fail) {
            j3x.fail = cT4X.fail
        }
        var dW5b = a2x.cc4g("m-xwgt-share-upload-preview", j3x);
        cT4X.element = a2x.os9j(dW5b);
        h3x.s3x(a2x.H3x(cT4X.element, "del")[0], "mousedown", this.cvD2x.f3x(this, cT4X), false);
        this.bcq2x.insertBefore(cT4X.element, this.bcq2x.lastElementChild);
        cT4X.dragger = w3x.bCi9Z.A3x({
            view: this.bcq2x.parentNode,
            body: cT4X.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.PW8O.f3x(this, cT4X),
            onchange: this.cvB2x.f3x(this, cT4X),
            ondragend: this.bhR4V.f3x(this, cT4X)
        })
    };
    b3x.bDo9f = function(cT4X) {
        if (!cT4X || !cT4X.element) {
            return false
        }
        var j3x = {};
        if (cT4X.fail) {
            j3x.fail = cT4X.fail
        } else {
            j3x.url = cT4X.picUrl
        }
        a2x.y3x(cT4X.element, "z-fail");
        cT4X.element.firstChild.outerHTML = a2x.cc4g("m-xwgt-share-upload-preview-img", j3x)
    };
    b3x.PW8O = function(p3x, kB8t) {
        a2x.y3x(p3x.element, "z-sel")
    };
    b3x.cvB2x = function(p3x, kB8t) {
        var cGL5Q, gq6k = this.eZ5e.length - 1,
            nU9L;
        for (var i = gq6k; i >= 0; i--) {
            a2x.x3x(this.eZ5e[i].element, "z-jump");
            if (this.eZ5e[i] == p3x) {
                nU9L = i
            } else {
                a2x.fa5f(this.eZ5e[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var RG9x = {
            x: 46 + 92 * (nU9L % 5) + kB8t.left,
            y: 46 + 92 * (nU9L / 5 >> 0) + kB8t.top
        };
        var bqe6Y = RG9x.x / 92 >> 0,
            bqk6e = RG9x.y / 92 >> 0,
            yS3x = Math.max(0, Math.min(gq6k, bqk6e * 5 + bqe6Y));
        if (yS3x == nU9L) {
            return
        }
        var cvy2x = yS3x < nU9L;
        for (var i = Math.min(yS3x, nU9L); i <= Math.max(yS3x, nU9L); i++) {
            if (i !== nU9L) {
                var bDH0x = i % 5;
                if (cvy2x) {
                    if (bDH0x == 4) {
                        a2x.fa5f(this.eZ5e[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a2x.fa5f(this.eZ5e[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bDH0x == 0) {
                        a2x.fa5f(this.eZ5e[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a2x.fa5f(this.eZ5e[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    };
    b3x.bhR4V = function(p3x, kB8t) {
        var cGM5R, gq6k = this.eZ5e.length - 1,
            nU9L;
        for (var i = gq6k; i >= 0; i--) {
            a2x.fa5f(this.eZ5e[i].element, {
                left: "",
                top: ""
            });
            if (this.eZ5e[i] == p3x) {
                nU9L = i
            }
        }
        a2x.x3x(p3x.element, "z-sel");
        var RG9x = {
            x: 46 + 92 * (nU9L % 5) + kB8t.left,
            y: 46 + 92 * (nU9L / 5 >> 0) + kB8t.top
        };
        var bqe6Y = RG9x.x / 92 >> 0,
            bqk6e = RG9x.y / 92 >> 0,
            yS3x = Math.max(0, Math.min(gq6k, bqk6e * 5 + bqe6Y));
        if (yS3x == nU9L) {
            return
        }
        this.bcq2x.insertBefore(p3x.element, (this.eZ5e[yS3x + (yS3x > nU9L ? 1 : 0)] || {}).element || this.Jy6s);
        this.eZ5e.splice(nU9L, 1);
        this.eZ5e.splice(yS3x, 0, p3x)
    };
    b3x.cvD2x = function(p3x, d3x) {
        a2x.cM4Q(p3x.element, false);
        if (p3x.dragger) p3x.dragger.T3x();
        delete p3x.dragger;
        var r3x = -1;
        for (var i = this.eZ5e.length - 1; i >= 0; i--) {
            if (this.eZ5e[i] == p3x) {
                r3x = i;
                break
            }
        }
        this.eZ5e.splice(r3x, r3x >= 0 ? 1 : 0);
        delete p3x;
        if (this.eZ5e.length >= 9) {
            this.Jy6s.style.display = "none"
        } else {
            this.Jy6s.style.display = ""
        }
        if (!this.eZ5e.length) {
            this.o3x.style.display = "none";
            this.bcE2x(0)
        } else {
            this.bDf9W()
        }
        if (this.eZ5e.doing == p3x) {
            this.eZ5e.doing = null
        }
        this.Jn6h()
    };
    b3x.bDf9W = function() {
        var bDL0x = false;
        for (var i = 0, len = this.eZ5e.length; i < len; i++) {
            if (this.eZ5e[i].status == -3) {
                bDL0x = true
            }
        }
        if (bDL0x) {
            this.bpK6E(-3)
        } else {
            this.bcE2x(-3)
        }
    };
    b3x.Rx9o = function() {
        var dC5H = [];
        for (var i = this.eZ5e.length - 1; i >= 0; i--) {
            if (this.eZ5e[i].status == 2) {
                dC5H.unshift(this.eZ5e[i].picInfo)
            }
        }
        return dC5H
    };
    I3x.fN6H.A3x({
        element: w3x.boM6G,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        bc4g = c3x("nej.ui"),
        O3x = c3x("nej.ut"),
        b3x, L3x;
    if (!!O3x.nx8p) return;
    O3x.nx8p = NEJ.C();
    b3x = O3x.nx8p.N3x(O3x.Zy1x);
    L3x = O3x.nx8p.cs4w;
    b3x.bm4q = function(e3x) {
        this.cvv2x(e3x.more);
        this.FO5T = a2x.B3x(e3x.sbody);
        this.cvt2x = e3x.fixScrollPosition;
        this.bX4b([
            [this.FO5T, "scroll", this.cvs2x.f3x(this)]
        ]);
        var dq5v = e3x.delta;
        if (dq5v == null) dq5v = 30;
        this.Rb8T = Math.max(0, dq5v);
        var cz4D = parseInt(e3x.count) || 0;
        this.jB7u = Math.max(0, cz4D);
        var gW6Q = parseInt(e3x.number) || 0;
        if (gW6Q > 1 && gW6Q <= cz4D) {
            this.Dh4l = gW6Q
        }
        this.bn4r(e3x)
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.BL4P;
        delete this.FO5T;
        delete this.tT1x;
        delete this.bdd3x
    };
    b3x.BW4a = function(bi4m, bq4u) {
        var bM4Q = this.yn3x + (this.jB7u - 1) * this.oN9E,
            gc6W = this.jB7u * this.oN9E;
        return L3x.BW4a.call(this, bM4Q, bi4m, gc6W, bq4u)
    };
    b3x.cvv2x = function(bde3x) {
        this.BL4P = a2x.B3x(bde3x);
        this.bX4b([
            [this.BL4P, "click", this.pq9h.f3x(this)]
        ])
    };
    b3x.bqS6M = function(F3x) {
        F3x = F3x || {};
        if (this.tT1x || !F3x) return;
        if (!F3x.scrollHeight) F3x = a2x.pn9e();
        var bi4m = a2x.hO6I(this.in7g, this.cvt2x ? F3x : null),
            dq5v = bi4m.y + this.in7g.offsetHeight - F3x.scrollTop - F3x.clientHeight,
            bqU6O = F3x.scrollHeight <= F3x.clientHeight;
        if (dq5v <= this.Rb8T || bqU6O && !this.tT1x) {
            this.pq9h()
        }
    };
    b3x.cvs2x = function(d3x) {
        if (this.tT1x) return;
        this.bqS6M(h3x.X3x(d3x))
    };
    b3x.BJ4N = function(d3x) {
        L3x.BJ4N.apply(this, arguments);
        if (!d3x.stopped) {
            this.Qi8a();
            var bi4m = 0;
            if (d3x.index > 1) {
                bi4m = this.yn3x + ((d3x.index - 1) * this.jB7u - 1) * this.oN9E
            }
            this.hW6Q = bi4m;
            this.pq9h()
        }
    };
    b3x.bQf3x = function(e3x) {
        if (!!this.Dh4l) {
            var dq5v = e3x.offset > 0 ? this.oN9E : this.yn3x,
                gc6W = dq5v + this.oN9E * (this.Dh4l - 1);
            this.hW6Q = e3x.offset + gc6W;
            e3x.data.limit = gc6W;
            e3x.limit = gc6W;
            delete this.Dh4l
        }
        return e3x
    };
    b3x.bhK4O = function(e3x) {
        delete this.bdd3x;
        L3x.bhK4O.apply(this, arguments);
        this.bEn0x()
    };
    b3x.bid4h = function(d3x) {
        if (d3x.key != this.jh7a.key) return;
        switch (d3x.action) {
            case "refresh":
            case "append":
                delete this.bdd3x;
                break
        }
        L3x.bid4h.apply(this, arguments)
    };
    b3x.PC8u = function() {
        this.zM3x("onbeforelistload", "列表加载中...");
        a2x.ba3x(this.BL4P, "display", "none")
    };
    b3x.bjd4h = function(i3x, bi4m, gc6W) {
        var bq4u = i3x.length,
            brd6X = i3x.loaded ? bi4m + gc6W >= bq4u : bi4m + gc6W > bq4u;
        this.hW6Q = Math.min(this.hW6Q, bq4u);
        a2x.ba3x(this.BL4P, "display", brd6X ? "none" : "");
        if (brd6X) this.tT1x = !0;
        if (this.jB7u > 0) {
            var bx4B = this.BW4a(bi4m, i3x.length);
            if (this.bQO4S(bx4B.index, bx4B.total)) return !0;
            var dq5v = this.yn3x - this.oN9E,
                gW6Q = this.jB7u * this.oN9E;
            this.tT1x = (bi4m + gc6W - dq5v) % gW6Q == 0 || brd6X;
            a2x.ba3x(this.BL4P, "display", this.tT1x ? "none" : "");
            this.bio4s(this.tT1x && bx4B.total > 1 ? "" : "none")
        }
    };
    b3x.biQ4U = function() {
        this.hW6Q = 0;
        this.tT1x = !0;
        this.zM3x("onemptylist", "没有列表数据！")
    };
    b3x.Pu8m = function(dW5b, kB8t) {
        this.in7g.insertAdjacentHTML(kB8t || "beforeEnd", dW5b)
    };
    b3x.Pt8l = function(hm6g) {
        this.fH6B = this.fH6B || [];
        if (k3x.eJ5O(hm6g)) {
            fu5z.push.apply(this.fH6B, hm6g)
        } else {
            this.fH6B.push(hm6g)
        }
    };
    b3x.ZY1x = function(d3x) {
        a2x.mR8J(this.cu4y);
        this.Pd8V(d3x, "onafteradd");
        var fc5h = d3x.flag;
        if (d3x.stopped || !fc5h) return;
        if (this.jB7u > 0) {
            this.bit4x();
            return
        }
        this.hW6Q += 1;
        fc5h == -1 ? this.bjW4a(d3x.data) : this.bRF5K(d3x.data)
    };
    b3x.bab1x = function(d3x) {
        this.Pd8V(d3x, "onafterdelete");
        if (d3x.stopped) return;
        if (this.jB7u > 0) {
            this.bit4x();
            return
        }
        var C3x = d3x.data[this.fg5l.pkey];
        if (!!this.fH6B) {
            var p3x = a2x.bCg9X(C3x),
                r3x = k3x.dl5q(this.fH6B, p3x);
            if (r3x >= 0) {
                this.fH6B.splice(r3x, 1);
                this.hW6Q -= 1
            }
            if (!!p3x) p3x.T3x()
        } else {
            var g3x = a2x.B3x(this.bOl2x(C3x));
            if (!!g3x) this.hW6Q -= 1;
            a2x.cM4Q(g3x)
        }
        if (this.hW6Q <= 0) this.pq9h()
    };
    b3x.bjQ4U = function(bi4m, gc6W) {
        if (bi4m != this.hW6Q) return;
        if (this.Yy1x()) {
            this.tT1x = !1;
            this.bEn0x()
        }
    };
    b3x.bjU4Y = function(bi4m, gc6W) {
        if (bi4m != 0) return;
        var Km6g = this.S3x.hF6z(this.jh7a.key);
        for (var i = gc6W - 1; i >= 0; i--) {
            this.bjW4a(Km6g[i])
        }
    };
    b3x.bEn0x = function() {
        var F3x = this.FO5T;
        if (!F3x || this.tT1x) return;
        this.bqS6M(this.FO5T)
    };
    b3x.gM6G = function() {
        delete this.tT1x;
        L3x.gM6G.apply(this, arguments)
    };
    b3x.pq9h = function() {
        if (!!this.bdd3x) return;
        this.bdd3x = !0;
        var bi4m = this.hW6Q;
        this.hW6Q += bi4m == 0 ? this.yn3x : this.oN9E;
        this.bQb3x(bi4m)
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        db5g = c3x("nej.x"),
        O3x = c3x("nej.ut"),
        b3x;
    if (!!O3x.Gb5g) return;
    O3x.Gb5g = NEJ.C();
    b3x = O3x.Gb5g.N3x(O3x.cJ4N);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.jk7d = e3x.event || "click";
        this.kT8L = e3x.selected || "js-selected";
        this.nT9K = e3x.disabled || "js-disabled";
        this.bEq0x = !!e3x.inverse;
        this.cvp2x(e3x.list);
        this.Qo8g(e3x.index || 0)
    };
    b3x.bC4G = function() {
        var cvo2x = function(g3x) {
            this.brV6P(g3x, !1)
        };
        return function() {
            this.bG4K();
            k3x.bd4h(this.bU4Y, cvo2x, this);
            delete this.bU4Y;
            delete this.jk7d;
            delete this.cq4u;
            delete this.nT9K;
            delete this.kT8L;
            delete this.bEq0x
        }
    }();
    b3x.cvp2x = function() {
        var bfL3x = function(p3x) {
            if (!p3x) return;
            this.bU4Y.push(p3x);
            var r3x = this.bU4Y.length - 1,
                dv5A = this.bsh7a[r3x];
            if (!dv5A) {
                dv5A = this.Qo8g.f3x(this, r3x);
                this.bsh7a[r3x] = dv5A
            }
            this.bX4b([
                [p3x, this.jk7d, dv5A]
            ])
        };
        return function(i3x) {
            this.bU4Y = [];
            if (!this.bsh7a) this.bsh7a = [];
            k3x.bd4h(i3x, bfL3x, this)
        }
    }();
    b3x.brV6P = function(F3x, cvn2x) {
        !!cvn2x && !this.bEq0x ? a2x.y3x(F3x, this.kT8L) : a2x.x3x(F3x, this.kT8L)
    };
    b3x.Qo8g = function(r3x, PE8w, j3x) {
        var F3x = this.bU4Y[r3x];
        if (PE8w != !0 && (r3x == this.cq4u || !F3x || a2x.bE4I(F3x, this.nT9K))) {
            h3x.cn4r(arguments[1]);
            return this
        }
        var d3x = {
            index: r3x,
            last: this.cq4u,
            list: this.lw8o(),
            data: j3x || a2x.t3x(F3x, "value")
        };
        this.cq4u = r3x;
        F3x = this.bU4Y[d3x.last];
        if (!!F3x) this.brV6P(F3x, !1);
        F3x = this.bU4Y[this.cq4u];
        this.brV6P(F3x, !0);
        this.z3x("onchange", d3x);
        if (!d3x.nostop) h3x.cn4r(arguments[1]);
        return this
    };
    b3x.tj0x = function() {
        return this.cq4u
    };
    b3x.lw8o = function() {
        return this.bU4Y
    };
    a2x.cvm2x = db5g.cvm2x = function(bI4M, e3x) {
        var C3x = a2x.lQ8I(bI4M);
        if (!C3x) return null;
        if (!O3x.bcx2x(C3x, O3x.Gb5g)) {
            e3x = e3x || {};
            e3x.list = !e3x.clazz ? a2x.dm5r(C3x) : a2x.H3x(C3x, e3x.clazz);
            delete e3x.clazz
        }
        return O3x.bcx2x(C3x, O3x.Gb5g, e3x || bb3x)
    };
    db5g.isChange = !0
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        l3x = c3x("nm.x");
    var SETTING_KEY = "player-setting";
    var nB8t = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    nB8t = v3x.tR1x(SETTING_KEY) || nB8t;
    l3x.bsT7M = function() {
        return nB8t
    };
    l3x.Gk5p = function(Gl5q) {
        if (Gl5q) {
            nB8t = Gl5q;
            v3x.vv2x(SETTING_KEY, Gl5q)
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        l3x = c3x("nm.x"),
        q3x = c3x("nm.d"),
        hf6Z = c3x("nm.w.player.log");
    var kO8G = q3x.hP6J.A3x();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var hd6X = function(u3x, bF4J, qx9o) {
        var cK4O = l3x.fr5w("{0} {1} {2}", k3x.ia6U(new Date, "yyyy-MM-dd HH:mm:ss"), u3x, bF4J);
        if (qx9o == LogLevel.ERROR) {
            kO8G.eS5X("playerror", {
                message: bF4J
            })
        }
        if (qx9o >= LogLevel.INFO) {
            kO8G.bDP0x(cK4O)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cK4O)
        }
    };
    hf6Z.cb4f = function() {
        hd6X("PLAY_ERROR", l3x.fr5w.apply(null, arguments), LogLevel.ERROR)
    };
    hf6Z.pM9D = function() {
        hd6X("PLAY_INFO", l3x.fr5w.apply(null, arguments), LogLevel.INFO)
    };
    hf6Z.cGN5S = function() {
        hd6X("PLAY_DEBUG", l3x.fr5w.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        k3x = c3x("nej.u"),
        w3x = c3x("nm.w"),
        eO5T = c3x("flash.cb");
    var eg5l = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Gq5v, bdV3x, uG1x;
    w3x.cvi2x = function(u3x, cA4E) {
        if (u3x != "flash") {
            if (!Gq5v) {
                Gq5v = a2x.di5n("audio");
                k3x.bd4h(eg5l, function(u3x) {
                    h3x.s3x(Gq5v, u3x, onMediaCallBack)
                })
            }
            if (Gq5v && Gq5v.canPlayType && Gq5v.canPlayType("audio/mpeg")) {
                cA4E(new MediaWrap("audio"));
                return
            }
        }
        if (!bdV3x) {
            a2x.sf0x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hQ6K) {
                    bdV3x = hQ6K;
                    k3x.bd4h(eg5l, function(u3x) {
                        eO5T[u3x] = onMediaCallBack;
                        bdV3x.addCallback(u3x, "flash.cb." + u3x)
                    });
                    cA4E(new MediaWrap("flash"))
                }.f3x(this)
            })
        } else {
            cA4E(new MediaWrap("flash"))
        }
    };

    function MediaWrap(Gu5z) {
        var gR6L;
        I3x.fN6H.A3x({
            element: this,
            event: eg5l.concat(["interrupt", "recover"])
        });
        gR6L = Gu5z == "audio" ? Gq5v : bdV3x;
        this.type = Gu5z;
        this.destroy = function() {};
        this.setSrc = function(Y3x) {
            if (uG1x != this) {
                var gq6k = uG1x;
                if (gq6k) {
                    gq6k.interrupt()
                }
                uG1x = this
            }
            if (Gu5z == "flash") {
                gR6L.setSrc(Y3x)
            } else {
                gR6L.src = Y3x
            }
        };
        this.play = function() {
            if (uG1x != this) {
                var gq6k = uG1x;
                if (gq6k) {
                    gq6k.interrupt();
                    uG1x = this;
                    this.recover()
                } else {
                    uG1x = this
                }
            }
            if (Gu5z == "flash") {
                gR6L.as_play()
            } else {
                gR6L.play()
            }
        };
        this.pause = function() {
            if (uG1x != this) return;
            if (Gu5z == "flash") {
                gR6L.as_pause()
            } else {
                gR6L.pause()
            }
        };
        this.load = function() {
            if (uG1x != this) return;
            if (Gu5z == "flash") {
                gR6L.as_load()
            } else {
                gR6L.load()
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
            return gR6L
        };
        var oA9r = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k3x.bd4h(oA9r, function(W3x) {
            var OC8u = "get" + W3x,
                Oz8r = "set" + W3x;
            if (Gu5z == "flash") {
                if (!this[OC8u]) {
                    this[OC8u] = function() {
                        return gR6L[OC8u]()
                    }
                }
                if (!this[Oz8r]) {
                    this[Oz8r] = function(value) {
                        gR6L[Oz8r](value)
                    }
                }
            } else {
                var bFe0x = W3x.slice(0, 1).toLowerCase() + W3x.slice(1);
                if (!this[OC8u]) {
                    this[OC8u] = function() {
                        return gR6L[bFe0x]
                    }
                }
                if (!this[Oz8r]) {
                    this[Oz8r] = function(value) {
                        gR6L[bFe0x] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d3x) {
        if (uG1x) {
            h3x.z3x(uG1x, d3x.type, d3x)
        }
    }
})();
(function() {
    var c3x = NEJ.P,
        h3x = c3x("nej.v"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        dx5C = c3x("nej.p"),
        w3x = c3x("nm.w"),
        l3x = c3x("nm.x"),
        hf6Z = c3x("nm.w.player.log"),
        b3x;
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
    var bFf0x = false;
    w3x.fX6R = NEJ.C();
    b3x = w3x.fX6R.N3x(I3x.cJ4N);
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.cP4T = {};
        this.bdW3x(e3x.media);
        v3x.bl4p("/api/cdns", {
            type: "json",
            onload: function(d3x) {
                if (d3x.code) {
                    this.rp0x = d3x.data
                }
            }.f3x(this)
        })
    };
    b3x.bC4G = function() {
        this.bG4K();
        delete this.cP4T
    };
    b3x.bdX3x = function(bj4n) {
        if (!bj4n) return;
        var wP2x = this.cP4T.volume;
        if (this.dU5Z) {
            this.dU5Z.pause()
        }
        this.cP4T = {
            time: 0,
            id: bj4n.id,
            duration: bj4n.duration / 1e3,
            play: this.cP4T.play,
            stalledRetryCount: 0
        };
        if (wP2x != null) {
            this.cP4T.volume = wP2x
        }
        this.cP4T.loadState = LoadState.LOAD_START;
        this.bFx0x(bj4n.id);
        hf6Z.pM9D("play song id: {0}", bj4n.id)
    };
    b3x.ep5u = function() {
        if (this.cP4T.error) {
            this.cP4T.error = null;
            if (this.cP4T.error == ErrorType.INFO_GET_ERR || this.bFy0x()) {
                this.bFz0x()
            } else {
                this.Ol8d()
            }
        } else {
            if (this.dU5Z) {
                this.dU5Z.play()
            }
        }
        this.cP4T.play = true;
        this.pu9l("play")
    };
    b3x.fG6A = function() {
        if (this.dU5Z) {
            this.dU5Z.pause()
        }
        this.cP4T.play = false;
        this.pu9l("pause")
    };
    b3x.oQ9H = function(bA4E) {
        if (this.dU5Z) {
            this.dU5Z.setCurrentTime(bA4E)
        }
        this.cP4T.time = bA4E;
        hf6Z.pM9D("seek to: {0}", bA4E)
    };
    b3x.btz7s = function() {
        return this.cP4T.duration || 0
    };
    b3x.uD1x = function() {
        return !!this.cP4T.play
    };
    b3x.my8q = function(Oj8b) {
        this.cP4T.volume = Oj8b;
        if (this.dU5Z) {
            this.dU5Z.setVolume(Oj8b)
        }
    };
    b3x.bdY3x = function() {
        return this.cP4T.time
    };
    b3x.bdW3x = function(u3x) {
        w3x.cvi2x(u3x, function(gR6L) {
            this.dU5Z = gR6L;
            hf6Z.pM9D("media loaded: {0}", gR6L.type);
            this.bX4b([
                [this.dU5Z, "loadedmetadata", this.cvh2x.f3x(this)],
                [this.dU5Z, "ended", this.cvg2x.f3x(this)],
                [this.dU5Z, "waiting", this.zJ3x.f3x(this)],
                [this.dU5Z, "play", this.uC1x.f3x(this)],
                [this.dU5Z, "pause", this.buI7B.f3x(this)],
                [this.dU5Z, "playing", this.Ni7b.f3x(this)],
                [this.dU5Z, "timeupdate", this.cve2x.f3x(this)],
                [this.dU5Z, "progress", this.rr0x.f3x(this)],
                [this.dU5Z, "stalled", this.buL7E.f3x(this)],
                [this.dU5Z, "interrupt", this.fG6A.f3x(this)],
                [this.dU5Z, "recover", this.cvd2x.f3x(this)],
                [this.dU5Z, "error", this.dO5T.f3x(this)]
            ]);
            if (this.cP4T) {
                if (this.cP4T.loadState == LoadState.LOAD_START || this.cP4T.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bvg7Z();
                    if (this.cP4T.volume != null) {
                        this.dU5Z.setVolume(this.cP4T.volume)
                    }
                }
            }
        }.f3x(this))
    };
    b3x.cvb2x = function(u3x) {
        this.Js6m();
        this.dU5Z.destroy();
        this.cP4T.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zJ3x();
        this.bdW3x(u3x);
        hf6Z.pM9D("switch media")
    };
    b3x.cGO5T = function() {
        return this.dU5Z
    };
    b3x.bFx0x = function() {
        this.zJ3x();
        v3x.bl4p("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cP4T.id]),
                br: DEFAULT_BR
            },
            onload: this.bGl0x.f3x(this),
            onerror: this.bGl0x.f3x(this)
        })
    };
    b3x.bGl0x = function(d3x) {
        if (d3x.code == 200 && d3x.data && d3x.data.length) {
            var bx4B = d3x.data[0];
            if (!bx4B.url) {
                this.cP4T.error = ErrorType.INFO_GET_ERR;
                this.pu9l("error", {
                    code: this.cP4T.error
                });
                return
            }
            this.cP4T.playUrl = bx4B.url;
            this.cP4T.expireTime = (new Date).getTime() + bx4B.expi * 1e3;
            this.bvg7Z()
        } else {
            this.cP4T.error = ErrorType.INFO_GET_ERR;
            this.pu9l("error", {
                code: this.cP4T.error
            });
            hf6Z.cb4f("info load error")
        }
    };
    b3x.bvg7Z = function() {
        if (this.dU5Z) {
            var Y3x = this.cP4T.playUrl;
            if (this.cP4T.time > 0 && (this.cP4T.loadState == LoadState.IN_RE_GET_URL || this.cP4T.loadState == LoadState.IN_RE_GET_URL)) {
                Y3x += "#t=" + this.cP4T.time
            }
            this.dU5Z.setSrc(Y3x);
            hf6Z.pM9D("load mp3: {0},loadState: {1}.", Y3x, this.cP4T.loadState)
        }
    };
    b3x.bGm0x = function() {
        if (/#t=(\d+)$/.test(this.dU5Z.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b3x.Ol8d = function() {
        var bA4E = parseInt(this.cP4T.time) || 0,
            cuZ2x = this.bGm0x();
        if (bA4E === cuZ2x) {
            this.dU5Z.load()
        } else {
            this.dU5Z.setSrc(this.cP4T.playUrl + "#t=" + bA4E)
        }
        this.cP4T.loadState = LoadState.IN_RELOAD;
        this.zJ3x();
        hf6Z.pM9D("reload from: {0}", bA4E)
    };
    b3x.bFz0x = function() {
        this.cP4T.loadState = LoadState.IN_RE_GET_URL;
        this.bFx0x()
    };
    b3x.bGo0x = function() {
        var pP9G = getHost(this.cP4T.playUrl);
        if (pP9G) {
            for (var i = 0; i < this.rp0x.length; i++) {
                var ip7i = this.rp0x[i] || [],
                    r3x = ip7i.indexOf(pP9G);
                if (r3x >= 0 && ip7i.length > 1) {
                    return ip7i[(r3x + 1) % ip7i.length]
                }
            }
        }

        function getHost(Y3x) {
            if (CDN_HOST_REG.test(Y3x)) return RegExp.$1
        }
    };
    b3x.cuY2x = function() {
        this.cP4T.playUrl = this.cP4T.playUrl.replace(CDN_HOST_REG, this.bGo0x());
        this.cP4T.loadState = LoadState.IN_SWITCH_CDN;
        this.bvg7Z();
        this.zJ3x()
    };
    b3x.cvh2x = function() {
        if (this.cP4T.loadState == LoadState.LOAD_START) {
            this.cP4T.loadState = LoadState.LOADED_META;
            if (this.dU5Z.type == "audio") {
                this.cP4T.duration = this.dU5Z.getDuration()
            }
            this.pu9l("loadedmeta", {
                duration: this.cP4T.duration
            })
        } else {
            this.cP4T.loadState = LoadState.LOADED_META
        }
        if (this.cP4T.play) {
            this.dU5Z.play()
        } else {
            this.dU5Z.pause()
        }
        if (this.cP4T.time && parseInt(this.cP4T.time) != this.bGm0x()) {
            this.dU5Z.setCurrentTime(this.cP4T.time)
        }
        this.IA6u();
        this.Ni7b();
        bFf0x = true;
        hf6Z.pM9D("loaded meta")
    };
    b3x.cvg2x = function() {
        this.cP4T.ended = true;
        this.pu9l("ended")
    };
    b3x.zJ3x = function() {
        if (!this.cP4T.waiting) {
            this.cP4T.waiting = true;
            this.cP4T.waitTimestamp = +(new Date);
            this.pu9l("waiting")
        }
    };
    b3x.Ni7b = function() {
        this.cP4T.waiting = false;
        this.cP4T.waitTimestamp = 0;
        this.pu9l("playing")
    };
    b3x.uC1x = function() {
        this.pu9l("play")
    };
    b3x.buI7B = function() {
        this.pu9l("pause")
    };
    b3x.cve2x = function() {
        if (this.cP4T.loadState != LoadState.LOADED_META) return;
        var bA4E = this.dU5Z.getCurrentTime();
        if (this.cP4T.waiting && bA4E > this.cP4T.time) {
            this.Ni7b()
        }
        this.cP4T.time = bA4E;
        this.pu9l("timeupdate", {
            time: this.cP4T.time,
            duration: this.cP4T.duration
        })
    };
    b3x.rr0x = function(d3x) {
        if (this.cP4T.loadState != LoadState.LOADED_META) return;
        var m3x = {};
        if (d3x.data) {
            m3x.total = d3x.data.total;
            m3x.loaded = d3x.data.loaded
        } else {
            var zh3x = this.dU5Z.getBuffered(),
                bA4E = this.dU5Z.getCurrentTime(),
                oV9M = 0;
            for (var i = 0; i < zh3x.length; i++) {
                if (bA4E > zh3x.start(i) && bA4E < zh3x.end(i)) {
                    oV9M = zh3x.end(i);
                    break
                }
            }
            m3x.total = this.cP4T.duration;
            m3x.loaded = Math.min(oV9M, m3x.total)
        }
        this.pu9l("progress", m3x)
    };
    b3x.IA6u = function() {
        if (this.cP4T.retry) {
            clearTimeout(this.cP4T.retry.tid);
            this.cP4T.retry = null
        }
    };
    b3x.dO5T = function() {
        var ca4e = this.dU5Z.getError();
        hf6Z.cb4f("media error code: {0}, netState: {1}", ca4e.code, this.dU5Z.getNetworkState());
        if (ca4e.code == MediaError.MEDIA_ERR_NETWORK || ca4e.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Gl5q = l3x.bsT7M();
            if (!this.cP4T.retry) {
                this.cP4T.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cP4T.retry.tid)
            }
            if (this.cP4T.retry.level == RetryLevel.NONE) {
                if (this.bFy0x()) {
                    this.cP4T.retry.level = RetryLevel.GET_URL;
                    this.bFz0x();
                    hf6Z.pM9D("Url expired, get url.")
                } else {
                    this.cP4T.retry.level = RetryLevel.RELOAD;
                    this.cP4T.retry.tid = setTimeout(this.Ol8d.f3x(this), 3e3);
                    hf6Z.pM9D("Reload mp3 3s later.")
                }
            } else if (this.cP4T.retry.level == RetryLevel.GET_URL) {
                this.cP4T.retry.level = RetryLevel.RELOAD;
                this.cP4T.retry.tid = setTimeout(this.Ol8d.f3x(this), 3e3);
                hf6Z.pM9D("Reload mp3 3s later.")
            } else if (this.cP4T.retry.level == RetryLevel.RELOAD) {
                this.cP4T.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bGo0x()) {
                    this.cP4T.retry.tid = setTimeout(this.cuY2x.f3x(this), 5e3);
                    hf6Z.pM9D("Switch CDN 5s later.")
                } else {
                    this.cP4T.retry.tid = setTimeout(this.Ol8d.f3x(this), 5e3);
                    hf6Z.pM9D("Reload mp3 5s later.")
                }
            } else if (!bFf0x && this.dU5Z.type == "audio" && !Gl5q.useFlash && !dx5C.Il6f.mac && l3x.bqp6j().supported) {
                Gl5q.useFlash = true;
                l3x.Gk5p(Gl5q);
                this.cvb2x("flash")
            } else {
                this.IA6u();
                this.fG6A();
                this.cP4T.error = ErrorType.NET_ERR;
                this.pu9l("error", {
                    code: this.cP4T.error
                });
                hf6Z.cb4f("error can not retry.")
            }
        } else {
            this.IA6u();
            this.fG6A();
            this.cP4T.error = ErrorType.UNKNOWN_ERR;
            this.pu9l("error", {
                code: this.cP4T.error
            });
            hf6Z.cb4f("error can not retry.")
        }
    };
    b3x.buL7E = function() {
        var hR6L = 0,
            bGs0x = 5e3;
        return function() {
            this.zJ3x();
            clearTimeout(hR6L);
            setTimeout(function() {
                var eT5Y = +(new Date);
                if (this.cP4T.waiting && eT5Y - this.cP4T.waitTimestamp >= bGs0x && this.cP4T.stalledRetryCount < MAX_STALLED_RETRY) {
                    hf6Z.pM9D("stalled too long retry.");
                    this.cP4T.stalledRetryCount++;
                    this.Ol8d()
                }
            }.f3x(this), bGs0x);
            hf6Z.pM9D("stalled")
        }
    }();
    b3x.bFy0x = function() {
        var eT5Y = +(new Date);
        return eT5Y > this.cP4T.expireTime
    };
    b3x.cvd2x = function() {
        var bA4E = parseInt(this.cP4T.time) || 0;
        this.dU5Z.setSrc(this.cP4T.playUrl + "#t=" + bA4E);
        this.cP4T.loadState = LoadState.IN_RELOAD;
        this.zJ3x();
        hf6Z.pM9D("recover from: {0}", bA4E)
    };
    b3x.pu9l = function(V3x, j3x) {
        h3x.z3x(w3x.fX6R, "playaction", {
            action: V3x,
            data: j3x || {}
        })
    };
    I3x.fN6H.A3x({
        element: w3x.fX6R,
        event: ["playaction"]
    })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c3x = NEJ.P,
        h3x = c3x("nej.v"),
        I3x = c3x("nej.ut"),
        w3x = c3x("nm.w"),
        b3x;
    w3x.Hf5k = NEJ.C();
    b3x = w3x.Hf5k.N3x(w3x.fX6R);
    L3x = w3x.Hf5k.cs4w;
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.cuX2x = function(bO4S) {
        this.bdX3x(bO4S);
        this.ep5u()
    };
    b3x.bvR8J = function() {
        this.fG6A()
    };
    b3x.xw3x = function(d3x) {
        if (d3x.action == "play") {
            this.fG6A()
        }
    };
    b3x.pu9l = function(V3x, j3x) {
        h3x.z3x(w3x.Hf5k, "tmpplayaction", {
            action: V3x,
            data: j3x || {},
            tmp: true
        })
    };
    b3x.to0x = function() {
        return this.cP4T
    };
    I3x.fN6H.A3x({
        element: w3x.Hf5k,
        event: ["tmpplayaction"]
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        fJ6D = c3x("nej.n"),
        v3x = c3x("nej.j"),
        I3x = c3x("nej.ut"),
        bc4g = c3x("nej.ui"),
        w3x = c3x("nm.w"),
        n3x = c3x("nm.l"),
        kN8F = c3x("nm.c"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x, beO3x = [{
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
    var bwg8Y = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    w3x.bwk8c = NEJ.C();
    b3x = w3x.bwk8c.N3x(bc4g.ej5o);
    b3x.cw4A = function(e3x) {
        this.cF4J(e3x);
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.cGP5U = i3x.shift();
        this.cuU2x = i3x.shift();
        this.Iv6p = i3x.shift();
        this.bwp8h = i3x.shift();
        this.bws8k = [i3x.shift(), i3x.shift(), i3x.shift(), i3x.shift(), i3x.shift(), i3x.shift()];
        this.beS3x = i3x.shift();
        this.bHd1x = i3x.shift();
        this.rD0x = {
            list: this.bws8k,
            selected: "z-curr",
            onchange: this.bHh1x.f3x(this)
        };
        h3x.s3x(this.Iv6p, "input", this.beV3x.f3x(this));
        h3x.s3x(this.Iv6p, "propertychange", this.beV3x.f3x(this));
        h3x.s3x(this.Iv6p, "keyup", this.beV3x.f3x(this));
        h3x.s3x(this.cuU2x, "click", this.beV3x.f3x(this));
        h3x.s3x(this.beS3x, "click", this.cL4P.f3x(this));
        h3x.s3x(this.bHd1x, "click", function() {
            this.z3x("oncancel", {})
        }.f3x(this));
        this.S3x = q3x.FR5W.gk6e();
        this.PF8x = top.nm.w.Hf5k.gk6e();
        I3x.fN6H.A3x({
            element: top.nm.w.Hf5k,
            event: ["tmpplayaction"]
        });
        this.sp0x = {
            limit: 100,
            offset: 0,
            parent: this.beS3x,
            onbeforelistload: this.qM0x.f3x(this)
        };
        q3x.sk = "fuck" + a2x.t3x(this.bwp8h, "xname") + "458";
        h3x.s3x(top.nm.w.Hf5k, "tmpplayaction", this.xw3x.f3x(this))
    };
    b3x.ch4l = function() {
        this.cf4j = "m-xwgt-publish-search"
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        if (!!this.CZ4d) {
            this.CZ4d.T3x();
            delete this.CZ4d
        }
        this.rD0x.index = bwg8Y[e3x.type || "song"];
        this.CZ4d = I3x.Gb5g.A3x(this.rD0x);
        this.Iv6p.value = "";
        this.Iv6p.focus();
        this.uv1x = "";
        this.cGQ5V = 0;
        if (e3x.showMV == true) {
            this.bws8k[bwg8Y["mv"]].parentNode.style.display = "";
            a2x.y3x(this.bwp8h, "srchtab-1")
        } else {
            this.bws8k[bwg8Y["mv"]].parentNode.style.display = "none";
            a2x.x3x(this.bwp8h, "srchtab-1")
        }
        if (!!this.dJ5O) {
            this.dJ5O = this.dJ5O.T3x()
        }
        if (e3x.hideBack) {
            a2x.y3x(this.bHd1x.parentNode, "f-hide")
        }
    };
    b3x.bC4G = function() {
        this.PF8x.bvR8J();
        this.bG4K()
    };
    b3x.beV3x = function() {
        var value = this.Iv6p.value.trim();
        if (value && value.length) {
            if (value != this.uv1x) {
                this.uv1x = value;
                this.bHh1x({
                    index: this.CZ4d.tj0x()
                })
            }
        } else {
            if (this.dJ5O) {
                this.dJ5O = this.dJ5O.T3x()
            }
        }
        this.uv1x = value
    };
    b3x.cL4P = function() {
        var cuS2x = function(F3x) {
                return a2x.bE4I(F3x, "sitm") || a2x.bE4I(F3x, "itm") || a2x.bE4I(F3x, "mv-item")
            },
            cuR2x = function(F3x) {
                return a2x.bE4I(F3x, "ply")
            },
            bHx1x = function() {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            },
            cuQ2x = function() {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            },
            bwW8O = function(bj4n) {
                if (bj4n && bj4n.privilege && bj4n.privilege.toast) {
                    v3x.bl4p("/api/song/toast", {
                        query: {
                            id: bj4n.id
                        },
                        type: "json",
                        onload: SN9E.f3x(this),
                        onerror: SN9E.f3x(this)
                    })
                } else {
                    SM9D()
                }
            },
            SN9E = function(Q3x) {
                SM9D((Q3x || bb3x).toast)
            },
            SM9D = function(bF4J) {
                n3x.Z3x.J3x({
                    type: 2,
                    tip: bF4J || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function(d3x) {
            var HA6u = h3x.X3x(d3x, cuR2x),
                i3x = h3x.X3x(d3x, cuS2x),
                ey5D = this.PF8x.to0x();
            if (!!i3x) {
                h3x.bh4l(d3x);
                this.OG8y = a2x.t3x(i3x, "id");
                this.Os8k = a2x.t3x(i3x, "type");
                if (this.Os8k == 18) {
                    var bO4S = this.S3x.eL5Q(this.OG8y),
                        qx9o = l3x.pX9O(bO4S);
                    if (!HA6u) {
                        if (qx9o == 10) {
                            bHx1x();
                            return
                        } else if (qx9o == 100) {
                            bwW8O(bO4S);
                            return
                        }
                    } else {
                        if (qx9o == 10) {
                            bHx1x();
                            return
                        } else if (qx9o == 100) {
                            bwW8O(bO4S);
                            return
                        } else if (qx9o == 11) {
                            cuQ2x();
                            return
                        } else {
                            a2x.x3x(this.De4i, "z-pause z-loading");
                            if (HA6u == this.De4i && ey5D.play && !ey5D.ended) {
                                this.PF8x.bvR8J()
                            } else {
                                this.De4i = HA6u;
                                this.PF8x.cuX2x(bO4S)
                            }
                            return
                        }
                    }
                } else if (this.Os8k == 70) {
                    if (a2x.bE4I(i3x, "z-noprogram")) {
                        n3x.Z3x.J3x({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cuN2x()
            }
        }
    }();
    b3x.cuN2x = function() {
        var ih7a = this.S3x.eL5Q(this.OG8y),
            tB0x = l3x.bLy2x(this.Os8k, ih7a);
        tB0x.title = tB0x.title || "";
        tB0x.author = tB0x.author || "";
        tB0x.picUrl = tB0x.picUrl || "";
        tB0x.authors = tB0x.authors || "";
        if (this.Os8k == 70) {
            this.OG8y = this.OG8y.slice(0, -4)
        }
        this.z3x("onfinish", {
            id: this.OG8y,
            type: this.Os8k,
            data: tB0x
        })
    };
    b3x.xw3x = function(d3x) {
        var j3x = d3x.data;
        if (!this.De4i) {
            return
        }
        switch (d3x.action) {
            case "play":
                a2x.fk5p(this.De4i, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a2x.x3x(this.De4i, "z-pause z-loading");
                break;
            case "error":
                n3x.Z3x.J3x({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                a2x.x3x(this.De4i, "z-pause z-loading");
                break;
            case "playing":
                a2x.fk5p(this.De4i, "z-loading", "z-pause");
                break;
            case "waiting":
                a2x.fk5p(this.De4i, "z-pause", "z-loading");
                break
        }
    };
    b3x.cuL2x = function(d3x) {
        if (d3x.result.code == 407) {
            this.beS3x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.beS3x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b3x.bHh1x = function(d3x) {
        if (!this.uv1x || d3x.index < 0 || d3x.index > 5) {
            return
        }
        this.PF8x.bvR8J();
        var bg4k = beO3x[d3x.index],
            e3x = NEJ.X({}, this.sp0x);
        e3x.cache = {
            klass: q3x.FR5W,
            clear: true,
            onerror: this.cuL2x.f3x(this)
        };
        e3x.cache.lkey = "search-publish-" + bg4k.type + "-" + this.uv1x;
        e3x.item = {
            klass: bg4k.item,
            getRestrictLevel: l3x.pX9O,
            dur2time: l3x.lq8i
        };
        if (!e3x.cache.data) {
            e3x.cache.data = {}
        }
        e3x.cache.data.s = this.uv1x;
        e3x.cache.data.type = bg4k.type;
        e3x.cache.data.isPub = true;
        if (bg4k.type == 1) {
            e3x.cache.data.hlpretag = '<span class="s-fc7">';
            e3x.cache.data.hlposttag = "</span>"
        }
        e3x.onemptylist = this.cuK2x.f3x(this, this.uv1x);
        if (!!this.HH6B) this.S3x.uI1x(this.HH6B);
        if (!!this.dJ5O) {
            this.dJ5O = this.dJ5O.T3x()
        }
        this.dJ5O = I3x.nx8p.A3x(e3x);
        this.HH6B = e3x.cache.lkey
    };
    b3x.qM0x = function(d3x) {
        d3x.value = a2x.iN7G("m-publish-search-loading")
    };
    b3x.cuK2x = function(K3x, d3x) {
        a2x.dA5F(d3x.parent, "m-publish-emtpy-message", {
            key: K3x
        });
        d3x.stopped = true
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        dx5C = c3x("nej.p"),
        v3x = c3x("nej.j"),
        cd4h = c3x("nej.ut"),
        bD4H = c3x("nej.ui"),
        w3x = c3x("nm.w"),
        b3x, L3x;
    var cuI2x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    w3x.HI6C = NEJ.C();
    b3x = w3x.HI6C.N3x(bD4H.ej5o);
    var gi6c = a2x.eC5H("m-wgt-receiverInput");
    var cuw2x = a2x.eC5H("m-wgt-receiverList");
    var jd7W = a2x.ty0x(cuI2x);
    var cut2x = a2x.eC5H('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b3x.cw4A = function(e3x) {
        this.bk4o = [];
        this.ww2x = e3x.receiver || null;
        this.cur2x = e3x.unique || false;
        this.nc8U = e3x.err;
        this.bIZ1x(this.bJa1x, e3x.uid);
        this.cF4J(e3x)
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.Tq9h();
        this.SU9L();
        this.bfl3x();
        if (e3x.receiver) this.bxG8y(e3x.receiver.nickname, e3x.receiver.userId);
        a2x.ba3x(this.Dd4h, "display", "block");
        a2x.ba3x(this.bxJ8B, "cursor", "text");
        a2x.ba3x(this.Dd4h, "cursor", "text")
    };
    b3x.ch4l = function() {
        var j3x = this.bJk1x();
        this.cf4j = a2x.jq7j(a2x.cc4g(gi6c, {
            receiver: this.ww2x,
            users: j3x
        }));
        this.md8V = jd7W
    };
    b3x.bW4a = function() {
        this.ci4m();
        var bS4W = a2x.H3x(this.o3x, "j-flag");
        var hm6g = a2x.H3x(this.o3x, "j-item");
        this.bxJ8B = bS4W[0];
        this.bJy1x = bS4W[1];
        this.ef5k = bS4W[2];
        this.Dd4h = bS4W[3];
        this.bfp3x = bS4W[4];
        this.bxN8F = bS4W[5];
        this.fH6B = hm6g;
        a2x.y3x(this.fH6B[0], "j-selected");
        h3x.s3x(this.ef5k, "keyup", this.bxP8H.f3x(this));
        h3x.s3x(this.ef5k, "keydown", this.UV0x.f3x(this));
        h3x.s3x(this.ef5k, "focus", this.lm8e.f3x(this));
        h3x.s3x(this.bfp3x, "click", this.cuq2x.f3x(this));
        h3x.s3x(this.bxJ8B, "click", this.cup2x.f3x(this));
        h3x.s3x(document.body, "click", this.pl9c.f3x(this));
        h3x.s3x(this.ef5k, "input", this.fR6L.f3x(this));
        h3x.s3x(this.ef5k, "blur", this.nW9N.f3x(this))
    };
    b3x.bC4G = function(e3x) {
        h3x.ms8k(document.body, "click", this.pl9c.f3x(this));
        this.bG4K();
        this.bfl3x();
        this.cum2x();
        this.pl9c()
    };
    b3x.bxP8H = function(d3x) {
        h3x.bh4l(d3x);
        var jS7L = d3x.keyCode || d3x.which;
        var bo4s = this.ef5k.value;
        var bq4u = this.fH6B.length;
        var sg0x = a2x.H3x(this.o3x, "j-selected")[0];
        switch (jS7L) {
            case 13:
                var lr8j = a2x.gH6B(sg0x, "data-username");
                var iq7j = a2x.gH6B(sg0x, "data-userId");
                this.bxG8y(lr8j, iq7j);
                this.pl9c();
                this.ef5k.value = "";
                break;
            case 38:
                var r3x = a2x.gH6B(sg0x, "data-index") - 1 < 0 ? bq4u - 1 : a2x.gH6B(sg0x, "data-index") - 1;
                a2x.x3x(sg0x, "j-selected");
                a2x.y3x(this.fH6B[r3x], "j-selected");
                break;
            case 40:
                var r3x = parseInt(a2x.gH6B(sg0x, "data-index")) + 1 >= bq4u ? 0 : parseInt(a2x.gH6B(sg0x, "data-index")) + 1;
                a2x.x3x(sg0x, "j-selected");
                a2x.y3x(this.fH6B[r3x], "j-selected");
                break;
            default:
                this.wp2x()
        }
    };
    b3x.UV0x = function(d3x) {
        var jS7L = d3x.keyCode || d3x.which;
        var bo4s = this.ef5k.value;
        var r3x = a2x.H3x(this.o3x, "j-receiver").length - 1;
        if (jS7L === 8 && bo4s === "") this.cul2x(r3x)
    };
    b3x.fR6L = function(d3x) {
        var bo4s = this.ef5k.value;
        if (bo4s.length > 10) {
            this.ef5k.value = bo4s.substring(0, 10);
            return
        }
        dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "7.0" ? setTimeout(this.bxY8Q.f3x(this), 0) : this.bxY8Q();
        this.SU9L()
    };
    b3x.lm8e = function() {
        if (this.bk4o[0]) this.wp2x();
        else this.bIZ1x(this.cui2x);
        a2x.ba3x(this.Dd4h, "display", "none")
    };
    b3x.nW9N = function() {
        var bq4u = a2x.H3x(this.o3x, "j-receiver").length;
        if (this.ef5k.value.trim() == "" && bq4u <= 0) a2x.ba3x(this.Dd4h, "display", "block")
    };
    b3x.bxG8y = function(lr8j, iq7j) {
        var KD6x = this.PU8M();
        if (KD6x.length >= 10) {
            this.dX5c();
            return
        }
        var bc4g;
        for (bc4g = 0; bc4g < KD6x.length; bc4g++) {
            if (KD6x[bc4g] == iq7j) {
                this.pl9c();
                return
            }
        }
        if (!lr8j || !iq7j) return;
        var g3x = a2x.dF5K(a2x.jq7j(a2x.cc4g(cut2x, {
            username: lr8j,
            userId: iq7j
        })));
        var bI4M = this.bJy1x.parentNode;
        if (this.cur2x) {
            this.bfl3x()
        }
        bI4M.insertBefore(g3x, this.bJy1x);
        this.ef5k.value = "";
        var bq4u = a2x.H3x(this.o3x, "j-receiver").length;
        if (bq4u > 1) a2x.ba3x(this.Dd4h, "display", "none");
        this.bxY8Q();
        this.SU9L()
    };
    b3x.bfl3x = function() {
        var QM8E = a2x.H3x(this.o3x, "j-receiver");
        var bc4g;
        if (QM8E.length > 0) {
            for (bc4g = 0; bc4g < QM8E.length; bc4g++) {
                a2x.cM4Q(QM8E[bc4g], false)
            }
        }
    };
    b3x.cum2x = function() {
        this.ef5k.value = ""
    };
    b3x.cul2x = function(r3x) {
        this.dX5c(!0);
        var QM8E = a2x.H3x(this.o3x, "j-receiver");
        a2x.cM4Q(QM8E[r3x], false);
        this.SU9L()
    };
    b3x.wp2x = function() {
        var bo4s = this.ef5k.value;
        var bv4z = bo4s.trim().toLowerCase();
        var j3x;
        bv4z = bv4z.replace(/\[/g, "\\[");
        bv4z = bv4z.replace(/\]/g, "\\]");
        j3x = this.bJk1x(bv4z);
        this.cuh2x(j3x)
    };
    b3x.pl9c = function(d3x) {
        a2x.ba3x(this.bfp3x, "display", "none")
    };
    b3x.dX5c = function(dM5R) {
        if (dM5R && this.nc8U) {
            a2x.ba3x(this.nc8U, "display", "none");
            return
        }
        if (this.nc8U) a2x.ba3x(this.nc8U, "display", "block")
    };
    b3x.cuq2x = function(d3x) {
        h3x.cn4r(d3x);
        var bP4T = d3x.target || d3x.srcElement;
        if (a2x.bE4I(bP4T, "j-flag")) return;
        var bI4M = bP4T.nodeName.toLowerCase() == "a" ? bP4T.parentNode : bP4T.parentNode.parentNode;
        var lr8j = a2x.gH6B(bI4M, "data-username");
        var iq7j = a2x.gH6B(bI4M, "data-userId");
        this.bxG8y(lr8j, iq7j);
        this.pl9c();
        a2x.ba3x(this.Dd4h, "display", "none")
    };
    b3x.cup2x = function(d3x) {
        h3x.bh4l(d3x);
        var bP4T = d3x.target || d3x.srcElement;
        if (a2x.bE4I(bP4T.parentNode, "j-receiver")) {
            a2x.cM4Q(bP4T.parentNode, false);
            this.dX5c(!0);
            this.SU9L()
        } else this.ef5k.focus()
    };
    b3x.bxY8Q = function() {
        this.bxN8F.innerHTML = this.ef5k.value;
        var cD4H = this.bxN8F.offsetWidth + 2;
        a2x.ba3x(this.ef5k, "width", cD4H + "px")
    };
    b3x.SU9L = function() {
        var bft3x = a2x.hO6I(this.ef5k, this.o3x).y;
        var bLa2x = Math.floor((bft3x - 8) / 27);
        if (bLa2x < 0) return;
        a2x.ba3x(this.bxJ8B, "height", 19 + bLa2x * 29 + "px")
    };
    b3x.Tq9h = function() {
        var qk9b = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < qk9b.length; i++) {
            a2x.ba3x(this.bxN8F, qk9b[i], a2x.df5k(this.ef5k, qk9b[i]))
        }
    };
    b3x.bIZ1x = function(cA4E, C3x) {
        var do5t = C3x ? C3x : window.GUser.userId;
        var Y3x = "/api/user/getfollows/" + do5t;
        var gl6f = v3x.bl4p(Y3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: cA4E.f3x(this),
            onerror: function(j3x) {
                this.bk4o = []
            },
            onbeforerequest: function(j3x) {}
        })
    };
    b3x.bJa1x = function(j3x) {
        this.bk4o = JSON.parse(j3x).follow || [];
        var C3x = GUser.userId;
        for (var i = 0; i < this.bk4o.length; i++) {
            if (this.bk4o[i].userId == C3x) {
                this.bk4o.splice(i, 1);
                continue
            }
            this.bk4o[i].avatarUrl = this.bk4o[i].avatarUrl + "?param=30y30"
        }
    };
    b3x.cui2x = function(j3x) {
        if (this.bk4o[0]) return;
        this.bJa1x(j3x);
        this.wp2x()
    };
    b3x.bJk1x = function(bv4z) {
        var bv4z = bv4z ? bv4z : "";
        this.bk4o = this.bk4o[0] ? this.bk4o : [];
        var bq4u = this.bk4o.length;
        var QG8y = this.PU8M();
        var th0x = [];
        var Ok8c, Pa8S, bxS8K;
        if (!this.bk4o[0]) return th0x;
        for (var bc4g = 0; bc4g < bq4u; bc4g++) {
            bxS8K = false;
            for (var v3x = 0; v3x < QG8y.length; v3x++) {
                if (this.bk4o[bc4g].userId == QG8y[v3x]) {
                    bxS8K = true;
                    break
                }
            }
            if (bxS8K) continue;
            Ok8c = this.bk4o[bc4g].nickname.toLowerCase().search(bv4z);
            Pa8S = this.bk4o[bc4g].py ? this.bk4o[bc4g].py.toLowerCase().search(bv4z) : -1;
            if (Ok8c !== -1 || Pa8S != -1) th0x.push(this.bk4o[bc4g])
        }
        return th0x
    };
    b3x.cuh2x = function(j3x) {
        a2x.dA5F(this.bfp3x, cuw2x, {
            users: j3x
        });
        a2x.y3x(a2x.H3x(this.o3x, "j-item")[0], "j-selected");
        this.fH6B = a2x.H3x(this.o3x, "j-item");
        a2x.ba3x(this.bfp3x, "display", "block")
    };
    b3x.PU8M = function() {
        var th0x = a2x.H3x(this.o3x, "j-receiver") || [];
        var iq7j = [];
        for (var i = 0; i < th0x.length; i++) {
            iq7j.push(a2x.gH6B(th0x[i], "data-id"))
        }
        return iq7j
    };
    b3x.cGT5Y = function() {
        var iq7j = this.PU8M();
        var th0x = [];
        for (var i = 0; i < iq7j.length; i++) {
            for (var j = 0; j < this.bk4o.length; j++) {
                if (iq7j[i] == this.bk4o[j].userId) th0x.push(this.bk4o[j])
            }
        }
        return th0x
    };
    b3x.cuf2x = function() {
        this.bfl3x()
    };
    w3x.HI6C.J3x = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n3x.pg9X.J3x({
                title: "登录"
            });
            return
        }
        e3x = e3x || {};
        if (e3x.parent === undefined) e3x.parent = document.body;
        !!this.fl5q && this.fl5q.T3x();
        this.fl5q = this.A3x(e3x)
    };
    w3x.HI6C.bt4x = function() {
        !!this.fl5q && this.fl5q.T3x()
    };
    w3x.HI6C.HS6M = function() {
        return this.pl9c()
    };
    w3x.HI6C.cGU5Z = function() {
        return this.wp2x()
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        k3x = c3x("nej.u"),
        h3x = c3x("nej.v"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        b3x, L3x;
    n3x.In6h = NEJ.C();
    b3x = n3x.In6h.N3x(n3x.bia4e);
    L3x = n3x.In6h.cs4w;
    b3x.bm4q = function() {
        var HP6J;
        var cub2x = function(D3x, K3x) {
            HP6J = HP6J || [];
            if (K3x != "18") HP6J.push({
                key: K3x,
                value: D3x
            })
        };
        return function(e3x) {
            this.bn4r(e3x);
            if (e3x.upwards) {
                a2x.y3x(this.o3x, "m-emts-up")
            } else {
                a2x.x3x(this.o3x, "m-emts-up")
            }
            if (e3x.rightwards) {
                a2x.y3x(this.o3x, "m-emts-right")
            } else {
                a2x.x3x(this.o3x, "m-emts-right")
            }
            if (!HP6J) {
                var bz4D = l3x.cBg4k();
                k3x.eI5N(bz4D, cub2x)
            }
            var bq4u = HP6J.length;
            HP6J.splice(bq4u - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bfn3x = HP6J;
            this.ctY2x = !!e3x.autoHide
        }
    }();
    b3x.ch4l = function() {
        this.cf4j = "ntp-portrait"
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        this.bK4O = i3x[0];
        this.ctW2x = i3x[1];
        this.ctV2x = i3x[2];
        this.ctS2x = i3x[3];
        h3x.s3x(this.bK4O, "click", this.yD3x.f3x(this));
        h3x.s3x(this.ctW2x, "click", this.HL6F.f3x(this, 1));
        h3x.s3x(this.ctS2x, "click", this.HL6F.f3x(this, 2))
    };
    b3x.bxD8v = function(r3x) {
        this.bfk3x = r3x;
        var bi4m = (r3x - 1) * 50;
        var i3x = this.bfn3x.slice(bi4m, Math.min(bi4m + 50, this.bfn3x.length));
        this.bK4O.innerHTML = a2x.cc4g("jst-portrait", {
            plist: i3x
        }, {
            purl: l3x.bCX9O
        });
        this.ctV2x.innerText = r3x + "/" + Math.ceil(this.bfn3x.length / 50)
    };
    b3x.HL6F = function(r3x) {
        var ctR2x = Math.ceil(this.bfn3x.length / 50);
        if (r3x == 1 && this.bfk3x == 1 || r3x == 2 && this.bfk3x == ctR2x) return;
        r3x == 1 ? this.bxD8v(this.bfk3x - 1) : this.bxD8v(this.bfk3x + 1)
    };
    b3x.yD3x = function(d3x) {
        var F3x = h3x.X3x(d3x, "d:text");
        if (!F3x) return;
        var d3x = {
            url: a2x.t3x(F3x, "url"),
            text: a2x.t3x(F3x, "text")
        };
        this.z3x("onselect", d3x);
        if (this.ctY2x && !d3x.stopped) {
            this.bt4x()
        }
    };
    b3x.J3x = function() {
        L3x.J3x.call(this);
        this.bxD8v(1)
    }
})();
(function() {
    var c3x = NEJ.P,
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        dx5C = c3x("nej.p"),
        be4i = c3x("nej.h"),
        I3x = c3x("nej.ut"),
        kf7Y = /^[#?]+/,
        EW5b = /#(.*?)$/,
        zT3x = window,
        bxz8r = !history.pushState || dx5C.Il6f.android || !history.auto;
    var bfj3x = function(Y3x, bxx8p) {
        zT3x.history[!bxx8p ? "pushState" : "replaceState"](null, document.title, Y3x)
    };
    var bfh3x = function() {
        return location.parse(zT3x.location.href)
    };
    bfj3x = bfj3x.eH5M(function(d3x) {
        if (!bxz8r) return;
        var bf4j = d3x.args;
        d3x.stopped = !0;
        Y3x = bf4j[0].replace(kf7Y, "");
        !bf4j[1] ? zT3x.location.hash = Y3x : zT3x.location.replace("#" + Y3x)
    });
    bfh3x = bfh3x.eH5M(function(d3x) {
        if (!bxz8r) return;
        d3x.stopped = !0;
        var dR5W = EW5b.test(zT3x.location.href) ? RegExp.$1 : "";
        d3x.value = location.parse(dR5W.replace(kf7Y, ""))
    });
    location.redirect = function(Y3x, bxx8p) {
        bfj3x(Y3x, bxx8p);
        return this
    };
    location.active = function() {
        var eh5m, Y3x, jK7D, dc5h, Vb0x;
        var bxb8T = function(hk6e) {
            if (!!dc5h) {
                dc5h = !1;
                return
            }
            var d3x = {
                oldValue: jK7D,
                newValue: bfh3x()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h3x.z3x(location, "beforeurlchange", d3x);
                if (d3x.stopped) {
                    if (!!jK7D) {
                        dc5h = !0;
                        bfj3x(jK7D.href, !0)
                    }
                    return
                }
            }
            Y3x = zT3x.location.href;
            jK7D = d3x.newValue;
            h3x.z3x(location, "urlchange", jK7D);
            be4i.bvD7w(jK7D.href)
        };
        var bNx2x = function() {
            if (Y3x != zT3x.location.href) bxb8T();
            eh5m = requestAnimationFrame(bNx2x)
        };
        return function(bJ4N) {
            if (!!Vb0x) return this;
            Vb0x = !0;
            zT3x = bJ4N || window;
            if (bxz8r && "onhashchange" in window && dx5C.mW8O.trident2) {
                h3x.s3x(zT3x, "hashchange", bxb8T);
                bxb8T()
            } else if (!eh5m) {
                eh5m = requestAnimationFrame(bNx2x)
            }
            return this
        }
    }();
    location.parse = function() {
        var gO6I = /^https?:\/\/.*?\//i,
            kf7Y = /[?#]/;
        return function(Y3x) {
            var m3x = {
                href: Y3x
            };
            Y3x = (Y3x || "").replace(gO6I, "/").split(kf7Y);
            var cz4D = 1;
            if (Y3x[0] == "/" && (Y3x[1] || "").indexOf("/") == 0) cz4D = 2;
            m3x.path = Y3x.splice(0, cz4D).join("?");
            m3x.query = k3x.hu6o(Y3x.join("&"));
            return m3x
        }
    }();
    location.same = function(Y3x) {
        return bfh3x().href == Y3x
    };
    I3x.fN6H.A3x({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        gr6l = c3x("nm.ut");
    gr6l.uu1x = function(er5w) {
        var hg6a = {
            text: "",
            start: 0,
            end: 0
        };
        if (er5w.setSelectionRange) {
            hg6a.start = er5w.selectionStart;
            hg6a.end = er5w.selectionEnd;
            hg6a.text = hg6a.start != hg6a.end ? er5w.value.substring(hg6a.start, hg6a.end) : ""
        } else if (document.selection) {
            var i, bfa3x = document.selection.createRange(),
                xW3x = document.body.createTextRange();
            xW3x.moveToElementText(er5w);
            hg6a.text = bfa3x.text;
            hg6a.bookmark = bfa3x.getBookmark();
            for (i = 0; xW3x.compareEndPoints("StartToStart", bfa3x) < 0 && bfa3x.moveStart("character", -1) !== 0; i++) {
                if (er5w.value.charAt(i) == "\n") {
                    i++
                }
            }
            hg6a.start = i;
            hg6a.end = hg6a.text.length + hg6a.start
        }
        return hg6a
    };
    gr6l.beZ3x = function(er5w, hg6a) {
        var xW3x;
        if (!hg6a) {
            hg6a = {
                text: "",
                start: 0,
                end: 0
            }
        }
        er5w.focus();
        if (er5w.setSelectionRange) {
            er5w.setSelectionRange(hg6a.start, hg6a.end)
        } else if (er5w.createTextRange) {
            xW3x = er5w.createTextRange();
            if (er5w.value.length === hg6a.start) {
                xW3x.collapse(false);
                xW3x.select()
            } else {
                xW3x.moveToBookmark(hg6a.bookmark);
                xW3x.select()
            }
        }
    };
    gr6l.Ir6l = function(er5w, hg6a, cK4O) {
        var hg6a = hg6a || {
            text: "",
            start: 0,
            end: 0
        };
        var bwD8v, bOf2x, xW3x, Po8g, bOm2x, bOo2x, Hy6s;
        this.beZ3x(er5w, hg6a);
        if (er5w.setSelectionRange) {
            bwD8v = er5w.value;
            bOf2x = bwD8v.substring(0, hg6a.start) + cK4O + bwD8v.substring(hg6a.end);
            bOm2x = bOo2x = hg6a.start + cK4O.length;
            Hy6s = er5w.scrollTop;
            er5w.value = bOf2x;
            if (er5w.scrollTop != Hy6s) {
                er5w.scrollTop = Hy6s
            }
            er5w.setSelectionRange(bOm2x, bOo2x)
        } else if (er5w.createTextRange) {
            Po8g = document.selection.createRange();
            Po8g.text = cK4O;
            Po8g.setEndPoint("StartToEnd", Po8g);
            Po8g.select()
        }
        h3x.z3x(er5w, "keyup")
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        dx5C = c3x("nej.p"),
        k3x = c3x("nej.u"),
        cd4h = c3x("nej.ut"),
        w3x = c3x("nm.w"),
        gr6l = c3x("nm.ut"),
        b3x;
    w3x.bOs2x = NEJ.C();
    b3x = w3x.bOs2x.N3x(cd4h.cJ4N);
    b3x.cw4A = function(e3x) {
        this.cF4J(e3x)
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.gs6m = e3x.txt;
        this.Ht6n = e3x.sgtsContainer;
        this.bOA3x = e3x.sgtsList[0];
        this.beT3x = e3x.sgtsItem;
        this.pd9U = e3x.rangeData;
        this.It6n = e3x.atIndex;
        a2x.y3x(this.beT3x[0], "selected-item");
        this.Hq5v()
    };
    b3x.bC4G = function() {
        this.bG4K();
        h3x.ms8k(document.body, "keyup", this.bOO3x.f3x(this));
        h3x.ms8k(document.body, "click", this.bPd3x.f3x(this))
    };
    b3x.Hq5v = function() {
        this.bX4b([
            [document.body, "keyup", this.bOO3x.f3x(this)],
            [document.body, "click", this.bPd3x.f3x(this)],
            [this.gs6m, "keydown", this.bPi3x.f3x(this)],
            [this.gs6m, "keypress", this.bPi3x.f3x(this)],
            [this.bOA3x, "click", this.bPk3x.f3x(this)],
            [this.bOA3x, "mouseover", this.Hp5u.f3x(this)]
        ])
    };
    b3x.Hp5u = function(d3x) {
        var bP4T = h3x.X3x(d3x);
        var p3x = a2x.H3x(this.Ht6n, "selected-item");
        if (a2x.bE4I(bP4T, "j-sgt")) {
            a2x.x3x(p3x[0], "selected-item");
            a2x.y3x(bP4T, "selected-item")
        }
    };
    b3x.bOO3x = function(d3x) {
        var p3x = a2x.H3x(this.Ht6n, "selected-item");
        var bq4u = this.beT3x.length;
        var jS7L = d3x.keyCode || d3x.which;
        var r3x, j3x;
        switch (jS7L) {
            case 38:
                r3x = a2x.gH6B(p3x[0], "data-index") - 1 < 0 ? bq4u - 1 : a2x.gH6B(p3x[0], "data-index") - 1;
                a2x.x3x(p3x[0], "selected-item");
                a2x.y3x(this.beT3x[r3x], "selected-item");
                break;
            case 40:
                r3x = parseInt(a2x.gH6B(p3x[0], "data-index")) + 1 >= bq4u ? 0 : parseInt(a2x.gH6B(p3x[0], "data-index")) + 1;
                a2x.x3x(p3x[0], "selected-item");
                a2x.y3x(this.beT3x[r3x], "selected-item");
                break;
            case 13:
                this.bPk3x(d3x);
                break;
            case 27:
                this.pl9c();
                break;
            case 32:
                var bo4s = this.gs6m.value;
                var r3x = gr6l.uu1x(this.gs6m);
                if (bo4s.charAt(r3x.start - 1) !== " ") return;
                this.pl9c();
                break
        }
    };
    b3x.bPi3x = function(d3x) {
        var jS7L = d3x.keyCode || d3x.which;
        if (jS7L === 13 || jS7L === 38 || jS7L === 40) {
            h3x.cn4r(d3x);
            d3x.keyCode = 0;
            d3x.which = 0;
            d3x.returnvalue = false
        }
    };
    b3x.bPd3x = function(d3x) {
        var bP4T = d3x.target || d3x.srcElement;
        if (bP4T === this.gs6m) return;
        this.pl9c()
    };
    b3x.bPk3x = function(d3x) {
        h3x.bh4l(d3x);
        var p3x = a2x.H3x(this.Ht6n, "selected-item")[0];
        var sg0x = d3x.target || d3x.srcElement;
        var u3x = d3x.type;
        if (a2x.bE4I(sg0x, "lst")) return;
        if (u3x == "click") {
            a2x.x3x(p3x, "selected-item");
            a2x.y3x(sg0x, "selected-item")
        } else sg0x = p3x;
        var j3x = sg0x.innerHTML + " ";
        this.pl9c();
        var hg6a = this.pd9U;
        hg6a.start = this.It6n + 1;
        if (dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "9.0") {
            this.gs6m.value = this.gs6m.value.substring(0, hg6a.start) + this.gs6m.value.substring(hg6a.end, this.gs6m.value.length);
            hg6a.end = hg6a.start
        }
        gr6l.Ir6l(this.gs6m, hg6a, j3x);
        h3x.z3x(this.gs6m, "keyup")
    };
    b3x.pl9c = function(d3x) {
        if (!!this.Ht6n) a2x.ba3x(this.Ht6n, "display", "none");
        this.T3x()
    };
    b3x.wp2x = function(d3x) {
        if (!!this.Ht6n) a2x.ba3x(this.Ht6n, "display", "block")
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        w3x = c3x("nm.w"),
        cd4h = c3x("nej.ut"),
        bD4H = c3x("nej.ui"),
        b3x;
    var ctQ2x = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ctP2x = a2x.eC5H("m-wgt-atlist");
    var jd7W = a2x.ty0x(ctQ2x);
    w3x.bPp3x = NEJ.C();
    b3x = w3x.bPp3x.N3x(bD4H.ej5o);
    b3x.cw4A = function(e3x) {
        this.fS6M = {};
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.fS6M.txt = a2x.B3x(e3x.target);
        this.fS6M.data = e3x.data;
        this.fS6M.offset = e3x.offset;
        this.fS6M.rangeData = e3x.rangeData;
        this.fS6M.atIndex = e3x.atIndex;
        this.ctO2x(e3x);
        this.bn4r(e3x);
        this.fS6M.sgtsContainer = this.o3x;
        this.fS6M.sgtsList = a2x.H3x(this.o3x, "lst");
        this.fS6M.sgtsItem = a2x.H3x(this.o3x, "f-thide");
        this.QT8L(e3x);
        this.ctL2x = w3x.bOs2x.A3x(this.fS6M)
    };
    b3x.bC4G = function(e3x) {
        this.bG4K();
        this.ctL2x.T3x()
    };
    b3x.ch4l = function() {
        this.md8V = jd7W
    };
    b3x.bW4a = function() {
        this.ci4m()
    };
    b3x.ctO2x = function(e3x) {
        this.o3x = a2x.dF5K(a2x.jq7j(a2x.cc4g(ctP2x, e3x.data)))
    };
    b3x.QT8L = function(e3x) {
        var bPt3x = a2x.H3x(this.o3x, "selected-item")[0];
        if (bPt3x) a2x.x3x(bPt3x, "selected-item");
        var db5g = e3x.offset.x + "px";
        var hw6q = e3x.offset.y + "px";
        a2x.ba3x(this.o3x, "left", db5g);
        a2x.ba3x(this.o3x, "top", hw6q)
    }
})();
(function() {
    var c3x = NEJ.P,
        v3x = c3x("nej.j"),
        gr6l = c3x("nm.ut");
    gr6l.bPy3x = function(bo4s) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var dg5l = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Ix6r = bo4s.match(dg5l) || [];
        for (var bc4g = 0; bc4g < Ix6r.length; bc4g++) {
            Ix6r[bc4g] = Ix6r[bc4g].split("@")[1]
        }
        Ix6r = Ix6r.reverse();
        var iq7j = GUser.userId;
        var ctK2x = v3x.tR1x("mentioners" + iq7j) || [];
        var jQ7J = Ix6r.concat(ctK2x);
        if (jQ7J.length > 10) jQ7J = jQ7J.slice(0, 10);
        v3x.vv2x("mentioners" + iq7j, jQ7J)
    };
    gr6l.ctJ2x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var iq7j = GUser.userId;
        return v3x.tR1x("mentioners" + iq7j) || []
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        dx5C = c3x("nej.p"),
        v3x = c3x("nej.j"),
        k3x = c3x("nej.u"),
        cd4h = c3x("nej.ut"),
        w3x = c3x("nm.w"),
        gr6l = c3x("nm.ut"),
        l3x = c3x("nm.x"),
        b3x;
    var FullscreenApi = l3x.FM5R || {};
    w3x.bPI3x = NEJ.C();
    b3x = w3x.bPI3x.N3x(cd4h.cJ4N);
    b3x.cw4A = function(e3x) {
        this.cF4J(e3x);
        this.bPJ3x()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.gs6m = e3x.txt;
        this.o3x = e3x.body;
        this.bPL3x = e3x.before;
        this.Rr8j = e3x.flag;
        this.ctH2x = e3x.after;
        this.qN0x = [];
        if (dx5C.dr5w.browser != "ie") {
            setTimeout(function() {
                this.lU8M()
            }.f3x(this), 0)
        }
        this.Hq5v()
    };
    b3x.bC4G = function() {
        this.bG4K();
        if (this.ux1x) this.ux1x.T3x();
        delete this.ux1x
    };
    b3x.Hq5v = function() {
        this.bX4b([
            [this.gs6m, "keyup", this.bQc3x.f3x(this, this.gs6m)],
            [this.gs6m, "click", this.bQc3x.f3x(this, this.gs6m)],
            [this.gs6m, "focus", this.lU8M.f3x(this)]
        ])
    };
    b3x.lU8M = function(d3x) {
        this.pd9U = gr6l.uu1x(this.gs6m)
    };
    b3x.bPJ3x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var do5t = window.GUser.userId;
        var Y3x = "/api/user/getfollows/" + do5t;
        var gl6f = v3x.bl4p(Y3x, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j3x) {
                window.GFollowers = JSON.parse(j3x).follow
            }.f3x(this),
            onerror: function(j3x) {},
            onbeforerequest: function(j3x) {}
        })
    };
    b3x.bQe3x = function(index) {
        var D3x = this.gs6m.value,
            bi4m, bvH7A, bvE7x, Sv9m;
        this.bPL3x.innerHTML = k3x.dH5M(D3x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var mC8u = a2x.H3x(this.bPL3x, "j-test");
        for (var bc4g = 0; bc4g < mC8u.length; bc4g++) {
            mC8u[bc4g].innerText = " "
        }
        this.Rr8j.innerHTML = D3x.charAt(index);
        this.ctH2x.innerHTML = k3x.dH5M(D3x.substr(index + 1, D3x.length));
        Sv9m = parseInt(a2x.df5k(this.gs6m, "lineHeight"));
        a2x.ba3x(this.o3x, "display", "block");
        bvH7A = a2x.hO6I(this.Rr8j, this.o3x);
        bvE7x = a2x.hO6I(this.gs6m);
        a2x.ba3x(this.o3x, "display", "none");
        var db5g = bvH7A.x + bvE7x.x;
        var hw6q = bvH7A.y + bvE7x.y + Sv9m;
        bi4m = {
            x: db5g,
            y: hw6q
        };
        this.ctF2x(bi4m)
    };
    b3x.bQc3x = function(er5w, d3x) {
        h3x.cn4r(d3x);
        var er5w = er5w;
        var D3x = er5w.value;
        var bq4u = D3x.length;
        var r3x = gr6l.uu1x(er5w).start;
        var bQl3x = 0;
        var jS7L = d3x.keyCode || d3x.which;
        var jQ7J;
        this.pd9U = gr6l.uu1x(er5w);
        var bQm3x = false;
        for (var i = 1; i < 20; i++) {
            jQ7J = r3x - i;
            if (D3x.charAt(jQ7J) === " ") break;
            if (D3x.charAt(jQ7J) === "@") {
                bQm3x = true;
                this.It6n = bQl3x = jQ7J;
                break
            }
        }
        if (bQm3x && d3x.shiftKey === false && jS7L !== 38 && jS7L !== 40) {
            if (jS7L !== 27 && jS7L !== 13) {
                this.ux1x ? this.ux1x.T3x() : null;
                this.bQe3x(bQl3x)
            }
        } else if (jS7L !== 38 && jS7L !== 40 && d3x.keyCode !== 32) {
            this.ux1x ? this.ux1x.T3x() : null
        }
    };
    b3x.ctF2x = function(bi4m) {
        var bi4m = bi4m;
        var j3x = this.uy1x();
        var e3x = {
            parent: document[FullscreenApi.fullscreenElement] || document.body,
            offset: bi4m,
            data: j3x,
            target: this.gs6m,
            rangeData: this.pd9U,
            atIndex: this.It6n
        };
        this.ux1x ? this.ux1x.T3x() : null;
        this.ux1x = w3x.bPp3x.A3x(e3x)
    };
    b3x.uy1x = function() {
        var ctE2x = gr6l.uu1x(this.gs6m).start;
        var ctC2x = this.It6n + 1;
        var bQr3x = gr6l.ctJ2x() || [];
        var bQs3x = [];
        var bv4z = this.gs6m.value.substring(ctC2x, ctE2x).toLowerCase();
        bv4z = bv4z.replace(/\[/g, "\\[");
        bv4z = bv4z.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qN0x = window.GFollowers[0] ? window.GFollowers : []
        } else this.qN0x = [];
        if (!this.qN0x[0]) this.bPJ3x();
        for (var bc4g = 0; bc4g < bQr3x.length; bc4g++) {
            for (var v3x = 0; v3x < this.qN0x.length; v3x++) {
                if (this.qN0x[v3x].nickname == bQr3x[bc4g]) bQs3x.push(this.qN0x[v3x])
            }
        }
        this.qN0x = k3x.cgd8V(this.qN0x, bQs3x, {
            union: true,
            begin: true
        });
        var ctB2x = this.qN0x.length;
        var beJ3x = [];
        var Ok8c, Pa8S;
        if (!this.qN0x[0]) return {
            suggests: beJ3x
        };
        for (var i = 0; i < ctB2x; i++) {
            Ok8c = this.qN0x[i].nickname.toLowerCase().search(bv4z);
            Pa8S = this.qN0x[i].py ? this.qN0x[i].py.toLowerCase().search(bv4z) : -1;
            if (Ok8c !== -1 || Pa8S != -1) beJ3x.push(this.qN0x[i]);
            if (beJ3x.length === 10) break
        }
        return {
            suggests: beJ3x
        }
    };
    b3x.ST9K = function() {
        var hg6a = this.pd9U || {
            text: "",
            start: 0,
            end: 0
        };
        h3x.z3x(this.gs6m, "focus");
        gr6l.Ir6l(this.gs6m, hg6a, "@");
        this.pd9U = gr6l.uu1x(this.gs6m);
        this.It6n = hg6a.start;
        this.bQe3x(this.It6n)
    };
    b3x.HS6M = function() {
        if (this.ux1x) this.ux1x.T3x()
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        v3x = c3x("nej.j"),
        w3x = c3x("nm.w"),
        cd4h = c3x("nej.ut"),
        bD4H = c3x("nej.ui"),
        b3x;
    var ctz2x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cty2x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gi6c = a2x.jq7j(cty2x);
    var jd7W = a2x.ty0x(ctz2x);
    w3x.SZ9Q = NEJ.C();
    b3x = w3x.SZ9Q.N3x(bD4H.ej5o);
    b3x.cw4A = function(e3x) {
        this.fS6M = {};
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x);
        this.fS6M.txt = a2x.B3x(e3x.target);
        this.Tq9h();
        this.Tc9T = w3x.bPI3x.A3x(this.fS6M)
    };
    b3x.bC4G = function(e3x) {
        this.bG4K();
        this.Tc9T.T3x()
    };
    b3x.ch4l = function() {
        this.cf4j = gi6c;
        this.md8V = jd7W
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.dm5r(a2x.B3x(this.o3x));
        this.fS6M.body = this.o3x;
        this.fS6M.before = i3x[0];
        this.fS6M.flag = i3x[1];
        this.fS6M.after = i3x[2]
    };
    b3x.Tq9h = function() {
        var qk9b = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < qk9b.length; i++) {
            if (qk9b[i] === "width" && a2x.df5k(this.fS6M.txt, qk9b[i]) == "100%") {
                var ctx2x = this.fS6M.txt.offsetWidth;
                if (!ctx2x) {
                    setTimeout(function() {
                        a2x.ba3x(this.o3x, qk9b[i], this.fS6M.txt.offsetWidth + "px")
                    }.f3x(this), 300)
                } else {
                    a2x.ba3x(this.o3x, qk9b[i], this.fS6M.txt.offsetWidth + "px")
                }
                continue
            }
            a2x.ba3x(this.o3x, qk9b[i], a2x.df5k(this.fS6M.txt, qk9b[i]))
        }
    };
    b3x.ST9K = function() {
        this.Tc9T.ST9K()
    };
    b3x.HS6M = function() {
        this.Tc9T.HS6M()
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        kN8F = c3x("nm.c"),
        R3x = {},
        b3x;
    if (!!kN8F.bvt7m) return;
    kN8F.bvt7m = NEJ.C();
    b3x = kN8F.bvt7m.N3x(I3x.cJ4N);
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x)
    };
    b3x.bC4G = function() {
        this.bG4K()
    };
    b3x.Hc5h = function(fj5o, cA4E, beG3x) {
        if (R3x[fj5o]) {
            this.gB6v("register commonJST[" + fj5o + "] duplicate");
            return
        }
        if (!k3x.gE6y(cA4E)) {
            cA4E = ctl.comJST.cto2x(fj5o, cA4E, beG3x)
        }
        R3x[fj5o] = cA4E
    };
    b3x.ctm2x = function(beE3x) {
        if (k3x.eJ5O(beE3x)) {
            k3x.bd4h(beE3x, function(p3x) {
                ctl.comJST.Hc5h.apply(this, p3x)
            }, this)
        } else if (k3x.lG8y(beE3x)) {
            k3x.eI5N(beE3x, function(fv5A, K3x) {
                ctl.comJST.Hc5h(K3x, fv5A)
            })
        }
    };
    b3x.cto2x = function(fj5o, uz1x, beG3x) {
        uz1x = uz1x || {};
        NEJ.X(uz1x, {
            comJST: this.nw8o
        });
        if (uz1x.resetDataName && !k3x.eJ5O(uz1x.resetDataName)) {
            uz1x.resetDataName = [uz1x.resetDataName]
        }
        return function() {
            var j3x = arguments[0],
                jT7M = arguments[1];
            if (uz1x.resetDataName) {
                var jQ7J = {};
                for (var i = 0, ii = uz1x.resetDataName.length; i < ii; i++) {
                    jQ7J[uz1x.resetDataName[i]] = arguments[i]
                }
                j3x = jQ7J;
                jT7M = arguments[ii]
            }
            NEJ.X(j3x, uz1x, dZ5e);
            if (beG3x) {
                jT7M = jT7M || {};
                NEJ.X(jT7M, beG3x)
            }
            return a2x.cc4g(fj5o, j3x, jT7M)
        }
    };
    b3x.nw8o = function(fj5o) {
        if (!R3x[fj5o]) {
            this.gB6v("commonJST[" + fj5o + "] is unregister");
            return ""
        } else {
            return R3x[fj5o].apply(null, fu5z.slice.call(arguments, 1))
        }
    };
    b3x.dump = function() {
        return R3x
    };
    b3x.gB6v = function(cti2x) {
        if (console && console.log) {
            console.log(cti2x)
        }
    };
    var dZ5e = function(fv5A, K3x) {
        return K3x == "resetDataName"
    };
    c3x("ctl").comJST = kN8F.bvt7m.gk6e();
    a2x.crA1x({
        comJST: c3x("ctl").comJST.nw8o
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        br4v = NEJ.F,
        fu5z = NEJ.R,
        a2x = c3x("nej.e"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        kN8F = c3x("nm.c"),
        l3x = c3x("nm.x"),
        R3x = {},
        b3x;
    if (!!kN8F.bva7T) return;
    kN8F.bva7T = NEJ.C();
    b3x = kN8F.bva7T.N3x(I3x.cJ4N);
    b3x.cw4A = function() {
        this.cF4J();
        var e3x = {
            "com-mv-artists": function(fU6O, ed5i, UW0x, buY7R) {
                return a2x.cc4g("com-mv-artists", {
                    artists: fU6O,
                    clazz: ed5i,
                    boxClazz: buY7R,
                    mark: UW0x || function(cN4R) {
                        return cN4R
                    },
                    escape: k3x.dH5M,
                    comJST: ctl.comJST.nw8o
                })
            },
            "com-album-artists": function(fU6O, ed5i, UW0x, buY7R) {
                return a2x.cc4g("com-album-artists", {
                    artists: fU6O,
                    clazz: ed5i,
                    boxClazz: buY7R,
                    mark: UW0x || function(cN4R) {
                        return cN4R
                    },
                    escape: k3x.dH5M,
                    comJST: ctl.comJST.nw8o
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k3x.dH5M
            },
            "com-user-type": function(dp5u, ed5i, lT8L, wv2x, bRz4D) {
                return a2x.cc4g("com-user-type", {
                    x: dp5u,
                    clazz: ed5i || "",
                    clazz2: typeof bRz4D == "undefined" ? "icn" : bRz4D,
                    before: lT8L || "",
                    after: wv2x || "",
                    isEmptyObject: l3x.bIB1x
                })
            }
        };
        for (var C3x in e3x) {
            ctl.comJST.Hc5h(C3x, e3x[C3x])
        }
    };
    b3x.bm4q = function(e3x) {
        this.bn4r(e3x)
    };
    b3x.bC4G = function() {
        this.bG4K()
    };
    c3x("ctl").comJSTUtil = kN8F.bva7T.gk6e()
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        a2x = c3x("nej.e"),
        dx5C = c3x("nej.p"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        v3x = c3x("nej.j"),
        w3x = c3x("nm.w"),
        gr6l = c3x("nm.ut"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        n3x = c3x("nm.l"),
        buW7P = [2, 3],
        ee5j = ["sn", "db"],
        b3x, L3x, cth2x = {
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
        beB3x = {
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
        bRG5L = {
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
        ctd2x = {
            0: 13,
            1: 17,
            3: 19,
            4: 18,
            5: 21,
            6: 24,
            14: 70,
            17: 20
        },
        GW5b = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        },
        FullscreenApi = l3x.FM5R || {};
    n3x.oT9K = NEJ.C();
    b3x = n3x.oT9K.N3x(n3x.eq5v);
    L3x = n3x.oT9K.cs4w;
    b3x.bm4q = function(e3x) {
        if (e3x.onclose === undefined) {
            e3x.onclose = this.bRP5U.f3x(this)
        }
        this.bn4r(e3x);
        this.zH3x = e3x.isPub;
        this.jH7A = e3x.rid || -1;
        this.ev5A = e3x.type || -1;
        this.buC7v = e3x.purl;
        this.No7h = e3x.name || "";
        this.Nw7p = e3x.author || "";
        this.bux7q = e3x.authors || "";
        this.ber3x = e3x.actId;
        this.ben3x = e3x.actName;
        this.bSv5A = e3x.title;
        this.bej3x = {};
        this.ctc2x = e3x.mesg || "";
        this.ctb1x = e3x.placeholder || "说点什么吧";
        this.btW7P = e3x.hideTip;
        this.cta1x = e3x.videoJumpUrl;
        var i3x, eT5Y = +(new Date);
        try {
            i3x = top.localCache.B3x("user") || {}
        } catch (e) {
            i3x = {}
        }
        for (var i = 0, i3x = i3x.bindings || [], cG4K; i < i3x.length; ++i) {
            cG4K = !i3x[i].tokenJsonStr ? null : JSON.parse(i3x[i].tokenJsonStr);
            if (!cG4K || cG4K.expires_in === undefined) continue;
            var bed3x = parseInt(cG4K.expires_in),
                bea3x = parseInt(i3x[i].refreshTime),
                csZ1x = (bed3x + bea3x) * 1e3 - 5 * 60 * 1e3;
            if (csZ1x > eT5Y) this.bej3x[i3x[i].type] = !0
        }
        this.ww2x = w3x.HI6C.A3x({
            parent: this.bdZ3x,
            err: this.bSL5Q
        });
        if (this.hC6w) {
            this.hC6w.T3x()
        }
        this.hC6w = w3x.SZ9Q.A3x({
            parent: document.body,
            target: this.ex5C
        });
        if (this.ev5A == 24 || this.ev5A == 21 || this.ev5A == 41 || this.GM5R()) {
            this.Ah3x.style.display = "none"
        } else {
            this.Ah3x.style.display = "";
            this.oJ9A = w3x.boM6G.A3x({
                parent: this.bty7r,
                button: this.Ah3x,
                onstartupload: this.bSZ5e.f3x(this, true),
                onfinishupload: this.bSZ5e.f3x(this, false)
            })
        }
        if (this.GM5R()) {
            this.pS9J.innerText = "";
            a2x.y3x(this.pS9J, "info-video");
            a2x.y3x(this.btv7o, "f-hide")
        } else {
            a2x.x3x(this.btv7o, "f-hide")
        }
    };
    b3x.bC4G = function() {
        this.bG4K();
        if (this.ww2x) {
            this.ww2x.T3x();
            delete this.ww2x
        }
        if (this.hC6w) {
            this.hC6w.T3x();
            delete this.hC6w
        }
        if (this.oJ9A) {
            this.oJ9A.T3x();
            delete this.oJ9A
        }
        if (this.mN8F) {
            this.mN8F.T3x();
            delete this.mN8F
        }
    };
    b3x.ch4l = function() {
        this.cf4j = "m-wgt-sharewin"
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.bTi5n = a2x.dm5r(this.o3x)[0];
        var bu4y = a2x.H3x(this.o3x, "j-flag");
        this.rm0x = bu4y.shift();
        this.bSL5Q = bu4y.shift();
        this.bdZ3x = bu4y.shift();
        this.ex5C = bu4y.shift();
        this.pS9J = bu4y.shift();
        this.bts7l = bu4y.shift();
        this.csY1x = bu4y.shift();
        this.Ah3x = bu4y.shift();
        this.cu4y = bu4y.shift();
        this.bty7r = bu4y.shift();
        this.Cf4j = bu4y.shift();
        this.cGX5c = bu4y.shift();
        this.btv7o = bu4y.shift();
        this.el5q = bu4y.shift();
        this.bdT3x = a2x.H3x(this.btv7o, "j-t");
        this.CZ4d = I3x.Gb5g.A3x({
            list: a2x.dm5r(this.rm0x),
            selected: "z-slt",
            onchange: this.btk7d.f3x(this)
        });
        if (dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "8.0") {
            a2x.ba3x(this.bdZ3x, "position", "relative");
            a2x.ba3x(this.bdZ3x, "zIndex", "10")
        }
        h3x.s3x(window, "snsbind", this.OT8L.f3x(this));
        h3x.s3x(this.ex5C, "input", this.fR6L.f3x(this));
        h3x.s3x(this.ex5C, "keyup", this.vU2x.f3x(this));
        h3x.s3x(this.o3x, "click", this.cL4P.f3x(this));
        this.S3x = q3x.bmd5i.A3x();
        this.S3x.s3x("onshareall", this.bdR3x.f3x(this, 0));
        this.S3x.s3x("onshareerror", this.iZ7S.f3x(this));
        this.S3x.s3x("onshareprivate", this.bdR3x.f3x(this, 1));
        this.bdQ3x = q3x.zX3x.A3x();
        this.gB6v = q3x.hP6J.A3x();
        try {
            this.OZ8R = top.api.sharePermission
        } catch (e) {}
        if (!this.OZ8R) {
            this.OZ8R = GW5b;
            v3x.bl4p("/api/event/user/permission", {
                type: "json",
                onload: function(d3x) {
                    if (d3x.code == 200) {
                        this.OZ8R = NEJ.EX(GW5b, d3x)
                    }
                }.f3x(this)
            })
        }
        l3x.oi9Z()
    };
    b3x.btk7d = function(d3x) {
        d3x.index == 0 ? a2x.x3x(this.bTi5n, "m-plshare") : a2x.y3x(this.bTi5n, "m-plshare");
        this.bdZ3x.style.display = d3x.index == 0 ? "none" : "";
        this.csY1x.style.display = d3x.index == 0 ? "" : "none";
        this.Ah3x.style.display = d3x.index == 0 ? "" : "none";
        if (this.ev5A == 24 || this.ev5A == 21) {
            this.Ah3x.style.display = "none"
        }
        this.bSL5Q.style.display = "none";
        this.ex5C.value = "";
        this.cb4f();
        this.Gp5u();
        if (d3x.index == 0) {
            var cD4H = a2x.df5k(this.ex5C, "width");
            if (cD4H == "auto" || !cD4H) {
                return
            } else {
                if (this.hC6w) {
                    this.hC6w.T3x()
                }
                this.hC6w = w3x.SZ9Q.A3x({
                    parent: document.body,
                    target: this.ex5C
                })
            }
            this.bty7r.style.display = ""
        } else {
            if (this.hC6w) {
                this.hC6w.T3x();
                delete this.hC6w
            }
            this.bty7r.style.display = "none"
        }
    };
    b3x.cL4P = function(d3x) {
        var g3x = h3x.X3x(d3x, "d:action");
        if (!g3x) return;
        if (a2x.t3x(g3x, "action") == "search") {
            h3x.cn4r(d3x)
        } else if (a2x.t3x(g3x, "default") === undefined) {
            h3x.cn4r(d3x)
        }
        switch (a2x.t3x(g3x, "action")) {
            case "txt":
                this.lU8M();
                break;
            case "search":
                if (this.GM5R()) {
                    top.location.href = this.cta1x
                } else if (this.zH3x && this.ev5A != 24) {
                    if (this.mN8F) {
                        this.mN8F.T3x()
                    }
                    this.mN8F = w3x.bwk8c.A3x({
                        parent: this.o3x.parentNode,
                        onfinish: this.btd7W.f3x(this),
                        oncancel: this.csS1x.f3x(this)
                    });
                    this.bsU7N = true;
                    this.o3x.style.display = "none";
                    this.Gj5o(this.jH7A < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case "at":
                h3x.uj1x(d3x);
                !!this.hn6h && this.hn6h.bt4x();
                this.hC6w.ST9K();
                this.gh6b();
                break;
            case "emot":
                h3x.uj1x(d3x);
                !!this.hC6w && this.hC6w.HS6M();
                if (!this.hn6h) {
                    this.hn6h = n3x.In6h.A3x({
                        parent: this.bts7l
                    });
                    this.hn6h.s3x("onselect", this.yD3x.f3x(this))
                }
                this.hn6h.J3x();
                break;
            case "upload":
                break;
            case "sns":
                h3x.bh4l(d3x);
                var bsJ7C, bv4z, u3x = a2x.t3x(g3x, "type");
                if (!this.bej3x[u3x]) {
                    bsJ7C = g3x.href.split("?");
                    bv4z = k3x.hu6o(bsJ7C[1]);
                    bv4z["csrf_token"] = v3x.gC6w("__csrf");
                    top.open(bsJ7C[0] + "?" + k3x.cC4G(bv4z));
                    return
                }
                var bz4D = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                l3x.Ct4x(g3x, "u-slg-" + bz4D[u3x] + "-gray");
                break;
            case "close":
                !!this.hn6h && this.hn6h.bt4x();
                this.bRP5U();
                break;
            case "share":
                h3x.bh4l(d3x);
                if (this.GM5R()) {
                    if (!a2x.bE4I(g3x, "u-btn2-2-dis")) {
                        this.csR1x()
                    }
                } else if (a2x.bE4I(g3x, "u-btn2-2-dis")) {
                    if (!this.OZ8R.pubEventWithoutResource && this.jH7A < 0) {
                        this.csP1x()
                    } else {}
                } else if (this.jH7A < 0 && !this.ex5C.value && this.oJ9A && this.oJ9A.Rx9o().length == 0) {
                    n3x.Z3x.J3x({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.csO1x()
                }
                break
        }
    };
    b3x.csP1x = function() {
        var tC0x = 0,
            bsG7z = function() {
                if (tC0x % 2) {
                    a2x.x3x(this.pS9J, "z-show")
                } else {
                    a2x.y3x(this.pS9J, "z-show")
                }
                tC0x++;
                if (tC0x > 5) {
                    clearInterval(eh5m)
                }
            },
            eh5m;
        return function() {
            tC0x = 0;
            clearInterval(eh5m);
            eh5m = setInterval(bsG7z.f3x(this), 200)
        }
    }();
    b3x.OT8L = function(m3x) {
        m3x = m3x.result;
        this.bej3x[m3x.type] = !0;
        var r3x = k3x.dl5q(buW7P, m3x.type),
            cj4n = "u-slg-" + ee5j[r3x] + "-gray";
        a2x.x3x(this.bdT3x[r3x], cj4n)
    };
    b3x.btd7W = function(bx4B) {
        var j3x = bx4B.data;
        this.jH7A = bx4B.id;
        this.ev5A = bx4B.type;
        this.o3x.style.display = "";
        this.Gj5o(this.bSv5A);
        this.mN8F && this.mN8F.T3x();
        this.bsU7N = false;
        this.buC7v = j3x.picUrl;
        this.No7h = j3x.title || "";
        this.Nw7p = j3x.author || "";
        this.bux7q = j3x.authors || "";
        this.csN1x();
        this.bdE3x()
    };
    b3x.csS1x = function() {
        this.mN8F && this.mN8F.T3x();
        this.o3x.style.display = "";
        this.Gj5o(this.bSv5A);
        this.bsU7N = false;
        this.bdE3x()
    };
    b3x.yD3x = function(d3x) {
        var bo4s = "[" + d3x.text + "]";
        gr6l.Ir6l(this.ex5C, this.pd9U, bo4s);
        this.gh6b()
    };
    b3x.fR6L = function(d3x) {
        dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "7.0" ? setTimeout(this.gh6b.f3x(this), 0) : this.gh6b()
    };
    b3x.vU2x = function(d3x) {
        this.lU8M();
        if (d3x.keyCode == 8) this.gh6b()
    };
    b3x.gh6b = function() {
        this.lU8M();
        this.Gp5u()
    };
    b3x.Gp5u = function() {
        var bq4u = Math.ceil(k3x.fx5C(this.ex5C.value.trim()) / 2);
        this.cu4y.innerText = 140 - bq4u;
        bq4u > 140 ? a2x.fk5p(this.cu4y, "s-fc4", "s-fc6") : a2x.fk5p(this.cu4y, "s-fc6", "s-fc4")
    };
    b3x.csO1x = function() {
        if (this.cQ4U()) return;
        if (k3x.fx5C(this.ex5C.value.trim()) > 280) {
            this.cb4f("字数超过140个字符");
            return
        }
        l3x.sL0x(this.csL1x.f3x(this))
    };
    b3x.csL1x = function(cG4K) {
        var u3x = this.CZ4d.tj0x(),
            j3x;
        if (u3x == 0) {
            for (var i = 0, IY6S = []; i < this.bdT3x.length; ++i) {
                if (!a2x.bE4I(this.bdT3x[i], "u-slg-" + ee5j[i] + "-gray")) IY6S.push(buW7P[i])
            }
            this.cQ4U(!0);
            j3x = {
                id: this.jH7A,
                msg: this.ex5C.value.trim(),
                type: this.bdy3x(this.ev5A),
                picUrl: this.buC7v,
                snsTypes: IY6S.join(","),
                isPub: this.zH3x,
                checkToken: cG4K || ""
            };
            if (this.ber3x > 0) {
                j3x.actId = this.ber3x;
                if (this.ben3x) {
                    j3x.msg = "#" + this.ben3x + "#" + j3x.msg
                }
            }
            var nV9M = this.oJ9A && this.oJ9A.Rx9o();
            if (nV9M && nV9M.length) {
                j3x.pics = nV9M
            }
            this.S3x.cwN2x(j3x)
        } else {
            var th0x = this.ww2x.PU8M();
            if (th0x.length <= 0) {
                this.cb4f("请至少选择一位好友");
                return
            }
            this.S3x.cwM2x({
                data: {
                    id: this.jH7A,
                    msg: this.ex5C.value.trim(),
                    type: this.bdy3x(this.ev5A == 41 ? 39 : this.ev5A),
                    userIds: "[" + th0x.join(",") + "]",
                    checkToken: cG4K || ""
                }
            })
        }
    };
    b3x.csR1x = function() {
        if (this.cQ4U()) {
            return
        }
        this.gB6v.eS5X("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k3x.fx5C(this.ex5C.value.trim()) > 280) {
            this.cb4f("字数超过140个字符");
            return
        }
        l3x.sL0x(this.csJ1x.bind(this))
    };
    b3x.csJ1x = function(cG4K) {
        this.cQ4U(!0);
        var j3x = {
                msg: this.ex5C.value.trim() || "",
                type: "video",
                checkToken: cG4K || ""
            },
            csI1x = {
                videoId: this.jH7A
            };
        if (this.ber3x > 0) {
            j3x.actId = this.ber3x;
            if (this.ben3x) {
                j3x.msg = "#" + this.ben3x + "#" + j3x.msg
            }
        }
        j3x.videoinfo = JSON.stringify(csI1x);
        this.S3x.cwK2x({
            data: {
                videoId: this.jH7A,
                commit: true
            },
            data2: j3x,
            snsTypes: ""
        })
    };
    b3x.bdR3x = function(u3x, m3x) {
        this.cQ4U(!1);
        this.bt4x();
        if (!this.btW7P) {
            if (this.GM5R()) {
                n3x.Z3x.J3x({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n3x.Z3x.J3x({
                    tip: "分享成功" + (m3x.point > 0 ? ' 获得<em class="s-fc6">' + m3x.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h3x.z3x(n3x.oT9K, "sharesuccess", {
            isPrivate: u3x,
            rid: this.jH7A,
            rtype: this.ev5A,
            data: m3x.event
        });
        this.z3x("onshare")
    };
    b3x.iZ7S = function(m3x) {
        this.cQ4U(!1);
        var bF4J = "分享失败";
        if (m3x.code) {
            switch (m3x.code) {
                case 250:
                    bF4J = m3x.message || m3x.msg || (this.zH3x ? "发布异常" : "分享异常");
                    break;
                case 404:
                    bF4J = "分享的资源不存在";
                    break;
                case 407:
                    bF4J = "输入内容包含有关键字";
                    break;
                case 408:
                    bF4J = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF4J = m3x.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l3x.ft5y({
                        clazz: "m-layer-w2",
                        btntxt: "知道了",
                        message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                    })
            }
        }
        this.cb4f(bF4J)
    };
    b3x.lU8M = function() {
        this.pd9U = gr6l.uu1x(this.ex5C)
    };
    b3x.cb4f = function(bF4J) {
        this.dX5c(this.el5q, bF4J)
    };
    b3x.cQ4U = function(dc5h) {
        return this.dV5a(this.Cf4j, dc5h, "分享", "分享中...")
    };
    b3x.bdy3x = function(if6Z) {
        return cth2x[if6Z] || ""
    };
    b3x.csH1x = function() {
        var er5w, uM1x = this.bdy3x(this.ev5A);
        this.pS9J.style.display = "";
        if (this.jH7A < 0) {
            this.pS9J.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.No7h) {
                this.pS9J.style.display = "none";
                return
            }
            var bds3x = this.zH3x && this.ev5A != 24;
            er5w = (beB3x[uM1x] ? beB3x[uM1x] + "：" : "") + this.No7h + (bRG5L[uM1x] || " ") + (uM1x == "mv" || uM1x == "album" ? this.bux7q || this.Nw7p : this.Nw7p);
            a2x.dA5F(this.pS9J, "m-xwgt-share-infobar", {
                canChange: bds3x,
                info: er5w
            });
            if (bds3x) {
                a2x.x3x(this.pS9J, "z-dis")
            } else {
                a2x.y3x(this.pS9J, "z-dis")
            }
        }
        a2x.x3x(this.pS9J, "info-video")
    };
    b3x.csN1x = function() {
        var uM1x = this.bdy3x(this.ev5A),
            er5w = (beB3x[uM1x] ? beB3x[uM1x] + "：" : "") + this.No7h + (bRG5L[uM1x] || " ") + (uM1x == "mv" || uM1x == "album" ? this.bux7q || this.Nw7p : this.Nw7p);
        bds3x = this.zH3x && this.ev5A != 24;
        if (this.GM5R()) {} else {
            a2x.x3x(this.pS9J, "info-video");
            a2x.dA5F(this.pS9J, "m-xwgt-share-infobar", {
                canChange: bds3x,
                isPub: this.zH3x,
                info: er5w
            })
        }
    };
    b3x.csG1x = function() {
        var Je6Y = this.ex5C.value;
        if (this.zH3x) {
            if (!!this.bsU7N) {
                return !!Je6Y && !!Je6Y.length || !!this.oJ9A && this.oJ9A.Rx9o().length > 0
            } else {
                return !(this.jH7A < 0) || !!Je6Y && !!Je6Y.length || !!this.oJ9A && this.oJ9A.Rx9o().length > 0
            }
        } else {
            return !!Je6Y && !!Je6Y.length || !!this.oJ9A && this.oJ9A.Rx9o().length > 0
        }
    };
    b3x.bdE3x = function() {
        var bVa5f = false;
        if (!this.zH3x || this.OZ8R.pubEventWithoutResource || !(this.jH7A < 0)) {
            bVa5f = true
        }
        if (bVa5f) {
            a2x.x3x(this.Cf4j, "u-btn2-2-dis")
        } else {
            a2x.y3x(this.Cf4j, "u-btn2-2-dis")
        }
    };
    b3x.bSZ5e = function(brE6y) {
        if (brE6y) {
            a2x.y3x(this.Cf4j, "u-btn2-2-dis")
        } else {
            this.bdE3x()
        }
    };
    b3x.bRP5U = function(d3x) {
        if (d3x) {
            d3x.stopped = true
        }
        if (this.csG1x()) {
            l3x.hr6l({
                parent: document[FullscreenApi.fullscreenElement] || document.body,
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(V3x) {
                    if (V3x == "ok") {
                        this.z3x("forceclose", {});
                        this.bt4x();
                        h3x.z3x(n3x.oT9K, "shareclose", {})
                    }
                }.f3x(this)
            })
        } else {
            this.z3x("forceclose", {});
            this.bt4x();
            h3x.z3x(n3x.oT9K, "shareclose", {})
        }
    };
    b3x.Gj5o = function(eo5t, dW5b) {
        this.oK9B.CL4P(eo5t, dW5b)
    };
    b3x.bdr3x = function(u3x) {
        this.gB6v.eS5X("page", {
            type: u3x
        })
    };
    b3x.GM5R = function() {
        return this.ev5A == 39
    };
    b3x.J3x = function() {
        var csF1x = function(p3x, r3x) {
            var cj4n = "u-slg-" + ee5j[r3x] + "-gray";
            !this.bej3x[buW7P[r3x]] ? a2x.y3x(p3x, cj4n) : a2x.x3x(p3x, cj4n)
        };
        return function() {
            L3x.J3x.call(this);
            this.o3x.style.display = "";
            this.cb4f();
            this.cQ4U(!1);
            this.CZ4d.Qo8g(0);
            this.ex5C.focus();
            this.ex5C.value = this.ctc2x || "";
            this.ex5C.placeholder = this.ctb1x || "";
            if (!this.GM5R()) {
                this.csH1x()
            } else {
                a2x.y3x(this.pS9J, "info-video");
                a2x.dA5F(this.pS9J, "m-xwgt-share-videobar", {
                    title: this.No7h,
                    picUrl: this.buC7v
                })
            }
            this.gh6b();
            this.ww2x.cuf2x();
            k3x.bd4h(this.bdT3x, csF1x, this);
            this.lU8M();
            if (this.zH3x) {
                this.rm0x.style.display = "none"
            } else {
                this.rm0x.style.display = ""
            }
            this.bdE3x()
        }
    }();
    b3x.bt4x = function(d3x) {
        L3x.bt4x.call(this);
        !!this.hn6h && this.hn6h.bt4x();
        if (this.ww2x) {
            this.ww2x.T3x();
            delete this.ww2x
        }
        if (this.hC6w) {
            this.hC6w.T3x();
            delete this.hC6w
        }
        if (this.oJ9A) {
            this.oJ9A.T3x();
            delete this.oJ9A
        }
        if (this.bVg5l) {
            this.bVg5l = this.bVg5l.T3x()
        }
        if (this.mN8F) {
            this.mN8F.T3x();
            delete this.mN8F
        }
    };
    l3x.kI8A = function(e3x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e3x.title === undefined) {
            e3x.title = "分享"
        }
        if (e3x.actId && e3x.type != 39) {
            var u3x = ctd2x[e3x.resourceType],
                bV4Z = e3x.resourceJson,
                ih7a;
            if (k3x.fB5G(bV4Z)) {
                try {
                    bV4Z = JSON.parse(bV4Z)
                } catch (e) {}
            }
            if (u3x) {
                ih7a = l3x.bLy2x(u3x, bV4Z);
                e3x.name = ih7a.title;
                e3x.author = ih7a.author;
                e3x.picUrl = ih7a.picUrl;
                e3x.type = u3x;
                e3x.rid = (bV4Z || []).id
            }
        }
        n3x.oT9K.J3x(e3x)
    };
    I3x.fN6H.A3x({
        element: n3x.oT9K,
        event: ["sharesuccess", "shareclose"]
    })
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        h3x = c3x("nej.v"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    n3x.bdn3x = NEJ.C();
    b3x = n3x.bdn3x.N3x(n3x.eq5v);
    L3x = n3x.bdn3x.cs4w;
    b3x.cw4A = function() {
        this.cF4J()
    };
    b3x.bW4a = function() {
        this.ci4m();
        var i3x = a2x.H3x(this.o3x, "j-flag");
        h3x.s3x(i3x[0], "click", this.FG5L.f3x(this))
    };
    b3x.ch4l = function() {
        this.cf4j = "m-import-ok"
    };
    b3x.bm4q = function(e3x) {
        e3x.parent = e3x.parent || document.body;
        e3x.title = "歌曲同步完成";
        this.bn4r(e3x)
    };
    b3x.bC4G = function() {
        this.bG4K()
    };
    b3x.FG5L = function(d3x) {
        this.bt4x();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b3x.BR4V = function() {
        this.bt4x()
    };
    b3x.bSQ5V = function(d3x) {
        if (d3x.keyCode == 13) this.Ho5t()
    }
})();
(function() {
    var c3x = NEJ.P,
        bb3x = NEJ.O,
        h3x = c3x("nej.v"),
        a2x = c3x("nej.e"),
        v3x = c3x("nej.j"),
        O3x = c3x("nej.p"),
        k3x = c3x("nej.u"),
        n3x = c3x("nm.l"),
        w3x = c3x("nm.w"),
        bD4H = c3x("nej.ui"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        b3x, L3x;
    n3x.bVk5p = NEJ.C();
    b3x = n3x.bVk5p.N3x(n3x.eq5v);
    b3x.ch4l = function() {
        this.cf4j = "m-programtips-layer"
    };
    b3x.bW4a = function() {
        this.ci4m();
        this.bU4Y = a2x.H3x(this.o3x, "j-flag")
    };
    b3x.bm4q = function(e3x) {
        if (e3x.inner) {
            var innerNode = a2x.H3x(this.o3x, "wrap-p")[0];
            if (innerNode) {
                innerNode.innerHTML = e3x.inner
            }
        }
        e3x.clazz = " m-layer-programtips " + (e3x.clazz || "");
        e3x.parent = e3x.parent || document.body;
        e3x.title = e3x.title || "付费内容提示";
        e3x.draggable = !0;
        e3x.destroyalbe = !0;
        e3x.mask = true;
        this.bn4r(e3x);
        this.gY6S = e3x.id;
        this.csz1x = e3x.radiotype;
        this.kF8x = location.protocol + "//" + (this.brk6e() || "music.163.com") + "/m/" + this.csz1x + "?id=" + this.gY6S;
        this.kF8x = e3x.url || this.kF8x;
        this.csw1x()
    };
    b3x.bC4G = function() {
        this.bG4K()
    };
    b3x.BR4V = function() {
        this.bt4x()
    };
    b3x.FG5L = function(d3x) {
        this.z3x("onok", D3x);
        this.bt4x()
    };
    l3x.bre6Y = function(e3x) {
        n3x.bVk5p.A3x(e3x).J3x()
    };
    b3x.csw1x = function() {
        v3x.bl4p("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k3x.cC4G({
                url: this.kF8x,
                size: 180
            }),
            onload: function(j3x) {
                if (j3x.code == 200) {
                    this.csv1x(j3x.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.f3x(this)
        })
    };
    b3x.brk6e = function() {
        var VA0x = location.host;
        if (VA0x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b3x.csv1x = function(ka7T) {
        this.bU4Y[0].style.backgroundImage = "url(" + ka7T + ")"
    }
})();
(function() {
    var c3x = NEJ.P,
        a2x = c3x("nej.e"),
        dx5C = c3x("nej.p"),
        h3x = c3x("nej.v"),
        k3x = c3x("nej.u"),
        I3x = c3x("nej.ut"),
        v3x = c3x("nej.j"),
        q3x = c3x("nm.d"),
        l3x = c3x("nm.x"),
        E3x = c3x("nm.m"),
        n3x = c3x("nm.l"),
        M3x = c3x("nm.m.f"),
        b3x, L3x;
    E3x.dh5m = NEJ.C();
    b3x = E3x.dh5m.N3x(I3x.du5z);
    b3x.bL4P = function() {
        var rb0x = !1;
        return function() {
            if (rb0x) return;
            rb0x = !0;
            this.bQ4U();
            if (top == self) {
                return
            }
            this.tD0x = a2x.B3x("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bVA6u()
            }
            I3x.fN6H.A3x({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bX4b([
                [window, "scroll", this.BQ4U.f3x(this)],
                [document, "keyup", this.csu1x.f3x(this)],
                [document.body, "click", this.sT0x.f3x(this)],
                [document, "mouseup", this.cst1x.f3x(this)],
                [this.tD0x, "click", this.QV8N.f3x(this)],
                [q3x.tx0x, "message", this.wk2x.f3x(this)]
            ]);
            l3x.cwV2x(document.body);
            this.BQ4U();
            if (this.BN4R !== false && typeof GUser !== "undefined" && GUser.userId > 0) q3x.tx0x.gk6e().wb2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dx5C.dr5w.browser == "ie" && parseInt(dx5C.dr5w.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hc6W = top.player.getPlaying();
                    if (hc6W && hc6W.track && hc6W.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hc6W.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.yF3x.f3x(this);
            this.ke7X = q3x.hP6J.A3x();
            window.log = this.hd6X.f3x(this);
            var ti0x = location.search;
            if (ti0x) {
                var bv4z = ti0x.substr(ti0x.indexOf("?") + 1),
                    gn6h = k3x.hu6o(bv4z);
                if (gn6h && gn6h["_hash"]) location.hash = gn6h["_hash"]
            }
        }
    }();
    b3x.csu1x = function(d3x) {
        var g3x = h3x.X3x(d3x);
        try {
            if (d3x.keyCode == 80 && l3x.bHC1x() || ["textarea", "input"].indexOf(g3x.tagName.toLowerCase()) >= 0) return;
            h3x.z3x(top.document, "keyup", {
                ctrlKey: d3x.ctrlKey,
                keyCode: d3x.keyCode
            })
        } catch (e) {}
    };
    b3x.sT0x = function(d3x) {
        var g3x = h3x.X3x(d3x);
        if (g3x && g3x.tagName == "INPUT") return;
        var g3x = h3x.X3x(d3x, "d:pid");
        if (g3x) {
            h3x.cn4r(d3x);
            var qu9l = a2x.t3x(g3x, "pid"),
                BH4L = a2x.t3x(g3x, "ptype"),
                V3x = a2x.t3x(g3x, "action") || "play";
            switch (V3x) {
                case "subscribe":
                    l3x.mw8o({
                        tracks: [qu9l]
                    });
                    break
            }
        }
        g3x = h3x.X3x(d3x, "d:resAction");
        if (g3x && g3x.className.indexOf("-dis") == -1) {
            var cU4Y = a2x.t3x(g3x, "resId"),
                u3x = a2x.t3x(g3x, "resType"),
                bqM6G = a2x.t3x(g3x, "resRadiotype"),
                bqH6B = a2x.t3x(g3x, "resRadioid"),
                ec5h = a2x.t3x(g3x, "resFrom"),
                j3x = a2x.t3x(g3x, "resData"),
                V3x = a2x.t3x(g3x, "resAction"),
                bwW8O = a2x.t3x(g3x, "resCopyright"),
                bcY3x = a2x.t3x(g3x, "resAuditstatus");
            if (V3x != "log" && V3x != "bilog") h3x.cn4r(d3x);
            switch (V3x) {
                case "log":
                    j3x = (j3x || "").split("|");
                    if (!!j3x[0]) {
                        var bg4k = {
                            id: cU4Y,
                            alg: j3x[2] || "itembased",
                            scene: j3x[3],
                            position: j3x[1] || 0
                        };
                        if (!!j3x[4]) bg4k.srcid = j3x[4];
                        window.log(j3x[0], bg4k)
                    }
                    break;
                case "bilog":
                    var bnd5i = a2x.t3x(g3x, "logAction"),
                        bnK5P = a2x.t3x(g3x, "logJson");
                    window.log(bnd5i, bnK5P);
                    break;
                case "share":
                    if (bcY3x && bcY3x == 1) {
                        l3x.iC7v("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cU4Y, u3x, a2x.t3x(g3x, "resPic"), a2x.t3x(g3x, "resName"), a2x.t3x(g3x, "resAuthor"), a2x.t3x(g3x, "resAuthors"))
                    }
                    break;
                case "fav":
                case "subscribe":
                    if (u3x == 18) {
                        var qx9o = a2x.t3x(g3x, "resLevel"),
                            oa9R = a2x.t3x(g3x, "resFee");
                        if (qx9o == 10) {
                            l3x.vZ2x(oa9R, cU4Y, "song");
                            break
                        }
                        l3x.mw8o({
                            tracks: [cU4Y]
                        })
                    }
                    break;
                case "download":
                    l3x.Lr7k({
                        id: cU4Y,
                        type: u3x
                    });
                    break;
                case "programtips":
                    if (bcY3x && bcY3x == 1) {
                        l3x.iC7v("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l3x.bre6Y({
                            id: bqH6B,
                            radiotype: bqM6G
                        })
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d3x)
        } catch (e) {}
    };
    b3x.cst1x = function(d3x) {
        try {
            h3x.z3x(top.document, "mouseup")
        } catch (e) {}
    };
    b3x.BQ4U = function() {
        var css1x = function() {
            var ce4i = window.innerHeight;
            if (!k3x.td0x(ce4i)) ce4i = (document.documentElement || document.body).clientHeight;
            return ce4i
        };
        return function(d3x) {
            if (!this.tD0x) return;
            var bcW2x = css1x(),
                gb6V = document.documentElement.scrollTop || document.body.scrollTop;
            a2x.ba3x(this.tD0x, "display", gb6V > 0 ? "" : "none");
            if (dx5C.dr5w.browser == "ie" && dx5C.dr5w.version < "7.0") {
                var gy6s = Math.min(document.body.clientHeight, bcW2x + gb6V) - 204;
                a2x.ba3x(this.tD0x, "top", gy6s + "px")
            }
        }
    }();
    b3x.QV8N = function(d3x) {
        h3x.cn4r(d3x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b3x.yF3x = function() {
        var bqn6h = function(d3x) {
            h3x.z3x(window, "share", d3x)
        };
        return function(cU4Y, u3x, yQ3x, W3x, FL5Q, FJ5O) {
            l3x.kI8A({
                rid: cU4Y,
                type: u3x,
                purl: yQ3x,
                name: W3x,
                author: FL5Q,
                authors: FJ5O,
                onshare: bqn6h.f3x(this)
            })
        }
    }();
    b3x.hd6X = function(V3x, bg4k) {
        try {
            top.log(V3x, bg4k)
        } catch (e) {
            if (V3x.indexOf("new|") == 0) {
                return this.ke7X.eS5X(V3x.slice(4), bg4k)
            }
            switch (V3x) {
                case "play":
                    this.ke7X.ep5u(bg4k);
                    break;
                case "search":
                    this.ke7X.bCW9N(bg4k);
                    break;
                default:
                    this.ke7X.eS5X(V3x, bg4k)
            }
        }
    };
    b3x.bVA6u = function() {
        var bcR2x, bqh6b = false,
            bs4w = [45, 60];
        var csr1x = function(bF4J) {
            if (bF4J.title != "MailBoxImport") return;
            var Q3x = JSON.parse(bF4J.content || "null") || bb3x;
            if (Q3x.status == 10) {
                n3x.bdn3x.A3x().J3x();
                window.clearTimeout(bcR2x)
            }
        };
        var nZ9Q = function(d3x) {
            if (d3x.code == 200) {
                if (d3x.status == 1) {
                    h3x.s3x(q3x.CU4Y, "message", csr1x.f3x(this));
                    q3x.CU4Y.A3x().btl7e();
                    bqh6b = true
                } else {
                    if (bqh6b) {
                        if (d3x.status == 10) {
                            n3x.bdn3x.A3x().J3x();
                            h3x.hj6d(q3x.CU4Y, "message");
                            window.clearTimeout(bcR2x);
                            bqh6b = false
                        }
                    } else {
                        window.clearTimeout(bcR2x)
                    }
                }
            }
        };
        return function() {
            var tV1x = bs4w.shift() * 1e3;
            v3x.bl4p("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: nZ9Q.f3x(this)
            });
            if (tV1x) {
                bcR2x = window.setTimeout(arguments.callee, tV1x)
            }
        }
    }();
    b3x.wk2x = function(d3x) {
        try {
            top.polling(d3x)
        } catch (e) {}
    }
})()