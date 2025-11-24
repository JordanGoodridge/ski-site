(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=new Date("February 13, 2026 00:00:00").getTime(),a=document.getElementById("countdown");function d(){const o=new Date().getTime(),n=m-o;if(n<0){a.innerHTML="IT'S TIME TO SHRED!";return}const r=Math.floor(n/(1e3*60*60*24)),s=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),e=Math.floor(n%(1e3*60*60)/(1e3*60));a.innerHTML=`
    <div class="countdown-item">
      <span>${r}</span>
      <span class="countdown-label">Days</span>
    </div>
    <div class="countdown-item">
      <span>${s}</span>
      <span class="countdown-label">Hours</span>
    </div>
    <div class="countdown-item">
      <span>${e}</span>
      <span class="countdown-label">Mins</span>
    </div>
  `}setInterval(d,1e3);d();const c=document.querySelector(".menu-toggle"),u=document.querySelector(".links");c.addEventListener("click",()=>{c.classList.toggle("active"),u.classList.toggle("active")});document.querySelectorAll(".links a").forEach(o=>{o.addEventListener("click",()=>{c.classList.remove("active"),u.classList.remove("active")})});function f(){window.innerWidth<=768&&document.querySelectorAll(".day-card, .card").forEach(o=>{o.classList.add("collapsed"),o.addEventListener("click",function(n){n.target.tagName!=="A"&&this.classList.toggle("collapsed")})})}f();let l;window.addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(()=>{window.innerWidth>768?document.querySelectorAll(".day-card, .card").forEach(o=>{o.classList.remove("collapsed")}):f()},250)});
