(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=new Date("February 13, 2026 00:00:00").getTime(),i=document.getElementById("countdown");function a(){const c=new Date().getTime(),n=l-c;if(n<0){i.innerHTML="IT'S TIME TO SHRED!";return}const s=Math.floor(n/(1e3*60*60*24)),o=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),e=Math.floor(n%(1e3*60*60)/(1e3*60));i.innerHTML=`
    <div class="countdown-item">
      <span>${s}</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-item">
      <span>${o}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-item">
      <span>${e}</span>
      <span class="countdown-label">Mins</span>
    </div>
  `}setInterval(a,1e3);a();
