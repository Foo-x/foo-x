"use strict";(self.webpackChunkfoo_x=self.webpackChunkfoo_x||[]).push([[527],{1422:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),l=function(e){var t=e.titleSvg;return r.createElement("img",{className:"header-common-module--headingCommon--K0kL6",src:t,alt:"heading title"})},n=a(336),c=function(e){var t=e.children,a=e.titleSvg,c=e.mainClassName;return r.createElement("div",{className:"global-wrapper"},r.createElement("header",{className:"layout-common-module--globalHeaderCommon--ZF2fw"},r.createElement(l,{titleSvg:a})),r.createElement(n.Z,{isHidden:!1,className:"global-nav-wrapper"}),r.createElement("main",{className:c},t))}},8971:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),l=a(1422),n=a(1597),c=a(396),m=function(e){var t=e.img;return r.createElement(c.G,{image:Object.assign({},t,{aspectRatio:1}),className:"thumbnail-raster-module--thumbnailRaster--tK2AX",alt:"thumbnail",itemProp:"image"})},i=function(e){var t=e.img,a=(0,r.useState)(!0),l=a[0],n=a[1],c="thumbnail-vector-archive-module--thumbnailVectorArchive--3e+5W",m=l?[c,"is-hidden"]:[c];return r.createElement("div",{className:"thumbnail-vector-archive-module--thumbnailVectorArchiveSpace--KWGpo"},r.createElement("img",{src:t,className:m.join(" "),alt:"thumbnail",itemProp:"image",onLoad:function(){return n(!1)}}))},s=function(e){var t=e.query,a=(0,n.useStaticQuery)("2535615805"),l=t.get("tag"),c=(0,r.useState)(l||""),s=c[0],u=c[1],o=new RegExp(s,"i"),h=a.allMarkdownRemark.nodes.filter((function(e){var t=e.frontmatter.tags||[];return!s||!t.every((function(e){return!o.test(e)}))}));return r.createElement("div",null,r.createElement("section",{className:"search-module--searchArea--IKmss"},r.createElement("label",null,r.createElement("h2",{className:"search-module--searchAreaLabelTag--fvBnB"},"タグ"),r.createElement("div",{className:"search-module--searchAreaInput--zaI0+"},r.createElement("input",{type:"text",value:s,onChange:function(e){u(e.target.value)}}),r.createElement("img",{className:"search-module--searchButton--Pn5cB",src:a.file.publicURL,alt:"search"})))),r.createElement("ul",{className:"search-module--searchResultList--HMAjL",style:{listStyle:"none",padding:0}},h.map((function(e){var t,a,l=e.frontmatter.title||e.fields.slug,c=null===(t=e.frontmatter.header)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData,s=c?r.createElement(m,{img:c}):r.createElement(i,{img:"/favicon.svg"}),u=e.frontmatter.tags?e.frontmatter.tags.map((function(e){return r.createElement("li",{key:e},e)})):null;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"search-module--searchResultItem--6dspg",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("div",{className:"search-module--searchResultImageWrapper--iNngS"},s),r.createElement("section",null,r.createElement("h2",{className:"search-module--searchResultItemTitle--VmeD6",itemProp:"headline"},l),r.createElement("time",{dateTime:e.frontmatter.date},e.frontmatter.date.replace(/-/g,".")),r.createElement("ul",{className:"search-module--searchResultTagList--2dnJY"},u)))))}))))},u=a(4832),o=function(e){var t=e.data,a=e.location,n=new URLSearchParams(a.search);return r.createElement(l.Z,{titleSvg:t.file.publicURL,mainClassName:"global-main-archive"},r.createElement(u.Z,{title:"archive",location:a,url:"/archive"}),r.createElement("section",{className:"archive-module--archivePage--2n-uA"},r.createElement(s,{query:n})))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-d1df9b275828afb426a1.js.map