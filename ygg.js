// ==UserScript==
// @name         YGGTools+
// @namespace    YGGTools
// @version      0.103
// @description  Ajout d'améliorations pour le site YGG.
// @author       Fervex
// @supportURL   https://www3.yggtorrent.wtf/profile/7161-fervex
// @updateURL    https://github.com/MonsieurZed/custom_script/blob/main/ygg.js
// @downloadURL  https://github.com/MonsieurZed/custom_script/blob/main/ygg.js
// @icon         https://yggland.fr/assets/img/ygg32.png
// @include      https://*.yggtorrent.*
// @include      https://yggtorrent.*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @ressource    https://cdn.datatables.net/v/bs4/dt-1.10.24/cr-1.5.3/r-2.2.7/rr-1.2.7/datatables.min.css
// @require      https://cdn.datatables.net/v/bs4/dt-1.10.24/cr-1.5.3/r-2.2.7/rr-1.2.7/datatables.min.js
// ==/UserScript==

var ferveX = jQuery.noConflict(true);

ferveX(document).ready(function () {
  var url = window.location.href;

  var styleBouton =
    "margin:8px 4px 0; display:inline-block; border-radius:12px; padding:4px 8px; text-transform:uppercase; background:#4e5c6f; color:#fff; font-size:13px; font-weight:700; transition:background 0.5s ease;";
  var styleBoutonF =
    "margin:8px 4px 0; display:inline-block; border-radius:12px; padding:4px 8px; text-transform:uppercase; background:#267bbb; color:#fff; font-size:13px; font-weight:700; transition:background 0.5s ease;";
  var styleBoutonS =
    "margin:8px 4px 0; display:inline-block; border-radius:12px; padding:4px 8px; text-transform:uppercase; background:#885599; color:#fff; font-size:13px; font-weight:700; transition:background 0.5s ease;";
  var styleBoutonA =
    "margin:8px 4px 0; display:inline-block; border-radius:12px; padding:4px 8px; text-transform:uppercase; background:#228B22; color:#fff; font-size:13px; font-weight:700; transition:background 0.5s ease;";
  var styleBoutonD =
    "margin:8px 4px 0; display:inline-block; border-radius:12px; padding:4px 8px; text-transform:uppercase; background:#AA8B33; color:#fff; font-size:13px; font-weight:700; transition:background 0.5s ease;";

  ferveX("head link[rel='stylesheet']")
    .last()
    .after(
      '<style type="text/css">.promo-container{display:none!important}body #middle .search-criteria td button.solo{width:180px!important}.w65{width:65px}.f16{font-size:16px;vertical-align:text-top;}.butonFervexHover{background:#22282f!important;color:#fff!important;text-decoration:none!important}.focus-wrap-nav .p-navEl-link[data-nav-id=moncompte]:before{content:"\\f007"}.focus-wrap-nav .p-navEl-link[data-nav-id=messagerie]:before{content:"\\f0e0"}.focus-wrap-nav .p-navEl-link[data-nav-id=uploadtorrent]:before{content:"\\f093"}.focus-wrap-nav .p-navEl-link[data-nav-id=chercheCopain]:before{content:"\\f002"}.fervexTools{box-shadow:0px 0px 4px rgba(0,0,0,.5)!important;border:solid 1px #777;z-index:999999;background:#dff0d8;}.fervexTools:hover{box-shadow:0px 3px 10px rgba(0,0,0,.6)!important}.fervexTools1{position:fixed;padding:2px 3px;border-radius:4px;font-size:12px}.fervexTools2{position:absolute;padding:4px 3px 4px 5px;border-radius:50%;width:25px;height:25px;line-height:1.15}.fervexTime{position:absolute;top:35px;width:100%;text-align:center;color:#eee;}.fervexTime .badge{font-size:100%}.fervexTime .badge span{color:#6cded4}#fervextip{position:fixed;z-index:1070;display:inline-block;font-size:.875rem;text-transform:none;font-weight:400;font-style:normal;}#fervextip .tipBody{display:inline-block;max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem;}.config-recherche-bas,.config-recherche-popup,.config-recherche-date-desc,.config-recherche-date-asc,.config-sidebar-on,.config-sidebar-off,.config-preview-on,.config-preview-off,.config-preview2-on,.config-preview2-off{padding:4px 6px;font-size:0.875em;text-transform:inherit;font-weight:400;font-family:inherit}#nfoModal .modal-body pre{white-space: pre-wrap}.results .dataTables_info {display: inherit!important}.m-2{margin:0.5rem}.ico_spin {animation: spin-animation 1s infinite;animation-timing-function: linear;}@keyframes spin-animation {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}#middle .content table.notif td{padding:6px 10px!important;font-size:12px;}#middle table.notif tbody td .btn{margin-top:0;}#middle table.notif td:first-child {width:130px}</style>'
    );
  ferveX("body").prepend(
    '<div class="fervexTools fervexTools1" style="display:none"><a href="#" style="text-decoration:none" title="Recherche torrent sur YGG" target="_blank">Recherche</a></ul>'
  );

  /* mousetrap v1.6.5 craig.is/killing/mice */
  (function (q, u, c) {
    function v(a, b, g) {
      a.addEventListener
        ? a.addEventListener(b, g, !1)
        : a.attachEvent("on" + b, g);
    }
    function z(a) {
      if ("keypress" == a.type) {
        var b = String.fromCharCode(a.which);
        a.shiftKey || (b = b.toLowerCase());
        return b;
      }
      return n[a.which]
        ? n[a.which]
        : r[a.which]
        ? r[a.which]
        : String.fromCharCode(a.which).toLowerCase();
    }
    function F(a) {
      var b = [];
      a.shiftKey && b.push("shift");
      a.altKey && b.push("alt");
      a.ctrlKey && b.push("ctrl");
      a.metaKey && b.push("meta");
      return b;
    }
    function w(a) {
      return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a;
    }
    function A(a, b) {
      var g,
        d = [];
      var e = a;
      "+" === e
        ? (e = ["+"])
        : ((e = e.replace(/\+{2}/g, "+plus")), (e = e.split("+")));
      for (g = 0; g < e.length; ++g) {
        var m = e[g];
        B[m] && (m = B[m]);
        b && "keypress" != b && C[m] && ((m = C[m]), d.push("shift"));
        w(m) && d.push(m);
      }
      e = m;
      g = b;
      if (!g) {
        if (!p) {
          p = {};
          for (var c in n)
            (95 < c && 112 > c) || (n.hasOwnProperty(c) && (p[n[c]] = c));
        }
        g = p[e] ? "keydown" : "keypress";
      }
      "keypress" == g && d.length && (g = "keydown");
      return { key: m, modifiers: d, action: g };
    }
    function D(a, b) {
      return null === a || a === u ? !1 : a === b ? !0 : D(a.parentNode, b);
    }
    function d(a) {
      function b(a) {
        a = a || {};
        var b = !1,
          l;
        for (l in p) a[l] ? (b = !0) : (p[l] = 0);
        b || (x = !1);
      }
      function g(a, b, t, f, g, d) {
        var l,
          E = [],
          h = t.type;
        if (!k._callbacks[a]) return [];
        "keyup" == h && w(a) && (b = [a]);
        for (l = 0; l < k._callbacks[a].length; ++l) {
          var c = k._callbacks[a][l];
          if ((f || !c.seq || p[c.seq] == c.level) && h == c.action) {
            var e;
            (e = "keypress" == h && !t.metaKey && !t.ctrlKey) ||
              ((e = c.modifiers),
              (e = b.sort().join(",") === e.sort().join(",")));
            e &&
              ((e = f && c.seq == f && c.level == d),
              ((!f && c.combo == g) || e) && k._callbacks[a].splice(l, 1),
              E.push(c));
          }
        }
        return E;
      }
      function c(a, b, c, f) {
        k.stopCallback(b, b.target || b.srcElement, c, f) ||
          !1 !== a(b, c) ||
          (b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
          b.stopPropagation ? b.stopPropagation() : (b.cancelBubble = !0));
      }
      function e(a) {
        "number" !== typeof a.which && (a.which = a.keyCode);
        var b = z(a);
        b &&
          ("keyup" == a.type && y === b ? (y = !1) : k.handleKey(b, F(a), a));
      }
      function m(a, g, t, f) {
        function h(c) {
          return function () {
            x = c;
            ++p[a];
            clearTimeout(q);
            q = setTimeout(b, 1e3);
          };
        }
        function l(g) {
          c(t, g, a);
          "keyup" !== f && (y = z(g));
          setTimeout(b, 10);
        }
        for (var d = (p[a] = 0); d < g.length; ++d) {
          var e = d + 1 === g.length ? l : h(f || A(g[d + 1]).action);
          n(g[d], e, f, a, d);
        }
      }
      function n(a, b, c, f, d) {
        k._directMap[a + ":" + c] = b;
        a = a.replace(/\s+/g, " ");
        var e = a.split(" ");
        1 < e.length
          ? m(a, e, b, c)
          : ((c = A(a, c)),
            (k._callbacks[c.key] = k._callbacks[c.key] || []),
            g(c.key, c.modifiers, { type: c.action }, f, a, d),
            k._callbacks[c.key][f ? "unshift" : "push"]({
              callback: b,
              modifiers: c.modifiers,
              action: c.action,
              seq: f,
              level: d,
              combo: a,
            }));
      }
      var k = this;
      a = a || u;
      if (!(k instanceof d)) return new d(a);
      k.target = a;
      k._callbacks = {};
      k._directMap = {};
      var p = {},
        q,
        y = !1,
        r = !1,
        x = !1;
      k._handleKey = function (a, d, e) {
        var f = g(a, d, e),
          h;
        d = {};
        var k = 0,
          l = !1;
        for (h = 0; h < f.length; ++h)
          f[h].seq && (k = Math.max(k, f[h].level));
        for (h = 0; h < f.length; ++h)
          f[h].seq
            ? f[h].level == k &&
              ((l = !0),
              (d[f[h].seq] = 1),
              c(f[h].callback, e, f[h].combo, f[h].seq))
            : l || c(f[h].callback, e, f[h].combo);
        f = "keypress" == e.type && r;
        e.type != x || w(a) || f || b(d);
        r = l && "keydown" == e.type;
      };
      k._bindMultiple = function (a, b, c) {
        for (var d = 0; d < a.length; ++d) n(a[d], b, c);
      };
      v(a, "keypress", e);
      v(a, "keydown", e);
      v(a, "keyup", e);
    }
    if (q) {
      var n = {
          8: "backspace",
          9: "tab",
          13: "enter",
          16: "shift",
          17: "ctrl",
          18: "alt",
          20: "capslock",
          27: "esc",
          32: "space",
          33: "pageup",
          34: "pagedown",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          45: "ins",
          46: "del",
          91: "meta",
          93: "meta",
          224: "meta",
        },
        r = {
          106: "*",
          107: "+",
          109: "-",
          110: ".",
          111: "/",
          186: ";",
          187: "=",
          188: ",",
          189: "-",
          190: ".",
          191: "/",
          192: "`",
          219: "[",
          220: "\\",
          221: "]",
          222: "'",
        },
        C = {
          "~": "`",
          "!": "1",
          "@": "2",
          "#": "3",
          $: "4",
          "%": "5",
          "^": "6",
          "&": "7",
          "*": "8",
          "(": "9",
          ")": "0",
          _: "-",
          "+": "=",
          ":": ";",
          '"': "'",
          "<": ",",
          ">": ".",
          "?": "/",
          "|": "\\",
        },
        B = {
          option: "alt",
          command: "meta",
          return: "enter",
          escape: "esc",
          plus: "+",
          mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform)
            ? "meta"
            : "ctrl",
        },
        p;
      for (c = 1; 20 > c; ++c) n[111 + c] = "f" + c;
      for (c = 0; 9 >= c; ++c) n[c + 96] = c.toString();
      d.prototype.bind = function (a, b, c) {
        a = a instanceof Array ? a : [a];
        this._bindMultiple.call(this, a, b, c);
        return this;
      };
      d.prototype.unbind = function (a, b) {
        return this.bind.call(this, a, function () {}, b);
      };
      d.prototype.trigger = function (a, b) {
        if (this._directMap[a + ":" + b]) this._directMap[a + ":" + b]({}, a);
        return this;
      };
      d.prototype.reset = function () {
        this._callbacks = {};
        this._directMap = {};
        return this;
      };
      d.prototype.stopCallback = function (a, b) {
        if (
          -1 < (" " + b.className + " ").indexOf(" mousetrap ") ||
          D(b, this.target)
        )
          return !1;
        if ("composedPath" in a && "function" === typeof a.composedPath) {
          var c = a.composedPath()[0];
          c !== a.target && (b = c);
        }
        return (
          "INPUT" == b.tagName ||
          "SELECT" == b.tagName ||
          "TEXTAREA" == b.tagName ||
          b.isContentEditable
        );
      };
      d.prototype.handleKey = function () {
        return this._handleKey.apply(this, arguments);
      };
      d.addKeycodes = function (a) {
        for (var b in a) a.hasOwnProperty(b) && (n[b] = a[b]);
        p = null;
      };
      d.init = function () {
        var a = d(u),
          b;
        for (b in a)
          "_" !== b.charAt(0) &&
            (d[b] = (function (b) {
              return function () {
                return a[b].apply(a, arguments);
              };
            })(b));
      };
      d.init();
      q.Mousetrap = d;
      "undefined" !== typeof module && module.exports && (module.exports = d);
      "function" === typeof define &&
        define.amd &&
        define(function () {
          return d;
        });
    }
  })(
    "undefined" !== typeof window ? window : null,
    "undefined" !== typeof window ? document : null
  );

  /* favicon
    $("link[href='https://www.yggtorrent.pe/favicon.ico']").attr("href","https://yggland.fr/assets/img/ygg32.png");
    $("link[href='https://www.yggtorrent.li/favicon.ico']").attr("href","https://yggland.fr/assets/img/ygg32.png");
    $("link[href='https://www.yggtorrent.fi/favicon.ico']").attr("href","https://yggland.fr/assets/img/ygg32.png"); */

  /* fonctions cookies */
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name + "=" + (value || "") + expires + ";domain=.yggtorrent.wtf;path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /* fonction conversion octets */
  function formatOctets(bytes, decimals = 2) {
    if (bytes === 0) return "~0";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  }

  /* calcul avancement */
  ferveX(document).ready(function () {
    var up = ferveX("#top_panel .ct li:first-child strong:first-child")
      .text()
      .trim();
    var upUnite = up.substring(up.length - 2);
    if (upUnite == "To") {
      up = up.slice(0, -2) * 1099511627776;
    } else {
      up = up.slice(0, -2) * 1073741824;
    }
    var down = ferveX("#top_panel .ct li:first-child strong:nth-child(2)")
      .text()
      .trim();
    var downUnite = down.substring(down.length - 2);
    if (downUnite == "To") {
      down = down.slice(0, -2) * 1099511627776;
    } else {
      down = down.slice(0, -2) * 1073741824;
    }
    var avancement = parseFloat(up) - parseFloat(down);
    ferveX("#top_panel .ct li:first-child").after(
      "<li><strong>" +
        (avancement < 0 ? "<1 !" : formatOctets(avancement)) +
        "</strong></li>"
    );
  });

  /* Sélecteur pour Recherche dynamique */
  if (!window.x) {
    x = {};
  }
  x.Selector = {};
  x.Selector.getSelected = function () {
    var t = "";
    if (window.getSelection) {
      t = window.getSelection();
    } else if (document.getSelection) {
      t = document.getSelection();
    } else if (document.selection) {
      t = document.selection.createRange().text;
    }
    return t;
  };

  var pageX;
  var pageY;
  var fervexTemp = "0";

  var sidebar;
  var preview;
  var preview_delai;
  var preview_height;
  var preview2;

  /* Icone recherche dynamique */
  var iconeRecherche = "ico_search";
  if (url.indexOf("/forum/") > -1) {
    iconeRecherche = "fa fa-search";
  }

  sidebar = getCookie("fervex_sidebar") == "on" ? " checked" : "";
  preview = getCookie("fervex_preview") == "on" ? " checked" : "";
  preview_delai =
    getCookie("fervex_preview_delai") !== null
      ? getCookie("fervex_preview_delai")
      : 400;
  preview_height =
    getCookie("fervex_preview_height") !== null
      ? getCookie("fervex_preview_height")
      : 300;
  preview2 = getCookie("fervex_preview2") == "on" ? " checked" : "";
  ferveX("body").prepend(
    '<div id="fervexConf" style="display:none;position:fixed;right:10px;top:10px;background:#21242b;z-index:999999;border:1px solid #777;color:#ddd;text-align:center;font-size: 13px;">' +
      '    <div style="border-bottom:1px solid #777; padding:8px; background:#222; cursor:move" id="fervexConfMenu">' +
      "        <b>YGGTools</b>" +
      "    </div>" +
      '    <div style="border-bottom:1px solid #777; padding:10px 10px 12px">' +
      '        <p style="margin-bottom:7px">Recherche sur sélection</p>' +
      '        <p style="margin-bottom:0">' +
      '            <button type="button" class="btn btn-sm btn-primary config-recherche-bas">Bas de l\'écran</button> ' +
      '            <button type="button" class="btn btn-sm btn-primary config-recherche-popup">Popup</button>' +
      "        </p>" +
      "    </div>" +
      '    <div style="border-bottom:1px solid #777; padding:10px 10px 12px">' +
      '        <p style="margin-bottom:7px">Recherche par défaut</p>' +
      '        <p style="margin-bottom:0">' +
      '            <button type="button" class="btn btn-sm btn-primary config-recherche-date-desc">Plus récent</button> ' +
      '            <button type="button" class="btn btn-sm btn-primary config-recherche-date-asc">Plus ancien</button>' +
      "        </p>" +
      "    </div>" +
      '    <div style="border-bottom:1px solid #777; padding:10px 10px 12px">' +
      '        <p style="margin-bottom:7px">Afficher sidebar ?</p>' +
      '        <p style="margin-bottom:0">' +
      '            <button type="button" class="btn btn-sm btn-primary config-sidebar-on">Oui</button> ' +
      '            <button type="button" class="btn btn-sm btn-primary config-sidebar-off">Non</button>' +
      "        </p>" +
      "    </div>" +
      '    <div style="border-bottom:1px solid #777; padding:10px 10px 12px">' +
      '        <p style="margin-bottom:7px">Afficher preview (survol) ?</p>' +
      '        <p style="margin-bottom:10px">' +
      '            <button type="button" class="btn btn-sm btn-primary config-preview-on">Oui</button> ' +
      '            <button type="button" class="btn btn-sm btn-primary config-preview-off">Non</button>' +
      "        </p>" +
      '        <p style="margin-bottom:10px">' +
      '            <input type="range" class="height_preview" min="100" max="600" step="10" value="' +
      preview_height +
      '"><br>' +
      '            Hauteur image : <span class="height_preview_value">' +
      preview_height +
      "</span> px" +
      "        </p>" +
      '        <p style="margin-bottom:0">' +
      '            <input type="range" class="tempo_preview" min="100" max="1000" step="100" value="' +
      preview_delai +
      '"><br>' +
      '            Délai : <span class="tempo_preview_value">' +
      preview_delai +
      "</span> ms" +
      "        </p>" +
      "    </div>" +
      '    <div style="border-bottom:1px solid #777; padding:10px 10px 12px">' +
      '        <p style="margin-bottom:7px">Afficher preview (fixe) ?<br><em style="color:#ccc;font-size:12px">[expérimental]</em></p>' +
      '        <p style="margin-bottom:0">' +
      '            <button type="button" class="btn btn-sm btn-primary config-preview2-on">Oui</button> ' +
      '            <button type="button" class="btn btn-sm btn-primary config-preview2-off">Non</button>' +
      "        </p>" +
      "    </div>" +
      '    <div style="padding:8px; background:#222; cursor: pointer;" id="close_menu_yggtools">Fermer</div>' +
      "</div>"
  );

  ferveX("#update-settings").append(
    "<h2>Paramètres YGGTools</h2>" +
      "<table>" +
      "	<tbody>" +
      "		<tr>" +
      '			<td style="width:240px">' +
      '				<a type="button" class="my-1 mr-1 btn btn-sm btn-primary config-recherche-bas">Bas de l\'écran</a>' +
      '				<a type="button" class="my-1 btn btn-sm btn-primary config-recherche-popup">En popup</a>' +
      "			</td>" +
      "			<td><strong>Recherche sur sélection de texte</strong></td>" +
      "		<tr>" +
      "		<tr>" +
      "			<td>" +
      '				<a type="button" class="my-1 mr-1 btn btn-sm btn-primary config-recherche-date-desc">Plus récent</a>' +
      '				<a type="button" class="my-1 btn btn-sm btn-primary config-recherche-date-asc">Plus ancien</a>' +
      "			</td>" +
      "			<td><strong>Tri du moteur de recherche par défaut</strong></td>" +
      "		<tr>" +
      "		<tr>" +
      "			<td>" +
      '				<div class="pretty p-default">' +
      '					<input type="checkbox" id="config_sidebar"' +
      sidebar +
      ">" +
      '					<div class="state"><label></label></div>' +
      "				</div>" +
      "			</td>" +
      "			<td><strong>Afficher la barre latérale (sidebar)</strong></td>" +
      "		<tr>" +
      "		<tr>" +
      "			<td>" +
      '				<div class="pretty p-default">' +
      '					<input type="checkbox" class=my-1" id="config_preview"' +
      preview +
      ">" +
      '					<div class="state"><label></label></div>' +
      "				</div>" +
      "			</td>" +
      "			<td>" +
      '				<p class="mb-2"><strong>Afficher les prévisualisations de jaquettes sur les torrents au survol de la souris</strong></p>' +
      '				<p class="mb-2"><input type="range" class="height_preview" min="100" max="600" step="10" value="' +
      preview_height +
      '"> Hauteur image : <span class="height_preview_value">' +
      preview_height +
      "</span> px</p>" +
      '				<p><input type="range" class="tempo_preview" min="100" max="1000" step="100" value="' +
      preview_delai +
      '"> Délai : <span class="tempo_preview_value">' +
      preview_delai +
      "</span> ms</p>" +
      "			</td>" +
      "		<tr>" +
      "		<tr>" +
      "			<td>" +
      '				<div class="pretty p-default">' +
      '					<input type="checkbox" class=my-1" id="config_preview2"' +
      preview2 +
      ">" +
      '					<div class="state"><label></label></div>' +
      "				</div>" +
      "			</td>" +
      "			<td><strong>Afficher les miniatures des jaquettes dans les listes de torrents</strong></td>" +
      "		<tr>" +
      "	</tbody>" +
      "</table>"
  );

  ferveX("#fervexConfMenu").on("mousedown", dragMouseDown);

  function dragMouseDown(e) {
    e.preventDefault();
    var elmnt = ferveX("#fervexConf")[0];

    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    pos3 = e.clientX;
    pos4 = e.clientY;

    ferveX(document).on("mouseup", closeDragElement);
    ferveX(document).on("mousemove", elementDrag);

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      var newRight = parseInt(ferveX(elmnt).css("right")) + pos1;

      ferveX(elmnt).css("top", elmnt.offsetTop - pos2 + "px");
      ferveX(elmnt).css("right", newRight + "px");
    }

    function closeDragElement() {
      ferveX(document).off("mouseup", closeDragElement);
      ferveX(document).off("mousemove", elementDrag);
    }
  }

  ferveX(".panel-menu-list")
    .first()
    .append(
      '<li><a href="#" id="open_menu_yggtools" rel="fervextip" title="Raccourci : CTRL+E">Paramètres YGGTools</a></li>'
    );

  var showMenu = 0;
  function showMenuYGGTools() {
    if (showMenu) {
      ferveX("#fervexConf").slideUp(500);
      showMenu = 0;
    } else {
      ferveX("#fervexConf").slideDown(500);
      showMenu = 1;
    }
  }

  /* config */
  Mousetrap.bind("ctrl+e", function (e) {
    e.preventDefault();
    showMenuYGGTools();
  });

  ferveX("#open_menu_yggtools").click(function (e) {
    e.preventDefault();
    showMenuYGGTools();
  });

  ferveX("#close_menu_yggtools").click(function (e) {
    e.preventDefault();
    showMenuYGGTools();
  });

  ferveX("#close_menu_yggtools")
    .on("mouseenter", function (e) {
      ferveX(this).addClass("bg-danger");
    })
    .on("mouseleave", function (e) {
      ferveX(this).removeClass("bg-danger");
    });

  ferveX(document).on("click", ".config-recherche-bas", function (e) {
    setCookie("fervex_recherche", "classique", 365);
    ferveX(".config-recherche-bas")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-recherche-popup")
      .removeClass("btn-success")
      .addClass("btn-primary");
  });
  ferveX(document).on("click", ".config-recherche-popup", function (e) {
    setCookie("fervex_recherche", "bulle", 365);
    ferveX(".config-recherche-popup")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-recherche-bas")
      .removeClass("btn-success")
      .addClass("btn-primary");
  });

  ferveX(document).on("click", ".config-recherche-date-desc", function (e) {
    setCookie("fervex_recherche_date", "desc", 365);
    ferveX(".config-recherche-date-desc")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-recherche-date-asc")
      .removeClass("btn-success")
      .addClass("btn-primary");
  });
  ferveX(document).on("click", ".config-recherche-date-asc", function (e) {
    setCookie("fervex_recherche_date", "asc", 365);
    ferveX(".config-recherche-date-asc")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-recherche-date-desc")
      .removeClass("btn-success")
      .addClass("btn-primary");
  });

  ferveX(document).on("click", ".config-sidebar-on", function (e) {
    setCookie("fervex_sidebar", "on", 365);
    ferveX("#cat").addClass("active");
    ferveX(".config-sidebar-on")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-sidebar-off")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_sidebar").prop("checked", true);
  });
  ferveX(document).on("click", ".config-sidebar-off", function (e) {
    setCookie("fervex_sidebar", "off", 365);
    ferveX("#cat").removeClass("active");
    ferveX(".config-sidebar-off")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-sidebar-on")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_sidebar").prop("checked", false);
  });
  ferveX(document).on("change", "#config_sidebar", function () {
    if (ferveX(this).is(":checked")) {
      setCookie("fervex_sidebar", "on", 365);
      ferveX("#cat").addClass("active");
      ferveX(".config-sidebar-on")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-sidebar-off")
        .removeClass("btn-success")
        .addClass("btn-primary");
    } else {
      setCookie("fervex_sidebar", "off", 365);
      ferveX("#cat").removeClass("active");
      ferveX(".config-sidebar-off")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-sidebar-on")
        .removeClass("btn-success")
        .addClass("btn-primary");
    }
  });

  ferveX(document).on("click", ".config-preview-on", function (e) {
    setCookie("fervex_preview", "on", 365);
    addPreview();
    ferveX(".config-preview-on")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-preview-off")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_preview").prop("checked", true);
  });
  ferveX(document).on("click", ".config-preview-off", function (e) {
    setCookie("fervex_preview", "off", 365);
    removePreview();
    ferveX(
      "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
    ).unbind("mouseenter mouseleave");
    ferveX(".config-preview-off")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-preview-on")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_preview").prop("checked", false);
  });
  ferveX(document).on("change", "#config_preview", function () {
    if (ferveX(this).is(":checked")) {
      setCookie("fervex_preview", "on", 365);
      setTimeout(function () {
        addPreview();
      }, 600);
      ferveX(".config-preview-on")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-preview-off")
        .removeClass("btn-success")
        .addClass("btn-primary");
    } else {
      setCookie("fervex_preview", "off", 365);
      removePreview();
      ferveX(".config-preview-off")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-preview-on")
        .removeClass("btn-success")
        .addClass("btn-primary");
    }
  });

  ferveX(document).on("click", ".config-preview2-on", function (e) {
    setCookie("fervex_preview2", "on", 365);
    getPreview();
    ferveX(".config-preview2-on")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-preview2-off")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_preview2").prop("checked", true);
  });
  ferveX(document).on("click", ".config-preview2-off", function (e) {
    setCookie("fervex_preview2", "off", 365);
    ferveX(".config-preview2-off")
      .removeClass("btn-primary")
      .addClass("btn-success");
    ferveX(".config-preview2-on")
      .removeClass("btn-success")
      .addClass("btn-primary");
    ferveX("#config_preview2").prop("checked", false);
  });
  ferveX(document).on("change", "#config_preview2", function () {
    if (ferveX(this).is(":checked")) {
      setCookie("fervex_preview2", "on", 365);
      getPreview();
      ferveX(".config-preview2-on")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-preview2-off")
        .removeClass("btn-success")
        .addClass("btn-primary");
    } else {
      setCookie("fervex_preview2", "off", 365);
      ferveX(".config-preview2-off")
        .removeClass("btn-primary")
        .addClass("btn-success");
      ferveX(".config-preview2-on")
        .removeClass("btn-success")
        .addClass("btn-primary");
    }
  });

  ferveX(document).on("input", ".tempo_preview", function () {
    removePreview();
    var newDelai = ferveX(".tempo_preview").val();
    ferveX(".tempo_preview").val(ferveX(".tempo_preview").val());
    ferveX(".tempo_preview_value").html(newDelai);
    setCookie("fervex_preview_delai", newDelai, 365);
    addPreview();
  });
  ferveX(document).on("input", ".height_preview", function () {
    removePreview();
    var newHeight = ferveX(".height_preview").val();
    ferveX(".height_preview").val(ferveX(".height_preview").val());
    ferveX(".height_preview_value").html(newHeight);
    setCookie("fervex_preview_height", newHeight, 365);
    addPreview();
  });

  var fervexSearch = getCookie("fervex_recherche");
  if (fervexSearch == "bulle") {
    ferveX(".fervexTools").toggleClass("fervexTools1 fervexTools2");
    ferveX(".config-recherche-popup").toggleClass("btn-primary btn-success");
  } else {
    ferveX(".config-recherche-bas").toggleClass("btn-primary btn-success");
  }
  var fervexSearchDate = getCookie("fervex_recherche_date");
  if (fervexSearchDate == null || fervexSearchDate == "desc") {
    ferveX("<input>")
      .attr({
        name: "order",
        type: "hidden",
        value: "desc",
      })
      .appendTo("form[action='https://www3.yggtorrent.wtf/engine/search']");
    ferveX("<input>")
      .attr({
        name: "sort",
        type: "hidden",
        value: "publish_date",
      })
      .appendTo("form[action='https://www3.yggtorrent.wtf/engine/search']");
    ferveX(".config-recherche-date-desc").toggleClass(
      "btn-primary btn-success"
    );
  } else if (fervexSearchDate == "asc") {
    ferveX("<input>")
      .attr({
        name: "order",
        type: "hidden",
        value: "asc",
      })
      .appendTo("form[action='https://www3.yggtorrent.wtf/engine/search']");
    ferveX("<input>")
      .attr({
        name: "sort",
        type: "hidden",
        value: "publish_date",
      })
      .appendTo("form[action='https://www3.yggtorrent.wtf/engine/search']");
    ferveX(".config-recherche-date-asc").toggleClass("btn-primary btn-success");
  }

  /* sidebar */
  var fervexSidebar = getCookie("fervex_sidebar");
  if (fervexSidebar == "on") {
    ferveX(".config-sidebar-on").toggleClass("btn-primary btn-success");
    ferveX("#config_sidebar").prop("checked", true);
  } else {
    ferveX(".config-sidebar-off").toggleClass("btn-primary btn-success");
    ferveX("#config_sidebar").prop("checked", false);
  }

  /* preview des images torrents au survol */
  var fervexPreview = getCookie("fervex_preview");
  if (fervexPreview == null || fervexPreview == "on") {
    setTimeout(function () {
      addPreview();
    }, 600);
    ferveX(".config-preview-on").toggleClass("btn-primary btn-success");
    ferveX("#config_preview").prop("checked", true);
  } else {
    ferveX(".config-preview-off").toggleClass("btn-primary btn-success");
    ferveX("#config_preview").prop("checked", false);
  }

  /* preview des images torrents dans la table (experimental) */
  var fervexPreview2 = getCookie("fervex_preview2");
  if (fervexPreview2 == "on") {
    setTimeout(function () {
      getPreview();
    }, 600);
    ferveX(".config-preview2-on").toggleClass("btn-primary btn-success");
    ferveX("#config_preview2").prop("checked", true);
  } else {
    ferveX(".config-preview2-off").toggleClass("btn-primary btn-success");
    ferveX("#config_preview2").prop("checked", false);
  }
  ferveX("#config_preview2").on("change", function () {
    if (ferveX(this).is(":checked")) {
      getPreview();
      ferveX(".config-preview-on").toggleClass("btn-primary btn-success");
      setCookie("fervex_preview2", "on", 365);
    } else {
      removePreview();
      ferveX(".config-preview-off").toggleClass("btn-primary btn-success");
      setCookie("fervex_preview2", "off", 365);
    }
  });

  /* fallback des previews pour les torrents ajoutés dynamiquement */
  ferveX("td[id^=display-more]").click(function (e) {
    var fervexPreview = getCookie("fervex_preview");
    if (fervexPreview == null || fervexPreview == "on") {
      setTimeout(function () {
        removePreview();
        addPreview();
      }, 800);
    }
    var fervexPreview2 = getCookie("fervex_preview2");
    if (fervexPreview2 == "on") {
      setTimeout(function () {
        getPreview();
      }, 800);
    }
  });

  function addPreview() {
    // Décalage horizontal et vertical
    var xOffset = 20;
    var yOffset = 15;
    // Hauteur fixe de l'image
    var imageHeight;
    var fervexImageHeight = getCookie("fervex_preview_height");
    if (fervexImageHeight == null) {
      imageHeight = 300;
    } else {
      imageHeight = fervexImageHeight;
    }
    // compteur
    var compteur;
    var delai;

    ferveX(
      "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
    )
      .on("mouseenter", function (e) {
        ferveX("#preview").remove();
        var href = ferveX(this).attr("href");
        delai =
          getCookie("fervex_preview_delai") !== null
            ? getCookie("fervex_preview_delai")
            : 400;
        compteur = setTimeout(function () {
          ferveX.get(
            href,
            function (data, status) {
              var targetSection = ferveX(data)
                .find("#send-comment")
                .prev(".content");
              if (targetSection.length === 0) {
                targetSection = ferveX(data).find(".content").eq(1);
              }
              var imgSrc = targetSection.find("img:first").attr("src");

              // Créer une nouvelle instance d'image
              var image = new Image();

              // Attacher un gestionnaire d'événement pour détecter quand l'image est chargée
              image.onload = function () {
                var imageRatio = image.height / image.width;

                if (imageRatio < 0.38) {
                  image = targetSection.find("img:eq(1)")[0];
                  imgSrc = image.src;
                }

                if (typeof imgSrc !== "undefined" && imgSrc.match("^http")) {
                  var previewHtml =
                    "<div id='preview' style='position:absolute;z-index:9999;border:1px solid #000;box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.7);display:none'><img src='" +
                    imgSrc +
                    "' alt='Image preview' style='max-height:" +
                    imageHeight +
                    "px'></div>";
                  ferveX("body").append(previewHtml);

                  var mouseY = e.pageY - ferveX(window).scrollTop(); // Coordonnée Y du curseur par rapport à la fenêtre visible

                  var totalHeight = mouseY + yOffset + imageHeight;
                  var windowHeight = ferveX(window).height();
                  var availableSpace = windowHeight - mouseY - yOffset;

                  if (
                    totalHeight > windowHeight &&
                    availableSpace < imageHeight
                  ) {
                    // Le curseur est en bas de l'écran et l'espace disponible en haut est insuffisant pour l'image
                    ferveX("#preview")
                      .css("top", e.pageY - yOffset - imageHeight + "px")
                      .css("bottom", "auto")
                      .css("left", e.pageX + xOffset + "px");
                  } else {
                    // Le curseur est en haut de l'écran ou l'espace disponible en haut est suffisant pour l'image
                    ferveX("#preview")
                      .css("top", e.pageY + yOffset + 8 + "px")
                      .css("bottom", "auto")
                      .css("left", e.pageX + xOffset + 6 + "px");
                  }

                  ferveX("#preview").fadeIn("fast");
                }
              };

              // Charger l'image
              image.src = imgSrc;
            },
            "html"
          );
        }, delai);
      })
      .on("mouseleave", function (e) {
        clearTimeout(compteur);
        ferveX("#preview").remove();
      });

    ferveX(
      "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
    ).on("mousemove", function (e) {
      var mouseY = e.pageY - ferveX(window).scrollTop(); // Coordonnée Y du curseur par rapport à la fenêtre visible

      var totalHeight = mouseY + yOffset + imageHeight;
      var windowHeight = ferveX(window).height();
      var availableSpace = windowHeight - mouseY - yOffset;

      if (totalHeight > windowHeight && availableSpace < imageHeight) {
        // Le curseur est en bas de l'écran et l'espace disponible en haut est insuffisant pour l'image
        ferveX("#preview")
          .css("top", e.pageY - yOffset - imageHeight + "px")
          .css("bottom", "auto")
          .css("left", e.pageX + xOffset + "px");
      } else {
        // Le curseur est en haut de l'écran ou l'espace disponible en haut est suffisant pour l'image
        ferveX("#preview")
          .css("top", e.pageY + yOffset + 8 + "px")
          .css("bottom", "auto")
          .css("left", e.pageX + xOffset + 6 + "px");
      }
    });

    ferveX(
      "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
    ).on("mouseout", function (e) {
      ferveX("#preview").remove();
    });
  }

  /* retrait de l'image de preview en cliquant dessus */
  ferveX(document).on("click", "#preview", function (e) {
    ferveX("#preview").remove();
  });

  /* retrait de l'image de preview en appuyant sur échap */
  ferveX(document).keyup(function (e) {
    if (e.key === "Escape") {
      ferveX("#preview").remove();
    }
  });
  function removePreview() {
    ferveX(
      "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
    )
      .off("mouseenter")
      .off("mouseleave");
  }

  function getPreview() {
    if (url.indexOf("/forum/") == -1) {
      ferveX(
        "a[id^='torrent_name'], a[href^='https://www3.yggtorrent.wtf/torrent/']"
      )
        .not(".image-preview")
        .each(function () {
          var that = ferveX(this);
          var href = that.attr("href");
          ferveX.get(href, function (data, status) {
            var targetSection = ferveX(data)
              .find("#send-comment")
              .prev(".content");
            if (targetSection.length === 0) {
              targetSection = ferveX(data).find(".content").eq(1);
            }
            var imgSrc = targetSection.find("img:first").attr("src");

            // Créer une nouvelle instance d'image
            var image = new Image();

            // Attacher un gestionnaire d'événement pour détecter quand l'image est chargée
            image.onload = function () {
              var imageRatio = image.height / image.width;

              if (imageRatio < 0.38) {
                image = targetSection.find("img:eq(1)")[0];
                imgSrc = image.src;
              }

              if (typeof imgSrc !== "undefined" && imgSrc.match("^http")) {
                that
                  .parent("td")
                  .prev()
                  .append(
                    '<img src="' +
                      imgSrc +
                      '" style="max-width:80px;height:auto;" class="image-preview">'
                  );
              }
            };

            // Charger l'image
            image.src = imgSrc;
          });
        });
    }
  }

  /* Recherche dynamique site+fofo */
  ferveX(document).bind("mouseup", function () {
    var texteSelection = x.Selector.getSelected();
    if (texteSelection != "" && fervexTemp != "1") {
      if (fervexSearch == "bulle") {
        ferveX(".fervexTools")
          .css({
            left: pageX + 5,
            top: pageY - 50,
          })
          .fadeIn(200);
        ferveX(".fervexTools a").html("<i class='" + iconeRecherche + "'></i>");
      } else {
        ferveX(".fervexTools")
          .css({
            right: 10,
            bottom: 6,
          })
          .fadeIn(200);
        ferveX(".fervexTools a").html(
          "<i class='" + iconeRecherche + "'></i> Rechercher sur YGG"
        );
      }
      ferveX(".fervexTools a").attr(
        "href",
        "https://www3.yggtorrent.wtf/engine/search?name=" +
          texteSelection +
          "&do=search"
      );
      ferveX(".fervexTools a").attr("title", "Rechercher : " + texteSelection);
      fervexTemp = "1";
    } else {
      ferveX(".fervexTools").fadeOut(200);
      fervexTemp = "0";
    }

    /* actualisation position du curseur */
    ferveX(document).on("mousedown", function (e) {
      pageX = e.pageX;
      pageY = e.pageY;
    });
  });

  /* fervextip */
  ferveX(document)
    .on("mouseenter", "[rel=fervextip]", function (e) {
      if (ferveX(this).attr("title") == "") {
        ferveX(this).attr("title", ferveX(".tipBody").html());
        ferveX(this).children("#fervextip").remove();
      }
      var tip = ferveX(this).attr("title");
      ferveX(this).attr("title", "");
      ferveX(this).append(
        '<div id="fervextip"><div class="tipBody">' + tip + "</div></div>"
      );
      ferveX("#fervextip").css("top", e.clientY + 10);
      ferveX("#fervextip").css("left", e.clientX + 20);
      ferveX("#fervextip").fadeIn("500");
    })
    .on("mousemove", "[rel=fervextip]", function (e) {
      ferveX("#fervextip").css("top", e.clientY + 10);
      ferveX("#fervextip").css("left", e.clientX + 20);
    })
    .on("mouseleave", "[rel=fervextip]", function (e) {
      ferveX(this).attr("title", ferveX(".tipBody").html());
      ferveX(this).children("#fervextip").remove();
    });

  var rechercheF = "";
  var rechercheU = "";
  var baseUrl = "";

  if (url.indexOf("/forum/") > -1) {
    ferveX(document).ready(function () {
      ferveX(".p-nav .focus-wrap-nav ul.p-nav-list li")
        .last()
        .after(
          '<li><div class="p-navEl"><a href="/user/account" class="p-navEl-link" data-nav-id="moncompte">Mon compte</a></div></li>'
        );
      ferveX(".p-nav .focus-wrap-nav ul.p-nav-list li")
        .last()
        .after(
          '<li><div class="p-navEl"><a href="/user/messages" class="p-navEl-link" data-nav-id="messagerie">Messagerie</a></div></li>'
        );
      ferveX(".p-nav .focus-wrap-nav ul.p-nav-list li")
        .last()
        .after(
          '<li><div class="p-navEl"><a href="/user/upload_torrent" class="p-navEl-link" data-nav-id="uploadtorrent">Upload torrent</a></div></li>'
        );
      ferveX(".p-nav .focus-wrap-nav ul.p-nav-list li")
        .last()
        .after(
          '<li><div class="p-navEl"><a href="/engine/search_users?nickname=" class="p-navEl-link" data-nav-id="chercheCopain" id="chercheCopain" title="Recherche un utilisateur sur YGG"></a></div></li>'
        );
      ferveX("body").prepend(
        '<div class="fervexTime d-flex align-items-center justify-content-center"><span class="badge">FR : <span id="hfr"></span> ↔ QC : <span id="hqc"></span></span></div>'
      );

      /* Horloge */
      horloge("hfr", 2);
      horloge("hqc", -4);
      function horloge(el, offset = 0) {
        if (typeof el == "string") {
          el = document.getElementById(el);
        }
        function actualiser() {
          var date = new Date();
          var str = date.getUTCHours() + offset;
          if (str < 0) {
            str = str + 24;
          }
          if (str > 24) {
            str = str - 24;
          }
          if (str == 24) {
            str = 0;
          }
          str = (str < 10 ? "0" : "") + str;
          str +=
            ":" + (date.getUTCMinutes() < 10 ? "0" : "") + date.getUTCMinutes();
          str +=
            ":" + (date.getUTCSeconds() < 10 ? "0" : "") + date.getUTCSeconds();
          el.innerHTML = str;
        }
        actualiser();
        setInterval(actualiser, 1000);
      }

      /* Recherche copain */
      ferveX("#chercheCopain").click(function (e) {
        e.preventDefault();
        var s = prompt("Recherche un utilisateur sur YGG :", "");
        //if (!(!s || s=='')) {window.location = '/engine/search_users?nickname='+s+'&do=search'};
        //if (!(!s || s=='')) {window.open(window.location.protocol+'//'+window.location.host+'/engine/search_users?nickname='+s+'&do=search')};
        if (!(!s || s == "")) {
          ferveX(
            '<a href="' +
              window.location.protocol +
              "//" +
              window.location.host +
              "/engine/search_users?nickname=" +
              s +
              '&do=search" target="blank"></a>'
          )[0].click();
        }
      });

      /* affichage du nb messages qu'on a écrits par post */
      if (
        ferveX("body").data("template") === "whats_new_posts" ||
        ferveX("body").data("template") === "forum_view"
      ) {
        ferveX(".structItem").each(function () {
          var title = ferveX(this).find(".structItem-title");
          var liste = ferveX(this).find(".structItem-statuses");
          if (!liste.length) {
            title.before("<ul class='structItem-statuses'></ul>");
          }
          liste = ferveX(this).find(".structItem-statuses");

          var structItemCellMetaElement = ferveX(this).find(
            ".structItem-cell--meta"
          );
          if (structItemCellMetaElement.length) {
            var structItemCellMeta = structItemCellMetaElement.attr("title");

            if (structItemCellMeta.includes("Premier message apprécié:")) {
              var messageCount2 = parseInt(
                structItemCellMeta.split(":")[1].trim()
              );
              if (messageCount2 !== 0) {
                var messageText2 =
                  "Le premier message<br>a reçu " + messageCount2 + " j'aime !";
                var messageElement2 = ferveX(
                  '<li style="font-size:12px; cursor: help" rel="fervextip" title="' +
                    messageText2 +
                    '">' +
                    messageCount2 +
                    " 🎔 </li>"
                );

                liste.prepend(messageElement2);
              }
            }
          }

          var secondaryTitleElement = ferveX(this).find(
            ".structItem-secondaryIcon"
          );
          if (secondaryTitleElement.length) {
            var secondaryTitle = secondaryTitleElement.attr("title");

            if (secondaryTitle.includes("Vous avez envoyé")) {
              var messageCount = parseInt(secondaryTitle.match(/\d+/)[0]);
              var messageText =
                messageCount === 1
                  ? "Vous avez écrit " + messageCount + " message"
                  : "Vous avez écrit " + messageCount + " messages";
              var messageElement = ferveX(
                '<li style="font-size:12px; cursor: help" rel="fervextip" title="' +
                  messageText +
                  '">' +
                  messageCount +
                  " 🗨</li>"
              );

              liste.prepend(messageElement);
            }
          }
        });
      }

      /* Création lien profil YGG */
      ferveX(".message-userDetails .message-name .username").each(function () {
        var userPseudo = ferveX.trim(ferveX(this).text());
        var userSection = ferveX(this).closest(".message-user");
        var userProfil,
          userInbox,
          userRatio,
          userUp,
          userUpOctet,
          userDown,
          userDownOctet,
          userDelta;
        var urlSearch =
          "https://www3.yggtorrent.wtf/engine/search_users?nickname=" +
          encodeURIComponent(userPseudo);

        // Requête pour charger le contenu HTML de la recherche user
        fetch(urlSearch)
          .then((response) => response.text())
          .then((responseText) => {
            var doc = ferveX(responseText);
            var usersFound = ferveX(doc).find(".card-title");

            usersFound.each(function () {
              var userFound = ferveX(this).text().trim();
              if (userFound === userPseudo) {
                userProfil = ferveX(this).parent().prev().attr("href");
                userUp = ferveX(this)
                  .parent()
                  .next()
                  .find(".pull-left strong")
                  .first()
                  .text();
                userDown = ferveX(this)
                  .parent()
                  .next()
                  .find(".pull-left strong")
                  .eq(1)
                  .text();

                var userUpUnite = userUp.substring(userUp.length - 2);
                if (userUpUnite == "Po") {
                  userUpOctet = userUp.slice(0, -2) * 1125899906842624;
                } else if (userUpUnite == "To") {
                  userUpOctet = userUp.slice(0, -2) * 1099511627776;
                } else {
                  userUpOctet = userUp.slice(0, -2) * 1073741824;
                }
                var userDownUnite = userDown.substring(userDown.length - 2);
                if (userDownUnite == "Po") {
                  userDownOctet = userDown.slice(0, -2) * 1125899906842624;
                } else if (userDownUnite == "To") {
                  userDownOctet = userDown.slice(0, -2) * 1099511627776;
                } else {
                  userDownOctet = userDown.slice(0, -2) * 1073741824;
                }
                userDelta = parseFloat(userUpOctet) - parseFloat(userDownOctet);
                userRatio = (
                  parseFloat(userUpOctet) / parseFloat(userDownOctet)
                ).toFixed(3);
                return false;
              }
            });
            if (userProfil) {
              userSection.append(
                '<div style="text-align:center; margin-top:12px; padding:5px 0;; cursor: default">' +
                  '    <div><i class="fa fa-user"></i> <a href="' +
                  userProfil +
                  '">Profil YGG</a></div>' +
                  '    <div style="padding: 5px">' +
                  '        <span class="userBanner userBanner--green message-userBanner" style="display:inline-block;background:#28a745;border-color:#28a745;" rel="fervextip" title="Quantité envoyée"><i class="fa fa-upload"></i> ' +
                  userUp.replace(/(\D+)$/, " $1") +
                  "</span>" +
                  '        <span class="userBanner userBanner--red message-userBanner" style="display:inline-block;background:#dc3545;border-color:#dc3545;" rel="fervextip" title="Quantité téléchargée"><i class="fa fa-download"></i> ' +
                  userDown.replace(/(\D+)$/, " $1") +
                  "</span>" +
                  "    </div>" +
                  '    <div style="padding: 5px">' +
                  '        <div style="font-size:90%"><span rel="fervextip" title="Ratio"><i class="fa fa-balance-scale"></i> ' +
                  userRatio +
                  "</span></div>" +
                  '        <div style="font-size:90%"><span rel="fervextip" title="Téléchargement restant">Δ ' +
                  (userDelta < 0
                    ? "<1 !"
                    : formatOctets(userDelta).replace(/(\D+)$/, " $1")) +
                  "</span></div>" +
                  "    </div>" +
                  "</div>"
              );
              ferveX(this).attr("data-profilygg", userProfil);
            }
          });
      });
      ferveX(document).on(
        "mouseenter",
        "a[data-xf-init=member-tooltip]",
        function (e) {
          var urlTemp = ferveX(this).attr("href");
          var regex = /members\/([^\/.]+)/;

          var match = urlTemp.match(regex);
          if (match !== null) {
            var userPseudo = match[1];
            var userProfil;
            var urlSearch =
              "https://www3.yggtorrent.wtf/engine/search_users?nickname=" +
              encodeURIComponent(userPseudo);

            fetch(urlSearch)
              .then((response) => response.text())
              .then((responseText) => {
                var doc = ferveX(responseText);
                var usersFound = ferveX(doc).find(".card-title");

                usersFound.each(function () {
                  var userFound = ferveX(this).text().trim();
                  if (userFound.toUpperCase() === userPseudo.toUpperCase()) {
                    userProfil = ferveX(this).parent().prev().attr("href");
                    return false;
                  }
                });
                if (userProfil) {
                  setTimeout(function () {
                    ferveX(".tooltip--member").each(function () {
                      if (
                        ferveX(this).find(".buttonGroup .profil-ygg").length ===
                        0
                      ) {
                        ferveX(this)
                          .find(".buttonGroup")
                          .append(
                            '<a href="' +
                              userProfil +
                              '" class="button--link button profil-ygg">Profil YGG</a>'
                          );
                      }
                    });
                  }, 1000);
                }
              });
          }
        }
      );

      if (url.indexOf("/forum/index.php?members/") > -1) {
        var userPseudo = ferveX(".memberHeader-name .username").text().trim();
        var userProfil;
        var urlSearch =
          "https://www3.yggtorrent.wtf/engine/search_users?nickname=" +
          encodeURIComponent(userPseudo);

        fetch(urlSearch)
          .then((response) => response.text())
          .then((responseText) => {
            var doc = ferveX(responseText);
            var usersFound = ferveX(doc).find(".card-title");

            usersFound.each(function () {
              var userFound = ferveX(this).text().trim();
              if (userFound === userPseudo) {
                userProfil = ferveX(this).parent().prev().attr("href");
                return false;
              }
            });
            if (userProfil)
              ferveX(".memberHeader-buttons").append(
                '<a href="' +
                  userProfil +
                  '" class="button button--link">Profil YGG</a>'
              );
          });
      }
    });
  } else {
    ferveX(document).ready(function () {
      /* Antipub */
      if (ferveX("#top nav li.color").is(':contains("Regarder la télé")')) {
        ferveX('#top nav li.color:contains("Regarder la télé")').remove();
        ferveX("#top nav li.color").css("width", "12.5%");
      }
      if (ferveX("#cat ul li").is(':contains("Télécharger en illimité")')) {
        ferveX('#cat ul li:contains("Télécharger en illimité")').remove();
      }
      if (ferveX("#cat ul li").is(':contains("Utiliser un VPN")')) {
        ferveX('#cat ul li:contains("Utiliser un VPN")').remove();
      }
      ferveX("header a.donate").remove();

      /* Fermeture Sidebar gauche */
      var fervexSidebar = getCookie("fervex_sidebar");
      if (fervexSidebar == null || fervexSidebar == "off") {
        if (ferveX("#cat").hasClass("active")) {
          ferveX(".open").click();
        }
      } else {
        if (!ferveX("#cat").hasClass("active")) {
          ferveX(".open").click();
        }
      }

      /* Agrandissement modal NFO */
      if (ferveX("#nfoModal .modal-dialog").hasClass("modal-sm")) {
        ferveX("#nfoModal .modal-dialog").toggleClass("modal-sm modal-lg");
      }

      /* Zupimages */
      if (url.indexOf("/user/upload_torrent") > -1) {
        ferveX(
          '<div style="position:absolute;right:20px;top:-95px;" class="p-2 bg-light border"><iframe src="https://www.zupimages.net/api/index.php?background=transparent&amp;color=000000&amp;header=yes&amp;lastimage=yes" width="210" height="120" frameborder="no" scrolling="no"></iframe></div>'
        ).appendTo("#upload-torrent > div > div.row:nth-child(8)");
      }

      /* Sauvegarde Prez (édition) */
      if (url.indexOf("/user/edit_torrent") > -1) {
        /* titre torrent */
        ferveX(
          "#edit-torrent>div>div:nth-child(5)>div.col-md-2.field-label-responsive>label"
        ).after(
          '<div style="margin-top: -5px;"><a href="" id="save-titre">Sauvegarder</a></div>'
        );

        ferveX("#save-titre").click(function (e) {
          e.preventDefault();
          var titreperso = ferveX("#edit-torrent input#name").val();
          localStorage.setItem("titreperso", titreperso);
        });

        /* contenu prez */
        ferveX(
          "#edit-torrent>div>div:nth-child(6)>div.col-md-2.field-label-responsive>label"
        ).after(
          '<button class="btn btn-secondary my-2" id="save-prez">Sauvegarder la prez</button>'
        );

        ferveX("#save-prez").click(function (e) {
          e.preventDefault();
          var prez = ferveX(".wysibb-text-editor").html();
          localStorage.setItem("prezperso", prez);
        });
      }

      /* Stockage Prez (création) */
      if (url.indexOf("/user/upload_torrent") > -1) {
        /* titre torrent */
        if (
          localStorage.getItem("titreperso") !== null &&
          localStorage.getItem("titreperso") !== ""
        ) {
          ferveX(
            "#upload-torrent>div>div:nth-child(8)>div.col-md-2.field-label-responsive>label"
          ).after(
            '<div style="margin-top: -5px;"><a href="" id="save-titre">Sauvegarder</a> | <a href="" id="get-titre">Restaurer</a></div>'
          );
        } else {
          ferveX(
            "#upload-torrent>div>div:nth-child(8)>div.col-md-2.field-label-responsive>label"
          ).after(
            '<div style="margin-top: -5px;"><a href="" id="save-titre">Sauvegarder</a></div>'
          );
        }

        ferveX("#save-titre").click(function (e) {
          e.preventDefault();
          var titreperso = ferveX("#upload-torrent input#name").val();
          localStorage.setItem("titreperso", titreperso);
        });
        ferveX("#get-titre").click(function (e) {
          e.preventDefault();
          var titreperso = localStorage.getItem("titreperso");
          ferveX("#upload-torrent input#name").val(titreperso);
        });

        /* contenu prez */
        if (
          localStorage.getItem("prezperso") !== null &&
          localStorage.getItem("prezperso") !== ""
        ) {
          ferveX("#upload-torrent button[type=submit]").after(
            '<button class="btn btn-secondary mx-1" id="get-prez">Restaurer la prez sauvegardée</button>'
          );
        }
        ferveX("#upload-torrent button[type=submit]").after(
          '<button class="btn btn-secondary mx-1" id="save-prez">Sauvegarder la prez</button>'
        );

        ferveX("#save-prez").click(function (e) {
          e.preventDefault();
          var prez = ferveX(".wysibb-text-editor").html();
          localStorage.setItem("prezperso", prez);
        });
        ferveX("#get-prez").click(function (e) {
          e.preventDefault();
          var prez = localStorage.getItem("prezperso");
          ferveX(".wysibb-text-editor").html(prez);
        });
      }

      /* Boutons de recherche */
      ferveX(".search-criteria button.solo")
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-SportD" style="' +
            styleBoutonA +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Sport (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-EmissionD" style="' +
            styleBoutonA +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Emission (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-DocusD"   style="' +
            styleBoutonA +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Docus (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-SpectacleD"   style="' +
            styleBoutonA +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Spectacle (Date)</a>'
        )
        .after("<br/>")
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-animeseriesD" style="' +
            styleBoutonS +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> AnimeSéries (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-animeseriesP" style="' +
            styleBoutonS +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> AnimeSéries (Poids)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-animeD"   style="' +
            styleBoutonF +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102073131718091.png" class="pr-1" style="padding-bottom: 2px;"> Anime (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-animeP"   style="' +
            styleBoutonF +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102073131718091.png" class="pr-1" style="padding-bottom: 2px;"> Anime (Poids)</a>'
        )
        .after("<br/>")
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-seriesD" style="' +
            styleBoutonS +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Séries (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-seriesP" style="' +
            styleBoutonS +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102062556828242.png" class="pr-1" style="padding-bottom: 2px;"> Séries (Poids)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-filmD"   style="' +
            styleBoutonF +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102073131718091.png" class="pr-1" style="padding-bottom: 2px;"> Films (Date)</a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-filmP"   style="' +
            styleBoutonF +
            '"><img src="https://nsa40.casimages.com/img/2021/01/02/210102073131718091.png" class="pr-1" style="padding-bottom: 2px;"> Films (Poids)</a>'
        )
        .after("<br/>")
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-2024"   style="' +
            styleBoutonD +
            '"><img class="pr-1" style="padding-bottom: 2px;">2024 </a>'
        )
        .after(
          ' <a href="" class="recherche-fervex" id="recherche-2023"   style="' +
            styleBoutonD +
            '"><img class="pr-1" style="padding-bottom: 2px;">2023 </a>'
        )
        .after(
          '<a href="" class="recherche-fervex w65" rel="fervextip" id="recherche-ok" style="' +
            styleBouton +
            '" title="Ajouter les guillemets automatiquement !"><i class="ico_quote-left"></i> <i class="ico_quote-right"></i></a>'
        );

      ferveX("#recherche-ok").after(
        ' <div style="width:100%;height:10px;display:block"> </div>'
      );

      ferveX(".search-criteria button.solo").css({
        display: "inline-block",
        "font-size": "16px",
      });

      ferveX(".search-criteria .alone").css("text-align", "center");
      ferveX(".bulle").css({
        "border-radius": "16px",
        "min-width": "16px",
        width: "auto",
        padding: "0 5px",
      });

      ferveX(".recherche-fervex, .search-criteria button.solo").hover(
        function () {
          ferveX(this).addClass("butonFervexHover");
        },
        function () {
          ferveX(this).removeClass("butonFervexHover");
        }
      );

      var rechercheGuillemet = false;
      ferveX("#recherche-ok").click(function (e) {
        e.preventDefault();
        if (rechercheGuillemet) {
          var temp = ferveX(".search-criteria input[name='name']")
            .val()
            .replace(/"/g, "");
          ferveX(".search-criteria input[name='name']").val(temp);
          ferveX(this).css("background", "#4e5c6f");
          rechercheGuillemet = false;
        } else {
          var temp = ferveX(".search-criteria input[name='name']")
            .val()
            .replace(/"/g, " ")
            .trim();
          if (temp != "") {
            temp = temp.split(" ").join('" "');
            ferveX(".search-criteria input[name='name']").val('"' + temp + '"');
            ferveX(this).css("background", "#30353c");
            rechercheGuillemet = true;
          }
        }
      });
      if (url.indexOf("/engine/search") > -1) {
        let recherchePrecedente = new URLSearchParams(
          document.location.search.substring(1)
        );
        let recherchePrecedenteValeur = recherchePrecedente.get("name");
        if (recherchePrecedenteValeur != null) {
          ferveX(".search-criteria input[name='name']").val(
            recherchePrecedenteValeur
          );
        }
      }

      ferveX("#recherche-2023").click(function (e) {
        e.preventDefault();
        window.location =
          baseUrl +
          "search?name=2023+&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2183&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-2024").click(function (e) {
        e.preventDefault();
        window.location =
          baseUrl +
          "search?name=2024+&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2183&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-filmP").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2183&do=search&order=desc&sort=size";
      });

      ferveX("#recherche-filmD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2183&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-seriesP").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2184&do=search&order=desc&sort=size";
      });

      ferveX("#recherche-seriesD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2184&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-animeP").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2178&do=search&order=desc&sort=size";
      });

      ferveX("#recherche-animeD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2178&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-animeseriesP").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2179&do=search&order=desc&sort=size";
      });

      ferveX("#recherche-animeseriesD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2179&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-SportD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2186&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-EmissionD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2182&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-DocusD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2181&do=search&order=desc&sort=publish_date";
      });

      ferveX("#recherche-SpectacleD").click(function (e) {
        e.preventDefault();
        rechercheF = ferveX(".search-criteria input[name='name']").val();
        rechercheU = ferveX(".search-criteria input[name='uploader']").val();
        window.location =
          baseUrl +
          "search?name=" +
          rechercheF +
          "&description=&file=&uploader=" +
          rechercheU +
          "&category=2145&sub_category=2185&do=search&order=desc&sort=publish_date";
      });

      /* bouton DL torrent */
      function gettorrent() {
        ferveX("a[id^=get_nfo]")
          .not(".ico-dl")
          .each(function () {
            var that = ferveX(this);
            that.parent("td").css("white-space", "nowrap");
            var torrent = that.attr("target");
            var href = that.parent("td").prev().find("a").attr("href");

            that.before(
              '<a href="/engine/download_torrent?id=' +
                torrent +
                '" rel="fervextip" title="Télécharger le torrent" class="py-1 pr-2 mr-2 fervexDL" style="border-right:1px solid #ccc;"><span class="ico_download text-primary"></span></a>'
            );
            that.before(
              '<a href="#" data-refresh="' +
                href +
                '" rel="fervextip" title="Stats du torrent en temps réel" class="py-1 pr-2 mr-2 fervexRefresh" style="border-right:1px solid #ccc;"><span class="ico_refresh text-success"></span></a>'
            );
            that.addClass("ico-dl");

            var link = ferveX("<span>", {
              "data-lastcom": href,
              rel: "fervextip",
              title: "Afficher les derniers commentaires",
              class: "fervexLastCom",
              style: "cursor:pointer",
            });

            that.parent("td").next().wrapInner(link);
          });

        ferveX(".fervexDL span, .fervexRefresh span, .fervexLastCom").hover(
          function () {
            ferveX(this).addClass("text-danger");
          },
          function () {
            ferveX(this).removeClass("text-danger");
          }
        );

        ferveX("[data-lastcom]").on("click", function (e) {
          e.preventDefault();
          var that = ferveX(this);
          var href = that.data("lastcom");

          ferveX.get(href, function (data, status) {
            var comms = ferveX(data).find("#comm").html();
            ferveX("body").prepend(
              '<div class="modal fade" id="lastComModal" tabindex="-1" role="dialog" aria-labelledby="lastComModalLabel" aria-hidden="true">' +
                '  <div class="modal-dialog modal-lg" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header border-dark">' +
                '        <h5 class="modal-title pr-3" id="lastComModalLabel">Derniers commentaires du torrent</h5>' +
                '        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">' +
                '          <span aria-hidden="true">&times;</span>' +
                "        </button>" +
                "      </div>" +
                '      <div class="modal-body p-0">' +
                "          <div>" +
                comms +
                "</div>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>"
            );
            $("#lastComModal").modal("show");
          });
        });

        ferveX("a[data-refresh]").on("click", function (e) {
          e.preventDefault();
          var that = ferveX(this);
          that.find("span").addClass("ico_spin");
          var href = that.data("refresh");

          ferveX.get(href, function (data, status) {
            var stats = ferveX(data).find("#register").length > 0 ? 1 : 0;
            var hashTorrent = ferveX(data)
              .find(
                "#informationsContainer > div > table > tbody > tr:nth-child(5) > td:nth-child(2)"
              )
              .text();
            var random = Math.random().toString(36).slice(2);
            var getStats =
              "https://yggland.fr/FAQ-Tutos/info-torrent.php?hash=" +
              hashTorrent +
              "&seeders&leechers&completed&random";

            ferveX("#statsModal").remove();
            ferveX.get(getStats, function (data2, status) {
              var statsTorrent = data2.split("|");

              ferveX("body").prepend(
                '<div class="modal fade" id="statsModal" tabindex="-1" role="dialog" aria-labelledby="statsModalLabel" aria-hidden="true">' +
                  '  <div class="modal-dialog" style="max-width: fit-content" role="document">' +
                  '    <div class="modal-content">' +
                  '      <div class="modal-header border-dark">' +
                  '        <h5 class="modal-title pr-3" id="statsModalLabel">Stats torrent en temps réel</h5>' +
                  '        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">' +
                  '          <span aria-hidden="true">&times;</span>' +
                  "        </button>" +
                  "      </div>" +
                  '      <div class="modal-body p-0">' +
                  '        <table class="table table-bordered dark bg-dark text-light text-center m-0">' +
                  "          <tbody>" +
                  "            <tr>" +
                  '              <td class="border-black" width="115">Seeders</th>' +
                  '              <td class="border-black" width="115">Leechers</th>' +
                  '              <td class="border-black" width="115">Complétés</th>' +
                  "            </tr>" +
                  "            <tr>" +
                  '              <td class="border-black text-success text-bold">' +
                  statsTorrent[0] +
                  "</td>" +
                  '              <td class="border-black text-danger text-bold">' +
                  statsTorrent[1] +
                  "</td>" +
                  '              <td class="border-black text-light text-bold">' +
                  statsTorrent[2] +
                  "</td>" +
                  "            </tr>" +
                  "          </tbody>" +
                  "        </table>" +
                  "      </div>" +
                  "    </div>" +
                  "  </div>" +
                  "</div>"
              );
              $("#statsModal").modal("show");
              that.find("span").removeClass("ico_spin");
            });
          });
        });
      }

      if (url.indexOf("/engine/search") > -1) {
        gettorrent();
      } else {
        setTimeout(gettorrent, 800);
      }

      ferveX("td[id^=display-more]").click(function (e) {
        setTimeout(gettorrent, 800);
      });

      /* notif */
      if (url.indexOf("/user/notifications") > -1) {
        var notifNonLues = parseInt(
          ferveX('#top_panel [data-balloon="Notifications non lues"]').text()
        );
        var rows = ferveX("table.notifications tr");
        var rowCount = rows.length;

        for (var i = 0; i < rowCount; i++) {
          var row = ferveX(rows[i]);
          var td1 = row.find("td:first-child()");
          var td2 = td1.next();
          var td3 = td2.next();
          var hrefuser = td2.find("strong").eq(0).text();
          var hreftorrent = td2.find("strong").eq(1).text();
          var hrefstatus = td2.find("font").eq(0).text();
          var hrefpending = td2.find("font").eq(1).text();
          var link = row.attr("onclick");
          var hrefval = link.substring(
            link.indexOf("'") + 1,
            link.lastIndexOf("'")
          );

          var replacementHtml = "";
          if (hreftorrent.length) {
            replacementHtml =
              "<b>" +
              hrefuser +
              '</b> a commenté <a href="' +
              hrefval +
              '" class="text-primary"><b>' +
              hreftorrent +
              "</b></a>";
            td3
              .prepend(
                '<i class="ico_eye text-primary get-notif mr-1" style="cursor:pointer" data-url="' +
                  hrefval +
                  '"></i> '
              )
              .addClass("text-nowrap");
          } else if (hrefstatus.length) {
            var typepending =
              hrefstatus === "approuvé"
                ? "success"
                : hrefstatus === "supprimé"
                ? "danger"
                : "warning";
            replacementHtml =
              "<b>" +
              hrefuser +
              '</b><br><span class="text-' +
              typepending +
              '">' +
              hrefstatus +
              '</span> par la TP &rarr; <a href="' +
              hrefval +
              '" class="text-' +
              typepending +
              '"><b>' +
              hrefpending +
              "</b></a>";
          } else {
            replacementHtml =
              '<a href="' +
              hrefval +
              '" class="text-primary"><b>' +
              td2.html() +
              "</b></a>";
          }

          if (replacementHtml) {
            td2.html(replacementHtml);
          }

          row
            .prop("onclick", null)
            .removeAttr("onclick")
            .off("click")
            .css("cursor", "default");

          if (i < notifNonLues) {
            td1.append(" ⚡");
          }
        }

        ferveX(".get-notif").on("click", function (e) {
          e.preventDefault();
          var that = ferveX(this);
          var href = that.data("url");

          ferveX.get(href, function (data, status) {
            var comm = ferveX(data).find("#focusedComment").html();
            ferveX("body").prepend(
              '<div class="modal fade" id="getNotifModal" tabindex="-1" role="dialog" aria-labelledby="getNotifModalLabel" aria-hidden="true">' +
                '  <div class="modal-dialog modal-lg" style="max-width:800px!important" role="document">' +
                '    <div class="modal-content">' +
                '      <div class="modal-header border-dark">' +
                '        <h5 class="modal-title pr-3" id="getNotifModalLabel">Commentaire reçu</h5>' +
                '        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">' +
                '          <span aria-hidden="true">&times;</span>' +
                "        </button>" +
                "      </div>" +
                '      <div class="modal-body p-0">' +
                "          <div>" +
                comm +
                "</div>" +
                "      </div>" +
                "    </div>" +
                "  </div>" +
                "</div>"
            );
            $("#getNotifModal").modal("show");
          });
        });

        ferveX(".get-notif").hover(
          function () {
            ferveX(this).addClass("text-danger");
          },
          function () {
            ferveX(this).removeClass("text-danger");
          }
        );
      }

      if (
        url.indexOf("/engine/search") > -1 ||
        url.indexOf("/torrents/exclus") > -1
      ) {
        var table = ferveX(".results .table").DataTable({
          dom:
            "<'row'<'col-12 text-center mt-3'f>>" +
            "<'row'<'col-12'tr>>" +
            "<'row'<'col-12 text-center my-3'i>>",
          stateSave: false,
          autoWidth: false,
          order: [],
          ordering: false,
          paging: false,
          language: {
            processing: "Traitement en cours...",
            search: "",
            searchPlaceholder: "Filtrer la page en cours",
            lengthMenu: "_MENU_ torrents par page",
            info: "_END_ torrents affichés ",
            infoEmpty: "Aucun torrent",
            infoFiltered: "(filtrés sur _MAX_ torrents de la page)",
            infoPostFix: "",
            loadingRecords: "Chargement...",
            zeroRecords: "Aucun torrent à afficher",
            emptyTable: "Aucune donnée disponible",
            paginate: {
              first: "Premier",
              previous: "<i class='fas fa-chevron-left'></i>",
              next: "<i class='fas fa-chevron-right'></i>",
              last: "Dernier",
            },
            aria: {
              sortAscending:
                ": activer pour trier la colonne par ordre croissant",
              sortDescending:
                ": activer pour trier la colonne par ordre décroissant",
            },
            select: {
              rows: {
                _: "%d lignes sélectionnées",
                0: "Aucune ligne sélectionnée",
                1: "1 ligne sélectionnée",
              },
            },
            buttons: {
              colvis: "Colonnes",
              copy: "Copier",
              print: "Imprimer",
            },
          },
        });
      }

      /* filtrage Downloads */
      if (url.indexOf("/user/downloads") > -1) {
        ferveX(
          '<div class="text-center pt-2"><label><input type="search" class="form-control form-control-sm" id="rechercheDL" placeholder="Filtrer les torrents"></label></div>'
        ).insertAfter("#middle main .inbox");

        ferveX("#rechercheDL").on("keyup", function () {
          var value = ferveX(this).val().toLowerCase();
          ferveX("#middle main .inbox tr").filter(function () {
            ferveX(this).toggle(
              ferveX(this)
                .find("td:eq(1)")
                .text()
                .toLowerCase()
                .indexOf(value) > -1
            );
          });
        });
      }

      /* test torrent via le hash */
      if (url.indexOf("/torrent/") > -1) {
        var hashtorrent = ferveX(
          "#informationsContainer > div > table > tbody > tr:nth-child(5) > td:nth-child(2)"
        ).text();
        ferveX(
          "#informationsContainer > div > table > tbody > tr:nth-child(5) > td:nth-child(2)"
        ).append(
          '<a href="https://yggland.fr/FAQ-Tutos/test-torrent-tracker-ygg.php?hash=' +
            hashtorrent +
            '" class="btn btn-success ml-2" target="_blank" style="padding: 2px 6px">Tester</a>'
        );
      }

      /* Correction liens sur le profil */
      if (url.indexOf("/user/account") > -1) {
        var username = ferveX(
          ".detail-account tbody tr:first-child td:nth-child(2) strong"
        )
          .text()
          .trim();
        var urlTorrents =
          "/engine/search?name=&description=&file=&uploader=" +
          username +
          "&category=all&sub_category=&do=search";
        var profile = ferveX(".card-footer a").attr("href");
        var urlComments = profile + "?action=show_comments";
        ferveX(".detail-account tbody tr:nth-child(4) a").attr(
          "href",
          urlTorrents
        );
        ferveX(".detail-account tbody tr:nth-child(5) a").attr(
          "href",
          urlComments
        );
      }

      /* Seed a zéro dans ses propres torrents */
      if (url.indexOf("/user/my_torrents") > -1) {
        async function getAllTableData() {
          let allTableData = [];
          let currentPage = 0;
          let totalNumberOfPages = 0;

          const lastPaginationLink = ferveX("ul.pagination li:last-child a");
          if (lastPaginationLink.attr("data-ci-pagination-page")) {
            totalNumberOfPages = parseInt(
              lastPaginationLink.attr("data-ci-pagination-page")
            );
          }

          console.log("Total number of pages:", totalNumberOfPages);

          while (true) {
            let pageData = await getTableData(currentPage);
            if (pageData.length === 0) {
              break;
            }
            allTableData = allTableData.concat(pageData);
            currentPage++;
            updateProgressBar(currentPage, totalNumberOfPages);
          }
          return allTableData;
        }

        async function getTableData(pageNumber) {
          let url = `https://www3.yggtorrent.wtf/user/my_torrents?page=${
            pageNumber * 50
          }`;
          let response = await ferveX.ajax({ url });
          let tempDiv = ferveX("<div>");
          tempDiv.html(response);
          let tableRows = tempDiv.find(".results table tbody tr");

          return tableRows.toArray();
        }

        function filterRowsWithZero(data) {
          return data.filter((row) => {
            let avantDerniereColonne = row.cells[row.cells.length - 3];
            return avantDerniereColonne.textContent.trim() === "0";
          });
        }

        function displayFilteredTable(filteredData) {
          ferveX(".table-responsive.results").remove();

          let newTableHTML = '<table class="table">';
          newTableHTML += "<thead>";
          newTableHTML += "<tr>";
          newTableHTML += '<th class="no">Type</th>';
          newTableHTML += '<th class="no">Nom</th>';
          newTableHTML += '<th class="no">NFO</th>';
          newTableHTML += '<th class="no">Comm.</th>';
          newTableHTML += '<th class="no">Age</th>';
          newTableHTML += '<th class="no">Taille</th>';
          newTableHTML += '<th class="no">Compl.</th>';
          newTableHTML += '<th class="no">Seed</th>';
          newTableHTML += '<th class="no">Leech</th>';
          newTableHTML += '<th class="no"></th>';
          newTableHTML += "</tr>";
          newTableHTML += "</thead>";
          newTableHTML += "<tbody>";
          filteredData.forEach((row) => {
            newTableHTML +=
              '<tr torrent-id="' + ferveX(row).attr("torrent-id") + '">';
            ferveX(row)
              .children("td")
              .each(function () {
                newTableHTML += "<td>" + ferveX(this).html() + "</td>";
              });
            newTableHTML += "</tr>";
          });
          newTableHTML += "</tbody>";
          newTableHTML += "</table>";

          ferveX('<div class="table-responsive results" style="width: 100%">')
            .html(newTableHTML)
            .insertAfter("#btnFilter");
          ferveX("#btnFilter").replaceWith(
            '<h2 class="mb-3">' +
              filteredData.length +
              " Torrent(s) sans Seed :</h2>"
          );
        }

        ferveX(".table-responsive.results").before(
          '<button class="btn btn-success p-1 mb-3" id="btnFilter" style="text-transform:none">Filtrer torrents sans Seed</button>'
        );

        function updateProgressBar(currentPage, totalNumberOfPages) {
          const progressPercentage = Math.floor(
            (currentPage / totalNumberOfPages) * 100
          );
          const progressBar = ferveX("#progressBar .progress-bar");
          progressBar.css("width", progressPercentage + "%");
          progressBar.text(progressPercentage + "%");
        }

        ferveX("#btnFilter").on("click", async function () {
          try {
            ferveX("#progressBar").remove();
            ferveX(".table-responsive.results").before(
              '<div class="progress mb-3" id="progressBar" style="height: 22px;">' +
                '<div class="progress-bar d-flex flex-column justify-content-center h-100" role="progress-bar" style="width: 0%;font-size:0.9rem" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>' +
                "</div>"
            );

            const allData = await getAllTableData();
            const filteredData = filterRowsWithZero(allData);

            const totalNumberOfPages = Math.ceil(allData.length / 50);
            displayFilteredTable(filteredData);
            ferveX("ul.pagination")
              .parent("section")
              .parent()
              .parent("section")
              .remove();

            updateProgressBar(totalNumberOfPages, totalNumberOfPages);

            gettorrent();
            var fervexPreview = getCookie("fervex_preview");
            if (fervexPreview == null || fervexPreview == "on") {
              setTimeout(function () {
                removePreview();
                addPreview();
              }, 400);
            }

            ferveX(document).on("click", "a#remove", function () {
              var self = this;
              var conf = confirm(
                "Confirmez-vous la suppression de ce torrent ?"
              );
              if (conf) {
                var t_id = $(this).closest("tr").attr("torrent-id");
                $.post("https://www3.yggtorrent.wtf/user/remove_torrent", {
                  id: t_id,
                })
                  .done(function (id) {
                    $(self).closest("tr").hide(500);
                  })
                  .fail(function (xhr, status, error) {
                    alert(error);
                  });
              }
            });

            ferveX("#progressBar").remove();
          } catch (error) {
            console.error("Une erreur s'est produite:", error);
          }
        });
      }
    });
  }
});
