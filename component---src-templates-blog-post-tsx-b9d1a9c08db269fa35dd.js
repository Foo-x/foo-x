/*! For license information please see component---src-templates-blog-post-tsx-b9d1a9c08db269fa35dd.js.LICENSE.txt */
(self.webpackChunkfoo_x=self.webpackChunkfoo_x||[]).push([[7],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&t.push(l)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&t.push(a)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},7973:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(1883),o=n(5893);var i=()=>{var t;const{brand:e}=(0,r.useStaticQuery)("739241604");return(0,o.jsx)("h1",{className:"HeaderTop-module--headerTop--ea7fa",children:(0,o.jsx)("img",{className:"HeaderTop-module--headerBrand--dba3f",src:null!==(t=null==e?void 0:e.publicURL)&&void 0!==t?t:"",alt:"foo-x"})})}},8135:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7294),o=n(3598),i=n(3697),l=n(5893);var a=t=>{let{location:e,children:n,header:a}=t;const c="/"===e.pathname,u=c?"Layout-module--globalMainTop--f677e":"global-main",s=c?"Layout-module--globalNavWrapperTop--3ffe0":"global-nav-wrapper",d=(0,r.useRef)(null),{0:h,1:f}=(0,r.useState)(!0),p=(0,r.useContext)(o.uy);return(0,r.useEffect)((()=>{null!=d.current&&(p?d.current.setAttribute("inert",""):d.current.removeAttribute("inert"))}),[p]),(0,r.useEffect)((()=>{if(null==d.current)return()=>{};const t=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting||p?f(!1):f(!0)}))}),{root:null,rootMargin:"0px 0px -100%",threshold:0});return t.observe(d.current),()=>{t.disconnect()}}),[p]),(0,l.jsxs)("div",{className:"global-wrapper","data-is-root-path":c,children:[(0,l.jsx)("header",{className:"Layout-module--globalHeader--128e8",children:a}),(0,l.jsx)(i.Z,{isHidden:h,className:s}),(0,l.jsx)("main",{ref:d,className:u,children:n})]})}},9880:function(t,e,n){"use strict";n.r(e),n.d(e,{Head:function(){return z},default:function(){return Z}});var r=n(1883),o=n(8032),i=n(7973),l=n(5893);var a,c=t=>{let{fluid:e}=t;return e?(0,l.jsx)(o.G,{image:e,className:"HeaderBlogPost-module--blogPostHeaderImage--69ae3",alt:"header"}):(0,l.jsx)(i.Z,{})},u=n(8135),s=n(8345),d=(a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},a(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return d(e,t),e}(Error);function f(t,e){if(!t)throw new h(e)}function p(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))}));return e.length>0?"?".concat(e.join("&")):""}var v=n(7294),w=n(4184),y=n.n(w),b=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),g=function(){return g=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},g.apply(this,arguments)},m=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function l(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,a)}c((r=r.apply(t,e||[])).next())}))},j=function(t,e){var n,r,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(t,l)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},x=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},O=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},k=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};var S=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,l=n.windowPosition,a=void 0===l?"windowCenter":l,c=n.windowWidth,u=void 0===c?550:c;!function(t,e,n){var r=e.height,o=e.width,i=x(e,["height","width"]),l=g({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),a=window.open(t,"",Object.keys(l).map((function(t){return"".concat(t,"=").concat(l[t])})).join(", "));if(n)var c=window.setInterval((function(){try{(null===a||a.closed)&&(window.clearInterval(c),n(a))}catch(t){console.error(t)}}),1e3)}(t,g({height:i,width:u},"windowCenter"===a?O(u,i):k(u,i)),r)},e.handleClick=function(t){return m(e,void 0,void 0,(function(){var e,n,r,o,i,l,a,c,u,s;return j(this,(function(d){switch(d.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,l=e.url,a=e.openShareDialogOnClick,c=e.opts,u=o(l,c),r?[2]:(t.preventDefault(),n?(s=n(),C(s)?[4,s]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return a&&this.openShareDialog(u),i&&i(t,u),[2]}}))}))},e}return b(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,i=t.forwardedRef,l=(t.networkLink,t.networkName),a=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),c=t.style,u=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,x(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),s=y()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),d=g(g(a?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},c),r&&o);return v.createElement("button",g({},u,{"aria-label":u["aria-label"]||l,className:s,onClick:this.handleClick,ref:i,style:d}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(v.Component),P=S,L=function(){return L=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},L.apply(this,arguments)};var _=function(t,e,n,r){function o(o,i){var l=n(o),a=L({},o);return Object.keys(l).forEach((function(t){delete a[t]})),v.createElement(P,L({},r,a,{forwardedRef:i,networkName:t,networkLink:e,opts:n(o)}))}return o.displayName="ShareButton-".concat(t),(0,v.forwardRef)(o)};var N=_("twitter",(function(t,e){var n=e.title,r=e.via,o=e.hashtags,i=void 0===o?[]:o,l=e.related,a=void 0===l?[]:l;return f(t,"twitter.url"),f(Array.isArray(i),"twitter.hashtags is not an array"),f(Array.isArray(a),"twitter.related is not an array"),"https://twitter.com/share"+p({url:t,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:a.length>0?a.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400}),H=function(){return H=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},H.apply(this,arguments)},E=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function M(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,o=e.iconFillColor,i=e.round,l=e.size,a=E(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return v.createElement("svg",H({viewBox:"0 0 64 64",width:l,height:l},a),i?v.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):v.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),v.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var R=M({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var B=_("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return f(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+p({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),T=M({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var I=_("hatena",(function(t,e){var n=e.title;return f(t,"hatena.url"),"http://b.hatena.ne.jp/add?mode=confirm&url=".concat(t,"&title=").concat(n)}),(function(t){return{title:t.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),A=M({color:"#009ad9",networkName:"hatena",path:"M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "});var W=t=>{var e,n;let{url:o,title:i}=t;const{site:a}=(0,r.useStaticQuery)("4241674040"),c=i+" | "+(null!==(e=null==a||null===(n=a.siteMetadata)||void 0===n?void 0:n.title)&&void 0!==e?e:"");return(0,l.jsxs)("footer",{className:"ShareFooter-module--shareFooter--0957f",children:[(0,l.jsx)(N,{url:o,title:c,children:(0,l.jsx)(R,{size:32})}),(0,l.jsx)(B,{url:o,quote:c,children:(0,l.jsx)(T,{size:32})}),(0,l.jsx)(I,{url:o,title:c,children:(0,l.jsx)(A,{size:32})})]})};var Z=t=>{var e,n,o,i,a,s,d,h,f,p,v,w,y,b;let{data:g,location:m}=t;const j=g.markdownRemark,x=null==j||null===(e=j.tableOfContents)||void 0===e?void 0:e.replace(/<\/?p>/g,"");return(0,l.jsx)(u.Z,{location:m,header:(0,l.jsx)(c,{fluid:null==j||null===(n=j.frontmatter)||void 0===n||null===(o=n.header)||void 0===o||null===(i=o.childImageSharp)||void 0===i?void 0:i.gatsbyImageData}),children:(0,l.jsxs)("article",{className:"BlogPost-module--blogPost--42d82",itemScope:!0,itemType:"http://schema.org/Article",children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("h1",{itemProp:"headline",children:null==j||null===(a=j.frontmatter)||void 0===a?void 0:a.title}),(0,l.jsx)("time",{dateTime:null!==(s=null==j||null===(d=j.frontmatter)||void 0===d?void 0:d.date)&&void 0!==s?s:void 0,children:null==j||null===(h=j.frontmatter)||void 0===h||null===(f=h.date)||void 0===f?void 0:f.replace(/-/g,".")}),(0,l.jsx)("ul",{className:"BlogPost-module--blogPostTagList--95fda",children:(null==j||null===(p=j.frontmatter)||void 0===p||null===(v=p.tags)||void 0===v?void 0:v.map((t=>(0,l.jsx)("li",{children:(0,l.jsx)(r.Link,{to:"/archive/?tag="+(null!=t?t:""),children:t})},t))))||""}),(0,l.jsxs)("nav",{children:[(0,l.jsx)("header",{children:"目次"}),(0,l.jsx)("hr",{}),(0,l.jsx)("section",{dangerouslySetInnerHTML:{__html:null!=x?x:""}}),(0,l.jsx)("hr",{})]})]}),(0,l.jsx)("section",{className:"BlogPost-module--blogPostBody--60756",dangerouslySetInnerHTML:{__html:null!==(w=null==j?void 0:j.html)&&void 0!==w?w:""},itemProp:"articleBody"}),(0,l.jsx)("hr",{}),(0,l.jsx)(W,{url:m.href,title:null!==(y=null==j||null===(b=j.frontmatter)||void 0===b?void 0:b.title)&&void 0!==y?y:""})]})})};const z=t=>{var e,n,r,o,i,a,c,u,d,h;let{data:f,location:p}=t;const v=f.markdownRemark;return(0,l.jsx)(s.Z,{title:null!==(e=null==v||null===(n=v.frontmatter)||void 0===n?void 0:n.title)&&void 0!==e?e:"",description:null!==(r=null!==(o=null==v||null===(i=v.frontmatter)||void 0===i?void 0:i.description)&&void 0!==o?o:null==v?void 0:v.excerpt)&&void 0!==r?r:"",location:p,imageURL:null!==(a=null==v||null===(c=v.frontmatter)||void 0===c||null===(u=c.ogp)||void 0===u?void 0:u.publicURL)&&void 0!==a?a:void 0,url:null!==(d=null==v||null===(h=v.fields)||void 0===h?void 0:h.slug)&&void 0!==d?d:""})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-b9d1a9c08db269fa35dd.js.map