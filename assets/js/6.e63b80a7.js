(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9,12],{576:function(t,n,e){},577:function(t,n,e){"use strict";var i=e(317),s=e(319),a=e(12),r=e(35),l=e(578),o=e(321),u=e(18),c=e(30),p=e(318),f=e(118),d=e(320),h=e(2),g=d.UNSUPPORTED_Y,v=[].push,m=Math.min;i("split",(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=c(r(this)),a=void 0===e?4294967295:e>>>0;if(0===a)return[];if(void 0===t)return[i];if(!s(t))return n.call(i,t,a);for(var l,o,u,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,d+"g");(l=f.call(g,i))&&!((o=g.lastIndex)>h&&(p.push(i.slice(h,l.index)),l.length>1&&l.index<i.length&&v.apply(p,l.slice(1)),u=l[0].length,h=o,p.length>=a));)g.lastIndex===l.index&&g.lastIndex++;return h===i.length?!u&&g.test("")||p.push(""):p.push(i.slice(h)),p.length>a?p.slice(0,a):p}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var s=r(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,s,e):i.call(c(s),n,e)},function(t,s){var r=a(this),f=c(t),d=e(i,r,f,s,i!==n);if(d.done)return d.value;var h=l(r,RegExp),v=r.unicode,x=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(g?"g":"y"),_=new h(g?"^(?:"+r.source+")":r,x),k=void 0===s?4294967295:s>>>0;if(0===k)return[];if(0===f.length)return null===p(_,f)?[f]:[];for(var b=0,w=0,y=[];w<f.length;){_.lastIndex=g?0:w;var I,C=p(_,g?f.slice(w):f);if(null===C||(I=m(u(_.lastIndex+(g?w:0)),f.length))===b)w=o(f,w,v);else{if(y.push(f.slice(b,w)),y.length===k)return y;for(var O=1;O<=C.length-1;O++)if(y.push(C[O]),y.length===k)return y;w=b=I}}return y.push(f.slice(b)),y}]}),!!h((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]})),g)},578:function(t,n,e){var i=e(12),s=e(73),a=e(3)("species");t.exports=function(t,n){var e,r=i(t).constructor;return void 0===r||null==(e=i(r)[a])?n:s(e)}},579:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return s}));e(184);function i(t){return"all"===t?"All":new Intl.DisplayNames(["en"],{type:"language"}).of(t)}function s(t){if("all"===t)return"All";var n=new Intl.DisplayNames(["en"],{type:"language"}),e=new Intl.DisplayNames([t],{type:"language"});return"".concat(n.of(t)," - ").concat(e.of(t))}},583:function(t,n,e){},584:function(t,n,e){var i=e(1),s=e(585);i({target:"Array",proto:!0,forced:s!==[].lastIndexOf},{lastIndexOf:s})},585:function(t,n,e){"use strict";var i=e(19),s=e(77),a=e(18),r=e(75),l=Math.min,o=[].lastIndexOf,u=!!o&&1/[1].lastIndexOf(1,-0)<0,c=r("lastIndexOf"),p=u||!c;t.exports=p?function(t){if(u)return o.apply(this,arguments)||0;var n=i(this),e=a(n.length),r=e-1;for(arguments.length>1&&(r=l(r,s(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}:o},586:function(t,n,e){"use strict";e(576)},587:function(t,n,e){"use strict";e.r(n);e(72),e(116),e(577),e(185),e(584);var i={props:["item"],computed:{pkgId:function(){return this.item.pkg.replace("eu.kanade.tachiyomi.animeextension.","")},pkgName:function(){return this.item.name.split(": ")[1]},pkgVersion:function(){return"v"+this.item.version},iconUrl:function(){var t=this.item.apk.substring(0,this.item.apk.lastIndexOf("."));return"https://raw.githubusercontent.com/jmir1/aniyomi-extensions/repo/icon/".concat(t,".png")},apkUrl:function(){return"https://raw.githubusercontent.com/jmir1/aniyomi-extensions/repo/apk/".concat(this.item.apk)}}},s=(e(586),e(29)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.item?e("div",{staticClass:"extension"},[e("a",{staticClass:"header-anchor",attrs:{href:"#"+t.pkgId,"aria-hidden":"true"},on:{click:function(t){t.stopPropagation()}}},[t._v("#")]),t._v(" "),e("img",{staticClass:"extension-icon",attrs:{src:t.iconUrl,loading:"lazy",width:"42",height:"42"}}),t._v(" "),e("div",{staticClass:"extension-text"},[e("div",{staticClass:"upper"},[t._v("\n\t\t\t"+t._s(t.pkgName)+"\n\t\t\t"),e("Badge",{attrs:{text:t.pkgVersion}})],1),t._v(" "),e("div",{staticClass:"lower"},[t._v("\n\t\t\t"+t._s(t.pkgId)+"\n\t\t")])]),t._v(" "),e("a",{staticClass:"extension-download",attrs:{href:t.apkUrl,title:"Download APK",download:""}},[e("MaterialIcon",{attrs:{icon:"cloud_download"}}),t._v(" "),e("span",[t._v("Download")])],1)]):t._e()}),[],!1,null,null,null);n.default=a.exports},592:function(t,n,e){"use strict";e(583)},593:function(t,n,e){},596:function(t,n,e){"use strict";e.r(n);var i=e(579),s={components:{ExtensionItem:e(587).default},props:["list","totalCount"],computed:{groupName:function(){var t=this.list[0];return"en"===t.lang?Object(i.b)(t.lang):Object(i.a)(t.lang)}},methods:{simpleLangName:i.b,langName:i.a}},a=(e(592),e(29)),r=Object(a.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"extension-group"},[e("h3",[t._v("\n\t\t"+t._s(t.groupName)+"\n\n\t\t"),e("span",{staticClass:"extensions-total"},[t._v("\n\t\t\tTotal:\n\t\t\t"),e("span",{staticClass:"extensions-total-sum"},[t._v("\n\t\t\t\t"+t._s(t.totalCount)+"\n\t\t\t")])])]),t._v(" "),t._l(t.list,(function(t){return e("div",{key:t.apk,staticClass:"anchor",attrs:{id:t.pkg.replace("eu.kanade.tachiyomi.extension.","")}},[e("ExtensionItem",{attrs:{item:t}})],1)}))],2)}),[],!1,null,null,null);n.default=r.exports},604:function(t,n,e){"use strict";e(593)},642:function(t,n,e){"use strict";e.r(n);e(326);var i={components:{ExtensionGroup:e(596).default},props:["extensions"],computed:{totalCount:function(){return this.extensions.reduce((function(t,n){return t+n.length}),0)}}},s=(e(604),e(29)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"extension-list"},t._l(t.extensions,(function(n){return e("div",{key:n[0].lang},[e("ExtensionGroup",{attrs:{list:n,"total-count":t.totalCount}})],1)})),0)}),[],!1,null,null,null);n.default=a.exports}}]);