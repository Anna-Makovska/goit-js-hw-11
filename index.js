import{a as c,i as n,S as u}from"./assets/vendor-BG8zX51N.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",f="48861034-650d0692db40a28ff83f5fb54";function g(s){let o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(m,{params:o}).then(t=>(t.data.hits.length===0&&iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",pauseOnHover:!0,balloon:!0}),t.data.hits)).catch(t=>{throw console.error(t),t})}function p(s){const{largeImageURL:o,webformatURL:t,tags:a,likes:e,views:r,comments:i,downloads:l}=s;return`
    <li class="galery-item">
     <a href="${o}" class="gallery-link" >
    <img src="${t}"
      class="gallery-image"
      alt="${a}"
    />
  </a>
  <div class="details">
  <p>${e}</p>
  <p>${r}</p>
  <p>${i}</p>
  <p>${l}</p>

  </div>
    </li>
    `}function d(s){return s.map(p).join("")}const h=document.querySelector(".search-form"),y=document.querySelector(".gallery");form.addEventListener("submit",s=>{s.preventDefault();const o=h.elements.searchQuery.value.trim();if(o===""){n.warning({message:"Please, fill the form!",position:"topRight"});return}g(o).then(t=>{console.log(t);const a=d(t.hits);y.innerHTML=a}).catch(t=>{n.error({title:"Error",message:"Something went wrong, try again later!"}),console.error(t)}),new u(".gallery a").refresh(),s.target.reset()});
//# sourceMappingURL=index.js.map
