(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ec=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Lh=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),K={red:"#ea5d50",gold:"#f6cf5c",green:"#71cf6d",blue:"#6f95e6",teal:"#5fbfb0",purple:"#a98ae0",orange:"#f3a04c",pink:"#f08cb0",sand:"#e9d6a8",paper:"#fffaf0",skin:"#e0a878",skin2:"#c68a5e",wood:"#c98a4d",sky:"#bfe0f5"},_n=(n,e,t)=>`<ellipse cx="${n}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/><ellipse cx="${e}" cy="${t}" rx="1.7" ry="2.4" fill="currentColor" stroke="none"/>`,ys={fire:`<path d="M32 6c3 8 12 12 12 24a12 12 0 0 1-24 0c0-6 3-9 5-12 0 5 2 7 4 8 0-8-1-14 3-20z" fill="${K.orange}"/><path d="M32 22c2 4 6 6 6 11a6 6 0 0 1-12 0c0-4 3-6 6-11z" fill="${K.gold}" stroke="none"/><path d="M14 56h36" /><path d="M18 50l28 6M46 50l-28 6" stroke-width="4"/>`,moon:'<path d="M40 8a22 22 0 1 0 16 36A18 18 0 0 1 40 8z" fill="#fff2a8"/><circle cx="50" cy="16" r="2" fill="currentColor" stroke="none"/><circle cx="58" cy="30" r="1.6" fill="currentColor" stroke="none"/>',star:`<path d="M32 6l7.5 16 17.5 2-13 12 3.5 17L32 44l-15.5 9 3.5-17-13-12 17.5-2z" fill="${K.gold}"/>`,book:`<path d="M8 14q22-6 24 4v36q-2-8-24-4z" fill="${K.paper}"/><path d="M56 14q-22-6-24 4v36q2-8 24-4z" fill="${K.paper}"/><path d="M14 24l12 2M14 32l12 2M38 26l12-2M38 34l12-2" stroke-width="2.4"/>`,quran:`<path d="M10 42l22 10 22-10v-8l-22 10-22-10z" fill="${K.wood}"/><path d="M12 30q20-8 20 2v18q0-8-20-2z" fill="${K.green}"/><path d="M52 30q-20-8-20 2v18q0-8 20-2z" fill="${K.green}"/><path d="M18 36l8 1M18 42l8 1M38 37l8-1M38 43l8-1" stroke="#fff" stroke-width="2.4"/><path d="M32 12v6M24 16l3 4M40 16l-3 4" stroke-width="2.6"/>`,scroll:`<path d="M16 14h32v34H16z" fill="${K.paper}"/><rect x="10" y="10" width="44" height="8" rx="4" fill="${K.sand}"/><rect x="10" y="46" width="44" height="8" rx="4" fill="${K.sand}"/><path d="M24 26h16M24 34h12" stroke-width="2.6"/>`,map:`<path d="M8 16l16-6 16 6 16-6v38l-16 6-16-6-16 6z" fill="${K.sand}"/><path d="M24 10v38M40 16v38" stroke-width="2.4"/><path d="M14 36q6-10 14-4t12-8" stroke="${K.red}" stroke-dasharray="4 3" stroke-width="2.6"/><path d="M44 24l6 6M50 24l-6 6" stroke="${K.red}" stroke-width="3"/>`,chest:`<rect x="8" y="26" width="48" height="28" rx="4" fill="${K.wood}"/><path d="M8 30a24 14 0 0 1 48 0z" fill="${K.red}"/><rect x="26" y="26" width="12" height="12" rx="2" fill="${K.gold}"/><path d="M8 30h48" />`,key:`<circle cx="22" cy="24" r="12" fill="${K.gold}"/><circle cx="22" cy="24" r="4" fill="${K.paper}"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke-width="5" stroke="currentColor"/><path d="M32 30l20 20M46 44l6-6M40 50l6-6" stroke="${K.gold}" stroke-width="2"/>`,lock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${K.gold}"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,unlock:`<rect x="14" y="28" width="36" height="28" rx="6" fill="${K.green}"/><path d="M20 28v-8a12 12 0 0 1 24 0" fill="none" stroke-width="5"/><circle cx="32" cy="40" r="4" fill="currentColor" stroke="none"/><path d="M32 42v8" stroke-width="3.5"/>`,house:`<path d="M6 32L32 8l26 24" fill="none" stroke-width="4"/><path d="M12 30v26h40V30" fill="${K.paper}"/><path d="M12 30L32 12l20 18z" fill="${K.red}"/><rect x="26" y="38" width="12" height="18" rx="2" fill="${K.wood}"/><rect x="42" y="36" width="8" height="8" fill="${K.sky}"/>`,door:`<rect x="16" y="8" width="32" height="50" rx="14" fill="${K.wood}"/><rect x="22" y="14" width="20" height="38" rx="8" fill="none" stroke-width="2.4"/><circle cx="40" cy="36" r="3" fill="${K.gold}"/><path d="M8 58h48" stroke-width="3.5"/>`,magnifier:`<circle cx="26" cy="26" r="16" fill="#dfe8ff"/><circle cx="26" cy="26" r="9" fill="none" stroke="#fff" stroke-width="3"/><path d="M38 38l16 16" stroke-width="8"/><path d="M38 38l16 16" stroke="${K.red}" stroke-width="3.5"/>`,badge:`<path d="M20 36l-6 22 18-8 18 8-6-22" fill="${K.red}"/><circle cx="32" cy="24" r="18" fill="${K.gold}"/><path d="M32 13l3.5 7 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1z" fill="${K.paper}" stroke-width="2.2"/>`,tick:`<path d="M12 34l14 14 26-30" fill="none" stroke-width="11"/><path d="M12 34l14 14 26-30" fill="none" stroke="${K.green}" stroke-width="5"/>`,hand:`<path d="M22 30V14a4 4 0 0 1 8 0v14l2-18a4 4 0 0 1 8 0v18l2-10a4 4 0 0 1 8 0v18c0 12-8 20-18 20S14 50 14 38v-6a4 4 0 0 1 8 0z" fill="${K.skin}"/>`,talk:`<path d="M8 12h30a6 6 0 0 1 6 6v14a6 6 0 0 1-6 6H24l-10 8v-8H8a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6z" fill="${K.blue}" transform="translate(4 0)"/><path d="M34 30h22a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5h-4v7l-9-7H34a5 5 0 0 1-5-5V35a5 5 0 0 1 5-5z" fill="${K.gold}"/><path d="M16 22h16M16 28h10" stroke="#fff" stroke-width="2.6"/>`,ear:`<path d="M20 26a14 14 0 0 1 28 0c0 10-8 10-10 18-1 6-5 10-10 10-4 0-7-3-7-7" fill="${K.skin}"/><path d="M30 28a5 5 0 0 1 10 0c0 5-5 5-6 10" fill="none" stroke-width="2.6"/>`,eye:`<path d="M4 32q28-26 56 0Q32 58 4 32z" fill="#fff"/><circle cx="32" cy="32" r="9" fill="${K.teal}"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><circle cx="36" cy="28" r="1.8" fill="#fff" stroke="none"/>`,heart:`<path d="M32 56S6 40 6 22a13 13 0 0 1 26-4 13 13 0 0 1 26 4c0 18-26 34-26 34z" fill="${K.pink}"/><ellipse cx="20" cy="20" rx="4" ry="2.5" fill="#fff" stroke="none" transform="rotate(-30 20 20)"/>`,people:`<circle cx="20" cy="22" r="9" fill="${K.skin2}"/><path d="M4 56c0-12 7-18 16-18s16 6 16 18z" fill="${K.blue}"/><circle cx="44" cy="20" r="11" fill="${K.skin}"/><path d="M26 56c0-13 8-20 18-20s18 7 18 20z" fill="${K.green}"/>${_n(17,23,22)}${_n(40,48,20)}`,child:`<path d="M18 20a14 14 0 0 1 28 0v10H18z" fill="${K.purple}"/><circle cx="32" cy="24" r="12" fill="${K.skin}"/><path d="M12 58c0-12 9-20 20-20s20 8 20 20z" fill="${K.teal}"/>${_n(27.5,36.5,24)}<path d="M28 30q4 3 8 0" fill="none" stroke-width="2.2"/>`,grownup:`<path d="M14 58c0-14 8-22 18-22s18 8 18 22z" fill="${K.blue}"/><circle cx="32" cy="20" r="13" fill="${K.skin2}"/><path d="M19 18a13 13 0 0 1 26 0v6q-13-6-26 0z" fill="${K.paper}"/>${_n(27,37,22)}<path d="M27 28q5 4 10 0" fill="none" stroke-width="2.2"/>`,family:`<circle cx="18" cy="18" r="9" fill="${K.skin2}"/><path d="M4 50c0-12 6-18 14-18s14 6 14 18z" fill="${K.blue}"/><circle cx="46" cy="18" r="9" fill="${K.skin}"/><path d="M32 50c0-12 6-18 14-18s14 6 14 18z" fill="${K.pink}"/><circle cx="32" cy="36" r="7" fill="${K.skin}"/><path d="M22 60c0-9 4-14 10-14s10 5 10 14z" fill="${K.gold}"/>${_n(15.5,20.5,18)}${_n(43.5,48.5,18)}${_n(30,34,36)}`,chalk:`<rect x="6" y="10" width="52" height="38" rx="3" fill="${K.wood}"/><rect x="11" y="15" width="42" height="28" fill="#3f6b58"/><path d="M18 24h14M18 32h22M18 38h10" stroke="#fff" stroke-width="2.4"/><path d="M20 48v10M44 48v10" stroke-width="3.5"/>`,camel:`<path d="M14 56V40q-6-8 2-16 6-6 14-4 6-10 14-8 6 2 8 8 4 2 4 8v8l-6 2v18" fill="${K.sand}"/><path d="M12 24q6-10 20-8" fill="none" stroke-width="2.4"/><path d="M26 40v16M40 40v16" stroke-width="3"/><circle cx="50" cy="26" r="1.8" fill="currentColor" stroke="none"/>`,dua:`<path d="M20 58V34q-10-2-12-14l6-10q6 0 8 8l4 8v32z" fill="${K.skin}"/><path d="M44 58V34q10-2 12-14l-6-10q-6 0-8 8l-4 8v32z" fill="${K.skin}"/><path d="M26 44h12" stroke-width="2"/>`,mosque:`<path d="M10 58V34h44v24z" fill="${K.paper}"/><path d="M14 34a18 14 0 0 1 36 0z" fill="${K.teal}"/><path d="M32 12v8" stroke-width="3"/><circle cx="32" cy="11" r="2.2" fill="${K.gold}"/><rect x="26" y="42" width="12" height="16" rx="6" fill="${K.wood}"/><path d="M6 58V22l4-6 4 6v36M50 58V22l4-6 4 6v36" fill="${K.paper}"/>`,compass:`<circle cx="32" cy="32" r="24" fill="${K.sand}"/><circle cx="32" cy="32" r="18" fill="${K.paper}"/><path d="M32 14l6 18-6 18-6-18z" fill="${K.red}"/><path d="M32 32l-6-0 6 18 6-18z" fill="#fff" stroke="none"/><circle cx="32" cy="32" r="3" fill="currentColor" stroke="none"/>`,puzzle:`<path d="M12 14h16a6 6 0 1 1 12 0h12v16a6 6 0 1 0 0 12v16H36a6 6 0 1 1-12 0H12V42a6 6 0 1 1 0-12z" fill="${K.purple}"/>`,lantern:`<path d="M22 20h20l4 28H18z" fill="#fff2a8"/><rect x="20" y="12" width="24" height="8" rx="3" fill="${K.wood}"/><path d="M32 12V6M18 48h28l-4 8H22z" fill="${K.wood}"/><path d="M32 28c2 3 4 5 4 8a4 4 0 0 1-8 0c0-3 2-5 4-8z" fill="${K.orange}" stroke-width="2"/>`,gem:`<path d="M16 12h32l10 14-26 30L6 26z" fill="${K.teal}"/><path d="M6 26h52M16 12l10 14 6-14 6 14 10-14M26 26l6 30 6-30" fill="none" stroke-width="2.4"/>`,sound:'<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 22a14 14 0 0 1 0 20M46 14a24 24 0 0 1 0 36" fill="none" stroke-width="4.5"/>',mute:`<path d="M8 24h10l14-12v40L18 40H8z" fill="#fff"/><path d="M40 24l16 16M56 24L40 40" stroke-width="6"/><path d="M40 24l16 16M56 24L40 40" stroke="${K.red}" stroke-width="2.8"/>`,help:`<circle cx="32" cy="32" r="24" fill="${K.blue}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke="#fff" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="#fff" stroke="none"/>`,home:`<path d="M8 30L32 10l24 20" fill="none" stroke-width="4"/><path d="M14 28v26h36V28" fill="${K.paper}"/><rect x="26" y="38" width="12" height="16" rx="2" fill="${K.wood}"/>`,pause:'<rect x="14" y="12" width="12" height="40" rx="3" fill="#fff"/><rect x="38" y="12" width="12" height="40" rx="3" fill="#fff"/>',play:'<path d="M18 10l34 22-34 22z" fill="#fff"/>',back:'<path d="M38 12L16 32l22 20" fill="none" stroke-width="9"/><path d="M38 12L16 32l22 20" fill="none" stroke="#fff" stroke-width="4"/>',pencil:`<path d="M12 52l4-14 28-28 10 10-28 28z" fill="${K.gold}"/><path d="M40 14l10 10" /><path d="M16 38l10 10" /><path d="M12 52l4-14 10 10z" fill="${K.skin}"/>`,dice:`<rect x="10" y="10" width="44" height="44" rx="9" fill="#fff"/><circle cx="22" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="22" r="4" fill="currentColor" stroke="none"/><circle cx="32" cy="32" r="4" fill="${K.red}" stroke="none"/><circle cx="22" cy="42" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="42" r="4" fill="currentColor" stroke="none"/>`,mic:`<rect x="22" y="6" width="20" height="32" rx="10" fill="${K.red}"/><path d="M14 30a18 18 0 0 0 36 0M32 48v10M22 58h20" fill="none" stroke-width="4"/>`,palette:`<path d="M32 8a24 24 0 1 0 8 46c4-2 2-6 0-8s-2-6 4-6h4a8 8 0 0 0 8-8A24 24 0 0 0 32 8z" fill="${K.paper}"/><circle cx="20" cy="26" r="4" fill="${K.red}" stroke="none"/><circle cx="30" cy="18" r="4" fill="${K.gold}" stroke="none"/><circle cx="42" cy="20" r="4" fill="${K.green}" stroke="none"/><circle cx="18" cy="38" r="4" fill="${K.blue}" stroke="none"/>`,mask:`<path d="M10 14q22 10 44 0v20a22 22 0 0 1-44 0z" fill="${K.purple}"/><path d="M20 28q4-4 8 0M36 28q4-4 8 0" fill="none" stroke-width="3"/><path d="M24 42q8 6 16 0" fill="none" stroke-width="3"/>`,question:`<circle cx="32" cy="32" r="24" fill="${K.gold}"/><path d="M24 26a8 8 0 1 1 12 7c-3 2-4 3-4 7" fill="none" stroke-width="5"/><circle cx="32" cy="47" r="3.2" fill="currentColor" stroke="none"/>`,ban:`<circle cx="32" cy="32" r="24" fill="#fff"/><circle cx="32" cy="32" r="16" fill="none" stroke="${K.red}" stroke-width="6"/><path d="M21 21l22 22" stroke="${K.red}" stroke-width="6"/>`,sun:`<circle cx="32" cy="32" r="14" fill="${K.gold}"/><path d="M32 6v8M32 50v8M6 32h8M50 32h8M13 13l6 6M45 45l6 6M13 51l6-6M45 19l6-6" stroke-width="4"/>`,cloud:'<path d="M18 48a10 10 0 0 1-2-20 14 14 0 0 1 27-4 10 10 0 0 1 5 24z" fill="#fff"/>',water:'<path d="M32 6c8 12 16 20 16 32a16 16 0 0 1-32 0C16 26 24 18 32 6z" fill="#78c4dc"/><ellipse cx="25" cy="38" rx="3" ry="6" fill="#e9f7fb" stroke="none"/>',brick:`<rect x="6" y="14" width="24" height="12" fill="${K.wood}"/><rect x="34" y="14" width="24" height="12" fill="${K.orange}"/><rect x="18" y="30" width="26" height="12" fill="${K.orange}"/><rect x="6" y="30" width="8" height="12" fill="${K.wood}"/><rect x="48" y="30" width="10" height="12" fill="${K.wood}"/><rect x="6" y="46" width="24" height="12" fill="${K.orange}"/><rect x="34" y="46" width="24" height="12" fill="${K.wood}"/>`,bee:`<ellipse cx="32" cy="36" rx="16" ry="12" fill="${K.gold}"/><path d="M26 25v22M34 25v22M42 28v16" stroke-width="3.5"/><ellipse cx="22" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(-25 22 20)"/><ellipse cx="42" cy="20" rx="10" ry="6" fill="#fff" transform="rotate(25 42 20)"/><circle cx="14" cy="36" r="6" fill="${K.gold}"/><circle cx="12" cy="35" r="1.6" fill="currentColor" stroke="none"/>`,leaf:`<path d="M12 52C12 26 30 10 54 10c0 26-16 44-42 42z" fill="${K.green}"/><path d="M14 50L46 18" fill="none" stroke-width="2.8"/>`,school:`<path d="M8 58V28l24-14 24 14v30z" fill="${K.paper}"/><path d="M8 28l24-14 24 14" fill="none" stroke-width="4"/><rect x="26" y="40" width="12" height="18" rx="2" fill="${K.wood}"/><circle cx="32" cy="30" r="5" fill="${K.gold}"/><path d="M32 8v8" stroke-width="3"/><path d="M32 8h10l-10 5z" fill="${K.red}"/>`,friends:`<circle cx="22" cy="22" r="10" fill="${K.skin}"/><circle cx="44" cy="24" r="9" fill="${K.skin2}"/><path d="M6 56c0-12 7-18 16-18s16 6 16 18z" fill="${K.green}"/><path d="M30 56c0-11 6-16 14-16s14 5 14 16z" fill="${K.orange}"/>${_n(19,25,22)}${_n(41.5,46.5,24)}<path d="M19 28q3 2 6 0M41 29q3 2 6 0" fill="none" stroke-width="2"/>`,money:`<ellipse cx="32" cy="40" rx="22" ry="10" fill="${K.gold}"/><ellipse cx="32" cy="32" rx="22" ry="10" fill="${K.gold}"/><ellipse cx="32" cy="24" rx="22" ry="10" fill="#fff2a8"/><ellipse cx="32" cy="24" rx="12" ry="5" fill="none" stroke-width="2.2"/>`,phone:`<rect x="18" y="6" width="28" height="52" rx="6" fill="#fff"/><rect x="22" y="12" width="20" height="36" rx="2" fill="${K.sky}"/><circle cx="32" cy="53" r="2.2" fill="currentColor" stroke="none"/>`,sparkle:`<path d="M26 6l5 15 15 5-15 5-5 15-5-15-15-5 15-5z" fill="${K.gold}"/><path d="M48 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff"/>`,crystal:`<path d="M20 48l12-40 12 40z" fill="${K.purple}"/><path d="M14 56h36l-6-8H20z" fill="${K.blue}"/><path d="M32 8v40" stroke-width="2"/>`,seedling:`<path d="M12 56q20-6 40 0z" fill="${K.wood}"/><path d="M32 52V30" stroke-width="4"/><path d="M32 36q-2-14-16-14 2 14 16 14z" fill="${K.green}"/><path d="M32 30q2-14 16-14-2 14-16 14z" fill="#b4de94"/>`,rehal:`<path d="M8 48l24-16 24 16-24 10z" fill="${K.wood}"/><path d="M14 30q18-8 18 0v14q0-8-18 0z" fill="${K.paper}"/><path d="M50 30q-18-8-18 0v14q0-8 18 0z" fill="${K.paper}"/>`,juz:`<path d="M12 10h36a4 4 0 0 1 4 4v38a4 4 0 0 1-4 4H12z" fill="${K.teal}"/><path d="M12 10v46M20 10v46" stroke-width="2.4"/><rect x="28" y="22" width="18" height="12" rx="2" fill="${K.paper}"/>`,flag:`<path d="M16 58V8" stroke-width="5"/><path d="M18 10h30l-6 12 6 12H18z" fill="${K.red}"/>`,stop:`<path d="M20 8h24l16 16v24L44 60H20L4 44V20z" fill="${K.red}"/><path d="M20 32h24" stroke="#fff" stroke-width="6"/>`,shield:`<path d="M32 6l22 8v18c0 14-10 22-22 28C20 54 10 46 10 32V14z" fill="${K.blue}"/><path d="M22 32l7 7 13-14" fill="none" stroke="#fff" stroke-width="5"/>`,trophy:`<path d="M18 8h28v14a14 14 0 0 1-28 0z" fill="${K.gold}"/><path d="M18 14H8a10 10 0 0 0 10 10M46 14h10a10 10 0 0 1-10 10" fill="none" stroke-width="3.5"/><path d="M28 36h8v8h-8z" fill="${K.gold}"/><rect x="18" y="44" width="28" height="10" rx="3" fill="${K.wood}"/>`,hourglass:`<path d="M16 8h32l-12 24 12 24H16l12-24z" fill="#fff"/><path d="M22 14h20l-10 14zM24 52h16l-8-10z" fill="${K.sand}" stroke="none"/><path d="M12 8h40M12 56h40" stroke-width="4"/>`},Bs=new Map;function tn(n,e=""){const t=n+"|"+e;return Bs.has(t)||Bs.set(t,`<span class="dk-ico ${e}" data-ic="${n}"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${ys[n]||ys.star}</svg></span>`),Bs.get(t)}const Ih=n=>n in ys;function Dh(n){for(const[e,t]of Object.entries(n)){const i=document.getElementById(e);i&&(i.classList.add("dk-iconbtn"),i.innerHTML=tn(t))}}const Uh=n=>n?n.startsWith("data:")||n.startsWith("blob:")||n.startsWith("/")||n.startsWith("http")?`<img src="${n}" alt="" ${n.startsWith("data:image/svg")?'class="contain"':""}>`:Ih(n)?tn(n):`<span class="glyph">${n}</span>`:"",Nh=(n,e="data-act")=>`<div class="dkavs">${n.map((t,i)=>`<button class="dkav ${t.color||""} ${t.on?"on":""}" style="--i:${i}" ${t.attr||e}="${Lh(t.id)}"><span class="face">${Uh(t.pic)}</span><span>${t.label}</span>${t.sub?`<small>${t.sub}</small>`:""}</button>`).join("")}</div>`,Fh=(n,e,t="",i=0)=>`<span class="dkchip ${t}" style="--i:${i}">${n?tn(n):""}${e}</span>`,el=n=>`<div class="dkstats">${n.map((e,t)=>Fh(e[0],e[1],e[2]||"",t)).join("")}</div>`;function kh(n,{tone:e="",glow:t=!1,sparkles:i=0}={}){const r=i?`<span class="sparkles">${Array.from({length:i},(s,a)=>`<i style="--i:${a};left:${8+a*37%84}%;top:${10+a*53%55}%"></i>`).join("")}</span>`:"";return`<div class="dkhero ${e?"dk-"+e:""}">${r}${t?'<span class="glow"></span>':""}${n.map((s,a)=>s.src?`<img src="${s.src}" alt="" class="${s.cls||""}" style="--i:${a}">`:tn(s.icon,s.cls||"").replace("style=","").replace('class="dk-ico',`style="--i:${a}" class="dk-ico`)).join("")}</div>`}function Oh(n){n&&([...n.children].forEach((e,t)=>e.style.setProperty("--i",t)),n.classList.add("dkstagger"))}const Tc=()=>{let n=document.getElementById("dkfx");return n||(n=document.createElement("div"),n.id="dkfx",document.body.appendChild(n)),n},tl=["#f6cf5c","#ea5d50","#71cf6d","#6f95e6","#f08cb0","#5fbfb0","#fff"];function Bh(n,e,{n:t=28,spread:i=180,up:r=130}={}){if(Ec())return;const s=Tc();for(let a=0;a<t;a++){const o=document.createElement("i");o.className="dkconf";const l=-Math.PI/2+(Math.random()-.5)*2.2,c=i*(.4+Math.random()*.6);o.style.cssText=`left:${n}px;top:${e}px;background:${tl[a%tl.length]};--dx:${Math.cos(l)*c}px;--dy:${Math.sin(l)*c*.5+r}px;--rot:${(Math.random()-.5)*900}deg;--kt:${.9+Math.random()*.7}s;transform:rotate(${Math.random()*360}deg)`,s.appendChild(o),setTimeout(()=>o.remove(),1700)}}function zh(n,e,t=6){if(!Ec())for(let i=0;i<t;i++){const r=document.createElement("i");r.className="dkstar",r.innerHTML=`<svg viewBox="0 0 64 64" fill="none" stroke="#6b2f1a" stroke-width="3" stroke-linejoin="round">${ys.star}</svg>`,r.style.cssText=`left:${n}px;top:${e}px;--dx:${(Math.random()-.5)*140}px;--dy:${-40-Math.random()*80}px;--kt:${.7+Math.random()*.5}s`,Tc().appendChild(r),setTimeout(()=>r.remove(),1300)}}function Hh(n,e=!1){var s;const t=(s=n==null?void 0:n.getBoundingClientRect)==null?void 0:s.call(n);if(!t)return;const i=t.left+t.width/2,r=t.top+t.height/2;Bh(i,r,{n:e?44:20,spread:e?280:150}),e&&zh(i,r,8)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="170",Vh=0,nl=1,Gh=2,Ac=1,Wh=2,Tn=3,jn=0,Ht=1,Rt=2,Yn=0,Yi=1,Aa=2,il=3,rl=4,$h=5,li=100,Xh=101,Yh=102,qh=103,Zh=104,Jh=200,jh=201,Kh=202,Qh=203,Ra=204,Ca=205,eu=206,tu=207,nu=208,iu=209,ru=210,su=211,au=212,ou=213,lu=214,Pa=0,La=1,Ia=2,Ji=3,Da=4,Ua=5,Na=6,Fa=7,Rc=0,cu=1,hu=2,qn=0,uu=1,fu=2,du=3,pu=4,mu=5,gu=6,vu=7,Cc=300,ji=301,Ki=302,ka=303,Oa=304,Rs=306,Ms=1e3,hi=1001,Ba=1002,Ct=1003,_u=1004,Fr=1005,pn=1006,zs=1007,ui=1008,In=1009,Pc=1010,Lc=1011,Ar=1012,So=1013,di=1014,An=1015,pi=1016,bo=1017,wo=1018,Qi=1020,Ic=35902,Dc=1021,Uc=1022,sn=1023,Nc=1024,Fc=1025,qi=1026,er=1027,Cs=1028,Eo=1029,kc=1030,To=1031,Ao=1033,ps=33776,ms=33777,gs=33778,vs=33779,za=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,$a=37492,Xa=37496,Ya=37808,qa=37809,Za=37810,Ja=37811,ja=37812,Ka=37813,Qa=37814,eo=37815,to=37816,no=37817,io=37818,ro=37819,so=37820,ao=37821,_s=36492,oo=36494,lo=36495,Oc=36283,co=36284,ho=36285,uo=36286,xu=3200,yu=3201,Bc=0,Mu=1,$n="",Bt="srgb",ir="srgb-linear",Ps="linear",lt="srgb",Si=7680,sl=519,Su=512,bu=513,wu=514,zc=515,Eu=516,Tu=517,Au=518,Ru=519,al=35044,ol="300 es",Rn=2e3,Ss=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Sr=Math.PI/180,Rr=180/Math.PI;function _i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Ro(n,e){return(n%e+e)%e}function Cu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pu(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function Lu(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function Iu(n,e=1){return e-Math.abs(Ro(n,e*2)-e)}function Du(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Uu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nu(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fu(n,e){return n+Math.random()*(e-n)}function ku(n){return n*(.5-Math.random())}function Ou(n){n!==void 0&&(ll=n);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bu(n){return n*Sr}function zu(n){return n*Rr}function Hu(n){return(n&n-1)===0&&n!==0}function Vu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Wu(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $u={DEG2RAD:Sr,RAD2DEG:Rr,generateUUID:_i,clamp:At,euclideanModulo:Ro,mapLinear:Cu,inverseLerp:Pu,lerp:br,damp:Lu,pingpong:Iu,smoothstep:Du,smootherstep:Uu,randInt:Nu,randFloat:Fu,randFloatSpread:ku,seededRandom:Ou,degToRad:Bu,radToDeg:zu,isPowerOfTwo:Hu,ceilPowerOfTwo:Vu,floorPowerOfTwo:Gu,setQuaternionFromProperEuler:Wu,normalize:Ft,denormalize:Gi};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,i,r,s,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],x=r[4],v=r[7],P=r[2],A=r[5],T=r[8];return s[0]=a*_+o*S+l*P,s[3]=a*m+o*x+l*A,s[6]=a*p+o*v+l*T,s[1]=c*_+h*S+u*P,s[4]=c*m+h*x+u*A,s[7]=c*p+h*v+u*T,s[2]=f*_+d*S+g*P,s[5]=f*m+d*x+g*A,s[8]=f*p+d*v+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,g=t*u+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new qe;function Hc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xu(){const n=bs("canvas");return n.style.display="block",n}const cl={};function _r(n){n in cl||(cl[n]=!0,console.warn(n))}function Yu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function qu(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zu(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=Pn(n.r),n.g=Pn(n.g),n.b=Pn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?Ps:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Pn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],fl=[.3127,.329],dl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[ir]:{primaries:hl,whitePoint:fl,transfer:Ps,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:hl,whitePoint:fl,transfer:lt,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});let bi;class Ju{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bi===void 0&&(bi=bs("canvas")),bi.width=e.width,bi.height=e.height;const i=bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pn(t[i]/255)*255):t[i]=Pn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ju=0;class Vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vs(r[a].image)):s.push(Vs(r[a]))}else s=Vs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ku=0;class Nt extends rr{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=hi,r=hi,s=pn,a=ui,o=sn,l=In,c=Nt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=_i(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ms:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ms:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Cc;Nt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,P=(p+1)/2,A=(h+f)/4,T=(u+_)/4,C=(g+m)/4;return x>v&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):v>P?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=C/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qu extends rr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Qu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gc extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ef extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,p*S);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}const v=o*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-o*d,e[t+2]=c*g+h*d+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new I,ml=new xi;class sr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Or.subVectors(this.max,cr),wi.subVectors(e.a,cr),Ei.subVectors(e.b,cr),Ti.subVectors(e.c,cr),kn.subVectors(Ei,wi),On.subVectors(Ti,Ei),Qn.subVectors(wi,Ti);let t=[0,-kn.z,kn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,kn.z,0,-kn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-kn.y,kn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!Ws(t,wi,Ei,Ti,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,wi,Ei,Ti,Or))?!1:(Br.crossVectors(kn,On),t=[Br.x,Br.y,Br.z],Ws(t,wi,Ei,Ti,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xn=[new I,new I,new I,new I,new I,new I,new I,new I],Kt=new I,kr=new sr,wi=new I,Ei=new I,Ti=new I,kn=new I,On=new I,Qn=new I,cr=new I,Or=new I,Br=new I,ei=new I;function Ws(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ei.fromArray(n,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),h=i.dot(ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const tf=new sr,hr=new I,$s=new I;class Co{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(hr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add($s)),this.expandByPoint(hr.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,Xs=new I,zr=new I,Bn=new I,Ys=new I,Hr=new I,qs=new I;class nf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xs.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Bn.dot(this.direction),l=-Bn.dot(zr),c=Bn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xs).addScaledVector(zr,f),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Ys.subVectors(t,e),Hr.subVectors(i,e),qs.crossVectors(Ys,Hr);let a=this.direction.dot(qs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(Hr.crossVectors(Bn,Hr));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(Bn));if(c<0||l+c>a)return null;const h=-o*Bn.dot(qs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m)}set(e,t,i,r,s,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rf,e,sf)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),zn.crossVectors(i,Gt),zn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),zn.crossVectors(i,Gt)),zn.normalize(),Vr.crossVectors(Gt,zn),r[0]=zn.x,r[4]=Vr.x,r[8]=Gt.x,r[1]=zn.y,r[5]=Vr.y,r[9]=Gt.y,r[2]=zn.z,r[6]=Vr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],P=i[15],A=r[0],T=r[4],C=r[8],w=r[12],y=r[1],L=r[5],$=r[9],z=r[13],j=r[2],ee=r[6],J=r[10],ie=r[14],H=r[3],ye=r[7],F=r[11],V=r[15];return s[0]=a*A+o*y+l*j+c*H,s[4]=a*T+o*L+l*ee+c*ye,s[8]=a*C+o*$+l*J+c*F,s[12]=a*w+o*z+l*ie+c*V,s[1]=h*A+u*y+f*j+d*H,s[5]=h*T+u*L+f*ee+d*ye,s[9]=h*C+u*$+f*J+d*F,s[13]=h*w+u*z+f*ie+d*V,s[2]=g*A+_*y+m*j+p*H,s[6]=g*T+_*L+m*ee+p*ye,s[10]=g*C+_*$+m*J+p*F,s[14]=g*w+_*z+m*ie+p*V,s[3]=S*A+x*y+v*j+P*H,s[7]=S*T+x*L+v*ee+P*ye,s[11]=S*C+x*$+v*J+P*F,s[15]=S*w+x*z+v*ie+P*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*o*f+i*c*f+r*o*d-i*l*d)+_*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*a*u+i*a*d+s*o*h-i*c*h)+p*(-r*o*h-t*l*u+t*o*f+r*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,x=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,v=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,P=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=t*S+i*x+r*v+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(_*f*s-u*m*s-_*r*d+i*m*d+u*r*p-i*f*p)*T,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*T,e[3]=(u*l*s-o*f*s-u*r*c+i*f*c+o*r*d-i*l*d)*T,e[4]=x*T,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*p+t*f*p)*T,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*T,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*d+t*l*d)*T,e[8]=v*T,e[9]=(g*u*s-h*_*s-g*i*d+t*_*d+h*i*p-t*u*p)*T,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*d-t*o*d)*T,e[12]=P*T,e[13]=(h*_*r-g*u*r+g*i*f-t*_*f-h*i*m+t*u*m)*T,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*T,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,g=s*u,_=a*h,m=a*u,p=o*u,S=l*c,x=l*h,v=l*u,P=i.x,A=i.y,T=i.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(f+p))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-S)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qt.copy(this);const c=1/s,h=1/a,u=1/o;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Rn){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(o===Rn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ss)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Rn){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(a-s),f=(t+e)*c,d=(i+r)*h;let g,_;if(o===Rn)g=(a+s)*u,_=-2*u;else if(o===Ss)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ai=new I,Qt=new pt,rf=new I(0,0,0),sf=new I(1,1,1),zn=new I,Vr=new I,Gt=new I,gl=new pt,vl=new xi;class Un{constructor(e=0,t=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vl.setFromEuler(this),this.setFromQuaternion(vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let af=0;const _l=new I,Ri=new xi,Mn=new pt,Gr=new I,ur=new I,of=new I,lf=new xi,xl=new I(1,0,0),yl=new I(0,1,0),Ml=new I(0,0,1),Sl={type:"added"},cf={type:"removed"},Ci={type:"childadded",child:null},Zs={type:"childremoved",child:null};class Pt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new I,t=new Un,i=new xi,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new qe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(yl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(yl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ur,Gr,this.up):Mn.lookAt(Gr,ur,this.up),this.quaternion.setFromRotationMatrix(Mn),r&&(Mn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new I,Sn=new I,Js=new I,bn=new I,Pi=new I,Li=new I,bl=new I,js=new I,Ks=new I,Qs=new I,ea=new ht,ta=new ht,na=new ht;class rn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),en.subVectors(e,t),r.cross(en);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){en.subVectors(r,t),Sn.subVectors(i,t),Js.subVectors(e,t);const a=en.dot(en),o=en.dot(Sn),l=en.dot(Js),c=Sn.dot(Sn),h=Sn.dot(Js),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,i),na.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(ta,s.y),a.addScaledVector(na,s.z),a}static isFrontFacing(e,t,i,r){return en.subVectors(i,t),Sn.subVectors(e,t),en.cross(Sn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),en.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Li.subVectors(s,i),js.subVectors(e,i);const l=Pi.dot(js),c=Li.dot(js);if(l<=0&&c<=0)return t.copy(i);Ks.subVectors(e,r);const h=Pi.dot(Ks),u=Li.dot(Ks);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pi,a);Qs.subVectors(e,s);const d=Pi.dot(Qs),g=Li.dot(Qs);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Li,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return bl.subVectors(s,r),o=(u-h)/(u-h+(d-g)),t.copy(r).addScaledVector(bl,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Ro(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ia(a,s,e+1/3),this.g=ia(a,s,e),this.b=ia(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=$c[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Qe.fromWorkingColorSpace(Ut.copy(this),e),Math.round(At(Ut.r*255,0,255))*65536+Math.round(At(Ut.g*255,0,255))*256+Math.round(At(Ut.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Bt){Qe.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Wr);const i=br(Hn.h,Wr.h,t),r=br(Hn.s,Wr.s,t),s=br(Hn.l,Wr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ke;Ke.NAMES=$c;let hf=0;class Dr extends rr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=_i(),this.name="",this.blending=Yi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ra&&(i.blendSrc=this.blendSrc),this.blendDst!==Ca&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qt extends Dr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new I,$r=new _e;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=al,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$r.fromBufferAttribute(this,t),$r.applyMatrix3(e),this.setXY(t,$r.x,$r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}}class Xc extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yc extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let uf=0;const Yt=new pt,ra=new Pt,Ii=new I,Wt=new sr,fr=new sr,wt=new I;class Lt extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Yc:Xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,i){return Yt.makeTranslation(e,t,i),this.applyMatrix4(Yt),this}scale(e,t,i){return Yt.makeScale(e,t,i),this.applyMatrix4(Yt),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Wt.min,fr.min),Wt.expandByPoint(wt),wt.addVectors(Wt.max,fr.max),Wt.expandByPoint(wt)):(Wt.expandByPoint(fr.min),Wt.expandByPoint(fr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),wt.add(Ii)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new I,l[C]=new I;const c=new I,h=new I,u=new I,f=new _e,d=new _e,g=new _e,_=new I,m=new I;function p(C,w,y){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,w),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[C].add(_),o[w].add(_),o[y].add(_),l[C].add(m),l[w].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const y=S[C],L=y.start,$=y.count;for(let z=L,j=L+$;z<j;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new I,v=new I,P=new I,A=new I;function T(C){P.fromBufferAttribute(r,C),A.copy(P);const w=o[C];x.copy(w),x.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(A,w);const L=v.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,w=S.length;C<w;++C){const y=S[C],L=y.start,$=y.count;for(let z=L,j=L+$;z<j;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new an(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wl=new pt,ti=new nf,Xr=new Co,El=new I,Yr=new I,qr=new I,Zr=new I,sa=new I,Jr=new I,Tl=new I,jr=new I;class _t extends Pt{constructor(e=new Lt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(sa.fromBufferAttribute(u,e),a?Jr.addScaledVector(sa,h):Jr.addScaledVector(sa.sub(t),h))}t.add(Jr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Xr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Xr,El)===null||ti.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(wl.copy(s).invert(),ti.copy(e.ray).applyMatrix4(wl),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const A=o.getX(v),T=o.getX(v+1),C=o.getX(v+2);r=Kr(this,p,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=Kr(this,a,e,i,c,h,u,S,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,P=x;v<P;v+=3){const A=v,T=v+1,C=v+2;r=Kr(this,p,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,v=m+2;r=Kr(this,a,e,i,c,h,u,S,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ff(n,e,t,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===jn,o),l===null)return null;jr.copy(o),jr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:n}}function Kr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Yr),n.getVertexPosition(l,qr),n.getVertexPosition(c,Zr);const h=ff(n,e,t,i,Yr,qr,Zr,Tl);if(h){const u=new I;rn.getBarycoord(Tl,Yr,qr,Zr,u),r&&(h.uv=rn.getInterpolatedAttribute(r,o,l,c,u,new _e)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,l,c,u,new _e)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};rn.getNormal(Yr,qr,Zr,f.normal),h.face=f,h.barycoord=u}return h}class yi extends Lt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,p,S,x,v,P,A,T,C,w){const y=v/T,L=P/C,$=v/2,z=P/2,j=A/2,ee=T+1,J=C+1;let ie=0,H=0;const ye=new I;for(let F=0;F<J;F++){const V=F*L-z;for(let se=0;se<ee;se++){const ce=se*y-$;ye[_]=ce*S,ye[m]=V*x,ye[p]=j,c.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[p]=A>0?1:-1,h.push(ye.x,ye.y,ye.z),u.push(se/T),u.push(1-F/C),ie+=1}}for(let F=0;F<C;F++)for(let V=0;V<T;V++){const se=f+V+ee*F,ce=f+V+ee*(F+1),X=f+(V+1)+ee*(F+1),Y=f+(V+1)+ee*F;l.push(se,ce,Y),l.push(ce,X,Y),H+=6}o.addGroup(d,H,w),d+=H,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const r in i)e[r]=i[r]}return e}function df(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const pf={clone:tr,merge:kt};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Dr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Zc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new I,Al=new _e,Rl=new _e;class Zt extends Zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Rl),t.subVectors(Rl,Al)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ui=1;class vf extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(Di,Ui,e,t);r.layers=this.layers,this.add(r);const s=new Zt(Di,Ui,e,t);s.layers=this.layers,this.add(s);const a=new Zt(Di,Ui,e,t);a.layers=this.layers,this.add(a);const o=new Zt(Di,Ui,e,t);o.layers=this.layers,this.add(o);const l=new Zt(Di,Ui,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Di,Ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jc extends Nt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yi(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:Yn});s.uniforms.tEquirect.value=t;const a=new _t(r,s),o=t.minFilter;return t.minFilter===ui&&(t.minFilter=pn),new vf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const aa=new I,xf=new I,yf=new qe;class ai{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yf.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Co,Qr=new I;class Po{constructor(e=new ai,t=new ai,i=new ai,r=new ai,s=new ai,a=new ai){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],x=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,m-d,v-p).normalize(),i[1].setComponents(l+s,f+c,m+d,v+p).normalize(),i[2].setComponents(l+a,f+h,m+g,v+S).normalize(),i[3].setComponents(l-a,f-h,m-g,v-S).normalize(),i[4].setComponents(l-o,f-u,m-_,v-x).normalize(),t===Rn)i[5].setComponents(l+o,f+u,m+_,v+x).normalize();else if(t===Ss)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Mf(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ln extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<c;x++){const v=x*u-s;g.push(v,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,v=S+c*(p+1),P=S+1+c*(p+1),A=S+1+c*p;d.push(x,v,A),d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
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
#endif`,wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$f=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
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
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
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
#endif`,yd=`struct PhysicalMaterial {
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
}`,Md=`
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ap=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ip=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Wp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
}`,Yp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Zp=`uniform float size;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,Qp=`uniform float rotation;
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
}`,em=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Sf,alphahash_pars_fragment:bf,alphamap_fragment:wf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Gf,color_vertex:Wf,common:$f,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:qf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:jf,colorspace_fragment:Kf,colorspace_pars_fragment:Qf,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:rd,fog_vertex:sd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_pars_fragment:hd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:fd,lights_pars_begin:dd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:vd,lights_phong_pars_fragment:_d,lights_physical_fragment:xd,lights_physical_pars_fragment:yd,lights_fragment_begin:Md,lights_fragment_maps:Sd,lights_fragment_end:bd,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ad,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:kd,morphtarget_vertex:Od,normal_fragment_begin:Bd,normal_fragment_maps:zd,normal_pars_fragment:Hd,normal_pars_vertex:Vd,normal_vertex:Gd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:qd,opaque_fragment:Zd,packing:Jd,premultiplied_alpha_fragment:jd,project_vertex:Kd,dithering_fragment:Qd,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:rp,shadowmap_vertex:sp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:hp,specularmap_fragment:up,specularmap_pars_fragment:fp,tonemapping_fragment:dp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:vp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:yp,background_vert:Mp,background_frag:Sp,backgroundCube_vert:bp,backgroundCube_frag:wp,cube_vert:Ep,cube_frag:Tp,depth_vert:Ap,depth_frag:Rp,distanceRGBA_vert:Cp,distanceRGBA_frag:Pp,equirect_vert:Lp,equirect_frag:Ip,linedashed_vert:Dp,linedashed_frag:Up,meshbasic_vert:Np,meshbasic_frag:Fp,meshlambert_vert:kp,meshlambert_frag:Op,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:Hp,meshnormal_frag:Vp,meshphong_vert:Gp,meshphong_frag:Wp,meshphysical_vert:$p,meshphysical_frag:Xp,meshtoon_vert:Yp,meshtoon_frag:qp,points_vert:Zp,points_frag:Jp,shadow_vert:jp,shadow_frag:Kp,sprite_vert:Qp,sprite_frag:em},be={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},dn={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};dn.physical={uniforms:kt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const es={r:0,b:0,g:0},ii=new Un,tm=new pt;function nm(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1;const v=g(S);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Rs)?(h===void 0&&(h=new _t(new yi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:tr(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ii.copy(x.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(ii)),h.material.toneMapped=Qe.getTransfer(v.colorSpace)!==lt,(u!==v||f!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new _t(new Ln(2,2),new on({name:"BackgroundMaterial",uniforms:tr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(es,qc(n)),i.buffers.color.setClear(es.r,es.g,es.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m}}function im(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,L,$,z,j){let ee=!1;const J=u(z,$,L);s!==J&&(s=J,c(s.object)),ee=d(y,z,$,j),ee&&g(y,z,$,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,v(y,L,$,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,$){const z=$.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let ee=j[L.id];ee===void 0&&(ee={},j[L.id]=ee);let J=ee[z];return J===void 0&&(J=f(l()),ee[z]=J),J}function f(y){const L=[],$=[],z=[];for(let j=0;j<t;j++)L[j]=0,$[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:$,attributeDivisors:z,object:y,attributes:{},index:null}}function d(y,L,$,z){const j=s.attributes,ee=L.attributes;let J=0;const ie=$.getAttributes();for(const H in ie)if(ie[H].location>=0){const F=j[H];let V=ee[H];if(V===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),F===void 0||F.attribute!==V||V&&F.data!==V.data)return!0;J++}return s.attributesNum!==J||s.index!==z}function g(y,L,$,z){const j={},ee=L.attributes;let J=0;const ie=$.getAttributes();for(const H in ie)if(ie[H].location>=0){let F=ee[H];F===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(F=y.instanceColor));const V={};V.attribute=F,F&&F.data&&(V.data=F.data),j[H]=V,J++}s.attributes=j,s.attributesNum=J,s.index=z}function _(){const y=s.newAttributes;for(let L=0,$=y.length;L<$;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const $=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;$[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),j[y]!==L&&(n.vertexAttribDivisor(y,L),j[y]=L)}function S(){const y=s.newAttributes,L=s.enabledAttributes;for(let $=0,z=L.length;$<z;$++)L[$]!==y[$]&&(n.disableVertexAttribArray($),L[$]=0)}function x(y,L,$,z,j,ee,J){J===!0?n.vertexAttribIPointer(y,L,$,j,ee):n.vertexAttribPointer(y,L,$,z,j,ee)}function v(y,L,$,z){_();const j=z.attributes,ee=$.getAttributes(),J=L.defaultAttributeValues;for(const ie in ee){const H=ee[ie];if(H.location>=0){let ye=j[ie];if(ye===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ye!==void 0){const F=ye.normalized,V=ye.itemSize,se=e.get(ye);if(se===void 0)continue;const ce=se.buffer,X=se.type,Y=se.bytesPerElement,re=X===n.INT||X===n.UNSIGNED_INT||ye.gpuType===So;if(ye.isInterleavedBufferAttribute){const fe=ye.data,ge=fe.stride,Ie=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)p(H.location+Le,fe.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<H.locationSize;Le++)m(H.location+Le);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Le=0;Le<H.locationSize;Le++)x(H.location+Le,V/H.locationSize,X,F,ge*Y,(Ie+V/H.locationSize*Le)*Y,re)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)p(H.location+fe,ye.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<H.locationSize;fe++)m(H.location+fe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let fe=0;fe<H.locationSize;fe++)x(H.location+fe,V/H.locationSize,X,F,V*Y,V/H.locationSize*fe*Y,re)}}else if(J!==void 0){const F=J[ie];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(H.location,F);break;case 3:n.vertexAttrib3fv(H.location,F);break;case 4:n.vertexAttrib4fv(H.location,F);break;default:n.vertexAttrib1fv(H.location,F)}}}}S()}function P(){C();for(const y in i){const L=i[y];for(const $ in L){const z=L[$];for(const j in z)h(z[j].object),delete z[j];delete L[$]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const $ in L){const z=L[$];for(const j in z)h(z[j].object),delete z[j];delete L[$]}delete i[y.id]}function T(y){for(const L in i){const $=i[L];if($[y.id]===void 0)continue;const z=$[y.id];for(const j in z)h(z[j].object),delete z[j];delete $[y.id]}}function C(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function rm(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sm(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==sn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==In&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==An&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function am(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ai,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:i,x=S*4;let v=p.clippingState||null;l.value=v,v=h(g,f,x,d);for(let P=0;P!==x;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function om(n){let e=new WeakMap;function t(a,o){return o===ka?a.mapping=ji:o===Oa&&(a.mapping=Ki),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ka||o===Oa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _f(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ls extends Zc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Cl=[.125,.215,.35,.446,.526,.582],ci=20,oa=new Ls,Pl=new Ke;let la=null,ca=0,ha=0,ua=!1;const oi=(1+Math.sqrt(5))/2,Ni=1/oi,Ll=[new I(-oi,Ni,0),new I(oi,Ni,0),new I(-Ni,0,oi),new I(Ni,0,oi),new I(0,oi,-Ni),new I(0,oi,Ni),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:pi,format:sn,colorSpace:ir,depthBuffer:!1},r=Dl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lm(s)),this._blurMaterial=cm(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pl),h.toneMapping=qn,h.autoClear=!1;const d=new qt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new _t(new yi,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Pl),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ts(r,S*x,p>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ll[(r-s-1)%Ll.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ci-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let S=0;for(let T=0;T<ci;++T){const C=T/_,w=Math.exp(-C*C/2);p.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const v=this._sizeLods[r],P=3*v*(r>x-$i?r-x+$i:0),A=4*(this._cubeSize-v);ts(t,P,A,3*v,2*v),l.setRenderTarget(t),l.render(u,oa)}}function lm(n){const e=[],t=[],i=[];let r=n;const s=n-$i+1+Cl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-$i?l=Cl[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,C=A>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,_*g*A),x.set(f,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const P=new Lt;P.setAttribute("position",new an(S,_)),P.setAttribute("uv",new an(x,m)),P.setAttribute("faceIndex",new an(v,p)),e.push(P),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dl(n,e,t){const i=new Dn(n,e,t);return i.texture.mapping=Rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cm(n,e,t){const i=new Float32Array(ci),r=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ul(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Nl(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Lo(){return`

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
	`}function hm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ka||l===Oa,h=l===ji||l===Ki;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Il(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Il(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function um(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fm(n,e,t,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,v=S.length;x<v;x+=3){const P=S[x+0],A=S[x+1],T=S[x+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const P=x+0,A=x+1,T=x+2;f.push(P,A,A,T,T,P)}}else return;const m=new(Hc(f)?Yc:Xc)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function dm(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*a,g),t.update(d,i,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function mm(n,e,t){const i=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=o.attributes.position.count*v,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*u),C=new Gc(T,P,A,u);C.type=An,C.needsUpdate=!0;const w=v*4;for(let L=0;L<u;L++){const $=p[L],z=S[L],j=x[L],ee=P*A*4*L;for(let J=0;J<$.count;J++){const ie=J*w;g===!0&&(r.fromBufferAttribute($,J),T[ee+ie+0]=r.x,T[ee+ie+1]=r.y,T[ee+ie+2]=r.z,T[ee+ie+3]=0),_===!0&&(r.fromBufferAttribute(z,J),T[ee+ie+4]=r.x,T[ee+ie+5]=r.y,T[ee+ie+6]=r.z,T[ee+ie+7]=0),m===!0&&(r.fromBufferAttribute(j,J),T[ee+ie+8]=r.x,T[ee+ie+9]=r.y,T[ee+ie+10]=r.z,T[ee+ie+11]=j.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new _e(P,A)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function gm(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Kc extends Nt{constructor(e,t,i,r,s,a,o,l,c,h=qi){if(h!==qi&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===qi&&(i=di),i===void 0&&h===er&&(i=Qi),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qc=new Nt,Fl=new Kc(1,1),eh=new Gc,th=new ef,nh=new Jc,kl=[],Ol=[],Bl=new Float32Array(16),zl=new Float32Array(9),Hl=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kl[r];if(s===void 0&&(s=new Float32Array(r),kl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Is(n,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function xm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Mm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Hl.set(i),n.uniformMatrix2fv(this.addr,!1,Hl),bt(t,i)}}function Sm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;zl.set(i),n.uniformMatrix3fv(this.addr,!1,zl),bt(t,i)}}function bm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,i))return;Bl.set(i),n.uniformMatrix4fv(this.addr,!1,Bl),bt(t,i)}}function wm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Em(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Rm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function Pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function Im(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=zc,s=Fl):s=Qc,t.setTexture2D(e||s,r)}function Dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||th,r)}function Um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nh,r)}function Nm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||eh,r)}function Fm(n){switch(n){case 5126:return vm;case 35664:return _m;case 35665:return xm;case 35666:return ym;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}function km(n,e){n.uniform1fv(this.addr,e)}function Om(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Bm(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function zm(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function Hm(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vm(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gm(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wm(n,e){n.uniform1iv(this.addr,e)}function $m(n,e){n.uniform2iv(this.addr,e)}function Xm(n,e){n.uniform3iv(this.addr,e)}function Ym(n,e){n.uniform4iv(this.addr,e)}function qm(n,e){n.uniform1uiv(this.addr,e)}function Zm(n,e){n.uniform2uiv(this.addr,e)}function Jm(n,e){n.uniform3uiv(this.addr,e)}function jm(n,e){n.uniform4uiv(this.addr,e)}function Km(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qc,s[a])}function Qm(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||th,s[a])}function e0(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nh,s[a])}function t0(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);St(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||eh,s[a])}function n0(n){switch(n){case 5126:return km;case 35664:return Om;case 35665:return Bm;case 35666:return zm;case 35674:return Hm;case 35675:return Vm;case 35676:return Gm;case 5124:case 35670:return Wm;case 35667:case 35671:return $m;case 35668:case 35672:return Xm;case 35669:case 35673:return Ym;case 5125:return qm;case 36294:return Zm;case 36295:return Jm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return t0}}class i0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fm(t.type)}}class r0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n0(t.type)}}class s0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Vl(n,e){n.seq.push(e),n.map[e.id]=e}function a0(n,e,t){const i=n.name,r=i.length;for(fa.lastIndex=0;;){const s=fa.exec(i),a=fa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vl(t,c===void 0?new i0(o,n,e):new r0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new s0(o),Vl(t,u)),t=u}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);a0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Gl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o0=37297;let l0=0;function c0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Wl=new qe;function h0(n){Qe._getMatrix(Wl,Qe.workingColorSpace,n);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Ps:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $l(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c0(n.getShaderSource(e),a)}else return r}function u0(n,e){const t=h0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f0(n,e){let t;switch(e){case uu:t="Linear";break;case fu:t="Reinhard";break;case du:t="Cineon";break;case pu:t="ACESFilmic";break;case gu:t="AgX";break;case vu:t="Neutral";break;case mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new I;function d0(){Qe.getLuminanceCoefficients(ns);const n=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function m0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xr(n){return n!==""}function Xl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(n){return n.replace(v0,x0)}const _0=new Map;function x0(n,e){let t=Ze[e];if(t===void 0){const i=_0.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fo(t)}const y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(n){return n.replace(y0,M0)}function M0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zl(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function S0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function b0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function E0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rc:e="ENVMAP_BLENDING_MULTIPLY";break;case cu:e="ENVMAP_BLENDING_MIX";break;case hu:e="ENVMAP_BLENDING_ADD";break}return e}function T0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function A0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S0(t),c=b0(t),h=w0(t),u=E0(t),f=T0(t),d=p0(t),g=m0(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==qn?f0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,u0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=fo(a),a=Xl(a,t),a=Yl(a,t),o=fo(o),o=Xl(o,t),o=Yl(o,t),a=ql(a),o=ql(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,v=S+p+o,P=Gl(r,r.VERTEX_SHADER,x),A=Gl(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(L){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(P).trim(),j=r.getShaderInfoLog(A).trim();let ee=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const ie=$l(r,P,"vertex"),H=$l(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+ie+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||j==="")&&(J=!1);J&&(L.diagnostics={runnable:ee,programLog:$,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(P),r.deleteShader(A),C=new xs(r,_),w=g0(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,o0)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let R0=0;class C0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P0(e),t.set(e,i)),i}}class P0{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}}function L0(n,e,t,i,r,s,a){const o=new Wc,l=new C0,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,y,L,$,z){const j=$.fog,ee=z.geometry,J=w.isMeshStandardMaterial?$.environment:null,ie=(w.isMeshStandardMaterial?t:e).get(w.envMap||J),H=ie&&ie.mapping===Rs?ie.image.height:null,ye=g[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const F=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,V=F!==void 0?F.length:0;let se=0;ee.morphAttributes.position!==void 0&&(se=1),ee.morphAttributes.normal!==void 0&&(se=2),ee.morphAttributes.color!==void 0&&(se=3);let ce,X,Y,re;if(ye){const ot=dn[ye];ce=ot.vertexShader,X=ot.fragmentShader}else ce=w.vertexShader,X=w.fragmentShader,l.update(w),Y=l.getVertexShaderID(w),re=l.getFragmentShaderID(w);const fe=n.getRenderTarget(),ge=n.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,Le=z.isBatchedMesh===!0,Ge=!!w.map,ne=!!w.matcap,ve=!!ie,R=!!w.aoMap,Ne=!!w.lightMap,pe=!!w.bumpMap,Te=!!w.normalMap,Me=!!w.displacementMap,Ee=!!w.emissiveMap,Ce=!!w.metalnessMap,E=!!w.roughnessMap,M=w.anisotropy>0,G=w.clearcoat>0,te=w.dispersion>0,D=w.iridescence>0,N=w.sheen>0,W=w.transmission>0,k=M&&!!w.anisotropyMap,ae=G&&!!w.clearcoatMap,De=G&&!!w.clearcoatNormalMap,oe=G&&!!w.clearcoatRoughnessMap,Se=D&&!!w.iridescenceMap,Ue=D&&!!w.iridescenceThicknessMap,Ve=N&&!!w.sheenColorMap,me=N&&!!w.sheenRoughnessMap,Je=!!w.specularMap,$e=!!w.specularColorMap,at=!!w.specularIntensityMap,U=W&&!!w.transmissionMap,we=W&&!!w.thicknessMap,Q=!!w.gradientMap,le=!!w.alphaMap,Pe=w.alphaTest>0,Ae=!!w.alphaHash,Xe=!!w.extensions;let gt=qn;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(gt=n.toneMapping);const It={shaderID:ye,shaderType:w.type,shaderName:w.name,vertexShader:ce,fragmentShader:X,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Le,batchingColor:Le&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ir,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:ne,envMap:ve,envMapMode:ve&&ie.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:Ne,bumpMap:pe,normalMap:Te,displacementMap:f&&Me,emissiveMap:Ee,normalMapObjectSpace:Te&&w.normalMapType===Mu,normalMapTangentSpace:Te&&w.normalMapType===Bc,metalnessMap:Ce,roughnessMap:E,anisotropy:M,anisotropyMap:k,clearcoat:G,clearcoatMap:ae,clearcoatNormalMap:De,clearcoatRoughnessMap:oe,dispersion:te,iridescence:D,iridescenceMap:Se,iridescenceThicknessMap:Ue,sheen:N,sheenColorMap:Ve,sheenRoughnessMap:me,specularMap:Je,specularColorMap:$e,specularIntensityMap:at,transmission:W,transmissionMap:U,thicknessMap:we,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Yi&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:Pe,alphaHash:Ae,combine:w.combine,mapUv:Ge&&_(w.map.channel),aoMapUv:R&&_(w.aoMap.channel),lightMapUv:Ne&&_(w.lightMap.channel),bumpMapUv:pe&&_(w.bumpMap.channel),normalMapUv:Te&&_(w.normalMap.channel),displacementMapUv:Me&&_(w.displacementMap.channel),emissiveMapUv:Ee&&_(w.emissiveMap.channel),metalnessMapUv:Ce&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:k&&_(w.anisotropyMap.channel),clearcoatMapUv:ae&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(w.sheenRoughnessMap.channel),specularMapUv:Je&&_(w.specularMap.channel),specularColorMapUv:$e&&_(w.specularColorMap.channel),specularIntensityMapUv:at&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:we&&_(w.thicknessMap.channel),alphaMapUv:le&&_(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Te||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(Ge||le),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===lt,decodeVideoTextureEmissive:Ee&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Rt,flipSided:w.side===Ht,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&w.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(S(y,w),x(y,w),y.push(n.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function S(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const y=g[w.type];let L;if(y){const $=dn[y];L=pf.clone($.uniforms)}else L=w.uniforms;return L}function P(w,y){let L;for(let $=0,z=h.length;$<z;$++){const j=h[$];if(j.cacheKey===y){L=j,++L.usedTimes;break}}return L===void 0&&(L=new A0(n,y,w,s),h.push(L)),L}function A(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function I0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Jl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||D0),i.length>1&&i.sort(f||Jl),r.length>1&&r.sort(f||Jl)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function U0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new jl,n.set(i,[a])):r>=s.length?(a=new jl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function N0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ke};break;case"SpotLight":t={position:new I,direction:new I,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function F0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let k0=0;function O0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B0(n){const e=new N0,t=F0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new pt,a=new pt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,x=0,v=0,P=0,A=0,T=0;c.sort(O0);for(let w=0,y=c.length;w<y;w++){const L=c[w],$=L.color,z=L.intensity,j=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=$.r*z,u+=$.g*z,f+=$.b*z;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],z);T++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,H=t.get(L);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=L.shadow.matrix,S++}i.directional[d]=J,d++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy($).multiplyScalar(z),J.distance=j,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[_]=J;const ie=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,ie.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=ie.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=ee,v++}_++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy($).multiplyScalar(z),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ie=L.shadow,H=t.get(L);H.shadowIntensity=ie.intensity,H.shadowBias=ie.bias,H.shadowNormalBias=ie.normalBias,H.shadowRadius=ie.radius,H.shadowMapSize=ie.mapSize,H.shadowCameraNear=ie.camera.near,H.shadowCameraFar=ie.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=J,g++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(z),J.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=T,i.version=k0++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Kl(n){const e=new B0(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function z0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Kl(n),e.set(r,[o])):s>=a.length?(o=new Kl(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class H0 extends Dr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V0 extends Dr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`;function $0(n,e,t){let i=new Po;const r=new _e,s=new _e,a=new ht,o=new H0({depthPacking:yu}),l=new V0,c={},h=t.maxTextureSize,u={[jn]:Ht,[Ht]:jn,[Rt]:Rt},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:G0,fragmentShader:W0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Yn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const z=p!==Tn&&this.type===Tn,j=p===Tn&&this.type!==Tn;for(let ee=0,J=A.length;ee<J;ee++){const ie=A[ee],H=ie.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ye=H.getFrameExtents();if(r.multiply(ye),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ye.x),r.x=s.x*ye.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ye.y),r.y=s.y*ye.y,H.mapSize.y=s.y)),H.map===null||z===!0||j===!0){const V=this.type!==Tn?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new Dn(r.x,r.y,V),H.map.texture.name=ie.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const F=H.getViewportCount();for(let V=0;V<F;V++){const se=H.getViewport(V);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),$.viewport(a),H.updateMatrices(ie,V),i=H.getFrustum(),v(T,C,H.camera,ie,this.type)}H.isPointLightShadow!==!0&&this.type===Tn&&S(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,y,L)};function S(A,T){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,d,_,null)}function x(A,T,C,w){let y=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=C.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const $=y.uuid,z=T.uuid;let j=c[$];j===void 0&&(j={},c[$]=j);let ee=j[z];ee===void 0&&(ee=y.clone(),j[z]=ee,T.addEventListener("dispose",P)),y=ee}if(y.visible=T.visible,y.wireframe=T.wireframe,w===Tn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=n.properties.get(y);$.light=C}return y}function v(A,T,C,w,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Tn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),j=A.material;if(Array.isArray(j)){const ee=z.groups;for(let J=0,ie=ee.length;J<ie;J++){const H=ee[J],ye=j[H.materialIndex];if(ye&&ye.visible){const F=x(A,ye,w,y);A.onBeforeShadow(n,A,T,C,z,F,H),n.renderBufferDirect(C,null,z,F,A,H),A.onAfterShadow(n,A,T,C,z,F,H)}}}else if(j.visible){const ee=x(A,j,w,y);A.onBeforeShadow(n,A,T,C,z,ee,null),n.renderBufferDirect(C,null,z,ee,A,null),A.onAfterShadow(n,A,T,C,z,ee,null)}}const $=A.children;for(let z=0,j=$.length;z<j;z++)v($[z],T,C,w,y)}function P(A){A.target.removeEventListener("dispose",P);for(const C in c){const w=c[C],y=A.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const X0={[Pa]:La,[Ia]:Na,[Da]:Fa,[Ji]:Ua,[La]:Pa,[Na]:Ia,[Fa]:Da,[Ua]:Ji};function Y0(n,e){function t(){let U=!1;const we=new ht;let Q=null;const le=new ht(0,0,0,0);return{setMask:function(Pe){Q!==Pe&&!U&&(n.colorMask(Pe,Pe,Pe,Pe),Q=Pe)},setLocked:function(Pe){U=Pe},setClear:function(Pe,Ae,Xe,gt,It){It===!0&&(Pe*=gt,Ae*=gt,Xe*=gt),we.set(Pe,Ae,Xe,gt),le.equals(we)===!1&&(n.clearColor(Pe,Ae,Xe,gt),le.copy(we))},reset:function(){U=!1,Q=null,le.set(-1,0,0,0)}}}function i(){let U=!1,we=!1,Q=null,le=null,Pe=null;return{setReversed:function(Ae){if(we!==Ae){const Xe=e.get("EXT_clip_control");we?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const gt=Pe;Pe=null,this.setClear(gt)}we=Ae},getReversed:function(){return we},setTest:function(Ae){Ae?fe(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(Ae){Q!==Ae&&!U&&(n.depthMask(Ae),Q=Ae)},setFunc:function(Ae){if(we&&(Ae=X0[Ae]),le!==Ae){switch(Ae){case Pa:n.depthFunc(n.NEVER);break;case La:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ua:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Fa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){Pe!==Ae&&(we&&(Ae=1-Ae),n.clearDepth(Ae),Pe=Ae)},reset:function(){U=!1,Q=null,le=null,Pe=null,we=!1}}}function r(){let U=!1,we=null,Q=null,le=null,Pe=null,Ae=null,Xe=null,gt=null,It=null;return{setTest:function(ot){U||(ot?fe(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){we!==ot&&!U&&(n.stencilMask(ot),we=ot)},setFunc:function(ot,Jt,gn){(Q!==ot||le!==Jt||Pe!==gn)&&(n.stencilFunc(ot,Jt,gn),Q=ot,le=Jt,Pe=gn)},setOp:function(ot,Jt,gn){(Ae!==ot||Xe!==Jt||gt!==gn)&&(n.stencilOp(ot,Jt,gn),Ae=ot,Xe=Jt,gt=gn)},setLocked:function(ot){U=ot},setClear:function(ot){It!==ot&&(n.clearStencil(ot),It=ot)},reset:function(){U=!1,we=null,Q=null,le=null,Pe=null,Ae=null,Xe=null,gt=null,It=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,A=null,T=new Ke(0,0,0),C=0,w=!1,y=null,L=null,$=null,z=null,j=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ie=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=ie>=1):H.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=ie>=2);let ye=null,F={};const V=n.getParameter(n.SCISSOR_BOX),se=n.getParameter(n.VIEWPORT),ce=new ht().fromArray(V),X=new ht().fromArray(se);function Y(U,we,Q,le){const Pe=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(U,Ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Q;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(we+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return Ae}const re={};re[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(Ji),pe(!1),Te(nl),fe(n.CULL_FACE),R(Yn);function fe(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ie(U,we){return u[U]!==we?(n.bindFramebuffer(U,we),u[U]=we,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=we),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=we),!0):!1}function Le(U,we){let Q=d,le=!1;if(U){Q=f.get(we),Q===void 0&&(Q=[],f.set(we,Q));const Pe=U.textures;if(Q.length!==Pe.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Xe=Pe.length;Ae<Xe;Ae++)Q[Ae]=n.COLOR_ATTACHMENT0+Ae;Q.length=Pe.length,le=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,le=!0);le&&n.drawBuffers(Q)}function Ge(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ne={[li]:n.FUNC_ADD,[Xh]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};ne[qh]=n.MIN,ne[Zh]=n.MAX;const ve={[Jh]:n.ZERO,[jh]:n.ONE,[Kh]:n.SRC_COLOR,[Ra]:n.SRC_ALPHA,[ru]:n.SRC_ALPHA_SATURATE,[nu]:n.DST_COLOR,[eu]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Ca]:n.ONE_MINUS_SRC_ALPHA,[iu]:n.ONE_MINUS_DST_COLOR,[tu]:n.ONE_MINUS_DST_ALPHA,[su]:n.CONSTANT_COLOR,[au]:n.ONE_MINUS_CONSTANT_COLOR,[ou]:n.CONSTANT_ALPHA,[lu]:n.ONE_MINUS_CONSTANT_ALPHA};function R(U,we,Q,le,Pe,Ae,Xe,gt,It,ot){if(U===Yn){_===!0&&(ge(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),U!==$h){if(U!==m||ot!==w){if((p!==li||v!==li)&&(n.blendEquation(n.FUNC_ADD),p=li,v=li),ot)switch(U){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Aa:n.blendFunc(n.ONE,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Aa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,P=null,A=null,T.set(0,0,0),C=0,m=U,w=ot}return}Pe=Pe||we,Ae=Ae||Q,Xe=Xe||le,(we!==p||Pe!==v)&&(n.blendEquationSeparate(ne[we],ne[Pe]),p=we,v=Pe),(Q!==S||le!==x||Ae!==P||Xe!==A)&&(n.blendFuncSeparate(ve[Q],ve[le],ve[Ae],ve[Xe]),S=Q,x=le,P=Ae,A=Xe),(gt.equals(T)===!1||It!==C)&&(n.blendColor(gt.r,gt.g,gt.b,It),T.copy(gt),C=It),m=U,w=!1}function Ne(U,we){U.side===Rt?ge(n.CULL_FACE):fe(n.CULL_FACE);let Q=U.side===Ht;we&&(Q=!Q),pe(Q),U.blending===Yi&&U.transparent===!1?R(Yn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function Te(U){U!==Vh?(fe(n.CULL_FACE),U!==L&&(U===nl?n.cullFace(n.BACK):U===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),L=U}function Me(U){U!==$&&(J&&n.lineWidth(U),$=U)}function Ee(U,we,Q){U?(fe(n.POLYGON_OFFSET_FILL),(z!==we||j!==Q)&&(n.polygonOffset(we,Q),z=we,j=Q)):ge(n.POLYGON_OFFSET_FILL)}function Ce(U){U?fe(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function E(U){U===void 0&&(U=n.TEXTURE0+ee-1),ye!==U&&(n.activeTexture(U),ye=U)}function M(U,we,Q){Q===void 0&&(ye===null?Q=n.TEXTURE0+ee-1:Q=ye);let le=F[Q];le===void 0&&(le={type:void 0,texture:void 0},F[Q]=le),(le.type!==U||le.texture!==we)&&(ye!==Q&&(n.activeTexture(Q),ye=Q),n.bindTexture(U,we||re[U]),le.type=U,le.texture=we)}function G(){const U=F[ye];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){ce.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ce.copy(U))}function me(U){X.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Je(U,we){let Q=c.get(we);Q===void 0&&(Q=new WeakMap,c.set(we,Q));let le=Q.get(U);le===void 0&&(le=n.getUniformBlockIndex(we,U.name),Q.set(U,le))}function $e(U,we){const le=c.get(we).get(U);l.get(we)!==le&&(n.uniformBlockBinding(we,le,U.__bindingPointIndex),l.set(we,le))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ye=null,F={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,x=null,v=null,P=null,A=null,T=new Ke(0,0,0),C=0,w=!1,y=null,L=null,$=null,z=null,j=null,ce.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:ge,bindFramebuffer:Ie,drawBuffers:Le,useProgram:Ge,setBlending:R,setMaterial:Ne,setFlipSided:pe,setCullFace:Te,setLineWidth:Me,setPolygonOffset:Ee,setScissorTest:Ce,activeTexture:E,bindTexture:M,unbindTexture:G,compressedTexImage2D:te,compressedTexImage3D:D,texImage2D:Se,texImage3D:Ue,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:De,texStorage3D:oe,texSubImage2D:N,texSubImage3D:W,compressedTexSubImage2D:k,compressedTexSubImage3D:ae,scissor:Ve,viewport:me,reset:at}}function Ql(n,e,t,i){const r=q0(i);switch(t){case Dc:return n*e;case Nc:return n*e;case Fc:return n*e*2;case Cs:return n*e/r.components*r.byteLength;case Eo:return n*e/r.components*r.byteLength;case kc:return n*e*2/r.components*r.byteLength;case To:return n*e*2/r.components*r.byteLength;case Uc:return n*e*3/r.components*r.byteLength;case sn:return n*e*4/r.components*r.byteLength;case Ao:return n*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Ga:return Math.max(n,16)*Math.max(e,8)/4;case za:case Va:return Math.max(n,8)*Math.max(e,8)/2;case Wa:case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _s:case oo:case lo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oc:case co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ho:case uo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function q0(n){switch(n){case In:case Pc:return{byteLength:1,components:1};case Ar:case Lc:case pi:return{byteLength:2,components:1};case bo:case wo:return{byteLength:2,components:4};case di:case So:case An:return{byteLength:4,components:1};case Ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z0(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return d?new OffscreenCanvas(E,M):bs("canvas")}function _(E,M,G){let te=1;const D=Ce(E);if((D.width>G||D.height>G)&&(te=G/Math.max(D.width,D.height)),te<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const N=Math.floor(te*D.width),W=Math.floor(te*D.height);u===void 0&&(u=g(N,W));const k=M?g(N,W):u;return k.width=N,k.height=W,k.getContext("2d").drawImage(E,0,0,N,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+N+"x"+W+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(E,M,G,te,D=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let N=M;if(M===n.RED&&(G===n.FLOAT&&(N=n.R32F),G===n.HALF_FLOAT&&(N=n.R16F),G===n.UNSIGNED_BYTE&&(N=n.R8)),M===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(N=n.R8UI),G===n.UNSIGNED_SHORT&&(N=n.R16UI),G===n.UNSIGNED_INT&&(N=n.R32UI),G===n.BYTE&&(N=n.R8I),G===n.SHORT&&(N=n.R16I),G===n.INT&&(N=n.R32I)),M===n.RG&&(G===n.FLOAT&&(N=n.RG32F),G===n.HALF_FLOAT&&(N=n.RG16F),G===n.UNSIGNED_BYTE&&(N=n.RG8)),M===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(N=n.RG8UI),G===n.UNSIGNED_SHORT&&(N=n.RG16UI),G===n.UNSIGNED_INT&&(N=n.RG32UI),G===n.BYTE&&(N=n.RG8I),G===n.SHORT&&(N=n.RG16I),G===n.INT&&(N=n.RG32I)),M===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(N=n.RGB8UI),G===n.UNSIGNED_SHORT&&(N=n.RGB16UI),G===n.UNSIGNED_INT&&(N=n.RGB32UI),G===n.BYTE&&(N=n.RGB8I),G===n.SHORT&&(N=n.RGB16I),G===n.INT&&(N=n.RGB32I)),M===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),G===n.UNSIGNED_INT&&(N=n.RGBA32UI),G===n.BYTE&&(N=n.RGBA8I),G===n.SHORT&&(N=n.RGBA16I),G===n.INT&&(N=n.RGBA32I)),M===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),M===n.RGBA){const W=D?Ps:Qe.getTransfer(te);G===n.FLOAT&&(N=n.RGBA32F),G===n.HALF_FLOAT&&(N=n.RGBA16F),G===n.UNSIGNED_BYTE&&(N=W===lt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function v(E,M){let G;return E?M===null||M===di||M===Qi?G=n.DEPTH24_STENCIL8:M===An?G=n.DEPTH32F_STENCIL8:M===Ar&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===di||M===Qi?G=n.DEPTH_COMPONENT24:M===An?G=n.DEPTH_COMPONENT32F:M===Ar&&(G=n.DEPTH_COMPONENT16),G}function P(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ct&&E.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){const M=E.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(E){const M=E.target;M.removeEventListener("dispose",T),y(M)}function C(E){const M=i.get(E);if(M.__webglInit===void 0)return;const G=E.source,te=f.get(G);if(te){const D=te[M.__cacheKey];D.usedTimes--,D.usedTimes===0&&w(E),Object.keys(te).length===0&&f.delete(G)}i.remove(E)}function w(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const G=E.source,te=f.get(G);delete te[M.__cacheKey],a.memory.textures--}function y(E){const M=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let D=0;D<M.__webglFramebuffer[te].length;D++)n.deleteFramebuffer(M.__webglFramebuffer[te][D]);else n.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)n.deleteFramebuffer(M.__webglFramebuffer[te]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=E.textures;for(let te=0,D=G.length;te<D;te++){const N=i.get(G[te]);N.__webglTexture&&(n.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(G[te])}i.remove(E)}let L=0;function $(){L=0}function z(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function j(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function ee(E,M){const G=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,E,M);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+M)}function J(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){X(G,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+M)}function ie(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){X(G,E,M);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+M)}function H(E,M){const G=i.get(E);if(E.version>0&&G.__version!==E.version){Y(G,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+M)}const ye={[Ms]:n.REPEAT,[hi]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},F={[Ct]:n.NEAREST,[_u]:n.NEAREST_MIPMAP_NEAREST,[Fr]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[zs]:n.LINEAR_MIPMAP_NEAREST,[ui]:n.LINEAR_MIPMAP_LINEAR},V={[Su]:n.NEVER,[Ru]:n.ALWAYS,[bu]:n.LESS,[zc]:n.LEQUAL,[wu]:n.EQUAL,[Au]:n.GEQUAL,[Eu]:n.GREATER,[Tu]:n.NOTEQUAL};function se(E,M){if(M.type===An&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===pn||M.magFilter===zs||M.magFilter===Fr||M.magFilter===ui||M.minFilter===pn||M.minFilter===zs||M.minFilter===Fr||M.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ye[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ye[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ye[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,F[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,F[M.minFilter]),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ct||M.minFilter!==Fr&&M.minFilter!==ui||M.type===An&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ce(E,M){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));const te=M.source;let D=f.get(te);D===void 0&&(D={},f.set(te,D));const N=j(M);if(N!==E.__cacheKey){D[N]===void 0&&(D[N]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),D[N].usedTimes++;const W=D[E.__cacheKey];W!==void 0&&(D[E.__cacheKey].usedTimes--,W.usedTimes===0&&w(M)),E.__cacheKey=N,E.__webglTexture=D[N].texture}return G}function X(E,M,G){let te=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=n.TEXTURE_3D);const D=ce(E,M),N=M.source;t.bindTexture(te,E.__webglTexture,n.TEXTURE0+G);const W=i.get(N);if(N.version!==W.__version||D===!0){t.activeTexture(n.TEXTURE0+G);const k=Qe.getPrimaries(Qe.workingColorSpace),ae=M.colorSpace===$n?null:Qe.getPrimaries(M.colorSpace),De=M.colorSpace===$n||k===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let oe=_(M.image,!1,r.maxTextureSize);oe=Ee(M,oe);const Se=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let Ve=x(M.internalFormat,Se,Ue,M.colorSpace,M.isVideoTexture);se(te,M);let me;const Je=M.mipmaps,$e=M.isVideoTexture!==!0,at=W.__version===void 0||D===!0,U=N.dataReady,we=P(M,oe);if(M.isDepthTexture)Ve=v(M.format===er,M.type),at&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ve,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,Se,Ue,null));else if(M.isDataTexture)if(Je.length>0){$e&&at&&t.texStorage2D(n.TEXTURE_2D,we,Ve,Je[0].width,Je[0].height);for(let Q=0,le=Je.length;Q<le;Q++)me=Je[Q],$e?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,Se,Ue,me.data):t.texImage2D(n.TEXTURE_2D,Q,Ve,me.width,me.height,0,Se,Ue,me.data);M.generateMipmaps=!1}else $e?(at&&t.texStorage2D(n.TEXTURE_2D,we,Ve,oe.width,oe.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,Ue,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,oe.width,oe.height,0,Se,Ue,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ve,Je[0].width,Je[0].height,oe.depth);for(let Q=0,le=Je.length;Q<le;Q++)if(me=Je[Q],M.format!==sn)if(Se!==null)if($e){if(U)if(M.layerUpdates.size>0){const Pe=Ql(me.width,me.height,M.format,M.type);for(const Ae of M.layerUpdates){const Xe=me.data.subarray(Ae*Pe/me.data.BYTES_PER_ELEMENT,(Ae+1)*Pe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ae,me.width,me.height,1,Se,Xe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,oe.depth,Se,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ve,me.width,me.height,oe.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,oe.depth,Se,Ue,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ve,me.width,me.height,oe.depth,0,Se,Ue,me.data)}else{$e&&at&&t.texStorage2D(n.TEXTURE_2D,we,Ve,Je[0].width,Je[0].height);for(let Q=0,le=Je.length;Q<le;Q++)me=Je[Q],M.format!==sn?Se!==null?$e?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,Se,me.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,me.width,me.height,Se,Ue,me.data):t.texImage2D(n.TEXTURE_2D,Q,Ve,me.width,me.height,0,Se,Ue,me.data)}else if(M.isDataArrayTexture)if($e){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ve,oe.width,oe.height,oe.depth),U)if(M.layerUpdates.size>0){const Q=Ql(oe.width,oe.height,M.format,M.type);for(const le of M.layerUpdates){const Pe=oe.data.subarray(le*Q/oe.data.BYTES_PER_ELEMENT,(le+1)*Q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,oe.width,oe.height,1,Se,Ue,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ue,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,oe.width,oe.height,oe.depth,0,Se,Ue,oe.data);else if(M.isData3DTexture)$e?(at&&t.texStorage3D(n.TEXTURE_3D,we,Ve,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,oe.width,oe.height,oe.depth,0,Se,Ue,oe.data);else if(M.isFramebufferTexture){if(at)if($e)t.texStorage2D(n.TEXTURE_2D,we,Ve,oe.width,oe.height);else{let Q=oe.width,le=oe.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ve,Q,le,0,Se,Ue,null),Q>>=1,le>>=1}}else if(Je.length>0){if($e&&at){const Q=Ce(Je[0]);t.texStorage2D(n.TEXTURE_2D,we,Ve,Q.width,Q.height)}for(let Q=0,le=Je.length;Q<le;Q++)me=Je[Q],$e?U&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Se,Ue,me):t.texImage2D(n.TEXTURE_2D,Q,Ve,Se,Ue,me);M.generateMipmaps=!1}else if($e){if(at){const Q=Ce(oe);t.texStorage2D(n.TEXTURE_2D,we,Ve,Q.width,Q.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ue,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Se,Ue,oe);m(M)&&p(te),W.__version=N.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Y(E,M,G){if(M.image.length!==6)return;const te=ce(E,M),D=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+G);const N=i.get(D);if(D.version!==N.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const W=Qe.getPrimaries(Qe.workingColorSpace),k=M.colorSpace===$n?null:Qe.getPrimaries(M.colorSpace),ae=M.colorSpace===$n||W===k?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,Se=[];for(let le=0;le<6;le++)!De&&!oe?Se[le]=_(M.image[le],!0,r.maxCubemapSize):Se[le]=oe?M.image[le].image:M.image[le],Se[le]=Ee(M,Se[le]);const Ue=Se[0],Ve=s.convert(M.format,M.colorSpace),me=s.convert(M.type),Je=x(M.internalFormat,Ve,me,M.colorSpace),$e=M.isVideoTexture!==!0,at=N.__version===void 0||te===!0,U=D.dataReady;let we=P(M,Ue);se(n.TEXTURE_CUBE_MAP,M);let Q;if(De){$e&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Je,Ue.width,Ue.height);for(let le=0;le<6;le++){Q=Se[le].mipmaps;for(let Pe=0;Pe<Q.length;Pe++){const Ae=Q[Pe];M.format!==sn?Ve!==null?$e?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ae.width,Ae.height,Ve,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,Je,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ae.width,Ae.height,Ve,me,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,Je,Ae.width,Ae.height,0,Ve,me,Ae.data)}}}else{if(Q=M.mipmaps,$e&&at){Q.length>0&&we++;const le=Ce(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,we,Je,le.width,le.height)}for(let le=0;le<6;le++)if(oe){$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Se[le].width,Se[le].height,Ve,me,Se[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Je,Se[le].width,Se[le].height,0,Ve,me,Se[le].data);for(let Pe=0;Pe<Q.length;Pe++){const Xe=Q[Pe].image[le].image;$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Xe.width,Xe.height,Ve,me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,Je,Xe.width,Xe.height,0,Ve,me,Xe.data)}}else{$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ve,me,Se[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Je,Ve,me,Se[le]);for(let Pe=0;Pe<Q.length;Pe++){const Ae=Q[Pe];$e?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Ve,me,Ae.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,Je,Ve,me,Ae.image[le])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),N.__version=D.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function re(E,M,G,te,D,N){const W=s.convert(G.format,G.colorSpace),k=s.convert(G.type),ae=x(G.internalFormat,W,k,G.colorSpace),De=i.get(M),oe=i.get(G);if(oe.__renderTarget=M,!De.__hasExternalTextures){const Se=Math.max(1,M.width>>N),Ue=Math.max(1,M.height>>N);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,N,ae,Se,Ue,M.depth,0,W,k,null):t.texImage2D(D,N,ae,Se,Ue,0,W,k,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,D,oe.__webglTexture,0,pe(M)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,D,oe.__webglTexture,N),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(E,M,G){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer){const te=M.depthTexture,D=te&&te.isDepthTexture?te.type:null,N=v(M.stencilBuffer,D),W=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=pe(M);Te(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,N,M.width,M.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,N,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,N,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,E)}else{const te=M.textures;for(let D=0;D<te.length;D++){const N=te[D],W=s.convert(N.format,N.colorSpace),k=s.convert(N.type),ae=x(N.internalFormat,W,k,N.colorSpace),De=pe(M);G&&Te(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,ae,M.width,M.height):Te(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const D=te.__webglTexture,N=pe(M);if(M.depthTexture.format===qi)Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,D,0);else if(M.depthTexture.format===er)Te(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const M=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){const te=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const D=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",D)};te.addEventListener("dispose",D),M.__depthDisposeCallback=D}M.__boundDepthTexture=te}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(M.__webglFramebuffer,E)}else if(G){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=n.createRenderbuffer(),fe(M.__webglDepthbuffer[te],E,!1);else{const D=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,N=M.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,N),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,N)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),fe(M.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,D),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,D)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(E,M,G){const te=i.get(E);M!==void 0&&re(te.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ie(E)}function Ge(E){const M=E.texture,G=i.get(E),te=i.get(M);E.addEventListener("dispose",T);const D=E.textures,N=E.isWebGLCubeRenderTarget===!0,W=D.length>1;if(W||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=M.version,a.memory.textures++),N){G.__webglFramebuffer=[];for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[k]=[];for(let ae=0;ae<M.mipmaps.length;ae++)G.__webglFramebuffer[k][ae]=n.createFramebuffer()}else G.__webglFramebuffer[k]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let k=0;k<M.mipmaps.length;k++)G.__webglFramebuffer[k]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(W)for(let k=0,ae=D.length;k<ae;k++){const De=i.get(D[k]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Te(E)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let k=0;k<D.length;k++){const ae=D[k];G.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[k]);const De=s.convert(ae.format,ae.colorSpace),oe=s.convert(ae.type),Se=x(ae.internalFormat,De,oe,ae.colorSpace,E.isXRRenderTarget===!0),Ue=pe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,G.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(N){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),se(n.TEXTURE_CUBE_MAP,M);for(let k=0;k<6;k++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)re(G.__webglFramebuffer[k][ae],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ae);else re(G.__webglFramebuffer[k],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let k=0,ae=D.length;k<ae;k++){const De=D[k],oe=i.get(De);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),se(n.TEXTURE_2D,De),re(G.__webglFramebuffer,E,De,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D,0),m(De)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let k=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(k=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(k,te.__webglTexture),se(k,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)re(G.__webglFramebuffer[ae],E,M,n.COLOR_ATTACHMENT0,k,ae);else re(G.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,k,0);m(M)&&p(k),t.unbindTexture()}E.depthBuffer&&Ie(E)}function ne(E){const M=E.textures;for(let G=0,te=M.length;G<te;G++){const D=M[G];if(m(D)){const N=S(E),W=i.get(D).__webglTexture;t.bindTexture(N,W),p(N),t.unbindTexture()}}}const ve=[],R=[];function Ne(E){if(E.samples>0){if(Te(E)===!1){const M=E.textures,G=E.width,te=E.height;let D=n.COLOR_BUFFER_BIT;const N=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=i.get(E),k=M.length>1;if(k)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,W.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),k){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const De=i.get(M[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,De,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,D,n.NEAREST),l===!0&&(ve.length=0,R.length=0,ve.push(n.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ve.push(N),R.push(N),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,R)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const De=i.get(M[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,W.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const M=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function pe(E){return Math.min(r.maxSamples,E.samples)}function Te(E){const M=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(E){const M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Ee(E,M){const G=E.colorSpace,te=E.format,D=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==ir&&G!==$n&&(Qe.getTransfer(G)===lt?(te!==sn||D!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=ie,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Te}function J0(n,e){function t(i,r=$n){let s;const a=Qe.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===bo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.BYTE;if(i===Lc)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===So)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===Dc)return n.ALPHA;if(i===Uc)return n.RGB;if(i===sn)return n.RGBA;if(i===Nc)return n.LUMINANCE;if(i===Fc)return n.LUMINANCE_ALPHA;if(i===qi)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===Cs)return n.RED;if(i===Eo)return n.RED_INTEGER;if(i===kc)return n.RG;if(i===To)return n.RG_INTEGER;if(i===Ao)return n.RGBA_INTEGER;if(i===ps||i===ms||i===gs||i===vs)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Ha||i===Va||i===Ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wa||i===$a||i===Xa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wa||i===$a)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ya||i===qa||i===Za||i===Ja||i===ja||i===Ka||i===Qa||i===eo||i===to||i===no||i===io||i===ro||i===so||i===ao)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ya)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Za)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ja)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ka)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qa)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===no)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===io)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ro)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===so)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ao)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_s||i===oo||i===lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_s)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===co||i===ho||i===uo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===_s)return s.COMPRESSED_RED_RGTC1_EXT;if(i===co)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class j0 extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K0={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Nt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new on({vertexShader:Q0,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Ln(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends rr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new tg,m=t.getContextAttributes();let p=null,S=null;const x=[],v=[],P=new _e;let A=null;const T=new Zt;T.viewport=new ht;const C=new Zt;C.viewport=new ht;const w=[T,C],y=new j0;let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=x[X];return Y===void 0&&(Y=new da,x[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=x[X];return Y===void 0&&(Y=new da,x[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=x[X];return Y===void 0&&(Y=new da,x[X]=Y),Y.getHandSpace()};function z(X){const Y=v.indexOf(X.inputSource);if(Y===-1)return;const re=x[Y];re!==void 0&&(re.update(X.inputSource,X.frame,c||a),re.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ee);for(let X=0;X<x.length;X++){const Y=v[X];Y!==null&&(v[X]=null,x[X].disconnect(Y))}L=null,$=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,r=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Dn(d.framebufferWidth,d.framebufferHeight,{format:sn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,re=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?er:qi,re=m.stencil?Qi:di);const ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Dn(f.textureWidth,f.textureHeight,{format:sn,type:In,depthTexture:new Kc(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(X){for(let Y=0;Y<X.removed.length;Y++){const re=X.removed[Y],fe=v.indexOf(re);fe>=0&&(v[fe]=null,x[fe].disconnect(re))}for(let Y=0;Y<X.added.length;Y++){const re=X.added[Y];let fe=v.indexOf(re);if(fe===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=v.length){v.push(re),fe=Ie;break}else if(v[Ie]===null){v[Ie]=re,fe=Ie;break}if(fe===-1)break}const ge=x[fe];ge&&ge.connect(re)}}const J=new I,ie=new I;function H(X,Y,re){J.setFromMatrixPosition(Y.matrixWorld),ie.setFromMatrixPosition(re.matrixWorld);const fe=J.distanceTo(ie),ge=Y.projectionMatrix.elements,Ie=re.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Ge=ge[14]/(ge[10]+1),ne=(ge[9]+1)/ge[5],ve=(ge[9]-1)/ge[5],R=(ge[8]-1)/ge[0],Ne=(Ie[8]+1)/Ie[0],pe=Le*R,Te=Le*Ne,Me=fe/(-R+Ne),Ee=Me*-R;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ee),X.translateZ(Me),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ce=Le+Me,E=Ge+Me,M=pe-Ee,G=Te+(fe-Ee),te=ne*Ge/E*Ce,D=ve*Ge/E*Ce;X.projectionMatrix.makePerspective(M,G,te,D,Ce,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ye(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Y=X.near,re=X.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(re=_.depthFar)),y.near=C.near=T.near=Y,y.far=C.far=T.far=re,(L!==y.near||$!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,$=y.far),T.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const fe=X.parent,ge=y.cameras;ye(y,fe);for(let Ie=0;Ie<ge.length;Ie++)ye(ge[Ie],fe);ge.length===2?H(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),F(X,y,fe)};function F(X,Y,re){re===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(re.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Rr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let V=null;function se(X,Y){if(h=Y.getViewerPose(c||a),g=Y,h!==null){const re=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let fe=!1;re.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Ie=0;Ie<re.length;Ie++){const Le=re[Ie];let Ge=null;if(d!==null)Ge=d.getViewport(Le);else{const ve=u.getViewSubImage(f,Le);Ge=ve.viewport,Ie===0&&(e.setRenderTargetTextures(S,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(S))}let ne=w[Ie];ne===void 0&&(ne=new Zt,ne.layers.enable(Ie),ne.viewport=new ht,w[Ie]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ie===0&&(y.matrix.copy(ne.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(ne)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Ie=u.getDepthInformation(re[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,r.renderState)}}for(let re=0;re<x.length;re++){const fe=v[re],ge=x[re];fe!==null&&ge!==void 0&&ge.update(fe,Y,c||a)}V&&V(X,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ce=new jc;ce.setAnimationLoop(se),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}const ri=new Un,ig=new pt;function rg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function c(S,x){let v=r[S.id];v===void 0&&(g(S),v=h(S),r[S.id]=v,S.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(S,P);const A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const v=n.createBuffer(),P=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=r[S.id],v=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,y=C.length;w<y;w++){const L=C[w];if(d(L,A,w,P)===!0){const $=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let ee=0;ee<z.length;ee++){const J=z[ee],ie=_(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,$+j,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,v,P){const A=S.value,T=x+"_"+v;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(S){const x=S.uniforms;let v=0;const P=16;for(let T=0,C=x.length;T<C;T++){const w=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,L=w.length;y<L;y++){const $=w[y],z=Array.isArray($.value)?$.value:[$.value];for(let j=0,ee=z.length;j<ee;j++){const J=z[j],ie=_(J),H=v%P,ye=H%ie.boundary,F=H+ye;v+=ye,F!==0&&P-F<ie.storage&&(v+=P-F),$.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=v,v+=ie.storage}}}const A=v%P;return A>0&&(v+=P-A),S.__size=v,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ag{constructor(e={}){const{canvas:t=Xu(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=qn,this.toneMappingExposure=1;const v=this;let P=!1,A=0,T=0,C=null,w=-1,y=null;const L=new ht,$=new ht;let z=null;const j=new Ke(0);let ee=0,J=t.width,ie=t.height,H=1,ye=null,F=null;const V=new ht(0,0,J,ie),se=new ht(0,0,J,ie);let ce=!1;const X=new Po;let Y=!1,re=!1;const fe=new pt,ge=new pt,Ie=new I,Le=new ht,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ve(){return C===null?H:1}let R=i;function Ne(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),R===null){const O="webgl2";if(R=Ne(O,b),R===null)throw Ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,Te,Me,Ee,Ce,E,M,G,te,D,N,W,k,ae,De,oe,Se,Ue,Ve,me,Je,$e,at,U;function we(){pe=new um(R),pe.init(),$e=new J0(R,pe),Te=new sm(R,pe,e,$e),Me=new Y0(R,pe),Te.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),Ee=new pm(R),Ce=new I0,E=new Z0(R,pe,Me,Ce,Te,$e,Ee),M=new om(v),G=new hm(v),te=new Mf(R),at=new im(R,te),D=new fm(R,te,Ee,at),N=new gm(R,D,te,Ee),Ve=new mm(R,Te,E),oe=new am(Ce),W=new L0(v,M,G,pe,Te,at,oe),k=new rg(v,Ce),ae=new U0,De=new z0(pe),Ue=new nm(v,M,G,Me,N,d,l),Se=new $0(v,N,Te),U=new sg(R,Ee,Te,Me),me=new rm(R,pe,Ee),Je=new dm(R,pe,Ee),Ee.programs=W.programs,v.capabilities=Te,v.extensions=pe,v.properties=Ce,v.renderLists=ae,v.shadowMap=Se,v.state=Me,v.info=Ee}we();const Q=new ng(v,R);this.xr=Q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(J,ie,!1))},this.getSize=function(b){return b.set(J,ie)},this.setSize=function(b,O,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,ie=O,t.width=Math.floor(b*H),t.height=Math.floor(O*H),q===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*H,ie*H).floor()},this.setDrawingBufferSize=function(b,O,q){J=b,ie=O,H=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(V)},this.setViewport=function(b,O,q,Z){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,O,q,Z),Me.viewport(L.copy(V).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,O,q,Z){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,O,q,Z),Me.scissor($.copy(se).multiplyScalar(H).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){Me.setScissorTest(ce=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){F=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,O=!0,q=!0){let Z=0;if(b){let B=!1;if(C!==null){const xe=C.texture.format;B=xe===Ao||xe===To||xe===Eo}if(B){const xe=C.texture.type,Re=xe===In||xe===di||xe===Ar||xe===Qi||xe===bo||xe===wo,Fe=Ue.getClearColor(),ke=Ue.getClearAlpha(),We=Fe.r,Ye=Fe.g,Oe=Fe.b;Re?(g[0]=We,g[1]=Ye,g[2]=Oe,g[3]=ke,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=We,_[1]=Ye,_[2]=Oe,_[3]=ke,R.clearBufferiv(R.COLOR,0,_))}else Z|=R.COLOR_BUFFER_BIT}O&&(Z|=R.DEPTH_BUFFER_BIT),q&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ae.dispose(),De.dispose(),Ce.dispose(),M.dispose(),G.dispose(),N.dispose(),at.dispose(),U.dispose(),W.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Xo),Q.removeEventListener("sessionend",Yo),Kn.stop()};function le(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=Ee.autoReset,O=Se.enabled,q=Se.autoUpdate,Z=Se.needsUpdate,B=Se.type;we(),Ee.autoReset=b,Se.enabled=O,Se.autoUpdate=q,Se.needsUpdate=Z,Se.type=B}function Ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xe(b){const O=b.target;O.removeEventListener("dispose",Xe),gt(O)}function gt(b){It(b),Ce.remove(b)}function It(b){const O=Ce.get(b).programs;O!==void 0&&(O.forEach(function(q){W.releaseProgram(q)}),b.isShaderMaterial&&W.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,Z,B,xe){O===null&&(O=Ge);const Re=B.isMesh&&B.matrixWorld.determinant()<0,Fe=Rh(b,O,q,Z,B);Me.setMaterial(Z,Re);let ke=q.index,We=1;if(Z.wireframe===!0){if(ke=D.getWireframeAttribute(q),ke===void 0)return;We=2}const Ye=q.drawRange,Oe=q.attributes.position;let nt=Ye.start*We,ut=(Ye.start+Ye.count)*We;xe!==null&&(nt=Math.max(nt,xe.start*We),ut=Math.min(ut,(xe.start+xe.count)*We)),ke!==null?(nt=Math.max(nt,0),ut=Math.min(ut,ke.count)):Oe!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Oe.count));const ft=ut-nt;if(ft<0||ft===1/0)return;at.setup(B,Z,Fe,q,ke);let Ot,it=me;if(ke!==null&&(Ot=te.get(ke),it=Je,it.setIndex(Ot)),B.isMesh)Z.wireframe===!0?(Me.setLineWidth(Z.wireframeLinewidth*ve()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(B.isLine){let ze=Z.linewidth;ze===void 0&&(ze=1),Me.setLineWidth(ze*ve()),B.isLineSegments?it.setMode(R.LINES):B.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else B.isPoints?it.setMode(R.POINTS):B.isSprite&&it.setMode(R.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,vn=B._multiDrawCounts,rt=B._multiDrawCount,jt=ke?te.get(ke).bytesPerElement:1,Mi=Ce.get(Z).currentProgram.getUniforms();for(let Vt=0;Vt<rt;Vt++)Mi.setValue(R,"_gl_DrawID",Vt),it.render(ze[Vt]/jt,vn[Vt])}else if(B.isInstancedMesh)it.renderInstances(nt,ft,B.count);else if(q.isInstancedBufferGeometry){const ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,vn=Math.min(q.instanceCount,ze);it.renderInstances(nt,ft,vn)}else it.render(nt,ft)};function ot(b,O,q){b.transparent===!0&&b.side===Rt&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,Nr(b,O,q),b.side=jn,b.needsUpdate=!0,Nr(b,O,q),b.side=Rt):Nr(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),p=De.get(q),p.init(O),x.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Z=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const xe=B.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Fe=xe[Re];ot(Fe,q,B),Z.add(Fe)}else ot(xe,q,B),Z.add(xe)}),x.pop(),p=null,Z},this.compileAsync=function(b,O,q=null){const Z=this.compile(b,O,q);return new Promise(B=>{function xe(){if(Z.forEach(function(Re){Ce.get(Re).currentProgram.isReady()&&Z.delete(Re)}),Z.size===0){B(b);return}setTimeout(xe,10)}pe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Jt=null;function gn(b){Jt&&Jt(b)}function Xo(){Kn.stop()}function Yo(){Kn.start()}const Kn=new jc;Kn.setAnimationLoop(gn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){Jt=b,Q.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},Q.addEventListener("sessionstart",Xo),Q.addEventListener("sessionend",Yo),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,C),p=De.get(b,x.length),p.init(O),x.push(p),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(ge),re=this.localClippingEnabled,Y=oe.init(this.clippingPlanes,re),m=ae.get(b,S.length),m.init(),S.push(m),Q.enabled===!0&&Q.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&Os(xe,O,-1/0,v.sortObjects)}Os(b,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ye,F),ne=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,ne&&Ue.addToRenderList(m,b),this.info.render.frame++,Y===!0&&oe.beginShadows();const q=p.state.shadowsArray;Se.render(q,b,O),Y===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){const xe=O.cameras;if(B.length>0)for(let Re=0,Fe=xe.length;Re<Fe;Re++){const ke=xe[Re];Zo(Z,B,b,ke)}ne&&Ue.render(b);for(let Re=0,Fe=xe.length;Re<Fe;Re++){const ke=xe[Re];qo(m,b,ke,ke.viewport)}}else B.length>0&&Zo(Z,B,b,O),ne&&Ue.render(b),qo(m,b,O);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,O),at.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&oe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Os(b,O,q,Z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){Z&&Le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const Re=N.update(b),Fe=b.material;Fe.visible&&m.push(b,Re,Fe,q,Le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const Re=N.update(b),Fe=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Le.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Le.copy(Re.boundingSphere.center)),Le.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(Fe)){const ke=Re.groups;for(let We=0,Ye=ke.length;We<Ye;We++){const Oe=ke[We],nt=Fe[Oe.materialIndex];nt&&nt.visible&&m.push(b,Re,nt,q,Le.z,Oe)}}else Fe.visible&&m.push(b,Re,Fe,q,Le.z,null)}}const xe=b.children;for(let Re=0,Fe=xe.length;Re<Fe;Re++)Os(xe[Re],O,q,Z)}function qo(b,O,q,Z){const B=b.opaque,xe=b.transmissive,Re=b.transparent;p.setupLightsView(q),Y===!0&&oe.setGlobalState(v.clippingPlanes,q),Z&&Me.viewport(L.copy(Z)),B.length>0&&Ur(B,O,q),xe.length>0&&Ur(xe,O,q),Re.length>0&&Ur(Re,O,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Zo(b,O,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Dn(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?pi:In,minFilter:ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const xe=p.state.transmissionRenderTarget[Z.id],Re=Z.viewport||L;xe.setSize(Re.z,Re.w);const Fe=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(j),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Ue.render(q);const ke=v.toneMapping;v.toneMapping=qn;const We=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Y===!0&&oe.setGlobalState(v.clippingPlanes,Z),Ur(b,q,Z),E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Oe=0,nt=O.length;Oe<nt;Oe++){const ut=O[Oe],ft=ut.object,Ot=ut.geometry,it=ut.material,ze=ut.group;if(it.side===Rt&&ft.layers.test(Z.layers)){const vn=it.side;it.side=Ht,it.needsUpdate=!0,Jo(ft,q,Z,Ot,it,ze),it.side=vn,it.needsUpdate=!0,Ye=!0}}Ye===!0&&(E.updateMultisampleRenderTarget(xe),E.updateRenderTargetMipmap(xe))}v.setRenderTarget(Fe),v.setClearColor(j,ee),We!==void 0&&(Z.viewport=We),v.toneMapping=ke}function Ur(b,O,q){const Z=O.isScene===!0?O.overrideMaterial:null;for(let B=0,xe=b.length;B<xe;B++){const Re=b[B],Fe=Re.object,ke=Re.geometry,We=Z===null?Re.material:Z,Ye=Re.group;Fe.layers.test(q.layers)&&Jo(Fe,O,q,ke,We,Ye)}}function Jo(b,O,q,Z,B,xe){b.onBeforeRender(v,O,q,Z,B,xe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,O,q,Z,b,xe),B.transparent===!0&&B.side===Rt&&B.forceSinglePass===!1?(B.side=Ht,B.needsUpdate=!0,v.renderBufferDirect(q,O,Z,B,b,xe),B.side=jn,B.needsUpdate=!0,v.renderBufferDirect(q,O,Z,B,b,xe),B.side=Rt):v.renderBufferDirect(q,O,Z,B,b,xe),b.onAfterRender(v,O,q,Z,B,xe)}function Nr(b,O,q){O.isScene!==!0&&(O=Ge);const Z=Ce.get(b),B=p.state.lights,xe=p.state.shadowsArray,Re=B.state.version,Fe=W.getParameters(b,B.state,xe,O,q),ke=W.getProgramCacheKey(Fe);let We=Z.programs;Z.environment=b.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",Xe),We=new Map,Z.programs=We);let Ye=We.get(ke);if(Ye!==void 0){if(Z.currentProgram===Ye&&Z.lightsStateVersion===Re)return Ko(b,Fe),Ye}else Fe.uniforms=W.getUniforms(b),b.onBeforeCompile(Fe,v),Ye=W.acquireProgram(Fe,ke),We.set(ke,Ye),Z.uniforms=Fe.uniforms;const Oe=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=oe.uniform),Ko(b,Fe),Z.needsLights=Ph(b),Z.lightsStateVersion=Re,Z.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),Z.currentProgram=Ye,Z.uniformsList=null,Ye}function jo(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=xs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ko(b,O){const q=Ce.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Rh(b,O,q,Z,B){O.isScene!==!0&&(O=Ge),E.resetTextureUnits();const xe=O.fog,Re=Z.isMeshStandardMaterial?O.environment:null,Fe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ir,ke=(Z.isMeshStandardMaterial?G:M).get(Z.envMap||Re),We=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let ft=qn;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,it=Ot!==void 0?Ot.length:0,ze=Ce.get(Z),vn=p.state.lights;if(Y===!0&&(re===!0||b!==y)){const Xt=b===y&&Z.id===w;oe.setState(Z,b,Xt)}let rt=!1;Z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vn.state.version||ze.outputColorSpace!==Fe||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==ke||Z.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==Ye||ze.morphTargets!==Oe||ze.morphNormals!==nt||ze.morphColors!==ut||ze.toneMapping!==ft||ze.morphTargetsCount!==it)&&(rt=!0):(rt=!0,ze.__version=Z.version);let jt=ze.currentProgram;rt===!0&&(jt=Nr(Z,O,B));let Mi=!1,Vt=!1,or=!1;const dt=jt.getUniforms(),ln=ze.uniforms;if(Me.useProgram(jt.program)&&(Mi=!0,Vt=!0,or=!0),Z.id!==w&&(w=Z.id,Vt=!0),Mi||y!==b){Me.buffers.depth.getReversed()?(fe.copy(b.projectionMatrix),qu(fe),Zu(fe),dt.setValue(R,"projectionMatrix",fe)):dt.setValue(R,"projectionMatrix",b.projectionMatrix),dt.setValue(R,"viewMatrix",b.matrixWorldInverse);const Nn=dt.map.cameraPosition;Nn!==void 0&&Nn.setValue(R,Ie.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Vt=!0,or=!0)}if(B.isSkinnedMesh){dt.setOptional(R,B,"bindMatrix"),dt.setOptional(R,B,"bindMatrixInverse");const Xt=B.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),dt.setValue(R,"boneTexture",Xt.boneTexture,E))}B.isBatchedMesh&&(dt.setOptional(R,B,"batchingTexture"),dt.setValue(R,"batchingTexture",B._matricesTexture,E),dt.setOptional(R,B,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",B._indirectTexture,E),dt.setOptional(R,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",B._colorsTexture,E));const lr=q.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Ve.update(B,q,jt),(Vt||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,dt.setValue(R,"receiveShadow",B.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ln.envMap.value=ke,ln.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&O.environment!==null&&(ln.envMapIntensity.value=O.environmentIntensity),Vt&&(dt.setValue(R,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Ch(ln,or),xe&&Z.fog===!0&&k.refreshFogUniforms(ln,xe),k.refreshMaterialUniforms(ln,Z,H,ie,p.state.transmissionRenderTarget[b.id]),xs.upload(R,jo(ze),ln,E)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(xs.upload(R,jo(ze),ln,E),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(R,"center",B.center),dt.setValue(R,"modelViewMatrix",B.modelViewMatrix),dt.setValue(R,"normalMatrix",B.normalMatrix),dt.setValue(R,"modelMatrix",B.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Xt=Z.uniformsGroups;for(let Nn=0,Fn=Xt.length;Nn<Fn;Nn++){const Qo=Xt[Nn];U.update(Qo,jt),U.bind(Qo,jt)}}return jt}function Ch(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ph(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,q){Ce.get(b.texture).__webglTexture=O,Ce.get(b.depthTexture).__webglTexture=q;const Z=Ce.get(b);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const q=Ce.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){C=b,A=O,T=q;let Z=!0,B=null,xe=!1,Re=!1;if(b){const ke=Ce.get(b);if(ke.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(ke.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(ke.__hasExternalTextures)E.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(ke.__boundDepthTexture!==Oe){if(Oe!==null&&Ce.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Ye=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?B=Ye[O][q]:B=Ye[O],xe=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?B=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[q]:B=Ye,L.copy(b.viewport),$.copy(b.scissor),z=b.scissorTest}else L.copy(V).multiplyScalar(H).floor(),$.copy(se).multiplyScalar(H).floor(),z=ce;if(Me.bindFramebuffer(R.FRAMEBUFFER,B)&&Z&&Me.drawBuffers(b,B),Me.viewport(L),Me.scissor($),Me.setScissorTest(z),xe){const ke=Ce.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,ke.__webglTexture,q)}else if(Re){const ke=Ce.get(b.texture),We=O||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,q||0,We)}w=-1},this.readRenderTargetPixels=function(b,O,q,Z,B,xe,Re){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){Me.bindFramebuffer(R.FRAMEBUFFER,Fe);try{const ke=b.texture,We=ke.format,Ye=ke.type;if(!Te.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Z&&q>=0&&q<=b.height-B&&R.readPixels(O,q,Z,B,$e.convert(We),$e.convert(Ye),xe)}finally{const ke=C!==null?Ce.get(C).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,Z,B,xe,Re){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){const ke=b.texture,We=ke.format,Ye=ke.type;if(!Te.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-Z&&q>=0&&q<=b.height-B){Me.bindFramebuffer(R.FRAMEBUFFER,Fe);const Oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.bufferData(R.PIXEL_PACK_BUFFER,xe.byteLength,R.STREAM_READ),R.readPixels(O,q,Z,B,$e.convert(We),$e.convert(Ye),0);const nt=C!==null?Ce.get(C).__webglFramebuffer:null;Me.bindFramebuffer(R.FRAMEBUFFER,nt);const ut=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Yu(R,ut,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,xe),R.deleteBuffer(Oe),R.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,q=0){b.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const Z=Math.pow(2,-q),B=Math.floor(b.image.width*Z),xe=Math.floor(b.image.height*Z),Re=O!==null?O.x:0,Fe=O!==null?O.y:0;E.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Re,Fe,B,xe),Me.unbindTexture()},this.copyTextureToTexture=function(b,O,q=null,Z=null,B=0){b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let xe,Re,Fe,ke,We,Ye,Oe,nt,ut;const ft=b.isCompressedTexture?b.mipmaps[B]:b.image;q!==null?(xe=q.max.x-q.min.x,Re=q.max.y-q.min.y,Fe=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,We=q.min.y,Ye=q.isBox3?q.min.z:0):(xe=ft.width,Re=ft.height,Fe=ft.depth||1,ke=0,We=0,Ye=0),Z!==null?(Oe=Z.x,nt=Z.y,ut=Z.z):(Oe=0,nt=0,ut=0);const Ot=$e.convert(O.format),it=$e.convert(O.type);let ze;O.isData3DTexture?(E.setTexture3D(O,0),ze=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(E.setTexture2DArray(O,0),ze=R.TEXTURE_2D_ARRAY):(E.setTexture2D(O,0),ze=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const vn=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),jt=R.getParameter(R.UNPACK_SKIP_PIXELS),Mi=R.getParameter(R.UNPACK_SKIP_ROWS),Vt=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ye);const or=b.isDataArrayTexture||b.isData3DTexture,dt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ln=Ce.get(b),lr=Ce.get(O),Xt=Ce.get(ln.__renderTarget),Nn=Ce.get(lr.__renderTarget);Me.bindFramebuffer(R.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Fn=0;Fn<Fe;Fn++)or&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,B,Ye+Fn),b.isDepthTexture?(dt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,B,ut+Fn),R.blitFramebuffer(ke,We,xe,Re,Oe,nt,xe,Re,R.DEPTH_BUFFER_BIT,R.NEAREST)):dt?R.copyTexSubImage3D(ze,B,Oe,nt,ut+Fn,ke,We,xe,Re):R.copyTexSubImage2D(ze,B,Oe,nt,ut+Fn,ke,We,xe,Re);Me.bindFramebuffer(R.READ_FRAMEBUFFER,null),Me.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(ze,B,Oe,nt,ut,xe,Re,Fe,Ot,it,ft.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(ze,B,Oe,nt,ut,xe,Re,Fe,Ot,ft.data):R.texSubImage3D(ze,B,Oe,nt,ut,xe,Re,Fe,Ot,it,ft):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,B,Oe,nt,xe,Re,Ot,it,ft.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,B,Oe,nt,ft.width,ft.height,Ot,ft.data):R.texSubImage2D(R.TEXTURE_2D,B,Oe,nt,xe,Re,Ot,it,ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,vn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,jt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Mi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vt),B===0&&O.generateMipmaps&&R.generateMipmap(ze),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,O,q=null,Z=null,B=0){return b.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,q,Z,B)},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Me.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class ih extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rh extends Nt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Ct,h=Ct,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class og extends Nt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,d=(a-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new _e:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,r=[],s=[],a=[],o=new I,l=new pt;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(At(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(At(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Io extends mn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lg extends Io{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Do(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,r(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const is=new I,pa=new Do,ma=new Do,ga=new Do;class sh extends mn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new I){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(is.subVectors(r[0],r[1]).add(r[0]),c=is);const u=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(is.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=is),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),ma.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),ga.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ma.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ga.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(pa.calc(l),ma.calc(l),ga.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ec(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function cg(n,e){const t=1-n;return t*t*e}function hg(n,e){return 2*(1-n)*n*e}function ug(n,e){return n*n*e}function wr(n,e,t,i){return cg(n,e)+hg(n,t)+ug(n,i)}function fg(n,e){const t=1-n;return t*t*t*e}function dg(n,e){const t=1-n;return 3*t*t*n*e}function pg(n,e){return 3*(1-n)*n*n*e}function mg(n,e){return n*n*n*e}function Er(n,e,t,i,r){return fg(n,e)+dg(n,t)+pg(n,i)+mg(n,r)}class ah extends mn{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gg extends mn{constructor(e=new I,t=new I,i=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,r.x,s.x,a.x,o.x),Er(e,r.y,s.y,a.y,o.y),Er(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oh extends mn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vg extends mn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lh extends mn{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(wr(e,r.x,s.x,a.x),wr(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ch extends mn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(wr(e,r.x,s.x,a.x),wr(e,r.y,s.y,a.y),wr(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hh extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(ec(o,l.x,c.x,h.x,u.x),ec(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var ws=Object.freeze({__proto__:null,ArcCurve:lg,CatmullRomCurve3:sh,CubicBezierCurve:ah,CubicBezierCurve3:gg,EllipseCurve:Io,LineCurve:oh,LineCurve3:vg,QuadraticBezierCurve:lh,QuadraticBezierCurve3:ch,SplineCurve:hh});class _g extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ws[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new ws[r.type]().fromJSON(r))}return this}}class tc extends _g{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new oh(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new lh(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new ah(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new Io(e,t,i,r,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uo extends Lt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=At(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/t,u=new I,f=new _e,d=new I,g=new I,_=new I;let m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=t;S++){const x=i+S*h*r,v=Math.sin(x),P=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*v,u.y=e[A].y,u.z=e[A].x*P,a.push(u.x,u.y,u.z),f.x=S/t,f.y=A/(e.length-1),o.push(f.x,f.y);const T=l[3*A+0]*v,C=l[3*A+1],w=l[3*A+0]*P;c.push(T,C,w)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const v=x+S*e.length,P=v,A=v+e.length,T=v+e.length+1,C=v+1;s.push(P,A,C),s.push(T,C,A)}this.setIndex(s),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.points,e.segments,e.phiStart,e.phiLength)}}class mi extends Lt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function S(){const v=new I,P=new I;let A=0;const T=(t-e)/i;for(let C=0;C<=s;C++){const w=[],y=C/s,L=y*(t-e)+e;for(let $=0;$<=r;$++){const z=$/r,j=z*l+o,ee=Math.sin(j),J=Math.cos(j);P.x=L*ee,P.y=-y*i+m,P.z=L*J,u.push(P.x,P.y,P.z),v.set(ee,T,J).normalize(),f.push(v.x,v.y,v.z),d.push(z,1-y),w.push(g++)}_.push(w)}for(let C=0;C<r;C++)for(let w=0;w<s;w++){const y=_[w][C],L=_[w+1][C],$=_[w+1][C+1],z=_[w][C+1];(e>0||w!==0)&&(h.push(y,L,z),A+=3),(t>0||w!==s-1)&&(h.push(L,$,z),A+=3)}c.addGroup(p,A,0),p+=A}function x(v){const P=g,A=new _e,T=new I;let C=0;const w=v===!0?e:t,y=v===!0?1:-1;for(let $=1;$<=r;$++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const L=g;for(let $=0;$<=r;$++){const j=$/r*l+o,ee=Math.cos(j),J=Math.sin(j);T.x=w*J,T.y=m*y,T.z=w*ee,u.push(T.x,T.y,T.z),f.push(0,y,0),A.x=ee*.5+.5,A.y=J*.5*y+.5,d.push(A.x,A.y),g++}for(let $=0;$<r;$++){const z=P+$,j=L+$;v===!0?h.push(j,j+1,z):h.push(j+1,j,z),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ds extends mi{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Us extends Lt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new I,v=new I,P=new I;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],v),d(t[A+2],P),l(x,v,P,S)}function l(S,x,v,P){const A=P+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const w=S.clone().lerp(v,C/A),y=x.clone().lerp(v,C/A),L=A-C;for(let $=0;$<=L;$++)$===0&&C===A?T[C][$]=w:T[C][$]=w.clone().lerp(y,$/L)}for(let C=0;C<A;C++)for(let w=0;w<2*(A-C)-1;w++){const y=Math.floor(w/2);w%2===0?(f(T[C][y+1]),f(T[C+1][y]),f(T[C][y])):(f(T[C][y+1]),f(T[C+1][y+1]),f(T[C+1][y]))}}function c(S){const x=new I;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(S),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const S=new I;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const v=m(S)/2/Math.PI+.5,P=p(S)/Math.PI+.5;a.push(v,1-P)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],P=a[S+4],A=Math.max(x,v,P),T=Math.min(x,v,P);A>.9&&T<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),P<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const S=new I,x=new I,v=new I,P=new I,A=new _e,T=new _e,C=new _e;for(let w=0,y=0;w<s.length;w+=9,y+=6){S.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),P.copy(S).add(x).add(v).divideScalar(3);const L=m(P);_(A,y+0,S,L),_(T,y+2,x,L),_(C,y+4,v,L)}}function _(S,x,v,P){P<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=P/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.vertices,e.indices,e.radius,e.details)}}class Ns extends tc{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new tc().fromJSON(r))}return this}}const xg={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=uh(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,f,d;if(i&&(s=wg(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<r;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Cr(s,a,t,o,l,d,0),a}};function uh(n,e,t,i,r){let s,a;if(r===Ng(n,e,t,i)>0)for(s=e;s<t;s+=i)a=nc(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=nc(s,n[s],n[s+1],a);return a&&Fs(a,a.next)&&(Lr(a),a=a.next),a}function gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fs(t,t.next)||mt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cr(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Cg(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?Mg(n,i,r,s):yg(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Sg(gi(n),e,t),Cr(n,e,t,i,r,s,2)):a===2&&bg(n,e,t,i,r,s):Cr(gi(n),e,t,i,r,s,1);break}}}function yg(n){const e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Xi(r,o,s,l,a,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mg(n,e,t,i){const r=n.prev,s=n,a=n.next;if(mt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=po(d,g,e,t,i),S=po(_,m,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=S;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Xi(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xi(o,h,l,u,c,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&Xi(o,h,l,u,c,f,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xi(o,h,l,u,c,f,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Sg(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Fs(r,s)&&fh(r,i,i.next,s)&&Pr(r,s)&&Pr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Lr(i),Lr(i.next),i=n=s),i=i.next}while(i!==n);return gi(i)}function bg(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ig(a,o)){let l=dh(a,o);a=gi(a,a.next),l=gi(l,l.next),Cr(a,e,t,i,r,s,0),Cr(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function wg(n,e,t,i){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=uh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Lg(c));for(r.sort(Eg),s=0;s<r.length;s++)t=Tg(r[s],t);return t}function Eg(n,e){return n.x-e.x}function Tg(n,e){const t=Ag(n,e);if(!t)return e;const i=dh(t,n);return gi(i,i.next),gi(t,t.next)}function Ag(n,e){let t=e,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Xi(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(s-t.x),Pr(t,n)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&Rg(r,t)))&&(r=t,h=u)),t=t.next;while(t!==o);return r}function Rg(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function Cg(n,e,t,i){let r=n;do r.z===0&&(r.z=po(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Pg(r)}function Pg(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function po(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xi(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Ig(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Dg(n,e)&&(Pr(n,e)&&Pr(e,n)&&Ug(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||Fs(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fs(n,e){return n.x===e.x&&n.y===e.y}function fh(n,e,t,i){const r=ss(mt(n,e,t)),s=ss(mt(n,e,i)),a=ss(mt(t,i,n)),o=ss(mt(t,i,e));return!!(r!==s&&a!==o||r===0&&rs(n,t,e)||s===0&&rs(n,i,e)||a===0&&rs(t,n,i)||o===0&&rs(t,e,i))}function rs(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ss(n){return n>0?1:n<0?-1:0}function Dg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function Ug(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function dh(n,e){const t=new mo(n.i,n.x,n.y),i=new mo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function nc(n,e,t,i){const r=new mo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function mo(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ng(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Zn{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Zn.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];ic(e),rc(i,e);let a=e.length;t.forEach(ic);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,rc(i,t[l]);const o=xg.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ic(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class No extends Lt{constructor(e=new Ns([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Fg;let x,v=!1,P,A,T,C;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,P=p.computeFrenetFrames(h,!1),A=new I,T=new I,C=new I),f||(m=0,d=0,g=0,_=0);const w=o.extractPoints(c);let y=w.shape;const L=w.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let ne=0,ve=L.length;ne<ve;ne++){const R=L[ne];Zn.isClockWise(R)&&(L[ne]=R.reverse())}}const z=Zn.triangulateShape(y,L),j=y;for(let ne=0,ve=L.length;ne<ve;ne++){const R=L[ne];y=y.concat(R)}function ee(ne,ve,R){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ve,R)}const J=y.length,ie=z.length;function H(ne,ve,R){let Ne,pe,Te;const Me=ne.x-ve.x,Ee=ne.y-ve.y,Ce=R.x-ne.x,E=R.y-ne.y,M=Me*Me+Ee*Ee,G=Me*E-Ee*Ce;if(Math.abs(G)>Number.EPSILON){const te=Math.sqrt(M),D=Math.sqrt(Ce*Ce+E*E),N=ve.x-Ee/te,W=ve.y+Me/te,k=R.x-E/D,ae=R.y+Ce/D,De=((k-N)*E-(ae-W)*Ce)/(Me*E-Ee*Ce);Ne=N+Me*De-ne.x,pe=W+Ee*De-ne.y;const oe=Ne*Ne+pe*pe;if(oe<=2)return new _e(Ne,pe);Te=Math.sqrt(oe/2)}else{let te=!1;Me>Number.EPSILON?Ce>Number.EPSILON&&(te=!0):Me<-Number.EPSILON?Ce<-Number.EPSILON&&(te=!0):Math.sign(Ee)===Math.sign(E)&&(te=!0),te?(Ne=-Ee,pe=Me,Te=Math.sqrt(M)):(Ne=Me,pe=Ee,Te=Math.sqrt(M/2))}return new _e(Ne/Te,pe/Te)}const ye=[];for(let ne=0,ve=j.length,R=ve-1,Ne=ne+1;ne<ve;ne++,R++,Ne++)R===ve&&(R=0),Ne===ve&&(Ne=0),ye[ne]=H(j[ne],j[R],j[Ne]);const F=[];let V,se=ye.concat();for(let ne=0,ve=L.length;ne<ve;ne++){const R=L[ne];V=[];for(let Ne=0,pe=R.length,Te=pe-1,Me=Ne+1;Ne<pe;Ne++,Te++,Me++)Te===pe&&(Te=0),Me===pe&&(Me=0),V[Ne]=H(R[Ne],R[Te],R[Me]);F.push(V),se=se.concat(V)}for(let ne=0;ne<m;ne++){const ve=ne/m,R=d*Math.cos(ve*Math.PI/2),Ne=g*Math.sin(ve*Math.PI/2)+_;for(let pe=0,Te=j.length;pe<Te;pe++){const Me=ee(j[pe],ye[pe],Ne);fe(Me.x,Me.y,-R)}for(let pe=0,Te=L.length;pe<Te;pe++){const Me=L[pe];V=F[pe];for(let Ee=0,Ce=Me.length;Ee<Ce;Ee++){const E=ee(Me[Ee],V[Ee],Ne);fe(E.x,E.y,-R)}}}const ce=g+_;for(let ne=0;ne<J;ne++){const ve=f?ee(y[ne],se[ne],ce):y[ne];v?(T.copy(P.normals[0]).multiplyScalar(ve.x),A.copy(P.binormals[0]).multiplyScalar(ve.y),C.copy(x[0]).add(T).add(A),fe(C.x,C.y,C.z)):fe(ve.x,ve.y,0)}for(let ne=1;ne<=h;ne++)for(let ve=0;ve<J;ve++){const R=f?ee(y[ve],se[ve],ce):y[ve];v?(T.copy(P.normals[ne]).multiplyScalar(R.x),A.copy(P.binormals[ne]).multiplyScalar(R.y),C.copy(x[ne]).add(T).add(A),fe(C.x,C.y,C.z)):fe(R.x,R.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){const ve=ne/m,R=d*Math.cos(ve*Math.PI/2),Ne=g*Math.sin(ve*Math.PI/2)+_;for(let pe=0,Te=j.length;pe<Te;pe++){const Me=ee(j[pe],ye[pe],Ne);fe(Me.x,Me.y,u+R)}for(let pe=0,Te=L.length;pe<Te;pe++){const Me=L[pe];V=F[pe];for(let Ee=0,Ce=Me.length;Ee<Ce;Ee++){const E=ee(Me[Ee],V[Ee],Ne);v?fe(E.x,E.y+x[h-1].y,x[h-1].x+R):fe(E.x,E.y,u+R)}}}X(),Y();function X(){const ne=r.length/3;if(f){let ve=0,R=J*ve;for(let Ne=0;Ne<ie;Ne++){const pe=z[Ne];ge(pe[2]+R,pe[1]+R,pe[0]+R)}ve=h+m*2,R=J*ve;for(let Ne=0;Ne<ie;Ne++){const pe=z[Ne];ge(pe[0]+R,pe[1]+R,pe[2]+R)}}else{for(let ve=0;ve<ie;ve++){const R=z[ve];ge(R[2],R[1],R[0])}for(let ve=0;ve<ie;ve++){const R=z[ve];ge(R[0]+J*h,R[1]+J*h,R[2]+J*h)}}i.addGroup(ne,r.length/3-ne,0)}function Y(){const ne=r.length/3;let ve=0;re(j,ve),ve+=j.length;for(let R=0,Ne=L.length;R<Ne;R++){const pe=L[R];re(pe,ve),ve+=pe.length}i.addGroup(ne,r.length/3-ne,1)}function re(ne,ve){let R=ne.length;for(;--R>=0;){const Ne=R;let pe=R-1;pe<0&&(pe=ne.length-1);for(let Te=0,Me=h+m*2;Te<Me;Te++){const Ee=J*Te,Ce=J*(Te+1),E=ve+Ne+Ee,M=ve+pe+Ee,G=ve+pe+Ce,te=ve+Ne+Ce;Ie(E,M,G,te)}}}function fe(ne,ve,R){l.push(ne),l.push(ve),l.push(R)}function ge(ne,ve,R){Le(ne),Le(ve),Le(R);const Ne=r.length/3,pe=S.generateTopUV(i,r,Ne-3,Ne-2,Ne-1);Ge(pe[0]),Ge(pe[1]),Ge(pe[2])}function Ie(ne,ve,R,Ne){Le(ne),Le(ve),Le(Ne),Le(ve),Le(R),Le(Ne);const pe=r.length/3,Te=S.generateSideWallUV(i,r,pe-6,pe-3,pe-2,pe-1);Ge(Te[0]),Ge(Te[1]),Ge(Te[3]),Ge(Te[1]),Ge(Te[2]),Ge(Te[3])}function Le(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Ge(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ws[r.type]().fromJSON(r)),new No(i,e.options)}}const Fg={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new _e(s,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-u),new _e(f,1-g),new _e(_,1-p)]:[new _e(o,1-l),new _e(h,1-u),new _e(d,1-g),new _e(m,1-p)]}};function kg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fo extends Us{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fo(e.radius,e.detail)}}class ko extends Us{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ko(e.radius,e.detail)}}class Oo extends Lt{constructor(e=new Ns([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(s,3)),this.setAttribute("uv",new et(a,2));function c(h){const u=r.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Zn.isClockWise(S)===!0&&(g[m]=S.reverse())}const _=Zn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=_.length;m<p;m++){const S=_[m],x=S[0]+u,v=S[1]+u,P=S[2]+u;i.push(x,v,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Og(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new Oo(i,e.curveSegments)}}function Og(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class vi extends Lt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let v=0;p===0&&a===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=h[p][S+1],v=h[p][S],P=h[p+1][S],A=h[p+1][S+1];(p!==0||a>0)&&d.push(x,v,A),(p!==i-1||l<Math.PI)&&d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends Lt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(_,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zo extends Lt{constructor(e=new ch(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new _e;let h=new I;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function _(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),S(),p()}function m(x){h=e.getPointAt(x/t,h);const v=a.normals[x],P=a.binormals[x];for(let A=0;A<=r;A++){const T=A/r*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+C*P.x,l.y=w*v.y+C*P.y,l.z=w*v.z+C*P.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=r;v++){const P=(r+1)*(x-1)+(v-1),A=(r+1)*x+(v-1),T=(r+1)*x+v,C=(r+1)*(x-1)+v;g.push(P,A,C),g.push(A,T,C)}}function S(){for(let x=0;x<=t;x++)for(let v=0;v<=r;v++)c.x=x/t,c.y=v/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zo(new ws[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bg extends Dr{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Ho extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zg extends Ho{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const va=new pt,sc=new I,ac=new I;class ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oc=new pt,dr=new I,_a=new I;class Hg extends ph{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(dr),_a.copy(i.position),_a.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_a),i.updateMatrixWorld(),r.makeTranslation(-dr.x,-dr.y,-dr.z),oc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc)}}class Vg extends Ho{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gg extends ph{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);const fn="#5b3520",Es={trunk:"#e2a574",leaf:"#83c47b",fir:"#8ccf87"};function ct(n){let e=(Math.imul(n|0,2654435761)^2654435769)>>>0||1;return()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296)}function Et(n,e){const t=document.createElement("canvas");return t.width=Math.round(n),t.height=Math.round(e),[t,t.getContext("2d")]}function $g(n,e,{amp:t=1.5,step:i=5,closed:r=!1}={}){const s=[],a=n.length,o=r?a:a-1,l=e()*6.28,c=e()*6.28;let h=0;for(let u=0;u<o;u++){const[f,d]=n[u],[g,_]=n[(u+1)%a],m=Math.hypot(g-f,_-d)||1,p=-(_-d)/m,S=(g-f)/m,x=Math.max(1,Math.ceil(m/i));for(let v=0;v<x;v++){const P=v/x,A=t*(Math.sin(h*.045+l)*.65+Math.sin(h*.17+c)*.35);s.push([f+(g-f)*P+p*A,d+(_-d)*P+S*A]),h+=m/x}}return r||s.push(n[a-1].slice()),s}function st(n,e,t,{w:i=3,color:r=fn,closed:s=!1,amp:a=1.3}={}){const o=$g(e,t,{amp:a,closed:s});s&&o.push(o[0]);const l=t()*6.28,c=.12+t()*.14;n.strokeStyle=r,n.lineCap="round",n.lineJoin="round";for(let h=0;h<o.length-1;h++)n.lineWidth=i*(.7+.55*(.5+.5*Math.sin(h*c+l))),n.beginPath(),n.moveTo(o[h][0],o[h][1]),n.lineTo(o[h+1][0],o[h+1][1]),n.stroke()}function mh(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(const t of e)n.lineTo(t[0],t[1]);n.closePath()}function Mt(n,e,t){n.fillStyle=t,mh(n,e),n.fill()}function gh(n,e,t){n.save(),mh(n,e),n.clip(),t(),n.restore()}function vt(n,e,t,i,r,{n:s=40,lump:a=.08}={}){const o=2+Math.floor(r()*3),l=r()*6.28,c=5+Math.floor(r()*3),h=r()*6.28,u=[];for(let f=0;f<s;f++){const d=f/s*Math.PI*2,g=1+a*(Math.sin(d*o+l)*.6+Math.sin(d*c+h)*.4);u.push([n+Math.cos(d)*t*g,e+Math.sin(d)*i*g])}return u}function Xg(n,e,t,i,r){const s=[];for(let a=0;a<r;a++){const o=Math.PI+a/r*Math.PI,l=Math.PI+(a+1)/r*Math.PI,c=n+Math.cos(o)*t,h=e+Math.sin(o)*i,u=n+Math.cos(l)*t,f=e+Math.sin(l)*i,d=(c+u)/2,g=(h+f)/2,_=Math.hypot(u-c,f-h)/2,m=Math.atan2(h-g,c-d),p=Math.atan2(g-e,d-n),S=Math.cos(m+Math.PI/2-p)>0?1:-1;for(let x=0;x<8;x++){const v=m+S*(x/8)*Math.PI;s.push([d+Math.cos(v)*_,g+Math.sin(v)*_*1.05])}}for(let a=0;a<=10;a++){const o=a/10*Math.PI;s.push([n+Math.cos(o)*t,e+Math.sin(o)*i*.45])}return s}function Yg(){const[n,e]=Et(128,64),t=e.createRadialGradient(64,32,4,64,32,62);return t.addColorStop(0,"rgba(50,95,55,.42)"),t.addColorStop(.7,"rgba(50,95,55,.3)"),t.addColorStop(1,"rgba(50,95,55,0)"),e.setTransform(1,0,0,.5,0,16),e.fillStyle=t,e.beginPath(),e.arc(64,32,62,0,Math.PI*2),e.fill(),n}const qg=new on({side:Rt,vertexShader:`
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
    }`}),Zg=new on({side:Rt,uniforms:{map:{value:null}},vertexShader:`
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
    }`}),Fi=new on({uniforms:{tColor:{value:null},tND:{value:null},texel:{value:new _e},seed:{value:0},lineW:{value:1.3},ink:{value:new Ke(fn)}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`});function Jg(n){const e=new Dn(1,1,{samples:4,type:pi}),t=new Dn(1,1,{type:pi,minFilter:Ct,magFilter:Ct}),i=new _t(new Ln(2,2),Fi),r=new ih;r.add(i);const s=new Ls(-1,1,1,-1,0,1),a=new _e,o=[];function l(){n.getDrawingBufferSize(a),e.setSize(a.x,a.y),t.setSize(a.x,a.y),Fi.uniforms.texel.value.set(1/a.x,1/a.y),Fi.uniforms.lineW.value=1.25*n.getPixelRatio()}function c(h,u,f){n.getDrawingBufferSize(a),(a.x!==e.width||a.y!==e.height)&&l(),n.setRenderTarget(e),n.render(h,u);const d=h.background;h.background=null,h.traverse(_=>{if(!(!_.isMesh||!_.visible)){if(_.userData.noInk){_.visible=!1,o.push([_,null]);return}o.push([_,_.material]),_.userData.sprite?(_.material=Zg,_.onBeforeRender=Kg):_.material=qg}});const g=n.getClearAlpha();n.getClearColor(lc),n.setClearColor(0,0),n.setRenderTarget(t),n.render(h,u),n.setClearColor(lc,g);for(const[_,m]of o)m?(_.material=m,_.onBeforeRender=jg):_.visible=!0;o.length=0,h.background=d,Fi.uniforms.tColor.value=e.texture,Fi.uniforms.tND.value=t.texture,Fi.uniforms.seed.value=f,n.setRenderTarget(null),n.render(r,s)}return{render:c,setSize:l}}const lc=new Ke,jg=()=>{};function Kg(n,e,t,i,r){r.uniforms.map.value=this.userData.colorMap(),r.uniformsNeedUpdate=!0}function Qg(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new Lt;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in s){const u=cc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);const g=cc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function cc(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const a=new e(s),o=new an(a,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,l);l+=h.count*t}return r!==void 0&&(o.gpuType=r),o}function ev(n,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},i=n.getIndex(),r=n.getAttribute("position"),s=i?i.count:r.count;let a=0;const o=Object.keys(n.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let S=0,x=o.length;S<x;S++){const v=o[S],P=n.attributes[v];l[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const A=n.morphAttributes[v];A&&(c[v]||(c[v]=[]),A.forEach((T,C)=>{const w=new T.array.constructor(T.count*T.itemSize);c[v][C]=new T.constructor(w,T.itemSize,T.normalized)}))}const d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let S=0;S<s;S++){const x=i?i.getX(S):S;let v="";for(let P=0,A=o.length;P<A;P++){const T=o[P],C=n.getAttribute(T),w=C.itemSize;for(let y=0;y<w;y++)v+=`${~~(C[u[y]](x)*_+m)},`}if(v in t)h.push(t[v]);else{for(let P=0,A=o.length;P<A;P++){const T=o[P],C=n.getAttribute(T),w=n.morphAttributes[T],y=C.itemSize,L=l[T],$=c[T];for(let z=0;z<y;z++){const j=u[z],ee=f[z];if(L[ee](a,C[j](x)),w)for(let J=0,ie=w.length;J<ie;J++)$[J][ee](a,w[J][j](x))}}t[v]=a,h.push(a),a++}}const p=n.clone();for(const S in n.attributes){const x=l[S];if(p.setAttribute(S,new x.constructor(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),S in c)for(let v=0;v<c[S].length;v++){const P=c[S][v];p.morphAttributes[S][v]=new P.constructor(P.array.slice(0,a*P.itemSize),P.itemSize,P.normalized)}}return p.setIndex(h),p}const tv=(()=>{const n=new rh(new Uint8Array([120,255]),2,1,Cs);return n.minFilter=n.magFilter=Ct,n.needsUpdate=!0,n})(),xa=new Map;function nr(n,e={}){const t=n+JSON.stringify(e,(i,r)=>r&&r.isTexture?r.uuid:r);return xa.has(t)||xa.set(t,new Bg({color:n,gradientMap:tv,...e})),xa.get(t)}function Cn(n,e=!1){const t=new og(n);return t.colorSpace=Bt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=Ms),t}const vh=new I(0,1,0),nv=new pt,Vo=new xi,_h=new I,xh=new I;function Go(n,e,t=Vo.identity(),i=_h.set(1,1,1)){return n.clone().applyMatrix4(nv.compose(e,t,i))}function iv(n){return n.attributes.uv||n.setAttribute("uv",new et(new Float32Array(n.attributes.position.count*2),2)),n}function go(n,e){return new _t(Qg(n.map(iv)),e)}const rv=new vi(1,12,8);function hc(n,e,t,i){const r=3+Math.floor(t()*3);for(let s=0;s<r;s++){const a=s/r*Math.PI*2+t(),o=s===0?0:e*.55,l=e*(s===0?1:.62+t()*.2);i.push(Go(rv,xh.set(n.x+Math.cos(a)*o,n.y+(s===0?e*.12:0),n.z+Math.sin(a)*o),Vo.identity(),_h.set(l,l*.46,l)))}}function vo(n){const e=ct(n),t=4+e()*.9,i=(e()-.5)*.5,r=new zt,s=new mi(.06,.2,t,8,12);s.translate(0,t/2,0);const a=s.attributes.position;for(let h=0;h<a.count;h++){const u=a.getY(h)/t,f=u<.1?1+(.1-u)*7:1;a.setXYZ(h,a.getX(h)*f+i*u*u,a.getY(h),a.getZ(h)*f)}s.computeVertexNormals();const o=[s],l=[],c=6+Math.floor(e()*3);for(let h=0;h<c;h++){const u=.3+h/(c-1)*.62,f=h*2.4+e()*.6,d=.35+(1-u)*.95,g=new I(i*u*u,u*t,0),_=new I(Math.cos(f)*.8,.6,Math.sin(f)*.8).normalize(),m=new mi(.025,.05,d,5);o.push(Go(m,g.clone().addScaledVector(_,d/2),new xi().setFromUnitVectors(vh,_))),hc(g.clone().addScaledVector(_,d),.28+(1-u)*.2,e,l)}return hc(new I(i,t+.05,0),.26,e,l),r.add(go(o,nr(Es.trunk)),go(l,nr(Es.leaf))),r}function _o(n){const e=ct(n),t=new zt,i=4+Math.floor(e()*2),r=new mi(.1,.16,1.2,7);r.translate(0,.6,0);const s=[];for(let a=0;a<i;a++){const o=a/(i-1),l=1.05-.62*o,c=1.25-.3*o,h=.9+o*2.3,u=new Ds(l,c,10,1,!0),f=u.attributes.position;for(let d=0;d<f.count;d++){if(f.getY(d)>-c/2+.01)continue;const g=Math.atan2(f.getZ(d),f.getX(d)),_=Math.round(g/(Math.PI*2/10))%2===0,m=_?1.08:.8;f.setXYZ(d,f.getX(d)*m,f.getY(d)+(_?-.14:.06),f.getZ(d)*m)}u.computeVertexNormals(),s.push(Go(u,xh.set(0,h+c/2,0),Vo.setFromAxisAngle(vh,e()*6)))}return t.add(new _t(r,nr(Es.trunk)),go(s,nr(Es.fir,{side:Rt}))),t}function Xn(n,e){const t=ct(n);let i=new vi(.6,14,10);i.deleteAttribute("uv"),i.deleteAttribute("normal"),i=ev(i);const r=i.attributes.position;for(let a=0;a<r.count;a++){let o=r.getY(a);o<0&&(o*=.35);const l=1+(t()-.5)*.14;r.setXYZ(a,r.getX(a)*1.15*l,(o+.2)*1.3*l,r.getZ(a)*l)}i.computeVertexNormals();const s=new _t(i,nr("#d8c6a2"));return s.scale.setScalar(e),s.rotation.y=t()*6.28,s}const uc={night:{g:["#1b2152","#2d3478","#51479a"],cloud:"#3d3f86",cloudShade:"#34367a",cloudInk:"#8d86d8",stars:90,moon:!0},deep:{g:["#0d1233","#152050","#1f2f68"],cloud:null,stars:30},dusk:{g:["#3a3c8c","#9a6fb6","#f2a88a"],cloud:"#c98bb8",cloudShade:"#b77aa8",cloudInk:"#6d5aa8",stars:18},day:{g:["#7fb2e8","#a9cdef","#f3dcb4"],cloud:"#f6eef8",cloudShade:"#e2d6ee",cloudInk:"#7a78b8",stars:0},storm:{g:["#3c3f5e","#5a5d80","#7c7f9a"],cloud:"#6b6d8c",cloudShade:"#585a78",cloudInk:"#2e3050",stars:0}};function sv(n,e=1024,t=640){const i=uc[n]||uc.night,[r,s]=Et(e,t),a=ct(61),o=ct(62+n.length),l=s.createLinearGradient(0,0,0,t);l.addColorStop(0,i.g[0]),l.addColorStop(.55,i.g[1]),l.addColorStop(1,i.g[2]),s.fillStyle=l,s.fillRect(0,0,e,t);for(let c=0;c<i.stars;c++){const h=o()*e,u=o()*t*.8,f=o()<.15;if(s.fillStyle=f?"#fff6c8":"rgba(255,248,220,.8)",f){const d=[];for(let g=0;g<8;g++){const _=g*Math.PI/4,m=g%2?2:6.5;d.push([h+Math.cos(_)*m,u+Math.sin(_)*m])}Mt(s,d,"#fff6c8")}else s.beginPath(),s.arc(h,u,1+o()*1.4,0,7),s.fill()}if(i.moon){const c=e*.82,h=t*.18,u=vt(c,h,38,38,a,{n:40,lump:.02});Mt(s,u,"#fff3c4"),Mt(s,vt(c+18,h-10,34,34,ct(3),{n:40,lump:.02}),i.g[0]),st(s,u.slice(8,34),a,{w:2.4,color:"#d9c88a"})}if(i.cloud)for(let c=0;c<6;c++){const h=o()*e,u=60+o()*(t-160),f=60+o()*90,d=f*.32,g=3+Math.floor(o()*3),_=Xg(h,u,f,d,g);Mt(s,_,i.cloud),gh(s,_,()=>Mt(s,vt(h,u+d*.55,f*1.1,d*.45,a),i.cloudShade)),st(s,_,a,{w:2.6,closed:!0,color:i.cloudInk})}return r}const yh={camp:{base:"#4f7a6e",light:"#5b8878",dark:"#45695f",tick:"#3d6056",wall:["#7a5a48","#5f4538"]},hill:{base:"#9dd190",light:"#a9d99b",dark:"#93c886",tick:"#78b66f",wall:["#c28c5a","#a8754a"]},hillNight:{base:"#4d7466",light:"#588274",dark:"#43675b",tick:"#3a5c51",wall:["#7a5a48","#5f4538"]},desert:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"]},stone:{base:"#e4e0f0",light:"#ece8f6",dark:"#d6d0e8",tick:"#b0a8cc",wall:["#c9c3e0","#a79fc6"],slabs:!0},sea:{base:"#78c4dc",light:"#8ccfe4",dark:"#61b4d2",tick:"#e9f7fb",wall:["#4f9fc0","#3d86a6"],water:!0},storm:{base:"#5a8fa8",light:"#6a9db4",dark:"#4c7f98",tick:"#d8e8f0",wall:["#3f7390","#2f5c78"],water:!0},seabed:{base:"#27466e",light:"#2f5280",dark:"#213c60",tick:"#3f6a94",wall:["#1d3456","#162a48"]},beach:{base:"#ecd7a6",light:"#f3e2b8",dark:"#e0c893",tick:"#cdb18a",wall:["#d6a76a","#b98a55"],shore:!0}};function Mh(n,e=16,t=40,i=1){const r=yh[n],[s,a]=Et(e*t,e*t),o=ct(11+i),l=ct(12+i),c=s.width;a.fillStyle=r.base,a.fillRect(0,0,c,c);for(let h=0;h<40;h++)Mt(a,vt(o()*c,o()*c,(1+o()*2.4)*t,(.6+o()*1.2)*t,o,{lump:.22}),o()<.5?r.light:r.dark);if(r.slabs){for(let h=t*.5;h<c;h+=t*1.6)st(a,[[0,h],[c,h+(o()-.5)*8]],l,{w:2.6,color:"#8b80ad"});for(let h=t*.5,u=0;h<c;h+=t*1.6,u++)for(let f=u%2*t;f<c;f+=t*2.2)st(a,[[f,h],[f+(o()-.5)*6,h+t*1.6]],l,{w:2.2,color:"#8b80ad"})}else if(r.water)for(let h=0;h<70;h++){const u=o()*c,f=o()*c;st(a,[[u-12,f+3],[u-4,f-4],[u+4,f+2],[u+12,f-4]],l,{w:2.6,color:r.tick,amp:0})}else for(let h=0;h<700;h++){const u=o()*c,f=o()*c,d=.15*t,g=-1.15+(o()-.5)*.4;st(a,[[u,f],[u+Math.cos(g)*d,f+Math.sin(g)*d]],l,{w:2,color:r.tick,amp:0})}if(r.shore){const h=[];for(let f=0;f<=c;f+=12)h.push([f,c*.42+Math.sin(f*.02)*18+o()*4]);const u=[[0,0],[c,0],...h.slice().reverse()];Mt(a,u,"#78c4dc"),gh(a,u,()=>{for(let f=0;f<40;f++){const d=o()*c,g=o()*c*.4;st(a,[[d-10,g+2],[d-3,g-3],[d+3,g+1],[d+10,g-3]],l,{w:2.4,color:"#e9f7fb",amp:0})}}),st(a,h.map(([f,d])=>[f,d+6]),l,{w:7,color:"#f3f6ea"}),st(a,h,l,{w:3,color:"#3d86a6"})}return s}function av(n,e=80){const t=yh[n],i=8*e,r=256,[s,a]=Et(i,r),o=ct(41),l=ct(42);a.fillStyle=t.wall[0],a.fillRect(0,0,i,r),a.fillStyle=t.wall[1],a.fillRect(0,r*.7,i,r);for(let h=0;h<40;h++){const u=o()*i,f=30+o()*(r-48);st(a,[[u,f],[u+20+o()*40,f+(o()-.5)*6]],l,{w:2.2,color:t.wall[1],amp:1})}const c=[[0,0],[i,0]];for(let h=i;h>=0;h-=12)c.push([h,12+7*Math.abs(Math.sin(h*.13))+o()*3]);return Mt(a,c,t.dark),st(a,c.slice(2),l,{w:3.4,amp:.6}),st(a,[[0,r-3],[i,r-3]],l,{w:5,amp:1}),s}function ov(n="255,170,90"){const[e,t]=Et(128,128),i=t.createRadialGradient(64,64,2,64,64,62);return i.addColorStop(0,`rgba(${n},.75)`),i.addColorStop(.5,`rgba(${n},.3)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.fillRect(0,0,128,128),e}function fc(n,e="dots"){const[t,i]=Et(120,110),r=ct(90+n*7),s=vt(60,44,46,32,ct(5),{n:30,lump:.05});if(e==="think")for(const[a,o,l]of[[34,88,7],[22,100,4.5]]){const c=vt(a,o,l,l,r,{n:12});Mt(i,c,"#fff8ea"),st(i,c,r,{w:2.4,closed:!0,amp:.3})}else{const a=[[42,66],[32,96],[64,70]];Mt(i,a,"#fff8ea"),st(i,a,r,{w:3,amp:.4})}if(Mt(i,s,"#fff8ea"),st(i,s,r,{w:3.4,closed:!0,amp:.6}),i.fillStyle=fn,e==="think")i.font="bold 44px sans-serif",i.textAlign="center",i.fillText("?",60,60);else for(const a of[-18,0,18])i.beginPath(),i.arc(60+a,46,5,0,7),i.fill();return t}function lv(n,e="#ffd24a"){const[t,i]=Et(64,64),r=ct(20+n),s=[];for(let a=0;a<8;a++){const o=-Math.PI/2+a*Math.PI/4,l=a%2?9:26;s.push([32+Math.cos(o)*l,32+Math.sin(o)*l])}return Mt(i,s,e),st(i,s,r,{w:2.6,closed:!0,amp:.4}),t}function cv(n,e=!0){const[t,i]=Et(160,160),r=ct(n.length*13+5);ct(n.length*7);const s=vt(80,80,70,70,r,{n:50,lump:.03});Mt(i,s,e?"#f6f0e3":"#9aa0c8");const a=(c,h,u=3.2)=>{Mt(i,c,h),st(i,c,r,{w:u,closed:!0,amp:.5})},o=(c,h=fn,u=3)=>st(i,c,r,{w:u,color:h,amp:.4}),l=(c,h,u,f,d)=>{const g=[];for(let _=0;_<10;_++){const m=-Math.PI/2+_*Math.PI/5,p=_%2?f:u;g.push([c+Math.cos(m)*p,h+Math.sin(m)*p])}a(g,d)};switch(n){case"tree":o([[80,120],[80,80]],"#8a5d33",9),o([[80,120],[80,80]],fn,3),a(vt(80,66,34,26,r),"#83c47b"),a(vt(62,80,18,14,r),"#5c9d5f"),a(vt(98,80,18,14,r),"#5c9d5f"),a(vt(70,60,5,5,r,{n:10}),"#e2475d",2),a(vt(92,68,5,5,r,{n:10}),"#e2475d",2);break;case"ark":a([[30,92],[130,92],[114,118],[46,118]],"#c98a4d"),a([[56,70],[104,70],[104,92],[56,92]],"#e2a574"),a([[50,72],[80,54],[110,72]],"#b77c45"),o([[24,128],[40,122],[56,128],[72,122],[88,128],[104,122],[120,128],[136,122]],"#3d86a6",4);break;case"star":l(80,78,42,18,"#f5cf5f"),a(vt(116,42,9,9,r,{n:12}),"#fff3c4",2);break;case"well":a([[44,88],[116,88],[112,124],[48,124]],"#c9c3e0"),o([[46,104],[114,104]],"#7a6d98",2.4),o([[80,88],[80,124]],"#7a6d98",2.4),o([[50,88],[50,46]],fn,5),o([[110,88],[110,46]],fn,5),a([[40,50],[80,28],[120,50]],"#e8584e"),o([[80,50],[80,80]],fn,2),a([[72,78],[88,78],[86,90],[74,90]],"#c98a4d",2.4);break;case"waves":a([[20,120],[60,60],[66,120]],"#78c4dc"),a([[140,120],[100,60],[94,120]],"#78c4dc"),a([[66,120],[94,120],[90,128],[70,128]],"#ecd7a6",2.4),o([[40,90],[48,82]],"#e9f7fb"),o([[118,90],[110,82]],"#e9f7fb");break;case"whale":a(vt(76,90,48,28,r),"#6f9fd8"),a([[118,86],[140,66],[136,86],[146,100]],"#6f9fd8"),a(vt(76,100,36,12,r),"#c9ddf3",2.4),a(vt(56,84,4,4,r,{n:10}),fn,1),o([[70,60],[66,44]],"#78c4dc",3),o([[74,60],[82,44]],"#78c4dc",3),o([[20,128],[40,122],[60,128],[80,122],[100,128],[120,122],[140,128]],"#3d86a6",4);break;case"palm":o([[82,128],[76,96],[80,62]],"#c4814f",10),o([[82,128],[76,96],[80,62]],fn,3);for(const c of[-2.6,-2,-1.2,-.5])a([[80,60],[80+Math.cos(c)*44,60+Math.sin(c)*26+18],[80+Math.cos(c)*20,60+Math.sin(c)*10+10]],"#83c47b",2.6);a(vt(72,70,6,6,r,{n:10}),"#a8754a",2),a(vt(86,72,6,6,r,{n:10}),"#a8754a",2);break;case"book":a([[34,66],[80,76],[80,122],[34,112]],"#fff8ea"),a([[126,66],[80,76],[80,122],[126,112]],"#fff8ea"),a([[34,112],[80,122],[126,112],[126,118],[80,128],[34,118]],"#5c9d5f",2.4);for(let c=0;c<3;c++)o([[42,82+c*10],[72,88+c*10]],"#b58d5b",2),o([[88,88+c*10],[118,82+c*10]],"#b58d5b",2);l(80,44,12,5,"#f5cf5f");break;case"moon":a([[20,120],[60,92],[100,104],[140,84],[140,130],[20,130]],"#ecd7a6"),i.setLineDash([4,8]),o([[30,118],[60,104],[96,112],[130,96]],"#b58d5b",3),i.setLineDash([]);{const c=vt(96,50,24,24,r,{n:30,lump:.02});Mt(i,c,"#fff3c4"),Mt(i,vt(108,42,22,22,ct(4),{n:30,lump:.02}),e?"#f6f0e3":"#9aa0c8")}break}return st(i,s,r,{w:4.5,closed:!0,amp:.6}),t}const Jn=Math.PI*2,ue={box:(n,e,t)=>new yi(n,e,t),cyl:(n,e,t,i=10,r=!1)=>new mi(n,e,t,i,1,r),sph:(n,e=12,t=9)=>new vi(n,e,t),hemi:(n,e=14)=>new vi(n,e,8,0,Jn,0,Math.PI/2),cone:(n,e,t=8)=>new Ds(n,e,t),tor:(n,e,t=Jn,i=16)=>new Bo(n,e,8,i,t),oct:n=>new ko(n),ico:(n,e=0)=>new Fo(n,e),plane:(n,e)=>new Ln(n,e),lathe:(n,e=16)=>new Uo(n.map(([t,i])=>new _e(t,i)),e),tube:(n,e,t=40)=>new zo(new sh(n.map(i=>new I(...i))),t,e,8),extrude:(n,e)=>{const t=new No(new Ns(n.map(([i,r])=>new _e(i,r))),{depth:e,bevelEnabled:!1});return t.translate(0,0,-e/2),t}},hv=n=>typeof n=="number"?[n,n,n]:n,uv=(()=>{const n=new rh(new Uint8Array([205,255]),2,1,Cs);return n.minFilter=n.magFilter=Ct,n.needsUpdate=!0,n})();function he(n,e,{p:t=[0,0,0],r:i=[0,0,0],s:r=1,map:s,side:a,glow:o,basic:l,soft:c}={}){const h={};c&&(h.gradientMap=uv),s&&(h.map=s),a&&(h.side=a),o&&(h.emissive=o,h.emissiveIntensity=.55);const u=l?new qt({color:e,map:s,side:a}):nr(e,h),f=new _t(n,u);return f.position.set(...t),f.rotation.set(...i),f.scale.set(...hv(r)),f}function tt(...n){const e=new zt;return e.add(...n.flat().filter(Boolean)),e}const $t=(n,e)=>Array.from({length:n},(t,i)=>e(i/n*Jn,i)),ya=new Map,cn=(n,e)=>(ya.has(n)||ya.set(n,Cn(e(),!0)),ya.get(n)),Sh={chevrons:()=>cn("chev",()=>{const[n,e]=Et(256,256),t=ct(5);e.fillStyle="#c7c0e6",e.fillRect(0,0,256,256);for(let i=-40;i<300;i+=64){const r=[[30,i+40],[128,i],[226,i+40],[226,i+64],[128,i+24],[30,i+64]];Mt(e,r,"#8f84c2"),st(e,r,t,{w:3,closed:!0,color:"#4b3f7a"})}return n}),stripes:(n="#5aa0e6",e="#ffd24a")=>cn("str"+n+e,()=>{const[t,i]=Et(256,256),r=ct(6);for(let s=0;s<8;s++)i.fillStyle=s%2?n:e,i.fillRect(s*32,0,32,256);for(let s=1;s<8;s++)st(i,[[s*32,0],[s*32,256]],r,{w:2.5});return t}),swirl:()=>cn("swirl",()=>{const[n,e]=Et(256,256),t=ct(7);e.fillStyle="#d24cf0",e.fillRect(0,0,256,256);const i=[];for(let r=0;r<22;r+=.25)i.push([128+Math.cos(r)*r*5.2,128+Math.sin(r)*r*5.2]);return st(e,i,t,{w:9,color:"#f3a6ff",amp:1}),n}),arrow:()=>cn("arrow",()=>{const[n,e]=Et(256,128),t=ct(8);e.fillStyle="#e8c58f",e.fillRect(0,0,256,128);const i=[[40,52],[160,52],[160,30],[215,64],[160,98],[160,76],[40,76]];Mt(e,i,"#e8584e"),st(e,i,t,{w:3.5,closed:!0});for(let r=0;r<3;r++)st(e,[[10,20+r*40],[60,22+r*40]],t,{w:1.6,color:"#b58d5b"});return n}),rings:()=>cn("rings",()=>{const[n,e]=Et(128,128),t=ct(9);e.fillStyle="#f1c792",e.fillRect(0,0,128,128);for(const i of[14,28,42,56])st(e,vt(64,64,i,i,t,{n:28,lump:.05}),t,{w:2.2,closed:!0,color:"#b07a45"});return n}),bricks:(n,e,t)=>cn("br"+n,()=>{const[i,r]=Et(512,256),s=ct(91),a=ct(92);r.fillStyle=e,r.fillRect(0,0,512,256);for(let o=0,l=0;l<256;o++,l+=42)for(let c=o%2?0:-40;c<512;c+=96+a()*10){const h=[[c+4,l+4],[c+90,l+4],[c+90,l+39],[c+4,l+39]];Mt(r,h,a()<.35?n:e),st(r,h,s,{w:2,closed:!0,color:t,amp:.6})}return i}),strata:(n,e,t)=>cn("strata"+n,()=>{const[i,r]=Et(256,256),s=ct(33),a=ct(34);for(let o=0;o<256;o+=32)r.fillStyle=o/32%2?n:e,r.fillRect(0,o,256,32);for(let o=32;o<256;o+=32)st(r,[[0,o+(a()-.5)*6],[256,o+(a()-.5)*6]],s,{w:2.4,color:t,amp:2});for(let o=0;o<14;o++){const l=a()*256,c=a()*256;st(r,[[l,c],[l+4,c+18]],s,{w:2,color:t,amp:0})}return i}),star:(n,e)=>cn("star"+n+e,()=>{const[t,i]=Et(256,256),r=ct(10);i.fillStyle=n,i.fillRect(0,0,256,256);const s=[];for(let a=0;a<10;a++){const o=-Math.PI/2+a*Math.PI/5,l=a%2?40:90;s.push([128+Math.cos(o)*l,134+Math.sin(o)*l])}return Mt(i,s,e),st(i,s,r,{w:5,closed:!0}),t}),corrugated:(n,e)=>cn("corr"+n,()=>{const[t,i]=Et(256,128),r=ct(12);i.fillStyle=n,i.fillRect(0,0,256,128);for(let s=8;s<256;s+=16)st(i,[[s,0],[s,128]],r,{w:2,color:e,amp:.4});return t}),dots:(n,e)=>cn("dots"+n,()=>{const[t,i]=Et(128,128),r=ct(13);i.fillStyle=n,i.fillRect(0,0,128,128);for(let s=0;s<9;s++)i.fillStyle=e,i.beginPath(),i.arc(r()*128,r()*128,6+r()*6,0,Jn),i.fill();return t})},fv=Rt;function pr(n=.5,e=.22,t=.14,i="#f5cf5f",r=5){const s=[];for(let o=0;o<r*2;o++){const l=Math.PI/2+o*Math.PI/r,c=o%2?e:n;s.push([Math.cos(l)*c,Math.sin(l)*c])}const a=tt(he(ue.extrude(s,t),i,{basic:!0}));return a.userData.spinY=.6,a}function Ma(n=.9,e="#fff3c4"){const t=[],s=.8*n,a=.4*n;for(let o=0;o<=28;o++){const l=.863+o/28*(Jn-1.726);t.push([Math.cos(l)*n,Math.sin(l)*n])}for(let o=0;o<=24;o++){const l=Jn-1.25-o/24*(Jn-2.5);t.push([a+Math.cos(l)*s,Math.sin(l)*s])}return tt(he(ue.extrude(t,.18),e,{basic:!0,r:[0,0,.5]}))}function mr(n=.8){return tt(he(ue.sph(n,18,12),"#ffd24a",{basic:!0}),$t(10,e=>he(ue.cone(.14,.42,4),"#ffb84a",{basic:!0,p:[Math.cos(e)*(n+.28),Math.sin(e)*(n+.28),0],r:[0,0,e-Math.PI/2]})))}function ki(n=1,e="#f6eef8"){return tt(he(ue.sph(.7),e,{soft:!0,s:[1.3*n,.7*n,.8*n]}),he(ue.sph(.55),e,{soft:!0,p:[-.8*n,-.1*n,0],s:[n,.65*n,.7*n]}),he(ue.sph(.5),e,{soft:!0,p:[.85*n,-.12*n,0],s:[n,.6*n,.7*n]}),he(ue.sph(.45),e,{soft:!0,p:[.2*n,.4*n,0],s:[n,.8*n,.7*n]}))}function Oi(n=3,e=2,t="#a9b98a",i=!1){const r=ue.cone(e,n,9);r.translate(0,n/2,0);const s=r.attributes.position;for(let a=0;a<s.count;a++)if(s.getY(a)>.05&&s.getY(a)<n-.05){const o=1+Math.sin(a*1.7)*.08;s.setXYZ(a,s.getX(a)*o,s.getY(a),s.getZ(a)*o)}return r.computeVertexNormals(),tt(he(r,t),i?he(ue.cone(e*.3,n*.3,9),"#f6f0e3",{p:[0,n*.86,0]}):null)}function gr(n,e="#e8cf95"){return tt(he(ue.sph(1,14,8),e,{s:[n,n*.28,n*.6]}))}function vr(n=0,e=2.6){const t=[];for(let a=0;a<6;a++)t.push(he(ue.cyl(.11,.13,e/6+.02,7),"#c4814f",{p:[Math.sin(a*.5+n)*.08*a,e/12+a*e/6,0]}));const i=[Math.sin(2.5+n)*.4,e],r=$t(6,(a,o)=>{const l=new zt;l.position.set(i[0],i[1],0),l.rotation.y=a+n;const c=he(ue.sph(1,10,6,0),"#83c47b",{s:[.95,.1,.26],p:[.8,-.18,0],r:[0,0,-.35-o%2*.15]});return l.add(c),l}),s=he(ue.sph(.14,8,6),"#a8754a",{p:[i[0],e-.2,.1]});return tt(t,r,s)}function Sa(n=0){return tt(he(ue.cyl(.12,.18,1.1,7),"#c4814f",{p:[0,.55,0]}),he(ue.sph(.7),"#9fb27a",{p:[0,1.4,0],s:[1,.75,1]}),he(ue.sph(.5),"#8fa66a",{p:[-.5,1.2,.2],s:[1,.75,1]}),he(ue.sph(.5),"#8fa66a",{p:[.5,1.25,-.1+n*.01],s:[1,.75,1]}))}function bh(n="#f0b3d6"){return tt(he(ue.cyl(.02,.02,.35,5),"#5c9d5f",{p:[0,.17,0]}),$t(5,e=>he(ue.sph(.07,6,5),n,{p:[Math.cos(e)*.08,.36,Math.sin(e)*.08],s:[1,.5,1]})),he(ue.sph(.05,6,5),"#f5c84c",{p:[0,.38,0]}))}function Wi(n=1.4,e=1.2,t=1.1,i="#f4ead3",r=!1,s=!1){return tt(he(ue.box(n,t,e),i,{p:[0,t/2,0]}),he(ue.box(n+.12,.1,e+.12),"#dcc9a3",{p:[0,t+.05,0]}),s?he(ue.hemi(Math.min(n,e)*.38),"#f6f0e3",{p:[0,t+.1,0]}):null,he(ue.box(.34,.6,.05),"#b77c45",{p:[-n*.2,.3,e/2+.01]}),he(ue.box(.3,.3,.05),r?"#ffd78a":"#9fc8e8",{basic:r,p:[n*.22,t*.6,e/2+.01]}))}function wh(){const n=ue.extrude([[-1.1,0],[1.1,0],[0,1.5]],2);return tt(he(n,"#ffffff",{map:Sh.stripes("#e8a07a","#f3dcb4"),p:[0,0,0]}),he(ue.box(.5,.9,.05),"#6b3e2a",{p:[0,.45,1.01]}))}function Ir(n=1.6,e=.18){return tt(he(ue.cyl(e,e,n,9),"#b77c45",{r:[0,0,Math.PI/2],p:[0,e,0]}),he(ue.cyl(e*.8,e*.8,.02,9),"#f1c792",{r:[0,0,Math.PI/2],p:[n/2+.01,e,0]}))}function Ts(n="#e3cf9f"){return tt(he(ue.sph(.32,10,8),n,{s:[1,1.1,.9],p:[0,.3,0]}),he(ue.cyl(.06,.12,.16,7),n,{p:[0,.68,0]}),he(ue.tor(.08,.025),"#b77c45",{r:[Math.PI/2,0,0],p:[0,.62,0]}))}function dc(n=.6){return tt(he(ue.box(n,n,n),"#c98f55",{p:[0,n/2,0]}),he(ue.box(n*1.02,n*.18,n*1.02),"#dba46a",{p:[0,n*.8,0]}))}function pc(n=2.4,e="#e9c98a"){const t=ue.cone(n,n*.9,4);return t.translate(0,n*.45,0),tt(he(t,e,{r:[0,Math.PI/4,0]}))}function dv(n=2.4,e="#e4e0f0"){return tt(he(ue.box(.6,.2,.6),e,{p:[0,.1,0]}),he(ue.cyl(.2,.22,n-.4,10),e,{p:[0,n/2,0]}),he(ue.box(.6,.2,.6),e,{p:[0,n-.1,0]}))}function mc(n=1.2,e="#b3aec6"){return tt(he(ue.box(.6*n,.2*n,.5*n),"#8f89a8",{p:[0,.1*n,0]}),he(ue.cyl(.24*n,.3*n,.6*n,6),e,{p:[0,.5*n,0]}),he(ue.oct(.24*n),e,{p:[0,.98*n,0],s:[1,1.1,1]}))}function pv(n=0,e="#b3aec6"){return tt($t(4,(t,i)=>he(i%2?ue.oct(.14):ue.box(.22,.14,.18),e,{p:[Math.cos(t+n)*.28,.08,Math.sin(t+n)*.22],r:[n+i,i*.7,.3*i]})))}function mv(){return tt(he(ue.cyl(.75,.8,.7,16,!0),"#ffffff",{map:Sh.bricks("#d3cde9","#c2bbdc","#7a6d98"),side:fv,p:[0,.35,0]}),he(ue.tor(.77,.07,Jn,20),"#c9c3e0",{r:[Math.PI/2,0,0],p:[0,.7,0]}),he(ue.cyl(.72,.72,.02,16),"#1d2350",{basic:!0,p:[0,.4,0]}),he(ue.cyl(.06,.06,1.3,6),"#b77c45",{p:[-.72,1.05,0]}),he(ue.cyl(.06,.06,1.3,6),"#b77c45",{p:[.72,1.05,0]}),he(ue.cyl(.05,.05,1.6,6),"#c98a4d",{r:[0,0,Math.PI/2],p:[0,1.5,0]}),he(ue.extrude([[-1,0],[1,0],[0,.55]],.9),"#e8584e",{p:[0,1.66,0]}))}function gv(){return tt(he(ue.cyl(.14,.11,.22,10),"#c98a4d",{p:[0,.11,0]}),he(ue.tor(.12,.015,Math.PI),"#6b3e2a",{p:[0,.22,0]}))}function vv(n=1){return tt(he(ue.cyl(.015,.015,n,4),"#f1c792",{p:[0,-n/2,0]}))}function si(n="#d8a86a",e=!1){const t=r=>he(ue.cyl(.07,.06,.8,6),n,{p:[r,.4,0]}),i=tt(he(ue.sph(.5,12,9),n,{s:[1.3,.7,.7],p:[0,1,0]}),he(ue.sph(.3,10,8),n,{p:[.05,1.38,0]}),he(ue.cyl(.12,.15,.7,7),n,{p:[.7,1.3,0],r:[0,0,-.6]}),he(ue.sph(.18,10,8),n,{s:[1.5,.9,.9],p:[.98,1.62,0]}),he(ue.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,.13]}),he(ue.sph(.035,6,5),"#2a1a10",{basic:!0,p:[1.02,1.7,-.13]}),[t(.4),t(-.4)].flatMap(r=>{const s=r.clone();return s.position.z=.18,r.position.z=-.18,[r,s]}),e?[he(ue.box(.36,.3,.8),"#e8584e",{p:[-.3,1.34,0]}),Ts("#e3cf9f")]:he(ue.box(.5,.06,.62),"#e8584e",{p:[-.25,1.36,0]}));if(e){const r=i.children[i.children.length-1];r.position.set(.25,1.1,0),r.scale.setScalar(.7)}return i}function as(){return tt($t(6,n=>he(ue.sph(.2,8,6),"#f6f0e3",{soft:!0,p:[Math.cos(n)*.18,.46+Math.sin(n*2)*.04,Math.sin(n)*.14]})),he(ue.sph(.26,10,8),"#f6f0e3",{soft:!0,p:[0,.48,0]}),he(ue.sph(.13,8,6),"#5b4a4a",{p:[.32,.56,0],s:[1.2,1,.9]}),$t(4,(n,e)=>he(ue.cyl(.04,.04,.3,5),"#5b4a4a",{p:[e<2?.14:-.14,.15,e%2?.1:-.1]})))}function ba(n="#f5cf5f"){return tt(he(ue.sph(.16,10,8),n,{p:[0,.2,0],s:[1.2,1,1]}),he(ue.sph(.1,8,6),n,{p:[.16,.34,0]}),he(ue.cone(.04,.12,5),"#e8904a",{p:[.3,.33,0],r:[0,0,-Math.PI/2]}))}function gc(n="#6f9fd8",e="#c9ddf3"){const t=new zt;t.add(he(ue.cone(.4,1.2,8),n,{r:[0,0,Math.PI/2],p:[-.5,0,0],s:[1,1,.5]})),t.add(he(ue.sph(.45,10,6),n,{s:[.4,.2,1.2],p:[-1.1,.15,0],r:[0,0,.5]})),t.position.set(-1.8,.1,0),t.name="tail";const i=tt(he(ue.sph(1,20,14),n,{s:[2,1.05,1.1]}),he(ue.sph(.95,16,10),e,{s:[1.8,.5,.95],p:[.1,-.55,0]}),he(ue.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,.62]}),he(ue.sph(.12,8,6),"#2a1a10",{basic:!0,p:[1.35,.15,-.62]}),he(ue.sph(.35,8,6),n,{s:[1,.2,.6],p:[.3,-.5,.95],r:[.6,0,0]}),t);return i.userData.tail=t,i}function xo(n,e,t){const i=[[-n/2-.25,e],[-n/2+.35,0],[n/2-.35,0],[n/2+.3,e]];return ue.extrude(i,t)}function _v(n=2.6,e="#f6f0e3"){return tt(he(xo(n,.55,.9),"#c98a4d"),he(ue.box(n*.95,.06,.92),"#8a5d33",{p:[0,.56,0]}),he(ue.cyl(.05,.05,2.1,6),"#8a5d33",{p:[0,1.6,0]}),he(ue.box(.06,1.3,1.2),e,{soft:!0,p:[.05,1.75,0],r:[0,Math.PI/2,0],s:[1,1,1]}),he(ue.box(.26,.26,.26),"#dba46a",{p:[-.8,.72,.15]}),he(ue.box(.26,.26,.26),"#dba46a",{p:[.75,.72,-.1]}),Ts("#e3cf9f").translateX(-.4).translateY(.5))}function os(n=!0){return n?tt(he(xo(4.2,1.1,1.7),"#c98a4d"),he(ue.box(4.2,.08,1.72),"#8a5d33",{p:[0,.8,0]}),he(ue.box(2.2,.9,1.3),"#e2a574",{p:[0,1.55,0]}),he(ue.extrude([[-1.25,0],[1.25,0],[0,.6]],1.4),"#b77c45",{p:[0,2,0]}),$t(3,(e,t)=>he(ue.box(.26,.26,.05),"#ffd78a",{basic:!0,p:[-.7+t*.7,1.6,.66]}))):tt(he(xo(4,.55,1.6),"#c98a4d"),$t(7,(e,t)=>he(ue.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,.78]})),$t(7,(e,t)=>he(ue.box(.12,.9,.12),"#b77c45",{p:[-1.6+t*.53,.95,-.78]})),he(ue.box(3.4,.1,.1),"#b77c45",{p:[0,1.4,.78]}))}function ls(n=1,e="#61b4d2"){return tt(he(ue.sph(.6,12,8),e,{s:[1.4*n,.55*n,.7*n],p:[0,.05*n,0]}),he(ue.sph(.22,8,6),"#f3f6ea",{soft:!0,s:[1.6*n,.5*n,.9*n],p:[.2*n,.34*n,0]}))}function xv(){const n=$t(9,(e,t)=>he(ue.sph(.5,10,6),t%2?"#5c9d5f":"#83c47b",{s:[1,.12,.8],p:[Math.cos(e)*(.5+t%3*.25),1.05+t%3*.12,Math.sin(e)*.5],r:[.2*Math.sin(e),e,.2]}));return tt(he(ue.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[-.6,.55,0]}),he(ue.cyl(.05,.07,1.1,6),"#7a9c4a",{p:[.6,.55,.2]}),he(ue.box(1.4,.05,.05),"#7a9c4a",{p:[0,1.05,.1]}),n,he(ue.sph(.16,8,6),"#d8e07a",{s:[1,1.4,1],p:[.3,.75,.3]}),he(ue.sph(.14,8,6),"#d8e07a",{s:[1,1.4,1],p:[-.3,.8,-.2]}))}function yv(n=2){return tt(he(ue.tube([[0,0,0],[.15,n*.3,0],[-.12,n*.65,0],[.1,n,0]],.06,16),"#4f9a7a"))}function yr(n=1,e=!1){const t=e?["#bfe8f5","#e9f7fb","#9fd8c8"]:["#f07a3a","#ffb84a","#ffe38a"],i=tt($t(5,(r,s)=>he(ue.cone(.28*n,.9*n,7),t[0],{basic:!0,p:[Math.cos(r)*.28*n,.45*n,Math.sin(r)*.28*n],s:[1,.8+s%3*.25,1]})),he(ue.cone(.4*n,1.4*n,8),t[1],{basic:!0,p:[0,.7*n,0]}),he(ue.cone(.2*n,.8*n,7),t[2],{basic:!0,p:[0,.5*n,.18*n]}));return i.userData.flicker=!0,i}function Mv(){return tt($t(8,(n,e)=>{const t=Xn(40+e,.32);return t.position.set(Math.cos(n)*.72,0,Math.sin(n)*.72),t}),$t(3,n=>{const e=Ir(1.1,.1);return e.rotation.y=n,e}),yr(.75))}function vc(n=60,e=5,t=5){const i=new zt,r=new qt({color:"#cfe4f5",transparent:!0,opacity:.8}),s=new yi(.025,.35,.025);for(let a=0;a<n;a++){const o=new _t(s,r);o.userData.noInk=!0,o.position.set((Math.random()-.5)*e*2,Math.random()*t,(Math.random()-.5)*e*1.4),i.add(o)}return i.userData.rain=t,i}const Sv={"nuh-build":{ground:"hill",mood:{before:"day",after:"storm"},build(n){n(Oi(2.6,2.2,"#a9c98a"),-3.6,-3.4),n(Oi(2,1.8,"#b7d49a"),3.8,-3.6),n(vo(11),-4.6,.8,{s:[.8,1.2,.8]}),n(_o(12),4.6,.2,{s:[.8,1.2,.8]}),n(os(!1),0,-.6,{show:"before"});for(let t=0;t<4;t++)n(Ir(1.4,.09),2.6,2.2-t*.02,{y:t*.17,ry:.3,show:"before"});n(os(!0),0,-.8,{show:"after"}),[[as,-1.6,2.2],[as,-1,2.5],[si,1.4,2.6,.55],[si,2.4,2.9,.55],[ba,-2.6,1.6],[ba,-2.2,1.9]].forEach(([t,i,r,s=1],a)=>n(t(),i,r,{s,ry:.3,show:"after",delay:.15*a})),n(ki(1.4,"#8d8fa8"),-2,-3,{y:4.4,show:"after"}),n(ki(1.1,"#8d8fa8"),2.4,-2.6,{y:4.8,show:"after"}),n(mr(.6),3.4,-3,{y:4.6,show:"before"})}},"nuh-flood":{ground:{before:"storm",after:"sea"},mood:{before:"storm",after:"day"},build(n){n(os(!0),0,0,{y:.1,show:"before",rock:1});for(let e=0;e<9;e++)n(ls(1.6+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1,show:"before"});n(ki(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6,show:"before"}),n(ki(1.3,"#6b6d8c"),2.6,-2.2,{y:5,show:"before"}),n(vc(90,5,5),0,0,{show:"before"}),n(Oi(2.4,2.8,"#a9c98a"),0,-1.2,{show:"after"}),n(os(!0),0,-1.3,{y:2.2,s:.7,show:"after",rz:.06}),n(mr(.7),3.6,-3,{y:5,show:"after"});for(let e=0;e<4;e++)n(ls(.8,"#61b4d2"),-4+e*2.7,3,{bob:1,show:"after"});n(ba("#f6f0e3"),-2.8,1.5,{y:2.8,show:"after",bob:1})}},"ibrahim-sky":{ground:"hillNight",mood:{before:"night",after:"dusk"},build(n){n(Oi(2.2,1.8,"#6f9a86"),-3.4,-3.6),n(Oi(2.8,2.1,"#7aa892"),3,-3.8),n(Wi(1.3,1.1,1,"#d8cbb0",!0,!0),-1.6,-.6),n(Wi(1.1,1,.9,"#cbbfa6",!0),.2,-1.4),n(vr(1,2.2),2.2,.4),n(Sa(2),-3.6,1.2),n(pr(.5,.2),.6,-2.6,{y:4.2,show:"before",bob:1}),n(pr(.4,.16),-2.6,-2.4,{y:2.2,show:"after"}),n(Ma(.8),0,-2.8,{y:4.2,show:"after"}),n(mr(.75),2.8,-2.6,{y:2.6,show:"after"})}},"ibrahim-idols":{ground:"stone",mood:{before:"day",after:"day"},build(n){for(let e=0;e<5;e++)n(dv(2.8),-4+e*2,-3.4);n(mc(2.1),0,-1.4),[[-2.6,-.8],[-1.4,.4],[1.4,.4],[2.6,-.8]].forEach(([e,t],i)=>{n(mc(1.1),e,t,{show:"before"}),n(pv(i),e,t,{show:"after"})}),n(dc(.5),3.8,2),n(Ts(),-3.8,2)}},"ibrahim-fire":{ground:"desert",mood:{before:"dusk",after:"night"},build(n){n(gr(1.7),-3.8,-3.6),n(gr(1.9),3.6,-3.8);for(let e=0;e<10;e++)n(Ir(1.8,.14),Math.cos(e)*.8,Math.sin(e)*.6,{y:e%3*.16,ry:e*.63});n(yr(2.2),0,0,{y:.3,show:"before"}),n(yr(1.1),-1.3,.8,{show:"before"}),n(yr(1.2),1.3,.6,{show:"before"}),n(yr(2,!0),0,0,{y:.3,show:"after"});for(let e=0;e<12;e++){const t=e/12*Math.PI*2;n(bh(e%2?"#f0b3d6":"#fffdf6"),Math.cos(t)*2.4,Math.sin(t)*1.8,{s:1.6,show:"after",delay:e*.05})}}},"yusuf-dream":{ground:"hillNight",mood:{before:"night",after:"night"},build(n){n(Oi(2.4,1.9,"#6f9a86"),-3.6,-3.8),n(Wi(1.8,1.4,1.2,"#e2d4b6",!0),-.6,-.8),n(wh(),2.6,-1.2,{s:.7,ry:-.4}),n(Sa(1),-3.2,.8),n(Sa(2),3.6,1.4,{s:.8}),n(as(),1.2,2,{ry:.5}),n(as(),2,2.4,{ry:-.3});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(pr(.28,.12),-Math.cos(t)*4.2,-2.8,{y:3.2+Math.sin(t)*1.6,bow:1,bob:1})}n(mr(.6),-1.1,-3,{y:5.8,bow:1}),n(Ma(.55),1.1,-3,{y:5.8,bow:1})}},"yusuf-well":{ground:"desert",mood:{before:"day",after:"day"},build(n){n(gr(1.9),-3.6,-3.8),n(gr(1.7),3.6,-3.6),n(gr(1.2),4.3,1.8),n(mv(),0,-.4),n(Xn(3,.8),-2.8,1.4),n(Xn(4,.6),2.6,-1.6),n(vr(2,2.4),-3.8,-.6),n(gv(),0,-.4,{y:1,show:"after"}),n(vv(.45),0,-.4,{y:1.5,show:"after"}),n(si("#d8a86a",!0),2.4,1.4,{ry:Math.PI,s:.8,show:"after",delay:.1}),n(si("#c99a5e",!0),3.9,.4,{ry:Math.PI,s:.8,show:"after",delay:.3}),n(si("#e0b27a"),-2.2,2.4,{ry:.2,s:.8,show:"after",delay:.5}),n(dc(.45),1.2,2.6,{show:"after",delay:.6})}},"yusuf-egypt":{ground:"desert",mood:{before:"day",after:"dusk"},build(n){n(pc(2.2),-3.4,-3.6),n(pc(1.6),-1,-4.2),n(Wi(2.4,1.6,1.6,"#f4ead3",!1,!0),1.6,-1.8);for(let e=0;e<5;e++)n(Ts(),.2+e*.6,-.4+e%2*.3);n(vr(1,2.6),4,-.6),n(vr(3,2.2),-4,.8),n(si("#d8a86a",!0),-1.8,1.8,{ry:.3,s:.8}),n(si("#c99a5e",!0),-3,2.4,{ry:.3,s:.8,show:"after"});for(let e=0;e<11;e++){const t=Math.PI*(.1+e/10*.8);n(pr(.24,.1),-Math.cos(t)*4,-3,{y:3.8+Math.sin(t)*1.2,show:"after",delay:e*.06,bob:1})}n(mr(.5),-.9,-3.2,{y:5.8,show:"after"}),n(Ma(.5),.9,-3.2,{y:5.8,show:"after"})}},"yunus-ship":{ground:"storm",mood:{before:"storm",after:"storm"},build(n){n(_v(2.6),0,0,{y:.1,rock:1});for(let e=0;e<9;e++)n(ls(1.5+e%3*.4,"#4c7f98"),-4.5+e%5*2.2,-2.5+Math.floor(e/5)*4.6,{bob:1});n(ki(1.6,"#6b6d8c"),-2.4,-2.6,{y:4.6}),n(ki(1.3,"#6b6d8c"),2.6,-2.2,{y:5}),n(vc(80,5,5),0,0),n(gc("#7fa8e0","#d3e3f6"),-2.2,2.2,{y:.1,ry:.4,show:"after",bob:1})}},"yunus-whale":{ground:"seabed",mood:{before:"deep",after:"night"},build(n){n(gc("#6f9fd8","#c9ddf3"),0,-.4,{y:1.6,ry:.15,bob:1,swim:1});for(let e=0;e<8;e++)n(yv(1.4+e%3*.6),-4.4+e*1.25,-2.8+e%2*5,{sway:1});n(Xn(7,.9),-3.4,1.2),n(Xn(8,.7),3.2,2);for(let e=0;e<9;e++)n(pr(.18,.08,.06,"#fff3c4"),(e-4)*.5,-.4,{y:2.8+e*.35,show:"after",delay:e*.08,rise:1})}},"yunus-shore":{ground:"beach",mood:{before:"day",after:"dusk"},build(n){for(let e=0;e<4;e++)n(ls(.9,"#61b4d2"),-4+e*2.6,-3.4,{bob:1});n(Xn(5,.7),3.4,1.2),n(vr(4,2.2),4,-.4),n(xv(),-.4,.8,{s:1.4,show:"after"}),[[-3.8,2.4],[-2.6,2.9],[-3.4,3.6]].forEach(([e,t],i)=>n(Wi(1,.9,.8,"#f4ead3",!0,i===1),e,t,{show:"after",delay:.3+i*.15}))}}},bv="#4a2c1a",wv=`<defs><filter id="boil" x="-5%" y="-5%" width="110%" height="110%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1"/>
  <feDisplacementMap in="SourceGraphic" scale="3.5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`,cs=(n,e)=>`<path d="${n}" stroke-width="15"/><path d="${n}" stroke="${e}" stroke-width="8"/>`,hs=(n,e,t)=>`<circle cx="${n}" cy="${e}" r="7.5" fill="${t}" stroke-width="3.5"/>`;function Eh(n,e,t=1){const i=r=>`<ellipse cx="${n+(r+1)*t}" cy="${e+.5}" rx="${3.1*t}" ry="${4.3*t}" fill="#2a1a10" stroke="none"/>`;return`${i(-13)}${i(13)}
    <ellipse cx="${n-23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <ellipse cx="${n+23*t}" cy="${e+15*t}" rx="${7*t}" ry="${4*t}" fill="#f4a6b8" stroke="none" opacity=".85"/>
    <path d="M${n-7*t} ${e+17*t} Q${n} ${e+24*t} ${n+7*t} ${e+17*t}" stroke-width="3"/>`}function us({skin:n,top:e,legs:t,sleeve:i=e,feet:r="#f7efe0"}){return`
    <path d="M36 204 Q100 176 164 204 Q170 230 100 232 Q30 230 36 204 Z" fill="${t}"/>
    <ellipse cx="62" cy="224" rx="13" ry="7" fill="${r}"/>
    <ellipse cx="138" cy="224" rx="13" ry="7" fill="${r}"/>
    <path d="M60 136 Q100 120 140 136 L152 206 Q100 216 48 206 Z" fill="${e}"/>
    <g class="poseA">${cs("M64 144 Q56 176 86 194",i)}${cs("M136 144 Q144 176 114 194",i)}${hs(90,195,n)}${hs(110,195,n)}</g>
    <g class="poseB">${cs("M64 144 Q56 176 86 194",i)}${hs(90,195,n)}${cs("M136 144 Q160 132 164 104",i)}
      <path d="M164 104 L162 88 M164 104 L172 92 M164 104 L154 94"/>${hs(164,104,n)}</g>`}function _c({skin:n,scarf:e,scarfDark:t,cy:i=86}){return`
    <path d="M56 128 Q100 150 144 128 L150 150 Q100 170 50 150 Z" fill="${e}"/>
    <path d="M50 ${i+6} Q46 ${i-52} 100 ${i-54} Q154 ${i-52} 150 ${i+6} Q152 ${i+44} 124 ${i+54} L76 ${i+54} Q48 ${i+44} 50 ${i+6} Z" fill="${e}"/>
    <path d="M66 ${i-30} Q100 ${i-46} 134 ${i-30}" stroke="${t}" stroke-width="3"/>
    <ellipse cx="100" cy="${i+6}" rx="32" ry="36" fill="${n}"/>
    ${Eh(100,i+2)}`}function xc({skin:n,kufi:e,band:t,hair:i,beard:r,cy:s=86}){return`
    <circle cx="61" cy="${s+4}" r="9" fill="${n}"/><circle cx="139" cy="${s+4}" r="9" fill="${n}"/>
    <path d="M60 ${s} Q58 ${s-44} 100 ${s-46} Q142 ${s-44} 140 ${s} Q142 ${s+44} 100 ${s+46} Q58 ${s+44} 60 ${s} Z" fill="${n}"/>
    <path d="M62 ${s-14} Q62 ${s-32} 70 ${s-30} L130 ${s-30} Q138 ${s-32} 138 ${s-14} Q134 ${s-22} 128 ${s-22} L72 ${s-22} Q66 ${s-22} 62 ${s-14} Z" fill="${i}"/>
    ${r?`<path d="M64 ${s+8} Q66 ${s+50} 100 ${s+54} Q134 ${s+50} 136 ${s+8} Q126 ${s+30} 100 ${s+30} Q74 ${s+30} 64 ${s+8} Z" fill="${r}"/>`:""}
    <path d="M62 ${s-26} Q60 ${s-58} 100 ${s-60} Q140 ${s-58} 138 ${s-26} Z" fill="${e}"/>
    <path d="M62 ${s-30} L138 ${s-30}" stroke="${t}" stroke-width="7"/>
    <path d="M62 ${s-26} L138 ${s-26}"/>
    ${Eh(100,s+2)}`}function fs(n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="200" height="240">${wv}
  <g filter="url(#boil)" fill="none" stroke="${bv}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${n}</g></svg>`}const Gn={baba:fs(us({skin:"#c68a5e",top:"#e9e2cf",legs:"#b9b2a0",feet:"#8a5d33"})+xc({skin:"#c68a5e",kufi:"#ffffff",band:"#7fb7c9",hair:"#3b2a1e",beard:"#3b2a1e"})),mama:fs(us({skin:"#e0a878",top:"#8f7bd6",legs:"#6e5cb8",feet:"#f7efe0"})+_c({skin:"#e0a878",scarf:"#f0b3d6",scarfDark:"#d58ab5"})),girl:fs(us({skin:"#b07650",top:"#f5cf5f",legs:"#7fb7c9",feet:"#f7efe0"})+_c({skin:"#b07650",scarf:"#78c4dc",scarfDark:"#4f9fbd"})),boy:fs(us({skin:"#d79a6b",top:"#83c47b",legs:"#5d6e9e",feet:"#f7efe0"})+xc({skin:"#d79a6b",kufi:"#f3e3b5",band:"#e8584e",hair:"#4a2c1a"}))},Ev=7,Wo=3,yo=$u.degToRad(30),wa=1/Math.cos(yo),yc=100,Mc={night:{sky:10134783,ground:3814998,hemi:1.55,sun:13160703,sunI:.8},camp:{sky:9411312,ground:3814998,hemi:1.35,sun:12109055,sunI:.55},deep:{sky:9083112,ground:3160168,hemi:1.5,sun:11583743,sunI:.6},dusk:{sky:16769232,ground:8018552,hemi:1.8,sun:16763040,sunI:1.1},day:{sky:16777215,ground:15985368,hemi:1.9,sun:16777215,sunI:1.3},storm:{sky:13159648,ground:5263466,hemi:1.6,sun:14212336,sunI:.6}};async function Tv(n,e,t){const i=new Image;i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),await i.decode();const r=document.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(i,0,0,e,t),r}function Wn(n,e,t,i){return Promise.all(Array.from({length:Wo},(r,s)=>{let a=n.replace(/seed="\d+"/,`seed="${s*17+3}"`);return a=a.replace("</svg>",`<style>.pose${i==="A"?"B":"A"}{display:none}</style></svg>`),Tv(a,e,t).then(o=>Cn(o))}))}const Ea=n=>Array.from({length:Wo},(e,t)=>Cn(n(t)));function Sc(n,e=6.2,t=1.6){const i=new zt,r=72,s=[];for(let v=0;v<r;v++){const P=v/r*Math.PI*2,A=1+.025*Math.sin(P*5+1)+.015*Math.sin(P*11);s.push([Math.cos(P)*e*A,Math.sin(P)*e*A*.82])}const a=Cn(Mh(n,2*e+1,40,n.length)),o=new Ns(s.map(([v,P])=>new _e(v,-P))),l=new Oo(o),c=l.attributes.position,h=l.attributes.uv,u=2*e+1;for(let v=0;v<c.count;v++)h.setXY(v,(c.getX(v)+u/2)/u,(c.getY(v)+u/2)/u);const f=new _t(l,new qt({map:a}));f.rotation.x=-Math.PI/2;const d=[],g=[],_=[];let m=0;for(let v=0;v<=r;v++){const[P,A]=s[v%r];if(v){const[T,C]=s[v-1];m+=Math.hypot(P-T,A-C)}if(d.push(P,0,A,P,-t,A),g.push(m/8,1,m/8,0),v){const T=(v-1)*2;_.push(T,T+1,T+2,T+1,T+3,T+2)}}const p=new Lt;p.setAttribute("position",new et(d,3)),p.setAttribute("uv",new et(g,2)),p.setIndex(_),p.computeVertexNormals();const S=Cn(av(n),!0),x=new _t(p,new qt({map:S,side:Rt}));return i.add(f,x),i.userData={top:f,wall:x,R:e},i}async function Av(n){const e=new ih,t=new Ls(-1,1,1,-1,.1,400),i=Jg(n),r=[],s=[],a={},o=D=>a[D]||(a[D]=Cn(sv(D))),l=new zg(16777215,15985368,1.9),c=new Wg(16777215,1.3);c.position.set(-9,8,6),e.add(l,c,c.target);function h(D){const N=Mc[D]||Mc.night;l.color.set(N.sky),l.groundColor.set(N.ground),l.intensity=N.hemi,c.color.set(N.sun),c.intensity=N.sunI,e.background=o(D==="camp"?"night":D)}const u=new qt({map:Cn(Yg()),transparent:!0,depthWrite:!1}),f=new Ln(1,1).rotateX(-Math.PI/2);function d(D,N,W,k,ae=k*.5){const De=new _t(f,u);return De.position.set(N,.02,W),De.scale.set(k,1,ae),De.renderOrder=1,De.userData.noInk=!0,D.add(De),De}function g(D,N,W,k,ae,De,oe,Se){const Ue=Se||new qt({map:N[0],alphaTest:.5,alphaToCoverage:!0,side:Rt});Se||r.push({mat:Ue,frames:N});const Ve=new Ln(W,k*wa);Ve.translate(0,k*wa/2,0);const me=new _t(Ve,Ue);return me.position.set(ae,De,oe),me.userData.sprite=!0,me.userData.colorMap=()=>Ue.map,D.add(me),s.push(me),me}const _=new zt;e.add(_),_.add(Sc("camp",6.4,1.8));const m=Mv();_.add(m);const p=new Vg(16754784,9,9,1.2);p.position.set(0,1.2,.2),_.add(p);const S=new _t(new Ln(5.5,4.4).rotateX(-Math.PI/2),new qt({map:Cn(ov()),transparent:!0,depthWrite:!1,blending:Aa}));S.position.y=.03,S.userData.noInk=!0,S.renderOrder=2,_.add(S);{const D=(W,k,ae,De=0,oe=1)=>(W.position.set(k,0,ae),W.rotation.y=De,typeof oe=="number"?W.scale.setScalar(oe):W.scale.set(...oe),_.add(W),W);D(wh(),-3.6,-2.6,.35,.8),d(_,-3.6,-2.4,3.2),D(vo(101),3.9,-2.8,0,[.9,1.3,.9]),d(_,3.9,-2.8,1.6),D(_o(102),5,-.6,0,[.8,1.1,.8]),d(_,5,-.6,1.8),D(_o(103),-5.1,-.2,0,[.75,1,.75]),d(_,-5.1,-.2,1.6),D(vo(104),1.2,-4,0,[.8,1.2,.8]),D(Xn(9,.7),-4.3,2.4),D(Xn(10,.5),4.2,2.6),D(Ir(2,.17),-1.7,-1.35,.5),D(Ir(2,.17),1.7,-1.35,-.5);const N=Wi(.3,.3,.4,"#f5cf5f",!0);D(N,2.9,1.6,.4,.8);for(let W=0;W<10;W++){const k=W*2.4;D(bh(W%2?"#fffdf6":"#c9b5ee"),Math.cos(k)*(3.2+W%3*.7),1.6+Math.sin(k)*1.4,0,1.2)}}const x=300,v=360,[P,A,T,C,w,y,L,$]=await Promise.all([Wn(Gn.baba,x,v,"A"),Wn(Gn.baba,x,v,"B"),Wn(Gn.mama,x,v,"A"),Wn(Gn.mama,x,v,"B"),Wn(Gn.girl,x,v,"A"),Wn(Gn.girl,x,v,"B"),Wn(Gn.boy,x,v,"A"),Wn(Gn.boy,x,v,"B")]),z={};function j(D,N,W,k,ae,De,oe,Se){const Ue=new qt({map:N[0],alphaTest:.5,alphaToCoverage:!0,side:Rt}),Ve=g(_,null,k,ae,De,0,oe,Ue);d(_,De,oe+.05,k*.9),z[D]={m:Ve,mat:Ue,A:N,B:W,talk:!1,face:Se,x:De,z:oe,h:ae}}j("baba",P,A,1.35,1.62,-2.2,-1.2,1),j("mama",T,C,1.3,1.56,-.75,-1.75,1),j("girl",w,y,1.05,1.26,.8,-1.75,-1),j("boy",L,$,1.05,1.26,2.2,-1.2,-1),z.baba.m.position.y=z.mama.m.position.y=.12,z.girl.m.position.y=z.boy.m.position.y=.12;const ee=g(_,Ea(D=>fc(D,"dots")),.8,.62,0,0,0),J=g(_,Ea(D=>fc(D,"think")),.8,.62,0,0,0);ee.visible=J.visible=!1;const ie=new zt;ie.position.x=yc,e.add(ie);let H=null;function ye(D){H&&(ie.remove(H.root),H=null);const N=Sv[D],W=new zt;ie.add(W);const k=typeof N.ground=="string"?{before:N.ground,after:N.ground}:N.ground,ae=Sc(k.before);W.add(ae);const De={[k.before]:ae.userData.top.material.map},oe=[];N.build((Se,Ue,Ve,me={})=>{Se.position.set(Ue,me.y||0,Ve),me.ry&&(Se.rotation.y=me.ry),me.rz&&(Se.rotation.z=me.rz);const Je=me.s==null?[1,1,1]:typeof me.s=="number"?[me.s,me.s,me.s]:me.s;Se.scale.set(...Je),W.add(Se);let $e=null;if(!me.y&&!Se.userData.rain){const at=new sr().setFromObject(Se),U=Math.max(.6,(at.max.x-at.min.x)*.9);U<5&&($e=d(W,Ue,Ve+.05,U))}return oe.push({obj:Se,sh:$e,show:me.show,base:Je,y:me.y||0,x:Ue,z:Ve,delay:me.delay||0,bob:me.bob,rock:me.rock,bow:me.bow,sway:me.sway,rise:me.rise,swim:me.swim,k:oe.length,t:1,vis:!0}),Se}),H={key:D,def:N,root:W,items:oe,isle:ae,grounds:k,tops:De,state:null},F("before",!0)}function F(D,N=!1){var k;if(!H)return;H.state=D,H.stateT=0;const W=H.grounds[D];(k=H.tops)[W]||(k[W]=Cn(Mh(W,2*6.2+1,40,W.length))),H.isle.userData.top.material.map=H.tops[W];for(const ae of H.items){const De=!ae.show||ae.show===D;De===ae.vis&&!N||(ae.vis=De,ae.t=N?1:0)}se(0),Y==="stage"&&h(H.def.mood[D])}const V=D=>1+2.7*(D-1)**3+1.7*(D-1)**2;function se(D){for(const N of H.items){N.t=Math.min(1,N.t+D/(N.vis?.55:.3));let W;if(N.vis){const ae=Math.max(0,Math.min(1,(N.t*.55-N.delay)/.55+(N.t>=1?1:0)));W=N.t>=1?1:V(ae)}else W=1-N.t;const k=Math.max(1e-4,W);N.obj.visible=k>.001,N.obj.scale.set(N.base[0]*k,N.base[1]*k,N.base[2]*k),N.sh&&(N.sh.visible=N.obj.visible&&N.vis)}}const ce={aspect:1.6,W:1280,H:800,inset:{right:0,bottom:0},zoom:1},X={camp:{x:0,y:.7,z:-.6,needW:4.4,needH:2.7},stage:{x:yc,y:1.9,z:-.8,needW:6.6,needH:4.9}};let Y="camp";function re(){const D=X[Y],N=Math.max(.3,(ce.W-ce.inset.right)/ce.W),W=Math.max(.3,(ce.H-ce.inset.bottom)/ce.H),k=Math.max(D.needH/W,D.needW/(ce.aspect*N))*ce.zoom,ae=k*ce.aspect,De=(1-N)*ae,oe=-(1-W)*k;Object.assign(t,{left:-ae+De,right:ae+De,top:k+oe,bottom:-k+oe}),t.updateProjectionMatrix();const Se=80,Ue=new I(D.x,D.y,D.z);t.position.set(Ue.x,Ue.y+Math.sin(yo)*Se,Ue.z+Math.cos(yo)*Se),t.lookAt(Ue)}function fe(D,N){ce.W=D,ce.H=N,ce.aspect=D/N,re()}function ge(D){ce.inset=D,re()}function Ie(D,N,W="before"){Y=D,_.visible=D==="camp",ie.visible=D==="stage",D==="stage"?((!H||H.key!==N)&&ye(N),H.state!==W&&F(W),h(H.def.mood[H.state])):h("camp"),re()}let Le=[];function Ge(D,N="baba"){for(const k of Object.values(z))k.talk=!1;Le=D==="parent"?N==="both"?["baba","mama"]:[N]:D==="child"?["girl","boy"]:D==="all"?["baba","mama","girl","boy"]:[];for(const k of Le)z[k].talk=!0;ee.visible=D==="parent"||D==="all",J.visible=D==="child";const W=D==="parent"?Le[0]:D==="child"?"girl":D==="all"?"mama":null;if(W){const k=z[W],ae=D==="child"?J:ee;ae.userData.anchor=k}}const ne=[],ve=Ea(D=>lv(D)),R=new qt({map:ve[0],alphaTest:.5,side:Rt});r.push({mat:R,frames:ve});const Ne=new qt({color:"#ffc46a"}),pe=new vi(.04,5,4),Te=[];function Me(D=10){const N=Y==="camp"?_:ie,W=Y==="camp"?1.2:2;for(let k=0;k<D;k++){const ae=k/D*Math.PI*2+Math.random(),De=g(N,null,.36,.36,0,W,0,R);ne.push({m:De,parent:N,vx:Math.cos(ae)*2.6,vz:Math.sin(ae)*1.2,vy:3+Math.random()*1.6,t:0})}}let Ee=0,Ce=-1,E=0,M=0;function G(D){D=Math.max(0,D),Ee+=D;const N=Math.max(0,Math.floor(Ee*Ev))%Wo;if(N!==Ce){Ce=N,E=N*7.31;for(const W of r)W.mat.map=W.frames[N]}if(_.visible){m.children[m.children.length-1].scale.set(1+Math.sin(Ee*13)*.05,1+Math.sin(Ee*9.3)*.1+Math.sin(Ee*21)*.04,1),p.intensity=9+Math.sin(Ee*11)*1.2+Math.sin(Ee*17)*.8,S.material.opacity=.85+Math.sin(Ee*11)*.1;for(const k of Object.values(z)){const ae=k.talk&&Math.floor(Ee*2.2+k.x)%2===0;k.mat.map=(k.talk?k.B:k.A)[N];const De=1+Math.sin(Ee*3+k.x)*.018+(ae?Math.abs(Math.sin(Ee*9))*.02:0);k.m.scale.set(k.face/De,De,1)}for(const k of[ee,J])if(k.visible&&k.userData.anchor){const ae=k.userData.anchor;k.position.set(ae.x+.55,ae.h*wa*.95+.2+Math.sin(Ee*4)*.05,ae.z+.1)}if(M-=D,M<=0){M=.18;const k=new _t(pe,Ne);k.userData.noInk=!0,k.position.set((Math.random()-.5)*.5,.9,(Math.random()-.5)*.4),_.add(k),Te.push({e:k,t:0,vx:(Math.random()-.5)*.4})}}for(let W=Te.length-1;W>=0;W--){const k=Te[W];k.t+=D,k.e.position.y+=D*1.1,k.e.position.x+=Math.sin(Ee*3+W)*D*.3+k.vx*D,k.e.scale.setScalar(Math.max(.01,1-k.t/2)),k.t>2&&(_.remove(k.e),Te.splice(W,1))}if(ie.visible&&H){se(D);for(const W of H.items){const k=W.obj;if(k.userData.flicker&&(k.scale.y=W.base[1]*(W.vis?1:0)*(1+Math.sin(Ee*11+W.k)*.08)||k.scale.y),W.bob&&(k.position.y=W.y+Math.sin(Ee*1.6+W.k)*.12),W.rock&&(k.rotation.z=Math.sin(Ee*1.4)*.12,k.position.y=W.y+Math.sin(Ee*2)*.1),W.sway&&(k.rotation.z=Math.sin(Ee*1.2+W.k)*.12),W.swim&&k.userData.tail&&(k.userData.tail.rotation.y=Math.sin(Ee*2)*.3),W.rise&&W.vis&&(k.position.y=W.y+(Ee*.5+W.k*.13)%2),W.bow){const ae=H.state==="after"?1:0;W.bowK=(W.bowK||0)+(ae-(W.bowK||0))*Math.min(1,D*2),k.rotation.z=W.bowK*.35,k.position.y=W.y-W.bowK*.6+Math.sin(Ee*1.6+W.k)*.08}if(k.userData.spinY&&(k.rotation.y=Math.sin(Ee*k.userData.spinY+W.k)*.5),k.userData.rain)for(const ae of k.children)ae.position.y-=D*7,ae.position.y<0&&(ae.position.y+=k.userData.rain)}}for(let W=ne.length-1;W>=0;W--){const k=ne[W];k.t+=D,k.vy-=8*D,k.m.position.x+=k.vx*D,k.m.position.z+=k.vz*D,k.m.position.y=Math.max(0,k.m.position.y+k.vy*D),k.m.scale.setScalar(Math.max(.001,1-k.t/1)),k.t>1&&(k.parent.remove(k.m),s.splice(s.indexOf(k.m),1),ne.splice(W,1))}}const te=()=>i.render(e,t,E);return Ie("camp"),{scene:e,camera:t,resize:fe,setInset:ge,go:Ie,update:G,render:te,setStageState:F,setTalk:Ge,burst:Me,get place(){return Y},get stageKey(){return H==null?void 0:H.key},get stageState(){return H==null?void 0:H.state},familyIcon:D=>z[D].A[0].image}}const nn="عليه السلام",Rv="ﷺ",Cv=[{e:"😨",t:"Scared"},{e:"😢",t:"Sad"},{e:"😌",t:"Calm"},{e:"🦁",t:"Brave"},{e:"🤲",t:"Trusting Allah"},{e:"😲",t:"Surprised"},{e:"😟",t:"Worried"},{e:"😊",t:"Hopeful"}],ds=[{id:"adam",name:"Adam",honor:nn,label:"The First People",icon:"tree"},{id:"nuh",name:"Nuh",honor:nn,label:"The Great Ship",icon:"ark",story:"nuh"},{id:"ibrahim",name:"Ibrahim",honor:nn,label:"The Stars and the Fire",icon:"star",story:"ibrahim"},{id:"yusuf",name:"Yusuf",honor:nn,label:"The Well",icon:"well",story:"yusuf"},{id:"musa",name:"Musa",honor:nn,label:"The Parted Sea",icon:"waves"},{id:"yunus",name:"Yunus",honor:nn,label:"The Whale",icon:"whale",story:"yunus"},{id:"isa",name:"Isa",honor:nn,label:"The Palm Tree",icon:"palm"},{id:"muhammad",name:"Muhammad",honor:Rv,label:"The First Revelation",icon:"book"},{id:"hijrah",name:"The Hijrah",honor:"",label:"The Journey to Madinah",icon:"moon"}],Bi={nuh:{id:"nuh",name:"Nuh",honor:nn,title:"Nuh and the Great Ship",icon:"ark",blurb:"A huge ship built on dry land, and waves as big as mountains.",chapters:[{title:"A Ship on Dry Land",scene:"nuh-build",read:["Long, long ago lived the prophet Nuh {honor}. For a very, very long time (nine hundred and fifty years!) he called his people to worship Allah alone. He called them in the day and in the night, loudly and quietly. But only a few people believed.","Then Allah told Nuh to build a ship. A huge ship, right there on dry land, far away from the sea! Every time the chiefs of his people walked past, they laughed at him. But Nuh kept on building, plank by plank."],question:"Why would anyone build a ship on dry land? What do you think is coming?",parent:{ask:"What is a ship for? If Allah told Nuh to build one far from the sea, what might be about to happen?",hints:["Look at the sky in the picture. What could come from up there?","How do you keep going when people laugh at you?"],answer:"A great flood was coming. Allah told Nuh to load a pair of every kind of animal, and the believers, onto the ship."},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🔨",t:"Nuh finishes the ship"},{e:"🐑",t:"Animals come aboard in pairs"},{e:"🌧️",t:"Rain pours and the water rises"},{e:"⛰️",t:"The ship finds a place to rest"}]}],reveal:["Nuh finished the ship. Then Allah told him to bring on board a pair of every kind of animal, his family, and the people who believed.","Two by two, the animals came. Then the sky opened with pouring rain, and water burst up out of the ground. Slowly, the great ship began to float."],ayat:[{ref:"Hud 11:38",text:'And he constructed the ship, and whenever an assembly of the eminent of his people passed by him, they ridiculed him. He said, "If you ridicule us, then we will ridicule you just as you ridicule."'}],explain:"Nuh {honor} obeyed Allah even when it looked strange to everyone else, and even when people made fun of him. He trusted that Allah knew what was coming.",reflect:{q:"Nuh kept doing what was right even when people laughed. Is there something good you keep doing, even when it is hard?",tip:"Share one of your own: a good habit you keep even when nobody sees.",apply:"Pick one good habit together (like saying Bismillah before eating) and keep it up all week."}},{title:"Waves like Mountains",scene:"nuh-flood",read:['The rain poured and the water rose everywhere. The ship sailed on through waves as big as mountains. Nuh called out to his son, who had stayed behind: "O my son, come aboard with us!" But his son said, "I will climb a mountain. It will keep me safe from the water." Then a wave came between them.',"Inside the ship, the believers and the animals were safe, rocking on the huge waves. Days passed, and everyone waited. How would the flood end?"],question:"The ship is sailing on huge waves. What do you think happens next?",parent:{ask:"What do you do when you have to wait a long time for something? Who were the people on the ship trusting?",hints:["Could a mountain protect anyone from Allah's command?","Who can make the rain stop?"],answer:"Allah commanded the earth to swallow its water and the sky to stop. The water went down, and the ship came to rest on a mountain called Al-Judi.",note:"The part about Nuh's son is sad (he was among those who drowned). You can keep it simple: only Allah's mercy can save us, not a mountain."},predict:[{type:"emotion",prompt:"How do you think the people inside the ship felt?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"☀️",t:"The water goes down"},{e:"🚢",t:"They sail forever"},{e:"🏝️",t:"They find a new island"}]}],reveal:['Then Allah said: "O earth, swallow your water, and O sky, hold back your rain!" The rain stopped. The water went down, down, down.',"The ship came to rest on a mountain called Al-Judi. Nuh, the believers and all the animals stepped out onto dry land, safe and grateful, with peace and blessings from Allah."],ayat:[{ref:"Hud 11:44",text:'And it was said, "O earth, swallow your water, and O sky, withhold [your rain]." And the water subsided, and the matter was accomplished, and the ship came to rest on the [mountain of] Judiyy. And it was said, "Away with the wrongdoing people."'}],explain:"Everything obeys Allah: the sky, the earth and the water. The people on the ship were saved because they believed and obeyed.",reflect:{q:"Nuh and the believers were so grateful to reach dry land. What are three things you are grateful to Allah for today?",tip:"Take turns: one thing each, until you both have three.",apply:'Say "Alhamdulillah" out loud for three things before bed each night this week.'}}]},ibrahim:{id:"ibrahim",name:"Ibrahim",honor:nn,title:"Ibrahim and the Stars",icon:"star",blurb:"A night of stars, a hall of stone statues, and a fire that obeyed Allah.",chapters:[{title:"Who Made the Sky?",scene:"ibrahim-sky",read:["Long ago lived a young man named Ibrahim {honor}. His people made statues out of stone and wood and bowed down to them. Some of them also worshipped the stars, the moon and the sun.",'Ibrahim wanted to show his people the truth. One night the sky grew dark and a bright star appeared. Ibrahim said to his people, "Is this my Lord?" The night went on... and slowly, the star began to sink behind the hills.'],question:"The star is disappearing! What do you think Ibrahim said?",parent:{ask:"What happens to the stars when morning comes? Could something that goes away be the One who looks after us all the time?",hints:["Does Allah ever go away or fall asleep?","Who made the stars in the first place?"],answer:'When the star set, he said, "I do not like things that disappear." The same happened with the moon and then the sun. Each one set, so none of them could be God.',note:'Many scholars explain that Ibrahim {honor} said "Is this my Lord?" to reason with his people step by step. He never really believed the star was God.'},predict:[{type:"choose",prompt:"What do you think Ibrahim said?",options:[{e:"⭐",t:'"Come back, star!"'},{e:"🤔",t:`"Something that goes away can't be my Lord."`},{e:"🌙",t:`"Let's wait for the moon."`}]}],reveal:['When the star set, Ibrahim said, "I do not like things that disappear." Then the moon rose, big and bright. But the moon set too. Then the sun rose, the biggest and brightest of all. But in the evening, the sun set as well.',"Ibrahim told his people: the stars, the moon and the sun all come and go. They are not God. Allah made them all, and Allah never disappears."],ayat:[{ref:"Al-An'am 6:76",text:'So when the night covered him [with darkness], he saw a star. He said, "This is my lord." But when it set, he said, "I like not those that disappear."'},{ref:"Al-An'am 6:79",text:"Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah."}],explain:"The things Allah created are beautiful, but they change, set and go away. Allah, who made them, is always there.",reflect:{q:"Allah never sleeps and never disappears. He is always with us. When do you like to talk to Allah?",tip:'In Ayat al-Kursi Allah tells us: "Neither drowsiness overtakes Him nor sleep" (Al-Baqarah 2:255).',apply:'Tonight, look out of the window at the sky together and say "SubhanAllah" for something you can see.'}},{title:"The Stone Statues",scene:"ibrahim-idols",read:['Ibrahim {honor} spoke to his people gently. "What are these statues you keep bowing to?" he asked. They said, "We found our fathers worshipping them." Ibrahim said, "Then you and your fathers have been clearly wrong."','One day, the people went out of town. Ibrahim went to the statues and broke them into pieces, all except the biggest one. When the people came back, they gasped! "Who did this to our gods?" They brought Ibrahim in front of everyone and asked, "Was it you who did this, O Ibrahim?"'],question:"Everyone is looking at Ibrahim. What do you think he answered?",parent:{ask:"If the statues were really gods, what should they be able to do? Could they protect themselves? Could they talk?",hints:["Can a stone hear you or answer you?","What would be a clever way to make the people think?"],answer:'He pointed at the biggest statue and said, "Rather, this biggest one did it. So ask them, if they can speak!" The people knew statues cannot speak.',note:"Good to add: Ibrahim {honor} was a prophet guided by Allah. We never break other people's things. We share the truth with kind, clever words, like Ibrahim did."},predict:[{type:"say",prompt:"If you were Ibrahim, what would you say to the people? Say it out loud to {parent}!"}],reveal:['Ibrahim said, "Rather, this biggest one did it! So ask them, if they can speak."',"The people went quiet. They looked at each other. They knew the statues could not speak, could not hear, and could not even protect themselves. For a moment they knew they had been wrong. But their pride was too big, and they turned against Ibrahim."],ayat:[{ref:"Al-Anbiya 21:63",text:'He said, "Rather, this - the largest of them - did it, so ask them, if they should [be able to] speak."'},{ref:"Al-Anbiya 21:66",text:'He said, "Then do you worship instead of Allah that which does not benefit you at all or harm you?"'}],explain:"Ibrahim {honor} helped his people use their minds: something that cannot speak, hear or help itself cannot help us. Only Allah can.",reflect:{q:"Ibrahim was brave enough to say the truth even when everyone else did something different. When is it hard to be different from your friends?",tip:"Tell a story from your own childhood when you had to be brave and different.",apply:`Practise a kind, brave sentence together for when friends do something wrong: "I don't think that's okay."`}},{title:"The Great Fire",scene:"ibrahim-fire",read:['The people were very angry. "Burn him, and help your gods!" they shouted. They gathered wood and built an enormous fire, so hot that nobody could go near it. Then they threw Ibrahim {honor} into the flames.',`But Ibrahim trusted Allah completely. He said: "Hasbunallahu wa ni'mal wakeel." Allah is enough for us, and He is the best One to trust.`],question:"Ibrahim is in the middle of the fire! What do you think happens next?",parent:{ask:"Who made fire hot? If Allah made fire hot, could Allah also tell it to be cool?",hints:["Everything in the world obeys Allah, even fire.","What did Ibrahim say just before?"],answer:'Allah commanded the fire: "Be coolness and safety for Ibrahim." The fire could not hurt him, and he came out safe.'},predict:[{type:"emotion",prompt:"How do you think Ibrahim felt in his heart?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🌧️",t:"Rain puts the fire out"},{e:"❄️",t:"The fire turns cool"},{e:"🏃",t:"He runs away"}]}],reveal:['Allah said: "O fire, be coolness and safety for Ibrahim." And the fire obeyed!',"The flames could not hurt Ibrahim at all. He was safe in the middle of the fire, and the people could not believe their eyes. The ones who wanted to hurt him were the real losers that day."],ayat:[{ref:"Al-Anbiya 21:69",ar:"يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",text:'We [i.e., Allah] said, "O fire, be coolness and safety upon Ibrahim."'}],hadith:{text:`"Hasbunallahu wa ni'mal wakeel" (Allah is sufficient for us, and He is the best Disposer of affairs) was said by Ibrahim when he was thrown into the fire, and it was said by Muhammad ﷺ when people told him an army had gathered against him.`,src:"Ibn 'Abbas, Sahih al-Bukhari 4563"},explain:"Fire burns only because Allah lets it. When Allah commanded it to be cool, it became cool. Ibrahim {honor} knew Allah was enough for him.",reflect:{q:"When you feel scared, what can you say to remember that Allah is with you?",tip:`Teach the words slowly: "Hasbunallahu wa ni'mal wakeel". Say them together a few times.`,apply:`Say "Hasbunallahu wa ni'mal wakeel" together before sleeping tonight.`}}]},yusuf:{id:"yusuf",name:"Yusuf",honor:nn,title:"Yusuf and the Well",icon:"well",blurb:"A special dream, a deep well, and the most beautiful forgiveness.",chapters:[{title:"The Special Dream",scene:"yusuf-dream",read:["Yusuf {honor} was a kind and gentle boy. He lived with his father, the prophet Ya'qub {honor}, and his eleven brothers. His father loved him very much, and his older brothers were jealous.",'One morning Yusuf woke up with wonderful news. "Father! In my dream I saw eleven stars, and the sun, and the moon, and they were all bowing down to me!" His father listened carefully. He knew this dream was special...'],question:"What do you think Yusuf's father told him?",parent:{ask:"If you had a special surprise, and you knew someone might feel jealous, what would you do?",hints:["How were the older brothers feeling about Yusuf?","Is it always wise to tell everybody everything?"],answer:"Ya'qub told Yusuf not to tell his brothers about the dream, in case they made a plan against him."},predict:[{type:"choose",prompt:"What do you think his father said?",options:[{e:"🤫",t:'"Keep it a secret."'},{e:"📣",t:'"Tell everyone!"'},{e:"🎁",t:'"Share it with your brothers."'}]}],reveal:[`Ya'qub said, "My son, don't tell your brothers about your dream, or they may make a plan against you."`,"He also told Yusuf that Allah had chosen him and would teach him how to understand dreams. So Yusuf kept the secret. But the brothers' jealousy kept growing..."],ayat:[{ref:"Yusuf 12:4",text:'When Yusuf said to his father, "O my father, indeed I have seen [in a dream] eleven stars and the sun and the moon; I saw them prostrating to me."'},{ref:"Yusuf 12:5",text:'He said, "O my son, do not relate your vision to your brothers or they will contrive against you a plan. Indeed Satan, to man, is a manifest enemy."'}],explain:"Ya'qub {honor} was a wise, loving father. He protected his son by teaching him that some good news is better kept private.",reflect:{q:"Jealousy is a feeling that grows if we feed it. Have you ever felt jealous? What helps it go away?",tip:'The Prophet ﷺ said: "None of you truly believes until he loves for his brother what he loves for himself." (Sahih al-Bukhari 13, Sahih Muslim 45)',apply:`When a brother, sister or friend gets something nice this week, practise saying "MashaAllah, I'm happy for you!"`}},{title:"Down in the Well",scene:"yusuf-well",read:[`The brothers made a plan. "Father, let Yusuf come out with us tomorrow to play. We will look after him." Ya'qub was worried, but he let him go.`,`Far from home, the brothers put Yusuf down into a deep, dark well and left him there. That night they came home crying, with Yusuf's shirt stained with fake blood. "A wolf ate him!" they said. Their father did not believe them. He said, "Patience is most fitting, and Allah is the One whose help I seek."`],question:"Yusuf is all alone at the bottom of the well. What do you think happens next?",parent:{ask:"Yusuf's father chose to be patient. What does patience look like when something is really, really hard?",hints:["Who could still see Yusuf, even at the bottom of the well?","Who might come to a well in the desert?"],answer:"A caravan of travellers came to the well for water. When they let down their bucket, they found Yusuf and took him with them to Egypt."},predict:[{type:"emotion",prompt:"How do you think Yusuf feels at the bottom of the well?"},{type:"choose",prompt:"What do you think happens next?",options:[{e:"🐫",t:"Someone finds him"},{e:"🧗",t:"He climbs out"},{e:"🤲",t:"He waits and makes dua"}]}],reveal:['A caravan of travellers came by on their camels. They were thirsty, so they sent a man to fetch water from the well. He let down his bucket... and he shouted, "Good news! Here is a boy!"',"The travellers took Yusuf with them, all the way to Egypt. There he grew up in the house of an important man. Allah was looking after Yusuf the whole time."],ayat:[{ref:"Yusuf 12:19",text:'And there came a company of travelers; then they sent their water drawer, and he let down his bucket. He said, "Good news! Here is a boy."'},{ref:"Yusuf 12:18",text:"...So patience is most fitting. And Allah is the one sought for help against that which you describe."}],explain:"Even at the bottom of a dark well, Yusuf {honor} was not forgotten. Allah was planning something good for him that no one could see yet.",reflect:{q:"When something really hard happens, like losing something or being left out, what can we do while we wait for it to get better?",tip:"Talk about sabr: staying calm, not giving up, and asking Allah for help.",apply:'Next time something goes wrong, say "Sabrun jameel" (beautiful patience) and take three slow breaths.'}},{title:"No Blame Today",scene:"yusuf-egypt",read:["Many years passed. Yusuf {honor} grew up in Egypt and went through many hard tests, but he always stayed honest and patient. In the end, the king put him in charge of all the food stores of the land. Yusuf saved grain during seven good years, so that when seven hungry years came, people would have food.",`The hungry years reached Yusuf's old home too, and his brothers came all the way to Egypt to ask for food. They did not recognise him, but Yusuf knew them straight away. Later, he told them: "I am Yusuf!" The brothers were shocked and ashamed. The boy they had thrown into the well was now in charge of all of Egypt's food.`],question:"Yusuf could do anything to the brothers who hurt him. What do you think he did?",parent:{ask:"Has someone ever hurt you? How did you want to answer them? What would make Allah happy?",hints:["Remember how patient Yusuf was all those years.","Is getting even the same as being strong?"],answer:'He forgave them completely: "No blame will there be upon you today. Allah will forgive you."',note:"At the end of the story the family bows to Yusuf, which is the meaning of his dream. In that time bowing was a sign of respect; in Islam we bow and prostrate only to Allah."},predict:[{type:"choose",prompt:"What do you think Yusuf did?",options:[{e:"😠",t:"Punished them"},{e:"🤗",t:"Forgave them"},{e:"🙅",t:"Sent them away with no food"}]}],reveal:['Yusuf said: "No blame will there be upon you today. Allah will forgive you, and He is the most merciful of the merciful." He did not shout. He did not take revenge. He forgave them.',"He even gave them his shirt to take home to their father. Then the whole family came to Egypt and they were together again. Yusuf's eleven brothers, his father and his mother bowed in respect, just like the eleven stars, the sun and the moon in his dream!"],ayat:[{ref:"Yusuf 12:92",ar:"لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",text:'He said, "No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful."'}],explain:"Yusuf {honor} had every reason to be angry, but he chose forgiveness. Forgiving is a sign of a strong, beautiful heart.",reflect:{q:"Is there someone we need to forgive, or say sorry to? How does it feel when someone forgives you?",tip:"Maybe start by saying sorry for something small yourself. Children learn it from watching us.",apply:'This week, when someone says sorry, answer like Yusuf: "No blame on you today!"'}}]},yunus:{id:"yunus",name:"Yunus",honor:nn,title:"Yunus and the Whale",icon:"whale",blurb:"A stormy sea, a dua in the darkness, and a second chance.",chapters:[{title:"The Stormy Sea",scene:"yunus-ship",read:["Allah sent the prophet Yunus {honor} to a big city full of people. Yunus told them to worship Allah alone and to be good. But they would not listen. Yunus became upset and angry with them, and he left the city.","Yunus went down to the sea and got onto a ship that was full of people and heavy loads. The ship sailed out. Then the wind began to howl, and the waves grew as big as hills. The ship rocked and creaked. It was too heavy. It might sink!"],question:"The ship is too heavy and the sea is wild! What do you think happens next?",parent:{ask:"If a ship is too heavy, what could the people on it do? How do you think Yunus was feeling?",hints:["Look at the sea in the picture. Is anything under the water?","Yunus left in anger. Was that the best choice?"],answer:"The people drew lots to choose who would leave the ship. It fell on Yunus. He went into the sea, and by Allah's command a huge fish swallowed him."},predict:[{type:"choose",prompt:"What do you think happens next?",options:[{e:"🏊",t:"Everyone swims to shore"},{e:"🎲",t:"They pick someone to leave the ship"},{e:"🐋",t:"A giant sea creature comes"}]}],reveal:["The people on the ship drew lots, like picking a name out of a hat, to decide who must leave the ship. The lot fell on Yunus.","So Yunus went into the stormy sea... and a huge fish opened its mouth and swallowed him whole! But Yunus was still alive. Allah was looking after him, even there."],ayat:[{ref:"As-Saffat 37:139-142",text:"And indeed, Yunus was among the messengers. [Mention] when he ran away to the laden ship. And he drew lots and was among the losers. Then the fish swallowed him, while he was blameworthy."}],explain:"Yunus {honor} left his people in anger instead of waiting patiently. Even prophets are tested, and even then Allah looked after him.",reflect:{q:"Yunus felt angry and left. What do you do when you feel really, really angry? What could help?",tip:'A man asked the Prophet ﷺ for advice, and he said: "Do not become angry," repeating it several times. (Sahih al-Bukhari 6116)',apply:'Make an "angry plan" together: when I feel angry I will stop, breathe slowly, and ask for help.'}},{title:"In the Darkness",scene:"yunus-whale",read:["Inside the whale it was dark. Very, very dark. It was dark from the night, dark from the deep sea, and dark inside the whale. Yunus {honor} could not see anything at all. Nobody knew where he was... except Allah.","In the quiet dark, Yunus thought about everything that had happened. He realised he should not have left his people in anger. And he knew exactly what to do."],question:"Yunus is in the dark, deep under the sea. What do you think he did?",parent:{ask:"When you've made a mistake, what is the best thing to do? Who can hear us anywhere, even inside a whale?",hints:["Can Allah hear a whisper at the bottom of the sea?","What do we say when we know we were wrong?"],answer:'He called out to Allah: "There is no god except You. Glory be to You. Indeed, I have been of the wrongdoers." Allah answered him and saved him.'},predict:[{type:"say",prompt:"If you were in the dark like Yunus, what would you say to Allah? Whisper it to {parent}."}],reveal:['From the darkness, Yunus called out to Allah: "La ilaha illa anta, subhanaka, inni kuntu minaz-zalimeen." There is no god except You. You are perfect. I was wrong.',"He did not make excuses. He said sorry to Allah, and Allah heard him, even from inside a whale at the bottom of the sea. Allah answered his dua and saved him."],ayat:[{ref:"Al-Anbiya 21:87",ar:"لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",text:'And [mention] the man of the fish, when he went off in anger and thought that We would not decree [anything] upon him. And he called out within the darknesses, "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers."'},{ref:"Al-Anbiya 21:88",text:"So We responded to him and saved him from the distress. And thus do We save the believers."}],explain:"Allah hears us everywhere. When we are honest that we made a mistake and turn back to Him, He answers, just as He answered Yunus {honor}.",reflect:{q:`Saying "I was wrong" can be really hard! When was the last time you said sorry? Let's learn Yunus's dua together.`,tip:'Say the dua slowly, one part at a time: "La ilaha illa anta" · "subhanaka" · "inni kuntu minaz-zalimeen".',apply:"Learn the dua of Yunus together and say it three times before sleeping tonight."}},{title:"Home Again",scene:"yunus-shore",read:["By Allah's command, the whale swam to the shore and put Yunus {honor} out onto the open sand. Yunus was weak and ill after so long inside the whale.","The sun was hot. There was no shade and nobody around to help. Yunus lay on the beach, far from home..."],question:"Yunus is weak and alone on the beach. What do you think happens next?",parent:{ask:"How does Allah look after us when we are weak or poorly? What or who does He send to help us?",hints:["What gives shade on a hot day?","Do you think Yunus went back to his people?"],answer:"Allah made a gourd plant grow over him. Then Allah sent him back to his people, a hundred thousand or more, and this time they believed!"},predict:[{type:"order",prompt:"Put these in the order you think they will happen:",cards:[{e:"🌿",t:"A plant grows over him"},{e:"💪",t:"Yunus gets strong again"},{e:"🚶",t:"He goes back to his people"},{e:"🏘️",t:"The people believe"}]}],reveal:["Allah made a gourd plant grow over Yunus, with big green leaves to shade him from the hot sun. Slowly, Yunus grew strong again.","Then Allah sent him back to his people, a hundred thousand of them or more. And this time something wonderful happened: the people believed! They turned to Allah, and Allah let them enjoy their lives for a time."],ayat:[{ref:"As-Saffat 37:145-148",text:"But We threw him onto the open shore while he was ill. And We caused to grow over him a gourd vine. And We sent him to [his people of] a hundred thousand or more. And they believed, so We gave them enjoyment [of life] for a time."}],explain:"Allah gave Yunus {honor} a second chance, and his people a second chance too. Turning back to Allah always opens a door.",reflect:{q:"Yunus got a second chance. Has anyone ever given you a second chance? Who could we give one to?",tip:"Share a time someone gave you a second chance, and how it felt.",apply:"Give someone a second chance this week, and tell each other about it at dinner."}}]}},bc=["nuh","ibrahim","yusuf","yunus"],$o="family-deen-stories-v1",Ta=()=>({settings:{parent:"baba",child:"",narration:!1,muted:!1,setup:!1},progress:{},current:null,talks:0,journal:[],newlyFinished:null});function Th(){try{const n=JSON.parse(localStorage.getItem($o)||"null");if(!n)return Ta();const e=Ta();return{...e,...n,settings:{...e.settings,...n.settings||{}}}}catch{return Ta()}}function Pv(n){try{localStorage.setItem($o,JSON.stringify(n))}catch{}}function Lv(){try{localStorage.removeItem($o)}catch{}}let Tt,fi,ks=!1;function zi(){if(Tt){Tt.state==="suspended"&&Tt.resume();return}const n=window.AudioContext||window.webkitAudioContext;n&&(Tt=new n,fi=Tt.createGain(),fi.gain.value=ks?0:.4,fi.connect(Tt.destination))}function Ah(n){ks=n,fi&&(fi.gain.value=n?0:.4)}function wn(n,e,{type:t="triangle",vol:i=.5,slide:r=1,delay:s=0}={}){if(!Tt||ks)return;const a=Tt.currentTime+s,o=Tt.createOscillator(),l=Tt.createGain();o.type=t,o.frequency.setValueAtTime(n,a),o.frequency.exponentialRampToValueAtTime(n*r,a+e),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(i,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l).connect(fi),o.start(a),o.stop(a+e+.02)}function wc(n,{vol:e=.3,cutoff:t=2e3,type:i="lowpass",delay:r=0}={}){if(!Tt||ks)return;const s=Tt.currentTime+r,a=Math.floor(Tt.sampleRate*n),o=Tt.createBuffer(1,a,Tt.sampleRate),l=o.getChannelData(0);for(let f=0;f<a;f++)l[f]=(Math.random()*2-1)*(1-f/a)**2;const c=Tt.createBufferSource(),h=Tt.createBiquadFilter(),u=Tt.createGain();c.buffer=o,h.type=i,h.frequency.value=t,u.gain.value=e,c.connect(h).connect(u).connect(fi),c.start(s)}const yt={tap:()=>wn(700,.06,{vol:.2}),page:()=>wc(.22,{vol:.25,cutoff:3e3,type:"bandpass"}),pick:()=>{wn(520,.1,{vol:.3}),wn(780,.12,{delay:.06,vol:.3})},stop:()=>{wn(440,.18,{type:"sine",vol:.35}),wn(330,.26,{type:"sine",delay:.14,vol:.3})},talk:()=>{wn(392,.16,{type:"sine",vol:.3}),wn(523,.22,{type:"sine",delay:.1,vol:.3})},reveal:()=>[784,988,1175,1568].forEach((n,e)=>wn(n,.5,{type:"sine",delay:e*.09,vol:.18})),done:()=>[523,659,784,1047].forEach((n,e)=>wn(n,.24,{delay:e*.1,vol:.35})),crackle:()=>{for(let n=0;n<3;n++)wc(.03,{vol:.08+Math.random()*.06,cutoff:1500+Math.random()*2500,type:"highpass",delay:Math.random()*.4})}},As=typeof window<"u"?window.speechSynthesis:null,Tr=!!(As&&window.SpeechSynthesisUtterance);function Hi(n){if(!Tr)return;Mr();const e=n.replace(/عليه السلام/g,"alayhis salaam").replace(/ﷺ/g,"sallallahu alayhi wa sallam").replace(/[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g," ").replace(/<[^>]+>/g,""),t=new SpeechSynthesisUtterance(e);t.rate=.9,t.pitch=1.05;const i=As.getVoices().find(r=>/en[-_](GB|US)/i.test(r.lang));i&&(t.voice=i),As.speak(t)}function Mr(){Tr&&As.cancel()}const Be=n=>document.getElementById(n),je=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);let He=Th();Ah(He.settings.muted);const hn=()=>({baba:"Baba",mama:"Mama",both:"Baba & Mama"})[He.settings.parent]||"Baba",un=()=>He.settings.child.trim()||"Little star";function Vi(n,e){return je(n).replace(/\{parent\}/g,hn()).replace(/\{child\}/g,je(un())).replace(/\{honor\}/g,e?`<span class="honor">${e.honor}</span>`:"").replace(/ﷺ/g,'<span class="honor">ﷺ</span>')}const En=n=>n.replace(/<[^>]+>/g,"");function Iv(n){const e=n.read.map((t,i)=>`read:${i}`);return e.push("stop","cover","parent","handback"),n.predict.forEach((t,i)=>e.push(`predict:${i}`)),e.push("great","reveal","ayah","reflect","done"),e}function Dv(n){const e=n.split(":")[0];return e==="read"||e==="stop"?{place:"stage",state:"before",talk:null}:e==="reveal"||e==="ayah"?{place:"stage",state:"after",talk:null}:e==="parent"||e==="cover"?{place:"camp",talk:"parent"}:e==="predict"||e==="handback"||e==="great"?{place:"camp",talk:"child"}:e==="reflect"||e==="done"?{place:"camp",talk:"all"}:{place:"camp",talk:null}}const de={story:null,ch:0,steps:[],i:0,answers:[],orderPick:[]};async function Uv(){const n=new ag({canvas:Be("scene"),antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.outputColorSpace=Bt;const e=await Av(n);function t(){const F=Be("panel");if(!Be("titleScreen").classList.contains("hidden")){const ce=document.querySelector(".title-card").getBoundingClientRect();return e.setInset({right:0,bottom:Math.max(0,innerHeight-ce.top-20)})}if(F.classList.contains("hidden"))return e.setInset({right:0,bottom:0});const V=F.getBoundingClientRect(),se=innerWidth/innerHeight<1;e.setInset(se?{right:0,bottom:innerHeight-V.top+6}:{right:innerWidth-V.left+6,bottom:0})}function i(){n.setSize(innerWidth,innerHeight,!1),e.resize(innerWidth,innerHeight),document.body.classList.toggle("portrait",innerWidth/innerHeight<1),t()}addEventListener("resize",i),i(),new ResizeObserver(t).observe(Be("panel"));const r=()=>Pv(He),s=(F,V=!0)=>Be(F).classList.toggle("hidden",!V);function a(){Be("talkCount").textContent=He.talks,Be("voiceBtn").classList.toggle("off",!He.settings.narration),Be("voiceBtn").style.display=Tr?"":"none",Be("muteBtn").innerHTML=tn(He.settings.muted?"mute":"sound")}function o(F){F.classList.remove("bump"),F.offsetWidth,F.classList.add("bump")}function l(F,V){var se;He.talks++,He.journal.push({t:Date.now(),story:(se=de.story)==null?void 0:se.id,ch:de.ch,kind:F,text:V}),r(),a(),o(Be("talkPill")),yt.talk()}let c=!1;function h(F){return c?(F(),Promise.resolve()):(c=!0,Be("fade").classList.add("on"),new Promise(V=>setTimeout(()=>{F(),Be("fade").classList.remove("on"),c=!1,V()},260)))}const u={},f=(F,V)=>{var se;return u[se=F+V]||(u[se]=cv(F,V).toDataURL())};function d(){for(const F of["titleScreen","setupScreen","trailScreen","journalScreen","cover"])s(F,!1)}function g(){Mr(),d(),s("panel",!1),s("hud",!1),s("titleScreen"),e.go("camp"),e.setTalk(null),t();const F=He.current&&Bi[He.current.story];Be("titleHero").outerHTML=kh([{src:f("ark",!0),cls:"bob"},{src:f("star",!0),cls:"bob"},{icon:"fire",cls:"main"},{src:f("well",!0),cls:"bob"},{src:f("whale",!0),cls:"bob"}],{tone:"night",glow:!0,sparkles:7}).replace('class="dkhero','id="titleHero" class="dkhero'),Be("startBtn").innerHTML=`${tn("scroll")} Open the Story Trail`,Be("continueBtn").classList.toggle("hidden",!F),F&&(Be("continueBtn").innerHTML=`${tn("play")} Continue: ${F.name} <span class="honor">${F.honor}</span> · Chapter ${He.current.ch+1}`),t()}function _(){d(),s("setupScreen"),Be("parentSeg").innerHTML=Nh([{id:"baba",label:"Baba",pic:"grownup",color:"blue",sub:"tells the story"},{id:"mama",label:"Mama",pic:"grownup",color:"pink",sub:"tells the story"},{id:"both",label:"Both",pic:"people",color:"green",sub:"take turns"}],"data-v").replace(/^<div class="dkavs">|<\/div>$/g,""),document.querySelectorAll("#parentSeg button").forEach(F=>F.classList.toggle("on",F.dataset.v===He.settings.parent)),Be("childName").value=He.settings.child,Be("voiceChk").checked=He.settings.narration,Be("voiceChk").parentElement.style.display=Tr?"":"none"}Be("parentSeg").addEventListener("click",F=>{const V=F.target.closest("button");V&&(He.settings.parent=V.dataset.v,yt.tap(),document.querySelectorAll("#parentSeg button").forEach(se=>se.classList.toggle("on",se===V)))}),Be("setupDone").innerHTML=`${tn("fire")} Light the fire`,Be("setupDone").addEventListener("click",()=>{He.settings.child=Be("childName").value.trim(),He.settings.narration=Be("voiceChk").checked,He.settings.setup=!0,r(),a(),yt.pick(),de.story?(d(),s("hud"),L()):m()});function m(){Mr(),d(),s("panel",!1),s("hud"),s("trailScreen"),s("storyPop",!1),e.go("camp"),e.setTalk(null),t();const F=bc.filter(ge=>{var Ie;return(Ie=He.progress[ge])==null?void 0:Ie.finished}).length;Be("trailStats").innerHTML=el([["talk",`<b>${He.talks}</b> conversations had`,"blue"],["scroll",`<b>${F}</b> of ${bc.length} stories told`,"gold"]]);const V=ds.length,se=innerWidth/innerHeight<1,[ce,X]=se?[420,1e3]:[1e3,420],Y=ds.map((ge,Ie)=>se?[Ie%2?300:120,95+Ie*790/(V-1)]:[70+Ie*860/(V-1),Ie%2?290:130]);let re=`M${Y[0][0]} ${Y[0][1]}`;for(let ge=1;ge<V;ge++){const[Ie,Le]=Y[ge-1],[Ge,ne]=Y[ge];re+=se?` C ${Ie} ${Le+45}, ${Ge} ${ne-45}, ${Ge} ${ne}`:` C ${Ie+55} ${Le}, ${Ge-55} ${ne}, ${Ge} ${ne}`}Be("trailSvg").setAttribute("viewBox",`0 0 ${ce} ${X}`),Be("trailPath").setAttribute("d",re),Be("trailNodes").innerHTML=ds.map((ge,Ie)=>{var R;const Le=ge.story&&Bi[ge.story],Ge=Le&&((R=He.progress[ge.story])==null?void 0:R.finished),ne=He.newlyFinished===ge.story;return`<button class="tnode ${Le?Ge?"done":"open":"locked"} ${ne?"fresh":""}" data-id="${ge.id}" style="left:${Y[Ie][0]/ce*100}%;top:${Y[Ie][1]/X*100}%">
        <img src="${f(ge.icon,!!Le)}" alt="" />
        <b>${je(ge.name)} ${ge.honor?`<span class="honor">${ge.honor}</span>`:""}</b>
        <small>${Le?Ge?"★ told":je(ge.label):"coming soon"}</small></button>`}).join("");const fe=Be("trailNodes").querySelector(".tnode.fresh");fe&&setTimeout(()=>Hh(fe.querySelector("img"),!0),500),He.newlyFinished=null,r()}Be("trailNodes").addEventListener("click",F=>{const V=F.target.closest(".tnode");if(!V)return;yt.tap();const se=ds.find(Y=>Y.id===V.dataset.id),ce=se.story&&Bi[se.story],X=Be("storyPop");if(!ce)X.innerHTML=`<h3>${je(se.name)} ${se.honor?`<span class="honor">${se.honor}</span>`:""}</h3><p>${je(se.label)}.<br>This story is coming soon, in sha Allah.</p><button class="chunky" data-act="close">OK</button>`;else{const Y=He.progress[ce.id]||{done:[]},re=ce.chapters.findIndex((fe,ge)=>!Y.done[ge]);X.innerHTML=`<img src="${f(ce.icon,!0)}" alt="" class="pop-badge"/><h3>${Vi(ce.title.replace(ce.name,ce.name+" {honor}"),ce)}</h3><p>${je(ce.blurb)}</p>
        <ol class="chlist">${ce.chapters.map((fe,ge)=>`<li class="${Y.done[ge]?"ticked":""}"><button data-act="ch" data-ch="${ge}">${Y.done[ge]?"✓":ge+1}. ${je(fe.title)}</button></li>`).join("")}</ol>
        <button class="chunky gold" data-act="ch" data-ch="${re<0?0:re}">${tn(re<0?"star":"play")} ${re<0?"Tell it again":re===0?"Start the story":`Continue: Chapter ${re+1}`}</button>
        <button class="link" data-act="close">Not tonight</button>`}X.dataset.story=(ce==null?void 0:ce.id)||"",s("storyPop")}),Be("storyPop").addEventListener("click",F=>{const V=F.target.closest("button");if(V){if(V.dataset.act==="close"){s("storyPop",!1);return}V.dataset.act==="ch"&&S(Be("storyPop").dataset.story,+V.dataset.ch)}});function p(){d(),s("journalScreen");const F=He.journal.filter(se=>se.kind==="predict").length;Be("journalStats").innerHTML=el([["talk",`<b>${He.talks}</b> conversations`,"blue"],["crystal",`<b>${F}</b> predictions`,"pink"]]);const V=He.journal.slice(-40).reverse();Be("journalList").innerHTML=V.length?V.map(se=>{var re;const ce=Bi[se.story],X=new Date(se.t).toLocaleDateString(void 0,{day:"numeric",month:"short"});return`<div class="jrow"><span class="jic">${tn({predict:"crystal",talk:"talk",reflect:"seedling"}[se.kind]||"star","big")}</span><div><b>${ce?je(ce.name)+" · "+je(((re=ce.chapters[se.ch])==null?void 0:re.title)||""):""}</b><p>${je(se.text)}</p></div><small>${X}</small></div>`}).join(""):'<p class="hint">Your conversations and predictions will appear here.</p>',Oh(Be("journalList"))}Be("journalBtn").innerHTML=`${tn("book")} Family Journal`,Dh({trailBtn:"scroll",voiceBtn:"talk",muteBtn:"sound"}),Be("journalBtn").addEventListener("click",()=>{yt.tap(),p()}),Be("journalClose").addEventListener("click",()=>{yt.tap(),m()}),Be("trailClose").addEventListener("click",()=>{yt.tap(),g()}),Be("trailBtn").addEventListener("click",()=>{yt.tap(),m()}),Be("startBtn").addEventListener("click",()=>{zi(),yt.tap(),He.settings.setup?m():_()}),Be("continueBtn").addEventListener("click",()=>{zi(),yt.tap(),x()}),Be("setupBtn").addEventListener("click",()=>{zi(),yt.tap(),_()}),Be("voiceBtn").addEventListener("click",()=>{He.settings.narration=!He.settings.narration,He.settings.narration||Mr(),r(),a(),de.story&&!Be("panel").classList.contains("hidden")&&L()}),Be("muteBtn").addEventListener("click",()=>{He.settings.muted=!He.settings.muted,Ah(He.settings.muted),r(),a()}),addEventListener("pointerdown",zi,{once:!0});function S(F,V,se=0){de.story=Bi[F],de.ch=V,de.steps=Iv(de.story.chapters[V]),de.i=Math.min(se,de.steps.length-1),de.answers=[],de.orderPick=[],d(),s("hud"),v(de.i,!0)}function x(){const F=He.current;F&&Bi[F.story]?S(F.story,F.ch,F.step):m()}function v(F,V=!1){de.i=F,de.lock=!1;const se=de.steps[F];He.current=se==="done"?null:{story:de.story.id,ch:de.ch,step:F},r(),Mr();const ce=Dv(se),X=V||e.place!==ce.place||ce.place==="stage"&&e.stageKey!==de.story.chapters[de.ch].scene,Y=()=>{ce.place==="stage"?e.go("stage",de.story.chapters[de.ch].scene,ce.state):e.go("camp"),e.setTalk(ce.talk,He.settings.parent),L(),se==="reveal"&&(yt.reveal(),e.burst(12))};X?h(Y):(ce.place==="stage"&&e.stageState!==ce.state&&e.setStageState(ce.state),Y())}const P=()=>{yt.page(),v(Math.min(de.i+1,de.steps.length-1))},A=()=>{yt.tap();let F=de.i-1;for(;F>0&&["cover","handback","great"].includes(de.steps[F]);)F--;v(Math.max(0,F))};function T(F=""){const V=de.story,se=V.chapters.length,ce=de.steps.map((X,Y)=>`<i class="${Y<de.i?"past":Y===de.i?"now":""}"></i>`).join("");return`<div class="phead"><span><b>${je(V.name)} <span class="honor">${V.honor}</span></b> · Chapter ${de.ch+1} of ${se}: ${je(V.chapters[de.ch].title)}</span>${F}</div><div class="pdots">${ce}</div>`}const C=()=>de.i>0?'<button class="link back" data-act="back">‹ Back</button>':'<button class="link back" data-act="trail">‹ Story Trail</button>',w=F=>He.settings.narration&&Tr?`<button class="speak" data-act="speak" data-text="${je(En(F))}">🔊 Read it to us</button>`:"";function y(F){const V=Be("panel");V.innerHTML=F,s("panel"),V.scrollTop=0,requestAnimationFrame(t)}function L(){const F=de.story,V=F.chapters[de.ch],se=de.steps[de.i],[ce,X]=se.split(":"),Y=re=>Vi(re,F);if(s("cover",!1),ce==="read"){const re=+X,fe=re===V.read.length-1,ge=Y(V.read[re]);y(`${T()}<div class="card read"><div class="ribbon">📖 ${hn()}, read this aloud</div>
        ${re===0?`<h2 class="chtitle">${je(V.title)}</h2>`:""}
        <p class="story">${ge}</p>${w(ge)}
        <div class="pages">Page ${re+1} of ${V.read.length}</div></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">${fe?"Stop the story here ✋":"Turn the page →"}</button></div>`),He.settings.narration&&Hi(En(ge))}else if(ce==="stop")yt.stop(),y(`${T()}<div class="card child"><div class="ribbon gold">✋ The story stops here!</div>
        <p class="big">${Y(V.question)}</p>
        <p class="look">👀 ${je(un())}, look at ${hn()}. What do <i>you</i> think?</p></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">👤 ${hn()}'s turn</button></div>`),He.settings.narration&&Hi(En(Y(V.question)));else if(ce==="cover")$("🙈","Grown-ups only for a moment!",`${je(un())}, cover your eyes. ${hn()} has a secret card to read.`,"I'm the grown-up, show me");else if(ce==="parent"){const re=V.parent;y(`${T()}<div class="card parent"><div class="ptag">👤 For ${hn()} only</div>
        <p class="warn">Don't tell the answer yet! Ask:</p>
        <p class="ask">"${Y(re.ask)}"</p>
        <p class="sub">If they're stuck, try:</p><ul>${re.hints.map(fe=>`<li>${Y(fe)}</li>`).join("")}</ul>
        ${re.note?`<p class="note">💡 ${Y(re.note)}</p>`:""}
        <details><summary>🔑 What really happens (just for you)</summary><p>${Y(re.answer)}</p></details></div>
        <div class="actions">${C()}<button class="link" data-act="next">Skip the talk</button><button class="chunky mint" data-act="talked">✅ We talked about it</button></div>`)}else if(ce==="handback")$("👉",`Pass it back to ${je(un())}!`,`Now it's ${je(un())}'s turn to guess what happens next.`,"I'm ready! 🙋");else if(ce==="predict")z(V.predict[+X],+X);else if(ce==="great"){yt.pick();const re=de.answers.filter(Boolean);y(`${T()}<div class="card child"><div class="ribbon gold">🌟 Great thinking, ${je(un())}!</div>
        ${re.length?`<p class="sub">You thought:</p><ul class="said">${re.map(fe=>`<li>${je(fe)}</li>`).join("")}</ul>`:""}
        <p class="big">Let's find out what really happened…</p></div>
        <div class="actions">${C()}<button class="chunky gold" data-act="next">✨ Let's find out!</button></div>`)}else if(ce==="reveal"){const re=V.reveal.map(Y).join('</p><p class="story">');y(`${T()}<div class="card read reveal"><div class="ribbon gold">✨ What happened</div>
        <p class="story">${re}</p>${w(re)}<p class="pages">📖 ${hn()}, read this aloud</p></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">What does Allah tell us? →</button></div>`),He.settings.narration&&Hi(En(re))}else if(ce==="ayah")y(`${T()}<div class="card ayah"><div class="ribbon dusk">🌙 What Allah tells us</div>
        ${V.ayat.map(re=>`<blockquote>${re.ar?`<p class="ar" lang="ar" dir="rtl">${re.ar}</p>`:""}<p>${je(re.text)}</p><cite>Qur'an · ${je(re.ref)}</cite></blockquote>`).join("")}
        ${V.hadith?`<div class="hadith"><b>From the Prophet <span class="honor">ﷺ</span>'s time</b><p>${Y(V.hadith.text)}</p><cite>${je(V.hadith.src)}</cite></div>`:""}
        <div class="explain"><span>👤 For ${hn()}: how to explain it</span><p>${Y(V.explain)}</p></div></div>
        <div class="actions">${C()}<button class="chunky" data-act="next">Let's talk about it →</button></div>`);else if(ce==="reflect"){const re=V.reflect;y(`${T()}<div class="card parent talk"><div class="ptag">💬 Talk together: ${hn()} &amp; ${je(un())}</div>
        <p class="ask">${Y(re.q)}</p>
        <p class="note">👤 For ${hn()}: ${Y(re.tip)}</p>
        <div class="apply"><b>🌱 Try it this week</b><p>${Y(re.apply)}</p></div></div>
        <div class="actions">${C()}<button class="link" data-act="next">Save it for tomorrow</button><button class="chunky mint" data-act="reflected">✅ We talked about it</button></div>`),He.settings.narration&&Hi(En(Y(re.q)))}else ce==="done"&&J()}function $(F,V,se,ce){s("panel",!1),t(),Be("coverEmoji").textContent=F,Be("coverTitle").innerHTML=V,Be("coverText").innerHTML=se,Be("coverBtn").innerHTML=ce,s("cover")}Be("coverBtn").addEventListener("click",()=>{s("cover",!1),P()});function z(F,V){const se=de.story,ce=Y=>Vi(Y,se);let X="";F.type==="choose"?X=`<div class="opts">${F.options.map((Y,re)=>`<button class="opt" data-act="opt" data-v="${je(Y.t)}"><span>${Y.e}</span>${je(Y.t)}</button>`).join("")}
        <button class="opt other" data-act="opt" data-v="Something else (said out loud)"><span>💭</span>Something else! (say it out loud)</button></div>`:F.type==="say"?X='<div class="mic">🗣️</div><button class="chunky gold wide" data-act="said">I said it!</button>':F.type==="emotion"?X=`<div class="feels">${Cv.map(Y=>`<button class="feel" data-act="feel" data-v="${je(Y.t)}"><span>${Y.e}</span>${je(Y.t)}</button>`).join("")}</div><p class="tiny">There are no wrong feelings.</p>`:F.type==="order"&&(X=`<div class="order">${j(F.cards.length).map(re=>{const fe=F.cards[re],ge=de.orderPick.indexOf(re);return`<button class="ocard ${ge>=0?"picked":""}" data-act="ord" data-i="${re}"><em>${ge>=0?ge+1:""}</em><span>${fe.e}</span>${je(fe.t)}</button>`}).join("")}</div>
        <p class="tiny">Tap the cards in the order you think. ${de.orderPick.length?'<button class="link inline" data-act="ordreset">Start again</button>':""}</p>
        ${de.orderPick.length===F.cards.length?`<button class="chunky gold wide" data-act="orddone">That's my order!</button>`:""}`),y(`${T()}<div class="card child"><div class="ribbon gold">🔮 ${je(un())}'s guess</div>
      <p class="big">${ce(F.prompt)}</p>${X}</div>
      <div class="actions">${C()}</div>`),He.settings.narration&&V===0&&Hi(En(ce(F.prompt)))}function j(F){const V=(de.story.id.length*7+de.ch*3)%5,se=[...Array(F).keys()];return F===4?[[2,0,3,1],[1,3,0,2],[3,1,2,0],[2,3,1,0],[1,0,3,2]][V]:se.reverse()}function ee(F){const V=de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]];de.answers[+de.steps[de.i].split(":")[1]]=F,He.journal.push({t:Date.now(),story:de.story.id,ch:de.ch,kind:"predict",text:`${En(Vi(V.prompt,de.story))} → ${F}`}),r(),yt.pick(),de.lock=!0;const se=document.querySelector("#panel .card");se==null||se.classList.add("yay"),setTimeout(P,450)}function J(){var ge,Ie;const F=de.story,V=(ge=He.progress)[Ie=F.id]||(ge[Ie]={done:[],finished:!1}),se=!V.done[de.ch];V.done[de.ch]=!0;const ce=F.chapters.every((Le,Ge)=>V.done[Ge]),X=ce&&!V.finished;X&&(V.finished=!0,He.newlyFinished=F.id),He.current=de.ch+1<F.chapters.length?{story:F.id,ch:de.ch+1,step:0}:null,r(),yt.done(),e.burst(16);const Y=F.chapters.map((Le,Ge)=>`<span class="lantern ${V.done[Ge]?"lit":""}" title="${je(Le.title)}">🏮</span>`).join(""),re=de.ch+1<F.chapters.length,fe=He.journal.filter(Le=>Le.story===F.id&&Le.kind==="predict").slice(-6);y(`${T()}<div class="card read done"><div class="ribbon gold">🌙 Chapter ${de.ch+1} complete!</div>
      <div class="lanterns">${Y}</div>
      ${ce?`<div class="added"><img src="${f(F.icon,!0)}" alt=""/><p><b>${je(F.name)} <span class="honor">${F.honor}</span>'s story ${X?"is added to":"is on"} your Story Trail!</b></p></div>
        ${fe.length?`<p class="sub">${je(un())}'s guesses in this story:</p><ul class="said">${fe.map(Le=>`<li>${je(Le.text)}</li>`).join("")}</ul>`:""}
        <p class="note">🌱 Tomorrow, ask ${je(un())} to tell <i>you</i> the story, or tell it to someone else in the family.</p>`:`<p>You've had <b>${He.talks}</b> conversations by the fire so far. ${se?"MashaAllah!":""}</p>
        <p class="note">This is a good place to stop for tonight. Your place is saved 🔖</p>`}</div>
      <div class="actions">${re?`<button class="link" data-act="home">Stop for tonight</button><button class="chunky" data-act="nextch">Next: ${je(F.chapters[de.ch+1].title)} →</button>`:'<button class="chunky gold" data-act="trail">📜 See the Story Trail</button>'}</div>`)}Be("panel").addEventListener("click",F=>{const V=F.target.closest("[data-act]");if(!V||de.lock)return;zi();const se=V.dataset.act;if(se==="next")P();else if(se==="back")A();else if(se==="trail")m();else if(se==="home")g();else if(se==="speak")Hi(V.dataset.text);else if(se==="talked")l("talk",En(Vi(de.story.chapters[de.ch].parent.ask,de.story))),P();else if(se==="reflected")l("reflect",En(Vi(de.story.chapters[de.ch].reflect.q,de.story))),P();else if(se==="opt")V.classList.add("chosen"),ee(V.dataset.v);else if(se==="feel")V.classList.add("chosen"),ee(`Feeling: ${V.dataset.v}`);else if(se==="said")ee("said it out loud");else if(se==="ord"){const ce=+V.dataset.i;de.orderPick.includes(ce)||(de.orderPick.push(ce),yt.tap()),z(de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]])}else if(se==="ordreset")de.orderPick=[],z(de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]]);else if(se==="orddone"){const ce=de.story.chapters[de.ch].predict[+de.steps[de.i].split(":")[1]],X=de.orderPick.map(Y=>ce.cards[Y].t).join(" → ");de.orderPick=[],ee(X)}else se==="nextch"&&S(de.story.id,de.ch+1)}),addEventListener("keydown",F=>{if(F.key==="ArrowRight"&&de.story&&!Be("panel").classList.contains("hidden")){const V=Be("panel").querySelector('.actions .chunky[data-act="next"]');V&&V.click()}});let ie=performance.now(),H=2;function ye(F){const V=Math.max(0,Math.min(.05,(F-ie)/1e3));ie=F,e.update(V),e.place==="camp"&&(H-=V,H<0&&(H=1.5+Math.random()*2.5,yt.crackle())),e.render(),requestAnimationFrame(ye)}requestAnimationFrame(ye),a(),g(),He.settings.setup||(Be("startBtn").textContent="Begin by the fire"),window.game={ready:!0,world:e,get state(){var F;return{i:de.story?de.story.id+de.ch+":"+de.i:null,step:de.steps[de.i],story:(F=de.story)==null?void 0:F.id,ch:de.ch,talks:He.talks,save:He}},start:(F,V=0)=>{zi(),He.settings.setup=!0,S(F,V)},next:P,openTrail:m,openJournal:p,toTitle:g,reset:()=>{Lv(),He=Th(),a(),g()}}}Uv();
