"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40,76],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(791);var r="Cast_castList__ARoWn",s="Cast_castItem__-Jcfe",a="Cast_actorName__XabVA",i="Cast_characterName__R1bgC",c=n(184);var o=function(e){var t=e.cast,n=(e.movieId,e.defaultImg);return(0,c.jsx)("ul",{className:r,children:t.map((function(e){return(0,c.jsxs)("li",{className:s,children:[(0,c.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):n,alt:e.name,width:200}),(0,c.jsx)("p",{className:a,children:e.name}),(0,c.jsxs)("p",{className:i,children:["as ",e.character]})]},e.id)}))})}},618:function(e,t,n){n.d(t,{Df:function(){return c},TP:function(){return p},tx:function(){return f},z1:function(){return l},zv:function(){return v}});var r=n(861),s=n(757),a=n.n(s),i="f4c14c9e26eb24e8cb99026398667b0c";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},40:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),s=n(439),a=n(757),i=n.n(a),c=n(791),o=n(689),l=n(87),u=n(618),p=n(76),h=n(184);var v=function(e){var t=e.reviews;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Reviews:"}),(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h4",{children:e.author}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})},d={container:"MoviesDetails_container__rv5K4",title:"MoviesDetails_title__7Qz5p",poster:"MoviesDetails_poster__KWYIs",placeholderPoster:"MoviesDetails_placeholderPoster__ZtpCt",userScore:"MoviesDetails_userScore__bFjfP",overview:"MoviesDetails_overview__r5sLR",genresTitle:"MoviesDetails_genresTitle__+nwwE",genresList:"MoviesDetails_genresList__5dneY",genre:"MoviesDetails_genre__YMT+g",additionalInfoTitle:"MoviesDetails_additionalInfoTitle__wObl7",additionalInfoList:"MoviesDetails_additionalInfoList__xTt4O",additionalInfoLink:"MoviesDetails_additionalInfoLink__y66-0",castContainer:"MoviesDetails_castContainer__bV3en",reviewsContainer:"MoviesDetails_reviewsContainer__FkeIv",noReviews:"MoviesDetails_noReviews__C6UkQ",goBackButton:"MoviesDetails_goBackButton__O0kO2"},f="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x700";var m=function(){var e,t,n=(0,o.UO)().movieId,a=(0,c.useState)(null),m=(0,s.Z)(a,2),_=m[0],x=m[1],w=(0,c.useState)([]),g=(0,s.Z)(w,2),k=g[0],j=g[1],b=(0,c.useState)([]),y=(0,s.Z)(b,2),N=y[0],C=y[1],D=(0,c.useState)(!1),I=(0,s.Z)(D,2),M=I[0],L=I[1],Z=(0,o.TH)(),T=(0,o.s0)();(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.TP)(n);case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var S=function(){var e=(0,r.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),N.length>0&&C([]),0!==k.length){e.next=13;break}return e.prev=3,e.next=6,(0,u.zv)(n);case 6:r=e.sent,j(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error fetching movie credits:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,r.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k.length>0&&j([]),0!==N.length){e.next=13;break}return e.prev=3,e.next=6,(0,u.tx)(n);case 6:r=e.sent,C(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error fetching movie reviews:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();if(!_)return(0,h.jsx)("div",{children:"Loading..."});var R=null!==(e=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,h.jsxs)("div",{className:d.container,children:[(0,h.jsx)("button",{onClick:function(){T(R)},className:d.goBackButton,children:"Go back"}),(0,h.jsx)("h2",{className:d.title,children:_.title}),(0,h.jsx)("img",{src:_.poster_path?"https://image.tmdb.org/t/p/w500/".concat(_.poster_path):f,alt:_.title,onLoad:function(){L(!0)},className:d.poster,style:{display:M?"block":"none"}}),(0,h.jsx)("div",{className:d.placeholderPoster,style:{width:"250px",height:"375px",backgroundColor:"#ccc",display:M?"none":"block"}}),(0,h.jsxs)("p",{className:d.userScore,children:["User Score: ",_.vote_average]}),(0,h.jsxs)("p",{className:d.overview,children:["Overview: ",_.overview]}),(0,h.jsx)("h3",{className:d.genresTitle,children:"Genres:"}),(0,h.jsx)("ul",{className:d.genresList,children:_.genres.map((function(e){return(0,h.jsx)("li",{className:d.genre,children:e.name},e.id)}))}),(0,h.jsx)("h3",{className:d.additionalInfoTitle,children:"Additional Information:"}),(0,h.jsxs)("ul",{className:d.additionalInfoList,children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"#",onClick:S,className:d.additionalInfoLink,children:"Show Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"#",onClick:P,className:d.additionalInfoLink,children:"Show Reviews"})})]}),(0,h.jsx)("div",{className:d.castContainer,children:k.length>0&&!Z.pathname.endsWith("/reviews")?(0,h.jsx)(p.default,{cast:k,movieId:n,defaultImg:f}):Z.pathname.endsWith("/cast")&&0===k.length&&(0,h.jsx)("p",{className:d.noCast,children:"No cast."})}),(0,h.jsx)("div",{className:d.reviewsContainer,children:N.length>0&&!Z.pathname.endsWith("/cast")?(0,h.jsx)(v,{reviews:N}):Z.pathname.endsWith("/reviews")&&0===N.length&&(0,h.jsx)("p",{className:d.noReviews,children:"No review."})})]})}},861:function(e,t,n){function r(e,t,n,r,s,a,i){try{var c=e[a](i),o=c.value}catch(l){return void n(l)}c.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,a){var i=e.apply(t,n);function c(e){r(i,s,a,c,o,"next",e)}function o(e){r(i,s,a,c,o,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=40.aeea22db.chunk.js.map