(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{119:function(e,t,n){"use strict";var r=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=m,t.default=void 0;var a=r(n(47)),o=r(n(12)),u=r(n(13)),i=r(n(27)),c=r(n(28)),f=r(n(29)),l=r(n(23)),d=r(n(0)),s=r(n(4)),p=r(n(120)),h=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return null}}]),t}(d.default.Component);(0,l.default)(h,"contextTypes",{headManager:s.default.object});var v="next-head";function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return[d.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var y=["name","httpEquiv","charSet","itemProp","property"],g=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var w=(0,p.default)(function(e){return e.map(function(e){return d.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return d.default.Fragment&&t.type===d.default.Fragment?e.concat(d.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(m("")).filter(Boolean).filter((t=new a.default,n=new a.default,r=new a.default,o={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var u=0,i=y.length;u<i;u++){var c=y[u];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var f=e.props[c],l=o[c]||new a.default;if(l.has(f)&&-1===g.indexOf(f))return!1;l.add(f),o[c]=l}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+v,r=e.key||t;return d.default.cloneElement(e,{key:r,className:n})});var t,n,r,o},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(h);t.default=w},120:function(e,t,n){"use strict";var r=n(33),a=n(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,m=new p.default;function y(r){a=e((0,s.default)(m)),g.canUseDOM?t.call(r,a):n&&(a=n(a))}var g=function(e){function t(e){var n;return(0,o.default)(this,t),n=(0,u.default)(this,(0,i.default)(t).call(this,e)),t.canUseDOM||(m.add((0,l.default)((0,l.default)(n))),y((0,l.default)((0,l.default)(n)))),n}return(0,f.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,m.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){m.add(this),y(this)}},{key:"componentDidUpdate",value:function(){y(this)}},{key:"componentWillUnmount",value:function(){m.delete(this),y(this)}},{key:"render",value:function(){return h.default.createElement(r,null,this.props.children)}}]),t}(h.Component);return(0,d.default)(g,"canUseDOM","undefined"!=typeof window),(0,d.default)(g,"contextTypes",r.contextTypes),(0,d.default)(g,"displayName","SideEffect(".concat((0,v.getDisplayName)(r),")")),g}};var o=a(n(12)),u=a(n(27)),i=a(n(28)),c=a(n(13)),f=a(n(29)),l=a(n(60)),d=a(n(23)),s=a(n(121)),p=a(n(47)),h=r(n(0)),v=n(36)},121:function(e,t,n){var r=n(122),a=n(123),o=n(131);e.exports=function(e){return r(e)||a(e)||o()}},122:function(e,t,n){var r=n(78);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},123:function(e,t,n){var r=n(124),a=n(128);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},124:function(e,t,n){e.exports=n(125)},125:function(e,t,n){n(31),n(126),e.exports=n(3).Array.from},126:function(e,t,n){"use strict";var r=n(26),a=n(7),o=n(42),u=n(103),i=n(104),c=n(54),f=n(127),l=n(77);a(a.S+a.F*!n(107)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,s=o(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=l(s);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==g||p==Array&&i(g))for(n=new p(t=c(s.length));t>y;y++)f(n,y,m?v(s[y],y):s[y]);else for(d=g.call(s),n=new p;!(a=d.next()).done;y++)f(n,y,m?u(d,v,[a.value,y],!0):a.value);return n.length=y,n}})},127:function(e,t,n){"use strict";var r=n(20),a=n(45);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},128:function(e,t,n){e.exports=n(129)},129:function(e,t,n){n(44),n(31),e.exports=n(130)},130:function(e,t,n){var r=n(56),a=n(10)("iterator"),o=n(43);e.exports=n(3).isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||o.hasOwnProperty(r(t))}},131:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},396:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(397),{page:e.exports.default}})},397:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(30),u=(n(398),n(11),n(399),n(85));t.default=function(){return a.a.createElement("div",null,a.a.createElement(o.a,null,a.a.createElement(u.default,null)))}},398:function(e,t,n){e.exports=n(59)},399:function(e,t,n){e.exports=n(119)},85:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),u=n.n(o);t.default=function(){return a.a.createElement("div",null,a.a.createElement(u.a,{container:!0,spacing:16},a.a.createElement("img",{src:"https://github.com/s5935512004/T-D2X_Next.js/blob/master/Pictures/HomePic.jpg?raw=true",width:"100%",height:"100%"})))}}},[[396,1,0]]]);