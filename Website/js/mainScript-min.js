var myApp = angular.module("weziro", []), queryString = function () { for (var n = {}, o = window.location.search.substring(1).split("&"), e = 0; e < o.length; e++) { var i = o[e].split("="); if (void 0 === n[i[0]]) n[i[0]] = decodeURIComponent(i[1]); else if ("string" == typeof n[i[0]]) { var t = [n[i[0]], decodeURIComponent(i[1])]; n[i[0]] = t } else n[i[0]].push(decodeURIComponent(i[1])) } return n }(), setLanguage = function () { $.ajax({ url: "http://ipinfo.io", dataType: "jsonp" }).done(function (n) { var o = !1; switch (n.country) { case "TR": case "GB": o = !0 }o ? window.location.assign("/" + n.country) : window.location.assign("/GB") }) };