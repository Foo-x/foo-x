(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6ZRY":function(e,a,t){e.exports={headerTop:"header-top-module--headerTop--2gQhK",headerBrand:"header-top-module--headerBrand--1JIqp"}},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("QSOs"),o=t("FrIn"),i=t.n(o);a.a=function(e){var a=e.location,t=e.children,o=e.header,c="/"===a.pathname,s=c?i.a.globalMainTop:"global-main",m=c?i.a.globalNavWrapperTop:"global-nav-wrapper",u=Object(n.useRef)(null),p=Object(n.useState)(!0),d=p[0],h=p[1];return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?h(!1):h(!0)}))}),{root:null,rootMargin:"0px 0px -100%",threshold:0});return e.observe(u.current),function(){e.disconnect()}}),[]),r.a.createElement("div",{className:"global-wrapper","data-is-root-path":c},r.a.createElement("header",{className:i.a.globalHeader},o),r.a.createElement(l.a,{isHidden:d,className:m}),r.a.createElement("main",{ref:u,className:s},t))}},FrIn:function(e,a,t){e.exports={globalHeader:"layout-module--globalHeader--2q2yQ",globalNavWrapperTop:"layout-module--globalNavWrapperTop--W28bP",globalMainTop:"layout-module--globalMainTop--3-sH6"}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return h}));var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("Bl7J"),i=t("vrFN"),c=t("su9G"),s=t("Riih"),m=t.n(s),u=function(e){var a=e.img,t=Object(n.useState)(!0),l=t[0],o=t[1];Object(n.useEffect)((function(){o(!1)}),[]);var i=m.a.thumbnailVector,c=l?[i,"is-hidden"]:[i];return r.a.createElement("div",{className:m.a.thumbnailVectorSpace},r.a.createElement("img",{src:a,className:c.join(" "),alt:"thumbnail",itemProp:"image",loading:"lazy"}))},p=t("hMtE"),d=t.n(p),h=(a.default=function(e){var a=e.data,t=e.location,n=a.allMarkdownRemark.nodes;return r.a.createElement(o.a,{location:t,header:r.a.createElement(c.a,null)},r.a.createElement(i.a,{title:"All posts",location:t,url:"/"}),r.a.createElement("ul",{className:d.a.postList,style:{listStyle:"none",padding:0}},n.map((function(e){var a,t=e.frontmatter.title||e.fields.slug;return r.a.createElement("li",{key:e.fields.slug},r.a.createElement("article",{className:d.a.postListItem,itemScope:!0,itemType:"http://schema.org/Article"},r.a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},r.a.createElement("div",{className:d.a.postListItemImageWrapper},r.a.createElement(u,{img:(null===(a=e.frontmatter.thumbnail)||void 0===a?void 0:a.publicURL)||"/favicon.svg"})),r.a.createElement("section",null,r.a.createElement("h2",null,r.a.createElement("span",{itemProp:"headline"},t))))))}))))},"4037346095")},Riih:function(e,a,t){e.exports={thumbnailVectorSpace:"thumbnail-vector-module--thumbnailVectorSpace--11DF1",thumbnailVector:"thumbnail-vector-module--thumbnailVector--3vXdJ"}},hMtE:function(e,a,t){e.exports={postList:"index-module--postList--2U7eB",postListItem:"index-module--postListItem--MvFJv",postListItemImageWrapper:"index-module--postListItemImageWrapper--2faRE"}},su9G:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),o=t("6ZRY"),i=t.n(o);a.a=function(){var e=Object(l.useStaticQuery)("3862782001").brand;return r.a.createElement("h1",{className:i.a.headerTop},r.a.createElement("img",{className:i.a.headerBrand,src:e.publicURL,alt:"foo-x"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3ae4327bf61f40ecdf5c.js.map