(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background: lightgrey;\r\n  padding: 4em 2em;\r\n}\r\n\r\nh2 {\r\n  background: rgb(86 158 181);\r\n  margin: 0;\r\n  text-align: center;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  padding: 0.55em 0;\r\n}\r\n\r\n/* styling for projects */\r\n\r\n.all-projects {\r\n  background: rgb(86 158 181);\r\n  width: calc(1 / 3 * 100%);\r\n  margin-right: 3px;\r\n}\r\n\r\n.project-list {\r\n  list-style-type: none;\r\n  padding: 0 3px;\r\n  margin: 0;\r\n}\r\n\r\n.project-list li {\r\n  border: 1px solid black;\r\n  padding: 0.5em;\r\n  margin: 3px 0;\r\n  overflow: hidden;\r\n  background: rgb(54 184 226);\r\n  cursor: pointer;\r\n}\r\n\r\n.project-list li.active-project {\r\n  background: rgb(216 216 49 / 70%);\r\n}\r\n\r\n.todo-list-show {\r\n  width: 100%;\r\n  padding: 0.5em 0.5em 0.5em 1.5em;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  margin: 0;\r\n}\r\n\r\n.todo-list-show span {\r\n  font-style: italic;\r\n  font-size: 12px;\r\n  padding: 5px;\r\n  float: right;\r\n}\r\n\r\n.project-list li:hover,\r\n.todo-list-show:hover {\r\n  background: rgb(216 216 49 / 70%);\r\n}\r\n\r\n/* styling for to-dos list */\r\n\r\n.todo-list-container {\r\n  border: 1px solid black;\r\n\r\n  /* background: rgb(54 184 226); */\r\n  margin: 3px 0;\r\n  position: relative;\r\n}\r\n\r\n.to-do-list {\r\n  background: rgb(86 158 181);\r\n  width: calc(1 / 3 * 100%);\r\n  padding: 0 3px;\r\n  margin-right: 3px;\r\n}\r\n\r\n.todo-list-checkbox {\r\n  position: absolute;\r\n  top: 13px;\r\n  left: 3px;\r\n}\r\n\r\n/* styling for to-do details */\r\n\r\n.todo-desc {\r\n  background: rgb(86 158 181);\r\n  width: calc(1 / 3 * 100%);\r\n  padding: 0 3px;\r\n}\r\n\r\n.desc > div {\r\n  border: 1px solid black;\r\n  padding: 0.5em;\r\n  margin: 3px 0;\r\n  background: rgb(54 184 226);\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.todoText {\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  font-weight: 600;\r\n  color: #0a0300;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],o=0;o<e.length;o++){var d=e[o],c=t.base?d[0]+t.base:d[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var u=i(l),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:g(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function g(e,t){var n,r,o;if(t.singleton){var a=f++;n=m||(m=c(t)),r=u.bind(null,n,a,!1),o=u.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=d(e,t),s=0;s<n.length;s++){var l=i(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(402);function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e,t){o(2,arguments);var n=a(e),r=a(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function d(e,t){o(2,arguments);var n=a(e),r=a(t);return n.getFullYear()-r.getFullYear()}function c(e,t){o(2,arguments);var n=a(e),r=a(t),c=i(n,r),s=Math.abs(d(n,r));n.setFullYear("1584"),r.setFullYear("1584");var l=i(n,r)===-c,u=c*(s-l);return 0===u?0:u}function s(e,t){o(2,arguments);var n=a(e),r=a(t),i=n.getFullYear()-r.getFullYear(),d=n.getMonth()-r.getMonth();return 12*i+d}function l(e,t){o(2,arguments);var n=a(e),r=a(t),d=i(n,r),c=Math.abs(s(n,r));n.setMonth(n.getMonth()-d*c);var l=i(n,r)===-d,u=d*(c-l);return 0===u?0:u}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var u=6e4;function p(e){return e.getTime()%u}function m(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var r=n>0?(u+p(t))%u:p(t);return n*u+r}function f(e){o(1,arguments);var t=a(e);return t.setHours(0,0,0,0),t}var g=864e5;function h(e,t){o(2,arguments);var n=f(e),r=f(t),a=n.getTime()-m(n),i=r.getTime()-m(r);return Math.round((a-i)/g)}function v(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function b(e,t){o(2,arguments);var n=a(e),r=a(t),i=v(n,r),d=Math.abs(h(n,r));n.setDate(n.getDate()-i*d);var c=v(n,r)===-i,s=i*(d-c);return 0===s?0:s}function y(e,t){o(2,arguments);var n=a(e),r=a(t);return n.getTime()-r.getTime()}var w=36e5;function x(e,t){o(2,arguments);var n=y(e,t)/w;return n>0?Math.floor(n):Math.ceil(n)}function T(e,t){o(2,arguments);var n=y(e,t)/6e4;return n>0?Math.floor(n):Math.ceil(n)}function S(e,t){o(2,arguments);var n=y(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}function D(e){o(1,arguments);var t=a(e);return!isNaN(t)}function M(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function E(e,t){o(2,arguments);var n=a(e),r=M(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}function C(e,t){o(2,arguments);var n=M(t);return E(e,-n)}function j(e,t){o(2,arguments);var n=a(e),r=M(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var i=n.getDate(),d=new Date(n.getTime());d.setMonth(n.getMonth()+r+1,0);var c=d.getDate();return i>=c?d:(n.setFullYear(d.getFullYear(),d.getMonth(),i),n)}function N(e,t){o(2,arguments);var n=M(t);return j(e,-n)}function k(e,t){if(o(2,arguments),!t||"object"!=typeof t)return new Date(NaN);var n="years"in t?M(t.years):0,r="months"in t?M(t.months):0,i="weeks"in t?M(t.weeks):0,d="days"in t?M(t.days):0,c="hours"in t?M(t.hours):0,s="minutes"in t?M(t.minutes):0,l="seconds"in t?M(t.seconds):0,u=N(a(e),r+12*n),p=C(u,d+7*i),m=s+60*c,f=l+60*m,g=1e3*f,h=new Date(p.getTime()-g);return h}const q=(()=>{const e=document.querySelector("[data-todo-desc]"),t=document.querySelector("[data-desc]"),n=document.querySelector("[data-todos]"),r=document.getElementById("todo-template");function d(e){for(;e.firstChild;)e.removeChild(e.firstChild)}return{renderTodosDesc:function(n){d(t),document.getElementById("ToDoHeader").innerText=n.name+" Details";const r=document.createElement("div"),o=document.createElement("span");r.innerText="Title: ",o.innerText=""+n.name,r.appendChild(o),o.classList.add("todoText"),t.appendChild(r);const a=document.createElement("div"),i=document.createElement("span");a.innerText="Description: ",i.innerText=""+n.desc,a.appendChild(i),i.classList.add("todoText"),t.appendChild(a);const c=document.createElement("div"),s=document.createElement("span");c.innerText="Priority: ",s.innerText=""+n.prior,c.appendChild(s),s.classList.add("todoText"),t.appendChild(c);const l=document.createElement("div"),u=document.createElement("span");l.innerText="Date: ",u.innerText=""+n.date,l.appendChild(u),u.classList.add("todoText"),t.appendChild(l);const p=document.createElement("div"),m=document.createElement("span");p.innerText="Time: ",m.innerText=""+n.time,p.appendChild(m),m.classList.add("todoText"),t.appendChild(p);const f=document.createElement("div"),g=document.createElement("span");f.innerText="Note: ",g.innerText=""+n.note,f.appendChild(g),g.classList.add("todoText"),t.appendChild(f),e.appendChild(t)},renderTodos:function(e){e.todos.forEach((e=>{const t=document.importNode(r.content,!0),d=t.querySelector("input"),s=t.getElementById("todo-list-container");"low"===e.prior.toLowerCase()?s.style.backgroundColor="#6ed46e":"medium"===e.prior.toLowerCase()?s.style.backgroundColor="#c3825d":s.style.backgroundColor="#d45c5c",d.id=e.id,d.checked=e.complete,t.querySelector("button").id=e.id;const u=t.querySelector("ul");u.id=e.id,u.append(e.name);const p=document.createElement("span");p.innerText=`Due: ${function(e){var t=e.start,n=e.end;o(1,arguments);var r=a(t),d=a(n);if(!D(r))throw new RangeError("Start Date is invalid");if(!D(d))throw new RangeError("End Date is invalid");var s={years:0,months:0,days:0,hours:0,minutes:0,seconds:0},u=i(r,d);s.years=Math.abs(c(r,d));var p=k(r,{years:u*s.years});s.months=Math.abs(l(p,d));var m=k(p,{months:u*s.months});s.days=Math.abs(b(m,d));var f=k(m,{days:u*s.days});s.hours=Math.abs(x(f,d));var g=k(f,{hours:u*s.hours});s.minutes=Math.abs(T(g,d));var h=k(g,{minutes:u*s.minutes});return s.seconds=Math.abs(S(h,d)),s}({start:new Date(Date.now()),end:new Date(e.date)}).days} Days`,u.appendChild(p),""!==e.name&&n.appendChild(t)}))},clearElement:d}})(),L=document.querySelector("[data-projects]"),I=document.querySelector("[data-new-project-form]"),F=document.querySelector("[data-new-project-input]"),O=document.querySelector("[data-delete-project-button]"),Y=document.querySelector("[data-delete-todo-button]"),B=document.querySelector("[data-project-dsplay-container]"),H=document.querySelector("[data-project-title]"),P=document.querySelector("[data-todos]"),z=document.getElementById("ToDoHeader"),A=document.querySelector("[data-new-todo-form]"),R=document.querySelector("[data-new-todo-title-input]"),J=document.querySelector("[data-new-todo-desc-input]"),Z=document.querySelector("[data-new-todo-prior-input]"),U=document.querySelector("[data-new-todo-date-input]"),_=document.querySelector("[data-new-todo-time-input]"),G=document.querySelector("[data-new-todo-note-input]"),K=document.querySelector("[data-desc]"),Q="todos.projects",V="todos.selectedProjectId";let W=JSON.parse(localStorage.getItem(Q))||[{id:Date.now().toString(),name:"Default Project",todos:[]}],X=localStorage.getItem(V);function ee(){localStorage.setItem(Q,JSON.stringify(W)),localStorage.setItem(V,X)}function te(){q.clearElement(L),W.forEach((e=>{const t=document.createElement("li");t.dataset.projectId=e.id,t.innerText=e.name,e.id===X&&t.classList.add("active-project"),L.appendChild(t)}));const e=W.find((e=>e.id===X));null==X?B.style.display="none":(B.style.display="",H.innerText=e.name,q.clearElement(P),q.clearElement(K),q.renderTodos(e))}function ne(){ee(),te()}P.addEventListener("click",(e=>{const t=W.find((e=>e.id===X)).todos.find((t=>t.id===e.target.id));var n;"input"===e.target.tagName.toLowerCase()&&(t.complete=e.target.checked,ee()),"button"===e.target.tagName.toLowerCase()&&(n=t,A.addEventListener("submit",(e=>{e.preventDefault(),n.name&&(n.name=R.value),n.desc&&(n.desc=J.value),n.prior&&(n.prior=Z.value),n.date&&(n.date=U.value),n.time&&(n.time=_.value),n.note&&(n.note=G.value),ne(),A.reset()}))),"ul"===e.target.tagName.toLowerCase()&&q.renderTodosDesc(t)})),Y.addEventListener("click",(()=>{const e=W.find((e=>e.id===X));e.todos=e.todos.filter((e=>!e.complete)),z.innerText="Details",ne()})),L.addEventListener("click",(e=>{"li"===e.target.tagName.toLowerCase()&&(X=e.target.dataset.projectId,z.innerText="Details",ne())})),O.addEventListener("click",(()=>{W=W.filter((e=>e.id!==X)),X=null,ne()})),I.addEventListener("submit",(e=>{e.preventDefault();const t=F.value;if(null==t||""===t)return;const n=(r=t,{id:Date.now().toString(),name:r,todos:[]});var r;F.value=null,W.push(n),$("#projectModalCenter").modal("toggle"),ne()})),A.addEventListener("submit",(e=>{e.preventDefault();const t=R.value,n=J.value,r=Z.value,o=U.value,a=_.value,i=G.value;if(null==t||""===t)return;const d=(c=t,s=n,l=r,u=o,p=a,m=i,{id:Date.now().toString(),name:c,desc:s,prior:l,date:u,time:p,note:m,complete:!1});var c,s,l,u,p,m;R.value=null,W.find((e=>e.id===X)).todos.push(d),$("#ToDoModalCenter").modal("toggle"),ne(),A.reset()})),te()})()})();