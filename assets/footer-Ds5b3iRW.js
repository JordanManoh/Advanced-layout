(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=e(t);fetch(t.href,c)}})();const i=()=>{const o=document.querySelector("[data-theme]"),r=document.querySelector("[data-theme-switcher]"),e=o.dataset,s=localStorage.getItem("theme")||"light";e.theme=s,s==="dark"&&(r.checked=!0),r.addEventListener("click",()=>{e.theme==="light"?(e.theme="dark",localStorage.setItem("theme","dark")):(e.theme="light",localStorage.setItem("theme","light"))})},n=()=>{const o=document.querySelector('[data-burger="btn"]'),r=document.querySelector('[data-burger="menu"]'),e=document.querySelector('[data-burger="overlay"]'),s=document.body,t=()=>{o.classList.remove("burger--active"),r.classList.remove("header__right--visible"),e.classList.remove("overlay--visible"),s.classList.remove("no-scroll")};o.addEventListener("click",()=>{o.classList.toggle("burger--active"),r.classList.toggle("header__right--visible"),e.classList.toggle("overlay--visible"),s.classList.toggle("no-scroll")}),e.addEventListener("click",t)},a=()=>{document.addEventListener("DOMContentLoaded",function(){let o=0;const r=document.querySelector('[data-menu="fixed-menu"]');window.addEventListener("scroll",function(){let e=window.scrollY||document.documentElement.scrollTop;e>o?r.setAttribute("data-state","hidden"):e<o&&e>0?r.setAttribute("data-state","visible"):e===0&&r.setAttribute("data-state","default"),o=e<=0?0:e},!1)})},u=()=>{document.querySelectorAll(".footer__item-title").forEach(function(o){o.addEventListener("click",function(r){r.preventDefault();var e=document.querySelector(`[data-id="footer__subitem-${o.getAttribute("data-id").split("-").pop()}"]`),s=o.querySelector("svg");document.querySelectorAll(".footer__subitem").forEach(function(t){t!==e&&(t.style.maxHeight=null,t.classList.remove("open"),t.previousElementSibling.querySelector("svg").classList.remove("rotate"))}),e.classList.contains("open")?(e.style.maxHeight=null,e.classList.remove("open"),s.classList.remove("rotate")):(e.style.maxHeight=e.scrollHeight+"px",e.classList.add("open"),s.classList.add("rotate"))})})};export{n as a,a as b,u as c,i as u};
