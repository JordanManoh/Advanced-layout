(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const n=()=>{const s=document.querySelector("[data-theme]"),r=document.querySelector("[data-theme-switcher]"),t=s.dataset,c=localStorage.getItem("theme")||"light";t.theme=c,c==="dark"&&(r.checked=!0),r.addEventListener("click",()=>{t.theme==="light"?(t.theme="dark",localStorage.setItem("theme","dark")):(t.theme="light",localStorage.setItem("theme","light"))})},i=()=>{const s=document.querySelector('[data-burger="btn"]'),r=document.querySelector('[data-burger="menu"]'),t=document.querySelector('[data-burger="overlay"]'),c=document.body,e=()=>{s.classList.remove("burger--active"),r.classList.remove("header__right--visible"),t.classList.remove("overlay--visible"),c.classList.remove("no-scroll")};s.addEventListener("click",()=>{s.classList.toggle("burger--active"),r.classList.toggle("header__right--visible"),t.classList.toggle("overlay--visible"),c.classList.toggle("no-scroll")}),t.addEventListener("click",e)};n();i();document.addEventListener("DOMContentLoaded",function(){var s=0,r=document.querySelector('[data-menu="fixed-menu"]');window.addEventListener("scroll",function(){var t=window.scrollY||document.documentElement.scrollTop;t>s?r.setAttribute("data-state","hidden"):r.setAttribute("data-state","default"),s=t<=0?0:t},!1)});
