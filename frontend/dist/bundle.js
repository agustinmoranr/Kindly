!function(t){var n={};function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(o,a,function(n){return t[n]}.bind(null,a));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);var o=()=>'\n    <ul class="header__list">\n      <li class="header__list_el"><a href="/">Kindly</a></li>\n      <li class="header__list_el">Leer es para todos</li>\n      <li class="header__list_el">Hola</li>\n    </ul>\n  ';var a=(t,n)=>`\n    <article class="BookItem">\n      <a href="#/${t.id}">\n        <img src="https://m.media-amazon.com/images/I/41cj3vv7mjL.jpg" alt="${t.title}">\n        <p class="main-info">${t.title}</p>\n        <p class="main-info">${t.author}</p>\n      </a>\n      <div class="actions">\n        <button id="fav" type="button"  class="material-icons">add_circle</button>\n        <button id="read" type="button" class="material-icons">add_task</button>\n      </div>\n      </article>\n    `;const i="http://localhost:3000/book/";var r=async t=>{let n;const e=t?`${i}${t}`:i;try{const t=await fetch(e);return n=await t.json(),n}catch(t){console.error("[Error]:",n.error),console.error("[getData ERROR]: ",t)}};const l=document.getElementById("bookList"),c=document.getElementById("favorites"),s=document.getElementById("leidos");var d=async()=>{let t=await r();console.log(t);let n="Favoritos";0===t.body.favorites.length&&(n="No hay libros en tu lista de favoritos");let e="Leídos";0===t.body.read.length&&(e="No hay libros en tu lista de leídos");return`\n    ${c.innerHTML=`\n        <h2>${n}</h2>\n        <div class="BookSection">\n          ${t.body.favorites.map(t=>a(t)).join("")}\n        </div>\n      `}\n\n  ${s.innerHTML=`\n  <h2>${e}</h2>\n  <div class="BookSection">\n  ${t.body.read.map(t=>a(t)).join("")}\n  </div>\n  `}\n\n  ${l.innerHTML=`\n  <h2>¡Nuestro contenido!</h2>\n  <div class="BookSection">\n  ${t.body.books.map(t=>a(t)).join("")}\n    </div>\n    `}\n  `};var u=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var b=async(t,n)=>{console.log(t),console.log(n);const e=await r(n),o="http://localhost:3000/book?where="+t;try{return await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.body)})}catch(t){throw console.error("[getData ERROR]: ",t),new Error("[Error]: ",e.error)}};var y=async(t,n)=>{const e=`http://localhost:3000/book/${n}?where=${t}`;console.log(e);try{return await fetch(e,{method:"delete"}).then(t=>t.json())}catch(t){throw console.error("[getData ERROR]: ",t),new Error("[Error]: ",bookInfo.error)}};const h=document.getElementById("content");var m=()=>{};var v=t=>{if(t.length<=3){return"/"===t?t:"/:id"}return t};const f={"/":d,"/:id":async()=>{let t=await u(),n=await r(t);console.log(t);return`\n  ${h.innerHTML=`\n    <div class="Book">\n      <div class="Book__cover">\n        <img src="https://m.media-amazon.com/images/I/41cj3vv7mjL.jpg" alt="${n.body.title}">\n        <h2>${n.body.title}</h2>\n      </div>\n      <div class="Book__details">\n        <ul>\n          <li>Titulo: ${n.body.title}</li>\n          <li>Author: ${n.body.author}</li>\n          <li>Editorial: ${n.body.editorial}</li>\n          <li>Descripción: ${n.body.description}</li>\n          <li>Genero: ${n.body.genders}</li>\n          <li>Páginas: ${n.body.pages}</li>\n          <li>Publicación: ${n.body.publication}</li>\n        </ul>\n        <div class="actions">\n          <button id="fav" type="button"  class="material-icons">add_circle</button>\n          <button id="read" type="button" class="material-icons">check_box</button>\n          <button id="delete" type="button" class="material-icons">delete</button>\n          <button id="unread" type="button" class="material-icons">check_box_outline_blank</button>\n        </div>\n      </div>\n    </div>\n  `}\n  ${document.getElementById("fav").onclick=function(){b("favorites",t)}}\n  ${document.getElementById("read").onclick=function(){b("read",t)}}\n  ${document.getElementById("delete").onclick=function(){y("favorites",t)}}\n  ${document.getElementById("unread").onclick=function(){y("read",t)}}\n  `}};var p=async()=>{document.getElementById("header").innerHTML=o();let t=await u(),n=await v(t),e=n?f[n]:m;return await e()};window.addEventListener("load",p),window.addEventListener("hashchange",p)}]);