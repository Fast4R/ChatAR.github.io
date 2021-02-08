!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";n.r(t),n.d(t,"isRegValid",(function(){return r})),n.d(t,"isLogValid",(function(){return o})),n.d(t,"checkUserExistence",(function(){return u}));var a=n(1);function r(e,t,n){return e.length>=3&&e.length<=10&&t.length>=6&&t.length<=15&&n==t}function o(e,t){return e.length>=3&&e.length<=10&&t.length>=6&&t.length<=15}function u(e,t,n){fetch("https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(r){for(var o in r){if(r[o].name==e.value)return alert("Such a user already exists!"),!1}a.Registration.create(n,e).then((function(){e.value="",upPass.value="",t.value=""}))}))}},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t),n.d(t,"Registration",(function(){return r}));var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"create",value:function(e){return fetch("https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}()},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t),n.d(t,"Login",(function(){return r}));var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"getUserData",value:function(e,t,n,a){return fetch("https://chatar-fastar-default-rtdb.firebaseio.com/users-data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(r){for(var o in r){var u=r[o];e.value==u.name&&t.value==u.password&&(n.classList.add("hidden__sign"),a.classList.add("show__chat"))}}))}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}()},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t),n.d(t,"DispatchMessage",(function(){return r}));var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"dispatch",value:function(e){return fetch("https://chatar-fastar-default-rtdb.firebaseio.com/message-data.json",{method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()}))}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}()},function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.r(t),n.d(t,"HandlingMessage",(function(){return o}));var r=0,o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"getMessage",value:function(){return fetch("https://chatar-fastar-default-rtdb.firebaseio.com/message-data.json",{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e)t.push(e[n]);!function(e){var t;0==r?(r=e.length,u(e)):(t=e.slice(r),console.log(t),r=e.length,u(t))}(t)}))}}],(n=null)&&a(t.prototype,n),o&&a(t,o),e}();function u(e){for(var t in e){var n=e[t],a=n.name,r=n.message,o=document.getElementById("chatMsg"),u=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");o.appendChild(u).classList.add("chat__user"),u.appendChild(i).classList.add("chat__user-name"),u.appendChild(c).classList.add("chat__user-message"),i.innerHTML="".concat(a),c.innerHTML="".concat(r)}}},function(e,t,n){n(6),n(3),n(4),n(2),n(1),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);var a,r=n(2),o=(n(1),n(0)),u=n(3),i=n(4),c=document.getElementById("upBtn"),s=document.getElementById("inBtn"),l=document.getElementById("outBtn"),f=document.getElementById("upName"),d=document.getElementById("upPass"),h=document.getElementById("upPassConf"),m=document.getElementById("inName"),v=document.getElementById("inPass"),g=document.getElementById("sign"),p=document.getElementById("chat"),y=document.getElementById("chatName");c.addEventListener("click",(function(e){if(e.preventDefault(),Object(o.isRegValid)(f.value,d.value,h.value)){var t={name:f.value,password:d.value};Object(o.checkUserExistence)(f,h,t)}else alert("Name size (3-10 symbols)\nPassword size (6-15 symbols)\nPasswords may not match\nTry again!"),f.value="",d.value="",h.value=""})),s.addEventListener("click",(function(e){e.preventDefault(),a=m.value,Object(o.isLogValid)(m.value,v.value)&&r.Login.getUserData(m,v,g,p).then((function(){y.innerHTML="".concat(a)})).then((function(){b=setInterval((function(){i.HandlingMessage.getMessage()}),2e3)}))}));var b,E=document.getElementById("chatBtn"),j=document.getElementById("textarea");E.addEventListener("click",(function(e){e.preventDefault();var t={name:a,message:j.value};u.DispatchMessage.dispatch(t).then((function(){j.value=""}))})),l.addEventListener("click",(function(e){e.preventDefault(),setTimeout((function(){clearInterval(b)}),100),g.classList.remove("hidden__sign"),p.classList.remove("show__chat")}))}]);