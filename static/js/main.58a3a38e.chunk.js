(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),s=(a(16),a(10)),l=a(1),m=(a(17),a(18),a(19),a(4)),o=a.n(m),u=Object(n.memo)((function(e){var t=e.Title,a=e.Plot,n=void 0===a?"":a,r=e.Poster,i=e.imdbID;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("figure",{className:"image is-4by3"},c.a.createElement("img",{src:r,alt:"Film logo"}))),c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-8"},t))),c.a.createElement("div",{className:"content"},n,c.a.createElement("br",null),c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(i,"/")},"IMDB"))))}));u.propTypes={Title:o.a.string.isRequired,Plot:o.a.string.isRequired,Poster:o.a.string.isRequired,imdbID:o.a.string.isRequired};var d=function(e){var t=e.movies,a=void 0===t?[]:t;return c.a.createElement("div",{className:"movies"},a.map((function(e){return c.a.createElement(u,Object.assign({key:e.imdbId},e))})))},v=a(2),p=a.n(v),f=a(6),b=a(9),E=a.n(b),h=(a(23),"https://www.omdbapi.com/?i=tt3896198&apikey=fc4dff85");function g(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"&t=[").concat(t,"]"));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){var t=e.addMovie,a=Object(n.useState)({}),r=Object(l.a)(a,2),i=r[0],s=r[1],m=Object(n.useState)(""),o=Object(l.a)(m,2),d=o[0],v=o[1],b=Object(n.useState)(!1),h=Object(l.a)(b,2),N=h[0],j=h[1],w=Object(n.useState)(!1),y=Object(l.a)(w,2),O=y[0],k=y[1],x=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(d);case 3:if((t=e.sent).Response){e.next=7;break}return j(!0),e.abrupt("return");case 7:s(t),k(!0),v(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j(!0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"find-movie"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:E()("input",{"is-danger":N}),value:d,onChange:function(e){j(!1),v(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),x())}})),N&&c.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),c.a.createElement("div",{className:"field is-grouped"},c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-light",onClick:x},"Find a movie")),c.a.createElement("div",{className:"control"},c.a.createElement("button",{type:"button",className:"button is-primary",disabled:!O,onClick:function(){t(i),v(""),k(!1),s({})}},"Add to the list")))),O&&c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"title"},"Preview"),c.a.createElement(u,i)))},w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page-content"},a.length?c.a.createElement(d,{movies:a}):c.a.createElement("h2",null,"Add your movies")),c.a.createElement("div",{className:"sidebar"},c.a.createElement(j,{addMovie:function(e){a.some((function(t){return e.imdbID===t.imdbID}))||r((function(t){return[].concat(Object(s.a)(t),[e])}))}})))};i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.58a3a38e.chunk.js.map