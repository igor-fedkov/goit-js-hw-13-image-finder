(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("ZYR3"),n("hi3g"),n("IlJM"),n("RtS0"),n("SgDD"),n("3dw1");var r={picturesListEl:document.querySelector(".gallery"),searchInput:document.querySelector('input[name="query"]'),btnLoadMore:document.querySelector('button[data-action="load-more"]'),cbInfiniteScroll:document.querySelector("#use-infinite-scroll"),elementForObserver:document.querySelector(".element-for-observer")};n("JBxO"),n("FdtR");function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){this.searchQuery="",this.currentPage=1,this.totalHits=0,this.alreadyDisplayed=0}var e,n,r;return t.prototype.getPictures=function(){var t=this,e="https://pixabay.com/api//?image_type=photo&orientation=horizontal&q="+this.searchQuery+"&page="+this.currentPage+"&per_page=12&key=19237838-f4b2b6be3555293fd9d73593e";return fetch(e).then((function(e){return t.currentPage+=1,e.json()})).then((function(e){return t.totalHits=e.totalHits,t.alreadyDisplayed+=e.hits.length,e.hits})).catch((function(t){console.log(t)}))},e=t,(n=[{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t,this.currentPage=1,this.alreadyDisplayed=0}}])&&i(e.prototype,n),r&&i(e,r),t}(),a=n("zTNg"),o=n.n(a),s=(n("zrP5"),n("bzha"),n("QJ3N"));function c(t){Object(s.info)({text:t,sticker:!1,minHeight:"40px",maxTextHeight:null,closer:!1})}var u=n("dcBu"),d=n("jffb");r.searchInput.addEventListener("input",(function(t){t.preventDefault(),r.searchInput.value.trim().length>0&&(m(r.searchInput.value),r.btnLoadMore.disabled=!0)})),r.btnLoadMore.addEventListener("click",(function(){p.getPictures().then((function(t){f(t),c("Shown "+p.alreadyDisplayed+" from "+p.totalHits),p.alreadyDisplayed===p.totalHits&&(r.btnLoadMore.disabled=!0)})),setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})}),1e3)})),r.picturesListEl.addEventListener("click",(function(t){if("IMG"!==t.target.nodeName)return;t.preventDefault();var e=h.find((function(e){return e.previewURL===t.target.src}));u.create('<img width="1400" height="900" src="'+e.largeImageURL+'">').show()})),r.cbInfiniteScroll.addEventListener("input",(function(t){r.cbInfiniteScroll.checked?(r.btnLoadMore.style.visibility="hidden",v.observe(r.elementForObserver)):(r.btnLoadMore.style.visibility="visible",v.unobserve(r.elementForObserver))}));var h=[],p=new l;r.btnLoadMore.disabled=!0;var m=d((function(t){p.query=t,p.getPictures().then((function(t){if(p.totalHits>0)return y(t),t.length<p.totalHits&&(r.btnLoadMore.disabled=!1),c("First "+p.alreadyDisplayed+" from "+p.totalHits),void(h=[].concat(h=[],t));var e;e="Nothing found. Try changing your request.",Object(s.error)({text:e,sticker:!1,minHeight:"40px",maxTextHeight:null,closer:!1})}))}),500),f=function(t){var e=o()(t);r.picturesListEl.insertAdjacentHTML("beforeend",e),h=[].concat(h,t)},y=function(t){r.picturesListEl.innerHTML="",f(t)};var v=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&p.alreadyDisplayed<p.totalHits&&""!==p.searchQuery&&p.getPictures().then((function(t){f(t)}))}))}))},zTNg:function(t,e,n){var r=n("mp5j");t.exports=(r.default||r).template({1:function(t,e,n,r,i){var l,a=null!=e?e:t.nullContext||{},o=t.hooks.helperMissing,s="function",c=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'\t<li class="gallery-item">\r\n\t\t<div class="photo-card">\r\n\t\t\t<img src='+c(typeof(l=null!=(l=u(n,"previewURL")||(null!=e?u(e,"previewURL"):e))?l:o)===s?l.call(a,{name:"previewURL",hash:{},data:i,loc:{start:{line:4,column:12},end:{line:4,column:26}}}):l)+' alt="'+c(typeof(l=null!=(l=u(n,"tags")||(null!=e?u(e,"tags"):e))?l:o)===s?l.call(a,{name:"tags",hash:{},data:i,loc:{start:{line:4,column:32},end:{line:4,column:40}}}):l)+'" width="'+c(typeof(l=null!=(l=u(n,"previewWidth")||(null!=e?u(e,"previewWidth"):e))?l:o)===s?l.call(a,{name:"previewWidth",hash:{},data:i,loc:{start:{line:4,column:49},end:{line:4,column:65}}}):l)+'px" height="'+c(typeof(l=null!=(l=u(n,"previewHeight")||(null!=e?u(e,"previewHeight"):e))?l:o)===s?l.call(a,{name:"previewHeight",hash:{},data:i,loc:{start:{line:4,column:77},end:{line:4,column:94}}}):l)+'"/>\r\n\t\r\n\t\t\t<div class="stats">\r\n\t\t\t\t<p class="stats-item">\r\n\t\t\t\t\t<i class="material-icons">thumb_up</i>\r\n\t\t\t\t\t'+c(typeof(l=null!=(l=u(n,"likes")||(null!=e?u(e,"likes"):e))?l:o)===s?l.call(a,{name:"likes",hash:{},data:i,loc:{start:{line:9,column:5},end:{line:9,column:14}}}):l)+'\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="stats-item">\r\n\t\t\t\t\t<i class="material-icons">visibility</i>\r\n\t\t\t\t\t'+c(typeof(l=null!=(l=u(n,"views")||(null!=e?u(e,"views"):e))?l:o)===s?l.call(a,{name:"views",hash:{},data:i,loc:{start:{line:13,column:5},end:{line:13,column:14}}}):l)+'\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="stats-item">\r\n\t\t\t\t\t<i class="material-icons">comment</i>\r\n\t\t\t\t\t'+c(typeof(l=null!=(l=u(n,"comments")||(null!=e?u(e,"comments"):e))?l:o)===s?l.call(a,{name:"comments",hash:{},data:i,loc:{start:{line:17,column:5},end:{line:17,column:17}}}):l)+'\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class="stats-item">\r\n\t\t\t\t\t<i class="material-icons">cloud_download</i>\r\n\t\t\t\t\t'+c(typeof(l=null!=(l=u(n,"downloads")||(null!=e?u(e,"downloads"):e))?l:o)===s?l.call(a,{name:"downloads",hash:{},data:i,loc:{start:{line:21,column:5},end:{line:21,column:18}}}):l)+"\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(t,e,n,r,i){var l;return null!=(l=(t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]})(n,"each").call(null!=e?e:t.nullContext||{},e,{name:"each",hash:{},fn:t.program(1,i,0),inverse:t.noop,data:i,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?l:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.ca1b7a7043c6a1bf202e.js.map