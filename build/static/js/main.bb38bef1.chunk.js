(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),s=(t(60),t(29)),l=t.n(s),i=t(48),u=t(19),m=t(30),d=t.n(m),p=t(18),f=t.n(p),E=t(111),v=t(112),b=t(113),h=t(114),w="939e5f6ae8274cf6b6469d39439cbe26",g="619aa68078dd475a8e5333b23e7c7aa4";t(83),t(84);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(e){var a=Object(n.useState)("Hammarbyhojden"),t=Object(u.a)(a,2),c=t[0],o=t[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),p=m[0],j=m[1],k=Object(n.useState)(!1),y=Object(u.a)(k,2),x=y[0],D=y[1],O=Object(n.useState)({departures:{}}),Y=Object(u.a)(O,2),M=Y[0],S=Y[1];Object(n.useEffect)(function(){!function(){var e=Object(i.a)(l.a.mark(function e(){var a,t,n,r,o,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),D(!1),a=20,t="https://api.sl.se/api2/typeahead.jsonp?key=".concat(g,"&searchstring=").concat(c,"&stationsonly=",!0,"&maxresults=").concat(10),e.prev=5,e.next=8,d()(t,{headers:{dataType:"jsonp"}});case 8:if(n=e.sent,void 0!==(r=n.data.ResponseData[0].SiteId)){e.next=12;break}return e.abrupt("return");case 12:return o="https://api.sl.se/api2/realtimedeparturesV4.jsonp?key=".concat(w,"&siteid=").concat(r,"&timewindow=").concat(a),e.next=15,d()(o,{headers:{dataType:"jsonp"}});case 15:s=e.sent,S(s),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),D(!0);case 22:j(!1);case 23:case"end":return e.stop()}},e,null,[[5,19]])}));return function(){return e.apply(this,arguments)}}()()},[c]);var T=function(e){var a=f.a.duration(f()(e).diff(new Date)),t=Math.floor(a.asMinutes()),n="success";return t<11&&(n="warning"),t<5&&(n="danger"),n};return r.a.createElement(E.a,{className:""},r.a.createElement(v.a.Header,{className:""},r.a.createElement("h1",null,"Avg\xe5ngar fr\xe5n "),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:""},p?r.a.createElement("div",null,"Loading ..."):r.a.createElement("div",null,M.data?r.a.createElement(b.a,null,M.data.ResponseData.Metros.map(function(e,a){return r.a.createElement(b.a.Item,{variant:T(e.ExpectedDateTime),key:a.toString()},console.log(T(e.ExpectedDateTime)),r.a.createElement("p",null,"".concat(e.Destination," ").concat(f()(f()(e.ExpectedDateTime).format("YYYYMMDDkkmmss"),"YYYYMMDDkkmmss").fromNow())))})):r.a.createElement(b.a,null,r.a.createElement(b.a.Item,null,r.a.createElement("p",null,"Empty result"))))),x&&r.a.createElement(h.a,{variant:"danger"},r.a.createElement(h.a.Heading,null,"No data accessable"),r.a.createElement("p",null,"Try again later")))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,a,t){e.exports=t(109)},60:function(e,a,t){},84:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.bb38bef1.chunk.js.map