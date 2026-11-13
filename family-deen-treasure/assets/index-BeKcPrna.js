(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ar=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,uh=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ne={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},An=(n,e,t)=>`<ellipse cx="${n}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${e}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,xr={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${ne.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${ne.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${ne.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${ne.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${ne.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${ne.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${ne.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${ne.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${ne.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${ne.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${ne.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${ne.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${ne.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${ne.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${ne.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${ne.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${ne.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${ne.gold}"/><circle cx="22" cy="24" r="4" fill="${ne.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${ne.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ne.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${ne.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${ne.paper}"/><path d="M12 30L32 12l20 18z" fill="${ne.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${ne.wood}"/><rect x="42" y="36" width="8" height="8" fill="${ne.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${ne.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${ne.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${ne.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${ne.red}"/><circle cx="32" cy="24" r="18" fill="${ne.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${ne.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${ne.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${ne.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${ne.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${ne.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${ne.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${ne.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${ne.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${ne.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${ne.blue}"/><circle cx="44" cy="20" r="11" fill="${ne.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${ne.green}"/>${An(17,23,22)}${An(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${ne.purple}"/><circle cx="32" cy="24" r="12" fill="${ne.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${ne.teal}"/>${An(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${ne.blue}"/><circle cx="32" cy="20" r="13" fill="${ne.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${ne.paper}"/>${An(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${ne.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${ne.blue}"/><circle cx="46" cy="18" r="9" fill="${ne.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${ne.pink}"/><circle cx="32" cy="36" r="7" fill="${ne.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${ne.gold}"/>${An(15.5,20.5,18)}${An(43.5,48.5,18)}${An(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${ne.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${ne.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${ne.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${ne.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${ne.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${ne.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${ne.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${ne.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${ne.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${ne.sand}"/><circle cx="32" cy="32" r="18" fill="${ne.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${ne.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${ne.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${ne.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${ne.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${ne.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${ne.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${ne.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${ne.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${ne.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${ne.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${ne.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${ne.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${ne.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${ne.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${ne.paper}"/><circle cx="20" cy="26" r="4" fill="${ne.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${ne.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${ne.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${ne.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${ne.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${ne.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${ne.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${ne.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${ne.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${ne.wood}"/><rect x="34" y="14" width="24" height="12" fill="${ne.orange}"/><rect x="18" y="30" width="26" height="12" fill="${ne.orange}"/><rect x="6" y="30" width="8" height="12" fill="${ne.wood}"/><rect x="48" y="30" width="10" height="12" fill="${ne.wood}"/><rect x="6" y="46" width="24" height="12" fill="${ne.orange}"/><rect x="34" y="46" width="24" height="12" fill="${ne.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${ne.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${ne.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${ne.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${ne.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${ne.wood}"/><circle cx="32" cy="30" r="5" fill="${ne.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${ne.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${ne.skin}"/><circle cx="44" cy="24" r="9" fill="${ne.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${ne.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${ne.orange}"/>${An(19,25,22)}${An(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${ne.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${ne.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${ne.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${ne.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${ne.purple}"/><path d="M14 56h36l-6-8H20z" fill="${ne.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${ne.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${ne.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${ne.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${ne.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${ne.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${ne.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${ne.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${ne.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${ne.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${ne.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${ne.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${ne.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${ne.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${ne.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},Or=new Map;function ot(n,e=""){const t=n+"|"+e;return Or.has(t)||Or.set(t,`<span class="dk-ico ${e}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${xr[n]||xr.star}</svg></span>`),Or.get(t)}const dh=n=>n in xr,hc=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:dh(n)?ot(n):`<span class="glyph">${n}</span>`:"";function zo(n){const e=n.tag?`<span class="tag ${n.tagKind||""}">${n.tag}</span>`:"",t=n.pips?`<span class="dkpips">${Array.from({length:n.pips[1]},(r,a)=>`<i class="${a<n.pips[0]?"on":""}"></i>`).join("")}</span>`:"",i=n.meta||t?`<div class="meta">${t}${n.meta||""}</div>`:"",s=`${n.attr?`${n.attr}="${uh(n.id)}"`:""} ${n.data||""} style="--i:${n.i||0}${n.colorHex?`;--c:${n.colorHex}`:""}${n.darkHex?`;--cd:${n.darkHex}`:""}" ${n.locked?"disabled":""}`;return`<button class="dkcard ${n.color||""} ${n.locked?"locked":""} ${n.done?"done":""} ${n.cls||""}" ${s}>
    ${e}<span class="pic ${n.tall?"tall":""}">${hc(n.locked&&!n.keepPic?"lock":n.pic)}</span>
    <h3>${n.title}</h3>${n.sub?`<span class="sub">${n.sub}</span>`:""}${i}</button>`}const Bo=n=>`<div class="dksteps">${n.map((e,t)=>`<div class="dkstep" style="--i:${t}">${ot(e.icon||"hand")}${e.title?`<b>${e.title}</b>`:""}<p>${e.text}</p></div>`).join("")}</div>`,uc=(n,e,t="",i=0)=>`<span class="dkchip ${t}" style="--i:${i}">${n?ot(n):""}${e}</span>`,fh=n=>`<div class="dkstats">${n.map((e,t)=>uc(e[0],e[1],e[2]||"",t)).join("")}</div>`;function ph(n,{tone:e="",glow:t=!1,sparkles:i=0}={}){const s=i?`<span class="sparkles">${Array.from({length:i},(r,a)=>`<i style="--i:${a};left:${8+a*37%84}%;top:${10+a*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${e?"dk-"+e:""}">${s}${t?'<span class="glow"></span>':""}${n.map((r,a)=>r.src?`<img src="${r.src}" alt="" class="${r.cls||""}" style="--i:${a}">`:ot(r.icon,r.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${a}" class="dk-ico`)).join("")}</div>`}function Ho(n){n&&([...n.children].forEach((e,t)=>e.style.setProperty("--i",t)),n.classList.add("dkstagger"))}const dc=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},Go=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function mh(n,e,{n:t=28,spread:i=180,up:s=130}={}){if(Ar())return;const r=dc();for(let a=0;a<t;a++){const o=document.createElement("i");o.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);o.style.cssText=`left:${n}px;top:${e}px;background:${Go[a%Go.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+s}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,r.appendChild(o),setTimeout(()=>o.remove(),1700)}}function fc(n,e,t=6){if(!Ar())for(let i=0;i<t;i++){const s=document.createElement("i");s.className="dkstar",s.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${xr.star}</svg>`,s.style.cssText=`left:${n}px;top:${e}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,dc().appendChild(s),setTimeout(()=>s.remove(),1300)}}function gh(n,e=!1){var r;const t=(r=n==null?void 0:n.getBoundingClientRect)==null?void 0:r.call(n);if(!t)return;const i=t.left+t.width/2,s=t.top+t.height/2;mh(i,s,{n:e?44:20,spread:e?280:150}),e&&fc(i,s,8)}function vh(n,e,{from:t=0,dur:i=800,fmt:s=r=>Math.round(r).toLocaleString("en-US")}={}){if(!n)return;if(Ar()||i<=0){n.textContent=s(e);return}const r=performance.now(),a=o=>{const l=Math.min(1,(o-r)/i),c=1-Math.pow(1-l,3);n.textContent=s(t+(e-t)*c),l<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}function _h(n){const e=n.stars!=null?`<div class="stars">${[0,1,2].map(i=>ot("star")).join("")}</div>`:"",t=n.count!=null?`<div class="count">${ot(n.countIcon||"talk")}<b class="dkcount" data-to="${n.count}">0</b><span>${n.countLabel||""}</span></div>`:"";return`<div class="dkreward" data-stars="${n.stars??""}">${n.medal?`<div class="medal">${hc(n.medal)}</div>`:""}${n.title?`<h2>${n.title}</h2>`:""}${e}${t}${n.text?`<p>${n.text}</p>`:""}${n.chips?`<div class="chips">${n.chips.map((i,s)=>uc(i[0],i[1],i[2]||"",s)).join("")}</div>`:""}</div>`}function xh(n=document){var r;const e=((r=n.querySelector)==null?void 0:r.call(n,".dkreward"))||n;if(!e)return;const t=+e.dataset.stars||0,i=[...e.querySelectorAll(".stars .dk-ico")],s=Ar();i.forEach((a,o)=>{o<t&&setTimeout(()=>{if(a.classList.add("lit"),!s){const l=a.getBoundingClientRect();fc(l.left+l.width/2,l.top+l.height/2,3)}},s?0:350+o*260)}),e.querySelectorAll(".dkcount").forEach(a=>setTimeout(()=>vh(a,+a.dataset.to),s?0:200)),setTimeout(()=>gh(e.querySelector(".medal")||e,!0),s?0:120)}const yr="#4a2c1a",yh='<filter id="boil" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/><feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter>',Er=(n,e,t)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${e}" width="${n}" height="${e}"><defs>${yh}</defs>
<g filter="url(#boil)" fill="none" stroke="${yr}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${t}</g></svg>`,Tr=(n,e,t=1)=>`
  <ellipse cx="${n-10*t}" cy="${e+.5}" rx="${3.1*t}" ry="${4.3*t}" fill="#2a1a10" stroke="none"/>
  <ellipse cx="${n+14*t}" cy="${e-.5}" rx="${2.9*t}" ry="${4*t}" fill="#2a1a10" stroke="none"/>
  <ellipse cx="${n-20*t}" cy="${e+16*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
  <ellipse cx="${n+24*t}" cy="${e+14*t}" rx="${6*t}" ry="${3.6*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
  <path d="M${n-2*t} ${e+17*t} Q${n+6*t} ${e+25*t} ${n+14*t} ${e+16*t}" stroke-width="3"/>`,Cr=(n,e,t,i,s)=>{const r=(a,o)=>s?`<path d="M${a} ${n-22} L${o} ${n-2}" stroke-width="14"/><path d="M${a} ${n-22} L${o} ${n-2}" stroke="${s}" stroke-width="7"/>`:"";return`<g class="poseA">${r(e,e-1)}${r(t,t+1)}<ellipse cx="${e-3}" cy="${n+3}" rx="13" ry="7" fill="${i}"/><ellipse cx="${t+5}" cy="${n+3}" rx="13" ry="7" fill="${i}"/></g>
  <g class="poseB">${r(e+2,e-12)}${r(t-2,t+13)}<ellipse cx="${e-15}" cy="${n+1}" rx="13" ry="7" fill="${i}"/><ellipse cx="${t+18}" cy="${n-1}" rx="13" ry="7" fill="${i}"/></g>`},oi=(n,e,t,i,s)=>`<path d="M${n} ${e} L${t} ${i}" stroke-width="13"/><path d="M${n} ${e} L${t} ${i}" stroke="${s}" stroke-width="6"/>
  <circle cx="${t}" cy="${i}" r="6.5" fill="#fff0" stroke-width="0"/>`,li=(n,e,t)=>`<circle cx="${n}" cy="${e}" r="7" fill="${t}" stroke-width="3"/>`,Sa=(()=>{const n="#e0a878",e="#f2a6b5";return Er(200,240,`
  ${Cr(222,86,116,"#8a5a3a",null)}
  <path d="M72 124 Q100 114 128 124 L146 212 Q100 224 56 212 Z" fill="${e}"/>
  <path d="M62 196 Q100 208 142 196" stroke-width="3"/>
  <circle cx="84" cy="172" r="3" fill="${yr}" stroke="none"/><circle cx="118" cy="168" r="3" fill="${yr}" stroke="none"/>
  ${oi(76,140,56,172,e)}${li(56,174,n)}
  ${oi(128,138,152,158,e)}${li(152,160,n)}
  <path d="M156 156 L166 142" stroke-width="7"/>
  <circle cx="174" cy="130" r="15" fill="#d8f0f6"/><path d="M168 124 Q172 120 178 121" stroke="#fff" stroke-width="3"/>
  <path d="M100 20 C144 20 160 50 158 84 C157 106 150 122 138 136 Q100 150 62 136 C48 120 42 104 42 84 C42 48 60 20 100 20 Z" fill="#8fc7e8"/>
  <path d="M68 128 Q100 140 132 128" stroke-width="3"/>
  <ellipse cx="106" cy="84" rx="36" ry="38" fill="${n}"/>
  <path d="M70 76 Q104 34 142 72" stroke-width="3"/>
  ${Tr(104,84)}`)})(),ba=(()=>{const n="#c68a5e",e="#f6d36b";return Er(200,240,`
  ${Cr(222,88,116,"#5b3520","#6d8fc9")}
  <path d="M74 122 Q102 114 130 122 L138 198 Q102 206 66 198 Z" fill="${e}"/>
  <path d="M102 124 L102 150" stroke-width="3"/><circle cx="102" cy="160" r="2.5" fill="${yr}" stroke="none"/>
  ${oi(78,138,58,166,e)}${li(58,168,n)}
  <g><rect x="44" y="150" width="14" height="40" rx="6" fill="#fbf3dc" transform="rotate(-25 51 170)"/><path d="M40 166 L60 158" stroke="#c9483e" stroke-width="3"/></g>
  ${oi(128,136,150,160,e)}${li(150,162,n)}
  <circle cx="60" cy="84" r="9" fill="${n}"/>
  <circle cx="102" cy="80" r="42" fill="${n}"/>
  <path d="M60 70 Q64 44 82 38" stroke-width="8"/><path d="M60 70 Q64 44 82 38" stroke="#3a2a22" stroke-width="3"/>
  <path d="M60 60 Q102 22 144 58 L144 64 Q102 50 60 66 Z" fill="#fbf7ee"/>
  <path d="M72 52 L76 58 M88 44 L90 51 M104 41 L104 48 M120 44 L118 51 M134 51 L130 57" stroke-width="2.5"/>
  ${Tr(104,84)}`)})(),Mr=(()=>{const n="#d79a6b",e="#8f7bd6",t="#e7b6c8";return Er(200,300,`
  ${Cr(284,86,116,"#6b3f2a",null)}
  <path d="M70 126 Q100 116 130 126 L150 274 Q100 288 50 274 Z" fill="${e}"/>
  <path d="M100 150 L100 270" stroke-width="3"/>
  ${oi(74,144,60,200,e)}${li(60,204,n)}
  ${oi(128,142,146,196,e)}${li(146,200,n)}
  <path d="M100 26 C140 26 154 52 152 82 C151 102 146 118 138 132 Q100 150 62 132 C52 118 48 102 48 82 C48 52 60 26 100 26 Z" fill="${t}"/>
  <path d="M60 126 Q100 142 140 126 L144 150 Q100 166 56 150 Z" fill="${t}"/>
  <ellipse cx="104" cy="84" rx="31" ry="34" fill="${n}"/>
  <path d="M73 76 Q104 40 136 74" stroke-width="3"/>
  ${Tr(102,84,.85)}`)})(),Sr=(()=>{const n="#b07650",e="#bfd8ee",t="#6fb8a8";return Er(200,300,`
  ${Cr(284,86,116,"#5b3520",null)}
  <path d="M68 124 Q100 114 132 124 L144 276 Q100 288 56 276 Z" fill="${e}"/>
  <path d="M70 126 Q84 120 92 122 L90 230 Q78 232 66 228 Z" fill="${t}"/>
  <path d="M130 126 Q116 120 108 122 L110 230 Q122 232 134 228 Z" fill="${t}"/>
  ${oi(72,142,58,198,e)}${li(58,202,n)}
  ${oi(130,140,148,194,e)}${li(148,198,n)}
  <circle cx="66" cy="86" r="8" fill="${n}"/>
  <circle cx="102" cy="82" r="36" fill="${n}"/>
  <path d="M68 92 Q70 126 102 128 Q134 126 136 92 Q128 110 102 112 Q76 110 68 92 Z" fill="#3a2a22"/>
  <path d="M66 62 Q102 28 138 60 L138 66 Q102 54 66 68 Z" fill="#fbf7ee"/>
  ${Tr(102,80,.85)}`)})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="170",Mh=0,Vo=1,Sh=2,pc=1,bh=2,In=3,ci=0,Yt=1,yt=2,ii=0,Ki=1,wa=2,Wo=3,$o=4,wh=5,yi=100,Ah=101,Eh=102,Th=103,Ch=104,Rh=200,Ph=201,Lh=202,Ih=203,Aa=204,Ea=205,Dh=206,Uh=207,Nh=208,Fh=209,kh=210,Oh=211,zh=212,Bh=213,Hh=214,Ta=0,Ca=1,Ra=2,ns=3,Pa=4,La=5,Ia=6,Da=7,mc=0,Gh=1,Vh=2,si=0,Wh=1,$h=2,Xh=3,qh=4,Yh=5,Zh=6,Jh=7,gc=300,is=301,ss=302,Ua=303,Na=304,Rr=306,Es=1e3,bi=1001,Fa=1002,It=1003,jh=1004,Os=1005,_n=1006,zr=1007,wi=1008,zn=1009,vc=1010,_c=1011,Ts=1012,vo=1013,Ti=1014,Dn=1015,Ci=1016,_o=1017,xo=1018,rs=1020,xc=35902,yc=1021,Mc=1022,cn=1023,Sc=1024,bc=1025,Qi=1026,as=1027,Pr=1028,yo=1029,wc=1030,Mo=1031,So=1033,dr=33776,fr=33777,pr=33778,mr=33779,ka=35840,Oa=35841,za=35842,Ba=35843,Ha=36196,Ga=37492,Va=37496,Wa=37808,$a=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,ja=37815,Ka=37816,Qa=37817,eo=37818,to=37819,no=37820,io=37821,gr=36492,so=36494,ro=36495,Ac=36283,ao=36284,oo=36285,lo=36286,Kh=3200,Qh=3201,Ec=0,eu=1,ni="",qt="srgb",ls="srgb-linear",Lr="linear",ct="srgb",Ii=7680,Xo=519,tu=512,nu=513,iu=514,Tc=515,su=516,ru=517,au=518,ou=519,qo=35044,Yo="300 es",Un=2e3,br=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const Ss=Math.PI/180,Cs=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function bo(n,e){return(n%e+e)%e}function lu(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function cu(n,e,t){return n!==e?(t-n)/(e-n):0}function bs(n,e,t){return(1-t)*n+t*e}function hu(n,e,t,i){return bs(n,e,1-Math.exp(-t*i))}function uu(n,e=1){return e-Math.abs(bo(n,e*2)-e)}function du(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function fu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function pu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function mu(n,e){return n+Math.random()*(e-n)}function gu(n){return n*(.5-Math.random())}function vu(n){n!==void 0&&(Zo=n);let e=Zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(n){return n*Ss}function xu(n){return n*Cs}function yu(n){return(n&n-1)===0&&n!==0}function Mu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Su(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function bu(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wu={DEG2RAD:Ss,RAD2DEG:Cs,generateUUID:Pi,clamp:Rt,euclideanModulo:bo,mapLinear:lu,inverseLerp:cu,lerp:bs,damp:hu,pingpong:uu,smoothstep:du,smootherstep:fu,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:vu,degToRad:_u,radToDeg:xu,isPowerOfTwo:yu,ceilPowerOfTwo:Mu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:bu,normalize:Ht,denormalize:Zi};class ge{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],A=s[1],w=s[4],_=s[7],I=s[2],C=s[5],T=s[8];return r[0]=a*v+o*A+l*I,r[3]=a*m+o*w+l*C,r[6]=a*p+o*_+l*T,r[1]=c*v+h*A+u*I,r[4]=c*m+h*w+u*C,r[7]=c*p+h*_+u*T,r[2]=f*v+d*A+g*I,r[5]=f*m+d*w+g*C,r[8]=f*p+d*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=t*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Br.makeScale(e,t)),this}rotate(e){return this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Br=new je;function Cc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Au(){const n=wr("canvas");return n.style.display="block",n}const Jo={};function ys(n){n in Jo||(Jo[n]=!0,console.warn(n))}function Eu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Tu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nt={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(n.r=Fn(n.r),n.g=Fn(n.g),n.b=Fn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(n.r=es(n.r),n.g=es(n.g),n.b=es(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ni?Lr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jo=[.64,.33,.3,.6,.15,.06],Ko=[.2126,.7152,.0722],Qo=[.3127,.329],el=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[ls]:{primaries:jo,whitePoint:Qo,transfer:Lr,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Ko,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:jo,whitePoint:Qo,transfer:ct,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Ko,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let Di;class Ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=wr("canvas")),Di.width=e.width,Di.height=e.height;const i=Di.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fn(t[i]/255)*255):t[i]=Fn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pu=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Hr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ru.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lu=0;class kt extends cs{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=bi,s=bi,r=_n,a=wi,o=cn,l=zn,c=kt.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Pi(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Es:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Es:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=gc;kt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,i=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(d+1)/2,I=(p+1)/2,C=(h+f)/4,T=(u+v)/4,L=(g+m)/4;return w>_&&w>I?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=C/i,r=T/i):_>I?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=C/s,r=L/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=T/r,s=L/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Iu extends cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new kt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Iu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pc extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*v,A=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const I=Math.sqrt(w),C=Math.atan2(I,p*A);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const _=o*A;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gr.copy(this).projectOnVector(e),this.sub(Gr)}reflect(e){return this.sub(Gr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new N,nl=new hi;class Ds{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zs.copy(i.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),Bs.subVectors(this.max,ps),Ui.subVectors(e.a,ps),Ni.subVectors(e.b,ps),Fi.subVectors(e.c,ps),qn.subVectors(Ni,Ui),Yn.subVectors(Fi,Ni),ui.subVectors(Ui,Fi);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ui.z,ui.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ui.z,0,-ui.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ui.y,ui.x,0];return!Vr(t,Ui,Ni,Fi,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,Ui,Ni,Fi,Bs))?!1:(Hs.crossVectors(qn,Yn),t=[Hs.x,Hs.y,Hs.z],Vr(t,Ui,Ni,Fi,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new N,new N,new N,new N,new N,new N,new N,new N],tn=new N,zs=new Ds,Ui=new N,Ni=new N,Fi=new N,qn=new N,Yn=new N,ui=new N,ps=new N,Bs=new N,Hs=new N,di=new N;function Vr(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){di.fromArray(n,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Uu=new Ds,ms=new N,Wr=new N;class wo{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Uu.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const t=ms.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ms,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(Wr)),this.expandByPoint(ms.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new N,$r=new N,Gs=new N,Zn=new N,Xr=new N,Vs=new N,qr=new N;class Nu{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){$r.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub($r);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Zn.dot(this.direction),l=-Zn.dot(Gs),c=Zn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(Gs,f),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,s,r){Xr.subVectors(t,e),Vs.subVectors(i,e),qr.crossVectors(Xr,Vs);let a=this.direction.dot(qr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(Vs.crossVectors(Zn,Vs));if(l<0)return null;const c=o*this.direction.dot(Xr.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(qr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,ku)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Jn.crossVectors(i,Jt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Jn.crossVectors(i,Jt)),Jn.normalize(),Ws.crossVectors(Jt,Jn),s[0]=Jn.x,s[4]=Ws.x,s[8]=Jt.x,s[1]=Jn.y,s[5]=Ws.y,s[9]=Jt.y,s[2]=Jn.z,s[6]=Ws.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],w=i[7],_=i[11],I=i[15],C=s[0],T=s[4],L=s[8],b=s[12],M=s[1],R=s[5],B=s[9],G=s[13],q=s[2],ie=s[6],$=s[10],ae=s[14],Y=s[3],ye=s[7],we=s[11],Re=s[15];return r[0]=a*C+o*M+l*q+c*Y,r[4]=a*T+o*R+l*ie+c*ye,r[8]=a*L+o*B+l*$+c*we,r[12]=a*b+o*G+l*ae+c*Re,r[1]=h*C+u*M+f*q+d*Y,r[5]=h*T+u*R+f*ie+d*ye,r[9]=h*L+u*B+f*$+d*we,r[13]=h*b+u*G+f*ae+d*Re,r[2]=g*C+v*M+m*q+p*Y,r[6]=g*T+v*R+m*ie+p*ye,r[10]=g*L+v*B+m*$+p*we,r[14]=g*b+v*G+m*ae+p*Re,r[3]=A*C+w*M+_*q+I*Y,r[7]=A*T+w*R+_*ie+I*ye,r[11]=A*L+w*B+_*$+I*we,r[15]=A*b+w*G+_*ae+I*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=u*m*c-v*f*c+v*l*d-o*m*d-u*l*p+o*f*p,w=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,_=h*v*c-g*u*c+g*o*d-a*v*d-h*o*p+a*u*p,I=g*u*l-h*v*l-g*o*f+a*v*f+h*o*m-a*u*m,C=t*A+i*w+s*_+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=A*T,e[1]=(v*f*r-u*m*r-v*s*d+i*m*d+u*s*p-i*f*p)*T,e[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*p+i*l*p)*T,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*d-i*l*d)*T,e[4]=w*T,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*T,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*T,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*d+t*l*d)*T,e[8]=_*T,e[9]=(g*u*r-h*v*r-g*i*d+t*v*d+h*i*p-t*u*p)*T,e[10]=(a*v*r-g*o*r+g*i*c-t*v*c-a*i*p+t*o*p)*T,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*T,e[12]=I*T,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*T,e[14]=(g*o*s-a*v*s-g*i*l+t*v*l+a*i*m-t*o*m)*T,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,A=l*c,w=l*h,_=l*u,I=i.x,C=i.y,T=i.z;return s[0]=(1-(v+p))*I,s[1]=(d+_)*I,s[2]=(g-w)*I,s[3]=0,s[4]=(d-_)*C,s[5]=(1-(f+p))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(g+w)*T,s[9]=(m-A)*T,s[10]=(1-(f+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],nn.copy(this);const c=1/r,h=1/a,u=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Un){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(o===Un)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===br)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,d=(i+s)*h;let g,v;if(o===Un)g=(a+r)*u,v=-2*u;else if(o===br)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new N,nn=new vt,Fu=new N(0,0,0),ku=new N(1,1,1),Jn=new N,Ws=new N,Jt=new N,il=new vt,sl=new hi;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Lc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const rl=new N,Oi=new hi,Cn=new vt,$s=new N,gs=new N,zu=new N,Bu=new hi,al=new N(1,0,0),ol=new N(0,1,0),ll=new N(0,0,1),cl={type:"added"},Hu={type:"removed"},zi={type:"childadded",child:null},Yr={type:"childremoved",child:null};class Dt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new N,t=new yn,i=new hi,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$s.copy(e):$s.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,$s,this.up):Cn.lookAt($s,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,zu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new N(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new N,Rn=new N,Zr=new N,Pn=new N,Bi=new N,Hi=new N,hl=new N,Jr=new N,jr=new N,Kr=new N,Qr=new Mt,ea=new Mt,ta=new Mt;class ln{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),sn.subVectors(e,t),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){sn.subVectors(s,t),Rn.subVectors(i,t),Zr.subVectors(e,t);const a=sn.dot(sn),o=sn.dot(Rn),l=sn.dot(Zr),c=Rn.dot(Rn),h=Rn.dot(Zr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Qr.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qr.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qr,r.x),a.addScaledVector(ea,r.y),a.addScaledVector(ta,r.z),a}static isFrontFacing(e,t,i,s){return sn.subVectors(i,t),Rn.subVectors(e,t),sn.cross(Rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),sn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Bi.subVectors(s,i),Hi.subVectors(r,i),Jr.subVectors(e,i);const l=Bi.dot(Jr),c=Hi.dot(Jr);if(l<=0&&c<=0)return t.copy(i);jr.subVectors(e,s);const h=Bi.dot(jr),u=Hi.dot(jr);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Bi,a);Kr.subVectors(e,r);const d=Bi.dot(Kr),g=Hi.dot(Kr);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Hi,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return hl.subVectors(r,s),o=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(hl,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(i).addScaledVector(Bi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=bo(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=na(a,r,e+1/3),this.g=na(a,r,e),this.b=na(a,r,e-1/3)}return nt.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=Ic[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return nt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Rt(Nt.r*255,0,255))*65536+Math.round(Rt(Nt.g*255,0,255))*256+Math.round(Rt(Nt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qt){nt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Xs);const i=bs(jn.h,Xs.h,t),s=bs(jn.s,Xs.s,t),r=bs(jn.l,Xs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new tt;tt.NAMES=Ic;let Gu=0;class Us extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Pi(),this.name="",this.blending=Ki,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ea,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ea&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ft extends Us{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new N,qs=new ge;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qo,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class Dc extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uc extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vu=0;const Qt=new vt,ia=new Dt,Gi=new N,jt=new Ds,vs=new Ds,Ct=new N;class Ot extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Uc:Dc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(jt.min,vs.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,vs.max),jt.expandByPoint(Ct)):(jt.expandByPoint(vs.min),jt.expandByPoint(vs.max))}jt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ct.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),Ct.add(Gi)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new N,l[L]=new N;const c=new N,h=new N,u=new N,f=new ge,d=new ge,g=new ge,v=new N,m=new N;function p(L,b,M){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(v),o[b].add(v),o[M].add(v),l[L].add(m),l[b].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,b=A.length;L<b;++L){const M=A[L],R=M.start,B=M.count;for(let G=R,q=R+B;G<q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new N,_=new N,I=new N,C=new N;function T(L){I.fromBufferAttribute(s,L),C.copy(I);const b=o[L];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),_.crossVectors(C,b);const R=_.dot(l[L])<0?-1:1;a.setXYZW(L,w.x,w.y,w.z,R)}for(let L=0,b=A.length;L<b;++L){const M=A[L],R=M.start,B=M.count;for(let G=R,q=R+B;G<q;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new un(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new vt,fi=new Nu,Ys=new wo,dl=new N,Zs=new N,Js=new N,js=new N,sa=new N,Ks=new N,fl=new N,Qs=new N;class ut extends Dt{constructor(e=new Ot,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(sa.fromBufferAttribute(u,e),a?Ks.addScaledVector(sa,h):Ks.addScaledVector(sa.sub(t),h))}t.add(Ks)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!(Ys.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Ys,dl)===null||fi.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),fi.copy(e.ray).applyMatrix4(ul),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=A,I=w;_<I;_+=3){const C=o.getX(_),T=o.getX(_+1),L=o.getX(_+2);s=er(this,p,e,i,c,h,u,C,T,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=er(this,a,e,i,c,h,u,A,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],A=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=A,I=w;_<I;_+=3){const C=_,T=_+1,L=_+2;s=er(this,p,e,i,c,h,u,C,T,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,w=m+1,_=m+2;s=er(this,a,e,i,c,h,u,A,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Wu(n,e,t,i,s,r,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ci,o),l===null)return null;Qs.copy(o),Qs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:n}}function er(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Zs),n.getVertexPosition(l,Js),n.getVertexPosition(c,js);const h=Wu(n,e,t,i,Zs,Js,js,fl);if(h){const u=new N;ln.getBarycoord(fl,Zs,Js,js,u),s&&(h.uv=ln.getInterpolatedAttribute(s,o,l,c,u,new ge)),r&&(h.uv1=ln.getInterpolatedAttribute(r,o,l,c,u,new ge)),a&&(h.normal=ln.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};ln.getNormal(Zs,Js,js,f.normal),h.face=f,h.barycoord=u}return h}class Vn extends Ot{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(v,m,p,A,w,_,I,C,T,L,b){const M=_/T,R=I/L,B=_/2,G=I/2,q=C/2,ie=T+1,$=L+1;let ae=0,Y=0;const ye=new N;for(let we=0;we<$;we++){const Re=we*R-G;for(let ce=0;ce<ie;ce++){const ve=ce*M-B;ye[v]=ve*A,ye[m]=Re*w,ye[p]=q,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=C>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(ce/T),u.push(1-we/L),ae+=1}}for(let we=0;we<L;we++)for(let Re=0;Re<T;Re++){const ce=f+Re+ie*we,ve=f+Re+ie*(we+1),H=f+(Re+1)+ie*(we+1),ee=f+(Re+1)+ie*we;l.push(ce,ve,ee),l.push(ve,H,ee),Y+=6}o.addGroup(d,Y,b),d+=Y,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=os(n[t]);for(const s in i)e[s]=i[s]}return e}function $u(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Nc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Xu={clone:os,merge:Vt};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends Us{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fc extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Un}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new N,pl=new ge,ml=new ge;class on extends Fc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Wi=1;class Zu extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Vi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new on(Vi,Wi,e,t);r.layers=this.layers,this.add(r);const a=new on(Vi,Wi,e,t);a.layers=this.layers,this.add(a);const o=new on(Vi,Wi,e,t);o.layers=this.layers,this.add(o);const l=new on(Vi,Wi,e,t);l.layers=this.layers,this.add(l);const c=new on(Vi,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kc extends kt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ju extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new kc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:ii});r.uniforms.tEquirect.value=t;const a=new ut(s,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=_n),new Zu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const ra=new N,ju=new N,Ku=new je;class vi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ra.subVectors(i,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ra),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ku.getNormalMatrix(e),s=this.coplanarPoint(ra).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new wo,tr=new N;class Ao{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],A=s[13],w=s[14],_=s[15];if(i[0].setComponents(l-r,f-c,m-d,_-p).normalize(),i[1].setComponents(l+r,f+c,m+d,_+p).normalize(),i[2].setComponents(l+a,f+h,m+g,_+A).normalize(),i[3].setComponents(l-a,f-h,m-g,_-A).normalize(),i[4].setComponents(l-o,f-u,m-v,_-w).normalize(),t===Un)i[5].setComponents(l+o,f+u,m+v,_+w).normalize();else if(t===br)i[5].setComponents(o,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(tr.x=s.normal.x>0?e.max.x:e.min.x,tr.y=s.normal.y>0?e.max.y:e.min.y,tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(tr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ri extends Ot{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const A=p*f-a;for(let w=0;w<c;w++){const _=w*u-r;g.push(_,-A,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const w=A+c*p,_=A+c*(p+1),I=A+1+c*(p+1),C=A+1+c*p;d.push(w,_,C),d.push(_,I,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.widthSegments,e.heightSegments)}}var ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ad=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:ed,alphahash_pars_fragment:td,alphamap_fragment:nd,alphamap_pars_fragment:id,alphatest_fragment:sd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:od,batching_pars_vertex:ld,batching_vertex:cd,begin_vertex:hd,beginnormal_vertex:ud,bsdfs:dd,iridescence_fragment:fd,bumpmap_pars_fragment:pd,clipping_planes_fragment:md,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:_d,color_fragment:xd,color_pars_fragment:yd,color_pars_vertex:Md,color_vertex:Sd,common:bd,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Ad,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:Cd,emissivemap_pars_fragment:Rd,colorspace_fragment:Pd,colorspace_pars_fragment:Ld,envmap_fragment:Id,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Ud,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Fd,fog_vertex:kd,fog_pars_vertex:Od,fog_fragment:zd,fog_pars_fragment:Bd,gradientmap_pars_fragment:Hd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Wd,lights_pars_begin:$d,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:Jd,lights_physical_fragment:jd,lights_physical_pars_fragment:Kd,lights_fragment_begin:Qd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:vf,normal_fragment_begin:_f,normal_fragment_maps:xf,normal_pars_fragment:yf,normal_pars_vertex:Mf,normal_vertex:Sf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:Cf,packing:Rf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:If,dithering_pars_fragment:Df,roughnessmap_fragment:Uf,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:kf,shadowmap_vertex:Of,shadowmask_pars_fragment:zf,skinbase_vertex:Bf,skinning_pars_vertex:Hf,skinning_vertex:Gf,skinnormal_vertex:Vf,specularmap_fragment:Wf,specularmap_pars_fragment:$f,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:jf,uv_vertex:Kf,worldpos_vertex:Qf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:sp,cube_frag:rp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:hp,equirect_frag:up,linedashed_vert:dp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:vp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:yp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:bp,meshphysical_vert:wp,meshphysical_frag:Ap,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:Cp,points_frag:Rp,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Ip,sprite_frag:Dp},Ee={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},vn={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};vn.physical={uniforms:Vt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const nr={r:0,b:0,g:0},mi=new yn,Up=new vt;function Np(n,e,t,i,s,r,a){const o=new tt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(A){let w=A.isScene===!0?A.background:null;return w&&w.isTexture&&(w=(A.backgroundBlurriness>0?t:e).get(w)),w}function v(A){let w=!1;const _=g(A);_===null?p(o,l):_&&_.isColor&&(p(_,1),w=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,w){const _=g(w);_&&(_.isCubeTexture||_.mapping===Rr)?(h===void 0&&(h=new ut(new Vn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:os(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),mi.copy(w.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(mi)),h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,(u!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new ri(2,2),new dn({name:"BackgroundMaterial",uniforms:os(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,w){A.getRGB(nr,Nc(n)),i.buffers.color.setClear(nr.r,nr.g,nr.b,w,a)}return{getClearColor:function(){return o},setClearColor:function(A,w=1){o.set(A),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(o,l)},render:v,addToRenderList:m}}function Fp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(M,R,B,G,q){let ie=!1;const $=u(G,B,R);r!==$&&(r=$,c(r.object)),ie=d(M,G,B,q),ie&&g(M,G,B,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,_(M,R,B,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,R,B){const G=B.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let ie=q[R.id];ie===void 0&&(ie={},q[R.id]=ie);let $=ie[G];return $===void 0&&($=f(l()),ie[G]=$),$}function f(M){const R=[],B=[],G=[];for(let q=0;q<t;q++)R[q]=0,B[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:G,object:M,attributes:{},index:null}}function d(M,R,B,G){const q=r.attributes,ie=R.attributes;let $=0;const ae=B.getAttributes();for(const Y in ae)if(ae[Y].location>=0){const we=q[Y];let Re=ie[Y];if(Re===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor)),we===void 0||we.attribute!==Re||Re&&we.data!==Re.data)return!0;$++}return r.attributesNum!==$||r.index!==G}function g(M,R,B,G){const q={},ie=R.attributes;let $=0;const ae=B.getAttributes();for(const Y in ae)if(ae[Y].location>=0){let we=ie[Y];we===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(we=M.instanceColor));const Re={};Re.attribute=we,we&&we.data&&(Re.data=we.data),q[Y]=Re,$++}r.attributes=q,r.attributesNum=$,r.index=G}function v(){const M=r.newAttributes;for(let R=0,B=M.length;R<B;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const B=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;B[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),q[M]!==R&&(n.vertexAttribDivisor(M,R),q[M]=R)}function A(){const M=r.newAttributes,R=r.enabledAttributes;for(let B=0,G=R.length;B<G;B++)R[B]!==M[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function w(M,R,B,G,q,ie,$){$===!0?n.vertexAttribIPointer(M,R,B,q,ie):n.vertexAttribPointer(M,R,B,G,q,ie)}function _(M,R,B,G){v();const q=G.attributes,ie=B.getAttributes(),$=R.defaultAttributeValues;for(const ae in ie){const Y=ie[ae];if(Y.location>=0){let ye=q[ae];if(ye===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const we=ye.normalized,Re=ye.itemSize,ce=e.get(ye);if(ce===void 0)continue;const ve=ce.buffer,H=ce.type,ee=ce.bytesPerElement,de=H===n.INT||H===n.UNSIGNED_INT||ye.gpuType===vo;if(ye.isInterleavedBufferAttribute){const j=ye.data,Ce=j.stride,ze=ye.offset;if(j.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Y.locationSize;Ge++)p(Y.location+Ge,j.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ge=0;Ge<Y.locationSize;Ge++)m(Y.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let Ge=0;Ge<Y.locationSize;Ge++)w(Y.location+Ge,Re/Y.locationSize,H,we,Ce*ee,(ze+Re/Y.locationSize*Ge)*ee,de)}else{if(ye.isInstancedBufferAttribute){for(let j=0;j<Y.locationSize;j++)p(Y.location+j,ye.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let j=0;j<Y.locationSize;j++)m(Y.location+j);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let j=0;j<Y.locationSize;j++)w(Y.location+j,Re/Y.locationSize,H,we,Re*ee,Re/Y.locationSize*j*ee,de)}}else if($!==void 0){const we=$[ae];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(Y.location,we);break;case 3:n.vertexAttrib3fv(Y.location,we);break;case 4:n.vertexAttrib4fv(Y.location,we);break;default:n.vertexAttrib1fv(Y.location,we)}}}}A()}function I(){L();for(const M in i){const R=i[M];for(const B in R){const G=R[B];for(const q in G)h(G[q].object),delete G[q];delete R[B]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const B in R){const G=R[B];for(const q in G)h(G[q].object),delete G[q];delete R[B]}delete i[M.id]}function T(M){for(const R in i){const B=i[R];if(B[M.id]===void 0)continue;const G=B[M.id];for(const q in G)h(G[q].object),delete G[q];delete B[M.id]}}function L(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function kp(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Op(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:I,maxSamples:C}}function zp(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new vi,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:i,w=A*4;let _=p.clippingState||null;l.value=_,_=h(g,f,w,d);for(let I=0;I!==w;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=d;w!==v;++w,_+=4)a.copy(u[w]).applyMatrix4(A,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Bp(n){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=is:o===Na&&(a.mapping=ss),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ua||o===Na)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ju(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Rs extends Fc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,gl=[.125,.215,.35,.446,.526,.582],Mi=20,aa=new Rs,vl=new tt;let oa=null,la=0,ca=0,ha=!1;const _i=(1+Math.sqrt(5))/2,$i=1/_i,_l=[new N(-_i,$i,0),new N(_i,$i,0),new N(-$i,0,_i),new N($i,0,_i),new N(0,_i,-$i),new N(0,_i,$i),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class xl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,la,ca),this._renderer.xr.enabled=ha,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ci,format:cn,colorSpace:ls,depthBuffer:!1},s=yl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(r)),this._blurMaterial=Gp(r,e,t)}return s}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,i,s){const o=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vl),h.toneMapping=si,h.autoClear=!1;const d=new Ft({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new ut(new Vn,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(vl),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const w=this._cubeSize;ir(s,A*w,p>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ir(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,aa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_l[(s-r-1)%_l.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let A=0;for(let T=0;T<Mi;++T){const L=T/v,b=Math.exp(-L*L/2);p.push(b),T===0?A+=b:T<m&&(A+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const _=this._sizeLods[s],I=3*_*(s>w-Ji?s-w+Ji:0),C=4*(this._cubeSize-_);ir(t,I,C,3*_,2*_),l.setRenderTarget(t),l.render(u,aa)}}function Hp(n){const e=[],t=[],i=[];let s=n;const r=n-Ji+1+gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ji?l=gl[a-n+Ji-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),w=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let C=0;C<d;C++){const T=C%3*2/3-1,L=C>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];A.set(b,v*g*C),w.set(f,m*g*C);const M=[C,C,C,C,C,C];_.set(M,p*g*C)}const I=new Ot;I.setAttribute("position",new un(A,v)),I.setAttribute("uv",new un(w,m)),I.setAttribute("faceIndex",new un(_,p)),e.push(I),s>Ji&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yl(n,e,t){const i=new Bn(n,e,t);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ir(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Gp(n,e,t){const i=new Float32Array(Mi),s=new N(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ml(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Sl(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ua||l===Na,h=l===is||l===ss;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new xl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new xl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $p(n,e,t,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let w=0,_=A.length;w<_;w+=3){const I=A[w+0],C=A[w+1],T=A[w+2];f.push(I,C,C,T,T,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let w=0,_=A.length/3-1;w<_;w+=3){const I=w+0,C=w+1,T=w+2;f.push(I,C,C,T,T,I)}}else return;const m=new(Cc(f)?Uc:Dc)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xp(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*v[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Yp(n,e,t){const i=new WeakMap,s=new Mt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let I=o.attributes.position.count*_,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const T=new Float32Array(I*C*4*u),L=new Pc(T,I,C,u);L.type=Dn,L.needsUpdate=!0;const b=_*4;for(let R=0;R<u;R++){const B=p[R],G=A[R],q=w[R],ie=I*C*4*R;for(let $=0;$<B.count;$++){const ae=$*b;g===!0&&(s.fromBufferAttribute(B,$),T[ie+ae+0]=s.x,T[ie+ae+1]=s.y,T[ie+ae+2]=s.z,T[ie+ae+3]=0),v===!0&&(s.fromBufferAttribute(G,$),T[ie+ae+4]=s.x,T[ie+ae+5]=s.y,T[ie+ae+6]=s.z,T[ie+ae+7]=0),m===!0&&(s.fromBufferAttribute(q,$),T[ie+ae+8]=s.x,T[ie+ae+9]=s.y,T[ie+ae+10]=s.z,T[ie+ae+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ge(I,C)},i.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Zp(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class zc extends kt{constructor(e,t,i,s,r,a,o,l,c,h=Qi){if(h!==Qi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Qi&&(i=Ti),i===void 0&&h===as&&(i=rs),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bc=new kt,bl=new zc(1,1),Hc=new Pc,Gc=new Du,Vc=new kc,wl=[],Al=[],El=new Float32Array(16),Tl=new Float32Array(9),Cl=new Float32Array(4);function hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=wl[s];if(r===void 0&&(r=new Float32Array(s),wl[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ir(n,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Cl.set(i),n.uniformMatrix2fv(this.addr,!1,Cl),Tt(t,i)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Tl.set(i),n.uniformMatrix3fv(this.addr,!1,Tl),Tt(t,i)}}function nm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),Tt(t,i)}}function im(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function um(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(bl.compareFunction=Tc,r=bl):r=Bc,t.setTexture2D(e||r,s)}function dm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gc,s)}function fm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vc,s)}function pm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hc,s)}function mm(n){switch(n){case 5126:return Jp;case 35664:return jp;case 35665:return Kp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(n,e){n.uniform1fv(this.addr,e)}function vm(n,e){const t=hs(e,this.size,2);n.uniform2fv(this.addr,t)}function _m(n,e){const t=hs(e,this.size,3);n.uniform3fv(this.addr,t)}function xm(n,e){const t=hs(e,this.size,4);n.uniform4fv(this.addr,t)}function ym(n,e){const t=hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mm(n,e){const t=hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Sm(n,e){const t=hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bm(n,e){n.uniform1iv(this.addr,e)}function wm(n,e){n.uniform2iv(this.addr,e)}function Am(n,e){n.uniform3iv(this.addr,e)}function Em(n,e){n.uniform4iv(this.addr,e)}function Tm(n,e){n.uniform1uiv(this.addr,e)}function Cm(n,e){n.uniform2uiv(this.addr,e)}function Rm(n,e){n.uniform3uiv(this.addr,e)}function Pm(n,e){n.uniform4uiv(this.addr,e)}function Lm(n,e,t){const i=this.cache,s=e.length,r=Ir(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Bc,r[a])}function Im(n,e,t){const i=this.cache,s=e.length,r=Ir(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gc,r[a])}function Dm(n,e,t){const i=this.cache,s=e.length,r=Ir(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Vc,r[a])}function Um(n,e,t){const i=this.cache,s=e.length,r=Ir(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),Tt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hc,r[a])}function Nm(n){switch(n){case 5126:return gm;case 35664:return vm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Cm;case 36295:return Rm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}class Fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class km{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function zm(n,e,t){const i=n.name,s=i.length;for(ua.lastIndex=0;;){const r=ua.exec(i),a=ua.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rl(t,c===void 0?new Fm(o,n,e):new km(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Om(o),Rl(t,u)),t=u}}}class vr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);zm(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Pl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bm=37297;let Hm=0;function Gm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ll=new je;function Vm(n){nt._getMatrix(Ll,nt.workingColorSpace,n);const e=`mat3( ${Ll.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Lr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Gm(n.getShaderSource(e),a)}else return s}function Wm(n,e){const t=Vm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $m(n,e){let t;switch(e){case Wh:t="Linear";break;case $h:t="Reinhard";break;case Xh:t="Cineon";break;case qh:t="ACESFilmic";break;case Zh:t="AgX";break;case Jh:t="Neutral";break;case Yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new N;function Xm(){nt.getLuminanceCoefficients(sr);const n=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Ym(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ms(n){return n!==""}function Dl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(n){return n.replace(Jm,Km)}const jm=new Map;function Km(n,e){let t=Ke[e];if(t===void 0){const i=jm.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return co(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(n){return n.replace(Qm,e0)}function e0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function n0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function s0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gh:e="ENVMAP_BLENDING_MIX";break;case Vh:e="ENVMAP_BLENDING_ADD";break}return e}function r0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function a0(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=t0(t),c=n0(t),h=i0(t),u=s0(t),f=r0(t),d=qm(t),g=Ym(r),v=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[Fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ke.tonemapping_pars_fragment:"",t.toneMapping!==si?$m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=co(a),a=Dl(a,t),a=Ul(a,t),o=co(o),o=Dl(o,t),o=Ul(o,t),a=Nl(a),o=Nl(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=A+m+a,_=A+p+o,I=Pl(s,s.VERTEX_SHADER,w),C=Pl(s,s.FRAGMENT_SHADER,_);s.attachShader(v,I),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(R){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(C).trim();let ie=!0,$=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,C);else{const ae=Il(s,I,"vertex"),Y=Il(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ae+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||q==="")&&($=!1);$&&(R.diagnostics={runnable:ie,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(I),s.deleteShader(C),L=new vr(s,v),b=Zm(s,v)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Bm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=C,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c0(e),t.set(e,i)),i}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function h0(n,e,t,i,s,r,a){const o=new Lc,l=new l0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,B,G){const q=B.fog,ie=G.geometry,$=b.isMeshStandardMaterial?B.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),Y=ae&&ae.mapping===Rr?ae.image.height:null,ye=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const we=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Re=we!==void 0?we.length:0;let ce=0;ie.morphAttributes.position!==void 0&&(ce=1),ie.morphAttributes.normal!==void 0&&(ce=2),ie.morphAttributes.color!==void 0&&(ce=3);let ve,H,ee,de;if(ye){const Me=vn[ye];ve=Me.vertexShader,H=Me.fragmentShader}else ve=b.vertexShader,H=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),de=l.getFragmentShaderID(b);const j=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),ze=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,Ye=!!b.map,oe=!!b.matcap,pe=!!ae,y=!!b.aoMap,z=!!b.lightMap,U=!!b.bumpMap,K=!!b.normalMap,J=!!b.displacementMap,W=!!b.emissiveMap,fe=!!b.metalnessMap,E=!!b.roughnessMap,x=b.anisotropy>0,V=b.clearcoat>0,se=b.dispersion>0,he=b.iridescence>0,re=b.sheen>0,Ue=b.transmission>0,Ae=x&&!!b.anisotropyMap,Le=V&&!!b.clearcoatMap,Qe=V&&!!b.clearcoatNormalMap,me=V&&!!b.clearcoatRoughnessMap,De=he&&!!b.iridescenceMap,Ne=he&&!!b.iridescenceThicknessMap,We=re&&!!b.sheenColorMap,Ie=re&&!!b.sheenRoughnessMap,Ze=!!b.specularMap,Xe=!!b.specularColorMap,lt=!!b.specularIntensityMap,F=Ue&&!!b.transmissionMap,Te=Ue&&!!b.thicknessMap,Q=!!b.gradientMap,le=!!b.alphaMap,P=b.alphaTest>0,D=!!b.alphaHash,te=!!b.extensions;let _e=si;b.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Se={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:ve,fragmentShader:H,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:ze,instancingColor:ze&&G.instanceColor!==null,instancingMorph:ze&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ls,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:oe,envMap:pe,envMapMode:pe&&ae.mapping,envMapCubeUVHeight:Y,aoMap:y,lightMap:z,bumpMap:U,normalMap:K,displacementMap:f&&J,emissiveMap:W,normalMapObjectSpace:K&&b.normalMapType===eu,normalMapTangentSpace:K&&b.normalMapType===Ec,metalnessMap:fe,roughnessMap:E,anisotropy:x,anisotropyMap:Ae,clearcoat:V,clearcoatMap:Le,clearcoatNormalMap:Qe,clearcoatRoughnessMap:me,dispersion:se,iridescence:he,iridescenceMap:De,iridescenceThicknessMap:Ne,sheen:re,sheenColorMap:We,sheenRoughnessMap:Ie,specularMap:Ze,specularColorMap:Xe,specularIntensityMap:lt,transmission:Ue,transmissionMap:F,thicknessMap:Te,gradientMap:Q,opaque:b.transparent===!1&&b.blending===Ki&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:P,alphaHash:D,combine:b.combine,mapUv:Ye&&v(b.map.channel),aoMapUv:y&&v(b.aoMap.channel),lightMapUv:z&&v(b.lightMap.channel),bumpMapUv:U&&v(b.bumpMap.channel),normalMapUv:K&&v(b.normalMap.channel),displacementMapUv:J&&v(b.displacementMap.channel),emissiveMapUv:W&&v(b.emissiveMap.channel),metalnessMapUv:fe&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:Ae&&v(b.anisotropyMap.channel),clearcoatMapUv:Le&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(b.sheenRoughnessMap.channel),specularMapUv:Ze&&v(b.specularMap.channel),specularColorMapUv:Xe&&v(b.specularColorMap.channel),specularIntensityMapUv:lt&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:Te&&v(b.thicknessMap.channel),alphaMapUv:le&&v(b.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(K||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ie.attributes.uv&&(Ye||le),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ce,skinning:G.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:W&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yt,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:te&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&b.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(A(M,b),w(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function A(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const M=g[b.type];let R;if(M){const B=vn[M];R=Xu.clone(B.uniforms)}else R=b.uniforms;return R}function I(b,M){let R;for(let B=0,G=h.length;B<G;B++){const q=h[B];if(q.cacheKey===M){R=q,++R.usedTimes;break}}return R===void 0&&(R=new a0(n,M,b,r),h.push(R)),R}function C(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:C,releaseShaderCache:T,programs:h,dispose:L}}function u0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function d0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ol(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,d,g,v,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||d0),i.length>1&&i.sort(f||kl),s.length>1&&s.sort(f||kl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function f0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ol,n.set(i,[a])):s>=r.length?(a=new Ol,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function p0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new tt};break;case"SpotLight":t={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function m0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let g0=0;function v0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _0(n){const e=new p0,t=m0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new vt,a=new vt;function o(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,w=0,_=0,I=0,C=0,T=0;c.sort(v0);for(let b=0,M=c.length;b<M;b++){const R=c[b],B=R.color,G=R.intensity,q=R.distance,ie=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],G);T++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ae=R.shadow,Y=t.get(R);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=ie,i.directionalShadowMatrix[d]=R.shadow.matrix,A++}i.directional[d]=$,d++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(B).multiplyScalar(G),$.distance=q,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[v]=$;const ae=R.shadow;if(R.map&&(i.spotLightMap[I]=R.map,I++,ae.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[v]=ae.matrix,R.castShadow){const Y=t.get(R);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=ie,_++}v++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(B).multiplyScalar(G),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const ae=R.shadow,Y=t.get(R);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=$,g++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(G),$.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==A||L.numPointShadows!==w||L.numSpotShadows!==_||L.numSpotMaps!==I||L.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=A,L.numPointShadows=w,L.numSpotShadows=_,L.numSpotMaps=I,L.numLightProbes=T,i.version=g0++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const w=c[p];if(w.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function zl(n){const e=new _0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function x0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zl(n),e.set(s,[o])):r>=a.length?(o=new zl(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class y0 extends Us{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M0 extends Us{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w0(n,e,t){let i=new Ao;const s=new ge,r=new ge,a=new Mt,o=new y0({depthPacking:Qh}),l=new M0,c={},h=t.maxTextureSize,u={[ci]:Yt,[Yt]:ci,[yt]:yt},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:S0,fragmentShader:b0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ot;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(C,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==In&&this.type===In,q=p===In&&this.type!==In;for(let ie=0,$=C.length;ie<$;ie++){const ae=C[ie],Y=ae.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ye=Y.getFrameExtents();if(s.multiply(ye),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ye.x),s.x=r.x*ye.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ye.y),s.y=r.y*ye.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||q===!0){const Re=this.type!==In?{minFilter:It,magFilter:It}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Bn(s.x,s.y,Re),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const we=Y.getViewportCount();for(let Re=0;Re<we;Re++){const ce=Y.getViewport(Re);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),B.viewport(a),Y.updateMatrices(ae,Re),i=Y.getFrustum(),_(T,L,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&A(Y,L),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,R)};function A(C,T){const L=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,L,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,L,d,v,null)}function w(C,T,L,b){let M=null;const R=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,G=T.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let ie=q[G];ie===void 0&&(ie=M.clone(),q[G]=ie,T.addEventListener("dispose",I)),M=ie}if(M.visible=T.visible,M.wireframe=T.wireframe,b===In?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=L}return M}function _(C,T,L,b,M){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===In)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const G=e.update(C),q=C.material;if(Array.isArray(q)){const ie=G.groups;for(let $=0,ae=ie.length;$<ae;$++){const Y=ie[$],ye=q[Y.materialIndex];if(ye&&ye.visible){const we=w(C,ye,b,M);C.onBeforeShadow(n,C,T,L,G,we,Y),n.renderBufferDirect(L,null,G,we,C,Y),C.onAfterShadow(n,C,T,L,G,we,Y)}}}else if(q.visible){const ie=w(C,q,b,M);C.onBeforeShadow(n,C,T,L,G,ie,null),n.renderBufferDirect(L,null,G,ie,C,null),C.onAfterShadow(n,C,T,L,G,ie,null)}}const B=C.children;for(let G=0,q=B.length;G<q;G++)_(B[G],T,L,b,M)}function I(C){C.target.removeEventListener("dispose",I);for(const L in c){const b=c[L],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const A0={[Ta]:Ca,[Ra]:Ia,[Pa]:Da,[ns]:La,[Ca]:Ta,[Ia]:Ra,[Da]:Pa,[La]:ns};function E0(n,e){function t(){let F=!1;const Te=new Mt;let Q=null;const le=new Mt(0,0,0,0);return{setMask:function(P){Q!==P&&!F&&(n.colorMask(P,P,P,P),Q=P)},setLocked:function(P){F=P},setClear:function(P,D,te,_e,Se){Se===!0&&(P*=_e,D*=_e,te*=_e),Te.set(P,D,te,_e),le.equals(Te)===!1&&(n.clearColor(P,D,te,_e),le.copy(Te))},reset:function(){F=!1,Q=null,le.set(-1,0,0,0)}}}function i(){let F=!1,Te=!1,Q=null,le=null,P=null;return{setReversed:function(D){if(Te!==D){const te=e.get("EXT_clip_control");Te?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const _e=P;P=null,this.setClear(_e)}Te=D},getReversed:function(){return Te},setTest:function(D){D?j(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(D){Q!==D&&!F&&(n.depthMask(D),Q=D)},setFunc:function(D){if(Te&&(D=A0[D]),le!==D){switch(D){case Ta:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Ra:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case Pa:n.depthFunc(n.EQUAL);break;case La:n.depthFunc(n.GEQUAL);break;case Ia:n.depthFunc(n.GREATER);break;case Da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=D}},setLocked:function(D){F=D},setClear:function(D){P!==D&&(Te&&(D=1-D),n.clearDepth(D),P=D)},reset:function(){F=!1,Q=null,le=null,P=null,Te=!1}}}function s(){let F=!1,Te=null,Q=null,le=null,P=null,D=null,te=null,_e=null,Se=null;return{setTest:function(Me){F||(Me?j(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Me){Te!==Me&&!F&&(n.stencilMask(Me),Te=Me)},setFunc:function(Me,ue,be){(Q!==Me||le!==ue||P!==be)&&(n.stencilFunc(Me,ue,be),Q=Me,le=ue,P=be)},setOp:function(Me,ue,be){(D!==Me||te!==ue||_e!==be)&&(n.stencilOp(Me,ue,be),D=Me,te=ue,_e=be)},setLocked:function(Me){F=Me},setClear:function(Me){Se!==Me&&(n.clearStencil(Me),Se=Me)},reset:function(){F=!1,Te=null,Q=null,le=null,P=null,D=null,te=null,_e=null,Se=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,w=null,_=null,I=null,C=null,T=new tt(0,0,0),L=0,b=!1,M=null,R=null,B=null,G=null,q=null;const ie=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ae=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=ae>=2);let ye=null,we={};const Re=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),ve=new Mt().fromArray(Re),H=new Mt().fromArray(ce);function ee(F,Te,Q,le){const P=new Uint8Array(4),D=n.createTexture();n.bindTexture(F,D),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<Q;te++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,P):n.texImage2D(Te+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,P);return D}const de={};de[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(ns),U(!1),K(Vo),j(n.CULL_FACE),y(ii);function j(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Ce(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ze(F,Te){return u[F]!==Te?(n.bindFramebuffer(F,Te),u[F]=Te,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Te),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ge(F,Te){let Q=d,le=!1;if(F){Q=f.get(Te),Q===void 0&&(Q=[],f.set(Te,Q));const P=F.textures;if(Q.length!==P.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let D=0,te=P.length;D<te;D++)Q[D]=n.COLOR_ATTACHMENT0+D;Q.length=P.length,le=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,le=!0);le&&n.drawBuffers(Q)}function Ye(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const oe={[yi]:n.FUNC_ADD,[Ah]:n.FUNC_SUBTRACT,[Eh]:n.FUNC_REVERSE_SUBTRACT};oe[Th]=n.MIN,oe[Ch]=n.MAX;const pe={[Rh]:n.ZERO,[Ph]:n.ONE,[Lh]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[kh]:n.SRC_ALPHA_SATURATE,[Nh]:n.DST_COLOR,[Dh]:n.DST_ALPHA,[Ih]:n.ONE_MINUS_SRC_COLOR,[Ea]:n.ONE_MINUS_SRC_ALPHA,[Fh]:n.ONE_MINUS_DST_COLOR,[Uh]:n.ONE_MINUS_DST_ALPHA,[Oh]:n.CONSTANT_COLOR,[zh]:n.ONE_MINUS_CONSTANT_COLOR,[Bh]:n.CONSTANT_ALPHA,[Hh]:n.ONE_MINUS_CONSTANT_ALPHA};function y(F,Te,Q,le,P,D,te,_e,Se,Me){if(F===ii){v===!0&&(Ce(n.BLEND),v=!1);return}if(v===!1&&(j(n.BLEND),v=!0),F!==wh){if(F!==m||Me!==b){if((p!==yi||_!==yi)&&(n.blendEquation(n.FUNC_ADD),p=yi,_=yi),Me)switch(F){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wa:n.blendFunc(n.ONE,n.ONE);break;case Wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $o:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $o:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}A=null,w=null,I=null,C=null,T.set(0,0,0),L=0,m=F,b=Me}return}P=P||Te,D=D||Q,te=te||le,(Te!==p||P!==_)&&(n.blendEquationSeparate(oe[Te],oe[P]),p=Te,_=P),(Q!==A||le!==w||D!==I||te!==C)&&(n.blendFuncSeparate(pe[Q],pe[le],pe[D],pe[te]),A=Q,w=le,I=D,C=te),(_e.equals(T)===!1||Se!==L)&&(n.blendColor(_e.r,_e.g,_e.b,Se),T.copy(_e),L=Se),m=F,b=!1}function z(F,Te){F.side===yt?Ce(n.CULL_FACE):j(n.CULL_FACE);let Q=F.side===Yt;Te&&(Q=!Q),U(Q),F.blending===Ki&&F.transparent===!1?y(ii):y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const le=F.stencilWrite;o.setTest(le),le&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),W(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function K(F){F!==Mh?(j(n.CULL_FACE),F!==R&&(F===Vo?n.cullFace(n.BACK):F===Sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),R=F}function J(F){F!==B&&($&&n.lineWidth(F),B=F)}function W(F,Te,Q){F?(j(n.POLYGON_OFFSET_FILL),(G!==Te||q!==Q)&&(n.polygonOffset(Te,Q),G=Te,q=Q)):Ce(n.POLYGON_OFFSET_FILL)}function fe(F){F?j(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function E(F){F===void 0&&(F=n.TEXTURE0+ie-1),ye!==F&&(n.activeTexture(F),ye=F)}function x(F,Te,Q){Q===void 0&&(ye===null?Q=n.TEXTURE0+ie-1:Q=ye);let le=we[Q];le===void 0&&(le={type:void 0,texture:void 0},we[Q]=le),(le.type!==F||le.texture!==Te)&&(ye!==Q&&(n.activeTexture(Q),ye=Q),n.bindTexture(F,Te||de[F]),le.type=F,le.texture=Te)}function V(){const F=we[ye];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){ve.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ve.copy(F))}function Ie(F){H.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),H.copy(F))}function Ze(F,Te){let Q=c.get(Te);Q===void 0&&(Q=new WeakMap,c.set(Te,Q));let le=Q.get(F);le===void 0&&(le=n.getUniformBlockIndex(Te,F.name),Q.set(F,le))}function Xe(F,Te){const le=c.get(Te).get(F);l.get(Te)!==le&&(n.uniformBlockBinding(Te,le,F.__bindingPointIndex),l.set(Te,le))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ye=null,we={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,w=null,_=null,I=null,C=null,T=new tt(0,0,0),L=0,b=!1,M=null,R=null,B=null,G=null,q=null,ve.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:Ce,bindFramebuffer:ze,drawBuffers:Ge,useProgram:Ye,setBlending:y,setMaterial:z,setFlipSided:U,setCullFace:K,setLineWidth:J,setPolygonOffset:W,setScissorTest:fe,activeTexture:E,bindTexture:x,unbindTexture:V,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:De,texImage3D:Ne,updateUBOMapping:Ze,uniformBlockBinding:Xe,texStorage2D:Qe,texStorage3D:me,texSubImage2D:re,texSubImage3D:Ue,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Le,scissor:We,viewport:Ie,reset:lt}}function Bl(n,e,t,i){const s=T0(i);switch(t){case yc:return n*e;case Sc:return n*e;case bc:return n*e*2;case Pr:return n*e/s.components*s.byteLength;case yo:return n*e/s.components*s.byteLength;case wc:return n*e*2/s.components*s.byteLength;case Mo:return n*e*2/s.components*s.byteLength;case Mc:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case So:return n*e*4/s.components*s.byteLength;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ba:return Math.max(n,16)*Math.max(e,8)/4;case ka:case za:return Math.max(n,8)*Math.max(e,8)/2;case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gr:case so:case ro:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ac:case ao:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oo:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(n){switch(n){case zn:case vc:return{byteLength:1,components:1};case Ts:case _c:case Ci:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case Ti:case vo:case Dn:return{byteLength:4,components:1};case xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function C0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):wr("canvas")}function v(E,x,V){let se=1;const he=fe(E);if((he.width>V||he.height>V)&&(se=V/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const re=Math.floor(se*he.width),Ue=Math.floor(se*he.height);u===void 0&&(u=g(re,Ue));const Ae=x?g(re,Ue):u;return Ae.width=re,Ae.height=Ue,Ae.getContext("2d").drawImage(E,0,0,re,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+re+"x"+Ue+")."),Ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,x,V,se,he=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=x;if(x===n.RED&&(V===n.FLOAT&&(re=n.R32F),V===n.HALF_FLOAT&&(re=n.R16F),V===n.UNSIGNED_BYTE&&(re=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.R8UI),V===n.UNSIGNED_SHORT&&(re=n.R16UI),V===n.UNSIGNED_INT&&(re=n.R32UI),V===n.BYTE&&(re=n.R8I),V===n.SHORT&&(re=n.R16I),V===n.INT&&(re=n.R32I)),x===n.RG&&(V===n.FLOAT&&(re=n.RG32F),V===n.HALF_FLOAT&&(re=n.RG16F),V===n.UNSIGNED_BYTE&&(re=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.RG8UI),V===n.UNSIGNED_SHORT&&(re=n.RG16UI),V===n.UNSIGNED_INT&&(re=n.RG32UI),V===n.BYTE&&(re=n.RG8I),V===n.SHORT&&(re=n.RG16I),V===n.INT&&(re=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.RGB8UI),V===n.UNSIGNED_SHORT&&(re=n.RGB16UI),V===n.UNSIGNED_INT&&(re=n.RGB32UI),V===n.BYTE&&(re=n.RGB8I),V===n.SHORT&&(re=n.RGB16I),V===n.INT&&(re=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(re=n.RGBA16UI),V===n.UNSIGNED_INT&&(re=n.RGBA32UI),V===n.BYTE&&(re=n.RGBA8I),V===n.SHORT&&(re=n.RGBA16I),V===n.INT&&(re=n.RGBA32I)),x===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),x===n.RGBA){const Ue=he?Lr:nt.getTransfer(se);V===n.FLOAT&&(re=n.RGBA32F),V===n.HALF_FLOAT&&(re=n.RGBA16F),V===n.UNSIGNED_BYTE&&(re=Ue===ct?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(E,x){let V;return E?x===null||x===Ti||x===rs?V=n.DEPTH24_STENCIL8:x===Dn?V=n.DEPTH32F_STENCIL8:x===Ts&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ti||x===rs?V=n.DEPTH_COMPONENT24:x===Dn?V=n.DEPTH_COMPONENT32F:x===Ts&&(V=n.DEPTH_COMPONENT16),V}function I(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&h.delete(x)}function T(E){const x=E.target;x.removeEventListener("dispose",T),M(x)}function L(E){const x=i.get(E);if(x.__webglInit===void 0)return;const V=E.source,se=f.get(V);if(se){const he=se[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&b(E),Object.keys(se).length===0&&f.delete(V)}i.remove(E)}function b(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const V=E.source,se=f.get(V);delete se[x.__cacheKey],a.memory.textures--}function M(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(x.__webglFramebuffer[se]))for(let he=0;he<x.__webglFramebuffer[se].length;he++)n.deleteFramebuffer(x.__webglFramebuffer[se][he]);else n.deleteFramebuffer(x.__webglFramebuffer[se]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[se])}else{if(Array.isArray(x.__webglFramebuffer))for(let se=0;se<x.__webglFramebuffer.length;se++)n.deleteFramebuffer(x.__webglFramebuffer[se]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let se=0;se<x.__webglColorRenderbuffer.length;se++)x.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[se]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=E.textures;for(let se=0,he=V.length;se<he;se++){const re=i.get(V[se]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(V[se])}i.remove(E)}let R=0;function B(){R=0}function G(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function q(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ie(E,x){const V=i.get(E);if(E.isVideoTexture&&J(E),E.isRenderTargetTexture===!1&&E.version>0&&V.__version!==E.version){const se=E.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(V,E,x);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function $(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){H(V,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function ae(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){H(V,E,x);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function Y(E,x){const V=i.get(E);if(E.version>0&&V.__version!==E.version){ee(V,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const ye={[Es]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},we={[It]:n.NEAREST,[jh]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[zr]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Re={[tu]:n.NEVER,[ou]:n.ALWAYS,[nu]:n.LESS,[Tc]:n.LEQUAL,[iu]:n.EQUAL,[au]:n.GEQUAL,[su]:n.GREATER,[ru]:n.NOTEQUAL};function ce(E,x){if(x.type===Dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===zr||x.magFilter===Os||x.magFilter===wi||x.minFilter===_n||x.minFilter===zr||x.minFilter===Os||x.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ye[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ye[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ye[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,we[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,we[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===It||x.minFilter!==Os&&x.minFilter!==wi||x.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ve(E,x){let V=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const se=x.source;let he=f.get(se);he===void 0&&(he={},f.set(se,he));const re=q(x);if(re!==E.__cacheKey){he[re]===void 0&&(he[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),he[re].usedTimes++;const Ue=he[E.__cacheKey];Ue!==void 0&&(he[E.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(x)),E.__cacheKey=re,E.__webglTexture=he[re].texture}return V}function H(E,x,V){let se=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=n.TEXTURE_3D);const he=ve(E,x),re=x.source;t.bindTexture(se,E.__webglTexture,n.TEXTURE0+V);const Ue=i.get(re);if(re.version!==Ue.__version||he===!0){t.activeTexture(n.TEXTURE0+V);const Ae=nt.getPrimaries(nt.workingColorSpace),Le=x.colorSpace===ni?null:nt.getPrimaries(x.colorSpace),Qe=x.colorSpace===ni||Ae===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let me=v(x.image,!1,s.maxTextureSize);me=W(x,me);const De=r.convert(x.format,x.colorSpace),Ne=r.convert(x.type);let We=w(x.internalFormat,De,Ne,x.colorSpace,x.isVideoTexture);ce(se,x);let Ie;const Ze=x.mipmaps,Xe=x.isVideoTexture!==!0,lt=Ue.__version===void 0||he===!0,F=re.dataReady,Te=I(x,me);if(x.isDepthTexture)We=_(x.format===as,x.type),lt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,We,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,De,Ne,null));else if(x.isDataTexture)if(Ze.length>0){Xe&&lt&&t.texStorage2D(n.TEXTURE_2D,Te,We,Ze[0].width,Ze[0].height);for(let Q=0,le=Ze.length;Q<le;Q++)Ie=Ze[Q],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,De,Ne,Ie.data):t.texImage2D(n.TEXTURE_2D,Q,We,Ie.width,Ie.height,0,De,Ne,Ie.data);x.generateMipmaps=!1}else Xe?(lt&&t.texStorage2D(n.TEXTURE_2D,Te,We,me.width,me.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,De,Ne,me.data)):t.texImage2D(n.TEXTURE_2D,0,We,me.width,me.height,0,De,Ne,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,We,Ze[0].width,Ze[0].height,me.depth);for(let Q=0,le=Ze.length;Q<le;Q++)if(Ie=Ze[Q],x.format!==cn)if(De!==null)if(Xe){if(F)if(x.layerUpdates.size>0){const P=Bl(Ie.width,Ie.height,x.format,x.type);for(const D of x.layerUpdates){const te=Ie.data.subarray(D*P/Ie.data.BYTES_PER_ELEMENT,(D+1)*P/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,D,Ie.width,Ie.height,1,De,te)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,me.depth,De,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,We,Ie.width,Ie.height,me.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Ie.width,Ie.height,me.depth,De,Ne,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,We,Ie.width,Ie.height,me.depth,0,De,Ne,Ie.data)}else{Xe&&lt&&t.texStorage2D(n.TEXTURE_2D,Te,We,Ze[0].width,Ze[0].height);for(let Q=0,le=Ze.length;Q<le;Q++)Ie=Ze[Q],x.format!==cn?De!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,De,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ie.width,Ie.height,De,Ne,Ie.data):t.texImage2D(n.TEXTURE_2D,Q,We,Ie.width,Ie.height,0,De,Ne,Ie.data)}else if(x.isDataArrayTexture)if(Xe){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,We,me.width,me.height,me.depth),F)if(x.layerUpdates.size>0){const Q=Bl(me.width,me.height,x.format,x.type);for(const le of x.layerUpdates){const P=me.data.subarray(le*Q/me.data.BYTES_PER_ELEMENT,(le+1)*Q/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,De,Ne,P)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,De,Ne,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,me.width,me.height,me.depth,0,De,Ne,me.data);else if(x.isData3DTexture)Xe?(lt&&t.texStorage3D(n.TEXTURE_3D,Te,We,me.width,me.height,me.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,De,Ne,me.data)):t.texImage3D(n.TEXTURE_3D,0,We,me.width,me.height,me.depth,0,De,Ne,me.data);else if(x.isFramebufferTexture){if(lt)if(Xe)t.texStorage2D(n.TEXTURE_2D,Te,We,me.width,me.height);else{let Q=me.width,le=me.height;for(let P=0;P<Te;P++)t.texImage2D(n.TEXTURE_2D,P,We,Q,le,0,De,Ne,null),Q>>=1,le>>=1}}else if(Ze.length>0){if(Xe&&lt){const Q=fe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Te,We,Q.width,Q.height)}for(let Q=0,le=Ze.length;Q<le;Q++)Ie=Ze[Q],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,De,Ne,Ie):t.texImage2D(n.TEXTURE_2D,Q,We,De,Ne,Ie);x.generateMipmaps=!1}else if(Xe){if(lt){const Q=fe(me);t.texStorage2D(n.TEXTURE_2D,Te,We,Q.width,Q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ne,me)}else t.texImage2D(n.TEXTURE_2D,0,We,De,Ne,me);m(x)&&p(se),Ue.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ee(E,x,V){if(x.image.length!==6)return;const se=ve(E,x),he=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+V);const re=i.get(he);if(he.version!==re.__version||se===!0){t.activeTexture(n.TEXTURE0+V);const Ue=nt.getPrimaries(nt.workingColorSpace),Ae=x.colorSpace===ni?null:nt.getPrimaries(x.colorSpace),Le=x.colorSpace===ni||Ue===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Qe=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,De=[];for(let le=0;le<6;le++)!Qe&&!me?De[le]=v(x.image[le],!0,s.maxCubemapSize):De[le]=me?x.image[le].image:x.image[le],De[le]=W(x,De[le]);const Ne=De[0],We=r.convert(x.format,x.colorSpace),Ie=r.convert(x.type),Ze=w(x.internalFormat,We,Ie,x.colorSpace),Xe=x.isVideoTexture!==!0,lt=re.__version===void 0||se===!0,F=he.dataReady;let Te=I(x,Ne);ce(n.TEXTURE_CUBE_MAP,x);let Q;if(Qe){Xe&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,Ne.width,Ne.height);for(let le=0;le<6;le++){Q=De[le].mipmaps;for(let P=0;P<Q.length;P++){const D=Q[P];x.format!==cn?We!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,D.width,D.height,We,D.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,Ze,D.width,D.height,0,D.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,0,0,D.width,D.height,We,Ie,D.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P,Ze,D.width,D.height,0,We,Ie,D.data)}}}else{if(Q=x.mipmaps,Xe&&lt){Q.length>0&&Te++;const le=fe(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(me){Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,De[le].width,De[le].height,We,Ie,De[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,De[le].width,De[le].height,0,We,Ie,De[le].data);for(let P=0;P<Q.length;P++){const te=Q[P].image[le].image;Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,te.width,te.height,We,Ie,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,Ze,te.width,te.height,0,We,Ie,te.data)}}else{Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,We,Ie,De[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,We,Ie,De[le]);for(let P=0;P<Q.length;P++){const D=Q[P];Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,0,0,We,Ie,D.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,P+1,Ze,We,Ie,D.image[le])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),re.__version=he.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function de(E,x,V,se,he,re){const Ue=r.convert(V.format,V.colorSpace),Ae=r.convert(V.type),Le=w(V.internalFormat,Ue,Ae,V.colorSpace),Qe=i.get(x),me=i.get(V);if(me.__renderTarget=x,!Qe.__hasExternalTextures){const De=Math.max(1,x.width>>re),Ne=Math.max(1,x.height>>re);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,re,Le,De,Ne,x.depth,0,Ue,Ae,null):t.texImage2D(he,re,Le,De,Ne,0,Ue,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),K(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,he,me.__webglTexture,0,U(x)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,he,me.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function j(E,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const se=x.depthTexture,he=se&&se.isDepthTexture?se.type:null,re=_(x.stencilBuffer,he),Ue=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=U(x);K(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,re,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,E)}else{const se=x.textures;for(let he=0;he<se.length;he++){const re=se[he],Ue=r.convert(re.format,re.colorSpace),Ae=r.convert(re.type),Le=w(re.internalFormat,Ue,Ae,re.colorSpace),Qe=U(x);V&&K(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Le,x.width,x.height):K(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,Le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(x.depthTexture);se.__renderTarget=x,(!se.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ie(x.depthTexture,0);const he=se.__webglTexture,re=U(x);if(x.depthTexture.format===Qi)K(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(x.depthTexture.format===as)K(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ze(E){const x=i.get(E),V=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const se=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){const he=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),x.__depthDisposeCallback=he}x.__boundDepthTexture=se}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ce(x.__webglFramebuffer,E)}else if(V){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=n.createRenderbuffer(),j(x.__webglDepthbuffer[se],E,!1);else{const he=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,re)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),j(x.__webglDepthbuffer,E,!1);else{const se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,he),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,he)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(E,x,V){const se=i.get(E);x!==void 0&&de(se.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ze(E)}function Ye(E){const x=E.texture,V=i.get(E),se=i.get(x);E.addEventListener("dispose",T);const he=E.textures,re=E.isWebGLCubeRenderTarget===!0,Ue=he.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=x.version,a.memory.textures++),re){V.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[Ae]=[];for(let Le=0;Le<x.mipmaps.length;Le++)V.__webglFramebuffer[Ae][Le]=n.createFramebuffer()}else V.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)V.__webglFramebuffer[Ae]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let Ae=0,Le=he.length;Ae<Le;Ae++){const Qe=i.get(he[Ae]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&K(E)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Ae=0;Ae<he.length;Ae++){const Le=he[Ae];V.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Ae]);const Qe=r.convert(Le.format,Le.colorSpace),me=r.convert(Le.type),De=w(Le.internalFormat,Qe,me,Le.colorSpace,E.isXRRenderTarget===!0),Ne=U(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,De,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,V.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),j(V.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x);for(let Ae=0;Ae<6;Ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)de(V.__webglFramebuffer[Ae][Le],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Le);else de(V.__webglFramebuffer[Ae],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Ae=0,Le=he.length;Ae<Le;Ae++){const Qe=he[Ae],me=i.get(Qe);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),ce(n.TEXTURE_2D,Qe),de(V.__webglFramebuffer,E,Qe,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),m(Qe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,se.__webglTexture),ce(Ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)de(V.__webglFramebuffer[Le],E,x,n.COLOR_ATTACHMENT0,Ae,Le);else de(V.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Ae,0);m(x)&&p(Ae),t.unbindTexture()}E.depthBuffer&&ze(E)}function oe(E){const x=E.textures;for(let V=0,se=x.length;V<se;V++){const he=x[V];if(m(he)){const re=A(E),Ue=i.get(he).__webglTexture;t.bindTexture(re,Ue),p(re),t.unbindTexture()}}}const pe=[],y=[];function z(E){if(E.samples>0){if(K(E)===!1){const x=E.textures,V=E.width,se=E.height;let he=n.COLOR_BUFFER_BIT;const re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(E),Ae=x.length>1;if(Ae)for(let Le=0;Le<x.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Le=0;Le<x.length;Le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Qe=i.get(x[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,V,se,0,0,V,se,he,n.NEAREST),l===!0&&(pe.length=0,y.length=0,pe.push(n.COLOR_ATTACHMENT0+Le),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pe.push(re),y.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Le=0;Le<x.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Le]);const Qe=i.get(x[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function U(E){return Math.min(s.maxSamples,E.samples)}function K(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function J(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function W(E,x){const V=E.colorSpace,se=E.format,he=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||V!==ls&&V!==ni&&(nt.getTransfer(V)===ct?(se!==cn||he!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function fe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=Ge,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=K}function R0(n,e){function t(i,s=ni){let r;const a=nt.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===_o)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vc)return n.BYTE;if(i===_c)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===vo)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Ci)return n.HALF_FLOAT;if(i===yc)return n.ALPHA;if(i===Mc)return n.RGB;if(i===cn)return n.RGBA;if(i===Sc)return n.LUMINANCE;if(i===bc)return n.LUMINANCE_ALPHA;if(i===Qi)return n.DEPTH_COMPONENT;if(i===as)return n.DEPTH_STENCIL;if(i===Pr)return n.RED;if(i===yo)return n.RED_INTEGER;if(i===wc)return n.RG;if(i===Mo)return n.RG_INTEGER;if(i===So)return n.RGBA_INTEGER;if(i===dr||i===fr||i===pr||i===mr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===Oa||i===za||i===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ha||i===Ga||i===Va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ha||i===Ga)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wa||i===$a||i===Xa||i===qa||i===Ya||i===Za||i===Ja||i===ja||i===Ka||i===Qa||i===eo||i===to||i===no||i===io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$a)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===to)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===no)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gr||i===so||i===ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gr)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ac||i===ao||i===oo||i===lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class P0 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new dn({vertexShader:I0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N0 extends cs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new U0,m=t.getContextAttributes();let p=null,A=null;const w=[],_=[],I=new ge;let C=null;const T=new on;T.viewport=new Mt;const L=new on;L.viewport=new Mt;const b=[T,L],M=new P0;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=w[H];return ee===void 0&&(ee=new da,w[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=w[H];return ee===void 0&&(ee=new da,w[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=w[H];return ee===void 0&&(ee=new da,w[H]=ee),ee.getHandSpace()};function G(H){const ee=_.indexOf(H.inputSource);if(ee===-1)return;const de=w[ee];de!==void 0&&(de.update(H.inputSource,H.frame,c||a),de.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ie);for(let H=0;H<w.length;H++){const ee=_[H];ee!==null&&(_[H]=null,w[H].disconnect(ee))}R=null,B=null,v.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,A=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Bn(d.framebufferWidth,d.framebufferHeight,{format:cn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,de=null,j=null;m.depth&&(j=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?as:Qi,de=m.stencil?rs:Ti);const Ce={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Bn(f.textureWidth,f.textureHeight,{format:cn,type:zn,depthTexture:new zc(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(H){for(let ee=0;ee<H.removed.length;ee++){const de=H.removed[ee],j=_.indexOf(de);j>=0&&(_[j]=null,w[j].disconnect(de))}for(let ee=0;ee<H.added.length;ee++){const de=H.added[ee];let j=_.indexOf(de);if(j===-1){for(let ze=0;ze<w.length;ze++)if(ze>=_.length){_.push(de),j=ze;break}else if(_[ze]===null){_[ze]=de,j=ze;break}if(j===-1)break}const Ce=w[j];Ce&&Ce.connect(de)}}const $=new N,ae=new N;function Y(H,ee,de){$.setFromMatrixPosition(ee.matrixWorld),ae.setFromMatrixPosition(de.matrixWorld);const j=$.distanceTo(ae),Ce=ee.projectionMatrix.elements,ze=de.projectionMatrix.elements,Ge=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),oe=(Ce[9]+1)/Ce[5],pe=(Ce[9]-1)/Ce[5],y=(Ce[8]-1)/Ce[0],z=(ze[8]+1)/ze[0],U=Ge*y,K=Ge*z,J=j/(-y+z),W=J*-y;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(W),H.translateZ(J),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ce[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const fe=Ge+J,E=Ye+J,x=U-W,V=K+(j-W),se=oe*Ye/E*fe,he=pe*Ye/E*fe;H.projectionMatrix.makePerspective(x,V,se,he,fe,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ye(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let ee=H.near,de=H.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(de=v.depthFar)),M.near=L.near=T.near=ee,M.far=L.far=T.far=de,(R!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,B=M.far),T.layers.mask=H.layers.mask|2,L.layers.mask=H.layers.mask|4,M.layers.mask=T.layers.mask|L.layers.mask;const j=H.parent,Ce=M.cameras;ye(M,j);for(let ze=0;ze<Ce.length;ze++)ye(Ce[ze],j);Ce.length===2?Y(M,T,L):M.projectionMatrix.copy(T.projectionMatrix),we(H,M,j)};function we(H,ee,de){de===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(de.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Cs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Re=null;function ce(H,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const de=h.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let j=!1;de.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let ze=0;ze<de.length;ze++){const Ge=de[ze];let Ye=null;if(d!==null)Ye=d.getViewport(Ge);else{const pe=u.getViewSubImage(f,Ge);Ye=pe.viewport,ze===0&&(e.setRenderTargetTextures(A,pe.colorTexture,f.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(A))}let oe=b[ze];oe===void 0&&(oe=new on,oe.layers.enable(ze),oe.viewport=new Mt,b[ze]=oe),oe.matrix.fromArray(Ge.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Ge.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ze===0&&(M.matrix.copy(oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(oe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ze=u.getDepthInformation(de[0]);ze&&ze.isValid&&ze.texture&&v.init(e,ze,s.renderState)}}for(let de=0;de<w.length;de++){const j=_[de],Ce=w[de];j!==null&&Ce!==void 0&&Ce.update(j,ee,c||a)}Re&&Re(H,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ve=new Oc;ve.setAnimationLoop(ce),this.setAnimationLoop=function(H){Re=H},this.dispose=function(){}}}const gi=new yn,F0=new vt;function k0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Nc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,w,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),w=A.envMap,_=A.envMapRotation;w&&(m.envMap.value=w,gi.copy(_),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(gi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function O0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){const _=w.program;i.uniformBlockBinding(A,_)}function c(A,w){let _=s[A.id];_===void 0&&(g(A),_=h(A),s[A.id]=_,A.addEventListener("dispose",m));const I=w.program;i.updateUBOMapping(A,I);const C=e.render.frame;r[A.id]!==C&&(f(A),r[A.id]=C)}function h(A){const w=u();A.__bindingPointIndex=w;const _=n.createBuffer(),I=A.__size,C=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const w=s[A.id],_=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let C=0,T=_.length;C<T;C++){const L=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,M=L.length;b<M;b++){const R=L[b];if(d(R,C,b,I)===!0){const B=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let ie=0;ie<G.length;ie++){const $=G[ie],ae=v($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+q,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,q),q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,w,_,I){const C=A.value,T=w+"_"+_;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{const L=I[T];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[T]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(A){const w=A.uniforms;let _=0;const I=16;for(let T=0,L=w.length;T<L;T++){const b=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,R=b.length;M<R;M++){const B=b[M],G=Array.isArray(B.value)?B.value:[B.value];for(let q=0,ie=G.length;q<ie;q++){const $=G[q],ae=v($),Y=_%I,ye=Y%ae.boundary,we=Y+ye;_+=ye,we!==0&&I-we<ae.storage&&(_+=I-we),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ae.storage}}}const C=_%I;return C>0&&(_+=I-C),A.__size=_,A.__cache={},this}function v(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){const w=A.target;w.removeEventListener("dispose",m);const _=a.indexOf(w.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class z0{constructor(e={}){const{canvas:t=Au(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=si,this.toneMappingExposure=1;const _=this;let I=!1,C=0,T=0,L=null,b=-1,M=null;const R=new Mt,B=new Mt;let G=null;const q=new tt(0);let ie=0,$=t.width,ae=t.height,Y=1,ye=null,we=null;const Re=new Mt(0,0,$,ae),ce=new Mt(0,0,$,ae);let ve=!1;const H=new Ao;let ee=!1,de=!1;const j=new vt,Ce=new vt,ze=new N,Ge=new Mt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function pe(){return L===null?Y:1}let y=i;function z(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",D,!1),y===null){const k="webgl2";if(y=z(k,S),y===null)throw z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let U,K,J,W,fe,E,x,V,se,he,re,Ue,Ae,Le,Qe,me,De,Ne,We,Ie,Ze,Xe,lt,F;function Te(){U=new Wp(y),U.init(),Xe=new R0(y,U),K=new Op(y,U,e,Xe),J=new E0(y,U),K.reverseDepthBuffer&&f&&J.buffers.depth.setReversed(!0),W=new qp(y),fe=new u0,E=new C0(y,U,J,fe,K,Xe,W),x=new Bp(_),V=new Vp(_),se=new Qu(y),lt=new Fp(y,se),he=new $p(y,se,W,lt),re=new Zp(y,he,se,W),We=new Yp(y,K,E),me=new zp(fe),Ue=new h0(_,x,V,U,K,lt,me),Ae=new k0(_,fe),Le=new f0,Qe=new x0(U),Ne=new Np(_,x,V,J,re,d,l),De=new w0(_,re,K),F=new O0(y,W,K,J),Ie=new kp(y,U,W),Ze=new Xp(y,U,W),W.programs=Ue.programs,_.capabilities=K,_.extensions=U,_.properties=fe,_.renderLists=Le,_.shadowMap=De,_.state=J,_.info=W}Te();const Q=new N0(_,y);this.xr=Q,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const S=U.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=U.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize($,ae,!1))},this.getSize=function(S){return S.set($,ae)},this.setSize=function(S,k,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,ae=k,t.width=Math.floor(S*Y),t.height=Math.floor(k*Y),X===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set($*Y,ae*Y).floor()},this.setDrawingBufferSize=function(S,k,X){$=S,ae=k,Y=X,t.width=Math.floor(S*X),t.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,k,X,Z){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,k,X,Z),J.viewport(R.copy(Re).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(ce)},this.setScissor=function(S,k,X,Z){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,k,X,Z),J.scissor(B.copy(ce).multiplyScalar(Y).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){J.setScissorTest(ve=S)},this.setOpaqueSort=function(S){ye=S},this.setTransparentSort=function(S){we=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,k=!0,X=!0){let Z=0;if(S){let O=!1;if(L!==null){const xe=L.texture.format;O=xe===So||xe===Mo||xe===yo}if(O){const xe=L.texture.type,Pe=xe===zn||xe===Ti||xe===Ts||xe===rs||xe===_o||xe===xo,Fe=Ne.getClearColor(),ke=Ne.getClearAlpha(),qe=Fe.r,Je=Fe.g,Oe=Fe.b;Pe?(g[0]=qe,g[1]=Je,g[2]=Oe,g[3]=ke,y.clearBufferuiv(y.COLOR,0,g)):(v[0]=qe,v[1]=Je,v[2]=Oe,v[3]=ke,y.clearBufferiv(y.COLOR,0,v))}else Z|=y.COLOR_BUFFER_BIT}k&&(Z|=y.DEPTH_BUFFER_BIT),X&&(Z|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",D,!1),Le.dispose(),Qe.dispose(),fe.dispose(),x.dispose(),V.dispose(),re.dispose(),lt.dispose(),F.dispose(),Ue.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ft),Q.removeEventListener("sessionend",zt),St.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=W.autoReset,k=De.enabled,X=De.autoUpdate,Z=De.needsUpdate,O=De.type;Te(),W.autoReset=S,De.enabled=k,De.autoUpdate=X,De.needsUpdate=Z,De.type=O}function D(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){const k=S.target;k.removeEventListener("dispose",te),_e(k)}function _e(S){Se(S),fe.remove(S)}function Se(S){const k=fe.get(S).programs;k!==void 0&&(k.forEach(function(X){Ue.releaseProgram(X)}),S.isShaderMaterial&&Ue.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,Z,O,xe){k===null&&(k=Ye);const Pe=O.isMesh&&O.matrixWorld.determinant()<0,Fe=lh(S,k,X,Z,O);J.setMaterial(Z,Pe);let ke=X.index,qe=1;if(Z.wireframe===!0){if(ke=he.getWireframeAttribute(X),ke===void 0)return;qe=2}const Je=X.drawRange,Oe=X.attributes.position;let it=Je.start*qe,dt=(Je.start+Je.count)*qe;xe!==null&&(it=Math.max(it,xe.start*qe),dt=Math.min(dt,(xe.start+xe.count)*qe)),ke!==null?(it=Math.max(it,0),dt=Math.min(dt,ke.count)):Oe!=null&&(it=Math.max(it,0),dt=Math.min(dt,Oe.count));const pt=dt-it;if(pt<0||pt===1/0)return;lt.setup(O,Z,Fe,X,ke);let Xt,st=Ie;if(ke!==null&&(Xt=se.get(ke),st=Ze,st.setIndex(Xt)),O.isMesh)Z.wireframe===!0?(J.setLineWidth(Z.wireframeLinewidth*pe()),st.setMode(y.LINES)):st.setMode(y.TRIANGLES);else if(O.isLine){let Be=Z.linewidth;Be===void 0&&(Be=1),J.setLineWidth(Be*pe()),O.isLineSegments?st.setMode(y.LINES):O.isLineLoop?st.setMode(y.LINE_LOOP):st.setMode(y.LINE_STRIP)}else O.isPoints?st.setMode(y.POINTS):O.isSprite&&st.setMode(y.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,wn=O._multiDrawCounts,rt=O._multiDrawCount,en=ke?se.get(ke).bytesPerElement:1,Li=fe.get(Z).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)Li.setValue(y,"_gl_DrawID",Zt),st.render(Be[Zt]/en,wn[Zt])}else if(O.isInstancedMesh)st.renderInstances(it,pt,O.count);else if(X.isInstancedBufferGeometry){const Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wn=Math.min(X.instanceCount,Be);st.renderInstances(it,pt,wn)}else st.render(it,pt)};function Me(S,k,X){S.transparent===!0&&S.side===yt&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,ks(S,k,X),S.side=ci,S.needsUpdate=!0,ks(S,k,X),S.side=yt):ks(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),p=Qe.get(X),p.init(k),w.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==X&&S.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const Z=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const xe=O.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const Fe=xe[Pe];Me(Fe,X,O),Z.add(Fe)}else Me(xe,X,O),Z.add(xe)}),w.pop(),p=null,Z},this.compileAsync=function(S,k,X=null){const Z=this.compile(S,k,X);return new Promise(O=>{function xe(){if(Z.forEach(function(Pe){fe.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){O(S);return}setTimeout(xe,10)}U.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ue=null;function be(S){ue&&ue(S)}function ft(){St.stop()}function zt(){St.start()}const St=new Oc;St.setAnimationLoop(be),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(S){ue=S,Q.setAnimationLoop(S),S===null?St.stop():St.start()},Q.addEventListener("sessionstart",ft),Q.addEventListener("sessionend",zt),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(k),k=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,k,L),p=Qe.get(S,w.length),p.init(k),w.push(p),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H.setFromProjectionMatrix(Ce),de=this.localClippingEnabled,ee=me.init(this.clippingPlanes,de),m=Le.get(S,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const xe=_.xr.getDepthSensingMesh();xe!==null&&Sn(xe,k,-1/0,_.sortObjects)}Sn(S,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ye,we),oe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,oe&&Ne.addToRenderList(m,S),this.info.render.frame++,ee===!0&&me.beginShadows();const X=p.state.shadowsArray;De.render(X,S,k),ee===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,O=m.transmissive;if(p.setupLights(),k.isArrayCamera){const xe=k.cameras;if(O.length>0)for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++){const ke=xe[Pe];bn(Z,O,S,ke)}oe&&Ne.render(S);for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++){const ke=xe[Pe];fn(m,S,ke,ke.viewport)}}else O.length>0&&bn(Z,O,S,k),oe&&Ne.render(S),fn(m,S,k);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,k),lt.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],ee===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Sn(S,k,X,Z){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||H.intersectsSprite(S)){Z&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ce);const Pe=re.update(S),Fe=S.material;Fe.visible&&m.push(S,Pe,Fe,X,Ge.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||H.intersectsObject(S))){const Pe=re.update(S),Fe=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ge.copy(Pe.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(Ce)),Array.isArray(Fe)){const ke=Pe.groups;for(let qe=0,Je=ke.length;qe<Je;qe++){const Oe=ke[qe],it=Fe[Oe.materialIndex];it&&it.visible&&m.push(S,Pe,it,X,Ge.z,Oe)}}else Fe.visible&&m.push(S,Pe,Fe,X,Ge.z,null)}}const xe=S.children;for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++)Sn(xe[Pe],k,X,Z)}function fn(S,k,X,Z){const O=S.opaque,xe=S.transmissive,Pe=S.transparent;p.setupLightsView(X),ee===!0&&me.setGlobalState(_.clippingPlanes,X),Z&&J.viewport(R.copy(Z)),O.length>0&&Fs(O,k,X),xe.length>0&&Fs(xe,k,X),Pe.length>0&&Fs(Pe,k,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function bn(S,k,X,Z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Bn(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?Ci:zn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const xe=p.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||R;xe.setSize(Pe.z,Pe.w);const Fe=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(q),ie=_.getClearAlpha(),ie<1&&_.setClearColor(16777215,.5),_.clear(),oe&&Ne.render(X);const ke=_.toneMapping;_.toneMapping=si;const qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ee===!0&&me.setGlobalState(_.clippingPlanes,Z),Fs(S,X,Z),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),U.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Oe=0,it=k.length;Oe<it;Oe++){const dt=k[Oe],pt=dt.object,Xt=dt.geometry,st=dt.material,Be=dt.group;if(st.side===yt&&pt.layers.test(Z.layers)){const wn=st.side;st.side=Yt,st.needsUpdate=!0,No(pt,X,Z,Xt,st,Be),st.side=wn,st.needsUpdate=!0,Je=!0}}Je===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}_.setRenderTarget(Fe),_.setClearColor(q,ie),qe!==void 0&&(Z.viewport=qe),_.toneMapping=ke}function Fs(S,k,X){const Z=k.isScene===!0?k.overrideMaterial:null;for(let O=0,xe=S.length;O<xe;O++){const Pe=S[O],Fe=Pe.object,ke=Pe.geometry,qe=Z===null?Pe.material:Z,Je=Pe.group;Fe.layers.test(X.layers)&&No(Fe,k,X,ke,qe,Je)}}function No(S,k,X,Z,O,xe){S.onBeforeRender(_,k,X,Z,O,xe),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(_,k,X,Z,S,xe),O.transparent===!0&&O.side===yt&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,_.renderBufferDirect(X,k,Z,O,S,xe),O.side=ci,O.needsUpdate=!0,_.renderBufferDirect(X,k,Z,O,S,xe),O.side=yt):_.renderBufferDirect(X,k,Z,O,S,xe),S.onAfterRender(_,k,X,Z,O,xe)}function ks(S,k,X){k.isScene!==!0&&(k=Ye);const Z=fe.get(S),O=p.state.lights,xe=p.state.shadowsArray,Pe=O.state.version,Fe=Ue.getParameters(S,O.state,xe,k,X),ke=Ue.getProgramCacheKey(Fe);let qe=Z.programs;Z.environment=S.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(S.isMeshStandardMaterial?V:x).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",te),qe=new Map,Z.programs=qe);let Je=qe.get(ke);if(Je!==void 0){if(Z.currentProgram===Je&&Z.lightsStateVersion===Pe)return ko(S,Fe),Je}else Fe.uniforms=Ue.getUniforms(S),S.onBeforeCompile(Fe,_),Je=Ue.acquireProgram(Fe,ke),qe.set(ke,Je),Z.uniforms=Fe.uniforms;const Oe=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=me.uniform),ko(S,Fe),Z.needsLights=hh(S),Z.lightsStateVersion=Pe,Z.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),Z.currentProgram=Je,Z.uniformsList=null,Je}function Fo(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=vr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function ko(S,k){const X=fe.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function lh(S,k,X,Z,O){k.isScene!==!0&&(k=Ye),E.resetTextureUnits();const xe=k.fog,Pe=Z.isMeshStandardMaterial?k.environment:null,Fe=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ls,ke=(Z.isMeshStandardMaterial?V:x).get(Z.envMap||Pe),qe=Z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,dt=!!X.morphAttributes.color;let pt=si;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pt=_.toneMapping);const Xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=Xt!==void 0?Xt.length:0,Be=fe.get(Z),wn=p.state.lights;if(ee===!0&&(de===!0||S!==M)){const Kt=S===M&&Z.id===b;me.setState(Z,S,Kt)}let rt=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==wn.state.version||Be.outputColorSpace!==Fe||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==ke||Z.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==me.numPlanes||Be.numIntersection!==me.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Je||Be.morphTargets!==Oe||Be.morphNormals!==it||Be.morphColors!==dt||Be.toneMapping!==pt||Be.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Be.__version=Z.version);let en=Be.currentProgram;rt===!0&&(en=ks(Z,k,O));let Li=!1,Zt=!1,ds=!1;const mt=en.getUniforms(),pn=Be.uniforms;if(J.useProgram(en.program)&&(Li=!0,Zt=!0,ds=!0),Z.id!==b&&(b=Z.id,Zt=!0),Li||M!==S){J.buffers.depth.getReversed()?(j.copy(S.projectionMatrix),Tu(j),Cu(j),mt.setValue(y,"projectionMatrix",j)):mt.setValue(y,"projectionMatrix",S.projectionMatrix),mt.setValue(y,"viewMatrix",S.matrixWorldInverse);const $n=mt.map.cameraPosition;$n!==void 0&&$n.setValue(y,ze.setFromMatrixPosition(S.matrixWorld)),K.logarithmicDepthBuffer&&mt.setValue(y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(y,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Zt=!0,ds=!0)}if(O.isSkinnedMesh){mt.setOptional(y,O,"bindMatrix"),mt.setOptional(y,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),mt.setValue(y,"boneTexture",Kt.boneTexture,E))}O.isBatchedMesh&&(mt.setOptional(y,O,"batchingTexture"),mt.setValue(y,"batchingTexture",O._matricesTexture,E),mt.setOptional(y,O,"batchingIdTexture"),mt.setValue(y,"batchingIdTexture",O._indirectTexture,E),mt.setOptional(y,O,"batchingColorTexture"),O._colorsTexture!==null&&mt.setValue(y,"batchingColorTexture",O._colorsTexture,E));const fs=X.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0)&&We.update(O,X,en),(Zt||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,mt.setValue(y,"receiveShadow",O.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=ke,pn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(pn.envMapIntensity.value=k.environmentIntensity),Zt&&(mt.setValue(y,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&ch(pn,ds),xe&&Z.fog===!0&&Ae.refreshFogUniforms(pn,xe),Ae.refreshMaterialUniforms(pn,Z,Y,ae,p.state.transmissionRenderTarget[S.id]),vr.upload(y,Fo(Be),pn,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(vr.upload(y,Fo(Be),pn,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(y,"center",O.center),mt.setValue(y,"modelViewMatrix",O.modelViewMatrix),mt.setValue(y,"normalMatrix",O.normalMatrix),mt.setValue(y,"modelMatrix",O.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Kt=Z.uniformsGroups;for(let $n=0,Xn=Kt.length;$n<Xn;$n++){const Oo=Kt[$n];F.update(Oo,en),F.bind(Oo,en)}}return en}function ch(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function hh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,k,X){fe.get(S.texture).__webglTexture=k,fe.get(S.depthTexture).__webglTexture=X;const Z=fe.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=X===void 0,Z.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const X=fe.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,X=0){L=S,C=k,T=X;let Z=!0,O=null,xe=!1,Pe=!1;if(S){const ke=fe.get(S);if(ke.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(y.FRAMEBUFFER,null),Z=!1;else if(ke.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(ke.__hasExternalTextures)E.rebindTextures(S,fe.get(S.texture).__webglTexture,fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Oe=S.depthTexture;if(ke.__boundDepthTexture!==Oe){if(Oe!==null&&fe.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const qe=S.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Je=fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?O=Je[k][X]:O=Je[k],xe=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?O=fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Je)?O=Je[X]:O=Je,R.copy(S.viewport),B.copy(S.scissor),G=S.scissorTest}else R.copy(Re).multiplyScalar(Y).floor(),B.copy(ce).multiplyScalar(Y).floor(),G=ve;if(J.bindFramebuffer(y.FRAMEBUFFER,O)&&Z&&J.drawBuffers(S,O),J.viewport(R),J.scissor(B),J.setScissorTest(G),xe){const ke=fe.get(S.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,X)}else if(Pe){const ke=fe.get(S.texture),qe=k||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,ke.__webglTexture,X||0,qe)}b=-1},this.readRenderTargetPixels=function(S,k,X,Z,O,xe,Pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){J.bindFramebuffer(y.FRAMEBUFFER,Fe);try{const ke=S.texture,qe=ke.format,Je=ke.type;if(!K.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Z&&X>=0&&X<=S.height-O&&y.readPixels(k,X,Z,O,Xe.convert(qe),Xe.convert(Je),xe)}finally{const ke=L!==null?fe.get(L).__webglFramebuffer:null;J.bindFramebuffer(y.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,k,X,Z,O,xe,Pe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){const ke=S.texture,qe=ke.format,Je=ke.type;if(!K.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-Z&&X>=0&&X<=S.height-O){J.bindFramebuffer(y.FRAMEBUFFER,Fe);const Oe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Oe),y.bufferData(y.PIXEL_PACK_BUFFER,xe.byteLength,y.STREAM_READ),y.readPixels(k,X,Z,O,Xe.convert(qe),Xe.convert(Je),0);const it=L!==null?fe.get(L).__webglFramebuffer:null;J.bindFramebuffer(y.FRAMEBUFFER,it);const dt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Eu(y,dt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Oe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,xe),y.deleteBuffer(Oe),y.deleteSync(dt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,X=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const Z=Math.pow(2,-X),O=Math.floor(S.image.width*Z),xe=Math.floor(S.image.height*Z),Pe=k!==null?k.x:0,Fe=k!==null?k.y:0;E.setTexture2D(S,0),y.copyTexSubImage2D(y.TEXTURE_2D,X,0,0,Pe,Fe,O,xe),J.unbindTexture()},this.copyTextureToTexture=function(S,k,X=null,Z=null,O=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],k=arguments[2],O=arguments[3]||0,X=null);let xe,Pe,Fe,ke,qe,Je,Oe,it,dt;const pt=S.isCompressedTexture?S.mipmaps[O]:S.image;X!==null?(xe=X.max.x-X.min.x,Pe=X.max.y-X.min.y,Fe=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,qe=X.min.y,Je=X.isBox3?X.min.z:0):(xe=pt.width,Pe=pt.height,Fe=pt.depth||1,ke=0,qe=0,Je=0),Z!==null?(Oe=Z.x,it=Z.y,dt=Z.z):(Oe=0,it=0,dt=0);const Xt=Xe.convert(k.format),st=Xe.convert(k.type);let Be;k.isData3DTexture?(E.setTexture3D(k,0),Be=y.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),Be=y.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),Be=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,k.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,k.unpackAlignment);const wn=y.getParameter(y.UNPACK_ROW_LENGTH),rt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),en=y.getParameter(y.UNPACK_SKIP_PIXELS),Li=y.getParameter(y.UNPACK_SKIP_ROWS),Zt=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ke),y.pixelStorei(y.UNPACK_SKIP_ROWS,qe),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Je);const ds=S.isDataArrayTexture||S.isData3DTexture,mt=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const pn=fe.get(S),fs=fe.get(k),Kt=fe.get(pn.__renderTarget),$n=fe.get(fs.__renderTarget);J.bindFramebuffer(y.READ_FRAMEBUFFER,Kt.__webglFramebuffer),J.bindFramebuffer(y.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Xn=0;Xn<Fe;Xn++)ds&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,fe.get(S).__webglTexture,O,Je+Xn),S.isDepthTexture?(mt&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,fe.get(k).__webglTexture,O,dt+Xn),y.blitFramebuffer(ke,qe,xe,Pe,Oe,it,xe,Pe,y.DEPTH_BUFFER_BIT,y.NEAREST)):mt?y.copyTexSubImage3D(Be,O,Oe,it,dt+Xn,ke,qe,xe,Pe):y.copyTexSubImage2D(Be,O,Oe,it,dt+Xn,ke,qe,xe,Pe);J.bindFramebuffer(y.READ_FRAMEBUFFER,null),J.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?y.texSubImage3D(Be,O,Oe,it,dt,xe,Pe,Fe,Xt,st,pt.data):k.isCompressedArrayTexture?y.compressedTexSubImage3D(Be,O,Oe,it,dt,xe,Pe,Fe,Xt,pt.data):y.texSubImage3D(Be,O,Oe,it,dt,xe,Pe,Fe,Xt,st,pt):S.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,O,Oe,it,xe,Pe,Xt,st,pt.data):S.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,O,Oe,it,pt.width,pt.height,Xt,pt.data):y.texSubImage2D(y.TEXTURE_2D,O,Oe,it,xe,Pe,Xt,st,pt);y.pixelStorei(y.UNPACK_ROW_LENGTH,wn),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,rt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,en),y.pixelStorei(y.UNPACK_SKIP_ROWS,Li),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Zt),O===0&&k.generateMipmaps&&y.generateMipmap(Be),J.unbindTexture()},this.copyTextureToTexture3D=function(S,k,X=null,Z=null,O=0){return S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],k=arguments[3],O=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,X,Z,O)},this.initRenderTarget=function(S){fe.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),J.unbindTexture()},this.resetState=function(){C=0,T=0,L=null,J.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class Wc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $c extends kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=It,h=It,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class B0 extends kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,s=[],r=[],a=[],o=new N,l=new vt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Rt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Rt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class To extends Mn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class H0 extends To{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Co(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const rr=new N,fa=new Co,pa=new Co,ma=new Co;class G0 extends Mn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(rr.subVectors(s[0],s[1]).add(s[0]),c=rr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(rr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),fa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),pa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),ma.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),pa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ma.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(fa.calc(l),pa.calc(l),ma.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hl(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function V0(n,e){const t=1-n;return t*t*e}function W0(n,e){return 2*(1-n)*n*e}function $0(n,e){return n*n*e}function ws(n,e,t,i){return V0(n,e)+W0(n,t)+$0(n,i)}function X0(n,e){const t=1-n;return t*t*t*e}function q0(n,e){const t=1-n;return 3*t*t*n*e}function Y0(n,e){return 3*(1-n)*n*n*e}function Z0(n,e){return n*n*n*e}function As(n,e,t,i,s){return X0(n,e)+q0(n,t)+Y0(n,i)+Z0(n,s)}class Xc extends Mn{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(e,s.x,r.x,a.x,o.x),As(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class J0 extends Mn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(e,s.x,r.x,a.x,o.x),As(e,s.y,r.y,a.y,o.y),As(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qc extends Mn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends Mn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yc extends Mn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends Mn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ws(e,s.x,r.x,a.x),ws(e,s.y,r.y,a.y),ws(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zc extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Hl(o,l.x,c.x,h.x,u.x),Hl(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ge().fromArray(s))}return this}}var ho=Object.freeze({__proto__:null,ArcCurve:H0,CatmullRomCurve3:G0,CubicBezierCurve:Xc,CubicBezierCurve3:J0,EllipseCurve:To,LineCurve:qc,LineCurve3:j0,QuadraticBezierCurve:Yc,QuadraticBezierCurve3:K0,SplineCurve:Zc});class Q0 extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new ho[s.type]().fromJSON(s))}return this}}class uo extends Q0{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new qc(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Yc(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new Xc(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Zc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new To(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ro extends Ot{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Rt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new N,f=new ge,d=new N,g=new N,v=new N;let m=0,p=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[A+1].x-e[A].x,p=e[A+1].y-e[A].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let A=0;A<=t;A++){const w=i+A*h*s,_=Math.sin(w),I=Math.cos(w);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*_,u.y=e[C].y,u.z=e[C].x*I,a.push(u.x,u.y,u.z),f.x=A/t,f.y=C/(e.length-1),o.push(f.x,f.y);const T=l[3*C+0]*_,L=l[3*C+1],b=l[3*C+0]*I;c.push(T,L,b)}}for(let A=0;A<t;A++)for(let w=0;w<e.length-1;w++){const _=w+A*e.length,I=_,C=_+e.length,T=_+e.length+1,L=_+1;r.push(I,C,L),r.push(T,L,C)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.points,e.segments,e.phiStart,e.phiLength)}}class Dr extends Ot{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new N,h=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends Ot{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;A(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2));function A(){const _=new N,I=new N;let C=0;const T=(t-e)/i;for(let L=0;L<=r;L++){const b=[],M=L/r,R=M*(t-e)+e;for(let B=0;B<=s;B++){const G=B/s,q=G*l+o,ie=Math.sin(q),$=Math.cos(q);I.x=R*ie,I.y=-M*i+m,I.z=R*$,u.push(I.x,I.y,I.z),_.set(ie,T,$).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-M),b.push(g++)}v.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const M=v[b][L],R=v[b+1][L],B=v[b+1][L+1],G=v[b][L+1];(e>0||b!==0)&&(h.push(M,R,G),C+=3),(t>0||b!==r-1)&&(h.push(R,B,G),C+=3)}c.addGroup(p,C,0),p+=C}function w(_){const I=g,C=new ge,T=new N;let L=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const q=B/s*l+o,ie=Math.cos(q),$=Math.sin(q);T.x=b*$,T.y=m*M,T.z=b*ie,u.push(T.x,T.y,T.z),f.push(0,M,0),C.x=ie*.5+.5,C.y=$*.5*M+.5,d.push(C.x,C.y),g++}for(let B=0;B<s;B++){const G=I+B,q=R+B;_===!0?h.push(q,q+1,G):h.push(q+1,q,G),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends Hn{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ns extends uo{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new uo().fromJSON(s))}return this}}const eg={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Jc(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=rg(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ps(r,a,t,o,l,d,0),a}};function Jc(n,e,t,i,s){let r,a;if(s===gg(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Gl(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Gl(r,n[r],n[r+1],a);return a&&Ur(a,a.next)&&(Is(a),a=a.next),a}function Ri(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ur(t,t.next)||_t(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ps(n,e,t,i,s,r,a){if(!n)return;!a&&r&&hg(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?ng(n,i,s,r):tg(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Is(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ig(Ri(n),e,t),Ps(n,e,t,i,s,r,2)):a===2&&sg(n,e,t,i,s,r):Ps(Ri(n),e,t,i,s,r,1);break}}}function tg(n){const e=n.prev,t=n,i=n.next;if(_t(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&ji(s,o,r,l,a,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ng(n,e,t,i){const s=n.prev,r=n,a=n.next;if(_t(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=fo(d,g,e,t,i),A=fo(v,m,e,t,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=A;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ji(o,h,l,u,c,f,w.x,w.y)&&_t(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ji(o,h,l,u,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ji(o,h,l,u,c,f,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=A;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&ji(o,h,l,u,c,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ig(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Ur(s,r)&&jc(s,i,i.next,r)&&Ls(s,r)&&Ls(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Is(i),Is(i.next),i=n=r),i=i.next}while(i!==n);return Ri(i)}function sg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fg(a,o)){let l=Kc(a,o);a=Ri(a,a.next),l=Ri(l,l.next),Ps(a,e,t,i,s,r,0),Ps(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function rg(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Jc(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(dg(c));for(s.sort(ag),r=0;r<s.length;r++)t=og(s[r],t);return t}function ag(n,e){return n.x-e.x}function og(n,e){const t=lg(n,e);if(!t)return e;const i=Kc(t,n);return Ri(i,i.next),Ri(t,t.next)}function lg(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ji(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ls(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&cg(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function cg(n,e){return _t(n.prev,n,e.prev)<0&&_t(e.next,n,n.next)<0}function hg(n,e,t,i){let s=n;do s.z===0&&(s.z=fo(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ug(s)}function ug(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function fo(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ji(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function fg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!pg(n,e)&&(Ls(n,e)&&Ls(e,n)&&mg(n,e)&&(_t(n.prev,n,e.prev)||_t(n,e.prev,e))||Ur(n,e)&&_t(n.prev,n,n.next)>0&&_t(e.prev,e,e.next)>0)}function _t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ur(n,e){return n.x===e.x&&n.y===e.y}function jc(n,e,t,i){const s=or(_t(n,e,t)),r=or(_t(n,e,i)),a=or(_t(t,i,n)),o=or(_t(t,i,e));return!!(s!==r&&a!==o||s===0&&ar(n,t,e)||r===0&&ar(n,i,e)||a===0&&ar(t,n,i)||o===0&&ar(t,e,i))}function ar(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function or(n){return n>0?1:n<0?-1:0}function pg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&jc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ls(n,e){return _t(n.prev,n,n.next)<0?_t(n,e,n.next)>=0&&_t(n,n.prev,e)>=0:_t(n,e,n.prev)<0||_t(n,n.next,e)<0}function mg(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Kc(n,e){const t=new po(n.i,n.x,n.y),i=new po(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Gl(n,e,t,i){const s=new po(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Is(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function po(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gg(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class ai{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return ai.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Vl(e),Wl(i,e);let a=e.length;t.forEach(Vl);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Wl(i,t[l]);const o=eg.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Vl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Wl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Po extends Ot{constructor(e=new Ns([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:vg;let w,_=!1,I,C,T,L;p&&(w=p.getSpacedPoints(h),_=!0,f=!1,I=p.computeFrenetFrames(h,!1),C=new N,T=new N,L=new N),f||(m=0,d=0,g=0,v=0);const b=o.extractPoints(c);let M=b.shape;const R=b.holes;if(!ai.isClockWise(M)){M=M.reverse();for(let oe=0,pe=R.length;oe<pe;oe++){const y=R[oe];ai.isClockWise(y)&&(R[oe]=y.reverse())}}const G=ai.triangulateShape(M,R),q=M;for(let oe=0,pe=R.length;oe<pe;oe++){const y=R[oe];M=M.concat(y)}function ie(oe,pe,y){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(pe,y)}const $=M.length,ae=G.length;function Y(oe,pe,y){let z,U,K;const J=oe.x-pe.x,W=oe.y-pe.y,fe=y.x-oe.x,E=y.y-oe.y,x=J*J+W*W,V=J*E-W*fe;if(Math.abs(V)>Number.EPSILON){const se=Math.sqrt(x),he=Math.sqrt(fe*fe+E*E),re=pe.x-W/se,Ue=pe.y+J/se,Ae=y.x-E/he,Le=y.y+fe/he,Qe=((Ae-re)*E-(Le-Ue)*fe)/(J*E-W*fe);z=re+J*Qe-oe.x,U=Ue+W*Qe-oe.y;const me=z*z+U*U;if(me<=2)return new ge(z,U);K=Math.sqrt(me/2)}else{let se=!1;J>Number.EPSILON?fe>Number.EPSILON&&(se=!0):J<-Number.EPSILON?fe<-Number.EPSILON&&(se=!0):Math.sign(W)===Math.sign(E)&&(se=!0),se?(z=-W,U=J,K=Math.sqrt(x)):(z=J,U=W,K=Math.sqrt(x/2))}return new ge(z/K,U/K)}const ye=[];for(let oe=0,pe=q.length,y=pe-1,z=oe+1;oe<pe;oe++,y++,z++)y===pe&&(y=0),z===pe&&(z=0),ye[oe]=Y(q[oe],q[y],q[z]);const we=[];let Re,ce=ye.concat();for(let oe=0,pe=R.length;oe<pe;oe++){const y=R[oe];Re=[];for(let z=0,U=y.length,K=U-1,J=z+1;z<U;z++,K++,J++)K===U&&(K=0),J===U&&(J=0),Re[z]=Y(y[z],y[K],y[J]);we.push(Re),ce=ce.concat(Re)}for(let oe=0;oe<m;oe++){const pe=oe/m,y=d*Math.cos(pe*Math.PI/2),z=g*Math.sin(pe*Math.PI/2)+v;for(let U=0,K=q.length;U<K;U++){const J=ie(q[U],ye[U],z);j(J.x,J.y,-y)}for(let U=0,K=R.length;U<K;U++){const J=R[U];Re=we[U];for(let W=0,fe=J.length;W<fe;W++){const E=ie(J[W],Re[W],z);j(E.x,E.y,-y)}}}const ve=g+v;for(let oe=0;oe<$;oe++){const pe=f?ie(M[oe],ce[oe],ve):M[oe];_?(T.copy(I.normals[0]).multiplyScalar(pe.x),C.copy(I.binormals[0]).multiplyScalar(pe.y),L.copy(w[0]).add(T).add(C),j(L.x,L.y,L.z)):j(pe.x,pe.y,0)}for(let oe=1;oe<=h;oe++)for(let pe=0;pe<$;pe++){const y=f?ie(M[pe],ce[pe],ve):M[pe];_?(T.copy(I.normals[oe]).multiplyScalar(y.x),C.copy(I.binormals[oe]).multiplyScalar(y.y),L.copy(w[oe]).add(T).add(C),j(L.x,L.y,L.z)):j(y.x,y.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){const pe=oe/m,y=d*Math.cos(pe*Math.PI/2),z=g*Math.sin(pe*Math.PI/2)+v;for(let U=0,K=q.length;U<K;U++){const J=ie(q[U],ye[U],z);j(J.x,J.y,u+y)}for(let U=0,K=R.length;U<K;U++){const J=R[U];Re=we[U];for(let W=0,fe=J.length;W<fe;W++){const E=ie(J[W],Re[W],z);_?j(E.x,E.y+w[h-1].y,w[h-1].x+y):j(E.x,E.y,u+y)}}}H(),ee();function H(){const oe=s.length/3;if(f){let pe=0,y=$*pe;for(let z=0;z<ae;z++){const U=G[z];Ce(U[2]+y,U[1]+y,U[0]+y)}pe=h+m*2,y=$*pe;for(let z=0;z<ae;z++){const U=G[z];Ce(U[0]+y,U[1]+y,U[2]+y)}}else{for(let pe=0;pe<ae;pe++){const y=G[pe];Ce(y[2],y[1],y[0])}for(let pe=0;pe<ae;pe++){const y=G[pe];Ce(y[0]+$*h,y[1]+$*h,y[2]+$*h)}}i.addGroup(oe,s.length/3-oe,0)}function ee(){const oe=s.length/3;let pe=0;de(q,pe),pe+=q.length;for(let y=0,z=R.length;y<z;y++){const U=R[y];de(U,pe),pe+=U.length}i.addGroup(oe,s.length/3-oe,1)}function de(oe,pe){let y=oe.length;for(;--y>=0;){const z=y;let U=y-1;U<0&&(U=oe.length-1);for(let K=0,J=h+m*2;K<J;K++){const W=$*K,fe=$*(K+1),E=pe+z+W,x=pe+U+W,V=pe+U+fe,se=pe+z+fe;ze(E,x,V,se)}}}function j(oe,pe,y){l.push(oe),l.push(pe),l.push(y)}function Ce(oe,pe,y){Ge(oe),Ge(pe),Ge(y);const z=s.length/3,U=A.generateTopUV(i,s,z-3,z-2,z-1);Ye(U[0]),Ye(U[1]),Ye(U[2])}function ze(oe,pe,y,z){Ge(oe),Ge(pe),Ge(z),Ge(pe),Ge(y),Ge(z);const U=s.length/3,K=A.generateSideWallUV(i,s,U-6,U-3,U-2,U-1);Ye(K[0]),Ye(K[1]),Ye(K[3]),Ye(K[1]),Ye(K[2]),Ye(K[3])}function Ge(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function Ye(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _g(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ho[s.type]().fromJSON(s)),new Po(i,e.options)}}const vg={generateTopUV:function(n,e,t,i,s){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-u),new ge(f,1-g),new ge(v,1-p)]:[new ge(o,1-l),new ge(h,1-u),new ge(d,1-g),new ge(m,1-p)]}};function _g(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Nr extends Ot{constructor(e=new Ns([new ge(0,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(r,3)),this.setAttribute("uv",new at(a,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ai.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const A=g[m];ai.isClockWise(A)===!0&&(g[m]=A.reverse())}const v=ai.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const A=g[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){const A=d[m];s.push(A.x,A.y,0),r.push(0,0,1),a.push(A.x,A.y)}for(let m=0,p=v.length;m<p;m++){const A=v[m],w=A[0]+u,_=A[1]+u,I=A[2]+u;i.push(w,_,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xg(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Nr(i,e.curveSegments)}}function xg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Gn extends Ot{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,f=new N,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const A=[],w=p/i;let _=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const C=I/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+w*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(C+_,1-w),A.push(c++)}h.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const w=h[p][A+1],_=h[p][A],I=h[p+1][A],C=h[p+1][A+1];(p!==0||a>0)&&d.push(w,_,C),(p!==i-1||l<Math.PI)&&d.push(_,I,C)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(v,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lo extends Ot{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,A=(s+1)*d+g;a.push(v,m,A),a.push(m,p,A)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yg extends Us{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new tt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Qc extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mg extends Qc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ga=new vt,$l=new N,Xl=new N;class Sg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bg extends Sg{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wg extends Qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);const eh="#5b3520",xt={grass:"#9dd190",grassLight:"#a9d99b",grassDark:"#93c886",grassTick:"#78b66f",grassEdge:"#5f9a5a",sand:"#ecd7a6",sandEdge:"#d6ba84",water:"#78c4dc",waterDeep:"#61b4d2",waterInk:"#3d86a6",foam:"#f3f6ea",trunk:"#e2a574",leaf:"#83c47b",leafLight:"#b4de94"};function gt(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Wn(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function Ag(n,e,{amp:t=1.5,step:i=5,closed:s=!1}={}){const r=[],a=n.length,o=s?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let u=0;u<o;u++){const[f,d]=n[u],[g,v]=n[(u+1)%a],m=Math.hypot(g-f,v-d)||1,p=-(v-d)/m,A=(g-f)/m,w=Math.max(1,Math.ceil(m/i));for(let _=0;_<w;_++){const I=_/w,C=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);r.push([f+(g-f)*I+p*C,d+(v-d)*I+A*C]),h+=m/w}}return s||r.push(n[a-1].slice()),r}function ht(n,e,t,{w:i=3,color:s=eh,closed:r=!1,amp:a=1.3}={}){const o=Ag(e,t,{amp:a,closed:r});r&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=s,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function th(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function Wt(n,e,t){n.fillStyle=t,th(n,e),n.fill()}function va(n,e,t){n.save(),th(n,e),n.clip(),t(),n.restore()}function gn(n,e,t,i,s,{n:r=40,lump:a=.08}={}){const o=2+Math.floor(s()*3),l=s()*6.28,c=5+Math.floor(s()*3),h=s()*6.28,u=[];for(let f=0;f<r;f++){const d=f/r*Math.PI*2,g=1+a*(Math.sin(d*o+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*t*g,e+Math.sin(d)*i*g])}return u}function Eg(n,e=10){const t=[];for(let i=0;i<n.length-1;i++){const s=n[Math.max(0,i-1)],r=n[i],a=n[i+1],o=n[Math.min(n.length-1,i+2)];for(let l=0;l<e;l++){const c=l/e,h=c*c,u=h*c,f=d=>.5*(2*r[d]+(-s[d]+a[d])*c+(2*s[d]-5*r[d]+4*a[d]-o[d])*h+(-s[d]+3*r[d]-3*a[d]+o[d])*u);t.push([f(0),f(1)])}}return t.push(n[n.length-1].slice()),t}function Tg(){const[n,e]=Wn(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}function Cg(n,e="#ffd24a"){const[t,i]=Wn(80,80),s=gt(20+n),r=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?14:32;r.push([40+Math.cos(o)*l,42+Math.sin(o)*l])}return Wt(i,r,e),ht(i,r,s,{w:3.4,closed:!0,amp:.6}),t}const Rg=(n,e,t)=>{let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){const[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i};function Pg({W:n,H:e,ppu:t,outline:i,grassPts:s,regions:r,trail:a,pond:o,camp:l}){const[c,h]=Wn(n*t,e*t),u=gt(11),f=gt(12),d=(ce,ve)=>[(ce+n/2)*t,(ve+e/2)*t],g=()=>[-n/2+u()*n,-e/2+u()*e],[v,m,p,,A]=r;h.fillStyle=xt.sand,h.fillRect(0,0,c.width,c.height),ht(h,i.map(ce=>d(ce[0]*.985,ce[1]*.985)),f,{w:10,closed:!0,color:"#e0c792",amp:2});for(let ce=0;ce<260;ce++){const[ve,H]=d(...g());ht(h,[[ve,H],[ve+6,H-1]],f,{w:1.8,color:xt.sandEdge,amp:0})}const w=s.map(ce=>d(...ce));Wt(h,w,xt.grass),va(h,w,()=>{for(let ce=0;ce<46;ce++){const[ve,H]=d(...g());Wt(h,gn(ve,H,(1+u()*2.6)*t,(.6+u()*1.4)*t,u,{lump:.22}),u()<.5?xt.grassLight:xt.grassDark)}}),ht(h,w,f,{w:3.4,closed:!0,color:xt.grassEdge});const _=(ce,ve,H,ee,de,j)=>{const Ce=gn(...d(ce.x,ce.z),ve*t,H*t,gt(j),{n:60,lump:.1});return Wt(h,Ce,ee),ht(h,Ce,f,{w:3,closed:!0,color:de}),Ce},I=_(v,v.r*.95,v.r*.85,"#d9cdb0","#a8946a",21);va(h,I,()=>{for(let ce=0;ce<40;ce++){const ve=d(v.x,v.z)[0]+(u()-.5)*v.r*2*t,H=d(v.x,v.z)[1]+(u()-.5)*v.r*2*t,ee=3+u()*6,de=gn(ve,H,ee*1.3,ee,f,{n:12,lump:.1});Wt(h,de,"#c9bb98"),ht(h,de,f,{w:1.6,closed:!0,amp:.3})}}),_(m,m.r,m.r*.85,"#f0dcae",xt.sandEdge,22);const[C,T]=d(o.x,o.z),L=o.rx*t,b=o.rz*t,M=gn(C,T,L+.35*t,b+.32*t,gt(5),{n:60,lump:.1});Wt(h,M,xt.foam),ht(h,M,f,{w:3,color:xt.grassEdge,closed:!0});const R=gn(C,T,L,b,gt(5),{n:60,lump:.1});Wt(h,R,xt.water),Wt(h,gn(C+6,T+3,L*.65,b*.6,gt(5),{n:50,lump:.1}),xt.waterDeep),ht(h,R,f,{w:2.8,color:xt.waterInk,closed:!0});for(let ce=0;ce<5;ce++){const ve=C+(u()-.5)*L,H=T+(u()-.5)*b;ht(h,[[ve-8,H+2],[ve-3,H-2],[ve+3,H+1],[ve+8,H-3]],f,{w:2.2,color:"#e9f7fb",amp:0})}const B=_(p,p.r*.95,p.r*.8,"#eadfc4","#a8844f",23);va(h,B,()=>{const[ce,ve]=d(p.x,p.z),H=.9*t;for(let ee=-5;ee<=5;ee++){ht(h,[[ce-4*t,ve+ee*H],[ce+4*t,ve+ee*H+(u()-.5)*4]],f,{w:1.8,color:"#c4ab7c",amp:1});for(let de=-5;de<=5;de++){const j=ce+de*H*1.4+ee%2*H*.7;ht(h,[[j,ve+ee*H],[j,ve+(ee+1)*H]],f,{w:1.6,color:"#c4ab7c",amp:.5})}}}),_({x:l[0],z:l[1]},2.2,1.6,"#efd9a8",xt.sandEdge,24),_(A,2.2,1.8,"#efd9a8",xt.sandEdge,25);const G=Eg(a,16),q=[G[0]];for(let ce=1;ce<G.length;ce++){const[ve,H]=G[ce-1],[ee,de]=G[ce],j=Math.max(1,Math.ceil(Math.hypot(ee-ve,de-H)/.08));for(let Ce=1;Ce<=j;Ce++)q.push([ve+(ee-ve)*Ce/j,H+(de-H)*Ce/j])}let ie=0;for(let ce=1;ce<q.length;ce++){const[ve,H]=q[ce-1],[ee,de]=q[ce],j=Math.hypot(ee-ve,de-H),Ce=((ee-o.x)/(o.rx+.5))**2+((de-o.z)/(o.rz+.5))**2<1;ie+=j,ie%.6<.32&&!Ce&&(h.strokeStyle="#d0473f",h.lineWidth=6,h.lineCap="round",h.beginPath(),h.moveTo(...d(ve,H)),h.lineTo(...d(ee,de)),h.stroke())}const[$,ae]=d(A.x,A.z+.9),Y=.55*t;for(const[ce,ve]of[[[-Y,-Y*.7],[Y,Y*.7]],[[Y,-Y*.7],[-Y,Y*.7]]])ht(h,[[$+ce[0],ae+ce[1]],[$+ve[0],ae+ve[1]]],f,{w:15,amp:.4}),ht(h,[[$+ce[0],ae+ce[1]],[$+ve[0],ae+ve[1]]],f,{w:9,color:"#e0484f",amp:.4});const ye=(ce,ve,H)=>r.some(ee=>Math.hypot(ce-ee.x,ve-ee.z)<ee.r+H)||Math.hypot(ce-l[0],ve-l[1])<2.4+H,we=(ce,ve,H)=>Rg(ce,ve,s)&&!ye(ce,ve,H)&&!a.some(()=>!1),Re=(ce,ve,H)=>{for(let ee=0;ee<ce;ee++){const de=g();we(de[0],de[1],ve)&&H(...d(...de))}};return Re(1400,.1,(ce,ve)=>{const H=.15*t,ee=-1.15+(u()-.5)*.4,de=Math.cos(ee)*H,j=Math.sin(ee)*H;ht(h,[[ce,ve],[ce+de,ve+j]],f,{w:2,color:xt.grassTick,amp:0}),u()<.6&&ht(h,[[ce+5,ve+1],[ce+5+de,ve+1+j]],f,{w:2,color:xt.grassTick,amp:0})}),Re(80,.3,(ce,ve)=>{for(let H=-1;H<=1;H++){const ee=H*.5+(u()-.5)*.3,de=(.22+u()*.14)*t;ht(h,[[ce+H*4,ve],[ce+H*4+Math.sin(ee)*de*.8,ve-Math.cos(ee)*de*.6],[ce+H*4+Math.sin(ee)*de,ve-Math.cos(ee)*de]],f,{w:2.4,color:xt.grassEdge,amp:.3})}}),Re(22,.6,(ce,ve)=>{const H=3+Math.floor(u()*4),ee=u()<.5?"#fffdf6":"#f7c6d9";for(let de=0;de<H;de++){const j=ce+(u()-.5)*1.2*t,Ce=ve+(u()-.5)*.7*t;for(let ze=0;ze<5;ze++){const Ge=ze/5*6.28,Ye=gn(j+Math.cos(Ge)*5,Ce+Math.sin(Ge)*4,4.2,3.6,f,{n:10});Wt(h,Ye,ee),ht(h,Ye,f,{w:1.3,color:"#9a7a58",closed:!0,amp:.2})}h.fillStyle="#f5c84c",h.beginPath(),h.arc(j,Ce,2.6,0,7),h.fill()}}),c}function Lg(n){const[e,t]=Wn(256,256),i=gt(70),s=gt(71+n*5);t.fillStyle="#7cc6dc",t.fillRect(0,0,256,256);for(let r=0;r<7;r++)Wt(t,gn(i()*256,i()*256,30+i()*30,12+i()*12,i,{lump:.2}),"#70bdd6");for(let r=0;r<9;r++){const a=14+i()*228,o=14+i()*228;ht(t,[[a-11,o+2],[a-4,o-3],[a+3,o+1],[a+11,o-3]],s,{w:2.6,color:"#e6f6fa",amp:.8})}return e}function Ig(n,e,t=96){const i=n*e,[s,r]=Wn(i,t),a=gt(41),o=gt(42);r.fillStyle="#e3c48e",r.fillRect(0,0,i,t),r.fillStyle="#cfa872",r.fillRect(0,t*.62,i,t);for(let c=0;c<18;c++){const h=a()*i,u=16+a()*(t-30);ht(r,[[h,u],[h+18+a()*30,u+(a()-.5)*5]],o,{w:2,color:"#b88f5a",amp:1})}const l=[[0,0],[i,0]];for(let c=i;c>=0;c-=12)l.push([c,8+5*Math.abs(Math.sin(c*.13))+a()*3]);return Wt(r,l,xt.sand),ht(r,l.slice(2),o,{w:3,amp:.6}),s}function Dg(){const[n,e]=Wn(512,256),t=gt(93),i=gt(94);e.fillStyle="#e6cf9e",e.fillRect(0,0,512,256);for(let s=0,r=0;r<256;s++,r+=42)for(let a=s%2?0:-40;a<512;a+=96+i()*10){const o=[[a+4,r+4],[a+90,r+4],[a+90,r+39],[a+4,r+39]];Wt(e,o,i()<.35?"#efdcb2":"#e6cf9e"),ht(e,o,t,{w:2,closed:!0,color:"#a8844f",amp:.6})}return n}function Ug(n,e,t=8){const[i,s]=Wn(256,128),r=gt(8);for(let a=0;a<t;a++)s.fillStyle=a%2?n:e,s.fillRect(a*256/t,0,256/t,128);for(let a=1;a<t;a++)ht(s,[[a*256/t,0],[a*256/t,128]],r,{w:2,amp:.5});return i}function Ng(n){const[e,t]=Wn(110,90),i=gt(30+n*3),s=[[24,22],[86,22],[86,68],[24,68]];Wt(t,s,"#fbf3dc"),ht(t,s,i,{w:3,closed:!0,amp:.5});for(const r of[34,44,54])ht(t,[[34,r],[76,r]],i,{w:2,color:"#b58d5b",amp:.4});for(const r of[20,90]){const a=gn(r,45,8,27,i,{n:18,lump:.03});Wt(t,a,"#ecd9ae"),ht(t,a,i,{w:3,closed:!0,amp:.4})}return e}function Fg(n){const[e,t]=Wn(96,110),i=gt(50+n*7),s=gn(48,50,36,38,gt(51),{n:30,lump:.06});return Wt(t,s,"#fbf3dc"),ht(t,s,i,{w:3.6,closed:!0,amp:.6}),ht(t,[[34,38],[38,26],[52,22],[62,30],[60,42],[49,50],[48,60]],i,{w:7,color:"#c9483e",amp:.5}),t.fillStyle="#c9483e",t.beginPath(),t.arc(48,74,5,0,7),t.fill(),e}function kg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ot;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ql(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=ql(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ql(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new un(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);o.setComponent(f+u,g,v)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function nh(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let A=0,w=o.length;A<w;A++){const _=o[A],I=n.attributes[_];l[_]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);const C=n.morphAttributes[_];C&&(c[_]||(c[_]=[]),C.forEach((T,L)=>{const b=new T.array.constructor(T.count*T.itemSize);c[_][L]=new T.constructor(b,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let A=0;A<r;A++){const w=i?i.getX(A):A;let _="";for(let I=0,C=o.length;I<C;I++){const T=o[I],L=n.getAttribute(T),b=L.itemSize;for(let M=0;M<b;M++)_+=`${~~(L[u[M]](w)*v+m)},`}if(_ in t)h.push(t[_]);else{for(let I=0,C=o.length;I<C;I++){const T=o[I],L=n.getAttribute(T),b=n.morphAttributes[T],M=L.itemSize,R=l[T],B=c[T];for(let G=0;G<M;G++){const q=u[G],ie=f[G];if(R[ie](a,L[q](w)),b)for(let $=0,ae=b.length;$<ae;$++)B[$][ie](a,b[$][q](w))}}t[_]=a,h.push(a),a++}}const p=n.clone();for(const A in n.attributes){const w=l[A];if(p.setAttribute(A,new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)),A in c)for(let _=0;_<c[A].length;_++){const I=c[A][_];p.morphAttributes[A][_]=new I.constructor(I.array.slice(0,a*I.itemSize),I.itemSize,I.normalized)}}return p.setIndex(h),p}const Og=(()=>{const n=new $c(new Uint8Array([120,255]),2,1,Pr);return n.minFilter=n.magFilter=It,n.needsUpdate=!0,n})(),zg=(()=>{const n=new $c(new Uint8Array([205,255]),2,1,Pr);return n.minFilter=n.magFilter=It,n.needsUpdate=!0,n})(),_a=new Map;function $t(n,e={}){const t=n+JSON.stringify(e,(i,s)=>s&&s.isTexture?s.uuid:s);return _a.has(t)||_a.set(t,new yg({color:n,gradientMap:Og,...e})),_a.get(t)}const Fr=(n,e={})=>$t(n,{gradientMap:zg,...e});function Ai(n,e=!1){const t=new B0(n);return t.colorSpace=qt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=Es),t}const Bg=new N(0,1,0),Hg=new vt,ih=new hi,Io=new N,Nn=new N;function xn(n,e,t=ih.identity(),i=Io.set(1,1,1)){return n.clone().applyMatrix4(Hg.compose(e,t,i))}function Gg(n){return n=n.index?n.toNonIndexed():n,n.attributes.uv||n.setAttribute("uv",new at(new Float32Array(n.attributes.position.count*2),2)),n}function kn(n,e){return new ut(kg(n.map(Gg)),e)}const On=Math.PI*2,Ve={box:(n,e,t)=>new Vn(n,e,t),cyl:(n,e,t,i=10,s=!1)=>new Hn(n,e,t,i,1,s),sph:(n,e=12,t=9)=>new Gn(n,e,t),hemi:(n,e=14)=>new Gn(n,e,8,0,On,0,Math.PI/2),cone:(n,e,t=8)=>new us(n,e,t),tor:(n,e,t=On,i=16)=>new Lo(n,e,8,i,t),lathe:(n,e=16)=>new Ro(n.map(([t,i])=>new ge(t,i)),e),extrude:(n,e,t=[])=>{const i=new Ns(n.map(([r,a])=>new ge(r,a)));for(const r of t)i.holes.push(new uo(r.map(([a,o])=>new ge(a,o))));const s=new Po(i,{depth:e,bevelEnabled:!1,curveSegments:12});return s.translate(0,0,-e/2),s}},Vg=n=>typeof n=="number"?[n,n,n]:n;function He(n,e,{p:t=[0,0,0],r:i=[0,0,0],s=1,map:r,side:a,glow:o,basic:l,pale:c,flat:h}={}){const u={};r&&(u.map=r),a&&(u.side=a),h&&(u.flatShading=!0),o&&(u.emissive=o,u.emissiveIntensity=.55);const f=l?new Ft({color:e,map:r,side:a}):c?Fr(e,u):$t(e,u),d=new ut(n,f);return d.position.set(...t),d.rotation.set(...i),d.scale.set(...Vg(s)),d}function At(...n){const e=new hn;return e.add(...n.flat().filter(Boolean)),e}let Wg,Yl;const kr=()=>Wg||(Wg=Ai(Dg(),!0));function $g(n,e,t,i){const s=3+Math.floor(t()*3),r=new Gn(1,12,8);for(let a=0;a<s;a++){const o=a/s*On+t(),l=a===0?0:e*.55,c=e*(a===0?1:.62+t()*.2);i.push(xn(r,Nn.set(n.x+Math.cos(o)*l,n.y+(a===0?e*.12:0),n.z+Math.sin(o)*l),ih.identity(),Io.set(c,c*.5,c)))}}function lr(n){const e=gt(n),t=new hn,i=3.2+e()*.8,s=.5+e()*.5,r=6,a=[];let o=new N;for(let d=0;d<r;d++){const g=d/r,v=(d+1)/r,m=i/r,p=new N(s*g*g,g*i,0),A=new N(s*v*v,v*i,0),w=A.clone().sub(p).normalize(),_=new Hn(.13-v*.04,.16-g*.04,m*1.02,7);a.push(xn(_,p.clone().add(A).multiplyScalar(.5),new hi().setFromUnitVectors(Bg,w))),o=A}const l=[],c=new Gn(1,10,6,0,On,0,Math.PI/2),h=7;for(let d=0;d<h;d++){const g=c.clone().scale(.95,.16,.3).translate(.85,0,0).rotateZ(-.5-e()*.25).rotateY(d/h*On+e()*.4).translate(o.x,o.y,o.z);l.push(g)}const u=new Gn(.13,8,6),f=[0,2.1,4.2].map(d=>xn(u,Nn.set(o.x+Math.cos(d)*.16,o.y-.15,Math.sin(d)*.16)));return t.add(kn(a,$t(xt.trunk)),kn(l,$t(xt.leaf,{side:yt})),kn(f,$t("#9a6a3a"))),t.rotation.y=e()*On,t}function Zl(n,e=xt.leaf){const t=gt(n),i=[];return $g(new N(0,.3,0),.55,t,i),kn(i,$t(e))}function Xi(n,e,t="#d8c6a2"){const i=gt(n);let s=new Gn(.6,10,8);s.deleteAttribute("uv"),s.deleteAttribute("normal"),s=nh(s);const r=s.attributes.position;for(let o=0;o<r.count;o++){let l=r.getY(o);l<0&&(l*=.35);const c=1+(i()-.5)*.2;r.setXYZ(o,r.getX(o)*1.15*c,(l+.2)*1.2*c,r.getZ(o)*c)}s.computeVertexNormals();const a=new ut(s,$t(t,{flatShading:!0}));return a.scale.setScalar(e),a.rotation.y=i()*On,a}function Jl(n){const e=gt(n),t=[],i=4+Math.floor(e()*2),s=new us(.1,.7,5);s.translate(0,.35,0);for(let r=0;r<i;r++){const a=r/i*On+e(),o=.25+e()*.35,l=new hi().setFromEuler(new yn(Math.sin(a)*o,0,-Math.cos(a)*o));t.push(xn(s,Nn.set(Math.cos(a)*.08,0,Math.sin(a)*.08),l,Io.set(1,.7+e()*.6,1)))}return kn(t,$t(xt.leafLight))}function _s(n,e,t,i,s=0){const r=gt(i);let a=new us(n,e,t,4);a.deleteAttribute("uv"),a.deleteAttribute("normal"),a=nh(a);const o=a.attributes.position;for(let l=0;l<o.count;l++){const c=o.getY(l),h=(c+e/2)/e;if(h>.98)continue;const u=1+(r()-.5)*.22;o.setXYZ(l,o.getX(l)*u,c+(h>.02?(r()-.5)*.18:0),o.getZ(l)*u)}return a.translate(0,e/2+s,0),a.computeVertexNormals(),a}function Xg(){const n="#b9acd8",e="#f7f4fb",t=new hn,i=[_s(2.7,5.4,7,3),xn(_s(1.7,3.3,6,4),Nn.set(-1.9,0,.7)),xn(_s(1.5,2.6,6,5),Nn.set(1.8,0,.9))];t.add(kn(i,$t(n,{flatShading:!0})));const s=[xn(_s(.98,1.75,7,6),Nn.set(0,3.72,0)),xn(_s(.55,1.05,6,7),Nn.set(-1.9,2.28,.7))];t.add(kn(s,Fr(e,{flatShading:!0})));const r=new ut(new Dr(.62,16,0,Math.PI),new Ft({color:"#3d2c46"}));r.position.set(.25,.02,2.02),r.rotation.x=-.42;const a=He(Ve.tor(.66,.14,Math.PI,12),"#a597c9",{p:[.25,.02,2.04],r:[-.42,0,0]}),o=He(Ve.cyl(.03,.03,.9,5),"#8a5d33",{p:[0,5.7,0]}),l=He(Ve.extrude([[0,0],[.55,-.14],[0,-.3]],.03),"#e0484f",{p:[.02,6.1,0]});return l.userData.wave=!0,t.add(r,a,o,l),t}function jl(){Yl||(Yl=Ai(Ug("#f3ead6","#e8584e"),!0));const n=new hn,e=new ut(new us(1.1,1.5,6,1),$t("#ffffff",{map:Yl,flatShading:!0}));e.position.y=.75;const t=new ut(new Dr(.34,10,0,Math.PI),new Ft({color:"#5b3520"}));t.position.set(0,.02,.95),t.rotation.x=-.6;const i=He(Ve.cyl(.03,.03,.4,5),"#8a5d33",{p:[0,1.65,0]});return n.add(e,t,i),n}function qg(n=1){const e=He(Ve.sph(1,16,10),"#efd9a6",{s:[1.6*n,.45*n,1.1*n],pale:!0});return e.position.y=-.05,e}function Kl(n="#d98a58"){return At(He(Ve.lathe([[0,0],[.18,.02],[.26,.2],[.22,.42],[.1,.5],[.12,.58],[0,.58]],12),n))}function Yg(){const n=Ve.lathe([[.55,0],[.62,0],[.62,.55],[.48,.55],[.48,.1]],16);return At(He(n,"#e6cf9e",{map:kr()}),He(Ve.cyl(.48,.48,.02,16),"#61b4d2",{p:[0,.4,0],basic:!0}),He(Ve.cyl(.04,.04,1.3,5),"#8a5d33",{p:[-.56,.65,0]}),He(Ve.cyl(.04,.04,1.3,5),"#8a5d33",{p:[.56,.65,0]}),He(Ve.cone(.85,.5,4),"#c9483e",{p:[0,1.45,0],r:[0,Math.PI/4,0],flat:!0}))}function cr(n=2.2,e=!1){const t=At(He(Ve.box(.62,.18,.62),"#efdcb2",{p:[0,.09,0]}),He(Ve.cyl(.21,.24,n,10),"#f1e2bf",{p:[0,n/2+.18,0]}));return e?t.add(He(Ve.cyl(.21,.21,.55,10),"#f1e2bf",{p:[.55,.21,.35],r:[Math.PI/2,.6,0]})):t.add(He(Ve.box(.6,.18,.6),"#efdcb2",{p:[0,n+.27,0]})),t}function Zg(){const s=[],r=[[-.6,0],[.6,0],[.6,1.4]];for(let u=1;u<16;u++){const f=u/16*Math.PI;r.push([Math.cos(f)*.6,2.5-1.1+Math.sin(f)*.6])}r.push([-.6,2.5-1.1]),s.push(r.reverse());const a=[[-2.2/2,0],[2.2/2,0],[2.2/2,2.5],[-2.2/2,2.5]],o=Ve.extrude(a,.45,s),l=kr(),c=new ut(o,$t("#ffffff",{map:l})),h=o.attributes.uv;for(let u=0;u<h.count;u++)h.setXY(u,h.getX(u)*.5,h.getY(u)*.5);return At(c,He(Ve.box(2.2+.2,.2,.45+.15),"#efdcb2",{p:[0,2.5+.1,0]}))}function Jg(n=2.4,e=1.2){const t=new Vn(n,e,.4),i=t.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*n/2.4,i.getY(r)*e/1.2);const s=new ut(t,$t("#ffffff",{map:kr()}));return s.position.y=e/2,At(s,He(Ve.box(n+.1,.12,.5),"#efdcb2",{p:[0,e+.06,0]}))}function jg(){const n=new Vn(1.8,1.4,1.8),e=new ut(n,$t("#ffffff",{map:kr()}));return e.position.y=.7,At(e,He(Ve.box(1.95,.14,1.95),"#efdcb2",{p:[0,1.47,0]}),He(Ve.hemi(.78,16),"#8fc7e8",{p:[0,1.54,0]}),He(Ve.cyl(.05,.05,.3,5),"#f5cf5f",{p:[0,2.45,0]}),He(Ve.sph(.09,8,6),"#f5cf5f",{p:[0,2.62,0]}),He(Ve.extrude([[-.28,0],[.28,0],[.28,.6],[0,.85],[-.28,.6]],.06),"#8a5d33",{p:[0,0,.91]}))}function Kg(){return At(He(Ve.box(1.6,.16,.5),"#efdcb2",{p:[0,.08,.5]}),He(Ve.box(1.6,.32,.5),"#e6cf9e",{p:[0,.16,0]}),He(Ve.box(1.6,.48,.5),"#efdcb2",{p:[0,.24,-.5]}))}function Qg(n=4){const e=[],t=[],i=new Vn(.34,.1,1.3),s=new Hn(.07,.07,1.1,6);for(let r=0;r<n/.38;r++)e.push(xn(i,Nn.set(r*.38,.1,0)));for(let r=0;r<=n;r+=1.3)for(const a of[-.62,.62])t.push(xn(s,Nn.set(r,-.25,a)));return At(kn(e,$t("#c98f55")),kn(t,$t("#a8754a")))}function ev(){const n=Ve.extrude([[-1.1,.45],[1.25,.5],[.85,0],[-.8,0]],.8),e=new ut(new Nr(new Ns([new ge(-.05,0),new ge(1,0),new ge(-.05,1.7)])),Fr("#fbf3dc",{side:yt}));return e.position.set(.05,.62,.02),At(He(n,"#e8584e"),He(Ve.box(2.1,.06,.78),"#c98f55",{p:[.05,.42,0]}),He(Ve.cyl(.04,.05,2.1,6),"#8a5d33",{p:[0,1.4,0]}),He(Ve.extrude([[0,0],[.4,-.1],[0,-.22]],.02),"#f5cf5f",{p:[.02,2.4,0]}),e)}function tv(){const n=[];for(let e=0;e<4;e++)n.push(He(Ve.cyl(.52-(e+1)*.06,.52-e*.06,.7,12),e%2?"#e8584e":"#fbf3dc",{p:[0,.35+e*.7,0]}));return At(He(Ve.cyl(.7,.8,.3,12),"#d8c6a2",{p:[0,.15-.2,0]}),...n.map(e=>(e.position.y+=.1,e)),He(Ve.cyl(.42,.42,.1,12),"#5b3520",{p:[0,2.95,0]}),He(Ve.cyl(.3,.3,.5,12),"#fff3a6",{p:[0,3.25,0],basic:!0}),He(Ve.cone(.45,.55,12),"#e8584e",{p:[0,3.78,0]}))}function nv(){return At(He(Ve.sph(.22,10,8),"#f5a65b",{s:[1.4,.9,.6]}),He(Ve.cone(.18,.3,4),"#f5a65b",{p:[-.38,0,0],r:[0,0,Math.PI/2],s:[1,1,.3]}))}function Ql(n=1){return At(He(Ve.box(.7*n,.7*n,.7*n),"#c98f55",{p:[0,.35*n,0]}),He(Ve.box(.74*n,.1*n,.74*n),"#dba46a",{p:[0,.55*n,0]}))}function iv(){const n=[];for(let e=0;e<=8;e++)n.push([.26+Math.sin(e/8*Math.PI)*.06,e/8*.75]);return n.push([0,.75]),At(He(Ve.lathe(n,14),"#c98a4d"),He(Ve.cyl(.33,.33,.06,14,!0),"#b3aec6",{p:[0,.18,0],side:yt}),He(Ve.cyl(.33,.33,.06,14,!0),"#b3aec6",{p:[0,.57,0],side:yt}))}function sv(){const n=Ve.lathe([[0,0],[.35,.05],[.45,.3],[.44,.36]],12);return n.scale(1,1,2.4),At(He(n,"#c98a4d",{side:yt}),He(Ve.box(.8,.06,.22),"#a8754a",{p:[0,.28,0]}),He(Ve.cyl(.03,.03,1.4,5),"#8a5d33",{p:[.2,.34,.1],r:[Math.PI/2,0,.3]}))}function rv(){const n=Ve.extrude([[-.5,-.17],[.45,-.17],[.62,0],[.45,.17],[-.5,.17]],.06);return At(He(Ve.cyl(.05,.06,1.3,6),"#a8754a",{p:[0,.65,0]}),He(n,"#e8c58f",{p:[.1,1.05,0]}),He(n,"#e8c58f",{p:[-.1,.72,0],r:[0,Math.PI,0]}))}function av(){const n=[0,1.1,2.2].map(i=>He(Ve.cyl(.06,.06,.6,6),"#8a5d33",{p:[0,.08,0],r:[Math.PI/2,i,0]})),e=He(Ve.cone(.16,.42,6),"#f5a64b",{p:[0,.3,0],basic:!0});e.userData.flicker=!0;const t=[];for(let i=0;i<7;i++){const s=i/7*On;t.push(He(Ve.sph(.09,6,5),"#d8c6a2",{p:[Math.cos(s)*.4,.05,Math.sin(s)*.4]}))}return At(...n,e,...t)}function ov(){const i="#f5cf5f",s=At(He(Ve.box(1.3,.7,.85),"#c98a4d",{p:[0,.35,0]}),...[-.42,.42].map(h=>He(Ve.box(.12,.72,.89),i,{p:[h,.35,0]})),He(Ve.box(.26,.26,.06),i,{p:[0,.6,.45499999999999996]})),r=He(Ve.box(1.3-.1,.02,.85-.1),"#fff3a6",{p:[0,.7-.02,0],basic:!0}),a=new Hn(.85/2,.85/2,1.3,14,1,!1,0,Math.PI);a.rotateZ(Math.PI/2),a.rotateX(Math.PI/2);const o=At(He(a,"#b77c45",{p:[0,0,.85/2]}),...[-.42,.42].map(h=>He(new Hn(.85/2+.02,.85/2+.02,.12,14,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2),i,{p:[h,0,.85/2]}))),l=new hn;l.position.set(0,.7,-.85/2),l.add(o);const c=At(s,r,l);return c.userData.lid=l,c.userData.glow=r,c}const lv=new Gn(1,14,10);function cv(n){return new ut(lv,Fr(n))}const hv=new dn({side:yt,vertexShader:`
    varying vec3 vN; varying float vDepth;
    void main() {
      vN = normalize(normalMatrix * normal);
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vDepth = -mv.z;
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    varying vec3 vN; varying float vDepth;
    void main() {
      vec3 n = normalize(vN) * (gl_FrontFacing ? 1.0 : -1.0);
      gl_FragColor = vec4(n.xy * 0.5 + 0.5, vDepth / 200.0, 1.0);
    }`}),uv=new dn({side:yt,uniforms:{map:{value:null}},vertexShader:`
    varying vec2 vUv; varying float vDepth;
    void main() {
      vUv = uv;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vDepth = -mv.z;
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    uniform sampler2D map; varying vec2 vUv; varying float vDepth;
    void main() {
      if (texture2D(map, vUv).a < 0.5) discard;
      gl_FragColor = vec4(0.5, 0.5, vDepth / 200.0, 0.5);
    }`}),qi=new dn({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new ge},seed:{value:0},lineW:{value:1.3},ink:{value:new tt(eh)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    uniform sampler2D tColor, tND; uniform vec2 texel; uniform float seed, lineW; uniform vec3 ink;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
    }
    vec3 normalOf(vec4 s) { vec2 xy = s.rg * 2.0 - 1.0; return vec3(xy, sqrt(max(0.0, 1.0 - dot(xy, xy)))); }
    float depthOf(vec4 s) { return s.a < 0.25 ? 1.0 : s.b; }
    float edgeWith(vec4 c, vec2 uv) {
      vec4 s = texture2D(tND, uv);
      if (abs(c.a - 0.5) < 0.1 || abs(s.a - 0.5) < 0.1) return 0.0;      // drawn sprites carry their own ink
      if (c.a < 0.25 && s.a < 0.25) return 0.0;                          // sky
      float dd = abs(depthOf(c) - depthOf(s)) * 200.0;                    // back to world units
      float de = smoothstep(0.18, 0.32, dd);
      if (c.a < 0.25 || s.a < 0.25) return de;
      float nd = 1.0 - dot(normalOf(c), normalOf(s));
      return max(de, smoothstep(0.22, 0.34, nd));
    }
    void main() {
      vec2 px = vUv / texel;
      vec2 wob = vec2(noise(px / 38.0 + seed), noise(px / 38.0 + seed + 19.7)) - 0.5;
      vec2 uv = vUv + wob * texel * 3.5 * lineW;
      float r = lineW * (0.55 + 0.9 * noise(px / 22.0 + seed * 3.1));
      vec4 c = texture2D(tND, uv);
      float e = 0.0;
      e = max(e, edgeWith(c, uv + vec2(texel.x, 0.0) * r));
      e = max(e, edgeWith(c, uv - vec2(texel.x, 0.0) * r));
      e = max(e, edgeWith(c, uv + vec2(0.0, texel.y) * r));
      e = max(e, edgeWith(c, uv - vec2(0.0, texel.y) * r));
      e = max(e, 0.7 * edgeWith(c, uv + texel * r * 0.7));
      e = max(e, 0.7 * edgeWith(c, uv - texel * r * 0.7));
      vec4 col = texture2D(tColor, vUv);
      gl_FragColor = vec4(mix(col.rgb, ink, e), 1.0);
      #include <colorspace_fragment>
    }`});function dv(n){const e=new Bn(1,1,{samples:4,type:Ci}),t=new Bn(1,1,{type:Ci,minFilter:It,magFilter:It}),i=new ut(new ri(2,2),qi),s=new Wc;s.add(i);const r=new Rs(-1,1,1,-1,0,1),a=new ge,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),qi.uniforms.texel.value.set(1/a.x,1/a.y),qi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,u);const d=h.background;h.background=null,h.traverse(v=>{if(!(!v.isMesh||!v.visible)){if(v.userData.noInk){v.visible=!1,o.push([v,null]);return}o.push([v,v.material]),v.userData.sprite?(v.material=uv,v.onBeforeRender=pv):v.material=hv}});const g=n.getClearAlpha();n.getClearColor(ec),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,u),n.setClearColor(ec,g);for(const[v,m]of o)m?(v.material=m,v.onBeforeRender=fv):v.visible=!0;o.length=0,h.background=d,qi.uniforms.tColor.value=e.texture,qi.uniforms.tND.value=t.texture,qi.uniforms.seed.value=f,n.setRenderTarget(null),n.render(s,r)}return{render:c,setSize:l}}const ec=new tt,fv=()=>{};function pv(n,e,t,i,s){s.uniforms.map.value=this.userData.colorMap(),s.uniformsNeedUpdate=!0}const Yi={a:14,b:10},Bt=[-8.6,6.1],Pt=[{id:"mountain",name:"Mystery Mountain",icon:"⛰️",x:-8,z:-3.2,r:3.6,top:6.5},{id:"oasis",name:"The Oasis",icon:"🌴",x:0,z:-5.6,r:3.5,top:4},{id:"city",name:"Ancient City",icon:"🏛️",x:8,z:-3.4,r:3.6,top:3.2},{id:"sea",name:"The Sea",icon:"🌊",x:9.6,z:4.8,r:3.8,top:4},{id:"treasure",name:"Treasure Hill",icon:"🗝️",x:0,z:1.8,r:3,top:3}],mv={x:1.2,z:-5.9,rx:1.5,rz:.95},mo=wu.degToRad(56),tc=1/Math.cos(mo),gv=7,Do=3;async function vv(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const s=document.createElement("canvas");return s.width=e,s.height=t,s.getContext("2d").drawImage(i,0,0,e,t),s}function Qn(n,e,t,i){return Promise.all(Array.from({length:Do},(s,r)=>{let a=n.replace(/seed="\d+"/,`seed="${r*17+3}"`);return i&&(a=a.replace("</svg>",`<style>.pose${i==="A"?"B":"A"}{display:none}</style></svg>`)),vv(a,e,t).then(o=>Ai(o))}))}const hr=n=>Array.from({length:Do},(e,t)=>Ai(n(t))),nc=n=>1+2.7*(n-1)**3+1.7*(n-1)**2,ic=n=>n<.5?2*n*n:1-(-2*n+2)**2/2;function _v(n,e,t,i,s){const r=[],a=[],o=[];let l=0;for(let h=0;h<=n.length;h++){const[u,f]=n[h%n.length];if(h){const[d,g]=n[h-1];l+=Math.hypot(u-d,f-g)}if(r.push(u,e,f,u,t,f),a.push(l/s,1,l/s,0),h){const d=(h-1)*2;o.push(d,d+1,d+2,d+1,d+3,d+2)}}const c=new Ot;return c.setAttribute("position",new at(r,3)),c.setAttribute("uv",new at(a,2)),c.setIndex(o),c.computeVertexNormals(),new ut(c,new Ft({map:i,side:yt}))}function xa(n,e,t,i){const s=new Nr(new Ns(n.map(([a,o])=>new ge(a,-o))));if(i){const a=s.attributes.position,o=s.attributes.uv;for(let l=0;l<a.count;l++)o.setXY(l,(a.getX(l)-i.minX)/(i.maxX-i.minX),1-(-a.getY(l)-i.minZ)/(i.maxZ-i.minZ))}const r=new ut(s,t);return r.rotation.x=-Math.PI/2,r.position.y=e,r}async function xv(n){const e=new Wc,t=new Rs(-1,1,1,-1,.1,300),i=dv(n),s=[],r=[],a=[],o=[],l=[],c=[];e.background=new tt("#7cc6dc"),e.add(new Mg(16777215,15985368,1.9));const h=new wg(16777215,1.3);h.position.set(-9,6,4),e.add(h);const u=[];for(let P=0;P<120;P++){const D=P/120*Math.PI*2,te=Math.cos(D),_e=Math.sin(D),Se=1+.018*Math.sin(D*7+1)+.012*Math.sin(D*13);u.push([Yi.a*Se*Math.sign(te)*Math.abs(te)**(1/3),Yi.b*Se*Math.sign(_e)*Math.abs(_e)**(1/3)])}const f=gt(5),d=u.map(([P,D],te)=>{const _e=.84+.025*Math.sin(te*.4)+(f()-.5)*.01;return[P*_e,D*_e]}),g=P=>u.map(([D,te])=>[D*P,te*P]),v=(P,D,te=0)=>(Math.abs(P)/(Yi.a-te))**6+(Math.abs(D)/(Yi.b-te))**6<1,m=hr(Lg).map(P=>(P.wrapS=P.wrapT=Es,P.repeat.set(40,40),P)),p=new Ft({map:m[0]});s.push({mat:p,frames:m});const A=new ut(new ri(320,320),p);A.rotation.x=-Math.PI/2,A.position.y=-.55,e.add(A),e.add(xa(g(1.16),-.53,new Ft({color:"#9ad8e6"}))),e.add(xa(g(1.045),-.52,new Ft({color:"#f3f6ea"})));const w=[Bt,...Pt.map(P=>[P.x,P.z])],_=Ai(Pg({W:30,H:22,ppu:44,outline:u,grassPts:d,regions:Pt,trail:w,pond:mv,camp:Bt}));_.anisotropy=n.capabilities.getMaxAnisotropy(),e.add(xa(u,0,new Ft({map:_}),{minX:-15,maxX:15,minZ:-11,maxZ:11})),e.add(_v(u,0,-.9,Ai(Ig(6,60),!0),6));const I=new Ft({map:Ai(Tg()),transparent:!0,depthWrite:!1}),C=new ri(1,1).rotateX(-Math.PI/2);function T(P,D,te,_e,Se=_e*.5,Me=0){const ue=new ut(C,I);return ue.position.set(D,Me+.015,te),ue.scale.set(_e,1,Se),ue.renderOrder=1,ue.userData.noInk=!0,P.add(ue),ue}const L=(P,D,te,_e,{s:Se=1,sy:Me=Se,rot:ue=0,sh:be=0,y:ft=0}={})=>(D.position.x=te,D.position.z=_e,D.position.y+=ft,D.scale.multiply(new N(Se,Me,Se)),D.rotation.y+=ue,P.add(D),be&&T(P,te,_e+.1,be,be*.5,ft),D),b=new hn;e.add(b),L(b,jl(),Bt[0]-1.1,Bt[1]-.7,{rot:.4,sh:2.4}),L(b,av(),Bt[0]+.5,Bt[1]+.4,{sh:1}),L(b,sv(),-11.1,7.6,{rot:.9,sh:1.6}),L(b,rv(),Bt[0]+2.1,Bt[1]-1.1,{rot:-.3,sh:.8}),[[-12,2],[-11.3,-6.5],[-4.2,-8.6],[4.6,-8.7],[12.2,-5.6],[12.6,-.4],[4.6,7.9],[-4.4,8.4],[-13,-1.8],[5.8,1]].forEach(([P,D],te)=>{const _e=L(b,lr(100+te*7),P,D,{s:.95,sy:1.25,sh:1.5});a.push({m:_e,k:te})}),[[-4,4.5],[4.5,-.5],[-3.6,-1.8],[3.8,5.8],[-12,4.4],[2.6,-1.8],[-1.8,6.2],[6,7.5]].forEach(([P,D],te)=>L(b,Zl(300+te,te%3?"#83c47b":"#93c886"),P,D,{s:1+te%3*.2,sh:1.2})),[[-5.2,1.6,.9],[4.2,2.8,.7],[-2.6,-2.8,.6],[12.4,-7,1],[-13.3,5,.8],[1.3,8.9,.8]].forEach(([P,D,te],_e)=>L(b,Xi(500+_e,te),P,D,{sh:1.5*te}));{const P=gt(900);let D=0;for(let te=0;te<400&&D<30;te++){const _e=(P()-.5)*24,Se=(P()-.5)*16;!v(_e,Se,2.4)||Pt.some(Me=>Math.hypot(Me.x-_e,Me.z-Se)<Me.r+.6)||Math.hypot(_e-Bt[0],Se-Bt[1])<2.8||(L(b,Jl(3e3+D),_e,Se,{s:.8+P()*.5,rot:P()*6}),D++)}}const R=Pt.map(P=>({...P,g:new hn,items:[],fog:[],revealed:!1,q:null})),B=(P,D,te,_e,Se={})=>{const Me=L(P.g,D,P.x+te,P.z+_e,Se);return P.items.push({m:Me,s:Me.scale.clone()}),Me};let G,q,ie;{const[P,D,te,_e,Se]=R;B(P,Xg(),0,-.5,{sh:5}),B(P,Xi(601,.9,"#c9bde0"),2.4,1.3,{sh:1.4}),B(P,Xi(602,.6,"#c9bde0"),-2.5,1.6,{sh:1}),B(P,Zl(603,"#5c9d5f"),-2.9,-.2,{sh:1}),B(P,Jl(604),1.2,2.4),[[3.1,.9],[-.9,-2],[3.2,-1.7],[-2.7,-.9]].forEach(([Me,ue],be)=>a.push({m:B(D,lr(700+be*3),Me,ue,{s:1,sy:1.2,sh:1.5}),k:be+3})),B(D,jl(),-1.9,.9,{rot:-.3,sh:2.2}),B(D,Yg(),-.3,2.1,{sh:1.4}),B(D,Kl(),-3,1.9,{sh:.5}),B(D,Kl("#e8b06a"),-2.7,2.3,{s:.8,sh:.4}),B(D,qg(.8),2.4,2.2),B(te,Zg(),0,-.8,{sh:2.6}),B(te,Kg(),0,.5),B(te,cr(2.2),-2.2,-1.2,{sh:.8}),B(te,cr(2.2),2.2,-1.2,{sh:.8}),B(te,cr(1.1,!0),-2.4,1.2,{sh:.8}),B(te,cr(1.6,!0),2.4,1.3,{sh:.8}),B(te,jg(),1.8,-2.7,{sh:2.4}),B(te,Jg(2.2,1.1),-1.7,-2.6,{sh:2.2}),B(_e,Qg(4.2),2.8,.6,{y:-.12}),ie=B(_e,ev(),5.2,2.9,{rot:-.25,y:-.45}),B(_e,tv(),1.6,-2.2,{sh:1.6}),B(_e,Ql(),1.4,1.2,{rot:.4,sh:.9}),B(_e,iv(),.6,1.8,{sh:.7}),B(_e,Ql(.8),1.9,1.9,{rot:1,sh:.8}),B(_e,Xi(801,.8),5.6,-1.4,{y:-.4}),B(_e,Xi(802,.6),6.5,-.7,{y:-.4}),q=B(_e,nv(),6.2,-2.6,{y:-.6}),G=B(Se,ov(),0,.8,{rot:0,sh:1.8}),B(Se,lr(901),-2.1,-.9,{sy:1.2,sh:1.5}),B(Se,lr(902),2.2,-.6,{sy:1.2,sh:1.5});for(let Me=0;Me<9;Me++){const ue=Me/9*Math.PI*2;B(Se,Xi(910+Me,.28),Math.cos(ue)*1.6,.8+Math.sin(ue)*1.15)}}for(const P of R)e.add(P.g);e.traverse(P=>{P.userData.wave&&l.push(P),P.userData.flicker&&c.push(P)});function $(P,D,te,_e,Se,Me,ue){const be=ue||new Ft({map:P[0],alphaTest:.5,alphaToCoverage:!0,side:yt});ue||s.push({mat:be,frames:P});const ft=new ri(D,te*tc);ft.translate(0,te*tc/2,0);const zt=new ut(ft,be);return zt.position.set(_e,Se,Me),zt.userData.sprite=!0,zt.userData.colorMap=()=>be.map,e.add(zt),r.push(zt),zt}const ae=hr(Fg);for(const P of R){const D=gt(1200+P.x*7+P.z*13),te=24,_e=12;for(let Se=0;Se<te;Se++){const Me=Se>=_e,ue=Me?(Se-_e)/(te-_e)*Math.PI*2+D()*.3:D()*Math.PI*2,be=Me?P.r*(.82+D()*.12):Math.sqrt(D())*P.r*.62,ft=(Me?.72:.95)+D()*.4,zt=(1-be/P.r)*(P.top*.32)+.25,St=cv(D()<.3?"#efe2c6":"#f7eedb");St.position.set(P.x+Math.cos(ue)*be,zt,P.z+Math.sin(ue)*be*.85),St.scale.set(ft,ft*.62,ft),St.userData.base=St.position.clone(),St.userData.s=ft,St.userData.k=D()*6,e.add(St),P.fog.push(St)}P.q=$(ae,.9,1,P.x,P.top*.32+1.3,P.z)}const[Y,ye,we,Re,ce,ve,H,ee]=await Promise.all([Qn(Sa,200,240,"A"),Qn(Sa,200,240,"B"),Qn(ba,200,240,"A"),Qn(ba,200,240,"B"),Qn(Mr,200,300,"A"),Qn(Mr,200,300,"B"),Qn(Sr,200,300,"A"),Qn(Sr,200,300,"B")]),de=[{id:"baba",A:H,B:ee,w:1.25,h:1.9,off:[-.95,-.35]},{id:"mama",A:ce,B:ve,w:1.25,h:1.9,off:[.95,-.4]},{id:"girl",A:Y,B:ye,w:1.05,h:1.26,off:[-.35,.45]},{id:"boy",A:we,B:Re,w:1.05,h:1.26,off:[.55,.5]}].map(P=>(P.mat=new Ft({map:P.A[0],alphaTest:.5,alphaToCoverage:!0,side:yt}),P.mesh=$(null,P.w,P.h,0,0,0,P.mat),P.shadow=T(e,0,0,.9),P.icon=P.A[0].image,P)),j={x:Bt[0],z:Bt[1],facing:1,walking:!1,walkT:0};function Ce(P){for(const D of de){const te=D.id==="girl"||D.id==="boy"||P==="both"||P==="Baba"&&D.id==="baba"||P==="Mama"&&D.id==="mama";D.mesh.visible=te,D.shadow.visible=te}}Ce("both");const ze=[[-7.2,.4],[-2.6,-3.3],[7.2,.1],[7.6,6.8],[-2.6,4.4]],Ge=hr(P=>Cg(P)),Ye=hr(Ng),oe=new Ft({map:Ge[0],alphaTest:.5,side:yt}),pe=new Ft({map:Ye[0],alphaTest:.5,side:yt});s.push({mat:oe,frames:Ge},{mat:pe,frames:Ye});const y=[];function z(P,D,te,_e=8,Se=2.4){for(let Me=0;Me<_e;Me++){const ue=Me/_e*Math.PI*2+Math.random(),be=$(null,.4,.4,P,D,te,oe);y.push({m:be,vx:Math.cos(ue)*Se,vz:Math.sin(ue)*Se*.6,vy:3+Math.random()*2,g:9,t:0,life:.9})}}function U(P,D,te,_e=6){for(let Se=0;Se<_e;Se++){const Me=$(null,.75,.6,P,D,te,Se%2?pe:oe);y.push({m:Me,vx:(Math.random()-.5)*.9,vz:(Math.random()-.5)*.4,vy:1.8+Se*.25,g:0,t:-Se*.25,life:2.4})}}const K=new ut(new Hn(.9,.5,5,16,1,!0),new Ft({color:"#fff3a6",transparent:!0,opacity:0,depthWrite:!1,side:yt,blending:wa}));K.userData.noInk=!0,K.position.set(Pt[4].x,3.1,Pt[4].z+.8),K.visible=!1,e.add(K);function J(P,D,te=0){return new Promise(_e=>o.push({t:-te,dur:P,fn:D,resolve:_e}))}const W={yaw:0,yawT:0,zoom:1,zoomT:1,tx:0,tz:.8,ttx:0,ttz:.8,aspect:1.6,W:1,H:1,insetX:0,insetY:0,iX:0,iY:0};function fe(){return W.aspect>=1?Math.max(9.4,15.6/W.aspect):Math.max(9.4,10.5/W.aspect)}function E(P){const D=P===void 0?1:1-Math.exp(-P*3.2);W.yaw+=(W.yawT-W.yaw)*(P===void 0?1:1-Math.exp(-P*6)),W.zoom+=(W.zoomT-W.zoom)*D,W.tx+=(W.ttx-W.tx)*D,W.tz+=(W.ttz-W.tz)*D,W.iX+=(W.insetX-W.iX)*D,W.iY+=(W.insetY-W.iY)*D;const te=fe()*W.zoom,_e=te*W.aspect;Object.assign(t,{left:-_e,right:_e,top:te,bottom:-te}),t.setViewOffset(W.W,W.H,W.iX/2,W.iY/2,W.W,W.H),t.updateProjectionMatrix();const Se=60,Me=Math.cos(mo);t.position.set(W.tx+Math.sin(W.yaw)*Me*Se,Math.sin(mo)*Se,W.tz+Math.cos(W.yaw)*Me*Se),t.lookAt(W.tx,0,W.tz)}function x(P,D){W.aspect=P/D,W.W=P,W.H=D,E()}function V(P,D=.6){if(P==null){W.ttx=0,W.ttz=.8,W.zoomT=1;return}const te=Pt[P];W.ttx=te.x,W.ttz=te.z+.4,W.zoomT=D}const se=(P,D)=>{W.insetX=P,W.insetY=D},he=P=>{W.yawT+=P*(Math.PI/4)};function re(P,D){P.revealed=D,P.g.visible=D;for(const te of P.items)te.m.scale.copy(te.s);for(const te of P.fog)te.visible=!D,te.position.copy(te.userData.base),te.scale.set(te.userData.s,te.userData.s*.62,te.userData.s);P.q.visible=!D}let Ue=0;function Ae(P,{chestOpened:D=!1}={}){R.forEach((Se,Me)=>re(Se,Me<P));const[te,_e]=P>0?ze[P-1]:Bt;j.x=te,j.z=_e,j.walking=!1,Ue=D?1:0,Le(),K.visible=D,K.material.opacity=D?.35:0}function Le(){G.userData.lid.rotation.x=-1.95*Ue,G.userData.glow.visible=Ue>.05}function Qe(P){const[D,te]=P<0?Bt:ze[P],_e=j.x,Se=j.z,Me=Math.hypot(D-_e,te-Se);return Me<.1?Promise.resolve():(j.walking=!0,J(Math.min(2.6,.5+Me/6),ue=>{const be=ic(ue);j.x=_e+(D-_e)*be,j.z=Se+(te-Se)*be,ue>=1&&(j.walking=!1)}))}async function me(P){const D=R[P];if(D.revealed)return;V(P,P===0?.7:.62),await Qe(P),D.revealed=!0,D.q.visible=!1,z(D.x,D.top*.6,D.z,12,3.4);const te=Promise.all(D.fog.map(Se=>{const Me=Se.userData.base,ue=Me.x-D.x,be=Me.z-D.z,ft=Math.hypot(ue,be)||1,zt=Se.userData.s,St=ft/D.r*.35;return J(1.1,Sn=>{const fn=ic(Sn);Se.position.set(Me.x+ue/ft*fn*3.2,Me.y+fn*1.8,Me.z+be/ft*fn*2.4);const bn=Math.max(.001,zt*(1+fn*.3)*(1-fn));Se.scale.set(bn,bn*.62,bn),Sn>=1&&(Se.visible=!1)},St)}));D.g.visible=!0;for(const Se of D.items)Se.m.scale.setScalar(.001);const _e=Promise.all(D.items.map((Se,Me)=>J(.5,ue=>{const be=Math.max(.001,nc(ue));Se.m.scale.set(Se.s.x*be,Se.s.y*be,Se.s.z*be)},.3+Me*.05)));await Promise.all([te,_e]),z(D.x,1,D.z+1,8)}async function De(){const P=R[4];V(4,.5),await J(.6,()=>{}),await J(.9,D=>{Ue=nc(D),Le()}),K.visible=!0,J(.8,D=>{K.material.opacity=.35*D}),z(P.x,1.2,P.z+.8,14,3),U(P.x,1,P.z+.8,8),await J(1.6,()=>{})}let Ne=0,We=-1,Ie=0;const Ze=new N,Xe=new N;function lt(P){Ne+=P;const D=Math.max(0,Math.floor(Ne*gv))%Do;if(D!==We){We=D,Ie=D*7.31;for(const ue of s)ue.mat.map=ue.frames[D]}for(let ue=o.length-1;ue>=0;ue--){const be=o[ue];if(be.t+=P,be.t<0)continue;const ft=Math.min(1,be.t/be.dur);be.fn(ft),ft>=1&&(o.splice(ue,1),be.resolve())}Ze.set(Math.cos(W.yaw),0,-Math.sin(W.yaw));const te=j.px??j.x,_e=j.pz??j.z,Se=(j.x-te)*Ze.x+(j.z-_e)*Ze.z;Math.abs(Se)>.002&&(j.facing=Math.sign(Se)),j.px=j.x,j.pz=j.z,j.walking?j.walkT+=P:j.walkT=0;const Me=j.walking&&Math.floor(j.walkT*8)%2===1;de.forEach((ue,be)=>{const ft=ue.off[0]*Ze.x-ue.off[1]*Ze.z*0,zt=ue.off[1]+ue.off[0]*Ze.z,St=j.x+ft,Sn=j.z+zt,fn=j.walking?Math.abs(Math.sin(j.walkT*16+be))*.07:0,bn=j.walking?1:1+Math.sin(Ne*3+be)*.018;ue.mat.map=(Me?ue.B:ue.A)[D],ue.mesh.position.set(St,fn,Sn),ue.mesh.scale.set(j.facing/bn,bn,1),ue.shadow.position.set(St,.015,Sn),ue.shadow.scale.set(ue.w*.8,1,ue.w*.4)});for(const ue of a)ue.m.rotation.z=Math.sin(Ne*1.3+ue.k)*.015;for(const ue of l)ue.rotation.y=Math.sin(Ne*4)*.25;for(const ue of c)ue.scale.set(1+Math.sin(Ne*17)*.1,1+Math.sin(Ne*13)*.18,1);for(const ue of R)if(!ue.revealed){for(const be of ue.fog)be.visible&&(be.position.y=be.userData.base.y+Math.sin(Ne*.9+be.userData.k)*.06);ue.q.position.y=ue.top*.32+1.3+Math.sin(Ne*2.2+ue.x)*.15}if(R[3].revealed){ie.position.y=-.45+Math.sin(Ne*1.6)*.05,ie.rotation.z=Math.sin(Ne*1.2)*.04;const ue=Ne%4/1.1;q.visible=ue<1,ue<1&&(q.position.y=-.6+Math.sin(ue*Math.PI)*1.3,q.position.x=Pt[3].x+6.2+ue*1.2,q.rotation.z=.9-ue*1.8)}K.visible&&(K.rotation.y=Ne*.3);for(let ue=y.length-1;ue>=0;ue--){const be=y[ue];if(be.t+=P,be.t<0){be.m.visible=!1;continue}be.m.visible=!0,be.vy-=be.g*P,be.m.position.x+=be.vx*P,be.m.position.z+=be.vz*P,be.m.position.y=Math.max(0,be.m.position.y+be.vy*P),be.m.scale.setScalar(Math.max(.001,be.g?1-be.t/be.life:Math.min(1,be.t*3)*(1-Math.max(0,be.t-be.life+.5)*2))),be.t>be.life&&(e.remove(be.m),r.splice(r.indexOf(be.m),1),y.splice(ue,1))}for(const ue of r)ue.rotation.y=W.yaw;E(P)}const F=()=>i.render(e,t,Ie);function Te(P,D,te){return Xe.set(P,D,te).project(t),[(Xe.x+1)/2*W.W,(1-Xe.y)/2*W.H,Xe.z]}const Q=new Rs(-1,1,1,-1,.1,300);function le(P){const D=n.domElement.width/n.domElement.height;let te=Yi.a+1.2,_e=Yi.b+1.2;te/_e<D?te=_e*D:_e=te/D,Object.assign(Q,{left:-te,right:te,top:_e,bottom:-_e}),Q.updateProjectionMatrix(),Q.position.set(0,100,0),Q.up.set(0,0,-1),Q.lookAt(0,0,0);const Se=r.map(ue=>ue.visible);for(const ue of r)ue.visible=!1;i.render(e,Q,Ie),P.width=n.domElement.width,P.height=n.domElement.height,P.getContext("2d").drawImage(n.domElement,0,0),r.forEach((ue,be)=>{ue.visible=Se[be]}),i.render(e,t,Ie);const Me=(ue,be)=>{const ft=new N(ue,0,be).project(Q);return[(ft.x+1)*50,(1-ft.y)*50]};return{regions:Pt.map(ue=>Me(ue.x,ue.z)),family:Me(j.x,j.z),camp:Me(...Bt)}}return E(),{scene:e,camera:t,update:lt,render:F,resize:x,focus:V,setInset:se,rotate:he,reveal:me,openChest:De,walkTo:Qe,setProgress:Ae,setFamily:Ce,project:Te,snapshotMap:le,regions:R,family:j,familyIcons:Object.fromEntries(de.map(P=>[P.id,P.icon])),busy:()=>o.length>0}}const Si=[{id:"surah",title:"Surah Hunt",emoji:"📜",colour:"#f5cf5f",sub:"Five short surahs near the end of the mushaf",intro:"An old treasure map was found tucked inside a book on our shelf! Its five clues point to five short surahs near the end of the Qur'an, in Juz 30. Get your mushaf (or the Al Quran app) and find them together.",finale:"You found five surahs. The treasure is not gold: it is what you now know and carry in your hearts.",reflect:["Which surah was your favourite, and why?","Which of these surahs can we recite together from memory?"],clues:[{title:"The Giant Animal",riddle:`High on Mystery Mountain, a note is pinned to a rock: "I am a surah named after the biggest animal on land. A huge army brought it to attack the Ka'bah, but Allah protected His House."`,think:"Before you search, guess: what is the biggest animal on land?",find:"Find the surah named after this giant animal. It is one of the short surahs near the end of the mushaf (Juz 30).",parentTip:"Read the clue aloud slowly. Let {C} turn the pages. The last pages of the mushaf hold the short surahs.",discuss:'Ask {C}: "What did you find? Read me the name at the top of the surah." Point at the surah heading together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:105,hints:[`The surah's name means "The Elephant". Look in the last few pages of the mushaf.`,"It is Surah Al-Fil (الفيل), number 105, in Juz 30. It comes just before Surah Quraysh (106)."]},{type:"choice",prompt:'The surah is called Al-Fil. What does "Fil" mean?',options:["Elephant 🐘","Fish 🐟","Bird 🐦","Camel 🐪"],answer:0,hints:["Think of the riddle: the biggest animal on land.",'"Al-Fil" means "The Elephant".']},{type:"number",prompt:"Count the ayat of Surah Al-Fil together. How many are there?",answer:5,hints:["Each ayah ends with a small round number marker. Count the markers.","Surah Al-Fil has 5 ayat."]}],learn:{name:"Surah Al-Fil · 105",arabic:{text:"أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ",ref:"Al-Fil 105:1",meaning:'"Have you not seen how your Lord dealt with the companions of the elephant?"'},meaning:'Al-Fil means "The Elephant". It is Surah 105 and has 5 ayat.',story:"Shortly before the Prophet Muhammad ﷺ was born, a ruler named Abraha (his name comes from the history books, not the Qur'an) marched on Makkah with a great army and elephants to destroy the Ka'bah. Allah sent birds in flocks (ṭayran abābīl) that struck the army with stones of baked clay, and He made them like eaten straw (105:3–5). Historians call that year the Year of the Elephant, and most say the Prophet ﷺ was born in it.",why:"No army is too big for Allah. He protected His House with small birds. When we feel small, we remember that Allah is the One who protects."},talk:["Why do you think Allah used small birds against a giant army?","When have you felt small or scared? Who can we ask for help?"],apply:"Tonight before sleeping, ask Allah in your own words to protect your family.",fact:{icon:"🐘",text:"Al-Fil (105): Allah protected the Ka'bah from an army with elephants, using flocks of birds."}},{title:"The Travellers",riddle:'At the Oasis, travellers left a message by the well: "Turn one page on from the elephant. There you will meet a tribe whose caravans travelled in winter and in summer."',think:"Guess: why might people go on long journeys in winter and in summer?",find:"Find the surah that comes right after Al-Fil. It is named after a famous tribe of Makkah.",parentTip:"Keep your finger on Al-Fil and let {C} find what comes next.",discuss:'Ask {C}: "Is this surah long or short? Which words can you spot?" Read ayah 2 together, the one about winter and summer.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:106,hints:["It is the very next surah after Al-Fil (105).","It is Surah Quraysh (قريش), number 106."]},{type:"choice",prompt:"Which two seasons does this surah mention?",options:["Winter and summer ❄️☀️","Spring and autumn 🌸🍂","Rainy and dry 🌧️🌵"],answer:0,hints:["Look at ayah 2.","Ayah 2 mentions the journeys of winter and summer."]}],learn:{name:"Surah Quraysh · 106",arabic:{text:"لِإِيلَٰفِ قُرَيْشٍ",ref:"Quraysh 106:1",meaning:'"For the accustomed security of the Quraysh."'},meaning:"Quraysh was the tribe of Makkah and the tribe of the Prophet Muhammad ﷺ. Surah 106 has 4 ayat.",story:'Quraysh were traders whose caravans travelled in winter and in summer (106:2). Many scholars of tafsir explain that the winter journey went south towards Yemen and the summer journey went north towards Sham (Syria). Allah tells them to worship the Lord of this House, "who has fed them against hunger and made them safe from fear" (106:3–4).',why:"Food and safety are gifts from Allah. We thank Him by worshipping Him."},talk:["What food did Allah give us today? Let's name three things!","What makes you feel safe at home?"],apply:'At your next meal, say "Bismillah" before and "Alhamdulillah" after, and name one thing you are thankful for.',fact:{icon:"🐪",text:"Quraysh (106): Allah fed Quraysh against hunger and kept them safe from fear."}},{title:"The Surah of Time",riddle:'Carved on a broken column in the Ancient City: "By time! Every person is in loss, except for some. Find the surah that swears by time."',think:'Guess: what does it mean to "lose" time?',find:"Find the surah named after time. It has only 3 ayat and is in Juz 30.",parentTip:"This surah is often recited in salah. {C} may know it already! Ask before you search.",discuss:'Ask {C}: "Can you read ayah 3 with me? Who is NOT in loss?" Count the four things on your fingers.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:103,hints:["Its name is also the name of the afternoon prayer.","It is Surah Al-'Asr (العصر), number 103, two surahs before Al-Fil."]},{type:"choice",prompt:"Read ayah 3. Who is NOT in loss?",options:["Those who believe, do good, and remind each other of truth and patience","Those who have the most toys","Those who never make any mistakes"],answer:0,hints:['Ayah 3 begins with "except those who…".',"Those who believe, do righteous deeds, and advise each other to truth and to patience."]}],learn:{name:"Surah Al-'Asr · 103",arabic:{text:"وَٱلْعَصْرِ",ref:"Al-'Asr 103:1",meaning:'"By time!"'},meaning:`Al-'Asr means "Time". It is also the name of the afternoon prayer. Surah 103 has just 3 ayat.`,story:"Allah swears by time, then says every human being is in loss, except those who (1) believe, (2) do righteous deeds, (3) advise each other to the truth and (4) advise each other to patience. Imam ash-Shafi'i is reported to have said that if people reflected on this surah alone, it would be enough for them.",why:"Time is like treasure that slips through our fingers. We make it count by believing, doing good and helping each other stay on the right path."},talk:["What is one good thing we did with our time today?","How can we remind each other to be patient, in a kind way?"],apply:'This week, pick a "reminder buddy" in the family and gently remind each other of one good habit.',fact:{icon:"⏳",text:"Al-'Asr (103): people are in loss, except those who believe, do good, and advise each other to truth and patience."}},{title:"The River of Abundance",riddle:`A bottle washed up by the Sea. The note inside says: "Find the shortest surah in the Qur'an. Its name means abundance, and it is also the name of a river in Jannah."`,think:"Guess: what might a river in Jannah be like?",find:`Find the shortest surah in the Qur'an: 3 short ayat, and its name means "abundance".`,parentTip:"Several surahs have 3 ayat, but this one has the fewest words. It sits between Al-Ma'un and Al-Kafirun.",discuss:'Ask {C}: "Read ayah 2 with me. What two things does Allah tell the Prophet ﷺ to do?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:108,hints:["It is only a line or two long, near the end of the mushaf.","It is Surah Al-Kawthar (الكوثر), number 108."]},{type:"choice",prompt:"In ayah 2, what does Allah tell the Prophet ﷺ to do?",options:["Pray, and offer a sacrifice","Sleep, and eat","Run, and swim"],answer:0,hints:['Ayah 2: "fa-ṣalli li-rabbika wanḥar".',"Pray to your Lord, and sacrifice."]}],learn:{name:"Surah Al-Kawthar · 108",arabic:{text:"إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ",ref:"Al-Kawthar 108:1",meaning:'"Indeed, We have granted you al-Kawthar."'},meaning:`Al-Kawthar means "abundance": lots and lots of good. Surah 108 is the shortest surah in the Qur'an.`,story:"In a hadith in Sahih Muslim, the Prophet ﷺ explained that al-Kawthar is a river that his Lord promised him, full of goodness. When people mocked the Prophet ﷺ, Allah comforted him: it is his enemy who is cut off from good (108:3).",why:"Allah gives more than we can count. We say thank you by praying and by giving for His sake."},talk:["If you could describe a river in Jannah, what would it look like?",'What is one big blessing, one "abundance", in our family?'],apply:"Give something this week (a toy, some food, or your time) to thank Allah for His blessings.",fact:{icon:"🌊",text:"Al-Kawthar (108): the shortest surah. Al-Kawthar is a river promised to the Prophet ﷺ."}},{title:"The Heart of the Treasure",riddle:`At Treasure Hill, the last clue is written in gold: "I am a short surah that tells you who Allah is. The Prophet ﷺ said I am equal to a third of the Qur'an."`,think:"Guess: which surah do you think it is? You might already know it by heart!",find:"Find the surah of sincerity: 4 ayat that describe Allah. It is very near the end of the mushaf.",parentTip:"Most children know this surah by heart. Let {C} recite it before you open the page.",discuss:'Recite the surah together, then ask {C}: "What does this surah tell us about Allah?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:112,hints:['It begins with "Qul huwa Allahu ahad".',"It is Surah Al-Ikhlas (الإخلاص), number 112, three surahs from the end."]},{type:"choice",prompt:'Ayah 1 says "Qul huwa Allahu Ahad". What does "Ahad" mean?',options:["One, the only One","Big","Old","Far away"],answer:0,hints:["It is the first number.",'"Ahad" means One.']}],learn:{name:"Surah Al-Ikhlas · 112",arabic:{text:"قُلْ هُوَ ٱللَّهُ أَحَدٌ",ref:"Al-Ikhlas 112:1",meaning:'"Say: He is Allah, [who is] One."'},meaning:'Al-Ikhlas means "sincerity", or pure faith. Surah 112 has 4 ayat.',story:"It teaches that Allah is One. Allah is As-Samad, the One everything depends on while He needs no one. He has no children and was not born, and nothing is like Him. The Prophet ﷺ said this surah is equal to a third of the Qur'an (Sahih al-Bukhari).",why:"Knowing who Allah is, is the greatest treasure of all. That is why it is one of the first surahs we learn."},talk:["What does it mean that nothing is like Allah?","Shall we recite Al-Ikhlas together right now?"],apply:"The Prophet ﷺ used to recite Al-Ikhlas, Al-Falaq and An-Nas before sleeping (Sahih al-Bukhari). Try it together tonight.",fact:{icon:"💎",text:"Al-Ikhlas (112): Allah is One and nothing is like Him. It is equal to a third of the Qur'an."}}]},{id:"prophets",title:"Prophet Hunt",emoji:"🌟",colour:"#8fc7e8",sub:"Yunus, Ibrahim, Yusuf and Nuh عليهم السلام",intro:`This map follows the stories of prophets in the Qur'an. We never draw prophets: we meet them only through Allah's words. When you hear a prophet's name, say "عليه السلام", "peace be upon him".`,finale:"Every prophet trusted Allah: in the dark, in the fire, in the well and on the Ark. That trust is the treasure.",reflect:["Which prophet's story touched you most tonight?","Which dua or lesson will we use this week?"],clues:[{title:"Named After a Prophet",riddle:'A carving on Mystery Mountain says: "Find the surah named after the prophet who was swallowed by a big fish. It begins in Juz 11."',think:"Guess: which prophet was swallowed by a big fish?",find:"Find the surah named after this prophet. It begins in Juz 11, in the first half of the mushaf.",parentTip:"This is a long surah, so the juz marks help. Show {C} how the juz number is printed at the top of the page or in the margin.",discuss:'Ask {C}: "What do you already know about Yunus عليه السلام?" Then go to ayah 98 together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:10,hints:["The surah has the same name as the prophet: Yunus.","It is Surah Yunus (يونس), number 10. It begins in Juz 11."]},{type:"choice",prompt:"Go to ayah 98 of Surah Yunus. What happened when the people of Yunus believed?",options:["Allah removed the punishment from them","They sailed away on a ship","They built a tall tower"],answer:0,hints:['Ayah 98 mentions "the people of Yunus". Read what happened "when they believed".',"When they believed, Allah removed the punishment of disgrace from them."]}],learn:{name:"Surah Yunus · 10",meaning:'Surah Yunus is Surah 10 with 109 ayat. Yunus عليه السلام is also called Dhun-Nun, "the one of the fish" (Al-Anbiya 21:87).',story:"Yunus عليه السلام was sent to call his people to Allah. Ayah 98 tells us something special: when his people believed, Allah removed the punishment of disgrace from them and let them enjoy life for a time. The Qur'an singles them out as a whole town whose belief benefited them.",why:"It is never too late to turn back to Allah. When people sincerely turn to Him, He is Most Merciful."},talk:["Why do you think Allah forgave the whole town?","Is there something we would like to say sorry to Allah for?"],apply:`Say "Astaghfirullah" (I ask Allah's forgiveness) three times together tonight.`,fact:{icon:"🐟",text:"Yunus (Surah 10): when the people of Yunus عليه السلام believed, Allah removed the punishment from them (10:98)."}},{title:"The Prayer in the Darkness",riddle:'Beside the Oasis pool, a scroll says: "In the darkness, inside the fish, a prophet called out to Allah. Find his words in Surah 21, ayah 87."',think:"Guess: if you were in the dark and needed help, what would you say to Allah?",find:'Find Surah 21. Its name means "The Prophets". Then find ayah 87.',parentTip:"Surah 21 begins Juz 17. When you reach ayah 87, read the dua slowly in Arabic and let {C} repeat each part.",discuss:'Read ayah 87 together, then ask {C}: "Why do you think he said sorry to Allah, right there in the dark?"',asks:[{type:"surah",prompt:"Which surah is number 21?",answer:21,hints:['Its name means "The Prophets". It begins Juz 17.',"It is Surah Al-Anbiya' (الأنبياء), number 21."]},{type:"choice",prompt:'His dua begins "Lā ilāha illā anta". What does that mean?',options:["There is no god except You","Allah is the Greatest","Thank you, Allah"],answer:0,hints:['"Lā ilāha" means "there is no god". "Anta" means "You".','It means "There is no god except You".']},{type:"choice",prompt:"Now read ayah 88. What did Allah do?",options:["He answered him and saved him from distress","He sent him a boat","He made the sea dry"],answer:0,hints:['Ayah 88 begins "So We responded to him…".','Allah answered him and saved him from the distress. "And thus do We save the believers."']}],learn:{name:"The dua of Yunus عليه السلام · Al-Anbiya 21:87",arabic:{text:"لَّآ إِلَٰهَ إِلَّآ أَنتَ سُبْحَٰنَكَ إِنِّى كُنتُ مِنَ ٱلظَّٰلِمِينَ",ref:"Al-Anbiya 21:87",translit:"Lā ilāha illā anta, subḥānaka, innī kuntu mina ẓ-ẓālimīn",meaning:'"There is no god except You. Glory be to You! Indeed, I have been of the wrongdoers."'},meaning:'The dua has three parts. (1) "There is no god except You": only Allah can help. (2) "Subḥānaka": You are perfect and far above any fault. (3) "I have been of the wrongdoers": I admit my mistake.',story:'Why he said it: Yunus عليه السلام left his people in anger (21:87). He boarded a laden ship, lots were drawn, and he was cast into the sea, where a great fish swallowed him (37:140–142). "Within the darknesses" he called out this dua (21:87). What happened next: Allah answered him and saved him from distress (21:88). He was cast onto open land, unwell, and Allah made a gourd plant grow over him (37:145–146). Then he was sent to a hundred thousand people or more, and they believed (37:147–148).',why:'When Muslims use it: when they feel worried, stuck or sad, or after a mistake. The Prophet Muhammad ﷺ said that no Muslim makes this dua of Dhun-Nun for anything without Allah answering him (reported by at-Tirmidhi). Allah says: "And thus do We save the believers" (21:88).'},talk:['Have you ever felt "in the dark", stuck or sad? What helped?',"Yunus عليه السلام admitted his mistake. Why is saying sorry brave?","Let's learn the dua: repeat after {P}, one part at a time."],apply:"Learn the dua this week. Say it together whenever someone in the family feels worried.",fact:{icon:"🕯️",text:'The dua of Yunus عليه السلام (21:87): "Lā ilāha illā anta, subḥānaka, innī kuntu mina ẓ-ẓālimīn". Say it in times of distress.'}},{title:"The Fire That Stayed Cool",riddle:`Written over the Ancient City gate: "Find the surah named after the prophet whose people threw him into a fire, and Allah kept him safe. He and his son raised the Ka'bah."`,think:"Guess: can fire ever stop burning?",find:"Find the surah named after this prophet. It begins in Juz 13.",parentTip:"After finding the surah, the second question sends you back to Surah 21, ayah 69, near the dua you found before.",discuss:'Ask {C}: "What do you know about Ibrahim عليه السلام? Why were his people angry with him?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:14,hints:["The surah has the same name as the prophet: Ibrahim.","It is Surah Ibrahim (إبراهيم), number 14, in Juz 13."]},{type:"choice",prompt:"Now open Surah Al-Anbiya, ayah 69. What did Allah tell the fire to be?",options:["Coolness and safety","Hotter and bigger","Blue and green"],answer:0,hints:['Look for "Yā nāru", which means "O fire".','Allah said: "O fire, be coolness and safety upon Ibrahim."']}],learn:{name:"Surah Ibrahim · 14",arabic:{text:"قُلْنَا يَٰنَارُ كُونِى بَرْدًا وَسَلَٰمًا عَلَىٰٓ إِبْرَٰهِيمَ",ref:"Al-Anbiya 21:69",meaning:'"We said: O fire, be coolness and safety upon Ibrahim."'},meaning:"Surah Ibrahim is Surah 14 with 52 ayat. Allah took Ibrahim عليه السلام as a close friend, khalīl (An-Nisa 4:125).",story:"Ibrahim عليه السلام called his people to worship Allah alone, not idols. They threw him into a fire, but Allah commanded the fire to be cool and safe for him (21:68–70). Later, he and his son Isma'il عليهما السلام raised the foundations of the Ka'bah (Al-Baqarah 2:127).",why:"Fire burns only because Allah lets it. Everything obeys Allah, and Allah looks after those who trust Him."},talk:["What did Ibrahim عليه السلام do that took courage?","What does it mean to trust Allah?"],apply:`When something feels scary, say together: "Ḥasbunallāhu wa ni'mal-wakīl", "Allah is enough for us, and He is the best to rely on" (Aal-'Imran 3:173).`,fact:{icon:"🔥",text:'Ibrahim عليه السلام (Surah 14): Allah told the fire, "Be coolness and safety" (21:69).'}},{title:"The Best of Stories",riddle:'A message in a bottle at the Sea: "Find the surah Allah calls the best of stories. It is about a prophet whose brothers threw him into a well, and who later forgave them."',think:"Guess: how would you feel if your brothers or sisters were unkind to you?",find:"Find the surah named after this prophet. It is two surahs after Yunus.",parentTip:"The number question needs careful reading of ayah 4. Let {C} point to the number word in the translation.",discuss:'Ask {C}: "What did Yusuf عليه السلام dream about? Who did he tell?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:12,hints:["Yunus is 10. Count two surahs on.","It is Surah Yusuf (يوسف), number 12."]},{type:"number",prompt:"In ayah 4, Yusuf عليه السلام tells his father a dream. How many stars did he see?",answer:11,hints:["He saw stars, the sun and the moon. Count only the stars.","He saw eleven stars (12:4)."]}],learn:{name:"Surah Yusuf · 12",arabic:{text:"لَا تَثْرِيبَ عَلَيْكُمُ ٱلْيَوْمَ",ref:"Yusuf 12:92",meaning:'"No blame will there be upon you today."'},meaning:'Surah Yusuf is Surah 12 with 111 ayat. Allah says: "We relate to you the best of stories" (12:3).',story:"As a boy, Yusuf عليه السلام dreamed of eleven stars, the sun and the moon bowing to him (12:4). His jealous brothers threw him into a well. He was sold, tested and put in prison, but he stayed patient and truthful, and Allah raised him to a high position in Egypt. When his brothers finally came to him, he forgave them (12:92).",why:`Patience and forgiveness win in the end. His father Ya'qub عليه السلام said: "So patience is most fitting", ṣabrun jamīl (12:18).`},talk:["How do you think Yusuf عليه السلام felt in the well?","Is it easy to forgive? Who can we forgive this week?"],apply:'If someone in the family upsets you this week, try saying "No blame on you today", like Yusuf عليه السلام.',fact:{icon:"⭐",text:'Yusuf عليه السلام (Surah 12): he forgave his brothers: "No blame will there be upon you today" (12:92).'}},{title:"The Ark Builder",riddle:'The golden clue on Treasure Hill: "Find the surah named after the prophet who built the Ark and called his people to Allah for 950 years."',think:"Guess: which prophet built a huge boat called the Ark?",find:"Find the surah named after the prophet of the Ark. It is in Juz 29.",parentTip:"Juz 29 begins with Surah Al-Mulk (67). From there, count forward.",discuss:'Read ayat 10–12 together and ask {C}: "What good things come when we ask Allah for forgiveness?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:71,hints:["The surah has the same name as the prophet: Nuh.","It is Surah Nuh (نوح), number 71, in Juz 29."]},{type:"choice",prompt:"In ayah 10, what did he tell his people to ask Allah for?",options:["Forgiveness","Gold","A bigger boat"],answer:0,hints:['Ayah 10 begins "Istaghfirū rabbakum…".','He told them: "Ask forgiveness of your Lord."']}],learn:{name:"Surah Nuh · 71",arabic:{text:"ٱسْتَغْفِرُوا۟ رَبَّكُمْ إِنَّهُۥ كَانَ غَفَّارًا",ref:"Nuh 71:10",meaning:'"Ask forgiveness of your Lord. Indeed, He is ever a Perpetual Forgiver."'},meaning:"Surah Nuh is Surah 71 with 28 ayat.",story:`Nuh عليه السلام called his people night and day (71:5). He stayed among them "a thousand years minus fifty", which is 950 years (Al-'Ankabut 29:14). He told them that if they asked forgiveness, Allah would send rain and give them wealth, children, gardens and rivers (71:10–12). Most refused, and Allah saved Nuh and those with him in the Ark (29:15).`,why:"Istighfār (asking forgiveness) brings blessings. And Nuh عليه السلام shows us patience: he never gave up."},talk:["950 years! What does being patient mean to you?","Which blessings did Nuh عليه السلام say come with istighfār?"],apply:'Make "Astaghfirullah" part of your bedtime routine this week.',fact:{icon:"🚢",text:'Nuh عليه السلام (Surah 71): "Ask forgiveness of your Lord. He is ever Forgiving" (71:10).'}}]},{id:"arabic",title:"Arabic Hunt",emoji:"ر",colour:"#f2a6b5",sub:"Hunt the word رَحْمَة (mercy)",intro:"This map hunts for one Arabic word: رَحْمَة, raḥmah, which means mercy. It grows from three root letters: ر ح م (r, ḥ, m). Find it hiding in the Qur'an!",finale:"You found raḥmah again and again: ٱلرَّحْمَٰنِ · رَحْمَةً · رَحْمَتِى · رَحْمَةِ. Allah's mercy runs through the whole Qur'an.",reflect:["Where did we see mercy today, at home or outside?","How can our family be a little more merciful this week?"],clues:[{title:"The First Page",riddle:'On top of Mystery Mountain: "Open the very first surah. In its first ayah, find the names of Allah that grow from the letters ر ح م."',think:'Guess: which names of Allah might mean "merciful"?',find:"Open the first surah of the Qur'an and look closely at ayah 1.",parentTip:"Show {C} the three letters ر ح م written on paper. Then hunt for them in the ayah, letter by letter.",discuss:'Point to each word of ayah 1 together. Ask {C}: "Which words have ر, then ح, then م?"',asks:[{type:"surah",prompt:"Which is the very first surah?",answer:1,hints:["It is on the very first page, and we recite it in every rak'ah.","It is Surah Al-Fatihah (الفاتحة), number 1."]},{type:"choice",arabic:!0,prompt:"Which words in ayah 1 are built from ر ح م?",options:["ٱلرَّحْمَٰنِ  and  ٱلرَّحِيمِ","بِسْمِ  only","none of them"],answer:0,hints:["Look at the last two words of the ayah.","Ar-Raḥmān and Ar-Raḥīm both contain ر ح م."]}],learn:{name:"Bismillah · Al-Fatihah 1:1",arabic:{text:"بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",ref:"Al-Fatihah 1:1",translit:"Bismillāhi r-Raḥmāni r-Raḥīm",meaning:'"In the name of Allah, the Entirely Merciful, the Especially Merciful."'},meaning:"Ar-Raḥmān and Ar-Raḥīm are two names of Allah. Both come from raḥmah, mercy.",story:"Many scholars explain that Ar-Raḥmān points to Allah's vast mercy that covers all of creation, and Ar-Raḥīm to His special mercy for the believers. We say Bismillah before eating, reading and starting good things, so each time we say it, we remember Allah's mercy twice!",why:"Right at the start, the Qur'an teaches us that Allah is merciful."},talk:["When did you feel Allah's mercy today?","What things do we start with Bismillah?"],apply:"Say Bismillah out loud before three things tomorrow.",fact:{icon:"ر",text:"Bismillah (1:1): Ar-Raḥmān and Ar-Raḥīm both come from raḥmah, mercy."}},{title:"The Missing Bismillah",riddle:'A puzzle at the Oasis: "113 surahs begin with Bismillah. Only ONE does not. Which one?"',think:"Guess: is it near the beginning, the middle or the end of the Qur'an?",find:"Look at the beginnings of the surahs. Find the one surah that starts without Bismillah. (It begins in Juz 10.)",parentTip:"In a mushaf, Bismillah is printed above each surah title. Page through Juz 10 together looking for the heading with no Bismillah.",discuss:`Ask {C}: "Why do you think we say Allah's name before we start things?"`,asks:[{type:"surah",prompt:"Which surah has no Bismillah at its start?",answer:9,hints:["It comes straight after Surah Al-Anfal (8).","It is Surah At-Tawbah (التوبة), number 9."]},{type:"choice",prompt:"One surah has Bismillah twice: at its start, and in ayah 30, inside a letter from Sulayman عليه السلام. Which surah? (Hint: it's named after a tiny insect.)",options:["An-Naml, The Ant (27)","Al-Baqarah, The Cow (2)","Al-Fil, The Elephant (105)"],answer:0,hints:["The tiny insect is the ant.","It is Surah An-Naml (27). Ayah 30 contains Bismillah."]}],learn:{name:"Surah At-Tawbah · 9 and Surah An-Naml · 27",meaning:'Surah At-Tawbah (9), "The Repentance", is the only surah that does not begin with Bismillah. Surah An-Naml (27) has Bismillah twice: at its start and in ayah 30, in the letter of Sulayman عليه السلام to the Queen of Sheba (27:29–31). So Bismillah still appears 114 times.',story:"Scholars give reasons for the missing Bismillah. One is that At-Tawbah opens with a stern declaration to those who broke their treaties. Another is that it is closely connected to the surah before it, Al-Anfal.",why:"The Qur'an has been preserved exactly as it was revealed, down to details like this."},talk:["Why do you think we start good things with Allah's name?","What was the letter of Sulayman عليه السلام about? Read 27:29–31 together."],apply:"Before your next homework or drawing, say Bismillah together.",fact:{icon:"📜",text:"At-Tawbah (9) is the only surah without Bismillah at its start. An-Naml (27) has it twice."}},{title:"A Mercy to the Worlds",riddle:'On the Ancient City wall, one word is carved: رَحْمَة. Beneath it: "Find me in Surah Al-Anbiya, ayah 107. I describe the Prophet Muhammad ﷺ."',think:'Guess: who might be called "a mercy"?',find:"Find Surah Al-Anbiya (21), ayah 107. Look for the word رَحْمَةً.",parentTip:"In the mushaf the word ends with a double fatha: رَحْمَةً (raḥmatan). Let {C} match the shape with a finger.",discuss:'Put your finger on رَحْمَةً together. Ask {C}: "Can you read the word after it with me?"',asks:[{type:"surah",prompt:"Which surah is Al-Anbiya?",answer:21,hints:['Its name means "The Prophets".',"Al-Anbiya' is Surah 21."]},{type:"choice",arabic:!0,prompt:"Point to رَحْمَةً in ayah 107. Which word comes right after it?",options:["لِّلْعَٰلَمِينَ","إِلَّآ","أَرْسَلْنَٰكَ"],answer:0,hints:["It is the very last word of the ayah.",'لِّلْعَٰلَمِينَ (lil-ʿālamīn), "to the worlds".']},{type:"choice",prompt:"So the Prophet ﷺ was sent as a mercy to…?",options:["All the worlds, all of creation","Only his family","Only the people of Makkah"],answer:0,hints:['"Al-ʿālamīn" means the worlds.',"He ﷺ was sent as a mercy to the worlds."]}],learn:{name:"Al-Anbiya 21:107",arabic:{text:"وَمَآ أَرْسَلْنَٰكَ إِلَّا رَحْمَةً لِّلْعَٰلَمِينَ",ref:"Al-Anbiya 21:107",translit:"Wa mā arsalnāka illā raḥmatan lil-ʿālamīn",meaning:'"And We have not sent you (O Muhammad) except as a mercy to the worlds."'},meaning:"Raḥmah means mercy: kindness, care and gentleness. The Prophet ﷺ was sent as a mercy for people, animals and all creation.",story:'The Prophet ﷺ was gentle with children, kind to animals and forgiving to people who hurt him. He ﷺ said: "Those who are merciful, the Most Merciful will have mercy on them. Be merciful to those on the earth, and the One above the heavens will have mercy on you." (Abu Dawud and at-Tirmidhi)',why:"Following the Prophet ﷺ means being merciful too."},talk:["How was the Prophet ﷺ a mercy to children and animals?","How can each of us show raḥmah tomorrow?"],apply:'Do one "raḥmah deed" tomorrow: help, share, or be gentle with someone (or with an animal).',fact:{icon:"🌍",text:"Al-Anbiya 21:107: the Prophet ﷺ was sent as raḥmatan lil-ʿālamīn, a mercy to the worlds."}},{title:"Mercy Bigger Than the Sea",riddle:`The waves by the Sea whisper: "Allah's mercy is bigger than the ocean. Find Surah Al-A'raf, ayah 156. What does His mercy cover?"`,think:"Guess: what is the biggest thing you can think of?",find:`Find Surah Al-A'raf ("The Heights") with the surah list helper, then find ayah 156.`,parentTip:"Al-A'raf begins in Juz 8, and ayah 156 is in Juz 9. Look for وَرَحْمَتِى in the middle of the ayah.",discuss:'Ask {C}: "Can you find رَحْمَتِى? It is our word with a little extra at the end. It means MY mercy."',asks:[{type:"surah",prompt:"Which surah is Al-A'raf?",answer:7,hints:["It is one of the long surahs near the start of the mushaf, just after Al-An'am.","Al-A'raf is Surah 7."]},{type:"choice",prompt:'In ayah 156, Allah says: "My mercy encompasses…"',options:["All things","Only the sea","Only the mountains"],answer:0,hints:[`Find the words كُلَّ شَىْءٍ (kulla shay'), "every thing".`,'"My mercy encompasses all things."']}],learn:{name:"Al-A'raf 7:156",arabic:{text:"وَرَحْمَتِى وَسِعَتْ كُلَّ شَىْءٍ",ref:"Al-A'raf 7:156",meaning:'"…and My mercy encompasses all things."'},meaning:`Al-A'raf is Surah 7 with 206 ayat. رَحْمَتِى (raḥmatī) means "My mercy": our word رحمة with "my" added.`,story:"The Prophet ﷺ said that Allah made mercy in a hundred parts. He sent one part down to the earth, and because of that one part, creatures are merciful to each other, so that even a horse lifts its hoof away from its young, afraid of hurting it. Allah kept ninety-nine parts with Himself. (Sahih al-Bukhari and Sahih Muslim)",why:"If one part of mercy fills the world with love, imagine the ninety-nine parts with Allah! We never give up hope."},talk:["Where do we see mercy in animals?","How do parents show mercy to their children?"],apply:"Look for mercy in nature this week (a bird feeding its chicks, a cat with its kittens) and tell each other.",fact:{icon:"🐎",text:`Al-A'raf 7:156: "My mercy encompasses all things." Allah kept 99 parts of mercy with Him.`}},{title:"Never Lose Hope",riddle:`The golden clue on Treasure Hill: "Find Surah Az-Zumar, ayah 53. It tells us the one thing we must never do about Allah's mercy."`,think:"Guess: what should we never, ever do?",find:'Find Surah Az-Zumar ("The Groups"). It begins in Juz 23, and ayah 53 is in Juz 24.',parentTip:'Look for رَّحْمَةِ ٱللَّهِ (raḥmatillāh), "the mercy of Allah". It is our word again!',discuss:'Read the translation of ayah 53 slowly to {C}. Ask: "How does this ayah make you feel?"',asks:[{type:"surah",prompt:"Which surah is Az-Zumar?",answer:39,hints:["It comes a little after Ya-Sin (36).","Az-Zumar is Surah 39."]},{type:"choice",prompt:"What does ayah 53 tell us never to do?",options:["Never lose hope in Allah's mercy","Never eat sweets","Never ask questions"],answer:0,hints:['Look for "lā taqnaṭū", "do not despair".','"Do not despair of the mercy of Allah."']}],learn:{name:"Az-Zumar 39:53",arabic:{text:"لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",ref:"Az-Zumar 39:53",meaning:'"Do not despair of the mercy of Allah."'},meaning:'Az-Zumar is Surah 39 with 75 ayat. Here we meet رَحْمَةِ ٱللَّهِ, raḥmatillāh, "the mercy of Allah".',story:'Allah calls: "O My servants who have wronged themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, He is the Forgiving, the Merciful." The next ayah tells us to turn back to Him (39:54). Whatever mistake we make, we can always turn back to Allah.',why:"This is one of the most hopeful ayat in the Qur'an. Allah's door is always open."},talk:["How does it feel to know Allah forgives when we turn back to Him?","In our family, how can we forgive each other like that?"],apply:'Make a family "fresh start" promise: when someone says sorry, we forgive quickly.',fact:{icon:"💛",text:'Az-Zumar 39:53: "Do not despair of the mercy of Allah." He forgives those who turn back to Him.'}}]},{id:"animals",title:"Animal Hunt",emoji:"🐝",colour:"#b4de94",sub:"The ant, the bee, the cow, the spider and the camel",intro:"Five creatures are hiding in the Qur'an: some have whole surahs named after them! Each one has a lesson for us. Find them together.",finale:"From the tiny ant to the tall camel, every creature points to its Creator. SubḥānAllāh!",reflect:["Which creature's lesson was your favourite?","Which animal will you look at differently now?"],clues:[{title:"The Talking Ant",riddle:'An ant trail leads up Mystery Mountain: "Find the surah named after a tiny insect who warned her friends to hurry home before an army marched by."',think:"Guess: which tiny insect lives in big groups underground?",find:"Find the surah named after the ant. It begins in Juz 19.",parentTip:`The ant's words are in ayah 18. Read it in a small "ant voice" together!`,discuss:'Ask {C}: "What did the ant do? Was she brave?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:27,hints:['"An-Naml" means "The Ant". It begins in Juz 19.',"It is Surah An-Naml (النمل), number 27."]},{type:"choice",prompt:"Read ayah 18. What did the ant tell the other ants?",options:["Enter your homes so you are not crushed","Climb the tallest tree","Hide all the food"],answer:0,hints:['She said "udkhulū", which means "enter".','She said: "O ants, enter your dwellings so you are not crushed."']}],learn:{name:"Surah An-Naml · 27",arabic:{text:"يَٰٓأَيُّهَا ٱلنَّمْلُ ٱدْخُلُوا۟ مَسَٰكِنَكُمْ",ref:"An-Naml 27:18",meaning:'"O ants, enter your dwellings…"'},meaning:'An-Naml means "The Ant". Surah 27 has 93 ayat.',story:"Sulayman عليه السلام and his army came to the valley of the ants. One ant called out to warn the others to go into their homes, so they would not be crushed without the army noticing. Sulayman عليه السلام heard her, smiled, and thanked Allah for His blessings (27:18–19).",why:"The ant cared for her community. And Sulayman عليه السلام, a mighty king, answered with a smile and with thankfulness."},talk:["How did the ant show she cared?","How can we look after the smallest creatures?"],apply:"Be careful around ants and bugs this week, and watch where you step!",fact:{icon:"🐜",text:"An-Naml 27:18–19: an ant warned the others, and Sulayman عليه السلام smiled and thanked Allah."}},{title:"The Busy Bee",riddle:'A buzzing among the Oasis flowers: "Find the surah named after an insect that makes something sweet. Allah taught it where to build its homes."',think:"Guess: which insect makes something sweet?",find:"Find the surah named after the bee. It begins in Juz 14.",parentTip:"The bee ayat are 68 and 69. If you have honey at home, bring it to the table!",discuss:'Read ayat 68–69 together. Ask {C}: "Where does the bee build its homes?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:16,hints:['"An-Nahl" means "The Bee". It begins in Juz 14.',"It is Surah An-Nahl (النحل), number 16."]},{type:"choice",prompt:"Read ayah 69. What is in the drink that comes from bees?",options:["Healing for people","Salt","Nothing special"],answer:0,hints:[`Look for the word "shifā'".`,'"In it is healing for people."']}],learn:{name:"Surah An-Nahl · 16",arabic:{text:"فِيهِ شِفَآءٌ لِّلنَّاسِ",ref:"An-Nahl 16:69",meaning:'"…in it is healing for people."'},meaning:'An-Nahl means "The Bee". Surah 16 has 128 ayat.',story:"Allah inspired the bee to build homes in the mountains, in the trees and in what people build (16:68), then to eat from all the fruits and follow the ways of her Lord. From its belly comes a drink of many colours, honey, with healing for people (16:69).",why:`Tiny bees follow Allah's guidance perfectly. Ayah 69 ends: "Indeed in that is a sign for a people who give thought."`},talk:["What colours of honey have you seen?","What else in nature follows Allah's plan?"],apply:'Taste some honey together, say "Alhamdulillah", and talk about the bees who made it.',fact:{icon:"🐝",text:"An-Nahl 16:68–69: Allah inspired the bee, and honey has healing for people."}},{title:"The Longest Surah",riddle:'In the Ancient City, a stone tablet reads: "I am the longest surah of all, and I am named after a cow. What number is my very last ayah?"',think:"Guess: how many ayat might the longest surah have? 50? 100? More?",find:"Find the longest surah in the Qur'an, right after Al-Fatihah. Then turn to its last ayah.",parentTip:"The last ayah is at the end of the surah, about 48 pages in. It's fine to jump to where Surah 3 begins and look just before it.",discuss:'Ask {C}: "Why do you think this surah is named after a cow?" Then read 2:67 together.',asks:[{type:"surah",prompt:"Which surah did you find?",answer:2,hints:["It is the second surah.","It is Surah Al-Baqarah (البقرة), number 2."]},{type:"number",prompt:"What is the number of its very last ayah?",answer:286,hints:["Look at the page just before Surah Aal-'Imran begins.","The last ayah of Al-Baqarah is 286."]}],learn:{name:"Surah Al-Baqarah · 2",meaning:'Al-Baqarah means "The Cow". Surah 2 is the longest surah, with 286 ayat. It contains Āyat al-Kursī (2:255).',story:'Musa عليه السلام told his people: "Allah commands you to slaughter a cow" (2:67). Instead of simply obeying, they kept asking more questions (what age? what colour? what kind?) and made it harder for themselves (2:68–71).',why:"When Allah asks something of us, the best way is to obey simply and willingly, without making excuses."},talk:["Why do you think they kept asking questions?","What is one good thing we can do straight away, without delaying?"],apply:"Learn Āyat al-Kursī (2:255) together, a little each night.",fact:{icon:"🐄",text:"Al-Baqarah (2): the longest surah, with 286 ayat. Its cow story teaches us to obey Allah simply."}},{title:"The Weakest House",riddle:`A web glistens on a boat's mast by the Sea: "Find the surah named after an eight-legged creature. What does Allah say about its house?"`,think:"Guess: is a spider's web strong or weak?",find:"Find the surah named after the spider (it begins in Juz 20), then ayah 41.",parentTip:"A spider's silk is strong for its size, but its house protects nothing from wind or rain. That is the point of the example.",discuss:'Ask {C}: "What happens to a web in the wind? What do people rely on instead of Allah?"',asks:[{type:"surah",prompt:"Which surah did you find?",answer:29,hints:[`"Al-'Ankabut" means "The Spider". It begins in Juz 20.`,"It is Surah Al-'Ankabut (العنكبوت), number 29."]},{type:"choice",prompt:"What does ayah 41 say about the spider's house?",options:["It is the weakest of houses","It is the strongest house","It is made of gold"],answer:0,hints:['Look for "awhana l-buyūt", "the weakest of houses".','"The weakest of houses is the house of the spider."']}],learn:{name:"Surah Al-'Ankabut · 29",arabic:{text:"وَإِنَّ أَوْهَنَ ٱلْبُيُوتِ لَبَيْتُ ٱلْعَنكَبُوتِ",ref:"Al-'Ankabut 29:41",meaning:'"And indeed, the weakest of houses is the house of the spider."'},meaning:`Al-'Ankabut means "The Spider". Surah 29 has 69 ayat.`,story:"Allah gives an example: those who take protectors other than Allah are like a spider that builds itself a house, and the weakest of houses is the spider's house, if only they knew (29:41).",why:"Real safety comes from Allah. We take sensible steps (seatbelts, locks, doctors), and we put our trust in Allah."},talk:["What would happen to a spider web in a strong wind?","What makes us truly safe?"],apply:`When leaving the house this week, say "Bismillāh, tawakkaltu 'alallāh" (In the name of Allah, I rely on Allah), from a dua the Prophet ﷺ taught (Abu Dawud, at-Tirmidhi).`,fact:{icon:"🕸️",text:"Al-'Ankabut 29:41: the weakest house is the spider's. Real protection is with Allah."}},{title:"Look at the Camel",riddle:'The last clue on Treasure Hill: "Allah asks: Do they not look at this animal, and how it was created? Find it in Surah Al-Ghashiyah, ayah 17."',think:"Guess: which animal can walk for days across the desert?",find:"Find Surah Al-Ghashiyah (Juz 30), then ayah 17.",parentTip:`Al-Ghashiyah is often recited in Jumu'ah prayer. Ayat 17–20 make a lovely "look around you" list.`,discuss:'Read ayat 17–20 together. Ask {C}: "What four things does Allah ask us to look at?"',asks:[{type:"surah",prompt:"Which surah is Al-Ghashiyah?",answer:88,hints:["It is in Juz 30, just after Al-A'la (87).","Al-Ghashiyah is Surah 88."]},{type:"choice",prompt:"Which animal does ayah 17 ask us to look at?",options:["The camel 🐪","The lion 🦁","The whale 🐋"],answer:0,hints:['Look for "al-ibil".','"Al-ibil" means camels.']},{type:"choice",prompt:"Ayat 18–20 name three more things to look at. Which ones?",options:["The sky, the mountains and the earth","The cars, the shops and the phones","The stars, the fish and the rain"],answer:0,hints:["One is raised up, one is set firmly, one is spread out.","The sky, the mountains and the earth."]}],learn:{name:"Surah Al-Ghashiyah · 88",arabic:{text:"أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",ref:"Al-Ghashiyah 88:17",meaning:'"Then do they not look at the camels, how they are created?"'},meaning:'Al-Ghashiyah is Surah 88 with 26 ayat. Its name means "The Overwhelming Event".',story:"Allah invites us to look: at the camels and how they were created, at the sky and how it was raised, at the mountains and how they were set firm, and at the earth and how it was spread out (88:17–20).",why:"Thinking about creation helps us know and love our Creator."},talk:["What is amazing about camels? (Think: the desert, water, long eyelashes!)","Look outside together: what do you see that Allah made?"],apply:'Go on a "look and think" walk. Find three things Allah created and say "SubḥānAllāh" for each.',fact:{icon:"🐪",text:'Al-Ghashiyah 88:17: "Do they not look at the camels, how they are created?"'}}]}],yv=[{id:"nature",title:"Nature Hunt",emoji:"🌿",colour:"#9dd190",sub:"Rain, stars, mountains and seas"},{id:"akhlaq",title:"Akhlaq Hunt",emoji:"💛",colour:"#f3c99b",sub:"Honesty, kindness and good manners"}],Mv=[[1,"Al-Fatihah","الفاتحة","The Opening",7],[2,"Al-Baqarah","البقرة","The Cow",286],[3,"Aal-'Imran","آل عمران","The Family of Imran",200],[4,"An-Nisa","النساء","The Women",176],[5,"Al-Ma'idah","المائدة","The Table Spread",120],[6,"Al-An'am","الأنعام","The Cattle",165],[7,"Al-A'raf","الأعراف","The Heights",206],[8,"Al-Anfal","الأنفال","The Spoils",75],[9,"At-Tawbah","التوبة","The Repentance",129],[10,"Yunus","يونس","Yunus (Jonah)",109],[11,"Hud","هود","Hud",123],[12,"Yusuf","يوسف","Yusuf (Joseph)",111],[13,"Ar-Ra'd","الرعد","The Thunder",43],[14,"Ibrahim","إبراهيم","Ibrahim (Abraham)",52],[15,"Al-Hijr","الحجر","The Rocky Tract",99],[16,"An-Nahl","النحل","The Bee",128],[17,"Al-Isra'","الإسراء","The Night Journey",111],[18,"Al-Kahf","الكهف","The Cave",110],[19,"Maryam","مريم","Maryam (Mary)",98],[20,"Ta-Ha","طه","Ta-Ha",135],[21,"Al-Anbiya'","الأنبياء","The Prophets",112],[22,"Al-Hajj","الحج","The Pilgrimage",78],[23,"Al-Mu'minun","المؤمنون","The Believers",118],[24,"An-Nur","النور","The Light",64],[25,"Al-Furqan","الفرقان","The Criterion",77],[26,"Ash-Shu'ara'","الشعراء","The Poets",227],[27,"An-Naml","النمل","The Ant",93],[28,"Al-Qasas","القصص","The Stories",88],[29,"Al-'Ankabut","العنكبوت","The Spider",69],[30,"Ar-Rum","الروم","The Romans",60],[31,"Luqman","لقمان","Luqman",34],[32,"As-Sajdah","السجدة","The Prostration",30],[33,"Al-Ahzab","الأحزاب","The Allied Forces",73],[34,"Saba'","سبأ","Sheba",54],[35,"Fatir","فاطر","The Originator",45],[36,"Ya-Sin","يس","Ya-Sin",83],[37,"As-Saffat","الصافات","Those Lined Up in Rows",182],[38,"Sad","ص","Sad",88],[39,"Az-Zumar","الزمر","The Groups",75],[40,"Ghafir","غافر","The Forgiver",85],[41,"Fussilat","فصلت","Explained in Detail",54],[42,"Ash-Shura","الشورى","The Consultation",53],[43,"Az-Zukhruf","الزخرف","The Gold Ornaments",89],[44,"Ad-Dukhan","الدخان","The Smoke",59],[45,"Al-Jathiyah","الجاثية","The Kneeling",37],[46,"Al-Ahqaf","الأحقاف","The Sand Dunes",35],[47,"Muhammad","محمد","Muhammad ﷺ",38],[48,"Al-Fath","الفتح","The Victory",29],[49,"Al-Hujurat","الحجرات","The Private Rooms",18],[50,"Qaf","ق","Qaf",45],[51,"Adh-Dhariyat","الذاريات","The Scattering Winds",60],[52,"At-Tur","الطور","The Mount",49],[53,"An-Najm","النجم","The Star",62],[54,"Al-Qamar","القمر","The Moon",55],[55,"Ar-Rahman","الرحمن","The Most Merciful",78],[56,"Al-Waqi'ah","الواقعة","The Inevitable Event",96],[57,"Al-Hadid","الحديد","The Iron",29],[58,"Al-Mujadilah","المجادلة","The Pleading Woman",22],[59,"Al-Hashr","الحشر","The Gathering",24],[60,"Al-Mumtahanah","الممتحنة","The Woman Examined",13],[61,"As-Saff","الصف","The Ranks",14],[62,"Al-Jumu'ah","الجمعة","Friday",11],[63,"Al-Munafiqun","المنافقون","The Hypocrites",11],[64,"At-Taghabun","التغابن","Mutual Loss and Gain",18],[65,"At-Talaq","الطلاق","Divorce",12],[66,"At-Tahrim","التحريم","The Prohibition",12],[67,"Al-Mulk","الملك","The Dominion",30],[68,"Al-Qalam","القلم","The Pen",52],[69,"Al-Haqqah","الحاقة","The Inevitable Reality",52],[70,"Al-Ma'arij","المعارج","The Ascending Stairways",44],[71,"Nuh","نوح","Nuh (Noah)",28],[72,"Al-Jinn","الجن","The Jinn",28],[73,"Al-Muzzammil","المزمل","The Wrapped One",20],[74,"Al-Muddaththir","المدثر","The Cloaked One",56],[75,"Al-Qiyamah","القيامة","The Resurrection",40],[76,"Al-Insan","الإنسان","Mankind",31],[77,"Al-Mursalat","المرسلات","Those Sent Forth",50],[78,"An-Naba'","النبأ","The Great News",40],[79,"An-Nazi'at","النازعات","Those Who Pull Out",46],[80,"'Abasa","عبس","He Frowned",42],[81,"At-Takwir","التكوير","The Folding Up",29],[82,"Al-Infitar","الانفطار","The Splitting Open",19],[83,"Al-Mutaffifin","المطففين","Those Who Give Short Measure",36],[84,"Al-Inshiqaq","الانشقاق","The Splitting Apart",25],[85,"Al-Buruj","البروج","The Great Stars",22],[86,"At-Tariq","الطارق","The Night Visitor",17],[87,"Al-A'la","الأعلى","The Most High",19],[88,"Al-Ghashiyah","الغاشية","The Overwhelming Event",26],[89,"Al-Fajr","الفجر","The Dawn",30],[90,"Al-Balad","البلد","The City",20],[91,"Ash-Shams","الشمس","The Sun",15],[92,"Al-Layl","الليل","The Night",21],[93,"Ad-Duha","الضحى","The Morning Light",11],[94,"Ash-Sharh","الشرح","The Opening Up",8],[95,"At-Tin","التين","The Fig",8],[96,"Al-'Alaq","العلق","The Clinging Clot",19],[97,"Al-Qadr","القدر","The Night of Decree",5],[98,"Al-Bayyinah","البينة","The Clear Proof",8],[99,"Az-Zalzalah","الزلزلة","The Earthquake",8],[100,"Al-'Adiyat","العاديات","The Running Horses",11],[101,"Al-Qari'ah","القارعة","The Striking Hour",11],[102,"At-Takathur","التكاثر","Competing for More",8],[103,"Al-'Asr","العصر","Time",3],[104,"Al-Humazah","الهمزة","The Slanderer",9],[105,"Al-Fil","الفيل","The Elephant",5],[106,"Quraysh","قريش","Quraysh",4],[107,"Al-Ma'un","الماعون","Small Kindnesses",7],[108,"Al-Kawthar","الكوثر","Abundance",3],[109,"Al-Kafirun","الكافرون","The Disbelievers",6],[110,"An-Nasr","النصر","The Help",3],[111,"Al-Masad","المسد","The Palm Fibre",5],[112,"Al-Ikhlas","الإخلاص","Sincerity",4],[113,"Al-Falaq","الفلق","The Daybreak",5],[114,"An-Nas","الناس","Mankind",6]],Sv=n=>{if(n<=2)return 1;const e=[[3,3],[4,4],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,11],[12,12],[13,13],[14,13],[15,14],[16,14],[17,15],[18,15],[19,16],[20,16],[21,17],[22,17],[23,18],[24,18],[25,18],[26,19],[27,19],[28,20],[29,20],[30,21],[31,21],[32,21],[33,21],[34,22],[35,22],[36,22],[37,23],[38,23],[39,23],[40,24],[41,24],[42,25],[43,25],[44,25],[45,25],[46,26],[47,26],[48,26],[49,26],[50,26],[51,26]];for(const[t,i]of e)if(t===n)return i;return n<=57?27:n<=66?28:n<=77?29:30},ts=Mv.map(([n,e,t,i,s])=>({n,name:e,ar:t,meaning:i,ayat:s,juz:Sv(n)})),ya=n=>ts[n-1],sc=n=>n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/['’`ʿʾ\-\s]/g,"").replace(/^(adh|ash|aal|al|an|ar|as|at|az|ad)/,"");function rc(n){if(n=(n||"").trim(),!n)return ts;if(/^\d+$/.test(n)){const i=+n;return ts.filter(s=>String(s.n).startsWith(n)).sort((s,r)=>s.n===i?-1:r.n===i?1:s.n-r.n)}const e=sc(n),t=n.toLowerCase();return ts.filter(i=>e&&sc(i.name).includes(e)||i.name.toLowerCase().includes(t)||i.meaning.toLowerCase().includes(t)||i.ar.includes(n))}const Uo="familyDeen.treasure.v1",ac={child:"",grownup:"both",talks:0,openAll:!1,muted:!1,hunts:{},facts:{}},sh=()=>({clue:0,step:"intro",ask:0,done:!1,talks:0,hints:0});function rh(){try{const n=JSON.parse(localStorage.getItem(Uo)||"null");if(n)return{...ac,...n,hunts:{...n.hunts||{}},facts:{...n.facts||{}}}}catch{}return structuredClone(ac)}function bv(n){try{localStorage.setItem(Uo,JSON.stringify(n))}catch{}}function wv(){try{localStorage.removeItem(Uo)}catch{}}let Lt,Ei,ah=!1;function Av(){if(!Lt)try{Lt=new(window.AudioContext||window.webkitAudioContext),Ei=Lt.createGain(),Ei.gain.value=ah?0:.4,Ei.connect(Lt.destination)}catch{Lt=null}}function oc(n){ah=n,Ei&&(Ei.gain.value=n?0:.4)}function Ln(n,e,{type:t="triangle",vol:i=.5,slide:s=1,delay:r=0}={}){if(!Lt)return;const a=Lt.currentTime+r,o=Lt.createOscillator(),l=Lt.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*s,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(Ei),o.start(a),o.stop(a+e+.02)}function Ma(n,{vol:e=.2,cutoff:t=1200,type:i="lowpass",delay:s=0}={}){if(!Lt)return;const r=Lt.currentTime+s,a=Math.ceil(Lt.sampleRate*n),o=Lt.createBuffer(1,a,Lt.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a);const c=Lt.createBufferSource(),h=Lt.createBiquadFilter(),u=Lt.createGain();c.buffer=o,h.type=i,h.frequency.value=t,u.gain.value=e,c.connect(h).connect(u).connect(Ei),c.start(r)}const mn={tap:()=>Ln(700,.06,{vol:.18}),page:()=>Ma(.25,{vol:.25,cutoff:2600,type:"bandpass"}),right:()=>[660,880,1175].forEach((n,e)=>Ln(n,.18,{delay:e*.08,vol:.35})),hmm:()=>{Ln(392,.16,{vol:.25,slide:.94}),Ln(349,.2,{delay:.14,vol:.2,slide:.94})},talk:()=>{Ln(523,.14,{vol:.3}),Ln(784,.2,{delay:.1,vol:.3})},whoosh:()=>Ma(1.1,{vol:.35,cutoff:900}),piece:()=>{Ma(.3,{vol:.2,cutoff:3e3,type:"bandpass"}),Ln(1047,.2,{delay:.25,vol:.3}),Ln(1568,.25,{delay:.35,vol:.25})},chest:()=>[523,659,784,1047,1319].forEach((n,e)=>Ln(n,.3,{delay:e*.12,vol:.35}))},et=n=>document.getElementById(n),oh=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);let $e=rh(),xs=1;const _r=()=>$e.grownup==="both"?"Baba or Mama":$e.grownup,xi=()=>$e.grownup==="both"?"Baba / Mama":$e.grownup,ti=()=>$e.child.trim()?oh($e.child.trim()):"your child",an=n=>String(n).replace(/[\u0600-\u06FF\uFDF0-\uFDFF][\u0600-\u06FF\uFDF0-\uFDFF\u0750-\u077F\s]*[\u0600-\u06FF\uFDF0-\uFDFF]|[\u0600-\u06FF\uFDF0-\uFDFF]/g,e=>`<bdi class="arx">${e}</bdi>`),rn=n=>an(String(n).replaceAll("{P}",_r()).replaceAll("{C}",ti())),ei=(n,e=`👤 For ${xi()}`,t="")=>`<div class="parent ${t}"><header>${e}</header>${n}</div>`,Ev=n=>Si.find(e=>e.id===n),bt=n=>{var e;return(e=$e.hunts)[n]||(e[n]=sh())},Tv=n=>$e.openAll||n===0||bt(Si[n-1].id).done,Gt=()=>bv($e),lc=()=>new Date().toISOString().slice(0,10),cc=()=>{$e.nights||($e.nights=[]),$e.nights.includes(lc())||($e.nights.push(lc()),Gt())},ur=()=>($e.nights||[]).length,Cv=n=>{const e=[...Array(n).keys()];for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e};async function Rv(){const n=new z0({canvas:et("scene"),antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=qt;const e=await xv(n);oc($e.muted),et("muteBtn").innerHTML=ot($e.muted?"mute":"sound"),et("muteBtn").classList.add("dk-iconbtn");function t(){n.setSize(window.innerWidth,window.innerHeight,!1),e.resize(window.innerWidth,window.innerHeight),v()}window.addEventListener("resize",t);let i=null,s=null,r=0,a=0,o="",l=!1;const c=et("panel"),h=et("overlay");function u(y){c.innerHTML=y,c.classList.remove("hidden"),c.scrollTop=0,requestAnimationFrame(v)}function f(){c.classList.add("hidden"),v()}function d(y,z=""){h.className="screen "+z,h.innerHTML=y,h.scrollTop=0}function g(){h.className="screen hidden",h.innerHTML=""}function v(){if(c.classList.contains("hidden"))return e.setInset(0,0);const y=c.getBoundingClientRect();window.innerWidth<760||window.innerHeight>window.innerWidth?e.setInset(0,Math.min(y.height,window.innerHeight*.58)):e.setInset(window.innerWidth-y.left,0)}function m(){$e.talks++,i&&bt(i.id).talks++,Gt(),cc(),mn.talk(),et("talkCount").textContent=$e.talks;const y=et("huntPill");y.classList.remove("bump"),y.offsetWidth,y.classList.add("bump")}function p(){f(),et("hud").classList.add("hidden"),i=null,e.focus(null),e.setProgress(0);const y=$e.grownup,z=U=>"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(U);d(`<div class="frame center title">
      <div class="logo"><span class="fam">${ot("house")} Family Deen</span></div>
      ${ph([{src:z(Mr),cls:"bob"},{src:z(Sa),cls:"sm bob"},{icon:"chest",cls:"main"},{src:z(ba),cls:"sm bob"},{src:z(Sr),cls:"bob"}],{tone:"sea",glow:!0,sparkles:5})}
      <div class="logo"><h1>Quran <em>Treasure</em> Hunt</h1><p>A treasure map whose clues are solved in the real Qur'an</p></div>
      ${ei(Bo([{icon:"moon",title:"Sit together",text:"for 10–20 minutes, after Maghrib or at bedtime."},{icon:"rehal",title:"Mushaf ready",text:"Have your mushaf or the Al Quran app ready. The game does <b>not</b> contain the answers: you find them together in the Qur'an."},{icon:"eye",title:"Look up!",text:"When the screen says <b>Look up!</b>, put it down and talk. Those conversations are the real progress."}]),`${ot("grownup")} For Baba / Mama: how this works`)}
      <label class="field">Child's name (optional)<input type="text" id="childName" maxlength="20" placeholder="e.g. Maryam" value="${oh($e.child)}" /></label>
      <div class="field">Who is guiding tonight?<div class="dkavs" id="grownSeg">
        ${[["Baba","blue",z(Sr)],["Mama","pink",z(Mr)],["both","green","people"]].map(([U,K,J],W)=>`<button data-act="grown" data-k="${U}" class="dkav ${K} ${y===U?"on":""}" style="--i:${W}"><span class="face">${J.startsWith("data:")?`<img src="${J}" alt="">`:ot(J)}</span><span>${U==="both"?"Both of us":U}</span></button>`).join("")}</div></div>
      <div class="actions"><button class="btn go" data-act="begin">${ot(Object.keys($e.hunts).length?"play":"map")} ${Object.keys($e.hunts).length?"Continue the adventure →":"Open the treasure maps →"}</button></div>
    </div>`,"title-bg")}function A(){f(),et("hud").classList.add("hidden"),i=null,e.focus(null);const y=Si.map((U,K)=>{const J=bt(U.id),W=Tv(K),fe=J.done?5:J.clue+(["next","treasure"].includes(J.step)?1:0),E=W?J.done?`${ot("key")} Treasure found! Tap to see it`:fe||J.step!=="intro"?`${fe} of 5 map pieces · tap to continue`:`${ot("sparkle")} New map · tap to start`:`Finish the ${Si[K-1].title} first`;return zo({attr:"data-act",id:W?"hunt":"lockedHunt",data:`data-id="${U.id}"`,colorHex:U.colour,i:K,locked:!W,keepPic:!0,done:J.done,pic:`<span class="glyph ${U.id==="arabic"?"em-ar":""}">${U.emoji}</span>`,title:U.title,sub:an(U.sub),tag:J.done?`${ot("tick")} Done`:fe?`${fe}/5`:"",tagKind:J.done?"done":"now",pips:W?[fe,5]:null,meta:E})}).concat(yv.map((U,K)=>zo({colorHex:U.colour,i:Si.length+K,locked:!0,keepPic:!0,pic:`<span class="glyph">${U.emoji}</span>`,title:U.title,sub:U.sub,meta:`${ot("lock")} Coming soon`}))).join(""),z=Object.keys($e.facts).length;d(`<div class="frame" style="width:min(58rem,95vw)">
      <div class="ribbon">${ot("map")} Choose a treasure map</div>
      ${fh([["talk",`<b>${$e.talks}</b> conversation${$e.talks===1?"":"s"} had`,"blue"],["chest",`<b>${z}</b> treasure${z===1?"":"s"} of knowledge`,"gold"],["moon",`<b>${ur()}</b> night${ur()===1?"":"s"} together`,"green"]])}
      <div class="dkcards narrow board">${y}</div>
      <div class="row">
        <button class="btn gold" data-act="chest">${ot("chest")} Our treasure chest</button>
        <button class="btn parentish" data-act="guide">${ot("grownup")} Parent guide</button>
        <button class="btn" data-act="title">${ot("pencil")} Names</button>
      </div></div>`)}function w(y){i=Ev(y);const z=bt(y);g(),et("hud").classList.remove("hidden"),et("huntEmoji").textContent=i.emoji,et("huntName").textContent=i.title,et("talkCount").textContent=$e.talks,e.setFamily($e.grownup);const U=z.done?5:z.clue+(["next","treasure"].includes(z.step)?1:0);if(e.setProgress(U,{chestOpened:z.done||z.step==="treasure"}),T(),z.done||z.step==="treasure")return ve(!1);if(z.clue>0&&z.step!=="next")return C();_()}function _(){const y=bt(i.id);return y.step==="intro"?L():y.step==="next"?ce():y.step==="learn"?ye():y.step==="ask"?q():b()}const I=()=>i.clues[bt(i.id).clue];function C(){const y=bt(i.id),z=i.clues.slice(0,y.clue);f(),e.focus(null),d(`<div class="frame center">
      <div class="ribbon">${ot("map")} Welcome back, ${ti()==="your child"?"treasure hunters":ti()}!</div>
      <div class="chest-title"><div class="big">${ot("key","huge")}</div><h2>Remember what we found?</h2><p>${z.length} of 5 map pieces are in the tracker. ${_r()}, ask before tapping: can we remember these together?</p></div>
      <div class="facts recap">${z.map((U,K)=>`<div class="fact hidden-fact" data-act="flipFact" style="--i:${K}"><span class="ic">${U.fact.icon}</span><p><span class="peek">${U.title} · tap to remember</span><span class="full">${an(U.fact.text)}</span></p></div>`).join("")}</div>
      <div class="actions"><button class="btn go" data-act="resume">On to clue ${y.clue+1} →</button><button class="link" data-act="home">${ot("map")} Back to the maps</button></div></div>`),Ho(h.querySelector(".facts"))}function T(){const y=bt(i.id),z=y.done?5:y.clue+(["next","treasure"].includes(y.step)?1:0);et("pieces").innerHTML=Pt.map((U,K)=>`<span class="piece ${K<z?"got":K===z?"next":""}" id="piece${K}" title="${U.name}">${K<z?U.icon:"?"}</span>`).join("")}function L(){f(),e.focus(null),d(`<div class="frame center">
      <div class="ribbon">${i.emoji} ${i.title}</div>
      <div class="chest-title"><div class="big">🗺️</div></div>
      <p class="riddle" style="text-align:left">${rn(i.intro)}</p>
      <p>Five clues. Five hidden places on the island, covered in fog. Each clue you solve in the Qur'an clears the fog and gives you a map piece. At the end, the treasure chest opens!</p>
      ${ei(`<p>You are the guide: read each clue aloud, let ${ti()} hold the mushaf or turn the pages, and help with the searching. Hint cards are for you, and they come in two sizes: small first, then bigger.</p>`)}
      <div class="actions"><button class="btn go" data-act="startClue">Read the first clue →</button></div></div>`)}function b(){g();const y=bt(i.id),z=I(),U=Pt[y.clue];y.step="clue",Gt(),e.focus(y.clue,.72),T(),u(`<div class="card">
      <div class="ribbon">Clue ${y.clue+1} of 5 · ${U.name}</div>
      <h2>${U.icon} ${z.title}</h2>
      <p class="riddle">${rn(z.riddle)}</p>
      <div class="think">🤔 <b>Think first:</b> ${rn(z.think)}</div>
      <div class="quran"><span>📖</span>Open your Qur'an (or the Al Quran app)</div>
      ${ei(`<p>${rn(z.parentTip)}</p>`)}
      <div class="actions"><button class="btn go" data-act="search">Let's search! 🔍</button></div></div>`)}const M=`<svg class="rehal" viewBox="0 0 220 130" aria-hidden="true"><g fill="none" stroke="#5b3520" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
    <path d="M40 120 L180 50 M180 120 L40 50" stroke="#c98a4d" stroke-width="9"/><path d="M40 120 L180 50 M180 120 L40 50"/>
    <path d="M30 58 Q70 34 110 50 L110 92 Q70 76 30 100 Z" fill="#4f8a6b"/><path d="M190 58 Q150 34 110 50 L110 92 Q150 76 190 100 Z" fill="#4f8a6b"/>
    <path d="M40 60 Q72 42 104 54 M116 54 Q148 42 180 60" stroke="#f5cf5f" stroke-width="3"/></g></svg>`;function R(){const y=I();mn.page(),d(`<div class="frame center">
      <div class="ribbon">🔍 Search the Qur'an</div>${M}
      <h2>Screen down. Qur'an open!</h2>
      <p class="find">${rn(y.find)}</p>
      <p style="color:var(--ink-soft)">Take your time. Turn the pages together and read the headings out loud.</p>
      <div class="row" style="margin:.6rem 0"><button class="btn small" data-act="surahs">📖 Surah list helper</button><button class="btn small parentish" data-act="hint">💡 Hint for ${xi()}</button></div>
      <div class="actions"><button class="btn go" data-act="found">We found it! →</button><button class="link" data-act="backToClue">← back to the clue</button></div></div>`,"search-bg")}function B(){const y=I();d(`<div class="frame center lookup">
      <div class="eyes">👀</div><h2>Look up! Talk together</h2>
      <p>${ti()==="your child"?"Look":ti()+", look"} at ${_r()}, not at the screen.</p>
      ${ei(`<p>${rn(y.discuss)}</p>`,`👤 For ${xi()}`,"big")}
      <div class="actions"><button class="btn go" data-act="talkedDiscuss">We talked ✓</button><button class="link" data-act="skipDiscuss">Skip for now</button></div></div>`,"lookup-bg")}function G(){const y=bt(i.id);y.step="ask",y.ask=0,Gt(),g(),q()}function q(){g();const y=bt(i.id),z=I();s=z.asks[y.ask],r=0,a=0,o="",e.focus(y.clue,.72);let U="";s.type==="surah"?U=`<input type="search" id="askSearch" placeholder="Type a surah name or number…" autocomplete="off" /><div class="surah-list" id="askList">${ie(ts,"pick")}</div>`:s.type==="choice"?U=`<div class="choices">${Cv(s.options.length).map(J=>`<button class="choice ${s.arabic?"ar":""}" data-act="choose" data-i="${J}">${s.options[J]}</button>`).join("")}</div>`:U=`<div class="numshow" id="numShow">&nbsp;</div><div class="numpad">${[1,2,3,4,5,6,7,8,9].map(J=>`<button data-act="num" data-n="${J}">${J}</button>`).join("")}<button data-act="num" data-n="del" aria-label="delete">⌫</button><button data-act="num" data-n="0">0</button><button class="ok" data-act="num" data-n="ok">✓</button></div>`,u(`<div class="card">
      <div class="ribbon">Clue ${y.clue+1} · question ${y.ask+1} of ${z.asks.length}</div>
      <p class="prompt">${rn(s.prompt)}</p>${U}
      <div id="feedback"></div>
      <div class="actions"><button class="btn small parentish" id="hintBtn" data-act="hint">💡 Stuck? Hint for ${xi()}</button></div></div>`);const K=et("askSearch");K&&K.addEventListener("input",()=>{et("askList").innerHTML=ie(rc(K.value),"pick")})}const ie=(y,z)=>y.map(U=>`<button class="srow" data-act="${z}" data-n="${U.n}"><b>${U.n}</b><span class="nm">${U.name}</span><span class="ar">${U.ar}</span><i>${U.meaning} · Juz ${U.juz} · ${U.ayat} ayat</i></button>`).join("")||'<p style="padding:.6rem">No surah matches. Try another spelling or the number.</p>';function $(y,z=!1){const U=et("feedback");U&&(U.innerHTML=`<div class="feedback ${z?"good":""}">${y}</div>`)}function ae(y){var K,J,W;if(!s)return;if(y===s.answer){mn.right();const fe=bt(i.id),E=I(),x=s.type==="surah"?`✨ Yes! Surah ${ya(y).n} · ${ya(y).name}`:s.type==="number"?`✨ Yes! ${y}`:"✨ Yes, that's it!";return $(x,!0),c.querySelectorAll("[data-act=choose],[data-act=pick],[data-act=num]").forEach(V=>{V.disabled=!0}),(K=c.querySelector(`[data-act=choose][data-i="${y}"]`))==null||K.classList.add("right"),s=null,setTimeout(()=>{fe.ask+1<E.asks.length?(fe.ask++,Gt(),q()):(fe.step="learn",Gt(),ye())},1100/xs),!0}r++,mn.hmm();let U=["Not this one. Look again together! 🔍","Hmm, keep looking. You're getting closer! 🌱","Good try! A hint for "+xi()+" might help. 💡"][Math.min(r-1,2)];return s.type==="surah"&&(U=`That's Surah ${y} · ${ya(y).name}. ${U}`),$(U),s.type==="choice"&&((J=c.querySelector(`[data-act=choose][data-i="${y}"]`))==null||J.classList.add("dim")),r>=1&&((W=et("hintBtn"))==null||W.classList.add("pulse")),r>=2&&a===0&&Y(),!1}function Y(){const y=!!s,z=I(),U=bt(i.id),K=y?s.hints:z.asks[0].hints;a=Math.min(2,a+1),U.hints++,Gt();const J=K.slice(0,a).map((W,fe)=>`<p><span class="hint-level">${fe?"Bigger hint":"Small hint"}:</span> ${rn(W)}</p>`).join("");d(`<div class="frame center">
      <div class="ribbon">💡 Hint card</div>
      ${ei(`${J}<p style="font-size:.95rem;opacity:.85">Try guiding ${ti()} with a question first, like "What do you see at the top of this page?"</p>`)}
      <div class="actions">${a<2?'<button class="btn parentish" data-act="hint">We need a bigger hint</button>':""}<button class="btn go" data-act="closeHint">Back to searching</button></div></div>`,h.classList.contains("search-bg")?"search-bg":""),h.dataset.from=y?"ask":"search"}function ye(){g();const y=bt(i.id),z=I(),U=z.learn;e.focus(y.clue,.72);const K=U.arabic?`<div class="ayah"><span class="ar">${U.arabic.text}</span>${U.arabic.translit?`<span class="tr">${U.arabic.translit}</span>`:""}<span class="mn">${U.arabic.meaning}</span><span class="ref">${U.arabic.ref}</span></div>`:"";u(`<div class="card">
      <div class="ribbon">📚 Learn the context</div>
      <div class="found"><div class="big">✨</div><span class="kicker">You found it!</span><h2>${an(U.name)}</h2></div>
      ${K}
      <div class="sec"><h3>📜 What it means</h3><p>${an(U.meaning)}</p></div>
      <div class="sec"><h3>📖 The story</h3><p>${an(U.story)}</p></div>
      <div class="sec"><h3>💎 Why it matters</h3><p>${an(U.why)}</p></div>
      ${ei(`<ul>${z.talk.map(J=>`<li>${rn(J)}</li>`).join("")}</ul>`,`👤 For ${xi()}: talk together`)}
      <div class="apply"><b>🌱 Try it this week:</b> ${rn(z.apply)}</div>
      <div class="actions"><button class="btn go" data-act="talkedLearn">We talked ✓ · reveal the map!</button><button class="link" data-act="revealOnly">Reveal without talking</button></div></div>`)}async function we(){if(l)return;l=!0;const y=bt(i.id),z=y.clue,U=I();return f(),g(),$e.facts[`${i.id}:${z}`]=!0,Gt(),cc(),setTimeout(()=>mn.whoosh(),700/xs),await e.reveal(z),await Re(z),y.step=z===4?"treasure":"next",Gt(),T(),l=!1,z===4?(mn.chest(),await e.openChest(),y.done=!0,Gt(),ve(!0)):ce(),U}function Re(y){const z=Pt[y],[U,K]=e.project(z.x,1.5,z.z),J=et("piece"+y).getBoundingClientRect(),W=document.createElement("div");W.className="flypiece",W.textContent=z.icon,et("flyLayer").appendChild(W);const fe=W.offsetWidth;return mn.piece(),W.animate([{transform:`translate(${U-fe/2}px, ${K-fe/2}px) scale(0.3) rotate(-20deg)`,opacity:0},{transform:`translate(${U-fe/2}px, ${K-fe*1.6}px) scale(1.3) rotate(8deg)`,opacity:1,offset:.35},{transform:`translate(${J.left+J.width/2-fe/2}px, ${J.top+J.height/2-fe/2}px) scale(${J.width/fe}) rotate(0deg)`,opacity:1}],{duration:1300/xs,easing:"cubic-bezier(.45,.05,.4,1)"}).finished.then(()=>W.remove())}function ce(){const y=bt(i.id),z=y.clue,U=Pt[z],K=i.clues[z];e.focus(null),u(`<div class="card center">
      <div class="ribbon">🧩 Map piece ${z+1} of 5!</div>
      <div class="found"><div class="big">${U.icon}</div><h2>${U.name} is revealed!</h2></div>
      <div class="facts"><div class="fact"><span class="ic">${K.fact.icon}</span><p>${an(K.fact.text)}</p></div></div>
      <p>This fact is now in your treasure chest. ${4-z} more ${4-z===1?"piece":"pieces"} to find.</p>
      <div class="actions"><button class="btn go" data-act="nextClue">Next clue →</button><button class="btn small" data-act="home">🌙 Stop for tonight (saved)</button></div></div>`)}function ve(y){g(),e.focus(4,.55);const z=bt(i.id),U=z.talks>=8?3:z.talks>=4?2:1;u(`<div class="card">
      <div class="ribbon">${ot("key")} Treasure found!</div>
      <div class="chest-title"><div class="big dkpopin" id="treasureBig">${ot("chest","huge")}${ot("sparkle","big")}</div><h2>The treasure is… knowledge!</h2><p>${an(i.finale)}</p></div>
      <div class="facts">${i.clues.map((K,J)=>`<div class="fact" style="animation-delay:${y?J*.15:0}s"><span class="ic">${K.fact.icon}</span><p>${an(K.fact.text)}</p></div>`).join("")}</div>
      ${_h({stars:U,count:z.talks,countIcon:"talk",countLabel:`conversation${z.talks===1?"":"s"} on this map`,chips:[["lantern",`${z.hints} hint${z.hints===1?"":"s"}`,"gold"],["moon",`${ur()} night${ur()===1?"":"s"} together`,"green"]],text:U===3?"Every clue became a conversation. That is the real treasure.":U===2?'Lots of talking together. Next map, try the "Look up!" moments too.':'The map is done. Next time, stop and talk at the "Look up!" screens for more stars.'})}
      ${ei(`<ul>${i.reflect.map(K=>`<li>${rn(K)}</li>`).join("")}</ul>`,`👤 For ${xi()}: family reflection`)}
      <div class="actions"><button class="btn go" data-act="talkedFinal" id="finalTalk">We talked ✓</button>
      <button class="btn gold" data-act="home">${ot("map")} Back to the maps</button><button class="link" data-act="replay">↺ Play this map again</button></div></div>`),y?setTimeout(()=>xh(c),350):(c.querySelectorAll(".dkreward .stars .dk-ico").forEach((K,J)=>{J<U&&K.classList.add("lit")}),c.querySelectorAll(".dkcount").forEach(K=>{K.textContent=K.dataset.to})),Ho(c.querySelector(".facts"))}function H(){const y=Si.map(U=>{const K=U.clues.map((W,fe)=>[W,$e.facts[`${U.id}:${fe}`]]),J=K.filter(W=>W[1]).length;return`<h3>${U.emoji} ${U.title} · ${J} / 5</h3><div class="facts">${K.map(([W,fe])=>fe?`<div class="fact ${ee?"hidden-fact":""}" data-act="flipFact"><span class="ic">${W.fact.icon}</span><p><span class="peek">${W.title} · tap to remember</span><span class="full">${an(W.fact.text)}</span></p></div>`:'<div class="fact locked"><span class="ic">?</span><p>Still hidden in the fog…</p></div>').join("")}</div>`}).join(""),z=Object.keys($e.facts).length;d(`<div class="frame"><div class="ribbon">${ot("chest")} Our treasure chest</div>
      <div class="chest-title"><p>Everything our family has learned together. 💬 <b>${$e.talks}</b> conversations so far.</p>
      ${z?`<button class="btn small ${ee?"gold":"parentish"}" data-act="chestQuiz">${ot(ee?"eye":"question")} ${ee?"Show all the facts":"Quiz us: hide the facts"}</button>`:""}</div>
      ${ee?`<p class="quiz-tip">${_r()} reads the title. Can ${ti()} remember the fact? Tap a card to check.</p>`:""}${y}
      <div class="actions"><button class="btn gold" data-act="maps">Back</button></div></div>`)}let ee=!1;function de(){d(`<div class="frame guide"><div class="ribbon">👤 Parent guide</div>
      ${ei("<p><b>You are the teacher; the game is the treasure map.</b> It gives clues and context, but the answers live in the Qur'an, which you open together.</p>","👤 For Baba / Mama")}
      <h3>Each clue goes like this</h3>
      ${Bo([{icon:"scroll",title:"Clue",text:'read the riddle aloud. Ask the "Think first" question and let your child guess.'},{icon:"rehal",title:"Search",text:"screen down, mushaf open. Use the Surah list helper to find your way (names, numbers, juz, ayah counts)."},{icon:"eye",title:"Look up",text:'the screen stops and you talk. Tap "We talked ✓" only when you really did.'},{icon:"hand",title:"Answer",text:'tap the surah, number or choice. Wrong answers just say "look again". Hints come to you first, in two sizes.'},{icon:"talk",title:"Learn &amp; talk",text:"meaning, story and why it matters, then questions for you to ask and a small thing to try this week."},{icon:"puzzle",title:"Reveal",text:"the fog clears and a map piece flies in. After five, the chest opens."}])}
      <h3>Good to know</h3>
      <ul><li>One map takes about 15–20 minutes. You can stop after any clue ("Stop for tonight"); progress is saved on this device.</li>
      <li>Handle the mushaf with respect: keep it on a stand, a table or your lap, never on the floor. Many families make wudu before holding it; the Al Quran app works too.</li>
      <li>Progress is counted in <b>conversations had</b>, not points or time.</li>
      <li>Prophets are never drawn. Their stories are told in words, with عليه السلام, and ﷺ after the name of the Prophet Muhammad.</li>
      <li>Every citation is listed in CONTENT_REVIEW.md for checking with your local scholar.</li></ul>
      <div class="row" style="margin-top:1rem"><button class="btn gold" data-act="maps">Back</button>
      <button class="btn small parentish" data-act="openAll">${$e.openAll?"🔒 Unlock maps in order again":"🔓 Open all maps now"}</button>
      <button class="btn small" data-act="reset">Start everything fresh</button></div></div>`)}function j(){d(`<div class="frame" style="width:min(62rem,95vw)"><div class="ribbon">🗺️ ${i.title}: our map</div>
      <div class="mapview"><canvas id="mapCanvas"></canvas><div id="mapPins"></div></div>
      <div class="actions"><button class="btn gold" data-act="closeOverlay">Back</button></div></div>`);const y=e.snapshotMap(et("mapCanvas")),z=bt(i.id),U=z.done?5:z.clue+(["next","treasure"].includes(z.step)?1:0);et("mapPins").innerHTML=Pt.map((K,J)=>`<span class="rlabel pinlbl ${J<U?"":"fog"}" style="left:${y.regions[J][0]}%;top:${y.regions[J][1]-9}%">${J<U?K.icon+" "+K.name:"❓ ???"}</span>`).join("")+`<span class="rlabel pinlbl" style="left:${y.camp[0]}%;top:${y.camp[1]+7}%">⛺ Camp</span>`}function Ce(){et("surahModal").classList.remove("hidden"),et("surahSearch").value="",et("surahList").innerHTML=ie(ts,"noop")}et("surahSearch").addEventListener("input",y=>{et("surahList").innerHTML=ie(rc(y.target.value),"noop")}),window.addEventListener("keydown",y=>{(s==null?void 0:s.type)==="number"&&!c.classList.contains("hidden")&&h.classList.contains("hidden")&&(/^\d$/.test(y.key)?ze("num",{dataset:{n:y.key}}):y.key==="Backspace"?ze("num",{dataset:{n:"del"}}):y.key==="Enter"&&ze("num",{dataset:{n:"ok"}}))});function ze(y,z){var K,J;const U=i?bt(i.id):null;switch(y){case"grown":$e.grownup=z.dataset.k,document.querySelectorAll("#grownSeg button").forEach(W=>W.classList.toggle("on",W===z));break;case"begin":$e.child=(((K=et("childName"))==null?void 0:K.value)||"").trim(),Gt(),A();break;case"title":p();break;case"maps":A();break;case"hunt":w(z.dataset.id);break;case"lockedHunt":(J=z.animate)==null||J.call(z,[{transform:"translateX(-5px)"},{transform:"translateX(5px)"},{transform:"none"}],300),mn.hmm();break;case"chest":ee=!1,H();break;case"chestQuiz":ee=!ee,H();break;case"flipFact":z.classList.contains("hidden-fact")&&(z.classList.toggle("open"),z.classList.contains("open")&&mn.page());break;case"resume":g(),_();break;case"guide":de();break;case"openAll":$e.openAll=!$e.openAll,Gt(),de();break;case"reset":confirm("Start everything fresh? This clears all maps and conversations on this device.")&&(wv(),$e=rh(),p());break;case"startClue":b();break;case"search":R();break;case"backToClue":g();break;case"found":B();break;case"talkedDiscuss":m(),G();break;case"skipDiscuss":G();break;case"pick":ae(+z.dataset.n);break;case"choose":z.classList.contains("dim")||ae(+z.dataset.i);break;case"num":{const W=z.dataset.n;W==="del"?o=o.slice(0,-1):W==="ok"?o&&(ae(+o)||(o="")):o.length<4&&(o+=W),et("numShow")&&(et("numShow").innerHTML=o||"&nbsp;");break}case"hint":Y();break;case"closeHint":h.dataset.from==="search"?R():g();break;case"talkedLearn":m(),we();break;case"revealOnly":we();break;case"nextClue":U.clue++,U.step="clue",U.ask=0,Gt(),b();break;case"talkedFinal":m(),z.disabled=!0,z.textContent="Talked ✓ · جزاكم الله خيرا";break;case"replay":$e.hunts[i.id]={...sh(),talks:0},Gt(),w(i.id);break;case"home":A();break;case"surahs":Ce();break;case"closeSurahs":et("surahModal").classList.add("hidden");break;case"map":j();break;case"closeOverlay":g();break;case"mute":$e.muted=!$e.muted,oc($e.muted),et("muteBtn").innerHTML=ot($e.muted?"mute":"sound"),et("muteBtn").classList.add("dk-iconbtn"),Gt();break;case"rotL":e.rotate(-1);break;case"rotR":e.rotate(1);break;default:return}["pick","choose","num"].includes(y)||mn.tap()}document.addEventListener("click",y=>{Av();const z=y.target.closest("[data-act]");z&&!z.disabled&&ze(z.dataset.act,z)});const Ge=Pt.map(y=>{const z=document.createElement("span");return z.className="rlabel",et("labels").appendChild(z),z});function Ye(){const y=!!i&&et("overlay").classList.contains("hidden"),z=i?bt(i.id):null,U=z?z.done?5:z.clue+(["next","treasure"].includes(z.step)?1:0):0;Pt.forEach((K,J)=>{const W=Ge[J];if(!y){W.style.display="none";return}const[fe,E]=e.project(K.x,J<U?K.top+.4:K.top*.32+2.6,K.z);W.style.display="",W.style.left=fe+"px",W.style.top=E+"px";const x=J===U&&z.step!=="next"&&!l,V="rlabel "+(J<U?"":x?"target":"fog"),se=J<U?`${K.icon} ${K.name}`:x?"🔍 The clue leads here":"❓ ???";W.className!==V&&(W.className=V),W.textContent!==se&&(W.textContent=se)})}let oe=performance.now();function pe(y){const z=Math.max(0,Math.min(.1,(y-oe)/1e3))*xs;oe=y,e.update(z),e.render(),Ye(),requestAnimationFrame(pe)}t(),requestAnimationFrame(pe),$e.child||Object.keys($e.hunts).length?A():p(),window.game={ready:!0,world:e,HUNTS:Si,REGIONS:Pt,get state(){return $e},get hunt(){return i==null?void 0:i.id},get step(){return i?bt(i.id):null},get ask(){return s},setSpeed:y=>{xs=y},answer:ae,busy:()=>l||e.busy()}}Rv();
