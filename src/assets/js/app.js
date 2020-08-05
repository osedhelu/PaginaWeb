/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

function init() {
    (function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
    
     !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));
    var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (e, t, i, n, o) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, o)
        },
        easeInQuad: function (e, t, i, n, o) {
            return n * (t /= o) * t + i
        },
        easeOutQuad: function (e, t, i, n, o) {
            return -n * (t /= o) * (t - 2) + i
        },
        easeInOutQuad: function (e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function (e, t, i, n, o) {
            return n * (t /= o) * t * t + i
        },
        easeOutCubic: function (e, t, i, n, o) {
            return n * ((t = t / o - 1) * t * t + 1) + i
        },
        easeInOutCubic: function (e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function (e, t, i, n, o) {
            return n * (t /= o) * t * t * t + i
        },
        easeOutQuart: function (e, t, i, n, o) {
            return -n * ((t = t / o - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function (e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function (e, t, i, n, o) {
            return n * (t /= o) * t * t * t * t + i
        },
        easeOutQuint: function (e, t, i, n, o) {
            return n * ((t = t / o - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function (e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function (e, t, i, n, o) {
            return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (e, t, i, n, o) {
            return n * Math.sin(t / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function (e, t, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + i
        },
        easeInExpo: function (e, t, i, n, o) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
        },
        easeOutExpo: function (e, t, i, n, o) {
            return t == o ? i + n : n * (1 - Math.pow(2, -10 * t / o)) + i
        },
        easeInOutExpo: function (e, t, i, n, o) {
            return 0 == t ? i : t == o ? i + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function (e, t, i, n, o) {
            return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
        },
        easeOutCirc: function (e, t, i, n, o) {
            return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
        },
        easeInOutCirc: function (e, t, i, n, o) {
            return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function (e, t, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= o)) return i + n;
            if (r || (r = .3 * o), s < Math.abs(n)) {
                s = n;
                a = r / 4
            } else a = r / (2 * Math.PI) * Math.asin(n / s);
            return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) + i
        },
        easeOutElastic: function (e, t, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= o)) return i + n;
            if (r || (r = .3 * o), s < Math.abs(n)) {
                s = n;
                a = r / 4
            } else a = r / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * o - a) * (2 * Math.PI) / r) + n + i
        },
        easeInOutElastic: function (e, t, i, n, o) {
            var a = 1.70158,
                r = 0,
                s = n;
            if (0 == t) return i;
            if (2 == (t /= o / 2)) return i + n;
            if (r || (r = o * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                a = r / 4
            } else a = r / (2 * Math.PI) * Math.asin(n / s);
            return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) * -.5 + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) * .5 + n + i
        },
        easeInBack: function (e, t, i, n, o, a) {
            return null == a && (a = 1.70158), n * (t /= o) * t * ((a + 1) * t - a) + i
        },
        easeOutBack: function (e, t, i, n, o, a) {
            return null == a && (a = 1.70158), n * ((t = t / o - 1) * t * ((a + 1) * t + a) + 1) + i
        },
        easeInOutBack: function (e, t, i, n, o, a) {
            return null == a && (a = 1.70158), (t /= o / 2) < 1 ? n / 2 * (t * t * ((1 + (a *= 1.525)) * t - a)) + i : n / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + i
        },
        easeInBounce: function (e, t, i, n, o) {
            return n - jQuery.easing.easeOutBounce(e, o - t, 0, n, o) + i
        },
        easeOutBounce: function (e, t, i, n, o) {
            return (t /= o) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function (e, t, i, n, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + i
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var i = function (e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function (e) {
                return null != e && e == e.window
            }, i.type = function (e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[r.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function (e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function (e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || a.call(e, t)
            }, i.each = function (e, i, n) {
                var o = 0,
                    a = e.length,
                    r = t(e);
                if (n) {
                    if (r)
                        for (; a > o && !1 !== i.apply(e[o], n); o++);
                    else
                        for (o in e)
                            if (!1 === i.apply(e[o], n)) break
                } else if (r)
                    for (; a > o && !1 !== i.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === i.call(e[o], o, e[o])) break;
                return e
            }, i.data = function (e, t, o) {
                if (void 0 === o) {
                    var a = (r = e[i.expando]) && n[r];
                    if (void 0 === t) return a;
                    if (a && t in a) return a[t]
                } else if (void 0 !== t) {
                    var r = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[r] = n[r] || {}, n[r][t] = o, o
                }
            }, i.removeData = function (e, t) {
                var o = e[i.expando],
                    a = o && n[o];
                a && i.each(t, function (e, t) {
                    delete a[t]
                })
            }, i.extend = function () {
                var e, t, n, o, a, r, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a) e = s[o], s !== (n = a[o]) && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, r = e && i.isArray(e) ? e : []) : r = e && i.isPlainObject(e) ? e : {}, s[o] = i.extend(u, r, n)) : void 0 !== n && (s[o] = n));
                return s
            }, i.queue = function (e, n, o) {
                if (e) {
                    n = (n || "fx") + "queue";
                    var a = i.data(e, n);
                    return o ? (!a || i.isArray(o) ? a = i.data(e, n, function (e, i) {
                        var n = i || [];
                        return null != e && (t(Object(e)) ? function (e, t) {
                            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                            if (i != i)
                                for (; void 0 !== t[n];) e[o++] = t[n++];
                            e.length = o
                        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                    }(o)) : a.push(o), a) : a || []
                }
            }, i.dequeue = function (e, t) {
                i.each(e.nodeType ? [e] : e, function (e, n) {
                    t = t || "fx";
                    var o = i.queue(n, t),
                        a = o.shift();
                    "inprogress" === a && (a = o.shift()), a && ("fx" === t && o.unshift("inprogress"), a.call(n, function () {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function (e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function () {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function () {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window), function (e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function () {
        return function (e, t, i, n) {
            function o(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function a(e) {
                var t = u.data(e, "velocity");
                return null === t ? n : t
            }

            function r(e, i, n, o) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function r(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((a(t, i) * e + r(t, i)) * e + s(t)) * e
                }

                function c(e, t, i) {
                    return 3 * a(t, i) * e * e + 2 * r(t, i) * e + s(t)
                }

                function u(t, i) {
                    for (var o = 0; h > o; ++o) {
                        var a = c(i, e, n);
                        if (0 === a) return i;
                        i -= (l(i, e, n) - t) / a
                    }
                    return i
                }

                function d(t, i, o) {
                    var a, r, s = 0;
                    do {
                        (a = l(r = i + (o - i) / 2, e, n) - t) > 0 ? o = r : i = r
                    } while (Math.abs(a) > v && ++s < m);
                    return r
                }

                function p() {
                    x = !0, (e != i || n != o) && function () {
                        for (var t = 0; g > t; ++t) k[t] = l(t * b, e, n)
                    }()
                }
                var h = 4,
                    f = .001,
                    v = 1e-7,
                    m = 10,
                    g = 11,
                    b = 1 / (g - 1),
                    y = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var k = y ? new Float32Array(g) : new Array(g),
                    x = !1,
                    C = function (t) {
                        return x || p(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function (t) {
                            for (var i = 0, o = 1, a = g - 1; o != a && k[o] <= t; ++o) i += b;
                            var r = i + (t - k[--o]) / (k[o + 1] - k[o]) * b,
                                s = c(r, e, n);
                            return s >= f ? u(t, r) : 0 == s ? r : d(t, i, i + b)
                        }(t), i, o)
                    };
                C.getControlPoints = function () {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var S = "generateBezier(" + [e, i, n, o] + ")";
                return C.toString = function () {
                    return S
                }, C
            }

            function s(e, t) {
                var i = e;
                return h.isString(e) ? g.Easings[e] || (i = !1) : i = h.isArray(e) && 1 === e.length ? function (e) {
                    return function (t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : h.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && r.apply(null, e), !1 === i && (i = g.Easings[g.defaults.easing] ? g.defaults.easing : m), i
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = g.State.calls.length;
                    i > 1e4 && (g.State.calls = function (e) {
                        for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                            var o = e[t];
                            o && n.push(o)
                        }
                        return n
                    }(g.State.calls));
                    for (var o = 0; i > o; o++)
                        if (g.State.calls[o]) {
                            var r = g.State.calls[o],
                                s = r[0],
                                d = r[2],
                                p = r[3],
                                f = !!p,
                                v = null;
                            p || (p = g.State.calls[o][3] = t - 16);
                            for (var m = Math.min((t - p) / d.duration, 1), b = 0, w = s.length; w > b; b++) {
                                var x = s[b],
                                    C = x.element;
                                if (a(C)) {
                                    var S = !1;
                                    if (d.display !== n && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                                                y.setPropertyValue(C, "display", t)
                                            })
                                        }
                                        y.setPropertyValue(C, "display", d.display)
                                    }
                                    for (var T in d.visibility !== n && "hidden" !== d.visibility && y.setPropertyValue(C, "visibility", d.visibility), x)
                                        if ("element" !== T) {
                                            var O, $ = x[T],
                                                M = h.isString($.easing) ? g.Easings[$.easing] : $.easing;
                                            if (1 === m) O = $.endValue;
                                            else {
                                                var E = $.endValue - $.startValue;
                                                if (O = $.startValue + E * M(m, d, E), !f && O === $.currentValue) continue
                                            }
                                            if ($.currentValue = O, "tween" === T) v = O;
                                            else {
                                                if (y.Hooks.registered[T]) {
                                                    var P = y.Hooks.getRoot(T),
                                                        I = a(C).rootPropertyValueCache[P];
                                                    I && ($.rootPropertyValue = I)
                                                }
                                                var A = y.setPropertyValue(C, T, $.currentValue + (0 === parseFloat(O) ? "" : $.unitType), $.rootPropertyValue, $.scrollData);
                                                y.Hooks.registered[T] && (a(C).rootPropertyValueCache[P] = y.Normalizations.registered[P] ? y.Normalizations.registered[P]("extract", null, A[1]) : A[1]), "transform" === A[0] && (S = !0)
                                            }
                                        } d.mobileHA && a(C).transformCache.translate3d === n && (a(C).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && y.flushTransformCache(C)
                                }
                            }
                            d.display !== n && "none" !== d.display && (g.State.calls[o][2].display = !1), d.visibility !== n && "hidden" !== d.visibility && (g.State.calls[o][2].visibility = !1), d.progress && d.progress.call(r[1], r[1], m, Math.max(0, p + d.duration - t), p, v), 1 === m && c(o)
                        }
                }
                g.State.isTicking && k(l)
            }

            function c(e, t) {
                if (!g.State.calls[e]) return !1;
                for (var i = g.State.calls[e][0], o = g.State.calls[e][1], r = g.State.calls[e][2], s = g.State.calls[e][4], l = !1, c = 0, d = i.length; d > c; c++) {
                    var p = i[c].element;
                    if (t || r.loop || ("none" === r.display && y.setPropertyValue(p, "display", r.display), "hidden" === r.visibility && y.setPropertyValue(p, "visibility", r.visibility)), !0 !== r.loop && (u.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(u.queue(p)[1])) && a(p)) {
                        a(p).isAnimating = !1, a(p).rootPropertyValueCache = {};
                        var h = !1;
                        u.each(y.Lists.transforms3D, function (e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                o = a(p).transformCache[t];
                            a(p).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (h = !0, delete a(p).transformCache[t])
                        }), r.mobileHA && (h = !0, delete a(p).transformCache.translate3d), h && y.flushTransformCache(p), y.Values.removeClass(p, "velocity-animating")
                    }
                    if (!t && r.complete && !r.loop && c === d - 1) try {
                        r.complete.call(o, o)
                    } catch (e) {
                        setTimeout(function () {
                            throw e
                        }, 1)
                    }
                    s && !0 !== r.loop && s(o), a(p) && !0 === r.loop && !t && (u.each(a(p).tweensContainer, function (e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), g(p, "reverse", {
                        loop: !0,
                        delay: r.delay
                    })), !1 !== r.queue && u.dequeue(p, r.queue)
                }
                g.State.calls[e] = !1;
                for (var f = 0, v = g.State.calls.length; v > f; f++)
                    if (!1 !== g.State.calls[f]) {
                        l = !0;
                        break
                    }! 1 === l && (g.State.isTicking = !1, delete g.State.calls, g.State.calls = [])
            }
            var u, d = function () {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                p = function () {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function () {
                            t(n + i)
                        }, i)
                    }
                }(),
                h = {
                    isString: function (e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function (e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function (e) {
                        return e && e.nodeType
                    },
                    isNodeList: function (e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function (e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function (e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function (e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                f = !1;
            if (e.fn && e.fn.jquery ? (u = e, f = !0) : u = t.Velocity.Utilities, 8 >= d && !f) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var v = 400,
                    m = "swing",
                    g = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: u,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: v,
                            easing: m,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function (e) {
                            u.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== n ? (g.State.scrollAnchor = t, g.State.scrollPropertyLeft = "pageXOffset", g.State.scrollPropertyTop = "pageYOffset") : (g.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, g.State.scrollPropertyLeft = "scrollLeft", g.State.scrollPropertyTop = "scrollTop");
                var b = function () {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, i, n) {
                        var o = {
                            x: t.x + n.dx * i,
                            v: t.v + n.dv * i,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function i(i, n) {
                        var o = {
                                dx: i.v,
                                dv: e(i)
                            },
                            a = t(i, .5 * n, o),
                            r = t(i, .5 * n, a),
                            s = t(i, n, r),
                            l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx),
                            c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);
                        return i.x = i.x + l * n, i.v = i.v + c * n, i
                    }
                    return function e(t, n, o) {
                        var a, r, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, (a = null !== o) ? r = (u = e(t, n)) / o * .016 : r = .016; s = i(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return a ? function (e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                g.Easings = {
                    linear: function (e) {
                        return e
                    },
                    swing: function (e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function (e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, u.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function (e, t) {
                    g.Easings[t[0]] = r.apply(null, t[1])
                });
                var y = g.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function () {
                            for (var e = 0; e < y.Lists.colors.length; e++) {
                                var t = "color" === y.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                y.Hooks.templates[y.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var i, n, o;
                            if (d)
                                for (i in y.Hooks.templates) {
                                    o = (n = y.Hooks.templates[i])[0].split(" ");
                                    var a = n[1].match(y.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), y.Hooks.templates[i] = [o.join(" "), a.join(" ")])
                                }
                            for (i in y.Hooks.templates)
                                for (var e in o = (n = y.Hooks.templates[i])[0].split(" ")) {
                                    var r = i + o[e],
                                        s = e;
                                    y.Hooks.registered[r] = [i, s]
                                }
                        },
                        getRoot: function (e) {
                            var t = y.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function (e, t) {
                            return y.RegEx.valueUnwrap.test(t) && (t = t.match(y.RegEx.valueUnwrap)[1]), y.Values.isCSSNullValue(t) && (t = y.Hooks.templates[e][1]), t
                        },
                        extractValue: function (e, t) {
                            var i = y.Hooks.registered[e];
                            if (i) {
                                var n = i[0],
                                    o = i[1];
                                return (t = y.Hooks.cleanRootPropertyValue(n, t)).toString().match(y.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function (e, t, i) {
                            var n = y.Hooks.registered[e];
                            if (n) {
                                var o, a = n[0],
                                    r = n[1];
                                return (o = (i = y.Hooks.cleanRootPropertyValue(a, i)).toString().match(y.RegEx.valueSplit))[r] = t, o.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function (e, t, i) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return y.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(y.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function (e, t, i) {
                                switch (e) {
                                    case "name":
                                        return g.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = o ? o[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function (e, t, i) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function () {
                            9 >= d || g.State.isGingerbread || (y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D));
                            for (var e = 0; e < y.Lists.transformsBase.length; e++) ! function () {
                                var t = y.Lists.transformsBase[e];
                                y.Normalizations.registered[t] = function (e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return a(i) === n || a(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var r = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    g.State.isAndroid && a(i).transformCache[t] === n && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                    r = !/(deg|\d)$/i.test(o);
                                                    break;
                                                case "rotate":
                                                    r = !/(deg|\d)$/i.test(o)
                                            }
                                            return r || (a(i).transformCache[t] = "(" + o + ")"), a(i).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < y.Lists.colors.length; e++) ! function () {
                                var t = y.Lists.colors[e];
                                y.Normalizations.registered[t] = function (e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var a;
                                            if (y.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                            else {
                                                var r, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? r = s[o] !== n ? s[o] : s.black : y.RegEx.isHex.test(o) ? r = "rgb(" + y.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
                                        case "inject":
                                            return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function (e) {
                            return e.replace(/-(\w)/g, function (e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function (e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || g.State.isAndroid && !g.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function (e) {
                            if (g.State.prefixMatches[e]) return [g.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                                var o;
                                if (o = 0 === i ? e : t[i] + e.replace(/^\w/, function (e) {
                                        return e.toUpperCase()
                                    }), h.isString(g.State.prefixElement.style[o])) return g.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function (e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
                                return t + t + i + i + n + n
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function (e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function (e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function (e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function (e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function (e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function (e, i, o, r) {
                        function s(e, i) {
                            function o() {
                                p && y.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = u.css(e, i);
                            else {
                                var c, p = !1;
                                if (/^(width|height)$/.test(i) && 0 === y.getPropertyValue(e, "display") && (p = !0, y.setPropertyValue(e, "display", y.Values.getDisplayType(e))), !r) {
                                    if ("height" === i && "border-box" !== y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetHeight - (parseFloat(y.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), h
                                    }
                                    if ("width" === i && "border-box" !== y.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var f = e.offsetWidth - (parseFloat(y.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), f
                                    }
                                }
                                c = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === d && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = e.style[i]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var v = s(e, "position");
                                ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = u(e).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (y.Hooks.registered[i]) {
                            var c = i,
                                p = y.Hooks.getRoot(c);
                            o === n && (o = y.getPropertyValue(e, y.Names.prefixCheck(p)[0])), y.Normalizations.registered[p] && (o = y.Normalizations.registered[p]("extract", e, o)), l = y.Hooks.extractValue(c, o)
                        } else if (y.Normalizations.registered[i]) {
                            var h, f;
                            "transform" !== (h = y.Normalizations.registered[i]("name", e)) && (f = s(e, y.Names.prefixCheck(h)[0]), y.Values.isCSSNullValue(f) && y.Hooks.templates[i] && (f = y.Hooks.templates[i][1])), l = y.Normalizations.registered[i]("extract", e, f)
                        }
                        if (!/^[\d-]/.test(l))
                            if (a(e) && a(e).isSVG && y.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = e.getBBox()[i]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(i);
                                else l = s(e, y.Names.prefixCheck(i)[0]);
                        return y.Values.isCSSNullValue(l) && (l = 0), g.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function (e, i, n, o, r) {
                        var s = i;
                        if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? t.scrollTo(n, r.alternateValue) : t.scrollTo(r.alternateValue, n);
                        else if (y.Normalizations.registered[i] && "transform" === y.Normalizations.registered[i]("name", e)) y.Normalizations.registered[i]("inject", e, n), s = "transform", n = a(e).transformCache[i];
                        else {
                            if (y.Hooks.registered[i]) {
                                var l = i,
                                    c = y.Hooks.getRoot(i);
                                o = o || y.getPropertyValue(e, c), n = y.Hooks.injectValue(l, n, o), i = c
                            }
                            if (y.Normalizations.registered[i] && (n = y.Normalizations.registered[i]("inject", e, n), i = y.Normalizations.registered[i]("name", e)), s = y.Names.prefixCheck(i)[0], 8 >= d) try {
                                e.style[s] = n
                            } catch (e) {
                                g.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            } else a(e) && a(e).isSVG && y.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                            g.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                        }
                        return [s, n]
                    },
                    flushTransformCache: function (e) {
                        function t(t) {
                            return parseFloat(y.getPropertyValue(e, t))
                        }
                        var i = "";
                        if ((d || g.State.isAndroid && !g.State.isChrome) && a(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            u.each(a(e).transformCache, function (e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            })
                        } else {
                            var o, r;
                            u.each(a(e).transformCache, function (t) {
                                return o = a(e).transformCache[t], "transformPerspective" === t ? (r = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                            }), r && (i = "perspective" + r + " " + i)
                        }
                        y.setPropertyValue(e, "transform", i)
                    }
                };
                y.Hooks.register(), y.Normalizations.register(), g.hook = function (e, t, i) {
                    var r = n;
                    return e = o(e), u.each(e, function (e, o) {
                        if (a(o) === n && g.init(o), i === n) r === n && (r = g.CSS.getPropertyValue(o, t));
                        else {
                            var s = g.CSS.setPropertyValue(o, t, i);
                            "transform" === s[0] && g.CSS.flushTransformCache(o), r = s
                        }
                    }), r
                };
                var w = function () {
                    function e() {
                        return d ? $.promise || null : p
                    }

                    function r() {
                        function e(e) {
                            function p(e, t) {
                                var i = n,
                                    o = n,
                                    a = n;
                                return h.isArray(e) ? (i = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || y.RegEx.isHex.test(e[1]) ? a = e[1] : (h.isString(e[1]) && !y.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : s(e[1], c.duration), e[2] !== n && (a = e[2]))) : i = e, t || (o = o || c.easing), h.isFunction(i) && (i = i.call(r, S, C)), h.isFunction(a) && (a = a.call(r, S, C)), [i || 0, o, a]
                            }

                            function f(e, t) {
                                var i, n;
                                return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                                    return i = e, ""
                                }), i || (i = y.Values.getUnitType(e)), [n, i]
                            }

                            function v() {
                                var e = {
                                        myParent: r.parentNode || i.body,
                                        position: y.getPropertyValue(r, "position"),
                                        fontSize: y.getPropertyValue(r, "fontSize")
                                    },
                                    n = e.position === D.lastPosition && e.myParent === D.lastParent,
                                    o = e.fontSize === D.lastFontSize;
                                D.lastParent = e.myParent, D.lastPosition = e.position, D.lastFontSize = e.fontSize;
                                var s = 100,
                                    l = {};
                                if (o && n) l.emToPx = D.lastEmToPx, l.percentToPxWidth = D.lastPercentToPxWidth, l.percentToPxHeight = D.lastPercentToPxHeight;
                                else {
                                    var c = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                    g.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                        g.CSS.setPropertyValue(c, t, "hidden")
                                    }), g.CSS.setPropertyValue(c, "position", e.position), g.CSS.setPropertyValue(c, "fontSize", e.fontSize), g.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                        g.CSS.setPropertyValue(c, t, s + "%")
                                    }), g.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = D.lastEmToPx = (parseFloat(y.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                }
                                return null === D.remToPx && (D.remToPx = parseFloat(y.getPropertyValue(i.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(t.innerWidth) / 100, D.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = D.remToPx, l.vwToPx = D.vwToPx, l.vhToPx = D.vhToPx, g.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                            }
                            if (c.begin && 0 === S) try {
                                c.begin.call(m, m)
                            } catch (e) {
                                setTimeout(function () {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === O) {
                                var w, x, T, M = /^x$/i.test(c.axis) ? "Left" : "Top",
                                    E = parseFloat(c.offset) || 0;
                                c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, T = (w = c.container["scroll" + M]) + u(r).position()[M.toLowerCase()] + E) : c.container = null : (w = g.State.scrollAnchor[g.State["scrollProperty" + M]], x = g.State.scrollAnchor[g.State["scrollProperty" + ("Left" === M ? "Top" : "Left")]], T = u(r).offset()[M.toLowerCase()] + E), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: T,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: M,
                                            alternateValue: x
                                        }
                                    },
                                    element: r
                                }, g.debug && console.log("tweensContainer (scroll): ", d.scroll, r)
                            } else if ("reverse" === O) {
                                if (!a(r).tweensContainer) return void u.dequeue(r, c.queue);
                                "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, k.easing || delete c.easing, k.duration || delete c.duration, c = u.extend({}, a(r).opts, c);
                                var P = u.extend(!0, {}, a(r).tweensContainer);
                                for (var I in P)
                                    if ("element" !== I) {
                                        var A = P[I].startValue;
                                        P[I].startValue = P[I].currentValue = P[I].endValue, P[I].endValue = A, h.isEmptyObject(k) || (P[I].easing = c.easing), g.debug && console.log("reverse tweensContainer (" + I + "): " + JSON.stringify(P[I]), r)
                                    } d = P
                            } else if ("start" === O) {
                                for (var L in a(r).tweensContainer && !0 === a(r).isAnimating && (P = a(r).tweensContainer), u.each(b, function (e, t) {
                                        if (RegExp("^" + y.Lists.colors.join("$|^") + "$").test(e)) {
                                            var i = p(t, !0),
                                                o = i[0],
                                                a = i[1],
                                                r = i[2];
                                            if (y.RegEx.isHex.test(o)) {
                                                for (var s = ["Red", "Green", "Blue"], l = y.Values.hexToRgb(o), c = r ? y.Values.hexToRgb(r) : n, u = 0; u < s.length; u++) {
                                                    var d = [l[u]];
                                                    a && d.push(a), c !== n && d.push(c[u]), b[e + s[u]] = d
                                                }
                                                delete b[e]
                                            }
                                        }
                                    }), b) {
                                    var H = p(b[L]),
                                        R = H[0],
                                        W = H[1],
                                        F = H[2];
                                    L = y.Names.camelCase(L);
                                    var V = y.Hooks.getRoot(L),
                                        N = !1;
                                    if (a(r).isSVG || "tween" === V || !1 !== y.Names.prefixCheck(V)[1] || y.Normalizations.registered[V] !== n) {
                                        (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(L) && !F && 0 !== R && (F = 0), c._cacheValues && P && P[L] ? (F === n && (F = P[L].endValue + P[L].unitType), N = a(r).rootPropertyValueCache[V]) : y.Hooks.registered[L] ? F === n ? (N = y.getPropertyValue(r, V), F = y.getPropertyValue(r, L, N)) : N = y.Hooks.templates[V][1] : F === n && (F = y.getPropertyValue(r, L));
                                        var Y, j, X, B = !1;
                                        if (F = (Y = f(L, F))[0], X = Y[1], R = (Y = f(L, R))[0].replace(/^([+-\/*])=/, function (e, t) {
                                                return B = t, ""
                                            }), j = Y[1], F = parseFloat(F) || 0, R = parseFloat(R) || 0, "%" === j && (/^(fontSize|lineHeight)$/.test(L) ? (R /= 100, j = "em") : /^scale/.test(L) ? (R /= 100, j = "") : /(Red|Green|Blue)$/i.test(L) && (R = R / 100 * 255, j = "")), /[\/*]/.test(B)) j = X;
                                        else if (X !== j && 0 !== F)
                                            if (0 === R) j = X;
                                            else {
                                                o = o || v();
                                                var z = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                                switch (X) {
                                                    case "%":
                                                        F *= "x" === z ? o.percentToPxWidth : o.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        F *= o[X + "ToPx"]
                                                }
                                                switch (j) {
                                                    case "%":
                                                        F *= 1 / ("x" === z ? o.percentToPxWidth : o.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        F *= 1 / o[j + "ToPx"]
                                                }
                                            } switch (B) {
                                            case "+":
                                                R = F + R;
                                                break;
                                            case "-":
                                                R = F - R;
                                                break;
                                            case "*":
                                                R *= F;
                                                break;
                                            case "/":
                                                R = F / R
                                        }
                                        d[L] = {
                                            rootPropertyValue: N,
                                            startValue: F,
                                            currentValue: F,
                                            endValue: R,
                                            unitType: j,
                                            easing: W
                                        }, g.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(d[L]), r)
                                    } else g.debug && console.log("Skipping [" + V + "] due to a lack of browser support.")
                                }
                                d.element = r
                            }
                            d.element && (y.Values.addClass(r, "velocity-animating"), _.push(d), "" === c.queue && (a(r).tweensContainer = d, a(r).opts = c), a(r).isAnimating = !0, S === C - 1 ? (g.State.calls.push([_, m, c, null, $.resolver]), !1 === g.State.isTicking && (g.State.isTicking = !0, l())) : S++)
                        }
                        var o, r = this,
                            c = u.extend({}, g.defaults, k),
                            d = {};
                        switch (a(r) === n && g.init(r), parseFloat(c.delay) && !1 !== c.queue && u.queue(r, c.queue, function (e) {
                            g.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(c.delay)),
                                next: e
                            }
                        }), c.duration.toString().toLowerCase()) {
                            case "fast":
                                c.duration = 200;
                                break;
                            case "normal":
                                c.duration = v;
                                break;
                            case "slow":
                                c.duration = 600;
                                break;
                            default:
                                c.duration = parseFloat(c.duration) || 1
                        }!1 !== g.mock && (!0 === g.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(g.mock) || 1, c.delay *= parseFloat(g.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = g.CSS.Values.getDisplayType(r))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && g.State.isMobile && !g.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(r, c.queue, function (t, i) {
                            return !0 === i ? ($.promise && $.resolver(m), !0) : (g.velocityQueueEntryFlag = !0, void e())
                        }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(r)[0] || u.dequeue(r)
                    }
                    var d, p, f, m, b, k, x = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                    if (h.isWrapped(this) ? (d = !1, f = 0, m = this, p = this) : (d = !0, f = 1, m = x ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                        x ? (b = arguments[0].properties || arguments[0].p, k = arguments[0].options || arguments[0].o) : (b = arguments[f], k = arguments[f + 1]);
                        var C = m.length,
                            S = 0;
                        if (!/^(stop|finish)$/i.test(b) && !u.isPlainObject(k)) {
                            k = {};
                            for (var T = f + 1; T < arguments.length; T++) h.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? h.isString(arguments[T]) || h.isArray(arguments[T]) ? k.easing = arguments[T] : h.isFunction(arguments[T]) && (k.complete = arguments[T]) : k.duration = arguments[T]
                        }
                        var O, $ = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && g.Promise && ($.promise = new g.Promise(function (e, t) {
                            $.resolver = e, $.rejecter = t
                        })), b) {
                            case "scroll":
                                O = "scroll";
                                break;
                            case "reverse":
                                O = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                u.each(m, function (e, t) {
                                    a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                                });
                                var M = [];
                                return u.each(g.State.calls, function (e, t) {
                                    t && u.each(t[1], function (i, o) {
                                        var r = k === n ? "" : k;
                                        return !0 !== r && t[2].queue !== r && (k !== n || !1 !== t[2].queue) || void u.each(m, function (i, n) {
                                            n === o && ((!0 === k || h.isString(k)) && (u.each(u.queue(n, h.isString(k) ? k : ""), function (e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            }), u.queue(n, h.isString(k) ? k : "", [])), "stop" === b ? (a(n) && a(n).tweensContainer && !1 !== r && u.each(a(n).tweensContainer, function (e, t) {
                                                t.endValue = t.currentValue
                                            }), M.push(e)) : "finish" === b && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === b && (u.each(M, function (e, t) {
                                    c(t, !0)
                                }), $.promise && $.resolver(m)), e();
                            default:
                                if (!u.isPlainObject(b) || h.isEmptyObject(b)) {
                                    if (h.isString(b) && g.Redirects[b]) {
                                        var E = (L = u.extend({}, k)).duration,
                                            P = L.delay || 0;
                                        return !0 === L.backwards && (m = u.extend(!0, [], m).reverse()), u.each(m, function (e, t) {
                                            parseFloat(L.stagger) ? L.delay = P + parseFloat(L.stagger) * e : h.isFunction(L.stagger) && (L.delay = P + L.stagger.call(t, e, C)), L.drag && (L.duration = parseFloat(E) || (/^(callout|transition)/.test(b) ? 1e3 : v), L.duration = Math.max(L.duration * (L.backwards ? 1 - e / C : (e + 1) / C), .75 * L.duration, 200)), g.Redirects[b].call(t, t, L || {}, e, C, m, $.promise ? $ : n)
                                        }), e()
                                    }
                                    var I = "Velocity: First argument (" + b + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return $.promise ? $.rejecter(new Error(I)) : console.log(I), e()
                                }
                                O = "start"
                        }
                        var A, L, D = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            _ = [];
                        if (u.each(m, function (e, t) {
                                h.isNode(t) && r.call(t)
                            }), (L = u.extend({}, g.defaults, k)).loop = parseInt(L.loop), A = 2 * L.loop - 1, L.loop)
                            for (var H = 0; A > H; H++) {
                                var R = {
                                    delay: L.delay,
                                    progress: L.progress
                                };
                                H === A - 1 && (R.display = L.display, R.visibility = L.visibility, R.complete = L.complete), w(m, "reverse", R)
                            }
                        return e()
                    }
                };
                (g = u.extend(w, g)).animate = w;
                var k = t.requestAnimationFrame || p;
                return g.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function () {
                    i.hidden ? (k = function (e) {
                        return setTimeout(function () {
                            e(!0)
                        }, 16)
                    }, l()) : k = t.requestAnimationFrame || p
                }), e.Velocity = g, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = g.defaults), u.each(["Down", "Up"], function (e, t) {
                    g.Redirects["slide" + t] = function (e, i, o, a, r, s) {
                        var l = u.extend({}, i),
                            c = l.begin,
                            d = l.complete,
                            p = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            h = {};
                        l.display === n && (l.display = "Down" === t ? "inline" === g.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
                            for (var i in c && c.call(r, r), p) {
                                h[i] = e.style[i];
                                var n = g.CSS.getPropertyValue(e, i);
                                p[i] = "Down" === t ? [n, 0] : [0, n]
                            }
                            h.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function () {
                            for (var t in h) e.style[t] = h[t];
                            d && d.call(r, r), s && s.resolver(r)
                        }, g(e, p, l)
                    }
                }), u.each(["In", "Out"], function (e, t) {
                    g.Redirects["fade" + t] = function (e, i, o, a, r, s) {
                        var l = u.extend({}, i),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = o !== a - 1 ? l.begin = null : function () {
                            d && d.call(r, r), s && s.resolver(r)
                        }, l.display === n && (l.display = "In" === t ? "auto" : "none"), g(this, c, l)
                    }
                }), g
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function (e) {
        WOW = function () {
            return {
                init: function () {
                    var t = [],
                        i = 1;

                    function n() {
                        var i = window.innerHeight,
                            n = window.scrollY;
                        e(".wow").each(function () {
                            if ("visible" != e(this).css("visibility") && (i + n - 100 > o(this) && n < o(this) || i + n - 100 > o(this) + e(this).height() && n < o(this) + e(this).height() || i + n == e(document).height() && o(this) + 100 > e(document).height())) {
                                var a = e(this).index(".wow"),
                                    r = e(this).attr("data-wow-delay");
                                if (r) {
                                    r = e(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(r);
                                    e(s).addClass("animated"), e(s).css({
                                        visibility: "visible"
                                    }), e(s).css({
                                        "animation-delay": r
                                    }), e(s).css({
                                        "animation-name": t[a]
                                    });
                                    var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                    e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function () {
                                        e(s).removeClass("animated")
                                    }, l)
                                } else {
                                    e(this).addClass("animated"), e(this).css({
                                        visibility: "visible"
                                    }), e(this).css({
                                        "animation-name": t[a]
                                    });
                                    l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function () {
                                        e(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function o(e) {
                        var t = e.getBoundingClientRect(),
                            i = document.body,
                            n = document.documentElement,
                            o = window.pageYOffset || n.scrollTop || i.scrollTop,
                            a = n.clientTop || i.clientTop || 0,
                            r = t.top + o - a;
                        return Math.round(r)
                    }
                    e(".wow").each(function () {
                        e(this).css({
                            visibility: "hidden"
                        }), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({
                            "animation-name": "none"
                        })
                    }), e(window).scroll(function () {
                        var t, a;
                        i ? (t = window.innerHeight, a = window.scrollY, e(".wow.animated").each(function () {
                            if (t + a - 100 > o(this) && a > o(this) + 100 || t + a - 100 < o(this) && a < o(this) + 100 || o(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({
                                "animation-name": "none"
                            }), e(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var i = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (i += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                var n = this;
                                setTimeout(function () {
                                    e(n).removeClass("animated")
                                }, i)
                            }
                        }), n(), i--) : n()
                    }), e(".wow").each(function () {
                        var i = e(this).index(".wow"),
                            n = e(this).attr("data-wow-delay");
                        n ? (n = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-delay": n + "s"
                        }), e(this).css({
                            "animation-name": t[i]
                        })) : (e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-name": t[i]
                        }))
                    })
                }
            }
        }
    }(jQuery),
    function (e) {
        e(window).on("scroll", function () {
            var t = e(".navbar");
            t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function () {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof window ? window : this, function () {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function a(e) {
            var n, a = i.call(e);
            return "[object String]" === a ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a) && e.hasOwnProperty("length") ? e : o(n = e) && n.nodeType > 0 ? [e] : []
        }

        function r(e) {
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = e && e.ownerDocument;
            return t = o.documentElement, void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()), i = function (e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(o), {
                top: n.top + i.pageYOffset - t.clientTop,
                left: n.left + i.pageXOffset - t.clientLeft
            }
        }

        function s(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function (e, t, i) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", t.appendChild(n);
                    var o = r(t),
                        a = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (a = e.touches[0].pageY - o.top, c = e.touches[0].pageX - o.left) : (a = e.pageY - o.top, c = e.pageX - o.left), c = c >= 0 ? c : 0, a = a >= 0 ? a : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    i && (d = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", c), n.setAttribute("data-y", a), n.setAttribute("data-scale", u), n.setAttribute("data-translate", d);
                    var p = {
                        top: a + "px",
                        left: c + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", s(p)), n.classList.remove("waves-notransition"), p["-webkit-transform"] = u + " " + d, p["-moz-transform"] = u + " " + d, p["-ms-transform"] = u + " " + d, p["-o-transform"] = u + " " + d, p.transform = u + " " + d, p.opacity = "1";
                    var h = "mousemove" === e.type ? 2500 : l.duration;
                    p["-webkit-transition-duration"] = h + "ms", p["-moz-transition-duration"] = h + "ms", p["-o-transition-duration"] = h + "ms", p["transition-duration"] = h + "ms", n.setAttribute("style", s(p))
                },
                hide: function (e, t) {
                    for (var i = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, a = i.length; o < a; o++) u(e, t, i[o]);
                    n && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function (e) {
                    var t = e.parentNode;
                    if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("span");
                        i.className = "waves-input-wrapper", t.replaceChild(i, e), i.appendChild(e)
                    }
                },
                img: function (e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        t.replaceChild(i, e), i.appendChild(e)
                    }
                }
            };

        function u(e, t, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    a = i.getAttribute("data-scale"),
                    r = i.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function () {
                    var e = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": a + " " + r,
                        "-moz-transform": a + " " + r,
                        "-ms-transform": a + " " + r,
                        "-o-transform": a + " " + r,
                        transform: a + " " + r
                    };
                    i.setAttribute("style", s(e)), setTimeout(function () {
                        try {
                            t.removeChild(i)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function (e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function (e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function () {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function p(e) {
            var t = function (e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, i = e.target || e.srcElement; i.parentElement;) {
                    if (!(i instanceof SVGElement) && i.classList.contains("waves-effect")) {
                        t = i;
                        break
                    }
                    i = i.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var i = !1,
                        o = setTimeout(function () {
                            o = null, l.show(e, t)
                        }, l.delay),
                        a = function (n) {
                            o && (clearTimeout(o), o = null, l.show(e, t)), i || (i = !0, l.hide(n, t)), s()
                        },
                        r = function (e) {
                            o && (clearTimeout(o), o = null), a(e), s()
                        };
                    t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", a, !1), t.addEventListener("touchcancel", a, !1);
                    var s = function () {
                        t.removeEventListener("touchmove", r), t.removeEventListener("touchend", a), t.removeEventListener("touchcancel", a)
                    }
                } else l.show(e, t), n && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function (e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), n && (t.addEventListener("touchstart", p, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", p, !1)
        }, e.attach = function (e, t) {
            var n, o;
            e = a(e), "[object Array]" === i.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var r = 0, s = e.length; r < s; r++) o = (n = e[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
        }, e.ripple = function (e, t) {
            var i = (e = a(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, i)
                for (var n, o, s, c = {}, u = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, p = function (e, t) {
                        return function () {
                            l.hide(e, t)
                        }
                    }; u < i; u++)
                    if (n = e[u], o = t.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, s = r(n), c.x = s.left + o.x, c.y = s.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, n), t.wait >= 0 && null !== t.wait) {
                        setTimeout(p({
                            type: "mouseup",
                            button: 1
                        }, n), t.wait)
                    }
        }, e.calm = function (e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = (e = a(e)).length; i < n; i++) l.hide(t, e[i])
        }, e.displayEffect = function (t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), $(document).ready(function () {
        Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init()
    });
var _this = void 0;
! function (e) {
    var t, i, n = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function (e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"),
        o = function (e) {
            var t = e.siblings("label, i"),
                i = e.val().length,
                n = e.attr("placeholder");
            t["".concat(i || n ? "add" : "remove", "Class")]("active")
        },
        a = function (e) {
            if (e.hasClass("validate")) {
                var t = e.val(),
                    i = !t.length,
                    n = !e[0].validity.badInput;
                if (i && n) e.removeClass("valid").removeClass("invalid");
                else {
                    var o = e.is(":valid"),
                        a = Number(e.attr("length")) || 0;
                    o && (!a || a > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        },
        r = function () {
            var t = e(_this);
            if (t.val().length) {
                var i = e(".hiddendiv"),
                    n = t.css("font-family"),
                    o = t.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text("".concat(t.val(), "\n"));
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), i.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", i.height())
            }
        };
    e(n).each(function (t, i) {
        var n = e(i),
            a = n.siblings("label, i");
        o(n), i.validity.badInput && a.addClass("active")
    }), e(document).on("focus", n, function (t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", n, function (t) {
        var i = e(t.target),
            n = !i.val(),
            o = !t.target.validity.badInput,
            r = void 0 === i.attr("placeholder");
        n && o && r && i.siblings("label, i").removeClass("active"), a(i)
    }), e(document).on("change", n, function (t) {
        var i = e(t.target);
        o(i), a(i)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function (t) {
        var i = e(t.target);
        i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid").each(function (t, i) {
            var n = e(i),
                o = !n.val(),
                a = !n.attr("placeholder");
            o && a && n.siblings("label, i").removeClass("active")
        }), i.find("select.initialized").each(function (t, i) {
            var n = e(i),
                o = n.siblings("input.select-dropdown"),
                a = n.children("[selected]").val();
            n.val(a), o.val(a)
        }))
    }), (i = e(".md-textarea-auto")).length && (t = window.attachEvent ? function (e, t, i) {
        e.attachEvent("on".concat(t), i)
    } : function (e, t, i) {
        e.addEventListener(t, i, !1)
    }, i.each(function () {
        var e = this;

        function i() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function n() {
            window.setTimeout(i, 0)
        }
        t(e, "change", i), t(e, "cut", n), t(e, "paste", n), t(e, "drop", n), t(e, "keydown", n), i()
    }));
    var s = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    e(".materialize-textarea").each(r), s.on("keyup keydown", ".materialize-textarea", r)
}(jQuery),
function (e) {
    e(document).on("click.card", ".card", function (t) {
        if (e(this).find(".card-reveal").length) {
            var i = e(t.target),
                n = i.is(".card-reveal .card-title"),
                o = i.is(".card-reveal .card-title i"),
                a = i.is(".card .activator"),
                r = i.is(".card .activator i");
            n || o ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function () {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (a || r) && e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })
        }
    }), e(".rotate-btn").on("click", function () {
        var t = e(this).attr("data-card");
        e("#".concat(t)).toggleClass("flipped")
    }), e(window).on("load", function () {
        var t = e(".front").outerHeight(),
            i = e(".back").outerHeight();
        t > i ? e(".card-wrapper, .back").height(t) : t > i ? e(".card-wrapper, .front").height(i) : e(".card-wrapper").height(i)
    }), e(".card-share > a").on("click", function (t) {
        t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
    })
}(jQuery), $(".map-card").click(function () {
    $(".card-body").toggleClass("closed")
});
var SMOOTH_SCROLL_DURATION = 700;

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function (t) {
            _defineProperty(e, t, i[t])
        })
    }
    return e
}

function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = i, e
}
$(".smooth-scroll").on("click", "a", function () {
        var e = $(this).attr("href");
        if (void 0 !== e && 0 === e.indexOf("#")) {
            var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                i = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(e).offset().top - t
            }, SMOOTH_SCROLL_DURATION), void 0 !== i && !1 !== i && history.replaceState(null, null, e), !1
        }
    }),
    function (e) {
        e.fn.scrollTo = function (t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function (t) {
            var i = e.extend({}, e.fn.dropdown.defaults, t);

            function n(t, n) {
                var o = window.innerHeight,
                    a = t.innerHeight(),
                    r = t.offset().left,
                    s = t.offset().top - e(window).scrollTop(),
                    l = i.alignment,
                    c = 0,
                    u = 0,
                    d = 0;
                !0 === i.belowOrigin && (d = a);
                var p = 0,
                    h = t.parent();
                if (!h.is("body") && h[0].scrollHeight > h[0].clientHeight && (p = h[0].scrollTop), r + n.innerWidth() > e(window).width() ? l = "right" : r - n.innerWidth() + t.innerWidth() < 0 && (l = "left"), s + n.innerHeight() > o)
                    if (s + a - n.innerHeight() < 0) {
                        var f = o - s - d;
                        n.css("max-height", f)
                    } else d || (d += a), d -= n.innerHeight();
                if ("left" === l) c = i.gutter, u = t.position().left + c;
                else if ("right" === l) {
                    u = t.position().left + t.outerWidth() - n.outerWidth() + (c = -i.gutter)
                }
                n.css({
                    position: "absolute",
                    top: t.position().top + d + p,
                    left: u
                })
            }
            return this.each(function () {
                var t = e(this),
                    o = !1,
                    a = e("#".concat(t.attr("data-activates")));

                function r() {
                    void 0 !== t.data("induration") && (i.inDuration = t.data("inDuration")), void 0 !== t.data("outduration") && (i.outDuration = t.data("outDuration")), void 0 !== t.data("constrainwidth") && (i.constrain_width = t.data("constrainwidth")), void 0 !== t.data("hover") && (i.hover = t.data("hover")), void 0 !== t.data("gutter") && (i.gutter = t.data("gutter")), void 0 !== t.data("beloworigin") && (i.belowOrigin = t.data("beloworigin")), void 0 !== t.data("alignment") && (i.alignment = t.data("alignment")), void 0 !== t.data("maxheight") && (i.maxHeight = t.data("maxheight")), void 0 !== t.data("resetscroll") && (i.resetScroll = "true" === t.data("resetscroll"))
                }

                function s(s) {
                    "focus" === s && (o = !0), r(), a.addClass("active"), t.addClass("active"), !0 === i.constrain_width ? a.css("width", t.outerWidth()) : a.css("white-space", "nowrap"), n(t, a), a.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutCubic",
                        complete: function () {
                            e(this).css("height", "")
                        }
                    }).animate(_objectSpread({
                        opacity: 1
                    }, i.resetScroll && {
                        scrollTop: 0
                    }), {
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    o = !1, a.fadeOut(i.outDuration), a.removeClass("active"), t.removeClass("active"), setTimeout(function () {
                        a.css("max-height", i.maxHeight)
                    }, i.outDuration)
                }
                if (r(), t.after(a), i.hover) {
                    var c = !1;
                    t.unbind("click.".concat(t.attr("id"))), t.on("mouseenter", function () {
                        !1 === c && (s(), c = !0)
                    }), t.on("mouseleave", function (t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(a) || (a.stop(!0, !0), l(), c = !1)
                    }), a.on("mouseleave", function (i) {
                        var n = i.toElement || i.relatedTarget;
                        e(n).closest(".dropdown-button").is(t) || (a.stop(!0, !0), l(), c = !1)
                    })
                } else t.unbind("click.".concat(t.attr("id"))), t.bind("click.".concat(t.attr("id")), function (i) {
                    o || (t[0] !== i.currentTarget || t.hasClass("active") || 0 !== e(i.target).closest(".dropdown-content").length ? t.hasClass("active") && (l(), e(document).unbind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id")))) : (i.preventDefault(), s("click")), a.hasClass("active") && e(document).bind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id")), function (i) {
                        a.is(i.target) || t.is(i.target) || t.find(i.target).length || (l(), e(document).unbind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id"))))
                    }))
                });
                t.on("open", function (e, t) {
                    s(t)
                }), t.on("close", l)
            }), {
                updatePosition: n
            }
        }, e.fn.dropdown.defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            maxHeight: "",
            resetScroll: !0
        }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function (t) {
            var i = e(this).find("input");
            this.filter(function (t, n) {
                e(n).on("keyup", function () {
                    for (var e = i.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(i.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
                })
            });
            var n = e.extend({
                color: "#000",
                backgroundColor: "",
                fontSize: ".9rem",
                fontWeight: "400",
                borderRadius: "",
                borderColor: ""
            }, t);
            return this.css({
                color: n.color,
                backgroundColor: n.backgroundColor,
                fontSize: n.fontSize,
                fontWeight: n.fontWeight,
                borderRadius: n.borderRadius,
                border: n.border,
                margin: n.margin
            })
        }
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        i = "fadeOut",
        n = $(e),
        o = $(".dropdown-menu", e),
        a = n.parents("ul.nav");
    return a.height > 0 && (t = a.data("dropdown-in") || null, i = a.data("dropdown-out") || null), {
        target: e,
        dropdown: n,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || i
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
dropdownSelectors.on({
        "show.bs.dropdown": function () {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function () {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e)
        },
        "hide.bs.dropdown": function (e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function () {
                t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
            }))
        }
    }), $(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter", function (e) {
        var t = $(this);
        $(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"), t.next(".dropdown-menu").addClass("show"), e.stopPropagation()
    }), $(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown", function () {
        $(".multi-level-dropdown .dropdown-menu.show").removeClass("show")
    }),
    function (e) {
        var t = this;
        e(document).ready(function () {
            e(document).on("mouseenter", ".fixed-action-btn", function () {
                var t = e(this);
                i(t)
            }), e(document).on("mouseleave", ".fixed-action-btn", function () {
                var t = e(this);
                n(t)
            }), e(document).on("click", ".fixed-action-btn > a", function () {
                var t = e(this).parent();
                t.hasClass("active") ? i(t) : n(t), t.hasClass("active") ? n(t) : i(t)
            })
        }), e.fn.extend({
            openFAB: function () {
                i(e(this))
            },
            closeFAB: function () {
                n(e(this))
            }
        });
        var i = function (e) {
                var t = e;
                t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
                    e.classList.add("shown")
                }))
            },
            n = function (e) {
                e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function (e) {
                    e.classList.remove("shown")
                })
            };
        e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function (o) {
            if (!e(t).hasClass("smooth-scroll")) return o.preventDefault(), a = e(".fixed-action-btn"), (r = a).hasClass("active") ? n(r) : i(r), !1;
            var a, r
        })
    }(jQuery),
    function (e) {
        var t = 240,
            i = 1440,
            n = 300,
            o = 200,
            a = 50,
            r = 200,
            s = "easeOutQuad",
            l = "easeOutCubic",
            c = !0,
            u = !1,
            d = function () {
                function d(p, h) {
                    _classCallCheck(this, d), this.defaults = {
                        MENU_WIDTH: t,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: i,
                        timeDurationOpen: n,
                        timeDurationClose: o,
                        timeDurationOverlayOpen: a,
                        timeDurationOverlayClose: r,
                        easingOpen: s,
                        easingClose: l,
                        showOverlay: c,
                        showCloseButton: u
                    }, this.$element = p, this.$elementCloned = p.clone().css({
                        display: "inline-block",
                        lineHeight: "24px"
                    }), this.options = this.assignOptions(h), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function () {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function () {
                        var e = this;
                        this.$dragTarget.on("click", function () {
                            return e.removeMenu()
                        }), this.$elementCloned.on("click", function () {
                            return e.removeMenu()
                        }), this.$dragTarget.on("touchstart", function (t) {
                            e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                        }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function (e) {
                        if ("touchmove" === e.type) {
                            var t = e.touches[0],
                                i = t.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (i > this.options.MENU_WIDTH ? i = this.options.MENU_WIDTH : i < 0 && (i = 0)), this.translateSidenavX(i), this.updateOverlayOpacity(i)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function (e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function (e) {
                        if ("left" === this.options.edge) {
                            var t = e >= this.options.MENU_WIDTH / 2;
                            this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                        } else {
                            var i = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                            this.menuOut = i;
                            var n = e - this.options.MENU_WIDTH / 2;
                            n < 0 && (n = 0), this.$menu.css("transform", "translateX(".concat(n, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function (e) {
                        var t;
                        t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({
                            opacity: t
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function () {
                        var t = this;
                        !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function () {
                            return t.removeMenu()
                        }), this.$body.append(this.$sidenavOverlay))
                    }
                }, {
                    key: "disableScrolling",
                    value: function () {
                        var e = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(e)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function (e) {
                        if ("touchend" === e.type) {
                            var t = e.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                            var i = this.calculateTouchVelocityX(),
                                n = t.clientX,
                                o = n - this.options.MENU_WIDTH,
                                a = n - this.options.MENU_WIDTH / 2;
                            o > 0 && (o = 0), a < 0 && (a = 0), "left" === this.options.edge ? (this.menuOut && i <= .3 || i < -.5 ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || i > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && i >= -.3 || i > .5 ? (this.translateMenuX([0, a], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || i < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, a], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function () {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function (e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.velocityX,
                                i = e.gesture.center.x,
                                n = i - this.options.MENU_WIDTH,
                                o = i - this.options.MENU_WIDTH / 2;
                            n > 0 && (n = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== n && this.translateMenuX([0, n], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, n], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function (e, t) {
                        this.$menu.velocity({
                            translateX: e
                        }, {
                            duration: "string" == typeof t ? Number(t) : t,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function () {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: this.options.timeDurationOverlayClose,
                            queue: !1,
                            easing: this.options.easingOpen,
                            complete: function () {
                                e(this).remove()
                            }
                        })
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function () {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: this.options.timeDurationOverlayOpen,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function () {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function () {
                        var t = this;
                        this.$element.on("click", function (i) {
                            if (i.preventDefault(), !0 === t.menuOut) t.removeMenu();
                            else {
                                t.menuOut = !0, !0 === t.options.showOverlay ? e("#sidenav-overlay").length || (t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay)) : t.showCloseButton();
                                var n = [];
                                n = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], "matrix(1, 0, 0, 1, 0, 0)" !== t.$menu.css("transform") && t.$menu.velocity({
                                    translateX: n
                                }, {
                                    duration: t.options.timeDurationOpen,
                                    queue: !1,
                                    easing: t.options.easingOpen
                                }), t.$sidenavOverlay.on("click", function () {
                                    return t.removeMenu()
                                }), t.$sidenavOverlay.on("touchmove", t.touchmoveEventHandler.bind(t)), t.$menu.on("touchmove", function (e) {
                                    e.preventDefault(), t.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
                                }), t.menuOut = !0
                            }
                        })
                    }
                }, {
                    key: "closeOnClick",
                    value: function () {
                        var e = this;
                        !0 === this.options.closeOnClick && (this.$menu.on("click", "a:not(.collapsible-header)", function () {
                            return e.removeMenu()
                        }), "translateX(0)" === this.$menu.css("transform") && this.click(function () {
                            return e.removeMenu()
                        }))
                    }
                }, {
                    key: "showCloseButton",
                    value: function () {
                        !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                            borderTop: "1px solid rgba(153,153,153,.3)"
                        }))
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function () {
                        var t = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), this.$menu.find("input[type=text]").on("touchstart", function () {
                            t.$menu.addClass("transform-fix-input")
                        }), e(window).resize(function () {
                            if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                            else if (!1 === t.menuOut) {
                                var e = "left" === t.options.edge ? "-100" : "100";
                                t.$menu.css("transform", "translateX(".concat(e, "%)"))
                            }
                        }))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function () {
                        var i = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH), i.css("width", this.options.MENU_WIDTH))
                    }
                }, {
                    key: "inputOnClick",
                    value: function () {
                        var e = this;
                        this.$menu.find("input[type=text]").on("touchstart", function () {
                            return e.$menu.css("transform", "translateX(0)")
                        })
                    }
                }, {
                    key: "assignOptions",
                    value: function (t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "removeMenu",
                    value: function (e) {
                        var t = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: this.options.timeDurationClose,
                            queue: !1,
                            easing: this.options.easingClose,
                            complete: function () {
                                !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.MENU_WIDTH))
                            }
                        }), this.$menu.hasClass("transform-fix-input") && this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1
                    }
                }]), d
            }();
        e.fn.sideNav = function (t) {
            return this.each(function () {
                new d(e(this), t)
            })
        }
    }(jQuery), $(function (e) {
        e("#toggle").click(function () {
            e("#slide-out").hasClass("slim") ? (e("#slide-out").removeClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left"), e(".fixed-sn .double-nav").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15.9rem"
            }), e(".fixed-sn main").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            }), e(".fixed-sn footer").css({
                transition: "all .3s ease-in-out",
                "padding-left": "15rem"
            })) : (e("#slide-out").addClass("slim"), e(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"), e(".fixed-sn .double-nav").css("padding-left", "4.6rem"), e(".fixed-sn main").css("padding-left", "3.7rem"), e(".fixed-sn footer").css("padding-left", "3.7rem"))
        })
    }),
    function (e) {
        e.fn.collapsible = function (t) {
            var i = {
                accordion: void 0
            };

            function n(t, i) {
                $panelHeaders = t.find("> li > .collapsible-header"), i.hasClass("active") ? i.parent().addClass("active") : i.parent().removeClass("active"), i.parent().hasClass("active") ? i.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        e(this).css("height", "")
                    }
                }) : i.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        e(this).css("height", "")
                    }
                }), $panelHeaders.not(i).removeClass("active").parent().removeClass("active"), $panelHeaders.not(i).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        e(this).css("height", "")
                    }
                })
            }

            function o(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function () {
                        e(this).css("height", "")
                    }
                })
            }

            function a(e) {
                return r(e).length > 0
            }

            function r(e) {
                return e.closest("li > .collapsible-header")
            }
            return t = e.extend(i, t), this.each(function () {
                var i = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = i.find("> li > .collapsible-header")).on("click.collapse", function (t) {
                    var o = e(t.target);
                    a(o) && (o = r(o)), o.toggleClass("active"), n(i, o)
                }), n(i, s.filter(".active").first())) : s.each(function () {
                    e(this).on("click.collapse", function (t) {
                        var i = e(t.target);
                        a(i) && (i = r(i)), i.toggleClass("active"), o(i)
                    }), e(this).hasClass("active") && o(e(this))
                })
            })
        }, e(".collapsible").collapsible()
    }(jQuery);
var MaterialSelectViewRenderer = function () {
    function e(t) {
        _classCallCheck(this, e), this.view = t
    }
    return _createClass(e, [{
        key: "destroy",
        value: function () {
            var e = this.view.$nativeSelect.data("select-id");
            this.view.$nativeSelect.data("select-id", null).removeClass("initialized"), this.view.$nativeSelect.parent().find("span.caret").remove(), this.view.$nativeSelect.parent().find("input").remove(), this.view.$nativeSelect.unwrap(), $("ul#select-options-".concat(e)).remove()
        }
    }, {
        key: "render",
        value: function () {
            this.setWrapperClasses(), this.setMaterialSelectInitialValue(), this.view.$nativeSelect.data("select-id", this.view.properties.id), this.view.$nativeSelect.before(this.view.$selectWrapper), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSelectLabel(), this.appendCustomTemplateParts(), this.shouldValidate && this.appendValidationFeedbackElements(), this.isRequired && this.enableValidation(), this.isDisabled || (this.setMaterialOptionsListMaxHeight(), this.view.dropdown = this.view.$materialSelect.dropdown({
                hover: !1,
                closeOnClick: !1,
                resetScroll: !1
            })), this.shouldInheritTabindex && this.view.$materialSelect.attr("tabindex", this.view.$nativeSelect.attr("tabindex")), this.isDefaultMaterialInput && this.view.$mainLabel.css("top", "-7px"), this.isCustomSelect && this.view.$materialSelect.css({
                display: "inline-block",
                width: "100%",
                height: "calc(1.5em + .75rem + 2px)",
                padding: ".375rem 1.75rem .375rem .75rem",
                fontSize: "1rem",
                lineHeight: "1.5",
                backgroundColor: "#fff",
                border: "1px solid #ced4da"
            }), this.addAccessibilityAttributes(), this.markInitialized()
        }
    }, {
        key: "setWrapperClasses",
        value: function () {
            this.isDefaultMaterialInput ? this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class").split(" ").filter(function (e) {
                return "md-form" !== e
            }).join(" ")).css({
                marginTop: "1.5rem",
                marginBottom: "1.5rem"
            }) : this.view.$selectWrapper.addClass(this.view.$nativeSelect.attr("class"))
        }
    }, {
        key: "setMaterialSelectInitialValue",
        value: function () {
            if (this.view.options.placeholder) this.view.$materialSelect.attr("placeholder", this.view.options.placeholder), this.view.$nativeSelect.find('option[value=""][selected][disabled][data-mdb-placeholder]').length || this.view.$nativeSelect.prepend('<option value="" selected disabled data-mdb-placeholder></option>');
            else {
                var e = this.view.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                this.view.$materialSelect.val(e)
            }
        }
    }, {
        key: "appendDropdownIcon",
        value: function () {
            this.isDisabled && this.view.$dropdownIcon.addClass("disabled"), this.view.$selectWrapper.append(this.view.$dropdownIcon)
        }
    }, {
        key: "appendMaterialSelect",
        value: function () {
            this.view.$selectWrapper.append(this.view.$materialSelect)
        }
    }, {
        key: "appendMaterialOptionsList",
        value: function () {
            this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.view.$selectWrapper.append(this.view.$materialOptionsList)
        }
    }, {
        key: "appendNativeSelect",
        value: function () {
            this.view.$nativeSelect.appendTo(this.view.$selectWrapper)
        }
    }, {
        key: "appendSelectLabel",
        value: function () {
            (this.view.$materialSelect.val() || this.view.options.placeholder) && this.view.$mainLabel.addClass("active"), this.view.$mainLabel[this.isDisabled ? "addClass" : "removeClass"]("disabled"), this.view.$mainLabel.appendTo(this.view.$selectWrapper)
        }
    }, {
        key: "appendCustomTemplateParts",
        value: function () {
            var e = this;
            this.view.$customTemplateParts.each(function (t, i) {
                $(i).appendTo(e.view.$materialOptionsList).wrap("<li></li>")
            }), this.view.$btnSave.appendTo(this.view.$materialOptionsList)
        }
    }, {
        key: "appendValidationFeedbackElements",
        value: function () {
            this.view.$validFeedback.insertAfter(this.view.$selectWrapper), this.view.$invalidFeedback.insertAfter(this.view.$selectWrapper)
        }
    }, {
        key: "enableValidation",
        value: function () {
            this.view.$nativeSelect.css({
                position: "absolute",
                top: "1rem",
                left: "0",
                height: "0",
                width: "0",
                opacity: "0",
                padding: "0",
                "pointer-events": "none"
            }), -1 === this.view.$nativeSelect.attr("style").indexOf("inline!important") && this.view.$nativeSelect.attr("style", "".concat(this.view.$nativeSelect.attr("style"), " display: inline!important;")), this.view.$nativeSelect.attr("tabindex", -1), this.view.$nativeSelect.data("inherit-tabindex", !1)
        }
    }, {
        key: "setMaterialOptionsListMaxHeight",
        value: function () {
            var e = this.view.options.visibleOptions,
                t = 0;
            this.view.$materialOptionsList.show();
            var i = this.view.$materialOptionsList.find("li").not(".disabled"),
                n = i.first().height(),
                o = i.length;
            if (this.isSearchable && (t += this.view.$searchInput.height()), this.isMultiple && (t += this.view.$toggleAll.height()), this.view.$materialOptionsList.hide(), e >= 0 && e < o) {
                var a = n * e + t;
                this.view.$materialOptionsList.css("max-height", a), this.view.$materialSelect.data("maxheight", a)
            }
        }
    }, {
        key: "addAccessibilityAttributes",
        value: function () {
            this.view.$materialSelect.attr({
                role: this.isSearchable ? "combobox" : "listbox",
                "aria-multiselectable": this.isMultiple,
                "aria-disabled": this.isDisabled,
                "aria-required": this.isRequired,
                "aria-labelledby": this.view.$mainLabel.attr("id"),
                "aria-haspopup": !0,
                "aria-expanded": !1
            }), this.view.$searchInput && this.view.$searchInput.attr("role", "searchbox"), this.view.$materialOptionsList.find("li").each(function () {
                var e = $(this);
                e.attr({
                    role: "option",
                    "aria-selected": e.hasClass("active"),
                    "aria-disabled": e.hasClass("disabled")
                })
            })
        }
    }, {
        key: "markInitialized",
        value: function () {
            this.view.$nativeSelect.addClass("initialized")
        }
    }, {
        key: "appendSearchInputOption",
        value: function () {
            var e = this.view.$nativeSelect.attr("searchable"),
                t = this.isDefaultMaterialInput ? "" : "md-form",
                i = this.isDefaultMaterialInput ? "select-default mb-2" : "";
            this.view.$searchInput = $('<span class="search-wrap ml-2"><div class="'.concat(t, ' mt-0"><input type="text" class="search w-100 d-block ').concat(i, '" tabindex="-1" placeholder="').concat(e, '"></div></span>')), this.view.$materialOptionsList.append(this.view.$searchInput), this.view.$searchInput.on("click", function (e) {
                return e.stopPropagation()
            })
        }
    }, {
        key: "appendAddOptionBtn",
        value: function () {
            this.view.$searchInput.append(this.view.$addOptionBtn), this.view.$addOptionBtn.on("click", this.addNewOption.bind(this))
        }
    }, {
        key: "buildMaterialOptions",
        value: function () {
            var e = this;
            this.view.$nativeSelectChildren.each(function (t, i) {
                var n = $(i);
                if (n.is("option")) e.buildSingleOption(n, e.isMultiple ? "multiple" : "");
                else if (n.is("optgroup")) {
                    var o = $('<li class="optgroup"><span>'.concat(n.attr("label"), "</span></li>"));
                    e.view.$materialOptionsList.append(o), n.children("option").each(function (t, i) {
                        e.buildSingleOption($(i), "optgroup-option")
                    })
                }
            })
        }
    }, {
        key: "appendToggleAllCheckbox",
        value: function () {
            var e = this.view.$materialOptionsList.find("li").first();
            e.hasClass("disabled") && e.find("input").prop("disabled") ? e.after(this.view.$toggleAll) : this.view.$materialOptionsList.find("li").first().before(this.view.$toggleAll)
        }
    }, {
        key: "addNewOption",
        value: function () {
            var e = this.view.$searchInput.find("input").val(),
                t = $('<option value="'.concat(e.toLowerCase(), '" selected>').concat(e, "</option>")).prop("selected", !0);
            this.isMultiple || this.view.$nativeSelectChildren.each(function (e, t) {
                $(t).attr("selected", !1)
            }), this.view.$nativeSelect.append(t)
        }
    }, {
        key: "buildSingleOption",
        value: function (e, t) {
            var i = e.is(":disabled") ? "disabled" : "",
                n = e.is(":selected") ? "active" : "",
                o = "optgroup-option" === t ? "optgroup-option" : "",
                a = e.data("icon"),
                r = e.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(e.data("fas"), " ").concat(this.view.options.fasClasses, '"></i> ') : "",
                s = e.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(e.data("far"), " ").concat(this.view.options.farClasses, '"></i> ') : "",
                l = e.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(e.data("fab"), " ").concat(this.view.options.fabClasses, '"></i> ') : "",
                c = e.attr("class"),
                u = a ? '<img alt="" src="'.concat(a, '" class="').concat(c, '">') : "",
                d = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
            this.view.$materialOptionsList.append($('<li class="'.concat(i, " ").concat(n, " ").concat(o, " ").concat(this.view.options.copyClassesOption ? c : "", ' ">').concat(u, '<span class="filtrable">').concat(d, " ").concat(e.html(), " ").concat(r, " ").concat(s, " ").concat(l, "</span></li>")))
        }
    }, {
        key: "shouldValidate",
        get: function () {
            return this.view.options.validate
        }
    }, {
        key: "shouldInheritTabindex",
        get: function () {
            return !1 !== this.view.$nativeSelect.data("inherit-tabindex")
        }
    }, {
        key: "isMultiple",
        get: function () {
            return this.view.isMultiple
        }
    }, {
        key: "isSearchable",
        get: function () {
            return this.view.isSearchable
        }
    }, {
        key: "isRequired",
        get: function () {
            return this.view.isRequired
        }
    }, {
        key: "isEditable",
        get: function () {
            return this.view.isEditable
        }
    }, {
        key: "isDisabled",
        get: function () {
            return this.view.isDisabled
        }
    }, {
        key: "isDefaultMaterialInput",
        get: function () {
            return this.view.options.defaultMaterialInput
        }
    }, {
        key: "isCustomSelect",
        get: function () {
            return this.view.$materialSelect.hasClass("custom-select") && this.view.$materialSelect.hasClass("select-dropdown")
        }
    }]), e
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
var MaterialSelectView = function () {
    function e(t, i) {
        var {
            options: n,
            properties: {
                id: o
            }
        } = i;
        _classCallCheck(this, e), this.properties = {
            id: o,
            isMultiple: Boolean(t.attr("multiple")),
            isSearchable: Boolean(t.attr("searchable")),
            isRequired: Boolean(t.attr("required")),
            isEditable: Boolean(t.attr("editable"))
        }, this.options = this._copyOptions(n), this.$nativeSelect = t, this.$selectWrapper = $('<div class="select-wrapper"></div>'), this.$materialOptionsList = $('<ul id="select-options-'.concat(this.properties.id, '" class="dropdown-content select-dropdown w-100 ').concat(this.properties.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = t.find("option:selected").text() || t.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = $('<input type="text" class="'.concat(this.options.defaultMaterialInput ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control", '" ').concat(!this.options.validate && 'readonly="true"', ' required="').concat(this.options.validate ? "true" : "false", '" ').concat(this.$nativeSelect.is(" :disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.properties.id, '" value=""/>')), this.$dropdownIcon = this.options.defaultMaterialInput ? "" : $('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$noSearchResultsInfo = $("<li><span><i>".concat(this.options.labels.noSearchResults, "</i></span></li>")), this.$toggleAll = $('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.options.labels.selectAll, "</label></span></li>")), this.$addOptionBtn = $('<i class="select-add-option fas fa-plus"></i>'), this.$mainLabel = this._jQueryFallback(this.$nativeSelect.next("label.mdb-main-label"), $("label[for='".concat(this.properties.id, "']"))), this.$customTemplateParts = this._jQueryFallback(this.$nativeSelect.nextUntil("select", ".mdb-select-template-part"), $("[data-mdb-select-template-part-for='".concat(this.properties.id, "']"))), this.$btnSave = this.$nativeSelect.nextUntil("select", ".btn-save"), this.$validFeedback = $('<div class="valid-feedback">'.concat(this.options.labels.validFeedback, "</div>")), this.$invalidFeedback = $('<div class="invalid-feedback">'.concat(this.options.labels.invalidFeedback, "</div>")), this.keyCodes = {
            tab: 9,
            esc: 27,
            enter: 13,
            arrowUp: 38,
            arrowDown: 40
        }, this.renderer = new MaterialSelectViewRenderer(this), this.dropdown = null
    }
    return _createClass(e, [{
        key: "destroy",
        value: function () {
            this.renderer.destroy()
        }
    }, {
        key: "render",
        value: function () {
            this.renderer.render()
        }
    }, {
        key: "selectPreselectedOptions",
        value: function (e) {
            var t = this;
            if (this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function (i, n) {
                var o = n.index;
                t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(o).addClass("selected active").find(":checkbox").prop("checked", !0), e(o)
            });
            else {
                var i = this.$nativeSelect.find("option:selected").first(),
                    n = this.$nativeSelect.find("option").index(i.get(0));
                i.get(0) && "disabled" !== i.attr("disabled") && e(n)
            }
        }
    }, {
        key: "bindMaterialSelectFocus",
        value: function () {
            var e = this;
            this.$materialSelect.on("focus", function (t) {
                var i = $(t.target);
                if ($("ul.select-dropdown").not(e.$materialOptionsList.get(0)).is(":visible") && $("input.select-dropdown").trigger("close"), e.$mainLabel.addClass("active"), !e.$materialOptionsList.is(":visible")) {
                    i.trigger("open", ["focus"]);
                    var n = i.val(),
                        o = e.$materialOptionsList.find("li").filter(function () {
                            return $(this).text().toLowerCase() === n.toLowerCase()
                        }).get(0);
                    e._selectSingleOption(o), e._updateDropdownScrollTop()
                }
                e.isMultiple || e.$mainLabel.addClass("active")
            })
        }
    }, {
        key: "bindMaterialSelectClick",
        value: function () {
            var e = this;
            this.$materialSelect.on("mousedown", function (e) {
                3 === e.which && e.preventDefault()
            }), this.$materialSelect.on("click", function (t) {
                e.$mainLabel.addClass("active"), t.stopPropagation()
            })
        }
    }, {
        key: "bindMaterialSelectBlur",
        value: function () {
            var e = this;
            this.$materialSelect.on("blur", function (t) {
                var i = $(t);
                e.isMultiple || e.isSearchable || i.trigger("close"), e.$materialOptionsList.find("li.selected").removeClass("selected")
            })
        }
    }, {
        key: "bindMaterialSelectKeydown",
        value: function () {
            var e = this;
            this.$materialSelect.on("keydown", function (t) {
                var i = $(t.target),
                    n = t.which === e.keyCodes.tab,
                    o = t.which === e.keyCodes.esc,
                    a = t.which === e.keyCodes.enter,
                    r = a && t.shiftKey,
                    s = t.which === e.keyCodes.arrowUp,
                    l = t.which === e.keyCodes.arrowDown,
                    c = e.$materialOptionsList.is(":visible");
                if (n) e._handleTabKey(i);
                else if (!l || c) {
                    if (!a || c) switch (t.preventDefault(), !0) {
                        case r:
                            return e._handleEnterWithShiftKey(i);
                        case a:
                            return e._handleEnterKey(i);
                        case l || s:
                            return e._handleArrowUpDownKey(t.which);
                        case o:
                            return e._handleEscKey(i);
                        default:
                            return e._handleLetterKey(t)
                    }
                } else i.trigger("open")
            })
        }
    }, {
        key: "bindMaterialSelectDropdownToggle",
        value: function () {
            var e = this;
            this.$materialSelect.on("open", function () {
                return e.$materialSelect.attr("aria-expanded", "true")
            }), this.$materialSelect.on("close", function () {
                return e.$materialSelect.attr("aria-expanded", "false")
            })
        }
    }, {
        key: "bindToggleAllClick",
        value: function (e) {
            var t = this;
            this.$toggleAll.on("click", function (i) {
                var n = $(t.$toggleAll).find('input[type="checkbox"]').first(),
                    o = Boolean($(n).prop("checked")),
                    a = !o;
                $(n).prop("checked", !o), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each(function (i, n) {
                    var o = $(n),
                        r = o.find('input[type="checkbox"]');
                    o.attr("aria-selected", a), a && r.is(":checked") || !a && !r.is(":checked") || $(n).is(":hidden") || $(n).is(".disabled") || (r.prop("checked", a), t.$nativeSelect.find("option").eq(i).prop("selected", a), o.toggleClass("active"), t._selectOption(n), e(i))
                }), t.$nativeSelect.data("stop-refresh", !0), t._triggerChangeOnNativeSelect(), t.$nativeSelect.removeData("stop-refresh"), i.stopPropagation()
            })
        }
    }, {
        key: "bindMaterialOptionMousedown",
        value: function () {
            var e = this;
            this.$materialOptionsList.on("mousedown", function (t) {
                var i = t.target;
                $(".modal-content").find(e.$materialOptionsList).length && i.scrollHeight > i.offsetHeight && t.preventDefault()
            })
        }
    }, {
        key: "bindMaterialOptionClick",
        value: function (e) {
            var t = this;
            this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function (i, n) {
                $(n).on("click", function (o) {
                    o.stopPropagation();
                    var a = $(n);
                    if (!a.hasClass("disabled") && !a.hasClass("optgroup")) {
                        var r = !0;
                        if (t.isMultiple) {
                            a.find('input[type="checkbox"]').prop("checked", function (e, t) {
                                return !t
                            });
                            var s = Boolean(t.$nativeSelect.find("optgroup").length),
                                l = t._isToggleAllPresent() ? a.index() - 1 : a.index();
                            switch (!0) {
                                case t.isSearchable && s:
                                    r = e(l - a.prevAll(".optgroup").length - 1);
                                    break;
                                case t.isSearchable:
                                    r = e(l - 1);
                                    break;
                                case s:
                                    r = e(l - a.prevAll(".optgroup").length);
                                    break;
                                default:
                                    r = e(l)
                            }
                            t._isToggleAllPresent() && t._updateToggleAllOption(), t.$materialSelect.trigger("focus")
                        } else t.$materialOptionsList.find("li").removeClass("active").attr("aria-selected", "false"), t.$materialSelect.val(a.text().replace(/  +/g, " ").trim()), t.$materialSelect.trigger("close");
                        a.toggleClass("active");
                        var c = a.attr("aria-selected");
                        a.attr("aria-selected", "true" === c ? "false" : "true"), t._selectSingleOption(a), t.$nativeSelect.data("stop-refresh", !0), t.$nativeSelect.find("option").eq(i).prop("selected", r), t.$nativeSelect.removeData("stop-refresh"), t._triggerChangeOnNativeSelect(), t.$materialSelect.val() && t.$mainLabel.addClass("active"), a.hasClass("li-added") && t.renderer.buildSingleOption(a, "")
                    }
                })
            })
        }
    }, {
        key: "bindSingleMaterialOptionClick",
        value: function () {
            var e = this;
            this.$materialOptionsList.find("li").on("click", function () {
                e.$materialSelect.trigger("close")
            })
        }
    }, {
        key: "bindSearchInputKeyup",
        value: function () {
            var e = this;
            this.$searchInput.find(".search").on("keyup", function (t) {
                var i = $(t.target),
                    n = t.which === e.keyCodes.tab,
                    o = t.which === e.keyCodes.esc,
                    a = t.which === e.keyCodes.enter,
                    r = a && t.shiftKey,
                    s = t.which === e.keyCodes.arrowUp;
                if (t.which === e.keyCodes.arrowDown || n || o || s) return e.$materialSelect.focus(), void e._handleArrowUpDownKey(t.which);
                var l = i.closest("ul"),
                    c = i.val(),
                    u = l.find("li span.filtrable"),
                    d = !1;
                if (u.each(function () {
                        var e = $(this);
                        if ("string" == typeof this.outerHTML) {
                            var t = this.textContent.toLowerCase();
                            t.includes(c.toLowerCase()) ? e.show().parent().show() : e.hide().parent().hide(), t.trim() === c.toLowerCase() && (d = !0)
                        }
                    }), a) return e.isEditable && !d ? void e.renderer.addNewOption() : (r && e._handleEnterWithShiftKey(i), void e.$materialSelect.trigger("open"));
                e.$addOptionBtn[c && e.isEditable && !d ? "show" : "hide"](), 0 !== u.filter(function (e, t) {
                    return $(t).is(":visible") && !$(t).parent().hasClass("disabled")
                }).length ? (e.$toggleAll.show(), e.$materialOptionsList.find(e.$noSearchResultsInfo).remove(), e._updateToggleAllOption()) : (e.$toggleAll.hide(), e.$materialOptionsList.append(e.$noSearchResultsInfo)), e.dropdown.updatePosition(e.$materialSelect, e.$materialOptionsList)
            })
        }
    }, {
        key: "bindHtmlClick",
        value: function () {
            var e = this;
            $("html").on("click", function (t) {
                $(t.target).closest("#select-options-".concat(e.properties.id)).length || $(t.target).hasClass("mdb-select") || !$("#select-options-".concat(e.properties.id)).hasClass("active") || (e.$materialSelect.trigger("close"), e.$materialSelect.val() || e.options.placeholder || e.$mainLabel.removeClass("active")), e.isSearchable && null !== e.$searchInput && e.$materialOptionsList.hasClass("active") && e.$materialOptionsList.find(".search-wrap input.search").focus()
            })
        }
    }, {
        key: "bindMobileDevicesMousedown",
        value: function () {
            $("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", function (t) {
                e.isMobileDevice && (t.clientX >= t.target.clientWidth || t.clientY >= t.target.clientHeight) && t.preventDefault()
            })
        }
    }, {
        key: "bindSaveBtnClick",
        value: function () {
            var e = this;
            this.$btnSave.on("click", function () {
                e.$materialSelect.trigger("close")
            })
        }
    }, {
        key: "_isToggleAllPresent",
        value: function () {
            return this.$materialOptionsList.find(this.$toggleAll).length
        }
    }, {
        key: "_updateToggleAllOption",
        value: function () {
            var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
                t = e.filter(":checked"),
                i = this.$toggleAll.find("[type=checkbox]").is(":checked");
            t.length !== e.length || i ? t.length < e.length && i && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
        }
    }, {
        key: "_handleTabKey",
        value: function (e) {
            this._handleEscKey(e)
        }
    }, {
        key: "_handleEnterWithShiftKey",
        value: function (e) {
            this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(e)
        }
    }, {
        key: "_handleEnterKey",
        value: function (e) {
            this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this.isMultiple || e.trigger("close")
        }
    }, {
        key: "_handleArrowUpDownKey",
        value: function (e) {
            var t = this,
                i = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),
                n = i.first(),
                o = i.last(),
                a = this.$materialOptionsList.find("li.selected").length > 0,
                r = null,
                s = null;
            if (e === this.keyCodes.arrowUp) {
                var l = a ? this.$materialOptionsList.find("li.selected").first() : o,
                    c = l.prev("li:visible:not(.disabled, .select-toggle-all)");
                s = c, i.each(function (e, n) {
                    $(n).hasClass(t.options.keyboardActiveClass) && (c = i.eq(e - 1), s = i.eq(e))
                }), r = l.is(n) || !a ? l : c
            } else {
                var u = a ? this.$materialOptionsList.find("li.selected").first() : n,
                    d = u.next("li:visible:not(.disabled, .select-toggle-all)");
                s = d, i.each(function (e, n) {
                    $(n).hasClass(t.options.keyboardActiveClass) && (d = i.eq(e + 1), s = i.eq(e))
                }), r = u.is(o) || !a ? u : d
            }
            this._selectSingleOption(r), this._removeKeyboardActiveClass(), r.find("input").is(":checked") || r.removeClass(this.options.keyboardActiveClass), s.hasClass("selected") || s.find("input").is(":checked") || !this.isMultiple || s.removeClass("active", this.options.keyboardActiveClass), r.addClass(this.options.keyboardActiveClass), r.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + r.position().top)
        }
    }, {
        key: "_handleEscKey",
        value: function (e) {
            this._removeKeyboardActiveClass(), e.trigger("close")
        }
    }, {
        key: "_handleLetterKey",
        value: function (e) {
            var t = this;
            if (this._removeKeyboardActiveClass(), this.isSearchable) {
                var i = e.which > 46 && e.which < 91,
                    n = e.which > 93 && e.which < 106,
                    o = 8 === e.which;
                (i || n) && this.$searchInput.find("input").val(e.key).focus(), o && this.$searchInput.find("input").val("").focus()
            } else {
                var a = "",
                    r = String.fromCharCode(e.which).toLowerCase(),
                    s = Object.keys(this.keyCodes).map(function (e) {
                        return t.keyCodes[e]
                    });
                if (r && -1 === s.indexOf(e.which)) {
                    a += r;
                    var l = this.$materialOptionsList.find("li").filter(function (e, t) {
                        return $(t).text().toLowerCase().includes(a)
                    }).first();
                    this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), l.addClass("active"), this._selectSingleOption(l)
                }
            }
        }
    }, {
        key: "_removeKeyboardActiveClass",
        value: function () {
            this.$materialOptionsList.find("li").removeClass(this.options.keyboardActiveClass)
        }
    }, {
        key: "_triggerChangeOnNativeSelect",
        value: function () {
            var e = new KeyboardEvent("change", {
                bubbles: !0,
                cancelable: !0
            });
            this.$nativeSelect.get(0).dispatchEvent(e)
        }
    }, {
        key: "_selectSingleOption",
        value: function (e) {
            this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
        }
    }, {
        key: "_updateDropdownScrollTop",
        value: function () {
            var e = this.$materialOptionsList.find("li.active").first();
            e.length ? this.$materialOptionsList.scrollTo(e) : this.$materialOptionsList.scrollTop(0)
        }
    }, {
        key: "_selectOption",
        value: function (e) {
            $(e).addClass("selected")
        }
    }, {
        key: "_copyOptions",
        value: function (e) {
            return $.extend({}, e)
        }
    }, {
        key: "_jQueryFallback",
        value: function () {
            for (var e = null, t = 0; t < arguments.length; t++)
                if ((e = t < 0 || arguments.length <= t ? void 0 : arguments[t]).length) return e;
            return e
        }
    }, {
        key: "isMultiple",
        get: function () {
            return this.properties.isMultiple
        }
    }, {
        key: "isSearchable",
        get: function () {
            return this.properties.isSearchable
        }
    }, {
        key: "isRequired",
        get: function () {
            return this.properties.isRequired
        }
    }, {
        key: "isEditable",
        get: function () {
            return this.properties.isEditable
        }
    }, {
        key: "isDisabled",
        get: function () {
            return this.$nativeSelect.is(":disabled")
        }
    }], [{
        key: "isMobileDevice",
        get: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }
    }]), e
}();

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
jQuery(function (e) {
        var t, i = function () {
            function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                _classCallCheck(this, t), this.options = {
                    destroy: this.fallback().or(i.destroy).or(!1).value(),
                    validate: this.fallback().or(e.attr("data-validate")).or(i.validate).or(!1).value(),
                    selectId: this.fallback().or(e.attr("data-native-id")).or(i.selectId).or(null).value(),
                    defaultMaterialInput: this.fallback().or(e.attr("data-default-material-input")).or(i.defaultMaterialInput).or(!1).value(),
                    fasClasses: this.fallback().or(e.attr("data-fas-classes")).or(i.fasClasses).or("").value(),
                    farClasses: this.fallback().or(e.attr("data-far-classes")).or(i.farClasses).or("").value(),
                    fabClasses: this.fallback().or(e.attr("data-fab-classes")).or(i.fabClasses).or("").value(),
                    copyClassesOption: this.fallback().or(e.attr("data-copy-classes-option")).or(i.copyClassesOption).or(!1).value(),
                    labels: {
                        selectAll: this.fallback().or(e.attr("data-label-select-all")).or((i.labels || {}).selectAll).or("Select all").value(),
                        optionsSelected: this.fallback().or(e.attr("data-label-options-selected")).or((i.labels || {}).optionsSelected).or("options selected").value(),
                        validFeedback: this.fallback().or(e.attr("data-label-valid-feedback")).or((i.labels || {}).validFeedback).or("Ok").value(),
                        invalidFeedback: this.fallback().or(e.attr("data-label-invalid-feedback")).or((i.labels || {}).invalidFeedback).or("Incorrect value").value(),
                        noSearchResults: this.fallback().or(e.attr("data-label-no-search-results")).or((i.labels || {}).noSearchResults).or("No results").value()
                    },
                    keyboardActiveClass: this.fallback().or(e.attr("data-keyboard-active-class")).or(i.keyboardActiveClass).or("heavy-rain-gradient").value(),
                    placeholder: this.fallback().or(e.attr("data-placeholder")).or(i.placeholder).or(null).value(),
                    visibleOptions: this.fallback().or(e.attr("data-visible-options")).or(i.visibleOptions).or(5).value(),
                    maxSelectedOptions: this.fallback().or(e.attr("data-max-selected-options")).or(i.maxSelectedOptions).or(5).value()
                }, this.uuid = e.attr("id") || this.options.selectId || this._randomUUID(), this.view = new MaterialSelectView(e, {
                    options: this.options,
                    properties: {
                        id: this.uuid
                    }
                }), this.selectedOptionsIndexes = [], t.mutationObservers = []
            }
            return _createClass(t, [{
                key: "init",
                value: function () {
                    var e = this;
                    this.options.destroy ? this.view.destroy() : (this.isInitialized && this.view.destroy(), this.view.render(), this.view.selectPreselectedOptions(function (t) {
                        return e._toggleSelectedValue(t)
                    }), this.bindEvents())
                }
            }, {
                key: "bindEvents",
                value: function () {
                    var e = this;
                    this.bindMutationObserverChange(), this.view.bindMaterialSelectFocus(), this.view.bindMaterialSelectClick(), this.view.bindMaterialSelectBlur(), this.view.bindMaterialSelectKeydown(), this.view.bindMaterialSelectDropdownToggle(), this.view.bindToggleAllClick(function (t) {
                        return e._toggleSelectedValue(t)
                    }), this.view.bindMaterialOptionMousedown(), this.view.bindMaterialOptionClick(function (t) {
                        return e._toggleSelectedValue(t)
                    }), !this.view.isMultiple && this.view.isSearchable && this.view.bindSingleMaterialOptionClick(), this.view.isSearchable && this.view.bindSearchInputKeyup(), this.view.bindHtmlClick(), this.view.bindMobileDevicesMousedown(), this.view.bindSaveBtnClick()
                }
            }, {
                key: "bindMutationObserverChange",
                value: function () {
                    var e = new MutationObserver(this._onMutationObserverChange.bind(this));
                    e.observe(this.view.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), e.customId = this.uuid, e.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(e)
                }
            }, {
                key: "_onMutationObserverChange",
                value: function (i) {
                    i.forEach(function (i) {
                        var n = e(i.target).closest("select");
                        !0 !== n.data("stop-refresh") && ("childList" === i.type || "attributes" === i.type && e(i.target).is("option")) && (t.clearMutationObservers(), n.materialSelect({
                            destroy: !0
                        }), n.materialSelect())
                    })
                }
            }, {
                key: "_toggleSelectedValue",
                value: function (e) {
                    var t = this.selectedOptionsIndexes.indexOf(e),
                        i = -1 !== t;
                    return i ? this.selectedOptionsIndexes.splice(t, 1) : this.selectedOptionsIndexes.push(e), this.view.$nativeSelect.find("option").eq(e).prop("selected", !i), this._setValueToMaterialSelect(), !i
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function () {
                    var e = this,
                        t = "",
                        i = this.selectedOptionsIndexes.length;
                    this.selectedOptionsIndexes.forEach(function (i) {
                        return t += ", ".concat(e.view.$nativeSelect.find("option").eq(i).text().replace(/  +/g, " ").trim())
                    }), 0 === (t = this.options.maxSelectedOptions >= 0 && i > this.options.maxSelectedOptions ? "".concat(i, " ").concat(this.options.labels.optionsSelected) : t.substring(2)).length && (t = this.view.$nativeSelect.find("option:disabled").eq(0).text()), this.view.$nativeSelect.siblings("".concat(this.options.defaultMaterialInput ? "input.multi-bs-select" : "input.select-dropdown")).val(t)
                }
            }, {
                key: "_randomUUID",
                value: function () {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                        var i = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? i : 3 & i | 8).toString(16)
                    })
                }
            }, {
                key: "fallback",
                value: function () {
                    return {
                        _value: void 0,
                        or: function (e) {
                            return void 0 !== e && void 0 === this._value && (this._value = e), this
                        },
                        value: function () {
                            return this._value
                        }
                    }
                }
            }, {
                key: "isInitialized",
                get: function () {
                    return Boolean(this.view.$nativeSelect.data("select-id")) && this.view.$nativeSelect.hasClass("initialized")
                }
            }], [{
                key: "clearMutationObservers",
                value: function () {
                    t.mutationObservers.forEach(function (e) {
                        e.disconnect(), e.customStatus = "stopped"
                    })
                }
            }]), t
        }();
        e.fn.materialSelect = function (t) {
            e(this).not(".browser-default").not(".custom-select").each(function () {
                new i(e(this), t).init()
            })
        }, t = e.fn.val, e.fn.val = function (e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
                i.clearMutationObservers(), this.materialSelect({
                    destroy: !0
                });
                var n = t.call(this, e);
                return this.materialSelect(), n
            }
            return t.call(this, e)
        }
    }),
    function (e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function (e) {
        var t = e(window),
            i = e(document),
            n = e(document.documentElement),
            o = null != document.documentElement.style.transition;

        function a(t, n, c, d) {
            if (!t) return a;
            var p = !1,
                h = {
                    id: t.id || "P" + Math.abs(~~(Math.random() * new Date)),
                    handlingOpen: !1
                },
                f = c ? e.extend(!0, {}, c.defaults, d) : d || {},
                v = e.extend({}, a.klasses(), f.klass),
                m = e(t),
                g = 2,
                b = function () {
                    return this.start()
                },
                y = b.prototype = {
                    constructor: b,
                    $node: m,
                    start: function () {
                        return h && h.start ? y : (h.methods = {}, h.start = !0, h.open = !1, h.type = t.type, t.autofocus = t == u(), t.readOnly = !f.editable, t.id = t.id || h.id, "text" != t.type && (t.type = "text"), y.component = new c(y, f), y.$root = e('<div class="' + v.picker + '" id="' + t.id + '_root" />'), l(y.$root[0], "hidden", !0), y.$holder = e(w()).appendTo(y.$root), k(), f.formatSubmit && function () {
                            var i;
                            !0 === f.hiddenName ? (i = t.name, t.name = "") : i = (i = ["string" == typeof f.hiddenPrefix ? f.hiddenPrefix : "", "string" == typeof f.hiddenSuffix ? f.hiddenSuffix : "_submit"])[0] + t.name + i[1];
                            y._hidden = e('<input type=hidden name="' + i + '"' + (m.data("value") || t.value ? ' value="' + y.get("select", f.formatSubmit) + '"' : "") + ">")[0], m.on("change." + h.id, function () {
                                y._hidden.value = t.value ? y.get("select", f.formatSubmit) : ""
                            })
                        }(), function () {
                            m.data(n, y).addClass(v.input).val(m.data("value") ? y.get("select", f.format) : t.value).on("focus." + h.id + " click." + h.id, (i = function (e) {
                                e.preventDefault(), y.open()
                            }, o = 100, function () {
                                var e = this,
                                    t = arguments,
                                    n = a && !r;
                                clearTimeout(r), r = setTimeout(function () {
                                    r = null, a || i.apply(e, t)
                                }, o), n && i.apply(e, t)
                            })).on("mousedown", function () {
                                h.handlingOpen = !0;
                                var t = function () {
                                    setTimeout(function () {
                                        e(document).off("mouseup", t), h.handlingOpen = !1
                                    }, 0)
                                };
                                e(document).on("mouseup", t)
                            }), f.editable || m.on("keydown." + h.id, C);
                            var i, o, a, r;
                            l(t, {
                                haspopup: !0,
                                expanded: !1,
                                readonly: !1,
                                owns: t.id + "_root"
                            })
                        }(), f.containerHidden ? e(f.containerHidden).append(y._hidden) : m.after(y._hidden), f.container ? e(f.container).append(y.$root) : m.after(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: f.onStart,
                            render: f.onRender,
                            stop: f.onStop,
                            open: f.onOpen,
                            close: f.onClose,
                            set: f.onSet
                        }), p = function (e) {
                            var t;
                            e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                            return "fixed" == t
                        }(y.$holder[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function (t) {
                        return t ? (y.$holder = e(w()), k(), y.$root.html(y.$holder)) : y.$root.find("." + v.box).html(y.component.nodes(h.open)), y.trigger("render")
                    },
                    stop: function () {
                        return h.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), m.removeClass(v.input).removeData(n), setTimeout(function () {
                            m.off("." + h.id)
                        }, 0), t.type = h.type, t.readOnly = !1, y.trigger("stop"), h.methods = {}, h.start = !1, y) : y
                    },
                    open: function (n) {
                        return g++, h.open ? y : g < 4 && f.editable ? y : (setTimeout(function () {
                            y.$root.addClass(v.opened), l(y.$root[0], "hidden", !1)
                        }, 0), !1 !== n && (h.open = !0, p && e("body").css("overflow", "hidden").css("padding-right", "+=" + r()), p && o ? y.$holder.find("." + v.frame).one("transitionend", function () {
                            y.$holder.eq(0).focus()
                        }) : setTimeout(function () {
                            y.$holder.eq(0).focus()
                        }, 0), i.on("click." + h.id + " focusin." + h.id, function (e) {
                            if (!h.handlingOpen) {
                                var i = s(e, t);
                                e.isSimulated || i == t || i == document || 3 == e.which || y.close(i === y.$holder[0])
                            }
                        }).on("keydown." + h.id, function (i) {
                            var n = i.keyCode,
                                o = y.component.key[n],
                                r = s(i, t);
                            27 == n ? y.close(!0) : r != y.$holder[0] || !o && 13 != n ? e.contains(y.$root[0], r) && 13 == n && (i.preventDefault(), r.click()) : (i.preventDefault(), o ? a._.trigger(y.component.key.go, y, [a._.trigger(o)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || (y.set("select", y.component.item.highlight), f.closeOnSelect && y.close(!0)))
                        })), y.trigger("open"))
                    },
                    close: function (n) {
                        return g = 0, h.open ? (n && (f.editable ? t.click() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function () {
                            y.$holder.on("focus.toOpen", x)
                        }, 0))), m.removeClass(v.active), l(t, "expanded", !1), setTimeout(function () {
                            y.$root.removeClass(v.opened + " " + v.focused), l(y.$root[0], "hidden", !0)
                        }, 0), p && e("body").css("overflow", "").css("padding-right", "-=" + r()), document.activeElement.blur(), i.off("." + h.id), h.open = !1, y.trigger("close")) : y
                    },
                    clear: function (e) {
                        return document.activeElement.blur(), y.set("clear", null, e)
                    },
                    set: function (t, i, n) {
                        var o, a, r = e.isPlainObject(t),
                            s = r ? t : {};
                        if (n = r && e.isPlainObject(i) ? i : n || {}, t) {
                            for (o in r || (s[t] = i), s) a = s[o], o in y.component.item && (void 0 === a && (a = null), y.component.set(o, a, n)), "select" != o && "clear" != o || !f.updateInput || m.val("clear" == o ? "" : y.get(o, f.format)).trigger("change");
                            y.render()
                        }
                        return n.muted ? y : y.trigger("set", s)
                    },
                    get: function (e, i) {
                        if (null != h[e = e || "value"]) return h[e];
                        if ("valueSubmit" == e) {
                            if (y._hidden) return y._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return t.value;
                        if (e in y.component.item) {
                            if ("string" == typeof i) {
                                var n = y.component.get(e);
                                return n ? a._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
                            }
                            return y.component.get(e)
                        }
                    },
                    on: function (t, i, n) {
                        var o, a, r = e.isPlainObject(t),
                            s = r ? t : {};
                        if (t)
                            for (o in r || (s[t] = i), s) a = s[o], n && (o = "_" + o), h.methods[o] = h.methods[o] || [], h.methods[o].push(a);
                        return y
                    },
                    off: function () {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1)(t = i[e]) in h.methods && delete h.methods[t];
                        return y
                    },
                    trigger: function (e, t) {
                        var i = function (e) {
                            var i = h.methods[e];
                            i && i.map(function (e) {
                                a._.trigger(e, y, [t])
                            })
                        };
                        return i("_" + e), i(e), y
                    }
                };

            function w() {
                return a._.node("div", a._.node("div", a._.node("div", a._.node("div", y.component.nodes(h.open), v.box), v.wrap), v.frame), v.holder, 'tabindex="-1"')
            }

            function k() {
                y.$holder.on({
                    keydown: C,
                    "focus.toOpen": x,
                    blur: function () {
                        m.removeClass(v.target)
                    },
                    focusin: function (e) {
                        y.$root.removeClass(v.focused), e.stopPropagation()
                    },
                    "mousedown click": function (i) {
                        var n = s(i, t);
                        n != y.$holder[0] && (i.stopPropagation(), "mousedown" != i.type || e(n).is("input, select, textarea, button, option") || (i.preventDefault(), y.$holder.eq(0).focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                    var t = e(this),
                        i = t.data(),
                        n = t.hasClass(v.navDisabled) || t.hasClass(v.disabled),
                        o = u();
                    o = o && (o.type || o.href ? o : null), (n || o && !e.contains(y.$root[0], o)) && y.$holder.eq(0).focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? (y.set("select", i.pick), f.closeOnSelect && y.close(!0)) : i.clear ? (y.clear(), f.closeOnClear && y.close(!0)) : i.close && y.close(!0)
                })
            }

            function x(e) {
                e.stopPropagation(), m.addClass(v.target), y.$root.addClass(v.focused), y.open()
            }

            function C(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                if (27 == t) return y.close(!0), !1;
                (32 == t || i || !h.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? y.clear().close() : y.open())
            }
            return new b
        }

        function r() {
            if (n.height() <= t.height()) return 0;
            var i = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var a = e('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
            return i.remove(), o - a
        }

        function s(e, t) {
            var i = [];
            return e.path && (i = e.path), e.originalEvent && e.originalEvent.path && (i = e.originalEvent.path), i && i.length > 0 ? t && i.indexOf(t) >= 0 ? t : i[0] : e.target
        }

        function l(t, i, n) {
            if (e.isPlainObject(i))
                for (var o in i) c(t, o, i[o]);
            else c(t, i, n)
        }

        function c(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function u() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        return a.klasses = function (e) {
            return {
                picker: e = e || "picker",
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, a._ = {
            group: function (e) {
                for (var t, i = "", n = a._.trigger(e.min, e); n <= a._.trigger(e.max, e, [n]); n += e.i) t = a._.trigger(e.item, e, [n]), i += a._.node(e.node, t[0], t[1], t[2]);
                return i
            },
            node: function (t, i, n, o) {
                return i ? "<" + t + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + (i = e.isArray(i) ? i.join("") : i) + "</" + t + ">" : ""
            },
            lead: function (e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function (e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function (e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function (e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function (e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function (t, i) {
                e.isPlainObject(t) || (t = {
                    attribute: i
                });
                for (var n in i = "", t) {
                    var o = ("role" == n ? "" : "aria-") + n,
                        a = t[n];
                    i += null == a ? "" : o + '="' + t[n] + '"'
                }
                return i
            }
        }, a.extend = function (t, i) {
            e.fn[t] = function (n, o) {
                var r = this.data(t);
                return "picker" == n ? r : r && "string" == typeof n ? a._.trigger(r[n], r, [o]) : this.each(function () {
                    e(this).data(t) || new a(this, t, i, n)
                })
            }, e.fn[t].defaults = i.defaults
        }, a
    }),
    function (e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function (e, t) {
        var i, n = e._;

        function o(e, t) {
            var i, n = this,
                o = e.$node[0],
                a = o.value,
                r = e.$node.data("value"),
                s = r || a,
                l = r ? t.formatSubmit : t.format,
                c = function () {
                    return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", t.min).set("max", t.max).set("now"), s ? n.set("select", s, {
                format: l,
                defaultValue: !0
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function () {
                    return c() ? -1 : 1
                },
                37: function () {
                    return c() ? 1 : -1
                },
                go: function (e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", i, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function () {
                e.$root.find("." + t.klass.selectMonth).on("change", function () {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function () {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function () {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
            }, 1).on("close", function () {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        o.prototype.set = function (e, t, i) {
            var n = this,
                o = n.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, n) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function (o) {
                return t = n[o](e, t, i)
            }).pop(), "select" == e ? n.set("highlight", o.select, i) : "highlight" == e ? n.set("view", o.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, o.prototype.get = function (e) {
            return this.item[e]
        }, o.prototype.create = function (e, i, o) {
            var a;
            return (i = void 0 === i ? e : i) == -1 / 0 || i == 1 / 0 ? a = i : t.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : this.create().obj) : i = n.isInteger(i) || n.isDate(i) ? this.normalize(new Date(i), o) : this.now(e, i, o), {
                year: a || i.getFullYear(),
                month: a || i.getMonth(),
                date: a || i.getDate(),
                day: a || i.getDay(),
                obj: a || i,
                pick: a || i.getTime()
            }
        }, o.prototype.createRange = function (e, i) {
            var o = this,
                a = function (e) {
                    return !0 === e || t.isArray(e) || n.isDate(e) ? o.create(e) : e
                };
            return n.isInteger(e) || (e = a(e)), n.isInteger(i) || (i = a(i)), n.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : n.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: a(e),
                to: a(i)
            }
        }, o.prototype.withinRange = function (e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, o.prototype.overlapRanges = function (e, t) {
            return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
        }, o.prototype.now = function (e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, o.prototype.navigate = function (e, i, n) {
            var o, a, r, s, l = t.isArray(i),
                c = t.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (a = i.year, r = i.month, s = i.date) : (a = +i[0], r = +i[1], s = +i[2]), n && n.nav && u && u.month !== r && (a = u.year, r = u.month), a = (o = new Date(a, r + (n && n.nav ? n.nav : 0), 1)).getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r;) s -= 1;
                i = [a, r, s]
            }
            return i
        }, o.prototype.normalize = function (e) {
            return e.setHours(0, 0, 0, 0), e
        }, o.prototype.measure = function (e, t) {
            return n.isInteger(t) ? t = this.now(e, t, {
                rel: t
            }) : t ? "string" == typeof t && (t = this.parse(e, t)) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, o.prototype.viewset = function (e, t) {
            return this.create([t.year, t.month, 1])
        }, o.prototype.validate = function (e, i, o) {
            var a, r, s, l, c = this,
                u = i,
                d = o && o.interval ? o.interval : 1,
                p = -1 === c.item.enable,
                h = c.item.min,
                f = c.item.max,
                v = p && c.item.disable.filter(function (e) {
                    if (t.isArray(e)) {
                        var o = c.create(e).pick;
                        o < i.pick ? a = !0 : o > i.pick && (r = !0)
                    }
                    return n.isInteger(e)
                }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!p && c.disabled(i) || p && c.disabled(i) && (v || a || r) || !p && (i.pick <= h.pick || i.pick >= f.pick)))
                for (p && !v && (!r && d > 0 || !a && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= h.pick ? (s = !0, d = 1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, d = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
            return i
        }, o.prototype.disabled = function (e) {
            var i = this,
                o = i.item.disable.filter(function (o) {
                    return n.isInteger(o) ? e.day === (i.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || n.isDate(o) ? e.pick === i.create(o).pick : t.isPlainObject(o) ? i.withinRange(o, e) : void 0
                });
            return o = o.length && !o.filter(function (e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === i.item.enable ? !o : o || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, o.prototype.parse = function (e, t, i) {
            var o = this,
                a = {};
            return t && "string" == typeof t ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function (e) {
                var i = o.formats[e],
                    r = i ? n.trigger(i, o, [t, a]) : e.replace(/^!/, "").length;
                i && (a[e] = t.substr(0, r)), t = t.substr(r)
            }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : t
        }, o.prototype.formats = function () {
            function e(e, t, i) {
                var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function (e, t) {
                    return e ? n.digits(e) : t.date
                },
                dd: function (e, t) {
                    return e ? 2 : n.lead(t.date)
                },
                ddd: function (e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function (e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function (e, t) {
                    return e ? n.digits(e) : t.month + 1
                },
                mm: function (e, t) {
                    return e ? 2 : n.lead(t.month + 1)
                },
                mmm: function (t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function (t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function (e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function (e, t) {
                    return e ? 4 : t.year
                },
                toArray: function (e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function (e, t) {
                    var i = this;
                    return i.formats.toArray(e).map(function (e) {
                        return n.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), o.prototype.isDateExact = function (e, i) {
            return n.isInteger(e) && n.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (n.isDate(e) || t.isArray(e)) && (n.isDate(i) || t.isArray(i)) ? this.create(e).pick === this.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (this.isDateExact(e.from, i.from) && this.isDateExact(e.to, i.to))
        }, o.prototype.isDateOverlap = function (e, i) {
            var o = this.settings.firstDay ? 1 : 0;
            return n.isInteger(e) && (n.isDate(i) || t.isArray(i)) ? (e = e % 7 + o) === this.create(i).day + 1 : n.isInteger(i) && (n.isDate(e) || t.isArray(e)) ? (i = i % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && this.overlapRanges(e, i)
        }, o.prototype.flipEnable = function (e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, o.prototype.deactivate = function (e, i) {
            var o = this,
                a = o.item.disable.slice(0);
            return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), a = []) : !0 === i ? (o.flipEnable(-1), a = []) : i.map(function (e) {
                for (var i, r = 0; r < a.length; r += 1)
                    if (o.isDateExact(e, a[r])) {
                        i = !0;
                        break
                    } i || (n.isInteger(e) || n.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && a.push(e)
            }), a
        }, o.prototype.activate = function (e, i) {
            var o = this,
                a = o.item.disable,
                r = a.length;
            return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), a = []) : !1 === i ? (o.flipEnable(-1), a = []) : i.map(function (e) {
                var i, s, l, c;
                for (l = 0; l < r; l += 1) {
                    if (s = a[l], o.isDateExact(s, e)) {
                        i = a[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e)[3] || i.push("inverted") : n.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateExact(a[l], e)) {
                            a[l] = null;
                            break
                        } if (c)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateOverlap(a[l], e)) {
                            a[l] = null;
                            break
                        } i && a.push(i)
            }), a.filter(function (e) {
                return null != e
            })
        }, o.prototype.nodes = function (e) {
            var t, i, o = this,
                a = o.settings,
                r = o.item,
                s = r.now,
                l = r.select,
                c = r.highlight,
                u = r.view,
                d = r.disable,
                p = r.min,
                h = r.max,
                f = (t = (a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), i = a.weekdaysFull.slice(0), a.firstDay && (t.push(t.shift()), i.push(i.shift())), n.node("thead", n.node("tr", n.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function (e) {
                        return [t[e], a.klass.weekdays, 'scope=col title="' + i[e] + '"']
                    }
                })))),
                v = function (e) {
                    return n.node("button", " ", a.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= h.year && u.month >= h.month || !e && u.year <= p.year && u.month <= p.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + n.ariaAttr({
                        role: "button",
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + (e ? a.labelMonthNext : a.labelMonthPrev) + '"')
                },
                m = function () {
                    var t = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return a.selectMonths ? n.node("select", n.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function (e) {
                            return [t[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == p.year && e < p.month || u.year == h.year && e > h.month ? " disabled" : "")]
                        }
                    }), a.klass.selectMonth, (e ? "" : "disabled") + " " + n.ariaAttr({
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + a.labelMonthSelect + '"') : n.node("div", t[u.month], a.klass.month)
                },
                g = function () {
                    var t = u.year,
                        i = !0 === a.selectYears ? 5 : ~~(a.selectYears / 2);
                    if (i) {
                        var r = p.year,
                            s = h.year,
                            l = t - i,
                            c = t + i;
                        if (r > l && (c += r - l, l = r), s < c) {
                            var d = l - r,
                                f = c - s;
                            l -= d > f ? f : d, c = s
                        }
                        return n.node("select", n.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function (e) {
                                return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                            }
                        }), a.klass.selectYear, (e ? "" : "disabled") + " " + n.ariaAttr({
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + a.labelYearSelect + '"')
                    }
                    return n.node("div", t, a.klass.year)
                };
            return n.node("div", (a.selectYears ? g() + m() : m() + g()) + v() + v(1), a.klass.header) + n.node("table", f + n.node("tbody", n.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function (e) {
                    var t = a.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [n.group({
                        min: 7 * e - u.day + t + 1,
                        max: function () {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function (e) {
                            e = o.create([u.year, u.month, e + (a.firstDay ? 1 : 0)]);
                            var t, i = l && l.pick == e.pick,
                                r = c && c.pick == e.pick,
                                f = d && o.disabled(e) || e.pick < p.pick || e.pick > h.pick,
                                v = n.trigger(o.formats.toString, o, [a.format, e]);
                            return [n.node("div", e.date, (t = [a.klass.day], t.push(u.month == e.month ? a.klass.infocus : a.klass.outfocus), s.pick == e.pick && t.push(a.klass.now), i && t.push(a.klass.selected), r && t.push(a.klass.highlighted), f && t.push(a.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + n.ariaAttr({
                                role: "gridcell",
                                label: v,
                                selected: !(!i || o.$node.val() !== v) || null,
                                activedescendant: !!r || null,
                                disabled: !!f || null
                            })), "", n.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), a.klass.table, 'id="' + o.$node[0].id + '_table" ' + n.ariaAttr({
                role: "grid",
                controls: o.$node[0].id,
                readonly: !0
            })) + n.node("div", n.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })), a.klass.footer)
        }, o.defaults = {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            updateInput: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: (i = e.klasses().picker + "__") + "table",
                header: i + "header",
                navPrev: i + "nav--prev btn btn-flat",
                navNext: i + "nav--next btn btn-flat",
                navDisabled: i + "nav--disabled",
                month: i + "month",
                year: i + "year",
                selectMonth: i + "select--month",
                selectYear: i + "select--year",
                weekdays: i + "weekday",
                day: i + "day",
                disabled: i + "day--disabled",
                selected: i + "day--selected",
                highlighted: i + "day--highlighted",
                now: i + "day--today",
                infocus: i + "day--infocus",
                outfocus: i + "day--outfocus",
                footer: i + "footer",
                buttonClear: i + "button--clear",
                buttonToday: i + "button--today",
                buttonClose: i + "button--close"
            }
        }, e.extend("pickadate", o)
    }), $.extend($.fn.pickadate.defaults, {
        selectMonths: !0,
        selectYears: 15,
        onRender: function () {
            var e = this.$root,
                t = this.get("highlight", "yyyy"),
                i = this.get("highlight", "dd"),
                n = this.get("highlight", "mmm"),
                o = this.get("highlight", "dddd").slice(0, 3),
                a = n.charAt(0).toUpperCase() + n.slice(1);
            e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + ', </div><div class="picker__month-display"><div>' + a + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
        }
    }),
    function () {
        var e, t, i, n = window.jQuery,
            o = n(window),
            a = n(document),
            r = "http://www.w3.org/2000/svg",
            s = "SVGAngle" in window && ((t = document.createElement("div")).innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == r, t.innerHTML = "", e),
            l = "transition" in (i = document.createElement("div").style) || "WebkitTransition" in i || "MozTransition" in i || "msTransition" in i || "OTransition" in i,
            c = "ontouchstart" in window,
            u = "mousedown" + (c ? " touchstart" : ""),
            d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
            p = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
            h = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

        function f(e) {
            return document.createElementNS(r, e)
        }

        function v(e, t, i) {
            var n;
            return function () {
                var o = this,
                    a = arguments,
                    r = i && !n;
                clearTimeout(n), n = setTimeout(function () {
                    n = null, i || e.apply(o, a)
                }, t), r && e.apply(o, a)
            }
        }

        function m(e) {
            return (e < 10 ? "0" : "") + e
        }
        var g = 0;
        var b = 135,
            y = 110,
            w = 80,
            k = 20,
            x = 2 * b,
            C = l ? 350 : 1,
            S = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

        function T(e, t) {
            var i, o, r = n(S),
                l = r.find(".clockpicker-plate"),
                c = r.find(".picker__holder"),
                h = r.find(".clockpicker-hours"),
                T = r.find(".clockpicker-minutes"),
                $ = r.find(".clockpicker-am-pm-block"),
                M = "INPUT" === e.prop("tagName"),
                E = M ? e : e.find("input"),
                P = (E.prop("type"), n("label[for=" + E.attr("id") + "]")),
                I = this;
            if (this.id = (o = ++g + "", (i = "cp") ? i + o : o), this.element = e, this.holder = c, this.options = t, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = M, this.input = E, this.label = P, this.popover = r, this.plate = l, this.hoursView = h, this.minutesView = T, this.amPmBlock = $, this.spanHours = r.find(".clockpicker-span-hours"), this.spanMinutes = r.find(".clockpicker-span-minutes"), this.spanAmPm = r.find(".clockpicker-span-am-pm"), this.footer = r.find(".picker__footer"), this.amOrPm = "", t.twelvehour) {
                var A = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                n(A);
                t.ampmclickable ? (this.spanAmPm.empty(), n('<div id="click-am">AM</div>').on("click", function () {
                    I.spanAmPm.children("#click-am").addClass("text-primary"), I.spanAmPm.children("#click-pm").removeClass("text-primary"), I.amOrPm = "AM"
                }).appendTo(this.spanAmPm), n('<div id="click-pm">PM</div>').on("click", function () {
                    I.spanAmPm.children("#click-pm").addClass("text-primary"), I.spanAmPm.children("#click-am").removeClass("text-primary"), I.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function () {
                    I.amOrPm = "AM", I.amPmBlock.children(".pm-button").removeClass("active"), I.amPmBlock.children(".am-button").addClass("active"), I.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function () {
                    I.amOrPm = "PM", I.amPmBlock.children(".am-button").removeClass("active"), I.amPmBlock.children(".pm-button").addClass("active"), I.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            t.darktheme && r.addClass("darktheme"), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "3" : "1") + '">' + t.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(this.footer), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "4" : "2") + '">' + t.cleartext + "</button>").click(n.proxy(this.clearInput, this)).appendTo(this.footer), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), E.on("click.clockpicker", v(n.proxy(this.show, this), 100));
            var L, D, _, H, R = n('<div class="clockpicker-tick"></div>');
            if (t.twelvehour)
                for (L = 0; L < 12; L += t.hourstep) D = R.clone(), _ = L / 6 * Math.PI, H = y, D.css("font-size", "140%"), D.css({
                    left: b + Math.sin(_) * H - k,
                    top: b - Math.cos(_) * H - k
                }), D.html(0 === L ? 12 : L), h.append(D), D.on(u, V);
            else
                for (L = 0; L < 24; L += t.hourstep) {
                    D = R.clone(), _ = L / 6 * Math.PI;
                    var W = L > 0 && L < 13;
                    H = W ? w : y, D.css({
                        left: b + Math.sin(_) * H - k,
                        top: b - Math.cos(_) * H - k
                    }), W && D.css("font-size", "120%"), D.html(0 === L ? "00" : L), h.append(D), D.on(u, V)
                }
            var F = Math.max(t.minutestep, 5);
            for (L = 0; L < 60; L += F)
                for (L = 0; L < 60; L += 5) D = R.clone(), _ = L / 30 * Math.PI, D.css({
                    left: b + Math.sin(_) * y - k,
                    top: b - Math.cos(_) * y - k
                }), D.css("font-size", "140%"), D.html(m(L)), T.append(D), D.on(u, V);

            function V(e, i) {
                var n = l.offset(),
                    o = /^touch/.test(e.type),
                    r = n.left + b,
                    c = n.top + b,
                    u = (o ? e.originalEvent.touches[0] : e).pageX - r,
                    h = (o ? e.originalEvent.touches[0] : e).pageY - c,
                    f = Math.sqrt(u * u + h * h),
                    v = !1;
                if (!i || !(f < y - k || f > y + k)) {
                    e.preventDefault();
                    var m = setTimeout(function () {
                        I.popover.addClass("clockpicker-moving")
                    }, 200);
                    s && l.append(I.canvas), I.setHand(u, h, !i, !0), a.off(d).on(d, function (e) {
                        e.preventDefault();
                        var t = /^touch/.test(e.type),
                            i = (t ? e.originalEvent.touches[0] : e).pageX - r,
                            n = (t ? e.originalEvent.touches[0] : e).pageY - c;
                        (v || i !== u || n !== h) && (v = !0, I.setHand(i, n, !1, !0))
                    }), a.off(p).on(p, function (e) {
                        a.off(p), e.preventDefault();
                        var n = /^touch/.test(e.type),
                            o = (n ? e.originalEvent.changedTouches[0] : e).pageX - r,
                            s = (n ? e.originalEvent.changedTouches[0] : e).pageY - c;
                        (i || v) && o === u && s === h && I.setHand(o, s), "hours" === I.currentView ? I.toggleView("minutes", C / 2) : t.autoclose && (I.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
                            I.done()
                        }, C / 2)), l.prepend(N), clearTimeout(m), I.popover.removeClass("clockpicker-moving"), a.off(d)
                    })
                }
            }
            if (l.on(u, function (e) {
                    0 === n(e.target).closest(".clockpicker-tick").length && V(e, !0)
                }), s) {
                var N = r.find(".clockpicker-canvas"),
                    Y = f("svg");
                Y.setAttribute("class", "clockpicker-svg"), Y.setAttribute("width", x), Y.setAttribute("height", x);
                var j = f("g");
                j.setAttribute("transform", "translate(" + b + "," + b + ")");
                var X = f("circle");
                X.setAttribute("class", "clockpicker-canvas-bearing"), X.setAttribute("cx", 0), X.setAttribute("cy", 0), X.setAttribute("r", 2);
                var B = f("line");
                B.setAttribute("x1", 0), B.setAttribute("y1", 0);
                var z = f("circle");
                z.setAttribute("class", "clockpicker-canvas-bg"), z.setAttribute("r", k);
                var q = f("circle");
                q.setAttribute("class", "clockpicker-canvas-fg"), q.setAttribute("r", 5), j.appendChild(B), j.appendChild(z), j.appendChild(q), j.appendChild(X), Y.appendChild(j), N.append(Y), this.hand = B, this.bg = z, this.fg = q, this.bearing = X, this.g = j, this.canvas = N
            }
            O(this.options.init)
        }

        function O(e) {
            e && "function" == typeof e && e()
        }
        T.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            cleartext: "Clear",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !1,
            vibrate: !0,
            hourstep: 1,
            minutestep: 1,
            ampmSubmit: !1,
            container: "body"
        }, T.prototype.toggle = function () {
            this[this.isShown ? "hide" : "show"]()
        }, T.prototype.locate = function () {
            var e = this.element;
            n(this.options.container).append(this.popover), e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
            this.popover.show()
        }, T.prototype.parseInputValue = function () {
            var e = this.input.prop("value") || this.options.default || "";
            if ("now" === e && (e = new Date(+new Date + this.options.fromnow)), e instanceof Date && (e = e.getHours() + ":" + e.getMinutes()), e = e.split(":"), this.hours = +e[0] || 0, this.minutes = +(e[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
                var t = (e[1] + "").replace(/\d+/g, "").toLowerCase();
                this.amOrPm = this.hours > 12 || "pm" === t ? "PM" : "AM"
            }
        }, T.prototype.show = function (e) {
            if (!this.isShown) {
                O(this.options.beforeShow), n(":input").each(function () {
                    n(this).attr("tabindex", -1)
                });
                var t = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), n(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function () {
                    t.isShown && t.locate()
                }), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(m(this.hours)), this.spanMinutes.html(m(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, a.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, v(function (e) {
                    var i = n(e.target);
                    0 === i.closest(t.popover.find(".picker__wrap")).length && 0 === i.closest(t.input).length && t.hide()
                }, 100)), a.on("keyup.clockpicker." + this.id, v(function (e) {
                    27 === e.keyCode && t.hide()
                }, 100)), O(this.options.afterShow)
            }
        }, T.prototype.hide = function () {
            O(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), n(document.body).css("overflow", "visible"), this.isShown = !1, n(":input").each(function (e) {
                n(this).attr("tabindex", e + 1)
            }), a.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), a.off("keyup.clockpicker." + this.id), this.popover.hide(), O(this.options.afterHide)
        }, T.prototype.toggleView = function (e, t) {
            var i = !1;
            "minutes" === e && "visible" === n(this.hoursView).css("visibility") && (O(this.options.beforeHourSelect), i = !0);
            var o = "hours" === e,
                a = o ? this.hoursView : this.minutesView,
                r = o ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), r.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
                r.css("visibility", "hidden")
            }, C), i && O(this.options.afterHourSelect)
        }, T.prototype.resetClock = function (e) {
            var t = this.currentView,
                i = this[t],
                n = "hours" === t,
                o = i * (Math.PI / (n ? 6 : 30)),
                a = n && i > 0 && i < 13 ? w : y,
                r = Math.sin(o) * a,
                l = -Math.cos(o) * a,
                c = this;
            s && e ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
                c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(r, l)
            }, e)) : this.setHand(r, l)
        }, T.prototype.setHand = function (e, t, i, o) {
            var a, r, l = Math.atan2(e, -t),
                c = "hours" === this.currentView,
                u = Math.sqrt(e * e + t * t),
                d = this.options,
                p = c && u < (y + w) / 2,
                f = p ? w : y;
            if (a = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (f = y), l < 0 && (l = 2 * Math.PI + l), l = (r = Math.round(l / a)) * a, c ? (r *= d.hourstep, d.twelvehour || !p != r > 0 || (r += 12), d.twelvehour && 0 === r && (r = 12), 24 === r && (r = 0)) : 60 === (r *= d.minutestep) && (r = 0), c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : r % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== r && h && this.options.vibrate && (this.vibrateTimer || (navigator[h](10), this.vibrateTimer = setTimeout(n.proxy(function () {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = r, this[c ? "spanHours" : "spanMinutes"].html(m(r)), s) {
                o || !c && r % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var v = Math.sin(l) * f,
                    g = -Math.cos(l) * f;
                this.hand.setAttribute("x2", v), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", v), this.bg.setAttribute("cy", g), this.fg.setAttribute("cx", v), this.fg.setAttribute("cy", g)
            } else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
                var e = n(this);
                e.toggleClass("active", r === +e.html())
            })
        }, T.prototype.clearInput = function () {
            this.input.val(""), this.hide(), this.options.afterDone && "function" == typeof this.options.afterDone && this.options.afterDone(this.input, null)
        }, T.prototype.getTime = function (e) {
            this.parseInputValue();
            var t = this.hours;
            this.options.twelvehour && t < 12 && "PM" === this.amOrPm && (t += 12);
            var i = new Date;
            return i.setMinutes(this.minutes), i.setHours(t), i.setSeconds(0), e && e.apply(this.element, i) || i
        }, T.prototype.done = function () {
            O(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var e = this.input.prop("value"),
                t = this.hours,
                i = ":" + m(this.minutes);
            this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (t += 12), 12 === this.hours && "AM" === this.amOrPm && (t = 0)), i = m(t) + i, !this.isHTML5 && this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== e && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), O(this.options.afterDone)
        }, T.prototype.remove = function () {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
        }, n.fn.pickatime = function (e) {
            var t = Array.prototype.slice.call(arguments, 1);

            function i() {
                var i = n(this),
                    o = i.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, t);
                else {
                    var a = n.extend({}, T.DEFAULTS, i.data(), "object" == typeof e && e);
                    i.data("clockpicker", new T(i, a))
                }
            }
            if (1 == this.length) {
                var o = i.apply(this[0]);
                return void 0 !== o ? o : this
            }
            return this.each(i)
        }
    }(),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function () {
        "use strict";
        return function (e, t, i, n) {
            var o = {
                features: null,
                bind: function (e, t, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], i, !1)
                },
                isArray: function (e) {
                    return e instanceof Array
                },
                createEl: function (e, t) {
                    var i = document.createElement(t || "div");
                    return e && (i.className = e), i
                },
                getScrollY: function () {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function (e, t, i) {
                    o.bind(e, t, i, !0)
                },
                removeClass: function (e, t) {
                    var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function (e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function (e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function (e, t) {
                    for (var i = e.firstChild; i;) {
                        if (o.hasClass(i, t)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function (e, t, i) {
                    for (var n = e.length; n--;)
                        if (e[n][i] === t) return n;
                    return -1
                },
                extend: function (e, t, i) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (i && e.hasOwnProperty(n)) continue;
                            e[n] = t[n]
                        }
                },
                easing: {
                    sine: {
                        out: function (e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function (e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function () {
                    if (o.features) return o.features;
                    var e = o.createEl().style,
                        t = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
                        }
                        var r = n.match(/Android\s([0-9\.]*)/),
                            s = r ? r[1] : 0;
                        (s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                        t = d[p];
                        for (var h = 0; 3 > h; h++) l = u[h], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in e && (i[l] = c);
                        t && !i.raf && (t = t.toLowerCase(), i.raf = window[t + "RequestAnimationFrame"], i.raf && (i.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function (e) {
                            var t = (new Date).getTime(),
                                i = Math.max(0, 16 - (t - f)),
                                n = window.setTimeout(function () {
                                    e(t + i)
                                }, i);
                            return f = t + i, n
                        }, i.caf = function (e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, i, n) {
                t = t.split(" ");
                for (var o, a = (n ? "detach" : "attach") + "Event", r = function () {
                        i.handleEvent.call(i)
                    }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = r;
                            e[a]("on" + o, i["oldIE" + o])
                        } else e[a]("on" + o, i)
            });
            var a = this,
                r = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function (e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function (e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(r, n);
            var s, l, c, u, d, p, h, f, v, m, g, b, y, w, k, x, C, S, T, O, $, M, E, P, I, A, L, D, _, H, R, W, F, V, N, Y, j, X, B, z, q, U, K, Z, Q, G, J, ee, te, ie, ne, oe, ae, re, se, le = {
                    x: 0,
                    y: 0
                },
                ce = {
                    x: 0,
                    y: 0
                },
                ue = {
                    x: 0,
                    y: 0
                },
                de = {},
                pe = 0,
                he = {},
                fe = {
                    x: 0,
                    y: 0
                },
                ve = 0,
                me = !0,
                ge = [],
                be = {},
                ye = !1,
                we = function (e, t) {
                    o.extend(a, t.publicMethods), ge.push(e)
                },
                ke = function (e) {
                    var t = Vt();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                xe = {},
                Ce = function (e, t) {
                    return xe[e] || (xe[e] = []), xe[e].push(t)
                },
                Se = function (e) {
                    var t = xe[e];
                    if (t) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < t.length; n++) t[n].apply(a, i)
                    }
                },
                Te = function () {
                    return (new Date).getTime()
                },
                Oe = function (e) {
                    ae = e, a.bg.style.opacity = e * r.bgOpacity
                },
                $e = function (e, t, i, n, o) {
                    (!ye || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), e[M] = b + t + "px, " + i + "px" + y + " scale(" + n + ")"
                },
                Me = function (e) {
                    ee && (e && (m > a.currItem.fitRatio ? ye || (Kt(a.currItem, !1, !0), ye = !0) : ye && (Kt(a.currItem), ye = !1)), $e(ee, ue.x, ue.y, m))
                },
                Ee = function (e) {
                    e.container && $e(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                Pe = function (e, t) {
                    t[M] = b + e + "px, 0px" + y
                },
                Ie = function (e, t) {
                    if (!r.loop && t) {
                        var i = u + (fe.x * pe - e) / fe.x,
                            n = Math.round(e - ct.x);
                        (0 > i && n > 0 || i >= Vt() - 1 && 0 > n) && (e = ct.x + n * r.mainScrollEndFriction)
                    }
                    ct.x = e, Pe(e, d)
                },
                Ae = function (e, t) {
                    var i = ut[e] - he[e];
                    return ce[e] + le[e] + i - i * (t / g)
                },
                Le = function (e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                De = function (e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                _e = null,
                He = function () {
                    _e && (o.unbind(document, "mousemove", He), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Se("mouseUsed")), _e = setTimeout(function () {
                        _e = null
                    }, 100)
                },
                Re = function (e, t) {
                    var i = Bt(a.currItem, de, e);
                    return t && (J = i), i
                },
                We = function (e) {
                    return e || (e = a.currItem), e.initialZoomLevel
                },
                Fe = function (e) {
                    return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
                },
                Ve = function (e, t, i, n) {
                    return n === a.currItem.initialZoomLevel ? (i[e] = a.currItem.initialPosition[e], !0) : (i[e] = Ae(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
                },
                Ne = function (e) {
                    var t = "";
                    r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
                },
                Ye = function (e) {
                    e && (q || z || te || Y) && (e.preventDefault(), e.stopPropagation())
                },
                je = function () {
                    a.setScrollOffset(0, o.getScrollY())
                },
                Xe = {},
                Be = 0,
                ze = function (e) {
                    Xe[e] && (Xe[e].raf && A(Xe[e].raf), Be--, delete Xe[e])
                },
                qe = function (e) {
                    Xe[e] && ze(e), Xe[e] || (Be++, Xe[e] = {})
                },
                Ue = function () {
                    for (var e in Xe) Xe.hasOwnProperty(e) && ze(e)
                },
                Ke = function (e, t, i, n, o, a, r) {
                    var s, l = Te();
                    qe(e);
                    var c = function () {
                        if (Xe[e]) {
                            if ((s = Te() - l) >= n) return ze(e), a(i), void(r && r());
                            a((i - t) * o(s / n) + t), Xe[e].raf = I(c)
                        }
                    };
                    c()
                },
                Ze = {
                    shout: Se,
                    listen: Ce,
                    viewportSize: de,
                    options: r,
                    isMainScrollAnimating: function () {
                        return te
                    },
                    getZoomLevel: function () {
                        return m
                    },
                    getCurrentIndex: function () {
                        return u
                    },
                    isDragging: function () {
                        return X
                    },
                    isZooming: function () {
                        return Q
                    },
                    setScrollOffset: function (e, t) {
                        he.x = e, H = he.y = t, Se("updateScrollOffset", he)
                    },
                    applyZoomPan: function (e, t, i, n) {
                        ue.x = t, ue.y = i, m = e, Me(n)
                    },
                    init: function () {
                        if (!s && !l) {
                            var i;
                            a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), L = e.className, s = !0, R = o.detectFeatures(), I = R.raf, A = R.caf, M = R.transform, _ = R.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = x = [{
                                    el: a.container.children[0],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: a.container.children[1],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: a.container.children[2],
                                    wrap: 0,
                                    index: -1
                                }], x[0].el.style.display = x[2].el.style.display = "none",
                                function () {
                                    if (M) {
                                        var t = R.perspective && !P;
                                        return b = "translate" + (t ? "3d(" : "("), void(y = R.perspective ? ", 0px)" : ")")
                                    }
                                    M = "left", o.addClass(e, "pswp--ie"), Pe = function (e, t) {
                                        t.left = e + "px"
                                    }, Ee = function (e) {
                                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                            i = e.container.style,
                                            n = t * e.w,
                                            o = t * e.h;
                                        i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                                    }, Me = function () {
                                        if (ee) {
                                            var e = ee,
                                                t = a.currItem,
                                                i = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                n = i * t.w,
                                                o = i * t.h;
                                            e.width = n + "px", e.height = o + "px", e.left = ue.x + "px", e.top = ue.y + "px"
                                        }
                                    }
                                }(), v = {
                                    resize: a.updateSize,
                                    scroll: je,
                                    keydown: Ne,
                                    click: Ye
                                };
                            var n = R.isOldIOSPhone || R.isOldAndroid || R.isMobileOpera;
                            for (R.animationName && R.transform && !n || (r.showAnimationDuration = r.hideAnimationDuration = 0), i = 0; i < ge.length; i++) a["init" + ge[i]]();
                            t && (a.ui = new t(a, o)).init(), Se("firstUpdate"), u = u || r.index || 0, (isNaN(u) || 0 > u || u >= Vt()) && (u = 0), a.currItem = Ft(u), (R.isOldIOSPhone || R.isOldAndroid) && (me = !1), e.setAttribute("aria-hidden", "false"), r.modal && (me ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === H && (Se("initialLayout"), H = D = o.getScrollY());
                            var c = "pswp--open ";
                            for (r.mainClass && (c += r.mainClass + " "), r.showHideOpacity && (c += "pswp--animate_opacity "), c += P ? "pswp--touch" : "pswp--notouch", c += R.animationName ? " pswp--css_animation" : "", c += R.svg ? " pswp--svg" : "", o.addClass(e, c), a.updateSize(), p = -1, ve = null, i = 0; 3 > i; i++) Pe((i + p) * fe.x, x[i].el.style);
                            _ || o.bind(a.scrollWrap, f, a), Ce("initialZoomInEnd", function () {
                                a.setContent(x[0], u - 1), a.setContent(x[2], u + 1), x[0].el.style.display = x[2].el.style.display = "block", r.focus && e.focus(), o.bind(document, "keydown", a), R.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", He), o.bind(window, "resize scroll", a), Se("bindEvents")
                            }), a.setContent(x[1], u), a.updateCurrItem(), Se("afterInit"), me || (w = setInterval(function () {
                                Be || X || Q || m !== a.currItem.initialZoomLevel || a.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function () {
                        s && (s = !1, l = !0, Se("close"), o.unbind(window, "resize", a), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", He), R.transform && o.unbind(a.scrollWrap, "click", a), X && o.unbind(window, h, a), Se("unbindEvents"), Nt(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function () {
                        Se("destroy"), _t && clearTimeout(_t), e.setAttribute("aria-hidden", "true"), e.className = L, w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), ht(), Ue(), xe = null
                    },
                    panTo: function (e, t, i) {
                        i || (e > J.min.x ? e = J.min.x : e < J.max.x && (e = J.max.x), t > J.min.y ? t = J.min.y : t < J.max.y && (t = J.max.y)), ue.x = e, ue.y = t, Me()
                    },
                    handleEvent: function (e) {
                        e = e || window.event, v[e.type] && v[e.type](e)
                    },
                    goTo: function (e) {
                        var t = (e = ke(e)) - u;
                        ve = t, u = e, a.currItem = Ft(u), pe -= t, Ie(fe.x * pe), Ue(), te = !1, a.updateCurrItem()
                    },
                    next: function () {
                        a.goTo(u + 1)
                    },
                    prev: function () {
                        a.goTo(u - 1)
                    },
                    updateCurrZoomItem: function (e) {
                        if (e && Se("beforeChange", 0), x[1].el.children.length) {
                            var t = x[1].el.children[0];
                            ee = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ee = null;
                        J = a.currItem.bounds, g = m = a.currItem.initialZoomLevel, ue.x = J.center.x, ue.y = J.center.y, e && Se("afterChange")
                    },
                    invalidateCurrItems: function () {
                        k = !0;
                        for (var e = 0; 3 > e; e++) x[e].item && (x[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function (e) {
                        if (0 !== ve) {
                            var t, i = Math.abs(ve);
                            if (!(e && 2 > i)) {
                                a.currItem = Ft(u), ye = !1, Se("beforeChange", ve), i >= 3 && (p += ve + (ve > 0 ? -3 : 3), i = 3);
                                for (var n = 0; i > n; n++) ve > 0 ? (t = x.shift(), x[2] = t, Pe((++p + 2) * fe.x, t.el.style), a.setContent(t, u - i + n + 1 + 1)) : (t = x.pop(), x.unshift(t), Pe(--p * fe.x, t.el.style), a.setContent(t, u + i - n - 1 - 1));
                                if (ee && 1 === Math.abs(ve)) {
                                    var o = Ft(C);
                                    o.initialZoomLevel !== m && (Bt(o, de), Kt(o), Ee(o))
                                }
                                ve = 0, a.updateCurrZoomItem(), C = u, Se("afterChange")
                            }
                        }
                    },
                    updateSize: function (t) {
                        if (!me && r.modal) {
                            var i = o.getScrollY();
                            if (H !== i && (e.style.top = i + "px", H = i), !t && be.x === window.innerWidth && be.y === window.innerHeight) return;
                            be.x = window.innerWidth, be.y = window.innerHeight, e.style.height = be.y + "px"
                        }
                        if (de.x = a.scrollWrap.clientWidth, de.y = a.scrollWrap.clientHeight, je(), fe.x = de.x + Math.round(de.x * r.spacing), fe.y = de.y, Ie(fe.x * pe), Se("beforeResize"), void 0 !== p) {
                            for (var n, s, l, c = 0; 3 > c; c++) n = x[c], Pe((c + p) * fe.x, n.el.style), l = u + c - 1, r.loop && Vt() > 2 && (l = ke(l)), (s = Ft(l)) && (k || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(n, l), 1 === c && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l), s && s.container && (Bt(s, de), Kt(s), Ee(s));
                            k = !1
                        }
                        g = m = a.currItem.initialZoomLevel, (J = a.currItem.bounds) && (ue.x = J.center.x, ue.y = J.center.y, Me(!0)), Se("resize")
                    },
                    zoomTo: function (e, t, i, n, a) {
                        t && (g = m, ut.x = Math.abs(t.x) - ue.x, ut.y = Math.abs(t.y) - ue.y, Le(ce, ue));
                        var r = Re(e, !1),
                            s = {};
                        Ve("x", r, s, e), Ve("y", r, s, e);
                        var l = m,
                            c = ue.x,
                            u = ue.y;
                        De(s);
                        var d = function (t) {
                            1 === t ? (m = e, ue.x = s.x, ue.y = s.y) : (m = (e - l) * t + l, ue.x = (s.x - c) * t + c, ue.y = (s.y - u) * t + u), a && a(t), Me(1 === t)
                        };
                        i ? Ke("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
                    }
                },
                Qe = {},
                Ge = {},
                Je = {},
                et = {},
                tt = {},
                it = [],
                nt = {},
                ot = [],
                at = {},
                rt = 0,
                st = {
                    x: 0,
                    y: 0
                },
                lt = 0,
                ct = {
                    x: 0,
                    y: 0
                },
                ut = {
                    x: 0,
                    y: 0
                },
                dt = {
                    x: 0,
                    y: 0
                },
                pt = function (e, t) {
                    return at.x = Math.abs(e.x - t.x), at.y = Math.abs(e.y - t.y), Math.sqrt(at.x * at.x + at.y * at.y)
                },
                ht = function () {
                    U && (A(U), U = null)
                },
                ft = function () {
                    X && (U = I(ft), Mt())
                },
                vt = function (e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : vt(e.parentNode, t))
                },
                mt = {},
                gt = function (e, t) {
                    return mt.prevent = !vt(e.target, r.isClickableElement), Se("preventDragEvent", e, t, mt), mt.prevent
                },
                bt = function (e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                yt = function (e, t, i) {
                    i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
                },
                wt = function () {
                    var e = ue.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (de.y / 2))
                },
                kt = {},
                xt = {},
                Ct = [],
                St = function (e) {
                    for (; Ct.length > 0;) Ct.pop();
                    return E ? (se = 0, it.forEach(function (e) {
                        0 === se ? Ct[0] = e : 1 === se && (Ct[1] = e), se++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Ct[0] = bt(e.touches[0], kt), e.touches.length > 1 && (Ct[1] = bt(e.touches[1], xt))) : (kt.x = e.pageX, kt.y = e.pageY, kt.id = "", Ct[0] = kt), Ct
                },
                Tt = function (e, t) {
                    var i, n, o, s, l = ue[e] + t[e],
                        c = t[e] > 0,
                        u = ct.x + t.x,
                        d = ct.x - nt.x;
                    return i = l > J.min[e] || l < J.max[e] ? r.panEndFriction : 1, l = ue[e] + t[e] * i, !r.allowPanToNext && m !== a.currItem.initialZoomLevel || (ee ? "h" !== ie || "x" !== e || z || (c ? (l > J.min[e] && (i = r.panEndFriction, J.min[e], n = J.min[e] - ce[e]), (0 >= n || 0 > d) && Vt() > 1 ? (s = u, 0 > d && u > nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[e] && (i = r.panEndFriction, J.max[e], n = ce[e] - J.max[e]), (0 >= n || d > 0) && Vt() > 1 ? (s = u, d > 0 && u < nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l))) : s = u, "x" !== e) ? void(te || K || m > a.currItem.fitRatio && (ue[e] += t[e] * i)) : (void 0 !== s && (Ie(s, !0), K = s !== nt.x), J.min.x !== J.max.x && (void 0 !== o ? ue.x = o : K || (ue.x += t.x * i)), void 0 !== s)
                },
                Ot = function (e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Wt) return void e.preventDefault();
                        if (!j || "mousedown" !== e.type) {
                            if (gt(e, !0) && e.preventDefault(), Se("pointerDown"), E) {
                                var t = o.arraySearch(it, e.pointerId, "id");
                                0 > t && (t = it.length), it[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var i = St(e),
                                n = i.length;
                            Z = null, Ue(), X && 1 !== n || (X = ne = !0, o.bind(window, h, a), N = re = oe = Y = K = q = B = z = !1, ie = null, Se("firstTouchStart", i), Le(ce, ue), le.x = le.y = 0, Le(et, i[0]), Le(tt, et), nt.x = fe.x * pe, ot = [{
                                x: et.x,
                                y: et.y
                            }], F = W = Te(), Re(m, !0), ht(), ft()), !Q && n > 1 && !te && !K && (g = m, z = !1, Q = B = !0, le.y = le.x = 0, Le(ce, ue), Le(Qe, i[0]), Le(Ge, i[1]), yt(Qe, Ge, dt), ut.x = Math.abs(dt.x) - ue.x, ut.y = Math.abs(dt.y) - ue.y, G = pt(Qe, Ge))
                        }
                    }
                },
                $t = function (e) {
                    if (e.preventDefault(), E) {
                        var t = o.arraySearch(it, e.pointerId, "id");
                        if (t > -1) {
                            var i = it[t];
                            i.x = e.pageX, i.y = e.pageY
                        }
                    }
                    if (X) {
                        var n = St(e);
                        if (ie || q || Q) Z = n;
                        else if (ct.x !== fe.x * pe) ie = "h";
                        else {
                            var a = Math.abs(n[0].x - et.x) - Math.abs(n[0].y - et.y);
                            Math.abs(a) >= 10 && (ie = a > 0 ? "h" : "v", Z = n)
                        }
                    }
                },
                Mt = function () {
                    if (Z) {
                        var e = Z.length;
                        if (0 !== e)
                            if (Le(Qe, Z[0]), Je.x = Qe.x - et.x, Je.y = Qe.y - et.y, Q && e > 1) {
                                if (et.x = Qe.x, et.y = Qe.y, !Je.x && !Je.y && function (e, t) {
                                        return e.x === t.x && e.y === t.y
                                    }(Z[1], Ge)) return;
                                Le(Ge, Z[1]), z || (z = !0, Se("zoomGestureStarted"));
                                var t = pt(Qe, Ge),
                                    i = Lt(t);
                                i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (re = !0);
                                var n = 1,
                                    o = We(),
                                    s = Fe();
                                if (o > i)
                                    if (r.pinchToClose && !re && g <= a.currItem.initialZoomLevel) {
                                        var l = 1 - (o - i) / (o / 1.2);
                                        Oe(l), Se("onPinchClose", l), oe = !0
                                    } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                else i > s && ((n = (i - s) / (6 * o)) > 1 && (n = 1), i = s + n * o);
                                0 > n && (n = 0), yt(Qe, Ge, st), le.x += st.x - dt.x, le.y += st.y - dt.y, Le(dt, st), ue.x = Ae("x", i), ue.y = Ae("y", i), N = i > m, m = i, Me()
                            } else {
                                if (!ie) return;
                                if (ne && (ne = !1, Math.abs(Je.x) >= 10 && (Je.x -= Z[0].x - tt.x), Math.abs(Je.y) >= 10 && (Je.y -= Z[0].y - tt.y)), et.x = Qe.x, et.y = Qe.y, 0 === Je.x && 0 === Je.y) return;
                                if ("v" === ie && r.closeOnVerticalDrag && "fit" === r.scaleMode && m === a.currItem.initialZoomLevel) {
                                    le.y += Je.y, ue.y += Je.y;
                                    var c = wt();
                                    return Y = !0, Se("onVerticalDrag", c), Oe(c), void Me()
                                }(function (e, t, i) {
                                    if (e - F > 50) {
                                        var n = ot.length > 2 ? ot.shift() : {};
                                        n.x = t, n.y = i, ot.push(n), F = e
                                    }
                                })(Te(), Qe.x, Qe.y), q = !0, J = a.currItem.bounds, Tt("x", Je) || (Tt("y", Je), De(ue), Me())
                            }
                    }
                },
                Et = function (e) {
                    if (R.isOldAndroid) {
                        if (j && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(j), j = setTimeout(function () {
                            j = 0
                        }, 600))
                    }
                    var t;
                    if (Se("pointerUp"), gt(e, !1) && e.preventDefault(), E) {
                        var i = o.arraySearch(it, e.pointerId, "id");
                        i > -1 && (t = it.splice(i, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        } [e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                    }
                    var n, s = St(e),
                        l = s.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return Z = null, !0;
                    1 === l && Le(tt, s[0]), 0 !== l || ie || te || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Se("touchRelease", e, t));
                    var c = -1;
                    if (0 === l && (X = !1, o.unbind(window, h, a), ht(), Q ? c = 0 : -1 !== lt && (c = Te() - lt)), lt = 1 === l ? Te() : -1, n = -1 !== c && 150 > c ? "zoom" : "swipe", Q && 2 > l && (Q = !1, 1 === l && (n = "zoomPointerUp"), Se("zoomGestureEnded")), Z = null, q || z || te || Y)
                        if (Ue(), V || (V = Pt()), V.calculateSwipeSpeed("x"), Y)
                            if (wt() < r.verticalDragRange) a.close();
                            else {
                                var u = ue.y,
                                    d = ae;
                                Ke("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
                                    ue.y = (a.currItem.initialPosition.y - u) * e + u, Oe((1 - d) * e + d), Me()
                                }), Se("onVerticalDrag", 1)
                            }
                    else {
                        if ((K || te) && 0 === l) {
                            if (At(n, V)) return;
                            n = "zoomPointerUp"
                        }
                        if (!te) return "swipe" !== n ? void Dt() : void(!K && m > a.currItem.fitRatio && It(V))
                    }
                },
                Pt = function () {
                    var e, t, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function (n) {
                            ot.length > 1 ? (e = Te() - F + 50, t = ot[ot.length - 2][n]) : (e = Te() - W, t = tt[n]), i.lastFlickOffset[n] = et[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function (e, t) {
                            i.backAnimStarted[e] || (ue[e] > J.min[e] ? i.backAnimDestination[e] = J.min[e] : ue[e] < J.max[e] && (i.backAnimDestination[e] = J.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, Ke("bounceZoomPan" + e, ue[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
                                ue[e] = t, Me()
                            }))))
                        },
                        calculateAnimOffset: function (e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, ue[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function () {
                            return Xe.zoomPan && (Xe.zoomPan.raf = I(i.panAnimLoop), i.now = Te(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Me(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (ue.x = Math.round(ue.x), ue.y = Math.round(ue.y), Me(), void ze("zoomPan")) : void 0
                        }
                    };
                    return i
                },
                It = function (e) {
                    return e.calculateSwipeSpeed("y"), J = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (qe("zoomPan"), e.lastNow = Te(), void e.panAnimLoop())
                },
                At = function (e, t) {
                    var i, n, s;
                    if (te || (rt = u), "swipe" === e) {
                        var l = et.x - tt.x,
                            c = t.lastFlickDist.x < 10;
                        l > 30 && (c || t.lastFlickOffset.x > 20) ? n = -1 : -30 > l && (c || t.lastFlickOffset.x < -20) && (n = 1)
                    }
                    n && (0 > (u += n) ? (u = r.loop ? Vt() - 1 : 0, s = !0) : u >= Vt() && (u = r.loop ? 0 : Vt() - 1, s = !0), (!s || r.loop) && (ve += n, pe -= n, i = !0));
                    var d, p = fe.x * pe,
                        h = Math.abs(p - ct.x);
                    return i || p > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? h / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, rt === u && (i = !1), te = !0, Se("mainScrollAnimStart"), Ke("mainScroll", ct.x, p, d, o.easing.cubic.out, Ie, function () {
                        Ue(), te = !1, rt = -1, (i || rt !== u) && a.updateCurrItem(), Se("mainScrollAnimComplete")
                    }), i && a.updateCurrItem(!0), i
                },
                Lt = function (e) {
                    return 1 / G * e * g
                },
                Dt = function () {
                    var e = m,
                        t = We(),
                        i = Fe();
                    t > m ? e = t : m > i && (e = i);
                    var n, r = ae;
                    return oe && !N && !re && t > m ? (a.close(), !0) : (oe && (n = function (e) {
                        Oe((1 - r) * e + r)
                    }), a.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
                };
            we("Gestures", {
                publicMethods: {
                    initGestures: function () {
                        var e = function (e, t, i, n, o) {
                            S = e + t, T = e + i, O = e + n, $ = o ? e + o : ""
                        };
                        (E = R.pointerEvent) && R.touch && (R.touch = !1), E ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : R.touch ? (e("touch", "start", "move", "end", "cancel"), P = !0) : e("mouse", "down", "move", "up"), h = T + " " + O + " " + $, f = S, E && !P && (P = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = P, v[S] = Ot, v[T] = $t, v[O] = Et, $ && (v[$] = v[O]), R.touch && (f += " mousedown", h += " mousemove mouseup", v.mousedown = v[S], v.mousemove = v[T], v.mouseup = v[O]), P || (r.allowPanToNext = !1)
                    }
                }
            });
            var _t, Ht, Rt, Wt, Ft, Vt, Nt = function (t, i, n, s) {
                    var l;
                    _t && clearTimeout(_t), Wt = !0, Rt = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = r.getThumbBoundsFn && r.getThumbBoundsFn(u);
                    var d = n ? r.hideAnimationDuration : r.showAnimationDuration,
                        p = function () {
                            ze("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Oe(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Se("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Wt = !1
                        };
                    if (!d || !l || void 0 === l.x) return Se("initialZoom" + (n ? "Out" : "In")), m = t.initialZoomLevel, Le(ue, t.initialPosition), Me(), e.style.opacity = n ? 0 : 1, Oe(1), void(d ? setTimeout(function () {
                        p()
                    }, d) : p());
                    ! function () {
                        var i = c,
                            s = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (m = l.w / t.w, ue.x = l.x, ue.y = l.y - D, a[s ? "template" : "bg"].style.opacity = .001, Me()), qe("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), _t = setTimeout(function () {
                            if (Se("initialZoom" + (n ? "Out" : "In")), n) {
                                var a = l.w / t.w,
                                    r = {
                                        x: ue.x,
                                        y: ue.y
                                    },
                                    c = m,
                                    u = ae,
                                    h = function (t) {
                                        1 === t ? (m = a, ue.x = l.x, ue.y = l.y - H) : (m = (a - c) * t + c, ue.x = (l.x - r.x) * t + r.x, ue.y = (l.y - H - r.y) * t + r.y), Me(), s ? e.style.opacity = 1 - t : Oe(u - t * u)
                                    };
                                i ? Ke("initialZoom", 0, 1, d, o.easing.cubic.out, h, p) : (h(1), _t = setTimeout(p, d + 20))
                            } else m = t.initialZoomLevel, Le(ue, t.initialPosition), Me(), Oe(1), s ? e.style.opacity = 1 : Oe(1), _t = setTimeout(p, d + 20)
                        }, n ? 25 : 90)
                    }()
                },
                Yt = {},
                jt = [],
                Xt = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function () {
                        return Ht.length
                    }
                },
                Bt = function (e, t, i) {
                    if (e.src && !e.loadError) {
                        var n = !i;
                        if (n && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Se("parseVerticalMargin", e)), Yt.x = t.x, Yt.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                            var o = Yt.x / e.w,
                                a = Yt.y / e.h;
                            e.fitRatio = a > o ? o : a;
                            var s = r.scaleMode;
                            "orig" === s ? i = 1 : "fit" === s && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!i) return;
                        return function (e, t, i) {
                            var n = e.bounds;
                            n.center.x = Math.round((Yt.x - t) / 2), n.center.y = Math.round((Yt.y - i) / 2) + e.vGap.top, n.max.x = t > Yt.x ? Math.round(Yt.x - t) : n.center.x, n.max.y = i > Yt.y ? Math.round(Yt.y - i) + e.vGap.top : n.center.y, n.min.x = t > Yt.x ? 0 : n.center.x, n.min.y = i > Yt.y ? e.vGap.top : n.center.y
                        }(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, e.initialPosition = e.bounds.center, e.bounds
                },
                zt = function (e, t, i, n, o, r) {
                    t.loadError || n && (t.imageAppended = !0, Kt(t, n, t === a.currItem && ye), i.appendChild(n), r && setTimeout(function () {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                qt = function (e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        i = function () {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = i, t.onerror = function () {
                        e.loadError = !0, i()
                    }, t.src = e.src, t
                },
                Ut = function (e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                Kt = function (e, t, i) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var n = i ? e.w : Math.round(e.w * e.fitRatio),
                            o = i ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
                    }
                },
                Zt = function () {
                    if (jt.length) {
                        for (var e, t = 0; t < jt.length; t++)(e = jt[t]).holder.index === e.index && zt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        jt = []
                    }
                };
            we("Controller", {
                publicMethods: {
                    lazyLoadItem: function (e) {
                        e = ke(e);
                        var t = Ft(e);
                        t && (!t.loaded && !t.loading || k) && (Se("gettingData", e, t), t.src && qt(t))
                    },
                    initController: function () {
                        o.extend(r, Xt, !0), a.items = Ht = i, Ft = a.getItemAt, Vt = r.getNumItemsFn, r.loop, Vt() < 3 && (r.loop = !1), Ce("beforeChange", function (e) {
                            var t, i = r.preload,
                                n = null === e || e >= 0,
                                o = Math.min(i[0], Vt()),
                                s = Math.min(i[1], Vt());
                            for (t = 1;
                                (n ? s : o) >= t; t++) a.lazyLoadItem(u + t);
                            for (t = 1;
                                (n ? o : s) >= t; t++) a.lazyLoadItem(u - t)
                        }), Ce("initialLayout", function () {
                            a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(u)
                        }), Ce("mainScrollAnimComplete", Zt), Ce("initialZoomInEnd", Zt), Ce("destroy", function () {
                            for (var e, t = 0; t < Ht.length; t++)(e = Ht[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            jt = null
                        })
                    },
                    getItemAt: function (e) {
                        return e >= 0 && void 0 !== Ht[e] && Ht[e]
                    },
                    allowProgressiveImg: function () {
                        return r.forceProgressiveLoading || !P || r.mouseUsed || screen.width > 1200
                    },
                    setContent: function (e, t) {
                        r.loop && (t = ke(t));
                        var i = a.getItemAt(e.index);
                        i && (i.container = null);
                        var n, l = a.getItemAt(t);
                        if (l) {
                            Se("gettingData", t, l), e.index = t, e.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Ut(l), Bt(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((n = o.createEl("pswp__img", "img")).style.opacity = 1, n.src = l.src, Kt(l, n), zt(0, l, c, n));
                            else {
                                if (l.loadComplete = function (i) {
                                        if (s) {
                                            if (e && e.index === t) {
                                                if (Ut(i, !0)) return i.loadComplete = i.img = null, Bt(i, de), Ee(i), void(e.index === u && a.updateCurrZoomItem());
                                                i.imageAppended ? !Wt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : R.transform && (te || Wt) ? jt.push({
                                                    item: i,
                                                    baseDiv: c,
                                                    img: i.img,
                                                    index: t,
                                                    holder: e,
                                                    clearPlaceholder: !0
                                                }) : zt(0, i, c, i.img, 0, !0)
                                            }
                                            i.loadComplete = null, i.img = null, Se("imageLoadComplete", t, i)
                                        }
                                    }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var p = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (p.src = l.msrc), Kt(l, p), c.appendChild(p), l.placeholder = p
                                }
                                l.loading || qt(l), a.allowProgressiveImg() && (!Rt && R.transform ? jt.push({
                                    item: l,
                                    baseDiv: c,
                                    img: l.img,
                                    index: t,
                                    holder: e
                                }) : zt(0, l, c, l.img, 0, !0))
                            }
                            Rt || t !== u ? Ee(l) : (ee = c.style, Nt(l, n || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function (e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var Qt, Gt, Jt = {},
                ei = function (e, t, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
                };
            we("Tap", {
                publicMethods: {
                    initTap: function () {
                        Ce("firstTouchStart", a.onTapStart), Ce("touchRelease", a.onTapRelease), Ce("destroy", function () {
                            Jt = {}, Qt = null
                        })
                    },
                    onTapStart: function (e) {
                        e.length > 1 && (clearTimeout(Qt), Qt = null)
                    },
                    onTapRelease: function (e, t) {
                        if (t && !q && !B && !Be) {
                            var i = t;
                            if (Qt && (clearTimeout(Qt), Qt = null, function (e, t) {
                                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                                }(i, Jt))) return void Se("doubleTap", i);
                            if ("mouse" === t.type) return void ei(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void ei(e, t);
                            Le(Jt, i), Qt = setTimeout(function () {
                                ei(e, t), Qt = null
                            }, 300)
                        }
                    }
                }
            }), we("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function () {
                        _ || (P ? Ce("mouseUsed", function () {
                            a.setupDesktopZoom()
                        }) : a.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function (t) {
                        Gt = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Ce("bindEvents", function () {
                            o.bind(e, i, a.handleMouseWheel)
                        }), Ce("unbindEvents", function () {
                            Gt && o.unbind(e, i, a.handleMouseWheel)
                        }), a.mouseZoomedIn = !1;
                        var n, r = function () {
                                a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > m ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function () {
                                n && (o.removeClass(e, "pswp--dragging"), n = !1)
                            };
                        Ce("resize", r), Ce("afterChange", r), Ce("pointerDown", function () {
                            a.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
                        }), Ce("pointerUp", s), t || r()
                    },
                    handleMouseWheel: function (e) {
                        if (m <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || Be || X ? e.preventDefault() : M && Math.abs(e.deltaY) > 2 && (c = !0, a.close())), !0;
                        if (e.stopPropagation(), Gt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Gt.x = 18 * e.deltaX, Gt.y = 18 * e.deltaY) : (Gt.x = e.deltaX, Gt.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (Gt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Gt.y = -.16 * e.wheelDeltaY : Gt.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            Gt.y = e.detail
                        }
                        Re(m, !0);
                        var t = ue.x - Gt.x,
                            i = ue.y - Gt.y;
                        (r.modal || t <= J.min.x && t >= J.max.x && i <= J.min.y && i >= J.max.y) && e.preventDefault(), a.panTo(t, i)
                    },
                    toggleDesktopZoom: function (t) {
                        t = t || {
                            x: de.x / 2 + he.x,
                            y: de.y / 2 + he.y
                        };
                        var i = r.getDoubleTapZoom(!0, a.currItem),
                            n = m === i;
                        a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var ti, ii, ni, oi, ai, ri, si, li, ci, ui, di, pi, hi = {
                    history: !0,
                    galleryUID: 1
                },
                fi = function () {
                    return di.hash.substring(1)
                },
                vi = function () {
                    ti && clearTimeout(ti), ni && clearTimeout(ni)
                },
                mi = function () {
                    var e = fi(),
                        t = {};
                    if (e.length < 5) return t;
                    var i, n = e.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        } if (r.galleryPIDs) {
                        var a = t.pid;
                        for (t.pid = 0, i = 0; i < Ht.length; i++)
                            if (Ht[i].pid === a) {
                                t.pid = i;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                gi = function () {
                    if (ni && clearTimeout(ni), Be || X) ni = setTimeout(gi, 500);
                    else {
                        oi ? clearTimeout(ii) : oi = !0;
                        var e = u + 1,
                            t = Ft(u);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var i = si + "&gid=" + r.galleryUID + "&pid=" + e;
                        li || -1 === di.hash.indexOf(i) && (ui = !0);
                        var n = di.href.split("#")[0] + "#" + i;
                        pi ? "#" + i !== window.location.hash && history[li ? "replaceState" : "pushState"]("", document.title, n) : li ? di.replace(n) : di.hash = i, li = !0, ii = setTimeout(function () {
                            oi = !1
                        }, 60)
                    }
                };
            we("History", {
                publicMethods: {
                    initHistory: function () {
                        if (o.extend(r, hi, !0), r.history) {
                            di = window.location, ui = !1, ci = !1, li = !1, si = fi(), pi = "pushState" in history, si.indexOf("gid=") > -1 && (si = (si = si.split("&gid=")[0]).split("?gid=")[0]), Ce("afterChange", a.updateURL), Ce("unbindEvents", function () {
                                o.unbind(window, "hashchange", a.onHashChange)
                            });
                            var e = function () {
                                ri = !0, ci || (ui ? history.back() : si ? di.hash = si : pi ? history.pushState("", document.title, di.pathname + di.search) : di.hash = ""), vi()
                            };
                            Ce("unbindEvents", function () {
                                c && e()
                            }), Ce("destroy", function () {
                                ri || e()
                            }), Ce("firstUpdate", function () {
                                u = mi().pid
                            });
                            var t = si.indexOf("pid=");
                            t > -1 && "&" === (si = si.substring(0, t)).slice(-1) && (si = si.slice(0, -1)), setTimeout(function () {
                                s && o.bind(window, "hashchange", a.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function () {
                        return fi() === si ? (ci = !0, void a.close()) : void(oi || (ai = !0, a.goTo(mi().pid), ai = !1))
                    },
                    updateURL: function () {
                        vi(), ai || (li ? ti = setTimeout(gi, 800) : gi())
                    }
                }
            }), o.extend(a, Ze)
        }
    }),
    function (e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function () {
        "use strict";
        return function (e, t) {
            var i, n, o, a, r, s, l, c, u, d, p, h, f, v, m, g, b, y, w = this,
                k = !1,
                x = !0,
                C = !0,
                S = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function (e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function () {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function () {
                        return window.location.href
                    },
                    getTextForShare: function () {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                T = function (e) {
                    if (g) return !0;
                    e = e || window.event, m.timeToIdle && m.mouseUsed && !u && _();
                    for (var i, n, o = (e.target || e.srcElement).getAttribute("class") || "", a = 0; a < F.length; a++)(i = F[a]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var r = t.features.isOldAndroid ? 600 : 30;
                        setTimeout(function () {
                            g = !1
                        }, r)
                    }
                },
                O = function () {
                    return !e.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
                },
                $ = function (e, i, n) {
                    t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
                },
                M = function () {
                    var e = 1 === m.getNumItemsFn();
                    e !== v && ($(n, "ui--one-slide", e), v = e)
                },
                E = function () {
                    $(l, "share-modal--hidden", C)
                },
                P = function () {
                    return (C = !C) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
                        C && E()
                    }, 300)) : (E(), setTimeout(function () {
                        C || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), C || A(), !1
                },
                I = function (t) {
                    var i = (t = t || window.event).target || t.srcElement;
                    return e.shout("shareLinkClick", t, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), C || P(), 1))
                },
                A = function () {
                    for (var e, t, i, n, o = "", a = 0; a < m.shareButtons.length; a++) e = m.shareButtons[a], t = m.getImageURLForShare(e), i = m.getPageURLForShare(e), n = m.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", m.parseShareButtonOut && (o = m.parseShareButtonOut(e, o));
                    l.children[0].innerHTML = o, l.children[0].onclick = I
                },
                L = function (e) {
                    for (var i = 0; i < m.closeElClasses.length; i++)
                        if (t.hasClass(e, "pswp__" + m.closeElClasses[i])) return !0
                },
                D = 0,
                _ = function () {
                    clearTimeout(y), D = 0, u && w.setIdle(!1)
                },
                H = function (e) {
                    var t = (e = e || window.event).relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(y), y = setTimeout(function () {
                        w.setIdle(!0)
                    }, m.timeToIdleOutside))
                },
                R = function (e) {
                    h !== e && ($(p, "preloader--active", !e), h = e)
                },
                W = function (e) {
                    var i = e.vGap;
                    if (O()) {
                        var r = m.barsSize;
                        if (m.captionEl && "auto" === r.bottom)
                            if (a || ((a = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), n.insertBefore(a, o), t.addClass(n, "pswp__ui--fit")), m.addCaptionHTMLFn(e, a, !0)) {
                                var s = a.clientHeight;
                                i.bottom = parseInt(s, 10) || 44
                            } else i.bottom = r.top;
                        else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        i.top = r.top
                    } else i.top = i.bottom = 0
                },
                F = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function (e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function (e) {
                        l = e
                    },
                    onTap: function () {
                        P()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function (e) {
                        s = e
                    },
                    onTap: function () {
                        P()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function (e) {
                        r = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function () {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function (e) {
                        p = e
                    }
                }];
            w.init = function () {
                t.extend(e.options, S, !0), m = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen,
                    function () {
                        var e;
                        d("onVerticalDrag", function (e) {
                            x && .95 > e ? w.hideControls() : !x && e >= .95 && w.showControls()
                        }), d("onPinchClose", function (t) {
                            x && .9 > t ? (w.hideControls(), e = !0) : e && !x && t > .9 && w.showControls()
                        }), d("zoomGestureEnded", function () {
                            (e = !1) && !x && w.showControls()
                        })
                    }(), d("beforeChange", w.update), d("doubleTap", function (t) {
                        var i = e.currItem.initialZoomLevel;
                        e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(m.getDoubleTapZoom(!1, e.currItem), t, 333)
                    }), d("preventDragEvent", function (e, t, i) {
                        var n = e.target || e.srcElement;
                        n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                    }), d("bindEvents", function () {
                        t.bind(n, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
                    }), d("unbindEvents", function () {
                        C || P(), b && clearInterval(b), t.unbind(document, "mouseout", H), t.unbind(document, "mousemove", _), t.unbind(n, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), i && (t.unbind(document, i.eventK, w.updateFullscreen), i.isFullscreen() && (m.hideAnimationDuration = 0, i.exit()), i = null)
                    }), d("destroy", function () {
                        m.captionEl && (a && n.removeChild(a), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), w.setIdle(!1)
                    }), m.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", function () {
                        m.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                    }), d("initialZoomOut", function () {
                        t.addClass(n, "pswp__ui--hidden")
                    }), d("parseVerticalMargin", W),
                    function () {
                        var e, i, o, a = function (n) {
                            if (n)
                                for (var a = n.length, r = 0; a > r; r++) {
                                    e = n[r], i = e.className;
                                    for (var s = 0; s < F.length; s++) o = F[s], i.indexOf("pswp__" + o.name) > -1 && (m[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                                }
                        };
                        a(n.children);
                        var r = t.getChildByClass(n, "pswp__top-bar");
                        r && a(r.children)
                    }(), m.shareEl && s && l && (C = !0), M(), m.timeToIdle && d("mouseUsed", function () {
                        t.bind(document, "mousemove", _), t.bind(document, "mouseout", H), b = setInterval(function () {
                            2 == ++D && w.setIdle(!0)
                        }, m.timeToIdle / 2)
                    }), m.fullscreenEl && !t.features.isOldAndroid && (i || (i = w.getFullscreenAPI()), i ? (t.bind(document, i.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), m.preloaderEl && (R(!0), d("beforeChange", function () {
                        clearTimeout(f), f = setTimeout(function () {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && R(!1) : R(!0)
                        }, m.loadingIndicatorDelay)
                    }), d("imageLoadComplete", function (t, i) {
                        e.currItem === i && R(!0)
                    }))
            }, w.setIdle = function (e) {
                u = e, $(n, "ui--idle", e)
            }, w.update = function () {
                x && e.currItem ? (w.updateIndexIndicator(), m.captionEl && (m.addCaptionHTMLFn(e.currItem, o), $(o, "caption--empty", !e.currItem.title)), k = !0) : k = !1, C || P(), M()
            }, w.updateFullscreen = function (n) {
                n && setTimeout(function () {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, w.updateIndexIndicator = function () {
                m.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
            }, w.onGlobalTap = function (i) {
                var n = (i = i || window.event).target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (L(n)) return void e.close();
                        t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? m.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (m.tapToToggleControls && (x ? w.hideControls() : w.showControls()), m.tapToClose && (t.hasClass(n, "pswp__img") || L(n))) return void e.close()
            }, w.onMouseOver = function (e) {
                var t = (e = e || window.event).target || e.srcElement;
                $(n, "ui--over-close", L(t))
            }, w.hideControls = function () {
                t.addClass(n, "pswp__ui--hidden"), x = !1
            }, w.showControls = function () {
                x = !0, k || w.update(), t.removeClass(n, "pswp__ui--hidden")
            }, w.supportsFullscreen = function () {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, w.getFullscreenAPI = function () {
                var t, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function () {
                    return c = m.closeOnScroll, m.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function () {
                    return m.closeOnScroll = c, document[this.exitK]()
                }, t.isFullscreen = function () {
                    return document[this.elementK]
                }), t
            }
        }
    });
var initPhotoSwipeFromDOM = function (e) {
    for (var t = function (e) {
            (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = function e(t, i) {
                return t && (i(t) ? t : e(t.parentNode, i))
            }(e.target || e.srcElement, function (e) {
                return e.tagName && "FIGURE" === e.tagName.toUpperCase()
            });
            if (t) {
                for (var n, o = t.parentNode, a = t.parentNode.childNodes, r = a.length, s = 0, l = 0; l < r; l++)
                    if (1 === a[l].nodeType) {
                        if (a[l] === t) {
                            n = s;
                            break
                        }
                        s++
                    } return n >= 0 && i(n, o), !1
            }
        }, i = function (e, t, i, n) {
            var o, a, r = document.querySelectorAll(".pswp")[0];
            if (a = function (e) {
                    for (var t, i, n, o, a = e.childNodes, r = a.length, s = [], l = 0; l < r; l++) 1 === (t = a[l]).nodeType && (n = (i = t.children[0]).getAttribute("data-size").split("x"), o = {
                        src: i.getAttribute("href"),
                        w: parseInt(n[0], 10),
                        h: parseInt(n[1], 10)
                    }, t.children.length > 1 && (o.title = t.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = t, s.push(o));
                    return s
                }(t), o = {
                    galleryUID: t.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function (e) {
                        var t = a[e].el.getElementsByTagName("img")[0],
                            i = window.pageYOffset || document.documentElement.scrollTop,
                            n = t.getBoundingClientRect();
                        return {
                            x: n.left,
                            y: n.top + i,
                            w: n.width
                        }
                    }
                }, n)
                if (o.galleryPIDs) {
                    for (var s = 0; s < a.length; s++)
                        if (a[s].pid == e) {
                            o.index = s;
                            break
                        }
                } else o.index = parseInt(e, 10) - 1;
            else o.index = parseInt(e, 10);
            isNaN(o.index) || (i && (o.showAnimationDuration = 0), new PhotoSwipe(r, PhotoSwipeUI_Default, a, o).init())
        }, n = document.querySelectorAll(e), o = 0, a = n.length; o < a; o++) n[o].setAttribute("data-pswp-uid", o + 1), n[o].onclick = t;
    var r = function () {
        var e = window.location.hash.substring(1),
            t = {};
        if (e.length < 5) return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++)
            if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            } return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    r.pid && r.gid && i(r.pid, n[r.gid - 1], !0, !0)
};

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function (e) {
        e.fn.sticky = function (t) {
            var i = e.extend({}, {
                topSpacing: 0,
                zIndex: "",
                stopper: ".sticky-stopper",
                stickyClass: !1
            }, t);
            var n = "number" == typeof i.zIndex;
            var o = 0 < e(i.stopper).length || "number" == typeof i.stopper;
            return this.each(function () {
                var t = e(this),
                    a = t.outerHeight(),
                    r = t.outerWidth(),
                    s = i.topSpacing,
                    l = i.zIndex,
                    c = t.offset().top - s,
                    u = e("<div></div>").width(r).height(a).addClass("sticky-placeholder"),
                    d = i.stopper,
                    p = e(window);

                function h() {
                    var r = p.scrollTop(),
                        h = d,
                        f = t.parent().width();
                    (u.width(f), o && "string" == typeof d) && (h = e(d).offset().top - a - s);
                    if (c < r) {
                        if (i.stickyClass && t.addClass(i.stickyClass), t.after(u).css({
                                position: "fixed",
                                top: s,
                                width: f
                            }), n && t.css({
                                zIndex: l
                            }), o && h < r) {
                            var v = h - r + s;
                            t.css({
                                top: v
                            })
                        }
                    } else i.stickyClass && t.removeClass(i.stickyClass), t.css({
                        position: "static",
                        top: null,
                        left: null,
                        width: "auto"
                    }), u.remove()
                }
                p.innerHeight() > a && (p.bind("scroll", h), p.bind("load", h), p.bind("resize", h))
            })
        }
    }(jQuery),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
    }(this, function () {
        "use strict";

        function e(e) {
            return getComputedStyle(e)
        }

        function t(e, t) {
            for (var i in t) {
                var n = t[i];
                "number" == typeof n && (n += "px"), e.style[i] = n
            }
            return e
        }

        function i(e) {
            var t = document.createElement("div");
            return t.className = e, t
        }

        function n(e, t) {
            if (!v) throw new Error("No element matching method supported");
            return v.call(e, t)
        }

        function o(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }

        function a(e, t) {
            return Array.prototype.filter.call(e.children, function (e) {
                return n(e, t)
            })
        }

        function r(e, t) {
            var i = e.element.classList,
                n = m.state.scrolling(t);
            i.contains(n) ? clearTimeout(g[t]) : i.add(n)
        }

        function s(e, t) {
            g[t] = setTimeout(function () {
                return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
            }, e.settings.scrollingThreshold)
        }

        function l(e, t) {
            r(e, t), s(e, t)
        }

        function c(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t
        }

        function u(e) {
            return parseInt(e, 10) || 0
        }

        function d(e) {
            return n(e, "input,[contenteditable]") || n(e, "select,[contenteditable]") || n(e, "textarea,[contenteditable]") || n(e, "button,[contenteditable]")
        }

        function p(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function h(e, i) {
            var n = {
                    width: i.railXWidth
                },
                o = Math.floor(e.scrollTop);
            i.isRtl ? n.left = i.negativeScrollAdjustment + e.scrollLeft + i.containerWidth - i.contentWidth : n.left = e.scrollLeft, i.isScrollbarXUsingBottom ? n.bottom = i.scrollbarXBottom - o : n.top = i.scrollbarXTop + o, t(i.scrollbarXRail, n);
            var a = {
                top: o,
                height: i.railYHeight
            };
            i.isScrollbarYUsingRight ? i.isRtl ? a.right = i.contentWidth - (i.negativeScrollAdjustment + e.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : a.right = i.scrollbarYRight - e.scrollLeft : i.isRtl ? a.left = i.negativeScrollAdjustment + e.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : a.left = i.scrollbarYLeft + e.scrollLeft, t(i.scrollbarYRail, a), t(i.scrollbarX, {
                left: i.scrollbarXLeft,
                width: i.scrollbarXWidth - i.railBorderXWidth
            }), t(i.scrollbarY, {
                top: i.scrollbarYTop,
                height: i.scrollbarYHeight - i.railBorderYWidth
            })
        }

        function f(e, t) {
            function i(t) {
                v[p] = g + y * (t[l] - b), r(e, h), C(e), t.stopPropagation(), t.preventDefault()
            }

            function n() {
                s(e, h), e[f].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", i)
            }
            var o = t[0],
                a = t[1],
                l = t[2],
                c = t[3],
                u = t[4],
                d = t[5],
                p = t[6],
                h = t[7],
                f = t[8],
                v = e.element,
                g = null,
                b = null,
                y = null;
            e.event.bind(e[u], "mousedown", function (t) {
                g = v[p], b = t[l], y = (e[a] - e[o]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", i), e.event.once(e.ownerDocument, "mouseup", n), e[f].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
            })
        }
        var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            m = {
                main: "ps",
                element: {
                    thumb: function (e) {
                        return "ps__thumb-" + e
                    },
                    rail: function (e) {
                        return "ps__rail-" + e
                    },
                    consuming: "ps__child--consume"
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function (e) {
                        return "ps--active-" + e
                    },
                    scrolling: function (e) {
                        return "ps--scrolling-" + e
                    }
                }
            },
            g = {
                x: null,
                y: null
            },
            b = function (e) {
                this.element = e, this.handlers = {}
            },
            y = {
                isEmpty: {
                    configurable: !0
                }
            };
        b.prototype.bind = function (e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
        }, b.prototype.unbind = function (e, t) {
            var i = this;
            this.handlers[e] = this.handlers[e].filter(function (n) {
                return !(!t || n === t) || (i.element.removeEventListener(e, n, !1), !1)
            })
        }, b.prototype.unbindAll = function () {
            for (var e in this.handlers) this.unbind(e)
        }, y.isEmpty.get = function () {
            var e = this;
            return Object.keys(this.handlers).every(function (t) {
                return 0 === e.handlers[t].length
            })
        }, Object.defineProperties(b.prototype, y);
        var w = function () {
            this.eventElements = []
        };
        w.prototype.eventElement = function (e) {
            var t = this.eventElements.filter(function (t) {
                return t.element === e
            })[0];
            return t || (t = new b(e), this.eventElements.push(t)), t
        }, w.prototype.bind = function (e, t, i) {
            this.eventElement(e).bind(t, i)
        }, w.prototype.unbind = function (e, t, i) {
            var n = this.eventElement(e);
            n.unbind(t, i), n.isEmpty && this.eventElements.splice(this.eventElements.indexOf(n), 1)
        }, w.prototype.unbindAll = function () {
            this.eventElements.forEach(function (e) {
                return e.unbindAll()
            }), this.eventElements = []
        }, w.prototype.once = function (e, t, i) {
            var n = this.eventElement(e),
                o = function (e) {
                    n.unbind(t, o), i(e)
                };
            n.bind(t, o)
        };
        var k = function (e, t, i, n, o) {
                var a;
                if (void 0 === n && (n = !0), void 0 === o && (o = !1), "top" === t) a = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== t) throw new Error("A proper axis should be provided");
                    a = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }! function (e, t, i, n, o) {
                    var a = i[0],
                        r = i[1],
                        s = i[2],
                        u = i[3],
                        d = i[4],
                        p = i[5];
                    void 0 === n && (n = !0), void 0 === o && (o = !1);
                    var h = e.element;
                    e.reach[u] = null, h[s] < 1 && (e.reach[u] = "start"), h[s] > e[a] - e[r] - 1 && (e.reach[u] = "end"), t && (h.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? h.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && h.dispatchEvent(c("ps-scroll-" + p)), n && l(e, u)), e.reach[u] && (t || o) && h.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
                }(e, i, a, n, o)
            },
            x = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            },
            C = function (e) {
                var t = e.element,
                    i = Math.floor(t.scrollTop);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (a(t, m.element.rail("x")).forEach(function (e) {
                    return o(e)
                }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (a(t, m.element.rail("y")).forEach(function (e) {
                    return o(e)
                }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = p(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = p(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(i * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), h(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
            },
            S = {
                "click-rail": function (e) {
                    e.event.bind(e.scrollbarY, "mousedown", function (e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
                        var i = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                        e.element.scrollTop += i * e.containerHeight, C(e), t.stopPropagation()
                    }), e.event.bind(e.scrollbarX, "mousedown", function (e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
                        var i = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                        e.element.scrollLeft += i * e.containerWidth, C(e), t.stopPropagation()
                    })
                },
                "drag-thumb": function (e) {
                    f(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), f(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                },
                keyboard: function (e) {
                    var t = e.element,
                        i = function () {
                            return n(t, ":hover")
                        },
                        o = function () {
                            return n(e.scrollbarX, ":focus") || n(e.scrollbarY, ":focus")
                        };
                    e.event.bind(e.ownerDocument, "keydown", function (n) {
                        if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (i() || o())) {
                            var a = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (a) {
                                if ("IFRAME" === a.tagName) a = a.contentDocument.activeElement;
                                else
                                    for (; a.shadowRoot;) a = a.shadowRoot.activeElement;
                                if (d(a)) return
                            }
                            var r = 0,
                                s = 0;
                            switch (n.which) {
                                case 37:
                                    r = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
                                    break;
                                case 38:
                                    s = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
                                    break;
                                case 39:
                                    r = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
                                    break;
                                case 40:
                                    s = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
                                    break;
                                case 32:
                                    s = n.shiftKey ? e.containerHeight : -e.containerHeight;
                                    break;
                                case 33:
                                    s = e.containerHeight;
                                    break;
                                case 34:
                                    s = -e.containerHeight;
                                    break;
                                case 36:
                                    s = e.contentHeight;
                                    break;
                                case 35:
                                    s = -e.contentHeight;
                                    break;
                                default:
                                    return
                            }
                            e.settings.suppressScrollX && 0 !== r || e.settings.suppressScrollY && 0 !== s || (t.scrollTop -= s, t.scrollLeft += r, C(e), function (i, n) {
                                var o = Math.floor(t.scrollTop);
                                if (0 === i) {
                                    if (!e.scrollbarYActive) return !1;
                                    if (0 === o && n > 0 || o >= e.contentHeight - e.containerHeight && n < 0) return !e.settings.wheelPropagation
                                }
                                var a = t.scrollLeft;
                                if (0 === n) {
                                    if (!e.scrollbarXActive) return !1;
                                    if (0 === a && i < 0 || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
                                }
                                return !0
                            }(r, s) && n.preventDefault())
                        }
                    })
                },
                wheel: function (t) {
                    function i(t, i, n) {
                        if (!x.isWebKit && o.querySelector("select:focus")) return !0;
                        if (!o.contains(t)) return !1;
                        for (var a = t; a && a !== o;) {
                            if (a.classList.contains(m.element.consuming)) return !0;
                            var r = e(a);
                            if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
                                var s = a.scrollHeight - a.clientHeight;
                                if (s > 0 && !(0 === a.scrollTop && n > 0 || a.scrollTop === s && n < 0)) return !0;
                                var l = a.scrollWidth - a.clientWidth;
                                if (l > 0 && !(0 === a.scrollLeft && i < 0 || a.scrollLeft === l && i > 0)) return !0
                            }
                            a = a.parentNode
                        }
                        return !1
                    }

                    function n(e) {
                        var n = function (e) {
                                var t = e.deltaX,
                                    i = -1 * e.deltaY;
                                return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t != t && i != i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
                            }(e),
                            a = n[0],
                            r = n[1];
                        if (!i(e.target, a, r)) {
                            var s = !1;
                            t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (r ? o.scrollTop -= r * t.settings.wheelSpeed : o.scrollTop += a * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (a ? o.scrollLeft += a * t.settings.wheelSpeed : o.scrollLeft -= r * t.settings.wheelSpeed, s = !0) : (o.scrollTop -= r * t.settings.wheelSpeed, o.scrollLeft += a * t.settings.wheelSpeed), C(t), (s = s || function (e, i) {
                                var n = Math.floor(o.scrollTop),
                                    a = 0 === o.scrollTop,
                                    r = n + o.offsetHeight === o.scrollHeight,
                                    s = 0 === o.scrollLeft,
                                    l = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                                return !(Math.abs(i) > Math.abs(e) ? a || r : s || l) || !t.settings.wheelPropagation
                            }(a, r)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                        }
                    }
                    var o = t.element;
                    void 0 !== window.onwheel ? t.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && t.event.bind(o, "mousewheel", n)
                },
                touch: function (t) {
                    function i(e, i) {
                        var n = Math.floor(u.scrollTop),
                            o = u.scrollLeft,
                            a = Math.abs(e),
                            r = Math.abs(i);
                        if (r > a) {
                            if (i < 0 && n === t.contentHeight - t.containerHeight || i > 0 && 0 === n) return 0 === window.scrollY && i > 0 && x.isChrome
                        } else if (a > r && (e < 0 && o === t.contentWidth - t.containerWidth || e > 0 && 0 === o)) return !0;
                        return !0
                    }

                    function n(e, i) {
                        u.scrollTop -= i, u.scrollLeft -= e, C(t)
                    }

                    function o(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function a(e) {
                        return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                    }

                    function r(e) {
                        if (a(e)) {
                            var t = o(e);
                            d.pageX = t.pageX, d.pageY = t.pageY, p = (new Date).getTime(), null !== f && clearInterval(f)
                        }
                    }

                    function s(t, i, n) {
                        if (!u.contains(t)) return !1;
                        for (var o = t; o && o !== u;) {
                            if (o.classList.contains(m.element.consuming)) return !0;
                            var a = e(o);
                            if ([a.overflow, a.overflowX, a.overflowY].join("").match(/(scroll|auto)/)) {
                                var r = o.scrollHeight - o.clientHeight;
                                if (r > 0 && !(0 === o.scrollTop && n > 0 || o.scrollTop === r && n < 0)) return !0;
                                var s = o.scrollLeft - o.clientWidth;
                                if (s > 0 && !(0 === o.scrollLeft && i < 0 || o.scrollLeft === s && i > 0)) return !0
                            }
                            o = o.parentNode
                        }
                        return !1
                    }

                    function l(e) {
                        if (a(e)) {
                            var t = o(e),
                                r = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                },
                                l = r.pageX - d.pageX,
                                c = r.pageY - d.pageY;
                            if (s(e.target, l, c)) return;
                            n(l, c), d = r;
                            var u = (new Date).getTime(),
                                f = u - p;
                            f > 0 && (h.x = l / f, h.y = c / f, p = u), i(l, c) && e.preventDefault()
                        }
                    }

                    function c() {
                        t.settings.swipeEasing && (clearInterval(f), f = setInterval(function () {
                            t.isInitialized ? clearInterval(f) : h.x || h.y ? Math.abs(h.x) < .01 && Math.abs(h.y) < .01 ? clearInterval(f) : (n(30 * h.x, 30 * h.y), h.x *= .8, h.y *= .8) : clearInterval(f)
                        }, 10))
                    }
                    if (x.supportsTouch || x.supportsIePointer) {
                        var u = t.element,
                            d = {},
                            p = 0,
                            h = {},
                            f = null;
                        x.supportsTouch ? (t.event.bind(u, "touchstart", r), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : x.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", r), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", r), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                    }
                }
            },
            T = function (n, o) {
                var a = this;
                if (void 0 === o && (o = {}), "string" == typeof n && (n = document.querySelector(n)), !n || !n.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                for (var r in this.element = n, n.classList.add(m.main), this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1
                    }, o) a.settings[r] = o[r];
                this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                var s = function () {
                        return n.classList.add(m.state.focus)
                    },
                    l = function () {
                        return n.classList.remove(m.state.focus)
                    };
                this.isRtl = "rtl" === e(n).direction, this.isNegativeScroll = function () {
                    var e, t = n.scrollLeft;
                    return n.scrollLeft = -1, e = n.scrollLeft < 0, n.scrollLeft = t, e
                }(), this.negativeScrollAdjustment = this.isNegativeScroll ? n.scrollWidth - n.clientWidth : 0, this.event = new w, this.ownerDocument = n.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), n.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                var c = e(this.scrollbarXRail);
                this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {
                    display: "block"
                }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {
                    display: ""
                }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), n.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                var d = e(this.scrollbarYRail);
                this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (t) {
                    var i = e(t);
                    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth)
                }(this.scrollbarY) : null, this.railBorderYWidth = u(d.borderTopWidth) + u(d.borderBottomWidth), t(this.scrollbarYRail, {
                    display: "block"
                }), this.railYMarginHeight = u(d.marginTop) + u(d.marginBottom), t(this.scrollbarYRail, {
                    display: ""
                }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                    x: n.scrollLeft <= 0 ? "start" : n.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: n.scrollTop <= 0 ? "start" : n.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
                    return S[e](a)
                }), this.lastScrollTop = Math.floor(n.scrollTop), this.lastScrollLeft = n.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
                    return a.onScroll(e)
                }), C(this)
            };
        return T.prototype.update = function () {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
                display: "block"
            }), t(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
                display: "none"
            }), t(this.scrollbarYRail, {
                display: "none"
            }), C(this), k(this, "top", 0, !1, !0), k(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
                display: ""
            }), t(this.scrollbarYRail, {
                display: ""
            }))
        }, T.prototype.onScroll = function (e) {
            this.isAlive && (C(this), k(this, "top", this.element.scrollTop - this.lastScrollTop), k(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, T.prototype.destroy = function () {
            this.isAlive && (this.event.unbindAll(), o(this.scrollbarX), o(this.scrollbarY), o(this.scrollbarXRail), o(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, T.prototype.removePsClasses = function () {
            this.element.className = this.element.className.split(" ").filter(function (e) {
                return !e.match(/^ps([-_].+|)$/)
            }).join(" ")
        }, T
    }),
    function (e) {
        var t = {},
            i = "",
            n = "",
            o = "#ced4da",
            a = "1px solid #4285f4",
            r = "1px solid #ced4da",
            s = "0 1px 0 0 #4285f4",
            l = "",
            c = -1,
            u = -45,
            d = function () {
                function d(c, u) {
                    _classCallCheck(this, d), this.defaults = {
                        data: t,
                        dataColor: i,
                        closeColor: n,
                        closeBlurColor: o,
                        inputFocus: a,
                        inputBlur: r,
                        inputFocusShadow: s,
                        inputBlurShadow: l
                    }, this.$input = c, this.options = this.assignOptions(u), this.$clearButton = e(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function () {
                        this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                    }
                }, {
                    key: "assignOptions",
                    value: function (t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "setData",
                    value: function () {
                        Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                    }
                }, {
                    key: "inputFocus",
                    value: function () {
                        var e = this;
                        this.$input.on("focus", function () {
                            e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                        })
                    }
                }, {
                    key: "inputBlur",
                    value: function () {
                        var e = this;
                        this.$input.on("blur", function () {
                            e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                        })
                    }
                }, {
                    key: "inputKeyupData",
                    value: function () {
                        var t = this;
                        this.$input.on("keyup", function (i) {
                            if (13 === i.which) return t.options.data.includes(t.$input.val()) || t.options.data.push(t.$input.val()), t.$autocompleteWrap.find(".selected").trigger("click"), t.$autocompleteWrap.empty(), t.inputBlur(), u = -45, c = -1;
                            var n = t.$input.val();
                            if (t.$autocompleteWrap.empty(), n.length) {
                                for (var o in t.options.data)
                                    if (-1 !== t.options.data[o].toLowerCase().indexOf(n.toLowerCase())) {
                                        var a = e("<li>".concat(t.options.data[o], "</li>"));
                                        t.$autocompleteWrap.append(a)
                                    } var r = t.$autocompleteWrap,
                                    s = t.$autocompleteWrap.find("li"),
                                    l = s.eq(c).outerHeight(),
                                    d = s.eq(c - 1).outerHeight();
                                if (40 === i.which) {
                                    if (c > s.length - 2) return c = -1, s.scrollTop(0), void(u = -45);
                                    c++, u += l, r.scrollTop(u), s.eq(c).addClass("selected")
                                } else 38 === i.which && (c < 1 ? (c = s.length, r.scrollTop(r.prop("scrollHeight")), u = r.prop("scrollHeight") - l) : c--, u -= d, r.scrollTop(u), s.eq(c).addClass("selected"));
                                0 === n.length ? t.$clearButton.css("visibility", "hidden") : t.$clearButton.css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
                            } else t.$clearButton.css("visibility", "hidden")
                        })
                    }
                }, {
                    key: "inputLiClick",
                    value: function () {
                        var t = this;
                        this.$autocompleteWrap.on("click", "li", function (i) {
                            i.preventDefault(), t.$input.val(e(i.target).text()), t.$autocompleteWrap.empty()
                        })
                    }
                }, {
                    key: "clearAutocomplete",
                    value: function () {
                        var t = this;
                        this.$clearButton.on("click", function (i) {
                            c = -1, u = -45, i.preventDefault();
                            var n = e(i.currentTarget);
                            n.parent().find(".mdb-autocomplete").val(""), n.css("visibility", "hidden"), t.$autocompleteWrap.empty(), n.parent().find("label").removeClass("active")
                        })
                    }
                }, {
                    key: "changeSVGcolors",
                    value: function () {
                        var t = this;
                        this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", function (i) {
                            i.preventDefault(), e(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeColor)
                        }), this.$input.on("blur", function (i) {
                            i.preventDefault(), e(i.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeBlurColor)
                        }))
                    }
                }]), d
            }();
        e.fn.mdbAutocomplete = function (t) {
            return this.each(function () {
                new d(e(this), t)
            })
        }
    }(jQuery),
    function (e) {
        e("body").on("shown.bs.modal", ".modal", function () {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        }), e("body").on("hidden.bs.modal", ".modal", function () {
            e("body").removeClass("scrollable")
        })
    }(jQuery),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
    }(this, function () {
        "use strict";
        var e = {
                CUSTOMFILE: '.custom-file input[type="file"]',
                CUSTOMFILELABEL: ".custom-file-label",
                FORM: "form",
                INPUT: "input"
            },
            t = function (t) {
                var i = "",
                    n = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                return n && (i = n.innerHTML), i
            },
            i = function (e) {
                if (e.childNodes.length > 0)
                    for (var t = [].slice.call(e.childNodes), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (3 !== n.nodeType) return n
                    }
                return e
            },
            n = function (t) {
                var n = t.bsCustomFileInput.defaultText,
                    o = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                o && (i(o).innerHTML = n)
            },
            o = !!window.File,
            a = function (e) {
                if (e.hasAttribute("multiple") && o) return [].slice.call(e.files).map(function (e) {
                    return e.name
                }).join(", ");
                if (-1 !== e.value.indexOf("fakepath")) {
                    var t = e.value.split("\\");
                    return t[t.length - 1]
                }
                return e.value
            };

        function r() {
            var t = this.parentNode.querySelector(e.CUSTOMFILELABEL);
            if (t) {
                var o = i(t),
                    r = a(this);
                r.length ? o.innerHTML = r : n(this)
            }
        }

        function s() {
            for (var t = [].slice.call(this.querySelectorAll(e.INPUT)).filter(function (e) {
                    return !!e.bsCustomFileInput
                }), i = 0, o = t.length; i < o; i++) n(t[i])
        }
        var l = "reset",
            c = "change";
        return {
            init: function (i, n) {
                void 0 === i && (i = e.CUSTOMFILE), void 0 === n && (n = e.FORM);
                for (var o = [].slice.call(document.querySelectorAll(i)), a = [].slice.call(document.querySelectorAll(n)), u = 0, d = o.length; u < d; u++) {
                    var p = o[u];
                    Object.defineProperty(p, "bsCustomFileInput", {
                        value: {
                            defaultText: t(p)
                        },
                        writable: !0
                    }), r.call(p), p.addEventListener(c, r)
                }
                for (var h = 0, f = a.length; h < f; h++) a[h].addEventListener(l, s), Object.defineProperty(a[h], "bsCustomFileInput", {
                    value: !0,
                    writable: !0
                })
            },
            destroy: function () {
                for (var t = [].slice.call(document.querySelectorAll(e.FORM)).filter(function (e) {
                        return !!e.bsCustomFileInput
                    }), i = [].slice.call(document.querySelectorAll(e.INPUT)).filter(function (e) {
                        return !!e.bsCustomFileInput
                    }), o = 0, a = i.length; o < a; o++) {
                    var u = i[o];
                    n(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, r)
                }
                for (var d = 0, p = t.length; d < p; d++) t[d].removeEventListener(l, s), t[d].bsCustomFileInput = void 0
            }
        }
    }), document.addEventListener("DOMContentLoaded", function () {
        bsCustomFileInput.init()
    });
var i, toggler = document.getElementsByClassName("rotate");
for (i = 0; i < toggler.length; i++) toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active"), this.classList.toggle("down")
});
new WOW().init();
// Tooltips Initialization
$(document).ready(function() {
    // SideNav Button Initialization
    $(".button-collapse").sideNav();
    $('.mdb-select').materialSelect();
    $('[data-toggle="tooltip"]').tooltip()
    console.log("holaaaa")

    $(".my-decore").parent('#accordion').click(
        function() {
            console.log("111")

          $(this).children('.collapse').collapse('show');
        }, function() {
        //   $(this).children('.collapse').attr("style", "background: gray" );

        }
      );
    // SideNav Scrollbar Initialization
    // var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    // var ps = new PerfectScrollbar(sideNavScrollbar);
    });
} 



















function xzoom() {
 window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,20)}})();function detect_old_ie(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=new Number(RegExp.$1);if(a>=9){return false}else{if(a>=8){return true}else{if(a>=7){return true}else{if(a>=6){return true}else{if(a>=5){return true}}}}}}else{return false}}(function(b){b.fn.xon=b.fn.on||b.fn.bind;b.fn.xoff=b.fn.off||b.fn.bind;function a(ax,aG){this.xzoom=true;var E=this;var M;var aD={};var ad,ak,aa,aj,ac,ai,am,R,aF,x,ao,Z,X;var ay,o,P,T,S,ab,p=new Array();var F=new Array(),aC=0,y=0;var I,Q,l,k;var aq,aB,aw,au,O,n,aL,aJ,aA,az,W,U,ap,al=0;var h,ah;var aK,B=0,z=0,ag=0,ae=0,s=0,r=0,at=0,ar=0,H=0,G=0;var D=detect_old_ie(),A=/MSIE (\d+\.\d+);/.test(navigator.userAgent),Y,V;var K,j="",J,t;var aI,f,m,q,g,i,an,d;this.adaptive=function(){if(m==0||q==0){ax.css("width","");ax.css("height","");m=ax.width();q=ax.height()}aH();aI=b(window).width();f=b(window).height();g=ax.width();i=ax.height();var u=false;if(m>aI||q>f){u=true}if(g>m){g=m}if(i>q){i=q}if(u){ax.width("100%")}else{if(m!=0){ax.width(m)}}if(an!="fullscreen"){if(aE()){E.options.position=an}else{E.options.position=E.options.mposition}}if(!E.options.lensReverse){d=E.options.adaptiveReverse&&E.options.position==E.options.mposition}};function av(){var aM=document.documentElement;var v=(window.pageXOffset||aM.scrollLeft)-(aM.clientLeft||0);var u=(window.pageYOffset||aM.scrollTop)-(aM.clientTop||0);return{left:v,top:u}}function aE(){var u=ax.offset();if(E.options.zoomWidth=="auto"){aa=g}else{aa=E.options.zoomWidth}if(E.options.zoomHeight=="auto"){aj=i}else{aj=E.options.zoomHeight}if(E.options.position.substr(0,1)=="#"){aD=b(E.options.position)}else{aD.length=0}if(aD.length!=0){return true}switch(an){case"lens":case"inside":return true;break;case"top":ai=u.top;am=u.left;R=ai-aj;aF=am;break;case"left":ai=u.top;am=u.left;R=ai;aF=am-aa;break;case"bottom":ai=u.top;am=u.left;R=ai+i;aF=am;break;case"right":default:ai=u.top;am=u.left;R=ai;aF=am+g}if(aF+aa>aI||aF<0){return false}return true}this.xscroll=function(v){Z=v.pageX||v.originalEvent.pageX;X=v.pageY||v.originalEvent.pageY;v.preventDefault();if(v.xscale){al=v.xscale;L(Z,X)}else{var aN=-v.originalEvent.detail||v.originalEvent.wheelDelta||v.xdelta;var u=Z;var aM=X;if(D){u=Y;aM=V}if(aN>0){aN=-0.05}else{aN=0.05}al+=aN;L(u,aM)}};function w(){if(E.options.lensShape=="circle"&&E.options.position=="lens"){aq=aB=Math.max(aq,aB);var u=(aq+Math.max(n,O)*2)/2;l.css({"-moz-border-radius":u,"-webkit-border-radius":u,"border-radius":u})}}function C(u,aN,aM,v){if(E.options.position=="lens"){Q.css({top:-(aN-ai)*az+(aB/2),left:-(u-am)*aA+(aq/2)});if(E.options.bg){l.css({"background-image":"url("+Q.attr("src")+")","background-repeat":"no-repeat","background-position":(-(u-am)*aA+(aq/2))+"px "+(-(aN-ai)*az+(aB/2))+"px"});if(aM&&v){l.css({"background-size":aM+"px "+v+"px"})}}}else{Q.css({top:-au*az,left:-aw*aA})}}function L(u,aO){if(al<-1){al=-1}if(al>1){al=1}var aN,v,aM;if(W<U){aN=W-(W-1)*al;v=aa*aN;aM=v/ap}else{aN=U-(U-1)*al;aM=aj*aN;v=aM*ap}if(aK){B=u;z=aO;ag=v;ae=aM}else{if(!aK){s=ag=v;r=ae=aM}aA=v/ad;az=aM/ak;aq=aa/aA;aB=aj/az;w();e(u,aO);Q.width(v);Q.height(aM);l.width(aq);l.height(aB);l.css({top:au-n,left:aw-O});k.css({top:-au,left:-aw});C(u,aO,v,aM)}}function c(){var u=at;var aP=ar;var v=H;var aM=G;var aO=s;var aN=r;u+=(B-u)/E.options.smoothLensMove;aP+=(z-aP)/E.options.smoothLensMove;v+=(B-v)/E.options.smoothZoomMove;aM+=(z-aM)/E.options.smoothZoomMove;aO+=(ag-aO)/E.options.smoothScale;aN+=(ae-aN)/E.options.smoothScale;aA=aO/ad;az=aN/ak;aq=aa/aA;aB=aj/az;w();e(u,aP);Q.width(aO);Q.height(aN);l.width(aq);l.height(aB);l.css({top:au-n,left:aw-O});k.css({top:-au,left:-aw});e(v,aM);C(u,aP,aO,aN);at=u;ar=aP;H=v;G=aM;s=aO;r=aN;if(aK){requestAnimFrame(c)}}function e(u,v){u-=am;v-=ai;aw=u-(aq/2);au=v-(aB/2);if(E.options.position!="lens"&&E.options.lensCollision){if(aw<0){aw=0}if(ad>=aq&&aw>ad-aq){aw=ad-aq}if(ad<aq){aw=ad/2-aq/2}if(au<0){au=0}if(ak>=aB&&au>ak-aB){au=ak-aB}if(ak<aB){au=ak/2-aB/2}}}function aH(){if(typeof ay!="undefined"){ay.remove()}if(typeof P!="undefined"){P.remove()}if(typeof t!="undefined"){t.remove()}}function N(u,aM){if(E.options.position=="fullscreen"){ad=b(window).width();ak=b(window).height()}else{ad=ax.width();ak=ax.height()}T.css({top:ak/2-T.height()/2,left:ad/2-T.width()/2});if(E.options.rootOutput||E.options.position=="fullscreen"){ac=ax.offset()}else{ac=ax.position()}ac.top=Math.round(ac.top);ac.left=Math.round(ac.left);switch(E.options.position){case"fullscreen":ai=av().top;am=av().left;R=0;aF=0;break;case"inside":ai=ac.top;am=ac.left;R=0;aF=0;break;case"top":ai=ac.top;am=ac.left;R=ai-aj;aF=am;break;case"left":ai=ac.top;am=ac.left;R=ai;aF=am-aa;break;case"bottom":ai=ac.top;am=ac.left;R=ai+ak;aF=am;break;case"right":default:ai=ac.top;am=ac.left;R=ai;aF=am+ad}ai-=ay.outerHeight()/2;am-=ay.outerWidth()/2;if(E.options.position.substr(0,1)=="#"){aD=b(E.options.position)}else{aD.length=0}if(aD.length==0&&E.options.position!="inside"&&E.options.position!="fullscreen"){if(!E.options.adaptive||!m||!q){m=ad;q=ak}if(E.options.zoomWidth=="auto"){aa=ad}else{aa=E.options.zoomWidth}if(E.options.zoomHeight=="auto"){aj=ak}else{aj=E.options.zoomHeight}R+=E.options.Yoffset;aF+=E.options.Xoffset;P.css({width:aa+"px",height:aj+"px",top:R,left:aF});if(E.options.position!="lens"){M.append(P)}}else{if(E.options.position=="inside"||E.options.position=="fullscreen"){aa=ad;aj=ak;P.css({width:aa+"px",height:aj+"px"});ay.append(P)}else{aa=aD.width();aj=aD.height();if(E.options.rootOutput){R=aD.offset().top;aF=aD.offset().left;M.append(P)}else{R=aD.position().top;aF=aD.position().left;aD.parent().append(P)}R+=(aD.outerHeight()-aj-P.outerHeight())/2;aF+=(aD.outerWidth()-aa-P.outerWidth())/2;P.css({width:aa+"px",height:aj+"px",top:R,left:aF})}}if(E.options.title&&j!=""){if(E.options.position=="inside"||E.options.position=="lens"||E.options.position=="fullscreen"){x=R;ao=aF;ay.append(t)}else{x=R+(P.outerHeight()-aj)/2;ao=aF+(P.outerWidth()-aa)/2;M.append(t)}t.css({width:aa+"px",height:aj+"px",top:x,left:ao})}ay.css({width:ad+"px",height:ak+"px",top:ai,left:am});o.css({width:ad+"px",height:ak+"px"});if(E.options.tint&&(E.options.position!="inside"&&E.options.position!="fullscreen")){o.css("background-color",E.options.tint)}else{if(D){o.css({"background-image":"url("+ax.attr("src")+")","background-color":"#fff"})}}I=new Image();var v="";if(A){v="?r="+(new Date()).getTime()}I.src=ax.attr("xoriginal")+v;Q=b(I);Q.css("position","absolute");I=new Image();I.src=ax.attr("src");k=b(I);k.css("position","absolute");k.width(ad);switch(E.options.position){case"fullscreen":case"inside":P.append(Q);break;case"lens":l.append(Q);if(E.options.bg){Q.css({display:"none"})}break;default:P.append(Q);l.append(k)}}this.openzoom=function(u){Z=u.pageX;X=u.pageY;if(E.options.adaptive){E.adaptive()}al=E.options.defaultScale;aK=false;ay=b("<div></div>");if(E.options.sourceClass!=""){ay.addClass(E.options.sourceClass)}ay.css("position","absolute");T=b("<div></div>");if(E.options.loadingClass!=""){T.addClass(E.options.loadingClass)}T.css("position","absolute");o=b('<div style="position: absolute; top: 0; left: 0;"></div>');ay.append(T);P=b("<div></div>");if(E.options.zoomClass!=""&&E.options.position!="fullscreen"){P.addClass(E.options.zoomClass)}P.css({position:"absolute",overflow:"hidden",opacity:1});if(E.options.title&&j!=""){t=b("<div></div>");J=b("<div></div>");t.css({position:"absolute",opacity:1});if(E.options.titleClass){J.addClass(E.options.titleClass)}J.html("<span>"+j+"</span>");t.append(J);if(E.options.fadeIn){t.css({opacity:0})}}l=b("<div></div>");if(E.options.lensClass!=""){l.addClass(E.options.lensClass)}l.css({position:"absolute",overflow:"hidden"});if(E.options.lens){lenstint=b("<div></div>");lenstint.css({position:"absolute",background:E.options.lens,opacity:E.options.lensOpacity,width:"100%",height:"100%",top:0,left:0,"z-index":9999});l.append(lenstint)}N(Z,X);if(E.options.position!="inside"&&E.options.position!="fullscreen"){if(E.options.tint||D){ay.append(o)}if(E.options.fadeIn){o.css({opacity:0});l.css({opacity:0});P.css({opacity:0})}M.append(ay)}else{if(E.options.fadeIn){P.css({opacity:0})}M.append(ay)}E.eventmove(ay);E.eventleave(ay);switch(E.options.position){case"inside":R-=(P.outerHeight()-P.height())/2;aF-=(P.outerWidth()-P.width())/2;break;case"top":R-=P.outerHeight()-P.height();aF-=(P.outerWidth()-P.width())/2;break;case"left":R-=(P.outerHeight()-P.height())/2;aF-=P.outerWidth()-P.width();break;case"bottom":aF-=(P.outerWidth()-P.width())/2;break;case"right":R-=(P.outerHeight()-P.height())/2}P.css({top:R,left:aF});Q.xon("load",function(aN){T.remove();if(!E.options.openOnSmall&&(Q.width()<aa||Q.height()<aj)){E.closezoom();aN.preventDefault();return false}if(E.options.scroll){E.eventscroll(ay)}if(E.options.position!="inside"&&E.options.position!="fullscreen"){ay.append(l);if(E.options.fadeIn){o.fadeTo(300,E.options.tintOpacity);l.fadeTo(300,1);P.fadeTo(300,1)}else{o.css({opacity:E.options.tintOpacity});l.css({opacity:1});P.css({opacity:1})}}else{if(E.options.fadeIn){P.fadeTo(300,1)}else{P.css({opacity:1})}}if(E.options.title&&j!=""){if(E.options.fadeIn){t.fadeTo(300,1)}else{t.css({opacity:1})}}h=Q.width();ah=Q.height();if(E.options.adaptive){if(ad<m||ak<q){k.width(ad);k.height(ak);h=ad/m*h;ah=ak/q*ah;Q.width(h);Q.height(ah)}}s=ag=h;r=ae=ah;ap=h/ah;W=h/aa;U=ah/aj;var aM,aO=["padding-","border-"];n=O=0;for(var v=0;v<aO.length;v++){aM=parseFloat(l.css(aO[v]+"top-width"));n+=aM!==aM?0:aM;aM=parseFloat(l.css(aO[v]+"bottom-width"));n+=aM!==aM?0:aM;aM=parseFloat(l.css(aO[v]+"left-width"));O+=aM!==aM?0:aM;aM=parseFloat(l.css(aO[v]+"right-width"));O+=aM!==aM?0:aM}n/=2;O/=2;H=at=B=Z;G=ar=z=X;L(Z,X);if(E.options.smooth){aK=true;requestAnimFrame(c)}E.eventclick(ay)})};this.movezoom=function(v){Z=v.pageX;X=v.pageY;if(D){Y=Z;V=X}var u=Z-am;var aM=X-ai;if(d){v.pageX-=(u-ad/2)*2;v.pageY-=(aM-ak/2)*2}if(u<0||u>ad||aM<0||aM>ak){ay.trigger("mouseleave")}if(E.options.smooth){B=v.pageX;z=v.pageY}else{w();e(v.pageX,v.pageY);l.css({top:au-n,left:aw-O});k.css({top:-au,left:-aw});C(v.pageX,v.pageY,0,0)}};this.eventdefault=function(){E.eventopen=function(u){u.xon("mouseenter",E.openzoom)};E.eventleave=function(u){u.xon("mouseleave",E.closezoom)};E.eventmove=function(u){u.xon("mousemove",E.movezoom)};E.eventscroll=function(u){u.xon("mousewheel DOMMouseScroll",E.xscroll)};E.eventclick=function(u){u.xon("click",function(v){ax.trigger("click")})}};this.eventunbind=function(){ax.xoff("mouseenter");E.eventopen=function(u){};E.eventleave=function(u){};E.eventmove=function(u){};E.eventscroll=function(u){};E.eventclick=function(u){}};this.init=function(u){E.options=b.extend({},b.fn.xzoom.defaults,u);if(E.options.rootOutput){M=b("body")}else{M=ax.parent()}an=E.options.position;d=E.options.lensReverse&&E.options.position=="inside";if(E.options.smoothZoomMove<1){E.options.smoothZoomMove=1}if(E.options.smoothLensMove<1){E.options.smoothLensMove=1}if(E.options.smoothScale<1){E.options.smoothScale=1}if(E.options.adaptive){b(window).xon("load",function(){m=ax.width();q=ax.height();E.adaptive();b(window).resize(E.adaptive)})}E.eventdefault();E.eventopen(ax)};this.destroy=function(){E.eventunbind()};this.closezoom=function(){aK=false;if(E.options.fadeOut){if(E.options.title&&j!=""){t.fadeOut(299)}if(E.options.position!="inside"||E.options.position!="fullscreen"){P.fadeOut(299);ay.fadeOut(300,function(){aH()})}else{ay.fadeOut(300,function(){aH()})}}else{aH()}};this.gallery=function(){var aM=new Array();var v,u=0;for(v=y;v<F.length;v++){aM[u]=F[v];u++}for(v=0;v<y;v++){aM[u]=F[v];u++}return{index:y,ogallery:F,cgallery:aM}};function af(u){var aM=u.attr("title");var v=u.attr("xtitle");if(v){return v}else{if(aM){return aM}else{return""}}}this.xappend=function(u){var v=u.parent();F[aC]=v.attr("href");v.data("xindex",aC);if(aC==0&&E.options.activeClass){K=u;K.addClass(E.options.activeClass)}if(aC==0&&E.options.title){j=af(u)}aC++;function aM(aO){aH();aO.preventDefault();if(E.options.activeClass){K.removeClass(E.options.activeClass);K=u;K.addClass(E.options.activeClass)}y=b(this).data("xindex");if(E.options.fadeTrans){ab=new Image();ab.src=ax.attr("src");S=b(ab);S.css({position:"absolute",top:ax.offset().top,left:ax.offset().left,width:ax.width(),height:ax.height()});b(document.body).append(S);S.fadeOut(200,function(){S.remove()})}var aP=v.attr("href");var aN=u.attr("xpreview")||u.attr("src");j=af(u);if(u.attr("title")){ax.attr("title",u.attr("title"))}ax.attr("xoriginal",aP);ax.removeAttr("style");ax.attr("src",aN);if(E.options.adaptive){m=ax.width();q=ax.height()}}if(E.options.hover){v.xon("mouseenter",v,aM)}v.xon("click",v,aM)};this.init(aG)}b.fn.xzoom=function(e){var c;var d;if(this.selector){var g=this.selector.split(",");for(var f in g){g[f]=b.trim(g[f])}this.each(function(h){if(g.length==1){if(h==0){c=b(this);if(typeof(c.data("xzoom"))!=="undefined"){return c.data("xzoom")}c.x=new a(c,e)}else{if(typeof(c.x)!=="undefined"){d=b(this);c.x.xappend(d)}}}else{if(b(this).is(g[0])&&h==0){c=b(this);if(typeof(c.data("xzoom"))!=="undefined"){return c.data("xzoom")}c.x=new a(c,e)}else{if(typeof(c.x)!=="undefined"&&!b(this).is(g[0])){d=b(this);c.x.xappend(d)}}}})}else{this.each(function(h){if(h==0){c=b(this);if(typeof(c.data("xzoom"))!=="undefined"){return c.data("xzoom")}c.x=new a(c,e)}else{if(typeof(c.x)!=="undefined"){d=b(this);c.x.xappend(d)}}})}if(typeof(c)==="undefined"){return false}c.data("xzoom",c.x);b(c).trigger("xzoom_ready");return c.x};b.fn.xzoom.defaults={position:"right",mposition:"inside",rootOutput:true,Xoffset:0,Yoffset:0,fadeIn:true,fadeTrans:true,fadeOut:false,smooth:true,smoothZoomMove:3,smoothLensMove:1,smoothScale:6,defaultScale:0,scroll:true,tint:false,tintOpacity:0.5,lens:false,lensOpacity:0.5,lensShape:"box",lensCollision:true,lensReverse:false,openOnSmall:true,zoomWidth:"auto",zoomHeight:"auto",sourceClass:"xzoom-source",loadingClass:"xzoom-loading",lensClass:"xzoom-lens",zoomClass:"xzoom-preview",activeClass:"xactive",hover:false,adaptive:true,adaptiveReverse:false,title:false,titleClass:"xzoom-caption",bg:false}})(jQuery);
    (function ($) {
    $(document).ready(function() {
        $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
        $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
        $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
        $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
        $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});

        //Integration with hammer.js
        var isTouchSupported = 'ontouchstart' in window;

        if (isTouchSupported) {
            //If touch device
            $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                var xzoom = $(this).data('xzoom');
                xzoom.eventunbind();
            });
            
            $('.xzoom, .xzoom2, .xzoom3').each(function() {
                var xzoom = $(this).data('xzoom');
                $(this).hammer().on("tap", function(event) {
                    event.pageX = event.gesture.center.pageX;
                    event.pageY = event.gesture.center.pageY;
                    var s = 1, ls;
    
                    xzoom.eventmove = function(element) {
                        element.hammer().on('drag', function(event) {
                            event.pageX = event.gesture.center.pageX;
                            event.pageY = event.gesture.center.pageY;
                            xzoom.movezoom(event);
                            event.gesture.preventDefault();
                        });
                    }
    
                    xzoom.eventleave = function(element) {
                        element.hammer().on('tap', function(event) {
                            xzoom.closezoom();
                        });
                    }
                    xzoom.openzoom(event);
                });
            });

        $('.xzoom4').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openfancy,300);
                        event.gesture.preventDefault();
                    });
                }

                function openfancy() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        $.fancybox.open(xzoom.gallery().cgallery);
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
            xzoom.openzoom(event);
            });
        });
        
        $('.xzoom5').each(function() {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function(event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function(element) {
                    element.hammer().on('drag', function(event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function(element) {
                    element.hammer().on('tap', function() {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific,300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = {src: gallery[i]};
                        }
                        $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

        } else {
            //If not touch device

            //Integration with fancybox plugin
            $('#xzoom-fancy').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
                event.preventDefault();
            });
           
            //Integration with magnific popup plugin
            $('#xzoom-magnific').bind('click', function(event) {
                var xzoom = $(this).data('xzoom');
                xzoom.closezoom();
                var gallery = xzoom.gallery().cgallery;
                var i, images = new Array();
                for (i in gallery) {
                    images[i] = {src: gallery[i]};
                }
                $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                event.preventDefault();
            });
        }
    });
})(jQuery);



}